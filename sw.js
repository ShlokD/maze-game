importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');


if(workbox) {
  workbox.routing.registerRoute(
    new RegExp('\\.js$'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'js-cache'
    })
  );

  workbox.routing.registerRoute(
    new RegExp('\\.css$'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'css-cache',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('\\maze-game\$'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'html-cache',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('\\.(ico|png)$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'assets-cache',
    })
  );
  
}