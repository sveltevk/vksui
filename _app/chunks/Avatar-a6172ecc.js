import{S as se,i as ie,s as re,e as p,c as I,aq as J,b as g,g as q,ad as P,d as A,ae as oe,a as E,H as L,I as O,J as F,q as m,o as b,w as G,x as H,y as N,B as U,ac as M,n as S,p as D,k as C,m as R,O as w,Q as ne,R as fe,C as Q,T as W,G as Z,ax as ue,ay as _e,Z as ce}from"./vendor-bc1c7f53.js";import{c as k,g as j,b as de}from"./File.svelte_svelte_type_style_lang-f5b0839d.js";import{T as ve}from"./Tappable-84ceecc8.js";const he=s=>({}),K=s=>({}),me=s=>({}),X=s=>({});function Y(s){let e,t,l,a;return{c(){e=p("img"),this.h()},l(i){e=I(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){J(e.src,t=s[7])||g(e,"src",t),g(e,"alt",""),g(e,"class","Avatar__img svelte-1q8vrtl")},m(i,r){q(i,e,r),l||(a=[P(e,"error",s[12]),P(e,"load",s[13])],l=!0)},p(i,r){r&128&&!J(e.src,t=i[7])&&g(e,"src",t)},d(i){i&&A(e),l=!1,oe(a)}}}function $(s){let e,t,l;const a=s[18].default,i=Z(a,s,s[20],null);return{c(){e=p("div"),i&&i.c(),this.h()},l(r){e=I(r,"DIV",{class:!0,style:!0});var d=E(e);i&&i.l(d),d.forEach(A),this.h()},h(){g(e,"class","Avatar__children svelte-1q8vrtl"),g(e,"style",t=`width: ${s[0]}px; height: ${s[0]}px; border-radius:${s[9]}`)},m(r,d){q(r,e,d),i&&i.m(e,null),l=!0},p(r,d){i&&i.p&&(!l||d&1048576)&&L(i,a,r,r[20],l?F(a,r[20],d,null):O(r[20]),null),(!l||d&513&&t!==(t=`width: ${r[0]}px; height: ${r[0]}px; border-radius:${r[9]}`))&&g(e,"style",t)},i(r){l||(m(i,r),l=!0)},o(r){b(i,r),l=!1},d(r){r&&A(e),i&&i.d(r)}}}function x(s){let e,t;return e=new ve({props:{Component:"button",class:k("Avatar__overlay",{"Avatar__overlay--visible":s[5]==="always","Avatar__overlay--light":s[4]==="light","Avatar__overlay--dark":s[4]==="dark"}),hoverMode:"Avatar__overlay--visible",focusVisibleMode:"Avatar__overlay--focus-visible",hasActive:!1,$$slots:{default:[ge]},$$scope:{ctx:s}}}),e.$on("click",s[19]),{c(){G(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,a){N(e,l,a),t=!0},p(l,a){const i={};a&48&&(i.class=k("Avatar__overlay",{"Avatar__overlay--visible":l[5]==="always","Avatar__overlay--light":l[4]==="light","Avatar__overlay--dark":l[4]==="dark"})),a&1048576&&(i.$$scope={dirty:a,ctx:l}),e.$set(i)},i(l){t||(m(e.$$.fragment,l),t=!0)},o(l){b(e.$$.fragment,l),t=!1},d(l){U(e,l)}}}function ge(s){let e;const t=s[18].overlayIcon,l=Z(t,s,s[20],X);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,i){l&&l.m(a,i),e=!0},p(a,i){l&&l.p&&(!e||i&1048576)&&L(l,t,a,a[20],e?F(t,a[20],i,me):O(a[20]),X)},i(a){e||(m(l,a),e=!0)},o(a){b(l,a),e=!1},d(a){l&&l.d(a)}}}function ee(s){let e,t,l,a,i;const r=[ye,Ae,be],d=[];function _(o,f){return o[3]==="online"?0:o[3]==="online-mobile"?1:2}return t=_(s),l=d[t]=r[t](s),{c(){e=p("div"),l.c(),this.h()},l(o){e=I(o,"DIV",{class:!0});var f=E(e);l.l(f),f.forEach(A),this.h()},h(){g(e,"class",a=M(k("Avatar__badge",{"Avatar__badge--large":s[0]>=96,"Avatar__badge--shadow":s[3]!=="online"&&s[3]!=="online-mobile"}))+" svelte-1q8vrtl")},m(o,f){q(o,e,f),d[t].m(e,null),i=!0},p(o,f){let u=t;t=_(o),t===u?d[t].p(o,f):(S(),b(d[u],1,1,()=>{d[u]=null}),D(),l=d[t],l?l.p(o,f):(l=d[t]=r[t](o),l.c()),m(l,1),l.m(e,null)),(!i||f&9&&a!==(a=M(k("Avatar__badge",{"Avatar__badge--large":o[0]>=96,"Avatar__badge--shadow":o[3]!=="online"&&o[3]!=="online-mobile"}))+" svelte-1q8vrtl"))&&g(e,"class",a)},i(o){i||(m(l),i=!0)},o(o){b(l),i=!1},d(o){o&&A(e),d[t].d()}}}function be(s){let e;const t=s[18].badge,l=Z(t,s,s[20],K);return{c(){l&&l.c()},l(a){l&&l.l(a)},m(a,i){l&&l.m(a,i),e=!0},p(a,i){l&&l.p&&(!e||i&1048576)&&L(l,t,a,a[20],e?F(t,a[20],i,he):O(a[20]),K)},i(a){e||(m(l,a),e=!0)},o(a){b(l,a),e=!1},d(a){l&&l.d(a)}}}function Ae(s){let e,t,l;return t=new ue({props:{width:s[0]>=72?9:8,height:s[0]>=72?15:12}}),{c(){e=p("div"),G(t.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var i=E(e);H(t.$$.fragment,i),i.forEach(A),this.h()},h(){g(e,"class","Avatar__badge-online-mobile svelte-1q8vrtl")},m(a,i){q(a,e,i),N(t,e,null),l=!0},p(a,i){const r={};i&1&&(r.width=a[0]>=72?9:8),i&1&&(r.height=a[0]>=72?15:12),t.$set(r)},i(a){l||(m(t.$$.fragment,a),l=!0)},o(a){b(t.$$.fragment,a),l=!1},d(a){a&&A(e),U(t)}}}function ye(s){let e,t,l;return t=new _e({props:{width:s[0]>=72?15:12,height:s[0]>=72?15:12}}),{c(){e=p("div"),G(t.$$.fragment),this.h()},l(a){e=I(a,"DIV",{class:!0});var i=E(e);H(t.$$.fragment,i),i.forEach(A),this.h()},h(){g(e,"class","Avatar__badge-online svelte-1q8vrtl")},m(a,i){q(a,e,i),N(t,e,null),l=!0},p(a,i){const r={};i&1&&(r.width=a[0]>=72?15:12),i&1&&(r.height=a[0]>=72?15:12),t.$set(r)},i(a){l||(m(t.$$.fragment,a),l=!0)},o(a){b(t.$$.fragment,a),l=!1},d(a){a&&A(e),U(t)}}}function ke(s){let e,t,l,a,i,r,d,_,o=s[10]&&Y(s),f=s[16].default&&$(s),u=s[16].overlayIcon&&x(s),h=(s[16].badge||s[3])&&ee(s);return{c(){e=p("div"),o&&o.c(),t=C(),f&&f.c(),l=C(),u&&u.c(),a=C(),h&&h.c(),this.h()},l(n){e=I(n,"DIV",{class:!0,role:!0,style:!0});var v=E(e);o&&o.l(v),t=R(v),f&&f.l(v),l=R(v),u&&u.l(v),a=R(v),h&&h.l(v),v.forEach(A),this.h()},h(){g(e,"class",i=M(k(s[15].class,j("Avatar",s[11]),`Avatar--type-${s[1]}`,`Avatar--sz-${s[0]}`,{"Avatar--shadow":s[2],"Avatar--failed":s[8]}))+" svelte-1q8vrtl"),g(e,"role",r=s[10]?"img":"presentation"),g(e,"style",d=s[6]+`; width: ${s[0]}px; height: ${s[0]}px; border-radius:${s[9]}`)},m(n,v){q(n,e,v),o&&o.m(e,null),w(e,t),f&&f.m(e,null),w(e,l),u&&u.m(e,null),w(e,a),h&&h.m(e,null),_=!0},p(n,[v]){n[10]?o?o.p(n,v):(o=Y(n),o.c(),o.m(e,t)):o&&(o.d(1),o=null),n[16].default?f?(f.p(n,v),v&65536&&m(f,1)):(f=$(n),f.c(),m(f,1),f.m(e,l)):f&&(S(),b(f,1,1,()=>{f=null}),D()),n[16].overlayIcon?u?(u.p(n,v),v&65536&&m(u,1)):(u=x(n),u.c(),m(u,1),u.m(e,a)):u&&(S(),b(u,1,1,()=>{u=null}),D()),n[16].badge||n[3]?h?(h.p(n,v),v&65544&&m(h,1)):(h=ee(n),h.c(),m(h,1),h.m(e,null)):h&&(S(),b(h,1,1,()=>{h=null}),D()),(!_||v&35079&&i!==(i=M(k(n[15].class,j("Avatar",n[11]),`Avatar--type-${n[1]}`,`Avatar--sz-${n[0]}`,{"Avatar--shadow":n[2],"Avatar--failed":n[8]}))+" svelte-1q8vrtl"))&&g(e,"class",i),(!_||v&1024&&r!==(r=n[10]?"img":"presentation"))&&g(e,"role",r),(!_||v&577&&d!==(d=n[6]+`; width: ${n[0]}px; height: ${n[0]}px; border-radius:${n[9]}`))&&g(e,"style",d)},i(n){_||(m(f),m(u),m(h),_=!0)},o(n){b(f),b(u),b(h),_=!1},d(n){n&&A(e),o&&o.d(),f&&f.d(),u&&u.d(),h&&h.d()}}}const pe=48,Ie=!0;function qe(s,e,t){let l,a,{$$slots:i={},$$scope:r}=e;const d=ne(i);let{size:_=pe}=e,{mode:o="default"}=e,{shadow:f=Ie}=e,{badge:u=void 0}=e,{overlayMode:h=void 0}=e,{overlayAction:n=void 0}=e,{style:v=""}=e,{src:V=void 0}=e,{srcSet:T=void 0}=e,z=!1;const le=()=>{t(8,z=!0)},ae=()=>{t(8,z=!1)},B=de();fe(s,B,c=>t(11,a=c));let y="50%";switch(o){case"image":_<64&&(y="4px"),_>=64&&_<96&&(y="6px"),_>=96&&(y="8px");break;case"app":_<=40&&(y="8px"),_>40&&_<56&&(y="10px"),_>=56&&_<64&&(y="12px"),_>=64&&_<84&&(y="16px"),_>=84&&(y="18px");break}function te(c){ce.call(this,s,c)}return s.$$set=c=>{t(15,e=Q(Q({},e),W(c))),"size"in c&&t(0,_=c.size),"mode"in c&&t(1,o=c.mode),"shadow"in c&&t(2,f=c.shadow),"badge"in c&&t(3,u=c.badge),"overlayMode"in c&&t(4,h=c.overlayMode),"overlayAction"in c&&t(5,n=c.overlayAction),"style"in c&&t(6,v=c.style),"src"in c&&t(7,V=c.src),"srcSet"in c&&t(17,T=c.srcSet),"$$scope"in c&&t(20,r=c.$$scope)},s.$$.update=()=>{s.$$.dirty&131200&&t(10,l=V||T)},e=W(e),[_,o,f,u,h,n,v,V,z,y,l,a,le,ae,B,e,d,T,i,te,r]}class Me extends se{constructor(e){super();ie(this,e,qe,ke,re,{size:0,mode:1,shadow:2,badge:3,overlayMode:4,overlayAction:5,style:6,src:7,srcSet:17})}}export{Me as A,pe as a,Ie as b};
