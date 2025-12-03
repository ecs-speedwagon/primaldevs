(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const Z="q6wGVb9Aq0qhPo2kRkaUMu7npvf9A2ZE",D="https://app.ticketmaster.com/discovery/v2";async function O(e,n,a,t){try{const o=`${D}/events.json?apikey=${Z}&size=${a}&page=${e}&keyword=${n||""}&countryCode=${t}`,s=await fetch(o);if(!s.ok)throw new Error(`Request failed: ${s.status}`);const i=await s.json();if(i?._embedded?.events)return i}catch(o){console.error("error get",o.message)}}const g=document.querySelector(".events-ul"),b=document.querySelector(".dropdown-menu"),B=document.querySelector(".dropdown-toggle"),A=document.querySelector(".pagination-box"),U=document.querySelector("#searching-input"),_=document.querySelector(".hero-form"),u=document.querySelector("#modal-vignette"),S=document.querySelector(".loader");function M(e){let n=0;if(n=e,!g)return;g.innerHTML="";const a=n.map((t,o)=>{const s=t.images?.find(C=>C.ratio==="3_2")?.url||"",i=t.dates?.start?.localDate||"No date info",w=t._embedded?.venues?.[0]?.name||"We don't have enough info",f=typeof t.name=="string"&&t.name.trim()!==""?t.name:"Untitled event";return`
      <li class="event-item" data-id="${o}">
      <div class="event-img"> <img src="${s}" alt="${f}"></div>
        <h3 class="event-name">${f}</h3>
        <p class="event-date">${i}</p>
        <p class="event-place">${w}</p>
      </li>
    `}).join("");g.insertAdjacentHTML("beforeend",a)}const j=["US","AD","AI","AR","AU","AT","AZ","BS","BH","BB","BE","BM","BR","BG","CA","CL","CN","CO","CR","HR","CY","CZ","DK","DO","EC","EE","FO","FI","FR","GE","DE","GH","GI","GB","GR","HK","HU","IS","IN","IE","IL","IT","JM","JP","KR","LV","LB","LT","LU","MY","MT","MX","MC","ME","MA","NL","AN","NZ","ND","NO","PE","PL","PT","RO","RU","LC","SA","RS","SG","SK","SI","ZA","ES","SE","CH","TW","TH","TT","TR","UA","AE","UY","VE"];function H(){if(!b)return;b.innerHTML="";const e=j.map(n=>`
        <li>
          <a class="dropdown-item" href="#">${n}</a>
        </li>
      `).join("");b.insertAdjacentHTML("beforeend",e)}const k="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='currentColor'%20viewBox='0%200%2024%2016'%3e%3cpath%20d='M2.66668%200L0%200L0%2016H2.66668L2.66668%200Z'%20fill='currentColor'%20/%3e%3cpath%20d='M9.3737%200L6.70703%200L6.70703%2016H9.3737L9.3737%200Z'%20fill='currentColor'%20/%3e%3cpath%20d='M13.4142%200L10.7476%200L10.7476%2016H13.4142L13.4142%200Z'%20fill='currentColor'%20/%3e%3cpath%20d='M24.0001%200L20.0405%200L20.0405%2016H24.0001L24.0001%200Z'%20fill='currentColor'%20/%3e%3cpath%20d='M5.33334%200L4.04041%200L4.04041%2016H5.33334L5.33334%200Z'%20fill='currentColor'%20/%3e%3cpath%20d='M16%200L14.707%200L14.707%2016H16L16%200Z'%20fill='currentColor'%20/%3e%3cpath%20d='M18.6666%200L17.3737%200L17.3737%2016H18.6666L18.6666%200Z'%20fill='currentColor'%20/%3e%3c/svg%3e";function z(e,n){const a=n.target.closest(".event-item");if(!a)return;const t=e[a.dataset.id],o=t.url||"#",s=t.images?.find(v=>v.ratio==="3_2")?.url||"",i=t.dates?.start?.localDate||"No date info",T=t.dates?.start?.localTime.slice(0,5)||"Unknown time",w=t.dates?.timezone||"Local time",f=t._embedded?.venues?.[0],C=f?.name||"We don't have enough info",R=f?.city?.name||"",q=f?.country?.name||"",x=typeof t.description=="string"&&t.description.trim()!==""?t.description.slice(0,140)+(t.description.length>140?"…":""):!1,I=t._embedded?.attractions?.[0]?.name||"Unknown performer",N=typeof t.name=="string"&&t.name.trim()!==""?t.name:"Untitled event";u.innerHTML=`
  <div id="modal-box" class="modal-box">
    <button class="close-modal-butt" id="close-modal-butt">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
        <path
          fill="#4C00FE"
          d="M1.29 25a1.29 1.29 0 0 1-.9-2.2L22.79.38a1.29 1.29 0 1 1 1.82 1.82L2.2 24.62c-.26.25-.59.38-.91.38Z"
        />
        <path
          fill="#4C00FE"
          d="M23.71 25c-.32 0-.65-.13-.9-.38L.38 2.2A1.29 1.29 0 0 1 2.2.38L24.62 22.8a1.29 1.29 0 0 1-.9 2.2Z"
        />
      </svg>
    </button>

    <div
      class="modal-sub-img"
      style="background: url('${s}') center/cover no-repeat"
    ></div>
    <div
      class="modal-main-img"
      style="background: url('${s}') center/cover no-repeat"
    ></div>

    <ul class="modal-info-list" id="modal-info-list">
      <li class="modal-info-item" id="modal-info">
        <h2 class="modal-title">Info</h2>
        <p class="modal-text">${x||N}</p>
      </li>
      <li class="modal-info-item" id="modal-when">
        <h2 class="modal-title">When</h2>
        <p class="modal-text">
          ${i}<span class="br-space"></span>${T} (${w})
        </p>
      </li>
      <li class="modal-info-item" id="modal-where">
        <h2 class="modal-title">Where</h2>
        <p class="modal-text">
          ${R}, ${q}<span class="br-space"></span>${C}
        </p>
      </li>
      <li class="modal-info-item" id="modal-who">
        <h2 class="modal-title">Who</h2>
        <p class="modal-text">${I}</p>
      </li>
      <li class="modal-info-item" id="modal-prices">
        <h2 class="modal-title">Prices</h2>
        <p class="modal-text">
          <img
            src="${k}"
            alt="Ticket barcode"
            class="ticket-barcode-icon"
          />
          Standard 1000–1500 UAH
        </p>
        <button class="buy-tick-butt">Buy tickets</button>
        <p class="modal-text">
          <img
            src="${k}"
            alt="Ticket barcode"
            class="ticket-barcode-icon"
          />
          VIP 3000–5500 UAH
        </p>
        <button class="buy-tick-butt">Buy tickets</button>
      </li>
    </ul>

    <button
      data-url="${o}"
      class="more-author-butt"
      id="more-author-butt"
    >
      More from this author
    </button>
  </div>
`,u.classList.add("active"),u.querySelector("#close-modal-butt").addEventListener("click",()=>u.classList.remove("active")),u.addEventListener("click",v=>{v.target===u&&u.classList.remove("active")}),document.querySelector("#more-author-butt").addEventListener("click",v=>{const E=v.target.dataset.url;E&&E!=="#"?window.open(E,"_blank","noopener,noreferrer"):console.warn("URL not provided")})}let r=0,l;function P(){r=0}function G(e){r=e}function L(e){const n=document.createElement("button");return n.classList.add("pagination-unit"),n.textContent=e+1,e===r&&n.classList.add("active"),n}function F(e){l=e,A.innerHTML="";let n=[];function a(){const t=document.createElement("span");t.textContent="...",t.classList.add("pagination-dots"),n.push(t)}if(l<=5)for(let t=0;t<l;t++)n.push(L(t));else{n.push(L(0));let t=Math.max(1,r-2),o=Math.min(l-2,r+2);r<2&&(t=1,o=4),r>l-4&&(t=l-5,o=l-2),t>1&&a();for(let s=t;s<=o;s++)n.push(L(s));o<l-2&&a(),n.push(L(l-1))}n.map(t=>A.insertAdjacentElement("beforeend",t))}function y(e,n){let a;return(...t)=>{clearTimeout(a),a=setTimeout(()=>e(...t),n)}}async function W(){const e=await fetch("https://ipapi.co/json/");return e.ok?(await e.json()).country:"US"}function $(){const e=window.innerWidth;return e>=1280?20:e>=768?21:20}let d,h=[],p="",c=$();H();async function m(e,n,a,t){G(e),S.classList.add("active"),M([]);const o=await O(e,n,a,t);if(!o?._embedded?.events){if(t!=="US"){t="US",B.textContent="US",await m(e,n,a,t);return}h=[],M(h),y(S.classList.remove("active"),500);return}y(S.classList.remove("active"),500),h=o._embedded.events;const s=o?.page?.totalPages||1;F(Math.min(s,50)),y(M(h),300),H()}_?.addEventListener("submit",e=>{e.preventDefault()});U?.addEventListener("input",e=>{p=U.value,y(m(r,p,c,d),500)});g.addEventListener("click",e=>z(h,e));A.addEventListener("click",async e=>{if(e.target.classList.contains("pagination-unit")){const n=parseInt(e.target.textContent)-1;await m(n,p,c,d)}});b.addEventListener("click",async e=>{e.preventDefault();const n=e.target;if(n.tagName!=="A")return;const a=n.textContent.trim();d=a,B.textContent=a,await m(r,p,c,d)});window.addEventListener("resize",()=>{const e=$();e!==c&&(c=e,P(),m(r,p,c,d))});async function K(){d=await W(),m(r,"",c,d)}window.addEventListener("resize",()=>{const e=$();e!==c&&(c=e,P(),m(r,p,c,d))});K();
