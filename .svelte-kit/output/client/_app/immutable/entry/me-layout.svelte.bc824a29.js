import{O as pt,P as mt,H as W,S as rt,i as at,s as it,C as ct,k as w,l as v,m as T,h as c,n as f,b as V,D as ut,E as ft,F as dt,g as H,d as N,L as nt,y as R,a as M,z as J,c as U,G as _,A as Z,I as F,B as tt,K as _t,Q as ht,R as bt,q as G,r as K}from"../chunks/index.da91af06.js";import"../chunks/paths.d789a35d.js";import"../chunks/ua-parser.bf0b9048.js";import{c as $t}from"../chunks/index.7d3595ca.js";/* empty css                       */import{S as gt,T as wt}from"../chunks/text_button.0b694bee.js";const O={$(e){return typeof e=="string"?document.querySelector(e):e},extend(...e){return Object.assign(...e)},cumulativeOffset(e){let t=0,o=0;do t+=e.offsetTop||0,o+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:t,left:o}},directScroll(e){return e&&e!==document&&e!==document.body},scrollTop(e,t){let o=t!==void 0;return this.directScroll(e)?o?e.scrollTop=t:e.scrollTop:o?document.documentElement.scrollTop=document.body.scrollTop=t:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(e,t){let o=t!==void 0;return this.directScroll(e)?o?e.scrollLeft=t:e.scrollLeft:o?document.documentElement.scrollLeft=document.body.scrollLeft=t:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},vt={container:"body",duration:500,delay:0,offset:0,easing:$t,onStart:W,onDone:W,onAborting:W,scrollX:!1,scrollY:!0},Tt=e=>{let{offset:t,duration:o,delay:r,easing:l,x:n=0,y:i=0,scrollX:h,scrollY:L,onStart:p,onDone:b,container:$,onAborting:I,element:y}=e;typeof t=="function"&&(t=t());var x=O.cumulativeOffset($),D=y?O.cumulativeOffset(y):{top:i,left:n},u=O.scrollLeft($),g=O.scrollTop($),E=D.left-x.left+t,X=D.top-x.top+t,A=E-u,k=X-g;let P=!0,Y=!1,C=pt()+r,z=C+o;function j(a,d,S){h&&O.scrollLeft(a,S),L&&O.scrollTop(a,d)}function B(a){a||(Y=!0,p(y,{x:n,y:i}))}function m(a){j($,g+k*a,u+A*a)}function s(){P=!1}return mt(a=>{if(!Y&&a>=C&&B(!1),Y&&a>=z&&(m(1),s(),b(y,{x:n,y:i})),!P)return I(y,{x:n,y:i}),!1;if(Y){const d=a-C,S=0+1*l(d/o);m(S)}return!0}),B(r),m(0),s},yt=e=>{let t=O.extend({},vt,e);return t.container=O.$(t.container),t.element=O.$(t.element),t},xt=e=>Tt(yt(e));function kt(e){let t,o;const r=e[1].default,l=ct(r,e,e[0],null);return{c(){t=w("p"),l&&l.c(),this.h()},l(n){t=v(n,"P",{class:!0});var i=T(t);l&&l.l(i),i.forEach(c),this.h()},h(){f(t,"class","text-lg md:text-lg font-bold")},m(n,i){V(n,t,i),l&&l.m(t,null),o=!0},p(n,[i]){l&&l.p&&(!o||i&1)&&ut(l,r,n,n[0],o?dt(r,n[0],i,null):ft(n[0]),null)},i(n){o||(H(l,n),o=!0)},o(n){N(l,n),o=!1},d(n){n&&c(t),l&&l.d(n)}}}function Et(e,t,o){let{$$slots:r={},$$scope:l}=t;return e.$$set=n=>{"$$scope"in n&&o(0,l=n.$$scope)},[l,r]}class St extends rt{constructor(t){super(),at(this,t,Et,kt,it,{})}}const{setTimeout:st}=bt;function Ot(e,t,o){const r=e.slice();return r[15]=t[o],r}function Lt(e){let t,o,r;return{c(){t=w("div"),o=G("Still under development"),this.h()},l(l){t=v(l,"DIV",{class:!0});var n=T(t);o=K(n,"Still under development"),n.forEach(c),this.h()},h(){f(t,"class",r="transition-all duration-400 "+(e[3]?"text-5xl":"text-xl")+" font-display")},m(l,n){V(l,t,n),_(t,o)},p(l,n){n&8&&r!==(r="transition-all duration-400 "+(l[3]?"text-5xl":"text-xl")+" font-display")&&f(t,"class",r)},d(l){l&&c(t)}}}function It(e){let t;return{c(){t=G("Visit anyway")},l(o){t=K(o,"Visit anyway")},m(o,r){V(o,t,r)},d(o){o&&c(t)}}}function Dt(e){let t,o,r;return{c(){t=w("a"),o=w("i"),r=M(),this.h()},l(l){t=v(l,"A",{class:!0,href:!0});var n=T(t);o=v(n,"I",{class:!0}),T(o).forEach(c),r=U(n),n.forEach(c),this.h()},h(){f(o,"class","transition-all duration-200 md:mx-4 backdrop-blur-sm shadow hover:scale-100 rounded hover:rounded-xl w-12 h-12 bg-background bg-opacity-50 flex_row_center text-2xl iconoir-"+e[15][0]),f(t,"class","pointer-events-auto"),f(t,"href",e[15][1])},m(l,n){V(l,t,n),_(t,o),_(t,r)},p:W,d(l){l&&c(t)}}}function Yt(e){let t;return{c(){t=G("Back to top")},l(o){t=K(o,"Back to top")},m(o,r){V(o,t,r)},d(o){o&&c(t)}}}function zt(e){let t,o;return{c(){t=w("s1"),o=G("This page is still under development.")},l(r){t=v(r,"S1",{});var l=T(t);o=K(l,"This page is still under development."),l.forEach(c)},m(r,l){V(r,t,l),_(t,o)},p:W,d(r){r&&c(t)}}}function Bt(e){let t=!1,o=()=>{t=!1},r,l,n,i,h,L,p,b,$,I,y,x,D,u,g,E,X,A,k,P,Y;nt(e[6]),nt(e[7]),h=new gt({props:{$$slots:{default:[Lt]},$$scope:{ctx:e}}}),b=new wt({props:{primary:!0,onPrimary:!0,$$slots:{default:[It]},$$scope:{ctx:e}}});let C=[["home","/me/home"],["chat-bubble-empty","/contact"],["arrow-separate text-blue-700","/presenter"],["voice text-blue-700","/tts"],["color-filter text-blue-700","/design"],["github text-orange-700","/me/home"],["instagram text-orange-700","/me/home"]],z=[];for(let s=0;s<7;s+=1)z[s]=Dt(Ot(e,C,s));E=new St({props:{$$slots:{default:[Yt]},$$scope:{ctx:e}}});const j=e[5].default,B=ct(j,e,e[10],null),m=B||zt();return{c(){l=w("main"),n=w("button"),i=w("div"),R(h.$$.fragment),L=M(),p=w("div"),R(b.$$.fragment),y=M(),x=w("div");for(let s=0;s<7;s+=1)z[s].c();D=M(),u=w("div"),g=w("button"),R(E.$$.fragment),A=M(),m&&m.c(),this.h()},l(s){l=v(s,"MAIN",{class:!0});var a=T(l);n=v(a,"BUTTON",{class:!0});var d=T(n);i=v(d,"DIV",{class:!0});var S=T(i);J(h.$$.fragment,S),S.forEach(c),L=U(d),p=v(d,"DIV",{class:!0});var q=T(p);J(b.$$.fragment,q),q.forEach(c),d.forEach(c),y=U(a),x=v(a,"DIV",{class:!0});var et=T(x);for(let Q=0;Q<7;Q+=1)z[Q].l(et);et.forEach(c),D=U(a),u=v(a,"DIV",{class:!0});var ot=T(u);g=v(ot,"BUTTON",{class:!0});var lt=T(g);J(E.$$.fragment,lt),lt.forEach(c),ot.forEach(c),A=U(a),m&&m.l(a),a.forEach(c),this.h()},h(){f(i,"class","w-screen h-8 flex_row_center"),f(p,"class",$="transition-all duration-400 absolute bottom-16 w-screen "+(e[3]?"opacity-100":"opacity-0")+" flex_row_center"),f(n,"class",I="transition-all duration-400 fixed z-50 w-screen "+(e[3]?"h-screen":"h-8")+" primary flex_row_center"),f(x,"class","fixed top-16 z-30 pointer-events-none w-screen px-8 flex justify-between md:justify-center"),f(g,"class","transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"),f(u,"class",X="transition-all duration-400 fixed z-40 "+e[4]+" w-screen flex_row_center"),f(l,"class","max-w-screen min-h-screen background")},m(s,a){V(s,l,a),_(l,n),_(n,i),Z(h,i,null),_(n,L),_(n,p),Z(b,p,null),_(l,y),_(l,x);for(let d=0;d<7;d+=1)z[d].m(x,null);_(l,D),_(l,u),_(u,g),Z(E,g,null),_(l,A),m&&m.m(l,null),k=!0,P||(Y=[F(window,"resize",e[6]),F(window,"scroll",()=>{t=!0,clearTimeout(r),r=st(o,100),e[7]()}),F(n,"click",e[8]),F(g,"click",e[9])],P=!0)},p(s,[a]){a&1&&!t&&(t=!0,clearTimeout(r),scrollTo(window.pageXOffset,s[0]),r=st(o,100));const d={};a&1032&&(d.$$scope={dirty:a,ctx:s}),h.$set(d);const S={};a&1024&&(S.$$scope={dirty:a,ctx:s}),b.$set(S),(!k||a&8&&$!==($="transition-all duration-400 absolute bottom-16 w-screen "+(s[3]?"opacity-100":"opacity-0")+" flex_row_center"))&&f(p,"class",$),(!k||a&8&&I!==(I="transition-all duration-400 fixed z-50 w-screen "+(s[3]?"h-screen":"h-8")+" primary flex_row_center"))&&f(n,"class",I);const q={};a&1024&&(q.$$scope={dirty:a,ctx:s}),E.$set(q),(!k||a&16&&X!==(X="transition-all duration-400 fixed z-40 "+s[4]+" w-screen flex_row_center"))&&f(u,"class",X),B&&B.p&&(!k||a&1024)&&ut(B,j,s,s[10],k?dt(j,s[10],a,null):ft(s[10]),null)},i(s){k||(H(h.$$.fragment,s),H(b.$$.fragment,s),H(E.$$.fragment,s),H(m,s),k=!0)},o(s){N(h.$$.fragment,s),N(b.$$.fragment,s),N(E.$$.fragment,s),N(m,s),k=!1},d(s){s&&c(l),tt(h),tt(b),_t(z,s),tt(E),m&&m.d(s),P=!1,ht(Y)}}}function Vt(e,t,o){let r,{$$slots:l={},$$scope:n}=t,i,h;function L(u){const g=b-u;return b=u,u===0||g<=-8?"-bottom-10":Math.abs(g)<=16?r:(setTimeout(()=>o(4,r=L(p)),8e3),"bottom-8")}let p=0,b=0,$=!1;function I(){o(1,i=window.innerHeight),o(2,h=window.innerWidth)}function y(){o(0,p=window.pageYOffset)}const x=()=>o(3,$=!$),D=()=>xt({y:0});return e.$$set=u=>{"$$scope"in u&&o(10,n=u.$$scope)},e.$$.update=()=>{e.$$.dirty&1&&o(4,r=L(p))},[p,i,h,$,r,l,I,y,x,D,n]}class Ht extends rt{constructor(t){super(),at(this,t,Vt,Bt,it,{})}}export{Ht as default};
