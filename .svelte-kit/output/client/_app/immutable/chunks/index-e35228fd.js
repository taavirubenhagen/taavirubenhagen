import{M as P,N as j,B as m}from"./index-5a593291.js";function k(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function z(t){const o=t-1;return o*o*o+1}function F(t){return-.5*(Math.cos(Math.PI*t)-1)}const n={$(t){return typeof t=="string"?document.querySelector(t):t},extend(...t){return Object.assign(...t)},cumulativeOffset(t){let o=0,e=0;do o+=t.offsetTop||0,e+=t.offsetLeft||0,t=t.offsetParent;while(t);return{top:o,left:e}},directScroll(t){return t&&t!==document&&t!==document.body},scrollTop(t,o){let e=o!==void 0;return this.directScroll(t)?e?t.scrollTop=o:t.scrollTop:e?document.documentElement.scrollTop=document.body.scrollTop=o:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,o){let e=o!==void 0;return this.directScroll(t)?e?t.scrollLeft=o:t.scrollLeft:e?document.documentElement.scrollLeft=document.body.scrollLeft=o:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},q={container:"body",duration:500,delay:0,offset:0,easing:k,onStart:m,onDone:m,onAborting:m,scrollX:!1,scrollY:!0},B=t=>{let{offset:o,duration:e,delay:T,easing:h,x:c=0,y:f=0,scrollX:X,scrollY:Y,onStart:w,onDone:x,container:s,onAborting:E,element:l}=t;typeof o=="function"&&(o=o());var O=n.cumulativeOffset(s),y=l?n.cumulativeOffset(l):{top:f,left:c},b=n.scrollLeft(s),g=n.scrollTop(s),M=y.left-O.left+o,_=y.top-O.top+o,I=M-b,$=_-g;let L=!0,i=!1,u=P()+T,A=u+e;function D(r,d,p){X&&n.scrollLeft(r,p),Y&&n.scrollTop(r,d)}function v(r){r||(i=!0,w(l,{x:c,y:f}))}function a(r){D(s,g+$*r,b+I*r)}function S(){L=!1}return j(r=>{if(!i&&r>=u&&v(!1),i&&r>=A&&(a(1),S(),x(l,{x:c,y:f})),!L)return E(l,{x:c,y:f}),!1;if(i){const d=r-u,p=0+1*h(d/e);a(p)}return!0}),v(T),a(0),S},C=t=>{let o=n.extend({},q,t);return o.container=n.$(o.container),o.element=n.$(o.element),o},G=t=>B(C(t));export{F as a,z as c,G as s};
