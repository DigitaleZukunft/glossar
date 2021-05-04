var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function o(e){return"function"==typeof e}function u(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function c(e){return document.createTextNode(e)}function f(){return c(" ")}function d(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}function m(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}let _;function v(e){_=e}const b=[],y=[],$=[],k=[],w=Promise.resolve();let x=!1;function z(e){$.push(e)}let L=!1;const S=new Set;function C(){if(!L){L=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];v(t),E(t.$$)}for(v(null),b.length=0;y.length;)y.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];S.has(t)||(S.add(t),t())}$.length=0}while(b.length);for(;k.length;)k.pop()();x=!1,L=!1,S.clear()}}function E(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const A=new Set;function B(e,t){-1===e.$$.dirty[0]&&(b.push(e),x||(x=!0,w.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(u,l,r,a,c,f,d=[-1]){const h=_;v(u);const p=u.$$={fragment:null,ctx:null,props:f,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:l.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=r?r(u,l.props||{},((e,t,...n)=>{const i=n.length?n[0]:t;return p.ctx&&c(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),g&&B(u,e)),t})):[],p.update(),g=!0,i(p.before_update),p.fragment=!!a&&a(p.ctx),l.target){if(l.hydrate){const e=function(e){return Array.from(e.childNodes)}(l.target);p.fragment&&p.fragment.l(e),e.forEach(s)}else p.fragment&&p.fragment.c();l.intro&&((m=u.$$.fragment)&&m.i&&(A.delete(m),m.i(b))),function(e,n,u,l){const{fragment:r,on_mount:s,on_destroy:a,after_update:c}=e.$$;r&&r.m(n,u),l||z((()=>{const n=s.map(t).filter(o);a?a.push(...n):i(n),e.$$.on_mount=[]})),c.forEach(z)}(u,l.target,l.anchor,l.customElement),C()}var m,b;v(h)}function j(e,t,n){const i=e.slice();return i[15]=t[n],i}function O(e){let t,n,i=", "+e[15].synonyme.replace("|",", ");return{c(){t=a("i"),n=c(i)},m(e,i){r(e,t,i),l(t,n)},p(e,t){1&t&&i!==(i=", "+e[15].synonyme.replace("|",", "))&&p(n,i)},d(e){e&&s(t)}}}function T(e){let t,n,i,o;return{c(){t=a("a"),n=a("img"),n.src!==(i="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg")&&h(n,"src","https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg"),h(n,"class","icon svelte-piov56"),h(n,"alt","Wikipedia Article"),h(t,"href",o=e[15].wikipedia),h(t,"target","_blank")},m(e,i){r(e,t,i),l(t,n)},p(e,n){1&n&&o!==(o=e[15].wikipedia)&&h(t,"href",o)},d(e){e&&s(t)}}}function D(e){let t,n,i,o,u,d,g,m,_,v,b,y,$=e[15].bezeichnung+"",k=e[15].synonyme&&!e[15].bezeichnung.includes(","),w=e[15].beschreibung+"",x=e[15].begriffsklasse+"",z=k&&O(e),L=e[15].wikipedia&&T(e);return{c(){t=a("tr"),n=a("td"),i=c($),z&&z.c(),o=f(),u=a("td"),L&&L.c(),d=f(),g=a("td"),m=c(w),_=f(),v=a("td"),b=c(x),y=f(),h(g,"class","td-def svelte-piov56")},m(e,s){r(e,t,s),l(t,n),l(n,i),z&&z.m(n,null),l(t,o),l(t,u),L&&L.m(u,null),l(t,d),l(t,g),l(g,m),l(t,_),l(t,v),l(v,b),l(t,y)},p(e,t){1&t&&$!==($=e[15].bezeichnung+"")&&p(i,$),1&t&&(k=e[15].synonyme&&!e[15].bezeichnung.includes(",")),k?z?z.p(e,t):(z=O(e),z.c(),z.m(n,null)):z&&(z.d(1),z=null),e[15].wikipedia?L?L.p(e,t):(L=T(e),L.c(),L.m(u,null)):L&&(L.d(1),L=null),1&t&&w!==(w=e[15].beschreibung+"")&&p(m,w),1&t&&x!==(x=e[15].begriffsklasse+"")&&p(b,x)},d(e){e&&s(t),z&&z.d(),L&&L.d()}}}function M(t){let n,o,u,c,p,_,v,b,y,$,k,w,x,z,L,S,C,E,A,B,W,O,T,M,N,P,q,G,F,H,K,Q,Z,I,J,R,U,V,X,Y,ee=t[0],te=[];for(let e=0;e<ee.length;e+=1)te[e]=D(j(t,ee,e));return{c(){n=a("main"),o=a("h1"),o.textContent="DZKH-Glossar",u=f(),c=a("input"),p=f(),_=a("table"),v=a("th"),v.textContent="Bezeichnung",b=f(),y=a("th"),$=f(),k=a("th"),k.textContent="Beschreibung",w=f(),x=a("th"),x.textContent="Begriffsklasse",z=f(),L=a("tbody"),S=a("tr"),C=a("td"),E=a("input"),A=f(),B=a("td"),W=f(),O=a("td"),T=a("input"),M=f(),N=a("td"),P=a("input"),q=f();for(let e=0;e<te.length;e+=1)te[e].c();G=f(),F=a("datalist"),H=a("option"),K=a("option"),Q=a("option"),Z=a("option"),I=a("option"),J=a("option"),R=a("option"),U=a("option"),V=a("option"),h(c,"type","search"),h(c,"placeholder","🔍"),m(c,"width","80%"),m(c,"min-width","20em"),h(c,"tabindex","0"),c.autofocus=!0,h(E,"type","search"),h(E,"class","singleSearch svelte-piov56"),h(E,"placeholder",t[3][0]),h(T,"type","search"),h(T,"class","singleSearch svelte-piov56"),h(T,"placeholder",t[3][2]),h(P,"type","search"),h(P,"class","singleSearch svelte-piov56"),h(P,"list","begriffsklassen"),h(P,"placeholder",t[3][3]),m(_,"width","100%"),h(_,"aria-label","Glossareinträge"),H.__value="Aufgabe",H.value=H.__value,K.__value="Anwendungssystem",K.value=K.__value,Q.__value="Datenobjekt",Q.value=Q.__value,Z.__value="Physisches Datenverarbeitungssystem",Z.value=Z.__value,I.__value="Organisationseinheit",I.value=I.__value,J.__value="Standard",J.value=J.__value,R.__value="Technologisches Themengebiet",R.value=R.__value,U.__value="Qualitätskriterium",U.value=U.__value,V.__value="Sonstiges",V.value=V.__value,h(F,"id","begriffsklassen")},m(e,i){r(e,n,i),l(n,o),l(n,u),l(n,c),g(c,t[1]),l(n,p),l(n,_),l(_,v),l(_,b),l(_,y),l(_,$),l(_,k),l(_,w),l(_,x),l(_,z),l(_,L),l(L,S),l(S,C),l(C,E),g(E,t[2][0]),l(S,A),l(S,B),l(S,W),l(S,O),l(O,T),g(T,t[2][2]),l(S,M),l(S,N),l(N,P),g(P,t[2][3]),l(L,q);for(let e=0;e<te.length;e+=1)te[e].m(L,null);l(n,G),l(n,F),l(F,H),l(F,K),l(F,Q),l(F,Z),l(F,I),l(F,J),l(F,R),l(F,U),l(F,V),c.focus(),X||(Y=[d(c,"input",t[7]),d(E,"input",t[8]),d(T,"input",t[9]),d(P,"input",t[10])],X=!0)},p(e,[t]){if(2&t&&g(c,e[1]),4&t&&g(E,e[2][0]),4&t&&g(T,e[2][2]),4&t&&g(P,e[2][3]),1&t){let n;for(ee=e[0],n=0;n<ee.length;n+=1){const i=j(e,ee,n);te[n]?te[n].p(i,t):(te[n]=D(i),te[n].c(),te[n].m(L,null))}for(;n<te.length;n+=1)te[n].d(1);te.length=ee.length}},i:e,o:e,d(e){e&&s(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(te,e),X=!1,i(Y)}}}function N(e,t,n){let i=[],o=[],u=null,l="",r=null;const s=["bezeichnung","synonyme","beschreibung","begriffsklasse"],a=["Bezeichnung","Synonyme","Beschreibung","Begriffsklasse"].map((e=>"🔍 "));let c=[];for(let e=0;e<s.length;e++)c.push("");const f={minMatchCharLength:1,threshold:.2,useExtendedSearch:!0,ignoreLocation:!0,keys:["bezeichnung","synonyme","beschreibung","begriffsklasse"]};return async function(){n(4,i=await d3.csv("data/glossary.csv")),i.sort(((e,t)=>e.bezeichnung>t.bezeichnung?1:-1)),n(5,u=new Fuse(i,f)),n(0,o=i)}(),e.$$.update=()=>{if(119&e.$$.dirty&&i.length>0){r&&r.unmark();const e=document.querySelectorAll("td");n(6,r=new Mark(e)),u&&l?(n(0,o=u.search(l).map((e=>e.item))),r.mark(l)):n(0,o=i);for(let e=0;e<s.length;e++){const t=c[e];n(0,o=o.filter((n=>n[s[e]].toLowerCase().includes(t.toLowerCase()))))}}},[o,l,c,a,i,u,r,function(){l=this.value,n(1,l)},function(){c[0]=this.value,n(2,c)},function(){c[2]=this.value,n(2,c)},function(){c[3]=this.value,n(2,c)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),W(this,e,N,M,u,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
