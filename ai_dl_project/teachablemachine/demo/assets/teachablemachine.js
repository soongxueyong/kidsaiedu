/*! For license information please see teachablemachine-components.min.js.LICENSE.txt */
var tm=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=51)}([function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"e",(function(){return h}));const r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${o}`),s="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;const n=[],o=[],a=document.createTreeWalker(e.content,133,null,!1);let l=0,p=-1,d=0;const{strings:f,values:{length:y}}=t;for(;d<y;){const t=a.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)c(e[t].name,s)&&r++;for(;r-- >0;){const e=f[d],n=h.exec(e)[2],r=n.toLowerCase()+s,o=t.getAttribute(r);t.removeAttribute(r);const a=o.split(i);this.parts.push({type:"attribute",index:p,name:n,strings:a}),d+=a.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,o=e.split(i),a=o.length-1;for(let e=0;e<a;e++){let n,i=o[e];if(""===i)n=u();else{const t=h.exec(i);null!==t&&c(t[2],s)&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-s.length)+t[3]),n=document.createTextNode(i)}r.insertBefore(n,t),this.parts.push({type:"node",index:++p})}""===o[a]?(r.insertBefore(u(),t),n.push(t)):t.data=o[a],d+=a}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&p!==l||(p++,e.insertBefore(u(),t)),l=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(n.push(t),p--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),d++}}else a.currentNode=o.pop()}for(const t of n)t.parentNode.removeChild(t)}}const c=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,u=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"i",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return m})),n.d(e,"d",(function(){return v}));var r=n(11),o=n(5),i=n(4),s=n(15),a=n(13),c=n(0);const l=t=>null===t||!("object"==typeof t||"function"==typeof t),u=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class h{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new p(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(l(t)||!u(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class p{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i.a||l(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=i.a,t(this)}this.value!==i.a&&this.committer.commit()}}class d{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=Object(c.c)()),t.__insert(this.endNode=Object(c.c)())}insertAfterPart(t){t.__insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}const t=this.__pendingValue;t!==i.a&&(l(t)?t!==this.value&&this.__commitText(t):t instanceof a.b?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):u(t)?this.__commitIterable(t):t===i.b?(this.value=i.b,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof s.a&&this.value.template===e)this.value.update(t.values);else{const n=new s.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const o of t)n=e[r],void 0===n&&(n=new d(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(o),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(o.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class f{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue===i.a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i.a}}class y extends h{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends p{}let g=!1;try{const t={get capture(){return g=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class v{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Object(r.b)(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i.a,t(this)}if(this.__pendingValue===i.a)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=b(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const b=t=>t&&(g?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);function o(t){for(var e=t.length,n=0,r=0;e>0;)r=Math.random()*e|0,n=t[--e],t[e]=t[r],t[r]=n}function i(t,e){if(!t)throw new Error("string"==typeof e?e:e())}function s(t,e,n){if(void 0===e&&(e=[]),void 0===n&&(n=!1),null==e&&(e=[]),Array.isArray(t)||h(t)&&!n)for(var r=0;r<t.length;++r)s(t[r],e,n);else e.push(t);return e}function a(t,e){if(t===e)return!0;if(null==t||null==e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function c(t){return t%1==0}function l(t,e){var n=e.length;return i((t=null==t?e.map((function(t,e){return e})):[].concat(t)).every((function(t){return t>=-n&&t<n})),(function(){return"All values in axis param must be in range [-"+n+", "+n+") but got axis "+t})),i(t.every((function(t){return c(t)})),(function(){return"All values in axis param must be integers but got axis "+t})),t.map((function(t){return t<0?n+t:t}))}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+e+" being uploaded contains "+r+".")}}function h(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array}function p(t){return"string"==typeof t||t instanceof String}function d(t){return"boolean"==typeof t}function f(t){return"number"==typeof t}function y(t,e){if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e)return new Uint8Array(t);throw new Error("Unknown data type "+e)}e.shuffle=o,e.clamp=function(t,e,n){return Math.max(t,Math.min(e,n))},e.nearestLargerEven=function(t){return t%2==0?t:t+1},e.sum=function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n];return e},e.randUniform=function(t,e){var n=Math.random();return e*n+(1-n)*t},e.distSquared=function(t,e){for(var n=0,r=0;r<t.length;r++){var o=Number(t[r])-Number(e[r]);n+=o*o}return n},e.assert=i,e.assertShapesMatch=function(t,e,n){void 0===n&&(n=""),i(a(t,e),(function(){return n+" Shapes "+t+" and "+e+" must match"}))},e.assertNonNull=function(t){i(null!=t,(function(){return"The input to the tensor constructor must be a non-null value."}))},e.flatten=s,e.sizeFromShape=function(t){if(0===t.length)return 1;for(var e=t[0],n=1;n<t.length;n++)e*=t[n];return e},e.isScalarShape=function(t){return 0===t.length},e.arraysEqual=a,e.isInt=c,e.tanh=function(t){if(null!=Math.tanh)return Math.tanh(t);if(t===1/0)return 1;if(t===-1/0)return-1;var e=Math.exp(2*t);return(e-1)/(e+1)},e.sizeToSquarishShape=function(t){var e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]},e.createShuffledIndices=function(t){for(var e=new Uint32Array(t),n=0;n<t;++n)e[n]=n;return o(e),e},e.rightPad=function(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)},e.repeatedTry=function(t,e,n){return void 0===e&&(e=function(t){return 0}),new Promise((function(r,o){var i=0,s=function(){if(t())r();else{i++;var a=e(i);null!=n&&i>=n?o():setTimeout(s,a)}};s()}))},e.inferFromImplicitShape=function(t,e){for(var n=1,r=-1,o=0;o<t.length;++o)if(t[o]>=0)n*=t[o];else if(-1===t[o]){if(-1!==r)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(t[o]<0)throw Error("Shapes can not be < 0. Found "+t[o]+" at dim "+o);if(-1===r){if(e>0&&e!==n)throw Error("Size("+e+") must match the product of shape "+t);return t}if(0===n)throw Error("Cannot infer the missing size in ["+t+"] when there are 0 elements");if(e%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+n);var i=t.slice();return i[r]=e/n,i},e.parseAxisParam=l,e.squeezeShape=function(t,e){for(var n=[],r=[],o=null!=e&&Array.isArray(e)&&0===e.length,i=null==e||o?null:l(e,t).sort(),s=0,a=0;a<t.length;++a){if(null!=i){if(i[s]===a&&1!==t[a])throw new Error("Can't squeeze axis "+a+" since its dim '"+t[a]+"' is not 1");(null==i[s]||i[s]>a)&&1===t[a]&&(n.push(t[a]),r.push(a)),i[s]<=a&&s++}1!==t[a]&&(n.push(t[a]),r.push(a))}return{newShape:n,keptDims:r}},e.getTypedArrayFromDType=function(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else{if("bool"!==t)throw new Error("Unknown data type "+t);n=new Uint8Array(e)}return n},e.getArrayFromDType=function(t,e){var n=null;if(null==t||"float32"===t)n=new Float32Array(e);else if("int32"===t)n=new Int32Array(e);else if("bool"===t)n=new Uint8Array(e);else{if("string"!==t)throw new Error("Unknown data type "+t);n=new Array(e)}return n},e.checkConversionForErrors=u,e.isValidDtype=function(t){return"bool"===t||"complex64"===t||"float32"===t||"int32"===t||"string"===t},e.hasEncodingLoss=function(t,e){return"complex64"!==e&&(("float32"!==e||"complex64"===t)&&(("int32"!==e||"float32"===t||"complex64"===t)&&("bool"!==e||"bool"!==t)))},e.isTypedArray=h,e.bytesPerElement=function(t){if("float32"===t||"int32"===t)return 4;if("complex64"===t)return 8;if("bool"===t)return 1;throw new Error("Unknown dtype "+t)},e.bytesFromStringArray=function(t){if(null==t)return 0;var e=0;return t.forEach((function(t){return e+=t.length})),e},e.isString=p,e.isBoolean=d,e.isNumber=f,e.inferDtype=function t(e){return Array.isArray(e)?t(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array?"int32":f(e)?"float32":p(e)?"string":d(e)?"bool":"float32"},e.isFunction=function(t){return!!(t&&t.constructor&&t.call&&t.apply)},e.nearestDivisor=function(t,e){for(var n=e;n<t;++n)if(t%n==0)return n;return t},e.computeStrides=function(t){var e=t.length;if(e<2)return[];var n=new Array(e-1);n[e-2]=t[e-1];for(var r=e-3;r>=0;--r)n[r]=n[r+1]*t[r+1];return n},e.toTypedArray=function(t,e,n){if("string"===e)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=s(t)),n&&u(t,e),function(t,e){return t instanceof Float32Array&&"float32"===e||t instanceof Int32Array&&"int32"===e||t instanceof Uint8Array&&"bool"===e}(t,e))return t;if(null==e||"float32"===e||"complex64"===e)return new Float32Array(t);if("int32"===e)return new Int32Array(t);if("bool"===e){for(var r=new Uint8Array(t.length),o=0;o<r.length;++o)0!==Math.round(t[o])&&(r[o]=1);return r}throw new Error("Unknown data type "+e)},e.toNestedArray=function(t,e){if(0===t.length)return e[0];var n=t.reduce((function(t,e){return t*e}));if(0===n)return[];if(n!==e.length)throw new Error("["+t+"] does not match the input size.");return function t(e,n,r){var o=new Array;if(1===n.length)for(var i=n[0],s=0;s<i;s++)o[s]=r[e+s];else{i=n[0];var a=n.slice(1),c=a.reduce((function(t,e){return t*e}));for(s=0;s<i;s++)o[s]=t(e+s*c,a,r)}return o}(0,t,e)},e.makeOnesTypedArray=function(t,e){for(var n=y(t,e),r=0;r<n.length;r++)n[r]=1;return n},e.makeZerosTypedArray=y,e.now=function(){return r.env().platform.now()},e.assertNonNegativeIntegerDimensions=function(t){t.forEach((function(e){i(Number.isInteger(e)&&e>=0,(function(){return"Tensor must have a shape comprised of positive integers but got shape ["+t+"]."}))}))},e.fetch=function(t,e){return r.env().platform.fetch(t,e)},e.encodeString=function(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",r.env().platform.encode(t,e)},e.decodeString=function(t,e){return void 0===e&&(e="utf-8"),e=e||"utf-8",r.env().platform.decode(t,e)}},function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(5),i=n(0);function s(t,e){const{element:{content:n},parts:r}=t,o=document.createTreeWalker(n,133,null,!1);let i=c(r),s=r[i],a=-1,l=0;const u=[];let h=null;for(;o.nextNode();){a++;const t=o.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(u.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==s&&s.index===a;)s.index=null!==h?-1:s.index-l,i=c(r,i),s=r[i]}u.forEach(t=>t.parentNode.removeChild(t))}const a=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},c=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(i.d)(e))return n}return-1};var l=n(12),u=n(10),h=n(15);const p=(t,e)=>`${t}--${e}`;let d=!0;void 0===window.ShadyCSS?d=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),d=!1);const f=t=>e=>{const n=p(e.type,t);let r=u.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},u.a.set(n,r));let o=r.stringsArray.get(e.strings);if(void 0!==o)return o;const s=e.strings.join(i.f);if(o=r.keyString.get(s),void 0===o){const n=e.getTemplateElement();d&&window.ShadyCSS.prepareTemplateDom(n,t),o=new i.a(e,n),r.keyString.set(s,o)}return r.stringsArray.set(e.strings,o),o},y=["html","svg"],m=new Set,g=(t,e,n)=>{m.add(t);const r=n?n.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,t);const l=document.createElement("style");for(let t=0;t<i;t++){const e=o[t];e.parentNode.removeChild(e),l.textContent+=e.textContent}(t=>{y.forEach(e=>{const n=u.a.get(p(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),s(t,n)})})})(t);const h=r.content;n?function(t,e,n=null){const{element:{content:r},parts:o}=t;if(null==n)return void r.appendChild(e);const i=document.createTreeWalker(r,133,null,!1);let s=c(o),l=0,u=-1;for(;i.nextNode();){for(u++,i.currentNode===n&&(l=a(e),n.parentNode.insertBefore(e,n));-1!==s&&o[s].index===u;){if(l>0){for(;-1!==s;)o[s].index+=l,s=c(o,s);return}s=c(o,s)}}}(n,l,h.firstChild):h.insertBefore(l,h.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const d=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(n){h.insertBefore(l,h.firstChild);const t=new Set;t.add(l),s(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const v={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},b=(t,e)=>e!==t&&(e==e||t==t),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},_=Promise.resolve(!0);class x extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=_,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=w){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const r=this[t];this[n]=e,this._requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=b){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||v,o="function"==typeof r?r:r.fromAttribute;return o?o(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||v.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=w){const r=this.constructor,o=r._attributeNameForProperty(t,n);if(void 0!==o){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r)||w;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const r=this.constructor,o=r._classProperties.get(t)||w;r._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,r)=>{t=n,e=r});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}x.finalized=!0;const S=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),E=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}});function T(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):E(t,e)}function k(t){return(e,n)=>{const r={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==n?A(r,e,n):P(r,e)}}function I(t){return(e,n)=>{const r={get(){return this.renderRoot.querySelectorAll(t)},enumerable:!0,configurable:!0};return void 0!==n?A(r,e,n):P(r,e)}}const A=(t,e,n)=>{Object.defineProperty(e,n,t)},P=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),C=t=>(e,n)=>void 0!==n?((t,e,n)=>{Object.assign(e[n],t)})(t,e,n):((t,e)=>Object.assign({},e,{finisher(n){Object.assign(n.prototype[e.key],t)}}))(t,e),R="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol();class O{constructor(t,e){if(e!==D)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(R?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const M=t=>new O(String(t),D),L=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof O)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new O(n,D)};n.d(e,"LitElement",(function(){return N})),n.d(e,"defaultConverter",(function(){return v})),n.d(e,"notEqual",(function(){return b})),n.d(e,"UpdatingElement",(function(){return x})),n.d(e,"customElement",(function(){return S})),n.d(e,"property",(function(){return T})),n.d(e,"query",(function(){return k})),n.d(e,"queryAll",(function(){return I})),n.d(e,"eventOptions",(function(){return C})),n.d(e,"html",(function(){return r.html})),n.d(e,"svg",(function(){return r.svg})),n.d(e,"TemplateResult",(function(){return r.TemplateResult})),n.d(e,"SVGTemplateResult",(function(){return r.SVGTemplateResult})),n.d(e,"supportsAdoptingStyleSheets",(function(){return R})),n.d(e,"CSSResult",(function(){return O})),n.d(e,"unsafeCSS",(function(){return M})),n.d(e,"css",(function(){return L})),(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const j=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let r=0,o=e.length;r<o;r++){const o=e[r];Array.isArray(o)?t(o,n):n.push(o)}return n}(t);class N extends x{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){j(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?R?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof r.TemplateResult&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}N.finalized=!0,N.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=l.a.has(e),s=d&&11===e.nodeType&&!!e.host,a=s&&!m.has(r),c=a?document.createDocumentFragment():e;if(Object(l.b)(t,c,Object.assign({templateFactory:f(r)},n)),a){const t=l.a.get(c);l.a.delete(c);const n=t.value instanceof h.a?t.value.template:void 0;g(r,c,n),Object(o.b)(e,e.firstChild),e.appendChild(c),l.a.set(e,t)}!i&&s&&window.ShadyCSS.styleElement(e.host)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r={},o={}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return i}));const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,n=null,r=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,r),e=n}},i=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}}},function(t,e,n){"use strict";n.r(e);var r=n(1);class o{handleAttributeExpressions(t,e,n,o){const i=e[0];if("."===i){return new r.f(t,e.slice(1),n).parts}return"@"===i?[new r.d(t,e.slice(1),o.eventContext)]:"?"===i?[new r.c(t,e.slice(1),n)]:new r.a(t,e,n).parts}handleTextExpression(t){return new r.e(t)}}const i=new o;var s=n(13),a=n(11),c=n(5),l=n(4),u=n(12),h=n(10),p=n(15),d=n(0);n.d(e,"html",(function(){return f})),n.d(e,"svg",(function(){return y})),n.d(e,"DefaultTemplateProcessor",(function(){return o})),n.d(e,"defaultTemplateProcessor",(function(){return i})),n.d(e,"directive",(function(){return a.a})),n.d(e,"isDirective",(function(){return a.b})),n.d(e,"removeNodes",(function(){return c.b})),n.d(e,"reparentNodes",(function(){return c.c})),n.d(e,"noChange",(function(){return l.a})),n.d(e,"nothing",(function(){return l.b})),n.d(e,"AttributeCommitter",(function(){return r.a})),n.d(e,"AttributePart",(function(){return r.b})),n.d(e,"BooleanAttributePart",(function(){return r.c})),n.d(e,"EventPart",(function(){return r.d})),n.d(e,"isIterable",(function(){return r.h})),n.d(e,"isPrimitive",(function(){return r.i})),n.d(e,"NodePart",(function(){return r.e})),n.d(e,"PropertyCommitter",(function(){return r.f})),n.d(e,"PropertyPart",(function(){return r.g})),n.d(e,"parts",(function(){return u.a})),n.d(e,"render",(function(){return u.b})),n.d(e,"templateCaches",(function(){return h.a})),n.d(e,"templateFactory",(function(){return h.b})),n.d(e,"TemplateInstance",(function(){return p.a})),n.d(e,"SVGTemplateResult",(function(){return s.a})),n.d(e,"TemplateResult",(function(){return s.b})),n.d(e,"createMarker",(function(){return d.c})),n.d(e,"isTemplatePartActive",(function(){return d.d})),n.d(e,"Template",(function(){return d.a})),(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const f=(t,...e)=>new s.b(t,e,"html",i),y=(t,...e)=>new s.a(t,e,"svg",i)},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){var o=n.value;if("function"!=typeof o)throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(r(o)));var i=!1;return{configurable:!0,get:function(){if(i||this===t.prototype||this.hasOwnProperty(e)||"function"!=typeof o)return o;var n=o.bind(this);return i=!0,Object.defineProperty(this,e,{configurable:!0,get:function(){return n},set:function(t){o=t,delete this[e]}}),i=!1,n},set:function(t){o=t}}}function i(t){var e;return"undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys?e=Reflect.ownKeys(t.prototype):(e=Object.getOwnPropertyNames(t.prototype),"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t.prototype)))),e.forEach((function(e){if("constructor"!==e){var n=Object.getOwnPropertyDescriptor(t.prototype,e);"function"==typeof n.value&&Object.defineProperty(t.prototype,e,o(t,e,n))}})),t}function s(){return 1===arguments.length?i.apply(void 0,arguments):o.apply(void 0,arguments)}n.r(e),n.d(e,"boundMethod",(function(){return o})),n.d(e,"boundClass",(function(){return i})),n.d(e,"default",(function(){return s}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return t.prototype.setPlatform=function(t,e){null!=this.platform&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},t.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},null!=this.urlFlags[t]){var r=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+r+"."),this.set(t,r)}},t.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},t.prototype.getNumber=function(t){return this.get(t)},t.prototype.getBool=function(t){return this.get(t)},t.prototype.getFlags=function(){return this.flags},Object.defineProperty(t.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),t.prototype.set=function(t,e){if(null==this.flagRegistry[t])throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,null!=this.flagRegistry[t].setHook&&this.flagRegistry[t].setHook(e)},t.prototype.evaluateFlag=function(t){if(null==this.flagRegistry[t])throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},t.prototype.setFlags=function(t){this.flags=Object.assign({},t)},t.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},t.prototype.populateURLFlags=function(){var t=this;if(void 0!==this.global&&void 0!==this.global.location&&void 0!==this.global.location.search){var e=o(this.global.location.search);if("tfjsflags"in e)e.tfjsflags.split(",").forEach((function(e){var n=e.split(":"),r=n[0],o=n[1];t.urlFlags[r]=function(t,e){if("true"===(e=e.toLowerCase())||"false"===e)return"true"===e;if(""+ +e===e)return+e;throw new Error("Could not parse value flag value "+e+" for flag "+t+".")}(r,o)}))}},t}();function o(t){var e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return i(e,n[0],n[1]),n.join("=")})),e}function i(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}e.Environment=r,e.getQueryParams=o,e.env=function(){return e.ENV},e.ENV=null,e.setEnvironmentGlobal=function(t){e.ENV=t}},function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n(0);function o(t){let e=i.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},i.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(r.f);return n=e.keyString.get(o),void 0===n&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(o,n)),e.stringsArray.set(t.strings,n),n}const i=new Map},function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));const r=new WeakMap,o=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},i=t=>"function"==typeof t&&r.has(t)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var r=n(5),o=n(1),i=n(10);const s=new WeakMap,a=(t,e,n)=>{let a=s.get(e);void 0===a&&(Object(r.b)(e,e.firstChild),s.set(e,a=new o.e(Object.assign({templateFactory:i.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var r=n(5),o=n(0);const i=` ${o.f} `;class s{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const a=o.e.exec(t);e+=null===a?t+(n?i:o.g):t.substr(0,a.index)+a[1]+a[2]+o.b+a[3]+o.f}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class a extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}},function(t,e){t.exports=tf},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(5),o=n(0);class i{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,a=0,c=0,l=i.nextNode();for(;a<n.length;)if(s=n[a],Object(o.d)(s)){for(;c<s.index;)c++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3),i=n(8);class s extends o.LitElement{constructor(){super(...arguments),this.label="",this.iconType="",this.disabled=!1}click(t){t&&t.stopPropagation(),this.dispatchEvent(new CustomEvent("click",{bubbles:!0,composed:!0}))}render(){return o.html`
            <style>
                :host {
                    --__color: var(--color, #1967D2);
                    --__focus-color: var(--focus-color, #8AB4F8);
                    --__disabled-color: var(--disabled-color, #5F6368);
                    --__disabled-background: var(--disabled-background, #F1F3F4);
                    position: relative;
                    display: block;
                    height: 36px;
                }

                :host([disabled]) {
                    pointer-events: none;
                }

                button {
                    position: absolute;
                    top: 0;
                    left: 0;
                    min-width: 100%;
                    height: 100%;
                    cursor: pointer;
                    font-size: var(--font-size, 14px);
                    font-weight: var(--font-weight, normal);
                    text-align: center;
                    outline: 0;
                    border: 2px solid transparent;
                    border-radius: 4px;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                    padding: var(--button-padding, 7px 16px);
                    color: var(--__color);
                    background-color: var(--background-color, #D2E3FC);
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                    white-space: nowrap;
                    vertical-align: middle;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    text-transform: inherit;
                }

                button:focus {
                    border: 2px solid var(--__focus-color);
                }

                button:hover{
                    background-color: var(--hover-background-color, #D2E3FC);;
                }

                button:active {
                    background-color: var(--active-background-color, var(--hover-background-color, #D2E3FC));
                }

                button:disabled{
                    color: var(--__disabled-color, #5F6368);
                    background: var(--__disabled-background, #F1F3F4);
                    pointer-events: none;
                }

                span {
                    flex-grow: 100;
                }

                ::slotted(svg) {
                    fill: var(--__color);
                    margin-right: 5px;
                }
                .action-btn-icon {
                    margin-right: 5px;
                    display: inline-block;
                    vertical-align: middle;
                    fill: var(--__color);
                }
                button:disabled .action-btn-icon{
                    fill: #5F6368;
                }
            </style>
            <button ?disabled=${this.disabled} @click=${this.click}>
                <slot name="icon"></slot>
                ${this.iconType?o.svg` <svg class="action-btn-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="
                    ${"export"===this.iconType?"M11.9997 4.49992H13.6663V1.99992C13.6663 1.08325 12.9163 0.333252 11.9997 0.333252H1.99967C1.08301 0.333252 0.333008 1.08325 0.333008 1.99992V4.49992H1.99967V1.99992H11.9997V4.49992ZM6.16634 6.85825L4.00801 9.00825L2.83301 7.83325L6.99967 3.66659L11.1663 7.83325L9.99134 9.01659L7.83301 6.85825V13.6666H6.16634V6.85825Z":"download"===this.iconType?"M7.83301 7.14159L9.99134 4.99159L11.1663 6.16658L6.99967 10.3333L2.83301 6.16658L4.00801 4.99159L6.16634 7.14159V0.333252H7.83301V7.14159ZM1.99967 9.49992H0.333008V11.9999C0.333008 12.9166 1.08301 13.6666 1.99967 13.6666H11.9997C12.9163 13.6666 13.6663 12.9166 13.6663 11.9999V9.49992H11.9997V11.9999H1.99967V9.49992Z":"cloud"===this.iconType?"M13.9337 4.35008C13.542 1.98342 11.4753 0.166748 9.00033 0.166748C7.18366 0.166748 5.52533 1.15008 4.65033 2.71675C2.40866 3.00841 0.666992 4.95008 0.666992 7.25008C0.666992 9.77508 2.72533 11.8334 5.25033 11.8334H13.5837C15.6503 11.8334 17.3337 10.1501 17.3337 8.08342C17.3337 6.13342 15.842 4.52508 13.9337 4.35008ZM13.5837 10.1667H5.25033C3.64199 10.1667 2.33366 8.85841 2.33366 7.25008C2.33366 5.67508 3.61699 4.36675 5.20033 4.34175L5.73366 4.33341L5.95033 3.84175C6.47533 2.61675 7.67532 1.83341 9.00033 1.83341C10.842 1.83341 12.3337 3.32508 12.3337 5.16675V6.00008H13.5837C14.7337 6.00008 15.667 6.93341 15.667 8.08341C15.667 9.23341 14.7337 10.1667 13.5837 10.1667ZM11.917 6.41675L9.59199 4.09175L9.00033 3.50008L8.40866 4.09175L6.08366 6.41675L7.25866 7.60008L8.16699 6.69175V8.91675H9.83366V6.69175L10.742 7.59175L11.917 6.41675Z":"processing"===this.iconType?"M5.00833 6.66663L8.33333 9.99996L5 13.3333V18.3333H15L14.9917 13.3416L15 13.3333L11.6667 9.99996L15 6.66663V1.66663H5L5.00833 6.66663ZM13.325 14.0166L13.3333 16.6666H6.66667V14.025L9.50833 11.1833L10 10.6916L10.4917 11.1833L13.325 14.0166ZM13.3333 5.97496V3.33329H6.66667L6.675 5.97496L9.51667 8.82496L10 9.30829L10.4917 8.81663L13.3333 5.97496Z":""}
                    "/>
                </svg>`:""}
                <span>
                    ${this.label}
                </span>
            </button>
        `}}r([o.property({type:String})],s.prototype,"label",void 0),r([o.property({type:String})],s.prototype,"iconType",void 0),r([o.property({type:Boolean})],s.prototype,"disabled",void 0),r([i.default],s.prototype,"click",null),e.ButtonElement=s,customElements.define("tm-button",s)},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,n){"use strict";(function(t){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(93),s=n(2),a=n(47);function c(t){if(null===t)throw new Error("Invalid input value: "+JSON.stringify(t));var e=0,n=[];t.forEach((function(t){if(e+=t.byteLength,n.push(t.byteLength===t.buffer.byteLength?t:new t.constructor(t)),!(t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+t.constructor.name)}));var r=new Uint8Array(e),o=0;return n.forEach((function(t){r.set(new Uint8Array(t.buffer),o),o+=t.byteLength})),r.buffer}e.encodeWeights=function(t,e){return r(this,void 0,void 0,(function(){var n,i,s,a,l,u=this;return o(this,(function(h){switch(h.label){case 0:for(n=[],i=[],s=Array.isArray(t)?t.map((function(t){return t.name})):Object.keys(t),a=function(a){var c=s[a],l=Array.isArray(t)?t[a].tensor:t[c];if("float32"!==l.dtype&&"int32"!==l.dtype&&"bool"!==l.dtype&&"string"!==l.dtype)throw new Error("Unsupported dtype in weight '"+c+"': "+l.dtype);var h={name:c,shape:l.shape,dtype:l.dtype};if("string"===l.dtype){var p=new Promise((function(t){return r(u,void 0,void 0,(function(){var e,n,r,i,s,a,c;return o(this,(function(o){switch(o.label){case 0:return[4,l.bytes()];case 1:for(e=o.sent(),n=e.reduce((function(t,e){return t+e.length}),0)+4*e.length,r=new Uint8Array(n),i=0,s=0;s<e.length;s++)a=e[s],c=new Uint8Array(new Uint32Array([a.length]).buffer),r.set(c,i),i+=4,r.set(a,i),i+=a.length;return t(r),[2]}}))}))}));i.push(p)}else i.push(l.data());null!=e&&(h.group=e),n.push(h)},l=0;l<s.length;++l)a(l);return[4,Promise.all(i)];case 1:return[2,{data:c(h.sent()),specs:n}]}}))}))},e.decodeWeights=function(t,e){for(var n={},r=0,o=function(e){var o=e.name,c=e.dtype,l=e.shape,u=s.sizeFromShape(l),h=void 0;if("quantization"in e){var p=e.quantization;if("uint8"!==p.dtype&&"uint16"!==p.dtype)throw new Error("Weight "+e.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=a.DTYPE_VALUE_SIZE_MAP[p.dtype],f=t.slice(r,r+u*d),y="uint8"===p.dtype?new Uint8Array(f):new Uint16Array(f);if("float32"===c)h=Float32Array.from(y,(function(t){return t*p.scale+p.min}));else{if("int32"!==c)throw new Error("Unsupported dtype in weight '"+o+"': "+c);h=Int32Array.from(y,(function(t){return Math.round(t*p.scale+p.min)}))}r+=u*d}else if("string"===c){var m=s.sizeFromShape(e.shape);h=[];for(var g=0;g<m;g++){var v=new Uint32Array(t.slice(r,r+4))[0];r+=4;var b=new Uint8Array(t.slice(r,r+v));h.push(b),r+=v}}else{var w=a.DTYPE_VALUE_SIZE_MAP[c];f=t.slice(r,r+u*w);if("float32"===c)h=new Float32Array(f);else if("int32"===c)h=new Int32Array(f);else{if("bool"!==c)throw new Error("Unsupported dtype in weight '"+o+"': "+c);h=new Uint8Array(f)}r+=u*w}n[o]=i.tensor(h,l,c)},c=0,l=e;c<l.length;c++){o(l[c])}return n},e.concatenateTypedArrays=c;var l=void 0!==t&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function u(e){return l?t.byteLength(e):new Blob([e]).size}e.stringByteLength=u,e.arrayBufferToBase64String=function(e){return l?t.from(e).toString("base64"):btoa(String.fromCharCode.apply(null,new Uint8Array(e)))},e.base64StringToArrayBuffer=function(e){if(l){var n=t.from(e,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}for(var r=atob(e),o=new Uint8Array(r.length),i=0;i<r.length;++i)o.set([r.charCodeAt(i)],i);return o.buffer},e.concatenateArrayBuffers=function(t){var e=0;t.forEach((function(t){e+=t.byteLength}));var n=new Uint8Array(e),r=0;return t.forEach((function(t){n.set(new Uint8Array(t),r),r+=t.byteLength})),n.buffer},e.basename=function(t){for(t=t.trim();t.endsWith("/");)t=t.slice(0,t.length-1);var e=t.split("/");return e[e.length-1]},e.getModelArtifactsInfoForJSON=function(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==t.modelTopology?0:u(JSON.stringify(t.modelTopology)),weightSpecsBytes:null==t.weightSpecs?0:u(JSON.stringify(t.weightSpecs)),weightDataBytes:null==t.weightData?0:t.weightData.byteLength}}}).call(this,n(89).Buffer)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.saveRouters=[],this.loadRouters=[]}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerSaveRouter=function(e){t.getInstance().saveRouters.push(e)},t.registerLoadRouter=function(e){t.getInstance().loadRouters.push(e)},t.getSaveHandlers=function(e){return t.getHandlers(e,"save")},t.getLoadHandlers=function(e,n){return t.getHandlers(e,"load",n)},t.getHandlers=function(e,n,r){var o=[];return("load"===n?t.getInstance().loadRouters:t.getInstance().saveRouters).forEach((function(t){var n=t(e,r);null!==n&&o.push(n)})),o},t}();e.IORouterRegistry=r,e.registerSaveRouter=function(t){return r.registerSaveRouter(t)},e.registerLoadRouter=function(t){return r.registerLoadRouter(t)},e.getSaveHandlers=function(t){return r.getSaveHandlers(t)},e.getLoadHandlers=function(t,e){return r.getLoadHandlers(t,e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r,o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const i=n(3),s=n(27),a=n(8),c=n(61),l=n(62),u=n(63);var h;!function(t){t[t.PORTRAIT=0]="PORTRAIT",t[t.LANDSCAPE=1]="LANDSCAPE"}(h||(h={}));const p=t=>t.width>t.height?h.LANDSCAPE:h.PORTRAIT;let d=r=class extends s.WebcamElement{constructor(){super(...arguments),this.firstUpdate=!0,this.tapMediaStream=(t,e,n,r)=>{if(s.defaultTapMediaStream(t,e,n,r),"function"==typeof r.getCapabilities){const t=r.getCapabilities(),n={width:e.width,height:e.height};if(p(n)!==p({width:t.width.max,height:t.height.max})){const t=e.width;e.width=e.height,e.height=t,r.applyConstraints(e)}}},this.edit=!1,this.cropLeft=r.defaultCrop.left,this.cropTop=r.defaultCrop.top,this.cropWidth=r.defaultCrop.width,this.cropHeight=r.defaultCrop.height,this.minCropWidth=64,this.minCropHeight=64,this.aspect=1,this.paused=!1,this.__isScalingCrop=!1}update(t){if(t.has("edit")&&this.video&&this.sourceCtx&&!this.firstUpdate){const t=this.shadowRoot.querySelector("#container"),{videoWidth:e,videoHeight:n}=this.video;this.edit?(this.scaledVideoWidth=this.width,this.scaledVideoHeight=n/e*this.width,t.style.height=`${this.scaledVideoHeight}px`,this.dispatchEvent(new CustomEvent("beginCrop"))):(this.scaledVideoWidth=this.width,this.scaledVideoHeight=this.height,t.style.height=`${this.scaledVideoHeight}px`,this.dispatchEvent(new CustomEvent("endCrop")))}return super.update(t)}resetWebcam(){const{left:t,top:e,width:n,height:o}=r.defaultCrop;this.firstUpdate=!0,this.cropTop=t,this.cropLeft=e,this.cropWidth=n,this.cropHeight=o}__handleCropPanStart(t){if(this.__isScalingCrop)return;l.isTouchEvent(t)&&t.preventDefault();const e=[this.cropLeft,this.cropTop],n=l.mousePositionFromEvent(t,this),r=[NaN,NaN],o=[NaN,NaN],i=[this.cropLeft,this.cropTop],s=t=>{l.mousePositionFromEvent(t,this,null,r),c.add(e,c.sub(r,n,o),i);const{videoWidth:s,videoHeight:a}=this.video;this.cropTop+this.cropHeight<=this.scaledVideoHeight&&(this.cropLeft=u.clamp(i[0],0,this.scaledVideoWidth-this.cropWidth),this.cropTop=u.clamp(i[1],0,this.scaledVideoHeight-this.cropHeight))},a=()=>{this.__isScalingCrop=!1,this.removeEventListener("mousemove",s),this.removeEventListener("touchmove",s),document.removeEventListener("mouseup",a),document.removeEventListener("touchend",a)};this.addEventListener("mousemove",s),this.addEventListener("touchmove",s),document.addEventListener("mouseup",a),document.addEventListener("touchend",a)}__handleCropResizeStart(t){this.__isScalingCrop=!0,l.isTouchEvent(t)&&t.preventDefault();const e=t.target.id,{videoWidth:n,videoHeight:r}=this.video,o=this.cropWidth,i=[this.cropLeft,this.cropTop];let s;switch(e){case"crop-br-grabber":s=i;break;case"crop-tr-grabber":s=c.add(i,[0,this.cropHeight]);break;case"crop-bl-grabber":s=c.add(i,[this.cropWidth,0]);break;case"crop-tl-grabber":s=c.add(i,[this.cropWidth,this.cropHeight]);break;default:s=c.add(i,c.scale([o,o],.5))}const a=l.mousePositionFromEvent(t,this),u=c.distance(s,a),h=t=>{const i=l.mousePositionFromEvent(t,this),a=c.distance(s,i),h=Math.max(o+(a-u)/Math.sqrt(2),this.minCropWidth),p=this.cropLeft+this.cropWidth,d=this.cropTop+this.cropHeight,f=d-h>=0,y=p-h>=0,m=this.cropLeft+h<=this.width,g=this.cropTop+h<=r/n*this.height;switch(e){case"crop-br-grabber":m&&g&&(this.cropWidth=this.cropHeight=h);break;case"crop-tr-grabber":m&&f&&(this.cropWidth=this.cropHeight=h,this.cropTop=d-h);break;case"crop-bl-grabber":g&&y&&(this.cropWidth=this.cropHeight=h,this.cropLeft=p-h);break;case"crop-tl-grabber":y&&f&&(this.cropWidth=this.cropHeight=h,this.cropLeft=p-h,this.cropTop=d-h)}},p=()=>{this.__isScalingCrop=!1,this.removeEventListener("mousemove",h),this.removeEventListener("touchmove",h),document.removeEventListener("mouseup",p),document.removeEventListener("touchend",p)};this.addEventListener("mousemove",h),this.addEventListener("touchmove",h),document.addEventListener("mouseup",p),document.addEventListener("touchend",p)}__toggleCrop(){if(!this.video||!this.sourceCtx||this.firstUpdate)return;Array.from(this.shadowRoot.querySelectorAll(".webcam-button")).forEach(t=>t.blur()),this.edit=!this.edit}render(){const t=this.width,e=this.height;return i.html`
            <style>
                :host {
                    display: block;
                    overflow: hidden;
                    width: ${t}px;
                    height: ${e}px;
                    margin: 0 auto;
                    --container-background: #E8F0FE;
                }

                #container {
                    position: relative;
                    overflow: hidden;
                    border-radius: 5px;
                    max-width: 100%;
                    max-height: 100%;
                }

                #canvas-target, #source-target {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 0;
                    max-width: 100%;
                    max-height: 100%;
                }

                :host([paused]) #canvas-target {
                    filter: grayscale(100%);
                }

                .webcam-button {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    height: 34px;
                    padding: 5px 8px;
                    background: none;
                    border: none;
                    border-radius: 5px;
                    z-index: 2;
                    cursor: pointer;
                }

                .webcam-button svg {
                    filter: drop-shadow(0px 1px 2px rgba(60, 64, 67, 0.3));
                }

                .button-text {
                    display: none;
                    color: #fff;
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                }

                .webcam-button:hover,
                .webcam-button:focus {
                    background: rgba(0, 0, 0, 0.7);
                }

                .webcam-button:hover .button-text,
                .webcam-button:focus .button-text {
                    display: block;
                }

                #crop-button {
                    top: 5px;
                    left: 5px;
                }

                #flip-button {
                    top: 5px;
                    right: 5px;
                    flex-direction: row-reverse;
                }

                .webcam-button svg {
                    z-index: 2;
                }

                #crop-icon {
                    margin-right: 5px;
                }

                #flip-icon {
                    margin-left: 5px;
                }

                /* SVG */
                #crop-rect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    cursor: pointer;
                }

                #crop-rect-pan {
                    fill: rgba(255,255,255, 0);
                    stroke: white;
                    stroke-width: 2;
                }

                .crop-handle {
                    fill: white;
                }

                .crop-handle-grabber {
                    stroke: transparent;
                    fill: transparent;
                }

                :host([edit]) {
                    background-color: var(--container-background, white);
                }

            </style>

            <div id="container" style="width: ${t}px; height: ${e}px;">
                <button id="crop-button" class="webcam-button" @click=${this.__toggleCrop}>
                    ${i.svg`
                        <svg
                            id="crop-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                fill="white"
                                d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/>
                        </svg>`}
                    <span class="button-text">Crop</span>
                </button>
                <button id="flip-button" class="webcam-button" @click=${this.flipWebcam}>
                    ${i.svg`
                        <svg
                            id="flip-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1114 24H8.88916V0H11.1114V24ZM0 19.6363V4.36358C0 3.16358 1 2.18176 2.22222 2.18176H6.66667V4.36358H2.22222V19.6363H6.66667V21.8181H2.22222C1 21.8181 0 20.8363 0 19.6363ZM17.7773 8.72711H19.9996V6.54529H17.7773V8.72711ZM13.333 21.8182H15.5552V19.6364H13.333V21.8182ZM17.7773 2.18176V4.36358H19.9996C19.9996 3.16358 18.9996 2.18176 17.7773 2.18176ZM17.7773 17.4544H19.9996V15.2726H17.7773V17.4544ZM15.5552 4.36358H13.333V2.18176H15.5552V4.36358ZM17.7773 13.0909H19.9996V10.9091H17.7773V13.0909ZM19.9996 19.6364C19.9996 20.8364 18.9996 21.8182 17.7773 21.8182V19.6364H19.9996Z" fill="white"/>
                        </svg>`}
                    <span class="button-text">Flip Camera</span>
                </button>
                ${i.svg`<svg
                        id="crop-rect"
                        xmlns="http://www.w3.org/2000/svg"
                        width=${t}
                        height=${e}
                        .style=${this.edit?"display: block":"display: none"}
                        viewBox="0 0 ${t} ${e}">
                        <rect
                            id="crop-rect-pan"
                            x=${this.cropLeft}
                            y=${this.cropTop}
                            width=${this.cropWidth}
                            height="${this.cropHeight}"/>
                        <rect
                            fill="rgba(0,0,0,0)"
                            @mousedown=${this.__handleCropPanStart}
                            @touchstart=${{handleEvent:this.__handleCropPanStart,passive:!1}}
                            x=${this.cropLeft+16}
                            y=${this.cropTop}
                            width=${this.cropWidth-32}
                            height="${this.cropHeight}"/>
                        <rect
                            class="crop-handle"
                            id="crop-br"
                            x=${this.cropLeft+this.cropWidth-16}
                            y=${this.cropTop+this.cropHeight-16}
                            width="${16}"
                            height="${16}"/>
                        <rect
                            class="crop-handle-grabber"
                            id="crop-br-grabber"
                            @mousedown=${this.__handleCropResizeStart}
                            @touchstart=${{handleEvent:this.__handleCropResizeStart,passive:!1}}
                            x=${this.cropLeft+this.cropWidth-31}
                            y=${this.cropTop+this.cropHeight-31}
                            width="${46}"
                            height="${46}"/>
                        <rect
                            class="crop-handle"
                            id="crop-tl"
                            x=${this.cropLeft}
                            y=${this.cropTop}
                            width="${16}"
                            height="${16}"/>
                        <rect
                            class="crop-handle-grabber"
                            id="crop-tl-grabber"
                            @mousedown=${this.__handleCropResizeStart}
                            @touchstart=${{handleEvent:this.__handleCropResizeStart,passive:!1}}
                            x=${this.cropLeft-15}
                            y=${this.cropTop-15}
                            width="${46}"
                            height="${46}"/>
                        <rect
                            class="crop-handle"
                            id="crop-tr"
                            x=${this.cropLeft+this.cropWidth-16}
                            y=${this.cropTop}
                            width="${16}"
                            height="${16}"/>
                        <rect
                            class="crop-handle-grabber"
                            id="crop-tr-grabber"
                            @mousedown=${this.__handleCropResizeStart}
                            @touchstart=${{handleEvent:this.__handleCropResizeStart,passive:!1}}
                            x=${this.cropLeft+this.cropWidth-31}
                            y=${this.cropTop-15}
                            width="${46}"
                            height="${46}"/>
                        <rect
                            class="crop-handle"
                            id="crop-bl"
                            x=${this.cropLeft}
                            y=${this.cropTop+this.cropHeight-16}
                            width="${16}"
                            height="${16}"/>
                        <rect
                            class="crop-handle-grabber"
                            id="crop-bl-grabber"
                            @mousedown=${this.__handleCropResizeStart}
                            @touchstart=${{handleEvent:this.__handleCropResizeStart,passive:!1}}
                            x=${this.cropLeft-15}
                            y=${this.cropTop+this.cropHeight-31}
                            width="${46}"
                            height="${46}"/>
                    </svg>`}
                <canvas
                    id="source-target"
                    width=${t}
                    height=${e}></canvas>
                <canvas
                    id="canvas-target"
                    width=${t}
                    height=${e}></canvas>
            </div>
        `}_renderCameraToSourceCanvas(){if(!this.video||!this.sourceCtx)return;const{videoWidth:t,videoHeight:e}=this.video;if(0===t||0===e)return;const n=t/this.width;let r;this.firstUpdate&&(this.cropWidth=this.cropHeight=e/t*this.height,this.cropLeft=(this.width-this.cropWidth)/2,this.firstUpdate=!1),r=this.isFlipped()?t-this.cropLeft*n-this.cropWidth*n:this.cropLeft*n;const o=this.edit?0:r,i=this.edit?0:this.cropTop*n,s=this.edit?t:this.cropWidth*n,a=this.edit?e:this.cropHeight*n,c=this.width,l=this.edit?this.height*(e/t):this.height;return super._renderCameraToSourceCanvas(o,i,s,a,0,0,c,l)}};d.defaultCrop={left:0,top:0,width:265,height:265},o([i.property({type:Boolean,reflect:!0})],d.prototype,"edit",void 0),o([i.property({type:Number,reflect:!0})],d.prototype,"cropLeft",void 0),o([i.property({type:Number})],d.prototype,"cropTop",void 0),o([i.property({type:Number})],d.prototype,"cropWidth",void 0),o([i.property({type:Number})],d.prototype,"cropHeight",void 0),o([i.property({type:Number})],d.prototype,"minCropWidth",void 0),o([i.property({type:Number})],d.prototype,"minCropHeight",void 0),o([i.property({type:Number})],d.prototype,"scaledVideoWidth",void 0),o([i.property({type:Number})],d.prototype,"scaledVideoHeight",void 0),o([i.property({type:Number})],d.prototype,"aspect",void 0),o([i.property({type:Boolean,reflect:!0})],d.prototype,"paused",void 0),o([a.default],d.prototype,"__handleCropPanStart",null),o([a.default],d.prototype,"__handleCropResizeStart",null),d=r=o([i.customElement("tm-croppable-webcam")],d),e.CroppableWebcamElement=d},function(t,e,n){"use strict";(function(t,r){var o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var s,a=n(9),c=n(94),l=n(95),u=n(96),h=n(30),p=n(98),d=n(2),f=n(2),y=function(){function t(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return t.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},t}(),m=function(){function t(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new y}return t.prototype.ready=function(){return o(this,void 0,void 0,(function(){var t,e,n;return i(this,(function(r){switch(r.label){case 0:if(null!=this.pendingBackendInit)return[2,this.pendingBackendInit.then((function(){}))];if(null!=this.backendInstance)return[2];t=this.getSortedBackends(),e=0,r.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return r.sent()?[4,this.setBackend(n)]:[3,4];case 3:return r.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}}))}))},Object.defineProperty(t.prototype,"backend",{get:function(){if(null!=this.pendingBackendInit)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() before calling other methods");if(null==this.backendInstance){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),t.prototype.backendNames=function(){return Object.keys(this.registryFactory)},t.prototype.findBackend=function(t){if(!(t in this.registry)){if(!(t in this.registryFactory))return null;if(this.initializeBackend(t).asyncInit)return null}return this.registry[t]},t.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},t.prototype.registerBackend=function(t,e,n){return void 0===n&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},t.prototype.setBackend=function(t){return o(this,void 0,void 0,(function(){var e,n,r;return i(this,(function(o){switch(o.label){case 0:if(null==this.registryFactory[t])throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,null!=this.registry[t]?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return r=o.sent(),[3,3];case 2:r=n,o.label=3;case 3:if(!r)return[2,!1];o.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new l.Profiler(this.backendInstance),[2,!0]}}))}))},t.prototype.setupRegisteredKernels=function(){var t=this;c.getKernelsForBackend(this.backendName).forEach((function(e){null!=e.setupFunc&&e.setupFunc(t.backendInstance)}))},t.prototype.disposeRegisteredKernels=function(t){var e=this;c.getKernelsForBackend(t).forEach((function(n){null!=n.disposeFunc&&n.disposeFunc(e.registry[t])}))},t.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(null==n)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var r=n.factory();if(Promise.resolve(r)===r){var o=++this.pendingBackendInitId,i=r.then((function(n){return!(o<e.pendingBackendInitId)&&(e.registry[t]=n,e.pendingBackendInit=null,!0)})).catch((function(n){return!(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(n.stack||n.message),!1)}));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=r,{success:!0,asyncInit:!1}}catch(e){return console.warn("Initialization of backend "+t+" failed"),console.warn(e.stack||e.message),{success:!1,asyncInit:!1}}},t.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},t.prototype.getSortedBackends=function(){var t=this;if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority}))},t.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],r=this.initializeBackend(n),o=r.success,i=r.asyncInit;if(i||o)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},t.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),r=n.backend,o=this.readSync(e);r.disposeData(e),n.backend=t,t.move(e,o,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},t.prototype.tidy=function(t,e){var n,r=this,o=null;if(null==e){if("function"!=typeof t)throw new Error("Please provide a function to tidy()");e=t}else{if("string"!=typeof t&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof e)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}return this.scopedRun((function(){return r.startScope(o)}),(function(){return r.endScope(n)}),(function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n}))},t.prototype.scopedRun=function(t,e,n){t();try{var r=n();return e(),r}catch(t){throw e(),t}},t.prototype.nextTensorId=function(){return t.nextTensorId++},t.prototype.nextVariableId=function(){return t.nextVariableId++},t.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],(function(t){return{x:function(){return t.toFloat()}}}),[]),e},t.prototype.runKernel=function(t,e,n,r,o){return this.runKernelFunc(null,e,null,t,n,r,o)},t.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},t.prototype.checkKernelForMemLeak=function(t,e,n){var r=this.backend.numDataIds(),o=0;n.forEach((function(t){o+="complex64"===t.dtype?3:1}));var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=r-e-o-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},t.prototype.runKernelFunc=function(t,e,n,r,o,i,s){var a,l=this;void 0===i&&(i=[]),void 0===s&&(s=[]);var u,h=[],p=this.isTapeOn(),d=null!=this.state.activeScope?this.state.activeScope.name:"",f=function(t){p&&(h=t.map((function(t){return l.keep(l.clone(t))})))},y=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var g,v=c.getKernel(r,this.backendName);return u=null!=v?function(){var t=l.backend.numDataIds();g=v.kernelFunc({inputs:e,attrs:o,backend:l.backend});var n=Array.isArray(g)?g:[g];l.shouldCheckForMemLeaks()&&l.checkKernelForMemLeak(d,t,n);var r=n.map((function(t){var e=t.dataId,n=t.shape,r=t.dtype;return l.makeTensorFromDataId(e,n,r)})),a=r.filter((function(t,e){return s[e]}));return f(i.slice().concat(a)),r}:function(){var e=l.backend.numDataIds();g=l.tidy((function(){return t(l.backend,f)}));var n=Array.isArray(g)?g:[g];return l.shouldCheckForMemLeaks()&&l.checkKernelForMemLeak(d,e,n),n},this.scopedRun((function(){return l.state.kernelDepth++}),(function(){return l.state.kernelDepth--}),(function(){a=l.ENV.getBool("DEBUG")?l.profiler.profileKernel(d,e,(function(){return u()})):u()})),p&&this.addTapeNode(d,e,a,n,h),this.state.profiling&&this.state.activeProfile.kernels.push({name:d,bytesAdded:this.state.numBytes-y,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map((function(t){return e[t].shape})),outputShapes:a.map((function(t){return t.shape}))}),Array.isArray(g)?a:a[0]},t.prototype.makeTensor=function(t,e,n,r){if(null==t)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;var o=t;"string"===n&&d.isString(t[0])&&(o=t.map((function(t){return d.encodeString(t)})));var i=r.write(o,e,n),s=new h.Tensor(e,n,i,this.nextTensorId());if(this.incRef(s,r),"string"===n){var a=this.state.tensorInfo.get(i),c=f.bytesFromStringArray(o);this.state.numBytes+=c-a.bytes,a.bytes=c}return s},t.prototype.makeTensorFromDataId=function(t,e,n,r){n=n||"float32";var o=new h.Tensor(e,n,t,this.nextTensorId());return this.incRef(o,r),o},t.prototype.makeVariable=function(t,e,n,r){void 0===e&&(e=!0),n=n||this.nextVariableId().toString(),null!=r&&r!==t.dtype&&(t=t.asType(r));var o=new h.Variable(t,e,n,this.nextTensorId());if(null!=this.state.registeredVariables[o.name])throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},t.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,"string"===t.dtype&&this.state.numStringTensors++,0===n){this.state.numDataBuffers++;var r=0;"complex64"!==t.dtype&&"string"!==t.dtype&&(r=t.size*d.bytesPerElement(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:r,refCount:0}),this.state.numBytes+=r}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof h.Variable||this.track(t)},t.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,"string"===t.dtype&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?("complex64"!==t.dtype&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},t.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},t.prototype.disposeVariable=function(t){this.disposeTensor(t),null!=this.state.registeredVariables[t.name]&&delete this.state.registeredVariables[t.name]},t.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,null==t.reasons&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},t.prototype.profile=function(t){return o(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(t){return t.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]}))}))},t.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&0===this.state.kernelDepth},t.prototype.addTapeNode=function(t,e,n,r,o){var i=this,s={id:this.state.nextTapeNodeId++,name:t,inputs:e,outputs:n,saved:o};null!=r&&(s.gradient=function(t){return t=t.map((function(t,e){if(null==t){var r=n[e],o=d.makeZerosTypedArray(r.size,r.dtype);return i.makeTensor(o,r.shape,r.dtype)}return t})),r(t.length>1?t:t[0],o)}),this.state.activeTape.push(s)},t.prototype.keep=function(t){return t.kept=!0,t},t.prototype.startTape=function(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++},t.prototype.endTape=function(){this.state.gradientDepth--},t.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},t.prototype.endScope=function(t){for(var e=this,n=p.getTensorsInContainer(t),r=new Set(n.map((function(t){return t.id}))),o=0;o<this.state.activeScope.track.length;o++){var i=this.state.activeScope.track[o];i.kept||r.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach((function(t){t.kept||t.scopeId!==s.id||e.track(t)}))},t.prototype.gradients=function(t,n,r,o){var i=this;if(void 0===o&&(o=!1),d.assert(n.length>0,(function(){return"gradients() received an empty list of xs."})),null!=r&&"float32"!==r.dtype)throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var s=this.scopedRun((function(){return i.startTape()}),(function(){return i.endTape()}),(function(){return i.tidy("forward",t)}));d.assert(s instanceof h.Tensor,(function(){return"The result y returned by f() must be a tensor."}));var a=u.getFilteredNodesXToY(this.state.activeTape,n,s);if(!o&&0===a.length&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(function(){var t,o,c={};c[s.id]=null==r?(t=s.shape,o=f.makeOnesTypedArray(f.sizeFromShape(t),"float32"),e.ENGINE.makeTensor(o,t,"float32")):r,u.backpropagateGradients(c,a,(function(t){return i.tidy(t)}));var l=n.map((function(t){return c[t.id]}));return 0===i.state.gradientDepth&&(i.state.activeTape.forEach((function(t){for(var e in t.saved)t.saved[e].dispose()})),i.state.activeTape=null),{value:s,grads:l}}))},t.prototype.customGrad=function(t){var e=this;return d.assert(d.isFunction(t),(function(){return"The f passed in customGrad(f) must be a function."})),function(){for(var n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];d.assert(r.every((function(t){return t instanceof h.Tensor})),(function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"}));var i={};return r.forEach((function(t,e){i[e]=t})),e.runKernelFunc((function(e,o){return n=t.apply(void 0,r.concat([o])),d.assert(n.value instanceof h.Tensor,(function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),d.assert(d.isFunction(n.gradFunc),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),n.value}),i,(function(t,e){var o=n.gradFunc(t,e),i=Array.isArray(o)?o:[o];d.assert(i.length===r.length,(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),d.assert(i.every((function(t){return t instanceof h.Tensor})),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var s={};return i.forEach((function(t,e){s[e]=function(){return t}})),s}))}},t.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},t.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},t.prototype.fromPixels=function(t,e){return this.backend.fromPixels(t,e)},t.prototype.time=function(t){return o(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){switch(r.label){case 0:return e=f.now(),[4,this.backend.time(t)];case 1:return(n=r.sent()).wallMs=f.now()-e,[2,n]}}))}))},t.prototype.track=function(t){return null!=this.state.activeScope&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(t.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),t.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new y,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},t.nextTensorId=0,t.nextVariableId=0,t}();e.Engine=m,e.ENGINE=function(){var e=function(){if(null==s){var e=void 0;if("undefined"!=typeof window)e=window;else if(void 0!==t)e=t;else if(void 0!==r)e=r;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}s=e}return s}();if(null==e._tfengine){var n=new a.Environment(e);e._tfengine=new m(n)}return a.setEnvironmentGlobal(e._tfengine.ENV),h.setTensorTracker((function(){return e._tfengine})),e._tfengine}()}).call(this,n(21),n(25))},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=n(58),s=n(59),a={requestAnimationFrame:s,cancelAnimationFrame:s.cancel};function c(){return!0}var l=function(t){function e(e){void 0===e&&(e={});var n=t.call(this)||this;return n.fixedDelta=!1,n.frameCount=0,n.deltaTime=0,n.elapsedTime=0,n.__completed=!1,n.__delay=0,n.__fps=1/0,n.__isReadyForUpdate=c,n.__lastTime=0,n.__requestAnimationFrameObject=a,n.__running=!1,"number"==typeof e.delay&&(n.__delay=e.delay),void 0!==e.fixedDelta&&(n.fixedDelta=!!e.fixedDelta),n.setFPS(e.fps||1/0),n.setRequestAnimationFrameObject(e.requestAnimationFrameObject||a),n}return o(e,t),e.prototype.complete=function(){return this.stop(),this.__completed=!0,this.emit("complete",this.frameCount,this.deltaTime),this},e.prototype.dispose=function(){return this.stop(),this.removeAllListeners(),this},e.prototype.getDeltaTime=function(){return this.deltaTime},e.prototype.getElapsedTime=function(){return this.elapsedTime},e.prototype.getFPS=function(){return this.deltaTime>0?1e3/this.deltaTime:0},e.prototype.getFPSLimit=function(){return this.__fps},e.prototype.getFrameCount=function(){return this.frameCount},e.prototype.getRequestAnimationFrameObject=function(){return this.__requestAnimationFrameObject},e.prototype.isCompleted=function(){return this.__completed},e.prototype.isRunning=function(){return this.__running},e.prototype.onUpdate=function(t,e){return this.on("update",t,e)},e.prototype.reset=function(){return this.stop(),this.__completed=!1,this.__lastTime=0,this.deltaTime=0,this.elapsedTime=0,this.frameCount=0,this.emit("reset",0,0,this.frameCount),this},e.prototype.setFPS=function(t){return this.__fps=t,this.__isReadyForUpdate=function(t){var e=1e3/t,n=Date.now();if(t<=0||t===1/0)return c;var r=Math.ceil(1e3/60)/2;return function(){var t=Date.now();return!(t-n<e-r)&&(n=t,!0)}}(t),this},e.prototype.setRequestAnimationFrameObject=function(t){if("function"!=typeof t.requestAnimationFrame||"function"!=typeof t.cancelAnimationFrame)throw new Error("Invalid object provide to `setRequestAnimationFrameObject`");return this.__requestAnimationFrameObject=t,this},e.prototype.start=function(){var t=this,n=function(){var n;if(t.__running)return t;e.instancesRunning+=1,t.__running=!0,t.__lastTime=Date.now(),t.deltaTime=0,t.emit("start",t.deltaTime,0,t.frameCount);var r=t.__requestAnimationFrameObject,o=function(){var e=t.getRequestAnimationFrameObject();if(r!==e)return r=e,void e.requestAnimationFrame(o);t.__isReadyForUpdate()&&t.update(),t.__running?n=e.requestAnimationFrame(o):e.cancelAnimationFrame(n)};return t.getRequestAnimationFrameObject().requestAnimationFrame(o),t};return this.__delay?setTimeout(n,this.__delay):n(),this},e.prototype.stop=function(){return this.__running&&(this.__running=!1,e.instancesRunning-=1,this.emit("stop",this.deltaTime,this.elapsedTime,this.frameCount)),this},e.prototype.update=function(){this.frameCount++;var t=Date.now();return this.__lastTime=this.__lastTime||t,this.deltaTime=this.fixedDelta||e.globalFixedDelta?1e3/Math.min(60,this.__fps):t-this.__lastTime,this.elapsedTime+=this.deltaTime,this.__lastTime=t,this.emit("update",this.deltaTime,this.elapsedTime,this.frameCount),this},e.instancesRunning=0,e.globalFixedDelta=!1,e}(i),u=function(t){return t&&"function"==typeof t};function h(t,e){1===arguments.length&&u(t)&&(e=t,t={});var n=new l(t);return e&&n.on("update",e),n}function p(t,e){return"function"==typeof t.bind?t.bind(e):function(){return t.apply(e,arguments)}}h.Animitter=l,h.bound=function(t,e){for(var n,r=h(t,e),o=function(t){for(var e=Object.keys(t),n=[],r=0;r<e.length;r++)"function"==typeof t[e[r]]&&n.push(e[r]);return n}(l.prototype),i=!!Function.prototype.bind,s=0;s<o.length;s++)r[n=o[s]]=i?r[n].bind(r):p(r[n],r);return r},h.EventEmitter=i,Object.defineProperty(h,"running",{get:function(){return l.instancesRunning}}),Object.defineProperty(h,"globalFixedDelta",{get:function(){return l.globalFixedDelta},set:function(t){l.globalFixedDelta=t}}),Date.now=Date.now||function(){return(new Date).getTime()},t.exports=h},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var c,l=[],u=!1,h=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&d())}function d(){if(!u){var t=a(p);u=!0;for(var e=l.length;e;){for(c=l,l=[];++h<e;)c&&c[h].run();h=-1,e=l.length}c=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new f(t,e)),1!==l.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";var r,o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const s=n(3),a=n(8),c=n(22),l=n(64);n(16),n(28),n(71);const u=n(72);let h=r=class extends l.AbstractSampleInputElement{constructor(){super(),this.buttonLabel="webcam",this.buttonSVG="M18 6V10.48L22 6.5V17.5L18 13.52V14.52V18C18 19.1 17.1 20 16 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H16C17.1 4 18 4.9 18 6ZM16 14.52V9.69V6H4V18H16V14.52Z",this.webcamThrottle=r.lastWebcamThrottle,this.holdToRecord=r.lastHoldToRecord,this.recordDelay=r.lastRecordDelay,this.recordDuration=r.lastRecordDuration,this.autoPlay=!1,this.autoRecord=!1,this.settings=!1,this.showRecord=!1,this.___isAddingFrames=!1,this.maxSamples=16}set tapAsyncPreview(t){this._tapAsyncPreview=t,this.__updateTapFrameAsync()}get type(){return"webcam"}set _shouldAddFrame(t){t!==this._shouldAddFrame&&(this.___isAddingFrames=t,this[t?"_dispatchRecordStart":"_dispatchRecordStop"]())}get _shouldAddFrame(){return this.___isAddingFrames}get isPlaying(){return this.__webcamElement&&this.__webcamElement.isPlaying}get isRecording(){return this.autoRecord||this._shouldAddFrame}get webcamElement(){return this.__webcamElement}beginCapture(){return this._shouldAddFrame=!0,this}endCapture(){return this._shouldAddFrame=!1,this}stop(){this.__webcamElement.stop(),this.__webcamElement.paused=!0}play(t={}){void 0===t.deviceId&&r.lastDeviceId&&(t.deviceId=r.lastDeviceId),this.__webcamElement.play(t).then(()=>{if(this.__webcamElement.currentMediaStreamTrack){const t=this.__webcamElement.currentMediaStreamTrack.getSettings();t.deviceId&&(r.lastDeviceId=t.deviceId)}}),this.__webcamElement.paused=!1}update(t){if(!this.__webcamElement)return super.update(t);if((t.has("open")||t.has("disabled"))&&(this.open&&(this.autoPlay||this.autoRecord)&&!this.disabled?this.play():this.stop()),!1===t.get("settings")||!1===t.get("open")){const t=this.shadowRoot.querySelector("#fps");this.webcamThrottle=r.lastWebcamThrottle,t.value=r.lastWebcamThrottle.toString(),this.shadowRoot.querySelector("#hold-to-record").checked=r.lastHoldToRecord;const e=this.shadowRoot.querySelector("#delay");this.recordDelay=r.lastRecordDelay,e.value=(r.lastRecordDelay/1e3).toString();const n=this.shadowRoot.querySelector("#duration");this.recordDuration=r.lastRecordDuration,n.value=(r.lastRecordDuration/1e3).toString()}return t.has("settings")&&this.dispatchEvent(new CustomEvent(this.settings?"settings":"settingsexit",{bubbles:!0})),super.update(t)}__handleWebcamFrame(t){return i(this,void 0,void 0,(function*(){this.isRecording&&this.addSample(yield this.mapAsyncSample(this,this.__webcamElement.sourceCanvas))}))}addExistingSample(t){return i(this,void 0,void 0,(function*(){this.addSample(yield this.mapAsyncSample(this,t))}))}__updateTapFrameAsync(){this.__webcamElement&&(null!=this._tapAsyncPreview?this.__webcamElement.tapFrameAsync=(t,e,n)=>i(this,void 0,void 0,(function*(){return yield this._tapAsyncPreview(this,e,n)})):this.__webcamElement.tapFrameAsync=null)}firstUpdated(t){this.__webcamElement=this.shadowRoot.querySelector("#webcam"),this.__updateTapFrameAsync(),super.firstUpdated(t)}__saveSettings(){r.lastWebcamThrottle=this.webcamThrottle,r.lastHoldToRecord=this.holdToRecord,r.lastRecordDelay=this.recordDelay,r.lastRecordDuration=this.recordDuration,u.default.setWebcamSetting({webcamThrottle:r.lastWebcamThrottle,holdToRecord:r.lastHoldToRecord,recordDelay:r.lastRecordDelay,recordDuration:r.lastRecordDuration})}__handleHoldToRecordStart(t){"touchstart"===t.type&&t.preventDefault(),this._shouldAddFrame=!0;const e=()=>{this._shouldAddFrame=!1,document.removeEventListener("mouseup",e),document.removeEventListener("touchend",e)};document.addEventListener("mouseup",e),document.addEventListener("touchend",e)}__handleWebcamStatus(t){const e=this.shadowRoot.querySelector("#webcam-container"),n=this.shadowRoot.querySelector("#webcam-error");t?(n.style.display="none",e.style.display="block"):(e.style.display="none",n.style.display="flex"),this.settings=!1}__handleCrop(t){this.shadowRoot.querySelector("#crop-btn").style.display=t&&this.showRecord?"block":"none",this.shadowRoot.querySelector("#show-record").style.visibility=t?"hidden":"visible"}render(){const t=this;return s.html`
            <style>

                :host {
                    display: none;
                    position: relative;
                    top: 0;
                    left: 0;
                    /* height: 352px; */
                    height: 100%;
                    overflow: hidden;
                    color: #185ABC;
                    box-sizing: border-box;
                    /* padding-bottom: 5px; */
                    --focus-color: #4285F4;
                }
                :host([open]) {
                    display: block;
                }

                :host([disabled]) {
                    pointer-events: none;
                    filter: var(--disabled-filter, grayscale(100%));
                }

                input[type="number"] {
                    border: 0;
                    border-bottom: 1px solid #185ABC;
                    color: #185ABC;
                    margin: 8px;
                    padding: 4px;
                    width: 36px;
                }

                #container {
                    /* height: 300px; */
                    height: 100%;
                    /* display: flex; */
                    display: none;
                    align-items: center;
                }

                #webcam {
                    border-radius: 5px;
                    /* background-color: var(--preview-background, white); */ /*#CCD9EF;*/
                    background: none;
                }

                button:not([disabled]) {
                    background-color: #3474E0;
                    border-radius: 5px;
                    color: white;
                    width: 142px;
                    height: 36px;
                    border: 0;
                    outline: 0;
                    padding: 4px;
                    cursor: pointer;
                }

                :host([showRecord]) #show-record {
                    display: flex;
                }


                .show-throttle, #show-record {
                    display: none;
                }

                #show-record, #crop-btn {
                    display: flex;
                    margin-top: 25px;
                    margin-right: 2px;
                }
                #crop-btn {
                    width: 100%;
                }

                #show-record button, #show-record tm-timed-button {
                    flex-grow: 1;
                    cursor: pointer;
                }

                .disabled {
                    opacity: 0.35;
                    pointer-events: none;
                }

                .record-button {
                    width: 232px;
                }

                /* tm-timed-button {
                    display: inline-block;
                    width: 142px;
                    height: 36px;
                    border-radius: 5px;
                } */

                .input-holder{
                    display: inline-block;
                }

                .input-holder input{
                    border: 2px solid transparent;
                    border-radius: 3px;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border-bottom: 2px solid #4285F4;
                    width: 50px;
                    padding: 4px;
                    margin: 0 5px;
                    text-align: center;
                    font-size: inherit;
                    color: inherit;
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                }
                .input-holder input:focus {
                    outline: 0;
                    border: 2px solid var(--focus-color);
                }


                #settings{
                    position: absolute;
                    top: 0;
                    /* height: 355px; */
                    height: 100%;
                    width: 100%;
                    font-size: 14px;
                    display: none;
                }

                #settings .setting-option{
                    margin-bottom: 12px;
                }

                #webcam-error {
                    height: 320px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #webcam-error-text {
                    font-size: 14px;
                    color: #1967D2;
                    text-align: center;
                    width: 240px;
                }

                tm-button{
                    --color: #fff;
                    --background-color: #1967D2;
                    --hover-background-color: #185ABC;
                    --active-background-color: #174EA6;
                    --focus-color: #000;
                    width: 220px;
                    height: 36px;
                }

                input[type="number"] {
                    width: 30px;
                }

                button:not([disabled]).settings-button,
                .settings-button {
                    outline: 0;
                    border: none;
                    margin: 0 0 0 14px;
                    padding: 0;
                    width: auto;
                    background-color: transparent;
                }

                .settings-button svg {
                    padding: 0;
                }

                .settings-button:focus {
                    outline: initial;
                }

                .settings-button:focus svg {
                    outline: 2px #8AB4F8 solid !important;
                }

                .settings__button-container {
                    position: absolute;
                    bottom: 1px;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .settings__button--cancel {
                    width: auto !important;
                    height: auto !important;
                    padding: 0 25px !important;
                    background: none !important;
                    color: #1967D2 !important;
                    font-family: Google Sans, sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    position: relative;
                }

                .settings__button--cancel:focus:after {
                    content: '';
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 2px solid #8AB4F8;
                }

                :host([open]) #container {
                    display: block;
                }

                :host([settings]) #webcam-container {
                    /* using visibility so it remains same height */
                    visibility: hidden;
                }
                :host([settings]) #settings {
                    display: block;
                }

            </style>
            <div id="container">
                <div id="webcam-container">
                    <tm-media-device-select
                        kind="videoinput"
                        ?hideWhenEmpty="true"
                        @change=${function(e){const n=e.target;t.play({deviceId:n.value}),this.shadowRoot.querySelector("#webcam").resetWebcam(),this.dispatchEvent(new CustomEvent("devicechange",{bubbles:!0}))}}>
                    </tm-media-device-select>
                    <tm-croppable-webcam
                        deviceId=${r.lastDeviceId}
                        ?autoplay=${this.open&&(this.autoPlay||this.autoRecord)}
                        @click=${t=>{this.isPlaying||t.target.play()}}
                        id="webcam"
                        deviceWidth="320" deviceHeight="240"
                        width="265" height="265"
                        cropLeft="${c.CroppableWebcamElement.defaultCrop.left}"
                        cropTop="${c.CroppableWebcamElement.defaultCrop.top}"
                        cropWidth="${c.CroppableWebcamElement.defaultCrop.width}"
                        cropHeight="${c.CroppableWebcamElement.defaultCrop.height}"
                        throttle=${this.webcamThrottle}
                        @update=${this.__handleWebcamFrame}
                        @webcamAccept=${()=>this.__handleWebcamStatus(!0)}
                        @webcamReject=${()=>this.__handleWebcamStatus(!1)}
                        @beginCrop=${()=>this.__handleCrop(!0)}
                        @endCrop=${()=>this.__handleCrop(!1)}
                    ></tm-croppable-webcam>
                    <tm-button id="crop-btn" style="display: none"
                        label="Done cropping"
                        @click=${()=>this.shadowRoot.querySelector("#webcam").edit=!1}
                    ></tm-button>
                    <slot name="middle"></slot>
                    <div id="show-record" style=${this.showRecord?"":"display: none;"}>

                        <tm-button
                            label="Hold to Record"
                            style=${this.holdToRecord?"":"display: none;"}
                            @touchstart=${this.__handleHoldToRecordStart}
                            @mousedown=${this.__handleHoldToRecordStart}
                            @keydown=${t=>{32!==t.keyCode&&13!==t.keyCode||(this._shouldAddFrame=!0)}}
                            @keyup=${()=>{this._shouldAddFrame=!1}}>
                        </tm-button>

                        <tm-timed-button id="timed-record"
                            style=${this.holdToRecord?"display: none;":""}
                            delay=${this.recordDelay}
                            duration=${this.recordDuration}
                            @start=${()=>this._shouldAddFrame=!0}
                            @stop=${()=>this._shouldAddFrame=!1}>
                        </tm-timed-button>
                        <button
                            @click=${()=>{this.settings=!0}}
                            class="settings-button"
                            aria-label="Settings">
                            ${s.svg`
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3102 21.03C15.2102 21.71 14.5902 22.25 13.8502 22.25H10.1502C9.41023 22.25 8.79023 21.71 8.70023 20.98L8.43023 19.09C8.16023 18.95 7.90023 18.8 7.64023 18.63L5.84023 19.35C5.14023 19.61 4.37023 19.32 4.03023 18.7L2.20023 15.53C1.85023 14.87 2.00023 14.09 2.56023 13.65L4.09023 12.46C4.08023 12.31 4.07023 12.16 4.07023 12C4.07023 11.85 4.08023 11.69 4.09023 11.54L2.57023 10.35C1.98023 9.9 1.83023 9.09 2.20023 8.47L4.05023 5.28C4.39023 4.66 5.16023 4.38 5.84023 4.65L7.65023 5.38C7.91023 5.21 8.17023 5.06 8.43023 4.92L8.70023 3.01C8.79023 2.31 9.41023 1.76 10.1402 1.76H13.8402C14.5802 1.76 15.2002 2.3 15.2902 3.03L15.5602 4.92C15.8302 5.06 16.0902 5.21 16.3502 5.38L18.1502 4.66C18.8602 4.4 19.6302 4.69 19.9702 5.31L21.8102 8.49C22.1702 9.15 22.0102 9.93 21.4502 10.37L19.9302 11.56C19.9402 11.71 19.9502 11.86 19.9502 12.02C19.9502 12.18 19.9402 12.33 19.9302 12.48L21.4502 13.67C22.0102 14.12 22.1702 14.9 21.8202 15.53L19.9602 18.75C19.6202 19.37 18.8502 19.65 18.1602 19.38L16.3602 18.66C16.1002 18.83 15.8402 18.98 15.5802 19.12L15.3102 21.03ZM10.6202 20.25H13.3802L13.7502 17.7L14.2802 17.48C14.7202 17.3 15.1602 17.04 15.6202 16.7L16.0702 16.36L18.4502 17.32L19.8302 14.92L17.8002 13.34L17.8702 12.78L17.8733 12.7531V12.7531C17.9023 12.5027 17.9302 12.2607 17.9302 12C17.9302 11.73 17.9002 11.47 17.8702 11.22L17.8002 10.66L19.8302 9.08L18.4402 6.68L16.0502 7.64L15.6002 7.29C15.1802 6.97 14.7302 6.71 14.2702 6.52L13.7502 6.3L13.3802 3.75H10.6202L10.2502 6.3L9.72023 6.51C9.28023 6.7 8.84023 6.95 8.38023 7.3L7.93023 7.63L5.55023 6.68L4.16023 9.07L6.19023 10.65L6.12023 11.21C6.09023 11.47 6.06023 11.74 6.06023 12C6.06023 12.26 6.08023 12.53 6.12023 12.78L6.19023 13.34L4.16023 14.92L5.54023 17.32L7.93023 16.36L8.38023 16.71C8.81023 17.04 9.24023 17.29 9.71023 17.48L10.2402 17.7L10.6202 20.25ZM15.5002 12C15.5002 13.933 13.9332 15.5 12.0002 15.5C10.0672 15.5 8.50023 13.933 8.50023 12C8.50023 10.067 10.0672 8.5 12.0002 8.5C13.9332 8.5 15.5002 10.067 15.5002 12Z" fill="#185ABC"/>
                                </svg>`}
                        </button>
                    </div>
                </div>
                <div id="webcam-error" style='display: none;' aria-hidden="true">
                    <span id="webcam-error-text">
                        There was an error opening your webcam. Make sure permissions are enabled or switch to image uploading.
                    </span>
                </div>
                <div id="settings">
                        <div class="setting-option">Settings</div>

                        <div class="setting-option">
                            <label for="fps">FPS:</label>
                            <div class="input-holder">
                                <input id="fps" type="number" min="1" max="60" value=${this.webcamThrottle}
                                    @input=${t=>{const e=t.target;this.webcamThrottle=parseInt(e.value,10)}} min="1"/>
                            </div>
                        </div>

                        <div class="setting-option">
                            <tm-toggle
                                id="hold-to-record"
                                ?checked=${this.holdToRecord} label="Hold-to-record"
                                @change=${()=>this.holdToRecord=!this.holdToRecord}>
                            </tm-toggle>
                        </div>

                        <div id="hold-to-record-settings" class=${this.holdToRecord?"disabled":""}>
                            <div class="setting-option">
                                <label for="delay">Delay:</label>
                                <div class="input-holder">
                                    <input id="delay" type="number" min="0" value=${this.recordDelay/1e3}
                                        @change=${t=>{this.recordDelay=1e3*Number(t.target.value)}} min="0"/>
                                    seconds
                                </div>
                            </div>

                            <div class="setting-option">
                                <label for="duration">Duration:</label>
                                <div class="input-holder">
                                    <input id="duration" type="number" min="0" value=${this.recordDuration/1e3}
                                        @change=${t=>{this.recordDuration=1e3*Number(t.target.value)}} min="0"/>
                                    seconds
                                </div>
                            </div>
                        </div>
                        <div class="settings__button-container">
                            <button
                                class="settings__button--cancel"
                                @click=${()=>{this.settings=!1}}>
                                Cancel
                            </button>
                            <tm-button
                                class="save-settings-btn"
                                id="return"
                                style="width: 150px;"
                                label="Save Settings"
                                @click=${()=>{this.__saveSettings(),this.settings=!1}}>
                            </tm-button>
                        </div>
                </div>
            </div>
        `}};h.middleSlotName="middle",h.lastWebcamThrottle=null!==u.default.getWebcamSetting("webcamThrottle")?Number(u.default.getWebcamSetting("webcamThrottle")):24,h.lastHoldToRecord=null===u.default.getWebcamSetting("holdToRecord")||u.default.getWebcamSetting("holdToRecord"),h.lastRecordDelay=null!==u.default.getWebcamSetting("recordDelay")?Number(u.default.getWebcamSetting("recordDelay")):2e3,h.lastRecordDuration=null!==u.default.getWebcamSetting("recordDuration")?Number(u.default.getWebcamSetting("recordDuration")):6e3,o([s.property({type:String})],h.prototype,"buttonLabel",void 0),o([s.property({type:String})],h.prototype,"buttonSVG",void 0),o([s.property({type:Number})],h.prototype,"webcamThrottle",void 0),o([s.property({type:Boolean})],h.prototype,"holdToRecord",void 0),o([s.property({type:Number})],h.prototype,"recordDelay",void 0),o([s.property({type:Number})],h.prototype,"recordDuration",void 0),o([s.property({type:Boolean,reflect:!0})],h.prototype,"autoPlay",void 0),o([s.property({type:Boolean})],h.prototype,"autoRecord",void 0),o([s.property({type:Boolean,reflect:!0})],h.prototype,"settings",void 0),o([s.property({type:Boolean,reflect:!0})],h.prototype,"showRecord",void 0),o([a.default],h.prototype,"__handleWebcamFrame",null),o([a.default],h.prototype,"__handleHoldToRecordStart",null),h=r=o([s.customElement("tm-webcam-sample-input")],h),e.WebcamSampleInput=h},function(t,e,n){"use strict";var r,o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const s=n(3),a=n(8),c=n(32),l=n(33),u=document.createElement("canvas");function h(){return i(this,void 0,void 0,(function*(){return(yield l.enumerateDevices()).filter(t=>"videoinput"===t.kind)}))}e.getAllWebcamDeviceInfo=h;const p=t=>(t=>t.srcObject&&t.srcObject instanceof MediaStream)(t)?t.srcObject:null;e.stopAllTracks=t=>{t.pause(),p(t)&&p(t).getTracks().forEach(t=>{t.stop()})},e.defaultTapMediaStream=(t,e,n,r)=>{if("function"==typeof r.getCapabilities){"environment"===r.getSettings().facingMode&&t.flipWebcam()}};let d=r=class extends l.AbstractUserMediaElement{constructor(){super(...arguments),this.stats=!1,this.throttle=0,this.deviceWidth=-1,this.deviceHeight=-1,this.tapFrameAsync=null,this.deviceId="none",this.tapMediaStream=e.defaultTapMediaStream,this._isReadyForNextFrame=!0,this.__videoElement=document.createElement("video"),this.__frameCount=0,this._lastMediaTrackConstraints={},this.__skipNextUpdatingConstraints=!1}static getAvailableDeviceInfo(){return h()}get frameRate(){if(!this.video)return 0;const t=p(this.video);if(t){const e=t.getVideoTracks();if(e&&e[0])return e[0].getSettings().frameRate}return 30}get currentMediaStreamTrack(){return this.__curentMediaStreamTrack}flipWebcam(){r.flip=!r.flip}isFlipped(){return r.flip}get hasTap(){return null!=this.tapFrameAsync}get sourceCtx(){if(this.__sourceCtx)return this.__sourceCtx;const t=this.shadowRoot.querySelector("#source-target");return t?(this.__sourceCtx=t.getContext("2d"),this.__sourceCtx):null}get sourceCanvas(){const t=this.sourceCtx;return t?t.canvas:null}get canvas(){if(this._ctx)return this._ctx.canvas;const t=this.shadowRoot.querySelector("#canvas-target");return t?(this._ctx=t.getContext("2d"),this._ctx.canvas):null}get video(){return this.__videoElement}play(t){return t&&(this.__promiseGetWebcam=null),void 0===(t=t||{}).deviceId&&"string"==typeof this.deviceId&&(t.deviceId=this.deviceId),!(t.width>0)&&this.deviceWidth>0&&(t.width=this.deviceWidth),!(t.height>0)&&this.deviceHeight>0&&(t.height=this.deviceHeight),this.__promiseGetWebcam&&this.__promiseHasResized||(this._isInitialized=!1,this.__promiseHasResized=new Promise(t=>{const e=()=>{this.video.videoWidth*this.video.videoHeight<4||(this.video.removeEventListener("timeupdate",e),this._isInitialized=!0,t())};this.video.addEventListener("timeupdate",e)}),this.__promiseGetWebcam=l.getUserMedia({video:t}).catch(t=>{console.log(t),this._isOk=!1,this.dispatchEvent(new CustomEvent("webcamReject",{bubbles:!0}))}).then(t=>{const e=t.getVideoTracks()[0];if(!e)throw new Error("No MediaStreamTrack found");const n=e.getConstraints();this.tapMediaStream(this,n,t,e),this.video.srcObject=t;const{video:r}=this;if(this.__curentMediaStreamTrack=e,this._lastMediaTrackConstraints=n,this.deviceId=n&&"string"==typeof n.deviceId?n.deviceId:"default",r)return r.play().then(()=>(this._isOk=!0,r.videoWidth===this.deviceWidth&&r.videoHeight===this.deviceHeight||(this.deviceWidth=r.videoWidth,this.deviceHeight=r.videoHeight,this.__skipNextUpdatingConstraints=!0),this.dispatchEvent(new CustomEvent("webcamAccept",{bubbles:!0})),r))})),Promise.all([this.__promiseGetWebcam,this.__promiseHasResized]).then(this._handleLoopPlay)}stop(){return this.__promiseGetWebcam?this.__promiseGetWebcam.then(()=>{e.stopAllTracks(this.video),this._loop&&this._loop.stop(),this.__promiseGetWebcam=this.__promiseHasResized=null,this.dispatchEvent(new CustomEvent("stop"))}):(this.dispatchEvent(new CustomEvent("stop")),Promise.resolve())}render(){return s.html`
            <style>
                :host {
                    display: block;
                }

                #source-target {
                    display: none;
                }
            </style>
            <canvas id="source-target" width=${this.deviceWidth} height=${this.deviceHeight}></canvas>
            <canvas id="canvas-target" width=${this.width} height=${this.height}></canvas>
        `}_renderCameraToSourceCanvas(t=0,e=0,n=this.deviceWidth,o=this.deviceHeight,i=0,s=0,a=this.sourceCanvas.width,c=this.sourceCanvas.height){if(!this.video||!this.sourceCtx)return;const l=this.sourceCtx;l.canvas.width=a,l.canvas.height=c,r.flip?(i=-a,l.scale(-1,1),l.drawImage(this.video,t,e,n,o,i,s,a,c)):l.drawImage(this.video,t,e,n,o,i,s,a,c)}update(t){if(t.has("deviceWidth")||t.has("deviceHeight"))if(this.__skipNextUpdatingConstraints)this.__skipNextUpdatingConstraints=!1;else{const t=Object.assign({},this._lastMediaTrackConstraints,{width:-1,height:-1});this.isPlaying&&this.stop().then(()=>this.play(t))}return super.update(t)}copySourceToCanvas(t,e=this.sourceCanvas.width,n=this.sourceCanvas.height){const r=c.getContext2D(t)||document.createElement("canvas").getContext("2d");return r!==this.sourceCtx&&(r.canvas.width=e,r.canvas.height=n,r.drawImage(this.sourceCanvas,0,0,e,n)),r}toCanvas(t,e=this.sourceCanvas.width,n=this.sourceCanvas.height){return i(this,void 0,void 0,(function*(){const r=this.copySourceToCanvas(u,e,n);if(null!=this.tapFrameAsync){this._isReadyForNextFrame=!1;try{yield this.tapFrameAsync(this,r,r.canvas)}catch(t){console.log("Model disposed so nothing to render with hook")}this._isReadyForNextFrame=!0}const o=c.getContext2D(t);return o.canvas.width=e,o.canvas.height=n,o.drawImage(u,0,0,e,n),o.canvas}))}cameraToImageData(){return this._ctx.getImageData(0,0,this._ctx.canvas.width,this._ctx.canvas.height)}_handleLoopUpdate(t,e,n){return i(this,void 0,void 0,(function*(){if(this._isReadyForNextFrame){if(this._renderCameraToSourceCanvas(),yield this.toCanvas(this.canvas,this.sourceCanvas.width,this.sourceCanvas.height),this.stats){const e=Math.floor(1e3/t);this.canvas;this._ctx.fillStyle="black",this._ctx.fillRect(0,this.height-30,80,30),this._ctx.font="16px Arial",this._ctx.fillStyle="red",this._ctx.fillText(`${e}fps`,15,this.height-10)}this.__frameCount++,this._dispatchUpdate(t,e,n)}}))}};d.flip=!0,o([s.property({type:Boolean,reflect:!0})],d.prototype,"stats",void 0),o([s.property({type:Number})],d.prototype,"throttle",void 0),o([s.property({type:Number,reflect:!0})],d.prototype,"width",void 0),o([s.property({type:Number,reflect:!0})],d.prototype,"height",void 0),o([s.property({type:Number,reflect:!0})],d.prototype,"deviceWidth",void 0),o([s.property({type:Number,reflect:!0})],d.prototype,"deviceHeight",void 0),o([s.property({type:String})],d.prototype,"deviceId",void 0),o([a.default],d.prototype,"_handleLoopUpdate",null),d=r=o([s.customElement("tm-webcam")],d),e.WebcamElement=d},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(24),i=n(3),s=n(8),a=(t,e,n)=>t===-e?`Record ${Math.floor(n/1e3)} Seconds`:t<0?`Recording in ${Math.ceil(-1*t/1e3)}s...`:`Recording ${Math.floor(t/1e3)}s...`;let c=class extends i.LitElement{constructor(){super(...arguments),this.delayOnComplete=1e3,this.cancelable=!0,this.delay=0,this.duration=1,this.fps=60,this.hideProgress=!1,this.__isActive=!1,this.label="",this.labelGenerator=a}get isActive(){return this.__isActive}get delayElapsed(){return this._delayLoop?this._delayLoop.elapsedTime:0}get elapsed(){return this._loop?this._loop.elapsedTime:0}get completed(){return this._loop.isCompleted()}get ready(){return this._loop&&this._delayLoop&&!(this._delayLoop.isRunning()||this._loop.isRunning())}connectedCallback(){return this._delayLoop=new o.Animitter,this._delayLoop.on("update",this._handleDelayUpdate),this._delayLoop.on("complete",this._handleDelayComplete),this._loop=new o.Animitter,this._loop.on("start",this._handleLoopStart),this._loop.on("update",this._handleLoopUpdate),this._loop.on("complete",this._handleLoopComplete),this._loop.on("stop",this._handleLoopStop),super.connectedCallback()}disconnectedCallback(){return this._delayLoop.dispose(),this._loop.dispose(),super.disconnectedCallback()}_updateFill(t){const e=Math.min(1,Math.max(0,t));this._fillElement.style.width=`${Math.floor(1e3*e)/10}%`}_handleDelayUpdate(t,e){this._updateFill(e/this.delay),this._updateLabel(),this.dispatchEvent(new CustomEvent("delayupdate",{bubbles:!0})),e>=this.delay&&this._delayLoop.complete()}_handleDelayComplete(){this.dispatchEvent(new CustomEvent("delaycomplete",{bubbles:!0})),this._delayLoop.stop(),this._loop.start()}_handleLoopStart(){this.__isActive=!0,this.dispatchEvent(new CustomEvent("start",{bubbles:!0}))}_handleLoopStop(){this.__isActive=!1,this.dispatchEvent(new CustomEvent("stop",{bubbles:!0}))}_handleLoopComplete(){this.dispatchEvent(new CustomEvent("complete",{bubbles:!0})),setTimeout(()=>{this._updateFill(0),this._resetLoops(),this._updateLabel()},this.delayOnComplete)}_handleLoopUpdate(t,e){this._updateFill(e/this.duration),this._updateLabel(),this.dispatchEvent(new CustomEvent("update",{bubbles:!0})),e>=this.duration&&this._loop.complete()}_updateLabel(){const t=this._delayLoop.elapsedTime-this.delay+this._loop.elapsedTime,e=this.labelGenerator(t,this.delay,this.duration);this._buttonElement.label=e}_resetLoops(){this._delayLoop.reset(),this._loop.reset(),this._loop.setFPS(this.fps)}cancel(){return!(!this.cancelable||!this._delayLoop.isRunning()&&!this._loop.isRunning())&&(this._delayLoop.stop(),this._delayLoop.reset(),this._loop.stop(),this._loop.reset(),this._updateLabel(),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0})),!0)}start(){this.cancel()||(this._resetLoops(),this.delay>0&&isFinite(this.delay)?this._delayLoop.start():this._handleDelayComplete())}firstUpdated(t){return this._fillElement=this.shadowRoot.querySelector("#fill"),this._buttonElement=this.shadowRoot.querySelector("tm-button"),this._updateLabel(),super.firstUpdated(t)}updated(t){return this._updateLabel(),super.updated(t)}render(){return i.html`
            <style>
                :host {
                    --_color: var(--color, #ffffff);
                    --_background-color: var(--background-color, #1967D2);
                    --_hover-background-color: var(--hover-background-color, #185ABC);
                    --_active-background-color: var(--active-background-color, #174EA6);
                    --_focus-color: var(--focus-color, #000);

                    display: inline-block;
                    overflow: hidden;
                    position: relative;
                    background-color: var(--_background-color);
                    width: 226px;
                    color: var(--_color);
                    cursor: pointer;
                    border-radius: 4px;
                    overflow: hidden;
                    text-align: center;
                }
                #container {
                    width: 100%;
                    height: 100%;
                }
                #fill {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: var(--fill-color, #174EA6);
                }

                tm-button {
                    width: 100%;
                    height: 100%;
                    --color: var(--_color);
                    --background-color: transparent;
                    /* --background-color: --_background-color; */
                    --hover-background-color: var(--_hover-background-color);
                    --active-background-color: var(--_active-background-color);
                    --focus-color: var(--_focus-color);
                }
            </style>
            <div id="container" @click=${this.start}>
                <div id="fill"></div>
                <tm-button label="${this.label}"></tm-button>
            </div>
        `}};r([i.property({type:Number})],c.prototype,"delayOnComplete",void 0),r([i.property({type:Boolean})],c.prototype,"cancelable",void 0),r([i.property({type:Number})],c.prototype,"delay",void 0),r([i.property({type:Number})],c.prototype,"duration",void 0),r([i.property({type:Number})],c.prototype,"fps",void 0),r([i.property({type:Boolean,reflect:!0})],c.prototype,"hideProgress",void 0),r([i.property({type:String})],c.prototype,"label",void 0),r([s.default],c.prototype,"_handleDelayUpdate",null),r([s.default],c.prototype,"_handleDelayComplete",null),r([s.default],c.prototype,"_handleLoopStart",null),r([s.default],c.prototype,"_handleLoopStop",null),r([s.default],c.prototype,"_handleLoopComplete",null),r([s.default],c.prototype,"_handleLoopUpdate",null),r([s.default],c.prototype,"cancel",null),r([s.default],c.prototype,"start",null),c=r([i.customElement("tm-timed-button")],c),e.TimedButtonElement=c},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3),i=n(8);n(16);let s=class extends o.LitElement{constructor(){super(...arguments),this.value=0,this.min=0,this.max=1,this.label="",this.disabled=!1}get percent(){return(this.value-this.min)/(this.max-this.min)}click(t){t&&t.stopPropagation(),this.dispatchEvent(new CustomEvent("click",{bubbles:!0,composed:!0}))}render(){return o.html`
            <style>
                :host {
                    --fill-color: var(--fill-color, #D2E3FC);
                    --hover-fill-color: var(--hover-fill-color, #AECBFA);
                    --color: var(--color, #1967D2);
                    --background-color: var(--background-color, #E8F0FE);
                    color: var(--color, #ffffff);

                    display: inline-block;
                    overflow: hidden;
                    position: relative;
                    background-color: var(--background-color);
                    cursor: pointer;
                    border-radius: 4px;
                    text-align: center;
                }

                :host([disabled]) {
                    /* pointer-events: none; */
                    background-color: #F1F3F4;
                }

                #fill {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: var(--fill-color);
                }

                :host(:hover) #fill {
                    background-color: var(--hover-fill-color);
                }

                tm-button{
                    position: unset;
                    width: 100%;
                    --background-color: transparent;
                }
            </style>
            <div id="container" role="button" aria-label=${this.label} @click=${this.click}>
                <div id="fill" style="width: ${Math.floor(100*this.percent)}%;"></div>
                <tm-button ?disabled=${this.disabled} label="${this.label}"></tm-button>
            </div>
        `}};r([o.property({type:Number})],s.prototype,"value",void 0),r([o.property({type:Number})],s.prototype,"min",void 0),r([o.property({type:Number})],s.prototype,"max",void 0),r([o.property({type:String})],s.prototype,"label",void 0),r([o.property({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),r([i.default],s.prototype,"click",null),s=r([o.customElement("tm-progress-button")],s),e.ProgressButtonElement=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(97),c=n(2),l=n(2),u=function(){function t(t,e,n){var r=this;if(this.dtype=e,this.shape=t.slice(),this.size=c.sizeFromShape(t),null!=n){var o=n.length;c.assert(o===this.size,(function(){return"Length of values '"+o+"' does not match the size inferred by the shape '"+r.size+"'."}))}if("complex64"===e)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||c.getArrayFromDType(e,this.size),this.strides=l.computeStrides(t)}return t.prototype.set=function(t){for(var e=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];0===n.length&&(n=[0]),c.assert(n.length===this.rank,(function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"}));var o=this.locToIndex(n);this.values[o]=t},t.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];0===t.length&&(t=[0]);for(var n=0,r=0,o=t;r<o.length;r++){var i=o[r];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var a=t[t.length-1],c=0;c<t.length-1;++c)a+=this.strides[c]*t[c];return this.values[a]},t.prototype.locToIndex=function(t){if(0===this.rank)return 0;if(1===this.rank)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},t.prototype.indexToLoc=function(t){if(0===this.rank)return[];if(1===this.rank)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.toTensor=function(){return h().makeTensor(this.values,this.shape,this.dtype)},t}();e.TensorBuffer=u;var h=null,p=null,d=null;e.setTensorTracker=function(t){h=t},e.setOpHandler=function(t){p=t},e.setDeprecationWarningFn=function(t){d=t};var f=function(){function t(t,e,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=c.sizeFromShape(t),this.strides=l.computeStrides(t),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}return t.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},t.prototype.asScalar=function(){return this.throwIfDisposed(),c.assert(1===this.size,(function(){return"The array must have only 1 element."})),this.reshape([])},t.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},t.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},t.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},t.prototype.as4D=function(t,e,n,r){return this.throwIfDisposed(),this.reshape([t,e,n,r])},t.prototype.as5D=function(t,e,n,r,o){return this.throwIfDisposed(),this.reshape([t,e,n,r,o])},t.prototype.asType=function(t){return this.throwIfDisposed(),p.cast(this,t)},Object.defineProperty(t.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),t.prototype.buffer=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,p.buffer(this.shape,this.dtype,t)]}}))}))},t.prototype.bufferSync=function(){return p.buffer(this.shape,this.dtype,this.dataSync())},t.prototype.array=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,l.toNestedArray(this.shape,t)]}}))}))},t.prototype.arraySync=function(){return l.toNestedArray(this.shape,this.dataSync())},t.prototype.data=function(){return i(this,void 0,void 0,(function(){var t,e;return s(this,(function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=h().read(this.dataId),"string"!==this.dtype?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map((function(t){return c.decodeString(t)}))]}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}}))}))},t.prototype.dataSync=function(){this.throwIfDisposed();var t=h().readSync(this.dataId);if("string"===this.dtype)try{return t.map((function(t){return c.decodeString(t)}))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},t.prototype.bytes=function(){return i(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,h().read(this.dataId)];case 1:return t=e.sent(),"string"===this.dtype?[2,t]:[2,new Uint8Array(t.buffer)]}}))}))},t.prototype.dispose=function(){this.isDisposed||(h().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(t.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),t.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},t.prototype.toFloat=function(){return this.asType("float32")},t.prototype.toInt=function(){return this.asType("int32")},t.prototype.toBool=function(){return this.asType("bool")},t.prototype.print=function(t){return void 0===t&&(t=!1),p.print(this,t)},t.prototype.reshape=function(t){return this.throwIfDisposed(),p.reshape(this,t)},t.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},t.prototype.expandDims=function(t){return void 0===t&&(t=0),p.expandDims(this,t)},t.prototype.cumsum=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=!1),p.cumsum(this,t,e,n)},t.prototype.squeeze=function(t){return this.throwIfDisposed(),p.squeeze(this,t)},t.prototype.clone=function(){return this.throwIfDisposed(),p.clone(this)},t.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),p.oneHot(this,t,e,n)},t.prototype.toString=function(t){void 0===t&&(t=!1);var e=this.dataSync();return a.tensorToString(e,this.shape,this.dtype,t)},t.prototype.tile=function(t){return this.throwIfDisposed(),p.tile(this,t)},t.prototype.gather=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),p.gather(this,t,e)},t.prototype.matMul=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n=!1),this.throwIfDisposed(),p.matMul(this,t,e,n)},t.prototype.dot=function(t){return this.throwIfDisposed(),p.dot(this,t)},t.prototype.norm=function(t,e,n){return void 0===t&&(t="euclidean"),void 0===e&&(e=null),void 0===n&&(n=!1),this.throwIfDisposed(),p.norm(this,t,e,n)},t.prototype.slice=function(t,e){return this.throwIfDisposed(),p.slice(this,t,e)},t.prototype.reverse=function(t){return this.throwIfDisposed(),p.reverse(this,t)},t.prototype.concat=function(e,n){return void 0===n&&(n=0),this.throwIfDisposed(),e instanceof t&&(e=[e]),p.concat([this].concat(e),n)},t.prototype.split=function(t,e){return void 0===e&&(e=0),this.throwIfDisposed(),p.split(this,t,e)},t.prototype.stack=function(t,e){return void 0===e&&(e=0),p.stack([this,t],e)},t.prototype.unstack=function(t){return void 0===t&&(t=0),p.unstack(this,t)},t.prototype.pad=function(t,e){return void 0===e&&(e=0),p.pad(this,t,e)},t.prototype.batchNormalization=function(t,e,n,r,o){return void 0===n&&(n=.001),d("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,r,n)},t.prototype.batchNorm=function(t,e,n,r,o){return void 0===o&&(o=.001),this.throwIfDisposed(),p.batchNorm(this,t,e,n,r,o)},t.prototype.all=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.all(this,t,e)},t.prototype.any=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.any(this,t,e)},t.prototype.logSumExp=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.logSumExp(this,t,e)},t.prototype.sum=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.sum(this,t,e)},t.prototype.prod=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.prod(this,t,e)},t.prototype.mean=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.mean(this,t,e)},t.prototype.min=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.min(this,t,e)},t.prototype.max=function(t,e){return void 0===t&&(t=null),void 0===e&&(e=!1),this.throwIfDisposed(),p.max(this,t,e)},t.prototype.argMin=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),p.argMin(this,t)},t.prototype.argMax=function(t){return void 0===t&&(t=null),this.throwIfDisposed(),p.argMax(this,t)},t.prototype.cast=function(t){return this.throwIfDisposed(),p.cast(this,t)},t.prototype.add=function(t){return this.throwIfDisposed(),p.add(this,t)},t.prototype.addStrict=function(t){return this.throwIfDisposed(),p.addStrict(this,t)},t.prototype.atan2=function(t){return this.throwIfDisposed(),p.atan2(this,t)},t.prototype.sub=function(t){return this.throwIfDisposed(),p.sub(this,t)},t.prototype.subStrict=function(t){return this.throwIfDisposed(),p.subStrict(this,t)},t.prototype.pow=function(t){return this.throwIfDisposed(),p.pow(this,t)},t.prototype.powStrict=function(t){return this.throwIfDisposed(),p.powStrict(this,t)},t.prototype.mul=function(t){return this.throwIfDisposed(),p.mul(this,t)},t.prototype.mulStrict=function(t){return this.throwIfDisposed(),p.mulStrict(this,t)},t.prototype.div=function(t){return this.throwIfDisposed(),p.div(this,t)},t.prototype.floorDiv=function(t){return this.throwIfDisposed(),p.floorDiv(this,t)},t.prototype.divStrict=function(t){return this.throwIfDisposed(),p.divStrict(this,t)},t.prototype.minimum=function(t){return this.throwIfDisposed(),p.minimum(this,t)},t.prototype.minimumStrict=function(t){return this.throwIfDisposed(),p.minimumStrict(this,t)},t.prototype.maximum=function(t){return this.throwIfDisposed(),p.maximum(this,t)},t.prototype.maximumStrict=function(t){return this.throwIfDisposed(),p.maximumStrict(this,t)},t.prototype.mod=function(t){return this.throwIfDisposed(),p.mod(this,t)},t.prototype.modStrict=function(t){return this.throwIfDisposed(),p.modStrict(this,t)},t.prototype.squaredDifference=function(t){return this.throwIfDisposed(),p.squaredDifference(this,t)},t.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),p.squaredDifferenceStrict(this,t)},t.prototype.transpose=function(t){return this.throwIfDisposed(),p.transpose(this,t)},t.prototype.notEqual=function(t){return this.throwIfDisposed(),p.notEqual(this,t)},t.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),p.notEqualStrict(this,t)},t.prototype.less=function(t){return this.throwIfDisposed(),p.less(this,t)},t.prototype.lessStrict=function(t){return this.throwIfDisposed(),p.lessStrict(this,t)},t.prototype.equal=function(t){return this.throwIfDisposed(),p.equal(this,t)},t.prototype.equalStrict=function(t){return this.throwIfDisposed(),p.equalStrict(this,t)},t.prototype.lessEqual=function(t){return this.throwIfDisposed(),p.lessEqual(this,t)},t.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),p.lessEqualStrict(this,t)},t.prototype.greater=function(t){return this.throwIfDisposed(),p.greater(this,t)},t.prototype.greaterStrict=function(t){return this.throwIfDisposed(),p.greaterStrict(this,t)},t.prototype.greaterEqual=function(t){return this.throwIfDisposed(),p.greaterEqual(this,t)},t.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),p.greaterEqualStrict(this,t)},t.prototype.logicalAnd=function(t){return this.throwIfDisposed(),p.logicalAnd(this,t)},t.prototype.logicalOr=function(t){return this.throwIfDisposed(),p.logicalOr(this,t)},t.prototype.logicalNot=function(){return this.throwIfDisposed(),p.logicalNot(this)},t.prototype.logicalXor=function(t){return this.throwIfDisposed(),p.logicalXor(this,t)},t.prototype.where=function(t,e){return this.throwIfDisposed(),p.where(t,this,e)},t.prototype.neg=function(){return this.throwIfDisposed(),p.neg(this)},t.prototype.ceil=function(){return this.throwIfDisposed(),p.ceil(this)},t.prototype.floor=function(){return this.throwIfDisposed(),p.floor(this)},t.prototype.sign=function(){return this.throwIfDisposed(),p.sign(this)},t.prototype.isNaN=function(){return this.throwIfDisposed(),p.isNaN(this)},t.prototype.isInf=function(){return this.throwIfDisposed(),p.isInf(this)},t.prototype.isFinite=function(){return this.throwIfDisposed(),p.isFinite(this)},t.prototype.exp=function(){return this.throwIfDisposed(),p.exp(this)},t.prototype.expm1=function(){return this.throwIfDisposed(),p.expm1(this)},t.prototype.log=function(){return this.throwIfDisposed(),p.log(this)},t.prototype.log1p=function(){return this.throwIfDisposed(),p.log1p(this)},t.prototype.sqrt=function(){return this.throwIfDisposed(),p.sqrt(this)},t.prototype.rsqrt=function(){return this.throwIfDisposed(),p.rsqrt(this)},t.prototype.square=function(){return this.throwIfDisposed(),p.square(this)},t.prototype.reciprocal=function(){return this.throwIfDisposed(),p.reciprocal(this)},t.prototype.abs=function(){return this.throwIfDisposed(),p.abs(this)},t.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),p.clipByValue(this,t,e)},t.prototype.relu=function(){return this.throwIfDisposed(),p.relu(this)},t.prototype.relu6=function(){return this.throwIfDisposed(),p.relu6(this)},t.prototype.elu=function(){return this.throwIfDisposed(),p.elu(this)},t.prototype.selu=function(){return this.throwIfDisposed(),p.selu(this)},t.prototype.leakyRelu=function(t){return void 0===t&&(t=.2),this.throwIfDisposed(),p.leakyRelu(this,t)},t.prototype.prelu=function(t){return this.throwIfDisposed(),p.prelu(this,t)},t.prototype.sigmoid=function(){return this.throwIfDisposed(),p.sigmoid(this)},t.prototype.logSigmoid=function(){return this.throwIfDisposed(),p.logSigmoid(this)},t.prototype.softplus=function(){return this.throwIfDisposed(),p.softplus(this)},t.prototype.zerosLike=function(){return this.throwIfDisposed(),p.zerosLike(this)},t.prototype.onesLike=function(){return this.throwIfDisposed(),p.onesLike(this)},t.prototype.sin=function(){return this.throwIfDisposed(),p.sin(this)},t.prototype.cos=function(){return this.throwIfDisposed(),p.cos(this)},t.prototype.tan=function(){return this.throwIfDisposed(),p.tan(this)},t.prototype.asin=function(){return this.throwIfDisposed(),p.asin(this)},t.prototype.acos=function(){return this.throwIfDisposed(),p.acos(this)},t.prototype.atan=function(){return this.throwIfDisposed(),p.atan(this)},t.prototype.sinh=function(){return this.throwIfDisposed(),p.sinh(this)},t.prototype.cosh=function(){return this.throwIfDisposed(),p.cosh(this)},t.prototype.tanh=function(){return this.throwIfDisposed(),p.tanh(this)},t.prototype.asinh=function(){return this.throwIfDisposed(),p.asinh(this)},t.prototype.acosh=function(){return this.throwIfDisposed(),p.acosh(this)},t.prototype.atanh=function(){return this.throwIfDisposed(),p.atanh(this)},t.prototype.erf=function(){return this.throwIfDisposed(),p.erf(this)},t.prototype.round=function(){return this.throwIfDisposed(),p.round(this)},t.prototype.step=function(t){return void 0===t&&(t=0),this.throwIfDisposed(),p.step(this,t)},t.prototype.softmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),p.softmax(this,t)},t.prototype.logSoftmax=function(t){return void 0===t&&(t=-1),this.throwIfDisposed(),p.logSoftmax(this,t)},t.prototype.resizeBilinear=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),p.image.resizeBilinear(this,t,e)},t.prototype.resizeNearestNeighbor=function(t,e){return void 0===e&&(e=!1),this.throwIfDisposed(),p.image.resizeNearestNeighbor(this,t,e)},t.prototype.conv1d=function(t,e,n,r,o,i){return void 0===r&&(r="NWC"),void 0===o&&(o=1),this.throwIfDisposed(),p.conv1d(this,t,e,n,r,o,i)},t.prototype.conv2d=function(t,e,n,r,o,i){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),p.conv2d(this,t,e,n,r,o,i)},t.prototype.conv2dTranspose=function(t,e,n,r,o){return this.throwIfDisposed(),p.conv2dTranspose(this,t,e,n,r,o)},t.prototype.depthwiseConv2D=function(t,e,n,r,o,i){return void 0===r&&(r="NHWC"),void 0===o&&(o=[1,1]),this.throwIfDisposed(),p.depthwiseConv2d(this,t,e,n,r,o,i)},t.prototype.separableConv2d=function(t,e,n,r,o,i){return void 0===o&&(o=[1,1]),void 0===i&&(i="NHWC"),this.throwIfDisposed(),p.separableConv2d(this,t,e,n,r,o,i)},t.prototype.avgPool=function(t,e,n,r){return this.throwIfDisposed(),p.avgPool(this,t,e,n,r)},t.prototype.maxPool=function(t,e,n,r){return this.throwIfDisposed(),p.maxPool(this,t,e,n,r)},t.prototype.localResponseNormalization=function(t,e,n,r){return void 0===t&&(t=5),void 0===e&&(e=1),void 0===n&&(n=1),void 0===r&&(r=.5),p.localResponseNormalization(this,t,e,n,r)},t.prototype.pool=function(t,e,n,r,o){return this.throwIfDisposed(),p.pool(this,t,e,n,r,o)},t.prototype.variable=function(t,e,n){return void 0===t&&(t=!0),this.throwIfDisposed(),h().makeVariable(this,t,e,n)},t.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),p.unsortedSegmentSum(this,t,e)},t.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),p.batchToSpaceND(this,t,e)},t.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),p.spaceToBatchND(this,t,e)},t.prototype.topk=function(t,e){return void 0===t&&(t=1),void 0===e&&(e=!0),this.throwIfDisposed(),p.topk(this,t,e)},t.prototype.stridedSlice=function(t,e,n,r,o,i,s,a){return void 0===r&&(r=0),void 0===o&&(o=0),void 0===i&&(i=0),void 0===s&&(s=0),void 0===a&&(a=0),this.throwIfDisposed(),p.stridedSlice(this,t,e,n,r,o,i,s,a)},t.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),p.depthToSpace(this,t,e)},t.prototype.fft=function(){return this.throwIfDisposed(),p.spectral.fft(this)},t.prototype.ifft=function(){return this.throwIfDisposed(),p.spectral.ifft(this)},t.prototype.rfft=function(){return this.throwIfDisposed(),p.spectral.rfft(this)},t.prototype.irfft=function(){return this.throwIfDisposed(),p.spectral.irfft(this)},t}();e.Tensor=f,Object.defineProperty(f,Symbol.hasInstance,{value:function(t){return!!t&&null!=t.dataId&&null!=t.shape&&null!=t.dtype}});var y=function(t){function e(e,n,r,o){var i=t.call(this,e.shape,e.dtype,e.dataId,o)||this;return i.trainable=n,i.name=r,i}return o(e,t),e.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!c.arraysEqual(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");h().disposeTensor(this),this.dataId=t.dataId,h().incRef(this,null)},e.prototype.dispose=function(){h().disposeVariable(this),this.isDisposedInternal=!0},e}(f);e.Variable=y,Object.defineProperty(y,Symbol.hasInstance,{value:function(t){return t instanceof f&&null!=t.assign&&t.assign instanceof Function}})},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(20),a=function(){function t(){this.managers={}}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.registerManager=function(e,n){i.assert(null!=e,(function(){return"scheme must not be undefined or null."})),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),i.assert(e.length>0,(function(){return"scheme must not be an empty string."}));var r=t.getInstance();i.assert(null==r.managers[e],(function(){return"A model store manager is already registered for scheme '"+e+"'."})),r.managers[e]=n},t.getManager=function(t){var e=this.getInstance().managers[t];if(null==e)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},t.getSchemes=function(){return Object.keys(this.getInstance().managers)},t}();function c(t){if(-1===t.indexOf("://"))throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+a.getSchemes().join(","));return{scheme:t.split("://")[0],path:t.split("://")[1]}}function l(t,e,n){return void 0===n&&(n=!1),r(this,void 0,void 0,(function(){var r,l,u,h,p,d,f,y,m;return o(this,(function(o){switch(o.label){case 0:return i.assert(t!==e,(function(){return"Old path and new path are the same: '"+t+"'"})),r=s.IORouterRegistry.getLoadHandlers(t),i.assert(r.length>0,(function(){return"Copying failed because no load handler is found for source URL "+t+"."})),i.assert(r.length<2,(function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+t+"."})),l=r[0],u=s.IORouterRegistry.getSaveHandlers(e),i.assert(u.length>0,(function(){return"Copying failed because no save handler is found for destination URL "+e+"."})),i.assert(u.length<2,(function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+e+"."})),h=u[0],p=c(t).scheme,d=c(t).path,f=p===c(t).scheme,[4,l.load()];case 1:return y=o.sent(),n&&f?[4,a.getManager(p).removeModel(d)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[4,h.save(y)];case 4:return m=o.sent(),!n||f?[3,6]:[4,a.getManager(p).removeModel(d)];case 5:o.sent(),o.label=6;case 6:return[2,m.modelArtifactsInfo]}}))}))}e.ModelStoreManagerRegistry=a,e.listModels=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,i,s,c;return o(this,(function(o){switch(o.label){case 0:t=a.getSchemes(),e={},n=0,r=t,o.label=1;case 1:return n<r.length?(i=r[n],[4,a.getManager(i).listModels()]):[3,4];case 2:for(c in s=o.sent())e[i+"://"+c]=s[c];o.label=3;case 3:return n++,[3,1];case 4:return[2,e]}}))}))},e.removeModel=function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(n){return e=c(t),[2,a.getManager(e.scheme).removeModel(e.path)]}))}))},e.copyModel=function(t,e){return r(this,void 0,void 0,(function(){return o(this,(function(n){return!1,[2,l(t,e,!1)]}))}))},e.moveModel=function(t,e){return r(this,void 0,void 0,(function(){return o(this,(function(n){return!0,[2,l(t,e,!0)]}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=()=>document.createElement("canvas"),i=t=>t&&t.width&&t.width.animVal,s=t=>i(t)?t.width.animVal.value:t.width,a=t=>i(t)?t.height.animVal.value:t.height;function c(t,e,n=o()){return n.width=s(t)*e,n.height=a(t)*e,n.getContext("2d").drawImage(t,0,0,n.width,n.height),n}e.resize=c,e.resizeMaxTo=function(t,e,n=o()){return c(t,e/Math.max(s(t),a(t)),n)},e.resizeMinTo=function(t,e,n=o()){return c(t,e/Math.min(s(t),a(t)),n)},e.cropTo=function(t,e,n=o()){const r=s(t),i=a(t),c=e/Math.min(r,i),l=Math.ceil(r*c),u=Math.ceil(i*c),h=l-e,p=u-e;return n.width=n.height=e,n.getContext("2d").drawImage(t,-1*Math.floor(h/2),-1*Math.floor(p/2),l,u),n},e.cloneCanvas=function(t){const e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.width,e.height=t.height,n.drawImage(t,0,0),e},e.isCanvas=t=>t&&"function"==typeof t.getContext,e.isCanvasImageSource=t=>t&&(e.isCanvas(t)||t.tagName&&-1!==["video","img"].indexOf(t.tagName.toLowerCase())),e.getContext2D=t=>e.isCanvas(t)?t.getContext("2d"):t,e.toBlob=(t,e)=>r(void 0,void 0,void 0,(function*(){return new Promise(n=>{t.toBlob(n,e)})}))},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3),i=n(24),s=n(8);e.defaultVideoOptions={frameRate:30};const a="Your browser does not support WebRTC. Please try another one.";function c(){return window.navigator&&navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&navigator.mediaDevices.getUserMedia}function l(){return c()?navigator.mediaDevices.enumerateDevices():Promise.reject(a)}function u(t){return c()?window.navigator.mediaDevices.getUserMedia(t):Promise.reject(a)}e.assertHasWebRTC=function(){if(!c())throw new Error(a)},e.hasWebRTC=c,e.enumerateDevices=l,e.getUserMedia=u,e.getWebcam=function(t=document.createElement("video"),n=e.defaultVideoOptions){return u({video:n=function(t){return t.facingMode=t.facingMode||e.defaultVideoOptions.facingMode,t.frameRate=t.frameRate||e.defaultVideoOptions.frameRate,t.width=t.width||e.defaultVideoOptions.width,t.height=t.height||e.defaultVideoOptions.height,t}(n)}).then(e=>(t.srcObject=e,t),()=>Promise.reject("Could not open your camera. You may have denied access."))},e.getMicrophoneStream=function(t){return u({audio:{deviceId:t},video:!1}).then(t=>t,()=>Promise.reject("Could not open your microphone stream. You may have denied access."))};class h extends o.LitElement{constructor(){super(...arguments),this.autoplay=!1,this.throttle=0,this.deviceId="none",this._isReadyForNextFrame=!0,this._isInitialized=!1,this._isOk=!0}static getAvailableDeviceInfo(){return l()}static get connectedInstances(){return h.__instances.slice(0)}get isInitialized(){return this._isInitialized}get isPlaying(){return!!this._loop&&this._loop.isRunning()}get frameRate(){return 60}get throttledFrameRate(){return this.throttle>0?Math.min(this.throttle,this.frameRate):this.frameRate}get isOk(){return this._isOk}get stream(){return this._stream}get isReadyForNextFrame(){return this._isReadyForNextFrame}connectedCallback(){h.__instances.push(this),super.connectedCallback()}disconnectedCallback(){const t=h.__instances.indexOf(this);t<0?console.warn("Disconnecting from dom but was never attached"):h.__instances.splice(t,1),this.stop(),super.disconnectedCallback()}firstUpdated(t){this.autoplay&&this.play(),super.firstUpdated(t)}_handleLoopPlay(){return this.dispatchEvent(new CustomEvent("play")),this._loop&&this._loop.stop(),this._loop=new i.Animitter({fps:this.throttledFrameRate}),this._loop.on("update",this._handleLoopUpdate),this._loop.start(),this}update(t){return t.get("throttle")&&this._loop&&this._loop.setFPS(this.throttledFrameRate),super.update(t)}_dispatchUpdate(t,e,n){this.dispatchEvent(new CustomEvent("update",{composed:!0,detail:{deltaTime:t,elapsedTime:e,frameCount:n}}))}}h.__instances=[],r([o.property({type:Boolean})],h.prototype,"autoplay",void 0),r([o.property({type:Number})],h.prototype,"throttle",void 0),r([s.default],h.prototype,"_handleLoopPlay",null),e.AbstractUserMediaElement=h},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fastMap=(t,e,n)=>{n=n||[];for(let r=0;r<t.length;r++)n[r]=e(t[r],r,t);return n},e.empty=t=>{for(;t.length;)t.pop();return t},e.copy=function(t,e){if(t===e)return e;for(let n=0;n<t.length;n++)e[n]=t[n];return e},e.sample=function(t,e=1){const n=t.slice(0);let r=t.length;for(;r--;){const t=Math.floor((r+1)*Math.random()),e=n[t];n[t]=n[r],n[r]=e}return n.slice(0,e)}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3);let i=class extends o.LitElement{constructor(){super(...arguments),this.colors="#ff0000 #00ff00 #ffffff",this.value=0,this.max=1,this.label="",this.display="value"}render(){const{colors:t,value:e,max:n,label:r}=this,[i,s,a]=t.split(" "),c=e/n,l=Math.round(100*c);return o.html`
            <style>
                :host {
                    height: 29px;
                    display: block;
                    overflow: hidden;
                    font-size: 10px;
                    font-weight: 400;
                }

                #container {
                    position: relative;
                    background-color: ${s};
                    width: 100%;
                    height: 100%;
                    user-select: none;
                }

                #inner {
                    position: relative;
                    background-color: ${i};
                    height: 100%;
                    border-radius: var(--inner-border-radius, 5px);
                }

                #outer-text-label {
                    position: absolute;
                    top: 50%;
                    left: var(--label-left, 8px);
                    transform: translate(0, -50%);
                    color: ${i};
                    display: none;
                    min-width: 100%;
                    white-space: nowrap;
                    overflow-x: hidden;
                }

                #inner-text-label {
                    color: ${a||"#ffffff"};
                    display: none;
                    width: calc(100% - var(--label-left, 8px));
                    overflow-x: hidden;
                    white-space: nowrap;
                    position: absolute;
                    top: 50%;
                    left: var(--label-left, 8px);
                    transform: translate(0, -50%);
                }

                #value-label {
                    color: ${a||"#ffffff"};
                    position: absolute;
                    top: 50%;
                    right: 5px;
                    transform: translate(0, -50%);
                }

                :host([display="label"]) #value-label {
                    display: none;
                }

                :host([display*="label"]) #outer-text-label, :host([display*="label"]) #inner-text-label {
                    display: inline-block;
                }
            </style>
            <div id="container" aria-label=${`${r}: ${l}%`}>
                <span id="outer-text-label">${r}</span>
                <div id="inner" style="width: ${l}%;">
                    <span id="inner-text-label">${r}</span>
                    <span id="value-label">${l}%</span>
                </div>
            </div>
        `}};r([o.property({type:String})],i.prototype,"colors",void 0),r([o.property({type:Number})],i.prototype,"value",void 0),r([o.property({type:Number})],i.prototype,"max",void 0),r([o.property({type:String})],i.prototype,"label",void 0),r([o.property({type:String,reflect:!0})],i.prototype,"display",void 0),i=r([o.customElement("tm-bar-graph")],i),e.BarGraphElement=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(3);e.scrollbar=function(t="*"){return r.html`
        <style>
            /* Let's get this party started */
            ${t}::-webkit-scrollbar {
                width: var(--scrollbar-width, 8px);
                height: var(--scrollbar-height, 6px);
            }

            ${t} {
                scrollbar-color: var(--scrollbar-thumb, #AECBFA) var(--scrollbar-track, rgba(255, 255, 255, 0));
                scrollbar-width: thin;
            }

            /* Track */
            ${t}::-webkit-scrollbar-track {
                background: var(--scrollbar-track, rgba(255, 255, 255, 0));
                /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.0); */
                -webkit-border-radius: 5px;
                border-radius: 5px;
            }

            /* Handle */
            ${t}::-webkit-scrollbar-thumb {
                -webkit-border-radius: 5px;
                border-radius: 5px;
                background: var(--scrollbar-thumb, #AECBFA);
                /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); */
            }
            ${t}::-webkit-scrollbar-thumb:hover {
                background: var(--scrollbar-thumb-hover, #3474E0);
            }

            /* ::-webkit-scrollbar-thumb:window-inactive {
            } */
        </style>
    `}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(38);e.IMAGE_SIZE=r.IMAGE_SIZE,e.CustomMobileNet=r.CustomMobileNet,e.load=r.load,e.loadFromFiles=r.loadFromFiles,e.loadTruncatedMobileNet=r.loadTruncatedMobileNet;var o=n(73);e.TeachableMobileNet=o.TeachableMobileNet,e.createTeachable=o.createTeachable;var i=n(83);e.Webcam=i.Webcam;var s=n(41);e.version=s.version},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),s=n(14),a=n(39),c=n(40),l=n(41);e.IMAGE_SIZE=224;var u=function(t){return t.packageVersion=t.packageVersion||l.version,t.packageName=t.packageName||"@teachablemachine/image",t.timeStamp=t.timeStamp||(new Date).toISOString(),t.userMetadata=t.userMetadata||{},t.modelName=t.modelName||"untitled",t.labels=t.labels||[],t},h=function(t,e){if(1===t){if(.25!==e&&.5!==e&&.75!==e&&1!==e)return console.warn("Invalid alpha. Options are: 0.25, 0.50, 0.75 or 1.00."),console.log("Loading model with alpha: ",.25.toFixed(2)),.25}else if(.35!==e&&.5!==e&&.75!==e&&1!==e)return console.warn("Invalid alpha. Options are: 0.35, 0.50, 0.75 or 1.00."),console.log("Loading model with alpha: ",.35.toFixed(2)),.35;return e},p=function(t){return r(void 0,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return"string"!=typeof t?[3,3]:[4,fetch(t)];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),[3,4];case 3:if(!(r=t)||!Array.isArray(r.labels))throw new Error("Invalid Metadata provided");e=t,n.label=4;case 4:return[2,u(e)]}var r}))}))};function d(t,e,n){return void 0===n&&(n=3),r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,e.data()];case 1:return r=o.sent(),[2,i.tidy((function(){n=Math.min(n,r.length);for(var e=[],o=0;o<r.length;o++)e.push({value:r[o],index:o});e.sort((function(t,e){return e.value-t.value}));var i=new Float32Array(n),s=new Int32Array(n);for(o=0;o<n;o++)i[o]=e[o].value,s[o]=e[o].index;var a=[];for(o=0;o<s.length;o++)a.push({className:t[s[o]],probability:i[o]});return a}))]}}))}))}e.getTopKClasses=d;var f=function(){function t(t,e){this.model=t,this._metadata=u(e)}return Object.defineProperty(t,"EXPECTED_IMAGE_SIZE",{get:function(){return e.IMAGE_SIZE},enumerable:!0,configurable:!0}),t.prototype.getMetadata=function(){return this._metadata},t.prototype.getTotalClasses=function(){return this.model.output.shape[1]},t.prototype.getClassLabels=function(){return this._metadata.labels},t.prototype.predictTopK=function(t,n,l){return void 0===n&&(n=10),void 0===l&&(l=!1),r(this,void 0,void 0,(function(){var r,u,h,p=this;return o(this,(function(o){switch(o.label){case 0:return r=c.cropTo(t,e.IMAGE_SIZE,l),u=i.tidy((function(){var t=a.capture(r);return p.model.predict(t)})),[4,d(this._metadata.labels,u,n)];case 1:return h=o.sent(),s.dispose(u),[2,h]}}))}))},t.prototype.predict=function(t,n){return void 0===n&&(n=!1),r(this,void 0,void 0,(function(){var r,l,u,h,p,d=this;return o(this,(function(o){switch(o.label){case 0:return r=c.cropTo(t,e.IMAGE_SIZE,n),[4,(l=i.tidy((function(){var t=a.capture(r);return d.model.predict(t)}))).data()];case 1:for(u=o.sent(),h=[],p=0;p<u.length;p++)h.push({className:this._metadata.labels[p],probability:u[p]});return s.dispose(l),[2,h]}}))}))},t.prototype.warm=function(){var t=i.zeros([1,e.IMAGE_SIZE,e.IMAGE_SIZE,3]);this.truncatedModel.predict(t)},t.prototype.dispose=function(){this.truncatedModel.dispose()},t}();e.CustomMobileNet=f,e.loadTruncatedMobileNet=function(t){return r(this,void 0,void 0,(function(){var n,r,s,a,c,l,u;return o(this,(function(o){switch(o.label){case 0:return n=function(t){if((t=t||{}).checkpointUrl&&t.trainingLayer)return(t.alpha||t.version)&&console.warn("Checkpoint URL passed to modelOptions, alpha options are ignored"),[t.checkpointUrl,t.trainingLayer];if(t.version=t.version||1,1===t.version){t.alpha=t.alpha||.25,t.alpha=h(t.version,t.alpha),console.log("Loading mobilenet "+t.version+" and alpha "+t.alpha);var n=t.alpha.toFixed(2);return"1.00"===n&&(n="1.0"),["https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_"+n+"_"+e.IMAGE_SIZE+"/model.json","conv_pw_13_relu"]}if(2===t.version)return t.alpha=t.alpha||.35,t.alpha=h(t.version,t.alpha),console.log("Loading mobilenet "+t.version+" and alpha "+t.alpha),["https://storage.googleapis.com/teachable-machine-models/mobilenet_v2_weights_tf_dim_ordering_tf_kernels_"+t.alpha.toFixed(2)+"_"+e.IMAGE_SIZE+"_no_top/model.json","out_relu"];throw new Error("MobileNet V"+t.version+" doesn't exist")}(t),r=n[0],s=n[1],[4,i.loadLayersModel(r)];case 1:return a=o.sent(),t&&1===t.version?(c=a.getLayer(s),l=i.model({inputs:a.inputs,outputs:c.output}),(u=i.sequential()).add(l),u.add(i.layers.flatten()),[2,u]):(c=a.getLayer(s),l=i.model({inputs:a.inputs,outputs:c.output}),(u=i.sequential()).add(l),u.add(i.layers.globalAveragePooling2d({})),[2,u])}}))}))},e.load=function(t,e){return r(this,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return[4,i.loadLayersModel(t)];case 1:return n=o.sent(),e?[4,p(e)]:[3,3];case 2:return r=o.sent(),[3,4];case 3:r=null,o.label=4;case 4:return[2,new f(n,r)]}}))}))},e.loadFromFiles=function(t,e,n){return r(this,void 0,void 0,(function(){var r,s,a;return o(this,(function(o){switch(o.label){case 0:return[4,i.loadLayersModel(i.io.browserFiles([t,e]))];case 1:return r=o.sent(),[4,new Response(n).json()];case 2:return s=o.sent(),n?[4,p(s)]:[3,4];case 3:return a=o.sent(),[3,5];case 4:a=null,o.label=5;case 5:return[2,new f(r,a)]}}))}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(14);function o(t){var e=Math.min(t.shape[0],t.shape[1]),n=t.shape[0]/2-e/2,r=t.shape[1]/2-e/2;return t.slice([n,r,0],[e,e,3])}e.capture=function(t){return r.tidy((function(){return o(r.browser.fromPixels(t)).expandDims(0).toFloat().div(r.scalar(127)).sub(r.scalar(1))}))},e.cropTensor=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return document.createElement("canvas")};function o(t,e,n){return void 0===n&&(n=r()),n.width=t.width*e,n.height=t.height*e,n.getContext("2d").drawImage(t,0,0,n.width,n.height),n}e.resize=o,e.resizeMaxTo=function(t,e,n){return void 0===n&&(n=r()),o(t,e/Math.max(t.width,t.height),n)},e.resizeMinTo=function(t,e,n){return void 0===n&&(n=r()),o(t,e/Math.min(t.width,t.height),n)},e.cropTo=function(t,e,n,o){void 0===n&&(n=!1),void 0===o&&(o=r());var i=t.width,s=t.height;t instanceof HTMLVideoElement&&(i=t.videoWidth,s=t.videoHeight);var a=e/Math.min(i,s),c=Math.ceil(i*a),l=Math.ceil(s*a),u=c-e,h=l-e;o.width=o.height=e;var p=o.getContext("2d");return p.drawImage(t,-1*~~(u/2),-1*~~(h/2),c,l),n&&(p.scale(-1,1),p.drawImage(o,-1*e,0)),o}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.version="0.8.4"},function(t,e,n){"use strict";(function(e){var r=n(84);function o(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function i(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var s=n(85),a=Object.prototype.hasOwnProperty,c=Array.prototype.slice,l="foo"===function(){}.name;function u(t){return Object.prototype.toString.call(t)}function h(t){return!i(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=t.exports=v,d=/\s*function\s+([^\(\s]*)\s*/;function f(t){if(s.isFunction(t)){if(l)return t.name;var e=t.toString().match(d);return e&&e[1]}}function y(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function m(t){if(l||!s.isFunction(t))return s.inspect(t);var e=f(t);return"[Function"+(e?": "+e:"")+"]"}function g(t,e,n,r,o){throw new p.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function v(t,e){t||g(t,!0,e,"==",p.ok)}function b(t,e,n,r){if(t===e)return!0;if(i(t)&&i(e))return 0===o(t,e);if(s.isDate(t)&&s.isDate(e))return t.getTime()===e.getTime();if(s.isRegExp(t)&&s.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(h(t)&&h(e)&&u(t)===u(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===o(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(i(t)!==i(e))return!1;var a=(r=r||{actual:[],expected:[]}).actual.indexOf(t);return-1!==a&&a===r.expected.indexOf(e)||(r.actual.push(t),r.expected.push(e),function(t,e,n,r){if(null==t||null==e)return!1;if(s.isPrimitive(t)||s.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=w(t),i=w(e);if(o&&!i||!o&&i)return!1;if(o)return t=c.call(t),e=c.call(e),b(t,e,n);var a,l,u=S(t),h=S(e);if(u.length!==h.length)return!1;for(u.sort(),h.sort(),l=u.length-1;l>=0;l--)if(u[l]!==h[l])return!1;for(l=u.length-1;l>=0;l--)if(a=u[l],!b(t[a],e[a],n,r))return!1;return!0}(t,e,n,r))}return n?t===e:t==e}function w(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function _(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function x(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=function(t){var e;try{t()}catch(t){e=t}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&g(o,n,"Missing expected exception"+r);var i="string"==typeof r,a=!t&&o&&!n;if((!t&&s.isError(o)&&i&&_(o,n)||a)&&g(o,n,"Got unwanted exception"+r),t&&o&&n&&!_(o,n)||!t&&o)throw o}p.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=function(t){return y(m(t.actual),128)+" "+t.operator+" "+y(m(t.expected),128)}(this),this.generatedMessage=!0);var e=t.stackStartFunction||g;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=f(e),i=r.indexOf("\n"+o);if(i>=0){var s=r.indexOf("\n",i+1);r=r.substring(s+1)}this.stack=r}}},s.inherits(p.AssertionError,Error),p.fail=g,p.ok=v,p.equal=function(t,e,n){t!=e&&g(t,e,n,"==",p.equal)},p.notEqual=function(t,e,n){t==e&&g(t,e,n,"!=",p.notEqual)},p.deepEqual=function(t,e,n){b(t,e,!1)||g(t,e,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,n){b(t,e,!0)||g(t,e,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,n){b(t,e,!1)&&g(t,e,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function t(e,n,r){b(e,n,!0)&&g(e,n,r,"notDeepStrictEqual",t)},p.strictEqual=function(t,e,n){t!==e&&g(t,e,n,"===",p.strictEqual)},p.notStrictEqual=function(t,e,n){t===e&&g(t,e,n,"!==",p.notStrictEqual)},p.throws=function(t,e,n){x(!0,t,e,n)},p.doesNotThrow=function(t,e,n){x(!1,t,e,n)},p.ifError=function(t){if(t)throw t},p.strict=r((function t(e,n){e||g(e,!0,n,"==",t)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var S=Object.keys||function(t){var e=[];for(var n in t)a.call(t,n)&&e.push(n);return e}}).call(this,n(21))},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=n(14),i=n(44),s=n(102),a=n(107);class c extends i.HTTPRequest{constructor(t,e,n){super(e,n),this.metadata=t}save(t){return r(this,void 0,void 0,(function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n};e.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),e.body.append("metadata.json",new Blob([JSON.stringify(this.metadata)],{type:"application/json"}),"metadata.json");const i=yield o.util.fetch(this.path,e);if(i.ok){return{modelArtifactsInfo:s.getModelArtifactsInfoForJSON(t),responses:[i]}}throw new Error("MetadataBrowserHTTPRequest.save() failed due to HTTP response status "+`${i.status}.`)}))}}e.MetadataBrowserHTTPRequest=c,e.metadataBrowserHTTPRequest=function(t,e,n){const r={};return e&&(r["x-token"]=n,r["x-model-name"]=e),new c(t,a.config.PUBLISH_URL,{requestInit:{method:"POST",headers:r}})}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=n(2),a=n(19),c=n(20),l=n(48),u=function(){function t(t,e){if(this.DEFAULT_METHOD="POST",null==e&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,null!=e.fetchFunc?(s.assert("function"==typeof e.fetchFunc,(function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=e.fetchFunc):this.fetch=i.env().platform.fetch,s.assert(null!=t&&t.length>0,(function(){return"URL path for http must not be null, undefined or empty."})),Array.isArray(t)&&s.assert(2===t.length,(function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."})),this.path=t,null!=e.requestInit&&null!=e.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return t.prototype.save=function(t){return r(this,void 0,void 0,(function(){var e,n,r,i;return o(this,(function(o){switch(o.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=t.weightData&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=o.sent()).ok)return[2,{modelArtifactsInfo:a.getModelArtifactsInfoForJSON(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}}))}))},t.prototype.load=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,i,s,a,c;return o(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=o.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");o.label=2;case 2:return o.trys.push([2,4,,5]),[4,t.json()];case 3:return e=o.sent(),[3,5];case 4:throw o.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(r=e.modelTopology,i=e.weightsManifest,null==r&&null==i)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return null==i?[3,7]:[4,this.loadWeights(i)];case 6:c=o.sent(),s=c[0],a=c[1],o.label=7;case 7:return[2,{modelTopology:r,weightSpecs:s,weightData:a}]}}))}))},t.prototype.loadWeights=function(t){return r(this,void 0,void 0,(function(){var e,n,r,i,s,c,u,p,d,f,y;return o(this,(function(o){switch(o.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=h(e),r=n[0],i=n[1],s=this.weightPathPrefix||r,c=[],u=0,p=t;u<p.length;u++)d=p[u],c.push.apply(c,d.weights);return f=[],t.forEach((function(t){t.paths.forEach((function(t){f.push(s+t+i)}))})),[4,l.loadWeightsAsArrayBuffer(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return y=o.sent(),[2,[c,a.concatenateArrayBuffers(y)]]}}))}))},t.URL_SCHEME_REGEX=/^https?:\/\//,t}();function h(t){var e=t.lastIndexOf("/"),n=t.lastIndexOf("?");return[t.substring(0,e)+"/",n>e?t.substring(n):""]}function p(t){return null!=t.match(u.URL_SCHEME_REGEX)}function d(t,e){return new u(t,e)}e.HTTPRequest=u,e.parseUrl=h,e.isHTTPScheme=p,e.httpRouter=function(t,e){if("undefined"==typeof fetch)return null;return(Array.isArray(t)?t.every((function(t){return p(t)})):p(t))?d(t,{onProgress:e}):null},c.IORouterRegistry.registerSaveRouter(e.httpRouter),c.IORouterRegistry.registerLoadRouter(e.httpRouter),e.http=d,e.browserHTTPRequest=function(t,e){return d(t,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(23),o=n(9),i=n(30),s=n(2);function a(t,e){var n=t;if(s.isTypedArray(t))return"string"===e?[]:[t.length];if(!Array.isArray(t))return[];for(var r=[];Array.isArray(n)||s.isTypedArray(n)&&"string"!==e;)r.push(n.length),n=n[0];return Array.isArray(t)&&o.env().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function t(e,n,r){if(r=r||[],!Array.isArray(e)&&!s.isTypedArray(e))return void s.assert(0===n.length,(function(){return"Element arr["+r.join("][")+"] is a primitive, but should be an array/TypedArray of "+n[0]+" elements"}));s.assert(n.length>0,(function(){return"Element arr["+r.join("][")+"] should be a primitive, but is an array of "+e.length+" elements"})),s.assert(e.length===n[0],(function(){return"Element arr["+r.join("][")+"] should have "+n[0]+" elements, but has "+e.length+" elements"}));for(var o=n.slice(1),i=0;i<e.length;++i)t(e[i],o,r.concat(i))}(t,r,[]),r}function c(t,e,n,r){if(null!=t&&("numeric"!==t&&t!==e||"numeric"===t&&"string"===e))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+t+" tensor, but got "+e+" tensor")}function l(t,e,n,l){if(void 0===l&&(l="numeric"),t instanceof i.Tensor)return c(l,t.dtype,e,n),t;var u=s.inferDtype(t);if("string"!==u&&["bool","int32","float32"].indexOf(l)>=0&&(u=l),c(l,u,e,n),null==t||!s.isTypedArray(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t){var h=null==t?"null":t.constructor.name;throw new Error("Argument '"+e+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+h+"'")}var p=a(t,u);s.isTypedArray(t)||Array.isArray(t)||(t=[t]);var d="string"!==u?s.toTypedArray(t,u,o.env().getBool("DEBUG")):s.flatten(t,[],!0);return r.ENGINE.makeTensor(d,p,u)}e.inferShape=a,e.convertToTensor=l,e.convertToTensorArray=function(t,e,n,r){if(void 0===r&&(r="numeric"),!Array.isArray(t))throw new Error("Argument "+e+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return t.map((function(t,r){return l(t,e+"["+r+"]",n)}),r)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(23);e.op=function(t){var e=Object.keys(t);if(1!==e.length)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var n=e[0],o=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var i=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r.ENGINE.startScope(n);try{var i=o.apply(void 0,t);return i instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r.ENGINE.endScope(i),i}catch(t){throw r.ENGINE.endScope(null),t}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DTYPE_VALUE_SIZE_MAP={float32:4,int32:4,uint16:2,uint8:1,bool:1}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=n(2),a=n(19),c=n(101),l=n(47);function u(t,e){return r(this,void 0,void 0,(function(){var n,r,s,a,l,u,h,p,d;return o(this,(function(o){switch(o.label){case 0:return null==e&&(e={}),n=null==e.fetchFunc?i.env().platform.fetch:e.fetchFunc,r=t.map((function(t){return n(t,e.requestInit,{isBinary:!0})})),s=0,a=.5,null!=e.onProgress?[3,2]:[4,Promise.all(r)];case 1:return l=o.sent(),[3,4];case 2:return[4,c.monitorPromisesProgress(r,e.onProgress,s,a)];case 3:l=o.sent(),o.label=4;case 4:return u=l.map((function(t){return t.arrayBuffer()})),h=.5,p=1,null!=e.onProgress?[3,6]:[4,Promise.all(u)];case 5:return d=o.sent(),[3,8];case 6:return[4,c.monitorPromisesProgress(u,e.onProgress,h,p)];case 7:d=o.sent(),o.label=8;case 8:return[2,d]}}))}))}function h(t){var e=this;return function(n,i,c){return void 0===i&&(i=""),r(e,void 0,void 0,(function(){var e,r,u,h,p,d,f,y,m,g;return o(this,(function(o){switch(o.label){case 0:if(e=n.map((function(){return!1})),r={},u=null!=c?c.map((function(){return!1})):[],h=[],n.forEach((function(t,n){var o=0;t.weights.forEach((function(t){var i="quantization"in t?t.quantization.dtype:t.dtype,a=l.DTYPE_VALUE_SIZE_MAP[i]*s.sizeFromShape(t.shape),p=function(){e[n]=!0,null==r[n]&&(r[n]=[]),r[n].push({manifestEntry:t,groupOffset:o,sizeBytes:a})};null!=c?c.forEach((function(e,n){e===t.name&&(p(),u[n]=!0)})):p(),h.push(t.name),o+=a}))})),!u.every((function(t){return t})))throw p=c.filter((function(t,e){return!u[e]})),new Error("Could not find weights in manifest with names: "+p.join(", ")+". \nManifest JSON has weights with names: "+h.join(", ")+".");return d=e.reduce((function(t,e,n){return e&&t.push(n),t}),[]),f=[],d.forEach((function(t){n[t].paths.forEach((function(t){var e=i+(i.endsWith("/")?"":"/")+t;f.push(e)}))})),[4,t(f)];case 1:return y=o.sent(),m={},g=0,d.forEach((function(t){for(var e=n[t].paths.length,o=0,i=0;i<e;i++)o+=y[g+i].byteLength;for(var s=new ArrayBuffer(o),c=new Uint8Array(s),l=0,u=0;u<e;u++){var h=new Uint8Array(y[g+u]);c.set(h,l),l+=h.byteLength}r[t].forEach((function(t){var e=s.slice(t.groupOffset,t.groupOffset+t.sizeBytes),n=a.decodeWeights(e,[t.manifestEntry]);for(var r in n)m[r]=n[r]})),g+=e})),[2,m]}}))}))}}e.loadWeightsAsArrayBuffer=u,e.loadWeights=function(t,e,n,i){return void 0===e&&(e=""),r(this,void 0,void 0,(function(){return o(this,(function(r){return[2,h((function(t){return u(t,{requestInit:i})}))(t,e,n)]}))}))},e.weightsLoaderFactory=h},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),n(35),n(16),n(22),n(29),n(26),n(28),n(50),n(27),n(36),r(n(16)),r(n(22)),r(n(29)),r(n(27)),r(n(26)),r(n(28)),r(n(50));var o=n(109);e.version=o.version},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3);let i=class extends o.LitElement{constructor(){super(...arguments),this.disabled=!1,this.hideLabel=!1,this.checked=!1,this.label=""}get value(){return String(this.checked)}focus(){super.focus(),this.shadowRoot.querySelector("button").focus()}render(){const{label:t,checked:e,value:n}=this,r=`${t}, toggled ${e?"on":"off"} `;return o.html`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    user-select: none;
                    cursor: pointer;
                    --focus-color: #8AB4F8;
                }

                button {
                    background: transparent;
                    border: none;
                    outline: 0;
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                }

                button > * {
                    align-self: center;
                }

                .toggle-status{
                    vertical-align: middle;
                }

                .indicator {
                    width: 50px;
                    display: inline-block;
                    vertical-align: middle;
                }

                :host([disabled]) {
                    pointer-events: none;
                    opacity: 0.25;
                }

                :host([checked]) .indicator {
                    border: none;
                    opacity: 1;
                }

                .accent {
                    transition: fill 3s linear;
                }

                svg{
                    transform: scale(0.8);
                }

                #on-indicator .accent {
                    fill: #5F6368;
                }
                #on-indicator .track {
                    fill: #BDC1C6;
                }

                #off-indicator .accent {
                    fill: white;
                    stroke: #BDC1C6;
                }
                #off-indicator .track {
                    fill: #BDC1C6;
                }

                button:focus .accent,
                button:focus #off-indicator .accent,
                button:focus #on-indicator .accent {
                    stroke: var(--focus-color);
                    stroke-width: 2px;
                }
            </style>
                <span class="title">${t||n}</span>
                <button ?disabled=${this.disabled} title=${r} @click=${()=>this.checked=!this.checked}>
                <div class="indicator">
                    <svg
                        id="off-indicator"
                        style="display: ${this.checked?"none":"block"}"
                        width="50px" height="25px" viewBox="0 0 50 25"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>Currently toggled off</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path class="track"
                                d="M38.3152174,21.25 L12.7717391,21.25 C7.79076087,21.25 3.83152174,17.375 3.83152174,12.5 C3.83152174,7.625 7.79076087,3.75 12.7717391,3.75 L38.3152174,3.75 C43.2961957,3.75 47.2554348,7.625 47.2554348,12.5 C47.2554348,17.375 43.2961957,21.25 38.3152174,21.25 Z"></path>
                            <ellipse class="accent" cx="12.5" cy="12.5" rx="11" ry="11"></ellipse>
                        </g>
                    </svg>

                    <svg id="on-indicator" style="display: ${this.checked?"block":"none"}"
                        width="50px" height="25px" viewBox="0 0 50 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>Currently toggled on</title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path class="track"
                                d="M42.2702703,12.5 C42.2702703,17.375 38.4162162,21.25 33.5675676,21.25 L8.7027027,21.25 C3.85405405,21.25 0,17.375 0,12.5 L0,12.5 C0,7.625 3.85405405,3.75 8.7027027,3.75 L33.5675676,3.75 C38.4162162,3.75 42.2702703,7.625 42.2702703,12.5 L42.2702703,12.5 L42.2702703,12.5 Z"></path>
                            <ellipse class="accent" cx="33.5" cy="12.5" rx="11" ry="11"></ellipse>
                        </g>
                    </svg>
                </div>
                <span class="toggle-status">${this.checked?"ON":"OFF"}</span>
            </button>
        `}shouldUpdate(t){return(!t.has("checked")||!this.disabled)&&super.shouldUpdate(t)}update(t){return t.has("checked")&&void 0!==t.get("checked")&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),super.update(t)}};r([o.property({type:Boolean})],i.prototype,"disabled",void 0),r([o.property({type:Boolean})],i.prototype,"hideLabel",void 0),r([o.property({type:Boolean})],i.prototype,"checked",void 0),r([o.property({type:String})],i.prototype,"label",void 0),i=r([o.customElement("tm-toggle")],i),e.ToggleElement=i},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(52)),r(n(111)),r(n(43));var o=n(6);e.html=o.html},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(53),s=n(49),a=n(42),c=n(110),l=n(8);e.barGraphPalette=[["#D84C6F","#FFE9EC"],["#794AEF","#F1F0FF"],["#1967D2","#D2E3FC"],["#E67701","#FFECE2"]],e.defaultWizardSchema={allowPublish:!1,autoLoad:!0,autoNext:!0,classes:[],input:"webcam",inputSettings:{},modelOptions:{},onOpen:()=>{},onClose:()=>{},onReady:()=>{},onPrediction:()=>console.warn("Wizard onPrediction has not been added"),train:{title:"Train",description:"OK, let's train your model!"},type:"image"};class u{constructor(t){this.isReady=!1,this.schema=Object.assign({},e.defaultWizardSchema);const n=Object.keys(this.schema);n.push(...Object.keys(t).filter(t=>n.indexOf(t)<0)),n.forEach(e=>{var n,r;"object"==typeof this.schema[e]?Object.assign(this.schema[e],t[e]):null!==t[e]&&void 0!==t[e]&&(n=this.schema,r=t[e],n[e]=r)}),this.schema.classes.forEach((t,n)=>{t.color=t.color||e.barGraphPalette[n%e.barGraphPalette.length][0]}),console.log("schema: ",this.schema),a(this.schema.classes.length>1,"schema.classes must have at least 2 classes"),this.buttonElement=new c.TeachableButtonElement,this.buttonElement.addEventListener("click",this.open),this.domElement=new i.WizardElement,this.domElement.inputSettings=this.schema.inputSettings,this.domElement.addEventListener("open",this.handleWizardOpen),this.domElement.addEventListener("close",this.handleWizardClose),this.schema.introduction&&(this.schema.introduction.title&&(this.domElement.introduction.title=this.schema.introduction.title),this.schema.introduction.description&&(this.domElement.introduction.description=this.schema.introduction.description)),this.schema.autoLoad&&this.load().then(()=>t.onLoad&&t.onLoad()),this.domElement.classes=this.schema.classes,t.onSampleAdded&&this.domElement.addEventListener("sampleadd",e=>{const n=e.detail;t.onSampleAdded(n)}),t.onTrain&&this.domElement.addEventListener("train",()=>t.onTrain()),t.onTrainComplete&&this.domElement.addEventListener("traincomplete",()=>t.onTrainComplete())}handleWizardOpen(t){this.schema.onOpen()}handleWizardClose(t){this.schema.onClose(),!this.isReady&&this.domElement.isTrained&&(this.isReady=!0,this.schema.onReady())}open(){this.domElement.parentElement||document.body.appendChild(this.domElement),this.domElement.open=!this.domElement.open}createInferenceCamera(t={}){const e=Object.assign({deviceId:this.domElement.lastDeviceId},u.defaultInferenceWebcamSettings,t),n=new s.CroppableWebcamElement;n.width=e.size,n.height=e.size,e.autoPlay?n.play({deviceId:e.deviceId}):n.deviceId=e.deviceId;let r=!0;return n.classList.add("tm-inference-camera"),n.addEventListener("update",()=>o(this,void 0,void 0,(function*(){if(!this.domElement.isTrained||this.domElement.open)return;const t=this.domElement.model;if(r){r=!1;const e=yield t.predict(n.canvas);r=!0,this.schema.onPrediction(e)}}))),n}load(){return this.domElement.loadModel(this.schema.modelOptions)}}u.defaultInferenceWebcamSettings={autoPlay:!0,size:290},r([l.default],u.prototype,"handleWizardOpen",null),r([l.default],u.prototype,"handleWizardClose",null),r([l.default],u.prototype,"open",null),e.Wizard=u},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(3);n(54),n(55),n(57),n(26),n(22),n(29),n(35),n(16);const s=n(36),a=n(8),c=n(37),l=n(42),u=n(88),h=n(43),p=n(108);let d=class extends i.LitElement{constructor(){super(...arguments),this.open=!1,this.classes=[],this.training={title:"Train model",description:i.html`
            Okay! Now click “Train model” to process your images.`},this.introduction={title:"Welcome to the teachablemachine.js training wizard",description:t=>i.html`
            You will be asked to train for classes ${t.classes.map((t,e,n)=>i.html`
                    <span style=${"color: "+t.color}>${t.name}</span>${e<n.length-1?", ":""}
                `)}
        `},this.isRecordingSample=!1,this.stepIndex=0,this.samples=[],this.canProgress=()=>!0,this.__modelHasBeenTrained=!1,this.__lastDeviceId="default"}get isTrained(){return this.__modelHasBeenTrained}get ready(){return this.__modelLoadedPromise}get isLoaded(){return!!this.model}get isTesting(){return this.stepIndex===this.testStepIndex}get testStepIndex(){return this.totalSteps-2}get totalSteps(){return this.classes.length+3}get lastDeviceId(){return this.__lastDeviceId}addSample(t,e){return o(this,void 0,void 0,(function*(){this.samples[t]||(this.samples[t]=[]),this.samples[t].push(e);const n=()=>o(this,void 0,void 0,(function*(){yield this.model.addExample(t,e),this.__modelHasBeenTrained=!1,this.dispatchEvent(new CustomEvent("sampleadd",{detail:{index:t,name:this.classes[t],sample:e}}))}));return this.isLoaded?n():this.ready.then(n)}))}loadModel(t={}){const e=Object.assign({},{version:2,alpha:.35},t);return this.samples=[],c.createTeachable({tfjsVersion:"0.0.0",tmVersion:"0.0.0"},e).then(t=>(this.model=t,this.model.setLabels(this.classes.map(t=>t.name)),this.model.warm(),Promise.resolve()))}train(){return o(this,void 0,void 0,(function*(){this.__modelHasBeenTrained=!1,this.dispatchEvent(new CustomEvent("train")),yield o(void 0,void 0,void 0,(function*(){return new Promise(t=>{window.requestAnimationFrame(t)})})),yield this.model.train({denseUnits:100,epochs:25,learningRate:.001,batchSize:16},{onEpochBegin:t=>o(this,void 0,void 0,(function*(){})),onEpochEnd:t=>o(this,void 0,void 0,(function*(){console.log("on epoch end",t);const e=this.shadowRoot.querySelector("#train-button");e&&(e.value=t/24)})),onTrainEnd:()=>o(this,void 0,void 0,(function*(){console.log("on train end")}))}),this.__modelHasBeenTrained=!0,this.dispatchEvent(new CustomEvent("traincomplete")),console.log(`pre stepIndex: ${this.stepIndex}`),this.stepIndex++,console.log(`post stepIndex: ${this.stepIndex}, ${this.stepIndex-this.classes.length}`),this.requestUpdate()}))}firstUpdated(t){return this.nextButton=this.shadowRoot.querySelector("#next tm-button"),this.backButton=this.shadowRoot.querySelector("#back tm-button"),super.firstUpdated(t)}renderIntroCard(){this.canProgress=()=>!0;const{title:t,description:e}=this.introduction;return i.html`
            <div id="intro">
                <div id="intro-upper-container">
                    <h2 class="intro">${u.reduceTemplate(this,t)}</h2>
                    <p class="intro">${u.reduceTemplate(this,e)}</p>
                    <!-- <h2 class="intro">Let’s train your<br>Yes / No Machine!</h2>
                    <p class="intro">Teach me to answer simple yes / no questions based on what the camera sees. For example: Is your hand up? Are you touching your face? Is there a cat? etc...</p> -->
                </div>
                <!-- <p class="privacy">
                    Everything stays private to you, your images never leave your computer.
                </p> -->
            </div>

        `}renderClassifierCard(t){const{classes:e}=this;if(t<0||t>e.length)throw new Error(`Invalid Classifier card requested, class ${t} does not exist`);this.backButton.disabled=!1,this.canProgress=()=>this.samples&&this.samples[t]&&this.samples[t].length>=Math.max(e[t].minimum||0,1);const n=((t,e)=>{const n=Object.assign({},t,e||{});if(n.frameRate=n.frameRate||1/0,"number"==typeof n.recordSeconds){const t=n.delaySeconds;n.delaySeconds="number"==typeof t?Math.max(0,t):0,n.holdToRecord=!1}else n.recordSeconds=-1,n.delaySeconds=-1,n.holdToRecord=!0;return n})(this.inputSettings,this.classes[t].inputSettings||{});return i.html`
            <div id="left-content">
                <div id="sample-input-container" class="flex-row">
                    <tm-webcam-sample-input
                        id="input-element"
                        @sample=${e=>o(this,void 0,void 0,(function*(){const n=e.target,r=n.lastDisplaySample;if(yield this.addSample(t,r),n.webcamElement&&n.webcamElement.currentMediaStreamTrack){const t=n.webcamElement.currentMediaStreamTrack.getSettings();this.__lastDeviceId=t.deviceId}this.requestUpdate()}))}
                        @play=${()=>console.log("WEBCAM PLAY")}
                        @webcamAccept=${t=>{console.log("webcam accept");const e=t.target;e&&e.webcamElement&&(this.__lastDeviceId=e.webcamElement.deviceId)}}
                        @devicechange=${t=>{const e=t.target;e&&e.webcamElement&&(this.__lastDeviceId=e.webcamElement.deviceId)}}
                        @recordstart=${()=>console.log("record start")}
                        @recordstop=${t=>{this.isRecordingSample=!1}}
                        @settings=${()=>{const t=this.shadowRoot.querySelector(".sample-counter");t&&(t.style.visibility="hidden")}}
                        @settingsexit=${()=>{const t=this.shadowRoot.querySelector(".sample-counter");t&&(t.style.visibility="visible")}}
                        webcamThrottle=${n.frameRate}
                        ?holdToRecord=${n.holdToRecord}
                        recordDelay=${1e3*n.delaySeconds}
                        recordDuration=${1e3*n.recordSeconds}
                        open
                        autoplay
                        showRecord>
                    </tm-webcam-sample-input>
                    <span class="sample-counter">${this.samples[t]?this.samples[t].length:0}/${e[t].minimum||"10"}</span>
                </div>
            </div>
            <div id="right-content">
                <h2 class="top-drop">${this.stepIndex}. ${e[t].title}</h2>
                <p>${e[t].description}</p>
            </div>
        `}renderTrainCard(){l(this.samples.length,"this.samples has no length");for(let t=0;t<this.classes.length;t++){const e=this.samples[t];console.log(e);const n=this.classes[t],r=isFinite(n.minimum)&&n.minimum||1;l(e.length>=r,`Class ${n.name} does not meet minimum sample length of ${r}`)}return this.canProgress=()=>this.isTrained,i.html`
            <div id="left-content">
                <div id="sample-input-container" class="flex-column">
                    <div id="final-classes-container">
                        ${this.classes.map((t,e)=>i.html`
                            <tm-class-samples-animation
                                fps="9"
                                color=${t.color}
                                .samples=${this.samples[e]}
                                label=${t.name}
                                play>
                            </tm-class-samples-animation>
                        `)}
                    </div>
                    <div id="train-button-container">
                        <tm-progress-button id="train-button" value="0" label="Train Model"
                            @click=${()=>o(this,void 0,void 0,(function*(){console.log(`samples: ${this.samples.map((t,e)=>`[${e}] ${this.classes[e].name}: ${t.length}`)}`),yield this.train(),this.canProgress=()=>!0,this.requestUpdate()}))}
                        ></tm-progress-button>
                    </div>
                </div>
            </div>
            <div id="right-content">
                <h2 class="top-drop">${this.stepIndex}. ${this.training.title}</h2>
                <p>${this.training.description}</p>
            </div>
        `}renderRunCard(){let t=[];return i.html`
            <div id="left-content" class="run">
                <div id="sample-input-container" class="flex-row">
                    <tm-webcam-sample-input
                        id="run-input-element"
                        @sample=${e=>o(this,void 0,void 0,(function*(){if(!this.open)return;const n=e.target.lastDisplaySample,r=yield this.model.predict(n);t=t.length?t:Array.from(this.shadowRoot.querySelectorAll("tm-bar-graph"));for(let e=0;e<r.length;e++)t[e].value=r[e].probability}))}
                        open
                        autorecord>
                    </tm-webcam-sample-input>
                    <div id="run-classes">
                        ${this.classes.map((t,e)=>i.html`
                            <tm-bar-graph
                                label=${t.name}
                                display="label"
                                colors=${[t.color,"#eeeeee","#ffffff"].join(" ")}
                                value="0"
                            ></tm-bar-graph>
                        `)}
                    </div>
                </div>
            </div>
            <div id="right-content">
                <h2 class="top-drop">${this.stepIndex}. Try it out!</h2>
                <p>
                    Now try raising your hand up or down, and you should see the bars move accordingly. If it isn’t working, click “Back” to adjust your examples or just click “Done.”
                </p>
            </div>
        `}renderPublishCard(){return i.html`
            <style>
                tm-button {
                    margin: 4px 0;
                }
            </style>
            <h2>Optional: Publish your model for reuse</h2>
            <p>If you publish your model you can quickly reuse it on future visits. No personal data is stored
                and the model is only available for those with the secret link.
            </p>
            <p id="waiting"></p>
            <tm-button
                label="Publish"
                @click=${()=>o(this,void 0,void 0,(function*(){console.log("publish",this.model.getMetadata());const t=h.metadataBrowserHTTPRequest(this.model.getMetadata());console.log(t);const e=(yield this.model.save(t)).responses[0],n=yield e.json();console.log("response",n),this.shadowRoot.querySelector("#waiting").innerHTML=`name: ${n.name}, token: ${n.token}`,p.addPublished(n)}))}></tm-button>
            <tm-button label="No thanks"></tm-button>
        `}getPart(){const t=[()=>this.renderIntroCard()];for(let e=0;e<this.classes.length;e++)t.push(()=>this.renderClassifierCard(e));return t.push(this.renderTrainCard,this.renderRunCard),t[this.stepIndex]()}render(){return i.html`
            <style>
                :host {
                    display: none;
                    /* --background-color: #1867d2; */
                    /* --active-background-color: #1664cd;
                    --hover-background-color: #6ac8d3; */
                    position: relative;
                    z-index: 100;
                    --progress-bar-width: 8px;
                    --progress-bar-height: 8px;
                    --progress-bar-border-radius: 50%;
                    --progress-bar-margin: 0 1px 0 1px;
                    ${s.scrollbar()}
                    *::-webkit-scrollbar {
                        border-radius: 16px;
                    }
                }
                #lightbox {
                    background: var(--lightbox-background, rgba(0, 0, 0, 0.75));
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                }
                :host([open]) {
                    display: block;
                }

                /* Card Basics */
                h2 {
                    font-size: 24px;
                    font-weight: bold;
                    color: var(--header-color, #202124);
                }

                p {
                    font-size: 18px;
                    font-weight: normal;
                    color: var(--color, #202124);
                }

                /* Intro Card */
                #intro-upper-container {
                    flex-grow: 1;
                    flex-shrink: 1;
                }

                h2.intro {
                    margin: 0 0 37px 0;
                    font-size: 40px;
                    color: #1A73E8;
                }

                p.intro {
                    font-size: 24px;
                    font-weight: normal;
                    color: #888888;
                    line-height: 1.4em;
                }

                p.privacy {
                    display: inline-block;
                    border: 1px solid #BDC1C6;
                    border-radius: 8px;
                    color: #888888;
                    font-weight: normal;
                    font-size: 14px;
                    padding: 14px 17px 13px 64px;
                    width: 318px;
                    margin: 0 0 56px 0;
                }

                #intro {
                    display: flex;
                    flex-direction: column;
                    padding: 48px 0 0 58px;
                    box-sizing: border-box;
                    width: 569px;
                }


                /** navigation slot
                    for next, back, cancel, etc
                */
                #navigation {
                    display: flex;
                    width: 100%;
                }

                #navigation tm-button {
                    min-width: 81px;
                    height: 36px;
                }
                #navigation #cancel {
                    display: flex;
                    width: 100px;
                    justify-content: center;
                }
                #navigation #start-over {
                    display: flex;
                    width: 100px;
                    visibility: hidden;
                }
                #cancel tm-button, #start-over tm-button {
                    --background-color: white;
                    --color: #9AA0A6;
                }
                #navigation #middle {
                    display: flex;
                    flex-grow: 1;
                    flex-shrink: 1;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                }
                #navigation #back {
                    display: flex;
                    width: 100px;
                    justify-content: center;
                }
                #back tm-button {
                    --background-color: white;
                    --color: #4285F4;
                }
                #navigation #next {
                    display: flex;
                    width: 100px;
                    justify-content: center;
                }
                #next tm-button {
                    --background-color: #4285F4;
                    --color: white;
                }

                /* Classifier cards */

                .top-drop {
                    margin-top: 65px;
                }

                #content {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                }
                #left-content, #right-content {
                    width: 50%;
                    justify-items: center;
                    flex-grow: 1;
                    flex-shrink: 1;
                    padding-right: 16px;
                }

                #cancel-mobile {
                    display: none;
                }
                #left-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #right-content {

                }

                .sample-counter {
                    display: inline-block;
                    color: white;
                    font-size: 14px;
                    font-weight: 500;
                    position: absolute;
                    bottom: 100px;
                    left: 44px;
                    background: rgba(0, 0, 0, 0.25);
                    width: 54px;
                    text-align: center;
                    border-radius: 24px;
                    padding: 4px 0 4px 0;
                }

                tm-webcam-sample-input {
                    height: unset;
                }
                tm-croppable-webcam {
                    border-radius: 6px;
                }
                ta-card {
                    margin: 0 auto;
                    position: fixed;
                    left: 50%;
                    top: 50%;
                    /* bottom: 105px; */
                    transform: translate(-50%, -50%);
                }

                tm-button {
                    --disabled-background: white;
                    --disabled-color: #80868B;
                }

                #sample-input-container {
                    position: relative;
                    width: 420px;
                    height: 432px;
                    border-radius: 16px;
                    border: 1px solid #BDC1C6;
                    box-sizing: border-box;
                    transition: 0.2s border-color ease-out;
                }

                .flex-row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }

                .flex-column {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-between;
                }

                #input-element {
                    width: 256px;
                }

                #hold-to-record, .btn {
                    width: 200px;
                    height: 50px;
                    margin: 0 auto;
                    --background-color: #1664cd;
                    --color: white;
                }

                #train-button {
                    --background-color: #4285F4;
                    --fill-color: #1664cd;
                    --hover-fill-color: #1664cd;
                    --color: #ffffff;
                }
                #train-button:hover {
                    --color: #4285F4;
                }

                #model-trained {
                    text-align: center;
                    height: 300px;
                    position: relative;
                }

                #model-trained-icon {
                    width: 30px;
                }
                #model-trained-inner {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                #done-button {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translate(-50%, 0);
                }

                /* Training Card */

                #final-classes-container {
                    display: flex;
                    align-items: center;
                    flex-grow: 1;
                    margin: 0 auto;
                    text-align: center;
                }
                #train-button {
                    width: 160px;
                    height: 36px;
                    border: 1px solid #1664cd;
                }
                #train-button-container {
                    display: flex;
                    width: 100%;
                    padding: 30px 0 30px 0;
                    justify-content: center;
                    align-self: flex-end;
                }

                .run #sample-input-container {
                    display: block;
                    overflow: auto;
                    box-sizing: border-box;
                    padding: 16px 31px 0 31px;
                }
                /* Run section */
                #run-classes {
                    display: block;
                    width: 256px;
                    flex-direction: column;
                    margin-top: 16px;
                }
                #run-classes tm-bar-graph {
                    margin-bottom: 8px;
                    border-radius: 8px;
                    --inner-border-radius: 8px;
                    overflow: hidden;
                }


                /* Mobile */
                @media only screen
                    and (min-device-width : 375px)
                    and (max-device-width : 812px)
                    and (orientation : portrait) {
                        /* ta-card {
                            width: 328px;
                            height: 586px;
                        } */
                        #intro {
                            width: 296px;
                            padding: 22px 0 0 17px;
                        }
                        h2.intro {
                            font-size: 28px;
                        }
                        p.intro {
                            font-size: 18px;
                        }
                        p.privacy {
                            width: 296px;
                            padding: 14px 17px 13px 17px;
                            box-sizing: border-box;
                        }

                        #content {
                            flex-direction: column;
                            overflow: auto;
                        }

                        h2 {
                            font-size: 14px;
                            padding: 0;
                            margin: 0;
                            color: #202124;
                        }
                        p {
                            font-size: 14px;
                            margin-top: 0;
                            color: #202124;
                        }

                        #cancel-mobile {
                            display: flex;
                            height: 56px;
                            width: 100%;
                            align-items: center;
                            background: transparent;
                            border: 0;
                            outline: 0;
                        }
                        #cancel-mobile button {
                            width: 24px;
                            height: 24px;
                            margin-left: 7px;
                            cursor: pointer;
                        }

                        #left-content, #right-content {
                            width: 100%;
                        }
                        #right-content {
                            margin-top: 16px;
                            width: 262px;
                            align-self: center;
                        }

                        #sample-input-container {
                            width: 296px;
                            height: 402px;
                        }

                        #navigation > * {
                            align-items: center;
                        }

                        #navigation #cancel {
                            display: none;
                        }
                        #navigation #start-over {
                            display: none;
                        }
                        #navigation #back {
                            order: 1;
                        }
                        #navigation #middle {
                            order: 2;
                        }
                        #navigation #next {
                            order: 3;
                        }
                }
            </style>

            <div id="lightbox">&nbsp;</div>
            <ta-card>
                <div id="content" slot="content">
                    <div id="cancel-mobile" @click=${()=>this.open=!1}>
                        <button id="cancel-mobile-button">${i.svg`
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#5F6368"/>
                                </svg>
                            `}
                        </button>
                    </div>
                    ${this.getPart()}
                </div>
                <div id="navigation" slot="navigation">
                    <div id="cancel">
                        <tm-button label="Cancel" @click=${()=>this.open=!1}></tm-button>
                    </div>
                    <div id="start-over">
                        <tm-button label="Start Over" @click=${()=>console.log("start over")}></tm-button>
                    </div>
                    <div id="middle">
                        <progress-bars slot="progress" steps=${this.totalSteps} value=${this.stepIndex+1}></progress-bars>
                    </div>
                    <div id="back">
                        <tm-button ?disabled=${0===this.stepIndex} label="Back" @click=${()=>{this.stepIndex>0&&(this.stepIndex--,this.requestUpdate())}}></tm-button>
                    </div>
                    <div id="next">
                        <tm-button ?disabled=${!this.canProgress()} label=${0===this.stepIndex?"Start":this.stepIndex+1<this.totalSteps?"Next":"Done"} @click=${()=>{this.stepIndex+1<this.totalSteps?(this.stepIndex++,console.log("request update stepIndex",this.stepIndex),this.requestUpdate()):this.open=!1}}></tm-button>
                    </div>
            </ta-card>
        `}updated(t){return t.has("open")&&this.dispatchEvent(new CustomEvent(this.open?"open":"close",{bubbles:!0})),super.updated(t)}};r([i.property({type:Boolean,reflect:!0})],d.prototype,"open",void 0),r([i.property({type:Array})],d.prototype,"classes",void 0),r([i.property({type:Object})],d.prototype,"inputSettings",void 0),r([i.property({type:Object})],d.prototype,"training",void 0),r([i.property({type:Object})],d.prototype,"introduction",void 0),r([a.default],d.prototype,"renderIntroCard",null),r([a.default],d.prototype,"renderClassifierCard",null),r([a.default],d.prototype,"renderTrainCard",null),r([a.default],d.prototype,"renderRunCard",null),r([a.default],d.prototype,"renderPublishCard",null),d=r([i.customElement("ta-wizard")],d),e.WizardElement=d},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3);n(16);let i=class extends o.LitElement{render(){return o.html`
            <style>
                :host {
                    box-sizing: border-box;
                    /* padding: 20px 40px; */
                    background-color: white;
                    width:  1004px;
                    height: 560px;
                    border-radius: 8px;
                    /* border: 1px solid gray; */
                    color: #e1e2e3;
                    text-align: left;
                    box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
                }

                #container {
                    display: flex;
                    flex-direction: column;
                }
                #main {
                    /* flex-grow: 1;
                    flex-shrink: 1; */
                    height: 496px;
                    overflow: hidden;
                }
                #navigation {
                    display: flex;
                    width: 100%;
                    height: 66px;
                    box-sizing: border-box;
                    border-top: 1px solid #DADCE0;
                    justify-items: center;
                    align-items: center;
                }

                @media only screen
                    and (min-device-width : 375px)
                    and (max-device-width : 812px)
                    and (orientation : portrait) {
                        :host {
                            width: 328px;
                            /* height: 586px; */
                            height: 646px;
                        }
                        #main {
                            /* height: 519px; */
                            height: 579px;
                        }

                        #navigation {
                            height: 67px;
                        }
                }
            </style>
            <div id="container">
                <section id="main">
                    <slot name="content"></slot>
                </section>
                <nav id="navigation">
                    <slot name="navigation"></slot>
                </div>
            </div>
        `}};i=r([o.customElement("ta-card")],i),e.CardElement=i},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3),i=n(56);let s=class extends o.LitElement{constructor(){super(...arguments),this.steps=3,this.value=0}render(){return o.html`
            <style>
                :host {
                    display: block;
                    text-align: center;
                }
                .step {
                    width: var(--progress-bar-width, 65px);
                    height: var(--progress-bar-height, 5px);
                    border-radius: var(--progress-bar-border-radius, 0);
                    display: inline-block;
                    background-color: var(--color-off, #e1e2e3);
                    margin: var(--progress-bar-margin, 0);
                }
                .step.complete {
                    background-color: var(--color-on, #1664cd);
                }
            </style>
            ${i.times(this.steps,t=>o.html`
                <div class="step ${t<this.value?"complete":"non"}"></div>
            `)}
        `}};r([o.property({type:Number})],s.prototype,"steps",void 0),r([o.property({type:Number})],s.prototype,"value",void 0),s=r([o.customElement("progress-bars")],s),e.ProgressBarsElement=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.copy=function(t,e=[]){if(t===e)return e;for(let n=0;n<t.length;n++)e[n]=t[n];return e},e.empty=(t,e=0)=>{for(;t.length>Math.max(0,e);)t.pop();return t},e.each=(t,e)=>{for(let n=0;n<t.length;n++){if(!1===e(t[n],n,t))return}},e.filter=(t,n,r=[])=>{e.empty(r);for(let e=0;e<t.length;e++){n(t[e],e,t)&&r.push(t[e])}return r};const r=[];e.filterCompare=(t,n,o=[])=>{const i=t===o,s=i?e.empty(r):o;for(let e=0;e<t.length;e++){const r=t[e];let o=!0;for(let i=1;i<t.length;i++){if(e===i)continue;if(!n(r,t[i],t)){o=!1;break}}o&&s.push(r)}if(i){e.empty(t);for(let e=0;e<s.length;e++)t[e]=s[e];return t}return s},e.last=t=>t[t.length-1],e.map=(t,e,n=[])=>{for(let r=0;r<t.length;r++)n[r]=e(t[r],r,t);return n},e.pluck=(t,e,n=[])=>{for(let r=0;r<t.length;r++)n[r]=t[r][e];return n},e.times=(t,e,n=[])=>{for(let r=0;r<t;r++)n[r]=e(r,t);return n}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3),i=n(24),s=n(8);let a=class extends o.LitElement{constructor(){super(),this.color="red",this.samples=[],this.label="",this.play=!1,this.fps=10,this.showClassName=!0,this.loop=new i.Animitter,this.loop.on("update",this.handleLoopUpdate)}get activeIndex(){return this.loop.frameCount%this.samples.length}connectedCallback(){return this.play&&this.hasUpdated>0&&this.loop.start(),super.connectedCallback()}disconnectedCallback(){return this.loop.stop(),super.disconnectedCallback()}handleLoopUpdate(t,e,n){if(!this.sampleContainer)return;const r=this.samples[this.activeIndex];this.sampleContainer.innerHTML="",this.sampleContainer.appendChild(r)}firstUpdated(t){return this.sampleContainer=this.shadowRoot.querySelector(".sample-preview-container"),this.play&&this.loop.start(),super.firstUpdated(t)}updated(t){return t.has("play")&&this.loop[this.play?"start":"stop"](),t.has("fps")&&this.loop.setFPS(this.fps),super.updated(t)}render(){return o.html`
            <style>
                :host {
                    display: inline-block;
                    width: 128px;
                    margin: 4px;
                }
                .sample-preview-container {
                    box-sizing: border-box;
                    border-radius: 10px;
                    width: 128px;
                    height: 128px;
                }
                canvas {
                    width: 124px;
                    height: 124px;
                    margin: 0 12px 0 0;
                    border-radius: 8px;
                    box-sizing: border-box;
                    border: 2px solid white;
                }
            </style>

            <div class="sample-preview-container" style="border: 2px solid ${this.color}">
            </div>
            <span style="color: ${this.color}">${this.label}</span>
        `}};r([o.property({type:String})],a.prototype,"color",void 0),r([o.property({type:Array})],a.prototype,"samples",void 0),r([o.property({type:String})],a.prototype,"label",void 0),r([o.property({type:Boolean,reflect:!0})],a.prototype,"play",void 0),r([o.property({type:Number})],a.prototype,"fps",void 0),r([o.property({type:Boolean,reflect:!0})],a.prototype,"showClassName",void 0),r([s.default],a.prototype,"handleLoopUpdate",null),a=r([o.customElement("tm-class-samples-animation")],a),e.ClassSamplesAnimationElement=a},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function i(){}function s(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function a(t,e,n,r,i){if("function"!=typeof n)throw new TypeError("The listener must be a function");var a=new s(n,r||t,i),c=o?o+e:e;return t._events[c]?t._events[c].fn?t._events[c]=[t._events[c],a]:t._events[c].push(a):(t._events[c]=a,t._eventsCount++),t}function c(t,e){0==--t._eventsCount?t._events=new i:delete t._events[e]}function l(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(o=!1)),l.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)r.call(t,e)&&n.push(o?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},l.prototype.listeners=function(t){var e=o?o+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,s=new Array(i);r<i;r++)s[r]=n[r].fn;return s},l.prototype.listenerCount=function(t){var e=o?o+t:t,n=this._events[e];return n?n.fn?1:n.length:0},l.prototype.emit=function(t,e,n,r,i,s){var a=o?o+t:t;if(!this._events[a])return!1;var c,l,u=this._events[a],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,n),!0;case 4:return u.fn.call(u.context,e,n,r),!0;case 5:return u.fn.call(u.context,e,n,r,i),!0;case 6:return u.fn.call(u.context,e,n,r,i,s),!0}for(l=1,c=new Array(h-1);l<h;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var p,d=u.length;for(l=0;l<d;l++)switch(u[l].once&&this.removeListener(t,u[l].fn,void 0,!0),h){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,e);break;case 3:u[l].fn.call(u[l].context,e,n);break;case 4:u[l].fn.call(u[l].context,e,n,r);break;default:if(!c)for(p=1,c=new Array(h-1);p<h;p++)c[p-1]=arguments[p];u[l].fn.apply(u[l].context,c)}}return!0},l.prototype.on=function(t,e,n){return a(this,t,e,n,!1)},l.prototype.once=function(t,e,n){return a(this,t,e,n,!0)},l.prototype.removeListener=function(t,e,n,r){var i=o?o+t:t;if(!this._events[i])return this;if(!e)return c(this,i),this;var s=this._events[i];if(s.fn)s.fn!==e||r&&!s.once||n&&s.context!==n||c(this,i);else{for(var a=0,l=[],u=s.length;a<u;a++)(s[a].fn!==e||r&&!s[a].once||n&&s[a].context!==n)&&l.push(s[a]);l.length?this._events[i]=1===l.length?l[0]:l:c(this,i)}return this},l.prototype.removeAllListeners=function(t){var e;return t?(e=o?o+t:t,this._events[e]&&c(this,e)):(this._events=new i,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=o,l.EventEmitter=l,t.exports=l},function(t,e,n){(function(e){for(var r=n(60),o="undefined"==typeof window?e:window,i=["moz","webkit"],s="AnimationFrame",a=o["request"+s],c=o["cancel"+s]||o["cancelRequest"+s],l=0;!a&&l<i.length;l++)a=o[i[l]+"Request"+s],c=o[i[l]+"Cancel"+s]||o[i[l]+"CancelRequest"+s];if(!a||!c){var u=0,h=0,p=[];a=function(t){if(0===p.length){var e=r(),n=Math.max(0,1e3/60-(e-u));u=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return p.push({handle:++h,callback:t,cancelled:!1}),h},c=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){c.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=c}}).call(this,n(21))},function(t,e,n){(function(e){(function(){var n,r,o,i,s,a;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-s)/1e6},r=e.hrtime,i=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),a=1e9*e.uptime(),s=i-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(25))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(34),o=t=>t;e.add=(t,e,n)=>r.fastMap(t,(t,n)=>t+e[n],n),e.angleBetween=(t,e)=>Math.atan2(e[1]-t[1],e[0]-t[0]),e.copy=(t,e=[NaN,NaN])=>r.fastMap(t,o,e),e.distance=(t,e)=>Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)),e.equal=(t,e)=>t[0]===e[0]&&t[1]===e[1],e.lerp=function(t,e,n,r=[NaN,NaN]){return r[0]=(e[0]-t[0])*n+t[0],r[1]=(e[1]-t[1])*n+t[1],r},e.magnitude=([t,e])=>t*t+e*e,e.normalize=(t,n=[NaN,NaN])=>{let r=e.magnitude(t);const[o,i]=t;return r>0&&(r=1/Math.sqrt(r),n[0]=o*r,n[1]=i*r),n},e.scale=(t,e,n)=>r.fastMap(t,(t,n)=>{return t*(r=e,Array.isArray(r)&&2===r.length&&"number"==typeof r[0]?e[n]:e);var r},n),e.sub=(t,e,n)=>r.fastMap(t,(t,n)=>t-e[n],n),e.toCartesian=function([t,e],n=[NaN,NaN]){return n[0]=t*Math.cos(e),n[1]=t*Math.sin(e),n},e.toPolar=function([t,e],n=[NaN,NaN]){return n[0]=Math.sqrt(t*t+e*e),n[1]=Math.atan2(e,t),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isTouchEvent=t=>t&&"string"==typeof t.type&&0===t.type.indexOf("touch")&&!!t.touches;const r=t=>"function"==typeof t.appendChild;function o(t,e=!0,n=[0,0]){let o,i;if(r(t)){if(!t.ownerDocument)return n;if(i=t.ownerDocument,!t.parentElement)return n;if(void 0!==t.getBoundingClientRect){const e=t.getBoundingClientRect();n[0]=e.left,n[1]=e.top}o=(t=>(t=>null!==t&&t===t.window)(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow))(i)}else n[0]=t.left,n[1]=t.top,o=window,i=document;const s={x:0,y:0},a=document.documentElement;return e||(s.y=o.pageYOffset||a.scrollTop,s.x=o.pageXOffset||a.scrollLeft),n[1]=n[1]+s.y-(a.clientTop||0),n[0]=n[0]+s.x-(a.clientLeft||0),n}e.elementOffset=o;const i=[0,0];function s(t,e,n,r,s){if(!n&&!r)throw new Error("mousePosition requires either element or offset be provided");return n&&!r&&(r=o(n,!1,i)),r=r,(s=s||[-1,-1])[0]=t-r[0],s[1]=e-r[1],s}e.mousePosition=s,e.mousePositionFromEvent=function(t,n,o,i){let a,c;if(e.isTouchEvent(t)?t.touches&&t.touches[0]?(a=t.touches[0].clientX,c=t.touches[0].clientY):(a=NaN,c=NaN):(a=t.clientX,c=t.clientY),!n&&r(t.target)&&(n=t.target),!n)throw new Error("mousePositionFromEvent requires an element parameter");return s(a,c,n,o,i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(34);e.clamp=(t,e=0,n=1)=>Math.min(n,Math.max(e,t)),e.degrees=t=>180*t/Math.PI,e.radians=t=>t*Math.PI/180,e.flipCoin=(t=.5)=>Math.random()>t,e.lerp=(t,e,n)=>n*(e-t)+t,e.interpolateArray=(t,e,n,o,i=[])=>r.fastMap(e,(e,r)=>{return t(e,n[r],(i=o,Array.isArray(i)||(t=>!!t.length&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteLength)(i)?o[r]:o));var i},i),e.lerpArray=(t,n,r,o=[])=>e.interpolateArray(e.lerp,t,n,r,o),e.normalizedRandom=()=>2*Math.random()-1,e.randomRange=(t=0,e=1)=>Math.random()*(e-t)+t,e.range=t=>[Math.min(...t),Math.max(...t)],e.scalemap=function(t,e,n,r,o){return r+(t-e)/(n-e)*(o-r)},e.toPrecision=(t,e=.001)=>Math.floor(t/e)*e,e.weightedRandom=(t,n)=>{n||(n=t.reduce((t,e)=>t+e[0],0));const r=Math.floor(e.randomRange(0,n));let o=null,i=n;for(const e of t)if(i-=e[0],i<=r){o=e[1];break}return o}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(14),s=n(3),a=n(32),c=n(65);e.defaultSampleProcessor=(t,e,n,r)=>o(void 0,void 0,void 0,(function*(){if(!a.isCanvasImageSource(e))throw new Error("Default Processor requires `sample` to be HTMLCanvasElement");const o=a.cropTo(e,t.sampleSize);return{sample:o,displaySample:n||o,uid:r||c.generate()}}));class l extends s.LitElement{constructor(){super(...arguments),this.stats=!1,this.label=null,this.buttonLabel="",this.buttonSVG="",this.open=!1,this.disabled=!1,this.sampleSize=224,this.runSample=!1,this.skipDisplaySample=!1,this.maxSamples=1/0,this.samplesArePlayable=!1,this.processData={},this.mapAsyncSample=e.defaultSampleProcessor,this._samples=[],this._sampleUIDs=[],this._tapAsyncPreview=null,this._displaySamples=[]}static get styles(){return[s.css`
                tm-stats {
                    background: --stats-background;
                    color: --stats-color;
                    padding: var(--stats-padding, 5px);
                    position: var(--stats-position, absolute);
                    top: var(--stats-top, 0);
                    bottom: var(--stats-bottom, unset);
                    left: var(--stats-left, 0);
                    right: var(--stats-right, unset);
                    z-index: 100;
                }
            `]}set tapAsyncPreview(t){throw new Error("hook not implemented on this SampleInputElement")}get tapAsyncPreview(){return this._tapAsyncPreview}get lastDisplaySample(){return this._displaySamples[this._displaySamples.length-1]}get lastSample(){return this._samples[this._samples.length-1]}get lastSampleUID(){return this._sampleUIDs[this._sampleUIDs.length-1]}get samples(){return this._samples}get displaySamples(){return this._displaySamples}get sampleUIDs(){return this._sampleUIDs}get isSampleInput(){return!0}addSample(t){for(i.util.assert(null!=t.sample,()=>"received an empty or invalid sample"),i.util.assert(null!=t.displaySample,()=>"received an invalid displaySample"),this._samples.push(t.sample),this._displaySamples.push(t.displaySample),this._sampleUIDs.push(t.uid);this._samples.length>this.maxSamples;)this._samples.shift();for(;this._displaySamples.length>this.maxSamples;)this._displaySamples.shift();for(;this._sampleUIDs.length>this.maxSamples;)this._sampleUIDs.shift();this.requestUpdate(),this.__dispatchSample()}containsUID(t){return this._sampleUIDs.indexOf(t)>=0}clearSamples(){this._samples=[],this._displaySamples=[],this._sampleUIDs=[],this.dispatchEvent(new CustomEvent("clear",{bubbles:!0,composed:!0}))}_dispatchRecordStart(){this.dispatchEvent(new CustomEvent("recordstart",{bubbles:!0,composed:!1}))}_dispatchRecordStop(){this.dispatchEvent(new CustomEvent("recordstop",{bubbles:!0,composed:!1}))}__dispatchSample(){this._statsElement&&this._statsElement.now(),this.dispatchEvent(new CustomEvent("sample",{bubbles:!0,composed:!1}))}updated(t){return t.has("stats")&&(this.stats?(this._statsElement=this._statsElement||document.createElement("tm-stats"),this._statsElement.now(),this._statsElement.now(),this.shadowRoot.appendChild(this._statsElement),this._statsElement.mapStats=t=>`${t.fps} fps, ${this.samples.length} / ${this.maxSamples} samples`):this._statsElement&&(this._statsElement.parentNode&&this._statsElement.parentNode.removeChild(this._statsElement),this._statsElement=null)),super.updated(t)}}r([s.property({type:Boolean,reflect:!0})],l.prototype,"stats",void 0),r([s.property({type:String})],l.prototype,"label",void 0),r([s.property({type:String})],l.prototype,"buttonLabel",void 0),r([s.property({type:String})],l.prototype,"buttonSVG",void 0),r([s.property({type:Boolean,reflect:!0})],l.prototype,"open",void 0),r([s.property({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),r([s.property({type:Number})],l.prototype,"sampleSize",void 0),r([s.property({type:Boolean})],l.prototype,"runSample",void 0),r([s.property({type:Boolean})],l.prototype,"skipDisplaySample",void 0),r([s.property({type:Number})],l.prototype,"maxSamples",void 0),r([s.property({type:Boolean})],l.prototype,"samplesArePlayable",void 0),e.AbstractSampleInputElement=l},function(t,e,n){var r,o=n(66),i=n(68),s="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";function a(t,e){return e(t.toLowerCase().replace(/-/g,""))}t.exports=function(){function t(t){var e=t||s,n=o(o.HEX,e),r=o(e,o.HEX),c=function(){return a(i(),n)};return{new:c,generate:c,uuid:i,fromUUID:function(t){return a(t,n)},toUUID:function(t){return function(t,e){for(var n,r=e(t),o="",i=0,s=32-r.length;i<s;++i)o+="0";return[(n=(o+r).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/))[1],n[2],n[3],n[4],n[5]].join("-")}(t,r)},alphabet:e}}return t.constants={flickrBase58:s,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},t.uuid=i,t.generate=function(){return r||(r=o(o.HEX,s)),a(i(),r)},t}()},function(t,e,n){var r=n(67);function o(t,e){var n=new r(t,e);return function(t){return n.convert(t)}}o.BIN="01",o.OCT="01234567",o.DEC="0123456789",o.HEX="0123456789abcdef",t.exports=o},function(t,e,n){"use strict";function r(t,e){if(!(t&&e&&t.length&&e.length))throw new Error("Bad alphabet");this.srcAlphabet=t,this.dstAlphabet=e}r.prototype.convert=function(t){var e,n,r,o={},i=this.srcAlphabet.length,s=this.dstAlphabet.length,a=t.length,c="string"==typeof t?"":[];if(!this.isValid(t))throw new Error('Number "'+t+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return t;for(e=0;e<a;e++)o[e]=this.srcAlphabet.indexOf(t[e]);do{for(n=0,r=0,e=0;e<a;e++)(n=n*i+o[e])>=s?(o[r++]=parseInt(n/s,10),n%=s):r>0&&(o[r++]=0);a=r,c=this.dstAlphabet.slice(n,n+1).concat(c)}while(0!==r);return c},r.prototype.isValid=function(t){for(var e=0;e<t.length;++e)if(-1===this.srcAlphabet.indexOf(t[e]))return!1;return!0},t.exports=r},function(t,e,n){var r=n(69),o=n(70);t.exports=function(t,e,n){var i=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var s=(t=t||{}).random||(t.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e)for(var a=0;a<16;++a)e[i+a]=s[a];return e||o(s)}},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,o=n;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(3),s=n(33),a=(t,e)=>{const n=t.label||t.deviceId||e+1+" - "+t.kind;return n.length>36?n.slice(0,33)+"...":n};class c extends i.LitElement{constructor(){super(...arguments),this.value="",this.kind="any",this.hideWhenEmpty=!1,this.devices=[],this.parseLabel=a}refreshDevices(){return o(this,void 0,void 0,(function*(){const t=(yield s.enumerateDevices()).filter(t=>t.kind===this.kind);return t.length>1&&"audioinput"===this.kind&&t[0].groupId===t[1].groupId&&t.shift(),t}))}firstUpdated(t){this.refreshDevices().then(t=>{this.devices=t,this.requestUpdate()}).catch(t=>console.error("error",t)),super.firstUpdated(t)}__hasBlockedIds(t){if(t.length>0){if(""===t[0].label)return!0}return!1}render(){const t="videoinput"===this.kind?"Webcam":"Microphone";return i.html`
            <style>
                :host {
                    display: ${this.devices.length<2?"none":"block"};
                }

                .select-container {
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 4px;
                    border: none;
                    background: url('/assets/down-arrow.svg') #D2E3FC 95% / 5% no-repeat;
                    margin-bottom: 10px;
                }

                .select-container select {
                    color: #1967D2;
                    outline: none;
                    font-weight: 400;
                    font-size: 12px;
                    padding: 8px 12px;
                    width: 100%;
                    border: none;
                    border: 2px solid transparent;
                    box-shadow: none;
                    background-color: transparent;
                    background-image: none;
                    -webkit-appearance: none;
                       -moz-appearance: none;
                            appearance: none;
                }

                .select-style select:focus {
                    outline: none;
                }

                .select-container select:focus {
                    border: 2px solid #8AB4F8;
                }
            </style>
            <div class='select-container'>
                <select
                    id="device-selector"
                    @change=${t=>{const e=t.target;this.value=e.value,t.stopPropagation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}}
                    style=${this.devices.length<=1&&this.hideWhenEmpty?"display: none;":"display: block"}>
                    <option disabled selected value=''>Switch ${t}</option>

                    ${this.__hasBlockedIds(this.devices)?this.devices.map((e,n)=>i.html`
                                <option value=${e.deviceId}>
                                    ${t+" "+(n+1)}
                                </option>`):this.devices.map((t,e)=>i.html`
                                <option value=${t.deviceId}>
                                    ${this.parseLabel(t,e)}
                                </option>`)}
                </select>
            </div>
        `}}r([i.property({type:String})],c.prototype,"value",void 0),r([i.property({type:String})],c.prototype,"kind",void 0),r([i.property({type:Boolean})],c.prototype,"hideWhenEmpty",void 0),e.MediaDeviceSelectElement=c,customElements.define("tm-media-device-select",c)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=new class{constructor(){this.__storageKey="tm2Settings",null===this.__getSettings()&&this.__saveSettings({})}__getSettings(){return JSON.parse(localStorage.getItem(this.__storageKey))}__getSettingsNamespace(t){const e=this.__getSettings();return e.hasOwnProperty(t)||(e[t]={}),e[t]}__saveSettings(t){localStorage.setItem(this.__storageKey,JSON.stringify(t))}getSetting(t,e,n=null){const r=this.__getSettingsNamespace(t);return r.hasOwnProperty(e)?r[e]:n}setSetting(t,e){const n=this.__getSettings();n[t]=e,this.__saveSettings(n)}getWebcamSetting(t){return this.getSetting("webcam",t)}getMicrophoneSetting(t){return this.getSetting("microphone",t)}getOnboardSetting(t){return this.getSetting("onboard",t)}getWarningsSetting(t){return!1!==this.getSetting("warnings",t)}setWebcamSetting(t){this.setSetting("webcam",t)}setMicrophoneSetting(t){this.setSetting("microphone",t)}setOnboardSetting(t,e){const n=this.__getSettingsNamespace("onboard");n[t]=e,this.setSetting("onboard",n)}setWarningsSetting(t,e){const n=this.__getSettingsNamespace("warnings");n[t]=e,this.setSetting("warnings",n)}};e.default=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(14),c=n(14),l=n(39),u=n(38),h=n(74);function p(t,e){for(var n,r=t.length,o=t.slice(),i=r-1;i>0;i-=1){var s=void 0;n=[o[s=e?Math.floor(e()*(i+1)):Math.floor(Math.random()*(i+1))],o[i]],o[i]=n[0],o[s]=n[1]}return o}var d=function(t){function e(e,n){var r=t.call(this,a.sequential(),n)||this;return r.totalSamples=0,r.examples=[],r.truncatedModel=e,r}return o(e,t),Object.defineProperty(e.prototype,"asSequentialModel",{get:function(){return this.model},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTrained",{get:function(){return!!this.model&&this.model.layers&&this.model.layers.length>2},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPrepared",{get:function(){return!!this.trainDataset},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"numClasses",{get:function(){return this._metadata.labels.length},enumerable:!0,configurable:!0}),e.prototype.addExample=function(t,e){return i(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(i){var s;return n="object"==typeof(s=e).dataId&&"object"===s.shape?e:l.capture(e),r=this.truncatedModel.predict(n),o=r.dataSync(),n.dispose(),r.dispose(),this.examples[t].push(o),this.totalSamples++,[2]}))}))},e.prototype.predict=function(e,n){return void 0===n&&(n=!1),i(this,void 0,void 0,(function(){return s(this,(function(r){if(!this.model)throw new Error("Model has not been trained yet, called train() first");return[2,t.prototype.predict.call(this,e,n)]}))}))},e.prototype.predictTopK=function(e,n,r){return void 0===n&&(n=10),void 0===r&&(r=!1),i(this,void 0,void 0,(function(){return s(this,(function(o){if(!this.model)throw new Error("Model has not been trained yet, called train() first");return[2,t.prototype.predictTopK.call(this,e,n,r)]}))}))},e.prototype.prepare=function(){for(var t in this.examples)if(0===t.length)throw new Error("Add some examples before training");var e=this.convertToTfDataset();this.trainDataset=e.trainDataset,this.validationDataset=e.validationDataset},e.prototype.convertToTfDataset=function(){for(var t=0;t<this.examples.length;t++)this.examples[t]=p(this.examples[t],this.seed);var e=[],n=[],r=function(t){var r,i,s,a=(r=t,i=o.numClasses,(s=new Array(i).fill(0))[r]=1,s),c=o.examples[t].length,l=c-Math.ceil(.15*c),u=o.examples[t].slice(0,l).map((function(t){return{data:t,label:a}})),h=o.examples[t].slice(l).map((function(t){return{data:t,label:a}}));e=e.concat(u),n=n.concat(h)},o=this;for(t=0;t<this.examples.length;t++)r(t);e=p(e,this.seed),n=p(n,this.seed);var i=a.data.array(e.map((function(t){return t.data}))),s=a.data.array(n.map((function(t){return t.data}))),c=a.data.array(e.map((function(t){return t.label}))),l=a.data.array(n.map((function(t){return t.label})));return{trainDataset:a.data.zip({xs:i,ys:c}),validationDataset:a.data.zip({xs:s,ys:l})}},e.prototype.save=function(t,e){return i(this,void 0,void 0,(function(){return s(this,(function(n){return[2,this.model.save(t,e)]}))}))},e.prototype.train=function(t,e){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var n,r,o,i,l,u,h,p,d,f=this;return s(this,(function(s){switch(s.label){case 0:if(n=e.onTrainEnd||function(){},e.onTrainEnd=function(t){f.__stopTrainingResolve&&(f.__stopTrainingResolve(),f.__stopTrainingResolve=null),n(t)},this.isPrepared||this.prepare(),r=this.getLabels().length,c.util.assert(r===this.numClasses,(function(){return"Can not train, has "+r+" labels and "+f.numClasses+" classes"})),o=this.truncatedModel.outputs[0].shape.slice(1),i=a.util.sizeFromShape(o),l=this.seed?a.initializers.varianceScaling({seed:3.14}):a.initializers.varianceScaling({}),this.trainingModel=a.sequential({layers:[a.layers.dense({inputShape:[i],units:t.denseUnits,activation:"relu",kernelInitializer:l,useBias:!0}),a.layers.dense({kernelInitializer:l,useBias:!1,activation:"softmax",units:this.numClasses})]}),u=a.train.adam(t.learningRate),this.trainingModel.compile({optimizer:u,loss:"categoricalCrossentropy",metrics:["accuracy"]}),!(t.batchSize>0))throw new Error("Batch size is 0 or NaN. Please choose a non-zero fraction");return h=this.trainDataset.batch(t.batchSize),p=this.validationDataset.batch(t.batchSize),[4,this.trainingModel.fitDataset(h,{epochs:t.epochs,validationData:p,callbacks:e})];case 1:return s.sent(),(d=a.sequential()).add(this.truncatedModel),d.add(this.trainingModel),this.model=d,u.dispose(),[2,this.model]}}))}))},e.prototype.prepareDataset=function(){for(var t=0;t<this.numClasses;t++)this.examples[t]=[]},e.prototype.setLabel=function(t,e){this._metadata.labels[t]=e},e.prototype.setLabels=function(t){this._metadata.labels=t,this.prepareDataset()},e.prototype.getLabel=function(t){return this._metadata.labels[t]},e.prototype.getLabels=function(){return this._metadata.labels},e.prototype.setName=function(t){this._metadata.modelName=t},e.prototype.getName=function(){return this._metadata.modelName},e.prototype.stopTraining=function(){var t=this;return new Promise((function(e,n){t.trainingModel.stopTraining=!0,t.__stopTrainingResolve=e}))},e.prototype.dispose=function(){this.trainingModel.dispose(),t.prototype.dispose.call(this)},e.prototype.calculateAccuracyPerClass=function(){return i(this,void 0,void 0,(function(){var t,e,n,r,o,c,l,u,h,p,d,f,y,m,g,v,b,w,_=this;return s(this,(function(x){switch(x.label){case 0:return t=this.validationDataset.mapAsync((function(t){return i(_,void 0,void 0,(function(){return s(this,(function(e){return[2,t.xs]}))}))})),e=this.validationDataset.mapAsync((function(t){return i(_,void 0,void 0,(function(){return s(this,(function(e){return[2,t.ys]}))}))})),n=Math.min(e.size,32),r=Math.ceil(e.size/n),o=t.batch(n),c=e.batch(n),[4,o.iterator()];case 1:return l=x.sent(),[4,c.iterator()];case 2:u=x.sent(),h=[],p=[],w=0,x.label=3;case 3:return w<r?[4,l.next()]:[3,7];case 4:return d=x.sent(),f=this.trainingModel.predict(d.value),y=f.argMax(1),h.push(y),[4,u.next()];case 5:m=x.sent(),g=m.value.argMax(1),p.push(g),d.value.dispose(),f.dispose(),m.value.dispose(),x.label=6;case 6:return w++,[3,3];case 7:if(v=a.concat(p),b=a.concat(h),1!==r)for(w=0;w<h.length;w++)h[w].dispose(),p[w].dispose();return[2,{reference:v,predictions:b}]}}))}))},e.prototype.setSeed=function(t){this.seed=h(t)},e}(u.CustomMobileNet);e.TeachableMobileNet=d,e.createTeachable=function(t,e){return i(this,void 0,void 0,(function(){var n;return s(this,(function(r){switch(r.label){case 0:return[4,u.loadTruncatedMobileNet(e)];case 1:return n=r.sent(),[2,new d(n,t)]}}))}))}},function(t,e,n){var r=n(75),o=n(76),i=n(77),s=n(78),a=n(79),c=n(80),l=n(81);l.alea=r,l.xor128=o,l.xorwow=i,l.xorshift7=s,l.xor4096=a,l.tychei=c,t.exports=l},function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e,n=this,r=(e=4022871197,function(t){t=t.toString();for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)});n.next=function(){var t=2091639*n.s0+2.3283064365386963e-10*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=t-(n.c=0|t)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(t),n.s0<0&&(n.s0+=1),n.s1-=r(t),n.s1<0&&(n.s1+=1),n.s2-=r(t),n.s2<0&&(n.s2+=1),r=null}function a(t,e){return e.c=t.c,e.s0=t.s0,e.s1=t.s1,e.s2=t.s2,e}function c(t,e){var n=new s(t),r=e&&e.state,o=n.next;return o.int32=function(){return 4294967296*n.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=c:n(7)&&n(18)?void 0===(r=function(){return c}.call(e,n,e,o))||(o.exports=r):this.alea=c}(0,t,n(7))}).call(this,n(17)(t))},function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var t=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^t^t>>>8},t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),e.next()}function a(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}function c(t,e){var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=c:n(7)&&n(18)?void 0===(r=function(){return c}.call(e,n,e,o))||(o.exports=r):this.xor128=c}(0,t,n(7))}).call(this,n(17)(t))},function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this,n="";e.next=function(){var t=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^t^t<<1)|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,t===(0|t)?e.x=t:n+=t;for(var r=0;r<n.length+64;r++)e.x^=0|n.charCodeAt(r),r==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function a(t,e){return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e.v=t.v,e.d=t.d,e}function c(t,e){var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=c:n(7)&&n(18)?void 0===(r=function(){return c}.call(e,n,e,o))||(o.exports=r):this.xorwow=c}(0,t,n(7))}).call(this,n(17)(t))},function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this;e.next=function(){var t,n,r=e.x,o=e.i;return t=r[o],n=(t^=t>>>7)^t<<24,n^=(t=r[o+1&7])^t>>>10,n^=(t=r[o+3&7])^t>>>3,n^=(t=r[o+4&7])^t<<7,t=r[o+7&7],n^=(t^=t<<13)^t<<9,r[o]=n,e.i=o+1&7,n},function(t,e){var n,r=[];if(e===(0|e))r[0]=e;else for(e=""+e,n=0;n<e.length;++n)r[7&n]=r[7&n]<<15^e.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],t.x=r,t.i=0,n=256;n>0;--n)t.next()}(e,t)}function a(t,e){return e.x=t.x.slice(),e.i=t.i,e}function c(t,e){null==t&&(t=+new Date);var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&(r.x&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=c:n(7)&&n(18)?void 0===(r=function(){return c}.call(e,n,e,o))||(o.exports=r):this.xorshift7=c}(0,t,n(7))}).call(this,n(17)(t))},function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this;e.next=function(){var t,n,r=e.w,o=e.X,i=e.i;return e.w=r=r+1640531527|0,n=o[i+34&127],t=o[i=i+1&127],n^=n<<13,t^=t<<17,n^=n>>>15,t^=t>>>12,n=o[i]=n^t,e.i=i,n+(r^r>>>16)|0},function(t,e){var n,r,o,i,s,a=[],c=128;for(e===(0|e)?(r=e,e=null):(e+="\0",r=0,c=Math.max(c,e.length)),o=0,i=-32;i<c;++i)e&&(r^=e.charCodeAt((i+32)%e.length)),0===i&&(s=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,i>=0&&(s=s+1640531527|0,o=0==(n=a[127&i]^=r+s)?o+1:0);for(o>=128&&(a[127&(e&&e.length||0)]=-1),o=127,i=512;i>0;--i)r=a[o+34&127],n=a[o=o+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,a[o]=r^n;t.w=s,t.X=a,t.i=o}(e,t)}function a(t,e){return e.i=t.i,e.w=t.w,e.X=t.X.slice(),e}function c(t,e){null==t&&(t=+new Date);var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&(r.X&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=c:n(7)&&n(18)?void 0===(r=function(){return c}.call(e,n,e,o))||(o.exports=r):this.xor4096=c}(0,t,n(7))}).call(this,n(17)(t))},function(t,e,n){(function(t){var r;!function(t,o,i){function s(t){var e=this,n="";e.next=function(){var t=e.b,n=e.c,r=e.d,o=e.a;return t=t<<25^t>>>7^n,n=n-r|0,r=r<<24^r>>>8^o,o=o-t|0,e.b=t=t<<20^t>>>12^n,e.c=n=n-r|0,e.d=r<<16^n>>>16^o,e.a=o-t|0},e.a=0,e.b=0,e.c=-1640531527,e.d=1367130551,t===Math.floor(t)?(e.a=t/4294967296|0,e.b=0|t):n+=t;for(var r=0;r<n.length+20;r++)e.b^=0|n.charCodeAt(r),e.next()}function a(t,e){return e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e}function c(t,e){var n=new s(t),r=e&&e.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do{var t=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=n.next,o.quick=o,r&&("object"==typeof r&&a(r,n),o.state=function(){return a(n,{})}),o}o&&o.exports?o.exports=c:n(7)&&n(18)?void 0===(r=function(){return c}.call(e,n,e,o))||(o.exports=r):this.tychei=c}(0,t,n(7))}).call(this,n(17)(t))},function(t,e,n){var r;!function(o,i){var s,a=(0,eval)("this"),c=i.pow(256,6),l=i.pow(2,52),u=2*l;function h(t,e,n){var r=[],h=f(function t(e,n){var r,o=[],i=typeof e;if(n&&"object"==i)for(r in e)try{o.push(t(e[r],n-1))}catch(t){}return o.length?o:"string"==i?e:e+"\0"}((e=1==e?{entropy:!0}:e||{}).entropy?[t,y(o)]:null==t?function(){try{var t;return s&&(t=s.randomBytes)?t=t(256):(t=new Uint8Array(256),(a.crypto||a.msCrypto).getRandomValues(t)),y(t)}catch(t){var e=a.navigator,n=e&&e.plugins;return[+new Date,a,n,a.screen,y(o)]}}():t,3),r),m=new p(r),g=function(){for(var t=m.g(6),e=c,n=0;t<l;)t=256*(t+n),e*=256,n=m.g(1);for(;t>=u;)t/=2,e/=2,n>>>=1;return(t+n)/e};return g.int32=function(){return 0|m.g(4)},g.quick=function(){return m.g(4)/4294967296},g.double=g,f(y(m.S),o),(e.pass||n||function(t,e,n,r){return r&&(r.S&&d(r,m),t.state=function(){return d(m,{})}),n?(i.random=t,e):t})(g,h,"global"in e?e.global:this==i,e.state)}function p(t){var e,n=t.length,r=this,o=0,i=r.i=r.j=0,s=r.S=[];for(n||(t=[n++]);o<256;)s[o]=o++;for(o=0;o<256;o++)s[o]=s[i=255&i+t[o%n]+(e=s[o])],s[i]=e;(r.g=function(t){for(var e,n=0,o=r.i,i=r.j,s=r.S;t--;)e=s[o=255&o+1],n=256*n+s[255&(s[o]=s[i=255&i+e])+(s[i]=e)];return r.i=o,r.j=i,n})(256)}function d(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function f(t,e){for(var n,r=t+"",o=0;o<r.length;)e[255&o]=255&(n^=19*e[255&o])+r.charCodeAt(o++);return y(e)}function y(t){return String.fromCharCode.apply(0,t)}if(i.seedrandom=h,f(i.random(),o),t.exports){t.exports=h;try{s=n(82)}catch(t){}}else void 0===(r=function(){return h}.call(e,n,e,t))||(t.exports=r)}([],Math)},function(t,e){},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),a=n(40),c={facingMode:"user",frameRate:24},l=function(){function t(t,e,n){void 0===t&&(t=400),void 0===e&&(e=400),void 0===n&&(n=!1),this.width=t,this.height=e,this.flip=n}return t.prototype.getWebcam=function(t){if(void 0===t&&(t={}),!window.navigator.mediaDevices||!window.navigator.mediaDevices.getUserMedia)return Promise.reject("Your browser does not support WebRTC. Please try another one.");t.width=640;var e=function(t){return t.facingMode=t.facingMode||c.facingMode,t.frameRate=t.frameRate||c.frameRate,t.aspectRatio=t.aspectRatio||c.aspectRatio,t}(t),n=document.createElement("video");return window.navigator.mediaDevices.getUserMedia({video:e}).then((function(t){return n.srcObject=t,n.addEventListener("loadedmetadata",(function(t){var e=n.videoWidth,r=n.videoHeight;n.width=e,n.height=r})),n}),(function(){return Promise.reject("Could not open your camera. You may have denied access.")}))},t.prototype.setup=function(t){return void 0===t&&(t={}),o(this,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:return this.webcam?[3,2]:(e=this,[4,this.getWebcam(t)]);case 1:e.webcam=n.sent(),this.canvas||(this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height),n.label=2;case 2:return[2]}}))}))},t.prototype.play=function(){return this.webcam.play()},t.prototype.pause=function(){this.webcam.pause()},t.prototype.stop=function(){this.stopStreamedVideo(this.webcam)},t.prototype.update=function(){this.renderCameraToCanvas()},t.prototype.stopStreamedVideo=function(t){t.srcObject.getTracks().forEach((function(t){t.stop()})),t.srcObject=null},t.prototype.renderCameraToCanvas=function(){if(this.canvas&&this.webcam){var t=this.canvas.getContext("2d");if(0!==this.webcam.videoWidth){var e=a.cropTo(this.webcam,this.width,this.flip);t.drawImage(e,0,0)}}},r([s.default],t.prototype,"getWebcam",null),r([s.default],t.prototype,"setup",null),r([s.default],t.prototype,"play",null),r([s.default],t.prototype,"pause",null),r([s.default],t.prototype,"stop",null),r([s.default],t.prototype,"update",null),r([s.default],t.prototype,"stopStreamedVideo",null),r([s.default],t.prototype,"renderCameraToCanvas",null),t}();e.Webcam=l},function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,c=s(t),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(c[u]=n[u]);if(r){a=r(n);for(var h=0;h<a.length;h++)i.call(n,a[h])&&(c[a[h]]=n[a[h]])}}return c}},function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!g(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,s=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),c=r[n];n<i;c=r[++n])y(c)||!w(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),f(n)?r.showHidden=n:n&&e._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t,n,r){if(t.customInspect&&n&&S(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return g(o)||(o=u(t,o,r)),o}var i=function(t,e){if(v(e))return t.stylize("undefined","undefined");if(g(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(m(e))return t.stylize(""+e,"number");if(f(e))return t.stylize(""+e,"boolean");if(y(e))return t.stylize("null","null")}(t,n);if(i)return i;var s=Object.keys(n),a=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),x(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return h(n);if(0===s.length){if(S(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return h(n)}var l,w="",E=!1,T=["{","}"];(d(n)&&(E=!0,T=["[","]"]),S(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(w=" "+RegExp.prototype.toString.call(n)),_(n)&&(w=" "+Date.prototype.toUTCString.call(n)),x(n)&&(w=" "+h(n)),0!==s.length||E&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=E?function(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)A(e,String(s))?i.push(p(t,e,n,r,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,a,s):s.map((function(e){return p(t,n,r,a,e,E)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,w,T)):T[0]+w+T[1]}function h(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var s,a,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),A(r,o)||(s="["+o+"]"),a||(t.seen.indexOf(c.value)<0?(a=y(n)?u(t,c.value,null):u(t,c.value,n-1)).indexOf("\n")>-1&&(a=i?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n")):a=t.stylize("[Circular]","special")),v(s)){if(i&&o.match(/^\d+$/))return a;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function d(t){return Array.isArray(t)}function f(t){return"boolean"==typeof t}function y(t){return null===t}function m(t){return"number"==typeof t}function g(t){return"string"==typeof t}function v(t){return void 0===t}function b(t){return w(t)&&"[object RegExp]"===E(t)}function w(t){return"object"==typeof t&&null!==t}function _(t){return w(t)&&"[object Date]"===E(t)}function x(t){return w(t)&&("[object Error]"===E(t)||t instanceof Error)}function S(t){return"function"==typeof t}function E(t){return Object.prototype.toString.call(t)}function T(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(v(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;s[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else s[n]=function(){};return s[n]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=f,e.isNull=y,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=g,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=v,e.isRegExp=b,e.isObject=w,e.isDate=_,e.isError=x,e.isFunction=S,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(86);var k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function I(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":");return[t.getDate(),k[t.getMonth()],e].join(" ")}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",I(),e.format.apply(e,arguments))},e.inherits=n(87),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var P="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function C(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(P&&t[P]){var e;if("function"!=typeof(e=t[P]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,P,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),P&&Object.defineProperty(e,P,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=P,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,s=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(C,e,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(25))},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(6);e.reduceTemplate=(t,e)=>{return(n=e)&&"function"==typeof n?e(t):"string"==typeof e?r.html`${e}`:e;var n}},function(t,e,n){"use strict";(function(t){var r=n(90),o=n(91),i=n(92);function s(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=c.prototype:(null===t&&(t=new c(e)),t.length=e),t}function c(t,e,n){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return l(this,t,e,n)}function l(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);c.TYPED_ARRAY_SUPPORT?(t=e).__proto__=c.prototype:t=p(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!c.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|f(e,n),o=(t=a(t,r)).write(e,n);o!==r&&(t=t.slice(0,o));return t}(t,e,n):function(t,e){if(c.isBuffer(e)){var n=0|d(e.length);return 0===(t=a(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?a(t,0):p(t,e);if("Buffer"===e.type&&i(e.data))return p(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e){if(u(e),t=a(t,e<0?0:0|d(e)),!c.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function p(t,e){var n=e.length<0?0:0|d(e.length);t=a(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function d(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function f(t,e){if(c.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return $(t).length;default:if(r)return U(t).length;e=(""+e).toLowerCase(),r=!0}}function y(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,n);case"utf8":case"utf-8":return k(this,e,n);case"ascii":return I(this,e,n);case"latin1":case"binary":return A(this,e,n);case"base64":return T(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function m(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function g(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=c.from(e,r)),c.isBuffer(e))return 0===e.length?-1:v(t,e,n,r,o);if("number"==typeof e)return e&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):v(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function v(t,e,n,r,o){var i,s=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var u=-1;for(i=n;i<a;i++)if(l(t,i)===l(e,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===c)return u*s}else-1!==u&&(i-=i-u),u=-1}else for(n+c>a&&(n=a-c),i=n;i>=0;i--){for(var h=!0,p=0;p<c;p++)if(l(t,i+p)!==l(e,p)){h=!1;break}if(h)return i}return-1}function b(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function w(t,e,n,r){return z(U(e,t.length-n),t,n,r)}function _(t,e,n,r){return z(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function x(t,e,n,r){return _(t,e,n,r)}function S(t,e,n,r){return z($(e),t,n,r)}function E(t,e,n,r){return z(function(t,e){for(var n,r,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function T(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function k(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i,s,a,c,l=t[o],u=null,h=l>239?4:l>223?3:l>191?2:1;if(o+h<=n)switch(h){case 1:l<128&&(u=l);break;case 2:128==(192&(i=t[o+1]))&&(c=(31&l)<<6|63&i)>127&&(u=c);break;case 3:i=t[o+1],s=t[o+2],128==(192&i)&&128==(192&s)&&(c=(15&l)<<12|(63&i)<<6|63&s)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:i=t[o+1],s=t[o+2],a=t[o+3],128==(192&i)&&128==(192&s)&&128==(192&a)&&(c=(15&l)<<18|(63&i)<<12|(63&s)<<6|63&a)>65535&&c<1114112&&(u=c)}null===u?(u=65533,h=1):u>65535&&(u-=65536,r.push(u>>>10&1023|55296),u=56320|1023&u),r.push(u),o+=h}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}e.Buffer=c,e.SlowBuffer=function(t){+t!=t&&(t=0);return c.alloc(+t)},e.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),c.poolSize=8192,c._augment=function(t){return t.__proto__=c.prototype,t},c.from=function(t,e,n){return l(null,t,e,n)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(t,e,n){return function(t,e,n,r){return u(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},c.allocUnsafe=function(t){return h(null,t)},c.allocUnsafeSlow=function(t){return h(null,t)},c.isBuffer=function(t){return!(null==t||!t._isBuffer)},c.compare=function(t,e){if(!c.isBuffer(t)||!c.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},c.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return c.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=c.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var s=t[n];if(!c.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},c.byteLength=f,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)m(this,e,e+1);return this},c.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},c.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},c.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?k(this,0,t):y.apply(this,arguments)},c.prototype.equals=function(t){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===c.compare(this,t)},c.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},c.prototype.compare=function(t,e,n,r,o){if(!c.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(r>>>=0),s=(n>>>=0)-(e>>>=0),a=Math.min(i,s),l=this.slice(r,o),u=t.slice(e,n),h=0;h<a;++h)if(l[h]!==u[h]){i=l[h],s=u[h];break}return i<s?-1:s<i?1:0},c.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},c.prototype.indexOf=function(t,e,n){return g(this,t,e,n,!0)},c.prototype.lastIndexOf=function(t,e,n){return g(this,t,e,n,!1)},c.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return b(this,t,e,n);case"utf8":case"utf-8":return w(this,t,e,n);case"ascii":return _(this,t,e,n);case"latin1":case"binary":return x(this,t,e,n);case"base64":return S(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function I(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function A(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function P(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=F(t[i]);return o}function C(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function R(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function D(t,e,n,r,o,i){if(!c.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function O(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function M(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function L(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function j(t,e,n,r,i){return i||L(t,0,n,4),o.write(t,e,n,r,23,4),n+4}function N(t,e,n,r,i){return i||L(t,0,n,8),o.write(t,e,n,r,52,8),n+8}c.prototype.slice=function(t,e){var n,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),c.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=c.prototype;else{var o=e-t;n=new c(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},c.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},c.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},c.prototype.readUInt8=function(t,e){return e||R(t,1,this.length),this[t]},c.prototype.readUInt16LE=function(t,e){return e||R(t,2,this.length),this[t]|this[t+1]<<8},c.prototype.readUInt16BE=function(t,e){return e||R(t,2,this.length),this[t]<<8|this[t+1]},c.prototype.readUInt32LE=function(t,e){return e||R(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},c.prototype.readUInt32BE=function(t,e){return e||R(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},c.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},c.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||R(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},c.prototype.readInt8=function(t,e){return e||R(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},c.prototype.readInt16LE=function(t,e){e||R(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(t,e){e||R(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(t,e){return e||R(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},c.prototype.readInt32BE=function(t,e){return e||R(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},c.prototype.readFloatLE=function(t,e){return e||R(t,4,this.length),o.read(this,t,!0,23,4)},c.prototype.readFloatBE=function(t,e){return e||R(t,4,this.length),o.read(this,t,!1,23,4)},c.prototype.readDoubleLE=function(t,e){return e||R(t,8,this.length),o.read(this,t,!0,52,8)},c.prototype.readDoubleBE=function(t,e){return e||R(t,8,this.length),o.read(this,t,!1,52,8)},c.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||D(this,t,e,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},c.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||D(this,t,e,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},c.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,1,255,0),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},c.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},c.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},c.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):M(this,t,e,!0),e+4},c.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},c.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);D(this,t,e,n,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},c.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);D(this,t,e,n,o-1,-o)}var i=n-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},c.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,1,127,-128),c.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},c.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):O(this,t,e,!0),e+2},c.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):O(this,t,e,!1),e+2},c.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):M(this,t,e,!0),e+4},c.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||D(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),c.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):M(this,t,e,!1),e+4},c.prototype.writeFloatLE=function(t,e,n){return j(this,t,e,!0,n)},c.prototype.writeFloatBE=function(t,e,n){return j(this,t,e,!1,n)},c.prototype.writeDoubleLE=function(t,e,n){return N(this,t,e,!0,n)},c.prototype.writeDoubleBE=function(t,e,n){return N(this,t,e,!1,n)},c.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!c.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},c.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!c.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var s=c.isBuffer(t)?t:U(new c(t,r).toString()),a=s.length;for(i=0;i<n-e;++i)this[i+e]=s[i%a]}return this};var B=/[^+\/0-9A-Za-z-_]/g;function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function U(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function $(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(B,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}}).call(this,n(21))},function(t,e,n){"use strict";e.byteLength=function(t){var e=l(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){var e,n,r=l(t),s=r[0],a=r[1],c=new i(function(t,e,n){return 3*(e+n)/4-n}(0,s,a)),u=0,h=a>0?s-4:s;for(n=0;n<h;n+=4)e=o[t.charCodeAt(n)]<<18|o[t.charCodeAt(n+1)]<<12|o[t.charCodeAt(n+2)]<<6|o[t.charCodeAt(n+3)],c[u++]=e>>16&255,c[u++]=e>>8&255,c[u++]=255&e;2===a&&(e=o[t.charCodeAt(n)]<<2|o[t.charCodeAt(n+1)]>>4,c[u++]=255&e);1===a&&(e=o[t.charCodeAt(n)]<<10|o[t.charCodeAt(n+1)]<<4|o[t.charCodeAt(n+2)]>>2,c[u++]=e>>8&255,c[u++]=255&e);return c},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],s=0,a=n-o;s<a;s+=16383)i.push(u(t,s,s+16383>a?a:s+16383));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=s.length;a<c;++a)r[a]=s[a],o[s.charCodeAt(a)]=a;function l(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function u(t,e,n){for(var o,i,s=[],a=e;a<n;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return s.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?o-1:0,p=n?-1:1,d=t[e+h];for(h+=p,i=d&(1<<-u)-1,d>>=-u,u+=a;u>0;i=256*i+t[e+h],h+=p,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=r;u>0;s=256*s+t[e+h],h+=p,u-=8);if(0===i)i=1-l;else{if(i===c)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,r),i-=l}return(d?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,a,c,l=8*i-o-1,u=(1<<l)-1,h=u>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:i-1,f=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=u):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),(e+=s+h>=1?p/c:p*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(e*c-1)*Math.pow(2,o),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;t[n+d]=255&a,d+=f,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[n+d]=255&s,d+=f,s/=256,l-=8);t[n+d-f]|=128*y}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(23),o=n(9),i=n(45),s=n(2),a=n(100),c=n(46);function l(t,e,n,i){if(null==i&&(i=s.inferDtype(t)),"complex64"===i)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!s.isTypedArray(t)&&!Array.isArray(t)&&"number"!=typeof t&&"boolean"!=typeof t&&"string"!=typeof t)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=e){s.assertNonNegativeIntegerDimensions(e);var a=s.sizeFromShape(e),c=s.sizeFromShape(n);s.assert(a===c,(function(){return"Based on the provided shape, ["+e+"], the tensor should have "+a+" values but has "+c}));for(var l=0;l<n.length;++l){var u=n[l],h=l!==n.length-1||u!==s.sizeFromShape(e.slice(l));s.assert(n[l]===e[l]||!h,(function(){return"Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+e+"). "}))}}return s.isTypedArray(t)||Array.isArray(t)||(t=[t]),e=e||n,t="string"!==i?s.toTypedArray(t,i,o.env().getBool("DEBUG")):s.flatten(t,[],!0),r.ENGINE.makeTensor(t,e,i)}function u(t,e){s.assertNonNull(t);var n=i.inferShape(t,e);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return l(t,null,n,e)}function h(t,e){if(void 0===e&&(e="float32"),"complex64"===e){var n=h(t,"float32"),o=h(t,"float32");return a.complex(n,o)}var i=s.makeZerosTypedArray(s.sizeFromShape(t),e);return r.ENGINE.makeTensor(i,t,e)}e.tensor=function(t,e,n){return l(t,e,i.inferShape(t,n),n)},e.scalar=function(t,e){if((s.isTypedArray(t)&&"string"!==e||Array.isArray(t))&&"complex64"!==e)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===e&&s.isTypedArray(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return l(t,[],[],e)},e.tensor1d=u,e.tensor2d=function(t,e,n){if(s.assertNonNull(t),null!=e&&2!==e.length)throw new Error("tensor2d() requires shape to have two numbers");var r=i.inferShape(t,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return l(t,e,r,n)},e.tensor3d=function(t,e,n){if(s.assertNonNull(t),null!=e&&3!==e.length)throw new Error("tensor3d() requires shape to have three numbers");var r=i.inferShape(t,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return l(t,e,r,n)},e.tensor4d=function(t,e,n){if(s.assertNonNull(t),null!=e&&4!==e.length)throw new Error("tensor4d() requires shape to have four numbers");var r=i.inferShape(t,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return l(t,e,r,n)},e.tensor5d=function(t,e,n){if(s.assertNonNull(t),null!=e&&5!==e.length)throw new Error("tensor5d() requires shape to have five numbers");var r=i.inferShape(t,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return l(t,e,r,n)},e.tensor6d=function(t,e,n){if(s.assertNonNull(t),null!=e&&6!==e.length)throw new Error("tensor6d() requires shape to have six numbers");var r=i.inferShape(t,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==e)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return l(t,e=e||r,r,n)},e.variable=function(t,e,n,o){return void 0===e&&(e=!0),r.ENGINE.makeVariable(t,e,n,o)},e.ones=function t(e,n){if(void 0===n&&(n="float32"),"complex64"===n){var o=t(e,"float32"),i=h(e,"float32");return a.complex(o,i)}var c=s.makeOnesTypedArray(s.sizeFromShape(e),n);return r.ENGINE.makeTensor(c,e,n)},e.zeros=h,e.fill=function(t,e,n){return r.ENGINE.runKernelFunc((function(r){return r.fill(t,e,n)}),{})},e.linspace=function(t,e,n){if(n<=0)throw new Error("The number of values should be positive.");return r.ENGINE.runKernelFunc((function(r){return r.linspace(t,e,n)}),{})},e.range=function(t,e,n,r){if(void 0===n&&(n=1),void 0===r&&(r="float32"),0===n)throw new Error("Cannot have a step of zero");if(t===e||t<e&&n<0||e<t&&n>1)return h([0],r);var o=Math.abs(Math.ceil((e-t)/n)),i=s.makeZerosTypedArray(o,r);e<t&&1===n&&(n=-1),i[0]=t;for(var a=1;a<i.length;a++)i[a]=i[a-1]+n;return u(i,r)},e.onesLike=c.op({onesLike_:function(t){var n=i.convertToTensor(t,"x","onesLike");if("complex64"===n.dtype){var o=e.onesLike(a.real(n)),s=e.zerosLike(a.imag(n));return a.complex(o,s)}return r.ENGINE.runKernelFunc((function(t){return t.onesLike(n)}),{$x:n},(function(t,n){return{$x:function(){return e.zerosLike(t)}}}))}}),e.zerosLike=c.op({zerosLike_:function(t){var n=i.convertToTensor(t,"x","zerosLike");return r.ENGINE.runKernelFunc((function(t){return t.zerosLike(n)}),{$x:n},(function(t,n){return{$x:function(){return e.zerosLike(t)}}}))}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=new Map;function o(t,e){return e+"_"+t}e.getKernel=function(t,e){var n=o(t,e);return r.get(n)},e.getKernelsForBackend=function(t){for(var e=r.entries(),n=[];;){var o=e.next(),i=o.done,s=o.value;if(i)break;var a=s[0],c=s[1];a.split("_")[0]===t&&n.push(c)}return n},e.registerKernel=function(t){var e=t.kernelName,n=t.backendName,i=o(e,n);if(r.has(i))throw new Error("The kernel '"+e+"' for backend '"+n+"' is already registered");r.set(i,t)},e.unregisterKernel=function(t,e){var n=o(t,e);if(!r.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is not registered");r.delete(n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=function(){function t(t,e){this.backendTimer=t,this.logger=e,null==e&&(this.logger=new s)}return t.prototype.profileKernel=function(t,e,n){var r,o=this,s=this.backendTimer.time((function(){r=n()}));return r.forEach((function(n){n.data().then((function(r){i(r,n.dtype,t),s.then((function(i){var s="";null!=i.getExtraProfileInfo&&(s=i.getExtraProfileInfo()),o.logger.logKernelProfile(t,n,r,i.kernelMs,e,s)}))}))})),r},t}();function i(t,e,n){if("float32"!==e)return!1;for(var r=0;r<t.length;r++){var o=t[r];if(isNaN(o)||!isFinite(o))return console.warn("Found "+o+" in the result of '"+n+"'"),!0}return!1}e.Profiler=o,e.checkComputationForErrors=i;var s=function(){function t(){}return t.prototype.logKernelProfile=function(t,e,n,o,i,s){var a=r.rightPad(o+"ms",9),c=r.rightPad(t,25),l=e.rank,u=e.size,h=r.rightPad(e.shape.toString(),14),p="";for(var d in i){var f=i[d].shape,y=f.length;p+=d+": "+y+"D "+(y>0?f:"")+" "}console.log("%c"+c+"\t%c"+a+"\t%c"+l+"D "+h+"\t%c"+u+"\t%c"+p+"\t%c"+s,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},t}();e.Logger=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.getFilteredNodesXToY=function(t,e,n){for(var r={},o={},i=0;i<e.length;i++)r[e[i].id]=!0;for(i=0;i<t.length;i++){var s=(f=t[i]).inputs;for(var a in s){for(var c=s[a],l=!1,u=0;u<e.length;u++)if(r[c.id]){f.outputs.forEach((function(t){return r[t.id]=!0})),l=!0,o[f.id]=!0;break}if(l)break}}var h={};h[n.id]=!0;var p={};for(i=t.length-1;i>=0;i--)for(s=(f=t[i]).inputs,u=0;u<f.outputs.length;u++)if(h[f.outputs[u].id]){for(var a in s)h[s[a].id]=!0,p[f.id]=!0;break}var d=[];for(i=0;i<t.length;i++){var f;if(o[(f=t[i]).id]&&p[f.id]){var y={};for(var a in f.inputs){var m=f.inputs[a];r[m.id]&&(y[a]=m)}var g=Object.assign({},f);g.inputs=y,g.outputs=f.outputs,d.push(g)}}return d},e.backpropagateGradients=function(t,e,n){for(var o=function(o){var i=e[o],s=[];if(i.outputs.forEach((function(e){var n=t[e.id];null!=n?s.push(n):s.push(null)})),null==i.gradient)throw new Error("Cannot compute gradient: gradient function not found for "+i.name+".");var a=i.gradient(s),c=function(e){if(!(e in a))throw new Error("Cannot backprop through input "+e+". Available gradients found: "+Object.keys(a)+".");var o=n((function(){return a[e]()}));if("float32"!==o.dtype)throw new Error("Error in gradient for op "+i.name+". The gradient of input "+e+" must have 'float32' dtype, but has '"+o.dtype+"'");var s=i.inputs[e];if(!r.arraysEqual(o.shape,s.shape))throw new Error("Error in gradient for op "+i.name+". The gradient of input '"+e+"' has shape '"+o.shape+"', which does not match the shape of the input '"+s.shape+"'");if(null==t[s.id])t[s.id]=o;else{var c=t[s.id];t[s.id]=c.add(o),c.dispose()}};for(var l in i.inputs)c(l)},i=e.length-1;i>=0;i--)o(i)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);function o(t,e,n){var o;return o=Array.isArray(t)?parseFloat(t[0].toFixed(7))+" + "+parseFloat(t[1].toFixed(7))+"j":r.isString(t)?"'"+t+"'":"bool"===n?i(t):parseFloat(t.toFixed(7)).toString(),r.rightPad(o,e)}function i(t){return 0===t?"false":"true"}function s(t){for(var e=[],n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}e.tensorToString=function(t,e,n,a){var c=r.computeStrides(e),l=function(t,e,n,i){var a=r.sizeFromShape(e),c=i[i.length-1],l=new Array(c).fill(0),u=e.length,h="complex64"===n?s(t):t;if(u>1)for(var p=0;p<a/c;p++)for(var d=p*c,f=0;f<c;f++)l[f]=Math.max(l[f],o(h[d+f],0,n).length);return l}(t,e,n,c),u=e.length,h=function t(e,n,r,a,c,l){void 0===l&&(l=!0);var u="complex64"===r?2:1,h=n[0],p=n.length;if(0===p){return"complex64"===r?[o(s(e)[0],0,r)]:"bool"===r?[i(e[0])]:[e[0].toString()]}if(1===p){if(h>20){var d=3*u,f=Array.from(e.slice(0,d)),y=Array.from(e.slice(h-3*u,h));return"complex64"===r&&(f=s(f),y=s(y)),["["+f.map((function(t,e){return o(t,c[e],r)})).join(", ")+", ..., "+y.map((function(t,e){return o(t,c[h-3+e],r)})).join(", ")+"]"]}return["["+("complex64"===r?s(e):Array.from(e)).map((function(t,e){return o(t,c[e],r)})).join(", ")+"]"]}var m=n.slice(1),g=a.slice(1),v=a[0]*u,b=[];if(h>20){for(var w=0;w<3;w++){var _=(x=w*v)+v;b.push.apply(b,t(e.slice(x,_),m,r,g,c,!1))}b.push("...");for(w=h-3;w<h;w++){_=(x=w*v)+v;b.push.apply(b,t(e.slice(x,_),m,r,g,c,w===h-1))}}else for(w=0;w<h;w++){var x;_=(x=w*v)+v;b.push.apply(b,t(e.slice(x,_),m,r,g,c,w===h-1))}var S=2===p?",":"";b[0]="["+b[0]+S;for(w=1;w<b.length-1;w++)b[w]=" "+b[w]+S;var E=",\n";for(w=2;w<p;w++)E+="\n";return b[b.length-1]=" "+b[b.length-1]+"]"+(l?"":E),b}(t,e,n,c,l),p=["Tensor"];return a&&(p.push("  dtype: "+n),p.push("  rank: "+u),p.push("  shape: ["+e+"]"),p.push("  values:")),p.push(h.map((function(t){return"    "+t})).join("\n")),p.join("\n")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(30),o=n(99),i=n(2);e.makeTypesMatch=function(t,e){if(t.dtype===e.dtype)return[t,e];var n=o.upcastType(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]},e.assertTypesMatch=function(t,e){i.assert(t.dtype===e.dtype,(function(){return"The dtypes of the first("+t.dtype+") and second("+e.dtype+") input must match"}))},e.isTensorInList=function(t,e){for(var n=0;n<e.length;n++)if(e[n].id===t.id)return!0;return!1},e.getTensorsInContainer=function(t){var e=[];return function t(e,n,o){if(null==e)return;if(e instanceof r.Tensor)return void n.push(e);if(i=e,!Array.isArray(i)&&"object"!=typeof i)return;var i;var s=e;for(var a in s){var c=s[a];o.has(c)||(o.add(c),t(c,n,o))}}(t,e,new Set),e}},function(t,e,n){"use strict";var r,o,i,s;Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"}(e.Rank||(e.Rank={})),function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"}(r||(r={})),function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"}(o||(o={})),function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"}(i||(i={})),function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"}(s||(s={}));var a={float32:i,int32:r,bool:o,complex64:s};function c(t,e){if("string"===t||"string"===e){if("string"===t&&"string"===e)return"string";throw new Error("Can not upcast "+t+" with "+e)}return a[t][e]}e.upcastType=c,e.sumOutType=function(t){return c(t,"int32")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(23),o=n(45),i=n(2),s=n(46);e.complex=s.op({complex_:function(t,e){var n=o.convertToTensor(t,"real","complex"),s=o.convertToTensor(e,"imag","complex");return i.assertShapesMatch(n.shape,s.shape,"real and imag shapes, "+n.shape+" and "+s.shape+", must match in call to tf.complex()."),r.ENGINE.runKernelFunc((function(t){return t.complex(n,s)}),{$real:n,$imag:s})}}),e.real=s.op({real_:function(t){var e=o.convertToTensor(t,"input","real");return r.ENGINE.runKernelFunc((function(t){return t.real(e)}),{$input:e})}}),e.imag=s.op({imag_:function(t){var e=o.convertToTensor(t,"input","imag");return r.ENGINE.runKernelFunc((function(t){return t.imag(e)}),{$input:e})}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2);e.monitorPromisesProgress=function(t,e,n,o){!function(t){r.assert(null!=t&&Array.isArray(t)&&t.length>0,(function(){return"promises must be a none empty array"}))}(t),function(t,e){r.assert(t>=0&&t<=1,(function(){return"Progress fraction must be in range [0, 1], but got startFraction "+t})),r.assert(e>=0&&e<=1,(function(){return"Progress fraction must be in range [0, 1], but got endFraction "+e})),r.assert(e>=t,(function(){return"startFraction must be no more than endFraction, but got startFraction "+t+" and endFraction "+e}))}(n=null==n?0:n,o=null==o?1:o);var i=0;return Promise.all(t.map((function(r){return r.then((function(r){var s=n+ ++i/t.length*(o-n);return e(s),r})),r})))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(103),n(104);var r=n(105);e.browserFiles=r.browserFiles;var o=n(44);e.browserHTTPRequest=o.browserHTTPRequest,e.http=o.http,e.isHTTPScheme=o.isHTTPScheme;var i=n(19);e.concatenateArrayBuffers=i.concatenateArrayBuffers,e.decodeWeights=i.decodeWeights,e.encodeWeights=i.encodeWeights,e.getModelArtifactsInfoForJSON=i.getModelArtifactsInfoForJSON;var s=n(106);e.fromMemory=s.fromMemory,e.withSaveHandler=s.withSaveHandler;var a=n(20);e.getLoadHandlers=a.getLoadHandlers,e.getSaveHandlers=a.getSaveHandlers,e.registerLoadRouter=a.registerLoadRouter,e.registerSaveRouter=a.registerSaveRouter;var c=n(48);e.loadWeights=c.loadWeights,e.weightsLoaderFactory=c.weightsLoaderFactory;var l=n(31);e.copyModel=l.copyModel,e.listModels=l.listModels,e.moveModel=l.moveModel,e.removeModel=l.removeModel},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=n(19),a=n(31),c=n(20);function l(){if(!i.env().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var t=window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(null==e)throw new Error("The current browser does not appear to support IndexedDB.");return e}function u(t){var e=t.result;e.createObjectStore("models_store",{keyPath:"modelPath"}),e.createObjectStore("model_info_store",{keyPath:"modelPath"})}e.deleteDatabase=function(){return r(this,void 0,void 0,(function(){var t;return o(this,(function(e){return t=l(),[2,new Promise((function(e,n){var r=t.deleteDatabase("tensorflowjs");r.onsuccess=function(){return e()},r.onerror=function(t){return n(t)}}))]}))}))};var h=function(){function t(t){if(this.indexedDB=l(),null==t||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return t.prototype.save=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]}))}))},t.prototype.load=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.databaseAction(this.modelPath)]}))}))},t.prototype.databaseAction=function(t,e){var n=this;return new Promise((function(t,r){var o=n.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return u(o)},o.onsuccess=function(){var i=o.result;if(null==e){var a=i.transaction("models_store","readonly"),c=a.objectStore("models_store").get(n.modelPath);c.onsuccess=function(){if(null==c.result)return i.close(),r(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));t(c.result.modelArtifacts)},c.onerror=function(t){return i.close(),r(c.error)},a.oncomplete=function(){return i.close()}}else{var l,u=s.getModelArtifactsInfoForJSON(e),h=i.transaction("model_info_store","readwrite"),p=h.objectStore("model_info_store"),d=p.put({modelPath:n.modelPath,modelArtifactsInfo:u});d.onsuccess=function(){var o=(l=i.transaction("models_store","readwrite")).objectStore("models_store").put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:u});o.onsuccess=function(){return t({modelArtifactsInfo:u})},o.onerror=function(t){var e=(p=h.objectStore("model_info_store")).delete(n.modelPath);e.onsuccess=function(){return i.close(),r(o.error)},e.onerror=function(t){return i.close(),r(o.error)}}},d.onerror=function(t){return i.close(),r(d.error)},h.oncomplete=function(){null==l?i.close():l.oncomplete=function(){return i.close()}}}},o.onerror=function(t){return r(o.error)}}))},t.URL_SCHEME="indexeddb://",t}();function p(t){return new h(t)}e.BrowserIndexedDB=h,e.indexedDBRouter=function(t){return i.env().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(h.URL_SCHEME)?p(t.slice(h.URL_SCHEME.length)):null},c.IORouterRegistry.registerSaveRouter(e.indexedDBRouter),c.IORouterRegistry.registerLoadRouter(e.indexedDBRouter),e.browserIndexedDB=p;var d=function(){function t(){this.indexedDB=l()}return t.prototype.listModels=function(){return r(this,void 0,void 0,(function(){var t=this;return o(this,(function(e){return[2,new Promise((function(e,n){var r=t.indexedDB.open("tensorflowjs",1);r.onupgradeneeded=function(){return u(r)},r.onsuccess=function(){var t=r.result,o=t.transaction("model_info_store","readonly"),i=o.objectStore("model_info_store").getAll();i.onsuccess=function(){for(var t={},n=0,r=i.result;n<r.length;n++){var o=r[n];t[o.modelPath]=o.modelArtifactsInfo}e(t)},i.onerror=function(e){return t.close(),n(i.error)},o.oncomplete=function(){return t.close()}},r.onerror=function(t){return n(r.error)}}))]}))}))},t.prototype.removeModel=function(t){return r(this,void 0,void 0,(function(){var e=this;return o(this,(function(n){var r;return t=(r=t).startsWith(h.URL_SCHEME)?r.slice(h.URL_SCHEME.length):r,[2,new Promise((function(n,r){var o=e.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return u(o)},o.onsuccess=function(){var e,i=o.result,s=i.transaction("model_info_store","readwrite"),a=s.objectStore("model_info_store"),c=a.get(t);c.onsuccess=function(){if(null==c.result)return i.close(),r(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var o=a.delete(t),s=function(){var o=(e=i.transaction("models_store","readwrite")).objectStore("models_store").delete(t);o.onsuccess=function(){return n(c.result.modelArtifactsInfo)},o.onerror=function(t){return r(c.error)}};o.onsuccess=s,o.onerror=function(t){return s(),i.close(),r(c.error)}},c.onerror=function(t){return i.close(),r(c.error)},s.oncomplete=function(){null==e?i.close():e.oncomplete=function(){return i.close()}}},o.onerror=function(t){return r(o.error)}}))]}))}))},t}();if(e.BrowserIndexedDBManager=d,i.env().getBool("IS_BROWSER"))try{a.ModelStoreManagerRegistry.registerManager(h.URL_SCHEME,new d)}catch(t){}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=n(2),a=n(19),c=n(31),l=n(20),u="tensorflowjs_models",h="info",p="model_topology",d="weight_specs",f="weight_data",y="model_metadata";function m(t){return{info:[u,t,h].join("/"),topology:[u,t,p].join("/"),weightSpecs:[u,t,d].join("/"),weightData:[u,t,f].join("/"),modelMetadata:[u,t,y].join("/")}}function g(t){var e=t.split("/");if(e.length<3)throw new Error("Invalid key format: "+t);return e.slice(1,e.length-1).join("/")}e.purgeLocalStorageArtifacts=function(){if(!i.env().getBool("IS_BROWSER")||void 0===window.localStorage)throw new Error("purgeLocalStorageModels() cannot proceed because local storage is unavailable in the current environment.");for(var t=window.localStorage,e=[],n=0;n<t.length;++n){var r=t.key(n),o=u+"/";if(r.startsWith(o)&&r.length>o.length){t.removeItem(r);var s=g(r);-1===e.indexOf(s)&&e.push(s)}}return e};var v=function(){function t(t){if(!i.env().getBool("IS_BROWSER")||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==t||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=m(this.modelPath)}return t.prototype.save=function(t){return r(this,void 0,void 0,(function(){var e,n,r;return o(this,(function(o){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),r=a.getModelArtifactsInfoForJSON(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,a.arrayBufferToBase64String(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy})),[2,{modelArtifactsInfo:r}]}catch(t){throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+r.modelTopologyBytes+", weightSpecsBytes="+r.weightSpecsBytes+", weightDataBytes="+r.weightDataBytes+".")}return[2]}))}))},t.prototype.load=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,i,s,c;return o(this,(function(o){if(null==(t=JSON.parse(this.LS.getItem(this.keys.info))))throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if("JSON"!==t.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},null==(n=JSON.parse(this.LS.getItem(this.keys.topology))))throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,null==(r=JSON.parse(this.LS.getItem(this.keys.weightSpecs))))throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=r,null!=(i=this.LS.getItem(this.keys.modelMetadata))&&(s=JSON.parse(i),e.format=s.format,e.generatedBy=s.generatedBy,e.convertedBy=s.convertedBy),null==(c=this.LS.getItem(this.keys.weightData)))throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=a.base64StringToArrayBuffer(c),[2,e]}))}))},t.URL_SCHEME="localstorage://",t}();function b(t){return new v(t)}e.BrowserLocalStorage=v,e.localStorageRouter=function(t){return i.env().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(v.URL_SCHEME)?b(t.slice(v.URL_SCHEME.length)):null},l.IORouterRegistry.registerSaveRouter(e.localStorageRouter),l.IORouterRegistry.registerLoadRouter(e.localStorageRouter),e.browserLocalStorage=b;var w=function(){function t(){s.assert(i.env().getBool("IS_BROWSER"),(function(){return"Current environment is not a web browser"})),s.assert(void 0!==window.localStorage,(function(){return"Current browser does not appear to support localStorage"})),this.LS=window.localStorage}return t.prototype.listModels=function(){return r(this,void 0,void 0,(function(){var t,e,n,r,i,s;return o(this,(function(o){for(t={},e=u+"/",n="/"+h,r=0;r<this.LS.length;++r)(i=this.LS.key(r)).startsWith(e)&&i.endsWith(n)&&(s=g(i),t[s]=JSON.parse(this.LS.getItem(i)));return[2,t]}))}))},t.prototype.removeModel=function(t){return r(this,void 0,void 0,(function(){var e,n;return o(this,(function(r){var o;if(t=(o=t).startsWith(v.URL_SCHEME)?o.slice(v.URL_SCHEME.length):o,e=m(t),null==this.LS.getItem(e.info))throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]}))}))},t}();if(e.BrowserLocalStorageManager=w,i.env().getBool("IS_BROWSER"))try{c.ModelStoreManagerRegistry.registerManager(v.URL_SCHEME,new w)}catch(t){}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),s=n(19),a=n(20);function c(t){return new Promise((function(t){return setTimeout(t)})).then(t)}var l=function(){function t(e){if(!i.env().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(t.URL_SCHEME)&&(e=e.slice(t.URL_SCHEME.length)),null!=e&&0!==e.length||(e="model"),this.modelTopologyFileName=e+".json",this.weightDataFileName=e+".weights.bin"}return t.prototype.save=function(t){return r(this,void 0,void 0,(function(){var e,n,r,i,a,l;return o(this,(function(o){switch(o.label){case 0:if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},i=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),(a=null==this.jsonAnchor?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,c((function(){return a.dispatchEvent(new MouseEvent("click"))}))];case 2:return o.sent(),null==t.weightData?[3,4]:((l=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,l.href=e,[4,c((function(){return l.dispatchEvent(new MouseEvent("click"))}))]);case 3:o.sent(),o.label=4;case 4:return[2,{modelArtifactsInfo:s.getModelArtifactsInfoForJSON(t)}]}}))}))},t.URL_SCHEME="downloads://",t}();e.BrowserDownloads=l;var u=function(){function t(t){if(null==t||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return t.prototype.load=function(){return r(this,void 0,void 0,(function(){var t,e,n=this;return o(this,(function(r){return t=this.files[0],e=this.files.slice(1),[2,new Promise((function(r,o){var i=new FileReader;i.onload=function(i){var a=JSON.parse(i.target.result),c=a.modelTopology;if(null!=c){0===e.length&&r({modelTopology:c});var l=a.weightsManifest;if(null!=l){var u;try{u=n.checkManifestAndWeightFiles(l,e)}catch(t){return void o(t)}var h=[],p=[],d=[];l.forEach((function(t){t.paths.forEach((function(t){p.push(t),d.push(null)})),h.push.apply(h,t.weights)})),l.forEach((function(t){t.paths.forEach((function(t){var e=new FileReader;e.onload=function(e){var n=e.target.result,o=p.indexOf(t);d[o]=n,-1===d.indexOf(null)&&r({modelTopology:c,weightSpecs:h,weightData:s.concatenateArrayBuffers(d)})},e.onerror=function(e){return o("Failed to weights data from file of path '"+t+"'.")},e.readAsArrayBuffer(u[t])}))}))}else o(new Error("weightManifest field is missing from file "+t.name))}else o(new Error("modelTopology field is missing from file "+t.name))},i.onerror=function(e){return o("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},i.readAsText(t)}))]}))}))},t.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],r=e.map((function(t){return s.basename(t.name)})),o={},i=0,a=t;i<a.length;i++){a[i].paths.forEach((function(t){var i=s.basename(t);if(-1!==n.indexOf(i))throw new Error("Duplicate file basename found in weights manifest: '"+i+"'");if(n.push(i),-1===r.indexOf(i))throw new Error("Weight file with basename '"+i+"' is not provided.");o[t]=e[r.indexOf(i)]}))}if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return o},t}();function h(t){return void 0===t&&(t="model"),new l(t)}e.browserDownloadsRouter=function(t){return i.env().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(l.URL_SCHEME)?h(t.slice(l.URL_SCHEME.length)):null},a.IORouterRegistry.registerSaveRouter(e.browserDownloadsRouter),e.browserDownloads=h,e.browserFiles=function(t){return new u(t)}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}c((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.modelArtifacts=t}return t.prototype.load=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.modelArtifacts]}))}))},t}(),s=function(){function t(t){this.saveHandler=t}return t.prototype.save=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,this.saveHandler(t)]}))}))},t}();e.fromMemory=function(t,e,n,r){if(1===arguments.length){var o=null!=t.modelTopology||null!=t.weightSpecs;return o?new i(t):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new i({modelTopology:t}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new i({modelTopology:t,weightSpecs:e,weightData:n,trainingConfig:r})},e.withSaveHandler=function(t){return new s(t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.config={PUBLISH_URL:"https://us-central1-gweb-teachable-ai.cloudfunctions.net/publish-release-2-1-2/publish"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=()=>JSON.parse(window.localStorage.getItem("__teachable-machine-api__"));e.addPublished=t=>{const e=r();e.published=e.published||[],e.published.push(t),(t=>{JSON.stringify(t,null,"    ")})(e)},e.getPublished=()=>r().published||[]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.version="0.1.0"},function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(e,"__esModule",{value:!0});const o=n(3);let i=class extends o.LitElement{constructor(){super(...arguments),this.label="Teach"}render(){return o.html`
            <style>
                :host {
                    display: inline-block;
                    width: 150px;
                    height: 50px;
                    background-color: lightblue;
                    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.33);
                    overflow: hidden;
                }
                button {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    outline: none;
                    border: 0;
                    cursor: pointer;
                    color: #1a73e8;
                    font-weight: bold;
                    font-size: 125%;
                    text-transform: uppercase;
                }
                #wand {
                    position: relative;
                    top: 3px;
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    margin-right: 10px;
                    /* float: left; */
                }
            </style>
            <button>${o.svg`
                <svg version="1.1" id="wand" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <style type="text/css">
                    .st0{fill:#1967D2;}
                </style>
                <path class="st0" d="M6.66,35.7v7.64h7.64l22.53-22.53l-7.64-7.64L6.66,35.7z M42.74,14.9c0.79-0.79,0.79-2.08,0-2.87l-4.77-4.77
                    c-0.79-0.79-2.08-0.79-2.87,0l-3.73,3.73l7.64,7.64L42.74,14.9z"/>
                <polygon class="st0" points="17.46,8.31 12.37,11.16 7.27,8.31 10.13,13.4 7.27,18.49 12.37,15.64 17.46,18.49 14.61,13.4 "/>
                <polygon class="st0" points="42.45,33.15 37.35,36 32.26,33.15 35.11,38.24 32.26,43.34 37.35,40.48 42.45,43.34 39.59,38.24 "/>
                </svg>
            `}<span>${this.label}</span></button>
        `}};r([o.property({type:String})],i.prototype,"label",void 0),i=r([o.customElement("teachable-button")],i),e.TeachableButtonElement=i},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=n(37),i=n(49);e.WebcamImageApp=class{constructor(){this.teachable=null,this.labels=[],this._isRecordingSample=!1,this._hasTrained=!1}load(){return r(this,void 0,void 0,(function*(){this.teachable=yield o.createTeachable({},{alpha:.35,version:2}),this.teachable.setLabels(this.labels),this.teachable.warm()}))}bindToWebcamForClass(t,e,n,r={}){let o=null;o="string"==typeof t?document.querySelector(t):t,-1===this.labels.indexOf(n)&&(this.labels.push(n),this.teachable.setLabels(this.labels),this._hasTrained=!1);const i=t=>{this.addExample(n,e.lastDisplaySample),r.onSample&&r.onSample(e.lastDisplaySample)},s=t=>{t.preventDefault(),this._isRecordingSample=!0,document.addEventListener("mouseup",a),document.addEventListener("touchend",a),e.addEventListener("sample",i),e.beginCapture()},a=()=>{console.log("on STP MF"),this._isRecordingSample=!1,e.removeEventListener("sample",i),e.endCapture(),document.removeEventListener("mouseup",a),document.removeEventListener("touchend",a)};return o.addEventListener("mousedown",s),o.addEventListener("touchstart",s),o}bindWebcamForPrediction(t,e){t.addEventListener("sample",()=>r(this,void 0,void 0,(function*(){this._hasTrained&&!this._isRecordingSample&&e(yield this.predict(t.lastDisplaySample))})))}bindWebcamForPredictionTopK(t,e){t.addEventListener("sample",()=>r(this,void 0,void 0,(function*(){this._hasTrained&&!this._isRecordingSample&&e(yield this.predictTopK(t.lastDisplaySample))})))}createTrainButton(t={}){const e=new i.ProgressButtonElement;e.classList.add("tm-train-button"),e.label=t.label||"Train",e.style.display="inline-block",e.style.width="210px",e.style.height="50px",e.style.textTransform="uppercase",e.style.setProperty("--background-color","#646487"),e.style.setProperty("--fill-color","#313152"),e.style.setProperty("--color","#ffffff");const n=t.onEpochEnd,o=t.trainParameters&&t.trainParameters.epochs?t.trainParameters.epochs:50,s={onTrainBegin:t.onTrainBegin,onTrainEnd:t.onTrainEnd,onEpochBegin:t.onEpochBegin,onEpochEnd:(t,i)=>r(this,void 0,void 0,(function*(){e.value=t/o,n&&(yield n(t,i))})),onBatchBegin:t.onBatchBegin,onBatchEnd:t.onBatchEnd,onYield:t.onYield};return e.addEventListener("click",()=>r(this,void 0,void 0,(function*(){yield this.train(t.trainParameters,s),t.onTrainComplete&&t.onTrainComplete()}))),e}createWebcam(t={},e){const n=new i.WebcamSampleInput;return n.classList.add("tm-webcam"),n.open=!0,n.autoPlay=!0,n.showRecord=!0,e&&n.addEventListener("sample",()=>r(this,void 0,void 0,(function*(){const t=n.lastDisplaySample;yield e(t)}))),n}addExample(t,e){if(!this.teachable)throw new Error("Attempted to add an example but model is not loaded, be sure to call load() first");const n=this.labels.indexOf(t);if(-1===n)throw new Error(`Class ${t} does not exist in labels`);this.teachable.addExample(n,e),this._hasTrained=!1}getExamples(t){const e=this.labels.indexOf(t);if(-1===e)throw new Error(`Class ${t} does not exist in labels`);return this.teachable.examples[e]}train(t={},e={}){return r(this,void 0,void 0,(function*(){if(t.denseUnits=t.denseUnits||100,t.epochs=t.epochs||50,t.learningRate=t.learningRate||1e-4,t.batchSize=t.batchSize||16,!this.teachable)throw new Error("Attempted to add an example but model is not loaded, be sure to call load() first");yield this.teachable.train(t,e),this._hasTrained=!0}))}predict(t){return r(this,void 0,void 0,(function*(){return this.teachable.predict(t)}))}predictTopK(t){return r(this,void 0,void 0,(function*(){return this.teachable.predictTopK(t)}))}}}]);