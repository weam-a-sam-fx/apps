const C='apps-v10',A=['core.css','core.js','fg.js','wf.js','data.json','fg.html','wf.html','fg-icon.svg','wf-icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const x=r.clone();caches.open(C).then(c=>c.put(e.request,x))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
