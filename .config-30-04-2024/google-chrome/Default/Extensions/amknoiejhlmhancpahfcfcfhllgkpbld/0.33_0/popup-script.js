(()=>{var t=globalThis,e={},i={},s=t.parcelRequire4cfd;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in i){var s=i[t];delete i[t];var r={id:t,exports:{}};return e[t]=r,s.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){i[t]=e},t.parcelRequire4cfd=s);var r=s.register;r("cg86O",function(t,e){Object.defineProperty(t.exports,"DEFAULT_ORIGIN_LIST",{get:()=>i,set:void 0,enumerable:!0,configurable:!0});let i=["https://hoppscotch.io"]}),r("80dxj",function(t,e){});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,o=n.trustedTypes,l=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,$=`<${c}>`,d=document,p=()=>d.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,g=Array.isArray,_=t=>g(t)||"function"==typeof t?.[Symbol.iterator],A="[ 	\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,m=/>/g,y=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,b=/"/g,w=/^(?:script|style|textarea|title)$/i,H=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),N=H(1),T=(H(2),Symbol.for("lit-noChange")),M=Symbol.for("lit-nothing"),C=new WeakMap,I=d.createTreeWalker(d,129);function S(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==l?l.createHTML(e):e}let L=(t,e)=>{let i=t.length-1,s=[],r,n=2===e?"<svg>":"",o=v;for(let e=0;e<i;e++){let i=t[e],l,c,d=-1,p=0;for(;p<i.length&&(o.lastIndex=p,null!==(c=o.exec(i)));)p=o.lastIndex,o===v?"!--"===c[1]?o=f:void 0!==c[1]?o=m:void 0!==c[2]?(w.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=y):void 0!==c[3]&&(o=y):o===y?">"===c[0]?(o=r??v,d=-1):void 0===c[1]?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=void 0===c[3]?y:'"'===c[3]?b:x):o===b||o===x?o=y:o===f||o===m?o=v:(o=y,r=void 0);let u=o===y&&t[e+1].startsWith("/>")?" ":"";n+=o===v?i+$:d>=0?(s.push(l),i.slice(0,d)+h+i.slice(d)+a+u):i+a+(-2===d?e:u)}return[S(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class E{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0,l=t.length-1,$=this.parts,[d,u]=L(t,e);if(this.el=E.createElement(d,i),I.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=I.nextNode())&&$.length<l;){if(1===s.nodeType){if(s.hasAttributes())for(let t of s.getAttributeNames())if(t.endsWith(h)){let e=u[n++],i=s.getAttribute(t).split(a),o=/([.?@])?(.*)/.exec(e);$.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?z:"?"===o[1]?D:"@"===o[1]?P:B}),s.removeAttribute(t)}else t.startsWith(a)&&($.push({type:6,index:r}),s.removeAttribute(t));if(w.test(s.tagName)){let t=s.textContent.split(a),e=t.length-1;if(e>0){s.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],p()),I.nextNode(),$.push({type:2,index:++r});s.append(t[e],p())}}}else if(8===s.nodeType){if(s.data===c)$.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(a,t+1));)$.push({type:7,index:r}),t+=a.length-1}}r++}}static createElement(t,e){let i=d.createElement("template");return i.innerHTML=t,i}}function U(t,e,i=t,s){if(e===T)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl,n=u(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t))._$AT(t,i,s),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=U(t,r._$AS(t,e.values),r,s)),e}class O{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??d).importNode(e,!0);I.currentNode=s;let r=I.nextNode(),n=0,o=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new R(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new V(r,this,t)),this._$AV.push(e),l=i[++o]}n!==l?.index&&(r=I.nextNode(),n++)}return I.currentNode=d,s}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){u(t=U(this,t,e))?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(d.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=E.createElement(S(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let t=new O(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new E(t)),e}T(t){g(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new R(this.k(p()),this.k(p()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}_$AI(t,e=this,i,s){let r=this.strings,n=!1;if(void 0===r)(n=!u(t=U(this,t,e,0))||t!==this._$AH&&t!==T)&&(this._$AH=t);else{let s,o;let l=t;for(t=r[0],s=0;s<r.length-1;s++)(o=U(this,l[i+s],e,s))===T&&(o=this._$AH[s]),n||=!u(o)||o!==this._$AH[s],o===M?t=M:t!==M&&(t+=(o??"")+r[s+1]),this._$AH[s]=o}n&&!s&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class z extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class D extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class P extends B{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??M)===T)return;let i=this._$AH,s=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==M&&(i===M||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}let j=n.litHtmlPolyfillSupport;j?.(E,R),(n.litHtmlVersions??=[]).push("3.0.0");let k=(t,e,i)=>{let s=i?.renderBefore??e,r=s._$litPart$;if(void 0===r){let t=i?.renderBefore??null;s._$litPart$=r=new R(e.insertBefore(p(),t),t,void 0,i??{})}return r._$AI(t),r},W=t=>(...e)=>({_$litDirective$:t,values:e});class q{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class F extends q{constructor(t){if(super(t),this.et=M,2!==t.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||null==t)return this.vt=void 0,this.et=t;if(t===T)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;let e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}F.directiveName="unsafeHTML",F.resultType=1,W(F);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class G extends F{}G.directiveName="unsafeSVG",G.resultType=2;let J=W(G);var Z=s("cg86O");s("80dxj");let K=[],Q="",X="https://hoppscotch.io",Y="",tt=t=>new Promise((e,i)=>{chrome.storage.sync.set({originList:JSON.stringify(t)},()=>{e()})}),te=t=>{t.preventDefault();try{let t=new URL(Q);K.includes(t.origin)?Y="Origin is already on the list":(K.push(t.origin),Q="",tt(K),Y=""),k(tr(),document.body)}catch(t){Y="Improper URL",k(tr(),document.body)}},ti=t=>{Q=t.target.value,Y="",k(tr(),document.body)},ts=async t=>{K.splice(t,1),await tt(K),k(tr(),document.body)},tr=()=>N`
  ${to(Q,ti,te)}
  ${tn(Y)} ${tl(K,ts)}
`,tn=t=>N`
  ${t.length>0?N`
        <div class="err">
          ${J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>\n')}
          <span class="err-text"> ${t} </span>
        </div>
      `:N``}
`,to=(t,e,i)=>N`
  <form novalidate class="origin-input-box">
    <label class="origin-input-label" for="origin-input">Enter new origin</label>

    <div class="origin-input-wrapper">
      <input id="origin-input" required placeholder="${X}" class="origin-input" .value=${t} @input=${e}></input>
      <button class="origin-add" type="submit" @click=${i}>
        ${J('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>\n')}
        <span class="button-text">Add</span>
      </button>
    </div>
  </form>
`,tl=(t,e)=>N`
  <label class="origin-input-label">Active origins</label>
  <ul class="origin-list">
    ${t.map((t,i)=>N`
        <li class="origin-list-entry">
          <span class="origin-list-entry-origin">${t}</span>
          <button
            class="origin-delete"
            .disabled=${"https://hoppscotch.io"===t}
            @click=${()=>e(i)}
          >
            ${J('<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>\n')}
          </button>
        </li>
      `)}
  </ul>
`;new Promise((t,e)=>{chrome.storage.sync.get(["originList"],async e=>{e&&e.originList||(await tt(Z.DEFAULT_ORIGIN_LIST),t(Z.DEFAULT_ORIGIN_LIST)),t(JSON.parse(e.originList))})}).then(t=>{K=t,k(tr(),document.body)}).catch(()=>{// Just fail silently :P
}),chrome.tabs.query({active:!0},t=>{if(t.length>0)try{if(t[0].url){if(!t[0].url.startsWith("http"))return;let e=new URL(t[0].url);e&&e.origin&&(X=e.origin,Q=e.origin),k(tr(),document.body)}}catch(t){}})})();//# sourceMappingURL=popup-script.js.map

//# sourceMappingURL=popup-script.js.map