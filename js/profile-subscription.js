!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()}(this,function(){"use strict";var e,t={};e=t,"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});const o=document.querySelector("[data-header]"),s=document.querySelector("[data-header-menu-toggle]"),c=document.querySelector("[data-header-menu]"),a=document.querySelector("[data-header-overlay]");return document.addEventListener("DOMContentLoaded",e=>{if(o&&s&&c&&a){if(o&&s&&c&&a){let t=!1;window.addEventListener("scroll",()=>{var e=o.offsetHeight;!t&&scrollY>e?(t=!0,o.classList.add("header_fixed")):t&&scrollY<e&&(t=!1,o.classList.remove("header_fixed"))})}s.addEventListener("click",()=>{o.classList.toggle("active"),s.classList.toggle("active"),c.classList.toggle("active"),a.classList.toggle("active"),document.body.classList.toggle("no-scroll")}),a.addEventListener("click",()=>{o&&s&&c&&a&&(o.classList.remove("active"),s.classList.remove("active"),c.classList.remove("active"),a.classList.remove("active"),document.body.classList.remove("no-scroll"))})}}),t});