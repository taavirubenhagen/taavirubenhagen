import{S as T,i as J,s as O,G as x,c as b,a as v,m as d,H as ee,t as _,b as g,d as k,I as ne,l as V,j as C,n as H,o as P,k as D,h as u,p as I,g as w,v as fe,D as F,E as G,y as B,q,r as A,e as R,f as j,w as te,z as ae,A as ie,B as $e,C as oe,F as ue}from"../chunks/index.7b7993cb.js";/* empty css                       */import{R as me,I as K}from"../chunks/RawButton.af5d6688.js";import"../chunks/paths.426c780e.js";import{S as se,a as re}from"../chunks/SmallHeading.57f251d1.js";import{S as Y}from"../chunks/Section.750f59bd.js";const{window:N}=ne;function ce(a){let e,r,s;return r=new se({props:{$$slots:{default:[ge]},$$scope:{ctx:a}}}),{c(){e=V("div"),b(r.$$.fragment),this.h()},l(n){e=H(n,"DIV",{class:!0});var l=P(e);v(r.$$.fragment,l),l.forEach(u),this.h()},h(){I(e,"class","h-full p-4 center_col text-center")},m(n,l){w(n,e,l),d(r,e,null),s=!0},p(n,l){const f={};l&257&&(f.$$scope={dirty:l,ctx:n}),r.$set(f)},i(n){s||(_(r.$$.fragment,n),s=!0)},o(n){g(r.$$.fragment,n),s=!1},d(n){n&&u(e),k(r)}}}function pe(a){let e,r;return{c(){e=V("img"),this.h()},l(s){e=H(s,"IMG",{src:!0,alt:!0}),this.h()},h(){B(e.src,r=a[3])||I(e,"src",r),I(e,"alt",a[0])},m(s,n){w(s,e,n)},p(s,n){n&8&&!B(e.src,r=s[3])&&I(e,"src",r),n&1&&I(e,"alt",s[0])},i:q,o:q,d(s){s&&u(e)}}}function _e(a){let e,r,s;return{c(){e=V("iframe"),this.h()},l(n){e=H(n,"IFRAME",{title:!0,src:!0,height:!0,frameborder:!0,class:!0,style:!0}),P(e).forEach(u),this.h()},h(){I(e,"title",a[0]),B(e.src,r="https://"+a[3])||I(e,"src",r),I(e,"height",s=a[5]+"px"),I(e,"frameborder",0),I(e,"class","origin-top-left absolute top-0 pointer-events-none rounded-full aspect-video brightness-75"),A(e,"transform","scale("+128/a[5]+")"),A(e,"border-radius",1*a[5]/128+"rem")},m(n,l){w(n,e,l)},p(n,l){l&1&&I(e,"title",n[0]),l&8&&!B(e.src,r="https://"+n[3])&&I(e,"src",r),l&32&&s!==(s=n[5]+"px")&&I(e,"height",s),l&32&&A(e,"transform","scale("+128/n[5]+")"),l&32&&A(e,"border-radius",1*n[5]/128+"rem")},i:q,o:q,d(n){n&&u(e)}}}function ge(a){let e;return{c(){e=R(a[0])},l(r){e=j(r,a[0])},m(r,s){w(r,e,s)},p(r,s){s&1&&te(e,r[0])},d(r){r&&u(e)}}}function Z(a){let e,r,s,n,l;const f=[he,we],t=[];function $(o,p){return o[1][0]==="/"?0:1}return r=$(a),s=t[r]=f[r](a),{c(){e=V("div"),s.c(),this.h()},l(o){e=H(o,"DIV",{class:!0});var p=P(e);s.l(p),p.forEach(u),this.h()},h(){I(e,"class",n="absolute bottom-4 w-full center_row "+(a[3]===""?"":"text-white"))},m(o,p){w(o,e,p),t[r].m(e,null),l=!0},p(o,p){let m=r;r=$(o),r!==m&&(F(),g(t[m],1,1,()=>{t[m]=null}),G(),s=t[r],s||(s=t[r]=f[r](o),s.c()),_(s,1),s.m(e,null)),(!l||p&8&&n!==(n="absolute bottom-4 w-full center_row "+(o[3]===""?"":"text-white")))&&I(e,"class",n)},i(o){l||(_(s),l=!0)},o(o){g(s),l=!1},d(o){o&&u(e),t[r].d()}}}function we(a){let e,r;return e=new K({props:{name:"open-new-window",textClass:"scale-150"}}),{c(){b(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,n){d(e,s,n),r=!0},i(s){r||(_(e.$$.fragment,s),r=!0)},o(s){g(e.$$.fragment,s),r=!1},d(s){k(e,s)}}}function he(a){let e,r;return e=new K({props:{name:"arrow-right",textClass:"scale-150"}}),{c(){b(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,n){d(e,s,n),r=!0},i(s){r||(_(e.$$.fragment,s),r=!0)},o(s){g(e.$$.fragment,s),r=!1},d(s){k(e,s)}}}function be(a){let e,r,s,n,l;const f=[_e,pe,ce],t=[];function $(p,m){return p[2]?0:p[3]!==""?1:2}r=$(a),s=t[r]=f[r](a);let o=a[1]!==""&&Z(a);return{c(){e=V("div"),s.c(),n=C(),o&&o.c(),this.h()},l(p){e=H(p,"DIV",{class:!0});var m=P(e);s.l(m),n=D(m),o&&o.l(m),m.forEach(u),this.h()},h(){I(e,"class","relative shadow rounded-2xl h-32 aspect-video normal-case")},m(p,m){w(p,e,m),t[r].m(e,null),fe(e,n),o&&o.m(e,null),l=!0},p(p,m){let c=r;r=$(p),r===c?t[r].p(p,m):(F(),g(t[c],1,1,()=>{t[c]=null}),G(),s=t[r],s?s.p(p,m):(s=t[r]=f[r](p),s.c()),_(s,1),s.m(e,n)),p[1]!==""?o?(o.p(p,m),m&2&&_(o,1)):(o=Z(p),o.c(),_(o,1),o.m(e,null)):o&&(F(),g(o,1,1,()=>{o=null}),G())},i(p){l||(_(s),_(o),l=!0)},o(p){g(s),g(o),l=!1},d(p){p&&u(e),t[r].d(),o&&o.d()}}}function ve(a){let e,r,s,n;return x(a[6]),e=new me({props:{onClick:a[7],$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,f){d(e,l,f),r=!0,s||(n=ee(N,"resize",a[6]),s=!0)},p(l,[f]){const t={};f&2&&(t.onClick=l[7]),f&303&&(t.$$scope={dirty:f,ctx:l}),e.$set(t)},i(l){r||(_(e.$$.fragment,l),r=!0)},o(l){g(e.$$.fragment,l),r=!1},d(l){k(e,l),s=!1,n()}}}function de(a,e,r){let{website:s=!1}=e,{title:n=""}=e,{src:l=""}=e,{target:f=""}=e;n===""&&(n="Showcase Item"),f===""&&(f=l);let t,$;function o(){r(4,t=N.innerWidth),r(5,$=N.innerHeight)}const p=()=>{window.location.href="https://"+f};return a.$$set=m=>{"website"in m&&r(2,s=m.website),"title"in m&&r(0,n=m.title),"src"in m&&r(3,l=m.src),"target"in m&&r(1,f=m.target)},[n,f,s,l,t,$,o,p]}class E extends T{constructor(e){super(),J(this,e,de,ve,O,{website:2,title:0,src:3,target:1})}}function ke(a){let e;return{c(){e=R(a[0])},l(r){e=j(r,a[0])},m(r,s){w(r,e,s)},p(r,s){s&1&&te(e,r[0])},d(r){r&&u(e)}}}function Ie(a){let e,r,s,n,l,f,t,$,o;r=new re({props:{$$slots:{default:[ke]},$$scope:{ctx:a}}});const p=a[1].default,m=ae(p,a,a[2],null);return{c(){e=V("div"),b(r.$$.fragment),s=C(),n=V("div"),l=C(),f=V("div"),m&&m.c(),t=C(),$=V("div"),this.h()},l(c){e=H(c,"DIV",{class:!0});var S=P(e);v(r.$$.fragment,S),S.forEach(u),s=D(c),n=H(c,"DIV",{class:!0}),P(n).forEach(u),l=D(c),f=H(c,"DIV",{class:!0});var z=P(f);m&&m.l(z),z.forEach(u),t=D(c),$=H(c,"DIV",{class:!0}),P($).forEach(u),this.h()},h(){I(e,"class","flex gap-8 items-end"),I(n,"class","h-4"),I(f,"class","-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8"),I($,"class","h-16")},m(c,S){w(c,e,S),d(r,e,null),w(c,s,S),w(c,n,S),w(c,l,S),w(c,f,S),m&&m.m(f,null),w(c,t,S),w(c,$,S),o=!0},p(c,[S]){const z={};S&5&&(z.$$scope={dirty:S,ctx:c}),r.$set(z),m&&m.p&&(!o||S&4)&&ie(m,p,c,c[2],o?oe(p,c[2],S,null):$e(c[2]),null)},i(c){o||(_(r.$$.fragment,c),_(m,c),o=!0)},o(c){g(r.$$.fragment,c),g(m,c),o=!1},d(c){c&&u(e),k(r),c&&u(s),c&&u(n),c&&u(l),c&&u(f),m&&m.d(c),c&&u(t),c&&u($)}}}function Se(a,e,r){let{$$slots:s={},$$scope:n}=e,{title:l}=e;return a.$$set=f=>{"title"in f&&r(0,l=f.title),"$$scope"in f&&r(2,n=f.$$scope)},[l,s,n]}class y extends T{constructor(e){super(),J(this,e,Se,Ie,O,{title:0})}}function Ce(a,e,r){const s=a.slice();return s[3]=e[r],s}function De(a){let e;return{c(){e=R("Independent designer, developer, artist, activist and entrepreneur.")},l(r){e=j(r,"Independent designer, developer, artist, activist and entrepreneur.")},m(r,s){w(r,e,s)},d(r){r&&u(e)}}}function Ee(a){let e;return{c(){e=R("Scroll.")},l(r){e=j(r,"Scroll.")},m(r,s){w(r,e,s)},d(r){r&&u(e)}}}function Ve(a){let e,r,s,n,l;return e=new re({props:{$$slots:{default:[De]},$$scope:{ctx:a}}}),n=new se({props:{$$slots:{default:[Ee]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),r=C(),s=V("div"),b(n.$$.fragment),this.h()},l(f){v(e.$$.fragment,f),r=D(f),s=H(f,"DIV",{class:!0});var t=P(s);v(n.$$.fragment,t),t.forEach(u),this.h()},h(){I(s,"class","absolute bottom-8")},m(f,t){d(e,f,t),w(f,r,t),w(f,s,t),d(n,s,null),l=!0},p(f,t){const $={};t&64&&($.$$scope={dirty:t,ctx:f}),e.$set($);const o={};t&64&&(o.$$scope={dirty:t,ctx:f}),n.$set(o)},i(f){l||(_(e.$$.fragment,f),_(n.$$.fragment,f),l=!0)},o(f){g(e.$$.fragment,f),g(n.$$.fragment,f),l=!1},d(f){k(e,f),f&&u(r),f&&u(s),k(n)}}}function He(a){let e,r,s,n,l,f;return e=new E({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),s=new E({props:{target:"play.google.com/store/apps/details?id=fluent.simple.counter",title:"Simple Counter"}}),l=new E({props:{src:"",title:"Outfyx"}}),{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment),n=C(),b(l.$$.fragment)},l(t){v(e.$$.fragment,t),r=D(t),v(s.$$.fragment,t),n=D(t),v(l.$$.fragment,t)},m(t,$){d(e,t,$),w(t,r,$),d(s,t,$),w(t,n,$),d(l,t,$),f=!0},p:q,i(t){f||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),f=!1},d(t){k(e,t),t&&u(r),k(s,t),t&&u(n),k(l,t)}}}function Me(a){let e,r,s,n,l,f;return e=new E({props:{website:!0,src:"rubenhagen.com/drafts/hoffmanns-schuppen",title:"hoffmanns-schuppen.com"}}),s=new E({props:{website:!0,src:"fenni.me",title:"fenni.me"}}),l=new E({props:{website:!0,src:"rubenhagen.com",title:"rubenhagen.com"}}),{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment),n=C(),b(l.$$.fragment)},l(t){v(e.$$.fragment,t),r=D(t),v(s.$$.fragment,t),n=D(t),v(l.$$.fragment,t)},m(t,$){d(e,t,$),w(t,r,$),d(s,t,$),w(t,n,$),d(l,t,$),f=!0},p:q,i(t){f||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),f=!1},d(t){k(e,t),t&&u(r),k(s,t),t&&u(n),k(l,t)}}}function Pe(a){let e,r,s,n,l,f;return e=new E({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),s=new E({props:{title:"Hoffmann's Schuppen"}}),l=new E({props:{title:"JuPa Campaign"}}),{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment),n=C(),b(l.$$.fragment)},l(t){v(e.$$.fragment,t),r=D(t),v(s.$$.fragment,t),n=D(t),v(l.$$.fragment,t)},m(t,$){d(e,t,$),w(t,r,$),d(s,t,$),w(t,n,$),d(l,t,$),f=!0},p:q,i(t){f||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),f=!1},d(t){k(e,t),t&&u(r),k(s,t),t&&u(n),k(l,t)}}}function ze(a){let e,r,s,n,l,f;return e=new E({props:{target:"/drafts/website/tavy",title:"Tavy Design System"}}),s=new E({props:{target:"/drafts/website/tavy/icons",title:"Tavy Icons"}}),l=new E({props:{src:"",title:"PM2 Design System"}}),{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment),n=C(),b(l.$$.fragment)},l(t){v(e.$$.fragment,t),r=D(t),v(s.$$.fragment,t),n=D(t),v(l.$$.fragment,t)},m(t,$){d(e,t,$),w(t,r,$),d(s,t,$),w(t,n,$),d(l,t,$),f=!0},p:q,i(t){f||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),f=!1},d(t){k(e,t),t&&u(r),k(s,t),t&&u(n),k(l,t)}}}function We(a){let e,r,s,n,l,f;return e=new E({props:{src:"",title:"Hoffmann's Schuppen"}}),s=new E({props:{src:"",title:"Affiliate Marketing"}}),l=new E({props:{src:"",title:"Content Creation"}}),{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment),n=C(),b(l.$$.fragment)},l(t){v(e.$$.fragment,t),r=D(t),v(s.$$.fragment,t),n=D(t),v(l.$$.fragment,t)},m(t,$){d(e,t,$),w(t,r,$),d(s,t,$),w(t,n,$),d(l,t,$),f=!0},p:q,i(t){f||(_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),g(l.$$.fragment,t),f=!1},d(t){k(e,t),t&&u(r),k(s,t),t&&u(n),k(l,t)}}}function qe(a){let e,r;return e=new K({props:{name:a[3],textClass:"text-3xl"}}),{c(){b(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,n){d(e,s,n),r=!0},p:q,i(s){r||(_(e.$$.fragment,s),r=!0)},o(s){g(e.$$.fragment,s),r=!1},d(s){k(e,s)}}}function ye(a){let e,r,s,n,l,f,t,$,o,p,m,c,S,z;e=new y({props:{title:"apps",$$slots:{default:[He]},$$scope:{ctx:a}}}),s=new y({props:{title:"websites",$$slots:{default:[Me]},$$scope:{ctx:a}}}),l=new y({props:{title:"graphic design",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),t=new y({props:{title:"design system",$$slots:{default:[ze]},$$scope:{ctx:a}}}),o=new y({props:{title:"other businesses",$$slots:{default:[We]},$$scope:{ctx:a}}});let le=["instagram","tiktok","youtube","github"],W=[];for(let i=0;i<4;i+=1)W[i]=qe(Ce(a,le,i));return{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment),n=C(),b(l.$$.fragment),f=C(),b(t.$$.fragment),$=C(),b(o.$$.fragment),p=C(),m=V("div");for(let i=0;i<4;i+=1)W[i].c();c=C(),S=V("div"),this.h()},l(i){v(e.$$.fragment,i),r=D(i),v(s.$$.fragment,i),n=D(i),v(l.$$.fragment,i),f=D(i),v(t.$$.fragment,i),$=D(i),v(o.$$.fragment,i),p=D(i),m=H(i,"DIV",{class:!0});var h=P(m);for(let M=0;M<4;M+=1)W[M].l(h);h.forEach(u),c=D(i),S=H(i,"DIV",{class:!0}),P(S).forEach(u),this.h()},h(){I(m,"class","rounded-2xl w-full h-16 primary flex justify-evenly items-center"),I(S,"class","h-16")},m(i,h){d(e,i,h),w(i,r,h),d(s,i,h),w(i,n,h),d(l,i,h),w(i,f,h),d(t,i,h),w(i,$,h),d(o,i,h),w(i,p,h),w(i,m,h);for(let M=0;M<4;M+=1)W[M]&&W[M].m(m,null);w(i,c,h),w(i,S,h),z=!0},p(i,h){const M={};h&64&&(M.$$scope={dirty:h,ctx:i}),e.$set(M);const L={};h&64&&(L.$$scope={dirty:h,ctx:i}),s.$set(L);const Q={};h&64&&(Q.$$scope={dirty:h,ctx:i}),l.$set(Q);const U={};h&64&&(U.$$scope={dirty:h,ctx:i}),t.$set(U);const X={};h&64&&(X.$$scope={dirty:h,ctx:i}),o.$set(X)},i(i){if(!z){_(e.$$.fragment,i),_(s.$$.fragment,i),_(l.$$.fragment,i),_(t.$$.fragment,i),_(o.$$.fragment,i);for(let h=0;h<4;h+=1)_(W[h]);z=!0}},o(i){g(e.$$.fragment,i),g(s.$$.fragment,i),g(l.$$.fragment,i),g(t.$$.fragment,i),g(o.$$.fragment,i),W=W.filter(Boolean);for(let h=0;h<4;h+=1)g(W[h]);z=!1},d(i){k(e,i),i&&u(r),k(s,i),i&&u(n),k(l,i),i&&u(f),k(t,i),i&&u($),k(o,i),i&&u(p),i&&u(m),ue(W,i),i&&u(c),i&&u(S)}}}function Ae(a){let e,r,s,n,l,f;return x(a[2]),e=new Y({props:{className:"relative p-16 pb-24 primary center_col gap-8 text-center",$$slots:{default:[Ve]},$$scope:{ctx:a}}}),s=new Y({props:{className:"p-8 pt-16",$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){b(e.$$.fragment),r=C(),b(s.$$.fragment)},l(t){v(e.$$.fragment,t),r=D(t),v(s.$$.fragment,t)},m(t,$){d(e,t,$),w(t,r,$),d(s,t,$),n=!0,l||(f=ee(window,"resize",a[2]),l=!0)},p(t,[$]){const o={};$&64&&(o.$$scope={dirty:$,ctx:t}),e.$set(o);const p={};$&64&&(p.$$scope={dirty:$,ctx:t}),s.$set(p)},i(t){n||(_(e.$$.fragment,t),_(s.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),g(s.$$.fragment,t),n=!1},d(t){k(e,t),t&&u(r),k(s,t),l=!1,f()}}}function Be(a,e,r){let s,n;function l(){r(0,s=window.innerWidth),r(1,n=window.innerHeight)}return[s,n,l]}class Je extends T{constructor(e){super(),J(this,e,Be,Ae,O,{})}}export{Je as component};