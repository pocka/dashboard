!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},a=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${a}--\x3e`,s=new RegExp(`${a}|${o}`);class u{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,u=-1,l=0;const{strings:p,values:{length:f}}=t;for(;l<f;){const t=i.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)c(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=p[l],n=h.exec(e)[2],r=n.toLowerCase()+"$lit$",i=t.getAttribute(r);t.removeAttribute(r);const a=i.split(s);this.parts.push({type:"attribute",index:u,name:n,strings:a}),l+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const r=t.parentNode,i=e.split(s),a=i.length-1;for(let e=0;e<a;e++){let n,a=i[e];if(""===a)n=d();else{const t=h.exec(a);null!==t&&c(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(a)}r.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===i[a]?(r.insertBefore(d(),t),n.push(t)):t.data=i[a],l+=a}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&u!==o||(u++,e.insertBefore(d(),t)),o=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else i.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const c=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,133,null,!1);let a=m(r),o=r[a],s=-1,u=0;const c=[];let l=null;for(;i.nextNode();){s++;const t=i.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&u++;void 0!==o&&o.index===s;)o.index=null!==l?-1:o.index-u,a=m(r,a),o=r[a]}c.forEach(t=>t.parentNode.removeChild(t))}const f=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},m=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const g=new WeakMap,y=t=>"function"==typeof t&&g.has(t),v={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let a,o=0,s=0,u=i.nextNode();for(;o<n.length;)if(a=n[o],l(a)){for(;s<a.index;)s++,"TEMPLATE"===u.nodeName&&(e.push(u),i.currentNode=u.content),null===(u=i.nextNode())&&(i.currentNode=e.pop(),u=i.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(u.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(u,a.name,a.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${a} `;class S{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const s=h.exec(t);e+=null===s?t+(n?_:o):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class T{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(x(t)||!C(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||x(t)&&t===this.value||(this.value=t,y(t)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}const t=this.__pendingValue;t!==v&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===w?(this.value=w,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const n=new b(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)n=e[r],void 0===n&&(n=new M(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=v}}class k extends T{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends P{}let U=!1;(()=>{try{const t={get capture(){return U=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class O{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;y(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=D(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const D=t=>t&&(U?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function A(t){let e=W.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},W.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(a);return n=e.keyString.get(r),void 0===n&&(n=new u(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const W=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const q=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,r){const i=e[0];if("."===i){return new k(t,e.slice(1),n).parts}return"@"===i?[new O(t,e.slice(1),r.eventContext)]:"?"===i?[new N(t,e.slice(1),n)]:new T(t,e,n).parts}handleTextExpression(t){return new M(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(t,...e)=>new S(t,e,"html",q),R=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const Y=t=>e=>{const n=R(e.type,t);let r=W.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},W.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(a);if(i=r.keyString.get(o),void 0===i){const n=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(n,t),i=new u(e,n),r.keyString.set(o,i)}return r.stringsArray.set(e.strings,i),i},H=["html","svg"],F=new Set,L=(t,e,n)=>{F.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:a}=i;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,t);const o=document.createElement("style");for(let t=0;t<a;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{H.forEach(e=>{const n=W.get(R(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),p(t,n)})})})(t);const s=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const a=document.createTreeWalker(r,133,null,!1);let o=m(i),s=0,u=-1;for(;a.nextNode();){for(u++,a.currentNode===n&&(s=f(e),n.parentNode.insertBefore(e,n));-1!==o&&i[o].index===u;){if(s>0){for(;-1!==o;)i[o].index+=s,o=m(i,o);return}o=m(i,o)}}}(n,o,s.firstChild):s.insertBefore(o,s.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const u=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==u)e.insertBefore(u.cloneNode(!0),e.firstChild);else if(n){s.insertBefore(o,s.firstChild);const t=new Set;t.add(o),p(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},$=(t,e)=>e!==t&&(e==e||t==t),I={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:$};class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=I){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||I}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=$){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||B,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||B.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=I){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const r=this.constructor,i=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}X.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),G=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function J(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):G(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class tt{constructor(t,e){if(e!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const et=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof tt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new tt(n,Z)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const nt={};class rt extends X{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),r=[];n.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==nt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return nt}}rt.finalized=!0,rt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,a=j.has(e),o=z&&11===e.nodeType&&!!e.host,s=o&&!F.has(r),u=s?document.createDocumentFragment():e;if(((t,e,n)=>{let r=j.get(e);void 0===r&&(i(e,e.firstChild),j.set(e,r=new M(Object.assign({templateFactory:A},n))),r.appendInto(e)),r.setValue(t),r.commit()})(t,u,Object.assign({templateFactory:Y(r)},n)),s){const t=j.get(u);j.delete(u);const n=t.value instanceof b?t.value.template:void 0;L(r,u,n),i(e,e.firstChild),e.appendChild(u),j.set(e,t)}!a&&o&&window.ShadyCSS.styleElement(e.host)};var it=function(t,e,n,r){var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,n,o):i(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o};let at=class extends rt{static get styles(){return et`
      :host {
        --unit: var(--sid-unit, 8px);
        --color-fg: var(--sid-fg, #fff);
        --color-bg: var(--sid-bg, #222);

        position: absolute;
        display: flex;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: var(--color-bg);
        color: var(--color-fg);
        overflow: hidden;
      }

      .main {
        position: absolute;
        top: 60%;
        left: 0;
        right: 0;
      }

      .line {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: calc(100vw + 100vh);

        border-bottom: 1px solid var(--color-fg);
        transform: translate(-50%);
      }

      .main-container {
        position: absolute;
        bottom: calc(var(--unit) * 3);
        right: 10%;
      }

      .secondary-container {
        position: absolute;
        top: calc(60% + var(--unit) * 3);
        right: 10%;
      }
    `}render(){return V`
      <div class="container">
        <div class="main">
          <i class="line"></i>
          <div class="main-container">
            <slot />
          </div>
        </div>
        <div class="secondary-container">
          <slot name="secondary" />
        </div>
      </div>
    `}};function ot(t,e){if(e.length<t)throw new TypeError(t+" argument"+t>1?"s":" required, but only "+e.length+" present")}function st(t){ot(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function ut(t){ot(1,arguments);var e=st(t);return!isNaN(e)}at=it([Q("sid-layout")],at);var ct={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function lt(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var dt={date:lt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:lt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:lt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},ht={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function pt(t){return function(e,n){var r,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var s=t.defaultWidth,u=i.width?String(i.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function ft(t){return function(e,n){var r=String(e),i=n||{},a=i.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],s=r.match(o);if(!s)return null;var u,c=s[0],l=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(r)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(r)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=i.valueCallback?i.valueCallback(u):u,rest:r.slice(c.length)}}}var mt,gt={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof ct[t]?ct[t]:1===e?ct[t].one:ct[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:dt,formatRelative:function(t,e,n,r){return ht[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:pt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:pt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:pt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:pt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:pt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(mt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},i=n.match(mt.matchPattern);if(!i)return null;var a=i[0],o=n.match(mt.parsePattern);if(!o)return null;var s=mt.valueCallback?mt.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(a.length)}}),era:ft({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ft({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ft({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ft({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ft({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function yt(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function vt(t,e){ot(2,arguments);var n=st(t).getTime(),r=yt(e);return new Date(n+r)}function wt(t,e){ot(2,arguments);var n=yt(e);return vt(t,-n)}function bt(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var _t={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return bt("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):bt(n+1,2)},d:function(t,e){return bt(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return bt(t.getUTCHours()%12||12,e.length)},H:function(t,e){return bt(t.getUTCHours(),e.length)},m:function(t,e){return bt(t.getUTCMinutes(),e.length)},s:function(t,e){return bt(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return bt(Math.floor(r*Math.pow(10,n-3)),e.length)}};function St(t){ot(1,arguments);var e=1,n=st(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function xt(t){ot(1,arguments);var e=st(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=St(r),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var o=St(a);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function Ct(t){ot(1,arguments);var e=xt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=St(n);return r}function Tt(t,e){ot(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.weekStartsOn,a=null==i?0:yt(i),o=null==n.weekStartsOn?a:yt(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=st(t),u=s.getUTCDay(),c=(u<o?7:0)+u-o;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function Pt(t,e){ot(1,arguments);var n=st(t,e),r=n.getUTCFullYear(),i=e||{},a=i.locale,o=a&&a.options&&a.options.firstWeekContainsDate,s=null==o?1:yt(o),u=null==i.firstWeekContainsDate?s:yt(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var l=Tt(c,e),d=new Date(0);d.setUTCFullYear(r,0,u),d.setUTCHours(0,0,0,0);var h=Tt(d,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function Mt(t,e){ot(1,arguments);var n=e||{},r=n.locale,i=r&&r.options&&r.options.firstWeekContainsDate,a=null==i?1:yt(i),o=null==n.firstWeekContainsDate?a:yt(n.firstWeekContainsDate),s=Pt(t,e),u=new Date(0);u.setUTCFullYear(s,0,o),u.setUTCHours(0,0,0,0);var c=Tt(u,e);return c}var Nt="midnight",kt="noon",Et="morning",Ut="afternoon",Ot="evening",Dt="night";function At(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),a=r%60;if(0===a)return n+String(i);var o=e||"";return n+String(i)+o+bt(a,2)}function Wt(t,e){return t%60==0?(t>0?"-":"+")+bt(Math.abs(t)/60,2):jt(t,e)}function jt(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t);return r+bt(Math.floor(i/60),2)+n+bt(i%60,2)}var qt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return _t.y(t,e)},Y:function(t,e,n,r){var i=Pt(t,r),a=i>0?i:1-i;return"YY"===e?bt(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):bt(a,e.length)},R:function(t,e){return bt(xt(t),e.length)},u:function(t,e){return bt(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return bt(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return bt(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return _t.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return bt(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){ot(1,arguments);var n=st(t),r=Tt(n,e).getTime()-Mt(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):bt(i,e.length)},I:function(t,e,n){var r=function(t){ot(1,arguments);var e=st(t),n=St(e).getTime()-Ct(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):bt(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):_t.d(t,e)},D:function(t,e,n){var r=function(t){ot(1,arguments);var e=st(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):bt(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var i=t.getUTCDay(),a=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return bt(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var i=t.getUTCDay(),a=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return bt(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),i=0===r?7:r;switch(e){case"i":return String(i);case"ii":return bt(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,i=t.getUTCHours();switch(r=12===i?kt:0===i?Nt:i/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,i=t.getUTCHours();switch(r=i>=17?Ot:i>=12?Ut:i>=4?Et:Dt,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return _t.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):_t.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):bt(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):bt(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):_t.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):_t.s(t,e)},S:function(t,e){return _t.S(t,e)},X:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();if(0===i)return"Z";switch(e){case"X":return Wt(i);case"XXXX":case"XX":return jt(i);case"XXXXX":case"XXX":default:return jt(i,":")}},x:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Wt(i);case"xxxx":case"xx":return jt(i);case"xxxxx":case"xxx":default:return jt(i,":")}},O:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+At(i,":");case"OOOO":default:return"GMT"+jt(i,":")}},z:function(t,e,n,r){var i=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+At(i,":");case"zzzz":default:return"GMT"+jt(i,":")}},t:function(t,e,n,r){var i=r._originalDate||t;return bt(Math.floor(i.getTime()/1e3),e.length)},T:function(t,e,n,r){return bt((r._originalDate||t).getTime(),e.length)}};function Vt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Rt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var zt={p:Rt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),i=r[1],a=r[2];if(!a)return Vt(t,e);switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Vt(i,e)).replace("{{time}}",Rt(a,e))}};function Yt(t){return t.getTime()%6e4}function Ht(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+Yt(e))%6e4:Yt(e))}var Ft=["D","DD"],Lt=["YY","YYYY"];function Bt(t){return-1!==Ft.indexOf(t)}function $t(t){return-1!==Lt.indexOf(t)}function It(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var Xt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gt=/^'([^]*?)'?$/,Jt=/''/g,Kt=/[a-zA-Z]/;function Zt(t,e,n){ot(2,arguments);var r=String(e),i=n||{},a=i.locale||gt,o=a.options&&a.options.firstWeekContainsDate,s=null==o?1:yt(o),u=null==i.firstWeekContainsDate?s:yt(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=a.options&&a.options.weekStartsOn,l=null==c?0:yt(c),d=null==i.weekStartsOn?l:yt(i.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!a.localize)throw new RangeError("locale must contain localize property");if(!a.formatLong)throw new RangeError("locale must contain formatLong property");var h=st(t);if(!ut(h))throw new RangeError("Invalid time value");var p=Ht(h),f=wt(h,p),m={firstWeekContainsDate:u,weekStartsOn:d,locale:a,_originalDate:h},g=r.match(Qt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,zt[e])(t,a.formatLong,m):t})).join("").match(Xt).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return te(t);var n=qt[e];if(n)return!i.useAdditionalWeekYearTokens&&$t(t)&&It(t),!i.useAdditionalDayOfYearTokens&&Bt(t)&&It(t),n(f,t,a.localize,m);if(e.match(Kt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return g}function te(t){return t.match(Gt)[1].replace(Jt,"'")}var ee,ne,re,ie=function(t,e,n,r){var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,n,o):i(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},ae=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},oe=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n};let se=class extends rt{constructor(){super(...arguments),ee.set(this,null),this.value=new Date,this.time=null,this.format="HH:mm",ne.set(this,()=>{null!==ae(this,ee)&&clearInterval(ae(this,ee))}),re.set(this,()=>{if(!this.time){if(null!==ae(this,ee))return;return void oe(this,ee,setInterval(()=>{this.value=new Date},1e3))}ae(this,ne).call(this);const t=this.time;if(isNaN(t.valueOf()))return this.value=new Date,void console.warn("sid-clock: Invalid datetime passed to `time` attribute/prop.");this.value=t})}render(){return V`
      ${Zt(this.value,this.format)}
    `}connectedCallback(){super.connectedCallback(),ae(this,re).call(this)}disconnectedCallback(){super.disconnectedCallback(),ae(this,ne).call(this)}updated(t){(t.has("time")||t.has("format"))&&ae(this,re).call(this)}};function ue(t,e){ot(2,arguments);var n=st(t),r=yt(e);return n.setDate(n.getDate()+r),n}function ce(t){ot(1,arguments);var e=st(t);return e.setHours(0,0,0,0),e}ee=new WeakMap,ne=new WeakMap,re=new WeakMap,ie([J({attribute:!1})],se.prototype,"value",void 0),ie([J({converter:{fromAttribute:t=>t?new Date(t):null,toAttribute(t){if(t)return t.toISOString()}}})],se.prototype,"time",void 0),ie([J({type:String})],se.prototype,"format",void 0),se=ie([Q("sid-clock")],se);var le,de,he,pe=function(t,e,n,r){var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,n,o):i(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},fe=function(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)},me=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,n),n};let ge=class extends rt{constructor(){super(...arguments),le.set(this,null),this.value=new Date,this.date=null,this.format="EEE",this.casing="upper",this.holidays=[],de.set(this,()=>{null!==fe(this,le)&&clearInterval(fe(this,le))}),he.set(this,()=>{if(!this.date){if(null!==fe(this,le))return;return void me(this,le,setInterval(()=>{this.value=new Date},1e3))}fe(this,de).call(this);const t=this.date;if(isNaN(t.valueOf()))return this.value=new Date,void console.warn("sid-calendar: Invalid datetime passed to `time` attribute/prop.");this.value=t})}static get styles(){return et`
      :host {
        --color-fg: var(--sid-fg, #fff);
        --color-bg: var(--sid-bg, #222);
        --unit: var(--sid-unit, 8px);

        display: flex;
      }

      .item {
        position: relative;
        display: block;
        padding: calc(var(--unit) * 1.5) calc(var(--unit) * 1.5);
        box-sizing: border-box;

        border-radius: 1px;
      }

      .item:first-of-type {
        background-color: var(--color-fg);
        color: var(--color-bg);
      }
      .item:nth-of-type(2) {
        opacity: 0.6;
      }
      .item:nth-of-type(3) {
        opacity: 0.2;
      }

      .item[data-holiday="true"]::after {
        content: '';

        position: absolute;
        display: block;
        width: var(--unit);
        height: var(--unit);
        left: 50%;
        bottom: calc(var(--unit) * 0.5);

        background-color: currentColor;
        border-radius: 50%;

        transform: translateX(-50%);
      }

      .item[data-casing="upper"] {
        text-transform: uppercase;
      }
      .item[data-casing="lower"] {
        text-transform: lowercase;
      }
      .item[data-casing="capital"] {
        text-transform: capitalize;
      }
    `}render(){const t=[this.value,ue(this.value,1),ue(this.value,2)];return V`
      ${t.map(t=>{var e;const n=function(t){return ot(1,arguments),6===st(t).getDay()}(t)||function(t){return ot(1,arguments),0===st(t).getDay()}(t)||(null!==(e=this.holidays)&&void 0!==e?e:[]).some(e=>function(t,e){ot(2,arguments);var n=ce(t),r=ce(e);return n.getTime()===r.getTime()}(e,t));return V`
          <span
            class="item"
            data-casing=${this.casing}
            data-holiday=${n}
          >
            ${Zt(t,this.format)}
          </span>
        `})}
    `}connectedCallback(){super.connectedCallback(),fe(this,he).call(this)}disconnectedCallback(){super.disconnectedCallback(),fe(this,de).call(this)}updated(t){(t.has("time")||t.has("format"))&&fe(this,he).call(this)}};le=new WeakMap,de=new WeakMap,he=new WeakMap,pe([J({attribute:!1})],ge.prototype,"value",void 0),pe([J({converter:{fromAttribute:t=>t?new Date(t):null,toAttribute(t){if(t)return t.toISOString()}}})],ge.prototype,"date",void 0),pe([J({type:String})],ge.prototype,"format",void 0),pe([J({type:String})],ge.prototype,"casing",void 0),pe([J({converter:{fromAttribute:t=>t?t.split(",").map(t=>new Date(t.trim())):null,toAttribute(t){if(t)return t.map(t=>Zt(t,"yyyy-MM-dd")).join(",")}}})],ge.prototype,"holidays",void 0),ge=pe([Q("sid-calendar")],ge)}]);