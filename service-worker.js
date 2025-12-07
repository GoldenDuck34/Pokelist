const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  './index.html',
  './alola.js',
  './bd-sp.json',
  './black-white.html',
  './black2-white2.html',
  './brilliantdiamond-shiningpearl.html',
  './circle.png',
  './crystal.html',
  './diamond-pearl.html',
  './double_checkbox.css',
  './emerald.html',
'./favicon.png',
  './favicon-19.png',
  './favicon-50.png',
  './firered-leafgreen.html',
  './gold-silver.html',
  './heartgold-soulsilver.html',
  './home.css',
  './home.js',
  './letsgo.html',
  './letsgo.json',
  './manifest.json',
  './omegaruby-alphasapphire.html',
  './pla.html',
  './pla.json',
  './platinum.html',
  './plza.html',
  './plza.json',
  './red-blue.html',
  './ruby-sapphire.html',
  './scarlet-violet.html',
  './script.js',
  './single_checkbox.css',
  './style.css',
  './sun-moon.html',
  './sv.js',
  './sv.json',
  './sword-shield.js',
  './sword-shield.json',
  './sword-shield.html',
  './ultra-alola.js',
  './ultra-sun-ultra-moon.html',
  'x-y.html',
  'xy.js',
  'yellow.html'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
