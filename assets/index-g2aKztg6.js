(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const I="q6wGVb9Aq0qhPo2kRkaUMu7npvf9A2ZE",N="https://app.ticketmaster.com/discovery/v2";async function q(e,n,s,t){try{const o=`${N}/events.json?apikey=${I}&size=${s}&page=${e}&keyword=${n||""}&countryCode=${t}`,r=await fetch(o);if(!r.ok)throw new Error(`Request failed: ${r.status}`);const i=await r.json();if(i?._embedded?.events)return i}catch(o){console.error("error get",o.message)}}const g=document.querySelector(".events-ul"),b=document.querySelector(".dropdown-menu"),T=document.querySelector(".dropdown-toggle"),S=document.querySelector(".pagination-box"),D=document.querySelector("#searching-input"),u=document.querySelector("#modal-vignette"),M=document.querySelector(".loader");function H(e){let n=0;if(n=e,!g)return;g.innerHTML="";const s=n.map((t,o)=>{const r=t.images?.find(C=>C.ratio==="3_2")?.url||"",i=t.dates?.start?.localDate||"No date info",w=t._embedded?.venues?.[0]?.name||"We don't have enough info",f=typeof t.name=="string"&&t.name.trim()!==""?t.name:"Untitled event";return`
      <li class="event-item" data-id="${o}">
      <div class="event-img"> <img src="${r}" alt="${f}"></div>
        <h3 class="event-name">${f}</h3>
        <p class="event-date">${i}</p>
        <p class="event-place">${w}</p>
      </li>
    `}).join("");g.insertAdjacentHTML("beforeend",s)}const O=["US","AD","AI","AR","AU","AT","AZ","BS","BH","BB","BE","BM","BR","BG","CA","CL","CN","CO","CR","HR","CY","CZ","DK","DO","EC","EE","FO","FI","FR","GE","DE","GH","GI","GB","GR","HK","HU","IS","IN","IE","IL","IT","JM","JP","KR","LV","LB","LT","LU","MY","MT","MX","MC","ME","MA","NL","AN","NZ","ND","NO","PE","PL","PT","RO","RU","LC","SA","RS","SG","SK","SI","ZA","ES","SE","CH","TW","TH","TT","TR","UA","AE","UY","VE"];function U(){if(!b)return;b.innerHTML="";const e=O.map(n=>`
        <li>
          <a class="dropdown-item" href="#">${n}</a>
        </li>
      `).join("");b.insertAdjacentHTML("beforeend",e)}function _(e,n){const s=n.target.closest(".event-item");if(!s)return;const t=e[s.dataset.id],o=t.url||"#",r=t.images?.find(L=>L.ratio==="3_2")?.url||"",i=t.dates?.start?.localDate||"No date info",$=t.dates?.start?.localTime.slice(0,5)||"Unknown time",w=t.dates?.timezone||"Local time",f=t._embedded?.venues?.[0],C=f?.name||"We don't have enough info",k=f?.city?.name||"",P=f?.country?.name||"",x=typeof t.description=="string"&&t.description.trim()!==""?t.description.slice(0,140)+(t.description.length>140?"…":""):!1,Z=t._embedded?.attractions?.[0]?.name||"Unknown performer",R=typeof t.name=="string"&&t.name.trim()!==""?t.name:"Untitled event";u.innerHTML=`<div id="modal-box" class="modal-box">
      <button class="close-modal-butt" id="close-modal-butt">
        <svg class="close-modal-icon">
          <use href="./img/cross.svg"></use>
        </svg>
      </button>

      <div class="modal-sub-img" style="background: url('${r}') center/cover no-repeat;"></div>
      <div class="modal-main-img" style="background: url('${r}') center/cover no-repeat;"></div>

      <ul class="modal-info-list" id="modal-info-list">
        <li class="modal-info-item" id="modal-info">
          <h2 class="modal-title">Info</h2>
          <p class="modal-text">${x||R} </p>
        </li>
        <li
class="modal-info-item" id="modal-when">
          <h2 class="modal-title">When</h2>
          <p class="modal-text">${i}<span class="br-space"></span>${$} (${w})</p>
        </li>
        <li class="modal-info-item" id="modal-where">
          <h2 class="modal-title">Where</h2>
          <p class="modal-text">${k}, ${P}<span class="br-space"></span>${C}</p>
        </li>
        <li class="modal-info-item" id="modal-who">
          <h2 class="modal-title">Who</h2>
          <p class="modal-text">${Z}</p>
        </li>
        <li class="modal-info-item" id="modal-prices">
          <h2 class="modal-title">Prices</h2>
          <p class="modal-text">
            <svg class="ticket-barcode-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 16">
              <path d="M2.66668 0L0 0L0 16H2.66668L2.66668 0Z" fill="currentColor" />
              <path d="M9.3737 0L6.70703 0L6.70703 16H9.3737L9.3737 0Z" fill="currentColor" />
              <path d="M13.4142 0L10.7476 0L10.7476 16H13.4142L13.4142 0Z" fill="currentColor" />
              <path d="M24.0001 0L20.0405 0L20.0405 16H24.0001L24.0001 0Z" fill="currentColor" />
              <path d="M5.33334 0L4.04041 0L4.04041 16H5.33334L5.33334 0Z" fill="currentColor" />
              <path d="M16 0L14.707 0L14.707 16H16L16 0Z" fill="currentColor" />
              <path d="M18.6666 0L17.3737 0L17.3737 16H18.6666L18.6666 0Z" fill="currentColor" />
            </svg>Standard
            1000–1500 UAH
          </p>
          <button class="buy-tick-butt">Buy tickets</button>
          <p class="modal-text">
            <svg class="ticket-barcode-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 16">
              <path d="M2.66668 0L0 0L0 16H2.66668L2.66668 0Z" fill="currentColor" />
              <path d="M9.3737 0L6.70703 0L6.70703 16H9.3737L9.3737 0Z" fill="currentColor" />
              <path d="M13.4142 0L10.7476 0L10.7476 16H13.4142L13.4142 0Z" fill="currentColor" />
              <path d="M24.0001 0L20.0405 0L20.0405 16H24.0001L24.0001 0Z" fill="currentColor" />
              <path d="M5.33334 0L4.04041 0L4.04041 16H5.33334L5.33334 0Z" fill="currentColor" />
              <path d="M16 0L14.707 0L14.707 16H16L16 0Z" fill="currentColor" />
              <path d="M18.6666 0L17.3737 0L17.3737 16H18.6666L18.6666 0Z" fill="currentColor" />
            </svg>VIP 3000–5500 UAH
          </p>
          <button class="buy-tick-butt">Buy tickets</button>
        </li>
      </ul>

      <button data-url="${o}" class="more-author-butt" id="more-author-butt">
        More from this author
      </button>
    </div>`,u.classList.add("active"),u.querySelector("#close-modal-butt").addEventListener("click",()=>u.classList.remove("active")),u.addEventListener("click",L=>{L.target===u&&u.classList.remove("active")}),document.querySelector("#more-author-butt").addEventListener("click",L=>{const E=L.target.dataset.url;E&&E!=="#"?window.open(E,"_blank","noopener,noreferrer"):console.warn("URL not provided")})}let a=0,l;function B(){a=0}function j(e){a=e}function v(e){const n=document.createElement("button");return n.classList.add("pagination-unit"),n.textContent=e+1,e===a&&n.classList.add("active"),n}function z(e){l=e,S.innerHTML="";let n=[];function s(){const t=document.createElement("span");t.textContent="...",t.classList.add("pagination-dots"),n.push(t)}if(l<=5)for(let t=0;t<l;t++)n.push(v(t));else{n.push(v(0));let t=Math.max(1,a-2),o=Math.min(l-2,a+2);a<2&&(t=1,o=4),a>l-4&&(t=l-5,o=l-2),t>1&&s();for(let r=t;r<=o;r++)n.push(v(r));o<l-2&&s(),n.push(v(l-1))}n.map(t=>S.insertAdjacentElement("beforeend",t))}function y(e,n){let s;return(...t)=>{clearTimeout(s),s=setTimeout(()=>e(...t),n)}}async function G(){const e=await fetch("https://ipapi.co/json/");return e.ok?(await e.json()).country:null}function A(){const e=window.innerWidth;return e>=1280?20:e>=768?21:20}let d,h=[],p="",c=A();U();async function m(e,n,s,t){j(e),M.classList.add("active"),H([]);const o=await q(e,n,s,t);if(!o?._embedded?.events){if(t!=="US"){t="US",T.textContent="US",await m(e,n,s,t);return}h=[],H(h),y(M.classList.remove("active"),500);return}y(M.classList.remove("active"),500),h=o._embedded.events;const r=o?.page?.totalPages||1;z(Math.min(r,50)),y(H(h),300),U()}D?.addEventListener("input",y(e=>{p=e.target.value,m(a,p,c,d)},300));g.addEventListener("click",e=>_(h,e));S.addEventListener("click",async e=>{if(e.target.classList.contains("pagination-unit")){const n=parseInt(e.target.textContent)-1;await m(n,p,c,d)}});b.addEventListener("click",async e=>{e.preventDefault();const n=e.target;if(n.tagName!=="A")return;const s=n.textContent.trim();d=s,T.textContent=s,await m(a,p,c,d)});window.addEventListener("resize",()=>{const e=A();e!==c&&(c=e,B(),m(a,p,c,d))});async function W(){d=await G(),m(a,"",c,d)}window.addEventListener("resize",()=>{const e=A();e!==c&&(c=e,B(),m(a,p,c,d))});W();
