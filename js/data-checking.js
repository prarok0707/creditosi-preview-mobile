!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()}(this,function(){return function(){"use strict";var e,t={};e=t,"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});const i=document.querySelector("[data-header]"),a=document.querySelector("[data-header-menu-toggle]"),l=document.querySelector("[data-header-menu]"),c=document.querySelector("[data-header-overlay]"),y="data-circle-progressbar",S="data-circle",C="data-progressbar",k="data-progress-value",n={svg:`[${y}]`,circle:`[${S}]`,progressbar:`[${C}]`,text:`[${k}]`},r={startProgressbar:"top",circumference:0,percentage:0,progress:0,size:200,circleColor:"#e0e0e0",progressColor:"#76e5b1",circleWidth:20,progressWidth:20,progressShape:"butt",textColor:"#6bdba7",textSize:{width:0,height:0,fontSize:65},valueToggle:!1,percentageToggle:!1};class g{_svg=null;_svgCircle=null;_svgProgressbar=null;_svgText=null;_progressColorInit=null;constructor(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this._elem=(e=e)&&(e="string"==typeof e?document.body.querySelector(e):e)instanceof Element?e:null,this._options={...r,...t},this._init()}update=e=>e?(e=>{for(const t in e)if(e[t])return!1;return!0})(e)?e+" - пустой объект!":(e.fontSize&&(this._options.textSize.fontSize=e.fontSize),this._options={...this._options,...e},this._svg.remove(),this._svg=null,this._svgCircle=null,this._svgProgressbar=null,void this._init()):e+" - должен быть объект!";setProgress=e=>{var t,r,s,o,i;return isNaN(e)?e+" - неверное число!":this._svgProgressbar?({percentage:e,progress:t,circleColor:r,progressColor:s,valueToggle:o,percentageToggle:i}=((t=this._options).progress=e,this._setProgress(),t),this._svgProgressbar.setAttribute("stroke-dashoffset",e+"px"),t<=0?this._svgProgressbar.setAttribute("stroke",r):this._svgProgressbar.setAttribute("stroke",s),void(o&&(this._svgText.textContent=i?t+"%":t,this._setTextSize()))):"Отсутствует: progressbar!"};_setTextSize=()=>{var e,t,r,s,o,i;this._options.valueToggle&&({size:i,textSize:e}=this._options,s=(t=this._elem.querySelector(n.text)).getBoundingClientRect(),r=Math.round(s.width),s=Math.round(s.height),o=Math.round(i/2-r/1.75),i=Math.round(i/2+s/3.25),t.setAttribute("x",o+"px"),t.setAttribute("y",i+"px"),t.setAttribute("font-size",e.fontSize+"px"),e.width=r,e.height=s,this._svgText=t)};_setProgress=()=>{var e=this._options,t=(100<=e.progress&&(e.progress=100),e.progress<=0&&(e.progress=0),this._progressColorInit||(this._progressColorInit=e.progressColor),e.size/2),r=+(Math.PI*t*2).toFixed(2),s=Math.round(r*((100-e.progress)/100));e.progress<=0?e.progressColor=e.circleColor:e.progressColor=this._progressColorInit,e.radius=t,e.circumference=r,e.percentage=s};_render=()=>{var e=(e=>{var{startProgressbar:e,circumference:t,percentage:r,progress:s,size:o,circleColor:i,progressColor:a,circleWidth:l,progressWidth:c,progressShape:n,textColor:g,textSize:d,valueToggle:h,percentageToggle:p}=e,u=`-${.125*o} -${.125*o} ${1.25*o} `+1.25*o,v=o/2,f=o/2,_=o/2,b=(e=>{let t="";switch(e){case"top":default:t="rotate(-90deg)";break;case"right":t="rotate(0deg)";break;case"bottom":t="rotate(90deg)";break;case"left":t="rotate(180deg)"}return t=isNaN(e)?t:`rotate(${e}deg)`})(e),x=Math.round(o/2-d.width/1.75),$=Math.round(o/2+d.height/3.25),m=(e=>{let t="";switch(e){case"top":default:t="rotate(90deg)";break;case"right":t="rotate(0deg)";break;case"bottom":t="rotate(270deg)";break;case"left":t="rotate(-180deg)"}return t=isNaN(e)?t:`rotate(-${e}deg)`})(e),e=((e,t)=>{let r="";switch(e){case"top":default:r=`translate(0px, -${t}px)`;break;case"right":r="translate(0px, 0px)";break;case"bottom":r=`translate(-${t}px, 0px)`;break;case"left":r=`translate(-${t}px, -${t}px)`}return r})(e,o),p=p?"%":"",h=h?`
    
      <text 
        ${k}
        x="${x}px" 
        y="${$}px" 
        fill="${g}" 
        font-size="${d.fontSize}px" 
        font-weight="bold" 
        style="transform:${m} ${e}">
          ${s}${p}
        </text>`:"";return`
<svg 
  ${y}
  width="${o}" 
  height="${o}" 
  viewBox="${u}" 
  version="1.1" 
  xmlns="http://www.w3.org/2000/svg" 
  style="transform:${b}">

  <circle 
    ${S}
    r="${v}" 
    cx="${f}" 
    cy="${_}" 
    fill="transparent" 
    stroke="${i}" 
    stroke-width="${l}px" 
    stroke-dasharray="${t}" 
    stroke-dashoffset="0">
  </circle>

  <circle 
    ${C}
    r="${v}" 
    cx="${f}" 
    cy="${_}" 
    fill="transparent" 
    stroke="${a}" 
    stroke-width="${c}px" 
    stroke-linecap="${n}" 
    stroke-dashoffset="${r}px" 
    stroke-dasharray="${t}">
  </circle>

  ${h}
</svg>
  `})(this._options);this._elem.insertAdjacentHTML("beforeend",e),this._svg=this._elem.querySelector(n.svg),this._svgCircle=this._elem.querySelector(n.circle),this._svgProgressbar=this._elem.querySelector(n.progressbar),this._setTextSize()};_init=()=>{this._elem&&(this._setProgress(),this._render())}}const d={size:210,valueToggle:!0,percentageToggle:!0,circleColor:"#F3F3F3",progressColor:"#311571",textColor:"#311571",circleWidth:15,progressWidth:15,textSize:{width:0,height:0,fontSize:50}};return document.addEventListener("DOMContentLoaded",e=>{if(i&&a&&l&&c){if(i&&a&&l&&c){let t=!1;window.addEventListener("scroll",()=>{var e=i.offsetHeight;!t&&scrollY>e?(t=!0,i.classList.add("header_fixed")):t&&scrollY<e&&(t=!1,i.classList.remove("header_fixed"))})}a.addEventListener("click",()=>{i.classList.toggle("active"),a.classList.toggle("active"),l.classList.toggle("active"),c.classList.toggle("active"),document.body.classList.toggle("no-scroll")}),c.addEventListener("click",()=>{i&&a&&l&&c&&(i.classList.remove("active"),a.classList.remove("active"),l.classList.remove("active"),c.classList.remove("active"),document.body.classList.remove("no-scroll"))})}var r=document.body.querySelector(".data-checking__loader");if(r){console.log(d);const s=new g(r,d);let t=Date.now();const o=setInterval(()=>{var e=Date.now()-t,e=(6e3<=e&&clearInterval(o),Math.floor(e/6e3*100));s.setProgress(e)},40)}}),t}()});