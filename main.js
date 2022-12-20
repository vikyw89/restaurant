(()=>{"use strict";const e=window.localStorage,t=()=>+e.count,n=t=>(e.count=t,+e.count),a=()=>JSON.parse(e.reviews);var d;n(0),d=["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"],e.hours=JSON.stringify(d),JSON.parse(e.hours),e.reviews=JSON.stringify([{name:"Irene",review:"Irene's has the best porridge!"},{name:"Irena",review:"Yum.. Yum.."},{name:"Irenelle",review:"This is exactly the kind of place that I like to return to again and again."}]),JSON.parse(e.reviews),e.menu=JSON.stringify({beverages:[{name:"Espresso",price:"1.75"},{name:"Tazo Hot Tea",price:"2.50"},{name:"Caffe Americano",price:"2.25"},{name:"Hot Chocolate",price:"2.75"}],sides:[{name:"Samosa",price:"1.20"},{name:"Green Salad",price:"0.99"},{name:"Kebab Wrap",price:"2.99"}],main:[{name:"Braised Sirloin",price:"9.00"},{name:"Nova Scottia Pan Seared Haddock",price:"14.00"},{name:"Cranberry Wallnut Crusted Salmon",price:"17.00"}]}),JSON.parse(e.menu);const r=e=>{const t=document.createElement("div");return t.classList.add("HomeContent"),t.appendChild(i(e)),t.appendChild(s(e)),t.appendChild(m(e)),t.appendChild(p(e)),t},i=e=>{const t=document.createElement("div");return t.classList.add("HomeTitleContainer"),t.textContent="Irene's Restaurant",t},s=e=>{const d=document.createElement("div");return d.classList.add("ReviewContainer"),d.textContent="Reviews",d.appendChild(o(e,a()[t()].name,a()[t()].review)),setInterval((()=>{d.removeChild(d.lastChild),d.appendChild(o(e,a()[t()].name,a()[t()].review)),n((t()+1)%a().length)}),3e3),d},o=(e,t,n)=>{const a=document.createElement("div");return a.classList.add("ReviewCard"),a.appendChild(l(e,n)),a.appendChild(c(e,t)),a},c=(e,t)=>{const n=document.createElement("div");return n.classList.add("ReviewerName"),n.textContent=`~${t}`,n},l=(e,t)=>{const n=document.createElement("div");return n.classList.add("ReviewerContent"),n.textContent=t,n},m=t=>{const n=document.createElement("div");n.classList.add("HoursContainer");for(let a of JSON.parse(e.hours))n.appendChild(u(t,a));return n},u=(e,t)=>{const n=document.createElement("div");return n.classList.add("Hours"),n.textContent=t,n},p=e=>{const t=document.createElement("div");return t.classList.add("LocationContainer"),t.textContent="Our Location",t.appendChild(C(e)),t},C=e=>{const t=document.createElement("div");return t.classList.add("Location"),t.textContent="Imus, Cavite",t},v=t=>{const n=document.createElement("div");n.classList.add("BeverageCard");for(let a of JSON.parse(e.menu).beverages)n.appendChild(h(t,a.name)),n.appendChild(L(t,a.price));return n},h=(e,t)=>{const n=document.createElement("div");return n.classList.add("BeverageCardName"),n.textContent=t,n},L=(e,t)=>{const n=document.createElement("div");return n.classList.add("BeverageCardPrice"),n.textContent=t,n},E=(document.createElement("div"),e=>{const t=document.createElement("div");return t.classList.add("Home"),t.textContent="Home",t.addEventListener("pointerdown",(e=>{const t=document.querySelector(".Main");t.innerHTML="",t.appendChild(r(e))})),t}),S=e=>{const t=document.createElement("div");return t.classList.add("Menu"),t.textContent="Menu",t.addEventListener("pointerdown",(e=>{const t=document.querySelector(".Main");t.innerHTML="",t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("MenuContent"),t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("MenuTitle"),t.textContent="Our Menu",t})()),t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("BeveragesContainer"),t.textContent="Beverages",t.appendChild(v(e)),t})(e)),t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("SidesContainer"),t})()),t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("MainDishesContainer"),t})()),t})(e))})),t},w=document.querySelector("#content");var y;w.innerHTML="",w.classList.add("Controller"),w.appendChild((e=>{const t=document.createElement("div");return t.classList.add("Header"),t.appendChild(E(e)),t.appendChild(S()),t.appendChild((e=>{const t=document.createElement("div");return t.classList.add("Contact"),t.textContent="Contact Us",t})()),t})(y)),w.appendChild((e=>{const t=document.createElement("div");return t.classList.add("Main"),t.appendChild(r(undefined)),t})()),w.appendChild((()=>{const e=document.createElement("div");return e.classList.add("Footer"),e.textContent="Made by Viky for The Odin Project 2022",e})())})();