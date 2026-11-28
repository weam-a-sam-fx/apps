const C='apps-v58',A=['core.css','core.js','fg.js','wf.js','data.json','fg.html','wf.html','fg-icon.svg','wf-icon.svg','index.html','privacy.html','wf.webmanifest','fg.webmanifest','news.json','offers.json','affiliates.json','changes.json','member.json','fgdir.json','analyses.json'];
const S=new Set(['core.css','core.js','fg.js','wf.js','fg.html','wf.html','index.html','privacy.html','fg-icon.svg','wf-icon.svg','wf.webmanifest','fg.webmanifest']);
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>0)))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
const put=(q,r)=>{if(r&&r.ok){const x=r.clone();caches.open(C).then(c=>c.put(q,x))}return r};
const off=q=>caches.match(q,{ignoreSearch:true}).then(m=>m||(q.mode==='navigate'?caches.match(/fg/.test(q.url)?'fg.html':'wf.html'):undefined));
self.addEventListener('fetch',e=>{const q=e.request,u=new URL(q.url);if(q.method!=='GET'||u.origin!==location.origin)return;const f=u.pathname.split('/').pop()||'index.html',st=u.pathname.split('/').length<=3&&S.has(f);
if(st){e.respondWith(caches.match(q,{ignoreSearch:true}).then(m=>{const n=fetch(q,{cache:'no-cache'}).then(r=>put(q,r)).catch(()=>m);if(m){e.waitUntil(n.catch(()=>0));return m}return n}))}
else{e.respondWith(fetch(q,{cache:'no-cache'}).then(r=>put(q,r)).catch(()=>off(q)))}});
