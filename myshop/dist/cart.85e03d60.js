var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequirede3a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequirede3a=r);var a=r("li1Mx"),o=r("1tHc5"),i=r("hMt9z"),d=r("2EF88");d=r("2EF88");const c=document.getElementById("cart"),l=document.getElementById("total");let u=[];function s(e){let t=0;e.forEach((e=>{!function(e){const t=document.createElement("li");t.className="product",t.innerHTML=`\n    <img src="${e.images[0]}" class="product__image">\n    <h2 class="product__name">${e.name}</h2>\n    <h3 class="product__price">${d.currencyFormat(e.price)}</h3>\n    <button class="product__delete">Eliminar producto</button>\n    `,c.appendChild(t),t.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&(console.log("remove it!"),async function(e){const t=u.filter((t=>t.id!==e));u=t,userLogged&&await i.createFirebaseCart(a.db,userLogged.uid,t);d.addProductToCart(t),c.innerHTML="",s(t)}(e.id))}))}(e),t+=parseInt(e.price)})),l.innerText=d.currencyFormat(t)}o.onAuthStateChanged(a.auth,(async e=>{e?(userLogged=e,u=await i.getFirebaseCart(a.db,userLogged.uid)):u=d.getMyLocalCart(),s(u)}));
//# sourceMappingURL=cart.85e03d60.js.map