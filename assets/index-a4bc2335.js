var Be=Object.defineProperty;var Me=(t,e,n)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var te=(t,e,n)=>(Me(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function O(){}function Se(t){return t()}function de(){return Object.create(null)}function R(t){t.forEach(Se)}function Ce(t){return typeof t=="function"}function D(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let G;function le(t,e){return t===e?!0:(G||(G=document.createElement("a")),G.href=e,t===G.href)}function Ne(t){return Object.keys(t).length===0}function Re(t,...e){if(t==null){for(const l of e)l(void 0);return O}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ee(t,e,n){t.$$.on_destroy.push(Re(e,n))}function d(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function v(){return W(" ")}function Ie(){return W("")}function M(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e){return new t(e)}let F;function U(t){F=t}function qe(){if(!F)throw new Error("Function called outside component initialization");return F}function oe(t){qe().$$.on_mount.push(t)}const q=[],X=[];let V=[];const _e=[],Ve=Promise.resolve();let re=!1;function We(){re||(re=!0,Ve.then(Ae))}function ie(t){V.push(t)}const ne=new Set;let I=0;function Ae(){if(I!==0)return;const t=F;do{try{for(;I<q.length;){const e=q[I];I++,U(e),ze(e.$$)}}catch(e){throw q.length=0,I=0,e}for(U(null),q.length=0,I=0;X.length;)X.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];ne.has(n)||(ne.add(n),n())}V.length=0}while(q.length);for(;_e.length;)_e.pop()();re=!1,ne.clear(),U(t)}function ze(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}function De(t){const e=[],n=[];V.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),V=e}const Q=new Set;let B;function se(){B={r:0,c:[],p:B}}function ue(){B.r||R(B.c),B=B.p}function C(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function N(t,e,n,l){if(t&&t.o){if(Q.has(t))return;Q.add(t),B.c.push(()=>{Q.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function L(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ce(t){t&&t.c()}function Y(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),ie(()=>{const r=t.$$.on_mount.map(Se).filter(Ce);t.$$.on_destroy?t.$$.on_destroy.push(...r):R(r),t.$$.on_mount=[]}),i.forEach(ie)}function Z(t,e){const n=t.$$;n.fragment!==null&&(De(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Je(t,e){t.$$.dirty[0]===-1&&(q.push(t),We(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,l,i,r,s=null,o=[-1]){const u=F;U(t);const c=t.$$={fragment:null,ctx:[],props:r,update:O,not_equal:i,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:de(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};s&&s(c.root);let m=!1;if(c.ctx=n?n(t,e.props||{},(f,b,...x)=>{const P=x.length?x[0]:b;return c.ctx&&i(c.ctx[f],c.ctx[f]=P)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](P),m&&Je(t,f)),b}):[],c.update(),m=!0,R(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const f=Te(e.target);c.fragment&&c.fragment.l(f),f.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&C(t.$$.fragment),Y(t,e.target,e.anchor),Ae()}U(u)}class K{constructor(){te(this,"$$");te(this,"$$set")}$destroy(){Z(this,1),this.$destroy=O}$on(e,n){if(!Ce(n))return O;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ue);const Fe="modulepreload",He=function(t){return"/"+t},ge={},ae=function(e,n,l){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=He(r),r in ge)return;ge[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(!!l)for(let m=i.length-1;m>=0;m--){const f=i[m];if(f.href===r&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Fe,s||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),s)return new Promise((m,f)=>{c.addEventListener("load",m),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};function Ke(t){let e,n,l,i;return{c(){e=p("a"),n=p("span"),l=W(t[2]),i=W(t[0]),a(n,"class","button-icon"),a(e,"role","button"),a(e,"class","button"),a(e,"rel",t[3]),a(e,"href",t[1])},m(r,s){j(r,e,s),d(e,n),d(n,l),d(e,i)},p(r,[s]){s&4&&he(l,r[2]),s&1&&he(i,r[0]),s&8&&a(e,"rel",r[3]),s&2&&a(e,"href",r[1])},i:O,o:O,d(r){r&&y(e)}}}function Ge(t,e,n){let{text:l="button"}=e,{link:i="#"}=e,{icon:r="▸"}=e,{id:s="button"}=e,{rel:o="null"}=e;return t.$$set=u=>{"text"in u&&n(0,l=u.text),"link"in u&&n(1,i=u.link),"icon"in u&&n(2,r=u.icon),"id"in u&&n(4,s=u.id),"rel"in u&&n(3,o=u.rel)},[l,i,r,o,s]}class Qe extends K{constructor(e){super(),H(this,e,Ge,Ke,D,{text:0,link:1,icon:2,id:4,rel:3})}}const T=[];function Xe(t,e=O){let n;const l=new Set;function i(o){if(D(t,o)&&(t=o,n)){const u=!T.length;for(const c of l)c[1](),T.push(c,t);if(u){for(let c=0;c<T.length;c+=2)T[c][0](T[c+1]);T.length=0}}}function r(o){i(o(t))}function s(o,u=O){const c=[o,u];return l.add(c),l.size===1&&(n=e(i,r)||O),o(t),()=>{l.delete(c),l.size===0&&n&&(n(),n=null)}}return{set:i,update:r,subscribe:s}}const z={social:{instagram:"https://instagram.com/janmartchouk",twitter:"https://twitter.com/janmartchouk",github:"https://github.com/janmartchouk"},blogs:{plants:"https://plants.martcho.uk",towers:"https://towers.martcho.uk",pics:"https://pics.martcho.uk",graphics:"https://graphics.martcho.uk"},media:{letterboxd:"https://letterboxd.com/janmartchouk",musicboard:"https://musicboard.app/janmartchouk",goodreads:"https://www.goodreads.com/janmartchouk"}},Ye={social:"Social Media",blogs:"Blogs, Projects",media:"Music, Movie & Book Reviews"};let A=Xe(0);function pe(t,e,n){const l=t.slice();return l[2]=e[n][0],l[3]=e[n][1],l}function be(t,e,n){const l=t.slice();return l[6]=e[n][0],l[7]=e[n][1],l}function ke(t){let e,n;return e=new Qe({props:{rel:"me",text:t[6].toString(),link:t[7]}}),{c(){ce(e.$$.fragment)},m(l,i){Y(e,l,i),n=!0},p:O,i(l){n||(C(e.$$.fragment,l),n=!0)},o(l){N(e.$$.fragment,l),n=!1},d(l){Z(e,l)}}}function we(t){let e,n,l,i,r,s=L(Object.entries(t[3])),o=[];for(let c=0;c<s.length;c+=1)o[c]=ke(be(t,s,c));const u=c=>N(o[c],1,1,()=>{o[c]=null});return{c(){e=p("details"),n=p("summary"),n.textContent=`${t[2]}`,l=v();for(let c=0;c<o.length;c+=1)o[c].c();i=v()},m(c,m){j(c,e,m),d(e,n),d(e,l);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);d(e,i),r=!0},p(c,m){if(m&0){s=L(Object.entries(c[3]));let f;for(f=0;f<s.length;f+=1){const b=be(c,s,f);o[f]?(o[f].p(b,m),C(o[f],1)):(o[f]=ke(b),o[f].c(),C(o[f],1),o[f].m(e,i))}for(se(),f=s.length;f<o.length;f+=1)u(f);ue()}},i(c){if(!r){for(let m=0;m<s.length;m+=1)C(o[m]);r=!0}},o(c){o=o.filter(Boolean);for(let m=0;m<o.length;m+=1)N(o[m]);r=!1},d(c){c&&y(e),J(o,c)}}}function Ze(t){let e,n,l,i,r,s,o,u,c,m,f,b,x,P,E=L(Object.entries(z)),k=[];for(let _=0;_<E.length;_+=1)k[_]=we(pe(t,E,_));const S=_=>N(k[_],1,1,()=>{k[_]=null});return{c(){e=p("meta"),n=p("meta"),l=v(),i=p("div"),r=p("input"),s=p("label"),o=v(),u=p("main"),c=p("div"),m=p("h1"),m.innerHTML='<span class="name-word" id="firstname">Jan</span> <span class="name-word" id="lastname">Martchouk</span>',f=v();for(let _=0;_<k.length;_+=1)k[_].c();a(e,"name","theme-color"),a(e,"content","#52a8df"),a(e,"media","(prefers-color-scheme: light)"),a(n,"name","theme-color"),a(n,"content","#040404"),a(n,"media","(prefers-color-scheme: dark)"),a(r,"type","checkbox"),a(r,"id","play-pause"),a(s,"for","play-pause"),a(s,"id","play-pause-label"),a(s,"class","win-button"),a(m,"id","name"),a(c,"class","center-container"),a(i,"class","look"),a(i,"id","look-sky")},m(_,h){d(document.head,e),d(document.head,n),j(_,l,h),j(_,i,h),d(i,r),d(i,s),d(i,o),d(i,u),d(u,c),d(c,m),d(c,f);for(let g=0;g<k.length;g+=1)k[g]&&k[g].m(c,null);b=!0,x||(P=M(m,"click",t[1]),x=!0)},p(_,[h]){if(h&0){E=L(Object.entries(z));let g;for(g=0;g<E.length;g+=1){const w=pe(_,E,g);k[g]?(k[g].p(w,h),C(k[g],1)):(k[g]=we(w),k[g].c(),C(k[g],1),k[g].m(c,null))}for(se(),g=E.length;g<k.length;g+=1)S(g);ue()}},i(_){if(!b){for(let h=0;h<E.length;h+=1)C(k[h]);b=!0}},o(_){k=k.filter(Boolean);for(let h=0;h<k.length;h+=1)N(k[h]);b=!1},d(_){_&&(y(l),y(i)),y(e),y(n),J(k,_),x=!1,P()}}}function et(t,e,n){let l;return ee(t,A,r=>n(0,l=r)),oe(async()=>{await ae(()=>Promise.resolve({}),["assets/sky-1ed6c47a.css"])}),[l,()=>A.set(l+1)]}class tt extends K{constructor(e){super(),H(this,e,et,Ze,D,{})}}const nt="/assets/jan-shining-transparent-eaae8fe8.png";function ye(t,e,n){const l=t.slice();return l[2]=e[n][0],l[3]=e[n][1],l}function $e(t,e,n){const l=t.slice();return l[6]=e[n][0],l[7]=e[n][1],l}function ve(t){let e,n=t[6]+"",l;return{c(){e=p("a"),l=W(n),a(e,"href",t[7])},m(i,r){j(i,e,r),d(e,l)},p:O,d(i){i&&y(e)}}}function Ee(t){let e,n,l,i,r=L(Object.entries(t[3])),s=[];for(let o=0;o<r.length;o+=1)s[o]=ve($e(t,r,o));return{c(){e=p("span"),n=p("b"),n.textContent=`${Ye[t[2]]}`,l=v();for(let o=0;o<s.length;o+=1)s[o].c();i=v(),a(e,"class","link-category")},m(o,u){j(o,e,u),d(e,n),d(e,l);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);d(e,i)},p(o,u){if(u&0){r=L(Object.entries(o[3]));let c;for(c=0;c<r.length;c+=1){const m=$e(o,r,c);s[c]?s[c].p(m,u):(s[c]=ve(m),s[c].c(),s[c].m(e,i))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},d(o){o&&y(e),J(s,o)}}}function lt(t){let e,n,l,i,r,s,o,u,c,m,f,b,x,P,E,k,S=L(Object.entries(z)),_=[];for(let h=0;h<S.length;h+=1)_[h]=Ee(ye(t,S,h));return{c(){e=p("meta"),n=p("meta"),l=v(),i=p("div"),r=p("main"),s=p("h1"),s.innerHTML="This is<br/>An Internet Presence",o=v(),u=p("img"),m=v(),f=p("div"),b=p("span"),b.textContent="World Wide Web",x=p("br"),P=v();for(let h=0;h<_.length;h+=1)_[h].c();a(e,"name","theme-color"),a(e,"content","#fce800"),a(e,"media","(prefers-color-scheme: light)"),a(n,"name","theme-color"),a(n,"content","#000"),a(n,"media","(prefers-color-scheme: dark)"),a(u,"class","name"),a(u,"id","name"),a(u,"alt","Jan Martchouk"),le(u.src,c=nt)||a(u,"src",c),a(b,"id","link-heading"),a(f,"id","text-container"),a(i,"class","look"),a(i,"id","look-shining")},m(h,g){d(document.head,e),d(document.head,n),j(h,l,g),j(h,i,g),d(i,r),d(r,s),d(r,o),d(r,u),d(r,m),d(r,f),d(f,b),d(f,x),d(f,P);for(let w=0;w<_.length;w+=1)_[w]&&_[w].m(f,null);E||(k=M(u,"click",t[1]),E=!0)},p(h,[g]){if(g&0){S=L(Object.entries(z));let w;for(w=0;w<S.length;w+=1){const $=ye(h,S,w);_[w]?_[w].p($,g):(_[w]=Ee($),_[w].c(),_[w].m(f,null))}for(;w<_.length;w+=1)_[w].d(1);_.length=S.length}},i:O,o:O,d(h){h&&(y(l),y(i)),y(e),y(n),J(_,h),E=!1,k()}}}function rt(t,e,n){let l;return ee(t,A,r=>n(0,l=r)),oe(async()=>{await ae(()=>Promise.resolve({}),["assets/shining-3e1767c8.css"])}),[l,()=>A.set(l+1)]}class it extends K{constructor(e){super(),H(this,e,rt,lt,D,{})}}const ct="/assets/channelorange-0bd3a2e7.png",ot="/assets/explicit-4fa4654a.png";function Oe(t,e,n){const l=t.slice();return l[6]=e[n][0],l[7]=e[n][1],l}function je(t,e,n){const l=t.slice();return l[10]=e[n][0],l[11]=e[n][1],l}function xe(t){let e,n=t[10]+"",l;return{c(){e=p("a"),l=W(n),a(e,"href",t[11])},m(i,r){j(i,e,r),d(e,l)},p:O,d(i){i&&y(e)}}}function Le(t){let e,n,l=L(Object.entries(t[7])),i=[];for(let r=0;r<l.length;r+=1)i[r]=xe(je(t,l,r));return{c(){e=p("span");for(let r=0;r<i.length;r+=1)i[r].c();n=v(),a(e,"class","link-category")},m(r,s){j(r,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null);d(e,n)},p(r,s){if(s&0){l=L(Object.entries(r[7]));let o;for(o=0;o<l.length;o+=1){const u=je(r,l,o);i[o]?i[o].p(u,s):(i[o]=xe(u),i[o].c(),i[o].m(e,n))}for(;o<i.length;o+=1)i[o].d(1);i.length=l.length}},d(r){r&&y(e),J(i,r)}}}function st(t){let e,n,l,i,r,s,o,u,c,m,f,b,x,P,E,k,S,_=L(Object.entries(z)),h=[];for(let g=0;g<_.length;g+=1)h[g]=Le(Oe(t,_,g));return{c(){e=p("meta"),n=p("meta"),l=v(),i=p("div"),r=p("main"),s=p("div"),o=p("div"),u=p("div"),c=p("img"),f=v(),b=p("img"),P=v(),E=p("div");for(let g=0;g<h.length;g+=1)h[g].c();a(e,"name","theme-color"),a(e,"content","white"),a(e,"media","(prefers-color-scheme: light)"),a(n,"name","theme-color"),a(n,"content","black"),a(n,"media","(prefers-color-scheme: dark)"),le(c.src,m=ct)||a(c,"src",m),a(c,"alt","Jan Martchouk"),a(c,"id","name"),a(b,"id","explicit"),le(b.src,x=ot)||a(b,"src",x),a(b,"alt","Parental Advisory Sticker"),a(u,"id","front"),a(E,"id","back"),a(o,"id","album-content"),a(s,"id","album"),a(i,"class","look"),a(i,"id","look-channelorange")},m(g,w){d(document.head,e),d(document.head,n),j(g,l,w),j(g,i,w),d(i,r),d(r,s),d(s,o),d(o,u),d(u,c),d(u,f),d(u,b),d(o,P),d(o,E);for(let $=0;$<h.length;$+=1)h[$]&&h[$].m(E,null);t[4](s),k||(S=[M(c,"click",t[3]),M(s,"click",t[2])],k=!0)},p(g,[w]){if(w&0){_=L(Object.entries(z));let $;for($=0;$<_.length;$+=1){const fe=Oe(g,_,$);h[$]?h[$].p(fe,w):(h[$]=Le(fe),h[$].c(),h[$].m(E,null))}for(;$<h.length;$+=1)h[$].d(1);h.length=_.length}},i:O,o:O,d(g){g&&(y(l),y(i)),y(e),y(n),J(h,g),t[4](null),k=!1,R(S)}}}function ut(t,e,n){let l;ee(t,A,u=>n(1,l=u)),oe(async()=>{await ae(()=>Promise.resolve({}),["assets/channelorange-eec40e21.css"])});let i;function r(u){u.target.tagName!="A"&&(i.classList.toggle("turned"),console.log("turned!"))}const s=()=>A.set(l+1);function o(u){X[u?"unshift":"push"](()=>{i=u,n(0,i)})}return[i,l,r,s,o]}class at extends K{constructor(e){super(),H(this,e,ut,st,D,{})}}function Pe(t){let e,n,l,i,r,s,o,u,c,m;return{c(){e=p("details"),n=p("summary"),n.textContent="🎨",l=v(),i=p("p"),i.textContent="⛅",r=v(),s=p("p"),s.textContent="🌟",o=v(),u=p("p"),u.textContent="🍊",a(e,"id","look-picker")},m(f,b){j(f,e,b),d(e,n),d(e,l),d(e,i),d(e,r),d(e,s),d(e,o),d(e,u),t[8](e),c||(m=[M(i,"click",t[5]),M(s,"click",t[6]),M(u,"click",t[7])],c=!0)},p:O,d(f){f&&y(e),t[8](null),c=!1,R(m)}}}function ft(t){let e,n,l,i,r=t[2]>2&&Pe(t);var s=t[3][t[0]];function o(u,c){return{}}return s&&(n=me(s,o())),{c(){r&&r.c(),e=v(),n&&ce(n.$$.fragment),l=Ie()},m(u,c){r&&r.m(u,c),j(u,e,c),n&&Y(n,u,c),j(u,l,c),i=!0},p(u,[c]){if(u[2]>2?r?r.p(u,c):(r=Pe(u),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),c&1&&s!==(s=u[3][u[0]])){if(n){se();const m=n;N(m.$$.fragment,1,0,()=>{Z(m,1)}),ue()}s?(n=me(s,o()),ce(n.$$.fragment),C(n.$$.fragment,1),Y(n,l.parentNode,l)):n=null}},i(u){i||(n&&C(n.$$.fragment,u),i=!0)},o(u){n&&N(n.$$.fragment,u),i=!1},d(u){u&&(y(e),y(l)),r&&r.d(u),n&&Z(n,u)}}}function dt(t,e,n){let l;ee(t,A,b=>n(2,l=b));let i=[tt,it,at],r=Math.floor(Math.random()*i.length),s;function o(b){b!==r&&(n(0,r=b),n(1,s.open=!1,s),A.set(0))}const u=()=>o(0),c=()=>o(1),m=()=>o(2);function f(b){X[b?"unshift":"push"](()=>{s=b,n(1,s)})}return[r,s,l,i,o,u,c,m,f]}class ht extends K{constructor(e){super(),H(this,e,dt,ft,D,{})}}new ht({target:document.getElementById("app")});
