!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r),r("h6c0i");var o=document.querySelector(".form"),u={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};o.addEventListener("submit",(function(e){e.preventDefault();for(var n=0;n<u.amount.value;n+=1)Number(u.delay.value),Number(u.step.value)}))}();
//# sourceMappingURL=03-promises.1a778b5b.js.map