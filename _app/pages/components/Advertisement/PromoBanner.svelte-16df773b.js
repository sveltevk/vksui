import{S as V,i as A,s as T,w as y,x as B,y as P,q as _,o as $,B as L,e as D,c as E,a as I,d as f,b as d,g,F as Q,a1 as H,ae as N,a0 as w,k as C,m as S,L as M,n as U,p as W,ac as Y,I as x,C as G,J as X,t as q,h as R,j as F,af as nn,G as sn}from"../../../chunks/vendor-107f5108.js";import{S as tn}from"../../../chunks/Showcase-370d926b.js";import{c as Z,g as z,u as an}from"../../../chunks/File.svelte_svelte_type_style_lang-ec30d4c1.js";import{B as en}from"../../../chunks/Button-ac8cbd18.js";import{S as rn}from"../../../chunks/SimpleCell-c5074890.js";import{A as on}from"../../../chunks/Avatar-782b7479.js";import{C as O}from"../../../chunks/Caption-90397005.js";import"../../../chunks/Tappable-7c7eeb6a.js";import"../../../chunks/Touch-da745c48.js";import"../../../chunks/a-3a4ccca5.js";import"../../../chunks/Headline-f5a58810.js";import"../../../chunks/Subhead-fba28212.js";import"../../../chunks/Text-217413e1.js";import"../../../chunks/Title-36419abd.js";function ln(r){let n=(r[0].advertisingLabel||"Advertisement")+"",t;return{c(){t=q(n)},l(s){t=R(s,n)},m(s,e){g(s,t,e)},p(s,e){e&1&&n!==(n=(s[0].advertisingLabel||"Advertisement")+"")&&F(t,n)},d(s){s&&f(t)}}}function pn(r){let n,t;return n=new O({props:{weight:"regular",level:"1",class:"PromoBanner__age",$$slots:{default:[cn]},$$scope:{ctx:r}}}),{c(){y(n.$$.fragment)},l(s){B(n.$$.fragment,s)},m(s,e){P(n,s,e),t=!0},p(s,e){const o={};e&1024&&(o.$$scope={dirty:e,ctx:s}),n.$set(o)},i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){L(n,s)}}}function cn(r){let n,t;return{c(){n=q(r[5]),t=q("+")},l(s){n=R(s,r[5]),t=R(s,"+")},m(s,e){g(s,n,e),g(s,t,e)},p:H,d(s){s&&f(n),s&&f(t)}}}function J(r){let n,t,s,e,o;return t=new nn({}),{c(){n=D("div"),y(t.$$.fragment),this.h()},l(c){n=E(c,"DIV",{class:!0});var u=I(n);B(t.$$.fragment,u),u.forEach(f),this.h()},h(){d(n,"class","PromoBanner__close svelte-1u65nqo")},m(c,u){g(c,n,u),P(t,n,null),s=!0,e||(o=Q(n,"click",r[8]),e=!0)},p:H,i(c){s||(_(t.$$.fragment,c),s=!0)},o(c){$(t.$$.fragment,c),s=!1},d(c){c&&f(n),L(t),e=!1,o()}}}function un(r){let n=r[0].title+"",t;return{c(){t=q(n)},l(s){t=R(s,n)},m(s,e){g(s,t,e)},p(s,e){e&1&&n!==(n=s[0].title+"")&&F(t,n)},d(s){s&&f(t)}}}function fn(r){let n,t;return n=new on({props:{mode:"image",size:48,src:r[0].iconLink,alt:r[0].title}}),{c(){y(n.$$.fragment)},l(s){B(n.$$.fragment,s)},m(s,e){P(n,s,e),t=!0},p(s,e){const o={};e&1&&(o.src=s[0].iconLink),e&1&&(o.alt=s[0].title),n.$set(o)},i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){L(n,s)}}}function mn(r){let n=r[0].ctaText+"",t;return{c(){t=q(n)},l(s){t=R(s,n)},m(s,e){g(s,t,e)},p(s,e){e&1&&n!==(n=s[0].ctaText+"")&&F(t,n)},d(s){s&&f(t)}}}function kn(r){let n,t;return n=new en({props:{mode:"outline",$$slots:{default:[mn]},$$scope:{ctx:r}}}),{c(){y(n.$$.fragment)},l(s){B(n.$$.fragment,s)},m(s,e){P(n,s,e),t=!0},p(s,e){const o={};e&1025&&(o.$$scope={dirty:e,ctx:s}),n.$set(o)},i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){L(n,s)}}}function K(r){let n,t,s;return{c(){n=D("div"),t=D("img"),this.h()},l(e){n=E(e,"DIV",{class:!0});var o=I(n);t=E(o,"IMG",{src:!0,alt:!0}),o.forEach(f),this.h()},h(){N(t.src,s=r[2])||d(t,"src",s),d(t,"alt",""),d(n,"class","PromoBanner__pixels svelte-1u65nqo")},m(e,o){g(e,n,o),w(n,t)},p(e,o){o&4&&!N(t.src,s=e[2])&&d(t,"src",s)},d(e){e&&f(n)}}}function gn(r){let n,t,s,e,o,c,u,h,k,v;s=new O({props:{weight:"regular",level:"1",class:"PromoBanner__label",$$slots:{default:[ln]},$$scope:{ctx:r}}});let m=r[5]!=null&&pn(r),a=!r[1]&&J(r);u=new rn({props:{href:r[0].trackingLink,rel:"nofollow noopener noreferrer",target:"_blank",description:r[0].domain,$$slots:{after:[kn],before:[fn],default:[un]},$$scope:{ctx:r}}}),u.$on("click",r[9]);let p=r[2].length>0&&K(r);return{c(){n=D("div"),t=D("div"),y(s.$$.fragment),e=C(),m&&m.c(),o=C(),a&&a.c(),c=C(),y(u.$$.fragment),h=C(),p&&p.c(),this.h()},l(l){n=E(l,"DIV",{class:!0});var i=I(n);t=E(i,"DIV",{class:!0});var b=I(t);B(s.$$.fragment,b),e=S(b),m&&m.l(b),o=S(b),a&&a.l(b),b.forEach(f),c=S(i),B(u.$$.fragment,i),h=S(i),p&&p.l(i),i.forEach(f),this.h()},h(){d(t,"class","PromoBanner__head svelte-1u65nqo"),d(n,"class",k=M(Z(z("PromoBanner",r[3]),r[7].class))+" svelte-1u65nqo")},m(l,i){g(l,n,i),w(n,t),P(s,t,null),w(t,e),m&&m.m(t,null),w(t,o),a&&a.m(t,null),w(n,c),P(u,n,null),w(n,h),p&&p.m(n,null),v=!0},p(l,[i]){const b={};i&1025&&(b.$$scope={dirty:i,ctx:l}),s.$set(b),l[5]!=null&&m.p(l,i),l[1]?a&&(U(),$(a,1,1,()=>{a=null}),W()):a?(a.p(l,i),i&2&&_(a,1)):(a=J(l),a.c(),_(a,1),a.m(t,null));const j={};i&1&&(j.href=l[0].trackingLink),i&1&&(j.description=l[0].domain),i&1025&&(j.$$scope={dirty:i,ctx:l}),u.$set(j),l[2].length>0?p?p.p(l,i):(p=K(l),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!v||i&136&&k!==(k=M(Z(z("PromoBanner",l[3]),l[7].class))+" svelte-1u65nqo"))&&d(n,"class",k)},i(l){v||(_(s.$$.fragment,l),_(m),_(a),_(u.$$.fragment,l),v=!0)},o(l){$(s.$$.fragment,l),$(m),$(a),$(u.$$.fragment,l),v=!1},d(l){l&&f(n),L(s),m&&m.d(),a&&a.d(),L(u),p&&p.d()}}}function _n(r,n,t){let s;const e=Y();let{bannerData:o}=n,{isCloseButtonHidden:c=!1}=n,{currentPixel:u=""}=n;const h=o.ageRestrictions!=null?parseInt(o.ageRestrictions):o.ageRestriction,k=an();x(r,k,a=>t(3,s=a));const v=()=>e("close");function m(a){sn.call(this,r,a)}return r.$$set=a=>{t(7,n=G(G({},n),X(a))),"bannerData"in a&&t(0,o=a.bannerData),"isCloseButtonHidden"in a&&t(1,c=a.isCloseButtonHidden),"currentPixel"in a&&t(2,u=a.currentPixel)},n=X(n),[o,c,u,s,e,h,k,n,v,m]}class $n extends V{constructor(n){super();A(this,n,_n,gn,T,{bannerData:0,isCloseButtonHidden:1,currentPixel:2})}}function dn(r){let n,t;return n=new $n({props:{bannerData:r[0]}}),{c(){y(n.$$.fragment)},l(s){B(n.$$.fragment,s)},m(s,e){P(n,s,e),t=!0},p:H,i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){L(n,s)}}}function hn(r){let n,t,s,e,o,c,u,h,k,v=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> PromoBanner<span class="token punctuation">,</span> FixedLayout <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> promoBannerProps <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'vk.com'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">trackingLink</span><span class="token operator">:</span> <span class="token string">'https://vk.com'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">ctaText</span><span class="token operator">:</span> <span class="token string">'\u041F\u0435\u0440\u0435\u0439\u0442\u0438'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">advertisingLabel</span><span class="token operator">:</span> <span class="token string">'\u0420\u0435\u043A\u043B\u0430\u043C\u0430'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">iconLink</span><span class="token operator">:</span> <span class="token string">'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u044B'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">ageRestrictions</span><span class="token operator">:</span> <span class="token string">'14+'</span><span class="token punctuation">,</span>
		<span class="token literal-property property">statistics</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">&#123;</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'playbackStarted'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
			<span class="token punctuation">&#123;</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'click'</span> <span class="token punctuation">&#125;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PromoBanner</span> <span class="token attr-name">bannerData=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>promoBannerProps<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,m;return e=new tn({props:{scroll:!0,$$slots:{default:[dn]},$$scope:{ctx:r}}}),{c(){n=D("h1"),t=q("PromoBanner"),s=C(),y(e.$$.fragment),o=C(),c=D("h2"),u=q("\u041A\u043E\u0434"),h=C(),k=D("pre"),this.h()},l(a){n=E(a,"H1",{id:!0});var p=I(n);t=R(p,"PromoBanner"),p.forEach(f),s=S(a),B(e.$$.fragment,a),o=S(a),c=E(a,"H2",{id:!0});var l=I(c);u=R(l,"\u041A\u043E\u0434"),l.forEach(f),h=S(a),k=E(a,"PRE",{class:!0});var i=I(k);i.forEach(f),this.h()},h(){d(n,"id","promobanner"),d(c,"id","\u043A\u043E\u0434"),d(k,"class","language-svelte")},m(a,p){g(a,n,p),w(n,t),g(a,s,p),P(e,a,p),g(a,o,p),g(a,c,p),w(c,u),g(a,h,p),g(a,k,p),k.innerHTML=v,m=!0},p(a,[p]){const l={};p&2&&(l.$$scope={dirty:p,ctx:a}),e.$set(l)},i(a){m||(_(e.$$.fragment,a),m=!0)},o(a){$(e.$$.fragment,a),m=!1},d(a){a&&f(n),a&&f(s),L(e,a),a&&f(o),a&&f(c),a&&f(h),a&&f(k)}}}function vn(r){return[{title:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",domain:"vk.com",trackingLink:"https://vk.com",ctaText:"\u041F\u0435\u0440\u0435\u0439\u0442\u0438",advertisingLabel:"\u0420\u0435\u043A\u043B\u0430\u043C\u0430",iconLink:"https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg",description:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u044B",ageRestrictions:"14+",statistics:[{url:"",type:"playbackStarted"},{url:"",type:"click"}]}]}class bn extends V{constructor(n){super();A(this,n,vn,hn,T,{})}}function yn(r){let n,t;return n=new bn({}),{c(){y(n.$$.fragment)},l(s){B(n.$$.fragment,s)},m(s,e){P(n,s,e),t=!0},p:H,i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){$(n.$$.fragment,s),t=!1},d(s){L(n,s)}}}class An extends V{constructor(n){super();A(this,n,null,yn,T,{})}}export{An as default};
