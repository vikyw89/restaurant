(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),d=t(667),s=t.n(d),c=new URL(t(122),t.b),l=i()(a()),p=s()(c);l.push([e.id,"* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    /* outline: white 1px solid; */\n}\n\n:root {\n    --darkreader-neutral-background: #131516;\n    --darkreader-neutral-text: #d8d4cf;\n    --darkreader-selection-background: #004daa;\n    --darkreader-selection-text: #e8e6e3;\n    --darkreader-neutral-background-transparent:#131516d5;\n}\n\nbody {\n    background-color: var(--darkreader-neutral-background);\n    color: var(--darkreader-neutral-text);\n    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.Controller {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    background-image: url("+p+");\n    z-index: -1;\n    transition: 0.5s;\n}\n\n.Header {\n    display: flex;\n    justify-content: center;\n    padding: 20px;\n    gap: 20px;\n    transition: 2s;\n    font-size: 1.5rem;\n    background-color: var(--darkreader-neutral-background-transparent);\n}\n\n.Header > * {\n    user-select: none;\n}\n\n.Header > *:hover {\n    transition: 0.5s;\n    border-bottom: 2px solid white;\n}\n\n.Main {\n    flex: 1;\n    transition: 2s;\n}\n\n.HomeContent, .MenuContent, .ContactContent {\n    display: flex;\n    padding: 20px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap:20px;\n}\n\n.HomeContent > *,\n.MenuContent > *,\n.ContactContent > * {\n    padding:10px;\n    background-color: var(--darkreader-neutral-background-transparent);\n}\n\n.Footer {\n    transition: 2s;\n    padding: 20px;\n    font-size: 1.2rem;\n    display: flex;\n    justify-content: center;\n    background-color: var(--darkreader-neutral-background-transparent)\n}\n\n.HomeTitleContainer {\n    font-size: 1.5rem;\n    font-weight: bolder;\n}\n\n.ReviewContainer {\n    display:grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    grid-auto-rows: auto;\n    font-weight: bold;\n    transition: 1s;\n    gap:10px\n}\n\n.ReviewCard {\n    display: grid;\n    transition: 1s;\n}\n\n.ReviewerName {\n    text-align: end;\n}\n\n.HoursContainer {\n    display: grid;\n    gap:10px;\n}\n\n.LocationContainer {\n    gap:10px;\n}\n\n.Location {\n    padding: 10px;\n}\n\n.MenuTitle {\n    padding: 10px;\n    font-size: 1.5rem;\n}\n\n.BeveragesContainer {\n    display: grid;\n    gap:10px;\n}\n\n.BeverageCard {\n    display:grid;\n    grid-template-columns: 1fr auto;\n    gap:10px;\n}\n\n.ContactContent {\n    display: grid;\n    gap:20px;\n    justify-content: center;\n}\n\n.ContactCardContainer {\n    display: grid;\n    gap:10px;\n}\n\n",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var s=e[d],c=r.base?s[0]+r.base:s[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var v=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var s=r(e,a),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},122:(e,n,t)=>{e.exports=t.p+"989fcd31422e231f1d49.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),d=t(565),s=t.n(d),c=t(216),l=t.n(c),p=t(589),u=t.n(p),m=t(426),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),n()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const C=window.localStorage,f=()=>+C.count,h=e=>(C.count=e,+C.count),g=()=>JSON.parse(C.reviews),x=()=>JSON.parse(C.contacts);var y;h(0),y=["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"],C.hours=JSON.stringify(y),JSON.parse(C.hours),C.reviews=JSON.stringify([{name:"Irene",review:"Irene's has the best porridge!"},{name:"Irena",review:"Yum.. Yum.."},{name:"Irenelle",review:"This is exactly the kind of place that I like to return to again and again."}]),JSON.parse(C.reviews),C.menu=JSON.stringify({beverages:[{name:"Espresso",price:"1.75"},{name:"Tazo Hot Tea",price:"2.50"},{name:"Caffe Americano",price:"2.25"},{name:"Hot Chocolate",price:"2.75"}],sides:[{name:"Samosa",price:"1.20"},{name:"Green Salad",price:"0.99"},{name:"Kebab Wrap",price:"2.99"}],main:[{name:"Braised Sirloin",price:"9.00"},{name:"Nova Scottia Pan Seared Haddock",price:"14.00"},{name:"Cranberry Wallnut Crusted Salmon",price:"17.00"}]}),JSON.parse(C.menu),C.contacts=JSON.stringify([{name:"Irene",position:"CEO",phone:"999-123-4141",email:"irene@email.com"},{name:"Irena",position:"CEO too",phone:"999-123-4141",email:"irena@email.com"},{name:"Irenelle",position:"yes, CEO too",phone:"999-123-4141",email:"irenelle@email.com"}]),JSON.parse(C.contacts);const b=e=>{const n=document.createElement("div");return n.classList.add("HomeContent"),n.appendChild(E(e)),n.appendChild(L(e)),n.appendChild(k(e)),n.appendChild(H(e)),n},E=e=>{const n=document.createElement("div");return n.classList.add("HomeTitleContainer"),n.textContent="Irene's Restaurant",n},L=e=>{const n=document.createElement("div");return n.classList.add("ReviewContainer"),n.textContent="Reviews",n.appendChild(w(e,g()[f()].name,g()[f()].review)),setInterval((()=>{n.removeChild(n.lastChild),n.appendChild(w(e,g()[f()].name,g()[f()].review)),h((f()+1)%g().length)}),3e3),n},w=(e,n,t)=>{const r=document.createElement("div");return r.classList.add("ReviewCard"),r.appendChild(M(e,t)),r.appendChild(S(e,n)),r},S=(e,n)=>{const t=document.createElement("div");return t.classList.add("ReviewerName"),t.textContent=`~${n}`,t},M=(e,n)=>{const t=document.createElement("div");return t.classList.add("ReviewerContent"),t.textContent=n,t},k=e=>{const n=document.createElement("div");n.classList.add("HoursContainer");for(let t of JSON.parse(C.hours))n.appendChild(T(e,t));return n},T=(e,n)=>{const t=document.createElement("div");return t.classList.add("Hours"),t.textContent=n,t},H=e=>{const n=document.createElement("div");return n.classList.add("LocationContainer"),n.textContent="Our Location",n.appendChild(O(e)),n},O=e=>{const n=document.createElement("div");return n.classList.add("Location"),n.textContent="Imus, Cavite",n},N=e=>{const n=document.createElement("div");n.classList.add("BeverageCard");for(let t of JSON.parse(C.menu).beverages)n.appendChild(I(e,t.name)),n.appendChild(R(e,t.price));return n},I=(e,n)=>{const t=document.createElement("div");return t.classList.add("BeverageCardName"),t.textContent=n,t},R=(e,n)=>{const t=document.createElement("div");return t.classList.add("BeverageCardPrice"),t.textContent=n,t},J=(e,n,t,r,a)=>{const o=document.createElement("div");return o.classList.add("ContactCard"),o.appendChild(j(e,n)),o.appendChild(B(e,t)),o.appendChild(P(e,r)),o.appendChild(U(e,a)),o},j=(e,n)=>{const t=document.createElement("div");return t.classList.add("ContactCardName"),t.textContent=n,t},B=(e,n)=>{const t=document.createElement("div");return t.classList.add("ContactCardPosition"),t.textContent=n,t},P=(e,n)=>{const t=document.createElement("div");return t.classList.add("ContactCardPhone"),t.textContent=n,t},U=(e,n)=>{const t=document.createElement("div");return t.classList.add("ContactCardEmail"),t.textContent=n,t},z=(document.createElement("div"),e=>{const n=document.createElement("div");return n.classList.add("Home"),n.textContent="Home",n.addEventListener("pointerdown",(e=>{const n=document.querySelector(".Main");n.innerHTML="",n.appendChild(b(e))})),n}),A=e=>{const n=document.createElement("div");return n.classList.add("Menu"),n.textContent="Menu",n.addEventListener("pointerdown",(e=>{const n=document.querySelector(".Main");n.innerHTML="",n.appendChild((e=>{const n=document.createElement("div");return n.classList.add("MenuContent"),n.appendChild((e=>{const n=document.createElement("div");return n.classList.add("MenuTitle"),n.textContent="Our Menu",n})()),n.appendChild((e=>{const n=document.createElement("div");return n.classList.add("BeveragesContainer"),n.textContent="Beverages",n.appendChild(N(e)),n})(e)),n})(e))})),n},F=e=>{const n=document.createElement("div");return n.classList.add("Contact"),n.textContent="Contact Us",n.addEventListener("pointerdown",(e=>{const n=document.querySelector(".Main");n.innerHTML="",n.appendChild((e=>{const n=document.createElement("div");return n.classList.add("ContactContent"),n.appendChild((e=>{const n=document.createElement("div");return n.classList.add("ContactTitle"),n.textContent="Contact Us",n})()),n.appendChild((e=>{const n=document.createElement("div");n.classList.add("ContactCardContainer"),console.log(x());for(let t of x())n.appendChild(J(e,t.name,t.position,t.phone,t.email));return n})(e)),n})(e))})),n},q=document.querySelector("#content");var Z;q.innerHTML="",q.classList.add("Controller"),q.appendChild((e=>{const n=document.createElement("div");return n.classList.add("Header"),n.appendChild(z(e)),n.appendChild(A()),n.appendChild(F()),n})(Z)),q.appendChild((e=>{const n=document.createElement("div");return n.classList.add("Main"),n.appendChild(b(undefined)),n})()),q.appendChild((()=>{const e=document.createElement("div");return e.classList.add("Footer"),e.textContent="Made by Viky for The Odin Project 2022",e})())})()})();