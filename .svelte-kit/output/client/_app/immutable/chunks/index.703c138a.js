import{r as f,s as l}from"./index.1f336de1.js";const e=[];function h(n,u=f){let r;const i=new Set;function o(t){if(l(n,t)&&(n=t,r)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){o(t(n))}function p(t,c=f){const s=[t,c];return i.add(s),i.size===1&&(r=u(o)||f),t(n),()=>{i.delete(s),i.size===0&&r&&(r(),r=null)}}return{set:o,update:b,subscribe:p}}export{h as w};