var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("fbklV"),a=o("iQIUW");const s=document.querySelector("button[data-start]"),d=document.querySelector("#datetime-picker"),l={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};s.disabled=!0;let u=Date.now(),i=0,c=0,f=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){Date.parse(e[0])<u?(a.Notify.failure("Please choose a date in the future"),s.disabled=!0):(c=Date.parse(e[0]),s.disabled=!1)}},m=(0,r.default)(d,p);function y(e){return String(e).padStart(2,"0")}s.addEventListener("click",(function(){f&&clearInterval(f);f=setInterval((()=>{if(u=Date.now(),i=c-u,i>0){const e=function(e){const t=1e3,n=60*t,o=60*n,r=24*o,a=y(Math.floor(e/r)),s=y(Math.floor(e%r/o)),d=y(Math.floor(e%r%o/n)),l=y(Math.floor(e%r%o%n/t));return{days:a,hours:s,minutes:d,seconds:l}}(i);l.days.textContent=e.days,l.hours.textContent=e.hours,l.minutes.textContent=e.minutes,l.seconds.textContent=e.seconds}else clearInterval(f)}),1e3),m.destroy(),d.disabled=!0}));
//# sourceMappingURL=02-timer-P.00ec8a8b.js.map