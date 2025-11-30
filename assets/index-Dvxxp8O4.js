(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const N="q6wGVb9Aq0qhPo2kRkaUMu7npvf9A2ZE",q="https://app.ticketmaster.com/discovery/v2";async function D(e,n,a,t){try{const o=`${q}/events.json?apikey=${N}&size=${a}&page=${e}&keyword=${n||""}&countryCode=${t}`,s=await fetch(o);if(!s.ok)throw new Error(`Request failed: ${s.status}`);const r=await s.json();if(r?._embedded?.events)return r}catch(o){console.error("error get",o.message)}}const b=document.querySelector(".events-ul"),y=document.querySelector(".dropdown-menu"),U=document.querySelector(".dropdown-toggle"),$=document.querySelector(".pagination-box"),O=document.querySelector("#searching-input"),u=document.querySelector("#modal-vignette"),A=document.querySelector(".loader");function S(e){let n=0;if(n=e,!b)return;b.innerHTML="";const a=n.map((t,o)=>{const s=t.images?.find(E=>E.ratio==="3_2")?.url||"",r=t.dates?.start?.localDate||"No date info",w=t._embedded?.venues?.[0]?.name||"We don't have enough info",f=typeof t.name=="string"&&t.name.trim()!==""?t.name:"Untitled event";return`
      <li class="event-item" data-id="${o}">
      <div class="event-img"> <img src="${s}" alt="${f}"></div>
        <h3 class="event-name">${f}</h3>
        <p class="event-date">${r}</p>
        <p class="event-place">${w}</p>
      </li>
    `}).join("");b.insertAdjacentHTML("beforeend",a)}const _=["US","AD","AI","AR","AU","AT","AZ","BS","BH","BB","BE","BM","BR","BG","CA","CL","CN","CO","CR","HR","CY","CZ","DK","DO","EC","EE","FO","FI","FR","GE","DE","GH","GI","GB","GR","HK","HU","IS","IN","IE","IL","IT","JM","JP","KR","LV","LB","LT","LU","MY","MT","MX","MC","ME","MA","NL","AN","NZ","ND","NO","PE","PL","PT","RO","RU","LC","SA","RS","SG","SK","SI","ZA","ES","SE","CH","TW","TH","TT","TR","UA","AE","UY","VE"];function k(){if(!y)return;y.innerHTML="";const e=_.map(n=>`
        <li>
          <a class="dropdown-item" href="#">${n}</a>
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",e)}function j(e,n){const a=n.target.closest(".event-item");if(!a)return;const t=e[a.dataset.id],o=t.url||"#",s=t.images?.find(v=>v.ratio==="3_2")?.url||"",r=t.dates?.start?.localDate||"No date info",B=t.dates?.start?.localTime.slice(0,5)||"Unknown time",w=t.dates?.timezone||"Local time",f=t._embedded?.venues?.[0],E=f?.name||"We don't have enough info",P=f?.city?.name||"",R=f?.country?.name||"",M=typeof t.description=="string"&&t.description.trim()!==""?t.description.slice(0,140)+(t.description.length>140?"…":""):!1,H=t._embedded?.attractions?.[0]?.name||"Unknown performer",I=typeof t.name=="string"&&t.name.trim()!==""?t.name:"Untitled event";u.innerHTML=`
    <div class="modal-vignette hiden" id="modal-vignette">
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
        <p class="modal-text">${M||I}</p>
      </li>
      <li class="modal-info-item" id="modal-when">
        <h2 class="modal-title">When</h2>
        <p class="modal-text">
          ${r}<span class="br-space"></span>${B} (${w})
        </p>
      </li>
      <li class="modal-info-item" id="modal-where">
        <h2 class="modal-title">Where</h2>
        <p class="modal-text">
          ${P}, ${R}<span class="br-space"></span>${E}
        </p>
      </li>
      <li class="modal-info-item" id="modal-who">
        <h2 class="modal-title">Who</h2>
        <p class="modal-text">${H}</p>
      </li>
      <li class="modal-info-item" id="modal-prices">
        <h2 class="modal-title">Prices</h2>
        <p class="modal-text">
          <svg class="ticket-barcode-icon">
            <use href="/src/img/ticketBarCode.svg"></use>
          </svg>
          >Standard 1000–1500 UAH
        </p>
        <button class="buy-tick-butt">Buy tickets</button>
        <p class="modal-text">
          <svg class="ticket-barcode-icon">
            <use href="/src/img/ticketBarCode.svg"></use>
          </svg>
          >VIP 3000–5500 UAH
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
</div>
`,u.classList.add("active"),u.querySelector("#close-modal-butt").addEventListener("click",()=>u.classList.remove("active")),u.addEventListener("click",v=>{v.target===u&&u.classList.remove("active")}),document.querySelector("#more-author-butt").addEventListener("click",v=>{const C=v.target.dataset.url;C&&C!=="#"?window.open(C,"_blank","noopener,noreferrer"):console.warn("URL not provided")})}let i=0,l;function x(){i=0}function z(e){i=e}function h(e){const n=document.createElement("button");return n.classList.add("pagination-unit"),n.textContent=e+1,e===i&&n.classList.add("active"),n}function G(e){l=e,$.innerHTML="";let n=[];function a(){const t=document.createElement("span");t.textContent="...",t.classList.add("pagination-dots"),n.push(t)}if(l<=5)for(let t=0;t<l;t++)n.push(h(t));else{n.push(h(0));let t=Math.max(1,i-2),o=Math.min(l-2,i+2);i<2&&(t=1,o=4),i>l-4&&(t=l-5,o=l-2),t>1&&a();for(let s=t;s<=o;s++)n.push(h(s));o<l-2&&a(),n.push(h(l-1))}n.map(t=>$.insertAdjacentElement("beforeend",t))}function L(e,n){let a;return(...t)=>{clearTimeout(a),a=setTimeout(()=>e(...t),n)}}async function W(){const e=await fetch("https://ipapi.co/json/");return e.ok?(await e.json()).country:null}function T(){const e=window.innerWidth;return e>=1280?20:e>=768?21:20}let d,g=[],p="",c=T();k();async function m(e,n,a,t){z(e),A.classList.add("active"),S([]);const o=await D(e,n,a,t);if(!o?._embedded?.events){if(t!=="US"){t="US",U.textContent="US",await m(e,n,a,t);return}g=[],S(g),L(A.classList.remove("active"),500);return}L(A.classList.remove("active"),500),g=o._embedded.events;const s=o?.page?.totalPages||1;G(Math.min(s,50)),L(S(g),300),k()}O?.addEventListener("input",L(e=>{p=e.target.value,m(i,p,c,d)},300));b.addEventListener("click",e=>j(g,e));$.addEventListener("click",async e=>{if(e.target.classList.contains("pagination-unit")){const n=parseInt(e.target.textContent)-1;await m(n,p,c,d)}});y.addEventListener("click",async e=>{e.preventDefault();const n=e.target;if(n.tagName!=="A")return;const a=n.textContent.trim();d=a,U.textContent=a,await m(i,p,c,d)});window.addEventListener("resize",()=>{const e=T();e!==c&&(c=e,x(),m(i,p,c,d))});async function Z(){d=await W(),m(i,"",c,d)}window.addEventListener("resize",()=>{const e=T();e!==c&&(c=e,x(),m(i,p,c,d))});Z();
