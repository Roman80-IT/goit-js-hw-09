!function(){
//! ------------------------------------------------------------------------------------------
var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",a),e.disabled=!0;var n=null;function a(){n=setInterval((function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3),t.removeEventListener("click",a),e.addEventListener("click",c),t.disabled=!0,e.disabled=!1}function c(){clearInterval(n),e.removeEventListener("click",c),t.addEventListener("click",a),t.disabled=!1,e.disabled=!0}}();
//# sourceMappingURL=01-color-switcher.849e9d25.js.map
