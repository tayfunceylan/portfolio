import{h as L,l as oe,n as ke,g as le,i as ee,o as Se,p as Ie,a as k,t as A,d as o,e as t,b as T,q as G,s as Ae,c as Z,f as W}from"../chunks/disclose-version.B-pe2IlD.js";import{I as Ce,_ as ue,t as ne,K as Ee,L as Te,H as ze,M as pe,y as fe,N as Ne,j as Pe,d as Re,$ as J,s as q,a0 as ie,a1 as re,m as K,F as de,a2 as De,a3 as He,a4 as Le,a5 as je,B as Be,S as Fe,a6 as $e,k as E,p as F,i as $,g as U,a7 as v}from"../chunks/runtime.Ba0tEBh6.js";import{i as M}from"../chunks/lifecycle.ifvBC2-U.js";let te=null;function j(e,a){return a}function Me(e,a,r){for(var n=[],d=e.length,f=0;f<d;f++)De(e[f].e,n,!0);if(d>0&&n.length===0&&a!==null){var p=a.parentNode;p.textContent="",p.append(a)}He(n,()=>{for(var u=0;u<d;u++)Le(e[u].e);r!==void 0&&r()})}function B(e,a,r,n,d,f=null){var p={flags:a,items:new Map,next:null},u=(a&ue)!==0;if(u){var w=e;e=L?oe(w.firstChild):w.appendChild(ke())}var m=null;Ce(()=>{var S=r(),s=ne(S)?S:S==null?[]:Array.from(S),_=s.length,l=p.flags;l&re&&!Be(s)&&!(Fe in s)&&(l^=re,l&$e&&!(l&J)&&(l^=J));let z=!1;if(L){var y=e.data===Ee;y!==(_===0)&&(Te(le),ee(!1),z=!0)}if(L){for(var h=le[0],x=p,g,i=0;i<_;i++){if(h.nodeType!==8||h.data!==ze){z=!0,ee(!1);break}h=oe(h);var c=s[i],I=n(c,i);g=me(h,x,null,c,I,i,d,l),p.items.set(I,g),h=h.nextSibling,x=g}if(_>0)for(;h!==e;){var C=h.nextSibling;h.remove(),h=C}}L||Ve(s,p,e,d,l,n),f!==null&&(_===0?m?pe(m):m=fe(()=>f(e)):m!==null&&Ne(m,()=>{m=null})),z&&ee(!0)})}function Ve(e,a,r,n,d,f){var Q;var p=(d&je)!==0,u=(d&(J|ie))!==0,w=e.length,m=a.items,S=a.next,s=S,_=new Set,l=a,z=[],y=[],h=[],x,g,i,c;if(p)for(c=0;c<w;c+=1)x=e[c],g=f(x,c),i=m.get(g),i!==void 0&&((Q=i.a)==null||Q.measure(),z.push(i));for(c=0;c<w;c+=1){if(x=e[c],g=f(x,c),i=m.get(g),i===void 0){l=me(s?ae(s):r,l,l.next,x,g,c,n,d),m.set(g,l),y=[],h=[],s=l.next;continue}if(u&&Ue(i,x,c,d),pe(i.e),i!==s){if(_.has(i)){if(y.length<h.length){var I=h[0],C=ae(I),b;l=I.prev;var N=y[0],P=y[y.length-1];for(V(N.prev,P.next),V(l,N),V(P,I),b=0;b<y.length;b+=1)ce(y[b],C);for(b=0;b<h.length;b+=1)_.delete(h[b]);s=I,l=P,c-=1,y=[],h=[]}else _.delete(i),ce(i,s?ae(s):r),V(i.prev,i.next),V(i,l.next),V(l,i),l=i;continue}for(y=[],h=[];s!==null&&s.k!==g;)_.add(s),h.push(s),s=s.next;if(s===null)continue;i=s}y.push(i),l=i,s=i.next}const D=Array.from(_);for(;s;)D.push(s),s=s.next;var Y=d&ue&&w===0?r:null;Me(D,Y,()=>{for(var H=0;H<D.length;H+=1){var O=D[H];m.delete(O.k),V(O.prev,O.next)}}),p&&Pe(()=>{Re(()=>{var H;for(i of z)(H=i.a)==null||H.apply()})})}function ae(e){var a=e.e.dom;return ne(a)?a[0]:a}function Ue(e,a,r,n){n&J&&q(e.v,a),n&ie?q(e.i,r):e.i=r}function me(e,a,r,n,d,f,p,u){var w=te;try{var m=(u&J)!==0,S=(u&re)===0,s=m?S?K(n):de(n):n,_=u&ie?de(f):f,l={i:_,v:s,k:d,a:null,e:null,prev:a,next:r};return a.next=l,r!==null&&(r.prev=l),te=l,l.e=fe(()=>p(e,s,_)),l}finally{te=w}}function ce(e,a){var r=e.e.dom;if(r!==null)if(ne(r))for(var n=0;n<r.length;n++)a.before(r[n]);else a.before(r)}function V(e,a){e.next=a,a!==null&&(a.prev=e)}function he(e){L&&(R(e,"value",null),R(e,"checked",null))}function R(e,a,r){r=r==null?null:r+"";var n=e.__attributes??(e.__attributes={});L&&(n[a]=e.getAttribute(a),a==="src"||a==="href"||a==="srcset")||n[a]!==(n[a]=r)&&(r===null?e.removeAttribute(a):e.setAttribute(a,r))}function Oe(e,a){var r=e.__className,n=Ge(a);L&&e.className===n?e.__className=n:(r!==n||L&&e.className!==n)&&(a==null?e.removeAttribute("class"):Se(e,n),e.__className=n)}function Ge(e){return e??""}let ve=!1;function Je(e,a,r,n=r){e.addEventListener(a,r);const d=e.__on_r;d?e.__on_r=()=>{d(),n()}:e.__on_r=n,ve||(ve=!0,document.addEventListener("reset",f=>{Promise.resolve().then(()=>{var p;if(!f.defaultPrevented)for(const u of f.target.elements)(p=u.__on_r)==null||p.call(u)})},{capture:!0}))}function Ke(e,a,r){Je(e,"change",()=>{var n=e.checked;r(n)}),a()==null&&r(!1),E(()=>{var n=a();e.checked=!!n})}const We=(e,a)=>q(a,!U(a));var Ye=A('<a class="group/section min-w-32 space-y-0.5 py-4"><div class="text-center font-mono text-lg text-mint-tulip-500"> </div> <div class="text-center font-mono text-lg text-slate-400 transition duration-300 group-hover/section:text-mint-tulip-500"> </div></a>'),Qe=A('<a><div class="text-center font-mono text-sm text-mint-tulip-500"> </div> <div class="text-center font-mono text-sm text-slate-300 transition duration-300 group-hover:text-mint-tulip-500"> </div></a>'),qe=A(`<nav class="fixed left-1/2 top-0 z-10 flex w-full max-w-screen-lg -translate-x-1/2 items-center justify-between bg-blue-zodiac-800 px-7 py-4 shadow-xl shadow-blue-zodiac-800 transition-all duration-1000 md:px-9"><a href="/" class="z-10 text-4xl font-semibold text-mint-tulip-500">T</a> <label for="navbar" class="peer relative size-10 text-mint-tulip-500 md:hidden"><div class="absolute z-20 size-14"></div> <div class="absolute left-3/4 top-1/2"><input type="checkbox" id="navbar" class="peer hidden"> <span class="absolute z-20 h-1 w-7 -translate-x-[calc(50%+7px)] -translate-y-[calc(50%+10px)] scale-x-150 bg-current transition duration-500 ease-in
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
					"></span> <div class="fixed right-0 top-0 -z-10 h-screen w-screen translate-x-full opacity-0 backdrop-blur transition-opacity duration-500 peer-checked:translate-x-0 peer-checked:opacity-100"></div> <div class="fixed right-0 top-[50vh] z-20 my-auto flex -translate-y-1/2 translate-x-full flex-col items-center justify-center transition duration-500 ease-in-out peer-checked:-translate-x-[calc(37.5vw-50%)]"></div></div></label> <div class="fixed right-0 top-0 z-10 h-screen w-9/12 translate-x-full bg-blue-zodiac-700 transition duration-500 ease-in-out peer-has-[:checked]:translate-x-0 md:hidden"></div> <div class="hidden md:flex"></div></nav>`);function Ze(e,a){$(a,!1);let r=K(!1);const n=K(["Hi","About","Jobs","Projects","Contact"]);M();var d=qe(),f=o(d),p=t(t(f,!0)),u=o(p),w=t(t(u,!0)),m=o(w);he(m);var S=t(t(m,!0)),s=t(t(S,!0)),_=t(t(s,!0)),l=t(t(_,!0)),z=t(t(l,!0));B(z,9,()=>U(n),j,(x,g,i)=>{var c=Ye();E(()=>R(c,"href",v(i)!=0?`#${v(g).toLowerCase()}`:"")),c.__click=[We,r];var I=o(c),C=o(I);E(()=>T(C,`${G(v(i).toString().padStart(2,"0"))}.`));var b=t(t(I,!0)),N=o(b);E(()=>T(N,v(g))),k(x,c)});var y=t(t(p,!0)),h=t(t(y,!0));B(h,9,()=>U(n),j,(x,g,i)=>{var c=Qe();E(()=>R(c,"href",v(i)!=0?`#${v(g).toLowerCase()}`:"")),Oe(c,`group flex items-center space-x-1 px-3 ${G(`animate-slide-in-${v(i)+1}`)}`);var I=o(c),C=o(I);E(()=>T(C,`${G(v(i).toString().padStart(2,"0"))}.`));var b=t(t(I,!0)),N=o(b);E(()=>T(N,v(g))),k(x,c)}),Ke(m,()=>U(r),x=>q(r,x)),k(e,d),F()}Ie(["click"]);var Xe=A(`<div class="flex min-h-screen flex-col justify-center gap-4 py-24 transition-all duration-1000 md:gap-6"><p class="max-w-max animate-typing overflow-hidden whitespace-nowrap border-r-2 font-mono text-lg text-mint-tulip-500 transition-all sm:text-xl md:text-2xl">Hi, my name is</p> <p class="animate-slide-in-1 text-4xl font-bold text-slate-300 transition-all duration-1000 sm:text-5xl md:text-7xl">Tayfun Ceylan.</p> <p class="animate-slide-in-2 text-4xl font-bold text-slate-400 transition-all duration-1000 sm:text-5xl md:text-7xl">I study IT-Security at Ruhr-Universität Bochum.</p> <p class="animate-slide-in-3 max-w-lg">I’m an IT student specializing in cryptography. In my free time I like tinker with programming
		projects .</p> <a target="_blank" href="https://github.com/tayfunceylan" class="animate-slide-in-4 mt-7 rounded-md border-2 border-mint-tulip-500 p-4 text-center font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400">Check out my GitHub!</a></div>`);function et(e,a){$(a,!1),M();var r=Xe();k(e,r),F()}var tt=A('<div class="flex min-h-screen flex-col gap-7 py-24"><div class="flex items-center gap-3 text-nowrap font-mono"><div class="h-0.5 w-full bg-slate-500"></div> <span class="text-lg text-mint-tulip-500"> </span> <span class="text-xl font-semibold text-slate-300"> </span> <div class="h-0.5 w-full bg-slate-500"></div></div> <!></div>');function X(e,a){$(a,!1),M();var r=tt(),n=o(r),d=o(n),f=t(t(d,!0)),p=o(f);E(()=>T(p,`${G(a.sectionNumber.padStart(2,"0"))}.`));var u=t(t(f,!0)),w=o(u),m=t(t(n,!0));Ae(m,a.children,{},null),E(()=>{R(r,"id",a.id),T(w,a.title)}),k(e,r),F()}var at=A(`<li class="truncate text-nowrap before:pr-2 before:text-mint-tulip-500 before:content-['▹']"> </li>`),rt=A(`<div class="grid grid-cols-1 gap-7 md:grid-cols-2"><div class="space-y-6"><p>Helloo! My name is Tayfun and I enjoy creating things. My interest in programming started
				back in 2018 when I was in school. I decided that I want to get notified if there were
				changes on our substition schedules (Vertretungungsplan). So I began teaching myself Python
				and hooking that script on a Raspberry Pi. It didn't last long until my classmates wanted to
				take advantage of the program as well. It became very popular at school. In the end there
				were approximately 150 registered users. I was constantly adding new features to the program
				and had a lot of fun. — turns out web scraping our schedule at school taught me a lot about
				Python, managing a server and programming in general!</p> <p>Fast forward to today and I’ve had the privilege of studying IT-Security at Ruhr-Universität
				Bochum.</p> <p>Here are a few technologies I’ve been working with recently:</p> <ul class="my-5 grid grid-cols-2 gap-2"></ul></div> <div class="mx-10"><div class="group relative mx-auto mb-auto flex max-h-80 max-w-80 justify-center"><div class="absolute -z-10 size-full translate-x-6 translate-y-6 rounded border-4 border-mint-tulip-500
						transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4
					"></div> <div class="transition-color absolute size-full rounded bg-mint-tulip-200 mix-blend-multiply duration-500 ease-out group-hover:bg-white"></div> <picture><source type="image/avif"><source type="image/webp"><source type="image/jpeg"><img src=""+new URL('../assets/me.zISFpFk6.jpeg', import.meta.url).href+"" class="rounded" alt="Portrait" width="559" height="559"></picture></div></div></div>`);function nt(e,a){$(a,!1),M();var r=Z(),n=W(r);X(n,{title:"About Me",id:"about",sectionNumber:"1",children:(d,f)=>{var p=rt(),u=o(p),w=o(u),m=t(t(w,!0)),S=t(t(m,!0)),s=t(t(S,!0));B(s,9,()=>["Rust","Python (Django, DRF)","Svelte","JavaScript","SQL","Git","Linux","HTML & CSS"],j,(c,I,C)=>{var b=at(),N=o(b);E(()=>T(N,v(I))),k(c,b)});var _=t(t(u,!0)),l=o(_),z=o(l),y=t(t(z,!0)),h=t(t(y,!0)),x=o(h);R(x,"srcset",""+new URL("../assets/me.Dr0GEEBw.avif",import.meta.url).href+" 280w, "+new URL("../assets/me.CDwdNDhk.avif",import.meta.url).href+" 559w");var g=t(x);R(g,"srcset",""+new URL("../assets/me.Bzd7oOqy.webp",import.meta.url).href+" 280w, "+new URL("../assets/me.CwQRklDQ.webp",import.meta.url).href+" 559w");var i=t(g);R(i,"srcset",""+new URL("../assets/me.B9xbkOrS.jpeg",import.meta.url).href+" 280w, "+new URL("../assets/me.zISFpFk6.jpeg",import.meta.url).href+" 559w"),k(d,p)}}),k(e,r),F()}var it=A('<div class="flex gap-2"><div class=" my-auto text-mint-tulip-500">▹</div> <div> </div></div>'),st=A(`<label class="h-10 min-w-36 border-b-[1px] border-mint-tulip-500 transition-all duration-700 first:rounded-l
						last:rounded-r odd:bg-mint-tulip-700/5 even:bg-mint-tulip-300/5 has-[:checked]:border-b-4 has-[:checked]:bg-mint-tulip-500/25 md:w-44
						md:first:rounded-l-none md:last:rounded-r-none
					"><input type="radio" name="company" class="peer hidden"> <div class="text-nowrap p-2 text-center font-mono text-sm transition peer-checked:text-mint-tulip-500"> </div> <div class="pointer-events-none absolute left-0 translate-y-1/4 space-y-2 text-wrap py-5 text-left font-sans opacity-0 transition-all duration-1000
							ease-in-out peer-checked:translate-y-0 peer-checked:opacity-100 md:left-52 md:top-0 md:py-0
						"><div><div class="flex flex-wrap items-center space-x-1 text-lg"><div class="font-semibold leading-tight"><span class="text-slate-300"> </span> <a class="pointer-events-auto text-nowrap text-mint-tulip-500" target="_blank"> </a></div></div> <div class="py-1 text-sm"> </div></div> <div class="space-y-1"></div></div></label>`),ot=A('<div class="relative"><div class="scrollbar-none flex overflow-scroll md:flex-col"></div></div>');function lt(e,a){$(a,!1);const r=K([{company:"ZPP INGENIEURE",title:"Werkstudent IT-Security",when:"April 2022 - today",href:"https://zpp.de/",points:["looking for security issues, bugs and unwanted behaviour","implementing security measures","invo-lved in web development","working with Java, Python and Docker","occasionally some cool smaller projects"]},{company:"Opel",title:"Kommissionierer",when:"October - December 2020, September - October 2021",href:"https://opel.de/",points:["I was working full time for a month and the rest in part time","I was involved in a lot of different tasks for both Teileeingang and Teileausgang","driving an EZS 350 (Schlepper) - collecting items in cages attached to the vehicle","Nachschübe intern - changing location of items internally","Nachschübe extern - changing location of items to an external area","Greifen - picking items for costumer delivery","Konsolidierung - preparing cages for shipment","Umlagern - manually changing location of items","Einlagern - store items on a transport trolley coming in from a truck"]},{company:"Burger King",title:"Fahrer",when:"January 2019 - April 2020",href:"https://burgerking.de/",points:["most of the time I was delivering burgers to costumers homes in a Toyota Aygo","I enjoyed listing to podcasts while driving to the customer","as well as working in the kitchen","making all kinds of burgers"]},{company:"M.S.D.",title:"Zusteller",when:"2013 - 2017",points:["when I turned 13 I decided to earn some extra money for myself","at first I was working for zusteller-online.de delivering magazines like TV-Movie or Bravo on my bike","later on I saw that I had better opportunities at M.S.D. to develop myself, so i applied to M.S.D.","being outside, enjoying fresh air and hearing music was refreshing"]}]);M();var n=Z(),d=W(n);X(d,{title:"Where I’ve Worked",id:"jobs",sectionNumber:"2",children:(f,p)=>{var u=ot(),w=o(u);B(w,9,()=>U(r),j,(m,S,s)=>{let _=()=>v(v(S)).company,l=()=>v(v(S)).title,z=()=>v(v(S)).when,y=()=>v(v(S)).href,h=()=>v(v(S)).points;var x=st(),g=o(x);he(g),g.checked=v(s)===0;var i=t(t(g,!0)),c=o(i),I=t(t(i,!0)),C=o(I),b=o(C),N=o(b),P=o(N),D=o(P),Y=t(t(P,!0)),Q=o(Y),H=t(t(b,!0)),O=o(H),ge=t(t(C,!0));B(ge,9,h,j,(xe,_e,gt)=>{var se=it(),be=o(se),ye=t(t(be,!0)),we=o(ye);E(()=>T(we,v(_e))),k(xe,se)}),E(()=>{R(x,"for",_()),R(g,"id",_()),T(c,_()),T(D,l()),R(Y,"href",y()),T(Q,`@${G(_())}`),T(O,z())}),k(m,x)}),k(f,u)}}),k(e,n),F()}var dt=A('<p class="truncate text-wrap"> </p>'),ct=A('<div class="transition-all duration-500 hover:text-mint-tulip-400"> </div>'),vt=A('<div class="relative flex rounded bg-white/5 before:block before:pt-[100%]"><div class="flex flex-col justify-between gap-6 p-[7%]"><div class="text-2xl font-bold text-slate-300 transition-all duration-500 hover:text-mint-tulip-400"> </div> <!> <div class="flex flex-wrap gap-2 text-sm leading-none"></div> <a target="_blank" class="size-7" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition duration-500 hover:stroke-mint-tulip-500"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></div></div>'),ut=A('<div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3"></div>');function pt(e,a){$(a,!1);const r=K([{title:"Vertretungsplan",points:["Personalisierte Vertretungsplanberichte.","Ein Service für den Vertretungsplan der GES Bochum."],tools:["VS-Code","Python","Cron","Telegram-Bot-API"],href:"https://github.com/tayfunceylan/vertretungsplan"},{title:"Pet Feeder",points:["Eine App um das Füttern von Haustieren zu tracken und vieles mehr."],tools:["VS-Code","Nuxt","Vue","Python","Django Rest Framework"],href:"https://github.com/tayfunceylan/pet-feeder"},{title:"ÖPNV FahrplanBot",points:["A telegram bot for showing departure monitors for public transport. 				View departure times for your stops including delays. 				Create line filter to only show the lines you need. 				You can also choose a direction. Refresh the message at any time."],tools:["VS-Code","Python","Insomnia","Docker","Telegram-Bot-API"],href:"https://github.com/tayfunceylan/FahrplanBot"}]);M();var n=Z(),d=W(n);X(d,{title:"What I’ve Built",id:"projects",sectionNumber:"3",children:(f,p)=>{var u=ut();B(u,9,()=>U(r),j,(w,m,S)=>{let s=()=>v(v(m)).title,_=()=>v(v(m)).points,l=()=>v(v(m)).tools,z=()=>v(v(m)).href;var y=vt(),h=o(y),x=o(h),g=o(x),i=t(t(x,!0));B(i,1,_,j,(C,b,N)=>{var P=dt(),D=o(P);E(()=>T(D,v(b))),k(C,P)});var c=t(t(i,!0));B(c,9,l,j,(C,b,N)=>{var P=ct(),D=o(P);E(()=>T(D,v(b))),k(C,P)});var I=t(t(c,!0));E(()=>{T(g,s()),R(I,"href",z())}),k(w,y)}),k(f,u)}}),k(e,n),F()}var ft=A(`<p class="text-center">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether
		you have a question or just want to say hi, I’ll try my best to get back to you!</p> <a target="_blank" href="https://www.xing.com/profile/Tayfun_Ceylan3" class="mx-auto mt-2 w-fit rounded-md border-2 border-mint-tulip-500 p-4 font-mono text-mint-tulip-500/80 transition-colors duration-500 hover:bg-mint-tulip-500/20 hover:text-mint-tulip-400">Say Hello</a>`,1);function mt(e,a){$(a,!1),M();var r=Z(),n=W(r);X(n,{title:"Get In Touch",id:"contact",sectionNumber:"4",children:(d,f)=>{var p=ft();k(d,p)}}),k(e,r),F()}var ht=A("<!> <!> <!> <!> <!> <!>",1);function yt(e,a){$(a,!1),M();var r=ht(),n=W(r);Ze(n,{});var d=t(t(n,!0));et(d,{});var f=t(t(d,!0));nt(f,{});var p=t(t(f,!0));lt(p,{});var u=t(t(p,!0));pt(u,{});var w=t(t(u,!0));mt(w,{}),k(e,r),F()}export{yt as component};
