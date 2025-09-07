const CACHE = "exam-alerts-v1";
self.addEventListener("install", e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll([
    "./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"
  ])));
  self.skipWaiting();
});
self.addEventListener("activate", e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e=>{
  const {request} = e;
  if (request.method!=="GET") return;
  e.respondWith(
    caches.match(request).then(r=> r || fetch(request).then(res=>{
      if (new URL(request.url).origin===location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c=>c.put(request, copy));
      }
      return res;
    }).catch(()=>r))
  );
});
