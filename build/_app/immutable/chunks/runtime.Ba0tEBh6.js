var St=Array.isArray,Vt=Array.from,Bt=Object.isFrozen,Kt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors,Wt=Object.prototype,Zt=Array.prototype,mt=Object.getPrototypeOf;const q=2,b=4,N=8,rt=16,T=32,$=64,w=128,y=256,A=512,F=1024,L=2048,P=4096,It=8192,st=16384,J=Symbol("$state");function ot(t){return t===this.v}function Nt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Nt(t,this.v)}const $t=1,Gt=2,Qt=4,Xt=8,Jt=16,tn=64,nn=1,en=2,rn=4,sn=8,on=1,un=2,ln="[",Ct="]",fn=`${Ct}!`,Dt=Symbol(),an=["touchstart","touchmove","touchend"];function ut(t){return{f:0,reactions:null,equals:ot,v:t,version:0}}function cn(t){const n=ut(t);return n.equals=wt,c&&(c.d??(c.d=[])).push(n),n}function _n(t,n){var e=t.v!==Dt;if(!O&&e&&v!==null&&W()&&v.f&q)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");return t.equals(n)||(t.v=n,t.version++,W()&&e&&i!==null&&i.f&y&&!(i.f&T)&&(_!==null&&_.includes(t)?(h(i,A),B(i)):S===null?bt([t]):S.push(t)),X(t,A,!0)),n}function pn(t){var n=document.createElement("template");return n.innerHTML=t,n.content}function kt(t){if(St(t))for(var n=0;n<t.length;n++){var e=t[n];e.isConnected&&e.remove()}else t.isConnected&&t.remove()}function Ft(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function x(t,n,e){var r=(t&$)!==0,s={ctx:c,deps:null,dom:null,f:t|A,first:null,fn:n,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null};if(v!==null&&!r&&Ft(s,v),e){var o=k;try{tt(!0),V(s),s.f|=It}finally{tt(o)}}else B(s);return s}function vn(t){if(i===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");if(U)throw new Error("ERR_SVELTE_EFFECT_IN_TEARDOWN");if(i.f&N&&c!==null&&!c.m){const e=c;(e.e??(e.e=[])).push(t)}else lt(t)}function En(t){if(i===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");if(U)throw new Error("ERR_SVELTE_EFFECT_IN_TEARDOWN");return Lt(t)}function dn(t){const n=x($,t,!0);return()=>{G(n)}}function lt(t){return x(b,t,!1)}function Lt(t){return x(N,t,!0)}function hn(t){return x(N|rt,t,!0)}function Tn(t){return x(N|T,t,!0)}function ft(t){var n=t.teardown;if(n!==null){const e=U;nt(!0);try{n.call(null)}finally{nt(e)}}}function G(t){var n=t.dom;if(n!==null&&kt(n),Q(t),Y(t,0),h(t,P),t.transitions)for(const o of t.transitions)o.stop();ft(t);var e=t.parent;if(e!==null&&t.f&T&&e.first!==null){var r=t.prev,s=t.next;r!==null?s!==null?(r.next=s,s.prev=r):(r.next=null,e.last=r):s!==null?(s.prev=null,e.first=s):(e.first=null,e.last=null)}t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function yn(t,n){var e=[];it(t,e,!0),Pt(e,()=>{G(t),n&&n()})}function Pt(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function it(t,n,e){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&n.push(l);for(var r=t.first;r!==null;){var s=r.next,o=(r.f&st)!==0||(r.f&T)!==0;it(r,n,o?e:!1),r=s}}}function An(t){at(t,!0)}function at(t,n){if(t.f&L){t.f^=L,M(t)&&V(t);for(var e=t.first;e!==null;){var r=e.next,s=(e.f&st)!==0||(e.f&T)!==0;at(e,s?n:!1),e=r}if(t.transitions!==null)for(const o of t.transitions)(o.is_global||n)&&o.in()}}const Rn=()=>{};function Sn(t){return t()}function qt(t){for(var n=0;n<t.length;n++)t[n]()}let H=!1,z=[];function ct(){H=!1;const t=z.slice();z=[],qt(t)}function On(t){H||(H=!0,queueMicrotask(ct)),z.push(t)}function xt(){H&&ct()}function mn(t){let n=q|A;i===null&&(n|=w);const e={deps:null,deriveds:null,equals:ot,f:n,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(v!==null&&v.f&q){var r=v;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function _t(t){Q(t);var n=t.deriveds;if(n!==null){t.deriveds=null;for(var e=0;e<n.length;e+=1)Mt(n[e])}}function pt(t,n){_t(t);var e=Et(t),r=(D||t.f&w)&&t.deps!==null?F:y;h(t,r),t.equals(e)||(t.v=e,X(t,A,n))}function Mt(t){_t(t),Y(t,0),h(t,P),t.first=t.last=t.deps=t.reactions=t.fn=null}const vt=0,gt=1;let g=vt,j=!1,k=!1,U=!1;function tt(t){k=t}function nt(t){U=t}let m=[],I=0,v=null,i=null,_=null,a=0,S=null;function bt(t){S=t}let O=!1,D=!1,c=null;function W(){return c!==null&&c.r}function M(t){var f;var n=t.f;if(n&A)return!0;if(n&F){var e=t.deps,r=(n&w)!==0;if(e!==null)for(var s=e.length,o=0;o<s;o++){var l=e[o];if(M(l)&&(pt(l,!0),t.f&A))return!0;var E=l.version;if(r){if(E>t.version)return t.version=E,!0;if(!D&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))){var u=l.reactions;u===null?l.reactions=[t]:u.push(t)}}}r||h(t,y)}return!1}function Et(t){const n=_,e=a,r=S,s=v,o=D,l=O;_=null,a=0,S=null,v=t,D=!k&&(t.f&w)!==0,O=!1;try{let E=t.fn(),u=t.deps;if(_!==null){let f;if(u!==null){const p=u.length,d=a===0?_:u.slice(0,a).concat(_),C=d.length>16&&p-a>1?new Set(d):null;for(f=a;f<p;f++){const R=u[f];(C!==null?!C.has(R):!d.includes(R))&&dt(t,R)}}if(u!==null&&a>0)for(u.length=a+_.length,f=0;f<_.length;f++)u[a+f]=_[f];else t.deps=u=_;if(!D)for(f=a;f<u.length;f++){const p=u[f],d=p.reactions;d===null?p.reactions=[t]:d[d.length-1]!==t&&d.push(t)}}else u!==null&&a<u.length&&(Y(t,a),u.length=a);return E}finally{_=n,a=e,S=r,v=s,D=o,O=l}}function dt(t,n){const e=n.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(t);s!==-1&&(r===0?n.reactions=null:(e[s]=e[r],e.pop()))}r===0&&n.f&w&&(h(n,A),Y(n,0))}function Y(t,n){const e=t.deps;if(e!==null){const r=n===0?null:e.slice(0,n);let s;for(s=n;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&dt(t,o)}}}function Q(t){let n=t.first;t.first=null,t.last=null;for(var e;n!==null;)e=n.next,G(n),n=e}function V(t){var n=t.f;if(!(n&P)){h(t,y);var e=t.ctx,r=i,s=c;i=t,c=e;try{n&rt||Q(t),ft(t);var o=Et(t);t.teardown=typeof o=="function"?o:null}finally{i=r,c=s}}}function ht(){if(I>1e3)throw I=0,new Error("ERR_SVELTE_TOO_MANY_UPDATES");I++}function Tt(t){for(var n=0;n<t.length;n++){var e=t[n];At(e,N|b)}}function et(t){var n=t.length;if(n!==0){ht();for(var e=0;e<n;e++){var r=t[e];!(r.f&(P|L))&&M(r)&&V(r)}}}function Ht(){if(j=!1,I>101)return;const t=m;m=[],Tt(t),j||(I=0)}function B(t){g===vt&&(j||(j=!0,queueMicrotask(Ht)));for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&T){if(!(e&y))return;h(n,F)}}m.push(n)}function yt(t,n,e,r){var s=t.first,o=[];t:for(;s!==null;){var l=s.f,E=(l&(P|L))===0,u=l&T,f=(l&y)!==0,p=s.first;if(E&&(!u||!f)){if(u&&h(s,y),l&N){if(u){if(!e&&p!==null){s=p;continue}}else if(M(s)&&(V(s),p=s.first),!e&&p!==null){s=p;continue}}else if(l&b)if(u||f){if(!e&&p!==null){s=p;continue}}else o.push(s)}var d=s.next;if(d===null){let R=s.parent;for(;R!==null;){if(t===R)break t;var K=R.next;if(K!==null){s=K;continue t}R=R.parent}}s=d}if(o.length>0&&(n&b&&r.push(...o),!e))for(var C=0;C<o.length;C++)yt(o[C],n,!1,r)}function At(t,n,e=!1){var r=[],s=k;k=!0;try{t.first===null&&!(t.f&T)?et([t]):(yt(t,n,e,r),et(r))}finally{k=s}}function In(t){I=0,At(t,N,!0)}function Rt(t,n=!0){var e=g,r=m;try{ht();const o=[];g=gt,m=o,n&&Tt(r);var s=t==null?void 0:t();return xt(),(m.length>0||o.length>0)&&Rt(),I=0,s}finally{g=e,m=r}}async function Nn(){await Promise.resolve(),Rt()}function jt(t){const n=t.f;if(n&P)return t.v;if(v!==null&&!(v.f&(T|$))&&!O){const e=(v.f&w)!==0,r=v.deps;_===null&&r!==null&&r[a]===t&&!(e&&i!==null)?a++:(r===null||a===0||r[a-1]!==t)&&(_===null?_=[t]:_.push(t)),S!==null&&i!==null&&i.f&y&&!(i.f&T)&&S.includes(t)&&(h(i,A),B(i))}return n&q&&M(t)&&pt(t,!1),t.v}function X(t,n,e){var r=t.reactions;if(r!==null)for(var s=W(),o=r.length,l=0;l<o;l++){var E=r[l];if(!((!e||!s)&&E===i)){var u=E.f;h(E,n);var f=(u&F)!==0,p=(u&w)!==0;(u&y||f&&p)&&(E.f&q?X(E,F,e):B(E))}}}function wn(t){const n=O;try{return O=!0,t()}finally{O=n}}const Ut=~(A|F|y);function h(t,n){t.f=t.f&Ut|n}function Yt(t){return typeof t=="object"&&t!==null&&typeof t.f=="number"}function Cn(t,n=!1,e){c={x:null,c:null,e:null,m:!1,p:c,d:null,s:t,r:n,l1:[],l2:ut(!1),u:null}}function Dn(t){const n=c;if(n!==null){t!==void 0&&(n.x=t);const e=n.e;if(e!==null){n.e=null;for(let r=0;r<e.length;r++)lt(e[r])}c=n.p,n.m=!0}return t||{}}function kn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(J in t)Z(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&J in e&&Z(e)}}}function Z(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t);for(let r in t)try{Z(t[r],n)}catch{}const e=mt(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Ot(e);for(let s in r){const o=r[s].get;if(o)try{o.call(t)}catch{}}}}}function Fn(t){return Yt(t)?jt(t):t}export{$t as $,un as A,Bt as B,y as C,Wt as D,Zt as E,ut as F,mt as G,ln as H,hn as I,st as J,fn as K,kt as L,An as M,yn as N,On as O,an as P,rn as Q,wt as R,J as S,on as T,Dt as U,nn as V,en as W,mn as X,sn as Y,Nn as Z,Xt as _,vn as a,Gt as a0,tn as a1,it as a2,Pt as a3,G as a4,Jt as a5,Qt as a6,Fn as a7,i as b,c,wn as d,Sn as e,In as f,jt as g,kn as h,Cn as i,lt as j,Lt as k,Ct as l,cn as m,Rn as n,zt as o,Dn as p,Kt as q,qt as r,_n as s,St as t,En as u,Rt as v,Vt as w,dn as x,Tn as y,pn as z};
