// Import the approved HTML design without changing its markup or content.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const parse5 = require('parse5');
const findClass = (node, name) => node.attrs?.some(a => a.name === 'class' && a.value.split(/\s+/).includes(name)) ? node : (node.childNodes || []).map(child => findClass(child, name)).find(Boolean);
const outerHtml = node => parse5.serialize({childNodes:[node]});
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'content/new-web');
const read = name => JSON.parse(fs.readFileSync(path.join(source, 'data', name + '.json'), 'utf8'));
const settings = read('settings');
const global = read('global');
const uploadedSource = path.join(root, 'content/web-content');

const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const routes = {index:'/', about:'/about/', history:'/history/', workers:'/workers/', saathi:'/saathi/', business:'/business/', team:'/team/', contact:'/contact/', terms:'/terms/', privacy:'/privacy/', refund:'/refund/'};
const aliases = {about:['about-us'], terms:['terms-condition'], privacy:['privacy-policy'], refund:['refund-policy']};
for (const [page, route] of Object.entries(routes)) {
  const uploadedFile = path.join(uploadedSource, page+'.html');
  const dataFile = path.join(source, 'data', 'page-' + page + '.json');
  const data = fs.existsSync(dataFile) ? read('page-' + page) : { order: [], regions: {} };
  let first = true;
  const main = (data.order || Object.keys(data.regions)).filter(id => !(data.hidden || []).includes(id)).map(id => data.regions[id] || '').join('\n');
  let html = fs.existsSync(uploadedFile)
    ? fs.readFileSync(uploadedFile, 'utf8')
    : fs.readFileSync(path.join(source, 'templates', page + '.html'), 'utf8').replace(/\{\{region:([\w-]+)\}\}/g, (_, id) => {
      if (id === '_footer') return '';
      if (id.startsWith('_')) return global.regions[id] || '';
      if (!first) return '';
      first = false;
      return main;
    });
  let seo = settings.seo[page];
  if (fs.existsSync(uploadedFile)) {
    const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#039;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    seo = {
      title: decode(html.match(/<title>([\s\S]*?)<\/title>/i)[1]),
      description: decode(html.match(/<meta name="description" content="([^"]*)"/i)[1]),
    };
    html = html.replace(/(<a\b[^>]*class="(?:brand|flogo)"[^>]*>[\s\S]*?<img\b[^>]*src=")[^"]*(")/i, '$1/new-web/logo.svg$2');
    html = html.replace(/href="https:\/\/play\.google\.com[^\"]*"/g, 'href="'+escape(settings.site.playstore)+'"');
  }
  const calc = settings.calc.map((r,i) => [r.key.replace(/[^a-z]/g,'' )+'_'+i,r.name,r.sub,r.per_day,r.rate,r.color]);
  html = html.replace('{{json:calc}}', JSON.stringify(calc)).replaceAll('{{json:whatsapp}}', JSON.stringify(settings.site.whatsapp));
  html = html.replace(/\{\{url:([\w]+)\}\}/g, (_,k) => escape(encodeURIComponent(settings.site[k] || '').replace(/%20/g,'+')));
  html = html.replace(/\{\{([\w]+)\}\}/g, (_, k) => escape(k === 'seo_title' ? settings.seo[page].title : k === 'seo_desc' ? settings.seo[page].description : k === 'ver' ? '1' : settings.site[k] ?? '{{'+k+'}}'));
  html = html.replace(/(href|src)="assets\//g, '$1="/new-web/');
  html = html.replace(/href="(?:\.\/)?(index|about|history|workers|saathi|business|team|contact|terms|privacy|refund)\.(?:php|html)([?#][^"]*)?"/g, (_, id, suffix) => `href="${routes[id]}${suffix || ''}"`).replaceAll('href="./"','href="/"');
  html = html.replace(/<a href="([^\"]+)" class="">/g, (all, href) => href === route ? `<a href="${href}" class="on" aria-current="page">` : all);
  if (/\{\{/.test(html)) throw new Error('Unresolved template token: ' + page);
  const scripts = [];
  const body = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').match(/<body>([\s\S]*?)<\/body>/i)[1].replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, (_, js) => {scripts.push(js);return '';});
  // The existing Gatsby host does not run PHP. Forms retain their supplied WhatsApp handoff.
  let js = scripts.join('\n').replace(/try\{const fd=new FormData\(f\);[\s\S]*?catch\(_\)\{\}/g, '');
  js = js.replace(/document\.getElementById\('theme'\)\.onclick=[^\n]+/g, '').replace(/document\.getElementById\('burger'\)\.onclick=[^\n]+/g, '');
  js = `(function(){
    const scope = window.document.querySelector('.uploaded-sections');
    if (!scope) return;
    const intervals=[], timeouts=[], listeners=[], observers=[];
    const document = new Proxy(window.document, {get(target,key){
      if (key === 'querySelector' || key === 'querySelectorAll') return scope[key].bind(scope);
      if (key === 'getElementById') return id => scope.querySelector('#'+CSS.escape(id));
      const value=Reflect.get(target,key,target); return typeof value === 'function' ? value.bind(target) : value;
    }});
    const setInterval=(fn,ms)=>{const id=window.setInterval(fn,ms);intervals.push(id);return id};
    const setTimeout=(fn,ms)=>{const id=window.setTimeout(fn,ms);timeouts.push(id);return id};
    const addEventListener=(...args)=>{window.addEventListener(...args);listeners.push(args)};
    const IntersectionObserver=window.IntersectionObserver && class extends window.IntersectionObserver {constructor(...args){super(...args);observers.push(this)}};
    scope.disposeImportedContent=()=>{intervals.forEach(window.clearInterval);timeouts.forEach(window.clearTimeout);listeners.forEach(args=>window.removeEventListener(...args));observers.forEach(observer=>observer.disconnect())};
    ${js}
  })();`.replace(/[ \t]+$/gm, '');
  new vm.Script(js, {filename:page+'.js'});
  const footer = body.match(/<footer\b[^>]*>[\s\S]*?<\/footer>/i)?.[0] || '';
  let mainBody = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)[1];
  if (page === 'index') {
    const fragment = parse5.parseFragment(mainBody);
    const hero = findClass(fragment, 'hero');
    const grid = findClass(hero, 'hero-grid');
    const columns = grid.childNodes.filter(node => node.tagName);
    const heroData = { copy: parse5.serialize(columns[0]), map: outerHtml(columns[1]) };
    fs.writeFileSync(path.join(root, 'src/data/new-web/hero.json'), JSON.stringify(heroData, null, 2)+'\n');
    hero.parentNode.childNodes = hero.parentNode.childNodes.filter(node => node !== hero);
    mainBody = parse5.serialize(fragment);
  }
  mainBody = mainBody.replace(/<div\b[^>]*class="crumb"[^>]*>[\s\S]*?<\/div>/gi, '');
  mainBody = mainBody.replace(/<h1\b/g, '<h2').replace(/<\/h1>/g, '</h2>');
  fs.writeFileSync(path.join(root,'static/new-web',page+'.js'), js);
  fs.writeFileSync(path.join(root,'src/data/new-web',page+'.json'), JSON.stringify({body, mainBody, footer, ...seo, route, script:'/new-web/'+page+'.js'}, null, 2)+'\n');
  for (const slug of [page, ...(aliases[page] || [])]) {
    fs.writeFileSync(path.join(root,'src/pages',slug+'.js'), `import React from "react"\nimport NewWebsite, { NewWebsiteHead } from "../components/NewWebsite"\nimport content from "../data/new-web/${page}.json"\nexport default function Page() { return <NewWebsite content={content} /> }\nexport function Head() { return <NewWebsiteHead content={content} /> }\n`);
  }
}
console.log('Imported new pages with their supplied footer content and legal-page routes.');

// Keep legacy page CSS out of the new design's global CSS bundle.
const legacy = path.join(root, 'static/legacy-theme');
fs.cpSync(path.join(root, 'src/styles'), legacy, {
  recursive: true,
  filter: (input, output) => fs.statSync(input).isDirectory() || !fs.existsSync(output) || !fs.readFileSync(input).equals(fs.readFileSync(output)),
});
const vendorStyles = {
  accordion: 'react-accessible-accordion/dist/fancy-example.css',
  lightbox: 'react-18-image-lightbox/style.css',
  aos: 'aos/dist/aos.css',
  swiper: 'swiper/swiper-bundle.min.css',
};
for (const [name, file] of Object.entries(vendorStyles)) {
  const input = path.join(root, 'node_modules', file);
  if (fs.existsSync(input)) fs.copyFileSync(input, path.join(legacy, 'css', name+'.css'));
}

// Reuse the original brand asset rather than the supplied replacement logo.
fs.copyFileSync(path.join(root, 'src/images/gallery/logo.svg'), path.join(root, 'static/new-web/logo.svg'));

// Scope the existing theme to the original footer so its appearance is retained
// without applying Bootstrap and the old theme to the new page body.
const postcss = require('postcss');
const footerCss = ['bootstrap.min', 'boxicons.min', 'animate.min', 'aos', 'swiper', 'accordion', 'lightbox', 'style', 'responsive'].map(name => {
  const input = path.join(legacy, 'css', name+'.css');
  if (!fs.existsSync(input)) return '';
  const sheet = postcss.parse(fs.readFileSync(input, 'utf8'));
  sheet.walkAtRules('charset', rule => rule.remove());
  sheet.walkRules(rule => {
    let parent = rule.parent;
    while (parent) {
      if (parent.type === 'atrule' && /keyframes$/.test(parent.name)) return;
      parent = parent.parent;
    }
    rule.selectors = rule.selectors.map(selector => {
      if (selector === ':root' || selector === 'body' || selector === 'html') return ':is(.legacy-footer, .legacy-content)';
      return ':is(.legacy-footer, .legacy-content) ' + selector;
    });
  });
  return sheet.toString();
}).join('\n');
fs.writeFileSync(path.join(legacy, 'css/footer.css'), footerCss + '\n.legacy-footer,.legacy-content{font-family:"Nunito",sans-serif;font-size:17px;line-height:1.5;color:#212529;text-align:left}\n');

// The new design's generic footer/ul rules must never affect the original footer.
const uploadedHome = path.join(uploadedSource, 'index.html');
const designCss = fs.existsSync(uploadedHome)
  ? [...fs.readFileSync(uploadedHome, 'utf8').matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(match => match[1]).join('\n')
  : fs.readFileSync(path.join(source, 'site.css'), 'utf8');
const newCss = postcss.parse(designCss);
// The shared toggle owns theme selection; imported OS media rules cannot override it.
newCss.walkAtRules('media', rule => { if (rule.params.includes('prefers-color-scheme')) rule.remove(); });
newCss.walkRules('body', rule => { rule.append({prop:'margin', value:'0'}); rule.append({prop:'padding', value:'0'}); });
newCss.walkRules(rule => {
  let parent = rule.parent;
  while (parent) {
    if (parent.type === 'atrule' && /keyframes$/.test(parent.name)) return;
    parent = parent.parent;
  }
  rule.selectors = rule.selectors.map(selector => {
    if (selector === ':root' || selector === 'body') return '.imported-content';
    if (selector.includes(':root')) return selector.replace(/:root(?::not\([^)]*\))?/g, 'html').replace(/(html(?:\[[^\]]*\])?)/, '$1 .imported-content');
    if (selector === 'html') return '.imported-content';
    if (selector.startsWith('.js ')) return '.js .imported-content ' + selector.slice(4);
    return '.imported-content ' + selector;
  });
});
fs.writeFileSync(path.join(root, 'static/new-web/site.css'), newCss.toString());

// Preserve background imagery referenced by the original theme CSS.
const originalCss = fs.readFileSync(path.join(root, 'src/styles/css/style.css'), 'utf8');
for (const match of originalCss.matchAll(/url\((?:["'])?\.\.\/\.\.\/images\/([^)'"?]+)(?:["'])?\)/g)) {
  const input = path.join(root, 'src/images', match[1]);
  const output = path.join(root, 'static/images', match[1]);
  if (fs.existsSync(input) && (!fs.existsSync(output) || !fs.readFileSync(input).equals(fs.readFileSync(output)))) {
    fs.mkdirSync(path.dirname(output), {recursive:true});
    fs.copyFileSync(input, output);
  }
}
