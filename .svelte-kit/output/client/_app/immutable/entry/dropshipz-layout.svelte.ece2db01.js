import{S as K,i as j,s as Q,C as X,k as w,a as H,l as k,m as y,h as _,c as S,n as d,p as O,b as R,G as p,I as q,g as z,d as T,f as W,D as Y,E as Z,F as $,J as x,v as F,K as ee,q as G,r as J,L as te,M as se,N as le,w as re,H as ae}from"../chunks/index.da91af06.js";import{f as P}from"../chunks/index.21f3759c.js";import{s as ne}from"../chunks/index.7d3595ca.js";import{s as oe}from"../chunks/singletons.a724b247.js";import"../chunks/ua-parser.bf0b9048.js";/* empty css                       */const ie=()=>{const r=oe;return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},updated:r.updated}},ce={subscribe(r){return ie().page.subscribe(r)}};function U(r,e,o){const a=r.slice();return a[12]=e[o],a[14]=o,a}function M(r){let e,o,a=r[3],s=[];for(let t=0;t<a.length;t+=1)s[t]=V(U(r,a,t));const v=t=>T(s[t],1,1,()=>{s[t]=null});return{c(){e=w("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var n=y(e);for(let l=0;l<s.length;l+=1)s[l].l(n);n.forEach(_),this.h()},h(){d(e,"class","fixed z-50 pointer-events-none w-screen h-screen flex_col_center")},m(t,n){R(t,e,n);for(let l=0;l<s.length;l+=1)s[l].m(e,null);o=!0},p(t,n){if(n&61){a=t[3];let l;for(l=0;l<a.length;l+=1){const b=U(t,a,l);s[l]?(s[l].p(b,n),z(s[l],1)):(s[l]=V(b),s[l].c(),z(s[l],1),s[l].m(e,null))}for(F(),l=a.length;l<s.length;l+=1)v(l);W()}},i(t){if(!o){for(let n=0;n<a.length;n+=1)z(s[n]);o=!0}},o(t){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)T(s[n]);o=!1},d(t){t&&_(e),ee(s,t)}}}function V(r){let e,o,a,s=r[12]+"",v,t,n,l,b,g,E,m;function C(){return r[10](r[12])}return{c(){e=w("button"),o=w("a"),a=w("h4"),v=G(s),b=H(),this.h()},l(c){e=k(c,"BUTTON",{});var u=y(e);o=k(u,"A",{href:!0});var A=y(o);a=k(A,"H4",{class:!0});var i=y(a);v=J(i,s),i.forEach(_),A.forEach(_),b=S(u),u.forEach(_),this.h()},h(){d(a,"class",t="pointer-events-auto "+C()+" hover:opacity-50 m-1 p-1 text-onPrimary duration-200"),d(o,"href","/dropshipz/"+r[12].toLowerCase())},m(c,u){R(c,e,u),p(e,o),p(o,a),p(a,v),p(e,b),g=!0,E||(m=q(e,"click",r[11]),E=!0)},p(c,u){r=c,(!g||u&4&&t!==(t="pointer-events-auto "+C()+" hover:opacity-50 m-1 p-1 text-onPrimary duration-200"))&&d(a,"class",t)},i(c){g||(te(()=>{l&&l.end(1),n=se(a,P,{duration:800,delay:(r[14]+3)*100,y:32}),n.start()}),g=!0)},o(c){n&&n.invalidate(),l=le(a,P,{easing:ne,duration:200,x:r[5]/2*.5,y:r[4]/2*.5}),g=!1},d(c){c&&_(e),c&&l&&l.end(),E=!1,m()}}}function ue(r){let e,o;return{c(){e=w("s1"),o=G("This page is still under development.")},l(a){e=k(a,"S1",{});var s=y(e);o=J(s,"This page is still under development."),s.forEach(_)},m(a,s){R(a,e,s),p(e,o)},p:ae,d(a){a&&_(e)}}}function he(r){let e,o,a,s,v,t,n,l,b,g,E,m,C,c,u,A,i=r[0]&&M(r);const D=r[7].default,I=X(D,r,r[6],null),N=I||ue();return{c(){e=w("main"),o=w("header"),a=H(),s=w("header"),v=H(),t=w("button"),n=w("canvas"),g=H(),i&&i.c(),E=H(),m=w("div"),N&&N.c(),this.h()},l(h){e=k(h,"MAIN",{class:!0});var f=y(e);o=k(f,"HEADER",{class:!0}),y(o).forEach(_),a=S(f),s=k(f,"HEADER",{class:!0}),y(s).forEach(_),v=S(f),t=k(f,"BUTTON",{class:!0,style:!0});var B=y(t);n=k(B,"CANVAS",{width:!0,height:!0}),y(n).forEach(_),B.forEach(_),g=S(f),i&&i.l(f),E=S(f),m=k(f,"DIV",{class:!0,style:!0});var L=y(m);N&&N.l(L),L.forEach(_),f.forEach(_),this.h()},h(){d(o,"class","absolute z-10 w-screen h-32 bg-primary"),d(s,"class","w-screen h-32 bg-primary"),d(n,"width",32),d(n,"height",32),d(t,"class",l="fixed z-40 right-6 bottom-8 invert hover:invert shadow-xl rounded-full "+(r[0]?"":"w-16 h-16")+" bg-onPrimary flex_row_center duration-800"),d(t,"style",b=r[0]?"width: 500vh; height: 500vh; right: calc(-250vh + 1.5rem + 2rem); bottom: calc(-250vh + 2rem + 2rem);":""),d(m,"class",C=(r[0]?"blur md:blur-0":"blur-0")+" max-h-screen"),O(m,"transition","all 400ms cubic-bezier(0, 0, 1, 1)"),O(m,"max-height","100vh"),d(e,"class","relative w-screen min-h-screen background")},m(h,f){R(h,e,f),p(e,o),p(e,a),p(e,s),p(e,v),p(e,t),p(t,n),r[8](n),p(e,g),i&&i.m(e,null),p(e,E),p(e,m),N&&N.m(m,null),c=!0,u||(A=q(t,"click",r[9]),u=!0)},p(h,[f]){(!c||f&1&&l!==(l="fixed z-40 right-6 bottom-8 invert hover:invert shadow-xl rounded-full "+(h[0]?"":"w-16 h-16")+" bg-onPrimary flex_row_center duration-800"))&&d(t,"class",l),(!c||f&1&&b!==(b=h[0]?"width: 500vh; height: 500vh; right: calc(-250vh + 1.5rem + 2rem); bottom: calc(-250vh + 2rem + 2rem);":""))&&d(t,"style",b),h[0]?i?(i.p(h,f),f&1&&z(i,1)):(i=M(h),i.c(),z(i,1),i.m(e,E)):i&&(F(),T(i,1,1,()=>{i=null}),W()),I&&I.p&&(!c||f&64)&&Y(I,D,h,h[6],c?$(D,h[6],f,null):Z(h[6]),null),(!c||f&1&&C!==(C=(h[0]?"blur md:blur-0":"blur-0")+" max-h-screen"))&&d(m,"class",C)},i(h){c||(z(i),z(N,h),c=!0)},o(h){T(i),T(N,h),c=!1},d(h){h&&_(e),r[8](null),i&&i.d(),N&&N.d(h),u=!1,A()}}}function fe(r,e,o){let a;x(r,ce,u=>o(2,a=u));let{$$slots:s={},$$scope:v}=e,t=["Home","Work","Services","Contact"],n=!1,l,b,g;function E(u){re[u?"unshift":"push"](()=>{l=u,o(1,l)})}const m=()=>o(0,n=!n),C=u=>{let i="/me"+"/"+u.toLowerCase(),D=a.url.pathname;return i===D?"opacity-50":"opacity-100"},c=()=>o(0,n=!1);return r.$$set=u=>{"$$scope"in u&&o(6,v=u.$$scope)},[n,l,a,t,b,g,v,s,E,m,C,c]}class ge extends K{constructor(e){super(),j(this,e,fe,he,Q,{})}}export{ge as default};
