import{S as X,i as z,s as U,k as h,l as g,m as v,h as u,I as Q,n as d,b as _,G as w,K as E,C as ee,p as L,D as te,E as ne,F as re,f as b,t as y,R as ue,T as me,B as de,w as C,x as T,y as I,z as P,o as _e,a as k,c as B,g as he,d as ge,U as ve,J as be,q as V,r as W}from"../../chunks/index-37bd3a1a.js";import{a as pe,I as se}from"../../chunks/global-ad420e01.js";function ye(r){let e,t,l,s,c;return{c(){e=h("div"),t=h("img"),this.h()},l(o){e=g(o,"DIV",{class:!0});var n=v(e);t=g(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(u),this.h()},h(){Q(t.src,l="icons/"+r[3]+".svg")||d(t,"src",l),d(t,"alt","Icon"),d(t,"class",s=r[2]+" "+(r[0]?"invert":"")),d(e,"class",c="w-"+r[1]+" h-"+r[1])},m(o,n){_(o,e,n),w(e,t)},p(o,[n]){n&8&&!Q(t.src,l="icons/"+o[3]+".svg")&&d(t,"src",l),n&5&&s!==(s=o[2]+" "+(o[0]?"invert":""))&&d(t,"class",s),n&2&&c!==(c="w-"+o[1]+" h-"+o[1])&&d(e,"class",c)},i:E,o:E,d(o){o&&u(e)}}}function $e(r,e,t){let{isWhite:l=!1}=e,{size:s="0"}=e,{iconClass:c=""}=e,{name:o}=e;return r.$$set=n=>{"isWhite"in n&&t(0,l=n.isWhite),"size"in n&&t(1,s=n.size),"iconClass"in n&&t(2,c=n.iconClass),"name"in n&&t(3,o=n.name)},[l,s,c,o]}class we extends X{constructor(e){super(),z(this,e,$e,ye,U,{isWhite:0,size:1,iconClass:2,name:3})}}function Ee(r){let e,t,l,s;const c=r[4].default,o=ee(c,r,r[3],null);return{c(){e=h("div"),t=h("b2"),o&&o.c(),this.h()},l(n){e=g(n,"DIV",{class:!0,style:!0});var a=v(e);t=g(a,"B2",{});var i=v(t);o&&o.l(i),i.forEach(u),a.forEach(u),this.h()},h(){d(e,"class",l=r[0]+" transition-all m-0 hover:m-0 rounded-full border-2 hover:border-2 "+(r[1]?"border-onPrimary":"border-onBackground")+" "+(r[2]?r[1]?"bg-onPrimary hover:bg-transparent":"bg-primary hover:bg-transparent":r[1]?"bg-transparent hover:bg-onPrimary":"bg-transparent hover:bg-primary")+" px-5 py-3 "+(r[1]?"text-onPrimary hover:text-onBackground":"text-onBackground hover:text-onPrimary")),L(e,"transition-duration","100ms"),L(e,"transition-timing-function","cubic-bezier(.2, 0, .4, 1)")},m(n,a){_(n,e,a),w(e,t),o&&o.m(t,null),s=!0},p(n,[a]){o&&o.p&&(!s||a&8)&&te(o,c,n,n[3],s?re(c,n[3],a,null):ne(n[3]),null),(!s||a&7&&l!==(l=n[0]+" transition-all m-0 hover:m-0 rounded-full border-2 hover:border-2 "+(n[1]?"border-onPrimary":"border-onBackground")+" "+(n[2]?n[1]?"bg-onPrimary hover:bg-transparent":"bg-primary hover:bg-transparent":n[1]?"bg-transparent hover:bg-onPrimary":"bg-transparent hover:bg-primary")+" px-5 py-3 "+(n[1]?"text-onPrimary hover:text-onBackground":"text-onBackground hover:text-onPrimary")))&&d(e,"class",l)},i(n){s||(b(o,n),s=!0)},o(n){y(o,n),s=!1},d(n){n&&u(e),o&&o.d(n)}}}function Ce(r,e,t){let{$$slots:l={},$$scope:s}=e,{buttonClass:c=""}=e,{onPrimary:o=!1}=e,{primary:n=!1}=e;return r.$$set=a=>{"buttonClass"in a&&t(0,c=a.buttonClass),"onPrimary"in a&&t(1,o=a.onPrimary),"primary"in a&&t(2,n=a.primary),"$$scope"in a&&t(3,s=a.$$scope)},[c,o,n,s,l]}class Te extends X{constructor(e){super(),z(this,e,Ce,Ee,U,{buttonClass:0,onPrimary:1,primary:2})}}const $={$(r){return typeof r=="string"?document.querySelector(r):r},extend(...r){return Object.assign(...r)},cumulativeOffset(r){let e=0,t=0;do e+=r.offsetTop||0,t+=r.offsetLeft||0,r=r.offsetParent;while(r);return{top:e,left:t}},directScroll(r){return r&&r!==document&&r!==document.body},scrollTop(r,e){let t=e!==void 0;return this.directScroll(r)?t?r.scrollTop=e:r.scrollTop:t?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(r,e){let t=e!==void 0;return this.directScroll(r)?t?r.scrollLeft=e:r.scrollLeft:t?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},Ie={container:"body",duration:500,delay:0,offset:0,easing:pe,onStart:E,onDone:E,onAborting:E,scrollX:!1,scrollY:!0},Pe=r=>{let{offset:e,duration:t,delay:l,easing:s,x:c=0,y:o=0,scrollX:n,scrollY:a,onStart:i,onDone:m,container:f,onAborting:O,element:S}=r;typeof e=="function"&&(e=e());var F=$.cumulativeOffset(f),N=S?$.cumulativeOffset(S):{top:o,left:c},G=$.scrollLeft(f),j=$.scrollTop(f),oe=N.left-F.left+e,le=N.top-F.top+e,ae=oe-G,ie=le-j;let J=!0,D=!1,Y=ue()+l,ce=Y+t;function fe(p,q,H){n&&$.scrollLeft(p,H),a&&$.scrollTop(p,q)}function K(p){p||(D=!0,i(S,{x:c,y:o}))}function M(p){fe(f,j+ie*p,G+ae*p)}function R(){J=!1}return me(p=>{if(!D&&p>=Y&&K(!1),D&&p>=ce&&(M(1),R(),m(S,{x:c,y:o})),!J)return O(S,{x:c,y:o}),!1;if(D){const q=p-Y,H=0+1*s(q/t);M(H)}return!0}),K(l),M(0),R},Se=r=>{let e=$.extend({},Ie,r);return e.container=$.$(e.container),e.element=$.$(e.element),e},ke=r=>Pe(Se(r)),Z=de(0);function x(r){let e,t,l;return t=new se({props:{state:"hover",$$slots:{default:[Be]},$$scope:{ctx:r}}}),{c(){e=h("div"),C(t.$$.fragment),this.h()},l(s){e=g(s,"DIV",{class:!0});var c=v(e);T(t.$$.fragment,c),c.forEach(u),this.h()},h(){d(e,"class","absolute left-0 bottom-0")},m(s,c){_(s,e,c),I(t,e,null),l=!0},p(s,c){const o={};c&131&&(o.$$scope={dirty:c,ctx:s}),t.$set(o)},i(s){l||(b(t.$$.fragment,s),l=!0)},o(s){y(t.$$.fragment,s),l=!1},d(s){s&&u(e),P(t)}}}function Be(r){let e,t,l,s,c,o;return l=new we({props:{isWhite:r[1],name:"outfyx_flat_arrow_down"}}),{c(){e=h("button"),t=h("div"),C(l.$$.fragment),this.h()},l(n){e=g(n,"BUTTON",{class:!0});var a=v(e);t=g(a,"DIV",{class:!0,style:!0});var i=v(t);T(l.$$.fragment,i),i.forEach(u),a.forEach(u),this.h()},h(){d(t,"class","w-24 h-24 p-8 hover:p-7"),L(t,"transition-duration","200ms"),L(t,"transition-timing-function","cubic-bezier(.2, 0, .2, 1)"),d(e,"class","w-screen flex_row_center")},m(n,a){_(n,e,a),w(e,t),I(l,t,null),s=!0,c||(o=be(e,"click",r[6]),c=!0)},p(n,a){const i={};a&2&&(i.isWhite=n[1]),l.$set(i)},i(n){s||(b(l.$$.fragment,n),s=!0)},o(n){y(l.$$.fragment,n),s=!1},d(n){n&&u(e),P(l),c=!1,o()}}}function Oe(r){let e,t,l,s;const c=r[5].default,o=ee(c,r,r[7],null);let n=r[2]&&x(r);return{c(){e=h("section"),o&&o.c(),t=k(),n&&n.c(),this.h()},l(a){e=g(a,"SECTION",{class:!0});var i=v(e);o&&o.l(i),t=B(i),n&&n.l(i),i.forEach(u),this.h()},h(){d(e,"class",l=r[4]+" w-screen h-screen "+(r[1]?"primary":"background")+" p-16 flex_col_center relative text-center")},m(a,i){_(a,e,i),o&&o.m(e,null),w(e,t),n&&n.m(e,null),s=!0},p(a,i){o&&o.p&&(!s||i&128)&&te(o,c,a,a[7],s?re(c,a[7],i,null):ne(a[7]),null),a[2]?n?(n.p(a,i),i&4&&b(n,1)):(n=x(a),n.c(),b(n,1),n.m(e,null)):n&&(he(),y(n,1,1,()=>{n=null}),ge()),(!s||i&18&&l!==(l=a[4]+" w-screen h-screen "+(a[1]?"primary":"background")+" p-16 flex_col_center relative text-center"))&&d(e,"class",l)},i(a){s||(b(o,a),b(n),s=!0)},o(a){y(o,a),y(n),s=!1},d(a){a&&u(e),o&&o.d(a),n&&n.d()}}}function De(r){let e,t;return e=new se({props:{state:r[3],$$slots:{default:[Oe]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,s){I(e,l,s),t=!0},p(l,[s]){const c={};s&8&&(c.state=l[3]),s&151&&(c.$$scope={dirty:s,ctx:l}),e.$set(c)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){P(e,l)}}}function Le(r,e,t){let{$$slots:l={},$$scope:s}=e,{index:c}=e,{primary:o=!1}=e,{scrollButton:n=!0}=e,{sectionCursorState:a=""}=e,{sectionClass:i=""}=e;_e(()=>{Z.update(f=>window.innerHeight)});const m=()=>ke({y:ve(Z)*(c+1)});return r.$$set=f=>{"index"in f&&t(0,c=f.index),"primary"in f&&t(1,o=f.primary),"scrollButton"in f&&t(2,n=f.scrollButton),"sectionCursorState"in f&&t(3,a=f.sectionCursorState),"sectionClass"in f&&t(4,i=f.sectionClass),"$$scope"in f&&t(7,s=f.$$scope)},[c,o,n,a,i,l,m,s]}class A extends X{constructor(e){super(),z(this,e,Le,De,U,{index:0,primary:1,scrollButton:2,sectionCursorState:3,sectionClass:4})}}function Xe(r){let e,t;return{c(){e=h("h1"),t=V("Simple.")},l(l){e=g(l,"H1",{});var s=v(e);t=W(s,"Simple."),s.forEach(u)},m(l,s){_(l,e,s),w(e,t)},p:E,d(l){l&&u(e)}}}function ze(r){let e,t;return{c(){e=h("h3"),t=V("I'm a self-taught UI/UX Designer and Front-End Engineer."),this.h()},l(l){e=g(l,"H3",{class:!0});var s=v(e);t=W(s,"I'm a self-taught UI/UX Designer and Front-End Engineer."),s.forEach(u),this.h()},h(){d(e,"class","primary")},m(l,s){_(l,e,s),w(e,t)},p:E,d(l){l&&u(e)}}}function Ue(r){let e;return{c(){e=V("E-Mail me")},l(t){e=W(t,"E-Mail me")},m(t,l){_(t,e,l)},d(t){t&&u(e)}}}function Ve(r){let e,t,l,s,c,o,n,a;return n=new Te({props:{$$slots:{default:[Ue]},$$scope:{ctx:r}}}),{c(){e=h("h3"),t=V("Contact me for any collaboration."),l=k(),s=h("div"),c=k(),o=h("div"),C(n.$$.fragment),this.h()},l(i){e=g(i,"H3",{});var m=v(e);t=W(m,"Contact me for any collaboration."),m.forEach(u),l=B(i),s=g(i,"DIV",{class:!0}),v(s).forEach(u),c=B(i),o=g(i,"DIV",{class:!0});var f=v(o);T(n.$$.fragment,f),f.forEach(u),this.h()},h(){d(s,"class","h-16"),d(o,"class","flex_row_center")},m(i,m){_(i,e,m),w(e,t),_(i,l,m),_(i,s,m),_(i,c,m),_(i,o,m),I(n,o,null),a=!0},p(i,m){const f={};m&1&&(f.$$scope={dirty:m,ctx:i}),n.$set(f)},i(i){a||(b(n.$$.fragment,i),a=!0)},o(i){y(n.$$.fragment,i),a=!1},d(i){i&&u(e),i&&u(l),i&&u(s),i&&u(c),i&&u(o),P(n)}}}function We(r){let e,t,l,s,c,o,n;return t=new A({props:{index:0,$$slots:{default:[Xe]},$$scope:{ctx:r}}}),s=new A({props:{primary:!0,index:1,sectionClass:"bg-primary text-onPrimary",$$slots:{default:[ze]},$$scope:{ctx:r}}}),o=new A({props:{index:2,$$slots:{default:[Ve]},$$scope:{ctx:r}}}),{c(){e=h("main"),C(t.$$.fragment),l=k(),C(s.$$.fragment),c=k(),C(o.$$.fragment)},l(a){e=g(a,"MAIN",{});var i=v(e);T(t.$$.fragment,i),l=B(i),T(s.$$.fragment,i),c=B(i),T(o.$$.fragment,i),i.forEach(u)},m(a,i){_(a,e,i),I(t,e,null),w(e,l),I(s,e,null),w(e,c),I(o,e,null),n=!0},p(a,[i]){const m={};i&1&&(m.$$scope={dirty:i,ctx:a}),t.$set(m);const f={};i&1&&(f.$$scope={dirty:i,ctx:a}),s.$set(f);const O={};i&1&&(O.$$scope={dirty:i,ctx:a}),o.$set(O)},i(a){n||(b(t.$$.fragment,a),b(s.$$.fragment,a),b(o.$$.fragment,a),n=!0)},o(a){y(t.$$.fragment,a),y(s.$$.fragment,a),y(o.$$.fragment,a),n=!1},d(a){a&&u(e),P(t),P(s),P(o)}}}class qe extends X{constructor(e){super(),z(this,e,null,We,U,{})}}export{qe as default};
