import{S as E,i as R,s as y,l as v,g as k,n as z,o as m,p as G,q as d,d as _,P as N,R as H,C as h,T,G as w,e as P,c as C,a as D,N as p,K as g,H as I,I as S,J as q,z as A}from"./vendor-bc1c7f53.js";import{b as J,c as K,g as O,k as V}from"./File.svelte_svelte_type_style_lang-f5b0839d.js";function W(o){let e,n;const i=o[7].default,s=w(i,o,o[6],null);let u=[o[2]],a={};for(let t=0;t<u.length;t+=1)a=h(a,u[t]);return{c(){e=P("div"),s&&s.c(),this.h()},l(t){e=C(t,"DIV",{});var l=D(e);s&&s.l(l),l.forEach(_),this.h()},h(){p(e,a),g(e,"svelte-1ncu6iw",!0)},m(t,l){k(t,e,l),s&&s.m(e,null),n=!0},p(t,l){s&&s.p&&(!n||l&64)&&I(s,i,t,t[6],n?q(i,t[6],l,null):S(t[6]),null),p(e,a=A(u,[l&4&&t[2]])),g(e,"svelte-1ncu6iw",!0)},i(t){n||(d(s,t),n=!0)},o(t){m(s,t),n=!1},d(t){t&&_(e),s&&s.d(t)}}}function j(o){let e,n;const i=o[7].default,s=w(i,o,o[6],null);let u=[o[2]],a={};for(let t=0;t<u.length;t+=1)a=h(a,u[t]);return{c(){e=P("span"),s&&s.c(),this.h()},l(t){e=C(t,"SPAN",{});var l=D(e);s&&s.l(l),l.forEach(_),this.h()},h(){p(e,a),g(e,"svelte-1ncu6iw",!0)},m(t,l){k(t,e,l),s&&s.m(e,null),n=!0},p(t,l){s&&s.p&&(!n||l&64)&&I(s,i,t,t[6],n?q(i,t[6],l,null):S(t[6]),null),p(e,a=A(u,[l&4&&t[2]])),g(e,"svelte-1ncu6iw",!0)},i(t){n||(d(s,t),n=!0)},o(t){m(s,t),n=!1},d(t){t&&_(e),s&&s.d(t)}}}function B(o){let e,n,i,s;const u=[j,W],a=[];function t(l,r){return l[0]==="span"?0:1}return e=t(o),n=a[e]=u[e](o),{c(){n.c(),i=v()},l(l){n.l(l),i=v()},m(l,r){a[e].m(l,r),k(l,i,r),s=!0},p(l,[r]){let f=e;e=t(l),e===f?a[e].p(l,r):(z(),m(a[f],1,1,()=>{a[f]=null}),G(),n=a[e],n?n.p(l,r):(n=a[e]=u[e](l),n.c()),d(n,1),n.m(i.parentNode,i))},i(l){s||(d(n),s=!0)},o(l){m(n),s=!1},d(l){a[e].d(l),l&&_(i)}}}function F(o,e,n){const i=["component","weight"];let s=N(e,i),u,{$$slots:a={},$$scope:t}=e,{component:l="span"}=e,{weight:r="regular"}=e;const f=J();H(o,f,c=>n(5,u=c));let b=r;return u===V&&r==="semibold"&&(b="medium"),o.$$set=c=>{n(8,e=h(h({},e),T(c))),n(2,s=N(e,i)),"component"in c&&n(0,l=c.component),"weight"in c&&n(3,r=c.weight),"$$scope"in c&&n(6,t=c.$$scope)},o.$$.update=()=>{n(2,s.class=K(O("Text",u),`Text--w-${b}`,e.class),s)},e=T(e),[l,f,s,r,b,u,t,a]}class Q extends E{constructor(e){super();R(this,e,F,B,y,{component:0,weight:3})}}export{Q as T};
