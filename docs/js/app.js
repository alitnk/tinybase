"use strict";(()=>{var f=document,p=t=>f.querySelector(t),E=(t,n)=>t.querySelector(n),v=t=>f.getElementById(t),d=(t,n,l={},r)=>{let a=f.createElement(t);return Object.entries(l).forEach(h=>a.setAttribute(...h)),r!=null&&(a.innerText=r),n!=null?n.appendChild(a):a},H=(t,n,l)=>{let r=(t.className??"").split(" ");l(r,r.indexOf(n)),t.className=r.join(" ")},L=(t,n)=>H(t,n,(l,r)=>r==-1?l.push(n):null),b=(t,n)=>H(t,n,(l,r)=>r!=-1?l.splice(r,1):null),k=(t,n,l)=>H(t,n,(r,a)=>a!=-1?r.splice(a,1):r.push(n)&&l()),m="dark",T="light",M="auto",x=()=>q(),q=()=>{let t=matchMedia("(prefers-color-scheme: dark)"),n=()=>{let l=localStorage.getItem(m)??M;p("#dark")?.setAttribute("class",l),p("html").className=l==m||l==M&&t.matches?m:T};t.addEventListener("change",n),window.addEventListener("storage",l=>{l.storageArea==localStorage&&l.key==m&&n()}),addEventListener("load",()=>{p("#dark").addEventListener("click",()=>{let l=localStorage.getItem(m);localStorage.setItem(m,l==m?T:l==T?M:m),n()}),n()}),n()};x();addEventListener("load",()=>{let t=p("body > main > nav"),n=p("body > main > article");if(t==null||n==null)return;let l=()=>{let o=E(n,":scope iframe"),e=o?.parentElement;if(o==null||e==null)return;let s=e.insertBefore(d("form",null,{action:"https://codepen.io/pen/define",method:"post",target:"_blank"}),o);e.insertBefore(d("a",null,{id:"penEdit"},"CodePen"),o).onclick=()=>{s.childNodes.length==0?fetch("pen.json").then(g=>g.text()).then(g=>{d("input",s,{type:"hidden",name:"data",value:g}),s.submit()}):s.submit()}};l(),f.body.addEventListener("click",o=>{if(o.button!=0)return;let e=o.target;if(e.tagName=="SPAN"&&e.innerHTML==""&&e.parentElement?.tagName=="LI")return r(e.parentElement);for(;e.tagName!="A"&&e.parentElement!=null;)e=e.parentElement;let s=e.href;!o.metaKey&&!o.shiftKey&&s!=null&&s!=location.origin+"/"&&s.startsWith(location.origin+"/")&&!s.includes("#")&&(a(s),o.preventDefault(),history.pushState(null,"",s))}),window.onpopstate=function(o){location.href.includes("#")||(a(location.href),o.preventDefault())};let r=o=>k(o,"open",()=>{let e=E(o,"a");e.href!=location.origin&&e.click()}),a=o=>{fetch(`${o}nav.json`).then(e=>e.json()).then(e=>{b(E(t,"li.current"),"current"),h(e,E(t,"ul"))}),fetch(`${o}article.html`).then(e=>e.text()).then(e=>N(e))},h=({i:o,n:e,u:s,r:g,c:C,p:A,o:B,_:y},S)=>{let i=v(o);if(i==null){i=d("li",S,{id:o}),d("span",i);let c=d("a",i,{href:s});g?d("code",c,{},e):c.innerText=e,A&&L(i,"parent")}if(B&&L(i,"open"),y!=null){let c=E(i,"ul")??d("ul",i);y.forEach(u=>{h(u,c)})}if(C){L(i,"current"),f.title=`${e} | TinyBase`;let c=i.getBoundingClientRect(),u=t.getBoundingClientRect();c.top<u.top?t.scrollBy(0,c.top-u.top):c.bottom>u.bottom&&t.scrollBy(0,Math.min(c.bottom-u.bottom,c.top-u.top))}},N=o=>{n.innerHTML=o,n.scrollTo(0,0),l()}});})();
