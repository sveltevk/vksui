import{S as y,i as z,s as A,e as E,t as v,c as d,a as b,h as P,d as o,g as u,a0 as R,j as N,k as S,l as C,m as j,a1 as H}from"./chunks/vendor-cd9acbd1.js";function h(r){let l,s=r[1].frame+"",t;return{c(){l=E("pre"),t=v(s)},l(f){l=d(f,"PRE",{});var a=b(l);t=P(a,s),a.forEach(o)},m(f,a){u(f,l,a),R(l,t)},p(f,a){a&2&&s!==(s=f[1].frame+"")&&N(t,s)},d(f){f&&o(l)}}}function w(r){let l,s=r[1].stack+"",t;return{c(){l=E("pre"),t=v(s)},l(f){l=d(f,"PRE",{});var a=b(l);t=P(a,s),a.forEach(o)},m(f,a){u(f,l,a),R(l,t)},p(f,a){a&2&&s!==(s=f[1].stack+"")&&N(t,s)},d(f){f&&o(l)}}}function B(r){let l,s,t,f,a=r[1].message+"",c,k,n,p,i=r[1].frame&&h(r),_=r[1].stack&&w(r);return{c(){l=E("h1"),s=v(r[0]),t=S(),f=E("pre"),c=v(a),k=S(),i&&i.c(),n=S(),_&&_.c(),p=C()},l(e){l=d(e,"H1",{});var m=b(l);s=P(m,r[0]),m.forEach(o),t=j(e),f=d(e,"PRE",{});var q=b(f);c=P(q,a),q.forEach(o),k=j(e),i&&i.l(e),n=j(e),_&&_.l(e),p=C()},m(e,m){u(e,l,m),R(l,s),u(e,t,m),u(e,f,m),R(f,c),u(e,k,m),i&&i.m(e,m),u(e,n,m),_&&_.m(e,m),u(e,p,m)},p(e,[m]){m&1&&N(s,e[0]),m&2&&a!==(a=e[1].message+"")&&N(c,a),e[1].frame?i?i.p(e,m):(i=h(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,m):(_=w(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:H,o:H,d(e){e&&o(l),e&&o(t),e&&o(f),e&&o(k),i&&i.d(e),e&&o(n),_&&_.d(e),e&&o(p)}}}function G({error:r,status:l}){return{props:{error:r,status:l}}}function D(r,l,s){let{status:t}=l,{error:f}=l;return r.$$set=a=>{"status"in a&&s(0,t=a.status),"error"in a&&s(1,f=a.error)},[t,f]}class I extends y{constructor(l){super();z(this,l,D,B,A,{status:0,error:1})}}export{I as default,G as load};
