var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const u=document.querySelector(".form"),i={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')},l=document.getElementById("submitBtn");function d(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.getElementById("resetBtn").addEventListener("click",(()=>{i.delay.value="1000",i.step.value="500",i.amount.value="5",l.disabled=!1})),u.addEventListener("submit",(e=>{e.preventDefault(),l.disabled=!0;const t=Number(i.delay.value),n=Number(i.step.value),r=Number(i.amount.value);if(n<0||t<0||r<=0)return o.Notify.failure("Некоректні значення введених параметрів!"),void(l.disabled=!1);for(let e=0;e<r;e+=1){d(e+1,t+e*n).then((e=>{o.Notify.success(e)})).catch((e=>{o.Notify.failure(e)})).finally((()=>{e===r-1&&(l.disabled=!1)}))}}));
//# sourceMappingURL=03-promises.7c38df5a.js.map