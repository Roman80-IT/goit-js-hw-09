!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),u=document.querySelector(".form"),i={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function c(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}u.addEventListener("submit",(function(e){e.preventDefault();for(var n=0;n<i.amount.value;n+=1){c(n+1,Number(i.delay.value)+n*Number(i.step.value)).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)}))}}))}();
//# sourceMappingURL=03-promises.13d65881.js.map