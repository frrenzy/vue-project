(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function hr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Eu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bu=hr(Eu);function jl(t){return!!t||t===""}function fr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ue(s)?Tu(s):fr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ue(t))return t;if(ee(t))return t}}const wu=/;(?![^(]*\))/g,Iu=/:(.+)/;function Tu(t){const e={};return t.split(wu).forEach(n=>{if(n){const s=n.split(Iu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ve(t){let e="";if(ue(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=ve(t[n]);s&&(e+=s+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ui=t=>ue(t)?t:t==null?"":D(t)||ee(t)&&(t.toString===Gl||!k(t.toString))?JSON.stringify(t,ql,2):String(t),ql=(t,e)=>e&&e.__v_isRef?ql(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:zl(e)?{[`Set(${e.size})`]:[...e.values()]}:ee(e)&&!D(e)&&!Yl(e)?String(e):e,K={},Zt=[],$e=()=>{},Su=()=>!1,Nu=/^on[^a-z]/,Hs=t=>Nu.test(t),dr=t=>t.startsWith("onUpdate:"),ye=Object.assign,pr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xu=Object.prototype.hasOwnProperty,W=(t,e)=>xu.call(t,e),D=Array.isArray,en=t=>Us(t)==="[object Map]",zl=t=>Us(t)==="[object Set]",k=t=>typeof t=="function",ue=t=>typeof t=="string",_r=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Kl=t=>ee(t)&&k(t.then)&&k(t.catch),Gl=Object.prototype.toString,Us=t=>Gl.call(t),Ru=t=>Us(t).slice(8,-1),Yl=t=>Us(t)==="[object Object]",gr=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ps=hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Au=/-(\w)/g,an=$s(t=>t.replace(Au,(e,n)=>n?n.toUpperCase():"")),Pu=/\B([A-Z])/g,gn=$s(t=>t.replace(Pu,"-$1").toLowerCase()),Ql=$s(t=>t.charAt(0).toUpperCase()+t.slice(1)),hi=$s(t=>t?`on${Ql(t)}`:""),kn=(t,e)=>!Object.is(t,e),_s=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ys=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ai=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wo;const Ou=()=>wo||(wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ge;class Du{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ge&&(this.parent=Ge,this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ge;try{return Ge=this,e()}finally{Ge=n}}}on(){Ge=this}off(){Ge=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Mu(t,e=Ge){e&&e.active&&e.effects.push(t)}const mr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xl=t=>(t.w&yt)>0,Jl=t=>(t.n&yt)>0,ku=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yt},Fu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Xl(i)&&!Jl(i)?i.delete(t):e[n++]=i,i.w&=~yt,i.n&=~yt}e.length=n}},Pi=new WeakMap;let Rn=0,yt=1;const Oi=30;let Le;const Mt=Symbol(""),Di=Symbol("");class yr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mu(this,s)}run(){if(!this.active)return this.fn();let e=Le,n=dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Le,Le=this,dt=!0,yt=1<<++Rn,Rn<=Oi?ku(this):Io(this),this.fn()}finally{Rn<=Oi&&Fu(this),yt=1<<--Rn,Le=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(Io(this),this.onStop&&this.onStop(),this.active=!1)}}function Io(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dt=!0;const Zl=[];function mn(){Zl.push(dt),dt=!1}function yn(){const t=Zl.pop();dt=t===void 0?!0:t}function Ae(t,e,n){if(dt&&Le){let s=Pi.get(t);s||Pi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=mr()),ea(i)}}function ea(t,e){let n=!1;Rn<=Oi?Jl(t)||(t.n|=yt,n=!Xl(t)):n=!t.has(Le),n&&(t.add(Le),Le.deps.push(t))}function rt(t,e,n,s,i,r){const o=Pi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&D(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":D(t)?gr(n)&&l.push(o.get("length")):(l.push(o.get(Mt)),en(t)&&l.push(o.get(Di)));break;case"delete":D(t)||(l.push(o.get(Mt)),en(t)&&l.push(o.get(Di)));break;case"set":en(t)&&l.push(o.get(Mt));break}if(l.length===1)l[0]&&Mi(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Mi(mr(a))}}function Mi(t,e){const n=D(t)?t:[...t];for(const s of n)s.computed&&To(s);for(const s of n)s.computed||To(s)}function To(t,e){(t!==Le||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Lu=hr("__proto__,__v_isRef,__isVue"),ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_r)),Bu=Cr(),Wu=Cr(!1,!0),Hu=Cr(!0),So=Uu();function Uu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=V(this);for(let r=0,o=this.length;r<o;r++)Ae(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(V)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mn();const s=V(this)[e].apply(this,n);return yn(),s}}),t}function Cr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?sh:oa:e?ra:ia).get(s))return s;const o=D(s);if(!t&&o&&W(So,i))return Reflect.get(So,i,r);const l=Reflect.get(s,i,r);return(_r(i)?ta.has(i):Lu(i))||(t||Ae(s,"get",i),e)?l:me(l)?o&&gr(i)?l:l.value:ee(l)?t?la(l):br(l):l}}const $u=na(),Vu=na(!0);function na(t=!1){return function(n,s,i,r){let o=n[s];if(cn(o)&&me(o)&&!me(i))return!1;if(!t&&(!Cs(i)&&!cn(i)&&(o=V(o),i=V(i)),!D(n)&&me(o)&&!me(i)))return o.value=i,!0;const l=D(n)&&gr(s)?Number(s)<n.length:W(n,s),a=Reflect.set(n,s,i,r);return n===V(r)&&(l?kn(i,o)&&rt(n,"set",s,i):rt(n,"add",s,i)),a}}function ju(t,e){const n=W(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&rt(t,"delete",e,void 0),s}function qu(t,e){const n=Reflect.has(t,e);return(!_r(e)||!ta.has(e))&&Ae(t,"has",e),n}function zu(t){return Ae(t,"iterate",D(t)?"length":Mt),Reflect.ownKeys(t)}const sa={get:Bu,set:$u,deleteProperty:ju,has:qu,ownKeys:zu},Ku={get:Hu,set(t,e){return!0},deleteProperty(t,e){return!0}},Gu=ye({},sa,{get:Wu,set:Vu}),vr=t=>t,Vs=t=>Reflect.getPrototypeOf(t);function rs(t,e,n=!1,s=!1){t=t.__v_raw;const i=V(t),r=V(e);n||(e!==r&&Ae(i,"get",e),Ae(i,"get",r));const{has:o}=Vs(i),l=s?vr:n?Ir:Fn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function os(t,e=!1){const n=this.__v_raw,s=V(n),i=V(t);return e||(t!==i&&Ae(s,"has",t),Ae(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ls(t,e=!1){return t=t.__v_raw,!e&&Ae(V(t),"iterate",Mt),Reflect.get(t,"size",t)}function No(t){t=V(t);const e=V(this);return Vs(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function xo(t,e){e=V(e);const n=V(this),{has:s,get:i}=Vs(n);let r=s.call(n,t);r||(t=V(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?kn(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function Ro(t){const e=V(this),{has:n,get:s}=Vs(e);let i=n.call(e,t);i||(t=V(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&rt(e,"delete",t,void 0),r}function Ao(){const t=V(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function as(t,e){return function(s,i){const r=this,o=r.__v_raw,l=V(o),a=e?vr:t?Ir:Fn;return!t&&Ae(l,"iterate",Mt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function cs(t,e,n){return function(...s){const i=this.__v_raw,r=V(i),o=en(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?vr:e?Ir:Fn;return!e&&Ae(r,"iterate",a?Di:Mt),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function Yu(){const t={get(r){return rs(this,r)},get size(){return ls(this)},has:os,add:No,set:xo,delete:Ro,clear:Ao,forEach:as(!1,!1)},e={get(r){return rs(this,r,!1,!0)},get size(){return ls(this)},has:os,add:No,set:xo,delete:Ro,clear:Ao,forEach:as(!1,!0)},n={get(r){return rs(this,r,!0)},get size(){return ls(this,!0)},has(r){return os.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:as(!0,!1)},s={get(r){return rs(this,r,!0,!0)},get size(){return ls(this,!0)},has(r){return os.call(this,r,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=cs(r,!1,!1),n[r]=cs(r,!0,!1),e[r]=cs(r,!1,!0),s[r]=cs(r,!0,!0)}),[t,n,e,s]}const[Qu,Xu,Ju,Zu]=Yu();function Er(t,e){const n=e?t?Zu:Ju:t?Xu:Qu;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(W(n,i)&&i in s?n:s,i,r)}const eh={get:Er(!1,!1)},th={get:Er(!1,!0)},nh={get:Er(!0,!1)},ia=new WeakMap,ra=new WeakMap,oa=new WeakMap,sh=new WeakMap;function ih(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rh(t){return t.__v_skip||!Object.isExtensible(t)?0:ih(Ru(t))}function br(t){return cn(t)?t:wr(t,!1,sa,eh,ia)}function oh(t){return wr(t,!1,Gu,th,ra)}function la(t){return wr(t,!0,Ku,nh,oa)}function wr(t,e,n,s,i){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=rh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function tn(t){return cn(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function Cs(t){return!!(t&&t.__v_isShallow)}function aa(t){return tn(t)||cn(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function ca(t){return ys(t,"__v_skip",!0),t}const Fn=t=>ee(t)?br(t):t,Ir=t=>ee(t)?la(t):t;function ua(t){dt&&Le&&(t=V(t),ea(t.dep||(t.dep=mr())))}function ha(t,e){t=V(t),t.dep&&Mi(t.dep)}function me(t){return!!(t&&t.__v_isRef===!0)}function Ln(t){return lh(t,!1)}function lh(t,e){return me(t)?t:new ah(t,e)}class ah{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:Fn(e)}get value(){return ua(this),this._value}set value(e){const n=this.__v_isShallow||Cs(e)||cn(e);e=n?e:V(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Fn(e),ha(this))}}function Re(t){return me(t)?t.value:t}const ch={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return me(i)&&!me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function fa(t){return tn(t)?t:new Proxy(t,ch)}var da;class uh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[da]=!1,this._dirty=!0,this.effect=new yr(e,()=>{this._dirty||(this._dirty=!0,ha(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=V(this);return ua(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}da="__v_isReadonly";function hh(t,e,n=!1){let s,i;const r=k(t);return r?(s=t,i=$e):(s=t.get,i=t.set),new uh(s,i,r||!i,n)}function pt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){js(r,e,n)}return i}function Me(t,e,n,s){if(k(t)){const r=pt(t,e,n,s);return r&&Kl(r)&&r.catch(o=>{js(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Me(t[r],e,n,s));return i}function js(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){pt(a,null,10,[t,o,l]);return}}fh(t,n,i,s)}function fh(t,e,n,s=!0){console.error(t)}let vs=!1,ki=!1;const ge=[];let Qe=0;const nn=[];let nt=null,xt=0;const pa=Promise.resolve();let Tr=null;function dh(t){const e=Tr||pa;return t?e.then(this?t.bind(this):t):e}function ph(t){let e=Qe+1,n=ge.length;for(;e<n;){const s=e+n>>>1;Bn(ge[s])<t?e=s+1:n=s}return e}function Sr(t){(!ge.length||!ge.includes(t,vs&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?ge.push(t):ge.splice(ph(t.id),0,t),_a())}function _a(){!vs&&!ki&&(ki=!0,Tr=pa.then(ma))}function _h(t){const e=ge.indexOf(t);e>Qe&&ge.splice(e,1)}function gh(t){D(t)?nn.push(...t):(!nt||!nt.includes(t,t.allowRecurse?xt+1:xt))&&nn.push(t),_a()}function Po(t,e=Qe){for(;e<ge.length;e++){const n=ge[e];n&&n.pre&&(ge.splice(e,1),e--,n())}}function ga(t){if(nn.length){const e=[...new Set(nn)];if(nn.length=0,nt){nt.push(...e);return}for(nt=e,nt.sort((n,s)=>Bn(n)-Bn(s)),xt=0;xt<nt.length;xt++)nt[xt]();nt=null,xt=0}}const Bn=t=>t.id==null?1/0:t.id,mh=(t,e)=>{const n=Bn(t)-Bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ma(t){ki=!1,vs=!0,ge.sort(mh);const e=$e;try{for(Qe=0;Qe<ge.length;Qe++){const n=ge[Qe];n&&n.active!==!1&&pt(n,null,14)}}finally{Qe=0,ge.length=0,ga(),vs=!1,Tr=null,(ge.length||nn.length)&&ma()}}function yh(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||K;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||K;d&&(i=n.map(g=>g.trim())),h&&(i=n.map(Ai))}let l,a=s[l=hi(e)]||s[l=hi(an(e))];!a&&r&&(a=s[l=hi(gn(e))]),a&&Me(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Me(c,t,6,i)}}function ya(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!k(t)){const a=c=>{const u=ya(c,e,!0);u&&(l=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(ee(t)&&s.set(t,null),null):(D(r)?r.forEach(a=>o[a]=null):ye(o,r),ee(t)&&s.set(t,o),o)}function qs(t,e){return!t||!Hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,gn(e))||W(t,e))}let We=null,Ca=null;function Es(t){const e=We;return We=t,Ca=t&&t.type.__scopeId||null,e}function Ch(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Uo(-1);const r=Es(e),o=t(...i);return Es(r),s._d&&Uo(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function fi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:d,setupState:g,ctx:w,inheritAttrs:N}=t;let x,M;const he=Es(t);try{if(n.shapeFlag&4){const te=i||s;x=Ye(u.call(te,te,h,r,g,d,w)),M=a}else{const te=e;x=Ye(te.length>1?te(r,{attrs:a,slots:l,emit:c}):te(r,null)),M=e.props?a:vh(a)}}catch(te){An.length=0,js(te,t,1),x=je(Ve)}let Z=x;if(M&&N!==!1){const te=Object.keys(M),{shapeFlag:Ee}=Z;te.length&&Ee&7&&(o&&te.some(dr)&&(M=Eh(M,o)),Z=Ct(Z,M))}return n.dirs&&(Z=Ct(Z),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),x=Z,Es(he),x}const vh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hs(n))&&((e||(e={}))[n]=t[n]);return e},Eh=(t,e)=>{const n={};for(const s in t)(!dr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bh(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Oo(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!qs(c,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Oo(s,o,c):!0:!!o;return!1}function Oo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!qs(n,r))return!0}return!1}function wh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ih=t=>t.__isSuspense;function Th(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):gh(t)}function Sh(t,e){if(pe){let n=pe.provides;const s=pe.parent&&pe.parent.provides;s===n&&(n=pe.provides=Object.create(s)),n[t]=e}}function di(t,e,n=!1){const s=pe||We;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&k(e)?e.call(s.proxy):e}}const Do={};function pi(t,e,n){return va(t,e,n)}function va(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=K){const l=pe;let a,c=!1,u=!1;if(me(t)?(a=()=>t.value,c=Cs(t)):tn(t)?(a=()=>t,s=!0):D(t)?(u=!0,c=t.some(M=>tn(M)||Cs(M)),a=()=>t.map(M=>{if(me(M))return M.value;if(tn(M))return Pt(M);if(k(M))return pt(M,l,2)})):k(t)?e?a=()=>pt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Me(t,l,3,[d])}:a=$e,e&&s){const M=a;a=()=>Pt(M())}let h,d=M=>{h=x.onStop=()=>{pt(M,l,4)}};if(Hn)return d=$e,e?n&&Me(e,l,3,[a(),u?[]:void 0,d]):a(),$e;let g=u?[]:Do;const w=()=>{if(!!x.active)if(e){const M=x.run();(s||c||(u?M.some((he,Z)=>kn(he,g[Z])):kn(M,g)))&&(h&&h(),Me(e,l,3,[M,g===Do?void 0:g,d]),g=M)}else x.run()};w.allowRecurse=!!e;let N;i==="sync"?N=w:i==="post"?N=()=>Ie(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),N=()=>Sr(w));const x=new yr(a,N);return e?n?w():g=x.run():i==="post"?Ie(x.run.bind(x),l&&l.suspense):x.run(),()=>{x.stop(),l&&l.scope&&pr(l.scope.effects,x)}}function Nh(t,e,n){const s=this.proxy,i=ue(t)?t.includes(".")?Ea(s,t):()=>s[t]:t.bind(s,s);let r;k(e)?r=e:(r=e.handler,n=e);const o=pe;un(this);const l=va(i,r.bind(s),n);return o?un(o):kt(),l}function Ea(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Pt(t,e){if(!ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))Pt(t.value,e);else if(D(t))for(let n=0;n<t.length;n++)Pt(t[n],e);else if(zl(t)||en(t))t.forEach(n=>{Pt(n,e)});else if(Yl(t))for(const n in t)Pt(t[n],e);return t}function xh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ta(()=>{t.isMounted=!0}),Sa(()=>{t.isUnmounting=!0}),t}const Pe=[Function,Array],Rh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},setup(t,{slots:e}){const n=gf(),s=xh();let i;return()=>{const r=e.default&&wa(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const N of r)if(N.type!==Ve){o=N;break}}const l=V(t),{mode:a}=l;if(s.isLeaving)return _i(o);const c=Mo(o);if(!c)return _i(o);const u=Fi(c,l,s,n);Li(c,u);const h=n.subTree,d=h&&Mo(h);let g=!1;const{getTransitionKey:w}=c.type;if(w){const N=w();i===void 0?i=N:N!==i&&(i=N,g=!0)}if(d&&d.type!==Ve&&(!Rt(c,d)||g)){const N=Fi(d,l,s,n);if(Li(d,N),a==="out-in")return s.isLeaving=!0,N.afterLeave=()=>{s.isLeaving=!1,n.update()},_i(o);a==="in-out"&&c.type!==Ve&&(N.delayLeave=(x,M,he)=>{const Z=ba(s,d);Z[String(d.key)]=d,x._leaveCb=()=>{M(),x._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=he})}return o}}},Ah=Rh;function ba(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:N,onAppear:x,onAfterAppear:M,onAppearCancelled:he}=e,Z=String(t.key),te=ba(n,t),Ee=(H,ne)=>{H&&Me(H,s,9,ne)},zt=(H,ne)=>{const oe=ne[1];Ee(H,ne),D(H)?H.every(be=>be.length<=1)&&oe():H.length<=1&&oe()},bt={mode:r,persisted:o,beforeEnter(H){let ne=l;if(!n.isMounted)if(i)ne=N||l;else return;H._leaveCb&&H._leaveCb(!0);const oe=te[Z];oe&&Rt(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),Ee(ne,[H])},enter(H){let ne=a,oe=c,be=u;if(!n.isMounted)if(i)ne=x||a,oe=M||c,be=he||u;else return;let ke=!1;const Ze=H._enterCb=ss=>{ke||(ke=!0,ss?Ee(be,[H]):Ee(oe,[H]),bt.delayedLeave&&bt.delayedLeave(),H._enterCb=void 0)};ne?zt(ne,[H,Ze]):Ze()},leave(H,ne){const oe=String(t.key);if(H._enterCb&&H._enterCb(!0),n.isUnmounting)return ne();Ee(h,[H]);let be=!1;const ke=H._leaveCb=Ze=>{be||(be=!0,ne(),Ze?Ee(w,[H]):Ee(g,[H]),H._leaveCb=void 0,te[oe]===t&&delete te[oe])};te[oe]=t,d?zt(d,[H,ke]):ke()},clone(H){return Fi(H,e,n,s)}};return bt}function _i(t){if(Ks(t))return t=Ct(t),t.children=null,t}function Mo(t){return Ks(t)?t.children?t.children[0]:void 0:t}function Li(t,e){t.shapeFlag&6&&t.component?Li(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wa(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Oe?(o.patchFlag&128&&i++,s=s.concat(wa(o.children,e,l))):(e||o.type!==Ve)&&s.push(l!=null?Ct(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function zs(t){return k(t)?{setup:t,name:t.name}:t}const gs=t=>!!t.type.__asyncLoader,Ks=t=>t.type.__isKeepAlive;function Ph(t,e){Ia(t,"a",e)}function Oh(t,e){Ia(t,"da",e)}function Ia(t,e,n=pe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gs(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ks(i.parent.vnode)&&Dh(s,e,n,i),i=i.parent}}function Dh(t,e,n,s){const i=Gs(e,t,s,!0);Na(()=>{pr(s[e],i)},n)}function Gs(t,e,n=pe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mn(),un(n);const l=Me(e,n,t,o);return kt(),yn(),l});return s?i.unshift(r):i.push(r),r}}const lt=t=>(e,n=pe)=>(!Hn||t==="sp")&&Gs(t,e,n),Mh=lt("bm"),Ta=lt("m"),kh=lt("bu"),Fh=lt("u"),Sa=lt("bum"),Na=lt("um"),Lh=lt("sp"),Bh=lt("rtg"),Wh=lt("rtc");function Hh(t,e=pe){Gs("ec",t,e)}function xa(t,e){const n=We;if(n===null)return t;const s=Qs(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=K]=e[r];k(o)&&(o={mounted:o,updated:o}),o.deep&&Pt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function wt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(mn(),Me(a,n,8,[t.el,l,t,e]),yn())}}const Uh=Symbol();function $h(t,e,n,s){let i;const r=n&&n[s];if(D(t)||ue(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Bi=t=>t?$a(t)?Qs(t)||t.proxy:Bi(t.parent):null,bs=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Bi(t.parent),$root:t=>Bi(t.root),$emit:t=>t.emit,$options:t=>Aa(t),$forceUpdate:t=>t.f||(t.f=()=>Sr(t.update)),$nextTick:t=>t.n||(t.n=dh.bind(t.proxy)),$watch:t=>Nh.bind(t)}),Vh={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==K&&W(s,e))return o[e]=1,s[e];if(i!==K&&W(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&W(c,e))return o[e]=3,r[e];if(n!==K&&W(n,e))return o[e]=4,n[e];Wi&&(o[e]=0)}}const u=bs[e];let h,d;if(u)return e==="$attrs"&&Ae(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==K&&W(n,e))return o[e]=4,n[e];if(d=a.config.globalProperties,W(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==K&&W(i,e)?(i[e]=n,!0):s!==K&&W(s,e)?(s[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==K&&W(t,o)||e!==K&&W(e,o)||(l=r[0])&&W(l,o)||W(s,o)||W(bs,o)||W(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wi=!0;function jh(t){const e=Aa(t),n=t.proxy,s=t.ctx;Wi=!1,e.beforeCreate&&ko(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:w,activated:N,deactivated:x,beforeDestroy:M,beforeUnmount:he,destroyed:Z,unmounted:te,render:Ee,renderTracked:zt,renderTriggered:bt,errorCaptured:H,serverPrefetch:ne,expose:oe,inheritAttrs:be,components:ke,directives:Ze,filters:ss}=e;if(c&&qh(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const se in o){const X=o[se];k(X)&&(s[se]=X.bind(n))}if(i){const se=i.call(n,n);ee(se)&&(t.data=br(se))}if(Wi=!0,r)for(const se in r){const X=r[se],et=k(X)?X.bind(n,n):k(X.get)?X.get.bind(n,n):$e,li=!k(X)&&k(X.set)?X.set.bind(n):$e,wn=bf({get:et,set:li});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>wn.value,set:Kt=>wn.value=Kt})}if(l)for(const se in l)Ra(l[se],s,n,se);if(a){const se=k(a)?a.call(n):a;Reflect.ownKeys(se).forEach(X=>{Sh(X,se[X])})}u&&ko(u,t,"c");function we(se,X){D(X)?X.forEach(et=>se(et.bind(n))):X&&se(X.bind(n))}if(we(Mh,h),we(Ta,d),we(kh,g),we(Fh,w),we(Ph,N),we(Oh,x),we(Hh,H),we(Wh,zt),we(Bh,bt),we(Sa,he),we(Na,te),we(Lh,ne),D(oe))if(oe.length){const se=t.exposed||(t.exposed={});oe.forEach(X=>{Object.defineProperty(se,X,{get:()=>n[X],set:et=>n[X]=et})})}else t.exposed||(t.exposed={});Ee&&t.render===$e&&(t.render=Ee),be!=null&&(t.inheritAttrs=be),ke&&(t.components=ke),Ze&&(t.directives=Ze)}function qh(t,e,n=$e,s=!1){D(t)&&(t=Hi(t));for(const i in t){const r=t[i];let o;ee(r)?"default"in r?o=di(r.from||i,r.default,!0):o=di(r.from||i):o=di(r),me(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function ko(t,e,n){Me(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ra(t,e,n,s){const i=s.includes(".")?Ea(n,s):()=>n[s];if(ue(t)){const r=e[t];k(r)&&pi(i,r)}else if(k(t))pi(i,t.bind(n));else if(ee(t))if(D(t))t.forEach(r=>Ra(r,e,n,s));else{const r=k(t.handler)?t.handler.bind(n):e[t.handler];k(r)&&pi(i,r,t)}}function Aa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ws(a,c,o,!0)),ws(a,e,o)),ee(e)&&r.set(e,a),a}function ws(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ws(t,r,n,!0),i&&i.forEach(o=>ws(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=zh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const zh={data:Fo,props:Tt,emits:Tt,methods:Tt,computed:Tt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Tt,directives:Tt,watch:Gh,provide:Fo,inject:Kh};function Fo(t,e){return e?t?function(){return ye(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function Kh(t,e){return Tt(Hi(t),Hi(e))}function Hi(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function Tt(t,e){return t?ye(ye(Object.create(null),t),e):e}function Gh(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const s in e)n[s]=Ce(t[s],e[s]);return n}function Yh(t,e,n,s=!1){const i={},r={};ys(r,Ys,1),t.propsDefaults=Object.create(null),Pa(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:oh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Qh(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=V(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(qs(t.emitsOptions,d))continue;const g=e[d];if(a)if(W(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const w=an(d);i[w]=Ui(a,l,w,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Pa(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!W(e,h)&&((u=gn(h))===h||!W(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ui(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!W(e,h)&&!0)&&(delete r[h],c=!0)}c&&rt(t,"set","$attrs")}function Pa(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ps(a))continue;const c=e[a];let u;i&&W(i,u=an(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:qs(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=V(n),c=l||K;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ui(i,a,h,c[h],t,!W(c,h))}}return o}function Ui(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=W(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&k(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(un(i),s=c[n]=a.call(null,e),kt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===gn(n))&&(s=!0))}return s}function Oa(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!k(t)){const u=h=>{a=!0;const[d,g]=Oa(h,e,!0);ye(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return ee(t)&&s.set(t,Zt),Zt;if(D(r))for(let u=0;u<r.length;u++){const h=an(r[u]);Lo(h)&&(o[h]=K)}else if(r)for(const u in r){const h=an(u);if(Lo(h)){const d=r[u],g=o[h]=D(d)||k(d)?{type:d}:d;if(g){const w=Ho(Boolean,g.type),N=Ho(String,g.type);g[0]=w>-1,g[1]=N<0||w<N,(w>-1||W(g,"default"))&&l.push(h)}}}const c=[o,l];return ee(t)&&s.set(t,c),c}function Lo(t){return t[0]!=="$"}function Bo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Wo(t,e){return Bo(t)===Bo(e)}function Ho(t,e){return D(e)?e.findIndex(n=>Wo(n,t)):k(e)&&Wo(e,t)?0:-1}const Da=t=>t[0]==="_"||t==="$stable",Nr=t=>D(t)?t.map(Ye):[Ye(t)],Xh=(t,e,n)=>{if(e._n)return e;const s=Ch((...i)=>Nr(e(...i)),n);return s._c=!1,s},Ma=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Da(i))continue;const r=t[i];if(k(r))e[i]=Xh(i,r,s);else if(r!=null){const o=Nr(r);e[i]=()=>o}}},ka=(t,e)=>{const n=Nr(e);t.slots.default=()=>n},Jh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),ys(e,"_",n)):Ma(e,t.slots={})}else t.slots={},e&&ka(t,e);ys(t.slots,Ys,1)},Zh=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=K;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ye(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Ma(e,i)),o=e}else e&&(ka(t,e),o={default:1});if(r)for(const l in i)!Da(l)&&!(l in o)&&delete i[l]};function Fa(){return{app:null,config:{isNativeTag:Su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(t,e){return function(s,i=null){k(s)||(s=Object.assign({},s)),i!=null&&!ee(i)&&(i=null);const r=Fa(),o=new Set;let l=!1;const a=r.app={_uid:ef++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:wf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&k(c.install)?(o.add(c),c.install(a,...u)):k(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const d=je(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),l=!0,a._container=c,c.__vue_app__=a,Qs(d.component)||d.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function $i(t,e,n,s,i=!1){if(D(t)){t.forEach((d,g)=>$i(d,e&&(D(e)?e[g]:e),n,s,i));return}if(gs(s)&&!i)return;const r=s.shapeFlag&4?Qs(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===K?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ue(c)?(u[c]=null,W(h,c)&&(h[c]=null)):me(c)&&(c.value=null)),k(a))pt(a,l,12,[o,u]);else{const d=ue(a),g=me(a);if(d||g){const w=()=>{if(t.f){const N=d?u[a]:a.value;i?D(N)&&pr(N,r):D(N)?N.includes(r)||N.push(r):d?(u[a]=[r],W(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else d?(u[a]=o,W(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,Ie(w,n)):w()}}}const Ie=Th;function nf(t){return sf(t)}function sf(t,e){const n=Ou();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=$e,cloneNode:w,insertStaticContent:N}=t,x=(f,p,_,y=null,m=null,b=null,T=!1,E=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Rt(f,p)&&(y=is(f),ct(f,m,b,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:R,shapeFlag:S}=p;switch(C){case xr:M(f,p,_,y);break;case Ve:he(f,p,_,y);break;case gi:f==null&&Z(p,_,y,T);break;case Oe:Ze(f,p,_,y,m,b,T,E,I);break;default:S&1?zt(f,p,_,y,m,b,T,E,I):S&6?ss(f,p,_,y,m,b,T,E,I):(S&64||S&128)&&C.process(f,p,_,y,m,b,T,E,I,Gt)}R!=null&&m&&$i(R,f&&f.ref,b,p||f,!p)},M=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&c(m,p.children)}},he=(f,p,_,y)=>{f==null?s(p.el=a(p.children||""),_,y):p.el=f.el},Z=(f,p,_,y)=>{[f.el,f.anchor]=N(f.children,p,_,y,f.el,f.anchor)},te=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},Ee=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},zt=(f,p,_,y,m,b,T,E,I)=>{T=T||p.type==="svg",f==null?bt(p,_,y,m,b,T,E,I):oe(f,p,m,b,T,E,I)},bt=(f,p,_,y,m,b,T,E)=>{let I,C;const{type:R,props:S,shapeFlag:A,transition:O,patchFlag:U,dirs:q}=f;if(f.el&&w!==void 0&&U===-1)I=f.el=w(f.el);else{if(I=f.el=o(f.type,b,S&&S.is,S),A&8?u(I,f.children):A&16&&ne(f.children,I,null,y,m,b&&R!=="foreignObject",T,E),q&&wt(f,null,y,"created"),S){for(const J in S)J!=="value"&&!ps(J)&&r(I,J,null,S[J],b,f.children,y,m,tt);"value"in S&&r(I,"value",null,S.value),(C=S.onVnodeBeforeMount)&&Ke(C,y,f)}H(I,f,f.scopeId,T,y)}q&&wt(f,null,y,"beforeMount");const z=(!m||m&&!m.pendingBranch)&&O&&!O.persisted;z&&O.beforeEnter(I),s(I,p,_),((C=S&&S.onVnodeMounted)||z||q)&&Ie(()=>{C&&Ke(C,y,f),z&&O.enter(I),q&&wt(f,null,y,"mounted")},m)},H=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(m){let b=m.subTree;if(p===b){const T=m.vnode;H(f,T,T.scopeId,T.slotScopeIds,m.parent)}}},ne=(f,p,_,y,m,b,T,E,I=0)=>{for(let C=I;C<f.length;C++){const R=f[C]=E?ht(f[C]):Ye(f[C]);x(null,R,p,_,y,m,b,T,E)}},oe=(f,p,_,y,m,b,T)=>{const E=p.el=f.el;let{patchFlag:I,dynamicChildren:C,dirs:R}=p;I|=f.patchFlag&16;const S=f.props||K,A=p.props||K;let O;_&&It(_,!1),(O=A.onVnodeBeforeUpdate)&&Ke(O,_,p,f),R&&wt(p,f,_,"beforeUpdate"),_&&It(_,!0);const U=m&&p.type!=="foreignObject";if(C?be(f.dynamicChildren,C,E,_,y,U,b):T||et(f,p,E,null,_,y,U,b,!1),I>0){if(I&16)ke(E,p,S,A,_,y,m);else if(I&2&&S.class!==A.class&&r(E,"class",null,A.class,m),I&4&&r(E,"style",S.style,A.style,m),I&8){const q=p.dynamicProps;for(let z=0;z<q.length;z++){const J=q[z],Fe=S[J],Yt=A[J];(Yt!==Fe||J==="value")&&r(E,J,Fe,Yt,m,f.children,_,y,tt)}}I&1&&f.children!==p.children&&u(E,p.children)}else!T&&C==null&&ke(E,p,S,A,_,y,m);((O=A.onVnodeUpdated)||R)&&Ie(()=>{O&&Ke(O,_,p,f),R&&wt(p,f,_,"updated")},y)},be=(f,p,_,y,m,b,T)=>{for(let E=0;E<p.length;E++){const I=f[E],C=p[E],R=I.el&&(I.type===Oe||!Rt(I,C)||I.shapeFlag&70)?h(I.el):_;x(I,C,R,null,y,m,b,T,!0)}},ke=(f,p,_,y,m,b,T)=>{if(_!==y){for(const E in y){if(ps(E))continue;const I=y[E],C=_[E];I!==C&&E!=="value"&&r(f,E,C,I,T,p.children,m,b,tt)}if(_!==K)for(const E in _)!ps(E)&&!(E in y)&&r(f,E,_[E],null,T,p.children,m,b,tt);"value"in y&&r(f,"value",_.value,y.value)}},Ze=(f,p,_,y,m,b,T,E,I)=>{const C=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:S,dynamicChildren:A,slotScopeIds:O}=p;O&&(E=E?E.concat(O):O),f==null?(s(C,_,y),s(R,_,y),ne(p.children,_,R,m,b,T,E,I)):S>0&&S&64&&A&&f.dynamicChildren?(be(f.dynamicChildren,A,_,m,b,T,E),(p.key!=null||m&&p===m.subTree)&&La(f,p,!0)):et(f,p,_,R,m,b,T,E,I)},ss=(f,p,_,y,m,b,T,E,I)=>{p.slotScopeIds=E,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,T,I):oi(p,_,y,m,b,T,I):we(f,p,I)},oi=(f,p,_,y,m,b,T)=>{const E=f.component=_f(f,y,m);if(Ks(f)&&(E.ctx.renderer=Gt),mf(E),E.asyncDep){if(m&&m.registerDep(E,se),!f.el){const I=E.subTree=je(Ve);he(null,I,p,_)}return}se(E,f,p,_,m,b,T)},we=(f,p,_)=>{const y=p.component=f.component;if(bh(f,p,_))if(y.asyncDep&&!y.asyncResolved){X(y,p,_);return}else y.next=p,_h(y.update),y.update();else p.el=f.el,y.vnode=p},se=(f,p,_,y,m,b,T)=>{const E=()=>{if(f.isMounted){let{next:R,bu:S,u:A,parent:O,vnode:U}=f,q=R,z;It(f,!1),R?(R.el=U.el,X(f,R,T)):R=U,S&&_s(S),(z=R.props&&R.props.onVnodeBeforeUpdate)&&Ke(z,O,R,U),It(f,!0);const J=fi(f),Fe=f.subTree;f.subTree=J,x(Fe,J,h(Fe.el),is(Fe),f,m,b),R.el=J.el,q===null&&wh(f,J.el),A&&Ie(A,m),(z=R.props&&R.props.onVnodeUpdated)&&Ie(()=>Ke(z,O,R,U),m)}else{let R;const{el:S,props:A}=p,{bm:O,m:U,parent:q}=f,z=gs(p);if(It(f,!1),O&&_s(O),!z&&(R=A&&A.onVnodeBeforeMount)&&Ke(R,q,p),It(f,!0),S&&ci){const J=()=>{f.subTree=fi(f),ci(S,f.subTree,f,m,null)};z?p.type.__asyncLoader().then(()=>!f.isUnmounted&&J()):J()}else{const J=f.subTree=fi(f);x(null,J,_,y,f,m,b),p.el=J.el}if(U&&Ie(U,m),!z&&(R=A&&A.onVnodeMounted)){const J=p;Ie(()=>Ke(R,q,J),m)}(p.shapeFlag&256||q&&gs(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&Ie(f.a,m),f.isMounted=!0,p=_=y=null}},I=f.effect=new yr(E,()=>Sr(C),f.scope),C=f.update=()=>I.run();C.id=f.uid,It(f,!0),C()},X=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Qh(f,p.props,y,_),Zh(f,p.children,_),mn(),Po(),yn()},et=(f,p,_,y,m,b,T,E,I=!1)=>{const C=f&&f.children,R=f?f.shapeFlag:0,S=p.children,{patchFlag:A,shapeFlag:O}=p;if(A>0){if(A&128){wn(C,S,_,y,m,b,T,E,I);return}else if(A&256){li(C,S,_,y,m,b,T,E,I);return}}O&8?(R&16&&tt(C,m,b),S!==C&&u(_,S)):R&16?O&16?wn(C,S,_,y,m,b,T,E,I):tt(C,m,b,!0):(R&8&&u(_,""),O&16&&ne(S,_,y,m,b,T,E,I))},li=(f,p,_,y,m,b,T,E,I)=>{f=f||Zt,p=p||Zt;const C=f.length,R=p.length,S=Math.min(C,R);let A;for(A=0;A<S;A++){const O=p[A]=I?ht(p[A]):Ye(p[A]);x(f[A],O,_,null,m,b,T,E,I)}C>R?tt(f,m,b,!0,!1,S):ne(p,_,y,m,b,T,E,I,S)},wn=(f,p,_,y,m,b,T,E,I)=>{let C=0;const R=p.length;let S=f.length-1,A=R-1;for(;C<=S&&C<=A;){const O=f[C],U=p[C]=I?ht(p[C]):Ye(p[C]);if(Rt(O,U))x(O,U,_,null,m,b,T,E,I);else break;C++}for(;C<=S&&C<=A;){const O=f[S],U=p[A]=I?ht(p[A]):Ye(p[A]);if(Rt(O,U))x(O,U,_,null,m,b,T,E,I);else break;S--,A--}if(C>S){if(C<=A){const O=A+1,U=O<R?p[O].el:y;for(;C<=A;)x(null,p[C]=I?ht(p[C]):Ye(p[C]),_,U,m,b,T,E,I),C++}}else if(C>A)for(;C<=S;)ct(f[C],m,b,!0),C++;else{const O=C,U=C,q=new Map;for(C=U;C<=A;C++){const xe=p[C]=I?ht(p[C]):Ye(p[C]);xe.key!=null&&q.set(xe.key,C)}let z,J=0;const Fe=A-U+1;let Yt=!1,vo=0;const In=new Array(Fe);for(C=0;C<Fe;C++)In[C]=0;for(C=O;C<=S;C++){const xe=f[C];if(J>=Fe){ct(xe,m,b,!0);continue}let ze;if(xe.key!=null)ze=q.get(xe.key);else for(z=U;z<=A;z++)if(In[z-U]===0&&Rt(xe,p[z])){ze=z;break}ze===void 0?ct(xe,m,b,!0):(In[ze-U]=C+1,ze>=vo?vo=ze:Yt=!0,x(xe,p[ze],_,null,m,b,T,E,I),J++)}const Eo=Yt?rf(In):Zt;for(z=Eo.length-1,C=Fe-1;C>=0;C--){const xe=U+C,ze=p[xe],bo=xe+1<R?p[xe+1].el:y;In[C]===0?x(null,ze,_,bo,m,b,T,E,I):Yt&&(z<0||C!==Eo[z]?Kt(ze,_,bo,2):z--)}}},Kt=(f,p,_,y,m=null)=>{const{el:b,type:T,transition:E,children:I,shapeFlag:C}=f;if(C&6){Kt(f.component.subTree,p,_,y);return}if(C&128){f.suspense.move(p,_,y);return}if(C&64){T.move(f,p,_,Gt);return}if(T===Oe){s(b,p,_);for(let S=0;S<I.length;S++)Kt(I[S],p,_,y);s(f.anchor,p,_);return}if(T===gi){te(f,p,_);return}if(y!==2&&C&1&&E)if(y===0)E.beforeEnter(b),s(b,p,_),Ie(()=>E.enter(b),m);else{const{leave:S,delayLeave:A,afterLeave:O}=E,U=()=>s(b,p,_),q=()=>{S(b,()=>{U(),O&&O()})};A?A(b,U,q):q()}else s(b,p,_)},ct=(f,p,_,y=!1,m=!1)=>{const{type:b,props:T,ref:E,children:I,dynamicChildren:C,shapeFlag:R,patchFlag:S,dirs:A}=f;if(E!=null&&$i(E,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const O=R&1&&A,U=!gs(f);let q;if(U&&(q=T&&T.onVnodeBeforeUnmount)&&Ke(q,p,f),R&6)vu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}O&&wt(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,Gt,y):C&&(b!==Oe||S>0&&S&64)?tt(C,p,_,!1,!0):(b===Oe&&S&384||!m&&R&16)&&tt(I,p,_),y&&yo(f)}(U&&(q=T&&T.onVnodeUnmounted)||O)&&Ie(()=>{q&&Ke(q,p,f),O&&wt(f,null,p,"unmounted")},_)},yo=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===Oe){Cu(_,y);return}if(p===gi){Ee(f);return}const b=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,I=()=>T(_,b);E?E(f.el,b,I):I()}else b()},Cu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},vu=(f,p,_)=>{const{bum:y,scope:m,update:b,subTree:T,um:E}=f;y&&_s(y),m.stop(),b&&(b.active=!1,ct(T,f,p,_)),E&&Ie(E,p),Ie(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},tt=(f,p,_,y=!1,m=!1,b=0)=>{for(let T=b;T<f.length;T++)ct(f[T],p,_,y,m)},is=f=>f.shapeFlag&6?is(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Co=(f,p,_)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):x(p._vnode||null,f,p,null,null,null,_),Po(),ga(),p._vnode=f},Gt={p:x,um:ct,m:Kt,r:yo,mt:oi,mc:ne,pc:et,pbc:be,n:is,o:t};let ai,ci;return e&&([ai,ci]=e(Gt)),{render:Co,hydrate:ai,createApp:tf(Co,ai)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function La(t,e,n=!1){const s=t.children,i=e.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ht(i[r]),l.el=o.el),n||La(o,l))}}function rf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const of=t=>t.__isTeleport,Oe=Symbol(void 0),xr=Symbol(void 0),Ve=Symbol(void 0),gi=Symbol(void 0),An=[];let He=null;function Xe(t=!1){An.push(He=t?null:[])}function lf(){An.pop(),He=An[An.length-1]||null}let Wn=1;function Uo(t){Wn+=t}function Ba(t){return t.dynamicChildren=Wn>0?He||Zt:null,lf(),Wn>0&&He&&He.push(t),t}function ft(t,e,n,s,i,r){return Ba(_t(t,e,n,s,i,r,!0))}function Wa(t,e,n,s,i){return Ba(je(t,e,n,s,i,!0))}function af(t){return t?t.__v_isVNode===!0:!1}function Rt(t,e){return t.type===e.type&&t.key===e.key}const Ys="__vInternal",Ha=({key:t})=>t!=null?t:null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?ue(t)||me(t)||k(t)?{i:We,r:t,k:e,f:!!n}:t:null;function _t(t,e=null,n=null,s=0,i=null,r=t===Oe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ha(e),ref:e&&ms(e),scopeId:Ca,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Rr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),Wn>0&&!o&&He&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&He.push(a),a}const je=cf;function cf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Uh)&&(t=Ve),af(t)){const l=Ct(t,e,!0);return n&&Rr(l,n),Wn>0&&!r&&He&&(l.shapeFlag&6?He[He.indexOf(t)]=l:He.push(l)),l.patchFlag|=-2,l}if(Ef(t)&&(t=t.__vccOpts),e){e=uf(e);let{class:l,style:a}=e;l&&!ue(l)&&(e.class=ve(l)),ee(a)&&(aa(a)&&!D(a)&&(a=ye({},a)),e.style=fr(a))}const o=ue(t)?1:Ih(t)?128:of(t)?64:ee(t)?4:k(t)?2:0;return _t(t,e,n,s,i,o,r,!0)}function uf(t){return t?aa(t)||Ys in t?ye({},t):t:null}function Ct(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?ff(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ha(l),ref:e&&e.ref?n&&i?D(i)?i.concat(ms(e)):[i,ms(e)]:ms(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ct(t.ssContent),ssFallback:t.ssFallback&&Ct(t.ssFallback),el:t.el,anchor:t.anchor}}function hf(t=" ",e=0){return je(xr,null,t,e)}function Ua(t="",e=!1){return e?(Xe(),Wa(Ve,null,t)):je(Ve,null,t)}function Ye(t){return t==null||typeof t=="boolean"?je(Ve):D(t)?je(Oe,null,t.slice()):typeof t=="object"?ht(t):je(xr,null,String(t))}function ht(t){return t.el===null||t.memo?t:Ct(t)}function Rr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Rr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ys in e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[hf(e)]):n=8);t.children=e,t.shapeFlag|=n}function ff(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ve([e.class,s.class]));else if(i==="style")e.style=fr([e.style,s.style]);else if(Hs(i)){const r=e[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ke(t,e,n,s=null){Me(t,e,7,[n,s])}const df=Fa();let pf=0;function _f(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||df,r={uid:pf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oa(s,i),emitsOptions:ya(s,i),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=yh.bind(null,r),t.ce&&t.ce(r),r}let pe=null;const gf=()=>pe||We,un=t=>{pe=t,t.scope.on()},kt=()=>{pe&&pe.scope.off(),pe=null};function $a(t){return t.vnode.shapeFlag&4}let Hn=!1;function mf(t,e=!1){Hn=e;const{props:n,children:s}=t.vnode,i=$a(t);Yh(t,n,i,e),Jh(t,s);const r=i?yf(t,e):void 0;return Hn=!1,r}function yf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ca(new Proxy(t.ctx,Vh));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?vf(t):null;un(t),mn();const r=pt(s,t,0,[t.props,i]);if(yn(),kt(),Kl(r)){if(r.then(kt,kt),e)return r.then(o=>{$o(t,o,e)}).catch(o=>{js(o,t,0)});t.asyncDep=r}else $o(t,r,e)}else Va(t,e)}function $o(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=fa(e)),Va(t,n)}let Vo;function Va(t,e,n){const s=t.type;if(!t.render){if(!e&&Vo&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ye(ye({isCustomElement:r,delimiters:l},o),a);s.render=Vo(i,c)}}t.render=s.render||$e}un(t),mn(),jh(t),yn(),kt()}function Cf(t){return new Proxy(t.attrs,{get(e,n){return Ae(t,"get","$attrs"),e[n]}})}function vf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Cf(t))},slots:t.slots,emit:t.emit,expose:e}}function Qs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fa(ca(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)}}))}function Ef(t){return k(t)&&"__vccOpts"in t}const bf=(t,e)=>hh(t,e,Hn),wf="3.2.38",If="http://www.w3.org/2000/svg",At=typeof document<"u"?document:null,jo=At&&At.createElement("template"),Tf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?At.createElementNS(If,t):At.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{jo.innerHTML=s?`<svg>${t}</svg>`:t;const l=jo.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Sf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Nf(t,e,n){const s=t.style,i=ue(n);if(n&&!i){for(const r in n)Vi(s,r,n[r]);if(e&&!ue(e))for(const r in e)n[r]==null&&Vi(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const qo=/\s*!important$/;function Vi(t,e,n){if(D(n))n.forEach(s=>Vi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=xf(t,e);qo.test(n)?t.setProperty(gn(s),n.replace(qo,""),"important"):t[s]=n}}const zo=["Webkit","Moz","ms"],mi={};function xf(t,e){const n=mi[e];if(n)return n;let s=an(e);if(s!=="filter"&&s in t)return mi[e]=s;s=Ql(s);for(let i=0;i<zo.length;i++){const r=zo[i]+s;if(r in t)return mi[e]=r}return e}const Ko="http://www.w3.org/1999/xlink";function Rf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ko,e.slice(6,e.length)):t.setAttributeNS(Ko,e,n);else{const r=bu(e);n==null||r&&!jl(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Af(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jl(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[ja,Pf]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let ji=0;const Of=Promise.resolve(),Df=()=>{ji=0},Mf=()=>ji||(Of.then(Df),ji=ja());function Xt(t,e,n,s){t.addEventListener(e,n,s)}function kf(t,e,n,s){t.removeEventListener(e,n,s)}function Ff(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Lf(e);if(s){const c=r[e]=Bf(s,i);Xt(t,l,c,a)}else o&&(kf(t,l,o,a),r[e]=void 0)}}const Go=/(?:Once|Passive|Capture)$/;function Lf(t){let e;if(Go.test(t)){e={};let s;for(;s=t.match(Go);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}function Bf(t,e){const n=s=>{const i=s.timeStamp||ja();(Pf||i>=n.attached-1)&&Me(Wf(s,n.value),e,5,[s])};return n.value=t,n.attached=Mf(),n}function Wf(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yo=/^on[a-z]/,Hf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Sf(t,s,i):e==="style"?Nf(t,n,s):Hs(e)?dr(e)||Ff(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uf(t,e,s,i))?Af(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rf(t,e,s,i))};function Uf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yo.test(e)&&k(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yo.test(e)&&ue(n)?!1:e in t}const $f={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ah.props;const Qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>_s(e,n):e};function Vf(t){t.target.composing=!0}function Xo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qa={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Qo(i);const r=s||i.props&&i.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Ai(l)),t._assign(l)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",Vf),Xt(t,"compositionend",Xo),Xt(t,"change",Xo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Qo(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ai(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},jf=["ctrl","shift","alt","meta"],qf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jf.some(n=>t[`${n}Key`]&&!e.includes(n))},za=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=qf[e[i]];if(r&&r(n,e))return}return t(n,...s)},zf=ye({patchProp:Hf},Tf);let Jo;function Kf(){return Jo||(Jo=nf(zf))}const Gf=(...t)=>{const e=Kf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Yf(s);if(!i)return;const r=e._component;!k(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Yf(t){return ue(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(t,e){if(!t)throw Cn(e)},Cn=function(t){return new Error("Firebase Database ("+Ka.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ga(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const w=c<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ya=function(t){const e=Ga(t);return Ar.encodeByteArray(e,!0)},Qa=function(t){return Ya(t).replace(/\./g,"")},Zo=function(t){try{return Ar.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){return Xa(void 0,t)}function Xa(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Jf(n)||(t[n]=Xa(t[n],e[n]));return t}function Jf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ja(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zf())}function ed(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Za(){return Ka.NODE_ADMIN===!0}function td(){return typeof indexedDB=="object"}function nd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="FirebaseError";class Jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sd,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ec.prototype.create)}}class ec{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?id(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,l,s)}}function id(t,e){return t.replace(rd,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const rd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Un(Zo(r[0])||""),n=Un(Zo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},od=function(t){const e=tc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ld=function(t){const e=tc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function el(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Is(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(tl(r)&&tl(o)){if(!qi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function tl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Pr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Js=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dd(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fd(t){return t===St?void 0:t}function dd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const _d={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},gd=Y.INFO,md={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},yd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=md[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=gd,this._logHandler=yd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Cd=(t,e)=>e.some(n=>t instanceof n);let nl,sl;function vd(){return nl||(nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ed(){return sl||(sl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,zi=new WeakMap,ic=new WeakMap,yi=new WeakMap,Dr=new WeakMap;function bd(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(gt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sc.set(n,t)}).catch(()=>{}),Dr.set(e,t),e}function wd(t){if(zi.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});zi.set(t,e)}let Ki={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ic.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Id(t){Ki=t(Ki)}function Td(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ci(this),e,...n);return ic.set(s,e.sort?e.sort():[e]),gt(s)}:Ed().includes(t)?function(...e){return t.apply(Ci(this),e),gt(sc.get(this))}:function(...e){return gt(t.apply(Ci(this),e))}}function Sd(t){return typeof t=="function"?Td(t):(t instanceof IDBTransaction&&wd(t),Cd(t,vd())?new Proxy(t,Ki):t)}function gt(t){if(t instanceof IDBRequest)return bd(t);if(yi.has(t))return yi.get(t);const e=Sd(t);return e!==t&&(yi.set(t,e),Dr.set(e,t)),e}const Ci=t=>Dr.get(t);function Nd(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=gt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(gt(o.result),a.oldVersion,a.newVersion,gt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const xd=["get","getKey","getAll","getAllKeys","count"],Rd=["put","add","delete","clear"],vi=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vi.get(e))return vi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Rd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||xd.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return vi.set(e,r),r}Id(t=>({...t,get:(e,n,s)=>il(e,n)||t.get(e,n,s),has:(e,n)=>!!il(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",rl="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new nc("@firebase/app"),Od="@firebase/app-compat",Dd="@firebase/analytics-compat",Md="@firebase/analytics",kd="@firebase/app-check-compat",Fd="@firebase/app-check",Ld="@firebase/auth",Bd="@firebase/auth-compat",Wd="@firebase/database",Hd="@firebase/database-compat",Ud="@firebase/functions",$d="@firebase/functions-compat",Vd="@firebase/installations",jd="@firebase/installations-compat",qd="@firebase/messaging",zd="@firebase/messaging-compat",Kd="@firebase/performance",Gd="@firebase/performance-compat",Yd="@firebase/remote-config",Qd="@firebase/remote-config-compat",Xd="@firebase/storage",Jd="@firebase/storage-compat",Zd="@firebase/firestore",ep="@firebase/firestore-compat",tp="firebase",np="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",sp={[Gi]:"fire-core",[Od]:"fire-core-compat",[Md]:"fire-analytics",[Dd]:"fire-analytics-compat",[Fd]:"fire-app-check",[kd]:"fire-app-check-compat",[Ld]:"fire-auth",[Bd]:"fire-auth-compat",[Wd]:"fire-rtdb",[Hd]:"fire-rtdb-compat",[Ud]:"fire-fn",[$d]:"fire-fn-compat",[Vd]:"fire-iid",[jd]:"fire-iid-compat",[qd]:"fire-fcm",[zd]:"fire-fcm-compat",[Kd]:"fire-perf",[Gd]:"fire-perf-compat",[Yd]:"fire-rc",[Qd]:"fire-rc-compat",[Xd]:"fire-gcs",[Jd]:"fire-gcs-compat",[Zd]:"fire-fst",[ep]:"fire-fst-compat","fire-js":"fire-js",[tp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new Map,Yi=new Map;function ip(t,e){try{t.container.addComponent(e)}catch(n){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(Yi.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Yi.set(e,t);for(const n of Ts.values())ip(n,t);return!0}function rp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bt=new ec("app","Firebase",op);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=np;function cp(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});const i=Ts.get(s);if(i){if(qi(t,i.options)&&qi(n,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const r=new pd(s);for(const l of Yi.values())r.addComponent(l);const o=new lp(t,n,r);return Ts.set(s,o),o}function up(t=rc){const e=Ts.get(t);if(!e)throw Bt.create("no-app",{appName:t});return e}function sn(t,e,n){var s;let i=(s=sp[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}Ss(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="firebase-heartbeat-database",fp=1,Vn="firebase-heartbeat-store";let Ei=null;function oc(){return Ei||(Ei=Nd(hp,fp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vn)}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),Ei}async function dp(t){var e;try{return(await oc()).transaction(Vn).objectStore(Vn).get(lc(t))}catch(n){if(n instanceof Jn)Lt.warn(n.message);else{const s=Bt.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Lt.warn(s.message)}}}async function ol(t,e){var n;try{const i=(await oc()).transaction(Vn,"readwrite");return await i.objectStore(Vn).put(e,lc(t)),i.done}catch(s){if(s instanceof Jn)Lt.warn(s.message);else{const i=Bt.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Lt.warn(i.message)}}}function lc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1024,_p=30*24*60*60*1e3;class gp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=_p}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ll(),{heartbeatsToSend:n,unsentEntries:s}=mp(this._heartbeatsCache.heartbeats),i=Qa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ll(){return new Date().toISOString().substring(0,10)}function mp(t,e=pp){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),al(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),al(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return td()?nd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ol(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function al(t){return Qa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){Ss(new $n("platform-logger",e=>new Ad(e),"PRIVATE")),Ss(new $n("heartbeat",e=>new gp(e),"PRIVATE")),sn(Gi,rl,t),sn(Gi,rl,"esm2017"),sn("fire-js","")}Cp("");var vp="firebase",Ep="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(vp,Ep,"app");const cl="@firebase/database",ul="0.13.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac="";function bp(t){ac=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Un(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wp(e)}}catch{}return new Ip},Ot=cc("localStorage"),Qi=cc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new nc("@firebase/database"),Tp=function(){let t=1;return function(){return t++}}(),uc=function(t){const e=ud(t),n=new cd;n.update(e);const s=n.digest();return Ar.encodeByteArray(s)},Zn=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zn.apply(null,s):typeof s=="object"?e+=ce(s):e+=s,e+=" "}return e};let Ft=null,hl=!0;const Sp=function(t,e){v(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(rn.logLevel=Y.VERBOSE,Ft=rn.log.bind(rn),e&&Qi.set("logging_enabled",!0)):typeof t=="function"?Ft=t:(Ft=null,Qi.remove("logging_enabled"))},fe=function(...t){if(hl===!0&&(hl=!1,Ft===null&&Qi.get("logging_enabled")===!0&&Sp(!0)),Ft){const e=Zn.apply(null,t);Ft(e)}},es=function(t){return function(...e){fe(t,...e)}},Xi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zn(...t);rn.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Zn(...t)}`;throw rn.error(e),new Error(e)},Ne=function(...t){const e="FIREBASE WARNING: "+Zn(...t);rn.warn(e)},Np=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fn="[MIN_NAME]",Ht="[MAX_NAME]",jt=function(t,e){if(t===e)return 0;if(t===fn||e===Ht)return-1;if(e===fn||t===Ht)return 1;{const n=fl(t),s=fl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Rp=function(t,e){return t===e?0:t<e?-1:1},Tn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},kr=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ce(e[s]),n+=":",n+=kr(t[e[s]]);return n+="}",n},hc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function _e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fc=function(t){v(!Mr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(u.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ap=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Pp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Op(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Dp=new RegExp("^-?(0*)\\d{1,10}$"),Mp=-2147483648,kp=2147483647,fl=function(t){if(Dp.test(t)){const e=Number(t);if(e>=Mp&&e<=kp)return e}return null},vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},Fp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ne(e)}}class Ji{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ji.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="5",dc="v",pc="s",_c="r",gc="f",mc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yc="ls",Cc="p",Zi="ac",vc="websocket",Ec="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ot.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Hp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bc(t,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");let s;if(e===vc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ec)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hp(t)&&(n.ns=t.namespace);const i=[];return _e(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.counters_={}}incrementCounter(e,n=1){Je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Xf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi={},wi={};function Lr(t){const e=t.toString();return bi[e]||(bi[e]=new Up),bi[e]}function $p(t,e){const n=t.toString();return wi[n]||(wi[n]=e()),wi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&vn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="start",jp="close",qp="pLPCommand",zp="pRTLPCB",wc="id",Ic="pw",Tc="ser",Kp="cb",Gp="seg",Yp="ts",Qp="d",Xp="dframe",Sc=1870,Nc=30,Jp=Sc-Nc,Zp=25e3,e_=3e4;class Jt{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=es(e),this.stats_=Lr(n),this.urlFn=a=>(this.appCheckToken&&(a[Zi]=this.appCheckToken),bc(n,Ec,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Vp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(e_)),xp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Br((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dl)this.id=l,this.password=a;else if(o===jp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[dl]="t",s[Tc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Kp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[dc]=Fr,this.transportSessionId&&(s[pc]=this.transportSessionId),this.lastSessionId&&(s[yc]=this.lastSessionId),this.applicationId&&(s[Cc]=this.applicationId),this.appCheckToken&&(s[Zi]=this.appCheckToken),typeof location<"u"&&location.hostname&&mc.test(location.hostname)&&(s[_c]=gc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ap()&&!Pp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ya(n),i=hc(s,Jp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Xp]="t",s[wc]=e,s[Ic]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Br{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tp(),window[qp+this.uniqueCallbackIdentifier]=e,window[zp+this.uniqueCallbackIdentifier]=n,this.myIFrame=Br.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){fe("frame writing exception"),l.stack&&fe(l.stack),fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wc]=this.myID,e[Ic]=this.myPW,e[Tc]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nc+s.length<=Sc;){const o=this.pendingSegs.shift();s=s+"&"+Gp+i+"="+o.seg+"&"+Yp+i+"="+o.ts+"&"+Qp+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Zp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=16384,n_=45e3;let Ns=null;typeof MozWebSocket<"u"?Ns=MozWebSocket:typeof WebSocket<"u"&&(Ns=WebSocket);class Be{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=es(this.connId),this.stats_=Lr(n),this.connURL=Be.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[dc]=Fr,typeof location<"u"&&location.hostname&&mc.test(location.hostname)&&(o[_c]=gc),n&&(o[pc]=n),s&&(o[yc]=s),i&&(o[Zi]=i),r&&(o[Cc]=r),bc(e,vc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ot.set("previous_websocket_failure",!0);try{let s;Za(),this.mySock=new Ns(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ns!==null&&!Be.forceDisallow_}static previouslyFailed(){return Ot.isInMemoryStorage||Ot.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Un(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hc(n,t_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(n_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2;Be.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jt,Be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Be&&Be.isAvailable();let s=n&&!Be.previouslyFailed();if(e.webSocketOnly&&(n||Ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Be];else{const i=this.transports_=[];for(const r of jn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);jn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=6e4,i_=5e3,r_=10*1024,o_=100*1024,Ii="t",pl="d",l_="s",_l="r",a_="e",gl="o",ml="a",yl="n",Cl="p",c_="h";class u_{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=es("c:"+this.id+":"),this.transportManager_=new jn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>o_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>r_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ii in e){const n=e[Ii];n===ml?this.upgradeIfSecondaryHealthy_():n===_l?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Tn("t",e),s=Tn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ml,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Tn("t",e),s=Tn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Tn(Ii,e);if(pl in e){const s=e[pl];if(n===c_)this.onHandshake_(s);else if(n===yl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===l_?this.onConnectionShutdown_(s):n===_l?this.onReset_(s):n===a_?Xi("Server Error: "+s):n===gl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Fr!==s&&Ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Pn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(s_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Rc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ja()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xs}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl=32,El=768;class j{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new j("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new j(t.pieces_,e)}function Wr(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function h_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ac(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new j(e,0)}function ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof j)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new j(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Te(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return Te(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function f_(t,e){const n=qn(t,0),s=qn(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=jt(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Hr(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function De(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class d_{constructor(e,n){this.errorPrefix_=n,this.parts_=qn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Js(this.parts_[s]);Pc(this)}}function p_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Js(e),Pc(t)}function __(t){const e=t.parts_.pop();t.byteLength_-=Js(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pc(t){if(t.byteLength_>El)throw new Error(t.errorPrefix_+"has a key path longer than "+El+" bytes ("+t.byteLength_+").");if(t.parts_.length>vl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vl+") or object contains a cycle "+Nt(t))}function Nt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Rc{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ur}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=1e3,g_=60*5*1e3,bl=30*1e3,m_=1.3,y_=3e4,C_="server_kill",wl=3;class it extends xc{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=it.nextPersistentConnectionId_++,this.log_=es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sn,this.maxReconnectDelay_=g_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Za())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ur.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ce(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xs,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;it.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Je(e,"w")){const s=hn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ld(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=od(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Xi("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>y_&&(this.reconnectDelay_=Sn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*m_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+it.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){v(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?fe("getToken() completed but was canceled"):(fe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new u_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ne(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(C_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ne(h),a())}}}interrupt(e){fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],el(this.interruptReasons_)&&(this.reconnectDelay_=Sn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>kr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new j(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wl&&(this.reconnectDelay_=bl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ac.replace(/\./g,"-")]=1,Ja()?e["framework.cordova"]=1:ed()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xs.getInstance().currentlyOnline();return el(this.interruptReasons_)&&e}}it.nextPersistentConnectionId_=0;it.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(fn,e),i=new F(fn,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class Oc extends Zs{static get __EMPTY_NODE(){return us}static set __EMPTY_NODE(e){us=e}compare(e,n){return jt(e.name,n.name)}isDefinedOn(e){throw Cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Ht,us)}makePost(e,n){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,us)}toString(){return".key"}}const on=new Oc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:ae.RED,this.left=i!=null?i:Se.EMPTY_NODE,this.right=r!=null?r:Se.EMPTY_NODE}copy(e,n,s,i,r){return new ae(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class v_{copy(e,n,s,i,r){return this}insert(e,n,s){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,n=Se.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Se(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new v_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e){return jt(t.name,e.name)}function $r(t,e){return jt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let er;function b_(t){er=t}const Dc=function(t){return typeof t=="number"?"number:"+fc(t):"string:"+t},Mc=function(t){if(t.isLeafNode()){const e=t.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Je(e,".sv"),"Priority must be a string or number.")}else v(t===er||t.isEmpty(),"priority of unexpected type.");v(t===er||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il;class le{constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mc(this.priorityNode_)}static set __childrenNodeConstructor(e){Il=e}static get __childrenNodeConstructor(){return Il}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:L(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dc(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fc(this.value_):e+=this.value_,this.lazyHash_=uc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+n),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc,Fc;function w_(t){kc=t}function I_(t){Fc=t}class T_ extends Zs{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?jt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Ht,new le("[PRIORITY-POST]",Fc))}makePost(e,n){const s=kc(e);return new F(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const re=new T_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=Math.log(2);class N_{constructor(e){const n=r=>parseInt(Math.log(r)/S_,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,d;if(u===0)return null;if(u===1)return h=t[a],d=n?n(h):h,new ae(d,h.node,ae.BLACK,null,null);{const g=parseInt(u/2,10)+a,w=i(a,g),N=i(g+1,c);return h=t[g],d=n?n(h):h,new ae(d,h.node,ae.BLACK,w,N)}},r=function(a){let c=null,u=null,h=t.length;const d=function(w,N){const x=h-w,M=h;h-=w;const he=i(x+1,M),Z=t[x],te=n?n(Z):Z;g(new ae(te,Z.node,N,null,he))},g=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<a.count;++w){const N=a.nextBitIsOne(),x=Math.pow(2,a.count-(w+1));N?d(x,ae.BLACK):(d(x,ae.BLACK),d(x,ae.RED))}return u},o=new N_(t.length),l=r(o);return new Se(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti;const Qt={};class st{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return v(Qt&&re,"ChildrenNode.ts has not been loaded"),Ti=Ti||new st({".priority":Qt},{".priority":re}),Ti}get(e){const n=hn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Se?n:null}hasIndex(e){return Je(this.indexSet_,e.toString())}addIndex(e,n){v(e!==on,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Rs(s,e.getCompare()):l=Qt;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new st(u,c)}addToIndexes(e,n){const s=Is(this.indexes_,(i,r)=>{const o=hn(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===Qt)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Rs(l,o.getCompare())}else return Qt;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new st(s,this.indexSet_)}removeFromIndexes(e,n){const s=Is(this.indexes_,i=>{if(i===Qt)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new st(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn;class P{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mc(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Nn||(Nn=new P(new Se($r),null,st.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Nn}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Nn:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Nn:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{v(L(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Q(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(re,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dc(this.getPriority().val())+":"),this.forEachChild(re,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":uc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ts?-1:0}withIndex(e){if(e===on||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===on||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(re),i=n.getIterator(re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===on?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class x_ extends P{constructor(){super(new Se($r),P.EMPTY_NODE,st.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const ts=new x_;Object.defineProperties(F,{MIN:{value:new F(fn,P.EMPTY_NODE)},MAX:{value:new F(Ht,ts)}});Oc.__EMPTY_NODE=P.EMPTY_NODE;le.__childrenNodeConstructor=P;b_(ts);I_(ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=!0;function de(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,de(e))}if(!(t instanceof Array)&&R_){const n=[];let s=!1;if(_e(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=de(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return P.EMPTY_NODE;const r=Rs(n,E_,o=>o.name,$r);if(s){const o=Rs(n,re.getCompare());return new P(r,de(e),new st({".priority":o},{".priority":re}))}else return new P(r,de(e),st.Default)}else{let n=P.EMPTY_NODE;return _e(t,(s,i)=>{if(Je(t,s)&&s.substring(0,1)!=="."){const r=de(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(de(e))}}w_(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends Zs{constructor(e){super(),this.indexPath_=e,v(!B(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?jt(e.name,n.name):r}makePost(e,n){const s=de(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,ts);return new F(Ht,e)}toString(){return qn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends Zs{compare(e,n){const s=e.node.compareTo(n.node);return s===0?jt(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=de(e);return new F(n,s)}toString(){return".value"}}const O_=new P_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){return{type:"value",snapshotNode:t}}function dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Kn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function D_(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(zn(n,l)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(dn(n,s)):o.trackChildChange(Kn(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(re,(i,r)=>{n.hasChild(i)||s.trackChildChange(zn(i,r))}),n.isLeafNode()||n.forEachChild(re,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Kn(i,r,o))}else s.trackChildChange(dn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.indexedFilter_=new Vr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gn.getStartPost_(e),this.endPost_=Gn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(re,(o,l)=>{r.matches(new F(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.rangedFilter_=new Gn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,g)=>h(g,d)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;v(l.numChildren()===this.limit_,"");const a=new F(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(Kn(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(zn(n,h));const N=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(dn(d.name,d.node)),N.updateImmediateChild(d.name,d.node)):N}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(zn(c.name,c.node)),r.trackChildChange(dn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ht}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new jr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function k_(t){return t.loadsAllData()?new Vr(t.getIndex()):t.hasLimit()?new M_(t):new Gn(t)}function Tl(t){const e={};if(t.isDefault())return e;let n;return t.index_===re?n="$priority":t.index_===O_?n="$value":t.index_===on?n="$key":(v(t.index_ instanceof A_,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_&&(e.startAt=ce(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+ce(t.indexStartName_))),t.endSet_&&(e.endAt=ce(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+ce(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends xc{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=As.getListenId_(e,s),l={};this.listens_[o]=l;const a=Tl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),hn(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=As.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Tl(e._queryParams),s=e._path.toString(),i=new Xs;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ad(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Un(l.responseText)}catch{Ne("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Ne("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(){return{value:null,children:new Map}}function Bc(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,Ps());const i=t.children.get(s);e=Q(e),Bc(i,e,n)}}function tr(t,e,n){t.value!==null?n(e,t.value):L_(t,(s,i)=>{const r=new j(e.toString()+"/"+s);tr(i,r,n)})}function L_(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&_e(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=10*1e3,W_=30*1e3,H_=5*60*1e3;class U_{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new B_(e);const s=Nl+(W_-Nl)*Math.random();Pn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;_e(e,(i,r)=>{r>0&&Je(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Pn(this.reportStats_.bind(this),Math.floor(Math.random()*2*H_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ue||(Ue={}));function qr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kr(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ue.ACK_USER_WRITE,this.source=qr()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new j(e));return new Os($(),n,this.revert)}}else return v(L(this.path)===e,"operationForChild called for unrelated child."),new Os(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){this.source=e,this.path=n,this.type=Ue.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new Yn(this.source,$()):new Yn(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ue.OVERWRITE}operationForChild(e){return B(this.path)?new Ut(this.source,$(),this.snap.getImmediateChild(e)):new Ut(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ue.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new j(e));return n.isEmpty()?null:n.value?new Ut(this.source,$(),n.value):new pn(this.source,$(),n)}else return v(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pn(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function V_(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(D_(o.childName,o.snapshotNode))}),xn(t,i,"child_removed",e,s,n),xn(t,i,"child_added",e,s,n),xn(t,i,"child_moved",r,s,n),xn(t,i,"child_changed",e,s,n),xn(t,i,"value",e,s,n),i}function xn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>q_(t,l,a)),o.forEach(l=>{const a=j_(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function j_(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function q_(t,e,n){if(e.childName==null||n.childName==null)throw Cn("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){return{eventCache:t,serverCache:e}}function On(t,e,n,s){return ei(new $t(e,n,s),t.serverCache)}function Wc(t,e,n,s){return ei(t.eventCache,new $t(e,n,s))}function nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Vt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;const z_=()=>(Si||(Si=new Se(Rp)),Si);class G{constructor(e,n=z_()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return _e(e,(s,i)=>{n=n.set(new j(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(B(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Q(e),n);return r!=null?{path:ie(new j(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(Q(e)):new G(null)}}set(e,n){if(B(e))return new G(n,this.children);{const s=L(e),r=(this.children.get(s)||new G(null)).set(Q(e),n),o=this.children.insert(s,r);return new G(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(Q(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(Q(e)):null}}setTree(e,n){if(B(e))return n;{const s=L(e),r=(this.children.get(s)||new G(null)).setTree(Q(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new G(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ie(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(B(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(Q(e),ie(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,s){if(B(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(Q(e),ie(n,i),s):new G(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new G(null))}}function Dn(t,e,n){if(B(e))return new qe(new G(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Te(i,e);return r=r.updateChild(o,n),new qe(t.writeTree_.set(i,r))}else{const i=new G(n),r=t.writeTree_.setTree(e,i);return new qe(r)}}}function sr(t,e,n){let s=t;return _e(n,(i,r)=>{s=Dn(s,ie(e,i),r)}),s}function xl(t,e){if(B(e))return qe.empty();{const n=t.writeTree_.setTree(e,new G(null));return new qe(n)}}function ir(t,e){return qt(t,e)!=null}function qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Te(n.path,e)):null}function Rl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function mt(t,e){if(B(e))return t;{const n=qt(t,e);return n!=null?new qe(new G(n)):new qe(t.writeTree_.subtree(e))}}function rr(t){return t.writeTree_.isEmpty()}function _n(t,e){return Hc($(),t.writeTree_,e)}function Hc(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Hc(ie(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ie(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e){return jc(e,t)}function K_(t,e,n,s,i){v(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Dn(t.visibleWrites,e,n)),t.lastWriteId=s}function G_(t,e,n,s){v(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=sr(t.visibleWrites,e,n),t.lastWriteId=s}function Y_(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Q_(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);v(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&X_(l,s.path)?i=!1:De(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return J_(t),!0;if(s.snap)t.visibleWrites=xl(t.visibleWrites,s.path);else{const l=s.children;_e(l,a=>{t.visibleWrites=xl(t.visibleWrites,ie(s.path,a))})}return!0}else return!1}function X_(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(ie(t.path,n),e))return!0;return!1}function J_(t){t.visibleWrites=Uc(t.allWrites,Z_,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Z_(t){return t.visible}function Uc(t,e,n){let s=qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)De(n,o)?(l=Te(n,o),s=Dn(s,l,r.snap)):De(o,n)&&(l=Te(o,n),s=Dn(s,$(),r.snap.getChild(l)));else if(r.children){if(De(n,o))l=Te(n,o),s=sr(s,l,r.children);else if(De(o,n))if(l=Te(o,n),B(l))s=sr(s,$(),r.children);else{const a=hn(r.children,L(l));if(a){const c=a.getChild(Q(l));s=Dn(s,$(),c)}}}else throw Cn("WriteRecord should have .snap or .children")}}return s}function $c(t,e,n,s,i){if(!s&&!i){const r=qt(t.visibleWrites,e);if(r!=null)return r;{const o=mt(t.visibleWrites,e);if(rr(o))return n;if(n==null&&!ir(o,$()))return null;{const l=n||P.EMPTY_NODE;return _n(o,l)}}}else{const r=mt(t.visibleWrites,e);if(!i&&rr(r))return n;if(!i&&n==null&&!ir(r,$()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(De(c.path,e)||De(e,c.path))},l=Uc(t.allWrites,o,e),a=n||P.EMPTY_NODE;return _n(l,a)}}}function eg(t,e,n){let s=P.EMPTY_NODE;const i=qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=mt(t.visibleWrites,e);return n.forEachChild(re,(o,l)=>{const a=_n(mt(r,new j(o)),l);s=s.updateImmediateChild(o,a)}),Rl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=mt(t.visibleWrites,e);return Rl(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function tg(t,e,n,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ie(e,n);if(ir(t.visibleWrites,r))return null;{const o=mt(t.visibleWrites,r);return rr(o)?i.getChild(n):_n(o,i.getChild(n))}}function ng(t,e,n,s){const i=ie(e,n),r=qt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=mt(t.visibleWrites,i);return _n(o,s.getNode().getImmediateChild(n))}else return null}function sg(t,e){return qt(t.visibleWrites,e)}function ig(t,e,n,s,i,r,o){let l;const a=mt(t.visibleWrites,e),c=qt(a,$());if(c!=null)l=c;else if(n!=null)l=_n(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function rg(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function Ds(t,e,n,s){return $c(t.writeTree,t.treePath,e,n,s)}function Yr(t,e){return eg(t.writeTree,t.treePath,e)}function Al(t,e,n,s){return tg(t.writeTree,t.treePath,e,n,s)}function Ms(t,e){return sg(t.writeTree,ie(t.treePath,e))}function og(t,e,n,s,i,r){return ig(t.writeTree,t.treePath,e,n,s,i,r)}function Qr(t,e,n){return ng(t.writeTree,t.treePath,e,n)}function Vc(t,e){return jc(ie(t.treePath,e),t.writeTree)}function jc(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Kn(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,zn(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,dn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Kn(s,e.snapshotNode,i.oldSnap));else throw Cn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qc=new ag;class Xr{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qr(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vt(this.viewCache_),r=og(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){return{filter:t}}function ug(t,e){v(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hg(t,e,n,s,i){const r=new lg;let o,l;if(n.type===Ue.OVERWRITE){const c=n;c.source.fromUser?o=or(t,e,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=ks(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Ue.MERGE){const c=n;c.source.fromUser?o=dg(t,e,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=lr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Ue.ACK_USER_WRITE){const c=n;c.revert?o=gg(t,e,c.path,s,i,r):o=pg(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ue.LISTEN_COMPLETE)o=_g(t,e,n.path,s,r);else throw Cn("Unknown operation type: "+n.type);const a=r.getChanges();return fg(e,o,a),{viewCache:o,changes:a}}function fg(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Lc(nr(e)))}}function zc(t,e,n,s,i,r){const o=e.eventCache;if(Ms(s,n)!=null)return e;{let l,a;if(B(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Vt(e),u=c instanceof P?c:P.EMPTY_NODE,h=Yr(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Ds(s,Vt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){v(vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Al(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=Q(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=Al(s,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Qr(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return On(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ks(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&vt(n)>1)return e;const w=Q(n),x=a.getNode().getImmediateChild(g).updateChild(w,s);g===".priority"?c=u.updatePriority(a.getNode(),x):c=u.updateChild(a.getNode(),g,x,w,qc,null)}const h=Wc(e,c,a.isFullyInitialized()||B(n),u.filtersNodes()),d=new Xr(i,h,r);return zc(t,h,n,i,d,l)}function or(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Xr(i,e,r);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=On(e,c,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=On(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=Q(n),g=l.getNode().getImmediateChild(h);let w;if(B(d))w=s;else{const N=u.getCompleteChild(h);N!=null?Wr(d)===".priority"&&N.getChild(Ac(d)).isEmpty()?w=N:w=N.updateChild(d,s):w=P.EMPTY_NODE}if(g.equals(w))a=e;else{const N=t.filter.updateChild(l.getNode(),h,w,d,u,o);a=On(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Pl(t,e){return t.eventCache.isCompleteForChild(e)}function dg(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ie(n,a);Pl(e,L(u))&&(l=or(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ie(n,a);Pl(e,L(u))||(l=or(t,l,u,c,i,r,o))}),l}function Ol(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function lr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=s:c=new G(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),w=Ol(t,g,d);a=ks(t,a,new j(h),w,i,r,o,l)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const w=e.serverCache.getNode().getImmediateChild(h),N=Ol(t,w,d);a=ks(t,a,new j(h),N,i,r,o,l)}}),a}function pg(t,e,n,s,i,r,o){if(Ms(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ks(t,e,n,a.getNode().getChild(n),i,r,l,o);if(B(n)){let c=new G(null);return a.getNode().forEachChild(on,(u,h)=>{c=c.set(new j(u),h)}),lr(t,e,n,c,i,r,l,o)}else return e}else{let c=new G(null);return s.foreach((u,h)=>{const d=ie(n,u);a.isCompleteForPath(d)&&(c=c.set(u,a.getNode().getChild(d)))}),lr(t,e,n,c,i,r,l,o)}}function _g(t,e,n,s,i){const r=e.serverCache,o=Wc(e,r.getNode(),r.isFullyInitialized()||B(n),r.isFiltered());return zc(t,o,n,s,qc,i)}function gg(t,e,n,s,i,r){let o;if(Ms(s,n)!=null)return e;{const l=new Xr(s,e,i),a=e.eventCache.getNode();let c;if(B(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ds(s,Vt(e));else{const h=e.serverCache.getNode();v(h instanceof P,"serverChildren would be complete if leaf node"),u=Yr(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=L(n);let h=Qr(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,Q(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,P.EMPTY_NODE,Q(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ds(s,Vt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ms(s,$())!=null,On(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vr(s.getIndex()),r=k_(s);this.processor_=cg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),u=new $t(a,o.isFullyInitialized(),i.filtersNodes()),h=new $t(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ei(h,u),this.eventGenerator_=new $_(this.query_)}get query(){return this.query_}}function yg(t){return t.viewCache_.serverCache.getNode()}function Cg(t,e){const n=Vt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Dl(t){return t.eventRegistrations_.length===0}function vg(t,e){t.eventRegistrations_.push(e)}function Ml(t,e,n){const s=[];if(n){v(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function kl(t,e,n,s){e.type===Ue.MERGE&&e.source.queryId!==null&&(v(Vt(t.viewCache_),"We should always have a full cache before handling merges"),v(nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hg(t.processor_,i,e,n,s);return ug(t.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Kc(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Eg(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(r,o)=>{s.push(dn(r,o))}),n.isFullyInitialized()&&s.push(Lc(n.getNode())),Kc(t,s,n.getNode(),e)}function Kc(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return V_(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class bg{constructor(){this.views=new Map}}function wg(t){v(!Fs,"__referenceConstructor has already been defined"),Fs=t}function Ig(){return v(Fs,"Reference.ts has not been loaded"),Fs}function Tg(t){return t.views.size===0}function Jr(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),kl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(kl(o,e,n,s));return r}}function Sg(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ds(n,i?s:null),a=!1;l?a=!0:s instanceof P?(l=Yr(n,s),a=!1):(l=P.EMPTY_NODE,a=!1);const c=ei(new $t(l,a,!1),new $t(s,i,!1));return new mg(e,c)}return o}function Ng(t,e,n,s,i,r){const o=Sg(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vg(o,n),Eg(o,n)}function xg(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Et(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ml(c,n,s)),Dl(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ml(a,n,s)),Dl(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Et(t)&&r.push(new(Ig())(e._repo,e._path)),{removed:r,events:o}}function Gc(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ln(t,e){let n=null;for(const s of t.views.values())n=n||Cg(s,e);return n}function Yc(t,e){if(e._queryParams.loadsAllData())return ti(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Qc(t,e){return Yc(t,e)!=null}function Et(t){return ti(t)!=null}function ti(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;function Rg(t){v(!Ls,"__referenceConstructor has already been defined"),Ls=t}function Ag(){return v(Ls,"Reference.ts has not been loaded"),Ls}let Pg=1;class Fl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=rg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Og(t,e,n,s,i){return K_(t.pendingWriteTree_,e,n,s,i),i?En(t,new Ut(qr(),e,n)):[]}function Dg(t,e,n,s){G_(t.pendingWriteTree_,e,n,s);const i=G.fromObject(n);return En(t,new pn(qr(),e,i))}function Dt(t,e,n=!1){const s=Y_(t.pendingWriteTree_,e);if(Q_(t.pendingWriteTree_,e)){let r=new G(null);return s.snap!=null?r=r.set($(),!0):_e(s.children,o=>{r=r.set(new j(o),!0)}),En(t,new Os(s.path,r,n))}else return[]}function ni(t,e,n){return En(t,new Ut(zr(),e,n))}function Mg(t,e,n){const s=G.fromObject(n);return En(t,new pn(zr(),e,s))}function kg(t,e){return En(t,new Yn(zr(),e))}function Fg(t,e,n){const s=Zr(t,n);if(s){const i=eo(s),r=i.path,o=i.queryId,l=Te(r,e),a=new Yn(Kr(o),l);return to(t,r,a)}else return[]}function ar(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Qc(o,e))){const a=xg(o,e,n,s);Tg(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>Et(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Wg(d);for(let w=0;w<g.length;++w){const N=g[w],x=N.query,M=eu(t,N);t.listenProvider_.startListening(Mn(x),Bs(t,x),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Mn(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(si(d));t.listenProvider_.stopListening(Mn(d),g)}))}Hg(t,c)}return l}function Lg(t,e,n,s){const i=Zr(t,s);if(i!=null){const r=eo(i),o=r.path,l=r.queryId,a=Te(o,e),c=new Ut(Kr(l),a,n);return to(t,o,c)}else return[]}function Bg(t,e,n,s){const i=Zr(t,s);if(i){const r=eo(i),o=r.path,l=r.queryId,a=Te(o,e),c=G.fromObject(n),u=new pn(Kr(l),a,c);return to(t,o,u)}else return[]}function Ll(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const w=Te(d,i);r=r||ln(g,w),o=o||Et(g)});let l=t.syncPointTree_.get(i);l?(o=o||Et(l),r=r||ln(l,$())):(l=new bg,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,w)=>{const N=ln(w,$());N&&(r=r.updateImmediateChild(g,N))}));const c=Qc(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=si(e);v(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Ug();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Gr(t.pendingWriteTree_,i);let h=Ng(l,e,n,u,r,a);if(!c&&!o&&!s){const d=Yc(l,e);h=h.concat($g(t,e,d))}return h}function Xc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Te(o,e),c=ln(l,a);if(c)return c});return $c(i,e,r,n,!0)}function En(t,e){return Jc(e,t.syncPointTree_,null,Gr(t.pendingWriteTree_,$()))}function Jc(t,e,n,s){if(B(t.path))return Zc(t,e,n,s);{const i=e.get($());n==null&&i!=null&&(n=ln(i,$()));let r=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Vc(s,o);r=r.concat(Jc(l,a,c,u))}return i&&(r=r.concat(Jr(i,t,s,n))),r}}function Zc(t,e,n,s){const i=e.get($());n==null&&i!=null&&(n=ln(i,$()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Vc(s,o),u=t.operationForChild(o);u&&(r=r.concat(Zc(u,l,a,c)))}),i&&(r=r.concat(Jr(i,t,s,n))),r}function eu(t,e){const n=e.query,s=Bs(t,n);return{hashFn:()=>(yg(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Fg(t,n._path,s):kg(t,n._path);{const r=Op(i,n);return ar(t,n,null,r)}}}}function Bs(t,e){const n=si(e);return t.queryToTagMap.get(n)}function si(t){return t._path.toString()+"$"+t._queryIdentifier}function Zr(t,e){return t.tagToQueryMap.get(e)}function eo(t){const e=t.indexOf("$");return v(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new j(t.substr(0,e))}}function to(t,e,n){const s=t.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=Gr(t.pendingWriteTree_,e);return Jr(s,n,i,null)}function Wg(t){return t.fold((e,n,s)=>{if(n&&Et(n))return[ti(n)];{let i=[];return n&&(i=Gc(n)),_e(s,(r,o)=>{i=i.concat(o)}),i}})}function Mn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ag())(t._repo,t._path):t}function Hg(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=si(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ug(){return Pg++}function $g(t,e,n){const s=e._path,i=Bs(t,e),r=eu(t,n),o=t.listenProvider_.startListening(Mn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)v(!Et(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!B(c)&&u&&Et(u))return[ti(u).query];{let d=[];return u&&(d=d.concat(Gc(u).map(g=>g.query))),_e(h,(g,w)=>{d=d.concat(w)}),d}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Mn(u),Bs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new no(n)}node(){return this.node_}}class so{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new so(this.syncTree_,n)}node(){return Xc(this.syncTree_,this.path_)}}const Vg=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Bl=function(t,e,n){if(!t||typeof t!="object")return t;if(v(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jg(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qg(t[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jg=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+t)}},qg=function(t,e,n){t.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},tu=function(t,e,n,s){return io(e,new so(n,t),s)},zg=function(t,e,n){return io(t,new no(e),n)};function io(t,e,n){const s=t.getPriority().val(),i=Bl(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Bl(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new le(l,de(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(re,(l,a)=>{const c=io(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function oo(t,e){let n=e instanceof j?e:new j(e),s=t,i=L(n);for(;i!==null;){const r=hn(s.node.children,i)||{children:{},childCount:0};s=new ro(i,s,r),n=Q(n),i=L(n)}return s}function bn(t){return t.node.value}function nu(t,e){t.node.value=e,cr(t)}function su(t){return t.node.childCount>0}function Kg(t){return bn(t)===void 0&&!su(t)}function ii(t,e){_e(t.node.children,(n,s)=>{e(new ro(n,t,s))})}function iu(t,e,n,s){n&&!s&&e(t),ii(t,i=>{iu(i,e,!0,s)}),n&&s&&e(t)}function Gg(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ns(t){return new j(t.parent===null?t.name:ns(t.parent)+"/"+t.name)}function cr(t){t.parent!==null&&Yg(t.parent,t.name,t)}function Yg(t,e,n){const s=Kg(n),i=Je(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,cr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,cr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=/[\[\].#$\/\u0000-\u001F\u007F]/,Xg=/[\[\].#$\u0000-\u001F\u007F]/,Ni=10*1024*1024,lo=function(t){return typeof t=="string"&&t.length!==0&&!Qg.test(t)},ru=function(t){return typeof t=="string"&&t.length!==0&&!Xg.test(t)},Jg=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ru(t)},Zg=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Mr(t)||t&&typeof t=="object"&&Je(t,".sv")},ao=function(t,e,n){const s=n instanceof j?new d_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Nt(s)+" with contents = "+e.toString());if(Mr(e))throw new Error(t+"contains "+e.toString()+" "+Nt(s));if(typeof e=="string"&&e.length>Ni/3&&Js(e)>Ni)throw new Error(t+"contains a string greater than "+Ni+" utf8 bytes "+Nt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(_e(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);p_(s,o),ao(t,l,s),__(s)}),i&&r)throw new Error(t+' contains ".value" child '+Nt(s)+" in addition to actual children.")}},em=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=qn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!lo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(f_);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&De(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},tm=function(t,e,n,s){if(s&&e===void 0)return;const i=Pr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];_e(e,(o,l)=>{const a=new j(o);if(ao(i,l,ie(n,a)),Wr(a)===".priority"&&!Zg(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),em(i,r)},ou=function(t,e,n,s){if(!(s&&n===void 0)&&!ru(n))throw new Error(Pr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ou(t,e,n,s)},sm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Jg(n))throw new Error(Pr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function co(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Hr(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function lu(t,e,n){co(t,n),au(t,s=>Hr(s,e))}function ot(t,e,n){co(t,n),au(t,s=>De(s,e)||De(e,s))}function au(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(rm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ft&&fe("event: "+n.toString()),vn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="repo_interrupt",lm=25;class am{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new im,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ps(),this.transactionQueueTree_=new ro,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cm(t,e,n){if(t.stats_=Lr(t.repoInfo_),t.forceRestClient_||Fp())t.server_=new As(t.repoInfo_,(s,i,r,o)=>{Wl(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new it(t.repoInfo_,e,(s,i,r,o)=>{Wl(t,s,i,r,o)},s=>{Hl(t,s)},s=>{hm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=$p(t.repoInfo_,()=>new U_(t.stats_,t.server_)),t.infoData_=new F_,t.infoSyncTree_=new Fl({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=ni(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ho(t,"connected",!1),t.serverSyncTree_=new Fl({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ot(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function um(t){const n=t.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function uo(t){return Vg({timestamp:um(t)})}function Wl(t,e,n,s,i){t.dataUpdateCount++;const r=new j(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Is(n,c=>de(c));o=Bg(t.serverSyncTree_,r,a,i)}else{const a=de(n);o=Lg(t.serverSyncTree_,r,a,i)}else if(s){const a=Is(n,c=>de(c));o=Mg(t.serverSyncTree_,r,a)}else{const a=de(n);o=ni(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Qn(t,r)),ot(t.eventQueue_,l,o)}function Hl(t,e){ho(t,"connected",e),e===!1&&dm(t)}function hm(t,e){_e(e,(n,s)=>{ho(t,n,s)})}function ho(t,e,n){const s=new j("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(s,i);const r=ni(t.infoSyncTree_,s,i);ot(t.eventQueue_,s,r)}function cu(t){return t.nextWriteId_++}function fm(t,e,n,s){fo(t,"update",{path:e.toString(),value:n});let i=!0;const r=uo(t),o={};if(_e(n,(l,a)=>{i=!1,o[l]=tu(ie(e,l),de(a),t.serverSyncTree_,r)}),i)fe("update() called with empty data.  Don't do anything."),$l(t,s,"ok",void 0);else{const l=cu(t),a=Dg(t.serverSyncTree_,e,o,l);co(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Ne("update at "+e+" failed: "+c);const d=Dt(t.serverSyncTree_,l,!h),g=d.length>0?Qn(t,e):e;ot(t.eventQueue_,g,d),$l(t,s,c,u)}),_e(n,c=>{const u=pu(t,ie(e,c));Qn(t,u)}),ot(t.eventQueue_,e,[])}}function dm(t){fo(t,"onDisconnectEvents");const e=uo(t),n=Ps();tr(t.onDisconnect_,$(),(i,r)=>{const o=tu(i,r,t.serverSyncTree_,e);Bc(n,i,o)});let s=[];tr(n,$(),(i,r)=>{s=s.concat(ni(t.serverSyncTree_,i,r));const o=pu(t,i);Qn(t,o)}),t.onDisconnect_=Ps(),ot(t.eventQueue_,$(),s)}function pm(t,e,n){let s;L(e._path)===".info"?s=Ll(t.infoSyncTree_,e,n):s=Ll(t.serverSyncTree_,e,n),lu(t.eventQueue_,e._path,s)}function Ul(t,e,n){let s;L(e._path)===".info"?s=ar(t.infoSyncTree_,e,n):s=ar(t.serverSyncTree_,e,n),lu(t.eventQueue_,e._path,s)}function _m(t){t.persistentConnection_&&t.persistentConnection_.interrupt(om)}function fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),fe(n,...e)}function $l(t,e,n,s){e&&vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function uu(t,e,n){return Xc(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function po(t,e=t.transactionQueueTree_){if(e||ri(t,e),bn(e)){const n=fu(t,e);v(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gm(t,ns(e),n)}else su(e)&&ii(e,n=>{po(t,n)})}function gm(t,e,n){const s=n.map(c=>c.currentWriteId),i=uu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Te(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{fo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Dt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ri(t,oo(t.transactionQueueTree_,e)),po(t,t.transactionQueueTree_),ot(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)vn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ne("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Qn(t,e)}},o)}function Qn(t,e){const n=hu(t,e),s=ns(n),i=fu(t,n);return mm(t,i,s),s}function mm(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Te(n,a.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=lm)u=!0,h="maxretry",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0));else{const d=uu(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){ao("transaction failed: Data returned ",g,a.path);let w=de(g);typeof g=="object"&&g!=null&&Je(g,".priority")||(w=w.updatePriority(d.getPriority()));const x=a.currentWriteId,M=uo(t),he=zg(w,d,M);a.currentOutputSnapshotRaw=w,a.currentOutputSnapshotResolved=he,a.currentWriteId=cu(t),o.splice(o.indexOf(x),1),i=i.concat(Og(t.serverSyncTree_,a.path,he,a.currentWriteId,a.applyLocally)),i=i.concat(Dt(t.serverSyncTree_,x,!0))}else u=!0,h="nodata",i=i.concat(Dt(t.serverSyncTree_,a.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ri(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)vn(s[l]);po(t,t.transactionQueueTree_)}function hu(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&bn(s)===void 0;)s=oo(s,n),e=Q(e),n=L(e);return s}function fu(t,e){const n=[];return du(t,e,n),n.sort((s,i)=>s.order-i.order),n}function du(t,e,n){const s=bn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ii(e,i=>{du(t,i,n)})}function ri(t,e){const n=bn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,nu(e,n.length>0?n:void 0)}ii(e,s=>{ri(t,s)})}function pu(t,e){const n=ns(hu(t,e)),s=oo(t.transactionQueueTree_,e);return Gg(s,i=>{xi(t,i)}),xi(t,s),iu(s,i=>{xi(t,i)}),n}function xi(t,e){const n=bn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(v(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Dt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?nu(e,void 0):n.length=r+1,ot(t.eventQueue_,ns(e),i);for(let o=0;o<s.length;o++)vn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Cm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vl=function(t,e){const n=vm(t),s=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Np();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new j(n.pathString)}},vm=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ym(t.substring(u,h)));const d=Cm(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class gu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return B(this._path)?null:Wr(this._path)}get ref(){return new at(this._repo,this._path)}get _queryIdentifier(){const e=Sl(this._queryParams),n=kr(e);return n==="{}"?"default":n}get _queryObject(){return Sl(this._queryParams)}isEqual(e){if(e=Or(e),!(e instanceof _o))return!1;const n=this._repo===e._repo,s=Hr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+h_(this._path)}}class at extends _o{constructor(e,n){super(e,n,new jr,!1)}get parent(){const e=Ac(this._path);return e===null?null:new at(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new j(e),s=Ws(this.ref,e);return new Xn(this._node.getChild(n),s,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xn(i,Ws(this.ref,s),re)))}hasChild(e){const n=new j(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mu(t,e){return t=Or(t),t._checkNotDeleted("ref"),e!==void 0?Ws(t._root,e):t._root}function Ws(t,e){return t=Or(t),L(t._path)===null?nm("child","path",e,!1):ou("child","path",e,!1),new at(t._repo,ie(t._path,e))}function bm(t,e){tm("update",e,t._path,!1);const n=new Xs;return fm(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class go{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new _u("value",this,new Xn(e.snapshotNode,new at(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gu(this,e,n):null}matches(e){return e instanceof go?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class mo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gu(this,e,n):null}createEvent(e,n){v(e.childName!=null,"Child events should have a childName.");const s=Ws(new at(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new _u(e.type,this,new Xn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof mo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function wm(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Ul(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Em(n,r||void 0),l=e==="value"?new go(o):new mo(e,o);return pm(t._repo,t,l),()=>Ul(t._repo,t,l)}function Im(t,e,n,s){return wm(t,"child_added",e,n,s)}wg(at);Rg(at);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="FIREBASE_DATABASE_EMULATOR_HOST",ur={};let Sm=!1;function Nm(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vl(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[Tm]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=Vl(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Ji(Ji.OWNER):new Bp(t.name,t.options,e);sm("Invalid Firebase Database URL",o),B(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Rm(l,t,u,new Lp(t.name,n));return new Am(h,t)}function xm(t,e){const n=ur[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_m(t),delete n[t.key]}function Rm(t,e,n,s){let i=ur[e.name];i||(i={},ur[e.name]=i);let r=i[t.toURLString()];return r&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new am(t,Sm,n,s),i[t.toURLString()]=r,r}class Am{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new at(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function Pm(t=up(),e){return rp(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){bp(ap),Ss(new $n("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Nm(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),sn(cl,ul,t),sn(cl,ul,"esm2017")}it.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};it.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Om();const Dm={apiKey:"AIzaSyAumStUdSiGt4fXOzG-VoeDN2sqe7cA4nQ",authDomain:"chat-3e437.firebaseapp.com",databaseURL:"https://chat-3e437-default-rtdb.europe-west1.firebasedatabase.app",projectId:"chat-3e437",storageBucket:"chat-3e437.appspot.com",messagingSenderId:"129745719973",appId:"1:129745719973:web:9f643af733609706ae734c"},Mm=cp(Dm),yu=Pm(Mm),km="_messageForm_745xu_1",Fm="_messageForm__input_745xu_1",Lm="_messageForm__submit_745xu_1",Ri={messageForm:km,messageForm__input:Fm,messageForm__submit:Lm},Bm=["onSubmit"],Wm=zs({__name:"MessageForm",props:{userName:null},setup(t){const e=t,n=Ln("");function s(){console.log(n.value,e.userName),bm(mu(yu,"posts/"+Date.now()),{user:e.userName,message:n.value}),n.value=""}return(i,r)=>(Xe(),ft("form",{action:"#",class:ve(Re(Ri).messageForm),onSubmit:za(s,["prevent"])},[xa(_t("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>n.value=o),type:"text",class:ve(Re(Ri).messageForm__input)},null,2),[[qa,n.value]]),_t("button",{type:"submit",class:ve(Re(Ri).messageForm__submit)},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",2)],42,Bm))}}),Hm="_popup_gdft5_1",Um="_popup__userForm_gdft5_1",$m="_popup__input_gdft5_1",Vm="_popup__submit_gdft5_1",fs={popup:Hm,popup__userForm:Um,popup__input:$m,popup__submit:Vm},jm=["onSubmit"],qm=zs({__name:"UserForm",emits:["changeName"],setup(t,{emit:e}){function n(){e("changeName",s.value)}const s=Ln("");return(i,r)=>(Xe(),ft("div",{class:ve(Re(fs).popup)},[_t("form",{class:ve(Re(fs).popup__userForm),action:"#",onSubmit:za(n,["prevent"])},[xa(_t("input",{class:ve(Re(fs).popup__input),type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>s.value=o)},null,2),[[qa,s.value]]),_t("button",{class:ve(Re(fs).popup__submit),type:"submit"},"\u0412\u043E\u0439\u0442\u0438",2)],42,jm)],2))}}),zm="_messages_1ph2h_1",Km="_messages__listItem_1ph2h_1",Gm="_messages__self_1ph2h_24",Ym="_messages__notSelf_1ph2h_1",ds={messages:zm,messages__listItem:Km,messages__self:Gm,messages__notSelf:Ym},Qm=zs({__name:"Messages",props:{userName:null,ok:{type:Boolean}},setup(t){const e=Ln([]);return Im(mu(yu,"/posts"),n=>{console.log(n.val()),e.value.push(n.val()),console.log(e.value)}),(n,s)=>t.ok?(Xe(),ft("ul",{key:0,class:ve(Re(ds).messages)},[(Xe(!0),ft(Oe,null,$h(e.value,i=>(Xe(),ft("li",{class:ve(Re(ds).messages__listItem)},[i.user==t.userName?(Xe(),ft("p",{key:0,class:ve(Re(ds).messages__self)},"I wrote "+ui(i.message),3)):(Xe(),ft("p",{key:1,class:ve(Re(ds).messages__notSelf)},ui(i.user)+" wrote "+ui(i.message),3))],2))),256))],2)):Ua("",!0)}}),Xm="_header_j96tr_1",Jm={header:Xm},Zm=zs({__name:"App",setup(t){const e=Ln(""),n=Ln(!1);return(s,i)=>(Xe(),ft(Oe,null,[_t("header",{class:ve(Re(Jm).header)},"My/Our chat",2),n.value?Ua("",!0):(Xe(),Wa(qm,{key:0,onChangeName:i[0]||(i[0]=r=>{e.value=r,n.value=!0}),"user-name":e.value},null,8,["user-name"])),je(Qm,{"user-name":e.value,ok:n.value},null,8,["user-name","ok"]),je(Wm,{"user-name":e.value},null,8,["user-name"])],64))}});Gf(Zm).mount("#app");
