/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={65:(t,e,i)=>{const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new a(i,t,s)},c=(t,e)=>{if(r)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=o.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}},h=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:d,defineProperty:p,getOwnPropertyDescriptor:u,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,b=globalThis,v=b.trustedTypes,y=v?v.emptyScript:"",w=b.reactiveElementPolyfillSupport,k=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!d(t,e),A={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&p(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return o?.call(this)},set(e){const s=o?.call(this);r.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??A}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,e=[...m(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=o,this[o]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??$)(this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$ET??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$Ej()}catch(e){throw t=!1,this._$Ej(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&=this._$ET.forEach((t=>this._$EO(t,this[t]))),this._$Ej()}updated(t){}firstUpdated(t){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[k("elementProperties")]=new Map,_[k("finalized")]=new Map,w?.({ReactiveElement:_}),(b.reactiveElementVersions??=[]).push("2.0.3");const S=globalThis,z=S.trustedTypes,E=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,P="?"+O,R=`<${P}>`,M=document,T=()=>M.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,j="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,U=/>/g,L=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,D=/"/g,V=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),G=B(1),W=(B(2),Symbol.for("lit-noChange")),K=Symbol.for("lit-nothing"),Q=new WeakMap,X=M.createTreeWalker(M,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,o=[];let r,s=2===e?"<svg>":"",n=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===N?"!--"===l[1]?n=F:void 0!==l[1]?n=U:void 0!==l[2]?(V.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=L):void 0!==l[3]&&(n=L):n===L?">"===l[0]?(n=r??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?L:'"'===l[3]?D:q):n===D||n===q?n=L:n===F||n===U?n=N:(n=L,r=void 0);const d=n===L&&t[e+1].startsWith("/>")?" ":"";s+=n===N?i+R:c>=0?(o.push(a),i.slice(0,c)+C+i.slice(c)+O+d):i+O+(-2===c?e:d)}return[J(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class Z{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,s=0;const n=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=Z.createElement(l,i),X.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=X.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=c[s++],i=o.getAttribute(t).split(O),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?rt:"?"===n[1]?st:"@"===n[1]?nt:ot}),o.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(V.test(o.tagName)){const t=o.textContent.split(O),e=t.length-1;if(e>0){o.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],T()),X.nextNode(),a.push({type:2,index:++r});o.append(t[e],T())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(O,t+1));)a.push({type:7,index:r}),t+=O.length-1}r++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,o){if(e===W)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const s=I(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=tt(t,r._$AS(t,e.values),r,o)),e}class et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??M).importNode(e,!0);X.currentNode=o;let r=X.nextNode(),s=0,n=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new it(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new at(r,this,t)),this._$AV.push(e),a=i[++n]}s!==a?.index&&(r=X.nextNode(),s++)}return X.currentNode=M,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),I(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new et(o,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new Z(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new it(this.k(T()),this.k(T()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,o){const r=this.strings;let s=!1;if(void 0===r)t=tt(this,t,e,0),s=!I(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const o=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=tt(this,o[i+n],e,n),a===W&&(a=this._$AH[n]),s||=!I(a)||a!==this._$AH[n],a===K?t=K:t!==K&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}s&&!o&&this.O(t)}O(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends ot{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===K?void 0:t}}class st extends ot{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class nt extends ot{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=tt(this,t,e,0)??K)===W)return;const i=this._$AH,o=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const lt=S.litHtmlPolyfillSupport;lt?.(Z,it),(S.litHtmlVersions??=[]).push("3.1.1");class ct extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new it(e.insertBefore(T(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});const ht=globalThis.litElementPolyfillSupport;ht?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.3");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},pt={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:$},ut=(t=pt,e,i)=>{const{kind:o,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t)}}throw Error("Unsupported decorator location: "+o)};function mt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,o?{...t,wrapped:!0}:t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function gt(t){return mt({...t,state:!0,attribute:!1})}const ft=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function bt(t,e){return(i,o,r)=>{const s=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof o?i:r??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return ft(i,o,{get(){let i=t.call(this);return void 0===i&&(i=s(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return ft(i,o,{get(){return s(this)}})}}var vt=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let yt=class extends ct{constructor(){super(...arguments),this.fill=!0}render(){return G`
            <button
                class="bookmark-btn ${this.fill?"":"no-fill"}"
            >
                ${this.content}
            </button>
        `}};yt.styles=l`
        .bookmark-btn {
            box-sizing: border-box;
            padding-top: 0.7rem;
            padding-bottom: 0.7rem;
            padding-right: var(--padding-x, 0.5rem);
            padding-left: var(--padding-x, 0.5rem);
            color: white;
            border: none;
            border-radius: 3px;
            font-family: inherit;
            font-size: inherit;
            font-weight: 500;
            width: 100%;
            min-width: fit-content;
            cursor: pointer;
            background-color: var( --btn-color, grey );
            border: solid 1px var( --btn-color, grey );
            --box-shadow: 5px 5px 5px var( --btn-shadow, lightgrey );
            box-shadow: var(--box-shadow);
            white-space: nowrap;
        }

        .bookmark-btn.no-fill{
            background-color: unset;
        }

        .bookmark-btn:not(.no-fill):hover {
            background-color: white;
            color: var( --btn-color, grey );
            border: solid 1px var( --btn-color, grey );
        }
    `,vt([mt()],yt.prototype,"content",void 0),vt([mt({type:Boolean})],yt.prototype,"fill",void 0),yt=vt([dt("bookmark-btn")],yt);const wt=l`
    html {
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
        
    }

    :host {
        --soft-blue: hsl(231, 69%, 60%);
        --soft-red: hsl(0, 94%, 66%);
        --grayish-blue: hsl(229, 8%, 60%);
        --dark-blue: hsl(229, 31%, 21%);
    }
`;var kt=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let xt=class extends ct{render(){return G`
            <article>
                <slot></slot>
                <h2>${this.content.header}</h2>
                <h3>${this.content.subheader}</h3>
                <div class="divider"></div>
                <bookmark-btn class="blue" content="Add & Install Extension"></bookmark-btn>
            </article>
        `}};xt.styles=[wt,l`
        bookmark-btn.blue {
            --btn-color: var(--soft-blue);
            margin-top: 1rem;
            width: 75%;
            font-size: 14px;
        }

        article {
            width: 100%;
            padding: 2rem 0rem;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 8px;
            --shadow-color: 0px 5px 5px lightgray, -5px 5px 5px lightgray, 5px 5px 5px lightgray;
            box-shadow: var(--shadow-color);
        }

        h2 {
            font-size: 18px;
            font-weight: 500;
            width: fit-content;
            margin-top: 2rem;
            color: var(--dark-blue);
        }

        h3 {
            font-size: 14px;
            font-weight: 400;
            width: fit-content;
            margin: 0;
            margin-bottom: 0.5rem;
            color: var(--grayish-blue);
        }

        .divider::before {
            content: '.......................................................';
            font-size: 32px;
            opacity: 0.5;
            letter-spacing: 10px;
            color: var(--grayish-blue);
        }
    `],kt([mt({type:Object})],xt.prototype,"content",void 0),xt=kt([dt("bookmark-card")],xt);var $t=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let At=class extends ct{constructor(){super(...arguments),this.isOpen=!1}render(){return G`
            <div @click=${this.toggle} class="header">
                <h3>${this.title}</h3>
                <svg class="${this.isOpen?"arrow-down text-red":"arrow-up"}" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
            </div>
            <div class="content ${this.isOpen?"open":"hidden"}">
                <slot></slot>
            </div>
        `}toggle(){this.isOpen=!this.isOpen}};At.styles=l`

        ::slotted(*) {
            font-size: inherit;
            color: var(--grayish-blue);
            font-weight: 400;
            font-size: inherit
        }

        :host {
            width: 100%;
        }

        .content {
            transition: max-height ease-in-out 400ms;
            overflow-y: hidden;
            line-height: 2.2;

            &.open {
                max-height: 300px;
            }

            &.hidden{
                max-height: 0;
            }

        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1.5px solid lightgray;
            cursor: pointer;

            & svg {
                color: #5267DF;
                transition: transform ease-in-out 500ms;

                &.arrow-up {
                    transform: rotate(0deg);
                }

                &.arrow-down {
                    transform: rotate(180deg);
                }

                &.text-red {
                    color: var(--soft-red);
                }
            }

            & h3 {
                font-size: inherit;
                font-weight: 400;
                color: var(--dark-blue);
                cursor: pointer;
                
                &:hover {
                    color: var(--soft-red);
                }
            }
        }
    
    `,$t([mt()],At.prototype,"title",void 0),$t([mt({type:Boolean})],At.prototype,"isOpen",void 0),At=$t([dt("bookmark-accordion")],At);var _t=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let St=class extends ct{constructor(){super(...arguments),this.activeTab=0}render(){return G`
            <div class="tabs">
                <ul>
                    ${this.tabs.map(((t,e)=>G`<li record='${t.key}' class="${this.activeTab===e?"active":""}" @click=${this.setActiveTab}>${t.title}</li>`))}
                </ul>
                <div class="slider" style="width: ${this.width(!1)}%; left: ${this.positionX(!1)}%"></div>
                <div class="mobile-slider" style="width: ${this.width(!0)}%; left: ${this.positionX(!0)}%; top: ${100/this.tabs.length*(this.activeTab+1)}%"></div>
            </div>
            <slot></slot>
        `}setActiveTab(t){const e=t.target.getAttribute("record");this.activeTab=this.tabs.findIndex((t=>t.key===e)),this.dispatchEvent(new CustomEvent("tab-change",{detail:e}))}positionX(t){return this.tabs.length>1&&!t?100/this.tabs.length*this.activeTab:100/3}width(t){return this.tabs.length>1&&!t?100/this.tabs.length:100/3}};St.styles=l`
    
        :host {
            width: 100%;
        }

        .tabs {
            position: relative;
            width: 100%;
        }

        .slider, .mobile-slider {
            position: absolute;
            bottom: 0;
            height: 0px;
            border: 1.5px solid var(--soft-red);
        }

        .slider {
            display: none;
            transition: 400ms ease-in-out;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            width: 100%;
            -webkit-user-select: none;
            user-select: none;
        }

        ul:first-child {
            border-top: 1px solid lightgray;
        }
    
        li {
            all: unset;
            text-align: center;
            padding: 0.5rem 0.5rem 1rem 0.5rem;
            flex: 1 1 0;
            border-bottom: 1px solid lightgray;
            cursor: pointer;
            color: var(--grayish-blue);
            
            &.active {
                color: var(--dark-blue);
            }

            &:hover {
                color: var(--soft-red);
            }
        }

        ::slotted(*) {
            padding-top: 3rem;
            display: block;
            transition: 200ms ease-in;
        }

        @media (min-width: 769px) {
            .tabs {
                width: 60%;
                margin: auto;
            }
            ul {
                flex-direction: row;
                border-top: unset;
            }

            ul:first-child {
                border-top: unset;
            }

            .slider {
                display: block;
            }

            .mobile-slider {
                display: none
            }
        }
    `,_t([mt({type:Array})],St.prototype,"tabs",void 0),_t([gt()],St.prototype,"activeTab",void 0),St=_t([dt("bookmark-tabs")],St);const zt=i.p+"0da3d302207bcad90cda.svg",Et=i.p+"e933bd6d921c537d7743.svg",Ct=i.p+"a4206aab7946773b29b7.svg",Ot=i.p+"07801d05cb11930f0c82.svg",Pt=i.p+"a42815a014c452e4d958.svg",Rt=i.p+"ff14e4763945338fe002.svg",Mt=i.p+"a9e6ca53e8cfd641e556.svg",Tt=(i.p,i.p+"4385fd507d24f37ccbb3.svg");var It=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ht=class extends ct{constructor(){super(...arguments),this.menuItems=[],this.isOpen=!1}render(){return window.matchMedia("(max-width: 769px)").onchange=t=>{t.matches||(this.isOpen=!1)},G`
            <nav>
                <div class="menu">
                    <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#242A45" fill-rule="nonzero"/><g><circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"/></g></g></svg>     
                    <div class="hamburguer" @click=${this.toggle}>
                        <img src=${Tt} />
                    </div>
                    <ul class="desktop-menu">
                        ${this.renderList()}
                    </ul>
                </div>
                <div class="mobile" .hidden=${!this.isOpen}>
                    <div class="overlay"></div>
                    <div class="mobile-menu">
                        <div class="flex-container-space">
                            <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#FFF" fill-rule="nonzero"/><g><circle fill="#FFF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#242A45"/></g></g></svg>
                            <svg @click=${this.toggle} class="close-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="15"><path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>
                        </div>   
                        <ul>
                            ${this.renderList()}
                        </ul>
                    </div>
                    <div class="flex-container-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#FFF" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#FFF" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/></svg>
                    </div>
                </div>
            </nav>
        `}toggle(t){this.isOpen=!this.isOpen}renderList(){return this.menuItems.map(((t,e)=>e!==this.menuItems.length-1?G`<li><a class="menu-item">${t}</a></li>`:G`<bookmark-btn class="${this.isOpen?"white":"red"}" content="${t}" .fill=${!this.isOpen}></bookmark-btn>`))}};Ht.styles=l`
        a, li, ul {
            all: unset;
        }

        :host {
            width: 100%;
            display: block;
            font-size: 16px;
        }

        .desktop-menu {
            display: none;
        }

        .mobile {
            z-index: 1;
        }

        .menu {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 3rem;

            & svg {
                width: 100%;
            }
        }

        .overlay {
            background-color: var(--dark-blue);
            opacity: 0.9;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        ul{
            display: flex;
            gap: 1.5rem;
            align-items: center;
            width: 100%;
            justify-content: space-evenly;
        }

        .mobile-menu {
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 2rem 1rem;
            box-sizing: border-box;
            z-index: 1;

            & ul {
                flex-direction: column;
                width: 100%;
                max-width: 100%;
                margin-top: 2rem;

                & li {
                    border-top: white solid 0.5px;
                    color: white;
                    width: 100%;
                    text-align: center;
                    padding: 1.5rem 0rem;
                }
            }

            & bookmark-btn {
                --btn-shadow: none;
            }
        }

        .hamburguer {
            cursor: pointer;
        }

        .flex-container-space {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .flex-container-icons {
            position: fixed;
            bottom: 10%;
            left: 0%;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            display: flex;
            z-index: 1;
        }

        .close-icon {
            cursor: pointer;
        }

        li {
            text-transform: uppercase;
            cursor: pointer;
            color: var(--dark-blue);
        }

        li:hover {
            color: var(--soft-red);
        }

        bookmark-btn.red {
            --btn-color: var(--soft-red);
            --padding-x: 2rem;
        }
        
        bookmark-btn.white {
            --btn-color: white;
            width: 100%;
        }

        @media (min-width: 769px) {
            .hamburguer {
                display: none;
            }

            .overlay {
                display: none;
            }

            .desktop-menu {
                display: flex;
            }
        }
    `,It([mt()],Ht.prototype,"title",void 0),It([mt({type:Array})],Ht.prototype,"menuItems",void 0),It([gt()],Ht.prototype,"isOpen",void 0),Ht=It([dt("bookmark-menu")],Ht);var jt=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Nt=class extends ct{constructor(){super(...arguments),this.activeTab="i1"}render(){return G`
      <h2>Components:</h2>

      <h3>Buttons:</h3>
      <div class="container">
        <bookmark-btn class="red" content="Login"></bookmark-btn>
        <bookmark-btn class="blue" content="Blue"></bookmark-btn>
        <!-- <bookmark-btn class="grey" content="Gray"></bookmark-btn> -->
      </div>

      <h3>Cards:</h3>
      <div class="container">
        <bookmark-card .content="${{header:"Card with image",subheader:"Minimum version 62"}}">
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="100"><g fill="none"><path fill="#E16B5A" d="M50.768.01s30.01-1.325 45.916 28.249H48.217s-9.154-.296-16.957 10.594c-2.25 4.561-4.65 9.27-1.95 18.538-3.9-6.472-20.708-35.164-20.708-35.164S20.457 1.186 50.768.009z"/><path fill="#FFD464" d="M95.122 75.095S81.284 101.238 47.21 99.952C51.414 92.82 71.45 58.8 71.45 58.8s4.837-7.626-.875-19.696c-2.903-4.192-11.7-8.586-21.237-10.928 7.67-.075 47.25.005 47.25.005s12.653 20.59-1.466 46.915z"/><path fill="#74B340" d="M6.628 75.294s-16.17-24.825 2.004-53.116l24.225 41.163s4.314 7.92 17.832 9.104c5.153-.368 10.514-.682 17.351-7.607C64.27 71.387 47.327 100 47.327 100s-24.51.448-40.7-24.706z"/><ellipse cx="50.646" cy="50.406" fill="#FFF" rx="23.064" ry="22.656"/><ellipse cx="50.638" cy="50.406" fill="#2995CC" rx="18.292" ry="17.969"/><path fill="#268CBF" d="M50.643 32.441c-.364 0-.724.014-1.082.034 9.598.55 17.209 8.369 17.209 17.934 0 9.568-7.611 17.386-17.21 17.937.36.02.72.034 1.083.034 10.101 0 18.292-8.046 18.292-17.97 0-9.923-8.19-17.969-18.292-17.969z"/></g></svg>
        </bookmark-card>
        <bookmark-card .content="${{header:"Card wihthout image",subheader:"subheader"}}">
        </bookmark-card>
      </div>
      
      <h3>Accordion:</h3>
      <div class="container w-50">
        <bookmark-accordion title="FAQ title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae mollitia sunt voluptate nulla nihil nam enim natus illo accusantium dolores iste quibusdam, numquam eaque assumenda soluta exercitationem! Quisquam, nostrum?</p>
        </bookmark-accordion>
      </div>

      <h3>Tabs:</h3>
      <div class="container w-50">
        <bookmark-tabs @tab-change=${this.setActiveTab} .tabs=${[{title:"Item1",key:"i1"},{title:"Item2",key:"i2"},{title:"Item3",key:"i3"}]}>
          ${this.renderTab()}
        </bookmark-tabs>
      </div>

      <h3>Menu:</h3>
      <div class="container">
        <bookmark-menu .menuItems=${["Item1","Item2","LOGIN"]}>
        </bookmark-menu>
      </div>
    `}setActiveTab({detail:t}){this.activeTab=t}renderTab(){switch(this.activeTab){case"i1":return G`<div>Content 1</div>`;case"i2":return G`<div>Content 2</div>`;case"i3":return G`<div>Content 3</div>`;default:return G`<div>No tab content provided</div>`}}};Nt.styles=l`

    .container:last-child {
      margin-bottom: 0;
    }

    .w-50 {
      width: 50%;
    }

    h3 {
      margin: 3rem 0rem;
      padding-left: 2rem;
    }

    h2 {
      margin-top: 0;
    }

    bookmark-card {
      width: 20%;
    }
    bookmark-btn.red {
      --btn-color: var(--soft-red);
    }
    bookmark-btn.blue {
      --btn-color: var(--soft-blue);
    }
    bookmark-btn.grey {
      --btn-color: var(--grayish-blue);
    }

    @media (min-width: 769px) {
      .container {
        display: flex;
        gap: 1rem;
        margin: 1rem;
        padding-left: 2rem;
      }
    }
  `,jt([gt()],Nt.prototype,"activeTab",void 0),Nt=jt([dt("bookmark-ui")],Nt);var Ft=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ut=class extends ct{constructor(){super(...arguments),this.errorMsg="input value is incorrect",this.placeholder="",this.required=!1,this.isInvalid=!1,this.value=""}render(){return G`
        <div class="input-container ${this.isInvalid||this.required?"error":""}">
            <input id="bookmarkInput" placeholder=${this.placeholder} .value=${this.value} class="bookmark-input" @input=${this.handleInputEvent} type="text" />
            <svg class="error-icon ${this.isInvalid||this.required?"show":"hide"}" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg>
            <span class="error-msg ${this.isInvalid||this.required?"show":"hide"}">${this.errorMsg}</span>
        </div>
        `}handleInputEvent(){this.value=this.input.value,this.isInvalid=!0!==/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value)&&""!==this.value,this.dispatchEvent(new CustomEvent("change"))}};Ut.styles=l`
        .bookmark-input {
            width: 100%;
            height: 100%;
            min-height: 1rem;
            box-sizing: border-box;
            padding: 0.7rem;
            padding-inline: 12px;
            border-radius: 6px;
            border: 1px solid var(--dark-blue, 'darkblue');

            &:focus {
                outline: solid var(--dark-blue, 'lightblue');
            }
        }

        .input-container {
            position: relative;
            width:100%;
            height: 100%;
            border-radius: 5px;

            &.error {
                background-color: var(--soft-red, 'red');
                height: initial;

                & .bookmark-input {
                    border: solid 2px var(--soft-red, 'red');

                    &:focus {
                        outline: solid var(--soft-red, 'red');
                    }
                }
            }
        }

        .error-msg {
            display: flex;
            font-size: 12px;
            color: white;
            font-weight: 500;
            width: 100%;
            overflow-y: hidden;
            padding: 0;
            transition: 0.1s ease-in-out;
            background-color: var(--soft-red, 'red');
            border-radius: 5px;
            box-sizing: border-box;

            &.show {
                max-height: 400px;
                padding: 0.7rem 0.7rem;
            }

            &.hide {
                max-height: 0;
            }
        }

        .error-icon {
            position: absolute;
            top: 0.7rem;
            right: 0.7rem;
            transition: transform 0.1s ease-in;

            &.show {
                transform: scale(1);
            }

            &.hide {
                transform: scale(0);
            }
        }
    `,Ft([mt({type:String})],Ut.prototype,"errorMsg",void 0),Ft([mt({type:String})],Ut.prototype,"placeholder",void 0),Ft([mt({type:Boolean})],Ut.prototype,"required",void 0),Ft([gt()],Ut.prototype,"isInvalid",void 0),Ft([gt()],Ut.prototype,"value",void 0),Ft([bt("#bookmarkInput")],Ut.prototype,"input",void 0),Ut=Ft([dt("bookmark-input-text")],Ut);var Lt,qt=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};!function(t){t.left="left",t.right="right"}(Lt||(Lt={}));let Dt=class extends ct{constructor(){super(...arguments),this.imagePosition=Lt.right}render(){return G`
        <section class="bookmark-image-text ${"right"===this.imagePosition?"":"left"}">
            <div class="image">
                <div part="image-container" class="image-container">
                    <div part="background-form" class="background-form"></div>
                    <slot name="svg"></slot>
                </div>
            </div>
            <div class="text">
                <div class="text-container">
                    <slot name="content"></slot>
                </div>
            </div>
        </section>
        `}};Dt.styles=l`
        .bookmark-image-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            overflow-x: hidden;

            .image {
                order: 1;
                width: 100%;
            }

            .text {
                order: 2;
                width: 90%;
            }
        }

        .image-container {
            position: relative;
            min-height: 466px;
            width: 1200px;
            padding-left: 1rem;
            padding-right: 1rem;

            & ::slotted(img) {
                width: 90vw;
                min-width: 400px;
                object-fit: cover;
            }
        }

        .background-form {
            background-color: var(--soft-blue);
            position: absolute;
            z-index: -1;
            width: 1200px;
            height: 40vw;
            min-height: 225px;
            top: 20vw;
            left: 150px;
            border-radius: 370px 0 0 370px;
        }

        .bookmark-image-text.left {
            transform: scaleX(-1);

            ::slotted(*) {
                transform: scaleX(-1);
            }
        }

        @media (min-width: 769px) {
            .bookmark-image-text {
                flex-direction: row;
                padding-left: 4rem;
                padding-right: 4rem;
                
                .image {
                    order: 2;
                    width: 50%;
                }

                .text {
                    order: 1;
                    width: 50%;
                }
            }

            .image-container ::slotted(img) {
                width: unset;
                min-width: 400px;
            }

            .background-form {
                height: 350px;
                top: 100px;
                left: 150px;
            }
        }
    `,qt([mt({type:String})],Dt.prototype,"imagePosition",void 0),Dt=qt([dt("bookmark-image-text")],Dt);let Vt=class extends ct{render(){return G`
            <footer>
                <div class="footer-container">
                    <div class="footer-menu">
                        <svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="#FFF" fill-rule="nonzero"/><g><circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"/></g></g></svg>
                        <ul>
                            <li class="footer-list-item">Features</li>
                            <li class="footer-list-item">Pricing</li>
                            <li class="footer-list-item">Contact</li>
                        </ul>
                    </div>
                    <div class="flex-container-icons">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="currentColor" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="currentColor" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/></svg>
                    </div>
                </div>
            </footer>
        `}};var Bt;Vt.styles=l`
        footer {
            background-color: var(--dark-blue);
            width: 100%;
            padding: 2rem 0;
        }

        .footer-container {
            width: 80%;
            margin: auto;
            gap: 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            & ul {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                padding: 0;

                & li {
                    cursor: pointer;
                    text-align: center;
                    font-size: 16px;

                    &:hover {
                        color: var(--soft-red, 'red');
                    }
                }
            }

            & .footer-menu {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }

        .flex-container-icons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.5rem;

            & svg {
                color: white;
                cursor: pointer;

                &:hover {
                    color: var(--soft-red, 'red');
                }
            }
        }

        .footer-list-item {
            all: unset;
            text-transform: uppercase;
            color: white;
        }

        @media (min-width: 769px) {
            .footer-container {
                flex-direction: row;

                & ul {
                    flex-direction: row;
                }

                & .footer-menu {
                    flex-direction: row;
                    gap: 1.5rem;
                }
            }
        }
    `,Vt=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}([dt("bookmark-footer")],Vt),function(t){t.BOOKMARKING="bookmarking",t.SEARCHING="searching",t.SHARING="sharing"}(Bt||(Bt={}));var Gt=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Wt=class extends ct{constructor(){super(...arguments),this.activeTab=Bt.BOOKMARKING,this.faq=["What is Bookmark?","How can I request a new browser?","Is there a mobile app?","What about other Chromium browsers?"],this.tabContent=[{title:"A Simple Bookmark Manager",key:Bt.BOOKMARKING,text:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",image:zt},{title:"Intelligent search",key:Bt.SEARCHING,text:"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",image:Et},{title:"Share your bookmarks",key:Bt.SHARING,text:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",image:Ct}],this.emailRequired=!1}render(){const t=[{title:"Simple Bookmarking",key:Bt.BOOKMARKING},{title:"Speedy Searching",key:Bt.SEARCHING},{title:"Easy Sharing",key:Bt.SHARING}];return G`
      <!-- <bookmark-ui></bookmark-ui> -->
      <bookmark-menu .menuItems=${["FEATURES","PRICING","CONTACT","LOGIN"]}></bookmark-menu>

       <bookmark-image-text class="header-banner">
        <img slot="svg" src=${Ot} />
        <div slot="content" class="bookmark-flex-item">
          <div class="text-container">
            <h1 class="title">
              A Simple Bookmark Manager
            </h1>
            <p class="text">
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
          </div>
          <div class="buttons-get-extension">
            <bookmark-btn class="blue" content="Get it on Chrome"></bookmark-btn>
            <bookmark-btn class="grey" content="Get it on Firefox"></bookmark-btn>
          </div>
        </div>
      </bookmark-image-text>

       <section class="features">
        <div class="features-section bookmark-section">
            <h2>Features</h2>
            <p class="text">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
          <div class="py-3">
            <bookmark-tabs @tab-change=${this.setActiveTab} .tabs=${t}>
              <bookmark-image-text id="tabImageText" imagePosition="${Lt.left}">
                ${this.renderTab()}
              </bookmark-image-text>
            </bookmark-tabs>
          </div>
        </section>

        <section class="bookmark-section">
          <div class="features-section">
            <h2>Download the extension</h2>
            <p class="text">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
          </div>
          
          <div class="flex-container content-between cards-section">
            <bookmark-card .content="${{header:"Add to Chrome",subheader:"Minimum version 62"}}">
              <img src=${Pt} />
            </bookmark-card>
            <bookmark-card .content="${{header:"Add to opera",subheader:"Minimum version 55"}}">
              <img src=${Rt} />
            </bookmark-card>
            <bookmark-card .content="${{header:"Add to Firefox",subheader:"Minimum version 46"}}">
              <img src=${Mt} />
            </bookmark-card>
          </div>
        </section>

        <section class="bookmark-section">
          <div class="features-section">
            <h2>Frequently Asked Questions</h2>
            <p class="text">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
          </div>
          <div class="py-3">
            ${this.renderAccordions()}
          </div>
          <div class="more-info-button">
            <bookmark-btn class="blue" content="More info"></bookmark-btn>
          </div>
        </section>
        <section class="bookmark-section banner">
          <h2>Stay up-to-date with what we're doing</h2>
          <h4>35,000+ ALREADY JOINED</h4>
          <form class="contact-us">
            <bookmark-input-text id="email" @change=${this.handleInputChange} .required=${this.emailRequired} placeholder="Enter your email address" errorMsg="Whoops, make sure it's an email"></bookmark-input-text>
            <bookmark-btn @click=${this.sendForm} class="red" content="Contact us"></bookmark-btn>
          </form>
        </section>
        <bookmark-footer></bookmark-footer>
    `}setActiveTab({detail:t}){this.activeTab=t}renderTab(){const t=this.tabContent.find((t=>t.key===this.activeTab));return t?G`
        <img slot="svg" src=${t.image} />
        <div slot="content" class="tab-text">
          <h1 class="tab-title">
            ${t.title}
          </h1>
          <p class="text">
            ${t.text}
          </p>
          <bookmark-btn class="blue" content="More info"></bookmark-btn>
        </div>
      `:G`<div slot="content">No content provided</div>`}renderAccordions(){return this.faq.map((t=>G`
        <div class="accordion-container">
          <bookmark-accordion .title=${t}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae mollitia sunt voluptate nulla nihil nam enim natus illo accusantium dolores iste quibusdam, numquam eaque assumenda soluta exercitationem! Quisquam, nostrum?</p>
          </bookmark-accordion>
        </div>
        `))}sendForm(){""===this.emailInput.value&&(this.emailRequired=!0)}handleInputChange(){this.emailRequired=!1}};Wt.styles=l`
      :host {
        font-size: 14px;
      }

      .py-3 {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      bookmark-menu {
        padding-top: 1rem;
        font-size: 16px;
      }

      .accordion-container {
        display: flex;
        width: 90%;
        margin: auto;
      }

      .buttons-get-extension {
        display: flex;
        align-items: center;
        margin: 3rem 0;
        justify-content: space-between;
        gap: 1rem; 
      }

      .content-between {
        justify-content: space-between;
      }

      .overflow-x-hidden {
        overflow-x: hidden;
      }

      .text-container {
        text-align: center;
      }

      .title {
        font-size: 32px;
      }

      .tab-title {
        font-size: 28px;
      }

      h2, h1 {
        font-weight: 500;
      }

      .text {
        color: var(--grayish-blue);
      }

      bookmark-btn {
        &.blue {
          --btn-color: var(--soft-blue);
          width: 100%;
        }
        &.grey {
          --btn-color: var(--grayish-blue);
          width: 100%;
        }
        &.red {
          --btn-color: var(--soft-red);
          width: 100%;
        }
      }

      .features-section {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }

      .bookmark-section {
        padding: 3rem 2rem 0rem 2rem;
        margin-top: 2rem;
      }

      .cards-section {
        width: 90%;
        margin: auto;
        padding: 1rem 0;

        & bookmark-card {
          width: 100%;
          margin-top: 1rem;
        }
      }

      .more-info-button {
        width: fit-content;
        margin: auto;

        & bookmark-btn {
          --padding-x: 2rem;
        }
      }

      .banner {
        background-color: var(--soft-blue);
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-top: 3rem;
        padding-bottom: 2.5rem;
        margin-top: 3.5rem;

        & h2, h4 {
          font-weight: 500;
          color: white;
          text-align: center;
        }

        & h4 {
          order: 1;
          font-size: 12px;
          letter-spacing: 0.5rem;
        }

        & h2 {
          order: 2;
        }

        & form {
          order: 3;
          display: flex;
          flex-direction: column;
          gap: 1rem;

          & bookmark-btn {
            --btn-shadow: none;
          }
        }
      }

      .header-banner {
        display: block;
        margin-top: 3rem;
      }

      .features {
        margin-top: 3rem;
      }

      .tab-text {
        text-align: center;
        & bookmark-btn {
          display: none;
        }
      }

      #tabImageText::part(background-form) {
          height: 300px;
      }

      @media (min-width: 769px) {
        :host {
          font-size: 18px;
        }
        .title {
          font-size: 48px;
        }
        .flex-container {
          flex-direction: row;
        }

        .features-section {
          width: 40%;
          margin-left: auto;
          margin-right: auto;
        }

        .cards-section {
          width: 90%;
        
          & bookmark-card {
            width: 30%;
          
            &:nth-of-type(2) {
                margin-top: 2.5rem;
            }

            &:nth-of-type(3) {
              margin-top: 5rem;
            }
          }
        }
        
        .text-container {
          padding-right: 5rem;
          padding-left: 3rem;
        }

        .accordion-container {
          width: 60%;
        }

        .banner {
            & form {
            width: 50%;
            margin: auto;
            flex-direction: row;

            & bookmark-input-text {
              width: 75%;
            }

            & bookmark-btn {
              width: 25%;
            }
          }

          & h4, h2 {
            width: 33%;
            margin: auto;
          }
        }

        .tab-text {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width:75%;
          margin: auto;
          text-align: start;

          & p, h1 {
            margin: 0;
          }

          & bookmark-btn {
            display: block;
            width: 25%;
          }
        }

        #tabImageText::part(image-container) {
          min-height: 400px;
        }
      }

      @media (min-width: 1280px) {
        .bookmark-section {
          padding-left: 4rem;
          padding-right: 4rem;
        }

        .cards-section {
          width: 70%;
        }
      }
  `,Gt([gt()],Wt.prototype,"activeTab",void 0),Gt([gt()],Wt.prototype,"faq",void 0),Gt([gt()],Wt.prototype,"tabContent",void 0),Gt([gt()],Wt.prototype,"emailRequired",void 0),Gt([bt("#email")],Wt.prototype,"emailInput",void 0),Wt=Gt([dt("my-element")],Wt)}},e={};function i(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,i),s.exports}i.m=t,i.c=e,i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{i.S={};var t={},e={};i.I=(o,r)=>{r||(r=[]);var s=e[o];if(s||(s=e[o]={}),!(r.indexOf(s)>=0)){if(r.push(s),t[o])return t[o];i.o(i.S,o)||(i.S[o]={}),i.S[o];var n=[];return t[o]=n.length?Promise.all(n).then((()=>t[o]=1)):1}}})(),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),i(65)})();