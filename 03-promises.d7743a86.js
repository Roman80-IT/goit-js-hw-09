!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var u={id:e,exports:{}};return n[e]=u,o.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var u=o("h6c0i"),i=document.querySelector(".form"),r={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')},a=document.getElementById("submitBtn");document.getElementById("resetBtn").addEventListener("click",(function(){r.delay.value="1000",r.step.value="500",r.amount.value="5",a.disabled=!1})),i.addEventListener("submit",(function(e){var n=function(e){(function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))})(e+1,t+e*o).then((function(e){u.Notify.success(e)})).catch((function(e){u.Notify.failure(e)})).finally((function(){e===i-1&&(a.disabled=!1)}))};e.preventDefault(),a.disabled=!0;var t=Number(r.delay.value),o=Number(r.step.value),i=Number(r.amount.value);if(o<0||t<0||i<=0)return u.Notify.failure("Некоректні значення введених параметрів!"),void(a.disabled=!1);for(var l=0;l<i;l+=1)n(l)}))}();
//# sourceMappingURL=03-promises.d7743a86.js.map
