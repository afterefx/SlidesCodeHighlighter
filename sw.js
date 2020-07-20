/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ace.js",
    "revision": "e1ec2dda9ad25e3e4005b01372210e84"
  },
  {
    "url": "index.css",
    "revision": "d618b559fc60f4c3b6c41876d1ac3318"
  },
  {
    "url": "index.html",
    "revision": "7770c1bdcdaf855ae1289817ac876bd1"
  },
  {
    "url": "index.js",
    "revision": "68a9b4688c902a8602e51938dacdec80"
  },
  {
    "url": "jquery.min.js",
    "revision": "12108007906290015100837a6a61e9f4"
  },
  {
    "url": "material-colors.js",
    "revision": "62d4d679092da70d66e51aa2752aa17f"
  },
  {
    "url": "mode-text.js",
    "revision": "c01becee0a5e9e847c9dd4a789761925"
  },
  {
    "url": "prettify-languages.js",
    "revision": "12c936dae31dbf50cf7bbccf2132d2d8"
  },
  {
    "url": "prettify.js",
    "revision": "c1bdf5dd18d1da399f8df8eee1f5bfd7"
  },
  {
    "url": "theme-chrome.js",
    "revision": "52a070e8c00b6a9ef1137c1d7f9ecd97"
  },
  {
    "url": "themes.js",
    "revision": "e58e7b5fa162964d7811475d0231ceaf"
  },
  {
    "url": "webfontloader.js",
    "revision": "7e2893ef542a12a5c7207d438bfa87d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
