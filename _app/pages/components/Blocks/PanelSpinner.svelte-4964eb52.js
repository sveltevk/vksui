import{S as C,i as b,s as q,e as f,t as g,k as w,c as d,a as v,h as _,d as p,m as x,b as P,g as i,T as r,N as $,w as H,x as D,y as j,q as F,o as G,B as A}from"../../../chunks/vendor-9e39dc6e.js";import{A as R}from"../../../chunks/APIDocs-42f7d831.js";function T(y){let n,c,e,t,a,o,h,S,k,u,I=`<code class="language-svelte"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> promise<span class="token punctuation">&#125;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PanelSpinner</span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then value<span class="token punctuation">&#125;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
		...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Group</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041E\u0448\u0438\u0431\u043A\u0430<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
		...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Group</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span></code>`;return{c(){n=f("h1"),c=g("PanelSpinner"),e=w(),t=f("p"),a=g("\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 - \u043E\u0431\u0451\u0440\u0442\u043A\u0430 \u043D\u0430\u0434 "),o=f("code"),h=g("<Spinner />"),S=g(" \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0442\u0441\u0442\u0443\u043F\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C. \u0423\u0434\u043E\u0431\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445."),k=w(),u=f("pre"),this.h()},l(s){n=d(s,"H1",{id:!0});var l=v(n);c=_(l,"PanelSpinner"),l.forEach(p),e=x(s),t=d(s,"P",{});var m=v(t);a=_(m,"\u042D\u0442\u043E\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 - \u043E\u0431\u0451\u0440\u0442\u043A\u0430 \u043D\u0430\u0434 "),o=d(m,"CODE",{});var E=v(o);h=_(E,"<Spinner />"),E.forEach(p),S=_(m," \u0441 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043E\u0442\u0441\u0442\u0443\u043F\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u043C. \u0423\u0434\u043E\u0431\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445."),m.forEach(p),k=x(s),u=d(s,"PRE",{class:!0});var M=v(u);M.forEach(p),this.h()},h(){P(n,"id","panelspinner"),P(u,"class","language-svelte")},m(s,l){i(s,n,l),r(n,c),i(s,e,l),i(s,t,l),r(t,a),r(t,o),r(o,h),r(t,S),i(s,k,l),i(s,u,l),u.innerHTML=I},p:$,i:$,o:$,d(s){s&&p(n),s&&p(e),s&&p(t),s&&p(k),s&&p(u)}}}class B extends C{constructor(n){super();b(this,n,null,T,q,{})}}var L={props:[{name:"height",kind:"let",type:"number",value:"96",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"style",kind:"let",type:"string",value:"''",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1}],slots:[],events:[],typedefs:[],rest_props:{type:"InlineComponent",name:"Spinner"}};function N(y){let n,c,e,t;return n=new B({}),e=new R({props:{data:L}}),{c(){H(n.$$.fragment),c=w(),H(e.$$.fragment)},l(a){D(n.$$.fragment,a),c=x(a),D(e.$$.fragment,a)},m(a,o){j(n,a,o),i(a,c,o),j(e,a,o),t=!0},p:$,i(a){t||(F(n.$$.fragment,a),F(e.$$.fragment,a),t=!0)},o(a){G(n.$$.fragment,a),G(e.$$.fragment,a),t=!1},d(a){A(n,a),a&&p(c),A(e,a)}}}class J extends C{constructor(n){super();b(this,n,null,N,q,{})}}export{J as default};
