import{S as N,i as T,s as J,j as Y,c as w,a as h,m as v,v as Z,t as p,b as _,d as b,C as re,l as M,n as E,o as P,p as W,q as C,h as u,r as D,g as c,u as U,G as le,w as ne,E as y,H as j,F as A,e as B,f as F,D as x,k as fe,x as ae,y as ie,z as $e,A as oe}from"../chunks/index.84ea942b.js";import"../chunks/ua-parser.ce0f440b.js";import{S as ee}from"../chunks/SmallParagraph.faf86b72.js";import{S as te}from"../chunks/SmallHeading.0e75d848.js";import{I as se}from"../chunks/icon.f705ef6d.js";import{R as ue}from"../chunks/RawButton.f5238f65.js";import{S as X}from"../chunks/Section.5ed59174.js";const{window:G}=re;function me($){let e,r;return{c(){e=M("img"),this.h()},l(s){e=P(s,"IMG",{src:!0,alt:!0}),this.h()},h(){y(e.src,r=$[3])||D(e,"src",r),D(e,"alt",$[1])},m(s,n){c(s,e,n)},p(s,n){n&8&&!y(e.src,r=s[3])&&D(e,"src",r),n&2&&D(e,"alt",s[1])},d(s){s&&u(e)}}}function ce($){let e,r,s;return{c(){e=M("iframe"),this.h()},l(n){e=P(n,"IFRAME",{title:!0,src:!0,height:!0,frameborder:!0,class:!0,style:!0}),W(e).forEach(u),this.h()},h(){D(e,"title",$[1]),y(e.src,r="https://"+$[3])||D(e,"src",r),D(e,"height",s=$[5]+"px"),D(e,"frameborder",0),D(e,"class","origin-top-left absolute top-0 pointer-events-none rounded-full aspect-video brightness-75"),j(e,"transform","scale("+128/$[5]+")"),j(e,"border-radius",1*$[5]/128+"rem")},m(n,l){c(n,e,l)},p(n,l){l&2&&D(e,"title",n[1]),l&8&&!y(e.src,r="https://"+n[3])&&D(e,"src",r),l&32&&s!==(s=n[5]+"px")&&D(e,"height",s),l&32&&j(e,"transform","scale("+128/n[5]+")"),l&32&&j(e,"border-radius",1*n[5]/128+"rem")},d(n){n&&u(e)}}}function pe($){let e,r;return e=new ee({props:{$$slots:{default:[ge]},$$scope:{ctx:$}}}),{c(){w(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,n){v(e,s,n),r=!0},p(s,n){const l={};n&258&&(l.$$scope={dirty:n,ctx:s}),e.$set(l)},i(s){r||(p(e.$$.fragment,s),r=!0)},o(s){_(e.$$.fragment,s),r=!1},d(s){b(e,s)}}}function _e($){let e,r;return e=new se({props:{inverted:!0,size:20,name:"open-in-new"}}),{c(){w(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,n){v(e,s,n),r=!0},p:A,i(s){r||(p(e.$$.fragment,s),r=!0)},o(s){_(e.$$.fragment,s),r=!1},d(s){b(e,s)}}}function ge($){let e;return{c(){e=B($[1])},l(r){e=F(r,$[1])},m(r,s){c(r,e,s)},p(r,s){s&2&&x(e,r[1])},d(r){r&&u(e)}}}function we($){let e,r,s,n,l,f,t,o;function S(k,d){if(k[0])return ce;if(k[3]!=="")return me}let g=S($),i=g&&g($);const I=[_e,pe],H=[];function q(k,d){return k[0]?0:1}return n=q($),l=H[n]=I[n]($),{c(){e=M("div"),i&&i.c(),r=E(),s=M("div"),l.c(),this.h()},l(k){e=P(k,"DIV",{class:!0});var d=W(e);i&&i.l(d),r=C(d),s=P(d,"DIV",{class:!0});var a=W(s);l.l(a),a.forEach(u),d.forEach(u),this.h()},h(){D(s,"class",f="absolute "+($[0]?"bottom-4":"top-0 h-full")+" w-full center_row text-white"),D(e,"class",t="relative shadow rounded-2xl h-32 "+($[0]?"":"bg-black")+" aspect-video normal-case")},m(k,d){c(k,e,d),i&&i.m(e,null),U(e,r),U(e,s),H[n].m(s,null),o=!0},p(k,d){g===(g=S(k))&&i?i.p(k,d):(i&&i.d(1),i=g&&g(k),i&&(i.c(),i.m(e,r)));let a=n;n=q(k),n===a?H[n].p(k,d):(le(),_(H[a],1,1,()=>{H[a]=null}),ne(),l=H[n],l?l.p(k,d):(l=H[n]=I[n](k),l.c()),p(l,1),l.m(s,null)),(!o||d&1&&f!==(f="absolute "+(k[0]?"bottom-4":"top-0 h-full")+" w-full center_row text-white"))&&D(s,"class",f),(!o||d&1&&t!==(t="relative shadow rounded-2xl h-32 "+(k[0]?"":"bg-black")+" aspect-video normal-case"))&&D(e,"class",t)},i(k){o||(p(l),o=!0)},o(k){_(l),o=!1},d(k){k&&u(e),i&&i.d(),H[n].d()}}}function he($){let e,r,s,n;return Y($[6]),e=new ue({props:{onClick:$[7],$$slots:{default:[we]},$$scope:{ctx:$}}}),{c(){w(e.$$.fragment)},l(l){h(e.$$.fragment,l)},m(l,f){v(e,l,f),r=!0,s||(n=Z(G,"resize",$[6]),s=!0)},p(l,[f]){const t={};f&4&&(t.onClick=l[7]),f&299&&(t.$$scope={dirty:f,ctx:l}),e.$set(t)},i(l){r||(p(e.$$.fragment,l),r=!0)},o(l){_(e.$$.fragment,l),r=!1},d(l){b(e,l),s=!1,n()}}}function ve($,e,r){let{external:s=!1}=e,{title:n=""}=e,{target:l=""}=e,{src:f=""}=e;n===""&&(n="Showcase Item"),l===""&&(l=f),l===""&&(s=!1),console.log(f);let t,o;function S(){r(4,t=G.innerWidth),r(5,o=G.innerHeight)}const g=()=>{window.location.href="https://"+l};return $.$$set=i=>{"external"in i&&r(0,s=i.external),"title"in i&&r(1,n=i.title),"target"in i&&r(2,l=i.target),"src"in i&&r(3,f=i.src)},[s,n,l,f,t,o,S,g]}class V extends N{constructor(e){super(),T(this,e,ve,he,J,{external:0,title:1,target:2,src:3})}}function be($){let e;return{c(){e=B($[0])},l(r){e=F(r,$[0])},m(r,s){c(r,e,s)},p(r,s){s&1&&x(e,r[0])},d(r){r&&u(e)}}}function de($){let e,r,s,n,l,f,t,o;e=new te({props:{$$slots:{default:[be]},$$scope:{ctx:$}}});const S=$[1].default,g=fe(S,$,$[2],null);return{c(){w(e.$$.fragment),r=E(),s=M("div"),n=E(),l=M("div"),g&&g.c(),f=E(),t=M("div"),this.h()},l(i){h(e.$$.fragment,i),r=C(i),s=P(i,"DIV",{class:!0}),W(s).forEach(u),n=C(i),l=P(i,"DIV",{class:!0});var I=W(l);g&&g.l(I),I.forEach(u),f=C(i),t=P(i,"DIV",{class:!0}),W(t).forEach(u),this.h()},h(){D(s,"class","h-4"),D(l,"class","-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8"),D(t,"class","h-16")},m(i,I){v(e,i,I),c(i,r,I),c(i,s,I),c(i,n,I),c(i,l,I),g&&g.m(l,null),c(i,f,I),c(i,t,I),o=!0},p(i,[I]){const H={};I&5&&(H.$$scope={dirty:I,ctx:i}),e.$set(H),g&&g.p&&(!o||I&4)&&ae(g,S,i,i[2],o?$e(S,i[2],I,null):ie(i[2]),null)},i(i){o||(p(e.$$.fragment,i),p(g,i),o=!0)},o(i){_(e.$$.fragment,i),_(g,i),o=!1},d(i){b(e,i),i&&u(r),i&&u(s),i&&u(n),i&&u(l),g&&g.d(i),i&&u(f),i&&u(t)}}}function ke($,e,r){let{$$slots:s={},$$scope:n}=e,{title:l}=e;return $.$$set=f=>{"title"in f&&r(0,l=f.title),"$$scope"in f&&r(2,n=f.$$scope)},[l,s,n]}class R extends N{constructor(e){super(),T(this,e,ke,de,J,{title:0})}}function Se($,e,r){const s=$.slice();return s[3]=e[r],s}function Ie($){let e;return{c(){e=B("Independent designer, developer, artist, activist and entrepreneur.")},l(r){e=F(r,"Independent designer, developer, artist, activist and entrepreneur.")},m(r,s){c(r,e,s)},d(r){r&&u(e)}}}function De($){let e;return{c(){e=B("Scroll.")},l(r){e=F(r,"Scroll.")},m(r,s){c(r,e,s)},d(r){r&&u(e)}}}function Ee($){let e,r,s,n,l;return e=new te({props:{$$slots:{default:[Ie]},$$scope:{ctx:$}}}),n=new ee({props:{$$slots:{default:[De]},$$scope:{ctx:$}}}),{c(){w(e.$$.fragment),r=E(),s=M("div"),w(n.$$.fragment),this.h()},l(f){h(e.$$.fragment,f),r=C(f),s=P(f,"DIV",{class:!0});var t=W(s);h(n.$$.fragment,t),t.forEach(u),this.h()},h(){D(s,"class","absolute bottom-8")},m(f,t){v(e,f,t),c(f,r,t),c(f,s,t),v(n,s,null),l=!0},p(f,t){const o={};t&64&&(o.$$scope={dirty:t,ctx:f}),e.$set(o);const S={};t&64&&(S.$$scope={dirty:t,ctx:f}),n.$set(S)},i(f){l||(p(e.$$.fragment,f),p(n.$$.fragment,f),l=!0)},o(f){_(e.$$.fragment,f),_(n.$$.fragment,f),l=!1},d(f){b(e,f),f&&u(r),f&&u(s),b(n)}}}function Ce($){let e,r,s,n,l,f;return e=new V({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),s=new V({props:{target:"play.google.com/store/apps/details?id=fluent.simple.counter",title:"Simple Counter"}}),l=new V({props:{src:"",title:"Outfyx"}}),{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment),n=E(),w(l.$$.fragment)},l(t){h(e.$$.fragment,t),r=C(t),h(s.$$.fragment,t),n=C(t),h(l.$$.fragment,t)},m(t,o){v(e,t,o),c(t,r,o),v(s,t,o),c(t,n,o),v(l,t,o),f=!0},p:A,i(t){f||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(l.$$.fragment,t),f=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!1},d(t){b(e,t),t&&u(r),b(s,t),t&&u(n),b(l,t)}}}function He($){let e,r,s,n,l,f;return e=new V({props:{external:!0,src:"rubenhagen.com/drafts/hoffmanns-schuppen",title:"hoffmanns-schuppen.com"}}),s=new V({props:{external:!0,src:"fenni.me",title:"fenni.me"}}),l=new V({props:{external:!0,src:"rubenhagen.com",title:"rubenhagen.com"}}),{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment),n=E(),w(l.$$.fragment)},l(t){h(e.$$.fragment,t),r=C(t),h(s.$$.fragment,t),n=C(t),h(l.$$.fragment,t)},m(t,o){v(e,t,o),c(t,r,o),v(s,t,o),c(t,n,o),v(l,t,o),f=!0},p:A,i(t){f||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(l.$$.fragment,t),f=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!1},d(t){b(e,t),t&&u(r),b(s,t),t&&u(n),b(l,t)}}}function Ve($){let e,r,s,n,l,f;return e=new V({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),s=new V({props:{title:"Hoffmann's Schuppen"}}),l=new V({props:{title:"JuPa Campaign"}}),{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment),n=E(),w(l.$$.fragment)},l(t){h(e.$$.fragment,t),r=C(t),h(s.$$.fragment,t),n=C(t),h(l.$$.fragment,t)},m(t,o){v(e,t,o),c(t,r,o),v(s,t,o),c(t,n,o),v(l,t,o),f=!0},p:A,i(t){f||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(l.$$.fragment,t),f=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!1},d(t){b(e,t),t&&u(r),b(s,t),t&&u(n),b(l,t)}}}function ze($){let e,r,s,n,l,f;return e=new V({props:{target:"rubenhagen.com/drafts/website/tavy",title:"Tavy Design System"}}),s=new V({props:{target:"rubenhagen.com/drafts/website/tavy/icons",title:"Tavy Icons"}}),l=new V({props:{title:"PM2 Design System"}}),{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment),n=E(),w(l.$$.fragment)},l(t){h(e.$$.fragment,t),r=C(t),h(s.$$.fragment,t),n=C(t),h(l.$$.fragment,t)},m(t,o){v(e,t,o),c(t,r,o),v(s,t,o),c(t,n,o),v(l,t,o),f=!0},p:A,i(t){f||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(l.$$.fragment,t),f=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!1},d(t){b(e,t),t&&u(r),b(s,t),t&&u(n),b(l,t)}}}function Me($){let e,r,s,n,l,f;return e=new V({props:{title:"Hoffmann's Schuppen"}}),s=new V({props:{title:"Affiliate Marketing"}}),l=new V({props:{title:"Content Creation"}}),{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment),n=E(),w(l.$$.fragment)},l(t){h(e.$$.fragment,t),r=C(t),h(s.$$.fragment,t),n=C(t),h(l.$$.fragment,t)},m(t,o){v(e,t,o),c(t,r,o),v(s,t,o),c(t,n,o),v(l,t,o),f=!0},p:A,i(t){f||(p(e.$$.fragment,t),p(s.$$.fragment,t),p(l.$$.fragment,t),f=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(l.$$.fragment,t),f=!1},d(t){b(e,t),t&&u(r),b(s,t),t&&u(n),b(l,t)}}}function Pe($){let e,r;return e=new se({props:{inverted:!0,name:$[3],size:28}}),{c(){w(e.$$.fragment)},l(s){h(e.$$.fragment,s)},m(s,n){v(e,s,n),r=!0},p:A,i(s){r||(p(e.$$.fragment,s),r=!0)},o(s){_(e.$$.fragment,s),r=!1},d(s){b(e,s)}}}function We($){let e,r,s,n,l,f,t,o,S,g,i,I,H,q;e=new R({props:{title:"apps",$$slots:{default:[Ce]},$$scope:{ctx:$}}}),s=new R({props:{title:"websites",$$slots:{default:[He]},$$scope:{ctx:$}}}),l=new R({props:{title:"graphic design",$$slots:{default:[Ve]},$$scope:{ctx:$}}}),t=new R({props:{title:"design system",$$slots:{default:[ze]},$$scope:{ctx:$}}}),S=new R({props:{title:"other businesses",$$slots:{default:[Me]},$$scope:{ctx:$}}});let k=["instagram","tiktok","youtube","not-found"],d=[];for(let a=0;a<4;a+=1)d[a]=Pe(Se($,k,a));return{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment),n=E(),w(l.$$.fragment),f=E(),w(t.$$.fragment),o=E(),w(S.$$.fragment),g=E(),i=M("div");for(let a=0;a<4;a+=1)d[a].c();I=E(),H=M("div"),this.h()},l(a){h(e.$$.fragment,a),r=C(a),h(s.$$.fragment,a),n=C(a),h(l.$$.fragment,a),f=C(a),h(t.$$.fragment,a),o=C(a),h(S.$$.fragment,a),g=C(a),i=P(a,"DIV",{class:!0});var m=W(i);for(let z=0;z<4;z+=1)d[z].l(m);m.forEach(u),I=C(a),H=P(a,"DIV",{class:!0}),W(H).forEach(u),this.h()},h(){D(i,"class","rounded-2xl w-full h-16 primary flex justify-evenly items-center"),D(H,"class","h-16")},m(a,m){v(e,a,m),c(a,r,m),v(s,a,m),c(a,n,m),v(l,a,m),c(a,f,m),v(t,a,m),c(a,o,m),v(S,a,m),c(a,g,m),c(a,i,m);for(let z=0;z<4;z+=1)d[z]&&d[z].m(i,null);c(a,I,m),c(a,H,m),q=!0},p(a,m){const z={};m&64&&(z.$$scope={dirty:m,ctx:a}),e.$set(z);const O={};m&64&&(O.$$scope={dirty:m,ctx:a}),s.$set(O);const K={};m&64&&(K.$$scope={dirty:m,ctx:a}),l.$set(K);const L={};m&64&&(L.$$scope={dirty:m,ctx:a}),t.$set(L);const Q={};m&64&&(Q.$$scope={dirty:m,ctx:a}),S.$set(Q)},i(a){if(!q){p(e.$$.fragment,a),p(s.$$.fragment,a),p(l.$$.fragment,a),p(t.$$.fragment,a),p(S.$$.fragment,a);for(let m=0;m<4;m+=1)p(d[m]);q=!0}},o(a){_(e.$$.fragment,a),_(s.$$.fragment,a),_(l.$$.fragment,a),_(t.$$.fragment,a),_(S.$$.fragment,a),d=d.filter(Boolean);for(let m=0;m<4;m+=1)_(d[m]);q=!1},d(a){b(e,a),a&&u(r),b(s,a),a&&u(n),b(l,a),a&&u(f),b(t,a),a&&u(o),b(S,a),a&&u(g),a&&u(i),oe(d,a),a&&u(I),a&&u(H)}}}function qe($){let e,r,s,n,l,f;return Y($[2]),e=new X({props:{className:"relative p-16 pb-24 primary center_col gap-8 text-center",$$slots:{default:[Ee]},$$scope:{ctx:$}}}),s=new X({props:{className:"p-8 pt-16",$$slots:{default:[We]},$$scope:{ctx:$}}}),{c(){w(e.$$.fragment),r=E(),w(s.$$.fragment)},l(t){h(e.$$.fragment,t),r=C(t),h(s.$$.fragment,t)},m(t,o){v(e,t,o),c(t,r,o),v(s,t,o),n=!0,l||(f=Z(window,"resize",$[2]),l=!0)},p(t,[o]){const S={};o&64&&(S.$$scope={dirty:o,ctx:t}),e.$set(S);const g={};o&64&&(g.$$scope={dirty:o,ctx:t}),s.$set(g)},i(t){n||(p(e.$$.fragment,t),p(s.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),n=!1},d(t){b(e,t),t&&u(r),b(s,t),l=!1,f()}}}function Ae($,e,r){let s,n;function l(){r(0,s=window.innerWidth),r(1,n=window.innerHeight)}return[s,n,l]}class Te extends N{constructor(e){super(),T(this,e,Ae,qe,J,{})}}export{Te as component};
