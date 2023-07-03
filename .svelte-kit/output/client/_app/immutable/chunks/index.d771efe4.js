import{P as c}from"./index.9697a0f2.js";function d(t){const n=t-1;return n*n*n+1}function h(t){return-.5*(Math.cos(Math.PI*t)-1)}function I(t,{delay:n=0,duration:a=400,easing:e=d,x:i=0,y:u=0,opacity:f=0}={}){const o=getComputedStyle(t),s=+o.opacity,y=o.transform==="none"?"":o.transform,l=s*(1-f),[m,p]=c(i),[$,x]=c(u);return{delay:n,duration:a,easing:e,css:(r,_)=>`
			transform: ${y} translate(${(1-r)*m}${p}, ${(1-r)*$}${x});
			opacity: ${s-l*_}`}}export{I as f,h as s};
