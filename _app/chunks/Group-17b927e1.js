import{S as y,i as $,s as x,O as M,w as U,x as W,y as Y,q as m,o as d,B as Z,C as P,e as N,k as S,c as O,a as q,m as X,d as C,b as ee,a4 as A,a1 as j,g as w,T as k,P as T,Q as E,R as I,n as B,p as D,z as se,a5 as Q,a6 as te,M as R,a7 as V,t as ae,h as oe,j as re}from"./vendor-049c144f.js";import{c as z,g as F,u as ie,d as le,i as ne}from"./File.svelte_svelte_type_style_lang-2a367881.js";import{C as fe}from"./Caption-3a368c8a.js";import{S as ce}from"./Separator-2779a642.js";const _e=a=>({}),H=a=>({}),ue=a=>({}),J=a=>({});function K(a){let e,t;return e=new fe({props:{class:"Group__description",weight:"regular",level:"1",$$slots:{default:[me]},$$scope:{ctx:a}}}),{c(){U(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,r){Y(e,o,r),t=!0},p(o,r){const i={};r&4097&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){Z(e,o)}}}function pe(a){let e;return{c(){e=ae(a[0])},l(t){e=oe(t,a[0])},m(t,o){w(t,e,o)},p(t,o){o&1&&re(e,t[0])},d(t){t&&C(e)}}}function me(a){let e;const t=a[11].description,o=M(t,a,a[12],H),r=o||pe(a);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,u){r&&r.m(i,u),e=!0},p(i,u){o?o.p&&(!e||u&4096)&&T(o,t,i,i[12],e?I(t,i[12],u,_e):E(i[12]),H):r&&r.p&&(!e||u&1)&&r.p(i,e?u:-1)},i(i){e||(m(r,i),e=!0)},o(i){d(r,i),e=!1},d(i){r&&r.d(i)}}}function L(a){let e,t;return e=new ce({props:{class:z("Group__separator",{"Group__separator--force":a[1]==="show"}),expanded:a[3]==="card"}}),{c(){U(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,r){Y(e,o,r),t=!0},p(o,r){const i={};r&2&&(i.class=z("Group__separator",{"Group__separator--force":o[1]==="show"})),r&8&&(i.expanded=o[3]==="card"),e.$set(i)},i(o){t||(m(e.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),t=!1},d(o){Z(e,o)}}}function de(a){let e,t,o,r,i,u,p;const h=a[11].header,c=M(h,a,a[12],J),v=a[11].default,_=M(v,a,a[12],null);let n=(a[9].description||a[0]!=="")&&K(a),l=a[1]!=="hide"&&L(a),G=[a[7],{class:u=z(a[8].class,F("Group",a[4]),`Group--sizeX-${a[2].sizeX}`,`Group--${a[3]}`)}],g={};for(let s=0;s<G.length;s+=1)g=P(g,G[s]);return{c(){e=N("section"),t=N("div"),c&&c.c(),o=S(),_&&_.c(),r=S(),n&&n.c(),i=S(),l&&l.c(),this.h()},l(s){e=O(s,"SECTION",{class:!0});var f=q(e);t=O(f,"DIV",{class:!0});var b=q(t);c&&c.l(b),o=X(b),_&&_.l(b),r=X(b),n&&n.l(b),b.forEach(C),i=X(f),l&&l.l(f),f.forEach(C),this.h()},h(){ee(t,"class","Group__inner svelte-15ipv0f"),A(e,g),j(e,"svelte-15ipv0f",!0)},m(s,f){w(s,e,f),k(e,t),c&&c.m(t,null),k(t,o),_&&_.m(t,null),k(t,r),n&&n.m(t,null),k(e,i),l&&l.m(e,null),p=!0},p(s,[f]){c&&c.p&&(!p||f&4096)&&T(c,h,s,s[12],p?I(h,s[12],f,ue):E(s[12]),J),_&&_.p&&(!p||f&4096)&&T(_,v,s,s[12],p?I(v,s[12],f,null):E(s[12]),null),s[9].description||s[0]!==""?n?(n.p(s,f),f&513&&m(n,1)):(n=K(s),n.c(),m(n,1),n.m(t,null)):n&&(B(),d(n,1,1,()=>{n=null}),D()),s[1]!=="hide"?l?(l.p(s,f),f&2&&m(l,1)):(l=L(s),l.c(),m(l,1),l.m(e,null)):l&&(B(),d(l,1,1,()=>{l=null}),D()),A(e,g=se(G,[f&128&&s[7],(!p||f&284&&u!==(u=z(s[8].class,F("Group",s[4]),`Group--sizeX-${s[2].sizeX}`,`Group--${s[3]}`)))&&{class:u}])),j(e,"svelte-15ipv0f",!0)},i(s){p||(m(c,s),m(_,s),m(n),m(l),p=!0)},o(s){d(c,s),d(_,s),d(n),d(l),p=!1},d(s){s&&C(e),c&&c.d(s),_&&_.d(s),n&&n.d(),l&&l.d()}}}const ge=!1;function he(a,e,t){let o;const r=["description","separator","mode"];let i=Q(e,r),u,p,{$$slots:h={},$$scope:c}=e;const v=te(h);let{description:_=""}=e,{separator:n="auto"}=e,{mode:l=void 0}=e;const G=ie();R(a,G,s=>t(2,u=s));const g=le();return R(a,g,s=>t(4,p=s)),a.$$set=s=>{t(8,e=P(P({},e),V(s))),t(7,i=Q(e,r)),"description"in s&&t(0,_=s.description),"separator"in s&&t(1,n=s.separator),"mode"in s&&t(10,l=s.mode),"$$scope"in s&&t(12,c=s.$$scope)},a.$$.update=()=>{a.$$.dirty&1028&&t(3,o=l||(u.sizeX===ne.COMPACT||ge?"plain":"card"))},e=V(e),[_,n,u,o,p,G,g,i,e,v,l,h,c]}class Ce extends y{constructor(e){super();$(this,e,he,de,x,{description:0,separator:1,mode:10})}}export{Ce as G};
