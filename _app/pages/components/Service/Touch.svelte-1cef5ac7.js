import{S as q,i as G,s as R,e as b,t as x,k as $,w as M,c as Y,a as X,h as E,d as c,m as w,x as H,b as F,g as d,O as T,y as L,q as z,o as C,B as D,v as K,V,a0 as O,K as I,a1 as W,W as J}from"../../../chunks/vendor-bc1c7f53.js";import{S as N}from"../../../chunks/Showcase-42ab1a50.js";import"../../../chunks/File.svelte_svelte_type_style_lang-f5b0839d.js";import{T as Q}from"../../../chunks/Touch-3b1b7c1d.js";import{H as U}from"../../../chunks/Header-ddb04c3c.js";import{A as Z}from"../../../chunks/APIDocs-5431d725.js";import"../../../chunks/Caption-64885989.js";import"../../../chunks/Subhead-8832b802.js";import"../../../chunks/Text-12630241.js";import"../../../chunks/Headline-f3f91773.js";import"../../../chunks/Title-7c9dc32b.js";function nn(k){let a;return{c(){a=x("\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},l(p){a=E(p,"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A")},m(p,e){d(p,a,e)},d(p){p&&c(a)}}}function sn(k){let a,p,e,t,o,l,i,_,v;a=new U({props:{mode:"secondary",$$slots:{default:[nn]},$$scope:{ctx:k}}});function u(s){k[9](s)}let m={class:"circle",style:`transform: translate(${k[0]}px, ${k[1]}px)`};return k[2]!==void 0&&(m.container=k[2]),t=new Q({props:m}),V.push(()=>O(t,"container",u)),t.$on("end",k[6]),t.$on("move",k[5]),{c(){M(a.$$.fragment),p=$(),e=b("div"),M(t.$$.fragment),l=$(),i=b("style"),_=x(`.container {
		height: 200px;
		border: 8px solid var(--icon_secondary);
		position: relative;
		border-color: var(--icon_secondary);
	}
	.limitExceeded {
		border-color: var(--destructive);
	}

	.circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--accent);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -20px;
		margin-top: -20px;
	}`),this.h()},l(s){H(a.$$.fragment,s),p=w(s),e=Y(s,"DIV",{class:!0});var f=X(e);H(t.$$.fragment,f),f.forEach(c),l=w(s),i=Y(s,"STYLE",{});var h=X(i);_=E(h,`.container {
		height: 200px;
		border: 8px solid var(--icon_secondary);
		position: relative;
		border-color: var(--icon_secondary);
	}
	.limitExceeded {
		border-color: var(--destructive);
	}

	.circle {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--accent);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -20px;
		margin-top: -20px;
	}`),h.forEach(c),this.h()},h(){F(e,"class","container"),I(e,"limitExceeded",k[4])},m(s,f){L(a,s,f),d(s,p,f),d(s,e,f),L(t,e,null),k[10](e),d(s,l,f),d(s,i,f),T(i,_),v=!0},p(s,f){const h={};f&16384&&(h.$$scope={dirty:f,ctx:s}),a.$set(h);const y={};f&3&&(y.style=`transform: translate(${s[0]}px, ${s[1]}px)`),!o&&f&4&&(o=!0,y.container=s[2],W(()=>o=!1)),t.$set(y),f&16&&I(e,"limitExceeded",s[4])},i(s){v||(z(a.$$.fragment,s),z(t.$$.fragment,s),v=!0)},o(s){C(a.$$.fragment,s),C(t.$$.fragment,s),v=!1},d(s){D(a,s),s&&c(p),s&&c(e),D(t),k[10](null),s&&c(l),s&&c(i)}}}function an(k){let a,p,e,t,o,l,i,_,v,u,m,s,f,h,y,j=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getContext<span class="token punctuation">,</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Touch<span class="token punctuation">,</span> Header <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'@sveltevk/vksui'</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> container<span class="token punctuation">;</span>
	<span class="token keyword">let</span> block<span class="token punctuation">;</span>

	<span class="token keyword">let</span> shiftX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> shiftY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> startX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> startY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> limitX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> limitY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">resize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>container<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			limitX <span class="token operator">=</span> container<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span>
			limitY <span class="token operator">=</span> container<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
			shiftX <span class="token operator">=</span> shiftX <span class="token operator">></span> limitX <span class="token operator">?</span> limitX <span class="token operator">:</span> shiftX <span class="token operator">&lt;</span> <span class="token operator">-</span>limitX <span class="token operator">?</span> <span class="token operator">-</span>limitX <span class="token operator">:</span> shiftX<span class="token punctuation">;</span>
			shiftY <span class="token operator">=</span> shiftY <span class="token operator">></span> limitY <span class="token operator">?</span> limitY <span class="token operator">:</span> shiftY <span class="token operator">&lt;</span> <span class="token operator">-</span>limitY <span class="token operator">?</span> <span class="token operator">-</span>limitY <span class="token operator">:</span> shiftY<span class="token punctuation">;</span>
			<span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

	<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">'complete'</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
			<span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
			window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">onMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		<span class="token keyword">let</span> newShiftX <span class="token operator">=</span> startX <span class="token operator">+</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>shiftX<span class="token punctuation">;</span>
		<span class="token keyword">let</span> newShiftY <span class="token operator">=</span> startY <span class="token operator">+</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>shiftY<span class="token punctuation">;</span>

		shiftX <span class="token operator">=</span> newShiftX <span class="token operator">></span> limitX <span class="token operator">?</span> limitX <span class="token operator">:</span> newShiftX <span class="token operator">&lt;</span> <span class="token operator">-</span>limitX <span class="token operator">?</span> <span class="token operator">-</span>limitX <span class="token operator">:</span> newShiftX<span class="token punctuation">;</span>
		shiftY <span class="token operator">=</span> newShiftY <span class="token operator">></span> limitY <span class="token operator">?</span> limitY <span class="token operator">:</span> newShiftY <span class="token operator">&lt;</span> <span class="token operator">-</span>limitY <span class="token operator">?</span> <span class="token operator">-</span>limitY <span class="token operator">:</span> newShiftY<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">onEnd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
		startX <span class="token operator">=</span> shiftX<span class="token punctuation">;</span>
		startY <span class="token operator">=</span> shiftY<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

	<span class="token literal-property property">$</span><span class="token operator">:</span> limitExceeded <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>shiftX<span class="token punctuation">)</span> <span class="token operator">>=</span> limitX <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>shiftY<span class="token punctuation">)</span> <span class="token operator">>=</span> limitY<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>secondary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043A\u0440\u0443\u0436\u043E\u043A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>block<span class="token punctuation">&#125;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">class:</span>limitExceeded</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Touch</span>
		<span class="token attr-name"><span class="token namespace">bind:</span>container</span>
		<span class="token attr-name"><span class="token namespace">on:</span>end=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onEnd<span class="token punctuation">&#125;</span></span>
		<span class="token attr-name"><span class="token namespace">on:</span>move=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>onMove<span class="token punctuation">&#125;</span></span>
		<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span>
		<span class="token attr-name">style=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">transform: translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>shiftX<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">px, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>shiftY<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">px)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span>
	<span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
	<span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">border</span><span class="token punctuation">:</span> 8px solid <span class="token function">var</span><span class="token punctuation">(</span>--icon_secondary<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
		<span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--icon_secondary<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token selector">.limitExceeded</span> <span class="token punctuation">&#123;</span>
		<span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--destructive<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>

	<span class="token selector">.circle</span> <span class="token punctuation">&#123;</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
		<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--accent<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
		<span class="token property">margin-left</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
		<span class="token property">margin-top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,g;return u=new N({props:{scroll:!0,$$slots:{default:[sn]},$$scope:{ctx:k}}}),{c(){a=b("h1"),p=x("Touch"),e=$(),t=b("p"),o=x("Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),l=$(),i=b("p"),_=x("\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),v=$(),M(u.$$.fragment),m=$(),s=b("h2"),f=x("\u041A\u043E\u0434"),h=$(),y=b("pre"),this.h()},l(n){a=Y(n,"H1",{id:!0});var r=X(a);p=E(r,"Touch"),r.forEach(c),e=w(n),t=Y(n,"P",{});var S=X(t);o=E(S,"Touch \u2013 \u044D\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 pointer \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A \u043A\u043B\u0438\u043A, \u0442\u0430\u043F, \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0438 \u0442.\u0434. \u041E\u043D \u0438\u043D\u043A\u0430\u043F\u0441\u0443\u043B\u0438\u0440\u0443\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043B\u043E\u0433\u0438\u043A\u0443 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439, \u0434\u0430\u0435\u0442 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0430 (\u0438\u043B\u0438 \u043C\u044B\u0448\u043A\u0438) \u043F\u043E \u043E\u0441\u044F\u043C X \u0438 Y, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0438 \u0436\u0435\u0441\u0442\u0430."),S.forEach(c),l=w(n),i=Y(n,"P",{});var P=X(i);_=E(P,"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0432\u043E \u043C\u043D\u043E\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 (Cell, Slider, Gallery, Tappable)."),P.forEach(c),v=w(n),H(u.$$.fragment,n),m=w(n),s=Y(n,"H2",{id:!0});var A=X(s);f=E(A,"\u041A\u043E\u0434"),A.forEach(c),h=w(n),y=Y(n,"PRE",{class:!0});var B=X(y);B.forEach(c),this.h()},h(){F(a,"id","touch"),F(s,"id","\u043A\u043E\u0434"),F(y,"class","language-svelte")},m(n,r){d(n,a,r),T(a,p),d(n,e,r),d(n,t,r),T(t,o),d(n,l,r),d(n,i,r),T(i,_),d(n,v,r),L(u,n,r),d(n,m,r),d(n,s,r),T(s,f),d(n,h,r),d(n,y,r),y.innerHTML=j,g=!0},p(n,[r]){const S={};r&16415&&(S.$$scope={dirty:r,ctx:n}),u.$set(S)},i(n){g||(z(u.$$.fragment,n),g=!0)},o(n){C(u.$$.fragment,n),g=!1},d(n){n&&c(a),n&&c(e),n&&c(t),n&&c(l),n&&c(i),n&&c(v),D(u,n),n&&c(m),n&&c(s),n&&c(h),n&&c(y)}}}function tn(k,a,p){let e,t,o,l=0,i=0,_=0,v=0,u=0,m=0;const s=()=>{t&&(p(7,u=t.offsetLeft),p(8,m=t.offsetTop),p(0,l=l>u?u:l<-u?-u:l),p(1,i=i>m?m:i<-m?-m:i),h())};K(()=>{window.addEventListener("resize",s),document.readyState==="complete"?s():window.addEventListener("load",s)});const f=g=>{let n=_+g.detail.shiftX,r=v+g.detail.shiftY;p(0,l=n>u?u:n<-u?-u:n),p(1,i=r>m?m:r<-m?-m:r)},h=()=>{_=l,v=i};function y(g){t=g,p(2,t)}function j(g){V[g?"unshift":"push"](()=>{o=g,p(3,o)})}return k.$$.update=()=>{k.$$.dirty&387&&p(4,e=Math.abs(l)>=u||Math.abs(i)>=m)},[l,i,t,o,e,f,h,u,m,y,j]}class pn extends q{constructor(a){super();G(this,a,tn,an,R,{})}}var on={props:[{name:"component",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"useCapture",kind:"let",type:"boolean",value:"false",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!1},{name:"container",kind:"let",isFunction:!1,isFunctionDeclaration:!1,constant:!1,reactive:!0}],slots:[{name:"__default__",default:!0,slot_props:"{}"}],events:[{type:"dispatched",name:"leave"},{type:"dispatched",name:"enter"},{type:"dispatched",name:"start"},{type:"dispatched",name:"startX"},{type:"dispatched",name:"startY"},{type:"dispatched",name:"move"},{type:"dispatched",name:"moveX"},{type:"dispatched",name:"moveY"},{type:"dispatched",name:"end"},{type:"dispatched",name:"endY"},{type:"dispatched",name:"endX"},{type:"dispatched",name:"click"}],typedefs:[],rest_props:{type:"InlineComponent",name:"svelte:component"}};function en(k){let a,p,e,t;return a=new pn({}),e=new Z({props:{data:on}}),{c(){M(a.$$.fragment),p=$(),M(e.$$.fragment)},l(o){H(a.$$.fragment,o),p=w(o),H(e.$$.fragment,o)},m(o,l){L(a,o,l),d(o,p,l),L(e,o,l),t=!0},p:J,i(o){t||(z(a.$$.fragment,o),z(e.$$.fragment,o),t=!0)},o(o){C(a.$$.fragment,o),C(e.$$.fragment,o),t=!1},d(o){D(a,o),o&&c(p),D(e,o)}}}class gn extends q{constructor(a){super();G(this,a,null,en,R,{})}}export{gn as default};
