if(!self.define){let e,d={};const r=(r,a)=>(r=new URL(r+".js",a).href,d[r]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=d,document.head.appendChild(e)}else e=r,importScripts(r),d()})).then((()=>{let e=d[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(d[f])return;let c={};const n=e=>r(e,f),s={module:{uri:f},exports:c,require:n};d[f]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(i(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"c1672acf65d9566f4c19cfd46acfbb1a"},{url:"946.bundle.js",revision:"c7dadaef0843242e4894d3f408009d23"},{url:"app.webmanifest",revision:"0328bc914aae19bd21dbf7bf42464a35"},{url:"app~309f7e27.bundle.js",revision:"510688ac7227e2be1b77ea7594b34bc0"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~4e5ec22b.bundle.js",revision:"0f1c45a7157f026c80d4bc839c94df3c"},{url:"app~a51fa3f5.bundle.js",revision:"7baea6f983736341cdcbb93481844968"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"092566464eaf0478335c2940ecead63a"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"5acdb2913d6d98110b420eba026e8ad9"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/warteg-dark_128x128.jpg",revision:"90e063cad58d39430584438ded9605e0"},{url:"icons/warteg-dark_144x144.jpg",revision:"12201d0582c7955cce9a8e2dab55f541"},{url:"icons/warteg-dark_152x152.jpg",revision:"de54531d8b833ced9027b4fb148aead1"},{url:"icons/warteg-dark_192x192.jpg",revision:"7f1032fe3723b8f2994f04de7b18e42c"},{url:"icons/warteg-dark_384x384.jpg",revision:"594c767175afb405d819ae908f714488"},{url:"icons/warteg-dark_512x512.jpg",revision:"f5c4d060f2c1cee2f8d4e008fee11def"},{url:"icons/warteg-dark_72x72.jpg",revision:"adf7684bd67cf69b6107b38cfbd15dd4"},{url:"icons/warteg-dark_96x96.jpg",revision:"40d5107bb238bc0959abe14e9ce3ebe0"},{url:"index.html",revision:"ebe8b295d966cc9235429e8962d5026f"},{url:"logo/warteg-dark.jpg",revision:"384da571bc0c135a9a7d85184e30d3b2"},{url:"logo/warteg.png",revision:"5af17170cb1bbad252f45beda03dc9f1"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
