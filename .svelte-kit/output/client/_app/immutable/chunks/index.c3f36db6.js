import"./index.5c48a446.js";function $(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function y(t){const n=t-1;return n*n*n+1}function h(t){return-.5*(Math.cos(Math.PI*t)-1)}function x(t,{delay:n=0,duration:s=400,easing:a=y,x:u=0,y:e=0,opacity:f=0}={}){const o=getComputedStyle(t),r=+o.opacity,i=o.transform==="none"?"":o.transform,p=r*(1-f);return{delay:n,duration:s,easing:a,css:(c,m)=>`
			transform: ${i} translate(${(1-c)*u}px, ${(1-c)*e}px);
			opacity: ${r-p*m}`}}export{$ as c,x as f,h as s};
