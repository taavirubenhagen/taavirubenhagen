import{S as i,i as u,s as f,w as p,x as m,y as d,f as h,t as _,z as $,k as g,q as b,l as x,m as y,r as w,h as l,n as c,b as S,G as O,H as P,B as T}from"../../../../../../chunks/index-5a593291.js";import{C as k}from"../../../../../../chunks/content_section-4fa842da.js";function C(a){let t,n,e,s;return{c(){t=g("button"),n=b("Upload"),this.h()},l(o){t=x(o,"BUTTON",{type:!0,class:!0});var r=y(t);n=w(r,"Upload"),r.forEach(l),this.h()},h(){c(t,"type","button"),c(t,"class","z-20 rounded-full px-4 py-2 bg-neutral-600 text-white focus:bg-black")},m(o,r){S(o,t,r),O(t,n),e||(s=P(t,"click",a[0]),e=!0)},p:T,d(o){o&&l(t),e=!1,s()}}}function N(a){let t,n;return t=new k({props:{title:"Post a post.",$$slots:{default:[C]},$$scope:{ctx:a}}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,s){d(t,e,s),n=!0},p(e,[s]){const o={};s&4&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function U(a){let t=null;async function n(){const s=await(await fetch("https://localhost:8000/blog",{method:"POST",body:JSON.stringify({text:"Example Text"})})).json();t=JSON.stringify(s),console.log(t)}return[n]}class v extends i{constructor(t){super(),u(this,t,U,N,f,{})}}export{v as default};