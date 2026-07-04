(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ch="185",Ex=0,vd=1,bx=2,gl=1,wx=2,Fo=3,Dr=0,Vn=1,bi=2,or=0,ks=1,yd=2,Sd=3,Md=4,Tx=5,qr=100,Ax=101,Rx=102,Cx=103,Px=104,Ix=200,Dx=201,Lx=202,Nx=203,Kf=204,Zf=205,Ox=206,Ux=207,Fx=208,Bx=209,zx=210,kx=211,Vx=212,Hx=213,Gx=214,jf=0,Jf=1,Qf=2,qs=3,eu=4,tu=5,nu=6,iu=7,k0=0,Wx=1,$x=2,Wi=0,V0=1,H0=2,G0=3,W0=4,$0=5,X0=6,q0=7,Y0=300,ns=301,Ys=302,Bc=303,zc=304,Ec=306,ru=1e3,sr=1001,su=1002,Mn=1003,Xx=1004,_a=1005,An=1006,kc=1007,Zr=1008,ni=1009,K0=1010,Z0=1011,Ko=1012,Ph=1013,Zi=1014,Vi=1015,hr=1016,Ih=1017,Dh=1018,Zo=1020,j0=35902,J0=35899,Q0=1021,eg=1022,Ai=1023,dr=1026,jr=1027,Lh=1028,Nh=1029,is=1030,Oh=1031,Uh=1033,_l=33776,xl=33777,vl=33778,yl=33779,ou=35840,au=35841,lu=35842,cu=35843,fu=36196,uu=37492,hu=37496,du=37488,pu=37489,Il=37490,mu=37491,gu=37808,_u=37809,xu=37810,vu=37811,yu=37812,Su=37813,Mu=37814,Eu=37815,bu=37816,wu=37817,Tu=37818,Au=37819,Ru=37820,Cu=37821,Pu=36492,Iu=36494,Du=36495,Lu=36283,Nu=36284,Dl=36285,Ou=36286,qx=3200,Uu=0,Yx=1,Ar="",fi="srgb",Ll="srgb-linear",Nl="linear",Ut="srgb",fs=7680,Ed=519,Kx=512,Zx=513,jx=514,Fh=515,Jx=516,Qx=517,Bh=518,ev=519,Fu=35044,bd="300 es",Hi=2e3,jo=2001;function tv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ol(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nv(){const n=Ol("canvas");return n.style.display="block",n}const wd={};function Ul(...n){const e="THREE."+n.shift();console.log(e,...n)}function tg(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=tg(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Et(...n){n=tg(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vs(...n){const e=n.join(" ");e in wd||(wd[e]=!0,st(...n))}function iv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const rv={[jf]:Jf,[Qf]:nu,[eu]:iu,[qs]:tu,[Jf]:jf,[nu]:Qf,[iu]:eu,[tu]:qs};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const Hs=Math.PI/180,Jo=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function zh(n,e){return(n%e+e)%e}function sv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ov(n,e,t){return n!==e?(t-n)/(e-n):0}function $o(n,e,t){return(1-t)*n+t*e}function av(n,e,t,i){return $o(n,e,1-Math.exp(-t*i))}function lv(n,e=1){return e-Math.abs(zh(n,e*2)-e)}function cv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function uv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hv(n,e){return n+Math.random()*(e-n)}function dv(n){return n*(.5-Math.random())}function pv(n){n!==void 0&&(Td=n);let e=Td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mv(n){return n*Hs}function gv(n){return n*Jo}function _v(n){return(n&n-1)===0&&n!==0}function xv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yv(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*h,a*l);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ng={DEG2RAD:Hs,RAD2DEG:Jo,generateUUID:ar,clamp:dt,euclideanModulo:zh,mapLinear:sv,inverseLerp:ov,lerp:$o,damp:av,pingpong:lv,smoothstep:cv,smootherstep:fv,randInt:uv,randFloat:hv,randFloatSpread:dv,seededRandom:pv,degToRad:mv,radToDeg:gv,isPowerOfTwo:_v,ceilPowerOfTwo:xv,floorPowerOfTwo:vv,setQuaternionFromProperEuler:yv,normalize:Ft,denormalize:wi},pd=class pd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pd.prototype.isVector2=!0;let ht=pd;class so{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(f!==v||c!==u||l!==p||h!==m){let _=c*u+l*p+h*m+f*v;_<0&&(u=-u,p=-p,m=-m,v=-v,_=-_);let x=1-a;if(_<.9995){const T=Math.acos(_),R=Math.sin(T);x=Math.sin(x*T)/R,a=Math.sin(a*T)/R,c=c*x+u*a,l=l*x+p*a,h=h*x+m*a,f=f*x+v*a}else{c=c*x+u*a,l=l*x+p*a,h=h*x+m*a,f=f*x+v*a;const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],u=s[o+1],p=s[o+2],m=s[o+3];return e[t]=a*m+h*f+c*p-l*u,e[t+1]=c*m+h*u+l*f-a*p,e[t+2]=l*m+h*p+a*u-c*f,e[t+3]=h*m-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),u=c(i/2),p=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f-u*p*m;break;case"YXZ":this._x=u*h*f+l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f+u*p*m;break;case"ZXY":this._x=u*h*f-l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f-u*p*m;break;case"ZYX":this._x=u*h*f-l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f+u*p*m;break;case"YZX":this._x=u*h*f+l*p*m,this._y=l*p*f+u*h*m,this._z=l*h*m-u*p*f,this._w=l*h*f-u*p*m;break;case"XZY":this._x=u*h*f-l*p*m,this._y=l*p*f-u*h*m,this._z=l*h*m+u*p*f,this._w=l*h*f+u*p*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const md=class md{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};md.prototype.isVector3=!0;let $=md;const Vc=new $,Ad=new so,gd=class gd{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],m=i[8],v=r[0],_=r[3],x=r[6],T=r[1],R=r[4],S=r[7],I=r[2],A=r[5],F=r[8];return s[0]=o*v+a*T+c*I,s[3]=o*_+a*R+c*A,s[6]=o*x+a*S+c*F,s[1]=l*v+h*T+f*I,s[4]=l*_+h*R+f*A,s[7]=l*x+h*S+f*F,s[2]=u*v+p*T+m*I,s[5]=u*_+p*R+m*A,s[8]=u*x+p*S+m*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,p=l*s-o*c,m=t*f+i*u+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=u*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gd.prototype.isMatrix3=!0;let ft=gd;const Hc=new ft,Rd=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sv(){const n={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ut&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ar?Nl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ll]:{primaries:e,whitePoint:i,transfer:Nl,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const vt=Sv();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class Mv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Ol("canvas")),us.width=e.width,us.height=e.height;const r=us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ol("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ev=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gc(r[o].image)):s.push(Gc(r[o]))}else s=Gc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Gc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let bv=0;const Wc=new $;class Rn extends as{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=sr,r=sr,s=An,o=Zr,a=Ai,c=ni,l=Rn.DEFAULT_ANISOTROPY,h=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=ar(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ru:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case su:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ru:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case su:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Y0;Rn.DEFAULT_ANISOTROPY=1;const _d=class _d{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],m=c[9],v=c[2],_=c[6],x=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,S=(p+1)/2,I=(x+1)/2,A=(h+u)/4,F=(f+v)/4,M=(m+_)/4;return R>S&&R>I?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=A/i,s=F/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=M/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=F/s,r=M/s),this.set(i,r,s,t),this}let T=Math.sqrt((_-m)*(_-m)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(_-m)/T,this.y=(f-v)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_d.prototype.isVector4=!0;let zt=_d;class wv extends as{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Rn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new kh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends wv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ig extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tv extends Rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=class Mc{constructor(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_)}set(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=f,x[14]=u,x[3]=p,x[7]=m,x[11]=v,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,m=a*h,v=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+m*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,m=l*h,v=l*f;t[0]=u+v*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,m=l*h,v=l*f;t[0]=u-v*a,t[4]=-o*f,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,m=a*h,v=a*f;t[0]=c*h,t[4]=m*l-p,t[8]=u*l+v,t[1]=c*f,t[5]=v*l+u,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-u*f,t[8]=m*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+m,t[10]=u-v*f}else if(e.order==="XZY"){const u=o*c,p=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+v,t[5]=o*h,t[9]=p*f-m,t[2]=m*f-p,t[6]=a*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Av,e,Rv)}lookAt(e,t,i){const r=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),vr.crossVectors(i,Zn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),vr.crossVectors(i,Zn)),vr.normalize(),xa.crossVectors(Zn,vr),r[0]=vr.x,r[4]=xa.x,r[8]=Zn.x,r[1]=vr.y,r[5]=xa.y,r[9]=Zn.y,r[2]=vr.z,r[6]=xa.z,r[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],m=i[2],v=i[6],_=i[10],x=i[14],T=i[3],R=i[7],S=i[11],I=i[15],A=r[0],F=r[4],M=r[8],E=r[12],L=r[1],U=r[5],z=r[9],C=r[13],k=r[2],P=r[6],B=r[10],N=r[14],G=r[3],W=r[7],J=r[11],ae=r[15];return s[0]=o*A+a*L+c*k+l*G,s[4]=o*F+a*U+c*P+l*W,s[8]=o*M+a*z+c*B+l*J,s[12]=o*E+a*C+c*N+l*ae,s[1]=h*A+f*L+u*k+p*G,s[5]=h*F+f*U+u*P+p*W,s[9]=h*M+f*z+u*B+p*J,s[13]=h*E+f*C+u*N+p*ae,s[2]=m*A+v*L+_*k+x*G,s[6]=m*F+v*U+_*P+x*W,s[10]=m*M+v*z+_*B+x*J,s[14]=m*E+v*C+_*N+x*ae,s[3]=T*A+R*L+S*k+I*G,s[7]=T*F+R*U+S*P+I*W,s[11]=T*M+R*z+S*B+I*J,s[15]=T*E+R*C+S*N+I*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],m=e[3],v=e[7],_=e[11],x=e[15],T=c*p-l*u,R=a*p-l*f,S=a*u-c*f,I=o*p-l*h,A=o*u-c*h,F=o*f-a*h;return t*(v*T-_*R+x*S)-i*(m*T-_*I+x*A)+r*(m*R-v*I+x*F)-s*(m*S-v*A+_*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],m=e[12],v=e[13],_=e[14],x=e[15],T=t*a-i*o,R=t*c-r*o,S=t*l-s*o,I=i*c-r*a,A=i*l-s*a,F=r*l-s*c,M=h*v-f*m,E=h*_-u*m,L=h*x-p*m,U=f*_-u*v,z=f*x-p*v,C=u*x-p*_,k=T*C-R*z+S*U+I*L-A*E+F*M;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/k;return e[0]=(a*C-c*z+l*U)*P,e[1]=(r*z-i*C-s*U)*P,e[2]=(v*F-_*A+x*I)*P,e[3]=(u*A-f*F-p*I)*P,e[4]=(c*L-o*C-l*E)*P,e[5]=(t*C-r*L+s*E)*P,e[6]=(_*S-m*F-x*R)*P,e[7]=(h*F-u*S+p*R)*P,e[8]=(o*z-a*L+l*M)*P,e[9]=(i*L-t*z-s*M)*P,e[10]=(m*A-v*S+x*T)*P,e[11]=(f*S-h*A-p*T)*P,e[12]=(a*E-o*U-c*M)*P,e[13]=(t*U-i*E+r*M)*P,e[14]=(v*R-m*I-_*T)*P,e[15]=(h*I-f*R+u*T)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,p=s*h,m=s*f,v=o*h,_=o*f,x=a*f,T=c*l,R=c*h,S=c*f,I=i.x,A=i.y,F=i.z;return r[0]=(1-(v+x))*I,r[1]=(p+S)*I,r[2]=(m-R)*I,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(u+x))*A,r[6]=(_+T)*A,r[7]=0,r[8]=(m+R)*F,r[9]=(_-T)*F,r[10]=(1-(u+v))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=hs.set(r[0],r[1],r[2]).length();const a=hs.set(r[4],r[5],r[6]).length(),c=hs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),xi.copy(this);const l=1/o,h=1/a,f=1/c;return xi.elements[0]*=l,xi.elements[1]*=l,xi.elements[2]*=l,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=f,xi.elements[9]*=f,xi.elements[10]*=f,t.setFromRotationMatrix(xi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Hi,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===Hi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===jo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hi,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===Hi)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===jo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Mc.prototype.isMatrix4=!0;let $t=Mc;const hs=new $,xi=new $t,Av=new $(0,0,0),Rv=new $(1,1,1),vr=new $,xa=new $,Zn=new $,Pd=new $t,Id=new so;class rs{constructor(e=0,t=0,i=0,r=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cv=0;const Dd=new $,ds=new so,Qi=new $t,va=new $,xo=new $,Pv=new $,Iv=new so,Ld=new $(1,0,0),Nd=new $(0,1,0),Od=new $(0,0,1),Ud={type:"added"},Dv={type:"removed"},ps={type:"childadded",child:null},$c={type:"childremoved",child:null};class cn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new $,t=new rs,i=new so,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new ft}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Od,e)}translateOnAxis(e,t){return Dd.copy(e).applyQuaternion(this.quaternion),this.position.add(Dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Od,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?va.copy(e):va.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(xo,va,this.up):Qi.lookAt(va,xo,this.up),this.quaternion.setFromRotationMatrix(Qi),r&&(Qi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Qi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),ps.child=e,this.dispatchEvent(ps),ps.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dv),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,Pv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}cn.DEFAULT_UP=new $(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lv={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,i),x=this._getHandJoint(l,v);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const sg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},ya={h:0,s:0,l:0};function qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let _t=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=zh(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qc(o,s,e+1/3),this.g=qc(o,s,e),this.b=qc(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=fi){function i(s){s!==void 0&&parseFloat(s)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const i=sg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return vt.workingToColorSpace(bn.copy(this),e),Math.round(dt(bn.r*255,0,255))*65536+Math.round(dt(bn.g*255,0,255))*256+Math.round(dt(bn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=fi){vt.workingToColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(ya);const i=$o(yr.h,ya.h,t),r=$o(yr.s,ya.s,t),s=$o(yr.l,ya.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const bn=new _t;_t.NAMES=sg;class Nv extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vi=new $,er=new $,Yc=new $,tr=new $,ms=new $,gs=new $,Fd=new $,Kc=new $,Zc=new $,jc=new $,Jc=new zt,Qc=new zt,ef=new zt;class ii{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vi.subVectors(e,t),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vi.subVectors(r,t),er.subVectors(i,t),Yc.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(er),c=vi.dot(Yc),l=er.dot(er),h=er.dot(Yc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,m=(o*h-a*c)*u;return s.set(1-p-m,m,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tr.x),c.addScaledVector(o,tr.y),c.addScaledVector(a,tr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Jc.setScalar(0),Qc.setScalar(0),ef.setScalar(0),Jc.fromBufferAttribute(e,t),Qc.fromBufferAttribute(e,i),ef.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jc,s.x),o.addScaledVector(Qc,s.y),o.addScaledVector(ef,s.z),o}static isFrontFacing(e,t,i,r){return vi.subVectors(i,t),er.subVectors(e,t),vi.cross(er).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),vi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),Kc.subVectors(e,i);const c=ms.dot(Kc),l=gs.dot(Kc);if(c<=0&&l<=0)return t.copy(i);Zc.subVectors(e,r);const h=ms.dot(Zc),f=gs.dot(Zc);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ms,o);jc.subVectors(e,s);const p=ms.dot(jc),m=gs.dot(jc);if(m>=0&&p<=m)return t.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(gs,a);const _=h*m-p*f;if(_<=0&&f-h>=0&&p-m>=0)return Fd.subVectors(s,r),a=(f-h)/(f-h+(p-m)),t.copy(r).addScaledVector(Fd,a);const x=1/(_+v+u);return o=v*x,a=u*x,t.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Nr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yi):yi.fromBufferAttribute(s,o),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Ma.subVectors(this.max,vo),_s.subVectors(e.a,vo),xs.subVectors(e.b,vo),vs.subVectors(e.c,vo),Sr.subVectors(xs,_s),Mr.subVectors(vs,xs),Fr.subVectors(_s,vs);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Fr.z,Fr.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Fr.z,0,-Fr.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Fr.y,Fr.x,0];return!tf(t,_s,xs,vs,Ma)||(t=[1,0,0,0,1,0,0,0,1],!tf(t,_s,xs,vs,Ma))?!1:(Ea.crossVectors(Sr,Mr),t=[Ea.x,Ea.y,Ea.z],tf(t,_s,xs,vs,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new $,new $,new $,new $,new $,new $,new $,new $],yi=new $,Sa=new Nr,_s=new $,xs=new $,vs=new $,Sr=new $,Mr=new $,Fr=new $,vo=new $,Ma=new $,Ea=new $,Br=new $;function tf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Br.fromArray(n,s);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),c=e.dot(Br),l=t.dot(Br),h=i.dot(Br);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const an=new $,ba=new ht;let Ov=0;class Pi extends as{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ov++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fu,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class og extends Pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ag extends Pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends Pi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Uv=new Nr,yo=new $,nf=new $;class oo{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(nf)),this.expandByPoint(yo.copy(e.center).sub(nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fv=0;const oi=new $t,rf=new cn,ys=new $,jn=new Nr,So=new Nr,dn=new $;class hn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?ag:og)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(jn.min,So.min),jn.expandByPoint(dn),dn.addVectors(jn.max,So.max),jn.expandByPoint(dn)):(jn.expandByPoint(So.min),jn.expandByPoint(So.max))}jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)dn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)dn.fromBufferAttribute(a,l),c&&(ys.fromBufferAttribute(e,l),dn.add(ys)),r=Math.max(r,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let M=0;M<i.count;M++)a[M]=new $,c[M]=new $;const l=new $,h=new $,f=new $,u=new ht,p=new ht,m=new ht,v=new $,_=new $;function x(M,E,L){l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,L),u.fromBufferAttribute(s,M),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,L),h.sub(l),f.sub(l),p.sub(u),m.sub(u);const U=1/(p.x*m.y-m.x*p.y);isFinite(U)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(U),a[M].add(v),a[E].add(v),a[L].add(v),c[M].add(_),c[E].add(_),c[L].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let M=0,E=T.length;M<E;++M){const L=T[M],U=L.start,z=L.count;for(let C=U,k=U+z;C<k;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const R=new $,S=new $,I=new $,A=new $;function F(M){I.fromBufferAttribute(r,M),A.copy(I);const E=a[M];R.copy(E),R.sub(I.multiplyScalar(I.dot(E))).normalize(),S.crossVectors(A,E);const U=S.dot(c[M])<0?-1:1;o.setXYZW(M,R.x,R.y,R.z,U)}for(let M=0,E=T.length;M<E;++M){const L=T[M],U=L.start,z=L.count;for(let C=U,k=U+z;C<k;C+=3)F(e.getX(C+0)),F(e.getX(C+1)),F(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new $,s=new $,o=new $,a=new $,c=new $,l=new $,h=new $,f=new $;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),a.add(h),c.add(h),l.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,m=0;for(let v=0,_=c.length;v<_;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let x=0;x<h;x++)u[m++]=l[p++]}return new Pi(u,h,f)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new $;class Gi{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ul("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ul("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Bv=0;class Or extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=ks,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Zf&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fs extends Or{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const Mo=new $,Ms=new $,Es=new $,bs=new ht,Eo=new ht,cg=new $t,wa=new $,bo=new $,Ta=new $,Bd=new ht,sf=new ht,zd=new ht;class Bo extends cn{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new hn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lg(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Gi(i,3,0,!1)),Ss.setAttribute("uv",new Gi(i,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new ht(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),cg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Es.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Aa(wa.set(-.5,-.5,0),Es,o,Ms,r,s),Aa(bo.set(.5,-.5,0),Es,o,Ms,r,s),Aa(Ta.set(.5,.5,0),Es,o,Ms,r,s),Bd.set(0,0),sf.set(1,0),zd.set(1,1);let a=e.ray.intersectTriangle(wa,bo,Ta,!1,Mo);if(a===null&&(Aa(bo.set(-.5,.5,0),Es,o,Ms,r,s),sf.set(0,1),a=e.ray.intersectTriangle(wa,Ta,bo,!1,Mo),a===null))return;const c=e.ray.origin.distanceTo(Mo);c<e.near||c>e.far||t.push({distance:c,point:Mo.clone(),uv:ii.getInterpolation(Mo,wa,bo,Ta,Bd,sf,zd,new ht),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Aa(n,e,t,i,r,s){bs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Eo.x=s*bs.x-r*bs.y,Eo.y=r*bs.x+s*bs.y):Eo.copy(bs),n.copy(e),n.x+=Eo.x,n.y+=Eo.y,n.applyMatrix4(cg)}const ir=new $,of=new $,Ra=new $,Er=new $,af=new $,Ca=new $,lf=new $;class fg{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){of.copy(e).add(t).multiplyScalar(.5),Ra.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(of);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ra),a=Er.dot(this.direction),c=-Er.dot(Ra),l=Er.lengthSq(),h=Math.abs(1-o*o);let f,u,p,m;if(h>0)if(f=o*c-a,u=o*a-c,m=s*h,f>=0)if(u>=-m)if(u<=m){const v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(of).addScaledVector(Ra,u),p}intersectSphere(e,t){ir.subVectors(e.center,this.origin);const i=ir.dot(this.direction),r=ir.dot(ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,i,r,s){af.subVectors(t,e),Ca.subVectors(i,e),lf.crossVectors(af,Ca);let o=this.direction.dot(lf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,e);const c=a*this.direction.dot(Ca.crossVectors(Er,Ca));if(c<0)return null;const l=a*this.direction.dot(af.cross(Er));if(l<0||c+l>o)return null;const h=-a*Er.dot(lf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ui extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kd=new $t,zr=new fg,Pa=new oo,Vd=new $,Ia=new $,Da=new $,La=new $,cf=new $,Na=new $,Hd=new $,Oa=new $;class St extends cn{constructor(e=new hn,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Na.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(cf.fromBufferAttribute(f,e),o?Na.addScaledVector(cf,h):Na.addScaledVector(cf.sub(t),h))}t.add(Na)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Pa.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Pa,Vd)===null||zr.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(kd.copy(s).invert(),zr.copy(e.ray).applyMatrix4(kd),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const _=u[m],x=o[_.materialIndex],T=Math.max(_.start,p.start),R=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=T,I=R;S<I;S+=3){const A=a.getX(S),F=a.getX(S+1),M=a.getX(S+2);r=Ua(this,x,e,i,l,h,f,A,F,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=m,x=v;_<x;_+=3){const T=a.getX(_),R=a.getX(_+1),S=a.getX(_+2);r=Ua(this,o,e,i,l,h,f,T,R,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){const _=u[m],x=o[_.materialIndex],T=Math.max(_.start,p.start),R=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let S=T,I=R;S<I;S+=3){const A=S,F=S+1,M=S+2;r=Ua(this,x,e,i,l,h,f,A,F,M),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let _=m,x=v;_<x;_+=3){const T=_,R=_+1,S=_+2;r=Ua(this,o,e,i,l,h,f,T,R,S),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function zv(n,e,t,i,r,s,o,a){let c;if(e.side===Vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Dr,a),c===null)return null;Oa.copy(a),Oa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:n}}function Ua(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ia),n.getVertexPosition(c,Da),n.getVertexPosition(l,La);const h=zv(n,e,t,i,Ia,Da,La,Hd);if(h){const f=new $;ii.getBarycoord(Hd,Ia,Da,La,f),r&&(h.uv=ii.getInterpolatedAttribute(r,a,c,l,f,new ht)),s&&(h.uv1=ii.getInterpolatedAttribute(s,a,c,l,f,new ht)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,c,l,f,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new $,materialIndex:0};ii.getNormal(Ia,Da,La,u.normal),h.face=u,h.barycoord=f}return h}class ug extends Rn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Mn,h=Mn,f,u){super(null,o,a,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ff=new $,kv=new $,Vv=new ft;class $r{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ff.subVectors(i,t).cross(kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ff),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vv.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new oo,Hv=new ht(.5,.5),Fa=new $;class Vh{constructor(e=new $r,t=new $r,i=new $r,r=new $r,s=new $r,o=new $r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],m=s[8],v=s[9],_=s[10],x=s[11],T=s[12],R=s[13],S=s[14],I=s[15];if(r[0].setComponents(l-o,p-h,x-m,I-T).normalize(),r[1].setComponents(l+o,p+h,x+m,I+T).normalize(),r[2].setComponents(l+a,p+f,x+v,I+R).normalize(),r[3].setComponents(l-a,p-f,x-v,I-R).normalize(),i)r[4].setComponents(c,u,_,S).normalize(),r[5].setComponents(l-c,p-u,x-_,I-S).normalize();else if(r[4].setComponents(l-c,p-u,x-_,I-S).normalize(),t===Hi)r[5].setComponents(l+c,p+u,x+_,I+S).normalize();else if(t===jo)r[5].setComponents(c,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const t=Hv.distanceTo(e.center);return kr.radius=.7071067811865476+t,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hg extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fl=new $,Bl=new $,Gd=new $t,wo=new fg,Ba=new oo,uf=new $,Wd=new $;class Gv extends cn{constructor(e=new hn,t=new hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fl.fromBufferAttribute(t,r-1),Bl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fl.distanceTo(Bl);e.setAttribute("lineDistance",new kt(i,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;Gd.copy(r).invert(),wo.copy(e.ray).applyMatrix4(Gd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=l){const x=h.getX(v),T=h.getX(v+1),R=za(this,e,wo,c,x,T,v);R&&t.push(R)}if(this.isLineLoop){const v=h.getX(m-1),_=h.getX(p),x=za(this,e,wo,c,v,_,m-1);x&&t.push(x)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=p,_=m-1;v<_;v+=l){const x=za(this,e,wo,c,v,v+1,v);x&&t.push(x)}if(this.isLineLoop){const v=za(this,e,wo,c,m-1,p,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function za(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Fl.fromBufferAttribute(a,r),Bl.fromBufferAttribute(a,s),t.distanceSqToSegment(Fl,Bl,uf,Wd)>i)return;uf.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(uf);if(!(l<e.near||l>e.far))return{distance:l,point:Wd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const $d=new $,Xd=new $;class Wv extends Gv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)$d.fromBufferAttribute(t,r),Xd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$d.distanceTo(Xd);e.setAttribute("lineDistance",new kt(i,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dg extends Rn{constructor(e=[],t=ns,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xo extends Rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends Rn{constructor(e,t,i=Zi,r,s,o,a=Mn,c=Mn,l,h=dr,f=1){if(h!==dr&&h!==jr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $v extends Ks{constructor(e,t=Zi,i=ns,r,s,o=Mn,a=Mn,c,l=dr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pg extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ri extends hn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,p=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(f,2));function m(v,_,x,T,R,S,I,A,F,M,E){const L=S/F,U=I/M,z=S/2,C=I/2,k=A/2,P=F+1,B=M+1;let N=0,G=0;const W=new $;for(let J=0;J<B;J++){const ae=J*U-C;for(let me=0;me<P;me++){const Le=me*L-z;W[v]=Le*T,W[_]=ae*R,W[x]=k,l.push(W.x,W.y,W.z),W[v]=0,W[_]=0,W[x]=A>0?1:-1,h.push(W.x,W.y,W.z),f.push(me/F),f.push(1-J/M),N+=1}}for(let J=0;J<M;J++)for(let ae=0;ae<F;ae++){const me=u+ae+P*J,Le=u+ae+P*(J+1),Ne=u+(ae+1)+P*(J+1),tt=u+(ae+1)+P*J;c.push(me,Le,tt),c.push(Le,Ne,tt),G+=6}a.addGroup(p,G,E),p+=G,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zl extends hn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,m=i*2+s,v=r+1,_=new $,x=new $;for(let T=0;T<=m;T++){let R=0,S=0,I=0,A=0;if(T<=i){const E=T/i,L=E*Math.PI/2;S=-h-e*Math.cos(L),I=e*Math.sin(L),A=-e*Math.cos(L),R=E*f}else if(T<=i+s){const E=(T-i)/s;S=-h+E*t,I=e,A=0,R=f+E*u}else{const E=(T-i-s)/i,L=E*Math.PI/2;S=h+e*Math.sin(L),I=e*Math.cos(L),A=e*Math.sin(L),R=f+u+E*f}const F=Math.max(0,Math.min(1,R/p));let M=0;T===0?M=.5/r:T===m&&(M=-.5/r);for(let E=0;E<=r;E++){const L=E/r,U=L*Math.PI*2,z=Math.sin(U),C=Math.cos(U);x.x=-I*C,x.y=S,x.z=I*z,a.push(x.x,x.y,x.z),_.set(-I*C,A,I*z),_.normalize(),c.push(_.x,_.y,_.z),l.push(L+M,F)}if(T>0){const E=(T-1)*v;for(let L=0;L<r;L++){const U=E+L,z=E+L+1,C=T*v+L,k=T*v+L+1;o.push(U,z,C),o.push(z,k,C)}}}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hh extends hn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new $,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bc extends hn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let m=0;const v=[],_=i/2;let x=0;T(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new kt(f,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(p,2));function T(){const S=new $,I=new $;let A=0;const F=(t-e)/i;for(let M=0;M<=s;M++){const E=[],L=M/s,U=L*(t-e)+e;for(let z=0;z<=r;z++){const C=z/r,k=C*c+a,P=Math.sin(k),B=Math.cos(k);I.x=U*P,I.y=-L*i+_,I.z=U*B,f.push(I.x,I.y,I.z),S.set(P,F,B).normalize(),u.push(S.x,S.y,S.z),p.push(C,1-L),E.push(m++)}v.push(E)}for(let M=0;M<r;M++)for(let E=0;E<s;E++){const L=v[E][M],U=v[E+1][M],z=v[E+1][M+1],C=v[E][M+1];(e>0||E!==0)&&(h.push(L,U,C),A+=3),(t>0||E!==s-1)&&(h.push(U,z,C),A+=3)}l.addGroup(x,A,0),x+=A}function R(S){const I=m,A=new ht,F=new $;let M=0;const E=S===!0?e:t,L=S===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,_*L,0),u.push(0,L,0),p.push(.5,.5),m++;const U=m;for(let z=0;z<=r;z++){const k=z/r*c+a,P=Math.cos(k),B=Math.sin(k);F.x=E*B,F.y=_*L,F.z=E*P,f.push(F.x,F.y,F.z),u.push(0,L,0),A.x=P*.5+.5,A.y=B*.5*L+.5,p.push(A.x,A.y),m++}for(let z=0;z<r;z++){const C=I+z,k=U+z;S===!0?h.push(k,k+1,C):h.push(k+1,k,C),M+=3}l.addGroup(x,M,S===!0?1:2),x+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ws extends bc{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ws(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ka=new $,Va=new $,hf=new $,Ha=new ii;class Xv extends hn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Hs*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),u={},p=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:v,b:_,c:x}=Ha;if(v.fromBufferAttribute(a,l[0]),_.fromBufferAttribute(a,l[1]),x.fromBufferAttribute(a,l[2]),Ha.getNormal(hf),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const R=(T+1)%3,S=f[T],I=f[R],A=Ha[h[T]],F=Ha[h[R]],M=`${S}_${I}`,E=`${I}_${S}`;E in u&&u[E]?(hf.dot(u[E].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(F.x,F.y,F.z)),u[E]=null):M in u||(u[M]={index0:l[T],index1:l[R],normal:hf.clone()})}}for(const m in u)if(u[m]){const{index0:v,index1:_}=u[m];ka.fromBufferAttribute(a,v),Va.fromBufferAttribute(a,_),p.push(ka.x,ka.y,ka.z),p.push(Va.x,Va.y,Va.z)}this.setAttribute("position",new kt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wc extends hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=e/a,u=t/c,p=[],m=[],v=[],_=[];for(let x=0;x<h;x++){const T=x*u-o;for(let R=0;R<l;R++){const S=R*f-s;m.push(S,-T,0),v.push(0,0,1),_.push(R/a),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let T=0;T<a;T++){const R=T+l*x,S=T+l*(x+1),I=T+1+l*(x+1),A=T+1+l*x;p.push(R,S,A),p.push(S,I,A)}this.setIndex(p),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xi extends hn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new $,u=new $,p=[],m=[],v=[],_=[];for(let x=0;x<=i;x++){const T=[],R=x/i,S=o+R*a,I=e*Math.cos(S),A=Math.sqrt(e*e-I*I);let F=0;x===0&&o===0?F=.5/t:x===i&&c===Math.PI&&(F=-.5/t);for(let M=0;M<=t;M++){const E=M/t,L=r+E*s;f.x=-A*Math.cos(L),f.y=I,f.z=A*Math.sin(L),m.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),_.push(E+F,1-R),T.push(l++)}h.push(T)}for(let x=0;x<i;x++)for(let T=0;T<t;T++){const R=h[x][T+1],S=h[x][T],I=h[x+1][T],A=h[x+1][T+1];(x!==0||o>0)&&p.push(R,S,A),(x!==i-1||c<Math.PI)&&p.push(S,I,A)}this.setIndex(p),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qv extends hn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new $,s=new $;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,p=f.count;for(let m=u,v=u+p;m<v;m+=3)for(let _=0;_<3;_++){const x=a.getX(m+_),T=a.getX(m+(_+1)%3);r.fromBufferAttribute(o,x),s.fromBufferAttribute(o,T),qd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),qd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new kt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function qd(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Yd(r))r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Yd(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Fn(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const r in i)e[r]=i[r]}return e}function Yd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Gh={clone:Zs,merge:Fn};var Kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kv,this.fragmentShader=Zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Yv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new _t().setHex(r.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class jv extends pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class js extends Or{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Jv extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wh extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ey extends Wh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const df=new $t,Kd=new $,Zd=new $;class ty{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ga=new $,Wa=new so,Ni=new $;class gg extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Wa,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ga,Wa,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new $,jd=new ht,Jd=new ht;class hi extends gg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,jd,Jd),t.subVectors(Jd,jd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $h extends gg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ny extends ty{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iy extends Wh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new ny}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ry extends Wh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sy extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const ws=-90,Ts=1;class oy extends cn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hi(ws,Ts,e,t);r.layers=this.layers,this.add(r);const s=new hi(ws,Ts,e,t);s.layers=this.layers,this.add(s);const o=new hi(ws,Ts,e,t);o.layers=this.layers,this.add(o);const a=new hi(ws,Ts,e,t);a.layers=this.layers,this.add(a);const c=new hi(ws,Ts,e,t);c.layers=this.layers,this.add(c);const l=new hi(ws,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ay extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ly{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cy(){this._document.hidden===!1&&this.reset()}class Bu extends lg{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const xd=class xd{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};xd.prototype.isMatrix2=!0;let Qd=xd;const ep=new $,$a=new $,As=new $,Rs=new $,pf=new $,fy=new $,uy=new $;class hy{constructor(e=new $,t=new $){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ep.subVectors(e,this.start),$a.subVectors(this.end,this.start);const i=$a.dot($a);if(i===0)return 0;let s=$a.dot(ep)/i;return t&&(s=dt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=fy,i=uy){const r=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;As.subVectors(l,a),Rs.subVectors(h,c),pf.subVectors(a,c);const f=As.dot(As),u=Rs.dot(Rs),p=Rs.dot(pf);if(f<=r&&u<=r)return t.copy(a),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,o=p/u,o=dt(o,0,1);else{const m=As.dot(pf);if(u<=r)o=0,s=dt(-m/f,0,1);else{const v=As.dot(Rs),_=f*u-v*v;_!==0?s=dt((v*p-m*u)/_,0,1):s=0,o=(v*s+p)/u,o<0?(o=0,s=dt(-m/f,0,1)):o>1&&(o=1,s=dt((v-m)/f,0,1))}}return t.copy(a).addScaledVector(As,s),i.copy(c).addScaledVector(Rs,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function tp(n,e,t,i){const r=dy(i);switch(t){case Q0:return n*e;case Lh:return n*e/r.components*r.byteLength;case Nh:return n*e/r.components*r.byteLength;case is:return n*e*2/r.components*r.byteLength;case Oh:return n*e*2/r.components*r.byteLength;case eg:return n*e*3/r.components*r.byteLength;case Ai:return n*e*4/r.components*r.byteLength;case Uh:return n*e*4/r.components*r.byteLength;case _l:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:case cu:return Math.max(n,16)*Math.max(e,8)/4;case ou:case lu:return Math.max(n,8)*Math.max(e,8)/2;case fu:case uu:case du:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hu:case Il:case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pu:case Iu:case Du:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lu:case Nu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dl:case Ou:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(n){switch(n){case ni:case K0:return{byteLength:1,components:1};case Ko:case Z0:case hr:return{byteLength:2,components:1};case Ih:case Dh:return{byteLength:2,components:4};case Zi:case Ph:case Vi:return{byteLength:4,components:1};case j0:case J0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _g(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function py(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<f.length;p++){const m=f[u],v=f[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,m=f.length;p<m;p++){const v=f[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
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
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sy=`#ifdef USE_AOMAP
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
#endif`,My=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,by=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Cy=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,By=`#define PI 3.141592653589793
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
} // validated`,zy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ky=`vec3 transformedNormal = objectNormal;
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
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nS=`#ifdef USE_GRADIENTMAP
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
}`,iS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aS=`#ifdef USE_ENVMAP
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
#endif`,lS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,dS=`uniform sampler2D dfgLUT;
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
}`,pS=`
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_S=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ES=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wS=`#if defined( USE_POINTS_UV )
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
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`#ifdef USE_MORPHTARGETS
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
#endif`,DS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BS=`#ifdef USE_NORMALMAP
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
#endif`,zS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eM=`float getShadowMask() {
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
}`,tM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rM=`#ifdef USE_SKINNING
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
#endif`,sM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cM=`#ifdef USE_TRANSMISSION
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
#endif`,fM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gM=`uniform sampler2D t2D;
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`#include <common>
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
}`,MM=`#if DEPTH_PACKING == 3200
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
}`,EM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
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
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`uniform float scale;
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
}`,RM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,PM=`uniform vec3 diffuse;
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
}`,IM=`#define LAMBERT
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
}`,DM=`#define LAMBERT
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
}`,LM=`#define MATCAP
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
}`,NM=`#define MATCAP
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
}`,OM=`#define NORMAL
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
}`,UM=`#define NORMAL
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
}`,FM=`#define PHONG
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
}`,BM=`#define PHONG
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
}`,zM=`#define STANDARD
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
}`,kM=`#define STANDARD
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
}`,VM=`#define TOON
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
}`,HM=`#define TOON
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
}`,GM=`uniform float size;
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
}`,WM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,XM=`uniform vec3 color;
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
}`,qM=`uniform float rotation;
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
}`,YM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:_y,alphamap_pars_fragment:xy,alphatest_fragment:vy,alphatest_pars_fragment:yy,aomap_fragment:Sy,aomap_pars_fragment:My,batching_pars_vertex:Ey,batching_vertex:by,begin_vertex:wy,beginnormal_vertex:Ty,bsdfs:Ay,iridescence_fragment:Ry,bumpmap_pars_fragment:Cy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Ly,color_fragment:Ny,color_pars_fragment:Oy,color_pars_vertex:Uy,color_vertex:Fy,common:By,cube_uv_reflection_fragment:zy,defaultnormal_vertex:ky,displacementmap_pars_vertex:Vy,displacementmap_vertex:Hy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Wy,colorspace_fragment:$y,colorspace_pars_fragment:Xy,envmap_fragment:qy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:aS,envmap_vertex:jy,fog_vertex:Jy,fog_pars_vertex:Qy,fog_fragment:eS,fog_pars_fragment:tS,gradientmap_pars_fragment:nS,lightmap_pars_fragment:iS,lights_lambert_fragment:rS,lights_lambert_pars_fragment:sS,lights_pars_begin:oS,lights_toon_fragment:lS,lights_toon_pars_fragment:cS,lights_phong_fragment:fS,lights_phong_pars_fragment:uS,lights_physical_fragment:hS,lights_physical_pars_fragment:dS,lights_fragment_begin:pS,lights_fragment_maps:mS,lights_fragment_end:gS,lightprobes_pars_fragment:_S,logdepthbuf_fragment:xS,logdepthbuf_pars_fragment:vS,logdepthbuf_pars_vertex:yS,logdepthbuf_vertex:SS,map_fragment:MS,map_pars_fragment:ES,map_particle_fragment:bS,map_particle_pars_fragment:wS,metalnessmap_fragment:TS,metalnessmap_pars_fragment:AS,morphinstance_vertex:RS,morphcolor_vertex:CS,morphnormal_vertex:PS,morphtarget_pars_vertex:IS,morphtarget_vertex:DS,normal_fragment_begin:LS,normal_fragment_maps:NS,normal_pars_fragment:OS,normal_pars_vertex:US,normal_vertex:FS,normalmap_pars_fragment:BS,clearcoat_normal_fragment_begin:zS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:VS,iridescence_pars_fragment:HS,opaque_fragment:GS,packing:WS,premultiplied_alpha_fragment:$S,project_vertex:XS,dithering_fragment:qS,dithering_pars_fragment:YS,roughnessmap_fragment:KS,roughnessmap_pars_fragment:ZS,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:JS,shadowmap_vertex:QS,shadowmask_pars_fragment:eM,skinbase_vertex:tM,skinning_pars_vertex:nM,skinning_vertex:iM,skinnormal_vertex:rM,specularmap_fragment:sM,specularmap_pars_fragment:oM,tonemapping_fragment:aM,tonemapping_pars_fragment:lM,transmission_fragment:cM,transmission_pars_fragment:fM,uv_pars_fragment:uM,uv_pars_vertex:hM,uv_vertex:dM,worldpos_vertex:pM,background_vert:mM,background_frag:gM,backgroundCube_vert:_M,backgroundCube_frag:xM,cube_vert:vM,cube_frag:yM,depth_vert:SM,depth_frag:MM,distance_vert:EM,distance_frag:bM,equirect_vert:wM,equirect_frag:TM,linedashed_vert:AM,linedashed_frag:RM,meshbasic_vert:CM,meshbasic_frag:PM,meshlambert_vert:IM,meshlambert_frag:DM,meshmatcap_vert:LM,meshmatcap_frag:NM,meshnormal_vert:OM,meshnormal_frag:UM,meshphong_vert:FM,meshphong_frag:BM,meshphysical_vert:zM,meshphysical_frag:kM,meshtoon_vert:VM,meshtoon_frag:HM,points_vert:GM,points_frag:WM,shadow_vert:$M,shadow_frag:XM,sprite_vert:qM,sprite_frag:YM},Ie={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xn={basic:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Fn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Fn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Fn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Fn([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Fn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Fn([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Fn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Fn([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Fn([Ie.common,Ie.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Fn([Ie.lights,Ie.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Xn.physical={uniforms:Fn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Xa={r:0,b:0,g:0},KM=new $t,xg=new ft;xg.set(-1,0,0,0,1,0,0,0,1);function ZM(n,e,t,i,r,s){const o=new _t(0);let a=r===!0?0:1,c,l,h=null,f=0,u=null;function p(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){const S=T.backgroundBlurriness>0;R=e.get(R,S)}return R}function m(T){let R=!1;const S=p(T);S===null?_(o,a):S&&S.isColor&&(_(S,1),R=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(T,R){const S=p(R);S&&(S.isCubeTexture||S.mapping===Ec)?(l===void 0&&(l=new St(new Ri(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Zs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(KM.makeRotationFromEuler(R.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xg),l.material.toneMapped=vt.getTransfer(S.colorSpace)!==Ut,(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new St(new wc(2,2),new pi({name:"BackgroundMaterial",uniforms:Zs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=vt.getTransfer(S.colorSpace)!==Ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function _(T,R){T.getRGB(Xa,mg(n)),t.buffers.color.setClear(Xa.r,Xa.g,Xa.b,R,s)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,R=1){o.set(T),a=R,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,_(o,a)},render:m,addToRenderList:v,dispose:x}}function jM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(U,z,C,k,P){let B=!1;const N=f(U,k,C,z);s!==N&&(s=N,l(s.object)),B=p(U,k,C,P),B&&m(U,k,C,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(U,z,C,k),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function f(U,z,C,k){const P=k.wireframe===!0;let B=i[z.id];B===void 0&&(B={},i[z.id]=B);const N=U.isInstancedMesh===!0?U.id:0;let G=B[N];G===void 0&&(G={},B[N]=G);let W=G[C.id];W===void 0&&(W={},G[C.id]=W);let J=W[P];return J===void 0&&(J=u(c()),W[P]=J),J}function u(U){const z=[],C=[],k=[];for(let P=0;P<t;P++)z[P]=0,C[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:C,attributeDivisors:k,object:U,attributes:{},index:null}}function p(U,z,C,k){const P=s.attributes,B=z.attributes;let N=0;const G=C.getAttributes();for(const W in G)if(G[W].location>=0){const ae=P[W];let me=B[W];if(me===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(me=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(me=U.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function m(U,z,C,k){const P={},B=z.attributes;let N=0;const G=C.getAttributes();for(const W in G)if(G[W].location>=0){let ae=B[W];ae===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),P[W]=me,N++}s.attributes=P,s.attributesNum=N,s.index=k}function v(){const U=s.newAttributes;for(let z=0,C=U.length;z<C;z++)U[z]=0}function _(U){x(U,0)}function x(U,z){const C=s.newAttributes,k=s.enabledAttributes,P=s.attributeDivisors;C[U]=1,k[U]===0&&(n.enableVertexAttribArray(U),k[U]=1),P[U]!==z&&(n.vertexAttribDivisor(U,z),P[U]=z)}function T(){const U=s.newAttributes,z=s.enabledAttributes;for(let C=0,k=z.length;C<k;C++)z[C]!==U[C]&&(n.disableVertexAttribArray(C),z[C]=0)}function R(U,z,C,k,P,B,N){N===!0?n.vertexAttribIPointer(U,z,C,P,B):n.vertexAttribPointer(U,z,C,k,P,B)}function S(U,z,C,k){v();const P=k.attributes,B=C.getAttributes(),N=z.defaultAttributeValues;for(const G in B){const W=B[G];if(W.location>=0){let J=P[G];if(J===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){const ae=J.normalized,me=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const Ne=Le.buffer,tt=Le.type,he=Le.bytesPerElement,we=tt===n.INT||tt===n.UNSIGNED_INT||J.gpuType===Ph;if(J.isInterleavedBufferAttribute){const ve=J.data,Qe=ve.stride,nt=J.offset;if(ve.isInstancedInterleavedBuffer){for(let it=0;it<W.locationSize;it++)x(W.location+it,ve.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let it=0;it<W.locationSize;it++)_(W.location+it);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let it=0;it<W.locationSize;it++)R(W.location+it,me/W.locationSize,tt,ae,Qe*he,(nt+me/W.locationSize*it)*he,we)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)x(W.location+ve,J.meshPerAttribute);U.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<W.locationSize;ve++)_(W.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ve=0;ve<W.locationSize;ve++)R(W.location+ve,me/W.locationSize,tt,ae,me*he,me/W.locationSize*ve*he,we)}}else if(N!==void 0){const ae=N[G];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(W.location,ae);break;case 3:n.vertexAttrib3fv(W.location,ae);break;case 4:n.vertexAttrib4fv(W.location,ae);break;default:n.vertexAttrib1fv(W.location,ae)}}}}T()}function I(){E();for(const U in i){const z=i[U];for(const C in z){const k=z[C];for(const P in k){const B=k[P];for(const N in B)h(B[N].object),delete B[N];delete k[P]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;const z=i[U.id];for(const C in z){const k=z[C];for(const P in k){const B=k[P];for(const N in B)h(B[N].object),delete B[N];delete k[P]}}delete i[U.id]}function F(U){for(const z in i){const C=i[z];for(const k in C){const P=C[k];if(P[U.id]===void 0)continue;const B=P[U.id];for(const N in B)h(B[N].object),delete B[N];delete P[U.id]}}}function M(U){for(const z in i){const C=i[z],k=U.isInstancedMesh===!0?U.id:0,P=C[k];if(P!==void 0){for(const B in P){const N=P[B];for(const G in N)h(N[G].object),delete N[G];delete P[B]}delete C[k],Object.keys(C).length===0&&delete i[z]}}}function E(){L(),o=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:L,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:_,disableUnusedAttributes:T}}function JM(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function QM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(F){return!(F!==Ai&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const M=F===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ni&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!M)}function c(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(st("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:S,maxSamples:I,samples:A}}function eE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new $r,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const m=f.clippingPlanes,v=f.clipIntersection,_=f.clipShadows,x=n.get(f);if(!r||m===null||m.length===0||s&&!_)s?h(null):l();else{const T=s?0:i,R=T*4;let S=x.clippingState||null;c.value=S,S=h(m,u,R,p);for(let I=0;I!==R;++I)S[I]=t[I];x.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,m){const v=f!==null?f.length:0;let _=null;if(v!==0){if(_=c.value,m!==!0||_===null){const x=p+v*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(_===null||_.length<x)&&(_=new Float32Array(x));for(let R=0,S=p;R!==v;++R,S+=4)o.copy(f[R]).applyMatrix4(T,a),o.normal.toArray(_,S),_[S+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}const Rr=4,np=[.125,.215,.35,.446,.526,.582],Yr=20,tE=256,To=new $h,ip=new _t;let mf=null,gf=0,_f=0,xf=!1;const nE=new $;class rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=nE}=s;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,gf,_f),this._renderer.xr.enabled=xf,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:hr,format:Ai,colorSpace:Ll,depthBuffer:!1},r=sp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iE(s)),this._blurMaterial=sE(s,e,t),this._ggxMaterial=rE(s,e,t)}return r}_compileMaterial(e){const t=new St(new hn,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,i,r,s){const c=new hi(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(ip),f.toneMapping=Wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Ri,new ui({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,_=v.material;let x=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,x=!0):(_.color.copy(ip),x=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[R],s.y,s.z)):S===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[R]));const I=this._cubeSize;Cs(r,S*I,R>2?I:0,I,I),f.setRenderTarget(r),x&&f.render(v,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ns||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Cs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,To)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,p=f*u,{_lodMax:m}=this,v=this._sizeLods[i],_=3*v*(i>m-Rr?i-m+Rr:0),x=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,Cs(s,_,x,3*v,2*v),r.setRenderTarget(s),r.render(a,To),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,Cs(e,_,x,3*v,2*v),r.setRenderTarget(e),r.render(a,To)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yr-1),v=s/m,_=isFinite(s)?1+Math.floor(h*v):Yr;_>Yr&&st(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Yr}`);const x=[];let T=0;for(let F=0;F<Yr;++F){const M=F/v,E=Math.exp(-M*M/2);x.push(E),F===0?T+=E:F<_&&(T+=2*E)}for(let F=0;F<x.length;F++)x[F]=x[F]/T;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=x,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:R}=this;u.dTheta.value=m,u.mipInt.value=R-i;const S=this._sizeLods[r],I=3*S*(r>R-Rr?r-R+Rr:0),A=4*(this._cubeSize-S);Cs(t,I,A,3*S,2*S),c.setRenderTarget(t),c.render(f,To)}}function iE(n){const e=[],t=[],i=[];let r=n;const s=n-Rr+1+np.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Rr?c=np[o-n+Rr-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,m=6,v=3,_=2,x=1,T=new Float32Array(v*m*p),R=new Float32Array(_*m*p),S=new Float32Array(x*m*p);for(let A=0;A<p;A++){const F=A%3*2/3-1,M=A>2?0:-1,E=[F,M,0,F+2/3,M,0,F+2/3,M+1,0,F,M,0,F+2/3,M+1,0,F,M+1,0];T.set(E,v*m*A),R.set(u,_*m*A);const L=[A,A,A,A,A,A];S.set(L,x*m*A)}const I=new hn;I.setAttribute("position",new Pi(T,v)),I.setAttribute("uv",new Pi(R,_)),I.setAttribute("faceIndex",new Pi(S,x)),i.push(new St(I,null)),r>Rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sp(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rE(n,e,t){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function sE(n,e,t){const i=new Float32Array(Yr),r=new $(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function op(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function ap(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}class vg extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dg(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ri(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:or});s.uniforms.tEquirect.value=t;const o=new St(r,s),a=t.minFilter;return t.minFilter===Zr&&(t.minFilter=An),new oy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function oE(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Bc||p===zc)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const v=new vg(m.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,m=p===Bc||p===zc,v=p===ns||p===Ys;if(m||v){let _=t.get(u);const x=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new rp(n)),_=m?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const T=u.image;return m&&T&&T.height>0||v&&T&&c(T)?(i===null&&(i=new rp(n)),_=m?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function a(u,p){return p===Bc?u.mapping=ns:p===zc&&(u.mapping=Ys),u}function c(u){let p=0;const m=6;for(let v=0;v<m;v++)u[v]!==void 0&&p++;return p===m}function l(u){const p=u.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function aE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vs("WebGLRenderer: "+i+" extension not supported."),r}}}function lE(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(p!==null){const T=p.array;v=p.version;for(let R=0,S=T.length;R<S;R+=3){const I=T[R+0],A=T[R+1],F=T[R+2];u.push(I,A,A,F,F,I)}}else{const T=m.array;v=m.version;for(let R=0,S=T.length/3-1;R<S;R+=3){const I=R+0,A=R+1,F=R+2;u.push(I,A,A,F,F,I)}}const _=new(m.count>=65535?ag:og)(u,1);_.version=v;const x=s.get(f);x&&e.remove(x),s.set(f,_)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function cE(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*o,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let v=0;for(let _=0;_<p;_++)v+=u[_];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function fE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function uE(n,e,t){const i=new WeakMap,r=new zt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let L=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),_===!0&&(S=3);let I=a.attributes.position.count*S,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*A*4*f),M=new ig(F,I,A,f);M.type=Vi,M.needsUpdate=!0;const E=S*4;for(let U=0;U<f;U++){const z=x[U],C=T[U],k=R[U],P=I*A*4*U;for(let B=0;B<z.count;B++){const N=B*E;m===!0&&(r.fromBufferAttribute(z,B),F[P+N+0]=r.x,F[P+N+1]=r.y,F[P+N+2]=r.z,F[P+N+3]=0),v===!0&&(r.fromBufferAttribute(C,B),F[P+N+4]=r.x,F[P+N+5]=r.y,F[P+N+6]=r.z,F[P+N+7]=0),_===!0&&(r.fromBufferAttribute(k,B),F[P+N+8]=r.x,F[P+N+9]=r.y,F[P+N+10]=r.z,F[P+N+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:M,size:new ht(I,A)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function hE(n,e,t,i,r){let s=new WeakMap;function o(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const dE={[V0]:"LINEAR_TONE_MAPPING",[H0]:"REINHARD_TONE_MAPPING",[G0]:"CINEON_TONE_MAPPING",[W0]:"ACES_FILMIC_TONE_MAPPING",[X0]:"AGX_TONE_MAPPING",[q0]:"NEUTRAL_TONE_MAPPING",[$0]:"CUSTOM_TONE_MAPPING"};function pE(n,e,t,i,r,s){const o=new $i(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ks(e,t):void 0}),a=new $i(e,t,{type:hr,depthBuffer:!1,stencilBuffer:!1}),c=new hn;c.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new kt([0,2,0,0,2,0],2));const l=new jv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new St(c,l),f=new $h(-1,1,1,-1,0,1);let u=null,p=null,m=!1,v,_=null,x=[],T=!1;this.setSize=function(R,S){o.setSize(R,S),a.setSize(R,S);for(let I=0;I<x.length;I++){const A=x[I];A.setSize&&A.setSize(R,S)}},this.setEffects=function(R){x=R,T=x.length>0&&x[0].isRenderPass===!0;const S=o.width,I=o.height;for(let A=0;A<x.length;A++){const F=x[A];F.setSize&&F.setSize(S,I)}},this.begin=function(R,S){if(m||R.toneMapping===Wi&&x.length===0)return!1;if(_=S,S!==null){const I=S.width,A=S.height;(o.width!==I||o.height!==A)&&this.setSize(I,A)}return T===!1&&R.setRenderTarget(o),v=R.toneMapping,R.toneMapping=Wi,!0},this.hasRenderPass=function(){return T},this.end=function(R,S){R.toneMapping=v,m=!0;let I=o,A=a;for(let F=0;F<x.length;F++){const M=x[F];if(M.enabled!==!1&&(M.render(R,A,I,S),M.needsSwap!==!1)){const E=I;I=A,A=E}}if(u!==R.outputColorSpace||p!==R.toneMapping){u=R.outputColorSpace,p=R.toneMapping,l.defines={},vt.getTransfer(u)===Ut&&(l.defines.SRGB_TRANSFER="");const F=dE[p];F&&(l.defines[F]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=I.texture,R.setRenderTarget(_),R.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const yg=new Rn,zu=new Ks(1,1),Sg=new ig,Mg=new Tv,Eg=new dg,lp=[],cp=[],fp=new Float32Array(16),up=new Float32Array(9),hp=new Float32Array(4);function ao(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=lp[r];if(s===void 0&&(s=new Float32Array(r),lp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=cp[e];t===void 0&&(t=new Int32Array(e),cp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function _E(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function xE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function vE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(fn(t,i))return;hp.set(i),n.uniformMatrix2fv(this.addr,!1,hp),un(t,i)}}function yE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(fn(t,i))return;up.set(i),n.uniformMatrix3fv(this.addr,!1,up),un(t,i)}}function SE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(fn(t,i))return;fp.set(i),n.uniformMatrix4fv(this.addr,!1,fp),un(t,i)}}function ME(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function EE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function bE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function wE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function TE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function RE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function CE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function PE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zu.compareFunction=t.isReversedDepthBuffer()?Bh:Fh,s=zu):s=yg,t.setTexture2D(e||s,r)}function IE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mg,r)}function DE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Eg,r)}function LE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Sg,r)}function NE(n){switch(n){case 5126:return mE;case 35664:return gE;case 35665:return _E;case 35666:return xE;case 35674:return vE;case 35675:return yE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return EE;case 35668:case 35672:return bE;case 35669:case 35673:return wE;case 5125:return TE;case 36294:return AE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return LE}}function OE(n,e){n.uniform1fv(this.addr,e)}function UE(n,e){const t=ao(e,this.size,2);n.uniform2fv(this.addr,t)}function FE(n,e){const t=ao(e,this.size,3);n.uniform3fv(this.addr,t)}function BE(n,e){const t=ao(e,this.size,4);n.uniform4fv(this.addr,t)}function zE(n,e){const t=ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kE(n,e){const t=ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VE(n,e){const t=ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function HE(n,e){n.uniform1iv(this.addr,e)}function GE(n,e){n.uniform2iv(this.addr,e)}function WE(n,e){n.uniform3iv(this.addr,e)}function $E(n,e){n.uniform4iv(this.addr,e)}function XE(n,e){n.uniform1uiv(this.addr,e)}function qE(n,e){n.uniform2uiv(this.addr,e)}function YE(n,e){n.uniform3uiv(this.addr,e)}function KE(n,e){n.uniform4uiv(this.addr,e)}function ZE(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=zu:o=yg;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function jE(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mg,s[o])}function JE(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Eg,s[o])}function QE(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Sg,s[o])}function eb(n){switch(n){case 5126:return OE;case 35664:return UE;case 35665:return FE;case 35666:return BE;case 35674:return zE;case 35675:return kE;case 35676:return VE;case 5124:case 35670:return HE;case 35667:case 35671:return GE;case 35668:case 35672:return WE;case 35669:case 35673:return $E;case 5125:return XE;case 36294:return qE;case 36295:return YE;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return ZE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}class tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NE(t.type)}}class nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eb(t.type)}}class ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function dp(n,e){n.seq.push(e),n.map[e.id]=e}function rb(n,e,t){const i=n.name,r=i.length;for(vf.lastIndex=0;;){const s=vf.exec(i),o=vf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){dp(t,l===void 0?new tb(a,n,e):new nb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ib(a),dp(t,f)),t=f}}}class Sl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);rb(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function pp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sb=37297;let ob=0;function ab(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const mp=new ft;function lb(n){vt._getMatrix(mp,vt.workingColorSpace,n);const e=`mat3( ${mp.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Nl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function gp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ab(n.getShaderSource(e),a)}else return s}function cb(n,e){const t=lb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const fb={[V0]:"Linear",[H0]:"Reinhard",[G0]:"Cineon",[W0]:"ACESFilmic",[X0]:"AgX",[q0]:"Neutral",[$0]:"Custom"};function ub(n,e){const t=fb[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qa=new $;function hb(){vt.getLuminanceCoefficients(qa);const n=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function pb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zo(n){return n!==""}function _p(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(n){return n.replace(gb,xb)}const _b=new Map;function xb(n,e){let t=mt[e];if(t===void 0){const i=_b.get(e);if(i!==void 0)t=mt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ku(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(n){return n.replace(vb,yb)}function yb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Sb={[gl]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function Mb(n){return Sb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Eb={[ns]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Ec]:"ENVMAP_TYPE_CUBE_UV"};function bb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Eb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const wb={[Ys]:"ENVMAP_MODE_REFRACTION"};function Tb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":wb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ab={[k0]:"ENVMAP_BLENDING_MULTIPLY",[Wx]:"ENVMAP_BLENDING_MIX",[$x]:"ENVMAP_BLENDING_ADD"};function Rb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ab[n.combine]||"ENVMAP_BLENDING_NONE"}function Cb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Pb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Mb(t),l=bb(t),h=Tb(t),f=Rb(t),u=Cb(t),p=db(t),m=pb(s),v=r.createProgram();let _,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),x.length>0&&(x+=`
`)):(_=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),x=[yp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,cb("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=ku(o),o=_p(o,t),o=xp(o,t),a=ku(a),a=_p(a,t),a=xp(a,t),o=vp(o),a=vp(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=T+_+o,S=T+x+a,I=pp(r,r.VERTEX_SHADER,R),A=pp(r,r.FRAGMENT_SHADER,S);r.attachShader(v,I),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function F(U){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",C=r.getShaderInfoLog(I)||"",k=r.getShaderInfoLog(A)||"",P=z.trim(),B=C.trim(),N=k.trim();let G=!0,W=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,A);else{const J=gp(r,I,"vertex"),ae=gp(r,A,"fragment");Et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+J+`
`+ae)}else P!==""?st("WebGLProgram: Program Info Log:",P):(B===""||N==="")&&(W=!1);W&&(U.diagnostics={runnable:G,programLog:P,vertexShader:{log:B,prefix:_},fragmentShader:{log:N,prefix:x}})}r.deleteShader(I),r.deleteShader(A),M=new Sl(r,v),E=mb(r,v)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,sb)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=A,this}let Ib=0;class Db{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Lb(e),t.set(e,i)),i}}class Lb{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}}function Nb(n){return n===is||n===Il||n===Dl}function Ob(n,e,t,i,r,s){const o=new rg,a=new Db,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,E,L,U,z,C){const k=U.fog,P=z.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,G=e.get(M.envMap||B,N),W=G&&G.mapping===Ec?G.image.height:null,J=p[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&st("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const ae=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,me=ae!==void 0?ae.length:0;let Le=0;P.morphAttributes.position!==void 0&&(Le=1),P.morphAttributes.normal!==void 0&&(Le=2),P.morphAttributes.color!==void 0&&(Le=3);let Ne,tt,he,we;if(J){const Ge=Xn[J];Ne=Ge.vertexShader,tt=Ge.fragmentShader}else{Ne=M.vertexShader,tt=M.fragmentShader;const Ge=a.getVertexShaderStage(M),qt=a.getFragmentShaderStage(M);a.update(M,Ge,qt),he=Ge.id,we=qt.id}const ve=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),nt=z.isInstancedMesh===!0,it=z.isBatchedMesh===!0,Xt=!!M.map,Ae=!!M.matcap,lt=!!G,Ze=!!M.aoMap,Oe=!!M.lightMap,Mt=!!M.bumpMap&&M.wireframe===!1,Rt=!!M.normalMap,Bt=!!M.displacementMap,Ct=!!M.emissiveMap,Lt=!!M.metalnessMap,Zt=!!M.roughnessMap,K=M.anisotropy>0,_n=M.clearcoat>0,At=M.dispersion>0,V=M.iridescence>0,b=M.sheen>0,Q=M.transmission>0,se=K&&!!M.anisotropyMap,fe=_n&&!!M.clearcoatMap,be=_n&&!!M.clearcoatNormalMap,Se=_n&&!!M.clearcoatRoughnessMap,ue=V&&!!M.iridescenceMap,ge=V&&!!M.iridescenceThicknessMap,Me=b&&!!M.sheenColorMap,Ye=b&&!!M.sheenRoughnessMap,De=!!M.specularMap,Ee=!!M.specularColorMap,Xe=!!M.specularIntensityMap,rt=Q&&!!M.transmissionMap,je=Q&&!!M.thicknessMap,X=!!M.gradientMap,Te=!!M.alphaMap,ce=M.alphaTest>0,Ce=!!M.alphaHash,Pe=!!M.extensions;let xe=Wi;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Ke={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Ne,fragmentShader:tt,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:it,batchingColor:it&&z._colorsTexture!==null,instancing:nt,instancingColor:nt&&z.instanceColor!==null,instancingMorph:nt&&z.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Xt,matcap:Ae,envMap:lt,envMapMode:lt&&G.mapping,envMapCubeUVHeight:W,aoMap:Ze,lightMap:Oe,bumpMap:Mt,normalMap:Rt,displacementMap:Bt,emissiveMap:Ct,normalMapObjectSpace:Rt&&M.normalMapType===Yx,normalMapTangentSpace:Rt&&M.normalMapType===Uu,packedNormalMap:Rt&&M.normalMapType===Uu&&Nb(M.normalMap.format),metalnessMap:Lt,roughnessMap:Zt,anisotropy:K,anisotropyMap:se,clearcoat:_n,clearcoatMap:fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Se,dispersion:At,iridescence:V,iridescenceMap:ue,iridescenceThicknessMap:ge,sheen:b,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:De,specularColorMap:Ee,specularIntensityMap:Xe,transmission:Q,transmissionMap:rt,thicknessMap:je,gradientMap:X,opaque:M.transparent===!1&&M.blending===ks&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:ce,alphaHash:Ce,combine:M.combine,mapUv:Xt&&m(M.map.channel),aoMapUv:Ze&&m(M.aoMap.channel),lightMapUv:Oe&&m(M.lightMap.channel),bumpMapUv:Mt&&m(M.bumpMap.channel),normalMapUv:Rt&&m(M.normalMap.channel),displacementMapUv:Bt&&m(M.displacementMap.channel),emissiveMapUv:Ct&&m(M.emissiveMap.channel),metalnessMapUv:Lt&&m(M.metalnessMap.channel),roughnessMapUv:Zt&&m(M.roughnessMap.channel),anisotropyMapUv:se&&m(M.anisotropyMap.channel),clearcoatMapUv:fe&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(M.sheenRoughnessMap.channel),specularMapUv:De&&m(M.specularMap.channel),specularColorMapUv:Ee&&m(M.specularColorMap.channel),specularIntensityMapUv:Xe&&m(M.specularIntensityMap.channel),transmissionMapUv:rt&&m(M.transmissionMap.channel),thicknessMapUv:je&&m(M.thicknessMap.channel),alphaMapUv:Te&&m(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Rt||K),vertexNormals:!!P.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!P.attributes.uv&&(Xt||Te),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||P.attributes.normal===void 0&&Rt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Qe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Xt&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ct&&M.emissiveMap.isVideoTexture===!0&&vt.getTransfer(M.emissiveMap.colorSpace)===Ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bi,flipSided:M.side===Vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function _(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(E,M),T(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function T(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function R(M){const E=p[M.type];let L;if(E){const U=Xn[E];L=Gh.clone(U.uniforms)}else L=M.uniforms;return L}function S(M,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new Pb(n,E,M,r),l.push(L),h.set(E,L)),L}function I(M){if(--M.usedTimes===0){const E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function A(M){a.remove(M)}function F(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:R,acquireProgram:S,releaseProgram:I,releaseShaderCache:A,programs:l,dispose:F}}function Ub(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Fb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,m,v,_,x){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:_,group:x},n[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=m,T.materialVariant=o(u),T.groupOrder=v,T.renderOrder=u.renderOrder,T.z=_,T.group=x),e++,T}function c(u,p,m,v,_,x){const T=a(u,p,m,v,_,x);m.transmission>0?i.push(T):m.transparent===!0?r.push(T):t.push(T)}function l(u,p,m,v,_,x){const T=a(u,p,m,v,_,x);m.transmission>0?i.unshift(T):m.transparent===!0?r.unshift(T):t.unshift(T)}function h(u,p,m){t.length>1&&t.sort(u||Fb),i.length>1&&i.sort(p||Sp),r.length>1&&r.sort(p||Sp),m&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function Bb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Mp,n.set(i,[o])):r>=s.length?(o=new Mp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new _t};break;case"SpotLight":t={position:new $,direction:new $,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function kb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Vb=0;function Hb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Gb(n){const e=new zb,t=kb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,s=new $t,o=new $t;function a(l){let h=0,f=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,m=0,v=0,_=0,x=0,T=0,R=0,S=0,I=0,A=0,F=0;l.sort(Hb);for(let E=0,L=l.length;E<L;E++){const U=l[E],z=U.color,C=U.intensity,k=U.distance;let P=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===is?P=U.shadow.map.texture:P=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*C,f+=z.g*C,u+=z.b*C;else if(U.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(U.sh.coefficients[B],C);F++}else if(U.isDirectionalLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const N=U.shadow,G=t.get(U);G.shadowIntensity=N.intensity,G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=P,i.directionalShadowMatrix[p]=U.shadow.matrix,T++}i.directional[p]=B,p++}else if(U.isSpotLight){const B=e.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(z).multiplyScalar(C),B.distance=k,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,i.spot[v]=B;const N=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,N.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[v]=N.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=N.intensity,G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=P,S++}v++}else if(U.isRectAreaLight){const B=e.get(U);B.color.copy(z).multiplyScalar(C),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=B,_++}else if(U.isPointLight){const B=e.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){const N=U.shadow,G=t.get(U);G.shadowIntensity=N.intensity,G.shadowBias=N.bias,G.shadowNormalBias=N.normalBias,G.shadowRadius=N.radius,G.shadowMapSize=N.mapSize,G.shadowCameraNear=N.camera.near,G.shadowCameraFar=N.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=P,i.pointShadowMatrix[m]=U.shadow.matrix,R++}i.point[m]=B,m++}else if(U.isHemisphereLight){const B=e.get(U);B.skyColor.copy(U.color).multiplyScalar(C),B.groundColor.copy(U.groundColor).multiplyScalar(C),i.hemi[x]=B,x++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const M=i.hash;(M.directionalLength!==p||M.pointLength!==m||M.spotLength!==v||M.rectAreaLength!==_||M.hemiLength!==x||M.numDirectionalShadows!==T||M.numPointShadows!==R||M.numSpotShadows!==S||M.numSpotMaps!==I||M.numLightProbes!==F)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=S+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=F,M.directionalLength=p,M.pointLength=m,M.spotLength=v,M.rectAreaLength=_,M.hemiLength=x,M.numDirectionalShadows=T,M.numPointShadows=R,M.numSpotShadows=S,M.numSpotMaps=I,M.numLightProbes=F,i.version=Vb++)}function c(l,h){let f=0,u=0,p=0,m=0,v=0;const _=h.matrixWorldInverse;for(let x=0,T=l.length;x<T;x++){const R=l[x];if(R.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(R.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),p++}else if(R.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),o.identity(),s.copy(R.matrixWorld),s.premultiply(_),o.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(R.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(_),u++}else if(R.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(_),v++}}}return{setup:a,setupView:c,state:i}}function Ep(n){const e=new Gb(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Wb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ep(n),e.set(r,[a])):s>=o.length?(a=new Ep(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
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
}`,qb=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Yb=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],bp=new $t,Ao=new $,yf=new $;function Kb(n,e,t){let i=new Vh;const r=new ht,s=new ht,o=new zt,a=new Jv,c=new Qv,l={},h=t.maxTextureSize,f={[Dr]:Vn,[Vn]:Dr,[bi]:bi},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:$b,fragmentShader:Xb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new hn;m.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(m,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let x=this.type;this.render=function(A,F,M){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===wx&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gl);const E=n.getRenderTarget(),L=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(or),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const C=x!==this.type;C&&F.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(P=>P.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,P=A.length;k<P;k++){const B=A[k],N=B.shadow;if(N===void 0){st("WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const G=N.getFrameExtents();r.multiply(G),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,N.mapSize.y=s.y));const W=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=W,N.map===null||C===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Fo){if(B.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new $i(r.x,r.y,{format:is,type:hr,minFilter:An,magFilter:An,generateMipmaps:!1}),N.map.texture.name=B.name+".shadowMap",N.map.depthTexture=new Ks(r.x,r.y,Vi),N.map.depthTexture.name=B.name+".shadowMapDepth",N.map.depthTexture.format=dr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Mn,N.map.depthTexture.magFilter=Mn}else B.isPointLight?(N.map=new vg(r.x),N.map.depthTexture=new $v(r.x,Zi)):(N.map=new $i(r.x,r.y),N.map.depthTexture=new Ks(r.x,r.y,Zi)),N.map.depthTexture.name=B.name+".shadowMap",N.map.depthTexture.format=dr,this.type===gl?(N.map.depthTexture.compareFunction=W?Bh:Fh,N.map.depthTexture.minFilter=An,N.map.depthTexture.magFilter=An):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Mn,N.map.depthTexture.magFilter=Mn);N.camera.updateProjectionMatrix()}const J=N.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<J;ae++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(N.map),n.clear());const me=N.getViewport(ae);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o)}if(B.isPointLight){const me=N.camera,Le=N.matrix,Ne=B.distance||me.far;Ne!==me.far&&(me.far=Ne,me.updateProjectionMatrix()),Ao.setFromMatrixPosition(B.matrixWorld),me.position.copy(Ao),yf.copy(me.position),yf.add(qb[ae]),me.up.copy(Yb[ae]),me.lookAt(yf),me.updateMatrixWorld(),Le.makeTranslation(-Ao.x,-Ao.y,-Ao.z),bp.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),N._frustum.setFromProjectionMatrix(bp,me.coordinateSystem,me.reversedDepth)}else N.updateMatrices(B);i=N.getFrustum(),S(F,M,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===Fo&&T(N,M),N.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(E,L,U)};function T(A,F){const M=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(r.x,r.y,{format:is,type:hr})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(F,null,M,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(F,null,M,p,v,null)}function R(A,F,M,E){let L=null;const U=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)L=U;else if(L=M.isPointLight===!0?c:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const z=L.uuid,C=F.uuid;let k=l[z];k===void 0&&(k={},l[z]=k);let P=k[C];P===void 0&&(P=L.clone(),k[C]=P,F.addEventListener("dispose",I)),L=P}if(L.visible=F.visible,L.wireframe=F.wireframe,E===Fo?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:f[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,M.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=n.properties.get(L);z.light=M}return L}function S(A,F,M,E,L){if(A.visible===!1)return;if(A.layers.test(F.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Fo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const C=e.update(A),k=A.material;if(Array.isArray(k)){const P=C.groups;for(let B=0,N=P.length;B<N;B++){const G=P[B],W=k[G.materialIndex];if(W&&W.visible){const J=R(A,W,E,L);A.onBeforeShadow(n,A,F,M,C,J,G),n.renderBufferDirect(M,null,C,J,A,G),A.onAfterShadow(n,A,F,M,C,J,G)}}}else if(k.visible){const P=R(A,k,E,L);A.onBeforeShadow(n,A,F,M,C,P,null),n.renderBufferDirect(M,null,C,P,A,null),A.onAfterShadow(n,A,F,M,C,P,null)}}const z=A.children;for(let C=0,k=z.length;C<k;C++)S(z[C],F,M,E,L)}function I(A){A.target.removeEventListener("dispose",I);for(const M in l){const E=l[M],L=A.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function Zb(n,e){function t(){let X=!1;const Te=new zt;let ce=null;const Ce=new zt(0,0,0,0);return{setMask:function(Pe){ce!==Pe&&!X&&(n.colorMask(Pe,Pe,Pe,Pe),ce=Pe)},setLocked:function(Pe){X=Pe},setClear:function(Pe,xe,Ke,Ge,qt){qt===!0&&(Pe*=Ge,xe*=Ge,Ke*=Ge),Te.set(Pe,xe,Ke,Ge),Ce.equals(Te)===!1&&(n.clearColor(Pe,xe,Ke,Ge),Ce.copy(Te))},reset:function(){X=!1,ce=null,Ce.set(-1,0,0,0)}}}function i(){let X=!1,Te=!1,ce=null,Ce=null,Pe=null;return{setReversed:function(xe){if(Te!==xe){const Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;const Ge=Pe;Pe=null,this.setClear(Ge)}},getReversed:function(){return Te},setTest:function(xe){xe?ve(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(xe){ce!==xe&&!X&&(n.depthMask(xe),ce=xe)},setFunc:function(xe){if(Te&&(xe=rv[xe]),Ce!==xe){switch(xe){case jf:n.depthFunc(n.NEVER);break;case Jf:n.depthFunc(n.ALWAYS);break;case Qf:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case eu:n.depthFunc(n.EQUAL);break;case tu:n.depthFunc(n.GEQUAL);break;case nu:n.depthFunc(n.GREATER);break;case iu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Pe!==xe&&(Pe=xe,Te&&(xe=1-xe),n.clearDepth(xe))},reset:function(){X=!1,ce=null,Ce=null,Pe=null,Te=!1}}}function r(){let X=!1,Te=null,ce=null,Ce=null,Pe=null,xe=null,Ke=null,Ge=null,qt=null;return{setTest:function(Nt){X||(Nt?ve(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Nt){Te!==Nt&&!X&&(n.stencilMask(Nt),Te=Nt)},setFunc:function(Nt,Hn,Kn){(ce!==Nt||Ce!==Hn||Pe!==Kn)&&(n.stencilFunc(Nt,Hn,Kn),ce=Nt,Ce=Hn,Pe=Kn)},setOp:function(Nt,Hn,Kn){(xe!==Nt||Ke!==Hn||Ge!==Kn)&&(n.stencilOp(Nt,Hn,Kn),xe=Nt,Ke=Hn,Ge=Kn)},setLocked:function(Nt){X=Nt},setClear:function(Nt){qt!==Nt&&(n.clearStencil(Nt),qt=Nt)},reset:function(){X=!1,Te=null,ce=null,Ce=null,Pe=null,xe=null,Ke=null,Ge=null,qt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,m=[],v=null,_=!1,x=null,T=null,R=null,S=null,I=null,A=null,F=null,M=new _t(0,0,0),E=0,L=!1,U=null,z=null,C=null,k=null,P=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),N=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),N=G>=2);let J=null,ae={};const me=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Ne=new zt().fromArray(me),tt=new zt().fromArray(Le);function he(X,Te,ce,Ce){const Pe=new Uint8Array(4),xe=n.createTexture();n.bindTexture(X,xe),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ce;Ke++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return xe}const we={};we[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(qs),Mt(!1),Rt(vd),ve(n.CULL_FACE),Ze(or);function ve(X){h[X]!==!0&&(n.enable(X),h[X]=!0)}function Qe(X){h[X]!==!1&&(n.disable(X),h[X]=!1)}function nt(X,Te){return u[X]!==Te?(n.bindFramebuffer(X,Te),u[X]=Te,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function it(X,Te){let ce=m,Ce=!1;if(X){ce=p.get(Te),ce===void 0&&(ce=[],p.set(Te,ce));const Pe=X.textures;if(ce.length!==Pe.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ke=Pe.length;xe<Ke;xe++)ce[xe]=n.COLOR_ATTACHMENT0+xe;ce.length=Pe.length,Ce=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(ce)}function Xt(X){return v!==X?(n.useProgram(X),v=X,!0):!1}const Ae={[qr]:n.FUNC_ADD,[Ax]:n.FUNC_SUBTRACT,[Rx]:n.FUNC_REVERSE_SUBTRACT};Ae[Cx]=n.MIN,Ae[Px]=n.MAX;const lt={[Ix]:n.ZERO,[Dx]:n.ONE,[Lx]:n.SRC_COLOR,[Kf]:n.SRC_ALPHA,[zx]:n.SRC_ALPHA_SATURATE,[Fx]:n.DST_COLOR,[Ox]:n.DST_ALPHA,[Nx]:n.ONE_MINUS_SRC_COLOR,[Zf]:n.ONE_MINUS_SRC_ALPHA,[Bx]:n.ONE_MINUS_DST_COLOR,[Ux]:n.ONE_MINUS_DST_ALPHA,[kx]:n.CONSTANT_COLOR,[Vx]:n.ONE_MINUS_CONSTANT_COLOR,[Hx]:n.CONSTANT_ALPHA,[Gx]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(X,Te,ce,Ce,Pe,xe,Ke,Ge,qt,Nt){if(X===or){_===!0&&(Qe(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),X!==Tx){if(X!==x||Nt!==L){if((T!==qr||I!==qr)&&(n.blendEquation(n.FUNC_ADD),T=qr,I=qr),Nt)switch(X){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.ONE,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Md:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Et("WebGLState: Invalid blending: ",X);break}else switch(X){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sd:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Md:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",X);break}R=null,S=null,A=null,F=null,M.set(0,0,0),E=0,x=X,L=Nt}return}Pe=Pe||Te,xe=xe||ce,Ke=Ke||Ce,(Te!==T||Pe!==I)&&(n.blendEquationSeparate(Ae[Te],Ae[Pe]),T=Te,I=Pe),(ce!==R||Ce!==S||xe!==A||Ke!==F)&&(n.blendFuncSeparate(lt[ce],lt[Ce],lt[xe],lt[Ke]),R=ce,S=Ce,A=xe,F=Ke),(Ge.equals(M)===!1||qt!==E)&&(n.blendColor(Ge.r,Ge.g,Ge.b,qt),M.copy(Ge),E=qt),x=X,L=!1}function Oe(X,Te){X.side===bi?Qe(n.CULL_FACE):ve(n.CULL_FACE);let ce=X.side===Vn;Te&&(ce=!ce),Mt(ce),X.blending===ks&&X.transparent===!1?Ze(or):Ze(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const Ce=X.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(X){U!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),U=X)}function Rt(X){X!==Ex?(ve(n.CULL_FACE),X!==z&&(X===vd?n.cullFace(n.BACK):X===bx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),z=X}function Bt(X){X!==C&&(N&&n.lineWidth(X),C=X)}function Ct(X,Te,ce){X?(ve(n.POLYGON_OFFSET_FILL),(k!==Te||P!==ce)&&(k=Te,P=ce,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,ce))):Qe(n.POLYGON_OFFSET_FILL)}function Lt(X){X?ve(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function Zt(X){X===void 0&&(X=n.TEXTURE0+B-1),J!==X&&(n.activeTexture(X),J=X)}function K(X,Te,ce){ce===void 0&&(J===null?ce=n.TEXTURE0+B-1:ce=J);let Ce=ae[ce];Ce===void 0&&(Ce={type:void 0,texture:void 0},ae[ce]=Ce),(Ce.type!==X||Ce.texture!==Te)&&(J!==ce&&(n.activeTexture(ce),J=ce),n.bindTexture(X,Te||we[X]),Ce.type=X,Ce.texture=Te)}function _n(){const X=ae[J];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function b(){try{n.texSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Q(){try{n.texSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function be(){try{n.texStorage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function Se(){try{n.texStorage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function ue(){try{n.texImage2D(...arguments)}catch(X){Et("WebGLState:",X)}}function ge(){try{n.texImage3D(...arguments)}catch(X){Et("WebGLState:",X)}}function Me(X){return f[X]!==void 0?f[X]:n.getParameter(X)}function Ye(X,Te){f[X]!==Te&&(n.pixelStorei(X,Te),f[X]=Te)}function De(X){Ne.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Ne.copy(X))}function Ee(X){tt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),tt.copy(X))}function Xe(X,Te){let ce=l.get(Te);ce===void 0&&(ce=new WeakMap,l.set(Te,ce));let Ce=ce.get(X);Ce===void 0&&(Ce=n.getUniformBlockIndex(Te,X.name),ce.set(X,Ce))}function rt(X,Te){const Ce=l.get(Te).get(X);c.get(Te)!==Ce&&(n.uniformBlockBinding(Te,Ce,X.__bindingPointIndex),c.set(Te,Ce))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,ae={},u={},p=new WeakMap,m=[],v=null,_=!1,x=null,T=null,R=null,S=null,I=null,A=null,F=null,M=new _t(0,0,0),E=0,L=!1,U=null,z=null,C=null,k=null,P=null,Ne.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:Qe,bindFramebuffer:nt,drawBuffers:it,useProgram:Xt,setBlending:Ze,setMaterial:Oe,setFlipSided:Mt,setCullFace:Rt,setLineWidth:Bt,setPolygonOffset:Ct,setScissorTest:Lt,activeTexture:Zt,bindTexture:K,unbindTexture:_n,compressedTexImage2D:At,compressedTexImage3D:V,texImage2D:ue,texImage3D:ge,pixelStorei:Ye,getParameter:Me,updateUBOMapping:Xe,uniformBlockBinding:rt,texStorage2D:be,texStorage3D:Se,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:De,viewport:Ee,reset:je}}function jb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(V,b){return m?new OffscreenCanvas(V,b):Ol("canvas")}function _(V,b,Q){let se=1;const fe=At(V);if((fe.width>Q||fe.height>Q)&&(se=Q/Math.max(fe.width,fe.height)),se<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const be=Math.floor(se*fe.width),Se=Math.floor(se*fe.height);u===void 0&&(u=v(be,Se));const ue=b?v(be,Se):u;return ue.width=be,ue.height=Se,ue.getContext("2d").drawImage(V,0,0,be,Se),st("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+be+"x"+Se+")."),ue}else return"data"in V&&st("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),V;return V}function x(V){return V.generateMipmaps}function T(V){n.generateMipmap(V)}function R(V){return V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?n.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(V,b,Q,se,fe,be=!1){if(V!==null){if(n[V]!==void 0)return n[V];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Se;se&&(Se=e.get("EXT_texture_norm16"),Se||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===n.RED&&(Q===n.FLOAT&&(ue=n.R32F),Q===n.HALF_FLOAT&&(ue=n.R16F),Q===n.UNSIGNED_BYTE&&(ue=n.R8),Q===n.UNSIGNED_SHORT&&Se&&(ue=Se.R16_EXT),Q===n.SHORT&&Se&&(ue=Se.R16_SNORM_EXT)),b===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ue=n.R8UI),Q===n.UNSIGNED_SHORT&&(ue=n.R16UI),Q===n.UNSIGNED_INT&&(ue=n.R32UI),Q===n.BYTE&&(ue=n.R8I),Q===n.SHORT&&(ue=n.R16I),Q===n.INT&&(ue=n.R32I)),b===n.RG&&(Q===n.FLOAT&&(ue=n.RG32F),Q===n.HALF_FLOAT&&(ue=n.RG16F),Q===n.UNSIGNED_BYTE&&(ue=n.RG8),Q===n.UNSIGNED_SHORT&&Se&&(ue=Se.RG16_EXT),Q===n.SHORT&&Se&&(ue=Se.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ue=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ue=n.RG16UI),Q===n.UNSIGNED_INT&&(ue=n.RG32UI),Q===n.BYTE&&(ue=n.RG8I),Q===n.SHORT&&(ue=n.RG16I),Q===n.INT&&(ue=n.RG32I)),b===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),Q===n.UNSIGNED_INT&&(ue=n.RGB32UI),Q===n.BYTE&&(ue=n.RGB8I),Q===n.SHORT&&(ue=n.RGB16I),Q===n.INT&&(ue=n.RGB32I)),b===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ue=n.RGBA32UI),Q===n.BYTE&&(ue=n.RGBA8I),Q===n.SHORT&&(ue=n.RGBA16I),Q===n.INT&&(ue=n.RGBA32I)),b===n.RGB&&(Q===n.UNSIGNED_SHORT&&Se&&(ue=Se.RGB16_EXT),Q===n.SHORT&&Se&&(ue=Se.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),b===n.RGBA){const ge=be?Nl:vt.getTransfer(fe);Q===n.FLOAT&&(ue=n.RGBA32F),Q===n.HALF_FLOAT&&(ue=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ue=ge===Ut?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Se&&(ue=Se.RGBA16_EXT),Q===n.SHORT&&Se&&(ue=Se.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(V,b){let Q;return V?b===null||b===Zi||b===Zo?Q=n.DEPTH24_STENCIL8:b===Vi?Q=n.DEPTH32F_STENCIL8:b===Ko&&(Q=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Zo?Q=n.DEPTH_COMPONENT24:b===Vi?Q=n.DEPTH_COMPONENT32F:b===Ko&&(Q=n.DEPTH_COMPONENT16),Q}function A(V,b){return x(V)===!0||V.isFramebufferTexture&&V.minFilter!==Mn&&V.minFilter!==An?Math.log2(Math.max(b.width,b.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?b.mipmaps.length:1}function F(V){const b=V.target;b.removeEventListener("dispose",F),E(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function M(V){const b=V.target;b.removeEventListener("dispose",M),U(b)}function E(V){const b=i.get(V);if(b.__webglInit===void 0)return;const Q=V.source,se=p.get(Q);if(se){const fe=se[b.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&L(V),Object.keys(se).length===0&&p.delete(Q)}i.remove(V)}function L(V){const b=i.get(V);n.deleteTexture(b.__webglTexture);const Q=V.source,se=p.get(Q);delete se[b.__cacheKey],o.memory.textures--}function U(V){const b=i.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),i.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let fe=0;fe<b.__webglFramebuffer[se].length;fe++)n.deleteFramebuffer(b.__webglFramebuffer[se][fe]);else n.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)n.deleteFramebuffer(b.__webglFramebuffer[se]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=V.textures;for(let se=0,fe=Q.length;se<fe;se++){const be=i.get(Q[se]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(Q[se])}i.remove(V)}let z=0;function C(){z=0}function k(){return z}function P(V){z=V}function B(){const V=z;return V>=r.maxTextures&&st("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),z+=1,V}function N(V){const b=[];return b.push(V.wrapS),b.push(V.wrapT),b.push(V.wrapR||0),b.push(V.magFilter),b.push(V.minFilter),b.push(V.anisotropy),b.push(V.internalFormat),b.push(V.format),b.push(V.type),b.push(V.generateMipmaps),b.push(V.premultiplyAlpha),b.push(V.flipY),b.push(V.unpackAlignment),b.push(V.colorSpace),b.join()}function G(V,b){const Q=i.get(V);if(V.isVideoTexture&&K(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&Q.__version!==V.version){const se=V.image;if(se===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(Q,V,b);return}}else V.isExternalTexture&&(Q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+b)}function W(V,b){const Q=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Q.__version!==V.version){Qe(Q,V,b);return}else V.isExternalTexture&&(Q.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+b)}function J(V,b){const Q=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Q.__version!==V.version){Qe(Q,V,b);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+b)}function ae(V,b){const Q=i.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&Q.__version!==V.version){nt(Q,V,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+b)}const me={[ru]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[su]:n.MIRRORED_REPEAT},Le={[Mn]:n.NEAREST,[Xx]:n.NEAREST_MIPMAP_NEAREST,[_a]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[kc]:n.LINEAR_MIPMAP_NEAREST,[Zr]:n.LINEAR_MIPMAP_LINEAR},Ne={[Kx]:n.NEVER,[ev]:n.ALWAYS,[Zx]:n.LESS,[Fh]:n.LEQUAL,[jx]:n.EQUAL,[Bh]:n.GEQUAL,[Jx]:n.GREATER,[Qx]:n.NOTEQUAL};function tt(V,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===An||b.magFilter===kc||b.magFilter===_a||b.magFilter===Zr||b.minFilter===An||b.minFilter===kc||b.minFilter===_a||b.minFilter===Zr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,me[b.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,me[b.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,me[b.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,Le[b.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,Le[b.minFilter]),b.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,Ne[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mn||b.minFilter!==_a&&b.minFilter!==Zr||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(V,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function he(V,b){let Q=!1;V.__webglInit===void 0&&(V.__webglInit=!0,b.addEventListener("dispose",F));const se=b.source;let fe=p.get(se);fe===void 0&&(fe={},p.set(se,fe));const be=N(b);if(be!==V.__cacheKey){fe[be]===void 0&&(fe[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),fe[be].usedTimes++;const Se=fe[V.__cacheKey];Se!==void 0&&(fe[V.__cacheKey].usedTimes--,Se.usedTimes===0&&L(b)),V.__cacheKey=be,V.__webglTexture=fe[be].texture}return Q}function we(V,b,Q){return Math.floor(Math.floor(V/Q)/b)}function ve(V,b,Q,se){const be=V.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,Q,se,b.data);else{be.sort((Ye,De)=>Ye.start-De.start);let Se=0;for(let Ye=1;Ye<be.length;Ye++){const De=be[Se],Ee=be[Ye],Xe=De.start+De.count,rt=we(Ee.start,b.width,4),je=we(De.start,b.width,4);Ee.start<=Xe+1&&rt===je&&we(Ee.start+Ee.count-1,b.width,4)===rt?De.count=Math.max(De.count,Ee.start+Ee.count-De.start):(++Se,be[Se]=Ee)}be.length=Se+1;const ue=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let Ye=0,De=be.length;Ye<De;Ye++){const Ee=be[Ye],Xe=Math.floor(Ee.start/4),rt=Math.ceil(Ee.count/4),je=Xe%b.width,X=Math.floor(Xe/b.width),Te=rt,ce=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,je,X,Te,ce,Q,se,b.data)}V.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ue),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Qe(V,b,Q){let se=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=n.TEXTURE_3D);const fe=he(V,b),be=b.source;t.bindTexture(se,V.__webglTexture,n.TEXTURE0+Q);const Se=i.get(be);if(be.version!==Se.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ce=vt.getPrimaries(vt.workingColorSpace),Ce=b.colorSpace===Ar?null:vt.getPrimaries(b.colorSpace),Pe=b.colorSpace===Ar||ce===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let ge=_(b.image,!1,r.maxTextureSize);ge=_n(b,ge);const Me=s.convert(b.format,b.colorSpace),Ye=s.convert(b.type);let De=S(b.internalFormat,Me,Ye,b.normalized,b.colorSpace,b.isVideoTexture);tt(se,b);let Ee;const Xe=b.mipmaps,rt=b.isVideoTexture!==!0,je=Se.__version===void 0||fe===!0,X=be.dataReady,Te=A(b,ge);if(b.isDepthTexture)De=I(b.format===jr,b.type),je&&(rt?t.texStorage2D(n.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Me,Ye,null));else if(b.isDataTexture)if(Xe.length>0){rt&&je&&t.texStorage2D(n.TEXTURE_2D,Te,De,Xe[0].width,Xe[0].height);for(let ce=0,Ce=Xe.length;ce<Ce;ce++)Ee=Xe[ce],rt?X&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,ce,De,Ee.width,Ee.height,0,Me,Ye,Ee.data);b.generateMipmaps=!1}else rt?(je&&t.texStorage2D(n.TEXTURE_2D,Te,De,ge.width,ge.height),X&&ve(b,ge,Me,Ye)):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Me,Ye,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,Xe[0].width,Xe[0].height,ge.depth);for(let ce=0,Ce=Xe.length;ce<Ce;ce++)if(Ee=Xe[ce],b.format!==Ai)if(Me!==null)if(rt){if(X)if(b.layerUpdates.size>0){const Pe=tp(Ee.width,Ee.height,b.format,b.type);for(const xe of b.layerUpdates){const Ke=Ee.data.subarray(xe*Pe/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Pe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,xe,Ee.width,Ee.height,1,Me,Ke)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,ge.depth,Me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,De,Ee.width,Ee.height,ge.depth,0,Ee.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Ee.width,Ee.height,ge.depth,Me,Ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,De,Ee.width,Ee.height,ge.depth,0,Me,Ye,Ee.data)}else{rt&&je&&t.texStorage2D(n.TEXTURE_2D,Te,De,Xe[0].width,Xe[0].height);for(let ce=0,Ce=Xe.length;ce<Ce;ce++)Ee=Xe[ce],b.format!==Ai?Me!==null?rt?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,De,Ee.width,Ee.height,0,Ee.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?X&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,ce,De,Ee.width,Ee.height,0,Me,Ye,Ee.data)}else if(b.isDataArrayTexture)if(rt){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,ge.width,ge.height,ge.depth),X)if(b.layerUpdates.size>0){const ce=tp(ge.width,ge.height,b.format,b.type);for(const Ce of b.layerUpdates){const Pe=ge.data.subarray(Ce*ce/ge.data.BYTES_PER_ELEMENT,(Ce+1)*ce/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,Me,Ye,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Me,Ye,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Me,Ye,ge.data);else if(b.isData3DTexture)rt?(je&&t.texStorage3D(n.TEXTURE_3D,Te,De,ge.width,ge.height,ge.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Me,Ye,ge.data)):t.texImage3D(n.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Me,Ye,ge.data);else if(b.isFramebufferTexture){if(je)if(rt)t.texStorage2D(n.TEXTURE_2D,Te,De,ge.width,ge.height);else{let ce=ge.width,Ce=ge.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,De,ce,Ce,0,Me,Ye,null),ce>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){const ce=n.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ge.parentNode!==ce){ce.appendChild(ge),f.add(b),ce.onpaint=Ce=>{const Pe=Ce.changedElements;for(const xe of f)Pe.includes(xe.image)&&(xe.needsUpdate=!0)},ce.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Pe=n.RGBA,xe=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,xe,Ke,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(rt&&je){const ce=At(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Te,De,ce.width,ce.height)}for(let ce=0,Ce=Xe.length;ce<Ce;ce++)Ee=Xe[ce],rt?X&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Me,Ye,Ee):t.texImage2D(n.TEXTURE_2D,ce,De,Me,Ye,Ee);b.generateMipmaps=!1}else if(rt){if(je){const ce=At(ge);t.texStorage2D(n.TEXTURE_2D,Te,De,ce.width,ce.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ye,ge)}else t.texImage2D(n.TEXTURE_2D,0,De,Me,Ye,ge);x(b)&&T(se),Se.__version=be.version,b.onUpdate&&b.onUpdate(b)}V.__version=b.version}function nt(V,b,Q){if(b.image.length!==6)return;const se=he(V,b),fe=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+Q);const be=i.get(fe);if(fe.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+Q);const Se=vt.getPrimaries(vt.workingColorSpace),ue=b.colorSpace===Ar?null:vt.getPrimaries(b.colorSpace),ge=b.colorSpace===Ar||Se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=b.isCompressedTexture||b.image[0].isCompressedTexture,Ye=b.image[0]&&b.image[0].isDataTexture,De=[];for(let xe=0;xe<6;xe++)!Me&&!Ye?De[xe]=_(b.image[xe],!0,r.maxCubemapSize):De[xe]=Ye?b.image[xe].image:b.image[xe],De[xe]=_n(b,De[xe]);const Ee=De[0],Xe=s.convert(b.format,b.colorSpace),rt=s.convert(b.type),je=S(b.internalFormat,Xe,rt,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Te=be.__version===void 0||se===!0,ce=fe.dataReady;let Ce=A(b,Ee);tt(n.TEXTURE_CUBE_MAP,b);let Pe;if(Me){X&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,je,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){Pe=De[xe].mipmaps;for(let Ke=0;Ke<Pe.length;Ke++){const Ge=Pe[Ke];b.format!==Ai?Xe!==null?X?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Ge.width,Ge.height,Xe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,je,Ge.width,Ge.height,0,Ge.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,Ge.width,Ge.height,Xe,rt,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,je,Ge.width,Ge.height,0,Xe,rt,Ge.data)}}}else{if(Pe=b.mipmaps,X&&Te){Pe.length>0&&Ce++;const xe=At(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,je,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ye){X?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,De[xe].width,De[xe].height,Xe,rt,De[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,je,De[xe].width,De[xe].height,0,Xe,rt,De[xe].data);for(let Ke=0;Ke<Pe.length;Ke++){const qt=Pe[Ke].image[xe].image;X?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,qt.width,qt.height,Xe,rt,qt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,je,qt.width,qt.height,0,Xe,rt,qt.data)}}else{X?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Xe,rt,De[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,je,Xe,rt,De[xe]);for(let Ke=0;Ke<Pe.length;Ke++){const Ge=Pe[Ke];X?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Xe,rt,Ge.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,je,Xe,rt,Ge.image[xe])}}}x(b)&&T(n.TEXTURE_CUBE_MAP),be.__version=fe.version,b.onUpdate&&b.onUpdate(b)}V.__version=b.version}function it(V,b,Q,se,fe,be){const Se=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),ge=S(Q.internalFormat,Se,ue,Q.normalized,Q.colorSpace),Me=i.get(b),Ye=i.get(Q);if(Ye.__renderTarget=b,!Me.__hasExternalTextures){const De=Math.max(1,b.width>>be),Ee=Math.max(1,b.height>>be);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,be,ge,De,Ee,b.depth,0,Se,ue,null):t.texImage2D(fe,be,ge,De,Ee,0,Se,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,V),Zt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,fe,Ye.__webglTexture,0,Lt(b)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,fe,Ye.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(V,b,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,V),b.depthBuffer){const se=b.depthTexture,fe=se&&se.isDepthTexture?se.type:null,be=I(b.stencilBuffer,fe),Se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(b),be,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(b),be,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,be,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,V)}else{const se=b.textures;for(let fe=0;fe<se.length;fe++){const be=se[fe],Se=s.convert(be.format,be.colorSpace),ue=s.convert(be.type),ge=S(be.internalFormat,Se,ue,be.normalized,be.colorSpace);Zt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(b),ge,b.width,b.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(b),ge,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ge,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(V,b,Q){const se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,V),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=i.get(b.depthTexture);if(fe.__renderTarget=b,(!fe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),se){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),fe.__webglTexture===void 0){fe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),tt(n.TEXTURE_CUBE_MAP,b.depthTexture);const Me=s.convert(b.depthTexture.format),Ye=s.convert(b.depthTexture.type);let De;b.depthTexture.format===dr?De=n.DEPTH_COMPONENT24:b.depthTexture.format===jr&&(De=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,De,b.width,b.height,0,Me,Ye,null)}}else G(b.depthTexture,0);const be=fe.__webglTexture,Se=Lt(b),ue=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,ge=b.depthTexture.format===jr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===dr)Zt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ue,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ue,be,0);else if(b.depthTexture.format===jr)Zt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ue,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,ge,ue,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(V){const b=i.get(V),Q=V.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==V.depthTexture){const se=V.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const fe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",fe)};se.addEventListener("dispose",fe),b.__depthDisposeCallback=fe}b.__boundDepthTexture=se}if(V.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let se=0;se<6;se++)Ae(b.__webglFramebuffer[se],V,se);else{const se=V.texture.mipmaps;se&&se.length>0?Ae(b.__webglFramebuffer[0],V,0):Ae(b.__webglFramebuffer,V,0)}else if(Q){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=n.createRenderbuffer(),Xt(b.__webglDepthbuffer[se],V,!1);else{const fe=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,be)}}else{const se=V.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Xt(b.__webglDepthbuffer,V,!1);else{const fe=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(V,b,Q){const se=i.get(V);b!==void 0&&it(se.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&lt(V)}function Oe(V){const b=V.texture,Q=i.get(V),se=i.get(b);V.addEventListener("dispose",M);const fe=V.textures,be=V.isWebGLCubeRenderTarget===!0,Se=fe.length>1;if(Se||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=b.version,o.memory.textures++),be){Q.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ue]=[];for(let ge=0;ge<b.mipmaps.length;ge++)Q.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else Q.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)Q.__webglFramebuffer[ue]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ue=0,ge=fe.length;ue<ge;ue++){const Me=i.get(fe[ue]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(V.samples>0&&Zt(V)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ue=0;ue<fe.length;ue++){const ge=fe[ue];Q.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ue]);const Me=s.convert(ge.format,ge.colorSpace),Ye=s.convert(ge.type),De=S(ge.internalFormat,Me,Ye,ge.normalized,ge.colorSpace,V.isXRRenderTarget===!0),Ee=Lt(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,De,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(Q.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),tt(n.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)it(Q.__webglFramebuffer[ue][ge],V,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else it(Q.__webglFramebuffer[ue],V,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(b)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,ge=fe.length;ue<ge;ue++){const Me=fe[ue],Ye=i.get(Me);let De=n.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(De=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ye.__webglTexture),tt(De,Me),it(Q.__webglFramebuffer,V,Me,n.COLOR_ATTACHMENT0+ue,De,0),x(Me)&&T(De)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ue=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,se.__webglTexture),tt(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)it(Q.__webglFramebuffer[ge],V,b,n.COLOR_ATTACHMENT0,ue,ge);else it(Q.__webglFramebuffer,V,b,n.COLOR_ATTACHMENT0,ue,0);x(b)&&T(ue),t.unbindTexture()}V.depthBuffer&&lt(V)}function Mt(V){const b=V.textures;for(let Q=0,se=b.length;Q<se;Q++){const fe=b[Q];if(x(fe)){const be=R(V),Se=i.get(fe).__webglTexture;t.bindTexture(be,Se),T(be),t.unbindTexture()}}}const Rt=[],Bt=[];function Ct(V){if(V.samples>0){if(Zt(V)===!1){const b=V.textures,Q=V.width,se=V.height;let fe=n.COLOR_BUFFER_BIT;const be=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(V),ue=b.length>1;if(ue)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ge=V.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(b[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,Q,se,0,0,Q,se,fe,n.NEAREST),c===!0&&(Rt.length=0,Bt.length=0,Rt.push(n.COLOR_ATTACHMENT0+Me),V.depthBuffer&&V.resolveDepthBuffer===!1&&(Rt.push(be),Bt.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(b[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&c){const b=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Lt(V){return Math.min(r.maxSamples,V.samples)}function Zt(V){const b=i.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function K(V){const b=o.render.frame;h.get(V)!==b&&(h.set(V,b),V.update())}function _n(V,b){const Q=V.colorSpace,se=V.format,fe=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||Q!==Ll&&Q!==Ar&&(vt.getTransfer(Q)===Ut?(se!==Ai||fe!==ni)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Q)),b}function At(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(l.width=V.naturalWidth||V.width,l.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(l.width=V.displayWidth,l.height=V.displayHeight):(l.width=V.width,l.height=V.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=C,this.getTextureUnits=k,this.setTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=ae,this.rebindTextures=Ze,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Jb(n,e){function t(i,r=Ar){let s;const o=vt.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Ih)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===j0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===J0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===K0)return n.BYTE;if(i===Z0)return n.SHORT;if(i===Ko)return n.UNSIGNED_SHORT;if(i===Ph)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===Q0)return n.ALPHA;if(i===eg)return n.RGB;if(i===Ai)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===jr)return n.DEPTH_STENCIL;if(i===Lh)return n.RED;if(i===Nh)return n.RED_INTEGER;if(i===is)return n.RG;if(i===Oh)return n.RG_INTEGER;if(i===Uh)return n.RGBA_INTEGER;if(i===_l||i===xl||i===vl||i===yl)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ou||i===au||i===lu||i===cu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fu||i===uu||i===hu||i===du||i===pu||i===Il||i===mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fu||i===uu)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===du)return s.COMPRESSED_R11_EAC;if(i===pu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Il)return s.COMPRESSED_RG11_EAC;if(i===mu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gu||i===_u||i===xu||i===vu||i===yu||i===Su||i===Mu||i===Eu||i===bu||i===wu||i===Tu||i===Au||i===Ru||i===Cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_u)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Su)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Mu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Eu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Au)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ru)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pu||i===Iu||i===Du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pu)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lu||i===Nu||i===Dl||i===Ou)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ou)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new pg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pi({vertexShader:Qb,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new wc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends as{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,m=null;const v=typeof XRWebGLBinding<"u",_=new t1,x={},T=t.getContextAttributes();let R=null,S=null;const I=[],A=[],F=new ht;let M=null;const E=new hi;E.viewport=new zt;const L=new hi;L.viewport=new zt;const U=[E,L],z=new ay;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let we=I[he];return we===void 0&&(we=new Xc,I[he]=we),we.getTargetRaySpace()},this.getControllerGrip=function(he){let we=I[he];return we===void 0&&(we=new Xc,I[he]=we),we.getGripSpace()},this.getHand=function(he){let we=I[he];return we===void 0&&(we=new Xc,I[he]=we),we.getHandSpace()};function P(he){const we=A.indexOf(he.inputSource);if(we===-1)return;const ve=I[we];ve!==void 0&&(ve.update(he.inputSource,he.frame,l||o),ve.dispatchEvent({type:he.type,data:he.inputSource}))}function B(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",N);for(let he=0;he<I.length;he++){const we=A[he];we!==null&&(A[he]=null,I[he].disconnect(we))}C=null,k=null,_.reset();for(const he in x)delete x[he];e.setRenderTarget(R),p=null,u=null,f=null,r=null,S=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",B),r.addEventListener("inputsourceschange",N),T.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(F),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Qe=null,nt=null;T.depth&&(nt=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?jr:dr,Qe=T.stencil?Zo:Zi);const it={colorFormat:t.RGBA8,depthFormat:nt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(it),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new $i(u.textureWidth,u.textureHeight,{format:Ai,type:ni,depthTexture:new Ks(u.textureWidth,u.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $i(p.framebufferWidth,p.framebufferHeight,{format:Ai,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function N(he){for(let we=0;we<he.removed.length;we++){const ve=he.removed[we],Qe=A.indexOf(ve);Qe>=0&&(A[Qe]=null,I[Qe].disconnect(ve))}for(let we=0;we<he.added.length;we++){const ve=he.added[we];let Qe=A.indexOf(ve);if(Qe===-1){for(let it=0;it<I.length;it++)if(it>=A.length){A.push(ve),Qe=it;break}else if(A[it]===null){A[it]=ve,Qe=it;break}if(Qe===-1)break}const nt=I[Qe];nt&&nt.connect(ve)}}const G=new $,W=new $;function J(he,we,ve){G.setFromMatrixPosition(we.matrixWorld),W.setFromMatrixPosition(ve.matrixWorld);const Qe=G.distanceTo(W),nt=we.projectionMatrix.elements,it=ve.projectionMatrix.elements,Xt=nt[14]/(nt[10]-1),Ae=nt[14]/(nt[10]+1),lt=(nt[9]+1)/nt[5],Ze=(nt[9]-1)/nt[5],Oe=(nt[8]-1)/nt[0],Mt=(it[8]+1)/it[0],Rt=Xt*Oe,Bt=Xt*Mt,Ct=Qe/(-Oe+Mt),Lt=Ct*-Oe;if(we.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Lt),he.translateZ(Ct),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),nt[10]===-1)he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const Zt=Xt+Ct,K=Ae+Ct,_n=Rt-Lt,At=Bt+(Qe-Lt),V=lt*Ae/K*Zt,b=Ze*Ae/K*Zt;he.projectionMatrix.makePerspective(_n,At,V,b,Zt,K),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function ae(he,we){we===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(we.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let we=he.near,ve=he.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),z.near=L.near=E.near=we,z.far=L.far=E.far=ve,(C!==z.near||k!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,k=z.far),z.layers.mask=he.layers.mask|6,E.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const Qe=he.parent,nt=z.cameras;ae(z,Qe);for(let it=0;it<nt.length;it++)ae(nt[it],Qe);nt.length===2?J(z,E,L):z.projectionMatrix.copy(E.projectionMatrix),me(he,z,Qe)};function me(he,we,ve){ve===null?he.matrix.copy(we.matrixWorld):(he.matrix.copy(ve.matrixWorld),he.matrix.invert(),he.matrix.multiply(we.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Jo*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(he){c=he,u!==null&&(u.fixedFoveation=he),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=he)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(he){return x[he]};let Le=null;function Ne(he,we){if(h=we.getViewerPose(l||o),m=we,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Qe=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Qe=!0);for(let Ae=0;Ae<ve.length;Ae++){const lt=ve[Ae];let Ze=null;if(p!==null)Ze=p.getViewport(lt);else{const Mt=f.getViewSubImage(u,lt);Ze=Mt.viewport,Ae===0&&(e.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(S))}let Oe=U[Ae];Oe===void 0&&(Oe=new hi,Oe.layers.enable(Ae),Oe.viewport=new zt,U[Ae]=Oe),Oe.matrix.fromArray(lt.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(lt.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ae===0&&(z.matrix.copy(Oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Qe===!0&&z.cameras.push(Oe)}const nt=r.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Ae=f.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(Ae,r.renderState)}if(nt&&nt.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ae=0;Ae<ve.length;Ae++){const lt=ve[Ae].camera;if(lt){let Ze=x[lt];Ze||(Ze=new pg,x[lt]=Ze);const Oe=f.getCameraImage(lt);Ze.sourceTexture=Oe}}}}for(let ve=0;ve<I.length;ve++){const Qe=A[ve],nt=I[ve];Qe!==null&&nt!==void 0&&nt.update(Qe,we,l||o)}Le&&Le(he,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),m=null}const tt=new _g;tt.setAnimationLoop(Ne),this.setAnimationLoop=function(he){Le=he},this.dispose=function(){}}}const i1=new $t,bg=new ft;bg.set(-1,0,0,0,1,0,0,0,1);function r1(n,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,mg(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function r(_,x,T,R,S){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(_,x):x.isMeshLambertMaterial?(s(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(_,x),f(_,x)):x.isMeshPhongMaterial?(s(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(_,x),u(_,x),x.isMeshPhysicalMaterial&&p(_,x,S)):x.isMeshMatcapMaterial?(s(_,x),m(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),v(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(o(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?c(_,x,T,R):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Vn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Vn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const T=e.get(x),R=T.envMap,S=T.envMapRotation;R&&(_.envMap.value=R,_.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(S)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(bg),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function o(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function c(_,x,T,R){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*T,_.scale.value=R*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function f(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function u(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function p(_,x,T){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,x){x.matcap&&(_.matcap.value=x.matcap)}function v(_,x){const T=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function s1(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,I){const A=I.program;i.uniformBlockBinding(S,A)}function l(S,I){let A=r[S.id];A===void 0&&(_(S),A=h(S),r[S.id]=A,S.addEventListener("dispose",T));const F=I.program;i.updateUBOMapping(S,F);const M=e.render.frame;s[S.id]!==M&&(u(S),s[S.id]=M)}function h(S){const I=f();S.__bindingPointIndex=I;const A=n.createBuffer(),F=S.__size,M=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,F,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,A),A}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const I=r[S.id],A=S.uniforms,F=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let M=0,E=A.length;M<E;M++){const L=A[M];if(Array.isArray(L))for(let U=0,z=L.length;U<z;U++)p(L[U],M,U,F);else p(L,M,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,I,A,F){if(v(S,I,A,F)===!0){const M=S.__offset,E=S.value;if(Array.isArray(E)){let L=0;for(let U=0;U<E.length;U++){const z=E[U],C=x(z);m(z,S.__data,L),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(L+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,M,S.__data)}}function m(S,I,A){typeof S=="number"||typeof S=="boolean"?I[0]=S:S.isMatrix3?(I[0]=S.elements[0],I[1]=S.elements[1],I[2]=S.elements[2],I[3]=0,I[4]=S.elements[3],I[5]=S.elements[4],I[6]=S.elements[5],I[7]=0,I[8]=S.elements[6],I[9]=S.elements[7],I[10]=S.elements[8],I[11]=0):ArrayBuffer.isView(S)?I.set(new S.constructor(S.buffer,S.byteOffset,I.length)):S.toArray(I,A)}function v(S,I,A,F){const M=S.value,E=I+"_"+A;if(F[E]===void 0)return typeof M=="number"||typeof M=="boolean"?F[E]=M:ArrayBuffer.isView(M)?F[E]=M.slice():F[E]=M.clone(),!0;{const L=F[E];if(typeof M=="number"||typeof M=="boolean"){if(L!==M)return F[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(L.equals(M)===!1)return L.copy(M),!0}}return!1}function _(S){const I=S.uniforms;let A=0;const F=16;for(let E=0,L=I.length;E<L;E++){const U=Array.isArray(I[E])?I[E]:[I[E]];for(let z=0,C=U.length;z<C;z++){const k=U[z],P=Array.isArray(k.value)?k.value:[k.value];for(let B=0,N=P.length;B<N;B++){const G=P[B],W=x(G),J=A%F,ae=J%W.boundary,me=J+ae;A+=ae,me!==0&&F-me<W.storage&&(A+=F-me),k.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=W.storage}}}const M=A%F;return M>0&&(A+=F-M),S.__size=A,S.__cache={},this}function x(S){const I={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(I.boundary=4,I.storage=4):S.isVector2?(I.boundary=8,I.storage=8):S.isVector3||S.isColor?(I.boundary=16,I.storage=12):S.isVector4?(I.boundary=16,I.storage=16):S.isMatrix3?(I.boundary=48,I.storage=48):S.isMatrix4?(I.boundary=64,I.storage=64):S.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(I.boundary=16,I.storage=S.byteLength):st("WebGLRenderer: Unsupported uniform value type.",S),I}function T(S){const I=S.target;I.removeEventListener("dispose",T);const A=o.indexOf(I.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function R(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:R}}const o1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function a1(){return Oi===null&&(Oi=new ug(o1,16,16,is,hr),Oi.name="DFG_LUT",Oi.minFilter=An,Oi.magFilter=An,Oi.wrapS=sr,Oi.wrapT=sr,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class l1{constructor(e={}){const{canvas:t=nv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ni}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=p,_=new Set([Uh,Oh,Nh]),x=new Set([ni,Zi,Ko,Zo,Ih,Dh]),T=new Uint32Array(4),R=new Int32Array(4),S=new $;let I=null,A=null;const F=[],M=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let U=!1,z=null,C=null,k=null,P=null;this._outputColorSpace=fi;let B=0,N=0,G=null,W=-1,J=null;const ae=new zt,me=new zt;let Le=null;const Ne=new _t(0);let tt=0,he=t.width,we=t.height,ve=1,Qe=null,nt=null;const it=new zt(0,0,he,we),Xt=new zt(0,0,he,we);let Ae=!1;const lt=new Vh;let Ze=!1,Oe=!1;const Mt=new $t,Rt=new $,Bt=new zt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Zt(){return G===null?ve:1}let K=i;function _n(O,Y){return t.getContext(O,Y)}try{const O={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ch}`),t.addEventListener("webglcontextlost",qt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),K===null){const Y="webgl2";if(K=_n(Y,O),K===null)throw _n(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(O){throw Et("WebGLRenderer: "+O.message),O}let At,V,b,Q,se,fe,be,Se,ue,ge,Me,Ye,De,Ee,Xe,rt,je,X,Te,ce,Ce,Pe,xe;function Ke(){At=new aE(K),At.init(),Ce=new Jb(K,At),V=new QM(K,At,e,Ce),b=new Zb(K,At),V.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),C=K.createFramebuffer(),k=K.createFramebuffer(),P=K.createFramebuffer(),Q=new fE(K),se=new Ub,fe=new jb(K,At,b,se,V,Ce,Q),be=new oE(L),Se=new py(K),Pe=new jM(K,Se),ue=new lE(K,Se,Q,Pe),ge=new hE(K,ue,Se,Pe,Q),X=new uE(K,V,fe),Xe=new eE(se),Me=new Ob(L,be,At,V,Pe,Xe),Ye=new r1(L,se),De=new Bb,Ee=new Wb(At),je=new ZM(L,be,b,ge,m,c),rt=new Kb(L,ge,V),xe=new s1(K,Q,V,b),Te=new JM(K,At,Q),ce=new cE(K,At,Q),Q.programs=Me.programs,L.capabilities=V,L.extensions=At,L.properties=se,L.renderLists=De,L.shadowMap=rt,L.state=b,L.info=Q}Ke(),v!==ni&&(E=new pE(v,t.width,t.height,a,r,s));const Ge=new n1(L,K);this.xr=Ge,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const O=At.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=At.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(O){O!==void 0&&(ve=O,this.setSize(he,we,!1))},this.getSize=function(O){return O.set(he,we)},this.setSize=function(O,Y,oe=!0){if(Ge.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}he=O,we=Y,t.width=Math.floor(O*ve),t.height=Math.floor(Y*ve),oe===!0&&(t.style.width=O+"px",t.style.height=Y+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,O,Y)},this.getDrawingBufferSize=function(O){return O.set(he*ve,we*ve).floor()},this.setDrawingBufferSize=function(O,Y,oe){he=O,we=Y,ve=oe,t.width=Math.floor(O*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,O,Y)},this.setEffects=function(O){if(v===ni){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let Y=0;Y<O.length;Y++)if(O[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(ae)},this.getViewport=function(O){return O.copy(it)},this.setViewport=function(O,Y,oe,ne){O.isVector4?it.set(O.x,O.y,O.z,O.w):it.set(O,Y,oe,ne),b.viewport(ae.copy(it).multiplyScalar(ve).round())},this.getScissor=function(O){return O.copy(Xt)},this.setScissor=function(O,Y,oe,ne){O.isVector4?Xt.set(O.x,O.y,O.z,O.w):Xt.set(O,Y,oe,ne),b.scissor(me.copy(Xt).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(O){b.setScissorTest(Ae=O)},this.setOpaqueSort=function(O){Qe=O},this.setTransparentSort=function(O){nt=O},this.getClearColor=function(O){return O.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(O=!0,Y=!0,oe=!0){let ne=0;if(O){let re=!1;if(G!==null){const Ue=G.texture.format;re=_.has(Ue)}if(re){const Ue=G.texture.type,Ve=x.has(Ue),Fe=je.getClearColor(),qe=je.getClearAlpha(),Je=Fe.r,We=Fe.g,ot=Fe.b;Ve?(T[0]=Je,T[1]=We,T[2]=ot,T[3]=qe,K.clearBufferuiv(K.COLOR,0,T)):(R[0]=Je,R[1]=We,R[2]=ot,R[3]=qe,K.clearBufferiv(K.COLOR,0,R))}else ne|=K.COLOR_BUFFER_BIT}Y&&(ne|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&K.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),z=O},this.dispose=function(){t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),je.dispose(),De.dispose(),Ee.dispose(),se.dispose(),be.dispose(),ge.dispose(),Pe.dispose(),xe.dispose(),Me.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",fo),Ge.removeEventListener("sessionend",uo),ji.stop()};function qt(O){O.preventDefault(),Ul("WebGLRenderer: Context Lost."),U=!0}function Nt(){Ul("WebGLRenderer: Context Restored."),U=!1;const O=Q.autoReset,Y=rt.enabled,oe=rt.autoUpdate,ne=rt.needsUpdate,re=rt.type;Ke(),Q.autoReset=O,rt.enabled=Y,rt.autoUpdate=oe,rt.needsUpdate=ne,rt.type=re}function Hn(O){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Kn(O){const Y=O.target;Y.removeEventListener("dispose",Kn),ls(Y)}function ls(O){Uc(O),se.remove(O)}function Uc(O){const Y=se.get(O).programs;Y!==void 0&&(Y.forEach(function(oe){Me.releaseProgram(oe)}),O.isShaderMaterial&&Me.releaseShaderCache(O))}this.renderBufferDirect=function(O,Y,oe,ne,re,Ue){Y===null&&(Y=Ct);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Fe=xr(O,Y,oe,ne,re);b.setMaterial(ne,Ve);let qe=oe.index,Je=1;if(ne.wireframe===!0){if(qe=ue.getWireframeAttribute(oe),qe===void 0)return;Je=2}const We=oe.drawRange,ot=oe.attributes.position;let et=We.start*Je,bt=(We.start+We.count)*Je;Ue!==null&&(et=Math.max(et,Ue.start*Je),bt=Math.min(bt,(Ue.start+Ue.count)*Je)),qe!==null?(et=Math.max(et,0),bt=Math.min(bt,qe.count)):ot!=null&&(et=Math.max(et,0),bt=Math.min(bt,ot.count));const Kt=bt-et;if(Kt<0||Kt===1/0)return;Pe.setup(re,ne,Fe,oe,qe);let Yt,Ot=Te;if(qe!==null&&(Yt=Se.get(qe),Ot=ce,Ot.setIndex(Yt)),re.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*Zt()),Ot.setMode(K.LINES)):Ot.setMode(K.TRIANGLES);else if(re.isLine){let sn=ne.linewidth;sn===void 0&&(sn=1),b.setLineWidth(sn*Zt()),re.isLineSegments?Ot.setMode(K.LINES):re.isLineLoop?Ot.setMode(K.LINE_LOOP):Ot.setMode(K.LINE_STRIP)}else re.isPoints?Ot.setMode(K.POINTS):re.isSprite&&Ot.setMode(K.TRIANGLES);if(re.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Ot.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const sn=re._multiDrawStarts,ze=re._multiDrawCounts,on=re._multiDrawCount,pt=qe?Se.get(qe).bytesPerElement:1,Wn=se.get(ne).currentProgram.getUniforms();for(let si=0;si<on;si++)Wn.setValue(K,"_gl_DrawID",si),Ot.render(sn[si]/pt,ze[si])}else if(re.isInstancedMesh)Ot.renderInstances(et,Kt,re.count);else if(oe.isInstancedBufferGeometry){const sn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,sn);Ot.renderInstances(et,Kt,ze)}else Ot.render(et,Kt)};function lo(O,Y,oe){O.transparent===!0&&O.side===bi&&O.forceSinglePass===!1?(O.side=Vn,O.needsUpdate=!0,Ur(O,Y,oe),O.side=Dr,O.needsUpdate=!0,Ur(O,Y,oe),O.side=bi):Ur(O,Y,oe)}this.compile=function(O,Y,oe=null){oe===null&&(oe=O),A=Ee.get(oe),A.init(Y),M.push(A),oe.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),O!==oe&&O.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),A.setupLights();const ne=new Set;return O.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ue=re.material;if(Ue)if(Array.isArray(Ue))for(let Ve=0;Ve<Ue.length;Ve++){const Fe=Ue[Ve];lo(Fe,oe,re),ne.add(Fe)}else lo(Ue,oe,re),ne.add(Ue)}),A=M.pop(),ne},this.compileAsync=function(O,Y,oe=null){const ne=this.compile(O,Y,oe);return new Promise(re=>{function Ue(){if(ne.forEach(function(Ve){se.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){re(O);return}setTimeout(Ue,10)}At.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let co=null;function cs(O){co&&co(O)}function fo(){ji.stop()}function uo(){ji.start()}const ji=new _g;ji.setAnimationLoop(cs),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(O){co=O,Ge.setAnimationLoop(O),O===null?ji.stop():ji.start()},Ge.addEventListener("sessionstart",fo),Ge.addEventListener("sessionend",uo),this.render=function(O,Y){if(Y!==void 0&&Y.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(O,Y);const oe=Ge.enabled===!0&&Ge.isPresenting===!0,ne=E!==null&&(G===null||oe)&&E.begin(L,G);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(Y),Y=Ge.getCamera()),O.isScene===!0&&O.onBeforeRender(L,O,Y,G),A=Ee.get(O,M.length),A.init(Y),A.state.textureUnits=fe.getTextureUnits(),M.push(A),Mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),lt.setFromProjectionMatrix(Mt,Hi,Y.reversedDepth),Oe=this.localClippingEnabled,Ze=Xe.init(this.clippingPlanes,Oe),I=De.get(O,F.length),I.init(),F.push(I),Ge.enabled===!0&&Ge.isPresenting===!0){const Ve=L.xr.getDepthSensingMesh();Ve!==null&&Pn(Ve,Y,-1/0,L.sortObjects)}Pn(O,Y,0,L.sortObjects),I.finish(),L.sortObjects===!0&&I.sort(Qe,nt,Y.reversedDepth),Lt=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,Lt&&je.addToRenderList(I,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Xe.beginShadows();const re=A.state.shadowsArray;if(rt.render(re,O,Y),Ze===!0&&Xe.endShadows(),(ne&&E.hasRenderPass())===!1){const Ve=I.opaque,Fe=I.transmissive;if(A.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Fe.length>0)for(let Je=0,We=qe.length;Je<We;Je++){const ot=qe[Je];po(Ve,Fe,O,ot)}Lt&&je.render(O);for(let Je=0,We=qe.length;Je<We;Je++){const ot=qe[Je];ho(I,O,ot,ot.viewport)}}else Fe.length>0&&po(Ve,Fe,O,Y),Lt&&je.render(O),ho(I,O,Y)}G!==null&&N===0&&(fe.updateMultisampleRenderTarget(G),fe.updateRenderTargetMipmap(G)),ne&&E.end(L),O.isScene===!0&&O.onAfterRender(L,O,Y),Pe.resetDefaultState(),W=-1,J=null,M.pop(),M.length>0?(A=M[M.length-1],fe.setTextureUnits(A.state.textureUnits),Ze===!0&&Xe.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,z!==null&&z.renderEnd()};function Pn(O,Y,oe,ne){if(O.visible===!1)return;if(O.layers.test(Y.layers)){if(O.isGroup)oe=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Y);else if(O.isLightProbeGrid)A.pushLightProbeGrid(O);else if(O.isLight)A.pushLight(O),O.castShadow&&A.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||lt.intersectsSprite(O)){ne&&Bt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Mt);const Ve=ge.update(O),Fe=O.material;Fe.visible&&I.push(O,Ve,Fe,oe,Bt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||lt.intersectsObject(O))){const Ve=ge.update(O),Fe=O.material;if(ne&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Bt.copy(O.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Bt.copy(Ve.boundingSphere.center)),Bt.applyMatrix4(O.matrixWorld).applyMatrix4(Mt)),Array.isArray(Fe)){const qe=Ve.groups;for(let Je=0,We=qe.length;Je<We;Je++){const ot=qe[Je],et=Fe[ot.materialIndex];et&&et.visible&&I.push(O,Ve,et,oe,Bt.z,ot)}}else Fe.visible&&I.push(O,Ve,Fe,oe,Bt.z,null)}}const Ue=O.children;for(let Ve=0,Fe=Ue.length;Ve<Fe;Ve++)Pn(Ue[Ve],Y,oe,ne)}function ho(O,Y,oe,ne){const{opaque:re,transmissive:Ue,transparent:Ve}=O;A.setupLightsView(oe),Ze===!0&&Xe.setGlobalState(L.clippingPlanes,oe),ne&&b.viewport(ae.copy(ne)),re.length>0&&Gn(re,Y,oe),Ue.length>0&&Gn(Ue,Y,oe),Ve.length>0&&Gn(Ve,Y,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function po(O,Y,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ne.id]===void 0){const et=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ne.id]=new $i(1,1,{generateMipmaps:!0,type:et?hr:ni,minFilter:Zr,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ue=A.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||ae;Ue.setSize(Ve.z*L.transmissionResolutionScale,Ve.w*L.transmissionResolutionScale);const Fe=L.getRenderTarget(),qe=L.getActiveCubeFace(),Je=L.getActiveMipmapLevel();L.setRenderTarget(Ue),L.getClearColor(Ne),tt=L.getClearAlpha(),tt<1&&L.setClearColor(16777215,.5),L.clear(),Lt&&je.render(oe);const We=L.toneMapping;L.toneMapping=Wi;const ot=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),A.setupLightsView(ne),Ze===!0&&Xe.setGlobalState(L.clippingPlanes,ne),Gn(O,oe,ne),fe.updateMultisampleRenderTarget(Ue),fe.updateRenderTargetMipmap(Ue),At.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let bt=0,Kt=Y.length;bt<Kt;bt++){const Yt=Y[bt],{object:Ot,geometry:sn,material:ze,group:on}=Yt;if(ze.side===bi&&Ot.layers.test(ne.layers)){const pt=ze.side;ze.side=Vn,ze.needsUpdate=!0,mo(Ot,oe,ne,sn,ze,on),ze.side=pt,ze.needsUpdate=!0,et=!0}}et===!0&&(fe.updateMultisampleRenderTarget(Ue),fe.updateRenderTargetMipmap(Ue))}L.setRenderTarget(Fe,qe,Je),L.setClearColor(Ne,tt),ot!==void 0&&(ne.viewport=ot),L.toneMapping=We}function Gn(O,Y,oe){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let re=0,Ue=O.length;re<Ue;re++){const Ve=O[re],{object:Fe,geometry:qe,group:Je}=Ve;let We=Ve.material;We.allowOverride===!0&&ne!==null&&(We=ne),Fe.layers.test(oe.layers)&&mo(Fe,Y,oe,qe,We,Je)}}function mo(O,Y,oe,ne,re,Ue){O.onBeforeRender(L,Y,oe,ne,re,Ue),O.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),re.onBeforeRender(L,Y,oe,ne,O,Ue),re.transparent===!0&&re.side===bi&&re.forceSinglePass===!1?(re.side=Vn,re.needsUpdate=!0,L.renderBufferDirect(oe,Y,ne,re,O,Ue),re.side=Dr,re.needsUpdate=!0,L.renderBufferDirect(oe,Y,ne,re,O,Ue),re.side=bi):L.renderBufferDirect(oe,Y,ne,re,O,Ue),O.onAfterRender(L,Y,oe,ne,re,Ue)}function Ur(O,Y,oe){Y.isScene!==!0&&(Y=Ct);const ne=se.get(O),re=A.state.lights,Ue=A.state.shadowsArray,Ve=re.state.version,Fe=Me.getParameters(O,re.state,Ue,Y,oe,A.state.lightProbeGridArray),qe=Me.getProgramCacheKey(Fe);let Je=ne.programs;ne.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const We=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;ne.envMap=be.get(O.envMap||ne.environment,We),ne.envMapRotation=ne.environment!==null&&O.envMap===null?Y.environmentRotation:O.envMapRotation,Je===void 0&&(O.addEventListener("dispose",Kn),Je=new Map,ne.programs=Je);let ot=Je.get(qe);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===Ve)return go(O,Fe),ot}else Fe.uniforms=Me.getUniforms(O),z!==null&&O.isNodeMaterial&&z.build(O,oe,Fe),O.onBeforeCompile(Fe,L),ot=Me.acquireProgram(Fe,qe),Je.set(qe,ot),ne.uniforms=Fe.uniforms;const et=ne.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(et.clippingPlanes=Xe.uniform),go(O,Fe),ne.needsLights=Fc(O),ne.lightsStateVersion=Ve,ne.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.lightProbeGrid=A.state.lightProbeGridArray.length>0,ne.currentProgram=ot,ne.uniformsList=null,ot}function Ji(O){if(O.uniformsList===null){const Y=O.currentProgram.getUniforms();O.uniformsList=Sl.seqWithValue(Y.seq,O.uniforms)}return O.uniformsList}function go(O,Y){const oe=se.get(O);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ga(O,Y){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;S.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ne=O.length;oe<ne;oe++){const re=O[oe];if(re.texture!==null&&re.boundingBox.containsPoint(S))return re}return null}function xr(O,Y,oe,ne,re){Y.isScene!==!0&&(Y=Ct),fe.resetTextureUnits();const Ue=Y.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Fe=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=be.get(ne.envMap||Ve,qe),We=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!oe.morphAttributes.position,bt=!!oe.morphAttributes.normal,Kt=!!oe.morphAttributes.color;let Yt=Wi;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Yt=L.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,sn=Ot!==void 0?Ot.length:0,ze=se.get(ne),on=A.state.lights;if(Ze===!0&&(Oe===!0||O!==J)){const wt=O===J&&ne.id===W;Xe.setState(ne,O,wt)}let pt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==on.state.version||ze.outputColorSpace!==Fe||re.isBatchedMesh&&ze.batching===!1||!re.isBatchedMesh&&ze.batching===!0||re.isBatchedMesh&&ze.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&ze.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&ze.instancing===!1||!re.isInstancedMesh&&ze.instancing===!0||re.isSkinnedMesh&&ze.skinning===!1||!re.isSkinnedMesh&&ze.skinning===!0||re.isInstancedMesh&&ze.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ze.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&ze.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&ze.instancingMorph===!1&&re.morphTexture!==null||ze.envMap!==Je||ne.fog===!0&&ze.fog!==Ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Xe.numPlanes||ze.numIntersection!==Xe.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==ot||ze.morphTargets!==et||ze.morphNormals!==bt||ze.morphColors!==Kt||ze.toneMapping!==Yt||ze.morphTargetsCount!==sn||!!ze.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ze.__version=ne.version);let Wn=ze.currentProgram;pt===!0&&(Wn=Ur(ne,Y,re),z&&ne.isNodeMaterial&&z.onUpdateProgram(ne,Wn,ze));let si=!1,Di=!1,xn=!1;const gt=Wn.getUniforms(),Pt=ze.uniforms;if(b.useProgram(Wn.program)&&(si=!0,Di=!0,xn=!0),ne.id!==W&&(W=ne.id,Di=!0),ze.needsLights){const wt=ga(A.state.lightProbeGridArray,re);ze.lightProbeGrid!==wt&&(ze.lightProbeGrid=wt,Di=!0)}if(si||J!==O){b.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),gt.setValue(K,"projectionMatrix",O.projectionMatrix),gt.setValue(K,"viewMatrix",O.matrixWorldInverse);const Dn=gt.map.cameraPosition;Dn!==void 0&&Dn.setValue(K,Rt.setFromMatrixPosition(O.matrixWorld)),V.logarithmicDepthBuffer&&gt.setValue(K,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&gt.setValue(K,"isOrthographic",O.isOrthographicCamera===!0),J!==O&&(J=O,Di=!0,xn=!0)}if(ze.needsLights&&(on.state.directionalShadowMap.length>0&&gt.setValue(K,"directionalShadowMap",on.state.directionalShadowMap,fe),on.state.spotShadowMap.length>0&&gt.setValue(K,"spotShadowMap",on.state.spotShadowMap,fe),on.state.pointShadowMap.length>0&&gt.setValue(K,"pointShadowMap",on.state.pointShadowMap,fe)),re.isSkinnedMesh){gt.setOptional(K,re,"bindMatrix"),gt.setOptional(K,re,"bindMatrixInverse");const wt=re.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),gt.setValue(K,"boneTexture",wt.boneTexture,fe))}re.isBatchedMesh&&(gt.setOptional(K,re,"batchingTexture"),gt.setValue(K,"batchingTexture",re._matricesTexture,fe),gt.setOptional(K,re,"batchingIdTexture"),gt.setValue(K,"batchingIdTexture",re._indirectTexture,fe),gt.setOptional(K,re,"batchingColorTexture"),re._colorsTexture!==null&&gt.setValue(K,"batchingColorTexture",re._colorsTexture,fe));const In=oe.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&X.update(re,oe,Wn),(Di||ze.receiveShadow!==re.receiveShadow)&&(ze.receiveShadow=re.receiveShadow,gt.setValue(K,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(Pt.envMapIntensity.value=Y.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=a1()),Di){if(gt.setValue(K,"toneMappingExposure",L.toneMappingExposure),ze.needsLights&&gi(Pt,xn),Ue&&ne.fog===!0&&Ye.refreshFogUniforms(Pt,Ue),Ye.refreshMaterialUniforms(Pt,ne,ve,we,A.state.transmissionRenderTarget[O.id]),ze.needsLights&&ze.lightProbeGrid){const wt=ze.lightProbeGrid;Pt.probesSH.value=wt.texture,Pt.probesMin.value.copy(wt.boundingBox.min),Pt.probesMax.value.copy(wt.boundingBox.max),Pt.probesResolution.value.copy(wt.resolution)}Sl.upload(K,Ji(ze),Pt,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Sl.upload(K,Ji(ze),Pt,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&gt.setValue(K,"center",re.center),gt.setValue(K,"modelViewMatrix",re.modelViewMatrix),gt.setValue(K,"normalMatrix",re.normalMatrix),gt.setValue(K,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const wt=ne.uniformsGroups;for(let Dn=0,_i=wt.length;Dn<_i;Dn++){const D=wt[Dn];xe.update(D,Wn),xe.bind(D,Wn)}}return Wn}function gi(O,Y){O.ambientLightColor.needsUpdate=Y,O.lightProbe.needsUpdate=Y,O.directionalLights.needsUpdate=Y,O.directionalLightShadows.needsUpdate=Y,O.pointLights.needsUpdate=Y,O.pointLightShadows.needsUpdate=Y,O.spotLights.needsUpdate=Y,O.spotLightShadows.needsUpdate=Y,O.rectAreaLights.needsUpdate=Y,O.hemisphereLights.needsUpdate=Y}function Fc(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(O,Y,oe){const ne=se.get(O);ne.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(O.texture).__webglTexture=Y,se.get(O.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,Y){const oe=se.get(O);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(O,Y=0,oe=0){G=O,B=Y,N=oe;let ne=null,re=!1,Ue=!1;if(O){const Fe=se.get(O);if(Fe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(K.FRAMEBUFFER,Fe.__webglFramebuffer),ae.copy(O.viewport),me.copy(O.scissor),Le=O.scissorTest,b.viewport(ae),b.scissor(me),b.setScissorTest(Le),W=-1;return}else if(Fe.__webglFramebuffer===void 0)fe.setupRenderTarget(O);else if(Fe.__hasExternalTextures)fe.rebindTextures(O,se.get(O.texture).__webglTexture,se.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const We=O.depthTexture;if(Fe.__boundDepthTexture!==We){if(We!==null&&se.has(We)&&(O.width!==We.image.width||O.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(O)}}const qe=O.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const Je=se.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?ne=Je[Y][oe]:ne=Je[Y],re=!0):O.samples>0&&fe.useMultisampledRTT(O)===!1?ne=se.get(O).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[oe]:ne=Je,ae.copy(O.viewport),me.copy(O.scissor),Le=O.scissorTest}else ae.copy(it).multiplyScalar(ve).floor(),me.copy(Xt).multiplyScalar(ve).floor(),Le=Ae;if(oe!==0&&(ne=C),b.bindFramebuffer(K.FRAMEBUFFER,ne)&&b.drawBuffers(O,ne),b.viewport(ae),b.scissor(me),b.setScissorTest(Le),re){const Fe=se.get(O.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,oe)}else if(Ue){const Fe=Y;for(let qe=0;qe<O.textures.length;qe++){const Je=se.get(O.textures[qe]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+qe,Je.__webglTexture,oe,Fe)}}else if(O!==null&&oe!==0){const Fe=se.get(O.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Fe.__webglTexture,oe)}W=-1},this.readRenderTargetPixels=function(O,Y,oe,ne,re,Ue,Ve,Fe=0){if(!(O&&O.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=se.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){b.bindFramebuffer(K.FRAMEBUFFER,qe);try{const Je=O.textures[Fe],We=Je.format,ot=Je.type;if(O.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe),!V.textureFormatReadable(We)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=O.width-ne&&oe>=0&&oe<=O.height-re&&K.readPixels(Y,oe,ne,re,Ce.convert(We),Ce.convert(ot),Ue)}finally{const Je=G!==null?se.get(G).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(O,Y,oe,ne,re,Ue,Ve,Fe=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=se.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe)if(Y>=0&&Y<=O.width-ne&&oe>=0&&oe<=O.height-re){b.bindFramebuffer(K.FRAMEBUFFER,qe);const Je=O.textures[Fe],We=Je.format,ot=Je.type;if(O.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Fe),!V.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,et),K.bufferData(K.PIXEL_PACK_BUFFER,Ue.byteLength,K.STREAM_READ),K.readPixels(Y,oe,ne,re,Ce.convert(We),Ce.convert(ot),0);const bt=G!==null?se.get(G).__webglFramebuffer:null;b.bindFramebuffer(K.FRAMEBUFFER,bt);const Kt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await iv(K,Kt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,et),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ue),K.deleteBuffer(et),K.deleteSync(Kt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,Y=null,oe=0){const ne=Math.pow(2,-oe),re=Math.floor(O.image.width*ne),Ue=Math.floor(O.image.height*ne),Ve=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;fe.setTexture2D(O,0),K.copyTexSubImage2D(K.TEXTURE_2D,oe,0,0,Ve,Fe,re,Ue),b.unbindTexture()},this.copyTextureToTexture=function(O,Y,oe=null,ne=null,re=0,Ue=0){let Ve,Fe,qe,Je,We,ot,et,bt,Kt;const Yt=O.isCompressedTexture?O.mipmaps[Ue]:O.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,qe=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,We=oe.min.y,ot=oe.isBox3?oe.min.z:0;else{const Pt=Math.pow(2,-re);Ve=Math.floor(Yt.width*Pt),Fe=Math.floor(Yt.height*Pt),O.isDataArrayTexture?qe=Yt.depth:O.isData3DTexture?qe=Math.floor(Yt.depth*Pt):qe=1,Je=0,We=0,ot=0}ne!==null?(et=ne.x,bt=ne.y,Kt=ne.z):(et=0,bt=0,Kt=0);const Ot=Ce.convert(Y.format),sn=Ce.convert(Y.type);let ze;Y.isData3DTexture?(fe.setTexture3D(Y,0),ze=K.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),ze=K.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),ze=K.TEXTURE_2D),b.activeTexture(K.TEXTURE0),b.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(K.UNPACK_ALIGNMENT,Y.unpackAlignment);const on=b.getParameter(K.UNPACK_ROW_LENGTH),pt=b.getParameter(K.UNPACK_IMAGE_HEIGHT),Wn=b.getParameter(K.UNPACK_SKIP_PIXELS),si=b.getParameter(K.UNPACK_SKIP_ROWS),Di=b.getParameter(K.UNPACK_SKIP_IMAGES);b.pixelStorei(K.UNPACK_ROW_LENGTH,Yt.width),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Yt.height),b.pixelStorei(K.UNPACK_SKIP_PIXELS,Je),b.pixelStorei(K.UNPACK_SKIP_ROWS,We),b.pixelStorei(K.UNPACK_SKIP_IMAGES,ot);const xn=O.isDataArrayTexture||O.isData3DTexture,gt=Y.isDataArrayTexture||Y.isData3DTexture;if(O.isDepthTexture){const Pt=se.get(O),In=se.get(Y),wt=se.get(Pt.__renderTarget),Dn=se.get(In.__renderTarget);b.bindFramebuffer(K.READ_FRAMEBUFFER,wt.__webglFramebuffer),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let _i=0;_i<qe;_i++)xn&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.get(O).__webglTexture,re,ot+_i),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,se.get(Y).__webglTexture,Ue,Kt+_i)),K.blitFramebuffer(Je,We,Ve,Fe,et,bt,Ve,Fe,K.DEPTH_BUFFER_BIT,K.NEAREST);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(re!==0||O.isRenderTargetTexture||se.has(O)){const Pt=se.get(O),In=se.get(Y);b.bindFramebuffer(K.READ_FRAMEBUFFER,k),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,P);for(let wt=0;wt<qe;wt++)xn?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Pt.__webglTexture,re,ot+wt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Pt.__webglTexture,re),gt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,In.__webglTexture,Ue,Kt+wt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,In.__webglTexture,Ue),re!==0?K.blitFramebuffer(Je,We,Ve,Fe,et,bt,Ve,Fe,K.COLOR_BUFFER_BIT,K.NEAREST):gt?K.copyTexSubImage3D(ze,Ue,et,bt,Kt+wt,Je,We,Ve,Fe):K.copyTexSubImage2D(ze,Ue,et,bt,Je,We,Ve,Fe);b.bindFramebuffer(K.READ_FRAMEBUFFER,null),b.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else gt?O.isDataTexture||O.isData3DTexture?K.texSubImage3D(ze,Ue,et,bt,Kt,Ve,Fe,qe,Ot,sn,Yt.data):Y.isCompressedArrayTexture?K.compressedTexSubImage3D(ze,Ue,et,bt,Kt,Ve,Fe,qe,Ot,Yt.data):K.texSubImage3D(ze,Ue,et,bt,Kt,Ve,Fe,qe,Ot,sn,Yt):O.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ue,et,bt,Ve,Fe,Ot,sn,Yt.data):O.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ue,et,bt,Yt.width,Yt.height,Ot,Yt.data):K.texSubImage2D(K.TEXTURE_2D,Ue,et,bt,Ve,Fe,Ot,sn,Yt);b.pixelStorei(K.UNPACK_ROW_LENGTH,on),b.pixelStorei(K.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(K.UNPACK_SKIP_PIXELS,Wn),b.pixelStorei(K.UNPACK_SKIP_ROWS,si),b.pixelStorei(K.UNPACK_SKIP_IMAGES,Di),Ue===0&&Y.generateMipmaps&&K.generateMipmap(ze),b.unbindTexture()},this.initRenderTarget=function(O){se.get(O).__webglFramebuffer===void 0&&fe.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?fe.setTextureCube(O,0):O.isData3DTexture?fe.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?fe.setTexture2DArray(O,0):fe.setTexture2D(O,0),b.unbindTexture()},this.resetState=function(){B=0,N=0,G=null,b.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Vu=100,Xh=6371,wg=1800,Hu={relaxed:{name:"Relaxed",worldSpeedScale:1200},normal:{name:"Normal",worldSpeedScale:1800},fast:{name:"Fast",worldSpeedScale:2700}},Js=400,qh=1600,c1=400,f1=45,wp=40,u1=32,h1=16,Tp=10,Sf=.6,d1=3,Ps=1.6,Ap=60,Rp=500,Tg=3,p1=1.5,m1=4,Cp="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Pp=20,g1=1,_1=6,x1=120,v1=700,Yh=2,y1={kids:{continent:10,compass:20,outline:35},normal:{continent:15,compass:30,outline:45},expert:{continent:20,compass:-1,outline:40}};function S1(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function M1(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ip(n[0])||!Ip(n[1]))throw new Error("coordinates must contain numbers");return S1({type:"Point",coordinates:n},e,t)}function Ip(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function Ag(n,e,t){if(n!==null)for(var i,r,s,o,a,c,l,h=0,f=0,u,p=n.type,m=p==="FeatureCollection",v=p==="Feature",_=m?n.features.length:1,x=0;x<_;x++){l=m?n.features[x].geometry:v?n.geometry:n,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1;for(var T=0;T<a;T++){var R=0,S=0;if(o=u?l.geometries[T]:l,o!==null){c=o.coordinates;var I=o.type;switch(h=0,I){case null:break;case"Point":if(e(c,f,x,R,S)===!1)return!1;f++,R++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],f,x,R,S)===!1)return!1;f++,I==="MultiPoint"&&R++}I==="LineString"&&R++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-h;r++){if(e(c[i][r],f,x,R,S)===!1)return!1;f++}I==="MultiLineString"&&R++,I==="Polygon"&&S++}I==="Polygon"&&R++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(S=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-h;s++){if(e(c[i][r][s],f,x,R,S)===!1)return!1;f++}S++}R++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(Ag(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function E1(n,e={}){if(n.bbox!=null&&e.recompute!==!0)return n.bbox;const t=[1/0,1/0,-1/0,-1/0];return Ag(n,i=>{t[0]>i[0]&&(t[0]=i[0]),t[1]>i[1]&&(t[1]=i[1]),t[2]<i[0]&&(t[2]=i[0]),t[3]<i[1]&&(t[3]=i[1])}),t}var b1=E1;const cr=11102230246251565e-32,wn=134217729,w1=(3+8*cr)*cr;function Mf(n,e,t,i,r){let s,o,a,c,l=e[0],h=i[0],f=0,u=0;h>l==h>-l?(s=l,l=e[++f]):(s=h,h=i[++u]);let p=0;if(f<n&&u<t)for(h>l==h>-l?(o=l+s,a=s-(o-l),l=e[++f]):(o=h+s,a=s-(o-h),h=i[++u]),s=o,a!==0&&(r[p++]=a);f<n&&u<t;)h>l==h>-l?(o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f]):(o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u]),s=o,a!==0&&(r[p++]=a);for(;f<n;)o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f],s=o,a!==0&&(r[p++]=a);for(;u<t;)o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u],s=o,a!==0&&(r[p++]=a);return(s!==0||p===0)&&(r[p++]=s),p}function T1(n,e){let t=e[0];for(let i=1;i<n;i++)t+=e[i];return t}function ua(n){return new Float64Array(n)}const A1=(3+16*cr)*cr,R1=(2+12*cr)*cr,C1=(9+64*cr)*cr*cr,Is=ua(4),Dp=ua(8),Lp=ua(12),Np=ua(16),On=ua(4);function P1(n,e,t,i,r,s,o){let a,c,l,h,f,u,p,m,v,_,x,T,R,S,I,A,F,M;const E=n-r,L=t-r,U=e-s,z=i-s;S=E*z,u=wn*E,p=u-(u-E),m=E-p,u=wn*z,v=u-(u-z),_=z-v,I=m*_-(S-p*v-m*v-p*_),A=U*L,u=wn*U,p=u-(u-U),m=U-p,u=wn*L,v=u-(u-L),_=L-v,F=m*_-(A-p*v-m*v-p*_),x=I-F,f=I-x,Is[0]=I-(x+f)+(f-F),T=S+x,f=T-S,R=S-(T-f)+(x-f),x=R-A,f=R-x,Is[1]=R-(x+f)+(f-A),M=T+x,f=M-T,Is[2]=T-(M-f)+(x-f),Is[3]=M;let C=T1(4,Is),k=R1*o;if(C>=k||-C>=k||(f=n-E,a=n-(E+f)+(f-r),f=t-L,l=t-(L+f)+(f-r),f=e-U,c=e-(U+f)+(f-s),f=i-z,h=i-(z+f)+(f-s),a===0&&c===0&&l===0&&h===0)||(k=C1*o+w1*Math.abs(C),C+=E*h+z*a-(U*l+L*c),C>=k||-C>=k))return C;S=a*z,u=wn*a,p=u-(u-a),m=a-p,u=wn*z,v=u-(u-z),_=z-v,I=m*_-(S-p*v-m*v-p*_),A=c*L,u=wn*c,p=u-(u-c),m=c-p,u=wn*L,v=u-(u-L),_=L-v,F=m*_-(A-p*v-m*v-p*_),x=I-F,f=I-x,On[0]=I-(x+f)+(f-F),T=S+x,f=T-S,R=S-(T-f)+(x-f),x=R-A,f=R-x,On[1]=R-(x+f)+(f-A),M=T+x,f=M-T,On[2]=T-(M-f)+(x-f),On[3]=M;const P=Mf(4,Is,4,On,Dp);S=E*h,u=wn*E,p=u-(u-E),m=E-p,u=wn*h,v=u-(u-h),_=h-v,I=m*_-(S-p*v-m*v-p*_),A=U*l,u=wn*U,p=u-(u-U),m=U-p,u=wn*l,v=u-(u-l),_=l-v,F=m*_-(A-p*v-m*v-p*_),x=I-F,f=I-x,On[0]=I-(x+f)+(f-F),T=S+x,f=T-S,R=S-(T-f)+(x-f),x=R-A,f=R-x,On[1]=R-(x+f)+(f-A),M=T+x,f=M-T,On[2]=T-(M-f)+(x-f),On[3]=M;const B=Mf(P,Dp,4,On,Lp);S=a*h,u=wn*a,p=u-(u-a),m=a-p,u=wn*h,v=u-(u-h),_=h-v,I=m*_-(S-p*v-m*v-p*_),A=c*l,u=wn*c,p=u-(u-c),m=c-p,u=wn*l,v=u-(u-l),_=l-v,F=m*_-(A-p*v-m*v-p*_),x=I-F,f=I-x,On[0]=I-(x+f)+(f-F),T=S+x,f=T-S,R=S-(T-f)+(x-f),x=R-A,f=R-x,On[1]=R-(x+f)+(f-A),M=T+x,f=M-T,On[2]=T-(M-f)+(x-f),On[3]=M;const N=Mf(B,Lp,4,On,Np);return Np[N-1]}function ko(n,e,t,i,r,s){const o=(e-s)*(t-r),a=(n-r)*(i-s),c=o-a,l=Math.abs(o+a);return Math.abs(c)>=A1*l?c:-P1(n,e,t,i,r,s,l)}function I1(n,e){var t,i,r=0,s,o,a,c,l,h,f,u=n[0],p=n[1],m=e.length;for(t=0;t<m;t++){i=0;var v=e[t],_=v.length-1;if(h=v[0],h[0]!==v[_][0]&&h[1]!==v[_][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-u,a=h[1]-p,i;i<_;i++){if(f=v[i+1],c=f[0]-u,l=f[1]-p,a===0&&l===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(l>=0&&a<=0||l<=0&&a>=0){if(s=ko(o,c,a,l,0,0),s===0)return 0;(s>0&&l>0&&a<=0||s<0&&l<=0&&a>0)&&r++}h=f,a=l,o=c}}return r%2!==0}function D1(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return[...n.geometry.coordinates];if(n.type==="Point")return[...n.coordinates]}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return[...n];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function L1(n){return n.type==="Feature"?n.geometry:n}function N1(n,e,t={}){if(!n)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=D1(n),r=L1(e),s=r.type,o=e.bbox;let a=r.coordinates;if(o&&O1(i,o)===!1)return!1;s==="Polygon"&&(a=[a]);let c=!1;for(var l=0;l<a.length;++l){const h=I1(i,a[l]);if(h===0)return!t.ignoreBoundary;h&&(c=!0)}return c}function O1(n,e){return e[0]<=n[0]&&e[1]<=n[1]&&e[2]>=n[0]&&e[3]>=n[1]}var Rg=N1;function U1(n){const e=n.features.map(t=>({id:t.properties.id,box:b1(t),feature:t}));return{findCountryAt(t,i){const r=M1([i,t]);for(const{id:s,box:o,feature:a}of e)if(!(i<o[0]||i>o[2]||t<o[1]||t>o[3])&&Rg(r,a))return s;return null}}}function F1(n){let e=0,t=0;for(let r=0;r<n.length-1;r++){const s=n[r],o=n[r+1];e+=s[0]*o[1]-o[0]*s[1],t+=s[1]}const i=t/Math.max(1,n.length-1);return Math.abs(e)*Math.cos(i*Math.PI/180)}function B1(n){const e=n.type==="Polygon"?[n.coordinates]:n.coordinates;let t=null,i=-1;for(const c of e){const l=c[0];if(!l)continue;const h=F1(l);h>i&&(i=h,t=l)}if(!t)throw new Error("geometry has no rings");let r=1/0,s=-1/0,o=1/0,a=-1/0;for(const c of t)r=Math.min(r,c[0]),s=Math.max(s,c[0]),o=Math.min(o,c[1]),a=Math.max(a,c[1]);return{lat:(o+a)/2,lon:(r+s)/2,widthDeg:s-r}}const Kr=Math.PI/180;function z1(n){return(n+540)%360-180}function Gu(n,e,t,i){const r=i/Xh,s=t*Kr,o=n*Kr,a=e*Kr,c=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),l=Math.asin(c),h=a+Math.atan2(Math.sin(s)*Math.sin(r)*Math.cos(o),Math.cos(r)-Math.sin(o)*c);return{lat:l/Kr,lon:z1(h/Kr)}}function $n(n,e,t){const i=Vu*(1+t/Xh),r=n*Kr,s=e*Kr;return{x:i*Math.cos(r)*Math.sin(s),y:i*Math.sin(r),z:i*Math.cos(r)*Math.cos(s)}}const Ds=(n,e,t)=>Math.min(t,Math.max(e,n)),Vr=n=>(n+540)%360-180,Ro=Math.PI/180,Kh={speedScale:1,turnScale:1,climbScale:1},Us={seaplane:{name:"Seaplane",blurb:"Balanced all-rounder",emoji:"🛩️",tuning:Kh},stunt:{name:"Stunt Plane",blurb:"Nippy turns, lower top speed",emoji:"🎪",tuning:{speedScale:.9,turnScale:1.3,climbScale:1.15}},jet:{name:"Jet",blurb:"Fast in a straight line, wide turns",emoji:"🚀",tuning:{speedScale:1.2,turnScale:.75,climbScale:1}},lifter:{name:"Cargo Lifter",blurb:"Steady climber, a little sluggish",emoji:"📦",tuning:{speedScale:.95,turnScale:.9,climbScale:1.25}}};function k1(){return{lat:48.8566,lon:2.3522,altKm:200,headingDeg:270,pitchDeg:0,rollDeg:0,barrelRollS:0,loopS:0,speedKmh:800}}function V1(n,e,t,i=Kh,r=wg){const s=Ds(e.throttle,-1,1),o=Ds(e.turn,-1,1),a=Ds(e.pitch,-1,1),c=Math.sign(e.barrelRoll??0),l=(e.loop??0)!==0;let h=n.barrelRollS,f=n.loopS;const u=h!==0||f!==0;!u&&c!==0?h=Sf*c:!u&&l&&(f=Ps);const p=Math.sign(h),m=Math.min(Math.abs(h),t);h=p*Math.max(0,Math.abs(h)-t);const v=Math.min(f,t);f=Math.max(0,f-t);const _=v>0,x=_&&f===0,T=_?180*(Ps-(f+v))/Ps:0,R=_?180*(Ps-f)/Ps:0;let S,I;if(_){S=x?0:Vr(R);const z=wp*i.climbScale*Ps/Math.PI;I=Ds(n.altKm+z*(Math.cos(T*Ro)-Math.cos(R*Ro)),Ap,Rp)}else{const z=a*h1,C=Math.min(1,Tp*t);S=Vr(n.pitchDeg+Vr(z-n.pitchDeg)*C),I=Ds(n.altKm+a*wp*i.climbScale*t,Ap,Rp)}let A;if(p!==0){const z=1-Math.abs(h)/Sf;A=Vr(p*360*z)}else if(_)A=x?0:R>120?Vr((R-120)/60*180):0;else{const z=o*u1,C=Math.min(1,Tp*t);A=Vr(n.rollDeg+Vr(z-n.rollDeg)*C)}const F=Ds(n.speedKmh+s*c1*t,Js,qh*i.speedScale);let M=(n.headingDeg+o*f1*i.turnScale*t+360)%360;x&&(M=(M+180)%360);const E=_?(Math.cos(T*Ro)+Math.cos(R*Ro))/2:1,L=F/3600*r*t*E;let U=Gu(n.lat,n.lon,M,L);if(m>0&&p!==0){const z=d1*(m/Sf)*Ro*Xh;U=Gu(U.lat,U.lon,M+90*p,z)}return{lat:U.lat,lon:U.lon,altKm:I,headingDeg:M,pitchDeg:S,rollDeg:A,barrelRollS:h,loopS:f,speedKmh:F}}const Cr=Math.PI/180;function Qo(n,e,t,i){const r=n*Cr,s=t*Cr,o=(i-e)*Cr;return Math.acos(Math.min(1,Math.max(-1,Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(o))))/Cr}function Ef(n,e,t){const i=(e-n+540)%360-180;return(n+i*t+360)%360}function Cg(n,e,t,i){const r=n*Cr,s=t*Cr,o=(i-e)*Cr,a=Math.sin(o)*Math.cos(s),c=Math.cos(r)*Math.sin(s)-Math.sin(r)*Math.cos(s)*Math.cos(o);return(Math.atan2(a,c)/Cr+360)%360}function H1(n=Math.random){let e="";for(let t=0;t<m1;t++){const i=Math.floor(n()*Cp.length);e+=Cp[i]??"A"}return e}function Wu(n,e){const t=y1[e],i=r=>r>=0&&n>=r;return{continent:i(t.continent),compass:i(t.compass),outline:i(t.outline)}}function Pg(n,e,t,i){if(!(Qo(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Tg))return{complete:!1,dwellS:0,inZone:!1,requirementBlocked:!1};switch(e.type){case"refuel":{const s=t+i;return{complete:s>=Yh,dwellS:s,inZone:!0,requirementBlocked:!1}}case"delivery":{const s=n.altKm<=x1;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}case"vip":{const s=n.speedKmh<=v1;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}default:return{complete:!0,dwellS:0,inZone:!0,requirementBlocked:!1}}}function G1(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const W1={kids:["easy"],normal:["easy","normal"],expert:["easy","normal","hard"]},$1=["refuel","photo","riddle","vip"];function Ya(n,e){const t=n[Math.floor(e()*n.length)];if(t===void 0)throw new Error("pick() from empty list");return t}function X1(n,e,t){switch(n){case"pickup":return{label:`Pick up cargo in ${e.name}`,sublabel:"Fly through the beacon to skyhook the crate"};case"refuel":return{label:`Refuel in ${e.name}`,sublabel:"Hold inside the zone for 2 seconds to skim the fuel strip"};case"delivery":return{label:`Deliver the cargo to ${e.name}`,sublabel:"Fly LOW through the beacon to parachute-drop the crate"};case"vip":return{label:`Fly the VIP to ${e.name}`,sublabel:"Arrive gently — under 700 km/h — or they complain"};case"riddle":return{label:`Fly to ${t??"the mystery country"}`,sublabel:"Solve the riddle — which country is it?"};case"photo":return{label:"",sublabel:""}}}function q1(n,e,t,i){const r=Math.min(_1,Math.max(g1,i.legCount)),s=G1(i.seed),o=W1[i.difficulty],a=Object.values(n).filter(m=>m.playable&&o.includes(m.tier)).sort((m,v)=>m.id.localeCompare(v.id));if(a.length<r)throw new Error("Not enough countries for contract");const c=[];for(let m=0;m<r;m++)m===0?c.push("pickup"):m===r-1?c.push("delivery"):c.push(Ya($1,s));const l=new Set,h=new Set,f=[];let u=null,p=null;for(const m of c){let v=m,_=null;if(v==="photo"){const I=e.filter(A=>!h.has(A.name)&&n[A.countryId]!==void 0&&!l.has(A.countryId)&&(u===null||Qo(u.lat,u.lon,A.lat,A.lon)>=Pp));I.length>0?(_=Ya(I,s),h.add(_.name)):v="riddle"}let x;if(_){const I=n[_.countryId];if(!I)throw new Error(`Landmark country missing: ${_.countryId}`);x=I}else{const I=a.filter(E=>!l.has(E.id)),A=u?I.filter(E=>Qo(u.lat,u.lon,E.capital.lat,E.capital.lon)>=Pp):I,F=A.length>0?A:I,M=F.filter(E=>E.continent!==p);x=Ya(M.length>0?M:F,s)}l.add(x.id);const T=_?{lat:_.lat,lon:_.lon}:{lat:x.capital.lat,lon:x.capital.lon};let R,S;if(v==="photo"&&_)R=`Photograph ${_.name}`,S=`Fly through the camera ring in ${x.name}`;else{const I=v==="riddle"?(t[x.id]?Ya([...t[x.id]],s):null)??`the country whose capital is ${x.capital.name}`:null;({label:R,sublabel:S}=X1(v,x,I))}f.push({type:v,countryId:x.id,zone:T,label:R,sublabel:S}),u=T,p=x.continent}return{seed:i.seed,difficulty:i.difficulty,legs:f}}function Ig(n,e){return e.type!=="refuel"?null:Qo(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Tg?Js:null}function Ml(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function Y1(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Dg(n){let e,t,i;n.length!==2?(e=Ml,t=(a,c)=>Ml(n(a),c),i=(a,c)=>n(a)-c):(e=n===Ml||n===Y1?n:K1,t=n,i=n);function r(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function o(a,c,l=0,h=a.length){const f=r(a,c,l,h-1);return f>l&&i(a[f-1],c)>-i(a[f],c)?f-1:f}return{left:r,center:o,right:s}}function K1(){return 0}function Z1(n){return n===null?NaN:+n}const j1=Dg(Ml),J1=j1.right;Dg(Z1).center;function kl(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)))}return[t,i]}class fr{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(t[i++]=a),e=o}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,o=0;if(t>0){for(o=e[--t];t>0&&(i=o,r=e[--t],o=i+r,s=r-(o-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}const Q1=Math.sqrt(50),ew=Math.sqrt(10),tw=Math.sqrt(2);function Vl(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=Q1?10:s>=ew?5:s>=tw?2:1;let a,c,l;return r<0?(l=Math.pow(10,-r)/o,a=Math.round(n*l),c=Math.round(e*l),a/l<n&&++a,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*o,a=Math.round(n/l),c=Math.round(e/l),a*l<n&&++a,c*l>e&&--c),c<a&&.5<=t&&t<2?Vl(n,e,t*2):[a,c,l]}function nw(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,o]=i?Vl(e,n,t):Vl(n,e,t);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(i)if(o<0)for(let l=0;l<a;++l)c[l]=(s-l)/-o;else for(let l=0;l<a;++l)c[l]=(s-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(r+l)/-o;else for(let l=0;l<a;++l)c[l]=(r+l)*o;return c}function $u(n,e,t){return e=+e,n=+n,t=+t,Vl(n,e,t)[2]}function iw(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?$u(e,n,t):$u(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function rw(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(s=+s)>=s&&(++t,i+=s)}if(t)return i/t}function*sw(n){for(const e of n)yield*e}function ea(n){return Array.from(sw(n))}const ta=new Set;let Xu=!1;function ow(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;ta.size&&ta.clear();let s=Lg(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a=0,c=0,l=0;if(i&&(s=uw(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<r;u+=t){const p=n[u],m=n[u+1];p<a&&(a=p),m<c&&(c=m),p>h&&(h=p),m>f&&(f=m)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return qu(s,o,a,c,l),o}function Lg(n,e,t,i,r){let s=null;if(r===bw(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Fp(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Fp(o/i|0,n[o],n[o+1],s);return s&&na(s,s.next)&&(ra(s),s=s.next),s}function ss(n,e=n){const t=e===n;let i=n,r;do r=!1,i!==i.next&&(ta.size===0||!ta.has(i))&&(na(i,i.next)||ln(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),Xu=!0,ra(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function qu(n,e,t,i,r){r&&xw(n,t,i,r);let s=n,o=!1;for(;n.prev!==n.next;){const a=n.prev,c=n.next;if(ln(a,n,c)<0&&(r?lw(n,t,i,r):aw(n))){e.push(a.i,n.i,c.i),ra(n),n=c,s=c;continue}if(n=c,n===s){if(Xu=!1,n=ss(n),Xu){s=n;continue}if(!o){n=cw(n,e),s=n,o=!0;continue}fw(n,e,t,i,r);break}}}function aw(n){const e=n.prev,t=n,i=n.next,r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),p=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=p&&!(r===m.x&&a===m.y)&&Gl(r,a,s,c,o,l,m.x,m.y)&&ln(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function lw(n,e,t,i){const r=n.prev,s=n,o=n.next,a=r.x,c=s.x,l=o.x,h=r.y,f=s.y,u=o.y,p=Math.min(a,c,l),m=Math.min(h,f,u),v=Math.max(a,c,l),_=Math.max(h,f,u),x=ju(p,m,e,t,i),T=ju(v,_,e,t,i);let R=n.prevZ;for(;R&&R.z>=x;){if(R.x>=p&&R.x<=v&&R.y>=m&&R.y<=_&&R!==o&&!(a===R.x&&h===R.y)&&Gl(a,h,c,f,l,u,R.x,R.y)&&ln(R.prev,R,R.next)>=0)return!1;R=R.prevZ}let S=n.nextZ;for(;S&&S.z<=T;){if(S.x>=p&&S.x<=v&&S.y>=m&&S.y<=_&&S!==o&&!(a===S.x&&h===S.y)&&Gl(a,h,c,f,l,u,S.x,S.y)&&ln(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function cw(n,e){let t=n,i=!1;do{const r=t.prev,s=t.next.next;Ug(r,t,t.next,s,!1)&&ia(r,s)&&ia(s,r)&&(e.push(r.i,t.i,s.i),ra(t),ra(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?ss(t):t}function fw(n,e,t,i,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Sw(s,o)){let a=Fg(s,o);s=ss(s,s.next),a=ss(a,a.next),qu(s,e,t,i,r),qu(a,e,t,i,r);return}o=o.next}s=s.next}while(s!==n)}let Yu=!1;function uw(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Lg(n,a,c,i,!1);l===l.next&&ta.add(l),r.push(yw(l))}r.sort(hw),pw(n.length/i,e.length),Og(t,t),Yu=!0;for(let s=0;s<r.length;s++)t=dw(r[s],t);return Yu=!1,ss(t)}function hw(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function dw(n,e){const t=gw(n,e);if(!t)return e;const i=Fg(t,n),r=i.next;return Og(t,r.next),ss(i,i.next),ss(t,t.next)}const Ng=16;let tn=new Float64Array(0),Hl=0;const Ku=[],Zu=[];function pw(n,e){const t=Math.ceil((n+2*e)/Ng)+e+2;tn.length<t*4&&(tn=new Float64Array(t*4)),Hl=0}function Og(n,e){let t=n;do{const i=Hl++;Ku[i]=t;let r=1/0,s=1/0,o=-1/0,a=-1/0,c=0;do{const h=t.next;t.z=i,t.x<r&&(r=t.x),t.x>o&&(o=t.x),t.y<s&&(s=t.y),t.y>a&&(a=t.y),h.x<r&&(r=h.x),h.x>o&&(o=h.x),h.y<s&&(s=h.y),h.y>a&&(a=h.y),t=h}while(++c<Ng&&t!==e);Zu[i]=t;const l=i*4;tn[l]=r,tn[l+1]=s,tn[l+2]=o,tn[l+3]=a}while(t!==e)}function mw(n,e){const t=n.z*4;e.x<tn[t]&&(tn[t]=e.x),e.y<tn[t+1]&&(tn[t+1]=e.y),e.x>tn[t+2]&&(tn[t+2]=e.x),e.y>tn[t+3]&&(tn[t+3]=e.y)}function Op(n){let e=Zu[n];for(;e.prev.next!==e;)e=e.next;return Zu[n]=e,e}function Up(n){let e=Ku[n];for(;e.prev.next!==e;)e=e.next;return Ku[n]=e,e}function gw(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(na(n,t))return t;for(let u=0,p=0;u<Hl;u++,p+=4){if(r<tn[p+1]||r>tn[p+3]||tn[p]>i||tn[p+2]<=s)continue;const m=Op(u);t=Up(u);do{if(t.prev.next===t){if(na(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const v=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=i&&v>s&&(s=v,o=t.x<t.next.x?t:t.next,v===i))return o}}t=t.next}while(t!==m)}if(!o)return null;const a=o.x,c=o.y,l=Math.min(r,c),h=Math.max(r,c);let f=1/0;for(let u=0,p=0;u<Hl;u++,p+=4){if(tn[p+2]<a||tn[p]>i||tn[p+3]<l||tn[p+1]>h)continue;const m=Op(u);t=Up(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=a&&i!==t.x&&Gl(r<c?i:s,r,a,c,r<c?s:i,r,t.x,t.y)){const v=Math.abs(r-t.y)/(i-t.x);(ia(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(v<f||v===f&&(t.x>o.x||t.x===o.x&&_w(o,t)))&&(o=t,f=v)}t=t.next}while(t!==m)}return o}function _w(n,e){return ln(n.prev,n,e.prev)<0&&ln(e.next,n,n.next)<0}const li=[];let Co=[],Hr=new Uint32Array(0),Po=new Uint32Array(0);const Io=new Uint32Array(256);function xw(n,e,t,i){let r=n,s=0;do r.z=ju(r.x,r.y,e,t,i),li[s++]=r,r=r.next;while(r!==n);vw(s);let o=null;for(let a=0;a<s;a++){const c=li[a];c.prevZ=o,o&&(o.nextZ=c),o=c}o.nextZ=null}function vw(n){if(n<=32){for(let e=1;e<n;e++){const t=li[e],i=t.z;let r=e-1;for(;r>=0&&li[r].z>i;)li[r+1]=li[r],r--;li[r+1]=t}return}Hr.length<n&&(Hr=new Uint32Array(n),Po=new Uint32Array(n),Co=new Array(n));for(let e=0;e<n;e++)Hr[e]=li[e].z;Ka(n,li,Hr,Co,Po,0),Ka(n,Co,Po,li,Hr,8),Ka(n,li,Hr,Co,Po,16),Ka(n,Co,Po,li,Hr,24)}function Ka(n,e,t,i,r,s){Io.fill(0);for(let a=0;a<n;a++)Io[t[a]>>>s&255]++;let o=0;for(let a=0;a<256;a++){const c=Io[a];Io[a]=o,o+=c}for(let a=0;a<n;a++){const c=t[a],l=Io[c>>>s&255]++;i[l]=e[a],r[l]=c}}function ju(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function yw(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Gl(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Sw(n,e){const t=na(n,e)&&ln(n.prev,n,n.next)>0&&ln(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||ia(n,e)&&ia(e,n)&&(ln(n.prev,n,e.prev)!==0||ln(n,e.prev,e)!==0))&&!Mw(n,e)&&(t||Ew(n,e))}function ln(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function na(n,e){return n.x===e.x&&n.y===e.y}function Ug(n,e,t,i,r=!0){const s=ln(n,e,t),o=ln(n,e,i),a=ln(t,i,n),c=ln(t,i,e);return(s>0&&o<0||s<0&&o>0)&&(a>0&&c<0||a<0&&c>0)?!0:r?!!(s===0&&Za(n,t,e)||o===0&&Za(n,i,e)||a===0&&Za(t,n,i)||c===0&&Za(t,e,i)):!1}function Za(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Mw(n,e){const t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y);let o=n;do{const a=o.next;if(o.x>i&&a.x>i||o.x<t&&a.x<t||o.y>s&&a.y>s||o.y<r&&a.y<r){o=a;continue}if(o.i!==n.i&&a.i!==n.i&&o.i!==e.i&&a.i!==e.i&&Ug(o,a,n,e))return!0;o=a}while(o!==n);return!1}function ia(n,e){return ln(n.prev,n,n.next)<0?ln(n,e,n.next)>=0&&ln(n,n.prev,e)>=0:ln(n,e,n.prev)<0||ln(n,n.next,e)<0}function Ew(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{const o=t.next;t.y>s!=o.y>s&&r<(o.x-t.x)*(s-t.y)/(o.y-t.y)+t.x&&(i=!i),t=o}while(t!==n);return i}function Fg(n,e){const t=Ju(n.i,n.x,n.y),i=Ju(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Fp(n,e,t,i){const r=Ju(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ra(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),Yu&&mw(n.prev,n.next)}function Ju(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function bw(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function Bg(n){const e=[],t=[],i=n[0][0].length;let r=0,s=0;for(const o of n){for(const a of o)for(let c=0;c<i;c++)e.push(a[c]);s&&(r+=s,t.push(r)),s=o.length}return{vertices:e,holes:t,dimensions:i}}const Bp=Math.pow(2,-52),ja=new Uint32Array(512);class sa{static from(e,t=Cw,i=Pw){const r=e.length,s=new Float64Array(r*2);for(let o=0;o<r;o++){const a=e[o];s[2*o]=t(a),s[2*o+1]=i(a)}return new sa(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:r,_hullHash:s}=this,o=e.length>>1;let a=1/0,c=1/0,l=-1/0,h=-1/0;for(let E=0;E<o;E++){const L=e[2*E],U=e[2*E+1];L<a&&(a=L),U<c&&(c=U),L>l&&(l=L),U>h&&(h=U),this._ids[E]=E}const f=(a+l)/2,u=(c+h)/2;let p=0,m=0,v=0;for(let E=0,L=1/0;E<o;E++){const U=bf(f,u,e[2*E],e[2*E+1]);U<L&&(p=E,L=U)}const _=e[2*p],x=e[2*p+1];for(let E=0,L=1/0;E<o;E++){if(E===p)continue;const U=bf(_,x,e[2*E],e[2*E+1]);U<L&&U>0&&(m=E,L=U)}let T=e[2*m],R=e[2*m+1],S=1/0;for(let E=0;E<o;E++){if(E===p||E===m)continue;const L=Aw(_,x,T,R,e[2*E],e[2*E+1]);L<S&&(v=E,S=L)}let I=e[2*v],A=e[2*v+1];if(S===1/0){for(let U=0;U<o;U++)this._dists[U]=e[2*U]-e[0]||e[2*U+1]-e[1];Bs(this._ids,this._dists,0,o-1);const E=new Uint32Array(o);let L=0;for(let U=0,z=-1/0;U<o;U++){const C=this._ids[U],k=this._dists[C];k>z&&(E[L++]=C,z=k)}this.hull=E.subarray(0,L),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(ko(_,x,T,R,I,A)<0){const E=m,L=T,U=R;m=v,T=I,R=A,v=E,I=L,A=U}const F=Rw(_,x,T,R,I,A);this._cx=F.x,this._cy=F.y;for(let E=0;E<o;E++)this._dists[E]=bf(e[2*E],e[2*E+1],F.x,F.y);Bs(this._ids,this._dists,0,o-1),this._hullStart=p;let M=3;i[p]=t[v]=m,i[m]=t[p]=v,i[v]=t[m]=p,r[p]=0,r[m]=1,r[v]=2,s.fill(-1),s[this._hashKey(_,x)]=p,s[this._hashKey(T,R)]=m,s[this._hashKey(I,A)]=v,this.trianglesLen=0,this._addTriangle(p,m,v,-1,-1,-1);for(let E=0,L=0,U=0;E<this._ids.length;E++){const z=this._ids[E],C=e[2*z],k=e[2*z+1];if(E>0&&Math.abs(C-L)<=Bp&&Math.abs(k-U)<=Bp||(L=C,U=k,z===p||z===m||z===v))continue;let P=0;for(let J=0,ae=this._hashKey(C,k);J<this._hashSize&&(P=s[(ae+J)%this._hashSize],!(P!==-1&&P!==i[P]));J++);P=t[P];let B=P,N;for(;N=i[B],ko(C,k,e[2*B],e[2*B+1],e[2*N],e[2*N+1])>=0;)if(B=N,B===P){B=-1;break}if(B===-1)continue;let G=this._addTriangle(B,z,i[B],-1,-1,r[B]);r[z]=this._legalize(G+2),r[B]=G,M++;let W=i[B];for(;N=i[W],ko(C,k,e[2*W],e[2*W+1],e[2*N],e[2*N+1])<0;)G=this._addTriangle(W,z,N,r[z],-1,r[W]),r[z]=this._legalize(G+2),i[W]=W,M--,W=N;if(B===P)for(;N=t[B],ko(C,k,e[2*N],e[2*N+1],e[2*B],e[2*B+1])<0;)G=this._addTriangle(N,z,B,-1,r[B],r[N]),this._legalize(G+2),r[N]=G,i[B]=B,M--,B=N;this._hullStart=t[z]=B,i[B]=t[W]=z,i[z]=W,s[this._hashKey(C,k)]=z,s[this._hashKey(e[2*B],e[2*B+1])]=B}this.hull=new Uint32Array(M);for(let E=0,L=this._hullStart;E<M;E++)this.hull[E]=L,L=i[L];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(ww(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:r}=this;let s=0,o=0;for(;;){const a=i[e],c=e-e%3;if(o=c+(e+2)%3,a===-1){if(s===0)break;e=ja[--s];continue}const l=a-a%3,h=c+(e+1)%3,f=l+(a+2)%3,u=t[o],p=t[e],m=t[h],v=t[f];if(Tw(r[2*u],r[2*u+1],r[2*p],r[2*p+1],r[2*m],r[2*m+1],r[2*v],r[2*v+1])){t[e]=v,t[a]=u;const x=i[f];if(x===-1){let R=this._hullStart;do{if(this._hullTri[R]===f){this._hullTri[R]=e;break}R=this._hullPrev[R]}while(R!==this._hullStart)}this._link(e,x),this._link(a,i[o]),this._link(o,f);const T=l+(a+1)%3;s<ja.length&&(ja[s++]=T)}else{if(s===0)break;e=ja[--s]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,r,s,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,r),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function ww(n,e){const t=n/(Math.abs(n)+Math.abs(e));return(e>0?3-t:1+t)/4}function bf(n,e,t,i){const r=n-t,s=e-i;return r*r+s*s}function Tw(n,e,t,i,r,s,o,a){const c=n-o,l=e-a,h=t-o,f=i-a,u=r-o,p=s-a,m=c*c+l*l,v=h*h+f*f,_=u*u+p*p;return c*(f*_-v*p)-l*(h*_-v*u)+m*(h*p-f*u)<0}function Aw(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=(l*h-a*f)*u,m=(o*f-c*h)*u;return p*p+m*m}function Rw(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=n+(l*h-a*f)*u,m=e+(o*f-c*h)*u;return{x:p,y:m}}function Bs(n,e,t,i){if(i-t<=20)for(let r=t+1;r<=i;r++){const s=n[r],o=e[s];let a=r-1;for(;a>=t&&e[n[a]]>o;)n[a+1]=n[a--];n[a+1]=s}else{const r=t+i>>1;let s=t+1,o=i;Do(n,r,s),e[n[t]]>e[n[i]]&&Do(n,t,i),e[n[s]]>e[n[i]]&&Do(n,s,i),e[n[t]]>e[n[s]]&&Do(n,t,s);const a=n[s],c=e[a];for(;;){do s++;while(e[n[s]]<c);do o--;while(e[n[o]]>c);if(o<s)break;Do(n,s,o)}n[t+1]=n[o],n[o]=a,i-s+1>=o-t?(Bs(n,e,s,i),Bs(n,e,t,o-1)):(Bs(n,e,t,o-1),Bs(n,e,s,i))}}function Do(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function Cw(n){return n[0]}function Pw(n){return n[1]}var Dt=1e-6,Wl=1e-12,Tt=Math.PI,di=Tt/2,$l=Tt/4,ri=Tt*2,en=180/Tt,ct=Tt/180,Wt=Math.abs,zg=Math.atan,mi=Math.atan2,ut=Math.cos,Qu=Math.hypot,at=Math.sin,Iw=Math.sign||function(n){return n>0?1:n<0?-1:0},pr=Math.sqrt;function Dw(n){return n>1?0:n<-1?Tt:Math.acos(n)}function mr(n){return n>1?di:n<-1?-di:Math.asin(n)}function zp(n){return(n=at(n/2))*n}function Tn(){}function Xl(n,e){n&&Vp.hasOwnProperty(n.type)&&Vp[n.type](n,e)}var kp={Feature:function(n,e){Xl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)Xl(t[i].geometry,e)}},Vp={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){eh(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)eh(t[i],e,0)},Polygon:function(n,e){Hp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Hp(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)Xl(t[i],e)}};function eh(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function Hp(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)eh(n[t],e,1);e.polygonEnd()}function Rc(n,e){n&&kp.hasOwnProperty(n.type)?kp[n.type](n,e):Xl(n,e)}var ql=new fr,Gp=new fr,kg,Vg,th,nh,ih,gr={point:Tn,lineStart:Tn,lineEnd:Tn,polygonStart:function(){ql=new fr,gr.lineStart=Lw,gr.lineEnd=Nw},polygonEnd:function(){var n=+ql;Gp.add(n<0?ri+n:n),this.lineStart=this.lineEnd=this.point=Tn},sphere:function(){Gp.add(ri)}};function Lw(){gr.point=Ow}function Nw(){Hg(kg,Vg)}function Ow(n,e){gr.point=Hg,kg=n,Vg=e,n*=ct,e*=ct,th=n,nh=ut(e=e/2+$l),ih=at(e)}function Hg(n,e){n*=ct,e*=ct,e=e/2+$l;var t=n-th,i=t>=0?1:-1,r=i*t,s=ut(e),o=at(e),a=ih*o,c=nh*s+a*ut(r),l=a*i*at(r);ql.add(mi(l,c)),th=n,nh=s,ih=o}function Yl(n){return[mi(n[1],n[0]),mr(n[2])]}function os(n){var e=n[0],t=n[1],i=ut(t);return[i*ut(e),i*at(e),at(t)]}function Ja(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Qs(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function wf(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Qa(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Kl(n){var e=pr(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}var Jt,qn,Qt,ti,Xr,Gg,Wg,$s,qo,wr,_r,rr={point:rh,lineStart:Wp,lineEnd:$p,polygonStart:function(){rr.point=Xg,rr.lineStart=Uw,rr.lineEnd=Fw,qo=new fr,gr.polygonStart()},polygonEnd:function(){gr.polygonEnd(),rr.point=rh,rr.lineStart=Wp,rr.lineEnd=$p,ql<0?(Jt=-(Qt=180),qn=-(ti=90)):qo>Dt?ti=90:qo<-Dt&&(qn=-90),_r[0]=Jt,_r[1]=Qt},sphere:function(){Jt=-(Qt=180),qn=-(ti=90)}};function rh(n,e){wr.push(_r=[Jt=n,Qt=n]),e<qn&&(qn=e),e>ti&&(ti=e)}function $g(n,e){var t=os([n*ct,e*ct]);if($s){var i=Qs($s,t),r=[i[1],-i[0],0],s=Qs(r,i);Kl(s),s=Yl(s);var o=n-Xr,a=o>0?1:-1,c=s[0]*en*a,l,h=Wt(o)>180;h^(a*Xr<c&&c<a*n)?(l=s[1]*en,l>ti&&(ti=l)):(c=(c+360)%360-180,h^(a*Xr<c&&c<a*n)?(l=-s[1]*en,l<qn&&(qn=l)):(e<qn&&(qn=e),e>ti&&(ti=e))),h?n<Xr?Qn(Jt,n)>Qn(Jt,Qt)&&(Qt=n):Qn(n,Qt)>Qn(Jt,Qt)&&(Jt=n):Qt>=Jt?(n<Jt&&(Jt=n),n>Qt&&(Qt=n)):n>Xr?Qn(Jt,n)>Qn(Jt,Qt)&&(Qt=n):Qn(n,Qt)>Qn(Jt,Qt)&&(Jt=n)}else wr.push(_r=[Jt=n,Qt=n]);e<qn&&(qn=e),e>ti&&(ti=e),$s=t,Xr=n}function Wp(){rr.point=$g}function $p(){_r[0]=Jt,_r[1]=Qt,rr.point=rh,$s=null}function Xg(n,e){if($s){var t=n-Xr;qo.add(Wt(t)>180?t+(t>0?360:-360):t)}else Gg=n,Wg=e;gr.point(n,e),$g(n,e)}function Uw(){gr.lineStart()}function Fw(){Xg(Gg,Wg),gr.lineEnd(),Wt(qo)>Dt&&(Jt=-(Qt=180)),_r[0]=Jt,_r[1]=Qt,$s=null}function Qn(n,e){return(e-=n)<0?e+360:e}function Bw(n,e){return n[0]-e[0]}function Xp(n,e){return n[0]<=n[1]?n[0]<=e&&e<=n[1]:e<n[0]||n[1]<e}function qg(n){var e,t,i,r,s,o,a;if(ti=Qt=-(Jt=qn=1/0),wr=[],Rc(n,rr),t=wr.length){for(wr.sort(Bw),e=1,i=wr[0],s=[i];e<t;++e)r=wr[e],Xp(i,r[0])||Xp(i,r[1])?(Qn(i[0],r[1])>Qn(i[0],i[1])&&(i[1]=r[1]),Qn(r[0],i[1])>Qn(i[0],i[1])&&(i[0]=r[0])):s.push(i=r);for(o=-1/0,t=s.length-1,e=0,i=s[t];e<=t;i=r,++e)r=s[e],(a=Qn(i[1],r[0]))>o&&(o=a,Jt=r[0],Qt=i[1])}return wr=_r=null,Jt===1/0||qn===1/0?[[NaN,NaN],[NaN,NaN]]:[[Jt,qn],[Qt,ti]]}var Vo,Zl,jl,Jl,Ql,ec,tc,nc,sh,oh,ah,Yg,Kg,Bn,zn,kn,Ci={sphere:Tn,point:Zh,lineStart:qp,lineEnd:Yp,polygonStart:function(){Ci.lineStart=Vw,Ci.lineEnd=Hw},polygonEnd:function(){Ci.lineStart=qp,Ci.lineEnd=Yp}};function Zh(n,e){n*=ct,e*=ct;var t=ut(e);ha(t*ut(n),t*at(n),at(e))}function ha(n,e,t){++Vo,jl+=(n-jl)/Vo,Jl+=(e-Jl)/Vo,Ql+=(t-Ql)/Vo}function qp(){Ci.point=zw}function zw(n,e){n*=ct,e*=ct;var t=ut(e);Bn=t*ut(n),zn=t*at(n),kn=at(e),Ci.point=kw,ha(Bn,zn,kn)}function kw(n,e){n*=ct,e*=ct;var t=ut(e),i=t*ut(n),r=t*at(n),s=at(e),o=mi(pr((o=zn*s-kn*r)*o+(o=kn*i-Bn*s)*o+(o=Bn*r-zn*i)*o),Bn*i+zn*r+kn*s);Zl+=o,ec+=o*(Bn+(Bn=i)),tc+=o*(zn+(zn=r)),nc+=o*(kn+(kn=s)),ha(Bn,zn,kn)}function Yp(){Ci.point=Zh}function Vw(){Ci.point=Gw}function Hw(){Zg(Yg,Kg),Ci.point=Zh}function Gw(n,e){Yg=n,Kg=e,n*=ct,e*=ct,Ci.point=Zg;var t=ut(e);Bn=t*ut(n),zn=t*at(n),kn=at(e),ha(Bn,zn,kn)}function Zg(n,e){n*=ct,e*=ct;var t=ut(e),i=t*ut(n),r=t*at(n),s=at(e),o=zn*s-kn*r,a=kn*i-Bn*s,c=Bn*r-zn*i,l=Qu(o,a,c),h=mr(l),f=l&&-h/l;sh.add(f*o),oh.add(f*a),ah.add(f*c),Zl+=h,ec+=h*(Bn+(Bn=i)),tc+=h*(zn+(zn=r)),nc+=h*(kn+(kn=s)),ha(Bn,zn,kn)}function Kp(n){Vo=Zl=jl=Jl=Ql=ec=tc=nc=0,sh=new fr,oh=new fr,ah=new fr,Rc(n,Ci);var e=+sh,t=+oh,i=+ah,r=Qu(e,t,i);return r<Wl&&(e=ec,t=tc,i=nc,Zl<Dt&&(e=jl,t=Jl,i=Ql),r=Qu(e,t,i),r<Wl)?[NaN,NaN]:[mi(t,e)*en,mr(i/r)*en]}function lh(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function ch(n,e){return Wt(n)>Tt&&(n-=Math.round(n/ri)*ri),[n,e]}ch.invert=ch;function jg(n,e,t){return(n%=ri)?e||t?lh(jp(n),Jp(e,t)):jp(n):e||t?Jp(e,t):ch}function Zp(n){return function(e,t){return e+=n,Wt(e)>Tt&&(e-=Math.round(e/ri)*ri),[e,t]}}function jp(n){var e=Zp(n);return e.invert=Zp(-n),e}function Jp(n,e){var t=ut(n),i=at(n),r=ut(e),s=at(e);function o(a,c){var l=ut(c),h=ut(a)*l,f=at(a)*l,u=at(c),p=u*t+h*i;return[mi(f*r-p*s,h*t-u*i),mr(p*r+f*s)]}return o.invert=function(a,c){var l=ut(c),h=ut(a)*l,f=at(a)*l,u=at(c),p=u*r-f*s;return[mi(f*r+u*s,h*t+p*i),mr(p*t-h*i)]},o}function Ww(n){n=jg(n[0]*ct,n[1]*ct,n.length>2?n[2]*ct:0);function e(t){return t=n(t[0]*ct,t[1]*ct),t[0]*=en,t[1]*=en,t}return e.invert=function(t){return t=n.invert(t[0]*ct,t[1]*ct),t[0]*=en,t[1]*=en,t},e}function $w(n,e,t,i,r,s){if(t){var o=ut(e),a=at(e),c=i*t;r==null?(r=e+i*ri,s=e-c/2):(r=Qp(o,r),s=Qp(o,s),(i>0?r<s:r>s)&&(r+=i*ri));for(var l,h=r;i>0?h>s:h<s;h-=c)l=Yl([o,-a*ut(h),-a*at(h)]),n.point(l[0],l[1])}}function Qp(n,e){e=os(e),e[0]-=n,Kl(e);var t=Dw(-e[1]);return((-e[2]<0?-t:t)+ri-Dt)%ri}function Jg(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:Tn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function El(n,e){return Wt(n[0]-e[0])<Dt&&Wt(n[1]-e[1])<Dt}function el(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function Qg(n,e,t,i,r){var s=[],o=[],a,c;if(n.forEach(function(m){if(!((v=m.length-1)<=0)){var v,_=m[0],x=m[v],T;if(El(_,x)){if(!_[2]&&!x[2]){for(r.lineStart(),a=0;a<v;++a)r.point((_=m[a])[0],_[1]);r.lineEnd();return}x[0]+=2*Dt}s.push(T=new el(_,m,null,!0)),o.push(T.o=new el(_,null,T,!1)),s.push(T=new el(x,m,null,!1)),o.push(T.o=new el(x,null,T,!0))}}),!!s.length){for(o.sort(e),em(s),em(o),a=0,c=o.length;a<c;++a)o[a].e=t=!t;for(var l=s[0],h,f;;){for(var u=l,p=!0;u.v;)if((u=u.n)===l)return;h=u.z,r.lineStart();do{if(u.v=u.o.v=!0,u.e){if(p)for(a=0,c=h.length;a<c;++a)r.point((f=h[a])[0],f[1]);else i(u.x,u.n.x,1,r);u=u.n}else{if(p)for(h=u.p.z,a=h.length-1;a>=0;--a)r.point((f=h[a])[0],f[1]);else i(u.x,u.p.x,-1,r);u=u.p}u=u.o,h=u.z,p=!p}while(!u.v);r.lineEnd()}}}function em(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function Tf(n){return Wt(n[0])<=Tt?n[0]:Iw(n[0])*((Wt(n[0])+Tt)%ri-Tt)}function e_(n,e){var t=Tf(e),i=e[1],r=at(i),s=[at(t),-ut(t),0],o=0,a=0,c=new fr;r===1?i=di+Dt:r===-1&&(i=-di-Dt);for(var l=0,h=n.length;l<h;++l)if(u=(f=n[l]).length)for(var f,u,p=f[u-1],m=Tf(p),v=p[1]/2+$l,_=at(v),x=ut(v),T=0;T<u;++T,m=S,_=A,x=F,p=R){var R=f[T],S=Tf(R),I=R[1]/2+$l,A=at(I),F=ut(I),M=S-m,E=M>=0?1:-1,L=E*M,U=L>Tt,z=_*A;if(c.add(mi(z*E*at(L),x*F+z*ut(L))),o+=U?M+E*ri:M,U^m>=t^S>=t){var C=Qs(os(p),os(R));Kl(C);var k=Qs(s,C);Kl(k);var P=(U^M>=0?-1:1)*mr(k[2]);(i>P||i===P&&(C[0]||C[1]))&&(a+=U^M>=0?1:-1)}}return(o<-Dt||o<Dt&&c<-Wl)^a&1}function t_(n,e,t,i){return function(r){var s=e(r),o=Jg(),a=e(o),c=!1,l,h,f,u={point:p,lineStart:v,lineEnd:_,polygonStart:function(){u.point=x,u.lineStart=T,u.lineEnd=R,h=[],l=[]},polygonEnd:function(){u.point=p,u.lineStart=v,u.lineEnd=_,h=ea(h);var S=e_(l,i);h.length?(c||(r.polygonStart(),c=!0),Qg(h,qw,S,t,r)):S&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),h=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(S,I){n(S,I)&&r.point(S,I)}function m(S,I){s.point(S,I)}function v(){u.point=m,s.lineStart()}function _(){u.point=p,s.lineEnd()}function x(S,I){f.push([S,I]),a.point(S,I)}function T(){a.lineStart(),f=[]}function R(){x(f[0][0],f[0][1]),a.lineEnd();var S=a.clean(),I=o.result(),A,F=I.length,M,E,L;if(f.pop(),l.push(f),f=null,!!F){if(S&1){if(E=I[0],(M=E.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),A=0;A<M;++A)r.point((L=E[A])[0],L[1]);r.lineEnd()}return}F>1&&S&2&&I.push(I.pop().concat(I.shift())),h.push(I.filter(Xw))}}return u}}function Xw(n){return n.length>1}function qw(n,e){return((n=n.x)[0]<0?n[1]-di-Dt:di-n[1])-((e=e.x)[0]<0?e[1]-di-Dt:di-e[1])}const tm=t_(function(){return!0},Yw,Zw,[-Tt,-di]);function Yw(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,o){var a=s>0?Tt:-Tt,c=Wt(s-e);Wt(c-Tt)<Dt?(n.point(e,t=(t+o)/2>0?di:-di),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),n.point(s,t),r=0):i!==a&&c>=Tt&&(Wt(e-i)<Dt&&(e-=i*Dt),Wt(s-a)<Dt&&(s-=a*Dt),t=Kw(e,t,s,o),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),r=0),n.point(e=s,t=o),i=a},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function Kw(n,e,t,i){var r,s,o=at(n-t);return Wt(o)>Dt?zg((at(e)*(s=ut(i))*at(t)-at(i)*(r=ut(e))*at(n))/(r*s*o)):(e+i)/2}function Zw(n,e,t,i){var r;if(n==null)r=t*di,i.point(-Tt,r),i.point(0,r),i.point(Tt,r),i.point(Tt,0),i.point(Tt,-r),i.point(0,-r),i.point(-Tt,-r),i.point(-Tt,0),i.point(-Tt,r);else if(Wt(n[0]-e[0])>Dt){var s=n[0]<e[0]?Tt:-Tt;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function jw(n){var e=ut(n),t=2*ct,i=e>0,r=Wt(e)>Dt;function s(h,f,u,p){$w(p,n,t,u,h,f)}function o(h,f){return ut(h)*ut(f)>e}function a(h){var f,u,p,m,v;return{lineStart:function(){m=p=!1,v=1},point:function(_,x){var T=[_,x],R,S=o(_,x),I=i?S?0:l(_,x):S?l(_+(_<0?Tt:-Tt),x):0;if(!f&&(m=p=S)&&h.lineStart(),S!==p&&(R=c(f,T),(!R||El(f,R)||El(T,R))&&(T[2]=1)),S!==p)v=0,S?(h.lineStart(),R=c(T,f),h.point(R[0],R[1])):(R=c(f,T),h.point(R[0],R[1],2),h.lineEnd()),f=R;else if(r&&f&&i^S){var A;!(I&u)&&(A=c(T,f,!0))&&(v=0,i?(h.lineStart(),h.point(A[0][0],A[0][1]),h.point(A[1][0],A[1][1]),h.lineEnd()):(h.point(A[1][0],A[1][1]),h.lineEnd(),h.lineStart(),h.point(A[0][0],A[0][1],3)))}S&&(!f||!El(f,T))&&h.point(T[0],T[1]),f=T,p=S,u=I},lineEnd:function(){p&&h.lineEnd(),f=null},clean:function(){return v|(m&&p)<<1}}}function c(h,f,u){var p=os(h),m=os(f),v=[1,0,0],_=Qs(p,m),x=Ja(_,_),T=_[0],R=x-T*T;if(!R)return!u&&h;var S=e*x/R,I=-e*T/R,A=Qs(v,_),F=Qa(v,S),M=Qa(_,I);wf(F,M);var E=A,L=Ja(F,E),U=Ja(E,E),z=L*L-U*(Ja(F,F)-1);if(!(z<0)){var C=pr(z),k=Qa(E,(-L-C)/U);if(wf(k,F),k=Yl(k),!u)return k;var P=h[0],B=f[0],N=h[1],G=f[1],W;B<P&&(W=P,P=B,B=W);var J=B-P,ae=Wt(J-Tt)<Dt,me=ae||J<Dt;if(!ae&&G<N&&(W=N,N=G,G=W),me?ae?N+G>0^k[1]<(Wt(k[0]-P)<Dt?N:G):N<=k[1]&&k[1]<=G:J>Tt^(P<=k[0]&&k[0]<=B)){var Le=Qa(E,(-L+C)/U);return wf(Le,F),[k,Yl(Le)]}}}function l(h,f){var u=i?n:Tt-n,p=0;return h<-u?p|=1:h>u&&(p|=2),f<-u?p|=4:f>u&&(p|=8),p}return t_(o,a,s,i?[0,-n]:[-Tt,n-Tt])}function Jw(n,e,t,i,r,s){var o=n[0],a=n[1],c=e[0],l=e[1],h=0,f=1,u=c-o,p=l-a,m;if(m=t-o,!(!u&&m>0)){if(m/=u,u<0){if(m<h)return;m<f&&(f=m)}else if(u>0){if(m>f)return;m>h&&(h=m)}if(m=r-o,!(!u&&m<0)){if(m/=u,u<0){if(m>f)return;m>h&&(h=m)}else if(u>0){if(m<h)return;m<f&&(f=m)}if(m=i-a,!(!p&&m>0)){if(m/=p,p<0){if(m<h)return;m<f&&(f=m)}else if(p>0){if(m>f)return;m>h&&(h=m)}if(m=s-a,!(!p&&m<0)){if(m/=p,p<0){if(m>f)return;m>h&&(h=m)}else if(p>0){if(m<h)return;m<f&&(f=m)}return h>0&&(n[0]=o+h*u,n[1]=a+h*p),f<1&&(e[0]=o+f*u,e[1]=a+f*p),!0}}}}}var Ho=1e9,tl=-Ho;function Qw(n,e,t,i){function r(l,h){return n<=l&&l<=t&&e<=h&&h<=i}function s(l,h,f,u){var p=0,m=0;if(l==null||(p=o(l,f))!==(m=o(h,f))||c(l,h)<0^f>0)do u.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+f+4)%4)!==m);else u.point(h[0],h[1])}function o(l,h){return Wt(l[0]-n)<Dt?h>0?0:3:Wt(l[0]-t)<Dt?h>0?2:1:Wt(l[1]-e)<Dt?h>0?1:0:h>0?3:2}function a(l,h){return c(l.x,h.x)}function c(l,h){var f=o(l,1),u=o(h,1);return f!==u?f-u:f===0?h[1]-l[1]:f===1?l[0]-h[0]:f===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,f=Jg(),u,p,m,v,_,x,T,R,S,I,A,F={point:M,lineStart:z,lineEnd:C,polygonStart:L,polygonEnd:U};function M(P,B){r(P,B)&&h.point(P,B)}function E(){for(var P=0,B=0,N=p.length;B<N;++B)for(var G=p[B],W=1,J=G.length,ae=G[0],me,Le,Ne=ae[0],tt=ae[1];W<J;++W)me=Ne,Le=tt,ae=G[W],Ne=ae[0],tt=ae[1],Le<=i?tt>i&&(Ne-me)*(i-Le)>(tt-Le)*(n-me)&&++P:tt<=i&&(Ne-me)*(i-Le)<(tt-Le)*(n-me)&&--P;return P}function L(){h=f,u=[],p=[],A=!0}function U(){var P=E(),B=A&&P,N=(u=ea(u)).length;(B||N)&&(l.polygonStart(),B&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),N&&Qg(u,a,P,s,l),l.polygonEnd()),h=l,u=p=m=null}function z(){F.point=k,p&&p.push(m=[]),I=!0,S=!1,T=R=NaN}function C(){u&&(k(v,_),x&&S&&f.rejoin(),u.push(f.result())),F.point=M,S&&h.lineEnd()}function k(P,B){var N=r(P,B);if(p&&m.push([P,B]),I)v=P,_=B,x=N,I=!1,N&&(h.lineStart(),h.point(P,B));else if(N&&S)h.point(P,B);else{var G=[T=Math.max(tl,Math.min(Ho,T)),R=Math.max(tl,Math.min(Ho,R))],W=[P=Math.max(tl,Math.min(Ho,P)),B=Math.max(tl,Math.min(Ho,B))];Jw(G,W,n,e,t,i)?(S||(h.lineStart(),h.point(G[0],G[1])),h.point(W[0],W[1]),N||h.lineEnd(),A=!1):N&&(h.lineStart(),h.point(P,B),A=!1)}T=P,R=B,S=N}return F}}var fh,uh,bl,wl,eo={sphere:Tn,point:Tn,lineStart:eT,lineEnd:Tn,polygonStart:Tn,polygonEnd:Tn};function eT(){eo.point=nT,eo.lineEnd=tT}function tT(){eo.point=eo.lineEnd=Tn}function nT(n,e){n*=ct,e*=ct,uh=n,bl=at(e),wl=ut(e),eo.point=iT}function iT(n,e){n*=ct,e*=ct;var t=at(e),i=ut(e),r=Wt(n-uh),s=ut(r),o=at(r),a=i*o,c=wl*t-bl*i*s,l=bl*t+wl*i*s;fh.add(mi(pr(a*a+c*c),l)),uh=n,bl=t,wl=i}function rT(n){return fh=new fr,Rc(n,eo),+fh}var hh=[null,null],sT={type:"LineString",coordinates:hh};function to(n,e){return hh[0]=n,hh[1]=e,rT(sT)}var nm={Feature:function(n,e){return ic(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)if(ic(t[i].geometry,e))return!0;return!1}},im={Sphere:function(){return!0},Point:function(n,e){return rm(n.coordinates,e)},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(rm(t[i],e))return!0;return!1},LineString:function(n,e){return sm(n.coordinates,e)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(sm(t[i],e))return!0;return!1},Polygon:function(n,e){return om(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(om(t[i],e))return!0;return!1},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)if(ic(t[i],e))return!0;return!1}};function ic(n,e){return n&&im.hasOwnProperty(n.type)?im[n.type](n,e):!1}function rm(n,e){return to(n,e)===0}function sm(n,e){for(var t,i,r,s=0,o=n.length;s<o;s++){if(i=to(n[s],e),i===0||s>0&&(r=to(n[s],n[s-1]),r>0&&t<=r&&i<=r&&(t+i-r)*(1-Math.pow((t-i)/r,2))<Wl*r))return!0;t=i}return!1}function om(n,e){return!!e_(n.map(oT),n_(e))}function oT(n){return n=n.map(n_),n.pop(),n}function n_(n){return[n[0]*ct,n[1]*ct]}function aT(n,e){return(n&&nm.hasOwnProperty(n.type)?nm[n.type]:ic)(n,e)}function lT(n,e){var t=n[0]*ct,i=n[1]*ct,r=e[0]*ct,s=e[1]*ct,o=ut(i),a=at(i),c=ut(s),l=at(s),h=o*ut(t),f=o*at(t),u=c*ut(r),p=c*at(r),m=2*mr(pr(zp(s-i)+o*c*zp(r-t))),v=at(m),_=m?function(x){var T=at(x*=m)/v,R=at(m-x)/v,S=R*h+T*u,I=R*f+T*p,A=R*a+T*l;return[mi(I,S)*en,mi(A,pr(S*S+I*I))*en]}:function(){return[t*en,i*en]};return _.distance=m,_}const am=n=>n;var no=1/0,rc=no,oa=-no,sc=oa,lm={point:cT,lineStart:Tn,lineEnd:Tn,polygonStart:Tn,polygonEnd:Tn,result:function(){var n=[[no,rc],[oa,sc]];return oa=sc=-(rc=no=1/0),n}};function cT(n,e){n<no&&(no=n),n>oa&&(oa=n),e<rc&&(rc=e),e>sc&&(sc=e)}function jh(n){return function(e){var t=new dh;for(var i in n)t[i]=n[i];return t.stream=e,t}}function dh(){}dh.prototype={constructor:dh,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Jh(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),Rc(t,n.stream(lm)),e(lm.result()),i!=null&&n.clipExtent(i),n}function i_(n,e,t){return Jh(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,c])},t)}function fT(n,e,t){return i_(n,[[0,0],e],t)}function uT(n,e,t){return Jh(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];n.scale(150*s).translate([o,a])},t)}function hT(n,e,t){return Jh(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([o,a])},t)}var cm=16,dT=ut(30*ct);function fm(n,e){return+e?mT(n,e):pT(n)}function pT(n){return jh({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function mT(n,e){function t(i,r,s,o,a,c,l,h,f,u,p,m,v,_){var x=l-i,T=h-r,R=x*x+T*T;if(R>4*e&&v--){var S=o+u,I=a+p,A=c+m,F=pr(S*S+I*I+A*A),M=mr(A/=F),E=Wt(Wt(A)-1)<Dt||Wt(s-f)<Dt?(s+f)/2:mi(I,S),L=n(E,M),U=L[0],z=L[1],C=U-i,k=z-r,P=T*C-x*k;(P*P/R>e||Wt((x*C+T*k)/R-.5)>.3||o*u+a*p+c*m<dT)&&(t(i,r,s,o,a,c,U,z,E,S/=F,I/=F,A,v,_),_.point(U,z),t(U,z,E,S,I,A,l,h,f,u,p,m,v,_))}}return function(i){var r,s,o,a,c,l,h,f,u,p,m,v,_={point:x,lineStart:T,lineEnd:S,polygonStart:function(){i.polygonStart(),_.lineStart=I},polygonEnd:function(){i.polygonEnd(),_.lineStart=T}};function x(M,E){M=n(M,E),i.point(M[0],M[1])}function T(){f=NaN,_.point=R,i.lineStart()}function R(M,E){var L=os([M,E]),U=n(M,E);t(f,u,h,p,m,v,f=U[0],u=U[1],h=M,p=L[0],m=L[1],v=L[2],cm,i),i.point(f,u)}function S(){_.point=x,i.lineEnd()}function I(){T(),_.point=A,_.lineEnd=F}function A(M,E){R(r=M,E),s=f,o=u,a=p,c=m,l=v,_.point=R}function F(){t(f,u,h,p,m,v,s,o,r,a,c,l,cm,i),_.lineEnd=S,S()}return _}}var gT=jh({point:function(n,e){this.stream.point(n*ct,e*ct)}});function _T(n){return jh({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function xT(n,e,t,i,r){function s(o,a){return o*=i,a*=r,[e+n*o,t-n*a]}return s.invert=function(o,a){return[(o-e)/n*i,(t-a)/n*r]},s}function um(n,e,t,i,r,s){if(!s)return xT(n,e,t,i,r);var o=ut(s),a=at(s),c=o*n,l=a*n,h=o/n,f=a/n,u=(a*t-o*e)/n,p=(a*e+o*t)/n;function m(v,_){return v*=i,_*=r,[c*v-l*_+e,t-l*v-c*_]}return m.invert=function(v,_){return[i*(h*v-f*_+u),r*(p-f*v-h*_)]},m}function vT(n){return yT(function(){return n})()}function yT(n){var e,t=150,i=480,r=250,s=0,o=0,a=0,c=0,l=0,h,f=0,u=1,p=1,m=null,v=tm,_=null,x,T,R,S=am,I=.5,A,F,M,E,L;function U(P){return M(P[0]*ct,P[1]*ct)}function z(P){return P=M.invert(P[0],P[1]),P&&[P[0]*en,P[1]*en]}U.stream=function(P){return E&&L===P?E:E=gT(_T(h)(v(A(S(L=P)))))},U.preclip=function(P){return arguments.length?(v=P,m=void 0,k()):v},U.postclip=function(P){return arguments.length?(S=P,_=x=T=R=null,k()):S},U.clipAngle=function(P){return arguments.length?(v=+P?jw(m=P*ct):(m=null,tm),k()):m*en},U.clipExtent=function(P){return arguments.length?(S=P==null?(_=x=T=R=null,am):Qw(_=+P[0][0],x=+P[0][1],T=+P[1][0],R=+P[1][1]),k()):_==null?null:[[_,x],[T,R]]},U.scale=function(P){return arguments.length?(t=+P,C()):t},U.translate=function(P){return arguments.length?(i=+P[0],r=+P[1],C()):[i,r]},U.center=function(P){return arguments.length?(s=P[0]%360*ct,o=P[1]%360*ct,C()):[s*en,o*en]},U.rotate=function(P){return arguments.length?(a=P[0]%360*ct,c=P[1]%360*ct,l=P.length>2?P[2]%360*ct:0,C()):[a*en,c*en,l*en]},U.angle=function(P){return arguments.length?(f=P%360*ct,C()):f*en},U.reflectX=function(P){return arguments.length?(u=P?-1:1,C()):u<0},U.reflectY=function(P){return arguments.length?(p=P?-1:1,C()):p<0},U.precision=function(P){return arguments.length?(A=fm(F,I=P*P),k()):pr(I)},U.fitExtent=function(P,B){return i_(U,P,B)},U.fitSize=function(P,B){return fT(U,P,B)},U.fitWidth=function(P,B){return uT(U,P,B)},U.fitHeight=function(P,B){return hT(U,P,B)};function C(){var P=um(t,0,0,u,p,f).apply(null,e(s,o)),B=um(t,i-P[0],r-P[1],u,p,f);return h=jg(a,c,l),F=lh(e,B),M=lh(h,F),A=fm(F,I),k()}function k(){return E=L=null,U}return function(){return e=n.apply(this,arguments),U.invert=e.invert&&z,C()}}function ST(n){return function(e,t){var i=pr(e*e+t*t),r=n(i),s=at(r),o=ut(r);return[mi(e*s,i*o),mr(i&&t*s/i)]}}function r_(n,e){var t=ut(e),i=1+ut(n)*t;return[t*at(n)/i,at(e)/i]}r_.invert=ST(function(n){return 2*zg(n)});function MT(){return vT(r_).scale(250).clipAngle(142)}const hm=1e-6;class Jr{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t,i=+i;const r=e+i,s=t;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${r},${s}`:(Math.abs(this._x1-r)>hm||Math.abs(this._y1-s)>hm)&&(this._+="L"+r+","+s),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=r},${this._y1=s}`)}rect(e,t,i,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+r}h${-i}Z`}value(){return this._||null}}class ph{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class ET{constructor(e,[t,i,r,s]=[0,0,960,500]){if(!((r=+r)>=(t=+t))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=r,this.xmin=t,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:i},vectors:r}=this;let s,o;const a=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let v=0,_=0,x=i.length,T,R;v<x;v+=3,_+=2){const S=i[v]*2,I=i[v+1]*2,A=i[v+2]*2,F=e[S],M=e[S+1],E=e[I],L=e[I+1],U=e[A],z=e[A+1],C=E-F,k=L-M,P=U-F,B=z-M,N=(C*B-k*P)*2;if(Math.abs(N)<1e-9){if(s===void 0){s=o=0;for(const W of t)s+=e[W*2],o+=e[W*2+1];s/=t.length,o/=t.length}const G=1e9*Math.sign((s-F)*B-(o-M)*P);T=(F+U)/2-G*B,R=(M+z)/2+G*P}else{const G=1/N,W=C*C+k*k,J=P*P+B*B;T=F+(B*W-k*J)*G,R=M+(C*J-P*W)*G}a[_]=T,a[_+1]=R}let c=t[t.length-1],l,h=c*4,f,u=e[2*c],p,m=e[2*c+1];r.fill(0);for(let v=0;v<t.length;++v)c=t[v],l=h,f=u,p=m,h=c*4,u=e[2*c],m=e[2*c+1],r[l+2]=r[h]=p-m,r[l+3]=r[h+1]=u-f}render(e){const t=e==null?e=new Jr:void 0,{delaunay:{halfedges:i,inedges:r,hull:s},circumcenters:o,vectors:a}=this;if(s.length<=1)return null;for(let h=0,f=i.length;h<f;++h){const u=i[h];if(u<h)continue;const p=Math.floor(h/3)*2,m=Math.floor(u/3)*2,v=o[p],_=o[p+1],x=o[m],T=o[m+1];this._renderSegment(v,_,x,T,e)}let c,l=s[s.length-1];for(let h=0;h<s.length;++h){c=l,l=s[h];const f=Math.floor(r[l]/3)*2,u=o[f],p=o[f+1],m=c*4,v=this._project(u,p,a[m+2],a[m+3]);v&&this._renderSegment(u,p,v[0],v[1],e)}return t&&t.value()}renderBounds(e){const t=e==null?e=new Jr:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const i=t==null?t=new Jr:void 0,r=this._clip(e);if(r===null||!r.length)return;t.moveTo(r[0],r[1]);let s=r.length;for(;r[0]===r[s-2]&&r[1]===r[s-1]&&s>1;)s-=2;for(let o=2;o<s;o+=2)(r[o]!==r[o-2]||r[o+1]!==r[o-1])&&t.lineTo(r[o],r[o+1]);return t.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){const r=this.cellPolygon(t);r&&(r.index=t,yield r)}}cellPolygon(e){const t=new ph;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,r,s){let o;const a=this._regioncode(e,t),c=this._regioncode(i,r);a===0&&c===0?(s.moveTo(e,t),s.lineTo(i,r)):(o=this._clipSegment(e,t,i,r,a,c))&&(s.moveTo(o[0],o[1]),s.lineTo(o[2],o[3]))}contains(e,t,i){return t=+t,t!==t||(i=+i,i!==i)?!1:this.delaunay._step(e,t,i)===e}*neighbors(e){const t=this._clip(e);if(t)for(const i of this.delaunay.neighbors(e)){const r=this._clip(i);if(r){e:for(let s=0,o=t.length;s<o;s+=2)for(let a=0,c=r.length;a<c;a+=2)if(t[s]===r[a]&&t[s+1]===r[a+1]&&t[(s+2)%o]===r[(a+c-2)%c]&&t[(s+3)%o]===r[(a+c-1)%c]){yield i;break e}}}}_cell(e){const{circumcenters:t,delaunay:{inedges:i,halfedges:r,triangles:s}}=this,o=i[e];if(o===-1)return null;const a=[];let c=o;do{const l=Math.floor(c/3);if(a.push(t[l*2],t[l*2+1]),c=c%3===2?c-2:c+1,s[c]!==e)break;c=r[c]}while(c!==o&&c!==-1);return a}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const t=this._cell(e);if(t===null)return null;const{vectors:i}=this,r=e*4;return this._simplify(i[r]||i[r+1]?this._clipInfinite(e,t,i[r],i[r+1],i[r+2],i[r+3]):this._clipFinite(e,t))}_clipFinite(e,t){const i=t.length;let r=null,s,o,a=t[i-2],c=t[i-1],l,h=this._regioncode(a,c),f,u=0;for(let p=0;p<i;p+=2)if(s=a,o=c,a=t[p],c=t[p+1],l=h,h=this._regioncode(a,c),l===0&&h===0)f=u,u=0,r?r.push(a,c):r=[a,c];else{let m,v,_,x,T;if(l===0){if((m=this._clipSegment(s,o,a,c,l,h))===null)continue;[v,_,x,T]=m}else{if((m=this._clipSegment(a,c,s,o,h,l))===null)continue;[x,T,v,_]=m,f=u,u=this._edgecode(v,_),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(v,_):r=[v,_]}f=u,u=this._edgecode(x,T),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(x,T):r=[x,T]}if(r)f=u,u=this._edgecode(r[0],r[1]),f&&u&&this._edge(e,f,u,r,r.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return r}_clipSegment(e,t,i,r,s,o){const a=s<o;for(a&&([e,t,i,r,s,o]=[i,r,e,t,o,s]);;){if(s===0&&o===0)return a?[i,r,e,t]:[e,t,i,r];if(s&o)return null;let c,l,h=s||o;h&8?(c=e+(i-e)*(this.ymax-t)/(r-t),l=this.ymax):h&4?(c=e+(i-e)*(this.ymin-t)/(r-t),l=this.ymin):h&2?(l=t+(r-t)*(this.xmax-e)/(i-e),c=this.xmax):(l=t+(r-t)*(this.xmin-e)/(i-e),c=this.xmin),s?(e=c,t=l,s=this._regioncode(e,t)):(i=c,r=l,o=this._regioncode(i,r))}}_clipInfinite(e,t,i,r,s,o){let a=Array.from(t),c;if((c=this._project(a[0],a[1],i,r))&&a.unshift(c[0],c[1]),(c=this._project(a[a.length-2],a[a.length-1],s,o))&&a.push(c[0],c[1]),a=this._clipFinite(e,a))for(let l=0,h=a.length,f,u=this._edgecode(a[h-2],a[h-1]);l<h;l+=2)f=u,u=this._edgecode(a[l],a[l+1]),f&&u&&(l=this._edge(e,f,u,a,l),h=a.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(a=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return a}_edge(e,t,i,r,s){for(;t!==i;){let o,a;switch(t){case 5:t=4;continue;case 4:t=6,o=this.xmax,a=this.ymin;break;case 6:t=2;continue;case 2:t=10,o=this.xmax,a=this.ymax;break;case 10:t=8;continue;case 8:t=9,o=this.xmin,a=this.ymax;break;case 9:t=1;continue;case 1:t=5,o=this.xmin,a=this.ymin;break}(r[s]!==o||r[s+1]!==a)&&this.contains(e,o,a)&&(r.splice(s,0,o,a),s+=2)}return s}_project(e,t,i,r){let s=1/0,o,a,c;if(r<0){if(t<=this.ymin)return null;(o=(this.ymin-t)/r)<s&&(c=this.ymin,a=e+(s=o)*i)}else if(r>0){if(t>=this.ymax)return null;(o=(this.ymax-t)/r)<s&&(c=this.ymax,a=e+(s=o)*i)}if(i>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/i)<s&&(a=this.xmax,c=t+(s=o)*r)}else if(i<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/i)<s&&(a=this.xmin,c=t+(s=o)*r)}return[a,c]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){const i=(t+2)%e.length,r=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[r]||e[t+1]===e[i+1]&&e[i+1]===e[r+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}const bT=2*Math.PI,Ls=Math.pow;function wT(n){return n[0]}function TT(n){return n[1]}function AT(n){const{triangles:e,coords:t}=n;for(let i=0;i<e.length;i+=3){const r=2*e[i],s=2*e[i+1],o=2*e[i+2];if((t[o]-t[r])*(t[s+1]-t[r+1])-(t[s]-t[r])*(t[o+1]-t[r+1])>1e-10)return!1}return!0}function RT(n,e,t){return[n+Math.sin(n+e)*t,e+Math.cos(n-e)*t]}class Qh{static from(e,t=wT,i=TT,r){return new Qh("length"in e?CT(e,t,i,r):Float64Array.from(PT(e,t,i,r)))}constructor(e){this._delaunator=new sa(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&AT(e)){this.collinear=Int32Array.from({length:t.length/2},(u,p)=>p).sort((u,p)=>t[2*u]-t[2*p]||t[2*u+1]-t[2*p+1]);const c=this.collinear[0],l=this.collinear[this.collinear.length-1],h=[t[2*c],t[2*c+1],t[2*l],t[2*l+1]],f=1e-8*Math.hypot(h[3]-h[1],h[2]-h[0]);for(let u=0,p=t.length/2;u<p;++u){const m=RT(t[2*u],t[2*u+1],f);t[2*u]=m[0],t[2*u+1]=m[1]}this._delaunator=new sa(t)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1);for(let c=0,l=i.length;c<l;++c){const h=s[c%3===2?c-2:c+1];(i[c]===-1||o[h]===-1)&&(o[h]=c)}for(let c=0,l=r.length;c<l;++c)a[r[c]]=c;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],o[r[0]]=1,r.length===2&&(o[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new ET(this,e)}*neighbors(e){const{inedges:t,hull:i,_hullIndex:r,halfedges:s,triangles:o,collinear:a}=this;if(a){const f=a.indexOf(e);f>0&&(yield a[f-1]),f<a.length-1&&(yield a[f+1]);return}const c=t[e];if(c===-1)return;let l=c,h=-1;do{if(yield h=o[l],l=l%3===2?l-2:l+1,o[l]!==e)return;if(l=s[l],l===-1){const f=i[(r[e]+1)%i.length];f!==h&&(yield f);return}}while(l!==c)}find(e,t,i=0){if(e=+e,e!==e||(t=+t,t!==t))return-1;const r=i;let s;for(;(s=this._step(i,e,t))>=0&&s!==i&&s!==r;)i=s;return s}_step(e,t,i){const{inedges:r,hull:s,_hullIndex:o,halfedges:a,triangles:c,points:l}=this;if(r[e]===-1||!l.length)return(e+1)%(l.length>>1);let h=e,f=Ls(t-l[e*2],2)+Ls(i-l[e*2+1],2);const u=r[e];let p=u;do{let m=c[p];const v=Ls(t-l[m*2],2)+Ls(i-l[m*2+1],2);if(v<f&&(f=v,h=m),p=p%3===2?p-2:p+1,c[p]!==e)break;if(p=a[p],p===-1){if(p=s[(o[e]+1)%s.length],p!==m&&Ls(t-l[p*2],2)+Ls(i-l[p*2+1],2)<f)return p;break}}while(p!==u);return h}render(e){const t=e==null?e=new Jr:void 0,{points:i,halfedges:r,triangles:s}=this;for(let o=0,a=r.length;o<a;++o){const c=r[o];if(c<o)continue;const l=s[o]*2,h=s[c]*2;e.moveTo(i[l],i[l+1]),e.lineTo(i[h],i[h+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){t===void 0&&(!e||typeof e.moveTo!="function")&&(t=e,e=null),t=t==null?2:+t;const i=e==null?e=new Jr:void 0,{points:r}=this;for(let s=0,o=r.length;s<o;s+=2){const a=r[s],c=r[s+1];e.moveTo(a+t,c),e.arc(a,c,t,0,bT)}return i&&i.value()}renderHull(e){const t=e==null?e=new Jr:void 0,{hull:i,points:r}=this,s=i[0]*2,o=i.length;e.moveTo(r[s],r[s+1]);for(let a=1;a<o;++a){const c=2*i[a];e.lineTo(r[c],r[c+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new ph;return this.renderHull(e),e.value()}renderTriangle(e,t){const i=t==null?t=new Jr:void 0,{points:r,triangles:s}=this,o=s[e*=3]*2,a=s[e+1]*2,c=s[e+2]*2;return t.moveTo(r[o],r[o+1]),t.lineTo(r[a],r[a+1]),t.lineTo(r[c],r[c+1]),t.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new ph;return this.renderTriangle(e,t),t.value()}}function CT(n,e,t,i){const r=n.length,s=new Float64Array(r*2);for(let o=0;o<r;++o){const a=n[o];s[o*2]=e.call(i,a,o,n),s[o*2+1]=t.call(i,a,o,n)}return s}function*PT(n,e,t,i){let r=0;for(const s of n)yield e.call(i,s,r,n),yield t.call(i,s,r,n),++r}const ed=Math.PI,dm=ed/2,pm=180/ed,mm=ed/180,IT=Math.atan2,gm=Math.cos,DT=Math.max,LT=Math.min,_m=Math.sin,NT=Math.sign||function(n){return n>0?1:n<0?-1:0},s_=Math.sqrt;function OT(n){return n>1?dm:n<-1?-dm:Math.asin(n)}function o_(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function ei(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function oc(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function ac(n){var e=s_(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function td(n){return[IT(n[1],n[0])*pm,OT(DT(-1,LT(1,n[2])))*pm]}function qi(n){const e=n[0]*mm,t=n[1]*mm,i=gm(t);return[i*gm(e),i*_m(e),_m(t)]}function nd(n){return n=n.map(e=>qi(e)),o_(n[0],ei(n[2],n[1]))}function UT(n){const e=BT(n),t=kT(e),i=zT(t,n),r=HT(t,n.length),s=FT(r,n),o=VT(t,n),{polygons:a,centers:c}=GT(o,t,n),l=WT(a),h=XT(t,n),f=$T(i,t);return{delaunay:e,edges:i,triangles:t,centers:c,neighbors:r,polygons:a,mesh:l,hull:h,urquhart:f,find:s}}function FT(n,e){function t(i,r){let s=i[0]-r[0],o=i[1]-r[1],a=i[2]-r[2];return s*s+o*o+a*a}return function(r,s,o){o===void 0&&(o=0);let a,c,l=o;const h=qi([r,s]);do a=o,o=null,c=t(h,qi(e[a])),n[a].forEach(f=>{let u=t(h,qi(e[f]));if(u<c){c=u,o=f,l=f;return}});while(o!==null);return l}}function BT(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=Ww(n[e]),i=MT().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(i);const r=[];let s=1;for(let f=0,u=n.length;f<u;f++){let p=n[f][0]**2+n[f][1]**2;!isFinite(p)||p>1e32?r.push(f):p>s&&(s=p)}const o=1e6*s_(s);r.forEach(f=>n[f]=[o,0]),n.push([0,o]),n.push([-o,0]),n.push([0,-o]);const a=Qh.from(n);a.projection=i;const{triangles:c,halfedges:l,inedges:h}=a;for(let f=0,u=l.length;f<u;f++)if(l[f]<0){const p=f%3==2?f-2:f+1,m=f%3==0?f+2:f-1,v=l[p],_=l[m];l[v]=_,l[_]=v,l[p]=l[m]=-1,c[f]=c[p]=c[m]=e,h[c[v]]=v%3==0?v+2:v-1,h[c[_]]=_%3==0?_+2:_-1,f+=2-f%3}else c[f]>n.length-3-1&&(c[f]=e);return a}function zT(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(i=>{if(i[0]!==i[1]&&!(nd(i.map(r=>e[r]))<0))for(let r=0,s;r<3;r++)s=(r+1)%3,t.add(kl([i[r],i[s]]).join("-"))}),Array.from(t,i=>i.split("-").map(Number)))}function kT(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let i=0,r=e.length/3;i<r;i++){const s=e[3*i],o=e[3*i+1],a=e[3*i+2];s!==o&&o!==a&&t.push([s,a,o])}return t}function VT(n,e){return n.map(t=>{const i=t.map(s=>e[s]).map(qi),r=oc(oc(ei(i[1],i[0]),ei(i[2],i[1])),ei(i[0],i[2]));return td(ac(r))})}function HT(n,e){const t=[];return n.forEach(i=>{for(let r=0;r<3;r++){const s=i[r],o=i[(r+1)%3];t[s]=t[s]||[],t[s].push(o)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function GT(n,e,t){const i=[],r=n.slice();if(e.length===0){if(t.length<2)return{polygons:i,centers:r};if(t.length===2){const a=qi(t[0]),c=qi(t[1]),l=ac(oc(a,c)),h=ac(ei(a,c)),f=ei(l,h),u=[l,ei(l,f),ei(ei(l,f),f),ei(ei(ei(l,f),f),f)].map(td).map(o);return i.push(u),i.push(u.slice().reverse()),{polygons:i,centers:r}}}e.forEach((a,c)=>{for(let l=0;l<3;l++){const h=a[l],f=a[(l+1)%3],u=a[(l+2)%3];i[h]=i[h]||[],i[h].push([f,u,c,[h,f,u]])}});const s=i.map(a=>{const c=[a[0][2]];let l=a[0][1];for(let h=1;h<a.length;h++)for(let f=0;f<a.length;f++)if(a[f][0]==l){l=a[f][1],c.push(a[f][2]);break}if(c.length>2)return c;if(c.length==2){const h=xm(t[a[0][3][0]],t[a[0][3][1]],r[c[0]]),f=xm(t[a[0][3][2]],t[a[0][3][0]],r[c[0]]),u=o(h),p=o(f);return[c[0],p,c[1],u]}});function o(a){let c=-1;return r.slice(e.length,1/0).forEach((l,h)=>{l[0]===a[0]&&l[1]===a[1]&&(c=h+e.length)}),c<0&&(c=r.length,r.push(a)),c}return{polygons:s,centers:r}}function xm(n,e,t){n=qi(n),e=qi(e),t=qi(t);const i=NT(o_(ei(e,n),t));return td(ac(oc(n,e)).map(r=>i*r))}function WT(n){const e=[];return n.forEach(t=>{if(!t)return;let i=t[t.length-1];for(let r of t)r>i&&e.push([i,r]),i=r}),e}function $T(n,e){return function(t){const i=new Map,r=new Map;return n.forEach((s,o)=>{const a=s.join("-");i.set(a,t[o]),r.set(a,!0)}),e.forEach(s=>{let o=0,a=-1;for(let c=0;c<3;c++){let l=kl([s[c],s[(c+1)%3]]).join("-");i.get(l)>o&&(o=i.get(l),a=l)}r.set(a,!1)}),n.map(s=>r.get(s.join("-")))}}function XT(n,e){const t=new Set,i=[];n.map(a=>{if(!(nd(a.map(c=>e[c>e.length?0:c]))>1e-12))for(let c=0;c<3;c++){let l=[a[c],a[(c+1)%3]],h=`${l[0]}-${l[1]}`;t.has(h)?t.delete(h):t.add(`${l[1]}-${l[0]}`)}});const r=new Map;let s;if(t.forEach(a=>{a=a.split("-").map(Number),r.set(a[0],a[1]),s=a[0]}),s===void 0)return i;let o=s;do{i.push(o);let a=r.get(o);r.set(o,-1),o=a}while(o>-1&&o!==s);return i}function qT(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const i=e._data.map(r=>[e._vx(r),e._vy(r),r]).filter(r=>isFinite(r[0]+r[1]));e.points=i.map(r=>[r[0],r[1]]),e.valid=i.map(r=>r[2]),e.delaunay=UT(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return Kp(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return Kp(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((r,s)=>i.features.push({type:"Feature",geometry:r?{type:"Polygon",coordinates:[[...r,r[0]].map(o=>e.delaunay.centers[o])]}:null,properties:{site:e.valid[s],sitecoordinates:e.points[s],neighbours:e.delaunay.neighbors[s]}})),e.valid.length===1&&i.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),i},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((i,r)=>(i=i.map(s=>e.points[s]),i.center=e.delaunay.centers[r],i)).filter(i=>nd(i)>0).map(i=>({type:"Feature",properties:{circumcenter:i.center},geometry:{type:"Polygon",coordinates:[[...i,i[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i=e.delaunay.edges.map(s=>to(e.points[s[0]],e.points[s[1]])),r=e.delaunay.urquhart(i);return{type:"FeatureCollection",features:e.delaunay.edges.map((s,o)=>({type:"Feature",properties:{source:e.valid[s[0]],target:e.valid[s[1]],length:i[o],urquhart:!!r[o]},geometry:{type:"LineString",coordinates:[e.points[s[0]],e.points[s[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(i=>[e.points[i[0]],e.points[i[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:i,polygons:r}=e.delaunay,s=[];for(const o of r)if(o)for(let a=o.length,c=o[a-1],l=o[0],h=0;h<a;c=l,l=o[++h])l>c&&s.push([i[c],i[l]]);return{type:"MultiLineString",coordinates:s}},e._found=void 0,e.find=function(t,i,r){if(e._found=e.delaunay.find(t,i,e._found),!r||to([t,i],e.points[e._found])<r)return e._found},e.hull=function(t){t!==void 0&&e(t);const i=e.delaunay.hull,r=e.points;return i.length===0?null:{type:"Polygon",coordinates:[[...i.map(s=>r[s]),r[i[0]]]]}},n?e(n):e}function YT(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function id(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function a_(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function da(){}var aa=.7,lc=1/aa,Xs="\\s*([+-]?\\d+)\\s*",la="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Yi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",KT=/^#([0-9a-f]{3,8})$/,ZT=new RegExp(`^rgb\\(${Xs},${Xs},${Xs}\\)$`),jT=new RegExp(`^rgb\\(${Yi},${Yi},${Yi}\\)$`),JT=new RegExp(`^rgba\\(${Xs},${Xs},${Xs},${la}\\)$`),QT=new RegExp(`^rgba\\(${Yi},${Yi},${Yi},${la}\\)$`),eA=new RegExp(`^hsl\\(${la},${Yi},${Yi}\\)$`),tA=new RegExp(`^hsla\\(${la},${Yi},${Yi},${la}\\)$`),vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};id(da,ca,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:ym,formatHex:ym,formatHex8:nA,formatHsl:iA,formatRgb:Sm,toString:Sm});function ym(){return this.rgb().formatHex()}function nA(){return this.rgb().formatHex8()}function iA(){return l_(this).formatHsl()}function Sm(){return this.rgb().formatRgb()}function ca(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=KT.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?Mm(e):t===3?new Yn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?nl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?nl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=ZT.exec(n))?new Yn(e[1],e[2],e[3],1):(e=jT.exec(n))?new Yn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=JT.exec(n))?nl(e[1],e[2],e[3],e[4]):(e=QT.exec(n))?nl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=eA.exec(n))?wm(e[1],e[2]/100,e[3]/100,1):(e=tA.exec(n))?wm(e[1],e[2]/100,e[3]/100,e[4]):vm.hasOwnProperty(n)?Mm(vm[n]):n==="transparent"?new Yn(NaN,NaN,NaN,0):null}function Mm(n){return new Yn(n>>16&255,n>>8&255,n&255,1)}function nl(n,e,t,i){return i<=0&&(n=e=t=NaN),new Yn(n,e,t,i)}function rA(n){return n instanceof da||(n=ca(n)),n?(n=n.rgb(),new Yn(n.r,n.g,n.b,n.opacity)):new Yn}function mh(n,e,t,i){return arguments.length===1?rA(n):new Yn(n,e,t,i??1)}function Yn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}id(Yn,mh,a_(da,{brighter(n){return n=n==null?lc:Math.pow(lc,n),new Yn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?aa:Math.pow(aa,n),new Yn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Yn(es(this.r),es(this.g),es(this.b),fc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Em,formatHex:Em,formatHex8:sA,formatRgb:bm,toString:bm}));function Em(){return`#${Qr(this.r)}${Qr(this.g)}${Qr(this.b)}`}function sA(){return`#${Qr(this.r)}${Qr(this.g)}${Qr(this.b)}${Qr((isNaN(this.opacity)?1:this.opacity)*255)}`}function bm(){const n=fc(this.opacity);return`${n===1?"rgb(":"rgba("}${es(this.r)}, ${es(this.g)}, ${es(this.b)}${n===1?")":`, ${n})`}`}function fc(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function es(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Qr(n){return n=es(n),(n<16?"0":"")+n.toString(16)}function wm(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Ti(n,e,t,i)}function l_(n){if(n instanceof Ti)return new Ti(n.h,n.s,n.l,n.opacity);if(n instanceof da||(n=ca(n)),!n)return new Ti;if(n instanceof Ti)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,a=s-r,c=(s+r)/2;return a?(e===s?o=(t-i)/a+(t<i)*6:t===s?o=(i-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new Ti(o,a,c,n.opacity)}function oA(n,e,t,i){return arguments.length===1?l_(n):new Ti(n,e,t,i??1)}function Ti(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}id(Ti,oA,a_(da,{brighter(n){return n=n==null?lc:Math.pow(lc,n),new Ti(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?aa:Math.pow(aa,n),new Ti(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Yn(Af(n>=240?n-240:n+120,r,i),Af(n,r,i),Af(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Ti(Tm(this.h),il(this.s),il(this.l),fc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=fc(this.opacity);return`${n===1?"hsl(":"hsla("}${Tm(this.h)}, ${il(this.s)*100}%, ${il(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Tm(n){return n=(n||0)%360,n<0?n+360:n}function il(n){return Math.max(0,Math.min(1,n||0))}function Af(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const rd=n=>()=>n;function aA(n,e){return function(t){return n+t*e}}function lA(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function cA(n){return(n=+n)==1?c_:function(e,t){return t-e?lA(e,t,n):rd(isNaN(e)?t:e)}}function c_(n,e){var t=e-n;return t?aA(n,t):rd(isNaN(n)?e:n)}const Am=(function n(e){var t=cA(e);function i(r,s){var o=t((r=mh(r)).r,(s=mh(s)).r),a=t(r.g,s.g),c=t(r.b,s.b),l=c_(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function fA(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function uA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hA(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),o;for(o=0;o<i;++o)r[o]=sd(n[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function dA(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function uc(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function pA(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=sd(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var gh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Rf=new RegExp(gh.source,"g");function mA(n){return function(){return n}}function gA(n){return function(e){return n(e)+""}}function _A(n,e){var t=gh.lastIndex=Rf.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",e=e+"";(i=gh.exec(n))&&(r=Rf.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:uc(i,r)})),t=Rf.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?gA(c[0].x):mA(e):(e=c.length,function(l){for(var h=0,f;h<e;++h)a[(f=c[h]).i]=f.x(l);return a.join("")})}function sd(n,e){var t=typeof e,i;return e==null||t==="boolean"?rd(e):(t==="number"?uc:t==="string"?(i=ca(e))?(e=i,Am):_A:e instanceof ca?Am:e instanceof Date?dA:uA(e)?fA:Array.isArray(e)?hA:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?pA:uc)(n,e)}function xA(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function vA(n){return function(){return n}}function yA(n){return+n}var Rm=[0,1];function zs(n){return n}function _h(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:vA(isNaN(e)?NaN:.5)}function SA(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function MA(n,e,t){var i=n[0],r=n[1],s=e[0],o=e[1];return r<i?(i=_h(r,i),s=t(o,s)):(i=_h(i,r),s=t(s,o)),function(a){return s(i(a))}}function EA(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=_h(n[o],n[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var c=J1(n,a,1,i)-1;return s[c](r[c](a))}}function bA(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function wA(){var n=Rm,e=Rm,t=sd,i,r,s,o=zs,a,c,l;function h(){var u=Math.min(n.length,e.length);return o!==zs&&(o=SA(n[0],n[u-1])),a=u>2?EA:MA,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=a(n.map(i),e,t)))(i(o(u)))}return f.invert=function(u){return o(r((l||(l=a(e,n.map(i),uc)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,yA),h()):n.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),t=xA,h()},f.clamp=function(u){return arguments.length?(o=u?!0:zs,h()):o!==zs},f.interpolate=function(u){return arguments.length?(t=u,h()):t},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,p){return i=u,r=p,h()}}function TA(){return wA()(zs,zs)}function AA(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function hc(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function io(n){return n=hc(Math.abs(n)),n?n[1]:NaN}function RA(n,e){return function(t,i){for(var r=t.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(t.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(e)}}function CA(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var PA=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function dc(n){if(!(e=PA.exec(n)))throw new Error("invalid format: "+n);var e;return new od({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}dc.prototype=od.prototype;function od(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}od.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function IA(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var pc;function DA(n,e){var t=hc(n,e);if(!t)return pc=void 0,n.toPrecision(e);var i=t[0],r=t[1],s=r-(pc=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+hc(n,Math.max(0,e+s-1))[0]}function Cm(n,e){var t=hc(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Pm={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:AA,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Cm(n*100,e),r:Cm,s:DA,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Im(n){return n}var Dm=Array.prototype.map,Lm=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function LA(n){var e=n.grouping===void 0||n.thousands===void 0?Im:RA(Dm.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?Im:CA(Dm.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=dc(f);var p=f.fill,m=f.align,v=f.sign,_=f.symbol,x=f.zero,T=f.width,R=f.comma,S=f.precision,I=f.trim,A=f.type;A==="n"?(R=!0,A="g"):Pm[A]||(S===void 0&&(S=12),I=!0,A="g"),(x||p==="0"&&m==="=")&&(x=!0,p="0",m="=");var F=(u&&u.prefix!==void 0?u.prefix:"")+(_==="$"?t:_==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),M=(_==="$"?i:/[%p]/.test(A)?o:"")+(u&&u.suffix!==void 0?u.suffix:""),E=Pm[A],L=/[defgprs%]/.test(A);S=S===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,S)):Math.max(0,Math.min(20,S));function U(z){var C=F,k=M,P,B,N;if(A==="c")k=E(z)+k,z="";else{z=+z;var G=z<0||1/z<0;if(z=isNaN(z)?c:E(Math.abs(z),S),I&&(z=IA(z)),G&&+z==0&&v!=="+"&&(G=!1),C=(G?v==="("?v:a:v==="-"||v==="("?"":v)+C,k=(A==="s"&&!isNaN(z)&&pc!==void 0?Lm[8+pc/3]:"")+k+(G&&v==="("?")":""),L){for(P=-1,B=z.length;++P<B;)if(N=z.charCodeAt(P),48>N||N>57){k=(N===46?r+z.slice(P+1):z.slice(P))+k,z=z.slice(0,P);break}}}R&&!x&&(z=e(z,1/0));var W=C.length+z.length+k.length,J=W<T?new Array(T-W+1).join(p):"";switch(R&&x&&(z=e(J+z,J.length?T-k.length:1/0),J=""),m){case"<":z=C+z+k+J;break;case"=":z=C+J+z+k;break;case"^":z=J.slice(0,W=J.length>>1)+C+z+k+J.slice(W);break;default:z=J+C+z+k;break}return s(z)}return U.toString=function(){return f+""},U}function h(f,u){var p=Math.max(-8,Math.min(8,Math.floor(io(u)/3)))*3,m=Math.pow(10,-p),v=l((f=dc(f),f.type="f",f),{suffix:Lm[8+p/3]});return function(_){return v(m*_)}}return{format:l,formatPrefix:h}}var rl,f_,u_;NA({thousands:",",grouping:[3],currency:["$",""]});function NA(n){return rl=LA(n),f_=rl.format,u_=rl.formatPrefix,rl}function OA(n){return Math.max(0,-io(Math.abs(n)))}function UA(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(io(e)/3)))*3-io(Math.abs(n)))}function FA(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,io(e)-io(n))+1}function BA(n,e,t,i){var r=iw(n,e,t),s;switch(i=dc(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=UA(r,o))&&(i.precision=s),u_(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=FA(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=OA(r))&&(i.precision=s-(i.type==="%")*2);break}}return f_(i)}function zA(n){var e=n.domain;return n.ticks=function(t){var i=e();return nw(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return BA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,h=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);h-- >0;){if(l=$u(o,a,t),l===c)return i[r]=o,i[s]=a,e(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function xh(){var n=TA();return n.copy=function(){return bA(n,xh())},YT.apply(n,arguments),zA(n)}function vh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function kA(n){if(Array.isArray(n))return n}function VA(n){if(Array.isArray(n))return vh(n)}function HA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function GA(n,e,t){return e=mc(e),jA(n,h_()?Reflect.construct(e,[],mc(n).constructor):e.apply(n,t))}function WA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function $A(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function mc(n){return mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},mc(n)}function XA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&yh(n,e)}function h_(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(h_=function(){return!!n})()}function qA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function YA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(h){l=!0,r=h}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function KA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return HA(n)}function yh(n,e){return yh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},yh(n,e)}function Bi(n,e){return kA(n)||YA(n,e)||d_(n,e)||KA()}function Cf(n){return VA(n)||qA(n)||d_(n)||ZA()}function d_(n,e){if(n){if(typeof n=="string")return vh(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?vh(n,e):void 0}}function JA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,i=t===void 0?1/0:t,r=QA(n,i),s=ea(r),o=eR(n,i),a=[].concat(Cf(s),Cf(o)),c={type:"Polygon",coordinates:n},l=qg(c),h=Bi(l,2),f=Bi(h[0],2),u=f[0],p=f[1],m=Bi(h[1],2),v=m[0],_=m[1],x=u>v||_>=89||p<=-89,T=[];if(x){var R=qT(a).triangles(),S=new Map(a.map(function(N,G){var W=Bi(N,2),J=W[0],ae=W[1];return["".concat(J,"-").concat(ae),G]}));R.features.forEach(function(N){var G,W=N.geometry.coordinates[0].slice(0,3).reverse(),J=[];if(W.forEach(function(me){var Le=Bi(me,2),Ne=Le[0],tt=Le[1],he="".concat(Ne,"-").concat(tt);S.has(he)&&J.push(S.get(he))}),J.length===3){if(J.some(function(me){return me<s.length})){var ae=N.properties.circumcenter;if(!Sh(ae,c,x))return}(G=T).push.apply(G,J)}})}else if(o.length)for(var E=sa.from(a),L=function(G){var W,J=[2,1,0].map(function(Le){return E.triangles[G+Le]}),ae=J.map(function(Le){return a[Le]});if(J.some(function(Le){return Le<s.length})){var me=[0,1].map(function(Le){return rw(ae,function(Ne){return Ne[Le]})});if(!Sh(me,c,x))return 1}(W=T).push.apply(W,Cf(J))},U=0,z=E.triangles.length;U<z;U+=3)L(U);else{var I=Bg(r),A=I.vertices,F=I.holes,M=F===void 0?[]:F;T=ow(A,M,2)}var C=xh(kl(a,function(N){return N[0]}),[0,1]),k=xh(kl(a,function(N){return N[1]}),[0,1]),P=a.map(function(N){var G=Bi(N,2),W=G[0],J=G[1];return[C(W),k(J)]}),B={points:a,indices:T,uvs:P};return{contour:r,triangles:B}}function QA(n,e){return n.map(function(t){var i=[],r;return t.forEach(function(s){if(r){var o=to(s,r)*180/Math.PI;if(o>e)for(var a=lT(r,s),c=1/Math.ceil(o/e),l=c;l<1;)i.push(a(l)),l+=c}i.push(r=s)}),i})}function eR(n,e){var t={type:"Polygon",coordinates:n},i=qg(t),r=Bi(i,2),s=Bi(r[0],2),o=s[0],a=s[1],c=Bi(r[1],2),l=c[0],h=c[1];if(Math.min(Math.abs(l-o),Math.abs(h-a))<e)return[];var f=o>l||h>=89||a<=-89;return tR(e,{minLng:o,maxLng:l,minLat:a,maxLat:h}).filter(function(u){return Sh(u,t,f)})}function tR(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,i=e.maxLng,r=e.minLat,s=e.maxLat,o=Math.round(Math.pow(360/n,2)/Math.PI),a=(1+Math.sqrt(5))/2,c=function(x){return x/a*360%360-180},l=function(x){return Math.acos(2*x/o-1)/Math.PI*180-90},h=function(x){return o*(Math.cos((x+90)*Math.PI/180)+1)/2},f=[s!==void 0?Math.ceil(h(s)):0,r!==void 0?Math.floor(h(r)):o-1],u=t===void 0&&i===void 0?function(){return!0}:t===void 0?function(_){return _<=i}:i===void 0?function(_){return _>=t}:i>=t?function(_){return _>=t&&_<=i}:function(_){return _>=t||_<=i},p=[],m=f[0];m<=f[1];m++){var v=c(m);u(v)&&p.push([v,l(m)])}return p}function Sh(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?aT(e,n):Rg(n,e)}var Tl=window.THREE?window.THREE:{BufferGeometry:hn,Float32BufferAttribute:kt},Nm=new Tl.BufferGeometry().setAttribute?"setAttribute":"addAttribute",nR=(function(n){function e(t,i,r,s,o,a,c){var l;WA(this,e),l=GA(this,e),l.type="ConicPolygonGeometry",l.parameters={polygonGeoJson:t,bottomHeight:i,topHeight:r,closedBottom:s,closedTop:o,includeSides:a,curvatureResolution:c},i=i||0,r=r||1,s=s!==void 0?s:!0,o=o!==void 0?o:!0,a=a!==void 0?a:!0,c=c||5;var h=JA(t,{resolution:c}),f=h.contour,u=h.triangles,p=ea(u.uvs),m=[],v=[],_=[],x=0,T=function(F){var M=Math.round(m.length/3),E=_.length;m=m.concat(F.vertices),v=v.concat(F.uvs),_=_.concat(M?F.indices.map(function(L){return L+M}):F.indices),l.addGroup(E,_.length-E,x++)};a&&T(S()),s&&T(I(i,!1)),o&&T(I(r,!0)),l.setIndex(_),l[Nm]("position",new Tl.Float32BufferAttribute(m,3)),l[Nm]("uv",new Tl.Float32BufferAttribute(v,2)),l.computeVertexNormals();function R(A,F){var M=typeof F=="function"?F:function(){return F},E=A.map(function(L){return L.map(function(U){var z=Bi(U,2),C=z[0],k=z[1];return iR(k,C,M(C,k))})});return Bg(E)}function S(){for(var A=R(f,i),F=A.vertices,M=A.holes,E=R(f,r),L=E.vertices,U=ea([L,F]),z=Math.round(L.length/3),C=new Set(M),k=0,P=[],B=0;B<z;B++){var N=B+1;if(N===z)N=k;else if(C.has(N)){var G=N;N=k,k=G}P.push(B,B+z,N+z),P.push(N+z,N,B)}for(var W=[],J=1;J>=0;J--)for(var ae=0;ae<z;ae+=1)W.push(ae/(z-1),J);return{indices:P,vertices:U,uvs:W}}function I(A){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:F?u.indices:u.indices.slice().reverse(),vertices:R([u.points],A).vertices,uvs:p}}return l}return XA(e,n),$A(e)})(Tl.BufferGeometry);function iR(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=(90-n)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}const Om=new Nr,sl=new $;class p_ extends sy{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new kt(e,3)),this.setAttribute("uv",new kt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Bu(t,6,1);return this.setAttribute("instanceStart",new Gi(i,3,0)),this.setAttribute("instanceEnd",new Gi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Bu(t,6,1);return this.setAttribute("instanceColorStart",new Gi(i,3,0)),this.setAttribute("instanceColorEnd",new Gi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new qv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Om.setFromBufferAttribute(t),this.boundingBox.union(Om))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sl.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sl)),sl.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(sl));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ie.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:Gh.merge([Ie.common,Ie.fog,Ie.line]),vertexShader:`
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
		`};class m_ extends pi{constructor(e){super({type:"LineMaterial",uniforms:Gh.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Pf=new zt,Um=new $,Fm=new $,vn=new zt,yn=new zt,Ui=new zt,If=new $,Df=new $t,Sn=new hy,Bm=new $,ol=new Nr,al=new oo,Fi=new zt;let zi,ts;function zm(n,e,t){return Fi.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Fi.multiplyScalar(1/Fi.w),Fi.x=ts/t.width,Fi.y=ts/t.height,Fi.applyMatrix4(n.projectionMatrixInverse),Fi.multiplyScalar(1/Fi.w),Math.abs(Math.max(Fi.x,Fi.y))}function rR(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){Sn.start.fromBufferAttribute(r,a),Sn.end.fromBufferAttribute(s,a),Sn.applyMatrix4(t);const l=new $,h=new $;zi.distanceSqToSegment(Sn.start,Sn.end,h,l),h.distanceTo(l)<ts*.5&&e.push({point:h,pointOnLine:l,distance:zi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function sR(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),f=-e.near;zi.at(1,Ui),Ui.w=1,Ui.applyMatrix4(e.matrixWorldInverse),Ui.applyMatrix4(i),Ui.multiplyScalar(1/Ui.w),Ui.x*=s.x/2,Ui.y*=s.y/2,Ui.z=0,If.copy(Ui),Df.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(vn.fromBufferAttribute(c,u),yn.fromBufferAttribute(l,u),vn.w=1,yn.w=1,vn.applyMatrix4(Df),yn.applyMatrix4(Df),vn.z>f&&yn.z>f)continue;if(vn.z>f){const R=vn.z-yn.z,S=(vn.z-f)/R;vn.lerp(yn,S)}else if(yn.z>f){const R=yn.z-vn.z,S=(yn.z-f)/R;yn.lerp(vn,S)}vn.applyMatrix4(i),yn.applyMatrix4(i),vn.multiplyScalar(1/vn.w),yn.multiplyScalar(1/yn.w),vn.x*=s.x/2,vn.y*=s.y/2,yn.x*=s.x/2,yn.y*=s.y/2,Sn.start.copy(vn),Sn.start.z=0,Sn.end.copy(yn),Sn.end.z=0;const v=Sn.closestPointToPointParameter(If,!0);Sn.at(v,Bm);const _=ng.lerp(vn.z,yn.z,v),x=_>=-1&&_<=1,T=If.distanceTo(Bm)<ts*.5;if(x&&T){Sn.start.fromBufferAttribute(c,u),Sn.end.fromBufferAttribute(l,u),Sn.start.applyMatrix4(o),Sn.end.applyMatrix4(o);const R=new $,S=new $;zi.distanceSqToSegment(Sn.start,Sn.end,S,R),t.push({point:S,pointOnLine:R,distance:zi.origin.distanceTo(S),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class oR extends St{constructor(e=new p_,t=new m_({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)Um.fromBufferAttribute(t,o),Fm.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Um.distanceTo(Fm);const s=new Bu(r,2,1);return e.setAttribute("instanceDistanceStart",new Gi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Gi(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;zi=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;ts=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),al.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=ts*.5;else{const f=Math.max(r.near,al.distanceToPoint(zi.origin));l=zm(r,f,c.resolution)}if(al.radius+=l,zi.intersectsSphere(al)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ol.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=ts*.5;else{const f=Math.max(r.near,ol.distanceToPoint(zi.origin));h=zm(r,f,c.resolution)}ol.expandByScalar(h),zi.intersectsBox(ol)!==!1&&(i?rR(this,t):sR(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Pf),this.material.uniforms.resolution.value.set(Pf.z,Pf.w))}}const g_={Africa:16757575,Asia:9427311,Europe:9300160,"North America":16353195,"South America":16767309,Oceania:12160754,Antarctica:16055293,"Seven seas (open ocean)":12160754},aR=14211288,lR=3112916,cR=9358834,__=100.12,fR=3,km=100.2,uR=100.28,hR=2373214,dR=16777215,pR=15398655,gc=[15224125,4026088,3129201,15905076,10120654];let ll=null;function fa(){if(!ll){const n=new Uint8Array([90,150,210,255]);ll=new ug(n,n.length,1,Lh),ll.needsUpdate=!0}return ll}function Al(n){return new js({color:n,gradientMap:fa()})}const Lo=Math.PI/180,Vm=(n,e,t)=>[t*Math.cos(e*Lo)*Math.sin(n*Lo),t*Math.sin(e*Lo),t*Math.cos(e*Lo)*Math.cos(n*Lo)];function mR(n){const e=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=r.geometry.type==="Polygon"?[r.geometry.coordinates]:r.geometry.coordinates;for(const o of s)for(const a of o)for(let c=0;c<a.length-1;c++){const l=a[c],h=a[c+1];e.push(...Vm(l[0],l[1],km),...Vm(h[0],h[1],km))}}const t=new p_;t.setPositions(e);const i=new m_({color:hR,linewidth:2.5,transparent:!0,opacity:.9});return i.resolution.set(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{i.resolution.set(window.innerWidth,window.innerHeight)}),new oR(t,i)}const gR=-63;function _R(){const n=(90-gR)*Math.PI/180,e=new St(new Xi(__,48,12,0,Math.PI*2,n,Math.PI-n),new js({color:g_.Antarctica,gradientMap:fa()}));return e.name="ATA",e}function xR(n){const e=new gn,t=new Map,i=new Map,r=new St(new Xi(Vu,64,64),new js({color:lR,gradientMap:fa()}));e.add(r),e.add(_R()),e.add(mR(n));for(const s of n.features){if(s.properties.id==="ATA")continue;const o=g_[s.properties.continent]??aR,a=new js({color:o,gradientMap:fa()});t.set(s.properties.id,a),i.set(s.properties.id,s.properties.continent);const c=s.geometry.type==="Polygon"?[s.geometry.coordinates]:s.geometry.coordinates,l=new gn;l.name=s.properties.id;for(const h of c){const f=new nR(h,Vu,__,!1,!0,!1,fR);l.add(new St(f,a))}e.add(l)}return{group:e,countryMaterials:t,continentOf:i}}function vR(){const n=new pi({transparent:!0,side:Vn,depthWrite:!1,uniforms:{glowColor:{value:new _t(pR)}},vertexShader:`
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
      }`});return new St(new Xi(104.5,64,64),n)}function yR(n){const e=new Nv;e.background=new _t(cR);const t=new hi(60,1,.1,2e3);t.position.set(0,0,300);const i=new l1({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=new iy(16774368,2.4);r.position.set(200,150,100);const s=new ey(12376319,3813160,.9);e.add(r,s,new ry(16777215,.35)),e.add(vR());const o=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",o),o(),{scene:e,camera:t,renderer:i}}async function SR(){const n=async o=>{const a=await fetch(o);if(!a.ok)throw new Error(`Failed to load ${o}`);return await a.json()},[t,i,r,s]=await Promise.all([n("./data/world.geo.json"),n("./data/countries.json"),n("./data/landmarks.json"),n("./data/riddles.json")]);return{world:t,countries:i,landmarks:r,riddles:s}}const MR=8,ER=250,bR=["KeyA","ArrowLeft"],wR=["KeyD","ArrowRight"],TR=["ArrowUp","KeyR"];function AR(){const n=new Set;let e="",t=0,i=0,r=0;window.addEventListener("keydown",a=>{const c=bR.includes(a.code),l=wR.includes(a.code),h=TR.includes(a.code);if(!a.repeat&&(c||l||h)){const f=c?"L":l?"R":"U",u=performance.now();f===e&&u-t<ER?(f==="U"?r=1:i=f==="L"?-1:1,t=0):(e=f,t=u)}n.add(a.code)}),window.addEventListener("keyup",a=>n.delete(a.code)),window.addEventListener("blur",()=>n.clear()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&n.clear()});const s=(a,c)=>(a.some(l=>n.has(l))?1:0)-(c.some(l=>n.has(l))?1:0),o={throttle:0,turn:0,pitch:0};return{read(a){const c={throttle:s(["KeyW"],["KeyS"]),turn:s(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),pitch:s(["ArrowUp","KeyR"],["ArrowDown","KeyF"])},l=Math.min(1,MR*a);o.throttle+=(c.throttle-o.throttle)*l,o.turn+=(c.turn-o.turn)*l,o.pitch+=(c.pitch-o.pitch)*l;const h=i,f=r;return i=0,r=0,{...o,barrelRoll:h,loop:f}}}}function _c(n=15224125,e="seaplane"){const t=new gn,i=Al(n),r=Al(16249832),s=e==="lifter"?.85:.6,o=new St(new zl(s,2.4,4,8),i);o.rotation.x=Math.PI/2;const a=e==="stunt"?6:e==="jet"?3.6:5,c=e==="jet"?1.6:1.1,l=new St(new Ri(a,.15,c),r);e==="jet"&&(l.position.z=-.4);const h=new St(new Ri(1.8,.12,.6),r);h.position.set(0,.1,-1.6);const f=new St(new Ri(.12,.9,.6),i);f.position.set(0,.5,-1.6);const u=new St(new Ws(e==="jet"?.35:.45,e==="jet"?1.4:.8,8),r);if(u.rotation.x=Math.PI/2,u.position.z=e==="jet"?2.3:2,t.add(o,l,h,f,u),e==="seaplane")for(const p of[-1,1]){const m=new St(new zl(.18,1.6,4,6),r);m.rotation.x=Math.PI/2,m.position.set(p*.9,-.8,.2),t.add(m)}if(e==="lifter"){const p=f.clone();p.position.y=.9,p.scale.set(1,.6,1),t.add(p)}if(e!=="jet"){const p=new gn;p.name="propeller";const m=Al(3815994),v=new gn;v.name="propellerBlades";for(const x of[0,Math.PI/2]){const T=new St(new Ri(.12,1.7,.06),m);T.rotation.z=x,v.add(T)}const _=new St(new Hh(.95,24),new ui({color:14540253,transparent:!0,opacity:.25,side:bi}));_.name="propellerDisc",_.visible=!1,p.add(v,_),p.position.z=2.45,t.add(p)}return t}const Tr=Math.PI/180;function x_(n,e){const t=n*Tr,i=e*Tr;return{east:new $(Math.cos(i),0,-Math.sin(i)),north:new $(-Math.sin(t)*Math.sin(i),Math.cos(t),-Math.sin(t)*Math.cos(i)),up:new $(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}}function v_(n,e,t,i,r,s,o){const a=new $().copy($n(e,t,i)),{east:c,north:l,up:h}=x_(e,t),f=l.clone().multiplyScalar(Math.cos(r*Tr)).addScaledVector(c,Math.sin(r*Tr)),u=Math.cos(s*Tr),p=Math.sin(s*Tr),m=f.clone().multiplyScalar(u).addScaledVector(h,p).normalize(),v=h.clone().multiplyScalar(u).addScaledVector(f,-p).normalize(),_=m.clone().cross(v).normalize(),x=v.clone().multiplyScalar(Math.cos(o*Tr)).addScaledVector(_,Math.sin(o*Tr)).normalize(),T=new $t().lookAt(m,new $(0,0,0),x);return n.position.copy(a),n.quaternion.setFromRotationMatrix(T),{position:a,forward:m,up:x}}const RR=.35,CR=8,PR=52;function IR(n){const e=Math.min(1,Math.max(0,n));return{spinRadPerS:CR+PR*e,blurVisible:e>=RR}}const Hm=Math.PI/180,DR=12,LR=.15,NR=25,OR=58,UR=16,FR=.06,BR=1/60;function Gm(n,e){const t=n.getObjectByName("propellerBlades"),i=n.getObjectByName("propellerDisc");return{update(r,s){const{position:o}=v_(n,r.lat,r.lon,r.altKm,r.headingDeg,r.pitchDeg,r.rollDeg),{east:a,north:c,up:l}=x_(r.lat,r.lon),h=c.clone().multiplyScalar(Math.cos(r.headingDeg*Hm)).addScaledVector(a,Math.sin(r.headingDeg*Hm)).normalize(),f=o.clone().addScaledVector(h,-30).addScaledVector(l,DR),u=o.clone().addScaledVector(h,NR);e.position.lerp(f,LR),e.up.copy(l),e.lookAt(u);const p=Math.min(1,Math.max(0,(r.speedKmh-Js)/(qh-Js))),m=OR+UR*p;if(e.fov+=(m-e.fov)*FR,e.updateProjectionMatrix(),t&&i){const v=IR(p);t.rotation.z+=v.spinRadPerS*BR,t.visible=!v.blurVisible,i.visible=v.blurVisible}}}}function zR(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:16px;left:16px;color:#fff;font:600 16px system-ui;background:rgba(11,16,38,.7);padding:10px 14px;border-radius:10px;pointer-events:none";const t=document.createElement("div"),i=document.createElement("div");return i.style.cssText="font-weight:400;font-size:13px;opacity:.8;margin-top:4px",e.append(t,i),n.appendChild(e),{setCountry(r){t.textContent=r?`Flying over: ${r}`:"Flying over: open ocean"},setTelemetry(r){i.textContent=`${Math.round(r.speedKmh)} km/h · hdg ${Math.round(r.headingDeg)}°`}}}const Ns=.15;function kR(n){const e=new Map;return{sync(t,i){const r=new Set;t.players.forEach((s,o)=>{if(o===i)return;r.add(o);const a={lat:s.lat,lon:s.lon,altKm:s.altKm,headingDeg:s.headingDeg,pitchDeg:s.pitchDeg,rollDeg:s.rollDeg,barrelRollS:s.barrelRollS,loopS:s.loopS,speedKmh:s.speedKmh},c=e.get(o);if(c)c.targetState=a,c.tumbleUntil=s.tumbleUntil;else{const l=_c(gc[s.colorIdx%gc.length]);n.add(l),e.set(o,{mesh:l,current:a,targetState:a,tumbleUntil:s.tumbleUntil})}});for(const[s,o]of e)r.has(s)||(n.remove(o.mesh),e.delete(s))},update(){for(const t of e.values()){const i=t.current,r=t.targetState;i.lat+=(r.lat-i.lat)*Ns,i.lon+=((r.lon-i.lon+540)%360-180)*Ns,i.lon=(i.lon+540)%360-180,i.altKm+=(r.altKm-i.altKm)*Ns,i.headingDeg=Ef(i.headingDeg,r.headingDeg,Ns),i.pitchDeg=Ef(i.pitchDeg,r.pitchDeg,Ns),i.rollDeg=Ef(i.rollDeg,r.rollDeg,Ns),v_(t.mesh,i.lat,i.lon,i.altKm,i.headingDeg,i.pitchDeg,i.rollDeg),Date.now()<t.tumbleUntil&&t.mesh.rotateZ(Date.now()/60%(Math.PI*2))}}}}const VR=16765471;function HR(n){const e=new St(new bc(2.5,2.5,60,24,1,!0),new ui({color:VR,transparent:!0,opacity:.45,side:bi,depthWrite:!1}));return e.visible=!1,n.add(e),{showAt(t,i){const r=$n(t,i,0),s=new $(r.x,r.y,r.z).normalize();e.position.copy(s.clone().multiplyScalar(130)),e.quaternion.setFromUnitVectors(new $(0,1,0),s),e.visible=!0},hide(){e.visible=!1},update(t){if(!e.visible)return;const i=e.material;i.opacity=.35+.2*Math.sin(t*3)}}}const y_=4,Lf=.12,S_=64;function GR(){return{puffs:[],spawnTimerS:0}}function WR(n,e,t,i){const r=n.puffs.map(a=>({...a,ageS:a.ageS+e})).filter(a=>a.ageS<y_);let s=n.spawnTimerS+e;if(!i)return{puffs:r,spawnTimerS:Math.min(s,Lf)};const o=[...r];for(;s>=Lf;)s-=Lf,o.length<S_&&o.push({x:t.x,y:t.y,z:t.z,ageS:0});return{puffs:o,spawnTimerS:s}}const $R=.9,XR=2.2,Wm=.95,Nf=.35,$m=3,qR="#d7e7f2";function YR(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)throw new Error("2d canvas unavailable");const r=[{x:64,y:68,r:30},{x:40+n*3,y:62,r:20+n},{x:90-n*4,y:62,r:22},{x:56+n*5,y:46,r:17+n*2}],s=o=>{for(const a of r)i.beginPath(),i.arc(a.x,a.y+o,a.r,0,Math.PI*2),i.fill()};return i.fillStyle=qR,s(6),i.fillStyle="#ffffff",s(0),new Xo(t)}function KR(n){const e=[];for(let s=0;s<$m;s++)e.push(YR(s));const t=[],i=[];for(let s=0;s<S_;s++){const o=new Fs({map:e[s%$m],transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.9}),a=new Bo(o);a.visible=!1,t.push(a),i.push(.8+Math.random()*.5),n.add(a)}let r=GR();return{update(s,o,a){r=WR(r,s,o,a);for(let c=0;c<t.length;c++){const l=t[c],h=r.puffs[c];if(!h){l.visible=!1;continue}const f=h.ageS/y_;l.visible=!0,l.position.set(h.x,h.y,h.z);const u=($R+XR*f)*i[c];l.scale.set(u,u,1),l.material.opacity=f<Nf?Wm:Wm*(1-(f-Nf)/(1-Nf))}}}}function Cc(n){return/^[A-Za-z]{2}$/.test(n)?String.fromCodePoint(...[...n.toUpperCase()].map(e=>127462+(e.charCodeAt(0)-65))):"🏳️"}const ZR={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"},M_=(n,e)=>{const t=n.legs[e];return t?{type:t.legType,countryId:t.countryId,zone:{lat:t.zoneLat,lon:t.zoneLon},label:t.label,sublabel:t.sublabel}:null};function jR(n,e,t){var s;if(!n||n.phase!=="racing")return null;const i=(s=n.players)==null?void 0:s.get(e);if(!i)return null;const r=M_(n,i.legIndex);return r?Ig(t,r):null}function JR(n){let e=-1,t=0,i=0;const r=()=>{e===-1&&t===0||(e=-1,t=0,n.banner.hide(),n.hints.clear(),n.beacon.hide())};return{update(s,o,a,c){var x,T;if(!s||s.phase!=="racing"){r();return}const l=s.players.get(o);if(!l){r();return}const h=M_(s,l.legIndex);if(!h){r();return}if(l.legIndex!==e||s.countdownEndsAt!==t){if(!(s.countdownEndsAt!==t)&&e>=0&&l.legIndex>e){const S=s.legs[e],I=((x=n.countries[(S==null?void 0:S.countryId)??""])==null?void 0:x.name)??"";n.banner.toast(`✅ ${I}! Leg ${e+1} of ${s.legs.length} done`)}e=l.legIndex,t=s.countdownEndsAt,i=0,n.hints.setTarget(h.countryId),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,Cc(((T=n.countries[h.countryId])==null?void 0:T.cca2)??""))}const f=Date.now(),u=f<l.fogUntil,p=s.difficulty,m=Math.max(0,(f-l.legStartedAt)/1e3),v=u?{continent:!1,compass:!1,outline:!1}:Wu(m,p);n.hints.setFlags(v),n.banner.setCompass(v.compass?(Cg(a.lat,a.lon,h.zone.lat,h.zone.lon)-a.headingDeg+360)%360:null);const _=Pg(a,h,i,c);i=_.inZone?_.dwellS:0,n.banner.setDwell(h.type==="refuel"&&_.inZone?i/Yh:null),f<l.smokeUntil?n.banner.setWarning("💨 Engine out! Limping for a few seconds…"):l.vipState==="falling"?n.banner.setWarning("🪂 Your VIP bailed out — fly through the parachute!"):u?n.banner.setWarning("🌫 Fogged! Hints jammed for a few seconds"):h.type==="refuel"&&_.inZone?n.banner.setWarning("⛽ Refueling — hold steady!"):n.banner.setWarning(_.requirementBlocked?ZR[h.type]??null:null)}}}const QR=150,eC=150,Xm=160,tC=24,nC=8,iC=8,rC=6,qm=48,Ym=10,Km=1.4,sC=.08,Gr=n=>new $(n.x,n.y,n.z);function oC(n){const e=(()=>{const E=document.createElement("canvas");E.width=128,E.height=128;const L=E.getContext("2d");if(!L)throw new Error("2d canvas unavailable");return L.fillStyle="#ffd94d",L.fillRect(0,0,128,128),L.font="bold 96px 'Trebuchet MS', Verdana, sans-serif",L.textAlign="center",L.textBaseline="middle",L.fillStyle="#24365e",L.fillText("?",64,70),new Xo(E)})(),t=Al(16767309);t.map=e;const i=new hg({color:2373214}),r=new Ri(2.2,2.2,2.2),s=new Xv(r),o=(()=>{const E=document.createElement("canvas");E.width=32,E.height=32;const L=E.getContext("2d"),U=L.createRadialGradient(16,16,1,16,16,15);return U.addColorStop(0,"rgba(255,255,255,1)"),U.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=U,L.fillRect(0,0,32,32),new Xo(E)})(),a=[];for(let E=0;E<tC;E++){const L=new gn;L.add(new St(r,t.clone())),L.add(new Wv(s,i.clone()));const U=new Bo(new Fs({map:o,transparent:!0,depthWrite:!1}));U.position.set(1.4,1.4,0),U.scale.setScalar(1.2),L.add(U),L.visible=!1,a.push({group:L,sparkle:U,wasActive:!1,popT:1}),n.add(L)}const c=new ui({color:3818072,transparent:!0,opacity:.85}),l=[];for(let E=0;E<nC;E++){const L=new gn;for(const[U,z,C]of[[0,0,1.1],[-.9,.2,.8],[.9,.2,.8],[0,.7,.7]]){const k=new St(new Xi(C,10,8),c);k.position.set(U,z,0),L.add(k)}L.visible=!1,l.push(L),n.add(L)}const h=new ui({color:16747586}),f=[];for(let E=0;E<5;E++){const L=new gn,U=new St(new Xi(.9,10,6,0,Math.PI*2,0,Math.PI/2),h),z=new St(new Xi(.3,8,6),new ui({color:16249832}));z.position.y=-.9,L.add(U,z),L.visible=!1,f.push(L),n.add(L)}const u=[];for(let E=0;E<rC;E++){const L=new gn,U=new St(new Ws(.35,1.4,8),new ui({color:15224125}));U.rotation.x=Math.PI/2;const z=new St(new Ws(.25,.8,6),new ui({color:16757069,transparent:!0,opacity:.9}));z.rotation.x=-Math.PI/2,z.position.z=-1,L.add(U,z),L.visible=!1,u.push(L),n.add(L)}const p=(()=>{const E=document.createElement("canvas");E.width=32,E.height=32;const L=E.getContext("2d"),U=L.createRadialGradient(16,16,2,16,16,15);return U.addColorStop(0,"rgba(40,44,52,0.95)"),U.addColorStop(1,"rgba(40,44,52,0)"),L.fillStyle=U,L.fillRect(0,0,32,32),new Xo(E)})(),m=[];for(let E=0;E<qm;E++){const L=new Bo(new Fs({map:p,transparent:!0,depthWrite:!1}));L.visible=!1,m.push({sprite:L,ageS:Km}),n.add(L)}let v=0,_=0;const x=[];for(let E=0;E<Ym;E++){const L=new Bo(new Fs({map:o,transparent:!0,depthWrite:!1}));L.visible=!1,x.push({sprite:L,ageS:1}),n.add(L)}let T=0;const R=(E,L)=>{const U=x[T];T=(T+1)%Ym,U.sprite.position.copy(E),U.sprite.scale.setScalar(L),U.sprite.material.opacity=1,U.sprite.visible=!0,U.ageS=0},S=[],I=new ui({color:12577023,transparent:!0,opacity:.4}),A=[];for(let E=0;E<5;E++){S.push(new St(new Ri(6,4,6),I.clone())),S[E].visible=!1,n.add(S[E]);const L=new gn;for(let U=0;U<3;U++){const z=new Bo(new Fs({map:o,transparent:!0,depthWrite:!1}));z.scale.setScalar(.9),L.add(z)}L.visible=!1,A.push(L),n.add(L)}const F=new ui({color:2237998}),M=[];for(let E=0;E<iC;E++){const L=new gn;for(const[U,z]of[[0,0],[-.7,-.6],[.7,-.6]]){const C=new St(new Ws(.25,.7,5),F);C.rotation.x=Math.PI/2,C.position.set(U,0,z),L.add(C)}L.visible=!1,M.push(L),n.add(L)}return{update(E,L){const U=(E==null?void 0:E.phase)==="racing",z=Date.now();for(let N=0;N<a.length;N++){const G=U?E.bubbles[N]:void 0,W=a[N],J=!!(G&&G.activeAt<=z);if(W.wasActive&&!J&&(W.popT=0),W.wasActive=J,W.popT<1){W.popT=Math.min(1,W.popT+1/(.3*60)),W.group.visible=W.popT<.999,W.group.scale.setScalar(1+W.popT*1.2),W.group.traverse(ae=>{const me=ae.material;me&&(me.transparent=!0,me.opacity=1-W.popT)});continue}if(!G||!J){W.group.visible=!1;continue}W.group.visible=!0,W.group.scale.setScalar(1),W.group.traverse(ae=>{const me=ae.material;me&&(me.opacity=1)}),W.group.position.copy(Gr($n(G.lat,G.lon,QR))),W.group.position.addScaledVector(W.group.position.clone().normalize(),Math.sin(L*2+N)*.4),W.group.rotation.y=L*1+N,W.sparkle.material.opacity=.4+.6*Math.abs(Math.sin(L*1.5+N*1.3))}for(let N=0;N<l.length;N++){const G=U?E.storms[N]:void 0,W=l[N];W.visible=!!G,G&&(W.position.copy(Gr($n(G.lat,G.lon,eC))),W.up.copy(W.position.clone().normalize()))}for(let N=0;N<M.length;N++){const G=U?E.birds[N]:void 0,W=M[N];W.visible=!!G,G&&W.position.copy(Gr($n(G.lat,G.lon,Xm)))}const C=[];U&&E.players.forEach(N=>{N.vipState==="falling"&&C.push({lat:N.vipLat,lon:N.vipLon,altKm:N.vipAltKm})});for(let N=0;N<f.length;N++){const G=f[N],W=C[N];G.visible=!!W,W&&(G.position.copy(Gr($n(W.lat,W.lon,W.altKm))),G.up.copy(G.position.clone().normalize()))}for(let N=0;N<u.length;N++){const G=U?E.rockets[N]:void 0,W=u[N];if(W.visible=!!G,G){const J=Gr($n(G.lat,G.lon,Xm)),ae=E.players.get(G.targetSessionId);W.position.copy(J),ae&&W.lookAt(Gr($n(ae.lat,ae.lon,ae.altKm)))}}const k=1/60;v+=k;const P=v>=sC;P&&(v=0);let B=0;U&&E.players.forEach(N=>{const G=Gr($n(N.lat,N.lon,N.altKm));if(z<N.smokeUntil&&P){const W=m[_];_=(_+1)%qm,W.sprite.position.copy(G),W.ageS=0,W.sprite.visible=!0}if(B<S.length){const W=S[B],J=z<N.freezeUntil;W.visible=J,J&&W.position.copy(G);const ae=A[B],me=z<N.tumbleUntil;ae.visible=me,me&&(ae.position.copy(G),ae.children.forEach((Le,Ne)=>{const tt=L*5+Ne*Math.PI*2/3;Le.position.set(Math.cos(tt)*2.4,1.8,Math.sin(tt)*2.4)}))}B+=1});for(const N of m){if(!N.sprite.visible)continue;N.ageS+=k;const G=N.ageS/Km;if(G>=1){N.sprite.visible=!1;continue}N.sprite.scale.setScalar(1+G*2.5),N.sprite.material.opacity=.8*(1-G)}for(const N of x)if(N.sprite.visible){if(N.ageS+=k,N.ageS>=.25){N.sprite.visible=!1;continue}N.sprite.material.opacity=1-N.ageS/.25}},flashShot(E,L){R(E,2.2),L&&R(L,3.5)}}}const aC={jetstream:"💨",storm:"🌩",fog:"🌫",bird:"🐦",freeze:"❄",rocket:"🚀"},lC={jetstream:"Jet Stream",storm:"Storm Cloud",fog:"Fog Bomb",bird:"Bird Flock",freeze:"Time Freeze",rocket:"Rocket"},cC=new Set(["fog","freeze","rocket"]);function fC(n,e,t){const i=document.createElement("div");i.style.cssText="position:fixed;top:16px;right:16px;color:#fff;font:700 15px system-ui;background:rgba(11,16,38,.75);padding:10px 14px;border-radius:12px;pointer-events:none;display:none;text-align:center;z-index:5",n.appendChild(i);const r=document.createElement("div");r.style.cssText="position:fixed;top:76px;left:16px;color:#fff;font:700 18px system-ui;background:rgba(11,16,38,.7);padding:8px 12px;border-radius:10px;pointer-events:none;display:none;z-index:5",n.appendChild(r);const s=document.createElement("div");s.style.cssText="position:fixed;top:130px;left:50%;transform:translateX(-50%);color:#ffb14d;font:800 22px system-ui;background:rgba(60,20,20,.85);padding:8px 18px;border-radius:12px;pointer-events:none;display:none;z-index:6",s.textContent="⚠ ROCKET INCOMING!",n.appendChild(s);const o=document.createElement("div");o.style.cssText="position:fixed;top:35%;left:50%;transform:translateX(-50%);color:#fff;font:600 15px system-ui;background:rgba(20,27,61,.95);padding:14px 20px;border-radius:14px;display:none;text-align:left;z-index:8;pointer-events:auto",n.appendChild(o);let a=null,c="",l=!1;const h=()=>{const m=[];return a==null||a.players.forEach((v,_)=>{_===c||v.finishedAt!==0||m.push({sessionId:_,label:`${v.nickname} — leg ${v.legIndex+1}`})}),m},f=()=>{l=!1,o.style.display="none"},u=()=>{const m=h();if(m.length!==0){if(m.length===1){e(m[0].sessionId);return}l=!0,o.innerHTML='<div style="font-weight:800;margin-bottom:8px">Pick a rival (Esc cancels)</div>'+m.map((v,_)=>`<div data-target="${v.sessionId}" style="padding:4px 6px;cursor:pointer">${_+1}. ${v.label}</div>`).join(""),o.style.display="block";for(const v of o.querySelectorAll("[data-target]"))v.addEventListener("click",()=>{e(v.dataset.target),f()})}};window.addEventListener("keydown",m=>{if(l){m.code==="Escape"&&f();const _=Number(m.key);if(_>=1&&_<=4){const x=h()[_-1];x&&(e(x.sessionId),f())}return}if(!a||a.phase!=="racing")return;const v=a.players.get(c);if(v){if(m.code==="KeyF"){Date.now()>=v.shootCooldownUntil&&Date.now()>=v.smokeUntil&&t();return}m.code!=="Space"||v.heldItem===""||(m.preventDefault(),cC.has(v.heldItem)?u():e())}});let p="";return{update(m,v){a=m,c=v;const _=(m==null?void 0:m.phase)==="racing"?m.players.get(v):void 0,x=Date.now();if(!_)r.style.display="none",s.style.display="none",p="";else{const R=x<_.smokeUntil,S=x>=_.shootCooldownUntil&&!R,I=R?"💨 Engine out!":`${"❤".repeat(_.health)}${"🖤".repeat(Math.max(0,3-_.health))}  ${S?"🔫 F":"🔫 …"}`;I!==p&&(p=I,r.style.display="block",r.textContent=I);let A=!1;m.rockets.forEach(F=>{F.targetSessionId===v&&(A=!0)}),s.style.display=A?"block":"none"}const T=(_==null?void 0:_.heldItem)??"";if(T===""){i.style.display="none",l&&f();return}i.style.display="block",i.innerHTML=`<div style="font-size:26px">${aC[T]??"❔"}</div>${lC[T]??T}<div style="font-weight:400;font-size:12px;opacity:.75">Space to use</div>`}}}const Zm=["🥇","🥈","🥉","4.","5."];function uC(n){return n.sort((e,t)=>{const i=e.player.placement||99,r=t.player.placement||99;return i!==r?i-r:t.player.legIndex!==e.player.legIndex?t.player.legIndex-e.player.legIndex:e.player.nickname.localeCompare(t.player.nickname)})}function hC(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:96px;left:50%;transform:translateX(-50%);color:#fff;font:600 14px system-ui;background:rgba(11,16,38,.7);padding:10px 18px;border-radius:12px;pointer-events:none;text-align:center;z-index:4",n.appendChild(e);let t="";return{update(i,r,s){var c;const o=[];i.players.forEach((l,h)=>o.push({sessionId:h,player:l})),uC(o);const a=[i.phase,i.phase==="countdown"?Math.ceil((i.countdownEndsAt-Date.now())/1e3):"",o.map(({player:l})=>`${l.nickname}:${l.legIndex}:${l.placement}:${l.points}:${l.health}:${Date.now()<l.smokeUntil?"s":""}`).join(","),i.legs.length,i.hostSessionId===r].join("|");if(a!==t){if(t=a,i.phase==="countdown"){const l=Math.max(0,Math.ceil((i.countdownEndsAt-Date.now())/1e3));e.innerHTML="",e.textContent=`Contract: ${i.legs.length} legs — starting in ${l}…`}else if(i.phase==="racing"){const l=Date.now();e.innerHTML=o.map(({sessionId:h,player:f})=>{const u=h===r?" (you)":"",p=l<f.smokeUntil?"💨":"❤".repeat(f.health),m=f.placement>0?`🏁 ${Zm[f.placement-1]??f.placement}`:`Leg ${Math.min(f.legIndex+1,i.legs.length)}/${i.legs.length}`;return`<div>🛩 ${f.nickname}${u} ${p} — ${m}</div>`}).join("")}else if(i.phase==="finished"){const l=o.map(({sessionId:f,player:u})=>{const p=f===r,m=Zm[u.placement-1]??`${u.placement}.`;return`<div style="font-size:17px;margin:2px 0;${p?"color:#ffd94d":""}">${m} ${u.nickname}${p?" (you)":""} — ${u.points} pts</div>`}).join(""),h=r===i.hostSessionId?'<button id="race-again" style="margin-top:10px;padding:8px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 15px system-ui;cursor:pointer;pointer-events:auto">Race again</button>':'<div style="opacity:.7;margin-top:8px;font-weight:400">Waiting for the host to start the next race…</div>';e.innerHTML=`<div style="font-size:20px;font-weight:700;margin-bottom:6px">🏁 Race complete</div>${l}${h}`,s&&((c=e.querySelector("#race-again"))==null||c.addEventListener("click",s,{once:!0}))}else e.innerHTML="",e.textContent="";e.style.display=e.textContent||e.innerHTML?"block":"none"}}}}const dC="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.75);padding:12px 20px;border-radius:14px;pointer-events:none;text-align:center;min-width:340px;z-index:5",pC="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);color:#fff;font:800 30px system-ui;background:rgba(20,27,61,.92);padding:18px 30px;border-radius:18px;pointer-events:none;text-align:center;z-index:6;transition:opacity .4s ease";function mC(n){const e=document.createElement("div");e.style.cssText=dC,e.style.display="none",e.innerHTML=`
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
    </div>`,n.appendChild(e);const t=s=>e.querySelector(s),i=document.createElement("div");i.style.cssText=pC,i.style.opacity="0",n.appendChild(i);let r=null;return{show(s,o){t("[data-flag]").textContent=s.type==="riddle"?"❓":o,t("[data-label]").textContent=s.label,t("[data-sub]").textContent=s.sublabel,e.style.display="block",this.setCompass(null),this.setDwell(null),this.setWarning(null)},hide(){e.style.display="none"},setCompass(s){const o=t("[data-compass]");s===null?o.style.display="none":(o.style.display="inline-block",o.style.transform=`rotate(${Math.round(s)}deg)`)},setDwell(s){const o=t("[data-dwellwrap]");s===null?o.style.display="none":(o.style.display="block",t("[data-dwell]").style.width=`${Math.min(100,s*100)}%`)},setWarning(s){const o=t("[data-warn]");o.style.display=s?"block":"none",o.textContent=s??""},setClock(s){t("[data-clock]").textContent=s??""},toast(s,o=1800){i.textContent=s,i.style.opacity="1",r&&clearTimeout(r),r=setTimeout(()=>{i.style.opacity="0"},o)}}}function ad(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Of={},jm={},Jm;function gC(){return Jm||(Jm=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),jm}var cl={},Mh=function(n,e){return Mh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Mh(n,e)};function E_(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Mh(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xc=function(){return xc=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},xc.apply(this,arguments)};function b_(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function w_(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function T_(n,e){return function(t,i){e(t,i,n)}}function A_(n,e,t,i,r,s){function o(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,u=!1,p=t.length-1;p>=0;p--){var m={};for(var v in i)m[v]=v==="access"?{}:i[v];for(var v in i.access)m.access[v]=i.access[v];m.addInitializer=function(x){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(x||null))};var _=(0,t[p])(a==="accessor"?{get:h.get,set:h.set}:h[c],m);if(a==="accessor"){if(_===void 0)continue;if(_===null||typeof _!="object")throw new TypeError("Object expected");(f=o(_.get))&&(h.get=f),(f=o(_.set))&&(h.set=f),(f=o(_.init))&&r.unshift(f)}else(f=o(_))&&(a==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),u=!0}function R_(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function C_(n){return typeof n=="symbol"?n:"".concat(n)}function P_(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function I_(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function D_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(f){o(f)}}function c(h){try{l(i.throw(h))}catch(f){o(f)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function L_(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Pc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function N_(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Pc(e,n,t)}function vc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ld(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function O_(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(ld(arguments[e]));return n}function U_(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function F_(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function ro(n){return this instanceof ro?(this.v=n,this):new ro(n)}function B_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(m){return Promise.resolve(m).then(p,f)}}function a(p,m){i[p]&&(r[p]=function(v){return new Promise(function(_,x){s.push([p,v,_,x])>1||c(p,v)})},m&&(r[p]=m(r[p])))}function c(p,m){try{l(i[p](m))}catch(v){u(s[0][3],v)}}function l(p){p.value instanceof ro?Promise.resolve(p.value.v).then(h,f):u(s[0][2],p)}function h(p){c("next",p)}function f(p){c("throw",p)}function u(p,m){p(m),s.shift(),s.length&&c(s[0][0],s[0][1])}}function z_(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:ro(n[r](o)),done:!1}:s?s(o):o}:s}}function k_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof vc=="function"?vc(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function V_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var _C=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},Eh=function(n){return Eh=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},Eh(n)};function H_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=Eh(n),i=0;i<t.length;i++)t[i]!=="default"&&Pc(e,n,t[i]);return _C(e,n),e}function G_(n){return n&&n.__esModule?n:{default:n}}function W_(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function $_(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function X_(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function q_(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var xC=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function Y_(n){function e(s){n.error=n.hasError?new xC(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function K_(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const vC={__extends:E_,__assign:xc,__rest:b_,__decorate:w_,__param:T_,__esDecorate:A_,__runInitializers:R_,__propKey:C_,__setFunctionName:P_,__metadata:I_,__awaiter:D_,__generator:L_,__createBinding:Pc,__exportStar:N_,__values:vc,__read:ld,__spread:O_,__spreadArrays:U_,__spreadArray:F_,__await:ro,__asyncGenerator:B_,__asyncDelegator:z_,__asyncValues:k_,__makeTemplateObject:V_,__importStar:H_,__importDefault:G_,__classPrivateFieldGet:W_,__classPrivateFieldSet:$_,__classPrivateFieldIn:X_,__addDisposableResource:q_,__disposeResources:Y_,__rewriteRelativeImportExtension:K_},yC=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:q_,get __assign(){return xc},__asyncDelegator:z_,__asyncGenerator:B_,__asyncValues:k_,__await:ro,__awaiter:D_,__classPrivateFieldGet:W_,__classPrivateFieldIn:X_,__classPrivateFieldSet:$_,__createBinding:Pc,__decorate:w_,__disposeResources:Y_,__esDecorate:A_,__exportStar:N_,__extends:E_,__generator:L_,__importDefault:G_,__importStar:H_,__makeTemplateObject:V_,__metadata:I_,__param:T_,__propKey:C_,__read:ld,__rest:b_,__rewriteRelativeImportExtension:K_,__runInitializers:R_,__setFunctionName:P_,__spread:O_,__spreadArray:F_,__spreadArrays:U_,__values:vc,default:vC},Symbol.toStringTag,{value:"Module"})),Ic=ad(yC);var Uf={},Qm;function Dc(){return Qm||(Qm=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(Uf)),Uf}var Ff={},Bf={},zf={},Go={exports:{}},SC=Go.exports,e0;function cd(){return e0||(e0=1,(function(n,e){(function(t,i){i(e)})(SC,(function(t){t.OPERATION=void 0,(function(D){D[D.ADD=128]="ADD",D[D.REPLACE=0]="REPLACE",D[D.DELETE=64]="DELETE",D[D.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",D[D.MOVE_AND_ADD=160]="MOVE_AND_ADD",D[D.DELETE_AND_ADD=192]="DELETE_AND_ADD",D[D.CLEAR=10]="CLEAR",D[D.REVERSE=15]="REVERSE",D[D.MOVE=32]="MOVE",D[D.DELETE_BY_REFID=33]="DELETE_BY_REFID",D[D.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",u="~childType",p="~onEncodeEnd",m="~onDecodeEnd",v="~descriptors",_="~__numFields",x="~__refTypeFieldIndexes",T="~__viewFieldIndexes",R="$__fieldIndexesByViewTag";let S;try{S=new TextEncoder}catch{}const I=new ArrayBuffer(8),A=new Int32Array(I),F=new Float32Array(I),M=new Float64Array(I),E=new BigInt64Array(I),U=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(D,d){for(var g=0,y=0,w=0,H=D.length;w<H;w++)g=D.charCodeAt(w),g<128?y+=1:g<2048?y+=2:g<55296||g>=57344?y+=3:(w++,y+=4);return y};function z(D,d,g){for(var y=0,w=0,H=d.length;w<H;w++)y=d.charCodeAt(w),y<128?D[g.offset++]=y:y<2048?(D[g.offset]=192|y>>6,D[g.offset+1]=128|y&63,g.offset+=2):y<55296||y>=57344?(D[g.offset]=224|y>>12,D[g.offset+1]=128|y>>6&63,D[g.offset+2]=128|y&63,g.offset+=3):(w++,y=65536+((y&1023)<<10|d.charCodeAt(w)&1023),D[g.offset]=240|y>>18,D[g.offset+1]=128|y>>12&63,D[g.offset+2]=128|y>>6&63,D[g.offset+3]=128|y&63,g.offset+=4)}function C(D,d,g){D[g.offset++]=d&255}function k(D,d,g){D[g.offset++]=d&255}function P(D,d,g){D[g.offset++]=d&255,D[g.offset++]=d>>8&255}function B(D,d,g){D[g.offset++]=d&255,D[g.offset++]=d>>8&255}function N(D,d,g){D[g.offset++]=d&255,D[g.offset++]=d>>8&255,D[g.offset++]=d>>16&255,D[g.offset++]=d>>24&255}function G(D,d,g){const y=d>>24,w=d>>16,H=d>>8,q=d;D[g.offset++]=q&255,D[g.offset++]=H&255,D[g.offset++]=w&255,D[g.offset++]=y&255}function W(D,d,g){const y=Math.floor(d/Math.pow(2,32)),w=d>>>0;G(D,w,g),G(D,y,g)}function J(D,d,g){const y=d/Math.pow(2,32)>>0,w=d>>>0;G(D,w,g),G(D,y,g)}function ae(D,d,g){E[0]=BigInt.asIntN(64,d),N(D,A[0],g),N(D,A[1],g)}function me(D,d,g){E[0]=BigInt.asIntN(64,d),N(D,A[0],g),N(D,A[1],g)}function Le(D,d,g){F[0]=d,N(D,A[0],g)}function Ne(D,d,g){M[0]=d,N(D,A[0],g),N(D,A[1],g)}function tt(D,d,g){D[g.offset++]=d?1:0}function he(D,d,g){d||(d="");let y=U(d,"utf8"),w=0;if(y<32)D[g.offset++]=y|160,w=1;else if(y<256)D[g.offset++]=217,D[g.offset++]=y%255,w=2;else if(y<65536)D[g.offset++]=218,B(D,y,g),w=3;else if(y<4294967296)D[g.offset++]=219,G(D,y,g),w=5;else throw new Error("String too long");return z(D,d,g),w+y}function we(D,d,g){if(isNaN(d))return we(D,0,g);if(isFinite(d)){if(d!==(d|0))return Math.abs(d)<=34028235e31&&(F[0]=d,Math.abs(Math.abs(F[0])-Math.abs(d))<1e-4)?(D[g.offset++]=202,Le(D,d,g),5):(D[g.offset++]=203,Ne(D,d,g),9)}else return we(D,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,g);return d>=0?d<128?(D[g.offset++]=d&255,1):d<256?(D[g.offset++]=204,D[g.offset++]=d&255,2):d<65536?(D[g.offset++]=205,B(D,d,g),3):d<4294967296?(D[g.offset++]=206,G(D,d,g),5):(D[g.offset++]=207,J(D,d,g),9):d>=-32?(D[g.offset++]=224|d+32,1):d>=-128?(D[g.offset++]=208,C(D,d,g),2):d>=-32768?(D[g.offset++]=209,P(D,d,g),3):d>=-2147483648?(D[g.offset++]=210,N(D,d,g),5):(D[g.offset++]=211,W(D,d,g),9)}const ve={int8:C,uint8:k,int16:P,uint16:B,int32:N,uint32:G,int64:W,uint64:J,bigint64:ae,biguint64:me,float32:Le,float64:Ne,boolean:tt,string:he,number:we,utf8Write:z,utf8Length:U},Qe=new ArrayBuffer(8),nt=new Int32Array(Qe),it=new Float32Array(Qe),Xt=new Float64Array(Qe),Ae=new BigUint64Array(Qe),lt=new BigInt64Array(Qe);function Ze(D,d,g){g>D.length-d.offset&&(g=D.length-d.offset);for(var y="",w=0,H=d.offset,q=d.offset+g;H<q;H++){var te=D[H];if((te&128)===0){y+=String.fromCharCode(te);continue}if((te&224)===192){y+=String.fromCharCode((te&31)<<6|D[++H]&63);continue}if((te&240)===224){y+=String.fromCharCode((te&15)<<12|(D[++H]&63)<<6|(D[++H]&63)<<0);continue}if((te&248)===240){w=(te&7)<<18|(D[++H]&63)<<12|(D[++H]&63)<<6|(D[++H]&63)<<0,w>=65536?(w-=65536,y+=String.fromCharCode((w>>>10)+55296,(w&1023)+56320)):y+=String.fromCharCode(w);continue}console.error("decode.utf8Read(): Invalid byte "+te+" at offset "+H+". Skip to end of string: "+(d.offset+g));break}return d.offset+=g,y}function Oe(D,d){return Mt(D,d)<<24>>24}function Mt(D,d){return D[d.offset++]}function Rt(D,d){return Bt(D,d)<<16>>16}function Bt(D,d){return D[d.offset++]|D[d.offset++]<<8}function Ct(D,d){return D[d.offset++]|D[d.offset++]<<8|D[d.offset++]<<16|D[d.offset++]<<24}function Lt(D,d){return Ct(D,d)>>>0}function Zt(D,d){return nt[0]=Ct(D,d),it[0]}function K(D,d){return nt[0]=Ct(D,d),nt[1]=Ct(D,d),Xt[0]}function _n(D,d){const g=Lt(D,d);return Ct(D,d)*Math.pow(2,32)+g}function At(D,d){const g=Lt(D,d);return Lt(D,d)*Math.pow(2,32)+g}function V(D,d){return nt[0]=Ct(D,d),nt[1]=Ct(D,d),lt[0]}function b(D,d){return nt[0]=Ct(D,d),nt[1]=Ct(D,d),Ae[0]}function Q(D,d){return Mt(D,d)>0}function se(D,d){const g=D[d.offset++];let y;return g<192?y=g&31:g===217?y=Mt(D,d):g===218?y=Bt(D,d):g===219&&(y=Lt(D,d)),Ze(D,d,y)}function fe(D,d){const g=D[d.offset++];if(g<128)return g;if(g===202)return Zt(D,d);if(g===203)return K(D,d);if(g===204)return Mt(D,d);if(g===205)return Bt(D,d);if(g===206)return Lt(D,d);if(g===207)return At(D,d);if(g===208)return Oe(D,d);if(g===209)return Rt(D,d);if(g===210)return Ct(D,d);if(g===211)return _n(D,d);if(g>223)return(255-g+1)*-1}function be(D,d){const g=D[d.offset];return g<192&&g>160||g===217||g===218||g===219}const Se={utf8Read:Ze,int8:Oe,uint8:Mt,int16:Rt,uint16:Bt,int32:Ct,uint32:Lt,float32:Zt,float64:K,int64:_n,uint64:At,bigint64:V,biguint64:b,boolean:Q,string:se,number:fe,stringCheck:be},ue={},ge=new Map;function Me(D,d){d.constructor&&(ge.set(d.constructor,D),ue[D]=d),d.encode&&(ve[D]=d.encode),d.decode&&(Se[D]=d.decode)}function Ye(D){return ue[D]}function De(D){for(const d in D)Me(d,D[d]);return d=>Y(d)}const xn=class xn{static register(d){const g=Object.getPrototypeOf(d);if(g!==We){let y=xn.inheritedTypes.get(g);y||(y=new Set,xn.inheritedTypes.set(g,y)),y.add(d)}}static cache(d){let g=xn.cachedContexts.get(d);return g||(g=new xn(d),xn.cachedContexts.set(d,g)),g}constructor(d){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},d&&this.discoverTypes(d)}has(d){return this.schemas.has(d)}get(d){return this.types[d]}add(d,g=this.schemas.size){return this.schemas.has(d)?!1:(this.types[g]=d,d[Symbol.metadata]===void 0&&je.initialize(d),this.schemas.set(d,g),!0)}getTypeId(d){return this.schemas.get(d)}discoverTypes(d,g,y,w){var te,ee;if(w&&this.registerFilteredByParent(d,g,y),!this.add(d))return;(te=xn.inheritedTypes.get(d))==null||te.forEach(le=>{this.discoverTypes(le,g,y,w)});let H=d;for(;(H=Object.getPrototypeOf(H))&&H!==We&&H!==Function.prototype;)this.discoverTypes(H);const q=d[ee=Symbol.metadata]??(d[ee]={});q[T]&&(this.hasFilters=!0);for(const le in q){const pe=le,de=q[pe].type,_e=q[pe].tag!==void 0;if(typeof de!="string")if(typeof de=="function")this.discoverTypes(de,d,pe,w||_e);else{const ke=Object.values(de)[0];if(typeof ke=="string")continue;this.discoverTypes(ke,d,pe,w||_e)}}}registerFilteredByParent(d,g,y){let H=`${this.schemas.get(d)??this.schemas.size}`;g&&(H+=`-${this.schemas.get(g)}`),H+=`-${y}`,this.parentFiltered[H]=!0}debug(){let d="";for(const g in this.parentFiltered){const y=g.split("-").map(Number),w=y.pop();d+=`
		`,d+=`${g}: ${y.reverse().map((H,q)=>{const te=this.types[H],ee=te[Symbol.metadata];let le=te.name;return q===0&&(le+=`[${ee[w].name}]`),`${le}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${d}`}};xn.inheritedTypes=new Map,xn.cachedContexts=new Map;let Ee=xn;function Xe(D){if(Array.isArray(D))return{array:Xe(D[0])};if(typeof D.type<"u")return D.type;if(rt(D))return Object.keys(D).every(d=>typeof D[d]=="string")?"string":"number";if(typeof D=="object"&&D!==null){const d=Object.keys(D).find(g=>ue[g]!==void 0);if(d)return D[d]=Xe(D[d]),D}return D}function rt(D){if(typeof D=="function"&&D[Symbol.metadata])return!1;const d=Object.keys(D),g=d.filter(y=>/\d+/.test(y));return!!(g.length>0&&g.length===d.length/2&&D[D[g[0]]]==g[0]||d.length>0&&d.every(y=>typeof D[y]=="string"&&D[y]===y))}const je={addField(D,d,g,y,w){if(d>64)throw new Error(`Can't define field '${g}'.
Schema instances may only have up to 64 fields.`);D[d]=Object.assign(D[d]||{},{type:Xe(y),index:d,name:g}),Object.defineProperty(D,v,{value:D[v]||{},enumerable:!1,configurable:!0}),w?(D[v][g]=w,D[v][`_${g}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):D[v][g]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(D,_,{value:d,enumerable:!1,configurable:!0}),Object.defineProperty(D,g,{value:d,enumerable:!1,configurable:!0}),typeof D[d].type!="string"&&(D[x]===void 0&&Object.defineProperty(D,x,{value:[],enumerable:!1,configurable:!0}),D[x].push(d))},setTag(D,d,g){const y=D[d],w=D[y];w.tag=g,D[T]||(Object.defineProperty(D,T,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(D,R,{value:{},enumerable:!1,configurable:!0})),D[T].push(y),D[R][g]||(D[R][g]=[]),D[R][g].push(y)},setFields(D,d){const g=D.prototype.constructor;Ee.register(g);const y=Object.getPrototypeOf(g),w=y&&y[Symbol.metadata],H=je.initialize(g);g[s]||(g[s]=We[s]),g[o]||(g[o]=We[o]),g[a]||(g[a]=We[a]),g.prototype.toJSON||(g.prototype.toJSON=We.prototype.toJSON);let q=H[_]??(w&&w[_])??-1;q++;for(const te in d){const ee=Xe(d[te]),le=typeof Object.keys(ee)[0]=="string"&&Ye(Object.keys(ee)[0]),pe=le?Object.values(ee)[0]:ee;je.addField(H,q,te,ee,oe(`_${te}`,q,pe,le)),q++}return D},isDeprecated(D,d){return D[d].deprecated===!0},init(D){const d={};D[Symbol.metadata]=d,Object.defineProperty(d,_,{value:0,enumerable:!1,configurable:!0})},initialize(D){const d=Object.getPrototypeOf(D),g=d[Symbol.metadata];let y=D[Symbol.metadata]??Object.create(null);return d!==We&&y===g&&(y=Object.create(null),g&&(Object.setPrototypeOf(y,g),Object.defineProperty(y,_,{value:g[_],enumerable:!1,configurable:!0,writable:!0}),g[T]!==void 0&&(Object.defineProperty(y,T,{value:[...g[T]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(y,R,{value:{...g[R]},enumerable:!1,configurable:!0,writable:!0})),g[x]!==void 0&&Object.defineProperty(y,x,{value:[...g[x]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(y,v,{value:{...g[v]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(D,Symbol.metadata,{value:y,writable:!1,configurable:!0}),y},isValidInstance(D){return D.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(D.constructor[Symbol.metadata],_)},getFields(D){const d=D[Symbol.metadata],g={};for(let y=0;y<=d[_];y++)g[d[y].name]=d[y].type;return g},hasViewTagAtIndex(D,d){var g;return(g=D==null?void 0:D[T])==null?void 0:g.includes(d)}};function X(D){return{indexes:{},operations:[],queueRootNode:D}}function Te(){return{next:void 0,tail:void 0}}function ce(D,d){const g=D.indexes[d];g===void 0?D.indexes[d]=D.operations.push(d)-1:D.operations[g]=d}function Ce(D,d){var y;let g=D.indexes[d];g===void 0&&(g=Object.values(D.indexes).at(-1),d=(y=Object.entries(D.indexes).find(([w,H])=>H===g))==null?void 0:y[0]),D.operations[g]=void 0,delete D.indexes[d]}class Pe{constructor(d){var g;this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=d,this.metadata=d.constructor[Symbol.metadata],(g=this.metadata)!=null&&g[T]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(d){this.root=d;const g=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,g),g&&this.forEachChild((y,w)=>{y.root!==d?y.setRoot(d):d.add(y)})}setParent(d,g,y){if(this.addParent(d,y),!g)return;const w=g.add(this);g!==this.root&&(this.root=g,this.checkIsFiltered(d,y,w)),w&&this.forEachChild((H,q)=>{if(H.root===g){g.add(H),g.moveNextToParent(H);return}H.setParent(this.ref,g,q)})}forEachChild(d){var g,y;if(this.ref[u]){if(typeof this.ref[u]!="string")for(const[w,H]of this.ref.entries())H&&d(H[f],((g=this.indexes)==null?void 0:g[w])??w)}else for(const w of((y=this.metadata)==null?void 0:y[x])??[]){const H=this.metadata[w],q=this.ref[H.name];q&&d(q[f],w)}}operation(d){var g,y;this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-d),(g=this.root)==null||g.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-d),(y=this.root)==null||y.enqueueChangeTree(this,"changes"))}change(d,g=t.OPERATION.ADD){var q,te,ee;const y=this.isFiltered||((te=(q=this.metadata)==null?void 0:q[d])==null?void 0:te.tag)!==void 0,w=y?this.filteredChanges:this.changes,H=this.indexedOperations[d];if(!H||H===t.OPERATION.DELETE){const le=H&&H===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:g;this.indexedOperations[d]=le}ce(w,d),y?(ce(this.allFilteredChanges,d),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(ce(this.allChanges,d),(ee=this.root)==null||ee.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(d){const g=this.isFiltered?this.filteredChanges:this.changes,y={},w={};for(const H in this.indexedOperations)y[Number(H)+d]=this.indexedOperations[H],w[Number(H)+d]=g.indexes[H];this.indexedOperations=y,g.indexes=w,g.operations=g.operations.map(H=>H+d)}shiftAllChangeIndexes(d,g=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(d,g,this.allFilteredChanges),this._shiftAllChangeIndexes(d,g,this.allChanges)):this._shiftAllChangeIndexes(d,g,this.allChanges)}_shiftAllChangeIndexes(d,g=0,y){const w={};let H=0;for(const q in y.indexes)w[H++]=y.indexes[q];y.indexes=w;for(let q=0;q<y.operations.length;q++){const te=y.operations[q];te>g&&(y.operations[q]=te+d)}}indexedOperation(d,g,y=d){var w,H;this.indexedOperations[d]=g,this.filteredChanges!==void 0?(ce(this.allFilteredChanges,y),ce(this.filteredChanges,d),(w=this.root)==null||w.enqueueChangeTree(this,"filteredChanges")):(ce(this.allChanges,y),ce(this.changes,d),(H=this.root)==null||H.enqueueChangeTree(this,"changes"))}getType(d){return this.ref[u]||this.metadata[d].type}getChange(d){return this.indexedOperations[d]}getValue(d,g=!1){return this.ref[l](d,g)}delete(d,g,y=d){var q,te,ee;if(d===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${d}'`)}catch(le){console.warn(le)}return}const w=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[d]=g??t.OPERATION.DELETE,ce(w,d),Ce(this.allChanges,y);const H=this.getValue(d);return H&&H[f]&&((q=this.root)==null||q.remove(H[f])),this.filteredChanges!==void 0?(Ce(this.allFilteredChanges,y),(te=this.root)==null||te.enqueueChangeTree(this,"filteredChanges")):(ee=this.root)==null||ee.enqueueChangeTree(this,"changes"),H}endEncode(d){var g,y;this.indexedOperations={},this[d]=X(),(y=(g=this.ref)[p])==null||y.call(g),this.isNew=!1}discard(d=!1){var g,y;(y=(g=this.ref)[p])==null||y.call(g),this.indexedOperations={},this.changes=X(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=X(this.filteredChanges.queueRootNode)),d&&(this.allChanges=X(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=X(this.allFilteredChanges.queueRootNode)))}discardAll(){const d=Object.keys(this.indexedOperations);for(let g=0,y=d.length;g<y;g++){const w=this.getValue(Number(d[g]));w&&w[f]&&w[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(d,g,y){var w,H,q,te;this.root.types.hasFilters&&(this._checkFilteredByParent(d,g),this.filteredChanges!==void 0&&((w=this.root)==null||w.enqueueChangeTree(this,"filteredChanges"),y&&((H=this.root)==null||H.enqueueChangeTree(this,"allFilteredChanges")))),this.isFiltered||((q=this.root)==null||q.enqueueChangeTree(this,"changes"),y&&((te=this.root)==null||te.enqueueChangeTree(this,"allChanges")))}_checkFilteredByParent(d,g){if(!d)return;const y=je.isValidInstance(this.ref)?this.ref.constructor:this.ref[u];let w,H=!je.isValidInstance(d);H?(w=d[f],d=w.parent,g=w.parentIndex):w=d[f];const q=d.constructor;let te=`${this.root.types.getTypeId(y)}`;q&&(te+=`-${this.root.types.schemas.get(q)}`),te+=`-${g}`;const ee=je.hasViewTagAtIndex(q==null?void 0:q[Symbol.metadata],g);this.isFiltered=d[f].isFiltered||this.root.types.parentFiltered[te]||ee,this.isFiltered&&(this.isVisibilitySharedWithParent=w.isFiltered&&typeof y!="string"&&!ee&&H,this.filteredChanges||(this.filteredChanges=X(),this.allFilteredChanges=X()),this.changes.operations.length>0&&(this.changes.operations.forEach(le=>ce(this.filteredChanges,le)),this.allChanges.operations.forEach(le=>ce(this.allFilteredChanges,le)),this.changes=X(),this.allChanges=X()))}get parent(){var d;return(d=this.parentChain)==null?void 0:d.ref}get parentIndex(){var d;return(d=this.parentChain)==null?void 0:d.index}addParent(d,g){if(this.hasParent((y,w)=>y[f]===d[f])){this.parentChain.index=g;return}this.parentChain={ref:d,index:g,next:this.parentChain}}removeParent(d=this.parent){let g=this.parentChain,y=null;for(;g;){if(g.ref[f]===d[f])return y?y.next=g.next:this.parentChain=g.next,!0;y=g,g=g.next}return this.parentChain===void 0}findParent(d){let g=this.parentChain;for(;g;){if(d(g.ref,g.index))return g;g=g.next}}hasParent(d){return this.findParent(d)!==void 0}getAllParents(){const d=[];let g=this.parentChain;for(;g;)d.push({ref:g.ref,index:g.index}),g=g.next;return d}}function xe(D,d,g,y,w,H){var q;typeof g=="string"?(q=ve[g])==null||q.call(ve,d,y,H):g[Symbol.metadata]!==void 0?(ve.number(d,y[f].refId,H),(w&t.OPERATION.ADD)===t.OPERATION.ADD&&D.tryEncodeTypeId(d,g,y.constructor,H)):ve.number(d,y[f].refId,H)}const Ke=function(D,d,g,y,w,H,q,te,ee){if(d[H.offset++]=(y|w)&255,w===t.OPERATION.DELETE)return;const le=g.ref,pe=ee[y];xe(D,d,ee[y].type,le[pe.name],w,H)},Ge=function(D,d,g,y,w,H){if(d[H.offset++]=w&255,ve.number(d,y,H),w===t.OPERATION.DELETE)return;const q=g.ref;if((w&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof q.set=="function"){const le=g.ref.$indexes.get(y);ve.string(d,le,H)}const te=q[u],ee=q[l](y);xe(D,d,te,ee,w,H)},qt=function(D,d,g,y,w,H,q,te){const ee=g.ref,le=te&&g.isFiltered&&typeof g.getType(y)!="string";let pe;if(le){const ke=ee.tmpItems[y];if(!ke)return;pe=ke[f].refId,w===t.OPERATION.DELETE?w=t.OPERATION.DELETE_BY_REFID:w===t.OPERATION.ADD&&(w=t.OPERATION.ADD_BY_REFID)}else pe=y;if(d[H.offset++]=w&255,ve.number(d,pe,H),w===t.OPERATION.DELETE||w===t.OPERATION.DELETE_BY_REFID)return;const de=g.getType(y),_e=g.getValue(y,q);xe(D,d,de,_e,w,H)},Nt=-1;function Hn(D,d,g,y,w,H,q,te){const ee=D.root,le=g[l](y);let pe;if((d&t.OPERATION.DELETE)===t.OPERATION.DELETE){const de=ee.refIds.get(le);de!==void 0&&ee.removeRef(de),d!==t.OPERATION.DELETE_AND_ADD&&g[h](y),pe=void 0}if(d!==t.OPERATION.DELETE)if(We.is(w)){const de=Se.number(H,q);if(pe=ee.refs.get(de),(d&t.OPERATION.ADD)===t.OPERATION.ADD){const _e=D.getInstanceType(H,q,w);pe||(pe=D.createInstanceOfType(_e)),ee.addRef(de,pe,pe!==le||d===t.OPERATION.DELETE_AND_ADD&&pe===le)}}else if(typeof w=="string")pe=Se[w](H,q);else{const de=Ye(Object.keys(w)[0]),_e=Se.number(H,q),ke=ee.refs.has(_e)?le||ee.refs.get(_e):new de.constructor;if(pe=ke.clone(!0),pe[u]=Object.values(w)[0],le){let He=ee.refIds.get(le);if(He!==void 0&&_e!==He){const Re=le.entries();let ye;for(;(ye=Re.next())&&!ye.done;){const[$e,It]=ye.value;typeof It=="object"&&(He=ee.refIds.get(It),ee.removeRef(He)),te.push({ref:le,refId:He,op:t.OPERATION.DELETE,field:$e,value:void 0,previousValue:It})}}}ee.addRef(_e,pe,ke!==le||d===t.OPERATION.DELETE_AND_ADD&&ke===le)}return{value:pe,previousValue:le}}const Kn=function(D,d,g,y,w){const H=d[g.offset++],q=y.constructor[Symbol.metadata],te=H>>6<<6,ee=H%(te||255),le=q[ee];if(le===void 0)return console.warn("@colyseus/schema: field not defined at",{index:ee,ref:y.constructor.name,metadata:q}),Nt;const{value:pe,previousValue:de}=Hn(D,te,y,ee,le.type,d,g,w);pe!=null&&(y[le.name]=pe),de!==pe&&w.push({ref:y,refId:D.currentRefId,op:te,field:le.name,value:pe,previousValue:de})},ls=function(D,d,g,y,w){const H=d[g.offset++];if(H===t.OPERATION.CLEAR){D.removeChildRefs(y,w),y.clear();return}const q=Se.number(d,g),te=y[u];let ee;(H&t.OPERATION.ADD)===t.OPERATION.ADD?typeof y.set=="function"?(ee=Se.string(d,g),y.setIndex(q,ee)):ee=q:ee=y.getIndex(q);const{value:le,previousValue:pe}=Hn(D,H,y,q,te,d,g,w);if(le!=null){if(typeof y.set=="function")y.$items.set(ee,le);else if(typeof y.$setAt=="function")y.$setAt(q,le,H);else if(typeof y.add=="function"){const de=y.add(le);typeof de=="number"&&y.setIndex(de,de)}}pe!==le&&w.push({ref:y,refId:D.currentRefId,op:H,field:"",dynamicIndex:ee,value:le,previousValue:pe})},Uc=function(D,d,g,y,w){let H=d[g.offset++],q;if(H===t.OPERATION.CLEAR){D.removeChildRefs(y,w),y.clear();return}else if(H===t.OPERATION.REVERSE){y.reverse();return}else if(H===t.OPERATION.DELETE_BY_REFID){const de=Se.number(d,g),_e=D.root.refs.get(de);q=y.findIndex(ke=>ke===_e),y[h](q),w.push({ref:y,refId:D.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:q,value:void 0,previousValue:_e});return}else if(H===t.OPERATION.ADD_BY_REFID){const de=Se.number(d,g),_e=D.root.refs.get(de);_e&&(q=y.findIndex(ke=>ke===_e)),(q===-1||q===void 0)&&(q=y.length)}else q=Se.number(d,g);const te=y[u];let ee=q;const{value:le,previousValue:pe}=Hn(D,H,y,q,te,d,g,w);le!=null&&le!==pe&&y.$setAt(q,le,H),pe!==le&&w.push({ref:y,refId:D.currentRefId,op:H,field:"",dynamicIndex:ee,value:le,previousValue:pe})};class lo extends Error{}function co(D,d,g,y){let w,H=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":w="number",isNaN(D)&&console.log(`trying to encode "NaN" in ${g.constructor.name}#${y}`);break;case"bigint64":case"biguint64":w="bigint";break;case"string":w="string",H=!0;break;case"boolean":return;default:return}if(typeof D!==w&&(!H||H&&D!==null)){let q=`'${JSON.stringify(D)}'${D&&D.constructor&&` (${D.constructor.name})`||""}`;throw new lo(`a '${w}' was expected, but ${q} was provided in ${g.constructor.name}#${y}`)}}function cs(D,d,g,y){if(!(D instanceof d))throw new lo(`a '${d.name}' was expected, but '${D&&D.constructor.name}' was provided in ${g.constructor.name}#${y}`)}var fo,uo;const ji=(D,d)=>{const g=D.toString(),y=d.toString();return g<y?-1:g>y?1:0},gt=class gt{static[(fo=o,uo=a,c)](d,g,y){var w;return!y||typeof d[u]=="string"||y.isChangeTreeVisible((w=d.tmpItems[g])==null?void 0:w[f])}static is(d){return Array.isArray(d)||d.array!==void 0}static from(d){return new gt(...Array.from(d))}constructor(...d){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const g=new Proxy(this,{get:(y,w)=>typeof w!="symbol"&&!isNaN(w)?this.items[w]:Reflect.get(y,w),set:(y,w,H)=>{var q;if(typeof w!="symbol"&&!isNaN(w)){if(H==null)y.$deleteAt(w);else{if(H[f]){cs(H,y[u],y,w);const te=y.items[w];y.isMovingItems?(te!==void 0?H[f].isNew?y[f].indexedOperation(Number(w),t.OPERATION.MOVE_AND_ADD):(y[f].getChange(Number(w))&t.OPERATION.DELETE)===t.OPERATION.DELETE?y[f].indexedOperation(Number(w),t.OPERATION.DELETE_AND_MOVE):y[f].indexedOperation(Number(w),t.OPERATION.MOVE):H[f].isNew&&y[f].indexedOperation(Number(w),t.OPERATION.ADD),H[f].setParent(this,y[f].root,w)):y.$changeAt(Number(w),H),te!==void 0&&((q=te[f].root)==null||q.remove(te[f]))}else y.$changeAt(Number(w),H);y.items[w]=H,y.tmpItems[w]=H}return!0}else return Reflect.set(y,w,H)},deleteProperty:(y,w)=>(typeof w=="number"?y.$deleteAt(w):delete y[w],!0),has:(y,w)=>typeof w!="symbol"&&!isNaN(Number(w))?Reflect.has(this.items,w):Reflect.has(y,w)});return Object.defineProperty(this,f,{value:new Pe(g),enumerable:!1,writable:!0}),d.length>0&&this.push(...d),g}set length(d){d===0?this.clear():d<this.items.length?this.splice(d,this.length-d):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...d){var w;let g=this.tmpItems.length;const y=this[f];for(let H=0,q=d.length;H<q;H++,g++){const te=d[H];if(te==null)return;typeof te=="object"&&this[u]&&cs(te,this[u],this,H),y.indexedOperation(g,t.OPERATION.ADD,this.items.length),this.items.push(te),this.tmpItems.push(te),(w=te[f])==null||w.setParent(this,y.root,g)}return g}pop(){let d=-1;for(let g=this.tmpItems.length-1;g>=0;g--)if(this.deletedIndexes[g]!==!0){d=g;break}if(!(d<0))return this[f].delete(d,void 0,this.items.length-1),this.deletedIndexes[d]=!0,this.items.pop()}at(d){return d<0&&(d+=this.length),this.items[d]}$changeAt(d,g){var H;if(g==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[d]===g)return;const y=this.items[d]!==void 0?typeof g=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,w=this[f];w.change(d,y),(H=g[f])==null||H.setParent(this,w.root,d)}$deleteAt(d,g){this[f].delete(d,g)}$setAt(d,g,y){d===0&&y===t.OPERATION.ADD&&this.items[d]!==void 0?this.items.unshift(g):y===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(d,1),this.items[d]=g):this.items[d]=g}clear(){if(this.items.length===0)return;const d=this[f];d.forEachChild((g,y)=>{var w;(w=d.root)==null||w.remove(g)}),d.discard(!0),d.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...d){return new gt(...this.items.concat(...d))}join(d){return this.items.join(d)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const d=this[f],g=this.tmpItems.findIndex(w=>w===this.items[0]),y=this.items.findIndex(w=>w===this.items[0]);return d.delete(g,t.OPERATION.DELETE,y),d.shiftAllChangeIndexes(-1,y),this.deletedIndexes[g]=!0,this.items.shift()}slice(d,g){const y=new gt;return y.push(...this.items.slice(d,g)),y}sort(d=ji){this.isMovingItems=!0;const g=this[f];return this.items.sort(d).forEach((w,H)=>g.change(H,t.OPERATION.REPLACE)),this.tmpItems.sort(d),this.isMovingItems=!1,this}splice(d,g,...y){var le,pe,de;const w=this[f],H=this.items.length,q=this.tmpItems.length,te=y.length,ee=[];for(let _e=0;_e<q;_e++)this.deletedIndexes[_e]!==!0&&ee.push(_e);if(H>d){g===void 0&&(g=H-d);for(let _e=d;_e<d+g;_e++){const ke=ee[_e];w.delete(ke,t.OPERATION.DELETE),this.deletedIndexes[ke]=!0}}else g=0;if(te>0){if(te>g)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let _e=0;_e<te;_e++){const ke=(ee[d]??H)+_e;w.indexedOperation(ke,this.deletedIndexes[ke]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),(le=y[_e][f])==null||le.setParent(this,w.root,ke)}}return g>te&&w.shiftAllChangeIndexes(-(g-te),ee[d+te]),w.filteredChanges!==void 0?(pe=w.root)==null||pe.enqueueChangeTree(w,"filteredChanges"):(de=w.root)==null||de.enqueueChangeTree(w,"changes"),this.items.splice(d,g,...y)}unshift(...d){const g=this[f];return g.shiftChangeIndexes(d.length),g.isFiltered?ce(g.filteredChanges,this.items.length):ce(g.allChanges,this.items.length),d.forEach((y,w)=>{g.change(w,t.OPERATION.ADD)}),this.tmpItems.unshift(...d),this.items.unshift(...d)}indexOf(d,g){return this.items.indexOf(d,g)}lastIndexOf(d,g=this.length-1){return this.items.lastIndexOf(d,g)}every(d,g){return this.items.every(d,g)}some(d,g){return this.items.some(d,g)}forEach(d,g){return this.items.forEach(d,g)}map(d,g){return this.items.map(d,g)}filter(d,g){return this.items.filter(d,g)}reduce(d,g){return this.items.reduce(d,g)}reduceRight(d,g){return this.items.reduceRight(d,g)}find(d,g){return this.items.find(d,g)}findIndex(d,g){return this.items.findIndex(d,g)}fill(d,g,y){throw new Error("ArraySchema#fill() not implemented")}copyWithin(d,g,y){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return gt}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(d,g){return this.items.includes(d,g)}flatMap(d,g){throw new Error("ArraySchema#flatMap() is not supported.")}flat(d){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...d){return this.items.findLastIndex.apply(this.items,arguments)}with(d,g){const y=this.items.slice();return d<0&&(d+=this.length),y[d]=g,new gt(...y)}toReversed(){return this.items.slice().reverse()}toSorted(d){return this.items.slice().sort(d)}toSpliced(d,g,...y){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(d=>{let g=this.items.length;for(;g!=0;){let y=Math.floor(Math.random()*g);g--,[this[g],this[y]]=[this[y],this[g]]}})}move(d){return this.isMovingItems=!0,d(this),this.isMovingItems=!1,this}[l](d,g=!1){return g?this.items[d]:this.deletedIndexes[d]?this.items[d]:this.tmpItems[d]||this.items[d]}[h](d){this.items[d]=void 0,this.tmpItems[d]=void 0}[p](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[m](){this.items=this.items.filter(d=>d!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(d=>typeof d.toJSON=="function"?d.toJSON():d)}clone(d){let g;return d?(g=new gt,g.push(...this.items)):g=new gt(...this.map(y=>y[f]?y.clone():y)),g}};gt[fo]=qt,gt[uo]=Uc;let Pn=gt;Me("array",{constructor:Pn});var ho,po;const Pt=class Pt{static[(ho=o,po=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.isChangeTreeVisible((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.map!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const g=new Pe(this);if(g.indexes={},Object.defineProperty(this,f,{value:g,enumerable:!1,writable:!0}),d)if(d instanceof Map||d instanceof Pt)d.forEach((y,w)=>this.set(w,y));else for(const y in d)this.set(y,d[y]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return Pt}set(d,g){var te;if(g==null)throw new Error(`MapSchema#set('${d}', ${g}): trying to set ${g} value on '${d}'.`);typeof g=="object"&&this[u]&&cs(g,this[u],this,d),d=d.toString();const y=this[f],w=g[f]!==void 0;let H,q;if(typeof y.indexes[d]<"u"){H=y.indexes[d],q=t.OPERATION.REPLACE;const ee=this.$items.get(d);if(ee===g)return;w&&(q=t.OPERATION.DELETE_AND_ADD,ee!==void 0&&((te=ee[f].root)==null||te.remove(ee[f]))),this.deletedItems[H]&&delete this.deletedItems[H]}else H=y.indexes[_]??0,q=t.OPERATION.ADD,this.$indexes.set(H,d),y.indexes[d]=H,y.indexes[_]=H+1;return this.$items.set(d,g),y.change(H,q),w&&g[f].setParent(this,y.root,H),this}get(d){return this.$items.get(d)}delete(d){if(!this.$items.has(d))return!1;const g=this[f].indexes[d];return this.deletedItems[g]=this[f].delete(g),this.$items.delete(d)}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((g,y)=>{var w;(w=d.root)==null||w.remove(g)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return this.$items.has(d)}forEach(d){this.$items.forEach(d)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){const d=this[f];for(const g in this.deletedItems){const y=parseInt(g),w=this.$indexes.get(y);delete d.indexes[w],this.$indexes.delete(y)}this.deletedItems={}}toJSON(){const d={};return this.forEach((g,y)=>{d[y]=typeof g.toJSON=="function"?g.toJSON():g}),d}clone(d){let g;return d?g=Object.assign(new Pt,this):(g=new Pt,this.forEach((y,w)=>{y[f]?g.set(w,y.clone()):g.set(w,y)})),g}};Pt[ho]=Ge,Pt[po]=ls;let Gn=Pt;Me("map",{constructor:Gn});var mo,Ur;const In=class In{static[(mo=o,Ur=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.isChangeTreeVisible((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.collection!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Pe(this),this[f].indexes={},d&&d.forEach(g=>this.add(g)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){const g=this.$refId++;return d[f]!==void 0&&d[f].setParent(this,this[f].root,g),this[f].indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this[f].change(g),g}at(d){const g=Array.from(this.$items.keys())[d];return this.$items.get(g)}entries(){return this.$items.entries()}delete(d){const g=this.$items.entries();let y,w;for(;(w=g.next())&&!w.done;)if(d===w.value[1]){y=w.value[0];break}return y===void 0?!1:(this.deletedItems[y]=this[f].delete(y),this.$indexes.delete(y),this.$items.delete(y))}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((g,y)=>{var w;(w=d.root)==null||w.remove(g)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return Array.from(this.$items.values()).some(g=>g===d)}forEach(d){this.$items.forEach((g,y,w)=>d(g,y,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((g,y)=>{d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d}clone(d){let g;return d?g=Object.assign(new In,this):(g=new In,this.forEach(y=>{y[f]?g.add(y.clone()):g.add(y)})),g}};In[mo]=Ge,In[Ur]=ls;let Ji=In;Me("collection",{constructor:Ji});var go,ga;const wt=class wt{static[(go=o,ga=a,c)](d,g,y){return!y||typeof d[u]=="string"||y.visible.has((d[l](g)??d.deletedItems[g])[f])}static is(d){return d.set!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Pe(this),this[f].indexes={},d&&d.forEach(g=>this.add(g)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){var w;if(this.has(d))return!1;const g=this.$refId++;d[f]!==void 0&&d[f].setParent(this,this[f].root,g);const y=((w=this[f].indexes[g])==null?void 0:w.op)??t.OPERATION.ADD;return this[f].indexes[g]=g,this.$indexes.set(g,g),this.$items.set(g,d),this[f].change(g,y),g}entries(){return this.$items.entries()}delete(d){const g=this.$items.entries();let y,w;for(;(w=g.next())&&!w.done;)if(d===w.value[1]){y=w.value[0];break}return y===void 0?!1:(this.deletedItems[y]=this[f].delete(y),this.$indexes.delete(y),this.$items.delete(y))}clear(){const d=this[f];d.discard(!0),d.indexes={},this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){const g=this.$items.values();let y=!1,w;for(;(w=g.next())&&!w.done;)if(d===w.value){y=!0;break}return y}forEach(d){this.$items.forEach((g,y,w)=>d(g,y,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,g){this.$indexes.set(d,g)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const g=this.$indexes.get(d);this.$items.delete(g),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((g,y)=>{d.push(typeof g.toJSON=="function"?g.toJSON():g)}),d}clone(d){let g;return d?g=Object.assign(new wt,this):(g=new wt,this.forEach(y=>{y[f]?g.add(y.clone()):g.add(y)})),g}};wt[go]=Ge,wt[ga]=ls;let xr=wt;Me("set",{constructor:xr});const gi=-1;function Fc(D){return Ee.register(D),D}function O(D=gi){return function(d,g){var te;const y=d.constructor,H=Object.getPrototypeOf(y)[Symbol.metadata],q=y[te=Symbol.metadata]??(y[te]=Object.assign({},y[Symbol.metadata],H??Object.create(null)));je.setTag(q,g,D)}}function Y(D,d){return function(g,y){const w=g.constructor;if(!D)throw new Error(`${w.name}: @type() reference provided for "${y}" is undefined. Make sure you don't have any circular dependencies.`);D=Xe(D),Ee.register(w);const q=Object.getPrototypeOf(w)[Symbol.metadata],te=je.initialize(w);let ee=te[y];if(te[ee]!==void 0){if(te[ee].deprecated)return;if(te[ee].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${y}' definition on '${w.name}'.
Check @type() annotation`)}catch(le){const pe=le.stack.split(`
`)[4].trim();throw new Error(`${le.message} ${pe}`)}}else ee=te[_]??(q&&q[_])??-1,ee++;if(d&&d.manual)je.addField(te,ee,y,D,{enumerable:!0,configurable:!0,writable:!0});else{const le=typeof Object.keys(D)[0]=="string"&&Ye(Object.keys(D)[0]),pe=le?Object.values(D)[0]:D;je.addField(te,ee,y,D,oe(`_${y}`,ee,pe,le))}}}function oe(D,d,g,y){return{get:function(){return this[D]},set:function(w){var q,te;const H=this[D]??void 0;if(w!==H){if(w!=null){y?(y.constructor===Pn&&!(w instanceof Pn)&&(w=new Pn(...w)),y.constructor===Gn&&!(w instanceof Gn)&&(w=new Gn(w)),w[u]=g):typeof g!="string"?cs(w,g,this,D.substring(1)):co(w,g,this,D.substring(1));const ee=this[f];H!==void 0&&H[f]?((q=ee.root)==null||q.remove(H[f]),this.constructor[s](ee,d,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](ee,d,t.OPERATION.ADD),(te=w[f])==null||te.setParent(this,ee.root,d)}else H!==void 0&&this[f].delete(d);this[D]=w}},enumerable:!0,configurable:!0}}function ne(D=!0){return function(d,g){var ee;const y=d.constructor,H=Object.getPrototypeOf(y)[Symbol.metadata],q=y[ee=Symbol.metadata]??(y[ee]=Object.assign({},y[Symbol.metadata],H??Object.create(null))),te=q[g];q[te].deprecated=!0,D&&(q[v]??(q[v]={}),q[v][g]={get:function(){throw new Error(`${g} is deprecated.`)},set:function(le){},enumerable:!1,configurable:!0}),Object.defineProperty(q,te,{value:q[te],enumerable:!1,configurable:!0})}}function re(D,d,g){for(let y in d)Y(d[y],g)(D.prototype,y);return D}function Ue(D,d,g=We){const y={},w={},H={},q={};for(let pe in D){const de=D[pe];typeof de=="object"?(de.view!==void 0&&(q[pe]=typeof de.view=="boolean"?gi:de.view),y[pe]=Xe(de),Object.prototype.hasOwnProperty.call(de,"default")?H[pe]=de.default:Array.isArray(de)||de.array!==void 0?H[pe]=new Pn:de.map!==void 0?H[pe]=new Gn:de.collection!==void 0?H[pe]=new Ji:de.set!==void 0?H[pe]=new xr:de.type!==void 0&&We.is(de.type)&&(!de.type.prototype.initialize||de.type.prototype.initialize.length===0)&&(H[pe]=new de.type)):typeof de=="function"?We.is(de)?((!de.prototype.initialize||de.prototype.initialize.length===0)&&(H[pe]=new de),y[pe]=Xe(de)):w[pe]=de:y[pe]=Xe(de)}const te=()=>{const pe={};for(const de in H){const _e=H[de];_e&&typeof _e.clone=="function"?pe[de]=_e.clone():pe[de]=_e}return pe},ee=pe=>{const de=Object.keys(y),_e={};for(const ke in pe)de.includes(ke)||(_e[ke]=pe[ke]);return _e},le=je.setFields(class extends g{constructor(...pe){w.initialize&&typeof w.initialize=="function"?(super(Object.assign({},te(),ee(pe[0]||{}))),new.target===le&&w.initialize.apply(this,pe)):super(Object.assign({},te(),pe[0]||{}))}},y);le._getDefaultValues=te,Object.assign(le.prototype,w);for(let pe in q)O(q[pe])(le.prototype,pe);return d&&Object.defineProperty(le,"name",{value:d}),le.extends=(pe,de)=>Ue(pe,de,le),le}function Ve(D){return new Array(D).fill(0).map((d,g)=>g===D-1?"└─ ":"   ").join("")}function Fe(D){const d=D[f].root,g={ops:{},refs:[]};let y=d.changes.next;for(;y;){const w=y.changeTree;if(w===void 0){y=y.next;continue}const H=w.indexedOperations;g.refs.push(`refId#${w.refId}`);for(const q in H){const te=H[q],ee=t.OPERATION[te];g.ops[ee]||(g.ops[ee]=0),g.ops[t.OPERATION[te]]++}y=y.next}return g}var qe,Je;const Dn=class Dn{static initialize(d){var g;Object.defineProperty(d,f,{value:new Pe(d),enumerable:!1,writable:!0}),Object.defineProperties(d,((g=d.constructor[Symbol.metadata])==null?void 0:g[v])||{})}static is(d){return typeof d[Symbol.metadata]=="object"}static[(qe=o,Je=a,s)](d,g,y=t.OPERATION.ADD){d.change(g,y)}static[c](d,g,y){var q,te;const H=(q=d.constructor[Symbol.metadata][g])==null?void 0:q.tag;if(y===void 0)return H===void 0;if(H===void 0)return!0;if(H===gi)return y.isChangeTreeVisible(d[f]);{const ee=(te=y.tags)==null?void 0:te.get(d[f]);return ee&&ee.has(H)}}constructor(d){Dn.initialize(this),d&&Object.assign(this,d)}assign(d){return Object.assign(this,d),this}setDirty(d,g){const y=this.constructor[Symbol.metadata];this[f].change(y[y[d]].index,g)}clone(){var y;const d=Object.create(this.constructor.prototype);Dn.initialize(d);const g=this.constructor[Symbol.metadata];for(const w in g){const H=g[w].name;typeof this[H]=="object"&&typeof((y=this[H])==null?void 0:y.clone)=="function"?d[H]=this[H].clone():d[H]=this[H]}return d}toJSON(){const d={},g=this.constructor[Symbol.metadata];for(const y in g){const w=g[y],H=w.name;!w.deprecated&&this[H]!==null&&typeof this[H]<"u"&&(d[H]=typeof this[H].toJSON=="function"?this[H].toJSON():this[H])}return d}discardAllChanges(){this[f].discardAll()}[l](d){const g=this.constructor[Symbol.metadata];return this[g[d].name]}[h](d){const g=this.constructor[Symbol.metadata];this[g[d].name]=void 0}static debugRefIds(d,g=!1,y=0,w,H=""){var _e;const q=g?` - ${JSON.stringify(d.toJSON())}`:"",te=d[f],ee=w?w.root.refIds.get(d):te.refId,le=w?w.root:te.root,pe=((_e=le==null?void 0:le.refCount)==null?void 0:_e[ee])>1?` [×${le.refCount[ee]}]`:"";let de=`${Ve(y)}${H}${d.constructor.name} (refId: ${ee})${pe}${q}
`;return te.forEachChild((ke,He)=>{let Re=He;typeof He=="number"&&d.$indexes&&(Re=d.$indexes.get(He)??He);const ye=d.forEach!==void 0&&Re!==void 0?`["${Re}"]: `:"";de+=this.debugRefIds(ke.ref,g,y+1,w,ye)}),de}static debugRefIdEncodingOrder(d,g="allChanges"){let y=[],w=d[f].root[g].next;for(;w;)w.changeTree&&y.push(w.changeTree.refId),w=w.next;return y}static debugRefIdsFromDecoder(d){return this.debugRefIds(d.state,!1,0,d)}static debugChanges(d,g=!1){const y=d[f],w=g?y.allChanges:y.changes,H=g?"allChanges":"changes";let q=`${d.constructor.name} (${y.refId}) -> .${H}:
`;function te(ee){ee.operations.filter(le=>le).forEach(le=>{const pe=y.indexedOperations[le];q+=`- [${le}]: ${t.OPERATION[pe]} (${JSON.stringify(y.getValue(Number(le),g))})
`})}return te(w),!g&&y.filteredChanges&&y.filteredChanges.operations.filter(ee=>ee).length>0&&(q+=`${d.constructor.name} (${y.refId}) -> .filteredChanges:
`,te(y.filteredChanges)),g&&y.allFilteredChanges&&y.allFilteredChanges.operations.filter(ee=>ee).length>0&&(q+=`${d.constructor.name} (${y.refId}) -> .allFilteredChanges:
`,te(y.allFilteredChanges)),q}static debugChangesDeep(d,g="changes"){var pe,de;let y="";const w=d[f],H=w.root,q=new Map,te=[];let ee=0;for(const[_e,ke]of Object.entries(H[g])){const He=H.changeTrees[_e];if(!He)continue;let Re=!1,ye=[],$e=(pe=He.parent)==null?void 0:pe[f];if(He===w)Re=!0;else for(;$e!==void 0;){if(ye.push($e),$e.ref===d){Re=!0;break}$e=(de=$e.parent)==null?void 0:de[f]}Re&&(te.push(He.refId),ee+=Object.keys(ke).length,q.set(He,ye.reverse()))}y+=`---
`,y+=`root refId: ${w.refId}
`,y+=`Total instances: ${te.length} (refIds: ${te.join(", ")})
`,y+=`Total changes: ${ee}
`,y+=`---
`;const le=new WeakSet;for(const[_e,ke]of q.entries()){ke.forEach((It,Ht)=>{le.has(It)||(y+=`${Ve(Ht)}${It.ref.constructor.name} (refId: ${It.refId})
`,le.add(It))});const He=_e.indexedOperations,Re=ke.length,ye=Ve(Re),$e=Re>0?`(${_e.parentIndex}) `:"";y+=`${ye}${$e}${_e.ref.constructor.name} (refId: ${_e.refId}) - changes: ${Object.keys(He).length}
`;for(const It in He){const Ht=He[It];y+=`${Ve(Re+1)}${t.OPERATION[Ht]}: ${It}
`}}return`${y}`}};Dn[qe]=Ke,Dn[Je]=Kn;let We=Dn;function ot(D,d,g,y){var w=arguments.length,H=w<3?d:y,q;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")H=Reflect.decorate(D,d,g,y);else for(var te=D.length-1;te>=0;te--)(q=D[te])&&(H=(w<3?q(H):w>3?q(d,g,H):q(d,g))||H);return w>3&&H&&Object.defineProperty(d,g,H),H}typeof SuppressedError=="function"&&SuppressedError;class et{constructor(d){this.types=d,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Te(),this.allFilteredChanges=Te(),this.changes=Te(),this.filteredChanges=Te()}getNextUniqueId(){return this.nextUniqueId++}add(d){d.refId===void 0&&(d.refId=this.getNextUniqueId());const g=this.changeTrees[d.refId]===void 0;g&&(this.changeTrees[d.refId]=d);const y=this.refCount[d.refId];if(y===0){const w=d.allChanges.operations;let H=w.length;for(;H--;)d.indexedOperations[w[H]]=t.OPERATION.ADD,ce(d.changes,H)}return this.refCount[d.refId]=(y||0)+1,g}remove(d){const g=this.refCount[d.refId]-1;return g<=0?(d.root=void 0,delete this.changeTrees[d.refId],this.removeChangeFromChangeSet("allChanges",d),this.removeChangeFromChangeSet("changes",d),d.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",d),this.removeChangeFromChangeSet("filteredChanges",d)),this.refCount[d.refId]=0,d.forEachChild((y,w)=>{y.removeParent(d.ref)&&(y.parentChain===void 0||y.parentChain&&this.refCount[y.refId]>0?this.remove(y):y.parentChain&&this.moveNextToParent(y))})):(this.refCount[d.refId]=g,this.recursivelyMoveNextToParent(d)),g}recursivelyMoveNextToParent(d){this.moveNextToParent(d),d.forEachChild((g,y)=>this.recursivelyMoveNextToParent(g))}moveNextToParent(d){d.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",d),this.moveNextToParentInChangeTreeList("allFilteredChanges",d)):(this.moveNextToParentInChangeTreeList("changes",d),this.moveNextToParentInChangeTreeList("allChanges",d))}moveNextToParentInChangeTreeList(d,g){var le;const y=this[d],w=g[d].queueRootNode;if(!w)return;const H=g.parent;if(!H||!H[f])return;const q=(le=H[f][d])==null?void 0:le.queueRootNode;if(!q||q===w)return;const te=q.position;w.position>te||(w.prev?w.prev.next=w.next:y.next=w.next,w.next?w.next.prev=w.prev:y.tail=w.prev,w.prev=q,w.next=q.next,q.next?q.next.prev=w:y.tail=w,q.next=w,this.updatePositionsAfterMove(y,w,te+1))}enqueueChangeTree(d,g,y=d[g].queueRootNode){y||(d[g].queueRootNode=this.addToChangeTreeList(this[g],d))}addToChangeTreeList(d,g){const y={changeTree:g,next:void 0,prev:void 0,position:d.tail?d.tail.position+1:0};return d.next?(y.prev=d.tail,d.tail.next=y,d.tail=y):(d.next=y,d.tail=y),y}updatePositionsAfterRemoval(d,g){let y=d.next,w=0;for(;y;)w>=g&&(y.position=w),y=y.next,w++}updatePositionsAfterMove(d,g,y){let w=d.next,H=0;for(;w;)w.position=H,w=w.next,H++}removeChangeFromChangeSet(d,g){const y=this[d],w=g[d].queueRootNode;if(w&&w.changeTree===g){const H=w.position;return w.prev?w.prev.next=w.next:y.next=w.next,w.next?w.next.prev=w.prev:y.tail=w.prev,this.updatePositionsAfterRemoval(y,H),g[d].queueRootNode=void 0,!0}return!1}}const _i=class _i{constructor(d){this.sharedBuffer=Buffer.allocUnsafe(_i.BUFFER_SIZE),this.context=Ee.cache(d.constructor),this.root=new et(this.context),this.setState(d)}setState(d){this.state=d,this.state[f].setRoot(this.root)}encode(d={offset:0},g,y=this.sharedBuffer,w="changes",H=w==="allChanges",q=d.offset){const te=g!==void 0,ee=this.state[f];let le=this.root[w];for(;le=le.next;){const pe=le.changeTree;if(te){if(!g.isChangeTreeVisible(pe)){g.invisible.add(pe);continue}g.invisible.delete(pe)}const de=pe[w],_e=pe.ref,ke=de.operations.length;if(ke===0)continue;const He=_e.constructor,Re=He[o],ye=He[c],$e=He[Symbol.metadata];(te||d.offset>q||pe!==ee)&&(y[d.offset++]=255,ve.number(y,pe.refId,d));for(let It=0;It<ke;It++){const Ht=de.operations[It];if(Ht<0){y[d.offset++]=Math.abs(Ht)&255;continue}const Ln=H?t.OPERATION.ADD:pe.indexedOperations[Ht];Ht===void 0||Ln===void 0||ye&&!ye(_e,Ht,g)||Re(this,y,pe,Ht,Ln,d,H,te,$e)}}if(d.offset>y.byteLength){const pe=Math.ceil(d.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(pe/1024)} * 1024; // ${Math.round(pe/1024)} KB
`),y=Buffer.alloc(pe,y),y===this.sharedBuffer&&(this.sharedBuffer=y),this.encode({offset:q},g,y,w,H)}else return y.subarray(0,d.offset)}encodeAll(d={offset:0},g=this.sharedBuffer){return this.encode(d,void 0,g,"allChanges",!0)}encodeAllView(d,g,y,w=this.sharedBuffer){const H=y.offset;return this.encode(y,d,w,"allFilteredChanges",!0,H),Buffer.concat([w.subarray(0,g),w.subarray(H,y.offset)])}encodeView(d,g,y,w=this.sharedBuffer){const H=y.offset;for(const[q,te]of d.changes){const ee=this.root.changeTrees[q];if(ee===void 0){d.changes.delete(q);continue}const le=Object.keys(te);if(le.length===0)continue;const de=ee.ref.constructor,_e=de[o],ke=de[Symbol.metadata];w[y.offset++]=255,ve.number(w,ee.refId,y);for(let He=0,Re=le.length;He<Re;He++){const ye=Number(le[He]),It=ee.ref[l](ye)!==void 0&&te[ye]||t.OPERATION.DELETE;_e(this,w,ee,ye,It,y,!1,!0,ke)}}return d.changes.clear(),this.encode(y,d,w,"filteredChanges",!1,H),Buffer.concat([w.subarray(0,g),w.subarray(H,y.offset)])}discardChanges(){let d=this.root.changes.next;for(;d;)d.changeTree.endEncode("changes"),d=d.next;for(this.root.changes=Te(),d=this.root.filteredChanges.next;d;)d.changeTree.endEncode("filteredChanges"),d=d.next;this.root.filteredChanges=Te()}tryEncodeTypeId(d,g,y,w){const H=this.context.getTypeId(g),q=this.context.getTypeId(y);if(q===void 0){console.warn(`@colyseus/schema WARNING: Class "${y.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}H!==q&&(d[w.offset++]=213,ve.number(d,q,w))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};_i.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let bt=_i;function Kt(D,d){if(d===-1||d>=D.length)return!1;const g=D.length-1;for(let y=d;y<g;y++)D[y]=D[y+1];return D.length=g,!0}class Yt extends Error{constructor(d){super(d),this.name="DecodingWarning"}}class Ot{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(d,g,y=!0){this.refs.set(d,g),this.refIds.set(g,d),y&&(this.refCount[d]=(this.refCount[d]||0)+1),this.deletedRefs.has(d)&&this.deletedRefs.delete(d)}removeRef(d){const g=this.refCount[d];if(g===void 0){try{throw new Yt("trying to remove refId that doesn't exist: "+d)}catch(y){console.warn(y)}return}if(g===0){try{const y=this.refs.get(d);throw new Yt(`trying to remove refId '${d}' with 0 refCount (${y.constructor.name}: ${JSON.stringify(y)})`)}catch(y){console.warn(y)}return}(this.refCount[d]=g-1)<=0&&this.deletedRefs.add(d)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(d=>{if(this.refCount[d]>0)return;const g=this.refs.get(d);if(g.constructor[Symbol.metadata]!==void 0){const y=g.constructor[Symbol.metadata];for(const w in y){const H=y[w].name,q=typeof g[H]=="object"&&this.refIds.get(g[H]);q&&!this.deletedRefs.has(q)&&this.removeRef(q)}}else typeof g[u]=="function"&&Array.from(g.values()).forEach(y=>{const w=this.refIds.get(y);this.deletedRefs.has(w)||this.removeRef(w)});this.refs.delete(d),delete this.refCount[d],delete this.callbacks[d]}),this.deletedRefs.clear()}addCallback(d,g,y){if(d===void 0){const w=typeof g=="number"?t.OPERATION[g]:g;throw new Error(`Can't addCallback on '${w}' (refId is undefined)`)}return this.callbacks[d]||(this.callbacks[d]={}),this.callbacks[d][g]||(this.callbacks[d][g]=[]),this.callbacks[d][g].push(y),()=>this.removeCallback(d,g,y)}removeCallback(d,g,y){var H,q,te;const w=(te=(q=(H=this.callbacks)==null?void 0:H[d])==null?void 0:q[g])==null?void 0:te.indexOf(y);w!==void 0&&w!==-1&&Kt(this.callbacks[d][g],w)}}class sn{constructor(d,g){this.currentRefId=0,this.setState(d),this.context=g||new Ee(d.constructor)}setState(d){this.state=d,this.root=new Ot,this.root.addRef(0,d)}decode(d,g={offset:0},y=this.state){var ee,le,pe;const w=[],H=this.root,q=d.byteLength;let te=y.constructor[a];for(this.currentRefId=0;g.offset<q;){if(d[g.offset]==255){g.offset++,(ee=y[m])==null||ee.call(y);const _e=Se.number(d,g),ke=H.refs.get(_e);ke?(y=ke,te=y.constructor[a],this.currentRefId=_e):(console.error(`"refId" not found: ${_e}`,{previousRef:y,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(d,g,q));continue}if(te(this,d,g,y,w)===Nt){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(d,g,q);continue}}return(le=y[m])==null||le.call(y),(pe=this.triggerChanges)==null||pe.call(this,w),H.garbageCollectDeletedRefs(),w}skipCurrentStructure(d,g,y){const w={offset:g.offset};for(;g.offset<y&&!(d[g.offset]===255&&(w.offset=g.offset+1,this.root.refs.has(Se.number(d,w))));)g.offset++}getInstanceType(d,g,y){let w;if(d[g.offset]===213){g.offset++;const H=Se.number(d,g);w=this.context.get(H)}return w||y}createInstanceOfType(d){return new d}removeChildRefs(d,g){const y=typeof d[u]!="string",w=this.root.refIds.get(d);d.forEach((H,q)=>{g.push({ref:d,refId:w,op:t.OPERATION.DELETE,field:q,value:void 0,previousValue:H}),y&&this.root.removeRef(this.root.refIds.get(H))})}}class ze extends We{}ot([Y("string")],ze.prototype,"name",void 0),ot([Y("string")],ze.prototype,"type",void 0),ot([Y("number")],ze.prototype,"referencedType",void 0);class on extends We{constructor(){super(...arguments),this.fields=new Pn}}ot([Y("number")],on.prototype,"id",void 0),ot([Y("number")],on.prototype,"extendsId",void 0),ot([Y([ze])],on.prototype,"fields",void 0);class pt extends We{constructor(){super(...arguments),this.types=new Pn}static encode(d,g={offset:0}){const y=d.context,w=new pt,H=new bt(w),q=y.schemas.get(d.state.constructor);q>0&&(w.rootType=q);const te=new Set,ee={},le=de=>{if(de.extendsId===void 0||te.has(de.extendsId)){te.add(de.id),w.types.push(de);const _e=ee[de.id];_e!==void 0&&(delete ee[de.id],_e.forEach(ke=>le(ke)))}else ee[de.extendsId]===void 0&&(ee[de.extendsId]=[]),ee[de.extendsId].push(de)};y.schemas.forEach((de,_e)=>{const ke=new on;ke.id=Number(de);const He=Object.getPrototypeOf(_e);He!==We&&(ke.extendsId=y.schemas.get(He));const Re=_e[Symbol.metadata];if(Re!==He[Symbol.metadata])for(const ye in Re){const $e=Number(ye),It=Re[$e].name;if(!Object.prototype.hasOwnProperty.call(Re,It))continue;const Ht=new ze;Ht.name=It;let Ln;const Li=Re[$e];if(typeof Li.type=="string")Ln=Li.type;else{let _o;We.is(Li.type)?(Ln="ref",_o=Li.type):(Ln=Object.keys(Li.type)[0],typeof Li.type[Ln]=="string"?Ln+=":"+Li.type[Ln]:_o=Li.type[Ln]),Ht.referencedType=_o?y.getTypeId(_o):-1}Ht.type=Ln,ke.fields.push(Ht)}le(ke)});for(const de in ee)ee[de].forEach(_e=>w.types.push(_e));return H.encodeAll(g).slice(0,g.offset)}static decode(d,g){const y=new pt;new sn(y).decode(d,g);const H=new Ee;y.types.forEach(ee=>{const le=H.get(ee.extendsId)??We,pe=class extends le{};Ee.register(pe),H.add(pe,ee.id)},{});const q=(ee,le,pe)=>{le.fields.forEach((de,_e)=>{const ke=pe+_e;if(de.referencedType!==void 0){let He=de.type,Re=H.get(de.referencedType);if(!Re){const ye=de.type.split(":");He=ye[0],Re=ye[1]}He==="ref"?je.addField(ee,ke,de.name,Re):je.addField(ee,ke,de.name,{[He]:Re})}else je.addField(ee,ke,de.name,de.type)})};y.types.forEach(ee=>{const le=H.get(ee.id),pe=je.initialize(le),de=[];let _e=ee;do de.push(_e),_e=y.types.find(He=>He.id===_e.extendsId);while(_e);let ke=0;de.reverse().forEach(He=>{q(pe,He,ke),ke+=He.fields.length})});const te=new(H.get(y.rootType||0));return new sn(te,H)}}ot([Y([on])],pt.prototype,"types",void 0),ot([Y("number")],pt.prototype,"rootType",void 0);function Wn(D){const d=D.root,g=d.callbacks,y=new WeakMap;let w;D.triggerChanges=function(te){var le;const ee=new Set;for(let pe=0,de=te.length;pe<de;pe++){const _e=te[pe],ke=_e.refId,He=_e.ref,Re=g[ke];if(Re){if((_e.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&_e.previousValue instanceof We){const ye=(le=g[d.refIds.get(_e.previousValue)])==null?void 0:le[t.OPERATION.DELETE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e]()}if(He instanceof We){if(!ee.has(ke)){const ye=Re==null?void 0:Re[t.OPERATION.REPLACE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e]()}if(Re.hasOwnProperty(_e.field)){const ye=Re[_e.field];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](_e.value,_e.previousValue)}}else{if((_e.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(_e.previousValue!==void 0){const ye=Re[t.OPERATION.DELETE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](_e.previousValue,_e.dynamicIndex??_e.field)}if((_e.op&t.OPERATION.ADD)===t.OPERATION.ADD){const ye=Re[t.OPERATION.ADD];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](_e.value,_e.dynamicIndex??_e.field)}}else if((_e.op&t.OPERATION.ADD)===t.OPERATION.ADD&&_e.previousValue!==_e.value){const ye=Re[t.OPERATION.ADD];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](_e.value,_e.dynamicIndex??_e.field)}if(_e.value!==_e.previousValue&&(_e.value!==void 0||_e.previousValue!==void 0)){const ye=Re[t.OPERATION.REPLACE];for(let $e=(ye==null?void 0:ye.length)-1;$e>=0;$e--)ye[$e](_e.value,_e.dynamicIndex??_e.field)}}ee.add(ke)}}};function H(te,ee){var de;let le=((de=ee.instance)==null?void 0:de.constructor[Symbol.metadata])||te,pe=ee.instance&&typeof ee.instance.forEach=="function"||te&&typeof te[Symbol.metadata]>"u";if(le&&!pe){const _e=function(ke,He,Re,ye){return ye&&ee.instance[He]!==void 0&&!y.has(w)&&Re(ee.instance[He],void 0),d.addCallback(d.refIds.get(ke),He,Re)};return new Proxy({listen:function(He,Re,ye=!0){if(ee.instance)return _e(ee.instance,He,Re,ye);{let $e=()=>{};return ee.onInstanceAvailable((It,Ht)=>{$e=_e(It,He,Re,ye&&Ht&&!y.has(w))}),()=>$e()}},onChange:function(He){return d.addCallback(d.refIds.get(ee.instance),t.OPERATION.REPLACE,He)},bindTo:function(He,Re){return Re||(Re=Object.keys(le).map(ye=>le[ye].name)),d.addCallback(d.refIds.get(ee.instance),t.OPERATION.REPLACE,()=>{Re.forEach(ye=>He[ye]=ee.instance[ye])})}},{get(ke,He){var ye;const Re=le[le[He]];if(Re){const $e=(ye=ee.instance)==null?void 0:ye[He],It=(Ht=>{const Ln=q(ee.instance).listen(He,(Li,_o)=>{Ht(Li,!1),Ln==null||Ln()},!1);d.refIds.get($e)!==void 0&&Ht($e,!0)});return H(Re.type,{instance:d.refIds.get($e)&&$e,parentInstance:ee.instance,onInstanceAvailable:It})}else return ke[He]},has(ke,He){return le[He]!==void 0},set(ke,He,Re){throw new Error("not allowed")},deleteProperty(ke,He){throw new Error("not allowed")}})}else{const _e=function(Re,ye,$e){return $e&&Re.forEach((It,Ht)=>ye(It,Ht)),d.addCallback(d.refIds.get(Re),t.OPERATION.ADD,(It,Ht)=>{y.set(ye,!0),w=ye,ye(It,Ht),y.delete(ye),w=void 0})},ke=function(Re,ye){return d.addCallback(d.refIds.get(Re),t.OPERATION.DELETE,ye)},He=function(Re,ye){return d.addCallback(d.refIds.get(Re),t.OPERATION.REPLACE,ye)};return new Proxy({onAdd:function(Re,ye=!0){if(ee.instance)return _e(ee.instance,Re,ye&&!y.has(w));if(ee.onInstanceAvailable){let $e=()=>{};return ee.onInstanceAvailable((It,Ht)=>{$e=_e(It,Re,ye&&Ht&&!y.has(w))}),()=>$e()}},onRemove:function(Re){if(ee.instance)return ke(ee.instance,Re);if(ee.onInstanceAvailable){let ye=()=>{};return ee.onInstanceAvailable($e=>{ye=ke($e,Re)}),()=>ye()}},onChange:function(Re){if(ee.instance)return He(ee.instance,Re);if(ee.onInstanceAvailable){let ye=()=>{};return ee.onInstanceAvailable($e=>{ye=He($e,Re)}),()=>ye()}}},{get(Re,ye){if(!Re[ye])throw new Error(`Can't access '${ye}' through callback proxy. access the instance directly.`);return Re[ye]},has(Re,ye){return Re[ye]!==void 0},set(Re,ye,$e){throw new Error("not allowed")},deleteProperty(Re,ye){throw new Error("not allowed")}})}}function q(te){return H(void 0,{instance:te})}return q}function si(D,d){D.triggerChanges=d}class Di{constructor(d=!1){this.iterable=d,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,d&&(this.items=[])}add(d,g=gi,y=!0){var le,pe;const w=d==null?void 0:d[f],H=w.parent;if(w){if(!H&&w.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${w.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",d),!1;const q=d.constructor[Symbol.metadata];this.visible.add(w),this.iterable&&y&&this.items.push(d),y&&H&&this.addParentOf(w,g);let te=this.changes.get(w.refId);te===void 0&&(te={},this.changes.set(w.refId,te));let ee=!1;if(w.forEachChild((de,_e)=>{q&&q[_e].tag!==void 0&&q[_e].tag!==g||this.add(de.ref,g,!1)&&(ee=!0)}),g!==gi){this.tags||(this.tags=new WeakMap);let de;this.tags.has(w)?de=this.tags.get(w):(de=new Set,this.tags.set(w,de)),de.add(g),(pe=(le=q==null?void 0:q[R])==null?void 0:le[g])==null||pe.forEach(_e=>{w.getChange(_e)!==t.OPERATION.DELETE&&(te[_e]=t.OPERATION.ADD)})}else if(!w.isNew||ee){const de=w.filteredChanges!==void 0?w.allFilteredChanges:w.allChanges,_e=this.invisible.has(w);for(let ke=0,He=de.operations.length;ke<He;ke++){const Re=de.operations[ke];if(Re===void 0)continue;const ye=w.indexedOperations[Re]??t.OPERATION.ADD,$e=q==null?void 0:q[Re].tag;ye!==t.OPERATION.DELETE&&(_e||$e===void 0||$e===g)&&(te[Re]=ye,ee=!0)}}return ee}addParentOf(d,g){var H;const y=d.parent[f],w=d.parentIndex;if(!this.visible.has(y)){this.visible.add(y);const q=(H=y.parent)==null?void 0:H[f];q&&q.filteredChanges!==void 0&&this.addParentOf(y,g)}if(y.getChange(w)!==t.OPERATION.DELETE){let q=this.changes.get(y.refId);q===void 0&&(q={},this.changes.set(y.refId,q)),this.tags||(this.tags=new WeakMap);let te;this.tags.has(y)?te=this.tags.get(y):(te=new Set,this.tags.set(y,te)),te.add(g),q[w]=t.OPERATION.ADD}}remove(d,g=gi,y=!1){var ee;const w=d[f];if(!w)return console.warn("StateView#remove(), invalid object:",d),this;this.visible.delete(w),this.iterable&&!y&&Kt(this.items,this.items.indexOf(d));const q=w.ref.constructor[Symbol.metadata];let te=this.changes.get(w.refId);if(te===void 0&&(te={},this.changes.set(w.refId,te)),g===gi){const le=w.parent;if(le&&!je.isValidInstance(le)&&w.isFiltered){const pe=le[f];let de=this.changes.get(pe.refId);de===void 0?(de={},this.changes.set(pe.refId,de)):de[w.parentIndex]===t.OPERATION.ADD&&this.changes.delete(w.refId),de[w.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(w)}else(ee=q==null?void 0:q[T])==null||ee.forEach(pe=>te[pe]=t.OPERATION.DELETE)}else q==null||q[R][g].forEach(le=>te[le]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(w)){const le=this.tags.get(w);g===void 0?this.tags.delete(w):(le.delete(g),le.size===0&&this.tags.delete(w))}return this}has(d){return this.visible.has(d[f])}hasTag(d,g=gi){var w;const y=(w=this.tags)==null?void 0:w.get(d[f]);return(y==null?void 0:y.has(g))??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let d=0,g=this.items.length;d<g;d++)this.remove(this.items[d],gi,!0);this.items.length=0}isChangeTreeVisible(d){let g=this.visible.has(d);return!g&&d.isVisibilitySharedWithParent&&this.visible.has(d.parent[f])&&(this.visible.add(d),g=!0),g}_recursiveDeleteVisibleChangeTree(d){d.forEachChild(g=>{this.visible.delete(g),this._recursiveDeleteVisibleChangeTree(g)})}}Me("map",{constructor:Gn}),Me("array",{constructor:Pn}),Me("set",{constructor:xr}),Me("collection",{constructor:Ji}),t.$changes=f,t.$childType=u,t.$decoder=a,t.$deleteByIndex=h,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Pn,t.ChangeTree=Pe,t.CollectionSchema=Ji,t.Decoder=sn,t.Encoder=bt,t.MapSchema=Gn,t.Metadata=je,t.Reflection=pt,t.ReflectionField=ze,t.ReflectionType=on,t.Schema=We,t.SetSchema=xr,t.StateView=Di,t.TypeContext=Ee,t.decode=Se,t.decodeKeyValueOperation=ls,t.decodeSchemaOperation=Kn,t.defineCustomTypes=De,t.defineTypes=re,t.deprecated=ne,t.dumpChanges=Fe,t.encode=ve,t.encodeArray=qt,t.encodeKeyValueOperation=Ge,t.encodeSchemaOperation=Ke,t.entity=Fc,t.getDecoderStateCallbacks=Wn,t.getRawChangesCallback=si,t.registerType=Me,t.schema=Ue,t.type=Y,t.view=O}))})(Go,Go.exports)),Go.exports}var t0;function MC(){if(t0)return zf;t0=1;var n=Ic,e=cd();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return zf.H3TransportTransport=t,zf}var kf={},Vf,n0;function EC(){return n0||(n0=1,Vf=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Vf}var i0;function bC(){if(i0)return kf;i0=1;var n=EC();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return kf.WebSocketTransport=t,kf}var r0;function wC(){if(r0)return Bf;r0=1;var n=MC(),e=bC();let t=class{constructor(r){switch(this.events={},r){case"h3":this.transport=new n.H3TransportTransport(this.events);break;default:this.transport=new e.WebSocketTransport(this.events);break}}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return Bf.Connection=t,Bf}var Hf={},s0;function Z_(){return s0||(s0=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Hf)),Hf}var fl={},o0;function j_(){if(o0)return fl;o0=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return fl.getSerializer=t,fl.registerSerializer=e,fl}var Gf={},a0;function J_(){if(a0)return Gf;a0=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return Gf.createNanoEvents=n,Gf}var ul={},l0;function TC(){if(l0)return ul;l0=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return ul.EventEmitter=n,ul.createSignal=e,ul}var hl={},c0;function Q_(){if(c0)return hl;c0=1;var n=cd();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return hl.SchemaSerializer=t,hl.getStateCallbacks=e,hl}var bh;try{bh=new TextDecoder}catch{}var Be,Ki,Z=0,Gt={},yt,Pr,ci=0,ki=0,mn,ur,Cn=[],xt,f0={useRecords:!1,mapsAsObjects:!0};class ex{}const fd=new ex;fd.name="MessagePack 0xC1";var Ir=!1,tx=2,AC;try{new Function("")}catch{tx=1/0}class Lr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Be)return ax(()=>(yc(),this?this.unpack(e,t):Lr.prototype.unpack.call(f0,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Ki=t.end||e.length,Z=t.start||0):(Z=0,Ki=t>-1?t:e.length),ki=0,Pr=null,mn=null,Be=e;try{xt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw Be=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Lr){if(Gt=this,this.structures)return yt=this.structures,dl(t);(!yt||yt.length>0)&&(yt=[])}else Gt=f0,(!yt||yt.length>0)&&(yt=[]);return dl(t)}unpackMultiple(e,t){let i,r=0;try{Ir=!0;let s=e.length,o=this?this.unpack(e,s):Nc.unpack(e,s);if(t){if(t(o,r,Z)===!1)return;for(;Z<s;)if(r=Z,t(dl(),r,Z)===!1)return}else{for(i=[o];Z<s;)r=Z,i.push(dl());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Ir=!1,yc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function dl(n){try{if(!Gt.trusted&&!Ir){let t=yt.sharedLength||0;t<yt.length&&(yt.length=t)}let e;if(Gt.randomAccessStructure&&Be[Z]<64&&Be[Z]>=32&&AC||(e=rn()),mn&&(Z=mn.postBundlePosition,mn=null),Ir&&(yt.restoreStructures=null),Z==Ki)yt&&yt.restoreStructures&&u0(),yt=null,Be=null,ur&&(ur=null);else{if(Z>Ki)throw new Error("Unexpected end of MessagePack data");if(!Ir){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw yt&&yt.restoreStructures&&u0(),yc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||Z>Ki)&&(e.incomplete=!0),e}}function u0(){for(let n in yt.restoreStructures)yt[n]=yt.restoreStructures[n];yt.restoreStructures=null}function rn(){let n=Be[Z++];if(n<160)if(n<128){if(n<64)return n;{let e=yt[n&63]||Gt.getStructures&&nx()[n&63];return e?(e.read||(e.read=ud(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Gt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=rx();i==="__proto__"&&(i="__proto_"),e[i]=rn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(rn(),rn());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=rn();return Gt.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(ki>=Z)return Pr.slice(Z-ci,(Z+=e)-ci);if(ki==0&&Ki<140){let t=e<16?hd(e):ix(e);if(t!=null)return t}return wh(e)}else{let e;switch(n){case 192:return null;case 193:return mn?(e=rn(),e>0?mn[1].slice(mn.position1,mn.position1+=e):mn[0].slice(mn.position0,mn.position0-=e)):fd;case 194:return!1;case 195:return!0;case 196:if(e=Be[Z++],e===void 0)throw new Error("Unexpected end of buffer");return Wf(e);case 197:return e=xt.getUint16(Z),Z+=2,Wf(e);case 198:return e=xt.getUint32(Z),Z+=4,Wf(e);case 199:return Wr(Be[Z++]);case 200:return e=xt.getUint16(Z),Z+=2,Wr(e);case 201:return e=xt.getUint32(Z),Z+=4,Wr(e);case 202:if(e=xt.getFloat32(Z),Gt.useFloat32>2){let t=Lc[(Be[Z]&127)<<1|Be[Z+1]>>7];return Z+=4,(t*e+(e>0?.5:-.5)>>0)/t}return Z+=4,e;case 203:return e=xt.getFloat64(Z),Z+=8,e;case 204:return Be[Z++];case 205:return e=xt.getUint16(Z),Z+=2,e;case 206:return e=xt.getUint32(Z),Z+=4,e;case 207:return Gt.int64AsType==="number"?(e=xt.getUint32(Z)*4294967296,e+=xt.getUint32(Z+4)):Gt.int64AsType==="string"?e=xt.getBigUint64(Z).toString():Gt.int64AsType==="auto"?(e=xt.getBigUint64(Z),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigUint64(Z),Z+=8,e;case 208:return xt.getInt8(Z++);case 209:return e=xt.getInt16(Z),Z+=2,e;case 210:return e=xt.getInt32(Z),Z+=4,e;case 211:return Gt.int64AsType==="number"?(e=xt.getInt32(Z)*4294967296,e+=xt.getUint32(Z+4)):Gt.int64AsType==="string"?e=xt.getBigInt64(Z).toString():Gt.int64AsType==="auto"?(e=xt.getBigInt64(Z),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigInt64(Z),Z+=8,e;case 212:if(e=Be[Z++],e==114)return _0(Be[Z++]&63);{let t=Cn[e];if(t)return t.read?(Z++,t.read(rn())):t.noBuffer?(Z++,t()):t(Be.subarray(Z,++Z));throw new Error("Unknown extension "+e)}case 213:return e=Be[Z],e==114?(Z++,_0(Be[Z++]&63,Be[Z++])):Wr(2);case 214:return Wr(4);case 215:return Wr(8);case 216:return Wr(16);case 217:return e=Be[Z++],ki>=Z?Pr.slice(Z-ci,(Z+=e)-ci):CC(e);case 218:return e=xt.getUint16(Z),Z+=2,ki>=Z?Pr.slice(Z-ci,(Z+=e)-ci):PC(e);case 219:return e=xt.getUint32(Z),Z+=4,ki>=Z?Pr.slice(Z-ci,(Z+=e)-ci):IC(e);case 220:return e=xt.getUint16(Z),Z+=2,d0(e);case 221:return e=xt.getUint32(Z),Z+=4,d0(e);case 222:return e=xt.getUint16(Z),Z+=2,p0(e);case 223:return e=xt.getUint32(Z),Z+=4,p0(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const RC=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function ud(n,e){function t(){if(t.count++>tx){let r=n.read=new Function("r","return function(){return "+(Gt.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":RC.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(rn);return n.highByte===0&&(n.read=h0(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=rn()}return Gt.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?h0(e,t):t}const h0=(n,e)=>function(){let t=Be[Z++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=yt[i]||nx()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=ud(r,n)),r.read()};function nx(){let n=ax(()=>(Be=null,Gt.getStructures()));return yt=Gt._mergeStructures(n,yt)}var wh=pa,CC=pa,PC=pa,IC=pa;let DC=!1;function pa(n){let e;if(n<16&&(e=hd(n)))return e;if(n>64&&bh)return bh.decode(Be.subarray(Z,Z+=n));const t=Z+n,i=[];for(e="";Z<t;){const r=Be[Z++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=Be[Z++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=Be[Z++]&63,o=Be[Z++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=Be[Z++]&63,o=Be[Z++]&63,a=Be[Z++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=pn.apply(String,i),i.length=0)}return i.length>0&&(e+=pn.apply(String,i)),e}function d0(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=rn();return Gt.freezeData?Object.freeze(e):e}function p0(n){if(Gt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=rx();i==="__proto__"&&(i="__proto_"),e[i]=rn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(rn(),rn());return e}}var pn=String.fromCharCode;function ix(n){let e=Z,t=new Array(n);for(let i=0;i<n;i++){const r=Be[Z++];if((r&128)>0){Z=e;return}t[i]=r}return pn.apply(String,t)}function hd(n){if(n<4)if(n<2){if(n===0)return"";{let e=Be[Z++];if((e&128)>1){Z-=1;return}return pn(e)}}else{let e=Be[Z++],t=Be[Z++];if((e&128)>0||(t&128)>0){Z-=2;return}if(n<3)return pn(e,t);let i=Be[Z++];if((i&128)>0){Z-=3;return}return pn(e,t,i)}else{let e=Be[Z++],t=Be[Z++],i=Be[Z++],r=Be[Z++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){Z-=4;return}if(n<6){if(n===4)return pn(e,t,i,r);{let s=Be[Z++];if((s&128)>0){Z-=5;return}return pn(e,t,i,r,s)}}else if(n<8){let s=Be[Z++],o=Be[Z++];if((s&128)>0||(o&128)>0){Z-=6;return}if(n<7)return pn(e,t,i,r,s,o);let a=Be[Z++];if((a&128)>0){Z-=7;return}return pn(e,t,i,r,s,o,a)}else{let s=Be[Z++],o=Be[Z++],a=Be[Z++],c=Be[Z++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){Z-=8;return}if(n<10){if(n===8)return pn(e,t,i,r,s,o,a,c);{let l=Be[Z++];if((l&128)>0){Z-=9;return}return pn(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=Be[Z++],h=Be[Z++];if((l&128)>0||(h&128)>0){Z-=10;return}if(n<11)return pn(e,t,i,r,s,o,a,c,l,h);let f=Be[Z++];if((f&128)>0){Z-=11;return}return pn(e,t,i,r,s,o,a,c,l,h,f)}else{let l=Be[Z++],h=Be[Z++],f=Be[Z++],u=Be[Z++];if((l&128)>0||(h&128)>0||(f&128)>0||(u&128)>0){Z-=12;return}if(n<14){if(n===12)return pn(e,t,i,r,s,o,a,c,l,h,f,u);{let p=Be[Z++];if((p&128)>0){Z-=13;return}return pn(e,t,i,r,s,o,a,c,l,h,f,u,p)}}else{let p=Be[Z++],m=Be[Z++];if((p&128)>0||(m&128)>0){Z-=14;return}if(n<15)return pn(e,t,i,r,s,o,a,c,l,h,f,u,p,m);let v=Be[Z++];if((v&128)>0){Z-=15;return}return pn(e,t,i,r,s,o,a,c,l,h,f,u,p,m,v)}}}}}function m0(){let n=Be[Z++],e;if(n<192)e=n-160;else switch(n){case 217:e=Be[Z++];break;case 218:e=xt.getUint16(Z),Z+=2;break;case 219:e=xt.getUint32(Z),Z+=4;break;default:throw new Error("Expected string")}return pa(e)}function Wf(n){return Gt.copyBuffers?Uint8Array.prototype.slice.call(Be,Z,Z+=n):Be.subarray(Z,Z+=n)}function Wr(n){let e=Be[Z++];if(Cn[e]){let t;return Cn[e](Be.subarray(Z,t=Z+=n),i=>{Z=i;try{return rn()}finally{Z=t}})}else throw new Error("Unknown extension type "+e)}var g0=new Array(4096);function rx(){let n=Be[Z++];if(n>=160&&n<192){if(n=n-160,ki>=Z)return Pr.slice(Z-ci,(Z+=n)-ci);if(!(ki==0&&Ki<180))return wh(n)}else return Z--,sx(rn());let e=(n<<5^(n>1?xt.getUint16(Z):n>0?Be[Z]:0))&4095,t=g0[e],i=Z,r=Z+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=xt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=Be[i++],s!=t[o++]){i=1879048192;break}if(i===r)return Z=i,t.string;r-=3,i=Z}for(t=[],g0[e]=t,t.bytes=n;i<r;)s=xt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=Be[i++],t.push(s);let a=n<16?hd(n):ix(n);return a!=null?t.string=a:t.string=wh(n)}function sx(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Gt.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const _0=(n,e)=>{let t=rn().map(sx),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=yt[n];return r&&(r.isShared||Ir)&&((yt.restoreStructures||(yt.restoreStructures=[]))[n]=r),yt[n]=t,t.read=ud(t,i),t.read()};Cn[0]=()=>{};Cn[0].noBuffer=!0;Cn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let LC={Error,TypeError,ReferenceError};Cn[101]=()=>{let n=rn();return(LC[n[0]]||Error)(n[1],{cause:n[2]})};Cn[105]=n=>{if(Gt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(Z-4);ur||(ur=new Map);let t=Be[Z],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};ur.set(e,r);let s=rn();return r.used?Object.assign(i,s):(r.target=s,s)};Cn[112]=n=>{if(Gt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(Z-4),t=ur.get(e);return t.used=!0,t.target};Cn[115]=()=>new Set(rn());const ox=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let NC=typeof globalThis=="object"?globalThis:window;Cn[116]=n=>{let e=n[0],t=ox[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new NC[t](Uint8Array.prototype.slice.call(n,1).buffer)};Cn[120]=()=>{let n=rn();return new RegExp(n[0],n[1])};const OC=[];Cn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=Z;return Z+=e-n.length,mn=OC,mn=[m0(),m0()],mn.position0=0,mn.position1=0,mn.postBundlePosition=Z,Z=t,rn()};Cn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function ax(n){let e=Ki,t=Z,i=ci,r=ki,s=Pr,o=ur,a=mn,c=new Uint8Array(Be.slice(0,Ki)),l=yt,h=yt.slice(0,yt.length),f=Gt,u=Ir,p=n();return Ki=e,Z=t,ci=i,ki=r,Pr=s,ur=o,mn=a,Be=c,Ir=u,yt=l,yt.splice(0,yt.length,...h),Gt=f,xt=new DataView(Be.buffer,Be.byteOffset,Be.byteLength),p}function yc(){Be=null,ur=null,yt=null}function UC(n){n.unpack?Cn[n.type]=n.unpack:Cn[n.type]=n}const Lc=new Array(147);for(let n=0;n<256;n++)Lc[n]=+("1e"+Math.floor(45.15-n*.30103));const FC=Lr;var Nc=new Lr({useRecords:!1});const BC=Nc.unpack,zC=Nc.unpackMultiple,kC=Nc.unpack,lx={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let cx=new Float32Array(1),x0=new Uint8Array(cx.buffer,0,4);function VC(n){cx[0]=n;let e=Lc[(x0[3]&127)<<1|x0[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let Rl;try{Rl=new TextEncoder}catch{}let Sc,dd;const Oc=typeof Buffer<"u",pl=Oc?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,fx=Oc?Buffer:Uint8Array,v0=Oc?4294967296:2144337920;let ie,No,Vt,j=0,Un,jt=null,HC;const GC=21760,WC=/[\u0080-\uFFFF]/,Os=Symbol("record-id");class ma extends Lr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=fx.prototype.utf8Write?function(C,k){return ie.utf8Write(C,k,ie.byteLength-k)}:Rl&&Rl.encodeInto?function(C,k){return Rl.encodeInto(C,ie.subarray(k)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=h>32||f+h>64,p=h+64,m=h+f+64;if(m>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let v=[],_=0,x=0;this.pack=this.encode=function(C,k){if(ie||(ie=new pl(8192),Vt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,8192)),j=0),Un=ie.length-10,Un-j<2048?(ie=new pl(ie.length),Vt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,ie.length)),Un=ie.length-10,j=0):j=j+7&2147483640,t=j,k&px&&(j+=k&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof C!="string"?(jt=[],jt.size=1/0):jt=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let B=r.sharedLength||0;if(B>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let N=0;N<B;N++){let G=r[N];if(!G)continue;let W,J=r.transitions;for(let ae=0,me=G.length;ae<me;ae++){let Le=G[ae];W=J[Le],W||(W=J[Le]=Object.create(null)),J=W}J[Os]=N+64}this.lastNamedStructuresLength=B}c||(r.nextId=B+64)}i&&(i=!1);let P;try{a.randomAccessStructure&&C&&C.constructor&&C.constructor===Object?z(C):S(C);let B=jt;if(jt&&M0(t,S,0),s&&s.idsToInsert){let N=s.idsToInsert.sort((ae,me)=>ae.offset>me.offset?1:-1),G=N.length,W=-1;for(;B&&G>0;){let ae=N[--G].offset+t;ae<B.stringsPosition+t&&W===-1&&(W=0),ae>B.position+t?W>=0&&(W+=6):(W>=0&&(Vt.setUint32(B.position+t,Vt.getUint32(B.position+t)+W),W=-1),B=B.previous,G++)}W>=0&&B&&Vt.setUint32(B.position+t,Vt.getUint32(B.position+t)+W),j+=N.length*6,j>Un&&E(j),a.offset=j;let J=XC(ie.subarray(t,j),N);return s=null,J}return a.offset=j,k&hx?(ie.start=t,ie.end=j,ie):ie.subarray(t,j)}catch(B){throw P=B,B}finally{if(r&&(T(),i&&a.saveStructures)){let B=r.sharedLength||0,N=ie.subarray(t,j),G=YC(r,a);if(!P)return a.saveStructures(G,G.isCompatible)===!1?a.pack(C,k):(a.lastNamedStructuresLength=B,ie.length>1073741824&&(ie=null),N)}ie.length>1073741824&&(ie=null),k&dx&&(j=t)}};const T=()=>{x<10&&x++;let C=r.sharedLength||0;if(r.length>C&&!c&&(r.length=C),_>1e4)r.transitions=null,x=0,_=0,v.length>0&&(v=[]);else if(v.length>0&&!c){for(let k=0,P=v.length;k<P;k++)v[k][Os]=0;v=[]}},R=C=>{var k=C.length;k<16?ie[j++]=144|k:k<65536?(ie[j++]=220,ie[j++]=k>>8,ie[j++]=k&255):(ie[j++]=221,Vt.setUint32(j,k),j+=4);for(let P=0;P<k;P++)S(C[P])},S=C=>{j>Un&&(ie=E(j));var k=typeof C,P;if(k==="string"){let B=C.length;if(jt&&B>=4&&B<4096){if((jt.size+=B)>GC){let J,ae=(jt[0]?jt[0].length*3+jt[1].length:0)+10;j+ae>Un&&(ie=E(j+ae));let me;jt.position?(me=jt,ie[j]=200,j+=3,ie[j++]=98,J=j-t,j+=4,M0(t,S,0),Vt.setUint16(J+t-3,j-t-J)):(ie[j++]=214,ie[j++]=98,J=j-t,j+=4),jt=["",""],jt.previous=me,jt.size=0,jt.position=J}let W=WC.test(C);jt[W?0:1]+=C,ie[j++]=193,S(W?-B:B);return}let N;B<32?N=1:B<256?N=2:B<65536?N=3:N=5;let G=B*3;if(j+G>Un&&(ie=E(j+G)),B<64||!o){let W,J,ae,me=j+N;for(W=0;W<B;W++)J=C.charCodeAt(W),J<128?ie[me++]=J:J<2048?(ie[me++]=J>>6|192,ie[me++]=J&63|128):(J&64512)===55296&&((ae=C.charCodeAt(W+1))&64512)===56320?(J=65536+((J&1023)<<10)+(ae&1023),W++,ie[me++]=J>>18|240,ie[me++]=J>>12&63|128,ie[me++]=J>>6&63|128,ie[me++]=J&63|128):(ie[me++]=J>>12|224,ie[me++]=J>>6&63|128,ie[me++]=J&63|128);P=me-j-N}else P=o(C,j+N);P<32?ie[j++]=160|P:P<256?(N<2&&ie.copyWithin(j+2,j+1,j+1+P),ie[j++]=217,ie[j++]=P):P<65536?(N<3&&ie.copyWithin(j+3,j+2,j+2+P),ie[j++]=218,ie[j++]=P>>8,ie[j++]=P&255):(N<5&&ie.copyWithin(j+5,j+3,j+3+P),ie[j++]=219,Vt.setUint32(j,P),j+=4),j+=P}else if(k==="number")if(C>>>0===C)C<32||C<128&&this.useRecords===!1||C<64&&!this.randomAccessStructure?ie[j++]=C:C<256?(ie[j++]=204,ie[j++]=C):C<65536?(ie[j++]=205,ie[j++]=C>>8,ie[j++]=C&255):(ie[j++]=206,Vt.setUint32(j,C),j+=4);else if(C>>0===C)C>=-32?ie[j++]=256+C:C>=-128?(ie[j++]=208,ie[j++]=C+256):C>=-32768?(ie[j++]=209,Vt.setInt16(j,C),j+=2):(ie[j++]=210,Vt.setInt32(j,C),j+=4);else{let B;if((B=this.useFloat32)>0&&C<4294967296&&C>=-2147483648){ie[j++]=202,Vt.setFloat32(j,C);let N;if(B<4||(N=C*Lc[(ie[j]&127)<<1|ie[j+1]>>7])>>0===N){j+=4;return}else j--}ie[j++]=203,Vt.setFloat64(j,C),j+=8}else if(k==="object"||k==="function")if(!C)ie[j++]=192;else{if(s){let N=s.get(C);if(N){if(!N.id){let G=s.idsToInsert||(s.idsToInsert=[]);N.id=G.push(N)}ie[j++]=214,ie[j++]=112,Vt.setUint32(j,N.id),j+=4;return}else s.set(C,{offset:j-t})}let B=C.constructor;if(B===Object)M(C);else if(B===Array)R(C);else if(B===Map)if(this.mapAsEmptyObject)ie[j++]=128;else{P=C.size,P<16?ie[j++]=128|P:P<65536?(ie[j++]=222,ie[j++]=P>>8,ie[j++]=P&255):(ie[j++]=223,Vt.setUint32(j,P),j+=4);for(let[N,G]of C)S(N),S(G)}else{for(let N=0,G=Sc.length;N<G;N++){let W=dd[N];if(C instanceof W){let J=Sc[N];if(J.write){J.type&&(ie[j++]=212,ie[j++]=J.type,ie[j++]=0);let tt=J.write.call(this,C);tt===C?Array.isArray(C)?R(C):M(C):S(tt);return}let ae=ie,me=Vt,Le=j;ie=null;let Ne;try{Ne=J.pack.call(this,C,tt=>(ie=ae,ae=null,j+=tt,j>Un&&E(j),{target:ie,targetView:Vt,position:j-tt}),S)}finally{ae&&(ie=ae,Vt=me,j=Le,Un=ie.length-10)}Ne&&(Ne.length+j>Un&&E(Ne.length+j),j=$C(Ne,ie,j,J.type));return}}if(Array.isArray(C))R(C);else{if(C.toJSON){const N=C.toJSON();if(N!==C)return S(N)}if(k==="function")return S(this.writeFunction&&this.writeFunction(C));M(C)}}}else if(k==="boolean")ie[j++]=C?195:194;else if(k==="bigint"){if(C<BigInt(1)<<BigInt(63)&&C>=-(BigInt(1)<<BigInt(63)))ie[j++]=211,Vt.setBigInt64(j,C);else if(C<BigInt(1)<<BigInt(64)&&C>0)ie[j++]=207,Vt.setBigUint64(j,C);else if(this.largeBigIntToFloat)ie[j++]=203,Vt.setFloat64(j,Number(C));else{if(this.largeBigIntToString)return S(C.toString());if(this.useBigIntExtension&&C<BigInt(2)**BigInt(1023)&&C>-(BigInt(2)**BigInt(1023))){ie[j++]=199,j++,ie[j++]=66;let B=[],N;do{let G=C&BigInt(255);N=(G&BigInt(128))===(C<BigInt(0)?BigInt(128):BigInt(0)),B.push(G),C>>=BigInt(8)}while(!((C===BigInt(0)||C===BigInt(-1))&&N));ie[j-2]=B.length;for(let G=B.length;G>0;)ie[j++]=Number(B[--G]);return}else throw new RangeError(C+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}j+=8}else if(k==="undefined")this.encodeUndefinedAsNil?ie[j++]=192:(ie[j++]=212,ie[j++]=0,ie[j++]=0);else throw new Error("Unknown type: "+k)},I=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?C=>{let k;if(this.skipValues){k=[];for(let N in C)(typeof C.hasOwnProperty!="function"||C.hasOwnProperty(N))&&!this.skipValues.includes(C[N])&&k.push(N)}else k=Object.keys(C);let P=k.length;P<16?ie[j++]=128|P:P<65536?(ie[j++]=222,ie[j++]=P>>8,ie[j++]=P&255):(ie[j++]=223,Vt.setUint32(j,P),j+=4);let B;if(this.coercibleKeyAsNumber)for(let N=0;N<P;N++){B=k[N];let G=Number(B);S(isNaN(G)?B:G),S(C[B])}else for(let N=0;N<P;N++)S(B=k[N]),S(C[B])}:C=>{ie[j++]=222;let k=j-t;j+=2;let P=0;for(let B in C)(typeof C.hasOwnProperty!="function"||C.hasOwnProperty(B))&&(S(B),S(C[B]),P++);if(P>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ie[k+++t]=P>>8,ie[k+t]=P&255},A=this.useRecords===!1?I:e.progressiveRecords&&!u?C=>{let k,P=r.transitions||(r.transitions=Object.create(null)),B=j++-t,N;for(let G in C)if(typeof C.hasOwnProperty!="function"||C.hasOwnProperty(G)){if(k=P[G],k)P=k;else{let W=Object.keys(C),J=P;P=r.transitions;let ae=0;for(let me=0,Le=W.length;me<Le;me++){let Ne=W[me];k=P[Ne],k||(k=P[Ne]=Object.create(null),ae++),P=k}B+t+1==j?(j--,L(P,W,ae)):U(P,W,B,ae),N=!0,P=J[G]}S(C[G])}if(!N){let G=P[Os];G?ie[B+t]=G:U(P,Object.keys(C),B,0)}}:C=>{let k,P=r.transitions||(r.transitions=Object.create(null)),B=0;for(let G in C)(typeof C.hasOwnProperty!="function"||C.hasOwnProperty(G))&&(k=P[G],k||(k=P[G]=Object.create(null),B++),P=k);let N=P[Os];N?N>=96&&u?(ie[j++]=((N-=96)&31)+96,ie[j++]=N>>5):ie[j++]=N:L(P,P.__keys__||Object.keys(C),B);for(let G in C)(typeof C.hasOwnProperty!="function"||C.hasOwnProperty(G))&&S(C[G])},F=typeof this.useRecords=="function"&&this.useRecords,M=F?C=>{F(C)?A(C):I(C)}:A,E=C=>{let k;if(C>16777216){if(C-t>v0)throw new Error("Packed buffer would be larger than maximum buffer size");k=Math.min(v0,Math.round(Math.max((C-t)*(C>67108864?1.25:2),4194304)/4096)*4096)}else k=(Math.max(C-t<<2,ie.length-1)>>12)+1<<12;let P=new pl(k);return Vt=P.dataView||(P.dataView=new DataView(P.buffer,0,k)),C=Math.min(C,ie.length),ie.copy?ie.copy(P,0,t,C):P.set(ie.slice(t,C)),j-=t,t=0,Un=P.length-10,ie=P},L=(C,k,P)=>{let B=r.nextId;B||(B=64),B<p&&this.shouldShareStructure&&!this.shouldShareStructure(k)?(B=r.nextOwnId,B<m||(B=p),r.nextOwnId=B+1):(B>=m&&(B=p),r.nextId=B+1);let N=k.highByte=B>=96&&u?B-96>>5:-1;C[Os]=B,C.__keys__=k,r[B-64]=k,B<p?(k.isShared=!0,r.sharedLength=B-63,i=!0,N>=0?(ie[j++]=(B&31)+96,ie[j++]=N):ie[j++]=B):(N>=0?(ie[j++]=213,ie[j++]=114,ie[j++]=(B&31)+96,ie[j++]=N):(ie[j++]=212,ie[j++]=114,ie[j++]=B),P&&(_+=x*P),v.length>=f&&(v.shift()[Os]=0),v.push(C),S(k))},U=(C,k,P,B)=>{let N=ie,G=j,W=Un,J=t;ie=No,j=0,t=0,ie||(No=ie=new pl(8192)),Un=ie.length-10,L(C,k,B),No=ie;let ae=j;if(ie=N,j=G,Un=W,t=J,ae>1){let me=j+ae-1;me>Un&&E(me);let Le=P+t;ie.copyWithin(Le+ae,Le+1,j),ie.set(No.slice(0,ae),Le),j=me}else ie[P+t]=No[0]},z=C=>{let k=HC(C,ie,t,j,r,E,(P,B,N)=>{if(N)return i=!0;j=B;let G=ie;return S(P),T(),G!==ie?{position:j,targetView:Vt,target:ie}:j},this);if(k===0)return M(C);j=k}}useBuffer(e){ie=e,ie.dataView||(ie.dataView=new DataView(ie.buffer,ie.byteOffset,ie.byteLength)),Vt=ie.dataView,j=0}set position(e){j=e}get position(){return j}set buffer(e){ie=e}get buffer(){return ie}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}dd=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,ex];Sc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?y0(n,16,e):S0(Oc?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==fx&&this.moreTypes?y0(n,ox.indexOf(t.name),e):S0(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function y0(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function S0(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function $C(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function XC(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function M0(n,e,t){if(jt.length>0){Vt.setUint32(jt.position+n,j+t-jt.position-n),jt.stringsPosition=j-n;let i=jt;jt=null,e(i[0]),e(i[1])}}function qC(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");dd.unshift(n.Class),Sc.unshift(n)}UC(n)}function YC(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let ux=new ma({useRecords:!1});const KC=ux.pack,ZC=ux.pack,jC=ma,{NEVER:JC,ALWAYS:QC,DECIMAL_ROUND:e2,DECIMAL_FIT:t2}=lx,hx=512,dx=1024,px=2048;function n2(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return i2(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return r2(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*i2(n,e){const t=new ma(e);for(const i of n)yield t.pack(i)}async function*r2(n,e){const t=new ma(e);for await(const i of n)yield t.pack(i)}function s2(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Lr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const o2=s2,a2=n2,l2=!1,c2=!0,f2=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:QC,C1:fd,DECIMAL_FIT:t2,DECIMAL_ROUND:e2,Decoder:FC,Encoder:jC,FLOAT32_OPTIONS:lx,NEVER:JC,Packr:ma,RESERVE_START_SPACE:px,RESET_BUFFER_MODE:dx,REUSE_BUFFER_MODE:hx,Unpackr:Lr,addExtension:qC,clearSource:yc,decode:kC,decodeIter:o2,encode:ZC,encodeIter:a2,isNativeAccelerationEnabled:DC,mapsAsObjects:c2,pack:KC,roundFloat32:VC,unpack:BC,unpackMultiple:zC,useRecords:l2},Symbol.toStringTag,{value:"Module"})),u2=ad(f2);var E0;function gx(){if(E0)return Ff;E0=1;var n=wC(),e=Z_(),t=j_(),i=J_(),r=TC(),s=cd(),o=Q_(),a=Dc(),c=u2;let l=class mx{constructor(f,u){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),u&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=u,this.serializer.state=new u),this.onError((p,m)=>{var v;return(v=console.warn)===null||v===void 0?void 0:v.call(console,`colyseus.js - onError => (${p}) ${m}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,u,p=this,m,v){const _=new n.Connection(m.protocol);if(p.connection=_,_.events.onmessage=mx.prototype.onMessageCallback.bind(p),_.events.onclose=function(x){var T;if(!p.hasJoined){(T=console.warn)===null||T===void 0||T.call(console,`Room connection was closed unexpectedly (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason);return}x.code===a.CloseCode.DEVMODE_RESTART&&u?u():(p.onLeave.invoke(x.code,x.reason),p.destroy())},_.events.onerror=function(x){var T;(T=console.warn)===null||T===void 0||T.call(console,`Room, onError (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason)},m.protocol==="h3"){const x=new URL(f);_.connect(x.origin,m)}else _.connect(f,v)}leave(f=!0){return new Promise(u=>{this.onLeave(p=>u(p)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(f,u){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),u)}send(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const m=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.send(m)}sendUnreliable(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const m=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.sendUnreliable(m)}sendBytes(f,u){const p={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),u.byteLength+p.offset>this.packr.buffer.byteLength){const m=new Uint8Array(p.offset+u.byteLength);m.set(this.packr.buffer),this.packr.useBuffer(m)}this.packr.buffer.set(u,p.offset),this.connection.send(this.packr.buffer.subarray(0,p.offset+u.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const u=new Uint8Array(f.data),p={offset:1},m=u[0];if(m===e.Protocol.JOIN_ROOM){const v=s.decode.utf8Read(u,p,u[p.offset++]);if(this.serializerId=s.decode.utf8Read(u,p,u[p.offset++]),!this.serializer){const _=t.getSerializer(this.serializerId);this.serializer=new _}u.byteLength>p.offset&&this.serializer.handshake&&this.serializer.handshake(u,p),this.reconnectionToken=`${this.roomId}:${v}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(m===e.Protocol.ERROR){const v=s.decode.number(u,p),_=s.decode.string(u,p);this.onError.invoke(v,_)}else if(m===e.Protocol.LEAVE_ROOM)this.leave();else if(m===e.Protocol.ROOM_STATE)this.serializer.setState(u,p),this.onStateChange.invoke(this.serializer.getState());else if(m===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(u,p),this.onStateChange.invoke(this.serializer.getState());else if(m===e.Protocol.ROOM_DATA){const v=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p),_=u.byteLength>p.offset?c.unpack(u,{start:p.offset}):void 0;this.dispatchMessage(v,_)}else if(m===e.Protocol.ROOM_DATA_BYTES){const v=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p);this.dispatchMessage(v,u.subarray(p.offset))}}dispatchMessage(f,u){var p;const m=this.getMessageHandlerKey(f);this.onMessageHandlers.events[m]?this.onMessageHandlers.emit(m,u):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,u):(p=console.warn)===null||p===void 0||p.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return Ff.Room=l,Ff}var $f={};function b0(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Ii(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),b0(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return b0(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var h2=Ii.bind(Ii,"GET"),d2=Ii.bind(Ii,"POST"),p2=Ii.bind(Ii,"PATCH"),m2=Ii.bind(Ii,"DELETE"),g2=Ii.bind(Ii,"PUT");const _2=Object.freeze(Object.defineProperty({__proto__:null,del:m2,get:h2,patch:p2,post:d2,put:g2,send:Ii},Symbol.toStringTag,{value:"Module"})),x2=ad(_2);var w0;function v2(){if(w0)return $f;w0=1;var n=Dc(),e=x2;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,u=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!u?l:new n.ServerError(f,u)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return $f.HTTP=r,$f}var Xf={},Oo={},T0;function y2(){if(T0)return Oo;T0=1;var n=Ic;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Oo.getItem=s,Oo.removeItem=r,Oo.setItem=i,Oo}var A0;function _x(){if(A0)return Xf;A0=1;var n=Ic,e=y2(),t=J_(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,u)=>{this.getUserData().then(p=>{this.emitChange(Object.assign(Object.assign({},p),{token:this.token}))}).catch(p=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(u),u})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((u,p)=>{const m=f.width||480,v=f.height||768,_=this.token?`?token=${this.token}`:"",x=`Login with ${h[0].toUpperCase()+h.substring(1)}`,T=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${_}`),R=screen.width/2-m/2,S=screen.height/2-v/2;n.__classPrivateFieldSet(this,s,window.open(T,x,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+m+", height="+v+", top="+S+", left="+R),"f");const I=F=>{F.data.user===void 0&&F.data.token===void 0||(clearInterval(A),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",I),F.data.error!==void 0?p(F.data.error):(u(F.data),this.emitChange(F.data)))},A=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),p("cancelled"),window.removeEventListener("message",I))},200);window.addEventListener("message",I)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,Xf.Auth=a,Xf}var qf={},R0;function S2(){if(R0)return qf;R0=1;function n(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return qf.discordURLBuilder=n,qf}var C0;function M2(){if(C0)return cl;C0=1;var n=Ic,e=Dc(),t=gx(),i=v2(),r=_x(),s=S2(),o;class a extends Error{constructor(f,u){super(f),this.code=u,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window==null?void 0:window.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,u){var p,m;if(typeof f=="string"){const v=f.startsWith("/")?new URL(f,c):new URL(f),_=v.protocol==="https:"||v.protocol==="wss:",x=Number(v.port||(_?443:80));this.settings={hostname:v.hostname,pathname:v.pathname,port:x,secure:_,searchParams:v.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,(u==null?void 0:u.headers)||{}),this.auth=new r.Auth(this.http),this.urlBuilder=u==null?void 0:u.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((m=(p=window==null?void 0:window.location)===null||p===void 0?void 0:p.hostname)===null||m===void 0)&&m.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("joinOrCreate",u,p,m)})}create(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("create",u,p,m)})}join(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("join",u,p,m)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},m){return yield this.createMatchMakeRequest("joinById",u,p,m)})}reconnect(f,u){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof u=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,m]=f.split(":");if(!p||!m)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:m},u)})}consumeSeatReservation(f,u,p){return n.__awaiter(this,void 0,void 0,function*(){const m=this.createRoom(f.room.name,u);m.roomId=f.room.roomId,m.sessionId=f.sessionId;const v={sessionId:m.sessionId};f.reconnectionToken&&(v.reconnectionToken=f.reconnectionToken);const _=p||m;return m.connect(this.buildEndpoint(f.room,v,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${m.roomId}'...`);let x=0,T=8;const R=()=>n.__awaiter(this,void 0,void 0,function*(){x++;try{yield this.consumeSeatReservation(f,u,_),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${m.roomId}'`)}catch{x<T?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${x} out of ${T})`),setTimeout(R,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(R,2e3)})),_,f,this.http.headers),new Promise((x,T)=>{const R=(S,I)=>T(new e.ServerError(S,I));_.onError.once(R),_.onJoin.once(()=>{_.onError.remove(R),x(_)})})})}createMatchMakeRequest(f,u){return n.__awaiter(this,arguments,void 0,function*(p,m,v={},_,x){const T=(yield this.http.post(`matchmake/${p}/${m}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(v)})).data;if(T.error)throw new a(T.error,T.code);return p==="reconnect"&&(T.reconnectionToken=v.reconnectionToken),yield this.consumeSeatReservation(T,_,x)})}createRoom(f,u){return new t.Room(f,u)}buildEndpoint(f,u={},p="ws"){let m=this.settings.searchParams||"";this.http.authToken&&(u._authToken=this.http.authToken);for(const x in u)u.hasOwnProperty(x)&&(m+=(m?"&":"")+`${x}=${u[x]}`);p==="h3"&&(p="http");let v=this.settings.secure?`${p}s://`:`${p}://`;f.publicAddress?v+=`${f.publicAddress}`:v+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const _=`${v}/${f.processId}/${f.roomId}?${m}`;return this.urlBuilder?this.urlBuilder(new URL(_)):_}getHttpEndpoint(f=""){const u=f.startsWith("/")?f:`/${f}`;let p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${u}`;return this.settings.searchParams&&(p+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",cl.Client=l,cl.MatchMakeError=a,cl}var Yf={},P0;function E2(){if(P0)return Yf;P0=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Yf.NoneSerializer=n,Yf}var I0;function b2(){return I0||(I0=1,(function(n){gC();var e=M2(),t=Z_(),i=gx(),r=_x(),s=Dc(),o=Q_(),a=E2(),c=j_();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(Of)),Of}var w2=b2();const T2="wss://cargo-skies.fly.dev",A2=1e4,D0=n=>Promise.race([n,new Promise((e,t)=>setTimeout(()=>t(new Error("Connection timed out — a firewall or network may be blocking the game server")),A2))]);async function R2(n,e){const t=new w2.Client(T2),i=e===null?await D0(t.create("race",{nickname:n,code:H1()})):await D0(t.join("race",{nickname:n,code:e.toUpperCase()}));return{room:i,sessionId:i.sessionId,isHost:()=>i.state.hostSessionId===i.sessionId,sendInput:r=>i.send("input",r),start:()=>i.send("start",{}),setOptions:r=>i.send("options",r)}}const xx="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",vx="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:320px;display:flex;flex-direction:column;gap:12px",Yo="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let nn=null,Th="";const C2=()=>["localhost","127.0.0.1"].includes(location.hostname)||!0;function P2(n,e){const t=C2(),i=t?"":"disabled";nn=document.createElement("div"),nn.style.cssText=xx;const r=document.createElement("div");if(r.style.cssText=vx,r.innerHTML=`
    <h1 style="margin:0;font-size:24px">Cargo Skies ✈️</h1>
    <input id="nick" placeholder="Your pilot name" maxlength="16"
           style="padding:10px;border-radius:8px;border:none;font-size:16px" />
    <div id="mp" style="display:flex;flex-direction:column;gap:12px">
      <button id="create" ${i} style="${Yo}">Start a race</button>
      <div style="display:flex;gap:8px">
        <input id="code" placeholder="Code" maxlength="4" ${i}
               style="padding:10px;border-radius:8px;border:none;font-size:16px;width:90px;text-transform:uppercase" />
        <button id="join" ${i} style="${Yo};background:#3d6ee8;flex:1">Join a race</button>
      </div>
    </div>
    ${t?"":'<div style="font-size:12px;opacity:.6;margin-top:-6px">Multiplayer races are coming soon ✨</div>'}
    <div style="height:1px;background:rgba(255,255,255,.15);margin:4px 0"></div>
    <button id="practice" style="${Yo};background:#2fbf71">Practice (solo) — no server needed</button>`,nn.appendChild(r),document.body.appendChild(nn),!t){const h=r.querySelector("#mp");h.style.opacity="0.35";for(const f of h.querySelectorAll("button, input"))f.style.cursor="not-allowed"}const s=r.querySelector("#nick"),o=r.querySelector("#code"),a=new URLSearchParams(location.search).get("r");a&&/^[A-Za-z0-9]{4}$/.test(a)&&(o.value=a.toUpperCase());const c=r.querySelector("#create"),l=r.querySelector("#join");c.addEventListener("click",()=>{Ah(!0,"create"),n(s.value||"Pilot",null)}),l.addEventListener("click",()=>{if(o.value.length!==4){alert("Enter the 4-letter room code from your friend's share link.");return}Ah(!0,"join"),n(s.value||"Pilot",o.value)}),r.querySelector("#practice").addEventListener("click",()=>{e()})}const I2="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer;color:#fff",L0=(n,e,t)=>`<div data-${n} style="display:flex;gap:6px">${e.map(i=>`<button data-v="${i}" style="${I2};background:${i===t?"#e84d3d":"rgba(255,255,255,.12)"}">${i}</button>`).join("")}</div>`;function D2(n,e,t,i){var f;nn||(nn=document.createElement("div"),nn.style.cssText=xx,document.body.appendChild(nn));const r=n.hostSessionId===e,s=[];n.players.forEach(u=>s.push(u.nickname));const o=s.length>=2,a=[n.code,s.join(","),n.legCount,n.difficulty,r].join("|");if(a===Th)return;Th=a;const c=`${location.origin}${location.pathname}?r=${n.code}`,l=`≈ ${n.legCount*2} min`,h=r?`
      <div style="font-size:13px;opacity:.8">Legs per contract (${l})</div>
      ${L0("legs",["2","3","4","5","6"],String(n.legCount))}
      <div style="font-size:13px;opacity:.8">Difficulty</div>
      ${L0("diff",["kids","normal","expert"],n.difficulty)}`:`<div style="opacity:.8;font-size:14px">Route: ${n.legCount} legs · ${n.difficulty} · ${l}</div>`;nn.innerHTML=`
    <div style="${vx}">
      <h2 style="margin:0">Room ${n.code}</h2>
      <div style="opacity:.8">Share: <a href="${c}" style="color:#8fb7ff">${c}</a></div>
      <div>${s.map(u=>`🛩️ ${u}`).join("<br>")}</div>
      ${h}
      ${r?o?`<button id="go" style="${Yo}">Start race</button>`:`<button id="go" disabled style="${Yo};opacity:.4;cursor:not-allowed">Start race</button>
               <div style="opacity:.75;font-size:13px">Waiting for a friend to join — share the link!</div>`:"<div style='opacity:.7'>Waiting for host…</div>"}
    </div>`,(f=nn.querySelector("#go"))==null||f.addEventListener("click",t);for(const u of nn.querySelectorAll("[data-legs] button"))u.addEventListener("click",()=>i({legCount:Number(u.dataset.v)}));for(const u of nn.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>i({difficulty:u.dataset.v??"normal"}))}function Ah(n,e="join"){const t=nn==null?void 0:nn.querySelector("#create"),i=nn==null?void 0:nn.querySelector("#join");!t||!i||(t.disabled=n,i.disabled=n,t.style.opacity=n?"0.6":"1",i.style.opacity=n?"0.6":"1",t.textContent=n&&e==="create"?"Starting…":"Start a race",i.textContent=n&&e==="join"?"Joining…":"Join a race")}function N0(){nn==null||nn.remove(),nn=null,Th=""}const L2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",N2="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:360px;display:flex;flex-direction:column;gap:14px",ml="padding:10px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 16px system-ui;cursor:pointer",Uo="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer";let Si=null;function O2(n,e){Si==null||Si.remove(),Si=document.createElement("div"),Si.style.cssText=L2;const t=document.createElement("div");t.style.cssText=N2;const i=Object.keys(Us).map(u=>`<button data-plane="${u}" title="${Us[u].blurb}" style="${Uo}">${Us[u].emoji}<br>${Us[u].name}</button>`).join("");t.innerHTML=`
    <h2 style="margin:0">Solo flight 🛩️</h2>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Your plane</div>
      <div data-planes style="display:flex;gap:6px">${i}</div>
      <div data-blurb style="font-size:12px;opacity:.7;margin-top:4px;min-height:14px"></div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Difficulty</div>
      <div data-diff style="display:flex;gap:6px">
        <button data-v="kids" style="${Uo}">Kids</button>
        <button data-v="normal" style="${Uo}">Normal</button>
        <button data-v="expert" style="${Uo}">Expert</button>
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Plane speed</div>
      <div data-speed style="display:flex;gap:6px">
        ${Object.keys(Hu).map(u=>`<button data-v="${u}" style="${Uo}">${Hu[u].name}</button>`).join("")}
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Legs per contract: <b data-legs-label>3</b></div>
      <input data-legs type="range" min="1" max="6" value="3" style="width:100%" />
    </div>
    <button data-contract style="${ml}">Start contract</button>
    <button data-trial style="${ml};background:#e8a53d">⏱ Timed trial (race your ghost)</button>
    <div style="display:flex;gap:8px">
      <button data-free style="${ml};background:#3d6ee8;flex:1">Free fly</button>
      <button data-passport style="${ml};background:#9a6dce;flex:1">📔 Passport</button>
    </div>`,Si.appendChild(t),document.body.appendChild(Si);let r="normal",s="seaplane",o="normal";const a=(u,p)=>{for(const m of t.querySelectorAll(`${u} button`))m.style.background=p(m)?"#e84d3d":"rgba(255,255,255,.12)",m.style.color="#fff"},c=()=>{a("[data-diff]",u=>u.dataset.v===r),a("[data-planes]",u=>u.dataset.plane===s),a("[data-speed]",u=>u.dataset.v===o),t.querySelector("[data-blurb]").textContent=Us[s].blurb};c();for(const u of t.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>{r=u.dataset.v,c()});for(const u of t.querySelectorAll("[data-planes] button"))u.addEventListener("click",()=>{s=u.dataset.plane,c()});for(const u of t.querySelectorAll("[data-speed] button"))u.addEventListener("click",()=>{o=u.dataset.v,c()});const l=t.querySelector("[data-legs]"),h=t.querySelector("[data-legs-label]");l.addEventListener("input",()=>{h.textContent=l.value});const f=u=>({mode:u,difficulty:r,legCount:Number(l.value),plane:s,speed:o});t.querySelector("[data-contract]").addEventListener("click",()=>n(f("contract"))),t.querySelector("[data-trial]").addEventListener("click",()=>n(f("trial"))),t.querySelector("[data-free]").addEventListener("click",()=>n(f("free"))),t.querySelector("[data-passport]").addEventListener("click",e)}function U2(){Si==null||Si.remove(),Si=null}const Cl=n=>{const e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(1).padStart(4,"0")}`},F2={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function B2(n){let e=null,t=0,i=0,r=0,s=0,o=[],a=0;const c=()=>(e==null?void 0:e.legs[t])??null,l=()=>{var f;const h=c();!h||!e||(i=0,s=0,n.hints.setTarget(h.countryId),n.hints.setFlags(Wu(0,e.difficulty)),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,Cc(((f=n.countries[h.countryId])==null?void 0:f.cca2)??"")))};return{currentLeg:c,startContract(h){e=q1(n.countries,n.landmarks,n.riddles,{seed:h.seed??Date.now()>>>0,legCount:h.legCount,difficulty:h.difficulty}),t=0,r=0,o=[],a=0,l()},stop(){e=null,n.hints.clear(),n.beacon.hide(),n.banner.hide()},isActive(){return e!==null},update(h,f){var v;const u=c();if(!e||!u)return;if(a>0){a-=f,a<=0&&l();return}i+=f,r+=f,n.banner.setClock(`⏱ ${Cl(r)}`);const p=Wu(i,e.difficulty);n.hints.setFlags(p),n.banner.setCompass(p.compass?(Cg(h.lat,h.lon,u.zone.lat,u.zone.lon)-h.headingDeg+360)%360:null);const m=Pg(h,u,s,f);if(s=m.dwellS,n.banner.setDwell(u.type==="refuel"&&m.inZone?s/Yh:null),u.type==="refuel"&&m.inZone?n.banner.setWarning("⛽ Refueling — hold steady!"):n.banner.setWarning(m.requirementBlocked?F2[u.type]??null:null),m.complete){o.push(i);const _=((v=n.countries[u.countryId])==null?void 0:v.name)??u.countryId;if(n.hints.clear(),n.beacon.hide(),t+1<e.legs.length)n.banner.toast(`✅ ${_}! Leg ${t+1} of ${e.legs.length} done`),t+=1,a=1.2;else{n.banner.hide();const x={contract:e,legTimesS:o,totalS:r};e=null,n.onContractComplete(x)}}}}}const O0=13606703,z2=16765471;function k2(n){let e=null,t={continent:!1,outline:!1};const i=new Set,r=()=>{var s;for(const o of i)(s=n.countryMaterials.get(o))==null||s.emissive.setHex(0);i.clear()};return{setTarget(s){r(),e=s},setFlags(s){!s.continent&&t.continent&&r(),t=s},update(s){if(!e)return;const o=n.continentOf.get(e);if(t.continent&&o){const c=.12+.08*Math.sin(s*2.5);for(const[l,h]of n.countryMaterials)n.continentOf.get(l)===o&&l!==e&&(h.emissive.setHex(O0),h.emissiveIntensity=c,i.add(l))}const a=n.countryMaterials.get(e);a&&(t.outline?(a.emissive.setHex(z2),a.emissiveIntensity=.4+.3*Math.sin(s*5),i.add(e)):t.continent&&(a.emissive.setHex(O0),a.emissiveIntensity=.12+.08*Math.sin(s*2.5),i.add(e)))},clear(){r(),e=null,t={continent:!1,compass:!1,outline:!1}}}}const V2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",H2="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:380px;display:flex;flex-direction:column;gap:12px",U0="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let Mi=null;function G2(n,e,t,i,r){Mi==null||Mi.remove(),Mi=document.createElement("div"),Mi.style.cssText=V2;const s=n.contract.legs.map((c,l)=>{const h=e[c.countryId],f=t.includes(c.countryId)?" 🆕":"";return`<tr>
        <td style="padding:3px 10px 3px 0;opacity:.7">${l+1}.</td>
        <td style="padding:3px 10px 3px 0">${Cc((h==null?void 0:h.cca2)??"")} ${(h==null?void 0:h.name)??c.countryId}${f}</td>
        <td style="padding:3px 0;text-align:right;font-variant-numeric:tabular-nums">${Cl(n.legTimesS[l]??0)}</td>
      </tr>`}).join(""),o=i!==null?n.totalS<=i?'<div style="color:#2fbf71;font-weight:700">🎉 New best time!</div>':`<div style="opacity:.8">Best: ${Cl(i)}</div>`:"",a=document.createElement("div");a.style.cssText=H2,a.innerHTML=`
    <h2 style="margin:0">🏆 Contract complete!</h2>
    <table style="border-collapse:collapse;font-size:15px">${s}</table>
    <div style="font-size:20px;font-weight:800">Total ${Cl(n.totalS)}</div>
    ${o}
    ${t.length>0?`<div style="opacity:.85">📔 ${t.length} new passport stamp${t.length>1?"s":""}!</div>`:""}
    <button data-again style="${U0}">New contract</button>
    <button data-menu style="${U0};background:#3d6ee8">Menu</button>`,Mi.appendChild(a),document.body.appendChild(Mi),a.querySelector("[data-again]").addEventListener("click",()=>{F0(),r.onNewContract()}),a.querySelector("[data-menu]").addEventListener("click",()=>{F0(),r.onMenu()})}function F0(){Mi==null||Mi.remove(),Mi=null}const yx="cargoSkies.passport.v1";function Sx(){try{return JSON.parse(localStorage.getItem(yx)??"{}")}catch{return{}}}function W2(n){const e=Sx(),t=[];for(const i of n)e[i]||t.push(i),e[i]=(e[i]??0)+1;return localStorage.setItem(yx,JSON.stringify(e)),t}const $2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:11";let ai=null;function X2(n,e){ai==null||ai.remove();const t=Sx(),i=Object.entries(t).map(([o,a])=>({meta:n[o],count:a})).filter(o=>o.meta!==void 0).sort((o,a)=>o.meta.name.localeCompare(a.meta.name)),r=Object.values(n).filter(o=>o.playable).length;ai=document.createElement("div"),ai.style.cssText=$2;const s=i.map(o=>`<div style="display:flex;gap:8px;align-items:center;padding:4px 8px;background:rgba(255,255,255,.06);border-radius:8px">
          <span style="font-size:22px">${Cc(o.meta.cca2)}</span>
          <span style="flex:1">${o.meta.name}</span>
          <span style="opacity:.6">×${o.count}</span>
        </div>`).join("");ai.innerHTML=`
    <div style="background:#141b3d;padding:28px 32px;border-radius:16px;width:420px;max-height:75vh;display:flex;flex-direction:column;gap:12px">
      <h2 style="margin:0">📔 Passport — ${i.length} / ${r} countries</h2>
      <div style="overflow-y:auto;display:flex;flex-direction:column;gap:6px">${s||"<div style='opacity:.7'>No stamps yet — complete a contract leg to earn your first!</div>"}</div>
      <button data-close style="padding:10px 16px;border:none;border-radius:10px;background:#3d6ee8;color:#fff;font:600 16px system-ui;cursor:pointer">Close</button>
    </div>`,document.body.appendChild(ai),ai.querySelector("[data-close]").addEventListener("click",()=>{ai==null||ai.remove(),ai=null})}const Rh=.1,Mx=(n,e,t)=>`cargoSkies.trial.v3.${n}.${e}.${t}`,q2=(n,e)=>n.charCodeAt(0)*7919+e*104729>>>0;function B0(n,e,t){try{const i=localStorage.getItem(Mx(n,e,t));return i?JSON.parse(i):null}catch{return null}}function Y2(n,e,t,i){localStorage.setItem(Mx(n,e,t),JSON.stringify(i))}const z0=n=>new $(n.x,n.y,n.z);function K2(n){const e=_c(16777215);e.traverse(i=>{i instanceof St&&i.material instanceof Or&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.35)}),e.visible=!1,n.add(e);let t=[];return{start(i){t=i,e.visible=t.length>0},stop(){t=[],e.visible=!1},update(i){if(t.length===0)return;const r=i/Rh,s=Math.min(t.length-1,Math.floor(r)),o=t[Math.min(t.length-1,s+1)],a=t[s],c=Math.min(1,r-s),l=a.lat+(o.lat-a.lat)*c,h=(o.lon-a.lon+540)%360-180,f=(a.lon+h*c+540)%360-180,u=a.altKm+(o.altKm-a.altKm)*c,p=z0($n(l,f,u)),m=Gu(l,f,a.headingDeg,5);e.position.copy(p),e.up.copy(p.clone().normalize()),e.lookAt(z0($n(m.lat,m.lon,u)))}}}const Z2=34,j2=.004;function J2(){const n=new gn,e=new js({color:dR,gradientMap:fa(),transparent:!0,opacity:.92});for(let t=0;t<Z2;t++){const i=new gn,r=3+Math.floor(Math.random()*3);for(let l=0;l<r;l++){const h=1.2+Math.random()*1.6,f=new St(new Xi(h,10,8),e);f.position.set((l-r/2)*1.6,(Math.random()-.5)*.6,(Math.random()-.5)*1.4),f.scale.y=.6,i.add(f)}const s=(Math.random()-.5)*140,o=Math.random()*360-180,a=260+Math.random()*160,c=$n(s,o,a);i.position.set(c.x,c.y,c.z),i.lookAt(0,0,0),n.add(i)}return{group:n,update(t){n.rotation.y+=j2*t}}}const Q2=12,eP=30,tP=.8,nP=1.2;function iP(n,e){const t=Math.max(0,n),i=Q2+e*tP,r=eP+e*nP;return t<=i?1:t>=r?0:1-(t-i)/(r-i)}const Ei=Math.PI/180,Wo=512,Pl=96,rP=5,sP=26,oP=.7,aP="#24365e",lP="rgba(255,255,255,0.85)";function cP(n){const e=document.createElement("canvas");e.width=Wo,e.height=Pl;const t=e.getContext("2d");if(!t)throw new Error("2d canvas unavailable");let i=56;const r=()=>{t.font=`bold ${i}px 'Trebuchet MS', Verdana, sans-serif`};for(r();t.measureText(n).width>Wo-24&&i>18;)i-=4,r();t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.lineJoin="round",t.strokeStyle=lP,t.strokeText(n,Wo/2,Pl/2),t.fillStyle=aP,t.fillText(n,Wo/2,Pl/2);const s=new Xo(e);return s.anisotropy=4,s}function fP(n,e,t,i){const r=Math.max(1.5,t*Math.cos(n*Ei)*(Pl/Wo)),s=new Xi(uR,12,4,(90+e-t/2)*Ei,t*Ei,(90-n-r/2)*Ei,r*Ei),o=new ui({map:i,transparent:!0,opacity:0,depthWrite:!1});return new St(s,o)}function uP(n){const e=new gn,t=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=B1(r.geometry),o=Math.min(sP,Math.max(rP,s.widthDeg*oP)),a=fP(s.lat,s.lon,o,cP(r.properties.name));a.visible=!1,e.add(a),t.push({mesh:a,widthDeg:o,direction:new $(Math.cos(s.lat*Ei)*Math.sin(s.lon*Ei),Math.sin(s.lat*Ei),Math.cos(s.lat*Ei)*Math.cos(s.lon*Ei))})}const i=new $;return{group:e,update(r){i.copy(r.position).normalize();for(const s of t){const o=Math.acos(ng.clamp(i.dot(s.direction),-1,1))/Ei,a=iP(o,s.widthDeg);s.mesh.visible=a>.02,s.mesh.material.opacity=a}}}}const Jn=1/60,hP=.25,dP=1/20;async function pP(){const n=document.getElementById("app");if(!n)throw new Error("#app root missing");const{world:e,countries:t,landmarks:i,riddles:r}=await SR(),s=U1(e),{scene:o,camera:a,renderer:c}=yR(n),l=xR(e);o.add(l.group);const h=uP(e);o.add(h.group);const f=J2();o.add(f.group);let u=_c();o.add(u);let p=Kh,m=wg;const v=(Ae,lt=15224125)=>{o.remove(u),u=_c(lt,Ae),o.add(u),p=Us[Ae].tuning,x=Gm(u,a)},_=AR();let x=Gm(u,a);const T=zR(document.body),R=kR(o),S=HR(o),I=KR(o),A=new $(0,.2,-2.2),F=.3,M=hC(document.body),E=mC(document.body),L=k2(l),U=JR({countries:t,banner:E,hints:L,beacon:S}),z=oC(o);let C=k1();const k=Ae=>{C=Ae},P=K2(o);let B=null,N=!1,G=[],W=0,J=0;const ae=()=>{O2(me,()=>{X2(t)})},me=Ae=>{if(U2(),B=Ae,v(Ae.plane),m=Hu[Ae.speed].worldSpeedScale,N=Ae.mode==="trial",P.stop(),G=[],W=0,J=0,Ae.mode==="contract")Le.startContract({difficulty:Ae.difficulty,legCount:Ae.legCount});else if(Ae.mode==="trial"){const lt=q2(Ae.difficulty,Ae.legCount),Ze=B0(Ae.difficulty,Ae.legCount,Ae.speed);Ze&&P.start(Ze.track),Le.startContract({difficulty:Ae.difficulty,legCount:Ae.legCount,seed:lt})}},Le=B2({countries:t,landmarks:i,riddles:r,banner:E,hints:L,beacon:S,onContractComplete:Ae=>{E.setClock(null);const lt=W2(Ae.contract.legs.map(Oe=>Oe.countryId));let Ze=null;if(N&&B){const Oe=B0(B.difficulty,B.legCount,B.speed);Ze=(Oe==null?void 0:Oe.timeS)??Ae.totalS,(!Oe||Ae.totalS<Oe.timeS)&&Y2(B.difficulty,B.legCount,B.speed,{timeS:Ae.totalS,track:G}),P.stop()}G2(Ae,t,lt,Ze,{onNewContract:()=>{B&&me(B)},onMenu:ae})}}),Ne=await new Promise(Ae=>{P2((lt,Ze)=>{R2(lt,Ze).then(Ae).catch(Oe=>{console.error("Connection failed",Oe),Ah(!1);const Mt=String((Oe==null?void 0:Oe.message)??Oe),Rt=/ECONNREFUSED|failed to connect|WebSocket|network|refused|timed out/i.test(Mt);alert(Rt?"Can't reach the game server — check your internet connection (some networks/firewalls block game connections) and try again.":Ze!==null?`No race found with code ${Ze.toUpperCase()}. Check the code and try again.`:"Couldn't start a race — see the console for details.")})},()=>Ae(null))}),tt=Ne?fC(document.body,Ae=>Ne.room.send("useItem",{targetSessionId:Ae}),()=>Ne.room.send("shoot",{})):null;if(Ne&&Ne.room.onMessage("shot",Ae=>{var Mt,Rt;const lt=Ne.room.state,Ze=(Mt=lt.players)==null?void 0:Mt.get(Ae.from),Oe=Ae.hit?(Rt=lt.players)==null?void 0:Rt.get(Ae.hit):void 0;Ze&&z.flashShot(new $().copy($n(Ze.lat,Ze.lon,Ze.altKm)),Oe?new $().copy($n(Oe.lat,Oe.lon,Oe.altKm)):null)}),Ne===null)N0(),ae();else{let Ae=!1,lt=!0;Ne.room.onStateChange(Ze=>{var Mt;const Oe=(Mt=Ze.players)==null?void 0:Mt.get(Ne.sessionId);if(Oe){if(!Ae){Ae=!0,Ze.code&&history.replaceState(null,"",`?r=${Ze.code}`);const Rt=Oe.colorIdx??0;u.traverse(Bt=>{Bt instanceof St&&Bt.material instanceof js&&Bt.material.color.getHex()===15224125&&Bt.material.color.setHex(gc[Rt%gc.length]??15224125)})}Ze.phase==="lobby"&&lt?D2(Ze,Ne.sessionId,()=>Ne.start(),Rt=>Ne.setOptions(Rt)):lt&&(N0(),lt=!1),R.sync(Ze,Ne.sessionId),M.update(Ze,Ne.sessionId,()=>Ne.start()),Qo(Oe.lat,Oe.lon,C.lat,C.lon)>p1&&k({lat:Oe.lat,lon:Oe.lon,altKm:Oe.altKm,headingDeg:Oe.headingDeg,pitchDeg:Oe.pitchDeg,rollDeg:Oe.rollDeg,barrelRollS:Oe.barrelRollS,loopS:Oe.loopS,speedKmh:Oe.speedKmh})}})}let he=0,we=0,ve=0,Qe=0,nt={throttle:0,turn:0,pitch:0};const it=new ly,Xt=()=>{const Ae=Ne?jR(Ne.room.state,Ne.sessionId,C):Le.isActive()&&Le.currentLeg()?Ig(C,Le.currentLeg()):null;Ae!==null&&(C={...C,speedKmh:Ae})};c.setAnimationLoop(()=>{var lt,Ze;for(it.update(),he+=Math.min(it.getDelta(),.25);he>=Jn;)nt=_.read(Jn),C=V1(C,nt,Jn,p,m),Xt(),Le.isActive()&&(Le.update(C,Jn),N&&(J+=Jn,W+=Jn,W>=Rh&&(W-=Rh,G.push({lat:C.lat,lon:C.lon,altKm:C.altKm,headingDeg:C.headingDeg})))),he-=Jn,we+=Jn,ve+=Jn;if(Ne&&ve>=dP&&(ve=0,Ne.sendInput(nt)),we>=hP){we=0;const Oe=s.findCountryAt(C.lat,C.lon);T.setCountry(Oe?((lt=t[Oe])==null?void 0:lt.name)??Oe:null)}if(Qe+=Jn,x.update(C,nt),h.update(a),Ne){U.update(Ne.room.state,Ne.sessionId,C,Jn),tt==null||tt.update(Ne.room.state,Ne.sessionId);const Oe=(Ze=Ne.room.state.players)==null?void 0:Ze.get(Ne.sessionId);Oe&&Date.now()<Oe.tumbleUntil&&u.rotateZ(Qe*14)}z.update(Ne?Ne.room.state:null,Qe),L.update(Qe),S.update(Qe),f.update(Jn);const Ae=(C.speedKmh-Js)/(qh-Js);I.update(Jn,u.localToWorld(A.clone()),Ae>F),P.update(J),Ne&&R.update(),T.setTelemetry(C),c.render(o,a)})}pP().catch(n=>{console.error("Failed to start Cargo Skies",n),document.body.textContent="Engine stalled — please refresh."});
