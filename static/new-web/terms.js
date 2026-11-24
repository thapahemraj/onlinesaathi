
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
  document.getElementById('theme').onclick=()=>{const d=root.dataset.theme? root.dataset.theme==='dark' : matchMedia('(prefers-color-scheme: dark)').matches; root.dataset.theme=d?'light':'dark'; try{localStorage.setItem('os-theme',root.dataset.theme);}catch(e){}};
  document.getElementById('burger').onclick=()=>document.getElementById('mobile').classList.toggle('open');
  // forms -> WhatsApp
  document.querySelectorAll('form[data-form]').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();  const L=['*'+f.dataset.form+'* (via website)']; new FormData(f).forEach((v,k)=>{if(String(v).trim())L.push(k+': '+v);});
    window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(L.join('\n')),'_blank','noopener'); const ok=f.querySelector('.ok'); if(ok) ok.style.display='block'; f.reset();
  }));
  
})();
