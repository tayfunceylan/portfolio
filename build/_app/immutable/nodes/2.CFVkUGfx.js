import{g as oe,h as R,i as W,j as U,k as J,l as le,a as y,t as k,d as m,e as t,m as z,b as C,s as ue,f as de}from"../chunks/disclose-version.z428X2uo.js";import{y as ce,E as X,n as pe,z as ve,A as me,H as fe,B as Z,v as ee,D as ge,F as P,s as $,G as te,I as F,m as M,J as V,K as xe,L as he,M as _e,N as be,S as ye,O as we,r as w,p as q,g as D,h as G,Q as A}from"../chunks/runtime.Cy1iCttA.js";import{i as Q}from"../chunks/lifecycle.CJUEb_CW.js";let B=null;function ke(e,a,r){for(var s=[],u=e.length,o=0;o<u;o++)xe(e[o],s,!0);if(e.length>0&&s.length===0&&a!==null){var c=a.parentNode;c.textContent="",c.append(a)}he(s,()=>{for(var n=0;n<u;n++)_e(e[n]);r!==void 0&&r()})}function Se(e,a,r,s,u,o,c){var n={flags:a,items:[]},g=(a&X)!==0;if(g){var v=e;e=R?W(v.firstChild):v.appendChild(oe())}var p=null;ce(()=>{var l=r(),i=pe(l)?l:l==null?[]:Array.from(l),x=s===null?i:i.map(s),b=i.length,h=n.flags;h&F&&!be(i)&&!(ye in i)&&(h^=F,h&we&&!(h&P)&&(h^=P));let _=!1;if(R){var S=e.data===ve;S!==(b===0)&&(me(J),U(!1),_=!0)}if(R){for(var I=[],d=J[0],f=0;f<b;f++){if(d.nodeType!==8||d.data!==fe){_=!0,U(!1);break}d=W(d),I[f]=ae(d,i[f],x==null?void 0:x[f],f,u,h),d=d.nextSibling}if(b>0)for(;d!==e;){var E=d.nextSibling;d.remove(),d=E}n.items=I}R||c(i,n,e,u,h,x),o!==null&&(b===0?p?Z(p):p=ee(()=>o(e)):p!==null&&ge(p,()=>{p=null})),_&&U(!0)})}function O(e,a,r,s,u=null){Se(e,a,r,null,s,u,Ie)}function Ie(e,a,r,s,u){for(var o=a.items,c=o.length,n=e.length,g=Math.min(c,n),v=Array(n),p,l,i=0;i<g;i+=1)l=e[i],p=o[i],v[i]=p,Le(p,l,i,u),Z(p.e);if(n>c){for(;i<n;i+=1)l=e[i],p=ae(r,l,null,i,s,u),v[i]=p;a.items=v}else if(c>n){var x=[];for(i=n;i<c;i+=1)x.push(o[i].e);var b=u&X&&n===0?r:null;ke(x,b,()=>{a.items.length=n})}}function Le(e,a,r,s){s&P&&$(e.v,a),s&te?$(e.i,r):e.i=r}function ae(e,a,r,s,u,o){var c=B;try{var n=(o&P)!==0,g=(o&F)===0,v=n?g?M(a):V(a):a,p=o&te?V(s):s,l={i:p,v,k:r,a:null,e:null};return B=l,l.e=ee(()=>u(e,v,p)),l}finally{B=c}}function Ee(e){R&&(L(e,"value",null),L(e,"checked",null))}function L(e,a,r){r=r==null?null:r+"";var s=e.__attributes??(e.__attributes={});R&&(s[a]=e.getAttribute(a),a==="src"||a==="href"||a==="srcset")||s[a]!==(s[a]=r)&&(r===null?e.removeAttribute(a):e.setAttribute(a,r))}let K=!1;function Ae(e,a,r,s=r){e.addEventListener(a,r);const u=e.__on_r;u?e.__on_r=()=>{u(),s()}:e.__on_r=s,K||(K=!0,document.addEventListener("reset",o=>{Promise.resolve().then(()=>{var c;if(!o.defaultPrevented)for(const n of o.target.elements)(c=n.__on_r)==null||c.call(n)})},{capture:!0}))}function Ce(e,a,r){Ae(e,"change",()=>{var s=e.checked;r(s)}),a()==null&&r(!1),w(()=>{var s=a();e.checked=!!s})}const N=(e,a)=>$(a,!D(a));var Te=k('<a class="group/section pointer-events-auto space-y-0.5 py-4"><div class="text-center font-mono text-lg text-mint-tulip-500"> </div> <div class="text-center font-mono text-lg text-slate-400 transition duration-300 group-hover/section:text-mint-tulip-500"> </div></a>'),je=k('<a class="group pointer-events-auto flex items-center space-x-1 px-3"><div class="text-center font-mono text-sm text-mint-tulip-500"> </div> <div class="text-center font-mono text-sm text-slate-300 transition duration-300 group-hover:text-mint-tulip-500"> </div></a>'),Re=k(`<nav class="fixed left-1/2 top-0 z-10 flex w-full max-w-screen-lg -translate-x-1/2 items-center justify-between bg-blue-zodiac-800/85 px-7 py-4  shadow-xl shadow-blue-zodiac-800 backdrop-blur-md transition-all duration-1000 md:px-9"><a href="/" class="text-4xl font-semibold text-mint-tulip-500">T</a> <label class="peer relative size-10 text-mint-tulip-500 md:hidden"><div class="absolute left-3/4 top-1/2"><input type="checkbox" class="peer hidden"> <span class="absolute z-20 h-1 w-7 -translate-x-[calc(50%+7px)] -translate-y-[calc(50%+10px)] scale-x-150 bg-current transition duration-500 ease-in
						peer-checked:-translate-x-1/2 peer-checked:-translate-y-1/2
						peer-checked:rotate-[405deg]
						peer-checked:scale-100
					"></span> <span class="absolute z-20 h-1 w-7 -translate-x-1/2 -translate-y-1/2 bg-current transition duration-500 ease-in
						peer-checked:translate-y-4
						peer-checked:opacity-0
					"></span> <span class="absolute z-20 h-1 w-7 -translate-x-[calc(50%-7px)] -translate-y-[calc(50%-10px)] scale-x-50 bg-current transition duration-500 ease-in
						peer-checked:-translate-x-1/2 peer-checked:-translate-y-1/2
						peer-checked:rotate-[315deg]
						peer-checked:scale-100
					"></span> <div class="group pointer-events-none fixed left-0 top-0 flex h-screen translate-x-[0vw] flex-nowrap transition duration-1000 peer-checked:-translate-x-[100vw]"><button class="pointer-events-auto h-full w-[125vw] scale-0 opacity-0 backdrop-blur-sm transition-opacity duration-1000
						peer-checked:group-[]:scale-100
						peer-checked:group-[]:opacity-100
					"></button> <div class="pointer-events-none flex h-full w-[75vw] flex-col items-center justify-center bg-blue-zodiac-700 ease-out"></div></div></div></label> <div class="hidden md:flex"></div></nav>`);function ze(e,a){G(a,!1);let r=M(!1);const s=M(["About","Jobs","Projects","Contact"]);Q();var u=Re(),o=m(u),c=t(t(o,!0)),n=m(c),g=m(n);Ee(g);var v=t(t(g,!0)),p=t(t(v,!0)),l=t(t(p,!0)),i=t(t(l,!0)),x=m(i);x.__click=[N,r];var b=t(t(x,!0));O(b,9,()=>D(s),(_,S,I)=>{var d=Te();w(()=>L(d,"href",`#${z(A(S).toLowerCase())}`)),d.__click=[N,r];var f=m(d),E=m(f);w(()=>C(E,`${z((A(I)+1).toString().padStart(2,"0"))}.`));var T=t(t(f,!0)),j=m(T);w(()=>C(j,A(S))),y(_,d)});var h=t(t(c,!0));O(h,9,()=>D(s),(_,S,I)=>{var d=je();w(()=>L(d,"href",`#${z(A(S).toLowerCase())}`)),d.__click=[N,r];var f=m(d),E=m(f);w(()=>C(E,`${z((A(I)+1).toString().padStart(2,"0"))}.`));var T=t(t(f,!0)),j=m(T);w(()=>C(j,A(S))),y(_,d)}),Ce(g,()=>D(r),_=>$(r,_)),y(e,u),q()}le(["click"]);let He=1;const De=()=>`${(He++).toString().padStart(2,"0")}.`;var Pe=k('<div class="flex min-h-screen flex-col gap-7 py-24"><div class="flex items-center gap-3 text-nowrap font-mono"><div class="h-0.5 w-full bg-slate-500"></div> <span class="text-lg text-mint-tulip-500"> </span> <span class="text-xl font-semibold text-slate-300"> </span> <div class="h-0.5 w-full bg-slate-500"></div></div> <!></div>');function H(e,a){G(a,!1),Q();var r=Pe(),s=m(r),u=m(s),o=t(t(u,!0)),c=m(o);w(()=>C(c,De()));var n=t(t(o,!0)),g=m(n),v=t(t(s,!0));ue(v,a.children,{},null),w(()=>{L(r,"id",a.id),C(g,a.title)}),y(e,r),q()}var $e=k(`<li class="truncate text-nowrap before:pr-2 before:text-mint-tulip-500 before:content-['▹']"> </li>`),Ue=k(`<div class="grid grid-cols-1 gap-7 md:grid-cols-2"><div class="space-y-6"><p>Helloo! My name is Tayfun and I enjoy creating things. My interest in programming started
				back in 2018 when I was in school. I decided that I want to get notified if there were
				changes on our substition schedules (Vertretungungsplan). So I began teaching myself Python
				and hooking that script on a Raspberry Pi. It didn't last long until my classmates wanted to
				take advantage of the program as well. It became very popular at school. In the end there
				were approximately 150 registered users. I was constantly adding new features to the program
				and had a lot of fun. — turns out web scraping our schedule at school taught me a lot about
				Python, managing a server and programming in general!</p> <p>Fast-forward to today, and I’ve had the privilege of studying IT-Security at
				Ruhr-Universität Bochum.</p> <p>Here are a few technologies I’ve been working with recently:</p> <ul class="my-5 grid grid-cols-2 gap-2"></ul></div> <div class="mx-10"><div class="group relative mx-auto mb-auto flex max-h-80 max-w-80 justify-center"><div class="absolute -z-10 size-full translate-x-6 translate-y-6 rounded border-4 border-mint-tulip-500
						transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4
					"></div> <div class="transition-color absolute -z-10 size-full rounded bg-mint-tulip-200 duration-500 ease-out group-hover:bg-white"></div> <picture><source type="image/avif"><source type="image/webp"><source type="image/jpeg"><img src=""+new URL('../assets/me.zISFpFk6.jpeg', import.meta.url).href+"" class="rounded mix-blend-multiply" alt="Portrait" width="559" height="559"></picture></div></div></div>`),Be=k(`<p class="text-center">Currently I'm working as a student assistant... Lorem ipsum dolor sit amet, consetetur
		sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
		erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
		kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
		amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
		magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
		Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>`),Ne=k(`<p class="text-center">Here are a few projects I’ve worked on recently. Want to see more? Email me. Lorem ipsum dolor
		sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
		dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
		rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
		ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
		labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet.</p>`),Fe=k('<p class="text-center">Feel free to get in touch. You can find me on these social media platforms.</p> <a href="https://www.xing.com/profile/Tayfun_Ceylan3" class="mx-auto mt-2 w-fit rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400">Say Hello</a>',1),Me=k(`<!> <div class="flex min-h-screen flex-col justify-center gap-4 py-24 transition-all duration-1000 md:gap-6"><p class="max-w-max animate-typing overflow-hidden whitespace-nowrap border-r-2 font-mono text-lg text-mint-tulip-500 transition-all sm:text-xl md:text-2xl">Hi, my name is</p> <p class="text-4xl font-bold text-slate-300 transition-all duration-1000 sm:text-5xl md:text-7xl">Tayfun Ceylan.</p> <p class="text-4xl font-bold text-slate-400 transition-all duration-1000 sm:text-5xl md:text-7xl">I study IT-Security at Ruhr-Universität Bochum.</p> <p class="max-w-lg">I’m an IT student specializing in cryptography. In my free time I like tinker with programming
		projects .</p> <button class="mt-7 rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400">Check out my GitHub!</button></div> <!> <!> <!> <!>`,1);function Ye(e,a){G(a,!1),Q();var r=Me(),s=de(r);ze(s,{});var u=t(t(s,!0)),o=t(t(u,!0));H(o,{title:"About Me",id:"about",children:(v,p)=>{var l=Ue(),i=m(l),x=m(i),b=t(t(x,!0)),h=t(t(b,!0)),_=t(t(h,!0));O(_,9,()=>["Rust","Python (Django, DRF)","Svelte","JavaScript","SQL","Git","Linux","HTML & CSS"],(se,ne,Oe)=>{var Y=$e(),ie=m(Y);w(()=>C(ie,A(ne))),y(se,Y)});var S=t(t(i,!0)),I=m(S),d=m(I),f=t(t(d,!0)),E=t(t(f,!0)),T=m(E);L(T,"srcset",""+new URL("../assets/me.Dr0GEEBw.avif",import.meta.url).href+" 280w, "+new URL("../assets/me.CDwdNDhk.avif",import.meta.url).href+" 559w");var j=t(T);L(j,"srcset",""+new URL("../assets/me.Bzd7oOqy.webp",import.meta.url).href+" 280w, "+new URL("../assets/me.CwQRklDQ.webp",import.meta.url).href+" 559w");var re=t(j);L(re,"srcset",""+new URL("../assets/me.B9xbkOrS.jpeg",import.meta.url).href+" 280w, "+new URL("../assets/me.zISFpFk6.jpeg",import.meta.url).href+" 559w"),y(v,l)}});var c=t(t(o,!0));H(c,{title:"Where I’ve Worked",id:"jobs",children:(v,p)=>{var l=Be();y(v,l)}});var n=t(t(c,!0));H(n,{title:"What I’ve Built",id:"projects",children:(v,p)=>{var l=Ne();y(v,l)}});var g=t(t(n,!0));H(g,{title:"Get In Touch",id:"contact",children:(v,p)=>{var l=Fe();y(v,l)}}),y(e,r),q()}export{Ye as component};