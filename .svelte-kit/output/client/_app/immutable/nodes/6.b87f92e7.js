import{S as T,i as j,s as q,l as h,j as B,c as v,n as $,o as g,h as m,k as D,a as k,p,g as _,r as b,G as E,m as w,D as C,t as S,b as I,d as P,H as y,B as z,I as F,z as V,e as G,f as H}from"../chunks/index.1392673c.js";import{p as U}from"../chunks/stores.43077cf7.js";/* empty css                       */import{I as x}from"../chunks/RawButton.a70034b9.js";import"../chunks/paths.8689b7a5.js";import{B as A}from"../chunks/Button.9251cc0e.js";import{P as J}from"../chunks/Page.f9bf3fbc.js";function K(o){let t,l;return t=new x({props:{name:"arrow-right"}}),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p:z,i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){P(t,e)}}}function M(o){let t,l,e,r,i,u,c,a,f;return u=new A({props:{borderClass:"border-l-0",onClick:o[7],$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){t=h("div"),l=h("div"),e=h("input"),i=B(),v(u.$$.fragment),this.h()},l(s){t=$(s,"DIV",{class:!0});var n=g(t);l=$(n,"DIV",{class:!0});var d=g(l);e=$(d,"INPUT",{type:!0,class:!0,placeholder:!0}),d.forEach(m),i=D(n),k(u.$$.fragment,n),n.forEach(m),this.h()},h(){p(e,"type","text"),e.autofocus=o[1],p(e,"class","outline-none h-full px-1 text-xl"),p(e,"placeholder",o[3]),p(l,"class",r=(o[0]?"invert":"")+" border-2 border-onBackground"),p(t,"class","flex")},m(s,n){_(s,t,n),b(t,l),b(l,e),E(e,o[4]),b(t,i),w(u,t,null),c=!0,o[1]&&e.focus(),a||(f=[C(e,"input",o[5]),C(e,"keypress",o[6])],a=!0)},p(s,[n]){(!c||n&2)&&(e.autofocus=s[1]),(!c||n&8)&&p(e,"placeholder",s[3]),n&16&&e.value!==s[4]&&E(e,s[4]),(!c||n&1&&r!==(r=(s[0]?"invert":"")+" border-2 border-onBackground"))&&p(l,"class",r);const d={};n&20&&(d.onClick=s[7]),n&256&&(d.$$scope={dirty:n,ctx:s}),u.$set(d)},i(s){c||(S(u.$$.fragment,s),c=!0)},o(s){I(u.$$.fragment,s),c=!1},d(s){s&&m(t),P(u),a=!1,y(f)}}}function O(o,t,l){let{inverted:e=!1}=t,{autofocus:r=!1}=t,{onSubmit:i}=t,{placeholder:u=""}=t,c="";function a(){c=this.value,l(4,c)}const f=n=>n.key==="Enter"?i(c):null,s=()=>i(c);return o.$$set=n=>{"inverted"in n&&l(0,e=n.inverted),"autofocus"in n&&l(1,r=n.autofocus),"onSubmit"in n&&l(2,i=n.onSubmit),"placeholder"in n&&l(3,u=n.placeholder)},[e,r,i,u,c,a,f,s]}class Q extends T{constructor(t){super(),j(this,t,O,M,q,{inverted:0,autofocus:1,onSubmit:2,placeholder:3})}}function N(o){let t,l;return{c(){t=h("div"),l=G("Login failed."),this.h()},l(e){t=$(e,"DIV",{class:!0});var r=g(t);l=H(r,"Login failed."),r.forEach(m),this.h()},h(){p(t,"class","h-8 flex items-start text-error")},m(e,r){_(e,t,r),b(t,l)},d(e){e&&m(t)}}}function L(o){let t;return{c(){t=h("div"),this.h()},l(l){t=$(l,"DIV",{class:!0}),g(t).forEach(m),this.h()},h(){p(t,"class","h-8")},m(l,e){_(l,t,e)},d(l){l&&m(t)}}}function R(o){let t=o[0].url.href.split("/").pop()=="failed",l,e,r,i=o[0].url.href.split("/").pop()=="failed",u,c,a=t&&N();e=new Q({props:{autofocus:!0,onSubmit:o[1],placeholder:"Password"}});let f=i&&L();return{c(){a&&a.c(),l=B(),v(e.$$.fragment),r=B(),f&&f.c(),u=V()},l(s){a&&a.l(s),l=D(s),k(e.$$.fragment,s),r=D(s),f&&f.l(s),u=V()},m(s,n){a&&a.m(s,n),_(s,l,n),w(e,s,n),_(s,r,n),f&&f.m(s,n),_(s,u,n),c=!0},p(s,n){n&1&&(t=s[0].url.href.split("/").pop()=="failed"),t?a||(a=N(),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null),n&1&&(i=s[0].url.href.split("/").pop()=="failed"),i?f||(f=L(),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i(s){c||(S(e.$$.fragment,s),c=!0)},o(s){I(e.$$.fragment,s),c=!1},d(s){a&&a.d(s),s&&m(l),P(e,s),s&&m(r),f&&f.d(s),s&&m(u)}}}function W(o){let t,l;return t=new J({props:{$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){v(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,r){w(t,e,r),l=!0},p(e,[r]){const i={};r&5&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){l||(S(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){P(t,e)}}}function X(o,t,l){let e;return F(o,U,i=>l(0,e=i)),[e,i=>{console.log(i),window.location.href="/admin/access/"+i}]}class re extends T{constructor(t){super(),j(this,t,X,W,q,{})}}export{re as component};
