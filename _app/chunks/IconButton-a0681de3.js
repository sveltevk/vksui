import{S as y,i as z,s as A,C as r,w as C,x as M,y as P,z as S,A as k,q as I,o as h,B as q,a5 as _,M as g,a7 as d,a8 as N,G as O,O as T,P as Y,Q as j,R as D}from"./vendor-049c144f.js";import{I as b,d as E,u as G,g as Q}from"./File.svelte_svelte_type_style_lang-2a367881.js";import{A as B,T as R,B as F}from"./Tappable-6ae803f7.js";function H(s){let t;const n=s[6].default,o=T(n,s,s[8],null);return{c(){o&&o.c()},l(a){o&&o.l(a)},m(a,e){o&&o.m(a,e),t=!0},p(a,e){o&&o.p&&(!t||e&256)&&Y(o,n,a,a[8],t?D(n,a[8],e,null):j(a[8]),null)},i(a){t||(I(o,a),t=!0)},o(a){h(o,a),t=!1},d(a){o&&o.d(a)}}}function J(s){let t,n;const o=[s[4],{component:s[4].href?B:s[0]},{activeEffectDelay:200},{activeMode:s[1]===b?"opacity":"IconButton--active"}];let a={$$slots:{default:[H]},$$scope:{ctx:s}};for(let e=0;e<o.length;e+=1)a=r(a,o[e]);return t=new R({props:a}),t.$on("click",s[7]),{c(){C(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,c){P(t,e,c),n=!0},p(e,[c]){const u=c&19?S(o,[c&16&&k(e[4]),c&17&&{component:e[4].href?B:e[0]},o[2],c&2&&{activeMode:e[1]===b?"opacity":"IconButton--active"}]):{};c&256&&(u.$$scope={dirty:c,ctx:e}),t.$set(u)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function K(s,t,n){const o=["component"];let a=_(t,o),e,c,{$$slots:u={},$$scope:i}=t,{component:m=F}=t;const p=E();g(s,p,l=>n(1,c=l));const f=G();g(s,f,l=>n(5,e=l));function v(l){O.call(this,s,l)}return s.$$set=l=>{n(9,t=r(r({},t),d(l))),n(4,a=_(t,o)),"component"in l&&n(0,m=l.component),"$$scope"in l&&n(8,i=l.$$scope)},s.$$.update=()=>{n(4,a.class=N(t.class,Q("IconButton",c),"IconButton",`IconButton--sizeY-${e.sizeY}`),a)},t=d(t),[m,c,p,f,a,e,u,v,i]}class W extends y{constructor(t){super();z(this,t,K,J,A,{component:0})}}export{W as I};
