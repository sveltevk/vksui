import{S as W,i as Y,s as Z,C as z,e as I,c as P,a as X,d as v,b as y,Q as b,P as M,g as F,a0 as E,z as x,a1 as H,F as N,G as A,H as D,J as O,w as $,x as ee,y as se,q as p,o as h,B as te,k as V,m as q,L as j,M as w,N as B,n as J,p as L,aa as oe,t as re,h as ie,j as le}from"./vendor-cd9acbd1.js";import{c as k,g as T,u as ae,a as ne,S as fe}from"./File.svelte_svelte_type_style_lang-fdbb58fb.js";import{C as ce}from"./Caption-ec3b02e1.js";function ue(a){let e,s,o,r=[a[4],{"aria-hidden":"true"},{class:o=k(T("Separator",a[2]),a[5].class,{"Separator--wide":a[0]})}],i={};for(let l=0;l<r.length;l+=1)i=z(i,r[l]);return{c(){e=I("div"),s=I("div"),this.h()},l(l){e=P(l,"DIV",{"aria-hidden":!0,class:!0});var f=X(e);s=P(f,"DIV",{class:!0}),X(s).forEach(v),f.forEach(v),this.h()},h(){y(s,"class","Separator__in svelte-x9cuz"),b(s,"Separator__in--expanded",a[1]),M(e,i),b(e,"svelte-x9cuz",!0)},m(l,f){F(l,e,f),E(e,s)},p(l,[f]){f&2&&b(s,"Separator__in--expanded",l[1]),M(e,i=x(r,[f&16&&l[4],{"aria-hidden":"true"},f&37&&o!==(o=k(T("Separator",l[2]),l[5].class,{"Separator--wide":l[0]}))&&{class:o}])),b(e,"svelte-x9cuz",!0)},i:H,o:H,d(l){l&&v(e)}}}function _e(a,e,s){const o=["wide","expanded"];let r=N(e,o),i,{wide:l=!1}=e,{expanded:f=!1}=e;const m=ae();return A(a,m,c=>s(2,i=c)),a.$$set=c=>{s(5,e=z(z({},e),D(c))),s(4,r=N(e,o)),"wide"in c&&s(0,l=c.wide),"expanded"in c&&s(1,f=c.expanded)},e=D(e),[l,f,i,m,r,e]}class de extends W{constructor(e){super();Y(this,e,_e,ue,Z,{wide:0,expanded:1})}}const pe=a=>({}),Q=a=>({}),me=a=>({}),K=a=>({});function R(a){let e,s;return e=new ce({props:{class:"Group__description",weight:"regular",level:"1",$$slots:{default:[ge]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(o){ee(e.$$.fragment,o)},m(o,r){se(e,o,r),s=!0},p(o,r){const i={};r&4097&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){s||(p(e.$$.fragment,o),s=!0)},o(o){h(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function he(a){let e;return{c(){e=re(a[0])},l(s){e=ie(s,a[0])},m(s,o){F(s,e,o)},p(s,o){o&1&&le(e,s[0])},d(s){s&&v(e)}}}function ge(a){let e;const s=a[11].description,o=O(s,a,a[12],Q),r=o||he(a);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,l){r&&r.m(i,l),e=!0},p(i,l){o?o.p&&(!e||l&4096)&&j(o,s,i,i[12],e?B(s,i[12],l,pe):w(i[12]),Q):r&&r.p&&(!e||l&1)&&r.p(i,e?l:-1)},i(i){e||(p(r,i),e=!0)},o(i){h(r,i),e=!1},d(i){r&&r.d(i)}}}function U(a){let e,s;return e=new de({props:{class:k("Group__separator",{"Group__separator--force":a[1]==="show"}),expanded:a[3]==="card"}}),{c(){$(e.$$.fragment)},l(o){ee(e.$$.fragment,o)},m(o,r){se(e,o,r),s=!0},p(o,r){const i={};r&2&&(i.class=k("Group__separator",{"Group__separator--force":o[1]==="show"})),r&8&&(i.expanded=o[3]==="card"),e.$set(i)},i(o){s||(p(e.$$.fragment,o),s=!0)},o(o){h(e.$$.fragment,o),s=!1},d(o){te(e,o)}}}function ve(a){let e,s,o,r,i,l,f;const m=a[11].header,c=O(m,a,a[12],K),C=a[11].default,d=O(C,a,a[12],null);let u=(a[9].description||a[0]!=="")&&R(a),n=a[1]!=="hide"&&U(a),G=[a[7],{class:l=k(a[8].class,T("Group",a[4]),`Group--sizeX-${a[2].sizeX}`,`Group--${a[3]}`)}],g={};for(let t=0;t<G.length;t+=1)g=z(g,G[t]);return{c(){e=I("section"),s=I("div"),c&&c.c(),o=V(),d&&d.c(),r=V(),u&&u.c(),i=V(),n&&n.c(),this.h()},l(t){e=P(t,"SECTION",{class:!0});var _=X(e);s=P(_,"DIV",{class:!0});var S=X(s);c&&c.l(S),o=q(S),d&&d.l(S),r=q(S),u&&u.l(S),S.forEach(v),i=q(_),n&&n.l(_),_.forEach(v),this.h()},h(){y(s,"class","Group__inner svelte-15ipv0f"),M(e,g),b(e,"svelte-15ipv0f",!0)},m(t,_){F(t,e,_),E(e,s),c&&c.m(s,null),E(s,o),d&&d.m(s,null),E(s,r),u&&u.m(s,null),E(e,i),n&&n.m(e,null),f=!0},p(t,[_]){c&&c.p&&(!f||_&4096)&&j(c,m,t,t[12],f?B(m,t[12],_,me):w(t[12]),K),d&&d.p&&(!f||_&4096)&&j(d,C,t,t[12],f?B(C,t[12],_,null):w(t[12]),null),t[9].description||t[0]!==""?u?(u.p(t,_),_&513&&p(u,1)):(u=R(t),u.c(),p(u,1),u.m(s,null)):u&&(J(),h(u,1,1,()=>{u=null}),L()),t[1]!=="hide"?n?(n.p(t,_),_&2&&p(n,1)):(n=U(t),n.c(),p(n,1),n.m(e,null)):n&&(J(),h(n,1,1,()=>{n=null}),L()),M(e,g=x(G,[_&128&&t[7],(!f||_&284&&l!==(l=k(t[8].class,T("Group",t[4]),`Group--sizeX-${t[2].sizeX}`,`Group--${t[3]}`)))&&{class:l}])),b(e,"svelte-15ipv0f",!0)},i(t){f||(p(c,t),p(d,t),p(u),p(n),f=!0)},o(t){h(c,t),h(d,t),h(u),h(n),f=!1},d(t){t&&v(e),c&&c.d(t),d&&d.d(t),u&&u.d(),n&&n.d()}}}const Ge=!1;function Se(a,e,s){let o;const r=["description","separator","mode"];let i=N(e,r),l,f,{$$slots:m={},$$scope:c}=e;const C=oe(m);let{description:d=""}=e,{separator:u="auto"}=e,{mode:n=void 0}=e;const G=ne();A(a,G,t=>s(2,l=t));const g=ae();return A(a,g,t=>s(4,f=t)),a.$$set=t=>{s(8,e=z(z({},e),D(t))),s(7,i=N(e,r)),"description"in t&&s(0,d=t.description),"separator"in t&&s(1,u=t.separator),"mode"in t&&s(10,n=t.mode),"$$scope"in t&&s(12,c=t.$$scope)},a.$$.update=()=>{a.$$.dirty&1028&&s(3,o=n||(l.sizeX===fe.COMPACT||Ge?"plain":"card"))},e=D(e),[d,u,l,o,f,G,g,i,e,C,n,m,c]}class Ce extends W{constructor(e){super();Y(this,e,Se,ve,Z,{description:0,separator:1,mode:10})}}export{Ce as G,de as S};
