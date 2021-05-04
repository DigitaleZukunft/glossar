var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function i(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function r(e){return document.createTextNode(e)}function f(){return r(" ")}function d(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}function m(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}let _;function y(e){_=e}const v=[],b=[],$=[],k=[],w=Promise.resolve();let x=!1;function j(e){$.push(e)}let S=!1;const L=new Set;function C(){if(!S){S=!0;do{for(let e=0;e<v.length;e+=1){const t=v[e];y(t),E(t.$$)}for(y(null),v.length=0;b.length;)b.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];L.has(t)||(L.add(t),t())}$.length=0}while(v.length);for(;k.length;)k.pop()();x=!1,S=!1,L.clear()}}function E(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const z=new Set;function A(e,t){-1===e.$$.dirty[0]&&(v.push(e),x||(x=!0,w.then(C)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(l,o,a,u,r,f,d=[-1]){const h=_;y(l);const p=l.$$={fragment:null,ctx:null,props:f,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:o.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let g=!1;if(p.ctx=a?a(l,o.props||{},((e,t,...n)=>{const s=n.length?n[0]:t;return p.ctx&&r(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),g&&A(l,e)),t})):[],p.update(),g=!0,s(p.before_update),p.fragment=!!u&&u(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();o.intro&&((m=l.$$.fragment)&&m.i&&(z.delete(m),m.i(v))),function(e,n,l,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:r}=e.$$;a&&a.m(n,l),o||j((()=>{const n=c.map(t).filter(i);u?u.push(...n):s(n),e.$$.on_mount=[]})),r.forEach(j)}(l,o.target,o.anchor,o.customElement),C()}var m,v;y(h)}function W(e,t,n){const s=e.slice();return s[14]=t[n],s}function O(e){let t,n=" / "+e[14].synonyme.replace("|"," / ");return{c(){t=r(n)},m(e,n){a(e,t,n)},p(e,s){1&s&&n!==(n=" / "+e[14].synonyme.replace("|"," / "))&&p(t,n)},d(e){e&&c(t)}}}function T(e){let t,n,s,i;return{c(){t=u("a"),n=u("img"),n.src!==(s="https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg")&&h(n,"src","https://upload.wikimedia.org/wikipedia/commons/0/0c/Wikipedia%27s_W_%28Linux_Libertine_mucked_with%29.svg"),h(n,"class","icon svelte-4ajcy7"),h(n,"alt","Wikipedia Article"),h(t,"href",i=e[14].wikipedia),h(t,"target","_blank")},m(e,s){a(e,t,s),o(t,n)},p(e,n){1&n&&i!==(i=e[14].wikipedia)&&h(t,"href",i)},d(e){e&&c(t)}}}function D(e){let t,n,s,i,l,d,g,m,_,y,v,b,$,k=e[14].bezeichnung+"",w=e[14].beschreibung+"",x=e[14].begriffsklasse+"",j=e[14].synonyme&&O(e),S=e[14].wikipedia&&T(e);return{c(){t=u("tr"),n=u("td"),s=r(k),i=f(),j&&j.c(),l=f(),d=u("td"),S&&S.c(),g=f(),m=u("td"),_=r(w),y=f(),v=u("td"),b=r(x),$=f(),h(n,"class","svelte-4ajcy7"),h(d,"class","svelte-4ajcy7"),h(m,"class","td-def svelte-4ajcy7"),h(v,"class","svelte-4ajcy7"),h(t,"class","svelte-4ajcy7")},m(e,c){a(e,t,c),o(t,n),o(n,s),o(n,i),j&&j.m(n,null),o(t,l),o(t,d),S&&S.m(d,null),o(t,g),o(t,m),o(m,_),o(t,y),o(t,v),o(v,b),o(t,$)},p(e,t){1&t&&k!==(k=e[14].bezeichnung+"")&&p(s,k),e[14].synonyme?j?j.p(e,t):(j=O(e),j.c(),j.m(n,null)):j&&(j.d(1),j=null),e[14].wikipedia?S?S.p(e,t):(S=T(e),S.c(),S.m(d,null)):S&&(S.d(1),S=null),1&t&&w!==(w=e[14].beschreibung+"")&&p(_,w),1&t&&x!==(x=e[14].begriffsklasse+"")&&p(b,x)},d(e){e&&c(t),j&&j.d(),S&&S.d()}}}function N(t){let n,i,l,p,_,y,v,b,$,k,w,x,j,S,L,C,E,z,A,B,O,T,N,P,G,M,q,F,H,K,Q,Z,I,J,R,U,V,X,Y,ee,te=t[0],ne=[];for(let e=0;e<te.length;e+=1)ne[e]=D(W(t,te,e));return{c(){n=u("main"),i=u("h1"),i.textContent="DZKH-Glossar",l=r("\n\tSuche: "),p=u("input"),_=f(),y=u("table"),v=u("th"),v.textContent="Bezeichnung",b=f(),$=u("th"),k=f(),w=u("th"),w.textContent="Beschreibung",x=f(),j=u("th"),j.textContent="Begriffsklasse",S=f(),L=u("tbody"),C=u("tr"),E=u("td"),z=u("input"),A=f(),B=u("td"),O=f(),T=u("td"),N=u("input"),P=f(),G=u("td"),M=u("input"),q=f();for(let e=0;e<ne.length;e+=1)ne[e].c();F=f(),H=u("datalist"),K=u("option"),Q=u("option"),Z=u("option"),I=u("option"),J=u("option"),R=u("option"),U=u("option"),V=u("option"),X=u("option"),h(i,"class","svelte-4ajcy7"),h(p,"type","search"),m(p,"width","80%"),h(p,"tabindex","0"),p.autofocus=!0,h(z,"type","search"),h(z,"class","singleSearch svelte-4ajcy7"),h(z,"placeholder",t[3][0]),h(E,"class","svelte-4ajcy7"),h(B,"class","svelte-4ajcy7"),h(N,"type","search"),h(N,"class","singleSearch svelte-4ajcy7"),h(N,"placeholder",t[3][2]),h(T,"class","svelte-4ajcy7"),h(M,"type","search"),h(M,"class","singleSearch svelte-4ajcy7"),h(M,"list","begriffsklassen"),h(M,"placeholder",t[3][3]),h(G,"class","svelte-4ajcy7"),h(C,"class","svelte-4ajcy7"),m(y,"width","100%"),h(y,"aria-label","Glossareinträge"),K.__value="Aufgabe",K.value=K.__value,Q.__value="Anwendungssystem",Q.value=Q.__value,Z.__value="Datenobjekt",Z.value=Z.__value,I.__value="Physisches Datenverarbeitungssystem",I.value=I.__value,J.__value="Organisationseinheit",J.value=J.__value,R.__value="Standard",R.value=R.__value,U.__value="Technologisches Themengebiet",U.value=U.__value,V.__value="Qualitätskriterium",V.value=V.__value,X.__value="Sonstiges",X.value=X.__value,h(H,"id","begriffsklassen"),h(n,"class","svelte-4ajcy7")},m(e,s){a(e,n,s),o(n,i),o(n,l),o(n,p),g(p,t[1]),o(n,_),o(n,y),o(y,v),o(y,b),o(y,$),o(y,k),o(y,w),o(y,x),o(y,j),o(y,S),o(y,L),o(L,C),o(C,E),o(E,z),g(z,t[2][0]),o(C,A),o(C,B),o(C,O),o(C,T),o(T,N),g(N,t[2][2]),o(C,P),o(C,G),o(G,M),g(M,t[2][3]),o(L,q);for(let e=0;e<ne.length;e+=1)ne[e].m(L,null);o(n,F),o(n,H),o(H,K),o(H,Q),o(H,Z),o(H,I),o(H,J),o(H,R),o(H,U),o(H,V),o(H,X),p.focus(),Y||(ee=[d(p,"input",t[6]),d(z,"input",t[7]),d(N,"input",t[8]),d(M,"input",t[9])],Y=!0)},p(e,[t]){if(2&t&&g(p,e[1]),4&t&&g(z,e[2][0]),4&t&&g(N,e[2][2]),4&t&&g(M,e[2][3]),1&t){let n;for(te=e[0],n=0;n<te.length;n+=1){const s=W(e,te,n);ne[n]?ne[n].p(s,t):(ne[n]=D(s),ne[n].c(),ne[n].m(L,null))}for(;n<ne.length;n+=1)ne[n].d(1);ne.length=te.length}},i:e,o:e,d(e){e&&c(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(ne,e),Y=!1,s(ee)}}}function P(e,t,n){let s=[],i=[],l=null,o="";const a=["bezeichnung","synonyme","beschreibung","begriffsklasse"],c=["Bezeichnung","Synonyme","Beschreibung","Begriffskl."].map((e=>"Suche in "+e));let u=[];for(let e=0;e<a.length;e++)u.push("");const r={minMatchCharLength:1,threshold:.2,useExtendedSearch:!0,ignoreLocation:!0,keys:["bezeichnung","synonyme","beschreibung","begriffsklasse"]};return async function(){n(4,s=await d3.csv("data/glossary.csv")),s.sort(((e,t)=>e.bezeichnung>t.bezeichnung?1:-1)),n(5,l=new Fuse(s,r)),n(0,i=s)}(),e.$$.update=()=>{if(55&e.$$.dirty){n(0,i=l&&o?l.search(o).map((e=>e.item)):s);for(let e=0;e<a.length;e++)n(0,i=i.filter((t=>t[a[e]].toLowerCase().includes(u[e].toLowerCase()))))}},[i,o,u,c,s,l,function(){o=this.value,n(1,o)},function(){u[0]=this.value,n(2,u)},function(){u[2]=this.value,n(2,u)},function(){u[3]=this.value,n(2,u)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),B(this,e,P,N,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
