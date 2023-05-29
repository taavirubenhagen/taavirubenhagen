import{a as u}from"./index.7eb47d57.js";import"./index.5d2620f2.js";function x(n,{delay:s=0,duration:a=400,easing:c=u,x:e=0,y:p=0,opacity:f=0}={}){const t=getComputedStyle(n),o=+t.opacity,m=t.transform==="none"?"":t.transform,i=o*(1-f);return{delay:s,duration:a,easing:c,css:(r,y)=>`
			transform: ${m} translate(${(1-r)*e}px, ${(1-r)*p}px);
			opacity: ${o-i*y}`}}export{x as f};
