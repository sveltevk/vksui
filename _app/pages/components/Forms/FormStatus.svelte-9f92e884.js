import{S as j,i as q,s as M,w as d,x as h,y as v,q as i,o as $,B as F,C as R,e as E,k as I,c as G,a as H,m as w,d as m,N as B,K as J,g,O as z,n as K,p as L,z as os,P as O,Q as ls,R as ps,T as Q,G as Z,H as y,I as x,J as ss,t as P,h as C,j as rs,b as A,W as ts}from"../../../chunks/vendor-bc1c7f53.js";import{S as us}from"../../../chunks/Showcase-42ab1a50.js";import{c as V,g as W,b as cs}from"../../../chunks/File.svelte_svelte_type_style_lang-f5b0839d.js";import{G as fs}from"../../../chunks/Group-8e9fa137.js";import{F as N}from"../../../chunks/FormItem-ae7120e3.js";import{C as is}from"../../../chunks/Caption-64885989.js";import{H as ms}from"../../../chunks/Headline-f3f91773.js";import{I as as}from"../../../chunks/Input-e74b85ee.js";import{A as $s}from"../../../chunks/APIDocs-5431d725.js";import"../../../chunks/Separator-f8f5c552.js";import"../../../chunks/Subhead-8832b802.js";import"../../../chunks/IconButton-6a835198.js";import"../../../chunks/Tappable-84ceecc8.js";import"../../../chunks/Touch-3b1b7c1d.js";import"../../../chunks/FormField-596155f8.js";const ks=o=>({}),U=o=>({});function X(o){let s,e;return s=new ms({props:{weight:"medium",class:"FormStatus__header",$$slots:{default:[gs]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&258&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function _s(o){let s;return{c(){s=P(o[1])},l(e){s=C(e,o[1])},m(e,t){g(e,s,t)},p(e,t){t&2&&rs(s,e[1])},d(e){e&&m(s)}}}function gs(o){let s;const e=o[7].header,t=Z(e,o,o[8],U),n=t||_s(o);return{c(){n&&n.c()},l(a){n&&n.l(a)},m(a,p){n&&n.m(a,p),s=!0},p(a,p){t?t.p&&(!s||p&256)&&y(t,e,a,a[8],s?ss(e,a[8],p,ks):x(a[8]),U):n&&n.p&&(!s||p&2)&&n.p(a,s?p:-1)},i(a){s||(i(n,a),s=!0)},o(a){$(n,a),s=!1},d(a){n&&n.d(a)}}}function Y(o){let s,e;return s=new is({props:{level:"1",weight:"regular",class:"FormStatus__content",$$slots:{default:[ds]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&256&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function ds(o){let s;const e=o[7].default,t=Z(e,o,o[8],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,a){t&&t.m(n,a),s=!0},p(n,a){t&&t.p&&(!s||a&256)&&y(t,e,n,n[8],s?ss(e,n[8],a,null):x(n[8]),null)},i(n){s||(i(t,n),s=!0)},o(n){$(t,n),s=!1},d(n){t&&t.d(n)}}}function hs(o){let s,e,t,n,a=(o[6].header||o[1])&&X(o),p=o[6].default&&Y(o),l=[o[4],{class:t=V(o[5].class,W("FormStatus",o[2]),`FormStatus--${o[0]}`)}],c={};for(let r=0;r<l.length;r+=1)c=R(c,l[r]);return{c(){s=E("div"),a&&a.c(),e=I(),p&&p.c(),this.h()},l(r){s=G(r,"DIV",{class:!0});var f=H(s);a&&a.l(f),e=w(f),p&&p.l(f),f.forEach(m),this.h()},h(){B(s,c),J(s,"svelte-1ixz6ux",!0)},m(r,f){g(r,s,f),a&&a.m(s,null),z(s,e),p&&p.m(s,null),n=!0},p(r,[f]){r[6].header||r[1]?a?(a.p(r,f),f&66&&i(a,1)):(a=X(r),a.c(),i(a,1),a.m(s,e)):a&&(K(),$(a,1,1,()=>{a=null}),L()),r[6].default?p?(p.p(r,f),f&64&&i(p,1)):(p=Y(r),p.c(),i(p,1),p.m(s,null)):p&&(K(),$(p,1,1,()=>{p=null}),L()),B(s,c=os(l,[f&16&&r[4],(!n||f&37&&t!==(t=V(r[5].class,W("FormStatus",r[2]),`FormStatus--${r[0]}`)))&&{class:t}])),J(s,"svelte-1ixz6ux",!0)},i(r){n||(i(a),i(p),n=!0)},o(r){$(a),$(p),n=!1},d(r){r&&m(s),a&&a.d(),p&&p.d()}}}function vs(o,s,e){const t=["mode","header"];let n=O(s,t),a,{$$slots:p={},$$scope:l}=s;const c=ls(p);let{mode:r="default"}=s,{header:f=""}=s;const S=cs();return ps(o,S,k=>e(2,a=k)),o.$$set=k=>{e(5,s=R(R({},s),Q(k))),e(4,n=O(s,t)),"mode"in k&&e(0,r=k.mode),"header"in k&&e(1,f=k.header),"$$scope"in k&&e(8,l=k.$$scope)},s=Q(s),[r,f,a,S,n,s,c,p,l]}class Fs extends j{constructor(s){super();q(this,s,vs,hs,M,{mode:0,header:1})}}function Ss(o){let s;return{c(){s=P("\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435")},l(e){s=C(e,"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435")},m(e,t){g(e,s,t)},d(e){e&&m(s)}}}function Is(o){let s,e;return s=new Fs({props:{header:"\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440",mode:"error",$$slots:{default:[Ss]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function ws(o){let s,e;return s=new as({props:{value:"+7 12 344 15 48"}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p:ts,i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function bs(o){let s,e;return s=new as({}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function Es(o){let s,e,t,n,a,p;return s=new N({props:{$$slots:{default:[Is]},$$scope:{ctx:o}}}),t=new N({props:{top:"\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D",$$slots:{default:[ws]},$$scope:{ctx:o}}}),a=new N({props:{top:"\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",$$slots:{default:[bs]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment),e=I(),d(t.$$.fragment),n=I(),d(a.$$.fragment)},l(l){h(s.$$.fragment,l),e=w(l),h(t.$$.fragment,l),n=w(l),h(a.$$.fragment,l)},m(l,c){v(s,l,c),g(l,e,c),v(t,l,c),g(l,n,c),v(a,l,c),p=!0},p(l,c){const r={};c&1&&(r.$$scope={dirty:c,ctx:l}),s.$set(r);const f={};c&1&&(f.$$scope={dirty:c,ctx:l}),t.$set(f);const S={};c&1&&(S.$$scope={dirty:c,ctx:l}),a.$set(S)},i(l){p||(i(s.$$.fragment,l),i(t.$$.fragment,l),i(a.$$.fragment,l),p=!0)},o(l){$(s.$$.fragment,l),$(t.$$.fragment,l),$(a.$$.fragment,l),p=!1},d(l){F(s,l),l&&m(e),F(t,l),l&&m(n),F(a,l)}}}function Gs(o){let s,e;return s=new fs({props:{$$slots:{default:[Es]},$$scope:{ctx:o}}}),{c(){d(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,n){v(s,t,n),e=!0},p(t,n){const a={};n&1&&(a.$$scope={dirty:n,ctx:t}),s.$set(a)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){$(s.$$.fragment,t),e=!1},d(t){F(s,t)}}}function Hs(o){let s,e,t,n,a,p,l,c,r,f,S,k,ns=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Input<span class="token punctuation">,</span> FormItem<span class="token punctuation">,</span> FormStatus<span class="token punctuation">,</span> Group <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormStatus</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
			\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormStatus</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043B\u0435\u0444\u043E\u043D<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>+7 12 344 15 48<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormItem</span> <span class="token attr-name">top</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u041A\u043E\u0434 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormItem</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span></code>`,D;return l=new us({props:{scroll:!0,$$slots:{default:[Gs]},$$scope:{ctx:o}}}),{c(){s=E("h1"),e=P("FormStatus"),t=I(),n=E("p"),a=P("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0444\u043E\u0440\u043C\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u0438 \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438 \u0442\u0435\u043A\u0441\u0442 \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B."),p=I(),d(l.$$.fragment),c=I(),r=E("h2"),f=P("\u041A\u043E\u0434"),S=I(),k=E("pre"),this.h()},l(u){s=G(u,"H1",{id:!0});var _=H(s);e=C(_,"FormStatus"),_.forEach(m),t=w(u),n=G(u,"P",{});var b=H(n);a=C(b,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0444\u043E\u0440\u043C\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u043E\u0433\u0434\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u0434\u043E\u043F\u0443\u0449\u0435\u043D\u0430 \u043E\u0448\u0438\u0431\u043A\u0430, \u0438 \u043D\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438 \u0442\u0435\u043A\u0441\u0442 \u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B."),b.forEach(m),p=w(u),h(l.$$.fragment,u),c=w(u),r=G(u,"H2",{id:!0});var T=H(r);f=C(T,"\u041A\u043E\u0434"),T.forEach(m),S=w(u),k=G(u,"PRE",{class:!0});var es=H(k);es.forEach(m),this.h()},h(){A(s,"id","formstatus"),A(r,"id","\u043A\u043E\u0434"),A(k,"class","language-svelte")},m(u,_){g(u,s,_),z(s,e),g(u,t,_),g(u,n,_),z(n,a),g(u,p,_),v(l,u,_),g(u,c,_),g(u,r,_),z(r,f),g(u,S,_),g(u,k,_),k.innerHTML=ns,D=!0},p(u,[_]){const b={};_&1&&(b.$$scope={dirty:_,ctx:u}),l.$set(b)},i(u){D||(i(l.$$.fragment,u),D=!0)},o(u){$(l.$$.fragment,u),D=!1},d(u){u&&m(s),u&&m(t),u&&m(n),u&&m(p),F(l,u),u&&m(c),u&&m(r),u&&m(S),u&&m(k)}}}class Ps extends j{constructor(s){super();q(this,s,null,Hs,M,{})}}var Cs={props:[{name:"mode",kind:"let",type:"string",value:"'default'",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"header",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[{name:"__default__",default:!0,slot_props:"{}"},{name:"header",default:!1,fallback:"{header}",slot_props:"{}"}],events:[],typedefs:[],rest_props:{type:"Element",name:"div"}};function Ds(o){let s,e,t,n;return s=new Ps({}),t=new $s({props:{data:Cs}}),{c(){d(s.$$.fragment),e=I(),d(t.$$.fragment)},l(a){h(s.$$.fragment,a),e=w(a),h(t.$$.fragment,a)},m(a,p){v(s,a,p),g(a,e,p),v(t,a,p),n=!0},p:ts,i(a){n||(i(s.$$.fragment,a),i(t.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),n=!1},d(a){F(s,a),a&&m(e),F(t,a)}}}class Ws extends j{constructor(s){super();q(this,s,null,Ds,M,{})}}export{Ws as default};
