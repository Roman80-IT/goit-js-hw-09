//! ------------------------------------------------------------------------------------------
//! ---------------------------   ВАРІАНТ 2   -------------------------------
const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(d)}));let d=null;
//# sourceMappingURL=01-color-switcher.af9a7733.js.map
