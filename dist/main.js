/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),n=new Map;class r{constructor(e,n){if(this._$cssResult$=!0,n!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=e=>new r("string"==typeof e?e:e+"",t),i=(e,...n)=>{const s=1===e.length?e[0]:n.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new r(s,t)},o=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return s(t)})(e):e;var a;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},u=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const r=this._$Eh(n,t);void 0!==r&&(this._$Eu.set(r,n),e.push(r))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eh(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{e?t.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),r=window.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=p){var r,s;const i=this.constructor._$Eh(e,n);if(void 0!==i&&!0===n.reflect){const o=(null!==(s=null===(r=n.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:h.toAttribute)(t,n.type);this._$Ei=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Ei=null}}_$AK(e,t){var n,r,s;const i=this.constructor,o=i._$Eu.get(e);if(void 0!==o&&this._$Ei!==o){const e=i.getPropertyOptions(o),a=e.converter,l=null!==(s=null!==(r=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=o,this[o]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,n){let r=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||u)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.1.0");const f=globalThis.trustedTypes,b=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,g="?"+_,y=`<${g}>`,w=document,$=(e="")=>w.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,x=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,k=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,j=/"/g,T=/^(?:script|style|textarea)$/i,P=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),O=P(1),U=(P(2),Symbol.for("lit-noChange")),B=Symbol.for("lit-nothing"),N=new WeakMap,M=w.createTreeWalker(w,129,null,!1),q=(e,t)=>{const n=e.length-1,r=[];let s,i=2===t?"<svg>":"",o=A;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,d=0;for(;d<n.length&&(o.lastIndex=d,l=o.exec(n),null!==l);)d=o.lastIndex,o===A?"!--"===l[1]?o=C:void 0!==l[1]?o=k:void 0!==l[2]?(T.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=S):void 0!==l[3]&&(o=S):o===S?">"===l[0]?(o=null!=s?s:A,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?S:'"'===l[3]?j:R):o===j||o===R?o=S:o===C||o===k?o=A:(o=S,s=void 0);const h=o===S&&e[t+1].startsWith("/>")?" ":"";i+=o===A?n+y:c>=0?(r.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+_+h):n+_+(-2===c?(r.push(void 0),t):h)}const a=i+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,r]};class H{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,i=0;const o=e.length-1,a=this.parts,[l,c]=q(e,t);if(this.el=H.createElement(l,n),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=M.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(_)){const n=c[i++];if(e.push(t),void 0!==n){const e=r.getAttribute(n.toLowerCase()+"$lit$").split(_),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?z:"@"===t[1]?K:F})}else a.push({type:6,index:s})}for(const t of e)r.removeAttribute(t)}if(T.test(r.tagName)){const e=r.textContent.split(_),t=e.length-1;if(t>0){r.textContent=f?f.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],$()),M.nextNode(),a.push({type:2,index:++s});r.append(e[t],$())}}}else if(8===r.nodeType)if(r.data===g)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(_,e+1));)a.push({type:7,index:s}),e+=_.length-1}s++}}static createElement(e,t){const n=w.createElement("template");return n.innerHTML=e,n}}function L(e,t,n=e,r){var s,i,o,a;if(t===U)return t;let l=void 0!==r?null===(s=n._$Cl)||void 0===s?void 0:s[r]:n._$Cu;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,r)),void 0!==r?(null!==(o=(a=n)._$Cl)&&void 0!==o?o:a._$Cl=[])[r]=l:n._$Cu=l),void 0!==l&&(t=L(e,l._$AS(e,t.values),l,r)),t}class I{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:r}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:w).importNode(n,!0);M.currentNode=s;let i=M.nextNode(),o=0,a=0,l=r[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new V(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new J(i,this,e)),this.v.push(t),l=r[++a]}o!==(null==l?void 0:l.index)&&(i=M.nextNode(),o++)}return s}m(e){let t=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class V{constructor(e,t,n,r){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cg=null===(s=null==r?void 0:r.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),E(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==U&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return x(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==B&&E(this._$AH)?this._$AA.nextSibling.data=e:this.S(w.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:r}=e,s="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=H.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.m(n);else{const e=new I(s,this),t=e.p(this.options);e.m(n),this.S(t),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new H(e)),t}A(e){x(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new V(this.M($()),this.M($()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class F{constructor(e,t,n,r,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let i=!1;if(void 0===s)e=L(this,e,t,0),i=!E(e)||e!==this._$AH&&e!==U,i&&(this._$AH=e);else{const r=e;let o,a;for(e=s[0],o=0;o<s.length-1;o++)a=L(this,r[n+o],t,o),a===U&&(a=this._$AH[o]),i||(i=!E(a)||a!==this._$AH[o]),a===B?e=B:e!==B&&(e+=(null!=a?a:"")+s[o+1]),this._$AH[o]=a}i&&!r&&this.k(e)}k(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends F{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===B?void 0:e}}const D=f?f.emptyScript:"";class z extends F{constructor(){super(...arguments),this.type=4}k(e){e&&e!==B?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class K extends F{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=L(this,e,t,0))&&void 0!==n?n:B)===U)return;const r=this._$AH,s=e===B&&r!==B||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==B&&(r===B||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}}const G=window.litHtmlPolyfillSupport;var Z,Q;null==G||G(H,V),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.1.0");class X extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var r,s;const i=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:t;let o=i._$litPart$;if(void 0===o){const e=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:null;i._$litPart$=o=new V(t.insertBefore($(),e),e,void 0,null!=n?n:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return U}}X.finalized=!0,X._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;function ee(e){return e=e||[],Array.isArray(e)?e:[e]}function te(e){return`[Vaadin.Router] ${e}`}null==Y||Y({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.1.0"),window.customElements.define("custom-nav",class extends X{constructor(){super()}static get styles(){return i`
        
        `}render(){return O`
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
                        <li class="nav-item"><a class="nav-link" href="/nieuwvak">Nieuw vak voorstellen</a></li>
                        <li class="nav-item"><a class="nav-link" href="/keuren">Keuren</a></li>
                        <li class="nav-item"><a class="nav-link" href="/vakaanpassen">Vak aanpassen</a></li>
                        <li class="nav-item"><a class="nav-link" href="/voorstelbeoordelen">Voorstel beoordelen</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        `}}),window.customElements.define("custom-footer",class extends X{constructor(){super()}static get styles(){return i`
            :host {
                margin-top: auto !important;
            }
        `}render(){return O`
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
        `}});const ne="module",re="nomodule",se=[ne,re];function ie(e){if(!e.match(/.+\.[m]?js$/))throw new Error(te(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function oe(e){if(!e||!ue(e.path))throw new Error(te('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(he(e.action)||Array.isArray(e.children)||he(e.children)||de(t)||n.some((t=>ue(e[t])))))throw new Error(te(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(ue(t))ie(t);else{if(!se.some((e=>e in t)))throw new Error(te('Expected route bundle to include either "nomodule" or "module" keys, or both'));se.forEach((e=>e in t&&ie(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(te(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function ae(e){ee(e).forEach((e=>oe(e)))}function le(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===ne?n.setAttribute("type",ne):t===re&&n.setAttribute(re,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function ce(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function de(e){return"object"==typeof e&&!!e}function he(e){return"function"==typeof e}function ue(e){return"string"==typeof e}function pe(e){const t=new Error(te(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const ve=new class{};function me(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;const r=t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t);if(r!==window.location.origin)return;const{pathname:s,search:i,hash:o}=t;ce("go",{pathname:s,search:i,hash:o})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const fe={activate(){window.document.addEventListener("click",me)},inactivate(){window.document.removeEventListener("click",me)}};function be(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;ce("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!he(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const _e={activate(){window.addEventListener("popstate",be)},inactivate(){window.removeEventListener("popstate",be)}};var ge=function e(t,n,r){return t instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(t,n):Array.isArray(t)?function(t,n,r){for(var s=[],i=0;i<t.length;i++)s.push(e(t[i],n,r).source);return new RegExp("(?:"+s.join("|")+")",Se(r))}(t,n,r):function(e,t,n){return Re(xe(e,n),t,n)}(t,n,r)},ye=xe,we=Ae,$e=Re,Ee=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function xe(e,t){for(var n,r=[],s=0,i=0,o="",a=t&&t.delimiter||"/",l=t&&t.delimiters||"./",c=!1;null!==(n=Ee.exec(e));){var d=n[0],h=n[1],u=n.index;if(o+=e.slice(i,u),i=u+d.length,h)o+=h[1],c=!0;else{var p="",v=e[i],m=n[2],f=n[3],b=n[4],_=n[5];if(!c&&o.length){var g=o.length-1;l.indexOf(o[g])>-1&&(p=o[g],o=o.slice(0,g))}o&&(r.push(o),o="",c=!1);var y=""!==p&&void 0!==v&&v!==p,w="+"===_||"*"===_,$="?"===_||"*"===_,E=p||a,x=f||b;r.push({name:m||s++,prefix:p,delimiter:E,optional:$,repeat:w,partial:y,pattern:x?ke(x):"[^"+Ce(E)+"]+?"})}}return(o||i<e.length)&&r.push(o+e.substr(i)),r}function Ae(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var s="",i=r&&r.encode||encodeURIComponent,o=0;o<e.length;o++){var a=e[o];if("string"!=typeof a){var l,c=n?n[a.name]:void 0;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=i(c[d],a),!t[o].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(0===d?a.prefix:a.delimiter)+l}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(s+=a.prefix)}else{if(l=i(String(c),a),!t[o].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');s+=a.prefix+l}}else s+=a}return s}}function Ce(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ke(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Se(e){return e&&e.sensitive?"":"i"}function Re(e,t,n){for(var r=(n=n||{}).strict,s=!1!==n.start,i=!1!==n.end,o=Ce(n.delimiter||"/"),a=n.delimiters||"./",l=[].concat(n.endsWith||[]).map(Ce).concat("$").join("|"),c=s?"^":"",d=0===e.length,h=0;h<e.length;h++){var u=e[h];if("string"==typeof u)c+=Ce(u),d=h===e.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+Ce(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?c+=Ce(u.prefix)+"("+p+")?":c+="(?:"+Ce(u.prefix)+"("+p+"))?":c+=Ce(u.prefix)+"("+p+")"}}return i?(r||(c+="(?:"+o+")?"),c+="$"===l?"$":"(?="+l+")"):(r||(c+="(?:"+o+"(?="+l+"))?"),d||(c+="(?="+o+"|"+l+")")),new RegExp(c,Se(n))}ge.parse=ye,ge.compile=function(e,t){return Ae(xe(e,t))},ge.tokensToFunction=we,ge.tokensToRegExp=$e;const{hasOwnProperty:je}=Object.prototype,Te=new Map;function Pe(e){try{return decodeURIComponent(e)}catch(t){return e}}function Oe(e,t,n,r,s){let i,o,a=0,l=e.path||"";return"/"===l.charAt(0)&&(n&&(l=l.substr(1)),n=!0),{next(c){if(e===c)return{done:!0};const d=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,s){const i=`${e}|${n=!!n}`;let o=Te.get(i);if(!o){const t=[];o={keys:t,pattern:ge(e,t,{end:n,strict:""===e})},Te.set(i,o)}const a=o.pattern.exec(t);if(!a)return null;const l=Object.assign({},s);for(let e=1;e<a.length;e++){const t=o.keys[e-1],n=t.name,r=a[e];void 0===r&&je.call(l,n)||(t.repeat?l[n]=r?r.split(t.delimiter).map(Pe):[]:l[n]=r?Pe(r):r)}return{path:a[0],keys:(r||[]).concat(o.keys),params:l}}(l,t,!d,r,s),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&d)for(;a<d.length;){if(!o){const r=d[a];r.parent=e;let s=i.path.length;s>0&&"/"===t.charAt(s)&&(s+=1),o=Oe(r,t.substr(s),n,i.keys,i.params)}const r=o.next(c);if(!r.done)return{done:!1,value:r.value};o=null,a++}return{done:!0}}}}function Ue(e){if(he(e.route.action))return e.route.action(e)}Te.set("|false",{keys:[],pattern:/(?:)/});class Be{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Ue,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){ae(e);const t=[...ee(e)];this.root.__children=t}addRoutes(e){return ae(e),this.root.__children.push(...ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,ue(e)?{pathname:e}:e),n=Oe(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let s=null,i=null,o=t;function a(e,l=s.value.route,c){const d=null===c&&s.value.route;return s=i||n.next(d),i=null,e||!s.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(l,s.value.route)?s.done?Promise.reject(pe(t)):(o=Object.assign(o?{chain:o.chain?o.chain.slice(0):[]}:{},t,s.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(o,s.value),Promise.resolve(r(o)).then((t=>null!=t&&t!==ve?(o.result=t.result||t,o):a(e,l,t)))):(i=s,Promise.resolve(ve))}return t.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(o);if(e?console.warn(t):e=new Error(t),e.context=e.context||o,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return o.result=this.errorHandler(e),o;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}Be.pathToRegexp=ge;const{pathToRegexp:Ne}=Be,Me=new Map;function qe(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const s=n[r];s.parent=t,qe(e,s,s.__children||s.children)}}function He(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Le(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function Ie(e,t={}){if(!(e instanceof Be))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,s)=>{let i=He(n,r);if(!i&&(n.clear(),qe(n,e.root,e.root.__children),i=He(n,r),!i))throw new Error(`Route "${r}" not found`);let o=Me.get(i.fullPath);if(!o){let e=Le(i),t=i.parent;for(;t;){const n=Le(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=Ne.parse(e),r=Ne.tokensToFunction(n),s=Object.create(null);for(let e=0;e<n.length;e++)ue(n[e])||(s[n[e].name]=!0);o={toPath:r,keys:s},Me.set(e,o),i.fullPath=e}let a=o.toPath(s,t)||"/";if(t.stringifyQueryParams&&s){const e={},n=Object.keys(s);for(let t=0;t<n.length;t++){const r=n[t];o.keys[r]||(e[r]=s[r])}const r=t.stringifyQueryParams(e);r&&(a+="?"===r.charAt(0)?r:`?${r}`)}return a}}let Ve=[];function Fe(e){Ve.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),Ve=e}function We(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),s=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${s}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function De(e){return null!=e}function ze({pathname:e="",search:t="",hash:n="",chain:r=[],params:s={},redirectFrom:i,resolver:o},a){const l=r.map((e=>e.route));return{baseUrl:o&&o.baseUrl||"",pathname:e,search:t,hash:n,routes:l,route:a||l.length&&l[l.length-1]||null,params:s,redirectFrom:i,getUrl:(e={})=>Qe(Ye.pathToRegexp.compile(Xe(l))(Object.assign({},s,e)),o)}}function Ke(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Je(e,t,n){if(he(e))return e.apply(n,t)}function Ge(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?Je(n[e],t,n):void 0}function Ze(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function Qe(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function Xe(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class Ye extends Be{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&Be.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const s=Ye.NavigationTrigger;Ye.setTriggers.apply(Ye,Object.keys(s).map((e=>s[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=ze({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();he(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{De(e)||he(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!de(e))throw new Error(te(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=ee(e);for(let e=0;e<n.length;e++)oe(n[e]),t.__children.push(n[e])}(e,t)})));const r={redirect:t=>Ke(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return Je(t.action,[e,r],t)})).then((e=>{return De(e)&&(e instanceof HTMLElement||e.redirect||e===ve)?e:ue(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,ue(n)?le(n):Promise.race(se.filter((e=>e in n)).map((e=>le(n[e],e))))).then((()=>{}),(()=>{throw new Error(te(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>De(e)?e:ue(t.component)?r.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},ue(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=ze(e),t&&this.__updateBrowserHistory(e,1===n),ce("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const s=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),s.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),Ze(this.__outlet&&this.__outlet.children),this.location=ze(Object.assign(r,{resolver:this})),ce("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,s=Qe(Xe(n.chain),n.resolver)===n.pathname,i=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===ve?s?e:null!==t.parent?i(e,t.parent,n):n:n));return i(n).then((e=>{if(null===e||e===ve)throw pe(r);return e&&e!==ve&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=ze(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(te(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let s=Promise.resolve();const i=()=>({cancel:!0}),o=t=>Ke(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element);t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:i},n[t]);for(let t=0;t<r.length;t++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:i,redirect:o},r[t]),n[t].element.location=ze(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:i},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=ze(e,n[t].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:i,redirect:o},r[t]),r[t].element&&(r[t].element.location=ze(e,r[t].route)));return s.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const s=ze(t);return e.then((e=>{if(this.__isLatestRender(t))return Ge("onBeforeLeave",[s,n,this],r.element)(e)})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const s=ze(t,r.route);return e.then((e=>{if(this.__isLatestRender(t))return Ge("onBeforeEnter",[s,n,this],r.element)(e)}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(te(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(te(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=t&&t.chain[r].element;if(s){if(s.parentNode!==n)break;e.chain[r].element=s,n=s}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const s=e.chain[t].element;s&&(r.appendChild(s),this.__addedByRouter.set(s,!0),r===n&&this.__appearingContent.push(s),r=s)}}__removeDisappearingContent(){this.__disappearingContent&&Ze(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Ze(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=ze(e);Je(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&Ze(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=ze(e,e.chain[t].route);Je(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],s=e.chain;let i;for(let e=s.length;e>0;e--)if(s[e-1].route.animate){i=s[e-1].route.animate;break}if(t&&n&&i){const e=de(i)&&i.leave||"leaving",s=de(i)&&i.enter||"entering";r.push(We(t,e)),r.push(We(n,s))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;ue(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){Fe(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Ie(this)),Qe(this.__urlForName(e,t),this)}urlForPath(e,t){return Qe(Ye.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=ue(e)?this.__createUrl(e,"http://a"):e;return ce("go",{pathname:t,search:n,hash:r})}}const et=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,tt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function nt(e,t){if("function"!=typeof e)return;const n=et.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(tt?!(tt&&Object.keys(tt).map((e=>tt[e])).filter((e=>e.productionMode)).length>0):!nt((function(){return!0})))}catch(e){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(e,t){if(window.Vaadin.developmentMode)nt(e,t)}((function(){})),Ye.NavigationTrigger={POPSTATE:_e,CLICK:fe},window.customElements.define("cursus-table",class extends X{constructor(){super()}static get properties(){return{cursus:{type:Object},title:{type:String,attribute:!0,reflect:!1}}}connectedCallback(){super.connectedCallback(),this._tests=this.cursus.tests,this._rowspan=this._tests.length>1?this._tests.length+1:2}static get styles(){return i`
            .table {
                margin-bottom: 25px;
            }
        `}render(){return O`
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
                ${this._tests.map((e=>O`
                        <tr>
                            <td scope="row">${e.name}</td>
                            <td>${e.weight}</td>
                            <td>${e.ec_test}</td>
                        </tr>
                `))}
            </tbody>
            </table>
        `}}),window.customElements.define("archive-button",class extends X{static get styles(){return i`
            button {
                width: 15%;
            }
        `}render(){return O`
            <link href="styles.css" rel="stylesheet">
            <button
             @click=${()=>this._newEvent("onArchive")} 
             type="button" 
             class="btn btn-warning">
                Archive
            </button>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("custom-header",class extends X{constructor(){super()}static get properties(){return{title:{type:String,attribute:!0,reflect:!1}}}render(){return O`
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
        `}});const rt=[{code:"MBBM-P-BUP1-17",name:"Businessplan Principles 1",ec_course:5,tests:[{name:"TOETS1 - MC tentamen Principles",weight:100,ec_test:5}],replacement:[{code:"MBBU-P-MAVE-18",name:"Marktverkenning",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]}]},{code:"MBBM-P-PP-17",name:"Persoonlijke professionalisering",ec_course:5,tests:[{name:"TOETS1 - MC tentamen Principles",weight:100,ec_test:5}],replacement:[{code:"MBBU-P-PRVA-20",name:"Professionele vaardigheden A",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]},{code:"MBBU-P-PRVB-18",name:"Professionele vaardigheden B",ec_course:5,tests:[{name:"TOETS1 - MC tentamen ",weight:100,ec_test:5},{name:"TOETS2 - MC tentamen ",weight:100,ec_test:5}]}]}];window.customElements.define("cursus-div",class extends X{constructor(){super(),this.location=ot.location}static get properties(){return{location:Object}}connectedCallback(){super.connectedCallback();let e=this.location.params;this._cursusCode=e.code,this._getCourseFromCode(this._cursusCode)}_archiveCourse(){}_getCourseFromCode(e){rt.find((t=>t.code===e))&&(this._foundCourse=rt.find((t=>t.code===e)),this._replaceCourse=this._foundCourse.replacement[0])}static get styles(){return i`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `}render(){return void 0===this._foundCourse?O`
                <div id="cursussen" class="container">
                    <link href="styles.css" rel="stylesheet">
                    <h1>Cursus met code: ${this._cursusCode} niet gevonden</h1>
                </div>
            `:O`
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
        `}}),window.customElements.define("test-comp",class extends X{constructor(){super()}static get styles(){return i`
        
        `}render(){return O`
            <h1>Hello</h1>
        `}}),window.customElements.define("cursus-table-home",class extends X{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return i`
        .blankcell {
            background: none!important; 
        }
      
        thead {
            background-color:  #5bc0de;
            color: black;
        }
      
        tr:hover{
            background-color:  #FFFFCC;
        }
        `}render(){return O`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Oude naam</th>
                    <th scope="col">Oude Curuscode</th>
                    <th scope="col">Nieuwe naam</th>
                    <th scope="col">Nieuwe Cursuscode</th>
                    <th scope="col">Link(s)</th>
                </tr>
            </thead>
            <tbody id="myTable">
                ${rt.map((e=>O`
                    ${e.replacement.length>1?O`  
                        <tr>
                            <td>${e.name}</td>
                            <td>${e.code}</td>
                            <td>${e.replacement[0].name}<br>${e.replacement[1].name}</td>
                            <td>${e.replacement[0].code}<br>${e.replacement[1].code}</td>
                            <td><a href="/cursus/${e.code}">Bekijk</a></td>
                        </tr>
                        `:O` 
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
        `}}),window.customElements.define("home-table",class extends X{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return i`
            #cursussen {
                display: grid;
                grid-row-gap: 1em;
                padding: 15px;
                margin-top: 15px;
            }
        `}render(){return O`
            <link href="styles.css" rel="stylesheet">
            <custom-header>Zoeken / Filteren</custom-header>
            <div id="cursussen" class="container table-responsive">
                <cursus-table-home>
                </cursus-table-home>
            </div>
        `}}),window.customElements.define("vak-aanpassen",class extends X{static get styles(){return i`
            
        `}_fillForm(){this.shadowRoot.querySelector("#code"),this.shadowRoot.querySelector("#name"),this.shadowRoot.querySelector("#ec-c"),this.shadowRoot.querySelector("#toets"),this.shadowRoot.querySelector("#weging"),this.shadowRoot.querySelector("#ec-t")}render(){return O`
        <script src="../components/keuren/button-event.js"></script>
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
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-pencil-square"></i></div>
                            <h1 class="fw-bolder">Vak aanpassen</h1>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                <!-- form -->
                                <form id="contactForm" method="#">
                                    <!-- Naam input-->
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="code" type="text" placeholder="Vul een code in..." required />
                                        <label for="code">Code invoeren</label>
                                        <div class="invalid-feedback" data-sb-feedback="code:required">Een code is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="name" type="text" placeholder="Vul een naam in..." required />
                                        <label for="name">Naam invoeren</label>
                                        <div class="invalid-feedback" data-sb-feedback="name:required">Een vaknaam is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="ec-c" type="number" placeholder="Vul een EC-nummer in..." required />
                                        <label for="ec-c">EC-Cursus</label>
                                        <div class="invalid-feedback" data-sb-feedback="ec-c:required">Een EC-cursus nummer is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="toets" type="text" placeholder="Vul een Toets & toetsvorm in..." required />
                                        <label for="toets">Toets & Toetsform</label>
                                        <div class="invalid-feedback" data-sb-feedback="toets:required">Een Toets & toetvorm is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="weging" type="number" placeholder="Vul een weging in..." required />
                                        <label for="weging">Weging</label>
                                        <div class="invalid-feedback" data-sb-feedback="weging:required">Een Weging is verplicht.</div>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="ec-t" type="number" placeholder="Vul een EC-nummer in..." required />
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
                                        <button class="btn btn-primary btn-lg" id="aanpasButton" type="submit">Aanpassen</button>
                                        <button class="btn btn-dark btn-lg" id="annuleerButton" type="submit">Annuleren</button>
                                    </div>
                                </form>
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
          </script>
        <!-- Bootstrap JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!--JS-->
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("voorstel-beoordelen",class extends X{static get styles(){return i`
            
        `}render(){return O`
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
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-chat-right-text-fill"></i></div>
                            <h1 class="fw-bolder">Voorstel (id: <a href="#">0001</a>) beoordelen</h1>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">
                                <!-- form -->
                                <form id="contactForm" method="#">
                                    
                                    <div class="form-floating mb-3">
                                        <label for="beoordeelbericht"></label>
                                        <textarea class="form-control" id="beoordeelbericht" type="text" placeholder="Voer je bericht in..." style="height: 10rem" data-sb-validations="required"></textarea>
                                        <label for="message">Bericht</label>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">Een bericht is verplicht.</div>
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
                                        <button class="btn btn-primary btn-lg" id="goedkeurButton" type="submit">Goedkeuren</button>
                                        <button class="btn btn-dark btn-lg" id="afkeurButton" type="submit">Afkeuren</button>
                                    </div>
                                </form>
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

          </script>
        <!-- Bootstrap JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!--JS-->
        <script src="js/scripts.js"></script>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}});const st=[{code:"MBBM-P-DIP4-20",name:"programming",ec_course:5,tests:[{name:"Toets",weight:100,ec_test:5}]},{code:"hshsp-fjh-364",name:"jan",ec_course:5,tests:[{name:"Toets",weight:100,ec_test:5}]}];window.customElements.define("keuren-element",class extends X{constructor(){super()}connectedCallback(){super.connectedCallback()}static get styles(){return i`
            // #doos{
            //     background-color: green;
            // }
        `}_submitEdit(){const e=this.shadowRoot.querySelector("#code"),t=this.shadowRoot.querySelector("#name"),n=this.shadowRoot.querySelector("#ec-c"),r=this.shadowRoot.querySelector("#toets"),s=this.shadowRoot.querySelector("#weging"),i=this.shadowRoot.querySelector("#ec-t"),o={code:e.value,name:t.value,ecc:n.value,toets:r.value,weging:s.value,ect:i.value};sessionStorage.setItem("bezemvak",o),window.location.href="http://localhost:8080/vakaanpassen"}render(){return O`
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
                    <th>Aanpassen</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                    ${st.map((e=>O`
                            <tr>
                                <td id="code">${e.code}</td>
                                <td id="name">${e.name}</td>
                                <td id="ec-c">${e.ec_course}</td>
                                <td id="toets">${e.tests[0].name}</td>
                                <td id="weging">${e.tests[0].weight}</td>
                                <td id="ec-t">${e.tests[0].ec_test}</td>
                                <td>
                                    <div class="button-box col-lg-12">
                                        <button class="btn btn-primary btn-lg" onclick="goedkeuren()" type="submit">Goedkeuren</button>
                                        <button class="btn btn-dark btn-lg" id="afkeuren" type="submit">Afkeuren</button>
                                    </div>
                                </td>
                                <td>
                                    <button class="btn btn-primary btn-lg" id="aanpasButton" @click=${()=>this._submitEdit()} type="submit">Aanpassen</button>
                                </td>
                            </tr>`))}
                </tbody>
              </table>
            </div>
            <br><br>
        </main>
        <!-- Footer-->
        <div id="footer-placeholder"></div>
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}}),window.customElements.define("voorstellen-element",class extends X{static get styles(){return i`
            
        `}_clearForm(){let e=this.shadowRoot.querySelectorAll("input");e.forEach((e=>e.value="")),console.log(e)}_submitForm(){const e=this.shadowRoot.querySelector("#code"),t=this.shadowRoot.querySelector("#name"),n=this.shadowRoot.querySelector("#ec-c"),r=this.shadowRoot.querySelector("#toets"),s=this.shadowRoot.querySelector("#weging"),i=this.shadowRoot.querySelector("#ec-t"),o={code:e.value,name:t.value,ec_course:n.value,test:r.value,weight:s.value,ec_test:i.value},a=JSON.stringify(o);console.log(a)}render(){return O`
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
        `}_newEvent(e){this.dispatchEvent(new CustomEvent(e))}});const it=document.querySelector("#main"),ot=new Ye(it);ot.setRoutes([{path:"/",component:"home-table"},{path:"/cursus/:code",component:"cursus-div"},{path:"/vakAanpassen",component:"vak-aanpassen"},{path:"/voorstelBeoordelen",component:"voorstel-beoordelen"},{path:"/keuren",component:"keuren-element"},{path:"/voorstellen",component:"voorstellen-element"},{path:"(.*)",component:""}])})();