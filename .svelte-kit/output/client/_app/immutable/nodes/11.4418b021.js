import{S as Z,i as ee,s as te,c as ne,e as C,a as E,b as V,d as u,f as y,g as h,u as se,h as re,j as oe,t as c,k as m,r as T,q as g,w as A,v as b,n as x,y as w,z as fe,J as ue,A as v,o as S,D as $e,l as R,m as X,G as ie,E as ce}from"../chunks/index.04f8c59f.js";import{I as F}from"../chunks/Icon.b10383f8.js";/* empty css                       */import{H as me}from"../chunks/H2.5a2d5f81.js";import{P as U}from"../chunks/P3.1b66bee6.js";import{B as L}from"../chunks/B.3b8cb609.js";import{B as K}from"../chunks/Button.18477e81.js";function pe(o){let e,n;const t=o[1].default,s=ne(t,o,o[0],null);return{c(){e=C("t"),s&&s.c(),this.h()},l(r){e=E(r,"T",{class:!0});var a=V(e);s&&s.l(a),a.forEach(u),this.h()},h(){y(e,"class","text-xl md:text-2xl selection:primary")},m(r,a){h(r,e,a),s&&s.m(e,null),n=!0},p(r,[a]){s&&s.p&&(!n||a&1)&&se(s,t,r,r[0],n?oe(t,r[0],a,null):re(r[0]),null)},i(r){n||(c(s,r),n=!0)},o(r){m(s,r),n=!1},d(r){r&&u(e),s&&s.d(r)}}}function _e(o,e,n){let{$$slots:t={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&n(0,s=r.$$scope)},[s,t]}class le extends Z{constructor(e){super(),ee(this,e,_e,pe,te,{})}}function de(o){let e,n,t;return n=new F({props:{name:"cancel",textClass:"text-2xl"}}),{c(){e=C("div"),g(n.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0});var r=V(e);b(n.$$.fragment,r),r.forEach(u),this.h()},h(){y(e,"class","mt-8 h-8")},m(s,r){h(s,e,r),w(n,e,null),t=!0},p:S,i(s){t||(c(n.$$.fragment,s),t=!0)},o(s){m(n.$$.fragment,s),t=!1},d(s){s&&u(e),v(n)}}}function he(o){let e,n,t,s,r,a,p,$,_,D,f;const k=o[2].default,I=ne(k,o,o[3],null);return p=new K({props:{onClick:o[1],$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){e=C("div"),n=C("div"),t=C("button"),s=T(),r=C("div"),I&&I.c(),a=T(),g(p.$$.fragment),this.h()},l(d){e=E(d,"DIV",{class:!0});var P=V(e);n=E(P,"DIV",{class:!0});var B=V(n);t=E(B,"BUTTON",{class:!0}),V(t).forEach(u),s=A(B),r=E(B,"DIV",{class:!0});var z=V(r);I&&I.l(z),a=A(z),b(p.$$.fragment,z),z.forEach(u),B.forEach(u),P.forEach(u),this.h()},h(){y(t,"class","fixed w-full h-full"),y(r,"class","rounded-2xl w-1/2 p-8 bg-background center_col"),y(n,"class","fixed z-45 left-0 top-0 w-full h-full bg-opacity-50 bg-black center_col"),y(e,"class",$="transition duration-100 "+(o[0]?"":"opacity-0 pointer-events-none"))},m(d,P){h(d,e,P),x(e,n),x(n,t),x(n,s),x(n,r),I&&I.m(r,null),x(r,a),w(p,r,null),_=!0,D||(f=fe(t,"click",function(){ue(o[1])&&o[1].apply(this,arguments)}),D=!0)},p(d,[P]){o=d,I&&I.p&&(!_||P&8)&&se(I,k,o,o[3],_?oe(k,o[3],P,null):re(o[3]),null);const B={};P&2&&(B.onClick=o[1]),P&8&&(B.$$scope={dirty:P,ctx:o}),p.$set(B),(!_||P&1&&$!==($="transition duration-100 "+(o[0]?"":"opacity-0 pointer-events-none")))&&y(e,"class",$)},i(d){_||(c(I,d),c(p.$$.fragment,d),_=!0)},o(d){m(I,d),m(p.$$.fragment,d),_=!1},d(d){d&&u(e),I&&I.d(d),v(p),D=!1,f()}}}function ge(o,e,n){let{$$slots:t={},$$scope:s}=e,{open:r}=e,{onDismissed:a}=e;return o.$$set=p=>{"open"in p&&n(0,r=p.open),"onDismissed"in p&&n(1,a=p.onDismissed),"$$scope"in p&&n(3,s=p.$$scope)},[r,a,t,s]}class be extends Z{constructor(e){super(),ee(this,e,ge,he,te,{open:0,onDismissed:1})}}function we(o,e,n){const t=o.slice();return t[4]=e[n],t}function ve(o){let e;return{c(){e=R("XD Presenter for PC")},l(n){e=X(n,"XD Presenter for PC")},m(n,t){h(n,e,t)},d(n){n&&u(e)}}}function ke(o){let e,n,t,s;return n=new F({props:{name:"download",textClass:"text-4xl md:text-5xl"}}),{c(){e=C("a"),g(n.$$.fragment),t=R(`\r
                Download for Windows`),this.h()},l(r){e=E(r,"A",{download:!0,href:!0,class:!0});var a=V(e);b(n.$$.fragment,a),t=X(a,`\r
                Download for Windows`),a.forEach(u),this.h()},h(){y(e,"download",""),y(e,"href","/presenter/xd_presenter.msi"),y(e,"class","transition duration-200 hover:scale-[101%] rounded-full h-20 bg-black px-8 flex items-center gap-4 text-white")},m(r,a){h(r,e,a),w(n,e,null),x(e,t),s=!0},p:S,i(r){s||(c(n.$$.fragment,r),s=!0)},o(r){m(n.$$.fragment,r),s=!1},d(r){r&&u(e),v(n)}}}function De(o){let e,n;return e=new le({props:{$$slots:{default:[ke]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ie(o){let e,n,t,s;return n=new F({props:{name:o[4],textClass:"text-4xl md:text-5xl"}}),{c(){e=C("div"),g(n.$$.fragment),t=T(),this.h()},l(r){e=E(r,"DIV",{class:!0});var a=V(e);b(n.$$.fragment,a),a.forEach(u),t=A(r),this.h()},h(){y(e,"class","transition duration-100 hover:invert rounded-full border border-black w-20 h-20 bg-white px-8 "+(o[4]=="linux"?"pb-2":"pb-1")+" center_row")},m(r,a){h(r,e,a),w(n,e,null),h(r,t,a),s=!0},p:S,i(r){s||(c(n.$$.fragment,r),s=!0)},o(r){m(n.$$.fragment,r),s=!1},d(r){r&&u(e),v(n),r&&u(t)}}}function Ce(o){let e,n;return e=new le({props:{$$slots:{default:[Ie]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ee(o){let e,n;return e=new K({props:{onClick:Ne,$$slots:{default:[Ce]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function xe(o){let e,n,t;return n=new F({props:{name:"open-new-window"}}),{c(){e=R("Video tutorial "),g(n.$$.fragment)},l(s){e=X(s,"Video tutorial "),b(n.$$.fragment,s)},m(s,r){h(s,e,r),w(n,s,r),t=!0},p:S,i(s){t||(c(n.$$.fragment,s),t=!0)},o(s){m(n.$$.fragment,s),t=!1},d(s){s&&u(e),v(n,s)}}}function ye(o){let e,n;return e=new U({props:{$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ve(o){let e,n;return e=new L({props:{$$slots:{default:[ye]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Pe(o){let e;return{c(){e=R("Why are there 3 different download buttons?")},l(n){e=X(n,"Why are there 3 different download buttons?")},m(n,t){h(n,e,t)},d(n){n&&u(e)}}}function Be(o){let e,n;return e=new U({props:{$$slots:{default:[Pe]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function We(o){let e,n;return e=new L({props:{$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function je(o){let e;return{c(){e=R("Why am I getting antivirus warnings?")},l(n){e=X(n,"Why am I getting antivirus warnings?")},m(n,t){h(n,e,t)},d(n){n&&u(e)}}}function Te(o){let e,n;return e=new U({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Ae(o){let e,n;return e=new L({props:{$$slots:{default:[Te]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},p(t,s){const r={};s&128&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Oe(o){let e,n;return e=new U({props:{$$slots:{default:[ze]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Re(o){let e,n;return e=new U({props:{$$slots:{default:[Me]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){w(e,t,s),n=!0},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){v(e,t)}}}function Xe(o){let e,n;return{c(){e=C("a"),n=R("Contact me"),this.h()},l(t){e=E(t,"A",{href:!0});var s=V(e);n=X(s,"Contact me"),s.forEach(u),this.h()},h(){y(e,"href","TODO: /contact")},m(t,s){h(t,e,s),x(e,n)},p:S,d(t){t&&u(e)}}}function ze(o){let e,n,t,s,r,a,p,$,_,D;return r=new L({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){e=R("In some cases, XD Presenter produces false-positive warnings."),n=C("br"),t=C("br"),s=T(),g(r.$$.fragment),a=R(" if you want to make sure that I take full responsibility for the app's security."),p=C("br"),$=C("br"),_=R(`\r
                I don't exactly know the reason for the antivirus warning,\r
                but it's probanly that I did not buy an expensive security certificate to let the app be checked independently.\r
                This would be just a proof and changes nothing about the actual security though.`)},l(f){e=X(f,"In some cases, XD Presenter produces false-positive warnings."),n=E(f,"BR",{}),t=E(f,"BR",{}),s=A(f),b(r.$$.fragment,f),a=X(f," if you want to make sure that I take full responsibility for the app's security."),p=E(f,"BR",{}),$=E(f,"BR",{}),_=X(f,`\r
                I don't exactly know the reason for the antivirus warning,\r
                but it's probanly that I did not buy an expensive security certificate to let the app be checked independently.\r
                This would be just a proof and changes nothing about the actual security though.`)},m(f,k){h(f,e,k),h(f,n,k),h(f,t,k),h(f,s,k),w(r,f,k),h(f,a,k),h(f,p,k),h(f,$,k),h(f,_,k),D=!0},p(f,k){const I={};k&128&&(I.$$scope={dirty:k,ctx:f}),r.$set(I)},i(f){D||(c(r.$$.fragment,f),D=!0)},o(f){m(r.$$.fragment,f),D=!1},d(f){f&&u(e),f&&u(n),f&&u(t),f&&u(s),v(r,f),f&&u(a),f&&u(p),f&&u($),f&&u(_)}}}function Me(o){let e;return{c(){e=R(`If you don't know what the symbols on the buttons mean, just click the "Download for Windows" button and you should be OK.`)},l(n){e=X(n,`If you don't know what the symbols on the buttons mean, just click the "Download for Windows" button and you should be OK.`)},m(n,t){h(n,e,t)},d(n){n&&u(e)}}}function qe(o){let e,n,t,s;const r=[Re,Oe],a=[];function p($,_){return $[0]==1?0:1}return n=p(o),t=a[n]=r[n](o),{c(){e=C("div"),t.c(),this.h()},l($){e=E($,"DIV",{class:!0});var _=V(e);t.l(_),_.forEach(u),this.h()},h(){y(e,"class","text-left")},m($,_){h($,e,_),a[n].m(e,null),s=!0},p($,_){let D=n;n=p($),n!==D&&(ie(),m(a[D],1,1,()=>{a[D]=null}),ce(),t=a[n],t||(t=a[n]=r[n]($),t.c()),c(t,1),t.m(e,null))},i($){s||(c(t),s=!0)},o($){m(t),s=!1},d($){$&&u(e),a[n].d()}}}function He(o){let e,n,t,s,r,a,p,$,_,D,f,k,I,d,P,B,z,M,G,q,J;n=new me({props:{$$slots:{default:[ve]},$$scope:{ctx:o}}}),r=new K({props:{onClick:Ke,$$slots:{default:[De]},$$scope:{ctx:o}}});let ae=["apple-mac","linux"],O=[];for(let l=0;l<2;l+=1)O[l]=Ee(we(o,ae,l));return D=new K({props:{onClick:Se,$$slots:{default:[Ve]},$$scope:{ctx:o}}}),d=new K({props:{onClick:o[1],$$slots:{default:[We]},$$scope:{ctx:o}}}),M=new K({props:{onClick:o[2],$$slots:{default:[Ae]},$$scope:{ctx:o}}}),q=new be({props:{open:o[0]!=0,onDismissed:o[3],$$slots:{default:[qe]},$$scope:{ctx:o}}}),{c(){e=C("main"),g(n.$$.fragment),t=T(),s=C("div"),g(r.$$.fragment),a=T();for(let l=0;l<2;l+=1)O[l].c();p=T(),$=C("div"),_=C("a"),g(D.$$.fragment),f=T(),k=C("div"),I=T(),g(d.$$.fragment),P=T(),B=C("div"),z=T(),g(M.$$.fragment),G=T(),g(q.$$.fragment),this.h()},l(l){e=E(l,"MAIN",{class:!0});var i=V(e);b(n.$$.fragment,i),t=A(i),s=E(i,"DIV",{class:!0});var j=V(s);b(r.$$.fragment,j),a=A(j);for(let H=0;H<2;H+=1)O[H].l(j);j.forEach(u),p=A(i),$=E(i,"DIV",{});var W=V($);_=E(W,"A",{href:!0});var N=V(_);b(D.$$.fragment,N),N.forEach(u),f=A(W),k=E(W,"DIV",{class:!0}),V(k).forEach(u),I=A(W),b(d.$$.fragment,W),P=A(W),B=E(W,"DIV",{class:!0}),V(B).forEach(u),z=A(W),b(M.$$.fragment,W),W.forEach(u),i.forEach(u),G=A(l),b(q.$$.fragment,l),this.h()},h(){y(s,"class","md:w-full flex flex-col md:flex-row md:justify-start items-start gap-8"),y(_,"href","https://www.youtube.com/watch?v=cctYDdnPzTU"),y(k,"class","h-4"),y(B,"class","h-4"),y(e,"class","relative max-w-screen min-h-screen p-8 flex flex-col justify-center items-start gap-16 text-left")},m(l,i){h(l,e,i),w(n,e,null),x(e,t),x(e,s),w(r,s,null),x(s,a);for(let j=0;j<2;j+=1)O[j]&&O[j].m(s,null);x(e,p),x(e,$),x($,_),w(D,_,null),x($,f),x($,k),x($,I),w(d,$,null),x($,P),x($,B),x($,z),w(M,$,null),h(l,G,i),w(q,l,i),J=!0},p(l,[i]){const j={};i&128&&(j.$$scope={dirty:i,ctx:l}),n.$set(j);const W={};i&128&&(W.$$scope={dirty:i,ctx:l}),r.$set(W);const N={};i&128&&(N.$$scope={dirty:i,ctx:l}),D.$set(N);const H={};i&1&&(H.onClick=l[1]),i&128&&(H.$$scope={dirty:i,ctx:l}),d.$set(H);const Q={};i&1&&(Q.onClick=l[2]),i&128&&(Q.$$scope={dirty:i,ctx:l}),M.$set(Q);const Y={};i&1&&(Y.open=l[0]!=0),i&1&&(Y.onDismissed=l[3]),i&129&&(Y.$$scope={dirty:i,ctx:l}),q.$set(Y)},i(l){if(!J){c(n.$$.fragment,l),c(r.$$.fragment,l);for(let i=0;i<2;i+=1)c(O[i]);c(D.$$.fragment,l),c(d.$$.fragment,l),c(M.$$.fragment,l),c(q.$$.fragment,l),J=!0}},o(l){m(n.$$.fragment,l),m(r.$$.fragment,l),O=O.filter(Boolean);for(let i=0;i<2;i+=1)m(O[i]);m(D.$$.fragment,l),m(d.$$.fragment,l),m(M.$$.fragment,l),m(q.$$.fragment,l),J=!1},d(l){l&&u(e),v(n),v(r),$e(O,l),v(D),v(d),v(M),l&&u(G),v(q,l)}}}const Ke=()=>{},Ne=()=>{},Se=()=>{};function Ue(o,e,n){let t=0;return[t,()=>n(0,t=1),()=>n(0,t=2),()=>n(0,t=0)]}class et extends Z{constructor(e){super(),ee(this,e,Ue,He,te,{})}}export{et as component};
