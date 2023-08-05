!function(){
//! ------------------------------------------------------------------------------------------
//! ---------------------------   ВАРІАНТ 2   -------------------------------
var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}));var a=null}();
//# sourceMappingURL=01-color-switcher.55a13f13.js.map
