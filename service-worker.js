importScripts("/precache-manifest.d02a0706b6add8d8f7985a5b20ead1ac.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({
  prefix: 'drb-cp',
  suffix: 'v0.1.1',
  precache: 'install-time',
  runtime: 'run-time',
});
workbox.core.setCacheNameDetails({ prefix: 'dt-cp' });

workbox.skipWaiting();
workbox.clientsClaim();

// TODO: Optimise for precaching only assets relevant to the current view port
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute('./index.html', {
  blacklist: [],
});

// TODO: Precache responsive assets on a need by basis
// TODO: Handle offline state better
// TODO: Runtime cache for UI config API result

