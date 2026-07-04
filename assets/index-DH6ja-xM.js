(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="185",ax=0,fd=1,lx=2,ll=1,cx=2,Co=3,Ir=0,Vn=1,Ei=2,or=0,Ls=1,ud=2,hd=3,dd=4,fx=5,Wr=100,ux=101,hx=102,dx=103,px=104,mx=200,gx=201,_x=202,xx=203,Hf=204,Gf=205,vx=206,yx=207,Sx=208,Mx=209,Ex=210,bx=211,wx=212,Tx=213,Ax=214,Wf=0,$f=1,Xf=2,zs=3,qf=4,Yf=5,Kf=6,Zf=7,b0=0,Rx=1,Cx=2,Gi=0,w0=1,T0=2,A0=3,R0=4,C0=5,P0=6,I0=7,D0=300,Qr=301,ks=302,Lc=303,Nc=304,gc=306,Jf=1e3,rr=1001,jf=1002,yn=1003,Px=1004,aa=1005,Tn=1006,Oc=1007,qr=1008,ti=1009,L0=1010,N0=1011,zo=1012,Sh=1013,Ki=1014,zi=1015,hr=1016,Mh=1017,Eh=1018,ko=1020,O0=35902,U0=35899,F0=1021,B0=1022,Ti=1023,dr=1026,Yr=1027,bh=1028,wh=1029,es=1030,Th=1031,Ah=1033,cl=33776,fl=33777,ul=33778,hl=33779,Qf=35840,eu=35841,tu=35842,nu=35843,iu=36196,ru=37492,su=37496,ou=37488,au=37489,El=37490,lu=37491,cu=37808,fu=37809,uu=37810,hu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,xu=37817,vu=37818,yu=37819,Su=37820,Mu=37821,Eu=36492,bu=36494,wu=36495,Tu=36283,Au=36284,bl=36285,Ru=36286,Ix=3200,Cu=0,Dx=1,Tr="",ci="srgb",wl="srgb-linear",Tl="linear",Ot="srgb",as=7680,pd=519,Lx=512,Nx=513,Ox=514,Rh=515,Ux=516,Fx=517,Ch=518,Bx=519,Pu=35044,md="300 es",ki=2e3,Vo=2001;function zx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Al(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kx(){const n=Al("canvas");return n.style.display="block",n}const gd={};function Rl(...n){const e="THREE."+n.shift();console.log(e,...n)}function z0(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=z0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function St(...n){n=z0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ns(...n){const e=n.join(" ");e in gd||(gd[e]=!0,st(...n))}function Vx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Hx={[Wf]:$f,[Xf]:Kf,[qf]:Zf,[zs]:Yf,[$f]:Wf,[Kf]:Xf,[Zf]:qf,[Yf]:zs};class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _d=1234567;const Os=Math.PI/180,Ho=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function Ph(n,e){return(n%e+e)%e}function Gx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Wx(n,e,t){return n!==e?(t-n)/(e-n):0}function Uo(n,e,t){return(1-t)*n+t*e}function $x(n,e,t,i){return Uo(n,e,1-Math.exp(-t*i))}function Xx(n,e=1){return e-Math.abs(Ph(n,e*2)-e)}function qx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zx(n,e){return n+Math.random()*(e-n)}function Jx(n){return n*(.5-Math.random())}function jx(n){n!==void 0&&(_d=n);let e=_d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qx(n){return n*Os}function ev(n){return n*Ho}function tv(n){return(n&n-1)===0&&n!==0}function nv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function iv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rv(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*h,a*l);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const k0={DEG2RAD:Os,RAD2DEG:Ho,generateUUID:ar,clamp:dt,euclideanModulo:Ph,mapLinear:Gx,inverseLerp:Wx,lerp:Uo,damp:$x,pingpong:Xx,smoothstep:qx,smootherstep:Yx,randInt:Kx,randFloat:Zx,randFloatSpread:Jx,seededRandom:jx,degToRad:Qx,radToDeg:ev,isPowerOfTwo:tv,ceilPowerOfTwo:nv,floorPowerOfTwo:iv,setQuaternionFromProperEuler:rv,normalize:Ut,denormalize:bi},sd=class sd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sd.prototype.isVector2=!0;let ht=sd;class Js{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(f!==v||c!==u||l!==p||h!==m){let _=c*u+l*p+h*m+f*v;_<0&&(u=-u,p=-p,m=-m,v=-v,_=-_);let x=1-a;if(_<.9995){const w=Math.acos(_),A=Math.sin(w);x=Math.sin(x*w)/A,a=Math.sin(a*w)/A,c=c*x+u*a,l=l*x+p*a,h=h*x+m*a,f=f*x+v*a}else{c=c*x+u*a,l=l*x+p*a,h=h*x+m*a,f=f*x+v*a;const w=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=w,l*=w,h*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+h*f+c*p-l*u,e[t+1]=c*m+h*u+l*f-a*p,e[t+2]=l*m+h*p+a*u-c*f,e[t+3]=h*m-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),u=c(i/2),p=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f+u*p*m;break;case"YZX":this._x=u*h*f+l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f-u*p*m;break;case"XZY":this._x=u*h*f-l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f+u*p*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const od=class od{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};od.prototype.isVector3=!0;let W=od;const Uc=new W,xd=new Js,ad=class ad{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],m=i[8],v=r[0],_=r[3],x=r[6],w=r[1],A=r[4],S=r[7],R=r[2],C=r[5],N=r[8];return s[0]=o*v+a*w+c*R,s[3]=o*_+a*A+c*C,s[6]=o*x+a*S+c*N,s[1]=l*v+h*w+f*R,s[4]=l*_+h*A+f*C,s[7]=l*x+h*S+f*N,s[2]=u*v+p*w+m*R,s[5]=u*_+p*A+m*C,s[8]=u*x+p*S+m*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,p=l*s-o*c,m=t*f+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=u*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fc.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fc.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ad.prototype.isMatrix3=!0;let ft=ad;const Fc=new ft,vd=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){const n={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ot&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?Tl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wl]:{primaries:e,whitePoint:i,transfer:Tl,toXYZ:vd,fromXYZ:yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:vd,fromXYZ:yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),n}const vt=sv();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class ov{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Al("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Al("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let av=0;class Ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bc(r[o].image)):s.push(Bc(r[o]))}else s=Bc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ov.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let lv=0;const zc=new W;class Rn extends rs{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=rr,r=rr,s=Tn,o=qr,a=Ti,c=ti,l=Rn.DEFAULT_ANISOTROPY,h=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ar(),this.name="",this.source=new Ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jf:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jf:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=D0;Rn.DEFAULT_ANISOTROPY=1;const ld=class ld{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],m=c[9],v=c[2],_=c[6],x=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,S=(p+1)/2,R=(x+1)/2,C=(h+u)/4,N=(f+v)/4,M=(m+_)/4;return A>S&&A>R?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=C/i,s=N/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=M/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=N/s,r=M/s),this.set(i,r,s,t),this}let w=Math.sqrt((_-m)*(_-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(_-m)/w,this.y=(f-v)/w,this.z=(u-h)/w,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ld.prototype.isVector4=!0;let zt=ld;class cv extends rs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Rn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ih(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends cv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class V0 extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fv extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mc=class mc{constructor(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_)}set(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=f,x[14]=u,x[3]=p,x[7]=m,x[11]=v,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,m=a*h,v=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+m*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,m=l*h,v=l*f;t[0]=u+v*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,m=l*h,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,m=a*h,v=a*f;t[0]=c*h,t[4]=m*l-p,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-u*f,t[8]=m*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+m,t[10]=u-v*f}else if(e.order==="XZY"){const u=o*c,p=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=o*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uv,e,hv)}lookAt(e,t,i){const r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),vr.crossVectors(i,Kn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),vr.crossVectors(i,Kn)),vr.normalize(),la.crossVectors(Kn,vr),r[0]=vr.x,r[4]=la.x,r[8]=Kn.x,r[1]=vr.y,r[5]=la.y,r[9]=Kn.y,r[2]=vr.z,r[6]=la.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],m=i[2],v=i[6],_=i[10],x=i[14],w=i[3],A=i[7],S=i[11],R=i[15],C=r[0],N=r[4],M=r[8],T=r[12],B=r[1],U=r[5],z=r[9],D=r[13],H=r[2],P=r[6],O=r[10],F=r[14],G=r[3],Z=r[7],te=r[11],ue=r[15];return s[0]=o*C+a*B+c*H+l*G,s[4]=o*N+a*U+c*P+l*Z,s[8]=o*M+a*z+c*O+l*te,s[12]=o*T+a*D+c*F+l*ue,s[1]=h*C+f*B+u*H+p*G,s[5]=h*N+f*U+u*P+p*Z,s[9]=h*M+f*z+u*O+p*te,s[13]=h*T+f*D+u*F+p*ue,s[2]=m*C+v*B+_*H+x*G,s[6]=m*N+v*U+_*P+x*Z,s[10]=m*M+v*z+_*O+x*te,s[14]=m*T+v*D+_*F+x*ue,s[3]=w*C+A*B+S*H+R*G,s[7]=w*N+A*U+S*P+R*Z,s[11]=w*M+A*z+S*O+R*te,s[15]=w*T+A*D+S*F+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],m=e[3],v=e[7],_=e[11],x=e[15],w=c*p-l*u,A=a*p-l*f,S=a*u-c*f,R=o*p-l*h,C=o*u-c*h,N=o*f-a*h;return t*(v*w-_*A+x*S)-i*(m*w-_*R+x*C)+r*(m*A-v*R+x*N)-s*(m*S-v*C+_*N)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],m=e[12],v=e[13],_=e[14],x=e[15],w=t*a-i*o,A=t*c-r*o,S=t*l-s*o,R=i*c-r*a,C=i*l-s*a,N=r*l-s*c,M=h*v-f*m,T=h*_-u*m,B=h*x-p*m,U=f*_-u*v,z=f*x-p*v,D=u*x-p*_,H=w*D-A*z+S*U+R*B-C*T+N*M;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=(a*D-c*z+l*U)*P,e[1]=(r*z-i*D-s*U)*P,e[2]=(v*N-_*C+x*R)*P,e[3]=(u*C-f*N-p*R)*P,e[4]=(c*B-o*D-l*T)*P,e[5]=(t*D-r*B+s*T)*P,e[6]=(_*S-m*N-x*A)*P,e[7]=(h*N-u*S+p*A)*P,e[8]=(o*z-a*B+l*M)*P,e[9]=(i*B-t*z-s*M)*P,e[10]=(m*C-v*S+x*w)*P,e[11]=(f*S-h*C-p*w)*P,e[12]=(a*T-o*U-c*M)*P,e[13]=(t*U-i*T+r*M)*P,e[14]=(v*A-m*R-_*w)*P,e[15]=(h*R-f*A+u*w)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,p=s*h,m=s*f,v=o*h,_=o*f,x=a*f,w=c*l,A=c*h,S=c*f,R=i.x,C=i.y,N=i.z;return r[0]=(1-(v+x))*R,r[1]=(p+S)*R,r[2]=(m-A)*R,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(u+x))*C,r[6]=(_+w)*C,r[7]=0,r[8]=(m+A)*N,r[9]=(_-w)*N,r[10]=(1-(u+v))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=cs.set(r[0],r[1],r[2]).length();const a=cs.set(r[4],r[5],r[6]).length(),c=cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),_i.copy(this);const l=1/o,h=1/a,f=1/c;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=ki,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===ki)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Vo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ki,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===ki)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Vo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};mc.prototype.isMatrix4=!0;let Yt=mc;const cs=new W,_i=new Yt,uv=new W(0,0,0),hv=new W(1,1,1),vr=new W,la=new W,Kn=new W,Sd=new Yt,Md=new Js;class ts{constructor(e=0,t=0,i=0,r=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dv=0;const Ed=new W,fs=new Js,ji=new Yt,ca=new W,co=new W,pv=new W,mv=new Js,bd=new W(1,0,0),wd=new W(0,1,0),Td=new W(0,0,1),Ad={type:"added"},gv={type:"removed"},us={type:"childadded",child:null},kc={type:"childremoved",child:null};class ln extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new W,t=new ts,i=new Js,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ft}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(bd,e)}rotateY(e){return this.rotateOnAxis(wd,e)}rotateZ(e){return this.rotateOnAxis(Td,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bd,e)}translateY(e){return this.translateOnAxis(wd,e)}translateZ(e){return this.translateOnAxis(Td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(co,ca,this.up):ji.lookAt(ca,co,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(ji),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ad),us.child=e,this.dispatchEvent(us),us.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gv),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ad),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,mv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new W(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class An extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),x=this._getHandJoint(l,v);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Hc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let _t=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=Ph(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Hc(o,s,e+1/3),this.g=Hc(o,s,e),this.b=Hc(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=ci){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ci){const i=G0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return vt.workingToColorSpace(Mn.copy(this),e),Math.round(dt(Mn.r*255,0,255))*65536+Math.round(dt(Mn.g*255,0,255))*256+Math.round(dt(Mn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ci){vt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,r=Mn.b;return e!==ci?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(fa);const i=Uo(yr.h,fa.h,t),r=Uo(yr.s,fa.s,t),s=Uo(yr.l,fa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Mn=new _t;_t.NAMES=G0;class xv extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new W,Qi=new W,Gc=new W,er=new W,hs=new W,ds=new W,Rd=new W,Wc=new W,$c=new W,Xc=new W,qc=new zt,Yc=new zt,Kc=new zt;class ni{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xi.subVectors(e,t),r.cross(xi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xi.subVectors(r,t),Qi.subVectors(i,t),Gc.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(Qi),c=xi.dot(Gc),l=Qi.dot(Qi),h=Qi.dot(Gc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,er.x),c.addScaledVector(o,er.y),c.addScaledVector(a,er.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return qc.setScalar(0),Yc.setScalar(0),Kc.setScalar(0),qc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,i),Kc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(qc,s.x),o.addScaledVector(Yc,s.y),o.addScaledVector(Kc,s.z),o}static isFrontFacing(e,t,i,r){return xi.subVectors(i,t),Qi.subVectors(e,t),xi.cross(Qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),xi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ds.subVectors(s,i),Wc.subVectors(e,i);const c=hs.dot(Wc),l=ds.dot(Wc);if(c<=0&&l<=0)return t.copy(i);$c.subVectors(e,r);const h=hs.dot($c),f=ds.dot($c);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(hs,o);Xc.subVectors(e,s);const p=hs.dot(Xc),m=ds.dot(Xc);if(m>=0&&p<=m)return t.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(ds,a);const _=h*m-p*f;if(_<=0&&f-h>=0&&p-m>=0)return Rd.subVectors(s,r),a=(f-h)/(f-h+(p-m)),t.copy(r).addScaledVector(Rd,a);const x=1/(_+v+u);return o=v*x,a=u*x,t.copy(i).addScaledVector(hs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ua.copy(i.boundingBox)),ua.applyMatrix4(e.matrixWorld),this.union(ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ha.subVectors(this.max,fo),ps.subVectors(e.a,fo),ms.subVectors(e.b,fo),gs.subVectors(e.c,fo),Sr.subVectors(ms,ps),Mr.subVectors(gs,ms),Ur.subVectors(ps,gs);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Ur.z,Ur.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Ur.z,0,-Ur.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Ur.y,Ur.x,0];return!Zc(t,ps,ms,gs,ha)||(t=[1,0,0,0,1,0,0,0,1],!Zc(t,ps,ms,gs,ha))?!1:(da.crossVectors(Sr,Mr),t=[da.x,da.y,da.z],Zc(t,ps,ms,gs,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new W,new W,new W,new W,new W,new W,new W,new W],vi=new W,ua=new Lr,ps=new W,ms=new W,gs=new W,Sr=new W,Mr=new W,Ur=new W,fo=new W,ha=new W,da=new W,Fr=new W;function Zc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fr.fromArray(n,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),c=e.dot(Fr),l=t.dot(Fr),h=i.dot(Fr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const on=new W,pa=new ht;let vv=0;class Ri extends rs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pu,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class W0 extends Ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $0 extends Ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends Ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}const yv=new Lr,uo=new W,Jc=new W;class js{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const t=uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(Jc)),this.expandByPoint(uo.copy(e.center).sub(Jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sv=0;const si=new Yt,jc=new ln,_s=new W,Zn=new Lr,ho=new Lr,hn=new W;class un extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zx(e)?$0:W0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,i){return si.makeTranslation(e,t,i),this.applyMatrix4(si),this}scale(e,t,i){return si.makeScale(e,t,i),this.applyMatrix4(si),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Zn.min,ho.min),Zn.expandByPoint(hn),hn.addVectors(Zn.max,ho.max),Zn.expandByPoint(hn)):(Zn.expandByPoint(ho.min),Zn.expandByPoint(ho.max))}Zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)hn.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(e,l),hn.add(_s)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ri(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new W,c[M]=new W;const l=new W,h=new W,f=new W,u=new ht,p=new ht,m=new ht,v=new W,_=new W;function x(M,T,B){l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,B),u.fromBufferAttribute(s,M),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,B),h.sub(l),f.sub(l),p.sub(u),m.sub(u);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(U),a[M].add(v),a[T].add(v),a[B].add(v),c[M].add(_),c[T].add(_),c[B].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let M=0,T=w.length;M<T;++M){const B=w[M],U=B.start,z=B.count;for(let D=U,H=U+z;D<H;D+=3)x(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const A=new W,S=new W,R=new W,C=new W;function N(M){R.fromBufferAttribute(r,M),C.copy(R);const T=a[M];A.copy(T),A.sub(R.multiplyScalar(R.dot(T))).normalize(),S.crossVectors(C,T);const U=S.dot(c[M])<0?-1:1;o.setXYZW(M,A.x,A.y,A.z,U)}for(let M=0,T=w.length;M<T;++M){const B=w[M],U=B.start,z=B.count;for(let D=U,H=U+z;D<H;D+=3)N(e.getX(D+0)),N(e.getX(D+1)),N(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new W,s=new W,o=new W,a=new W,c=new W,l=new W,h=new W,f=new W;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,m=0;for(let v=0,_=c.length;v<_;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let x=0;x<h;x++)u[m++]=l[p++]}return new Ri(u,h,f)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class X0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pu,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new W;class Vi{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Rl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ri(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Rl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Mv=0;class Nr extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Ls,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Gf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Gf&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dh extends Nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const po=new W,vs=new W,ys=new W,Ss=new ht,mo=new ht,q0=new Yt,ma=new W,go=new W,ga=new W,Cd=new ht,Qc=new ht,Pd=new ht;class Y0 extends ln{constructor(e=new Dh){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new un;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new X0(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Vi(i,3,0,!1)),xs.setAttribute("uv",new Vi(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new ht(.5,.5),this.count=1}raycast(e,t){e.camera===null&&St('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),q0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-ys.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;_a(ma.set(-.5,-.5,0),ys,o,vs,r,s),_a(go.set(.5,-.5,0),ys,o,vs,r,s),_a(ga.set(.5,.5,0),ys,o,vs,r,s),Cd.set(0,0),Qc.set(1,0),Pd.set(1,1);let a=e.ray.intersectTriangle(ma,go,ga,!1,po);if(a===null&&(_a(go.set(-.5,.5,0),ys,o,vs,r,s),Qc.set(0,1),a=e.ray.intersectTriangle(ma,ga,go,!1,po),a===null))return;const c=e.ray.origin.distanceTo(po);c<e.near||c>e.far||t.push({distance:c,point:po.clone(),uv:ni.getInterpolation(po,ma,go,ga,Cd,Qc,Pd,new ht),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _a(n,e,t,i,r,s){Ss.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(mo.x=s*Ss.x-r*Ss.y,mo.y=r*Ss.x+s*Ss.y):mo.copy(Ss),n.copy(e),n.x+=mo.x,n.y+=mo.y,n.applyMatrix4(q0)}const nr=new W,ef=new W,xa=new W,Er=new W,tf=new W,va=new W,nf=new W;class K0{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ef.copy(e).add(t).multiplyScalar(.5),xa.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(ef);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xa),a=Er.dot(this.direction),c=-Er.dot(xa),l=Er.lengthSq(),h=Math.abs(1-o*o);let f,u,p,m;if(h>0)if(f=o*c-a,u=o*a-c,m=s*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ef).addScaledVector(xa,u),p}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const i=nr.dot(this.direction),r=nr.dot(nr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,i,r,s){tf.subVectors(t,e),va.subVectors(i,e),nf.crossVectors(tf,va);let o=this.direction.dot(nf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,e);const c=a*this.direction.dot(va.crossVectors(Er,va));if(c<0)return null;const l=a*this.direction.dot(tf.cross(Er));if(l<0||c+l>o)return null;const h=-a*Er.dot(nf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sr extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Id=new Yt,Br=new K0,ya=new js,Dd=new W,Sa=new W,Ma=new W,Ea=new W,rf=new W,ba=new W,Ld=new W,wa=new W;class Tt extends ln{constructor(e=new un,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ba.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(rf.fromBufferAttribute(f,e),o?ba.addScaledVector(rf,h):ba.addScaledVector(rf.sub(t),h))}t.add(ba)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Br.copy(e.ray).recast(e.near),!(ya.containsPoint(Br.origin)===!1&&(Br.intersectSphere(ya,Dd)===null||Br.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Id.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Id),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const _=u[m],x=o[_.materialIndex],w=Math.max(_.start,p.start),A=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=w,R=A;S<R;S+=3){const C=a.getX(S),N=a.getX(S+1),M=a.getX(S+2);r=Ta(this,x,e,i,l,h,f,C,N,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=m,x=v;_<x;_+=3){const w=a.getX(_),A=a.getX(_+1),S=a.getX(_+2);r=Ta(this,o,e,i,l,h,f,w,A,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const _=u[m],x=o[_.materialIndex],w=Math.max(_.start,p.start),A=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let S=w,R=A;S<R;S+=3){const C=S,N=S+1,M=S+2;r=Ta(this,x,e,i,l,h,f,C,N,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let _=m,x=v;_<x;_+=3){const w=_,A=_+1,S=_+2;r=Ta(this,o,e,i,l,h,f,w,A,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Ev(n,e,t,i,r,s,o,a){let c;if(e.side===Vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ir,a),c===null)return null;wa.copy(a),wa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(wa);return l<t.near||l>t.far?null:{distance:l,point:wa.clone(),object:n}}function Ta(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Sa),n.getVertexPosition(c,Ma),n.getVertexPosition(l,Ea);const h=Ev(n,e,t,i,Sa,Ma,Ea,Ld);if(h){const f=new W;ni.getBarycoord(Ld,Sa,Ma,Ea,f),r&&(h.uv=ni.getInterpolatedAttribute(r,a,c,l,f,new ht)),s&&(h.uv1=ni.getInterpolatedAttribute(s,a,c,l,f,new ht)),o&&(h.normal=ni.getInterpolatedAttribute(o,a,c,l,f,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new W,materialIndex:0};ni.getNormal(Sa,Ma,Ea,u.normal),h.face=u,h.barycoord=f}return h}class Z0 extends Rn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=yn,h=yn,f,u){super(null,o,a,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sf=new W,bv=new W,wv=new ft;class Hr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sf.subVectors(i,t).cross(bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(sf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wv.getNormalMatrix(e),r=this.coplanarPoint(sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new js,Tv=new ht(.5,.5),Aa=new W;class Lh{constructor(e=new Hr,t=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ki,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],m=s[8],v=s[9],_=s[10],x=s[11],w=s[12],A=s[13],S=s[14],R=s[15];if(r[0].setComponents(l-o,p-h,x-m,R-w).normalize(),r[1].setComponents(l+o,p+h,x+m,R+w).normalize(),r[2].setComponents(l+a,p+f,x+v,R+A).normalize(),r[3].setComponents(l-a,p-f,x-v,R-A).normalize(),i)r[4].setComponents(c,u,_,S).normalize(),r[5].setComponents(l-c,p-u,x-_,R-S).normalize();else if(r[4].setComponents(l-c,p-u,x-_,R-S).normalize(),t===ki)r[5].setComponents(l+c,p+u,x+_,R+S).normalize();else if(t===Vo)r[5].setComponents(c,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const t=Tv.distanceTo(e.center);return zr.radius=.7071067811865476+t,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Aa.x=r.normal.x>0?e.max.x:e.min.x,Aa.y=r.normal.y>0?e.max.y:e.min.y,Aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class J0 extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cl=new W,Pl=new W,Nd=new Yt,_o=new K0,Ra=new js,of=new W,Od=new W;class Av extends ln{constructor(e=new un,t=new J0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Cl.fromBufferAttribute(t,r-1),Pl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Cl.distanceTo(Pl);e.setAttribute("lineDistance",new kt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,e.ray.intersectsSphere(Ra)===!1)return;Nd.copy(r).invert(),_o.copy(e.ray).applyMatrix4(Nd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=l){const x=h.getX(v),w=h.getX(v+1),A=Ca(this,e,_o,c,x,w,v);A&&t.push(A)}if(this.isLineLoop){const v=h.getX(m-1),_=h.getX(p),x=Ca(this,e,_o,c,v,_,m-1);x&&t.push(x)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=l){const x=Ca(this,e,_o,c,v,v+1,v);x&&t.push(x)}if(this.isLineLoop){const v=Ca(this,e,_o,c,m-1,p,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ca(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Cl.fromBufferAttribute(a,r),Pl.fromBufferAttribute(a,s),t.distanceSqToSegment(Cl,Pl,of,Od)>i)return;of.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(of);if(!(l<e.near||l>e.far))return{distance:l,point:Od.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ud=new W,Fd=new W;class Rv extends Av{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ud.fromBufferAttribute(t,r),Fd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ud.distanceTo(Fd);e.setAttribute("lineDistance",new kt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends Rn{constructor(e=[],t=Qr,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Il extends Rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends Rn{constructor(e,t,i=Ki,r,s,o,a=yn,c=yn,l,h=dr,f=1){if(h!==dr&&h!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cv extends Vs{constructor(e,t=Ki,i=Qr,r,s,o=yn,a=yn,c,l=dr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Q0 extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hi extends un{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(f,2));function m(v,_,x,w,A,S,R,C,N,M,T){const B=S/N,U=R/M,z=S/2,D=R/2,H=C/2,P=N+1,O=M+1;let F=0,G=0;const Z=new W;for(let te=0;te<O;te++){const ue=te*U-D;for(let _e=0;_e<P;_e++){const Ue=_e*B-z;Z[v]=Ue*w,Z[_]=ue*A,Z[x]=H,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[_]=0,Z[x]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(_e/N),f.push(1-te/M),F+=1}}for(let te=0;te<M;te++)for(let ue=0;ue<N;ue++){const _e=u+ue+P*te,Ue=u+ue+P*(te+1),ke=u+(ue+1)+P*(te+1),it=u+(ue+1)+P*te;c.push(_e,Ue,it),c.push(Ue,ke,it),G+=6}a.addGroup(p,G,T),p+=G,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dl extends un{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,m=i*2+s,v=r+1,_=new W,x=new W;for(let w=0;w<=m;w++){let A=0,S=0,R=0,C=0;if(w<=i){const T=w/i,B=T*Math.PI/2;S=-h-e*Math.cos(B),R=e*Math.sin(B),C=-e*Math.cos(B),A=T*f}else if(w<=i+s){const T=(w-i)/s;S=-h+T*t,R=e,C=0,A=f+T*u}else{const T=(w-i-s)/i,B=T*Math.PI/2;S=h+e*Math.sin(B),R=e*Math.cos(B),C=e*Math.sin(B),A=f+u+T*f}const N=Math.max(0,Math.min(1,A/p));let M=0;w===0?M=.5/r:w===m&&(M=-.5/r);for(let T=0;T<=r;T++){const B=T/r,U=B*Math.PI*2,z=Math.sin(U),D=Math.cos(U);x.x=-R*D,x.y=S,x.z=R*z,a.push(x.x,x.y,x.z),_.set(-R*D,C,R*z),_.normalize(),c.push(_.x,_.y,_.z),l.push(B+M,N)}if(w>0){const T=(w-1)*v;for(let B=0;B<r;B++){const U=T+B,z=T+B+1,D=w*v+B,H=w*v+B+1;o.push(U,z,D),o.push(z,H,D)}}}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Nh extends un{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new W,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _c extends un{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let m=0;const v=[],_=i/2;let x=0;w(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new kt(f,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(p,2));function w(){const S=new W,R=new W;let C=0;const N=(t-e)/i;for(let M=0;M<=s;M++){const T=[],B=M/s,U=B*(t-e)+e;for(let z=0;z<=r;z++){const D=z/r,H=D*c+a,P=Math.sin(H),O=Math.cos(H);R.x=U*P,R.y=-B*i+_,R.z=U*O,f.push(R.x,R.y,R.z),S.set(P,N,O).normalize(),u.push(S.x,S.y,S.z),p.push(D,1-B),T.push(m++)}v.push(T)}for(let M=0;M<r;M++)for(let T=0;T<s;T++){const B=v[T][M],U=v[T+1][M],z=v[T+1][M+1],D=v[T][M+1];(e>0||T!==0)&&(h.push(B,U,D),C+=3),(t>0||T!==s-1)&&(h.push(U,z,D),C+=3)}l.addGroup(x,C,0),x+=C}function A(S){const R=m,C=new ht,N=new W;let M=0;const T=S===!0?e:t,B=S===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,_*B,0),u.push(0,B,0),p.push(.5,.5),m++;const U=m;for(let z=0;z<=r;z++){const H=z/r*c+a,P=Math.cos(H),O=Math.sin(H);N.x=T*O,N.y=_*B,N.z=T*P,f.push(N.x,N.y,N.z),u.push(0,B,0),C.x=P*.5+.5,C.y=O*.5*B+.5,p.push(C.x,C.y),m++}for(let z=0;z<r;z++){const D=R+z,H=U+z;S===!0?h.push(H,H+1,D):h.push(H+1,H,D),M+=3}l.addGroup(x,M,S===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends _c{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Pa=new W,Ia=new W,af=new W,Da=new ni;class Pv extends un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Os*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),u={},p=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:v,b:_,c:x}=Da;if(v.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),Da.getNormal(af),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){const A=(w+1)%3,S=f[w],R=f[A],C=Da[h[w]],N=Da[h[A]],M=`${S}_${R}`,T=`${R}_${S}`;T in u&&u[T]?(af.dot(u[T].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(N.x,N.y,N.z)),u[T]=null):M in u||(u[M]={index0:l[w],index1:l[A],normal:af.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:_}=u[m];Pa.fromBufferAttribute(a,v),Ia.fromBufferAttribute(a,_),p.push(Pa.x,Pa.y,Pa.z),p.push(Ia.x,Ia.y,Ia.z)}this.setAttribute("position",new kt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vc extends un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=e/a,u=t/c,p=[],m=[],v=[],_=[];for(let x=0;x<h;x++){const w=x*u-o;for(let A=0;A<l;A++){const S=A*f-s;m.push(S,-w,0),v.push(0,0,1),_.push(A/a),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<a;w++){const A=w+l*x,S=w+l*(x+1),R=w+1+l*(x+1),C=w+1+l*x;p.push(A,S,C),p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $i extends un{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new W,u=new W,p=[],m=[],v=[],_=[];for(let x=0;x<=i;x++){const w=[],A=x/i,S=o+A*a,R=e*Math.cos(S),C=Math.sqrt(e*e-R*R);let N=0;x===0&&o===0?N=.5/t:x===i&&c===Math.PI&&(N=-.5/t);for(let M=0;M<=t;M++){const T=M/t,B=r+T*s;f.x=-C*Math.cos(B),f.y=R,f.z=C*Math.sin(B),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),_.push(T+N,1-A),w.push(l++)}h.push(w)}for(let x=0;x<i;x++)for(let w=0;w<t;w++){const A=h[x][w+1],S=h[x][w],R=h[x+1][w],C=h[x+1][w+1];(x!==0||o>0)&&p.push(A,S,C),(x!==i-1||c<Math.PI)&&p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Iv extends un{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new W,s=new W;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,p=f.count;for(let m=u,v=u+p;m<v;m+=3)for(let _=0;_<3;_++){const x=a.getX(m+_),w=a.getX(m+(_+1)%3);r.fromBufferAttribute(o,x),s.fromBufferAttribute(o,w),Bd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),Bd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bd(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(zd(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(zd(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const r in i)e[r]=i[r]}return e}function zd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Dv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Oh={clone:Hs,merge:Fn};var Lv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lv,this.fragmentShader=Nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new _t().setHex(r.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ov extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gs extends Nr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Uv extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fv extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uh extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Bv extends Uh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const lf=new Yt,kd=new W,Vd=new W;class zv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Vo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const La=new W,Na=new Js,Di=new W;class tg extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(La,Na,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(La,Na,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new W,Hd=new ht,Gd=new ht;class fi extends tg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Hd,Gd),t.subVectors(Gd,Hd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fh extends tg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kv extends zv{constructor(){super(new Fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vv extends Uh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new kv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hv extends Uh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gv extends un{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ms=-90,Es=1;class Wv extends ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(Ms,Es,e,t);r.layers=this.layers,this.add(r);const s=new fi(Ms,Es,e,t);s.layers=this.layers,this.add(s);const o=new fi(Ms,Es,e,t);o.layers=this.layers,this.add(o);const a=new fi(Ms,Es,e,t);a.layers=this.layers,this.add(a);const c=new fi(Ms,Es,e,t);c.layers=this.layers,this.add(c);const l=new fi(Ms,Es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class $v extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function qv(){this._document.hidden===!1&&this.reset()}class Iu extends X0{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const cd=class cd{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};cd.prototype.isMatrix2=!0;let Wd=cd;const $d=new W,Oa=new W,bs=new W,ws=new W,cf=new W,Yv=new W,Kv=new W;class Zv{constructor(e=new W,t=new W){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){$d.subVectors(e,this.start),Oa.subVectors(this.end,this.start);const i=Oa.dot(Oa);if(i===0)return 0;let s=Oa.dot($d)/i;return t&&(s=dt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Yv,i=Kv){const r=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;bs.subVectors(l,a),ws.subVectors(h,c),cf.subVectors(a,c);const f=bs.dot(bs),u=ws.dot(ws),p=ws.dot(cf);if(f<=r&&u<=r)return t.copy(a),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,o=p/u,o=dt(o,0,1);else{const m=bs.dot(cf);if(u<=r)o=0,s=dt(-m/f,0,1);else{const v=bs.dot(ws),_=f*u-v*v;_!==0?s=dt((v*p-m*u)/_,0,1):s=0,o=(v*s+p)/u,o<0?(o=0,s=dt(-m/f,0,1)):o>1&&(o=1,s=dt((v-m)/f,0,1))}}return t.copy(a).addScaledVector(bs,s),i.copy(c).addScaledVector(ws,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Xd(n,e,t,i){const r=Jv(i);switch(t){case F0:return n*e;case bh:return n*e/r.components*r.byteLength;case wh:return n*e/r.components*r.byteLength;case es:return n*e*2/r.components*r.byteLength;case Th:return n*e*2/r.components*r.byteLength;case B0:return n*e*3/r.components*r.byteLength;case Ti:return n*e*4/r.components*r.byteLength;case Ah:return n*e*4/r.components*r.byteLength;case cl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ul:case hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(n,16)*Math.max(e,8)/4;case Qf:case tu:return Math.max(n,8)*Math.max(e,8)/2;case iu:case ru:case ou:case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case su:case El:case lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Eu:case bu:case wu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tu:case Au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bl:case Ru:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(n){switch(n){case ti:case L0:return{byteLength:1,components:1};case zo:case N0:case hr:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Ki:case Sh:case zi:return{byteLength:4,components:1};case O0:case U0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ng(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jv(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
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
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sy=`#ifdef USE_AOMAP
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
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ay=`#ifdef USE_BATCHING
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
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hy=`#ifdef USE_IRIDESCENCE
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
#endif`,dy=`#ifdef USE_BUMPMAP
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,My=`#define PI 3.141592653589793
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
} // validated`,Ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,Vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$y=`#ifdef USE_ENVMAP
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
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
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
#endif`,Jy=`uniform sampler2D dfgLUT;
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
}`,jy=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cS=`#if defined( USE_POINTS_UV )
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
#endif`,fS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
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
#endif`,ES=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BS=`float getShadowMask() {
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
}`,zS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kS=`#ifdef USE_SKINNING
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
#endif`,VS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,GS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
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
}`,oM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,lM=`#define DISTANCE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,vM=`#define NORMAL
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
}`,yM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,MM=`#define PHONG
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
}`,EM=`#define STANDARD
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
}`,bM=`#define STANDARD
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
}`,wM=`#define TOON
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
}`,TM=`#define TOON
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
}`,AM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,PM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Qv,alphahash_pars_fragment:ey,alphamap_fragment:ty,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:ry,aomap_fragment:sy,aomap_pars_fragment:oy,batching_pars_vertex:ay,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:fy,bsdfs:uy,iridescence_fragment:hy,bumpmap_pars_fragment:dy,clipping_planes_fragment:py,clipping_planes_pars_fragment:my,clipping_planes_pars_vertex:gy,clipping_planes_vertex:_y,color_fragment:xy,color_pars_fragment:vy,color_pars_vertex:yy,color_vertex:Sy,common:My,cube_uv_reflection_fragment:Ey,defaultnormal_vertex:by,displacementmap_pars_vertex:wy,displacementmap_vertex:Ty,emissivemap_fragment:Ay,emissivemap_pars_fragment:Ry,colorspace_fragment:Cy,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ly,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:$y,envmap_vertex:Oy,fog_vertex:Uy,fog_pars_vertex:Fy,fog_fragment:By,fog_pars_fragment:zy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Vy,lights_lambert_fragment:Hy,lights_lambert_pars_fragment:Gy,lights_pars_begin:Wy,lights_toon_fragment:Xy,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:Ky,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:jy,lights_fragment_maps:Qy,lights_fragment_end:eS,lightprobes_pars_fragment:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:sS,map_fragment:oS,map_pars_fragment:aS,map_particle_fragment:lS,map_particle_pars_fragment:cS,metalnessmap_fragment:fS,metalnessmap_pars_fragment:uS,morphinstance_vertex:hS,morphcolor_vertex:dS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:_S,normal_fragment_maps:xS,normal_pars_fragment:vS,normal_pars_vertex:yS,normal_vertex:SS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:ES,clearcoat_normal_fragment_maps:bS,clearcoat_pars_fragment:wS,iridescence_pars_fragment:TS,opaque_fragment:AS,packing:RS,premultiplied_alpha_fragment:CS,project_vertex:PS,dithering_fragment:IS,dithering_pars_fragment:DS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:NS,shadowmap_pars_fragment:OS,shadowmap_pars_vertex:US,shadowmap_vertex:FS,shadowmask_pars_fragment:BS,skinbase_vertex:zS,skinning_pars_vertex:kS,skinning_vertex:VS,skinnormal_vertex:HS,specularmap_fragment:GS,specularmap_pars_fragment:WS,tonemapping_fragment:$S,tonemapping_pars_fragment:XS,transmission_fragment:qS,transmission_pars_fragment:YS,uv_pars_fragment:KS,uv_pars_vertex:ZS,uv_vertex:JS,worldpos_vertex:jS,background_vert:QS,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:rM,depth_vert:sM,depth_frag:oM,distance_vert:aM,distance_frag:lM,equirect_vert:cM,equirect_frag:fM,linedashed_vert:uM,linedashed_frag:hM,meshbasic_vert:dM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:_M,meshmatcap_frag:xM,meshnormal_vert:vM,meshnormal_frag:yM,meshphong_vert:SM,meshphong_frag:MM,meshphysical_vert:EM,meshphysical_frag:bM,meshtoon_vert:wM,meshtoon_frag:TM,points_vert:AM,points_frag:RM,shadow_vert:CM,shadow_frag:PM,sprite_vert:IM,sprite_frag:DM},Pe={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},$n={basic:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Pe.points,Pe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Pe.common,Pe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Pe.sprite,Pe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Fn([Pe.lights,Pe.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};$n.physical={uniforms:Fn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ua={r:0,b:0,g:0},LM=new Yt,ig=new ft;ig.set(-1,0,0,0,1,0,0,0,1);function NM(n,e,t,i,r,s){const o=new _t(0);let a=r===!0?0:1,c,l,h=null,f=0,u=null;function p(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){const S=w.backgroundBlurriness>0;A=e.get(A,S)}return A}function m(w){let A=!1;const S=p(w);S===null?_(o,a):S&&S.isColor&&(_(S,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(w,A){const S=p(A);S&&(S.isCubeTexture||S.mapping===gc)?(l===void 0&&(l=new Tt(new Hi(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Hs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ig),l.material.toneMapped=vt.getTransfer(S.colorSpace)!==Ot,(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Tt(new vc(2,2),new di({name:"BackgroundMaterial",uniforms:Hs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=vt.getTransfer(S.colorSpace)!==Ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function _(w,A){w.getRGB(Ua,eg(n)),t.buffers.color.setClear(Ua.r,Ua.g,Ua.b,A,s)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,A=1){o.set(w),a=A,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,_(o,a)},render:m,addToRenderList:v,dispose:x}}function OM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(U,z,D,H,P){let O=!1;const F=f(U,H,D,z);s!==F&&(s=F,l(s.object)),O=p(U,H,D,P),O&&m(U,H,D,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,S(U,z,D,H),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function f(U,z,D,H){const P=H.wireframe===!0;let O=i[z.id];O===void 0&&(O={},i[z.id]=O);const F=U.isInstancedMesh===!0?U.id:0;let G=O[F];G===void 0&&(G={},O[F]=G);let Z=G[D.id];Z===void 0&&(Z={},G[D.id]=Z);let te=Z[P];return te===void 0&&(te=u(c()),Z[P]=te),te}function u(U){const z=[],D=[],H=[];for(let P=0;P<t;P++)z[P]=0,D[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:D,attributeDivisors:H,object:U,attributes:{},index:null}}function p(U,z,D,H){const P=s.attributes,O=z.attributes;let F=0;const G=D.getAttributes();for(const Z in G)if(G[Z].location>=0){const ue=P[Z];let _e=O[Z];if(_e===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(_e=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(_e=U.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;F++}return s.attributesNum!==F||s.index!==H}function m(U,z,D,H){const P={},O=z.attributes;let F=0;const G=D.getAttributes();for(const Z in G)if(G[Z].location>=0){let ue=O[Z];ue===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),P[Z]=_e,F++}s.attributes=P,s.attributesNum=F,s.index=H}function v(){const U=s.newAttributes;for(let z=0,D=U.length;z<D;z++)U[z]=0}function _(U){x(U,0)}function x(U,z){const D=s.newAttributes,H=s.enabledAttributes,P=s.attributeDivisors;D[U]=1,H[U]===0&&(n.enableVertexAttribArray(U),H[U]=1),P[U]!==z&&(n.vertexAttribDivisor(U,z),P[U]=z)}function w(){const U=s.newAttributes,z=s.enabledAttributes;for(let D=0,H=z.length;D<H;D++)z[D]!==U[D]&&(n.disableVertexAttribArray(D),z[D]=0)}function A(U,z,D,H,P,O,F){F===!0?n.vertexAttribIPointer(U,z,D,P,O):n.vertexAttribPointer(U,z,D,H,P,O)}function S(U,z,D,H){v();const P=H.attributes,O=D.getAttributes(),F=z.defaultAttributeValues;for(const G in O){const Z=O[G];if(Z.location>=0){let te=P[G];if(te===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){const ue=te.normalized,_e=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const ke=Ue.buffer,it=Ue.type,he=Ue.bytesPerElement,we=it===n.INT||it===n.UNSIGNED_INT||te.gpuType===Sh;if(te.isInterleavedBufferAttribute){const ve=te.data,je=ve.stride,et=te.offset;if(ve.isInstancedInterleavedBuffer){for(let tt=0;tt<Z.locationSize;tt++)x(Z.location+tt,ve.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let tt=0;tt<Z.locationSize;tt++)_(Z.location+tt);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let tt=0;tt<Z.locationSize;tt++)A(Z.location+tt,_e/Z.locationSize,it,ue,je*he,(et+_e/Z.locationSize*tt)*he,we)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<Z.locationSize;ve++)x(Z.location+ve,te.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<Z.locationSize;ve++)_(Z.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let ve=0;ve<Z.locationSize;ve++)A(Z.location+ve,_e/Z.locationSize,it,ue,_e*he,_e/Z.locationSize*ve*he,we)}}else if(F!==void 0){const ue=F[G];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(Z.location,ue);break;case 3:n.vertexAttrib3fv(Z.location,ue);break;case 4:n.vertexAttrib4fv(Z.location,ue);break;default:n.vertexAttrib1fv(Z.location,ue)}}}}w()}function R(){T();for(const U in i){const z=i[U];for(const D in z){const H=z[D];for(const P in H){const O=H[P];for(const F in O)h(O[F].object),delete O[F];delete H[P]}}delete i[U]}}function C(U){if(i[U.id]===void 0)return;const z=i[U.id];for(const D in z){const H=z[D];for(const P in H){const O=H[P];for(const F in O)h(O[F].object),delete O[F];delete H[P]}}delete i[U.id]}function N(U){for(const z in i){const D=i[z];for(const H in D){const P=D[H];if(P[U.id]===void 0)continue;const O=P[U.id];for(const F in O)h(O[F].object),delete O[F];delete P[U.id]}}}function M(U){for(const z in i){const D=i[z],H=U.isInstancedMesh===!0?U.id:0,P=D[H];if(P!==void 0){for(const O in P){const F=P[O];for(const G in F)h(F[G].object),delete F[G];delete P[O]}delete D[H],Object.keys(D).length===0&&delete i[z]}}}function T(){B(),o=!0,s!==r&&(s=r,l(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:_,disableUnusedAttributes:w}}function UM(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function FM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Ti&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const M=N===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ti&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==zi&&!M)}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(st("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:S,maxSamples:R,samples:C}}function BM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Hr,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,x=n.get(f);if(!r||m===null||m.length===0||s&&!_)s?h(null):l();else{const w=s?0:i,A=w*4;let S=x.clippingState||null;c.value=S,S=h(m,u,A,p);for(let R=0;R!==A;++R)S[R]=t[R];x.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,m){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=c.value,m!==!0||_===null){const x=p+v*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<x)&&(_=new Float32Array(x));for(let A=0,S=p;A!==v;++A,S+=4)o.copy(f[A]).applyMatrix4(w,a),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Ar=4,qd=[.125,.215,.35,.446,.526,.582],$r=20,zM=256,xo=new Fh,Yd=new _t;let ff=null,uf=0,hf=0,df=!1;const kM=new W;class Kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=kM}=s;ff=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,uf,hf),this._renderer.xr.enabled=df,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:hr,format:Ti,colorSpace:wl,depthBuffer:!1},r=Zd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=VM(s)),this._blurMaterial=GM(s,e,t),this._ggxMaterial=HM(s,e,t)}return r}_compileMaterial(e){const t=new Tt(new un,e);this._renderer.compile(t,xo)}_sceneToCubeUV(e,t,i,r,s){const c=new fi(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Yd),f.toneMapping=Gi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Hi,new sr({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let x=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,x=!0):(_.color.copy(Yd),x=!0);for(let A=0;A<6;A++){const S=A%3;S===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[A],s.y,s.z)):S===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[A]));const R=this._cubeSize;Ts(r,S*R,A>2?R:0,R,R),f.setRenderTarget(r),x&&f.render(v,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qr||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,p=f*u,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-Ar?i-m+Ar:0),x=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,Ts(s,_,x,3*v,2*v),r.setRenderTarget(s),r.render(a,xo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,Ts(e,_,x,3*v,2*v),r.setRenderTarget(e),r.render(a,xo)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$r-1),v=s/m,_=isFinite(s)?1+Math.floor(h*v):$r;_>$r&&st(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${$r}`);const x=[];let w=0;for(let N=0;N<$r;++N){const M=N/v,T=Math.exp(-M*M/2);x.push(T),N===0?w+=T:N<_&&(w+=2*T)}for(let N=0;N<x.length;N++)x[N]=x[N]/w;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=x,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:A}=this;u.dTheta.value=m,u.mipInt.value=A-i;const S=this._sizeLods[r],R=3*S*(r>A-Ar?r-A+Ar:0),C=4*(this._cubeSize-S);Ts(t,R,C,3*S,2*S),c.setRenderTarget(t),c.render(f,xo)}}function VM(n){const e=[],t=[],i=[];let r=n;const s=n-Ar+1+qd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Ar?c=qd[o-n+Ar-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,m=6,v=3,_=2,x=1,w=new Float32Array(v*m*p),A=new Float32Array(_*m*p),S=new Float32Array(x*m*p);for(let C=0;C<p;C++){const N=C%3*2/3-1,M=C>2?0:-1,T=[N,M,0,N+2/3,M,0,N+2/3,M+1,0,N,M,0,N+2/3,M+1,0,N,M+1,0];w.set(T,v*m*C),A.set(u,_*m*C);const B=[C,C,C,C,C,C];S.set(B,x*m*C)}const R=new un;R.setAttribute("position",new Ri(w,v)),R.setAttribute("uv",new Ri(A,_)),R.setAttribute("faceIndex",new Ri(S,x)),i.push(new Tt(R,null)),r>Ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zd(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function HM(n,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function GM(n,e,t){const i=new Float32Array($r),r=new W(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Jd(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function jd(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}class rg extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new j0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:or});s.uniforms.tEquirect.value=t;const o=new Tt(r,s),a=t.minFilter;return t.minFilter===qr&&(t.minFilter=Tn),new Wv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function WM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Lc||p===Nc)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new rg(m.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===Lc||p===Nc,v=p===Qr||p===ks;if(m||v){let _=t.get(u);const x=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new Kd(n)),_=m?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const w=u.image;return m&&w&&w.height>0||v&&w&&c(w)?(i===null&&(i=new Kd(n)),_=m?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function a(u,p){return p===Lc?u.mapping=Qr:p===Nc&&(u.mapping=ks),u}function c(u){let p=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&p++;return p===m}function l(u){const p=u.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function $M(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ns("WebGLRenderer: "+i+" extension not supported."),r}}}function XM(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(p!==null){const w=p.array;v=p.version;for(let A=0,S=w.length;A<S;A+=3){const R=w[A+0],C=w[A+1],N=w[A+2];u.push(R,C,C,N,N,R)}}else{const w=m.array;v=m.version;for(let A=0,S=w.length/3-1;A<S;A+=3){const R=A+0,C=A+1,N=A+2;u.push(R,C,C,N,N,R)}}const _=new(m.count>=65535?$0:W0)(u,1);_.version=v;const x=s.get(f);x&&e.remove(x),s.set(f,_)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function qM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*o,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let v=0;for(let _=0;_<p;_++)v+=u[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function YM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:St("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function KM(n,e,t){const i=new WeakMap,r=new zt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let B=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var p=B;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let R=a.attributes.position.count*S,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const N=new Float32Array(R*C*4*f),M=new V0(N,R,C,f);M.type=zi,M.needsUpdate=!0;const T=S*4;for(let U=0;U<f;U++){const z=x[U],D=w[U],H=A[U],P=R*C*4*U;for(let O=0;O<z.count;O++){const F=O*T;m===!0&&(r.fromBufferAttribute(z,O),N[P+F+0]=r.x,N[P+F+1]=r.y,N[P+F+2]=r.z,N[P+F+3]=0),v===!0&&(r.fromBufferAttribute(D,O),N[P+F+4]=r.x,N[P+F+5]=r.y,N[P+F+6]=r.z,N[P+F+7]=0),_===!0&&(r.fromBufferAttribute(H,O),N[P+F+8]=r.x,N[P+F+9]=r.y,N[P+F+10]=r.z,N[P+F+11]=H.itemSize===4?r.w:1)}}u={count:f,texture:M,size:new ht(R,C)},i.set(a,u),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function ZM(n,e,t,i,r){let s=new WeakMap;function o(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const JM={[w0]:"LINEAR_TONE_MAPPING",[T0]:"REINHARD_TONE_MAPPING",[A0]:"CINEON_TONE_MAPPING",[R0]:"ACES_FILMIC_TONE_MAPPING",[P0]:"AGX_TONE_MAPPING",[I0]:"NEUTRAL_TONE_MAPPING",[C0]:"CUSTOM_TONE_MAPPING"};function jM(n,e,t,i,r,s){const o=new Wi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Vs(e,t):void 0}),a=new Wi(e,t,{type:hr,depthBuffer:!1,stencilBuffer:!1}),c=new un;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new Ov({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Tt(c,l),f=new Fh(-1,1,1,-1,0,1);let u=null,p=null,m=!1,v,_=null,x=[],w=!1;this.setSize=function(A,S){o.setSize(A,S),a.setSize(A,S);for(let R=0;R<x.length;R++){const C=x[R];C.setSize&&C.setSize(A,S)}},this.setEffects=function(A){x=A,w=x.length>0&&x[0].isRenderPass===!0;const S=o.width,R=o.height;for(let C=0;C<x.length;C++){const N=x[C];N.setSize&&N.setSize(S,R)}},this.begin=function(A,S){if(m||A.toneMapping===Gi&&x.length===0)return!1;if(_=S,S!==null){const R=S.width,C=S.height;(o.width!==R||o.height!==C)&&this.setSize(R,C)}return w===!1&&A.setRenderTarget(o),v=A.toneMapping,A.toneMapping=Gi,!0},this.hasRenderPass=function(){return w},this.end=function(A,S){A.toneMapping=v,m=!0;let R=o,C=a;for(let N=0;N<x.length;N++){const M=x[N];if(M.enabled!==!1&&(M.render(A,C,R,S),M.needsSwap!==!1)){const T=R;R=C,C=T}}if(u!==A.outputColorSpace||p!==A.toneMapping){u=A.outputColorSpace,p=A.toneMapping,l.defines={},vt.getTransfer(u)===Ot&&(l.defines.SRGB_TRANSFER="");const N=JM[p];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=R.texture,A.setRenderTarget(_),A.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const sg=new Rn,Du=new Vs(1,1),og=new V0,ag=new fv,lg=new j0,Qd=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function Qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qd[r];if(s===void 0&&(s=new Float32Array(r),Qd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sc(n,e){let t=ep[e];t===void 0&&(t=new Int32Array(e),ep[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function tE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function nE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function iE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;ip.set(i),n.uniformMatrix2fv(this.addr,!1,ip),fn(t,i)}}function rE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;np.set(i),n.uniformMatrix3fv(this.addr,!1,np),fn(t,i)}}function sE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(cn(t,i))return;tp.set(i),n.uniformMatrix4fv(this.addr,!1,tp),fn(t,i)}}function oE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function lE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function cE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function fE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function hE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function dE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function pE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Du.compareFunction=t.isReversedDepthBuffer()?Ch:Rh,s=Du):s=sg,t.setTexture2D(e||s,r)}function mE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ag,r)}function gE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lg,r)}function _E(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||og,r)}function xE(n){switch(n){case 5126:return QM;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return fE;case 36294:return uE;case 36295:return hE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return _E}}function vE(n,e){n.uniform1fv(this.addr,e)}function yE(n,e){const t=Qs(e,this.size,2);n.uniform2fv(this.addr,t)}function SE(n,e){const t=Qs(e,this.size,3);n.uniform3fv(this.addr,t)}function ME(n,e){const t=Qs(e,this.size,4);n.uniform4fv(this.addr,t)}function EE(n,e){const t=Qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bE(n,e){const t=Qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wE(n,e){const t=Qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TE(n,e){n.uniform1iv(this.addr,e)}function AE(n,e){n.uniform2iv(this.addr,e)}function RE(n,e){n.uniform3iv(this.addr,e)}function CE(n,e){n.uniform4iv(this.addr,e)}function PE(n,e){n.uniform1uiv(this.addr,e)}function IE(n,e){n.uniform2uiv(this.addr,e)}function DE(n,e){n.uniform3uiv(this.addr,e)}function LE(n,e){n.uniform4uiv(this.addr,e)}function NE(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Du:o=sg;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function OE(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ag,s[o])}function UE(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lg,s[o])}function FE(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),fn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||og,s[o])}function BE(n){switch(n){case 5126:return vE;case 35664:return yE;case 35665:return SE;case 35666:return ME;case 35674:return EE;case 35675:return bE;case 35676:return wE;case 5124:case 35670:return TE;case 35667:case 35671:return AE;case 35668:case 35672:return RE;case 35669:case 35673:return CE;case 5125:return PE;case 36294:return IE;case 36295:return DE;case 36296:return LE;case 35678:case 36198:case 36298:case 36306:case 35682:return NE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return FE}}class zE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xE(t.type)}}class kE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BE(t.type)}}class VE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function rp(n,e){n.seq.push(e),n.map[e.id]=e}function HE(n,e,t){const i=n.name,r=i.length;for(pf.lastIndex=0;;){const s=pf.exec(i),o=pf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){rp(t,l===void 0?new zE(a,n,e):new kE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new VE(a),rp(t,f)),t=f}}}class dl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);HE(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function sp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const GE=37297;let WE=0;function $E(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const op=new ft;function XE(n){vt._getMatrix(op,vt.workingColorSpace,n);const e=`mat3( ${op.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Tl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ap(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$E(n.getShaderSource(e),a)}else return s}function qE(n,e){const t=XE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YE={[w0]:"Linear",[T0]:"Reinhard",[A0]:"Cineon",[R0]:"ACESFilmic",[P0]:"AgX",[I0]:"Neutral",[C0]:"Custom"};function KE(n,e){const t=YE[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new W;function ZE(){vt.getLuminanceCoefficients(Fa);const n=Fa.x.toFixed(4),e=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function jE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Po(n){return n!==""}function lp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(n){return n.replace(eb,nb)}const tb=new Map;function nb(n,e){let t=mt[e];if(t===void 0){const i=tb.get(e);if(i!==void 0)t=mt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lu(t)}const ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fp(n){return n.replace(ib,rb)}function rb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function up(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const sb={[ll]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function ob(n){return sb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ab={[Qr]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function lb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ab[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const cb={[ks]:"ENVMAP_MODE_REFRACTION"};function fb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ub={[b0]:"ENVMAP_BLENDING_MULTIPLY",[Rx]:"ENVMAP_BLENDING_MIX",[Cx]:"ENVMAP_BLENDING_ADD"};function hb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ub[n.combine]||"ENVMAP_BLENDING_NONE"}function db(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function pb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ob(t),l=lb(t),h=fb(t),f=hb(t),u=db(t),p=JE(t),m=jE(s),v=r.createProgram();let _,x,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Po).join(`
`),x.length>0&&(x+=`
`)):(_=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),x=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?KE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),ZE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),o=Lu(o),o=lp(o,t),o=cp(o,t),a=Lu(a),a=lp(a,t),a=cp(a,t),o=fp(o),a=fp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const A=w+_+o,S=w+x+a,R=sp(r,r.VERTEX_SHADER,A),C=sp(r,r.FRAGMENT_SHADER,S);r.attachShader(v,R),r.attachShader(v,C),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function N(U){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",D=r.getShaderInfoLog(R)||"",H=r.getShaderInfoLog(C)||"",P=z.trim(),O=D.trim(),F=H.trim();let G=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,C);else{const te=ap(r,R,"vertex"),ue=ap(r,C,"fragment");St("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+te+`
`+ue)}else P!==""?st("WebGLProgram: Program Info Log:",P):(O===""||F==="")&&(Z=!1);Z&&(U.diagnostics={runnable:G,programLog:P,vertexShader:{log:O,prefix:_},fragmentShader:{log:F,prefix:x}})}r.deleteShader(R),r.deleteShader(C),M=new dl(r,v),T=QE(r,v)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(v,GE)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=C,this}let mb=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _b(e),t.set(e,i)),i}}class _b{constructor(e){this.id=mb++,this.code=e,this.usedTimes=0}}function xb(n){return n===es||n===El||n===bl}function vb(n,e,t,i,r,s){const o=new H0,a=new gb,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,T,B,U,z,D){const H=U.fog,P=z.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,F=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||O,F),Z=G&&G.mapping===gc?G.image.height:null,te=p[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&st("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ue=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Ue=0;P.morphAttributes.position!==void 0&&(Ue=1),P.morphAttributes.normal!==void 0&&(Ue=2),P.morphAttributes.color!==void 0&&(Ue=3);let ke,it,he,we;if(te){const Ge=$n[te];ke=Ge.vertexShader,it=Ge.fragmentShader}else{ke=M.vertexShader,it=M.fragmentShader;const Ge=a.getVertexShaderStage(M),Xt=a.getFragmentShaderStage(M);a.update(M,Ge,Xt),he=Ge.id,we=Xt.id}const ve=n.getRenderTarget(),je=n.state.buffers.depth.getReversed(),et=z.isInstancedMesh===!0,tt=z.isBatchedMesh===!0,$t=!!M.map,Ie=!!M.matcap,ct=!!G,nt=!!M.aoMap,He=!!M.lightMap,At=!!M.bumpMap&&M.wireframe===!1,Ft=!!M.normalMap,Bt=!!M.displacementMap,Rt=!!M.emissiveMap,Dt=!!M.metalnessMap,Zt=!!M.roughnessMap,Y=M.anisotropy>0,mn=M.clearcoat>0,wt=M.dispersion>0,k=M.iridescence>0,E=M.sheen>0,j=M.transmission>0,se=Y&&!!M.anisotropyMap,ce=mn&&!!M.clearcoatMap,be=mn&&!!M.clearcoatNormalMap,Se=mn&&!!M.clearcoatRoughnessMap,fe=k&&!!M.iridescenceMap,me=k&&!!M.iridescenceThicknessMap,Me=E&&!!M.sheenColorMap,Ye=E&&!!M.sheenRoughnessMap,De=!!M.specularMap,Ee=!!M.specularColorMap,Xe=!!M.specularIntensityMap,rt=j&&!!M.transmissionMap,Ze=j&&!!M.thicknessMap,$=!!M.gradientMap,Te=!!M.alphaMap,le=M.alphaTest>0,Re=!!M.alphaHash,Ce=!!M.extensions;let xe=Gi;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Ke={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:ke,fragmentShader:it,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:tt,batchingColor:tt&&z._colorsTexture!==null,instancing:et,instancingColor:et&&z.instanceColor!==null,instancingMorph:et&&z.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:Ie,envMap:ct,envMapMode:ct&&G.mapping,envMapCubeUVHeight:Z,aoMap:nt,lightMap:He,bumpMap:At,normalMap:Ft,displacementMap:Bt,emissiveMap:Rt,normalMapObjectSpace:Ft&&M.normalMapType===Dx,normalMapTangentSpace:Ft&&M.normalMapType===Cu,packedNormalMap:Ft&&M.normalMapType===Cu&&xb(M.normalMap.format),metalnessMap:Dt,roughnessMap:Zt,anisotropy:Y,anisotropyMap:se,clearcoat:mn,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:Se,dispersion:wt,iridescence:k,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:De,specularColorMap:Ee,specularIntensityMap:Xe,transmission:j,transmissionMap:rt,thicknessMap:Ze,gradientMap:$,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:le,alphaHash:Re,combine:M.combine,mapUv:$t&&m(M.map.channel),aoMapUv:nt&&m(M.aoMap.channel),lightMapUv:He&&m(M.lightMap.channel),bumpMapUv:At&&m(M.bumpMap.channel),normalMapUv:Ft&&m(M.normalMap.channel),displacementMapUv:Bt&&m(M.displacementMap.channel),emissiveMapUv:Rt&&m(M.emissiveMap.channel),metalnessMapUv:Dt&&m(M.metalnessMap.channel),roughnessMapUv:Zt&&m(M.roughnessMap.channel),anisotropyMapUv:se&&m(M.anisotropyMap.channel),clearcoatMapUv:ce&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(M.sheenRoughnessMap.channel),specularMapUv:De&&m(M.specularMap.channel),specularColorMapUv:Ee&&m(M.specularColorMap.channel),specularIntensityMapUv:Xe&&m(M.specularIntensityMap.channel),transmissionMapUv:rt&&m(M.transmissionMap.channel),thicknessMapUv:Ze&&m(M.thicknessMap.channel),alphaMapUv:Te&&m(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ft||Y),vertexNormals:!!P.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!P.attributes.uv&&($t||Te),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||P.attributes.normal===void 0&&Ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:je,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Ot,decodeVideoTextureEmissive:Rt&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===Ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ei,flipSided:M.side===Vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function _(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(x(T,M),w(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function w(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function A(M){const T=p[M.type];let B;if(T){const U=$n[T];B=Oh.clone(U.uniforms)}else B=M.uniforms;return B}function S(M,T){let B=h.get(T);return B!==void 0?++B.usedTimes:(B=new pb(n,T,M,r),l.push(B),h.set(T,B)),B}function R(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function C(M){a.remove(M)}function N(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:A,acquireProgram:S,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:N}}function yb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Sb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,v,_,x){let w=n[e];return w===void 0?(w={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:_,group:x},n[e]=w):(w.id=u.id,w.object=u,w.geometry=p,w.material=m,w.materialVariant=o(u),w.groupOrder=v,w.renderOrder=u.renderOrder,w.z=_,w.group=x),e++,w}function c(u,p,m,v,_,x){const w=a(u,p,m,v,_,x);m.transmission>0?i.push(w):m.transparent===!0?r.push(w):t.push(w)}function l(u,p,m,v,_,x){const w=a(u,p,m,v,_,x);m.transmission>0?i.unshift(w):m.transparent===!0?r.unshift(w):t.unshift(w)}function h(u,p,m){t.length>1&&t.sort(u||Sb),i.length>1&&i.sort(p||hp),r.length>1&&r.sort(p||hp),m&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function Mb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new dp,n.set(i,[o])):r>=s.length?(o=new dp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new _t};break;case"SpotLight":t={position:new W,direction:new W,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function bb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let wb=0;function Tb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ab(n){const e=new Eb,t=bb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);const r=new W,s=new Yt,o=new Yt;function a(l){let h=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,v=0,_=0,x=0,w=0,A=0,S=0,R=0,C=0,N=0;l.sort(Tb);for(let T=0,B=l.length;T<B;T++){const U=l[T],z=U.color,D=U.intensity,H=U.distance;let P=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===es?P=U.shadow.map.texture:P=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*D,f+=z.g*D,u+=z.b*D;else if(U.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(U.sh.coefficients[O],D);N++}else if(U.isDirectionalLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const F=U.shadow,G=t.get(U);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=U.shadow.matrix,w++}i.directional[p]=O,p++}else if(U.isSpotLight){const O=e.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(z).multiplyScalar(D),O.distance=H,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,i.spot[v]=O;const F=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,F.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[v]=F.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=P,S++}v++}else if(U.isRectAreaLight){const O=e.get(U);O.color.copy(z).multiplyScalar(D),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=O,_++}else if(U.isPointLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),O.distance=U.distance,O.decay=U.decay,U.castShadow){const F=U.shadow,G=t.get(U);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=P,i.pointShadowMatrix[m]=U.shadow.matrix,A++}i.point[m]=O,m++}else if(U.isHemisphereLight){const O=e.get(U);O.skyColor.copy(U.color).multiplyScalar(D),O.groundColor.copy(U.groundColor).multiplyScalar(D),i.hemi[x]=O,x++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const M=i.hash;(M.directionalLength!==p||M.pointLength!==m||M.spotLength!==v||M.rectAreaLength!==_||M.hemiLength!==x||M.numDirectionalShadows!==w||M.numPointShadows!==A||M.numSpotShadows!==S||M.numSpotMaps!==R||M.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,M.directionalLength=p,M.pointLength=m,M.spotLength=v,M.rectAreaLength=_,M.hemiLength=x,M.numDirectionalShadows=w,M.numPointShadows=A,M.numSpotShadows=S,M.numSpotMaps=R,M.numLightProbes=N,i.version=wb++)}function c(l,h){let f=0,u=0,p=0,m=0,v=0;const _=h.matrixWorldInverse;for(let x=0,w=l.length;x<w;x++){const A=l[x];if(A.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(A.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(A.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(A.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(A.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(_),u++}else if(A.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:c,state:i}}function pp(n){const e=new Ab(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Rb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pp(n),e.set(r,[a])):s>=o.length?(a=new pp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pb=`uniform sampler2D shadow_pass;
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
}`,Ib=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Db=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],mp=new Yt,vo=new W,mf=new W;function Lb(n,e,t){let i=new Lh;const r=new ht,s=new ht,o=new zt,a=new Uv,c=new Fv,l={},h=t.maxTextureSize,f={[Ir]:Vn,[Vn]:Ir,[Ei]:Ei},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Cb,fragmentShader:Pb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new un;m.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(m,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let x=this.type;this.render=function(C,N,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;this.type===cx&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ll);const T=n.getRenderTarget(),B=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(or),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const D=x!==this.type;D&&N.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(P=>P.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,P=C.length;H<P;H++){const O=C[H],F=O.shadow;if(F===void 0){st("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();r.multiply(G),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,F.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||D===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Co){if(O.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wi(r.x,r.y,{format:es,type:hr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Vs(r.x,r.y,zi),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=dr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=yn,F.map.depthTexture.magFilter=yn}else O.isPointLight?(F.map=new rg(r.x),F.map.depthTexture=new Cv(r.x,Ki)):(F.map=new Wi(r.x,r.y),F.map.depthTexture=new Vs(r.x,r.y,Ki)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=dr,this.type===ll?(F.map.depthTexture.compareFunction=Z?Ch:Rh,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=yn,F.map.depthTexture.magFilter=yn);F.camera.updateProjectionMatrix()}const te=F.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<te;ue++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(F.map),n.clear());const _e=F.getViewport(ue);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),z.viewport(o)}if(O.isPointLight){const _e=F.camera,Ue=F.matrix,ke=O.distance||_e.far;ke!==_e.far&&(_e.far=ke,_e.updateProjectionMatrix()),vo.setFromMatrixPosition(O.matrixWorld),_e.position.copy(vo),mf.copy(_e.position),mf.add(Ib[ue]),_e.up.copy(Db[ue]),_e.lookAt(mf),_e.updateMatrixWorld(),Ue.makeTranslation(-vo.x,-vo.y,-vo.z),mp.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),F._frustum.setFromProjectionMatrix(mp,_e.coordinateSystem,_e.reversedDepth)}else F.updateMatrices(O);i=F.getFrustum(),S(N,M,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Co&&w(F,M),F.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(T,B,U)};function w(C,N){const M=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Wi(r.x,r.y,{format:es,type:hr})),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(N,null,M,u,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(N,null,M,p,v,null)}function A(C,N,M,T){let B=null;const U=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)B=U;else if(B=M.isPointLight===!0?c:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const z=B.uuid,D=N.uuid;let H=l[z];H===void 0&&(H={},l[z]=H);let P=H[D];P===void 0&&(P=B.clone(),H[D]=P,N.addEventListener("dispose",R)),B=P}if(B.visible=N.visible,B.wireframe=N.wireframe,T===Co?B.side=N.shadowSide!==null?N.shadowSide:N.side:B.side=N.shadowSide!==null?N.shadowSide:f[N.side],B.alphaMap=N.alphaMap,B.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,B.map=N.map,B.clipShadows=N.clipShadows,B.clippingPlanes=N.clippingPlanes,B.clipIntersection=N.clipIntersection,B.displacementMap=N.displacementMap,B.displacementScale=N.displacementScale,B.displacementBias=N.displacementBias,B.wireframeLinewidth=N.wireframeLinewidth,B.linewidth=N.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const z=n.properties.get(B);z.light=M}return B}function S(C,N,M,T,B){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&B===Co)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);const D=e.update(C),H=C.material;if(Array.isArray(H)){const P=D.groups;for(let O=0,F=P.length;O<F;O++){const G=P[O],Z=H[G.materialIndex];if(Z&&Z.visible){const te=A(C,Z,T,B);C.onBeforeShadow(n,C,N,M,D,te,G),n.renderBufferDirect(M,null,D,te,C,G),C.onAfterShadow(n,C,N,M,D,te,G)}}}else if(H.visible){const P=A(C,H,T,B);C.onBeforeShadow(n,C,N,M,D,P,null),n.renderBufferDirect(M,null,D,P,C,null),C.onAfterShadow(n,C,N,M,D,P,null)}}const z=C.children;for(let D=0,H=z.length;D<H;D++)S(z[D],N,M,T,B)}function R(C){C.target.removeEventListener("dispose",R);for(const M in l){const T=l[M],B=C.target.uuid;B in T&&(T[B].dispose(),delete T[B])}}}function Nb(n,e){function t(){let $=!1;const Te=new zt;let le=null;const Re=new zt(0,0,0,0);return{setMask:function(Ce){le!==Ce&&!$&&(n.colorMask(Ce,Ce,Ce,Ce),le=Ce)},setLocked:function(Ce){$=Ce},setClear:function(Ce,xe,Ke,Ge,Xt){Xt===!0&&(Ce*=Ge,xe*=Ge,Ke*=Ge),Te.set(Ce,xe,Ke,Ge),Re.equals(Te)===!1&&(n.clearColor(Ce,xe,Ke,Ge),Re.copy(Te))},reset:function(){$=!1,le=null,Re.set(-1,0,0,0)}}}function i(){let $=!1,Te=!1,le=null,Re=null,Ce=null;return{setReversed:function(xe){if(Te!==xe){const Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;const Ge=Ce;Ce=null,this.setClear(Ge)}},getReversed:function(){return Te},setTest:function(xe){xe?ve(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(xe){le!==xe&&!$&&(n.depthMask(xe),le=xe)},setFunc:function(xe){if(Te&&(xe=Hx[xe]),Re!==xe){switch(xe){case Wf:n.depthFunc(n.NEVER);break;case $f:n.depthFunc(n.ALWAYS);break;case Xf:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case qf:n.depthFunc(n.EQUAL);break;case Yf:n.depthFunc(n.GEQUAL);break;case Kf:n.depthFunc(n.GREATER);break;case Zf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=xe}},setLocked:function(xe){$=xe},setClear:function(xe){Ce!==xe&&(Ce=xe,Te&&(xe=1-xe),n.clearDepth(xe))},reset:function(){$=!1,le=null,Re=null,Ce=null,Te=!1}}}function r(){let $=!1,Te=null,le=null,Re=null,Ce=null,xe=null,Ke=null,Ge=null,Xt=null;return{setTest:function(Lt){$||(Lt?ve(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(Lt){Te!==Lt&&!$&&(n.stencilMask(Lt),Te=Lt)},setFunc:function(Lt,Hn,Yn){(le!==Lt||Re!==Hn||Ce!==Yn)&&(n.stencilFunc(Lt,Hn,Yn),le=Lt,Re=Hn,Ce=Yn)},setOp:function(Lt,Hn,Yn){(xe!==Lt||Ke!==Hn||Ge!==Yn)&&(n.stencilOp(Lt,Hn,Yn),xe=Lt,Ke=Hn,Ge=Yn)},setLocked:function(Lt){$=Lt},setClear:function(Lt){Xt!==Lt&&(n.clearStencil(Lt),Xt=Lt)},reset:function(){$=!1,Te=null,le=null,Re=null,Ce=null,xe=null,Ke=null,Ge=null,Xt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,m=[],v=null,_=!1,x=null,w=null,A=null,S=null,R=null,C=null,N=null,M=new _t(0,0,0),T=0,B=!1,U=null,z=null,D=null,H=null,P=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=G>=2);let te=null,ue={};const _e=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),ke=new zt().fromArray(_e),it=new zt().fromArray(Ue);function he($,Te,le,Re){const Ce=new Uint8Array(4),xe=n.createTexture();n.bindTexture($,xe),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<le;Ke++)$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return xe}const we={};we[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(zs),At(!1),Ft(fd),ve(n.CULL_FACE),nt(or);function ve($){h[$]!==!0&&(n.enable($),h[$]=!0)}function je($){h[$]!==!1&&(n.disable($),h[$]=!1)}function et($,Te){return u[$]!==Te?(n.bindFramebuffer($,Te),u[$]=Te,$===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),$===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function tt($,Te){let le=m,Re=!1;if($){le=p.get(Te),le===void 0&&(le=[],p.set(Te,le));const Ce=$.textures;if(le.length!==Ce.length||le[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ke=Ce.length;xe<Ke;xe++)le[xe]=n.COLOR_ATTACHMENT0+xe;le.length=Ce.length,Re=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Re=!0);Re&&n.drawBuffers(le)}function $t($){return v!==$?(n.useProgram($),v=$,!0):!1}const Ie={[Wr]:n.FUNC_ADD,[ux]:n.FUNC_SUBTRACT,[hx]:n.FUNC_REVERSE_SUBTRACT};Ie[dx]=n.MIN,Ie[px]=n.MAX;const ct={[mx]:n.ZERO,[gx]:n.ONE,[_x]:n.SRC_COLOR,[Hf]:n.SRC_ALPHA,[Ex]:n.SRC_ALPHA_SATURATE,[Sx]:n.DST_COLOR,[vx]:n.DST_ALPHA,[xx]:n.ONE_MINUS_SRC_COLOR,[Gf]:n.ONE_MINUS_SRC_ALPHA,[Mx]:n.ONE_MINUS_DST_COLOR,[yx]:n.ONE_MINUS_DST_ALPHA,[bx]:n.CONSTANT_COLOR,[wx]:n.ONE_MINUS_CONSTANT_COLOR,[Tx]:n.CONSTANT_ALPHA,[Ax]:n.ONE_MINUS_CONSTANT_ALPHA};function nt($,Te,le,Re,Ce,xe,Ke,Ge,Xt,Lt){if($===or){_===!0&&(je(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),$!==fx){if($!==x||Lt!==B){if((w!==Wr||R!==Wr)&&(n.blendEquation(n.FUNC_ADD),w=Wr,R=Wr),Lt)switch($){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ud:n.blendFunc(n.ONE,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:St("WebGLState: Invalid blending: ",$);break}else switch($){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ud:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hd:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dd:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",$);break}A=null,S=null,C=null,N=null,M.set(0,0,0),T=0,x=$,B=Lt}return}Ce=Ce||Te,xe=xe||le,Ke=Ke||Re,(Te!==w||Ce!==R)&&(n.blendEquationSeparate(Ie[Te],Ie[Ce]),w=Te,R=Ce),(le!==A||Re!==S||xe!==C||Ke!==N)&&(n.blendFuncSeparate(ct[le],ct[Re],ct[xe],ct[Ke]),A=le,S=Re,C=xe,N=Ke),(Ge.equals(M)===!1||Xt!==T)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Xt),M.copy(Ge),T=Xt),x=$,B=!1}function He($,Te){$.side===Ei?je(n.CULL_FACE):ve(n.CULL_FACE);let le=$.side===Vn;Te&&(le=!le),At(le),$.blending===Ls&&$.transparent===!1?nt(or):nt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),s.setMask($.colorWrite);const Re=$.stencilWrite;a.setTest(Re),Re&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Rt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function At($){U!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),U=$)}function Ft($){$!==ax?(ve(n.CULL_FACE),$!==z&&($===fd?n.cullFace(n.BACK):$===lx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),z=$}function Bt($){$!==D&&(F&&n.lineWidth($),D=$)}function Rt($,Te,le){$?(ve(n.POLYGON_OFFSET_FILL),(H!==Te||P!==le)&&(H=Te,P=le,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,le))):je(n.POLYGON_OFFSET_FILL)}function Dt($){$?ve(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function Zt($){$===void 0&&($=n.TEXTURE0+O-1),te!==$&&(n.activeTexture($),te=$)}function Y($,Te,le){le===void 0&&(te===null?le=n.TEXTURE0+O-1:le=te);let Re=ue[le];Re===void 0&&(Re={type:void 0,texture:void 0},ue[le]=Re),(Re.type!==$||Re.texture!==Te)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture($,Te||we[$]),Re.type=$,Re.texture=Te)}function mn(){const $=ue[te];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function wt(){try{n.compressedTexImage2D(...arguments)}catch($){St("WebGLState:",$)}}function k(){try{n.compressedTexImage3D(...arguments)}catch($){St("WebGLState:",$)}}function E(){try{n.texSubImage2D(...arguments)}catch($){St("WebGLState:",$)}}function j(){try{n.texSubImage3D(...arguments)}catch($){St("WebGLState:",$)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch($){St("WebGLState:",$)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch($){St("WebGLState:",$)}}function be(){try{n.texStorage2D(...arguments)}catch($){St("WebGLState:",$)}}function Se(){try{n.texStorage3D(...arguments)}catch($){St("WebGLState:",$)}}function fe(){try{n.texImage2D(...arguments)}catch($){St("WebGLState:",$)}}function me(){try{n.texImage3D(...arguments)}catch($){St("WebGLState:",$)}}function Me($){return f[$]!==void 0?f[$]:n.getParameter($)}function Ye($,Te){f[$]!==Te&&(n.pixelStorei($,Te),f[$]=Te)}function De($){ke.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),ke.copy($))}function Ee($){it.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),it.copy($))}function Xe($,Te){let le=l.get(Te);le===void 0&&(le=new WeakMap,l.set(Te,le));let Re=le.get($);Re===void 0&&(Re=n.getUniformBlockIndex(Te,$.name),le.set($,Re))}function rt($,Te){const Re=l.get(Te).get($);c.get(Te)!==Re&&(n.uniformBlockBinding(Te,Re,$.__bindingPointIndex),c.set(Te,Re))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,ue={},u={},p=new WeakMap,m=[],v=null,_=!1,x=null,w=null,A=null,S=null,R=null,C=null,N=null,M=new _t(0,0,0),T=0,B=!1,U=null,z=null,D=null,H=null,P=null,ke.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:je,bindFramebuffer:et,drawBuffers:tt,useProgram:$t,setBlending:nt,setMaterial:He,setFlipSided:At,setCullFace:Ft,setLineWidth:Bt,setPolygonOffset:Rt,setScissorTest:Dt,activeTexture:Zt,bindTexture:Y,unbindTexture:mn,compressedTexImage2D:wt,compressedTexImage3D:k,texImage2D:fe,texImage3D:me,pixelStorei:Ye,getParameter:Me,updateUBOMapping:Xe,uniformBlockBinding:rt,texStorage2D:be,texStorage3D:Se,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:De,viewport:Ee,reset:Ze}}function Ob(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(k,E){return m?new OffscreenCanvas(k,E):Al("canvas")}function _(k,E,j){let se=1;const ce=wt(k);if((ce.width>j||ce.height>j)&&(se=j/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const be=Math.floor(se*ce.width),Se=Math.floor(se*ce.height);u===void 0&&(u=v(be,Se));const fe=E?v(be,Se):u;return fe.width=be,fe.height=Se,fe.getContext("2d").drawImage(k,0,0,be,Se),st("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+be+"x"+Se+")."),fe}else return"data"in k&&st("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),k;return k}function x(k){return k.generateMipmaps}function w(k){n.generateMipmap(k)}function A(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(k,E,j,se,ce,be=!1){if(k!==null){if(n[k]!==void 0)return n[k];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Se;se&&(Se=e.get("EXT_texture_norm16"),Se||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.R16_EXT),j===n.SHORT&&Se&&(fe=Se.R16_SNORM_EXT)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),E===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RG16_EXT),j===n.SHORT&&Se&&(fe=Se.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGB16_EXT),j===n.SHORT&&Se&&(fe=Se.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),E===n.RGBA){const me=be?Tl:vt.getTransfer(ce);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=me===Ot?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGBA16_EXT),j===n.SHORT&&Se&&(fe=Se.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(k,E){let j;return k?E===null||E===Ki||E===ko?j=n.DEPTH24_STENCIL8:E===zi?j=n.DEPTH32F_STENCIL8:E===zo&&(j=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===ko?j=n.DEPTH_COMPONENT24:E===zi?j=n.DEPTH_COMPONENT32F:E===zo&&(j=n.DEPTH_COMPONENT16),j}function C(k,E){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==yn&&k.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?E.mipmaps.length:1}function N(k){const E=k.target;E.removeEventListener("dispose",N),T(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function M(k){const E=k.target;E.removeEventListener("dispose",M),U(E)}function T(k){const E=i.get(k);if(E.__webglInit===void 0)return;const j=k.source,se=p.get(j);if(se){const ce=se[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&B(k),Object.keys(se).length===0&&p.delete(j)}i.remove(k)}function B(k){const E=i.get(k);n.deleteTexture(E.__webglTexture);const j=k.source,se=p.get(j);delete se[E.__cacheKey],o.memory.textures--}function U(k){const E=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ce=0;ce<E.__webglFramebuffer[se].length;ce++)n.deleteFramebuffer(E.__webglFramebuffer[se][ce]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=k.textures;for(let se=0,ce=j.length;se<ce;se++){const be=i.get(j[se]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(j[se])}i.remove(k)}let z=0;function D(){z=0}function H(){return z}function P(k){z=k}function O(){const k=z;return k>=r.maxTextures&&st("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),z+=1,k}function F(k){const E=[];return E.push(k.wrapS),E.push(k.wrapT),E.push(k.wrapR||0),E.push(k.magFilter),E.push(k.minFilter),E.push(k.anisotropy),E.push(k.internalFormat),E.push(k.format),E.push(k.type),E.push(k.generateMipmaps),E.push(k.premultiplyAlpha),E.push(k.flipY),E.push(k.unpackAlignment),E.push(k.colorSpace),E.join()}function G(k,E){const j=i.get(k);if(k.isVideoTexture&&Y(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&j.__version!==k.version){const se=k.image;if(se===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{je(j,k,E);return}}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function Z(k,E){const j=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){je(j,k,E);return}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function te(k,E){const j=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){je(j,k,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function ue(k,E){const j=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&j.__version!==k.version){et(j,k,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const _e={[Jf]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[jf]:n.MIRRORED_REPEAT},Ue={[yn]:n.NEAREST,[Px]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Oc]:n.LINEAR_MIPMAP_NEAREST,[qr]:n.LINEAR_MIPMAP_LINEAR},ke={[Lx]:n.NEVER,[Bx]:n.ALWAYS,[Nx]:n.LESS,[Rh]:n.LEQUAL,[Ox]:n.EQUAL,[Ch]:n.GEQUAL,[Ux]:n.GREATER,[Fx]:n.NOTEQUAL};function it(k,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===Oc||E.magFilter===aa||E.magFilter===qr||E.minFilter===Tn||E.minFilter===Oc||E.minFilter===aa||E.minFilter===qr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,_e[E.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,_e[E.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,_e[E.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Ue[E.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Ue[E.minFilter]),E.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,ke[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yn||E.minFilter!==aa&&E.minFilter!==qr||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function he(k,E){let j=!1;k.__webglInit===void 0&&(k.__webglInit=!0,E.addEventListener("dispose",N));const se=E.source;let ce=p.get(se);ce===void 0&&(ce={},p.set(se,ce));const be=F(E);if(be!==k.__cacheKey){ce[be]===void 0&&(ce[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[be].usedTimes++;const Se=ce[k.__cacheKey];Se!==void 0&&(ce[k.__cacheKey].usedTimes--,Se.usedTimes===0&&B(E)),k.__cacheKey=be,k.__webglTexture=ce[be].texture}return j}function we(k,E,j){return Math.floor(Math.floor(k/j)/E)}function ve(k,E,j,se){const be=k.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,se,E.data);else{be.sort((Ye,De)=>Ye.start-De.start);let Se=0;for(let Ye=1;Ye<be.length;Ye++){const De=be[Se],Ee=be[Ye],Xe=De.start+De.count,rt=we(Ee.start,E.width,4),Ze=we(De.start,E.width,4);Ee.start<=Xe+1&&rt===Ze&&we(Ee.start+Ee.count-1,E.width,4)===rt?De.count=Math.max(De.count,Ee.start+Ee.count-De.start):(++Se,be[Se]=Ee)}be.length=Se+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,De=be.length;Ye<De;Ye++){const Ee=be[Ye],Xe=Math.floor(Ee.start/4),rt=Math.ceil(Ee.count/4),Ze=Xe%E.width,$=Math.floor(Xe/E.width),Te=rt,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,$),t.texSubImage2D(n.TEXTURE_2D,0,Ze,$,Te,le,j,se,E.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function je(k,E,j){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const ce=he(k,E),be=E.source;t.bindTexture(se,k.__webglTexture,n.TEXTURE0+j);const Se=i.get(be);if(be.version!==Se.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const le=vt.getPrimaries(vt.workingColorSpace),Re=E.colorSpace===Tr?null:vt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Tr||le===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let me=_(E.image,!1,r.maxTextureSize);me=mn(E,me);const Me=s.convert(E.format,E.colorSpace),Ye=s.convert(E.type);let De=S(E.internalFormat,Me,Ye,E.normalized,E.colorSpace,E.isVideoTexture);it(se,E);let Ee;const Xe=E.mipmaps,rt=E.isVideoTexture!==!0,Ze=Se.__version===void 0||ce===!0,$=be.dataReady,Te=C(E,me);if(E.isDepthTexture)De=R(E.format===Yr,E.type),Ze&&(rt?t.texStorage2D(n.TEXTURE_2D,1,De,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,De,me.width,me.height,0,Me,Ye,null));else if(E.isDataTexture)if(Xe.length>0){rt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,De,Xe[0].width,Xe[0].height);for(let le=0,Re=Xe.length;le<Re;le++)Ee=Xe[le],rt?$&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,le,De,Ee.width,Ee.height,0,Me,Ye,Ee.data);E.generateMipmaps=!1}else rt?(Ze&&t.texStorage2D(n.TEXTURE_2D,Te,De,me.width,me.height),$&&ve(E,me,Me,Ye)):t.texImage2D(n.TEXTURE_2D,0,De,me.width,me.height,0,Me,Ye,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,Xe[0].width,Xe[0].height,me.depth);for(let le=0,Re=Xe.length;le<Re;le++)if(Ee=Xe[le],E.format!==Ti)if(Me!==null)if(rt){if($)if(E.layerUpdates.size>0){const Ce=Xd(Ee.width,Ee.height,E.format,E.type);for(const xe of E.layerUpdates){const Ke=Ee.data.subarray(xe*Ce/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,xe,Ee.width,Ee.height,1,Me,Ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,me.depth,Me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,De,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?$&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,me.depth,Me,Ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,De,Ee.width,Ee.height,me.depth,0,Me,Ye,Ee.data)}else{rt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,De,Xe[0].width,Xe[0].height);for(let le=0,Re=Xe.length;le<Re;le++)Ee=Xe[le],E.format!==Ti?Me!==null?rt?$&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,De,Ee.width,Ee.height,0,Ee.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?$&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,le,De,Ee.width,Ee.height,0,Me,Ye,Ee.data)}else if(E.isDataArrayTexture)if(rt){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,me.width,me.height,me.depth),$)if(E.layerUpdates.size>0){const le=Xd(me.width,me.height,E.format,E.type);for(const Re of E.layerUpdates){const Ce=me.data.subarray(Re*le/me.data.BYTES_PER_ELEMENT,(Re+1)*le/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,me.width,me.height,1,Me,Ye,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,Ye,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,me.width,me.height,me.depth,0,Me,Ye,me.data);else if(E.isData3DTexture)rt?(Ze&&t.texStorage3D(n.TEXTURE_3D,Te,De,me.width,me.height,me.depth),$&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,Ye,me.data)):t.texImage3D(n.TEXTURE_3D,0,De,me.width,me.height,me.depth,0,Me,Ye,me.data);else if(E.isFramebufferTexture){if(Ze)if(rt)t.texStorage2D(n.TEXTURE_2D,Te,De,me.width,me.height);else{let le=me.width,Re=me.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,De,le,Re,0,Me,Ye,null),le>>=1,Re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),me.parentNode!==le){le.appendChild(me),f.add(E),le.onpaint=Re=>{const Ce=Re.changedElements;for(const xe of f)Ce.includes(xe.image)&&(xe.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const Ce=n.RGBA,xe=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,xe,Ke,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(rt&&Ze){const le=wt(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Te,De,le.width,le.height)}for(let le=0,Re=Xe.length;le<Re;le++)Ee=Xe[le],rt?$&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,Ye,Ee):t.texImage2D(n.TEXTURE_2D,le,De,Me,Ye,Ee);E.generateMipmaps=!1}else if(rt){if(Ze){const le=wt(me);t.texStorage2D(n.TEXTURE_2D,Te,De,le.width,le.height)}$&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ye,me)}else t.texImage2D(n.TEXTURE_2D,0,De,Me,Ye,me);x(E)&&w(se),Se.__version=be.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function et(k,E,j){if(E.image.length!==6)return;const se=he(k,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+j);const be=i.get(ce);if(ce.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+j);const Se=vt.getPrimaries(vt.workingColorSpace),fe=E.colorSpace===Tr?null:vt.getPrimaries(E.colorSpace),me=E.colorSpace===Tr||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,De=[];for(let xe=0;xe<6;xe++)!Me&&!Ye?De[xe]=_(E.image[xe],!0,r.maxCubemapSize):De[xe]=Ye?E.image[xe].image:E.image[xe],De[xe]=mn(E,De[xe]);const Ee=De[0],Xe=s.convert(E.format,E.colorSpace),rt=s.convert(E.type),Ze=S(E.internalFormat,Xe,rt,E.normalized,E.colorSpace),$=E.isVideoTexture!==!0,Te=be.__version===void 0||se===!0,le=ce.dataReady;let Re=C(E,Ee);it(n.TEXTURE_CUBE_MAP,E);let Ce;if(Me){$&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ze,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){Ce=De[xe].mipmaps;for(let Ke=0;Ke<Ce.length;Ke++){const Ge=Ce[Ke];E.format!==Ti?Xe!==null?$?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Ge.width,Ge.height,Xe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,Ze,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Ge.width,Ge.height,Xe,rt,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,Ze,Ge.width,Ge.height,0,Xe,rt,Ge.data)}}}else{if(Ce=E.mipmaps,$&&Te){Ce.length>0&&Re++;const xe=wt(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ze,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ye){$?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,De[xe].width,De[xe].height,Xe,rt,De[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,De[xe].width,De[xe].height,0,Xe,rt,De[xe].data);for(let Ke=0;Ke<Ce.length;Ke++){const Xt=Ce[Ke].image[xe].image;$?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Xt.width,Xt.height,Xe,rt,Xt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,Ze,Xt.width,Xt.height,0,Xe,rt,Xt.data)}}else{$?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Xe,rt,De[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,Xe,rt,De[xe]);for(let Ke=0;Ke<Ce.length;Ke++){const Ge=Ce[Ke];$?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Xe,rt,Ge.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,Ze,Xe,rt,Ge.image[xe])}}}x(E)&&w(n.TEXTURE_CUBE_MAP),be.__version=ce.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function tt(k,E,j,se,ce,be){const Se=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),me=S(j.internalFormat,Se,fe,j.normalized,j.colorSpace),Me=i.get(E),Ye=i.get(j);if(Ye.__renderTarget=E,!Me.__hasExternalTextures){const De=Math.max(1,E.width>>be),Ee=Math.max(1,E.height>>be);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,be,me,De,Ee,E.depth,0,Se,fe,null):t.texImage2D(ce,be,me,De,Ee,0,Se,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Zt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ce,Ye.__webglTexture,0,Dt(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ce,Ye.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $t(k,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,k),E.depthBuffer){const se=E.depthTexture,ce=se&&se.isDepthTexture?se.type:null,be=R(E.stencilBuffer,ce),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt(E),be,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt(E),be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,k)}else{const se=E.textures;for(let ce=0;ce<se.length;ce++){const be=se[ce],Se=s.convert(be.format,be.colorSpace),fe=s.convert(be.type),me=S(be.internalFormat,Se,fe,be.normalized,be.colorSpace);Zt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt(E),me,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(k,E,j){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(E.depthTexture);if(ce.__renderTarget=E,(!ce.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),it(n.TEXTURE_CUBE_MAP,E.depthTexture);const Me=s.convert(E.depthTexture.format),Ye=s.convert(E.depthTexture.type);let De;E.depthTexture.format===dr?De=n.DEPTH_COMPONENT24:E.depthTexture.format===Yr&&(De=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,De,E.width,E.height,0,Me,Ye,null)}}else G(E.depthTexture,0);const be=ce.__webglTexture,Se=Dt(E),fe=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,me=E.depthTexture.format===Yr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===dr)Zt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,be,0);else if(E.depthTexture.format===Yr)Zt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(k){const E=i.get(k),j=k.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==k.depthTexture){const se=k.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=se}if(k.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)Ie(E.__webglFramebuffer[se],k,se);else{const se=k.texture.mipmaps;se&&se.length>0?Ie(E.__webglFramebuffer[0],k,0):Ie(E.__webglFramebuffer,k,0)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=n.createRenderbuffer(),$t(E.__webglDepthbuffer[se],k,!1);else{const ce=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,be)}}else{const se=k.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),$t(E.__webglDepthbuffer,k,!1);else{const ce=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(k,E,j){const se=i.get(k);E!==void 0&&tt(se.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&ct(k)}function He(k){const E=k.texture,j=i.get(k),se=i.get(E);k.addEventListener("dispose",M);const ce=k.textures,be=k.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,o.memory.textures++),be){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let me=0;me<E.mipmaps.length;me++)j.__webglFramebuffer[fe][me]=n.createFramebuffer()}else j.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)j.__webglFramebuffer[fe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Se)for(let fe=0,me=ce.length;fe<me;fe++){const Me=i.get(ce[fe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(k.samples>0&&Zt(k)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const me=ce[fe];j.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Me=s.convert(me.format,me.colorSpace),Ye=s.convert(me.type),De=S(me.internalFormat,Me,Ye,me.normalized,me.colorSpace,k.isXRRenderTarget===!0),Ee=Dt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,De,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),$t(j.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),it(n.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)tt(j.__webglFramebuffer[fe][me],k,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else tt(j.__webglFramebuffer[fe],k,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(E)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,me=ce.length;fe<me;fe++){const Me=ce[fe],Ye=i.get(Me);let De=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ye.__webglTexture),it(De,Me),tt(j.__webglFramebuffer,k,Me,n.COLOR_ATTACHMENT0+fe,De,0),x(Me)&&w(De)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(fe=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),it(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)tt(j.__webglFramebuffer[me],k,E,n.COLOR_ATTACHMENT0,fe,me);else tt(j.__webglFramebuffer,k,E,n.COLOR_ATTACHMENT0,fe,0);x(E)&&w(fe),t.unbindTexture()}k.depthBuffer&&ct(k)}function At(k){const E=k.textures;for(let j=0,se=E.length;j<se;j++){const ce=E[j];if(x(ce)){const be=A(k),Se=i.get(ce).__webglTexture;t.bindTexture(be,Se),w(be),t.unbindTexture()}}}const Ft=[],Bt=[];function Rt(k){if(k.samples>0){if(Zt(k)===!1){const E=k.textures,j=k.width,se=k.height;let ce=n.COLOR_BUFFER_BIT;const be=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(k),fe=E.length>1;if(fe)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const me=k.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(E[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ce,n.NEAREST),c===!0&&(Ft.length=0,Bt.length=0,Ft.push(n.COLOR_ATTACHMENT0+Me),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ft.push(be),Bt.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(E[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&c){const E=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Dt(k){return Math.min(r.maxSamples,k.samples)}function Zt(k){const E=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(k){const E=o.render.frame;h.get(k)!==E&&(h.set(k,E),k.update())}function mn(k,E){const j=k.colorSpace,se=k.format,ce=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||j!==wl&&j!==Tr&&(vt.getTransfer(j)===Ot?(se!==Ti||ce!==ti)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",j)),E}function wt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.getTextureUnits=H,this.setTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=nt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ub(n,e){function t(i,r=Tr){let s;const o=vt.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===Mh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===O0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===U0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===L0)return n.BYTE;if(i===N0)return n.SHORT;if(i===zo)return n.UNSIGNED_SHORT;if(i===Sh)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===zi)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===F0)return n.ALPHA;if(i===B0)return n.RGB;if(i===Ti)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===bh)return n.RED;if(i===wh)return n.RED_INTEGER;if(i===es)return n.RG;if(i===Th)return n.RG_INTEGER;if(i===Ah)return n.RGBA_INTEGER;if(i===cl||i===fl||i===ul||i===hl)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qf||i===eu||i===tu||i===nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===iu||i===ru||i===su||i===ou||i===au||i===El||i===lu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===iu||i===ru)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===su)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ou)return s.COMPRESSED_R11_EAC;if(i===au)return s.COMPRESSED_SIGNED_R11_EAC;if(i===El)return s.COMPRESSED_RG11_EAC;if(i===lu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cu||i===fu||i===uu||i===hu||i===du||i===pu||i===mu||i===gu||i===_u||i===xu||i===vu||i===yu||i===Su||i===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===du)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_u)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mu)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===bu||i===wu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eu)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tu||i===Au||i===bl||i===Ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ko?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bb=`
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

}`;class zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Q0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:Fb,fragmentShader:Bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kb extends rs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",_=new zb,x={},w=t.getContextAttributes();let A=null,S=null;const R=[],C=[],N=new ht;let M=null;const T=new fi;T.viewport=new zt;const B=new fi;B.viewport=new zt;const U=[T,B],z=new $v;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let we=R[he];return we===void 0&&(we=new Vc,R[he]=we),we.getTargetRaySpace()},this.getControllerGrip=function(he){let we=R[he];return we===void 0&&(we=new Vc,R[he]=we),we.getGripSpace()},this.getHand=function(he){let we=R[he];return we===void 0&&(we=new Vc,R[he]=we),we.getHandSpace()};function P(he){const we=C.indexOf(he.inputSource);if(we===-1)return;const ve=R[we];ve!==void 0&&(ve.update(he.inputSource,he.frame,l||o),ve.dispatchEvent({type:he.type,data:he.inputSource}))}function O(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",F);for(let he=0;he<R.length;he++){const we=C[he];we!==null&&(C[he]=null,R[he].disconnect(we))}D=null,H=null,_.reset();for(const he in x)delete x[he];e.setRenderTarget(A),p=null,u=null,f=null,r=null,S=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",O),r.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(N),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,je=null,et=null;w.depth&&(et=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=w.stencil?Yr:dr,je=w.stencil?ko:Ki);const tt={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(tt),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Wi(u.textureWidth,u.textureHeight,{format:Ti,type:ti,depthTexture:new Vs(u.textureWidth,u.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Wi(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(he){for(let we=0;we<he.removed.length;we++){const ve=he.removed[we],je=C.indexOf(ve);je>=0&&(C[je]=null,R[je].disconnect(ve))}for(let we=0;we<he.added.length;we++){const ve=he.added[we];let je=C.indexOf(ve);if(je===-1){for(let tt=0;tt<R.length;tt++)if(tt>=C.length){C.push(ve),je=tt;break}else if(C[tt]===null){C[tt]=ve,je=tt;break}if(je===-1)break}const et=R[je];et&&et.connect(ve)}}const G=new W,Z=new W;function te(he,we,ve){G.setFromMatrixPosition(we.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const je=G.distanceTo(Z),et=we.projectionMatrix.elements,tt=ve.projectionMatrix.elements,$t=et[14]/(et[10]-1),Ie=et[14]/(et[10]+1),ct=(et[9]+1)/et[5],nt=(et[9]-1)/et[5],He=(et[8]-1)/et[0],At=(tt[8]+1)/tt[0],Ft=$t*He,Bt=$t*At,Rt=je/(-He+At),Dt=Rt*-He;if(we.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Dt),he.translateZ(Rt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),et[10]===-1)he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const Zt=$t+Rt,Y=Ie+Rt,mn=Ft-Dt,wt=Bt+(je-Dt),k=ct*Ie/Y*Zt,E=nt*Ie/Y*Zt;he.projectionMatrix.makePerspective(mn,wt,k,E,Zt,Y),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function ue(he,we){we===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(we.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let we=he.near,ve=he.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),z.near=B.near=T.near=we,z.far=B.far=T.far=ve,(D!==z.near||H!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,H=z.far),z.layers.mask=he.layers.mask|6,T.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;const je=he.parent,et=z.cameras;ue(z,je);for(let tt=0;tt<et.length;tt++)ue(et[tt],je);et.length===2?te(z,T,B):z.projectionMatrix.copy(T.projectionMatrix),_e(he,z,je)};function _e(he,we,ve){ve===null?he.matrix.copy(we.matrixWorld):(he.matrix.copy(ve.matrixWorld),he.matrix.invert(),he.matrix.multiply(we.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Ho*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(he){c=he,u!==null&&(u.fixedFoveation=he),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=he)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(he){return x[he]};let Ue=null;function ke(he,we){if(h=we.getViewerPose(l||o),m=we,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let je=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,je=!0);for(let Ie=0;Ie<ve.length;Ie++){const ct=ve[Ie];let nt=null;if(p!==null)nt=p.getViewport(ct);else{const At=f.getViewSubImage(u,ct);nt=At.viewport,Ie===0&&(e.setRenderTargetTextures(S,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(S))}let He=U[Ie];He===void 0&&(He=new fi,He.layers.enable(Ie),He.viewport=new zt,U[Ie]=He),He.matrix.fromArray(ct.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(ct.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(nt.x,nt.y,nt.width,nt.height),Ie===0&&(z.matrix.copy(He.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),je===!0&&z.cameras.push(He)}const et=r.enabledFeatures;if(et&&et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Ie=f.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(Ie,r.renderState)}if(et&&et.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ie=0;Ie<ve.length;Ie++){const ct=ve[Ie].camera;if(ct){let nt=x[ct];nt||(nt=new Q0,x[ct]=nt);const He=f.getCameraImage(ct);nt.sourceTexture=He}}}}for(let ve=0;ve<R.length;ve++){const je=C[ve],et=R[ve];je!==null&&et!==void 0&&et.update(je,we,l||o)}Ue&&Ue(he,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),m=null}const it=new ng;it.setAnimationLoop(ke),this.setAnimationLoop=function(he){Ue=he},this.dispose=function(){}}}const Vb=new Yt,cg=new ft;cg.set(-1,0,0,0,1,0,0,0,1);function Hb(n,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,eg(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function r(_,x,w,A,S){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(_,x):x.isMeshLambertMaterial?(s(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(_,x),f(_,x)):x.isMeshPhongMaterial?(s(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(_,x),u(_,x),x.isMeshPhysicalMaterial&&p(_,x,S)):x.isMeshMatcapMaterial?(s(_,x),m(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),v(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(o(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?c(_,x,w,A):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Vn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Vn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const w=e.get(x),A=w.envMap,S=w.envMapRotation;A&&(_.envMap.value=A,_.envMapRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(cg),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function o(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function c(_,x,w,A){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*w,_.scale.value=A*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function f(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function u(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function p(_,x,w){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,x){x.matcap&&(_.matcap.value=x.matcap)}function v(_,x){const w=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,R){const C=R.program;i.uniformBlockBinding(S,C)}function l(S,R){let C=r[S.id];C===void 0&&(_(S),C=h(S),r[S.id]=C,S.addEventListener("dispose",w));const N=R.program;i.updateUBOMapping(S,N);const M=e.render.frame;s[S.id]!==M&&(u(S),s[S.id]=M)}function h(S){const R=f();S.__bindingPointIndex=R;const C=n.createBuffer(),N=S.__size,M=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,N,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,C),C}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const R=r[S.id],C=S.uniforms,N=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let M=0,T=C.length;M<T;M++){const B=C[M];if(Array.isArray(B))for(let U=0,z=B.length;U<z;U++)p(B[U],M,U,N);else p(B,M,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,R,C,N){if(v(S,R,C,N)===!0){const M=S.__offset,T=S.value;if(Array.isArray(T)){let B=0;for(let U=0;U<T.length;U++){const z=T[U],D=x(z);m(z,S.__data,B),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(B+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,S.__data)}}function m(S,R,C){typeof S=="number"||typeof S=="boolean"?R[0]=S:S.isMatrix3?(R[0]=S.elements[0],R[1]=S.elements[1],R[2]=S.elements[2],R[3]=0,R[4]=S.elements[3],R[5]=S.elements[4],R[6]=S.elements[5],R[7]=0,R[8]=S.elements[6],R[9]=S.elements[7],R[10]=S.elements[8],R[11]=0):ArrayBuffer.isView(S)?R.set(new S.constructor(S.buffer,S.byteOffset,R.length)):S.toArray(R,C)}function v(S,R,C,N){const M=S.value,T=R+"_"+C;if(N[T]===void 0)return typeof M=="number"||typeof M=="boolean"?N[T]=M:ArrayBuffer.isView(M)?N[T]=M.slice():N[T]=M.clone(),!0;{const B=N[T];if(typeof M=="number"||typeof M=="boolean"){if(B!==M)return N[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(B.equals(M)===!1)return B.copy(M),!0}}return!1}function _(S){const R=S.uniforms;let C=0;const N=16;for(let T=0,B=R.length;T<B;T++){const U=Array.isArray(R[T])?R[T]:[R[T]];for(let z=0,D=U.length;z<D;z++){const H=U[z],P=Array.isArray(H.value)?H.value:[H.value];for(let O=0,F=P.length;O<F;O++){const G=P[O],Z=x(G),te=C%N,ue=te%Z.boundary,_e=te+ue;C+=ue,_e!==0&&N-_e<Z.storage&&(C+=N-_e),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=Z.storage}}}const M=C%N;return M>0&&(C+=N-M),S.__size=C,S.__cache={},this}function x(S){const R={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(R.boundary=4,R.storage=4):S.isVector2?(R.boundary=8,R.storage=8):S.isVector3||S.isColor?(R.boundary=16,R.storage=12):S.isVector4?(R.boundary=16,R.storage=16):S.isMatrix3?(R.boundary=48,R.storage=48):S.isMatrix4?(R.boundary=64,R.storage=64):S.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(R.boundary=16,R.storage=S.byteLength):st("WebGLRenderer: Unsupported uniform value type.",S),R}function w(S){const R=S.target;R.removeEventListener("dispose",w);const C=o.indexOf(R.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function A(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:A}}const Wb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function $b(){return Li===null&&(Li=new Z0(Wb,16,16,es,hr),Li.name="DFG_LUT",Li.minFilter=Tn,Li.magFilter=Tn,Li.wrapS=rr,Li.wrapT=rr,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class Xb{constructor(e={}){const{canvas:t=kx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ti}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=p,_=new Set([Ah,Th,wh]),x=new Set([ti,Ki,zo,ko,Mh,Eh]),w=new Uint32Array(4),A=new Int32Array(4),S=new W;let R=null,C=null;const N=[],M=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let U=!1,z=null,D=null,H=null,P=null;this._outputColorSpace=ci;let O=0,F=0,G=null,Z=-1,te=null;const ue=new zt,_e=new zt;let Ue=null;const ke=new _t(0);let it=0,he=t.width,we=t.height,ve=1,je=null,et=null;const tt=new zt(0,0,he,we),$t=new zt(0,0,he,we);let Ie=!1;const ct=new Lh;let nt=!1,He=!1;const At=new Yt,Ft=new W,Bt=new zt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Zt(){return G===null?ve:1}let Y=i;function mn(L,q){return t.getContext(L,q)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yh}`),t.addEventListener("webglcontextlost",Xt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),Y===null){const q="webgl2";if(Y=mn(q,L),Y===null)throw mn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw St("WebGLRenderer: "+L.message),L}let wt,k,E,j,se,ce,be,Se,fe,me,Me,Ye,De,Ee,Xe,rt,Ze,$,Te,le,Re,Ce,xe;function Ke(){wt=new $M(Y),wt.init(),Re=new Ub(Y,wt),k=new FM(Y,wt,e,Re),E=new Nb(Y,wt),k.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),D=Y.createFramebuffer(),H=Y.createFramebuffer(),P=Y.createFramebuffer(),j=new YM(Y),se=new yb,ce=new Ob(Y,wt,E,se,k,Re,j),be=new WM(B),Se=new jv(Y),Ce=new OM(Y,Se),fe=new XM(Y,Se,j,Ce),me=new ZM(Y,fe,Se,Ce,j),$=new KM(Y,k,ce),Xe=new BM(se),Me=new vb(B,be,wt,k,Ce,Xe),Ye=new Hb(B,se),De=new Mb,Ee=new Rb(wt),Ze=new NM(B,be,E,me,m,c),rt=new Lb(B,me,k),xe=new Gb(Y,j,k,E),Te=new UM(Y,wt,j),le=new qM(Y,wt,j),j.programs=Me.programs,B.capabilities=k,B.extensions=wt,B.properties=se,B.renderLists=De,B.shadowMap=rt,B.state=E,B.info=j}Ke(),v!==ti&&(T=new jM(v,t.width,t.height,a,r,s));const Ge=new kb(B,Y);this.xr=Ge,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const L=wt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=wt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(L){L!==void 0&&(ve=L,this.setSize(he,we,!1))},this.getSize=function(L){return L.set(he,we)},this.setSize=function(L,q,oe=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}he=L,we=q,t.width=Math.floor(L*ve),t.height=Math.floor(q*ve),oe===!0&&(t.style.width=L+"px",t.style.height=q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(he*ve,we*ve).floor()},this.setDrawingBufferSize=function(L,q,oe){he=L,we=q,ve=oe,t.width=Math.floor(L*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(v===ti){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(ue)},this.getViewport=function(L){return L.copy(tt)},this.setViewport=function(L,q,oe,ne){L.isVector4?tt.set(L.x,L.y,L.z,L.w):tt.set(L,q,oe,ne),E.viewport(ue.copy(tt).multiplyScalar(ve).round())},this.getScissor=function(L){return L.copy($t)},this.setScissor=function(L,q,oe,ne){L.isVector4?$t.set(L.x,L.y,L.z,L.w):$t.set(L,q,oe,ne),E.scissor(_e.copy($t).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(L){E.setScissorTest(Ie=L)},this.setOpaqueSort=function(L){je=L},this.setTransparentSort=function(L){et=L},this.getClearColor=function(L){return L.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,oe=!0){let ne=0;if(L){let re=!1;if(G!==null){const Le=G.texture.format;re=_.has(Le)}if(re){const Le=G.texture.type,ze=x.has(Le),Ne=Ze.getClearColor(),qe=Ze.getClearAlpha(),Je=Ne.r,We=Ne.g,ot=Ne.b;ze?(w[0]=Je,w[1]=We,w[2]=ot,w[3]=qe,Y.clearBufferuiv(Y.COLOR,0,w)):(A[0]=Je,A[1]=We,A[2]=ot,A[3]=qe,Y.clearBufferiv(Y.COLOR,0,A))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),z=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Xt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Ze.dispose(),De.dispose(),Ee.dispose(),se.dispose(),be.dispose(),me.dispose(),Ce.dispose(),xe.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",no),Ge.removeEventListener("sessionend",io),Zi.stop()};function Xt(L){L.preventDefault(),Rl("WebGLRenderer: Context Lost."),U=!0}function Lt(){Rl("WebGLRenderer: Context Restored."),U=!1;const L=j.autoReset,q=rt.enabled,oe=rt.autoUpdate,ne=rt.needsUpdate,re=rt.type;Ke(),j.autoReset=L,rt.enabled=q,rt.autoUpdate=oe,rt.needsUpdate=ne,rt.type=re}function Hn(L){St("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Yn(L){const q=L.target;q.removeEventListener("dispose",Yn),ss(q)}function ss(L){Ic(L),se.remove(L)}function Ic(L){const q=se.get(L).programs;q!==void 0&&(q.forEach(function(oe){Me.releaseProgram(oe)}),L.isShaderMaterial&&Me.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,oe,ne,re,Le){q===null&&(q=Rt);const ze=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ne=xr(L,q,oe,ne,re);E.setMaterial(ne,ze);let qe=oe.index,Je=1;if(ne.wireframe===!0){if(qe=fe.getWireframeAttribute(oe),qe===void 0)return;Je=2}const We=oe.drawRange,ot=oe.attributes.position;let Qe=We.start*Je,Mt=(We.start+We.count)*Je;Le!==null&&(Qe=Math.max(Qe,Le.start*Je),Mt=Math.min(Mt,(Le.start+Le.count)*Je)),qe!==null?(Qe=Math.max(Qe,0),Mt=Math.min(Mt,qe.count)):ot!=null&&(Qe=Math.max(Qe,0),Mt=Math.min(Mt,ot.count));const Kt=Mt-Qe;if(Kt<0||Kt===1/0)return;Ce.setup(re,ne,Ne,oe,qe);let qt,Nt=Te;if(qe!==null&&(qt=Se.get(qe),Nt=le,Nt.setIndex(qt)),re.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Zt()),Nt.setMode(Y.LINES)):Nt.setMode(Y.TRIANGLES);else if(re.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*Zt()),re.isLineSegments?Nt.setMode(Y.LINES):re.isLineLoop?Nt.setMode(Y.LINE_LOOP):Nt.setMode(Y.LINE_STRIP)}else re.isPoints?Nt.setMode(Y.POINTS):re.isSprite&&Nt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const rn=re._multiDrawStarts,Fe=re._multiDrawCounts,sn=re._multiDrawCount,pt=qe?Se.get(qe).bytesPerElement:1,Wn=se.get(ne).currentProgram.getUniforms();for(let ri=0;ri<sn;ri++)Wn.setValue(Y,"_gl_DrawID",ri),Nt.render(rn[ri]/pt,Fe[ri])}else if(re.isInstancedMesh)Nt.renderInstances(Qe,Kt,re.count);else if(oe.isInstancedBufferGeometry){const rn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Fe=Math.min(oe.instanceCount,rn);Nt.renderInstances(Qe,Kt,Fe)}else Nt.render(Qe,Kt)};function eo(L,q,oe){L.transparent===!0&&L.side===Ei&&L.forceSinglePass===!1?(L.side=Vn,L.needsUpdate=!0,Or(L,q,oe),L.side=Ir,L.needsUpdate=!0,Or(L,q,oe),L.side=Ei):Or(L,q,oe)}this.compile=function(L,q,oe=null){oe===null&&(oe=L),C=Ee.get(oe),C.init(q),M.push(C),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),L!==oe&&L.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),C.setupLights();const ne=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Le=re.material;if(Le)if(Array.isArray(Le))for(let ze=0;ze<Le.length;ze++){const Ne=Le[ze];eo(Ne,oe,re),ne.add(Ne)}else eo(Le,oe,re),ne.add(Le)}),C=M.pop(),ne},this.compileAsync=function(L,q,oe=null){const ne=this.compile(L,q,oe);return new Promise(re=>{function Le(){if(ne.forEach(function(ze){se.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){re(L);return}setTimeout(Le,10)}wt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let to=null;function os(L){to&&to(L)}function no(){Zi.stop()}function io(){Zi.start()}const Zi=new ng;Zi.setAnimationLoop(os),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(L){to=L,Ge.setAnimationLoop(L),L===null?Zi.stop():Zi.start()},Ge.addEventListener("sessionstart",no),Ge.addEventListener("sessionend",io),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(L,q);const oe=Ge.enabled===!0&&Ge.isPresenting===!0,ne=T!==null&&(G===null||oe)&&T.begin(B,G);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(q),q=Ge.getCamera()),L.isScene===!0&&L.onBeforeRender(B,L,q,G),C=Ee.get(L,M.length),C.init(q),C.state.textureUnits=ce.getTextureUnits(),M.push(C),At.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ct.setFromProjectionMatrix(At,ki,q.reversedDepth),He=this.localClippingEnabled,nt=Xe.init(this.clippingPlanes,He),R=De.get(L,N.length),R.init(),N.push(R),Ge.enabled===!0&&Ge.isPresenting===!0){const ze=B.xr.getDepthSensingMesh();ze!==null&&Pn(ze,q,-1/0,B.sortObjects)}Pn(L,q,0,B.sortObjects),R.finish(),B.sortObjects===!0&&R.sort(je,et,q.reversedDepth),Dt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Dt&&Ze.addToRenderList(R,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Xe.beginShadows();const re=C.state.shadowsArray;if(rt.render(re,L,q),nt===!0&&Xe.endShadows(),(ne&&T.hasRenderPass())===!1){const ze=R.opaque,Ne=R.transmissive;if(C.setupLights(),q.isArrayCamera){const qe=q.cameras;if(Ne.length>0)for(let Je=0,We=qe.length;Je<We;Je++){const ot=qe[Je];so(ze,Ne,L,ot)}Dt&&Ze.render(L);for(let Je=0,We=qe.length;Je<We;Je++){const ot=qe[Je];ro(R,L,ot,ot.viewport)}}else Ne.length>0&&so(ze,Ne,L,q),Dt&&Ze.render(L),ro(R,L,q)}G!==null&&F===0&&(ce.updateMultisampleRenderTarget(G),ce.updateRenderTargetMipmap(G)),ne&&T.end(B),L.isScene===!0&&L.onAfterRender(B,L,q),Ce.resetDefaultState(),Z=-1,te=null,M.pop(),M.length>0?(C=M[M.length-1],ce.setTextureUnits(C.state.textureUnits),nt===!0&&Xe.setGlobalState(B.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?R=N[N.length-1]:R=null,z!==null&&z.renderEnd()};function Pn(L,q,oe,ne){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLightProbeGrid)C.pushLightProbeGrid(L);else if(L.isLight)C.pushLight(L),L.castShadow&&C.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ct.intersectsSprite(L)){ne&&Bt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(At);const ze=me.update(L),Ne=L.material;Ne.visible&&R.push(L,ze,Ne,oe,Bt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ct.intersectsObject(L))){const ze=me.update(L),Ne=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Bt.copy(L.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Bt.copy(ze.boundingSphere.center)),Bt.applyMatrix4(L.matrixWorld).applyMatrix4(At)),Array.isArray(Ne)){const qe=ze.groups;for(let Je=0,We=qe.length;Je<We;Je++){const ot=qe[Je],Qe=Ne[ot.materialIndex];Qe&&Qe.visible&&R.push(L,ze,Qe,oe,Bt.z,ot)}}else Ne.visible&&R.push(L,ze,Ne,oe,Bt.z,null)}}const Le=L.children;for(let ze=0,Ne=Le.length;ze<Ne;ze++)Pn(Le[ze],q,oe,ne)}function ro(L,q,oe,ne){const{opaque:re,transmissive:Le,transparent:ze}=L;C.setupLightsView(oe),nt===!0&&Xe.setGlobalState(B.clippingPlanes,oe),ne&&E.viewport(ue.copy(ne)),re.length>0&&Gn(re,q,oe),Le.length>0&&Gn(Le,q,oe),ze.length>0&&Gn(ze,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function so(L,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[ne.id]===void 0){const Qe=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:Qe?hr:ti,minFilter:qr,samples:Math.max(4,k.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Le=C.state.transmissionRenderTarget[ne.id],ze=ne.viewport||ue;Le.setSize(ze.z*B.transmissionResolutionScale,ze.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),qe=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Le),B.getClearColor(ke),it=B.getClearAlpha(),it<1&&B.setClearColor(16777215,.5),B.clear(),Dt&&Ze.render(oe);const We=B.toneMapping;B.toneMapping=Gi;const ot=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),C.setupLightsView(ne),nt===!0&&Xe.setGlobalState(B.clippingPlanes,ne),Gn(L,oe,ne),ce.updateMultisampleRenderTarget(Le),ce.updateRenderTargetMipmap(Le),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Mt=0,Kt=q.length;Mt<Kt;Mt++){const qt=q[Mt],{object:Nt,geometry:rn,material:Fe,group:sn}=qt;if(Fe.side===Ei&&Nt.layers.test(ne.layers)){const pt=Fe.side;Fe.side=Vn,Fe.needsUpdate=!0,oo(Nt,oe,ne,rn,Fe,sn),Fe.side=pt,Fe.needsUpdate=!0,Qe=!0}}Qe===!0&&(ce.updateMultisampleRenderTarget(Le),ce.updateRenderTargetMipmap(Le))}B.setRenderTarget(Ne,qe,Je),B.setClearColor(ke,it),ot!==void 0&&(ne.viewport=ot),B.toneMapping=We}function Gn(L,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Le=L.length;re<Le;re++){const ze=L[re],{object:Ne,geometry:qe,group:Je}=ze;let We=ze.material;We.allowOverride===!0&&ne!==null&&(We=ne),Ne.layers.test(oe.layers)&&oo(Ne,q,oe,qe,We,Je)}}function oo(L,q,oe,ne,re,Le){L.onBeforeRender(B,q,oe,ne,re,Le),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(B,q,oe,ne,L,Le),re.transparent===!0&&re.side===Ei&&re.forceSinglePass===!1?(re.side=Vn,re.needsUpdate=!0,B.renderBufferDirect(oe,q,ne,re,L,Le),re.side=Ir,re.needsUpdate=!0,B.renderBufferDirect(oe,q,ne,re,L,Le),re.side=Ei):B.renderBufferDirect(oe,q,ne,re,L,Le),L.onAfterRender(B,q,oe,ne,re,Le)}function Or(L,q,oe){q.isScene!==!0&&(q=Rt);const ne=se.get(L),re=C.state.lights,Le=C.state.shadowsArray,ze=re.state.version,Ne=Me.getParameters(L,re.state,Le,q,oe,C.state.lightProbeGridArray),qe=Me.getProgramCacheKey(Ne);let Je=ne.programs;ne.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const We=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ne.envMap=be.get(L.envMap||ne.environment,We),ne.envMapRotation=ne.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",Yn),Je=new Map,ne.programs=Je);let ot=Je.get(qe);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===ze)return ao(L,Ne),ot}else Ne.uniforms=Me.getUniforms(L),z!==null&&L.isNodeMaterial&&z.build(L,oe,Ne),L.onBeforeCompile(Ne,B),ot=Me.acquireProgram(Ne,qe),Je.set(qe,ot),ne.uniforms=Ne.uniforms;const Qe=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=Xe.uniform),ao(L,Ne),ne.needsLights=Dc(L),ne.lightsStateVersion=ze,ne.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.lightProbeGrid=C.state.lightProbeGridArray.length>0,ne.currentProgram=ot,ne.uniformsList=null,ot}function Ji(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=dl.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function ao(L,q){const oe=se.get(L);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function oa(L,q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;S.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ne=L.length;oe<ne;oe++){const re=L[oe];if(re.texture!==null&&re.boundingBox.containsPoint(S))return re}return null}function xr(L,q,oe,ne,re){q.isScene!==!0&&(q=Rt),ce.resetTextureUnits();const Le=q.fog,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ne=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=be.get(ne.envMap||ze,qe),We=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,Kt=!!oe.morphAttributes.color;let qt=Gi;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(qt=B.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,rn=Nt!==void 0?Nt.length:0,Fe=se.get(ne),sn=C.state.lights;if(nt===!0&&(He===!0||L!==te)){const Et=L===te&&ne.id===Z;Xe.setState(ne,L,Et)}let pt=!1;ne.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==sn.state.version||Fe.outputColorSpace!==Ne||re.isBatchedMesh&&Fe.batching===!1||!re.isBatchedMesh&&Fe.batching===!0||re.isBatchedMesh&&Fe.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Fe.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Fe.instancing===!1||!re.isInstancedMesh&&Fe.instancing===!0||re.isSkinnedMesh&&Fe.skinning===!1||!re.isSkinnedMesh&&Fe.skinning===!0||re.isInstancedMesh&&Fe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Fe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Fe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Fe.instancingMorph===!1&&re.morphTexture!==null||Fe.envMap!==Je||ne.fog===!0&&Fe.fog!==Le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Xe.numPlanes||Fe.numIntersection!==Xe.numIntersection)||Fe.vertexAlphas!==We||Fe.vertexTangents!==ot||Fe.morphTargets!==Qe||Fe.morphNormals!==Mt||Fe.morphColors!==Kt||Fe.toneMapping!==qt||Fe.morphTargetsCount!==rn||!!Fe.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Fe.__version=ne.version);let Wn=Fe.currentProgram;pt===!0&&(Wn=Or(ne,q,re),z&&ne.isNodeMaterial&&z.onUpdateProgram(ne,Wn,Fe));let ri=!1,Pi=!1,gn=!1;const gt=Wn.getUniforms(),Ct=Fe.uniforms;if(E.useProgram(Wn.program)&&(ri=!0,Pi=!0,gn=!0),ne.id!==Z&&(Z=ne.id,Pi=!0),Fe.needsLights){const Et=oa(C.state.lightProbeGridArray,re);Fe.lightProbeGrid!==Et&&(Fe.lightProbeGrid=Et,Pi=!0)}if(ri||te!==L){E.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),gt.setValue(Y,"projectionMatrix",L.projectionMatrix),gt.setValue(Y,"viewMatrix",L.matrixWorldInverse);const Dn=gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(Y,Ft.setFromMatrixPosition(L.matrixWorld)),k.logarithmicDepthBuffer&&gt.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&gt.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),te!==L&&(te=L,Pi=!0,gn=!0)}if(Fe.needsLights&&(sn.state.directionalShadowMap.length>0&&gt.setValue(Y,"directionalShadowMap",sn.state.directionalShadowMap,ce),sn.state.spotShadowMap.length>0&&gt.setValue(Y,"spotShadowMap",sn.state.spotShadowMap,ce),sn.state.pointShadowMap.length>0&&gt.setValue(Y,"pointShadowMap",sn.state.pointShadowMap,ce)),re.isSkinnedMesh){gt.setOptional(Y,re,"bindMatrix"),gt.setOptional(Y,re,"bindMatrixInverse");const Et=re.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),gt.setValue(Y,"boneTexture",Et.boneTexture,ce))}re.isBatchedMesh&&(gt.setOptional(Y,re,"batchingTexture"),gt.setValue(Y,"batchingTexture",re._matricesTexture,ce),gt.setOptional(Y,re,"batchingIdTexture"),gt.setValue(Y,"batchingIdTexture",re._indirectTexture,ce),gt.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&gt.setValue(Y,"batchingColorTexture",re._colorsTexture,ce));const In=oe.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&$.update(re,oe,Wn),(Pi||Fe.receiveShadow!==re.receiveShadow)&&(Fe.receiveShadow=re.receiveShadow,gt.setValue(Y,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Ct.envMapIntensity.value=q.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=$b()),Pi){if(gt.setValue(Y,"toneMappingExposure",B.toneMappingExposure),Fe.needsLights&&mi(Ct,gn),Le&&ne.fog===!0&&Ye.refreshFogUniforms(Ct,Le),Ye.refreshMaterialUniforms(Ct,ne,ve,we,C.state.transmissionRenderTarget[L.id]),Fe.needsLights&&Fe.lightProbeGrid){const Et=Fe.lightProbeGrid;Ct.probesSH.value=Et.texture,Ct.probesMin.value.copy(Et.boundingBox.min),Ct.probesMax.value.copy(Et.boundingBox.max),Ct.probesResolution.value.copy(Et.resolution)}dl.upload(Y,Ji(Fe),Ct,ce)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(dl.upload(Y,Ji(Fe),Ct,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&gt.setValue(Y,"center",re.center),gt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),gt.setValue(Y,"normalMatrix",re.normalMatrix),gt.setValue(Y,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const Et=ne.uniformsGroups;for(let Dn=0,gi=Et.length;Dn<gi;Dn++){const I=Et[Dn];xe.update(I,Wn),xe.bind(I,Wn)}}return Wn}function mi(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Dc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(L,q,oe){const ne=se.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(L.texture).__webglTexture=q,se.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){const oe=se.get(L);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,oe=0){G=L,O=q,F=oe;let ne=null,re=!1,Le=!1;if(L){const Ne=se.get(L);if(Ne.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ne.__webglFramebuffer),ue.copy(L.viewport),_e.copy(L.scissor),Ue=L.scissorTest,E.viewport(ue),E.scissor(_e),E.setScissorTest(Ue),Z=-1;return}else if(Ne.__webglFramebuffer===void 0)ce.setupRenderTarget(L);else if(Ne.__hasExternalTextures)ce.rebindTextures(L,se.get(L.texture).__webglTexture,se.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const We=L.depthTexture;if(Ne.__boundDepthTexture!==We){if(We!==null&&se.has(We)&&(L.width!==We.image.width||L.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(L)}}const qe=L.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Je=se.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ne=Je[q][oe]:ne=Je[q],re=!0):L.samples>0&&ce.useMultisampledRTT(L)===!1?ne=se.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[oe]:ne=Je,ue.copy(L.viewport),_e.copy(L.scissor),Ue=L.scissorTest}else ue.copy(tt).multiplyScalar(ve).floor(),_e.copy($t).multiplyScalar(ve).floor(),Ue=Ie;if(oe!==0&&(ne=D),E.bindFramebuffer(Y.FRAMEBUFFER,ne)&&E.drawBuffers(L,ne),E.viewport(ue),E.scissor(_e),E.setScissorTest(Ue),re){const Ne=se.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,oe)}else if(Le){const Ne=q;for(let qe=0;qe<L.textures.length;qe++){const Je=se.get(L.textures[qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+qe,Je.__webglTexture,oe,Ne)}}else if(L!==null&&oe!==0){const Ne=se.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ne.__webglTexture,oe)}Z=-1},this.readRenderTargetPixels=function(L,q,oe,ne,re,Le,ze,Ne=0){if(!(L&&L.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=se.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe){E.bindFramebuffer(Y.FRAMEBUFFER,qe);try{const Je=L.textures[Ne],We=Je.format,ot=Je.type;if(L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!k.textureFormatReadable(We)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(ot)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-ne&&oe>=0&&oe<=L.height-re&&Y.readPixels(q,oe,ne,re,Re.convert(We),Re.convert(ot),Le)}finally{const Je=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,q,oe,ne,re,Le,ze,Ne=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=se.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ze!==void 0&&(qe=qe[ze]),qe)if(q>=0&&q<=L.width-ne&&oe>=0&&oe<=L.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,qe);const Je=L.textures[Ne],We=Je.format,ot=Je.type;if(L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!k.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Le.byteLength,Y.STREAM_READ),Y.readPixels(q,oe,ne,re,Re.convert(We),Re.convert(ot),0);const Mt=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Mt);const Kt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Vx(Y,Kt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Le),Y.deleteBuffer(Qe),Y.deleteSync(Kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,oe=0){const ne=Math.pow(2,-oe),re=Math.floor(L.image.width*ne),Le=Math.floor(L.image.height*ne),ze=q!==null?q.x:0,Ne=q!==null?q.y:0;ce.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,ze,Ne,re,Le),E.unbindTexture()},this.copyTextureToTexture=function(L,q,oe=null,ne=null,re=0,Le=0){let ze,Ne,qe,Je,We,ot,Qe,Mt,Kt;const qt=L.isCompressedTexture?L.mipmaps[Le]:L.image;if(oe!==null)ze=oe.max.x-oe.min.x,Ne=oe.max.y-oe.min.y,qe=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,We=oe.min.y,ot=oe.isBox3?oe.min.z:0;else{const Ct=Math.pow(2,-re);ze=Math.floor(qt.width*Ct),Ne=Math.floor(qt.height*Ct),L.isDataArrayTexture?qe=qt.depth:L.isData3DTexture?qe=Math.floor(qt.depth*Ct):qe=1,Je=0,We=0,ot=0}ne!==null?(Qe=ne.x,Mt=ne.y,Kt=ne.z):(Qe=0,Mt=0,Kt=0);const Nt=Re.convert(q.format),rn=Re.convert(q.type);let Fe;q.isData3DTexture?(ce.setTexture3D(q,0),Fe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),Fe=Y.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),Fe=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const sn=E.getParameter(Y.UNPACK_ROW_LENGTH),pt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ri=E.getParameter(Y.UNPACK_SKIP_ROWS),Pi=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,qt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,qt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(Y.UNPACK_SKIP_ROWS,We),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,ot);const gn=L.isDataArrayTexture||L.isData3DTexture,gt=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){const Ct=se.get(L),In=se.get(q),Et=se.get(Ct.__renderTarget),Dn=se.get(In.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Et.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let gi=0;gi<qe;gi++)gn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(L).__webglTexture,re,ot+gi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(q).__webglTexture,Le,Kt+gi)),Y.blitFramebuffer(Je,We,ze,Ne,Qe,Mt,ze,Ne,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||L.isRenderTargetTexture||se.has(L)){const Ct=se.get(L),In=se.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,H),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,P);for(let Et=0;Et<qe;Et++)gn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ct.__webglTexture,re,ot+Et):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ct.__webglTexture,re),gt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,In.__webglTexture,Le,Kt+Et):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,In.__webglTexture,Le),re!==0?Y.blitFramebuffer(Je,We,ze,Ne,Qe,Mt,ze,Ne,Y.COLOR_BUFFER_BIT,Y.NEAREST):gt?Y.copyTexSubImage3D(Fe,Le,Qe,Mt,Kt+Et,Je,We,ze,Ne):Y.copyTexSubImage2D(Fe,Le,Qe,Mt,Je,We,ze,Ne);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else gt?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(Fe,Le,Qe,Mt,Kt,ze,Ne,qe,Nt,rn,qt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Fe,Le,Qe,Mt,Kt,ze,Ne,qe,Nt,qt.data):Y.texSubImage3D(Fe,Le,Qe,Mt,Kt,ze,Ne,qe,Nt,rn,qt):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Le,Qe,Mt,ze,Ne,Nt,rn,qt.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Le,Qe,Mt,qt.width,qt.height,Nt,qt.data):Y.texSubImage2D(Y.TEXTURE_2D,Le,Qe,Mt,ze,Ne,Nt,rn,qt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,sn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ri),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Pi),Le===0&&q.generateMipmaps&&Y.generateMipmap(Fe),E.unbindTexture()},this.initRenderTarget=function(L){se.get(L).__webglFramebuffer===void 0&&ce.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ce.setTextureCube(L,0):L.isData3DTexture?ce.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ce.setTexture2DArray(L,0):ce.setTexture2D(L,0),E.unbindTexture()},this.resetState=function(){O=0,F=0,G=null,E.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Nu=100,fg=6371,ug=1800,Ou={relaxed:{name:"Relaxed",worldSpeedScale:1200},normal:{name:"Normal",worldSpeedScale:1800},fast:{name:"Fast",worldSpeedScale:2700}},Ws=400,Bh=1600,qb=400,Yb=45,Kb=40,Zb=60,Jb=500,hg=3,jb=1.5,Qb=4,gp="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",_p=20,e1=1,t1=6,n1=120,i1=700,zh=2,r1={kids:{continent:10,compass:20,outline:35},normal:{continent:15,compass:30,outline:45},expert:{continent:20,compass:-1,outline:40}};function s1(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function o1(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!xp(n[0])||!xp(n[1]))throw new Error("coordinates must contain numbers");return s1({type:"Point",coordinates:n},e,t)}function xp(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function dg(n,e,t){if(n!==null)for(var i,r,s,o,a,c,l,h=0,f=0,u,p=n.type,m=p==="FeatureCollection",v=p==="Feature",_=m?n.features.length:1,x=0;x<_;x++){l=m?n.features[x].geometry:v?n.geometry:n,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1;for(var w=0;w<a;w++){var A=0,S=0;if(o=u?l.geometries[w]:l,o!==null){c=o.coordinates;var R=o.type;switch(h=0,R){case null:break;case"Point":if(e(c,f,x,A,S)===!1)return!1;f++,A++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],f,x,A,S)===!1)return!1;f++,R==="MultiPoint"&&A++}R==="LineString"&&A++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-h;r++){if(e(c[i][r],f,x,A,S)===!1)return!1;f++}R==="MultiLineString"&&A++,R==="Polygon"&&S++}R==="Polygon"&&A++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(S=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-h;s++){if(e(c[i][r][s],f,x,A,S)===!1)return!1;f++}S++}A++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(dg(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function a1(n,e={}){if(n.bbox!=null&&e.recompute!==!0)return n.bbox;const t=[1/0,1/0,-1/0,-1/0];return dg(n,i=>{t[0]>i[0]&&(t[0]=i[0]),t[1]>i[1]&&(t[1]=i[1]),t[2]<i[0]&&(t[2]=i[0]),t[3]<i[1]&&(t[3]=i[1])}),t}var l1=a1;const cr=11102230246251565e-32,En=134217729,c1=(3+8*cr)*cr;function gf(n,e,t,i,r){let s,o,a,c,l=e[0],h=i[0],f=0,u=0;h>l==h>-l?(s=l,l=e[++f]):(s=h,h=i[++u]);let p=0;if(f<n&&u<t)for(h>l==h>-l?(o=l+s,a=s-(o-l),l=e[++f]):(o=h+s,a=s-(o-h),h=i[++u]),s=o,a!==0&&(r[p++]=a);f<n&&u<t;)h>l==h>-l?(o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f]):(o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u]),s=o,a!==0&&(r[p++]=a);for(;f<n;)o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f],s=o,a!==0&&(r[p++]=a);for(;u<t;)o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u],s=o,a!==0&&(r[p++]=a);return(s!==0||p===0)&&(r[p++]=s),p}function f1(n,e){let t=e[0];for(let i=1;i<n;i++)t+=e[i];return t}function ta(n){return new Float64Array(n)}const u1=(3+16*cr)*cr,h1=(2+12*cr)*cr,d1=(9+64*cr)*cr*cr,As=ta(4),vp=ta(8),yp=ta(12),Sp=ta(16),On=ta(4);function p1(n,e,t,i,r,s,o){let a,c,l,h,f,u,p,m,v,_,x,w,A,S,R,C,N,M;const T=n-r,B=t-r,U=e-s,z=i-s;S=T*z,u=En*T,p=u-(u-T),m=T-p,u=En*z,v=u-(u-z),_=z-v,R=m*_-(S-p*v-m*v-p*_),C=U*B,u=En*U,p=u-(u-U),m=U-p,u=En*B,v=u-(u-B),_=B-v,N=m*_-(C-p*v-m*v-p*_),x=R-N,f=R-x,As[0]=R-(x+f)+(f-N),w=S+x,f=w-S,A=S-(w-f)+(x-f),x=A-C,f=A-x,As[1]=A-(x+f)+(f-C),M=w+x,f=M-w,As[2]=w-(M-f)+(x-f),As[3]=M;let D=f1(4,As),H=h1*o;if(D>=H||-D>=H||(f=n-T,a=n-(T+f)+(f-r),f=t-B,l=t-(B+f)+(f-r),f=e-U,c=e-(U+f)+(f-s),f=i-z,h=i-(z+f)+(f-s),a===0&&c===0&&l===0&&h===0)||(H=d1*o+c1*Math.abs(D),D+=T*h+z*a-(U*l+B*c),D>=H||-D>=H))return D;S=a*z,u=En*a,p=u-(u-a),m=a-p,u=En*z,v=u-(u-z),_=z-v,R=m*_-(S-p*v-m*v-p*_),C=c*B,u=En*c,p=u-(u-c),m=c-p,u=En*B,v=u-(u-B),_=B-v,N=m*_-(C-p*v-m*v-p*_),x=R-N,f=R-x,On[0]=R-(x+f)+(f-N),w=S+x,f=w-S,A=S-(w-f)+(x-f),x=A-C,f=A-x,On[1]=A-(x+f)+(f-C),M=w+x,f=M-w,On[2]=w-(M-f)+(x-f),On[3]=M;const P=gf(4,As,4,On,vp);S=T*h,u=En*T,p=u-(u-T),m=T-p,u=En*h,v=u-(u-h),_=h-v,R=m*_-(S-p*v-m*v-p*_),C=U*l,u=En*U,p=u-(u-U),m=U-p,u=En*l,v=u-(u-l),_=l-v,N=m*_-(C-p*v-m*v-p*_),x=R-N,f=R-x,On[0]=R-(x+f)+(f-N),w=S+x,f=w-S,A=S-(w-f)+(x-f),x=A-C,f=A-x,On[1]=A-(x+f)+(f-C),M=w+x,f=M-w,On[2]=w-(M-f)+(x-f),On[3]=M;const O=gf(P,vp,4,On,yp);S=a*h,u=En*a,p=u-(u-a),m=a-p,u=En*h,v=u-(u-h),_=h-v,R=m*_-(S-p*v-m*v-p*_),C=c*l,u=En*c,p=u-(u-c),m=c-p,u=En*l,v=u-(u-l),_=l-v,N=m*_-(C-p*v-m*v-p*_),x=R-N,f=R-x,On[0]=R-(x+f)+(f-N),w=S+x,f=w-S,A=S-(w-f)+(x-f),x=A-C,f=A-x,On[1]=A-(x+f)+(f-C),M=w+x,f=M-w,On[2]=w-(M-f)+(x-f),On[3]=M;const F=gf(O,yp,4,On,Sp);return Sp[F-1]}function Io(n,e,t,i,r,s){const o=(e-s)*(t-r),a=(n-r)*(i-s),c=o-a,l=Math.abs(o+a);return Math.abs(c)>=u1*l?c:-p1(n,e,t,i,r,s,l)}function m1(n,e){var t,i,r=0,s,o,a,c,l,h,f,u=n[0],p=n[1],m=e.length;for(t=0;t<m;t++){i=0;var v=e[t],_=v.length-1;if(h=v[0],h[0]!==v[_][0]&&h[1]!==v[_][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-u,a=h[1]-p,i;i<_;i++){if(f=v[i+1],c=f[0]-u,l=f[1]-p,a===0&&l===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(l>=0&&a<=0||l<=0&&a>=0){if(s=Io(o,c,a,l,0,0),s===0)return 0;(s>0&&l>0&&a<=0||s<0&&l<=0&&a>0)&&r++}h=f,a=l,o=c}}return r%2!==0}function g1(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return[...n.geometry.coordinates];if(n.type==="Point")return[...n.coordinates]}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return[...n];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function _1(n){return n.type==="Feature"?n.geometry:n}function x1(n,e,t={}){if(!n)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=g1(n),r=_1(e),s=r.type,o=e.bbox;let a=r.coordinates;if(o&&v1(i,o)===!1)return!1;s==="Polygon"&&(a=[a]);let c=!1;for(var l=0;l<a.length;++l){const h=m1(i,a[l]);if(h===0)return!t.ignoreBoundary;h&&(c=!0)}return c}function v1(n,e){return e[0]<=n[0]&&e[1]<=n[1]&&e[2]>=n[0]&&e[3]>=n[1]}var pg=x1;function y1(n){const e=n.features.map(t=>({id:t.properties.id,box:l1(t),feature:t}));return{findCountryAt(t,i){const r=o1([i,t]);for(const{id:s,box:o,feature:a}of e)if(!(i<o[0]||i>o[2]||t<o[1]||t>o[3])&&pg(r,a))return s;return null}}}function S1(n){let e=0,t=0;for(let r=0;r<n.length-1;r++){const s=n[r],o=n[r+1];e+=s[0]*o[1]-o[0]*s[1],t+=s[1]}const i=t/Math.max(1,n.length-1);return Math.abs(e)*Math.cos(i*Math.PI/180)}function M1(n){const e=n.type==="Polygon"?[n.coordinates]:n.coordinates;let t=null,i=-1;for(const c of e){const l=c[0];if(!l)continue;const h=S1(l);h>i&&(i=h,t=l)}if(!t)throw new Error("geometry has no rings");let r=1/0,s=-1/0,o=1/0,a=-1/0;for(const c of t)r=Math.min(r,c[0]),s=Math.max(s,c[0]),o=Math.min(o,c[1]),a=Math.max(a,c[1]);return{lat:(o+a)/2,lon:(r+s)/2,widthDeg:s-r}}const Xr=Math.PI/180;function E1(n){return(n+540)%360-180}function Mc(n,e,t,i){const r=i/fg,s=t*Xr,o=n*Xr,a=e*Xr,c=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),l=Math.asin(c),h=a+Math.atan2(Math.sin(s)*Math.sin(r)*Math.cos(o),Math.cos(r)-Math.sin(o)*c);return{lat:l/Xr,lon:E1(h/Xr)}}function ui(n,e,t){const i=Nu*(1+t/fg),r=n*Xr,s=e*Xr;return{x:i*Math.cos(r)*Math.sin(s),y:i*Math.sin(r),z:i*Math.cos(r)*Math.cos(s)}}const yo=(n,e,t)=>Math.min(t,Math.max(e,n)),kh={speedScale:1,turnScale:1,climbScale:1},Ps={seaplane:{name:"Seaplane",blurb:"Balanced all-rounder",emoji:"🛩️",tuning:kh},stunt:{name:"Stunt Plane",blurb:"Nippy turns, lower top speed",emoji:"🎪",tuning:{speedScale:.9,turnScale:1.3,climbScale:1.15}},jet:{name:"Jet",blurb:"Fast in a straight line, wide turns",emoji:"🚀",tuning:{speedScale:1.2,turnScale:.75,climbScale:1}},lifter:{name:"Cargo Lifter",blurb:"Steady climber, a little sluggish",emoji:"📦",tuning:{speedScale:.95,turnScale:.9,climbScale:1.25}}};function b1(){return{lat:48.8566,lon:2.3522,altKm:200,headingDeg:270,speedKmh:800}}function w1(n,e,t,i=kh,r=ug){const s=yo(e.throttle,-1,1),o=yo(e.turn,-1,1),a=yo(e.pitch,-1,1),c=yo(n.speedKmh+s*qb*t,Ws,Bh*i.speedScale),l=(n.headingDeg+o*Yb*i.turnScale*t+360)%360,h=yo(n.altKm+a*Kb*i.climbScale*t,Zb,Jb),f=c/3600*r*t,u=Mc(n.lat,n.lon,l,f);return{lat:u.lat,lon:u.lon,altKm:h,headingDeg:l,speedKmh:c}}const Rr=Math.PI/180;function Go(n,e,t,i){const r=n*Rr,s=t*Rr,o=(i-e)*Rr;return Math.acos(Math.min(1,Math.max(-1,Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(o))))/Rr}function T1(n,e,t){const i=(e-n+540)%360-180;return(n+i*t+360)%360}function mg(n,e,t,i){const r=n*Rr,s=t*Rr,o=(i-e)*Rr,a=Math.sin(o)*Math.cos(s),c=Math.cos(r)*Math.sin(s)-Math.sin(r)*Math.cos(s)*Math.cos(o);return(Math.atan2(a,c)/Rr+360)%360}function A1(n=Math.random){let e="";for(let t=0;t<Qb;t++){const i=Math.floor(n()*gp.length);e+=gp[i]??"A"}return e}function Uu(n,e){const t=r1[e],i=r=>r>=0&&n>=r;return{continent:i(t.continent),compass:i(t.compass),outline:i(t.outline)}}function gg(n,e,t,i){if(!(Go(n.lat,n.lon,e.zone.lat,e.zone.lon)<=hg))return{complete:!1,dwellS:0,inZone:!1,requirementBlocked:!1};switch(e.type){case"refuel":{const s=t+i;return{complete:s>=zh,dwellS:s,inZone:!0,requirementBlocked:!1}}case"delivery":{const s=n.altKm<=n1;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}case"vip":{const s=n.speedKmh<=i1;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}default:return{complete:!0,dwellS:0,inZone:!0,requirementBlocked:!1}}}function R1(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const C1={kids:["easy"],normal:["easy","normal"],expert:["easy","normal","hard"]},P1=["refuel","photo","riddle","vip"];function Ba(n,e){const t=n[Math.floor(e()*n.length)];if(t===void 0)throw new Error("pick() from empty list");return t}function I1(n,e,t){switch(n){case"pickup":return{label:`Pick up cargo in ${e.name}`,sublabel:"Fly through the beacon to skyhook the crate"};case"refuel":return{label:`Refuel in ${e.name}`,sublabel:"Hold inside the zone for 2 seconds to skim the fuel strip"};case"delivery":return{label:`Deliver the cargo to ${e.name}`,sublabel:"Fly LOW through the beacon to parachute-drop the crate"};case"vip":return{label:`Fly the VIP to ${e.name}`,sublabel:"Arrive gently — under 700 km/h — or they complain"};case"riddle":return{label:`Fly to ${t??"the mystery country"}`,sublabel:"Solve the riddle — which country is it?"};case"photo":return{label:"",sublabel:""}}}function D1(n,e,t,i){const r=Math.min(t1,Math.max(e1,i.legCount)),s=R1(i.seed),o=C1[i.difficulty],a=Object.values(n).filter(m=>m.playable&&o.includes(m.tier)).sort((m,v)=>m.id.localeCompare(v.id));if(a.length<r)throw new Error("Not enough countries for contract");const c=[];for(let m=0;m<r;m++)m===0?c.push("pickup"):m===r-1?c.push("delivery"):c.push(Ba(P1,s));const l=new Set,h=new Set,f=[];let u=null,p=null;for(const m of c){let v=m,_=null;if(v==="photo"){const R=e.filter(C=>!h.has(C.name)&&n[C.countryId]!==void 0&&!l.has(C.countryId)&&(u===null||Go(u.lat,u.lon,C.lat,C.lon)>=_p));R.length>0?(_=Ba(R,s),h.add(_.name)):v="riddle"}let x;if(_){const R=n[_.countryId];if(!R)throw new Error(`Landmark country missing: ${_.countryId}`);x=R}else{const R=a.filter(T=>!l.has(T.id)),C=u?R.filter(T=>Go(u.lat,u.lon,T.capital.lat,T.capital.lon)>=_p):R,N=C.length>0?C:R,M=N.filter(T=>T.continent!==p);x=Ba(M.length>0?M:N,s)}l.add(x.id);const w=_?{lat:_.lat,lon:_.lon}:{lat:x.capital.lat,lon:x.capital.lon};let A,S;if(v==="photo"&&_)A=`Photograph ${_.name}`,S=`Fly through the camera ring in ${x.name}`;else{const R=v==="riddle"?(t[x.id]?Ba([...t[x.id]],s):null)??`the country whose capital is ${x.capital.name}`:null;({label:A,sublabel:S}=I1(v,x,R))}f.push({type:v,countryId:x.id,zone:w,label:A,sublabel:S}),u=w,p=x.continent}return{seed:i.seed,difficulty:i.difficulty,legs:f}}function _g(n,e){return e.type!=="refuel"?null:Go(n.lat,n.lon,e.zone.lat,e.zone.lon)<=hg?Ws:null}function pl(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function L1(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function xg(n){let e,t,i;n.length!==2?(e=pl,t=(a,c)=>pl(n(a),c),i=(a,c)=>n(a)-c):(e=n===pl||n===L1?n:N1,t=n,i=n);function r(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function o(a,c,l=0,h=a.length){const f=r(a,c,l,h-1);return f>l&&i(a[f-1],c)>-i(a[f],c)?f-1:f}return{left:r,center:o,right:s}}function N1(){return 0}function O1(n){return n===null?NaN:+n}const U1=xg(pl),F1=U1.right;xg(O1).center;function Ll(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)))}return[t,i]}class fr{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(t[i++]=a),e=o}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,o=0;if(t>0){for(o=e[--t];t>0&&(i=o,r=e[--t],o=i+r,s=r-(o-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}const B1=Math.sqrt(50),z1=Math.sqrt(10),k1=Math.sqrt(2);function Nl(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=B1?10:s>=z1?5:s>=k1?2:1;let a,c,l;return r<0?(l=Math.pow(10,-r)/o,a=Math.round(n*l),c=Math.round(e*l),a/l<n&&++a,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*o,a=Math.round(n/l),c=Math.round(e/l),a*l<n&&++a,c*l>e&&--c),c<a&&.5<=t&&t<2?Nl(n,e,t*2):[a,c,l]}function V1(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,o]=i?Nl(e,n,t):Nl(n,e,t);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(i)if(o<0)for(let l=0;l<a;++l)c[l]=(s-l)/-o;else for(let l=0;l<a;++l)c[l]=(s-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(r+l)/-o;else for(let l=0;l<a;++l)c[l]=(r+l)*o;return c}function Fu(n,e,t){return e=+e,n=+n,t=+t,Nl(n,e,t)[2]}function H1(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?Fu(e,n,t):Fu(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function G1(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(s=+s)>=s&&(++t,i+=s)}if(t)return i/t}function*W1(n){for(const e of n)yield*e}function Wo(n){return Array.from(W1(n))}const $o=new Set;let Bu=!1;function $1(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;$o.size&&$o.clear();let s=vg(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a=0,c=0,l=0;if(i&&(s=Z1(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<r;u+=t){const p=n[u],m=n[u+1];p<a&&(a=p),m<c&&(c=m),p>h&&(h=p),m>f&&(f=m)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return zu(s,o,a,c,l),o}function vg(n,e,t,i,r){let s=null;if(r===cw(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=bp(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=bp(o/i|0,n[o],n[o+1],s);return s&&Xo(s,s.next)&&(Yo(s),s=s.next),s}function ns(n,e=n){const t=e===n;let i=n,r;do r=!1,i!==i.next&&($o.size===0||!$o.has(i))&&(Xo(i,i.next)||an(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),Bu=!0,Yo(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function zu(n,e,t,i,r){r&&iw(n,t,i,r);let s=n,o=!1;for(;n.prev!==n.next;){const a=n.prev,c=n.next;if(an(a,n,c)<0&&(r?q1(n,t,i,r):X1(n))){e.push(a.i,n.i,c.i),Yo(n),n=c,s=c;continue}if(n=c,n===s){if(Bu=!1,n=ns(n),Bu){s=n;continue}if(!o){n=Y1(n,e),s=n,o=!0;continue}K1(n,e,t,i,r);break}}}function X1(n){const e=n.prev,t=n,i=n.next,r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),p=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=p&&!(r===m.x&&a===m.y)&&Ul(r,a,s,c,o,l,m.x,m.y)&&an(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function q1(n,e,t,i){const r=n.prev,s=n,o=n.next,a=r.x,c=s.x,l=o.x,h=r.y,f=s.y,u=o.y,p=Math.min(a,c,l),m=Math.min(h,f,u),v=Math.max(a,c,l),_=Math.max(h,f,u),x=Gu(p,m,e,t,i),w=Gu(v,_,e,t,i);let A=n.prevZ;for(;A&&A.z>=x;){if(A.x>=p&&A.x<=v&&A.y>=m&&A.y<=_&&A!==o&&!(a===A.x&&h===A.y)&&Ul(a,h,c,f,l,u,A.x,A.y)&&an(A.prev,A,A.next)>=0)return!1;A=A.prevZ}let S=n.nextZ;for(;S&&S.z<=w;){if(S.x>=p&&S.x<=v&&S.y>=m&&S.y<=_&&S!==o&&!(a===S.x&&h===S.y)&&Ul(a,h,c,f,l,u,S.x,S.y)&&an(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Y1(n,e){let t=n,i=!1;do{const r=t.prev,s=t.next.next;Mg(r,t,t.next,s,!1)&&qo(r,s)&&qo(s,r)&&(e.push(r.i,t.i,s.i),Yo(t),Yo(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?ns(t):t}function K1(n,e,t,i,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&ow(s,o)){let a=Eg(s,o);s=ns(s,s.next),a=ns(a,a.next),zu(s,e,t,i,r),zu(a,e,t,i,r);return}o=o.next}s=s.next}while(s!==n)}let ku=!1;function Z1(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=vg(n,a,c,i,!1);l===l.next&&$o.add(l),r.push(sw(l))}r.sort(J1),Q1(n.length/i,e.length),Sg(t,t),ku=!0;for(let s=0;s<r.length;s++)t=j1(r[s],t);return ku=!1,ns(t)}function J1(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function j1(n,e){const t=tw(n,e);if(!t)return e;const i=Eg(t,n),r=i.next;return Sg(t,r.next),ns(i,i.next),ns(t,t.next)}const yg=16;let tn=new Float64Array(0),Ol=0;const Vu=[],Hu=[];function Q1(n,e){const t=Math.ceil((n+2*e)/yg)+e+2;tn.length<t*4&&(tn=new Float64Array(t*4)),Ol=0}function Sg(n,e){let t=n;do{const i=Ol++;Vu[i]=t;let r=1/0,s=1/0,o=-1/0,a=-1/0,c=0;do{const h=t.next;t.z=i,t.x<r&&(r=t.x),t.x>o&&(o=t.x),t.y<s&&(s=t.y),t.y>a&&(a=t.y),h.x<r&&(r=h.x),h.x>o&&(o=h.x),h.y<s&&(s=h.y),h.y>a&&(a=h.y),t=h}while(++c<yg&&t!==e);Hu[i]=t;const l=i*4;tn[l]=r,tn[l+1]=s,tn[l+2]=o,tn[l+3]=a}while(t!==e)}function ew(n,e){const t=n.z*4;e.x<tn[t]&&(tn[t]=e.x),e.y<tn[t+1]&&(tn[t+1]=e.y),e.x>tn[t+2]&&(tn[t+2]=e.x),e.y>tn[t+3]&&(tn[t+3]=e.y)}function Mp(n){let e=Hu[n];for(;e.prev.next!==e;)e=e.next;return Hu[n]=e,e}function Ep(n){let e=Vu[n];for(;e.prev.next!==e;)e=e.next;return Vu[n]=e,e}function tw(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Xo(n,t))return t;for(let u=0,p=0;u<Ol;u++,p+=4){if(r<tn[p+1]||r>tn[p+3]||tn[p]>i||tn[p+2]<=s)continue;const m=Mp(u);t=Ep(u);do{if(t.prev.next===t){if(Xo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const v=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=i&&v>s&&(s=v,o=t.x<t.next.x?t:t.next,v===i))return o}}t=t.next}while(t!==m)}if(!o)return null;const a=o.x,c=o.y,l=Math.min(r,c),h=Math.max(r,c);let f=1/0;for(let u=0,p=0;u<Ol;u++,p+=4){if(tn[p+2]<a||tn[p]>i||tn[p+3]<l||tn[p+1]>h)continue;const m=Mp(u);t=Ep(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=a&&i!==t.x&&Ul(r<c?i:s,r,a,c,r<c?s:i,r,t.x,t.y)){const v=Math.abs(r-t.y)/(i-t.x);(qo(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(v<f||v===f&&(t.x>o.x||t.x===o.x&&nw(o,t)))&&(o=t,f=v)}t=t.next}while(t!==m)}return o}function nw(n,e){return an(n.prev,n,e.prev)<0&&an(e.next,n,n.next)<0}const ai=[];let So=[],kr=new Uint32Array(0),Mo=new Uint32Array(0);const Eo=new Uint32Array(256);function iw(n,e,t,i){let r=n,s=0;do r.z=Gu(r.x,r.y,e,t,i),ai[s++]=r,r=r.next;while(r!==n);rw(s);let o=null;for(let a=0;a<s;a++){const c=ai[a];c.prevZ=o,o&&(o.nextZ=c),o=c}o.nextZ=null}function rw(n){if(n<=32){for(let e=1;e<n;e++){const t=ai[e],i=t.z;let r=e-1;for(;r>=0&&ai[r].z>i;)ai[r+1]=ai[r],r--;ai[r+1]=t}return}kr.length<n&&(kr=new Uint32Array(n),Mo=new Uint32Array(n),So=new Array(n));for(let e=0;e<n;e++)kr[e]=ai[e].z;za(n,ai,kr,So,Mo,0),za(n,So,Mo,ai,kr,8),za(n,ai,kr,So,Mo,16),za(n,So,Mo,ai,kr,24)}function za(n,e,t,i,r,s){Eo.fill(0);for(let a=0;a<n;a++)Eo[t[a]>>>s&255]++;let o=0;for(let a=0;a<256;a++){const c=Eo[a];Eo[a]=o,o+=c}for(let a=0;a<n;a++){const c=t[a],l=Eo[c>>>s&255]++;i[l]=e[a],r[l]=c}}function Gu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ul(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ow(n,e){const t=Xo(n,e)&&an(n.prev,n,n.next)>0&&an(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||qo(n,e)&&qo(e,n)&&(an(n.prev,n,e.prev)!==0||an(n,e.prev,e)!==0))&&!aw(n,e)&&(t||lw(n,e))}function an(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Xo(n,e){return n.x===e.x&&n.y===e.y}function Mg(n,e,t,i,r=!0){const s=an(n,e,t),o=an(n,e,i),a=an(t,i,n),c=an(t,i,e);return(s>0&&o<0||s<0&&o>0)&&(a>0&&c<0||a<0&&c>0)?!0:r?!!(s===0&&ka(n,t,e)||o===0&&ka(n,i,e)||a===0&&ka(t,n,i)||c===0&&ka(t,e,i)):!1}function ka(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function aw(n,e){const t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y);let o=n;do{const a=o.next;if(o.x>i&&a.x>i||o.x<t&&a.x<t||o.y>s&&a.y>s||o.y<r&&a.y<r){o=a;continue}if(o.i!==n.i&&a.i!==n.i&&o.i!==e.i&&a.i!==e.i&&Mg(o,a,n,e))return!0;o=a}while(o!==n);return!1}function qo(n,e){return an(n.prev,n,n.next)<0?an(n,e,n.next)>=0&&an(n,n.prev,e)>=0:an(n,e,n.prev)<0||an(n,n.next,e)<0}function lw(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{const o=t.next;t.y>s!=o.y>s&&r<(o.x-t.x)*(s-t.y)/(o.y-t.y)+t.x&&(i=!i),t=o}while(t!==n);return i}function Eg(n,e){const t=Wu(n.i,n.x,n.y),i=Wu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function bp(n,e,t,i){const r=Wu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Yo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),ku&&ew(n.prev,n.next)}function Wu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function cw(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function bg(n){const e=[],t=[],i=n[0][0].length;let r=0,s=0;for(const o of n){for(const a of o)for(let c=0;c<i;c++)e.push(a[c]);s&&(r+=s,t.push(r)),s=o.length}return{vertices:e,holes:t,dimensions:i}}const wp=Math.pow(2,-52),Va=new Uint32Array(512);class Ko{static from(e,t=pw,i=mw){const r=e.length,s=new Float64Array(r*2);for(let o=0;o<r;o++){const a=e[o];s[2*o]=t(a),s[2*o+1]=i(a)}return new Ko(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:r,_hullHash:s}=this,o=e.length>>1;let a=1/0,c=1/0,l=-1/0,h=-1/0;for(let T=0;T<o;T++){const B=e[2*T],U=e[2*T+1];B<a&&(a=B),U<c&&(c=U),B>l&&(l=B),U>h&&(h=U),this._ids[T]=T}const f=(a+l)/2,u=(c+h)/2;let p=0,m=0,v=0;for(let T=0,B=1/0;T<o;T++){const U=_f(f,u,e[2*T],e[2*T+1]);U<B&&(p=T,B=U)}const _=e[2*p],x=e[2*p+1];for(let T=0,B=1/0;T<o;T++){if(T===p)continue;const U=_f(_,x,e[2*T],e[2*T+1]);U<B&&U>0&&(m=T,B=U)}let w=e[2*m],A=e[2*m+1],S=1/0;for(let T=0;T<o;T++){if(T===p||T===m)continue;const B=hw(_,x,w,A,e[2*T],e[2*T+1]);B<S&&(v=T,S=B)}let R=e[2*v],C=e[2*v+1];if(S===1/0){for(let U=0;U<o;U++)this._dists[U]=e[2*U]-e[0]||e[2*U+1]-e[1];Is(this._ids,this._dists,0,o-1);const T=new Uint32Array(o);let B=0;for(let U=0,z=-1/0;U<o;U++){const D=this._ids[U],H=this._dists[D];H>z&&(T[B++]=D,z=H)}this.hull=T.subarray(0,B),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(Io(_,x,w,A,R,C)<0){const T=m,B=w,U=A;m=v,w=R,A=C,v=T,R=B,C=U}const N=dw(_,x,w,A,R,C);this._cx=N.x,this._cy=N.y;for(let T=0;T<o;T++)this._dists[T]=_f(e[2*T],e[2*T+1],N.x,N.y);Is(this._ids,this._dists,0,o-1),this._hullStart=p;let M=3;i[p]=t[v]=m,i[m]=t[p]=v,i[v]=t[m]=p,r[p]=0,r[m]=1,r[v]=2,s.fill(-1),s[this._hashKey(_,x)]=p,s[this._hashKey(w,A)]=m,s[this._hashKey(R,C)]=v,this.trianglesLen=0,this._addTriangle(p,m,v,-1,-1,-1);for(let T=0,B=0,U=0;T<this._ids.length;T++){const z=this._ids[T],D=e[2*z],H=e[2*z+1];if(T>0&&Math.abs(D-B)<=wp&&Math.abs(H-U)<=wp||(B=D,U=H,z===p||z===m||z===v))continue;let P=0;for(let te=0,ue=this._hashKey(D,H);te<this._hashSize&&(P=s[(ue+te)%this._hashSize],!(P!==-1&&P!==i[P]));te++);P=t[P];let O=P,F;for(;F=i[O],Io(D,H,e[2*O],e[2*O+1],e[2*F],e[2*F+1])>=0;)if(O=F,O===P){O=-1;break}if(O===-1)continue;let G=this._addTriangle(O,z,i[O],-1,-1,r[O]);r[z]=this._legalize(G+2),r[O]=G,M++;let Z=i[O];for(;F=i[Z],Io(D,H,e[2*Z],e[2*Z+1],e[2*F],e[2*F+1])<0;)G=this._addTriangle(Z,z,F,r[z],-1,r[Z]),r[z]=this._legalize(G+2),i[Z]=Z,M--,Z=F;if(O===P)for(;F=t[O],Io(D,H,e[2*F],e[2*F+1],e[2*O],e[2*O+1])<0;)G=this._addTriangle(F,z,O,-1,r[O],r[F]),this._legalize(G+2),r[F]=G,i[O]=O,M--,O=F;this._hullStart=t[z]=O,i[O]=t[Z]=z,i[z]=Z,s[this._hashKey(D,H)]=z,s[this._hashKey(e[2*O],e[2*O+1])]=O}this.hull=new Uint32Array(M);for(let T=0,B=this._hullStart;T<M;T++)this.hull[T]=B,B=i[B];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(fw(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:r}=this;let s=0,o=0;for(;;){const a=i[e],c=e-e%3;if(o=c+(e+2)%3,a===-1){if(s===0)break;e=Va[--s];continue}const l=a-a%3,h=c+(e+1)%3,f=l+(a+2)%3,u=t[o],p=t[e],m=t[h],v=t[f];if(uw(r[2*u],r[2*u+1],r[2*p],r[2*p+1],r[2*m],r[2*m+1],r[2*v],r[2*v+1])){t[e]=v,t[a]=u;const x=i[f];if(x===-1){let A=this._hullStart;do{if(this._hullTri[A]===f){this._hullTri[A]=e;break}A=this._hullPrev[A]}while(A!==this._hullStart)}this._link(e,x),this._link(a,i[o]),this._link(o,f);const w=l+(a+1)%3;s<Va.length&&(Va[s++]=w)}else{if(s===0)break;e=Va[--s]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,r,s,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,r),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function fw(n,e){const t=n/(Math.abs(n)+Math.abs(e));return(e>0?3-t:1+t)/4}function _f(n,e,t,i){const r=n-t,s=e-i;return r*r+s*s}function uw(n,e,t,i,r,s,o,a){const c=n-o,l=e-a,h=t-o,f=i-a,u=r-o,p=s-a,m=c*c+l*l,v=h*h+f*f,_=u*u+p*p;return c*(f*_-v*p)-l*(h*_-v*u)+m*(h*p-f*u)<0}function hw(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=(l*h-a*f)*u,m=(o*f-c*h)*u;return p*p+m*m}function dw(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=n+(l*h-a*f)*u,m=e+(o*f-c*h)*u;return{x:p,y:m}}function Is(n,e,t,i){if(i-t<=20)for(let r=t+1;r<=i;r++){const s=n[r],o=e[s];let a=r-1;for(;a>=t&&e[n[a]]>o;)n[a+1]=n[a--];n[a+1]=s}else{const r=t+i>>1;let s=t+1,o=i;bo(n,r,s),e[n[t]]>e[n[i]]&&bo(n,t,i),e[n[s]]>e[n[i]]&&bo(n,s,i),e[n[t]]>e[n[s]]&&bo(n,t,s);const a=n[s],c=e[a];for(;;){do s++;while(e[n[s]]<c);do o--;while(e[n[o]]>c);if(o<s)break;bo(n,s,o)}n[t+1]=n[o],n[o]=a,i-s+1>=o-t?(Is(n,e,s,i),Is(n,e,t,o-1)):(Is(n,e,t,o-1),Is(n,e,s,i))}}function bo(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function pw(n){return n[0]}function mw(n){return n[1]}var It=1e-6,Fl=1e-12,bt=Math.PI,hi=bt/2,Bl=bt/4,ii=bt*2,en=180/bt,lt=bt/180,Wt=Math.abs,wg=Math.atan,pi=Math.atan2,ut=Math.cos,$u=Math.hypot,at=Math.sin,gw=Math.sign||function(n){return n>0?1:n<0?-1:0},pr=Math.sqrt;function _w(n){return n>1?0:n<-1?bt:Math.acos(n)}function mr(n){return n>1?hi:n<-1?-hi:Math.asin(n)}function Tp(n){return(n=at(n/2))*n}function wn(){}function zl(n,e){n&&Rp.hasOwnProperty(n.type)&&Rp[n.type](n,e)}var Ap={Feature:function(n,e){zl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)zl(t[i].geometry,e)}},Rp={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){Xu(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Xu(t[i],e,0)},Polygon:function(n,e){Cp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Cp(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)zl(t[i],e)}};function Xu(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function Cp(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)Xu(n[t],e,1);e.polygonEnd()}function Ec(n,e){n&&Ap.hasOwnProperty(n.type)?Ap[n.type](n,e):zl(n,e)}var kl=new fr,Pp=new fr,Tg,Ag,qu,Yu,Ku,gr={point:wn,lineStart:wn,lineEnd:wn,polygonStart:function(){kl=new fr,gr.lineStart=xw,gr.lineEnd=vw},polygonEnd:function(){var n=+kl;Pp.add(n<0?ii+n:n),this.lineStart=this.lineEnd=this.point=wn},sphere:function(){Pp.add(ii)}};function xw(){gr.point=yw}function vw(){Rg(Tg,Ag)}function yw(n,e){gr.point=Rg,Tg=n,Ag=e,n*=lt,e*=lt,qu=n,Yu=ut(e=e/2+Bl),Ku=at(e)}function Rg(n,e){n*=lt,e*=lt,e=e/2+Bl;var t=n-qu,i=t>=0?1:-1,r=i*t,s=ut(e),o=at(e),a=Ku*o,c=Yu*s+a*ut(r),l=a*i*at(r);kl.add(pi(l,c)),qu=n,Yu=s,Ku=o}function Vl(n){return[pi(n[1],n[0]),mr(n[2])]}function is(n){var e=n[0],t=n[1],i=ut(t);return[i*ut(e),i*at(e),at(t)]}function Ha(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function $s(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function xf(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Ga(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Hl(n){var e=pr(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}var jt,Xn,Qt,ei,Gr,Cg,Pg,Fs,Fo,wr,_r,ir={point:Zu,lineStart:Ip,lineEnd:Dp,polygonStart:function(){ir.point=Dg,ir.lineStart=Sw,ir.lineEnd=Mw,Fo=new fr,gr.polygonStart()},polygonEnd:function(){gr.polygonEnd(),ir.point=Zu,ir.lineStart=Ip,ir.lineEnd=Dp,kl<0?(jt=-(Qt=180),Xn=-(ei=90)):Fo>It?ei=90:Fo<-It&&(Xn=-90),_r[0]=jt,_r[1]=Qt},sphere:function(){jt=-(Qt=180),Xn=-(ei=90)}};function Zu(n,e){wr.push(_r=[jt=n,Qt=n]),e<Xn&&(Xn=e),e>ei&&(ei=e)}function Ig(n,e){var t=is([n*lt,e*lt]);if(Fs){var i=$s(Fs,t),r=[i[1],-i[0],0],s=$s(r,i);Hl(s),s=Vl(s);var o=n-Gr,a=o>0?1:-1,c=s[0]*en*a,l,h=Wt(o)>180;h^(a*Gr<c&&c<a*n)?(l=s[1]*en,l>ei&&(ei=l)):(c=(c+360)%360-180,h^(a*Gr<c&&c<a*n)?(l=-s[1]*en,l<Xn&&(Xn=l)):(e<Xn&&(Xn=e),e>ei&&(ei=e))),h?n<Gr?jn(jt,n)>jn(jt,Qt)&&(Qt=n):jn(n,Qt)>jn(jt,Qt)&&(jt=n):Qt>=jt?(n<jt&&(jt=n),n>Qt&&(Qt=n)):n>Gr?jn(jt,n)>jn(jt,Qt)&&(Qt=n):jn(n,Qt)>jn(jt,Qt)&&(jt=n)}else wr.push(_r=[jt=n,Qt=n]);e<Xn&&(Xn=e),e>ei&&(ei=e),Fs=t,Gr=n}function Ip(){ir.point=Ig}function Dp(){_r[0]=jt,_r[1]=Qt,ir.point=Zu,Fs=null}function Dg(n,e){if(Fs){var t=n-Gr;Fo.add(Wt(t)>180?t+(t>0?360:-360):t)}else Cg=n,Pg=e;gr.point(n,e),Ig(n,e)}function Sw(){gr.lineStart()}function Mw(){Dg(Cg,Pg),gr.lineEnd(),Wt(Fo)>It&&(jt=-(Qt=180)),_r[0]=jt,_r[1]=Qt,Fs=null}function jn(n,e){return(e-=n)<0?e+360:e}function Ew(n,e){return n[0]-e[0]}function Lp(n,e){return n[0]<=n[1]?n[0]<=e&&e<=n[1]:e<n[0]||n[1]<e}function Lg(n){var e,t,i,r,s,o,a;if(ei=Qt=-(jt=Xn=1/0),wr=[],Ec(n,ir),t=wr.length){for(wr.sort(Ew),e=1,i=wr[0],s=[i];e<t;++e)r=wr[e],Lp(i,r[0])||Lp(i,r[1])?(jn(i[0],r[1])>jn(i[0],i[1])&&(i[1]=r[1]),jn(r[0],i[1])>jn(i[0],i[1])&&(i[0]=r[0])):s.push(i=r);for(o=-1/0,t=s.length-1,e=0,i=s[t];e<=t;i=r,++e)r=s[e],(a=jn(i[1],r[0]))>o&&(o=a,jt=r[0],Qt=i[1])}return wr=_r=null,jt===1/0||Xn===1/0?[[NaN,NaN],[NaN,NaN]]:[[jt,Xn],[Qt,ei]]}var Do,Gl,Wl,$l,Xl,ql,Yl,Kl,Ju,ju,Qu,Ng,Og,Bn,zn,kn,Ai={sphere:wn,point:Vh,lineStart:Np,lineEnd:Op,polygonStart:function(){Ai.lineStart=Tw,Ai.lineEnd=Aw},polygonEnd:function(){Ai.lineStart=Np,Ai.lineEnd=Op}};function Vh(n,e){n*=lt,e*=lt;var t=ut(e);na(t*ut(n),t*at(n),at(e))}function na(n,e,t){++Do,Wl+=(n-Wl)/Do,$l+=(e-$l)/Do,Xl+=(t-Xl)/Do}function Np(){Ai.point=bw}function bw(n,e){n*=lt,e*=lt;var t=ut(e);Bn=t*ut(n),zn=t*at(n),kn=at(e),Ai.point=ww,na(Bn,zn,kn)}function ww(n,e){n*=lt,e*=lt;var t=ut(e),i=t*ut(n),r=t*at(n),s=at(e),o=pi(pr((o=zn*s-kn*r)*o+(o=kn*i-Bn*s)*o+(o=Bn*r-zn*i)*o),Bn*i+zn*r+kn*s);Gl+=o,ql+=o*(Bn+(Bn=i)),Yl+=o*(zn+(zn=r)),Kl+=o*(kn+(kn=s)),na(Bn,zn,kn)}function Op(){Ai.point=Vh}function Tw(){Ai.point=Rw}function Aw(){Ug(Ng,Og),Ai.point=Vh}function Rw(n,e){Ng=n,Og=e,n*=lt,e*=lt,Ai.point=Ug;var t=ut(e);Bn=t*ut(n),zn=t*at(n),kn=at(e),na(Bn,zn,kn)}function Ug(n,e){n*=lt,e*=lt;var t=ut(e),i=t*ut(n),r=t*at(n),s=at(e),o=zn*s-kn*r,a=kn*i-Bn*s,c=Bn*r-zn*i,l=$u(o,a,c),h=mr(l),f=l&&-h/l;Ju.add(f*o),ju.add(f*a),Qu.add(f*c),Gl+=h,ql+=h*(Bn+(Bn=i)),Yl+=h*(zn+(zn=r)),Kl+=h*(kn+(kn=s)),na(Bn,zn,kn)}function Up(n){Do=Gl=Wl=$l=Xl=ql=Yl=Kl=0,Ju=new fr,ju=new fr,Qu=new fr,Ec(n,Ai);var e=+Ju,t=+ju,i=+Qu,r=$u(e,t,i);return r<Fl&&(e=ql,t=Yl,i=Kl,Gl<It&&(e=Wl,t=$l,i=Xl),r=$u(e,t,i),r<Fl)?[NaN,NaN]:[pi(t,e)*en,mr(i/r)*en]}function eh(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function th(n,e){return Wt(n)>bt&&(n-=Math.round(n/ii)*ii),[n,e]}th.invert=th;function Fg(n,e,t){return(n%=ii)?e||t?eh(Bp(n),zp(e,t)):Bp(n):e||t?zp(e,t):th}function Fp(n){return function(e,t){return e+=n,Wt(e)>bt&&(e-=Math.round(e/ii)*ii),[e,t]}}function Bp(n){var e=Fp(n);return e.invert=Fp(-n),e}function zp(n,e){var t=ut(n),i=at(n),r=ut(e),s=at(e);function o(a,c){var l=ut(c),h=ut(a)*l,f=at(a)*l,u=at(c),p=u*t+h*i;return[pi(f*r-p*s,h*t-u*i),mr(p*r+f*s)]}return o.invert=function(a,c){var l=ut(c),h=ut(a)*l,f=at(a)*l,u=at(c),p=u*r-f*s;return[pi(f*r+u*s,h*t+p*i),mr(p*t-h*i)]},o}function Cw(n){n=Fg(n[0]*lt,n[1]*lt,n.length>2?n[2]*lt:0);function e(t){return t=n(t[0]*lt,t[1]*lt),t[0]*=en,t[1]*=en,t}return e.invert=function(t){return t=n.invert(t[0]*lt,t[1]*lt),t[0]*=en,t[1]*=en,t},e}function Pw(n,e,t,i,r,s){if(t){var o=ut(e),a=at(e),c=i*t;r==null?(r=e+i*ii,s=e-c/2):(r=kp(o,r),s=kp(o,s),(i>0?r<s:r>s)&&(r+=i*ii));for(var l,h=r;i>0?h>s:h<s;h-=c)l=Vl([o,-a*ut(h),-a*at(h)]),n.point(l[0],l[1])}}function kp(n,e){e=is(e),e[0]-=n,Hl(e);var t=_w(-e[1]);return((-e[2]<0?-t:t)+ii-It)%ii}function Bg(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:wn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function ml(n,e){return Wt(n[0]-e[0])<It&&Wt(n[1]-e[1])<It}function Wa(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function zg(n,e,t,i,r){var s=[],o=[],a,c;if(n.forEach(function(m){if(!((v=m.length-1)<=0)){var v,_=m[0],x=m[v],w;if(ml(_,x)){if(!_[2]&&!x[2]){for(r.lineStart(),a=0;a<v;++a)r.point((_=m[a])[0],_[1]);r.lineEnd();return}x[0]+=2*It}s.push(w=new Wa(_,m,null,!0)),o.push(w.o=new Wa(_,null,w,!1)),s.push(w=new Wa(x,m,null,!1)),o.push(w.o=new Wa(x,null,w,!0))}}),!!s.length){for(o.sort(e),Vp(s),Vp(o),a=0,c=o.length;a<c;++a)o[a].e=t=!t;for(var l=s[0],h,f;;){for(var u=l,p=!0;u.v;)if((u=u.n)===l)return;h=u.z,r.lineStart();do{if(u.v=u.o.v=!0,u.e){if(p)for(a=0,c=h.length;a<c;++a)r.point((f=h[a])[0],f[1]);else i(u.x,u.n.x,1,r);u=u.n}else{if(p)for(h=u.p.z,a=h.length-1;a>=0;--a)r.point((f=h[a])[0],f[1]);else i(u.x,u.p.x,-1,r);u=u.p}u=u.o,h=u.z,p=!p}while(!u.v);r.lineEnd()}}}function Vp(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function vf(n){return Wt(n[0])<=bt?n[0]:gw(n[0])*((Wt(n[0])+bt)%ii-bt)}function kg(n,e){var t=vf(e),i=e[1],r=at(i),s=[at(t),-ut(t),0],o=0,a=0,c=new fr;r===1?i=hi+It:r===-1&&(i=-hi-It);for(var l=0,h=n.length;l<h;++l)if(u=(f=n[l]).length)for(var f,u,p=f[u-1],m=vf(p),v=p[1]/2+Bl,_=at(v),x=ut(v),w=0;w<u;++w,m=S,_=C,x=N,p=A){var A=f[w],S=vf(A),R=A[1]/2+Bl,C=at(R),N=ut(R),M=S-m,T=M>=0?1:-1,B=T*M,U=B>bt,z=_*C;if(c.add(pi(z*T*at(B),x*N+z*ut(B))),o+=U?M+T*ii:M,U^m>=t^S>=t){var D=$s(is(p),is(A));Hl(D);var H=$s(s,D);Hl(H);var P=(U^M>=0?-1:1)*mr(H[2]);(i>P||i===P&&(D[0]||D[1]))&&(a+=U^M>=0?1:-1)}}return(o<-It||o<It&&c<-Fl)^a&1}function Vg(n,e,t,i){return function(r){var s=e(r),o=Bg(),a=e(o),c=!1,l,h,f,u={point:p,lineStart:v,lineEnd:_,polygonStart:function(){u.point=x,u.lineStart=w,u.lineEnd=A,h=[],l=[]},polygonEnd:function(){u.point=p,u.lineStart=v,u.lineEnd=_,h=Wo(h);var S=kg(l,i);h.length?(c||(r.polygonStart(),c=!0),zg(h,Dw,S,t,r)):S&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),h=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(S,R){n(S,R)&&r.point(S,R)}function m(S,R){s.point(S,R)}function v(){u.point=m,s.lineStart()}function _(){u.point=p,s.lineEnd()}function x(S,R){f.push([S,R]),a.point(S,R)}function w(){a.lineStart(),f=[]}function A(){x(f[0][0],f[0][1]),a.lineEnd();var S=a.clean(),R=o.result(),C,N=R.length,M,T,B;if(f.pop(),l.push(f),f=null,!!N){if(S&1){if(T=R[0],(M=T.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),C=0;C<M;++C)r.point((B=T[C])[0],B[1]);r.lineEnd()}return}N>1&&S&2&&R.push(R.pop().concat(R.shift())),h.push(R.filter(Iw))}}return u}}function Iw(n){return n.length>1}function Dw(n,e){return((n=n.x)[0]<0?n[1]-hi-It:hi-n[1])-((e=e.x)[0]<0?e[1]-hi-It:hi-e[1])}const Hp=Vg(function(){return!0},Lw,Ow,[-bt,-hi]);function Lw(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,o){var a=s>0?bt:-bt,c=Wt(s-e);Wt(c-bt)<It?(n.point(e,t=(t+o)/2>0?hi:-hi),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),n.point(s,t),r=0):i!==a&&c>=bt&&(Wt(e-i)<It&&(e-=i*It),Wt(s-a)<It&&(s-=a*It),t=Nw(e,t,s,o),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),r=0),n.point(e=s,t=o),i=a},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function Nw(n,e,t,i){var r,s,o=at(n-t);return Wt(o)>It?wg((at(e)*(s=ut(i))*at(t)-at(i)*(r=ut(e))*at(n))/(r*s*o)):(e+i)/2}function Ow(n,e,t,i){var r;if(n==null)r=t*hi,i.point(-bt,r),i.point(0,r),i.point(bt,r),i.point(bt,0),i.point(bt,-r),i.point(0,-r),i.point(-bt,-r),i.point(-bt,0),i.point(-bt,r);else if(Wt(n[0]-e[0])>It){var s=n[0]<e[0]?bt:-bt;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function Uw(n){var e=ut(n),t=2*lt,i=e>0,r=Wt(e)>It;function s(h,f,u,p){Pw(p,n,t,u,h,f)}function o(h,f){return ut(h)*ut(f)>e}function a(h){var f,u,p,m,v;return{lineStart:function(){m=p=!1,v=1},point:function(_,x){var w=[_,x],A,S=o(_,x),R=i?S?0:l(_,x):S?l(_+(_<0?bt:-bt),x):0;if(!f&&(m=p=S)&&h.lineStart(),S!==p&&(A=c(f,w),(!A||ml(f,A)||ml(w,A))&&(w[2]=1)),S!==p)v=0,S?(h.lineStart(),A=c(w,f),h.point(A[0],A[1])):(A=c(f,w),h.point(A[0],A[1],2),h.lineEnd()),f=A;else if(r&&f&&i^S){var C;!(R&u)&&(C=c(w,f,!0))&&(v=0,i?(h.lineStart(),h.point(C[0][0],C[0][1]),h.point(C[1][0],C[1][1]),h.lineEnd()):(h.point(C[1][0],C[1][1]),h.lineEnd(),h.lineStart(),h.point(C[0][0],C[0][1],3)))}S&&(!f||!ml(f,w))&&h.point(w[0],w[1]),f=w,p=S,u=R},lineEnd:function(){p&&h.lineEnd(),f=null},clean:function(){return v|(m&&p)<<1}}}function c(h,f,u){var p=is(h),m=is(f),v=[1,0,0],_=$s(p,m),x=Ha(_,_),w=_[0],A=x-w*w;if(!A)return!u&&h;var S=e*x/A,R=-e*w/A,C=$s(v,_),N=Ga(v,S),M=Ga(_,R);xf(N,M);var T=C,B=Ha(N,T),U=Ha(T,T),z=B*B-U*(Ha(N,N)-1);if(!(z<0)){var D=pr(z),H=Ga(T,(-B-D)/U);if(xf(H,N),H=Vl(H),!u)return H;var P=h[0],O=f[0],F=h[1],G=f[1],Z;O<P&&(Z=P,P=O,O=Z);var te=O-P,ue=Wt(te-bt)<It,_e=ue||te<It;if(!ue&&G<F&&(Z=F,F=G,G=Z),_e?ue?F+G>0^H[1]<(Wt(H[0]-P)<It?F:G):F<=H[1]&&H[1]<=G:te>bt^(P<=H[0]&&H[0]<=O)){var Ue=Ga(T,(-B+D)/U);return xf(Ue,N),[H,Vl(Ue)]}}}function l(h,f){var u=i?n:bt-n,p=0;return h<-u?p|=1:h>u&&(p|=2),f<-u?p|=4:f>u&&(p|=8),p}return Vg(o,a,s,i?[0,-n]:[-bt,n-bt])}function Fw(n,e,t,i,r,s){var o=n[0],a=n[1],c=e[0],l=e[1],h=0,f=1,u=c-o,p=l-a,m;if(m=t-o,!(!u&&m>0)){if(m/=u,u<0){if(m<h)return;m<f&&(f=m)}else if(u>0){if(m>f)return;m>h&&(h=m)}if(m=r-o,!(!u&&m<0)){if(m/=u,u<0){if(m>f)return;m>h&&(h=m)}else if(u>0){if(m<h)return;m<f&&(f=m)}if(m=i-a,!(!p&&m>0)){if(m/=p,p<0){if(m<h)return;m<f&&(f=m)}else if(p>0){if(m>f)return;m>h&&(h=m)}if(m=s-a,!(!p&&m<0)){if(m/=p,p<0){if(m>f)return;m>h&&(h=m)}else if(p>0){if(m<h)return;m<f&&(f=m)}return h>0&&(n[0]=o+h*u,n[1]=a+h*p),f<1&&(e[0]=o+f*u,e[1]=a+f*p),!0}}}}}var Lo=1e9,$a=-Lo;function Bw(n,e,t,i){function r(l,h){return n<=l&&l<=t&&e<=h&&h<=i}function s(l,h,f,u){var p=0,m=0;if(l==null||(p=o(l,f))!==(m=o(h,f))||c(l,h)<0^f>0)do u.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+f+4)%4)!==m);else u.point(h[0],h[1])}function o(l,h){return Wt(l[0]-n)<It?h>0?0:3:Wt(l[0]-t)<It?h>0?2:1:Wt(l[1]-e)<It?h>0?1:0:h>0?3:2}function a(l,h){return c(l.x,h.x)}function c(l,h){var f=o(l,1),u=o(h,1);return f!==u?f-u:f===0?h[1]-l[1]:f===1?l[0]-h[0]:f===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,f=Bg(),u,p,m,v,_,x,w,A,S,R,C,N={point:M,lineStart:z,lineEnd:D,polygonStart:B,polygonEnd:U};function M(P,O){r(P,O)&&h.point(P,O)}function T(){for(var P=0,O=0,F=p.length;O<F;++O)for(var G=p[O],Z=1,te=G.length,ue=G[0],_e,Ue,ke=ue[0],it=ue[1];Z<te;++Z)_e=ke,Ue=it,ue=G[Z],ke=ue[0],it=ue[1],Ue<=i?it>i&&(ke-_e)*(i-Ue)>(it-Ue)*(n-_e)&&++P:it<=i&&(ke-_e)*(i-Ue)<(it-Ue)*(n-_e)&&--P;return P}function B(){h=f,u=[],p=[],C=!0}function U(){var P=T(),O=C&&P,F=(u=Wo(u)).length;(O||F)&&(l.polygonStart(),O&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),F&&zg(u,a,P,s,l),l.polygonEnd()),h=l,u=p=m=null}function z(){N.point=H,p&&p.push(m=[]),R=!0,S=!1,w=A=NaN}function D(){u&&(H(v,_),x&&S&&f.rejoin(),u.push(f.result())),N.point=M,S&&h.lineEnd()}function H(P,O){var F=r(P,O);if(p&&m.push([P,O]),R)v=P,_=O,x=F,R=!1,F&&(h.lineStart(),h.point(P,O));else if(F&&S)h.point(P,O);else{var G=[w=Math.max($a,Math.min(Lo,w)),A=Math.max($a,Math.min(Lo,A))],Z=[P=Math.max($a,Math.min(Lo,P)),O=Math.max($a,Math.min(Lo,O))];Fw(G,Z,n,e,t,i)?(S||(h.lineStart(),h.point(G[0],G[1])),h.point(Z[0],Z[1]),F||h.lineEnd(),C=!1):F&&(h.lineStart(),h.point(P,O),C=!1)}w=P,A=O,S=F}return N}}var nh,ih,gl,_l,Xs={sphere:wn,point:wn,lineStart:zw,lineEnd:wn,polygonStart:wn,polygonEnd:wn};function zw(){Xs.point=Vw,Xs.lineEnd=kw}function kw(){Xs.point=Xs.lineEnd=wn}function Vw(n,e){n*=lt,e*=lt,ih=n,gl=at(e),_l=ut(e),Xs.point=Hw}function Hw(n,e){n*=lt,e*=lt;var t=at(e),i=ut(e),r=Wt(n-ih),s=ut(r),o=at(r),a=i*o,c=_l*t-gl*i*s,l=gl*t+_l*i*s;nh.add(pi(pr(a*a+c*c),l)),ih=n,gl=t,_l=i}function Gw(n){return nh=new fr,Ec(n,Xs),+nh}var rh=[null,null],Ww={type:"LineString",coordinates:rh};function qs(n,e){return rh[0]=n,rh[1]=e,Gw(Ww)}var Gp={Feature:function(n,e){return Zl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)if(Zl(t[i].geometry,e))return!0;return!1}},Wp={Sphere:function(){return!0},Point:function(n,e){return $p(n.coordinates,e)},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if($p(t[i],e))return!0;return!1},LineString:function(n,e){return Xp(n.coordinates,e)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Xp(t[i],e))return!0;return!1},Polygon:function(n,e){return qp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(qp(t[i],e))return!0;return!1},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)if(Zl(t[i],e))return!0;return!1}};function Zl(n,e){return n&&Wp.hasOwnProperty(n.type)?Wp[n.type](n,e):!1}function $p(n,e){return qs(n,e)===0}function Xp(n,e){for(var t,i,r,s=0,o=n.length;s<o;s++){if(i=qs(n[s],e),i===0||s>0&&(r=qs(n[s],n[s-1]),r>0&&t<=r&&i<=r&&(t+i-r)*(1-Math.pow((t-i)/r,2))<Fl*r))return!0;t=i}return!1}function qp(n,e){return!!kg(n.map($w),Hg(e))}function $w(n){return n=n.map(Hg),n.pop(),n}function Hg(n){return[n[0]*lt,n[1]*lt]}function Xw(n,e){return(n&&Gp.hasOwnProperty(n.type)?Gp[n.type]:Zl)(n,e)}function qw(n,e){var t=n[0]*lt,i=n[1]*lt,r=e[0]*lt,s=e[1]*lt,o=ut(i),a=at(i),c=ut(s),l=at(s),h=o*ut(t),f=o*at(t),u=c*ut(r),p=c*at(r),m=2*mr(pr(Tp(s-i)+o*c*Tp(r-t))),v=at(m),_=m?function(x){var w=at(x*=m)/v,A=at(m-x)/v,S=A*h+w*u,R=A*f+w*p,C=A*a+w*l;return[pi(R,S)*en,pi(C,pr(S*S+R*R))*en]}:function(){return[t*en,i*en]};return _.distance=m,_}const Yp=n=>n;var Ys=1/0,Jl=Ys,Zo=-Ys,jl=Zo,Kp={point:Yw,lineStart:wn,lineEnd:wn,polygonStart:wn,polygonEnd:wn,result:function(){var n=[[Ys,Jl],[Zo,jl]];return Zo=jl=-(Jl=Ys=1/0),n}};function Yw(n,e){n<Ys&&(Ys=n),n>Zo&&(Zo=n),e<Jl&&(Jl=e),e>jl&&(jl=e)}function Hh(n){return function(e){var t=new sh;for(var i in n)t[i]=n[i];return t.stream=e,t}}function sh(){}sh.prototype={constructor:sh,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Gh(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),Ec(t,n.stream(Kp)),e(Kp.result()),i!=null&&n.clipExtent(i),n}function Gg(n,e,t){return Gh(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,c])},t)}function Kw(n,e,t){return Gg(n,[[0,0],e],t)}function Zw(n,e,t){return Gh(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];n.scale(150*s).translate([o,a])},t)}function Jw(n,e,t){return Gh(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([o,a])},t)}var Zp=16,jw=ut(30*lt);function Jp(n,e){return+e?eT(n,e):Qw(n)}function Qw(n){return Hh({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function eT(n,e){function t(i,r,s,o,a,c,l,h,f,u,p,m,v,_){var x=l-i,w=h-r,A=x*x+w*w;if(A>4*e&&v--){var S=o+u,R=a+p,C=c+m,N=pr(S*S+R*R+C*C),M=mr(C/=N),T=Wt(Wt(C)-1)<It||Wt(s-f)<It?(s+f)/2:pi(R,S),B=n(T,M),U=B[0],z=B[1],D=U-i,H=z-r,P=w*D-x*H;(P*P/A>e||Wt((x*D+w*H)/A-.5)>.3||o*u+a*p+c*m<jw)&&(t(i,r,s,o,a,c,U,z,T,S/=N,R/=N,C,v,_),_.point(U,z),t(U,z,T,S,R,C,l,h,f,u,p,m,v,_))}}return function(i){var r,s,o,a,c,l,h,f,u,p,m,v,_={point:x,lineStart:w,lineEnd:S,polygonStart:function(){i.polygonStart(),_.lineStart=R},polygonEnd:function(){i.polygonEnd(),_.lineStart=w}};function x(M,T){M=n(M,T),i.point(M[0],M[1])}function w(){f=NaN,_.point=A,i.lineStart()}function A(M,T){var B=is([M,T]),U=n(M,T);t(f,u,h,p,m,v,f=U[0],u=U[1],h=M,p=B[0],m=B[1],v=B[2],Zp,i),i.point(f,u)}function S(){_.point=x,i.lineEnd()}function R(){w(),_.point=C,_.lineEnd=N}function C(M,T){A(r=M,T),s=f,o=u,a=p,c=m,l=v,_.point=A}function N(){t(f,u,h,p,m,v,s,o,r,a,c,l,Zp,i),_.lineEnd=S,S()}return _}}var tT=Hh({point:function(n,e){this.stream.point(n*lt,e*lt)}});function nT(n){return Hh({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function iT(n,e,t,i,r){function s(o,a){return o*=i,a*=r,[e+n*o,t-n*a]}return s.invert=function(o,a){return[(o-e)/n*i,(t-a)/n*r]},s}function jp(n,e,t,i,r,s){if(!s)return iT(n,e,t,i,r);var o=ut(s),a=at(s),c=o*n,l=a*n,h=o/n,f=a/n,u=(a*t-o*e)/n,p=(a*e+o*t)/n;function m(v,_){return v*=i,_*=r,[c*v-l*_+e,t-l*v-c*_]}return m.invert=function(v,_){return[i*(h*v-f*_+u),r*(p-f*v-h*_)]},m}function rT(n){return sT(function(){return n})()}function sT(n){var e,t=150,i=480,r=250,s=0,o=0,a=0,c=0,l=0,h,f=0,u=1,p=1,m=null,v=Hp,_=null,x,w,A,S=Yp,R=.5,C,N,M,T,B;function U(P){return M(P[0]*lt,P[1]*lt)}function z(P){return P=M.invert(P[0],P[1]),P&&[P[0]*en,P[1]*en]}U.stream=function(P){return T&&B===P?T:T=tT(nT(h)(v(C(S(B=P)))))},U.preclip=function(P){return arguments.length?(v=P,m=void 0,H()):v},U.postclip=function(P){return arguments.length?(S=P,_=x=w=A=null,H()):S},U.clipAngle=function(P){return arguments.length?(v=+P?Uw(m=P*lt):(m=null,Hp),H()):m*en},U.clipExtent=function(P){return arguments.length?(S=P==null?(_=x=w=A=null,Yp):Bw(_=+P[0][0],x=+P[0][1],w=+P[1][0],A=+P[1][1]),H()):_==null?null:[[_,x],[w,A]]},U.scale=function(P){return arguments.length?(t=+P,D()):t},U.translate=function(P){return arguments.length?(i=+P[0],r=+P[1],D()):[i,r]},U.center=function(P){return arguments.length?(s=P[0]%360*lt,o=P[1]%360*lt,D()):[s*en,o*en]},U.rotate=function(P){return arguments.length?(a=P[0]%360*lt,c=P[1]%360*lt,l=P.length>2?P[2]%360*lt:0,D()):[a*en,c*en,l*en]},U.angle=function(P){return arguments.length?(f=P%360*lt,D()):f*en},U.reflectX=function(P){return arguments.length?(u=P?-1:1,D()):u<0},U.reflectY=function(P){return arguments.length?(p=P?-1:1,D()):p<0},U.precision=function(P){return arguments.length?(C=Jp(N,R=P*P),H()):pr(R)},U.fitExtent=function(P,O){return Gg(U,P,O)},U.fitSize=function(P,O){return Kw(U,P,O)},U.fitWidth=function(P,O){return Zw(U,P,O)},U.fitHeight=function(P,O){return Jw(U,P,O)};function D(){var P=jp(t,0,0,u,p,f).apply(null,e(s,o)),O=jp(t,i-P[0],r-P[1],u,p,f);return h=Fg(a,c,l),N=eh(e,O),M=eh(h,N),C=Jp(N,R),H()}function H(){return T=B=null,U}return function(){return e=n.apply(this,arguments),U.invert=e.invert&&z,D()}}function oT(n){return function(e,t){var i=pr(e*e+t*t),r=n(i),s=at(r),o=ut(r);return[pi(e*s,i*o),mr(i&&t*s/i)]}}function Wg(n,e){var t=ut(e),i=1+ut(n)*t;return[t*at(n)/i,at(e)/i]}Wg.invert=oT(function(n){return 2*wg(n)});function aT(){return rT(Wg).scale(250).clipAngle(142)}const Qp=1e-6;class Kr{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t,i=+i;const r=e+i,s=t;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${r},${s}`:(Math.abs(this._x1-r)>Qp||Math.abs(this._y1-s)>Qp)&&(this._+="L"+r+","+s),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=r},${this._y1=s}`)}rect(e,t,i,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+r}h${-i}Z`}value(){return this._||null}}class oh{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class lT{constructor(e,[t,i,r,s]=[0,0,960,500]){if(!((r=+r)>=(t=+t))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=r,this.xmin=t,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:i},vectors:r}=this;let s,o;const a=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let v=0,_=0,x=i.length,w,A;v<x;v+=3,_+=2){const S=i[v]*2,R=i[v+1]*2,C=i[v+2]*2,N=e[S],M=e[S+1],T=e[R],B=e[R+1],U=e[C],z=e[C+1],D=T-N,H=B-M,P=U-N,O=z-M,F=(D*O-H*P)*2;if(Math.abs(F)<1e-9){if(s===void 0){s=o=0;for(const Z of t)s+=e[Z*2],o+=e[Z*2+1];s/=t.length,o/=t.length}const G=1e9*Math.sign((s-N)*O-(o-M)*P);w=(N+U)/2-G*O,A=(M+z)/2+G*P}else{const G=1/F,Z=D*D+H*H,te=P*P+O*O;w=N+(O*Z-H*te)*G,A=M+(D*te-P*Z)*G}a[_]=w,a[_+1]=A}let c=t[t.length-1],l,h=c*4,f,u=e[2*c],p,m=e[2*c+1];r.fill(0);for(let v=0;v<t.length;++v)c=t[v],l=h,f=u,p=m,h=c*4,u=e[2*c],m=e[2*c+1],r[l+2]=r[h]=p-m,r[l+3]=r[h+1]=u-f}render(e){const t=e==null?e=new Kr:void 0,{delaunay:{halfedges:i,inedges:r,hull:s},circumcenters:o,vectors:a}=this;if(s.length<=1)return null;for(let h=0,f=i.length;h<f;++h){const u=i[h];if(u<h)continue;const p=Math.floor(h/3)*2,m=Math.floor(u/3)*2,v=o[p],_=o[p+1],x=o[m],w=o[m+1];this._renderSegment(v,_,x,w,e)}let c,l=s[s.length-1];for(let h=0;h<s.length;++h){c=l,l=s[h];const f=Math.floor(r[l]/3)*2,u=o[f],p=o[f+1],m=c*4,v=this._project(u,p,a[m+2],a[m+3]);v&&this._renderSegment(u,p,v[0],v[1],e)}return t&&t.value()}renderBounds(e){const t=e==null?e=new Kr:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const i=t==null?t=new Kr:void 0,r=this._clip(e);if(r===null||!r.length)return;t.moveTo(r[0],r[1]);let s=r.length;for(;r[0]===r[s-2]&&r[1]===r[s-1]&&s>1;)s-=2;for(let o=2;o<s;o+=2)(r[o]!==r[o-2]||r[o+1]!==r[o-1])&&t.lineTo(r[o],r[o+1]);return t.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){const r=this.cellPolygon(t);r&&(r.index=t,yield r)}}cellPolygon(e){const t=new oh;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,r,s){let o;const a=this._regioncode(e,t),c=this._regioncode(i,r);a===0&&c===0?(s.moveTo(e,t),s.lineTo(i,r)):(o=this._clipSegment(e,t,i,r,a,c))&&(s.moveTo(o[0],o[1]),s.lineTo(o[2],o[3]))}contains(e,t,i){return t=+t,t!==t||(i=+i,i!==i)?!1:this.delaunay._step(e,t,i)===e}*neighbors(e){const t=this._clip(e);if(t)for(const i of this.delaunay.neighbors(e)){const r=this._clip(i);if(r){e:for(let s=0,o=t.length;s<o;s+=2)for(let a=0,c=r.length;a<c;a+=2)if(t[s]===r[a]&&t[s+1]===r[a+1]&&t[(s+2)%o]===r[(a+c-2)%c]&&t[(s+3)%o]===r[(a+c-1)%c]){yield i;break e}}}}_cell(e){const{circumcenters:t,delaunay:{inedges:i,halfedges:r,triangles:s}}=this,o=i[e];if(o===-1)return null;const a=[];let c=o;do{const l=Math.floor(c/3);if(a.push(t[l*2],t[l*2+1]),c=c%3===2?c-2:c+1,s[c]!==e)break;c=r[c]}while(c!==o&&c!==-1);return a}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const t=this._cell(e);if(t===null)return null;const{vectors:i}=this,r=e*4;return this._simplify(i[r]||i[r+1]?this._clipInfinite(e,t,i[r],i[r+1],i[r+2],i[r+3]):this._clipFinite(e,t))}_clipFinite(e,t){const i=t.length;let r=null,s,o,a=t[i-2],c=t[i-1],l,h=this._regioncode(a,c),f,u=0;for(let p=0;p<i;p+=2)if(s=a,o=c,a=t[p],c=t[p+1],l=h,h=this._regioncode(a,c),l===0&&h===0)f=u,u=0,r?r.push(a,c):r=[a,c];else{let m,v,_,x,w;if(l===0){if((m=this._clipSegment(s,o,a,c,l,h))===null)continue;[v,_,x,w]=m}else{if((m=this._clipSegment(a,c,s,o,h,l))===null)continue;[x,w,v,_]=m,f=u,u=this._edgecode(v,_),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(v,_):r=[v,_]}f=u,u=this._edgecode(x,w),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(x,w):r=[x,w]}if(r)f=u,u=this._edgecode(r[0],r[1]),f&&u&&this._edge(e,f,u,r,r.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return r}_clipSegment(e,t,i,r,s,o){const a=s<o;for(a&&([e,t,i,r,s,o]=[i,r,e,t,o,s]);;){if(s===0&&o===0)return a?[i,r,e,t]:[e,t,i,r];if(s&o)return null;let c,l,h=s||o;h&8?(c=e+(i-e)*(this.ymax-t)/(r-t),l=this.ymax):h&4?(c=e+(i-e)*(this.ymin-t)/(r-t),l=this.ymin):h&2?(l=t+(r-t)*(this.xmax-e)/(i-e),c=this.xmax):(l=t+(r-t)*(this.xmin-e)/(i-e),c=this.xmin),s?(e=c,t=l,s=this._regioncode(e,t)):(i=c,r=l,o=this._regioncode(i,r))}}_clipInfinite(e,t,i,r,s,o){let a=Array.from(t),c;if((c=this._project(a[0],a[1],i,r))&&a.unshift(c[0],c[1]),(c=this._project(a[a.length-2],a[a.length-1],s,o))&&a.push(c[0],c[1]),a=this._clipFinite(e,a))for(let l=0,h=a.length,f,u=this._edgecode(a[h-2],a[h-1]);l<h;l+=2)f=u,u=this._edgecode(a[l],a[l+1]),f&&u&&(l=this._edge(e,f,u,a,l),h=a.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(a=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return a}_edge(e,t,i,r,s){for(;t!==i;){let o,a;switch(t){case 5:t=4;continue;case 4:t=6,o=this.xmax,a=this.ymin;break;case 6:t=2;continue;case 2:t=10,o=this.xmax,a=this.ymax;break;case 10:t=8;continue;case 8:t=9,o=this.xmin,a=this.ymax;break;case 9:t=1;continue;case 1:t=5,o=this.xmin,a=this.ymin;break}(r[s]!==o||r[s+1]!==a)&&this.contains(e,o,a)&&(r.splice(s,0,o,a),s+=2)}return s}_project(e,t,i,r){let s=1/0,o,a,c;if(r<0){if(t<=this.ymin)return null;(o=(this.ymin-t)/r)<s&&(c=this.ymin,a=e+(s=o)*i)}else if(r>0){if(t>=this.ymax)return null;(o=(this.ymax-t)/r)<s&&(c=this.ymax,a=e+(s=o)*i)}if(i>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/i)<s&&(a=this.xmax,c=t+(s=o)*r)}else if(i<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/i)<s&&(a=this.xmin,c=t+(s=o)*r)}return[a,c]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){const i=(t+2)%e.length,r=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[r]||e[t+1]===e[i+1]&&e[i+1]===e[r+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}const cT=2*Math.PI,Rs=Math.pow;function fT(n){return n[0]}function uT(n){return n[1]}function hT(n){const{triangles:e,coords:t}=n;for(let i=0;i<e.length;i+=3){const r=2*e[i],s=2*e[i+1],o=2*e[i+2];if((t[o]-t[r])*(t[s+1]-t[r+1])-(t[s]-t[r])*(t[o+1]-t[r+1])>1e-10)return!1}return!0}function dT(n,e,t){return[n+Math.sin(n+e)*t,e+Math.cos(n-e)*t]}class Wh{static from(e,t=fT,i=uT,r){return new Wh("length"in e?pT(e,t,i,r):Float64Array.from(mT(e,t,i,r)))}constructor(e){this._delaunator=new Ko(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&hT(e)){this.collinear=Int32Array.from({length:t.length/2},(u,p)=>p).sort((u,p)=>t[2*u]-t[2*p]||t[2*u+1]-t[2*p+1]);const c=this.collinear[0],l=this.collinear[this.collinear.length-1],h=[t[2*c],t[2*c+1],t[2*l],t[2*l+1]],f=1e-8*Math.hypot(h[3]-h[1],h[2]-h[0]);for(let u=0,p=t.length/2;u<p;++u){const m=dT(t[2*u],t[2*u+1],f);t[2*u]=m[0],t[2*u+1]=m[1]}this._delaunator=new Ko(t)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1);for(let c=0,l=i.length;c<l;++c){const h=s[c%3===2?c-2:c+1];(i[c]===-1||o[h]===-1)&&(o[h]=c)}for(let c=0,l=r.length;c<l;++c)a[r[c]]=c;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],o[r[0]]=1,r.length===2&&(o[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new lT(this,e)}*neighbors(e){const{inedges:t,hull:i,_hullIndex:r,halfedges:s,triangles:o,collinear:a}=this;if(a){const f=a.indexOf(e);f>0&&(yield a[f-1]),f<a.length-1&&(yield a[f+1]);return}const c=t[e];if(c===-1)return;let l=c,h=-1;do{if(yield h=o[l],l=l%3===2?l-2:l+1,o[l]!==e)return;if(l=s[l],l===-1){const f=i[(r[e]+1)%i.length];f!==h&&(yield f);return}}while(l!==c)}find(e,t,i=0){if(e=+e,e!==e||(t=+t,t!==t))return-1;const r=i;let s;for(;(s=this._step(i,e,t))>=0&&s!==i&&s!==r;)i=s;return s}_step(e,t,i){const{inedges:r,hull:s,_hullIndex:o,halfedges:a,triangles:c,points:l}=this;if(r[e]===-1||!l.length)return(e+1)%(l.length>>1);let h=e,f=Rs(t-l[e*2],2)+Rs(i-l[e*2+1],2);const u=r[e];let p=u;do{let m=c[p];const v=Rs(t-l[m*2],2)+Rs(i-l[m*2+1],2);if(v<f&&(f=v,h=m),p=p%3===2?p-2:p+1,c[p]!==e)break;if(p=a[p],p===-1){if(p=s[(o[e]+1)%s.length],p!==m&&Rs(t-l[p*2],2)+Rs(i-l[p*2+1],2)<f)return p;break}}while(p!==u);return h}render(e){const t=e==null?e=new Kr:void 0,{points:i,halfedges:r,triangles:s}=this;for(let o=0,a=r.length;o<a;++o){const c=r[o];if(c<o)continue;const l=s[o]*2,h=s[c]*2;e.moveTo(i[l],i[l+1]),e.lineTo(i[h],i[h+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){t===void 0&&(!e||typeof e.moveTo!="function")&&(t=e,e=null),t=t==null?2:+t;const i=e==null?e=new Kr:void 0,{points:r}=this;for(let s=0,o=r.length;s<o;s+=2){const a=r[s],c=r[s+1];e.moveTo(a+t,c),e.arc(a,c,t,0,cT)}return i&&i.value()}renderHull(e){const t=e==null?e=new Kr:void 0,{hull:i,points:r}=this,s=i[0]*2,o=i.length;e.moveTo(r[s],r[s+1]);for(let a=1;a<o;++a){const c=2*i[a];e.lineTo(r[c],r[c+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new oh;return this.renderHull(e),e.value()}renderTriangle(e,t){const i=t==null?t=new Kr:void 0,{points:r,triangles:s}=this,o=s[e*=3]*2,a=s[e+1]*2,c=s[e+2]*2;return t.moveTo(r[o],r[o+1]),t.lineTo(r[a],r[a+1]),t.lineTo(r[c],r[c+1]),t.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new oh;return this.renderTriangle(e,t),t.value()}}function pT(n,e,t,i){const r=n.length,s=new Float64Array(r*2);for(let o=0;o<r;++o){const a=n[o];s[o*2]=e.call(i,a,o,n),s[o*2+1]=t.call(i,a,o,n)}return s}function*mT(n,e,t,i){let r=0;for(const s of n)yield e.call(i,s,r,n),yield t.call(i,s,r,n),++r}const $h=Math.PI,em=$h/2,tm=180/$h,nm=$h/180,gT=Math.atan2,im=Math.cos,_T=Math.max,xT=Math.min,rm=Math.sin,vT=Math.sign||function(n){return n>0?1:n<0?-1:0},$g=Math.sqrt;function yT(n){return n>1?em:n<-1?-em:Math.asin(n)}function Xg(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Qn(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Ql(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function ec(n){var e=$g(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function Xh(n){return[gT(n[1],n[0])*tm,yT(_T(-1,xT(1,n[2])))*tm]}function Xi(n){const e=n[0]*nm,t=n[1]*nm,i=im(t);return[i*im(e),i*rm(e),rm(t)]}function qh(n){return n=n.map(e=>Xi(e)),Xg(n[0],Qn(n[2],n[1]))}function ST(n){const e=ET(n),t=wT(e),i=bT(t,n),r=AT(t,n.length),s=MT(r,n),o=TT(t,n),{polygons:a,centers:c}=RT(o,t,n),l=CT(a),h=IT(t,n),f=PT(i,t);return{delaunay:e,edges:i,triangles:t,centers:c,neighbors:r,polygons:a,mesh:l,hull:h,urquhart:f,find:s}}function MT(n,e){function t(i,r){let s=i[0]-r[0],o=i[1]-r[1],a=i[2]-r[2];return s*s+o*o+a*a}return function(r,s,o){o===void 0&&(o=0);let a,c,l=o;const h=Xi([r,s]);do a=o,o=null,c=t(h,Xi(e[a])),n[a].forEach(f=>{let u=t(h,Xi(e[f]));if(u<c){c=u,o=f,l=f;return}});while(o!==null);return l}}function ET(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=Cw(n[e]),i=aT().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(i);const r=[];let s=1;for(let f=0,u=n.length;f<u;f++){let p=n[f][0]**2+n[f][1]**2;!isFinite(p)||p>1e32?r.push(f):p>s&&(s=p)}const o=1e6*$g(s);r.forEach(f=>n[f]=[o,0]),n.push([0,o]),n.push([-o,0]),n.push([0,-o]);const a=Wh.from(n);a.projection=i;const{triangles:c,halfedges:l,inedges:h}=a;for(let f=0,u=l.length;f<u;f++)if(l[f]<0){const p=f%3==2?f-2:f+1,m=f%3==0?f+2:f-1,v=l[p],_=l[m];l[v]=_,l[_]=v,l[p]=l[m]=-1,c[f]=c[p]=c[m]=e,h[c[v]]=v%3==0?v+2:v-1,h[c[_]]=_%3==0?_+2:_-1,f+=2-f%3}else c[f]>n.length-3-1&&(c[f]=e);return a}function bT(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(i=>{if(i[0]!==i[1]&&!(qh(i.map(r=>e[r]))<0))for(let r=0,s;r<3;r++)s=(r+1)%3,t.add(Ll([i[r],i[s]]).join("-"))}),Array.from(t,i=>i.split("-").map(Number)))}function wT(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let i=0,r=e.length/3;i<r;i++){const s=e[3*i],o=e[3*i+1],a=e[3*i+2];s!==o&&o!==a&&t.push([s,a,o])}return t}function TT(n,e){return n.map(t=>{const i=t.map(s=>e[s]).map(Xi),r=Ql(Ql(Qn(i[1],i[0]),Qn(i[2],i[1])),Qn(i[0],i[2]));return Xh(ec(r))})}function AT(n,e){const t=[];return n.forEach(i=>{for(let r=0;r<3;r++){const s=i[r],o=i[(r+1)%3];t[s]=t[s]||[],t[s].push(o)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function RT(n,e,t){const i=[],r=n.slice();if(e.length===0){if(t.length<2)return{polygons:i,centers:r};if(t.length===2){const a=Xi(t[0]),c=Xi(t[1]),l=ec(Ql(a,c)),h=ec(Qn(a,c)),f=Qn(l,h),u=[l,Qn(l,f),Qn(Qn(l,f),f),Qn(Qn(Qn(l,f),f),f)].map(Xh).map(o);return i.push(u),i.push(u.slice().reverse()),{polygons:i,centers:r}}}e.forEach((a,c)=>{for(let l=0;l<3;l++){const h=a[l],f=a[(l+1)%3],u=a[(l+2)%3];i[h]=i[h]||[],i[h].push([f,u,c,[h,f,u]])}});const s=i.map(a=>{const c=[a[0][2]];let l=a[0][1];for(let h=1;h<a.length;h++)for(let f=0;f<a.length;f++)if(a[f][0]==l){l=a[f][1],c.push(a[f][2]);break}if(c.length>2)return c;if(c.length==2){const h=sm(t[a[0][3][0]],t[a[0][3][1]],r[c[0]]),f=sm(t[a[0][3][2]],t[a[0][3][0]],r[c[0]]),u=o(h),p=o(f);return[c[0],p,c[1],u]}});function o(a){let c=-1;return r.slice(e.length,1/0).forEach((l,h)=>{l[0]===a[0]&&l[1]===a[1]&&(c=h+e.length)}),c<0&&(c=r.length,r.push(a)),c}return{polygons:s,centers:r}}function sm(n,e,t){n=Xi(n),e=Xi(e),t=Xi(t);const i=vT(Xg(Qn(e,n),t));return Xh(ec(Ql(n,e)).map(r=>i*r))}function CT(n){const e=[];return n.forEach(t=>{if(!t)return;let i=t[t.length-1];for(let r of t)r>i&&e.push([i,r]),i=r}),e}function PT(n,e){return function(t){const i=new Map,r=new Map;return n.forEach((s,o)=>{const a=s.join("-");i.set(a,t[o]),r.set(a,!0)}),e.forEach(s=>{let o=0,a=-1;for(let c=0;c<3;c++){let l=Ll([s[c],s[(c+1)%3]]).join("-");i.get(l)>o&&(o=i.get(l),a=l)}r.set(a,!1)}),n.map(s=>r.get(s.join("-")))}}function IT(n,e){const t=new Set,i=[];n.map(a=>{if(!(qh(a.map(c=>e[c>e.length?0:c]))>1e-12))for(let c=0;c<3;c++){let l=[a[c],a[(c+1)%3]],h=`${l[0]}-${l[1]}`;t.has(h)?t.delete(h):t.add(`${l[1]}-${l[0]}`)}});const r=new Map;let s;if(t.forEach(a=>{a=a.split("-").map(Number),r.set(a[0],a[1]),s=a[0]}),s===void 0)return i;let o=s;do{i.push(o);let a=r.get(o);r.set(o,-1),o=a}while(o>-1&&o!==s);return i}function DT(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const i=e._data.map(r=>[e._vx(r),e._vy(r),r]).filter(r=>isFinite(r[0]+r[1]));e.points=i.map(r=>[r[0],r[1]]),e.valid=i.map(r=>r[2]),e.delaunay=ST(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return Up(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return Up(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((r,s)=>i.features.push({type:"Feature",geometry:r?{type:"Polygon",coordinates:[[...r,r[0]].map(o=>e.delaunay.centers[o])]}:null,properties:{site:e.valid[s],sitecoordinates:e.points[s],neighbours:e.delaunay.neighbors[s]}})),e.valid.length===1&&i.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),i},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((i,r)=>(i=i.map(s=>e.points[s]),i.center=e.delaunay.centers[r],i)).filter(i=>qh(i)>0).map(i=>({type:"Feature",properties:{circumcenter:i.center},geometry:{type:"Polygon",coordinates:[[...i,i[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i=e.delaunay.edges.map(s=>qs(e.points[s[0]],e.points[s[1]])),r=e.delaunay.urquhart(i);return{type:"FeatureCollection",features:e.delaunay.edges.map((s,o)=>({type:"Feature",properties:{source:e.valid[s[0]],target:e.valid[s[1]],length:i[o],urquhart:!!r[o]},geometry:{type:"LineString",coordinates:[e.points[s[0]],e.points[s[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(i=>[e.points[i[0]],e.points[i[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:i,polygons:r}=e.delaunay,s=[];for(const o of r)if(o)for(let a=o.length,c=o[a-1],l=o[0],h=0;h<a;c=l,l=o[++h])l>c&&s.push([i[c],i[l]]);return{type:"MultiLineString",coordinates:s}},e._found=void 0,e.find=function(t,i,r){if(e._found=e.delaunay.find(t,i,e._found),!r||qs([t,i],e.points[e._found])<r)return e._found},e.hull=function(t){t!==void 0&&e(t);const i=e.delaunay.hull,r=e.points;return i.length===0?null:{type:"Polygon",coordinates:[[...i.map(s=>r[s]),r[i[0]]]]}},n?e(n):e}function LT(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Yh(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function qg(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function ia(){}var Jo=.7,tc=1/Jo,Bs="\\s*([+-]?\\d+)\\s*",jo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",qi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",NT=/^#([0-9a-f]{3,8})$/,OT=new RegExp(`^rgb\\(${Bs},${Bs},${Bs}\\)$`),UT=new RegExp(`^rgb\\(${qi},${qi},${qi}\\)$`),FT=new RegExp(`^rgba\\(${Bs},${Bs},${Bs},${jo}\\)$`),BT=new RegExp(`^rgba\\(${qi},${qi},${qi},${jo}\\)$`),zT=new RegExp(`^hsl\\(${jo},${qi},${qi}\\)$`),kT=new RegExp(`^hsla\\(${jo},${qi},${qi},${jo}\\)$`),om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Yh(ia,Qo,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:am,formatHex:am,formatHex8:VT,formatHsl:HT,formatRgb:lm,toString:lm});function am(){return this.rgb().formatHex()}function VT(){return this.rgb().formatHex8()}function HT(){return Yg(this).formatHsl()}function lm(){return this.rgb().formatRgb()}function Qo(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=NT.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?cm(e):t===3?new qn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Xa(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Xa(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=OT.exec(n))?new qn(e[1],e[2],e[3],1):(e=UT.exec(n))?new qn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=FT.exec(n))?Xa(e[1],e[2],e[3],e[4]):(e=BT.exec(n))?Xa(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=zT.exec(n))?hm(e[1],e[2]/100,e[3]/100,1):(e=kT.exec(n))?hm(e[1],e[2]/100,e[3]/100,e[4]):om.hasOwnProperty(n)?cm(om[n]):n==="transparent"?new qn(NaN,NaN,NaN,0):null}function cm(n){return new qn(n>>16&255,n>>8&255,n&255,1)}function Xa(n,e,t,i){return i<=0&&(n=e=t=NaN),new qn(n,e,t,i)}function GT(n){return n instanceof ia||(n=Qo(n)),n?(n=n.rgb(),new qn(n.r,n.g,n.b,n.opacity)):new qn}function ah(n,e,t,i){return arguments.length===1?GT(n):new qn(n,e,t,i??1)}function qn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Yh(qn,ah,qg(ia,{brighter(n){return n=n==null?tc:Math.pow(tc,n),new qn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Jo:Math.pow(Jo,n),new qn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new qn(Jr(this.r),Jr(this.g),Jr(this.b),nc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fm,formatHex:fm,formatHex8:WT,formatRgb:um,toString:um}));function fm(){return`#${Zr(this.r)}${Zr(this.g)}${Zr(this.b)}`}function WT(){return`#${Zr(this.r)}${Zr(this.g)}${Zr(this.b)}${Zr((isNaN(this.opacity)?1:this.opacity)*255)}`}function um(){const n=nc(this.opacity);return`${n===1?"rgb(":"rgba("}${Jr(this.r)}, ${Jr(this.g)}, ${Jr(this.b)}${n===1?")":`, ${n})`}`}function nc(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Jr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Zr(n){return n=Jr(n),(n<16?"0":"")+n.toString(16)}function hm(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new wi(n,e,t,i)}function Yg(n){if(n instanceof wi)return new wi(n.h,n.s,n.l,n.opacity);if(n instanceof ia||(n=Qo(n)),!n)return new wi;if(n instanceof wi)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,a=s-r,c=(s+r)/2;return a?(e===s?o=(t-i)/a+(t<i)*6:t===s?o=(i-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new wi(o,a,c,n.opacity)}function $T(n,e,t,i){return arguments.length===1?Yg(n):new wi(n,e,t,i??1)}function wi(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Yh(wi,$T,qg(ia,{brighter(n){return n=n==null?tc:Math.pow(tc,n),new wi(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Jo:Math.pow(Jo,n),new wi(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new qn(yf(n>=240?n-240:n+120,r,i),yf(n,r,i),yf(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new wi(dm(this.h),qa(this.s),qa(this.l),nc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=nc(this.opacity);return`${n===1?"hsl(":"hsla("}${dm(this.h)}, ${qa(this.s)*100}%, ${qa(this.l)*100}%${n===1?")":`, ${n})`}`}}));function dm(n){return n=(n||0)%360,n<0?n+360:n}function qa(n){return Math.max(0,Math.min(1,n||0))}function yf(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const Kh=n=>()=>n;function XT(n,e){return function(t){return n+t*e}}function qT(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function YT(n){return(n=+n)==1?Kg:function(e,t){return t-e?qT(e,t,n):Kh(isNaN(e)?t:e)}}function Kg(n,e){var t=e-n;return t?XT(n,t):Kh(isNaN(n)?e:n)}const pm=(function n(e){var t=YT(e);function i(r,s){var o=t((r=ah(r)).r,(s=ah(s)).r),a=t(r.g,s.g),c=t(r.b,s.b),l=Kg(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function KT(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function ZT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function JT(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),o;for(o=0;o<i;++o)r[o]=Zh(n[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function jT(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function ic(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function QT(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=Zh(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var lh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Sf=new RegExp(lh.source,"g");function eA(n){return function(){return n}}function tA(n){return function(e){return n(e)+""}}function nA(n,e){var t=lh.lastIndex=Sf.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",e=e+"";(i=lh.exec(n))&&(r=Sf.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:ic(i,r)})),t=Sf.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?tA(c[0].x):eA(e):(e=c.length,function(l){for(var h=0,f;h<e;++h)a[(f=c[h]).i]=f.x(l);return a.join("")})}function Zh(n,e){var t=typeof e,i;return e==null||t==="boolean"?Kh(e):(t==="number"?ic:t==="string"?(i=Qo(e))?(e=i,pm):nA:e instanceof Qo?pm:e instanceof Date?jT:ZT(e)?KT:Array.isArray(e)?JT:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?QT:ic)(n,e)}function iA(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function rA(n){return function(){return n}}function sA(n){return+n}var mm=[0,1];function Ds(n){return n}function ch(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:rA(isNaN(e)?NaN:.5)}function oA(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function aA(n,e,t){var i=n[0],r=n[1],s=e[0],o=e[1];return r<i?(i=ch(r,i),s=t(o,s)):(i=ch(i,r),s=t(s,o)),function(a){return s(i(a))}}function lA(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=ch(n[o],n[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var c=F1(n,a,1,i)-1;return s[c](r[c](a))}}function cA(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function fA(){var n=mm,e=mm,t=Zh,i,r,s,o=Ds,a,c,l;function h(){var u=Math.min(n.length,e.length);return o!==Ds&&(o=oA(n[0],n[u-1])),a=u>2?lA:aA,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=a(n.map(i),e,t)))(i(o(u)))}return f.invert=function(u){return o(r((l||(l=a(e,n.map(i),ic)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,sA),h()):n.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),t=iA,h()},f.clamp=function(u){return arguments.length?(o=u?!0:Ds,h()):o!==Ds},f.interpolate=function(u){return arguments.length?(t=u,h()):t},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,p){return i=u,r=p,h()}}function uA(){return fA()(Ds,Ds)}function hA(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function rc(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function Ks(n){return n=rc(Math.abs(n)),n?n[1]:NaN}function dA(n,e){return function(t,i){for(var r=t.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(t.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(e)}}function pA(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var mA=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function sc(n){if(!(e=mA.exec(n)))throw new Error("invalid format: "+n);var e;return new Jh({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}sc.prototype=Jh.prototype;function Jh(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Jh.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function gA(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var oc;function _A(n,e){var t=rc(n,e);if(!t)return oc=void 0,n.toPrecision(e);var i=t[0],r=t[1],s=r-(oc=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+rc(n,Math.max(0,e+s-1))[0]}function gm(n,e){var t=rc(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const _m={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:hA,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>gm(n*100,e),r:gm,s:_A,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function xm(n){return n}var vm=Array.prototype.map,ym=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function xA(n){var e=n.grouping===void 0||n.thousands===void 0?xm:dA(vm.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?xm:pA(vm.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=sc(f);var p=f.fill,m=f.align,v=f.sign,_=f.symbol,x=f.zero,w=f.width,A=f.comma,S=f.precision,R=f.trim,C=f.type;C==="n"?(A=!0,C="g"):_m[C]||(S===void 0&&(S=12),R=!0,C="g"),(x||p==="0"&&m==="=")&&(x=!0,p="0",m="=");var N=(u&&u.prefix!==void 0?u.prefix:"")+(_==="$"?t:_==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():""),M=(_==="$"?i:/[%p]/.test(C)?o:"")+(u&&u.suffix!==void 0?u.suffix:""),T=_m[C],B=/[defgprs%]/.test(C);S=S===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,S)):Math.max(0,Math.min(20,S));function U(z){var D=N,H=M,P,O,F;if(C==="c")H=T(z)+H,z="";else{z=+z;var G=z<0||1/z<0;if(z=isNaN(z)?c:T(Math.abs(z),S),R&&(z=gA(z)),G&&+z==0&&v!=="+"&&(G=!1),D=(G?v==="("?v:a:v==="-"||v==="("?"":v)+D,H=(C==="s"&&!isNaN(z)&&oc!==void 0?ym[8+oc/3]:"")+H+(G&&v==="("?")":""),B){for(P=-1,O=z.length;++P<O;)if(F=z.charCodeAt(P),48>F||F>57){H=(F===46?r+z.slice(P+1):z.slice(P))+H,z=z.slice(0,P);break}}}A&&!x&&(z=e(z,1/0));var Z=D.length+z.length+H.length,te=Z<w?new Array(w-Z+1).join(p):"";switch(A&&x&&(z=e(te+z,te.length?w-H.length:1/0),te=""),m){case"<":z=D+z+H+te;break;case"=":z=D+te+z+H;break;case"^":z=te.slice(0,Z=te.length>>1)+D+z+H+te.slice(Z);break;default:z=te+D+z+H;break}return s(z)}return U.toString=function(){return f+""},U}function h(f,u){var p=Math.max(-8,Math.min(8,Math.floor(Ks(u)/3)))*3,m=Math.pow(10,-p),v=l((f=sc(f),f.type="f",f),{suffix:ym[8+p/3]});return function(_){return v(m*_)}}return{format:l,formatPrefix:h}}var Ya,Zg,Jg;vA({thousands:",",grouping:[3],currency:["$",""]});function vA(n){return Ya=xA(n),Zg=Ya.format,Jg=Ya.formatPrefix,Ya}function yA(n){return Math.max(0,-Ks(Math.abs(n)))}function SA(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Ks(e)/3)))*3-Ks(Math.abs(n)))}function MA(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Ks(e)-Ks(n))+1}function EA(n,e,t,i){var r=H1(n,e,t),s;switch(i=sc(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=SA(r,o))&&(i.precision=s),Jg(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=MA(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=yA(r))&&(i.precision=s-(i.type==="%")*2);break}}return Zg(i)}function bA(n){var e=n.domain;return n.ticks=function(t){var i=e();return V1(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return EA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,h=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);h-- >0;){if(l=Fu(o,a,t),l===c)return i[r]=o,i[s]=a,e(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function fh(){var n=uA();return n.copy=function(){return cA(n,fh())},LT.apply(n,arguments),bA(n)}function uh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function wA(n){if(Array.isArray(n))return n}function TA(n){if(Array.isArray(n))return uh(n)}function AA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function RA(n,e,t){return e=ac(e),UA(n,jg()?Reflect.construct(e,[],ac(n).constructor):e.apply(n,t))}function CA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function PA(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function ac(n){return ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ac(n)}function IA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&hh(n,e)}function jg(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(jg=function(){return!!n})()}function DA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function LA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(h){l=!0,r=h}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function NA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return AA(n)}function hh(n,e){return hh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},hh(n,e)}function Ui(n,e){return wA(n)||LA(n,e)||Qg(n,e)||NA()}function Mf(n){return TA(n)||DA(n)||Qg(n)||OA()}function Qg(n,e){if(n){if(typeof n=="string")return uh(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?uh(n,e):void 0}}function FA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,i=t===void 0?1/0:t,r=BA(n,i),s=Wo(r),o=zA(n,i),a=[].concat(Mf(s),Mf(o)),c={type:"Polygon",coordinates:n},l=Lg(c),h=Ui(l,2),f=Ui(h[0],2),u=f[0],p=f[1],m=Ui(h[1],2),v=m[0],_=m[1],x=u>v||_>=89||p<=-89,w=[];if(x){var A=DT(a).triangles(),S=new Map(a.map(function(F,G){var Z=Ui(F,2),te=Z[0],ue=Z[1];return["".concat(te,"-").concat(ue),G]}));A.features.forEach(function(F){var G,Z=F.geometry.coordinates[0].slice(0,3).reverse(),te=[];if(Z.forEach(function(_e){var Ue=Ui(_e,2),ke=Ue[0],it=Ue[1],he="".concat(ke,"-").concat(it);S.has(he)&&te.push(S.get(he))}),te.length===3){if(te.some(function(_e){return _e<s.length})){var ue=F.properties.circumcenter;if(!dh(ue,c,x))return}(G=w).push.apply(G,te)}})}else if(o.length)for(var T=Ko.from(a),B=function(G){var Z,te=[2,1,0].map(function(Ue){return T.triangles[G+Ue]}),ue=te.map(function(Ue){return a[Ue]});if(te.some(function(Ue){return Ue<s.length})){var _e=[0,1].map(function(Ue){return G1(ue,function(ke){return ke[Ue]})});if(!dh(_e,c,x))return 1}(Z=w).push.apply(Z,Mf(te))},U=0,z=T.triangles.length;U<z;U+=3)B(U);else{var R=bg(r),C=R.vertices,N=R.holes,M=N===void 0?[]:N;w=$1(C,M,2)}var D=fh(Ll(a,function(F){return F[0]}),[0,1]),H=fh(Ll(a,function(F){return F[1]}),[0,1]),P=a.map(function(F){var G=Ui(F,2),Z=G[0],te=G[1];return[D(Z),H(te)]}),O={points:a,indices:w,uvs:P};return{contour:r,triangles:O}}function BA(n,e){return n.map(function(t){var i=[],r;return t.forEach(function(s){if(r){var o=qs(s,r)*180/Math.PI;if(o>e)for(var a=qw(r,s),c=1/Math.ceil(o/e),l=c;l<1;)i.push(a(l)),l+=c}i.push(r=s)}),i})}function zA(n,e){var t={type:"Polygon",coordinates:n},i=Lg(t),r=Ui(i,2),s=Ui(r[0],2),o=s[0],a=s[1],c=Ui(r[1],2),l=c[0],h=c[1];if(Math.min(Math.abs(l-o),Math.abs(h-a))<e)return[];var f=o>l||h>=89||a<=-89;return kA(e,{minLng:o,maxLng:l,minLat:a,maxLat:h}).filter(function(u){return dh(u,t,f)})}function kA(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,i=e.maxLng,r=e.minLat,s=e.maxLat,o=Math.round(Math.pow(360/n,2)/Math.PI),a=(1+Math.sqrt(5))/2,c=function(x){return x/a*360%360-180},l=function(x){return Math.acos(2*x/o-1)/Math.PI*180-90},h=function(x){return o*(Math.cos((x+90)*Math.PI/180)+1)/2},f=[s!==void 0?Math.ceil(h(s)):0,r!==void 0?Math.floor(h(r)):o-1],u=t===void 0&&i===void 0?function(){return!0}:t===void 0?function(_){return _<=i}:i===void 0?function(_){return _>=t}:i>=t?function(_){return _>=t&&_<=i}:function(_){return _>=t||_<=i},p=[],m=f[0];m<=f[1];m++){var v=c(m);u(v)&&p.push([v,l(m)])}return p}function dh(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?Xw(e,n):pg(n,e)}var xl=window.THREE?window.THREE:{BufferGeometry:un,Float32BufferAttribute:kt},Sm=new xl.BufferGeometry().setAttribute?"setAttribute":"addAttribute",VA=(function(n){function e(t,i,r,s,o,a,c){var l;CA(this,e),l=RA(this,e),l.type="ConicPolygonGeometry",l.parameters={polygonGeoJson:t,bottomHeight:i,topHeight:r,closedBottom:s,closedTop:o,includeSides:a,curvatureResolution:c},i=i||0,r=r||1,s=s!==void 0?s:!0,o=o!==void 0?o:!0,a=a!==void 0?a:!0,c=c||5;var h=FA(t,{resolution:c}),f=h.contour,u=h.triangles,p=Wo(u.uvs),m=[],v=[],_=[],x=0,w=function(N){var M=Math.round(m.length/3),T=_.length;m=m.concat(N.vertices),v=v.concat(N.uvs),_=_.concat(M?N.indices.map(function(B){return B+M}):N.indices),l.addGroup(T,_.length-T,x++)};a&&w(S()),s&&w(R(i,!1)),o&&w(R(r,!0)),l.setIndex(_),l[Sm]("position",new xl.Float32BufferAttribute(m,3)),l[Sm]("uv",new xl.Float32BufferAttribute(v,2)),l.computeVertexNormals();function A(C,N){var M=typeof N=="function"?N:function(){return N},T=C.map(function(B){return B.map(function(U){var z=Ui(U,2),D=z[0],H=z[1];return HA(H,D,M(D,H))})});return bg(T)}function S(){for(var C=A(f,i),N=C.vertices,M=C.holes,T=A(f,r),B=T.vertices,U=Wo([B,N]),z=Math.round(B.length/3),D=new Set(M),H=0,P=[],O=0;O<z;O++){var F=O+1;if(F===z)F=H;else if(D.has(F)){var G=F;F=H,H=G}P.push(O,O+z,F+z),P.push(F+z,F,O)}for(var Z=[],te=1;te>=0;te--)for(var ue=0;ue<z;ue+=1)Z.push(ue/(z-1),te);return{indices:P,vertices:U,uvs:Z}}function R(C){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:N?u.indices:u.indices.slice().reverse(),vertices:A([u.points],C).vertices,uvs:p}}return l}return IA(e,n),PA(e)})(xl.BufferGeometry);function HA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=(90-n)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}const Mm=new Lr,Ka=new W;class e_ extends Gv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new kt(e,3)),this.setAttribute("uv",new kt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Iu(t,6,1);return this.setAttribute("instanceStart",new Vi(i,3,0)),this.setAttribute("instanceEnd",new Vi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Iu(t,6,1);return this.setAttribute("instanceColorStart",new Vi(i,3,0)),this.setAttribute("instanceColorEnd",new Vi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Iv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Mm.setFromBufferAttribute(t),this.boundingBox.union(Mm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ka.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ka)),Ka.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ka));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:Oh.merge([Pe.common,Pe.fog,Pe.line]),vertexShader:`
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
		`};class t_ extends di{constructor(e){super({type:"LineMaterial",uniforms:Oh.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ef=new zt,Em=new W,bm=new W,_n=new zt,xn=new zt,Ni=new zt,bf=new W,wf=new Yt,vn=new Zv,wm=new W,Za=new Lr,Ja=new js,Oi=new zt;let Fi,jr;function Tm(n,e,t){return Oi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Oi.multiplyScalar(1/Oi.w),Oi.x=jr/t.width,Oi.y=jr/t.height,Oi.applyMatrix4(n.projectionMatrixInverse),Oi.multiplyScalar(1/Oi.w),Math.abs(Math.max(Oi.x,Oi.y))}function GA(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){vn.start.fromBufferAttribute(r,a),vn.end.fromBufferAttribute(s,a),vn.applyMatrix4(t);const l=new W,h=new W;Fi.distanceSqToSegment(vn.start,vn.end,h,l),h.distanceTo(l)<jr*.5&&e.push({point:h,pointOnLine:l,distance:Fi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function WA(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),f=-e.near;Fi.at(1,Ni),Ni.w=1,Ni.applyMatrix4(e.matrixWorldInverse),Ni.applyMatrix4(i),Ni.multiplyScalar(1/Ni.w),Ni.x*=s.x/2,Ni.y*=s.y/2,Ni.z=0,bf.copy(Ni),wf.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(_n.fromBufferAttribute(c,u),xn.fromBufferAttribute(l,u),_n.w=1,xn.w=1,_n.applyMatrix4(wf),xn.applyMatrix4(wf),_n.z>f&&xn.z>f)continue;if(_n.z>f){const A=_n.z-xn.z,S=(_n.z-f)/A;_n.lerp(xn,S)}else if(xn.z>f){const A=xn.z-_n.z,S=(xn.z-f)/A;xn.lerp(_n,S)}_n.applyMatrix4(i),xn.applyMatrix4(i),_n.multiplyScalar(1/_n.w),xn.multiplyScalar(1/xn.w),_n.x*=s.x/2,_n.y*=s.y/2,xn.x*=s.x/2,xn.y*=s.y/2,vn.start.copy(_n),vn.start.z=0,vn.end.copy(xn),vn.end.z=0;const v=vn.closestPointToPointParameter(bf,!0);vn.at(v,wm);const _=k0.lerp(_n.z,xn.z,v),x=_>=-1&&_<=1,w=bf.distanceTo(wm)<jr*.5;if(x&&w){vn.start.fromBufferAttribute(c,u),vn.end.fromBufferAttribute(l,u),vn.start.applyMatrix4(o),vn.end.applyMatrix4(o);const A=new W,S=new W;Fi.distanceSqToSegment(vn.start,vn.end,S,A),t.push({point:S,pointOnLine:A,distance:Fi.origin.distanceTo(S),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class $A extends Tt{constructor(e=new e_,t=new t_({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Em.fromBufferAttribute(t,o),bm.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Em.distanceTo(bm);const s=new Iu(r,2,1);return e.setAttribute("instanceDistanceStart",new Vi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Vi(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Fi=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;jr=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Ja.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=jr*.5;else{const f=Math.max(r.near,Ja.distanceToPoint(Fi.origin));l=Tm(r,f,c.resolution)}if(Ja.radius+=l,Fi.intersectsSphere(Ja)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Za.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=jr*.5;else{const f=Math.max(r.near,Za.distanceToPoint(Fi.origin));h=Tm(r,f,c.resolution)}Za.expandByScalar(h),Fi.intersectsBox(Za)!==!1&&(i?GA(this,t):WA(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ef),this.material.uniforms.resolution.value.set(Ef.z,Ef.w))}}const n_={Africa:16757575,Asia:9427311,Europe:9300160,"North America":16353195,"South America":16767309,Oceania:12160754,Antarctica:16055293,"Seven seas (open ocean)":12160754},XA=14211288,qA=3112916,YA=9358834,i_=100.12,KA=3,Am=100.2,ZA=100.28,JA=2373214,jA=16777215,QA=15398655,lc=[15224125,4026088,3129201,15905076,10120654];let ja=null;function ea(){if(!ja){const n=new Uint8Array([90,150,210,255]);ja=new Z0(n,n.length,1,bh),ja.needsUpdate=!0}return ja}function vl(n){return new Gs({color:n,gradientMap:ea()})}const wo=Math.PI/180,Rm=(n,e,t)=>[t*Math.cos(e*wo)*Math.sin(n*wo),t*Math.sin(e*wo),t*Math.cos(e*wo)*Math.cos(n*wo)];function eR(n){const e=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=r.geometry.type==="Polygon"?[r.geometry.coordinates]:r.geometry.coordinates;for(const o of s)for(const a of o)for(let c=0;c<a.length-1;c++){const l=a[c],h=a[c+1];e.push(...Rm(l[0],l[1],Am),...Rm(h[0],h[1],Am))}}const t=new e_;t.setPositions(e);const i=new t_({color:JA,linewidth:2.5,transparent:!0,opacity:.9});return i.resolution.set(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{i.resolution.set(window.innerWidth,window.innerHeight)}),new $A(t,i)}const tR=-63;function nR(){const n=(90-tR)*Math.PI/180,e=new Tt(new $i(i_,48,12,0,Math.PI*2,n,Math.PI-n),new Gs({color:n_.Antarctica,gradientMap:ea()}));return e.name="ATA",e}function iR(n){const e=new An,t=new Map,i=new Map,r=new Tt(new $i(Nu,64,64),new Gs({color:qA,gradientMap:ea()}));e.add(r),e.add(nR()),e.add(eR(n));for(const s of n.features){if(s.properties.id==="ATA")continue;const o=n_[s.properties.continent]??XA,a=new Gs({color:o,gradientMap:ea()});t.set(s.properties.id,a),i.set(s.properties.id,s.properties.continent);const c=s.geometry.type==="Polygon"?[s.geometry.coordinates]:s.geometry.coordinates,l=new An;l.name=s.properties.id;for(const h of c){const f=new VA(h,Nu,i_,!1,!0,!1,KA);l.add(new Tt(f,a))}e.add(l)}return{group:e,countryMaterials:t,continentOf:i}}function rR(){const n=new di({transparent:!0,side:Vn,depthWrite:!1,uniforms:{glowColor:{value:new _t(QA)}},vertexShader:`
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
      }`});return new Tt(new $i(104.5,64,64),n)}function sR(n){const e=new xv;e.background=new _t(YA);const t=new fi(60,1,.1,2e3);t.position.set(0,0,300);const i=new Xb({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=new Vv(16774368,2.4);r.position.set(200,150,100);const s=new Bv(12376319,3813160,.9);e.add(r,s,new Hv(16777215,.35)),e.add(rR());const o=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",o),o(),{scene:e,camera:t,renderer:i}}async function oR(){const n=async o=>{const a=await fetch(o);if(!a.ok)throw new Error(`Failed to load ${o}`);return await a.json()},[t,i,r,s]=await Promise.all([n("./data/world.geo.json"),n("./data/countries.json"),n("./data/landmarks.json"),n("./data/riddles.json")]);return{world:t,countries:i,landmarks:r,riddles:s}}const aR=8;function lR(){const n=new Set;window.addEventListener("keydown",i=>n.add(i.code)),window.addEventListener("keyup",i=>n.delete(i.code)),window.addEventListener("blur",()=>n.clear()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&n.clear()});const e=(i,r)=>(i.some(s=>n.has(s))?1:0)-(r.some(s=>n.has(s))?1:0),t={throttle:0,turn:0,pitch:0};return{read(i){const r={throttle:e(["KeyW"],["KeyS"]),turn:e(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),pitch:e(["ArrowUp","KeyR"],["ArrowDown","KeyF"])},s=Math.min(1,aR*i);return t.throttle+=(r.throttle-t.throttle)*s,t.turn+=(r.turn-t.turn)*s,t.pitch+=(r.pitch-t.pitch)*s,{...t}}}}function fc(n=15224125,e="seaplane"){const t=new An,i=vl(n),r=vl(16249832),s=e==="lifter"?.85:.6,o=new Tt(new Dl(s,2.4,4,8),i);o.rotation.x=Math.PI/2;const a=e==="stunt"?6:e==="jet"?3.6:5,c=e==="jet"?1.6:1.1,l=new Tt(new Hi(a,.15,c),r);e==="jet"&&(l.position.z=-.4);const h=new Tt(new Hi(1.8,.12,.6),r);h.position.set(0,.1,-1.6);const f=new Tt(new Hi(.12,.9,.6),i);f.position.set(0,.5,-1.6);const u=new Tt(new xc(e==="jet"?.35:.45,e==="jet"?1.4:.8,8),r);if(u.rotation.x=Math.PI/2,u.position.z=e==="jet"?2.3:2,t.add(o,l,h,f,u),e==="seaplane")for(const p of[-1,1]){const m=new Tt(new Dl(.18,1.6,4,6),r);m.rotation.x=Math.PI/2,m.position.set(p*.9,-.8,.2),t.add(m)}if(e==="lifter"){const p=f.clone();p.position.y=.9,p.scale.set(1,.6,1),t.add(p)}if(e!=="jet"){const p=new An;p.name="propeller";const m=vl(3815994),v=new An;v.name="propellerBlades";for(const x of[0,Math.PI/2]){const w=new Tt(new Hi(.12,1.7,.06),m);w.rotation.z=x,v.add(w)}const _=new Tt(new Nh(.95,24),new sr({color:14540253,transparent:!0,opacity:.25,side:Ei}));_.name="propellerDisc",_.visible=!1,p.add(v,_),p.position.z=2.45,t.add(p)}return t}const cR=.35,fR=8,uR=52;function hR(n){const e=Math.min(1,Math.max(0,n));return{spinRadPerS:fR+uR*e,blurVisible:e>=cR}}const Cm=n=>new W(n.x,n.y,n.z),dR=1/60,pR=12,mR=.15,gR=5,_R=25,xR=.55,vR=.28,Pm=.1,yR=58,SR=16,MR=.06;function Im(n,e){let t=0,i=0;const r=n.getObjectByName("propellerBlades"),s=n.getObjectByName("propellerDisc");return{update(o,a){const c=Cm(ui(o.lat,o.lon,o.altKm)),l=Mc(o.lat,o.lon,o.headingDeg,gR),h=Cm(ui(l.lat,l.lon,o.altKm)),f=c.clone().normalize();n.position.copy(c),n.up.copy(f),n.lookAt(h),t+=(a.turn*xR-t)*Pm,i+=(a.pitch*vR-i)*Pm,n.rotateZ(t),n.rotateX(-i);const u=h.clone().sub(c).normalize(),p=c.clone().addScaledVector(u,-30).addScaledVector(f,pR);e.position.lerp(p,mR),e.up.copy(f);const m=c.clone().addScaledVector(u,_R);e.lookAt(m);const v=Math.min(1,Math.max(0,(o.speedKmh-Ws)/(Bh-Ws))),_=yR+SR*v;if(e.fov+=(_-e.fov)*MR,e.updateProjectionMatrix(),r&&s){const x=hR(v);r.rotation.z+=x.spinRadPerS*dR,r.visible=!x.blurVisible,s.visible=x.blurVisible}}}}function ER(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:16px;left:16px;color:#fff;font:600 16px system-ui;background:rgba(11,16,38,.7);padding:10px 14px;border-radius:10px;pointer-events:none";const t=document.createElement("div"),i=document.createElement("div");return i.style.cssText="font-weight:400;font-size:13px;opacity:.8;margin-top:4px",e.append(t,i),n.appendChild(e),{setCountry(r){t.textContent=r?`Flying over: ${r}`:"Flying over: open ocean"},setTelemetry(r){i.textContent=`${Math.round(r.speedKmh)} km/h · hdg ${Math.round(r.headingDeg)}°`}}}const Qa=.15,Dm=n=>new W(n.x,n.y,n.z);function bR(n){const e=new Map;return{sync(t,i){const r=new Set;t.players.forEach((s,o)=>{if(o===i)return;r.add(o);const a={lat:s.lat,lon:s.lon,altKm:s.altKm,headingDeg:s.headingDeg,speedKmh:s.speedKmh},c=e.get(o);if(c)c.targetState=a,c.tumbleUntil=s.tumbleUntil;else{const l=fc(lc[s.colorIdx%lc.length]);n.add(l),e.set(o,{mesh:l,current:a,targetState:a,tumbleUntil:s.tumbleUntil})}});for(const[s,o]of e)r.has(s)||(n.remove(o.mesh),e.delete(s))},update(){for(const t of e.values()){const i=t.current,r=t.targetState;i.lat+=(r.lat-i.lat)*Qa,i.lon+=((r.lon-i.lon+540)%360-180)*Qa,i.lon=(i.lon+540)%360-180,i.altKm+=(r.altKm-i.altKm)*Qa,i.headingDeg=T1(i.headingDeg,r.headingDeg,Qa);const s=Dm(ui(i.lat,i.lon,i.altKm)),o=Mc(i.lat,i.lon,i.headingDeg,5);t.mesh.position.copy(s),t.mesh.up.copy(s.clone().normalize()),t.mesh.lookAt(Dm(ui(o.lat,o.lon,i.altKm))),Date.now()<t.tumbleUntil&&t.mesh.rotateZ(Date.now()%360*.05)}}}}const wR=16765471;function TR(n){const e=new Tt(new _c(2.5,2.5,60,24,1,!0),new sr({color:wR,transparent:!0,opacity:.45,side:Ei,depthWrite:!1}));return e.visible=!1,n.add(e),{showAt(t,i){const r=ui(t,i,0),s=new W(r.x,r.y,r.z).normalize();e.position.copy(s.clone().multiplyScalar(130)),e.quaternion.setFromUnitVectors(new W(0,1,0),s),e.visible=!0},hide(){e.visible=!1},update(t){if(!e.visible)return;const i=e.material;i.opacity=.35+.2*Math.sin(t*3)}}}const r_=4,Tf=.12,s_=64;function AR(){return{puffs:[],spawnTimerS:0}}function RR(n,e,t,i){const r=n.puffs.map(a=>({...a,ageS:a.ageS+e})).filter(a=>a.ageS<r_);let s=n.spawnTimerS+e;if(!i)return{puffs:r,spawnTimerS:Math.min(s,Tf)};const o=[...r];for(;s>=Tf;)s-=Tf,o.length<s_&&o.push({x:t.x,y:t.y,z:t.z,ageS:0});return{puffs:o,spawnTimerS:s}}const CR=.9,PR=2.2,Lm=.95,Af=.35,Nm=3,IR="#d7e7f2";function DR(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)throw new Error("2d canvas unavailable");const r=[{x:64,y:68,r:30},{x:40+n*3,y:62,r:20+n},{x:90-n*4,y:62,r:22},{x:56+n*5,y:46,r:17+n*2}],s=o=>{for(const a of r)i.beginPath(),i.arc(a.x,a.y+o,a.r,0,Math.PI*2),i.fill()};return i.fillStyle=IR,s(6),i.fillStyle="#ffffff",s(0),new Il(t)}function LR(n){const e=[];for(let s=0;s<Nm;s++)e.push(DR(s));const t=[],i=[];for(let s=0;s<s_;s++){const o=new Dh({map:e[s%Nm],transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.9}),a=new Y0(o);a.visible=!1,t.push(a),i.push(.8+Math.random()*.5),n.add(a)}let r=AR();return{update(s,o,a){r=RR(r,s,o,a);for(let c=0;c<t.length;c++){const l=t[c],h=r.puffs[c];if(!h){l.visible=!1;continue}const f=h.ageS/r_;l.visible=!0,l.position.set(h.x,h.y,h.z);const u=(CR+PR*f)*i[c];l.scale.set(u,u,1),l.material.opacity=f<Af?Lm:Lm*(1-(f-Af)/(1-Af))}}}}function bc(n){return/^[A-Za-z]{2}$/.test(n)?String.fromCodePoint(...[...n.toUpperCase()].map(e=>127462+(e.charCodeAt(0)-65))):"🏳️"}const NR={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"},o_=(n,e)=>{const t=n.legs[e];return t?{type:t.legType,countryId:t.countryId,zone:{lat:t.zoneLat,lon:t.zoneLon},label:t.label,sublabel:t.sublabel}:null};function OR(n,e,t){var s;if(!n||n.phase!=="racing")return null;const i=(s=n.players)==null?void 0:s.get(e);if(!i)return null;const r=o_(n,i.legIndex);return r?_g(t,r):null}function UR(n){let e=-1,t=0,i=0;const r=()=>{e===-1&&t===0||(e=-1,t=0,n.banner.hide(),n.hints.clear(),n.beacon.hide())};return{update(s,o,a,c){var x,w;if(!s||s.phase!=="racing"){r();return}const l=s.players.get(o);if(!l){r();return}const h=o_(s,l.legIndex);if(!h){r();return}if(l.legIndex!==e||s.countdownEndsAt!==t){if(!(s.countdownEndsAt!==t)&&e>=0&&l.legIndex>e){const S=s.legs[e],R=((x=n.countries[(S==null?void 0:S.countryId)??""])==null?void 0:x.name)??"";n.banner.toast(`✅ ${R}! Leg ${e+1} of ${s.legs.length} done`)}e=l.legIndex,t=s.countdownEndsAt,i=0,n.hints.setTarget(h.countryId),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,bc(((w=n.countries[h.countryId])==null?void 0:w.cca2)??""))}const f=Date.now(),u=f<l.fogUntil,p=s.difficulty,m=Math.max(0,(f-l.legStartedAt)/1e3),v=u?{continent:!1,compass:!1,outline:!1}:Uu(m,p);n.hints.setFlags(v),n.banner.setCompass(v.compass?(mg(a.lat,a.lon,h.zone.lat,h.zone.lon)-a.headingDeg+360)%360:null);const _=gg(a,h,i,c);i=_.inZone?_.dwellS:0,n.banner.setDwell(h.type==="refuel"&&_.inZone?i/zh:null),l.vipState==="falling"?n.banner.setWarning("🪂 Your VIP bailed out — fly through the parachute!"):u?n.banner.setWarning("🌫 Fogged! Hints jammed for a few seconds"):h.type==="refuel"&&_.inZone?n.banner.setWarning("⛽ Refueling — hold steady!"):n.banner.setWarning(_.requirementBlocked?NR[h.type]??null:null)}}}const FR=150,BR=150,zR=160,kR=24,VR=8,HR=8,el=n=>new W(n.x,n.y,n.z);function GR(n){const e=(()=>{const m=document.createElement("canvas");m.width=128,m.height=128;const v=m.getContext("2d");if(!v)throw new Error("2d canvas unavailable");return v.fillStyle="#ffd94d",v.fillRect(0,0,128,128),v.font="bold 96px 'Trebuchet MS', Verdana, sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillStyle="#24365e",v.fillText("?",64,70),new Il(m)})(),t=vl(16767309);t.map=e;const i=new J0({color:2373214}),r=new Hi(2.2,2.2,2.2),s=new Pv(r),o=(()=>{const m=document.createElement("canvas");m.width=32,m.height=32;const v=m.getContext("2d"),_=v.createRadialGradient(16,16,1,16,16,15);return _.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=_,v.fillRect(0,0,32,32),new Il(m)})(),a=[];for(let m=0;m<kR;m++){const v=new An;v.add(new Tt(r,t.clone())),v.add(new Rv(s,i.clone()));const _=new Y0(new Dh({map:o,transparent:!0,depthWrite:!1}));_.position.set(1.4,1.4,0),_.scale.setScalar(1.2),v.add(_),v.visible=!1,a.push({group:v,sparkle:_,wasActive:!1,popT:1}),n.add(v)}const c=new sr({color:3818072,transparent:!0,opacity:.85}),l=[];for(let m=0;m<VR;m++){const v=new An;for(const[_,x,w]of[[0,0,1.1],[-.9,.2,.8],[.9,.2,.8],[0,.7,.7]]){const A=new Tt(new $i(w,10,8),c);A.position.set(_,x,0),v.add(A)}v.visible=!1,l.push(v),n.add(v)}const h=new sr({color:16747586}),f=[];for(let m=0;m<5;m++){const v=new An,_=new Tt(new $i(.9,10,6,0,Math.PI*2,0,Math.PI/2),h),x=new Tt(new $i(.3,8,6),new sr({color:16249832}));x.position.y=-.9,v.add(_,x),v.visible=!1,f.push(v),n.add(v)}const u=new sr({color:2237998}),p=[];for(let m=0;m<HR;m++){const v=new An;for(const[_,x]of[[0,0],[-.7,-.6],[.7,-.6]]){const w=new Tt(new xc(.25,.7,5),u);w.rotation.x=Math.PI/2,w.position.set(_,0,x),v.add(w)}v.visible=!1,p.push(v),n.add(v)}return{update(m,v){const _=(m==null?void 0:m.phase)==="racing",x=Date.now();for(let A=0;A<a.length;A++){const S=_?m.bubbles[A]:void 0,R=a[A],C=!!(S&&S.activeAt<=x);if(R.wasActive&&!C&&(R.popT=0),R.wasActive=C,R.popT<1){R.popT=Math.min(1,R.popT+1/(.3*60)),R.group.visible=R.popT<.999,R.group.scale.setScalar(1+R.popT*1.2),R.group.traverse(N=>{const M=N.material;M&&(M.transparent=!0,M.opacity=1-R.popT)});continue}if(!S||!C){R.group.visible=!1;continue}R.group.visible=!0,R.group.scale.setScalar(1),R.group.traverse(N=>{const M=N.material;M&&(M.opacity=1)}),R.group.position.copy(el(ui(S.lat,S.lon,FR))),R.group.position.addScaledVector(R.group.position.clone().normalize(),Math.sin(v*2+A)*.4),R.group.rotation.y=v*1+A,R.sparkle.material.opacity=.4+.6*Math.abs(Math.sin(v*1.5+A*1.3))}for(let A=0;A<l.length;A++){const S=_?m.storms[A]:void 0,R=l[A];R.visible=!!S,S&&(R.position.copy(el(ui(S.lat,S.lon,BR))),R.up.copy(R.position.clone().normalize()))}for(let A=0;A<p.length;A++){const S=_?m.birds[A]:void 0,R=p[A];R.visible=!!S,S&&R.position.copy(el(ui(S.lat,S.lon,zR)))}const w=[];_&&m.players.forEach(A=>{A.vipState==="falling"&&w.push({lat:A.vipLat,lon:A.vipLon,altKm:A.vipAltKm})});for(let A=0;A<f.length;A++){const S=f[A],R=w[A];S.visible=!!R,R&&(S.position.copy(el(ui(R.lat,R.lon,R.altKm))),S.up.copy(S.position.clone().normalize()))}}}}const WR={jetstream:"💨",storm:"🌩",fog:"🌫",bird:"🐦",freeze:"❄"},$R={jetstream:"Jet Stream",storm:"Storm Cloud",fog:"Fog Bomb",bird:"Bird Flock",freeze:"Time Freeze"},XR=new Set(["fog","freeze"]);function qR(n,e){const t=document.createElement("div");t.style.cssText="position:fixed;top:16px;right:16px;color:#fff;font:700 15px system-ui;background:rgba(11,16,38,.75);padding:10px 14px;border-radius:12px;pointer-events:none;display:none;text-align:center;z-index:5",n.appendChild(t);const i=document.createElement("div");i.style.cssText="position:fixed;top:35%;left:50%;transform:translateX(-50%);color:#fff;font:600 15px system-ui;background:rgba(20,27,61,.95);padding:14px 20px;border-radius:14px;display:none;text-align:left;z-index:8;pointer-events:auto",n.appendChild(i);let r=null,s="",o=!1;const a=()=>{const h=[];return r==null||r.players.forEach((f,u)=>{u===s||f.finishedAt!==0||h.push({sessionId:u,label:`${f.nickname} — leg ${f.legIndex+1}`})}),h},c=()=>{o=!1,i.style.display="none"},l=()=>{const h=a();if(h.length!==0){if(h.length===1){e(h[0].sessionId);return}o=!0,i.innerHTML='<div style="font-weight:800;margin-bottom:8px">Pick a rival (Esc cancels)</div>'+h.map((f,u)=>`<div data-target="${f.sessionId}" style="padding:4px 6px;cursor:pointer">${u+1}. ${f.label}</div>`).join(""),i.style.display="block";for(const f of i.querySelectorAll("[data-target]"))f.addEventListener("click",()=>{e(f.dataset.target),c()})}};return window.addEventListener("keydown",h=>{if(o){h.code==="Escape"&&c();const u=Number(h.key);if(u>=1&&u<=4){const p=a()[u-1];p&&(e(p.sessionId),c())}return}if(h.code!=="Space"||!r||r.phase!=="racing")return;const f=r.players.get(s);!f||f.heldItem===""||(h.preventDefault(),XR.has(f.heldItem)?l():e())}),{update(h,f){r=h,s=f;const u=(h==null?void 0:h.phase)==="racing"?h.players.get(f):void 0,p=(u==null?void 0:u.heldItem)??"";if(p===""){t.style.display="none",o&&c();return}t.style.display="block",t.innerHTML=`<div style="font-size:26px">${WR[p]??"❔"}</div>${$R[p]??p}<div style="font-weight:400;font-size:12px;opacity:.75">Space to use</div>`}}}const Om=["🥇","🥈","🥉","4.","5."];function YR(n){return n.sort((e,t)=>{const i=e.player.placement||99,r=t.player.placement||99;return i!==r?i-r:t.player.legIndex!==e.player.legIndex?t.player.legIndex-e.player.legIndex:e.player.nickname.localeCompare(t.player.nickname)})}function KR(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:96px;left:50%;transform:translateX(-50%);color:#fff;font:600 14px system-ui;background:rgba(11,16,38,.7);padding:10px 18px;border-radius:12px;pointer-events:none;text-align:center;z-index:4",n.appendChild(e);let t="";return{update(i,r,s){var c;const o=[];i.players.forEach((l,h)=>o.push({sessionId:h,player:l})),YR(o);const a=[i.phase,i.phase==="countdown"?Math.ceil((i.countdownEndsAt-Date.now())/1e3):"",o.map(({player:l})=>`${l.nickname}:${l.legIndex}:${l.placement}:${l.points}`).join(","),i.legs.length,i.hostSessionId===r].join("|");if(a!==t){if(t=a,i.phase==="countdown"){const l=Math.max(0,Math.ceil((i.countdownEndsAt-Date.now())/1e3));e.innerHTML="",e.textContent=`Contract: ${i.legs.length} legs — starting in ${l}…`}else if(i.phase==="racing")e.innerHTML=o.map(({sessionId:l,player:h})=>{const f=l===r?" (you)":"",u=h.placement>0?`🏁 ${Om[h.placement-1]??h.placement}`:`Leg ${Math.min(h.legIndex+1,i.legs.length)}/${i.legs.length}`;return`<div>🛩 ${h.nickname}${f} — ${u}</div>`}).join("");else if(i.phase==="finished"){const l=o.map(({sessionId:f,player:u})=>{const p=f===r,m=Om[u.placement-1]??`${u.placement}.`;return`<div style="font-size:17px;margin:2px 0;${p?"color:#ffd94d":""}">${m} ${u.nickname}${p?" (you)":""} — ${u.points} pts</div>`}).join(""),h=r===i.hostSessionId?'<button id="race-again" style="margin-top:10px;padding:8px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 15px system-ui;cursor:pointer;pointer-events:auto">Race again</button>':'<div style="opacity:.7;margin-top:8px;font-weight:400">Waiting for the host to start the next race…</div>';e.innerHTML=`<div style="font-size:20px;font-weight:700;margin-bottom:6px">🏁 Race complete</div>${l}${h}`,s&&((c=e.querySelector("#race-again"))==null||c.addEventListener("click",s,{once:!0}))}else e.innerHTML="",e.textContent="";e.style.display=e.textContent||e.innerHTML?"block":"none"}}}}const ZR="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.75);padding:12px 20px;border-radius:14px;pointer-events:none;text-align:center;min-width:340px;z-index:5",JR="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);color:#fff;font:800 30px system-ui;background:rgba(20,27,61,.92);padding:18px 30px;border-radius:18px;pointer-events:none;text-align:center;z-index:6;transition:opacity .4s ease";function jR(n){const e=document.createElement("div");e.style.cssText=ZR,e.style.display="none",e.innerHTML=`
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
    </div>`,n.appendChild(e);const t=s=>e.querySelector(s),i=document.createElement("div");i.style.cssText=JR,i.style.opacity="0",n.appendChild(i);let r=null;return{show(s,o){t("[data-flag]").textContent=s.type==="riddle"?"❓":o,t("[data-label]").textContent=s.label,t("[data-sub]").textContent=s.sublabel,e.style.display="block",this.setCompass(null),this.setDwell(null),this.setWarning(null)},hide(){e.style.display="none"},setCompass(s){const o=t("[data-compass]");s===null?o.style.display="none":(o.style.display="inline-block",o.style.transform=`rotate(${Math.round(s)}deg)`)},setDwell(s){const o=t("[data-dwellwrap]");s===null?o.style.display="none":(o.style.display="block",t("[data-dwell]").style.width=`${Math.min(100,s*100)}%`)},setWarning(s){const o=t("[data-warn]");o.style.display=s?"block":"none",o.textContent=s??""},setClock(s){t("[data-clock]").textContent=s??""},toast(s,o=1800){i.textContent=s,i.style.opacity="1",r&&clearTimeout(r),r=setTimeout(()=>{i.style.opacity="0"},o)}}}function jh(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Rf={},Um={},Fm;function QR(){return Fm||(Fm=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),Um}var tl={},ph=function(n,e){return ph=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},ph(n,e)};function a_(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ph(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var uc=function(){return uc=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},uc.apply(this,arguments)};function l_(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function c_(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function f_(n,e){return function(t,i){e(t,i,n)}}function u_(n,e,t,i,r,s){function o(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,u=!1,p=t.length-1;p>=0;p--){var m={};for(var v in i)m[v]=v==="access"?{}:i[v];for(var v in i.access)m.access[v]=i.access[v];m.addInitializer=function(x){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(x||null))};var _=(0,t[p])(a==="accessor"?{get:h.get,set:h.set}:h[c],m);if(a==="accessor"){if(_===void 0)continue;if(_===null||typeof _!="object")throw new TypeError("Object expected");(f=o(_.get))&&(h.get=f),(f=o(_.set))&&(h.set=f),(f=o(_.init))&&r.unshift(f)}else(f=o(_))&&(a==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),u=!0}function h_(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function d_(n){return typeof n=="symbol"?n:"".concat(n)}function p_(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function m_(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function g_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(f){o(f)}}function c(h){try{l(i.throw(h))}catch(f){o(f)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function __(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var wc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function x_(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&wc(e,n,t)}function hc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Qh(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function v_(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Qh(arguments[e]));return n}function y_(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function S_(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Zs(n){return this instanceof Zs?(this.v=n,this):new Zs(n)}function M_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){i[p]&&(r[p]=function(v){return new Promise(function(_,x){s.push([p,v,_,x])>1||c(p,v)})},m&&(r[p]=m(r[p])))}function c(p,m){try{l(i[p](m))}catch(v){u(s[0][3],v)}}function l(p){p.value instanceof Zs?Promise.resolve(p.value.v).then(h,f):u(s[0][2],p)}function h(p){c("next",p)}function f(p){c("throw",p)}function u(p,m){p(m),s.shift(),s.length&&c(s[0][0],s[0][1])}}function E_(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:Zs(n[r](o)),done:!1}:s?s(o):o}:s}}function b_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof hc=="function"?hc(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function w_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var eC=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},mh=function(n){return mh=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},mh(n)};function T_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=mh(n),i=0;i<t.length;i++)t[i]!=="default"&&wc(e,n,t[i]);return eC(e,n),e}function A_(n){return n&&n.__esModule?n:{default:n}}function R_(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function C_(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function P_(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function I_(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var tC=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function D_(n){function e(s){n.error=n.hasError?new tC(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function L_(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const nC={__extends:a_,__assign:uc,__rest:l_,__decorate:c_,__param:f_,__esDecorate:u_,__runInitializers:h_,__propKey:d_,__setFunctionName:p_,__metadata:m_,__awaiter:g_,__generator:__,__createBinding:wc,__exportStar:x_,__values:hc,__read:Qh,__spread:v_,__spreadArrays:y_,__spreadArray:S_,__await:Zs,__asyncGenerator:M_,__asyncDelegator:E_,__asyncValues:b_,__makeTemplateObject:w_,__importStar:T_,__importDefault:A_,__classPrivateFieldGet:R_,__classPrivateFieldSet:C_,__classPrivateFieldIn:P_,__addDisposableResource:I_,__disposeResources:D_,__rewriteRelativeImportExtension:L_},iC=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:I_,get __assign(){return uc},__asyncDelegator:E_,__asyncGenerator:M_,__asyncValues:b_,__await:Zs,__awaiter:g_,__classPrivateFieldGet:R_,__classPrivateFieldIn:P_,__classPrivateFieldSet:C_,__createBinding:wc,__decorate:c_,__disposeResources:D_,__esDecorate:u_,__exportStar:x_,__extends:a_,__generator:__,__importDefault:A_,__importStar:T_,__makeTemplateObject:w_,__metadata:m_,__param:f_,__propKey:d_,__read:Qh,__rest:l_,__rewriteRelativeImportExtension:L_,__runInitializers:h_,__setFunctionName:p_,__spread:v_,__spreadArray:S_,__spreadArrays:y_,__values:hc,default:nC},Symbol.toStringTag,{value:"Module"})),Tc=jh(iC);var Cf={},Bm;function Ac(){return Bm||(Bm=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(Cf)),Cf}var Pf={},If={},Df={},No={exports:{}},rC=No.exports,zm;function ed(){return zm||(zm=1,(function(n,e){(function(t,i){i(e)})(rC,(function(t){t.OPERATION=void 0,(function(I){I[I.ADD=128]="ADD",I[I.REPLACE=0]="REPLACE",I[I.DELETE=64]="DELETE",I[I.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",I[I.MOVE_AND_ADD=160]="MOVE_AND_ADD",I[I.DELETE_AND_ADD=192]="DELETE_AND_ADD",I[I.CLEAR=10]="CLEAR",I[I.REVERSE=15]="REVERSE",I[I.MOVE=32]="MOVE",I[I.DELETE_BY_REFID=33]="DELETE_BY_REFID",I[I.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",u="~childType",p="~onEncodeEnd",m="~onDecodeEnd",v="~descriptors",_="~__numFields",x="~__refTypeFieldIndexes",w="~__viewFieldIndexes",A="$__fieldIndexesByViewTag";let S;try{S=new TextEncoder}catch{}const R=new ArrayBuffer(8),C=new Int32Array(R),N=new Float32Array(R),M=new Float64Array(R),T=new BigInt64Array(R),U=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(I,d){for(var g=0,y=0,b=0,V=I.length;b<V;b++)g=I.charCodeAt(b),g<128?y+=1:g<2048?y+=2:g<55296||g>=57344?y+=3:(b++,y+=4);return y};function z(I,d,g){for(var y=0,b=0,V=d.length;b<V;b++)y=d.charCodeAt(b),y<128?I[g.offset++]=y:y<2048?(I[g.offset]=192|y>>6,I[g.offset+1]=128|y&63,g.offset+=2):y<55296||y>=57344?(I[g.offset]=224|y>>12,I[g.offset+1]=128|y>>6&63,I[g.offset+2]=128|y&63,g.offset+=3):(b++,y=65536+((y&1023)<<10|d.charCodeAt(b)&1023),I[g.offset]=240|y>>18,I[g.offset+1]=128|y>>12&63,I[g.offset+2]=128|y>>6&63,I[g.offset+3]=128|y&63,g.offset+=4)}function D(I,d,g){I[g.offset++]=d&255}function H(I,d,g){I[g.offset++]=d&255}function P(I,d,g){I[g.offset++]=d&255,I[g.offset++]=d>>8&255}function O(I,d,g){I[g.offset++]=d&255,I[g.offset++]=d>>8&255}function F(I,d,g){I[g.offset++]=d&255,I[g.offset++]=d>>8&255,I[g.offset++]=d>>16&255,I[g.offset++]=d>>24&255}function G(I,d,g){const y=d>>24,b=d>>16,V=d>>8,X=d;I[g.offset++]=X&255,I[g.offset++]=V&255,I[g.offset++]=b&255,I[g.offset++]=y&255}function Z(I,d,g){const y=Math.floor(d/Math.pow(2,32)),b=d>>>0;G(I,b,g),G(I,y,g)}function te(I,d,g){const y=d/Math.pow(2,32)>>0,b=d>>>0;G(I,b,g),G(I,y,g)}function ue(I,d,g){T[0]=BigInt.asIntN(64,d),F(I,C[0],g),F(I,C[1],g)}function _e(I,d,g){T[0]=BigInt.asIntN(64,d),F(I,C[0],g),F(I,C[1],g)}function Ue(I,d,g){N[0]=d,F(I,C[0],g)}function ke(I,d,g){M[0]=d,F(I,C[0],g),F(I,C[1],g)}function it(I,d,g){I[g.offset++]=d?1:0}function he(I,d,g){d||(d="");let y=U(d,"utf8"),b=0;if(y<32)I[g.offset++]=y|160,b=1;else if(y<256)I[g.offset++]=217,I[g.offset++]=y%255,b=2;else if(y<65536)I[g.offset++]=218,O(I,y,g),b=3;else if(y<4294967296)I[g.offset++]=219,G(I,y,g),b=5;else throw new Error("String too long");return z(I,d,g),b+y}function we(I,d,g){if(isNaN(d))return we(I,0,g);if(isFinite(d)){if(d!==(d|0))return Math.abs(d)<=34028235e31&&(N[0]=d,Math.abs(Math.abs(N[0])-Math.abs(d))<1e-4)?(I[g.offset++]=202,Ue(I,d,g),5):(I[g.offset++]=203,ke(I,d,g),9)}else return we(I,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,g);return d>=0?d<128?(I[g.offset++]=d&255,1):d<256?(I[g.offset++]=204,I[g.offset++]=d&255,2):d<65536?(I[g.offset++]=205,O(I,d,g),3):d<4294967296?(I[g.offset++]=206,G(I,d,g),5):(I[g.offset++]=207,te(I,d,g),9):d>=-32?(I[g.offset++]=224|d+32,1):d>=-128?(I[g.offset++]=208,D(I,d,g),2):d>=-32768?(I[g.offset++]=209,P(I,d,g),3):d>=-2147483648?(I[g.offset++]=210,F(I,d,g),5):(I[g.offset++]=211,Z(I,d,g),9)}const ve={int8:D,uint8:H,int16:P,uint16:O,int32:F,uint32:G,int64:Z,uint64:te,bigint64:ue,biguint64:_e,float32:Ue,float64:ke,boolean:it,string:he,number:we,utf8Write:z,utf8Length:U},je=new ArrayBuffer(8),et=new Int32Array(je),tt=new Float32Array(je),$t=new Float64Array(je),Ie=new BigUint64Array(je),ct=new BigInt64Array(je);function nt(I,d,g){g>I.length-d.offset&&(g=I.length-d.offset);for(var y="",b=0,V=d.offset,X=d.offset+g;V<X;V++){var ee=I[V];if((ee&128)===0){y+=String.fromCharCode(ee);continue}if((ee&224)===192){y+=String.fromCharCode((ee&31)<<6|I[++V]&63);continue}if((ee&240)===224){y+=String.fromCharCode((ee&15)<<12|(I[++V]&63)<<6|(I[++V]&63)<<0);continue}if((ee&248)===240){b=(ee&7)<<18|(I[++V]&63)<<12|(I[++V]&63)<<6|(I[++V]&63)<<0,b>=65536?(b-=65536,y+=String.fromCharCode((b>>>10)+55296,(b&1023)+56320)):y+=String.fromCharCode(b);continue}console.error("decode.utf8Read(): Invalid byte "+ee+" at offset "+V+". Skip to end of string: "+(d.offset+g));break}return d.offset+=g,y}function He(I,d){return At(I,d)<<24>>24}function At(I,d){return I[d.offset++]}function Ft(I,d){return Bt(I,d)<<16>>16}function Bt(I,d){return I[d.offset++]|I[d.offset++]<<8}function Rt(I,d){return I[d.offset++]|I[d.offset++]<<8|I[d.offset++]<<16|I[d.offset++]<<24}function Dt(I,d){return Rt(I,d)>>>0}function Zt(I,d){return et[0]=Rt(I,d),tt[0]}function Y(I,d){return et[0]=Rt(I,d),et[1]=Rt(I,d),$t[0]}function mn(I,d){const g=Dt(I,d);return Rt(I,d)*Math.pow(2,32)+g}function wt(I,d){const g=Dt(I,d);return Dt(I,d)*Math.pow(2,32)+g}function k(I,d){return et[0]=Rt(I,d),et[1]=Rt(I,d),ct[0]}function E(I,d){return et[0]=Rt(I,d),et[1]=Rt(I,d),Ie[0]}function j(I,d){return At(I,d)>0}function se(I,d){const g=I[d.offset++];let y;return g<192?y=g&31:g===217?y=At(I,d):g===218?y=Bt(I,d):g===219&&(y=Dt(I,d)),nt(I,d,y)}function ce(I,d){const g=I[d.offset++];if(g<128)return g;if(g===202)return Zt(I,d);if(g===203)return Y(I,d);if(g===204)return At(I,d);if(g===205)return Bt(I,d);if(g===206)return Dt(I,d);if(g===207)return wt(I,d);if(g===208)return He(I,d);if(g===209)return Ft(I,d);if(g===210)return Rt(I,d);if(g===211)return mn(I,d);if(g>223)return(255-g+1)*-1}function be(I,d){const g=I[d.offset];return g<192&&g>160||g===217||g===218||g===219}const Se={utf8Read:nt,int8:He,uint8:At,int16:Ft,uint16:Bt,int32:Rt,uint32:Dt,float32:Zt,float64:Y,int64:mn,uint64:wt,bigint64:k,biguint64:E,boolean:j,string:se,number:ce,stringCheck:be},fe={},me=new Map;function Me(I,d){d.constructor&&(me.set(d.constructor,I),fe[I]=d),d.encode&&(ve[I]=d.encode),d.decode&&(Se[I]=d.decode)}function Ye(I){return fe[I]}function De(I){for(const d in I)Me(d,I[d]);return d=>q(d)}const gn=class gn{static register(d){const g=Object.getPrototypeOf(d);if(g!==We){let y=gn.inheritedTypes.get(g);y||(y=new Set,gn.inheritedTypes.set(g,y)),y.add(d)}}static cache(d){let g=gn.cachedContexts.get(d);return g||(g=new gn(d),gn.cachedContexts.set(d,g)),g}constructor(d){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},d&&this.discoverTypes(d)}has(d){return this.schemas.has(d)}get(d){return this.types[d]}add(d,g=this.schemas.size){return this.schemas.has(d)?!1:(this.types[g]=d,d[Symbol.metadata]===void 0&&Ze.initialize(d),this.schemas.set(d,g),!0)}getTypeId(d){return this.schemas.get(d)}discoverTypes(d,g,y,b){var ee,Q;if(b&&this.registerFilteredByParent(d,g,y),!this.add(d))return;(ee=gn.inheritedTypes.get(d))==null||ee.forEach(ae=>{this.discoverTypes(ae,g,y,b)});let V=d;for(;(V=Object.getPrototypeOf(V))&&V!==We&&V!==Function.prototype;)this.discoverTypes(V);const X=d[Q=Symbol.metadata]??(d[Q]={});X[w]&&(this.hasFilters=!0);for(const ae in X){const pe=ae,de=X[pe].type,ge=X[pe].tag!==void 0;if(typeof de!="string")if(typeof de=="function")this.discoverTypes(de,d,pe,b||ge);else{const Be=Object.values(de)[0];if(typeof Be=="string")continue;this.discoverTypes(Be,d,pe,b||ge)}}}registerFilteredByParent(d,g,y){let V=`${this.schemas.get(d)??this.schemas.size}`;g&&(V+=`-${this.schemas.get(g)}`),V+=`-${y}`,this.parentFiltered[V]=!0}debug(){let d="";for(const g in this.parentFiltered){const y=g.split("-").map(Number),b=y.pop();d+=`
		`,d+=`${g}: ${y.reverse().map((V,X)=>{const ee=this.types[V],Q=ee[Symbol.metadata];let ae=ee.name;return X===0&&(ae+=`[${Q[b].name}]`),`${ae}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${d}`}};gn.inheritedTypes=new Map,gn.cachedContexts=new Map;let Ee=gn;function Xe(I){if(Array.isArray(I))return{array:Xe(I[0])};if(typeof I.type<"u")return I.type;if(rt(I))return Object.keys(I).every(d=>typeof I[d]=="string")?"string":"number";if(typeof I=="object"&&I!==null){const d=Object.keys(I).find(g=>fe[g]!==void 0);if(d)return I[d]=Xe(I[d]),I}return I}function rt(I){if(typeof I=="function"&&I[Symbol.metadata])return!1;const d=Object.keys(I),g=d.filter(y=>/\d+/.test(y));return!!(g.length>0&&g.length===d.length/2&&I[I[g[0]]]==g[0]||d.length>0&&d.every(y=>typeof I[y]=="string"&&I[y]===y))}const Ze={addField(I,d,g,y,b){if(d>64)throw new Error(`Can't define field '${g}'.
Schema instances may only have up to 64 fields.`);I[d]=Object.assign(I[d]||{},{type:Xe(y),index:d,name:g}),Object.defineProperty(I,v,{value:I[v]||{},enumerable:!1,configurable:!0}),b?(I[v][g]=b,I[v][`_${g}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):I[v][g]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(I,_,{value:d,enumerable:!1,configurable:!0}),Object.defineProperty(I,g,{value:d,enumerable:!1,configurable:!0}),typeof I[d].type!="string"&&(I[x]===void 0&&Object.defineProperty(I,x,{value:[],enumerable:!1,configurable:!0}),I[x].push(d))},setTag(I,d,g){const y=I[d],b=I[y];b.tag=g,I[w]||(Object.defineProperty(I,w,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(I,A,{value:{},enumerable:!1,configurable:!0})),I[w].push(y),I[A][g]||(I[A][g]=[]),I[A][g].push(y)},setFields(I,d){const g=I.prototype.constructor;Ee.register(g);const y=Object.getPrototypeOf(g),b=y&&y[Symbol.metadata],V=Ze.initialize(g);g[s]||(g[s]=We[s]),g[o]||(g[o]=We[o]),g[a]||(g[a]=We[a]),g.prototype.toJSON||(g.prototype.toJSON=We.prototype.toJSON);let X=V[_]??(b&&b[_])??-1;X++;for(const ee in d){const Q=Xe(d[ee]),ae=typeof Object.keys(Q)[0]=="string"&&Ye(Object.keys(Q)[0]),pe=ae?Object.values(Q)[0]:Q;Ze.addField(V,X,ee,Q,oe(`_${ee}`,X,pe,ae)),X++}return I},isDeprecated(I,d){return I[d].deprecated===!0},init(I){const d={};I[Symbol.metadata]=d,Object.defineProperty(d,_,{value:0,enumerable:!1,configurable:!0})},initialize(I){const d=Object.getPrototypeOf(I),g=d[Symbol.metadata];let y=I[Symbol.metadata]??Object.create(null);return d!==We&&y===g&&(y=Object.create(null),g&&(Object.setPrototypeOf(y,g),Object.defineProperty(y,_,{value:g[_],enumerable:!1,configurable:!0,writable:!0}),g[w]!==void 0&&(Object.defineProperty(y,w,{value:[...g[w]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(y,A,{value:{...g[A]},enumerable:!1,configurable:!0,writable:!0})),g[x]!==void 0&&Object.defineProperty(y,x,{value:[...g[x]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(y,v,{value:{...g[v]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(I,Symbol.metadata,{value:y,writable:!1,configurable:!0}),y},isValidInstance(I){return I.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(I.constructor[Symbol.metadata],_)},getFields(I){const d=I[Symbol.metadata],g={};for(let y=0;y<=d[_];y++)g[d[y].name]=d[y].type;return g},hasViewTagAtIndex(I,d){var g;return(g=I==null?void 0:I[w])==null?void 0:g.includes(d)}};function $(I){return{indexes:{},operations:[],queueRootNode:I}}function Te(){return{next:void 0,tail:void 0}}function le(I,d){const g=I.indexes[d];g===void 0?I.indexes[d]=I.operations.push(d)-1:I.operations[g]=d}function Re(I,d){var y;let g=I.indexes[d];g===void 0&&(g=Object.values(I.indexes).at(-1),d=(y=Object.entries(I.indexes).find(([b,V])=>V===g))==null?void 0:y[0]),I.operations[g]=void 0,delete I.indexes[d]}class Ce{constructor(d){var g;this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=d,this.metadata=d.constructor[Symbol.metadata],(g=this.metadata)!=null&&g[w]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(d){this.root=d;const g=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,g),g&&this.forEachChild((y,b)=>{y.root!==d?y.setRoot(d):d.add(y)})}setParent(d,g,y){if(this.addParent(d,y),!g)return;const b=g.add(this);g!==this.root&&(this.root=g,this.checkIsFiltered(d,y,b)),b&&this.forEachChild((V,X)=>{if(V.root===g){g.add(V),g.moveNextToParent(V);return}V.setParent(this.ref,g,X)})}forEachChild(d){var g,y;if(this.ref[u]){if(typeof this.ref[u]!="string")for(const[b,V]of this.ref.entries())V&&d(V[f],((g=this.indexes)==null?void 0:g[b])??b)}else for(const b of((y=this.metadata)==null?void 0:y[x])??[]){const V=this.metadata[b],X=this.ref[V.name];X&&d(X[f],b)}}operation(d){var g,y;this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-d),(g=this.root)==null||g.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-d),(y=this.root)==null||y.enqueueChangeTree(this,"changes"))}change(d,g=t.OPERATION.ADD){var X,ee,Q;const y=this.isFiltered||((ee=(X=this.metadata)==null?void 0:X[d])==null?void 0:ee.tag)!==void 0,b=y?this.filteredChanges:this.changes,V=this.indexedOperations[d];if(!V||V===t.OPERATION.DELETE){const ae=V&&V===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:g;this.indexedOperations[d]=ae}le(b,d),y?(le(this.allFilteredChanges,d),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(le(this.allChanges,d),(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(d){const g=this.isFiltered?this.filteredChanges:this.changes,y={},b={};for(const V in this.indexedOperations)y[Number(V)+d]=this.indexedOperations[V],b[Number(V)+d]=g.indexes[V];this.indexedOperations=y,g.indexes=b,g.operations=g.operations.map(V=>V+d)}shiftAllChangeIndexes(d,g=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(d,g,this.allFilteredChanges),this._shiftAllChangeIndexes(d,g,this.allChanges)):this._shiftAllChangeIndexes(d,g,this.allChanges)}_shiftAllChangeIndexes(d,g=0,y){const b={};let V=0;for(const X in y.indexes)b[V++]=y.indexes[X];y.indexes=b;for(let X=0;X<y.operations.length;X++){const ee=y.operations[X];ee>g&&(y.operations[X]=ee+d)}}indexedOperation(d,g,y=d){var b,V;this.indexedOperations[d]=g,this.filteredChanges!==void 0?(le(this.allFilteredChanges,y),le(this.filteredChanges,d),(b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges")):(le(this.allChanges,y),le(this.changes,d),(V=this.root)==null||V.enqueueChangeTree(this,"changes"))}getType(d){return this.ref[u]||this.metadata[d].type}getChange(d){return this.indexedOperations[d]}getValue(d,g=!1){return this.ref[l](d,g)}delete(d,g,y=d){var X,ee,Q;if(d===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${d}'`)}catch(ae){console.warn(ae)}return}const b=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[d]=g??t.OPERATION.DELETE,le(b,d),Re(this.allChanges,y);const V=this.getValue(d);return V&&V[f]&&((X=this.root)==null||X.remove(V[f])),this.filteredChanges!==void 0?(Re(this.allFilteredChanges,y),(ee=this.root)==null||ee.enqueueChangeTree(this,"filteredChanges")):(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"),V}endEncode(d){var g,y;this.indexedOperations={},this[d]=$(),(y=(g=this.ref)[p])==null||y.call(g),this.isNew=!1}discard(d=!1){var g,y;(y=(g=this.ref)[p])==null||y.call(g),this.indexedOperations={},this.changes=$(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=$(this.filteredChanges.queueRootNode)),d&&(this.allChanges=$(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=$(this.allFilteredChanges.queueRootNode)))}discardAll(){const d=Object.keys(this.indexedOperations);for(let g=0,y=d.length;g<y;g++){const b=this.getValue(Number(d[g]));b&&b[f]&&b[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(d,g,y){var b,V,X,ee;this.root.types.hasFilters&&(this._checkFilteredByParent(d,g),this.filteredChanges!==void 0&&((b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges"),y&&((V=this.root)==null||V.enqueueChangeTree(this,"allFilteredChanges")))),this.isFiltered||((X=this.root)==null||X.enqueueChangeTree(this,"changes"),y&&((ee=this.root)==null||ee.enqueueChangeTree(this,"allChanges")))}_checkFilteredByParent(d,g){if(!d)return;const y=Ze.isValidInstance(this.ref)?this.ref.constructor:this.ref[u];let b,V=!Ze.isValidInstance(d);V?(b=d[f],d=b.parent,g=b.parentIndex):b=d[f];const X=d.constructor;let ee=`${this.root.types.getTypeId(y)}`;X&&(ee+=`-${this.root.types.schemas.get(X)}`),ee+=`-${g}`;const Q=Ze.hasViewTagAtIndex(X==null?void 0:X[Symbol.metadata],g);this.isFiltered=d[f].isFiltered||this.root.types.parentFiltered[ee]||Q,this.isFiltered&&(this.isVisibilitySharedWithParent=b.isFiltered&&typeof y!="string"&&!Q&&V,this.filteredChanges||(this.filteredChanges=$(),this.allFilteredChanges=$()),this.changes.operations.length>0&&(this.changes.operations.forEach(ae=>le(this.filteredChanges,ae)),this.allChanges.operations.forEach(ae=>le(this.allFilteredChanges,ae)),this.changes=$(),this.allChanges=$()))}get parent(){var d;return(d=this.parentChain)==null?void 0:d.ref}get parentIndex(){var d;return(d=this.parentChain)==null?void 0:d.index}addParent(d,g){if(this.hasParent((y,b)=>y[f]===d[f])){this.parentChain.index=g;return}this.parentChain={ref:d,index:g,next:this.parentChain}}removeParent(d=this.parent){let g=this.parentChain,y=null;for(;g;){if(g.ref[f]===d[f])return y?y.next=g.next:this.parentChain=g.next,!0;y=g,g=g.next}return this.parentChain===void 0}findParent(d){let g=this.parentChain;for(;g;){if(d(g.ref,g.index))return g;g=g.next}}hasParent(d){return this.findParent(d)!==void 0}getAllParents(){const d=[];let g=this.parentChain;for(;g;)d.push({ref:g.ref,index:g.index}),g=g.next;return d}}function xe(I,d,g,y,b,V){var X;typeof g=="string"?(X=ve[g])==null||X.call(ve,d,y,V):g[Symbol.metadata]!==void 0?(ve.number(d,y[f].refId,V),(b&t.OPERATION.ADD)===t.OPERATION.ADD&&I.tryEncodeTypeId(d,g,y.constructor,V)):ve.number(d,y[f].refId,V)}const Ke=function(I,d,g,y,b,V,X,ee,Q){if(d[V.offset++]=(y|b)&255,b===t.OPERATION.DELETE)return;const ae=g.ref,pe=Q[y];xe(I,d,Q[y].type,ae[pe.name],b,V)},Ge=function(I,d,g,y,b,V){if(d[V.offset++]=b&255,ve.number(d,y,V),b===t.OPERATION.DELETE)return;const X=g.ref;if((b&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof X.set=="function"){const ae=g.ref.$indexes.get(y);ve.string(d,ae,V)}const ee=X[u],Q=X[l](y);xe(I,d,ee,Q,b,V)},Xt=function(I,d,g,y,b,V,X,ee){const Q=g.ref,ae=ee&&g.isFiltered&&typeof g.getType(y)!="string";let pe;if(ae){const Be=Q.tmpItems[y];if(!Be)return;pe=Be[f].refId,b===t.OPERATION.DELETE?b=t.OPERATION.DELETE_BY_REFID:b===t.OPERATION.ADD&&(b=t.OPERATION.ADD_BY_REFID)}else pe=y;if(d[V.offset++]=b&255,ve.number(d,pe,V),b===t.OPERATION.DELETE||b===t.OPERATION.DELETE_BY_REFID)return;const de=g.getType(y),ge=g.getValue(y,X);xe(I,d,de,ge,b,V)},Lt=-1;function Hn(I,d,g,y,b,V,X,ee){const Q=I.root,ae=g[l](y);let pe;if((d&t.OPERATION.DELETE)===t.OPERATION.DELETE){const de=Q.refIds.get(ae);de!==void 0&&Q.removeRef(de),d!==t.OPERATION.DELETE_AND_ADD&&g[h](y),pe=void 0}if(d!==t.OPERATION.DELETE)if(We.is(b)){const de=Se.number(V,X);if(pe=Q.refs.get(de),(d&t.OPERATION.ADD)===t.OPERATION.ADD){const ge=I.getInstanceType(V,X,b);pe||(pe=I.createInstanceOfType(ge)),Q.addRef(de,pe,pe!==ae||d===t.OPERATION.DELETE_AND_ADD&&pe===ae)}}else if(typeof b=="string")pe=Se[b](V,X);else{const de=Ye(Object.keys(b)[0]),ge=Se.number(V,X),Be=Q.refs.has(ge)?ae||Q.refs.get(ge):new de.constructor;if(pe=Be.clone(!0),pe[u]=Object.values(b)[0],ae){let Ve=Q.refIds.get(ae);if(Ve!==void 0&&ge!==Ve){const Ae=ae.entries();let ye;for(;(ye=Ae.next())&&!ye.done;){const[$e,Pt]=ye.value;typeof Pt=="object"&&(Ve=Q.refIds.get(Pt),Q.removeRef(Ve)),ee.push({ref:ae,refId:Ve,op:t.OPERATION.DELETE,field:$e,value:void 0,previousValue:Pt})}}}Q.addRef(ge,pe,Be!==ae||d===t.OPERATION.DELETE_AND_ADD&&Be===ae)}return{value:pe,previousValue:ae}}const Yn=function(I,d,g,y,b){const V=d[g.offset++],X=y.constructor[Symbol.metadata],ee=V>>6<<6,Q=V%(ee||255),ae=X[Q];if(ae===void 0)return console.warn("@colyseus/schema: field not defined at",{index:Q,ref:y.constructor.name,metadata:X}),Lt;const{value:pe,previousValue:de}=Hn(I,ee,y,Q,ae.type,d,g,b);pe!=null&&(y[ae.name]=pe),de!==pe&&b.push({ref:y,refId:I.currentRefId,op:ee,field:ae.name,value:pe,previousValue:de})},ss=function(I,d,g,y,b){const V=d[g.offset++];if(V===t.OPERATION.CLEAR){I.removeChildRefs(y,b),y.clear();return}const X=Se.number(d,g),ee=y[u];let Q;(V&t.OPERATION.ADD)===t.OPERATION.ADD?typeof y.set=="function"?(Q=Se.string(d,g),y.setIndex(X,Q)):Q=X:Q=y.getIndex(X);const{value:ae,previousValue:pe}=Hn(I,V,y,X,ee,d,g,b);if(ae!=null){if(typeof y.set=="function")y.$items.set(Q,ae);else if(typeof y.$setAt=="function")y.$setAt(X,ae,V);else if(typeof y.add=="function"){const de=y.add(ae);typeof de=="number"&&y.setIndex(de,de)}}pe!==ae&&b.push({ref:y,refId:I.currentRefId,op:V,field:"",dynamicIndex:Q,value:ae,previousValue:pe})},Ic=function(I,d,g,y,b){let V=d[g.offset++],X;if(V===t.OPERATION.CLEAR){I.removeChildRefs(y,b),y.clear();return}else if(V===t.OPERATION.REVERSE){y.reverse();return}else if(V===t.OPERATION.DELETE_BY_REFID){const de=Se.number(d,g),ge=I.root.refs.get(de);X=y.findIndex(Be=>Be===ge),y[h](X),b.push({ref:y,refId:I.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:X,value:void 0,previousValue:ge});return}else if(V===t.OPERATION.ADD_BY_REFID){const de=Se.number(d,g),ge=I.root.refs.get(de);ge&&(X=y.findIndex(Be=>Be===ge)),(X===-1||X===void 0)&&(X=y.length)}else X=Se.number(d,g);const ee=y[u];let Q=X;const{value:ae,previousValue:pe}=Hn(I,V,y,X,ee,d,g,b);ae!=null&&ae!==pe&&y.$setAt(X,ae,V),pe!==ae&&b.push({ref:y,refId:I.currentRefId,op:V,field:"",dynamicIndex:Q,value:ae,previousValue:pe})};class eo extends Error{}function to(I,d,g,y){let b,V=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":b="number",isNaN(I)&&console.log(`trying to encode "NaN" in ${g.constructor.name}#${y}`);break;case"bigint64":case"biguint64":b="bigint";break;case"string":b="string",V=!0;break;case"boolean":return;default:return}if(typeof I!==b&&(!V||V&&I!==null)){let X=`'${JSON.stringify(I)}'${I&&I.constructor&&` (${I.constructor.name})`||""}`;throw new eo(`a '${b}' was expected, but ${X} was provided in ${g.constructor.name}#${y}`)}}function os(I,d,g,y){if(!(I instanceof d))throw new eo(`a '${d.name}' was expected, but '${I&&I.constructor.name}' was provided in ${g.constructor.name}#${y}`)}var no,io;const Zi=(I,d)=>{const g=I.toString(),y=d.toString();return g<y?-1:g>y?1:0},gt=class gt{static[(no=o,io=a,c)](d,g,y){var b;return!y||typeof d[u]=="string"||y.isChangeTreeVisible((b=d.tmpItems[g])==null?void 0:b[f])}static is(d){return Array.isArray(d)||d.array!==void 0}static from(d){return new gt(...Array.from(d))}constructor(...d){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const g=new Proxy(this,{get:(y,b)=>typeof b!="symbol"&&!isNaN(b)?this.items[b]:Reflect.get(y,b),set:(y,b,V)=>{var X;if(typeof b!="symbol"&&!isNaN(b)){if(V==null)y.$deleteAt(b);else{if(V[f]){os(V,y[u],y,b);const ee=y.items[b];y.isMovingItems?(ee!==void 0?V[f].isNew?y[f].indexedOperation(Number(b),t.OPERATION.MOVE_AND_ADD):(y[f].getChange(Number(b))&t.OPERATION.DELETE)===t.OPERATION.DELETE?y[f].indexedOperation(Number(b),t.OPERATION.DELETE_AND_MOVE):y[f].indexedOperation(Number(b),t.OPERATION.MOVE):V[f].isNew&&y[f].indexedOperation(Number(b),t.OPERATION.ADD),V[f].setParent(this,y[f].root,b)):y.$changeAt(Number(b),V),ee!==void 0&&((X=ee[f].root)==null||X.remove(ee[f]))}else y.$changeAt(Number(b),V);y.items[b]=V,y.tmpItems[b]=V}return!0}else return Reflect.set(y,b,V)},deleteProperty:(y,b)=>(typeof b=="number"?y.$deleteAt(b):delete y[b],!0),has:(y,b)=>typeof b!="symbol"&&!isNaN(Number(b))?Reflect.has(this.items,b):Reflect.has(y,b)});return Object.defineProperty(this,f,{value:new Ce(g),enumerable:!1,writable:!0}),d.length>0&&this.push(...d),g}set length(d){d===0?this.clear():d<this.items.length?this.splice(d,this.length-d):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...d){var b;let g=this.tmpItems.length;const y=this[f];for(let V=0,X=d.length;V<X;V++,g++){const ee=d[V];if(ee==null)return;typeof ee=="object"&&this[u]&&os(ee,this[u],this,V),y.indexedOperation(g,t.OPERATION.ADD,this.items.length),this.items.push(ee),this.tmpItems.push(ee),(b=ee[f])==null||b.setParent(this,y.root,g)}return g}pop(){let d=-1;for(let g=this.tmpItems.length-1;g>=0;g--)if(this.deletedIndexes[g]!==!0){d=g;break}if(!(d<0))return this[f].delete(d,void 0,this.items.length-1),this.deletedIndexes[d]=!0,this.items.pop()}at(d){return d<0&&(d+=this.length),this.items[d]}$changeAt(d,g){var V;if(g==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[d]===g)return;const y=this.items[d]!==void 0?typeof g=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,b=this[f];b.change(d,y),(V=g[f])==null||V.setParent(this,b.root,d)}$deleteAt(d,g){this[f].delete(d,g)}$setAt(d,g,y){d===0&&y===t.OPERATION.ADD&&this.items[d]!==void 0?this.items.unshift(g):y===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(d,1),this.items[d]=g):this.items[d]=g}clear(){if(this.items.length===0)return;const d=this[f];d.forEachChild((g,y)=>{var b;(b=d.root)==null||b.remove(g)}),d.discard(!0),d.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...d){return new gt(...this.items.concat(...d))}join(d){return this.items.join(d)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const d=this[f],g=this.tmpItems.findIndex(b=>b===this.items[0]),y=this.items.findIndex(b=>b===this.items[0]);return d.delete(g,t.OPERATION.DELETE,y),d.shiftAllChangeIndexes(-1,y),this.deletedIndexes[g]=!0,this.items.shift()}slice(d,g){const y=new gt;return y.push(...this.items.slice(d,g)),y}sort(d=Zi){this.isMovingItems=!0;const g=this[f];return this.items.sort(d).forEach((b,V)=>g.change(V,t.OPERATION.REPLACE)),this.tmpItems.sort(d),this.isMovingItems=!1,this}splice(d,g,...y){var ae,pe,de;const b=this[f],V=this.items.length,X=this.tmpItems.length,ee=y.length,Q=[];for(let ge=0;ge<X;ge++)this.deletedIndexes[ge]!==!0&&Q.push(ge);if(V>d){g===void 0&&(g=V-d);for(let ge=d;ge<d+g;ge++){const Be=Q[ge];b.delete(Be,t.OPERATION.DELETE),this.deletedIndexes[Be]=!0}}else g=0;if(ee>0){if(ee>g)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let ge=0;ge<ee;ge++){const Be=(Q[d]??V)+ge;b.indexedOperation(Be,this.deletedIndexes[Be]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),(ae=y[ge][f])==null||ae.setParent(this,b.root,Be)}}return g>ee&&b.shiftAllChangeIndexes(-(g-ee),Q[d+ee]),b.filteredChanges!==void 0?(pe=b.root)==null||pe.enqueueChangeTree(b,"filteredChanges"):(de=b.root)==null||de.enqueueChangeTree(b,"changes"),this.items.splice(d,g,...y)}unshift(...d){const g=this[f];return g.shiftChangeIndexes(d.length),g.isFiltered?le(g.filteredChanges,this.items.length):le(g.allChanges,this.items.length),d.forEach((y,b)=>{g.change(b,t.OPERATION.ADD)}),this.tmpItems.unshift(...d),this.items.unshift(...d)}indexOf(d,g){return this.items.indexOf(d,g)}lastIndexOf(d,g=this.length-1){return this.items.lastIndexOf(d,g)}every(d,g){return this.items.every(d,g)}some(d,g){return this.items.some(d,g)}forEach(d,g){return this.items.forEach(d,g)}map(d,g){return this.items.map(d,g)}filter(d,g){return this.items.filter(d,g)}reduce(d,g){return this.items.reduce(d,g)}reduceRight(d,g){return this.items.reduceRight(d,g)}find(d,g){return this.items.find(d,g)}findIndex(d,g){return this.items.findIndex(d,g)}fill(d,g,y){throw new Error("ArraySchema#fill() not implemented")}copyWithin(d,g,y){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return gt}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(d,g){return this.items.includes(d,g)}flatMap(d,g){throw new Error("ArraySchema#flatMap() is not supported.")}flat(d){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...d){return this.items.findLastIndex.apply(this.items,arguments)}with(d,g){const y=this.items.slice();return d<0&&(d+=this.length),y[d]=g,new gt(...y)}toReversed(){return this.items.slice().reverse()}toSorted(d){return this.items.slice().sort(d)}toSpliced(d,g,...y){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(d=>{let g=this.items.length;for(;g!=0;){let y=Math.floor(Math.random()*g);g--,[this[g],this[y]]=[this[y],this[g]]}})}move(d){return this.isMovingItems=!0,d(this),this.isMovingItems=!1,this}[l](d,g=!1){return g?this.items[d]:this.deletedIndexes[d]?this.items[d]:this.tmpItems[d]||this.items[d]}[h](d){this.items[d]=void 0,this.tmpItems[d]=void 0}[p](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[m](){this.items=this.items.filter(d=>d!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(d=>typeof d.toJSON=="function"?d.toJSON():d)}clone(d){let g;return d?(g=new gt,g.push(...this.items)):g=new gt(...this.map(y=>y[f]?y.clone():y)),g}};gt[no]=Xt,gt[io]=Ic;let Pn=gt;Me("array",{constructor:Pn});var ro,so;const Ct=class Ct{static[(ro=o,so=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.isChangeTreeVisible((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.map!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const g=new Ce(this);if(g.indexes={},Object.defineProperty(this,f,{value:g,enumerable:!1,writable:!0}),d)if(d instanceof Map||d instanceof Ct)d.forEach((y,b)=>this.set(b,y));else for(const y in d)this.set(y,d[y]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return Ct}set(d,g){var ee;if(g==null)throw new Error(`MapSchema#set('${d}', ${g}): trying to set ${g} value on '${d}'.`);typeof g=="object"&&this[u]&&os(g,this[u],this,d),d=d.toString();const y=this[f],b=g[f]!==void 0;let V,X;if(typeof y.indexes[d]<"u"){V=y.indexes[d],X=t.OPERATION.REPLACE;const Q=this.$items.get(d);if(Q===g)return;b&&(X=t.OPERATION.DELETE_AND_ADD,Q!==void 0&&((ee=Q[f].root)==null||ee.remove(Q[f]))),this.deletedItems[V]&&delete this.deletedItems[V]}else V=y.indexes[_]??0,X=t.OPERATION.ADD,this.$indexes.set(V,d),y.indexes[d]=V,y.indexes[_]=V+1;return this.$items.set(d,g),y.change(V,X),b&&g[f].setParent(this,y.root,V),this}get(d){return this.$items.get(d)}delete(d){if(!this.$items.has(d))return!1;const g=this[f].indexes[d];return this.deletedItems[g]=this[f].delete(g),this.$items.delete(d)}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((g,y)=>{var b;(b=d.root)==null||b.remove(g)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return this.$items.has(d)}forEach(d){this.$items.forEach(d)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){const d=this[f];for(const g in this.deletedItems){const y=parseInt(g),b=this.$indexes.get(y);delete d.indexes[b],this.$indexes.delete(y)}this.deletedItems={}}toJSON(){const d={};return this.forEach((g,y)=>{d[y]=typeof g.toJSON=="function"?g.toJSON():g}),d}clone(d){let g;return d?g=Object.assign(new Ct,this):(g=new Ct,this.forEach((y,b)=>{y[f]?g.set(b,y.clone()):g.set(b,y)})),g}};Ct[ro]=Ge,Ct[so]=ss;let Gn=Ct;Me("map",{constructor:Gn});var oo,Or;const In=class In{static[(oo=o,Or=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.isChangeTreeVisible((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.collection!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ce(this),this[f].indexes={},d&&d.forEach(g=>this.add(g)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){const g=this.$refId++;return d[f]!==void 0&&d[f].setParent(this,this[f].root,g),this[f].indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this[f].change(g),g}at(d){const g=Array.from(this.$items.keys())[d];return this.$items.get(g)}entries(){return this.$items.entries()}delete(d){const g=this.$items.entries();let y,b;for(;(b=g.next())&&!b.done;)if(d===b.value[1]){y=b.value[0];break}return y===void 0?!1:(this.deletedItems[y]=this[f].delete(y),this.$indexes.delete(y),this.$items.delete(y))}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((g,y)=>{var b;(b=d.root)==null||b.remove(g)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return Array.from(this.$items.values()).some(g=>g===d)}forEach(d){this.$items.forEach((g,y,b)=>d(g,y,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((g,y)=>{d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d}clone(d){let g;return d?g=Object.assign(new In,this):(g=new In,this.forEach(y=>{y[f]?g.add(y.clone()):g.add(y)})),g}};In[oo]=Ge,In[Or]=ss;let Ji=In;Me("collection",{constructor:Ji});var ao,oa;const Et=class Et{static[(ao=o,oa=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.visible.has((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.set!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ce(this),this[f].indexes={},d&&d.forEach(g=>this.add(g)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){var b;if(this.has(d))return!1;const g=this.$refId++;d[f]!==void 0&&d[f].setParent(this,this[f].root,g);const y=((b=this[f].indexes[g])==null?void 0:b.op)??t.OPERATION.ADD;return this[f].indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this[f].change(g,y),g}entries(){return this.$items.entries()}delete(d){const g=this.$items.entries();let y,b;for(;(b=g.next())&&!b.done;)if(d===b.value[1]){y=b.value[0];break}return y===void 0?!1:(this.deletedItems[y]=this[f].delete(y),this.$indexes.delete(y),this.$items.delete(y))}clear(){const d=this[f];d.discard(!0),d.indexes={},this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){const g=this.$items.values();let y=!1,b;for(;(b=g.next())&&!b.done;)if(d===b.value){y=!0;break}return y}forEach(d){this.$items.forEach((g,y,b)=>d(g,y,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((g,y)=>{d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d}clone(d){let g;return d?g=Object.assign(new Et,this):(g=new Et,this.forEach(y=>{y[f]?g.add(y.clone()):g.add(y)})),g}};Et[ao]=Ge,Et[oa]=ss;let xr=Et;Me("set",{constructor:xr});const mi=-1;function Dc(I){return Ee.register(I),I}function L(I=mi){return function(d,g){var ee;const y=d.constructor,V=Object.getPrototypeOf(y)[Symbol.metadata],X=y[ee=Symbol.metadata]??(y[ee]=Object.assign({},y[Symbol.metadata],V??Object.create(null)));Ze.setTag(X,g,I)}}function q(I,d){return function(g,y){const b=g.constructor;if(!I)throw new Error(`${b.name}: @type() reference provided for "${y}" is undefined. Make sure you don't have any circular dependencies.`);I=Xe(I),Ee.register(b);const X=Object.getPrototypeOf(b)[Symbol.metadata],ee=Ze.initialize(b);let Q=ee[y];if(ee[Q]!==void 0){if(ee[Q].deprecated)return;if(ee[Q].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${y}' definition on '${b.name}'.
Check @type() annotation`)}catch(ae){const pe=ae.stack.split(`
`)[4].trim();throw new Error(`${ae.message} ${pe}`)}}else Q=ee[_]??(X&&X[_])??-1,Q++;if(d&&d.manual)Ze.addField(ee,Q,y,I,{enumerable:!0,configurable:!0,writable:!0});else{const ae=typeof Object.keys(I)[0]=="string"&&Ye(Object.keys(I)[0]),pe=ae?Object.values(I)[0]:I;Ze.addField(ee,Q,y,I,oe(`_${y}`,Q,pe,ae))}}}function oe(I,d,g,y){return{get:function(){return this[I]},set:function(b){var X,ee;const V=this[I]??void 0;if(b!==V){if(b!=null){y?(y.constructor===Pn&&!(b instanceof Pn)&&(b=new Pn(...b)),y.constructor===Gn&&!(b instanceof Gn)&&(b=new Gn(b)),b[u]=g):typeof g!="string"?os(b,g,this,I.substring(1)):to(b,g,this,I.substring(1));const Q=this[f];V!==void 0&&V[f]?((X=Q.root)==null||X.remove(V[f]),this.constructor[s](Q,d,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](Q,d,t.OPERATION.ADD),(ee=b[f])==null||ee.setParent(this,Q.root,d)}else V!==void 0&&this[f].delete(d);this[I]=b}},enumerable:!0,configurable:!0}}function ne(I=!0){return function(d,g){var Q;const y=d.constructor,V=Object.getPrototypeOf(y)[Symbol.metadata],X=y[Q=Symbol.metadata]??(y[Q]=Object.assign({},y[Symbol.metadata],V??Object.create(null))),ee=X[g];X[ee].deprecated=!0,I&&(X[v]??(X[v]={}),X[v][g]={get:function(){throw new Error(`${g} is deprecated.`)},set:function(ae){},enumerable:!1,configurable:!0}),Object.defineProperty(X,ee,{value:X[ee],enumerable:!1,configurable:!0})}}function re(I,d,g){for(let y in d)q(d[y],g)(I.prototype,y);return I}function Le(I,d,g=We){const y={},b={},V={},X={};for(let pe in I){const de=I[pe];typeof de=="object"?(de.view!==void 0&&(X[pe]=typeof de.view=="boolean"?mi:de.view),y[pe]=Xe(de),Object.prototype.hasOwnProperty.call(de,"default")?V[pe]=de.default:Array.isArray(de)||de.array!==void 0?V[pe]=new Pn:de.map!==void 0?V[pe]=new Gn:de.collection!==void 0?V[pe]=new Ji:de.set!==void 0?V[pe]=new xr:de.type!==void 0&&We.is(de.type)&&(!de.type.prototype.initialize||de.type.prototype.initialize.length===0)&&(V[pe]=new de.type)):typeof de=="function"?We.is(de)?((!de.prototype.initialize||de.prototype.initialize.length===0)&&(V[pe]=new de),y[pe]=Xe(de)):b[pe]=de:y[pe]=Xe(de)}const ee=()=>{const pe={};for(const de in V){const ge=V[de];ge&&typeof ge.clone=="function"?pe[de]=ge.clone():pe[de]=ge}return pe},Q=pe=>{const de=Object.keys(y),ge={};for(const Be in pe)de.includes(Be)||(ge[Be]=pe[Be]);return ge},ae=Ze.setFields(class extends g{constructor(...pe){b.initialize&&typeof b.initialize=="function"?(super(Object.assign({},ee(),Q(pe[0]||{}))),new.target===ae&&b.initialize.apply(this,pe)):super(Object.assign({},ee(),pe[0]||{}))}},y);ae._getDefaultValues=ee,Object.assign(ae.prototype,b);for(let pe in X)L(X[pe])(ae.prototype,pe);return d&&Object.defineProperty(ae,"name",{value:d}),ae.extends=(pe,de)=>Le(pe,de,ae),ae}function ze(I){return new Array(I).fill(0).map((d,g)=>g===I-1?"└─ ":"   ").join("")}function Ne(I){const d=I[f].root,g={ops:{},refs:[]};let y=d.changes.next;for(;y;){const b=y.changeTree;if(b===void 0){y=y.next;continue}const V=b.indexedOperations;g.refs.push(`refId#${b.refId}`);for(const X in V){const ee=V[X],Q=t.OPERATION[ee];g.ops[Q]||(g.ops[Q]=0),g.ops[t.OPERATION[ee]]++}y=y.next}return g}var qe,Je;const Dn=class Dn{static initialize(d){var g;Object.defineProperty(d,f,{value:new Ce(d),enumerable:!1,writable:!0}),Object.defineProperties(d,((g=d.constructor[Symbol.metadata])==null?void 0:g[v])||{})}static is(d){return typeof d[Symbol.metadata]=="object"}static[(qe=o,Je=a,s)](d,g,y=t.OPERATION.ADD){d.change(g,y)}static[c](d,g,y){var X,ee;const V=(X=d.constructor[Symbol.metadata][g])==null?void 0:X.tag;if(y===void 0)return V===void 0;if(V===void 0)return!0;if(V===mi)return y.isChangeTreeVisible(d[f]);{const Q=(ee=y.tags)==null?void 0:ee.get(d[f]);return Q&&Q.has(V)}}constructor(d){Dn.initialize(this),d&&Object.assign(this,d)}assign(d){return Object.assign(this,d),this}setDirty(d,g){const y=this.constructor[Symbol.metadata];this[f].change(y[y[d]].index,g)}clone(){var y;const d=Object.create(this.constructor.prototype);Dn.initialize(d);const g=this.constructor[Symbol.metadata];for(const b in g){const V=g[b].name;typeof this[V]=="object"&&typeof((y=this[V])==null?void 0:y.clone)=="function"?d[V]=this[V].clone():d[V]=this[V]}return d}toJSON(){const d={},g=this.constructor[Symbol.metadata];for(const y in g){const b=g[y],V=b.name;!b.deprecated&&this[V]!==null&&typeof this[V]<"u"&&(d[V]=typeof this[V].toJSON=="function"?this[V].toJSON():this[V])}return d}discardAllChanges(){this[f].discardAll()}[l](d){const g=this.constructor[Symbol.metadata];return this[g[d].name]}[h](d){const g=this.constructor[Symbol.metadata];this[g[d].name]=void 0}static debugRefIds(d,g=!1,y=0,b,V=""){var ge;const X=g?` - ${JSON.stringify(d.toJSON())}`:"",ee=d[f],Q=b?b.root.refIds.get(d):ee.refId,ae=b?b.root:ee.root,pe=((ge=ae==null?void 0:ae.refCount)==null?void 0:ge[Q])>1?` [×${ae.refCount[Q]}]`:"";let de=`${ze(y)}${V}${d.constructor.name} (refId: ${Q})${pe}${X}
`;return ee.forEachChild((Be,Ve)=>{let Ae=Ve;typeof Ve=="number"&&d.$indexes&&(Ae=d.$indexes.get(Ve)??Ve);const ye=d.forEach!==void 0&&Ae!==void 0?`["${Ae}"]: `:"";de+=this.debugRefIds(Be.ref,g,y+1,b,ye)}),de}static debugRefIdEncodingOrder(d,g="allChanges"){let y=[],b=d[f].root[g].next;for(;b;)b.changeTree&&y.push(b.changeTree.refId),b=b.next;return y}static debugRefIdsFromDecoder(d){return this.debugRefIds(d.state,!1,0,d)}static debugChanges(d,g=!1){const y=d[f],b=g?y.allChanges:y.changes,V=g?"allChanges":"changes";let X=`${d.constructor.name} (${y.refId}) -> .${V}:
`;function ee(Q){Q.operations.filter(ae=>ae).forEach(ae=>{const pe=y.indexedOperations[ae];X+=`- [${ae}]: ${t.OPERATION[pe]} (${JSON.stringify(y.getValue(Number(ae),g))})
`})}return ee(b),!g&&y.filteredChanges&&y.filteredChanges.operations.filter(Q=>Q).length>0&&(X+=`${d.constructor.name} (${y.refId}) -> .filteredChanges:
`,ee(y.filteredChanges)),g&&y.allFilteredChanges&&y.allFilteredChanges.operations.filter(Q=>Q).length>0&&(X+=`${d.constructor.name} (${y.refId}) -> .allFilteredChanges:
`,ee(y.allFilteredChanges)),X}static debugChangesDeep(d,g="changes"){var pe,de;let y="";const b=d[f],V=b.root,X=new Map,ee=[];let Q=0;for(const[ge,Be]of Object.entries(V[g])){const Ve=V.changeTrees[ge];if(!Ve)continue;let Ae=!1,ye=[],$e=(pe=Ve.parent)==null?void 0:pe[f];if(Ve===b)Ae=!0;else for(;$e!==void 0;){if(ye.push($e),$e.ref===d){Ae=!0;break}$e=(de=$e.parent)==null?void 0:de[f]}Ae&&(ee.push(Ve.refId),Q+=Object.keys(Be).length,X.set(Ve,ye.reverse()))}y+=`---
`,y+=`root refId: ${b.refId}
`,y+=`Total instances: ${ee.length} (refIds: ${ee.join(", ")})
`,y+=`Total changes: ${Q}
`,y+=`---
`;const ae=new WeakSet;for(const[ge,Be]of X.entries()){Be.forEach((Pt,Ht)=>{ae.has(Pt)||(y+=`${ze(Ht)}${Pt.ref.constructor.name} (refId: ${Pt.refId})
`,ae.add(Pt))});const Ve=ge.indexedOperations,Ae=Be.length,ye=ze(Ae),$e=Ae>0?`(${ge.parentIndex}) `:"";y+=`${ye}${$e}${ge.ref.constructor.name} (refId: ${ge.refId}) - changes: ${Object.keys(Ve).length}
`;for(const Pt in Ve){const Ht=Ve[Pt];y+=`${ze(Ae+1)}${t.OPERATION[Ht]}: ${Pt}
`}}return`${y}`}};Dn[qe]=Ke,Dn[Je]=Yn;let We=Dn;function ot(I,d,g,y){var b=arguments.length,V=b<3?d:y,X;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")V=Reflect.decorate(I,d,g,y);else for(var ee=I.length-1;ee>=0;ee--)(X=I[ee])&&(V=(b<3?X(V):b>3?X(d,g,V):X(d,g))||V);return b>3&&V&&Object.defineProperty(d,g,V),V}typeof SuppressedError=="function"&&SuppressedError;class Qe{constructor(d){this.types=d,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Te(),this.allFilteredChanges=Te(),this.changes=Te(),this.filteredChanges=Te()}getNextUniqueId(){return this.nextUniqueId++}add(d){d.refId===void 0&&(d.refId=this.getNextUniqueId());const g=this.changeTrees[d.refId]===void 0;g&&(this.changeTrees[d.refId]=d);const y=this.refCount[d.refId];if(y===0){const b=d.allChanges.operations;let V=b.length;for(;V--;)d.indexedOperations[b[V]]=t.OPERATION.ADD,le(d.changes,V)}return this.refCount[d.refId]=(y||0)+1,g}remove(d){const g=this.refCount[d.refId]-1;return g<=0?(d.root=void 0,delete this.changeTrees[d.refId],this.removeChangeFromChangeSet("allChanges",d),this.removeChangeFromChangeSet("changes",d),d.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",d),this.removeChangeFromChangeSet("filteredChanges",d)),this.refCount[d.refId]=0,d.forEachChild((y,b)=>{y.removeParent(d.ref)&&(y.parentChain===void 0||y.parentChain&&this.refCount[y.refId]>0?this.remove(y):y.parentChain&&this.moveNextToParent(y))})):(this.refCount[d.refId]=g,this.recursivelyMoveNextToParent(d)),g}recursivelyMoveNextToParent(d){this.moveNextToParent(d),d.forEachChild((g,y)=>this.recursivelyMoveNextToParent(g))}moveNextToParent(d){d.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",d),this.moveNextToParentInChangeTreeList("allFilteredChanges",d)):(this.moveNextToParentInChangeTreeList("changes",d),this.moveNextToParentInChangeTreeList("allChanges",d))}moveNextToParentInChangeTreeList(d,g){var ae;const y=this[d],b=g[d].queueRootNode;if(!b)return;const V=g.parent;if(!V||!V[f])return;const X=(ae=V[f][d])==null?void 0:ae.queueRootNode;if(!X||X===b)return;const ee=X.position;b.position>ee||(b.prev?b.prev.next=b.next:y.next=b.next,b.next?b.next.prev=b.prev:y.tail=b.prev,b.prev=X,b.next=X.next,X.next?X.next.prev=b:y.tail=b,X.next=b,this.updatePositionsAfterMove(y,b,ee+1))}enqueueChangeTree(d,g,y=d[g].queueRootNode){y||(d[g].queueRootNode=this.addToChangeTreeList(this[g],d))}addToChangeTreeList(d,g){const y={changeTree:g,next:void 0,prev:void 0,position:d.tail?d.tail.position+1:0};return d.next?(y.prev=d.tail,d.tail.next=y,d.tail=y):(d.next=y,d.tail=y),y}updatePositionsAfterRemoval(d,g){let y=d.next,b=0;for(;y;)b>=g&&(y.position=b),y=y.next,b++}updatePositionsAfterMove(d,g,y){let b=d.next,V=0;for(;b;)b.position=V,b=b.next,V++}removeChangeFromChangeSet(d,g){const y=this[d],b=g[d].queueRootNode;if(b&&b.changeTree===g){const V=b.position;return b.prev?b.prev.next=b.next:y.next=b.next,b.next?b.next.prev=b.prev:y.tail=b.prev,this.updatePositionsAfterRemoval(y,V),g[d].queueRootNode=void 0,!0}return!1}}const gi=class gi{constructor(d){this.sharedBuffer=Buffer.allocUnsafe(gi.BUFFER_SIZE),this.context=Ee.cache(d.constructor),this.root=new Qe(this.context),this.setState(d)}setState(d){this.state=d,this.state[f].setRoot(this.root)}encode(d={offset:0},g,y=this.sharedBuffer,b="changes",V=b==="allChanges",X=d.offset){const ee=g!==void 0,Q=this.state[f];let ae=this.root[b];for(;ae=ae.next;){const pe=ae.changeTree;if(ee){if(!g.isChangeTreeVisible(pe)){g.invisible.add(pe);continue}g.invisible.delete(pe)}const de=pe[b],ge=pe.ref,Be=de.operations.length;if(Be===0)continue;const Ve=ge.constructor,Ae=Ve[o],ye=Ve[c],$e=Ve[Symbol.metadata];(ee||d.offset>X||pe!==Q)&&(y[d.offset++]=255,ve.number(y,pe.refId,d));for(let Pt=0;Pt<Be;Pt++){const Ht=de.operations[Pt];if(Ht<0){y[d.offset++]=Math.abs(Ht)&255;continue}const Ln=V?t.OPERATION.ADD:pe.indexedOperations[Ht];Ht===void 0||Ln===void 0||ye&&!ye(ge,Ht,g)||Ae(this,y,pe,Ht,Ln,d,V,ee,$e)}}if(d.offset>y.byteLength){const pe=Math.ceil(d.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(pe/1024)} * 1024; // ${Math.round(pe/1024)} KB
`),y=Buffer.alloc(pe,y),y===this.sharedBuffer&&(this.sharedBuffer=y),this.encode({offset:X},g,y,b,V)}else return y.subarray(0,d.offset)}encodeAll(d={offset:0},g=this.sharedBuffer){return this.encode(d,void 0,g,"allChanges",!0)}encodeAllView(d,g,y,b=this.sharedBuffer){const V=y.offset;return this.encode(y,d,b,"allFilteredChanges",!0,V),Buffer.concat([b.subarray(0,g),b.subarray(V,y.offset)])}encodeView(d,g,y,b=this.sharedBuffer){const V=y.offset;for(const[X,ee]of d.changes){const Q=this.root.changeTrees[X];if(Q===void 0){d.changes.delete(X);continue}const ae=Object.keys(ee);if(ae.length===0)continue;const de=Q.ref.constructor,ge=de[o],Be=de[Symbol.metadata];b[y.offset++]=255,ve.number(b,Q.refId,y);for(let Ve=0,Ae=ae.length;Ve<Ae;Ve++){const ye=Number(ae[Ve]),Pt=Q.ref[l](ye)!==void 0&&ee[ye]||t.OPERATION.DELETE;ge(this,b,Q,ye,Pt,y,!1,!0,Be)}}return d.changes.clear(),this.encode(y,d,b,"filteredChanges",!1,V),Buffer.concat([b.subarray(0,g),b.subarray(V,y.offset)])}discardChanges(){let d=this.root.changes.next;for(;d;)d.changeTree.endEncode("changes"),d=d.next;for(this.root.changes=Te(),d=this.root.filteredChanges.next;d;)d.changeTree.endEncode("filteredChanges"),d=d.next;this.root.filteredChanges=Te()}tryEncodeTypeId(d,g,y,b){const V=this.context.getTypeId(g),X=this.context.getTypeId(y);if(X===void 0){console.warn(`@colyseus/schema WARNING: Class "${y.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}V!==X&&(d[b.offset++]=213,ve.number(d,X,b))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};gi.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let Mt=gi;function Kt(I,d){if(d===-1||d>=I.length)return!1;const g=I.length-1;for(let y=d;y<g;y++)I[y]=I[y+1];return I.length=g,!0}class qt extends Error{constructor(d){super(d),this.name="DecodingWarning"}}class Nt{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(d,g,y=!0){this.refs.set(d,g),this.refIds.set(g,d),y&&(this.refCount[d]=(this.refCount[d]||0)+1),this.deletedRefs.has(d)&&this.deletedRefs.delete(d)}removeRef(d){const g=this.refCount[d];if(g===void 0){try{throw new qt("trying to remove refId that doesn't exist: "+d)}catch(y){console.warn(y)}return}if(g===0){try{const y=this.refs.get(d);throw new qt(`trying to remove refId '${d}' with 0 refCount (${y.constructor.name}: ${JSON.stringify(y)})`)}catch(y){console.warn(y)}return}(this.refCount[d]=g-1)<=0&&this.deletedRefs.add(d)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(d=>{if(this.refCount[d]>0)return;const g=this.refs.get(d);if(g.constructor[Symbol.metadata]!==void 0){const y=g.constructor[Symbol.metadata];for(const b in y){const V=y[b].name,X=typeof g[V]=="object"&&this.refIds.get(g[V]);X&&!this.deletedRefs.has(X)&&this.removeRef(X)}}else typeof g[u]=="function"&&Array.from(g.values()).forEach(y=>{const b=this.refIds.get(y);this.deletedRefs.has(b)||this.removeRef(b)});this.refs.delete(d),delete this.refCount[d],delete this.callbacks[d]}),this.deletedRefs.clear()}addCallback(d,g,y){if(d===void 0){const b=typeof g=="number"?t.OPERATION[g]:g;throw new Error(`Can't addCallback on '${b}' (refId is undefined)`)}return this.callbacks[d]||(this.callbacks[d]={}),this.callbacks[d][g]||(this.callbacks[d][g]=[]),this.callbacks[d][g].push(y),()=>this.removeCallback(d,g,y)}removeCallback(d,g,y){var V,X,ee;const b=(ee=(X=(V=this.callbacks)==null?void 0:V[d])==null?void 0:X[g])==null?void 0:ee.indexOf(y);b!==void 0&&b!==-1&&Kt(this.callbacks[d][g],b)}}class rn{constructor(d,g){this.currentRefId=0,this.setState(d),this.context=g||new Ee(d.constructor)}setState(d){this.state=d,this.root=new Nt,this.root.addRef(0,d)}decode(d,g={offset:0},y=this.state){var Q,ae,pe;const b=[],V=this.root,X=d.byteLength;let ee=y.constructor[a];for(this.currentRefId=0;g.offset<X;){if(d[g.offset]==255){g.offset++,(Q=y[m])==null||Q.call(y);const ge=Se.number(d,g),Be=V.refs.get(ge);Be?(y=Be,ee=y.constructor[a],this.currentRefId=ge):(console.error(`"refId" not found: ${ge}`,{previousRef:y,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(d,g,X));continue}if(ee(this,d,g,y,b)===Lt){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(d,g,X);continue}}return(ae=y[m])==null||ae.call(y),(pe=this.triggerChanges)==null||pe.call(this,b),V.garbageCollectDeletedRefs(),b}skipCurrentStructure(d,g,y){const b={offset:g.offset};for(;g.offset<y&&!(d[g.offset]===255&&(b.offset=g.offset+1,this.root.refs.has(Se.number(d,b))));)g.offset++}getInstanceType(d,g,y){let b;if(d[g.offset]===213){g.offset++;const V=Se.number(d,g);b=this.context.get(V)}return b||y}createInstanceOfType(d){return new d}removeChildRefs(d,g){const y=typeof d[u]!="string",b=this.root.refIds.get(d);d.forEach((V,X)=>{g.push({ref:d,refId:b,op:t.OPERATION.DELETE,field:X,value:void 0,previousValue:V}),y&&this.root.removeRef(this.root.refIds.get(V))})}}class Fe extends We{}ot([q("string")],Fe.prototype,"name",void 0),ot([q("string")],Fe.prototype,"type",void 0),ot([q("number")],Fe.prototype,"referencedType",void 0);class sn extends We{constructor(){super(...arguments),this.fields=new Pn}}ot([q("number")],sn.prototype,"id",void 0),ot([q("number")],sn.prototype,"extendsId",void 0),ot([q([Fe])],sn.prototype,"fields",void 0);class pt extends We{constructor(){super(...arguments),this.types=new Pn}static encode(d,g={offset:0}){const y=d.context,b=new pt,V=new Mt(b),X=y.schemas.get(d.state.constructor);X>0&&(b.rootType=X);const ee=new Set,Q={},ae=de=>{if(de.extendsId===void 0||ee.has(de.extendsId)){ee.add(de.id),b.types.push(de);const ge=Q[de.id];ge!==void 0&&(delete Q[de.id],ge.forEach(Be=>ae(Be)))}else Q[de.extendsId]===void 0&&(Q[de.extendsId]=[]),Q[de.extendsId].push(de)};y.schemas.forEach((de,ge)=>{const Be=new sn;Be.id=Number(de);const Ve=Object.getPrototypeOf(ge);Ve!==We&&(Be.extendsId=y.schemas.get(Ve));const Ae=ge[Symbol.metadata];if(Ae!==Ve[Symbol.metadata])for(const ye in Ae){const $e=Number(ye),Pt=Ae[$e].name;if(!Object.prototype.hasOwnProperty.call(Ae,Pt))continue;const Ht=new Fe;Ht.name=Pt;let Ln;const Ii=Ae[$e];if(typeof Ii.type=="string")Ln=Ii.type;else{let lo;We.is(Ii.type)?(Ln="ref",lo=Ii.type):(Ln=Object.keys(Ii.type)[0],typeof Ii.type[Ln]=="string"?Ln+=":"+Ii.type[Ln]:lo=Ii.type[Ln]),Ht.referencedType=lo?y.getTypeId(lo):-1}Ht.type=Ln,Be.fields.push(Ht)}ae(Be)});for(const de in Q)Q[de].forEach(ge=>b.types.push(ge));return V.encodeAll(g).slice(0,g.offset)}static decode(d,g){const y=new pt;new rn(y).decode(d,g);const V=new Ee;y.types.forEach(Q=>{const ae=V.get(Q.extendsId)??We,pe=class extends ae{};Ee.register(pe),V.add(pe,Q.id)},{});const X=(Q,ae,pe)=>{ae.fields.forEach((de,ge)=>{const Be=pe+ge;if(de.referencedType!==void 0){let Ve=de.type,Ae=V.get(de.referencedType);if(!Ae){const ye=de.type.split(":");Ve=ye[0],Ae=ye[1]}Ve==="ref"?Ze.addField(Q,Be,de.name,Ae):Ze.addField(Q,Be,de.name,{[Ve]:Ae})}else Ze.addField(Q,Be,de.name,de.type)})};y.types.forEach(Q=>{const ae=V.get(Q.id),pe=Ze.initialize(ae),de=[];let ge=Q;do de.push(ge),ge=y.types.find(Ve=>Ve.id===ge.extendsId);while(ge);let Be=0;de.reverse().forEach(Ve=>{X(pe,Ve,Be),Be+=Ve.fields.length})});const ee=new(V.get(y.rootType||0));return new rn(ee,V)}}ot([q([sn])],pt.prototype,"types",void 0),ot([q("number")],pt.prototype,"rootType",void 0);function Wn(I){const d=I.root,g=d.callbacks,y=new WeakMap;let b;I.triggerChanges=function(ee){var ae;const Q=new Set;for(let pe=0,de=ee.length;pe<de;pe++){const ge=ee[pe],Be=ge.refId,Ve=ge.ref,Ae=g[Be];if(Ae){if((ge.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ge.previousValue instanceof We){const ye=(ae=g[d.refIds.get(ge.previousValue)])==null?void 0:ae[t.OPERATION.DELETE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e]()}if(Ve instanceof We){if(!Q.has(Be)){const ye=Ae==null?void 0:Ae[t.OPERATION.REPLACE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e]()}if(Ae.hasOwnProperty(ge.field)){const ye=Ae[ge.field];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](ge.value,ge.previousValue)}}else{if((ge.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(ge.previousValue!==void 0){const ye=Ae[t.OPERATION.DELETE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](ge.previousValue,ge.dynamicIndex??ge.field)}if((ge.op&t.OPERATION.ADD)===t.OPERATION.ADD){const ye=Ae[t.OPERATION.ADD];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](ge.value,ge.dynamicIndex??ge.field)}}else if((ge.op&t.OPERATION.ADD)===t.OPERATION.ADD&&ge.previousValue!==ge.value){const ye=Ae[t.OPERATION.ADD];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](ge.value,ge.dynamicIndex??ge.field)}if(ge.value!==ge.previousValue&&(ge.value!==void 0||ge.previousValue!==void 0)){const ye=Ae[t.OPERATION.REPLACE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](ge.value,ge.dynamicIndex??ge.field)}}Q.add(Be)}}};function V(ee,Q){var de;let ae=((de=Q.instance)==null?void 0:de.constructor[Symbol.metadata])||ee,pe=Q.instance&&typeof Q.instance.forEach=="function"||ee&&typeof ee[Symbol.metadata]>"u";if(ae&&!pe){const ge=function(Be,Ve,Ae,ye){return ye&&Q.instance[Ve]!==void 0&&!y.has(b)&&Ae(Q.instance[Ve],void 0),d.addCallback(d.refIds.get(Be),Ve,Ae)};return new Proxy({listen:function(Ve,Ae,ye=!0){if(Q.instance)return ge(Q.instance,Ve,Ae,ye);{let $e=()=>{};return Q.onInstanceAvailable((Pt,Ht)=>{$e=ge(Pt,Ve,Ae,ye&&Ht&&!y.has(b))}),()=>$e()}},onChange:function(Ve){return d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,Ve)},bindTo:function(Ve,Ae){return Ae||(Ae=Object.keys(ae).map(ye=>ae[ye].name)),d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,()=>{Ae.forEach(ye=>Ve[ye]=Q.instance[ye])})}},{get(Be,Ve){var ye;const Ae=ae[ae[Ve]];if(Ae){const $e=(ye=Q.instance)==null?void 0:ye[Ve],Pt=(Ht=>{const Ln=X(Q.instance).listen(Ve,(Ii,lo)=>{Ht(Ii,!1),Ln==null||Ln()},!1);d.refIds.get($e)!==void 0&&Ht($e,!0)});return V(Ae.type,{instance:d.refIds.get($e)&&$e,parentInstance:Q.instance,onInstanceAvailable:Pt})}else return Be[Ve]},has(Be,Ve){return ae[Ve]!==void 0},set(Be,Ve,Ae){throw new Error("not allowed")},deleteProperty(Be,Ve){throw new Error("not allowed")}})}else{const ge=function(Ae,ye,$e){return $e&&Ae.forEach((Pt,Ht)=>ye(Pt,Ht)),d.addCallback(d.refIds.get(Ae),t.OPERATION.ADD,(Pt,Ht)=>{y.set(ye,!0),b=ye,ye(Pt,Ht),y.delete(ye),b=void 0})},Be=function(Ae,ye){return d.addCallback(d.refIds.get(Ae),t.OPERATION.DELETE,ye)},Ve=function(Ae,ye){return d.addCallback(d.refIds.get(Ae),t.OPERATION.REPLACE,ye)};return new Proxy({onAdd:function(Ae,ye=!0){if(Q.instance)return ge(Q.instance,Ae,ye&&!y.has(b));if(Q.onInstanceAvailable){let $e=()=>{};return Q.onInstanceAvailable((Pt,Ht)=>{$e=ge(Pt,Ae,ye&&Ht&&!y.has(b))}),()=>$e()}},onRemove:function(Ae){if(Q.instance)return Be(Q.instance,Ae);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable($e=>{ye=Be($e,Ae)}),()=>ye()}},onChange:function(Ae){if(Q.instance)return Ve(Q.instance,Ae);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable($e=>{ye=Ve($e,Ae)}),()=>ye()}}},{get(Ae,ye){if(!Ae[ye])throw new Error(`Can't access '${ye}' through callback proxy. access the instance directly.`);return Ae[ye]},has(Ae,ye){return Ae[ye]!==void 0},set(Ae,ye,$e){throw new Error("not allowed")},deleteProperty(Ae,ye){throw new Error("not allowed")}})}}function X(ee){return V(void 0,{instance:ee})}return X}function ri(I,d){I.triggerChanges=d}class Pi{constructor(d=!1){this.iterable=d,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,d&&(this.items=[])}add(d,g=mi,y=!0){var ae,pe;const b=d==null?void 0:d[f],V=b.parent;if(b){if(!V&&b.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${b.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",d),!1;const X=d.constructor[Symbol.metadata];this.visible.add(b),this.iterable&&y&&this.items.push(d),y&&V&&this.addParentOf(b,g);let ee=this.changes.get(b.refId);ee===void 0&&(ee={},this.changes.set(b.refId,ee));let Q=!1;if(b.forEachChild((de,ge)=>{X&&X[ge].tag!==void 0&&X[ge].tag!==g||this.add(de.ref,g,!1)&&(Q=!0)}),g!==mi){this.tags||(this.tags=new WeakMap);let de;this.tags.has(b)?de=this.tags.get(b):(de=new Set,this.tags.set(b,de)),de.add(g),(pe=(ae=X==null?void 0:X[A])==null?void 0:ae[g])==null||pe.forEach(ge=>{b.getChange(ge)!==t.OPERATION.DELETE&&(ee[ge]=t.OPERATION.ADD)})}else if(!b.isNew||Q){const de=b.filteredChanges!==void 0?b.allFilteredChanges:b.allChanges,ge=this.invisible.has(b);for(let Be=0,Ve=de.operations.length;Be<Ve;Be++){const Ae=de.operations[Be];if(Ae===void 0)continue;const ye=b.indexedOperations[Ae]??t.OPERATION.ADD,$e=X==null?void 0:X[Ae].tag;ye!==t.OPERATION.DELETE&&(ge||$e===void 0||$e===g)&&(ee[Ae]=ye,Q=!0)}}return Q}addParentOf(d,g){var V;const y=d.parent[f],b=d.parentIndex;if(!this.visible.has(y)){this.visible.add(y);const X=(V=y.parent)==null?void 0:V[f];X&&X.filteredChanges!==void 0&&this.addParentOf(y,g)}if(y.getChange(b)!==t.OPERATION.DELETE){let X=this.changes.get(y.refId);X===void 0&&(X={},this.changes.set(y.refId,X)),this.tags||(this.tags=new WeakMap);let ee;this.tags.has(y)?ee=this.tags.get(y):(ee=new Set,this.tags.set(y,ee)),ee.add(g),X[b]=t.OPERATION.ADD}}remove(d,g=mi,y=!1){var Q;const b=d[f];if(!b)return console.warn("StateView#remove(), invalid object:",d),this;this.visible.delete(b),this.iterable&&!y&&Kt(this.items,this.items.indexOf(d));const X=b.ref.constructor[Symbol.metadata];let ee=this.changes.get(b.refId);if(ee===void 0&&(ee={},this.changes.set(b.refId,ee)),g===mi){const ae=b.parent;if(ae&&!Ze.isValidInstance(ae)&&b.isFiltered){const pe=ae[f];let de=this.changes.get(pe.refId);de===void 0?(de={},this.changes.set(pe.refId,de)):de[b.parentIndex]===t.OPERATION.ADD&&this.changes.delete(b.refId),de[b.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(b)}else(Q=X==null?void 0:X[w])==null||Q.forEach(pe=>ee[pe]=t.OPERATION.DELETE)}else X==null||X[A][g].forEach(ae=>ee[ae]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(b)){const ae=this.tags.get(b);g===void 0?this.tags.delete(b):(ae.delete(g),ae.size===0&&this.tags.delete(b))}return this}has(d){return this.visible.has(d[f])}hasTag(d,g=mi){var b;const y=(b=this.tags)==null?void 0:b.get(d[f]);return(y==null?void 0:y.has(g))??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let d=0,g=this.items.length;d<g;d++)this.remove(this.items[d],mi,!0);this.items.length=0}isChangeTreeVisible(d){let g=this.visible.has(d);return!g&&d.isVisibilitySharedWithParent&&this.visible.has(d.parent[f])&&(this.visible.add(d),g=!0),g}_recursiveDeleteVisibleChangeTree(d){d.forEachChild(g=>{this.visible.delete(g),this._recursiveDeleteVisibleChangeTree(g)})}}Me("map",{constructor:Gn}),Me("array",{constructor:Pn}),Me("set",{constructor:xr}),Me("collection",{constructor:Ji}),t.$changes=f,t.$childType=u,t.$decoder=a,t.$deleteByIndex=h,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Pn,t.ChangeTree=Ce,t.CollectionSchema=Ji,t.Decoder=rn,t.Encoder=Mt,t.MapSchema=Gn,t.Metadata=Ze,t.Reflection=pt,t.ReflectionField=Fe,t.ReflectionType=sn,t.Schema=We,t.SetSchema=xr,t.StateView=Pi,t.TypeContext=Ee,t.decode=Se,t.decodeKeyValueOperation=ss,t.decodeSchemaOperation=Yn,t.defineCustomTypes=De,t.defineTypes=re,t.deprecated=ne,t.dumpChanges=Ne,t.encode=ve,t.encodeArray=Xt,t.encodeKeyValueOperation=Ge,t.encodeSchemaOperation=Ke,t.entity=Dc,t.getDecoderStateCallbacks=Wn,t.getRawChangesCallback=ri,t.registerType=Me,t.schema=Le,t.type=q,t.view=L}))})(No,No.exports)),No.exports}var km;function sC(){if(km)return Df;km=1;var n=Tc,e=ed();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return Df.H3TransportTransport=t,Df}var Lf={},Nf,Vm;function oC(){return Vm||(Vm=1,Nf=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Nf}var Hm;function aC(){if(Hm)return Lf;Hm=1;var n=oC();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return Lf.WebSocketTransport=t,Lf}var Gm;function lC(){if(Gm)return If;Gm=1;var n=sC(),e=aC();let t=class{constructor(r){switch(this.events={},r){case"h3":this.transport=new n.H3TransportTransport(this.events);break;default:this.transport=new e.WebSocketTransport(this.events);break}}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return If.Connection=t,If}var Of={},Wm;function N_(){return Wm||(Wm=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Of)),Of}var nl={},$m;function O_(){if($m)return nl;$m=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return nl.getSerializer=t,nl.registerSerializer=e,nl}var Uf={},Xm;function U_(){if(Xm)return Uf;Xm=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return Uf.createNanoEvents=n,Uf}var il={},qm;function cC(){if(qm)return il;qm=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return il.EventEmitter=n,il.createSignal=e,il}var rl={},Ym;function F_(){if(Ym)return rl;Ym=1;var n=ed();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return rl.SchemaSerializer=t,rl.getStateCallbacks=e,rl}var gh;try{gh=new TextDecoder}catch{}var Oe,Yi,K=0,Gt={},yt,Cr,li=0,Bi=0,pn,ur,Cn=[],xt,Km={useRecords:!1,mapsAsObjects:!0};class B_{}const td=new B_;td.name="MessagePack 0xC1";var Pr=!1,z_=2,fC;try{new Function("")}catch{z_=1/0}class Dr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Oe)return $_(()=>(dc(),this?this.unpack(e,t):Dr.prototype.unpack.call(Km,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Yi=t.end||e.length,K=t.start||0):(K=0,Yi=t>-1?t:e.length),Bi=0,Cr=null,pn=null,Oe=e;try{xt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw Oe=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Dr){if(Gt=this,this.structures)return yt=this.structures,sl(t);(!yt||yt.length>0)&&(yt=[])}else Gt=Km,(!yt||yt.length>0)&&(yt=[]);return sl(t)}unpackMultiple(e,t){let i,r=0;try{Pr=!0;let s=e.length,o=this?this.unpack(e,s):Cc.unpack(e,s);if(t){if(t(o,r,K)===!1)return;for(;K<s;)if(r=K,t(sl(),r,K)===!1)return}else{for(i=[o];K<s;)r=K,i.push(sl());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Pr=!1,dc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function sl(n){try{if(!Gt.trusted&&!Pr){let t=yt.sharedLength||0;t<yt.length&&(yt.length=t)}let e;if(Gt.randomAccessStructure&&Oe[K]<64&&Oe[K]>=32&&fC||(e=nn()),pn&&(K=pn.postBundlePosition,pn=null),Pr&&(yt.restoreStructures=null),K==Yi)yt&&yt.restoreStructures&&Zm(),yt=null,Oe=null,ur&&(ur=null);else{if(K>Yi)throw new Error("Unexpected end of MessagePack data");if(!Pr){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw yt&&yt.restoreStructures&&Zm(),dc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||K>Yi)&&(e.incomplete=!0),e}}function Zm(){for(let n in yt.restoreStructures)yt[n]=yt.restoreStructures[n];yt.restoreStructures=null}function nn(){let n=Oe[K++];if(n<160)if(n<128){if(n<64)return n;{let e=yt[n&63]||Gt.getStructures&&k_()[n&63];return e?(e.read||(e.read=nd(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Gt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=H_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Gt.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(Bi>=K)return Cr.slice(K-li,(K+=e)-li);if(Bi==0&&Yi<140){let t=e<16?id(e):V_(e);if(t!=null)return t}return _h(e)}else{let e;switch(n){case 192:return null;case 193:return pn?(e=nn(),e>0?pn[1].slice(pn.position1,pn.position1+=e):pn[0].slice(pn.position0,pn.position0-=e)):td;case 194:return!1;case 195:return!0;case 196:if(e=Oe[K++],e===void 0)throw new Error("Unexpected end of buffer");return Ff(e);case 197:return e=xt.getUint16(K),K+=2,Ff(e);case 198:return e=xt.getUint32(K),K+=4,Ff(e);case 199:return Vr(Oe[K++]);case 200:return e=xt.getUint16(K),K+=2,Vr(e);case 201:return e=xt.getUint32(K),K+=4,Vr(e);case 202:if(e=xt.getFloat32(K),Gt.useFloat32>2){let t=Rc[(Oe[K]&127)<<1|Oe[K+1]>>7];return K+=4,(t*e+(e>0?.5:-.5)>>0)/t}return K+=4,e;case 203:return e=xt.getFloat64(K),K+=8,e;case 204:return Oe[K++];case 205:return e=xt.getUint16(K),K+=2,e;case 206:return e=xt.getUint32(K),K+=4,e;case 207:return Gt.int64AsType==="number"?(e=xt.getUint32(K)*4294967296,e+=xt.getUint32(K+4)):Gt.int64AsType==="string"?e=xt.getBigUint64(K).toString():Gt.int64AsType==="auto"?(e=xt.getBigUint64(K),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigUint64(K),K+=8,e;case 208:return xt.getInt8(K++);case 209:return e=xt.getInt16(K),K+=2,e;case 210:return e=xt.getInt32(K),K+=4,e;case 211:return Gt.int64AsType==="number"?(e=xt.getInt32(K)*4294967296,e+=xt.getUint32(K+4)):Gt.int64AsType==="string"?e=xt.getBigInt64(K).toString():Gt.int64AsType==="auto"?(e=xt.getBigInt64(K),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigInt64(K),K+=8,e;case 212:if(e=Oe[K++],e==114)return n0(Oe[K++]&63);{let t=Cn[e];if(t)return t.read?(K++,t.read(nn())):t.noBuffer?(K++,t()):t(Oe.subarray(K,++K));throw new Error("Unknown extension "+e)}case 213:return e=Oe[K],e==114?(K++,n0(Oe[K++]&63,Oe[K++])):Vr(2);case 214:return Vr(4);case 215:return Vr(8);case 216:return Vr(16);case 217:return e=Oe[K++],Bi>=K?Cr.slice(K-li,(K+=e)-li):hC(e);case 218:return e=xt.getUint16(K),K+=2,Bi>=K?Cr.slice(K-li,(K+=e)-li):dC(e);case 219:return e=xt.getUint32(K),K+=4,Bi>=K?Cr.slice(K-li,(K+=e)-li):pC(e);case 220:return e=xt.getUint16(K),K+=2,jm(e);case 221:return e=xt.getUint32(K),K+=4,jm(e);case 222:return e=xt.getUint16(K),K+=2,Qm(e);case 223:return e=xt.getUint32(K),K+=4,Qm(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const uC=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function nd(n,e){function t(){if(t.count++>z_){let r=n.read=new Function("r","return function(){return "+(Gt.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":uC.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(nn);return n.highByte===0&&(n.read=Jm(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=nn()}return Gt.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?Jm(e,t):t}const Jm=(n,e)=>function(){let t=Oe[K++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=yt[i]||k_()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=nd(r,n)),r.read()};function k_(){let n=$_(()=>(Oe=null,Gt.getStructures()));return yt=Gt._mergeStructures(n,yt)}var _h=ra,hC=ra,dC=ra,pC=ra;let mC=!1;function ra(n){let e;if(n<16&&(e=id(n)))return e;if(n>64&&gh)return gh.decode(Oe.subarray(K,K+=n));const t=K+n,i=[];for(e="";K<t;){const r=Oe[K++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=Oe[K++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=Oe[K++]&63,o=Oe[K++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=Oe[K++]&63,o=Oe[K++]&63,a=Oe[K++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=dn.apply(String,i),i.length=0)}return i.length>0&&(e+=dn.apply(String,i)),e}function jm(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Gt.freezeData?Object.freeze(e):e}function Qm(n){if(Gt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=H_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}}var dn=String.fromCharCode;function V_(n){let e=K,t=new Array(n);for(let i=0;i<n;i++){const r=Oe[K++];if((r&128)>0){K=e;return}t[i]=r}return dn.apply(String,t)}function id(n){if(n<4)if(n<2){if(n===0)return"";{let e=Oe[K++];if((e&128)>1){K-=1;return}return dn(e)}}else{let e=Oe[K++],t=Oe[K++];if((e&128)>0||(t&128)>0){K-=2;return}if(n<3)return dn(e,t);let i=Oe[K++];if((i&128)>0){K-=3;return}return dn(e,t,i)}else{let e=Oe[K++],t=Oe[K++],i=Oe[K++],r=Oe[K++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){K-=4;return}if(n<6){if(n===4)return dn(e,t,i,r);{let s=Oe[K++];if((s&128)>0){K-=5;return}return dn(e,t,i,r,s)}}else if(n<8){let s=Oe[K++],o=Oe[K++];if((s&128)>0||(o&128)>0){K-=6;return}if(n<7)return dn(e,t,i,r,s,o);let a=Oe[K++];if((a&128)>0){K-=7;return}return dn(e,t,i,r,s,o,a)}else{let s=Oe[K++],o=Oe[K++],a=Oe[K++],c=Oe[K++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){K-=8;return}if(n<10){if(n===8)return dn(e,t,i,r,s,o,a,c);{let l=Oe[K++];if((l&128)>0){K-=9;return}return dn(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=Oe[K++],h=Oe[K++];if((l&128)>0||(h&128)>0){K-=10;return}if(n<11)return dn(e,t,i,r,s,o,a,c,l,h);let f=Oe[K++];if((f&128)>0){K-=11;return}return dn(e,t,i,r,s,o,a,c,l,h,f)}else{let l=Oe[K++],h=Oe[K++],f=Oe[K++],u=Oe[K++];if((l&128)>0||(h&128)>0||(f&128)>0||(u&128)>0){K-=12;return}if(n<14){if(n===12)return dn(e,t,i,r,s,o,a,c,l,h,f,u);{let p=Oe[K++];if((p&128)>0){K-=13;return}return dn(e,t,i,r,s,o,a,c,l,h,f,u,p)}}else{let p=Oe[K++],m=Oe[K++];if((p&128)>0||(m&128)>0){K-=14;return}if(n<15)return dn(e,t,i,r,s,o,a,c,l,h,f,u,p,m);let v=Oe[K++];if((v&128)>0){K-=15;return}return dn(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v)}}}}}function e0(){let n=Oe[K++],e;if(n<192)e=n-160;else switch(n){case 217:e=Oe[K++];break;case 218:e=xt.getUint16(K),K+=2;break;case 219:e=xt.getUint32(K),K+=4;break;default:throw new Error("Expected string")}return ra(e)}function Ff(n){return Gt.copyBuffers?Uint8Array.prototype.slice.call(Oe,K,K+=n):Oe.subarray(K,K+=n)}function Vr(n){let e=Oe[K++];if(Cn[e]){let t;return Cn[e](Oe.subarray(K,t=K+=n),i=>{K=i;try{return nn()}finally{K=t}})}else throw new Error("Unknown extension type "+e)}var t0=new Array(4096);function H_(){let n=Oe[K++];if(n>=160&&n<192){if(n=n-160,Bi>=K)return Cr.slice(K-li,(K+=n)-li);if(!(Bi==0&&Yi<180))return _h(n)}else return K--,G_(nn());let e=(n<<5^(n>1?xt.getUint16(K):n>0?Oe[K]:0))&4095,t=t0[e],i=K,r=K+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=xt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=Oe[i++],s!=t[o++]){i=1879048192;break}if(i===r)return K=i,t.string;r-=3,i=K}for(t=[],t0[e]=t,t.bytes=n;i<r;)s=xt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=Oe[i++],t.push(s);let a=n<16?id(n):V_(n);return a!=null?t.string=a:t.string=_h(n)}function G_(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Gt.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const n0=(n,e)=>{let t=nn().map(G_),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=yt[n];return r&&(r.isShared||Pr)&&((yt.restoreStructures||(yt.restoreStructures=[]))[n]=r),yt[n]=t,t.read=nd(t,i),t.read()};Cn[0]=()=>{};Cn[0].noBuffer=!0;Cn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let gC={Error,TypeError,ReferenceError};Cn[101]=()=>{let n=nn();return(gC[n[0]]||Error)(n[1],{cause:n[2]})};Cn[105]=n=>{if(Gt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(K-4);ur||(ur=new Map);let t=Oe[K],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};ur.set(e,r);let s=nn();return r.used?Object.assign(i,s):(r.target=s,s)};Cn[112]=n=>{if(Gt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(K-4),t=ur.get(e);return t.used=!0,t.target};Cn[115]=()=>new Set(nn());const W_=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let _C=typeof globalThis=="object"?globalThis:window;Cn[116]=n=>{let e=n[0],t=W_[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new _C[t](Uint8Array.prototype.slice.call(n,1).buffer)};Cn[120]=()=>{let n=nn();return new RegExp(n[0],n[1])};const xC=[];Cn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=K;return K+=e-n.length,pn=xC,pn=[e0(),e0()],pn.position0=0,pn.position1=0,pn.postBundlePosition=K,K=t,nn()};Cn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function $_(n){let e=Yi,t=K,i=li,r=Bi,s=Cr,o=ur,a=pn,c=new Uint8Array(Oe.slice(0,Yi)),l=yt,h=yt.slice(0,yt.length),f=Gt,u=Pr,p=n();return Yi=e,K=t,li=i,Bi=r,Cr=s,ur=o,pn=a,Oe=c,Pr=u,yt=l,yt.splice(0,yt.length,...h),Gt=f,xt=new DataView(Oe.buffer,Oe.byteOffset,Oe.byteLength),p}function dc(){Oe=null,ur=null,yt=null}function vC(n){n.unpack?Cn[n.type]=n.unpack:Cn[n.type]=n}const Rc=new Array(147);for(let n=0;n<256;n++)Rc[n]=+("1e"+Math.floor(45.15-n*.30103));const yC=Dr;var Cc=new Dr({useRecords:!1});const SC=Cc.unpack,MC=Cc.unpackMultiple,EC=Cc.unpack,X_={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let q_=new Float32Array(1),i0=new Uint8Array(q_.buffer,0,4);function bC(n){q_[0]=n;let e=Rc[(i0[3]&127)<<1|i0[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let yl;try{yl=new TextEncoder}catch{}let pc,rd;const Pc=typeof Buffer<"u",ol=Pc?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,Y_=Pc?Buffer:Uint8Array,r0=Pc?4294967296:2144337920;let ie,To,Vt,J=0,Un,Jt=null,wC;const TC=21760,AC=/[\u0080-\uFFFF]/,Cs=Symbol("record-id");class sa extends Dr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=Y_.prototype.utf8Write?function(D,H){return ie.utf8Write(D,H,ie.byteLength-H)}:yl&&yl.encodeInto?function(D,H){return yl.encodeInto(D,ie.subarray(H)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=h>32||f+h>64,p=h+64,m=h+f+64;if(m>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let v=[],_=0,x=0;this.pack=this.encode=function(D,H){if(ie||(ie=new ol(8192),Vt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,8192)),J=0),Un=ie.length-10,Un-J<2048?(ie=new ol(ie.length),Vt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,ie.length)),Un=ie.length-10,J=0):J=J+7&2147483640,t=J,H&j_&&(J+=H&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof D!="string"?(Jt=[],Jt.size=1/0):Jt=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let O=r.sharedLength||0;if(O>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let F=0;F<O;F++){let G=r[F];if(!G)continue;let Z,te=r.transitions;for(let ue=0,_e=G.length;ue<_e;ue++){let Ue=G[ue];Z=te[Ue],Z||(Z=te[Ue]=Object.create(null)),te=Z}te[Cs]=F+64}this.lastNamedStructuresLength=O}c||(r.nextId=O+64)}i&&(i=!1);let P;try{a.randomAccessStructure&&D&&D.constructor&&D.constructor===Object?z(D):S(D);let O=Jt;if(Jt&&a0(t,S,0),s&&s.idsToInsert){let F=s.idsToInsert.sort((ue,_e)=>ue.offset>_e.offset?1:-1),G=F.length,Z=-1;for(;O&&G>0;){let ue=F[--G].offset+t;ue<O.stringsPosition+t&&Z===-1&&(Z=0),ue>O.position+t?Z>=0&&(Z+=6):(Z>=0&&(Vt.setUint32(O.position+t,Vt.getUint32(O.position+t)+Z),Z=-1),O=O.previous,G++)}Z>=0&&O&&Vt.setUint32(O.position+t,Vt.getUint32(O.position+t)+Z),J+=F.length*6,J>Un&&T(J),a.offset=J;let te=CC(ie.subarray(t,J),F);return s=null,te}return a.offset=J,H&Z_?(ie.start=t,ie.end=J,ie):ie.subarray(t,J)}catch(O){throw P=O,O}finally{if(r&&(w(),i&&a.saveStructures)){let O=r.sharedLength||0,F=ie.subarray(t,J),G=IC(r,a);if(!P)return a.saveStructures(G,G.isCompatible)===!1?a.pack(D,H):(a.lastNamedStructuresLength=O,ie.length>1073741824&&(ie=null),F)}ie.length>1073741824&&(ie=null),H&J_&&(J=t)}};const w=()=>{x<10&&x++;let D=r.sharedLength||0;if(r.length>D&&!c&&(r.length=D),_>1e4)r.transitions=null,x=0,_=0,v.length>0&&(v=[]);else if(v.length>0&&!c){for(let H=0,P=v.length;H<P;H++)v[H][Cs]=0;v=[]}},A=D=>{var H=D.length;H<16?ie[J++]=144|H:H<65536?(ie[J++]=220,ie[J++]=H>>8,ie[J++]=H&255):(ie[J++]=221,Vt.setUint32(J,H),J+=4);for(let P=0;P<H;P++)S(D[P])},S=D=>{J>Un&&(ie=T(J));var H=typeof D,P;if(H==="string"){let O=D.length;if(Jt&&O>=4&&O<4096){if((Jt.size+=O)>TC){let te,ue=(Jt[0]?Jt[0].length*3+Jt[1].length:0)+10;J+ue>Un&&(ie=T(J+ue));let _e;Jt.position?(_e=Jt,ie[J]=200,J+=3,ie[J++]=98,te=J-t,J+=4,a0(t,S,0),Vt.setUint16(te+t-3,J-t-te)):(ie[J++]=214,ie[J++]=98,te=J-t,J+=4),Jt=["",""],Jt.previous=_e,Jt.size=0,Jt.position=te}let Z=AC.test(D);Jt[Z?0:1]+=D,ie[J++]=193,S(Z?-O:O);return}let F;O<32?F=1:O<256?F=2:O<65536?F=3:F=5;let G=O*3;if(J+G>Un&&(ie=T(J+G)),O<64||!o){let Z,te,ue,_e=J+F;for(Z=0;Z<O;Z++)te=D.charCodeAt(Z),te<128?ie[_e++]=te:te<2048?(ie[_e++]=te>>6|192,ie[_e++]=te&63|128):(te&64512)===55296&&((ue=D.charCodeAt(Z+1))&64512)===56320?(te=65536+((te&1023)<<10)+(ue&1023),Z++,ie[_e++]=te>>18|240,ie[_e++]=te>>12&63|128,ie[_e++]=te>>6&63|128,ie[_e++]=te&63|128):(ie[_e++]=te>>12|224,ie[_e++]=te>>6&63|128,ie[_e++]=te&63|128);P=_e-J-F}else P=o(D,J+F);P<32?ie[J++]=160|P:P<256?(F<2&&ie.copyWithin(J+2,J+1,J+1+P),ie[J++]=217,ie[J++]=P):P<65536?(F<3&&ie.copyWithin(J+3,J+2,J+2+P),ie[J++]=218,ie[J++]=P>>8,ie[J++]=P&255):(F<5&&ie.copyWithin(J+5,J+3,J+3+P),ie[J++]=219,Vt.setUint32(J,P),J+=4),J+=P}else if(H==="number")if(D>>>0===D)D<32||D<128&&this.useRecords===!1||D<64&&!this.randomAccessStructure?ie[J++]=D:D<256?(ie[J++]=204,ie[J++]=D):D<65536?(ie[J++]=205,ie[J++]=D>>8,ie[J++]=D&255):(ie[J++]=206,Vt.setUint32(J,D),J+=4);else if(D>>0===D)D>=-32?ie[J++]=256+D:D>=-128?(ie[J++]=208,ie[J++]=D+256):D>=-32768?(ie[J++]=209,Vt.setInt16(J,D),J+=2):(ie[J++]=210,Vt.setInt32(J,D),J+=4);else{let O;if((O=this.useFloat32)>0&&D<4294967296&&D>=-2147483648){ie[J++]=202,Vt.setFloat32(J,D);let F;if(O<4||(F=D*Rc[(ie[J]&127)<<1|ie[J+1]>>7])>>0===F){J+=4;return}else J--}ie[J++]=203,Vt.setFloat64(J,D),J+=8}else if(H==="object"||H==="function")if(!D)ie[J++]=192;else{if(s){let F=s.get(D);if(F){if(!F.id){let G=s.idsToInsert||(s.idsToInsert=[]);F.id=G.push(F)}ie[J++]=214,ie[J++]=112,Vt.setUint32(J,F.id),J+=4;return}else s.set(D,{offset:J-t})}let O=D.constructor;if(O===Object)M(D);else if(O===Array)A(D);else if(O===Map)if(this.mapAsEmptyObject)ie[J++]=128;else{P=D.size,P<16?ie[J++]=128|P:P<65536?(ie[J++]=222,ie[J++]=P>>8,ie[J++]=P&255):(ie[J++]=223,Vt.setUint32(J,P),J+=4);for(let[F,G]of D)S(F),S(G)}else{for(let F=0,G=pc.length;F<G;F++){let Z=rd[F];if(D instanceof Z){let te=pc[F];if(te.write){te.type&&(ie[J++]=212,ie[J++]=te.type,ie[J++]=0);let it=te.write.call(this,D);it===D?Array.isArray(D)?A(D):M(D):S(it);return}let ue=ie,_e=Vt,Ue=J;ie=null;let ke;try{ke=te.pack.call(this,D,it=>(ie=ue,ue=null,J+=it,J>Un&&T(J),{target:ie,targetView:Vt,position:J-it}),S)}finally{ue&&(ie=ue,Vt=_e,J=Ue,Un=ie.length-10)}ke&&(ke.length+J>Un&&T(ke.length+J),J=RC(ke,ie,J,te.type));return}}if(Array.isArray(D))A(D);else{if(D.toJSON){const F=D.toJSON();if(F!==D)return S(F)}if(H==="function")return S(this.writeFunction&&this.writeFunction(D));M(D)}}}else if(H==="boolean")ie[J++]=D?195:194;else if(H==="bigint"){if(D<BigInt(1)<<BigInt(63)&&D>=-(BigInt(1)<<BigInt(63)))ie[J++]=211,Vt.setBigInt64(J,D);else if(D<BigInt(1)<<BigInt(64)&&D>0)ie[J++]=207,Vt.setBigUint64(J,D);else if(this.largeBigIntToFloat)ie[J++]=203,Vt.setFloat64(J,Number(D));else{if(this.largeBigIntToString)return S(D.toString());if(this.useBigIntExtension&&D<BigInt(2)**BigInt(1023)&&D>-(BigInt(2)**BigInt(1023))){ie[J++]=199,J++,ie[J++]=66;let O=[],F;do{let G=D&BigInt(255);F=(G&BigInt(128))===(D<BigInt(0)?BigInt(128):BigInt(0)),O.push(G),D>>=BigInt(8)}while(!((D===BigInt(0)||D===BigInt(-1))&&F));ie[J-2]=O.length;for(let G=O.length;G>0;)ie[J++]=Number(O[--G]);return}else throw new RangeError(D+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}J+=8}else if(H==="undefined")this.encodeUndefinedAsNil?ie[J++]=192:(ie[J++]=212,ie[J++]=0,ie[J++]=0);else throw new Error("Unknown type: "+H)},R=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?D=>{let H;if(this.skipValues){H=[];for(let F in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(F))&&!this.skipValues.includes(D[F])&&H.push(F)}else H=Object.keys(D);let P=H.length;P<16?ie[J++]=128|P:P<65536?(ie[J++]=222,ie[J++]=P>>8,ie[J++]=P&255):(ie[J++]=223,Vt.setUint32(J,P),J+=4);let O;if(this.coercibleKeyAsNumber)for(let F=0;F<P;F++){O=H[F];let G=Number(O);S(isNaN(G)?O:G),S(D[O])}else for(let F=0;F<P;F++)S(O=H[F]),S(D[O])}:D=>{ie[J++]=222;let H=J-t;J+=2;let P=0;for(let O in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(O))&&(S(O),S(D[O]),P++);if(P>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ie[H+++t]=P>>8,ie[H+t]=P&255},C=this.useRecords===!1?R:e.progressiveRecords&&!u?D=>{let H,P=r.transitions||(r.transitions=Object.create(null)),O=J++-t,F;for(let G in D)if(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(G)){if(H=P[G],H)P=H;else{let Z=Object.keys(D),te=P;P=r.transitions;let ue=0;for(let _e=0,Ue=Z.length;_e<Ue;_e++){let ke=Z[_e];H=P[ke],H||(H=P[ke]=Object.create(null),ue++),P=H}O+t+1==J?(J--,B(P,Z,ue)):U(P,Z,O,ue),F=!0,P=te[G]}S(D[G])}if(!F){let G=P[Cs];G?ie[O+t]=G:U(P,Object.keys(D),O,0)}}:D=>{let H,P=r.transitions||(r.transitions=Object.create(null)),O=0;for(let G in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(G))&&(H=P[G],H||(H=P[G]=Object.create(null),O++),P=H);let F=P[Cs];F?F>=96&&u?(ie[J++]=((F-=96)&31)+96,ie[J++]=F>>5):ie[J++]=F:B(P,P.__keys__||Object.keys(D),O);for(let G in D)(typeof D.hasOwnProperty!="function"||D.hasOwnProperty(G))&&S(D[G])},N=typeof this.useRecords=="function"&&this.useRecords,M=N?D=>{N(D)?C(D):R(D)}:C,T=D=>{let H;if(D>16777216){if(D-t>r0)throw new Error("Packed buffer would be larger than maximum buffer size");H=Math.min(r0,Math.round(Math.max((D-t)*(D>67108864?1.25:2),4194304)/4096)*4096)}else H=(Math.max(D-t<<2,ie.length-1)>>12)+1<<12;let P=new ol(H);return Vt=P.dataView||(P.dataView=new DataView(P.buffer,0,H)),D=Math.min(D,ie.length),ie.copy?ie.copy(P,0,t,D):P.set(ie.slice(t,D)),J-=t,t=0,Un=P.length-10,ie=P},B=(D,H,P)=>{let O=r.nextId;O||(O=64),O<p&&this.shouldShareStructure&&!this.shouldShareStructure(H)?(O=r.nextOwnId,O<m||(O=p),r.nextOwnId=O+1):(O>=m&&(O=p),r.nextId=O+1);let F=H.highByte=O>=96&&u?O-96>>5:-1;D[Cs]=O,D.__keys__=H,r[O-64]=H,O<p?(H.isShared=!0,r.sharedLength=O-63,i=!0,F>=0?(ie[J++]=(O&31)+96,ie[J++]=F):ie[J++]=O):(F>=0?(ie[J++]=213,ie[J++]=114,ie[J++]=(O&31)+96,ie[J++]=F):(ie[J++]=212,ie[J++]=114,ie[J++]=O),P&&(_+=x*P),v.length>=f&&(v.shift()[Cs]=0),v.push(D),S(H))},U=(D,H,P,O)=>{let F=ie,G=J,Z=Un,te=t;ie=To,J=0,t=0,ie||(To=ie=new ol(8192)),Un=ie.length-10,B(D,H,O),To=ie;let ue=J;if(ie=F,J=G,Un=Z,t=te,ue>1){let _e=J+ue-1;_e>Un&&T(_e);let Ue=P+t;ie.copyWithin(Ue+ue,Ue+1,J),ie.set(To.slice(0,ue),Ue),J=_e}else ie[P+t]=To[0]},z=D=>{let H=wC(D,ie,t,J,r,T,(P,O,F)=>{if(F)return i=!0;J=O;let G=ie;return S(P),w(),G!==ie?{position:J,targetView:Vt,target:ie}:J},this);if(H===0)return M(D);J=H}}useBuffer(e){ie=e,ie.dataView||(ie.dataView=new DataView(ie.buffer,ie.byteOffset,ie.byteLength)),Vt=ie.dataView,J=0}set position(e){J=e}get position(){return J}set buffer(e){ie=e}get buffer(){return ie}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}rd=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,B_];pc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?s0(n,16,e):o0(Pc?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==Y_&&this.moreTypes?s0(n,W_.indexOf(t.name),e):o0(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function s0(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function o0(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function RC(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function CC(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function a0(n,e,t){if(Jt.length>0){Vt.setUint32(Jt.position+n,J+t-Jt.position-n),Jt.stringsPosition=J-n;let i=Jt;Jt=null,e(i[0]),e(i[1])}}function PC(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");rd.unshift(n.Class),pc.unshift(n)}vC(n)}function IC(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let K_=new sa({useRecords:!1});const DC=K_.pack,LC=K_.pack,NC=sa,{NEVER:OC,ALWAYS:UC,DECIMAL_ROUND:FC,DECIMAL_FIT:BC}=X_,Z_=512,J_=1024,j_=2048;function zC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return kC(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return VC(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*kC(n,e){const t=new sa(e);for(const i of n)yield t.pack(i)}async function*VC(n,e){const t=new sa(e);for await(const i of n)yield t.pack(i)}function HC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Dr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const GC=HC,WC=zC,$C=!1,XC=!0,qC=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:UC,C1:td,DECIMAL_FIT:BC,DECIMAL_ROUND:FC,Decoder:yC,Encoder:NC,FLOAT32_OPTIONS:X_,NEVER:OC,Packr:sa,RESERVE_START_SPACE:j_,RESET_BUFFER_MODE:J_,REUSE_BUFFER_MODE:Z_,Unpackr:Dr,addExtension:PC,clearSource:dc,decode:EC,decodeIter:GC,encode:LC,encodeIter:WC,isNativeAccelerationEnabled:mC,mapsAsObjects:XC,pack:DC,roundFloat32:bC,unpack:SC,unpackMultiple:MC,useRecords:$C},Symbol.toStringTag,{value:"Module"})),YC=jh(qC);var l0;function ex(){if(l0)return Pf;l0=1;var n=lC(),e=N_(),t=O_(),i=U_(),r=cC(),s=ed(),o=F_(),a=Ac(),c=YC;let l=class Q_{constructor(f,u){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),u&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=u,this.serializer.state=new u),this.onError((p,m)=>{var v;return(v=console.warn)===null||v===void 0?void 0:v.call(console,`colyseus.js - onError => (${p}) ${m}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,u,p=this,m,v){const _=new n.Connection(m.protocol);if(p.connection=_,_.events.onmessage=Q_.prototype.onMessageCallback.bind(p),_.events.onclose=function(x){var w;if(!p.hasJoined){(w=console.warn)===null||w===void 0||w.call(console,`Room connection was closed unexpectedly (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason);return}x.code===a.CloseCode.DEVMODE_RESTART&&u?u():(p.onLeave.invoke(x.code,x.reason),p.destroy())},_.events.onerror=function(x){var w;(w=console.warn)===null||w===void 0||w.call(console,`Room, onError (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason)},m.protocol==="h3"){const x=new URL(f);_.connect(x.origin,m)}else _.connect(f,v)}leave(f=!0){return new Promise(u=>{this.onLeave(p=>u(p)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(f,u){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),u)}send(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const m=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.send(m)}sendUnreliable(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const m=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.sendUnreliable(m)}sendBytes(f,u){const p={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),u.byteLength+p.offset>this.packr.buffer.byteLength){const m=new Uint8Array(p.offset+u.byteLength);m.set(this.packr.buffer),this.packr.useBuffer(m)}this.packr.buffer.set(u,p.offset),this.connection.send(this.packr.buffer.subarray(0,p.offset+u.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const u=new Uint8Array(f.data),p={offset:1},m=u[0];if(m===e.Protocol.JOIN_ROOM){const v=s.decode.utf8Read(u,p,u[p.offset++]);if(this.serializerId=s.decode.utf8Read(u,p,u[p.offset++]),!this.serializer){const _=t.getSerializer(this.serializerId);this.serializer=new _}u.byteLength>p.offset&&this.serializer.handshake&&this.serializer.handshake(u,p),this.reconnectionToken=`${this.roomId}:${v}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(m===e.Protocol.ERROR){const v=s.decode.number(u,p),_=s.decode.string(u,p);this.onError.invoke(v,_)}else if(m===e.Protocol.LEAVE_ROOM)this.leave();else if(m===e.Protocol.ROOM_STATE)this.serializer.setState(u,p),this.onStateChange.invoke(this.serializer.getState());else if(m===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(u,p),this.onStateChange.invoke(this.serializer.getState());else if(m===e.Protocol.ROOM_DATA){const v=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p),_=u.byteLength>p.offset?c.unpack(u,{start:p.offset}):void 0;this.dispatchMessage(v,_)}else if(m===e.Protocol.ROOM_DATA_BYTES){const v=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p);this.dispatchMessage(v,u.subarray(p.offset))}}dispatchMessage(f,u){var p;const m=this.getMessageHandlerKey(f);this.onMessageHandlers.events[m]?this.onMessageHandlers.emit(m,u):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,u):(p=console.warn)===null||p===void 0||p.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return Pf.Room=l,Pf}var Bf={};function c0(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Ci(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),c0(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return c0(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var KC=Ci.bind(Ci,"GET"),ZC=Ci.bind(Ci,"POST"),JC=Ci.bind(Ci,"PATCH"),jC=Ci.bind(Ci,"DELETE"),QC=Ci.bind(Ci,"PUT");const e2=Object.freeze(Object.defineProperty({__proto__:null,del:jC,get:KC,patch:JC,post:ZC,put:QC,send:Ci},Symbol.toStringTag,{value:"Module"})),t2=jh(e2);var f0;function n2(){if(f0)return Bf;f0=1;var n=Ac(),e=t2;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,u=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!u?l:new n.ServerError(f,u)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return Bf.HTTP=r,Bf}var zf={},Ao={},u0;function i2(){if(u0)return Ao;u0=1;var n=Tc;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Ao.getItem=s,Ao.removeItem=r,Ao.setItem=i,Ao}var h0;function tx(){if(h0)return zf;h0=1;var n=Tc,e=i2(),t=U_(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,u)=>{this.getUserData().then(p=>{this.emitChange(Object.assign(Object.assign({},p),{token:this.token}))}).catch(p=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(u),u})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((u,p)=>{const m=f.width||480,v=f.height||768,_=this.token?`?token=${this.token}`:"",x=`Login with ${h[0].toUpperCase()+h.substring(1)}`,w=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${_}`),A=screen.width/2-m/2,S=screen.height/2-v/2;n.__classPrivateFieldSet(this,s,window.open(w,x,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+m+", height="+v+", top="+S+", left="+A),"f");const R=N=>{N.data.user===void 0&&N.data.token===void 0||(clearInterval(C),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",R),N.data.error!==void 0?p(N.data.error):(u(N.data),this.emitChange(N.data)))},C=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),p("cancelled"),window.removeEventListener("message",R))},200);window.addEventListener("message",R)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,zf.Auth=a,zf}var kf={},d0;function r2(){if(d0)return kf;d0=1;function n(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return kf.discordURLBuilder=n,kf}var p0;function s2(){if(p0)return tl;p0=1;var n=Tc,e=Ac(),t=ex(),i=n2(),r=tx(),s=r2(),o;class a extends Error{constructor(f,u){super(f),this.code=u,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window==null?void 0:window.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,u){var p,m;if(typeof f=="string"){const v=f.startsWith("/")?new URL(f,c):new URL(f),_=v.protocol==="https:"||v.protocol==="wss:",x=Number(v.port||(_?443:80));this.settings={hostname:v.hostname,pathname:v.pathname,port:x,secure:_,searchParams:v.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,(u==null?void 0:u.headers)||{}),this.auth=new r.Auth(this.http),this.urlBuilder=u==null?void 0:u.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((m=(p=window==null?void 0:window.location)===null||p===void 0?void 0:p.hostname)===null||m===void 0)&&m.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("joinOrCreate",u,p,m)})}create(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("create",u,p,m)})}join(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("join",u,p,m)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("joinById",u,p,m)})}reconnect(f,u){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof u=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,m]=f.split(":");if(!p||!m)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:m},u)})}consumeSeatReservation(f,u,p){return n.__awaiter(this,void 0,void 0,function*(){const m=this.createRoom(f.room.name,u);m.roomId=f.room.roomId,m.sessionId=f.sessionId;const v={sessionId:m.sessionId};f.reconnectionToken&&(v.reconnectionToken=f.reconnectionToken);const _=p||m;return m.connect(this.buildEndpoint(f.room,v,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${m.roomId}'...`);let x=0,w=8;const A=()=>n.__awaiter(this,void 0,void 0,function*(){x++;try{yield this.consumeSeatReservation(f,u,_),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${m.roomId}'`)}catch{x<w?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${x} out of ${w})`),setTimeout(A,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(A,2e3)})),_,f,this.http.headers),new Promise((x,w)=>{const A=(S,R)=>w(new e.ServerError(S,R));_.onError.once(A),_.onJoin.once(()=>{_.onError.remove(A),x(_)})})})}createMatchMakeRequest(f,u){return n.__awaiter(this,arguments,void 0,function*(p,m,v={},_,x){const w=(yield this.http.post(`matchmake/${p}/${m}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(v)})).data;if(w.error)throw new a(w.error,w.code);return p==="reconnect"&&(w.reconnectionToken=v.reconnectionToken),yield this.consumeSeatReservation(w,_,x)})}createRoom(f,u){return new t.Room(f,u)}buildEndpoint(f,u={},p="ws"){let m=this.settings.searchParams||"";this.http.authToken&&(u._authToken=this.http.authToken);for(const x in u)u.hasOwnProperty(x)&&(m+=(m?"&":"")+`${x}=${u[x]}`);p==="h3"&&(p="http");let v=this.settings.secure?`${p}s://`:`${p}://`;f.publicAddress?v+=`${f.publicAddress}`:v+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const _=`${v}/${f.processId}/${f.roomId}?${m}`;return this.urlBuilder?this.urlBuilder(new URL(_)):_}getHttpEndpoint(f=""){const u=f.startsWith("/")?f:`/${f}`;let p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${u}`;return this.settings.searchParams&&(p+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",tl.Client=l,tl.MatchMakeError=a,tl}var Vf={},m0;function o2(){if(m0)return Vf;m0=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Vf.NoneSerializer=n,Vf}var g0;function a2(){return g0||(g0=1,(function(n){QR();var e=s2(),t=N_(),i=ex(),r=tx(),s=Ac(),o=F_(),a=o2(),c=O_();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(Rf)),Rf}var l2=a2();const c2="wss://cargo-skies.fly.dev";async function f2(n,e){const t=new l2.Client(c2),i=e===null?await t.create("race",{nickname:n,code:A1()}):await t.join("race",{nickname:n,code:e.toUpperCase()});return{room:i,sessionId:i.sessionId,isHost:()=>i.state.hostSessionId===i.sessionId,sendInput:r=>i.send("input",r),start:()=>i.send("start",{}),setOptions:r=>i.send("options",r)}}const nx="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",ix="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:320px;display:flex;flex-direction:column;gap:12px",Bo="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let bn=null,xh="";const u2=()=>["localhost","127.0.0.1"].includes(location.hostname)||!0;function h2(n,e){const t=u2(),i=t?"":"disabled";bn=document.createElement("div"),bn.style.cssText=nx;const r=document.createElement("div");if(r.style.cssText=ix,r.innerHTML=`
    <h1 style="margin:0;font-size:24px">Cargo Skies ✈️</h1>
    <input id="nick" placeholder="Your pilot name" maxlength="16"
           style="padding:10px;border-radius:8px;border:none;font-size:16px" />
    <div id="mp" style="display:flex;flex-direction:column;gap:12px">
      <button id="create" ${i} style="${Bo}">Start a race</button>
      <div style="display:flex;gap:8px">
        <input id="code" placeholder="Code" maxlength="4" ${i}
               style="padding:10px;border-radius:8px;border:none;font-size:16px;width:90px;text-transform:uppercase" />
        <button id="join" ${i} style="${Bo};background:#3d6ee8;flex:1">Join a race</button>
      </div>
    </div>
    ${t?"":'<div style="font-size:12px;opacity:.6;margin-top:-6px">Multiplayer races are coming soon ✨</div>'}
    <div style="height:1px;background:rgba(255,255,255,.15);margin:4px 0"></div>
    <button id="practice" style="${Bo};background:#2fbf71">Practice (solo) — no server needed</button>`,bn.appendChild(r),document.body.appendChild(bn),!t){const c=r.querySelector("#mp");c.style.opacity="0.35";for(const l of c.querySelectorAll("button, input"))l.style.cursor="not-allowed"}const s=r.querySelector("#nick"),o=r.querySelector("#code"),a=new URLSearchParams(location.search).get("r");a&&/^[A-Za-z0-9]{4}$/.test(a)&&(o.value=a.toUpperCase()),r.querySelector("#create").addEventListener("click",()=>{n(s.value||"Pilot",null)}),r.querySelector("#join").addEventListener("click",()=>{o.value.length===4&&n(s.value||"Pilot",o.value)}),r.querySelector("#practice").addEventListener("click",()=>{e()})}const d2="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer;color:#fff",_0=(n,e,t)=>`<div data-${n} style="display:flex;gap:6px">${e.map(i=>`<button data-v="${i}" style="${d2};background:${i===t?"#e84d3d":"rgba(255,255,255,.12)"}">${i}</button>`).join("")}</div>`;function p2(n,e,t,i){var f;bn||(bn=document.createElement("div"),bn.style.cssText=nx,document.body.appendChild(bn));const r=n.hostSessionId===e,s=[];n.players.forEach(u=>s.push(u.nickname));const o=s.length>=2,a=[n.code,s.join(","),n.legCount,n.difficulty,r].join("|");if(a===xh)return;xh=a;const c=`${location.origin}${location.pathname}?r=${n.code}`,l=`≈ ${n.legCount*2} min`,h=r?`
      <div style="font-size:13px;opacity:.8">Legs per contract (${l})</div>
      ${_0("legs",["2","3","4","5","6"],String(n.legCount))}
      <div style="font-size:13px;opacity:.8">Difficulty</div>
      ${_0("diff",["kids","normal","expert"],n.difficulty)}`:`<div style="opacity:.8;font-size:14px">Route: ${n.legCount} legs · ${n.difficulty} · ${l}</div>`;bn.innerHTML=`
    <div style="${ix}">
      <h2 style="margin:0">Room ${n.code}</h2>
      <div style="opacity:.8">Share: <a href="${c}" style="color:#8fb7ff">${c}</a></div>
      <div>${s.map(u=>`🛩️ ${u}`).join("<br>")}</div>
      ${h}
      ${r?o?`<button id="go" style="${Bo}">Start race</button>`:`<button id="go" disabled style="${Bo};opacity:.4;cursor:not-allowed">Start race</button>
               <div style="opacity:.75;font-size:13px">Waiting for a friend to join — share the link!</div>`:"<div style='opacity:.7'>Waiting for host…</div>"}
    </div>`,(f=bn.querySelector("#go"))==null||f.addEventListener("click",t);for(const u of bn.querySelectorAll("[data-legs] button"))u.addEventListener("click",()=>i({legCount:Number(u.dataset.v)}));for(const u of bn.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>i({difficulty:u.dataset.v??"normal"}))}function x0(){bn==null||bn.remove(),bn=null,xh=""}const m2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",g2="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:360px;display:flex;flex-direction:column;gap:14px",al="padding:10px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 16px system-ui;cursor:pointer",Ro="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer";let yi=null;function _2(n,e){yi==null||yi.remove(),yi=document.createElement("div"),yi.style.cssText=m2;const t=document.createElement("div");t.style.cssText=g2;const i=Object.keys(Ps).map(u=>`<button data-plane="${u}" title="${Ps[u].blurb}" style="${Ro}">${Ps[u].emoji}<br>${Ps[u].name}</button>`).join("");t.innerHTML=`
    <h2 style="margin:0">Solo flight 🛩️</h2>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Your plane</div>
      <div data-planes style="display:flex;gap:6px">${i}</div>
      <div data-blurb style="font-size:12px;opacity:.7;margin-top:4px;min-height:14px"></div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Difficulty</div>
      <div data-diff style="display:flex;gap:6px">
        <button data-v="kids" style="${Ro}">Kids</button>
        <button data-v="normal" style="${Ro}">Normal</button>
        <button data-v="expert" style="${Ro}">Expert</button>
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Plane speed</div>
      <div data-speed style="display:flex;gap:6px">
        ${Object.keys(Ou).map(u=>`<button data-v="${u}" style="${Ro}">${Ou[u].name}</button>`).join("")}
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Legs per contract: <b data-legs-label>3</b></div>
      <input data-legs type="range" min="1" max="6" value="3" style="width:100%" />
    </div>
    <button data-contract style="${al}">Start contract</button>
    <button data-trial style="${al};background:#e8a53d">⏱ Timed trial (race your ghost)</button>
    <div style="display:flex;gap:8px">
      <button data-free style="${al};background:#3d6ee8;flex:1">Free fly</button>
      <button data-passport style="${al};background:#9a6dce;flex:1">📔 Passport</button>
    </div>`,yi.appendChild(t),document.body.appendChild(yi);let r="normal",s="seaplane",o="normal";const a=(u,p)=>{for(const m of t.querySelectorAll(`${u} button`))m.style.background=p(m)?"#e84d3d":"rgba(255,255,255,.12)",m.style.color="#fff"},c=()=>{a("[data-diff]",u=>u.dataset.v===r),a("[data-planes]",u=>u.dataset.plane===s),a("[data-speed]",u=>u.dataset.v===o),t.querySelector("[data-blurb]").textContent=Ps[s].blurb};c();for(const u of t.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>{r=u.dataset.v,c()});for(const u of t.querySelectorAll("[data-planes] button"))u.addEventListener("click",()=>{s=u.dataset.plane,c()});for(const u of t.querySelectorAll("[data-speed] button"))u.addEventListener("click",()=>{o=u.dataset.v,c()});const l=t.querySelector("[data-legs]"),h=t.querySelector("[data-legs-label]");l.addEventListener("input",()=>{h.textContent=l.value});const f=u=>({mode:u,difficulty:r,legCount:Number(l.value),plane:s,speed:o});t.querySelector("[data-contract]").addEventListener("click",()=>n(f("contract"))),t.querySelector("[data-trial]").addEventListener("click",()=>n(f("trial"))),t.querySelector("[data-free]").addEventListener("click",()=>n(f("free"))),t.querySelector("[data-passport]").addEventListener("click",e)}function x2(){yi==null||yi.remove(),yi=null}const Sl=n=>{const e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(1).padStart(4,"0")}`},v2={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function y2(n){let e=null,t=0,i=0,r=0,s=0,o=[],a=0;const c=()=>(e==null?void 0:e.legs[t])??null,l=()=>{var f;const h=c();!h||!e||(i=0,s=0,n.hints.setTarget(h.countryId),n.hints.setFlags(Uu(0,e.difficulty)),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,bc(((f=n.countries[h.countryId])==null?void 0:f.cca2)??"")))};return{currentLeg:c,startContract(h){e=D1(n.countries,n.landmarks,n.riddles,{seed:h.seed??Date.now()>>>0,legCount:h.legCount,difficulty:h.difficulty}),t=0,r=0,o=[],a=0,l()},stop(){e=null,n.hints.clear(),n.beacon.hide(),n.banner.hide()},isActive(){return e!==null},update(h,f){var v;const u=c();if(!e||!u)return;if(a>0){a-=f,a<=0&&l();return}i+=f,r+=f,n.banner.setClock(`⏱ ${Sl(r)}`);const p=Uu(i,e.difficulty);n.hints.setFlags(p),n.banner.setCompass(p.compass?(mg(h.lat,h.lon,u.zone.lat,u.zone.lon)-h.headingDeg+360)%360:null);const m=gg(h,u,s,f);if(s=m.dwellS,n.banner.setDwell(u.type==="refuel"&&m.inZone?s/zh:null),u.type==="refuel"&&m.inZone?n.banner.setWarning("⛽ Refueling — hold steady!"):n.banner.setWarning(m.requirementBlocked?v2[u.type]??null:null),m.complete){o.push(i);const _=((v=n.countries[u.countryId])==null?void 0:v.name)??u.countryId;if(n.hints.clear(),n.beacon.hide(),t+1<e.legs.length)n.banner.toast(`✅ ${_}! Leg ${t+1} of ${e.legs.length} done`),t+=1,a=1.2;else{n.banner.hide();const x={contract:e,legTimesS:o,totalS:r};e=null,n.onContractComplete(x)}}}}}const v0=13606703,S2=16765471;function M2(n){let e=null,t={continent:!1,outline:!1};const i=new Set,r=()=>{var s;for(const o of i)(s=n.countryMaterials.get(o))==null||s.emissive.setHex(0);i.clear()};return{setTarget(s){r(),e=s},setFlags(s){!s.continent&&t.continent&&r(),t=s},update(s){if(!e)return;const o=n.continentOf.get(e);if(t.continent&&o){const c=.12+.08*Math.sin(s*2.5);for(const[l,h]of n.countryMaterials)n.continentOf.get(l)===o&&l!==e&&(h.emissive.setHex(v0),h.emissiveIntensity=c,i.add(l))}const a=n.countryMaterials.get(e);a&&(t.outline?(a.emissive.setHex(S2),a.emissiveIntensity=.4+.3*Math.sin(s*5),i.add(e)):t.continent&&(a.emissive.setHex(v0),a.emissiveIntensity=.12+.08*Math.sin(s*2.5),i.add(e)))},clear(){r(),e=null,t={continent:!1,compass:!1,outline:!1}}}}const E2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",b2="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:380px;display:flex;flex-direction:column;gap:12px",y0="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let Si=null;function w2(n,e,t,i,r){Si==null||Si.remove(),Si=document.createElement("div"),Si.style.cssText=E2;const s=n.contract.legs.map((c,l)=>{const h=e[c.countryId],f=t.includes(c.countryId)?" 🆕":"";return`<tr>
        <td style="padding:3px 10px 3px 0;opacity:.7">${l+1}.</td>
        <td style="padding:3px 10px 3px 0">${bc((h==null?void 0:h.cca2)??"")} ${(h==null?void 0:h.name)??c.countryId}${f}</td>
        <td style="padding:3px 0;text-align:right;font-variant-numeric:tabular-nums">${Sl(n.legTimesS[l]??0)}</td>
      </tr>`}).join(""),o=i!==null?n.totalS<=i?'<div style="color:#2fbf71;font-weight:700">🎉 New best time!</div>':`<div style="opacity:.8">Best: ${Sl(i)}</div>`:"",a=document.createElement("div");a.style.cssText=b2,a.innerHTML=`
    <h2 style="margin:0">🏆 Contract complete!</h2>
    <table style="border-collapse:collapse;font-size:15px">${s}</table>
    <div style="font-size:20px;font-weight:800">Total ${Sl(n.totalS)}</div>
    ${o}
    ${t.length>0?`<div style="opacity:.85">📔 ${t.length} new passport stamp${t.length>1?"s":""}!</div>`:""}
    <button data-again style="${y0}">New contract</button>
    <button data-menu style="${y0};background:#3d6ee8">Menu</button>`,Si.appendChild(a),document.body.appendChild(Si),a.querySelector("[data-again]").addEventListener("click",()=>{S0(),r.onNewContract()}),a.querySelector("[data-menu]").addEventListener("click",()=>{S0(),r.onMenu()})}function S0(){Si==null||Si.remove(),Si=null}const rx="cargoSkies.passport.v1";function sx(){try{return JSON.parse(localStorage.getItem(rx)??"{}")}catch{return{}}}function T2(n){const e=sx(),t=[];for(const i of n)e[i]||t.push(i),e[i]=(e[i]??0)+1;return localStorage.setItem(rx,JSON.stringify(e)),t}const A2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:11";let oi=null;function R2(n,e){oi==null||oi.remove();const t=sx(),i=Object.entries(t).map(([o,a])=>({meta:n[o],count:a})).filter(o=>o.meta!==void 0).sort((o,a)=>o.meta.name.localeCompare(a.meta.name)),r=Object.values(n).filter(o=>o.playable).length;oi=document.createElement("div"),oi.style.cssText=A2;const s=i.map(o=>`<div style="display:flex;gap:8px;align-items:center;padding:4px 8px;background:rgba(255,255,255,.06);border-radius:8px">
          <span style="font-size:22px">${bc(o.meta.cca2)}</span>
          <span style="flex:1">${o.meta.name}</span>
          <span style="opacity:.6">×${o.count}</span>
        </div>`).join("");oi.innerHTML=`
    <div style="background:#141b3d;padding:28px 32px;border-radius:16px;width:420px;max-height:75vh;display:flex;flex-direction:column;gap:12px">
      <h2 style="margin:0">📔 Passport — ${i.length} / ${r} countries</h2>
      <div style="overflow-y:auto;display:flex;flex-direction:column;gap:6px">${s||"<div style='opacity:.7'>No stamps yet — complete a contract leg to earn your first!</div>"}</div>
      <button data-close style="padding:10px 16px;border:none;border-radius:10px;background:#3d6ee8;color:#fff;font:600 16px system-ui;cursor:pointer">Close</button>
    </div>`,document.body.appendChild(oi),oi.querySelector("[data-close]").addEventListener("click",()=>{oi==null||oi.remove(),oi=null})}const vh=.1,ox=(n,e,t)=>`cargoSkies.trial.v2.${n}.${e}.${t}`,C2=(n,e)=>n.charCodeAt(0)*7919+e*104729>>>0;function M0(n,e,t){try{const i=localStorage.getItem(ox(n,e,t));return i?JSON.parse(i):null}catch{return null}}function P2(n,e,t,i){localStorage.setItem(ox(n,e,t),JSON.stringify(i))}const E0=n=>new W(n.x,n.y,n.z);function I2(n){const e=fc(16777215);e.traverse(i=>{i instanceof Tt&&i.material instanceof Nr&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.35)}),e.visible=!1,n.add(e);let t=[];return{start(i){t=i,e.visible=t.length>0},stop(){t=[],e.visible=!1},update(i){if(t.length===0)return;const r=i/vh,s=Math.min(t.length-1,Math.floor(r)),o=t[Math.min(t.length-1,s+1)],a=t[s],c=Math.min(1,r-s),l=a.lat+(o.lat-a.lat)*c,h=(o.lon-a.lon+540)%360-180,f=(a.lon+h*c+540)%360-180,u=a.altKm+(o.altKm-a.altKm)*c,p=E0(ui(l,f,u)),m=Mc(l,f,a.headingDeg,5);e.position.copy(p),e.up.copy(p.clone().normalize()),e.lookAt(E0(ui(m.lat,m.lon,u)))}}}const D2=34,L2=.004;function N2(){const n=new An,e=new Gs({color:jA,gradientMap:ea(),transparent:!0,opacity:.92});for(let t=0;t<D2;t++){const i=new An,r=3+Math.floor(Math.random()*3);for(let l=0;l<r;l++){const h=1.2+Math.random()*1.6,f=new Tt(new $i(h,10,8),e);f.position.set((l-r/2)*1.6,(Math.random()-.5)*.6,(Math.random()-.5)*1.4),f.scale.y=.6,i.add(f)}const s=(Math.random()-.5)*140,o=Math.random()*360-180,a=260+Math.random()*160,c=ui(s,o,a);i.position.set(c.x,c.y,c.z),i.lookAt(0,0,0),n.add(i)}return{group:n,update(t){n.rotation.y+=L2*t}}}const O2=12,U2=30,F2=.8,B2=1.2;function z2(n,e){const t=Math.max(0,n),i=O2+e*F2,r=U2+e*B2;return t<=i?1:t>=r?0:1-(t-i)/(r-i)}const Mi=Math.PI/180,Oo=512,Ml=96,k2=5,V2=26,H2=.7,G2="#24365e",W2="rgba(255,255,255,0.85)";function $2(n){const e=document.createElement("canvas");e.width=Oo,e.height=Ml;const t=e.getContext("2d");if(!t)throw new Error("2d canvas unavailable");let i=56;const r=()=>{t.font=`bold ${i}px 'Trebuchet MS', Verdana, sans-serif`};for(r();t.measureText(n).width>Oo-24&&i>18;)i-=4,r();t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.lineJoin="round",t.strokeStyle=W2,t.strokeText(n,Oo/2,Ml/2),t.fillStyle=G2,t.fillText(n,Oo/2,Ml/2);const s=new Il(e);return s.anisotropy=4,s}function X2(n,e,t,i){const r=Math.max(1.5,t*Math.cos(n*Mi)*(Ml/Oo)),s=new $i(ZA,12,4,(90+e-t/2)*Mi,t*Mi,(90-n-r/2)*Mi,r*Mi),o=new sr({map:i,transparent:!0,opacity:0,depthWrite:!1});return new Tt(s,o)}function q2(n){const e=new An,t=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=M1(r.geometry),o=Math.min(V2,Math.max(k2,s.widthDeg*H2)),a=X2(s.lat,s.lon,o,$2(r.properties.name));a.visible=!1,e.add(a),t.push({mesh:a,widthDeg:o,direction:new W(Math.cos(s.lat*Mi)*Math.sin(s.lon*Mi),Math.sin(s.lat*Mi),Math.cos(s.lat*Mi)*Math.cos(s.lon*Mi))})}const i=new W;return{group:e,update(r){i.copy(r.position).normalize();for(const s of t){const o=Math.acos(k0.clamp(i.dot(s.direction),-1,1))/Mi,a=z2(o,s.widthDeg);s.mesh.visible=a>.02,s.mesh.material.opacity=a}}}}const Jn=1/60,Y2=.25,K2=1/20;async function Z2(){const n=document.getElementById("app");if(!n)throw new Error("#app root missing");const{world:e,countries:t,landmarks:i,riddles:r}=await oR(),s=y1(e),{scene:o,camera:a,renderer:c}=sR(n),l=iR(e);o.add(l.group);const h=q2(e);o.add(h.group);const f=N2();o.add(f.group);let u=fc();o.add(u);let p=kh,m=ug;const v=(Ie,ct=15224125)=>{o.remove(u),u=fc(ct,Ie),o.add(u),p=Ps[Ie].tuning,x=Im(u,a)},_=lR();let x=Im(u,a);const w=ER(document.body),A=bR(o),S=TR(o),R=LR(o),C=new W(0,.2,-2.2),N=.3,M=KR(document.body),T=jR(document.body),B=M2(l),U=UR({countries:t,banner:T,hints:B,beacon:S}),z=GR(o);let D=b1();const H=Ie=>{D=Ie},P=I2(o);let O=null,F=!1,G=[],Z=0,te=0;const ue=()=>{_2(_e,()=>{R2(t)})},_e=Ie=>{if(x2(),O=Ie,v(Ie.plane),m=Ou[Ie.speed].worldSpeedScale,F=Ie.mode==="trial",P.stop(),G=[],Z=0,te=0,Ie.mode==="contract")Ue.startContract({difficulty:Ie.difficulty,legCount:Ie.legCount});else if(Ie.mode==="trial"){const ct=C2(Ie.difficulty,Ie.legCount),nt=M0(Ie.difficulty,Ie.legCount,Ie.speed);nt&&P.start(nt.track),Ue.startContract({difficulty:Ie.difficulty,legCount:Ie.legCount,seed:ct})}},Ue=y2({countries:t,landmarks:i,riddles:r,banner:T,hints:B,beacon:S,onContractComplete:Ie=>{T.setClock(null);const ct=T2(Ie.contract.legs.map(He=>He.countryId));let nt=null;if(F&&O){const He=M0(O.difficulty,O.legCount,O.speed);nt=(He==null?void 0:He.timeS)??Ie.totalS,(!He||Ie.totalS<He.timeS)&&P2(O.difficulty,O.legCount,O.speed,{timeS:Ie.totalS,track:G}),P.stop()}w2(Ie,t,ct,nt,{onNewContract:()=>{O&&_e(O)},onMenu:ue})}}),ke=await new Promise(Ie=>{h2((ct,nt)=>{f2(ct,nt).then(Ie).catch(He=>{console.error("Connection failed",He);const At=String((He==null?void 0:He.message)??He),Ft=/ECONNREFUSED|failed to connect|WebSocket|network|refused/i.test(At);alert(Ft?"Can't reach the game server. Is it running? (pnpm dev:server)":nt!==null?`No race found with code ${nt.toUpperCase()}. Check the code and try again.`:"Couldn't start a race — see the console for details.")})},()=>Ie(null))}),it=ke?qR(document.body,Ie=>ke.room.send("useItem",{targetSessionId:Ie})):null;if(ke===null)x0(),ue();else{let Ie=!1,ct=!0;ke.room.onStateChange(nt=>{var At;const He=(At=nt.players)==null?void 0:At.get(ke.sessionId);if(He){if(!Ie){Ie=!0,nt.code&&history.replaceState(null,"",`?r=${nt.code}`);const Ft=He.colorIdx??0;u.traverse(Bt=>{Bt instanceof Tt&&Bt.material instanceof Gs&&Bt.material.color.getHex()===15224125&&Bt.material.color.setHex(lc[Ft%lc.length]??15224125)})}nt.phase==="lobby"&&ct?p2(nt,ke.sessionId,()=>ke.start(),Ft=>ke.setOptions(Ft)):ct&&(x0(),ct=!1),A.sync(nt,ke.sessionId),M.update(nt,ke.sessionId,()=>ke.start()),Go(He.lat,He.lon,D.lat,D.lon)>jb&&H({lat:He.lat,lon:He.lon,altKm:He.altKm,headingDeg:He.headingDeg,speedKmh:He.speedKmh})}})}let he=0,we=0,ve=0,je=0,et={throttle:0,turn:0,pitch:0};const tt=new Xv,$t=()=>{const Ie=ke?OR(ke.room.state,ke.sessionId,D):Ue.isActive()&&Ue.currentLeg()?_g(D,Ue.currentLeg()):null;Ie!==null&&(D={...D,speedKmh:Ie})};c.setAnimationLoop(()=>{var ct,nt;for(tt.update(),he+=Math.min(tt.getDelta(),.25);he>=Jn;)et=_.read(Jn),D=w1(D,et,Jn,p,m),$t(),Ue.isActive()&&(Ue.update(D,Jn),F&&(te+=Jn,Z+=Jn,Z>=vh&&(Z-=vh,G.push({lat:D.lat,lon:D.lon,altKm:D.altKm,headingDeg:D.headingDeg})))),he-=Jn,we+=Jn,ve+=Jn;if(ke&&ve>=K2&&(ve=0,ke.sendInput(et)),we>=Y2){we=0;const He=s.findCountryAt(D.lat,D.lon);w.setCountry(He?((ct=t[He])==null?void 0:ct.name)??He:null)}if(je+=Jn,x.update(D,et),h.update(a),ke){U.update(ke.room.state,ke.sessionId,D,Jn),it==null||it.update(ke.room.state,ke.sessionId);const He=(nt=ke.room.state.players)==null?void 0:nt.get(ke.sessionId);He&&Date.now()<He.tumbleUntil&&u.rotateZ(je*14)}z.update(ke?ke.room.state:null,je),B.update(je),S.update(je),f.update(Jn);const Ie=(D.speedKmh-Ws)/(Bh-Ws);R.update(Jn,u.localToWorld(C.clone()),Ie>N),P.update(te),ke&&A.update(),w.setTelemetry(D),c.render(o,a)})}Z2().catch(n=>{console.error("Failed to start Cargo Skies",n),document.body.textContent="Engine stalled — please refresh."});
