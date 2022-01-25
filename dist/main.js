/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),n=new Map;class r{constructor(e,n){if(this._$cssResult$=!0,n!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const o=e=>new r("string"==typeof e?e:e+"",t),i=(e,...n)=>{const o=1===e.length?e[0]:n.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new r(o,t)},s=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return o(t)})(e):e;var a;const c=window.trustedTypes,l=c?c.emptyScript:"",u=window.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},h=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const r=this._$Eh(n,t);void 0!==r&&(this._$Eu.set(r,n),e.push(r))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eh(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{e?t.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),r=window.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=p){var r,o;const i=this.constructor._$Eh(e,n);if(void 0!==i&&!0===n.reflect){const s=(null!==(o=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==o?o:d.toAttribute)(t,n.type);this._$Ei=e,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(e,t){var n,r,o;const i=this.constructor,s=i._$Eu.get(e);if(void 0!==s&&this._$Ei!==s){const e=i.getPropertyOptions(s),a=e.converter,c=null!==(o=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=s,this[s]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var v;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.1.0");const m=globalThis.trustedTypes,_=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,y=`<${b}>`,w=document,$=(e="")=>w.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,k=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,S=/"/g,j=/^(?:script|style|textarea)$/i,T=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),R=T(1),U=(T(2),Symbol.for("lit-noChange")),N=Symbol.for("lit-nothing"),B=new WeakMap,M=w.createTreeWalker(w,129,null,!1),I=(e,t)=>{const n=e.length-1,r=[];let o,i=2===t?"<svg>":"",s=C;for(let t=0;t<n;t++){const n=e[t];let a,c,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,c=s.exec(n),null!==c);)u=s.lastIndex,s===C?"!--"===c[1]?s=x:void 0!==c[1]?s=k:void 0!==c[2]?(j.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=O):void 0!==c[3]&&(s=O):s===O?">"===c[0]?(s=null!=o?o:C,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?O:'"'===c[3]?S:P):s===S||s===P?s=O:s===x||s===k?s=C:(s=O,o=void 0);const d=s===O&&e[t+1].startsWith("/>")?" ":"";i+=s===C?n+y:l>=0?(r.push(a),n.slice(0,l)+"$lit$"+n.slice(l)+g+d):n+g+(-2===l?(r.push(void 0),t):d)}const a=i+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(a):a,r]};class L{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0;const s=e.length-1,a=this.parts,[c,l]=I(e,t);if(this.el=L.createElement(c,n),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=M.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const n=l[i++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?q:"?"===t[1]?z:"@"===t[1]?K:V})}else a.push({type:6,index:o})}for(const t of e)r.removeAttribute(t)}if(j.test(r.tagName)){const e=r.textContent.split(g),t=e.length-1;if(t>0){r.textContent=m?m.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],$()),M.nextNode(),a.push({type:2,index:++o});r.append(e[t],$())}}}else if(8===r.nodeType)if(r.data===b)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(g,e+1));)a.push({type:7,index:o}),e+=g.length-1}o++}}static createElement(e,t){const n=w.createElement("template");return n.innerHTML=e,n}}function H(e,t,n=e,r){var o,i,s,a;if(t===U)return t;let c=void 0!==r?null===(o=n._$Cl)||void 0===o?void 0:o[r]:n._$Cu;const l=E(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(i=null==c?void 0:c._$AO)||void 0===i||i.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,n,r)),void 0!==r?(null!==(s=(a=n)._$Cl)&&void 0!==s?s:a._$Cl=[])[r]=c:n._$Cu=c),void 0!==c&&(t=H(e,c._$AS(e,t.values),c,r)),t}class D{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:r}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:w).importNode(n,!0);M.currentNode=o;let i=M.nextNode(),s=0,a=0,c=r[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new F(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new X(i,this,e)),this.v.push(t),c=r[++a]}s!==(null==c?void 0:c.index)&&(i=M.nextNode(),s++)}return o}m(e){let t=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class F{constructor(e,t,n,r){var o;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cg=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),E(e)?e===N||null==e||""===e?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==U&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return A(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==N&&E(this._$AH)?this._$AA.nextSibling.data=e:this.S(w.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=L.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(n);else{const e=new D(o,this),t=e.p(this.options);e.m(n),this.S(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new L(e)),t}A(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new F(this.M($()),this.M($()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,n,r,o){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const o=this.strings;let i=!1;if(void 0===o)e=H(this,e,t,0),i=!E(e)||e!==this._$AH&&e!==U,i&&(this._$AH=e);else{const r=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=H(this,r[n+s],t,s),a===U&&(a=this._$AH[s]),i||(i=!E(a)||a!==this._$AH[s]),a===N?e=N:e!==N&&(e+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}i&&!r&&this.k(e)}k(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class q extends V{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===N?void 0:e}}const W=m?m.emptyScript:"";class z extends V{constructor(){super(...arguments),this.type=4}k(e){e&&e!==N?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class K extends V{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=H(this,e,t,0))&&void 0!==n?n:N)===U)return;const r=this._$AH,o=e===N&&r!==N||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==N&&(r===N||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const Z=window.litHtmlPolyfillSupport;var G,J;null==Z||Z(L,F),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.1.0");class Q extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var r,o;const i=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let s=i._$litPart$;if(void 0===s){const e=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;i._$litPart$=s=new F(t.insertBefore($(),e),e,void 0,null!=n?n:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return U}}Q.finalized=!0,Q._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:Q});const Y=globalThis.litElementPolyfillSupport;function ee(e){return e=e||[],Array.isArray(e)?e:[e]}function te(e){return`[Vaadin.Router] ${e}`}null==Y||Y({LitElement:Q}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.1.0"),window.customElements.define("custom-nav",class extends Q{constructor(){super()}static get styles(){return i`
        
        `}render(){return R`
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
                        <li class="nav-item"><a class="nav-link" href="/home/voorstellen">Nieuw vak voorstellen</a></li>
                        <li class="nav-item"><a class="nav-link" href="/home/keuren">Keuren</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login/inloggen">Login</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        `}}),window.customElements.define("custom-footer",class extends Q{constructor(){super()}static get styles(){return i`
            :host {
                margin-top: auto !important;
            }
        `}render(){return R`
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
        `}});const ne="module",re="nomodule",oe=[ne,re];function ie(e){if(!e.match(/.+\.[m]?js$/))throw new Error(te(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function se(e){if(!e||!he(e.path))throw new Error(te('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(de(e.action)||Array.isArray(e.children)||de(e.children)||ue(t)||n.some((t=>he(e[t])))))throw new Error(te(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(he(t))ie(t);else{if(!oe.some((e=>e in t)))throw new Error(te('Expected route bundle to include either "nomodule" or "module" keys, or both'));oe.forEach((e=>e in t&&ie(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(te(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function ae(e){ee(e).forEach((e=>se(e)))}function ce(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===ne?n.setAttribute("type",ne):t===re&&n.setAttribute(re,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function le(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function ue(e){return"object"==typeof e&&!!e}function de(e){return"function"==typeof e}function he(e){return"string"==typeof e}function pe(e){const t=new Error(te(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const fe=new class{};function ve(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const r=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(r!==window.location.origin)return;const{pathname:o,search:i,hash:s}=t;le("go",{pathname:o,search:i,hash:s})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const me={activate(){window.document.addEventListener("click",ve)},inactivate(){window.document.removeEventListener("click",ve)}};function _e(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;le("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!de(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const ge={activate(){window.addEventListener("popstate",_e)},inactivate(){window.removeEventListener("popstate",_e)}};var be=function e(t,n,r){return t instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,n):Array.isArray(t)?function(t,n,r){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],n,r).source);return new RegExp("(?:"+o.join("|")+")",Oe(r))}(t,n,r):function(e,t,n){return Pe(Ae(e,n),t,n)}(t,n,r)},ye=Ae,we=Ce,$e=Pe,Ee=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ae(e,t){for(var n,r=[],o=0,i=0,s="",a=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=Ee.exec(e));){var u=n[0],d=n[1],h=n.index;if(s+=e.slice(i,h),i=h+u.length,d)s+=d[1],l=!0;else{var p="",f=e[i],v=n[2],m=n[3],_=n[4],g=n[5];if(!l&&s.length){var b=s.length-1;c.indexOf(s[b])>-1&&(p=s[b],s=s.slice(0,b))}s&&(r.push(s),s="",l=!1);var y=""!==p&&void 0!==f&&f!==p,w="+"===g||"*"===g,$="?"===g||"*"===g,E=p||a,A=m||_;r.push({name:v||o++,prefix:p,delimiter:E,optional:$,repeat:w,partial:y,pattern:A?ke(A):"[^"+xe(E)+"]+?"})}}return(s||i<e.length)&&r.push(s+e.substr(i)),r}function Ce(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=n?n[a.name]:void 0;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(c=i(l[u],a),!t[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===u?a.prefix:a.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(c=i(String(l),a),!t[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');o+=a.prefix+c}}else o+=a}return o}}function xe(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ke(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Oe(e){return e&&e.sensitive?"":"i"}function Pe(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,s=xe(n.delimiter||"/"),a=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(xe).concat("$").join("|"),l=o?"^":"",u=0===e.length,d=0;d<e.length;d++){var h=e[d];if("string"==typeof h)l+=xe(h),u=d===e.length-1&&a.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+xe(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=xe(h.prefix)+"("+p+")?":l+="(?:"+xe(h.prefix)+"("+p+"))?":l+=xe(h.prefix)+"("+p+")"}}return i?(r||(l+="(?:"+s+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+s+"(?="+c+"))?"),u||(l+="(?="+s+"|"+c+")")),new RegExp(l,Oe(n))}be.parse=ye,be.compile=function(e,t){return Ce(Ae(e,t))},be.tokensToFunction=we,be.tokensToRegExp=$e;const{hasOwnProperty:Se}=Object.prototype,je=new Map;function Te(e){try{return decodeURIComponent(e)}catch(t){return e}}function Re(e,t,n,r,o){let i,s,a=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let s=je.get(i);if(!s){const t=[];s={keys:t,pattern:be(e,t,{end:n,strict:""===e})},je.set(i,s)}const a=s.pattern.exec(t);if(!a)return null;const c=Object.assign({},o);for(let e=1;e<a.length;e++){const t=s.keys[e-1],n=t.name,r=a[e];void 0===r&&Se.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(Te):[]:c[n]=r?Te(r):r)}return{path:a[0],keys:(r||[]).concat(s.keys),params:c}}(c,t,!u,r,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&u)for(;a<u.length;){if(!s){const r=u[a];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),s=Re(r,t.substr(o),n,i.keys,i.params)}const r=s.next(l);if(!r.done)return{done:!1,value:r.value};s=null,a++}return{done:!0}}}}function Ue(e){if(de(e.route.action))return e.route.action(e)}je.set("|false",{keys:[],pattern:/(?:)/});class Ne{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ue,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ae(e);const t=[...ee(e)];this.root.__children=t}addRoutes(e){return ae(e),this.root.__children.push(...ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,he(e)?{pathname:e}:e),n=Re(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,s=t;function a(e,c=o.value.route,l){const u=null===l&&o.value.route;return o=i||n.next(u),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,o.value.route)?o.done?Promise.reject(pe(t)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},t,o.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(s,o.value),Promise.resolve(r(s)).then((t=>null!=t&&t!==fe?(s.result=t.result||t,s):a(e,c,t)))):(i=o,Promise.resolve(fe))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(s);if(e?console.warn(t):e=new Error(t),e.context=e.context||s,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return s.result=this.errorHandler(e),s;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}Ne.pathToRegexp=be;const{pathToRegexp:Be}=Ne,Me=new Map;function Ie(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];o.parent=t,Ie(e,o,o.__children||o.children)}}function Le(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function He(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function De(e,t={}){if(!(e instanceof Ne))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=Le(n,r);if(!i&&(n.clear(),Ie(n,e.root,e.root.__children),i=Le(n,r),!i))throw new Error(`Route "${r}" not found`);let s=Me.get(i.fullPath);if(!s){let e=He(i),t=i.parent;for(;t;){const n=He(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Be.parse(e),r=Be.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)he(n[e])||(o[n[e].name]=!0);s={toPath:r,keys:o},Me.set(e,s),i.fullPath=e}let a=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];s.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let Fe=[];function Ve(e){Fe.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),Fe=e}function qe(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function We(e){return null!=e}function ze({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:s},a){const c=r.map((e=>e.route));return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:a||c.length&&c[c.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>Je(Ye.pathToRegexp.compile(Qe(c))(Object.assign({},o,e)),s)}}function Ke(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Xe(e,t,n){if(de(e))return e.apply(n,t)}function Ze(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?Xe(n[e],t,n):void 0}function Ge(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Je(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function Qe(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class Ye extends Ne{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Ne.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const o=Ye.NavigationTrigger;Ye.setTriggers.apply(Ye,Object.keys(o).map((e=>o[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=ze({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();de(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{We(e)||de(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!ue(e))throw new Error(te(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=ee(e);for(let e=0;e<n.length;e++)se(n[e]),t.__children.push(n[e])}(e,t)})));const r={redirect:t=>Ke(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return Xe(t.action,[e,r],t)})).then((e=>{return We(e)&&(e instanceof HTMLElement||e.redirect||e===fe)?e:he(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,he(n)?ce(n):Promise.race(oe.filter((e=>e in n)).map((e=>ce(n[e],e))))).then((()=>{}),(()=>{throw new Error(te(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>We(e)?e:he(t.component)?r.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},he(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=ze(e),t&&this.__updateBrowserHistory(e,1===n),le("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Ge(this.__outlet&&this.__outlet.children),this.location=ze(Object.assign(r,{resolver:this})),le("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,o=Je(Qe(n.chain),n.resolver)===n.pathname,i=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===fe?o?e:null!==t.parent?i(e,t.parent,n):n:n));return i(n).then((e=>{if(null===e||e===fe)throw pe(r);return e&&e!==fe&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=ze(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(te(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),s=t=>Ke(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t]);for(let t=0;t<r.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[t]),n[t].element.location=ze(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=ze(e,n[t].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:s},r[t]),r[t].element&&(r[t].element.location=ze(e,r[t].route)));return o.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=ze(t);return e.then((e=>{if(this.__isLatestRender(t))return Ze("onBeforeLeave",[o,n,this],r.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const o=ze(t,r.route);return e.then((e=>{if(this.__isLatestRender(t))return Ze("onBeforeEnter",[o,n,this],r.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(te(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(te(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&Ge(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ge(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=ze(e);Xe(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Ge(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=ze(e,e.chain[t].route);Xe(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=ue(i)&&i.leave||"leaving",o=ue(i)&&i.enter||"entering";r.push(qe(t,e)),r.push(qe(n,o))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;he(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Ve(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=De(this)),Je(this.__urlForName(e,t),this)}urlForPath(e,t){return Je(Ye.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=he(e)?this.__createUrl(e,"http://a"):e;return le("go",{pathname:t,search:n,hash:r})}}const et=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,tt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function nt(e,t){if("function"!=typeof e)return;const n=et.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};function rt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(tt?!(tt&&Object.keys(tt).map((e=>tt[e])).filter((e=>e.productionMode)).length>0):!nt((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(e,t){if(window.Vaadin.developmentMode)nt(e,t)}((function(){})),Ye.NavigationTrigger={POPSTATE:ge,CLICK:me},window.customElements.define("cursus-table",class extends Q{constructor(){super(),this.amount=0}static get properties(){return{cursus:{type:Object},title:{type:String,attribute:!0,reflect:!1},amount:{type:Number,attribute:!1,reflect:!1}}}connectedCallback(){if(super.connectedCallback(),this.amount>1){let e=0;this.cursus.forEach((t=>{t.tests.length>e&&(e=t.tests.length)})),this._rowspan=e+1}else this._cursus=Array.isArray(this.cursus)?this.cursus[0]:this.cursus,this._tests=Array.isArray(this.cursus)?this.cursus[0].tests:this.cursus.tests,this._rowspan=this._tests.length>1?this._tests.length+1:2}static get styles(){return i`
            .table {
                margin-bottom: 25px;
            }
        `}render(){let e;return e=this.amount>1?R`
                ${this.cursus.map((e=>R`
                    <tr>
                        <td rowspan="${this._rowspan}" scope="row">${e.code}</td>
                        <td rowspan="${this._rowspan}">${e.name}</td>
                        <td rowspan="${this._rowspan}">${e.ec_course}</td>
                    </tr>
                    ${e.tests.map((e=>R`
                        <tr>
                            <td scope="row">${e.name}</td>
                            <td>${e.weight}</td>
                            <td>${e.ec_test}</td>
                        </tr>
                    `))}
                `))}
            `:R`
             <tr>
                    <td rowspan="${this._rowspan}" scope="row">${this._cursus.code}</td>
                    <td rowspan="${this._rowspan}">${this._cursus.name}</td>
                    <td rowspan="${this._rowspan}">${this._cursus.ec_course}</td>
                </tr>
                ${this._tests.map((e=>R`
                        <tr>
                            <td scope="row">${e.name}</td>
                            <td>${e.weight}</td>
                            <td>${e.ec_test}</td>
                        </tr>
                `))} 
            `,R`
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
                ${e}
            </tbody>
            </table>
        `}}),window.customElements.define("archive-button",class extends Q{static get properties(){return{disabled:{type:Boolean,attribute:!0,reflect:!0}}}static get styles(){return i`
            button {
                width: 15%;
            }
        `}render(){return R`
            <link href="styles.css" rel="stylesheet">
            <button
             @click=${()=>{if(!0!==this.disabled)return this._newEvent("onArchive")}} 
             type="button" 
             ?disabled=${this.disabled}
             class="btn btn-warning">
                Archive
            </button>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("custom-header",class extends Q{constructor(){super()}static get properties(){return{title:{type:String,attribute:!0,reflect:!1}}}render(){return R`
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
        `}});var ot="function"==typeof Symbol&&Symbol.observable||"@@observable",it=function(){return Math.random().toString(36).substring(7).split("").join(".")},st={INIT:"@@redux/INIT"+it(),REPLACE:"@@redux/REPLACE"+it(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+it()}};function at(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ct(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function lt(e){return!!e&&!!e[Xt]}function ut(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Zt}(e)||Array.isArray(e)||!!e[Kt]||!!e.constructor[Kt]||mt(e)||_t(e))}function dt(e,t,n){void 0===n&&(n=!1),0===ht(e)?(n?Object.keys:Gt)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function ht(e){var t=e[Xt];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:mt(e)?2:_t(e)?3:0}function pt(e,t){return 2===ht(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ft(e,t,n){var r=ht(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function vt(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function mt(e){return Vt&&e instanceof Map}function _t(e){return qt&&e instanceof Set}function gt(e){return e.o||e.t}function bt(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Jt(e);delete t[Xt];for(var n=Gt(t),r=0;r<n.length;r++){var o=n[r],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function yt(e,t){return void 0===t&&(t=!1),$t(e)||lt(e)||!ut(e)||(ht(e)>1&&(e.set=e.add=e.clear=e.delete=wt),Object.freeze(e),t&&dt(e,(function(e,t){return yt(t,!0)}),!0)),e}function wt(){ct(2)}function $t(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Et(e){var t=Qt[e];return t||ct(18,e),t}function At(){return Dt}function Ct(e,t){t&&(Et("Patches"),e.u=[],e.s=[],e.v=t)}function xt(e){kt(e),e.p.forEach(Pt),e.p=null}function kt(e){e===Dt&&(Dt=e.l)}function Ot(e){return Dt={p:[],l:Dt,h:e,m:!0,_:0}}function Pt(e){var t=e[Xt];0===t.i||1===t.i?t.j():t.O=!0}function St(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||Et("ES5").S(t,e,r),r?(n[Xt].P&&(xt(t),ct(4)),ut(e)&&(e=jt(t,e),t.l||Rt(t,e)),t.u&&Et("Patches").M(n[Xt].t,e,t.u,t.s)):e=jt(t,n,[]),xt(t),t.u&&t.v(t.u,t.s),e!==zt?e:void 0}function jt(e,t,n){if($t(t))return t;var r=t[Xt];if(!r)return dt(t,(function(o,i){return Tt(e,r,t,o,i,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return Rt(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=bt(r.k):r.o;dt(3===r.i?new Set(o):o,(function(t,i){return Tt(e,r,o,t,i,n)})),Rt(e,o,!1),n&&e.u&&Et("Patches").R(r,n,e.u,e.s)}return r.o}function Tt(e,t,n,r,o,i){if(lt(o)){var s=jt(e,o,i&&t&&3!==t.i&&!pt(t.D,r)?i.concat(r):void 0);if(ft(n,r,s),!lt(s))return;e.m=!1}if(ut(o)&&!$t(o)){if(!e.h.F&&e._<1)return;jt(e,o),t&&t.A.l||Rt(e,o)}}function Rt(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&yt(t,n)}function Ut(e,t){var n=e[Xt];return(n?gt(n):e)[t]}function Nt(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Bt(e){e.P||(e.P=!0,e.l&&Bt(e.l))}function Mt(e){e.o||(e.o=bt(e.t))}function It(e,t,n){var r=mt(t)?Et("MapSet").N(t,n):_t(t)?Et("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:At(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,i=Yt;n&&(o=[r],i=en);var s=Proxy.revocable(o,i),a=s.revoke,c=s.proxy;return r.k=c,r.j=a,c}(t,n):Et("ES5").J(t,n);return(n?n.A:At()).p.push(r),r}function Lt(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return bt(e)}var Ht,Dt,Ft="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Vt="undefined"!=typeof Map,qt="undefined"!=typeof Set,Wt="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,zt=Ft?Symbol.for("immer-nothing"):((Ht={})["immer-nothing"]=!0,Ht),Kt=Ft?Symbol.for("immer-draftable"):"__$immer_draftable",Xt=Ft?Symbol.for("immer-state"):"__$immer_state",Zt=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),Gt="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Jt=Object.getOwnPropertyDescriptors||function(e){var t={};return Gt(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},Qt={},Yt={get:function(e,t){if(t===Xt)return e;var n=gt(e);if(!pt(n,t))return function(e,t,n){var r,o=Nt(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!ut(r)?r:r===Ut(e.t,t)?(Mt(e),e.o[t]=It(e.A.h,r,e)):r},has:function(e,t){return t in gt(e)},ownKeys:function(e){return Reflect.ownKeys(gt(e))},set:function(e,t,n){var r=Nt(gt(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Ut(gt(e),t),i=null==o?void 0:o[Xt];if(i&&i.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(vt(n,o)&&(void 0!==n||pt(e.t,t)))return!0;Mt(e),Bt(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==Ut(e.t,t)||t in e.t?(e.D[t]=!1,Mt(e),Bt(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=gt(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){ct(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){ct(12)}},en={};dt(Yt,(function(e,t){en[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),en.deleteProperty=function(e,t){return en.set.call(this,e,t,void 0)},en.set=function(e,t,n){return Yt.set.call(this,e[0],t,n,e[0])};var tn=function(){function e(e){var t=this;this.g=Wt,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var o=n;n=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var r=arguments.length,s=Array(r>1?r-1:0),a=1;a<r;a++)s[a-1]=arguments[a];return i.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(s))}))}}var s;if("function"!=typeof n&&ct(6),void 0!==r&&"function"!=typeof r&&ct(7),ut(e)){var a=Ot(t),c=It(t,e,void 0),l=!0;try{s=n(c),l=!1}finally{l?xt(a):kt(a)}return"undefined"!=typeof Promise&&s instanceof Promise?s.then((function(e){return Ct(a,r),St(e,a)}),(function(e){throw xt(a),e})):(Ct(a,r),St(s,a))}if(!e||"object"!=typeof e){if(void 0===(s=n(e))&&(s=e),s===zt&&(s=void 0),t.F&&yt(s,!0),r){var u=[],d=[];Et("Patches").M(e,s,u,d),r(u,d)}return s}ct(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(o))}))};var r,o,i=t.produce(e,n,(function(e,t){r=e,o=t}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return[e,r,o]})):[i,r,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){ut(e)||ct(8),lt(e)&&(e=function(e){return lt(e)||ct(22,e),function e(t){if(!ut(t))return t;var n,r=t[Xt],o=ht(t);if(r){if(!r.P&&(r.i<4||!Et("ES5").K(r)))return r.t;r.I=!0,n=Lt(t,o),r.I=!1}else n=Lt(t,o);return dt(n,(function(t,o){r&&function(e,t){return 2===ht(e)?e.get(t):e[t]}(r.t,t)===o||ft(n,t,e(o))})),3===o?new Set(n):n}(e)}(e));var t=Ot(this),n=It(this,e,void 0);return n[Xt].C=!0,kt(t),n},t.finishDraft=function(e,t){var n=(e&&e[Xt]).A;return Ct(n,t),St(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!Wt&&ct(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var o=Et("Patches").$;return lt(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))},e}(),nn=new tn,rn=nn.produce;nn.produceWithPatches.bind(nn),nn.setAutoFreeze.bind(nn),nn.setUseProxies.bind(nn),nn.applyPatches.bind(nn),nn.createDraft.bind(nn),nn.finishDraft.bind(nn);const on=rn;var sn,an=(sn=function(e,t){return sn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},sn(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}sn(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),cn=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},ln=Object.defineProperty,un=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),dn=Object.prototype.hasOwnProperty,hn=Object.prototype.propertyIsEnumerable,pn=function(e,t,n){return t in e?ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},fn=function(e,t){for(var n in t||(t={}))dn.call(t,n)&&pn(e,n,t[n]);if(un)for(var r=0,o=un(t);r<o.length;r++)n=o[r],hn.call(t,n)&&pn(e,n,t[n]);return e};function vn(e,t,n,r){void 0===n&&(n=[]);var o,i="function"==typeof t?function(e){var t,n={},r=[],o={addCase:function(e,t){var r="string"==typeof e?e:e.type;if(r in n)throw new Error("addCase cannot be called with two reducers for the same action type");return n[r]=t,o},addMatcher:function(e,t){return r.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[n,r,t]}(t):[t,n,r],s=i[0],a=i[1],c=i[2];if("function"==typeof e)o=function(){return on(e(),(function(){}))};else{var l=on(e,(function(){}));o=function(){return l}}function u(e,t){void 0===e&&(e=o());var n=cn([s[t.type]],a.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===n.filter((function(e){return!!e})).length&&(n=[c]),n.reduce((function(e,n){if(n){var r;if(lt(e))return void 0===(r=n(e,t))?e:r;if(ut(e))return on(e,(function(e){return n(e,t)}));if(void 0===(r=n(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return u.getInitialState=o,u}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}an(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,cn([void 0],e[0].concat(this)))):new(t.bind.apply(t,cn([void 0],e.concat(this))))}}(Array),function(){function e(e,t){var n=o[e];return n?n.enumerable=t:o[e]=n={configurable:!0,enumerable:t,get:function(){var t=this[Xt];return Yt.get(t,e)},set:function(t){var n=this[Xt];Yt.set(n,e,t)}},n}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][Xt];if(!o.P)switch(o.i){case 5:r(o)&&Bt(o);break;case 4:n(o)&&Bt(o)}}}function n(e){for(var t=e.t,n=e.k,r=Gt(n),o=r.length-1;o>=0;o--){var i=r[o];if(i!==Xt){var s=t[i];if(void 0===s&&!pt(t,i))return!0;var a=n[i],c=a&&a[Xt];if(c?c.t!==s:!vt(a,s))return!0}}var l=!!t[Xt];return r.length!==Gt(t).length+(l?0:1)}function r(e){var t=e.k;if(t.length!==e.t.length)return!0;var n=Object.getOwnPropertyDescriptor(t,t.length-1);if(n&&!n.get)return!0;for(var r=0;r<t.length;r++)if(!t.hasOwnProperty(r))return!0;return!1}var o={};!function(e,t){Qt[e]||(Qt[e]=t)}("ES5",{J:function(t,n){var r=Array.isArray(t),o=function(t,n){if(t){for(var r=Array(n.length),o=0;o<n.length;o++)Object.defineProperty(r,""+o,e(o,!0));return r}var i=Jt(n);delete i[Xt];for(var s=Gt(i),a=0;a<s.length;a++){var c=s[a];i[c]=e(c,t||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(n),i)}(r,t),i={i:r?5:4,A:n?n.A:At(),P:!1,I:!1,D:{},l:n,t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,Xt,{value:i,writable:!0}),o},S:function(e,n,o){o?lt(n)&&n[Xt].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var n=t[Xt];if(n){var o=n.t,i=n.k,s=n.D,a=n.i;if(4===a)dt(i,(function(t){t!==Xt&&(void 0!==o[t]||pt(o,t)?s[t]||e(i[t]):(s[t]=!0,Bt(n)))})),dt(o,(function(e){void 0!==i[e]||pt(i,e)||(s[e]=!1,Bt(n))}));else if(5===a){if(r(n)&&(Bt(n),s.length=!0),i.length<o.length)for(var c=i.length;c<o.length;c++)s[c]=!1;else for(var l=o.length;l<i.length;l++)s[l]=!0;for(var u=Math.min(i.length,o.length),d=0;d<u;d++)i.hasOwnProperty(d)||(s[d]=!0),void 0===s[d]&&e(i[d])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?n(e):r(e)}})}();const mn="archive/ARCHIVE",_n={archive:function(e,t){function n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(t){var o=t.apply(void 0,n);if(!o)throw new Error("prepareAction did not return an object");return fn(fn({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:n[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(t){return t.type===e},n}(mn,(function(e){return{payload:{code:e,active:!1}}}))},gn=[{code:"MBBM-P-BUP1-17",name:"Businessplan Principles 1",period:"A, B, C",active:!0,ec_course:5,tests:[{name:"TOETS1 - MC tentamen Principles",weight:100,ec_test:5}],replacement:[{code:"MBBU-P-MAVE-18",name:"Marktverkenning",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]}]},{code:"MBBM-P-PP-17",name:"Persoonlijke professionalisering",period:"A,B,C",active:!0,ec_course:5,tests:[{name:"TOETS1 - Tentamen Communicatieve Vaardigheden",weight:50,ec_test:2.5},{name:"TOETS2 - Assessment Professionalisering",weight:50,ec_test:2.5}],replacement:[{code:"MBBU-P-PRVA-20",name:"Professionele vaardigheden A",ec_course:5,tests:[{name:"TOETS1 - Tentamen Spelling & Grammatica",weight:50,ec_test:2.5}]},{code:"MBBU-P-PRVB-18",name:"Professionele vaardigheden B",ec_course:5,tests:[{name:"TOETS2 - verslag / dossier Loopbaanleren",weight:50,ec_test:2.5}]}]},{code:"MBBM-P-BUP2-17",name:"Businessplan Principles 2",period:"B,C,D",active:!0,ec_course:5,tests:[{name:"TOETS1 - MC tentamen Principles 2",weight:100,ec_test:5}],replacement:[{code:"MBBU-P-ORIN-18",name:"Organisatieinrichting",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5}]}]}],bn=[{code:"MBBM-P-DIP4-20",name:"pogramming",ec_course:5,test:"Toets",weight:100,ec_test:5}],yn=bn,wn=vn(gn,{[mn]:(e,t)=>e.map((e=>{let n=t.payload;return e.code===n.code?{...e,active:n.active}:e})),"archive/REACTIVATE":(e,t)=>e.map((e=>{let n=t.payload;return e.code===n.code?{...e,active:n.active}:e}))}),$n=(vn(yn,{[mn]:(e,t)=>e.map((e=>{let n=t.payload;if(e.code===n.code)return{...e,active:n.active}}))}),function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(rt(0));if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error(rt(1));return r(e)(t,n)}if("function"!=typeof t)throw new Error(rt(2));var i=t,s=n,a=[],c=a,l=!1;function u(){c===a&&(c=a.slice())}function d(){if(l)throw new Error(rt(3));return s}function h(e){if("function"!=typeof e)throw new Error(rt(4));if(l)throw new Error(rt(5));var t=!0;return u(),c.push(e),function(){if(t){if(l)throw new Error(rt(6));t=!1,u();var n=c.indexOf(e);c.splice(n,1),a=null}}}function p(e){if(!at(e))throw new Error(rt(7));if(void 0===e.type)throw new Error(rt(8));if(l)throw new Error(rt(9));try{l=!0,s=i(s,e)}finally{l=!1}for(var t=a=c,n=0;n<t.length;n++)(0,t[n])();return e}function f(e){if("function"!=typeof e)throw new Error(rt(10));i=e,p({type:st.REPLACE})}function v(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(rt(11));function n(){e.next&&e.next(d())}return n(),{unsubscribe:t(n)}}})[ot]=function(){return this},e}return p({type:st.INIT}),(o={dispatch:p,subscribe:h,getState:d,replaceReducer:f})[ot]=v,o}(wn)),En=(e,t)=>e.filter((e=>e.code===t))[0];window.customElements.define("cursus-div",class extends Q{constructor(){super(),this.location=Cn.location,this.disabled=!1}static get properties(){return{location:Object,disabled:{type:Boolean,attribute:!1,reflect:!1}}}connectedCallback(){super.connectedCallback();let e=this.location.params;this._cursusCode=e.code;let t=$n.getState();void 0!==En(t,this._cursusCode)&&this._getCourseFromCode(this._cursusCode)}_archiveCourse(){$n.dispatch(_n.archive(this._cursusCode)),this._getCourseFromCode(this._cursusCode),this.disabled=!0}_getCourseFromCode(e){let t=$n.getState();this._foundCourse=En(t,e),this._replaceCourse=this._foundCourse.replacement,this.disabled=!this._foundCourse.active}static get styles(){return i`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `}render(){return void 0===this._foundCourse?R`
                <div id="cursussen" class="container">
                    <link href="styles.css" rel="stylesheet">
                    <h1>Cursus met code: ${this._cursusCode} niet gevonden</h1>
                </div>
            `:R`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Bezemvak ${this._foundCourse.code}</custom-header>
            <div id="cursussen" class="container table-responsive">
                <h2>Periode: ${this._foundCourse.period}</h2>
                <cursus-table
                    title="Huidig"
                    .cursus=${this._foundCourse} 
                    .amount=""
                >
                </cursus-table>

                <cursus-table
                    title="Vervangend"
                    .cursus=${this._replaceCourse}
                    .amount=${this._replaceCourse.length}
                >
                </cursus-table>
                <archive-button
                    @onArchive=${this._archiveCourse}
                    ?disabled=${this.disabled}
                ></archive-button>
            </div>
        `}}),window.customElements.define("test-comp",class extends Q{constructor(){super()}static get styles(){return i`
        
        `}render(){return R`
            <h1>Hello</h1>
        `}}),window.customElements.define("keuren-element",class extends Q{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return i`
            // #doos{
            //     background-color: green;
            // }
        `}render(){return R`
        <script src="button-event.js"></script>
        <link href="styles.css" rel="stylesheet">
        <main class="flex-shrink-0">
            <!-- Navigatie-->
            <div id="nav-placeholder"></div>
            <!-- Header-->
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Vakken Keuren</h1>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"></div>
                    </div>
                </div>
            </header>
            <!-- Tabel of dergelijke-->

            <div class="col-xs-12" style="height:50px;"></div>

            <div class="container">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>code</th>
                    <th>Naam vak</th>
                    <th>EC-cursus</th>
                    <th>Toets & Toetsform</th>
                    <th>weging</th>
                    <th>EC-toets</th>
                    <th>Keuren</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                    ${bn.map((e=>R`
                            <tr>
                                <td id="doos">${e.code}</td>
                                <td>${e.name}</td>
                                <td>${e.ec_course}</td>
                                <td>${e.test}</td>
                                <td>${e.weight}</td>
                                <td>${e.ec_test}</td>
                                <td>
                                    <div class="button-box col-lg-12">
                                        <button @click=${()=>{if(!0!==this.disabled)return this._newEvent("goedGekeurd")}} class="btn btn-primary btn-lg" id="goedkeuren" type="submit">Goedkeuren</button>
                                        <button class="btn btn-dark btn-lg" id="afkeuren" type="submit">Afkeuren</button>
                                    </div>
                                </td>              
                            </tr>`))}
                </tbody>
              </table>
            </div>
            <br><br>
        </main>
        <!-- Footer-->
        <div id="footer-placeholder"></div>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("voorstellen-element",class extends Q{static get styles(){return i`
            
        `}_clearForm(){let e=this.shadowRoot.querySelectorAll("input");e.forEach((e=>e.value="")),console.log(e)}_submitForm(){const e=this.shadowRoot.querySelector("#code"),t=this.shadowRoot.querySelector("#name"),n=this.shadowRoot.querySelector("#ec-c"),r=this.shadowRoot.querySelector("#toets"),o=this.shadowRoot.querySelector("#weging"),i=this.shadowRoot.querySelector("#ec-t"),s={code:e.value,name:t.value,ec_course:n.value,test:r.value,weight:o.value,ec_test:i.value},a=JSON.stringify(s);console.log(a)}render(){return R`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <script src="button-event.js"></script>
        <link href="styles.css" rel="stylesheet">
                <body class="d-flex flex-column">
                <main class="flex-shrink-0">
                    <!-- Navigatie-->
                    <div id="nav-placeholder"></div>
                    <!-- Form-->
                    <section class="py-5">
                        <div class="container px-5">
                            <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                                <div class="text-center mb-5">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-book-fill"></i></div>
                                    <h1 class="fw-bolder">Nieuw vak voorstellen</h1>
                                </div>
                                <div class="row gx-5 justify-content-center">
                                    <div class="col-lg-8 col-xl-6">
                                        <!-- form -->
                                            <!-- Naam input-->
                                            <div class="form-floating mb-3">
                                                <input name="code" class="form-control" id="code" type="text" placeholder="Vul een code in..." required />
                                                <label for="code">Code invoeren</label>
                                                <div class="invalid-feedback" data-sb-feedback="code:required">Een code is verplicht.</div>
                                            </div>

                                            <div class="form-floating mb-3">
                                                <input name="name" class="form-control" id="name" type="text" placeholder="Vul een naam in..." required />
                                                <label for="name">Naam invoeren</label>
                                                <div class="invalid-feedback" data-sb-feedback="name:required">Een vaknaam is verplicht.</div>
                                            </div>

                                            <div class="form-floating mb-3">
                                                <input name="ec-c" class="form-control" id="ec-c" type="number" placeholder="Vul een EC-nummer in..." required />
                                                <label for="ec-c">EC-Cursus</label>
                                                <div class="invalid-feedback" data-sb-feedback="ec-c:required">Een EC-cursus nummer is verplicht.</div>
                                            </div>

                                            <div id="toetsen">
                                                <div class="form-floating mb-3">
                                                    <div class="input-group">
                                                        <input name="toets" class="form-control" id="toets" type="text" placeholder="Vul een Toets & toetsvorm in..." required />
                                                        <label for="toets">Toets & Toetsform</label>
                                                        <div class="invalid-feedback" data-sb-feedback="toets:required">Een Toets & toetvorm is verplicht.</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-floating mb-3">
                                                <input name="weging" class="form-control" id="weging" type="number" placeholder="Vul een weging in..." required />
                                                <label for="weging">Weging</label>
                                                <div class="invalid-feedback" data-sb-feedback="weging:required">Een Weging is verplicht.</div>
                                            </div>

                                            <div class="form-floating mb-3">
                                                <input name="ec-t" class="form-control" id="ec-t" type="number" placeholder="Vul een EC-nummer in..." required />
                                                <label for="ec-t">EC-toets</label>
                                                <div class="invalid-feedback" data-sb-feedback="ec-t:required">Een EC-toets nummer is verplicht.</div>
                                            </div>

                                            <!-- gelukt bericht -->
                                            <div class="d-none" id="submitSuccessMessage">
                                                <div class="text-center mb-3">
                                                    <div class="fw-bolder">Gelukt!</div>
                                                    <a href="#">linkje hier</a>
                                                </div>
                                            </div>
                                            <!-- error bericht  -->
                                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error!</div></div>
                                            <!-- Submit knop-->
                                            <div class="button-box col-lg-12">
                                                <button class="btn btn-primary btn-lg" id="submitButton" type="button" @click=${()=>this._submitForm()}>Voorstellen</button>
                                                <button class="btn btn-dark btn-lg" id="clear" type="button" @click=${()=>this._clearForm()}>Annuleren</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <!-- Footer-->
                <div id="footer-placeholder"></div>

                <script src="//code.jquery.com/jquery.min.js"></script>

                <script>
                // navbar inladen
                $.get("./holders/navbar.html", function(data){
                    $("#nav-placeholder").replaceWith(data);
                });

                // tabel inhoud inladen
                $.get("./holders/footer.html", function(data){
                    $("#footer-placeholder").replaceWith(data);
                });

                // toets input toevoegen
                var toetsen = document.getElementById('toetsen');
                var add_toets_field = document.getElementById('add_toets_field');

                add_toets_field.onclick = function(){
                    var nieuwveld = document.createElement('input');
                    nieuwveld.setAttribute('type', 'text');
                    nieuwveld.setAttribute('name', 'toetsen');
                    nieuwveld.setAttribute('class', 'form-control');
                    nieuwveld.setAttribute('placeholder', 'Vul een Toets & toetsvorm in...');
                    toets.appendChild(nieuwveld)
                }
                </script>
                <!-- Bootstrap JS-->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
                <!--JS-->
                <script src="js/scripts.js"></script>
                <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            </body>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("cursus-table-home",class extends Q{constructor(){super(),this._cursussen=$n.getState().filter((e=>!0===e.active))}connectedCallback(){super.connectedCallback()}static get styles(){return i`
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
        `}render(){return R`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Oude naam</th>
                    <th scope="col">Oude Cursuscode</th>
                    <th scope="col">Nieuwe naam</th>
                    <th scope="col">Nieuwe Cursuscode</th>
                    <th scope="col">Meer informatie</th>
                </tr>
            </thead>
            <tbody id="myTable">
                ${this._cursussen.map((e=>R`
                    ${e.replacement.length>1?R`  
                        <tr>
                            <td>${e.name}</td>
                            <td>${e.code}</td>
                            <td>${e.replacement[0].name}<br>${e.replacement[1].name}</td>
                            <td>${e.replacement[0].code}<br>${e.replacement[1].code}</td>
                            <td><a href="/cursus/${e.code}">Bekijk</a></td>
                        </tr>
                        `:R` 
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
        `}}),window.customElements.define("search-bar",class extends Q{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return i`
        `}_searchFilter(){const e=this.shadowRoot.querySelector("#name");window.location.href=e.value}render(){return R`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <section class="py-4" id="features">
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-10">
                        <br>
                            <div style="display: inline-block;">
                                <input type="text" id="name" class="form-control" placeholder="Zoeken op oude naam..">
                            </div>
                            <div style="display: inline-block;">
                                <button class="btn btn-outline-primary" type="button" @click=${()=>this._searchFilter()}>Zoeken</button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        `}}),window.customElements.define("home-table",class extends Q{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return i`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `}render(){return R`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Zoeken</custom-header>
            <search-bar></search-bar>
            <div id="cursussen" class="container table-responsive">
                <cursus-table-home>
                </cursus-table-home>
            </div>
        `}}),window.customElements.define("search-script",class extends Q{constructor(){super(),this.location=Cn.location}connectedCallback(){super.connectedCallback();let e=this.location.params.name;this._getCourseFromName(e)}_getCourseFromName(e){this._foundCourse=gn.find((t=>t.name===e))}static get styles(){return i`
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
        `}render(){return void 0===this._foundCourse?R`
                <div id="cursussen" class="container">
                    <link href="styles.css" rel="stylesheet">
                    <h1>Cursus niet gevonden</h1>
                    <a href="/">Terug</a>
                </div>
            `:R`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link href="styles.css" rel="stylesheet">

            <custom-header>Gezocht:<br> "${this._foundCourse.name}"</custom-header>

            <search-bar></search-bar>
            
            <div class="container">
                <div class="row gx-5">
                    <div class="col-lg-10">
                        <a href="/">Terug</a>
                    </div>
                </div>
            </div>

            <div id="cursussen" class="container table-responsive">
                <table class="table table-bordered">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Oude naam</th>
                            <th scope="col">Oude Cursuscode</th>
                            <th scope="col">Nieuwe naam</th>
                            <th scope="col">Nieuwe Cursuscode</th>
                            <th scope="col">Meer informatie</th>
                        </tr>
                    </thead>

                    <tbody id="myTable">
                            ${this._foundCourse.replacement.length>1?R`  
                                <tr>
                                    <td>${this._foundCourse.name}</td>
                                    <td>${this._foundCourse.code}</td>
                                    <td>${this._foundCourse.replacement[0].name}<br>${this._foundCourse.replacement[1].name}</td>
                                    <td>${this._foundCourse.replacement[0].code}<br>${this._foundCourse.replacement[1].code}</td>
                                    <td><a href="/cursus/${this._foundCourse.code}">Bekijk</a></td>
                                </tr>
                                `:R` 
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
        `}}),window.customElements.define("login-page",class extends Q{constructor(){super()}connectedCallback(){super.connectedCallback()}render(){return R`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Login pagina (geen prioriteit)</custom-header>
        `}});const An=document.querySelector("#main"),Cn=new Ye(An);Cn.setRoutes([{path:"/",component:"home-table"},{path:"/:name",component:"search-script"},{path:"/cursus/:code",component:"cursus-div"},{path:"/home/keuren",component:"keuren-element"},{path:"/home/voorstellen",component:"voorstellen-element"},{path:"/login/inloggen",component:"login-page"},{path:"(.*)",component:""}])})();