
const CACHE_NAME='jlpt-n4-pro';

const urlsToCache=[
'./',
'./index.html',
'./words.js',
'./manifest.json'
];

self.addEventListener('install',event=>{
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache=>cache.addAll(urlsToCache))
);
});

self.addEventListener('fetch',event=>{
event.respondWith(
caches.match(event.request)
.then(response=>response||fetch(event.request))
);
});
