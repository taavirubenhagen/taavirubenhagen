import{S as fe,i as de,s as he,e as ne,b as U,f as D,g as Y,t as O,d as Z,h as g,o as _e,C as me,D as pe,E as ve,F as be,L as ge,k,q as W,a as S,w as Q,l as I,m as T,r as F,c as $,x as j,n as b,p as oe,G as v,y as K,H as z,z as X,I as we,J as ye,P as ke,Q as Ie,R as Te,T as De,B as Ee}from"../../../chunks/index-5a593291.js";import{c as Be,a as Oe,s as J}from"../../../chunks/index-e35228fd.js";import{p as Ne}from"../../../chunks/stores-8b1c977b.js";import{U as Pe}from"../../../chunks/ua-parser-94cd8823.js";/* empty css                             */import{I as le}from"../../../chunks/icon-5360f2c0.js";function se(l,{delay:e=0,duration:n=400,easing:t=Be,x:r=0,y:u=0,opacity:o=0}={}){const a=getComputedStyle(l),s=+a.opacity,f=a.transform==="none"?"":a.transform,m=s*(1-o);return{delay:e,duration:n,easing:t,css:(c,i)=>`
			transform: ${f} translate(${(1-c)*r}px, ${(1-c)*u}px);
			opacity: ${s-m*i}`}}function ae(l){let e;const n=l[5].default,t=me(n,l,l[4],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,u){t&&t.m(r,u),e=!0},p(r,u){t&&t.p&&(!e||u&16)&&pe(t,n,r,r[4],e?be(n,r[4],u,null):ve(r[4]),null)},i(r){e||(D(t,r),e=!0)},o(r){O(t,r),e=!1},d(r){t&&t.d(r)}}}function Se(l){let e,n,t=l[0]&&ae(l);return{c(){t&&t.c(),e=ne()},l(r){t&&t.l(r),e=ne()},m(r,u){t&&t.m(r,u),U(r,e,u),n=!0},p(r,[u]){r[0]?t?(t.p(r,u),u&1&&D(t,1)):(t=ae(r),t.c(),D(t,1),t.m(e.parentNode,e)):t&&(Y(),O(t,1,1,()=>{t=null}),Z())},i(r){n||(D(t),n=!0)},o(r){O(t),n=!1},d(r){t&&t.d(r),r&&g(e)}}}function $e(l,e,n){let{$$slots:t={},$$scope:r}=e,{showInDevice:u=void 0}=e,{showInBrowser:o=void 0}=e,{showInOs:a=void 0}=e,s=!1;_e(()=>{const i=new Pe;let h=i.getBrowser(),y=i.getDevice(),P=i.getOS(),E=!0;u&&!c(f(y),u)&&(E=!1),o&&!c(m(h.name),o)&&(E=!1),a&&!c(m(P.name),a)&&(E=!1),n(0,s=E)});const f=i=>i.type?m(i.type):"desktop",m=i=>i.toLowerCase().normalize("NFD").replace(/ /g,"").replace(/[^\w\s]/gi,"").replace(/[\u0300-\u036f]/g,""),c=(i,h)=>Array.isArray(h)?h.some(y=>i===m(y)):i===m(h);return l.$$set=i=>{"showInDevice"in i&&n(1,u=i.showInDevice),"showInBrowser"in i&&n(2,o=i.showInBrowser),"showInOs"in i&&n(3,a=i.showInOs),"$$scope"in i&&n(4,r=i.$$scope)},[s,u,o,a,r,t]}class ze extends fe{constructor(e){super(),de(this,e,$e,Se,he,{showInDevice:1,showInBrowser:2,showInOs:3})}}function ie(l,e,n){const t=l.slice();return t[18]=e[n],t[20]=n,t}function Ce(l){let e,n,t,r,u,o,a,s,f,m;return t=new le({props:{name:"icons_1_down_8"}}),o=new le({props:{name:"icons_1_up_8"}}),{c(){e=k("div"),n=k("button"),Q(t.$$.fragment),r=S(),u=k("button"),Q(o.$$.fragment),this.h()},l(c){e=I(c,"DIV",{class:!0});var i=T(e);n=I(i,"BUTTON",{class:!0});var h=T(n);j(t.$$.fragment,h),h.forEach(g),r=$(i),u=I(i,"BUTTON",{class:!0});var y=T(u);j(o.$$.fragment,y),y.forEach(g),i.forEach(g),this.h()},h(){b(n,"class","rounded-l-full border-2 border-r-0 border-primary hover:border-onPrimary w-16 h-16 hover:invert pl-5 pr-3 bg-onPrimary flex_row_center default_animation_short"),b(u,"class","rounded-r-full border-2 border-l-0 border-primary hover:border-onPrimary w-16 h-16 hover:invert pl-3 pr-5 bg-onPrimary flex_row_center default_animation_short"),b(e,"class",a=(l[2]?"opacity-100":"opacity-0")+" absolute left-0 top-0 rounded-full w-32 h-16 flex default_animation_long")},m(c,i){U(c,e,i),v(e,n),K(t,n,null),v(e,r),v(e,u),K(o,u,null),s=!0,f||(m=[z(n,"click",l[9]),z(u,"click",l[10])],f=!0)},p(c,i){(!s||i&4&&a!==(a=(c[2]?"opacity-100":"opacity-0")+" absolute left-0 top-0 rounded-full w-32 h-16 flex default_animation_long"))&&b(e,"class",a)},i(c){s||(D(t.$$.fragment,c),D(o.$$.fragment,c),s=!0)},o(c){O(t.$$.fragment,c),O(o.$$.fragment,c),s=!1},d(c){c&&g(e),X(t),X(o),f=!1,we(m)}}}function ce(l){let e,n,t=l[6],r=[];for(let o=0;o<t.length;o+=1)r[o]=ue(ie(l,t,o));const u=o=>O(r[o],1,1,()=>{r[o]=null});return{c(){e=k("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=I(o,"DIV",{class:!0});var a=T(e);for(let s=0;s<r.length;s+=1)r[s].l(a);a.forEach(g),this.h()},h(){b(e,"class","fixed z-50 pointer-events-none w-screen h-screen flex_col_center")},m(o,a){U(o,e,a);for(let s=0;s<r.length;s+=1)r[s].m(e,null);n=!0},p(o,a){if(a&120){t=o[6];let s;for(s=0;s<t.length;s+=1){const f=ie(o,t,s);r[s]?(r[s].p(f,a),D(r[s],1)):(r[s]=ue(f),r[s].c(),D(r[s],1),r[s].m(e,null))}for(Y(),s=t.length;s<r.length;s+=1)u(s);Z()}},i(o){if(!n){for(let a=0;a<t.length;a+=1)D(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)O(r[a]);n=!1},d(o){o&&g(e),ke(r,o)}}}function ue(l){let e,n,t=l[18]+"",r,u,o,a,s,f;function m(){return l[16](l[18])}return{c(){e=k("a"),n=k("h4"),r=W(t),s=S(),this.h()},l(c){e=I(c,"A",{href:!0});var i=T(e);n=I(i,"H4",{class:!0});var h=T(n);r=F(h,t),h.forEach(g),s=$(i),i.forEach(g),this.h()},h(){b(n,"class",u="pointer-events-auto "+m()+" hover:opacity-50 m-1 p-1 text-onPrimary default_animation_short"),b(e,"href","/me/home")},m(c,i){U(c,e,i),v(e,n),v(n,r),v(e,s),f=!0},p(c,i){l=c,(!f||i&32&&u!==(u="pointer-events-auto "+m()+" hover:opacity-50 m-1 p-1 text-onPrimary default_animation_short"))&&b(n,"class",u)},i(c){f||(ge(()=>{a&&a.end(1),o=Ie(n,se,{duration:800,delay:(l[20]+3)*100,y:32}),o.start()}),f=!0)},o(c){o&&o.invalidate(),a=Te(n,se,{easing:Oe,duration:200,x:l[4]/2*.5,y:l[3]/2*.5}),f=!1},d(c){c&&g(e),c&&a&&a.end()}}}function He(l){let e,n;return{c(){e=k("s1"),n=W("This page is still under development.")},l(t){e=I(t,"S1",{});var r=T(e);n=F(r,"This page is still under development."),r.forEach(g)},m(t,r){U(t,e,r),v(e,n)},p:Ee,d(t){t&&g(e)}}}function Ue(l){let e,n,t,r,u,o,a,s,f,m,c,i,h,y,P,E,A,C,B,H,w,V,L;ge(l[8]),c=new ze({props:{deviceType:"desktop",$$slots:{default:[Ce]},$$scope:{ctx:l}}});let p=l[0]&&ce(l);const G=l[7].default,q=me(G,l,l[17],null),N=q||He();return{c(){e=k("main"),n=k("div"),t=k("h5"),r=W("This page is still under development."),u=S(),o=k("button"),a=k("h5"),s=W("Scroll"),m=S(),Q(c.$$.fragment),i=S(),h=k("button"),y=k("canvas"),A=S(),p&&p.c(),C=S(),B=k("div"),N&&N.c(),this.h()},l(d){e=I(d,"MAIN",{class:!0});var _=T(e);n=I(_,"DIV",{class:!0});var R=T(n);t=I(R,"H5",{});var x=T(t);r=F(x,"This page is still under development."),x.forEach(g),R.forEach(g),u=$(_),o=I(_,"BUTTON",{class:!0});var M=T(o);a=I(M,"H5",{class:!0});var ee=T(a);s=F(ee,"Scroll"),ee.forEach(g),m=$(M),j(c.$$.fragment,M),M.forEach(g),i=$(_),h=I(_,"BUTTON",{class:!0,style:!0});var te=T(h);y=I(te,"CANVAS",{width:!0,height:!0}),T(y).forEach(g),te.forEach(g),A=$(_),p&&p.l(_),C=$(_),B=I(_,"DIV",{class:!0,style:!0});var re=T(B);N&&N.l(re),re.forEach(g),_.forEach(g),this.h()},h(){b(n,"class","fixed z-50 w-screen h-8 bg-primary flex_row_center primary"),b(a,"class",f=(l[2]?"opacity-0":"opacity-100")+" rounded-full border-2 border-primary w-32 h-16 pb-1 flex_row_center default_animation_long"),b(o,"class","fixed z-40 right-28 bottom-8 shadow-xl rounded-full bg-background"),b(y,"width",32),b(y,"height",32),b(h,"class",P="fixed z-40 right-6 bottom-8 invert hover:invert shadow-xl rounded-full border-2 border-primary "+(l[0]?"":"w-16 h-16")+" bg-onPrimary flex_row_center default_animation_long"),b(h,"style",E=l[0]?"width: 500vh; height: 500vh; right: calc(-250vh + 1.5rem + 2rem); bottom: calc(-250vh + 2rem + 2rem);":""),b(B,"class",H=(l[0]?"blur md:blur-0":"blur-0")+" max-h-screen"),oe(B,"transition","all 400ms cubic-bezier(0, 0, 1, 1)"),oe(B,"max-height","100vh"),b(e,"class","w-screen min-h-screen bg-background text-onBackground")},m(d,_){U(d,e,_),v(e,n),v(n,t),v(t,r),v(e,u),v(e,o),v(o,a),v(a,s),v(o,m),K(c,o,null),v(e,i),v(e,h),v(h,y),l[14](y),v(e,A),p&&p.m(e,null),v(e,C),v(e,B),N&&N.m(B,null),w=!0,V||(L=[z(window,"resize",l[8]),z(o,"mouseenter",l[11]),z(o,"mouseleave",l[12]),z(o,"click",l[13]),z(h,"click",l[15])],V=!0)},p(d,[_]){(!w||_&4&&f!==(f=(d[2]?"opacity-0":"opacity-100")+" rounded-full border-2 border-primary w-32 h-16 pb-1 flex_row_center default_animation_long"))&&b(a,"class",f);const R={};_&131084&&(R.$$scope={dirty:_,ctx:d}),c.$set(R),(!w||_&1&&P!==(P="fixed z-40 right-6 bottom-8 invert hover:invert shadow-xl rounded-full border-2 border-primary "+(d[0]?"":"w-16 h-16")+" bg-onPrimary flex_row_center default_animation_long"))&&b(h,"class",P),(!w||_&1&&E!==(E=d[0]?"width: 500vh; height: 500vh; right: calc(-250vh + 1.5rem + 2rem); bottom: calc(-250vh + 2rem + 2rem);":""))&&b(h,"style",E),d[0]?p?(p.p(d,_),_&1&&D(p,1)):(p=ce(d),p.c(),D(p,1),p.m(e,C)):p&&(Y(),O(p,1,1,()=>{p=null}),Z()),q&&q.p&&(!w||_&131072)&&pe(q,G,d,d[17],w?be(G,d[17],_,null):ve(d[17]),null),(!w||_&1&&H!==(H=(d[0]?"blur md:blur-0":"blur-0")+" max-h-screen"))&&b(B,"class",H)},i(d){w||(D(c.$$.fragment,d),D(p),D(N,d),w=!0)},o(d){O(c.$$.fragment,d),O(p),O(N,d),w=!1},d(d){d&&g(e),X(c),l[14](null),p&&p.d(),N&&N.d(d),V=!1,we(L)}}}function Ae(l,e,n){let t;ye(l,Ne,w=>n(5,t=w));let{$$slots:r={},$$scope:u}=e,o=["Home","Work","Services","Contact"],a=!1,s,f=!1,m,c;_e(()=>{new rive.Rive({src:"/icon_animations.riv",canvas:s,artboard:"icons_1_menu",animations:[],autoplay:!0})});function i(){n(3,m=window.innerHeight),n(4,c=window.innerWidth)}const h=()=>J({y:m}),y=()=>J({y:0}),P=()=>setTimeout(()=>n(2,f=!0)),E=()=>setTimeout(()=>n(2,f=!1)),A=()=>c<768?J({y:m}):{};function C(w){De[w?"unshift":"push"](()=>{s=w,n(1,s)})}const B=()=>n(0,a=!a),H=w=>{let L="/me"+"/"+w.toLowerCase(),p=t.url.pathname;return L===p?"opacity-50":"opacity-100"};return l.$$set=w=>{"$$scope"in w&&n(17,u=w.$$scope)},[a,s,f,m,c,t,o,r,i,h,y,P,E,A,C,B,H,u]}class Fe extends fe{constructor(e){super(),de(this,e,Ae,Ue,he,{})}}export{Fe as default};
