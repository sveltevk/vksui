import{S as Q,i as R,s as D,C as c,w as E,x as F,y as H,z as I,A as J,q as i,o as m,B as K,a5 as g,M as L,a7 as C,G as T,O as j,P as q,Q as A,R as z,l as h,g as G,t as U,h as V,j as W,d as M}from"./vendor-049c144f.js";import{c as B,g as k,d as X}from"./File.svelte_svelte_type_style_lang-2a367881.js";import{A as P,B as Y}from"./Tappable-6ae803f7.js";import{S as Z}from"./SimpleCell-c7bd40d3.js";const y=n=>({}),S=n=>({slot:"before"});function v(n){let e;const t=n[8].default,l=j(t,n,n[10],null);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,o){l&&l.m(s,o),e=!0},p(s,o){l&&l.p&&(!e||o&1024)&&q(l,t,s,s[10],e?z(t,s[10],o,null):A(s[10]),null)},i(s){e||(i(l,s),e=!0)},o(s){m(l,s),e=!1},d(s){l&&l.d(s)}}}function N(n){let e;return{c(){e=U(n[1])},l(t){e=V(t,n[1])},m(t,l){G(t,e,l)},p(t,l){l&2&&W(e,t[1])},d(t){t&&M(e)}}}function w(n){let e,t=n[1]&&N(n);return{c(){t&&t.c(),e=h()},l(l){t&&t.l(l),e=h()},m(l,s){t&&t.m(l,s),G(l,e,s)},p(l,s){l[1]?t?t.p(l,s):(t=N(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&M(e)}}}function x(n){let e;const t=n[8].before,l=j(t,n,n[10],S),s=l||w(n);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,a){s&&s.m(o,a),e=!0},p(o,a){l?l.p&&(!e||a&1024)&&q(l,t,o,o[10],e?z(t,o[10],a,y):A(o[10]),S):s&&s.p&&(!e||a&2)&&s.p(o,e?a:-1)},i(o){e||(i(s,o),e=!0)},o(o){m(s,o),e=!1},d(o){s&&s.d(o)}}}function $(n){let e,t;const l=[n[6],{stopPropagation:!0},{component:n[6].href?P:n[0]},{class:B(k("CellButton",n[4]),`CellButton--${n[2]}`,{["CellButton--centered"]:n[3]},n[7].class)}];let s={$$slots:{before:[x],default:[v]},$$scope:{ctx:n}};for(let o=0;o<l.length;o+=1)s=c(s,l[o]);return e=new Z({props:s}),e.$on("click",n[9]),{c(){E(e.$$.fragment)},l(o){F(e.$$.fragment,o)},m(o,a){H(e,o,a),t=!0},p(o,[a]){const r=a&221?I(l,[a&64&&J(o[6]),l[1],a&65&&{component:o[6].href?P:o[0]},a&156&&{class:B(k("CellButton",o[4]),`CellButton--${o[2]}`,{["CellButton--centered"]:o[3]},o[7].class)}]):{};a&1026&&(r.$$scope={dirty:a,ctx:o}),e.$set(r)},i(o){t||(i(e.$$.fragment,o),t=!0)},o(o){m(e.$$.fragment,o),t=!1},d(o){K(e,o)}}}function ee(n,e,t){const l=["component","before","mode","centered"];let s=g(e,l),o,{$$slots:a={},$$scope:r}=e,{component:u=Y}=e,{before:_=""}=e,{mode:b="primary"}=e,{centered:d=!1}=e;const p=X();L(n,p,f=>t(4,o=f));function O(f){T.call(this,n,f)}return n.$$set=f=>{t(7,e=c(c({},e),C(f))),t(6,s=g(e,l)),"component"in f&&t(0,u=f.component),"before"in f&&t(1,_=f.before),"mode"in f&&t(2,b=f.mode),"centered"in f&&t(3,d=f.centered),"$$scope"in f&&t(10,r=f.$$scope)},e=C(e),[u,_,b,d,o,p,s,e,a,O,r]}class ne extends Q{constructor(e){super();R(this,e,ee,$,D,{component:0,before:1,mode:2,centered:3})}}export{ne as C};
