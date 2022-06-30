const ll=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ll();function ua(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=ua(cl);function go(e){return!!e||e===""}function da(e){if(U(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?ml(r):da(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(me(e))return e}}const ul=/;(?![^(]*\))/g,dl=/:(.+)/;function ml(e){const t={};return e.split(ul).forEach(n=>{if(n){const r=n.split(dl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ma(e){let t="";if(he(e))t=e;else if(U(e))for(let n=0;n<e.length;n++){const r=ma(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vm=e=>he(e)?e:e==null?"":U(e)||me(e)&&(e.toString===wo||!W(e.toString))?JSON.stringify(e,vo,2):String(e),vo=(e,t)=>t&&t.__v_isRef?vo(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:bo(t)?{[`Set(${t.size})`]:[...t.values()]}:me(t)&&!U(t)&&!xo(t)?String(t):t,re={},zt=[],je=()=>{},pl=()=>!1,hl=/^on[^a-z]/,Zn=e=>hl.test(e),pa=e=>e.startsWith("onUpdate:"),be=Object.assign,ha=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,V=(e,t)=>gl.call(e,t),U=Array.isArray,$t=e=>er(e)==="[object Map]",bo=e=>er(e)==="[object Set]",W=e=>typeof e=="function",he=e=>typeof e=="string",ga=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",yo=e=>me(e)&&W(e.then)&&W(e.catch),wo=Object.prototype.toString,er=e=>wo.call(e),vl=e=>er(e).slice(8,-1),xo=e=>er(e)==="[object Object]",va=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tn=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,Ye=tr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Pt=tr(e=>e.replace(yl,"-$1").toLowerCase()),nr=tr(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=tr(e=>e?`on${nr(e)}`:""),gn=(e,t)=>!Object.is(e,t),Nn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ir=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qa;const wl=()=>Qa||(Qa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ue;class _o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ko(e){return new _o(e)}function xl(e,t=Ue){t&&t.active&&t.effects.push(e)}const ba=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Eo=e=>(e.w&pt)>0,Ao=e=>(e.n&pt)>0,_l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pt},kl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Eo(a)&&!Ao(a)?a.delete(e):t[n++]=a,a.w&=~pt,a.n&=~pt}t.length=n}},Tr=new WeakMap;let rn=0,pt=1;const Nr=30;let Ne;const kt=Symbol(""),Mr=Symbol("");class ya{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xl(this,r)}run(){if(!this.active)return this.fn();let t=Ne,n=ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ne,Ne=this,ut=!0,pt=1<<++rn,rn<=Nr?_l(this):Ja(this),this.fn()}finally{rn<=Nr&&kl(this),pt=1<<--rn,Ne=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ne===this?this.deferStop=!0:this.active&&(Ja(this),this.onStop&&this.onStop(),this.active=!1)}}function Ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ut=!0;const Oo=[];function Vt(){Oo.push(ut),ut=!1}function Xt(){const e=Oo.pop();ut=e===void 0?!0:e}function Pe(e,t,n){if(ut&&Ne){let r=Tr.get(e);r||Tr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ba()),Po(a)}}function Po(e,t){let n=!1;rn<=Nr?Ao(e)||(e.n|=pt,n=!Eo(e)):n=!e.has(Ne),n&&(e.add(Ne),Ne.deps.push(e))}function Qe(e,t,n,r,a,i){const o=Tr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&U(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":U(e)?va(n)&&s.push(o.get("length")):(s.push(o.get(kt)),$t(e)&&s.push(o.get(Mr)));break;case"delete":U(e)||(s.push(o.get(kt)),$t(e)&&s.push(o.get(Mr)));break;case"set":$t(e)&&s.push(o.get(kt));break}if(s.length===1)s[0]&&Lr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Lr(ba(l))}}function Lr(e,t){const n=U(e)?e:[...e];for(const r of n)r.computed&&Za(r);for(const r of n)r.computed||Za(r)}function Za(e,t){(e!==Ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const El=ua("__proto__,__v_isRef,__isVue"),Co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ga)),Al=wa(),Ol=wa(!1,!0),Pl=wa(!0),ei=Cl();function Cl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Q(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Q)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Vt();const r=Q(this)[t].apply(this,n);return Xt(),r}}),e}function wa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Wl:No:t?To:Io).get(r))return r;const o=U(r);if(!e&&o&&V(ei,a))return Reflect.get(ei,a,i);const s=Reflect.get(r,a,i);return(ga(a)?Co.has(a):El(a))||(e||Pe(r,"get",a),t)?s:fe(s)?o&&va(a)?s:s.value:me(s)?e?Mo(s):Gt(s):s}}const Sl=So(),Rl=So(!0);function So(e=!1){return function(n,r,a,i){let o=n[r];if(vn(o)&&fe(o)&&!fe(a))return!1;if(!e&&!vn(a)&&(Fr(a)||(a=Q(a),o=Q(o)),!U(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=U(n)&&va(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===Q(i)&&(s?gn(a,o)&&Qe(n,"set",r,a):Qe(n,"add",r,a)),l}}function Il(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Tl(e,t){const n=Reflect.has(e,t);return(!ga(t)||!Co.has(t))&&Pe(e,"has",t),n}function Nl(e){return Pe(e,"iterate",U(e)?"length":kt),Reflect.ownKeys(e)}const Ro={get:Al,set:Sl,deleteProperty:Il,has:Tl,ownKeys:Nl},Ml={get:Pl,set(e,t){return!0},deleteProperty(e,t){return!0}},Ll=be({},Ro,{get:Ol,set:Rl}),xa=e=>e,rr=e=>Reflect.getPrototypeOf(e);function On(e,t,n=!1,r=!1){e=e.__v_raw;const a=Q(e),i=Q(t);n||(t!==i&&Pe(a,"get",t),Pe(a,"get",i));const{has:o}=rr(a),s=r?xa:n?Ea:bn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Pn(e,t=!1){const n=this.__v_raw,r=Q(n),a=Q(e);return t||(e!==a&&Pe(r,"has",e),Pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Cn(e,t=!1){return e=e.__v_raw,!t&&Pe(Q(e),"iterate",kt),Reflect.get(e,"size",e)}function ti(e){e=Q(e);const t=Q(this);return rr(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function ni(e,t){t=Q(t);const n=Q(this),{has:r,get:a}=rr(n);let i=r.call(n,e);i||(e=Q(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?gn(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function ri(e){const t=Q(this),{has:n,get:r}=rr(t);let a=n.call(t,e);a||(e=Q(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function ai(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Q(o),l=t?xa:e?Ea:bn;return!e&&Pe(s,"iterate",kt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Rn(e,t,n){return function(...r){const a=this.__v_raw,i=Q(a),o=$t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?xa:t?Ea:bn;return!t&&Pe(i,"iterate",l?Mr:kt),{next(){const{value:d,done:m}=f.next();return m?{value:d,done:m}:{value:s?[c(d[0]),c(d[1])]:c(d),done:m}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function Fl(){const e={get(i){return On(this,i)},get size(){return Cn(this)},has:Pn,add:ti,set:ni,delete:ri,clear:ai,forEach:Sn(!1,!1)},t={get(i){return On(this,i,!1,!0)},get size(){return Cn(this)},has:Pn,add:ti,set:ni,delete:ri,clear:ai,forEach:Sn(!1,!0)},n={get(i){return On(this,i,!0)},get size(){return Cn(this,!0)},has(i){return Pn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Sn(!0,!1)},r={get(i){return On(this,i,!0,!0)},get size(){return Cn(this,!0)},has(i){return Pn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Rn(i,!1,!1),n[i]=Rn(i,!0,!1),t[i]=Rn(i,!1,!0),r[i]=Rn(i,!0,!0)}),[e,n,t,r]}const[jl,zl,$l,Dl]=Fl();function _a(e,t){const n=t?e?Dl:$l:e?zl:jl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Hl={get:_a(!1,!1)},Ul={get:_a(!1,!0)},Bl={get:_a(!0,!1)},Io=new WeakMap,To=new WeakMap,No=new WeakMap,Wl=new WeakMap;function Kl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yl(e){return e.__v_skip||!Object.isExtensible(e)?0:Kl(vl(e))}function Gt(e){return vn(e)?e:ka(e,!1,Ro,Hl,Io)}function ql(e){return ka(e,!1,Ll,Ul,To)}function Mo(e){return ka(e,!0,Ml,Bl,No)}function ka(e,t,n,r,a){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Yl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function dt(e){return vn(e)?dt(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function Fr(e){return!!(e&&e.__v_isShallow)}function Lo(e){return dt(e)||vn(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Bt(e){return Dn(e,"__v_skip",!0),e}const bn=e=>me(e)?Gt(e):e,Ea=e=>me(e)?Mo(e):e;function Fo(e){ut&&Ne&&(e=Q(e),Po(e.dep||(e.dep=ba())))}function jo(e,t){e=Q(e),e.dep&&Lr(e.dep)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Aa(e){return zo(e,!1)}function Vl(e){return zo(e,!0)}function zo(e,t){return fe(e)?e:new Xl(e,t)}class Xl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:bn(t)}get value(){return Fo(this),this._value}set value(t){t=this.__v_isShallow?t:Q(t),gn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:bn(t),jo(this))}}function Dt(e){return fe(e)?e.value:e}const Gl={get:(e,t,n)=>Dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function $o(e){return dt(e)?e:new Proxy(e,Gl)}function Ql(e){const t=U(e)?new Array(e.length):{};for(const n in e)t[n]=Zl(e,n);return t}class Jl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Zl(e,t,n){const r=e[t];return fe(r)?r:new Jl(e,t,n)}class ec{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ya(t,()=>{this._dirty||(this._dirty=!0,jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Q(this);return Fo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function tc(e,t,n=!1){let r,a;const i=W(e);return i?(r=e,a=je):(r=e.get,a=e.set),new ec(r,a,i||!a,n)}function mt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){ar(i,t,n)}return a}function ze(e,t,n,r){if(W(e)){const i=mt(e,t,n,r);return i&&yo(i)&&i.catch(o=>{ar(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ze(e[i],t,n,r));return a}function ar(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){mt(l,null,10,[e,o,s]);return}}nc(e,n,a,r)}function nc(e,t,n,r=!0){console.error(e)}let Hn=!1,jr=!1;const Ae=[];let Xe=0;const sn=[];let an=null,Tt=0;const ln=[];let lt=null,Nt=0;const Do=Promise.resolve();let Oa=null,zr=null;function Pa(e){const t=Oa||Do;return e?t.then(this?e.bind(this):e):t}function rc(e){let t=Xe+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;yn(Ae[r])<e?t=r+1:n=r}return t}function Ho(e){(!Ae.length||!Ae.includes(e,Hn&&e.allowRecurse?Xe+1:Xe))&&e!==zr&&(e.id==null?Ae.push(e):Ae.splice(rc(e.id),0,e),Uo())}function Uo(){!Hn&&!jr&&(jr=!0,Oa=Do.then(Ko))}function ac(e){const t=Ae.indexOf(e);t>Xe&&Ae.splice(t,1)}function Bo(e,t,n,r){U(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Uo()}function ic(e){Bo(e,an,sn,Tt)}function oc(e){Bo(e,lt,ln,Nt)}function ir(e,t=null){if(sn.length){for(zr=t,an=[...new Set(sn)],sn.length=0,Tt=0;Tt<an.length;Tt++)an[Tt]();an=null,Tt=0,zr=null,ir(e,t)}}function Wo(e){if(ir(),ln.length){const t=[...new Set(ln)];if(ln.length=0,lt){lt.push(...t);return}for(lt=t,lt.sort((n,r)=>yn(n)-yn(r)),Nt=0;Nt<lt.length;Nt++)lt[Nt]();lt=null,Nt=0}}const yn=e=>e.id==null?1/0:e.id;function Ko(e){jr=!1,Hn=!0,ir(e),Ae.sort((n,r)=>yn(n)-yn(r));const t=je;try{for(Xe=0;Xe<Ae.length;Xe++){const n=Ae[Xe];n&&n.active!==!1&&mt(n,null,14)}}finally{Xe=0,Ae.length=0,Wo(),Hn=!1,Oa=null,(Ae.length||sn.length||ln.length)&&Ko(e)}}function sc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:m}=r[c]||re;m&&(a=n.map(v=>v.trim())),d&&(a=n.map(Ir))}let s,l=r[s=wr(t)]||r[s=wr(Ye(t))];!l&&i&&(l=r[s=wr(Pt(t))]),l&&ze(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(f,e,6,a)}}function Yo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!W(e)){const l=f=>{const c=Yo(f,t,!0);c&&(s=!0,be(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(U(i)?i.forEach(l=>o[l]=null):be(o,i),r.set(e,o),o)}function or(e,t){return!e||!Zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Pt(t))||V(e,t))}let Ie=null,qo=null;function Un(e){const t=Ie;return Ie=e,qo=e&&e.type.__scopeId||null,t}function lc(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&pi(-1);const i=Un(t),o=e(...a);return Un(i),r._d&&pi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function xr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:m,setupState:v,ctx:k,inheritAttrs:N}=e;let C,g;const _=Un(e);try{if(n.shapeFlag&4){const $=a||r;C=We(c.call($,$,d,i,v,m,k)),g=l}else{const $=t;C=We($.length>1?$(i,{attrs:l,slots:s,emit:f}):$(i,null)),g=t.props?l:cc(l)}}catch($){cn.length=0,ar($,e,1),C=Oe(wn)}let I=C;if(g&&N!==!1){const $=Object.keys(g),{shapeFlag:D}=I;$.length&&D&7&&(o&&$.some(pa)&&(g=fc(g,o)),I=Wt(I,g))}return n.dirs&&(I=Wt(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),C=I,Un(_),C}const cc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zn(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const r in e)(!pa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function uc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ii(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const m=c[d];if(o[m]!==r[m]&&!or(f,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ii(r,o,f):!0:!!o;return!1}function ii(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!or(n,i))return!0}return!1}function dc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const mc=e=>e.__isSuspense;function pc(e,t){t&&t.pendingBranch?U(e)?t.effects.push(...e):t.effects.push(e):oc(e)}function Mn(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=pe||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const oi={};function Ht(e,t,n){return Vo(e,t,n)}function Vo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=pe;let l,f=!1,c=!1;if(fe(e)?(l=()=>e.value,f=Fr(e)):dt(e)?(l=()=>e,r=!0):U(e)?(c=!0,f=e.some(g=>dt(g)||Fr(g)),l=()=>e.map(g=>{if(fe(g))return g.value;if(dt(g))return xt(g);if(W(g))return mt(g,s,2)})):W(e)?t?l=()=>mt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),ze(e,s,3,[m])}:l=je,t&&r){const g=l;l=()=>xt(g())}let d,m=g=>{d=C.onStop=()=>{mt(g,s,4)}};if(_n)return m=je,t?n&&ze(t,s,3,[l(),c?[]:void 0,m]):l(),je;let v=c?[]:oi;const k=()=>{if(!!C.active)if(t){const g=C.run();(r||f||(c?g.some((_,I)=>gn(_,v[I])):gn(g,v)))&&(d&&d(),ze(t,s,3,[g,v===oi?void 0:v,m]),v=g)}else C.run()};k.allowRecurse=!!t;let N;a==="sync"?N=k:a==="post"?N=()=>xe(k,s&&s.suspense):N=()=>ic(k);const C=new ya(l,N);return t?n?k():v=C.run():a==="post"?xe(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&ha(s.scope.effects,C)}}function hc(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?Xo(r,e):()=>r[e]:e.bind(r,r);let i;W(t)?i=t:(i=t.handler,n=t);const o=pe;Kt(this);const s=Vo(a,i.bind(r),n);return o?Kt(o):Et(),s}function Xo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function xt(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))xt(e.value,t);else if(U(e))for(let n=0;n<e.length;n++)xt(e[n],t);else if(bo(e)||$t(e))e.forEach(n=>{xt(n,t)});else if(xo(e))for(const n in e)xt(e[n],t);return e}function Qt(e){return W(e)?{setup:e,name:e.name}:e}const Ln=e=>!!e.type.__asyncLoader,Go=e=>e.type.__isKeepAlive;function gc(e,t){Qo(e,"a",t)}function vc(e,t){Qo(e,"da",t)}function Qo(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(sr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Go(a.parent.vnode)&&bc(r,t,n,a),a=a.parent}}function bc(e,t,n,r){const a=sr(t,e,r,!0);Ca(()=>{ha(r[t],a)},n)}function sr(e,t,n=pe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Vt(),Kt(n);const s=ze(t,n,e,o);return Et(),Xt(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=pe)=>(!_n||e==="sp")&&sr(e,t,n),yc=tt("bm"),wc=tt("m"),xc=tt("bu"),_c=tt("u"),kc=tt("bum"),Ca=tt("um"),Ec=tt("sp"),Ac=tt("rtg"),Oc=tt("rtc");function Pc(e,t=pe){sr("ec",e,t)}function Xm(e,t){const n=Ie;if(n===null)return e;const r=cr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=re]=t[i];W(o)&&(o={mounted:o,updated:o}),o.deep&&xt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Vt(),ze(l,n,8,[e.el,s,e,t]),Xt())}}const Jo="components";function Gm(e,t){return Sc(Jo,e,!0,t)||e}const Cc=Symbol();function Sc(e,t,n=!0,r=!1){const a=Ie||pe;if(a){const i=a.type;if(e===Jo){const s=lf(i,!1);if(s&&(s===t||s===Ye(t)||s===nr(Ye(t))))return i}const o=si(a[e]||i[e],t)||si(a.appContext[e],t);return!o&&r?i:o}}function si(e,t){return e&&(e[t]||e[Ye(t)]||e[nr(Ye(t))])}function Qm(e,t,n,r){let a;const i=n&&n[r];if(U(e)||he(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(me(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const $r=e=>e?us(e)?cr(e)||e.proxy:$r(e.parent):null,Bn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>$r(e.parent),$root:e=>$r(e.root),$emit:e=>e.emit,$options:e=>es(e),$forceUpdate:e=>e.f||(e.f=()=>Ho(e.update)),$nextTick:e=>e.n||(e.n=Pa.bind(e.proxy)),$watch:e=>hc.bind(e)}),Rc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==re&&V(r,t))return o[t]=1,r[t];if(a!==re&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==re&&V(n,t))return o[t]=4,n[t];Dr&&(o[t]=0)}}const c=Bn[t];let d,m;if(c)return t==="$attrs"&&Pe(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&V(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,V(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==re&&V(a,t)?(a[t]=n,!0):r!==re&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&V(e,o)||t!==re&&V(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(Bn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Dr=!0;function Ic(e){const t=es(e),n=e.proxy,r=e.ctx;Dr=!1,t.beforeCreate&&li(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:m,beforeUpdate:v,updated:k,activated:N,deactivated:C,beforeDestroy:g,beforeUnmount:_,destroyed:I,unmounted:$,render:D,renderTracked:G,renderTriggered:B,errorCaptured:q,serverPrefetch:ae,expose:ye,inheritAttrs:ge,components:_e,directives:rt,filters:Se}=t;if(f&&Tc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ie in o){const J=o[ie];W(J)&&(r[ie]=J.bind(n))}if(a){const ie=a.call(n,n);me(ie)&&(e.data=Gt(ie))}if(Dr=!0,i)for(const ie in i){const J=i[ie],ke=W(J)?J.bind(n,n):W(J.get)?J.get.bind(n,n):je,Ct=!W(J)&&W(J.set)?J.set.bind(n):je,qe=ce({get:ke,set:Ct});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>qe.value,set:$e=>qe.value=$e})}if(s)for(const ie in s)Zo(s[ie],r,n,ie);if(l){const ie=W(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(J=>{Mn(J,ie[J])})}c&&li(c,e,"c");function de(ie,J){U(J)?J.forEach(ke=>ie(ke.bind(n))):J&&ie(J.bind(n))}if(de(yc,d),de(wc,m),de(xc,v),de(_c,k),de(gc,N),de(vc,C),de(Pc,q),de(Oc,G),de(Ac,B),de(kc,_),de(Ca,$),de(Ec,ae),U(ye))if(ye.length){const ie=e.exposed||(e.exposed={});ye.forEach(J=>{Object.defineProperty(ie,J,{get:()=>n[J],set:ke=>n[J]=ke})})}else e.exposed||(e.exposed={});D&&e.render===je&&(e.render=D),ge!=null&&(e.inheritAttrs=ge),_e&&(e.components=_e),rt&&(e.directives=rt)}function Tc(e,t,n=je,r=!1){U(e)&&(e=Hr(e));for(const a in e){const i=e[a];let o;me(i)?"default"in i?o=Ge(i.from||a,i.default,!0):o=Ge(i.from||a):o=Ge(i),fe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function li(e,t,n){ze(U(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zo(e,t,n,r){const a=r.includes(".")?Xo(n,r):()=>n[r];if(he(e)){const i=t[e];W(i)&&Ht(a,i)}else if(W(e))Ht(a,e.bind(n));else if(me(e))if(U(e))e.forEach(i=>Zo(i,t,n,r));else{const i=W(e.handler)?e.handler.bind(n):t[e.handler];W(i)&&Ht(a,i,e)}}function es(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>Wn(l,f,o,!0)),Wn(l,t,o)),i.set(t,l),l}function Wn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Wn(e,i,n,!0),a&&a.forEach(o=>Wn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Nc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Nc={data:ci,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:yt,directives:yt,watch:Lc,provide:ci,inject:Mc};function ci(e,t){return t?e?function(){return be(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function Mc(e,t){return yt(Hr(e),Hr(t))}function Hr(e){if(U(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ve(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?be(be(Object.create(null),e),t):t}function Lc(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=ve(e[r],t[r]);return n}function Fc(e,t,n,r=!1){const a={},i={};Dn(i,lr,1),e.propsDefaults=Object.create(null),ts(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ql(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Q(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let m=c[d];if(or(e.emitsOptions,m))continue;const v=t[m];if(l)if(V(i,m))v!==i[m]&&(i[m]=v,f=!0);else{const k=Ye(m);a[k]=Ur(l,s,k,v,e,!1)}else v!==i[m]&&(i[m]=v,f=!0)}}}else{ts(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!V(t,d)&&((c=Pt(d))===d||!V(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=Ur(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!V(t,d)&&!0)&&(delete i[d],f=!0)}f&&Qe(e,"set","$attrs")}function ts(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Tn(l))continue;const f=t[l];let c;a&&V(a,c=Ye(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:or(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Q(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=Ur(a,l,d,f[d],e,!V(f,d))}}return o}function Ur(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&W(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Kt(a),r=f[n]=l.call(null,t),Et())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Pt(n))&&(r=!0))}return r}function ns(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!W(e)){const c=d=>{l=!0;const[m,v]=ns(d,t,!0);be(o,m),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return r.set(e,zt),zt;if(U(i))for(let c=0;c<i.length;c++){const d=Ye(i[c]);fi(d)&&(o[d]=re)}else if(i)for(const c in i){const d=Ye(c);if(fi(d)){const m=i[c],v=o[d]=U(m)||W(m)?{type:m}:m;if(v){const k=mi(Boolean,v.type),N=mi(String,v.type);v[0]=k>-1,v[1]=N<0||k<N,(k>-1||V(v,"default"))&&s.push(d)}}}const f=[o,s];return r.set(e,f),f}function fi(e){return e[0]!=="$"}function ui(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function di(e,t){return ui(e)===ui(t)}function mi(e,t){return U(t)?t.findIndex(n=>di(n,e)):W(t)&&di(t,e)?0:-1}const rs=e=>e[0]==="_"||e==="$stable",Sa=e=>U(e)?e.map(We):[We(e)],zc=(e,t,n)=>{if(t._n)return t;const r=lc((...a)=>Sa(t(...a)),n);return r._c=!1,r},as=(e,t,n)=>{const r=e._ctx;for(const a in e){if(rs(a))continue;const i=e[a];if(W(i))t[a]=zc(a,i,r);else if(i!=null){const o=Sa(i);t[a]=()=>o}}},is=(e,t)=>{const n=Sa(t);e.slots.default=()=>n},$c=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),Dn(t,"_",n)):as(t,e.slots={})}else e.slots={},t&&is(e,t);Dn(e.slots,lr,1)},Dc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(be(a,t),!n&&s===1&&delete a._):(i=!t.$stable,as(t,a)),o=t}else t&&(is(e,t),o={default:1});if(i)for(const s in a)!rs(s)&&!(s in o)&&delete a[s]};function os(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hc=0;function Uc(e,t){return function(r,a=null){W(r)||(r=Object.assign({},r)),a!=null&&!me(a)&&(a=null);const i=os(),o=new Set;let s=!1;const l=i.app={_uid:Hc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ff,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&W(f.install)?(o.add(f),f.install(l,...c)):W(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const m=Oe(r,a);return m.appContext=i,c&&t?t(m,f):e(m,f,d),s=!0,l._container=f,f.__vue_app__=l,cr(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function Br(e,t,n,r,a=!1){if(U(e)){e.forEach((m,v)=>Br(m,t&&(U(t)?t[v]:t),n,r,a));return}if(Ln(r)&&!a)return;const i=r.shapeFlag&4?cr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(he(f)?(c[f]=null,V(d,f)&&(d[f]=null)):fe(f)&&(f.value=null)),W(l))mt(l,s,12,[o,c]);else{const m=he(l),v=fe(l);if(m||v){const k=()=>{if(e.f){const N=m?c[l]:l.value;a?U(N)&&ha(N,i):U(N)?N.includes(i)||N.push(i):m?(c[l]=[i],V(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else m?(c[l]=o,V(d,l)&&(d[l]=o)):v&&(l.value=o,e.k&&(c[e.k]=o))};o?(k.id=-1,xe(k,n)):k()}}}const xe=pc;function Bc(e){return Wc(e)}function Wc(e,t){const n=wl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:m,setScopeId:v=je,cloneNode:k,insertStaticContent:N}=e,C=(u,p,h,w=null,y=null,A=null,S=!1,E=null,O=!!p.dynamicChildren)=>{if(u===p)return;u&&!tn(u,p)&&(w=L(u),Re(u,y,A,!0),u=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:x,ref:F,shapeFlag:T}=p;switch(x){case Ra:g(u,p,h,w);break;case wn:_(u,p,h,w);break;case _r:u==null&&I(p,h,w,S);break;case Be:rt(u,p,h,w,y,A,S,E,O);break;default:T&1?G(u,p,h,w,y,A,S,E,O):T&6?Se(u,p,h,w,y,A,S,E,O):(T&64||T&128)&&x.process(u,p,h,w,y,A,S,E,O,oe)}F!=null&&y&&Br(F,u&&u.ref,A,p||u,!p)},g=(u,p,h,w)=>{if(u==null)r(p.el=s(p.children),h,w);else{const y=p.el=u.el;p.children!==u.children&&f(y,p.children)}},_=(u,p,h,w)=>{u==null?r(p.el=l(p.children||""),h,w):p.el=u.el},I=(u,p,h,w)=>{[u.el,u.anchor]=N(u.children,p,h,w,u.el,u.anchor)},$=({el:u,anchor:p},h,w)=>{let y;for(;u&&u!==p;)y=m(u),r(u,h,w),u=y;r(p,h,w)},D=({el:u,anchor:p})=>{let h;for(;u&&u!==p;)h=m(u),a(u),u=h;a(p)},G=(u,p,h,w,y,A,S,E,O)=>{S=S||p.type==="svg",u==null?B(p,h,w,y,A,S,E,O):ye(u,p,y,A,S,E,O)},B=(u,p,h,w,y,A,S,E)=>{let O,x;const{type:F,props:T,shapeFlag:j,transition:H,patchFlag:X,dirs:ee}=u;if(u.el&&k!==void 0&&X===-1)O=u.el=k(u.el);else{if(O=u.el=o(u.type,A,T&&T.is,T),j&8?c(O,u.children):j&16&&ae(u.children,O,null,w,y,A&&F!=="foreignObject",S,E),ee&&vt(u,null,w,"created"),T){for(const se in T)se!=="value"&&!Tn(se)&&i(O,se,null,T[se],A,u.children,w,y,P);"value"in T&&i(O,"value",null,T.value),(x=T.onVnodeBeforeMount)&&He(x,w,u)}q(O,u,u.scopeId,S,w)}ee&&vt(u,null,w,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;te&&H.beforeEnter(O),r(O,p,h),((x=T&&T.onVnodeMounted)||te||ee)&&xe(()=>{x&&He(x,w,u),te&&H.enter(O),ee&&vt(u,null,w,"mounted")},y)},q=(u,p,h,w,y)=>{if(h&&v(u,h),w)for(let A=0;A<w.length;A++)v(u,w[A]);if(y){let A=y.subTree;if(p===A){const S=y.vnode;q(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},ae=(u,p,h,w,y,A,S,E,O=0)=>{for(let x=O;x<u.length;x++){const F=u[x]=E?ct(u[x]):We(u[x]);C(null,F,p,h,w,y,A,S,E)}},ye=(u,p,h,w,y,A,S)=>{const E=p.el=u.el;let{patchFlag:O,dynamicChildren:x,dirs:F}=p;O|=u.patchFlag&16;const T=u.props||re,j=p.props||re;let H;h&&bt(h,!1),(H=j.onVnodeBeforeUpdate)&&He(H,h,p,u),F&&vt(p,u,h,"beforeUpdate"),h&&bt(h,!0);const X=y&&p.type!=="foreignObject";if(x?ge(u.dynamicChildren,x,E,h,w,X,A):S||ke(u,p,E,null,h,w,X,A,!1),O>0){if(O&16)_e(E,p,T,j,h,w,y);else if(O&2&&T.class!==j.class&&i(E,"class",null,j.class,y),O&4&&i(E,"style",T.style,j.style,y),O&8){const ee=p.dynamicProps;for(let te=0;te<ee.length;te++){const se=ee[te],Te=T[se],St=j[se];(St!==Te||se==="value")&&i(E,se,Te,St,y,u.children,h,w,P)}}O&1&&u.children!==p.children&&c(E,p.children)}else!S&&x==null&&_e(E,p,T,j,h,w,y);((H=j.onVnodeUpdated)||F)&&xe(()=>{H&&He(H,h,p,u),F&&vt(p,u,h,"updated")},w)},ge=(u,p,h,w,y,A,S)=>{for(let E=0;E<p.length;E++){const O=u[E],x=p[E],F=O.el&&(O.type===Be||!tn(O,x)||O.shapeFlag&70)?d(O.el):h;C(O,x,F,null,w,y,A,S,!0)}},_e=(u,p,h,w,y,A,S)=>{if(h!==w){for(const E in w){if(Tn(E))continue;const O=w[E],x=h[E];O!==x&&E!=="value"&&i(u,E,x,O,S,p.children,y,A,P)}if(h!==re)for(const E in h)!Tn(E)&&!(E in w)&&i(u,E,h[E],null,S,p.children,y,A,P);"value"in w&&i(u,"value",h.value,w.value)}},rt=(u,p,h,w,y,A,S,E,O)=>{const x=p.el=u?u.el:s(""),F=p.anchor=u?u.anchor:s("");let{patchFlag:T,dynamicChildren:j,slotScopeIds:H}=p;H&&(E=E?E.concat(H):H),u==null?(r(x,h,w),r(F,h,w),ae(p.children,h,F,y,A,S,E,O)):T>0&&T&64&&j&&u.dynamicChildren?(ge(u.dynamicChildren,j,h,y,A,S,E),(p.key!=null||y&&p===y.subTree)&&ss(u,p,!0)):ke(u,p,h,F,y,A,S,E,O)},Se=(u,p,h,w,y,A,S,E,O)=>{p.slotScopeIds=E,u==null?p.shapeFlag&512?y.ctx.activate(p,h,w,S,O):ue(p,h,w,y,A,S,O):de(u,p,O)},ue=(u,p,h,w,y,A,S)=>{const E=u.component=nf(u,w,y);if(Go(u)&&(E.ctx.renderer=oe),rf(E),E.asyncDep){if(y&&y.registerDep(E,ie),!u.el){const O=E.subTree=Oe(wn);_(null,O,p,h)}return}ie(E,u,p,h,y,A,S)},de=(u,p,h)=>{const w=p.component=u.component;if(uc(u,p,h))if(w.asyncDep&&!w.asyncResolved){J(w,p,h);return}else w.next=p,ac(w.update),w.update();else p.el=u.el,w.vnode=p},ie=(u,p,h,w,y,A,S)=>{const E=()=>{if(u.isMounted){let{next:F,bu:T,u:j,parent:H,vnode:X}=u,ee=F,te;bt(u,!1),F?(F.el=X.el,J(u,F,S)):F=X,T&&Nn(T),(te=F.props&&F.props.onVnodeBeforeUpdate)&&He(te,H,F,X),bt(u,!0);const se=xr(u),Te=u.subTree;u.subTree=se,C(Te,se,d(Te.el),L(Te),u,y,A),F.el=se.el,ee===null&&dc(u,se.el),j&&xe(j,y),(te=F.props&&F.props.onVnodeUpdated)&&xe(()=>He(te,H,F,X),y)}else{let F;const{el:T,props:j}=p,{bm:H,m:X,parent:ee}=u,te=Ln(p);if(bt(u,!1),H&&Nn(H),!te&&(F=j&&j.onVnodeBeforeMount)&&He(F,ee,p),bt(u,!0),T&&K){const se=()=>{u.subTree=xr(u),K(T,u.subTree,u,y,null)};te?p.type.__asyncLoader().then(()=>!u.isUnmounted&&se()):se()}else{const se=u.subTree=xr(u);C(null,se,h,w,u,y,A),p.el=se.el}if(X&&xe(X,y),!te&&(F=j&&j.onVnodeMounted)){const se=p;xe(()=>He(F,ee,se),y)}(p.shapeFlag&256||ee&&Ln(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&xe(u.a,y),u.isMounted=!0,p=h=w=null}},O=u.effect=new ya(E,()=>Ho(x),u.scope),x=u.update=()=>O.run();x.id=u.uid,bt(u,!0),x()},J=(u,p,h)=>{p.component=u;const w=u.vnode.props;u.vnode=p,u.next=null,jc(u,p.props,w,h),Dc(u,p.children,h),Vt(),ir(void 0,u.update),Xt()},ke=(u,p,h,w,y,A,S,E,O=!1)=>{const x=u&&u.children,F=u?u.shapeFlag:0,T=p.children,{patchFlag:j,shapeFlag:H}=p;if(j>0){if(j&128){qe(x,T,h,w,y,A,S,E,O);return}else if(j&256){Ct(x,T,h,w,y,A,S,E,O);return}}H&8?(F&16&&P(x,y,A),T!==x&&c(h,T)):F&16?H&16?qe(x,T,h,w,y,A,S,E,O):P(x,y,A,!0):(F&8&&c(h,""),H&16&&ae(T,h,w,y,A,S,E,O))},Ct=(u,p,h,w,y,A,S,E,O)=>{u=u||zt,p=p||zt;const x=u.length,F=p.length,T=Math.min(x,F);let j;for(j=0;j<T;j++){const H=p[j]=O?ct(p[j]):We(p[j]);C(u[j],H,h,null,y,A,S,E,O)}x>F?P(u,y,A,!0,!1,T):ae(p,h,w,y,A,S,E,O,T)},qe=(u,p,h,w,y,A,S,E,O)=>{let x=0;const F=p.length;let T=u.length-1,j=F-1;for(;x<=T&&x<=j;){const H=u[x],X=p[x]=O?ct(p[x]):We(p[x]);if(tn(H,X))C(H,X,h,null,y,A,S,E,O);else break;x++}for(;x<=T&&x<=j;){const H=u[T],X=p[j]=O?ct(p[j]):We(p[j]);if(tn(H,X))C(H,X,h,null,y,A,S,E,O);else break;T--,j--}if(x>T){if(x<=j){const H=j+1,X=H<F?p[H].el:w;for(;x<=j;)C(null,p[x]=O?ct(p[x]):We(p[x]),h,X,y,A,S,E,O),x++}}else if(x>j)for(;x<=T;)Re(u[x],y,A,!0),x++;else{const H=x,X=x,ee=new Map;for(x=X;x<=j;x++){const Ee=p[x]=O?ct(p[x]):We(p[x]);Ee.key!=null&&ee.set(Ee.key,x)}let te,se=0;const Te=j-X+1;let St=!1,Va=0;const en=new Array(Te);for(x=0;x<Te;x++)en[x]=0;for(x=H;x<=T;x++){const Ee=u[x];if(se>=Te){Re(Ee,y,A,!0);continue}let De;if(Ee.key!=null)De=ee.get(Ee.key);else for(te=X;te<=j;te++)if(en[te-X]===0&&tn(Ee,p[te])){De=te;break}De===void 0?Re(Ee,y,A,!0):(en[De-X]=x+1,De>=Va?Va=De:St=!0,C(Ee,p[De],h,null,y,A,S,E,O),se++)}const Xa=St?Kc(en):zt;for(te=Xa.length-1,x=Te-1;x>=0;x--){const Ee=X+x,De=p[Ee],Ga=Ee+1<F?p[Ee+1].el:w;en[x]===0?C(null,De,h,Ga,y,A,S,E,O):St&&(te<0||x!==Xa[te]?$e(De,h,Ga,2):te--)}}},$e=(u,p,h,w,y=null)=>{const{el:A,type:S,transition:E,children:O,shapeFlag:x}=u;if(x&6){$e(u.component.subTree,p,h,w);return}if(x&128){u.suspense.move(p,h,w);return}if(x&64){S.move(u,p,h,oe);return}if(S===Be){r(A,p,h);for(let T=0;T<O.length;T++)$e(O[T],p,h,w);r(u.anchor,p,h);return}if(S===_r){$(u,p,h);return}if(w!==2&&x&1&&E)if(w===0)E.beforeEnter(A),r(A,p,h),xe(()=>E.enter(A),y);else{const{leave:T,delayLeave:j,afterLeave:H}=E,X=()=>r(A,p,h),ee=()=>{T(A,()=>{X(),H&&H()})};j?j(A,X,ee):ee()}else r(A,p,h)},Re=(u,p,h,w=!1,y=!1)=>{const{type:A,props:S,ref:E,children:O,dynamicChildren:x,shapeFlag:F,patchFlag:T,dirs:j}=u;if(E!=null&&Br(E,null,h,u,!0),F&256){p.ctx.deactivate(u);return}const H=F&1&&j,X=!Ln(u);let ee;if(X&&(ee=S&&S.onVnodeBeforeUnmount)&&He(ee,p,u),F&6)M(u.component,h,w);else{if(F&128){u.suspense.unmount(h,w);return}H&&vt(u,null,p,"beforeUnmount"),F&64?u.type.remove(u,p,h,y,oe,w):x&&(A!==Be||T>0&&T&64)?P(x,p,h,!1,!0):(A===Be&&T&384||!y&&F&16)&&P(O,p,h),w&&yr(u)}(X&&(ee=S&&S.onVnodeUnmounted)||H)&&xe(()=>{ee&&He(ee,p,u),H&&vt(u,null,p,"unmounted")},h)},yr=u=>{const{type:p,el:h,anchor:w,transition:y}=u;if(p===Be){b(h,w);return}if(p===_r){D(u);return}const A=()=>{a(h),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,O=()=>S(h,A);E?E(u.el,A,O):O()}else A()},b=(u,p)=>{let h;for(;u!==p;)h=m(u),a(u),u=h;a(p)},M=(u,p,h)=>{const{bum:w,scope:y,update:A,subTree:S,um:E}=u;w&&Nn(w),y.stop(),A&&(A.active=!1,Re(S,u,p,h)),E&&xe(E,p),xe(()=>{u.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},P=(u,p,h,w=!1,y=!1,A=0)=>{for(let S=A;S<u.length;S++)Re(u[S],p,h,w,y)},L=u=>u.shapeFlag&6?L(u.component.subTree):u.shapeFlag&128?u.suspense.next():m(u.anchor||u.el),Z=(u,p,h)=>{u==null?p._vnode&&Re(p._vnode,null,null,!0):C(p._vnode||null,u,p,null,null,null,h),Wo(),p._vnode=u},oe={p:C,um:Re,m:$e,r:yr,mt:ue,mc:ae,pc:ke,pbc:ge,n:L,o:e};let Y,K;return t&&([Y,K]=t(oe)),{render:Z,hydrate:Y,createApp:Uc(Z,Y)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ss(e,t,n=!1){const r=e.children,a=t.children;if(U(r)&&U(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ct(a[i]),s.el=o.el),n||ss(o,s))}}function Kc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Yc=e=>e.__isTeleport,Be=Symbol(void 0),Ra=Symbol(void 0),wn=Symbol(void 0),_r=Symbol(void 0),cn=[];let Le=null;function qc(e=!1){cn.push(Le=e?null:[])}function Vc(){cn.pop(),Le=cn[cn.length-1]||null}let xn=1;function pi(e){xn+=e}function ls(e){return e.dynamicChildren=xn>0?Le||zt:null,Vc(),xn>0&&Le&&Le.push(e),e}function Xc(e,t,n,r,a,i){return ls(Kn(e,t,n,r,a,i,!0))}function Jm(e,t,n,r,a){return ls(Oe(e,t,n,r,a,!0))}function Wr(e){return e?e.__v_isVNode===!0:!1}function tn(e,t){return e.type===t.type&&e.key===t.key}const lr="__vInternal",cs=({key:e})=>e!=null?e:null,Fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||fe(e)||W(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function Kn(e,t=null,n=null,r=0,a=null,i=e===Be?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cs(t),ref:t&&Fn(t),scopeId:qo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ia(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),xn>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const Oe=Gc;function Gc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Cc)&&(e=wn),Wr(e)){const s=Wt(e,t,!0);return n&&Ia(s,n),xn>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(cf(e)&&(e=e.__vccOpts),t){t=Qc(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=ma(s)),me(l)&&(Lo(l)&&!U(l)&&(l=be({},l)),t.style=da(l))}const o=he(e)?1:mc(e)?128:Yc(e)?64:me(e)?4:W(e)?2:0;return Kn(e,t,n,r,a,o,i,!0)}function Qc(e){return e?Lo(e)||lr in e?be({},e):e:null}function Wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Zc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&cs(s),ref:t&&t.ref?n&&a?U(a)?a.concat(Fn(t)):[a,Fn(t)]:Fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),el:e.el,anchor:e.anchor}}function Jc(e=" ",t=0){return Oe(Ra,null,e,t)}function We(e){return e==null||typeof e=="boolean"?Oe(wn):U(e)?Oe(Be,null,e.slice()):typeof e=="object"?ct(e):Oe(Ra,null,String(e))}function ct(e){return e.el===null||e.memo?e:Wt(e)}function Ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(U(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ia(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(lr in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Jc(t)]):n=8);e.children=t,e.shapeFlag|=n}function Zc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ma([t.class,r.class]));else if(a==="style")t.style=da([t.style,r.style]);else if(Zn(a)){const i=t[a],o=r[a];o&&i!==o&&!(U(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){ze(e,t,7,[n,r])}const ef=os();let tf=0;function nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ef,i={uid:tf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new _o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ns(r,a),emitsOptions:Yo(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sc.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const fs=()=>pe||Ie,Kt=e=>{pe=e,e.scope.on()},Et=()=>{pe&&pe.scope.off(),pe=null};function us(e){return e.vnode.shapeFlag&4}let _n=!1;function rf(e,t=!1){_n=t;const{props:n,children:r}=e.vnode,a=us(e);Fc(e,n,a,t),$c(e,r);const i=a?af(e,t):void 0;return _n=!1,i}function af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Bt(new Proxy(e.ctx,Rc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?sf(e):null;Kt(e),Vt();const i=mt(r,e,0,[e.props,a]);if(Xt(),Et(),yo(i)){if(i.then(Et,Et),t)return i.then(o=>{hi(e,o,t)}).catch(o=>{ar(o,e,0)});e.asyncDep=i}else hi(e,i,t)}else ds(e,t)}function hi(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=$o(t)),ds(e,n)}let gi;function ds(e,t,n){const r=e.type;if(!e.render){if(!t&&gi&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=be(be({isCustomElement:i,delimiters:s},o),l);r.render=gi(a,f)}}e.render=r.render||je}Kt(e),Vt(),Ic(e),Xt(),Et()}function of(e){return new Proxy(e.attrs,{get(t,n){return Pe(e,"get","$attrs"),t[n]}})}function sf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=of(e))},slots:e.slots,emit:e.emit,expose:t}}function cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($o(Bt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bn)return Bn[n](e)}}))}function lf(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return W(e)&&"__vccOpts"in e}const ce=(e,t)=>tc(e,t,_n);function fr(e,t,n){const r=arguments.length;return r===2?me(t)&&!U(t)?Wr(t)?Oe(e,null,[t]):Oe(e,t):Oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wr(n)&&(n=[n]),Oe(e,t,n))}const ff="3.2.37",uf="http://www.w3.org/2000/svg",wt=typeof document!="undefined"?document:null,vi=wt&&wt.createElement("template"),df={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?wt.createElementNS(uf,e):wt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{vi.innerHTML=r?`<svg>${e}</svg>`:e;const s=vi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function mf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function pf(e,t,n){const r=e.style,a=he(n);if(n&&!a){for(const i in n)Kr(r,i,n[i]);if(t&&!he(t))for(const i in t)n[i]==null&&Kr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const bi=/\s*!important$/;function Kr(e,t,n){if(U(n))n.forEach(r=>Kr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=hf(e,t);bi.test(n)?e.setProperty(Pt(r),n.replace(bi,""),"important"):e[r]=n}}const yi=["Webkit","Moz","ms"],kr={};function hf(e,t){const n=kr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return kr[t]=r;r=nr(r);for(let a=0;a<yi.length;a++){const i=yi[a]+r;if(i in e)return kr[t]=i}return t}const wi="http://www.w3.org/1999/xlink";function gf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,n);else{const i=fl(t);n==null||i&&!go(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function vf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=go(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ms,bf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Yr=0;const yf=Promise.resolve(),wf=()=>{Yr=0},xf=()=>Yr||(yf.then(wf),Yr=ms());function Mt(e,t,n,r){e.addEventListener(t,n,r)}function _f(e,t,n,r){e.removeEventListener(t,n,r)}function kf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ef(t);if(r){const f=i[t]=Af(r,a);Mt(e,s,f,l)}else o&&(_f(e,s,o,l),i[t]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function Ef(e){let t;if(xi.test(e)){t={};let n;for(;n=e.match(xi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Pt(e.slice(2)),t]}function Af(e,t){const n=r=>{const a=r.timeStamp||ms();(bf||a>=n.attached-1)&&ze(Of(r,n.value),t,5,[r])};return n.value=e,n.attached=xf(),n}function Of(e,t){if(U(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const _i=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?mf(e,r,a):t==="style"?pf(e,n,r):Zn(t)?pa(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?vf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&_i.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||_i.test(t)&&he(n)?!1:t in e}const ki=e=>{const t=e.props["onUpdate:modelValue"]||!1;return U(t)?n=>Nn(t,n):t};function Sf(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zm={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=ki(a);const i=r||a.props&&a.props.type==="number";Mt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ir(s)),e._assign(s)}),n&&Mt(e,"change",()=>{e.value=e.value.trim()}),t||(Mt(e,"compositionstart",Sf),Mt(e,"compositionend",Ei),Mt(e,"change",Ei))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=ki(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ir(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Rf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ep=(e,t)=>n=>{if(!("key"in n))return;const r=Pt(n.key);if(t.some(a=>a===r||Rf[a]===r))return e(n)},If=be({patchProp:Pf},df);let Ai;function Tf(){return Ai||(Ai=Bc(If))}const Nf=(...e)=>{const t=Tf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mf(r);if(!a)return;const i=t._component;!W(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mf(e){return he(e)?document.querySelector(e):e}var Lf=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ps;const ur=e=>ps=e,hs=Symbol();function qr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var fn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(fn||(fn={}));function Ff(){const e=ko(!0),t=e.run(()=>Aa({}));let n=[],r=[];const a=Bt({install(i){ur(a),a._a=i,i.provide(hs,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Lf?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const gs=()=>{};function Oi(e,t,n,r=gs){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&fs()&&Ca(a),a}function Rt(e,...t){e.slice().forEach(n=>{n(...t)})}function Vr(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];qr(a)&&qr(r)&&e.hasOwnProperty(n)&&!fe(r)&&!dt(r)?e[n]=Vr(a,r):e[n]=r}return e}const jf=Symbol();function zf(e){return!qr(e)||!e.hasOwnProperty(jf)}const{assign:Ve}=Object;function $f(e){return!!(fe(e)&&e.effect)}function Df(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=Ql(n.state.value[e]);return Ve(c,i,Object.keys(o||{}).reduce((d,m)=>(d[m]=Bt(ce(()=>{ur(n);const v=n._s.get(e);return o[m].call(v,v)})),d),{}))}return l=vs(e,f,t,n,r,!0),l.$reset=function(){const d=a?a():{};this.$patch(m=>{Ve(m,d)})},l}function vs(e,t,n={},r,a,i){let o;const s=Ve({actions:{}},n),l={deep:!0};let f,c,d=Bt([]),m=Bt([]),v;const k=r.state.value[e];!i&&!k&&(r.state.value[e]={}),Aa({});let N;function C(B){let q;f=c=!1,typeof B=="function"?(B(r.state.value[e]),q={type:fn.patchFunction,storeId:e,events:v}):(Vr(r.state.value[e],B),q={type:fn.patchObject,payload:B,storeId:e,events:v});const ae=N=Symbol();Pa().then(()=>{N===ae&&(f=!0)}),c=!0,Rt(d,q,r.state.value[e])}const g=gs;function _(){o.stop(),d=[],m=[],r._s.delete(e)}function I(B,q){return function(){ur(r);const ae=Array.from(arguments),ye=[],ge=[];function _e(ue){ye.push(ue)}function rt(ue){ge.push(ue)}Rt(m,{args:ae,name:B,store:D,after:_e,onError:rt});let Se;try{Se=q.apply(this&&this.$id===e?this:D,ae)}catch(ue){throw Rt(ge,ue),ue}return Se instanceof Promise?Se.then(ue=>(Rt(ye,ue),ue)).catch(ue=>(Rt(ge,ue),Promise.reject(ue))):(Rt(ye,Se),Se)}}const $={_p:r,$id:e,$onAction:Oi.bind(null,m),$patch:C,$reset:g,$subscribe(B,q={}){const ae=Oi(d,B,q.detached,()=>ye()),ye=o.run(()=>Ht(()=>r.state.value[e],ge=>{(q.flush==="sync"?c:f)&&B({storeId:e,type:fn.direct,events:v},ge)},Ve({},l,q)));return ae},$dispose:_},D=Gt(Ve({},$));r._s.set(e,D);const G=r._e.run(()=>(o=ko(),o.run(()=>t())));for(const B in G){const q=G[B];if(fe(q)&&!$f(q)||dt(q))i||(k&&zf(q)&&(fe(q)?q.value=k[B]:Vr(q,k[B])),r.state.value[e][B]=q);else if(typeof q=="function"){const ae=I(B,q);G[B]=ae,s.actions[B]=q}}return Ve(D,G),Ve(Q(D),G),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:B=>{C(q=>{Ve(q,B)})}}),r._p.forEach(B=>{Ve(D,o.run(()=>B({store:D,app:r._a,pinia:r,options:s})))}),k&&i&&n.hydrate&&n.hydrate(D.$state,k),f=!0,c=!0,D}function tp(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=fs();return s=s||f&&Ge(hs),s&&ur(s),s=ps,s._s.has(r)||(i?vs(r,t,a,s):Df(r,a,s)),s._s.get(r)}return o.$id=r,o}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){Bf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function Hf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ci(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Uf(e,t,n){return t&&Ci(e.prototype,t),n&&Ci(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e,t){return Kf(e)||qf(e,t)||bs(e,t)||Xf()}function dr(e){return Wf(e)||Yf(e)||bs(e)||Vf()}function Wf(e){if(Array.isArray(e))return Xr(e)}function Kf(e){if(Array.isArray(e))return e}function Yf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function bs(e,t){if(!!e){if(typeof e=="string")return Xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xr(e,t)}}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Vf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Si=function(){},Na={},ys={},ws=null,xs={mark:Si,measure:Si};try{typeof window!="undefined"&&(Na=window),typeof document!="undefined"&&(ys=document),typeof MutationObserver!="undefined"&&(ws=MutationObserver),typeof performance!="undefined"&&(xs=performance)}catch{}var Gf=Na.navigator||{},Ri=Gf.userAgent,Ii=Ri===void 0?"":Ri,ht=Na,le=ys,Ti=ws,In=xs;ht.document;var nt=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",_s=~Ii.indexOf("MSIE")||~Ii.indexOf("Trident/"),Je="___FONT_AWESOME___",Gr=16,ks="fa",Es="svg-inline--fa",At="data-fa-i2svg",Qr="data-fa-pseudo-element",Qf="data-fa-pseudo-element-pending",Ma="data-prefix",La="data-icon",Ni="fontawesome-i2svg",Jf="async",Zf=["HTML","HEAD","STYLE","SCRIPT"],As=function(){try{return!0}catch{return!1}}(),Fa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},qn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Os={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},eu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},tu=/fa[srltdbk\-\ ]/,Ps="fa-layers-text",nu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ru={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Cs=[1,2,3,4,5,6,7,8,9,10],au=Cs.concat([11,12,13,14,15,16,17,18,19,20]),iu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_t={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ou=[].concat(dr(Object.keys(qn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_t.GROUP,_t.SWAP_OPACITY,_t.PRIMARY,_t.SECONDARY]).concat(Cs.map(function(e){return"".concat(e,"x")})).concat(au.map(function(e){return"w-".concat(e)})),Ss=ht.FontAwesomeConfig||{};function su(e){var t=le.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(le&&typeof le.querySelector=="function"){var cu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cu.forEach(function(e){var t=Ta(e,2),n=t[0],r=t[1],a=lu(su(n));a!=null&&(Ss[r]=a)})}var fu={familyPrefix:ks,styleDefault:"solid",replacementClass:Es,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},un=R(R({},fu),Ss);un.autoReplaceSvg||(un.observeMutations=!1);var z={};Object.keys(un).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(n){un[e]=n,jn.forEach(function(r){return r(z)})},get:function(){return un[e]}})});ht.FontAwesomeConfig=z;var jn=[];function uu(e){return jn.push(e),function(){jn.splice(jn.indexOf(e),1)}}var it=Gr,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function du(e){if(!(!e||!nt)){var t=le.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=le.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return le.head.insertBefore(t,r),e}}var mu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kn(){for(var e=12,t="";e-- >0;)t+=mu[Math.random()*62|0];return t}function Jt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ja(e){return e.classList?Jt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Rs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Rs(e[n]),'" ')},"").trim()}function mr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function za(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function hu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function gu(e){var t=e.transform,n=e.width,r=n===void 0?Gr:n,a=e.height,i=a===void 0?Gr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&_s?l+="translate(".concat(t.x/it-r/2,"em, ").concat(t.y/it-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/it,"em), calc(-50% + ").concat(t.y/it,"em)) "):l+="translate(".concat(t.x/it,"em, ").concat(t.y/it,"em) "),l+="scale(".concat(t.size/it*(t.flipX?-1:1),", ").concat(t.size/it*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Is(){var e=ks,t=Es,n=z.familyPrefix,r=z.replacementClass,a=vu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Mi=!1;function Er(){z.autoAddCss&&!Mi&&(du(Is()),Mi=!0)}var bu={mixout:function(){return{dom:{css:Is,insertCss:Er}}},hooks:function(){return{beforeDOMElementCreation:function(){Er()},beforeI2svg:function(){Er()}}}},Ze=ht||{};Ze[Je]||(Ze[Je]={});Ze[Je].styles||(Ze[Je].styles={});Ze[Je].hooks||(Ze[Je].hooks={});Ze[Je].shims||(Ze[Je].shims=[]);var Fe=Ze[Je],Ts=[],yu=function e(){le.removeEventListener("DOMContentLoaded",e),Vn=1,Ts.map(function(t){return t()})},Vn=!1;nt&&(Vn=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Vn||le.addEventListener("DOMContentLoaded",yu));function wu(e){!nt||(Vn?setTimeout(e,0):Ts.push(e))}function An(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Rs(e):"<".concat(t," ").concat(pu(r),">").concat(i.map(An).join(""),"</").concat(t,">")}function Li(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ar=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?xu(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function _u(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Jr(e){var t=_u(e);return t.length===1?t[0].toString(16):null}function ku(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Fi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Zr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Fi(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,Fi(t)):Fe.styles[e]=R(R({},Fe.styles[e]||{}),i),e==="fas"&&Zr("fa",t)}var dn=Fe.styles,Eu=Fe.shims,Au=Object.values(Os),$a=null,Ns={},Ms={},Ls={},Fs={},js={},Ou=Object.keys(Fa);function Pu(e){return~ou.indexOf(e)}function Cu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Pu(a)?a:null}var zs=function(){var t=function(i){return Ar(dn,function(o,s,l){return o[l]=Ar(s,i,{}),o},{})};Ns=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ms=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),js=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in dn||z.autoFetchSvg,r=Ar(Eu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ls=r.names,Fs=r.unicodes,$a=pr(z.styleDefault)};uu(function(e){$a=pr(e.styleDefault)});zs();function Da(e,t){return(Ns[e]||{})[t]}function Su(e,t){return(Ms[e]||{})[t]}function Ft(e,t){return(js[e]||{})[t]}function $s(e){return Ls[e]||{prefix:null,iconName:null}}function Ru(e){var t=Fs[e],n=Da("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return $a}var Ha=function(){return{prefix:null,iconName:null,rest:[]}};function pr(e){var t=Fa[e],n=qn[e]||qn[t],r=e in Fe.styles?e:null;return n||r||null}function hr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Cu(z.familyPrefix,s);if(dn[s]?(s=Au.includes(s)?eu[s]:s,a=s,o.prefix=s):Ou.indexOf(s)>-1?(a=s,o.prefix=pr(s)):l?o.iconName=l:s!==z.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?$s(o.iconName):{},c=Ft(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||c||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!dn.far&&dn.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},Ha());return(i.prefix==="fa"||a==="fa")&&(i.prefix=gt()||"fas"),i}var Iu=function(){function e(){Hf(this,e),this.definitions={}}return Uf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),Zr(s,o[s]);var l=Os[s];l&&Zr(l,o[s]),zs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),ji=[],jt={},Ut={},Tu=Object.keys(Ut);function Nu(e,t){var n=t.mixoutsTo;return ji=e,jt={},Object.keys(Ut).forEach(function(r){Tu.indexOf(r)===-1&&delete Ut[r]}),ji.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}r.provides&&r.provides(Ut)}),n}function ea(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=jt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ot(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=jt[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ut[e]?Ut[e].apply(null,t):void 0}function ta(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(!!t)return t=Ft(n,t)||t,Li(Ds.definitions,n,t)||Li(Fe.styles,n,t)}var Ds=new Iu,Mu=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ot("noAuto")},Lu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Ot("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,wu(function(){ju({autoReplaceSvgRoot:n}),Ot("watch",t)})}},Fu={icon:function(t){if(t===null)return null;if(Yn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=pr(t[0]);return{prefix:r,iconName:Ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(z.familyPrefix,"-"))>-1||t.match(tu))){var a=hr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:Ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:Ft(i,t)||t}}}},Ce={noAuto:Mu,config:z,dom:Lu,parse:Fu,library:Ds,findIconDefinition:ta,toHtml:An},ju=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Fe.styles).length>0||z.autoFetchSvg)&&nt&&z.autoReplaceSvg&&Ce.dom.i2svg({node:r})};function gr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return An(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!nt){var r=le.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function zu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(za(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=mr(R(R({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function $u(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(z.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Ua(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,m=e.watchable,v=m===void 0?!1:m,k=r.found?r:n,N=k.width,C=k.height,g=a==="fak",_=[z.replacementClass,i?"".concat(z.familyPrefix,"-").concat(i):""].filter(function(ae){return d.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(d.classes).join(" "),I={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(C)})},$=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(N/C*16*.0625,"em")}:{};v&&(I.attributes[At]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(c||kn())},children:[l]}),delete I.attributes.title);var D=R(R({},I),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:R(R({},$),d.styles)}),G=r.found&&n.found?et("generateAbstractMask",D)||{children:[],attributes:{}}:et("generateAbstractIcon",D)||{children:[],attributes:{}},B=G.children,q=G.attributes;return D.children=B,D.attributes=q,s?$u(D):zu(D)}function zi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[At]="");var c=R({},o.styles);za(a)&&(c.transform=gu({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=mr(c);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function Du(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=mr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Or=Fe.styles;function na(e){var t=e[0],n=e[1],r=e.slice(4),a=Ta(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(_t.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(_t.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(_t.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Hu={found:!1,width:512,height:512};function Uu(e,t){!As&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ra(e,t){var n=t;return t==="fa"&&z.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=$s(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Or[t]&&Or[t][e]){var o=Or[t][e];return r(na(o))}Uu(e,t),r(R(R({},Hu),{},{icon:z.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var $i=function(){},aa=z.measurePerformance&&In&&In.mark&&In.measure?In:{mark:$i,measure:$i},on='FA "6.1.1"',Bu=function(t){return aa.mark("".concat(on," ").concat(t," begins")),function(){return Hs(t)}},Hs=function(t){aa.mark("".concat(on," ").concat(t," ends")),aa.measure("".concat(on," ").concat(t),"".concat(on," ").concat(t," begins"),"".concat(on," ").concat(t," ends"))},Ba={begin:Bu,end:Hs},zn=function(){};function Di(e){var t=e.getAttribute?e.getAttribute(At):null;return typeof t=="string"}function Wu(e){var t=e.getAttribute?e.getAttribute(Ma):null,n=e.getAttribute?e.getAttribute(La):null;return t&&n}function Ku(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function Yu(){if(z.autoReplaceSvg===!0)return $n.replace;var e=$n[z.autoReplaceSvg];return e||$n.replace}function qu(e){return le.createElementNS("http://www.w3.org/2000/svg",e)}function Vu(e){return le.createElement(e)}function Us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?qu:Vu:n;if(typeof e=="string")return le.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Us(o,{ceFn:r}))}),a}function Xu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Us(a),n)}),n.getAttribute(At)===null&&z.keepOriginalSource){var r=le.createComment(Xu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ja(n).indexOf(z.replacementClass))return $n.replace(t);var a=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return An(s)}).join(`
`);n.setAttribute(At,""),n.innerHTML=o}};function Hi(e){e()}function Bs(e,t){var n=typeof t=="function"?t:zn;if(e.length===0)n();else{var r=Hi;z.mutateApproach===Jf&&(r=ht.requestAnimationFrame||Hi),r(function(){var a=Yu(),i=Ba.begin("mutate");e.map(a),i(),n()})}}var Wa=!1;function Ws(){Wa=!0}function ia(){Wa=!1}var Xn=null;function Ui(e){if(!!Ti&&!!z.observeMutations){var t=e.treeCallback,n=t===void 0?zn:t,r=e.nodeCallback,a=r===void 0?zn:r,i=e.pseudoElementsCallback,o=i===void 0?zn:i,s=e.observeMutationsRoot,l=s===void 0?le:s;Xn=new Ti(function(f){if(!Wa){var c=gt();Jt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Di(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Di(d.target)&&~iu.indexOf(d.attributeName))if(d.attributeName==="class"&&Wu(d.target)){var m=hr(ja(d.target)),v=m.prefix,k=m.iconName;d.target.setAttribute(Ma,v||c),k&&d.target.setAttribute(La,k)}else Ku(d.target)&&a(d.target)})}}),nt&&Xn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gu(){!Xn||Xn.disconnect()}function Qu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ju(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=hr(ja(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Su(a.prefix,e.innerText)||Da(a.prefix,Jr(e.innerText))),a}function Zu(e){var t=Jt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return z.autoA11y&&(n?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||kn()):(t["aria-hidden"]="true",t.focusable="false")),t}function ed(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ju(e),r=n.iconName,a=n.prefix,i=n.rest,o=Zu(e),s=ea("parseNodeAttributes",{},e),l=t.styleParser?Qu(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var td=Fe.styles;function Ks(e){var t=z.autoReplaceSvg==="nest"?Bi(e,{styleParser:!1}):Bi(e);return~t.extra.classes.indexOf(Ps)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=le.documentElement.classList,r=function(d){return n.add("".concat(Ni,"-").concat(d))},a=function(d){return n.remove("".concat(Ni,"-").concat(d))},i=z.autoFetchSvg?Object.keys(Fa):Object.keys(td),o=[".".concat(Ps,":not([").concat(At,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(At,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Jt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ba.begin("onTree"),f=s.reduce(function(c,d){try{var m=Ks(d);m&&c.push(m)}catch(v){As||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(m){Bs(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(m){l(),d(m)})})}function nd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ks(e).then(function(n){n&&Bs([n],t)})}function rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ta(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ta(a||{})),e(r,R(R({},n),{},{mask:a}))}}var ad=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ke:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,m=d===void 0?null:d,v=n.titleId,k=v===void 0?null:v,N=n.classes,C=N===void 0?[]:N,g=n.attributes,_=g===void 0?{}:g,I=n.styles,$=I===void 0?{}:I;if(!!t){var D=t.prefix,G=t.iconName,B=t.icon;return gr(R({type:"icon"},t),function(){return Ot("beforeDOMElementCreation",{iconDefinition:t,params:n}),z.autoA11y&&(m?_["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(k||kn()):(_["aria-hidden"]="true",_.focusable="false")),Ua({icons:{main:na(B),mask:l?na(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:G,transform:R(R({},Ke),a),symbol:o,title:m,maskId:c,titleId:k,extra:{attributes:_,styles:$,classes:C}})})}},id={mixout:function(){return{icon:rd(ad)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wi,n.nodeCallback=nd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?le:r,i=n.callback,o=i===void 0?function(){}:i;return Wi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,m=r.extra;return new Promise(function(v,k){Promise.all([ra(a,s),c.iconName?ra(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var C=Ta(N,2),g=C[0],_=C[1];v([n,Ua({icons:{main:g,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:m,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=mr(s);l.length>0&&(a.style=l);var f;return za(o)&&(f=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},od={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return gr({type:"layer"},function(){Ot("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(dr(i)).join(" ")},children:o}]})}}}},sd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return gr({type:"counter",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),Du({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(dr(s))}})})}}}},ld={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ke:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,m=r.styles,v=m===void 0?{}:m;return gr({type:"text",content:n},function(){return Ot("beforeDOMElementCreation",{content:n,params:r}),zi({content:n,transform:R(R({},Ke),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(z.familyPrefix,"-layers-text")].concat(dr(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(_s){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return z.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,zi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},cd=new RegExp('"',"ug"),Ki=[1105920,1112319];function fd(e){var t=e.replace(cd,""),n=ku(t,0),r=n>=Ki[0]&&n<=Ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Jr(a?t[0]:t),isSecondary:r||a}}function Yi(e,t){var n="".concat(Qf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Jt(e.children),o=i.filter(function(G){return G.getAttribute(Qr)===t})[0],s=ht.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(nu),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qn[l[2].toLowerCase()]:ru[f],v=fd(d),k=v.value,N=v.isSecondary,C=l[0].startsWith("FontAwesome"),g=Da(m,k),_=g;if(C){var I=Ru(k);I.iconName&&I.prefix&&(g=I.iconName,m=I.prefix)}if(g&&!N&&(!o||o.getAttribute(Ma)!==m||o.getAttribute(La)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var $=ed(),D=$.extra;D.attributes[Qr]=t,ra(g,m).then(function(G){var B=Ua(R(R({},$),{},{icons:{main:G,mask:Ha()},prefix:m,iconName:_,extra:D,watchable:!0})),q=le.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=B.map(function(ae){return An(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function ud(e){return Promise.all([Yi(e,"::before"),Yi(e,"::after")])}function dd(e){return e.parentNode!==document.head&&!~Zf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qi(e){if(!!nt)return new Promise(function(t,n){var r=Jt(e.querySelectorAll("*")).filter(dd).map(ud),a=Ba.begin("searchPseudoElements");Ws(),Promise.all(r).then(function(){a(),ia(),t()}).catch(function(){a(),ia(),n()})})}var md={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?le:r;z.searchPseudoElements&&qi(a)}}},Vi=!1,pd={mixout:function(){return{dom:{unwatch:function(){Ws(),Vi=!0}}}},hooks:function(){return{bootstrap:function(){Ui(ea("mutationObserverCallbacks",{}))},noAuto:function(){Gu()},watch:function(n){var r=n.observeMutationsRoot;Vi?ia():Ui(ea("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Xi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hd={mixout:function(){return{parse:{transform:function(n){return Xi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Xi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:m};return{tag:"g",attributes:R({},v.outer),children:[{tag:"g",attributes:R({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),v.path)}]}]}}}},Pr={x:0,y:0,width:"100%",height:"100%"};function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gd(e){return e.tag==="g"?e.children:[e]}var vd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?hr(a.split(" ").map(function(o){return o.trim()})):Ha();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,m=o.icon,v=hu({transform:l,containerWidth:d,iconWidth:f}),k={tag:"rect",attributes:R(R({},Pr),{},{fill:"white"})},N=c.children?{children:c.children.map(Gi)}:{},C={tag:"g",attributes:R({},v.inner),children:[Gi(R({tag:c.tag,attributes:R(R({},c.attributes),v.path)},N))]},g={tag:"g",attributes:R({},v.outer),children:[C]},_="mask-".concat(s||kn()),I="clip-".concat(s||kn()),$={tag:"mask",attributes:R(R({},Pr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:gd(m)},$]};return r.push(D,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(_,")")},Pr)}),{children:r,attributes:a}}}},bd={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},wd=[bu,id,od,sd,ld,md,pd,hd,vd,bd,yd];Nu(wd,{mixoutsTo:Ce});Ce.noAuto;var Ys=Ce.config,xd=Ce.library;Ce.dom;var Gn=Ce.parse;Ce.findIconDefinition;Ce.toHtml;var _d=Ce.icon;Ce.layer;var kd=Ce.text;Ce.counter;function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qn(e){return Qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qn(e)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ed(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ad(e,t){if(e==null)return{};var n=Ed(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function oa(e){return Od(e)||Pd(e)||Cd(e)||Sd()}function Od(e){if(Array.isArray(e))return sa(e)}function Pd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Cd(e,t){if(!!e){if(typeof e=="string")return sa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sa(e,t)}}function sa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},qs={exports:{}};(function(e){(function(t){var n=function(g,_,I){if(!f(_)||d(_)||m(_)||v(_)||l(_))return _;var $,D=0,G=0;if(c(_))for($=[],G=_.length;D<G;D++)$.push(n(g,_[D],I));else{$={};for(var B in _)Object.prototype.hasOwnProperty.call(_,B)&&($[g(B,I)]=n(g,_[B],I))}return $},r=function(g,_){_=_||{};var I=_.separator||"_",$=_.split||/(?=[A-Z])/;return g.split($).join(I)},a=function(g){return k(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(_,I){return I?I.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var _=a(g);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(g,_){return r(g,_).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},f=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},m=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},k=function(g){return g=g-0,g===g},N=function(g,_){var I=_&&"process"in _?_.process:_;return typeof I!="function"?g:function($,D){return I($,g,D)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,_){return n(N(a,_),g)},decamelizeKeys:function(g,_){return n(N(o,_),g,_)},pascalizeKeys:function(g,_){return n(N(i,_),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(Rd)})(qs);var Id=qs.exports,Td=["class","style"];function Nd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Id.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Md(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ka(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Md(c);break;case"style":l.style=Nd(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ad(n,Td);return fr(e.tag,Me(Me(Me({},t),{},{class:a.class,style:Me(Me({},a.style),o)},a.attrs),s),r)}var Vs=!1;try{Vs=!0}catch{}function Ld(){if(!Vs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function mn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?we({},e,t):{}}function Fd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},we(t,"fa-".concat(e.size),e.size!==null),we(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),we(t,"fa-pull-".concat(e.pull),e.pull!==null),we(t,"fa-swap-opacity",e.swapOpacity),we(t,"fa-bounce",e.bounce),we(t,"fa-shake",e.shake),we(t,"fa-beat",e.beat),we(t,"fa-fade",e.fade),we(t,"fa-beat-fade",e.beatFade),we(t,"fa-flash",e.flash),we(t,"fa-spin-pulse",e.spinPulse),we(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ji(e){if(e&&Qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gn.icon)return Gn.icon(e);if(e===null)return null;if(Qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var jd=Qt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ce(function(){return Ji(t.icon)}),i=ce(function(){return mn("classes",Fd(t))}),o=ce(function(){return mn("transform",typeof t.transform=="string"?Gn.transform(t.transform):t.transform)}),s=ce(function(){return mn("mask",Ji(t.mask))}),l=ce(function(){return _d(a.value,Me(Me(Me(Me({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ht(l,function(c){if(!c)return Ld("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ce(function(){return l.value?Ka(l.value.abstract[0],{},r):null});return function(){return f.value}}});Qt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ys.familyPrefix,i=ce(function(){return["".concat(a,"-layers")].concat(oa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return fr("div",{class:i.value},r.default?r.default():[])}}});Qt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ys.familyPrefix,i=ce(function(){return mn("classes",[].concat(oa(t.counter?["".concat(a,"-layers-counter")]:[]),oa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ce(function(){return mn("transform",typeof t.transform=="string"?Gn.transform(t.transform):t.transform)}),s=ce(function(){var f=kd(t.value.toString(),Me(Me({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ce(function(){return Ka(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var zd={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"]};/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xs=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Zt=e=>Xs?Symbol(e):"_vr_"+e,$d=Zt("rvlm"),Zi=Zt("rvd"),Ya=Zt("r"),Gs=Zt("rl"),la=Zt("rvl"),Lt=typeof window!="undefined";function Dd(e){return e.__esModule||Xs&&e[Symbol.toStringTag]==="Module"}const ne=Object.assign;function Cr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const pn=()=>{},Hd=/\/$/,Ud=e=>e.replace(Hd,"");function Sr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Yd(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Bd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function eo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wd(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Yt(t.matched[r],n.matched[a])&&Qs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Yt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kd(e[n],t[n]))return!1;return!0}function Kd(e,t){return Array.isArray(e)?to(e,t):Array.isArray(t)?to(t,e):e===t}function to(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Yd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var hn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hn||(hn={}));function qd(e){if(!e)if(Lt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ud(e)}const Vd=/^[^#]+#/;function Xd(e,t){return e.replace(Vd,"#")+t}function Gd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const vr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Gd(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function no(e,t){return(history.state?history.state.position-t:-1)+e}const ca=new Map;function Jd(e,t){ca.set(e,t)}function Zd(e){const t=ca.get(e);return ca.delete(e),t}let em=()=>location.protocol+"//"+location.host;function Js(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),eo(l,"")}return eo(n,e)+r+a}function tm(e,t,n,r){let a=[],i=[],o=null;const s=({state:m})=>{const v=Js(e,location),k=n.value,N=t.value;let C=0;if(m){if(n.value=v,t.value=m,o&&o===k){o=null;return}C=N?m.position-N.position:0}else r(v);a.forEach(g=>{g(n.value,k,{delta:C,type:En.pop,direction:C?C>0?hn.forward:hn.back:hn.unknown})})};function l(){o=n.value}function f(m){a.push(m);const v=()=>{const k=a.indexOf(m);k>-1&&a.splice(k,1)};return i.push(v),v}function c(){const{history:m}=window;!m.state||m.replaceState(ne({},m.state,{scroll:vr()}),"")}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function ro(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?vr():null}}function nm(e){const{history:t,location:n}=window,r={value:Js(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:em()+e+l;try{t[c?"replaceState":"pushState"](f,"",m),a.value=f}catch(v){console.error(v),n[c?"replace":"assign"](m)}}function o(l,f){const c=ne({},t.state,ro(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=ne({},a.value,t.state,{forward:l,scroll:vr()});i(c.current,c,!0);const d=ne({},ro(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function rm(e){e=qd(e);const t=nm(e),n=tm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=ne({location:"",base:e,go:r,createHref:Xd.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function am(e){return typeof e=="string"||e&&typeof e=="object"}function Zs(e){return typeof e=="string"||typeof e=="symbol"}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},el=Zt("nf");var ao;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ao||(ao={}));function qt(e,t){return ne(new Error,{type:e,[el]:!0},t)}function st(e,t){return e instanceof Error&&el in e&&(t==null||!!(e.type&t))}const io="[^/]+?",im={sensitive:!1,strict:!1,start:!0,end:!0},om=/[.+*?^${}()[\]/\\]/g;function sm(e,t){const n=ne({},im,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const m=f[d];let v=40+(n.sensitive?.25:0);if(m.type===0)d||(a+="/"),a+=m.value.replace(om,"\\$&"),v+=40;else if(m.type===1){const{value:k,repeatable:N,optional:C,regexp:g}=m;i.push({name:k,repeatable:N,optional:C});const _=g||io;if(_!==io){v+=10;try{new RegExp(`(${_})`)}catch($){throw new Error(`Invalid custom RegExp for param "${k}" (${_}): `+$.message)}}let I=N?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(I=C&&f.length<2?`(?:/${I})`:"/"+I),C&&(I+="?"),a+=I,v+=20,C&&(v+=-8),N&&(v+=-20),_===".*"&&(v+=-50)}c.push(v)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let m=1;m<c.length;m++){const v=c[m]||"",k=i[m-1];d[k.name]=v&&k.repeatable?v.split("/"):v}return d}function l(f){let c="",d=!1;for(const m of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const v of m)if(v.type===0)c+=v.value;else if(v.type===1){const{value:k,repeatable:N,optional:C}=v,g=k in f?f[k]:"";if(Array.isArray(g)&&!N)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(g)?g.join("/"):g;if(!_)if(C)m.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);c+=_}}return c}return{re:o,score:r,keys:i,parse:s,stringify:l}}function lm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function cm(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=lm(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(oo(r))return 1;if(oo(a))return-1}return a.length-r.length}function oo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fm={type:0,value:""},um=/[a-zA-Z0-9_]/;function dm(e){if(!e)return[[]];if(e==="/")return[[fm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${f}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function m(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:um.test(l)?m():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function mm(e,t,n){const r=sm(dm(e.path),n),a=ne(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function pm(e,t){const n=[],r=new Map;t=lo({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,m){const v=!m,k=gm(c);k.aliasOf=m&&m.record;const N=lo(t,c),C=[k];if("alias"in c){const I=typeof c.alias=="string"?[c.alias]:c.alias;for(const $ of I)C.push(ne({},k,{components:m?m.record.components:k.components,path:$,aliasOf:m?m.record:k}))}let g,_;for(const I of C){const{path:$}=I;if(d&&$[0]!=="/"){const D=d.record.path,G=D[D.length-1]==="/"?"":"/";I.path=d.record.path+($&&G+$)}if(g=mm(I,d,N),m?m.alias.push(g):(_=_||g,_!==g&&_.alias.push(g),v&&c.name&&!so(g)&&o(c.name)),"children"in k){const D=k.children;for(let G=0;G<D.length;G++)i(D[G],g,m&&m.children[G])}m=m||g,l(g)}return _?()=>{o(_)}:pn}function o(c){if(Zs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&cm(c,n[d])>=0&&(c.record.path!==n[d].record.path||!tl(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!so(c)&&r.set(c.record.name,c)}function f(c,d){let m,v={},k,N;if("name"in c&&c.name){if(m=r.get(c.name),!m)throw qt(1,{location:c});N=m.record.name,v=ne(hm(d.params,m.keys.filter(_=>!_.optional).map(_=>_.name)),c.params),k=m.stringify(v)}else if("path"in c)k=c.path,m=n.find(_=>_.re.test(k)),m&&(v=m.parse(k),N=m.record.name);else{if(m=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!m)throw qt(1,{location:c,currentLocation:d});N=m.record.name,v=ne({},d.params,c.params),k=m.stringify(v)}const C=[];let g=m;for(;g;)C.unshift(g.record),g=g.parent;return{name:N,path:k,params:v,matched:C,meta:bm(C)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function hm(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:vm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function vm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function so(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function bm(e){return e.reduce((t,n)=>ne(t,n.meta),{})}function lo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function tl(e,t){return t.children.some(n=>n===e||tl(e,n))}const nl=/#/g,ym=/&/g,wm=/\//g,xm=/=/g,_m=/\?/g,rl=/\+/g,km=/%5B/g,Em=/%5D/g,al=/%5E/g,Am=/%60/g,il=/%7B/g,Om=/%7C/g,ol=/%7D/g,Pm=/%20/g;function qa(e){return encodeURI(""+e).replace(Om,"|").replace(km,"[").replace(Em,"]")}function Cm(e){return qa(e).replace(il,"{").replace(ol,"}").replace(al,"^")}function fa(e){return qa(e).replace(rl,"%2B").replace(Pm,"+").replace(nl,"%23").replace(ym,"%26").replace(Am,"`").replace(il,"{").replace(ol,"}").replace(al,"^")}function Sm(e){return fa(e).replace(xm,"%3D")}function Rm(e){return qa(e).replace(nl,"%23").replace(_m,"%3F")}function Im(e){return e==null?"":Rm(e).replace(wm,"%2F")}function Jn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Tm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(rl," "),o=i.indexOf("="),s=Jn(o<0?i:i.slice(0,o)),l=o<0?null:Jn(i.slice(o+1));if(s in t){let f=t[s];Array.isArray(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function co(e){let t="";for(let n in e){const r=e[n];if(n=Sm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&fa(i)):[r&&fa(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Nm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function nn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ft(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(qt(4,{from:n,to:t})):d instanceof Error?s(d):am(d)?s(qt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Rr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Mm(s)){const f=(s.__vccOpts||s)[t];f&&a.push(ft(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Dd(f)?f.default:f;i.components[o]=c;const m=(c.__vccOpts||c)[t];return m&&ft(m,n,r,i,o)()}))}}return a}function Mm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function fo(e){const t=Ge(Ya),n=Ge(Gs),r=ce(()=>t.resolve(Dt(e.to))),a=ce(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const m=d.findIndex(Yt.bind(null,c));if(m>-1)return m;const v=uo(l[f-2]);return f>1&&uo(c)===v&&d[d.length-1].path!==v?d.findIndex(Yt.bind(null,l[f-2])):m}),i=ce(()=>a.value>-1&&zm(n.params,r.value.params)),o=ce(()=>a.value>-1&&a.value===n.matched.length-1&&Qs(n.params,r.value.params));function s(l={}){return jm(l)?t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(pn):Promise.resolve()}return{route:r,href:ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Lm=Qt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fo,setup(e,{slots:t}){const n=Gt(fo(e)),{options:r}=Ge(Ya),a=ce(()=>({[mo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:fr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Fm=Lm;function jm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function zm(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function uo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mo=(e,t,n)=>e!=null?e:t!=null?t:n,$m=Qt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(la),a=ce(()=>e.route||r.value),i=Ge(Zi,0),o=ce(()=>a.value.matched[i]);Mn(Zi,i+1),Mn($d,o),Mn(la,a);const s=Aa();return Ht(()=>[s.value,o.value,e.name],([l,f,c],[d,m,v])=>{f&&(f.instances[c]=l,m&&m!==f&&l&&l===d&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!Yt(f,m)||!d)&&(f.enterCallbacks[c]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=a.value,f=o.value,c=f&&f.components[e.name],d=e.name;if(!c)return po(n.default,{Component:c,route:l});const m=f.props[e.name],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,N=fr(c,ne({},v,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[d]=null)},ref:s}));return po(n.default,{Component:N,route:l})||N}}});function po(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sl=$m;function Dm(e){const t=pm(e.routes,e),n=e.parseQuery||Tm,r=e.stringifyQuery||co,a=e.history,i=nn(),o=nn(),s=nn(),l=Vl(ot);let f=ot;Lt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Cr.bind(null,b=>""+b),d=Cr.bind(null,Im),m=Cr.bind(null,Jn);function v(b,M){let P,L;return Zs(b)?(P=t.getRecordMatcher(b),L=M):L=b,t.addRoute(L,P)}function k(b){const M=t.getRecordMatcher(b);M&&t.removeRoute(M)}function N(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function g(b,M){if(M=ne({},M||l.value),typeof b=="string"){const K=Sr(n,b,M.path),u=t.resolve({path:K.path},M),p=a.createHref(K.fullPath);return ne(K,u,{params:m(u.params),hash:Jn(K.hash),redirectedFrom:void 0,href:p})}let P;if("path"in b)P=ne({},b,{path:Sr(n,b.path,M.path).path});else{const K=ne({},b.params);for(const u in K)K[u]==null&&delete K[u];P=ne({},b,{params:d(b.params)}),M.params=d(M.params)}const L=t.resolve(P,M),Z=b.hash||"";L.params=c(m(L.params));const oe=Bd(r,ne({},b,{hash:Cm(Z),path:L.path})),Y=a.createHref(oe);return ne({fullPath:oe,hash:Z,query:r===co?Nm(b.query):b.query||{}},L,{redirectedFrom:void 0,href:Y})}function _(b){return typeof b=="string"?Sr(n,b,l.value.path):ne({},b)}function I(b,M){if(f!==b)return qt(8,{from:M,to:b})}function $(b){return B(b)}function D(b){return $(ne(_(b),{replace:!0}))}function G(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:P}=M;let L=typeof P=="function"?P(b):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=_(L):{path:L},L.params={}),ne({query:b.query,hash:b.hash,params:b.params},L)}}function B(b,M){const P=f=g(b),L=l.value,Z=b.state,oe=b.force,Y=b.replace===!0,K=G(P);if(K)return B(ne(_(K),{state:Z,force:oe,replace:Y}),M||P);const u=P;u.redirectedFrom=M;let p;return!oe&&Wd(r,L,P)&&(p=qt(16,{to:u,from:L}),Ct(L,L,!0,!1)),(p?Promise.resolve(p):ae(u,L)).catch(h=>st(h)?st(h,2)?h:ke(h):ie(h,u,L)).then(h=>{if(h){if(st(h,2))return B(ne(_(h.to),{state:Z,force:oe,replace:Y}),M||u)}else h=ge(u,L,!0,Y,Z);return ye(u,L,h),h})}function q(b,M){const P=I(b,M);return P?Promise.reject(P):Promise.resolve()}function ae(b,M){let P;const[L,Z,oe]=Hm(b,M);P=Rr(L.reverse(),"beforeRouteLeave",b,M);for(const K of L)K.leaveGuards.forEach(u=>{P.push(ft(u,b,M))});const Y=q.bind(null,b,M);return P.push(Y),It(P).then(()=>{P=[];for(const K of i.list())P.push(ft(K,b,M));return P.push(Y),It(P)}).then(()=>{P=Rr(Z,"beforeRouteUpdate",b,M);for(const K of Z)K.updateGuards.forEach(u=>{P.push(ft(u,b,M))});return P.push(Y),It(P)}).then(()=>{P=[];for(const K of b.matched)if(K.beforeEnter&&!M.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const u of K.beforeEnter)P.push(ft(u,b,M));else P.push(ft(K.beforeEnter,b,M));return P.push(Y),It(P)}).then(()=>(b.matched.forEach(K=>K.enterCallbacks={}),P=Rr(oe,"beforeRouteEnter",b,M),P.push(Y),It(P))).then(()=>{P=[];for(const K of o.list())P.push(ft(K,b,M));return P.push(Y),It(P)}).catch(K=>st(K,8)?K:Promise.reject(K))}function ye(b,M,P){for(const L of s.list())L(b,M,P)}function ge(b,M,P,L,Z){const oe=I(b,M);if(oe)return oe;const Y=M===ot,K=Lt?history.state:{};P&&(L||Y?a.replace(b.fullPath,ne({scroll:Y&&K&&K.scroll},Z)):a.push(b.fullPath,Z)),l.value=b,Ct(b,M,P,Y),ke()}let _e;function rt(){_e||(_e=a.listen((b,M,P)=>{const L=g(b),Z=G(L);if(Z){B(ne(Z,{replace:!0}),L).catch(pn);return}f=L;const oe=l.value;Lt&&Jd(no(oe.fullPath,P.delta),vr()),ae(L,oe).catch(Y=>st(Y,12)?Y:st(Y,2)?(B(Y.to,L).then(K=>{st(K,20)&&!P.delta&&P.type===En.pop&&a.go(-1,!1)}).catch(pn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ie(Y,L,oe))).then(Y=>{Y=Y||ge(L,oe,!1),Y&&(P.delta?a.go(-P.delta,!1):P.type===En.pop&&st(Y,20)&&a.go(-1,!1)),ye(L,oe,Y)}).catch(pn)}))}let Se=nn(),ue=nn(),de;function ie(b,M,P){ke(b);const L=ue.list();return L.length?L.forEach(Z=>Z(b,M,P)):console.error(b),Promise.reject(b)}function J(){return de&&l.value!==ot?Promise.resolve():new Promise((b,M)=>{Se.add([b,M])})}function ke(b){return de||(de=!b,rt(),Se.list().forEach(([M,P])=>b?P(b):M()),Se.reset()),b}function Ct(b,M,P,L){const{scrollBehavior:Z}=e;if(!Lt||!Z)return Promise.resolve();const oe=!P&&Zd(no(b.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Pa().then(()=>Z(b,M,oe)).then(Y=>Y&&Qd(Y)).catch(Y=>ie(Y,b,M))}const qe=b=>a.go(b);let $e;const Re=new Set;return{currentRoute:l,addRoute:v,removeRoute:k,hasRoute:C,getRoutes:N,resolve:g,options:e,push:$,replace:D,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ue.add,isReady:J,install(b){const M=this;b.component("RouterLink",Fm),b.component("RouterView",sl),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),Lt&&!$e&&l.value===ot&&($e=!0,$(a.location).catch(Z=>{}));const P={};for(const Z in ot)P[Z]=ce(()=>l.value[Z]);b.provide(Ya,M),b.provide(Gs,Gt(P)),b.provide(la,l);const L=b.unmount;Re.add(b),b.unmount=function(){Re.delete(b),Re.size<1&&(f=ot,_e&&_e(),_e=null,l.value=ot,$e=!1,de=!1),L()}}}}function It(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Hm(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Yt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Yt(f,l))||a.push(l))}return[n,r,a]}const Um=Kn("header",{class:"text-center"},[Kn("h1",{class:"text-6xl font-bold mt-4"},"Tasks")],-1),Bm=Qt({__name:"App",setup(e){return(t,n)=>(qc(),Xc(Be,null,[Um,Oe(Dt(sl))],64))}}),Wm="modulepreload",ho={},Km="/",Ym=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Km}${r}`,r in ho)return;ho[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":Wm,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},qm=Dm({history:rm("/"),routes:[{path:"/",name:"Index",component:()=>Ym(()=>import("./IndexView.05ea8840.js"),["assets/IndexView.05ea8840.js","assets/IndexView.af0feb99.css"])}]});xd.add(zd);const br=Nf(Bm);br.use(Ff());br.use(qm);br.component("FontAwesomeIcon",jd);br.mount("#app");export{Be as F,Qt as a,Kn as b,Xc as c,tp as d,ep as e,Gm as f,Oe as g,Xm as h,wc as i,Qm as j,Jm as k,qc as o,Aa as r,Vm as t,Dt as u,Zm as v,Ht as w};
