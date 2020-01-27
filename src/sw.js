//created sw
importScripts("workbox-v3.6.3/workbox-sw.js")  //import from local, rather than cdn

//find all dependent submodules off local file rather than cdn
workbox.setConfig({modulePathPrefix: 'workbox-v3.6.3/'})

//array variable
const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precheManifest);