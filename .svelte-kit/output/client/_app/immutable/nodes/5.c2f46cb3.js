import{S as H,i as L,s as N,c as P,e as v,a as T,b as k,d as u,f as w,g as I,u as V,h as W,j as U,t as E,k as z,r as x,m as O,y as X,o as Y,z as F,p as b,A as G,v as M,w as ee,B as J,L as te,M as oe,q as K,l as Q,n as R}from"../chunks/index.9697a0f2.js";import"../chunks/paths.bbc85427.js";/* empty css                       */import{I as se}from"../chunks/icon.e303b6c1.js";function le(a){let e,o;const l=a[1].default,t=P(l,a,a[0],null);return{c(){e=v("t"),t&&t.c(),this.h()},l(s){e=T(s,"T",{class:!0});var i=k(e);t&&t.l(i),i.forEach(u),this.h()},h(){w(e,"class","text-lg md:text-lg font-bold")},m(s,i){I(s,e,i),t&&t.m(e,null),o=!0},p(s,[i]){t&&t.p&&(!o||i&1)&&V(t,l,s,s[0],o?U(l,s[0],i,null):W(s[0]),null)},i(s){o||(E(t,s),o=!0)},o(s){z(t,s),o=!1},d(s){s&&u(e),t&&t.d(s)}}}function ne(a,e,o){let{$$slots:l={},$$scope:t}=e;return a.$$set=s=>{"$$scope"in s&&o(0,t=s.$$scope)},[t,l]}class ae extends H{constructor(e){super(),L(this,e,ne,le,N,{})}}const{setTimeout:D}=oe;function re(a,e,o){const l=a.slice();return l[12]=e[o],l}function ie(a){let e,o,l,t;return o=new se({props:{textClass:"text-2xl",name:a[12][0]}}),{c(){e=v("a"),X(o.$$.fragment),l=O(),this.h()},l(s){e=T(s,"A",{class:!0,href:!0});var i=k(e);F(o.$$.fragment,i),l=Y(i),i.forEach(u),this.h()},h(){w(e,"class","transition-all duration-200 pointer-events-auto opacity-100 hover:opacity-75"),w(e,"href",a[12][1])},m(s,i){I(s,e,i),G(o,e,null),b(e,l),t=!0},p:K,i(s){t||(E(o.$$.fragment,s),t=!0)},o(s){z(o.$$.fragment,s),t=!1},d(s){s&&u(e),J(o)}}}function ce(a){let e;return{c(){e=Q("Back to top")},l(o){e=R(o,"Back to top")},m(o,l){I(o,e,l)},d(o){o&&u(e)}}}function ue(a){let e,o;return{c(){e=v("s1"),o=Q("This page is still under development.")},l(l){e=T(l,"S1",{});var t=k(e);o=R(t,"This page is still under development."),t.forEach(u)},m(l,t){I(l,e,t),b(e,o)},p:K,d(l){l&&u(e)}}}function fe(a){let e=!1,o=()=>{e=!1},l,t,s,i,f,d,c,$,y,g,m,B;x(a[5]),x(a[6]);let Z=[["home","/me/home"],["chat-bubble-empty","/contact"],["arrow-separate","/presenter"],["voice","/tts"],["color-filter","/design"],["github","/me/home"],["instagram","/me/home"]],_=[];for(let n=0;n<7;n+=1)_[n]=ie(re(a,Z,n));c=new ae({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}});const C=a[4].default,S=P(C,a,a[7],null),p=S||ue();return{c(){t=v("main"),s=v("div");for(let n=0;n<7;n+=1)_[n].c();i=O(),f=v("div"),d=v("button"),X(c.$$.fragment),y=O(),p&&p.c(),this.h()},l(n){t=T(n,"MAIN",{class:!0});var r=k(t);s=T(r,"DIV",{class:!0});var h=k(s);for(let A=0;A<7;A+=1)_[A].l(h);h.forEach(u),i=Y(r),f=T(r,"DIV",{class:!0});var j=k(f);d=T(j,"BUTTON",{class:!0});var q=k(d);F(c.$$.fragment,q),q.forEach(u),j.forEach(u),y=Y(r),p&&p.l(r),r.forEach(u),this.h()},h(){w(s,"class","fixed top-0 z-30 pointer-events-none shadow bg-secondary w-screen h-16 md:px-[25%] pt-2 flex justify-around items-center"),w(d,"class","transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"),w(f,"class",$="transition-all duration-400 fixed z-40 "+a[3]+" w-screen flex_row_center"),w(t,"class","max-w-screen min-h-screen background")},m(n,r){I(n,t,r),b(t,s);for(let h=0;h<7;h+=1)_[h]&&_[h].m(s,null);b(t,i),b(t,f),b(f,d),G(c,d,null),b(t,y),p&&p.m(t,null),g=!0,m||(B=[M(window,"resize",a[5]),M(window,"scroll",()=>{e=!0,clearTimeout(l),l=D(o,100),a[6]()}),M(d,"click",de)],m=!0)},p(n,[r]){r&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,n[0]),l=D(o,100));const h={};r&128&&(h.$$scope={dirty:r,ctx:n}),c.$set(h),(!g||r&8&&$!==($="transition-all duration-400 fixed z-40 "+n[3]+" w-screen flex_row_center"))&&w(f,"class",$),S&&S.p&&(!g||r&128)&&V(S,C,n,n[7],g?U(C,n[7],r,null):W(n[7]),null)},i(n){if(!g){for(let r=0;r<7;r+=1)E(_[r]);E(c.$$.fragment,n),E(p,n),g=!0}},o(n){_=_.filter(Boolean);for(let r=0;r<7;r+=1)z(_[r]);z(c.$$.fragment,n),z(p,n),g=!1},d(n){n&&u(t),ee(_,n),J(c),p&&p.d(n),m=!1,te(B)}}}const de=()=>{};function me(a,e,o){let l,{$$slots:t={},$$scope:s}=e,i,f;function d(m){const B=$-m;return $=m,m===0||B<=-8?"-bottom-10":Math.abs(B)<=16?l:(setTimeout(()=>o(3,l=d(c)),8e3),"bottom-8")}let c=0,$=0;function y(){o(1,i=window.innerHeight),o(2,f=window.innerWidth)}function g(){o(0,c=window.pageYOffset)}return a.$$set=m=>{"$$scope"in m&&o(7,s=m.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&o(3,l=d(c))},[c,i,f,l,t,y,g,s]}class we extends H{constructor(e){super(),L(this,e,me,fe,N,{})}}export{we as component};
