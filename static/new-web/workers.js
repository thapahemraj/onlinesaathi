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

(function(){
  const WA="919099005251";
  const S={eshram:['e-Shram registration','National database ID for unorganised workers (age 16–59) — the gateway to many welfare benefits.','c-blue','id'],
    pmsby:['PM Suraksha Bima Yojana','Low-cost accident insurance for bank account holders aged 18–70.','c-green','shield'],
    pmjjby:['PM Jeevan Jyoti Bima Yojana','Affordable life insurance for bank account holders aged 18–50.','c-green','shield'],
    sym:['PM Shram Yogi Maandhan','Voluntary pension scheme for unorganised workers who join between 18 and 40.','c-amber','pension'],
    apy:['Atal Pension Yojana','Guaranteed pension from age 60 for those who join between 18 and 40.','c-amber','pension'],
    bocw:['Construction Workers Welfare Board','State BOCW board registration for education, health, maternity and accident benefits.','c-red','hammer'],
    onorc:['One Nation One Ration Card','Collect your ration from any fair price shop in India, wherever you work.','c-blue','cart'],
    svanidhi:['PM SVANidhi','Working-capital loans for street vendors, with interest subsidy on timely repayment.','c-green','wallet'],
    pmjay:['Ayushman Bharat PM-JAY','Health cover for eligible families — check your eligibility with your Saathi.','c-red','heart'],
    remit:['Safe remittance home','Send money to your family securely through Online Saathi partners.','c-blue','send']};
  const IC={"sparkles":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"></path><path d=\"M20 3v4\"></path><path d=\"M22 5h-4\"></path><path d=\"M4 17v2\"></path><path d=\"M5 18H3\"></path></svg>","id":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 10h2\"></path><path d=\"M16 14h2\"></path><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"></path><circle cx=\"9\" cy=\"11\" r=\"2\"></circle><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"></rect></svg>","shield":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path><path d=\"m9 12 2 2 4-4\"></path></svg>","pension":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z\"></path><path d=\"M2 9v1c0 1.1.9 2 2 2h1\"></path><path d=\"M16 11h.01\"></path></svg>","hammer":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9\"></path><path d=\"m18 15 4-4\"></path><path d=\"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5\"></path></svg>","cart":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"21\" r=\"1\"></circle><circle cx=\"19\" cy=\"21\" r=\"1\"></circle><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"></path></svg>","wallet":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path></svg>","heart":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"></path><path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"></path></svg>","send":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path></svg>"}; const ans={};
  document.querySelectorAll('.opts').forEach(g=>g.addEventListener('click',e=>{const b=e.target.closest('.opt');if(!b)return;g.querySelectorAll('.opt').forEach(x=>x.classList.toggle('on',x===b));ans[g.dataset.q]=b.dataset.v;render();}));
  function render(){const out=document.getElementById('results');
    if(!ans.work||!ans.age||!ans.mig){out.innerHTML='<div class="empty">'+IC.sparkles+'<br>Answer all three questions to see suggested schemes.</div>';return;}
    const a=ans.age,l=[]; if(a!=='60+'){l.push('eshram','pmsby');} if(a==='18-40'||a==='41-50')l.push('pmjjby'); if(a==='18-40')l.push('sym','apy');
    if(ans.work==='construction')l.push('bocw'); if(ans.work==='vendor')l.push('svanidhi'); if(ans.mig==='yes')l.push('onorc','remit'); l.push('pmjay');
    out.innerHTML='<p style="font-weight:700">'+l.length+' schemes and services you may be able to use:</p>'+l.map(k=>{const s=S[k];return '<div class="res"><div class="chip '+s[2]+'">'+IC[s[3]]+'</div><div><b>'+s[0]+'</b><p>'+s[1]+'</p></div></div>';}).join('')+'<a class="btn btn-green" style="margin-top:6px" target="_blank" rel="noopener" href="https://wa.me/'+WA+'?text='+encodeURIComponent('Namaste! Please help me apply for: '+l.map(k=>S[k][0]).join(', '))+'">'+IC.send+' Get help applying</a>';}
})();


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