import{c as d}from"./index.12f0d033.js";import{E as n}from"./index.32e03256.js";function V(r,{delay:a=0,duration:c=400,easing:e=d,x:i=0,y:f=0,opacity:m=0}={}){const t=getComputedStyle(r),o=+t.opacity,p=t.transform==="none"?"":t.transform,u=o*(1-m),[y,l]=n(i),[$,x]=n(f);return{delay:a,duration:c,easing:e,css:(s,_)=>`
			transform: ${p} translate(${(1-s)*y}${l}, ${(1-s)*$}${x});
			opacity: ${o-u*_}`}}export{V as f};
