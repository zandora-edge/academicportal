"use strict";let isRtl=window.Helpers.isRtl(),isDarkStyle=window.Helpers.isDarkStyle();!function(){const t=document.getElementById("navbarSupportedContent"),e=document.querySelector(".layout-navbar"),o=document.querySelectorAll(".navbar-nav .nav-link");setTimeout((function(){window.Helpers.initCustomOptionCheck()}),1e3);function l(){t.classList.remove("show")}[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(t){return new bootstrap.Tooltip(t)})),isRtl&&Helpers._addClass("dropdown-menu-end",document.querySelectorAll("#layout-navbar .dropdown-menu")),window.addEventListener("scroll",(t=>{window.scrollY>10?e.classList.add("navbar-active"):e.classList.remove("navbar-active")})),window.addEventListener("load",(t=>{window.scrollY>10?e.classList.add("navbar-active"):e.classList.remove("navbar-active")})),document.addEventListener("click",(function(e){t.contains(e.target)||l()})),o.forEach((t=>{t.addEventListener("click",(e=>{t.classList.contains("dropdown-toggle")?e.preventDefault():l()}))})),isRtl&&Helpers._addClass("dropdown-menu-end",document.querySelectorAll(".dropdown-menu"));const a=document.querySelectorAll(".nav-link.mega-dropdown");a&&a.forEach((t=>{new MegaDropdown(t)}));let n=document.querySelector(".dropdown-style-switcher"),s=localStorage.getItem("templateCustomizer-"+templateName+"--Style")||window.templateCustomizer.settings.defaultStyle;if(window.templateCustomizer&&n){[].slice.call(n.children[1].querySelectorAll(".dropdown-item")).forEach((function(t){t.addEventListener("click",(function(){let t=this.getAttribute("data-theme");"light"===t?window.templateCustomizer.setStyle("light"):"dark"===t?window.templateCustomizer.setStyle("dark"):window.templateCustomizer.setStyle("system")}))}));const t=n.querySelector("i");"light"===s?(t.classList.add("bx-sun"),new bootstrap.Tooltip(t,{title:"Light Mode",fallbackPlacements:["bottom"]})):"dark"===s?(t.classList.add("bx-moon"),new bootstrap.Tooltip(t,{title:"Dark Mode",fallbackPlacements:["bottom"]})):(t.classList.add("bx-desktop"),new bootstrap.Tooltip(t,{title:"System Mode",fallbackPlacements:["bottom"]}))}!function(t){"system"===t&&(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");[].slice.call(document.querySelectorAll("[data-app-"+t+"-img]")).map((function(e){const o=e.getAttribute("data-app-"+t+"-img");e.src=assetsPath+"img/"+o}))}(s)}();
