import{S as U,i as W,s as X,c as D,a as S,m as N,t as g,b as $,d as V,l as C,j as B,n as E,o as z,k as H,h as p,p as _,g as q,w,D as le,E as se,z as Z,A as y,B as x,C as ee,G as ae,v as oe,H as ie,F as re,I as fe,e as P,f as Y,y as ue,q as ce}from"../chunks/index.a46aface.js";import"../chunks/paths.0aa31f40.js";import{R as me,I as de,g as _e}from"../chunks/RawButton.88861599.js";/* empty css                       */import{S as ge,a as pe}from"../chunks/SmallHeading.84abcc1a.js";function $e(s){let e;const n=s[4].default,t=Z(n,s,s[5],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&32)&&y(t,n,l,l[5],e?ee(n,l[5],i,null):x(l[5]),null)},i(l){e||(g(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function Q(s){let e,n;return e=new de({props:{inverted:s[1],name:"open-new-window"}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const i={};l&2&&(i.inverted=t[1]),e.$set(i)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function he(s){let e,n,t,l,i;n=new ge({props:{$$slots:{default:[$e]},$$scope:{ctx:s}}});let a=s[2]&&Q(s);return{c(){e=C("div"),D(n.$$.fragment),t=B(),a&&a.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var c=z(e);S(n.$$.fragment,c),t=H(c),a&&a.l(c),c.forEach(p),this.h()},h(){_(e,"class",l="inline gap-2 "+(s[0]?"":"underline underline-offset-4"))},m(f,c){q(f,e,c),N(n,e,null),w(e,t),a&&a.m(e,null),i=!0},p(f,c){const u={};c&32&&(u.$$scope={dirty:c,ctx:f}),n.$set(u),f[2]?a?(a.p(f,c),c&4&&g(a,1)):(a=Q(f),a.c(),g(a,1),a.m(e,null)):a&&(le(),$(a,1,1,()=>{a=null}),se()),(!i||c&1&&l!==(l="inline gap-2 "+(f[0]?"":"underline underline-offset-4")))&&_(e,"class",l)},i(f){i||(g(n.$$.fragment,f),g(a),i=!0)},o(f){$(n.$$.fragment,f),$(a),i=!1},d(f){f&&p(e),V(n),a&&a.d()}}}function be(s){let e,n;return e=new me({props:{onClick:s[3],$$slots:{default:[he]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,[l]){const i={};l&8&&(i.onClick=t[3]),l&39&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function ve(s,e,n){let{$$slots:t={},$$scope:l}=e,{invisible:i=!1}=e,{inverted:a=!1}=e,{openInNew:f=!1}=e,{onClick:c}=e;return s.$$set=u=>{"invisible"in u&&n(0,i=u.invisible),"inverted"in u&&n(1,a=u.inverted),"openInNew"in u&&n(2,f=u.openInNew),"onClick"in u&&n(3,c=u.onClick),"$$scope"in u&&n(5,l=u.$$scope)},[i,a,f,c,t,l]}class T extends U{constructor(e){super(),W(this,e,ve,be,X,{invisible:0,inverted:1,openInNew:2,onClick:3})}}const{window:te}=fe;function we(s,e,n){const t=s.slice();return t[8]=e[n],t}function ke(s){let e=s[2]?"close":"menu",n;return{c(){n=P(e)},l(t){n=Y(t,e)},m(t,l){q(t,n,l)},p(t,l){l&4&&e!==(e=t[2]?"close":"menu")&&ue(n,e)},d(t){t&&p(n)}}}function Ie(s){let e;return{c(){e=P("support me")},l(n){e=Y(n,"support me")},m(n,t){q(n,e,t)},d(n){n&&p(e)}}}function Ce(s){let e;return{c(){e=P(s[8])},l(n){e=Y(n,s[8])},m(n,t){q(n,e,t)},p:ce,d(n){n&&p(e)}}}function Ee(s){let e,n;return e=new pe({props:{$$slots:{default:[Ce]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const i={};l&128&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function ze(s){let e,n,t,l,i,a,f,c,u,h,b,G,I,A,L,k,M,J;ae(s[4]),l=new T({props:{invisible:!0,onClick:s[5],$$slots:{default:[ke]},$$scope:{ctx:s}}}),h=new T({props:{invisible:!0,onClick:s[6],$$slots:{default:[Ie]},$$scope:{ctx:s}}});let ne=["home","services","shop","presenter","design","about","contact"],v=[];for(let o=0;o<7;o+=1)v[o]=Ee(we(s,ne,o));const R=s[3].default,d=Z(R,s,s[7],null);return{c(){e=C("main"),n=C("div"),t=C("div"),D(l.$$.fragment),i=B(),a=C("img"),c=B(),u=C("div"),D(h.$$.fragment),G=B(),I=C("div");for(let o=0;o<7;o+=1)v[o].c();L=B(),d&&d.c(),this.h()},l(o){e=E(o,"MAIN",{class:!0});var r=z(e);n=E(r,"DIV",{class:!0});var m=z(n);t=E(m,"DIV",{class:!0});var j=z(t);S(l.$$.fragment,j),j.forEach(p),i=H(m),a=E(m,"IMG",{src:!0,alt:!0,class:!0}),c=H(m),u=E(m,"DIV",{class:!0});var K=z(u);S(h.$$.fragment,K),K.forEach(p),m.forEach(p),G=H(r),I=E(r,"DIV",{class:!0});var O=z(I);for(let F=0;F<7;F+=1)v[F].l(O);O.forEach(p),L=H(r),d&&d.l(r),r.forEach(p),this.h()},h(){_(t,"class","w-24"),oe(a.src,f="/images/logos/t-r_logo.svg")||_(a,"src",f),_(a,"alt","Logo"),_(a,"class","h-[3.75rem]"),_(u,"class","w-24 flex justify-end"),_(n,"class",b="transition duration-medium fixed z-40 "+s[1]+" bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"),_(I,"class",A="transition duration-long fixed z-30 "+(s[2]?"-translate-x-0":"-translate-x-full")+" w-full h-full background p-8 pt-24 flex flex-col gap-1"),_(e,"class","lowercase")},m(o,r){q(o,e,r),w(e,n),w(n,t),N(l,t,null),w(n,i),w(n,a),w(n,c),w(n,u),N(h,u,null),w(e,G),w(e,I);for(let m=0;m<7;m+=1)v[m]&&v[m].m(I,null);w(e,L),d&&d.m(e,null),k=!0,M||(J=ie(te,"resize",s[4]),M=!0)},p(o,[r]){const m={};r&4&&(m.onClick=o[5]),r&132&&(m.$$scope={dirty:r,ctx:o}),l.$set(m);const j={};r&128&&(j.$$scope={dirty:r,ctx:o}),h.$set(j),(!k||r&2&&b!==(b="transition duration-medium fixed z-40 "+o[1]+" bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"))&&_(n,"class",b),(!k||r&4&&A!==(A="transition duration-long fixed z-30 "+(o[2]?"-translate-x-0":"-translate-x-full")+" w-full h-full background p-8 pt-24 flex flex-col gap-1"))&&_(I,"class",A),d&&d.p&&(!k||r&128)&&y(d,R,o,o[7],k?ee(R,o[7],r,null):x(o[7]),null)},i(o){if(!k){g(l.$$.fragment,o),g(h.$$.fragment,o);for(let r=0;r<7;r+=1)g(v[r]);g(d,o),k=!0}},o(o){$(l.$$.fragment,o),$(h.$$.fragment,o),v=v.filter(Boolean);for(let r=0;r<7;r+=1)$(v[r]);$(d,o),k=!1},d(o){o&&p(e),V(l),V(h),re(v,o),d&&d.d(o),M=!1,J()}}}function De(s,e,n){let{$$slots:t={},$$scope:l}=e,i,a="",f=!1;_e.subscribe(b=>{console.log(b),n(1,a=b===0?"-translate-y-16":"translate-y-0")});function c(){n(0,i=te.innerHeight)}const u=()=>n(2,f=!f),h=()=>window.location.href="https://buymeacoffee.com/taavirubenhagen";return s.$$set=b=>{"$$scope"in b&&n(7,l=b.$$scope)},[i,a,f,t,c,u,h,l]}class He extends U{constructor(e){super(),W(this,e,De,ze,X,{})}}export{He as component};
