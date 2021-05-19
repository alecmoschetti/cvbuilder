var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,l){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const l=e.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}(n,l))}function c(t,e,n,l){if(t){const o=a(t,e,n,l);return t[0](o)}}function a(t,e,n,l){return t[1]&&l?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](l(e))):n.ctx}function r(t,e,n,l,o,i,s){const c=function(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let l=0;l<n;l+=1)t[l]=e.dirty[l]|o[l];return t}return e.dirty|o}return e.dirty}(e,l,o,i);if(c){const o=a(e,n,l,s);t.p(o,c)}}function u(t,e,n=e){return t.set(n),e}function d(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function b(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function $(t){return function(e){e.target===this&&t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}let C;function k(t){C=t}function E(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const _=[],L=[],T=[],B=[],M=Promise.resolve();let P=!1;function z(t){T.push(t)}let D=!1;const A=new Set;function H(){if(!D){D=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];k(e),O(e.$$)}for(k(null),_.length=0;L.length;)L.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];A.has(e)||(A.add(e),e())}T.length=0}while(_.length);for(;B.length;)B.pop()();P=!1,D=!1,A.clear()}}function O(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const j=new Set;let N;function S(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Y(t,e,n,l){if(t&&t.o){if(j.has(t))return;j.add(t),N.c.push((()=>{j.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function F(t){t&&t.c()}function W(t,n,i,s){const{fragment:c,on_mount:a,on_destroy:r,after_update:u}=t.$$;c&&c.m(n,i),s||z((()=>{const n=a.map(e).filter(o);r?r.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(z)}function I(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(_.push(t),P||(P=!0,M.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,o,i,s,c,a,r=[-1]){const u=C;k(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:o.context||[]),callbacks:n(),dirty:r,skip_bound:!1};let f=!1;if(d.ctx=i?i(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),f&&q(e,t)),n})):[],d.update(),f=!0,l(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();o.intro&&S(e.$$.fragment),W(e,o.target,o.anchor,o.customElement),H()}k(u)}class Z{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t){let e,n;const l=t[1].default,o=c(l,t,t[0],null);return{c(){e=m("div"),o&&o.c(),y(e,"class","wrapper svelte-5smc6g")},m(t,l){f(t,e,l),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&r(o,l,t,t[0],e,null,null)},i(t){n||(S(o,t),n=!0)},o(t){Y(o,t),n=!1},d(t){t&&p(e),o&&o.d(t)}}}function J(t,e,n){let{$$slots:l={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,l]}class K extends Z{constructor(t){super(),V(this,t,J,G,i,{})}}const Q=[];function R(e,n=t){let l;const o=[];function s(t){if(i(e,t)&&(e=t,l)){const t=!Q.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Q.push(n,e)}if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const a=[i,c];return o.push(a),1===o.length&&(l=n(s)||t),i(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(l(),l=null)}}}}const U=R({name:"",title:"",email:"",phone:""}),X=R([]),tt=R([]);function et(t,e,n){const l=t.slice();return l[3]=e[n],l}function nt(t,e,n){const l=t.slice();return l[6]=e[n],l}function lt(e){let n;return{c(){n=g("- Present")},m(t,e){f(t,n,e)},p:t,d(t){t&&p(n)}}}function ot(t){let e,n,l=t[6].end+"";return{c(){e=g("To: "),n=g(l)},m(t,l){f(t,e,l),f(t,n,l)},p(t,e){2&e&&l!==(l=t[6].end+"")&&x(n,l)},d(t){t&&p(e),t&&p(n)}}}function it(t){let e,n,l,o,i,s,c,a,r,u,h,b,$=t[6].school+"",w=t[6].focus+"",C=t[6].start+"";function k(t,e){return!1===t[6].ongoing?ot:lt}let E=k(t),_=E(t);return{c(){e=m("div"),n=m("p"),l=g($),o=v(),i=m("p"),s=g(w),c=v(),a=m("p"),r=g("From: "),u=g(C),h=v(),_.c(),b=v(),y(e,"class","info svelte-1pf2e6l")},m(t,p){f(t,e,p),d(e,n),d(n,l),d(e,o),d(e,i),d(i,s),d(e,c),d(e,a),d(a,r),d(a,u),d(a,h),_.m(a,null),d(e,b)},p(t,e){2&e&&$!==($=t[6].school+"")&&x(l,$),2&e&&w!==(w=t[6].focus+"")&&x(s,w),2&e&&C!==(C=t[6].start+"")&&x(u,C),E===(E=k(t))&&_?_.p(t,e):(_.d(1),_=E(t),_&&(_.c(),_.m(a,null)))},d(t){t&&p(e),_.d()}}}function st(e){let n;return{c(){n=g("- Present")},m(t,e){f(t,n,e)},p:t,d(t){t&&p(n)}}}function ct(t){let e,n,l=t[3].end+"";return{c(){e=g("To: "),n=g(l)},m(t,l){f(t,e,l),f(t,n,l)},p(t,e){4&e&&l!==(l=t[3].end+"")&&x(n,l)},d(t){t&&p(e),t&&p(n)}}}function at(t){let e,n,l,o,i,s,c,a,r,u,h,b,$=t[3].title+"",w=t[3].organization+"",C=t[3].start+"";function k(t,e){return!1===t[3].ongoing?ct:st}let E=k(t),_=E(t);return{c(){e=m("div"),n=m("p"),l=g($),o=v(),i=m("p"),s=g(w),c=v(),a=m("p"),r=g("From : "),u=g(C),h=v(),_.c(),b=v(),y(e,"class","info svelte-1pf2e6l")},m(t,p){f(t,e,p),d(e,n),d(n,l),d(e,o),d(e,i),d(i,s),d(e,c),d(e,a),d(a,r),d(a,u),d(a,h),_.m(a,null),d(e,b)},p(t,e){4&e&&$!==($=t[3].title+"")&&x(l,$),4&e&&w!==(w=t[3].organization+"")&&x(s,w),4&e&&C!==(C=t[3].start+"")&&x(u,C),E===(E=k(t))&&_?_.p(t,e):(_.d(1),_=E(t),_&&(_.c(),_.m(a,null)))},d(t){t&&p(e),_.d()}}}function rt(e){let n,l,o,i,s,c,a,r,u,b,$,w,C,k,E,_,L,T,B,M,P,z,D,A,H=e[0].name+"",O=e[0].title+"",j=e[0].email+"",N=e[0].phone+"",S=e[1],Y=[];for(let t=0;t<S.length;t+=1)Y[t]=it(nt(e,S,t));let F=e[2],W=[];for(let t=0;t<F.length;t+=1)W[t]=at(et(e,F,t));return{c(){n=m("div"),l=m("div"),o=m("div"),i=m("h2"),s=g(H),c=v(),a=m("h3"),r=g(O),u=v(),b=m("aside"),$=m("p"),w=g(j),C=v(),k=m("p"),E=g(N),_=v(),L=m("section"),T=m("div"),B=m("div"),B.innerHTML="<h4>Education</h4>",M=v();for(let t=0;t<Y.length;t+=1)Y[t].c();P=v(),z=m("div"),D=m("div"),D.innerHTML="<h4>Work Experience</h4>",A=v();for(let t=0;t<W.length;t+=1)W[t].c();y(l,"class","hero svelte-1pf2e6l"),y(B,"class","subhead svelte-1pf2e6l"),y(T,"class","education"),y(D,"class","subhead svelte-1pf2e6l"),y(z,"class","work"),y(L,"class","svelte-1pf2e6l"),y(n,"class","outer__template svelte-1pf2e6l")},m(t,e){f(t,n,e),d(n,l),d(l,o),d(o,i),d(i,s),d(o,c),d(o,a),d(a,r),d(l,u),d(l,b),d(b,$),d($,w),d(b,C),d(b,k),d(k,E),d(n,_),d(n,L),d(L,T),d(T,B),d(T,M);for(let t=0;t<Y.length;t+=1)Y[t].m(T,null);d(L,P),d(L,z),d(z,D),d(z,A);for(let t=0;t<W.length;t+=1)W[t].m(z,null)},p(t,[e]){if(1&e&&H!==(H=t[0].name+"")&&x(s,H),1&e&&O!==(O=t[0].title+"")&&x(r,O),1&e&&j!==(j=t[0].email+"")&&x(w,j),1&e&&N!==(N=t[0].phone+"")&&x(E,N),2&e){let n;for(S=t[1],n=0;n<S.length;n+=1){const l=nt(t,S,n);Y[n]?Y[n].p(l,e):(Y[n]=it(l),Y[n].c(),Y[n].m(T,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=S.length}if(4&e){let n;for(F=t[2],n=0;n<F.length;n+=1){const l=et(t,F,n);W[n]?W[n].p(l,e):(W[n]=at(l),W[n].c(),W[n].m(z,null))}for(;n<W.length;n+=1)W[n].d(1);W.length=F.length}},i:t,o:t,d(t){t&&p(n),h(Y,t),h(W,t)}}}function ut(t,e,n){let l,o,i;return s(t,U,(t=>n(0,l=t))),s(t,tt,(t=>n(1,o=t))),s(t,X,(t=>n(2,i=t))),[l,o,i]}class dt extends Z{constructor(t){super(),V(this,t,ut,rt,i,{})}}const ft=t=>({}),pt=t=>({});function ht(t){let e,n,o,i,s,a,u,h,g,x;const w=t[1].content,C=c(w,t,t[0],pt);return{c(){e=m("section"),n=m("div"),o=m("div"),i=m("div"),s=m("button"),s.innerHTML='<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path xmlns="http://www.w3.org/2000/svg" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"></path></svg>',a=v(),u=m("div"),C&&C.c(),y(s,"class","svelte-b3764h"),y(i,"class","modal-close svelte-b3764h"),y(u,"class","modal-content svelte-b3764h"),y(o,"class","modal-content-wrapper svelte-b3764h"),y(n,"class","modal-backdrop svelte-b3764h"),y(e,"class","modal svelte-b3764h")},m(l,c){var r;f(l,e,c),d(e,n),d(n,o),d(o,i),d(i,s),d(o,a),d(o,u),C&&C.m(u,null),h=!0,g||(x=[b(s,"click",t[3]),b(n,"click",$((r=t[2],function(t){return t.stopPropagation(),r.call(this,t)})))],g=!0)},p(t,[e]){C&&C.p&&1&e&&r(C,w,t,t[0],e,ft,pt)},i(t){h||(S(C,t),h=!0)},o(t){Y(C,t),h=!1},d(t){t&&p(e),C&&C.d(t),g=!1,l(x)}}}function mt(t,e,n){let{$$slots:l={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,l,function(e){E(t,e)},function(e){E(t,e)}]}class gt extends Z{constructor(t){super(),V(this,t,mt,ht,i,{})}}function vt(e){let n,o,i,s,c,a,r,u,h,g,$,x,C,k,E,_,L,T,B,M,P;return{c(){n=m("section"),o=m("div"),o.innerHTML='<h3 class="svelte-8ewha1">Personal Info</h3>',i=v(),s=m("div"),c=m("label"),c.textContent="Name:",a=v(),r=m("input"),u=v(),h=m("label"),h.textContent="Title:",g=v(),$=m("input"),x=v(),C=m("label"),C.textContent="Email:",k=v(),E=m("input"),_=v(),L=m("label"),L.textContent="Phone:",T=v(),B=m("input"),y(c,"for","name"),y(c,"class","svelte-8ewha1"),y(r,"type","text"),y(r,"name","name"),y(r,"placeholder","Your full name"),y(r,"class","svelte-8ewha1"),y(h,"for","title"),y(h,"class","svelte-8ewha1"),y($,"type","text"),y($,"name","title"),y($,"placeholder","Your current title here"),y($,"class","svelte-8ewha1"),y(C,"for","email"),y(C,"class","svelte-8ewha1"),y(E,"type","email"),y(E,"name","email"),y(E,"placeholder","Your email here"),y(E,"class","svelte-8ewha1"),y(L,"for","phone"),y(L,"class","svelte-8ewha1"),y(B,"type","phone"),y(B,"name","phone"),y(B,"placeholder","Your phone number here"),y(B,"class","svelte-8ewha1"),y(s,"class","inputs-wrapper svelte-8ewha1"),y(n,"class","svelte-8ewha1")},m(t,l){f(t,n,l),d(n,o),d(n,i),d(n,s),d(s,c),d(s,a),d(s,r),w(r,e[0].name),d(s,u),d(s,h),d(s,g),d(s,$),w($,e[0].title),d(s,x),d(s,C),d(s,k),d(s,E),w(E,e[0].email),d(s,_),d(s,L),d(s,T),d(s,B),w(B,e[0].phone),M||(P=[b(r,"input",e[1]),b($,"input",e[2]),b(E,"input",e[3]),b(B,"input",e[4])],M=!0)},p(t,[e]){1&e&&r.value!==t[0].name&&w(r,t[0].name),1&e&&$.value!==t[0].title&&w($,t[0].title),1&e&&E.value!==t[0].email&&w(E,t[0].email),1&e&&w(B,t[0].phone)},i:t,o:t,d(t){t&&p(n),M=!1,l(P)}}}function bt(t,e,n){let l;return s(t,U,(t=>n(0,l=t))),[l,function(){l.name=this.value,U.set(l)},function(){l.title=this.value,U.set(l)},function(){l.email=this.value,U.set(l)},function(){l.phone=this.value,U.set(l)}]}class $t extends Z{constructor(t){super(),V(this,t,bt,vt,i,{})}}function yt(t,e,n){const l=t.slice();return l[10]=e[n],l[11]=e,l[12]=n,l}function xt(t){let e;return{c(){e=m("div"),e.innerHTML="<p>Add Educational or Training Experience</p> \n    "},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function wt(t){let e,n,l,o,i,s;function c(){t[6].call(l,t[11],t[12])}return{c(){e=m("label"),e.textContent="Date ended:",n=v(),l=m("input"),y(e,"for","to"),y(e,"class","svelte-i79y0d"),y(l,"type","month"),y(l,"name","to"),y(l,"placeholder","to"),l.disabled=o=t[10].editable,y(l,"class","svelte-i79y0d")},m(o,a){f(o,e,a),f(o,n,a),f(o,l,a),w(l,t[10].end),i||(s=b(l,"input",c),i=!0)},p(e,n){t=e,1&n&&o!==(o=t[10].editable)&&(l.disabled=o),1&n&&w(l,t[10].end)},d(t){t&&p(e),t&&p(n),t&&p(l),i=!1,s()}}}function Ct(t){let e,n,o,i,s,c,a,r,u,h,$,C,k,E,_,L,T,B,M,P,z,D,A,H,O,j,N,S,Y,F,W,I,q,V=t[10].editButton+"";function Z(){t[3].call(i,t[11],t[12])}function G(){t[4].call(u,t[11],t[12])}function J(){t[5].call(E,t[11],t[12])}let K=!1===t[10].ongoing&&wt(t);function Q(){t[7].call(z,t[11],t[12])}function R(){return t[8](t[12])}function U(){return t[9](t[10],t[11],t[12])}return{c(){e=m("div"),n=m("label"),n.textContent="School / Program:",o=v(),i=m("input"),c=v(),a=m("label"),a.textContent="Focus / Training:",r=v(),u=m("input"),$=v(),C=m("label"),C.textContent="Date started:",k=v(),E=m("input"),L=v(),K&&K.c(),T=v(),B=m("div"),M=m("label"),M.textContent="Ongoing?",P=v(),z=m("input"),A=v(),H=m("div"),O=m("button"),j=g("remove"),S=v(),Y=m("button"),F=g(V),W=v(),y(n,"for","position"),y(n,"class","svelte-i79y0d"),y(i,"type","text"),y(i,"name","position"),y(i,"placeholder","School"),i.disabled=s=t[10].editable,y(i,"class","svelte-i79y0d"),y(a,"for","company"),y(a,"class","svelte-i79y0d"),y(u,"type","text"),y(u,"name","company"),y(u,"placeholder","Degree / Certification"),u.disabled=h=t[10].editable,y(u,"class","svelte-i79y0d"),y(C,"for","start"),y(C,"class","svelte-i79y0d"),y(E,"type","month"),y(E,"name","start"),y(E,"placeholder","from"),E.disabled=_=t[10].editable,y(E,"class","svelte-i79y0d"),y(M,"for","activeEd"),y(M,"class","svelte-i79y0d"),y(z,"type","checkbox"),y(z,"name","activeEd"),z.disabled=D=t[10].editable,y(z,"class","svelte-i79y0d"),y(B,"class","ongoing svelte-i79y0d"),y(O,"class","delete svelte-i79y0d"),O.disabled=N=t[10].editable,y(Y,"class","save svelte-i79y0d"),y(H,"class","options svelte-i79y0d"),y(e,"class","inputs-wrapper svelte-i79y0d")},m(l,s){f(l,e,s),d(e,n),d(e,o),d(e,i),w(i,t[10].school),d(e,c),d(e,a),d(e,r),d(e,u),w(u,t[10].focus),d(e,$),d(e,C),d(e,k),d(e,E),w(E,t[10].start),d(e,L),K&&K.m(e,null),d(e,T),d(e,B),d(B,M),d(B,P),d(B,z),z.checked=t[10].ongoing,d(e,A),d(e,H),d(H,O),d(O,j),d(H,S),d(H,Y),d(Y,F),d(e,W),I||(q=[b(i,"input",Z),b(u,"input",G),b(E,"input",J),b(z,"change",Q),b(O,"click",R),b(Y,"click",U)],I=!0)},p(n,l){t=n,1&l&&s!==(s=t[10].editable)&&(i.disabled=s),1&l&&i.value!==t[10].school&&w(i,t[10].school),1&l&&h!==(h=t[10].editable)&&(u.disabled=h),1&l&&u.value!==t[10].focus&&w(u,t[10].focus),1&l&&_!==(_=t[10].editable)&&(E.disabled=_),1&l&&w(E,t[10].start),!1===t[10].ongoing?K?K.p(t,l):(K=wt(t),K.c(),K.m(e,T)):K&&(K.d(1),K=null),1&l&&D!==(D=t[10].editable)&&(z.disabled=D),1&l&&(z.checked=t[10].ongoing),1&l&&N!==(N=t[10].editable)&&(O.disabled=N),1&l&&V!==(V=t[10].editButton+"")&&x(F,V)},d(t){t&&p(e),K&&K.d(),I=!1,l(q)}}}function kt(e){let n,l,o,i,s,c,a,r,u=e[0],g=[];for(let t=0;t<u.length;t+=1)g[t]=Ct(yt(e,u,t));let $=null;return u.length||($=xt()),{c(){n=m("section"),l=m("div"),o=m("h3"),o.textContent="Education and Training",i=v(),s=m("button"),s.textContent="+",c=v();for(let t=0;t<g.length;t+=1)g[t].c();$&&$.c(),y(o,"class","svelte-i79y0d"),y(s,"class","add svelte-i79y0d"),y(l,"class","inputs-header"),y(n,"class","svelte-i79y0d")},m(t,u){f(t,n,u),d(n,l),d(l,o),d(l,i),d(l,s),d(n,c);for(let t=0;t<g.length;t+=1)g[t].m(n,null);$&&$.m(n,null),a||(r=b(s,"click",e[1]),a=!0)},p(t,[e]){if(5&e){let l;for(u=t[0],l=0;l<u.length;l+=1){const o=yt(t,u,l);g[l]?g[l].p(o,e):(g[l]=Ct(o),g[l].c(),g[l].m(n,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=u.length,u.length?$&&($.d(1),$=null):$||($=xt(),$.c(),$.m(n,null))}},i:t,o:t,d(t){t&&p(n),h(g,t),$&&$.d(),a=!1,r()}}}function Et(t,e,n){let l;function o(t){l.splice(t,1),u(tt,l=[...l],l)}s(t,tt,(t=>n(0,l=t)));return[l,function(){u(tt,l=[...l,{school:"",focus:"",start:"",end:"",ongoing:!1,editable:!1,editButton:"save"}],l)},o,function(t,e){t[e].school=this.value,tt.set(l)},function(t,e){t[e].focus=this.value,tt.set(l)},function(t,e){t[e].start=this.value,tt.set(l)},function(t,e){t[e].end=this.value,tt.set(l)},function(t,e){t[e].ongoing=this.checked,tt.set(l)},t=>o(t),(t,e,n)=>{u(tt,e[n].editable=!t.editable,l),"save"===t.editButton?u(tt,e[n].editButton="edit",l):u(tt,e[n].editButton="save",l)}]}class _t extends Z{constructor(t){super(),V(this,t,Et,kt,i,{})}}function Lt(t,e,n){const l=t.slice();return l[10]=e[n],l[11]=e,l[12]=n,l}function Tt(t){let e;return{c(){e=m("div"),e.innerHTML="<p>Add Work Experience</p> \n    "},m(t,n){f(t,e,n)},d(t){t&&p(e)}}}function Bt(t){let e,n,l,o,i,s;function c(){t[6].call(l,t[11],t[12])}return{c(){e=m("label"),e.textContent="Date ended:",n=v(),l=m("input"),y(e,"for","to"),y(e,"class","svelte-i79y0d"),y(l,"type","month"),y(l,"name","to"),y(l,"placeholder","to"),l.disabled=o=t[10].editable,y(l,"class","svelte-i79y0d")},m(o,a){f(o,e,a),f(o,n,a),f(o,l,a),w(l,t[10].end),i||(s=b(l,"input",c),i=!0)},p(e,n){t=e,1&n&&o!==(o=t[10].editable)&&(l.disabled=o),1&n&&w(l,t[10].end)},d(t){t&&p(e),t&&p(n),t&&p(l),i=!1,s()}}}function Mt(t){let e,n,o,i,s,c,a,r,u,h,$,C,k,E,_,L,T,B,M,P,z,D,A,H,O,j,N,S,Y,F,W,I,q,V=t[10].editButton+"";function Z(){t[3].call(i,t[11],t[12])}function G(){t[4].call(u,t[11],t[12])}function J(){t[5].call(E,t[11],t[12])}let K=!1===t[10].ongoing&&Bt(t);function Q(){t[7].call(z,t[11],t[12])}function R(){return t[8](t[12])}function U(){return t[9](t[10],t[11],t[12])}return{c(){e=m("div"),n=m("label"),n.textContent="Position:",o=v(),i=m("input"),c=v(),a=m("label"),a.textContent="Company:",r=v(),u=m("input"),$=v(),C=m("label"),C.textContent="Date started:",k=v(),E=m("input"),L=v(),K&&K.c(),T=v(),B=m("div"),M=m("label"),M.textContent="Ongoing?",P=v(),z=m("input"),A=v(),H=m("div"),O=m("button"),j=g("remove"),S=v(),Y=m("button"),F=g(V),W=v(),y(n,"for","position"),y(n,"class","svelte-i79y0d"),y(i,"type","text"),y(i,"name","position"),y(i,"placeholder","Position Title"),i.disabled=s=t[10].editable,y(i,"class","svelte-i79y0d"),y(a,"for","company"),y(a,"class","svelte-i79y0d"),y(u,"type","text"),y(u,"name","company"),y(u,"placeholder","Company / Organization"),u.disabled=h=t[10].editable,y(u,"class","svelte-i79y0d"),y(C,"for","start"),y(C,"class","svelte-i79y0d"),y(E,"type","month"),y(E,"name","start"),y(E,"placeholder","from"),E.disabled=_=t[10].editable,y(E,"class","svelte-i79y0d"),y(M,"for","activeEd"),y(M,"class","svelte-i79y0d"),y(z,"type","checkbox"),y(z,"name","activeEd"),z.disabled=D=t[10].editable,y(z,"class","svelte-i79y0d"),y(B,"class","ongoing svelte-i79y0d"),y(O,"class","delete svelte-i79y0d"),O.disabled=N=t[10].editable,y(Y,"class","save svelte-i79y0d"),y(H,"class","options svelte-i79y0d"),y(e,"class","inputs-wrapper svelte-i79y0d")},m(l,s){f(l,e,s),d(e,n),d(e,o),d(e,i),w(i,t[10].title),d(e,c),d(e,a),d(e,r),d(e,u),w(u,t[10].organization),d(e,$),d(e,C),d(e,k),d(e,E),w(E,t[10].start),d(e,L),K&&K.m(e,null),d(e,T),d(e,B),d(B,M),d(B,P),d(B,z),z.checked=t[10].ongoing,d(e,A),d(e,H),d(H,O),d(O,j),d(H,S),d(H,Y),d(Y,F),d(e,W),I||(q=[b(i,"input",Z),b(u,"input",G),b(E,"input",J),b(z,"change",Q),b(O,"click",R),b(Y,"click",U)],I=!0)},p(n,l){t=n,1&l&&s!==(s=t[10].editable)&&(i.disabled=s),1&l&&i.value!==t[10].title&&w(i,t[10].title),1&l&&h!==(h=t[10].editable)&&(u.disabled=h),1&l&&u.value!==t[10].organization&&w(u,t[10].organization),1&l&&_!==(_=t[10].editable)&&(E.disabled=_),1&l&&w(E,t[10].start),!1===t[10].ongoing?K?K.p(t,l):(K=Bt(t),K.c(),K.m(e,T)):K&&(K.d(1),K=null),1&l&&D!==(D=t[10].editable)&&(z.disabled=D),1&l&&(z.checked=t[10].ongoing),1&l&&N!==(N=t[10].editable)&&(O.disabled=N),1&l&&V!==(V=t[10].editButton+"")&&x(F,V)},d(t){t&&p(e),K&&K.d(),I=!1,l(q)}}}function Pt(e){let n,l,o,i,s,c,a,r,u=e[0],g=[];for(let t=0;t<u.length;t+=1)g[t]=Mt(Lt(e,u,t));let $=null;return u.length||($=Tt()),{c(){n=m("section"),l=m("div"),o=m("h3"),o.textContent="Work Experience",i=v(),s=m("button"),s.textContent="+",c=v();for(let t=0;t<g.length;t+=1)g[t].c();$&&$.c(),y(o,"class","svelte-i79y0d"),y(s,"class","svelte-i79y0d"),y(l,"class","inputs-header"),y(n,"class","svelte-i79y0d")},m(t,u){f(t,n,u),d(n,l),d(l,o),d(l,i),d(l,s),d(n,c);for(let t=0;t<g.length;t+=1)g[t].m(n,null);$&&$.m(n,null),a||(r=b(s,"click",e[1]),a=!0)},p(t,[e]){if(5&e){let l;for(u=t[0],l=0;l<u.length;l+=1){const o=Lt(t,u,l);g[l]?g[l].p(o,e):(g[l]=Mt(o),g[l].c(),g[l].m(n,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=u.length,u.length?$&&($.d(1),$=null):$||($=Tt(),$.c(),$.m(n,null))}},i:t,o:t,d(t){t&&p(n),h(g,t),$&&$.d(),a=!1,r()}}}function zt(t,e,n){let l;function o(t){l.splice(t,1),u(X,l=[...l],l)}s(t,X,(t=>n(0,l=t)));return[l,function(){u(X,l=[...l,{title:"",organization:"",start:"",end:"",ongoing:!1,editable:!1,editButton:"save"}],l)},o,function(t,e){t[e].title=this.value,X.set(l)},function(t,e){t[e].organization=this.value,X.set(l)},function(t,e){t[e].start=this.value,X.set(l)},function(t,e){t[e].end=this.value,X.set(l)},function(t,e){t[e].ongoing=this.checked,X.set(l)},t=>o(t),(t,e,n)=>{u(X,e[n].editable=!t.editable,l),"save"===t.editButton?u(X,e[n].editButton="edit",l):u(X,e[n].editButton="save",l)}]}class Dt extends Z{constructor(t){super(),V(this,t,zt,Pt,i,{})}}function At(e){let n,l,o,i,s,c,a;return l=new $t({}),i=new _t({}),c=new Dt({}),{c(){n=m("div"),F(l.$$.fragment),o=v(),F(i.$$.fragment),s=v(),F(c.$$.fragment),y(n,"class","inputs-wrapper svelte-1sai0mr")},m(t,e){f(t,n,e),W(l,n,null),d(n,o),W(i,n,null),d(n,s),W(c,n,null),a=!0},p:t,i(t){a||(S(l.$$.fragment,t),S(i.$$.fragment,t),S(c.$$.fragment,t),a=!0)},o(t){Y(l.$$.fragment,t),Y(i.$$.fragment,t),Y(c.$$.fragment,t),a=!1},d(t){t&&p(n),I(l),I(i),I(c)}}}class Ht extends Z{constructor(t){super(),V(this,t,null,At,i,{})}}function Ot(t){let e,n;return e=new gt({props:{$$slots:{content:[jt]},$$scope:{ctx:t}}}),e.$on("click",t[2]),{c(){F(e.$$.fragment)},m(t,l){W(e,t,l),n=!0},p(t,n){const l={};8&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function jt(t){let e,n,l;return n=new Ht({}),{c(){e=m("div"),F(n.$$.fragment),y(e,"slot","content"),y(e,"class","slot-content svelte-vs09ps")},m(t,o){f(t,e,o),W(n,e,null),l=!0},i(t){l||(S(n.$$.fragment,t),l=!0)},o(t){Y(n.$$.fragment,t),l=!1},d(t){t&&p(e),I(n)}}}function Nt(t){let e,n,o,i,s,c,a,r,u,h,g,$=!0===t[0]&&Ot(t);return r=new dt({}),{c(){e=m("header"),e.innerHTML="<h1>CV Builder</h1>",n=v(),o=m("section"),i=m("button"),i.textContent="Add / Edit Information",s=v(),$&&$.c(),c=v(),a=m("main"),F(r.$$.fragment),y(i,"class","modal-button svelte-vs09ps"),y(a,"class","svelte-vs09ps")},m(l,p){f(l,e,p),f(l,n,p),f(l,o,p),d(o,i),d(o,s),$&&$.m(o,null),f(l,c,p),f(l,a,p),W(r,a,null),u=!0,h||(g=b(i,"click",t[1]),h=!0)},p(t,e){!0===t[0]?$?($.p(t,e),1&e&&S($,1)):($=Ot(t),$.c(),S($,1),$.m(o,null)):$&&(N={r:0,c:[],p:N},Y($,1,1,(()=>{$=null})),N.r||l(N.c),N=N.p)},i(t){u||(S($),S(r.$$.fragment,t),u=!0)},o(t){Y($),Y(r.$$.fragment,t),u=!1},d(t){t&&p(e),t&&p(n),t&&p(o),$&&$.d(),t&&p(c),t&&p(a),I(r),h=!1,g()}}}function St(t){let e,n;return e=new K({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){F(e.$$.fragment)},m(t,l){W(e,t,l),n=!0},p(t,[n]){const l={};9&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Yt(t,e,n){let l=!1;return[l,()=>n(0,l=!0),()=>n(0,l=!1)]}return new class extends Z{constructor(t){super(),V(this,t,Yt,St,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map