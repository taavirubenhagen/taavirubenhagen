import{O as it,P as ct,H as M,S as et,i as ot,s as nt,C as lt,k,l as L,m as x,h as f,n as g,b as P,D as st,E as rt,F as at,g as A,d as q,L as Z,y as F,a as G,z as Q,c as R,G as S,A as J,I as N,B as K,Q as ft,R as ut,q as U,r as W}from"../chunks/index.47feb8cc.js";import"../chunks/paths.ad51079e.js";import"../chunks/ua-parser.bf0b9048.js";import{c as dt}from"../chunks/index.adacbdb8.js";/* empty css                       */import{S as pt,T as _t}from"../chunks/text_button.acb0a24d.js";const Y={$(e){return typeof e=="string"?document.querySelector(e):e},extend(...e){return Object.assign(...e)},cumulativeOffset(e){let t=0,o=0;do t+=e.offsetTop||0,o+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:t,left:o}},directScroll(e){return e&&e!==document&&e!==document.body},scrollTop(e,t){let o=t!==void 0;return this.directScroll(e)?o?e.scrollTop=t:e.scrollTop:o?document.documentElement.scrollTop=document.body.scrollTop=t:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(e,t){let o=t!==void 0;return this.directScroll(e)?o?e.scrollLeft=t:e.scrollLeft:o?document.documentElement.scrollLeft=document.body.scrollLeft=t:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},mt={container:"body",duration:500,delay:0,offset:0,easing:dt,onStart:M,onDone:M,onAborting:M,scrollX:!1,scrollY:!0},$t=e=>{let{offset:t,duration:o,delay:s,easing:n,x:l=0,y:i=0,scrollX:_,scrollY:B,onStart:u,onDone:m,container:$,onAborting:D,element:w}=e;typeof t=="function"&&(t=t());var h=Y.cumulativeOffset($),b=w?Y.cumulativeOffset(w):{top:i,left:l},c=Y.scrollLeft($),T=Y.scrollTop($),V=b.left-h.left+t,v=b.top-h.top+t,C=V-c,H=v-T;let z=!0,O=!1,d=it()+s,r=d+o;function a(p,X,j){_&&Y.scrollLeft(p,j),B&&Y.scrollTop(p,X)}function y(p){p||(O=!0,u(w,{x:l,y:i}))}function E(p){a($,T+H*p,c+C*p)}function I(){z=!1}return ct(p=>{if(!O&&p>=d&&y(!1),O&&p>=r&&(E(1),I(),m(w,{x:l,y:i})),!z)return D(w,{x:l,y:i}),!1;if(O){const X=p-d,j=0+1*n(X/o);E(j)}return!0}),y(s),E(0),I},ht=e=>{let t=Y.extend({},mt,e);return t.container=Y.$(t.container),t.element=Y.$(t.element),t},bt=e=>$t(ht(e));function gt(e){let t,o;const s=e[1].default,n=lt(s,e,e[0],null);return{c(){t=k("p"),n&&n.c(),this.h()},l(l){t=L(l,"P",{class:!0});var i=x(t);n&&n.l(i),i.forEach(f),this.h()},h(){g(t,"class","text-lg md:text-lg font-bold")},m(l,i){P(l,t,i),n&&n.m(t,null),o=!0},p(l,[i]){n&&n.p&&(!o||i&1)&&st(n,s,l,l[0],o?at(s,l[0],i,null):rt(l[0]),null)},i(l){o||(A(n,l),o=!0)},o(l){q(n,l),o=!1},d(l){l&&f(t),n&&n.d(l)}}}function wt(e,t,o){let{$$slots:s={},$$scope:n}=t;return e.$$set=l=>{"$$scope"in l&&o(0,n=l.$$scope)},[n,s]}class vt extends et{constructor(t){super(),ot(this,t,wt,gt,nt,{})}}const{setTimeout:tt}=ut;function Tt(e){let t,o,s;return{c(){t=k("div"),o=U("Still under development"),this.h()},l(n){t=L(n,"DIV",{class:!0});var l=x(t);o=W(l,"Still under development"),l.forEach(f),this.h()},h(){g(t,"class",s="transition-all duration-400 "+(e[3]?"text-5xl":"text-xl")+" font-display")},m(n,l){P(n,t,l),S(t,o)},p(n,l){l&8&&s!==(s="transition-all duration-400 "+(n[3]?"text-5xl":"text-xl")+" font-display")&&g(t,"class",s)},d(n){n&&f(t)}}}function yt(e){let t;return{c(){t=U("Visit anyway")},l(o){t=W(o,"Visit anyway")},m(o,s){P(o,t,s)},d(o){o&&f(t)}}}function St(e){let t;return{c(){t=U("Back to top")},l(o){t=W(o,"Back to top")},m(o,s){P(o,t,s)},d(o){o&&f(t)}}}function Ot(e){let t,o;return{c(){t=k("s1"),o=U("This page is still under development.")},l(s){t=L(s,"S1",{});var n=x(t);o=W(n,"This page is still under development."),n.forEach(f)},m(s,n){P(s,t,n),S(t,o)},p:M,d(s){s&&f(t)}}}function Et(e){let t=!1,o=()=>{t=!1},s,n,l,i,_,B,u,m,$,D,w,h,b,c,T,V,v,C,H;Z(e[6]),Z(e[7]),_=new pt({props:{$$slots:{default:[Tt]},$$scope:{ctx:e}}}),m=new _t({props:{primary:!0,onPrimary:!0,$$slots:{default:[yt]},$$scope:{ctx:e}}}),c=new vt({props:{$$slots:{default:[St]},$$scope:{ctx:e}}});const z=e[5].default,O=lt(z,e,e[10],null),d=O||Ot();return{c(){n=k("main"),l=k("button"),i=k("div"),F(_.$$.fragment),B=G(),u=k("div"),F(m.$$.fragment),w=G(),h=k("div"),b=k("button"),F(c.$$.fragment),V=G(),d&&d.c(),this.h()},l(r){n=L(r,"MAIN",{class:!0});var a=x(n);l=L(a,"BUTTON",{class:!0});var y=x(l);i=L(y,"DIV",{class:!0});var E=x(i);Q(_.$$.fragment,E),E.forEach(f),B=R(y),u=L(y,"DIV",{class:!0});var I=x(u);Q(m.$$.fragment,I),I.forEach(f),y.forEach(f),w=R(a),h=L(a,"DIV",{class:!0});var p=x(h);b=L(p,"BUTTON",{class:!0});var X=x(b);Q(c.$$.fragment,X),X.forEach(f),p.forEach(f),V=R(a),d&&d.l(a),a.forEach(f),this.h()},h(){g(i,"class","w-screen h-8 flex_row_center"),g(u,"class",$="transition-all duration-400 absolute bottom-16 w-screen "+(e[3]?"opacity-100":"opacity-0")+" flex_row_center"),g(l,"class",D="transition-all duration-400 fixed z-50 w-screen "+(e[3]?"h-screen":"h-8")+" primary flex_row_center"),g(b,"class","transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"),g(h,"class",T="transition-all duration-400 fixed z-30 "+e[4]+" w-screen flex_row_center"),g(n,"class","max-w-screen min-h-screen background")},m(r,a){P(r,n,a),S(n,l),S(l,i),J(_,i,null),S(l,B),S(l,u),J(m,u,null),S(n,w),S(n,h),S(h,b),J(c,b,null),S(n,V),d&&d.m(n,null),v=!0,C||(H=[N(window,"resize",e[6]),N(window,"scroll",()=>{t=!0,clearTimeout(s),s=tt(o,100),e[7]()}),N(l,"click",e[8]),N(b,"click",e[9])],C=!0)},p(r,[a]){a&1&&!t&&(t=!0,clearTimeout(s),scrollTo(window.pageXOffset,r[0]),s=tt(o,100));const y={};a&1032&&(y.$$scope={dirty:a,ctx:r}),_.$set(y);const E={};a&1024&&(E.$$scope={dirty:a,ctx:r}),m.$set(E),(!v||a&8&&$!==($="transition-all duration-400 absolute bottom-16 w-screen "+(r[3]?"opacity-100":"opacity-0")+" flex_row_center"))&&g(u,"class",$),(!v||a&8&&D!==(D="transition-all duration-400 fixed z-50 w-screen "+(r[3]?"h-screen":"h-8")+" primary flex_row_center"))&&g(l,"class",D);const I={};a&1024&&(I.$$scope={dirty:a,ctx:r}),c.$set(I),(!v||a&16&&T!==(T="transition-all duration-400 fixed z-30 "+r[4]+" w-screen flex_row_center"))&&g(h,"class",T),O&&O.p&&(!v||a&1024)&&st(O,z,r,r[10],v?at(z,r[10],a,null):rt(r[10]),null)},i(r){v||(A(_.$$.fragment,r),A(m.$$.fragment,r),A(c.$$.fragment,r),A(d,r),v=!0)},o(r){q(_.$$.fragment,r),q(m.$$.fragment,r),q(c.$$.fragment,r),q(d,r),v=!1},d(r){r&&f(n),K(_),K(m),K(c),d&&d.d(r),C=!1,ft(H)}}}function kt(e,t,o){let s,{$$slots:n={},$$scope:l}=t,i,_;function B(c){const T=m-c;return m=c,c===0||T<=-8?"-bottom-10":Math.abs(T)<=16?s:(setTimeout(()=>o(4,s=B(u)),8e3),"bottom-8")}let u=0,m=0,$=!1;function D(){o(1,i=window.innerHeight),o(2,_=window.innerWidth)}function w(){o(0,u=window.pageYOffset)}const h=()=>o(3,$=!$),b=()=>bt({y:0});return e.$$set=c=>{"$$scope"in c&&o(10,l=c.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&o(4,s=B(u))},[u,i,_,$,s,n,D,w,h,b,l]}class zt extends et{constructor(t){super(),ot(this,t,kt,Et,nt,{})}}export{zt as default};
