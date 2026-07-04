(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="185",Tx=0,Sd=1,Ax=2,_l=1,Rx=2,ko=3,Lr=0,Hn=1,wi=2,ar=0,Gs=1,Md=2,Ed=3,bd=4,Cx=5,Yr=100,Px=101,Ix=102,Dx=103,Lx=104,Nx=200,Ox=201,Ux=202,Fx=203,Qf=204,eu=205,Bx=206,zx=207,kx=208,Vx=209,Hx=210,Gx=211,Wx=212,$x=213,Xx=214,tu=0,nu=1,iu=2,Zs=3,ru=4,su=5,ou=6,au=7,G0=0,qx=1,Yx=2,$i=0,W0=1,$0=2,X0=3,q0=4,Y0=5,K0=6,Z0=7,j0=300,rs=301,js=302,Hc=303,Gc=304,Tc=306,lu=1e3,or=1001,cu=1002,Mn=1003,Kx=1004,xa=1005,An=1006,Wc=1007,Jr=1008,ni=1009,J0=1010,Q0=1011,Zo=1012,Lh=1013,ji=1014,Hi=1015,dr=1016,Nh=1017,Oh=1018,jo=1020,eg=35902,tg=35899,ng=1021,ig=1022,Ri=1023,pr=1026,Qr=1027,Uh=1028,Fh=1029,ss=1030,Bh=1031,zh=1033,xl=33776,vl=33777,yl=33778,Sl=33779,fu=35840,uu=35841,hu=35842,du=35843,pu=36196,mu=37492,gu=37496,_u=37488,xu=37489,Ll=37490,vu=37491,yu=37808,Su=37809,Mu=37810,Eu=37811,bu=37812,wu=37813,Tu=37814,Au=37815,Ru=37816,Cu=37817,Pu=37818,Iu=37819,Du=37820,Lu=37821,Nu=36492,Ou=36494,Uu=36495,Fu=36283,Bu=36284,Nl=36285,zu=36286,Zx=3200,ku=0,jx=1,Rr="",ui="srgb",Ol="srgb-linear",Ul="linear",Bt="srgb",hs=7680,wd=519,Jx=512,Qx=513,ev=514,kh=515,tv=516,nv=517,Vh=518,iv=519,Vu=35044,Td="300 es",Gi=2e3,Jo=2001;function rv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sv(){const n=Fl("canvas");return n.style.display="block",n}const Ad={};function Bl(...n){const e="THREE."+n.shift();console.log(e,...n)}function rg(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=rg(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Tt(...n){n=rg(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ws(...n){const e=n.join(" ");e in Ad||(Ad[e]=!0,ot(...n))}function ov(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const av={[tu]:nu,[iu]:ou,[ru]:au,[Zs]:su,[nu]:tu,[ou]:iu,[au]:ru,[su]:Zs};class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const $s=Math.PI/180,Qo=180/Math.PI;function lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function Hh(n,e){return(n%e+e)%e}function lv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function cv(n,e,t){return n!==e?(t-n)/(e-n):0}function qo(n,e,t){return(1-t)*n+t*e}function fv(n,e,t,i){return qo(n,e,1-Math.exp(-t*i))}function uv(n,e=1){return e-Math.abs(Hh(n,e*2)-e)}function hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function dv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mv(n,e){return n+Math.random()*(e-n)}function gv(n){return n*(.5-Math.random())}function _v(n){n!==void 0&&(Rd=n);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xv(n){return n*$s}function vv(n){return n*Qo}function yv(n){return(n&n-1)===0&&n!==0}function Sv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ev(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*h,a*l);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const sg={DEG2RAD:$s,RAD2DEG:Qo,generateUUID:lr,clamp:mt,euclideanModulo:Hh,mapLinear:lv,inverseLerp:cv,lerp:qo,damp:fv,pingpong:uv,smoothstep:hv,smootherstep:dv,randInt:pv,randFloat:mv,randFloatSpread:gv,seededRandom:_v,degToRad:xv,radToDeg:vv,isPowerOfTwo:yv,ceilPowerOfTwo:Sv,floorPowerOfTwo:Mv,setQuaternionFromProperEuler:Ev,normalize:zt,denormalize:Ti},gd=class gd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gd.prototype.isVector2=!0;let dt=gd;class lo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(f!==v||c!==u||l!==p||h!==m){let _=c*u+l*p+h*m+f*v;_<0&&(u=-u,p=-p,m=-m,v=-v,_=-_);let x=1-a;if(_<.9995){const T=Math.acos(_),C=Math.sin(T);x=Math.sin(x*T)/C,a=Math.sin(a*T)/C,c=c*x+u*a,l=l*x+p*a,h=h*x+m*a,f=f*x+v*a}else{c=c*x+u*a,l=l*x+p*a,h=h*x+m*a,f=f*x+v*a;const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+h*f+c*p-l*u,e[t+1]=c*m+h*u+l*f-a*p,e[t+2]=l*m+h*p+a*u-c*f,e[t+3]=h*m-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),u=c(i/2),p=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f+u*p*m;break;case"YZX":this._x=u*h*f+l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f-u*p*m;break;case"XZY":this._x=u*h*f-l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f+u*p*m;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _d=class _d{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_d.prototype.isVector3=!0;let W=_d;const $c=new W,Cd=new lo,xd=class xd{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],m=i[8],v=r[0],_=r[3],x=r[6],T=r[1],C=r[4],M=r[7],I=r[2],R=r[5],F=r[8];return s[0]=o*v+a*T+c*I,s[3]=o*_+a*C+c*R,s[6]=o*x+a*M+c*F,s[1]=l*v+h*T+f*I,s[4]=l*_+h*C+f*R,s[7]=l*x+h*M+f*F,s[2]=u*v+p*T+m*I,s[5]=u*_+p*C+m*R,s[8]=u*x+p*M+m*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,p=l*s-o*c,m=t*f+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=u*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xd.prototype.isMatrix3=!0;let ut=xd;const Xc=new ut,Pd=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bv(){const n={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Bt&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Bt&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?Ul:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ol]:{primaries:e,whitePoint:i,transfer:Ul,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:i,transfer:Bt,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),n}const Et=bv();function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class wv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Fl("canvas")),ds.width=e.width,ds.height=e.height;const r=ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tv=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Av=0;const Yc=new W;class Rn extends cs{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=or,r=or,s=An,o=Jr,a=Ri,c=ni,l=Rn.DEFAULT_ANISOTROPY,h=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=lr(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yc).x}get height(){return this.source.getSize(Yc).y}get depth(){return this.source.getSize(Yc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lu:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lu:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=j0;Rn.DEFAULT_ANISOTROPY=1;const vd=class vd{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],m=c[9],v=c[2],_=c[6],x=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,M=(p+1)/2,I=(x+1)/2,R=(h+u)/4,F=(f+v)/4,S=(m+_)/4;return C>M&&C>I?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=R/i,s=F/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=S/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=F/s,r=S/s),this.set(i,r,s,t),this}let T=Math.sqrt((_-m)*(_-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(_-m)/T,this.y=(f-v)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vd.prototype.isVector4=!0;let kt=vd;class Rv extends cs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Rn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Rv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class og extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cv extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wc=class wc{constructor(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_)}set(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=f,x[14]=u,x[3]=p,x[7]=m,x[11]=v,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,m=a*h,v=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+m*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,m=l*h,v=l*f;t[0]=u+v*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,m=l*h,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,m=a*h,v=a*f;t[0]=c*h,t[4]=m*l-p,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-u*f,t[8]=m*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+m,t[10]=u-v*f}else if(e.order==="XZY"){const u=o*c,p=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=o*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pv,e,Iv)}lookAt(e,t,i){const r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),yr.crossVectors(i,Zn),yr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),yr.crossVectors(i,Zn)),yr.normalize(),va.crossVectors(Zn,yr),r[0]=yr.x,r[4]=va.x,r[8]=Zn.x,r[1]=yr.y,r[5]=va.y,r[9]=Zn.y,r[2]=yr.z,r[6]=va.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],m=i[2],v=i[6],_=i[10],x=i[14],T=i[3],C=i[7],M=i[11],I=i[15],R=r[0],F=r[4],S=r[8],A=r[12],k=r[1],B=r[5],z=r[9],P=r[13],O=r[2],E=r[6],L=r[10],U=r[14],G=r[3],K=r[7],te=r[11],fe=r[15];return s[0]=o*R+a*k+c*O+l*G,s[4]=o*F+a*B+c*E+l*K,s[8]=o*S+a*z+c*L+l*te,s[12]=o*A+a*P+c*U+l*fe,s[1]=h*R+f*k+u*O+p*G,s[5]=h*F+f*B+u*E+p*K,s[9]=h*S+f*z+u*L+p*te,s[13]=h*A+f*P+u*U+p*fe,s[2]=m*R+v*k+_*O+x*G,s[6]=m*F+v*B+_*E+x*K,s[10]=m*S+v*z+_*L+x*te,s[14]=m*A+v*P+_*U+x*fe,s[3]=T*R+C*k+M*O+I*G,s[7]=T*F+C*B+M*E+I*K,s[11]=T*S+C*z+M*L+I*te,s[15]=T*A+C*P+M*U+I*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],m=e[3],v=e[7],_=e[11],x=e[15],T=c*p-l*u,C=a*p-l*f,M=a*u-c*f,I=o*p-l*h,R=o*u-c*h,F=o*f-a*h;return t*(v*T-_*C+x*M)-i*(m*T-_*I+x*R)+r*(m*C-v*I+x*F)-s*(m*M-v*R+_*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],m=e[12],v=e[13],_=e[14],x=e[15],T=t*a-i*o,C=t*c-r*o,M=t*l-s*o,I=i*c-r*a,R=i*l-s*a,F=r*l-s*c,S=h*v-f*m,A=h*_-u*m,k=h*x-p*m,B=f*_-u*v,z=f*x-p*v,P=u*x-p*_,O=T*P-C*z+M*B+I*k-R*A+F*S;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/O;return e[0]=(a*P-c*z+l*B)*E,e[1]=(r*z-i*P-s*B)*E,e[2]=(v*F-_*R+x*I)*E,e[3]=(u*R-f*F-p*I)*E,e[4]=(c*k-o*P-l*A)*E,e[5]=(t*P-r*k+s*A)*E,e[6]=(_*M-m*F-x*C)*E,e[7]=(h*F-u*M+p*C)*E,e[8]=(o*z-a*k+l*S)*E,e[9]=(i*k-t*z-s*S)*E,e[10]=(m*R-v*M+x*T)*E,e[11]=(f*M-h*R-p*T)*E,e[12]=(a*A-o*B-c*S)*E,e[13]=(t*B-i*A+r*S)*E,e[14]=(v*C-m*I-_*T)*E,e[15]=(h*I-f*C+u*T)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,p=s*h,m=s*f,v=o*h,_=o*f,x=a*f,T=c*l,C=c*h,M=c*f,I=i.x,R=i.y,F=i.z;return r[0]=(1-(v+x))*I,r[1]=(p+M)*I,r[2]=(m-C)*I,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+x))*R,r[6]=(_+T)*R,r[7]=0,r[8]=(m+C)*F,r[9]=(_-T)*F,r[10]=(1-(u+v))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ps.set(r[0],r[1],r[2]).length();const a=ps.set(r[4],r[5],r[6]).length(),c=ps.set(r[8],r[9],r[10]).length();s<0&&(o=-o),vi.copy(this);const l=1/o,h=1/a,f=1/c;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,t.setFromRotationMatrix(vi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Gi,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===Gi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Jo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gi,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===Gi)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Jo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};wc.prototype.isMatrix4=!0;let qt=wc;const ps=new W,vi=new qt,Pv=new W(0,0,0),Iv=new W(1,1,1),yr=new W,va=new W,Zn=new W,Dd=new qt,Ld=new lo;class os{constructor(e=0,t=0,i=0,r=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ld.setFromEuler(this),this.setFromQuaternion(Ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dv=0;const Nd=new W,ms=new lo,er=new qt,ya=new W,So=new W,Lv=new W,Nv=new lo,Od=new W(1,0,0),Ud=new W(0,1,0),Fd=new W(0,0,1),Bd={type:"added"},Ov={type:"removed"},gs={type:"childadded",child:null},Kc={type:"childremoved",child:null};class fn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new W,t=new os,i=new lo,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ut}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(Ud,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Nd.copy(e).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(Ud,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ya.copy(e):ya.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(So,ya,this.up):er.lookAt(ya,So,this.up),this.quaternion.setFromRotationMatrix(er),r&&(er.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(er),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),gs.child=e,this.dispatchEvent(gs),gs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ov),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,Lv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,Nv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new W(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _n extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uv={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),x=this._getHandJoint(l,v);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function jc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let St=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=Hh(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jc(o,s,e+1/3),this.g=jc(o,s,e),this.b=jc(o,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,t=ui){function i(s){s!==void 0&&parseFloat(s)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const i=lg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Et.workingToColorSpace(bn.copy(this),e),Math.round(mt(bn.r*255,0,255))*65536+Math.round(mt(bn.g*255,0,255))*256+Math.round(mt(bn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=ui){Et.workingToColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Sa);const i=qo(Sr.h,Sa.h,t),r=qo(Sr.s,Sa.s,t),s=qo(Sr.l,Sa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const bn=new St;St.NAMES=lg;class Fv extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new W,tr=new W,Jc=new W,nr=new W,_s=new W,xs=new W,zd=new W,Qc=new W,ef=new W,tf=new W,nf=new kt,rf=new kt,sf=new kt;class ii{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yi.subVectors(e,t),r.cross(yi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yi.subVectors(r,t),tr.subVectors(i,t),Jc.subVectors(e,t);const o=yi.dot(yi),a=yi.dot(tr),c=yi.dot(Jc),l=tr.dot(tr),h=tr.dot(Jc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,nr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,nr.x),c.addScaledVector(o,nr.y),c.addScaledVector(a,nr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return nf.setScalar(0),rf.setScalar(0),sf.setScalar(0),nf.fromBufferAttribute(e,t),rf.fromBufferAttribute(e,i),sf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nf,s.x),o.addScaledVector(rf,s.y),o.addScaledVector(sf,s.z),o}static isFrontFacing(e,t,i,r){return yi.subVectors(i,t),tr.subVectors(e,t),yi.cross(tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),yi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),xs.subVectors(s,i),Qc.subVectors(e,i);const c=_s.dot(Qc),l=xs.dot(Qc);if(c<=0&&l<=0)return t.copy(i);ef.subVectors(e,r);const h=_s.dot(ef),f=xs.dot(ef);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(_s,o);tf.subVectors(e,s);const p=_s.dot(tf),m=xs.dot(tf);if(m>=0&&p<=m)return t.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(xs,a);const _=h*m-p*f;if(_<=0&&f-h>=0&&p-m>=0)return zd.subVectors(s,r),a=(f-h)/(f-h+(p-m)),t.copy(r).addScaledVector(zd,a);const x=1/(_+v+u);return o=v*x,a=u*x,t.copy(i).addScaledVector(_s,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Or{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ma.copy(i.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),Ea.subVectors(this.max,Mo),vs.subVectors(e.a,Mo),ys.subVectors(e.b,Mo),Ss.subVectors(e.c,Mo),Mr.subVectors(ys,vs),Er.subVectors(Ss,ys),Br.subVectors(vs,Ss);let t=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-Br.z,Br.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,Br.z,0,-Br.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-Br.y,Br.x,0];return!of(t,vs,ys,Ss,Ea)||(t=[1,0,0,0,1,0,0,0,1],!of(t,vs,ys,Ss,Ea))?!1:(ba.crossVectors(Mr,Er),t=[ba.x,ba.y,ba.z],of(t,vs,ys,Ss,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new W,new W,new W,new W,new W,new W,new W,new W],Si=new W,Ma=new Or,vs=new W,ys=new W,Ss=new W,Mr=new W,Er=new W,Br=new W,Mo=new W,Ea=new W,ba=new W,zr=new W;function of(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){zr.fromArray(n,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),c=e.dot(zr),l=t.dot(zr),h=i.dot(zr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ln=new W,wa=new dt;let Bv=0;class Ii extends cs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vu,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class cg extends Ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fg extends Ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends Ii{constructor(e,t,i){super(new Float32Array(e),t,i)}}const zv=new Or,Eo=new W,af=new W;class co{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):zv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(af)),this.expandByPoint(Eo.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kv=0;const ai=new qt,lf=new fn,Ms=new W,jn=new Or,bo=new Or,pn=new W;class dn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?fg:cg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(jn.min,bo.min),jn.expandByPoint(pn),pn.addVectors(jn.max,bo.max),jn.expandByPoint(pn)):(jn.expandByPoint(bo.min),jn.expandByPoint(bo.max))}jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pn.fromBufferAttribute(a,l),c&&(Ms.fromBufferAttribute(e,l),pn.add(Ms)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new W,c[S]=new W;const l=new W,h=new W,f=new W,u=new dt,p=new dt,m=new dt,v=new W,_=new W;function x(S,A,k){l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,A),f.fromBufferAttribute(i,k),u.fromBufferAttribute(s,S),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,k),h.sub(l),f.sub(l),p.sub(u),m.sub(u);const B=1/(p.x*m.y-m.x*p.y);isFinite(B)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(B),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(B),a[S].add(v),a[A].add(v),a[k].add(v),c[S].add(_),c[A].add(_),c[k].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,A=T.length;S<A;++S){const k=T[S],B=k.start,z=k.count;for(let P=B,O=B+z;P<O;P+=3)x(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const C=new W,M=new W,I=new W,R=new W;function F(S){I.fromBufferAttribute(r,S),R.copy(I);const A=a[S];C.copy(A),C.sub(I.multiplyScalar(I.dot(A))).normalize(),M.crossVectors(R,A);const B=M.dot(c[S])<0?-1:1;o.setXYZW(S,C.x,C.y,C.z,B)}for(let S=0,A=T.length;S<A;++S){const k=T[S],B=k.start,z=k.count;for(let P=B,O=B+z;P<O;P+=3)F(e.getX(P+0)),F(e.getX(P+1)),F(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,h=new W,f=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,m=0;for(let v=0,_=c.length;v<_;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let x=0;x<h;x++)u[m++]=l[p++]}return new Ii(u,h,f)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ug{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vu,this.updateRanges=[],this.version=0,this.uuid=lr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=lr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new W;class Wi{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Bl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Vv=0;class Ur extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Gs,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qf,this.blendDst=eu,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qf&&(i.blendSrc=this.blendSrc),this.blendDst!==eu&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new dt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kr extends Ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const wo=new W,bs=new W,ws=new W,Ts=new dt,To=new dt,hg=new qt,Ta=new W,Ao=new W,Aa=new W,kd=new dt,cf=new dt,Vd=new dt;class Bs extends fn{constructor(e=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new dn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ug(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Wi(i,3,0,!1)),Es.setAttribute("uv",new Wi(i,2,3,!1))}this.geometry=Es,this.material=e,this.center=new dt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),hg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-ws.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ra(Ta.set(-.5,-.5,0),ws,o,bs,r,s),Ra(Ao.set(.5,-.5,0),ws,o,bs,r,s),Ra(Aa.set(.5,.5,0),ws,o,bs,r,s),kd.set(0,0),cf.set(1,0),Vd.set(1,1);let a=e.ray.intersectTriangle(Ta,Ao,Aa,!1,wo);if(a===null&&(Ra(Ao.set(-.5,.5,0),ws,o,bs,r,s),cf.set(0,1),a=e.ray.intersectTriangle(Ta,Aa,Ao,!1,wo),a===null))return;const c=e.ray.origin.distanceTo(wo);c<e.near||c>e.far||t.push({distance:c,point:wo.clone(),uv:ii.getInterpolation(wo,Ta,Ao,Aa,kd,cf,Vd,new dt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ra(n,e,t,i,r,s){Ts.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(To.x=s*Ts.x-r*Ts.y,To.y=r*Ts.x+s*Ts.y):To.copy(Ts),n.copy(e),n.x+=To.x,n.y+=To.y,n.applyMatrix4(hg)}const rr=new W,ff=new W,Ca=new W,br=new W,uf=new W,Pa=new W,hf=new W;class dg{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ff.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),br.copy(this.origin).sub(ff);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ca),a=br.dot(this.direction),c=-br.dot(Ca),l=br.lengthSq(),h=Math.abs(1-o*o);let f,u,p,m;if(h>0)if(f=o*c-a,u=o*a-c,m=s*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ff).addScaledVector(Ca,u),p}intersectSphere(e,t){rr.subVectors(e.center,this.origin);const i=rr.dot(this.direction),r=rr.dot(rr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,i,r,s){uf.subVectors(t,e),Pa.subVectors(i,e),hf.crossVectors(uf,Pa);let o=this.direction.dot(hf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;br.subVectors(this.origin,e);const c=a*this.direction.dot(Pa.crossVectors(br,Pa));if(c<0)return null;const l=a*this.direction.dot(uf.cross(br));if(l<0||c+l>o)return null;const h=-a*br.dot(hf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hi extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=G0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hd=new qt,kr=new dg,Ia=new co,Gd=new W,Da=new W,La=new W,Na=new W,df=new W,Oa=new W,Wd=new W,Ua=new W;class wt extends fn{constructor(e=new dn,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Oa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(df.fromBufferAttribute(f,e),o?Oa.addScaledVector(df,h):Oa.addScaledVector(df.sub(t),h))}t.add(Oa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),kr.copy(e.ray).recast(e.near),!(Ia.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Ia,Gd)===null||kr.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Hd.copy(s).invert(),kr.copy(e.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const _=u[m],x=o[_.materialIndex],T=Math.max(_.start,p.start),C=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let M=T,I=C;M<I;M+=3){const R=a.getX(M),F=a.getX(M+1),S=a.getX(M+2);r=Fa(this,x,e,i,l,h,f,R,F,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=m,x=v;_<x;_+=3){const T=a.getX(_),C=a.getX(_+1),M=a.getX(_+2);r=Fa(this,o,e,i,l,h,f,T,C,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const _=u[m],x=o[_.materialIndex],T=Math.max(_.start,p.start),C=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let M=T,I=C;M<I;M+=3){const R=M,F=M+1,S=M+2;r=Fa(this,x,e,i,l,h,f,R,F,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let _=m,x=v;_<x;_+=3){const T=_,C=_+1,M=_+2;r=Fa(this,o,e,i,l,h,f,T,C,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Hv(n,e,t,i,r,s,o,a){let c;if(e.side===Hn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Lr,a),c===null)return null;Ua.copy(a),Ua.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ua);return l<t.near||l>t.far?null:{distance:l,point:Ua.clone(),object:n}}function Fa(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Da),n.getVertexPosition(c,La),n.getVertexPosition(l,Na);const h=Hv(n,e,t,i,Da,La,Na,Wd);if(h){const f=new W;ii.getBarycoord(Wd,Da,La,Na,f),r&&(h.uv=ii.getInterpolatedAttribute(r,a,c,l,f,new dt)),s&&(h.uv1=ii.getInterpolatedAttribute(s,a,c,l,f,new dt)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,c,l,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new W,materialIndex:0};ii.getNormal(Da,La,Na,u.normal),h.face=u,h.barycoord=f}return h}class pg extends Rn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Mn,h=Mn,f,u){super(null,o,a,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new W,Gv=new W,Wv=new ut;class Xr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=pf.subVectors(i,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(pf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wv.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new co,$v=new dt(.5,.5),Ba=new W;class Wh{constructor(e=new Xr,t=new Xr,i=new Xr,r=new Xr,s=new Xr,o=new Xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],m=s[8],v=s[9],_=s[10],x=s[11],T=s[12],C=s[13],M=s[14],I=s[15];if(r[0].setComponents(l-o,p-h,x-m,I-T).normalize(),r[1].setComponents(l+o,p+h,x+m,I+T).normalize(),r[2].setComponents(l+a,p+f,x+v,I+C).normalize(),r[3].setComponents(l-a,p-f,x-v,I-C).normalize(),i)r[4].setComponents(c,u,_,M).normalize(),r[5].setComponents(l-c,p-u,x-_,I-M).normalize();else if(r[4].setComponents(l-c,p-u,x-_,I-M).normalize(),t===Gi)r[5].setComponents(l+c,p+u,x+_,I+M).normalize();else if(t===Jo)r[5].setComponents(c,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);const t=$v.distanceTo(e.center);return Vr.radius=.7071067811865476+t,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ba.x=r.normal.x>0?e.max.x:e.min.x,Ba.y=r.normal.y>0?e.max.y:e.min.y,Ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mg extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new W,kl=new W,$d=new qt,Ro=new dg,za=new co,mf=new W,Xd=new W;class Xv extends fn{constructor(e=new dn,t=new mg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)zl.fromBufferAttribute(t,r-1),kl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=zl.distanceTo(kl);e.setAttribute("lineDistance",new Vt(i,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,e.ray.intersectsSphere(za)===!1)return;$d.copy(r).invert(),Ro.copy(e.ray).applyMatrix4($d);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=l){const x=h.getX(v),T=h.getX(v+1),C=ka(this,e,Ro,c,x,T,v);C&&t.push(C)}if(this.isLineLoop){const v=h.getX(m-1),_=h.getX(p),x=ka(this,e,Ro,c,v,_,m-1);x&&t.push(x)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=l){const x=ka(this,e,Ro,c,v,v+1,v);x&&t.push(x)}if(this.isLineLoop){const v=ka(this,e,Ro,c,m-1,p,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ka(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(zl.fromBufferAttribute(a,r),kl.fromBufferAttribute(a,s),t.distanceSqToSegment(zl,kl,mf,Xd)>i)return;mf.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(mf);if(!(l<e.near||l>e.far))return{distance:l,point:Xd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const qd=new W,Yd=new W;class qv extends Xv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)qd.fromBufferAttribute(t,r),Yd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new Vt(i,1))}else ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gg extends Rn{constructor(e=[],t=rs,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ks extends Rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Rn{constructor(e,t,i=ji,r,s,o,a=Mn,c=Mn,l,h=pr,f=1){if(h!==pr&&h!==Qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yv extends Js{constructor(e,t=ji,i=rs,r,s,o=Mn,a=Mn,c,l=pr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _g extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ci extends dn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(f,2));function m(v,_,x,T,C,M,I,R,F,S,A){const k=M/F,B=I/S,z=M/2,P=I/2,O=R/2,E=F+1,L=S+1;let U=0,G=0;const K=new W;for(let te=0;te<L;te++){const fe=te*B-P;for(let j=0;j<E;j++){const ye=j*k-z;K[v]=ye*T,K[_]=fe*C,K[x]=O,l.push(K.x,K.y,K.z),K[v]=0,K[_]=0,K[x]=R>0?1:-1,h.push(K.x,K.y,K.z),f.push(j/F),f.push(1-te/S),U+=1}}for(let te=0;te<S;te++)for(let fe=0;fe<F;fe++){const j=u+fe+E*te,ye=u+fe+E*(te+1),pe=u+(fe+1)+E*(te+1),qe=u+(fe+1)+E*te;c.push(j,ye,qe),c.push(ye,pe,qe),G+=6}a.addGroup(p,G,A),p+=G,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vl extends dn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,m=i*2+s,v=r+1,_=new W,x=new W;for(let T=0;T<=m;T++){let C=0,M=0,I=0,R=0;if(T<=i){const A=T/i,k=A*Math.PI/2;M=-h-e*Math.cos(k),I=e*Math.sin(k),R=-e*Math.cos(k),C=A*f}else if(T<=i+s){const A=(T-i)/s;M=-h+A*t,I=e,R=0,C=f+A*u}else{const A=(T-i-s)/i,k=A*Math.PI/2;M=h+e*Math.sin(k),I=e*Math.cos(k),R=e*Math.sin(k),C=f+u+A*f}const F=Math.max(0,Math.min(1,C/p));let S=0;T===0?S=.5/r:T===m&&(S=-.5/r);for(let A=0;A<=r;A++){const k=A/r,B=k*Math.PI*2,z=Math.sin(B),P=Math.cos(B);x.x=-I*P,x.y=M,x.z=I*z,a.push(x.x,x.y,x.z),_.set(-I*P,R,I*z),_.normalize(),c.push(_.x,_.y,_.z),l.push(k+S,F)}if(T>0){const A=(T-1)*v;for(let k=0;k<r;k++){const B=A+k,z=A+k+1,P=T*v+k,O=T*v+k+1;o.push(B,z,P),o.push(z,O,P)}}}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $h extends dn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new W,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ac extends dn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let m=0;const v=[],_=i/2;let x=0;T(),o===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(p,2));function T(){const M=new W,I=new W;let R=0;const F=(t-e)/i;for(let S=0;S<=s;S++){const A=[],k=S/s,B=k*(t-e)+e;for(let z=0;z<=r;z++){const P=z/r,O=P*c+a,E=Math.sin(O),L=Math.cos(O);I.x=B*E,I.y=-k*i+_,I.z=B*L,f.push(I.x,I.y,I.z),M.set(E,F,L).normalize(),u.push(M.x,M.y,M.z),p.push(P,1-k),A.push(m++)}v.push(A)}for(let S=0;S<r;S++)for(let A=0;A<s;A++){const k=v[A][S],B=v[A+1][S],z=v[A+1][S+1],P=v[A][S+1];(e>0||A!==0)&&(h.push(k,B,P),R+=3),(t>0||A!==s-1)&&(h.push(B,z,P),R+=3)}l.addGroup(x,R,0),x+=R}function C(M){const I=m,R=new dt,F=new W;let S=0;const A=M===!0?e:t,k=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,_*k,0),u.push(0,k,0),p.push(.5,.5),m++;const B=m;for(let z=0;z<=r;z++){const O=z/r*c+a,E=Math.cos(O),L=Math.sin(O);F.x=A*L,F.y=_*k,F.z=A*E,f.push(F.x,F.y,F.z),u.push(0,k,0),R.x=E*.5+.5,R.y=L*.5*k+.5,p.push(R.x,R.y),m++}for(let z=0;z<r;z++){const P=I+z,O=B+z;M===!0?h.push(O,O+1,P):h.push(O+1,O,P),S+=3}l.addGroup(x,S,M===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qs extends Ac{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Va=new W,Ha=new W,gf=new W,Ga=new ii;class Kv extends dn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos($s*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),u={},p=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:v,b:_,c:x}=Ga;if(v.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),Ga.getNormal(gf),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const C=(T+1)%3,M=f[T],I=f[C],R=Ga[h[T]],F=Ga[h[C]],S=`${M}_${I}`,A=`${I}_${M}`;A in u&&u[A]?(gf.dot(u[A].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(F.x,F.y,F.z)),u[A]=null):S in u||(u[S]={index0:l[T],index1:l[C],normal:gf.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:_}=u[m];Va.fromBufferAttribute(a,v),Ha.fromBufferAttribute(a,_),p.push(Va.x,Va.y,Va.z),p.push(Ha.x,Ha.y,Ha.z)}this.setAttribute("position",new Vt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rc extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=e/a,u=t/c,p=[],m=[],v=[],_=[];for(let x=0;x<h;x++){const T=x*u-o;for(let C=0;C<l;C++){const M=C*f-s;m.push(M,-T,0),v.push(0,0,1),_.push(C/a),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let T=0;T<a;T++){const C=T+l*x,M=T+l*(x+1),I=T+1+l*(x+1),R=T+1+l*x;p.push(C,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class qi extends dn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new W,u=new W,p=[],m=[],v=[],_=[];for(let x=0;x<=i;x++){const T=[],C=x/i,M=o+C*a,I=e*Math.cos(M),R=Math.sqrt(e*e-I*I);let F=0;x===0&&o===0?F=.5/t:x===i&&c===Math.PI&&(F=-.5/t);for(let S=0;S<=t;S++){const A=S/t,k=r+A*s;f.x=-R*Math.cos(k),f.y=I,f.z=R*Math.sin(k),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),_.push(A+F,1-C),T.push(l++)}h.push(T)}for(let x=0;x<i;x++)for(let T=0;T<t;T++){const C=h[x][T+1],M=h[x][T],I=h[x+1][T],R=h[x+1][T+1];(x!==0||o>0)&&p.push(C,M,R),(x!==i-1||c<Math.PI)&&p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(v,3)),this.setAttribute("uv",new Vt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zv extends dn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new W,s=new W;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,p=f.count;for(let m=u,v=u+p;m<v;m+=3)for(let _=0;_<3;_++){const x=a.getX(m+_),T=a.getX(m+(_+1)%3);r.fromBufferAttribute(o,x),s.fromBufferAttribute(o,T),Kd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),Kd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Vt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Kd(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Zd(r))r.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Zd(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const r in i)e[r]=i[r]}return e}function Zd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Xh={clone:Qs,merge:Fn};var Jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(r.value);break;case"v2":this.uniforms[i].value=new dt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new kt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ey extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class eo extends Ur{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new St(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class ty extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ny extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qh extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class iy extends qh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _f=new qt,jd=new W,Jd=new W;class ry{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(jd),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),_f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Jo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wa=new W,$a=new lo,Oi=new W;class vg extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,$a,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,$a,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Wa,$a,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,$a,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new W,Qd=new dt,ep=new dt;class di extends vg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,Qd,ep),t.subVectors(ep,Qd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Yh extends vg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sy extends ry{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oy extends qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new sy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ay extends qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ly extends dn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const As=-90,Rs=1;class cy extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new di(As,Rs,e,t);r.layers=this.layers,this.add(r);const s=new di(As,Rs,e,t);s.layers=this.layers,this.add(s);const o=new di(As,Rs,e,t);o.layers=this.layers,this.add(o);const a=new di(As,Rs,e,t);a.layers=this.layers,this.add(a);const c=new di(As,Rs,e,t);c.layers=this.layers,this.add(c);const l=new di(As,Rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class fy extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=hy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function hy(){this._document.hidden===!1&&this.reset()}class Hu extends ug{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const yd=class yd{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};yd.prototype.isMatrix2=!0;let tp=yd;const np=new W,Xa=new W,Cs=new W,Ps=new W,xf=new W,dy=new W,py=new W;class my{constructor(e=new W,t=new W){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){np.subVectors(e,this.start),Xa.subVectors(this.end,this.start);const i=Xa.dot(Xa);if(i===0)return 0;let s=Xa.dot(np)/i;return t&&(s=mt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=dy,i=py){const r=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;Cs.subVectors(l,a),Ps.subVectors(h,c),xf.subVectors(a,c);const f=Cs.dot(Cs),u=Ps.dot(Ps),p=Ps.dot(xf);if(f<=r&&u<=r)return t.copy(a),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,o=p/u,o=mt(o,0,1);else{const m=Cs.dot(xf);if(u<=r)o=0,s=mt(-m/f,0,1);else{const v=Cs.dot(Ps),_=f*u-v*v;_!==0?s=mt((v*p-m*u)/_,0,1):s=0,o=(v*s+p)/u,o<0?(o=0,s=mt(-m/f,0,1)):o>1&&(o=1,s=mt((v-m)/f,0,1))}}return t.copy(a).addScaledVector(Cs,s),i.copy(c).addScaledVector(Ps,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ip(n,e,t,i){const r=gy(i);switch(t){case ng:return n*e;case Uh:return n*e/r.components*r.byteLength;case Fh:return n*e/r.components*r.byteLength;case ss:return n*e*2/r.components*r.byteLength;case Bh:return n*e*2/r.components*r.byteLength;case ig:return n*e*3/r.components*r.byteLength;case Ri:return n*e*4/r.components*r.byteLength;case zh:return n*e*4/r.components*r.byteLength;case xl:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uu:case du:return Math.max(n,16)*Math.max(e,8)/4;case fu:case hu:return Math.max(n,8)*Math.max(e,8)/2;case pu:case mu:case _u:case xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gu:case Ll:case vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Au:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Du:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Nu:case Ou:case Uu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fu:case Bu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nl:case zu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gy(n){switch(n){case ni:case J0:return{byteLength:1,components:1};case Zo:case Q0:case dr:return{byteLength:2,components:1};case Nh:case Oh:return{byteLength:2,components:4};case ji:case Lh:case Hi:return{byteLength:4,components:1};case eg:case tg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _y(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,by=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ty=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_S=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,SS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,US=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$S=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_M=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:yy,alphamap_pars_fragment:Sy,alphatest_fragment:My,alphatest_pars_fragment:Ey,aomap_fragment:by,aomap_pars_fragment:wy,batching_pars_vertex:Ty,batching_vertex:Ay,begin_vertex:Ry,beginnormal_vertex:Cy,bsdfs:Py,iridescence_fragment:Iy,bumpmap_pars_fragment:Dy,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Ny,clipping_planes_pars_vertex:Oy,clipping_planes_vertex:Uy,color_fragment:Fy,color_pars_fragment:By,color_pars_vertex:zy,color_vertex:ky,common:Vy,cube_uv_reflection_fragment:Hy,defaultnormal_vertex:Gy,displacementmap_pars_vertex:Wy,displacementmap_vertex:$y,emissivemap_fragment:Xy,emissivemap_pars_fragment:qy,colorspace_fragment:Yy,colorspace_pars_fragment:Ky,envmap_fragment:Zy,envmap_common_pars_fragment:jy,envmap_pars_fragment:Jy,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:fS,envmap_vertex:eS,fog_vertex:tS,fog_pars_vertex:nS,fog_fragment:iS,fog_pars_fragment:rS,gradientmap_pars_fragment:sS,lightmap_pars_fragment:oS,lights_lambert_fragment:aS,lights_lambert_pars_fragment:lS,lights_pars_begin:cS,lights_toon_fragment:uS,lights_toon_pars_fragment:hS,lights_phong_fragment:dS,lights_phong_pars_fragment:pS,lights_physical_fragment:mS,lights_physical_pars_fragment:gS,lights_fragment_begin:_S,lights_fragment_maps:xS,lights_fragment_end:vS,lightprobes_pars_fragment:yS,logdepthbuf_fragment:SS,logdepthbuf_pars_fragment:MS,logdepthbuf_pars_vertex:ES,logdepthbuf_vertex:bS,map_fragment:wS,map_pars_fragment:TS,map_particle_fragment:AS,map_particle_pars_fragment:RS,metalnessmap_fragment:CS,metalnessmap_pars_fragment:PS,morphinstance_vertex:IS,morphcolor_vertex:DS,morphnormal_vertex:LS,morphtarget_pars_vertex:NS,morphtarget_vertex:OS,normal_fragment_begin:US,normal_fragment_maps:FS,normal_pars_fragment:BS,normal_pars_vertex:zS,normal_vertex:kS,normalmap_pars_fragment:VS,clearcoat_normal_fragment_begin:HS,clearcoat_normal_fragment_maps:GS,clearcoat_pars_fragment:WS,iridescence_pars_fragment:$S,opaque_fragment:XS,packing:qS,premultiplied_alpha_fragment:YS,project_vertex:KS,dithering_fragment:ZS,dithering_pars_fragment:jS,roughnessmap_fragment:JS,roughnessmap_pars_fragment:QS,shadowmap_pars_fragment:eM,shadowmap_pars_vertex:tM,shadowmap_vertex:nM,shadowmask_pars_fragment:iM,skinbase_vertex:rM,skinning_pars_vertex:sM,skinning_vertex:oM,skinnormal_vertex:aM,specularmap_fragment:lM,specularmap_pars_fragment:cM,tonemapping_fragment:fM,tonemapping_pars_fragment:uM,transmission_fragment:hM,transmission_pars_fragment:dM,uv_pars_fragment:pM,uv_pars_vertex:mM,uv_vertex:gM,worldpos_vertex:_M,background_vert:xM,background_frag:vM,backgroundCube_vert:yM,backgroundCube_frag:SM,cube_vert:MM,cube_frag:EM,depth_vert:bM,depth_frag:wM,distance_vert:TM,distance_frag:AM,equirect_vert:RM,equirect_frag:CM,linedashed_vert:PM,linedashed_frag:IM,meshbasic_vert:DM,meshbasic_frag:LM,meshlambert_vert:NM,meshlambert_frag:OM,meshmatcap_vert:UM,meshmatcap_frag:FM,meshnormal_vert:BM,meshnormal_frag:zM,meshphong_vert:kM,meshphong_frag:VM,meshphysical_vert:HM,meshphysical_frag:GM,meshtoon_vert:WM,meshtoon_frag:$M,points_vert:XM,points_frag:qM,shadow_vert:YM,shadow_frag:KM,sprite_vert:ZM,sprite_frag:jM},De={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Xn={basic:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Fn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Fn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Fn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new St(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Fn([De.points,De.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Fn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Fn([De.common,De.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Fn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Fn([De.sprite,De.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Fn([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Fn([De.lights,De.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Xn.physical={uniforms:Fn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const qa={r:0,b:0,g:0},JM=new qt,Sg=new ut;Sg.set(-1,0,0,0,1,0,0,0,1);function QM(n,e,t,i,r,s){const o=new St(0);let a=r===!0?0:1,c,l,h=null,f=0,u=null;function p(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const M=T.backgroundBlurriness>0;C=e.get(C,M)}return C}function m(T){let C=!1;const M=p(T);M===null?_(o,a):M&&M.isColor&&(_(M,1),C=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,C){const M=p(C);M&&(M.isCubeTexture||M.mapping===Tc)?(l===void 0&&(l=new wt(new Ci(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Qs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(C.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sg),l.material.toneMapped=Et.getTransfer(M.colorSpace)!==Bt,(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new wt(new Rc(2,2),new mi({name:"BackgroundMaterial",uniforms:Qs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Et.getTransfer(M.colorSpace)!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function _(T,C){T.getRGB(qa,xg(n)),t.buffers.color.setClear(qa.r,qa.g,qa.b,C,s)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,C=1){o.set(T),a=C,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,_(o,a)},render:m,addToRenderList:v,dispose:x}}function eE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(B,z,P,O,E){let L=!1;const U=f(B,O,P,z);s!==U&&(s=U,l(s.object)),L=p(B,O,P,E),L&&m(B,O,P,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,M(B,z,P,O),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function c(){return n.createVertexArray()}function l(B){return n.bindVertexArray(B)}function h(B){return n.deleteVertexArray(B)}function f(B,z,P,O){const E=O.wireframe===!0;let L=i[z.id];L===void 0&&(L={},i[z.id]=L);const U=B.isInstancedMesh===!0?B.id:0;let G=L[U];G===void 0&&(G={},L[U]=G);let K=G[P.id];K===void 0&&(K={},G[P.id]=K);let te=K[E];return te===void 0&&(te=u(c()),K[E]=te),te}function u(B){const z=[],P=[],O=[];for(let E=0;E<t;E++)z[E]=0,P[E]=0,O[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:P,attributeDivisors:O,object:B,attributes:{},index:null}}function p(B,z,P,O){const E=s.attributes,L=z.attributes;let U=0;const G=P.getAttributes();for(const K in G)if(G[K].location>=0){const fe=E[K];let j=L[K];if(j===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(j=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(j=B.instanceColor)),fe===void 0||fe.attribute!==j||j&&fe.data!==j.data)return!0;U++}return s.attributesNum!==U||s.index!==O}function m(B,z,P,O){const E={},L=z.attributes;let U=0;const G=P.getAttributes();for(const K in G)if(G[K].location>=0){let fe=L[K];fe===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor));const j={};j.attribute=fe,fe&&fe.data&&(j.data=fe.data),E[K]=j,U++}s.attributes=E,s.attributesNum=U,s.index=O}function v(){const B=s.newAttributes;for(let z=0,P=B.length;z<P;z++)B[z]=0}function _(B){x(B,0)}function x(B,z){const P=s.newAttributes,O=s.enabledAttributes,E=s.attributeDivisors;P[B]=1,O[B]===0&&(n.enableVertexAttribArray(B),O[B]=1),E[B]!==z&&(n.vertexAttribDivisor(B,z),E[B]=z)}function T(){const B=s.newAttributes,z=s.enabledAttributes;for(let P=0,O=z.length;P<O;P++)z[P]!==B[P]&&(n.disableVertexAttribArray(P),z[P]=0)}function C(B,z,P,O,E,L,U){U===!0?n.vertexAttribIPointer(B,z,P,E,L):n.vertexAttribPointer(B,z,P,O,E,L)}function M(B,z,P,O){v();const E=O.attributes,L=P.getAttributes(),U=z.defaultAttributeValues;for(const G in L){const K=L[G];if(K.location>=0){let te=E[G];if(te===void 0&&(G==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),G==="instanceColor"&&B.instanceColor&&(te=B.instanceColor)),te!==void 0){const fe=te.normalized,j=te.itemSize,ye=e.get(te);if(ye===void 0)continue;const pe=ye.buffer,qe=ye.type,le=ye.bytesPerElement,Ee=qe===n.INT||qe===n.UNSIGNED_INT||te.gpuType===Lh;if(te.isInterleavedBufferAttribute){const ve=te.data,je=ve.stride,Ye=te.offset;if(ve.isInstancedInterleavedBuffer){for(let it=0;it<K.locationSize;it++)x(K.location+it,ve.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let it=0;it<K.locationSize;it++)_(K.location+it);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let it=0;it<K.locationSize;it++)C(K.location+it,j/K.locationSize,qe,fe,je*le,(Ye+j/K.locationSize*it)*le,Ee)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<K.locationSize;ve++)x(K.location+ve,te.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<K.locationSize;ve++)_(K.location+ve);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ve=0;ve<K.locationSize;ve++)C(K.location+ve,j/K.locationSize,qe,fe,j*le,j/K.locationSize*ve*le,Ee)}}else if(U!==void 0){const fe=U[G];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(K.location,fe);break;case 3:n.vertexAttrib3fv(K.location,fe);break;case 4:n.vertexAttrib4fv(K.location,fe);break;default:n.vertexAttrib1fv(K.location,fe)}}}}T()}function I(){A();for(const B in i){const z=i[B];for(const P in z){const O=z[P];for(const E in O){const L=O[E];for(const U in L)h(L[U].object),delete L[U];delete O[E]}}delete i[B]}}function R(B){if(i[B.id]===void 0)return;const z=i[B.id];for(const P in z){const O=z[P];for(const E in O){const L=O[E];for(const U in L)h(L[U].object),delete L[U];delete O[E]}}delete i[B.id]}function F(B){for(const z in i){const P=i[z];for(const O in P){const E=P[O];if(E[B.id]===void 0)continue;const L=E[B.id];for(const U in L)h(L[U].object),delete L[U];delete E[B.id]}}}function S(B){for(const z in i){const P=i[z],O=B.isInstancedMesh===!0?B.id:0,E=P[O];if(E!==void 0){for(const L in E){const U=E[L];for(const G in U)h(U[G].object),delete U[G];delete E[L]}delete P[O],Object.keys(P).length===0&&delete i[z]}}}function A(){k(),o=!0,s!==r&&(s=r,l(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:_,disableUnusedAttributes:T}}function tE(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(F){return!(F!==Ri&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const S=F===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ni&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!S)}function c(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(ot("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:M,maxSamples:I,samples:R}}function iE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xr,a=new ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,x=n.get(f);if(!r||m===null||m.length===0||s&&!_)s?h(null):l();else{const T=s?0:i,C=T*4;let M=x.clippingState||null;c.value=M,M=h(m,u,C,p);for(let I=0;I!==C;++I)M[I]=t[I];x.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,m){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=c.value,m!==!0||_===null){const x=p+v*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(_===null||_.length<x)&&(_=new Float32Array(x));for(let C=0,M=p;C!==v;++C,M+=4)o.copy(f[C]).applyMatrix4(T,a),o.normal.toArray(_,M),_[M+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Cr=4,rp=[.125,.215,.35,.446,.526,.582],Zr=20,rE=256,Co=new Yh,sp=new St;let vf=null,yf=0,Sf=0,Mf=!1;const sE=new W;class op{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=sE}=s;vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,yf,Sf),this._renderer.xr.enabled=Mf,e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:dr,format:Ri,colorSpace:Ol,depthBuffer:!1},r=ap(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oE(s)),this._blurMaterial=lE(s,e,t),this._ggxMaterial=aE(s,e,t)}return r}_compileMaterial(e){const t=new wt(new dn,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,i,r,s){const c=new di(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(sp),f.toneMapping=$i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new Ci,new hi({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let x=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,x=!0):(_.color.copy(sp),x=!0);for(let C=0;C<6;C++){const M=C%3;M===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):M===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const I=this._cubeSize;Is(r,M*I,C>2?I:0,I,I),f.setRenderTarget(r),x&&f.render(v,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Is(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,p=f*u,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-Cr?i-m+Cr:0),x=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,Is(s,_,x,3*v,2*v),r.setRenderTarget(s),r.render(a,Co),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,Is(e,_,x,3*v,2*v),r.setRenderTarget(e),r.render(a,Co)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),v=s/m,_=isFinite(s)?1+Math.floor(h*v):Zr;_>Zr&&ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Zr}`);const x=[];let T=0;for(let F=0;F<Zr;++F){const S=F/v,A=Math.exp(-S*S/2);x.push(A),F===0?T+=A:F<_&&(T+=2*A)}for(let F=0;F<x.length;F++)x[F]=x[F]/T;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=x,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:C}=this;u.dTheta.value=m,u.mipInt.value=C-i;const M=this._sizeLods[r],I=3*M*(r>C-Cr?r-C+Cr:0),R=4*(this._cubeSize-M);Is(t,I,R,3*M,2*M),c.setRenderTarget(t),c.render(f,Co)}}function oE(n){const e=[],t=[],i=[];let r=n;const s=n-Cr+1+rp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Cr?c=rp[o-n+Cr-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,m=6,v=3,_=2,x=1,T=new Float32Array(v*m*p),C=new Float32Array(_*m*p),M=new Float32Array(x*m*p);for(let R=0;R<p;R++){const F=R%3*2/3-1,S=R>2?0:-1,A=[F,S,0,F+2/3,S,0,F+2/3,S+1,0,F,S,0,F+2/3,S+1,0,F,S+1,0];T.set(A,v*m*R),C.set(u,_*m*R);const k=[R,R,R,R,R,R];M.set(k,x*m*R)}const I=new dn;I.setAttribute("position",new Ii(T,v)),I.setAttribute("uv",new Ii(C,_)),I.setAttribute("faceIndex",new Ii(M,x)),i.push(new wt(I,null)),r>Cr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ap(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aE(n,e,t){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function lE(n,e,t){const i=new Float32Array(Zr),r=new W(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function lp(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function cp(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mg extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ci(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:ar});s.uniforms.tEquirect.value=t;const o=new wt(r,s),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=An),new cy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function cE(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Hc||p===Gc)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new Mg(m.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===Hc||p===Gc,v=p===rs||p===js;if(m||v){let _=t.get(u);const x=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new op(n)),_=m?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const T=u.image;return m&&T&&T.height>0||v&&T&&c(T)?(i===null&&(i=new op(n)),_=m?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function a(u,p){return p===Hc?u.mapping=rs:p===Gc&&(u.mapping=js),u}function c(u){let p=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&p++;return p===m}function l(u){const p=u.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function fE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ws("WebGLRenderer: "+i+" extension not supported."),r}}}function uE(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(p!==null){const T=p.array;v=p.version;for(let C=0,M=T.length;C<M;C+=3){const I=T[C+0],R=T[C+1],F=T[C+2];u.push(I,R,R,F,F,I)}}else{const T=m.array;v=m.version;for(let C=0,M=T.length/3-1;C<M;C+=3){const I=C+0,R=C+1,F=C+2;u.push(I,R,R,F,F,I)}}const _=new(m.count>=65535?fg:cg)(u,1);_.version=v;const x=s.get(f);x&&e.remove(x),s.set(f,_)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function hE(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*o,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let v=0;for(let _=0;_<p;_++)v+=u[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function dE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Tt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pE(n,e,t){const i=new WeakMap,r=new kt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let k=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",k)};var p=k;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),v===!0&&(M=2),_===!0&&(M=3);let I=a.attributes.position.count*M,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*R*4*f),S=new og(F,I,R,f);S.type=Hi,S.needsUpdate=!0;const A=M*4;for(let B=0;B<f;B++){const z=x[B],P=T[B],O=C[B],E=I*R*4*B;for(let L=0;L<z.count;L++){const U=L*A;m===!0&&(r.fromBufferAttribute(z,L),F[E+U+0]=r.x,F[E+U+1]=r.y,F[E+U+2]=r.z,F[E+U+3]=0),v===!0&&(r.fromBufferAttribute(P,L),F[E+U+4]=r.x,F[E+U+5]=r.y,F[E+U+6]=r.z,F[E+U+7]=0),_===!0&&(r.fromBufferAttribute(O,L),F[E+U+8]=r.x,F[E+U+9]=r.y,F[E+U+10]=r.z,F[E+U+11]=O.itemSize===4?r.w:1)}}u={count:f,texture:S,size:new dt(I,R)},i.set(a,u),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function mE(n,e,t,i,r){let s=new WeakMap;function o(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const gE={[W0]:"LINEAR_TONE_MAPPING",[$0]:"REINHARD_TONE_MAPPING",[X0]:"CINEON_TONE_MAPPING",[q0]:"ACES_FILMIC_TONE_MAPPING",[K0]:"AGX_TONE_MAPPING",[Z0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function _E(n,e,t,i,r,s){const o=new Xi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Js(e,t):void 0}),a=new Xi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),c=new dn;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const l=new ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new wt(c,l),f=new Yh(-1,1,1,-1,0,1);let u=null,p=null,m=!1,v,_=null,x=[],T=!1;this.setSize=function(C,M){o.setSize(C,M),a.setSize(C,M);for(let I=0;I<x.length;I++){const R=x[I];R.setSize&&R.setSize(C,M)}},this.setEffects=function(C){x=C,T=x.length>0&&x[0].isRenderPass===!0;const M=o.width,I=o.height;for(let R=0;R<x.length;R++){const F=x[R];F.setSize&&F.setSize(M,I)}},this.begin=function(C,M){if(m||C.toneMapping===$i&&x.length===0)return!1;if(_=M,M!==null){const I=M.width,R=M.height;(o.width!==I||o.height!==R)&&this.setSize(I,R)}return T===!1&&C.setRenderTarget(o),v=C.toneMapping,C.toneMapping=$i,!0},this.hasRenderPass=function(){return T},this.end=function(C,M){C.toneMapping=v,m=!0;let I=o,R=a;for(let F=0;F<x.length;F++){const S=x[F];if(S.enabled!==!1&&(S.render(C,R,I,M),S.needsSwap!==!1)){const A=I;I=R,R=A}}if(u!==C.outputColorSpace||p!==C.toneMapping){u=C.outputColorSpace,p=C.toneMapping,l.defines={},Et.getTransfer(u)===Bt&&(l.defines.SRGB_TRANSFER="");const F=gE[p];F&&(l.defines[F]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(_),C.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Eg=new Rn,Gu=new Js(1,1),bg=new og,wg=new Cv,Tg=new gg,fp=[],up=[],hp=new Float32Array(16),dp=new Float32Array(9),pp=new Float32Array(4);function fo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=fp[r];if(s===void 0&&(s=new Float32Array(r),fp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function hn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pc(n,e){let t=up[e];t===void 0&&(t=new Int32Array(e),up[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),hn(t,e)}}function yE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),hn(t,e)}}function SE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),hn(t,e)}}function ME(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;pp.set(i),n.uniformMatrix2fv(this.addr,!1,pp),hn(t,i)}}function EE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;dp.set(i),n.uniformMatrix3fv(this.addr,!1,dp),hn(t,i)}}function bE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(un(t,i))return;hp.set(i),n.uniformMatrix4fv(this.addr,!1,hp),hn(t,i)}}function wE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),hn(t,e)}}function AE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),hn(t,e)}}function RE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),hn(t,e)}}function CE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function PE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),hn(t,e)}}function IE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),hn(t,e)}}function DE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),hn(t,e)}}function LE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gu.compareFunction=t.isReversedDepthBuffer()?Vh:kh,s=Gu):s=Eg,t.setTexture2D(e||s,r)}function NE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wg,r)}function OE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tg,r)}function UE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bg,r)}function FE(n){switch(n){case 5126:return xE;case 35664:return vE;case 35665:return yE;case 35666:return SE;case 35674:return ME;case 35675:return EE;case 35676:return bE;case 5124:case 35670:return wE;case 35667:case 35671:return TE;case 35668:case 35672:return AE;case 35669:case 35673:return RE;case 5125:return CE;case 36294:return PE;case 36295:return IE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return UE}}function BE(n,e){n.uniform1fv(this.addr,e)}function zE(n,e){const t=fo(e,this.size,2);n.uniform2fv(this.addr,t)}function kE(n,e){const t=fo(e,this.size,3);n.uniform3fv(this.addr,t)}function VE(n,e){const t=fo(e,this.size,4);n.uniform4fv(this.addr,t)}function HE(n,e){const t=fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GE(n,e){const t=fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function WE(n,e){const t=fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $E(n,e){n.uniform1iv(this.addr,e)}function XE(n,e){n.uniform2iv(this.addr,e)}function qE(n,e){n.uniform3iv(this.addr,e)}function YE(n,e){n.uniform4iv(this.addr,e)}function KE(n,e){n.uniform1uiv(this.addr,e)}function ZE(n,e){n.uniform2uiv(this.addr,e)}function jE(n,e){n.uniform3uiv(this.addr,e)}function JE(n,e){n.uniform4uiv(this.addr,e)}function QE(n,e,t){const i=this.cache,r=e.length,s=Pc(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Gu:o=Eg;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function eb(n,e,t){const i=this.cache,r=e.length,s=Pc(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wg,s[o])}function tb(n,e,t){const i=this.cache,r=e.length,s=Pc(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tg,s[o])}function nb(n,e,t){const i=this.cache,r=e.length,s=Pc(t,r);un(i,s)||(n.uniform1iv(this.addr,s),hn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bg,s[o])}function ib(n){switch(n){case 5126:return BE;case 35664:return zE;case 35665:return kE;case 35666:return VE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return $E;case 35667:case 35671:return XE;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return KE;case 36294:return ZE;case 36295:return jE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}class rb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FE(t.type)}}class sb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ib(t.type)}}class ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ef=/(\w+)(\])?(\[|\.)?/g;function mp(n,e){n.seq.push(e),n.map[e.id]=e}function ab(n,e,t){const i=n.name,r=i.length;for(Ef.lastIndex=0;;){const s=Ef.exec(i),o=Ef.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){mp(t,l===void 0?new rb(a,n,e):new sb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ob(a),mp(t,f)),t=f}}}class Ml{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);ab(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function gp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lb=37297;let cb=0;function fb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const _p=new ut;function ub(n){Et._getMatrix(_p,Et.workingColorSpace,n);const e=`mat3( ${_p.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(n)){case Ul:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fb(n.getShaderSource(e),a)}else return s}function hb(n,e){const t=ub(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const db={[W0]:"Linear",[$0]:"Reinhard",[X0]:"Cineon",[q0]:"ACESFilmic",[K0]:"AgX",[Z0]:"Neutral",[Y0]:"Custom"};function pb(n,e){const t=db[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ya=new W;function mb(){Et.getLuminanceCoefficients(Ya);const n=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function _b(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vo(n){return n!==""}function vp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(n){return n.replace(vb,Sb)}const yb=new Map;function Sb(n,e){let t=vt[e];if(t===void 0){const i=yb.get(e);if(i!==void 0)t=vt[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wu(t)}const Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(n){return n.replace(Mb,Eb)}function Eb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bb={[_l]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function wb(n){return bb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tb={[rs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Tc]:"ENVMAP_TYPE_CUBE_UV"};function Ab(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Tb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rb={[js]:"ENVMAP_MODE_REFRACTION"};function Cb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pb={[G0]:"ENVMAP_BLENDING_MULTIPLY",[qx]:"ENVMAP_BLENDING_MIX",[Yx]:"ENVMAP_BLENDING_ADD"};function Ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[n.combine]||"ENVMAP_BLENDING_NONE"}function Db(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wb(t),l=Ab(t),h=Cb(t),f=Ib(t),u=Db(t),p=gb(t),m=_b(s),v=r.createProgram();let _,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(_=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?vt.tonemapping_pars_fragment:"",t.toneMapping!==$i?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,hb("linearToOutputTexel",t.outputColorSpace),mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),o=Wu(o),o=vp(o,t),o=yp(o,t),a=Wu(a),a=vp(a,t),a=yp(a,t),o=Sp(o),a=Sp(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=T+_+o,M=T+x+a,I=gp(r,r.VERTEX_SHADER,C),R=gp(r,r.FRAGMENT_SHADER,M);r.attachShader(v,I),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function F(B){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(I)||"",O=r.getShaderInfoLog(R)||"",E=z.trim(),L=P.trim(),U=O.trim();let G=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,R);else{const te=xp(r,I,"vertex"),fe=xp(r,R,"fragment");Tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+E+`
`+te+`
`+fe)}else E!==""?ot("WebGLProgram: Program Info Log:",E):(L===""||U==="")&&(K=!1);K&&(B.diagnostics={runnable:G,programLog:E,vertexShader:{log:L,prefix:_},fragmentShader:{log:U,prefix:x}})}r.deleteShader(I),r.deleteShader(R),S=new Ml(r,v),A=xb(r,v)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(v,lb)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let Nb=0;class Ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ub(e),t.set(e,i)),i}}class Ub{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}}function Fb(n){return n===ss||n===Ll||n===Nl}function Bb(n,e,t,i,r,s){const o=new ag,a=new Ob,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function v(S,A,k,B,z,P){const O=B.fog,E=z.geometry,L=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=e.get(S.envMap||L,U),K=G&&G.mapping===Tc?G.image.height:null,te=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&ot("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const fe=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,j=fe!==void 0?fe.length:0;let ye=0;E.morphAttributes.position!==void 0&&(ye=1),E.morphAttributes.normal!==void 0&&(ye=2),E.morphAttributes.color!==void 0&&(ye=3);let pe,qe,le,Ee;if(te){const He=Xn[te];pe=He.vertexShader,qe=He.fragmentShader}else{pe=S.vertexShader,qe=S.fragmentShader;const He=a.getVertexShaderStage(S),Yt=a.getFragmentShaderStage(S);a.update(S,He,Yt),le=He.id,Ee=Yt.id}const ve=n.getRenderTarget(),je=n.state.buffers.depth.getReversed(),Ye=z.isInstancedMesh===!0,it=z.isBatchedMesh===!0,Ht=!!S.map,gt=!!S.matcap,It=!!G,Le=!!S.aoMap,rt=!!S.lightMap,nt=!!S.bumpMap&&S.wireframe===!1,et=!!S.normalMap,_t=!!S.displacementMap,pt=!!S.emissiveMap,ft=!!S.metalnessMap,Dt=!!S.roughnessMap,q=S.anisotropy>0,sn=S.clearcoat>0,Pt=S.dispersion>0,V=S.iridescence>0,b=S.sheen>0,Q=S.transmission>0,oe=q&&!!S.anisotropyMap,he=sn&&!!S.clearcoatMap,Ae=sn&&!!S.clearcoatNormalMap,be=sn&&!!S.clearcoatRoughnessMap,de=V&&!!S.iridescenceMap,_e=V&&!!S.iridescenceThicknessMap,we=b&&!!S.sheenColorMap,Ke=b&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,Te=!!S.specularColorMap,$e=!!S.specularIntensityMap,st=Q&&!!S.transmissionMap,Je=Q&&!!S.thicknessMap,$=!!S.gradientMap,Re=!!S.alphaMap,ue=S.alphaTest>0,Pe=!!S.alphaHash,Ie=!!S.extensions;let Se=$i;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Se=n.toneMapping);const Ze={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:pe,fragmentShader:qe,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:it,batchingColor:it&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:gt,envMap:It,envMapMode:It&&G.mapping,envMapCubeUVHeight:K,aoMap:Le,lightMap:rt,bumpMap:nt,normalMap:et,displacementMap:_t,emissiveMap:pt,normalMapObjectSpace:et&&S.normalMapType===jx,normalMapTangentSpace:et&&S.normalMapType===ku,packedNormalMap:et&&S.normalMapType===ku&&Fb(S.normalMap.format),metalnessMap:ft,roughnessMap:Dt,anisotropy:q,anisotropyMap:oe,clearcoat:sn,clearcoatMap:he,clearcoatNormalMap:Ae,clearcoatRoughnessMap:be,dispersion:Pt,iridescence:V,iridescenceMap:de,iridescenceThicknessMap:_e,sheen:b,sheenColorMap:we,sheenRoughnessMap:Ke,specularMap:Ne,specularColorMap:Te,specularIntensityMap:$e,transmission:Q,transmissionMap:st,thicknessMap:Je,gradientMap:$,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:Pe,combine:S.combine,mapUv:Ht&&m(S.map.channel),aoMapUv:Le&&m(S.aoMap.channel),lightMapUv:rt&&m(S.lightMap.channel),bumpMapUv:nt&&m(S.bumpMap.channel),normalMapUv:et&&m(S.normalMap.channel),displacementMapUv:_t&&m(S.displacementMap.channel),emissiveMapUv:pt&&m(S.emissiveMap.channel),metalnessMapUv:ft&&m(S.metalnessMap.channel),roughnessMapUv:Dt&&m(S.roughnessMap.channel),anisotropyMapUv:oe&&m(S.anisotropyMap.channel),clearcoatMapUv:he&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&m(S.sheenRoughnessMap.channel),specularMapUv:Ne&&m(S.specularMap.channel),specularColorMapUv:Te&&m(S.specularColorMap.channel),specularIntensityMapUv:$e&&m(S.specularIntensityMap.channel),transmissionMapUv:st&&m(S.transmissionMap.channel),thicknessMapUv:Je&&m(S.thicknessMap.channel),alphaMapUv:Re&&m(S.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(et||q),vertexNormals:!!E.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!E.attributes.uv&&(Ht||Re),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||E.attributes.normal===void 0&&et===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:je,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ye,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&Et.getTransfer(S.map.colorSpace)===Bt,decodeVideoTextureEmissive:pt&&S.emissiveMap.isVideoTexture===!0&&Et.getTransfer(S.emissiveMap.colorSpace)===Bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wi,flipSided:S.side===Hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function _(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)A.push(k),A.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(x(A,S),T(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function T(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function C(S){const A=p[S.type];let k;if(A){const B=Xn[A];k=Xh.clone(B.uniforms)}else k=S.uniforms;return k}function M(S,A){let k=h.get(A);return k!==void 0?++k.usedTimes:(k=new Lb(n,A,S,r),l.push(k),h.set(A,k)),k}function I(S){if(--S.usedTimes===0){const A=l.indexOf(S);l[A]=l[l.length-1],l.pop(),h.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function F(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:C,acquireProgram:M,releaseProgram:I,releaseShaderCache:R,programs:l,dispose:F}}function zb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,v,_,x){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:_,group:x},n[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=m,T.materialVariant=o(u),T.groupOrder=v,T.renderOrder=u.renderOrder,T.z=_,T.group=x),e++,T}function c(u,p,m,v,_,x){const T=a(u,p,m,v,_,x);m.transmission>0?i.push(T):m.transparent===!0?r.push(T):t.push(T)}function l(u,p,m,v,_,x){const T=a(u,p,m,v,_,x);m.transmission>0?i.unshift(T):m.transparent===!0?r.unshift(T):t.unshift(T)}function h(u,p,m){t.length>1&&t.sort(u||kb),i.length>1&&i.sort(p||Ep),r.length>1&&r.sort(p||Ep),m&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function Vb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new bp,n.set(i,[o])):r>=s.length?(o=new bp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new St};break;case"SpotLight":t={position:new W,direction:new W,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Gb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wb=0;function $b(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xb(n){const e=new Hb,t=Gb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new qt,o=new qt;function a(l){let h=0,f=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,m=0,v=0,_=0,x=0,T=0,C=0,M=0,I=0,R=0,F=0;l.sort($b);for(let A=0,k=l.length;A<k;A++){const B=l[A],z=B.color,P=B.intensity,O=B.distance;let E=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ss?E=B.shadow.map.texture:E=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=z.r*P,f+=z.g*P,u+=z.b*P;else if(B.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(B.sh.coefficients[L],P);F++}else if(B.isDirectionalLight){const L=e.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const U=B.shadow,G=t.get(B);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=E,i.directionalShadowMatrix[p]=B.shadow.matrix,T++}i.directional[p]=L,p++}else if(B.isSpotLight){const L=e.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(z).multiplyScalar(P),L.distance=O,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,i.spot[v]=L;const U=B.shadow;if(B.map&&(i.spotLightMap[I]=B.map,I++,U.updateMatrices(B),B.castShadow&&R++),i.spotLightMatrix[v]=U.matrix,B.castShadow){const G=t.get(B);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=E,M++}v++}else if(B.isRectAreaLight){const L=e.get(B);L.color.copy(z).multiplyScalar(P),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),i.rectArea[_]=L,_++}else if(B.isPointLight){const L=e.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const U=B.shadow,G=t.get(B);G.shadowIntensity=U.intensity,G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=E,i.pointShadowMatrix[m]=B.shadow.matrix,C++}i.point[m]=L,m++}else if(B.isHemisphereLight){const L=e.get(B);L.skyColor.copy(B.color).multiplyScalar(P),L.groundColor.copy(B.groundColor).multiplyScalar(P),i.hemi[x]=L,x++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==m||S.spotLength!==v||S.rectAreaLength!==_||S.hemiLength!==x||S.numDirectionalShadows!==T||S.numPointShadows!==C||S.numSpotShadows!==M||S.numSpotMaps!==I||S.numLightProbes!==F)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=M+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=F,S.directionalLength=p,S.pointLength=m,S.spotLength=v,S.rectAreaLength=_,S.hemiLength=x,S.numDirectionalShadows=T,S.numPointShadows=C,S.numSpotShadows=M,S.numSpotMaps=I,S.numLightProbes=F,i.version=Wb++)}function c(l,h){let f=0,u=0,p=0,m=0,v=0;const _=h.matrixWorldInverse;for(let x=0,T=l.length;x<T;x++){const C=l[x];if(C.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(C.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),p++}else if(C.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(C.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(C.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(_),u++}else if(C.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(_),v++}}}return{setup:a,setupView:c,state:i}}function wp(n){const e=new Xb(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function qb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new wp(n),e.set(r,[a])):s>=o.length?(a=new wp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zb=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],jb=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Tp=new qt,Po=new W,bf=new W;function Jb(n,e,t){let i=new Wh;const r=new dt,s=new dt,o=new kt,a=new ty,c=new ny,l={},h=t.maxTextureSize,f={[Lr]:Hn,[Hn]:Lr,[wi]:wi},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Yb,fragmentShader:Kb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new dn;m.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(m,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let x=this.type;this.render=function(R,F,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===Rx&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_l);const A=n.getRenderTarget(),k=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ar),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const P=x!==this.type;P&&F.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(E=>E.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,E=R.length;O<E;O++){const L=R[O],U=L.shadow;if(U===void 0){ot("WebGLShadowMap:",L,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const G=U.getFrameExtents();r.multiply(G),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,U.mapSize.y=s.y));const K=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=K,U.map===null||P===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ko){if(L.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Xi(r.x,r.y,{format:ss,type:dr,minFilter:An,magFilter:An,generateMipmaps:!1}),U.map.texture.name=L.name+".shadowMap",U.map.depthTexture=new Js(r.x,r.y,Hi),U.map.depthTexture.name=L.name+".shadowMapDepth",U.map.depthTexture.format=pr,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Mn,U.map.depthTexture.magFilter=Mn}else L.isPointLight?(U.map=new Mg(r.x),U.map.depthTexture=new Yv(r.x,ji)):(U.map=new Xi(r.x,r.y),U.map.depthTexture=new Js(r.x,r.y,ji)),U.map.depthTexture.name=L.name+".shadowMap",U.map.depthTexture.format=pr,this.type===_l?(U.map.depthTexture.compareFunction=K?Vh:kh,U.map.depthTexture.minFilter=An,U.map.depthTexture.magFilter=An):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Mn,U.map.depthTexture.magFilter=Mn);U.camera.updateProjectionMatrix()}const te=U.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<te;fe++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(U.map),n.clear());const j=U.getViewport(fe);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),z.viewport(o)}if(L.isPointLight){const j=U.camera,ye=U.matrix,pe=L.distance||j.far;pe!==j.far&&(j.far=pe,j.updateProjectionMatrix()),Po.setFromMatrixPosition(L.matrixWorld),j.position.copy(Po),bf.copy(j.position),bf.add(Zb[fe]),j.up.copy(jb[fe]),j.lookAt(bf),j.updateMatrixWorld(),ye.makeTranslation(-Po.x,-Po.y,-Po.z),Tp.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Tp,j.coordinateSystem,j.reversedDepth)}else U.updateMatrices(L);i=U.getFrustum(),M(F,S,U.camera,L,this.type)}U.isPointLightShadow!==!0&&this.type===ko&&T(U,S),U.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(A,k,B)};function T(R,F){const S=e.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xi(r.x,r.y,{format:ss,type:dr})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(F,null,S,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(F,null,S,p,v,null)}function C(R,F,S,A){let k=null;const B=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(B!==void 0)k=B;else if(k=S.isPointLight===!0?c:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const z=k.uuid,P=F.uuid;let O=l[z];O===void 0&&(O={},l[z]=O);let E=O[P];E===void 0&&(E=k.clone(),O[P]=E,F.addEventListener("dispose",I)),k=E}if(k.visible=F.visible,k.wireframe=F.wireframe,A===ko?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:f[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const z=n.properties.get(k);z.light=S}return k}function M(R,F,S,A,k){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===ko)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const P=e.update(R),O=R.material;if(Array.isArray(O)){const E=P.groups;for(let L=0,U=E.length;L<U;L++){const G=E[L],K=O[G.materialIndex];if(K&&K.visible){const te=C(R,K,A,k);R.onBeforeShadow(n,R,F,S,P,te,G),n.renderBufferDirect(S,null,P,te,R,G),R.onAfterShadow(n,R,F,S,P,te,G)}}}else if(O.visible){const E=C(R,O,A,k);R.onBeforeShadow(n,R,F,S,P,E,null),n.renderBufferDirect(S,null,P,E,R,null),R.onAfterShadow(n,R,F,S,P,E,null)}}const z=R.children;for(let P=0,O=z.length;P<O;P++)M(z[P],F,S,A,k)}function I(R){R.target.removeEventListener("dispose",I);for(const S in l){const A=l[S],k=R.target.uuid;k in A&&(A[k].dispose(),delete A[k])}}}function Qb(n,e){function t(){let $=!1;const Re=new kt;let ue=null;const Pe=new kt(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!$&&(n.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Se,Ze,He,Yt){Yt===!0&&(Ie*=He,Se*=He,Ze*=He),Re.set(Ie,Se,Ze,He),Pe.equals(Re)===!1&&(n.clearColor(Ie,Se,Ze,He),Pe.copy(Re))},reset:function(){$=!1,ue=null,Pe.set(-1,0,0,0)}}}function i(){let $=!1,Re=!1,ue=null,Pe=null,Ie=null;return{setReversed:function(Se){if(Re!==Se){const Ze=e.get("EXT_clip_control");Se?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Re=Se;const He=Ie;Ie=null,this.setClear(He)}},getReversed:function(){return Re},setTest:function(Se){Se?ve(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(Se){ue!==Se&&!$&&(n.depthMask(Se),ue=Se)},setFunc:function(Se){if(Re&&(Se=av[Se]),Pe!==Se){switch(Se){case tu:n.depthFunc(n.NEVER);break;case nu:n.depthFunc(n.ALWAYS);break;case iu:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case ru:n.depthFunc(n.EQUAL);break;case su:n.depthFunc(n.GEQUAL);break;case ou:n.depthFunc(n.GREATER);break;case au:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=Se}},setLocked:function(Se){$=Se},setClear:function(Se){Ie!==Se&&(Ie=Se,Re&&(Se=1-Se),n.clearDepth(Se))},reset:function(){$=!1,ue=null,Pe=null,Ie=null,Re=!1}}}function r(){let $=!1,Re=null,ue=null,Pe=null,Ie=null,Se=null,Ze=null,He=null,Yt=null;return{setTest:function(Ut){$||(Ut?ve(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(Ut){Re!==Ut&&!$&&(n.stencilMask(Ut),Re=Ut)},setFunc:function(Ut,Gn,Kn){(ue!==Ut||Pe!==Gn||Ie!==Kn)&&(n.stencilFunc(Ut,Gn,Kn),ue=Ut,Pe=Gn,Ie=Kn)},setOp:function(Ut,Gn,Kn){(Se!==Ut||Ze!==Gn||He!==Kn)&&(n.stencilOp(Ut,Gn,Kn),Se=Ut,Ze=Gn,He=Kn)},setLocked:function(Ut){$=Ut},setClear:function(Ut){Yt!==Ut&&(n.clearStencil(Ut),Yt=Ut)},reset:function(){$=!1,Re=null,ue=null,Pe=null,Ie=null,Se=null,Ze=null,He=null,Yt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,m=[],v=null,_=!1,x=null,T=null,C=null,M=null,I=null,R=null,F=null,S=new St(0,0,0),A=0,k=!1,B=null,z=null,P=null,O=null,E=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),U=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),U=G>=2);let te=null,fe={};const j=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),pe=new kt().fromArray(j),qe=new kt().fromArray(ye);function le($,Re,ue,Pe){const Ie=new Uint8Array(4),Se=n.createTexture();n.bindTexture($,Se),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<ue;Ze++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Re+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return Se}const Ee={};Ee[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Zs),nt(!1),et(Sd),ve(n.CULL_FACE),Le(ar);function ve($){h[$]!==!0&&(n.enable($),h[$]=!0)}function je($){h[$]!==!1&&(n.disable($),h[$]=!1)}function Ye($,Re){return u[$]!==Re?(n.bindFramebuffer($,Re),u[$]=Re,$===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Re),$===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function it($,Re){let ue=m,Pe=!1;if($){ue=p.get(Re),ue===void 0&&(ue=[],p.set(Re,ue));const Ie=$.textures;if(ue.length!==Ie.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ze=Ie.length;Se<Ze;Se++)ue[Se]=n.COLOR_ATTACHMENT0+Se;ue.length=Ie.length,Pe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ue)}function Ht($){return v!==$?(n.useProgram($),v=$,!0):!1}const gt={[Yr]:n.FUNC_ADD,[Px]:n.FUNC_SUBTRACT,[Ix]:n.FUNC_REVERSE_SUBTRACT};gt[Dx]=n.MIN,gt[Lx]=n.MAX;const It={[Nx]:n.ZERO,[Ox]:n.ONE,[Ux]:n.SRC_COLOR,[Qf]:n.SRC_ALPHA,[Hx]:n.SRC_ALPHA_SATURATE,[kx]:n.DST_COLOR,[Bx]:n.DST_ALPHA,[Fx]:n.ONE_MINUS_SRC_COLOR,[eu]:n.ONE_MINUS_SRC_ALPHA,[Vx]:n.ONE_MINUS_DST_COLOR,[zx]:n.ONE_MINUS_DST_ALPHA,[Gx]:n.CONSTANT_COLOR,[Wx]:n.ONE_MINUS_CONSTANT_COLOR,[$x]:n.CONSTANT_ALPHA,[Xx]:n.ONE_MINUS_CONSTANT_ALPHA};function Le($,Re,ue,Pe,Ie,Se,Ze,He,Yt,Ut){if($===ar){_===!0&&(je(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),$!==Cx){if($!==x||Ut!==k){if((T!==Yr||I!==Yr)&&(n.blendEquation(n.FUNC_ADD),T=Yr,I=Yr),Ut)switch($){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Md:n.blendFunc(n.ONE,n.ONE);break;case Ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Tt("WebGLState: Invalid blending: ",$);break}else switch($){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Md:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ed:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",$);break}C=null,M=null,R=null,F=null,S.set(0,0,0),A=0,x=$,k=Ut}return}Ie=Ie||Re,Se=Se||ue,Ze=Ze||Pe,(Re!==T||Ie!==I)&&(n.blendEquationSeparate(gt[Re],gt[Ie]),T=Re,I=Ie),(ue!==C||Pe!==M||Se!==R||Ze!==F)&&(n.blendFuncSeparate(It[ue],It[Pe],It[Se],It[Ze]),C=ue,M=Pe,R=Se,F=Ze),(He.equals(S)===!1||Yt!==A)&&(n.blendColor(He.r,He.g,He.b,Yt),S.copy(He),A=Yt),x=$,k=!1}function rt($,Re){$.side===wi?je(n.CULL_FACE):ve(n.CULL_FACE);let ue=$.side===Hn;Re&&(ue=!ue),nt(ue),$.blending===Gs&&$.transparent===!1?Le(ar):Le($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),s.setMask($.colorWrite);const Pe=$.stencilWrite;a.setTest(Pe),Pe&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),pt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt($){B!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),B=$)}function et($){$!==Tx?(ve(n.CULL_FACE),$!==z&&($===Sd?n.cullFace(n.BACK):$===Ax?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),z=$}function _t($){$!==P&&(U&&n.lineWidth($),P=$)}function pt($,Re,ue){$?(ve(n.POLYGON_OFFSET_FILL),(O!==Re||E!==ue)&&(O=Re,E=ue,o.getReversed()&&(Re=-Re),n.polygonOffset(Re,ue))):je(n.POLYGON_OFFSET_FILL)}function ft($){$?ve(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function Dt($){$===void 0&&($=n.TEXTURE0+L-1),te!==$&&(n.activeTexture($),te=$)}function q($,Re,ue){ue===void 0&&(te===null?ue=n.TEXTURE0+L-1:ue=te);let Pe=fe[ue];Pe===void 0&&(Pe={type:void 0,texture:void 0},fe[ue]=Pe),(Pe.type!==$||Pe.texture!==Re)&&(te!==ue&&(n.activeTexture(ue),te=ue),n.bindTexture($,Re||Ee[$]),Pe.type=$,Pe.texture=Re)}function sn(){const $=fe[te];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Pt(){try{n.compressedTexImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function V(){try{n.compressedTexImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function b(){try{n.texSubImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function Q(){try{n.texSubImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function Ae(){try{n.texStorage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function be(){try{n.texStorage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function de(){try{n.texImage2D(...arguments)}catch($){Tt("WebGLState:",$)}}function _e(){try{n.texImage3D(...arguments)}catch($){Tt("WebGLState:",$)}}function we($){return f[$]!==void 0?f[$]:n.getParameter($)}function Ke($,Re){f[$]!==Re&&(n.pixelStorei($,Re),f[$]=Re)}function Ne($){pe.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),pe.copy($))}function Te($){qe.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),qe.copy($))}function $e($,Re){let ue=l.get(Re);ue===void 0&&(ue=new WeakMap,l.set(Re,ue));let Pe=ue.get($);Pe===void 0&&(Pe=n.getUniformBlockIndex(Re,$.name),ue.set($,Pe))}function st($,Re){const Pe=l.get(Re).get($);c.get(Re)!==Pe&&(n.uniformBlockBinding(Re,Pe,$.__bindingPointIndex),c.set(Re,Pe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,fe={},u={},p=new WeakMap,m=[],v=null,_=!1,x=null,T=null,C=null,M=null,I=null,R=null,F=null,S=new St(0,0,0),A=0,k=!1,B=null,z=null,P=null,O=null,E=null,pe.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:je,bindFramebuffer:Ye,drawBuffers:it,useProgram:Ht,setBlending:Le,setMaterial:rt,setFlipSided:nt,setCullFace:et,setLineWidth:_t,setPolygonOffset:pt,setScissorTest:ft,activeTexture:Dt,bindTexture:q,unbindTexture:sn,compressedTexImage2D:Pt,compressedTexImage3D:V,texImage2D:de,texImage3D:_e,pixelStorei:Ke,getParameter:we,updateUBOMapping:$e,uniformBlockBinding:st,texStorage2D:Ae,texStorage3D:be,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Ne,viewport:Te,reset:Je}}function e1(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(V,b){return m?new OffscreenCanvas(V,b):Fl("canvas")}function _(V,b,Q){let oe=1;const he=Pt(V);if((he.width>Q||he.height>Q)&&(oe=Q/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const Ae=Math.floor(oe*he.width),be=Math.floor(oe*he.height);u===void 0&&(u=v(Ae,be));const de=b?v(Ae,be):u;return de.width=Ae,de.height=be,de.getContext("2d").drawImage(V,0,0,Ae,be),ot("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+be+")."),de}else return"data"in V&&ot("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),V;return V}function x(V){return V.generateMipmaps}function T(V){n.generateMipmap(V)}function C(V){return V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?n.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(V,b,Q,oe,he,Ae=!1){if(V!==null){if(n[V]!==void 0)return n[V];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let be;oe&&(be=e.get("EXT_texture_norm16"),be||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=b;if(b===n.RED&&(Q===n.FLOAT&&(de=n.R32F),Q===n.HALF_FLOAT&&(de=n.R16F),Q===n.UNSIGNED_BYTE&&(de=n.R8),Q===n.UNSIGNED_SHORT&&be&&(de=be.R16_EXT),Q===n.SHORT&&be&&(de=be.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(de=n.R8UI),Q===n.UNSIGNED_SHORT&&(de=n.R16UI),Q===n.UNSIGNED_INT&&(de=n.R32UI),Q===n.BYTE&&(de=n.R8I),Q===n.SHORT&&(de=n.R16I),Q===n.INT&&(de=n.R32I)),b===n.RG&&(Q===n.FLOAT&&(de=n.RG32F),Q===n.HALF_FLOAT&&(de=n.RG16F),Q===n.UNSIGNED_BYTE&&(de=n.RG8),Q===n.UNSIGNED_SHORT&&be&&(de=be.RG16_EXT),Q===n.SHORT&&be&&(de=be.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(de=n.RG8UI),Q===n.UNSIGNED_SHORT&&(de=n.RG16UI),Q===n.UNSIGNED_INT&&(de=n.RG32UI),Q===n.BYTE&&(de=n.RG8I),Q===n.SHORT&&(de=n.RG16I),Q===n.INT&&(de=n.RG32I)),b===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(de=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(de=n.RGB16UI),Q===n.UNSIGNED_INT&&(de=n.RGB32UI),Q===n.BYTE&&(de=n.RGB8I),Q===n.SHORT&&(de=n.RGB16I),Q===n.INT&&(de=n.RGB32I)),b===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),Q===n.UNSIGNED_INT&&(de=n.RGBA32UI),Q===n.BYTE&&(de=n.RGBA8I),Q===n.SHORT&&(de=n.RGBA16I),Q===n.INT&&(de=n.RGBA32I)),b===n.RGB&&(Q===n.UNSIGNED_SHORT&&be&&(de=be.RGB16_EXT),Q===n.SHORT&&be&&(de=be.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),b===n.RGBA){const _e=Ae?Ul:Et.getTransfer(he);Q===n.FLOAT&&(de=n.RGBA32F),Q===n.HALF_FLOAT&&(de=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(de=_e===Bt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&be&&(de=be.RGBA16_EXT),Q===n.SHORT&&be&&(de=be.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(V,b){let Q;return V?b===null||b===ji||b===jo?Q=n.DEPTH24_STENCIL8:b===Hi?Q=n.DEPTH32F_STENCIL8:b===Zo&&(Q=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===jo?Q=n.DEPTH_COMPONENT24:b===Hi?Q=n.DEPTH_COMPONENT32F:b===Zo&&(Q=n.DEPTH_COMPONENT16),Q}function R(V,b){return x(V)===!0||V.isFramebufferTexture&&V.minFilter!==Mn&&V.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?b.mipmaps.length:1}function F(V){const b=V.target;b.removeEventListener("dispose",F),A(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function S(V){const b=V.target;b.removeEventListener("dispose",S),B(b)}function A(V){const b=i.get(V);if(b.__webglInit===void 0)return;const Q=V.source,oe=p.get(Q);if(oe){const he=oe[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(V),Object.keys(oe).length===0&&p.delete(Q)}i.remove(V)}function k(V){const b=i.get(V);n.deleteTexture(b.__webglTexture);const Q=V.source,oe=p.get(Q);delete oe[b.__cacheKey],o.memory.textures--}function B(V){const b=i.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),i.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(b.__webglFramebuffer[oe]))for(let he=0;he<b.__webglFramebuffer[oe].length;he++)n.deleteFramebuffer(b.__webglFramebuffer[oe][he]);else n.deleteFramebuffer(b.__webglFramebuffer[oe]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[oe])}else{if(Array.isArray(b.__webglFramebuffer))for(let oe=0;oe<b.__webglFramebuffer.length;oe++)n.deleteFramebuffer(b.__webglFramebuffer[oe]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let oe=0;oe<b.__webglColorRenderbuffer.length;oe++)b.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[oe]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=V.textures;for(let oe=0,he=Q.length;oe<he;oe++){const Ae=i.get(Q[oe]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),o.memory.textures--),i.remove(Q[oe])}i.remove(V)}let z=0;function P(){z=0}function O(){return z}function E(V){z=V}function L(){const V=z;return V>=r.maxTextures&&ot("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),z+=1,V}function U(V){const b=[];return b.push(V.wrapS),b.push(V.wrapT),b.push(V.wrapR||0),b.push(V.magFilter),b.push(V.minFilter),b.push(V.anisotropy),b.push(V.internalFormat),b.push(V.format),b.push(V.type),b.push(V.generateMipmaps),b.push(V.premultiplyAlpha),b.push(V.flipY),b.push(V.unpackAlignment),b.push(V.colorSpace),b.join()}function G(V,b){const Q=i.get(V);if(V.isVideoTexture&&q(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&Q.__version!==V.version){const oe=V.image;if(oe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{je(Q,V,b);return}}else V.isExternalTexture&&(Q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+b)}function K(V,b){const Q=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Q.__version!==V.version){je(Q,V,b);return}else V.isExternalTexture&&(Q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+b)}function te(V,b){const Q=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Q.__version!==V.version){je(Q,V,b);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+b)}function fe(V,b){const Q=i.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&Q.__version!==V.version){Ye(Q,V,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+b)}const j={[lu]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[cu]:n.MIRRORED_REPEAT},ye={[Mn]:n.NEAREST,[Kx]:n.NEAREST_MIPMAP_NEAREST,[xa]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Wc]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},pe={[Jx]:n.NEVER,[iv]:n.ALWAYS,[Qx]:n.LESS,[kh]:n.LEQUAL,[ev]:n.EQUAL,[Vh]:n.GEQUAL,[tv]:n.GREATER,[nv]:n.NOTEQUAL};function qe(V,b){if(b.type===Hi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===Wc||b.magFilter===xa||b.magFilter===Jr||b.minFilter===An||b.minFilter===Wc||b.minFilter===xa||b.minFilter===Jr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,j[b.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,j[b.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,j[b.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,ye[b.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,ye[b.minFilter]),b.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mn||b.minFilter!==xa&&b.minFilter!==Jr||b.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(V,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function le(V,b){let Q=!1;V.__webglInit===void 0&&(V.__webglInit=!0,b.addEventListener("dispose",F));const oe=b.source;let he=p.get(oe);he===void 0&&(he={},p.set(oe,he));const Ae=U(b);if(Ae!==V.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),he[Ae].usedTimes++;const be=he[V.__cacheKey];be!==void 0&&(he[V.__cacheKey].usedTimes--,be.usedTimes===0&&k(b)),V.__cacheKey=Ae,V.__webglTexture=he[Ae].texture}return Q}function Ee(V,b,Q){return Math.floor(Math.floor(V/Q)/b)}function ve(V,b,Q,oe){const Ae=V.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Q,oe,b.data);else{Ae.sort((Ke,Ne)=>Ke.start-Ne.start);let be=0;for(let Ke=1;Ke<Ae.length;Ke++){const Ne=Ae[be],Te=Ae[Ke],$e=Ne.start+Ne.count,st=Ee(Te.start,b.width,4),Je=Ee(Ne.start,b.width,4);Te.start<=$e+1&&st===Je&&Ee(Te.start+Te.count-1,b.width,4)===st?Ne.count=Math.max(Ne.count,Te.start+Te.count-Ne.start):(++be,Ae[be]=Te)}Ae.length=be+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),we=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ke=0,Ne=Ae.length;Ke<Ne;Ke++){const Te=Ae[Ke],$e=Math.floor(Te.start/4),st=Math.ceil(Te.count/4),Je=$e%b.width,$=Math.floor($e/b.width),Re=st,ue=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,$),t.texSubImage2D(n.TEXTURE_2D,0,Je,$,Re,ue,Q,oe,b.data)}V.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function je(V,b,Q){let oe=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(oe=n.TEXTURE_3D);const he=le(V,b),Ae=b.source;t.bindTexture(oe,V.__webglTexture,n.TEXTURE0+Q);const be=i.get(Ae);if(Ae.version!==be.__version||he===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ue=Et.getPrimaries(Et.workingColorSpace),Pe=b.colorSpace===Rr?null:Et.getPrimaries(b.colorSpace),Ie=b.colorSpace===Rr||ue===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let _e=_(b.image,!1,r.maxTextureSize);_e=sn(b,_e);const we=s.convert(b.format,b.colorSpace),Ke=s.convert(b.type);let Ne=M(b.internalFormat,we,Ke,b.normalized,b.colorSpace,b.isVideoTexture);qe(oe,b);let Te;const $e=b.mipmaps,st=b.isVideoTexture!==!0,Je=be.__version===void 0||he===!0,$=Ae.dataReady,Re=R(b,_e);if(b.isDepthTexture)Ne=I(b.format===Qr,b.type),Je&&(st?t.texStorage2D(n.TEXTURE_2D,1,Ne,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ne,_e.width,_e.height,0,we,Ke,null));else if(b.isDataTexture)if($e.length>0){st&&Je&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,$e[0].width,$e[0].height);for(let ue=0,Pe=$e.length;ue<Pe;ue++)Te=$e[ue],st?$&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Ke,Te.data):t.texImage2D(n.TEXTURE_2D,ue,Ne,Te.width,Te.height,0,we,Ke,Te.data);b.generateMipmaps=!1}else st?(Je&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,_e.width,_e.height),$&&ve(b,_e,we,Ke)):t.texImage2D(n.TEXTURE_2D,0,Ne,_e.width,_e.height,0,we,Ke,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){st&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ne,$e[0].width,$e[0].height,_e.depth);for(let ue=0,Pe=$e.length;ue<Pe;ue++)if(Te=$e[ue],b.format!==Ri)if(we!==null)if(st){if($)if(b.layerUpdates.size>0){const Ie=ip(Te.width,Te.height,b.format,b.type);for(const Se of b.layerUpdates){const Ze=Te.data.subarray(Se*Ie/Te.data.BYTES_PER_ELEMENT,(Se+1)*Ie/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,Se,Te.width,Te.height,1,we,Ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,_e.depth,we,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Ne,Te.width,Te.height,_e.depth,0,Te.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?$&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,_e.depth,we,Ke,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Ne,Te.width,Te.height,_e.depth,0,we,Ke,Te.data)}else{st&&Je&&t.texStorage2D(n.TEXTURE_2D,Re,Ne,$e[0].width,$e[0].height);for(let ue=0,Pe=$e.length;ue<Pe;ue++)Te=$e[ue],b.format!==Ri?we!==null?st?$&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Ne,Te.width,Te.height,0,Te.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?$&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Te.width,Te.height,we,Ke,Te.data):t.texImage2D(n.TEXTURE_2D,ue,Ne,Te.width,Te.height,0,we,Ke,Te.data)}else if(b.isDataArrayTexture)if(st){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Ne,_e.width,_e.height,_e.depth),$)if(b.layerUpdates.size>0){const ue=ip(_e.width,_e.height,b.format,b.type);for(const Pe of b.layerUpdates){const Ie=_e.data.subarray(Pe*ue/_e.data.BYTES_PER_ELEMENT,(Pe+1)*ue/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,_e.width,_e.height,1,we,Ke,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,we,Ke,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,we,Ke,_e.data);else if(b.isData3DTexture)st?(Je&&t.texStorage3D(n.TEXTURE_3D,Re,Ne,_e.width,_e.height,_e.depth),$&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,we,Ke,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,we,Ke,_e.data);else if(b.isFramebufferTexture){if(Je)if(st)t.texStorage2D(n.TEXTURE_2D,Re,Ne,_e.width,_e.height);else{let ue=_e.width,Pe=_e.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Ne,ue,Pe,0,we,Ke,null),ue>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const ue=n.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),_e.parentNode!==ue){ue.appendChild(_e),f.add(b),ue.onpaint=Pe=>{const Ie=Pe.changedElements;for(const Se of f)Ie.includes(Se.image)&&(Se.needsUpdate=!0)},ue.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const Ie=n.RGBA,Se=n.RGBA,Ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ie,Se,Ze,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(st&&Je){const ue=Pt($e[0]);t.texStorage2D(n.TEXTURE_2D,Re,Ne,ue.width,ue.height)}for(let ue=0,Pe=$e.length;ue<Pe;ue++)Te=$e[ue],st?$&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,we,Ke,Te):t.texImage2D(n.TEXTURE_2D,ue,Ne,we,Ke,Te);b.generateMipmaps=!1}else if(st){if(Je){const ue=Pt(_e);t.texStorage2D(n.TEXTURE_2D,Re,Ne,ue.width,ue.height)}$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ke,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ne,we,Ke,_e);x(b)&&T(oe),be.__version=Ae.version,b.onUpdate&&b.onUpdate(b)}V.__version=b.version}function Ye(V,b,Q){if(b.image.length!==6)return;const oe=le(V,b),he=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+Q);const Ae=i.get(he);if(he.version!==Ae.__version||oe===!0){t.activeTexture(n.TEXTURE0+Q);const be=Et.getPrimaries(Et.workingColorSpace),de=b.colorSpace===Rr?null:Et.getPrimaries(b.colorSpace),_e=b.colorSpace===Rr||be===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const we=b.isCompressedTexture||b.image[0].isCompressedTexture,Ke=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let Se=0;Se<6;Se++)!we&&!Ke?Ne[Se]=_(b.image[Se],!0,r.maxCubemapSize):Ne[Se]=Ke?b.image[Se].image:b.image[Se],Ne[Se]=sn(b,Ne[Se]);const Te=Ne[0],$e=s.convert(b.format,b.colorSpace),st=s.convert(b.type),Je=M(b.internalFormat,$e,st,b.normalized,b.colorSpace),$=b.isVideoTexture!==!0,Re=Ae.__version===void 0||oe===!0,ue=he.dataReady;let Pe=R(b,Te);qe(n.TEXTURE_CUBE_MAP,b);let Ie;if(we){$&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Je,Te.width,Te.height);for(let Se=0;Se<6;Se++){Ie=Ne[Se].mipmaps;for(let Ze=0;Ze<Ie.length;Ze++){const He=Ie[Ze];b.format!==Ri?$e!==null?$?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,0,0,He.width,He.height,$e,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,Je,He.width,He.height,0,He.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,0,0,He.width,He.height,$e,st,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze,Je,He.width,He.height,0,$e,st,He.data)}}}else{if(Ie=b.mipmaps,$&&Re){Ie.length>0&&Pe++;const Se=Pt(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Je,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ke){$?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ne[Se].width,Ne[Se].height,$e,st,Ne[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,Ne[Se].width,Ne[Se].height,0,$e,st,Ne[Se].data);for(let Ze=0;Ze<Ie.length;Ze++){const Yt=Ie[Ze].image[Se].image;$?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,0,0,Yt.width,Yt.height,$e,st,Yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,Je,Yt.width,Yt.height,0,$e,st,Yt.data)}}else{$?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$e,st,Ne[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Je,$e,st,Ne[Se]);for(let Ze=0;Ze<Ie.length;Ze++){const He=Ie[Ze];$?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,0,0,$e,st,He.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ze+1,Je,$e,st,He.image[Se])}}}x(b)&&T(n.TEXTURE_CUBE_MAP),Ae.__version=he.version,b.onUpdate&&b.onUpdate(b)}V.__version=b.version}function it(V,b,Q,oe,he,Ae){const be=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),_e=M(Q.internalFormat,be,de,Q.normalized,Q.colorSpace),we=i.get(b),Ke=i.get(Q);if(Ke.__renderTarget=b,!we.__hasExternalTextures){const Ne=Math.max(1,b.width>>Ae),Te=Math.max(1,b.height>>Ae);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Ae,_e,Ne,Te,b.depth,0,be,de,null):t.texImage2D(he,Ae,_e,Ne,Te,0,be,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,V),Dt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,he,Ke.__webglTexture,0,ft(b)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,he,Ke.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(V,b,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,V),b.depthBuffer){const oe=b.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Ae=I(b.stencilBuffer,he),be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Dt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(b),Ae,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(b),Ae,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,V)}else{const oe=b.textures;for(let he=0;he<oe.length;he++){const Ae=oe[he],be=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),_e=M(Ae.internalFormat,be,de,Ae.normalized,Ae.colorSpace);Dt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(b),_e,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(b),_e,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_e,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(V,b,Q){const oe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,V),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),qe(n.TEXTURE_CUBE_MAP,b.depthTexture);const we=s.convert(b.depthTexture.format),Ke=s.convert(b.depthTexture.type);let Ne;b.depthTexture.format===pr?Ne=n.DEPTH_COMPONENT24:b.depthTexture.format===Qr&&(Ne=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ne,b.width,b.height,0,we,Ke,null)}}else G(b.depthTexture,0);const Ae=he.__webglTexture,be=ft(b),de=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,_e=b.depthTexture.format===Qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===pr)Dt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,de,Ae,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,_e,de,Ae,0);else if(b.depthTexture.format===Qr)Dt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,de,Ae,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,_e,de,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(V){const b=i.get(V),Q=V.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==V.depthTexture){const oe=V.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),oe){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=oe}if(V.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let oe=0;oe<6;oe++)gt(b.__webglFramebuffer[oe],V,oe);else{const oe=V.texture.mipmaps;oe&&oe.length>0?gt(b.__webglFramebuffer[0],V,0):gt(b.__webglFramebuffer,V,0)}else if(Q){b.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[oe]),b.__webglDepthbuffer[oe]===void 0)b.__webglDepthbuffer[oe]=n.createRenderbuffer(),Ht(b.__webglDepthbuffer[oe],V,!1);else{const he=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ae)}}else{const oe=V.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ht(b.__webglDepthbuffer,V,!1);else{const he=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(V,b,Q){const oe=i.get(V);b!==void 0&&it(oe.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&It(V)}function rt(V){const b=V.texture,Q=i.get(V),oe=i.get(b);V.addEventListener("dispose",S);const he=V.textures,Ae=V.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=b.version,o.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[de]=[];for(let _e=0;_e<b.mipmaps.length;_e++)Q.__webglFramebuffer[de][_e]=n.createFramebuffer()}else Q.__webglFramebuffer[de]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)Q.__webglFramebuffer[de]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(be)for(let de=0,_e=he.length;de<_e;de++){const we=i.get(he[de]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(V.samples>0&&Dt(V)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const _e=he[de];Q.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);const we=s.convert(_e.format,_e.colorSpace),Ke=s.convert(_e.type),Ne=M(_e.internalFormat,we,Ke,_e.normalized,_e.colorSpace,V.isXRRenderTarget===!0),Te=ft(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Ne,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Q.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Ht(Q.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),qe(n.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)it(Q.__webglFramebuffer[de][_e],V,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else it(Q.__webglFramebuffer[de],V,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(b)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,_e=he.length;de<_e;de++){const we=he[de],Ke=i.get(we);let Ne=n.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Ne=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Ke.__webglTexture),qe(Ne,we),it(Q.__webglFramebuffer,V,we,n.COLOR_ATTACHMENT0+de,Ne,0),x(we)&&T(Ne)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(de=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,oe.__webglTexture),qe(de,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)it(Q.__webglFramebuffer[_e],V,b,n.COLOR_ATTACHMENT0,de,_e);else it(Q.__webglFramebuffer,V,b,n.COLOR_ATTACHMENT0,de,0);x(b)&&T(de),t.unbindTexture()}V.depthBuffer&&It(V)}function nt(V){const b=V.textures;for(let Q=0,oe=b.length;Q<oe;Q++){const he=b[Q];if(x(he)){const Ae=C(V),be=i.get(he).__webglTexture;t.bindTexture(Ae,be),T(Ae),t.unbindTexture()}}}const et=[],_t=[];function pt(V){if(V.samples>0){if(Dt(V)===!1){const b=V.textures,Q=V.width,oe=V.height;let he=n.COLOR_BUFFER_BIT;const Ae=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(V),de=b.length>1;if(de)for(let we=0;we<b.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const _e=V.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let we=0;we<b.length;we++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const Ke=i.get(b[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,Q,oe,0,0,Q,oe,he,n.NEAREST),c===!0&&(et.length=0,_t.length=0,et.push(n.COLOR_ATTACHMENT0+we),V.depthBuffer&&V.resolveDepthBuffer===!1&&(et.push(Ae),_t.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let we=0;we<b.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const Ke=i.get(b[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&c){const b=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ft(V){return Math.min(r.maxSamples,V.samples)}function Dt(V){const b=i.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(V){const b=o.render.frame;h.get(V)!==b&&(h.set(V,b),V.update())}function sn(V,b){const Q=V.colorSpace,oe=V.format,he=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||Q!==Ol&&Q!==Rr&&(Et.getTransfer(Q)===Bt?(oe!==Ri||he!==ni)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",Q)),b}function Pt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(l.width=V.naturalWidth||V.width,l.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(l.width=V.displayWidth,l.height=V.displayHeight):(l.width=V.width,l.height=V.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.getTextureUnits=O,this.setTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=fe,this.rebindTextures=Le,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function t1(n,e){function t(i,r=Rr){let s;const o=Et.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Nh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===eg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tg)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===J0)return n.BYTE;if(i===Q0)return n.SHORT;if(i===Zo)return n.UNSIGNED_SHORT;if(i===Lh)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===Hi)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===ng)return n.ALPHA;if(i===ig)return n.RGB;if(i===Ri)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===Uh)return n.RED;if(i===Fh)return n.RED_INTEGER;if(i===ss)return n.RG;if(i===Bh)return n.RG_INTEGER;if(i===zh)return n.RGBA_INTEGER;if(i===xl||i===vl||i===yl||i===Sl)if(o===Bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fu||i===uu||i===hu||i===du)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===du)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pu||i===mu||i===gu||i===_u||i===xu||i===Ll||i===vu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pu||i===mu)return o===Bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_u)return s.COMPRESSED_R11_EAC;if(i===xu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ll)return s.COMPRESSED_RG11_EAC;if(i===vu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yu||i===Su||i===Mu||i===Eu||i===bu||i===wu||i===Tu||i===Au||i===Ru||i===Cu||i===Pu||i===Iu||i===Du||i===Lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Su)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Au)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ru)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Iu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Du)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lu)return o===Bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nu||i===Ou||i===Uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nu)return o===Bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fu||i===Bu||i===Nl||i===zu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const n1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _g(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mi({vertexShader:n1,fragmentShader:i1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s1 extends cs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",_=new r1,x={},T=t.getContextAttributes();let C=null,M=null;const I=[],R=[],F=new dt;let S=null;const A=new di;A.viewport=new kt;const k=new di;k.viewport=new kt;const B=[A,k],z=new fy;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Ee=I[le];return Ee===void 0&&(Ee=new Zc,I[le]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(le){let Ee=I[le];return Ee===void 0&&(Ee=new Zc,I[le]=Ee),Ee.getGripSpace()},this.getHand=function(le){let Ee=I[le];return Ee===void 0&&(Ee=new Zc,I[le]=Ee),Ee.getHandSpace()};function E(le){const Ee=R.indexOf(le.inputSource);if(Ee===-1)return;const ve=I[Ee];ve!==void 0&&(ve.update(le.inputSource,le.frame,l||o),ve.dispatchEvent({type:le.type,data:le.inputSource}))}function L(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",U);for(let le=0;le<I.length;le++){const Ee=R[le];Ee!==null&&(R[le]=null,I[le].disconnect(Ee))}P=null,O=null,_.reset();for(const le in x)delete x[le];e.setRenderTarget(C),p=null,u=null,f=null,r=null,M=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(le){l=le},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",L),r.addEventListener("inputsourceschange",U),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(F),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,je=null,Ye=null;T.depth&&(Ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?Qr:pr,je=T.stencil?jo:ji);const it={colorFormat:t.RGBA8,depthFormat:Ye,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(it),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Xi(u.textureWidth,u.textureHeight,{format:Ri,type:ni,depthTexture:new Js(u.textureWidth,u.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Xi(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(le){for(let Ee=0;Ee<le.removed.length;Ee++){const ve=le.removed[Ee],je=R.indexOf(ve);je>=0&&(R[je]=null,I[je].disconnect(ve))}for(let Ee=0;Ee<le.added.length;Ee++){const ve=le.added[Ee];let je=R.indexOf(ve);if(je===-1){for(let it=0;it<I.length;it++)if(it>=R.length){R.push(ve),je=it;break}else if(R[it]===null){R[it]=ve,je=it;break}if(je===-1)break}const Ye=I[je];Ye&&Ye.connect(ve)}}const G=new W,K=new W;function te(le,Ee,ve){G.setFromMatrixPosition(Ee.matrixWorld),K.setFromMatrixPosition(ve.matrixWorld);const je=G.distanceTo(K),Ye=Ee.projectionMatrix.elements,it=ve.projectionMatrix.elements,Ht=Ye[14]/(Ye[10]-1),gt=Ye[14]/(Ye[10]+1),It=(Ye[9]+1)/Ye[5],Le=(Ye[9]-1)/Ye[5],rt=(Ye[8]-1)/Ye[0],nt=(it[8]+1)/it[0],et=Ht*rt,_t=Ht*nt,pt=je/(-rt+nt),ft=pt*-rt;if(Ee.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(ft),le.translateZ(pt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ye[10]===-1)le.projectionMatrix.copy(Ee.projectionMatrix),le.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const Dt=Ht+pt,q=gt+pt,sn=et-ft,Pt=_t+(je-ft),V=It*gt/q*Dt,b=Le*gt/q*Dt;le.projectionMatrix.makePerspective(sn,Pt,V,b,Dt,q),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function fe(le,Ee){Ee===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Ee.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let Ee=le.near,ve=le.far;_.texture!==null&&(_.depthNear>0&&(Ee=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),z.near=k.near=A.near=Ee,z.far=k.far=A.far=ve,(P!==z.near||O!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,O=z.far),z.layers.mask=le.layers.mask|6,A.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;const je=le.parent,Ye=z.cameras;fe(z,je);for(let it=0;it<Ye.length;it++)fe(Ye[it],je);Ye.length===2?te(z,A,k):z.projectionMatrix.copy(A.projectionMatrix),j(le,z,je)};function j(le,Ee,ve){ve===null?le.matrix.copy(Ee.matrixWorld):(le.matrix.copy(ve.matrixWorld),le.matrix.invert(),le.matrix.multiply(Ee.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Ee.projectionMatrix),le.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Qo*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(le){c=le,u!==null&&(u.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(le){return x[le]};let ye=null;function pe(le,Ee){if(h=Ee.getViewerPose(l||o),m=Ee,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let je=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,je=!0);for(let gt=0;gt<ve.length;gt++){const It=ve[gt];let Le=null;if(p!==null)Le=p.getViewport(It);else{const nt=f.getViewSubImage(u,It);Le=nt.viewport,gt===0&&(e.setRenderTargetTextures(M,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(M))}let rt=B[gt];rt===void 0&&(rt=new di,rt.layers.enable(gt),rt.viewport=new kt,B[gt]=rt),rt.matrix.fromArray(It.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(It.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Le.x,Le.y,Le.width,Le.height),gt===0&&(z.matrix.copy(rt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),je===!0&&z.cameras.push(rt)}const Ye=r.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const gt=f.getDepthInformation(ve[0]);gt&&gt.isValid&&gt.texture&&_.init(gt,r.renderState)}if(Ye&&Ye.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let gt=0;gt<ve.length;gt++){const It=ve[gt].camera;if(It){let Le=x[It];Le||(Le=new _g,x[It]=Le);const rt=f.getCameraImage(It);Le.sourceTexture=rt}}}}for(let ve=0;ve<I.length;ve++){const je=R[ve],Ye=I[ve];je!==null&&Ye!==void 0&&Ye.update(je,Ee,l||o)}ye&&ye(le,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),m=null}const qe=new yg;qe.setAnimationLoop(pe),this.setAnimationLoop=function(le){ye=le},this.dispose=function(){}}}const o1=new qt,Ag=new ut;Ag.set(-1,0,0,0,1,0,0,0,1);function a1(n,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,xg(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function r(_,x,T,C,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(_,x):x.isMeshLambertMaterial?(s(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(_,x),f(_,x)):x.isMeshPhongMaterial?(s(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(_,x),u(_,x),x.isMeshPhysicalMaterial&&p(_,x,M)):x.isMeshMatcapMaterial?(s(_,x),m(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),v(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(o(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?c(_,x,T,C):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Hn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Hn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const T=e.get(x),C=T.envMap,M=T.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(o1.makeRotationFromEuler(M)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Ag),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function o(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function c(_,x,T,C){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*T,_.scale.value=C*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function f(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function u(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function p(_,x,T){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,x){x.matcap&&(_.matcap.value=x.matcap)}function v(_,x){const T=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function l1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,I){const R=I.program;i.uniformBlockBinding(M,R)}function l(M,I){let R=r[M.id];R===void 0&&(_(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",T));const F=I.program;i.updateUBOMapping(M,F);const S=e.render.frame;s[M.id]!==S&&(u(M),s[M.id]=S)}function h(M){const I=f();M.__bindingPointIndex=I;const R=n.createBuffer(),F=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,F,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,R),R}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const I=r[M.id],R=M.uniforms,F=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let S=0,A=R.length;S<A;S++){const k=R[S];if(Array.isArray(k))for(let B=0,z=k.length;B<z;B++)p(k[B],S,B,F);else p(k,S,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,I,R,F){if(v(M,I,R,F)===!0){const S=M.__offset,A=M.value;if(Array.isArray(A)){let k=0;for(let B=0;B<A.length;B++){const z=A[B],P=x(z);m(z,M.__data,k),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function m(M,I,R){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,R)}function v(M,I,R,F){const S=M.value,A=I+"_"+R;if(F[A]===void 0)return typeof S=="number"||typeof S=="boolean"?F[A]=S:ArrayBuffer.isView(S)?F[A]=S.slice():F[A]=S.clone(),!0;{const k=F[A];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return F[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function _(M){const I=M.uniforms;let R=0;const F=16;for(let A=0,k=I.length;A<k;A++){const B=Array.isArray(I[A])?I[A]:[I[A]];for(let z=0,P=B.length;z<P;z++){const O=B[z],E=Array.isArray(O.value)?O.value:[O.value];for(let L=0,U=E.length;L<U;L++){const G=E[L],K=x(G),te=R%F,fe=te%K.boundary,j=te+fe;R+=fe,j!==0&&F-j<K.storage&&(R+=F-j),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=R,R+=K.storage}}}const S=R%F;return S>0&&(R+=F-S),M.__size=R,M.__cache={},this}function x(M){const I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",M),I}function T(M){const I=M.target;I.removeEventListener("dispose",T);const R=o.indexOf(I.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function C(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:C}}const c1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function f1(){return Ui===null&&(Ui=new pg(c1,16,16,ss,dr),Ui.name="DFG_LUT",Ui.minFilter=An,Ui.magFilter=An,Ui.wrapS=or,Ui.wrapT=or,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class u1{constructor(e={}){const{canvas:t=sv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ni}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=p,_=new Set([zh,Bh,Fh]),x=new Set([ni,ji,Zo,jo,Nh,Oh]),T=new Uint32Array(4),C=new Int32Array(4),M=new W;let I=null,R=null;const F=[],S=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let B=!1,z=null,P=null,O=null,E=null;this._outputColorSpace=ui;let L=0,U=0,G=null,K=-1,te=null;const fe=new kt,j=new kt;let ye=null;const pe=new St(0);let qe=0,le=t.width,Ee=t.height,ve=1,je=null,Ye=null;const it=new kt(0,0,le,Ee),Ht=new kt(0,0,le,Ee);let gt=!1;const It=new Wh;let Le=!1,rt=!1;const nt=new qt,et=new W,_t=new kt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Dt(){return G===null?ve:1}let q=i;function sn(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",Yt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",Gn,!1),q===null){const Y="webgl2";if(q=sn(Y,N),q===null)throw sn(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw Tt("WebGLRenderer: "+N.message),N}let Pt,V,b,Q,oe,he,Ae,be,de,_e,we,Ke,Ne,Te,$e,st,Je,$,Re,ue,Pe,Ie,Se;function Ze(){Pt=new fE(q),Pt.init(),Pe=new t1(q,Pt),V=new nE(q,Pt,e,Pe),b=new Qb(q,Pt),V.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),P=q.createFramebuffer(),O=q.createFramebuffer(),E=q.createFramebuffer(),Q=new dE(q),oe=new zb,he=new e1(q,Pt,b,oe,V,Pe,Q),Ae=new cE(k),be=new _y(q),Ie=new eE(q,be),de=new uE(q,be,Q,Ie),_e=new mE(q,de,be,Ie,Q),$=new pE(q,V,he),$e=new iE(oe),we=new Bb(k,Ae,Pt,V,Ie,$e),Ke=new a1(k,oe),Ne=new Vb,Te=new qb(Pt),Je=new QM(k,Ae,b,_e,m,c),st=new Jb(k,_e,V),Se=new l1(q,Q,V,b),Re=new tE(q,Pt,Q),ue=new hE(q,Pt,Q),Q.programs=we.programs,k.capabilities=V,k.extensions=Pt,k.properties=oe,k.renderLists=Ne,k.shadowMap=st,k.state=b,k.info=Q}Ze(),v!==ni&&(A=new _E(v,t.width,t.height,a,r,s));const He=new s1(k,q);this.xr=He,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const N=Pt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Pt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(N){N!==void 0&&(ve=N,this.setSize(le,Ee,!1))},this.getSize=function(N){return N.set(le,Ee)},this.setSize=function(N,Y,ae=!0){if(He.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}le=N,Ee=Y,t.width=Math.floor(N*ve),t.height=Math.floor(Y*ve),ae===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(le*ve,Ee*ve).floor()},this.setDrawingBufferSize=function(N,Y,ae){le=N,Ee=Y,ve=ae,t.width=Math.floor(N*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(v===ni){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(fe)},this.getViewport=function(N){return N.copy(it)},this.setViewport=function(N,Y,ae,ie){N.isVector4?it.set(N.x,N.y,N.z,N.w):it.set(N,Y,ae,ie),b.viewport(fe.copy(it).multiplyScalar(ve).round())},this.getScissor=function(N){return N.copy(Ht)},this.setScissor=function(N,Y,ae,ie){N.isVector4?Ht.set(N.x,N.y,N.z,N.w):Ht.set(N,Y,ae,ie),b.scissor(j.copy(Ht).multiplyScalar(ve).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(N){b.setScissorTest(gt=N)},this.setOpaqueSort=function(N){je=N},this.setTransparentSort=function(N){Ye=N},this.getClearColor=function(N){return N.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ae=!0){let ie=0;if(N){let se=!1;if(G!==null){const Oe=G.texture.format;se=_.has(Oe)}if(se){const Oe=G.texture.type,ke=x.has(Oe),Ue=Je.getClearColor(),Xe=Je.getClearAlpha(),Qe=Ue.r,Ge=Ue.g,at=Ue.b;ke?(T[0]=Qe,T[1]=Ge,T[2]=at,T[3]=Xe,q.clearBufferuiv(q.COLOR,0,T)):(C[0]=Qe,C[1]=Ge,C[2]=at,C[3]=Xe,q.clearBufferiv(q.COLOR,0,C))}else ie|=q.COLOR_BUFFER_BIT}Y&&(ie|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ie|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&q.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),z=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Yt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",Gn,!1),Je.dispose(),Ne.dispose(),Te.dispose(),oe.dispose(),Ae.dispose(),_e.dispose(),Ie.dispose(),Se.dispose(),we.dispose(),He.dispose(),He.removeEventListener("sessionstart",po),He.removeEventListener("sessionend",mo),Ji.stop()};function Yt(N){N.preventDefault(),Bl("WebGLRenderer: Context Lost."),B=!0}function Ut(){Bl("WebGLRenderer: Context Restored."),B=!1;const N=Q.autoReset,Y=st.enabled,ae=st.autoUpdate,ie=st.needsUpdate,se=st.type;Ze(),Q.autoReset=N,st.enabled=Y,st.autoUpdate=ae,st.needsUpdate=ie,st.type=se}function Gn(N){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Kn(N){const Y=N.target;Y.removeEventListener("dispose",Kn),fs(Y)}function fs(N){kc(N),oe.remove(N)}function kc(N){const Y=oe.get(N).programs;Y!==void 0&&(Y.forEach(function(ae){we.releaseProgram(ae)}),N.isShaderMaterial&&we.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ae,ie,se,Oe){Y===null&&(Y=pt);const ke=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ue=vr(N,Y,ae,ie,se);b.setMaterial(ie,ke);let Xe=ae.index,Qe=1;if(ie.wireframe===!0){if(Xe=de.getWireframeAttribute(ae),Xe===void 0)return;Qe=2}const Ge=ae.drawRange,at=ae.attributes.position;let tt=Ge.start*Qe,At=(Ge.start+Ge.count)*Qe;Oe!==null&&(tt=Math.max(tt,Oe.start*Qe),At=Math.min(At,(Oe.start+Oe.count)*Qe)),Xe!==null?(tt=Math.max(tt,0),At=Math.min(At,Xe.count)):at!=null&&(tt=Math.max(tt,0),At=Math.min(At,at.count));const Zt=At-tt;if(Zt<0||Zt===1/0)return;Ie.setup(se,ie,Ue,ae,Xe);let Kt,Ft=Re;if(Xe!==null&&(Kt=be.get(Xe),Ft=ue,Ft.setIndex(Kt)),se.isMesh)ie.wireframe===!0?(b.setLineWidth(ie.wireframeLinewidth*Dt()),Ft.setMode(q.LINES)):Ft.setMode(q.TRIANGLES);else if(se.isLine){let on=ie.linewidth;on===void 0&&(on=1),b.setLineWidth(on*Dt()),se.isLineSegments?Ft.setMode(q.LINES):se.isLineLoop?Ft.setMode(q.LINE_LOOP):Ft.setMode(q.LINE_STRIP)}else se.isPoints?Ft.setMode(q.POINTS):se.isSprite&&Ft.setMode(q.TRIANGLES);if(se.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const on=se._multiDrawStarts,Be=se._multiDrawCounts,an=se._multiDrawCount,xt=Xe?be.get(Xe).bytesPerElement:1,$n=oe.get(ie).currentProgram.getUniforms();for(let oi=0;oi<an;oi++)$n.setValue(q,"_gl_DrawID",oi),Ft.render(on[oi]/xt,Be[oi])}else if(se.isInstancedMesh)Ft.renderInstances(tt,Zt,se.count);else if(ae.isInstancedBufferGeometry){const on=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Be=Math.min(ae.instanceCount,on);Ft.renderInstances(tt,Zt,Be)}else Ft.render(tt,Zt)};function uo(N,Y,ae){N.transparent===!0&&N.side===wi&&N.forceSinglePass===!1?(N.side=Hn,N.needsUpdate=!0,Fr(N,Y,ae),N.side=Lr,N.needsUpdate=!0,Fr(N,Y,ae),N.side=wi):Fr(N,Y,ae)}this.compile=function(N,Y,ae=null){ae===null&&(ae=N),R=Te.get(ae),R.init(Y),S.push(R),ae.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(R.pushLight(se),se.castShadow&&R.pushShadow(se))}),N!==ae&&N.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(R.pushLight(se),se.castShadow&&R.pushShadow(se))}),R.setupLights();const ie=new Set;return N.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Oe=se.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Ue=Oe[ke];uo(Ue,ae,se),ie.add(Ue)}else uo(Oe,ae,se),ie.add(Oe)}),R=S.pop(),ie},this.compileAsync=function(N,Y,ae=null){const ie=this.compile(N,Y,ae);return new Promise(se=>{function Oe(){if(ie.forEach(function(ke){oe.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){se(N);return}setTimeout(Oe,10)}Pt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ho=null;function us(N){ho&&ho(N)}function po(){Ji.stop()}function mo(){Ji.start()}const Ji=new yg;Ji.setAnimationLoop(us),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(N){ho=N,He.setAnimationLoop(N),N===null?Ji.stop():Ji.start()},He.addEventListener("sessionstart",po),He.addEventListener("sessionend",mo),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(N,Y);const ae=He.enabled===!0&&He.isPresenting===!0,ie=A!==null&&(G===null||ae)&&A.begin(k,G);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(Y),Y=He.getCamera()),N.isScene===!0&&N.onBeforeRender(k,N,Y,G),R=Te.get(N,S.length),R.init(Y),R.state.textureUnits=he.getTextureUnits(),S.push(R),nt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),It.setFromProjectionMatrix(nt,Gi,Y.reversedDepth),rt=this.localClippingEnabled,Le=$e.init(this.clippingPlanes,rt),I=Ne.get(N,F.length),I.init(),F.push(I),He.enabled===!0&&He.isPresenting===!0){const ke=k.xr.getDepthSensingMesh();ke!==null&&Pn(ke,Y,-1/0,k.sortObjects)}Pn(N,Y,0,k.sortObjects),I.finish(),k.sortObjects===!0&&I.sort(je,Ye,Y.reversedDepth),ft=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ft&&Je.addToRenderList(I,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&$e.beginShadows();const se=R.state.shadowsArray;if(st.render(se,N,Y),Le===!0&&$e.endShadows(),(ie&&A.hasRenderPass())===!1){const ke=I.opaque,Ue=I.transmissive;if(R.setupLights(),Y.isArrayCamera){const Xe=Y.cameras;if(Ue.length>0)for(let Qe=0,Ge=Xe.length;Qe<Ge;Qe++){const at=Xe[Qe];_o(ke,Ue,N,at)}ft&&Je.render(N);for(let Qe=0,Ge=Xe.length;Qe<Ge;Qe++){const at=Xe[Qe];go(I,N,at,at.viewport)}}else Ue.length>0&&_o(ke,Ue,N,Y),ft&&Je.render(N),go(I,N,Y)}G!==null&&U===0&&(he.updateMultisampleRenderTarget(G),he.updateRenderTargetMipmap(G)),ie&&A.end(k),N.isScene===!0&&N.onAfterRender(k,N,Y),Ie.resetDefaultState(),K=-1,te=null,S.pop(),S.length>0?(R=S[S.length-1],he.setTextureUnits(R.state.textureUnits),Le===!0&&$e.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,z!==null&&z.renderEnd()};function Pn(N,Y,ae,ie){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLightProbeGrid)R.pushLightProbeGrid(N);else if(N.isLight)R.pushLight(N),N.castShadow&&R.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||It.intersectsSprite(N)){ie&&_t.setFromMatrixPosition(N.matrixWorld).applyMatrix4(nt);const ke=_e.update(N),Ue=N.material;Ue.visible&&I.push(N,ke,Ue,ae,_t.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||It.intersectsObject(N))){const ke=_e.update(N),Ue=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),_t.copy(N.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),_t.copy(ke.boundingSphere.center)),_t.applyMatrix4(N.matrixWorld).applyMatrix4(nt)),Array.isArray(Ue)){const Xe=ke.groups;for(let Qe=0,Ge=Xe.length;Qe<Ge;Qe++){const at=Xe[Qe],tt=Ue[at.materialIndex];tt&&tt.visible&&I.push(N,ke,tt,ae,_t.z,at)}}else Ue.visible&&I.push(N,ke,Ue,ae,_t.z,null)}}const Oe=N.children;for(let ke=0,Ue=Oe.length;ke<Ue;ke++)Pn(Oe[ke],Y,ae,ie)}function go(N,Y,ae,ie){const{opaque:se,transmissive:Oe,transparent:ke}=N;R.setupLightsView(ae),Le===!0&&$e.setGlobalState(k.clippingPlanes,ae),ie&&b.viewport(fe.copy(ie)),se.length>0&&Wn(se,Y,ae),Oe.length>0&&Wn(Oe,Y,ae),ke.length>0&&Wn(ke,Y,ae),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function _o(N,Y,ae,ie){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ie.id]===void 0){const tt=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ie.id]=new Xi(1,1,{generateMipmaps:!0,type:tt?dr:ni,minFilter:Jr,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Oe=R.state.transmissionRenderTarget[ie.id],ke=ie.viewport||fe;Oe.setSize(ke.z*k.transmissionResolutionScale,ke.w*k.transmissionResolutionScale);const Ue=k.getRenderTarget(),Xe=k.getActiveCubeFace(),Qe=k.getActiveMipmapLevel();k.setRenderTarget(Oe),k.getClearColor(pe),qe=k.getClearAlpha(),qe<1&&k.setClearColor(16777215,.5),k.clear(),ft&&Je.render(ae);const Ge=k.toneMapping;k.toneMapping=$i;const at=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),R.setupLightsView(ie),Le===!0&&$e.setGlobalState(k.clippingPlanes,ie),Wn(N,ae,ie),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let At=0,Zt=Y.length;At<Zt;At++){const Kt=Y[At],{object:Ft,geometry:on,material:Be,group:an}=Kt;if(Be.side===wi&&Ft.layers.test(ie.layers)){const xt=Be.side;Be.side=Hn,Be.needsUpdate=!0,xo(Ft,ae,ie,on,Be,an),Be.side=xt,Be.needsUpdate=!0,tt=!0}}tt===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}k.setRenderTarget(Ue,Xe,Qe),k.setClearColor(pe,qe),at!==void 0&&(ie.viewport=at),k.toneMapping=Ge}function Wn(N,Y,ae){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,Oe=N.length;se<Oe;se++){const ke=N[se],{object:Ue,geometry:Xe,group:Qe}=ke;let Ge=ke.material;Ge.allowOverride===!0&&ie!==null&&(Ge=ie),Ue.layers.test(ae.layers)&&xo(Ue,Y,ae,Xe,Ge,Qe)}}function xo(N,Y,ae,ie,se,Oe){N.onBeforeRender(k,Y,ae,ie,se,Oe),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),se.onBeforeRender(k,Y,ae,ie,N,Oe),se.transparent===!0&&se.side===wi&&se.forceSinglePass===!1?(se.side=Hn,se.needsUpdate=!0,k.renderBufferDirect(ae,Y,ie,se,N,Oe),se.side=Lr,se.needsUpdate=!0,k.renderBufferDirect(ae,Y,ie,se,N,Oe),se.side=wi):k.renderBufferDirect(ae,Y,ie,se,N,Oe),N.onAfterRender(k,Y,ae,ie,se,Oe)}function Fr(N,Y,ae){Y.isScene!==!0&&(Y=pt);const ie=oe.get(N),se=R.state.lights,Oe=R.state.shadowsArray,ke=se.state.version,Ue=we.getParameters(N,se.state,Oe,Y,ae,R.state.lightProbeGridArray),Xe=we.getProgramCacheKey(Ue);let Qe=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const Ge=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=Ae.get(N.envMap||ie.environment,Ge),ie.envMapRotation=ie.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,Qe===void 0&&(N.addEventListener("dispose",Kn),Qe=new Map,ie.programs=Qe);let at=Qe.get(Xe);if(at!==void 0){if(ie.currentProgram===at&&ie.lightsStateVersion===ke)return vo(N,Ue),at}else Ue.uniforms=we.getUniforms(N),z!==null&&N.isNodeMaterial&&z.build(N,ae,Ue),N.onBeforeCompile(Ue,k),at=we.acquireProgram(Ue,Xe),Qe.set(Xe,at),ie.uniforms=Ue.uniforms;const tt=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(tt.clippingPlanes=$e.uniform),vo(N,Ue),ie.needsLights=Vc(N),ie.lightsStateVersion=ke,ie.needsLights&&(tt.ambientLightColor.value=se.state.ambient,tt.lightProbe.value=se.state.probe,tt.directionalLights.value=se.state.directional,tt.directionalLightShadows.value=se.state.directionalShadow,tt.spotLights.value=se.state.spot,tt.spotLightShadows.value=se.state.spotShadow,tt.rectAreaLights.value=se.state.rectArea,tt.ltc_1.value=se.state.rectAreaLTC1,tt.ltc_2.value=se.state.rectAreaLTC2,tt.pointLights.value=se.state.point,tt.pointLightShadows.value=se.state.pointShadow,tt.hemisphereLights.value=se.state.hemi,tt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,tt.spotLightMatrix.value=se.state.spotLightMatrix,tt.spotLightMap.value=se.state.spotLightMap,tt.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.lightProbeGrid=R.state.lightProbeGridArray.length>0,ie.currentProgram=at,ie.uniformsList=null,at}function Qi(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Ml.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function vo(N,Y){const ae=oe.get(N);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function _a(N,Y){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;M.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,ie=N.length;ae<ie;ae++){const se=N[ae];if(se.texture!==null&&se.boundingBox.containsPoint(M))return se}return null}function vr(N,Y,ae,ie,se){Y.isScene!==!0&&(Y=pt),he.resetTextureUnits();const Oe=Y.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Ue=G===null?k.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Et.workingColorSpace,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Qe=Ae.get(ie.envMap||ke,Xe),Ge=ie.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),tt=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,Zt=!!ae.morphAttributes.color;let Kt=$i;ie.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Kt=k.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,on=Ft!==void 0?Ft.length:0,Be=oe.get(ie),an=R.state.lights;if(Le===!0&&(rt===!0||N!==te)){const Rt=N===te&&ie.id===K;$e.setState(ie,N,Rt)}let xt=!1;ie.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==an.state.version||Be.outputColorSpace!==Ue||se.isBatchedMesh&&Be.batching===!1||!se.isBatchedMesh&&Be.batching===!0||se.isBatchedMesh&&Be.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Be.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Be.instancing===!1||!se.isInstancedMesh&&Be.instancing===!0||se.isSkinnedMesh&&Be.skinning===!1||!se.isSkinnedMesh&&Be.skinning===!0||se.isInstancedMesh&&Be.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Be.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Be.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Be.instancingMorph===!1&&se.morphTexture!==null||Be.envMap!==Qe||ie.fog===!0&&Be.fog!==Oe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==$e.numPlanes||Be.numIntersection!==$e.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==at||Be.morphTargets!==tt||Be.morphNormals!==At||Be.morphColors!==Zt||Be.toneMapping!==Kt||Be.morphTargetsCount!==on||!!Be.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Be.__version=ie.version);let $n=Be.currentProgram;xt===!0&&($n=Fr(ie,Y,se),z&&ie.isNodeMaterial&&z.onUpdateProgram(ie,$n,Be));let oi=!1,Li=!1,xn=!1;const yt=$n.getUniforms(),Lt=Be.uniforms;if(b.useProgram($n.program)&&(oi=!0,Li=!0,xn=!0),ie.id!==K&&(K=ie.id,Li=!0),Be.needsLights){const Rt=_a(R.state.lightProbeGridArray,se);Be.lightProbeGrid!==Rt&&(Be.lightProbeGrid=Rt,Li=!0)}if(oi||te!==N){b.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),yt.setValue(q,"projectionMatrix",N.projectionMatrix),yt.setValue(q,"viewMatrix",N.matrixWorldInverse);const Dn=yt.map.cameraPosition;Dn!==void 0&&Dn.setValue(q,et.setFromMatrixPosition(N.matrixWorld)),V.logarithmicDepthBuffer&&yt.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&yt.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),te!==N&&(te=N,Li=!0,xn=!0)}if(Be.needsLights&&(an.state.directionalShadowMap.length>0&&yt.setValue(q,"directionalShadowMap",an.state.directionalShadowMap,he),an.state.spotShadowMap.length>0&&yt.setValue(q,"spotShadowMap",an.state.spotShadowMap,he),an.state.pointShadowMap.length>0&&yt.setValue(q,"pointShadowMap",an.state.pointShadowMap,he)),se.isSkinnedMesh){yt.setOptional(q,se,"bindMatrix"),yt.setOptional(q,se,"bindMatrixInverse");const Rt=se.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(q,"boneTexture",Rt.boneTexture,he))}se.isBatchedMesh&&(yt.setOptional(q,se,"batchingTexture"),yt.setValue(q,"batchingTexture",se._matricesTexture,he),yt.setOptional(q,se,"batchingIdTexture"),yt.setValue(q,"batchingIdTexture",se._indirectTexture,he),yt.setOptional(q,se,"batchingColorTexture"),se._colorsTexture!==null&&yt.setValue(q,"batchingColorTexture",se._colorsTexture,he));const In=ae.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&$.update(se,ae,$n),(Li||Be.receiveShadow!==se.receiveShadow)&&(Be.receiveShadow=se.receiveShadow,yt.setValue(q,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Lt.envMapIntensity.value=Y.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=f1()),Li){if(yt.setValue(q,"toneMappingExposure",k.toneMappingExposure),Be.needsLights&&_i(Lt,xn),Oe&&ie.fog===!0&&Ke.refreshFogUniforms(Lt,Oe),Ke.refreshMaterialUniforms(Lt,ie,ve,Ee,R.state.transmissionRenderTarget[N.id]),Be.needsLights&&Be.lightProbeGrid){const Rt=Be.lightProbeGrid;Lt.probesSH.value=Rt.texture,Lt.probesMin.value.copy(Rt.boundingBox.min),Lt.probesMax.value.copy(Rt.boundingBox.max),Lt.probesResolution.value.copy(Rt.resolution)}Ml.upload(q,Qi(Be),Lt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ml.upload(q,Qi(Be),Lt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&yt.setValue(q,"center",se.center),yt.setValue(q,"modelViewMatrix",se.modelViewMatrix),yt.setValue(q,"normalMatrix",se.normalMatrix),yt.setValue(q,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){const Rt=ie.uniformsGroups;for(let Dn=0,xi=Rt.length;Dn<xi;Dn++){const D=Rt[Dn];Se.update(D,$n),Se.bind(D,$n)}}return $n}function _i(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Vc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(N,Y,ae){const ie=oe.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),oe.get(N.texture).__webglTexture=Y,oe.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ae,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ae=oe.get(N);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,ae=0){G=N,L=Y,U=ae;let ie=null,se=!1,Oe=!1;if(N){const Ue=oe.get(N);if(Ue.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Ue.__webglFramebuffer),fe.copy(N.viewport),j.copy(N.scissor),ye=N.scissorTest,b.viewport(fe),b.scissor(j),b.setScissorTest(ye),K=-1;return}else if(Ue.__webglFramebuffer===void 0)he.setupRenderTarget(N);else if(Ue.__hasExternalTextures)he.rebindTextures(N,oe.get(N.texture).__webglTexture,oe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const Ge=N.depthTexture;if(Ue.__boundDepthTexture!==Ge){if(Ge!==null&&oe.has(Ge)&&(N.width!==Ge.image.width||N.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(N)}}const Xe=N.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Qe=oe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?ie=Qe[Y][ae]:ie=Qe[Y],se=!0):N.samples>0&&he.useMultisampledRTT(N)===!1?ie=oe.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[ae]:ie=Qe,fe.copy(N.viewport),j.copy(N.scissor),ye=N.scissorTest}else fe.copy(it).multiplyScalar(ve).floor(),j.copy(Ht).multiplyScalar(ve).floor(),ye=gt;if(ae!==0&&(ie=P),b.bindFramebuffer(q.FRAMEBUFFER,ie)&&b.drawBuffers(N,ie),b.viewport(fe),b.scissor(j),b.setScissorTest(ye),se){const Ue=oe.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ue.__webglTexture,ae)}else if(Oe){const Ue=Y;for(let Xe=0;Xe<N.textures.length;Xe++){const Qe=oe.get(N.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,Qe.__webglTexture,ae,Ue)}}else if(N!==null&&ae!==0){const Ue=oe.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ue.__webglTexture,ae)}K=-1},this.readRenderTargetPixels=function(N,Y,ae,ie,se,Oe,ke,Ue=0){if(!(N&&N.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=oe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){b.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const Qe=N.textures[Ue],Ge=Qe.format,at=Qe.type;if(N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ue),!V.textureFormatReadable(Ge)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(at)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ie&&ae>=0&&ae<=N.height-se&&q.readPixels(Y,ae,ie,se,Pe.convert(Ge),Pe.convert(at),Oe)}finally{const Qe=G!==null?oe.get(G).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ae,ie,se,Oe,ke,Ue=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=oe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(Y>=0&&Y<=N.width-ie&&ae>=0&&ae<=N.height-se){b.bindFramebuffer(q.FRAMEBUFFER,Xe);const Qe=N.textures[Ue],Ge=Qe.format,at=Qe.type;if(N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ue),!V.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,tt),q.bufferData(q.PIXEL_PACK_BUFFER,Oe.byteLength,q.STREAM_READ),q.readPixels(Y,ae,ie,se,Pe.convert(Ge),Pe.convert(at),0);const At=G!==null?oe.get(G).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,At);const Zt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await ov(q,Zt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,tt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Oe),q.deleteBuffer(tt),q.deleteSync(Zt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ae=0){const ie=Math.pow(2,-ae),se=Math.floor(N.image.width*ie),Oe=Math.floor(N.image.height*ie),ke=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;he.setTexture2D(N,0),q.copyTexSubImage2D(q.TEXTURE_2D,ae,0,0,ke,Ue,se,Oe),b.unbindTexture()},this.copyTextureToTexture=function(N,Y,ae=null,ie=null,se=0,Oe=0){let ke,Ue,Xe,Qe,Ge,at,tt,At,Zt;const Kt=N.isCompressedTexture?N.mipmaps[Oe]:N.image;if(ae!==null)ke=ae.max.x-ae.min.x,Ue=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,Ge=ae.min.y,at=ae.isBox3?ae.min.z:0;else{const Lt=Math.pow(2,-se);ke=Math.floor(Kt.width*Lt),Ue=Math.floor(Kt.height*Lt),N.isDataArrayTexture?Xe=Kt.depth:N.isData3DTexture?Xe=Math.floor(Kt.depth*Lt):Xe=1,Qe=0,Ge=0,at=0}ie!==null?(tt=ie.x,At=ie.y,Zt=ie.z):(tt=0,At=0,Zt=0);const Ft=Pe.convert(Y.format),on=Pe.convert(Y.type);let Be;Y.isData3DTexture?(he.setTexture3D(Y,0),Be=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(he.setTexture2DArray(Y,0),Be=q.TEXTURE_2D_ARRAY):(he.setTexture2D(Y,0),Be=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const an=b.getParameter(q.UNPACK_ROW_LENGTH),xt=b.getParameter(q.UNPACK_IMAGE_HEIGHT),$n=b.getParameter(q.UNPACK_SKIP_PIXELS),oi=b.getParameter(q.UNPACK_SKIP_ROWS),Li=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,Kt.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Kt.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,Qe),b.pixelStorei(q.UNPACK_SKIP_ROWS,Ge),b.pixelStorei(q.UNPACK_SKIP_IMAGES,at);const xn=N.isDataArrayTexture||N.isData3DTexture,yt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const Lt=oe.get(N),In=oe.get(Y),Rt=oe.get(Lt.__renderTarget),Dn=oe.get(In.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,Rt.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let xi=0;xi<Xe;xi++)xn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,oe.get(N).__webglTexture,se,at+xi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,Oe,Zt+xi)),q.blitFramebuffer(Qe,Ge,ke,Ue,tt,At,ke,Ue,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(se!==0||N.isRenderTargetTexture||oe.has(N)){const Lt=oe.get(N),In=oe.get(Y);b.bindFramebuffer(q.READ_FRAMEBUFFER,O),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,E);for(let Rt=0;Rt<Xe;Rt++)xn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Lt.__webglTexture,se,at+Rt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Lt.__webglTexture,se),yt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,In.__webglTexture,Oe,Zt+Rt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,In.__webglTexture,Oe),se!==0?q.blitFramebuffer(Qe,Ge,ke,Ue,tt,At,ke,Ue,q.COLOR_BUFFER_BIT,q.NEAREST):yt?q.copyTexSubImage3D(Be,Oe,tt,At,Zt+Rt,Qe,Ge,ke,Ue):q.copyTexSubImage2D(Be,Oe,tt,At,Qe,Ge,ke,Ue);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else yt?N.isDataTexture||N.isData3DTexture?q.texSubImage3D(Be,Oe,tt,At,Zt,ke,Ue,Xe,Ft,on,Kt.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Be,Oe,tt,At,Zt,ke,Ue,Xe,Ft,Kt.data):q.texSubImage3D(Be,Oe,tt,At,Zt,ke,Ue,Xe,Ft,on,Kt):N.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Oe,tt,At,ke,Ue,Ft,on,Kt.data):N.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Oe,tt,At,Kt.width,Kt.height,Ft,Kt.data):q.texSubImage2D(q.TEXTURE_2D,Oe,tt,At,ke,Ue,Ft,on,Kt);b.pixelStorei(q.UNPACK_ROW_LENGTH,an),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(q.UNPACK_SKIP_PIXELS,$n),b.pixelStorei(q.UNPACK_SKIP_ROWS,oi),b.pixelStorei(q.UNPACK_SKIP_IMAGES,Li),Oe===0&&Y.generateMipmaps&&q.generateMipmap(Be),b.unbindTexture()},this.initRenderTarget=function(N){oe.get(N).__webglFramebuffer===void 0&&he.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?he.setTextureCube(N,0):N.isData3DTexture?he.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?he.setTexture2DArray(N,0):he.setTexture2D(N,0),b.unbindTexture()},this.resetState=function(){L=0,U=0,G=null,b.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const $u=100,Ic=6371,Rg=1800,Xu={relaxed:{name:"Relaxed",worldSpeedScale:1200},normal:{name:"Normal",worldSpeedScale:1800},fast:{name:"Fast",worldSpeedScale:2700}},to=400,Kh=1600,h1=400,d1=45,Ap=40,p1=32,m1=16,Rp=10,wf=.6,g1=3,Ds=1.6,Cp=60,Pp=500,Cg=3,_1=1.5,x1=4,Ip="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Dp=20,v1=1,y1=6,S1=120,M1=700,Zh=2,E1=1.6,b1=.55,w1={throttle:-1,turn:.6,pitch:-.3,barrelRoll:0,loop:0},T1=.3,A1=6,R1={kids:{continent:10,compass:20,outline:35},normal:{continent:15,compass:30,outline:45},expert:{continent:20,compass:-1,outline:40}};function C1(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function P1(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Lp(n[0])||!Lp(n[1]))throw new Error("coordinates must contain numbers");return C1({type:"Point",coordinates:n},e,t)}function Lp(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function Pg(n,e,t){if(n!==null)for(var i,r,s,o,a,c,l,h=0,f=0,u,p=n.type,m=p==="FeatureCollection",v=p==="Feature",_=m?n.features.length:1,x=0;x<_;x++){l=m?n.features[x].geometry:v?n.geometry:n,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1;for(var T=0;T<a;T++){var C=0,M=0;if(o=u?l.geometries[T]:l,o!==null){c=o.coordinates;var I=o.type;switch(h=0,I){case null:break;case"Point":if(e(c,f,x,C,M)===!1)return!1;f++,C++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],f,x,C,M)===!1)return!1;f++,I==="MultiPoint"&&C++}I==="LineString"&&C++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-h;r++){if(e(c[i][r],f,x,C,M)===!1)return!1;f++}I==="MultiLineString"&&C++,I==="Polygon"&&M++}I==="Polygon"&&C++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(M=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-h;s++){if(e(c[i][r][s],f,x,C,M)===!1)return!1;f++}M++}C++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(Pg(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function I1(n,e={}){if(n.bbox!=null&&e.recompute!==!0)return n.bbox;const t=[1/0,1/0,-1/0,-1/0];return Pg(n,i=>{t[0]>i[0]&&(t[0]=i[0]),t[1]>i[1]&&(t[1]=i[1]),t[2]<i[0]&&(t[2]=i[0]),t[3]<i[1]&&(t[3]=i[1])}),t}var D1=I1;const fr=11102230246251565e-32,wn=134217729,L1=(3+8*fr)*fr;function Tf(n,e,t,i,r){let s,o,a,c,l=e[0],h=i[0],f=0,u=0;h>l==h>-l?(s=l,l=e[++f]):(s=h,h=i[++u]);let p=0;if(f<n&&u<t)for(h>l==h>-l?(o=l+s,a=s-(o-l),l=e[++f]):(o=h+s,a=s-(o-h),h=i[++u]),s=o,a!==0&&(r[p++]=a);f<n&&u<t;)h>l==h>-l?(o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f]):(o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u]),s=o,a!==0&&(r[p++]=a);for(;f<n;)o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f],s=o,a!==0&&(r[p++]=a);for(;u<t;)o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u],s=o,a!==0&&(r[p++]=a);return(s!==0||p===0)&&(r[p++]=s),p}function N1(n,e){let t=e[0];for(let i=1;i<n;i++)t+=e[i];return t}function ha(n){return new Float64Array(n)}const O1=(3+16*fr)*fr,U1=(2+12*fr)*fr,F1=(9+64*fr)*fr*fr,Ls=ha(4),Np=ha(8),Op=ha(12),Up=ha(16),On=ha(4);function B1(n,e,t,i,r,s,o){let a,c,l,h,f,u,p,m,v,_,x,T,C,M,I,R,F,S;const A=n-r,k=t-r,B=e-s,z=i-s;M=A*z,u=wn*A,p=u-(u-A),m=A-p,u=wn*z,v=u-(u-z),_=z-v,I=m*_-(M-p*v-m*v-p*_),R=B*k,u=wn*B,p=u-(u-B),m=B-p,u=wn*k,v=u-(u-k),_=k-v,F=m*_-(R-p*v-m*v-p*_),x=I-F,f=I-x,Ls[0]=I-(x+f)+(f-F),T=M+x,f=T-M,C=M-(T-f)+(x-f),x=C-R,f=C-x,Ls[1]=C-(x+f)+(f-R),S=T+x,f=S-T,Ls[2]=T-(S-f)+(x-f),Ls[3]=S;let P=N1(4,Ls),O=U1*o;if(P>=O||-P>=O||(f=n-A,a=n-(A+f)+(f-r),f=t-k,l=t-(k+f)+(f-r),f=e-B,c=e-(B+f)+(f-s),f=i-z,h=i-(z+f)+(f-s),a===0&&c===0&&l===0&&h===0)||(O=F1*o+L1*Math.abs(P),P+=A*h+z*a-(B*l+k*c),P>=O||-P>=O))return P;M=a*z,u=wn*a,p=u-(u-a),m=a-p,u=wn*z,v=u-(u-z),_=z-v,I=m*_-(M-p*v-m*v-p*_),R=c*k,u=wn*c,p=u-(u-c),m=c-p,u=wn*k,v=u-(u-k),_=k-v,F=m*_-(R-p*v-m*v-p*_),x=I-F,f=I-x,On[0]=I-(x+f)+(f-F),T=M+x,f=T-M,C=M-(T-f)+(x-f),x=C-R,f=C-x,On[1]=C-(x+f)+(f-R),S=T+x,f=S-T,On[2]=T-(S-f)+(x-f),On[3]=S;const E=Tf(4,Ls,4,On,Np);M=A*h,u=wn*A,p=u-(u-A),m=A-p,u=wn*h,v=u-(u-h),_=h-v,I=m*_-(M-p*v-m*v-p*_),R=B*l,u=wn*B,p=u-(u-B),m=B-p,u=wn*l,v=u-(u-l),_=l-v,F=m*_-(R-p*v-m*v-p*_),x=I-F,f=I-x,On[0]=I-(x+f)+(f-F),T=M+x,f=T-M,C=M-(T-f)+(x-f),x=C-R,f=C-x,On[1]=C-(x+f)+(f-R),S=T+x,f=S-T,On[2]=T-(S-f)+(x-f),On[3]=S;const L=Tf(E,Np,4,On,Op);M=a*h,u=wn*a,p=u-(u-a),m=a-p,u=wn*h,v=u-(u-h),_=h-v,I=m*_-(M-p*v-m*v-p*_),R=c*l,u=wn*c,p=u-(u-c),m=c-p,u=wn*l,v=u-(u-l),_=l-v,F=m*_-(R-p*v-m*v-p*_),x=I-F,f=I-x,On[0]=I-(x+f)+(f-F),T=M+x,f=T-M,C=M-(T-f)+(x-f),x=C-R,f=C-x,On[1]=C-(x+f)+(f-R),S=T+x,f=S-T,On[2]=T-(S-f)+(x-f),On[3]=S;const U=Tf(L,Op,4,On,Up);return Up[U-1]}function Ho(n,e,t,i,r,s){const o=(e-s)*(t-r),a=(n-r)*(i-s),c=o-a,l=Math.abs(o+a);return Math.abs(c)>=O1*l?c:-B1(n,e,t,i,r,s,l)}function z1(n,e){var t,i,r=0,s,o,a,c,l,h,f,u=n[0],p=n[1],m=e.length;for(t=0;t<m;t++){i=0;var v=e[t],_=v.length-1;if(h=v[0],h[0]!==v[_][0]&&h[1]!==v[_][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-u,a=h[1]-p,i;i<_;i++){if(f=v[i+1],c=f[0]-u,l=f[1]-p,a===0&&l===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(l>=0&&a<=0||l<=0&&a>=0){if(s=Ho(o,c,a,l,0,0),s===0)return 0;(s>0&&l>0&&a<=0||s<0&&l<=0&&a>0)&&r++}h=f,a=l,o=c}}return r%2!==0}function k1(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return[...n.geometry.coordinates];if(n.type==="Point")return[...n.coordinates]}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return[...n];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function V1(n){return n.type==="Feature"?n.geometry:n}function H1(n,e,t={}){if(!n)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=k1(n),r=V1(e),s=r.type,o=e.bbox;let a=r.coordinates;if(o&&G1(i,o)===!1)return!1;s==="Polygon"&&(a=[a]);let c=!1;for(var l=0;l<a.length;++l){const h=z1(i,a[l]);if(h===0)return!t.ignoreBoundary;h&&(c=!0)}return c}function G1(n,e){return e[0]<=n[0]&&e[1]<=n[1]&&e[2]>=n[0]&&e[3]>=n[1]}var Ig=H1;function W1(n){const e=n.features.map(t=>({id:t.properties.id,box:D1(t),feature:t}));return{findCountryAt(t,i){const r=P1([i,t]);for(const{id:s,box:o,feature:a}of e)if(!(i<o[0]||i>o[2]||t<o[1]||t>o[3])&&Ig(r,a))return s;return null}}}function $1(n){let e=0,t=0;for(let r=0;r<n.length-1;r++){const s=n[r],o=n[r+1];e+=s[0]*o[1]-o[0]*s[1],t+=s[1]}const i=t/Math.max(1,n.length-1);return Math.abs(e)*Math.cos(i*Math.PI/180)}function X1(n){const e=n.type==="Polygon"?[n.coordinates]:n.coordinates;let t=null,i=-1;for(const c of e){const l=c[0];if(!l)continue;const h=$1(l);h>i&&(i=h,t=l)}if(!t)throw new Error("geometry has no rings");let r=1/0,s=-1/0,o=1/0,a=-1/0;for(const c of t)r=Math.min(r,c[0]),s=Math.max(s,c[0]),o=Math.min(o,c[1]),a=Math.max(a,c[1]);return{lat:(o+a)/2,lon:(r+s)/2,widthDeg:s-r}}const jr=Math.PI/180;function q1(n){return(n+540)%360-180}function Hl(n,e,t,i){const r=i/Ic,s=t*jr,o=n*jr,a=e*jr,c=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),l=Math.asin(c),h=a+Math.atan2(Math.sin(s)*Math.sin(r)*Math.cos(o),Math.cos(r)-Math.sin(o)*c);return{lat:l/jr,lon:q1(h/jr)}}function Bn(n,e,t){const i=$u*(1+t/Ic),r=n*jr,s=e*jr;return{x:i*Math.cos(r)*Math.sin(s),y:i*Math.sin(r),z:i*Math.cos(r)*Math.cos(s)}}const Ns=(n,e,t)=>Math.min(t,Math.max(e,n)),Hr=n=>(n+540)%360-180,Io=Math.PI/180,jh={speedScale:1,turnScale:1,climbScale:1},zs={seaplane:{name:"Seaplane",blurb:"Balanced all-rounder",emoji:"🛩️",tuning:jh},stunt:{name:"Stunt Plane",blurb:"Nippy turns, lower top speed",emoji:"🎪",tuning:{speedScale:.9,turnScale:1.3,climbScale:1.15}},jet:{name:"Jet",blurb:"Fast in a straight line, wide turns",emoji:"🚀",tuning:{speedScale:1.2,turnScale:.75,climbScale:1}},lifter:{name:"Cargo Lifter",blurb:"Steady climber, a little sluggish",emoji:"📦",tuning:{speedScale:.95,turnScale:.9,climbScale:1.25}}};function Y1(){return{lat:48.8566,lon:2.3522,altKm:200,headingDeg:270,pitchDeg:0,rollDeg:0,barrelRollS:0,loopS:0,speedKmh:800}}function K1(n,e,t,i=jh,r=Rg){const s=Ns(e.throttle,-1,1),o=Ns(e.turn,-1,1),a=Ns(e.pitch,-1,1),c=Math.sign(e.barrelRoll??0),l=(e.loop??0)!==0;let h=n.barrelRollS,f=n.loopS;const u=h!==0||f!==0;!u&&c!==0?h=wf*c:!u&&l&&(f=Ds);const p=Math.sign(h),m=Math.min(Math.abs(h),t);h=p*Math.max(0,Math.abs(h)-t);const v=Math.min(f,t);f=Math.max(0,f-t);const _=v>0,x=_&&f===0,T=_?180*(Ds-(f+v))/Ds:0,C=_?180*(Ds-f)/Ds:0;let M,I;if(_){M=x?0:Hr(C);const z=Ap*i.climbScale*Ds/Math.PI;I=Ns(n.altKm+z*(Math.cos(T*Io)-Math.cos(C*Io)),Cp,Pp)}else{const z=a*m1,P=Math.min(1,Rp*t);M=Hr(n.pitchDeg+Hr(z-n.pitchDeg)*P),I=Ns(n.altKm+a*Ap*i.climbScale*t,Cp,Pp)}let R;if(p!==0){const z=1-Math.abs(h)/wf;R=Hr(p*360*z)}else if(_)R=x?0:C>120?Hr((C-120)/60*180):0;else{const z=o*p1,P=Math.min(1,Rp*t);R=Hr(n.rollDeg+Hr(z-n.rollDeg)*P)}const F=Ns(n.speedKmh+s*h1*t,to,Kh*i.speedScale);let S=(n.headingDeg+o*d1*i.turnScale*t+360)%360;x&&(S=(S+180)%360);const A=_?(Math.cos(T*Io)+Math.cos(C*Io))/2:1,k=F/3600*r*t*A;let B=Hl(n.lat,n.lon,S,k);if(m>0&&p!==0){const z=g1*(m/wf)*Io*Ic;B=Hl(B.lat,B.lon,S+90*p,z)}return{lat:B.lat,lon:B.lon,altKm:I,headingDeg:S,pitchDeg:M,rollDeg:R,barrelRollS:h,loopS:f,speedKmh:F}}const Pr=Math.PI/180;function ea(n,e,t,i){const r=n*Pr,s=t*Pr,o=(i-e)*Pr;return Math.acos(Math.min(1,Math.max(-1,Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(o))))/Pr}function Af(n,e,t){const i=(e-n+540)%360-180;return(n+i*t+360)%360}function Dg(n,e,t,i){const r=n*Pr,s=t*Pr,o=(i-e)*Pr,a=Math.sin(o)*Math.cos(s),c=Math.cos(r)*Math.sin(s)-Math.sin(r)*Math.cos(s)*Math.cos(o);return(Math.atan2(a,c)/Pr+360)%360}function Z1(n=Math.random){let e="";for(let t=0;t<x1;t++){const i=Math.floor(n()*Ip.length);e+=Ip[i]??"A"}return e}function qu(n,e){const t=R1[e],i=r=>r>=0&&n>=r;return{continent:i(t.continent),compass:i(t.compass),outline:i(t.outline)}}function Lg(n,e,t,i){if(!(ea(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Cg))return{complete:!1,dwellS:0,inZone:!1,requirementBlocked:!1};switch(e.type){case"refuel":{const s=t+i;return{complete:s>=Zh,dwellS:s,inZone:!0,requirementBlocked:!1}}case"delivery":{const s=n.altKm<=S1;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}case"vip":{const s=n.speedKmh<=M1;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}default:return{complete:!0,dwellS:0,inZone:!0,requirementBlocked:!1}}}function j1(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const J1={kids:["easy"],normal:["easy","normal"],expert:["easy","normal","hard"]},Q1=["refuel","photo","riddle","vip"];function Ka(n,e){const t=n[Math.floor(e()*n.length)];if(t===void 0)throw new Error("pick() from empty list");return t}function ew(n,e,t){switch(n){case"pickup":return{label:`Pick up cargo in ${e.name}`,sublabel:"Fly through the beacon to skyhook the crate"};case"refuel":return{label:`Refuel in ${e.name}`,sublabel:"Hold inside the zone for 2 seconds to skim the fuel strip"};case"delivery":return{label:`Deliver the cargo to ${e.name}`,sublabel:"Fly LOW through the beacon to parachute-drop the crate"};case"vip":return{label:`Fly the VIP to ${e.name}`,sublabel:"Arrive gently — under 700 km/h — or they complain"};case"riddle":return{label:`Fly to ${t??"the mystery country"}`,sublabel:"Solve the riddle — which country is it?"};case"photo":return{label:"",sublabel:""}}}function tw(n,e,t,i){const r=Math.min(y1,Math.max(v1,i.legCount)),s=j1(i.seed),o=J1[i.difficulty],a=Object.values(n).filter(m=>m.playable&&o.includes(m.tier)).sort((m,v)=>m.id.localeCompare(v.id));if(a.length<r)throw new Error("Not enough countries for contract");const c=[];for(let m=0;m<r;m++)m===0?c.push("pickup"):m===r-1?c.push("delivery"):c.push(Ka(Q1,s));const l=new Set,h=new Set,f=[];let u=null,p=null;for(const m of c){let v=m,_=null;if(v==="photo"){const I=e.filter(R=>!h.has(R.name)&&n[R.countryId]!==void 0&&!l.has(R.countryId)&&(u===null||ea(u.lat,u.lon,R.lat,R.lon)>=Dp));I.length>0?(_=Ka(I,s),h.add(_.name)):v="riddle"}let x;if(_){const I=n[_.countryId];if(!I)throw new Error(`Landmark country missing: ${_.countryId}`);x=I}else{const I=a.filter(A=>!l.has(A.id)),R=u?I.filter(A=>ea(u.lat,u.lon,A.capital.lat,A.capital.lon)>=Dp):I,F=R.length>0?R:I,S=F.filter(A=>A.continent!==p);x=Ka(S.length>0?S:F,s)}l.add(x.id);const T=_?{lat:_.lat,lon:_.lon}:{lat:x.capital.lat,lon:x.capital.lon};let C,M;if(v==="photo"&&_)C=`Photograph ${_.name}`,M=`Fly through the camera ring in ${x.name}`;else{const I=v==="riddle"?(t[x.id]?Ka([...t[x.id]],s):null)??`the country whose capital is ${x.capital.name}`:null;({label:C,sublabel:M}=ew(v,x,I))}f.push({type:v,countryId:x.id,zone:T,label:C,sublabel:M}),u=T,p=x.continent}return{seed:i.seed,difficulty:i.difficulty,legs:f}}function Ng(n,e){return e.type!=="refuel"?null:ea(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Cg?to:null}const nw=.35,iw=.2,rw=(n,e)=>e<n.tumbleUntil;function sw(n,e){let t=1;return e<n.boostUntil&&(t*=E1),e<n.slowUntil&&(t*=b1),e<n.tumbleUntil&&(t*=nw),e<n.smokeUntil&&(t*=T1),Math.max(iw,t)}function El(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function ow(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Og(n){let e,t,i;n.length!==2?(e=El,t=(a,c)=>El(n(a),c),i=(a,c)=>n(a)-c):(e=n===El||n===ow?n:aw,t=n,i=n);function r(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function o(a,c,l=0,h=a.length){const f=r(a,c,l,h-1);return f>l&&i(a[f-1],c)>-i(a[f],c)?f-1:f}return{left:r,center:o,right:s}}function aw(){return 0}function lw(n){return n===null?NaN:+n}const cw=Og(El),fw=cw.right;Og(lw).center;function Gl(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)))}return[t,i]}class ur{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(t[i++]=a),e=o}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,o=0;if(t>0){for(o=e[--t];t>0&&(i=o,r=e[--t],o=i+r,s=r-(o-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}const uw=Math.sqrt(50),hw=Math.sqrt(10),dw=Math.sqrt(2);function Wl(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=uw?10:s>=hw?5:s>=dw?2:1;let a,c,l;return r<0?(l=Math.pow(10,-r)/o,a=Math.round(n*l),c=Math.round(e*l),a/l<n&&++a,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*o,a=Math.round(n/l),c=Math.round(e/l),a*l<n&&++a,c*l>e&&--c),c<a&&.5<=t&&t<2?Wl(n,e,t*2):[a,c,l]}function pw(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,o]=i?Wl(e,n,t):Wl(n,e,t);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(i)if(o<0)for(let l=0;l<a;++l)c[l]=(s-l)/-o;else for(let l=0;l<a;++l)c[l]=(s-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(r+l)/-o;else for(let l=0;l<a;++l)c[l]=(r+l)*o;return c}function Yu(n,e,t){return e=+e,n=+n,t=+t,Wl(n,e,t)[2]}function mw(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?Yu(e,n,t):Yu(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function gw(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(s=+s)>=s&&(++t,i+=s)}if(t)return i/t}function*_w(n){for(const e of n)yield*e}function ta(n){return Array.from(_w(n))}const na=new Set;let Ku=!1;function xw(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;na.size&&na.clear();let s=Ug(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a=0,c=0,l=0;if(i&&(s=Ew(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<r;u+=t){const p=n[u],m=n[u+1];p<a&&(a=p),m<c&&(c=m),p>h&&(h=p),m>f&&(f=m)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Zu(s,o,a,c,l),o}function Ug(n,e,t,i,r){let s=null;if(r===Uw(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=zp(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=zp(o/i|0,n[o],n[o+1],s);return s&&ia(s,s.next)&&(sa(s),s=s.next),s}function as(n,e=n){const t=e===n;let i=n,r;do r=!1,i!==i.next&&(na.size===0||!na.has(i))&&(ia(i,i.next)||cn(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),Ku=!0,sa(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function Zu(n,e,t,i,r){r&&Pw(n,t,i,r);let s=n,o=!1;for(;n.prev!==n.next;){const a=n.prev,c=n.next;if(cn(a,n,c)<0&&(r?yw(n,t,i,r):vw(n))){e.push(a.i,n.i,c.i),sa(n),n=c,s=c;continue}if(n=c,n===s){if(Ku=!1,n=as(n),Ku){s=n;continue}if(!o){n=Sw(n,e),s=n,o=!0;continue}Mw(n,e,t,i,r);break}}}function vw(n){const e=n.prev,t=n,i=n.next,r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),p=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=p&&!(r===m.x&&a===m.y)&&Xl(r,a,s,c,o,l,m.x,m.y)&&cn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yw(n,e,t,i){const r=n.prev,s=n,o=n.next,a=r.x,c=s.x,l=o.x,h=r.y,f=s.y,u=o.y,p=Math.min(a,c,l),m=Math.min(h,f,u),v=Math.max(a,c,l),_=Math.max(h,f,u),x=eh(p,m,e,t,i),T=eh(v,_,e,t,i);let C=n.prevZ;for(;C&&C.z>=x;){if(C.x>=p&&C.x<=v&&C.y>=m&&C.y<=_&&C!==o&&!(a===C.x&&h===C.y)&&Xl(a,h,c,f,l,u,C.x,C.y)&&cn(C.prev,C,C.next)>=0)return!1;C=C.prevZ}let M=n.nextZ;for(;M&&M.z<=T;){if(M.x>=p&&M.x<=v&&M.y>=m&&M.y<=_&&M!==o&&!(a===M.x&&h===M.y)&&Xl(a,h,c,f,l,u,M.x,M.y)&&cn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Sw(n,e){let t=n,i=!1;do{const r=t.prev,s=t.next.next;zg(r,t,t.next,s,!1)&&ra(r,s)&&ra(s,r)&&(e.push(r.i,t.i,s.i),sa(t),sa(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?as(t):t}function Mw(n,e,t,i,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Lw(s,o)){let a=kg(s,o);s=as(s,s.next),a=as(a,a.next),Zu(s,e,t,i,r),Zu(a,e,t,i,r);return}o=o.next}s=s.next}while(s!==n)}let ju=!1;function Ew(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Ug(n,a,c,i,!1);l===l.next&&na.add(l),r.push(Dw(l))}r.sort(bw),Tw(n.length/i,e.length),Bg(t,t),ju=!0;for(let s=0;s<r.length;s++)t=ww(r[s],t);return ju=!1,as(t)}function bw(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function ww(n,e){const t=Rw(n,e);if(!t)return e;const i=kg(t,n),r=i.next;return Bg(t,r.next),as(i,i.next),as(t,t.next)}const Fg=16;let tn=new Float64Array(0),$l=0;const Ju=[],Qu=[];function Tw(n,e){const t=Math.ceil((n+2*e)/Fg)+e+2;tn.length<t*4&&(tn=new Float64Array(t*4)),$l=0}function Bg(n,e){let t=n;do{const i=$l++;Ju[i]=t;let r=1/0,s=1/0,o=-1/0,a=-1/0,c=0;do{const h=t.next;t.z=i,t.x<r&&(r=t.x),t.x>o&&(o=t.x),t.y<s&&(s=t.y),t.y>a&&(a=t.y),h.x<r&&(r=h.x),h.x>o&&(o=h.x),h.y<s&&(s=h.y),h.y>a&&(a=h.y),t=h}while(++c<Fg&&t!==e);Qu[i]=t;const l=i*4;tn[l]=r,tn[l+1]=s,tn[l+2]=o,tn[l+3]=a}while(t!==e)}function Aw(n,e){const t=n.z*4;e.x<tn[t]&&(tn[t]=e.x),e.y<tn[t+1]&&(tn[t+1]=e.y),e.x>tn[t+2]&&(tn[t+2]=e.x),e.y>tn[t+3]&&(tn[t+3]=e.y)}function Fp(n){let e=Qu[n];for(;e.prev.next!==e;)e=e.next;return Qu[n]=e,e}function Bp(n){let e=Ju[n];for(;e.prev.next!==e;)e=e.next;return Ju[n]=e,e}function Rw(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ia(n,t))return t;for(let u=0,p=0;u<$l;u++,p+=4){if(r<tn[p+1]||r>tn[p+3]||tn[p]>i||tn[p+2]<=s)continue;const m=Fp(u);t=Bp(u);do{if(t.prev.next===t){if(ia(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const v=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=i&&v>s&&(s=v,o=t.x<t.next.x?t:t.next,v===i))return o}}t=t.next}while(t!==m)}if(!o)return null;const a=o.x,c=o.y,l=Math.min(r,c),h=Math.max(r,c);let f=1/0;for(let u=0,p=0;u<$l;u++,p+=4){if(tn[p+2]<a||tn[p]>i||tn[p+3]<l||tn[p+1]>h)continue;const m=Fp(u);t=Bp(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=a&&i!==t.x&&Xl(r<c?i:s,r,a,c,r<c?s:i,r,t.x,t.y)){const v=Math.abs(r-t.y)/(i-t.x);(ra(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(v<f||v===f&&(t.x>o.x||t.x===o.x&&Cw(o,t)))&&(o=t,f=v)}t=t.next}while(t!==m)}return o}function Cw(n,e){return cn(n.prev,n,e.prev)<0&&cn(e.next,n,n.next)<0}const ci=[];let Do=[],Gr=new Uint32Array(0),Lo=new Uint32Array(0);const No=new Uint32Array(256);function Pw(n,e,t,i){let r=n,s=0;do r.z=eh(r.x,r.y,e,t,i),ci[s++]=r,r=r.next;while(r!==n);Iw(s);let o=null;for(let a=0;a<s;a++){const c=ci[a];c.prevZ=o,o&&(o.nextZ=c),o=c}o.nextZ=null}function Iw(n){if(n<=32){for(let e=1;e<n;e++){const t=ci[e],i=t.z;let r=e-1;for(;r>=0&&ci[r].z>i;)ci[r+1]=ci[r],r--;ci[r+1]=t}return}Gr.length<n&&(Gr=new Uint32Array(n),Lo=new Uint32Array(n),Do=new Array(n));for(let e=0;e<n;e++)Gr[e]=ci[e].z;Za(n,ci,Gr,Do,Lo,0),Za(n,Do,Lo,ci,Gr,8),Za(n,ci,Gr,Do,Lo,16),Za(n,Do,Lo,ci,Gr,24)}function Za(n,e,t,i,r,s){No.fill(0);for(let a=0;a<n;a++)No[t[a]>>>s&255]++;let o=0;for(let a=0;a<256;a++){const c=No[a];No[a]=o,o+=c}for(let a=0;a<n;a++){const c=t[a],l=No[c>>>s&255]++;i[l]=e[a],r[l]=c}}function eh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Dw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xl(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Lw(n,e){const t=ia(n,e)&&cn(n.prev,n,n.next)>0&&cn(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||ra(n,e)&&ra(e,n)&&(cn(n.prev,n,e.prev)!==0||cn(n,e.prev,e)!==0))&&!Nw(n,e)&&(t||Ow(n,e))}function cn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ia(n,e){return n.x===e.x&&n.y===e.y}function zg(n,e,t,i,r=!0){const s=cn(n,e,t),o=cn(n,e,i),a=cn(t,i,n),c=cn(t,i,e);return(s>0&&o<0||s<0&&o>0)&&(a>0&&c<0||a<0&&c>0)?!0:r?!!(s===0&&ja(n,t,e)||o===0&&ja(n,i,e)||a===0&&ja(t,n,i)||c===0&&ja(t,e,i)):!1}function ja(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Nw(n,e){const t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y);let o=n;do{const a=o.next;if(o.x>i&&a.x>i||o.x<t&&a.x<t||o.y>s&&a.y>s||o.y<r&&a.y<r){o=a;continue}if(o.i!==n.i&&a.i!==n.i&&o.i!==e.i&&a.i!==e.i&&zg(o,a,n,e))return!0;o=a}while(o!==n);return!1}function ra(n,e){return cn(n.prev,n,n.next)<0?cn(n,e,n.next)>=0&&cn(n,n.prev,e)>=0:cn(n,e,n.prev)<0||cn(n,n.next,e)<0}function Ow(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{const o=t.next;t.y>s!=o.y>s&&r<(o.x-t.x)*(s-t.y)/(o.y-t.y)+t.x&&(i=!i),t=o}while(t!==n);return i}function kg(n,e){const t=th(n.i,n.x,n.y),i=th(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function zp(n,e,t,i){const r=th(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),ju&&Aw(n.prev,n.next)}function th(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function Uw(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function Vg(n){const e=[],t=[],i=n[0][0].length;let r=0,s=0;for(const o of n){for(const a of o)for(let c=0;c<i;c++)e.push(a[c]);s&&(r+=s,t.push(r)),s=o.length}return{vertices:e,holes:t,dimensions:i}}const kp=Math.pow(2,-52),Ja=new Uint32Array(512);class oa{static from(e,t=Vw,i=Hw){const r=e.length,s=new Float64Array(r*2);for(let o=0;o<r;o++){const a=e[o];s[2*o]=t(a),s[2*o+1]=i(a)}return new oa(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:r,_hullHash:s}=this,o=e.length>>1;let a=1/0,c=1/0,l=-1/0,h=-1/0;for(let A=0;A<o;A++){const k=e[2*A],B=e[2*A+1];k<a&&(a=k),B<c&&(c=B),k>l&&(l=k),B>h&&(h=B),this._ids[A]=A}const f=(a+l)/2,u=(c+h)/2;let p=0,m=0,v=0;for(let A=0,k=1/0;A<o;A++){const B=Rf(f,u,e[2*A],e[2*A+1]);B<k&&(p=A,k=B)}const _=e[2*p],x=e[2*p+1];for(let A=0,k=1/0;A<o;A++){if(A===p)continue;const B=Rf(_,x,e[2*A],e[2*A+1]);B<k&&B>0&&(m=A,k=B)}let T=e[2*m],C=e[2*m+1],M=1/0;for(let A=0;A<o;A++){if(A===p||A===m)continue;const k=zw(_,x,T,C,e[2*A],e[2*A+1]);k<M&&(v=A,M=k)}let I=e[2*v],R=e[2*v+1];if(M===1/0){for(let B=0;B<o;B++)this._dists[B]=e[2*B]-e[0]||e[2*B+1]-e[1];Vs(this._ids,this._dists,0,o-1);const A=new Uint32Array(o);let k=0;for(let B=0,z=-1/0;B<o;B++){const P=this._ids[B],O=this._dists[P];O>z&&(A[k++]=P,z=O)}this.hull=A.subarray(0,k),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(Ho(_,x,T,C,I,R)<0){const A=m,k=T,B=C;m=v,T=I,C=R,v=A,I=k,R=B}const F=kw(_,x,T,C,I,R);this._cx=F.x,this._cy=F.y;for(let A=0;A<o;A++)this._dists[A]=Rf(e[2*A],e[2*A+1],F.x,F.y);Vs(this._ids,this._dists,0,o-1),this._hullStart=p;let S=3;i[p]=t[v]=m,i[m]=t[p]=v,i[v]=t[m]=p,r[p]=0,r[m]=1,r[v]=2,s.fill(-1),s[this._hashKey(_,x)]=p,s[this._hashKey(T,C)]=m,s[this._hashKey(I,R)]=v,this.trianglesLen=0,this._addTriangle(p,m,v,-1,-1,-1);for(let A=0,k=0,B=0;A<this._ids.length;A++){const z=this._ids[A],P=e[2*z],O=e[2*z+1];if(A>0&&Math.abs(P-k)<=kp&&Math.abs(O-B)<=kp||(k=P,B=O,z===p||z===m||z===v))continue;let E=0;for(let te=0,fe=this._hashKey(P,O);te<this._hashSize&&(E=s[(fe+te)%this._hashSize],!(E!==-1&&E!==i[E]));te++);E=t[E];let L=E,U;for(;U=i[L],Ho(P,O,e[2*L],e[2*L+1],e[2*U],e[2*U+1])>=0;)if(L=U,L===E){L=-1;break}if(L===-1)continue;let G=this._addTriangle(L,z,i[L],-1,-1,r[L]);r[z]=this._legalize(G+2),r[L]=G,S++;let K=i[L];for(;U=i[K],Ho(P,O,e[2*K],e[2*K+1],e[2*U],e[2*U+1])<0;)G=this._addTriangle(K,z,U,r[z],-1,r[K]),r[z]=this._legalize(G+2),i[K]=K,S--,K=U;if(L===E)for(;U=t[L],Ho(P,O,e[2*U],e[2*U+1],e[2*L],e[2*L+1])<0;)G=this._addTriangle(U,z,L,-1,r[L],r[U]),this._legalize(G+2),r[U]=G,i[L]=L,S--,L=U;this._hullStart=t[z]=L,i[L]=t[K]=z,i[z]=K,s[this._hashKey(P,O)]=z,s[this._hashKey(e[2*L],e[2*L+1])]=L}this.hull=new Uint32Array(S);for(let A=0,k=this._hullStart;A<S;A++)this.hull[A]=k,k=i[k];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(Fw(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:r}=this;let s=0,o=0;for(;;){const a=i[e],c=e-e%3;if(o=c+(e+2)%3,a===-1){if(s===0)break;e=Ja[--s];continue}const l=a-a%3,h=c+(e+1)%3,f=l+(a+2)%3,u=t[o],p=t[e],m=t[h],v=t[f];if(Bw(r[2*u],r[2*u+1],r[2*p],r[2*p+1],r[2*m],r[2*m+1],r[2*v],r[2*v+1])){t[e]=v,t[a]=u;const x=i[f];if(x===-1){let C=this._hullStart;do{if(this._hullTri[C]===f){this._hullTri[C]=e;break}C=this._hullPrev[C]}while(C!==this._hullStart)}this._link(e,x),this._link(a,i[o]),this._link(o,f);const T=l+(a+1)%3;s<Ja.length&&(Ja[s++]=T)}else{if(s===0)break;e=Ja[--s]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,r,s,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,r),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function Fw(n,e){const t=n/(Math.abs(n)+Math.abs(e));return(e>0?3-t:1+t)/4}function Rf(n,e,t,i){const r=n-t,s=e-i;return r*r+s*s}function Bw(n,e,t,i,r,s,o,a){const c=n-o,l=e-a,h=t-o,f=i-a,u=r-o,p=s-a,m=c*c+l*l,v=h*h+f*f,_=u*u+p*p;return c*(f*_-v*p)-l*(h*_-v*u)+m*(h*p-f*u)<0}function zw(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=(l*h-a*f)*u,m=(o*f-c*h)*u;return p*p+m*m}function kw(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=n+(l*h-a*f)*u,m=e+(o*f-c*h)*u;return{x:p,y:m}}function Vs(n,e,t,i){if(i-t<=20)for(let r=t+1;r<=i;r++){const s=n[r],o=e[s];let a=r-1;for(;a>=t&&e[n[a]]>o;)n[a+1]=n[a--];n[a+1]=s}else{const r=t+i>>1;let s=t+1,o=i;Oo(n,r,s),e[n[t]]>e[n[i]]&&Oo(n,t,i),e[n[s]]>e[n[i]]&&Oo(n,s,i),e[n[t]]>e[n[s]]&&Oo(n,t,s);const a=n[s],c=e[a];for(;;){do s++;while(e[n[s]]<c);do o--;while(e[n[o]]>c);if(o<s)break;Oo(n,s,o)}n[t+1]=n[o],n[o]=a,i-s+1>=o-t?(Vs(n,e,s,i),Vs(n,e,t,o-1)):(Vs(n,e,t,o-1),Vs(n,e,s,i))}}function Oo(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function Vw(n){return n[0]}function Hw(n){return n[1]}var Ot=1e-6,ql=1e-12,Ct=Math.PI,pi=Ct/2,Yl=Ct/4,si=Ct*2,en=180/Ct,ct=Ct/180,Xt=Math.abs,Hg=Math.atan,gi=Math.atan2,ht=Math.cos,nh=Math.hypot,lt=Math.sin,Gw=Math.sign||function(n){return n>0?1:n<0?-1:0},mr=Math.sqrt;function Ww(n){return n>1?0:n<-1?Ct:Math.acos(n)}function gr(n){return n>1?pi:n<-1?-pi:Math.asin(n)}function Vp(n){return(n=lt(n/2))*n}function Tn(){}function Kl(n,e){n&&Gp.hasOwnProperty(n.type)&&Gp[n.type](n,e)}var Hp={Feature:function(n,e){Kl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)Kl(t[i].geometry,e)}},Gp={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){ih(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)ih(t[i],e,0)},Polygon:function(n,e){Wp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Wp(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)Kl(t[i],e)}};function ih(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function Wp(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)ih(n[t],e,1);e.polygonEnd()}function Dc(n,e){n&&Hp.hasOwnProperty(n.type)?Hp[n.type](n,e):Kl(n,e)}var Zl=new ur,$p=new ur,Gg,Wg,rh,sh,oh,_r={point:Tn,lineStart:Tn,lineEnd:Tn,polygonStart:function(){Zl=new ur,_r.lineStart=$w,_r.lineEnd=Xw},polygonEnd:function(){var n=+Zl;$p.add(n<0?si+n:n),this.lineStart=this.lineEnd=this.point=Tn},sphere:function(){$p.add(si)}};function $w(){_r.point=qw}function Xw(){$g(Gg,Wg)}function qw(n,e){_r.point=$g,Gg=n,Wg=e,n*=ct,e*=ct,rh=n,sh=ht(e=e/2+Yl),oh=lt(e)}function $g(n,e){n*=ct,e*=ct,e=e/2+Yl;var t=n-rh,i=t>=0?1:-1,r=i*t,s=ht(e),o=lt(e),a=oh*o,c=sh*s+a*ht(r),l=a*i*lt(r);Zl.add(gi(l,c)),rh=n,sh=s,oh=o}function jl(n){return[gi(n[1],n[0]),gr(n[2])]}function ls(n){var e=n[0],t=n[1],i=ht(t);return[i*ht(e),i*lt(e),lt(t)]}function Qa(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function no(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Cf(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function el(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Jl(n){var e=mr(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}var Jt,qn,Qt,ti,qr,Xg,qg,Ys,Yo,Tr,xr,sr={point:ah,lineStart:Xp,lineEnd:qp,polygonStart:function(){sr.point=Kg,sr.lineStart=Yw,sr.lineEnd=Kw,Yo=new ur,_r.polygonStart()},polygonEnd:function(){_r.polygonEnd(),sr.point=ah,sr.lineStart=Xp,sr.lineEnd=qp,Zl<0?(Jt=-(Qt=180),qn=-(ti=90)):Yo>Ot?ti=90:Yo<-Ot&&(qn=-90),xr[0]=Jt,xr[1]=Qt},sphere:function(){Jt=-(Qt=180),qn=-(ti=90)}};function ah(n,e){Tr.push(xr=[Jt=n,Qt=n]),e<qn&&(qn=e),e>ti&&(ti=e)}function Yg(n,e){var t=ls([n*ct,e*ct]);if(Ys){var i=no(Ys,t),r=[i[1],-i[0],0],s=no(r,i);Jl(s),s=jl(s);var o=n-qr,a=o>0?1:-1,c=s[0]*en*a,l,h=Xt(o)>180;h^(a*qr<c&&c<a*n)?(l=s[1]*en,l>ti&&(ti=l)):(c=(c+360)%360-180,h^(a*qr<c&&c<a*n)?(l=-s[1]*en,l<qn&&(qn=l)):(e<qn&&(qn=e),e>ti&&(ti=e))),h?n<qr?Qn(Jt,n)>Qn(Jt,Qt)&&(Qt=n):Qn(n,Qt)>Qn(Jt,Qt)&&(Jt=n):Qt>=Jt?(n<Jt&&(Jt=n),n>Qt&&(Qt=n)):n>qr?Qn(Jt,n)>Qn(Jt,Qt)&&(Qt=n):Qn(n,Qt)>Qn(Jt,Qt)&&(Jt=n)}else Tr.push(xr=[Jt=n,Qt=n]);e<qn&&(qn=e),e>ti&&(ti=e),Ys=t,qr=n}function Xp(){sr.point=Yg}function qp(){xr[0]=Jt,xr[1]=Qt,sr.point=ah,Ys=null}function Kg(n,e){if(Ys){var t=n-qr;Yo.add(Xt(t)>180?t+(t>0?360:-360):t)}else Xg=n,qg=e;_r.point(n,e),Yg(n,e)}function Yw(){_r.lineStart()}function Kw(){Kg(Xg,qg),_r.lineEnd(),Xt(Yo)>Ot&&(Jt=-(Qt=180)),xr[0]=Jt,xr[1]=Qt,Ys=null}function Qn(n,e){return(e-=n)<0?e+360:e}function Zw(n,e){return n[0]-e[0]}function Yp(n,e){return n[0]<=n[1]?n[0]<=e&&e<=n[1]:e<n[0]||n[1]<e}function Zg(n){var e,t,i,r,s,o,a;if(ti=Qt=-(Jt=qn=1/0),Tr=[],Dc(n,sr),t=Tr.length){for(Tr.sort(Zw),e=1,i=Tr[0],s=[i];e<t;++e)r=Tr[e],Yp(i,r[0])||Yp(i,r[1])?(Qn(i[0],r[1])>Qn(i[0],i[1])&&(i[1]=r[1]),Qn(r[0],i[1])>Qn(i[0],i[1])&&(i[0]=r[0])):s.push(i=r);for(o=-1/0,t=s.length-1,e=0,i=s[t];e<=t;i=r,++e)r=s[e],(a=Qn(i[1],r[0]))>o&&(o=a,Jt=r[0],Qt=i[1])}return Tr=xr=null,Jt===1/0||qn===1/0?[[NaN,NaN],[NaN,NaN]]:[[Jt,qn],[Qt,ti]]}var Go,Ql,ec,tc,nc,ic,rc,sc,lh,ch,fh,jg,Jg,zn,kn,Vn,Pi={sphere:Tn,point:Jh,lineStart:Kp,lineEnd:Zp,polygonStart:function(){Pi.lineStart=Qw,Pi.lineEnd=eT},polygonEnd:function(){Pi.lineStart=Kp,Pi.lineEnd=Zp}};function Jh(n,e){n*=ct,e*=ct;var t=ht(e);da(t*ht(n),t*lt(n),lt(e))}function da(n,e,t){++Go,ec+=(n-ec)/Go,tc+=(e-tc)/Go,nc+=(t-nc)/Go}function Kp(){Pi.point=jw}function jw(n,e){n*=ct,e*=ct;var t=ht(e);zn=t*ht(n),kn=t*lt(n),Vn=lt(e),Pi.point=Jw,da(zn,kn,Vn)}function Jw(n,e){n*=ct,e*=ct;var t=ht(e),i=t*ht(n),r=t*lt(n),s=lt(e),o=gi(mr((o=kn*s-Vn*r)*o+(o=Vn*i-zn*s)*o+(o=zn*r-kn*i)*o),zn*i+kn*r+Vn*s);Ql+=o,ic+=o*(zn+(zn=i)),rc+=o*(kn+(kn=r)),sc+=o*(Vn+(Vn=s)),da(zn,kn,Vn)}function Zp(){Pi.point=Jh}function Qw(){Pi.point=tT}function eT(){Qg(jg,Jg),Pi.point=Jh}function tT(n,e){jg=n,Jg=e,n*=ct,e*=ct,Pi.point=Qg;var t=ht(e);zn=t*ht(n),kn=t*lt(n),Vn=lt(e),da(zn,kn,Vn)}function Qg(n,e){n*=ct,e*=ct;var t=ht(e),i=t*ht(n),r=t*lt(n),s=lt(e),o=kn*s-Vn*r,a=Vn*i-zn*s,c=zn*r-kn*i,l=nh(o,a,c),h=gr(l),f=l&&-h/l;lh.add(f*o),ch.add(f*a),fh.add(f*c),Ql+=h,ic+=h*(zn+(zn=i)),rc+=h*(kn+(kn=r)),sc+=h*(Vn+(Vn=s)),da(zn,kn,Vn)}function jp(n){Go=Ql=ec=tc=nc=ic=rc=sc=0,lh=new ur,ch=new ur,fh=new ur,Dc(n,Pi);var e=+lh,t=+ch,i=+fh,r=nh(e,t,i);return r<ql&&(e=ic,t=rc,i=sc,Ql<Ot&&(e=ec,t=tc,i=nc),r=nh(e,t,i),r<ql)?[NaN,NaN]:[gi(t,e)*en,gr(i/r)*en]}function uh(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function hh(n,e){return Xt(n)>Ct&&(n-=Math.round(n/si)*si),[n,e]}hh.invert=hh;function e_(n,e,t){return(n%=si)?e||t?uh(Qp(n),em(e,t)):Qp(n):e||t?em(e,t):hh}function Jp(n){return function(e,t){return e+=n,Xt(e)>Ct&&(e-=Math.round(e/si)*si),[e,t]}}function Qp(n){var e=Jp(n);return e.invert=Jp(-n),e}function em(n,e){var t=ht(n),i=lt(n),r=ht(e),s=lt(e);function o(a,c){var l=ht(c),h=ht(a)*l,f=lt(a)*l,u=lt(c),p=u*t+h*i;return[gi(f*r-p*s,h*t-u*i),gr(p*r+f*s)]}return o.invert=function(a,c){var l=ht(c),h=ht(a)*l,f=lt(a)*l,u=lt(c),p=u*r-f*s;return[gi(f*r+u*s,h*t+p*i),gr(p*t-h*i)]},o}function nT(n){n=e_(n[0]*ct,n[1]*ct,n.length>2?n[2]*ct:0);function e(t){return t=n(t[0]*ct,t[1]*ct),t[0]*=en,t[1]*=en,t}return e.invert=function(t){return t=n.invert(t[0]*ct,t[1]*ct),t[0]*=en,t[1]*=en,t},e}function iT(n,e,t,i,r,s){if(t){var o=ht(e),a=lt(e),c=i*t;r==null?(r=e+i*si,s=e-c/2):(r=tm(o,r),s=tm(o,s),(i>0?r<s:r>s)&&(r+=i*si));for(var l,h=r;i>0?h>s:h<s;h-=c)l=jl([o,-a*ht(h),-a*lt(h)]),n.point(l[0],l[1])}}function tm(n,e){e=ls(e),e[0]-=n,Jl(e);var t=Ww(-e[1]);return((-e[2]<0?-t:t)+si-Ot)%si}function t_(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:Tn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function bl(n,e){return Xt(n[0]-e[0])<Ot&&Xt(n[1]-e[1])<Ot}function tl(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function n_(n,e,t,i,r){var s=[],o=[],a,c;if(n.forEach(function(m){if(!((v=m.length-1)<=0)){var v,_=m[0],x=m[v],T;if(bl(_,x)){if(!_[2]&&!x[2]){for(r.lineStart(),a=0;a<v;++a)r.point((_=m[a])[0],_[1]);r.lineEnd();return}x[0]+=2*Ot}s.push(T=new tl(_,m,null,!0)),o.push(T.o=new tl(_,null,T,!1)),s.push(T=new tl(x,m,null,!1)),o.push(T.o=new tl(x,null,T,!0))}}),!!s.length){for(o.sort(e),nm(s),nm(o),a=0,c=o.length;a<c;++a)o[a].e=t=!t;for(var l=s[0],h,f;;){for(var u=l,p=!0;u.v;)if((u=u.n)===l)return;h=u.z,r.lineStart();do{if(u.v=u.o.v=!0,u.e){if(p)for(a=0,c=h.length;a<c;++a)r.point((f=h[a])[0],f[1]);else i(u.x,u.n.x,1,r);u=u.n}else{if(p)for(h=u.p.z,a=h.length-1;a>=0;--a)r.point((f=h[a])[0],f[1]);else i(u.x,u.p.x,-1,r);u=u.p}u=u.o,h=u.z,p=!p}while(!u.v);r.lineEnd()}}}function nm(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function Pf(n){return Xt(n[0])<=Ct?n[0]:Gw(n[0])*((Xt(n[0])+Ct)%si-Ct)}function i_(n,e){var t=Pf(e),i=e[1],r=lt(i),s=[lt(t),-ht(t),0],o=0,a=0,c=new ur;r===1?i=pi+Ot:r===-1&&(i=-pi-Ot);for(var l=0,h=n.length;l<h;++l)if(u=(f=n[l]).length)for(var f,u,p=f[u-1],m=Pf(p),v=p[1]/2+Yl,_=lt(v),x=ht(v),T=0;T<u;++T,m=M,_=R,x=F,p=C){var C=f[T],M=Pf(C),I=C[1]/2+Yl,R=lt(I),F=ht(I),S=M-m,A=S>=0?1:-1,k=A*S,B=k>Ct,z=_*R;if(c.add(gi(z*A*lt(k),x*F+z*ht(k))),o+=B?S+A*si:S,B^m>=t^M>=t){var P=no(ls(p),ls(C));Jl(P);var O=no(s,P);Jl(O);var E=(B^S>=0?-1:1)*gr(O[2]);(i>E||i===E&&(P[0]||P[1]))&&(a+=B^S>=0?1:-1)}}return(o<-Ot||o<Ot&&c<-ql)^a&1}function r_(n,e,t,i){return function(r){var s=e(r),o=t_(),a=e(o),c=!1,l,h,f,u={point:p,lineStart:v,lineEnd:_,polygonStart:function(){u.point=x,u.lineStart=T,u.lineEnd=C,h=[],l=[]},polygonEnd:function(){u.point=p,u.lineStart=v,u.lineEnd=_,h=ta(h);var M=i_(l,i);h.length?(c||(r.polygonStart(),c=!0),n_(h,sT,M,t,r)):M&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),h=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(M,I){n(M,I)&&r.point(M,I)}function m(M,I){s.point(M,I)}function v(){u.point=m,s.lineStart()}function _(){u.point=p,s.lineEnd()}function x(M,I){f.push([M,I]),a.point(M,I)}function T(){a.lineStart(),f=[]}function C(){x(f[0][0],f[0][1]),a.lineEnd();var M=a.clean(),I=o.result(),R,F=I.length,S,A,k;if(f.pop(),l.push(f),f=null,!!F){if(M&1){if(A=I[0],(S=A.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),R=0;R<S;++R)r.point((k=A[R])[0],k[1]);r.lineEnd()}return}F>1&&M&2&&I.push(I.pop().concat(I.shift())),h.push(I.filter(rT))}}return u}}function rT(n){return n.length>1}function sT(n,e){return((n=n.x)[0]<0?n[1]-pi-Ot:pi-n[1])-((e=e.x)[0]<0?e[1]-pi-Ot:pi-e[1])}const im=r_(function(){return!0},oT,lT,[-Ct,-pi]);function oT(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,o){var a=s>0?Ct:-Ct,c=Xt(s-e);Xt(c-Ct)<Ot?(n.point(e,t=(t+o)/2>0?pi:-pi),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),n.point(s,t),r=0):i!==a&&c>=Ct&&(Xt(e-i)<Ot&&(e-=i*Ot),Xt(s-a)<Ot&&(s-=a*Ot),t=aT(e,t,s,o),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),r=0),n.point(e=s,t=o),i=a},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function aT(n,e,t,i){var r,s,o=lt(n-t);return Xt(o)>Ot?Hg((lt(e)*(s=ht(i))*lt(t)-lt(i)*(r=ht(e))*lt(n))/(r*s*o)):(e+i)/2}function lT(n,e,t,i){var r;if(n==null)r=t*pi,i.point(-Ct,r),i.point(0,r),i.point(Ct,r),i.point(Ct,0),i.point(Ct,-r),i.point(0,-r),i.point(-Ct,-r),i.point(-Ct,0),i.point(-Ct,r);else if(Xt(n[0]-e[0])>Ot){var s=n[0]<e[0]?Ct:-Ct;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function cT(n){var e=ht(n),t=2*ct,i=e>0,r=Xt(e)>Ot;function s(h,f,u,p){iT(p,n,t,u,h,f)}function o(h,f){return ht(h)*ht(f)>e}function a(h){var f,u,p,m,v;return{lineStart:function(){m=p=!1,v=1},point:function(_,x){var T=[_,x],C,M=o(_,x),I=i?M?0:l(_,x):M?l(_+(_<0?Ct:-Ct),x):0;if(!f&&(m=p=M)&&h.lineStart(),M!==p&&(C=c(f,T),(!C||bl(f,C)||bl(T,C))&&(T[2]=1)),M!==p)v=0,M?(h.lineStart(),C=c(T,f),h.point(C[0],C[1])):(C=c(f,T),h.point(C[0],C[1],2),h.lineEnd()),f=C;else if(r&&f&&i^M){var R;!(I&u)&&(R=c(T,f,!0))&&(v=0,i?(h.lineStart(),h.point(R[0][0],R[0][1]),h.point(R[1][0],R[1][1]),h.lineEnd()):(h.point(R[1][0],R[1][1]),h.lineEnd(),h.lineStart(),h.point(R[0][0],R[0][1],3)))}M&&(!f||!bl(f,T))&&h.point(T[0],T[1]),f=T,p=M,u=I},lineEnd:function(){p&&h.lineEnd(),f=null},clean:function(){return v|(m&&p)<<1}}}function c(h,f,u){var p=ls(h),m=ls(f),v=[1,0,0],_=no(p,m),x=Qa(_,_),T=_[0],C=x-T*T;if(!C)return!u&&h;var M=e*x/C,I=-e*T/C,R=no(v,_),F=el(v,M),S=el(_,I);Cf(F,S);var A=R,k=Qa(F,A),B=Qa(A,A),z=k*k-B*(Qa(F,F)-1);if(!(z<0)){var P=mr(z),O=el(A,(-k-P)/B);if(Cf(O,F),O=jl(O),!u)return O;var E=h[0],L=f[0],U=h[1],G=f[1],K;L<E&&(K=E,E=L,L=K);var te=L-E,fe=Xt(te-Ct)<Ot,j=fe||te<Ot;if(!fe&&G<U&&(K=U,U=G,G=K),j?fe?U+G>0^O[1]<(Xt(O[0]-E)<Ot?U:G):U<=O[1]&&O[1]<=G:te>Ct^(E<=O[0]&&O[0]<=L)){var ye=el(A,(-k+P)/B);return Cf(ye,F),[O,jl(ye)]}}}function l(h,f){var u=i?n:Ct-n,p=0;return h<-u?p|=1:h>u&&(p|=2),f<-u?p|=4:f>u&&(p|=8),p}return r_(o,a,s,i?[0,-n]:[-Ct,n-Ct])}function fT(n,e,t,i,r,s){var o=n[0],a=n[1],c=e[0],l=e[1],h=0,f=1,u=c-o,p=l-a,m;if(m=t-o,!(!u&&m>0)){if(m/=u,u<0){if(m<h)return;m<f&&(f=m)}else if(u>0){if(m>f)return;m>h&&(h=m)}if(m=r-o,!(!u&&m<0)){if(m/=u,u<0){if(m>f)return;m>h&&(h=m)}else if(u>0){if(m<h)return;m<f&&(f=m)}if(m=i-a,!(!p&&m>0)){if(m/=p,p<0){if(m<h)return;m<f&&(f=m)}else if(p>0){if(m>f)return;m>h&&(h=m)}if(m=s-a,!(!p&&m<0)){if(m/=p,p<0){if(m>f)return;m>h&&(h=m)}else if(p>0){if(m<h)return;m<f&&(f=m)}return h>0&&(n[0]=o+h*u,n[1]=a+h*p),f<1&&(e[0]=o+f*u,e[1]=a+f*p),!0}}}}}var Wo=1e9,nl=-Wo;function uT(n,e,t,i){function r(l,h){return n<=l&&l<=t&&e<=h&&h<=i}function s(l,h,f,u){var p=0,m=0;if(l==null||(p=o(l,f))!==(m=o(h,f))||c(l,h)<0^f>0)do u.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+f+4)%4)!==m);else u.point(h[0],h[1])}function o(l,h){return Xt(l[0]-n)<Ot?h>0?0:3:Xt(l[0]-t)<Ot?h>0?2:1:Xt(l[1]-e)<Ot?h>0?1:0:h>0?3:2}function a(l,h){return c(l.x,h.x)}function c(l,h){var f=o(l,1),u=o(h,1);return f!==u?f-u:f===0?h[1]-l[1]:f===1?l[0]-h[0]:f===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,f=t_(),u,p,m,v,_,x,T,C,M,I,R,F={point:S,lineStart:z,lineEnd:P,polygonStart:k,polygonEnd:B};function S(E,L){r(E,L)&&h.point(E,L)}function A(){for(var E=0,L=0,U=p.length;L<U;++L)for(var G=p[L],K=1,te=G.length,fe=G[0],j,ye,pe=fe[0],qe=fe[1];K<te;++K)j=pe,ye=qe,fe=G[K],pe=fe[0],qe=fe[1],ye<=i?qe>i&&(pe-j)*(i-ye)>(qe-ye)*(n-j)&&++E:qe<=i&&(pe-j)*(i-ye)<(qe-ye)*(n-j)&&--E;return E}function k(){h=f,u=[],p=[],R=!0}function B(){var E=A(),L=R&&E,U=(u=ta(u)).length;(L||U)&&(l.polygonStart(),L&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),U&&n_(u,a,E,s,l),l.polygonEnd()),h=l,u=p=m=null}function z(){F.point=O,p&&p.push(m=[]),I=!0,M=!1,T=C=NaN}function P(){u&&(O(v,_),x&&M&&f.rejoin(),u.push(f.result())),F.point=S,M&&h.lineEnd()}function O(E,L){var U=r(E,L);if(p&&m.push([E,L]),I)v=E,_=L,x=U,I=!1,U&&(h.lineStart(),h.point(E,L));else if(U&&M)h.point(E,L);else{var G=[T=Math.max(nl,Math.min(Wo,T)),C=Math.max(nl,Math.min(Wo,C))],K=[E=Math.max(nl,Math.min(Wo,E)),L=Math.max(nl,Math.min(Wo,L))];fT(G,K,n,e,t,i)?(M||(h.lineStart(),h.point(G[0],G[1])),h.point(K[0],K[1]),U||h.lineEnd(),R=!1):U&&(h.lineStart(),h.point(E,L),R=!1)}T=E,C=L,M=U}return F}}var dh,ph,wl,Tl,io={sphere:Tn,point:Tn,lineStart:hT,lineEnd:Tn,polygonStart:Tn,polygonEnd:Tn};function hT(){io.point=pT,io.lineEnd=dT}function dT(){io.point=io.lineEnd=Tn}function pT(n,e){n*=ct,e*=ct,ph=n,wl=lt(e),Tl=ht(e),io.point=mT}function mT(n,e){n*=ct,e*=ct;var t=lt(e),i=ht(e),r=Xt(n-ph),s=ht(r),o=lt(r),a=i*o,c=Tl*t-wl*i*s,l=wl*t+Tl*i*s;dh.add(gi(mr(a*a+c*c),l)),ph=n,wl=t,Tl=i}function gT(n){return dh=new ur,Dc(n,io),+dh}var mh=[null,null],_T={type:"LineString",coordinates:mh};function ro(n,e){return mh[0]=n,mh[1]=e,gT(_T)}var rm={Feature:function(n,e){return oc(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)if(oc(t[i].geometry,e))return!0;return!1}},sm={Sphere:function(){return!0},Point:function(n,e){return om(n.coordinates,e)},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(om(t[i],e))return!0;return!1},LineString:function(n,e){return am(n.coordinates,e)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(am(t[i],e))return!0;return!1},Polygon:function(n,e){return lm(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(lm(t[i],e))return!0;return!1},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)if(oc(t[i],e))return!0;return!1}};function oc(n,e){return n&&sm.hasOwnProperty(n.type)?sm[n.type](n,e):!1}function om(n,e){return ro(n,e)===0}function am(n,e){for(var t,i,r,s=0,o=n.length;s<o;s++){if(i=ro(n[s],e),i===0||s>0&&(r=ro(n[s],n[s-1]),r>0&&t<=r&&i<=r&&(t+i-r)*(1-Math.pow((t-i)/r,2))<ql*r))return!0;t=i}return!1}function lm(n,e){return!!i_(n.map(xT),s_(e))}function xT(n){return n=n.map(s_),n.pop(),n}function s_(n){return[n[0]*ct,n[1]*ct]}function vT(n,e){return(n&&rm.hasOwnProperty(n.type)?rm[n.type]:oc)(n,e)}function yT(n,e){var t=n[0]*ct,i=n[1]*ct,r=e[0]*ct,s=e[1]*ct,o=ht(i),a=lt(i),c=ht(s),l=lt(s),h=o*ht(t),f=o*lt(t),u=c*ht(r),p=c*lt(r),m=2*gr(mr(Vp(s-i)+o*c*Vp(r-t))),v=lt(m),_=m?function(x){var T=lt(x*=m)/v,C=lt(m-x)/v,M=C*h+T*u,I=C*f+T*p,R=C*a+T*l;return[gi(I,M)*en,gi(R,mr(M*M+I*I))*en]}:function(){return[t*en,i*en]};return _.distance=m,_}const cm=n=>n;var so=1/0,ac=so,aa=-so,lc=aa,fm={point:ST,lineStart:Tn,lineEnd:Tn,polygonStart:Tn,polygonEnd:Tn,result:function(){var n=[[so,ac],[aa,lc]];return aa=lc=-(ac=so=1/0),n}};function ST(n,e){n<so&&(so=n),n>aa&&(aa=n),e<ac&&(ac=e),e>lc&&(lc=e)}function Qh(n){return function(e){var t=new gh;for(var i in n)t[i]=n[i];return t.stream=e,t}}function gh(){}gh.prototype={constructor:gh,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function ed(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),Dc(t,n.stream(fm)),e(fm.result()),i!=null&&n.clipExtent(i),n}function o_(n,e,t){return ed(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,c])},t)}function MT(n,e,t){return o_(n,[[0,0],e],t)}function ET(n,e,t){return ed(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];n.scale(150*s).translate([o,a])},t)}function bT(n,e,t){return ed(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([o,a])},t)}var um=16,wT=ht(30*ct);function hm(n,e){return+e?AT(n,e):TT(n)}function TT(n){return Qh({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function AT(n,e){function t(i,r,s,o,a,c,l,h,f,u,p,m,v,_){var x=l-i,T=h-r,C=x*x+T*T;if(C>4*e&&v--){var M=o+u,I=a+p,R=c+m,F=mr(M*M+I*I+R*R),S=gr(R/=F),A=Xt(Xt(R)-1)<Ot||Xt(s-f)<Ot?(s+f)/2:gi(I,M),k=n(A,S),B=k[0],z=k[1],P=B-i,O=z-r,E=T*P-x*O;(E*E/C>e||Xt((x*P+T*O)/C-.5)>.3||o*u+a*p+c*m<wT)&&(t(i,r,s,o,a,c,B,z,A,M/=F,I/=F,R,v,_),_.point(B,z),t(B,z,A,M,I,R,l,h,f,u,p,m,v,_))}}return function(i){var r,s,o,a,c,l,h,f,u,p,m,v,_={point:x,lineStart:T,lineEnd:M,polygonStart:function(){i.polygonStart(),_.lineStart=I},polygonEnd:function(){i.polygonEnd(),_.lineStart=T}};function x(S,A){S=n(S,A),i.point(S[0],S[1])}function T(){f=NaN,_.point=C,i.lineStart()}function C(S,A){var k=ls([S,A]),B=n(S,A);t(f,u,h,p,m,v,f=B[0],u=B[1],h=S,p=k[0],m=k[1],v=k[2],um,i),i.point(f,u)}function M(){_.point=x,i.lineEnd()}function I(){T(),_.point=R,_.lineEnd=F}function R(S,A){C(r=S,A),s=f,o=u,a=p,c=m,l=v,_.point=C}function F(){t(f,u,h,p,m,v,s,o,r,a,c,l,um,i),_.lineEnd=M,M()}return _}}var RT=Qh({point:function(n,e){this.stream.point(n*ct,e*ct)}});function CT(n){return Qh({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function PT(n,e,t,i,r){function s(o,a){return o*=i,a*=r,[e+n*o,t-n*a]}return s.invert=function(o,a){return[(o-e)/n*i,(t-a)/n*r]},s}function dm(n,e,t,i,r,s){if(!s)return PT(n,e,t,i,r);var o=ht(s),a=lt(s),c=o*n,l=a*n,h=o/n,f=a/n,u=(a*t-o*e)/n,p=(a*e+o*t)/n;function m(v,_){return v*=i,_*=r,[c*v-l*_+e,t-l*v-c*_]}return m.invert=function(v,_){return[i*(h*v-f*_+u),r*(p-f*v-h*_)]},m}function IT(n){return DT(function(){return n})()}function DT(n){var e,t=150,i=480,r=250,s=0,o=0,a=0,c=0,l=0,h,f=0,u=1,p=1,m=null,v=im,_=null,x,T,C,M=cm,I=.5,R,F,S,A,k;function B(E){return S(E[0]*ct,E[1]*ct)}function z(E){return E=S.invert(E[0],E[1]),E&&[E[0]*en,E[1]*en]}B.stream=function(E){return A&&k===E?A:A=RT(CT(h)(v(R(M(k=E)))))},B.preclip=function(E){return arguments.length?(v=E,m=void 0,O()):v},B.postclip=function(E){return arguments.length?(M=E,_=x=T=C=null,O()):M},B.clipAngle=function(E){return arguments.length?(v=+E?cT(m=E*ct):(m=null,im),O()):m*en},B.clipExtent=function(E){return arguments.length?(M=E==null?(_=x=T=C=null,cm):uT(_=+E[0][0],x=+E[0][1],T=+E[1][0],C=+E[1][1]),O()):_==null?null:[[_,x],[T,C]]},B.scale=function(E){return arguments.length?(t=+E,P()):t},B.translate=function(E){return arguments.length?(i=+E[0],r=+E[1],P()):[i,r]},B.center=function(E){return arguments.length?(s=E[0]%360*ct,o=E[1]%360*ct,P()):[s*en,o*en]},B.rotate=function(E){return arguments.length?(a=E[0]%360*ct,c=E[1]%360*ct,l=E.length>2?E[2]%360*ct:0,P()):[a*en,c*en,l*en]},B.angle=function(E){return arguments.length?(f=E%360*ct,P()):f*en},B.reflectX=function(E){return arguments.length?(u=E?-1:1,P()):u<0},B.reflectY=function(E){return arguments.length?(p=E?-1:1,P()):p<0},B.precision=function(E){return arguments.length?(R=hm(F,I=E*E),O()):mr(I)},B.fitExtent=function(E,L){return o_(B,E,L)},B.fitSize=function(E,L){return MT(B,E,L)},B.fitWidth=function(E,L){return ET(B,E,L)},B.fitHeight=function(E,L){return bT(B,E,L)};function P(){var E=dm(t,0,0,u,p,f).apply(null,e(s,o)),L=dm(t,i-E[0],r-E[1],u,p,f);return h=e_(a,c,l),F=uh(e,L),S=uh(h,F),R=hm(F,I),O()}function O(){return A=k=null,B}return function(){return e=n.apply(this,arguments),B.invert=e.invert&&z,P()}}function LT(n){return function(e,t){var i=mr(e*e+t*t),r=n(i),s=lt(r),o=ht(r);return[gi(e*s,i*o),gr(i&&t*s/i)]}}function a_(n,e){var t=ht(e),i=1+ht(n)*t;return[t*lt(n)/i,lt(e)/i]}a_.invert=LT(function(n){return 2*Hg(n)});function NT(){return IT(a_).scale(250).clipAngle(142)}const pm=1e-6;class es{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t,i=+i;const r=e+i,s=t;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${r},${s}`:(Math.abs(this._x1-r)>pm||Math.abs(this._y1-s)>pm)&&(this._+="L"+r+","+s),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=r},${this._y1=s}`)}rect(e,t,i,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+r}h${-i}Z`}value(){return this._||null}}class _h{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class OT{constructor(e,[t,i,r,s]=[0,0,960,500]){if(!((r=+r)>=(t=+t))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=r,this.xmin=t,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:i},vectors:r}=this;let s,o;const a=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let v=0,_=0,x=i.length,T,C;v<x;v+=3,_+=2){const M=i[v]*2,I=i[v+1]*2,R=i[v+2]*2,F=e[M],S=e[M+1],A=e[I],k=e[I+1],B=e[R],z=e[R+1],P=A-F,O=k-S,E=B-F,L=z-S,U=(P*L-O*E)*2;if(Math.abs(U)<1e-9){if(s===void 0){s=o=0;for(const K of t)s+=e[K*2],o+=e[K*2+1];s/=t.length,o/=t.length}const G=1e9*Math.sign((s-F)*L-(o-S)*E);T=(F+B)/2-G*L,C=(S+z)/2+G*E}else{const G=1/U,K=P*P+O*O,te=E*E+L*L;T=F+(L*K-O*te)*G,C=S+(P*te-E*K)*G}a[_]=T,a[_+1]=C}let c=t[t.length-1],l,h=c*4,f,u=e[2*c],p,m=e[2*c+1];r.fill(0);for(let v=0;v<t.length;++v)c=t[v],l=h,f=u,p=m,h=c*4,u=e[2*c],m=e[2*c+1],r[l+2]=r[h]=p-m,r[l+3]=r[h+1]=u-f}render(e){const t=e==null?e=new es:void 0,{delaunay:{halfedges:i,inedges:r,hull:s},circumcenters:o,vectors:a}=this;if(s.length<=1)return null;for(let h=0,f=i.length;h<f;++h){const u=i[h];if(u<h)continue;const p=Math.floor(h/3)*2,m=Math.floor(u/3)*2,v=o[p],_=o[p+1],x=o[m],T=o[m+1];this._renderSegment(v,_,x,T,e)}let c,l=s[s.length-1];for(let h=0;h<s.length;++h){c=l,l=s[h];const f=Math.floor(r[l]/3)*2,u=o[f],p=o[f+1],m=c*4,v=this._project(u,p,a[m+2],a[m+3]);v&&this._renderSegment(u,p,v[0],v[1],e)}return t&&t.value()}renderBounds(e){const t=e==null?e=new es:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const i=t==null?t=new es:void 0,r=this._clip(e);if(r===null||!r.length)return;t.moveTo(r[0],r[1]);let s=r.length;for(;r[0]===r[s-2]&&r[1]===r[s-1]&&s>1;)s-=2;for(let o=2;o<s;o+=2)(r[o]!==r[o-2]||r[o+1]!==r[o-1])&&t.lineTo(r[o],r[o+1]);return t.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){const r=this.cellPolygon(t);r&&(r.index=t,yield r)}}cellPolygon(e){const t=new _h;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,r,s){let o;const a=this._regioncode(e,t),c=this._regioncode(i,r);a===0&&c===0?(s.moveTo(e,t),s.lineTo(i,r)):(o=this._clipSegment(e,t,i,r,a,c))&&(s.moveTo(o[0],o[1]),s.lineTo(o[2],o[3]))}contains(e,t,i){return t=+t,t!==t||(i=+i,i!==i)?!1:this.delaunay._step(e,t,i)===e}*neighbors(e){const t=this._clip(e);if(t)for(const i of this.delaunay.neighbors(e)){const r=this._clip(i);if(r){e:for(let s=0,o=t.length;s<o;s+=2)for(let a=0,c=r.length;a<c;a+=2)if(t[s]===r[a]&&t[s+1]===r[a+1]&&t[(s+2)%o]===r[(a+c-2)%c]&&t[(s+3)%o]===r[(a+c-1)%c]){yield i;break e}}}}_cell(e){const{circumcenters:t,delaunay:{inedges:i,halfedges:r,triangles:s}}=this,o=i[e];if(o===-1)return null;const a=[];let c=o;do{const l=Math.floor(c/3);if(a.push(t[l*2],t[l*2+1]),c=c%3===2?c-2:c+1,s[c]!==e)break;c=r[c]}while(c!==o&&c!==-1);return a}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const t=this._cell(e);if(t===null)return null;const{vectors:i}=this,r=e*4;return this._simplify(i[r]||i[r+1]?this._clipInfinite(e,t,i[r],i[r+1],i[r+2],i[r+3]):this._clipFinite(e,t))}_clipFinite(e,t){const i=t.length;let r=null,s,o,a=t[i-2],c=t[i-1],l,h=this._regioncode(a,c),f,u=0;for(let p=0;p<i;p+=2)if(s=a,o=c,a=t[p],c=t[p+1],l=h,h=this._regioncode(a,c),l===0&&h===0)f=u,u=0,r?r.push(a,c):r=[a,c];else{let m,v,_,x,T;if(l===0){if((m=this._clipSegment(s,o,a,c,l,h))===null)continue;[v,_,x,T]=m}else{if((m=this._clipSegment(a,c,s,o,h,l))===null)continue;[x,T,v,_]=m,f=u,u=this._edgecode(v,_),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(v,_):r=[v,_]}f=u,u=this._edgecode(x,T),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(x,T):r=[x,T]}if(r)f=u,u=this._edgecode(r[0],r[1]),f&&u&&this._edge(e,f,u,r,r.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return r}_clipSegment(e,t,i,r,s,o){const a=s<o;for(a&&([e,t,i,r,s,o]=[i,r,e,t,o,s]);;){if(s===0&&o===0)return a?[i,r,e,t]:[e,t,i,r];if(s&o)return null;let c,l,h=s||o;h&8?(c=e+(i-e)*(this.ymax-t)/(r-t),l=this.ymax):h&4?(c=e+(i-e)*(this.ymin-t)/(r-t),l=this.ymin):h&2?(l=t+(r-t)*(this.xmax-e)/(i-e),c=this.xmax):(l=t+(r-t)*(this.xmin-e)/(i-e),c=this.xmin),s?(e=c,t=l,s=this._regioncode(e,t)):(i=c,r=l,o=this._regioncode(i,r))}}_clipInfinite(e,t,i,r,s,o){let a=Array.from(t),c;if((c=this._project(a[0],a[1],i,r))&&a.unshift(c[0],c[1]),(c=this._project(a[a.length-2],a[a.length-1],s,o))&&a.push(c[0],c[1]),a=this._clipFinite(e,a))for(let l=0,h=a.length,f,u=this._edgecode(a[h-2],a[h-1]);l<h;l+=2)f=u,u=this._edgecode(a[l],a[l+1]),f&&u&&(l=this._edge(e,f,u,a,l),h=a.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(a=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return a}_edge(e,t,i,r,s){for(;t!==i;){let o,a;switch(t){case 5:t=4;continue;case 4:t=6,o=this.xmax,a=this.ymin;break;case 6:t=2;continue;case 2:t=10,o=this.xmax,a=this.ymax;break;case 10:t=8;continue;case 8:t=9,o=this.xmin,a=this.ymax;break;case 9:t=1;continue;case 1:t=5,o=this.xmin,a=this.ymin;break}(r[s]!==o||r[s+1]!==a)&&this.contains(e,o,a)&&(r.splice(s,0,o,a),s+=2)}return s}_project(e,t,i,r){let s=1/0,o,a,c;if(r<0){if(t<=this.ymin)return null;(o=(this.ymin-t)/r)<s&&(c=this.ymin,a=e+(s=o)*i)}else if(r>0){if(t>=this.ymax)return null;(o=(this.ymax-t)/r)<s&&(c=this.ymax,a=e+(s=o)*i)}if(i>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/i)<s&&(a=this.xmax,c=t+(s=o)*r)}else if(i<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/i)<s&&(a=this.xmin,c=t+(s=o)*r)}return[a,c]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){const i=(t+2)%e.length,r=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[r]||e[t+1]===e[i+1]&&e[i+1]===e[r+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}const UT=2*Math.PI,Os=Math.pow;function FT(n){return n[0]}function BT(n){return n[1]}function zT(n){const{triangles:e,coords:t}=n;for(let i=0;i<e.length;i+=3){const r=2*e[i],s=2*e[i+1],o=2*e[i+2];if((t[o]-t[r])*(t[s+1]-t[r+1])-(t[s]-t[r])*(t[o+1]-t[r+1])>1e-10)return!1}return!0}function kT(n,e,t){return[n+Math.sin(n+e)*t,e+Math.cos(n-e)*t]}class td{static from(e,t=FT,i=BT,r){return new td("length"in e?VT(e,t,i,r):Float64Array.from(HT(e,t,i,r)))}constructor(e){this._delaunator=new oa(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&zT(e)){this.collinear=Int32Array.from({length:t.length/2},(u,p)=>p).sort((u,p)=>t[2*u]-t[2*p]||t[2*u+1]-t[2*p+1]);const c=this.collinear[0],l=this.collinear[this.collinear.length-1],h=[t[2*c],t[2*c+1],t[2*l],t[2*l+1]],f=1e-8*Math.hypot(h[3]-h[1],h[2]-h[0]);for(let u=0,p=t.length/2;u<p;++u){const m=kT(t[2*u],t[2*u+1],f);t[2*u]=m[0],t[2*u+1]=m[1]}this._delaunator=new oa(t)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1);for(let c=0,l=i.length;c<l;++c){const h=s[c%3===2?c-2:c+1];(i[c]===-1||o[h]===-1)&&(o[h]=c)}for(let c=0,l=r.length;c<l;++c)a[r[c]]=c;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],o[r[0]]=1,r.length===2&&(o[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new OT(this,e)}*neighbors(e){const{inedges:t,hull:i,_hullIndex:r,halfedges:s,triangles:o,collinear:a}=this;if(a){const f=a.indexOf(e);f>0&&(yield a[f-1]),f<a.length-1&&(yield a[f+1]);return}const c=t[e];if(c===-1)return;let l=c,h=-1;do{if(yield h=o[l],l=l%3===2?l-2:l+1,o[l]!==e)return;if(l=s[l],l===-1){const f=i[(r[e]+1)%i.length];f!==h&&(yield f);return}}while(l!==c)}find(e,t,i=0){if(e=+e,e!==e||(t=+t,t!==t))return-1;const r=i;let s;for(;(s=this._step(i,e,t))>=0&&s!==i&&s!==r;)i=s;return s}_step(e,t,i){const{inedges:r,hull:s,_hullIndex:o,halfedges:a,triangles:c,points:l}=this;if(r[e]===-1||!l.length)return(e+1)%(l.length>>1);let h=e,f=Os(t-l[e*2],2)+Os(i-l[e*2+1],2);const u=r[e];let p=u;do{let m=c[p];const v=Os(t-l[m*2],2)+Os(i-l[m*2+1],2);if(v<f&&(f=v,h=m),p=p%3===2?p-2:p+1,c[p]!==e)break;if(p=a[p],p===-1){if(p=s[(o[e]+1)%s.length],p!==m&&Os(t-l[p*2],2)+Os(i-l[p*2+1],2)<f)return p;break}}while(p!==u);return h}render(e){const t=e==null?e=new es:void 0,{points:i,halfedges:r,triangles:s}=this;for(let o=0,a=r.length;o<a;++o){const c=r[o];if(c<o)continue;const l=s[o]*2,h=s[c]*2;e.moveTo(i[l],i[l+1]),e.lineTo(i[h],i[h+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){t===void 0&&(!e||typeof e.moveTo!="function")&&(t=e,e=null),t=t==null?2:+t;const i=e==null?e=new es:void 0,{points:r}=this;for(let s=0,o=r.length;s<o;s+=2){const a=r[s],c=r[s+1];e.moveTo(a+t,c),e.arc(a,c,t,0,UT)}return i&&i.value()}renderHull(e){const t=e==null?e=new es:void 0,{hull:i,points:r}=this,s=i[0]*2,o=i.length;e.moveTo(r[s],r[s+1]);for(let a=1;a<o;++a){const c=2*i[a];e.lineTo(r[c],r[c+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new _h;return this.renderHull(e),e.value()}renderTriangle(e,t){const i=t==null?t=new es:void 0,{points:r,triangles:s}=this,o=s[e*=3]*2,a=s[e+1]*2,c=s[e+2]*2;return t.moveTo(r[o],r[o+1]),t.lineTo(r[a],r[a+1]),t.lineTo(r[c],r[c+1]),t.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new _h;return this.renderTriangle(e,t),t.value()}}function VT(n,e,t,i){const r=n.length,s=new Float64Array(r*2);for(let o=0;o<r;++o){const a=n[o];s[o*2]=e.call(i,a,o,n),s[o*2+1]=t.call(i,a,o,n)}return s}function*HT(n,e,t,i){let r=0;for(const s of n)yield e.call(i,s,r,n),yield t.call(i,s,r,n),++r}const nd=Math.PI,mm=nd/2,gm=180/nd,_m=nd/180,GT=Math.atan2,xm=Math.cos,WT=Math.max,$T=Math.min,vm=Math.sin,XT=Math.sign||function(n){return n>0?1:n<0?-1:0},l_=Math.sqrt;function qT(n){return n>1?mm:n<-1?-mm:Math.asin(n)}function c_(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function ei(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function fc(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function uc(n){var e=l_(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function id(n){return[GT(n[1],n[0])*gm,qT(WT(-1,$T(1,n[2])))*gm]}function Yi(n){const e=n[0]*_m,t=n[1]*_m,i=xm(t);return[i*xm(e),i*vm(e),vm(t)]}function rd(n){return n=n.map(e=>Yi(e)),c_(n[0],ei(n[2],n[1]))}function YT(n){const e=ZT(n),t=JT(e),i=jT(t,n),r=eA(t,n.length),s=KT(r,n),o=QT(t,n),{polygons:a,centers:c}=tA(o,t,n),l=nA(a),h=rA(t,n),f=iA(i,t);return{delaunay:e,edges:i,triangles:t,centers:c,neighbors:r,polygons:a,mesh:l,hull:h,urquhart:f,find:s}}function KT(n,e){function t(i,r){let s=i[0]-r[0],o=i[1]-r[1],a=i[2]-r[2];return s*s+o*o+a*a}return function(r,s,o){o===void 0&&(o=0);let a,c,l=o;const h=Yi([r,s]);do a=o,o=null,c=t(h,Yi(e[a])),n[a].forEach(f=>{let u=t(h,Yi(e[f]));if(u<c){c=u,o=f,l=f;return}});while(o!==null);return l}}function ZT(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=nT(n[e]),i=NT().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(i);const r=[];let s=1;for(let f=0,u=n.length;f<u;f++){let p=n[f][0]**2+n[f][1]**2;!isFinite(p)||p>1e32?r.push(f):p>s&&(s=p)}const o=1e6*l_(s);r.forEach(f=>n[f]=[o,0]),n.push([0,o]),n.push([-o,0]),n.push([0,-o]);const a=td.from(n);a.projection=i;const{triangles:c,halfedges:l,inedges:h}=a;for(let f=0,u=l.length;f<u;f++)if(l[f]<0){const p=f%3==2?f-2:f+1,m=f%3==0?f+2:f-1,v=l[p],_=l[m];l[v]=_,l[_]=v,l[p]=l[m]=-1,c[f]=c[p]=c[m]=e,h[c[v]]=v%3==0?v+2:v-1,h[c[_]]=_%3==0?_+2:_-1,f+=2-f%3}else c[f]>n.length-3-1&&(c[f]=e);return a}function jT(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(i=>{if(i[0]!==i[1]&&!(rd(i.map(r=>e[r]))<0))for(let r=0,s;r<3;r++)s=(r+1)%3,t.add(Gl([i[r],i[s]]).join("-"))}),Array.from(t,i=>i.split("-").map(Number)))}function JT(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let i=0,r=e.length/3;i<r;i++){const s=e[3*i],o=e[3*i+1],a=e[3*i+2];s!==o&&o!==a&&t.push([s,a,o])}return t}function QT(n,e){return n.map(t=>{const i=t.map(s=>e[s]).map(Yi),r=fc(fc(ei(i[1],i[0]),ei(i[2],i[1])),ei(i[0],i[2]));return id(uc(r))})}function eA(n,e){const t=[];return n.forEach(i=>{for(let r=0;r<3;r++){const s=i[r],o=i[(r+1)%3];t[s]=t[s]||[],t[s].push(o)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function tA(n,e,t){const i=[],r=n.slice();if(e.length===0){if(t.length<2)return{polygons:i,centers:r};if(t.length===2){const a=Yi(t[0]),c=Yi(t[1]),l=uc(fc(a,c)),h=uc(ei(a,c)),f=ei(l,h),u=[l,ei(l,f),ei(ei(l,f),f),ei(ei(ei(l,f),f),f)].map(id).map(o);return i.push(u),i.push(u.slice().reverse()),{polygons:i,centers:r}}}e.forEach((a,c)=>{for(let l=0;l<3;l++){const h=a[l],f=a[(l+1)%3],u=a[(l+2)%3];i[h]=i[h]||[],i[h].push([f,u,c,[h,f,u]])}});const s=i.map(a=>{const c=[a[0][2]];let l=a[0][1];for(let h=1;h<a.length;h++)for(let f=0;f<a.length;f++)if(a[f][0]==l){l=a[f][1],c.push(a[f][2]);break}if(c.length>2)return c;if(c.length==2){const h=ym(t[a[0][3][0]],t[a[0][3][1]],r[c[0]]),f=ym(t[a[0][3][2]],t[a[0][3][0]],r[c[0]]),u=o(h),p=o(f);return[c[0],p,c[1],u]}});function o(a){let c=-1;return r.slice(e.length,1/0).forEach((l,h)=>{l[0]===a[0]&&l[1]===a[1]&&(c=h+e.length)}),c<0&&(c=r.length,r.push(a)),c}return{polygons:s,centers:r}}function ym(n,e,t){n=Yi(n),e=Yi(e),t=Yi(t);const i=XT(c_(ei(e,n),t));return id(uc(fc(n,e)).map(r=>i*r))}function nA(n){const e=[];return n.forEach(t=>{if(!t)return;let i=t[t.length-1];for(let r of t)r>i&&e.push([i,r]),i=r}),e}function iA(n,e){return function(t){const i=new Map,r=new Map;return n.forEach((s,o)=>{const a=s.join("-");i.set(a,t[o]),r.set(a,!0)}),e.forEach(s=>{let o=0,a=-1;for(let c=0;c<3;c++){let l=Gl([s[c],s[(c+1)%3]]).join("-");i.get(l)>o&&(o=i.get(l),a=l)}r.set(a,!1)}),n.map(s=>r.get(s.join("-")))}}function rA(n,e){const t=new Set,i=[];n.map(a=>{if(!(rd(a.map(c=>e[c>e.length?0:c]))>1e-12))for(let c=0;c<3;c++){let l=[a[c],a[(c+1)%3]],h=`${l[0]}-${l[1]}`;t.has(h)?t.delete(h):t.add(`${l[1]}-${l[0]}`)}});const r=new Map;let s;if(t.forEach(a=>{a=a.split("-").map(Number),r.set(a[0],a[1]),s=a[0]}),s===void 0)return i;let o=s;do{i.push(o);let a=r.get(o);r.set(o,-1),o=a}while(o>-1&&o!==s);return i}function sA(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const i=e._data.map(r=>[e._vx(r),e._vy(r),r]).filter(r=>isFinite(r[0]+r[1]));e.points=i.map(r=>[r[0],r[1]]),e.valid=i.map(r=>r[2]),e.delaunay=YT(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return jp(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return jp(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((r,s)=>i.features.push({type:"Feature",geometry:r?{type:"Polygon",coordinates:[[...r,r[0]].map(o=>e.delaunay.centers[o])]}:null,properties:{site:e.valid[s],sitecoordinates:e.points[s],neighbours:e.delaunay.neighbors[s]}})),e.valid.length===1&&i.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),i},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((i,r)=>(i=i.map(s=>e.points[s]),i.center=e.delaunay.centers[r],i)).filter(i=>rd(i)>0).map(i=>({type:"Feature",properties:{circumcenter:i.center},geometry:{type:"Polygon",coordinates:[[...i,i[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i=e.delaunay.edges.map(s=>ro(e.points[s[0]],e.points[s[1]])),r=e.delaunay.urquhart(i);return{type:"FeatureCollection",features:e.delaunay.edges.map((s,o)=>({type:"Feature",properties:{source:e.valid[s[0]],target:e.valid[s[1]],length:i[o],urquhart:!!r[o]},geometry:{type:"LineString",coordinates:[e.points[s[0]],e.points[s[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(i=>[e.points[i[0]],e.points[i[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:i,polygons:r}=e.delaunay,s=[];for(const o of r)if(o)for(let a=o.length,c=o[a-1],l=o[0],h=0;h<a;c=l,l=o[++h])l>c&&s.push([i[c],i[l]]);return{type:"MultiLineString",coordinates:s}},e._found=void 0,e.find=function(t,i,r){if(e._found=e.delaunay.find(t,i,e._found),!r||ro([t,i],e.points[e._found])<r)return e._found},e.hull=function(t){t!==void 0&&e(t);const i=e.delaunay.hull,r=e.points;return i.length===0?null:{type:"Polygon",coordinates:[[...i.map(s=>r[s]),r[i[0]]]]}},n?e(n):e}function oA(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function sd(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function f_(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function pa(){}var la=.7,hc=1/la,Ks="\\s*([+-]?\\d+)\\s*",ca="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ki="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",aA=/^#([0-9a-f]{3,8})$/,lA=new RegExp(`^rgb\\(${Ks},${Ks},${Ks}\\)$`),cA=new RegExp(`^rgb\\(${Ki},${Ki},${Ki}\\)$`),fA=new RegExp(`^rgba\\(${Ks},${Ks},${Ks},${ca}\\)$`),uA=new RegExp(`^rgba\\(${Ki},${Ki},${Ki},${ca}\\)$`),hA=new RegExp(`^hsl\\(${ca},${Ki},${Ki}\\)$`),dA=new RegExp(`^hsla\\(${ca},${Ki},${Ki},${ca}\\)$`),Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};sd(pa,fa,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Mm,formatHex:Mm,formatHex8:pA,formatHsl:mA,formatRgb:Em,toString:Em});function Mm(){return this.rgb().formatHex()}function pA(){return this.rgb().formatHex8()}function mA(){return u_(this).formatHsl()}function Em(){return this.rgb().formatRgb()}function fa(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=aA.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?bm(e):t===3?new Yn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?il(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?il(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=lA.exec(n))?new Yn(e[1],e[2],e[3],1):(e=cA.exec(n))?new Yn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=fA.exec(n))?il(e[1],e[2],e[3],e[4]):(e=uA.exec(n))?il(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=hA.exec(n))?Am(e[1],e[2]/100,e[3]/100,1):(e=dA.exec(n))?Am(e[1],e[2]/100,e[3]/100,e[4]):Sm.hasOwnProperty(n)?bm(Sm[n]):n==="transparent"?new Yn(NaN,NaN,NaN,0):null}function bm(n){return new Yn(n>>16&255,n>>8&255,n&255,1)}function il(n,e,t,i){return i<=0&&(n=e=t=NaN),new Yn(n,e,t,i)}function gA(n){return n instanceof pa||(n=fa(n)),n?(n=n.rgb(),new Yn(n.r,n.g,n.b,n.opacity)):new Yn}function xh(n,e,t,i){return arguments.length===1?gA(n):new Yn(n,e,t,i??1)}function Yn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}sd(Yn,xh,f_(pa,{brighter(n){return n=n==null?hc:Math.pow(hc,n),new Yn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?la:Math.pow(la,n),new Yn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Yn(ns(this.r),ns(this.g),ns(this.b),dc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:wm,formatHex:wm,formatHex8:_A,formatRgb:Tm,toString:Tm}));function wm(){return`#${ts(this.r)}${ts(this.g)}${ts(this.b)}`}function _A(){return`#${ts(this.r)}${ts(this.g)}${ts(this.b)}${ts((isNaN(this.opacity)?1:this.opacity)*255)}`}function Tm(){const n=dc(this.opacity);return`${n===1?"rgb(":"rgba("}${ns(this.r)}, ${ns(this.g)}, ${ns(this.b)}${n===1?")":`, ${n})`}`}function dc(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ns(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function ts(n){return n=ns(n),(n<16?"0":"")+n.toString(16)}function Am(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Ai(n,e,t,i)}function u_(n){if(n instanceof Ai)return new Ai(n.h,n.s,n.l,n.opacity);if(n instanceof pa||(n=fa(n)),!n)return new Ai;if(n instanceof Ai)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,a=s-r,c=(s+r)/2;return a?(e===s?o=(t-i)/a+(t<i)*6:t===s?o=(i-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new Ai(o,a,c,n.opacity)}function xA(n,e,t,i){return arguments.length===1?u_(n):new Ai(n,e,t,i??1)}function Ai(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}sd(Ai,xA,f_(pa,{brighter(n){return n=n==null?hc:Math.pow(hc,n),new Ai(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?la:Math.pow(la,n),new Ai(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Yn(If(n>=240?n-240:n+120,r,i),If(n,r,i),If(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Ai(Rm(this.h),rl(this.s),rl(this.l),dc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=dc(this.opacity);return`${n===1?"hsl(":"hsla("}${Rm(this.h)}, ${rl(this.s)*100}%, ${rl(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Rm(n){return n=(n||0)%360,n<0?n+360:n}function rl(n){return Math.max(0,Math.min(1,n||0))}function If(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const od=n=>()=>n;function vA(n,e){return function(t){return n+t*e}}function yA(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function SA(n){return(n=+n)==1?h_:function(e,t){return t-e?yA(e,t,n):od(isNaN(e)?t:e)}}function h_(n,e){var t=e-n;return t?vA(n,t):od(isNaN(n)?e:n)}const Cm=(function n(e){var t=SA(e);function i(r,s){var o=t((r=xh(r)).r,(s=xh(s)).r),a=t(r.g,s.g),c=t(r.b,s.b),l=h_(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function MA(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function EA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bA(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),o;for(o=0;o<i;++o)r[o]=ad(n[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function wA(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function pc(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function TA(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=ad(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var vh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Df=new RegExp(vh.source,"g");function AA(n){return function(){return n}}function RA(n){return function(e){return n(e)+""}}function CA(n,e){var t=vh.lastIndex=Df.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",e=e+"";(i=vh.exec(n))&&(r=Df.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pc(i,r)})),t=Df.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?RA(c[0].x):AA(e):(e=c.length,function(l){for(var h=0,f;h<e;++h)a[(f=c[h]).i]=f.x(l);return a.join("")})}function ad(n,e){var t=typeof e,i;return e==null||t==="boolean"?od(e):(t==="number"?pc:t==="string"?(i=fa(e))?(e=i,Cm):CA:e instanceof fa?Cm:e instanceof Date?wA:EA(e)?MA:Array.isArray(e)?bA:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?TA:pc)(n,e)}function PA(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function IA(n){return function(){return n}}function DA(n){return+n}var Pm=[0,1];function Hs(n){return n}function yh(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:IA(isNaN(e)?NaN:.5)}function LA(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function NA(n,e,t){var i=n[0],r=n[1],s=e[0],o=e[1];return r<i?(i=yh(r,i),s=t(o,s)):(i=yh(i,r),s=t(s,o)),function(a){return s(i(a))}}function OA(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=yh(n[o],n[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var c=fw(n,a,1,i)-1;return s[c](r[c](a))}}function UA(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function FA(){var n=Pm,e=Pm,t=ad,i,r,s,o=Hs,a,c,l;function h(){var u=Math.min(n.length,e.length);return o!==Hs&&(o=LA(n[0],n[u-1])),a=u>2?OA:NA,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=a(n.map(i),e,t)))(i(o(u)))}return f.invert=function(u){return o(r((l||(l=a(e,n.map(i),pc)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,DA),h()):n.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),t=PA,h()},f.clamp=function(u){return arguments.length?(o=u?!0:Hs,h()):o!==Hs},f.interpolate=function(u){return arguments.length?(t=u,h()):t},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,p){return i=u,r=p,h()}}function BA(){return FA()(Hs,Hs)}function zA(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function mc(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function oo(n){return n=mc(Math.abs(n)),n?n[1]:NaN}function kA(n,e){return function(t,i){for(var r=t.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(t.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(e)}}function VA(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var HA=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function gc(n){if(!(e=HA.exec(n)))throw new Error("invalid format: "+n);var e;return new ld({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}gc.prototype=ld.prototype;function ld(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}ld.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function GA(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var _c;function WA(n,e){var t=mc(n,e);if(!t)return _c=void 0,n.toPrecision(e);var i=t[0],r=t[1],s=r-(_c=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+mc(n,Math.max(0,e+s-1))[0]}function Im(n,e){var t=mc(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Dm={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:zA,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Im(n*100,e),r:Im,s:WA,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Lm(n){return n}var Nm=Array.prototype.map,Om=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function $A(n){var e=n.grouping===void 0||n.thousands===void 0?Lm:kA(Nm.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?Lm:VA(Nm.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=gc(f);var p=f.fill,m=f.align,v=f.sign,_=f.symbol,x=f.zero,T=f.width,C=f.comma,M=f.precision,I=f.trim,R=f.type;R==="n"?(C=!0,R="g"):Dm[R]||(M===void 0&&(M=12),I=!0,R="g"),(x||p==="0"&&m==="=")&&(x=!0,p="0",m="=");var F=(u&&u.prefix!==void 0?u.prefix:"")+(_==="$"?t:_==="#"&&/[boxX]/.test(R)?"0"+R.toLowerCase():""),S=(_==="$"?i:/[%p]/.test(R)?o:"")+(u&&u.suffix!==void 0?u.suffix:""),A=Dm[R],k=/[defgprs%]/.test(R);M=M===void 0?6:/[gprs]/.test(R)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function B(z){var P=F,O=S,E,L,U;if(R==="c")O=A(z)+O,z="";else{z=+z;var G=z<0||1/z<0;if(z=isNaN(z)?c:A(Math.abs(z),M),I&&(z=GA(z)),G&&+z==0&&v!=="+"&&(G=!1),P=(G?v==="("?v:a:v==="-"||v==="("?"":v)+P,O=(R==="s"&&!isNaN(z)&&_c!==void 0?Om[8+_c/3]:"")+O+(G&&v==="("?")":""),k){for(E=-1,L=z.length;++E<L;)if(U=z.charCodeAt(E),48>U||U>57){O=(U===46?r+z.slice(E+1):z.slice(E))+O,z=z.slice(0,E);break}}}C&&!x&&(z=e(z,1/0));var K=P.length+z.length+O.length,te=K<T?new Array(T-K+1).join(p):"";switch(C&&x&&(z=e(te+z,te.length?T-O.length:1/0),te=""),m){case"<":z=P+z+O+te;break;case"=":z=P+te+z+O;break;case"^":z=te.slice(0,K=te.length>>1)+P+z+O+te.slice(K);break;default:z=te+P+z+O;break}return s(z)}return B.toString=function(){return f+""},B}function h(f,u){var p=Math.max(-8,Math.min(8,Math.floor(oo(u)/3)))*3,m=Math.pow(10,-p),v=l((f=gc(f),f.type="f",f),{suffix:Om[8+p/3]});return function(_){return v(m*_)}}return{format:l,formatPrefix:h}}var sl,d_,p_;XA({thousands:",",grouping:[3],currency:["$",""]});function XA(n){return sl=$A(n),d_=sl.format,p_=sl.formatPrefix,sl}function qA(n){return Math.max(0,-oo(Math.abs(n)))}function YA(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(oo(e)/3)))*3-oo(Math.abs(n)))}function KA(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,oo(e)-oo(n))+1}function ZA(n,e,t,i){var r=mw(n,e,t),s;switch(i=gc(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=YA(r,o))&&(i.precision=s),p_(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=KA(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=qA(r))&&(i.precision=s-(i.type==="%")*2);break}}return d_(i)}function jA(n){var e=n.domain;return n.ticks=function(t){var i=e();return pw(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return ZA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,h=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);h-- >0;){if(l=Yu(o,a,t),l===c)return i[r]=o,i[s]=a,e(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function Sh(){var n=BA();return n.copy=function(){return UA(n,Sh())},oA.apply(n,arguments),jA(n)}function Mh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function JA(n){if(Array.isArray(n))return n}function QA(n){if(Array.isArray(n))return Mh(n)}function eR(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tR(n,e,t){return e=xc(e),cR(n,m_()?Reflect.construct(e,[],xc(n).constructor):e.apply(n,t))}function nR(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function iR(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function xc(n){return xc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},xc(n)}function rR(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Eh(n,e)}function m_(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(m_=function(){return!!n})()}function sR(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function oR(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(h){l=!0,r=h}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function aR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lR(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cR(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return eR(n)}function Eh(n,e){return Eh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Eh(n,e)}function zi(n,e){return JA(n)||oR(n,e)||g_(n,e)||aR()}function Lf(n){return QA(n)||sR(n)||g_(n)||lR()}function g_(n,e){if(n){if(typeof n=="string")return Mh(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Mh(n,e):void 0}}function fR(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,i=t===void 0?1/0:t,r=uR(n,i),s=ta(r),o=hR(n,i),a=[].concat(Lf(s),Lf(o)),c={type:"Polygon",coordinates:n},l=Zg(c),h=zi(l,2),f=zi(h[0],2),u=f[0],p=f[1],m=zi(h[1],2),v=m[0],_=m[1],x=u>v||_>=89||p<=-89,T=[];if(x){var C=sA(a).triangles(),M=new Map(a.map(function(U,G){var K=zi(U,2),te=K[0],fe=K[1];return["".concat(te,"-").concat(fe),G]}));C.features.forEach(function(U){var G,K=U.geometry.coordinates[0].slice(0,3).reverse(),te=[];if(K.forEach(function(j){var ye=zi(j,2),pe=ye[0],qe=ye[1],le="".concat(pe,"-").concat(qe);M.has(le)&&te.push(M.get(le))}),te.length===3){if(te.some(function(j){return j<s.length})){var fe=U.properties.circumcenter;if(!bh(fe,c,x))return}(G=T).push.apply(G,te)}})}else if(o.length)for(var A=oa.from(a),k=function(G){var K,te=[2,1,0].map(function(ye){return A.triangles[G+ye]}),fe=te.map(function(ye){return a[ye]});if(te.some(function(ye){return ye<s.length})){var j=[0,1].map(function(ye){return gw(fe,function(pe){return pe[ye]})});if(!bh(j,c,x))return 1}(K=T).push.apply(K,Lf(te))},B=0,z=A.triangles.length;B<z;B+=3)k(B);else{var I=Vg(r),R=I.vertices,F=I.holes,S=F===void 0?[]:F;T=xw(R,S,2)}var P=Sh(Gl(a,function(U){return U[0]}),[0,1]),O=Sh(Gl(a,function(U){return U[1]}),[0,1]),E=a.map(function(U){var G=zi(U,2),K=G[0],te=G[1];return[P(K),O(te)]}),L={points:a,indices:T,uvs:E};return{contour:r,triangles:L}}function uR(n,e){return n.map(function(t){var i=[],r;return t.forEach(function(s){if(r){var o=ro(s,r)*180/Math.PI;if(o>e)for(var a=yT(r,s),c=1/Math.ceil(o/e),l=c;l<1;)i.push(a(l)),l+=c}i.push(r=s)}),i})}function hR(n,e){var t={type:"Polygon",coordinates:n},i=Zg(t),r=zi(i,2),s=zi(r[0],2),o=s[0],a=s[1],c=zi(r[1],2),l=c[0],h=c[1];if(Math.min(Math.abs(l-o),Math.abs(h-a))<e)return[];var f=o>l||h>=89||a<=-89;return dR(e,{minLng:o,maxLng:l,minLat:a,maxLat:h}).filter(function(u){return bh(u,t,f)})}function dR(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,i=e.maxLng,r=e.minLat,s=e.maxLat,o=Math.round(Math.pow(360/n,2)/Math.PI),a=(1+Math.sqrt(5))/2,c=function(x){return x/a*360%360-180},l=function(x){return Math.acos(2*x/o-1)/Math.PI*180-90},h=function(x){return o*(Math.cos((x+90)*Math.PI/180)+1)/2},f=[s!==void 0?Math.ceil(h(s)):0,r!==void 0?Math.floor(h(r)):o-1],u=t===void 0&&i===void 0?function(){return!0}:t===void 0?function(_){return _<=i}:i===void 0?function(_){return _>=t}:i>=t?function(_){return _>=t&&_<=i}:function(_){return _>=t||_<=i},p=[],m=f[0];m<=f[1];m++){var v=c(m);u(v)&&p.push([v,l(m)])}return p}function bh(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?vT(e,n):Ig(n,e)}var Al=window.THREE?window.THREE:{BufferGeometry:dn,Float32BufferAttribute:Vt},Um=new Al.BufferGeometry().setAttribute?"setAttribute":"addAttribute",pR=(function(n){function e(t,i,r,s,o,a,c){var l;nR(this,e),l=tR(this,e),l.type="ConicPolygonGeometry",l.parameters={polygonGeoJson:t,bottomHeight:i,topHeight:r,closedBottom:s,closedTop:o,includeSides:a,curvatureResolution:c},i=i||0,r=r||1,s=s!==void 0?s:!0,o=o!==void 0?o:!0,a=a!==void 0?a:!0,c=c||5;var h=fR(t,{resolution:c}),f=h.contour,u=h.triangles,p=ta(u.uvs),m=[],v=[],_=[],x=0,T=function(F){var S=Math.round(m.length/3),A=_.length;m=m.concat(F.vertices),v=v.concat(F.uvs),_=_.concat(S?F.indices.map(function(k){return k+S}):F.indices),l.addGroup(A,_.length-A,x++)};a&&T(M()),s&&T(I(i,!1)),o&&T(I(r,!0)),l.setIndex(_),l[Um]("position",new Al.Float32BufferAttribute(m,3)),l[Um]("uv",new Al.Float32BufferAttribute(v,2)),l.computeVertexNormals();function C(R,F){var S=typeof F=="function"?F:function(){return F},A=R.map(function(k){return k.map(function(B){var z=zi(B,2),P=z[0],O=z[1];return mR(O,P,S(P,O))})});return Vg(A)}function M(){for(var R=C(f,i),F=R.vertices,S=R.holes,A=C(f,r),k=A.vertices,B=ta([k,F]),z=Math.round(k.length/3),P=new Set(S),O=0,E=[],L=0;L<z;L++){var U=L+1;if(U===z)U=O;else if(P.has(U)){var G=U;U=O,O=G}E.push(L,L+z,U+z),E.push(U+z,U,L)}for(var K=[],te=1;te>=0;te--)for(var fe=0;fe<z;fe+=1)K.push(fe/(z-1),te);return{indices:E,vertices:B,uvs:K}}function I(R){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:F?u.indices:u.indices.slice().reverse(),vertices:C([u.points],R).vertices,uvs:p}}return l}return rR(e,n),iR(e)})(Al.BufferGeometry);function mR(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=(90-n)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}const Fm=new Or,ol=new W;class __ extends ly{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Vt(e,3)),this.setAttribute("uv",new Vt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Hu(t,6,1);return this.setAttribute("instanceStart",new Wi(i,3,0)),this.setAttribute("instanceEnd",new Wi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Hu(t,6,1);return this.setAttribute("instanceColorStart",new Wi(i,3,0)),this.setAttribute("instanceColorEnd",new Wi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Zv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Fm.setFromBufferAttribute(t),this.boundingBox.union(Fm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ol.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ol)),ol.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ol));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}De.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new dt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:Xh.merge([De.common,De.fog,De.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class x_ extends mi{constructor(e){super({type:"LineMaterial",uniforms:Xh.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Nf=new kt,Bm=new W,zm=new W,vn=new kt,yn=new kt,Fi=new kt,Of=new W,Uf=new qt,Sn=new my,km=new W,al=new Or,ll=new co,Bi=new kt;let ki,is;function Vm(n,e,t){return Bi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Bi.multiplyScalar(1/Bi.w),Bi.x=is/t.width,Bi.y=is/t.height,Bi.applyMatrix4(n.projectionMatrixInverse),Bi.multiplyScalar(1/Bi.w),Math.abs(Math.max(Bi.x,Bi.y))}function gR(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){Sn.start.fromBufferAttribute(r,a),Sn.end.fromBufferAttribute(s,a),Sn.applyMatrix4(t);const l=new W,h=new W;ki.distanceSqToSegment(Sn.start,Sn.end,h,l),h.distanceTo(l)<is*.5&&e.push({point:h,pointOnLine:l,distance:ki.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function _R(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),f=-e.near;ki.at(1,Fi),Fi.w=1,Fi.applyMatrix4(e.matrixWorldInverse),Fi.applyMatrix4(i),Fi.multiplyScalar(1/Fi.w),Fi.x*=s.x/2,Fi.y*=s.y/2,Fi.z=0,Of.copy(Fi),Uf.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(vn.fromBufferAttribute(c,u),yn.fromBufferAttribute(l,u),vn.w=1,yn.w=1,vn.applyMatrix4(Uf),yn.applyMatrix4(Uf),vn.z>f&&yn.z>f)continue;if(vn.z>f){const C=vn.z-yn.z,M=(vn.z-f)/C;vn.lerp(yn,M)}else if(yn.z>f){const C=yn.z-vn.z,M=(yn.z-f)/C;yn.lerp(vn,M)}vn.applyMatrix4(i),yn.applyMatrix4(i),vn.multiplyScalar(1/vn.w),yn.multiplyScalar(1/yn.w),vn.x*=s.x/2,vn.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,Sn.start.copy(vn),Sn.start.z=0,Sn.end.copy(yn),Sn.end.z=0;const v=Sn.closestPointToPointParameter(Of,!0);Sn.at(v,km);const _=sg.lerp(vn.z,yn.z,v),x=_>=-1&&_<=1,T=Of.distanceTo(km)<is*.5;if(x&&T){Sn.start.fromBufferAttribute(c,u),Sn.end.fromBufferAttribute(l,u),Sn.start.applyMatrix4(o),Sn.end.applyMatrix4(o);const C=new W,M=new W;ki.distanceSqToSegment(Sn.start,Sn.end,M,C),t.push({point:M,pointOnLine:C,distance:ki.origin.distanceTo(M),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class xR extends wt{constructor(e=new __,t=new x_({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Bm.fromBufferAttribute(t,o),zm.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Bm.distanceTo(zm);const s=new Hu(r,2,1);return e.setAttribute("instanceDistanceStart",new Wi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Wi(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ki=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;is=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),ll.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=is*.5;else{const f=Math.max(r.near,ll.distanceToPoint(ki.origin));l=Vm(r,f,c.resolution)}if(ll.radius+=l,ki.intersectsSphere(ll)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),al.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=is*.5;else{const f=Math.max(r.near,al.distanceToPoint(ki.origin));h=Vm(r,f,c.resolution)}al.expandByScalar(h),ki.intersectsBox(al)!==!1&&(i?gR(this,t):_R(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Nf),this.material.uniforms.resolution.value.set(Nf.z,Nf.w))}}const v_={Africa:16757575,Asia:9427311,Europe:9300160,"North America":16353195,"South America":16767309,Oceania:12160754,Antarctica:16055293,"Seven seas (open ocean)":12160754},vR=14211288,yR=3112916,SR=9358834,y_=100.12,MR=3,Hm=100.2,ER=100.28,bR=2373214,wR=16777215,TR=15398655,vc=[15224125,4026088,3129201,15905076,10120654];let cl=null;function ua(){if(!cl){const n=new Uint8Array([90,150,210,255]);cl=new pg(n,n.length,1,Uh),cl.needsUpdate=!0}return cl}function Rl(n){return new eo({color:n,gradientMap:ua()})}const Uo=Math.PI/180,Gm=(n,e,t)=>[t*Math.cos(e*Uo)*Math.sin(n*Uo),t*Math.sin(e*Uo),t*Math.cos(e*Uo)*Math.cos(n*Uo)];function AR(n){const e=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=r.geometry.type==="Polygon"?[r.geometry.coordinates]:r.geometry.coordinates;for(const o of s)for(const a of o)for(let c=0;c<a.length-1;c++){const l=a[c],h=a[c+1];e.push(...Gm(l[0],l[1],Hm),...Gm(h[0],h[1],Hm))}}const t=new __;t.setPositions(e);const i=new x_({color:bR,linewidth:2.5,transparent:!0,opacity:.9});return i.resolution.set(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{i.resolution.set(window.innerWidth,window.innerHeight)}),new xR(t,i)}const RR=-63;function CR(){const n=(90-RR)*Math.PI/180,e=new wt(new qi(y_,48,12,0,Math.PI*2,n,Math.PI-n),new eo({color:v_.Antarctica,gradientMap:ua()}));return e.name="ATA",e}function PR(n){const e=new _n,t=new Map,i=new Map,r=new wt(new qi($u,64,64),new eo({color:yR,gradientMap:ua()}));e.add(r),e.add(CR()),e.add(AR(n));for(const s of n.features){if(s.properties.id==="ATA")continue;const o=v_[s.properties.continent]??vR,a=new eo({color:o,gradientMap:ua()});t.set(s.properties.id,a),i.set(s.properties.id,s.properties.continent);const c=s.geometry.type==="Polygon"?[s.geometry.coordinates]:s.geometry.coordinates,l=new _n;l.name=s.properties.id;for(const h of c){const f=new pR(h,$u,y_,!1,!0,!1,MR);l.add(new wt(f,a))}e.add(l)}return{group:e,countryMaterials:t,continentOf:i}}function IR(){const n=new mi({transparent:!0,side:Hn,depthWrite:!1,uniforms:{glowColor:{value:new St(TR)}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform vec3 glowColor;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float rim = pow(1.0 - abs(dot(vNormal, vViewDir)), 2.2);
        gl_FragColor = vec4(glowColor, rim * 0.9);
      }`});return new wt(new qi(104.5,64,64),n)}function DR(n){const e=new Fv;e.background=new St(SR);const t=new di(60,1,.1,2e3);t.position.set(0,0,300);const i=new u1({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=new oy(16774368,2.4);r.position.set(200,150,100);const s=new iy(12376319,3813160,.9);e.add(r,s,new ay(16777215,.35)),e.add(IR());const o=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",o),o(),{scene:e,camera:t,renderer:i}}async function LR(){const n=async o=>{const a=await fetch(o);if(!a.ok)throw new Error(`Failed to load ${o}`);return await a.json()},[t,i,r,s]=await Promise.all([n("./data/world.geo.json"),n("./data/countries.json"),n("./data/landmarks.json"),n("./data/riddles.json")]);return{world:t,countries:i,landmarks:r,riddles:s}}const NR=8,OR=250,UR=["KeyA","ArrowLeft"],FR=["KeyD","ArrowRight"],BR=["ArrowUp","KeyR"];function zR(){const n=new Set;let e="",t=0,i=0,r=0;window.addEventListener("keydown",a=>{const c=UR.includes(a.code),l=FR.includes(a.code),h=BR.includes(a.code);if(!a.repeat&&(c||l||h)){const f=c?"L":l?"R":"U",u=performance.now();f===e&&u-t<OR?(f==="U"?r=1:i=f==="L"?-1:1,t=0):(e=f,t=u)}n.add(a.code)}),window.addEventListener("keyup",a=>n.delete(a.code)),window.addEventListener("blur",()=>n.clear()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&n.clear()});const s=(a,c)=>(a.some(l=>n.has(l))?1:0)-(c.some(l=>n.has(l))?1:0),o={throttle:0,turn:0,pitch:0};return{read(a){const c={throttle:s(["KeyW"],["KeyS"]),turn:s(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),pitch:s(["ArrowUp","KeyR"],["ArrowDown","KeyF"])},l=Math.min(1,NR*a);o.throttle+=(c.throttle-o.throttle)*l,o.turn+=(c.turn-o.turn)*l,o.pitch+=(c.pitch-o.pitch)*l;const h=i,f=r;return i=0,r=0,{...o,barrelRoll:h,loop:f}}}}function yc(n=15224125,e="seaplane"){const t=new _n,i=Rl(n),r=Rl(16249832),s=e==="lifter"?.85:.6,o=new wt(new Vl(s,2.4,4,8),i);o.rotation.x=Math.PI/2;const a=e==="stunt"?6:e==="jet"?3.6:5,c=e==="jet"?1.6:1.1,l=new wt(new Ci(a,.15,c),r);e==="jet"&&(l.position.z=-.4);const h=new wt(new Ci(1.8,.12,.6),r);h.position.set(0,.1,-1.6);const f=new wt(new Ci(.12,.9,.6),i);f.position.set(0,.5,-1.6);const u=new wt(new qs(e==="jet"?.35:.45,e==="jet"?1.4:.8,8),r);if(u.rotation.x=Math.PI/2,u.position.z=e==="jet"?2.3:2,t.add(o,l,h,f,u),e==="seaplane")for(const p of[-1,1]){const m=new wt(new Vl(.18,1.6,4,6),r);m.rotation.x=Math.PI/2,m.position.set(p*.9,-.8,.2),t.add(m)}if(e==="lifter"){const p=f.clone();p.position.y=.9,p.scale.set(1,.6,1),t.add(p)}if(e!=="jet"){const p=new _n;p.name="propeller";const m=Rl(3815994),v=new _n;v.name="propellerBlades";for(const x of[0,Math.PI/2]){const T=new wt(new Ci(.12,1.7,.06),m);T.rotation.z=x,v.add(T)}const _=new wt(new $h(.95,24),new hi({color:14540253,transparent:!0,opacity:.25,side:wi}));_.name="propellerDisc",_.visible=!1,p.add(v,_),p.position.z=2.45,t.add(p)}return t}const Ar=Math.PI/180;function S_(n,e){const t=n*Ar,i=e*Ar;return{east:new W(Math.cos(i),0,-Math.sin(i)),north:new W(-Math.sin(t)*Math.sin(i),Math.cos(t),-Math.sin(t)*Math.cos(i)),up:new W(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}}function M_(n,e,t,i,r,s,o){const a=new W().copy(Bn(e,t,i)),{east:c,north:l,up:h}=S_(e,t),f=l.clone().multiplyScalar(Math.cos(r*Ar)).addScaledVector(c,Math.sin(r*Ar)),u=Math.cos(s*Ar),p=Math.sin(s*Ar),m=f.clone().multiplyScalar(u).addScaledVector(h,p).normalize(),v=h.clone().multiplyScalar(u).addScaledVector(f,-p).normalize(),_=m.clone().cross(v).normalize(),x=v.clone().multiplyScalar(Math.cos(o*Ar)).addScaledVector(_,Math.sin(o*Ar)).normalize(),T=new qt().lookAt(m,new W(0,0,0),x);return n.position.copy(a),n.quaternion.setFromRotationMatrix(T),{position:a,forward:m,up:x}}const kR=.35,VR=8,HR=52;function GR(n){const e=Math.min(1,Math.max(0,n));return{spinRadPerS:VR+HR*e,blurVisible:e>=kR}}const Wm=Math.PI/180,WR=12,$R=.15,XR=25,qR=58,YR=16,KR=.06,ZR=1/60;function $m(n,e){const t=n.getObjectByName("propellerBlades"),i=n.getObjectByName("propellerDisc");return{update(r,s){const{position:o}=M_(n,r.lat,r.lon,r.altKm,r.headingDeg,r.pitchDeg,r.rollDeg),{east:a,north:c,up:l}=S_(r.lat,r.lon),h=c.clone().multiplyScalar(Math.cos(r.headingDeg*Wm)).addScaledVector(a,Math.sin(r.headingDeg*Wm)).normalize(),f=o.clone().addScaledVector(h,-30).addScaledVector(l,WR),u=o.clone().addScaledVector(h,XR);e.position.lerp(f,$R),e.up.copy(l),e.lookAt(u);const p=Math.min(1,Math.max(0,(r.speedKmh-to)/(Kh-to))),m=qR+YR*p;if(e.fov+=(m-e.fov)*KR,e.updateProjectionMatrix(),t&&i){const v=GR(p);t.rotation.z+=v.spinRadPerS*ZR,t.visible=!v.blurVisible,i.visible=v.blurVisible}}}}function jR(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:16px;left:16px;color:#fff;font:600 16px system-ui;background:rgba(11,16,38,.7);padding:10px 14px;border-radius:10px;pointer-events:none";const t=document.createElement("div"),i=document.createElement("div");return i.style.cssText="font-weight:400;font-size:13px;opacity:.8;margin-top:4px",e.append(t,i),n.appendChild(e),{setCountry(r){t.textContent=r?`Flying over: ${r}`:"Flying over: open ocean"},setTelemetry(r){i.textContent=`${Math.round(r.speedKmh)} km/h · hdg ${Math.round(r.headingDeg)}°`}}}let Cl=0,Xm=!1;function JR(n){if(!n)return;const e=n-Date.now();Xm?Cl+=(e-Cl)*.1:(Cl=e,Xm=!0)}function ri(){return Date.now()+Cl}const Us=.15;function QR(n){const e=new Map;return{sync(t,i){const r=new Set;t.players.forEach((s,o)=>{if(o===i)return;r.add(o);const a={lat:s.lat,lon:s.lon,altKm:s.altKm,headingDeg:s.headingDeg,pitchDeg:s.pitchDeg,rollDeg:s.rollDeg,barrelRollS:s.barrelRollS,loopS:s.loopS,speedKmh:s.speedKmh},c=e.get(o);if(c)c.targetState=a,c.tumbleUntil=s.tumbleUntil;else{const l=yc(vc[s.colorIdx%vc.length]);n.add(l),e.set(o,{mesh:l,current:a,targetState:a,tumbleUntil:s.tumbleUntil})}});for(const[s,o]of e)r.has(s)||(n.remove(o.mesh),e.delete(s))},update(){for(const t of e.values()){const i=t.current,r=t.targetState;i.lat+=(r.lat-i.lat)*Us,i.lon+=((r.lon-i.lon+540)%360-180)*Us,i.lon=(i.lon+540)%360-180,i.altKm+=(r.altKm-i.altKm)*Us,i.headingDeg=Af(i.headingDeg,r.headingDeg,Us),i.pitchDeg=Af(i.pitchDeg,r.pitchDeg,Us),i.rollDeg=Af(i.rollDeg,r.rollDeg,Us),M_(t.mesh,i.lat,i.lon,i.altKm,i.headingDeg,i.pitchDeg,i.rollDeg),ri()<t.tumbleUntil&&t.mesh.rotateZ(ri()/60%(Math.PI*2))}}}}const eC=16765471;function tC(n){const e=new wt(new Ac(2.5,2.5,60,24,1,!0),new hi({color:eC,transparent:!0,opacity:.45,side:wi,depthWrite:!1}));return e.visible=!1,n.add(e),{showAt(t,i){const r=Bn(t,i,0),s=new W(r.x,r.y,r.z).normalize();e.position.copy(s.clone().multiplyScalar(130)),e.quaternion.setFromUnitVectors(new W(0,1,0),s),e.visible=!0},hide(){e.visible=!1},update(t){if(!e.visible)return;const i=e.material;i.opacity=.35+.2*Math.sin(t*3)}}}const E_=4,Ff=.12,b_=64;function nC(){return{puffs:[],spawnTimerS:0}}function iC(n,e,t,i){const r=n.puffs.map(a=>({...a,ageS:a.ageS+e})).filter(a=>a.ageS<E_);let s=n.spawnTimerS+e;if(!i)return{puffs:r,spawnTimerS:Math.min(s,Ff)};const o=[...r];for(;s>=Ff;)s-=Ff,o.length<b_&&o.push({x:t.x,y:t.y,z:t.z,ageS:0});return{puffs:o,spawnTimerS:s}}const rC=.9,sC=2.2,qm=.95,Bf=.35,Ym=3,oC="#d7e7f2";function aC(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)throw new Error("2d canvas unavailable");const r=[{x:64,y:68,r:30},{x:40+n*3,y:62,r:20+n},{x:90-n*4,y:62,r:22},{x:56+n*5,y:46,r:17+n*2}],s=o=>{for(const a of r)i.beginPath(),i.arc(a.x,a.y+o,a.r,0,Math.PI*2),i.fill()};return i.fillStyle=oC,s(6),i.fillStyle="#ffffff",s(0),new ks(t)}function lC(n){const e=[];for(let s=0;s<Ym;s++)e.push(aC(s));const t=[],i=[];for(let s=0;s<b_;s++){const o=new Kr({map:e[s%Ym],transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.9}),a=new Bs(o);a.visible=!1,t.push(a),i.push(.8+Math.random()*.5),n.add(a)}let r=nC();return{update(s,o,a){r=iC(r,s,o,a);for(let c=0;c<t.length;c++){const l=t[c],h=r.puffs[c];if(!h){l.visible=!1;continue}const f=h.ageS/E_;l.visible=!0,l.position.set(h.x,h.y,h.z);const u=(rC+sC*f)*i[c];l.scale.set(u,u,1),l.material.opacity=f<Bf?qm:qm*(1-(f-Bf)/(1-Bf))}}}}function Lc(n){return/^[A-Za-z]{2}$/.test(n)?String.fromCodePoint(...[...n.toUpperCase()].map(e=>127462+(e.charCodeAt(0)-65))):"🏳️"}const cC={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"},w_=(n,e)=>{const t=n.legs[e];return t?{type:t.legType,countryId:t.countryId,zone:{lat:t.zoneLat,lon:t.zoneLon},label:t.label,sublabel:t.sublabel}:null};function fC(n,e,t){var s;if(!n||n.phase!=="racing")return null;const i=(s=n.players)==null?void 0:s.get(e);if(!i)return null;const r=w_(n,i.legIndex);return r?Ng(t,r):null}function uC(n){let e=-1,t=0,i=0;const r=()=>{e===-1&&t===0||(e=-1,t=0,n.banner.hide(),n.hints.clear(),n.beacon.hide())};return{update(s,o,a,c){var x,T;if(!s||s.phase!=="racing"){r();return}const l=s.players.get(o);if(!l){r();return}const h=w_(s,l.legIndex);if(!h){r();return}if(l.legIndex!==e||s.countdownEndsAt!==t){if(!(s.countdownEndsAt!==t)&&e>=0&&l.legIndex>e){const M=s.legs[e],I=((x=n.countries[(M==null?void 0:M.countryId)??""])==null?void 0:x.name)??"";n.banner.toast(`✅ ${I}! Leg ${e+1} of ${s.legs.length} done`)}e=l.legIndex,t=s.countdownEndsAt,i=0,n.hints.setTarget(h.countryId),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,Lc(((T=n.countries[h.countryId])==null?void 0:T.cca2)??""))}const f=ri(),u=f<l.fogUntil,p=s.difficulty,m=Math.max(0,(f-l.legStartedAt)/1e3),v=u?{continent:!1,compass:!1,outline:!1}:qu(m,p);n.hints.setFlags(v),n.banner.setCompass(v.compass?(Dg(a.lat,a.lon,h.zone.lat,h.zone.lon)-a.headingDeg+360)%360:null);const _=Lg(a,h,i,c);i=_.inZone?_.dwellS:0,n.banner.setDwell(h.type==="refuel"&&_.inZone?i/Zh:null),f<l.smokeUntil?n.banner.setWarning("💨 Engine out! Limping for a few seconds…"):l.vipState==="falling"?n.banner.setWarning("🪂 Your VIP bailed out — fly through the parachute!"):u?n.banner.setWarning("🌫 Fogged! Hints jammed for a few seconds"):h.type==="refuel"&&_.inZone?n.banner.setWarning("⛽ Refueling — hold steady!"):n.banner.setWarning(_.requirementBlocked?cC[h.type]??null:null)}}}const hC=150,dC=150,Km=160,pC=24,mC=8,gC=8,_C=6,Zm=48,jm=10,Jm=1.4,xC=.08,Wr=n=>new W(n.x,n.y,n.z);function vC(n){const e=(()=>{const O=document.createElement("canvas");O.width=128,O.height=128;const E=O.getContext("2d");if(!E)throw new Error("2d canvas unavailable");return E.fillStyle="#ffd94d",E.fillRect(0,0,128,128),E.font="bold 96px 'Trebuchet MS', Verdana, sans-serif",E.textAlign="center",E.textBaseline="middle",E.fillStyle="#24365e",E.fillText("?",64,70),new ks(O)})(),t=Rl(16767309);t.map=e;const i=new mg({color:2373214}),r=new Ci(2.2,2.2,2.2),s=new Kv(r),o=(()=>{const O=document.createElement("canvas");O.width=32,O.height=32;const E=O.getContext("2d"),L=E.createRadialGradient(16,16,1,16,16,15);return L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(1,"rgba(255,255,255,0)"),E.fillStyle=L,E.fillRect(0,0,32,32),new ks(O)})(),a=[];for(let O=0;O<pC;O++){const E=new _n;E.add(new wt(r,t.clone())),E.add(new qv(s,i.clone()));const L=new Bs(new Kr({map:o,transparent:!0,depthWrite:!1}));L.position.set(1.4,1.4,0),L.scale.setScalar(1.2),E.add(L),E.visible=!1,a.push({group:E,sparkle:L,wasActive:!1,popT:1}),n.add(E)}const c=new hi({color:3818072,transparent:!0,opacity:.85}),l=[];for(let O=0;O<mC;O++){const E=new _n;for(const[L,U,G]of[[0,0,1.1],[-.9,.2,.8],[.9,.2,.8],[0,.7,.7]]){const K=new wt(new qi(G,10,8),c);K.position.set(L,U,0),E.add(K)}E.visible=!1,l.push(E),n.add(E)}const h=new hi({color:16747586}),f=[];for(let O=0;O<5;O++){const E=new _n,L=new wt(new qi(.9,10,6,0,Math.PI*2,0,Math.PI/2),h),U=new wt(new qi(.3,8,6),new hi({color:16249832}));U.position.y=-.9,E.add(L,U),E.visible=!1,f.push(E),n.add(E)}const u=[];for(let O=0;O<_C;O++){const E=new _n,L=new wt(new qs(.35,1.4,8),new hi({color:15224125}));L.rotation.x=Math.PI/2;const U=new wt(new qs(.25,.8,6),new hi({color:16757069,transparent:!0,opacity:.9}));U.rotation.x=-Math.PI/2,U.position.z=-1,E.add(L,U),E.visible=!1,u.push(E),n.add(E)}const p=(()=>{const O=document.createElement("canvas");O.width=32,O.height=32;const E=O.getContext("2d"),L=E.createRadialGradient(16,16,2,16,16,15);return L.addColorStop(0,"rgba(40,44,52,0.95)"),L.addColorStop(1,"rgba(40,44,52,0)"),E.fillStyle=L,E.fillRect(0,0,32,32),new ks(O)})(),m=[];for(let O=0;O<Zm;O++){const E=new Bs(new Kr({map:p,transparent:!0,depthWrite:!1}));E.visible=!1,m.push({sprite:E,ageS:Jm}),n.add(E)}let v=0,_=0;const x=[];for(let O=0;O<jm;O++){const E=new Bs(new Kr({map:o,transparent:!0,depthWrite:!1}));E.visible=!1,x.push({sprite:E,ageS:1}),n.add(E)}let T=0;const C=(O,E)=>{const L=x[T];T=(T+1)%jm,L.sprite.position.copy(O),L.sprite.scale.setScalar(E),L.sprite.material.opacity=1,L.sprite.visible=!0,L.ageS=0},M=(()=>{const O=document.createElement("canvas");O.width=32,O.height=32;const E=O.getContext("2d"),L=E.createRadialGradient(16,16,2,16,16,14);return L.addColorStop(0,"rgba(255,240,150,1)"),L.addColorStop(.5,"rgba(255,200,80,0.9)"),L.addColorStop(1,"rgba(255,180,60,0)"),E.fillStyle=L,E.fillRect(0,0,32,32),new ks(O)})(),I=12,R=.45,F=[];for(let O=0;O<I;O++){const E=new Bs(new Kr({map:M,transparent:!0,depthWrite:!1}));E.scale.setScalar(1.8),E.visible=!1,F.push({sprite:E,from:new W,to:new W,t:1,delayS:0,hit:!1}),n.add(E)}let S=0;const A=[],k=new hi({color:12577023,transparent:!0,opacity:.4}),B=[];for(let O=0;O<5;O++){A.push(new wt(new Ci(6,4,6),k.clone())),A[O].visible=!1,n.add(A[O]);const E=new _n;for(let L=0;L<3;L++){const U=new Bs(new Kr({map:o,transparent:!0,depthWrite:!1}));U.scale.setScalar(.9),E.add(U)}E.visible=!1,B.push(E),n.add(E)}const z=new hi({color:2237998}),P=[];for(let O=0;O<gC;O++){const E=new _n;for(const[L,U]of[[0,0],[-.7,-.6],[.7,-.6]]){const G=new wt(new qs(.25,.7,5),z);G.rotation.x=Math.PI/2,G.position.set(L,0,U),E.add(G)}E.visible=!1,P.push(E),n.add(E)}return{update(O,E){const L=(O==null?void 0:O.phase)==="racing",U=ri();for(let j=0;j<a.length;j++){const ye=L?O.bubbles[j]:void 0,pe=a[j],qe=!!(ye&&ye.activeAt<=U);if(pe.wasActive&&!qe&&(pe.popT=0),pe.wasActive=qe,pe.popT<1){pe.popT=Math.min(1,pe.popT+1/(.3*60)),pe.group.visible=pe.popT<.999,pe.group.scale.setScalar(1+pe.popT*1.2),pe.group.traverse(le=>{const Ee=le.material;Ee&&(Ee.transparent=!0,Ee.opacity=1-pe.popT)});continue}if(!ye||!qe){pe.group.visible=!1;continue}pe.group.visible=!0,pe.group.scale.setScalar(1),pe.group.traverse(le=>{const Ee=le.material;Ee&&(Ee.opacity=1)}),pe.group.position.copy(Wr(Bn(ye.lat,ye.lon,hC))),pe.group.position.addScaledVector(pe.group.position.clone().normalize(),Math.sin(E*2+j)*.4),pe.group.rotation.y=E*1+j,pe.sparkle.material.opacity=.4+.6*Math.abs(Math.sin(E*1.5+j*1.3))}for(let j=0;j<l.length;j++){const ye=L?O.storms[j]:void 0,pe=l[j];pe.visible=!!ye,ye&&(pe.position.copy(Wr(Bn(ye.lat,ye.lon,dC))),pe.up.copy(pe.position.clone().normalize()))}for(let j=0;j<P.length;j++){const ye=L?O.birds[j]:void 0,pe=P[j];pe.visible=!!ye,ye&&pe.position.copy(Wr(Bn(ye.lat,ye.lon,Km)))}const G=[];L&&O.players.forEach(j=>{j.vipState==="falling"&&G.push({lat:j.vipLat,lon:j.vipLon,altKm:j.vipAltKm})});for(let j=0;j<f.length;j++){const ye=f[j],pe=G[j];ye.visible=!!pe,pe&&(ye.position.copy(Wr(Bn(pe.lat,pe.lon,pe.altKm))),ye.up.copy(ye.position.clone().normalize()))}for(let j=0;j<u.length;j++){const ye=L?O.rockets[j]:void 0,pe=u[j];if(pe.visible=!!ye,ye){const qe=Wr(Bn(ye.lat,ye.lon,Km)),le=O.players.get(ye.targetSessionId);pe.position.copy(qe),le&&pe.lookAt(Wr(Bn(le.lat,le.lon,le.altKm)))}}const K=1/60;v+=K;const te=v>=xC;te&&(v=0);let fe=0;L&&O.players.forEach(j=>{const ye=Wr(Bn(j.lat,j.lon,j.altKm));if(U<j.smokeUntil&&te){const pe=m[_];_=(_+1)%Zm,pe.sprite.position.copy(ye),pe.ageS=0,pe.sprite.visible=!0}if(fe<A.length){const pe=A[fe],qe=U<j.freezeUntil;pe.visible=qe,qe&&pe.position.copy(ye);const le=B[fe],Ee=U<j.tumbleUntil;le.visible=Ee,Ee&&(le.position.copy(ye),le.children.forEach((ve,je)=>{const Ye=E*5+je*Math.PI*2/3;ve.position.set(Math.cos(Ye)*2.4,1.8,Math.sin(Ye)*2.4)}))}fe+=1});for(const j of m){if(!j.sprite.visible)continue;j.ageS+=K;const ye=j.ageS/Jm;if(ye>=1){j.sprite.visible=!1;continue}j.sprite.scale.setScalar(1+ye*2.5),j.sprite.material.opacity=.8*(1-ye)}for(const j of x)if(j.sprite.visible){if(j.ageS+=K,j.ageS>=.25){j.sprite.visible=!1;continue}j.sprite.material.opacity=1-j.ageS/.25}for(const j of F)if(!(j.t>=1)){if(j.delayS>0){j.delayS-=K;continue}j.sprite.visible=!0,j.t=Math.min(1,j.t+K/R),j.sprite.position.lerpVectors(j.from,j.to,j.t),j.t>=1&&(j.sprite.visible=!1,j.hit&&C(j.to,3.5))}},flashShot(O,E,L){C(O,2);for(let U=0;U<3;U++){const G=F[S];S=(S+1)%I,G.from.copy(O),G.to.copy(E),G.t=0,G.delayS=U*.06,G.hit=L&&U===2,G.sprite.visible=!1}}}}const yC={jetstream:"💨",storm:"🌩",fog:"🌫",bird:"🐦",freeze:"❄",rocket:"🚀"},SC={jetstream:"Jet Stream",storm:"Storm Cloud",fog:"Fog Bomb",bird:"Bird Flock",freeze:"Time Freeze",rocket:"Rocket"},MC=new Set(["fog","freeze","rocket"]);function EC(n,e,t){const i=document.createElement("div");i.style.cssText="position:fixed;top:16px;right:16px;color:#fff;font:700 15px system-ui;background:rgba(11,16,38,.75);padding:10px 14px;border-radius:12px;pointer-events:none;display:none;text-align:center;z-index:5",n.appendChild(i);const r=document.createElement("div");r.style.cssText="position:fixed;top:76px;left:16px;color:#fff;font:700 18px system-ui;background:rgba(11,16,38,.7);padding:8px 12px;border-radius:10px;pointer-events:none;display:none;z-index:5",n.appendChild(r);const s=document.createElement("div");s.style.cssText="position:fixed;top:130px;left:50%;transform:translateX(-50%);color:#ffb14d;font:800 22px system-ui;background:rgba(60,20,20,.85);padding:8px 18px;border-radius:12px;pointer-events:none;display:none;z-index:6",s.textContent="⚠ ROCKET INCOMING!",n.appendChild(s);const o=document.createElement("div");o.style.cssText="position:fixed;top:35%;left:50%;transform:translateX(-50%);color:#fff;font:600 15px system-ui;background:rgba(20,27,61,.95);padding:14px 20px;border-radius:14px;display:none;text-align:left;z-index:8;pointer-events:auto",n.appendChild(o);let a=null,c="",l=!1;const h=()=>{const m=[];return a==null||a.players.forEach((v,_)=>{_===c||v.finishedAt!==0||m.push({sessionId:_,label:`${v.nickname} — leg ${v.legIndex+1}`})}),m},f=()=>{l=!1,o.style.display="none"},u=()=>{const m=h();if(m.length!==0){if(m.length===1){e(m[0].sessionId);return}l=!0,o.innerHTML='<div style="font-weight:800;margin-bottom:8px">Pick a rival (Esc cancels)</div>'+m.map((v,_)=>`<div data-target="${v.sessionId}" style="padding:4px 6px;cursor:pointer">${_+1}. ${v.label}</div>`).join(""),o.style.display="block";for(const v of o.querySelectorAll("[data-target]"))v.addEventListener("click",()=>{e(v.dataset.target),f()})}};window.addEventListener("keydown",m=>{if(l){m.code==="Escape"&&f();const _=Number(m.key);if(_>=1&&_<=4){const x=h()[_-1];x&&(e(x.sessionId),f())}return}if(!a||a.phase!=="racing")return;const v=a.players.get(c);if(v){if(m.code==="KeyF"){ri()>=v.shootCooldownUntil&&ri()>=v.smokeUntil&&t();return}m.code!=="Space"||v.heldItem===""||(m.preventDefault(),MC.has(v.heldItem)?u():e())}});let p="";return{update(m,v){a=m,c=v;const _=(m==null?void 0:m.phase)==="racing"?m.players.get(v):void 0,x=ri();if(!_)r.style.display="none",s.style.display="none",p="";else{const C=x<_.smokeUntil,M=x>=_.shootCooldownUntil&&!C,I=C?"💨 Engine out!":`${"❤".repeat(_.health)}${"🖤".repeat(Math.max(0,3-_.health))}  ${M?"🔫 F":"🔫 …"}`;I!==p&&(p=I,r.style.display="block",r.textContent=I);let R=!1;m.rockets.forEach(F=>{F.targetSessionId===v&&(R=!0)}),s.style.display=R?"block":"none"}const T=(_==null?void 0:_.heldItem)??"";if(T===""){i.style.display="none",l&&f();return}i.style.display="block",i.innerHTML=`<div style="font-size:26px">${yC[T]??"❔"}</div>${SC[T]??T}<div style="font-weight:400;font-size:12px;opacity:.75">Space to use</div>`}}}const Qm=["🥇","🥈","🥉","4.","5."];function bC(n){return n.sort((e,t)=>{const i=e.player.placement||99,r=t.player.placement||99;return i!==r?i-r:t.player.legIndex!==e.player.legIndex?t.player.legIndex-e.player.legIndex:e.player.nickname.localeCompare(t.player.nickname)})}function wC(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:96px;left:50%;transform:translateX(-50%);color:#fff;font:600 14px system-ui;background:rgba(11,16,38,.7);padding:10px 18px;border-radius:12px;pointer-events:none;text-align:center;z-index:4",n.appendChild(e);let t="";return{update(i,r,s){var c;const o=[];i.players.forEach((l,h)=>o.push({sessionId:h,player:l})),bC(o);const a=[i.phase,i.phase==="countdown"?Math.ceil((i.countdownEndsAt-ri())/1e3):"",o.map(({player:l})=>`${l.nickname}:${l.legIndex}:${l.placement}:${l.points}:${l.health}:${ri()<l.smokeUntil?"s":""}`).join(","),i.legs.length,i.hostSessionId===r].join("|");if(a!==t){if(t=a,i.phase==="countdown"){const l=Math.max(0,Math.ceil((i.countdownEndsAt-ri())/1e3));e.innerHTML="",e.textContent=`Contract: ${i.legs.length} legs — starting in ${l}…`}else if(i.phase==="racing"){const l=ri();e.innerHTML=o.map(({sessionId:h,player:f})=>{const u=h===r?" (you)":"",p=l<f.smokeUntil?"💨":"❤".repeat(f.health),m=f.placement>0?`🏁 ${Qm[f.placement-1]??f.placement}`:`Leg ${Math.min(f.legIndex+1,i.legs.length)}/${i.legs.length}`;return`<div>🛩 ${f.nickname}${u} ${p} — ${m}</div>`}).join("")}else if(i.phase==="finished"){const l=o.map(({sessionId:f,player:u})=>{const p=f===r,m=Qm[u.placement-1]??`${u.placement}.`;return`<div style="font-size:17px;margin:2px 0;${p?"color:#ffd94d":""}">${m} ${u.nickname}${p?" (you)":""} — ${u.points} pts</div>`}).join(""),h=r===i.hostSessionId?'<button id="race-again" style="margin-top:10px;padding:8px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 15px system-ui;cursor:pointer;pointer-events:auto">Race again</button>':'<div style="opacity:.7;margin-top:8px;font-weight:400">Waiting for the host to start the next race…</div>';e.innerHTML=`<div style="font-size:20px;font-weight:700;margin-bottom:6px">🏁 Race complete</div>${l}${h}`,s&&((c=e.querySelector("#race-again"))==null||c.addEventListener("click",s,{once:!0}))}else e.innerHTML="",e.textContent="";e.style.display=e.textContent||e.innerHTML?"block":"none"}}}}const TC="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.75);padding:12px 20px;border-radius:14px;pointer-events:none;text-align:center;min-width:340px;z-index:5",AC="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);color:#fff;font:800 30px system-ui;background:rgba(20,27,61,.92);padding:18px 30px;border-radius:18px;pointer-events:none;text-align:center;z-index:6;transition:opacity .4s ease";function RC(n){const e=document.createElement("div");e.style.cssText=TC,e.style.display="none",e.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;gap:10px">
      <span data-flag style="font-size:26px"></span>
      <span data-label></span>
      <span data-compass style="display:none;font-size:24px">⬆️</span>
      <span data-clock style="font-size:15px;font-weight:600;opacity:.85;font-variant-numeric:tabular-nums"></span>
    </div>
    <div data-sub style="font-weight:400;font-size:13px;opacity:.85;margin-top:4px"></div>
    <div data-warn style="font-weight:700;font-size:14px;color:#ffb14d;margin-top:4px;display:none"></div>
    <div data-dwellwrap style="height:8px;background:rgba(255,255,255,.15);border-radius:4px;margin-top:8px;display:none">
      <div data-dwell style="height:100%;width:0%;background:#2fbf71;border-radius:4px"></div>
    </div>`,n.appendChild(e);const t=s=>e.querySelector(s),i=document.createElement("div");i.style.cssText=AC,i.style.opacity="0",n.appendChild(i);let r=null;return{show(s,o){t("[data-flag]").textContent=s.type==="riddle"?"❓":o,t("[data-label]").textContent=s.label,t("[data-sub]").textContent=s.sublabel,e.style.display="block",this.setCompass(null),this.setDwell(null),this.setWarning(null)},hide(){e.style.display="none"},setCompass(s){const o=t("[data-compass]");s===null?o.style.display="none":(o.style.display="inline-block",o.style.transform=`rotate(${Math.round(s)}deg)`)},setDwell(s){const o=t("[data-dwellwrap]");s===null?o.style.display="none":(o.style.display="block",t("[data-dwell]").style.width=`${Math.min(100,s*100)}%`)},setWarning(s){const o=t("[data-warn]");o.style.display=s?"block":"none",o.textContent=s??""},setClock(s){t("[data-clock]").textContent=s??""},toast(s,o=1800){i.textContent=s,i.style.opacity="1",r&&clearTimeout(r),r=setTimeout(()=>{i.style.opacity="0"},o)}}}function cd(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var zf={},e0={},t0;function CC(){return t0||(t0=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),e0}var fl={},wh=function(n,e){return wh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},wh(n,e)};function T_(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");wh(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Sc=function(){return Sc=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Sc.apply(this,arguments)};function A_(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function R_(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function C_(n,e){return function(t,i){e(t,i,n)}}function P_(n,e,t,i,r,s){function o(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,u=!1,p=t.length-1;p>=0;p--){var m={};for(var v in i)m[v]=v==="access"?{}:i[v];for(var v in i.access)m.access[v]=i.access[v];m.addInitializer=function(x){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(x||null))};var _=(0,t[p])(a==="accessor"?{get:h.get,set:h.set}:h[c],m);if(a==="accessor"){if(_===void 0)continue;if(_===null||typeof _!="object")throw new TypeError("Object expected");(f=o(_.get))&&(h.get=f),(f=o(_.set))&&(h.set=f),(f=o(_.init))&&r.unshift(f)}else(f=o(_))&&(a==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),u=!0}function I_(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function D_(n){return typeof n=="symbol"?n:"".concat(n)}function L_(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function N_(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function O_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(f){o(f)}}function c(h){try{l(i.throw(h))}catch(f){o(f)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function U_(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Nc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function F_(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Nc(e,n,t)}function Mc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fd(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function B_(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(fd(arguments[e]));return n}function z_(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function k_(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function ao(n){return this instanceof ao?(this.v=n,this):new ao(n)}function V_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){i[p]&&(r[p]=function(v){return new Promise(function(_,x){s.push([p,v,_,x])>1||c(p,v)})},m&&(r[p]=m(r[p])))}function c(p,m){try{l(i[p](m))}catch(v){u(s[0][3],v)}}function l(p){p.value instanceof ao?Promise.resolve(p.value.v).then(h,f):u(s[0][2],p)}function h(p){c("next",p)}function f(p){c("throw",p)}function u(p,m){p(m),s.shift(),s.length&&c(s[0][0],s[0][1])}}function H_(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:ao(n[r](o)),done:!1}:s?s(o):o}:s}}function G_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Mc=="function"?Mc(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function W_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var PC=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},Th=function(n){return Th=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},Th(n)};function $_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=Th(n),i=0;i<t.length;i++)t[i]!=="default"&&Nc(e,n,t[i]);return PC(e,n),e}function X_(n){return n&&n.__esModule?n:{default:n}}function q_(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function Y_(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function K_(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function Z_(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var IC=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function j_(n){function e(s){n.error=n.hasError?new IC(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function J_(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const DC={__extends:T_,__assign:Sc,__rest:A_,__decorate:R_,__param:C_,__esDecorate:P_,__runInitializers:I_,__propKey:D_,__setFunctionName:L_,__metadata:N_,__awaiter:O_,__generator:U_,__createBinding:Nc,__exportStar:F_,__values:Mc,__read:fd,__spread:B_,__spreadArrays:z_,__spreadArray:k_,__await:ao,__asyncGenerator:V_,__asyncDelegator:H_,__asyncValues:G_,__makeTemplateObject:W_,__importStar:$_,__importDefault:X_,__classPrivateFieldGet:q_,__classPrivateFieldSet:Y_,__classPrivateFieldIn:K_,__addDisposableResource:Z_,__disposeResources:j_,__rewriteRelativeImportExtension:J_},LC=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Z_,get __assign(){return Sc},__asyncDelegator:H_,__asyncGenerator:V_,__asyncValues:G_,__await:ao,__awaiter:O_,__classPrivateFieldGet:q_,__classPrivateFieldIn:K_,__classPrivateFieldSet:Y_,__createBinding:Nc,__decorate:R_,__disposeResources:j_,__esDecorate:P_,__exportStar:F_,__extends:T_,__generator:U_,__importDefault:X_,__importStar:$_,__makeTemplateObject:W_,__metadata:N_,__param:C_,__propKey:D_,__read:fd,__rest:A_,__rewriteRelativeImportExtension:J_,__runInitializers:I_,__setFunctionName:L_,__spread:B_,__spreadArray:k_,__spreadArrays:z_,__values:Mc,default:DC},Symbol.toStringTag,{value:"Module"})),Oc=cd(LC);var kf={},n0;function Uc(){return n0||(n0=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(kf)),kf}var Vf={},Hf={},Gf={},$o={exports:{}},NC=$o.exports,i0;function ud(){return i0||(i0=1,(function(n,e){(function(t,i){i(e)})(NC,(function(t){t.OPERATION=void 0,(function(D){D[D.ADD=128]="ADD",D[D.REPLACE=0]="REPLACE",D[D.DELETE=64]="DELETE",D[D.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",D[D.MOVE_AND_ADD=160]="MOVE_AND_ADD",D[D.DELETE_AND_ADD=192]="DELETE_AND_ADD",D[D.CLEAR=10]="CLEAR",D[D.REVERSE=15]="REVERSE",D[D.MOVE=32]="MOVE",D[D.DELETE_BY_REFID=33]="DELETE_BY_REFID",D[D.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",u="~childType",p="~onEncodeEnd",m="~onDecodeEnd",v="~descriptors",_="~__numFields",x="~__refTypeFieldIndexes",T="~__viewFieldIndexes",C="$__fieldIndexesByViewTag";let M;try{M=new TextEncoder}catch{}const I=new ArrayBuffer(8),R=new Int32Array(I),F=new Float32Array(I),S=new Float64Array(I),A=new BigInt64Array(I),B=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(D,d){for(var g=0,y=0,w=0,H=D.length;w<H;w++)g=D.charCodeAt(w),g<128?y+=1:g<2048?y+=2:g<55296||g>=57344?y+=3:(w++,y+=4);return y};function z(D,d,g){for(var y=0,w=0,H=d.length;w<H;w++)y=d.charCodeAt(w),y<128?D[g.offset++]=y:y<2048?(D[g.offset]=192|y>>6,D[g.offset+1]=128|y&63,g.offset+=2):y<55296||y>=57344?(D[g.offset]=224|y>>12,D[g.offset+1]=128|y>>6&63,D[g.offset+2]=128|y&63,g.offset+=3):(w++,y=65536+((y&1023)<<10|d.charCodeAt(w)&1023),D[g.offset]=240|y>>18,D[g.offset+1]=128|y>>12&63,D[g.offset+2]=128|y>>6&63,D[g.offset+3]=128|y&63,g.offset+=4)}function P(D,d,g){D[g.offset++]=d&255}function O(D,d,g){D[g.offset++]=d&255}function E(D,d,g){D[g.offset++]=d&255,D[g.offset++]=d>>8&255}function L(D,d,g){D[g.offset++]=d&255,D[g.offset++]=d>>8&255}function U(D,d,g){D[g.offset++]=d&255,D[g.offset++]=d>>8&255,D[g.offset++]=d>>16&255,D[g.offset++]=d>>24&255}function G(D,d,g){const y=d>>24,w=d>>16,H=d>>8,X=d;D[g.offset++]=X&255,D[g.offset++]=H&255,D[g.offset++]=w&255,D[g.offset++]=y&255}function K(D,d,g){const y=Math.floor(d/Math.pow(2,32)),w=d>>>0;G(D,w,g),G(D,y,g)}function te(D,d,g){const y=d/Math.pow(2,32)>>0,w=d>>>0;G(D,w,g),G(D,y,g)}function fe(D,d,g){A[0]=BigInt.asIntN(64,d),U(D,R[0],g),U(D,R[1],g)}function j(D,d,g){A[0]=BigInt.asIntN(64,d),U(D,R[0],g),U(D,R[1],g)}function ye(D,d,g){F[0]=d,U(D,R[0],g)}function pe(D,d,g){S[0]=d,U(D,R[0],g),U(D,R[1],g)}function qe(D,d,g){D[g.offset++]=d?1:0}function le(D,d,g){d||(d="");let y=B(d,"utf8"),w=0;if(y<32)D[g.offset++]=y|160,w=1;else if(y<256)D[g.offset++]=217,D[g.offset++]=y%255,w=2;else if(y<65536)D[g.offset++]=218,L(D,y,g),w=3;else if(y<4294967296)D[g.offset++]=219,G(D,y,g),w=5;else throw new Error("String too long");return z(D,d,g),w+y}function Ee(D,d,g){if(isNaN(d))return Ee(D,0,g);if(isFinite(d)){if(d!==(d|0))return Math.abs(d)<=34028235e31&&(F[0]=d,Math.abs(Math.abs(F[0])-Math.abs(d))<1e-4)?(D[g.offset++]=202,ye(D,d,g),5):(D[g.offset++]=203,pe(D,d,g),9)}else return Ee(D,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,g);return d>=0?d<128?(D[g.offset++]=d&255,1):d<256?(D[g.offset++]=204,D[g.offset++]=d&255,2):d<65536?(D[g.offset++]=205,L(D,d,g),3):d<4294967296?(D[g.offset++]=206,G(D,d,g),5):(D[g.offset++]=207,te(D,d,g),9):d>=-32?(D[g.offset++]=224|d+32,1):d>=-128?(D[g.offset++]=208,P(D,d,g),2):d>=-32768?(D[g.offset++]=209,E(D,d,g),3):d>=-2147483648?(D[g.offset++]=210,U(D,d,g),5):(D[g.offset++]=211,K(D,d,g),9)}const ve={int8:P,uint8:O,int16:E,uint16:L,int32:U,uint32:G,int64:K,uint64:te,bigint64:fe,biguint64:j,float32:ye,float64:pe,boolean:qe,string:le,number:Ee,utf8Write:z,utf8Length:B},je=new ArrayBuffer(8),Ye=new Int32Array(je),it=new Float32Array(je),Ht=new Float64Array(je),gt=new BigUint64Array(je),It=new BigInt64Array(je);function Le(D,d,g){g>D.length-d.offset&&(g=D.length-d.offset);for(var y="",w=0,H=d.offset,X=d.offset+g;H<X;H++){var ne=D[H];if((ne&128)===0){y+=String.fromCharCode(ne);continue}if((ne&224)===192){y+=String.fromCharCode((ne&31)<<6|D[++H]&63);continue}if((ne&240)===224){y+=String.fromCharCode((ne&15)<<12|(D[++H]&63)<<6|(D[++H]&63)<<0);continue}if((ne&248)===240){w=(ne&7)<<18|(D[++H]&63)<<12|(D[++H]&63)<<6|(D[++H]&63)<<0,w>=65536?(w-=65536,y+=String.fromCharCode((w>>>10)+55296,(w&1023)+56320)):y+=String.fromCharCode(w);continue}console.error("decode.utf8Read(): Invalid byte "+ne+" at offset "+H+". Skip to end of string: "+(d.offset+g));break}return d.offset+=g,y}function rt(D,d){return nt(D,d)<<24>>24}function nt(D,d){return D[d.offset++]}function et(D,d){return _t(D,d)<<16>>16}function _t(D,d){return D[d.offset++]|D[d.offset++]<<8}function pt(D,d){return D[d.offset++]|D[d.offset++]<<8|D[d.offset++]<<16|D[d.offset++]<<24}function ft(D,d){return pt(D,d)>>>0}function Dt(D,d){return Ye[0]=pt(D,d),it[0]}function q(D,d){return Ye[0]=pt(D,d),Ye[1]=pt(D,d),Ht[0]}function sn(D,d){const g=ft(D,d);return pt(D,d)*Math.pow(2,32)+g}function Pt(D,d){const g=ft(D,d);return ft(D,d)*Math.pow(2,32)+g}function V(D,d){return Ye[0]=pt(D,d),Ye[1]=pt(D,d),It[0]}function b(D,d){return Ye[0]=pt(D,d),Ye[1]=pt(D,d),gt[0]}function Q(D,d){return nt(D,d)>0}function oe(D,d){const g=D[d.offset++];let y;return g<192?y=g&31:g===217?y=nt(D,d):g===218?y=_t(D,d):g===219&&(y=ft(D,d)),Le(D,d,y)}function he(D,d){const g=D[d.offset++];if(g<128)return g;if(g===202)return Dt(D,d);if(g===203)return q(D,d);if(g===204)return nt(D,d);if(g===205)return _t(D,d);if(g===206)return ft(D,d);if(g===207)return Pt(D,d);if(g===208)return rt(D,d);if(g===209)return et(D,d);if(g===210)return pt(D,d);if(g===211)return sn(D,d);if(g>223)return(255-g+1)*-1}function Ae(D,d){const g=D[d.offset];return g<192&&g>160||g===217||g===218||g===219}const be={utf8Read:Le,int8:rt,uint8:nt,int16:et,uint16:_t,int32:pt,uint32:ft,float32:Dt,float64:q,int64:sn,uint64:Pt,bigint64:V,biguint64:b,boolean:Q,string:oe,number:he,stringCheck:Ae},de={},_e=new Map;function we(D,d){d.constructor&&(_e.set(d.constructor,D),de[D]=d),d.encode&&(ve[D]=d.encode),d.decode&&(be[D]=d.decode)}function Ke(D){return de[D]}function Ne(D){for(const d in D)we(d,D[d]);return d=>Y(d)}const xn=class xn{static register(d){const g=Object.getPrototypeOf(d);if(g!==Ge){let y=xn.inheritedTypes.get(g);y||(y=new Set,xn.inheritedTypes.set(g,y)),y.add(d)}}static cache(d){let g=xn.cachedContexts.get(d);return g||(g=new xn(d),xn.cachedContexts.set(d,g)),g}constructor(d){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},d&&this.discoverTypes(d)}has(d){return this.schemas.has(d)}get(d){return this.types[d]}add(d,g=this.schemas.size){return this.schemas.has(d)?!1:(this.types[g]=d,d[Symbol.metadata]===void 0&&Je.initialize(d),this.schemas.set(d,g),!0)}getTypeId(d){return this.schemas.get(d)}discoverTypes(d,g,y,w){var ne,ee;if(w&&this.registerFilteredByParent(d,g,y),!this.add(d))return;(ne=xn.inheritedTypes.get(d))==null||ne.forEach(ce=>{this.discoverTypes(ce,g,y,w)});let H=d;for(;(H=Object.getPrototypeOf(H))&&H!==Ge&&H!==Function.prototype;)this.discoverTypes(H);const X=d[ee=Symbol.metadata]??(d[ee]={});X[T]&&(this.hasFilters=!0);for(const ce in X){const ge=ce,me=X[ge].type,xe=X[ge].tag!==void 0;if(typeof me!="string")if(typeof me=="function")this.discoverTypes(me,d,ge,w||xe);else{const ze=Object.values(me)[0];if(typeof ze=="string")continue;this.discoverTypes(ze,d,ge,w||xe)}}}registerFilteredByParent(d,g,y){let H=`${this.schemas.get(d)??this.schemas.size}`;g&&(H+=`-${this.schemas.get(g)}`),H+=`-${y}`,this.parentFiltered[H]=!0}debug(){let d="";for(const g in this.parentFiltered){const y=g.split("-").map(Number),w=y.pop();d+=`
		`,d+=`${g}: ${y.reverse().map((H,X)=>{const ne=this.types[H],ee=ne[Symbol.metadata];let ce=ne.name;return X===0&&(ce+=`[${ee[w].name}]`),`${ce}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${d}`}};xn.inheritedTypes=new Map,xn.cachedContexts=new Map;let Te=xn;function $e(D){if(Array.isArray(D))return{array:$e(D[0])};if(typeof D.type<"u")return D.type;if(st(D))return Object.keys(D).every(d=>typeof D[d]=="string")?"string":"number";if(typeof D=="object"&&D!==null){const d=Object.keys(D).find(g=>de[g]!==void 0);if(d)return D[d]=$e(D[d]),D}return D}function st(D){if(typeof D=="function"&&D[Symbol.metadata])return!1;const d=Object.keys(D),g=d.filter(y=>/\d+/.test(y));return!!(g.length>0&&g.length===d.length/2&&D[D[g[0]]]==g[0]||d.length>0&&d.every(y=>typeof D[y]=="string"&&D[y]===y))}const Je={addField(D,d,g,y,w){if(d>64)throw new Error(`Can't define field '${g}'.
Schema instances may only have up to 64 fields.`);D[d]=Object.assign(D[d]||{},{type:$e(y),index:d,name:g}),Object.defineProperty(D,v,{value:D[v]||{},enumerable:!1,configurable:!0}),w?(D[v][g]=w,D[v][`_${g}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):D[v][g]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(D,_,{value:d,enumerable:!1,configurable:!0}),Object.defineProperty(D,g,{value:d,enumerable:!1,configurable:!0}),typeof D[d].type!="string"&&(D[x]===void 0&&Object.defineProperty(D,x,{value:[],enumerable:!1,configurable:!0}),D[x].push(d))},setTag(D,d,g){const y=D[d],w=D[y];w.tag=g,D[T]||(Object.defineProperty(D,T,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(D,C,{value:{},enumerable:!1,configurable:!0})),D[T].push(y),D[C][g]||(D[C][g]=[]),D[C][g].push(y)},setFields(D,d){const g=D.prototype.constructor;Te.register(g);const y=Object.getPrototypeOf(g),w=y&&y[Symbol.metadata],H=Je.initialize(g);g[s]||(g[s]=Ge[s]),g[o]||(g[o]=Ge[o]),g[a]||(g[a]=Ge[a]),g.prototype.toJSON||(g.prototype.toJSON=Ge.prototype.toJSON);let X=H[_]??(w&&w[_])??-1;X++;for(const ne in d){const ee=$e(d[ne]),ce=typeof Object.keys(ee)[0]=="string"&&Ke(Object.keys(ee)[0]),ge=ce?Object.values(ee)[0]:ee;Je.addField(H,X,ne,ee,ae(`_${ne}`,X,ge,ce)),X++}return D},isDeprecated(D,d){return D[d].deprecated===!0},init(D){const d={};D[Symbol.metadata]=d,Object.defineProperty(d,_,{value:0,enumerable:!1,configurable:!0})},initialize(D){const d=Object.getPrototypeOf(D),g=d[Symbol.metadata];let y=D[Symbol.metadata]??Object.create(null);return d!==Ge&&y===g&&(y=Object.create(null),g&&(Object.setPrototypeOf(y,g),Object.defineProperty(y,_,{value:g[_],enumerable:!1,configurable:!0,writable:!0}),g[T]!==void 0&&(Object.defineProperty(y,T,{value:[...g[T]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(y,C,{value:{...g[C]},enumerable:!1,configurable:!0,writable:!0})),g[x]!==void 0&&Object.defineProperty(y,x,{value:[...g[x]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(y,v,{value:{...g[v]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(D,Symbol.metadata,{value:y,writable:!1,configurable:!0}),y},isValidInstance(D){return D.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(D.constructor[Symbol.metadata],_)},getFields(D){const d=D[Symbol.metadata],g={};for(let y=0;y<=d[_];y++)g[d[y].name]=d[y].type;return g},hasViewTagAtIndex(D,d){var g;return(g=D==null?void 0:D[T])==null?void 0:g.includes(d)}};function $(D){return{indexes:{},operations:[],queueRootNode:D}}function Re(){return{next:void 0,tail:void 0}}function ue(D,d){const g=D.indexes[d];g===void 0?D.indexes[d]=D.operations.push(d)-1:D.operations[g]=d}function Pe(D,d){var y;let g=D.indexes[d];g===void 0&&(g=Object.values(D.indexes).at(-1),d=(y=Object.entries(D.indexes).find(([w,H])=>H===g))==null?void 0:y[0]),D.operations[g]=void 0,delete D.indexes[d]}class Ie{constructor(d){var g;this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=d,this.metadata=d.constructor[Symbol.metadata],(g=this.metadata)!=null&&g[T]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(d){this.root=d;const g=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,g),g&&this.forEachChild((y,w)=>{y.root!==d?y.setRoot(d):d.add(y)})}setParent(d,g,y){if(this.addParent(d,y),!g)return;const w=g.add(this);g!==this.root&&(this.root=g,this.checkIsFiltered(d,y,w)),w&&this.forEachChild((H,X)=>{if(H.root===g){g.add(H),g.moveNextToParent(H);return}H.setParent(this.ref,g,X)})}forEachChild(d){var g,y;if(this.ref[u]){if(typeof this.ref[u]!="string")for(const[w,H]of this.ref.entries())H&&d(H[f],((g=this.indexes)==null?void 0:g[w])??w)}else for(const w of((y=this.metadata)==null?void 0:y[x])??[]){const H=this.metadata[w],X=this.ref[H.name];X&&d(X[f],w)}}operation(d){var g,y;this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-d),(g=this.root)==null||g.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-d),(y=this.root)==null||y.enqueueChangeTree(this,"changes"))}change(d,g=t.OPERATION.ADD){var X,ne,ee;const y=this.isFiltered||((ne=(X=this.metadata)==null?void 0:X[d])==null?void 0:ne.tag)!==void 0,w=y?this.filteredChanges:this.changes,H=this.indexedOperations[d];if(!H||H===t.OPERATION.DELETE){const ce=H&&H===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:g;this.indexedOperations[d]=ce}ue(w,d),y?(ue(this.allFilteredChanges,d),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(ue(this.allChanges,d),(ee=this.root)==null||ee.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(d){const g=this.isFiltered?this.filteredChanges:this.changes,y={},w={};for(const H in this.indexedOperations)y[Number(H)+d]=this.indexedOperations[H],w[Number(H)+d]=g.indexes[H];this.indexedOperations=y,g.indexes=w,g.operations=g.operations.map(H=>H+d)}shiftAllChangeIndexes(d,g=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(d,g,this.allFilteredChanges),this._shiftAllChangeIndexes(d,g,this.allChanges)):this._shiftAllChangeIndexes(d,g,this.allChanges)}_shiftAllChangeIndexes(d,g=0,y){const w={};let H=0;for(const X in y.indexes)w[H++]=y.indexes[X];y.indexes=w;for(let X=0;X<y.operations.length;X++){const ne=y.operations[X];ne>g&&(y.operations[X]=ne+d)}}indexedOperation(d,g,y=d){var w,H;this.indexedOperations[d]=g,this.filteredChanges!==void 0?(ue(this.allFilteredChanges,y),ue(this.filteredChanges,d),(w=this.root)==null||w.enqueueChangeTree(this,"filteredChanges")):(ue(this.allChanges,y),ue(this.changes,d),(H=this.root)==null||H.enqueueChangeTree(this,"changes"))}getType(d){return this.ref[u]||this.metadata[d].type}getChange(d){return this.indexedOperations[d]}getValue(d,g=!1){return this.ref[l](d,g)}delete(d,g,y=d){var X,ne,ee;if(d===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${d}'`)}catch(ce){console.warn(ce)}return}const w=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[d]=g??t.OPERATION.DELETE,ue(w,d),Pe(this.allChanges,y);const H=this.getValue(d);return H&&H[f]&&((X=this.root)==null||X.remove(H[f])),this.filteredChanges!==void 0?(Pe(this.allFilteredChanges,y),(ne=this.root)==null||ne.enqueueChangeTree(this,"filteredChanges")):(ee=this.root)==null||ee.enqueueChangeTree(this,"changes"),H}endEncode(d){var g,y;this.indexedOperations={},this[d]=$(),(y=(g=this.ref)[p])==null||y.call(g),this.isNew=!1}discard(d=!1){var g,y;(y=(g=this.ref)[p])==null||y.call(g),this.indexedOperations={},this.changes=$(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=$(this.filteredChanges.queueRootNode)),d&&(this.allChanges=$(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=$(this.allFilteredChanges.queueRootNode)))}discardAll(){const d=Object.keys(this.indexedOperations);for(let g=0,y=d.length;g<y;g++){const w=this.getValue(Number(d[g]));w&&w[f]&&w[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(d,g,y){var w,H,X,ne;this.root.types.hasFilters&&(this._checkFilteredByParent(d,g),this.filteredChanges!==void 0&&((w=this.root)==null||w.enqueueChangeTree(this,"filteredChanges"),y&&((H=this.root)==null||H.enqueueChangeTree(this,"allFilteredChanges")))),this.isFiltered||((X=this.root)==null||X.enqueueChangeTree(this,"changes"),y&&((ne=this.root)==null||ne.enqueueChangeTree(this,"allChanges")))}_checkFilteredByParent(d,g){if(!d)return;const y=Je.isValidInstance(this.ref)?this.ref.constructor:this.ref[u];let w,H=!Je.isValidInstance(d);H?(w=d[f],d=w.parent,g=w.parentIndex):w=d[f];const X=d.constructor;let ne=`${this.root.types.getTypeId(y)}`;X&&(ne+=`-${this.root.types.schemas.get(X)}`),ne+=`-${g}`;const ee=Je.hasViewTagAtIndex(X==null?void 0:X[Symbol.metadata],g);this.isFiltered=d[f].isFiltered||this.root.types.parentFiltered[ne]||ee,this.isFiltered&&(this.isVisibilitySharedWithParent=w.isFiltered&&typeof y!="string"&&!ee&&H,this.filteredChanges||(this.filteredChanges=$(),this.allFilteredChanges=$()),this.changes.operations.length>0&&(this.changes.operations.forEach(ce=>ue(this.filteredChanges,ce)),this.allChanges.operations.forEach(ce=>ue(this.allFilteredChanges,ce)),this.changes=$(),this.allChanges=$()))}get parent(){var d;return(d=this.parentChain)==null?void 0:d.ref}get parentIndex(){var d;return(d=this.parentChain)==null?void 0:d.index}addParent(d,g){if(this.hasParent((y,w)=>y[f]===d[f])){this.parentChain.index=g;return}this.parentChain={ref:d,index:g,next:this.parentChain}}removeParent(d=this.parent){let g=this.parentChain,y=null;for(;g;){if(g.ref[f]===d[f])return y?y.next=g.next:this.parentChain=g.next,!0;y=g,g=g.next}return this.parentChain===void 0}findParent(d){let g=this.parentChain;for(;g;){if(d(g.ref,g.index))return g;g=g.next}}hasParent(d){return this.findParent(d)!==void 0}getAllParents(){const d=[];let g=this.parentChain;for(;g;)d.push({ref:g.ref,index:g.index}),g=g.next;return d}}function Se(D,d,g,y,w,H){var X;typeof g=="string"?(X=ve[g])==null||X.call(ve,d,y,H):g[Symbol.metadata]!==void 0?(ve.number(d,y[f].refId,H),(w&t.OPERATION.ADD)===t.OPERATION.ADD&&D.tryEncodeTypeId(d,g,y.constructor,H)):ve.number(d,y[f].refId,H)}const Ze=function(D,d,g,y,w,H,X,ne,ee){if(d[H.offset++]=(y|w)&255,w===t.OPERATION.DELETE)return;const ce=g.ref,ge=ee[y];Se(D,d,ee[y].type,ce[ge.name],w,H)},He=function(D,d,g,y,w,H){if(d[H.offset++]=w&255,ve.number(d,y,H),w===t.OPERATION.DELETE)return;const X=g.ref;if((w&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof X.set=="function"){const ce=g.ref.$indexes.get(y);ve.string(d,ce,H)}const ne=X[u],ee=X[l](y);Se(D,d,ne,ee,w,H)},Yt=function(D,d,g,y,w,H,X,ne){const ee=g.ref,ce=ne&&g.isFiltered&&typeof g.getType(y)!="string";let ge;if(ce){const ze=ee.tmpItems[y];if(!ze)return;ge=ze[f].refId,w===t.OPERATION.DELETE?w=t.OPERATION.DELETE_BY_REFID:w===t.OPERATION.ADD&&(w=t.OPERATION.ADD_BY_REFID)}else ge=y;if(d[H.offset++]=w&255,ve.number(d,ge,H),w===t.OPERATION.DELETE||w===t.OPERATION.DELETE_BY_REFID)return;const me=g.getType(y),xe=g.getValue(y,X);Se(D,d,me,xe,w,H)},Ut=-1;function Gn(D,d,g,y,w,H,X,ne){const ee=D.root,ce=g[l](y);let ge;if((d&t.OPERATION.DELETE)===t.OPERATION.DELETE){const me=ee.refIds.get(ce);me!==void 0&&ee.removeRef(me),d!==t.OPERATION.DELETE_AND_ADD&&g[h](y),ge=void 0}if(d!==t.OPERATION.DELETE)if(Ge.is(w)){const me=be.number(H,X);if(ge=ee.refs.get(me),(d&t.OPERATION.ADD)===t.OPERATION.ADD){const xe=D.getInstanceType(H,X,w);ge||(ge=D.createInstanceOfType(xe)),ee.addRef(me,ge,ge!==ce||d===t.OPERATION.DELETE_AND_ADD&&ge===ce)}}else if(typeof w=="string")ge=be[w](H,X);else{const me=Ke(Object.keys(w)[0]),xe=be.number(H,X),ze=ee.refs.has(xe)?ce||ee.refs.get(xe):new me.constructor;if(ge=ze.clone(!0),ge[u]=Object.values(w)[0],ce){let Ve=ee.refIds.get(ce);if(Ve!==void 0&&xe!==Ve){const Ce=ce.entries();let Me;for(;(Me=Ce.next())&&!Me.done;){const[We,Nt]=Me.value;typeof Nt=="object"&&(Ve=ee.refIds.get(Nt),ee.removeRef(Ve)),ne.push({ref:ce,refId:Ve,op:t.OPERATION.DELETE,field:We,value:void 0,previousValue:Nt})}}}ee.addRef(xe,ge,ze!==ce||d===t.OPERATION.DELETE_AND_ADD&&ze===ce)}return{value:ge,previousValue:ce}}const Kn=function(D,d,g,y,w){const H=d[g.offset++],X=y.constructor[Symbol.metadata],ne=H>>6<<6,ee=H%(ne||255),ce=X[ee];if(ce===void 0)return console.warn("@colyseus/schema: field not defined at",{index:ee,ref:y.constructor.name,metadata:X}),Ut;const{value:ge,previousValue:me}=Gn(D,ne,y,ee,ce.type,d,g,w);ge!=null&&(y[ce.name]=ge),me!==ge&&w.push({ref:y,refId:D.currentRefId,op:ne,field:ce.name,value:ge,previousValue:me})},fs=function(D,d,g,y,w){const H=d[g.offset++];if(H===t.OPERATION.CLEAR){D.removeChildRefs(y,w),y.clear();return}const X=be.number(d,g),ne=y[u];let ee;(H&t.OPERATION.ADD)===t.OPERATION.ADD?typeof y.set=="function"?(ee=be.string(d,g),y.setIndex(X,ee)):ee=X:ee=y.getIndex(X);const{value:ce,previousValue:ge}=Gn(D,H,y,X,ne,d,g,w);if(ce!=null){if(typeof y.set=="function")y.$items.set(ee,ce);else if(typeof y.$setAt=="function")y.$setAt(X,ce,H);else if(typeof y.add=="function"){const me=y.add(ce);typeof me=="number"&&y.setIndex(me,me)}}ge!==ce&&w.push({ref:y,refId:D.currentRefId,op:H,field:"",dynamicIndex:ee,value:ce,previousValue:ge})},kc=function(D,d,g,y,w){let H=d[g.offset++],X;if(H===t.OPERATION.CLEAR){D.removeChildRefs(y,w),y.clear();return}else if(H===t.OPERATION.REVERSE){y.reverse();return}else if(H===t.OPERATION.DELETE_BY_REFID){const me=be.number(d,g),xe=D.root.refs.get(me);X=y.findIndex(ze=>ze===xe),y[h](X),w.push({ref:y,refId:D.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:X,value:void 0,previousValue:xe});return}else if(H===t.OPERATION.ADD_BY_REFID){const me=be.number(d,g),xe=D.root.refs.get(me);xe&&(X=y.findIndex(ze=>ze===xe)),(X===-1||X===void 0)&&(X=y.length)}else X=be.number(d,g);const ne=y[u];let ee=X;const{value:ce,previousValue:ge}=Gn(D,H,y,X,ne,d,g,w);ce!=null&&ce!==ge&&y.$setAt(X,ce,H),ge!==ce&&w.push({ref:y,refId:D.currentRefId,op:H,field:"",dynamicIndex:ee,value:ce,previousValue:ge})};class uo extends Error{}function ho(D,d,g,y){let w,H=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":w="number",isNaN(D)&&console.log(`trying to encode "NaN" in ${g.constructor.name}#${y}`);break;case"bigint64":case"biguint64":w="bigint";break;case"string":w="string",H=!0;break;case"boolean":return;default:return}if(typeof D!==w&&(!H||H&&D!==null)){let X=`'${JSON.stringify(D)}'${D&&D.constructor&&` (${D.constructor.name})`||""}`;throw new uo(`a '${w}' was expected, but ${X} was provided in ${g.constructor.name}#${y}`)}}function us(D,d,g,y){if(!(D instanceof d))throw new uo(`a '${d.name}' was expected, but '${D&&D.constructor.name}' was provided in ${g.constructor.name}#${y}`)}var po,mo;const Ji=(D,d)=>{const g=D.toString(),y=d.toString();return g<y?-1:g>y?1:0},yt=class yt{static[(po=o,mo=a,c)](d,g,y){var w;return!y||typeof d[u]=="string"||y.isChangeTreeVisible((w=d.tmpItems[g])==null?void 0:w[f])}static is(d){return Array.isArray(d)||d.array!==void 0}static from(d){return new yt(...Array.from(d))}constructor(...d){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const g=new Proxy(this,{get:(y,w)=>typeof w!="symbol"&&!isNaN(w)?this.items[w]:Reflect.get(y,w),set:(y,w,H)=>{var X;if(typeof w!="symbol"&&!isNaN(w)){if(H==null)y.$deleteAt(w);else{if(H[f]){us(H,y[u],y,w);const ne=y.items[w];y.isMovingItems?(ne!==void 0?H[f].isNew?y[f].indexedOperation(Number(w),t.OPERATION.MOVE_AND_ADD):(y[f].getChange(Number(w))&t.OPERATION.DELETE)===t.OPERATION.DELETE?y[f].indexedOperation(Number(w),t.OPERATION.DELETE_AND_MOVE):y[f].indexedOperation(Number(w),t.OPERATION.MOVE):H[f].isNew&&y[f].indexedOperation(Number(w),t.OPERATION.ADD),H[f].setParent(this,y[f].root,w)):y.$changeAt(Number(w),H),ne!==void 0&&((X=ne[f].root)==null||X.remove(ne[f]))}else y.$changeAt(Number(w),H);y.items[w]=H,y.tmpItems[w]=H}return!0}else return Reflect.set(y,w,H)},deleteProperty:(y,w)=>(typeof w=="number"?y.$deleteAt(w):delete y[w],!0),has:(y,w)=>typeof w!="symbol"&&!isNaN(Number(w))?Reflect.has(this.items,w):Reflect.has(y,w)});return Object.defineProperty(this,f,{value:new Ie(g),enumerable:!1,writable:!0}),d.length>0&&this.push(...d),g}set length(d){d===0?this.clear():d<this.items.length?this.splice(d,this.length-d):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...d){var w;let g=this.tmpItems.length;const y=this[f];for(let H=0,X=d.length;H<X;H++,g++){const ne=d[H];if(ne==null)return;typeof ne=="object"&&this[u]&&us(ne,this[u],this,H),y.indexedOperation(g,t.OPERATION.ADD,this.items.length),this.items.push(ne),this.tmpItems.push(ne),(w=ne[f])==null||w.setParent(this,y.root,g)}return g}pop(){let d=-1;for(let g=this.tmpItems.length-1;g>=0;g--)if(this.deletedIndexes[g]!==!0){d=g;break}if(!(d<0))return this[f].delete(d,void 0,this.items.length-1),this.deletedIndexes[d]=!0,this.items.pop()}at(d){return d<0&&(d+=this.length),this.items[d]}$changeAt(d,g){var H;if(g==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[d]===g)return;const y=this.items[d]!==void 0?typeof g=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,w=this[f];w.change(d,y),(H=g[f])==null||H.setParent(this,w.root,d)}$deleteAt(d,g){this[f].delete(d,g)}$setAt(d,g,y){d===0&&y===t.OPERATION.ADD&&this.items[d]!==void 0?this.items.unshift(g):y===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(d,1),this.items[d]=g):this.items[d]=g}clear(){if(this.items.length===0)return;const d=this[f];d.forEachChild((g,y)=>{var w;(w=d.root)==null||w.remove(g)}),d.discard(!0),d.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...d){return new yt(...this.items.concat(...d))}join(d){return this.items.join(d)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const d=this[f],g=this.tmpItems.findIndex(w=>w===this.items[0]),y=this.items.findIndex(w=>w===this.items[0]);return d.delete(g,t.OPERATION.DELETE,y),d.shiftAllChangeIndexes(-1,y),this.deletedIndexes[g]=!0,this.items.shift()}slice(d,g){const y=new yt;return y.push(...this.items.slice(d,g)),y}sort(d=Ji){this.isMovingItems=!0;const g=this[f];return this.items.sort(d).forEach((w,H)=>g.change(H,t.OPERATION.REPLACE)),this.tmpItems.sort(d),this.isMovingItems=!1,this}splice(d,g,...y){var ce,ge,me;const w=this[f],H=this.items.length,X=this.tmpItems.length,ne=y.length,ee=[];for(let xe=0;xe<X;xe++)this.deletedIndexes[xe]!==!0&&ee.push(xe);if(H>d){g===void 0&&(g=H-d);for(let xe=d;xe<d+g;xe++){const ze=ee[xe];w.delete(ze,t.OPERATION.DELETE),this.deletedIndexes[ze]=!0}}else g=0;if(ne>0){if(ne>g)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let xe=0;xe<ne;xe++){const ze=(ee[d]??H)+xe;w.indexedOperation(ze,this.deletedIndexes[ze]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),(ce=y[xe][f])==null||ce.setParent(this,w.root,ze)}}return g>ne&&w.shiftAllChangeIndexes(-(g-ne),ee[d+ne]),w.filteredChanges!==void 0?(ge=w.root)==null||ge.enqueueChangeTree(w,"filteredChanges"):(me=w.root)==null||me.enqueueChangeTree(w,"changes"),this.items.splice(d,g,...y)}unshift(...d){const g=this[f];return g.shiftChangeIndexes(d.length),g.isFiltered?ue(g.filteredChanges,this.items.length):ue(g.allChanges,this.items.length),d.forEach((y,w)=>{g.change(w,t.OPERATION.ADD)}),this.tmpItems.unshift(...d),this.items.unshift(...d)}indexOf(d,g){return this.items.indexOf(d,g)}lastIndexOf(d,g=this.length-1){return this.items.lastIndexOf(d,g)}every(d,g){return this.items.every(d,g)}some(d,g){return this.items.some(d,g)}forEach(d,g){return this.items.forEach(d,g)}map(d,g){return this.items.map(d,g)}filter(d,g){return this.items.filter(d,g)}reduce(d,g){return this.items.reduce(d,g)}reduceRight(d,g){return this.items.reduceRight(d,g)}find(d,g){return this.items.find(d,g)}findIndex(d,g){return this.items.findIndex(d,g)}fill(d,g,y){throw new Error("ArraySchema#fill() not implemented")}copyWithin(d,g,y){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return yt}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(d,g){return this.items.includes(d,g)}flatMap(d,g){throw new Error("ArraySchema#flatMap() is not supported.")}flat(d){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...d){return this.items.findLastIndex.apply(this.items,arguments)}with(d,g){const y=this.items.slice();return d<0&&(d+=this.length),y[d]=g,new yt(...y)}toReversed(){return this.items.slice().reverse()}toSorted(d){return this.items.slice().sort(d)}toSpliced(d,g,...y){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(d=>{let g=this.items.length;for(;g!=0;){let y=Math.floor(Math.random()*g);g--,[this[g],this[y]]=[this[y],this[g]]}})}move(d){return this.isMovingItems=!0,d(this),this.isMovingItems=!1,this}[l](d,g=!1){return g?this.items[d]:this.deletedIndexes[d]?this.items[d]:this.tmpItems[d]||this.items[d]}[h](d){this.items[d]=void 0,this.tmpItems[d]=void 0}[p](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[m](){this.items=this.items.filter(d=>d!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(d=>typeof d.toJSON=="function"?d.toJSON():d)}clone(d){let g;return d?(g=new yt,g.push(...this.items)):g=new yt(...this.map(y=>y[f]?y.clone():y)),g}};yt[po]=Yt,yt[mo]=kc;let Pn=yt;we("array",{constructor:Pn});var go,_o;const Lt=class Lt{static[(go=o,_o=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.isChangeTreeVisible((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.map!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const g=new Ie(this);if(g.indexes={},Object.defineProperty(this,f,{value:g,enumerable:!1,writable:!0}),d)if(d instanceof Map||d instanceof Lt)d.forEach((y,w)=>this.set(w,y));else for(const y in d)this.set(y,d[y]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return Lt}set(d,g){var ne;if(g==null)throw new Error(`MapSchema#set('${d}', ${g}): trying to set ${g} value on '${d}'.`);typeof g=="object"&&this[u]&&us(g,this[u],this,d),d=d.toString();const y=this[f],w=g[f]!==void 0;let H,X;if(typeof y.indexes[d]<"u"){H=y.indexes[d],X=t.OPERATION.REPLACE;const ee=this.$items.get(d);if(ee===g)return;w&&(X=t.OPERATION.DELETE_AND_ADD,ee!==void 0&&((ne=ee[f].root)==null||ne.remove(ee[f]))),this.deletedItems[H]&&delete this.deletedItems[H]}else H=y.indexes[_]??0,X=t.OPERATION.ADD,this.$indexes.set(H,d),y.indexes[d]=H,y.indexes[_]=H+1;return this.$items.set(d,g),y.change(H,X),w&&g[f].setParent(this,y.root,H),this}get(d){return this.$items.get(d)}delete(d){if(!this.$items.has(d))return!1;const g=this[f].indexes[d];return this.deletedItems[g]=this[f].delete(g),this.$items.delete(d)}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((g,y)=>{var w;(w=d.root)==null||w.remove(g)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return this.$items.has(d)}forEach(d){this.$items.forEach(d)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){const d=this[f];for(const g in this.deletedItems){const y=parseInt(g),w=this.$indexes.get(y);delete d.indexes[w],this.$indexes.delete(y)}this.deletedItems={}}toJSON(){const d={};return this.forEach((g,y)=>{d[y]=typeof g.toJSON=="function"?g.toJSON():g}),d}clone(d){let g;return d?g=Object.assign(new Lt,this):(g=new Lt,this.forEach((y,w)=>{y[f]?g.set(w,y.clone()):g.set(w,y)})),g}};Lt[go]=He,Lt[_o]=fs;let Wn=Lt;we("map",{constructor:Wn});var xo,Fr;const In=class In{static[(xo=o,Fr=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.isChangeTreeVisible((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.collection!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ie(this),this[f].indexes={},d&&d.forEach(g=>this.add(g)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){const g=this.$refId++;return d[f]!==void 0&&d[f].setParent(this,this[f].root,g),this[f].indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this[f].change(g),g}at(d){const g=Array.from(this.$items.keys())[d];return this.$items.get(g)}entries(){return this.$items.entries()}delete(d){const g=this.$items.entries();let y,w;for(;(w=g.next())&&!w.done;)if(d===w.value[1]){y=w.value[0];break}return y===void 0?!1:(this.deletedItems[y]=this[f].delete(y),this.$indexes.delete(y),this.$items.delete(y))}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((g,y)=>{var w;(w=d.root)==null||w.remove(g)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return Array.from(this.$items.values()).some(g=>g===d)}forEach(d){this.$items.forEach((g,y,w)=>d(g,y,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((g,y)=>{d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d}clone(d){let g;return d?g=Object.assign(new In,this):(g=new In,this.forEach(y=>{y[f]?g.add(y.clone()):g.add(y)})),g}};In[xo]=He,In[Fr]=fs;let Qi=In;we("collection",{constructor:Qi});var vo,_a;const Rt=class Rt{static[(vo=o,_a=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.visible.has((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.set!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ie(this),this[f].indexes={},d&&d.forEach(g=>this.add(g)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){var w;if(this.has(d))return!1;const g=this.$refId++;d[f]!==void 0&&d[f].setParent(this,this[f].root,g);const y=((w=this[f].indexes[g])==null?void 0:w.op)??t.OPERATION.ADD;return this[f].indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this[f].change(g,y),g}entries(){return this.$items.entries()}delete(d){const g=this.$items.entries();let y,w;for(;(w=g.next())&&!w.done;)if(d===w.value[1]){y=w.value[0];break}return y===void 0?!1:(this.deletedItems[y]=this[f].delete(y),this.$indexes.delete(y),this.$items.delete(y))}clear(){const d=this[f];d.discard(!0),d.indexes={},this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){const g=this.$items.values();let y=!1,w;for(;(w=g.next())&&!w.done;)if(d===w.value){y=!0;break}return y}forEach(d){this.$items.forEach((g,y,w)=>d(g,y,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((g,y)=>{d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d}clone(d){let g;return d?g=Object.assign(new Rt,this):(g=new Rt,this.forEach(y=>{y[f]?g.add(y.clone()):g.add(y)})),g}};Rt[vo]=He,Rt[_a]=fs;let vr=Rt;we("set",{constructor:vr});const _i=-1;function Vc(D){return Te.register(D),D}function N(D=_i){return function(d,g){var ne;const y=d.constructor,H=Object.getPrototypeOf(y)[Symbol.metadata],X=y[ne=Symbol.metadata]??(y[ne]=Object.assign({},y[Symbol.metadata],H??Object.create(null)));Je.setTag(X,g,D)}}function Y(D,d){return function(g,y){const w=g.constructor;if(!D)throw new Error(`${w.name}: @type() reference provided for "${y}" is undefined. Make sure you don't have any circular dependencies.`);D=$e(D),Te.register(w);const X=Object.getPrototypeOf(w)[Symbol.metadata],ne=Je.initialize(w);let ee=ne[y];if(ne[ee]!==void 0){if(ne[ee].deprecated)return;if(ne[ee].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${y}' definition on '${w.name}'.
Check @type() annotation`)}catch(ce){const ge=ce.stack.split(`
`)[4].trim();throw new Error(`${ce.message} ${ge}`)}}else ee=ne[_]??(X&&X[_])??-1,ee++;if(d&&d.manual)Je.addField(ne,ee,y,D,{enumerable:!0,configurable:!0,writable:!0});else{const ce=typeof Object.keys(D)[0]=="string"&&Ke(Object.keys(D)[0]),ge=ce?Object.values(D)[0]:D;Je.addField(ne,ee,y,D,ae(`_${y}`,ee,ge,ce))}}}function ae(D,d,g,y){return{get:function(){return this[D]},set:function(w){var X,ne;const H=this[D]??void 0;if(w!==H){if(w!=null){y?(y.constructor===Pn&&!(w instanceof Pn)&&(w=new Pn(...w)),y.constructor===Wn&&!(w instanceof Wn)&&(w=new Wn(w)),w[u]=g):typeof g!="string"?us(w,g,this,D.substring(1)):ho(w,g,this,D.substring(1));const ee=this[f];H!==void 0&&H[f]?((X=ee.root)==null||X.remove(H[f]),this.constructor[s](ee,d,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](ee,d,t.OPERATION.ADD),(ne=w[f])==null||ne.setParent(this,ee.root,d)}else H!==void 0&&this[f].delete(d);this[D]=w}},enumerable:!0,configurable:!0}}function ie(D=!0){return function(d,g){var ee;const y=d.constructor,H=Object.getPrototypeOf(y)[Symbol.metadata],X=y[ee=Symbol.metadata]??(y[ee]=Object.assign({},y[Symbol.metadata],H??Object.create(null))),ne=X[g];X[ne].deprecated=!0,D&&(X[v]??(X[v]={}),X[v][g]={get:function(){throw new Error(`${g} is deprecated.`)},set:function(ce){},enumerable:!1,configurable:!0}),Object.defineProperty(X,ne,{value:X[ne],enumerable:!1,configurable:!0})}}function se(D,d,g){for(let y in d)Y(d[y],g)(D.prototype,y);return D}function Oe(D,d,g=Ge){const y={},w={},H={},X={};for(let ge in D){const me=D[ge];typeof me=="object"?(me.view!==void 0&&(X[ge]=typeof me.view=="boolean"?_i:me.view),y[ge]=$e(me),Object.prototype.hasOwnProperty.call(me,"default")?H[ge]=me.default:Array.isArray(me)||me.array!==void 0?H[ge]=new Pn:me.map!==void 0?H[ge]=new Wn:me.collection!==void 0?H[ge]=new Qi:me.set!==void 0?H[ge]=new vr:me.type!==void 0&&Ge.is(me.type)&&(!me.type.prototype.initialize||me.type.prototype.initialize.length===0)&&(H[ge]=new me.type)):typeof me=="function"?Ge.is(me)?((!me.prototype.initialize||me.prototype.initialize.length===0)&&(H[ge]=new me),y[ge]=$e(me)):w[ge]=me:y[ge]=$e(me)}const ne=()=>{const ge={};for(const me in H){const xe=H[me];xe&&typeof xe.clone=="function"?ge[me]=xe.clone():ge[me]=xe}return ge},ee=ge=>{const me=Object.keys(y),xe={};for(const ze in ge)me.includes(ze)||(xe[ze]=ge[ze]);return xe},ce=Je.setFields(class extends g{constructor(...ge){w.initialize&&typeof w.initialize=="function"?(super(Object.assign({},ne(),ee(ge[0]||{}))),new.target===ce&&w.initialize.apply(this,ge)):super(Object.assign({},ne(),ge[0]||{}))}},y);ce._getDefaultValues=ne,Object.assign(ce.prototype,w);for(let ge in X)N(X[ge])(ce.prototype,ge);return d&&Object.defineProperty(ce,"name",{value:d}),ce.extends=(ge,me)=>Oe(ge,me,ce),ce}function ke(D){return new Array(D).fill(0).map((d,g)=>g===D-1?"└─ ":"   ").join("")}function Ue(D){const d=D[f].root,g={ops:{},refs:[]};let y=d.changes.next;for(;y;){const w=y.changeTree;if(w===void 0){y=y.next;continue}const H=w.indexedOperations;g.refs.push(`refId#${w.refId}`);for(const X in H){const ne=H[X],ee=t.OPERATION[ne];g.ops[ee]||(g.ops[ee]=0),g.ops[t.OPERATION[ne]]++}y=y.next}return g}var Xe,Qe;const Dn=class Dn{static initialize(d){var g;Object.defineProperty(d,f,{value:new Ie(d),enumerable:!1,writable:!0}),Object.defineProperties(d,((g=d.constructor[Symbol.metadata])==null?void 0:g[v])||{})}static is(d){return typeof d[Symbol.metadata]=="object"}static[(Xe=o,Qe=a,s)](d,g,y=t.OPERATION.ADD){d.change(g,y)}static[c](d,g,y){var X,ne;const H=(X=d.constructor[Symbol.metadata][g])==null?void 0:X.tag;if(y===void 0)return H===void 0;if(H===void 0)return!0;if(H===_i)return y.isChangeTreeVisible(d[f]);{const ee=(ne=y.tags)==null?void 0:ne.get(d[f]);return ee&&ee.has(H)}}constructor(d){Dn.initialize(this),d&&Object.assign(this,d)}assign(d){return Object.assign(this,d),this}setDirty(d,g){const y=this.constructor[Symbol.metadata];this[f].change(y[y[d]].index,g)}clone(){var y;const d=Object.create(this.constructor.prototype);Dn.initialize(d);const g=this.constructor[Symbol.metadata];for(const w in g){const H=g[w].name;typeof this[H]=="object"&&typeof((y=this[H])==null?void 0:y.clone)=="function"?d[H]=this[H].clone():d[H]=this[H]}return d}toJSON(){const d={},g=this.constructor[Symbol.metadata];for(const y in g){const w=g[y],H=w.name;!w.deprecated&&this[H]!==null&&typeof this[H]<"u"&&(d[H]=typeof this[H].toJSON=="function"?this[H].toJSON():this[H])}return d}discardAllChanges(){this[f].discardAll()}[l](d){const g=this.constructor[Symbol.metadata];return this[g[d].name]}[h](d){const g=this.constructor[Symbol.metadata];this[g[d].name]=void 0}static debugRefIds(d,g=!1,y=0,w,H=""){var xe;const X=g?` - ${JSON.stringify(d.toJSON())}`:"",ne=d[f],ee=w?w.root.refIds.get(d):ne.refId,ce=w?w.root:ne.root,ge=((xe=ce==null?void 0:ce.refCount)==null?void 0:xe[ee])>1?` [×${ce.refCount[ee]}]`:"";let me=`${ke(y)}${H}${d.constructor.name} (refId: ${ee})${ge}${X}
`;return ne.forEachChild((ze,Ve)=>{let Ce=Ve;typeof Ve=="number"&&d.$indexes&&(Ce=d.$indexes.get(Ve)??Ve);const Me=d.forEach!==void 0&&Ce!==void 0?`["${Ce}"]: `:"";me+=this.debugRefIds(ze.ref,g,y+1,w,Me)}),me}static debugRefIdEncodingOrder(d,g="allChanges"){let y=[],w=d[f].root[g].next;for(;w;)w.changeTree&&y.push(w.changeTree.refId),w=w.next;return y}static debugRefIdsFromDecoder(d){return this.debugRefIds(d.state,!1,0,d)}static debugChanges(d,g=!1){const y=d[f],w=g?y.allChanges:y.changes,H=g?"allChanges":"changes";let X=`${d.constructor.name} (${y.refId}) -> .${H}:
`;function ne(ee){ee.operations.filter(ce=>ce).forEach(ce=>{const ge=y.indexedOperations[ce];X+=`- [${ce}]: ${t.OPERATION[ge]} (${JSON.stringify(y.getValue(Number(ce),g))})
`})}return ne(w),!g&&y.filteredChanges&&y.filteredChanges.operations.filter(ee=>ee).length>0&&(X+=`${d.constructor.name} (${y.refId}) -> .filteredChanges:
`,ne(y.filteredChanges)),g&&y.allFilteredChanges&&y.allFilteredChanges.operations.filter(ee=>ee).length>0&&(X+=`${d.constructor.name} (${y.refId}) -> .allFilteredChanges:
`,ne(y.allFilteredChanges)),X}static debugChangesDeep(d,g="changes"){var ge,me;let y="";const w=d[f],H=w.root,X=new Map,ne=[];let ee=0;for(const[xe,ze]of Object.entries(H[g])){const Ve=H.changeTrees[xe];if(!Ve)continue;let Ce=!1,Me=[],We=(ge=Ve.parent)==null?void 0:ge[f];if(Ve===w)Ce=!0;else for(;We!==void 0;){if(Me.push(We),We.ref===d){Ce=!0;break}We=(me=We.parent)==null?void 0:me[f]}Ce&&(ne.push(Ve.refId),ee+=Object.keys(ze).length,X.set(Ve,Me.reverse()))}y+=`---
`,y+=`root refId: ${w.refId}
`,y+=`Total instances: ${ne.length} (refIds: ${ne.join(", ")})
`,y+=`Total changes: ${ee}
`,y+=`---
`;const ce=new WeakSet;for(const[xe,ze]of X.entries()){ze.forEach((Nt,Wt)=>{ce.has(Nt)||(y+=`${ke(Wt)}${Nt.ref.constructor.name} (refId: ${Nt.refId})
`,ce.add(Nt))});const Ve=xe.indexedOperations,Ce=ze.length,Me=ke(Ce),We=Ce>0?`(${xe.parentIndex}) `:"";y+=`${Me}${We}${xe.ref.constructor.name} (refId: ${xe.refId}) - changes: ${Object.keys(Ve).length}
`;for(const Nt in Ve){const Wt=Ve[Nt];y+=`${ke(Ce+1)}${t.OPERATION[Wt]}: ${Nt}
`}}return`${y}`}};Dn[Xe]=Ze,Dn[Qe]=Kn;let Ge=Dn;function at(D,d,g,y){var w=arguments.length,H=w<3?d:y,X;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")H=Reflect.decorate(D,d,g,y);else for(var ne=D.length-1;ne>=0;ne--)(X=D[ne])&&(H=(w<3?X(H):w>3?X(d,g,H):X(d,g))||H);return w>3&&H&&Object.defineProperty(d,g,H),H}typeof SuppressedError=="function"&&SuppressedError;class tt{constructor(d){this.types=d,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Re(),this.allFilteredChanges=Re(),this.changes=Re(),this.filteredChanges=Re()}getNextUniqueId(){return this.nextUniqueId++}add(d){d.refId===void 0&&(d.refId=this.getNextUniqueId());const g=this.changeTrees[d.refId]===void 0;g&&(this.changeTrees[d.refId]=d);const y=this.refCount[d.refId];if(y===0){const w=d.allChanges.operations;let H=w.length;for(;H--;)d.indexedOperations[w[H]]=t.OPERATION.ADD,ue(d.changes,H)}return this.refCount[d.refId]=(y||0)+1,g}remove(d){const g=this.refCount[d.refId]-1;return g<=0?(d.root=void 0,delete this.changeTrees[d.refId],this.removeChangeFromChangeSet("allChanges",d),this.removeChangeFromChangeSet("changes",d),d.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",d),this.removeChangeFromChangeSet("filteredChanges",d)),this.refCount[d.refId]=0,d.forEachChild((y,w)=>{y.removeParent(d.ref)&&(y.parentChain===void 0||y.parentChain&&this.refCount[y.refId]>0?this.remove(y):y.parentChain&&this.moveNextToParent(y))})):(this.refCount[d.refId]=g,this.recursivelyMoveNextToParent(d)),g}recursivelyMoveNextToParent(d){this.moveNextToParent(d),d.forEachChild((g,y)=>this.recursivelyMoveNextToParent(g))}moveNextToParent(d){d.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",d),this.moveNextToParentInChangeTreeList("allFilteredChanges",d)):(this.moveNextToParentInChangeTreeList("changes",d),this.moveNextToParentInChangeTreeList("allChanges",d))}moveNextToParentInChangeTreeList(d,g){var ce;const y=this[d],w=g[d].queueRootNode;if(!w)return;const H=g.parent;if(!H||!H[f])return;const X=(ce=H[f][d])==null?void 0:ce.queueRootNode;if(!X||X===w)return;const ne=X.position;w.position>ne||(w.prev?w.prev.next=w.next:y.next=w.next,w.next?w.next.prev=w.prev:y.tail=w.prev,w.prev=X,w.next=X.next,X.next?X.next.prev=w:y.tail=w,X.next=w,this.updatePositionsAfterMove(y,w,ne+1))}enqueueChangeTree(d,g,y=d[g].queueRootNode){y||(d[g].queueRootNode=this.addToChangeTreeList(this[g],d))}addToChangeTreeList(d,g){const y={changeTree:g,next:void 0,prev:void 0,position:d.tail?d.tail.position+1:0};return d.next?(y.prev=d.tail,d.tail.next=y,d.tail=y):(d.next=y,d.tail=y),y}updatePositionsAfterRemoval(d,g){let y=d.next,w=0;for(;y;)w>=g&&(y.position=w),y=y.next,w++}updatePositionsAfterMove(d,g,y){let w=d.next,H=0;for(;w;)w.position=H,w=w.next,H++}removeChangeFromChangeSet(d,g){const y=this[d],w=g[d].queueRootNode;if(w&&w.changeTree===g){const H=w.position;return w.prev?w.prev.next=w.next:y.next=w.next,w.next?w.next.prev=w.prev:y.tail=w.prev,this.updatePositionsAfterRemoval(y,H),g[d].queueRootNode=void 0,!0}return!1}}const xi=class xi{constructor(d){this.sharedBuffer=Buffer.allocUnsafe(xi.BUFFER_SIZE),this.context=Te.cache(d.constructor),this.root=new tt(this.context),this.setState(d)}setState(d){this.state=d,this.state[f].setRoot(this.root)}encode(d={offset:0},g,y=this.sharedBuffer,w="changes",H=w==="allChanges",X=d.offset){const ne=g!==void 0,ee=this.state[f];let ce=this.root[w];for(;ce=ce.next;){const ge=ce.changeTree;if(ne){if(!g.isChangeTreeVisible(ge)){g.invisible.add(ge);continue}g.invisible.delete(ge)}const me=ge[w],xe=ge.ref,ze=me.operations.length;if(ze===0)continue;const Ve=xe.constructor,Ce=Ve[o],Me=Ve[c],We=Ve[Symbol.metadata];(ne||d.offset>X||ge!==ee)&&(y[d.offset++]=255,ve.number(y,ge.refId,d));for(let Nt=0;Nt<ze;Nt++){const Wt=me.operations[Nt];if(Wt<0){y[d.offset++]=Math.abs(Wt)&255;continue}const Ln=H?t.OPERATION.ADD:ge.indexedOperations[Wt];Wt===void 0||Ln===void 0||Me&&!Me(xe,Wt,g)||Ce(this,y,ge,Wt,Ln,d,H,ne,We)}}if(d.offset>y.byteLength){const ge=Math.ceil(d.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(ge/1024)} * 1024; // ${Math.round(ge/1024)} KB
`),y=Buffer.alloc(ge,y),y===this.sharedBuffer&&(this.sharedBuffer=y),this.encode({offset:X},g,y,w,H)}else return y.subarray(0,d.offset)}encodeAll(d={offset:0},g=this.sharedBuffer){return this.encode(d,void 0,g,"allChanges",!0)}encodeAllView(d,g,y,w=this.sharedBuffer){const H=y.offset;return this.encode(y,d,w,"allFilteredChanges",!0,H),Buffer.concat([w.subarray(0,g),w.subarray(H,y.offset)])}encodeView(d,g,y,w=this.sharedBuffer){const H=y.offset;for(const[X,ne]of d.changes){const ee=this.root.changeTrees[X];if(ee===void 0){d.changes.delete(X);continue}const ce=Object.keys(ne);if(ce.length===0)continue;const me=ee.ref.constructor,xe=me[o],ze=me[Symbol.metadata];w[y.offset++]=255,ve.number(w,ee.refId,y);for(let Ve=0,Ce=ce.length;Ve<Ce;Ve++){const Me=Number(ce[Ve]),Nt=ee.ref[l](Me)!==void 0&&ne[Me]||t.OPERATION.DELETE;xe(this,w,ee,Me,Nt,y,!1,!0,ze)}}return d.changes.clear(),this.encode(y,d,w,"filteredChanges",!1,H),Buffer.concat([w.subarray(0,g),w.subarray(H,y.offset)])}discardChanges(){let d=this.root.changes.next;for(;d;)d.changeTree.endEncode("changes"),d=d.next;for(this.root.changes=Re(),d=this.root.filteredChanges.next;d;)d.changeTree.endEncode("filteredChanges"),d=d.next;this.root.filteredChanges=Re()}tryEncodeTypeId(d,g,y,w){const H=this.context.getTypeId(g),X=this.context.getTypeId(y);if(X===void 0){console.warn(`@colyseus/schema WARNING: Class "${y.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}H!==X&&(d[w.offset++]=213,ve.number(d,X,w))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};xi.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let At=xi;function Zt(D,d){if(d===-1||d>=D.length)return!1;const g=D.length-1;for(let y=d;y<g;y++)D[y]=D[y+1];return D.length=g,!0}class Kt extends Error{constructor(d){super(d),this.name="DecodingWarning"}}class Ft{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(d,g,y=!0){this.refs.set(d,g),this.refIds.set(g,d),y&&(this.refCount[d]=(this.refCount[d]||0)+1),this.deletedRefs.has(d)&&this.deletedRefs.delete(d)}removeRef(d){const g=this.refCount[d];if(g===void 0){try{throw new Kt("trying to remove refId that doesn't exist: "+d)}catch(y){console.warn(y)}return}if(g===0){try{const y=this.refs.get(d);throw new Kt(`trying to remove refId '${d}' with 0 refCount (${y.constructor.name}: ${JSON.stringify(y)})`)}catch(y){console.warn(y)}return}(this.refCount[d]=g-1)<=0&&this.deletedRefs.add(d)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(d=>{if(this.refCount[d]>0)return;const g=this.refs.get(d);if(g.constructor[Symbol.metadata]!==void 0){const y=g.constructor[Symbol.metadata];for(const w in y){const H=y[w].name,X=typeof g[H]=="object"&&this.refIds.get(g[H]);X&&!this.deletedRefs.has(X)&&this.removeRef(X)}}else typeof g[u]=="function"&&Array.from(g.values()).forEach(y=>{const w=this.refIds.get(y);this.deletedRefs.has(w)||this.removeRef(w)});this.refs.delete(d),delete this.refCount[d],delete this.callbacks[d]}),this.deletedRefs.clear()}addCallback(d,g,y){if(d===void 0){const w=typeof g=="number"?t.OPERATION[g]:g;throw new Error(`Can't addCallback on '${w}' (refId is undefined)`)}return this.callbacks[d]||(this.callbacks[d]={}),this.callbacks[d][g]||(this.callbacks[d][g]=[]),this.callbacks[d][g].push(y),()=>this.removeCallback(d,g,y)}removeCallback(d,g,y){var H,X,ne;const w=(ne=(X=(H=this.callbacks)==null?void 0:H[d])==null?void 0:X[g])==null?void 0:ne.indexOf(y);w!==void 0&&w!==-1&&Zt(this.callbacks[d][g],w)}}class on{constructor(d,g){this.currentRefId=0,this.setState(d),this.context=g||new Te(d.constructor)}setState(d){this.state=d,this.root=new Ft,this.root.addRef(0,d)}decode(d,g={offset:0},y=this.state){var ee,ce,ge;const w=[],H=this.root,X=d.byteLength;let ne=y.constructor[a];for(this.currentRefId=0;g.offset<X;){if(d[g.offset]==255){g.offset++,(ee=y[m])==null||ee.call(y);const xe=be.number(d,g),ze=H.refs.get(xe);ze?(y=ze,ne=y.constructor[a],this.currentRefId=xe):(console.error(`"refId" not found: ${xe}`,{previousRef:y,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(d,g,X));continue}if(ne(this,d,g,y,w)===Ut){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(d,g,X);continue}}return(ce=y[m])==null||ce.call(y),(ge=this.triggerChanges)==null||ge.call(this,w),H.garbageCollectDeletedRefs(),w}skipCurrentStructure(d,g,y){const w={offset:g.offset};for(;g.offset<y&&!(d[g.offset]===255&&(w.offset=g.offset+1,this.root.refs.has(be.number(d,w))));)g.offset++}getInstanceType(d,g,y){let w;if(d[g.offset]===213){g.offset++;const H=be.number(d,g);w=this.context.get(H)}return w||y}createInstanceOfType(d){return new d}removeChildRefs(d,g){const y=typeof d[u]!="string",w=this.root.refIds.get(d);d.forEach((H,X)=>{g.push({ref:d,refId:w,op:t.OPERATION.DELETE,field:X,value:void 0,previousValue:H}),y&&this.root.removeRef(this.root.refIds.get(H))})}}class Be extends Ge{}at([Y("string")],Be.prototype,"name",void 0),at([Y("string")],Be.prototype,"type",void 0),at([Y("number")],Be.prototype,"referencedType",void 0);class an extends Ge{constructor(){super(...arguments),this.fields=new Pn}}at([Y("number")],an.prototype,"id",void 0),at([Y("number")],an.prototype,"extendsId",void 0),at([Y([Be])],an.prototype,"fields",void 0);class xt extends Ge{constructor(){super(...arguments),this.types=new Pn}static encode(d,g={offset:0}){const y=d.context,w=new xt,H=new At(w),X=y.schemas.get(d.state.constructor);X>0&&(w.rootType=X);const ne=new Set,ee={},ce=me=>{if(me.extendsId===void 0||ne.has(me.extendsId)){ne.add(me.id),w.types.push(me);const xe=ee[me.id];xe!==void 0&&(delete ee[me.id],xe.forEach(ze=>ce(ze)))}else ee[me.extendsId]===void 0&&(ee[me.extendsId]=[]),ee[me.extendsId].push(me)};y.schemas.forEach((me,xe)=>{const ze=new an;ze.id=Number(me);const Ve=Object.getPrototypeOf(xe);Ve!==Ge&&(ze.extendsId=y.schemas.get(Ve));const Ce=xe[Symbol.metadata];if(Ce!==Ve[Symbol.metadata])for(const Me in Ce){const We=Number(Me),Nt=Ce[We].name;if(!Object.prototype.hasOwnProperty.call(Ce,Nt))continue;const Wt=new Be;Wt.name=Nt;let Ln;const Ni=Ce[We];if(typeof Ni.type=="string")Ln=Ni.type;else{let yo;Ge.is(Ni.type)?(Ln="ref",yo=Ni.type):(Ln=Object.keys(Ni.type)[0],typeof Ni.type[Ln]=="string"?Ln+=":"+Ni.type[Ln]:yo=Ni.type[Ln]),Wt.referencedType=yo?y.getTypeId(yo):-1}Wt.type=Ln,ze.fields.push(Wt)}ce(ze)});for(const me in ee)ee[me].forEach(xe=>w.types.push(xe));return H.encodeAll(g).slice(0,g.offset)}static decode(d,g){const y=new xt;new on(y).decode(d,g);const H=new Te;y.types.forEach(ee=>{const ce=H.get(ee.extendsId)??Ge,ge=class extends ce{};Te.register(ge),H.add(ge,ee.id)},{});const X=(ee,ce,ge)=>{ce.fields.forEach((me,xe)=>{const ze=ge+xe;if(me.referencedType!==void 0){let Ve=me.type,Ce=H.get(me.referencedType);if(!Ce){const Me=me.type.split(":");Ve=Me[0],Ce=Me[1]}Ve==="ref"?Je.addField(ee,ze,me.name,Ce):Je.addField(ee,ze,me.name,{[Ve]:Ce})}else Je.addField(ee,ze,me.name,me.type)})};y.types.forEach(ee=>{const ce=H.get(ee.id),ge=Je.initialize(ce),me=[];let xe=ee;do me.push(xe),xe=y.types.find(Ve=>Ve.id===xe.extendsId);while(xe);let ze=0;me.reverse().forEach(Ve=>{X(ge,Ve,ze),ze+=Ve.fields.length})});const ne=new(H.get(y.rootType||0));return new on(ne,H)}}at([Y([an])],xt.prototype,"types",void 0),at([Y("number")],xt.prototype,"rootType",void 0);function $n(D){const d=D.root,g=d.callbacks,y=new WeakMap;let w;D.triggerChanges=function(ne){var ce;const ee=new Set;for(let ge=0,me=ne.length;ge<me;ge++){const xe=ne[ge],ze=xe.refId,Ve=xe.ref,Ce=g[ze];if(Ce){if((xe.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&xe.previousValue instanceof Ge){const Me=(ce=g[d.refIds.get(xe.previousValue)])==null?void 0:ce[t.OPERATION.DELETE];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We]()}if(Ve instanceof Ge){if(!ee.has(ze)){const Me=Ce==null?void 0:Ce[t.OPERATION.REPLACE];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We]()}if(Ce.hasOwnProperty(xe.field)){const Me=Ce[xe.field];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We](xe.value,xe.previousValue)}}else{if((xe.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(xe.previousValue!==void 0){const Me=Ce[t.OPERATION.DELETE];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We](xe.previousValue,xe.dynamicIndex??xe.field)}if((xe.op&t.OPERATION.ADD)===t.OPERATION.ADD){const Me=Ce[t.OPERATION.ADD];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We](xe.value,xe.dynamicIndex??xe.field)}}else if((xe.op&t.OPERATION.ADD)===t.OPERATION.ADD&&xe.previousValue!==xe.value){const Me=Ce[t.OPERATION.ADD];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We](xe.value,xe.dynamicIndex??xe.field)}if(xe.value!==xe.previousValue&&(xe.value!==void 0||xe.previousValue!==void 0)){const Me=Ce[t.OPERATION.REPLACE];for(let We=(Me==null?void 0:Me.length)-1;We>=0;We--)Me[We](xe.value,xe.dynamicIndex??xe.field)}}ee.add(ze)}}};function H(ne,ee){var me;let ce=((me=ee.instance)==null?void 0:me.constructor[Symbol.metadata])||ne,ge=ee.instance&&typeof ee.instance.forEach=="function"||ne&&typeof ne[Symbol.metadata]>"u";if(ce&&!ge){const xe=function(ze,Ve,Ce,Me){return Me&&ee.instance[Ve]!==void 0&&!y.has(w)&&Ce(ee.instance[Ve],void 0),d.addCallback(d.refIds.get(ze),Ve,Ce)};return new Proxy({listen:function(Ve,Ce,Me=!0){if(ee.instance)return xe(ee.instance,Ve,Ce,Me);{let We=()=>{};return ee.onInstanceAvailable((Nt,Wt)=>{We=xe(Nt,Ve,Ce,Me&&Wt&&!y.has(w))}),()=>We()}},onChange:function(Ve){return d.addCallback(d.refIds.get(ee.instance),t.OPERATION.REPLACE,Ve)},bindTo:function(Ve,Ce){return Ce||(Ce=Object.keys(ce).map(Me=>ce[Me].name)),d.addCallback(d.refIds.get(ee.instance),t.OPERATION.REPLACE,()=>{Ce.forEach(Me=>Ve[Me]=ee.instance[Me])})}},{get(ze,Ve){var Me;const Ce=ce[ce[Ve]];if(Ce){const We=(Me=ee.instance)==null?void 0:Me[Ve],Nt=(Wt=>{const Ln=X(ee.instance).listen(Ve,(Ni,yo)=>{Wt(Ni,!1),Ln==null||Ln()},!1);d.refIds.get(We)!==void 0&&Wt(We,!0)});return H(Ce.type,{instance:d.refIds.get(We)&&We,parentInstance:ee.instance,onInstanceAvailable:Nt})}else return ze[Ve]},has(ze,Ve){return ce[Ve]!==void 0},set(ze,Ve,Ce){throw new Error("not allowed")},deleteProperty(ze,Ve){throw new Error("not allowed")}})}else{const xe=function(Ce,Me,We){return We&&Ce.forEach((Nt,Wt)=>Me(Nt,Wt)),d.addCallback(d.refIds.get(Ce),t.OPERATION.ADD,(Nt,Wt)=>{y.set(Me,!0),w=Me,Me(Nt,Wt),y.delete(Me),w=void 0})},ze=function(Ce,Me){return d.addCallback(d.refIds.get(Ce),t.OPERATION.DELETE,Me)},Ve=function(Ce,Me){return d.addCallback(d.refIds.get(Ce),t.OPERATION.REPLACE,Me)};return new Proxy({onAdd:function(Ce,Me=!0){if(ee.instance)return xe(ee.instance,Ce,Me&&!y.has(w));if(ee.onInstanceAvailable){let We=()=>{};return ee.onInstanceAvailable((Nt,Wt)=>{We=xe(Nt,Ce,Me&&Wt&&!y.has(w))}),()=>We()}},onRemove:function(Ce){if(ee.instance)return ze(ee.instance,Ce);if(ee.onInstanceAvailable){let Me=()=>{};return ee.onInstanceAvailable(We=>{Me=ze(We,Ce)}),()=>Me()}},onChange:function(Ce){if(ee.instance)return Ve(ee.instance,Ce);if(ee.onInstanceAvailable){let Me=()=>{};return ee.onInstanceAvailable(We=>{Me=Ve(We,Ce)}),()=>Me()}}},{get(Ce,Me){if(!Ce[Me])throw new Error(`Can't access '${Me}' through callback proxy. access the instance directly.`);return Ce[Me]},has(Ce,Me){return Ce[Me]!==void 0},set(Ce,Me,We){throw new Error("not allowed")},deleteProperty(Ce,Me){throw new Error("not allowed")}})}}function X(ne){return H(void 0,{instance:ne})}return X}function oi(D,d){D.triggerChanges=d}class Li{constructor(d=!1){this.iterable=d,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,d&&(this.items=[])}add(d,g=_i,y=!0){var ce,ge;const w=d==null?void 0:d[f],H=w.parent;if(w){if(!H&&w.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${w.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",d),!1;const X=d.constructor[Symbol.metadata];this.visible.add(w),this.iterable&&y&&this.items.push(d),y&&H&&this.addParentOf(w,g);let ne=this.changes.get(w.refId);ne===void 0&&(ne={},this.changes.set(w.refId,ne));let ee=!1;if(w.forEachChild((me,xe)=>{X&&X[xe].tag!==void 0&&X[xe].tag!==g||this.add(me.ref,g,!1)&&(ee=!0)}),g!==_i){this.tags||(this.tags=new WeakMap);let me;this.tags.has(w)?me=this.tags.get(w):(me=new Set,this.tags.set(w,me)),me.add(g),(ge=(ce=X==null?void 0:X[C])==null?void 0:ce[g])==null||ge.forEach(xe=>{w.getChange(xe)!==t.OPERATION.DELETE&&(ne[xe]=t.OPERATION.ADD)})}else if(!w.isNew||ee){const me=w.filteredChanges!==void 0?w.allFilteredChanges:w.allChanges,xe=this.invisible.has(w);for(let ze=0,Ve=me.operations.length;ze<Ve;ze++){const Ce=me.operations[ze];if(Ce===void 0)continue;const Me=w.indexedOperations[Ce]??t.OPERATION.ADD,We=X==null?void 0:X[Ce].tag;Me!==t.OPERATION.DELETE&&(xe||We===void 0||We===g)&&(ne[Ce]=Me,ee=!0)}}return ee}addParentOf(d,g){var H;const y=d.parent[f],w=d.parentIndex;if(!this.visible.has(y)){this.visible.add(y);const X=(H=y.parent)==null?void 0:H[f];X&&X.filteredChanges!==void 0&&this.addParentOf(y,g)}if(y.getChange(w)!==t.OPERATION.DELETE){let X=this.changes.get(y.refId);X===void 0&&(X={},this.changes.set(y.refId,X)),this.tags||(this.tags=new WeakMap);let ne;this.tags.has(y)?ne=this.tags.get(y):(ne=new Set,this.tags.set(y,ne)),ne.add(g),X[w]=t.OPERATION.ADD}}remove(d,g=_i,y=!1){var ee;const w=d[f];if(!w)return console.warn("StateView#remove(), invalid object:",d),this;this.visible.delete(w),this.iterable&&!y&&Zt(this.items,this.items.indexOf(d));const X=w.ref.constructor[Symbol.metadata];let ne=this.changes.get(w.refId);if(ne===void 0&&(ne={},this.changes.set(w.refId,ne)),g===_i){const ce=w.parent;if(ce&&!Je.isValidInstance(ce)&&w.isFiltered){const ge=ce[f];let me=this.changes.get(ge.refId);me===void 0?(me={},this.changes.set(ge.refId,me)):me[w.parentIndex]===t.OPERATION.ADD&&this.changes.delete(w.refId),me[w.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(w)}else(ee=X==null?void 0:X[T])==null||ee.forEach(ge=>ne[ge]=t.OPERATION.DELETE)}else X==null||X[C][g].forEach(ce=>ne[ce]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(w)){const ce=this.tags.get(w);g===void 0?this.tags.delete(w):(ce.delete(g),ce.size===0&&this.tags.delete(w))}return this}has(d){return this.visible.has(d[f])}hasTag(d,g=_i){var w;const y=(w=this.tags)==null?void 0:w.get(d[f]);return(y==null?void 0:y.has(g))??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let d=0,g=this.items.length;d<g;d++)this.remove(this.items[d],_i,!0);this.items.length=0}isChangeTreeVisible(d){let g=this.visible.has(d);return!g&&d.isVisibilitySharedWithParent&&this.visible.has(d.parent[f])&&(this.visible.add(d),g=!0),g}_recursiveDeleteVisibleChangeTree(d){d.forEachChild(g=>{this.visible.delete(g),this._recursiveDeleteVisibleChangeTree(g)})}}we("map",{constructor:Wn}),we("array",{constructor:Pn}),we("set",{constructor:vr}),we("collection",{constructor:Qi}),t.$changes=f,t.$childType=u,t.$decoder=a,t.$deleteByIndex=h,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Pn,t.ChangeTree=Ie,t.CollectionSchema=Qi,t.Decoder=on,t.Encoder=At,t.MapSchema=Wn,t.Metadata=Je,t.Reflection=xt,t.ReflectionField=Be,t.ReflectionType=an,t.Schema=Ge,t.SetSchema=vr,t.StateView=Li,t.TypeContext=Te,t.decode=be,t.decodeKeyValueOperation=fs,t.decodeSchemaOperation=Kn,t.defineCustomTypes=Ne,t.defineTypes=se,t.deprecated=ie,t.dumpChanges=Ue,t.encode=ve,t.encodeArray=Yt,t.encodeKeyValueOperation=He,t.encodeSchemaOperation=Ze,t.entity=Vc,t.getDecoderStateCallbacks=$n,t.getRawChangesCallback=oi,t.registerType=we,t.schema=Oe,t.type=Y,t.view=N}))})($o,$o.exports)),$o.exports}var r0;function OC(){if(r0)return Gf;r0=1;var n=Oc,e=ud();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return Gf.H3TransportTransport=t,Gf}var Wf={},$f,s0;function UC(){return s0||(s0=1,$f=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),$f}var o0;function FC(){if(o0)return Wf;o0=1;var n=UC();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return Wf.WebSocketTransport=t,Wf}var a0;function BC(){if(a0)return Hf;a0=1;var n=OC(),e=FC();let t=class{constructor(r){switch(this.events={},r){case"h3":this.transport=new n.H3TransportTransport(this.events);break;default:this.transport=new e.WebSocketTransport(this.events);break}}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return Hf.Connection=t,Hf}var Xf={},l0;function Q_(){return l0||(l0=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Xf)),Xf}var ul={},c0;function ex(){if(c0)return ul;c0=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return ul.getSerializer=t,ul.registerSerializer=e,ul}var qf={},f0;function tx(){if(f0)return qf;f0=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return qf.createNanoEvents=n,qf}var hl={},u0;function zC(){if(u0)return hl;u0=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return hl.EventEmitter=n,hl.createSignal=e,hl}var dl={},h0;function nx(){if(h0)return dl;h0=1;var n=ud();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return dl.SchemaSerializer=t,dl.getStateCallbacks=e,dl}var Ah;try{Ah=new TextDecoder}catch{}var Fe,Zi,Z=0,$t={},bt,Ir,fi=0,Vi=0,gn,hr,Cn=[],Mt,d0={useRecords:!1,mapsAsObjects:!0};class ix{}const hd=new ix;hd.name="MessagePack 0xC1";var Dr=!1,rx=2,kC;try{new Function("")}catch{rx=1/0}class Nr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Fe)return fx(()=>(Ec(),this?this.unpack(e,t):Nr.prototype.unpack.call(d0,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Zi=t.end||e.length,Z=t.start||0):(Z=0,Zi=t>-1?t:e.length),Vi=0,Ir=null,gn=null,Fe=e;try{Mt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw Fe=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Nr){if($t=this,this.structures)return bt=this.structures,pl(t);(!bt||bt.length>0)&&(bt=[])}else $t=d0,(!bt||bt.length>0)&&(bt=[]);return pl(t)}unpackMultiple(e,t){let i,r=0;try{Dr=!0;let s=e.length,o=this?this.unpack(e,s):Bc.unpack(e,s);if(t){if(t(o,r,Z)===!1)return;for(;Z<s;)if(r=Z,t(pl(),r,Z)===!1)return}else{for(i=[o];Z<s;)r=Z,i.push(pl());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Dr=!1,Ec()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function pl(n){try{if(!$t.trusted&&!Dr){let t=bt.sharedLength||0;t<bt.length&&(bt.length=t)}let e;if($t.randomAccessStructure&&Fe[Z]<64&&Fe[Z]>=32&&kC||(e=rn()),gn&&(Z=gn.postBundlePosition,gn=null),Dr&&(bt.restoreStructures=null),Z==Zi)bt&&bt.restoreStructures&&p0(),bt=null,Fe=null,hr&&(hr=null);else{if(Z>Zi)throw new Error("Unexpected end of MessagePack data");if(!Dr){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw bt&&bt.restoreStructures&&p0(),Ec(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||Z>Zi)&&(e.incomplete=!0),e}}function p0(){for(let n in bt.restoreStructures)bt[n]=bt.restoreStructures[n];bt.restoreStructures=null}function rn(){let n=Fe[Z++];if(n<160)if(n<128){if(n<64)return n;{let e=bt[n&63]||$t.getStructures&&sx()[n&63];return e?(e.read||(e.read=dd(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,$t.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=ax();i==="__proto__"&&(i="__proto_"),e[i]=rn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(rn(),rn());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=rn();return $t.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(Vi>=Z)return Ir.slice(Z-fi,(Z+=e)-fi);if(Vi==0&&Zi<140){let t=e<16?pd(e):ox(e);if(t!=null)return t}return Rh(e)}else{let e;switch(n){case 192:return null;case 193:return gn?(e=rn(),e>0?gn[1].slice(gn.position1,gn.position1+=e):gn[0].slice(gn.position0,gn.position0-=e)):hd;case 194:return!1;case 195:return!0;case 196:if(e=Fe[Z++],e===void 0)throw new Error("Unexpected end of buffer");return Yf(e);case 197:return e=Mt.getUint16(Z),Z+=2,Yf(e);case 198:return e=Mt.getUint32(Z),Z+=4,Yf(e);case 199:return $r(Fe[Z++]);case 200:return e=Mt.getUint16(Z),Z+=2,$r(e);case 201:return e=Mt.getUint32(Z),Z+=4,$r(e);case 202:if(e=Mt.getFloat32(Z),$t.useFloat32>2){let t=Fc[(Fe[Z]&127)<<1|Fe[Z+1]>>7];return Z+=4,(t*e+(e>0?.5:-.5)>>0)/t}return Z+=4,e;case 203:return e=Mt.getFloat64(Z),Z+=8,e;case 204:return Fe[Z++];case 205:return e=Mt.getUint16(Z),Z+=2,e;case 206:return e=Mt.getUint32(Z),Z+=4,e;case 207:return $t.int64AsType==="number"?(e=Mt.getUint32(Z)*4294967296,e+=Mt.getUint32(Z+4)):$t.int64AsType==="string"?e=Mt.getBigUint64(Z).toString():$t.int64AsType==="auto"?(e=Mt.getBigUint64(Z),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=Mt.getBigUint64(Z),Z+=8,e;case 208:return Mt.getInt8(Z++);case 209:return e=Mt.getInt16(Z),Z+=2,e;case 210:return e=Mt.getInt32(Z),Z+=4,e;case 211:return $t.int64AsType==="number"?(e=Mt.getInt32(Z)*4294967296,e+=Mt.getUint32(Z+4)):$t.int64AsType==="string"?e=Mt.getBigInt64(Z).toString():$t.int64AsType==="auto"?(e=Mt.getBigInt64(Z),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=Mt.getBigInt64(Z),Z+=8,e;case 212:if(e=Fe[Z++],e==114)return y0(Fe[Z++]&63);{let t=Cn[e];if(t)return t.read?(Z++,t.read(rn())):t.noBuffer?(Z++,t()):t(Fe.subarray(Z,++Z));throw new Error("Unknown extension "+e)}case 213:return e=Fe[Z],e==114?(Z++,y0(Fe[Z++]&63,Fe[Z++])):$r(2);case 214:return $r(4);case 215:return $r(8);case 216:return $r(16);case 217:return e=Fe[Z++],Vi>=Z?Ir.slice(Z-fi,(Z+=e)-fi):HC(e);case 218:return e=Mt.getUint16(Z),Z+=2,Vi>=Z?Ir.slice(Z-fi,(Z+=e)-fi):GC(e);case 219:return e=Mt.getUint32(Z),Z+=4,Vi>=Z?Ir.slice(Z-fi,(Z+=e)-fi):WC(e);case 220:return e=Mt.getUint16(Z),Z+=2,g0(e);case 221:return e=Mt.getUint32(Z),Z+=4,g0(e);case 222:return e=Mt.getUint16(Z),Z+=2,_0(e);case 223:return e=Mt.getUint32(Z),Z+=4,_0(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const VC=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function dd(n,e){function t(){if(t.count++>rx){let r=n.read=new Function("r","return function(){return "+($t.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":VC.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(rn);return n.highByte===0&&(n.read=m0(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=rn()}return $t.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?m0(e,t):t}const m0=(n,e)=>function(){let t=Fe[Z++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=bt[i]||sx()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=dd(r,n)),r.read()};function sx(){let n=fx(()=>(Fe=null,$t.getStructures()));return bt=$t._mergeStructures(n,bt)}var Rh=ma,HC=ma,GC=ma,WC=ma;let $C=!1;function ma(n){let e;if(n<16&&(e=pd(n)))return e;if(n>64&&Ah)return Ah.decode(Fe.subarray(Z,Z+=n));const t=Z+n,i=[];for(e="";Z<t;){const r=Fe[Z++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=Fe[Z++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=Fe[Z++]&63,o=Fe[Z++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=Fe[Z++]&63,o=Fe[Z++]&63,a=Fe[Z++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=mn.apply(String,i),i.length=0)}return i.length>0&&(e+=mn.apply(String,i)),e}function g0(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=rn();return $t.freezeData?Object.freeze(e):e}function _0(n){if($t.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=ax();i==="__proto__"&&(i="__proto_"),e[i]=rn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(rn(),rn());return e}}var mn=String.fromCharCode;function ox(n){let e=Z,t=new Array(n);for(let i=0;i<n;i++){const r=Fe[Z++];if((r&128)>0){Z=e;return}t[i]=r}return mn.apply(String,t)}function pd(n){if(n<4)if(n<2){if(n===0)return"";{let e=Fe[Z++];if((e&128)>1){Z-=1;return}return mn(e)}}else{let e=Fe[Z++],t=Fe[Z++];if((e&128)>0||(t&128)>0){Z-=2;return}if(n<3)return mn(e,t);let i=Fe[Z++];if((i&128)>0){Z-=3;return}return mn(e,t,i)}else{let e=Fe[Z++],t=Fe[Z++],i=Fe[Z++],r=Fe[Z++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){Z-=4;return}if(n<6){if(n===4)return mn(e,t,i,r);{let s=Fe[Z++];if((s&128)>0){Z-=5;return}return mn(e,t,i,r,s)}}else if(n<8){let s=Fe[Z++],o=Fe[Z++];if((s&128)>0||(o&128)>0){Z-=6;return}if(n<7)return mn(e,t,i,r,s,o);let a=Fe[Z++];if((a&128)>0){Z-=7;return}return mn(e,t,i,r,s,o,a)}else{let s=Fe[Z++],o=Fe[Z++],a=Fe[Z++],c=Fe[Z++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){Z-=8;return}if(n<10){if(n===8)return mn(e,t,i,r,s,o,a,c);{let l=Fe[Z++];if((l&128)>0){Z-=9;return}return mn(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=Fe[Z++],h=Fe[Z++];if((l&128)>0||(h&128)>0){Z-=10;return}if(n<11)return mn(e,t,i,r,s,o,a,c,l,h);let f=Fe[Z++];if((f&128)>0){Z-=11;return}return mn(e,t,i,r,s,o,a,c,l,h,f)}else{let l=Fe[Z++],h=Fe[Z++],f=Fe[Z++],u=Fe[Z++];if((l&128)>0||(h&128)>0||(f&128)>0||(u&128)>0){Z-=12;return}if(n<14){if(n===12)return mn(e,t,i,r,s,o,a,c,l,h,f,u);{let p=Fe[Z++];if((p&128)>0){Z-=13;return}return mn(e,t,i,r,s,o,a,c,l,h,f,u,p)}}else{let p=Fe[Z++],m=Fe[Z++];if((p&128)>0||(m&128)>0){Z-=14;return}if(n<15)return mn(e,t,i,r,s,o,a,c,l,h,f,u,p,m);let v=Fe[Z++];if((v&128)>0){Z-=15;return}return mn(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v)}}}}}function x0(){let n=Fe[Z++],e;if(n<192)e=n-160;else switch(n){case 217:e=Fe[Z++];break;case 218:e=Mt.getUint16(Z),Z+=2;break;case 219:e=Mt.getUint32(Z),Z+=4;break;default:throw new Error("Expected string")}return ma(e)}function Yf(n){return $t.copyBuffers?Uint8Array.prototype.slice.call(Fe,Z,Z+=n):Fe.subarray(Z,Z+=n)}function $r(n){let e=Fe[Z++];if(Cn[e]){let t;return Cn[e](Fe.subarray(Z,t=Z+=n),i=>{Z=i;try{return rn()}finally{Z=t}})}else throw new Error("Unknown extension type "+e)}var v0=new Array(4096);function ax(){let n=Fe[Z++];if(n>=160&&n<192){if(n=n-160,Vi>=Z)return Ir.slice(Z-fi,(Z+=n)-fi);if(!(Vi==0&&Zi<180))return Rh(n)}else return Z--,lx(rn());let e=(n<<5^(n>1?Mt.getUint16(Z):n>0?Fe[Z]:0))&4095,t=v0[e],i=Z,r=Z+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=Mt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=Fe[i++],s!=t[o++]){i=1879048192;break}if(i===r)return Z=i,t.string;r-=3,i=Z}for(t=[],v0[e]=t,t.bytes=n;i<r;)s=Mt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=Fe[i++],t.push(s);let a=n<16?pd(n):ox(n);return a!=null?t.string=a:t.string=Rh(n)}function lx(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if($t.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const y0=(n,e)=>{let t=rn().map(lx),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=bt[n];return r&&(r.isShared||Dr)&&((bt.restoreStructures||(bt.restoreStructures=[]))[n]=r),bt[n]=t,t.read=dd(t,i),t.read()};Cn[0]=()=>{};Cn[0].noBuffer=!0;Cn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let XC={Error,TypeError,ReferenceError};Cn[101]=()=>{let n=rn();return(XC[n[0]]||Error)(n[1],{cause:n[2]})};Cn[105]=n=>{if($t.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=Mt.getUint32(Z-4);hr||(hr=new Map);let t=Fe[Z],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};hr.set(e,r);let s=rn();return r.used?Object.assign(i,s):(r.target=s,s)};Cn[112]=n=>{if($t.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=Mt.getUint32(Z-4),t=hr.get(e);return t.used=!0,t.target};Cn[115]=()=>new Set(rn());const cx=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let qC=typeof globalThis=="object"?globalThis:window;Cn[116]=n=>{let e=n[0],t=cx[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new qC[t](Uint8Array.prototype.slice.call(n,1).buffer)};Cn[120]=()=>{let n=rn();return new RegExp(n[0],n[1])};const YC=[];Cn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=Z;return Z+=e-n.length,gn=YC,gn=[x0(),x0()],gn.position0=0,gn.position1=0,gn.postBundlePosition=Z,Z=t,rn()};Cn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function fx(n){let e=Zi,t=Z,i=fi,r=Vi,s=Ir,o=hr,a=gn,c=new Uint8Array(Fe.slice(0,Zi)),l=bt,h=bt.slice(0,bt.length),f=$t,u=Dr,p=n();return Zi=e,Z=t,fi=i,Vi=r,Ir=s,hr=o,gn=a,Fe=c,Dr=u,bt=l,bt.splice(0,bt.length,...h),$t=f,Mt=new DataView(Fe.buffer,Fe.byteOffset,Fe.byteLength),p}function Ec(){Fe=null,hr=null,bt=null}function KC(n){n.unpack?Cn[n.type]=n.unpack:Cn[n.type]=n}const Fc=new Array(147);for(let n=0;n<256;n++)Fc[n]=+("1e"+Math.floor(45.15-n*.30103));const ZC=Nr;var Bc=new Nr({useRecords:!1});const jC=Bc.unpack,JC=Bc.unpackMultiple,QC=Bc.unpack,ux={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let hx=new Float32Array(1),S0=new Uint8Array(hx.buffer,0,4);function e2(n){hx[0]=n;let e=Fc[(S0[3]&127)<<1|S0[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let Pl;try{Pl=new TextEncoder}catch{}let bc,md;const zc=typeof Buffer<"u",ml=zc?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,dx=zc?Buffer:Uint8Array,M0=zc?4294967296:2144337920;let re,Fo,Gt,J=0,Un,jt=null,t2;const n2=21760,i2=/[\u0080-\uFFFF]/,Fs=Symbol("record-id");class ga extends Nr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=dx.prototype.utf8Write?function(P,O){return re.utf8Write(P,O,re.byteLength-O)}:Pl&&Pl.encodeInto?function(P,O){return Pl.encodeInto(P,re.subarray(O)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=h>32||f+h>64,p=h+64,m=h+f+64;if(m>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let v=[],_=0,x=0;this.pack=this.encode=function(P,O){if(re||(re=new ml(8192),Gt=re.dataView||(re.dataView=new DataView(re.buffer,0,8192)),J=0),Un=re.length-10,Un-J<2048?(re=new ml(re.length),Gt=re.dataView||(re.dataView=new DataView(re.buffer,0,re.length)),Un=re.length-10,J=0):J=J+7&2147483640,t=J,O&_x&&(J+=O&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof P!="string"?(jt=[],jt.size=1/0):jt=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let L=r.sharedLength||0;if(L>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let U=0;U<L;U++){let G=r[U];if(!G)continue;let K,te=r.transitions;for(let fe=0,j=G.length;fe<j;fe++){let ye=G[fe];K=te[ye],K||(K=te[ye]=Object.create(null)),te=K}te[Fs]=U+64}this.lastNamedStructuresLength=L}c||(r.nextId=L+64)}i&&(i=!1);let E;try{a.randomAccessStructure&&P&&P.constructor&&P.constructor===Object?z(P):M(P);let L=jt;if(jt&&w0(t,M,0),s&&s.idsToInsert){let U=s.idsToInsert.sort((fe,j)=>fe.offset>j.offset?1:-1),G=U.length,K=-1;for(;L&&G>0;){let fe=U[--G].offset+t;fe<L.stringsPosition+t&&K===-1&&(K=0),fe>L.position+t?K>=0&&(K+=6):(K>=0&&(Gt.setUint32(L.position+t,Gt.getUint32(L.position+t)+K),K=-1),L=L.previous,G++)}K>=0&&L&&Gt.setUint32(L.position+t,Gt.getUint32(L.position+t)+K),J+=U.length*6,J>Un&&A(J),a.offset=J;let te=s2(re.subarray(t,J),U);return s=null,te}return a.offset=J,O&mx?(re.start=t,re.end=J,re):re.subarray(t,J)}catch(L){throw E=L,L}finally{if(r&&(T(),i&&a.saveStructures)){let L=r.sharedLength||0,U=re.subarray(t,J),G=a2(r,a);if(!E)return a.saveStructures(G,G.isCompatible)===!1?a.pack(P,O):(a.lastNamedStructuresLength=L,re.length>1073741824&&(re=null),U)}re.length>1073741824&&(re=null),O&gx&&(J=t)}};const T=()=>{x<10&&x++;let P=r.sharedLength||0;if(r.length>P&&!c&&(r.length=P),_>1e4)r.transitions=null,x=0,_=0,v.length>0&&(v=[]);else if(v.length>0&&!c){for(let O=0,E=v.length;O<E;O++)v[O][Fs]=0;v=[]}},C=P=>{var O=P.length;O<16?re[J++]=144|O:O<65536?(re[J++]=220,re[J++]=O>>8,re[J++]=O&255):(re[J++]=221,Gt.setUint32(J,O),J+=4);for(let E=0;E<O;E++)M(P[E])},M=P=>{J>Un&&(re=A(J));var O=typeof P,E;if(O==="string"){let L=P.length;if(jt&&L>=4&&L<4096){if((jt.size+=L)>n2){let te,fe=(jt[0]?jt[0].length*3+jt[1].length:0)+10;J+fe>Un&&(re=A(J+fe));let j;jt.position?(j=jt,re[J]=200,J+=3,re[J++]=98,te=J-t,J+=4,w0(t,M,0),Gt.setUint16(te+t-3,J-t-te)):(re[J++]=214,re[J++]=98,te=J-t,J+=4),jt=["",""],jt.previous=j,jt.size=0,jt.position=te}let K=i2.test(P);jt[K?0:1]+=P,re[J++]=193,M(K?-L:L);return}let U;L<32?U=1:L<256?U=2:L<65536?U=3:U=5;let G=L*3;if(J+G>Un&&(re=A(J+G)),L<64||!o){let K,te,fe,j=J+U;for(K=0;K<L;K++)te=P.charCodeAt(K),te<128?re[j++]=te:te<2048?(re[j++]=te>>6|192,re[j++]=te&63|128):(te&64512)===55296&&((fe=P.charCodeAt(K+1))&64512)===56320?(te=65536+((te&1023)<<10)+(fe&1023),K++,re[j++]=te>>18|240,re[j++]=te>>12&63|128,re[j++]=te>>6&63|128,re[j++]=te&63|128):(re[j++]=te>>12|224,re[j++]=te>>6&63|128,re[j++]=te&63|128);E=j-J-U}else E=o(P,J+U);E<32?re[J++]=160|E:E<256?(U<2&&re.copyWithin(J+2,J+1,J+1+E),re[J++]=217,re[J++]=E):E<65536?(U<3&&re.copyWithin(J+3,J+2,J+2+E),re[J++]=218,re[J++]=E>>8,re[J++]=E&255):(U<5&&re.copyWithin(J+5,J+3,J+3+E),re[J++]=219,Gt.setUint32(J,E),J+=4),J+=E}else if(O==="number")if(P>>>0===P)P<32||P<128&&this.useRecords===!1||P<64&&!this.randomAccessStructure?re[J++]=P:P<256?(re[J++]=204,re[J++]=P):P<65536?(re[J++]=205,re[J++]=P>>8,re[J++]=P&255):(re[J++]=206,Gt.setUint32(J,P),J+=4);else if(P>>0===P)P>=-32?re[J++]=256+P:P>=-128?(re[J++]=208,re[J++]=P+256):P>=-32768?(re[J++]=209,Gt.setInt16(J,P),J+=2):(re[J++]=210,Gt.setInt32(J,P),J+=4);else{let L;if((L=this.useFloat32)>0&&P<4294967296&&P>=-2147483648){re[J++]=202,Gt.setFloat32(J,P);let U;if(L<4||(U=P*Fc[(re[J]&127)<<1|re[J+1]>>7])>>0===U){J+=4;return}else J--}re[J++]=203,Gt.setFloat64(J,P),J+=8}else if(O==="object"||O==="function")if(!P)re[J++]=192;else{if(s){let U=s.get(P);if(U){if(!U.id){let G=s.idsToInsert||(s.idsToInsert=[]);U.id=G.push(U)}re[J++]=214,re[J++]=112,Gt.setUint32(J,U.id),J+=4;return}else s.set(P,{offset:J-t})}let L=P.constructor;if(L===Object)S(P);else if(L===Array)C(P);else if(L===Map)if(this.mapAsEmptyObject)re[J++]=128;else{E=P.size,E<16?re[J++]=128|E:E<65536?(re[J++]=222,re[J++]=E>>8,re[J++]=E&255):(re[J++]=223,Gt.setUint32(J,E),J+=4);for(let[U,G]of P)M(U),M(G)}else{for(let U=0,G=bc.length;U<G;U++){let K=md[U];if(P instanceof K){let te=bc[U];if(te.write){te.type&&(re[J++]=212,re[J++]=te.type,re[J++]=0);let qe=te.write.call(this,P);qe===P?Array.isArray(P)?C(P):S(P):M(qe);return}let fe=re,j=Gt,ye=J;re=null;let pe;try{pe=te.pack.call(this,P,qe=>(re=fe,fe=null,J+=qe,J>Un&&A(J),{target:re,targetView:Gt,position:J-qe}),M)}finally{fe&&(re=fe,Gt=j,J=ye,Un=re.length-10)}pe&&(pe.length+J>Un&&A(pe.length+J),J=r2(pe,re,J,te.type));return}}if(Array.isArray(P))C(P);else{if(P.toJSON){const U=P.toJSON();if(U!==P)return M(U)}if(O==="function")return M(this.writeFunction&&this.writeFunction(P));S(P)}}}else if(O==="boolean")re[J++]=P?195:194;else if(O==="bigint"){if(P<BigInt(1)<<BigInt(63)&&P>=-(BigInt(1)<<BigInt(63)))re[J++]=211,Gt.setBigInt64(J,P);else if(P<BigInt(1)<<BigInt(64)&&P>0)re[J++]=207,Gt.setBigUint64(J,P);else if(this.largeBigIntToFloat)re[J++]=203,Gt.setFloat64(J,Number(P));else{if(this.largeBigIntToString)return M(P.toString());if(this.useBigIntExtension&&P<BigInt(2)**BigInt(1023)&&P>-(BigInt(2)**BigInt(1023))){re[J++]=199,J++,re[J++]=66;let L=[],U;do{let G=P&BigInt(255);U=(G&BigInt(128))===(P<BigInt(0)?BigInt(128):BigInt(0)),L.push(G),P>>=BigInt(8)}while(!((P===BigInt(0)||P===BigInt(-1))&&U));re[J-2]=L.length;for(let G=L.length;G>0;)re[J++]=Number(L[--G]);return}else throw new RangeError(P+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}J+=8}else if(O==="undefined")this.encodeUndefinedAsNil?re[J++]=192:(re[J++]=212,re[J++]=0,re[J++]=0);else throw new Error("Unknown type: "+O)},I=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?P=>{let O;if(this.skipValues){O=[];for(let U in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(U))&&!this.skipValues.includes(P[U])&&O.push(U)}else O=Object.keys(P);let E=O.length;E<16?re[J++]=128|E:E<65536?(re[J++]=222,re[J++]=E>>8,re[J++]=E&255):(re[J++]=223,Gt.setUint32(J,E),J+=4);let L;if(this.coercibleKeyAsNumber)for(let U=0;U<E;U++){L=O[U];let G=Number(L);M(isNaN(G)?L:G),M(P[L])}else for(let U=0;U<E;U++)M(L=O[U]),M(P[L])}:P=>{re[J++]=222;let O=J-t;J+=2;let E=0;for(let L in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(L))&&(M(L),M(P[L]),E++);if(E>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');re[O+++t]=E>>8,re[O+t]=E&255},R=this.useRecords===!1?I:e.progressiveRecords&&!u?P=>{let O,E=r.transitions||(r.transitions=Object.create(null)),L=J++-t,U;for(let G in P)if(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(G)){if(O=E[G],O)E=O;else{let K=Object.keys(P),te=E;E=r.transitions;let fe=0;for(let j=0,ye=K.length;j<ye;j++){let pe=K[j];O=E[pe],O||(O=E[pe]=Object.create(null),fe++),E=O}L+t+1==J?(J--,k(E,K,fe)):B(E,K,L,fe),U=!0,E=te[G]}M(P[G])}if(!U){let G=E[Fs];G?re[L+t]=G:B(E,Object.keys(P),L,0)}}:P=>{let O,E=r.transitions||(r.transitions=Object.create(null)),L=0;for(let G in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(G))&&(O=E[G],O||(O=E[G]=Object.create(null),L++),E=O);let U=E[Fs];U?U>=96&&u?(re[J++]=((U-=96)&31)+96,re[J++]=U>>5):re[J++]=U:k(E,E.__keys__||Object.keys(P),L);for(let G in P)(typeof P.hasOwnProperty!="function"||P.hasOwnProperty(G))&&M(P[G])},F=typeof this.useRecords=="function"&&this.useRecords,S=F?P=>{F(P)?R(P):I(P)}:R,A=P=>{let O;if(P>16777216){if(P-t>M0)throw new Error("Packed buffer would be larger than maximum buffer size");O=Math.min(M0,Math.round(Math.max((P-t)*(P>67108864?1.25:2),4194304)/4096)*4096)}else O=(Math.max(P-t<<2,re.length-1)>>12)+1<<12;let E=new ml(O);return Gt=E.dataView||(E.dataView=new DataView(E.buffer,0,O)),P=Math.min(P,re.length),re.copy?re.copy(E,0,t,P):E.set(re.slice(t,P)),J-=t,t=0,Un=E.length-10,re=E},k=(P,O,E)=>{let L=r.nextId;L||(L=64),L<p&&this.shouldShareStructure&&!this.shouldShareStructure(O)?(L=r.nextOwnId,L<m||(L=p),r.nextOwnId=L+1):(L>=m&&(L=p),r.nextId=L+1);let U=O.highByte=L>=96&&u?L-96>>5:-1;P[Fs]=L,P.__keys__=O,r[L-64]=O,L<p?(O.isShared=!0,r.sharedLength=L-63,i=!0,U>=0?(re[J++]=(L&31)+96,re[J++]=U):re[J++]=L):(U>=0?(re[J++]=213,re[J++]=114,re[J++]=(L&31)+96,re[J++]=U):(re[J++]=212,re[J++]=114,re[J++]=L),E&&(_+=x*E),v.length>=f&&(v.shift()[Fs]=0),v.push(P),M(O))},B=(P,O,E,L)=>{let U=re,G=J,K=Un,te=t;re=Fo,J=0,t=0,re||(Fo=re=new ml(8192)),Un=re.length-10,k(P,O,L),Fo=re;let fe=J;if(re=U,J=G,Un=K,t=te,fe>1){let j=J+fe-1;j>Un&&A(j);let ye=E+t;re.copyWithin(ye+fe,ye+1,J),re.set(Fo.slice(0,fe),ye),J=j}else re[E+t]=Fo[0]},z=P=>{let O=t2(P,re,t,J,r,A,(E,L,U)=>{if(U)return i=!0;J=L;let G=re;return M(E),T(),G!==re?{position:J,targetView:Gt,target:re}:J},this);if(O===0)return S(P);J=O}}useBuffer(e){re=e,re.dataView||(re.dataView=new DataView(re.buffer,re.byteOffset,re.byteLength)),Gt=re.dataView,J=0}set position(e){J=e}get position(){return J}set buffer(e){re=e}get buffer(){return re}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}md=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,ix];bc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?E0(n,16,e):b0(zc?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==dx&&this.moreTypes?E0(n,cx.indexOf(t.name),e):b0(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function E0(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function b0(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function r2(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function s2(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function w0(n,e,t){if(jt.length>0){Gt.setUint32(jt.position+n,J+t-jt.position-n),jt.stringsPosition=J-n;let i=jt;jt=null,e(i[0]),e(i[1])}}function o2(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");md.unshift(n.Class),bc.unshift(n)}KC(n)}function a2(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let px=new ga({useRecords:!1});const l2=px.pack,c2=px.pack,f2=ga,{NEVER:u2,ALWAYS:h2,DECIMAL_ROUND:d2,DECIMAL_FIT:p2}=ux,mx=512,gx=1024,_x=2048;function m2(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return g2(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return _2(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*g2(n,e){const t=new ga(e);for(const i of n)yield t.pack(i)}async function*_2(n,e){const t=new ga(e);for await(const i of n)yield t.pack(i)}function x2(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Nr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const v2=x2,y2=m2,S2=!1,M2=!0,E2=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:h2,C1:hd,DECIMAL_FIT:p2,DECIMAL_ROUND:d2,Decoder:ZC,Encoder:f2,FLOAT32_OPTIONS:ux,NEVER:u2,Packr:ga,RESERVE_START_SPACE:_x,RESET_BUFFER_MODE:gx,REUSE_BUFFER_MODE:mx,Unpackr:Nr,addExtension:o2,clearSource:Ec,decode:QC,decodeIter:v2,encode:c2,encodeIter:y2,isNativeAccelerationEnabled:$C,mapsAsObjects:M2,pack:l2,roundFloat32:e2,unpack:jC,unpackMultiple:JC,useRecords:S2},Symbol.toStringTag,{value:"Module"})),b2=cd(E2);var T0;function vx(){if(T0)return Vf;T0=1;var n=BC(),e=Q_(),t=ex(),i=tx(),r=zC(),s=ud(),o=nx(),a=Uc(),c=b2;let l=class xx{constructor(f,u){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),u&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=u,this.serializer.state=new u),this.onError((p,m)=>{var v;return(v=console.warn)===null||v===void 0?void 0:v.call(console,`colyseus.js - onError => (${p}) ${m}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,u,p=this,m,v){const _=new n.Connection(m.protocol);if(p.connection=_,_.events.onmessage=xx.prototype.onMessageCallback.bind(p),_.events.onclose=function(x){var T;if(!p.hasJoined){(T=console.warn)===null||T===void 0||T.call(console,`Room connection was closed unexpectedly (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason);return}x.code===a.CloseCode.DEVMODE_RESTART&&u?u():(p.onLeave.invoke(x.code,x.reason),p.destroy())},_.events.onerror=function(x){var T;(T=console.warn)===null||T===void 0||T.call(console,`Room, onError (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason)},m.protocol==="h3"){const x=new URL(f);_.connect(x.origin,m)}else _.connect(f,v)}leave(f=!0){return new Promise(u=>{this.onLeave(p=>u(p)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(f,u){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),u)}send(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const m=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.send(m)}sendUnreliable(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const m=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.sendUnreliable(m)}sendBytes(f,u){const p={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),u.byteLength+p.offset>this.packr.buffer.byteLength){const m=new Uint8Array(p.offset+u.byteLength);m.set(this.packr.buffer),this.packr.useBuffer(m)}this.packr.buffer.set(u,p.offset),this.connection.send(this.packr.buffer.subarray(0,p.offset+u.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const u=new Uint8Array(f.data),p={offset:1},m=u[0];if(m===e.Protocol.JOIN_ROOM){const v=s.decode.utf8Read(u,p,u[p.offset++]);if(this.serializerId=s.decode.utf8Read(u,p,u[p.offset++]),!this.serializer){const _=t.getSerializer(this.serializerId);this.serializer=new _}u.byteLength>p.offset&&this.serializer.handshake&&this.serializer.handshake(u,p),this.reconnectionToken=`${this.roomId}:${v}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(m===e.Protocol.ERROR){const v=s.decode.number(u,p),_=s.decode.string(u,p);this.onError.invoke(v,_)}else if(m===e.Protocol.LEAVE_ROOM)this.leave();else if(m===e.Protocol.ROOM_STATE)this.serializer.setState(u,p),this.onStateChange.invoke(this.serializer.getState());else if(m===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(u,p),this.onStateChange.invoke(this.serializer.getState());else if(m===e.Protocol.ROOM_DATA){const v=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p),_=u.byteLength>p.offset?c.unpack(u,{start:p.offset}):void 0;this.dispatchMessage(v,_)}else if(m===e.Protocol.ROOM_DATA_BYTES){const v=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p);this.dispatchMessage(v,u.subarray(p.offset))}}dispatchMessage(f,u){var p;const m=this.getMessageHandlerKey(f);this.onMessageHandlers.events[m]?this.onMessageHandlers.emit(m,u):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,u):(p=console.warn)===null||p===void 0||p.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return Vf.Room=l,Vf}var Kf={};function A0(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Di(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),A0(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return A0(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var w2=Di.bind(Di,"GET"),T2=Di.bind(Di,"POST"),A2=Di.bind(Di,"PATCH"),R2=Di.bind(Di,"DELETE"),C2=Di.bind(Di,"PUT");const P2=Object.freeze(Object.defineProperty({__proto__:null,del:R2,get:w2,patch:A2,post:T2,put:C2,send:Di},Symbol.toStringTag,{value:"Module"})),I2=cd(P2);var R0;function D2(){if(R0)return Kf;R0=1;var n=Uc(),e=I2;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,u=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!u?l:new n.ServerError(f,u)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return Kf.HTTP=r,Kf}var Zf={},Bo={},C0;function L2(){if(C0)return Bo;C0=1;var n=Oc;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Bo.getItem=s,Bo.removeItem=r,Bo.setItem=i,Bo}var P0;function yx(){if(P0)return Zf;P0=1;var n=Oc,e=L2(),t=tx(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,u)=>{this.getUserData().then(p=>{this.emitChange(Object.assign(Object.assign({},p),{token:this.token}))}).catch(p=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(u),u})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((u,p)=>{const m=f.width||480,v=f.height||768,_=this.token?`?token=${this.token}`:"",x=`Login with ${h[0].toUpperCase()+h.substring(1)}`,T=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${_}`),C=screen.width/2-m/2,M=screen.height/2-v/2;n.__classPrivateFieldSet(this,s,window.open(T,x,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+m+", height="+v+", top="+M+", left="+C),"f");const I=F=>{F.data.user===void 0&&F.data.token===void 0||(clearInterval(R),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",I),F.data.error!==void 0?p(F.data.error):(u(F.data),this.emitChange(F.data)))},R=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),p("cancelled"),window.removeEventListener("message",I))},200);window.addEventListener("message",I)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,Zf.Auth=a,Zf}var jf={},I0;function N2(){if(I0)return jf;I0=1;function n(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return jf.discordURLBuilder=n,jf}var D0;function O2(){if(D0)return fl;D0=1;var n=Oc,e=Uc(),t=vx(),i=D2(),r=yx(),s=N2(),o;class a extends Error{constructor(f,u){super(f),this.code=u,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window==null?void 0:window.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,u){var p,m;if(typeof f=="string"){const v=f.startsWith("/")?new URL(f,c):new URL(f),_=v.protocol==="https:"||v.protocol==="wss:",x=Number(v.port||(_?443:80));this.settings={hostname:v.hostname,pathname:v.pathname,port:x,secure:_,searchParams:v.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,(u==null?void 0:u.headers)||{}),this.auth=new r.Auth(this.http),this.urlBuilder=u==null?void 0:u.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((m=(p=window==null?void 0:window.location)===null||p===void 0?void 0:p.hostname)===null||m===void 0)&&m.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("joinOrCreate",u,p,m)})}create(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("create",u,p,m)})}join(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("join",u,p,m)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("joinById",u,p,m)})}reconnect(f,u){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof u=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,m]=f.split(":");if(!p||!m)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:m},u)})}consumeSeatReservation(f,u,p){return n.__awaiter(this,void 0,void 0,function*(){const m=this.createRoom(f.room.name,u);m.roomId=f.room.roomId,m.sessionId=f.sessionId;const v={sessionId:m.sessionId};f.reconnectionToken&&(v.reconnectionToken=f.reconnectionToken);const _=p||m;return m.connect(this.buildEndpoint(f.room,v,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${m.roomId}'...`);let x=0,T=8;const C=()=>n.__awaiter(this,void 0,void 0,function*(){x++;try{yield this.consumeSeatReservation(f,u,_),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${m.roomId}'`)}catch{x<T?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${x} out of ${T})`),setTimeout(C,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(C,2e3)})),_,f,this.http.headers),new Promise((x,T)=>{const C=(M,I)=>T(new e.ServerError(M,I));_.onError.once(C),_.onJoin.once(()=>{_.onError.remove(C),x(_)})})})}createMatchMakeRequest(f,u){return n.__awaiter(this,arguments,void 0,function*(p,m,v={},_,x){const T=(yield this.http.post(`matchmake/${p}/${m}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(v)})).data;if(T.error)throw new a(T.error,T.code);return p==="reconnect"&&(T.reconnectionToken=v.reconnectionToken),yield this.consumeSeatReservation(T,_,x)})}createRoom(f,u){return new t.Room(f,u)}buildEndpoint(f,u={},p="ws"){let m=this.settings.searchParams||"";this.http.authToken&&(u._authToken=this.http.authToken);for(const x in u)u.hasOwnProperty(x)&&(m+=(m?"&":"")+`${x}=${u[x]}`);p==="h3"&&(p="http");let v=this.settings.secure?`${p}s://`:`${p}://`;f.publicAddress?v+=`${f.publicAddress}`:v+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const _=`${v}/${f.processId}/${f.roomId}?${m}`;return this.urlBuilder?this.urlBuilder(new URL(_)):_}getHttpEndpoint(f=""){const u=f.startsWith("/")?f:`/${f}`;let p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${u}`;return this.settings.searchParams&&(p+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",fl.Client=l,fl.MatchMakeError=a,fl}var Jf={},L0;function U2(){if(L0)return Jf;L0=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Jf.NoneSerializer=n,Jf}var N0;function F2(){return N0||(N0=1,(function(n){CC();var e=O2(),t=Q_(),i=vx(),r=yx(),s=Uc(),o=nx(),a=U2(),c=ex();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(zf)),zf}var B2=F2();const z2="wss://cargo-skies.fly.dev",k2=1e4,O0=n=>Promise.race([n,new Promise((e,t)=>setTimeout(()=>t(new Error("Connection timed out — a firewall or network may be blocking the game server")),k2))]);async function V2(n,e){const t=new B2.Client(z2),i=e===null?await O0(t.create("race",{nickname:n,code:Z1()})):await O0(t.join("race",{nickname:n,code:e.toUpperCase()}));return{room:i,sessionId:i.sessionId,isHost:()=>i.state.hostSessionId===i.sessionId,sendInput:r=>i.send("input",r),start:()=>i.send("start",{}),setOptions:r=>i.send("options",r)}}const Sx="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",Mx="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:320px;display:flex;flex-direction:column;gap:12px",Ko="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let nn=null,Ch="";const H2=["Turbo","Dizzy","Maverick","Rusty","Comet","Waffles","Captain","Sparky","Loopy","Nimbus","Rocket","Biggles","Zippy","Sunny","Baron","Peanut"],G2=["Falcon","Pigeon","Skywolf","Albatross","Sparrow","Goose","Nugget","Thunder","Vapor","Jetstream","Swift","Puffin","Kestrel","Biplane"],W2=()=>{const n=e=>e[Math.floor(Math.random()*e.length)];return`${n(H2)} ${n(G2)}`.slice(0,16)},$2=()=>["localhost","127.0.0.1"].includes(location.hostname)||!0;function X2(n,e){const t=$2(),i=t?"":"disabled";nn=document.createElement("div"),nn.style.cssText=Sx;const r=document.createElement("div");if(r.style.cssText=Mx,r.innerHTML=`
    <h1 style="margin:0;font-size:24px">Cargo Skies ✈️</h1>
    <input id="nick" placeholder="Your pilot name" maxlength="16"
           style="padding:10px;border-radius:8px;border:none;font-size:16px" />
    <div id="mp" style="display:flex;flex-direction:column;gap:12px">
      <button id="create" ${i} style="${Ko}">Start a race</button>
      <div style="display:flex;gap:8px">
        <input id="code" placeholder="Code" maxlength="4" ${i}
               style="padding:10px;border-radius:8px;border:none;font-size:16px;width:90px;text-transform:uppercase" />
        <button id="join" ${i} style="${Ko};background:#3d6ee8;flex:1">Join a race</button>
      </div>
    </div>
    ${t?"":'<div style="font-size:12px;opacity:.6;margin-top:-6px">Multiplayer races are coming soon ✨</div>'}
    <div style="height:1px;background:rgba(255,255,255,.15);margin:4px 0"></div>
    <button id="practice" style="${Ko};background:#2fbf71">Practice (solo) — no server needed</button>`,nn.appendChild(r),document.body.appendChild(nn),!t){const h=r.querySelector("#mp");h.style.opacity="0.35";for(const f of h.querySelectorAll("button, input"))f.style.cursor="not-allowed"}const s=r.querySelector("#nick");s.value=W2(),s.addEventListener("focus",()=>s.select());const o=r.querySelector("#code"),a=new URLSearchParams(location.search).get("r");a&&/^[A-Za-z0-9]{4}$/.test(a)&&(o.value=a.toUpperCase());const c=r.querySelector("#create"),l=r.querySelector("#join");c.addEventListener("click",()=>{Ph(!0,"create"),n(s.value||"Pilot",null)}),l.addEventListener("click",()=>{if(o.value.length!==4){alert("Enter the 4-letter room code from your friend's share link.");return}Ph(!0,"join"),n(s.value||"Pilot",o.value)}),r.querySelector("#practice").addEventListener("click",()=>{e()})}const q2="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer;color:#fff",U0=(n,e,t)=>`<div data-${n} style="display:flex;gap:6px">${e.map(i=>`<button data-v="${i}" style="${q2};background:${i===t?"#e84d3d":"rgba(255,255,255,.12)"}">${i}</button>`).join("")}</div>`;function Y2(n,e,t,i){var f;nn||(nn=document.createElement("div"),nn.style.cssText=Sx,document.body.appendChild(nn));const r=n.hostSessionId===e,s=[];n.players.forEach(u=>s.push(u.nickname));const o=s.length>=2,a=[n.code,s.join(","),n.legCount,n.difficulty,r].join("|");if(a===Ch)return;Ch=a;const c=`${location.origin}${location.pathname}?r=${n.code}`,l=`≈ ${n.legCount*2} min`,h=r?`
      <div style="font-size:13px;opacity:.8">Legs per contract (${l})</div>
      ${U0("legs",["2","3","4","5","6"],String(n.legCount))}
      <div style="font-size:13px;opacity:.8">Difficulty</div>
      ${U0("diff",["kids","normal","expert"],n.difficulty)}`:`<div style="opacity:.8;font-size:14px">Route: ${n.legCount} legs · ${n.difficulty} · ${l}</div>`;nn.innerHTML=`
    <div style="${Mx}">
      <h2 style="margin:0">Room ${n.code}</h2>
      <div style="opacity:.8">Share: <a href="${c}" style="color:#8fb7ff">${c}</a></div>
      <div>${s.map(u=>`🛩️ ${u}`).join("<br>")}</div>
      ${h}
      ${r?o?`<button id="go" style="${Ko}">Start race</button>`:`<button id="go" disabled style="${Ko};opacity:.4;cursor:not-allowed">Start race</button>
               <div style="opacity:.75;font-size:13px">Waiting for a friend to join — share the link!</div>`:"<div style='opacity:.7'>Waiting for host…</div>"}
    </div>`,(f=nn.querySelector("#go"))==null||f.addEventListener("click",t);for(const u of nn.querySelectorAll("[data-legs] button"))u.addEventListener("click",()=>i({legCount:Number(u.dataset.v)}));for(const u of nn.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>i({difficulty:u.dataset.v??"normal"}))}function Ph(n,e="join"){const t=nn==null?void 0:nn.querySelector("#create"),i=nn==null?void 0:nn.querySelector("#join");!t||!i||(t.disabled=n,i.disabled=n,t.style.opacity=n?"0.6":"1",i.style.opacity=n?"0.6":"1",t.textContent=n&&e==="create"?"Starting…":"Start a race",i.textContent=n&&e==="join"?"Joining…":"Join a race")}function F0(){nn==null||nn.remove(),nn=null,Ch=""}const K2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",Z2="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:360px;display:flex;flex-direction:column;gap:14px",gl="padding:10px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 16px system-ui;cursor:pointer",zo="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer";let Mi=null;function j2(n,e){Mi==null||Mi.remove(),Mi=document.createElement("div"),Mi.style.cssText=K2;const t=document.createElement("div");t.style.cssText=Z2;const i=Object.keys(zs).map(u=>`<button data-plane="${u}" title="${zs[u].blurb}" style="${zo}">${zs[u].emoji}<br>${zs[u].name}</button>`).join("");t.innerHTML=`
    <h2 style="margin:0">Solo flight 🛩️</h2>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Your plane</div>
      <div data-planes style="display:flex;gap:6px">${i}</div>
      <div data-blurb style="font-size:12px;opacity:.7;margin-top:4px;min-height:14px"></div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Difficulty</div>
      <div data-diff style="display:flex;gap:6px">
        <button data-v="kids" style="${zo}">Kids</button>
        <button data-v="normal" style="${zo}">Normal</button>
        <button data-v="expert" style="${zo}">Expert</button>
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Plane speed</div>
      <div data-speed style="display:flex;gap:6px">
        ${Object.keys(Xu).map(u=>`<button data-v="${u}" style="${zo}">${Xu[u].name}</button>`).join("")}
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Legs per contract: <b data-legs-label>3</b></div>
      <input data-legs type="range" min="1" max="6" value="3" style="width:100%" />
    </div>
    <button data-contract style="${gl}">Start contract</button>
    <button data-trial style="${gl};background:#e8a53d">⏱ Timed trial (race your ghost)</button>
    <div style="display:flex;gap:8px">
      <button data-free style="${gl};background:#3d6ee8;flex:1">Free fly</button>
      <button data-passport style="${gl};background:#9a6dce;flex:1">📔 Passport</button>
    </div>`,Mi.appendChild(t),document.body.appendChild(Mi);let r="normal",s="seaplane",o="normal";const a=(u,p)=>{for(const m of t.querySelectorAll(`${u} button`))m.style.background=p(m)?"#e84d3d":"rgba(255,255,255,.12)",m.style.color="#fff"},c=()=>{a("[data-diff]",u=>u.dataset.v===r),a("[data-planes]",u=>u.dataset.plane===s),a("[data-speed]",u=>u.dataset.v===o),t.querySelector("[data-blurb]").textContent=zs[s].blurb};c();for(const u of t.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>{r=u.dataset.v,c()});for(const u of t.querySelectorAll("[data-planes] button"))u.addEventListener("click",()=>{s=u.dataset.plane,c()});for(const u of t.querySelectorAll("[data-speed] button"))u.addEventListener("click",()=>{o=u.dataset.v,c()});const l=t.querySelector("[data-legs]"),h=t.querySelector("[data-legs-label]");l.addEventListener("input",()=>{h.textContent=l.value});const f=u=>({mode:u,difficulty:r,legCount:Number(l.value),plane:s,speed:o});t.querySelector("[data-contract]").addEventListener("click",()=>n(f("contract"))),t.querySelector("[data-trial]").addEventListener("click",()=>n(f("trial"))),t.querySelector("[data-free]").addEventListener("click",()=>n(f("free"))),t.querySelector("[data-passport]").addEventListener("click",e)}function J2(){Mi==null||Mi.remove(),Mi=null}const Il=n=>{const e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(1).padStart(4,"0")}`},Q2={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function eP(n){let e=null,t=0,i=0,r=0,s=0,o=[],a=0;const c=()=>(e==null?void 0:e.legs[t])??null,l=()=>{var f;const h=c();!h||!e||(i=0,s=0,n.hints.setTarget(h.countryId),n.hints.setFlags(qu(0,e.difficulty)),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,Lc(((f=n.countries[h.countryId])==null?void 0:f.cca2)??"")))};return{currentLeg:c,startContract(h){e=tw(n.countries,n.landmarks,n.riddles,{seed:h.seed??Date.now()>>>0,legCount:h.legCount,difficulty:h.difficulty}),t=0,r=0,o=[],a=0,l()},stop(){e=null,n.hints.clear(),n.beacon.hide(),n.banner.hide()},isActive(){return e!==null},update(h,f){var v;const u=c();if(!e||!u)return;if(a>0){a-=f,a<=0&&l();return}i+=f,r+=f,n.banner.setClock(`⏱ ${Il(r)}`);const p=qu(i,e.difficulty);n.hints.setFlags(p),n.banner.setCompass(p.compass?(Dg(h.lat,h.lon,u.zone.lat,u.zone.lon)-h.headingDeg+360)%360:null);const m=Lg(h,u,s,f);if(s=m.dwellS,n.banner.setDwell(u.type==="refuel"&&m.inZone?s/Zh:null),u.type==="refuel"&&m.inZone?n.banner.setWarning("⛽ Refueling — hold steady!"):n.banner.setWarning(m.requirementBlocked?Q2[u.type]??null:null),m.complete){o.push(i);const _=((v=n.countries[u.countryId])==null?void 0:v.name)??u.countryId;if(n.hints.clear(),n.beacon.hide(),t+1<e.legs.length)n.banner.toast(`✅ ${_}! Leg ${t+1} of ${e.legs.length} done`),t+=1,a=1.2;else{n.banner.hide();const x={contract:e,legTimesS:o,totalS:r};e=null,n.onContractComplete(x)}}}}}const B0=13606703,tP=16765471;function nP(n){let e=null,t={continent:!1,outline:!1};const i=new Set,r=()=>{var s;for(const o of i)(s=n.countryMaterials.get(o))==null||s.emissive.setHex(0);i.clear()};return{setTarget(s){r(),e=s},setFlags(s){!s.continent&&t.continent&&r(),t=s},update(s){if(!e)return;const o=n.continentOf.get(e);if(t.continent&&o){const c=.12+.08*Math.sin(s*2.5);for(const[l,h]of n.countryMaterials)n.continentOf.get(l)===o&&l!==e&&(h.emissive.setHex(B0),h.emissiveIntensity=c,i.add(l))}const a=n.countryMaterials.get(e);a&&(t.outline?(a.emissive.setHex(tP),a.emissiveIntensity=.4+.3*Math.sin(s*5),i.add(e)):t.continent&&(a.emissive.setHex(B0),a.emissiveIntensity=.12+.08*Math.sin(s*2.5),i.add(e)))},clear(){r(),e=null,t={continent:!1,compass:!1,outline:!1}}}}const iP="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",rP="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:380px;display:flex;flex-direction:column;gap:12px",z0="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let Ei=null;function sP(n,e,t,i,r){Ei==null||Ei.remove(),Ei=document.createElement("div"),Ei.style.cssText=iP;const s=n.contract.legs.map((c,l)=>{const h=e[c.countryId],f=t.includes(c.countryId)?" 🆕":"";return`<tr>
        <td style="padding:3px 10px 3px 0;opacity:.7">${l+1}.</td>
        <td style="padding:3px 10px 3px 0">${Lc((h==null?void 0:h.cca2)??"")} ${(h==null?void 0:h.name)??c.countryId}${f}</td>
        <td style="padding:3px 0;text-align:right;font-variant-numeric:tabular-nums">${Il(n.legTimesS[l]??0)}</td>
      </tr>`}).join(""),o=i!==null?n.totalS<=i?'<div style="color:#2fbf71;font-weight:700">🎉 New best time!</div>':`<div style="opacity:.8">Best: ${Il(i)}</div>`:"",a=document.createElement("div");a.style.cssText=rP,a.innerHTML=`
    <h2 style="margin:0">🏆 Contract complete!</h2>
    <table style="border-collapse:collapse;font-size:15px">${s}</table>
    <div style="font-size:20px;font-weight:800">Total ${Il(n.totalS)}</div>
    ${o}
    ${t.length>0?`<div style="opacity:.85">📔 ${t.length} new passport stamp${t.length>1?"s":""}!</div>`:""}
    <button data-again style="${z0}">New contract</button>
    <button data-menu style="${z0};background:#3d6ee8">Menu</button>`,Ei.appendChild(a),document.body.appendChild(Ei),a.querySelector("[data-again]").addEventListener("click",()=>{k0(),r.onNewContract()}),a.querySelector("[data-menu]").addEventListener("click",()=>{k0(),r.onMenu()})}function k0(){Ei==null||Ei.remove(),Ei=null}const Ex="cargoSkies.passport.v1";function bx(){try{return JSON.parse(localStorage.getItem(Ex)??"{}")}catch{return{}}}function oP(n){const e=bx(),t=[];for(const i of n)e[i]||t.push(i),e[i]=(e[i]??0)+1;return localStorage.setItem(Ex,JSON.stringify(e)),t}const aP="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:11";let li=null;function lP(n,e){li==null||li.remove();const t=bx(),i=Object.entries(t).map(([o,a])=>({meta:n[o],count:a})).filter(o=>o.meta!==void 0).sort((o,a)=>o.meta.name.localeCompare(a.meta.name)),r=Object.values(n).filter(o=>o.playable).length;li=document.createElement("div"),li.style.cssText=aP;const s=i.map(o=>`<div style="display:flex;gap:8px;align-items:center;padding:4px 8px;background:rgba(255,255,255,.06);border-radius:8px">
          <span style="font-size:22px">${Lc(o.meta.cca2)}</span>
          <span style="flex:1">${o.meta.name}</span>
          <span style="opacity:.6">×${o.count}</span>
        </div>`).join("");li.innerHTML=`
    <div style="background:#141b3d;padding:28px 32px;border-radius:16px;width:420px;max-height:75vh;display:flex;flex-direction:column;gap:12px">
      <h2 style="margin:0">📔 Passport — ${i.length} / ${r} countries</h2>
      <div style="overflow-y:auto;display:flex;flex-direction:column;gap:6px">${s||"<div style='opacity:.7'>No stamps yet — complete a contract leg to earn your first!</div>"}</div>
      <button data-close style="padding:10px 16px;border:none;border-radius:10px;background:#3d6ee8;color:#fff;font:600 16px system-ui;cursor:pointer">Close</button>
    </div>`,document.body.appendChild(li),li.querySelector("[data-close]").addEventListener("click",()=>{li==null||li.remove(),li=null})}const Ih=.1,wx=(n,e,t)=>`cargoSkies.trial.v3.${n}.${e}.${t}`,cP=(n,e)=>n.charCodeAt(0)*7919+e*104729>>>0;function V0(n,e,t){try{const i=localStorage.getItem(wx(n,e,t));return i?JSON.parse(i):null}catch{return null}}function fP(n,e,t,i){localStorage.setItem(wx(n,e,t),JSON.stringify(i))}const H0=n=>new W(n.x,n.y,n.z);function uP(n){const e=yc(16777215);e.traverse(i=>{i instanceof wt&&i.material instanceof Ur&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.35)}),e.visible=!1,n.add(e);let t=[];return{start(i){t=i,e.visible=t.length>0},stop(){t=[],e.visible=!1},update(i){if(t.length===0)return;const r=i/Ih,s=Math.min(t.length-1,Math.floor(r)),o=t[Math.min(t.length-1,s+1)],a=t[s],c=Math.min(1,r-s),l=a.lat+(o.lat-a.lat)*c,h=(o.lon-a.lon+540)%360-180,f=(a.lon+h*c+540)%360-180,u=a.altKm+(o.altKm-a.altKm)*c,p=H0(Bn(l,f,u)),m=Hl(l,f,a.headingDeg,5);e.position.copy(p),e.up.copy(p.clone().normalize()),e.lookAt(H0(Bn(m.lat,m.lon,u)))}}}const hP=34,dP=.004;function pP(){const n=new _n,e=new eo({color:wR,gradientMap:ua(),transparent:!0,opacity:.92});for(let t=0;t<hP;t++){const i=new _n,r=3+Math.floor(Math.random()*3);for(let l=0;l<r;l++){const h=1.2+Math.random()*1.6,f=new wt(new qi(h,10,8),e);f.position.set((l-r/2)*1.6,(Math.random()-.5)*.6,(Math.random()-.5)*1.4),f.scale.y=.6,i.add(f)}const s=(Math.random()-.5)*140,o=Math.random()*360-180,a=260+Math.random()*160,c=Bn(s,o,a);i.position.set(c.x,c.y,c.z),i.lookAt(0,0,0),n.add(i)}return{group:n,update(t){n.rotation.y+=dP*t}}}const mP=12,gP=30,_P=.8,xP=1.2;function vP(n,e){const t=Math.max(0,n),i=mP+e*_P,r=gP+e*xP;return t<=i?1:t>=r?0:1-(t-i)/(r-i)}const bi=Math.PI/180,Xo=512,Dl=96,yP=5,SP=26,MP=.7,EP="#24365e",bP="rgba(255,255,255,0.85)";function wP(n){const e=document.createElement("canvas");e.width=Xo,e.height=Dl;const t=e.getContext("2d");if(!t)throw new Error("2d canvas unavailable");let i=56;const r=()=>{t.font=`bold ${i}px 'Trebuchet MS', Verdana, sans-serif`};for(r();t.measureText(n).width>Xo-24&&i>18;)i-=4,r();t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.lineJoin="round",t.strokeStyle=bP,t.strokeText(n,Xo/2,Dl/2),t.fillStyle=EP,t.fillText(n,Xo/2,Dl/2);const s=new ks(e);return s.anisotropy=4,s}function TP(n,e,t,i){const r=Math.max(1.5,t*Math.cos(n*bi)*(Dl/Xo)),s=new qi(ER,12,4,(90+e-t/2)*bi,t*bi,(90-n-r/2)*bi,r*bi),o=new hi({map:i,transparent:!0,opacity:0,depthWrite:!1});return new wt(s,o)}function AP(n){const e=new _n,t=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=X1(r.geometry),o=Math.min(SP,Math.max(yP,s.widthDeg*MP)),a=TP(s.lat,s.lon,o,wP(r.properties.name));a.visible=!1,e.add(a),t.push({mesh:a,widthDeg:o,direction:new W(Math.cos(s.lat*bi)*Math.sin(s.lon*bi),Math.sin(s.lat*bi),Math.cos(s.lat*bi)*Math.cos(s.lon*bi))})}const i=new W;return{group:e,update(r){i.copy(r.position).normalize();for(const s of t){const o=Math.acos(sg.clamp(i.dot(s.direction),-1,1))/bi,a=vP(o,s.widthDeg);s.mesh.visible=a>.02,s.mesh.material.opacity=a}}}}const Jn=1/60,RP=.25,CP=1/20;async function PP(){const n=document.getElementById("app");if(!n)throw new Error("#app root missing");const{world:e,countries:t,landmarks:i,riddles:r}=await LR(),s=W1(e),{scene:o,camera:a,renderer:c}=DR(n),l=PR(e);o.add(l.group);const h=AP(e);o.add(h.group);const f=pP();o.add(f.group);let u=yc();o.add(u);let p=jh,m=Rg;const v=(Le,rt=15224125)=>{o.remove(u),u=yc(rt,Le),o.add(u),p=zs[Le].tuning,x=$m(u,a)},_=zR();let x=$m(u,a);const T=jR(document.body),C=QR(o),M=tC(o),I=lC(o),R=new W(0,.2,-2.2),F=.3,S=wC(document.body),A=RC(document.body),k=nP(l),B=uC({countries:t,banner:A,hints:k,beacon:M}),z=vC(o);let P=Y1();const O=Le=>{P=Le},E=uP(o);let L=null,U=!1,G=[],K=0,te=0;const fe=()=>{j2(j,()=>{lP(t)})},j=Le=>{if(J2(),L=Le,v(Le.plane),m=Xu[Le.speed].worldSpeedScale,U=Le.mode==="trial",E.stop(),G=[],K=0,te=0,Le.mode==="contract")ye.startContract({difficulty:Le.difficulty,legCount:Le.legCount});else if(Le.mode==="trial"){const rt=cP(Le.difficulty,Le.legCount),nt=V0(Le.difficulty,Le.legCount,Le.speed);nt&&E.start(nt.track),ye.startContract({difficulty:Le.difficulty,legCount:Le.legCount,seed:rt})}},ye=eP({countries:t,landmarks:i,riddles:r,banner:A,hints:k,beacon:M,onContractComplete:Le=>{A.setClock(null);const rt=oP(Le.contract.legs.map(et=>et.countryId));let nt=null;if(U&&L){const et=V0(L.difficulty,L.legCount,L.speed);nt=(et==null?void 0:et.timeS)??Le.totalS,(!et||Le.totalS<et.timeS)&&fP(L.difficulty,L.legCount,L.speed,{timeS:Le.totalS,track:G}),E.stop()}sP(Le,t,rt,nt,{onNewContract:()=>{L&&j(L)},onMenu:fe})}}),pe=await new Promise(Le=>{X2((rt,nt)=>{V2(rt,nt).then(Le).catch(et=>{console.error("Connection failed",et),Ph(!1);const _t=String((et==null?void 0:et.message)??et),pt=/ECONNREFUSED|failed to connect|WebSocket|network|refused|timed out/i.test(_t);alert(pt?"Can't reach the game server — check your internet connection (some networks/firewalls block game connections) and try again.":nt!==null?`No race found with code ${nt.toUpperCase()}. Check the code and try again.`:"Couldn't start a race — see the console for details.")})},()=>Le(null))}),qe=pe?EC(document.body,Le=>pe.room.send("useItem",{targetSessionId:Le}),()=>pe.room.send("shoot",{})):null;if(pe&&pe.room.onMessage("shot",Le=>{var ft,Dt;const rt=pe.room.state,nt=(ft=rt.players)==null?void 0:ft.get(Le.from),et=Le.hit?(Dt=rt.players)==null?void 0:Dt.get(Le.hit):void 0;if(!nt)return;const _t=new W().copy(Bn(nt.lat,nt.lon,nt.altKm));let pt;if(et)pt=new W().copy(Bn(et.lat,et.lon,et.altKm));else{const q=A1*(Math.PI/180)*Ic,sn=Hl(nt.lat,nt.lon,nt.headingDeg,q);pt=new W().copy(Bn(sn.lat,sn.lon,nt.altKm))}z.flashShot(_t,pt,!!et)}),pe===null)F0(),fe();else{let Le=!1,rt=!0;pe.room.onStateChange(nt=>{var _t;JR(nt.serverTime);const et=(_t=nt.players)==null?void 0:_t.get(pe.sessionId);if(et){if(!Le){Le=!0,nt.code&&history.replaceState(null,"",`?r=${nt.code}`);const pt=et.colorIdx??0;u.traverse(ft=>{ft instanceof wt&&ft.material instanceof eo&&ft.material.color.getHex()===15224125&&ft.material.color.setHex(vc[pt%vc.length]??15224125)})}nt.phase==="lobby"&&rt?Y2(nt,pe.sessionId,()=>pe.start(),pt=>pe.setOptions(pt)):rt&&(F0(),rt=!1),C.sync(nt,pe.sessionId),S.update(nt,pe.sessionId,()=>pe.start()),ea(et.lat,et.lon,P.lat,P.lon)>_1&&O({lat:et.lat,lon:et.lon,altKm:et.altKm,headingDeg:et.headingDeg,pitchDeg:et.pitchDeg,rollDeg:et.rollDeg,barrelRollS:et.barrelRollS,loopS:et.loopS,speedKmh:et.speedKmh})}})}let le=0,Ee=0,ve=0,je=0,Ye={throttle:0,turn:0,pitch:0},it=0,Ht=0;const gt=new uy,It=()=>{const Le=pe?fC(pe.room.state,pe.sessionId,P):ye.isActive()&&ye.currentLeg()?Ng(P,ye.currentLeg()):null;Le!==null&&(P={...P,speedKmh:Le})};c.setAnimationLoop(()=>{var rt,nt,et;for(gt.update(),le+=Math.min(gt.getDelta(),.25);le>=Jn;){Ye=_.read(Jn),Ye.barrelRoll&&(it=Ye.barrelRoll),Ye.loop&&(Ht=1);let _t=Ye,pt=m;if(pe){const ft=(rt=pe.room.state.players)==null?void 0:rt.get(pe.sessionId);if(ft){const Dt=ri(),q={tumbleUntil:ft.tumbleUntil,boostUntil:ft.boostUntil,slowUntil:ft.slowUntil,fogUntil:ft.fogUntil,freezeUntil:ft.freezeUntil,smokeUntil:ft.smokeUntil};rw(q,Dt)&&(_t=w1),pt=m*sw(q,Dt)}}P=K1(P,_t,Jn,p,pt),It(),ye.isActive()&&(ye.update(P,Jn),U&&(te+=Jn,K+=Jn,K>=Ih&&(K-=Ih,G.push({lat:P.lat,lon:P.lon,altKm:P.altKm,headingDeg:P.headingDeg})))),le-=Jn,Ee+=Jn,ve+=Jn}if(pe&&ve>=CP&&(ve=0,pe.sendInput({...Ye,barrelRoll:it,loop:Ht}),it=0,Ht=0),Ee>=RP){Ee=0;const _t=s.findCountryAt(P.lat,P.lon);T.setCountry(_t?((nt=t[_t])==null?void 0:nt.name)??_t:null)}if(je+=Jn,x.update(P,Ye),h.update(a),pe){B.update(pe.room.state,pe.sessionId,P,Jn),qe==null||qe.update(pe.room.state,pe.sessionId);const _t=(et=pe.room.state.players)==null?void 0:et.get(pe.sessionId);_t&&ri()<_t.tumbleUntil&&u.rotateZ(je*14)}z.update(pe?pe.room.state:null,je),k.update(je),M.update(je),f.update(Jn);const Le=(P.speedKmh-to)/(Kh-to);I.update(Jn,u.localToWorld(R.clone()),Le>F),E.update(te),pe&&C.update(),T.setTelemetry(P),c.render(o,a)})}PP().catch(n=>{console.error("Failed to start Cargo Skies",n),document.body.textContent="Engine stalled — please refresh."});
