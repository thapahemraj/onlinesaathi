(function(){
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
    (function(){const t=document.getElementById('tv');const c=['#0050C6','#038A01','#E3141B','#0A1F44','#2A6FD6'];let h='';for(let i=0;i<100;i++)h+='<i style="background:'+c[i%5]+';opacity:'+(0.55+((i*37)%45)/100)+';animation:fade .5s '+(i*0.015)+'s both"></i>';t.innerHTML=h;})();

(function(){
  const WA="919099005251";
  // reveal + counters + charts
  const fire=el=>{
    el.classList.add('in');
    el.querySelectorAll('[data-count]').forEach(c=>{ if(c.dataset.done)return; c.dataset.done=1; const t=+c.dataset.count,pre=c.dataset.pre||'',suf=c.dataset.suf||'',t0=performance.now();
      (function f(n){const p=Math.min(1,(n-t0)/1500),v=Math.round(t*(1-Math.pow(1-p,3)));c.textContent=pre+v.toLocaleString('en-IN')+suf;if(p<1)requestAnimationFrame(f);})(t0); });
    el.querySelectorAll('[data-dash]').forEach(c=>c.style.strokeDasharray=c.dataset.dash);
  };
  document.querySelectorAll('[data-dash]').forEach(c=>c.style.strokeDasharray='0 999');
  const els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){ const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){fire(e.target);io.unobserve(e.target);}}),{threshold:.12}); els.forEach(e=>io.observe(e)); }
  else els.forEach(fire);
  // safety net: if animations don't start (some previewers), show everything
  setTimeout(()=>{ if(!document.querySelector('.reveal.in')) els.forEach(fire); },1200);
  // sub-nav scrollspy
  const sn=document.getElementById('subnav');
  if(sn){ const links=[...sn.querySelectorAll('a')], tg=links.map(a=>document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
    const spy=()=>{ let k=0; tg.forEach((t,i)=>{ if(t.getBoundingClientRect().top<200) k=i; }); links.forEach((a,i)=>a.classList.toggle('on',i===k)); const on=links[k]; if(on) sn.firstElementChild.scrollTo({left:on.offsetLeft-20,behavior:'smooth'}); };
    addEventListener('scroll',()=>requestAnimationFrame(spy),{passive:true}); spy(); }
  // rotating words
  document.querySelectorAll('.rot[data-words]').forEach(r=>{ const w=r.dataset.words.split('|'); let i=0; setInterval(()=>{i=(i+1)%w.length; r.innerHTML='<span>'+w[i]+'</span>';},2200); });
  // theme
  const root=document.documentElement;
  try{const s=localStorage.getItem('os-theme'); if(s) root.dataset.theme=s;}catch(e){}


  // forms -> WhatsApp
  document.querySelectorAll('form[data-form]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault(); const L=['*'+f.dataset.form+'* (via website)']; new FormData(f).forEach((v,k)=>{if(String(v).trim())L.push(k+': '+v);});
    window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(L.join('\n')),'_blank','noopener'); const ok=f.querySelector('.ok'); if(ok) ok.style.display='block'; f.reset();
  }));

})();

  })();