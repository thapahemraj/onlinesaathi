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

  })();