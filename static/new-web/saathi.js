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
  const IC={"aeps":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"></path><path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"></path><path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"></path><path d=\"M2 12a10 10 0 0 1 18-6\"></path><path d=\"M2 16h.01\"></path><path d=\"M21.8 16c.2-2 .131-5.354 0-6\"></path><path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"></path><path d=\"M8.65 22c.21-.66.45-1.32.57-2\"></path><path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"></path></svg>","remit":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\"></path><path d=\"m21.854 2.147-10.94 10.939\"></path></svg>","bills":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\"></path><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"></path><path d=\"M12 17.5v-11\"></path></svg>","travel":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8 6v6\"></path><path d=\"M15 6v6\"></path><path d=\"M2 12h19.6\"></path><path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"></path><circle cx=\"7\" cy=\"18\" r=\"2\"></circle><path d=\"M9 18h5\"></path><circle cx=\"16\" cy=\"18\" r=\"2\"></circle></svg>","pan":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 10h2\"></path><path d=\"M16 14h2\"></path><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"></path><circle cx=\"9\" cy=\"11\" r=\"2\"></circle><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"></rect></svg>","scheme":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\"></line><line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\"></line><line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\"></line><line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\"></line><line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\"></line><polygon points=\"12 2 20 7 4 7\"></polygon></svg>","jobs":"<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"i\" aria-hidden=\"true\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"></rect></svg>"};
  const S=[["aeps","Cash withdrawal (AEPS)","Micro ATM",4,5,"#0050C6"],["remit","Money transfer & remittance","Domestic & Indo-Nepal",1,15,"#038A01"],["bills","Bills & recharges","Electricity, mobile, DTH",4,2,"#E3141B"],["travel","Travel bookings","Bus & train tickets",0,20,"#E8A722"],["pan","PAN applications","New & corrections",0,30,"#0A1F44"],["scheme","Scheme & insurance help","Applications & enrolment",1,20,"#2A6FD6"],["jobs","Job referrals","Safe Jobs Connect",0,50,"#4CB84A"]];
  const rows=document.getElementById('rows');
  rows.innerHTML=S.map(([k,n,s,q,r,c])=>`<div class="crow"><div class="chip" style="background:${c}1a;color:${c}">${IC[k]}</div><div><b>${n}</b><small>${s}</small><input type="range" min="0" max="30" value="${q}" data-k="${k}" aria-label="${n} per day"></div><div class="num"><span id="q-${k}">${q}</span><small style="display:block;font-weight:600">per day</small></div><div class="rate">₹<input type="number" min="0" value="${r}" data-r="${k}" aria-label="${n} commission">/ea</div></div>`).join('');
  const fmt=v=>'₹'+Math.round(v).toLocaleString('en-IN');
  function calc(){
    const days=Math.max(1,Math.min(31,+document.getElementById('days').value||26));let tot=0,cust=0;const parts=[];
    S.forEach(([k,n,,, ,c])=>{const q=+rows.querySelector(`[data-k=${k}]`).value,r=+rows.querySelector(`[data-r=${k}]`).value||0;document.getElementById('q-'+k).textContent=q;const v=q*r*days;tot+=v;cust+=q*days;parts.push([n,v,c]);});
    document.getElementById('tot').textContent=fmt(tot);document.getElementById('perday').textContent=fmt(tot/days)+' per working day';
    document.getElementById('cust').textContent=cust.toLocaleString('en-IN');document.getElementById('yr').textContent=fmt(tot*12);
    document.getElementById('bar').innerHTML=parts.map(([n,v,c])=>`<i style="width:${tot?v/tot*100:0}%;background:${c}"></i>`).join('');
    document.getElementById('legend').innerHTML=parts.filter(p=>p[1]>0).map(([n,v,c])=>`<div style="display:flex;justify-content:space-between;gap:10px"><span><i style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${c};margin-right:6px"></i>${n}</span><b>${fmt(v)}</b></div>`).join('');
  }
  rows.addEventListener('input',calc);document.getElementById('days').addEventListener('input',calc);calc();
})();


(function(){const s=document.getElementById('slides'),d=document.getElementById('dots'),n=s.children.length;
  for(let i=0;i<n;i++){const b=document.createElement('i');b.onclick=()=>go(i);d.appendChild(b);}
  const step=()=>s.children[0].getBoundingClientRect().width+22;
  const cur=()=>Math.round(s.scrollLeft/step());
  const go=i=>{s.scrollTo({left:Math.max(0,Math.min(n-1,i))*step(),behavior:'smooth'});};
  const mark=()=>[...d.children].forEach((x,i)=>x.classList.toggle('on',i===cur()));
  s.addEventListener('scroll',()=>requestAnimationFrame(mark));mark();
  document.getElementById('prev').onclick=()=>go(cur()-1);document.getElementById('next').onclick=()=>go(cur()+1);
  let t=setInterval(()=>{const c=cur(),max=Math.round((s.scrollWidth-s.clientWidth)/step());go(c>=max?0:c+1);},4500);
  s.addEventListener('pointerdown',()=>clearInterval(t));})();


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