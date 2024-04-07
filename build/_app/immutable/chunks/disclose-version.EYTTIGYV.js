import{n as x,I as Y,J as b,K as O,k as B,L as A,M as U,N as $,P as C,q as j,h as q,p as F,c as G,b as J,O as K,T as I,Q}from"./runtime.DIUnRAbE.js";let f=!1;function w(t){f=t}let i=null;function W(t){i=t}function E(t){if(t.nodeType!==8)return t;var e=t;if((e==null?void 0:e.data)!==x)return t;for(var n=[],r=0;(e=e.nextSibling)!==null;){if(e.nodeType===8){var o=e.data;if(o===x)r+=1;else if(o[0]===Y){if(r===0)return i=n,e;r-=1}}n.push(e)}throw new Error("Expected a closing hydration marker")}var d,m,M,L,S,V,D;function z(){d===void 0&&(d=Node.prototype,m=Element.prototype,M=Text.prototype,d.appendChild,L=d.cloneNode,m.__click=void 0,M.__nodeValue=" ",m.__className="",m.__attributes=null,S=b(d,"firstChild").get,V=b(d,"nextSibling").get,D=b(d,"textContent").set,b(m,"className").set)}function X(t,e){return L.call(t,e)}function h(){return document.createTextNode("")}function oe(t){const e=S.call(t);return f?e===null?t.appendChild(h()):E(e):e}function ie(t,e){if(!f)return S.call(t);const n=t[0];if(e&&(n==null?void 0:n.nodeType)!==3){const r=h();return i.unshift(r),n==null||n.before(r),r}return E(n)}function se(t,e=!1){const n=V.call(t);if(!f)return n;if(e&&(n==null?void 0:n.nodeType)!==3){const r=h();if(n){const o=i.indexOf(n);i.splice(o,0,r),n.before(r)}else i.push(r);return r}return E(n)}function Z(t){D.call(t,"")}function ue(t){for(var e=0;e<t.length;e++)P.add(t[e]);for(var n of N)n(t)}function R(t,e){var s;var n=t.ownerDocument,r=e.type,o=((s=e.composedPath)==null?void 0:s.call(e))||[],a=o[0]||e.target;e.target!==a&&O(e,"target",{configurable:!0,value:a});var v=0,u=e.__root;if(u){var l=o.indexOf(u);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var T=o.indexOf(t);if(T===-1)return;l<=T&&(v=l+1)}for(a=o[v]||e.target,O(e,"currentTarget",{configurable:!0,get(){return a||n}});a!==null;){var _=a.parentNode||a.host||null,y="__"+r,p=a[y];if(p!==void 0&&!a.disabled)if(B(p)){var[c,...g]=p;c.apply(a,[e,...g])}else p.call(a,e);if(e.cancelBubble||_===t||a===t)break;a=_}e.__root=t,a=t}const P=new Set,N=new Set;function ce(t,e){const n=t.__nodeValue,r=ee(e);f&&t.nodeValue===r?t.__nodeValue=r:n!==r&&(t.nodeValue=r,t.__nodeValue=r)}function fe(t,e,n,r){e===void 0?r!==null&&r(t):e(t,n)}function ee(t){return typeof t=="string"?t:t==null?"":t+""}function te(t,e){const n=e.anchor??e.target.appendChild(h());return A(()=>k(t,{...e,anchor:n}),!1)}function de(t,e){const n=e.target,r=i;let o=!1;try{return A(()=>{w(!0);for(var a=n.firstChild;a&&(a.nodeType!==8||a.data!==x);)a=a.nextSibling;if(!a)throw new Error("Missing hydration marker");const v=E(a),u=k(t,{...e,anchor:v});return w(!1),o=!0,u},!1)}catch(a){if(!o&&e.recover!==!1)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",a),Z(n),w(!1),te(t,e);throw a}finally{w(!!r),W(r)}}function k(t,{target:e,anchor:n,props:r={},events:o,context:a,intro:v=!1}){z();const u=new Set,l=R.bind(null,e),T=R.bind(null,document),_=c=>{for(let g=0;g<c.length;g++){const s=c[g];u.has(s)||(u.add(s),e.addEventListener(s,l,C.includes(s)?{passive:!0}:void 0),document.addEventListener(s,T,C.includes(s)?{passive:!0}:void 0))}};_(U(P)),N.add(_);let y;const p=$(()=>(j(()=>{if(a){q({});var c=G;c.c=a}o&&(r.$$events=o),y=t(n,r)||{},a&&F()}),()=>{for(const c of u)e.removeEventListener(c,l);N.delete(_)}));return H.set(y,p),y}let H=new WeakMap;function le(t){const e=H.get(t);e==null||e()}function ne(t,e){var n=(e&I)!==0,r=(e&Q)!==0,o;return()=>f?n?i:i[0]:(o||(o=K(t),n||(o=o.firstChild)),r?document.importNode(o,!0):X(o,!0))}function _e(t){if(!f)return h();var e=i[0];return e||t.before(e=h()),e}const pe=ne("<!>",I);function he(t,e){var n=e;if(!f){var r=e;r.nodeType===11&&(n=[...r.childNodes]),t.before(r)}J.dom=n}const re="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(re);export{he as a,ce as b,pe as c,oe as d,se as e,ie as f,h as g,f as h,E as i,w as j,i as k,ue as l,ee as m,de as n,te as o,_e as p,fe as s,ne as t,le as u};
