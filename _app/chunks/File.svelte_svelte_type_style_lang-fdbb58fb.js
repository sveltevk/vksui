import{a3 as M,D as g,a4 as Q,a5 as de,a6 as me,S as O,i as W,s as U,J as Y,L as B,M as X,N as F,q as p,o as E,G as x,r as C,a7 as Ie,v as Te,a8 as He,C as I,H as T,w as ye,x as ge,y as be,B as ke,a9 as Ae,e as z,c as P,a as L,d as S,b as D,g as K,a1 as Ce,t as we,h as Me,K as ze,a0 as N,k as le,m as ie,P as ne,Q as _e,n as Pe,p as Le,z as De,W as Ve,F as re,aa as Re}from"./vendor-cd9acbd1.js";const V=()=>({window:M?window:void 0,document:M?document:void 0});var G=(t=>(t.ANDROID="android",t.IOS="ios",t.VKCOM="vkcom",t))(G||{});const Ne="android",$="ios",oe="vkcom";function Z(t){const e=t||M&&navigator.userAgent||"";return/iphone|ipad|ipod/i.test(e)?$:Ne}var k=(t=>(t.isWebView="vkui_isWebView",t.webviewType="vkui_webviewType",t.scheme="vkui_scheme",t.appearance="vkui_appearance",t.app="vkui_app",t.transitionMotionEnabled="vkui_transitionMotionEnabled",t.platform="vkui_platform",t.hasNewTokens="vkui_hasNewTokens",t.contentWindow="vkui_contentWindow",t.contentDocument="vkui_contentDocument",t))(k||{}),A=(t=>(t.DEPRECATED_CLIENT_LIGHT="client_light",t.DEPRECATED_CLIENT_DARK="client_dark",t.BRIGHT_LIGHT="bright_light",t.SPACE_GRAY="space_gray",t))(A||{}),pe=(t=>(t.VKAPPS="vkapps",t.INTERNAL="internal",t))(pe||{});function Se(){return Q(k.platform)||g(Z())}function ce(t,e=Z()){return`${t} ${t}--${e}`}function q(...t){let e=[];return t.forEach(a=>{if(!!a)switch(typeof a){case"string":e.push(a);break;case"object":Object.keys(a).forEach(s=>{a[s]&&e.push(s)});break;default:e.push(`${a}`)}}),e.join(" ")}const Ee="AdaptivityContext";var J=(t=>(t.COMPACT="compact",t.REGULAR="regular",t))(J||{});const Ge=1280,Oe=1024,We=768,Ue=320,Ye=414,Be=720,ve=(t,e,a)=>{var f,o;let s=1,l=2,i="regular",n="regular",v=(f=a.hasMouse)!=null?f:de,c=(o=a.deviceHasHover)!=null?o:me;return t>=Ge?s=5:t>=Oe?s=4:t>=We?s=3:t>=Ue?s=2:s=1,e>=Be?l=3:e>Ye?l=2:l=1,a.viewWidth&&(s=a.viewWidth),a.viewHeight&&(l=a.viewHeight),s<=2&&(n="compact"),(s>=3&&v||l<=1)&&(i="compact"),a.sizeX&&(n=a.sizeX),a.sizeY&&(i=a.sizeY),{viewWidth:s,viewHeight:l,sizeX:n,sizeY:i,hasMouse:v,deviceHasHover:c}};function ht(){return Q(Ee)||g({sizeX:J.COMPACT,sizeY:J.REGULAR,hasMouse:de,deviceHasHover:me})}function Xe(t){let e;const a=t[9].default,s=Y(a,t,t[8],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,i){s&&s.m(l,i),e=!0},p(l,[i]){s&&s.p&&(!e||i&256)&&B(s,a,l,l[8],e?F(a,l[8],i,null):X(l[8]),null)},i(l){e||(p(s,l),e=!0)},o(l){E(s,l),e=!1},d(l){s&&s.d(l)}}}function Fe(t,e,a){let s,{$$slots:l={},$$scope:i}=e,{contentWindow:n=V().window}=e,{sizeX:v=void 0}=e,{sizeY:c=void 0}=e,{viewWidth:f=void 0}=e,{viewHeight:o=void 0}=e,{hasMouse:m=void 0}=e,{deviceHasHover:u=void 0}=e,r=g(ve(n==null?void 0:n.innerWidth,n==null?void 0:n.innerHeight,{sizeX:v,sizeY:c,viewWidth:f,viewHeight:o,hasMouse:m,deviceHasHover:u}));x(t,r,_=>a(10,s=_)),C(Ee,r);const d=()=>{const _=ve(n==null?void 0:n.innerWidth,n==null?void 0:n.innerHeight,{sizeX:v,sizeY:c,viewWidth:f,viewHeight:o,hasMouse:m,deviceHasHover:u});(s.viewWidth!==_.viewWidth||s.viewHeight!==_.viewHeight||s.sizeX!==_.sizeX||s.sizeY!==_.sizeY||s.hasMouse!==_.hasMouse||s.deviceHasHover!==_.deviceHasHover)&&r.set(_)};return Ie(()=>{d()}),Te(()=>{n==null||n.addEventListener("resize",d,!1)}),He(()=>{n==null||n.removeEventListener("resize",d,!1)}),t.$$set=_=>{"contentWindow"in _&&a(1,n=_.contentWindow),"sizeX"in _&&a(2,v=_.sizeX),"sizeY"in _&&a(3,c=_.sizeY),"viewWidth"in _&&a(4,f=_.viewWidth),"viewHeight"in _&&a(5,o=_.viewHeight),"hasMouse"in _&&a(6,m=_.hasMouse),"deviceHasHover"in _&&a(7,u=_.deviceHasHover),"$$scope"in _&&a(8,i=_.$$scope)},[r,n,v,c,f,o,m,u,i,l]}class Ke extends O{constructor(e){super();W(this,e,Fe,Xe,U,{contentWindow:1,sizeX:2,sizeY:3,viewWidth:4,viewHeight:5,hasMouse:6,deviceHasHover:7})}}var w=(t=>(t.BRIGHT_LIGHT="bright_light",t.SPACE_GRAY="space_gray",t.VKCOM_LIGHT="vkcom_light",t.VKCOM_DARK="vkcom_dark",t))(w||{});function Ze({platform:t,appearance:e}){switch(e){case"dark":switch(t){case oe:return w.VKCOM_DARK;default:return w.SPACE_GRAY}case"light":switch(t){case oe:return w.VKCOM_LIGHT;default:return w.BRIGHT_LIGHT}}}function je(t){let e;const a=t[6].default,s=Y(a,t,t[5],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,i){s&&s.m(l,i),e=!0},p(l,[i]){s&&s.p&&(!e||i&32)&&B(s,a,l,l[5],e?F(a,l[5],i,null):X(l[5]),null)},i(l){e||(p(s,l),e=!0)},o(l){E(s,l),e=!1},d(l){s&&s.d(l)}}}const qe=(t,e)=>{let a;switch(t){case G.ANDROID:a="vkBase";break;case G.IOS:a="vkIOS";break;case G.VKCOM:a="vkCom";break;default:a=t}return`vkui--${a}--${e}`},Je=(t,e)=>{var a;(a=e||V().document)==null||a.body.setAttribute("scheme",t)},Qe=(t,e,a)=>{var s;(s=a||V().document)==null||s.body.setAttribute("class",qe(t,e))};function xe(t,e,a){let s,l,{$$slots:i={},$$scope:n}=e,{appearance:v="light"}=e,{scheme:c=void 0}=e;const f=Se();x(t,f,u=>a(4,l=u));let o=g(s),m=g(v);return C(k.scheme,o),C(k.appearance,m),t.$$set=u=>{a(9,e=I(I({},e),T(u))),"appearance"in u&&a(1,v=u.appearance),"scheme"in u&&a(2,c=u.scheme),"$$scope"in u&&a(5,n=u.$$scope)},t.$$.update=()=>{t.$$.dirty&22&&a(3,s=c||Ze({platform:l,appearance:v})),t.$$.dirty&8&&o.set(s),t.$$.dirty&2&&m.set(v),Je(c,e.document),Qe(l,v,e.document)},e=T(e),[f,v,c,s,l,n,i]}class $e extends O{constructor(e){super();W(this,e,xe,je,U,{appearance:1,scheme:2})}}function et(t){let e;const a=t[12].default,s=Y(a,t,t[13],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,i){s&&s.m(l,i),e=!0},p(l,i){s&&s.p&&(!e||i&8192)&&B(s,a,l,l[13],e?F(a,l[13],i,null):X(l[13]),null)},i(l){e||(p(s,l),e=!0)},o(l){E(s,l),e=!1},d(l){s&&s.d(l)}}}function tt(t){let e,a;return e=new $e({props:{appearance:t[1],scheme:t[0],$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){ye(e.$$.fragment)},l(s){ge(e.$$.fragment,s)},m(s,l){be(e,s,l),a=!0},p(s,l){const i={};l&2&&(i.appearance=s[1]),l&1&&(i.scheme=s[0]),l&8192&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){a||(p(e.$$.fragment,s),a=!0)},o(s){E(e.$$.fragment,s),a=!1},d(s){ke(e,s)}}}function st(t){let e,a;return e=new Ke({props:{contentWindow:t[2],sizeX:t[3],sizeY:t[4],viewWidth:t[5],$$slots:{default:[tt]},$$scope:{ctx:t}}}),{c(){ye(e.$$.fragment)},l(s){ge(e.$$.fragment,s)},m(s,l){be(e,s,l),a=!0},p(s,[l]){const i={};l&4&&(i.contentWindow=s[2]),l&8&&(i.sizeX=s[3]),l&16&&(i.sizeY=s[4]),l&32&&(i.viewWidth=s[5]),l&8195&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){a||(p(e.$$.fragment,s),a=!0)},o(s){E(e.$$.fragment,s),a=!1},d(s){ke(e,s)}}}const at=t=>{switch(t){case A.DEPRECATED_CLIENT_LIGHT:return A.BRIGHT_LIGHT;case A.DEPRECATED_CLIENT_DARK:return A.SPACE_GRAY;default:return t}},lt=(t,e)=>{var a;(a=e||V().document)==null||a.body.setAttribute("scheme",t)};function it(t,e,a){let{$$slots:s={},$$scope:l}=e,{scheme:i="bright_light"}=e,{isWebView:n=!1}=e,{webviewType:v=pe.VKAPPS}=e,{app:c=void 0}=e,{appearance:f="light"}=e,{transitionMotionEnabled:o=!0}=e,{platform:m=Z()}=e,{hasNewTokens:u=!1}=e,{contentWindow:r=V().window}=e,{sizeX:d=void 0}=e,{sizeY:_=void 0}=e,{viewWidth:b=void 0}=e,R=g(n),H=g(v),y=g(c),ee=g(o),te=g(m),se=g(r),ae=g(u);return C(k.isWebView,R),C(k.webviewType,H),C(k.app,y),C(k.transitionMotionEnabled,ee),C(k.platform,te),C(k.contentWindow,se),C(k.hasNewTokens,ae),t.$$set=h=>{a(21,e=I(I({},e),T(h))),"scheme"in h&&a(0,i=h.scheme),"isWebView"in h&&a(6,n=h.isWebView),"webviewType"in h&&a(7,v=h.webviewType),"app"in h&&a(8,c=h.app),"appearance"in h&&a(1,f=h.appearance),"transitionMotionEnabled"in h&&a(9,o=h.transitionMotionEnabled),"platform"in h&&a(10,m=h.platform),"hasNewTokens"in h&&a(11,u=h.hasNewTokens),"contentWindow"in h&&a(2,r=h.contentWindow),"sizeX"in h&&a(3,d=h.sizeX),"sizeY"in h&&a(4,_=h.sizeY),"viewWidth"in h&&a(5,b=h.viewWidth),"$$scope"in h&&a(13,l=h.$$scope)},t.$$.update=()=>{t.$$.dirty&64&&R.set(n),t.$$.dirty&128&&H.set(v),t.$$.dirty&256&&y.set(c),t.$$.dirty&512&&ee.set(o),t.$$.dirty&1024&&te.set(m),t.$$.dirty&4&&se.set(r),t.$$.dirty&2048&&ae.set(u),lt(at(i),e.document)},e=T(e),[i,f,r,d,_,b,n,v,c,o,m,u,s,l]}class dt extends O{constructor(e){super();W(this,e,it,st,U,{scheme:0,isWebView:6,webviewType:7,app:8,appearance:1,transitionMotionEnabled:9,platform:10,hasNewTokens:11,contentWindow:2,sizeX:3,sizeY:4,viewWidth:5})}}const nt="SSRContext",j={};function _t(t){if(j[t])return j[t];const e=Z(t);let a=null;e===$&&(a=rt(t));const s={userAgent:t,platform:e,platformVersion:a};return j[t]=s,s}function rt(t){if(!t)return null;const e=t.match(/(iphone os|cpu os|ios) \b([0-9]+_[0-9]+(?:_[0-9]+)?)\b/i);if(!e)return null;const[a,s,l]=e[2].replace(/_/g,".").split(".");return{major:parseInt(a)||0,minor:parseInt(s)||0,patch:parseInt(l)||0}}function ot(){const t=Q(nt);let e=M&&navigator.userAgent?navigator.userAgent:"";return t&&t.platform&&(e=t.userAgent),_t(e)}function ue(t,e,a){const s=t.slice();return s[16]=e[a],s}function fe(t){let e,a;return{c(){e=z("div"),this.h()},l(s){e=P(s,"DIV",{class:!0,style:!0}),L(e).forEach(S),this.h()},h(){D(e,"class","UsersStack__photo svelte-1r1itkb"),D(e,"style",a=`background-image: url(${t[16]})`)},m(s,l){K(s,e,l)},p:Ce,d(s){s&&S(e)}}}function ct(t){let e,a=`+${t[5]}`,s,l;return{c(){e=z("div"),s=we(a),this.h()},l(i){e=P(i,"DIV",{class:!0});var n=L(e);s=Me(n,a),n.forEach(S),this.h()},h(){D(e,"class",l=ze(q("UsersStack__photo","UsersStack__photo--others"))+" svelte-1r1itkb")},m(i,n){K(i,e,n),N(e,s)},p:Ce,d(i){i&&S(e)}}}function he(t){let e,a;const s=t[14].default,l=Y(s,t,t[13],null);return{c(){e=z("div"),l&&l.c(),this.h()},l(i){e=P(i,"DIV",{class:!0});var n=L(e);l&&l.l(n),n.forEach(S),this.h()},h(){D(e,"class","UsersStack__text svelte-1r1itkb")},m(i,n){K(i,e,n),l&&l.m(e,null),a=!0},p(i,n){l&&l.p&&(!a||n&8192)&&B(l,s,i,i[13],a?F(s,i[13],n,null):X(i[13]),null)},i(i){a||(p(l,i),a=!0)},o(i){E(l,i),a=!1},d(i){i&&S(e),l&&l.d(i)}}}function vt(t){let e,a,s,l,i,n,v=t[7],c=[];for(let r=0;r<v.length;r+=1)c[r]=fe(ue(t,v,r));let f=t[6]&&ct(t),o=t[10].default&&he(t),m=[t[8],{class:i=q(ce("UsersStack",t[3]),`UsersStack--size-${t[0]}`,`UsersStack--l-${t[1]}`,{"UsersStack--others":t[6],"UsersStack--simple":!t[2]},t[9].class)}],u={};for(let r=0;r<m.length;r+=1)u=I(u,m[r]);return{c(){e=z("div"),a=z("div");for(let r=0;r<c.length;r+=1)c[r].c();s=le(),f&&f.c(),l=le(),o&&o.c(),this.h()},l(r){e=P(r,"DIV",{class:!0});var d=L(e);a=P(d,"DIV",{class:!0});var _=L(a);for(let b=0;b<c.length;b+=1)c[b].l(_);s=ie(_),f&&f.l(_),_.forEach(S),l=ie(d),o&&o.l(d),d.forEach(S),this.h()},h(){D(a,"class","UsersStack__photos svelte-1r1itkb"),ne(e,u),_e(e,"svelte-1r1itkb",!0)},m(r,d){K(r,e,d),N(e,a);for(let _=0;_<c.length;_+=1)c[_].m(a,null);N(a,s),f&&f.m(a,null),N(e,l),o&&o.m(e,null),n=!0},p(r,[d]){if(d&128){v=r[7];let _;for(_=0;_<v.length;_+=1){const b=ue(r,v,_);c[_]?c[_].p(b,d):(c[_]=fe(b),c[_].c(),c[_].m(a,s))}for(;_<c.length;_+=1)c[_].d(1);c.length=v.length}r[6]&&f.p(r,d),r[10].default?o?(o.p(r,d),d&1024&&p(o,1)):(o=he(r),o.c(),p(o,1),o.m(e,null)):o&&(Pe(),E(o,1,1,()=>{o=null}),Le()),ne(e,u=De(m,[d&256&&r[8],(!n||d&527&&i!==(i=q(ce("UsersStack",r[3]),`UsersStack--size-${r[0]}`,`UsersStack--l-${r[1]}`,{"UsersStack--others":r[6],"UsersStack--simple":!r[2]},r[9].class)))&&{class:i}])),_e(e,"svelte-1r1itkb",!0)},i(r){n||(p(o),n=!0)},o(r){E(o),n=!1},d(r){r&&S(e),Ve(c,r),f&&f.d(),o&&o.d()}}}if(M){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttributeNS(null,"id","__SVG_MASKS_NODE__"),t.setAttributeNS(null,"width","0"),t.setAttributeNS(null,"height","0"),t.style.position="absolute",t.style.width="0px",t.style.height="0px",t.innerHTML=`<defs>
  <clipPath id="users_stack_mask_24_left">
    <path d="M3.9971785,12 C3.9971785,9.49005736 3.33667467,7.13438366 2.18,5.09731189 C4.35181237,2.01417617 7.93927741,0 11.9971785,0 C18.6245955,0 23.9971785,5.372583 23.9971785,12 C23.9971785,18.627417 18.6245955,24 11.9971785,24 C7.93927741,24 4.35181237,21.9858238 2.18,18.9026881 C3.33667467,16.8656163 3.9971785,14.5099426 3.9971785,12 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_24_right">
    <path d="M21.8171785,5.09731189 C20.6605038,7.13438366 20,9.49005736 20,12 C20,14.5099426 20.6605038,16.8656163 21.8171785,18.9026881 C19.6453661,21.9858238 16.0579011,24 12,24 C5.372583,24 3.90798505e-14,18.627417 3.90798505e-14,12 C3.90798505e-14,5.372583 5.372583,0 12,0 C16.0579011,0 19.6453661,2.01417617 21.8171785,5.09731189 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_32_left">
    <path d="M2.13430019,23.9892466 C3.32858917,21.5820026 4,18.8694095 4,16 C4,13.1305905 3.32858917,10.4179974 2.13430019,8.0107534 C4.89924175,3.22241289 10.0733034,-2.30926389e-14 16,-2.30926389e-14 C24.836556,-2.30926389e-14 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C10.0733034,32 4.89924175,28.7775871 2.13430019,23.9892466 L2.13430019,23.9892466 Z"></path>
  </clipPath>

  <clipPath id="users_stack_mask_32_right">
    <path d="M29.8656998,8.0107534 C28.6714108,10.4179974 28,13.1305905 28,16 C28,18.8694095 28.6714108,21.5820026 29.8656998,23.9892466 C27.1007583,28.7775871 21.9266966,32 16,32 C7.163444,32 3.90798505e-14,24.836556 3.90798505e-14,16 C3.90798505e-14,7.163444 7.163444,0 16,0 C21.9266966,0 27.1007583,3.22241289 29.8656998,8.0107534 Z"></path>
  </clipPath>
</defs>`,Ae(()=>{document.body.appendChild(t)})}function ut(t,e,a){const s=["photos","size","layout","visibleCount"];let l=re(e,s),i,{$$slots:n={},$$scope:v}=e;const c=Re(n);let{photos:f=[]}=e,{size:o="s"}=e,{layout:m="horizontal"}=e,{visibleCount:u=3}=e;const{platformVersion:r}=ot(),d=Se();x(t,d,y=>a(3,i=y));const _=Math.max(0,f.length-u),b=_>0&&o==="m",R=f.slice(0,u);let H=!0;return i===$&&(H=r&&r.major>=12),t.$$set=y=>{a(9,e=I(I({},e),T(y))),a(8,l=re(e,s)),"photos"in y&&a(11,f=y.photos),"size"in y&&a(0,o=y.size),"layout"in y&&a(1,m=y.layout),"visibleCount"in y&&a(12,u=y.visibleCount),"$$scope"in y&&a(13,v=y.$$scope)},e=T(e),[o,m,H,i,d,_,b,R,l,e,c,f,u,v,n]}class mt extends O{constructor(e){super();W(this,e,ut,vt,U,{photos:11,size:0,layout:1,visibleCount:12})}}export{Ne as A,dt as C,Ge as D,$ as I,Ue as M,G as P,J as S,Oe as T,mt as U,oe as V,pe as W,ht as a,V as b,q as c,A as d,We as e,Ye as f,ce as g,Be as h,ve as i,k as j,Se as u};
