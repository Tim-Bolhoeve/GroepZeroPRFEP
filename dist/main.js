/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),n=new Map;class r{constructor(e,n){if(this._$cssResult$=!0,n!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=e=>new r("string"==typeof e?e:e+"",t),o=(e,...n)=>{const s=1===e.length?e[0]:n.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new r(s,t)},i=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return s(t)})(e):e;var a;const l=window.trustedTypes,c=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},u=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class _ extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const r=this._$Eh(n,t);void 0!==r&&(this._$Eu.set(r,n),e.push(r))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(i(e))}else void 0!==e&&t.push(i(e));return t}static _$Eh(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{e?t.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),r=window.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=p){var r,s;const o=this.constructor._$Eh(e,n);if(void 0!==o&&!0===n.reflect){const i=(null!==(s=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:d.toAttribute)(t,n.type);this._$Ei=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Ei=null}}_$AK(e,t){var n,r,s;const o=this.constructor,i=o._$Eu.get(e);if(void 0!==i&&this._$Ei!==i){const e=o.getPropertyOptions(i),a=e.converter,l=null!==(s=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==s?s:d.fromAttribute;this._$Ei=i,this[i]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var m;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:_}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.1.0");const f=globalThis.trustedTypes,v=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,y=`<${b}>`,$=document,w=(e="")=>$.createComment(e),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,k=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,P=/"/g,T=/^(?:script|style|textarea)$/i,O=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),U=O(1),j=(O(2),Symbol.for("lit-noChange")),B=Symbol.for("lit-nothing"),N=new WeakMap,M=$.createTreeWalker($,129,null,!1),H=(e,t)=>{const n=e.length-1,r=[];let s,o=2===t?"<svg>":"",i=A;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,h=0;for(;h<n.length&&(i.lastIndex=h,l=i.exec(n),null!==l);)h=i.lastIndex,i===A?"!--"===l[1]?i=x:void 0!==l[1]?i=k:void 0!==l[2]?(T.test(l[2])&&(s=RegExp("</"+l[2],"g")),i=S):void 0!==l[3]&&(i=S):i===S?">"===l[0]?(i=null!=s?s:A,c=-1):void 0===l[1]?c=-2:(c=i.lastIndex-l[2].length,a=l[1],i=void 0===l[3]?S:'"'===l[3]?P:R):i===P||i===R?i=S:i===x||i===k?i=A:(i=S,s=void 0);const d=i===S&&e[t+1].startsWith("/>")?" ":"";o+=i===A?n+y:c>=0?(r.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+g+d):n+g+(-2===c?(r.push(void 0),t):d)}const a=o+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(a):a,r]};class L{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,o=0;const i=e.length-1,a=this.parts,[l,c]=H(e,t);if(this.el=L.createElement(l,n),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=M.nextNode())&&a.length<i;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const n=c[o++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?q:"@"===t[1]?Z:D})}else a.push({type:6,index:s})}for(const t of e)r.removeAttribute(t)}if(T.test(r.tagName)){const e=r.textContent.split(g),t=e.length-1;if(t>0){r.textContent=f?f.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],w()),M.nextNode(),a.push({type:2,index:++s});r.append(e[t],w())}}}else if(8===r.nodeType)if(r.data===b)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(g,e+1));)a.push({type:7,index:s}),e+=g.length-1}s++}}static createElement(e,t){const n=$.createElement("template");return n.innerHTML=e,n}}function I(e,t,n=e,r){var s,o,i,a;if(t===j)return t;let l=void 0!==r?null===(s=n._$Cl)||void 0===s?void 0:s[r]:n._$Cu;const c=C(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,r)),void 0!==r?(null!==(i=(a=n)._$Cl)&&void 0!==i?i:a._$Cl=[])[r]=l:n._$Cu=l),void 0!==l&&(t=I(e,l._$AS(e,t.values),l,r)),t}class F{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:r}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:$).importNode(n,!0);M.currentNode=s;let o=M.nextNode(),i=0,a=0,l=r[0];for(;void 0!==l;){if(i===l.index){let t;2===l.type?t=new V(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new K(o,this,e)),this.v.push(t),l=r[++a]}i!==(null==l?void 0:l.index)&&(o=M.nextNode(),i++)}return s}m(e){let t=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class V{constructor(e,t,n,r){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),C(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==j&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return E(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==B&&C(this._$AH)?this._$AA.nextSibling.data=e:this.S($.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:r}=e,s="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=L.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.m(n);else{const e=new F(s,this),t=e.p(this.options);e.m(n),this.S(t),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new L(e)),t}A(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new V(this.M(w()),this.M(w()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class D{constructor(e,t,n,r,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let o=!1;if(void 0===s)e=I(this,e,t,0),o=!C(e)||e!==this._$AH&&e!==j,o&&(this._$AH=e);else{const r=e;let i,a;for(e=s[0],i=0;i<s.length-1;i++)a=I(this,r[n+i],t,i),a===j&&(a=this._$AH[i]),o||(o=!C(a)||a!==this._$AH[i]),a===B?e=B:e!==B&&(e+=(null!=a?a:"")+s[i+1]),this._$AH[i]=a}o&&!r&&this.k(e)}k(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends D{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===B?void 0:e}}const z=f?f.emptyScript:"";class q extends D{constructor(){super(...arguments),this.type=4}k(e){e&&e!==B?this.element.setAttribute(this.name,z):this.element.removeAttribute(this.name)}}class Z extends D{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=I(this,e,t,0))&&void 0!==n?n:B)===j)return;const r=this._$AH,s=e===B&&r!==B||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==B&&(r===B||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const G=window.litHtmlPolyfillSupport;var Q,J;null==G||G(L,V),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.1.0");class X extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var r,s;const o=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let i=o._$litPart$;if(void 0===i){const e=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:null;o._$litPart$=i=new V(t.insertBefore(w(),e),e,void 0,null!=n?n:{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return j}}X.finalized=!0,X._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;function ee(e){return e=e||[],Array.isArray(e)?e:[e]}function te(e){return`[Vaadin.Router] ${e}`}null==Y||Y({LitElement:X}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.1.0"),window.customElements.define("custom-nav",class extends X{constructor(){super()}static get styles(){return o`
        
        `}render(){return U`
            <link href="styles.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
            <a class="navbar-brand" href="/">Groep Zero</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        `}}),window.customElements.define("custom-footer",class extends X{constructor(){super()}static get styles(){return o`
            :host {
                margin-top: auto !important;
            }
        `}render(){return U`
            <link href="styles.css" rel="stylesheet"/>
            <footer class="bg-dark py-4 mt-auto">
                <div class="container px-5">
                    <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Groep Zero 2021/2022</div></div>
                        <div class="col-auto">
                            <a class="link-light small" href="https://github.com/Tim-Bolhoeve/GroepZeroPRFEP">Github</a>
                        </div>
                    </div>
                </div>
            </footer>
        `}});const ne="module",re="nomodule",se=[ne,re];function oe(e){if(!e.match(/.+\.[m]?js$/))throw new Error(te(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function ie(e){if(!e||!ue(e.path))throw new Error(te('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(de(e.action)||Array.isArray(e.children)||de(e.children)||he(t)||n.some((t=>ue(e[t])))))throw new Error(te(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(ue(t))oe(t);else{if(!se.some((e=>e in t)))throw new Error(te('Expected route bundle to include either "nomodule" or "module" keys, or both'));se.forEach((e=>e in t&&oe(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(te(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function ae(e){ee(e).forEach((e=>ie(e)))}function le(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===ne?n.setAttribute("type",ne):t===re&&n.setAttribute(re,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function ce(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function he(e){return"object"==typeof e&&!!e}function de(e){return"function"==typeof e}function ue(e){return"string"==typeof e}function pe(e){const t=new Error(te(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const _e=new class{};function me(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const r=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(r!==window.location.origin)return;const{pathname:s,search:o,hash:i}=t;ce("go",{pathname:s,search:o,hash:i})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const fe={activate(){window.document.addEventListener("click",me)},inactivate(){window.document.removeEventListener("click",me)}};function ve(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;ce("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!de(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const ge={activate(){window.addEventListener("popstate",ve)},inactivate(){window.removeEventListener("popstate",ve)}};var be=function e(t,n,r){return t instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,n):Array.isArray(t)?function(t,n,r){for(var s=[],o=0;o<t.length;o++)s.push(e(t[o],n,r).source);return new RegExp("(?:"+s.join("|")+")",Se(r))}(t,n,r):function(e,t,n){return Re(Ee(e,n),t,n)}(t,n,r)},ye=Ee,$e=Ae,we=Re,Ce=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ee(e,t){for(var n,r=[],s=0,o=0,i="",a=t&&t.delimiter||"/",l=t&&t.delimiters||"./",c=!1;null!==(n=Ce.exec(e));){var h=n[0],d=n[1],u=n.index;if(i+=e.slice(o,u),o=u+h.length,d)i+=d[1],c=!0;else{var p="",_=e[o],m=n[2],f=n[3],v=n[4],g=n[5];if(!c&&i.length){var b=i.length-1;l.indexOf(i[b])>-1&&(p=i[b],i=i.slice(0,b))}i&&(r.push(i),i="",c=!1);var y=""!==p&&void 0!==_&&_!==p,$="+"===g||"*"===g,w="?"===g||"*"===g,C=p||a,E=f||v;r.push({name:m||s++,prefix:p,delimiter:C,optional:w,repeat:$,partial:y,pattern:E?ke(E):"[^"+xe(C)+"]+?"})}}return(i||o<e.length)&&r.push(i+e.substr(o)),r}function Ae(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var s="",o=r&&r.encode||encodeURIComponent,i=0;i<e.length;i++){var a=e[i];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(l=o(c[h],a),!t[i].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(0===h?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(s+=a.prefix)}else{if(l=o(String(c),a),!t[i].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');s+=a.prefix+l}}else s+=a}return s}}function xe(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ke(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Se(e){return e&&e.sensitive?"":"i"}function Re(e,t,n){for(var r=(n=n||{}).strict,s=!1!==n.start,o=!1!==n.end,i=xe(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(xe).concat("$").join("|"),c=s?"^":"",h=0===e.length,d=0;d<e.length;d++){var u=e[d];if("string"==typeof u)c+=xe(u),h=d===e.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+xe(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?c+=xe(u.prefix)+"("+p+")?":c+="(?:"+xe(u.prefix)+"("+p+"))?":c+=xe(u.prefix)+"("+p+")"}}return o?(r||(c+="(?:"+i+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+i+"(?="+l+"))?"),h||(c+="(?="+i+"|"+l+")")),new RegExp(c,Se(n))}be.parse=ye,be.compile=function(e,t){return Ae(Ee(e,t))},be.tokensToFunction=$e,be.tokensToRegExp=we;const{hasOwnProperty:Pe}=Object.prototype,Te=new Map;function Oe(e){try{return decodeURIComponent(e)}catch(t){return e}}function Ue(e,t,n,r,s){let o,i,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const h=e.__children=e.__children||e.children;if(!o&&(o=function(e,t,n,r,s){const o=`${e}|${n=!!n}`;let i=Te.get(o);if(!i){const t=[];i={keys:t,pattern:be(e,t,{end:n,strict:""===e})},Te.set(o,i)}const a=i.pattern.exec(t);if(!a)return null;const l=Object.assign({},s);for(let e=1;e<a.length;e++){const t=i.keys[e-1],n=t.name,r=a[e];void 0===r&&Pe.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(Oe):[]:l[n]=r?Oe(r):r)}return{path:a[0],keys:(r||[]).concat(i.keys),params:l}}(l,t,!h,r,s),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&h)for(;a<h.length;){if(!i){const r=h[a];r.parent=e;let s=o.path.length;s>0&&"/"===t.charAt(s)&&(s+=1),i=Ue(r,t.substr(s),n,o.keys,o.params)}const r=i.next(c);if(!r.done)return{done:!1,value:r.value};i=null,a++}return{done:!0}}}}function je(e){if(de(e.route.action))return e.route.action(e)}Te.set("|false",{keys:[],pattern:/(?:)/});class Be{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||je,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ae(e);const t=[...ee(e)];this.root.__children=t}addRoutes(e){return ae(e),this.root.__children.push(...ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,ue(e)?{pathname:e}:e),n=Ue(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let s=null,o=null,i=t;function a(e,l=s.value.route,c){const h=null===c&&s.value.route;return s=o||n.next(h),o=null,e||!s.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,s.value.route)?s.done?Promise.reject(pe(t)):(i=Object.assign(i?{chain:i.chain?i.chain.slice(0):[]}:{},t,s.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(i,s.value),Promise.resolve(r(i)).then((t=>null!=t&&t!==_e?(i.result=t.result||t,i):a(e,l,t)))):(o=s,Promise.resolve(_e))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(i);if(e?console.warn(t):e=new Error(t),e.context=e.context||i,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return i.result=this.errorHandler(e),i;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}Be.pathToRegexp=be;const{pathToRegexp:Ne}=Be,Me=new Map;function He(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const s=n[r];s.parent=t,He(e,s,s.__children||s.children)}}function Le(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Ie(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function Fe(e,t={}){if(!(e instanceof Be))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,s)=>{let o=Le(n,r);if(!o&&(n.clear(),He(n,e.root,e.root.__children),o=Le(n,r),!o))throw new Error(`Route "${r}" not found`);let i=Me.get(o.fullPath);if(!i){let e=Ie(o),t=o.parent;for(;t;){const n=Ie(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Ne.parse(e),r=Ne.tokensToFunction(n),s=Object.create(null);for(let e=0;e<n.length;e++)ue(n[e])||(s[n[e].name]=!0);i={toPath:r,keys:s},Me.set(e,i),o.fullPath=e}let a=i.toPath(s,t)||"/";if(t.stringifyQueryParams&&s){const e={},n=Object.keys(s);for(let t=0;t<n.length;t++){const r=n[t];i.keys[r]||(e[r]=s[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let Ve=[];function De(e){Ve.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),Ve=e}function We(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),s=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${s}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function ze(e){return null!=e}function qe({pathname:e="",search:t="",hash:n="",chain:r=[],params:s={},redirectFrom:o,resolver:i},a){const l=r.map((e=>e.route));return{baseUrl:i&&i.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:s,redirectFrom:o,getUrl:(e={})=>Je(Ye.pathToRegexp.compile(Xe(l))(Object.assign({},s,e)),i)}}function Ze(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Ke(e,t,n){if(de(e))return e.apply(n,t)}function Ge(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?Ke(n[e],t,n):void 0}function Qe(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Je(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function Xe(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class Ye extends Be{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Be.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const s=Ye.NavigationTrigger;Ye.setTriggers.apply(Ye,Object.keys(s).map((e=>s[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=qe({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();de(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{ze(e)||de(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!he(e))throw new Error(te(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=ee(e);for(let e=0;e<n.length;e++)ie(n[e]),t.__children.push(n[e])}(e,t)})));const r={redirect:t=>Ze(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return Ke(t.action,[e,r],t)})).then((e=>{return ze(e)&&(e instanceof HTMLElement||e.redirect||e===_e)?e:ue(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,ue(n)?le(n):Promise.race(se.filter((e=>e in n)).map((e=>le(n[e],e))))).then((()=>{}),(()=>{throw new Error(te(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>ze(e)?e:ue(t.component)?r.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},ue(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=qe(e),t&&this.__updateBrowserHistory(e,1===n),ce("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const s=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),s.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Qe(this.__outlet&&this.__outlet.children),this.location=qe(Object.assign(r,{resolver:this})),ce("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,s=Je(Xe(n.chain),n.resolver)===n.pathname,o=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===_e?s?e:null!==t.parent?o(e,t.parent,n):n:n));return o(n).then((e=>{if(null===e||e===_e)throw pe(r);return e&&e!==_e&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=qe(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(te(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),i=t=>Ze(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[t]);for(let t=0;t<r.length;t++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:i},r[t]),n[t].element.location=qe(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=qe(e,n[t].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:i},r[t]),r[t].element&&(r[t].element.location=qe(e,r[t].route)));return s.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const s=qe(t);return e.then((e=>{if(this.__isLatestRender(t))return Ge("onBeforeLeave",[s,n,this],r.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const s=qe(t,r.route);return e.then((e=>{if(this.__isLatestRender(t))return Ge("onBeforeEnter",[s,n,this],r.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(te(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(te(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=t&&t.chain[r].element;if(s){if(s.parentNode!==n)break;e.chain[r].element=s,n=s}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const s=e.chain[t].element;s&&(r.appendChild(s),this.__addedByRouter.set(s,!0),r===n&&this.__appearingContent.push(s),r=s)}}__removeDisappearingContent(){this.__disappearingContent&&Qe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Qe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=qe(e);Ke(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Qe(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=qe(e,e.chain[t].route);Ke(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],s=e.chain;let o;for(let e=s.length;e>0;e--)if(s[e-1].route.animate){o=s[e-1].route.animate;break}if(t&&n&&o){const e=he(o)&&o.leave||"leaving",s=he(o)&&o.enter||"entering";r.push(We(t,e)),r.push(We(n,s))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;ue(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){De(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Fe(this)),Je(this.__urlForName(e,t),this)}urlForPath(e,t){return Je(Ye.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=ue(e)?this.__createUrl(e,"http://a"):e;return ce("go",{pathname:t,search:n,hash:r})}}const et=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,tt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function nt(e,t){if("function"!=typeof e)return;const n=et.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(tt?!(tt&&Object.keys(tt).map((e=>tt[e])).filter((e=>e.productionMode)).length>0):!nt((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(e,t){if(window.Vaadin.developmentMode)nt(e,t)}((function(){})),Ye.NavigationTrigger={POPSTATE:ge,CLICK:fe},window.customElements.define("cursus-table",class extends X{constructor(){super()}static get properties(){return{cursus:{type:Object},title:{type:String,attribute:!0,reflect:!1}}}connectedCallback(){super.connectedCallback(),this._tests=this.cursus.tests,this._rowspan=this._tests.length>1?this._tests.length+1:2}static get styles(){return o`
            .table {
                margin-bottom: 25px;
            }
        `}render(){return U`
            <link href="styles.css" rel="stylesheet">
            <h3>${this.title}</h3>
            <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Naam</th>
                    <th scope="col">EC-cursus</th>
                    <th scope="col">Toets & Toetsvorm</th>
                    <th scope="col">Weging</th>
                    <th scope="col">EC-toets</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="${this._rowspan}" scope="row">${this.cursus.code}</td>
                    <td rowspan="${this._rowspan}">${this.cursus.name}</td>
                    <td rowspan="${this._rowspan}">${this.cursus.ec_course}</td>
                </tr>
                ${this._tests.map((e=>U`
                        <tr>
                            <td scope="row">${e.name}</td>
                            <td>${e.weight}</td>
                            <td>${e.ec_test}</td>
                        </tr>
                `))}
            </tbody>
            </table>
        `}}),window.customElements.define("archive-button",class extends X{static get styles(){return o`
            button {
                width: 15%;
            }
        `}render(){return U`
            <link href="styles.css" rel="stylesheet">
            <button
             @click=${()=>this._newEvent("onArchive")} 
             type="button" 
             class="btn btn-warning">
                Archive
            </button>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("custom-header",class extends X{constructor(){super()}static get properties(){return{title:{type:String,attribute:!0,reflect:!1}}}render(){return U`
            <link href="styles.css" rel="stylesheet">
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2"><slot></slot></h1>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"></div>
                    </div>
                </div>
            </header>
        `}});const rt=[{code:"MBBM-P-BUP1-17",name:"Businessplan Principles 1",ec_course:5,tests:[{name:"TOETS1 - MC tentamen Principles",weight:100,ec_test:5}],replacement:[{code:"MBBU-P-MAVE-18",name:"Marktverkenning",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]}]},{code:"MBBM-P-PP-17",name:"Persoonlijke professionalisering",ec_course:5,tests:[{name:"TOETS1 - MC tentamen Principles",weight:100,ec_test:5}],replacement:[{code:"MBBU-P-PRVA-20",name:"Professionele vaardigheden A",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]},{code:"MBBU-P-PRVB-18",name:"Professionele vaardigheden B",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]}]}];window.customElements.define("cursus-div",class extends X{constructor(){super(),this.location=ot.location}static get properties(){return{location:Object}}connectedCallback(){super.connectedCallback();let e=this.location.params;this._cursusCode=e.code,this._getCourseFromCode(this._cursusCode)}_archiveCourse(){}_getCourseFromCode(e){rt.find((t=>t.code===e))&&(this._foundCourse=rt.find((t=>t.code===e)),this._replaceCourse=this._foundCourse.replacement[0])}static get styles(){return o`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `}render(){return void 0===this._foundCourse?U`
                <div id="cursussen" class="container">
                    <link href="styles.css" rel="stylesheet">
                    <h1>Cursus met code: ${this._cursusCode} niet gevonden</h1>
                </div>
            `:U`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Bezemvak ${this._foundCourse.code}</custom-header>
            <div id="cursussen" class="container table-responsive">
                <h2>Periode: A,B,C</h2>
                <cursus-table
                    title="Huidig"
                    .cursus=${this._foundCourse} 
                >
                </cursus-table>

                <cursus-table
                    title="Vervangend"
                    .cursus=${this._replaceCourse}
                >
                </cursus-table>
                <archive-button
                    @onArchive=${this._archiveCourse}
                ></archive-button>
            </div>
        `}}),window.customElements.define("test-comp",class extends X{constructor(){super()}static get styles(){return o`
        
        `}render(){return U`
            <h1>Hello</h1>
        `}}),window.customElements.define("cursus-table-home",class extends X{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return o`
        .blankcell {
            background: none!important; 
        }
      
        thead {
            background-color:  #5bc0de !important;
            color: black;
        }
      
        tr:hover{
            background-color:  #FFFFCC;
        }
        `}render(){return U`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Oude naam</th>
                    <th scope="col">Oude Curuscode</th>
                    <th scope="col">Nieuwe naam</th>
                    <th scope="col">Nieuwe Cursuscode</th>
                    <th scope="col">Meer informatie</th>
                </tr>
            </thead>
            <tbody id="myTable">
                ${rt.map((e=>U`
                    ${e.replacement.length>1?U`  
                        <tr>
                            <td>${e.name}</td>
                            <td>${e.code}</td>
                            <td>${e.replacement[0].name}<br>${e.replacement[1].name}</td>
                            <td>${e.replacement[0].code}<br>${e.replacement[1].code}</td>
                            <td><a href="/cursus/${e.code}">Bekijk</a></td>
                        </tr>
                        `:U` 
                            <tr>
                                <td>${e.name}</td>
                                <td>${e.code}</td>
                                <td>${e.replacement[0].name}</td>
                                <td>${e.replacement[0].code}</td>
                                <td><a href="/cursus/${e.code}">Bekijk</a></td>
                            </tr>
                        `}
                `))}
            </tbody>
            </table>
        `}}),window.customElements.define("search-bar",class extends X{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return o`
        `}render(){return U`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <section class="py-4" id="features">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-10">
                        <br>
                        <form id="myForm" action="" method="get">
                            <div style="display: inline-block;">
                                <input type="text" id="name" class="form-control" placeholder="Zoeken op oude naam.." name="name">
                            </div>
                            <div style="display: inline-block;">
                                <button class="btn btn-outline-primary" type="submit" onClick="console.log('test')">Zoeken</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>


        `}}),window.customElements.define("home-table",class extends X{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return o`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `}render(){return U`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Zoeken</custom-header>
            <search-bar></search-bar>
            <div id="cursussen" class="container table-responsive">
                <cursus-table-home>
                </cursus-table-home>
            </div>
        `}}),window.customElements.define("search-script",class extends X{constructor(){super(),this.location=ot.location}connectedCallback(){super.connectedCallback();let e=this.location.params.name;this._getCourseFromName(e)}_getCourseFromName(e){this._foundCourse=rt.find((t=>t.name===e))}static get styles(){return o`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }

            .blankcell {
                background: none!important; 
            }
          
            thead {
                background-color:  #5bc0de !important;
                color: black;
            }
        `}render(){return U`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link href="styles.css" rel="stylesheet">

            <custom-header>Gezocht:<br> "${this._foundCourse.name}"</custom-header>

            <div id="cursussen" class="container table-responsive">
                <table class="table table-bordered">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Oude naam</th>
                            <th scope="col">Oude Curuscode</th>
                            <th scope="col">Nieuwe naam</th>
                            <th scope="col">Nieuwe Cursuscode</th>
                            <th scope="col">Meer informatie</th>
                        </tr>
                    </thead>

                    <tbody id="myTable">
                            ${this._foundCourse.replacement.length>1?U`  
                                <tr>
                                    <td>${this._foundCourse.name}</td>
                                    <td>${this._foundCourse.code}</td>
                                    <td>${this._foundCourse.replacement[0].name}<br>${this._foundCourse.replacement[1].name}</td>
                                    <td>${this._foundCourse.replacement[0].code}<br>${this._foundCourse.replacement[1].code}</td>
                                    <td><a href="/cursus/${this._foundCourse.code}">Bekijk</a></td>
                                </tr>
                                `:U` 
                                    <tr>
                                        <td>${this._foundCourse.name}</td>
                                        <td>${this._foundCourse.code}</td>
                                        <td>${this._foundCourse.replacement[0].name}</td>
                                        <td>${this._foundCourse.replacement[0].code}</td>
                                        <td><a href="/cursus/${this._foundCourse.code}">Bekijk</a></td>
                                    </tr>
                                `}
                    </tbody>
                </table>
            </div>
        `}});const st=document.querySelector("#main"),ot=new Ye(st);ot.setRoutes([{path:"/",component:"home-table"},{path:"/name=:name",component:"search-script"},{path:"/cursus/:code",component:"cursus-div"},{path:"(.*)",component:""}])})();