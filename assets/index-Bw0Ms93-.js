(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="185",O_=0,Yh=1,U_=2,Qo=1,F_=2,Ea=3,Rr=0,zn=1,Mi=2,ir=0,Ds=1,Kh=2,Zh=3,Jh=4,B_=5,Vr=100,z_=101,k_=102,V_=103,H_=104,G_=200,W_=201,$_=202,X_=203,Rf=204,Cf=205,q_=206,Y_=207,K_=208,Z_=209,J_=210,j_=211,Q_=212,ex=213,tx=214,Pf=0,If=1,Df=2,Fs=3,Lf=4,Nf=5,Of=6,Uf=7,i0=0,nx=1,ix=2,Vi=0,r0=1,s0=2,a0=3,o0=4,l0=5,c0=6,f0=7,u0=300,Zr=301,Bs=302,yc=303,Sc=304,rc=306,Ff=1e3,tr=1001,Bf=1002,vn=1003,rx=1004,io=1005,wn=1006,Mc=1007,Wr=1008,Qn=1009,h0=1010,d0=1011,La=1012,sh=1013,Xi=1014,Bi=1015,cr=1016,ah=1017,oh=1018,Na=1020,p0=35902,m0=35899,g0=1021,_0=1022,wi=1023,fr=1026,$r=1027,lh=1028,ch=1029,Jr=1030,fh=1031,uh=1033,el=33776,tl=33777,nl=33778,il=33779,zf=35840,kf=35841,Vf=35842,Hf=35843,Gf=36196,Wf=37492,$f=37496,Xf=37488,qf=37489,pl=37490,Yf=37491,Kf=37808,Zf=37809,Jf=37810,jf=37811,Qf=37812,eu=37813,tu=37814,nu=37815,iu=37816,ru=37817,su=37818,au=37819,ou=37820,lu=37821,cu=36492,fu=36494,uu=36495,hu=36283,du=36284,ml=36285,pu=36286,sx=3200,mu=0,ax=1,Er="",oi="srgb",gl="srgb-linear",_l="linear",Nt="srgb",as=7680,jh=519,ox=512,lx=513,cx=514,hh=515,fx=516,ux=517,dh=518,hx=519,gu=35044,Qh="300 es",zi=2e3,Oa=2001;function dx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function px(){const n=xl("canvas");return n.style.display="block",n}const ed={};function vl(...n){const e="THREE."+n.shift();console.log(e,...n)}function x0(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function rt(...n){n=x0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=x0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ls(...n){const e=n.join(" ");e in ed||(ed[e]=!0,rt(...n))}function mx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const gx={[Pf]:If,[Df]:Of,[Lf]:Uf,[Fs]:Nf,[If]:Pf,[Of]:Df,[Uf]:Lf,[Nf]:Fs};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let td=1234567;const Pa=Math.PI/180,Ua=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function ph(n,e){return(n%e+e)%e}function _x(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xx(n,e,t){return n!==e?(t-n)/(e-n):0}function Ia(n,e,t){return(1-t)*n+t*e}function vx(n,e,t,i){return Ia(n,e,1-Math.exp(-t*i))}function yx(n,e=1){return e-Math.abs(ph(n,e*2)-e)}function Sx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ex(n,e){return n+Math.floor(Math.random()*(e-n+1))}function bx(n,e){return n+Math.random()*(e-n)}function wx(n){return n*(.5-Math.random())}function Tx(n){n!==void 0&&(td=n);let e=td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ax(n){return n*Pa}function Rx(n){return n*Ua}function Cx(n){return(n&n-1)===0&&n!==0}function Px(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ix(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dx(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const v0={DEG2RAD:Pa,RAD2DEG:Ua,generateUUID:rr,clamp:ut,euclideanModulo:ph,mapLinear:_x,inverseLerp:xx,lerp:Ia,damp:vx,pingpong:yx,smoothstep:Sx,smootherstep:Mx,randInt:Ex,randFloat:bx,randFloatSpread:wx,seededRandom:Tx,degToRad:Ax,radToDeg:Rx,isPowerOfTwo:Cx,ceilPowerOfTwo:Px,floorPowerOfTwo:Ix,setQuaternionFromProperEuler:Dx,normalize:Ot,denormalize:Ei},Gh=class Gh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gh.prototype.isVector2=!0;let ft=Gh;class Ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(f!==y||c!==u||l!==p||h!==g){let x=c*u+l*p+h*g+f*y;x<0&&(u=-u,p=-p,g=-g,y=-y,x=-x);let _=1-o;if(x<.9995){const T=Math.acos(x),P=Math.sin(T);_=Math.sin(_*T)/P,o=Math.sin(o*T)/P,c=c*_+u*o,l=l*_+p*o,h=h*_+g*o,f=f*_+y*o}else{c=c*_+u*o,l=l*_+p*o,h=h*_+g*o,f=f*_+y*o;const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*p-l*u,e[t+1]=c*g+h*u+l*f-o*p,e[t+2]=l*g+h*p+o*u-c*f,e[t+3]=h*g-o*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),u=c(i/2),p=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wh=class Wh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;let X=Wh;const Ec=new X,nd=new Ys,$h=class $h{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],y=r[0],x=r[3],_=r[6],T=r[1],P=r[4],M=r[7],I=r[2],R=r[5],O=r[8];return s[0]=a*y+o*T+c*I,s[3]=a*x+o*P+c*R,s[6]=a*_+o*M+c*O,s[1]=l*y+h*T+f*I,s[4]=l*x+h*P+f*R,s[7]=l*_+h*M+f*O,s[2]=u*y+p*T+g*I,s[5]=u*x+p*P+g*R,s[8]=u*_+p*M+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*s,p=l*s-a*c,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*l-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=u*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bc.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bc.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;let lt=$h;const bc=new lt,id=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lx(){const n={enabled:!0,workingColorSpace:gl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Nt&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Nt&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?_l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gl]:{primaries:e,whitePoint:i,transfer:_l,toXYZ:id,fromXYZ:rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:id,fromXYZ:rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}const yt=Lx();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let os;class Nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{os===void 0&&(os=xl("canvas")),os.width=e.width,os.height=e.height;const r=os.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=os}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=sr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ox=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wc(r[a].image)):s.push(wc(r[a]))}else s=wc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Ux=0;const Tc=new X;class Tn extends ts{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,i=tr,r=tr,s=wn,a=Wr,o=wi,c=Qn,l=Tn.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=rr(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=u0;Tn.DEFAULT_ANISOTROPY=1;const Xh=class Xh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,M=(p+1)/2,I=(_+1)/2,R=(h+u)/4,O=(f+y)/4,S=(g+x)/4;return P>M&&P>I?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=R/i,s=O/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=S/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=O/s,r=S/s),this.set(i,r,s,t),this}let T=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(f-y)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xh.prototype.isVector4=!0;let Ut=Xh;class Fx extends ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Tn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new mh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Fx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class y0 extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bx extends Tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ic=class ic{constructor(e,t,i,r,s,a,o,c,l,h,f,u,p,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,f,u,p,g,y,x)}set(e,t,i,r,s,a,o,c,l,h,f,u,p,g,y,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=u,_[3]=p,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),a=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=u-y*l,t[9]=-o*c,t[2]=y-u*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,g=l*h,y=l*f;t[0]=u+y*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=y+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,g=l*h,y=l*f;t[0]=u-y*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,p=a*f,g=o*h,y=o*f;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+y,t[1]=c*f,t[5]=y*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+g,t[10]=u-y*f}else if(e.order==="XZY"){const u=a*c,p=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+y,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,kx)}lookAt(e,t,i){const r=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),gr.crossVectors(i,Yn),gr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),gr.crossVectors(i,Yn)),gr.normalize(),ro.crossVectors(Yn,gr),r[0]=gr.x,r[4]=ro.x,r[8]=Yn.x,r[1]=gr.y,r[5]=ro.y,r[9]=Yn.y,r[2]=gr.z,r[6]=ro.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],y=i[6],x=i[10],_=i[14],T=i[3],P=i[7],M=i[11],I=i[15],R=r[0],O=r[4],S=r[8],w=r[12],B=r[1],N=r[5],z=r[9],L=r[13],k=r[2],A=r[6],U=r[10],F=r[14],G=r[3],Z=r[7],te=r[11],ue=r[15];return s[0]=a*R+o*B+c*k+l*G,s[4]=a*O+o*N+c*A+l*Z,s[8]=a*S+o*z+c*U+l*te,s[12]=a*w+o*L+c*F+l*ue,s[1]=h*R+f*B+u*k+p*G,s[5]=h*O+f*N+u*A+p*Z,s[9]=h*S+f*z+u*U+p*te,s[13]=h*w+f*L+u*F+p*ue,s[2]=g*R+y*B+x*k+_*G,s[6]=g*O+y*N+x*A+_*Z,s[10]=g*S+y*z+x*U+_*te,s[14]=g*w+y*L+x*F+_*ue,s[3]=T*R+P*B+M*k+I*G,s[7]=T*O+P*N+M*A+I*Z,s[11]=T*S+P*z+M*U+I*te,s[15]=T*w+P*L+M*F+I*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],y=e[7],x=e[11],_=e[15],T=c*p-l*u,P=o*p-l*f,M=o*u-c*f,I=a*p-l*h,R=a*u-c*h,O=a*f-o*h;return t*(y*T-x*P+_*M)-i*(g*T-x*I+_*R)+r*(g*P-y*I+_*O)-s*(g*M-y*R+x*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],y=e[13],x=e[14],_=e[15],T=t*o-i*a,P=t*c-r*a,M=t*l-s*a,I=i*c-r*o,R=i*l-s*o,O=r*l-s*c,S=h*y-f*g,w=h*x-u*g,B=h*_-p*g,N=f*x-u*y,z=f*_-p*y,L=u*_-p*x,k=T*L-P*z+M*N+I*B-R*w+O*S;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/k;return e[0]=(o*L-c*z+l*N)*A,e[1]=(r*z-i*L-s*N)*A,e[2]=(y*O-x*R+_*I)*A,e[3]=(u*R-f*O-p*I)*A,e[4]=(c*B-a*L-l*w)*A,e[5]=(t*L-r*B+s*w)*A,e[6]=(x*M-g*O-_*P)*A,e[7]=(h*O-u*M+p*P)*A,e[8]=(a*z-o*B+l*S)*A,e[9]=(i*B-t*z-s*S)*A,e[10]=(g*R-y*M+_*T)*A,e[11]=(f*M-h*R-p*T)*A,e[12]=(o*w-a*N-c*S)*A,e[13]=(t*N-i*w+r*S)*A,e[14]=(y*P-g*I-x*T)*A,e[15]=(h*I-f*P+u*T)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,u=s*l,p=s*h,g=s*f,y=a*h,x=a*f,_=o*f,T=c*l,P=c*h,M=c*f,I=i.x,R=i.y,O=i.z;return r[0]=(1-(y+_))*I,r[1]=(p+M)*I,r[2]=(g-P)*I,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+_))*R,r[6]=(x+T)*R,r[7]=0,r[8]=(g+P)*O,r[9]=(x-T)*O,r[10]=(1-(u+y))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),c=ls.set(r[8],r[9],r[10]).length();s<0&&(a=-a),gi.copy(this);const l=1/a,h=1/o,f=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,t.setFromRotationMatrix(gi),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=zi,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===zi)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Oa)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zi,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===zi)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Oa)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ic.prototype.isMatrix4=!0;let qt=ic;const ls=new X,gi=new qt,zx=new X(0,0,0),kx=new X(1,1,1),gr=new X,ro=new X,Yn=new X,sd=new qt,ad=new Ys;class jr{constructor(e=0,t=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vx=0;const od=new X,cs=new Ys,Ki=new qt,so=new X,sa=new X,Hx=new X,Gx=new Ys,ld=new X(1,0,0),cd=new X(0,1,0),fd=new X(0,0,1),ud={type:"added"},Wx={type:"removed"},fs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class dn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new X,t=new jr,i=new Ys,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?so.copy(e):so.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(sa,so,this.up):Ki.lookAt(so,sa,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ki),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),fs.child=e,this.dispatchEvent(fs),fs.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new X(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fi extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $x={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,i),_=this._getHandJoint(l,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($x)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Cc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let mt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=ph(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Cc(a,s,e+1/3),this.g=Cc(a,s,e),this.b=Cc(a,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=oi){function i(s){s!==void 0&&parseFloat(s)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const i=M0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return yt.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,s=Mn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=oi){yt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,r=Mn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(ao);const i=Ia(_r.h,ao.h,t),r=Ia(_r.s,ao.s,t),s=Ia(_r.l,ao.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Mn=new mt;mt.NAMES=M0;class Xx extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new X,Zi=new X,Pc=new X,Ji=new X,us=new X,hs=new X,hd=new X,Ic=new X,Dc=new X,Lc=new X,Nc=new Ut,Oc=new Ut,Uc=new Ut;class ci{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_i.subVectors(e,t),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_i.subVectors(r,t),Zi.subVectors(i,t),Pc.subVectors(e,t);const a=_i.dot(_i),o=_i.dot(Zi),c=_i.dot(Pc),l=Zi.dot(Zi),h=Zi.dot(Pc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ji.x),c.addScaledVector(a,Ji.y),c.addScaledVector(o,Ji.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Nc.setScalar(0),Oc.setScalar(0),Uc.setScalar(0),Nc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,i),Uc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Nc,s.x),a.addScaledVector(Oc,s.y),a.addScaledVector(Uc,s.z),a}static isFrontFacing(e,t,i,r){return _i.subVectors(i,t),Zi.subVectors(e,t),_i.cross(Zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;us.subVectors(r,i),hs.subVectors(s,i),Ic.subVectors(e,i);const c=us.dot(Ic),l=hs.dot(Ic);if(c<=0&&l<=0)return t.copy(i);Dc.subVectors(e,r);const h=us.dot(Dc),f=hs.dot(Dc);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(us,a);Lc.subVectors(e,s);const p=us.dot(Lc),g=hs.dot(Lc);if(g>=0&&p<=g)return t.copy(s);const y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(hs,o);const x=h*g-p*f;if(x<=0&&f-h>=0&&p-g>=0)return hd.subVectors(s,r),o=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(hd,o);const _=1/(x+y+u);return a=y*_,o=u*_,t.copy(i).addScaledVector(us,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ir{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),lo.subVectors(this.max,aa),ds.subVectors(e.a,aa),ps.subVectors(e.b,aa),ms.subVectors(e.c,aa),xr.subVectors(ps,ds),vr.subVectors(ms,ps),Lr.subVectors(ds,ms);let t=[0,-xr.z,xr.y,0,-vr.z,vr.y,0,-Lr.z,Lr.y,xr.z,0,-xr.x,vr.z,0,-vr.x,Lr.z,0,-Lr.x,-xr.y,xr.x,0,-vr.y,vr.x,0,-Lr.y,Lr.x,0];return!Fc(t,ds,ps,ms,lo)||(t=[1,0,0,0,1,0,0,0,1],!Fc(t,ds,ps,ms,lo))?!1:(co.crossVectors(xr,vr),t=[co.x,co.y,co.z],Fc(t,ds,ps,ms,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new X,new X,new X,new X,new X,new X,new X,new X],xi=new X,oo=new Ir,ds=new X,ps=new X,ms=new X,xr=new X,vr=new X,Lr=new X,aa=new X,lo=new X,co=new X,Nr=new X;function Fc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Nr.fromArray(n,s);const o=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),c=e.dot(Nr),l=t.dot(Nr),h=i.dot(Nr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const an=new X,fo=new ft;let qx=0;class Ai extends ts{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class E0 extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class b0 extends Ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Yx=new Ir,oa=new X,Bc=new X;class Ka{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(oa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Bc)),this.expandByPoint(oa.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kx=0;const ni=new qt,zc=new dn,gs=new X,Kn=new Ir,la=new Ir,fn=new X;class yn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dx(e)?b0:E0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Kn.min,la.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,la.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(la.min),Kn.expandByPoint(la.max))}Kn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)fn.fromBufferAttribute(o,l),c&&(gs.fromBufferAttribute(e,l),fn.add(gs)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let S=0;S<i.count;S++)o[S]=new X,c[S]=new X;const l=new X,h=new X,f=new X,u=new ft,p=new ft,g=new ft,y=new X,x=new X;function _(S,w,B){l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,B),u.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,B),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(N),x.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(N),o[S].add(y),o[w].add(y),o[B].add(y),c[S].add(x),c[w].add(x),c[B].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,w=T.length;S<w;++S){const B=T[S],N=B.start,z=B.count;for(let L=N,k=N+z;L<k;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const P=new X,M=new X,I=new X,R=new X;function O(S){I.fromBufferAttribute(r,S),R.copy(I);const w=o[S];P.copy(w),P.sub(I.multiplyScalar(I.dot(w))).normalize(),M.crossVectors(R,w);const N=M.dot(c[S])<0?-1:1;a.setXYZW(S,P.x,P.y,P.z,N)}for(let S=0,w=T.length;S<w;++S){const B=T[S],N=B.start,z=B.count;for(let L=N,k=N+z;L<k;L+=3)O(e.getX(L+0)),O(e.getX(L+1)),O(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,h=new X,f=new X;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*h;for(let _=0;_<h;_++)u[g++]=l[p++]}return new Ai(u,h,f)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class w0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gu,this.updateRanges=[],this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new X;class ki{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){vl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ki(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Zx=0;class ns extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ds,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Cf,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rf&&(i.blendSrc=this.blendSrc),this.blendDst!==Cf&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class T0 extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const ca=new X,xs=new X,vs=new X,ys=new ft,fa=new ft,A0=new qt,uo=new X,ua=new X,ho=new X,dd=new ft,kc=new ft,pd=new ft;class Jx extends dn{constructor(e=new T0){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new w0(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new ki(i,3,0,!1)),_s.setAttribute("uv",new ki(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ft(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),A0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;po(uo.set(-.5,-.5,0),vs,a,xs,r,s),po(ua.set(.5,-.5,0),vs,a,xs,r,s),po(ho.set(.5,.5,0),vs,a,xs,r,s),dd.set(0,0),kc.set(1,0),pd.set(1,1);let o=e.ray.intersectTriangle(uo,ua,ho,!1,ca);if(o===null&&(po(ua.set(-.5,.5,0),vs,a,xs,r,s),kc.set(0,1),o=e.ray.intersectTriangle(uo,ho,ua,!1,ca),o===null))return;const c=e.ray.origin.distanceTo(ca);c<e.near||c>e.far||t.push({distance:c,point:ca.clone(),uv:ci.getInterpolation(ca,uo,ua,ho,dd,kc,pd,new ft),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function po(n,e,t,i,r,s){ys.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(fa.x=s*ys.x-r*ys.y,fa.y=r*ys.x+s*ys.y):fa.copy(ys),n.copy(e),n.x+=fa.x,n.y+=fa.y,n.applyMatrix4(A0)}const Qi=new X,Vc=new X,mo=new X,yr=new X,Hc=new X,go=new X,Gc=new X;class jx{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vc.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Vc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=yr.dot(this.direction),c=-yr.dot(mo),l=yr.lengthSq(),h=Math.abs(1-a*a);let f,u,p,g;if(h>0)if(f=a*c-o,u=a*o-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const y=1/h;f*=y,u*=y,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vc).addScaledVector(mo,u),p}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,r,s){Hc.subVectors(t,e),go.subVectors(i,e),Gc.crossVectors(Hc,go);let a=this.direction.dot(Gc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yr.subVectors(this.origin,e);const c=o*this.direction.dot(go.crossVectors(yr,go));if(c<0)return null;const l=o*this.direction.dot(Hc.cross(yr));if(l<0||c+l>a)return null;const h=-o*yr.dot(Gc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Za extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const md=new qt,Or=new jx,_o=new Ka,gd=new X,xo=new X,vo=new X,yo=new X,Wc=new X,So=new X,_d=new X,Mo=new X;class Bt extends dn{constructor(e=new yn,t=new Za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Wc.fromBufferAttribute(f,e),a?So.addScaledVector(Wc,h):So.addScaledVector(Wc.sub(t),h))}t.add(So)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(_o.containsPoint(Or.origin)===!1&&(Or.intersectSphere(_o,gd)===null||Or.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(s).invert(),Or.copy(e.ray).applyMatrix4(md),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const x=u[g],_=a[x.materialIndex],T=Math.max(x.start,p.start),P=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let M=T,I=P;M<I;M+=3){const R=o.getX(M),O=o.getX(M+1),S=o.getX(M+2);r=Eo(this,_,e,i,l,h,f,R,O,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){const T=o.getX(x),P=o.getX(x+1),M=o.getX(x+2);r=Eo(this,a,e,i,l,h,f,T,P,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const x=u[g],_=a[x.materialIndex],T=Math.max(x.start,p.start),P=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let M=T,I=P;M<I;M+=3){const R=M,O=M+1,S=M+2;r=Eo(this,_,e,i,l,h,f,R,O,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){const T=x,P=x+1,M=x+2;r=Eo(this,a,e,i,l,h,f,T,P,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Qx(n,e,t,i,r,s,a,o){let c;if(e.side===zn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Rr,o),c===null)return null;Mo.copy(o),Mo.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:n}}function Eo(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,xo),n.getVertexPosition(c,vo),n.getVertexPosition(l,yo);const h=Qx(n,e,t,i,xo,vo,yo,_d);if(h){const f=new X;ci.getBarycoord(_d,xo,vo,yo,f),r&&(h.uv=ci.getInterpolatedAttribute(r,o,c,l,f,new ft)),s&&(h.uv1=ci.getInterpolatedAttribute(s,o,c,l,f,new ft)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,c,l,f,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new X,materialIndex:0};ci.getNormal(xo,vo,yo,u.normal),h.face=u,h.barycoord=f}return h}class R0 extends Tn{constructor(e=null,t=1,i=1,r,s,a,o,c,l=vn,h=vn,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new X,ev=new X,tv=new lt;class zr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$c.subVectors(i,t).cross(ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta($c),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tv.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Ka,nv=new ft(.5,.5),bo=new X;class gh{constructor(e=new zr,t=new zr,i=new zr,r=new zr,s=new zr,a=new zr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],g=s[8],y=s[9],x=s[10],_=s[11],T=s[12],P=s[13],M=s[14],I=s[15];if(r[0].setComponents(l-a,p-h,_-g,I-T).normalize(),r[1].setComponents(l+a,p+h,_+g,I+T).normalize(),r[2].setComponents(l+o,p+f,_+y,I+P).normalize(),r[3].setComponents(l-o,p-f,_-y,I-P).normalize(),i)r[4].setComponents(c,u,x,M).normalize(),r[5].setComponents(l-c,p-u,_-x,I-M).normalize();else if(r[4].setComponents(l-c,p-u,_-x,I-M).normalize(),t===zi)r[5].setComponents(l+c,p+u,_+x,I+M).normalize();else if(t===Oa)r[5].setComponents(c,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const t=nv.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C0 extends Tn{constructor(e=[],t=Zr,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends Tn{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zs extends Tn{constructor(e,t,i=Xi,r,s,a,o=vn,c=vn,l,h=fr,f=1){if(h!==fr&&h!==$r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class iv extends zs{constructor(e,t=Xi,i=Zr,r,s,a=vn,o=vn,c,l=fr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class I0 extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nr extends yn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2));function g(y,x,_,T,P,M,I,R,O,S,w){const B=M/O,N=I/S,z=M/2,L=I/2,k=R/2,A=O+1,U=S+1;let F=0,G=0;const Z=new X;for(let te=0;te<U;te++){const ue=te*N-L;for(let pe=0;pe<A;pe++){const ze=pe*B-z;Z[y]=ze*T,Z[x]=ue*P,Z[_]=k,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[x]=0,Z[_]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(pe/O),f.push(1-te/S),F+=1}}for(let te=0;te<S;te++)for(let ue=0;ue<O;ue++){const pe=u+ue+A*te,ze=u+ue+A*(te+1),at=u+(ue+1)+A*(te+1),et=u+(ue+1)+A*te;c.push(pe,ze,et),c.push(ze,at,et),G+=6}o.addGroup(p,G,w),p+=G,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends yn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,g=i*2+s,y=r+1,x=new X,_=new X;for(let T=0;T<=g;T++){let P=0,M=0,I=0,R=0;if(T<=i){const w=T/i,B=w*Math.PI/2;M=-h-e*Math.cos(B),I=e*Math.sin(B),R=-e*Math.cos(B),P=w*f}else if(T<=i+s){const w=(T-i)/s;M=-h+w*t,I=e,R=0,P=f+w*u}else{const w=(T-i-s)/i,B=w*Math.PI/2;M=h+e*Math.sin(B),I=e*Math.cos(B),R=e*Math.sin(B),P=f+u+w*f}const O=Math.max(0,Math.min(1,P/p));let S=0;T===0?S=.5/r:T===g&&(S=-.5/r);for(let w=0;w<=r;w++){const B=w/r,N=B*Math.PI*2,z=Math.sin(N),L=Math.cos(N);_.x=-I*L,_.y=M,_.z=I*z,o.push(_.x,_.y,_.z),x.set(-I*L,R,I*z),x.normalize(),c.push(x.x,x.y,x.z),l.push(B+S,O)}if(T>0){const w=(T-1)*y;for(let B=0;B<r;B++){const N=w+B,z=w+B+1,L=T*y+B,k=T*y+B+1;a.push(N,z,L),a.push(z,k,L)}}}this.setIndex(a),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class _h extends yn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new X,h=new ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(o,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sc extends yn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const y=[],x=i/2;let _=0;T(),a===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(p,2));function T(){const M=new X,I=new X;let R=0;const O=(t-e)/i;for(let S=0;S<=s;S++){const w=[],B=S/s,N=B*(t-e)+e;for(let z=0;z<=r;z++){const L=z/r,k=L*c+o,A=Math.sin(k),U=Math.cos(k);I.x=N*A,I.y=-B*i+x,I.z=N*U,f.push(I.x,I.y,I.z),M.set(A,O,U).normalize(),u.push(M.x,M.y,M.z),p.push(L,1-B),w.push(g++)}y.push(w)}for(let S=0;S<r;S++)for(let w=0;w<s;w++){const B=y[w][S],N=y[w+1][S],z=y[w+1][S+1],L=y[w][S+1];(e>0||w!==0)&&(h.push(B,N,L),R+=3),(t>0||w!==s-1)&&(h.push(N,z,L),R+=3)}l.addGroup(_,R,0),_+=R}function P(M){const I=g,R=new ft,O=new X;let S=0;const w=M===!0?e:t,B=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,x*B,0),u.push(0,B,0),p.push(.5,.5),g++;const N=g;for(let z=0;z<=r;z++){const k=z/r*c+o,A=Math.cos(k),U=Math.sin(k);O.x=w*U,O.y=x*B,O.z=w*A,f.push(O.x,O.y,O.z),u.push(0,B,0),R.x=A*.5+.5,R.y=U*.5*B+.5,p.push(R.x,R.y),g++}for(let z=0;z<r;z++){const L=I+z,k=N+z;M===!0?h.push(k,k+1,L):h.push(k+1,k,L),S+=3}l.addGroup(_,S,M===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xh extends sc{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ac extends yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=e/o,u=t/c,p=[],g=[],y=[],x=[];for(let _=0;_<h;_++){const T=_*u-a;for(let P=0;P<l;P++){const M=P*f-s;g.push(M,-T,0),y.push(0,0,1),x.push(P/o),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<o;T++){const P=T+l*_,M=T+l*(_+1),I=T+1+l*(_+1),R=T+1+l*_;p.push(P,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends yn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new X,u=new X,p=[],g=[],y=[],x=[];for(let _=0;_<=i;_++){const T=[],P=_/i,M=a+P*o,I=e*Math.cos(M),R=Math.sqrt(e*e-I*I);let O=0;_===0&&a===0?O=.5/t:_===i&&c===Math.PI&&(O=-.5/t);for(let S=0;S<=t;S++){const w=S/t,B=r+w*s;f.x=-R*Math.cos(B),f.y=I,f.z=R*Math.sin(B),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),x.push(w+O,1-P),T.push(l++)}h.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){const P=h[_][T+1],M=h[_][T],I=h[_+1][T],R=h[_+1][T+1];(_!==0||a>0)&&p.push(P,M,R),(_!==i-1||c<Math.PI)&&p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rv extends yn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new X,s=new X;if(e.index!==null){const a=e.attributes.position,o=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,p=f.count;for(let g=u,y=u+p;g<y;g+=3)for(let x=0;x<3;x++){const _=o.getX(g+x),T=o.getX(g+(x+1)%3);r.fromBufferAttribute(a,_),s.fromBufferAttribute(a,T),xd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,f=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,f),xd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new $t(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function xd(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(vd(r))r.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(vd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const i=ks(n[t]);for(const r in i)e[r]=i[r]}return e}function vd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function sv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function D0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const vh={clone:ks,merge:On};var av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=av,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new mt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lv extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends ns{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mu,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class cv extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fv extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yh extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class uv extends yh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xc=new qt,yd=new X,Sd=new X;class hv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sd),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Oa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wo=new X,To=new Ys,Ii=new X;class L0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,To,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,To,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wo,To,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,To,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new X,Md=new ft,Ed=new ft;class li extends L0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Ed),t.subVectors(Ed,Md)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sh extends L0{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dv extends hv{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pv extends yh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new dv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mv extends yh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gv extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ss=-90,Ms=1;class _v extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new li(Ss,Ms,e,t);r.layers=this.layers,this.add(r);const s=new li(Ss,Ms,e,t);s.layers=this.layers,this.add(s);const a=new li(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const o=new li(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const c=new li(Ss,Ms,e,t);c.layers=this.layers,this.add(c);const l=new li(Ss,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xv extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=yv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function yv(){this._document.hidden===!1&&this.reset()}class _u extends w0{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const qh=class qh{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};qh.prototype.isMatrix2=!0;let bd=qh;const wd=new X,Ao=new X,Es=new X,bs=new X,qc=new X,Sv=new X,Mv=new X;class Ev{constructor(e=new X,t=new X){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wd.subVectors(e,this.start),Ao.subVectors(this.end,this.start);const i=Ao.dot(Ao);if(i===0)return 0;let s=Ao.dot(wd)/i;return t&&(s=ut(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Sv,i=Mv){const r=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,h=e.end;Es.subVectors(l,o),bs.subVectors(h,c),qc.subVectors(o,c);const f=Es.dot(Es),u=bs.dot(bs),p=bs.dot(qc);if(f<=r&&u<=r)return t.copy(o),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,a=p/u,a=ut(a,0,1);else{const g=Es.dot(qc);if(u<=r)a=0,s=ut(-g/f,0,1);else{const y=Es.dot(bs),x=f*u-y*y;x!==0?s=ut((y*p-g*u)/x,0,1):s=0,a=(y*s+p)/u,a<0?(a=0,s=ut(-g/f,0,1)):a>1&&(a=1,s=ut((y-g)/f,0,1))}}return t.copy(o).addScaledVector(Es,s),i.copy(c).addScaledVector(bs,a),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Td(n,e,t,i){const r=bv(i);switch(t){case g0:return n*e;case lh:return n*e/r.components*r.byteLength;case ch:return n*e/r.components*r.byteLength;case Jr:return n*e*2/r.components*r.byteLength;case fh:return n*e*2/r.components*r.byteLength;case _0:return n*e*3/r.components*r.byteLength;case wi:return n*e*4/r.components*r.byteLength;case uh:return n*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kf:case Hf:return Math.max(n,16)*Math.max(e,8)/4;case zf:case Vf:return Math.max(n,8)*Math.max(e,8)/2;case Gf:case Wf:case Xf:case qf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $f:case pl:case Yf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cu:case fu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hu:case du:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bv(n){switch(n){case Qn:case h0:return{byteLength:1,components:1};case La:case d0:case cr:return{byteLength:2,components:1};case ah:case oh:return{byteLength:2,components:4};case Xi:case sh:case Bi:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wv(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Av=`#ifdef USE_ALPHAHASH
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
#endif`,Rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dv=`#ifdef USE_AOMAP
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
#endif`,Lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
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
#endif`,Ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zv=`#ifdef USE_IRIDESCENCE
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
#endif`,kv=`#ifdef USE_BUMPMAP
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
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kv=`#define PI 3.141592653589793
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
} // validated`,Zv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jv=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ny="gl_FragColor = linearToOutputTexel( gl_FragColor );",iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dy=`#ifdef USE_GRADIENTMAP
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
}`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,my=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xy=`#ifdef USE_ENVMAP
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
#endif`,vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ey=`PhysicalMaterial material;
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
#endif`,by=`uniform sampler2D dfgLUT;
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
}`,wy=`
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
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uy=`#if defined( USE_POINTS_UV )
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
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,By=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
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
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ky=`#ifdef USE_NORMALMAP
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
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uS=`float getShadowMask() {
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
}`,hS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dS=`#ifdef USE_SKINNING
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
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
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
#endif`,SS=`#ifdef USE_TRANSMISSION
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
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
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
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`#include <common>
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
}`,LS=`#if DEPTH_PACKING == 3200
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
}`,NS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`uniform float scale;
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
}`,zS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,VS=`uniform vec3 diffuse;
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
}`,HS=`#define LAMBERT
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
}`,GS=`#define LAMBERT
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
}`,WS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,XS=`#define NORMAL
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
}`,qS=`#define NORMAL
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
}`,YS=`#define PHONG
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
}`,KS=`#define PHONG
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
}`,ZS=`#define STANDARD
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
}`,JS=`#define STANDARD
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
}`,jS=`#define TOON
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
}`,QS=`#define TOON
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
}`,eM=`uniform float size;
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
}`,tM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 color;
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
}`,rM=`uniform float rotation;
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
}`,sM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Tv,alphahash_pars_fragment:Av,alphamap_fragment:Rv,alphamap_pars_fragment:Cv,alphatest_fragment:Pv,alphatest_pars_fragment:Iv,aomap_fragment:Dv,aomap_pars_fragment:Lv,batching_pars_vertex:Nv,batching_vertex:Ov,begin_vertex:Uv,beginnormal_vertex:Fv,bsdfs:Bv,iridescence_fragment:zv,bumpmap_pars_fragment:kv,clipping_planes_fragment:Vv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Wv,color_fragment:$v,color_pars_fragment:Xv,color_pars_vertex:qv,color_vertex:Yv,common:Kv,cube_uv_reflection_fragment:Zv,defaultnormal_vertex:Jv,displacementmap_pars_vertex:jv,displacementmap_vertex:Qv,emissivemap_fragment:ey,emissivemap_pars_fragment:ty,colorspace_fragment:ny,colorspace_pars_fragment:iy,envmap_fragment:ry,envmap_common_pars_fragment:sy,envmap_pars_fragment:ay,envmap_pars_vertex:oy,envmap_physical_pars_fragment:xy,envmap_vertex:ly,fog_vertex:cy,fog_pars_vertex:fy,fog_fragment:uy,fog_pars_fragment:hy,gradientmap_pars_fragment:dy,lightmap_pars_fragment:py,lights_lambert_fragment:my,lights_lambert_pars_fragment:gy,lights_pars_begin:_y,lights_toon_fragment:vy,lights_toon_pars_fragment:yy,lights_phong_fragment:Sy,lights_phong_pars_fragment:My,lights_physical_fragment:Ey,lights_physical_pars_fragment:by,lights_fragment_begin:wy,lights_fragment_maps:Ty,lights_fragment_end:Ay,lightprobes_pars_fragment:Ry,logdepthbuf_fragment:Cy,logdepthbuf_pars_fragment:Py,logdepthbuf_pars_vertex:Iy,logdepthbuf_vertex:Dy,map_fragment:Ly,map_pars_fragment:Ny,map_particle_fragment:Oy,map_particle_pars_fragment:Uy,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:By,morphinstance_vertex:zy,morphcolor_vertex:ky,morphnormal_vertex:Vy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Gy,normal_fragment_begin:Wy,normal_fragment_maps:$y,normal_pars_fragment:Xy,normal_pars_vertex:qy,normal_vertex:Yy,normalmap_pars_fragment:Ky,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Jy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Qy,opaque_fragment:eS,packing:tS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:rS,dithering_pars_fragment:sS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:oS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:cS,shadowmap_vertex:fS,shadowmask_pars_fragment:uS,skinbase_vertex:hS,skinning_pars_vertex:dS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:_S,tonemapping_fragment:xS,tonemapping_pars_fragment:vS,transmission_fragment:yS,transmission_pars_fragment:SS,uv_pars_fragment:MS,uv_pars_vertex:ES,uv_vertex:bS,worldpos_vertex:wS,background_vert:TS,background_frag:AS,backgroundCube_vert:RS,backgroundCube_frag:CS,cube_vert:PS,cube_frag:IS,depth_vert:DS,depth_frag:LS,distance_vert:NS,distance_frag:OS,equirect_vert:US,equirect_frag:FS,linedashed_vert:BS,linedashed_frag:zS,meshbasic_vert:kS,meshbasic_frag:VS,meshlambert_vert:HS,meshlambert_frag:GS,meshmatcap_vert:WS,meshmatcap_frag:$S,meshnormal_vert:XS,meshnormal_frag:qS,meshphong_vert:YS,meshphong_frag:KS,meshphysical_vert:ZS,meshphysical_frag:JS,meshtoon_vert:jS,meshtoon_frag:QS,points_vert:eM,points_frag:tM,shadow_vert:nM,shadow_frag:iM,sprite_vert:rM,sprite_frag:sM},Ie={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Gn={basic:{uniforms:On([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:On([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:On([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:On([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:On([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new mt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:On([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:On([Ie.points,Ie.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:On([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:On([Ie.common,Ie.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:On([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:On([Ie.sprite,Ie.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:On([Ie.common,Ie.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:On([Ie.lights,Ie.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Gn.physical={uniforms:On([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ro={r:0,b:0,g:0},aM=new qt,O0=new lt;O0.set(-1,0,0,0,1,0,0,0,1);function oM(n,e,t,i,r,s){const a=new mt(0);let o=r===!0?0:1,c,l,h=null,f=0,u=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const M=T.backgroundBlurriness>0;P=e.get(P,M)}return P}function g(T){let P=!1;const M=p(T);M===null?x(a,o):M&&M.isColor&&(x(M,1),P=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,P){const M=p(P);M&&(M.isCubeTexture||M.mapping===rc)?(l===void 0&&(l=new Bt(new nr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ks(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(aM.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(O0),l.material.toneMapped=yt.getTransfer(M.colorSpace)!==Nt,(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Bt(new ac(2,2),new hi({name:"BackgroundMaterial",uniforms:ks(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function x(T,P){T.getRGB(Ro,D0(n)),t.buffers.color.setClear(Ro.r,Ro.g,Ro.b,P,s)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,P=1){a.set(T),o=P,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,x(a,o)},render:g,addToRenderList:y,dispose:_}}function lM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(N,z,L,k,A){let U=!1;const F=f(N,k,L,z);s!==F&&(s=F,l(s.object)),U=p(N,k,L,A),U&&g(N,k,L,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(N,z,L,k),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,z,L,k){const A=k.wireframe===!0;let U=i[z.id];U===void 0&&(U={},i[z.id]=U);const F=N.isInstancedMesh===!0?N.id:0;let G=U[F];G===void 0&&(G={},U[F]=G);let Z=G[L.id];Z===void 0&&(Z={},G[L.id]=Z);let te=Z[A];return te===void 0&&(te=u(c()),Z[A]=te),te}function u(N){const z=[],L=[],k=[];for(let A=0;A<t;A++)z[A]=0,L[A]=0,k[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:L,attributeDivisors:k,object:N,attributes:{},index:null}}function p(N,z,L,k){const A=s.attributes,U=z.attributes;let F=0;const G=L.getAttributes();for(const Z in G)if(G[Z].location>=0){const ue=A[Z];let pe=U[Z];if(pe===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;F++}return s.attributesNum!==F||s.index!==k}function g(N,z,L,k){const A={},U=z.attributes;let F=0;const G=L.getAttributes();for(const Z in G)if(G[Z].location>=0){let ue=U[Z];ue===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor));const pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),A[Z]=pe,F++}s.attributes=A,s.attributesNum=F,s.index=k}function y(){const N=s.newAttributes;for(let z=0,L=N.length;z<L;z++)N[z]=0}function x(N){_(N,0)}function _(N,z){const L=s.newAttributes,k=s.enabledAttributes,A=s.attributeDivisors;L[N]=1,k[N]===0&&(n.enableVertexAttribArray(N),k[N]=1),A[N]!==z&&(n.vertexAttribDivisor(N,z),A[N]=z)}function T(){const N=s.newAttributes,z=s.enabledAttributes;for(let L=0,k=z.length;L<k;L++)z[L]!==N[L]&&(n.disableVertexAttribArray(L),z[L]=0)}function P(N,z,L,k,A,U,F){F===!0?n.vertexAttribIPointer(N,z,L,A,U):n.vertexAttribPointer(N,z,L,k,A,U)}function M(N,z,L,k){y();const A=k.attributes,U=L.getAttributes(),F=z.defaultAttributeValues;for(const G in U){const Z=U[G];if(Z.location>=0){let te=A[G];if(te===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(te=N.instanceColor)),te!==void 0){const ue=te.normalized,pe=te.itemSize,ze=e.get(te);if(ze===void 0)continue;const at=ze.buffer,et=ze.type,he=ze.bytesPerElement,be=et===n.INT||et===n.UNSIGNED_INT||te.gpuType===sh;if(te.isInterleavedBufferAttribute){const ve=te.data,Qe=ve.stride,Ae=te.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Z.locationSize;Ve++)_(Z.location+Ve,ve.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)x(Z.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Ve=0;Ve<Z.locationSize;Ve++)P(Z.location+Ve,pe/Z.locationSize,et,ue,Qe*he,(Ae+pe/Z.locationSize*Ve)*he,be)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<Z.locationSize;ve++)_(Z.location+ve,te.meshPerAttribute);N.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<Z.locationSize;ve++)x(Z.location+ve);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ve=0;ve<Z.locationSize;ve++)P(Z.location+ve,pe/Z.locationSize,et,ue,pe*he,pe/Z.locationSize*ve*he,be)}}else if(F!==void 0){const ue=F[G];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(Z.location,ue);break;case 3:n.vertexAttrib3fv(Z.location,ue);break;case 4:n.vertexAttrib4fv(Z.location,ue);break;default:n.vertexAttrib1fv(Z.location,ue)}}}}T()}function I(){w();for(const N in i){const z=i[N];for(const L in z){const k=z[L];for(const A in k){const U=k[A];for(const F in U)h(U[F].object),delete U[F];delete k[A]}}delete i[N]}}function R(N){if(i[N.id]===void 0)return;const z=i[N.id];for(const L in z){const k=z[L];for(const A in k){const U=k[A];for(const F in U)h(U[F].object),delete U[F];delete k[A]}}delete i[N.id]}function O(N){for(const z in i){const L=i[z];for(const k in L){const A=L[k];if(A[N.id]===void 0)continue;const U=A[N.id];for(const F in U)h(U[F].object),delete U[F];delete A[N.id]}}}function S(N){for(const z in i){const L=i[z],k=N.isInstancedMesh===!0?N.id:0,A=L[k];if(A!==void 0){for(const U in A){const F=A[U];for(const G in F)h(F[G].object),delete F[G];delete A[U]}delete L[k],Object.keys(L).length===0&&delete i[z]}}}function w(){B(),a=!0,s!==r&&(s=r,l(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:B,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function cM(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==wi&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){const S=O===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Qn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Bi&&!S)}function c(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(rt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:M,maxSamples:I,samples:R}}function uM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new zr,o=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):l();else{const T=s?0:i,P=T*4;let M=_.clippingState||null;c.value=M,M=h(g,u,P,p);for(let I=0;I!==P;++I)M[I]=t[I];_.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const y=f!==null?f.length:0;let x=null;if(y!==0){if(x=c.value,g!==!0||x===null){const _=p+y*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,M=p;P!==y;++P,M+=4)a.copy(f[P]).applyMatrix4(T,o),a.normal.toArray(x,M),x[M+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}const br=4,Ad=[.125,.215,.35,.446,.526,.582],Hr=20,hM=256,ha=new Sh,Rd=new mt;let Yc=null,Kc=0,Zc=0,Jc=!1;const dM=new X;class Cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=dM}=s;Yc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc,Kc,Zc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:cr,format:wi,colorSpace:gl,depthBuffer:!1},r=Pd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pM(s)),this._blurMaterial=gM(s,e,t),this._ggxMaterial=mM(s,e,t)}return r}_compileMaterial(e){const t=new Bt(new yn,e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,r,s){const c=new li(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Rd),f.toneMapping=Vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new nr,new Za({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,x=y.material;let _=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,_=!0):(x.color.copy(Rd),_=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[P],s.y,s.z)):M===1?(c.up.set(0,0,l[P]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[P],s.z)):(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[P]));const I=this._cubeSize;ws(r,M*I,P>2?I:0,I,I),f.setRenderTarget(r),_&&f.render(y,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,p=f*u,{_lodMax:g}=this,y=this._sizeLods[i],x=3*y*(i>g-br?i-g+br:0),_=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,ws(s,x,_,3*y,2*y),r.setRenderTarget(s),r.render(o,ha),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,ws(e,x,_,3*y,2*y),r.setRenderTarget(e),r.render(o,ha)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),y=s/g,x=isFinite(s)?1+Math.floor(h*y):Hr;x>Hr&&rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Hr}`);const _=[];let T=0;for(let O=0;O<Hr;++O){const S=O/y,w=Math.exp(-S*S/2);_.push(w),O===0?T+=w:O<x&&(T+=2*w)}for(let O=0;O<_.length;O++)_[O]=_[O]/T;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=_,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:P}=this;u.dTheta.value=g,u.mipInt.value=P-i;const M=this._sizeLods[r],I=3*M*(r>P-br?r-P+br:0),R=4*(this._cubeSize-M);ws(t,I,R,3*M,2*M),c.setRenderTarget(t),c.render(f,ha)}}function pM(n){const e=[],t=[],i=[];let r=n;const s=n-br+1+Ad.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-br?c=Ad[a-n+br-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,x=2,_=1,T=new Float32Array(y*g*p),P=new Float32Array(x*g*p),M=new Float32Array(_*g*p);for(let R=0;R<p;R++){const O=R%3*2/3-1,S=R>2?0:-1,w=[O,S,0,O+2/3,S,0,O+2/3,S+1,0,O,S,0,O+2/3,S+1,0,O,S+1,0];T.set(w,y*g*R),P.set(u,x*g*R);const B=[R,R,R,R,R,R];M.set(B,_*g*R)}const I=new yn;I.setAttribute("position",new Ai(T,y)),I.setAttribute("uv",new Ai(P,x)),I.setAttribute("faceIndex",new Ai(M,_)),i.push(new Bt(I,null)),r>br&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Pd(n,e,t){const i=new Hi(n,e,t);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mM(n,e,t){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function gM(n,e,t){const i=new Float32Array(Hr),r=new X(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Id(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Dd(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}class U0 extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new C0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:ir});s.uniforms.tEquirect.value=t;const a=new Bt(r,s),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=wn),new _v(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function _M(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===yc||p===Sc)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new U0(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,g=p===yc||p===Sc,y=p===Zr||p===Bs;if(g||y){let x=t.get(u);const _=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return i===null&&(i=new Cd(n)),x=g?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{const T=u.image;return g&&T&&T.height>0||y&&T&&c(T)?(i===null&&(i=new Cd(n)),x=g?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function o(u,p){return p===yc?u.mapping=Zr:p===Sc&&(u.mapping=Bs),u}function c(u){let p=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function xM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ls("WebGLRenderer: "+i+" extension not supported."),r}}}function vM(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const T=p.array;y=p.version;for(let P=0,M=T.length;P<M;P+=3){const I=T[P+0],R=T[P+1],O=T[P+2];u.push(I,R,R,O,O,I)}}else{const T=g.array;y=g.version;for(let P=0,M=T.length/3-1;P<M;P+=3){const I=P+0,R=P+1,O=P+2;u.push(I,R,R,O,O,I)}}const x=new(g.count>=65535?b0:E0)(u,1);x.version=y;const _=s.get(f);_&&e.remove(_),s.set(f,x)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function yM(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*a),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*a,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let y=0;for(let x=0;x<p;x++)y+=u[x];t.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function SM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Mt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function MM(n,e,t){const i=new WeakMap,r=new Ut;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let B=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",B)};var p=B;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],P=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),x===!0&&(M=3);let I=o.attributes.position.count*M,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*R*4*f),S=new y0(O,I,R,f);S.type=Bi,S.needsUpdate=!0;const w=M*4;for(let N=0;N<f;N++){const z=_[N],L=T[N],k=P[N],A=I*R*4*N;for(let U=0;U<z.count;U++){const F=U*w;g===!0&&(r.fromBufferAttribute(z,U),O[A+F+0]=r.x,O[A+F+1]=r.y,O[A+F+2]=r.z,O[A+F+3]=0),y===!0&&(r.fromBufferAttribute(L,U),O[A+F+4]=r.x,O[A+F+5]=r.y,O[A+F+6]=r.z,O[A+F+7]=0),x===!0&&(r.fromBufferAttribute(k,U),O[A+F+8]=r.x,O[A+F+9]=r.y,O[A+F+10]=r.z,O[A+F+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:S,size:new ft(I,R)},i.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let x=0;x<l.length;x++)g+=l[x];const y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function EM(n,e,t,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const bM={[r0]:"LINEAR_TONE_MAPPING",[s0]:"REINHARD_TONE_MAPPING",[a0]:"CINEON_TONE_MAPPING",[o0]:"ACES_FILMIC_TONE_MAPPING",[c0]:"AGX_TONE_MAPPING",[f0]:"NEUTRAL_TONE_MAPPING",[l0]:"CUSTOM_TONE_MAPPING"};function wM(n,e,t,i,r,s){const a=new Hi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new zs(e,t):void 0}),o=new Hi(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),c=new yn;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));const l=new lv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Bt(c,l),f=new Sh(-1,1,1,-1,0,1);let u=null,p=null,g=!1,y,x=null,_=[],T=!1;this.setSize=function(P,M){a.setSize(P,M),o.setSize(P,M);for(let I=0;I<_.length;I++){const R=_[I];R.setSize&&R.setSize(P,M)}},this.setEffects=function(P){_=P,T=_.length>0&&_[0].isRenderPass===!0;const M=a.width,I=a.height;for(let R=0;R<_.length;R++){const O=_[R];O.setSize&&O.setSize(M,I)}},this.begin=function(P,M){if(g||P.toneMapping===Vi&&_.length===0)return!1;if(x=M,M!==null){const I=M.width,R=M.height;(a.width!==I||a.height!==R)&&this.setSize(I,R)}return T===!1&&P.setRenderTarget(a),y=P.toneMapping,P.toneMapping=Vi,!0},this.hasRenderPass=function(){return T},this.end=function(P,M){P.toneMapping=y,g=!0;let I=a,R=o;for(let O=0;O<_.length;O++){const S=_[O];if(S.enabled!==!1&&(S.render(P,R,I,M),S.needsSwap!==!1)){const w=I;I=R,R=w}}if(u!==P.outputColorSpace||p!==P.toneMapping){u=P.outputColorSpace,p=P.toneMapping,l.defines={},yt.getTransfer(u)===Nt&&(l.defines.SRGB_TRANSFER="");const O=bM[p];O&&(l.defines[O]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(x),P.render(h,f),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const F0=new Tn,xu=new zs(1,1),B0=new y0,z0=new Bx,k0=new C0,Ld=[],Nd=[],Od=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ld[r];if(s===void 0&&(s=new Float32Array(r),Ld[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lc(n,e){let t=Nd[e];t===void 0&&(t=new Int32Array(e),Nd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function TM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function AM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function PM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Fd.set(i),n.uniformMatrix2fv(this.addr,!1,Fd),cn(t,i)}}function IM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Ud.set(i),n.uniformMatrix3fv(this.addr,!1,Ud),cn(t,i)}}function DM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Od.set(i),n.uniformMatrix4fv(this.addr,!1,Od),cn(t,i)}}function LM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function OM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function FM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function VM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xu.compareFunction=t.isReversedDepthBuffer()?dh:hh,s=xu):s=F0,t.setTexture2D(e||s,r)}function HM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||z0,r)}function GM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||k0,r)}function WM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||B0,r)}function $M(n){switch(n){case 5126:return TM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return IM;case 35676:return DM;case 5124:case 35670:return LM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}function XM(n,e){n.uniform1fv(this.addr,e)}function qM(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function YM(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function KM(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function ZM(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JM(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jM(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function QM(n,e){n.uniform1iv(this.addr,e)}function eE(n,e){n.uniform2iv(this.addr,e)}function tE(n,e){n.uniform3iv(this.addr,e)}function nE(n,e){n.uniform4iv(this.addr,e)}function iE(n,e){n.uniform1uiv(this.addr,e)}function rE(n,e){n.uniform2uiv(this.addr,e)}function sE(n,e){n.uniform3uiv(this.addr,e)}function aE(n,e){n.uniform4uiv(this.addr,e)}function oE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=xu:a=F0;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function lE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||z0,s[a])}function cE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||k0,s[a])}function fE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||B0,s[a])}function uE(n){switch(n){case 5126:return XM;case 35664:return qM;case 35665:return YM;case 35666:return KM;case 35674:return ZM;case 35675:return JM;case 35676:return jM;case 5124:case 35670:return QM;case 35667:case 35671:return eE;case 35668:case 35672:return tE;case 35669:case 35673:return nE;case 5125:return iE;case 36294:return rE;case 36295:return sE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return cE;case 36289:case 36303:case 36311:case 36292:return fE}}class hE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$M(t.type)}}class dE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uE(t.type)}}class pE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function Bd(n,e){n.seq.push(e),n.map[e.id]=e}function mE(n,e,t){const i=n.name,r=i.length;for(jc.lastIndex=0;;){const s=jc.exec(i),a=jc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Bd(t,l===void 0?new hE(o,n,e):new dE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new pE(o),Bd(t,f)),t=f}}}class rl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);mE(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function zd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gE=37297;let _E=0;function xE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const kd=new lt;function vE(n){yt._getMatrix(kd,yt.workingColorSpace,n);const e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case _l:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Vd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xE(n.getShaderSource(e),o)}else return s}function yE(n,e){const t=vE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const SE={[r0]:"Linear",[s0]:"Reinhard",[a0]:"Cineon",[o0]:"ACESFilmic",[c0]:"AgX",[f0]:"Neutral",[l0]:"Custom"};function ME(n,e){const t=SE[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Co=new X;function EE(){yt.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),e=Co.y.toFixed(4),t=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function wE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ba(n){return n!==""}function Hd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(n){return n.replace(AE,CE)}const RE=new Map;function CE(n,e){let t=dt[e];if(t===void 0){const i=RE.get(e);if(i!==void 0)t=dt[i],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vu(t)}const PE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(n){return n.replace(PE,IE)}function IE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $d(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const DE={[Qo]:"SHADOWMAP_TYPE_PCF",[Ea]:"SHADOWMAP_TYPE_VSM"};function LE(n){return DE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NE={[Zr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function OE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":NE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const UE={[Bs]:"ENVMAP_MODE_REFRACTION"};function FE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":UE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BE={[i0]:"ENVMAP_BLENDING_MULTIPLY",[nx]:"ENVMAP_BLENDING_MIX",[ix]:"ENVMAP_BLENDING_ADD"};function zE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":BE[n.combine]||"ENVMAP_BLENDING_NONE"}function kE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function VE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=LE(t),l=OE(t),h=FE(t),f=zE(t),u=kE(t),p=bE(t),g=wE(s),y=r.createProgram();let x,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ba).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ba).join(`
`),_.length>0&&(_+=`
`)):(x=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),_=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?dt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?ME("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,yE("linearToOutputTexel",t.outputColorSpace),EE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),a=vu(a),a=Hd(a,t),a=Gd(a,t),o=vu(o),o=Hd(o,t),o=Gd(o,t),a=Wd(a),o=Wd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=T+x+a,M=T+_+o,I=zd(r,r.VERTEX_SHADER,P),R=zd(r,r.FRAGMENT_SHADER,M);r.attachShader(y,I),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function O(N){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(I)||"",k=r.getShaderInfoLog(R)||"",A=z.trim(),U=L.trim(),F=k.trim();let G=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,I,R);else{const te=Vd(r,I,"vertex"),ue=Vd(r,R,"fragment");Mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+A+`
`+te+`
`+ue)}else A!==""?rt("WebGLProgram: Program Info Log:",A):(U===""||F==="")&&(Z=!1);Z&&(N.diagnostics={runnable:G,programLog:A,vertexShader:{log:U,prefix:x},fragmentShader:{log:F,prefix:_}})}r.deleteShader(I),r.deleteShader(R),S=new rl(r,y),w=TE(r,y)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(y,gE)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_E++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=R,this}let HE=0;class GE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WE(e),t.set(e,i)),i}}class WE{constructor(e){this.id=HE++,this.code=e,this.usedTimes=0}}function $E(n){return n===Jr||n===pl||n===ml}function XE(n,e,t,i,r,s){const a=new S0,o=new GE,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,w,B,N,z,L){const k=N.fog,A=z.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=e.get(S.envMap||U,F),Z=G&&G.mapping===rc?G.image.height:null,te=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&rt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ue=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,pe=ue!==void 0?ue.length:0;let ze=0;A.morphAttributes.position!==void 0&&(ze=1),A.morphAttributes.normal!==void 0&&(ze=2),A.morphAttributes.color!==void 0&&(ze=3);let at,et,he,be;if(te){const He=Gn[te];at=He.vertexShader,et=He.fragmentShader}else{at=S.vertexShader,et=S.fragmentShader;const He=o.getVertexShaderStage(S),Gt=o.getFragmentShaderStage(S);o.update(S,He,Gt),he=He.id,be=Gt.id}const ve=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),Ae=z.isInstancedMesh===!0,Ve=z.isBatchedMesh===!0,tt=!!S.map,qe=!!S.matcap,vt=!!G,gt=!!S.aoMap,_t=!!S.lightMap,zt=!!S.bumpMap&&S.wireframe===!1,jt=!!S.normalMap,Yt=!!S.displacementMap,Pt=!!S.emissiveMap,It=!!S.metalnessMap,Kt=!!S.roughnessMap,Y=S.anisotropy>0,pn=S.clearcoat>0,Tt=S.dispersion>0,V=S.iridescence>0,E=S.sheen>0,j=S.transmission>0,se=Y&&!!S.anisotropyMap,ce=pn&&!!S.clearcoatMap,we=pn&&!!S.clearcoatNormalMap,Se=pn&&!!S.clearcoatRoughnessMap,fe=V&&!!S.iridescenceMap,ge=V&&!!S.iridescenceThicknessMap,Me=E&&!!S.sheenColorMap,Ye=E&&!!S.sheenRoughnessMap,De=!!S.specularMap,Ee=!!S.specularColorMap,$e=!!S.specularIntensityMap,nt=j&&!!S.transmissionMap,Ze=j&&!!S.thicknessMap,W=!!S.gradientMap,Te=!!S.alphaMap,le=S.alphaTest>0,Ce=!!S.alphaHash,Pe=!!S.extensions;let xe=Vi;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Ke={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:at,fragmentShader:et,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ve,batchingColor:Ve&&z._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,instancingMorph:Ae&&z.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:qe,envMap:vt,envMapMode:vt&&G.mapping,envMapCubeUVHeight:Z,aoMap:gt,lightMap:_t,bumpMap:zt,normalMap:jt,displacementMap:Yt,emissiveMap:Pt,normalMapObjectSpace:jt&&S.normalMapType===ax,normalMapTangentSpace:jt&&S.normalMapType===mu,packedNormalMap:jt&&S.normalMapType===mu&&$E(S.normalMap.format),metalnessMap:It,roughnessMap:Kt,anisotropy:Y,anisotropyMap:se,clearcoat:pn,clearcoatMap:ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Se,dispersion:Tt,iridescence:V,iridescenceMap:fe,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:De,specularColorMap:Ee,specularIntensityMap:$e,transmission:j,transmissionMap:nt,thicknessMap:Ze,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:le,alphaHash:Ce,combine:S.combine,mapUv:tt&&g(S.map.channel),aoMapUv:gt&&g(S.aoMap.channel),lightMapUv:_t&&g(S.lightMap.channel),bumpMapUv:zt&&g(S.bumpMap.channel),normalMapUv:jt&&g(S.normalMap.channel),displacementMapUv:Yt&&g(S.displacementMap.channel),emissiveMapUv:Pt&&g(S.emissiveMap.channel),metalnessMapUv:It&&g(S.metalnessMap.channel),roughnessMapUv:Kt&&g(S.roughnessMap.channel),anisotropyMapUv:se&&g(S.anisotropyMap.channel),clearcoatMapUv:ce&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&g(S.sheenRoughnessMap.channel),specularMapUv:De&&g(S.specularMap.channel),specularColorMapUv:Ee&&g(S.specularColorMap.channel),specularIntensityMapUv:$e&&g(S.specularIntensityMap.channel),transmissionMapUv:nt&&g(S.transmissionMap.channel),thicknessMapUv:Ze&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(jt||Y),vertexNormals:!!A.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!A.attributes.uv&&(tt||Te),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||A.attributes.normal===void 0&&jt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Qe,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Nt,decodeVideoTextureEmissive:Pt&&S.emissiveMap.isVideoTexture===!0&&yt.getTransfer(S.emissiveMap.colorSpace)===Nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function x(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(_(w,S),T(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function T(S,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function P(S){const w=p[S.type];let B;if(w){const N=Gn[w];B=vh.clone(N.uniforms)}else B=S.uniforms;return B}function M(S,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new VE(n,w,S,r),l.push(B),h.set(w,B)),B}function I(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),h.delete(S.cacheKey),S.destroy()}}function R(S){o.remove(S)}function O(){o.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:M,releaseProgram:I,releaseShaderCache:R,programs:l,dispose:O}}function qE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function YE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,y,x,_){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:x,group:_},n[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=g,T.materialVariant=a(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=x,T.group=_),e++,T}function c(u,p,g,y,x,_){const T=o(u,p,g,y,x,_);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):t.push(T)}function l(u,p,g,y,x,_){const T=o(u,p,g,y,x,_);g.transmission>0?i.unshift(T):g.transparent===!0?r.unshift(T):t.unshift(T)}function h(u,p,g){t.length>1&&t.sort(u||YE),i.length>1&&i.sort(p||Xd),r.length>1&&r.sort(p||Xd),g&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function KE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new qd,n.set(i,[a])):r>=s.length?(a=new qd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new mt};break;case"SpotLight":t={position:new X,direction:new X,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function JE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jE=0;function QE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eb(n){const e=new ZE,t=JE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new qt,a=new qt;function o(l){let h=0,f=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,x=0,_=0,T=0,P=0,M=0,I=0,R=0,O=0;l.sort(QE);for(let w=0,B=l.length;w<B;w++){const N=l[w],z=N.color,L=N.intensity,k=N.distance;let A=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Jr?A=N.shadow.map.texture:A=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*L,f+=z.g*L,u+=z.b*L;else if(N.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(N.sh.coefficients[U],L);O++}else if(N.isDirectionalLight){const U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const F=N.shadow,G=t.get(N);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=A,i.directionalShadowMatrix[p]=N.shadow.matrix,T++}i.directional[p]=U,p++}else if(N.isSpotLight){const U=e.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(z).multiplyScalar(L),U.distance=k,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,i.spot[y]=U;const F=N.shadow;if(N.map&&(i.spotLightMap[I]=N.map,I++,F.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[y]=F.matrix,N.castShadow){const G=t.get(N);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=A,M++}y++}else if(N.isRectAreaLight){const U=e.get(N);U.color.copy(z).multiplyScalar(L),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=U,x++}else if(N.isPointLight){const U=e.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){const F=N.shadow,G=t.get(N);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=N.shadow.matrix,P++}i.point[g]=U,g++}else if(N.isHemisphereLight){const U=e.get(N);U.skyColor.copy(N.color).multiplyScalar(L),U.groundColor.copy(N.groundColor).multiplyScalar(L),i.hemi[_]=U,_++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==g||S.spotLength!==y||S.rectAreaLength!==x||S.hemiLength!==_||S.numDirectionalShadows!==T||S.numPointShadows!==P||S.numSpotShadows!==M||S.numSpotMaps!==I||S.numLightProbes!==O)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=x,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=M+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=O,S.directionalLength=p,S.pointLength=g,S.spotLength=y,S.rectAreaLength=x,S.hemiLength=_,S.numDirectionalShadows=T,S.numPointShadows=P,S.numSpotShadows=M,S.numSpotMaps=I,S.numLightProbes=O,i.version=jE++)}function c(l,h){let f=0,u=0,p=0,g=0,y=0;const x=h.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){const P=l[_];if(P.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(P.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),p++}else if(P.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(P.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(P.width*.5,0,0),M.halfHeight.set(0,P.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(P.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(x),u++}else if(P.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(P.matrixWorld),M.direction.transformDirection(x),y++}}}return{setup:o,setupView:c,state:i}}function Yd(n){const e=new eb(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function tb(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yd(n),e.set(r,[o])):s>=a.length?(o=new Yd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
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
}`,rb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],sb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Kd=new qt,da=new X,Qc=new X;function ab(n,e,t){let i=new gh;const r=new ft,s=new ft,a=new Ut,o=new cv,c=new fv,l={},h=t.maxTextureSize,f={[Rr]:zn,[zn]:Rr,[Mi]:Mi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Bt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let _=this.type;this.render=function(R,O,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===F_&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qo);const w=n.getRenderTarget(),B=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ir),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const L=_!==this.type;L&&O.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(A=>A.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,A=R.length;k<A;k++){const U=R[k],F=U.shadow;if(F===void 0){rt("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();r.multiply(G),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,F.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ea){if(U.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hi(r.x,r.y,{format:Jr,type:cr,minFilter:wn,magFilter:wn,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new zs(r.x,r.y,Bi),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=fr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vn,F.map.depthTexture.magFilter=vn}else U.isPointLight?(F.map=new U0(r.x),F.map.depthTexture=new iv(r.x,Xi)):(F.map=new Hi(r.x,r.y),F.map.depthTexture=new zs(r.x,r.y,Xi)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=fr,this.type===Qo?(F.map.depthTexture.compareFunction=Z?dh:hh,F.map.depthTexture.minFilter=wn,F.map.depthTexture.magFilter=wn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vn,F.map.depthTexture.magFilter=vn);F.camera.updateProjectionMatrix()}const te=F.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<te;ue++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(F.map),n.clear());const pe=F.getViewport(ue);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),z.viewport(a)}if(U.isPointLight){const pe=F.camera,ze=F.matrix,at=U.distance||pe.far;at!==pe.far&&(pe.far=at,pe.updateProjectionMatrix()),da.setFromMatrixPosition(U.matrixWorld),pe.position.copy(da),Qc.copy(pe.position),Qc.add(rb[ue]),pe.up.copy(sb[ue]),pe.lookAt(Qc),pe.updateMatrixWorld(),ze.makeTranslation(-da.x,-da.y,-da.z),Kd.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Kd,pe.coordinateSystem,pe.reversedDepth)}else F.updateMatrices(U);i=F.getFrustum(),M(O,S,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===Ea&&T(F,S),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(w,B,N)};function T(R,O){const S=e.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hi(r.x,r.y,{format:Jr,type:cr})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(O,null,S,u,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(O,null,S,p,y,null)}function P(R,O,S,w){let B=null;const N=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)B=N;else if(B=S.isPointLight===!0?c:o,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const z=B.uuid,L=O.uuid;let k=l[z];k===void 0&&(k={},l[z]=k);let A=k[L];A===void 0&&(A=B.clone(),k[L]=A,O.addEventListener("dispose",I)),B=A}if(B.visible=O.visible,B.wireframe=O.wireframe,w===Ea?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:f[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const z=n.properties.get(B);z.light=S}return B}function M(R,O,S,w,B){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===Ea)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const L=e.update(R),k=R.material;if(Array.isArray(k)){const A=L.groups;for(let U=0,F=A.length;U<F;U++){const G=A[U],Z=k[G.materialIndex];if(Z&&Z.visible){const te=P(R,Z,w,B);R.onBeforeShadow(n,R,O,S,L,te,G),n.renderBufferDirect(S,null,L,te,R,G),R.onAfterShadow(n,R,O,S,L,te,G)}}}else if(k.visible){const A=P(R,k,w,B);R.onBeforeShadow(n,R,O,S,L,A,null),n.renderBufferDirect(S,null,L,A,R,null),R.onAfterShadow(n,R,O,S,L,A,null)}}const z=R.children;for(let L=0,k=z.length;L<k;L++)M(z[L],O,S,w,B)}function I(R){R.target.removeEventListener("dispose",I);for(const S in l){const w=l[S],B=R.target.uuid;B in w&&(w[B].dispose(),delete w[B])}}}function ob(n,e){function t(){let W=!1;const Te=new Ut;let le=null;const Ce=new Ut(0,0,0,0);return{setMask:function(Pe){le!==Pe&&!W&&(n.colorMask(Pe,Pe,Pe,Pe),le=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,xe,Ke,He,Gt){Gt===!0&&(Pe*=He,xe*=He,Ke*=He),Te.set(Pe,xe,Ke,He),Ce.equals(Te)===!1&&(n.clearColor(Pe,xe,Ke,He),Ce.copy(Te))},reset:function(){W=!1,le=null,Ce.set(-1,0,0,0)}}}function i(){let W=!1,Te=!1,le=null,Ce=null,Pe=null;return{setReversed:function(xe){if(Te!==xe){const Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;const He=Pe;Pe=null,this.setClear(He)}},getReversed:function(){return Te},setTest:function(xe){xe?ve(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(xe){le!==xe&&!W&&(n.depthMask(xe),le=xe)},setFunc:function(xe){if(Te&&(xe=gx[xe]),Ce!==xe){switch(xe){case Pf:n.depthFunc(n.NEVER);break;case If:n.depthFunc(n.ALWAYS);break;case Df:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Lf:n.depthFunc(n.EQUAL);break;case Nf:n.depthFunc(n.GEQUAL);break;case Of:n.depthFunc(n.GREATER);break;case Uf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Pe!==xe&&(Pe=xe,Te&&(xe=1-xe),n.clearDepth(xe))},reset:function(){W=!1,le=null,Ce=null,Pe=null,Te=!1}}}function r(){let W=!1,Te=null,le=null,Ce=null,Pe=null,xe=null,Ke=null,He=null,Gt=null;return{setTest:function(Dt){W||(Dt?ve(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Dt){Te!==Dt&&!W&&(n.stencilMask(Dt),Te=Dt)},setFunc:function(Dt,kn,qn){(le!==Dt||Ce!==kn||Pe!==qn)&&(n.stencilFunc(Dt,kn,qn),le=Dt,Ce=kn,Pe=qn)},setOp:function(Dt,kn,qn){(xe!==Dt||Ke!==kn||He!==qn)&&(n.stencilOp(Dt,kn,qn),xe=Dt,Ke=kn,He=qn)},setLocked:function(Dt){W=Dt},setClear:function(Dt){Gt!==Dt&&(n.clearStencil(Dt),Gt=Dt)},reset:function(){W=!1,Te=null,le=null,Ce=null,Pe=null,xe=null,Ke=null,He=null,Gt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],y=null,x=!1,_=null,T=null,P=null,M=null,I=null,R=null,O=null,S=new mt(0,0,0),w=0,B=!1,N=null,z=null,L=null,k=null,A=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=G>=2);let te=null,ue={};const pe=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),at=new Ut().fromArray(pe),et=new Ut().fromArray(ze);function he(W,Te,le,Ce){const Pe=new Uint8Array(4),xe=n.createTexture();n.bindTexture(W,xe),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<le;Ke++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return xe}const be={};be[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Fs),zt(!1),jt(Yh),ve(n.CULL_FACE),gt(ir);function ve(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function Qe(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function Ae(W,Te){return u[W]!==Te?(n.bindFramebuffer(W,Te),u[W]=Te,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ve(W,Te){let le=g,Ce=!1;if(W){le=p.get(Te),le===void 0&&(le=[],p.set(Te,le));const Pe=W.textures;if(le.length!==Pe.length||le[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ke=Pe.length;xe<Ke;xe++)le[xe]=n.COLOR_ATTACHMENT0+xe;le.length=Pe.length,Ce=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(le)}function tt(W){return y!==W?(n.useProgram(W),y=W,!0):!1}const qe={[Vr]:n.FUNC_ADD,[z_]:n.FUNC_SUBTRACT,[k_]:n.FUNC_REVERSE_SUBTRACT};qe[V_]=n.MIN,qe[H_]=n.MAX;const vt={[G_]:n.ZERO,[W_]:n.ONE,[$_]:n.SRC_COLOR,[Rf]:n.SRC_ALPHA,[J_]:n.SRC_ALPHA_SATURATE,[K_]:n.DST_COLOR,[q_]:n.DST_ALPHA,[X_]:n.ONE_MINUS_SRC_COLOR,[Cf]:n.ONE_MINUS_SRC_ALPHA,[Z_]:n.ONE_MINUS_DST_COLOR,[Y_]:n.ONE_MINUS_DST_ALPHA,[j_]:n.CONSTANT_COLOR,[Q_]:n.ONE_MINUS_CONSTANT_COLOR,[ex]:n.CONSTANT_ALPHA,[tx]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(W,Te,le,Ce,Pe,xe,Ke,He,Gt,Dt){if(W===ir){x===!0&&(Qe(n.BLEND),x=!1);return}if(x===!1&&(ve(n.BLEND),x=!0),W!==B_){if(W!==_||Dt!==B){if((T!==Vr||I!==Vr)&&(n.blendEquation(n.FUNC_ADD),T=Vr,I=Vr),Dt)switch(W){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFunc(n.ONE,n.ONE);break;case Zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zh:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jh:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",W);break}P=null,M=null,R=null,O=null,S.set(0,0,0),w=0,_=W,B=Dt}return}Pe=Pe||Te,xe=xe||le,Ke=Ke||Ce,(Te!==T||Pe!==I)&&(n.blendEquationSeparate(qe[Te],qe[Pe]),T=Te,I=Pe),(le!==P||Ce!==M||xe!==R||Ke!==O)&&(n.blendFuncSeparate(vt[le],vt[Ce],vt[xe],vt[Ke]),P=le,M=Ce,R=xe,O=Ke),(He.equals(S)===!1||Gt!==w)&&(n.blendColor(He.r,He.g,He.b,Gt),S.copy(He),w=Gt),_=W,B=!1}function _t(W,Te){W.side===Mi?Qe(n.CULL_FACE):ve(n.CULL_FACE);let le=W.side===zn;Te&&(le=!le),zt(le),W.blending===Ds&&W.transparent===!1?gt(ir):gt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),s.setMask(W.colorWrite);const Ce=W.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Pt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(W){N!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),N=W)}function jt(W){W!==O_?(ve(n.CULL_FACE),W!==z&&(W===Yh?n.cullFace(n.BACK):W===U_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),z=W}function Yt(W){W!==L&&(F&&n.lineWidth(W),L=W)}function Pt(W,Te,le){W?(ve(n.POLYGON_OFFSET_FILL),(k!==Te||A!==le)&&(k=Te,A=le,a.getReversed()&&(Te=-Te),n.polygonOffset(Te,le))):Qe(n.POLYGON_OFFSET_FILL)}function It(W){W?ve(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function Kt(W){W===void 0&&(W=n.TEXTURE0+U-1),te!==W&&(n.activeTexture(W),te=W)}function Y(W,Te,le){le===void 0&&(te===null?le=n.TEXTURE0+U-1:le=te);let Ce=ue[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},ue[le]=Ce),(Ce.type!==W||Ce.texture!==Te)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(W,Te||be[W]),Ce.type=W,Ce.texture=Te)}function pn(){const W=ue[te];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function E(){try{n.texSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function j(){try{n.texSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function we(){try{n.texStorage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Se(){try{n.texStorage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function fe(){try{n.texImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function ge(){try{n.texImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Me(W){return f[W]!==void 0?f[W]:n.getParameter(W)}function Ye(W,Te){f[W]!==Te&&(n.pixelStorei(W,Te),f[W]=Te)}function De(W){at.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),at.copy(W))}function Ee(W){et.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),et.copy(W))}function $e(W,Te){let le=l.get(Te);le===void 0&&(le=new WeakMap,l.set(Te,le));let Ce=le.get(W);Ce===void 0&&(Ce=n.getUniformBlockIndex(Te,W.name),le.set(W,Ce))}function nt(W,Te){const Ce=l.get(Te).get(W);c.get(Te)!==Ce&&(n.uniformBlockBinding(Te,Ce,W.__bindingPointIndex),c.set(Te,Ce))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,ue={},u={},p=new WeakMap,g=[],y=null,x=!1,_=null,T=null,P=null,M=null,I=null,R=null,O=null,S=new mt(0,0,0),w=0,B=!1,N=null,z=null,L=null,k=null,A=null,at.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ve,disable:Qe,bindFramebuffer:Ae,drawBuffers:Ve,useProgram:tt,setBlending:gt,setMaterial:_t,setFlipSided:zt,setCullFace:jt,setLineWidth:Yt,setPolygonOffset:Pt,setScissorTest:It,activeTexture:Kt,bindTexture:Y,unbindTexture:pn,compressedTexImage2D:Tt,compressedTexImage3D:V,texImage2D:fe,texImage3D:ge,pixelStorei:Ye,getParameter:Me,updateUBOMapping:$e,uniformBlockBinding:nt,texStorage2D:we,texStorage3D:Se,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:De,viewport:Ee,reset:Ze}}function lb(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(V,E){return g?new OffscreenCanvas(V,E):xl("canvas")}function x(V,E,j){let se=1;const ce=Tt(V);if((ce.width>j||ce.height>j)&&(se=j/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const we=Math.floor(se*ce.width),Se=Math.floor(se*ce.height);u===void 0&&(u=y(we,Se));const fe=E?y(we,Se):u;return fe.width=we,fe.height=Se,fe.getContext("2d").drawImage(V,0,0,we,Se),rt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+we+"x"+Se+")."),fe}else return"data"in V&&rt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),V;return V}function _(V){return V.generateMipmaps}function T(V){n.generateMipmap(V)}function P(V){return V.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?n.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(V,E,j,se,ce,we=!1){if(V!==null){if(n[V]!==void 0)return n[V];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let Se;se&&(Se=e.get("EXT_texture_norm16"),Se||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.R16_EXT),j===n.SHORT&&Se&&(fe=Se.R16_SNORM_EXT)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),E===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RG16_EXT),j===n.SHORT&&Se&&(fe=Se.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGB16_EXT),j===n.SHORT&&Se&&(fe=Se.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),E===n.RGBA){const ge=we?_l:yt.getTransfer(ce);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=ge===Nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGBA16_EXT),j===n.SHORT&&Se&&(fe=Se.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function I(V,E){let j;return V?E===null||E===Xi||E===Na?j=n.DEPTH24_STENCIL8:E===Bi?j=n.DEPTH32F_STENCIL8:E===La&&(j=n.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Na?j=n.DEPTH_COMPONENT24:E===Bi?j=n.DEPTH_COMPONENT32F:E===La&&(j=n.DEPTH_COMPONENT16),j}function R(V,E){return _(V)===!0||V.isFramebufferTexture&&V.minFilter!==vn&&V.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?E.mipmaps.length:1}function O(V){const E=V.target;E.removeEventListener("dispose",O),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function S(V){const E=V.target;E.removeEventListener("dispose",S),N(E)}function w(V){const E=i.get(V);if(E.__webglInit===void 0)return;const j=V.source,se=p.get(j);if(se){const ce=se[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&B(V),Object.keys(se).length===0&&p.delete(j)}i.remove(V)}function B(V){const E=i.get(V);n.deleteTexture(E.__webglTexture);const j=V.source,se=p.get(j);delete se[E.__cacheKey],a.memory.textures--}function N(V){const E=i.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),i.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ce=0;ce<E.__webglFramebuffer[se].length;ce++)n.deleteFramebuffer(E.__webglFramebuffer[se][ce]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=V.textures;for(let se=0,ce=j.length;se<ce;se++){const we=i.get(j[se]);we.__webglTexture&&(n.deleteTexture(we.__webglTexture),a.memory.textures--),i.remove(j[se])}i.remove(V)}let z=0;function L(){z=0}function k(){return z}function A(V){z=V}function U(){const V=z;return V>=r.maxTextures&&rt("WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),z+=1,V}function F(V){const E=[];return E.push(V.wrapS),E.push(V.wrapT),E.push(V.wrapR||0),E.push(V.magFilter),E.push(V.minFilter),E.push(V.anisotropy),E.push(V.internalFormat),E.push(V.format),E.push(V.type),E.push(V.generateMipmaps),E.push(V.premultiplyAlpha),E.push(V.flipY),E.push(V.unpackAlignment),E.push(V.colorSpace),E.join()}function G(V,E){const j=i.get(V);if(V.isVideoTexture&&Y(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&j.__version!==V.version){const se=V.image;if(se===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(j,V,E);return}}else V.isExternalTexture&&(j.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function Z(V,E){const j=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&j.__version!==V.version){Qe(j,V,E);return}else V.isExternalTexture&&(j.__webglTexture=V.sourceTexture?V.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function te(V,E){const j=i.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&j.__version!==V.version){Qe(j,V,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function ue(V,E){const j=i.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&j.__version!==V.version){Ae(j,V,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const pe={[Ff]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[Bf]:n.MIRRORED_REPEAT},ze={[vn]:n.NEAREST,[rx]:n.NEAREST_MIPMAP_NEAREST,[io]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Mc]:n.LINEAR_MIPMAP_NEAREST,[Wr]:n.LINEAR_MIPMAP_LINEAR},at={[ox]:n.NEVER,[hx]:n.ALWAYS,[lx]:n.LESS,[hh]:n.LEQUAL,[cx]:n.EQUAL,[dh]:n.GEQUAL,[fx]:n.GREATER,[ux]:n.NOTEQUAL};function et(V,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Mc||E.magFilter===io||E.magFilter===Wr||E.minFilter===wn||E.minFilter===Mc||E.minFilter===io||E.minFilter===Wr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(V,n.TEXTURE_WRAP_S,pe[E.wrapS]),n.texParameteri(V,n.TEXTURE_WRAP_T,pe[E.wrapT]),(V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY)&&n.texParameteri(V,n.TEXTURE_WRAP_R,pe[E.wrapR]),n.texParameteri(V,n.TEXTURE_MAG_FILTER,ze[E.magFilter]),n.texParameteri(V,n.TEXTURE_MIN_FILTER,ze[E.minFilter]),E.compareFunction&&(n.texParameteri(V,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(V,n.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==io&&E.minFilter!==Wr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(V,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function he(V,E){let j=!1;V.__webglInit===void 0&&(V.__webglInit=!0,E.addEventListener("dispose",O));const se=E.source;let ce=p.get(se);ce===void 0&&(ce={},p.set(se,ce));const we=F(E);if(we!==V.__cacheKey){ce[we]===void 0&&(ce[we]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ce[we].usedTimes++;const Se=ce[V.__cacheKey];Se!==void 0&&(ce[V.__cacheKey].usedTimes--,Se.usedTimes===0&&B(E)),V.__cacheKey=we,V.__webglTexture=ce[we].texture}return j}function be(V,E,j){return Math.floor(Math.floor(V/j)/E)}function ve(V,E,j,se){const we=V.updateRanges;if(we.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,se,E.data);else{we.sort((Ye,De)=>Ye.start-De.start);let Se=0;for(let Ye=1;Ye<we.length;Ye++){const De=we[Se],Ee=we[Ye],$e=De.start+De.count,nt=be(Ee.start,E.width,4),Ze=be(De.start,E.width,4);Ee.start<=$e+1&&nt===Ze&&be(Ee.start+Ee.count-1,E.width,4)===nt?De.count=Math.max(De.count,Ee.start+Ee.count-De.start):(++Se,we[Se]=Ee)}we.length=Se+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,De=we.length;Ye<De;Ye++){const Ee=we[Ye],$e=Math.floor(Ee.start/4),nt=Math.ceil(Ee.count/4),Ze=$e%E.width,W=Math.floor($e/E.width),Te=nt,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,Ze,W,Te,le,j,se,E.data)}V.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Qe(V,E,j){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const ce=he(V,E),we=E.source;t.bindTexture(se,V.__webglTexture,n.TEXTURE0+j);const Se=i.get(we);if(we.version!==Se.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const le=yt.getPrimaries(yt.workingColorSpace),Ce=E.colorSpace===Er?null:yt.getPrimaries(E.colorSpace),Pe=E.colorSpace===Er||le===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=x(E.image,!1,r.maxTextureSize);ge=pn(E,ge);const Me=s.convert(E.format,E.colorSpace),Ye=s.convert(E.type);let De=M(E.internalFormat,Me,Ye,E.normalized,E.colorSpace,E.isVideoTexture);et(se,E);let Ee;const $e=E.mipmaps,nt=E.isVideoTexture!==!0,Ze=Se.__version===void 0||ce===!0,W=we.dataReady,Te=R(E,ge);if(E.isDepthTexture)De=I(E.format===$r,E.type),Ze&&(nt?t.texStorage2D(n.TEXTURE_2D,1,De,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Me,Ye,null));else if(E.isDataTexture)if($e.length>0){nt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,De,$e[0].width,$e[0].height);for(let le=0,Ce=$e.length;le<Ce;le++)Ee=$e[le],nt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,le,De,Ee.width,Ee.height,0,Me,Ye,Ee.data);E.generateMipmaps=!1}else nt?(Ze&&t.texStorage2D(n.TEXTURE_2D,Te,De,ge.width,ge.height),W&&ve(E,ge,Me,Ye)):t.texImage2D(n.TEXTURE_2D,0,De,ge.width,ge.height,0,Me,Ye,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,$e[0].width,$e[0].height,ge.depth);for(let le=0,Ce=$e.length;le<Ce;le++)if(Ee=$e[le],E.format!==wi)if(Me!==null)if(nt){if(W)if(E.layerUpdates.size>0){const Pe=Td(Ee.width,Ee.height,E.format,E.type);for(const xe of E.layerUpdates){const Ke=Ee.data.subarray(xe*Pe/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Pe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,xe,Ee.width,Ee.height,1,Me,Ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,ge.depth,Me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,De,Ee.width,Ee.height,ge.depth,0,Ee.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,ge.depth,Me,Ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,De,Ee.width,Ee.height,ge.depth,0,Me,Ye,Ee.data)}else{nt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,De,$e[0].width,$e[0].height);for(let le=0,Ce=$e.length;le<Ce;le++)Ee=$e[le],E.format!==wi?Me!==null?nt?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,De,Ee.width,Ee.height,0,Ee.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,le,De,Ee.width,Ee.height,0,Me,Ye,Ee.data)}else if(E.isDataArrayTexture)if(nt){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,De,ge.width,ge.height,ge.depth),W)if(E.layerUpdates.size>0){const le=Td(ge.width,ge.height,E.format,E.type);for(const Ce of E.layerUpdates){const Pe=ge.data.subarray(Ce*le/ge.data.BYTES_PER_ELEMENT,(Ce+1)*le/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ce,ge.width,ge.height,1,Me,Ye,Pe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Me,Ye,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ge.width,ge.height,ge.depth,0,Me,Ye,ge.data);else if(E.isData3DTexture)nt?(Ze&&t.texStorage3D(n.TEXTURE_3D,Te,De,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Me,Ye,ge.data)):t.texImage3D(n.TEXTURE_3D,0,De,ge.width,ge.height,ge.depth,0,Me,Ye,ge.data);else if(E.isFramebufferTexture){if(Ze)if(nt)t.texStorage2D(n.TEXTURE_2D,Te,De,ge.width,ge.height);else{let le=ge.width,Ce=ge.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,De,le,Ce,0,Me,Ye,null),le>>=1,Ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ge.parentNode!==le){le.appendChild(ge),f.add(E),le.onpaint=Ce=>{const Pe=Ce.changedElements;for(const xe of f)Pe.includes(xe.image)&&(xe.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Pe=n.RGBA,xe=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,xe,Ke,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(nt&&Ze){const le=Tt($e[0]);t.texStorage2D(n.TEXTURE_2D,Te,De,le.width,le.height)}for(let le=0,Ce=$e.length;le<Ce;le++)Ee=$e[le],nt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,Ye,Ee):t.texImage2D(n.TEXTURE_2D,le,De,Me,Ye,Ee);E.generateMipmaps=!1}else if(nt){if(Ze){const le=Tt(ge);t.texStorage2D(n.TEXTURE_2D,Te,De,le.width,le.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ye,ge)}else t.texImage2D(n.TEXTURE_2D,0,De,Me,Ye,ge);_(E)&&T(se),Se.__version=we.version,E.onUpdate&&E.onUpdate(E)}V.__version=E.version}function Ae(V,E,j){if(E.image.length!==6)return;const se=he(V,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+j);const we=i.get(ce);if(ce.version!==we.__version||se===!0){t.activeTexture(n.TEXTURE0+j);const Se=yt.getPrimaries(yt.workingColorSpace),fe=E.colorSpace===Er?null:yt.getPrimaries(E.colorSpace),ge=E.colorSpace===Er||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,De=[];for(let xe=0;xe<6;xe++)!Me&&!Ye?De[xe]=x(E.image[xe],!0,r.maxCubemapSize):De[xe]=Ye?E.image[xe].image:E.image[xe],De[xe]=pn(E,De[xe]);const Ee=De[0],$e=s.convert(E.format,E.colorSpace),nt=s.convert(E.type),Ze=M(E.internalFormat,$e,nt,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Te=we.__version===void 0||se===!0,le=ce.dataReady;let Ce=R(E,Ee);et(n.TEXTURE_CUBE_MAP,E);let Pe;if(Me){W&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ze,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){Pe=De[xe].mipmaps;for(let Ke=0;Ke<Pe.length;Ke++){const He=Pe[Ke];E.format!==wi?$e!==null?W?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,He.width,He.height,$e,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,Ze,He.width,He.height,0,He.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,0,0,He.width,He.height,$e,nt,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke,Ze,He.width,He.height,0,$e,nt,He.data)}}}else{if(Pe=E.mipmaps,W&&Te){Pe.length>0&&Ce++;const xe=Tt(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Ze,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ye){W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,De[xe].width,De[xe].height,$e,nt,De[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,De[xe].width,De[xe].height,0,$e,nt,De[xe].data);for(let Ke=0;Ke<Pe.length;Ke++){const Gt=Pe[Ke].image[xe].image;W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,Gt.width,Gt.height,$e,nt,Gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,Ze,Gt.width,Gt.height,0,$e,nt,Gt.data)}}else{W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,$e,nt,De[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,$e,nt,De[xe]);for(let Ke=0;Ke<Pe.length;Ke++){const He=Pe[Ke];W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,0,0,$e,nt,He.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ke+1,Ze,$e,nt,He.image[xe])}}}_(E)&&T(n.TEXTURE_CUBE_MAP),we.__version=ce.version,E.onUpdate&&E.onUpdate(E)}V.__version=E.version}function Ve(V,E,j,se,ce,we){const Se=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),ge=M(j.internalFormat,Se,fe,j.normalized,j.colorSpace),Me=i.get(E),Ye=i.get(j);if(Ye.__renderTarget=E,!Me.__hasExternalTextures){const De=Math.max(1,E.width>>we),Ee=Math.max(1,E.height>>we);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,we,ge,De,Ee,E.depth,0,Se,fe,null):t.texImage2D(ce,we,ge,De,Ee,0,Se,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,V),Kt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ce,Ye.__webglTexture,0,It(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ce,Ye.__webglTexture,we),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(V,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,V),E.depthBuffer){const se=E.depthTexture,ce=se&&se.isDepthTexture?se.type:null,we=I(E.stencilBuffer,ce),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(E),we,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(E),we,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,we,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,V)}else{const se=E.textures;for(let ce=0;ce<se.length;ce++){const we=se[ce],Se=s.convert(we.format,we.colorSpace),fe=s.convert(we.type),ge=M(we.internalFormat,Se,fe,we.normalized,we.colorSpace);Kt(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(E),ge,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(E),ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(V,E,j){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,V),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(E.depthTexture);if(ce.__renderTarget=E,(!ce.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),et(n.TEXTURE_CUBE_MAP,E.depthTexture);const Me=s.convert(E.depthTexture.format),Ye=s.convert(E.depthTexture.type);let De;E.depthTexture.format===fr?De=n.DEPTH_COMPONENT24:E.depthTexture.format===$r&&(De=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,De,E.width,E.height,0,Me,Ye,null)}}else G(E.depthTexture,0);const we=ce.__webglTexture,Se=It(E),fe=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,ge=E.depthTexture.format===$r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===fr)Kt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,fe,we,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,ge,fe,we,0);else if(E.depthTexture.format===$r)Kt(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,fe,we,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,ge,fe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(V){const E=i.get(V),j=V.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==V.depthTexture){const se=V.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=se}if(V.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)qe(E.__webglFramebuffer[se],V,se);else{const se=V.texture.mipmaps;se&&se.length>0?qe(E.__webglFramebuffer[0],V,0):qe(E.__webglFramebuffer,V,0)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=n.createRenderbuffer(),tt(E.__webglDepthbuffer[se],V,!1);else{const ce=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,we)}}else{const se=V.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),tt(E.__webglDepthbuffer,V,!1);else{const ce=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,we),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,we)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(V,E,j){const se=i.get(V);E!==void 0&&Ve(se.__webglFramebuffer,V,V.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&vt(V)}function _t(V){const E=V.texture,j=i.get(V),se=i.get(E);V.addEventListener("dispose",S);const ce=V.textures,we=V.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,a.memory.textures++),we){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let ge=0;ge<E.mipmaps.length;ge++)j.__webglFramebuffer[fe][ge]=n.createFramebuffer()}else j.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)j.__webglFramebuffer[fe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Se)for(let fe=0,ge=ce.length;fe<ge;fe++){const Me=i.get(ce[fe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(V.samples>0&&Kt(V)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const ge=ce[fe];j.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Me=s.convert(ge.format,ge.colorSpace),Ye=s.convert(ge.type),De=M(ge.internalFormat,Me,Ye,ge.normalized,ge.colorSpace,V.isXRRenderTarget===!0),Ee=It(V);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,De,V.width,V.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),V.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(j.__webglDepthRenderbuffer,V,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(we){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),et(n.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Ve(j.__webglFramebuffer[fe][ge],V,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else Ve(j.__webglFramebuffer[fe],V,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,ge=ce.length;fe<ge;fe++){const Me=ce[fe],Ye=i.get(Me);let De=n.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(De=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Ye.__webglTexture),et(De,Me),Ve(j.__webglFramebuffer,V,Me,n.COLOR_ATTACHMENT0+fe,De,0),_(Me)&&T(De)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(fe=V.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),et(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Ve(j.__webglFramebuffer[ge],V,E,n.COLOR_ATTACHMENT0,fe,ge);else Ve(j.__webglFramebuffer,V,E,n.COLOR_ATTACHMENT0,fe,0);_(E)&&T(fe),t.unbindTexture()}V.depthBuffer&&vt(V)}function zt(V){const E=V.textures;for(let j=0,se=E.length;j<se;j++){const ce=E[j];if(_(ce)){const we=P(V),Se=i.get(ce).__webglTexture;t.bindTexture(we,Se),T(we),t.unbindTexture()}}}const jt=[],Yt=[];function Pt(V){if(V.samples>0){if(Kt(V)===!1){const E=V.textures,j=V.width,se=V.height;let ce=n.COLOR_BUFFER_BIT;const we=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(V),fe=E.length>1;if(fe)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ge=V.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(E[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ce,n.NEAREST),c===!0&&(jt.length=0,Yt.length=0,jt.push(n.COLOR_ATTACHMENT0+Me),V.depthBuffer&&V.resolveDepthBuffer===!1&&(jt.push(we),Yt.push(we),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(E[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&c){const E=V.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function It(V){return Math.min(r.maxSamples,V.samples)}function Kt(V){const E=i.get(V);return V.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(V){const E=a.render.frame;h.get(V)!==E&&(h.set(V,E),V.update())}function pn(V,E){const j=V.colorSpace,se=V.format,ce=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||j!==gl&&j!==Er&&(yt.getTransfer(j)===Nt?(se!==wi||ce!==Qn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",j)),E}function Tt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(l.width=V.naturalWidth||V.width,l.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(l.width=V.displayWidth,l.height=V.displayHeight):(l.width=V.width,l.height=V.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=k,this.setTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=gt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cb(n,e){function t(i,r=Er){let s;const a=yt.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===ah)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===p0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===m0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===h0)return n.BYTE;if(i===d0)return n.SHORT;if(i===La)return n.UNSIGNED_SHORT;if(i===sh)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===cr)return n.HALF_FLOAT;if(i===g0)return n.ALPHA;if(i===_0)return n.RGB;if(i===wi)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===lh)return n.RED;if(i===ch)return n.RED_INTEGER;if(i===Jr)return n.RG;if(i===fh)return n.RG_INTEGER;if(i===uh)return n.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(a===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zf||i===kf||i===Vf||i===Hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gf||i===Wf||i===$f||i===Xf||i===qf||i===pl||i===Yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gf||i===Wf)return a===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$f)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xf)return s.COMPRESSED_R11_EAC;if(i===qf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pl)return s.COMPRESSED_RG11_EAC;if(i===Yf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kf||i===Zf||i===Jf||i===jf||i===Qf||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kf)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zf)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jf)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qf)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===iu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ru)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===su)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===au)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ou)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lu)return a===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cu||i===fu||i===uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cu)return a===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hu||i===du||i===ml||i===pu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
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

}`;class hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new I0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hi({vertexShader:fb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends ts{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",x=new hb,_={},T=t.getContextAttributes();let P=null,M=null;const I=[],R=[],O=new ft;let S=null;const w=new li;w.viewport=new Ut;const B=new li;B.viewport=new Ut;const N=[w,B],z=new xv;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let be=I[he];return be===void 0&&(be=new Rc,I[he]=be),be.getTargetRaySpace()},this.getControllerGrip=function(he){let be=I[he];return be===void 0&&(be=new Rc,I[he]=be),be.getGripSpace()},this.getHand=function(he){let be=I[he];return be===void 0&&(be=new Rc,I[he]=be),be.getHandSpace()};function A(he){const be=R.indexOf(he.inputSource);if(be===-1)return;const ve=I[be];ve!==void 0&&(ve.update(he.inputSource,he.frame,l||a),ve.dispatchEvent({type:he.type,data:he.inputSource}))}function U(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",F);for(let he=0;he<I.length;he++){const be=R[he];be!==null&&(R[he]=null,I[he].disconnect(be))}L=null,k=null,x.reset();for(const he in _)delete _[he];e.setRenderTarget(P),p=null,u=null,f=null,r=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){o=he,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",U),r.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(O),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Qe=null,Ae=null;T.depth&&(Ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?$r:fr,Qe=T.stencil?Na:Xi);const Ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ve),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Hi(u.textureWidth,u.textureHeight,{format:wi,type:Qn,depthTexture:new zs(u.textureWidth,u.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Hi(p.framebufferWidth,p.framebufferHeight,{format:wi,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(he){for(let be=0;be<he.removed.length;be++){const ve=he.removed[be],Qe=R.indexOf(ve);Qe>=0&&(R[Qe]=null,I[Qe].disconnect(ve))}for(let be=0;be<he.added.length;be++){const ve=he.added[be];let Qe=R.indexOf(ve);if(Qe===-1){for(let Ve=0;Ve<I.length;Ve++)if(Ve>=R.length){R.push(ve),Qe=Ve;break}else if(R[Ve]===null){R[Ve]=ve,Qe=Ve;break}if(Qe===-1)break}const Ae=I[Qe];Ae&&Ae.connect(ve)}}const G=new X,Z=new X;function te(he,be,ve){G.setFromMatrixPosition(be.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const Qe=G.distanceTo(Z),Ae=be.projectionMatrix.elements,Ve=ve.projectionMatrix.elements,tt=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),vt=(Ae[9]+1)/Ae[5],gt=(Ae[9]-1)/Ae[5],_t=(Ae[8]-1)/Ae[0],zt=(Ve[8]+1)/Ve[0],jt=tt*_t,Yt=tt*zt,Pt=Qe/(-_t+zt),It=Pt*-_t;if(be.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(It),he.translateZ(Pt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Ae[10]===-1)he.projectionMatrix.copy(be.projectionMatrix),he.projectionMatrixInverse.copy(be.projectionMatrixInverse);else{const Kt=tt+Pt,Y=qe+Pt,pn=jt-It,Tt=Yt+(Qe-It),V=vt*qe/Y*Kt,E=gt*qe/Y*Kt;he.projectionMatrix.makePerspective(pn,Tt,V,E,Kt,Y),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function ue(he,be){be===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(be.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let be=he.near,ve=he.far;x.texture!==null&&(x.depthNear>0&&(be=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),z.near=B.near=w.near=be,z.far=B.far=w.far=ve,(L!==z.near||k!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,k=z.far),z.layers.mask=he.layers.mask|6,w.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;const Qe=he.parent,Ae=z.cameras;ue(z,Qe);for(let Ve=0;Ve<Ae.length;Ve++)ue(Ae[Ve],Qe);Ae.length===2?te(z,w,B):z.projectionMatrix.copy(w.projectionMatrix),pe(he,z,Qe)};function pe(he,be,ve){ve===null?he.matrix.copy(be.matrixWorld):(he.matrix.copy(ve.matrixWorld),he.matrix.invert(),he.matrix.multiply(be.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(be.projectionMatrix),he.projectionMatrixInverse.copy(be.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Ua*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(he){c=he,u!==null&&(u.fixedFoveation=he),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=he)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(he){return _[he]};let ze=null;function at(he,be){if(h=be.getViewerPose(l||a),g=be,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Qe=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Qe=!0);for(let qe=0;qe<ve.length;qe++){const vt=ve[qe];let gt=null;if(p!==null)gt=p.getViewport(vt);else{const zt=f.getViewSubImage(u,vt);gt=zt.viewport,qe===0&&(e.setRenderTargetTextures(M,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(M))}let _t=N[qe];_t===void 0&&(_t=new li,_t.layers.enable(qe),_t.viewport=new Ut,N[qe]=_t),_t.matrix.fromArray(vt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(vt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(gt.x,gt.y,gt.width,gt.height),qe===0&&(z.matrix.copy(_t.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Qe===!0&&z.cameras.push(_t)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const qe=f.getDepthInformation(ve[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,r.renderState)}if(Ae&&Ae.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<ve.length;qe++){const vt=ve[qe].camera;if(vt){let gt=_[vt];gt||(gt=new I0,_[vt]=gt);const _t=f.getCameraImage(vt);gt.sourceTexture=_t}}}}for(let ve=0;ve<I.length;ve++){const Qe=R[ve],Ae=I[ve];Qe!==null&&Ae!==void 0&&Ae.update(Qe,be,l||a)}ze&&ze(he,be),be.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:be}),g=null}const et=new N0;et.setAnimationLoop(at),this.setAnimationLoop=function(he){ze=he},this.dispose=function(){}}}const pb=new qt,V0=new lt;V0.set(-1,0,0,0,1,0,0,0,1);function mb(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,D0(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,T,P,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),f(x,_)):_.isMeshPhongMaterial?(s(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),u(x,_),_.isMeshPhysicalMaterial&&p(x,_,M)):_.isMeshMatcapMaterial?(s(x,_),g(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),y(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(a(x,_),_.isLineDashedMaterial&&o(x,_)):_.isPointsMaterial?c(x,_,T,P):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===zn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===zn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const T=e.get(_),P=T.envMap,M=T.envMapRotation;P&&(x.envMap.value=P,x.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(V0),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function a(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function o(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function c(x,_,T,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function u(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function p(x,_,T){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const T=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gb(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,I){const R=I.program;i.uniformBlockBinding(M,R)}function l(M,I){let R=r[M.id];R===void 0&&(x(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",T));const O=I.program;i.updateUBOMapping(M,O);const S=e.render.frame;s[M.id]!==S&&(u(M),s[M.id]=S)}function h(M){const I=f();M.__bindingPointIndex=I;const R=n.createBuffer(),O=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,O,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,R),R}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const I=r[M.id],R=M.uniforms,O=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let S=0,w=R.length;S<w;S++){const B=R[S];if(Array.isArray(B))for(let N=0,z=B.length;N<z;N++)p(B[N],S,N,O);else p(B,S,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,I,R,O){if(y(M,I,R,O)===!0){const S=M.__offset,w=M.value;if(Array.isArray(w)){let B=0;for(let N=0;N<w.length;N++){const z=w[N],L=_(z);g(z,M.__data,B),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(B+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function g(M,I,R){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,R)}function y(M,I,R,O){const S=M.value,w=I+"_"+R;if(O[w]===void 0)return typeof S=="number"||typeof S=="boolean"?O[w]=S:ArrayBuffer.isView(S)?O[w]=S.slice():O[w]=S.clone(),!0;{const B=O[w];if(typeof S=="number"||typeof S=="boolean"){if(B!==S)return O[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(B.equals(S)===!1)return B.copy(S),!0}}return!1}function x(M){const I=M.uniforms;let R=0;const O=16;for(let w=0,B=I.length;w<B;w++){const N=Array.isArray(I[w])?I[w]:[I[w]];for(let z=0,L=N.length;z<L;z++){const k=N[z],A=Array.isArray(k.value)?k.value:[k.value];for(let U=0,F=A.length;U<F;U++){const G=A[U],Z=_(G),te=R%O,ue=te%Z.boundary,pe=te+ue;R+=ue,pe!==0&&O-pe<Z.storage&&(R+=O-pe),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=R,R+=Z.storage}}}const S=R%O;return S>0&&(R+=O-S),M.__size=R,M.__cache={},this}function _(M){const I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",M),I}function T(M){const I=M.target;I.removeEventListener("dispose",T);const R=a.indexOf(I.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function P(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:P}}const _b=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function xb(){return Di===null&&(Di=new R0(_b,16,16,Jr,cr),Di.name="DFG_LUT",Di.minFilter=wn,Di.magFilter=wn,Di.wrapS=tr,Di.wrapT=tr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class vb{constructor(e={}){const{canvas:t=px(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Qn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=p,x=new Set([uh,fh,ch]),_=new Set([Qn,Xi,La,Na,ah,oh]),T=new Uint32Array(4),P=new Int32Array(4),M=new X;let I=null,R=null;const O=[],S=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let N=!1,z=null,L=null,k=null,A=null;this._outputColorSpace=oi;let U=0,F=0,G=null,Z=-1,te=null;const ue=new Ut,pe=new Ut;let ze=null;const at=new mt(0);let et=0,he=t.width,be=t.height,ve=1,Qe=null,Ae=null;const Ve=new Ut(0,0,he,be),tt=new Ut(0,0,he,be);let qe=!1;const vt=new gh;let gt=!1,_t=!1;const zt=new qt,jt=new X,Yt=new Ut,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Kt(){return G===null?ve:1}let Y=i;function pn(D,q){return t.getContext(D,q)}try{const D={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",kn,!1),Y===null){const q="webgl2";if(Y=pn(q,D),Y===null)throw pn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(D){throw Mt("WebGLRenderer: "+D.message),D}let Tt,V,E,j,se,ce,we,Se,fe,ge,Me,Ye,De,Ee,$e,nt,Ze,W,Te,le,Ce,Pe,xe;function Ke(){Tt=new xM(Y),Tt.init(),Ce=new cb(Y,Tt),V=new fM(Y,Tt,e,Ce),E=new ob(Y,Tt),V.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),L=Y.createFramebuffer(),k=Y.createFramebuffer(),A=Y.createFramebuffer(),j=new SM(Y),se=new qE,ce=new lb(Y,Tt,E,se,V,Ce,j),we=new _M(B),Se=new wv(Y),Pe=new lM(Y,Se),fe=new vM(Y,Se,j,Pe),ge=new EM(Y,fe,Se,Pe,j),W=new MM(Y,V,ce),$e=new uM(se),Me=new XE(B,we,Tt,V,Pe,$e),Ye=new mb(B,se),De=new KE,Ee=new tb(Tt),Ze=new oM(B,we,E,ge,g,c),nt=new ab(B,ge,V),xe=new gb(Y,j,V,E),Te=new cM(Y,Tt,j),le=new yM(Y,Tt,j),j.programs=Me.programs,B.capabilities=V,B.extensions=Tt,B.properties=se,B.renderLists=De,B.shadowMap=nt,B.state=E,B.info=j}Ke(),y!==Qn&&(w=new wM(y,t.width,t.height,o,r,s));const He=new db(B,Y);this.xr=He,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const D=Tt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Tt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(D){D!==void 0&&(ve=D,this.setSize(he,be,!1))},this.getSize=function(D){return D.set(he,be)},this.setSize=function(D,q,ae=!0){if(He.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}he=D,be=q,t.width=Math.floor(D*ve),t.height=Math.floor(q*ve),ae===!0&&(t.style.width=D+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(he*ve,be*ve).floor()},this.setDrawingBufferSize=function(D,q,ae){he=D,be=q,ve=ae,t.width=Math.floor(D*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(y===Qn){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(ue)},this.getViewport=function(D){return D.copy(Ve)},this.setViewport=function(D,q,ae,ne){D.isVector4?Ve.set(D.x,D.y,D.z,D.w):Ve.set(D,q,ae,ne),E.viewport(ue.copy(Ve).multiplyScalar(ve).round())},this.getScissor=function(D){return D.copy(tt)},this.setScissor=function(D,q,ae,ne){D.isVector4?tt.set(D.x,D.y,D.z,D.w):tt.set(D,q,ae,ne),E.scissor(pe.copy(tt).multiplyScalar(ve).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){E.setScissorTest(qe=D)},this.setOpaqueSort=function(D){Qe=D},this.setTransparentSort=function(D){Ae=D},this.getClearColor=function(D){return D.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,ae=!0){let ne=0;if(D){let re=!1;if(G!==null){const Le=G.texture.format;re=x.has(Le)}if(re){const Le=G.texture.type,Be=_.has(Le),Ne=Ze.getClearColor(),Xe=Ze.getClearAlpha(),Je=Ne.r,Ge=Ne.g,it=Ne.b;Be?(T[0]=Je,T[1]=Ge,T[2]=it,T[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,T)):(P[0]=Je,P[1]=Ge,P[2]=it,P[3]=Xe,Y.clearBufferiv(Y.COLOR,0,P))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),z=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),Ze.dispose(),De.dispose(),Ee.dispose(),se.dispose(),we.dispose(),ge.dispose(),Pe.dispose(),xe.dispose(),Me.dispose(),He.dispose(),He.removeEventListener("sessionstart",js),He.removeEventListener("sessionend",Qs),qi.stop()};function Gt(D){D.preventDefault(),vl("WebGLRenderer: Context Lost."),N=!0}function Dt(){vl("WebGLRenderer: Context Restored."),N=!1;const D=j.autoReset,q=nt.enabled,ae=nt.autoUpdate,ne=nt.needsUpdate,re=nt.type;Ke(),j.autoReset=D,nt.enabled=q,nt.autoUpdate=ae,nt.needsUpdate=ne,nt.type=re}function kn(D){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qn(D){const q=D.target;q.removeEventListener("dispose",qn),rs(q)}function rs(D){xc(D),se.remove(D)}function xc(D){const q=se.get(D).programs;q!==void 0&&(q.forEach(function(ae){Me.releaseProgram(ae)}),D.isShaderMaterial&&Me.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ae,ne,re,Le){q===null&&(q=Pt);const Be=re.isMesh&&re.matrixWorld.determinantAffine()<0,Ne=mr(D,q,ae,ne,re);E.setMaterial(ne,Be);let Xe=ae.index,Je=1;if(ne.wireframe===!0){if(Xe=fe.getWireframeAttribute(ae),Xe===void 0)return;Je=2}const Ge=ae.drawRange,it=ae.attributes.position;let je=Ge.start*Je,Et=(Ge.start+Ge.count)*Je;Le!==null&&(je=Math.max(je,Le.start*Je),Et=Math.min(Et,(Le.start+Le.count)*Je)),Xe!==null?(je=Math.max(je,0),Et=Math.min(Et,Xe.count)):it!=null&&(je=Math.max(je,0),Et=Math.min(Et,it.count));const Xt=Et-je;if(Xt<0||Xt===1/0)return;Pe.setup(re,ne,Ne,ae,Xe);let Wt,Lt=Te;if(Xe!==null&&(Wt=Se.get(Xe),Lt=le,Lt.setIndex(Wt)),re.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Kt()),Lt.setMode(Y.LINES)):Lt.setMode(Y.TRIANGLES);else if(re.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*Kt()),re.isLineSegments?Lt.setMode(Y.LINES):re.isLineLoop?Lt.setMode(Y.LINE_LOOP):Lt.setMode(Y.LINE_STRIP)}else re.isPoints?Lt.setMode(Y.POINTS):re.isSprite&&Lt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const rn=re._multiDrawStarts,Ue=re._multiDrawCounts,sn=re._multiDrawCount,ht=Xe?Se.get(Xe).bytesPerElement:1,Hn=se.get(ne).currentProgram.getUniforms();for(let ti=0;ti<sn;ti++)Hn.setValue(Y,"_gl_DrawID",ti),Lt.render(rn[ti]/ht,Ue[ti])}else if(re.isInstancedMesh)Lt.renderInstances(je,Xt,re.count);else if(ae.isInstancedBufferGeometry){const rn=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ue=Math.min(ae.instanceCount,rn);Lt.renderInstances(je,Xt,Ue)}else Lt.render(je,Xt)};function Zs(D,q,ae){D.transparent===!0&&D.side===Mi&&D.forceSinglePass===!1?(D.side=zn,D.needsUpdate=!0,Dr(D,q,ae),D.side=Rr,D.needsUpdate=!0,Dr(D,q,ae),D.side=Mi):Dr(D,q,ae)}this.compile=function(D,q,ae=null){ae===null&&(ae=D),R=Ee.get(ae),R.init(q),S.push(R),ae.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(R.pushLight(re),re.castShadow&&R.pushShadow(re))}),D!==ae&&D.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(R.pushLight(re),re.castShadow&&R.pushShadow(re))}),R.setupLights();const ne=new Set;return D.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Le=re.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Ne=Le[Be];Zs(Ne,ae,re),ne.add(Ne)}else Zs(Le,ae,re),ne.add(Le)}),R=S.pop(),ne},this.compileAsync=function(D,q,ae=null){const ne=this.compile(D,q,ae);return new Promise(re=>{function Le(){if(ne.forEach(function(Be){se.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){re(D);return}setTimeout(Le,10)}Tt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Js=null;function ss(D){Js&&Js(D)}function js(){qi.stop()}function Qs(){qi.start()}const qi=new N0;qi.setAnimationLoop(ss),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(D){Js=D,He.setAnimationLoop(D),D===null?qi.stop():qi.start()},He.addEventListener("sessionstart",js),He.addEventListener("sessionend",Qs),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(D,q);const ae=He.enabled===!0&&He.isPresenting===!0,ne=w!==null&&(G===null||ae)&&w.begin(B,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(q),q=He.getCamera()),D.isScene===!0&&D.onBeforeRender(B,D,q,G),R=Ee.get(D,S.length),R.init(q),R.state.textureUnits=ce.getTextureUnits(),S.push(R),zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),vt.setFromProjectionMatrix(zt,zi,q.reversedDepth),_t=this.localClippingEnabled,gt=$e.init(this.clippingPlanes,_t),I=De.get(D,O.length),I.init(),O.push(I),He.enabled===!0&&He.isPresenting===!0){const Be=B.xr.getDepthSensingMesh();Be!==null&&Rn(Be,q,-1/0,B.sortObjects)}Rn(D,q,0,B.sortObjects),I.finish(),B.sortObjects===!0&&I.sort(Qe,Ae,q.reversedDepth),It=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,It&&Ze.addToRenderList(I,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&$e.beginShadows();const re=R.state.shadowsArray;if(nt.render(re,D,q),gt===!0&&$e.endShadows(),(ne&&w.hasRenderPass())===!1){const Be=I.opaque,Ne=I.transmissive;if(R.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Ne.length>0)for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const it=Xe[Je];ta(Be,Ne,D,it)}It&&Ze.render(D);for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const it=Xe[Je];ea(I,D,it,it.viewport)}}else Ne.length>0&&ta(Be,Ne,D,q),It&&Ze.render(D),ea(I,D,q)}G!==null&&F===0&&(ce.updateMultisampleRenderTarget(G),ce.updateRenderTargetMipmap(G)),ne&&w.end(B),D.isScene===!0&&D.onAfterRender(B,D,q),Pe.resetDefaultState(),Z=-1,te=null,S.pop(),S.length>0?(R=S[S.length-1],ce.setTextureUnits(R.state.textureUnits),gt===!0&&$e.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,z!==null&&z.renderEnd()};function Rn(D,q,ae,ne){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ae=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLightProbeGrid)R.pushLightProbeGrid(D);else if(D.isLight)R.pushLight(D),D.castShadow&&R.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||vt.intersectsSprite(D)){ne&&Yt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(zt);const Be=ge.update(D),Ne=D.material;Ne.visible&&I.push(D,Be,Ne,ae,Yt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||vt.intersectsObject(D))){const Be=ge.update(D),Ne=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Yt.copy(D.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Yt.copy(Be.boundingSphere.center)),Yt.applyMatrix4(D.matrixWorld).applyMatrix4(zt)),Array.isArray(Ne)){const Xe=Be.groups;for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const it=Xe[Je],je=Ne[it.materialIndex];je&&je.visible&&I.push(D,Be,je,ae,Yt.z,it)}}else Ne.visible&&I.push(D,Be,Ne,ae,Yt.z,null)}}const Le=D.children;for(let Be=0,Ne=Le.length;Be<Ne;Be++)Rn(Le[Be],q,ae,ne)}function ea(D,q,ae,ne){const{opaque:re,transmissive:Le,transparent:Be}=D;R.setupLightsView(ae),gt===!0&&$e.setGlobalState(B.clippingPlanes,ae),ne&&E.viewport(ue.copy(ne)),re.length>0&&Vn(re,q,ae),Le.length>0&&Vn(Le,q,ae),Be.length>0&&Vn(Be,q,ae),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ta(D,q,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ne.id]===void 0){const je=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:je?cr:Qn,minFilter:Wr,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Le=R.state.transmissionRenderTarget[ne.id],Be=ne.viewport||ue;Le.setSize(Be.z*B.transmissionResolutionScale,Be.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),Xe=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Le),B.getClearColor(at),et=B.getClearAlpha(),et<1&&B.setClearColor(16777215,.5),B.clear(),It&&Ze.render(ae);const Ge=B.toneMapping;B.toneMapping=Vi;const it=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),R.setupLightsView(ne),gt===!0&&$e.setGlobalState(B.clippingPlanes,ne),Vn(D,ae,ne),ce.updateMultisampleRenderTarget(Le),ce.updateRenderTargetMipmap(Le),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Et=0,Xt=q.length;Et<Xt;Et++){const Wt=q[Et],{object:Lt,geometry:rn,material:Ue,group:sn}=Wt;if(Ue.side===Mi&&Lt.layers.test(ne.layers)){const ht=Ue.side;Ue.side=zn,Ue.needsUpdate=!0,na(Lt,ae,ne,rn,Ue,sn),Ue.side=ht,Ue.needsUpdate=!0,je=!0}}je===!0&&(ce.updateMultisampleRenderTarget(Le),ce.updateRenderTargetMipmap(Le))}B.setRenderTarget(Ne,Xe,Je),B.setClearColor(at,et),it!==void 0&&(ne.viewport=it),B.toneMapping=Ge}function Vn(D,q,ae){const ne=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Le=D.length;re<Le;re++){const Be=D[re],{object:Ne,geometry:Xe,group:Je}=Be;let Ge=Be.material;Ge.allowOverride===!0&&ne!==null&&(Ge=ne),Ne.layers.test(ae.layers)&&na(Ne,q,ae,Xe,Ge,Je)}}function na(D,q,ae,ne,re,Le){D.onBeforeRender(B,q,ae,ne,re,Le),D.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),re.onBeforeRender(B,q,ae,ne,D,Le),re.transparent===!0&&re.side===Mi&&re.forceSinglePass===!1?(re.side=zn,re.needsUpdate=!0,B.renderBufferDirect(ae,q,ne,re,D,Le),re.side=Rr,re.needsUpdate=!0,B.renderBufferDirect(ae,q,ne,re,D,Le),re.side=Mi):B.renderBufferDirect(ae,q,ne,re,D,Le),D.onAfterRender(B,q,ae,ne,re,Le)}function Dr(D,q,ae){q.isScene!==!0&&(q=Pt);const ne=se.get(D),re=R.state.lights,Le=R.state.shadowsArray,Be=re.state.version,Ne=Me.getParameters(D,re.state,Le,q,ae,R.state.lightProbeGridArray),Xe=Me.getProgramCacheKey(Ne);let Je=ne.programs;ne.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const Ge=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ne.envMap=we.get(D.envMap||ne.environment,Ge),ne.envMapRotation=ne.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Je===void 0&&(D.addEventListener("dispose",qn),Je=new Map,ne.programs=Je);let it=Je.get(Xe);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===Be)return ia(D,Ne),it}else Ne.uniforms=Me.getUniforms(D),z!==null&&D.isNodeMaterial&&z.build(D,ae,Ne),D.onBeforeCompile(Ne,B),it=Me.acquireProgram(Ne,Xe),Je.set(Xe,it),ne.uniforms=Ne.uniforms;const je=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(je.clippingPlanes=$e.uniform),ia(D,Ne),ne.needsLights=vc(D),ne.lightsStateVersion=Be,ne.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotLightMatrix.value=re.state.spotLightMatrix,je.spotLightMap.value=re.state.spotLightMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.lightProbeGrid=R.state.lightProbeGridArray.length>0,ne.currentProgram=it,ne.uniformsList=null,it}function Yi(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=rl.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function ia(D,q){const ae=se.get(D);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function no(D,q){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;M.setFromMatrixPosition(q.matrixWorld);for(let ae=0,ne=D.length;ae<ne;ae++){const re=D[ae];if(re.texture!==null&&re.boundingBox.containsPoint(M))return re}return null}function mr(D,q,ae,ne,re){q.isScene!==!0&&(q=Pt),ce.resetTextureUnits();const Le=q.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Ne=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:yt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=we.get(ne.envMap||Be,Xe),Ge=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!ae.morphAttributes.position,Et=!!ae.morphAttributes.normal,Xt=!!ae.morphAttributes.color;let Wt=Vi;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Wt=B.toneMapping);const Lt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,rn=Lt!==void 0?Lt.length:0,Ue=se.get(ne),sn=R.state.lights;if(gt===!0&&(_t===!0||D!==te)){const bt=D===te&&ne.id===Z;$e.setState(ne,D,bt)}let ht=!1;ne.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==sn.state.version||Ue.outputColorSpace!==Ne||re.isBatchedMesh&&Ue.batching===!1||!re.isBatchedMesh&&Ue.batching===!0||re.isBatchedMesh&&Ue.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ue.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ue.instancing===!1||!re.isInstancedMesh&&Ue.instancing===!0||re.isSkinnedMesh&&Ue.skinning===!1||!re.isSkinnedMesh&&Ue.skinning===!0||re.isInstancedMesh&&Ue.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ue.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ue.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ue.instancingMorph===!1&&re.morphTexture!==null||Ue.envMap!==Je||ne.fog===!0&&Ue.fog!==Le||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==$e.numPlanes||Ue.numIntersection!==$e.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==it||Ue.morphTargets!==je||Ue.morphNormals!==Et||Ue.morphColors!==Xt||Ue.toneMapping!==Wt||Ue.morphTargetsCount!==rn||!!Ue.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ue.__version=ne.version);let Hn=Ue.currentProgram;ht===!0&&(Hn=Dr(ne,q,re),z&&ne.isNodeMaterial&&z.onUpdateProgram(ne,Hn,Ue));let ti=!1,Ci=!1,mn=!1;const pt=Hn.getUniforms(),At=Ue.uniforms;if(E.useProgram(Hn.program)&&(ti=!0,Ci=!0,mn=!0),ne.id!==Z&&(Z=ne.id,Ci=!0),Ue.needsLights){const bt=no(R.state.lightProbeGridArray,re);Ue.lightProbeGrid!==bt&&(Ue.lightProbeGrid=bt,Ci=!0)}if(ti||te!==D){E.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),pt.setValue(Y,"projectionMatrix",D.projectionMatrix),pt.setValue(Y,"viewMatrix",D.matrixWorldInverse);const Pn=pt.map.cameraPosition;Pn!==void 0&&Pn.setValue(Y,jt.setFromMatrixPosition(D.matrixWorld)),V.logarithmicDepthBuffer&&pt.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&pt.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),te!==D&&(te=D,Ci=!0,mn=!0)}if(Ue.needsLights&&(sn.state.directionalShadowMap.length>0&&pt.setValue(Y,"directionalShadowMap",sn.state.directionalShadowMap,ce),sn.state.spotShadowMap.length>0&&pt.setValue(Y,"spotShadowMap",sn.state.spotShadowMap,ce),sn.state.pointShadowMap.length>0&&pt.setValue(Y,"pointShadowMap",sn.state.pointShadowMap,ce)),re.isSkinnedMesh){pt.setOptional(Y,re,"bindMatrix"),pt.setOptional(Y,re,"bindMatrixInverse");const bt=re.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),pt.setValue(Y,"boneTexture",bt.boneTexture,ce))}re.isBatchedMesh&&(pt.setOptional(Y,re,"batchingTexture"),pt.setValue(Y,"batchingTexture",re._matricesTexture,ce),pt.setOptional(Y,re,"batchingIdTexture"),pt.setValue(Y,"batchingIdTexture",re._indirectTexture,ce),pt.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&pt.setValue(Y,"batchingColorTexture",re._colorsTexture,ce));const Cn=ae.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&W.update(re,ae,Hn),(Ci||Ue.receiveShadow!==re.receiveShadow)&&(Ue.receiveShadow=re.receiveShadow,pt.setValue(Y,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(At.envMapIntensity.value=q.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=xb()),Ci){if(pt.setValue(Y,"toneMappingExposure",B.toneMappingExposure),Ue.needsLights&&pi(At,mn),Le&&ne.fog===!0&&Ye.refreshFogUniforms(At,Le),Ye.refreshMaterialUniforms(At,ne,ve,be,R.state.transmissionRenderTarget[D.id]),Ue.needsLights&&Ue.lightProbeGrid){const bt=Ue.lightProbeGrid;At.probesSH.value=bt.texture,At.probesMin.value.copy(bt.boundingBox.min),At.probesMax.value.copy(bt.boundingBox.max),At.probesResolution.value.copy(bt.resolution)}rl.upload(Y,Yi(Ue),At,ce)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(rl.upload(Y,Yi(Ue),At,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&pt.setValue(Y,"center",re.center),pt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),pt.setValue(Y,"normalMatrix",re.normalMatrix),pt.setValue(Y,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const bt=ne.uniformsGroups;for(let Pn=0,mi=bt.length;Pn<mi;Pn++){const C=bt[Pn];xe.update(C,Hn),xe.bind(C,Hn)}}return Hn}function pi(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function vc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,q,ae){const ne=se.get(D);ne.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(D.texture).__webglTexture=q,se.get(D.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const ae=se.get(D);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,ae=0){G=D,U=q,F=ae;let ne=null,re=!1,Le=!1;if(D){const Ne=se.get(D);if(Ne.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ne.__webglFramebuffer),ue.copy(D.viewport),pe.copy(D.scissor),ze=D.scissorTest,E.viewport(ue),E.scissor(pe),E.setScissorTest(ze),Z=-1;return}else if(Ne.__webglFramebuffer===void 0)ce.setupRenderTarget(D);else if(Ne.__hasExternalTextures)ce.rebindTextures(D,se.get(D.texture).__webglTexture,se.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ge=D.depthTexture;if(Ne.__boundDepthTexture!==Ge){if(Ge!==null&&se.has(Ge)&&(D.width!==Ge.image.width||D.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(D)}}const Xe=D.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Le=!0);const Je=se.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ne=Je[q][ae]:ne=Je[q],re=!0):D.samples>0&&ce.useMultisampledRTT(D)===!1?ne=se.get(D).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[ae]:ne=Je,ue.copy(D.viewport),pe.copy(D.scissor),ze=D.scissorTest}else ue.copy(Ve).multiplyScalar(ve).floor(),pe.copy(tt).multiplyScalar(ve).floor(),ze=qe;if(ae!==0&&(ne=L),E.bindFramebuffer(Y.FRAMEBUFFER,ne)&&E.drawBuffers(D,ne),E.viewport(ue),E.scissor(pe),E.setScissorTest(ze),re){const Ne=se.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,ae)}else if(Le){const Ne=q;for(let Xe=0;Xe<D.textures.length;Xe++){const Je=se.get(D.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,ae,Ne)}}else if(D!==null&&ae!==0){const Ne=se.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ne.__webglTexture,ae)}Z=-1},this.readRenderTargetPixels=function(D,q,ae,ne,re,Le,Be,Ne=0){if(!(D&&D.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const Je=D.textures[Ne],Ge=Je.format,it=Je.type;if(D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!V.textureFormatReadable(Ge)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(it)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ne&&ae>=0&&ae<=D.height-re&&Y.readPixels(q,ae,ne,re,Ce.convert(Ge),Ce.convert(it),Le)}finally{const Je=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(D,q,ae,ne,re,Le,Be,Ne=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(q>=0&&q<=D.width-ne&&ae>=0&&ae<=D.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);const Je=D.textures[Ne],Ge=Je.format,it=Je.type;if(D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ne),!V.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Le.byteLength,Y.STREAM_READ),Y.readPixels(q,ae,ne,re,Ce.convert(Ge),Ce.convert(it),0);const Et=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Et);const Xt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await mx(Y,Xt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Le),Y.deleteBuffer(je),Y.deleteSync(Xt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,ae=0){const ne=Math.pow(2,-ae),re=Math.floor(D.image.width*ne),Le=Math.floor(D.image.height*ne),Be=q!==null?q.x:0,Ne=q!==null?q.y:0;ce.setTexture2D(D,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ae,0,0,Be,Ne,re,Le),E.unbindTexture()},this.copyTextureToTexture=function(D,q,ae=null,ne=null,re=0,Le=0){let Be,Ne,Xe,Je,Ge,it,je,Et,Xt;const Wt=D.isCompressedTexture?D.mipmaps[Le]:D.image;if(ae!==null)Be=ae.max.x-ae.min.x,Ne=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,Ge=ae.min.y,it=ae.isBox3?ae.min.z:0;else{const At=Math.pow(2,-re);Be=Math.floor(Wt.width*At),Ne=Math.floor(Wt.height*At),D.isDataArrayTexture?Xe=Wt.depth:D.isData3DTexture?Xe=Math.floor(Wt.depth*At):Xe=1,Je=0,Ge=0,it=0}ne!==null?(je=ne.x,Et=ne.y,Xt=ne.z):(je=0,Et=0,Xt=0);const Lt=Ce.convert(q.format),rn=Ce.convert(q.type);let Ue;q.isData3DTexture?(ce.setTexture3D(q,0),Ue=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),Ue=Y.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),Ue=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const sn=E.getParameter(Y.UNPACK_ROW_LENGTH),ht=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ti=E.getParameter(Y.UNPACK_SKIP_ROWS),Ci=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Wt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Wt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,it);const mn=D.isDataArrayTexture||D.isData3DTexture,pt=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const At=se.get(D),Cn=se.get(q),bt=se.get(At.__renderTarget),Pn=se.get(Cn.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,bt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let mi=0;mi<Xe;mi++)mn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(D).__webglTexture,re,it+mi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(q).__webglTexture,Le,Xt+mi)),Y.blitFramebuffer(Je,Ge,Be,Ne,je,Et,Be,Ne,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||D.isRenderTargetTexture||se.has(D)){const At=se.get(D),Cn=se.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,k),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,A);for(let bt=0;bt<Xe;bt++)mn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,At.__webglTexture,re,it+bt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,At.__webglTexture,re),pt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Cn.__webglTexture,Le,Xt+bt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Cn.__webglTexture,Le),re!==0?Y.blitFramebuffer(Je,Ge,Be,Ne,je,Et,Be,Ne,Y.COLOR_BUFFER_BIT,Y.NEAREST):pt?Y.copyTexSubImage3D(Ue,Le,je,Et,Xt+bt,Je,Ge,Be,Ne):Y.copyTexSubImage2D(Ue,Le,je,Et,Je,Ge,Be,Ne);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else pt?D.isDataTexture||D.isData3DTexture?Y.texSubImage3D(Ue,Le,je,Et,Xt,Be,Ne,Xe,Lt,rn,Wt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ue,Le,je,Et,Xt,Be,Ne,Xe,Lt,Wt.data):Y.texSubImage3D(Ue,Le,je,Et,Xt,Be,Ne,Xe,Lt,rn,Wt):D.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Le,je,Et,Be,Ne,Lt,rn,Wt.data):D.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Le,je,Et,Wt.width,Wt.height,Lt,Wt.data):Y.texSubImage2D(Y.TEXTURE_2D,Le,je,Et,Be,Ne,Lt,rn,Wt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,sn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ht),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ti),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ci),Le===0&&q.generateMipmaps&&Y.generateMipmap(Ue),E.unbindTexture()},this.initRenderTarget=function(D){se.get(D).__webglFramebuffer===void 0&&ce.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ce.setTextureCube(D,0):D.isData3DTexture?ce.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ce.setTexture2DArray(D,0):ce.setTexture2D(D,0),E.unbindTexture()},this.resetState=function(){U=0,F=0,G=null,E.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const yu=100,H0=6371,G0=1800,Su={relaxed:{name:"Relaxed",worldSpeedScale:1200},normal:{name:"Normal",worldSpeedScale:1800},fast:{name:"Fast",worldSpeedScale:2700}},Fa=400,Mh=1600,yb=400,Sb=45,Mb=40,Eb=60,bb=500,wb=2567,Tb=3,Ab=1.5,Rb=4,Zd="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Jd=20,Cb=1,Pb=6,Ib=120,Db=700,W0=2,Lb={kids:{continent:10,compass:20,outline:35},normal:{continent:15,compass:30,outline:45},expert:{continent:20,compass:-1,outline:40}};function Nb(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function Ob(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!jd(n[0])||!jd(n[1]))throw new Error("coordinates must contain numbers");return Nb({type:"Point",coordinates:n},e,t)}function jd(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function $0(n,e,t){if(n!==null)for(var i,r,s,a,o,c,l,h=0,f=0,u,p=n.type,g=p==="FeatureCollection",y=p==="Feature",x=g?n.features.length:1,_=0;_<x;_++){l=g?n.features[_].geometry:y?n.geometry:n,u=l?l.type==="GeometryCollection":!1,o=u?l.geometries.length:1;for(var T=0;T<o;T++){var P=0,M=0;if(a=u?l.geometries[T]:l,a!==null){c=a.coordinates;var I=a.type;switch(h=0,I){case null:break;case"Point":if(e(c,f,_,P,M)===!1)return!1;f++,P++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],f,_,P,M)===!1)return!1;f++,I==="MultiPoint"&&P++}I==="LineString"&&P++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-h;r++){if(e(c[i][r],f,_,P,M)===!1)return!1;f++}I==="MultiLineString"&&P++,I==="Polygon"&&M++}I==="Polygon"&&P++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(M=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-h;s++){if(e(c[i][r][s],f,_,P,M)===!1)return!1;f++}M++}P++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if($0(a.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ub(n,e={}){if(n.bbox!=null&&e.recompute!==!0)return n.bbox;const t=[1/0,1/0,-1/0,-1/0];return $0(n,i=>{t[0]>i[0]&&(t[0]=i[0]),t[1]>i[1]&&(t[1]=i[1]),t[2]<i[0]&&(t[2]=i[0]),t[3]<i[1]&&(t[3]=i[1])}),t}var Fb=Ub;const ar=11102230246251565e-32,En=134217729,Bb=(3+8*ar)*ar;function ef(n,e,t,i,r){let s,a,o,c,l=e[0],h=i[0],f=0,u=0;h>l==h>-l?(s=l,l=e[++f]):(s=h,h=i[++u]);let p=0;if(f<n&&u<t)for(h>l==h>-l?(a=l+s,o=s-(a-l),l=e[++f]):(a=h+s,o=s-(a-h),h=i[++u]),s=a,o!==0&&(r[p++]=o);f<n&&u<t;)h>l==h>-l?(a=s+l,c=a-s,o=s-(a-c)+(l-c),l=e[++f]):(a=s+h,c=a-s,o=s-(a-c)+(h-c),h=i[++u]),s=a,o!==0&&(r[p++]=o);for(;f<n;)a=s+l,c=a-s,o=s-(a-c)+(l-c),l=e[++f],s=a,o!==0&&(r[p++]=o);for(;u<t;)a=s+h,c=a-s,o=s-(a-c)+(h-c),h=i[++u],s=a,o!==0&&(r[p++]=o);return(s!==0||p===0)&&(r[p++]=s),p}function zb(n,e){let t=e[0];for(let i=1;i<n;i++)t+=e[i];return t}function Ja(n){return new Float64Array(n)}const kb=(3+16*ar)*ar,Vb=(2+12*ar)*ar,Hb=(9+64*ar)*ar*ar,Ts=Ja(4),Qd=Ja(8),ep=Ja(12),tp=Ja(16),Ln=Ja(4);function Gb(n,e,t,i,r,s,a){let o,c,l,h,f,u,p,g,y,x,_,T,P,M,I,R,O,S;const w=n-r,B=t-r,N=e-s,z=i-s;M=w*z,u=En*w,p=u-(u-w),g=w-p,u=En*z,y=u-(u-z),x=z-y,I=g*x-(M-p*y-g*y-p*x),R=N*B,u=En*N,p=u-(u-N),g=N-p,u=En*B,y=u-(u-B),x=B-y,O=g*x-(R-p*y-g*y-p*x),_=I-O,f=I-_,Ts[0]=I-(_+f)+(f-O),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Ts[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Ts[2]=T-(S-f)+(_-f),Ts[3]=S;let L=zb(4,Ts),k=Vb*a;if(L>=k||-L>=k||(f=n-w,o=n-(w+f)+(f-r),f=t-B,l=t-(B+f)+(f-r),f=e-N,c=e-(N+f)+(f-s),f=i-z,h=i-(z+f)+(f-s),o===0&&c===0&&l===0&&h===0)||(k=Hb*a+Bb*Math.abs(L),L+=w*h+z*o-(N*l+B*c),L>=k||-L>=k))return L;M=o*z,u=En*o,p=u-(u-o),g=o-p,u=En*z,y=u-(u-z),x=z-y,I=g*x-(M-p*y-g*y-p*x),R=c*B,u=En*c,p=u-(u-c),g=c-p,u=En*B,y=u-(u-B),x=B-y,O=g*x-(R-p*y-g*y-p*x),_=I-O,f=I-_,Ln[0]=I-(_+f)+(f-O),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Ln[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Ln[2]=T-(S-f)+(_-f),Ln[3]=S;const A=ef(4,Ts,4,Ln,Qd);M=w*h,u=En*w,p=u-(u-w),g=w-p,u=En*h,y=u-(u-h),x=h-y,I=g*x-(M-p*y-g*y-p*x),R=N*l,u=En*N,p=u-(u-N),g=N-p,u=En*l,y=u-(u-l),x=l-y,O=g*x-(R-p*y-g*y-p*x),_=I-O,f=I-_,Ln[0]=I-(_+f)+(f-O),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Ln[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Ln[2]=T-(S-f)+(_-f),Ln[3]=S;const U=ef(A,Qd,4,Ln,ep);M=o*h,u=En*o,p=u-(u-o),g=o-p,u=En*h,y=u-(u-h),x=h-y,I=g*x-(M-p*y-g*y-p*x),R=c*l,u=En*c,p=u-(u-c),g=c-p,u=En*l,y=u-(u-l),x=l-y,O=g*x-(R-p*y-g*y-p*x),_=I-O,f=I-_,Ln[0]=I-(_+f)+(f-O),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Ln[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Ln[2]=T-(S-f)+(_-f),Ln[3]=S;const F=ef(U,ep,4,Ln,tp);return tp[F-1]}function wa(n,e,t,i,r,s){const a=(e-s)*(t-r),o=(n-r)*(i-s),c=a-o,l=Math.abs(a+o);return Math.abs(c)>=kb*l?c:-Gb(n,e,t,i,r,s,l)}function Wb(n,e){var t,i,r=0,s,a,o,c,l,h,f,u=n[0],p=n[1],g=e.length;for(t=0;t<g;t++){i=0;var y=e[t],x=y.length-1;if(h=y[0],h[0]!==y[x][0]&&h[1]!==y[x][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-u,o=h[1]-p,i;i<x;i++){if(f=y[i+1],c=f[0]-u,l=f[1]-p,o===0&&l===0){if(c<=0&&a>=0||a<=0&&c>=0)return 0}else if(l>=0&&o<=0||l<=0&&o>=0){if(s=wa(a,c,o,l,0,0),s===0)return 0;(s>0&&l>0&&o<=0||s<0&&l<=0&&o>0)&&r++}h=f,o=l,a=c}}return r%2!==0}function $b(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return[...n.geometry.coordinates];if(n.type==="Point")return[...n.coordinates]}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return[...n];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Xb(n){return n.type==="Feature"?n.geometry:n}function qb(n,e,t={}){if(!n)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=$b(n),r=Xb(e),s=r.type,a=e.bbox;let o=r.coordinates;if(a&&Yb(i,a)===!1)return!1;s==="Polygon"&&(o=[o]);let c=!1;for(var l=0;l<o.length;++l){const h=Wb(i,o[l]);if(h===0)return!t.ignoreBoundary;h&&(c=!0)}return c}function Yb(n,e){return e[0]<=n[0]&&e[1]<=n[1]&&e[2]>=n[0]&&e[3]>=n[1]}var X0=qb;function Kb(n){const e=n.features.map(t=>({id:t.properties.id,box:Fb(t),feature:t}));return{findCountryAt(t,i){const r=Ob([i,t]);for(const{id:s,box:a,feature:o}of e)if(!(i<a[0]||i>a[2]||t<a[1]||t>a[3])&&X0(r,o))return s;return null}}}function Zb(n){let e=0,t=0;for(let r=0;r<n.length-1;r++){const s=n[r],a=n[r+1];e+=s[0]*a[1]-a[0]*s[1],t+=s[1]}const i=t/Math.max(1,n.length-1);return Math.abs(e)*Math.cos(i*Math.PI/180)}function Jb(n){const e=n.type==="Polygon"?[n.coordinates]:n.coordinates;let t=null,i=-1;for(const c of e){const l=c[0];if(!l)continue;const h=Zb(l);h>i&&(i=h,t=l)}if(!t)throw new Error("geometry has no rings");let r=1/0,s=-1/0,a=1/0,o=-1/0;for(const c of t)r=Math.min(r,c[0]),s=Math.max(s,c[0]),a=Math.min(a,c[1]),o=Math.max(o,c[1]);return{lat:(a+o)/2,lon:(r+s)/2,widthDeg:s-r}}const Gr=Math.PI/180;function jb(n){return(n+540)%360-180}function fc(n,e,t,i){const r=i/H0,s=t*Gr,a=n*Gr,o=e*Gr,c=Math.sin(a)*Math.cos(r)+Math.cos(a)*Math.sin(r)*Math.cos(s),l=Math.asin(c),h=o+Math.atan2(Math.sin(s)*Math.sin(r)*Math.cos(a),Math.cos(r)-Math.sin(a)*c);return{lat:l/Gr,lon:jb(h/Gr)}}function Cr(n,e,t){const i=yu*(1+t/H0),r=n*Gr,s=e*Gr;return{x:i*Math.cos(r)*Math.sin(s),y:i*Math.sin(r),z:i*Math.cos(r)*Math.cos(s)}}const pa=(n,e,t)=>Math.min(t,Math.max(e,n)),Eh={speedScale:1,turnScale:1,climbScale:1},Cs={seaplane:{name:"Seaplane",blurb:"Balanced all-rounder",emoji:"🛩️",tuning:Eh},stunt:{name:"Stunt Plane",blurb:"Nippy turns, lower top speed",emoji:"🎪",tuning:{speedScale:.9,turnScale:1.3,climbScale:1.15}},jet:{name:"Jet",blurb:"Fast in a straight line, wide turns",emoji:"🚀",tuning:{speedScale:1.2,turnScale:.75,climbScale:1}},lifter:{name:"Cargo Lifter",blurb:"Steady climber, a little sluggish",emoji:"📦",tuning:{speedScale:.95,turnScale:.9,climbScale:1.25}}};function Qb(){return{lat:48.8566,lon:2.3522,altKm:200,headingDeg:270,speedKmh:800}}function e1(n,e,t,i=Eh,r=G0){const s=pa(e.throttle,-1,1),a=pa(e.turn,-1,1),o=pa(e.pitch,-1,1),c=pa(n.speedKmh+s*yb*t,Fa,Mh*i.speedScale),l=(n.headingDeg+a*Sb*i.turnScale*t+360)%360,h=pa(n.altKm+o*Mb*i.climbScale*t,Eb,bb),f=c/3600*r*t,u=fc(n.lat,n.lon,l,f);return{lat:u.lat,lon:u.lon,altKm:h,headingDeg:l,speedKmh:c}}const wr=Math.PI/180;function Sl(n,e,t,i){const r=n*wr,s=t*wr,a=(i-e)*wr;return Math.acos(Math.min(1,Math.max(-1,Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(a))))/wr}function t1(n,e,t){const i=(e-n+540)%360-180;return(n+i*t+360)%360}function n1(n,e,t,i){const r=n*wr,s=t*wr,a=(i-e)*wr,o=Math.sin(a)*Math.cos(s),c=Math.cos(r)*Math.sin(s)-Math.sin(r)*Math.cos(s)*Math.cos(a);return(Math.atan2(o,c)/wr+360)%360}function i1(n=Math.random){let e="";for(let t=0;t<Rb;t++){const i=Math.floor(n()*Zd.length);e+=Zd[i]??"A"}return e}function np(n,e){const t=Lb[e],i=r=>r>=0&&n>=r;return{continent:i(t.continent),compass:i(t.compass),outline:i(t.outline)}}function r1(n,e,t,i){if(!(Sl(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Tb))return{complete:!1,dwellS:0,inZone:!1,requirementBlocked:!1};switch(e.type){case"refuel":{const s=t+i;return{complete:s>=W0,dwellS:s,inZone:!0,requirementBlocked:!1}}case"delivery":{const s=n.altKm<=Ib;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}case"vip":{const s=n.speedKmh<=Db;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}default:return{complete:!0,dwellS:0,inZone:!0,requirementBlocked:!1}}}function s1(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const a1={kids:["easy"],normal:["easy","normal"],expert:["easy","normal","hard"]},o1=["refuel","photo","riddle","vip"];function Po(n,e){const t=n[Math.floor(e()*n.length)];if(t===void 0)throw new Error("pick() from empty list");return t}function l1(n,e,t){switch(n){case"pickup":return{label:`Pick up cargo in ${e.name}`,sublabel:"Fly through the beacon to skyhook the crate"};case"refuel":return{label:`Refuel in ${e.name}`,sublabel:"Hold inside the zone for 2 seconds to skim the fuel strip"};case"delivery":return{label:`Deliver the cargo to ${e.name}`,sublabel:"Fly LOW through the beacon to parachute-drop the crate"};case"vip":return{label:`Fly the VIP to ${e.name}`,sublabel:"Arrive gently — under 700 km/h — or they complain"};case"riddle":return{label:`Fly to ${t??"the mystery country"}`,sublabel:"Solve the riddle — which country is it?"};case"photo":return{label:"",sublabel:""}}}function c1(n,e,t,i){const r=Math.min(Pb,Math.max(Cb,i.legCount)),s=s1(i.seed),a=a1[i.difficulty],o=Object.values(n).filter(g=>g.playable&&a.includes(g.tier)).sort((g,y)=>g.id.localeCompare(y.id));if(o.length<r)throw new Error("Not enough countries for contract");const c=[];for(let g=0;g<r;g++)g===0?c.push("pickup"):g===r-1?c.push("delivery"):c.push(Po(o1,s));const l=new Set,h=new Set,f=[];let u=null,p=null;for(const g of c){let y=g,x=null;if(y==="photo"){const I=e.filter(R=>!h.has(R.name)&&n[R.countryId]!==void 0&&!l.has(R.countryId)&&(u===null||Sl(u.lat,u.lon,R.lat,R.lon)>=Jd));I.length>0?(x=Po(I,s),h.add(x.name)):y="riddle"}let _;if(x){const I=n[x.countryId];if(!I)throw new Error(`Landmark country missing: ${x.countryId}`);_=I}else{const I=o.filter(w=>!l.has(w.id)),R=u?I.filter(w=>Sl(u.lat,u.lon,w.capital.lat,w.capital.lon)>=Jd):I,O=R.length>0?R:I,S=O.filter(w=>w.continent!==p);_=Po(S.length>0?S:O,s)}l.add(_.id);const T=x?{lat:x.lat,lon:x.lon}:{lat:_.capital.lat,lon:_.capital.lon};let P,M;if(y==="photo"&&x)P=`Photograph ${x.name}`,M=`Fly through the camera ring in ${_.name}`;else{const I=y==="riddle"?(t[_.id]?Po([...t[_.id]],s):null)??`the country whose capital is ${_.capital.name}`:null;({label:P,sublabel:M}=l1(y,_,I))}f.push({type:y,countryId:_.id,zone:T,label:P,sublabel:M}),u=T,p=_.continent}return{seed:i.seed,difficulty:i.difficulty,legs:f}}function sl(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function f1(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function q0(n){let e,t,i;n.length!==2?(e=sl,t=(o,c)=>sl(n(o),c),i=(o,c)=>n(o)-c):(e=n===sl||n===f1?n:u1,t=n,i=n);function r(o,c,l=0,h=o.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(o[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(o,c,l=0,h=o.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(o[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function a(o,c,l=0,h=o.length){const f=r(o,c,l,h-1);return f>l&&i(o[f-1],c)>-i(o[f],c)?f-1:f}return{left:r,center:a,right:s}}function u1(){return 0}function h1(n){return n===null?NaN:+n}const d1=q0(sl),p1=d1.right;q0(h1).center;function Ml(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)))}return[t,i]}class or{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],a=e+s,o=Math.abs(e)<Math.abs(s)?e-(a-s):s-(a-e);o&&(t[i++]=o),e=a}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,a=0;if(t>0){for(a=e[--t];t>0&&(i=a,r=e[--t],a=i+r,s=r-(a-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=a+r,r==i-a&&(a=i))}return a}}const m1=Math.sqrt(50),g1=Math.sqrt(10),_1=Math.sqrt(2);function El(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),a=s>=m1?10:s>=g1?5:s>=_1?2:1;let o,c,l;return r<0?(l=Math.pow(10,-r)/a,o=Math.round(n*l),c=Math.round(e*l),o/l<n&&++o,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*a,o=Math.round(n/l),c=Math.round(e/l),o*l<n&&++o,c*l>e&&--c),c<o&&.5<=t&&t<2?El(n,e,t*2):[o,c,l]}function x1(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,a]=i?El(e,n,t):El(n,e,t);if(!(s>=r))return[];const o=s-r+1,c=new Array(o);if(i)if(a<0)for(let l=0;l<o;++l)c[l]=(s-l)/-a;else for(let l=0;l<o;++l)c[l]=(s-l)*a;else if(a<0)for(let l=0;l<o;++l)c[l]=(r+l)/-a;else for(let l=0;l<o;++l)c[l]=(r+l)*a;return c}function Mu(n,e,t){return e=+e,n=+n,t=+t,El(n,e,t)[2]}function v1(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?Mu(e,n,t):Mu(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function y1(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(s=+s)>=s&&(++t,i+=s)}if(t)return i/t}function*S1(n){for(const e of n)yield*e}function Ba(n){return Array.from(S1(n))}const za=new Set;let Eu=!1;function M1(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;za.size&&za.clear();let s=Y0(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o=0,c=0,l=0;if(i&&(s=A1(n,e,s,t)),n.length>80*t){o=n[0],c=n[1];let h=o,f=c;for(let u=t;u<r;u+=t){const p=n[u],g=n[u+1];p<o&&(o=p),g<c&&(c=g),p>h&&(h=p),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return bu(s,a,o,c,l),a}function Y0(n,e,t,i,r){let s=null;if(r===k1(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=sp(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=sp(a/i|0,n[a],n[a+1],s);return s&&ka(s,s.next)&&(Ha(s),s=s.next),s}function Qr(n,e=n){const t=e===n;let i=n,r;do r=!1,i!==i.next&&(za.size===0||!za.has(i))&&(ka(i,i.next)||on(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),Eu=!0,Ha(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function bu(n,e,t,i,r){r&&N1(n,t,i,r);let s=n,a=!1;for(;n.prev!==n.next;){const o=n.prev,c=n.next;if(on(o,n,c)<0&&(r?b1(n,t,i,r):E1(n))){e.push(o.i,n.i,c.i),Ha(n),n=c,s=c;continue}if(n=c,n===s){if(Eu=!1,n=Qr(n),Eu){s=n;continue}if(!a){n=w1(n,e),s=n,a=!0;continue}T1(n,e,t,i,r);break}}}function E1(n){const e=n.prev,t=n,i=n.next,r=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(r,s,a),f=Math.min(o,c,l),u=Math.max(r,s,a),p=Math.max(o,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&!(r===g.x&&o===g.y)&&wl(r,o,s,c,a,l,g.x,g.y)&&on(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function b1(n,e,t,i){const r=n.prev,s=n,a=n.next,o=r.x,c=s.x,l=a.x,h=r.y,f=s.y,u=a.y,p=Math.min(o,c,l),g=Math.min(h,f,u),y=Math.max(o,c,l),x=Math.max(h,f,u),_=Ru(p,g,e,t,i),T=Ru(y,x,e,t,i);let P=n.prevZ;for(;P&&P.z>=_;){if(P.x>=p&&P.x<=y&&P.y>=g&&P.y<=x&&P!==a&&!(o===P.x&&h===P.y)&&wl(o,h,c,f,l,u,P.x,P.y)&&on(P.prev,P,P.next)>=0)return!1;P=P.prevZ}let M=n.nextZ;for(;M&&M.z<=T;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=x&&M!==a&&!(o===M.x&&h===M.y)&&wl(o,h,c,f,l,u,M.x,M.y)&&on(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function w1(n,e){let t=n,i=!1;do{const r=t.prev,s=t.next.next;J0(r,t,t.next,s,!1)&&Va(r,s)&&Va(s,r)&&(e.push(r.i,t.i,s.i),Ha(t),Ha(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?Qr(t):t}function T1(n,e,t,i,r){let s=n;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&F1(s,a)){let o=j0(s,a);s=Qr(s,s.next),o=Qr(o,o.next),bu(s,e,t,i,r),bu(o,e,t,i,r);return}a=a.next}s=s.next}while(s!==n)}let wu=!1;function A1(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,c=s<a-1?e[s+1]*i:n.length,l=Y0(n,o,c,i,!1);l===l.next&&za.add(l),r.push(U1(l))}r.sort(R1),P1(n.length/i,e.length),Z0(t,t),wu=!0;for(let s=0;s<r.length;s++)t=C1(r[s],t);return wu=!1,Qr(t)}function R1(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function C1(n,e){const t=D1(n,e);if(!t)return e;const i=j0(t,n),r=i.next;return Z0(t,r.next),Qr(i,i.next),Qr(t,t.next)}const K0=16;let tn=new Float64Array(0),bl=0;const Tu=[],Au=[];function P1(n,e){const t=Math.ceil((n+2*e)/K0)+e+2;tn.length<t*4&&(tn=new Float64Array(t*4)),bl=0}function Z0(n,e){let t=n;do{const i=bl++;Tu[i]=t;let r=1/0,s=1/0,a=-1/0,o=-1/0,c=0;do{const h=t.next;t.z=i,t.x<r&&(r=t.x),t.x>a&&(a=t.x),t.y<s&&(s=t.y),t.y>o&&(o=t.y),h.x<r&&(r=h.x),h.x>a&&(a=h.x),h.y<s&&(s=h.y),h.y>o&&(o=h.y),t=h}while(++c<K0&&t!==e);Au[i]=t;const l=i*4;tn[l]=r,tn[l+1]=s,tn[l+2]=a,tn[l+3]=o}while(t!==e)}function I1(n,e){const t=n.z*4;e.x<tn[t]&&(tn[t]=e.x),e.y<tn[t+1]&&(tn[t+1]=e.y),e.x>tn[t+2]&&(tn[t+2]=e.x),e.y>tn[t+3]&&(tn[t+3]=e.y)}function ip(n){let e=Au[n];for(;e.prev.next!==e;)e=e.next;return Au[n]=e,e}function rp(n){let e=Tu[n];for(;e.prev.next!==e;)e=e.next;return Tu[n]=e,e}function D1(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(ka(n,t))return t;for(let u=0,p=0;u<bl;u++,p+=4){if(r<tn[p+1]||r>tn[p+3]||tn[p]>i||tn[p+2]<=s)continue;const g=ip(u);t=rp(u);do{if(t.prev.next===t){if(ka(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const y=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(y<=i&&y>s&&(s=y,a=t.x<t.next.x?t:t.next,y===i))return a}}t=t.next}while(t!==g)}if(!a)return null;const o=a.x,c=a.y,l=Math.min(r,c),h=Math.max(r,c);let f=1/0;for(let u=0,p=0;u<bl;u++,p+=4){if(tn[p+2]<o||tn[p]>i||tn[p+3]<l||tn[p+1]>h)continue;const g=ip(u);t=rp(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=o&&i!==t.x&&wl(r<c?i:s,r,o,c,r<c?s:i,r,t.x,t.y)){const y=Math.abs(r-t.y)/(i-t.x);(Va(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(y<f||y===f&&(t.x>a.x||t.x===a.x&&L1(a,t)))&&(a=t,f=y)}t=t.next}while(t!==g)}return a}function L1(n,e){return on(n.prev,n,e.prev)<0&&on(e.next,n,n.next)<0}const si=[];let ma=[],Fr=new Uint32Array(0),ga=new Uint32Array(0);const _a=new Uint32Array(256);function N1(n,e,t,i){let r=n,s=0;do r.z=Ru(r.x,r.y,e,t,i),si[s++]=r,r=r.next;while(r!==n);O1(s);let a=null;for(let o=0;o<s;o++){const c=si[o];c.prevZ=a,a&&(a.nextZ=c),a=c}a.nextZ=null}function O1(n){if(n<=32){for(let e=1;e<n;e++){const t=si[e],i=t.z;let r=e-1;for(;r>=0&&si[r].z>i;)si[r+1]=si[r],r--;si[r+1]=t}return}Fr.length<n&&(Fr=new Uint32Array(n),ga=new Uint32Array(n),ma=new Array(n));for(let e=0;e<n;e++)Fr[e]=si[e].z;Io(n,si,Fr,ma,ga,0),Io(n,ma,ga,si,Fr,8),Io(n,si,Fr,ma,ga,16),Io(n,ma,ga,si,Fr,24)}function Io(n,e,t,i,r,s){_a.fill(0);for(let o=0;o<n;o++)_a[t[o]>>>s&255]++;let a=0;for(let o=0;o<256;o++){const c=_a[o];_a[o]=a,a+=c}for(let o=0;o<n;o++){const c=t[o],l=_a[c>>>s&255]++;i[l]=e[o],r[l]=c}}function Ru(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function U1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wl(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function F1(n,e){const t=ka(n,e)&&on(n.prev,n,n.next)>0&&on(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||Va(n,e)&&Va(e,n)&&(on(n.prev,n,e.prev)!==0||on(n,e.prev,e)!==0))&&!B1(n,e)&&(t||z1(n,e))}function on(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ka(n,e){return n.x===e.x&&n.y===e.y}function J0(n,e,t,i,r=!0){const s=on(n,e,t),a=on(n,e,i),o=on(t,i,n),c=on(t,i,e);return(s>0&&a<0||s<0&&a>0)&&(o>0&&c<0||o<0&&c>0)?!0:r?!!(s===0&&Do(n,t,e)||a===0&&Do(n,i,e)||o===0&&Do(t,n,i)||c===0&&Do(t,e,i)):!1}function Do(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function B1(n,e){const t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y);let a=n;do{const o=a.next;if(a.x>i&&o.x>i||a.x<t&&o.x<t||a.y>s&&o.y>s||a.y<r&&o.y<r){a=o;continue}if(a.i!==n.i&&o.i!==n.i&&a.i!==e.i&&o.i!==e.i&&J0(a,o,n,e))return!0;a=o}while(a!==n);return!1}function Va(n,e){return on(n.prev,n,n.next)<0?on(n,e,n.next)>=0&&on(n,n.prev,e)>=0:on(n,e,n.prev)<0||on(n,n.next,e)<0}function z1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{const a=t.next;t.y>s!=a.y>s&&r<(a.x-t.x)*(s-t.y)/(a.y-t.y)+t.x&&(i=!i),t=a}while(t!==n);return i}function j0(n,e){const t=Cu(n.i,n.x,n.y),i=Cu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function sp(n,e,t,i){const r=Cu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),wu&&I1(n.prev,n.next)}function Cu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function k1(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}function Q0(n){const e=[],t=[],i=n[0][0].length;let r=0,s=0;for(const a of n){for(const o of a)for(let c=0;c<i;c++)e.push(o[c]);s&&(r+=s,t.push(r)),s=a.length}return{vertices:e,holes:t,dimensions:i}}const ap=Math.pow(2,-52),Lo=new Uint32Array(512);class Ga{static from(e,t=$1,i=X1){const r=e.length,s=new Float64Array(r*2);for(let a=0;a<r;a++){const o=e[a];s[2*a]=t(o),s[2*a+1]=i(o)}return new Ga(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:r,_hullHash:s}=this,a=e.length>>1;let o=1/0,c=1/0,l=-1/0,h=-1/0;for(let w=0;w<a;w++){const B=e[2*w],N=e[2*w+1];B<o&&(o=B),N<c&&(c=N),B>l&&(l=B),N>h&&(h=N),this._ids[w]=w}const f=(o+l)/2,u=(c+h)/2;let p=0,g=0,y=0;for(let w=0,B=1/0;w<a;w++){const N=tf(f,u,e[2*w],e[2*w+1]);N<B&&(p=w,B=N)}const x=e[2*p],_=e[2*p+1];for(let w=0,B=1/0;w<a;w++){if(w===p)continue;const N=tf(x,_,e[2*w],e[2*w+1]);N<B&&N>0&&(g=w,B=N)}let T=e[2*g],P=e[2*g+1],M=1/0;for(let w=0;w<a;w++){if(w===p||w===g)continue;const B=G1(x,_,T,P,e[2*w],e[2*w+1]);B<M&&(y=w,M=B)}let I=e[2*y],R=e[2*y+1];if(M===1/0){for(let N=0;N<a;N++)this._dists[N]=e[2*N]-e[0]||e[2*N+1]-e[1];Ps(this._ids,this._dists,0,a-1);const w=new Uint32Array(a);let B=0;for(let N=0,z=-1/0;N<a;N++){const L=this._ids[N],k=this._dists[L];k>z&&(w[B++]=L,z=k)}this.hull=w.subarray(0,B),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(wa(x,_,T,P,I,R)<0){const w=g,B=T,N=P;g=y,T=I,P=R,y=w,I=B,R=N}const O=W1(x,_,T,P,I,R);this._cx=O.x,this._cy=O.y;for(let w=0;w<a;w++)this._dists[w]=tf(e[2*w],e[2*w+1],O.x,O.y);Ps(this._ids,this._dists,0,a-1),this._hullStart=p;let S=3;i[p]=t[y]=g,i[g]=t[p]=y,i[y]=t[g]=p,r[p]=0,r[g]=1,r[y]=2,s.fill(-1),s[this._hashKey(x,_)]=p,s[this._hashKey(T,P)]=g,s[this._hashKey(I,R)]=y,this.trianglesLen=0,this._addTriangle(p,g,y,-1,-1,-1);for(let w=0,B=0,N=0;w<this._ids.length;w++){const z=this._ids[w],L=e[2*z],k=e[2*z+1];if(w>0&&Math.abs(L-B)<=ap&&Math.abs(k-N)<=ap||(B=L,N=k,z===p||z===g||z===y))continue;let A=0;for(let te=0,ue=this._hashKey(L,k);te<this._hashSize&&(A=s[(ue+te)%this._hashSize],!(A!==-1&&A!==i[A]));te++);A=t[A];let U=A,F;for(;F=i[U],wa(L,k,e[2*U],e[2*U+1],e[2*F],e[2*F+1])>=0;)if(U=F,U===A){U=-1;break}if(U===-1)continue;let G=this._addTriangle(U,z,i[U],-1,-1,r[U]);r[z]=this._legalize(G+2),r[U]=G,S++;let Z=i[U];for(;F=i[Z],wa(L,k,e[2*Z],e[2*Z+1],e[2*F],e[2*F+1])<0;)G=this._addTriangle(Z,z,F,r[z],-1,r[Z]),r[z]=this._legalize(G+2),i[Z]=Z,S--,Z=F;if(U===A)for(;F=t[U],wa(L,k,e[2*F],e[2*F+1],e[2*U],e[2*U+1])<0;)G=this._addTriangle(F,z,U,-1,r[U],r[F]),this._legalize(G+2),r[F]=G,i[U]=U,S--,U=F;this._hullStart=t[z]=U,i[U]=t[Z]=z,i[z]=Z,s[this._hashKey(L,k)]=z,s[this._hashKey(e[2*U],e[2*U+1])]=U}this.hull=new Uint32Array(S);for(let w=0,B=this._hullStart;w<S;w++)this.hull[w]=B,B=i[B];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(V1(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:r}=this;let s=0,a=0;for(;;){const o=i[e],c=e-e%3;if(a=c+(e+2)%3,o===-1){if(s===0)break;e=Lo[--s];continue}const l=o-o%3,h=c+(e+1)%3,f=l+(o+2)%3,u=t[a],p=t[e],g=t[h],y=t[f];if(H1(r[2*u],r[2*u+1],r[2*p],r[2*p+1],r[2*g],r[2*g+1],r[2*y],r[2*y+1])){t[e]=y,t[o]=u;const _=i[f];if(_===-1){let P=this._hullStart;do{if(this._hullTri[P]===f){this._hullTri[P]=e;break}P=this._hullPrev[P]}while(P!==this._hullStart)}this._link(e,_),this._link(o,i[a]),this._link(a,f);const T=l+(o+1)%3;s<Lo.length&&(Lo[s++]=T)}else{if(s===0)break;e=Lo[--s]}}return a}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,r,s,a){const o=this.trianglesLen;return this._triangles[o]=e,this._triangles[o+1]=t,this._triangles[o+2]=i,this._link(o,r),this._link(o+1,s),this._link(o+2,a),this.trianglesLen+=3,o}}function V1(n,e){const t=n/(Math.abs(n)+Math.abs(e));return(e>0?3-t:1+t)/4}function tf(n,e,t,i){const r=n-t,s=e-i;return r*r+s*s}function H1(n,e,t,i,r,s,a,o){const c=n-a,l=e-o,h=t-a,f=i-o,u=r-a,p=s-o,g=c*c+l*l,y=h*h+f*f,x=u*u+p*p;return c*(f*x-y*p)-l*(h*x-y*u)+g*(h*p-f*u)<0}function G1(n,e,t,i,r,s){const a=t-n,o=i-e,c=r-n,l=s-e,h=a*a+o*o,f=c*c+l*l,u=.5/(a*l-o*c),p=(l*h-o*f)*u,g=(a*f-c*h)*u;return p*p+g*g}function W1(n,e,t,i,r,s){const a=t-n,o=i-e,c=r-n,l=s-e,h=a*a+o*o,f=c*c+l*l,u=.5/(a*l-o*c),p=n+(l*h-o*f)*u,g=e+(a*f-c*h)*u;return{x:p,y:g}}function Ps(n,e,t,i){if(i-t<=20)for(let r=t+1;r<=i;r++){const s=n[r],a=e[s];let o=r-1;for(;o>=t&&e[n[o]]>a;)n[o+1]=n[o--];n[o+1]=s}else{const r=t+i>>1;let s=t+1,a=i;xa(n,r,s),e[n[t]]>e[n[i]]&&xa(n,t,i),e[n[s]]>e[n[i]]&&xa(n,s,i),e[n[t]]>e[n[s]]&&xa(n,t,s);const o=n[s],c=e[o];for(;;){do s++;while(e[n[s]]<c);do a--;while(e[n[a]]>c);if(a<s)break;xa(n,s,a)}n[t+1]=n[a],n[a]=o,i-s+1>=a-t?(Ps(n,e,s,i),Ps(n,e,t,a-1)):(Ps(n,e,t,a-1),Ps(n,e,s,i))}}function xa(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function $1(n){return n[0]}function X1(n){return n[1]}var Ct=1e-6,Tl=1e-12,wt=Math.PI,ui=wt/2,Al=wt/4,ei=wt*2,en=180/wt,ot=wt/180,Ht=Math.abs,eg=Math.atan,di=Math.atan2,ct=Math.cos,Pu=Math.hypot,st=Math.sin,q1=Math.sign||function(n){return n>0?1:n<0?-1:0},ur=Math.sqrt;function Y1(n){return n>1?0:n<-1?wt:Math.acos(n)}function hr(n){return n>1?ui:n<-1?-ui:Math.asin(n)}function op(n){return(n=st(n/2))*n}function bn(){}function Rl(n,e){n&&cp.hasOwnProperty(n.type)&&cp[n.type](n,e)}var lp={Feature:function(n,e){Rl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)Rl(t[i].geometry,e)}},cp={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){Iu(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Iu(t[i],e,0)},Polygon:function(n,e){fp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)fp(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)Rl(t[i],e)}};function Iu(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function fp(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)Iu(n[t],e,1);e.polygonEnd()}function uc(n,e){n&&lp.hasOwnProperty(n.type)?lp[n.type](n,e):Rl(n,e)}var Cl=new or,up=new or,tg,ng,Du,Lu,Nu,dr={point:bn,lineStart:bn,lineEnd:bn,polygonStart:function(){Cl=new or,dr.lineStart=K1,dr.lineEnd=Z1},polygonEnd:function(){var n=+Cl;up.add(n<0?ei+n:n),this.lineStart=this.lineEnd=this.point=bn},sphere:function(){up.add(ei)}};function K1(){dr.point=J1}function Z1(){ig(tg,ng)}function J1(n,e){dr.point=ig,tg=n,ng=e,n*=ot,e*=ot,Du=n,Lu=ct(e=e/2+Al),Nu=st(e)}function ig(n,e){n*=ot,e*=ot,e=e/2+Al;var t=n-Du,i=t>=0?1:-1,r=i*t,s=ct(e),a=st(e),o=Nu*a,c=Lu*s+o*ct(r),l=o*i*st(r);Cl.add(di(l,c)),Du=n,Lu=s,Nu=a}function Pl(n){return[di(n[1],n[0]),hr(n[2])]}function es(n){var e=n[0],t=n[1],i=ct(t);return[i*ct(e),i*st(e),st(t)]}function No(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Hs(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function nf(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Oo(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Il(n){var e=ur(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}var Jt,Wn,Qt,jn,kr,rg,sg,Os,Da,Mr,pr,er={point:Ou,lineStart:hp,lineEnd:dp,polygonStart:function(){er.point=og,er.lineStart=j1,er.lineEnd=Q1,Da=new or,dr.polygonStart()},polygonEnd:function(){dr.polygonEnd(),er.point=Ou,er.lineStart=hp,er.lineEnd=dp,Cl<0?(Jt=-(Qt=180),Wn=-(jn=90)):Da>Ct?jn=90:Da<-Ct&&(Wn=-90),pr[0]=Jt,pr[1]=Qt},sphere:function(){Jt=-(Qt=180),Wn=-(jn=90)}};function Ou(n,e){Mr.push(pr=[Jt=n,Qt=n]),e<Wn&&(Wn=e),e>jn&&(jn=e)}function ag(n,e){var t=es([n*ot,e*ot]);if(Os){var i=Hs(Os,t),r=[i[1],-i[0],0],s=Hs(r,i);Il(s),s=Pl(s);var a=n-kr,o=a>0?1:-1,c=s[0]*en*o,l,h=Ht(a)>180;h^(o*kr<c&&c<o*n)?(l=s[1]*en,l>jn&&(jn=l)):(c=(c+360)%360-180,h^(o*kr<c&&c<o*n)?(l=-s[1]*en,l<Wn&&(Wn=l)):(e<Wn&&(Wn=e),e>jn&&(jn=e))),h?n<kr?Zn(Jt,n)>Zn(Jt,Qt)&&(Qt=n):Zn(n,Qt)>Zn(Jt,Qt)&&(Jt=n):Qt>=Jt?(n<Jt&&(Jt=n),n>Qt&&(Qt=n)):n>kr?Zn(Jt,n)>Zn(Jt,Qt)&&(Qt=n):Zn(n,Qt)>Zn(Jt,Qt)&&(Jt=n)}else Mr.push(pr=[Jt=n,Qt=n]);e<Wn&&(Wn=e),e>jn&&(jn=e),Os=t,kr=n}function hp(){er.point=ag}function dp(){pr[0]=Jt,pr[1]=Qt,er.point=Ou,Os=null}function og(n,e){if(Os){var t=n-kr;Da.add(Ht(t)>180?t+(t>0?360:-360):t)}else rg=n,sg=e;dr.point(n,e),ag(n,e)}function j1(){dr.lineStart()}function Q1(){og(rg,sg),dr.lineEnd(),Ht(Da)>Ct&&(Jt=-(Qt=180)),pr[0]=Jt,pr[1]=Qt,Os=null}function Zn(n,e){return(e-=n)<0?e+360:e}function ew(n,e){return n[0]-e[0]}function pp(n,e){return n[0]<=n[1]?n[0]<=e&&e<=n[1]:e<n[0]||n[1]<e}function lg(n){var e,t,i,r,s,a,o;if(jn=Qt=-(Jt=Wn=1/0),Mr=[],uc(n,er),t=Mr.length){for(Mr.sort(ew),e=1,i=Mr[0],s=[i];e<t;++e)r=Mr[e],pp(i,r[0])||pp(i,r[1])?(Zn(i[0],r[1])>Zn(i[0],i[1])&&(i[1]=r[1]),Zn(r[0],i[1])>Zn(i[0],i[1])&&(i[0]=r[0])):s.push(i=r);for(a=-1/0,t=s.length-1,e=0,i=s[t];e<=t;i=r,++e)r=s[e],(o=Zn(i[1],r[0]))>a&&(a=o,Jt=r[0],Qt=i[1])}return Mr=pr=null,Jt===1/0||Wn===1/0?[[NaN,NaN],[NaN,NaN]]:[[Jt,Wn],[Qt,jn]]}var Ta,Dl,Ll,Nl,Ol,Ul,Fl,Bl,Uu,Fu,Bu,cg,fg,Un,Fn,Bn,Ti={sphere:bn,point:bh,lineStart:mp,lineEnd:gp,polygonStart:function(){Ti.lineStart=iw,Ti.lineEnd=rw},polygonEnd:function(){Ti.lineStart=mp,Ti.lineEnd=gp}};function bh(n,e){n*=ot,e*=ot;var t=ct(e);ja(t*ct(n),t*st(n),st(e))}function ja(n,e,t){++Ta,Ll+=(n-Ll)/Ta,Nl+=(e-Nl)/Ta,Ol+=(t-Ol)/Ta}function mp(){Ti.point=tw}function tw(n,e){n*=ot,e*=ot;var t=ct(e);Un=t*ct(n),Fn=t*st(n),Bn=st(e),Ti.point=nw,ja(Un,Fn,Bn)}function nw(n,e){n*=ot,e*=ot;var t=ct(e),i=t*ct(n),r=t*st(n),s=st(e),a=di(ur((a=Fn*s-Bn*r)*a+(a=Bn*i-Un*s)*a+(a=Un*r-Fn*i)*a),Un*i+Fn*r+Bn*s);Dl+=a,Ul+=a*(Un+(Un=i)),Fl+=a*(Fn+(Fn=r)),Bl+=a*(Bn+(Bn=s)),ja(Un,Fn,Bn)}function gp(){Ti.point=bh}function iw(){Ti.point=sw}function rw(){ug(cg,fg),Ti.point=bh}function sw(n,e){cg=n,fg=e,n*=ot,e*=ot,Ti.point=ug;var t=ct(e);Un=t*ct(n),Fn=t*st(n),Bn=st(e),ja(Un,Fn,Bn)}function ug(n,e){n*=ot,e*=ot;var t=ct(e),i=t*ct(n),r=t*st(n),s=st(e),a=Fn*s-Bn*r,o=Bn*i-Un*s,c=Un*r-Fn*i,l=Pu(a,o,c),h=hr(l),f=l&&-h/l;Uu.add(f*a),Fu.add(f*o),Bu.add(f*c),Dl+=h,Ul+=h*(Un+(Un=i)),Fl+=h*(Fn+(Fn=r)),Bl+=h*(Bn+(Bn=s)),ja(Un,Fn,Bn)}function _p(n){Ta=Dl=Ll=Nl=Ol=Ul=Fl=Bl=0,Uu=new or,Fu=new or,Bu=new or,uc(n,Ti);var e=+Uu,t=+Fu,i=+Bu,r=Pu(e,t,i);return r<Tl&&(e=Ul,t=Fl,i=Bl,Dl<Ct&&(e=Ll,t=Nl,i=Ol),r=Pu(e,t,i),r<Tl)?[NaN,NaN]:[di(t,e)*en,hr(i/r)*en]}function zu(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function ku(n,e){return Ht(n)>wt&&(n-=Math.round(n/ei)*ei),[n,e]}ku.invert=ku;function hg(n,e,t){return(n%=ei)?e||t?zu(vp(n),yp(e,t)):vp(n):e||t?yp(e,t):ku}function xp(n){return function(e,t){return e+=n,Ht(e)>wt&&(e-=Math.round(e/ei)*ei),[e,t]}}function vp(n){var e=xp(n);return e.invert=xp(-n),e}function yp(n,e){var t=ct(n),i=st(n),r=ct(e),s=st(e);function a(o,c){var l=ct(c),h=ct(o)*l,f=st(o)*l,u=st(c),p=u*t+h*i;return[di(f*r-p*s,h*t-u*i),hr(p*r+f*s)]}return a.invert=function(o,c){var l=ct(c),h=ct(o)*l,f=st(o)*l,u=st(c),p=u*r-f*s;return[di(f*r+u*s,h*t+p*i),hr(p*t-h*i)]},a}function aw(n){n=hg(n[0]*ot,n[1]*ot,n.length>2?n[2]*ot:0);function e(t){return t=n(t[0]*ot,t[1]*ot),t[0]*=en,t[1]*=en,t}return e.invert=function(t){return t=n.invert(t[0]*ot,t[1]*ot),t[0]*=en,t[1]*=en,t},e}function ow(n,e,t,i,r,s){if(t){var a=ct(e),o=st(e),c=i*t;r==null?(r=e+i*ei,s=e-c/2):(r=Sp(a,r),s=Sp(a,s),(i>0?r<s:r>s)&&(r+=i*ei));for(var l,h=r;i>0?h>s:h<s;h-=c)l=Pl([a,-o*ct(h),-o*st(h)]),n.point(l[0],l[1])}}function Sp(n,e){e=es(e),e[0]-=n,Il(e);var t=Y1(-e[1]);return((-e[2]<0?-t:t)+ei-Ct)%ei}function dg(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:bn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function al(n,e){return Ht(n[0]-e[0])<Ct&&Ht(n[1]-e[1])<Ct}function Uo(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function pg(n,e,t,i,r){var s=[],a=[],o,c;if(n.forEach(function(g){if(!((y=g.length-1)<=0)){var y,x=g[0],_=g[y],T;if(al(x,_)){if(!x[2]&&!_[2]){for(r.lineStart(),o=0;o<y;++o)r.point((x=g[o])[0],x[1]);r.lineEnd();return}_[0]+=2*Ct}s.push(T=new Uo(x,g,null,!0)),a.push(T.o=new Uo(x,null,T,!1)),s.push(T=new Uo(_,g,null,!1)),a.push(T.o=new Uo(_,null,T,!0))}}),!!s.length){for(a.sort(e),Mp(s),Mp(a),o=0,c=a.length;o<c;++o)a[o].e=t=!t;for(var l=s[0],h,f;;){for(var u=l,p=!0;u.v;)if((u=u.n)===l)return;h=u.z,r.lineStart();do{if(u.v=u.o.v=!0,u.e){if(p)for(o=0,c=h.length;o<c;++o)r.point((f=h[o])[0],f[1]);else i(u.x,u.n.x,1,r);u=u.n}else{if(p)for(h=u.p.z,o=h.length-1;o>=0;--o)r.point((f=h[o])[0],f[1]);else i(u.x,u.p.x,-1,r);u=u.p}u=u.o,h=u.z,p=!p}while(!u.v);r.lineEnd()}}}function Mp(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function rf(n){return Ht(n[0])<=wt?n[0]:q1(n[0])*((Ht(n[0])+wt)%ei-wt)}function mg(n,e){var t=rf(e),i=e[1],r=st(i),s=[st(t),-ct(t),0],a=0,o=0,c=new or;r===1?i=ui+Ct:r===-1&&(i=-ui-Ct);for(var l=0,h=n.length;l<h;++l)if(u=(f=n[l]).length)for(var f,u,p=f[u-1],g=rf(p),y=p[1]/2+Al,x=st(y),_=ct(y),T=0;T<u;++T,g=M,x=R,_=O,p=P){var P=f[T],M=rf(P),I=P[1]/2+Al,R=st(I),O=ct(I),S=M-g,w=S>=0?1:-1,B=w*S,N=B>wt,z=x*R;if(c.add(di(z*w*st(B),_*O+z*ct(B))),a+=N?S+w*ei:S,N^g>=t^M>=t){var L=Hs(es(p),es(P));Il(L);var k=Hs(s,L);Il(k);var A=(N^S>=0?-1:1)*hr(k[2]);(i>A||i===A&&(L[0]||L[1]))&&(o+=N^S>=0?1:-1)}}return(a<-Ct||a<Ct&&c<-Tl)^o&1}function gg(n,e,t,i){return function(r){var s=e(r),a=dg(),o=e(a),c=!1,l,h,f,u={point:p,lineStart:y,lineEnd:x,polygonStart:function(){u.point=_,u.lineStart=T,u.lineEnd=P,h=[],l=[]},polygonEnd:function(){u.point=p,u.lineStart=y,u.lineEnd=x,h=Ba(h);var M=mg(l,i);h.length?(c||(r.polygonStart(),c=!0),pg(h,cw,M,t,r)):M&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),h=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(M,I){n(M,I)&&r.point(M,I)}function g(M,I){s.point(M,I)}function y(){u.point=g,s.lineStart()}function x(){u.point=p,s.lineEnd()}function _(M,I){f.push([M,I]),o.point(M,I)}function T(){o.lineStart(),f=[]}function P(){_(f[0][0],f[0][1]),o.lineEnd();var M=o.clean(),I=a.result(),R,O=I.length,S,w,B;if(f.pop(),l.push(f),f=null,!!O){if(M&1){if(w=I[0],(S=w.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),R=0;R<S;++R)r.point((B=w[R])[0],B[1]);r.lineEnd()}return}O>1&&M&2&&I.push(I.pop().concat(I.shift())),h.push(I.filter(lw))}}return u}}function lw(n){return n.length>1}function cw(n,e){return((n=n.x)[0]<0?n[1]-ui-Ct:ui-n[1])-((e=e.x)[0]<0?e[1]-ui-Ct:ui-e[1])}const Ep=gg(function(){return!0},fw,hw,[-wt,-ui]);function fw(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,a){var o=s>0?wt:-wt,c=Ht(s-e);Ht(c-wt)<Ct?(n.point(e,t=(t+a)/2>0?ui:-ui),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),n.point(s,t),r=0):i!==o&&c>=wt&&(Ht(e-i)<Ct&&(e-=i*Ct),Ht(s-o)<Ct&&(s-=o*Ct),t=uw(e,t,s,a),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(o,t),r=0),n.point(e=s,t=a),i=o},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function uw(n,e,t,i){var r,s,a=st(n-t);return Ht(a)>Ct?eg((st(e)*(s=ct(i))*st(t)-st(i)*(r=ct(e))*st(n))/(r*s*a)):(e+i)/2}function hw(n,e,t,i){var r;if(n==null)r=t*ui,i.point(-wt,r),i.point(0,r),i.point(wt,r),i.point(wt,0),i.point(wt,-r),i.point(0,-r),i.point(-wt,-r),i.point(-wt,0),i.point(-wt,r);else if(Ht(n[0]-e[0])>Ct){var s=n[0]<e[0]?wt:-wt;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function dw(n){var e=ct(n),t=2*ot,i=e>0,r=Ht(e)>Ct;function s(h,f,u,p){ow(p,n,t,u,h,f)}function a(h,f){return ct(h)*ct(f)>e}function o(h){var f,u,p,g,y;return{lineStart:function(){g=p=!1,y=1},point:function(x,_){var T=[x,_],P,M=a(x,_),I=i?M?0:l(x,_):M?l(x+(x<0?wt:-wt),_):0;if(!f&&(g=p=M)&&h.lineStart(),M!==p&&(P=c(f,T),(!P||al(f,P)||al(T,P))&&(T[2]=1)),M!==p)y=0,M?(h.lineStart(),P=c(T,f),h.point(P[0],P[1])):(P=c(f,T),h.point(P[0],P[1],2),h.lineEnd()),f=P;else if(r&&f&&i^M){var R;!(I&u)&&(R=c(T,f,!0))&&(y=0,i?(h.lineStart(),h.point(R[0][0],R[0][1]),h.point(R[1][0],R[1][1]),h.lineEnd()):(h.point(R[1][0],R[1][1]),h.lineEnd(),h.lineStart(),h.point(R[0][0],R[0][1],3)))}M&&(!f||!al(f,T))&&h.point(T[0],T[1]),f=T,p=M,u=I},lineEnd:function(){p&&h.lineEnd(),f=null},clean:function(){return y|(g&&p)<<1}}}function c(h,f,u){var p=es(h),g=es(f),y=[1,0,0],x=Hs(p,g),_=No(x,x),T=x[0],P=_-T*T;if(!P)return!u&&h;var M=e*_/P,I=-e*T/P,R=Hs(y,x),O=Oo(y,M),S=Oo(x,I);nf(O,S);var w=R,B=No(O,w),N=No(w,w),z=B*B-N*(No(O,O)-1);if(!(z<0)){var L=ur(z),k=Oo(w,(-B-L)/N);if(nf(k,O),k=Pl(k),!u)return k;var A=h[0],U=f[0],F=h[1],G=f[1],Z;U<A&&(Z=A,A=U,U=Z);var te=U-A,ue=Ht(te-wt)<Ct,pe=ue||te<Ct;if(!ue&&G<F&&(Z=F,F=G,G=Z),pe?ue?F+G>0^k[1]<(Ht(k[0]-A)<Ct?F:G):F<=k[1]&&k[1]<=G:te>wt^(A<=k[0]&&k[0]<=U)){var ze=Oo(w,(-B+L)/N);return nf(ze,O),[k,Pl(ze)]}}}function l(h,f){var u=i?n:wt-n,p=0;return h<-u?p|=1:h>u&&(p|=2),f<-u?p|=4:f>u&&(p|=8),p}return gg(a,o,s,i?[0,-n]:[-wt,n-wt])}function pw(n,e,t,i,r,s){var a=n[0],o=n[1],c=e[0],l=e[1],h=0,f=1,u=c-a,p=l-o,g;if(g=t-a,!(!u&&g>0)){if(g/=u,u<0){if(g<h)return;g<f&&(f=g)}else if(u>0){if(g>f)return;g>h&&(h=g)}if(g=r-a,!(!u&&g<0)){if(g/=u,u<0){if(g>f)return;g>h&&(h=g)}else if(u>0){if(g<h)return;g<f&&(f=g)}if(g=i-o,!(!p&&g>0)){if(g/=p,p<0){if(g<h)return;g<f&&(f=g)}else if(p>0){if(g>f)return;g>h&&(h=g)}if(g=s-o,!(!p&&g<0)){if(g/=p,p<0){if(g>f)return;g>h&&(h=g)}else if(p>0){if(g<h)return;g<f&&(f=g)}return h>0&&(n[0]=a+h*u,n[1]=o+h*p),f<1&&(e[0]=a+f*u,e[1]=o+f*p),!0}}}}}var Aa=1e9,Fo=-Aa;function mw(n,e,t,i){function r(l,h){return n<=l&&l<=t&&e<=h&&h<=i}function s(l,h,f,u){var p=0,g=0;if(l==null||(p=a(l,f))!==(g=a(h,f))||c(l,h)<0^f>0)do u.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+f+4)%4)!==g);else u.point(h[0],h[1])}function a(l,h){return Ht(l[0]-n)<Ct?h>0?0:3:Ht(l[0]-t)<Ct?h>0?2:1:Ht(l[1]-e)<Ct?h>0?1:0:h>0?3:2}function o(l,h){return c(l.x,h.x)}function c(l,h){var f=a(l,1),u=a(h,1);return f!==u?f-u:f===0?h[1]-l[1]:f===1?l[0]-h[0]:f===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,f=dg(),u,p,g,y,x,_,T,P,M,I,R,O={point:S,lineStart:z,lineEnd:L,polygonStart:B,polygonEnd:N};function S(A,U){r(A,U)&&h.point(A,U)}function w(){for(var A=0,U=0,F=p.length;U<F;++U)for(var G=p[U],Z=1,te=G.length,ue=G[0],pe,ze,at=ue[0],et=ue[1];Z<te;++Z)pe=at,ze=et,ue=G[Z],at=ue[0],et=ue[1],ze<=i?et>i&&(at-pe)*(i-ze)>(et-ze)*(n-pe)&&++A:et<=i&&(at-pe)*(i-ze)<(et-ze)*(n-pe)&&--A;return A}function B(){h=f,u=[],p=[],R=!0}function N(){var A=w(),U=R&&A,F=(u=Ba(u)).length;(U||F)&&(l.polygonStart(),U&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),F&&pg(u,o,A,s,l),l.polygonEnd()),h=l,u=p=g=null}function z(){O.point=k,p&&p.push(g=[]),I=!0,M=!1,T=P=NaN}function L(){u&&(k(y,x),_&&M&&f.rejoin(),u.push(f.result())),O.point=S,M&&h.lineEnd()}function k(A,U){var F=r(A,U);if(p&&g.push([A,U]),I)y=A,x=U,_=F,I=!1,F&&(h.lineStart(),h.point(A,U));else if(F&&M)h.point(A,U);else{var G=[T=Math.max(Fo,Math.min(Aa,T)),P=Math.max(Fo,Math.min(Aa,P))],Z=[A=Math.max(Fo,Math.min(Aa,A)),U=Math.max(Fo,Math.min(Aa,U))];pw(G,Z,n,e,t,i)?(M||(h.lineStart(),h.point(G[0],G[1])),h.point(Z[0],Z[1]),F||h.lineEnd(),R=!1):F&&(h.lineStart(),h.point(A,U),R=!1)}T=A,P=U,M=F}return O}}var Vu,Hu,ol,ll,Gs={sphere:bn,point:bn,lineStart:gw,lineEnd:bn,polygonStart:bn,polygonEnd:bn};function gw(){Gs.point=xw,Gs.lineEnd=_w}function _w(){Gs.point=Gs.lineEnd=bn}function xw(n,e){n*=ot,e*=ot,Hu=n,ol=st(e),ll=ct(e),Gs.point=vw}function vw(n,e){n*=ot,e*=ot;var t=st(e),i=ct(e),r=Ht(n-Hu),s=ct(r),a=st(r),o=i*a,c=ll*t-ol*i*s,l=ol*t+ll*i*s;Vu.add(di(ur(o*o+c*c),l)),Hu=n,ol=t,ll=i}function yw(n){return Vu=new or,uc(n,Gs),+Vu}var Gu=[null,null],Sw={type:"LineString",coordinates:Gu};function Ws(n,e){return Gu[0]=n,Gu[1]=e,yw(Sw)}var bp={Feature:function(n,e){return zl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)if(zl(t[i].geometry,e))return!0;return!1}},wp={Sphere:function(){return!0},Point:function(n,e){return Tp(n.coordinates,e)},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Tp(t[i],e))return!0;return!1},LineString:function(n,e){return Ap(n.coordinates,e)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Ap(t[i],e))return!0;return!1},Polygon:function(n,e){return Rp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Rp(t[i],e))return!0;return!1},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)if(zl(t[i],e))return!0;return!1}};function zl(n,e){return n&&wp.hasOwnProperty(n.type)?wp[n.type](n,e):!1}function Tp(n,e){return Ws(n,e)===0}function Ap(n,e){for(var t,i,r,s=0,a=n.length;s<a;s++){if(i=Ws(n[s],e),i===0||s>0&&(r=Ws(n[s],n[s-1]),r>0&&t<=r&&i<=r&&(t+i-r)*(1-Math.pow((t-i)/r,2))<Tl*r))return!0;t=i}return!1}function Rp(n,e){return!!mg(n.map(Mw),_g(e))}function Mw(n){return n=n.map(_g),n.pop(),n}function _g(n){return[n[0]*ot,n[1]*ot]}function Ew(n,e){return(n&&bp.hasOwnProperty(n.type)?bp[n.type]:zl)(n,e)}function bw(n,e){var t=n[0]*ot,i=n[1]*ot,r=e[0]*ot,s=e[1]*ot,a=ct(i),o=st(i),c=ct(s),l=st(s),h=a*ct(t),f=a*st(t),u=c*ct(r),p=c*st(r),g=2*hr(ur(op(s-i)+a*c*op(r-t))),y=st(g),x=g?function(_){var T=st(_*=g)/y,P=st(g-_)/y,M=P*h+T*u,I=P*f+T*p,R=P*o+T*l;return[di(I,M)*en,di(R,ur(M*M+I*I))*en]}:function(){return[t*en,i*en]};return x.distance=g,x}const Cp=n=>n;var $s=1/0,kl=$s,Wa=-$s,Vl=Wa,Pp={point:ww,lineStart:bn,lineEnd:bn,polygonStart:bn,polygonEnd:bn,result:function(){var n=[[$s,kl],[Wa,Vl]];return Wa=Vl=-(kl=$s=1/0),n}};function ww(n,e){n<$s&&($s=n),n>Wa&&(Wa=n),e<kl&&(kl=e),e>Vl&&(Vl=e)}function wh(n){return function(e){var t=new Wu;for(var i in n)t[i]=n[i];return t.stream=e,t}}function Wu(){}Wu.prototype={constructor:Wu,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Th(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),uc(t,n.stream(Pp)),e(Pp.result()),i!=null&&n.clipExtent(i),n}function xg(n,e,t){return Th(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],a=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),o=+e[0][0]+(r-a*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-a*(i[1][1]+i[0][1]))/2;n.scale(150*a).translate([o,c])},t)}function Tw(n,e,t){return xg(n,[[0,0],e],t)}function Aw(n,e,t){return Th(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),a=(r-s*(i[1][0]+i[0][0]))/2,o=-s*i[0][1];n.scale(150*s).translate([a,o])},t)}function Rw(n,e,t){return Th(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),a=-s*i[0][0],o=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([a,o])},t)}var Ip=16,Cw=ct(30*ot);function Dp(n,e){return+e?Iw(n,e):Pw(n)}function Pw(n){return wh({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function Iw(n,e){function t(i,r,s,a,o,c,l,h,f,u,p,g,y,x){var _=l-i,T=h-r,P=_*_+T*T;if(P>4*e&&y--){var M=a+u,I=o+p,R=c+g,O=ur(M*M+I*I+R*R),S=hr(R/=O),w=Ht(Ht(R)-1)<Ct||Ht(s-f)<Ct?(s+f)/2:di(I,M),B=n(w,S),N=B[0],z=B[1],L=N-i,k=z-r,A=T*L-_*k;(A*A/P>e||Ht((_*L+T*k)/P-.5)>.3||a*u+o*p+c*g<Cw)&&(t(i,r,s,a,o,c,N,z,w,M/=O,I/=O,R,y,x),x.point(N,z),t(N,z,w,M,I,R,l,h,f,u,p,g,y,x))}}return function(i){var r,s,a,o,c,l,h,f,u,p,g,y,x={point:_,lineStart:T,lineEnd:M,polygonStart:function(){i.polygonStart(),x.lineStart=I},polygonEnd:function(){i.polygonEnd(),x.lineStart=T}};function _(S,w){S=n(S,w),i.point(S[0],S[1])}function T(){f=NaN,x.point=P,i.lineStart()}function P(S,w){var B=es([S,w]),N=n(S,w);t(f,u,h,p,g,y,f=N[0],u=N[1],h=S,p=B[0],g=B[1],y=B[2],Ip,i),i.point(f,u)}function M(){x.point=_,i.lineEnd()}function I(){T(),x.point=R,x.lineEnd=O}function R(S,w){P(r=S,w),s=f,a=u,o=p,c=g,l=y,x.point=P}function O(){t(f,u,h,p,g,y,s,a,r,o,c,l,Ip,i),x.lineEnd=M,M()}return x}}var Dw=wh({point:function(n,e){this.stream.point(n*ot,e*ot)}});function Lw(n){return wh({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function Nw(n,e,t,i,r){function s(a,o){return a*=i,o*=r,[e+n*a,t-n*o]}return s.invert=function(a,o){return[(a-e)/n*i,(t-o)/n*r]},s}function Lp(n,e,t,i,r,s){if(!s)return Nw(n,e,t,i,r);var a=ct(s),o=st(s),c=a*n,l=o*n,h=a/n,f=o/n,u=(o*t-a*e)/n,p=(o*e+a*t)/n;function g(y,x){return y*=i,x*=r,[c*y-l*x+e,t-l*y-c*x]}return g.invert=function(y,x){return[i*(h*y-f*x+u),r*(p-f*y-h*x)]},g}function Ow(n){return Uw(function(){return n})()}function Uw(n){var e,t=150,i=480,r=250,s=0,a=0,o=0,c=0,l=0,h,f=0,u=1,p=1,g=null,y=Ep,x=null,_,T,P,M=Cp,I=.5,R,O,S,w,B;function N(A){return S(A[0]*ot,A[1]*ot)}function z(A){return A=S.invert(A[0],A[1]),A&&[A[0]*en,A[1]*en]}N.stream=function(A){return w&&B===A?w:w=Dw(Lw(h)(y(R(M(B=A)))))},N.preclip=function(A){return arguments.length?(y=A,g=void 0,k()):y},N.postclip=function(A){return arguments.length?(M=A,x=_=T=P=null,k()):M},N.clipAngle=function(A){return arguments.length?(y=+A?dw(g=A*ot):(g=null,Ep),k()):g*en},N.clipExtent=function(A){return arguments.length?(M=A==null?(x=_=T=P=null,Cp):mw(x=+A[0][0],_=+A[0][1],T=+A[1][0],P=+A[1][1]),k()):x==null?null:[[x,_],[T,P]]},N.scale=function(A){return arguments.length?(t=+A,L()):t},N.translate=function(A){return arguments.length?(i=+A[0],r=+A[1],L()):[i,r]},N.center=function(A){return arguments.length?(s=A[0]%360*ot,a=A[1]%360*ot,L()):[s*en,a*en]},N.rotate=function(A){return arguments.length?(o=A[0]%360*ot,c=A[1]%360*ot,l=A.length>2?A[2]%360*ot:0,L()):[o*en,c*en,l*en]},N.angle=function(A){return arguments.length?(f=A%360*ot,L()):f*en},N.reflectX=function(A){return arguments.length?(u=A?-1:1,L()):u<0},N.reflectY=function(A){return arguments.length?(p=A?-1:1,L()):p<0},N.precision=function(A){return arguments.length?(R=Dp(O,I=A*A),k()):ur(I)},N.fitExtent=function(A,U){return xg(N,A,U)},N.fitSize=function(A,U){return Tw(N,A,U)},N.fitWidth=function(A,U){return Aw(N,A,U)},N.fitHeight=function(A,U){return Rw(N,A,U)};function L(){var A=Lp(t,0,0,u,p,f).apply(null,e(s,a)),U=Lp(t,i-A[0],r-A[1],u,p,f);return h=hg(o,c,l),O=zu(e,U),S=zu(h,O),R=Dp(O,I),k()}function k(){return w=B=null,N}return function(){return e=n.apply(this,arguments),N.invert=e.invert&&z,L()}}function Fw(n){return function(e,t){var i=ur(e*e+t*t),r=n(i),s=st(r),a=ct(r);return[di(e*s,i*a),hr(i&&t*s/i)]}}function vg(n,e){var t=ct(e),i=1+ct(n)*t;return[t*st(n)/i,st(e)/i]}vg.invert=Fw(function(n){return 2*eg(n)});function Bw(){return Ow(vg).scale(250).clipAngle(142)}const Np=1e-6;class Xr{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t,i=+i;const r=e+i,s=t;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${r},${s}`:(Math.abs(this._x1-r)>Np||Math.abs(this._y1-s)>Np)&&(this._+="L"+r+","+s),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=r},${this._y1=s}`)}rect(e,t,i,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+r}h${-i}Z`}value(){return this._||null}}class $u{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class zw{constructor(e,[t,i,r,s]=[0,0,960,500]){if(!((r=+r)>=(t=+t))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=r,this.xmin=t,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:i},vectors:r}=this;let s,a;const o=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let y=0,x=0,_=i.length,T,P;y<_;y+=3,x+=2){const M=i[y]*2,I=i[y+1]*2,R=i[y+2]*2,O=e[M],S=e[M+1],w=e[I],B=e[I+1],N=e[R],z=e[R+1],L=w-O,k=B-S,A=N-O,U=z-S,F=(L*U-k*A)*2;if(Math.abs(F)<1e-9){if(s===void 0){s=a=0;for(const Z of t)s+=e[Z*2],a+=e[Z*2+1];s/=t.length,a/=t.length}const G=1e9*Math.sign((s-O)*U-(a-S)*A);T=(O+N)/2-G*U,P=(S+z)/2+G*A}else{const G=1/F,Z=L*L+k*k,te=A*A+U*U;T=O+(U*Z-k*te)*G,P=S+(L*te-A*Z)*G}o[x]=T,o[x+1]=P}let c=t[t.length-1],l,h=c*4,f,u=e[2*c],p,g=e[2*c+1];r.fill(0);for(let y=0;y<t.length;++y)c=t[y],l=h,f=u,p=g,h=c*4,u=e[2*c],g=e[2*c+1],r[l+2]=r[h]=p-g,r[l+3]=r[h+1]=u-f}render(e){const t=e==null?e=new Xr:void 0,{delaunay:{halfedges:i,inedges:r,hull:s},circumcenters:a,vectors:o}=this;if(s.length<=1)return null;for(let h=0,f=i.length;h<f;++h){const u=i[h];if(u<h)continue;const p=Math.floor(h/3)*2,g=Math.floor(u/3)*2,y=a[p],x=a[p+1],_=a[g],T=a[g+1];this._renderSegment(y,x,_,T,e)}let c,l=s[s.length-1];for(let h=0;h<s.length;++h){c=l,l=s[h];const f=Math.floor(r[l]/3)*2,u=a[f],p=a[f+1],g=c*4,y=this._project(u,p,o[g+2],o[g+3]);y&&this._renderSegment(u,p,y[0],y[1],e)}return t&&t.value()}renderBounds(e){const t=e==null?e=new Xr:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const i=t==null?t=new Xr:void 0,r=this._clip(e);if(r===null||!r.length)return;t.moveTo(r[0],r[1]);let s=r.length;for(;r[0]===r[s-2]&&r[1]===r[s-1]&&s>1;)s-=2;for(let a=2;a<s;a+=2)(r[a]!==r[a-2]||r[a+1]!==r[a-1])&&t.lineTo(r[a],r[a+1]);return t.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){const r=this.cellPolygon(t);r&&(r.index=t,yield r)}}cellPolygon(e){const t=new $u;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,r,s){let a;const o=this._regioncode(e,t),c=this._regioncode(i,r);o===0&&c===0?(s.moveTo(e,t),s.lineTo(i,r)):(a=this._clipSegment(e,t,i,r,o,c))&&(s.moveTo(a[0],a[1]),s.lineTo(a[2],a[3]))}contains(e,t,i){return t=+t,t!==t||(i=+i,i!==i)?!1:this.delaunay._step(e,t,i)===e}*neighbors(e){const t=this._clip(e);if(t)for(const i of this.delaunay.neighbors(e)){const r=this._clip(i);if(r){e:for(let s=0,a=t.length;s<a;s+=2)for(let o=0,c=r.length;o<c;o+=2)if(t[s]===r[o]&&t[s+1]===r[o+1]&&t[(s+2)%a]===r[(o+c-2)%c]&&t[(s+3)%a]===r[(o+c-1)%c]){yield i;break e}}}}_cell(e){const{circumcenters:t,delaunay:{inedges:i,halfedges:r,triangles:s}}=this,a=i[e];if(a===-1)return null;const o=[];let c=a;do{const l=Math.floor(c/3);if(o.push(t[l*2],t[l*2+1]),c=c%3===2?c-2:c+1,s[c]!==e)break;c=r[c]}while(c!==a&&c!==-1);return o}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const t=this._cell(e);if(t===null)return null;const{vectors:i}=this,r=e*4;return this._simplify(i[r]||i[r+1]?this._clipInfinite(e,t,i[r],i[r+1],i[r+2],i[r+3]):this._clipFinite(e,t))}_clipFinite(e,t){const i=t.length;let r=null,s,a,o=t[i-2],c=t[i-1],l,h=this._regioncode(o,c),f,u=0;for(let p=0;p<i;p+=2)if(s=o,a=c,o=t[p],c=t[p+1],l=h,h=this._regioncode(o,c),l===0&&h===0)f=u,u=0,r?r.push(o,c):r=[o,c];else{let g,y,x,_,T;if(l===0){if((g=this._clipSegment(s,a,o,c,l,h))===null)continue;[y,x,_,T]=g}else{if((g=this._clipSegment(o,c,s,a,h,l))===null)continue;[_,T,y,x]=g,f=u,u=this._edgecode(y,x),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(y,x):r=[y,x]}f=u,u=this._edgecode(_,T),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(_,T):r=[_,T]}if(r)f=u,u=this._edgecode(r[0],r[1]),f&&u&&this._edge(e,f,u,r,r.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return r}_clipSegment(e,t,i,r,s,a){const o=s<a;for(o&&([e,t,i,r,s,a]=[i,r,e,t,a,s]);;){if(s===0&&a===0)return o?[i,r,e,t]:[e,t,i,r];if(s&a)return null;let c,l,h=s||a;h&8?(c=e+(i-e)*(this.ymax-t)/(r-t),l=this.ymax):h&4?(c=e+(i-e)*(this.ymin-t)/(r-t),l=this.ymin):h&2?(l=t+(r-t)*(this.xmax-e)/(i-e),c=this.xmax):(l=t+(r-t)*(this.xmin-e)/(i-e),c=this.xmin),s?(e=c,t=l,s=this._regioncode(e,t)):(i=c,r=l,a=this._regioncode(i,r))}}_clipInfinite(e,t,i,r,s,a){let o=Array.from(t),c;if((c=this._project(o[0],o[1],i,r))&&o.unshift(c[0],c[1]),(c=this._project(o[o.length-2],o[o.length-1],s,a))&&o.push(c[0],c[1]),o=this._clipFinite(e,o))for(let l=0,h=o.length,f,u=this._edgecode(o[h-2],o[h-1]);l<h;l+=2)f=u,u=this._edgecode(o[l],o[l+1]),f&&u&&(l=this._edge(e,f,u,o,l),h=o.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(o=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return o}_edge(e,t,i,r,s){for(;t!==i;){let a,o;switch(t){case 5:t=4;continue;case 4:t=6,a=this.xmax,o=this.ymin;break;case 6:t=2;continue;case 2:t=10,a=this.xmax,o=this.ymax;break;case 10:t=8;continue;case 8:t=9,a=this.xmin,o=this.ymax;break;case 9:t=1;continue;case 1:t=5,a=this.xmin,o=this.ymin;break}(r[s]!==a||r[s+1]!==o)&&this.contains(e,a,o)&&(r.splice(s,0,a,o),s+=2)}return s}_project(e,t,i,r){let s=1/0,a,o,c;if(r<0){if(t<=this.ymin)return null;(a=(this.ymin-t)/r)<s&&(c=this.ymin,o=e+(s=a)*i)}else if(r>0){if(t>=this.ymax)return null;(a=(this.ymax-t)/r)<s&&(c=this.ymax,o=e+(s=a)*i)}if(i>0){if(e>=this.xmax)return null;(a=(this.xmax-e)/i)<s&&(o=this.xmax,c=t+(s=a)*r)}else if(i<0){if(e<=this.xmin)return null;(a=(this.xmin-e)/i)<s&&(o=this.xmin,c=t+(s=a)*r)}return[o,c]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){const i=(t+2)%e.length,r=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[r]||e[t+1]===e[i+1]&&e[i+1]===e[r+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}const kw=2*Math.PI,As=Math.pow;function Vw(n){return n[0]}function Hw(n){return n[1]}function Gw(n){const{triangles:e,coords:t}=n;for(let i=0;i<e.length;i+=3){const r=2*e[i],s=2*e[i+1],a=2*e[i+2];if((t[a]-t[r])*(t[s+1]-t[r+1])-(t[s]-t[r])*(t[a+1]-t[r+1])>1e-10)return!1}return!0}function Ww(n,e,t){return[n+Math.sin(n+e)*t,e+Math.cos(n-e)*t]}class Ah{static from(e,t=Vw,i=Hw,r){return new Ah("length"in e?$w(e,t,i,r):Float64Array.from(Xw(e,t,i,r)))}constructor(e){this._delaunator=new Ga(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&Gw(e)){this.collinear=Int32Array.from({length:t.length/2},(u,p)=>p).sort((u,p)=>t[2*u]-t[2*p]||t[2*u+1]-t[2*p+1]);const c=this.collinear[0],l=this.collinear[this.collinear.length-1],h=[t[2*c],t[2*c+1],t[2*l],t[2*l+1]],f=1e-8*Math.hypot(h[3]-h[1],h[2]-h[0]);for(let u=0,p=t.length/2;u<p;++u){const g=Ww(t[2*u],t[2*u+1],f);t[2*u]=g[0],t[2*u+1]=g[1]}this._delaunator=new Ga(t)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,a=this.inedges.fill(-1),o=this._hullIndex.fill(-1);for(let c=0,l=i.length;c<l;++c){const h=s[c%3===2?c-2:c+1];(i[c]===-1||a[h]===-1)&&(a[h]=c)}for(let c=0,l=r.length;c<l;++c)o[r[c]]=c;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],a[r[0]]=1,r.length===2&&(a[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new zw(this,e)}*neighbors(e){const{inedges:t,hull:i,_hullIndex:r,halfedges:s,triangles:a,collinear:o}=this;if(o){const f=o.indexOf(e);f>0&&(yield o[f-1]),f<o.length-1&&(yield o[f+1]);return}const c=t[e];if(c===-1)return;let l=c,h=-1;do{if(yield h=a[l],l=l%3===2?l-2:l+1,a[l]!==e)return;if(l=s[l],l===-1){const f=i[(r[e]+1)%i.length];f!==h&&(yield f);return}}while(l!==c)}find(e,t,i=0){if(e=+e,e!==e||(t=+t,t!==t))return-1;const r=i;let s;for(;(s=this._step(i,e,t))>=0&&s!==i&&s!==r;)i=s;return s}_step(e,t,i){const{inedges:r,hull:s,_hullIndex:a,halfedges:o,triangles:c,points:l}=this;if(r[e]===-1||!l.length)return(e+1)%(l.length>>1);let h=e,f=As(t-l[e*2],2)+As(i-l[e*2+1],2);const u=r[e];let p=u;do{let g=c[p];const y=As(t-l[g*2],2)+As(i-l[g*2+1],2);if(y<f&&(f=y,h=g),p=p%3===2?p-2:p+1,c[p]!==e)break;if(p=o[p],p===-1){if(p=s[(a[e]+1)%s.length],p!==g&&As(t-l[p*2],2)+As(i-l[p*2+1],2)<f)return p;break}}while(p!==u);return h}render(e){const t=e==null?e=new Xr:void 0,{points:i,halfedges:r,triangles:s}=this;for(let a=0,o=r.length;a<o;++a){const c=r[a];if(c<a)continue;const l=s[a]*2,h=s[c]*2;e.moveTo(i[l],i[l+1]),e.lineTo(i[h],i[h+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){t===void 0&&(!e||typeof e.moveTo!="function")&&(t=e,e=null),t=t==null?2:+t;const i=e==null?e=new Xr:void 0,{points:r}=this;for(let s=0,a=r.length;s<a;s+=2){const o=r[s],c=r[s+1];e.moveTo(o+t,c),e.arc(o,c,t,0,kw)}return i&&i.value()}renderHull(e){const t=e==null?e=new Xr:void 0,{hull:i,points:r}=this,s=i[0]*2,a=i.length;e.moveTo(r[s],r[s+1]);for(let o=1;o<a;++o){const c=2*i[o];e.lineTo(r[c],r[c+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new $u;return this.renderHull(e),e.value()}renderTriangle(e,t){const i=t==null?t=new Xr:void 0,{points:r,triangles:s}=this,a=s[e*=3]*2,o=s[e+1]*2,c=s[e+2]*2;return t.moveTo(r[a],r[a+1]),t.lineTo(r[o],r[o+1]),t.lineTo(r[c],r[c+1]),t.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new $u;return this.renderTriangle(e,t),t.value()}}function $w(n,e,t,i){const r=n.length,s=new Float64Array(r*2);for(let a=0;a<r;++a){const o=n[a];s[a*2]=e.call(i,o,a,n),s[a*2+1]=t.call(i,o,a,n)}return s}function*Xw(n,e,t,i){let r=0;for(const s of n)yield e.call(i,s,r,n),yield t.call(i,s,r,n),++r}const Rh=Math.PI,Op=Rh/2,Up=180/Rh,Fp=Rh/180,qw=Math.atan2,Bp=Math.cos,Yw=Math.max,Kw=Math.min,zp=Math.sin,Zw=Math.sign||function(n){return n>0?1:n<0?-1:0},yg=Math.sqrt;function Jw(n){return n>1?Op:n<-1?-Op:Math.asin(n)}function Sg(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Jn(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Hl(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function Gl(n){var e=yg(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function Ch(n){return[qw(n[1],n[0])*Up,Jw(Yw(-1,Kw(1,n[2])))*Up]}function Gi(n){const e=n[0]*Fp,t=n[1]*Fp,i=Bp(t);return[i*Bp(e),i*zp(e),zp(t)]}function Ph(n){return n=n.map(e=>Gi(e)),Sg(n[0],Jn(n[2],n[1]))}function jw(n){const e=eT(n),t=nT(e),i=tT(t,n),r=rT(t,n.length),s=Qw(r,n),a=iT(t,n),{polygons:o,centers:c}=sT(a,t,n),l=aT(o),h=lT(t,n),f=oT(i,t);return{delaunay:e,edges:i,triangles:t,centers:c,neighbors:r,polygons:o,mesh:l,hull:h,urquhart:f,find:s}}function Qw(n,e){function t(i,r){let s=i[0]-r[0],a=i[1]-r[1],o=i[2]-r[2];return s*s+a*a+o*o}return function(r,s,a){a===void 0&&(a=0);let o,c,l=a;const h=Gi([r,s]);do o=a,a=null,c=t(h,Gi(e[o])),n[o].forEach(f=>{let u=t(h,Gi(e[f]));if(u<c){c=u,a=f,l=f;return}});while(a!==null);return l}}function eT(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=aw(n[e]),i=Bw().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(i);const r=[];let s=1;for(let f=0,u=n.length;f<u;f++){let p=n[f][0]**2+n[f][1]**2;!isFinite(p)||p>1e32?r.push(f):p>s&&(s=p)}const a=1e6*yg(s);r.forEach(f=>n[f]=[a,0]),n.push([0,a]),n.push([-a,0]),n.push([0,-a]);const o=Ah.from(n);o.projection=i;const{triangles:c,halfedges:l,inedges:h}=o;for(let f=0,u=l.length;f<u;f++)if(l[f]<0){const p=f%3==2?f-2:f+1,g=f%3==0?f+2:f-1,y=l[p],x=l[g];l[y]=x,l[x]=y,l[p]=l[g]=-1,c[f]=c[p]=c[g]=e,h[c[y]]=y%3==0?y+2:y-1,h[c[x]]=x%3==0?x+2:x-1,f+=2-f%3}else c[f]>n.length-3-1&&(c[f]=e);return o}function tT(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(i=>{if(i[0]!==i[1]&&!(Ph(i.map(r=>e[r]))<0))for(let r=0,s;r<3;r++)s=(r+1)%3,t.add(Ml([i[r],i[s]]).join("-"))}),Array.from(t,i=>i.split("-").map(Number)))}function nT(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let i=0,r=e.length/3;i<r;i++){const s=e[3*i],a=e[3*i+1],o=e[3*i+2];s!==a&&a!==o&&t.push([s,o,a])}return t}function iT(n,e){return n.map(t=>{const i=t.map(s=>e[s]).map(Gi),r=Hl(Hl(Jn(i[1],i[0]),Jn(i[2],i[1])),Jn(i[0],i[2]));return Ch(Gl(r))})}function rT(n,e){const t=[];return n.forEach(i=>{for(let r=0;r<3;r++){const s=i[r],a=i[(r+1)%3];t[s]=t[s]||[],t[s].push(a)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function sT(n,e,t){const i=[],r=n.slice();if(e.length===0){if(t.length<2)return{polygons:i,centers:r};if(t.length===2){const o=Gi(t[0]),c=Gi(t[1]),l=Gl(Hl(o,c)),h=Gl(Jn(o,c)),f=Jn(l,h),u=[l,Jn(l,f),Jn(Jn(l,f),f),Jn(Jn(Jn(l,f),f),f)].map(Ch).map(a);return i.push(u),i.push(u.slice().reverse()),{polygons:i,centers:r}}}e.forEach((o,c)=>{for(let l=0;l<3;l++){const h=o[l],f=o[(l+1)%3],u=o[(l+2)%3];i[h]=i[h]||[],i[h].push([f,u,c,[h,f,u]])}});const s=i.map(o=>{const c=[o[0][2]];let l=o[0][1];for(let h=1;h<o.length;h++)for(let f=0;f<o.length;f++)if(o[f][0]==l){l=o[f][1],c.push(o[f][2]);break}if(c.length>2)return c;if(c.length==2){const h=kp(t[o[0][3][0]],t[o[0][3][1]],r[c[0]]),f=kp(t[o[0][3][2]],t[o[0][3][0]],r[c[0]]),u=a(h),p=a(f);return[c[0],p,c[1],u]}});function a(o){let c=-1;return r.slice(e.length,1/0).forEach((l,h)=>{l[0]===o[0]&&l[1]===o[1]&&(c=h+e.length)}),c<0&&(c=r.length,r.push(o)),c}return{polygons:s,centers:r}}function kp(n,e,t){n=Gi(n),e=Gi(e),t=Gi(t);const i=Zw(Sg(Jn(e,n),t));return Ch(Gl(Hl(n,e)).map(r=>i*r))}function aT(n){const e=[];return n.forEach(t=>{if(!t)return;let i=t[t.length-1];for(let r of t)r>i&&e.push([i,r]),i=r}),e}function oT(n,e){return function(t){const i=new Map,r=new Map;return n.forEach((s,a)=>{const o=s.join("-");i.set(o,t[a]),r.set(o,!0)}),e.forEach(s=>{let a=0,o=-1;for(let c=0;c<3;c++){let l=Ml([s[c],s[(c+1)%3]]).join("-");i.get(l)>a&&(a=i.get(l),o=l)}r.set(o,!1)}),n.map(s=>r.get(s.join("-")))}}function lT(n,e){const t=new Set,i=[];n.map(o=>{if(!(Ph(o.map(c=>e[c>e.length?0:c]))>1e-12))for(let c=0;c<3;c++){let l=[o[c],o[(c+1)%3]],h=`${l[0]}-${l[1]}`;t.has(h)?t.delete(h):t.add(`${l[1]}-${l[0]}`)}});const r=new Map;let s;if(t.forEach(o=>{o=o.split("-").map(Number),r.set(o[0],o[1]),s=o[0]}),s===void 0)return i;let a=s;do{i.push(a);let o=r.get(a);r.set(a,-1),a=o}while(a>-1&&a!==s);return i}function cT(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const i=e._data.map(r=>[e._vx(r),e._vy(r),r]).filter(r=>isFinite(r[0]+r[1]));e.points=i.map(r=>[r[0],r[1]]),e.valid=i.map(r=>r[2]),e.delaunay=jw(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return _p(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return _p(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((r,s)=>i.features.push({type:"Feature",geometry:r?{type:"Polygon",coordinates:[[...r,r[0]].map(a=>e.delaunay.centers[a])]}:null,properties:{site:e.valid[s],sitecoordinates:e.points[s],neighbours:e.delaunay.neighbors[s]}})),e.valid.length===1&&i.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),i},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((i,r)=>(i=i.map(s=>e.points[s]),i.center=e.delaunay.centers[r],i)).filter(i=>Ph(i)>0).map(i=>({type:"Feature",properties:{circumcenter:i.center},geometry:{type:"Polygon",coordinates:[[...i,i[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i=e.delaunay.edges.map(s=>Ws(e.points[s[0]],e.points[s[1]])),r=e.delaunay.urquhart(i);return{type:"FeatureCollection",features:e.delaunay.edges.map((s,a)=>({type:"Feature",properties:{source:e.valid[s[0]],target:e.valid[s[1]],length:i[a],urquhart:!!r[a]},geometry:{type:"LineString",coordinates:[e.points[s[0]],e.points[s[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(i=>[e.points[i[0]],e.points[i[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:i,polygons:r}=e.delaunay,s=[];for(const a of r)if(a)for(let o=a.length,c=a[o-1],l=a[0],h=0;h<o;c=l,l=a[++h])l>c&&s.push([i[c],i[l]]);return{type:"MultiLineString",coordinates:s}},e._found=void 0,e.find=function(t,i,r){if(e._found=e.delaunay.find(t,i,e._found),!r||Ws([t,i],e.points[e._found])<r)return e._found},e.hull=function(t){t!==void 0&&e(t);const i=e.delaunay.hull,r=e.points;return i.length===0?null:{type:"Polygon",coordinates:[[...i.map(s=>r[s]),r[i[0]]]]}},n?e(n):e}function fT(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Ih(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Mg(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function Qa(){}var $a=.7,Wl=1/$a,Us="\\s*([+-]?\\d+)\\s*",Xa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",uT=/^#([0-9a-f]{3,8})$/,hT=new RegExp(`^rgb\\(${Us},${Us},${Us}\\)$`),dT=new RegExp(`^rgb\\(${Wi},${Wi},${Wi}\\)$`),pT=new RegExp(`^rgba\\(${Us},${Us},${Us},${Xa}\\)$`),mT=new RegExp(`^rgba\\(${Wi},${Wi},${Wi},${Xa}\\)$`),gT=new RegExp(`^hsl\\(${Xa},${Wi},${Wi}\\)$`),_T=new RegExp(`^hsla\\(${Xa},${Wi},${Wi},${Xa}\\)$`),Vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ih(Qa,qa,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Hp,formatHex:Hp,formatHex8:xT,formatHsl:vT,formatRgb:Gp,toString:Gp});function Hp(){return this.rgb().formatHex()}function xT(){return this.rgb().formatHex8()}function vT(){return Eg(this).formatHsl()}function Gp(){return this.rgb().formatRgb()}function qa(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=uT.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?Wp(e):t===3?new Xn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Bo(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Bo(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=hT.exec(n))?new Xn(e[1],e[2],e[3],1):(e=dT.exec(n))?new Xn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=pT.exec(n))?Bo(e[1],e[2],e[3],e[4]):(e=mT.exec(n))?Bo(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=gT.exec(n))?qp(e[1],e[2]/100,e[3]/100,1):(e=_T.exec(n))?qp(e[1],e[2]/100,e[3]/100,e[4]):Vp.hasOwnProperty(n)?Wp(Vp[n]):n==="transparent"?new Xn(NaN,NaN,NaN,0):null}function Wp(n){return new Xn(n>>16&255,n>>8&255,n&255,1)}function Bo(n,e,t,i){return i<=0&&(n=e=t=NaN),new Xn(n,e,t,i)}function yT(n){return n instanceof Qa||(n=qa(n)),n?(n=n.rgb(),new Xn(n.r,n.g,n.b,n.opacity)):new Xn}function Xu(n,e,t,i){return arguments.length===1?yT(n):new Xn(n,e,t,i??1)}function Xn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Ih(Xn,Xu,Mg(Qa,{brighter(n){return n=n==null?Wl:Math.pow(Wl,n),new Xn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?$a:Math.pow($a,n),new Xn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Xn(Yr(this.r),Yr(this.g),Yr(this.b),$l(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:$p,formatHex:$p,formatHex8:ST,formatRgb:Xp,toString:Xp}));function $p(){return`#${qr(this.r)}${qr(this.g)}${qr(this.b)}`}function ST(){return`#${qr(this.r)}${qr(this.g)}${qr(this.b)}${qr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Xp(){const n=$l(this.opacity);return`${n===1?"rgb(":"rgba("}${Yr(this.r)}, ${Yr(this.g)}, ${Yr(this.b)}${n===1?")":`, ${n})`}`}function $l(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Yr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function qr(n){return n=Yr(n),(n<16?"0":"")+n.toString(16)}function qp(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new bi(n,e,t,i)}function Eg(n){if(n instanceof bi)return new bi(n.h,n.s,n.l,n.opacity);if(n instanceof Qa||(n=qa(n)),!n)return new bi;if(n instanceof bi)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),a=NaN,o=s-r,c=(s+r)/2;return o?(e===s?a=(t-i)/o+(t<i)*6:t===s?a=(i-e)/o+2:a=(e-t)/o+4,o/=c<.5?s+r:2-s-r,a*=60):o=c>0&&c<1?0:a,new bi(a,o,c,n.opacity)}function MT(n,e,t,i){return arguments.length===1?Eg(n):new bi(n,e,t,i??1)}function bi(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Ih(bi,MT,Mg(Qa,{brighter(n){return n=n==null?Wl:Math.pow(Wl,n),new bi(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?$a:Math.pow($a,n),new bi(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Xn(sf(n>=240?n-240:n+120,r,i),sf(n,r,i),sf(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new bi(Yp(this.h),zo(this.s),zo(this.l),$l(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=$l(this.opacity);return`${n===1?"hsl(":"hsla("}${Yp(this.h)}, ${zo(this.s)*100}%, ${zo(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Yp(n){return n=(n||0)%360,n<0?n+360:n}function zo(n){return Math.max(0,Math.min(1,n||0))}function sf(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const Dh=n=>()=>n;function ET(n,e){return function(t){return n+t*e}}function bT(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function wT(n){return(n=+n)==1?bg:function(e,t){return t-e?bT(e,t,n):Dh(isNaN(e)?t:e)}}function bg(n,e){var t=e-n;return t?ET(n,t):Dh(isNaN(n)?e:n)}const Kp=(function n(e){var t=wT(e);function i(r,s){var a=t((r=Xu(r)).r,(s=Xu(s)).r),o=t(r.g,s.g),c=t(r.b,s.b),l=bg(r.opacity,s.opacity);return function(h){return r.r=a(h),r.g=o(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function TT(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function AT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function RT(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),a;for(a=0;a<i;++a)r[a]=Lh(n[a],e[a]);for(;a<t;++a)s[a]=e[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function CT(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function Xl(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function PT(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=Lh(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var qu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,af=new RegExp(qu.source,"g");function IT(n){return function(){return n}}function DT(n){return function(e){return n(e)+""}}function LT(n,e){var t=qu.lastIndex=af.lastIndex=0,i,r,s,a=-1,o=[],c=[];for(n=n+"",e=e+"";(i=qu.exec(n))&&(r=af.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,c.push({i:a,x:Xl(i,r)})),t=af.lastIndex;return t<e.length&&(s=e.slice(t),o[a]?o[a]+=s:o[++a]=s),o.length<2?c[0]?DT(c[0].x):IT(e):(e=c.length,function(l){for(var h=0,f;h<e;++h)o[(f=c[h]).i]=f.x(l);return o.join("")})}function Lh(n,e){var t=typeof e,i;return e==null||t==="boolean"?Dh(e):(t==="number"?Xl:t==="string"?(i=qa(e))?(e=i,Kp):LT:e instanceof qa?Kp:e instanceof Date?CT:AT(e)?TT:Array.isArray(e)?RT:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?PT:Xl)(n,e)}function NT(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function OT(n){return function(){return n}}function UT(n){return+n}var Zp=[0,1];function Is(n){return n}function Yu(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:OT(isNaN(e)?NaN:.5)}function FT(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function BT(n,e,t){var i=n[0],r=n[1],s=e[0],a=e[1];return r<i?(i=Yu(r,i),s=t(a,s)):(i=Yu(i,r),s=t(s,a)),function(o){return s(i(o))}}function zT(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++a<i;)r[a]=Yu(n[a],n[a+1]),s[a]=t(e[a],e[a+1]);return function(o){var c=p1(n,o,1,i)-1;return s[c](r[c](o))}}function kT(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function VT(){var n=Zp,e=Zp,t=Lh,i,r,s,a=Is,o,c,l;function h(){var u=Math.min(n.length,e.length);return a!==Is&&(a=FT(n[0],n[u-1])),o=u>2?zT:BT,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=o(n.map(i),e,t)))(i(a(u)))}return f.invert=function(u){return a(r((l||(l=o(e,n.map(i),Xl)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,UT),h()):n.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),t=NT,h()},f.clamp=function(u){return arguments.length?(a=u?!0:Is,h()):a!==Is},f.interpolate=function(u){return arguments.length?(t=u,h()):t},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,p){return i=u,r=p,h()}}function HT(){return VT()(Is,Is)}function GT(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function ql(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function Xs(n){return n=ql(Math.abs(n)),n?n[1]:NaN}function WT(n,e){return function(t,i){for(var r=t.length,s=[],a=0,o=n[0],c=0;r>0&&o>0&&(c+o+1>i&&(o=Math.max(1,i-c)),s.push(t.substring(r-=o,r+o)),!((c+=o+1)>i));)o=n[a=(a+1)%n.length];return s.reverse().join(e)}}function $T(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var XT=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yl(n){if(!(e=XT.exec(n)))throw new Error("invalid format: "+n);var e;return new Nh({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Yl.prototype=Nh.prototype;function Nh(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Nh.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function qT(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var Kl;function YT(n,e){var t=ql(n,e);if(!t)return Kl=void 0,n.toPrecision(e);var i=t[0],r=t[1],s=r-(Kl=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+ql(n,Math.max(0,e+s-1))[0]}function Jp(n,e){var t=ql(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const jp={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:GT,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Jp(n*100,e),r:Jp,s:YT,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Qp(n){return n}var em=Array.prototype.map,tm=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function KT(n){var e=n.grouping===void 0||n.thousands===void 0?Qp:WT(em.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?Qp:$T(em.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=Yl(f);var p=f.fill,g=f.align,y=f.sign,x=f.symbol,_=f.zero,T=f.width,P=f.comma,M=f.precision,I=f.trim,R=f.type;R==="n"?(P=!0,R="g"):jp[R]||(M===void 0&&(M=12),I=!0,R="g"),(_||p==="0"&&g==="=")&&(_=!0,p="0",g="=");var O=(u&&u.prefix!==void 0?u.prefix:"")+(x==="$"?t:x==="#"&&/[boxX]/.test(R)?"0"+R.toLowerCase():""),S=(x==="$"?i:/[%p]/.test(R)?a:"")+(u&&u.suffix!==void 0?u.suffix:""),w=jp[R],B=/[defgprs%]/.test(R);M=M===void 0?6:/[gprs]/.test(R)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function N(z){var L=O,k=S,A,U,F;if(R==="c")k=w(z)+k,z="";else{z=+z;var G=z<0||1/z<0;if(z=isNaN(z)?c:w(Math.abs(z),M),I&&(z=qT(z)),G&&+z==0&&y!=="+"&&(G=!1),L=(G?y==="("?y:o:y==="-"||y==="("?"":y)+L,k=(R==="s"&&!isNaN(z)&&Kl!==void 0?tm[8+Kl/3]:"")+k+(G&&y==="("?")":""),B){for(A=-1,U=z.length;++A<U;)if(F=z.charCodeAt(A),48>F||F>57){k=(F===46?r+z.slice(A+1):z.slice(A))+k,z=z.slice(0,A);break}}}P&&!_&&(z=e(z,1/0));var Z=L.length+z.length+k.length,te=Z<T?new Array(T-Z+1).join(p):"";switch(P&&_&&(z=e(te+z,te.length?T-k.length:1/0),te=""),g){case"<":z=L+z+k+te;break;case"=":z=L+te+z+k;break;case"^":z=te.slice(0,Z=te.length>>1)+L+z+k+te.slice(Z);break;default:z=te+L+z+k;break}return s(z)}return N.toString=function(){return f+""},N}function h(f,u){var p=Math.max(-8,Math.min(8,Math.floor(Xs(u)/3)))*3,g=Math.pow(10,-p),y=l((f=Yl(f),f.type="f",f),{suffix:tm[8+p/3]});return function(x){return y(g*x)}}return{format:l,formatPrefix:h}}var ko,wg,Tg;ZT({thousands:",",grouping:[3],currency:["$",""]});function ZT(n){return ko=KT(n),wg=ko.format,Tg=ko.formatPrefix,ko}function JT(n){return Math.max(0,-Xs(Math.abs(n)))}function jT(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Xs(e)/3)))*3-Xs(Math.abs(n)))}function QT(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Xs(e)-Xs(n))+1}function eA(n,e,t,i){var r=v1(n,e,t),s;switch(i=Yl(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=jT(r,a))&&(i.precision=s),Tg(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=QT(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=JT(r))&&(i.precision=s-(i.type==="%")*2);break}}return wg(i)}function tA(n){var e=n.domain;return n.ticks=function(t){var i=e();return x1(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return eA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,a=i[r],o=i[s],c,l,h=10;for(o<a&&(l=a,a=o,o=l,l=r,r=s,s=l);h-- >0;){if(l=Mu(a,o,t),l===c)return i[r]=a,i[s]=o,e(i);if(l>0)a=Math.floor(a/l)*l,o=Math.ceil(o/l)*l;else if(l<0)a=Math.ceil(a*l)/l,o=Math.floor(o*l)/l;else break;c=l}return n},n}function Ku(){var n=HT();return n.copy=function(){return kT(n,Ku())},fT.apply(n,arguments),tA(n)}function Zu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function nA(n){if(Array.isArray(n))return n}function iA(n){if(Array.isArray(n))return Zu(n)}function rA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function sA(n,e,t){return e=Zl(e),dA(n,Ag()?Reflect.construct(e,[],Zl(n).constructor):e.apply(n,t))}function aA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function oA(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function Zl(n){return Zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Zl(n)}function lA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Ju(n,e)}function Ag(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ag=function(){return!!n})()}function cA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function fA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,a,o=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(h){l=!0,r=h}finally{try{if(!c&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw r}}return o}}function uA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rA(n)}function Ju(n,e){return Ju=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Ju(n,e)}function Oi(n,e){return nA(n)||fA(n,e)||Rg(n,e)||uA()}function of(n){return iA(n)||cA(n)||Rg(n)||hA()}function Rg(n,e){if(n){if(typeof n=="string")return Zu(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Zu(n,e):void 0}}function pA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,i=t===void 0?1/0:t,r=mA(n,i),s=Ba(r),a=gA(n,i),o=[].concat(of(s),of(a)),c={type:"Polygon",coordinates:n},l=lg(c),h=Oi(l,2),f=Oi(h[0],2),u=f[0],p=f[1],g=Oi(h[1],2),y=g[0],x=g[1],_=u>y||x>=89||p<=-89,T=[];if(_){var P=cT(o).triangles(),M=new Map(o.map(function(F,G){var Z=Oi(F,2),te=Z[0],ue=Z[1];return["".concat(te,"-").concat(ue),G]}));P.features.forEach(function(F){var G,Z=F.geometry.coordinates[0].slice(0,3).reverse(),te=[];if(Z.forEach(function(pe){var ze=Oi(pe,2),at=ze[0],et=ze[1],he="".concat(at,"-").concat(et);M.has(he)&&te.push(M.get(he))}),te.length===3){if(te.some(function(pe){return pe<s.length})){var ue=F.properties.circumcenter;if(!ju(ue,c,_))return}(G=T).push.apply(G,te)}})}else if(a.length)for(var w=Ga.from(o),B=function(G){var Z,te=[2,1,0].map(function(ze){return w.triangles[G+ze]}),ue=te.map(function(ze){return o[ze]});if(te.some(function(ze){return ze<s.length})){var pe=[0,1].map(function(ze){return y1(ue,function(at){return at[ze]})});if(!ju(pe,c,_))return 1}(Z=T).push.apply(Z,of(te))},N=0,z=w.triangles.length;N<z;N+=3)B(N);else{var I=Q0(r),R=I.vertices,O=I.holes,S=O===void 0?[]:O;T=M1(R,S,2)}var L=Ku(Ml(o,function(F){return F[0]}),[0,1]),k=Ku(Ml(o,function(F){return F[1]}),[0,1]),A=o.map(function(F){var G=Oi(F,2),Z=G[0],te=G[1];return[L(Z),k(te)]}),U={points:o,indices:T,uvs:A};return{contour:r,triangles:U}}function mA(n,e){return n.map(function(t){var i=[],r;return t.forEach(function(s){if(r){var a=Ws(s,r)*180/Math.PI;if(a>e)for(var o=bw(r,s),c=1/Math.ceil(a/e),l=c;l<1;)i.push(o(l)),l+=c}i.push(r=s)}),i})}function gA(n,e){var t={type:"Polygon",coordinates:n},i=lg(t),r=Oi(i,2),s=Oi(r[0],2),a=s[0],o=s[1],c=Oi(r[1],2),l=c[0],h=c[1];if(Math.min(Math.abs(l-a),Math.abs(h-o))<e)return[];var f=a>l||h>=89||o<=-89;return _A(e,{minLng:a,maxLng:l,minLat:o,maxLat:h}).filter(function(u){return ju(u,t,f)})}function _A(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,i=e.maxLng,r=e.minLat,s=e.maxLat,a=Math.round(Math.pow(360/n,2)/Math.PI),o=(1+Math.sqrt(5))/2,c=function(_){return _/o*360%360-180},l=function(_){return Math.acos(2*_/a-1)/Math.PI*180-90},h=function(_){return a*(Math.cos((_+90)*Math.PI/180)+1)/2},f=[s!==void 0?Math.ceil(h(s)):0,r!==void 0?Math.floor(h(r)):a-1],u=t===void 0&&i===void 0?function(){return!0}:t===void 0?function(x){return x<=i}:i===void 0?function(x){return x>=t}:i>=t?function(x){return x>=t&&x<=i}:function(x){return x>=t||x<=i},p=[],g=f[0];g<=f[1];g++){var y=c(g);u(y)&&p.push([y,l(g)])}return p}function ju(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?Ew(e,n):X0(n,e)}var cl=window.THREE?window.THREE:{BufferGeometry:yn,Float32BufferAttribute:$t},nm=new cl.BufferGeometry().setAttribute?"setAttribute":"addAttribute",xA=(function(n){function e(t,i,r,s,a,o,c){var l;aA(this,e),l=sA(this,e),l.type="ConicPolygonGeometry",l.parameters={polygonGeoJson:t,bottomHeight:i,topHeight:r,closedBottom:s,closedTop:a,includeSides:o,curvatureResolution:c},i=i||0,r=r||1,s=s!==void 0?s:!0,a=a!==void 0?a:!0,o=o!==void 0?o:!0,c=c||5;var h=pA(t,{resolution:c}),f=h.contour,u=h.triangles,p=Ba(u.uvs),g=[],y=[],x=[],_=0,T=function(O){var S=Math.round(g.length/3),w=x.length;g=g.concat(O.vertices),y=y.concat(O.uvs),x=x.concat(S?O.indices.map(function(B){return B+S}):O.indices),l.addGroup(w,x.length-w,_++)};o&&T(M()),s&&T(I(i,!1)),a&&T(I(r,!0)),l.setIndex(x),l[nm]("position",new cl.Float32BufferAttribute(g,3)),l[nm]("uv",new cl.Float32BufferAttribute(y,2)),l.computeVertexNormals();function P(R,O){var S=typeof O=="function"?O:function(){return O},w=R.map(function(B){return B.map(function(N){var z=Oi(N,2),L=z[0],k=z[1];return vA(k,L,S(L,k))})});return Q0(w)}function M(){for(var R=P(f,i),O=R.vertices,S=R.holes,w=P(f,r),B=w.vertices,N=Ba([B,O]),z=Math.round(B.length/3),L=new Set(S),k=0,A=[],U=0;U<z;U++){var F=U+1;if(F===z)F=k;else if(L.has(F)){var G=F;F=k,k=G}A.push(U,U+z,F+z),A.push(F+z,F,U)}for(var Z=[],te=1;te>=0;te--)for(var ue=0;ue<z;ue+=1)Z.push(ue/(z-1),te);return{indices:A,vertices:N,uvs:Z}}function I(R){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:O?u.indices:u.indices.slice().reverse(),vertices:P([u.points],R).vertices,uvs:p}}return l}return lA(e,n),oA(e)})(cl.BufferGeometry);function vA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=(90-n)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}const im=new Ir,Vo=new X;class Cg extends gv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new $t(e,3)),this.setAttribute("uv",new $t(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new _u(t,6,1);return this.setAttribute("instanceStart",new ki(i,3,0)),this.setAttribute("instanceEnd",new ki(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new _u(t,6,1);return this.setAttribute("instanceColorStart",new ki(i,3,0)),this.setAttribute("instanceColorEnd",new ki(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new rv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),im.setFromBufferAttribute(t),this.boundingBox.union(im))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vo.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vo)),Vo.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Vo));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Ie.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Gn.line={uniforms:vh.merge([Ie.common,Ie.fog,Ie.line]),vertexShader:`
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
		`};class Pg extends hi{constructor(e){super({type:"LineMaterial",uniforms:vh.clone(Gn.line.uniforms),vertexShader:Gn.line.vertexShader,fragmentShader:Gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const lf=new Ut,rm=new X,sm=new X,gn=new Ut,_n=new Ut,Li=new Ut,cf=new X,ff=new qt,xn=new Ev,am=new X,Ho=new Ir,Go=new Ka,Ni=new Ut;let Ui,Kr;function om(n,e,t){return Ni.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ni.multiplyScalar(1/Ni.w),Ni.x=Kr/t.width,Ni.y=Kr/t.height,Ni.applyMatrix4(n.projectionMatrixInverse),Ni.multiplyScalar(1/Ni.w),Math.abs(Math.max(Ni.x,Ni.y))}function yA(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,a=Math.min(i.instanceCount,r.count);for(let o=0,c=a;o<c;o++){xn.start.fromBufferAttribute(r,o),xn.end.fromBufferAttribute(s,o),xn.applyMatrix4(t);const l=new X,h=new X;Ui.distanceSqToSegment(xn.start,xn.end,h,l),h.distanceTo(l)<Kr*.5&&e.push({point:h,pointOnLine:l,distance:Ui.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function SA(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,a=n.matrixWorld,o=n.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,h=Math.min(o.instanceCount,c.count),f=-e.near;Ui.at(1,Li),Li.w=1,Li.applyMatrix4(e.matrixWorldInverse),Li.applyMatrix4(i),Li.multiplyScalar(1/Li.w),Li.x*=s.x/2,Li.y*=s.y/2,Li.z=0,cf.copy(Li),ff.multiplyMatrices(e.matrixWorldInverse,a);for(let u=0,p=h;u<p;u++){if(gn.fromBufferAttribute(c,u),_n.fromBufferAttribute(l,u),gn.w=1,_n.w=1,gn.applyMatrix4(ff),_n.applyMatrix4(ff),gn.z>f&&_n.z>f)continue;if(gn.z>f){const P=gn.z-_n.z,M=(gn.z-f)/P;gn.lerp(_n,M)}else if(_n.z>f){const P=_n.z-gn.z,M=(_n.z-f)/P;_n.lerp(gn,M)}gn.applyMatrix4(i),_n.applyMatrix4(i),gn.multiplyScalar(1/gn.w),_n.multiplyScalar(1/_n.w),gn.x*=s.x/2,gn.y*=s.y/2,_n.x*=s.x/2,_n.y*=s.y/2,xn.start.copy(gn),xn.start.z=0,xn.end.copy(_n),xn.end.z=0;const y=xn.closestPointToPointParameter(cf,!0);xn.at(y,am);const x=v0.lerp(gn.z,_n.z,y),_=x>=-1&&x<=1,T=cf.distanceTo(am)<Kr*.5;if(_&&T){xn.start.fromBufferAttribute(c,u),xn.end.fromBufferAttribute(l,u),xn.start.applyMatrix4(a),xn.end.applyMatrix4(a);const P=new X,M=new X;Ui.distanceSqToSegment(xn.start,xn.end,M,P),t.push({point:M,pointOnLine:P,distance:Ui.origin.distanceTo(M),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class MA extends Bt{constructor(e=new Cg,t=new Pg({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let a=0,o=0,c=t.count;a<c;a++,o+=2)rm.fromBufferAttribute(t,a),sm.fromBufferAttribute(i,a),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+rm.distanceTo(sm);const s=new _u(r,2,1);return e.setAttribute("instanceDistanceStart",new ki(s,1,0)),e.setAttribute("instanceDistanceEnd",new ki(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ui=e.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Kr=c.linewidth+s,o.boundingSphere===null&&o.computeBoundingSphere(),Go.copy(o.boundingSphere).applyMatrix4(a);let l;if(i)l=Kr*.5;else{const f=Math.max(r.near,Go.distanceToPoint(Ui.origin));l=om(r,f,c.resolution)}if(Go.radius+=l,Ui.intersectsSphere(Go)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ho.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=Kr*.5;else{const f=Math.max(r.near,Ho.distanceToPoint(Ui.origin));h=om(r,f,c.resolution)}Ho.expandByScalar(h),Ui.intersectsBox(Ho)!==!1&&(i?yA(this,t):SA(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(lf),this.material.uniforms.resolution.value.set(lf.z,lf.w))}}const Ig={Africa:16757575,Asia:9427311,Europe:9300160,"North America":16353195,"South America":16767309,Oceania:12160754,Antarctica:16055293,"Seven seas (open ocean)":12160754},EA=14211288,bA=3112916,wA=9358834,Dg=100.12,TA=3,lm=100.2,AA=100.28,RA=2373214,CA=16777215,PA=15398655,Jl=[15224125,4026088,3129201,15905076,10120654];let Wo=null;function Ya(){if(!Wo){const n=new Uint8Array([90,150,210,255]);Wo=new R0(n,n.length,1,lh),Wo.needsUpdate=!0}return Wo}function uf(n){return new Vs({color:n,gradientMap:Ya()})}const va=Math.PI/180,cm=(n,e,t)=>[t*Math.cos(e*va)*Math.sin(n*va),t*Math.sin(e*va),t*Math.cos(e*va)*Math.cos(n*va)];function IA(n){const e=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=r.geometry.type==="Polygon"?[r.geometry.coordinates]:r.geometry.coordinates;for(const a of s)for(const o of a)for(let c=0;c<o.length-1;c++){const l=o[c],h=o[c+1];e.push(...cm(l[0],l[1],lm),...cm(h[0],h[1],lm))}}const t=new Cg;t.setPositions(e);const i=new Pg({color:RA,linewidth:2.5,transparent:!0,opacity:.9});return i.resolution.set(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{i.resolution.set(window.innerWidth,window.innerHeight)}),new MA(t,i)}const DA=-63;function LA(){const n=(90-DA)*Math.PI/180,e=new Bt(new is(Dg,48,12,0,Math.PI*2,n,Math.PI-n),new Vs({color:Ig.Antarctica,gradientMap:Ya()}));return e.name="ATA",e}function NA(n){const e=new fi,t=new Map,i=new Map,r=new Bt(new is(yu,64,64),new Vs({color:bA,gradientMap:Ya()}));e.add(r),e.add(LA()),e.add(IA(n));for(const s of n.features){if(s.properties.id==="ATA")continue;const a=Ig[s.properties.continent]??EA,o=new Vs({color:a,gradientMap:Ya()});t.set(s.properties.id,o),i.set(s.properties.id,s.properties.continent);const c=s.geometry.type==="Polygon"?[s.geometry.coordinates]:s.geometry.coordinates,l=new fi;l.name=s.properties.id;for(const h of c){const f=new xA(h,yu,Dg,!1,!0,!1,TA);l.add(new Bt(f,o))}e.add(l)}return{group:e,countryMaterials:t,continentOf:i}}function OA(){const n=new hi({transparent:!0,side:zn,depthWrite:!1,uniforms:{glowColor:{value:new mt(PA)}},vertexShader:`
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
      }`});return new Bt(new is(104.5,64,64),n)}function UA(n){const e=new Xx;e.background=new mt(wA);const t=new li(60,1,.1,2e3);t.position.set(0,0,300);const i=new vb({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=new pv(16774368,2.4);r.position.set(200,150,100);const s=new uv(12376319,3813160,.9);e.add(r,s,new mv(16777215,.35)),e.add(OA());const a=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",a),a(),{scene:e,camera:t,renderer:i}}async function FA(){const n=async a=>{const o=await fetch(a);if(!o.ok)throw new Error(`Failed to load ${a}`);return await o.json()},[t,i,r,s]=await Promise.all([n("./data/world.geo.json"),n("./data/countries.json"),n("./data/landmarks.json"),n("./data/riddles.json")]);return{world:t,countries:i,landmarks:r,riddles:s}}const BA=8;function zA(){const n=new Set;window.addEventListener("keydown",i=>n.add(i.code)),window.addEventListener("keyup",i=>n.delete(i.code));const e=(i,r)=>(i.some(s=>n.has(s))?1:0)-(r.some(s=>n.has(s))?1:0),t={throttle:0,turn:0,pitch:0};return{read(i){const r={throttle:e(["KeyW"],["KeyS"]),turn:e(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),pitch:e(["ArrowUp","KeyR"],["ArrowDown","KeyF"])},s=Math.min(1,BA*i);return t.throttle+=(r.throttle-t.throttle)*s,t.turn+=(r.turn-t.turn)*s,t.pitch+=(r.pitch-t.pitch)*s,{...t}}}}function jl(n=15224125,e="seaplane"){const t=new fi,i=uf(n),r=uf(16249832),s=e==="lifter"?.85:.6,a=new Bt(new yl(s,2.4,4,8),i);a.rotation.x=Math.PI/2;const o=e==="stunt"?6:e==="jet"?3.6:5,c=e==="jet"?1.6:1.1,l=new Bt(new nr(o,.15,c),r);e==="jet"&&(l.position.z=-.4);const h=new Bt(new nr(1.8,.12,.6),r);h.position.set(0,.1,-1.6);const f=new Bt(new nr(.12,.9,.6),i);f.position.set(0,.5,-1.6);const u=new Bt(new xh(e==="jet"?.35:.45,e==="jet"?1.4:.8,8),r);if(u.rotation.x=Math.PI/2,u.position.z=e==="jet"?2.3:2,t.add(a,l,h,f,u),e==="seaplane")for(const p of[-1,1]){const g=new Bt(new yl(.18,1.6,4,6),r);g.rotation.x=Math.PI/2,g.position.set(p*.9,-.8,.2),t.add(g)}if(e==="lifter"){const p=f.clone();p.position.y=.9,p.scale.set(1,.6,1),t.add(p)}if(e!=="jet"){const p=new fi;p.name="propeller";const g=uf(3815994),y=new fi;y.name="propellerBlades";for(const _ of[0,Math.PI/2]){const T=new Bt(new nr(.12,1.7,.06),g);T.rotation.z=_,y.add(T)}const x=new Bt(new _h(.95,24),new Za({color:14540253,transparent:!0,opacity:.25,side:Mi}));x.name="propellerDisc",x.visible=!1,p.add(y,x),p.position.z=2.45,t.add(p)}return t}const kA=.35,VA=8,HA=52;function GA(n){const e=Math.min(1,Math.max(0,n));return{spinRadPerS:VA+HA*e,blurVisible:e>=kA}}const fm=n=>new X(n.x,n.y,n.z),WA=1/60,$A=12,XA=.15,qA=5,YA=25,KA=.55,ZA=.28,um=.1,JA=58,jA=16,QA=.06;function hm(n,e){let t=0,i=0;const r=n.getObjectByName("propellerBlades"),s=n.getObjectByName("propellerDisc");return{update(a,o){const c=fm(Cr(a.lat,a.lon,a.altKm)),l=fc(a.lat,a.lon,a.headingDeg,qA),h=fm(Cr(l.lat,l.lon,a.altKm)),f=c.clone().normalize();n.position.copy(c),n.up.copy(f),n.lookAt(h),t+=(o.turn*KA-t)*um,i+=(o.pitch*ZA-i)*um,n.rotateZ(t),n.rotateX(-i);const u=h.clone().sub(c).normalize(),p=c.clone().addScaledVector(u,-30).addScaledVector(f,$A);e.position.lerp(p,XA),e.up.copy(f);const g=c.clone().addScaledVector(u,YA);e.lookAt(g);const y=Math.min(1,Math.max(0,(a.speedKmh-Fa)/(Mh-Fa))),x=JA+jA*y;if(e.fov+=(x-e.fov)*QA,e.updateProjectionMatrix(),r&&s){const _=GA(y);r.rotation.z+=_.spinRadPerS*WA,r.visible=!_.blurVisible,s.visible=_.blurVisible}}}}function eR(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:16px;left:16px;color:#fff;font:600 16px system-ui;background:rgba(11,16,38,.7);padding:10px 14px;border-radius:10px;pointer-events:none";const t=document.createElement("div"),i=document.createElement("div");return i.style.cssText="font-weight:400;font-size:13px;opacity:.8;margin-top:4px",e.append(t,i),n.appendChild(e),{setCountry(r){t.textContent=r?`Flying over: ${r}`:"Flying over: open ocean"},setTelemetry(r){i.textContent=`${Math.round(r.speedKmh)} km/h · hdg ${Math.round(r.headingDeg)}°`}}}const $o=.15,dm=n=>new X(n.x,n.y,n.z);function tR(n){const e=new Map;return{sync(t,i){const r=new Set;t.players.forEach((s,a)=>{if(a===i)return;r.add(a);const o={lat:s.lat,lon:s.lon,altKm:s.altKm,headingDeg:s.headingDeg,speedKmh:s.speedKmh},c=e.get(a);if(c)c.targetState=o;else{const l=jl(Jl[s.colorIdx%Jl.length]);n.add(l),e.set(a,{mesh:l,current:o,targetState:o})}});for(const[s,a]of e)r.has(s)||(n.remove(a.mesh),e.delete(s))},update(){for(const t of e.values()){const i=t.current,r=t.targetState;i.lat+=(r.lat-i.lat)*$o,i.lon+=((r.lon-i.lon+540)%360-180)*$o,i.lon=(i.lon+540)%360-180,i.altKm+=(r.altKm-i.altKm)*$o,i.headingDeg=t1(i.headingDeg,r.headingDeg,$o);const s=dm(Cr(i.lat,i.lon,i.altKm)),a=fc(i.lat,i.lon,i.headingDeg,5);t.mesh.position.copy(s),t.mesh.up.copy(s.clone().normalize()),t.mesh.lookAt(dm(Cr(a.lat,a.lon,i.altKm)))}}}}const nR=16765471;function iR(n){const e=new Bt(new sc(2.5,2.5,60,24,1,!0),new Za({color:nR,transparent:!0,opacity:.45,side:Mi,depthWrite:!1}));return e.visible=!1,n.add(e),{showAt(t,i){const r=Cr(t,i,0),s=new X(r.x,r.y,r.z).normalize();e.position.copy(s.clone().multiplyScalar(130)),e.quaternion.setFromUnitVectors(new X(0,1,0),s),e.visible=!0},hide(){e.visible=!1},update(t){if(!e.visible)return;const i=e.material;i.opacity=.35+.2*Math.sin(t*3)}}}const Lg=4,hf=.12,Ng=64;function rR(){return{puffs:[],spawnTimerS:0}}function sR(n,e,t,i){const r=n.puffs.map(o=>({...o,ageS:o.ageS+e})).filter(o=>o.ageS<Lg);let s=n.spawnTimerS+e;if(!i)return{puffs:r,spawnTimerS:Math.min(s,hf)};const a=[...r];for(;s>=hf;)s-=hf,a.length<Ng&&a.push({x:t.x,y:t.y,z:t.z,ageS:0});return{puffs:a,spawnTimerS:s}}const aR=.9,oR=2.2,pm=.95,df=.35,mm=3,lR="#d7e7f2";function cR(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)throw new Error("2d canvas unavailable");const r=[{x:64,y:68,r:30},{x:40+n*3,y:62,r:20+n},{x:90-n*4,y:62,r:22},{x:56+n*5,y:46,r:17+n*2}],s=a=>{for(const o of r)i.beginPath(),i.arc(o.x,o.y+a,o.r,0,Math.PI*2),i.fill()};return i.fillStyle=lR,s(6),i.fillStyle="#ffffff",s(0),new P0(t)}function fR(n){const e=[];for(let s=0;s<mm;s++)e.push(cR(s));const t=[],i=[];for(let s=0;s<Ng;s++){const a=new T0({map:e[s%mm],transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.9}),o=new Jx(a);o.visible=!1,t.push(o),i.push(.8+Math.random()*.5),n.add(o)}let r=rR();return{update(s,a,o){r=sR(r,s,a,o);for(let c=0;c<t.length;c++){const l=t[c],h=r.puffs[c];if(!h){l.visible=!1;continue}const f=h.ageS/Lg;l.visible=!0,l.position.set(h.x,h.y,h.z);const u=(aR+oR*f)*i[c];l.scale.set(u,u,1),l.material.opacity=f<df?pm:pm*(1-(f-df)/(1-df))}}}}function uR(n){const e=document.createElement("div");return e.style.cssText="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.7);padding:10px 18px;border-radius:12px;pointer-events:none;text-align:center",n.appendChild(e),{update(t,i){if(t.phase==="countdown"){const r=Math.max(0,Math.ceil((t.countdownEndsAt-Date.now())/1e3));e.textContent=`Fly to ${t.targetName} — in ${r}…`}else if(t.phase==="racing")e.textContent=`🎯 Fly to ${t.targetName}!`;else if(t.phase==="finished"){const r=t.players.get(t.winnerSessionId);e.textContent=t.winnerSessionId===i?"🏆 You win!":`🏁 ${(r==null?void 0:r.nickname)??"Someone"} wins!`}else e.textContent="";e.style.display=e.textContent?"block":"none"}}}const hR="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.75);padding:12px 20px;border-radius:14px;pointer-events:none;text-align:center;min-width:340px;z-index:5",dR="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);color:#fff;font:800 30px system-ui;background:rgba(20,27,61,.92);padding:18px 30px;border-radius:18px;pointer-events:none;text-align:center;z-index:6;transition:opacity .4s ease";function pR(n){const e=document.createElement("div");e.style.cssText=hR,e.style.display="none",e.innerHTML=`
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
    </div>`,n.appendChild(e);const t=s=>e.querySelector(s),i=document.createElement("div");i.style.cssText=dR,i.style.opacity="0",n.appendChild(i);let r=null;return{show(s,a){t("[data-flag]").textContent=s.type==="riddle"?"❓":a,t("[data-label]").textContent=s.label,t("[data-sub]").textContent=s.sublabel,e.style.display="block",this.setCompass(null),this.setDwell(null),this.setWarning(null)},hide(){e.style.display="none"},setCompass(s){const a=t("[data-compass]");s===null?a.style.display="none":(a.style.display="inline-block",a.style.transform=`rotate(${Math.round(s)}deg)`)},setDwell(s){const a=t("[data-dwellwrap]");s===null?a.style.display="none":(a.style.display="block",t("[data-dwell]").style.width=`${Math.min(100,s*100)}%`)},setWarning(s){const a=t("[data-warn]");a.style.display=s?"block":"none",a.textContent=s??""},setClock(s){t("[data-clock]").textContent=s??""},toast(s,a=1800){i.textContent=s,i.style.opacity="1",r&&clearTimeout(r),r=setTimeout(()=>{i.style.opacity="0"},a)}}}function Oh(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var pf={},gm={},_m;function mR(){return _m||(_m=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),gm}var Xo={},Qu=function(n,e){return Qu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},Qu(n,e)};function Og(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Qu(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ql=function(){return Ql=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ql.apply(this,arguments)};function Ug(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Fg(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var o=n.length-1;o>=0;o--)(a=n[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Bg(n,e){return function(t,i){e(t,i,n)}}function zg(n,e,t,i,r,s){function a(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var o=i.kind,c=o==="getter"?"get":o==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,u=!1,p=t.length-1;p>=0;p--){var g={};for(var y in i)g[y]=y==="access"?{}:i[y];for(var y in i.access)g.access[y]=i.access[y];g.addInitializer=function(_){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a(_||null))};var x=(0,t[p])(o==="accessor"?{get:h.get,set:h.set}:h[c],g);if(o==="accessor"){if(x===void 0)continue;if(x===null||typeof x!="object")throw new TypeError("Object expected");(f=a(x.get))&&(h.get=f),(f=a(x.set))&&(h.set=f),(f=a(x.init))&&r.unshift(f)}else(f=a(x))&&(o==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),u=!0}function kg(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function Vg(n){return typeof n=="symbol"?n:"".concat(n)}function Hg(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Gg(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Wg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(h){try{l(i.next(h))}catch(f){a(f)}}function c(h){try{l(i.throw(h))}catch(f){a(f)}}function l(h){h.done?s(h.value):r(h.value).then(o,c)}l((i=i.apply(n,e||[])).next())})}function $g(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var hc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function Xg(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&hc(e,n,t)}function ec(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Uh(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(a)throw a.error}}return s}function qg(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(Uh(arguments[e]));return n}function Yg(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,r++)i[r]=s[a];return i}function Kg(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function qs(n){return this instanceof qs?(this.v=n,this):new qs(n)}function Zg(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(p){return function(g){return Promise.resolve(g).then(p,f)}}function o(p,g){i[p]&&(r[p]=function(y){return new Promise(function(x,_){s.push([p,y,x,_])>1||c(p,y)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(y){u(s[0][3],y)}}function l(p){p.value instanceof qs?Promise.resolve(p.value.v).then(h,f):u(s[0][2],p)}function h(p){c("next",p)}function f(p){c("throw",p)}function u(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Jg(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(a){return(t=!t)?{value:qs(n[r](a)),done:!1}:s?s(a):a}:s}}function jg(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ec=="function"?ec(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(a){return new Promise(function(o,c){a=n[s](a),r(o,c,a.done,a.value)})}}function r(s,a,o,c){Promise.resolve(c).then(function(l){s({value:l,done:o})},a)}}function Qg(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var gR=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},eh=function(n){return eh=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},eh(n)};function e_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=eh(n),i=0;i<t.length;i++)t[i]!=="default"&&hc(e,n,t[i]);return gR(e,n),e}function t_(n){return n&&n.__esModule?n:{default:n}}function n_(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function i_(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function r_(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function s_(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var _R=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function a_(n){function e(s){n.error=n.hasError?new _R(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(a){return e(a),r()})}else i|=1}catch(a){e(a)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function o_(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,a){return i?e?".jsx":".js":r&&(!s||!a)?t:r+s+"."+a.toLowerCase()+"js"}):n}const xR={__extends:Og,__assign:Ql,__rest:Ug,__decorate:Fg,__param:Bg,__esDecorate:zg,__runInitializers:kg,__propKey:Vg,__setFunctionName:Hg,__metadata:Gg,__awaiter:Wg,__generator:$g,__createBinding:hc,__exportStar:Xg,__values:ec,__read:Uh,__spread:qg,__spreadArrays:Yg,__spreadArray:Kg,__await:qs,__asyncGenerator:Zg,__asyncDelegator:Jg,__asyncValues:jg,__makeTemplateObject:Qg,__importStar:e_,__importDefault:t_,__classPrivateFieldGet:n_,__classPrivateFieldSet:i_,__classPrivateFieldIn:r_,__addDisposableResource:s_,__disposeResources:a_,__rewriteRelativeImportExtension:o_},vR=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:s_,get __assign(){return Ql},__asyncDelegator:Jg,__asyncGenerator:Zg,__asyncValues:jg,__await:qs,__awaiter:Wg,__classPrivateFieldGet:n_,__classPrivateFieldIn:r_,__classPrivateFieldSet:i_,__createBinding:hc,__decorate:Fg,__disposeResources:a_,__esDecorate:zg,__exportStar:Xg,__extends:Og,__generator:$g,__importDefault:t_,__importStar:e_,__makeTemplateObject:Qg,__metadata:Gg,__param:Bg,__propKey:Vg,__read:Uh,__rest:Ug,__rewriteRelativeImportExtension:o_,__runInitializers:kg,__setFunctionName:Hg,__spread:qg,__spreadArray:Kg,__spreadArrays:Yg,__values:ec,default:xR},Symbol.toStringTag,{value:"Module"})),dc=Oh(vR);var mf={},xm;function pc(){return xm||(xm=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(mf)),mf}var gf={},_f={},xf={},Ra={exports:{}},yR=Ra.exports,vm;function Fh(){return vm||(vm=1,(function(n,e){(function(t,i){i(e)})(yR,(function(t){t.OPERATION=void 0,(function(C){C[C.ADD=128]="ADD",C[C.REPLACE=0]="REPLACE",C[C.DELETE=64]="DELETE",C[C.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",C[C.MOVE_AND_ADD=160]="MOVE_AND_ADD",C[C.DELETE_AND_ADD=192]="DELETE_AND_ADD",C[C.CLEAR=10]="CLEAR",C[C.REVERSE=15]="REVERSE",C[C.MOVE=32]="MOVE",C[C.DELETE_BY_REFID=33]="DELETE_BY_REFID",C[C.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));const s="~track",a="~encoder",o="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",u="~childType",p="~onEncodeEnd",g="~onDecodeEnd",y="~descriptors",x="~__numFields",_="~__refTypeFieldIndexes",T="~__viewFieldIndexes",P="$__fieldIndexesByViewTag";let M;try{M=new TextEncoder}catch{}const I=new ArrayBuffer(8),R=new Int32Array(I),O=new Float32Array(I),S=new Float64Array(I),w=new BigInt64Array(I),N=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(C,d){for(var m=0,v=0,b=0,H=C.length;b<H;b++)m=C.charCodeAt(b),m<128?v+=1:m<2048?v+=2:m<55296||m>=57344?v+=3:(b++,v+=4);return v};function z(C,d,m){for(var v=0,b=0,H=d.length;b<H;b++)v=d.charCodeAt(b),v<128?C[m.offset++]=v:v<2048?(C[m.offset]=192|v>>6,C[m.offset+1]=128|v&63,m.offset+=2):v<55296||v>=57344?(C[m.offset]=224|v>>12,C[m.offset+1]=128|v>>6&63,C[m.offset+2]=128|v&63,m.offset+=3):(b++,v=65536+((v&1023)<<10|d.charCodeAt(b)&1023),C[m.offset]=240|v>>18,C[m.offset+1]=128|v>>12&63,C[m.offset+2]=128|v>>6&63,C[m.offset+3]=128|v&63,m.offset+=4)}function L(C,d,m){C[m.offset++]=d&255}function k(C,d,m){C[m.offset++]=d&255}function A(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255}function U(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255}function F(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255,C[m.offset++]=d>>16&255,C[m.offset++]=d>>24&255}function G(C,d,m){const v=d>>24,b=d>>16,H=d>>8,$=d;C[m.offset++]=$&255,C[m.offset++]=H&255,C[m.offset++]=b&255,C[m.offset++]=v&255}function Z(C,d,m){const v=Math.floor(d/Math.pow(2,32)),b=d>>>0;G(C,b,m),G(C,v,m)}function te(C,d,m){const v=d/Math.pow(2,32)>>0,b=d>>>0;G(C,b,m),G(C,v,m)}function ue(C,d,m){w[0]=BigInt.asIntN(64,d),F(C,R[0],m),F(C,R[1],m)}function pe(C,d,m){w[0]=BigInt.asIntN(64,d),F(C,R[0],m),F(C,R[1],m)}function ze(C,d,m){O[0]=d,F(C,R[0],m)}function at(C,d,m){S[0]=d,F(C,R[0],m),F(C,R[1],m)}function et(C,d,m){C[m.offset++]=d?1:0}function he(C,d,m){d||(d="");let v=N(d,"utf8"),b=0;if(v<32)C[m.offset++]=v|160,b=1;else if(v<256)C[m.offset++]=217,C[m.offset++]=v%255,b=2;else if(v<65536)C[m.offset++]=218,U(C,v,m),b=3;else if(v<4294967296)C[m.offset++]=219,G(C,v,m),b=5;else throw new Error("String too long");return z(C,d,m),b+v}function be(C,d,m){if(isNaN(d))return be(C,0,m);if(isFinite(d)){if(d!==(d|0))return Math.abs(d)<=34028235e31&&(O[0]=d,Math.abs(Math.abs(O[0])-Math.abs(d))<1e-4)?(C[m.offset++]=202,ze(C,d,m),5):(C[m.offset++]=203,at(C,d,m),9)}else return be(C,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,m);return d>=0?d<128?(C[m.offset++]=d&255,1):d<256?(C[m.offset++]=204,C[m.offset++]=d&255,2):d<65536?(C[m.offset++]=205,U(C,d,m),3):d<4294967296?(C[m.offset++]=206,G(C,d,m),5):(C[m.offset++]=207,te(C,d,m),9):d>=-32?(C[m.offset++]=224|d+32,1):d>=-128?(C[m.offset++]=208,L(C,d,m),2):d>=-32768?(C[m.offset++]=209,A(C,d,m),3):d>=-2147483648?(C[m.offset++]=210,F(C,d,m),5):(C[m.offset++]=211,Z(C,d,m),9)}const ve={int8:L,uint8:k,int16:A,uint16:U,int32:F,uint32:G,int64:Z,uint64:te,bigint64:ue,biguint64:pe,float32:ze,float64:at,boolean:et,string:he,number:be,utf8Write:z,utf8Length:N},Qe=new ArrayBuffer(8),Ae=new Int32Array(Qe),Ve=new Float32Array(Qe),tt=new Float64Array(Qe),qe=new BigUint64Array(Qe),vt=new BigInt64Array(Qe);function gt(C,d,m){m>C.length-d.offset&&(m=C.length-d.offset);for(var v="",b=0,H=d.offset,$=d.offset+m;H<$;H++){var ee=C[H];if((ee&128)===0){v+=String.fromCharCode(ee);continue}if((ee&224)===192){v+=String.fromCharCode((ee&31)<<6|C[++H]&63);continue}if((ee&240)===224){v+=String.fromCharCode((ee&15)<<12|(C[++H]&63)<<6|(C[++H]&63)<<0);continue}if((ee&248)===240){b=(ee&7)<<18|(C[++H]&63)<<12|(C[++H]&63)<<6|(C[++H]&63)<<0,b>=65536?(b-=65536,v+=String.fromCharCode((b>>>10)+55296,(b&1023)+56320)):v+=String.fromCharCode(b);continue}console.error("decode.utf8Read(): Invalid byte "+ee+" at offset "+H+". Skip to end of string: "+(d.offset+m));break}return d.offset+=m,v}function _t(C,d){return zt(C,d)<<24>>24}function zt(C,d){return C[d.offset++]}function jt(C,d){return Yt(C,d)<<16>>16}function Yt(C,d){return C[d.offset++]|C[d.offset++]<<8}function Pt(C,d){return C[d.offset++]|C[d.offset++]<<8|C[d.offset++]<<16|C[d.offset++]<<24}function It(C,d){return Pt(C,d)>>>0}function Kt(C,d){return Ae[0]=Pt(C,d),Ve[0]}function Y(C,d){return Ae[0]=Pt(C,d),Ae[1]=Pt(C,d),tt[0]}function pn(C,d){const m=It(C,d);return Pt(C,d)*Math.pow(2,32)+m}function Tt(C,d){const m=It(C,d);return It(C,d)*Math.pow(2,32)+m}function V(C,d){return Ae[0]=Pt(C,d),Ae[1]=Pt(C,d),vt[0]}function E(C,d){return Ae[0]=Pt(C,d),Ae[1]=Pt(C,d),qe[0]}function j(C,d){return zt(C,d)>0}function se(C,d){const m=C[d.offset++];let v;return m<192?v=m&31:m===217?v=zt(C,d):m===218?v=Yt(C,d):m===219&&(v=It(C,d)),gt(C,d,v)}function ce(C,d){const m=C[d.offset++];if(m<128)return m;if(m===202)return Kt(C,d);if(m===203)return Y(C,d);if(m===204)return zt(C,d);if(m===205)return Yt(C,d);if(m===206)return It(C,d);if(m===207)return Tt(C,d);if(m===208)return _t(C,d);if(m===209)return jt(C,d);if(m===210)return Pt(C,d);if(m===211)return pn(C,d);if(m>223)return(255-m+1)*-1}function we(C,d){const m=C[d.offset];return m<192&&m>160||m===217||m===218||m===219}const Se={utf8Read:gt,int8:_t,uint8:zt,int16:jt,uint16:Yt,int32:Pt,uint32:It,float32:Kt,float64:Y,int64:pn,uint64:Tt,bigint64:V,biguint64:E,boolean:j,string:se,number:ce,stringCheck:we},fe={},ge=new Map;function Me(C,d){d.constructor&&(ge.set(d.constructor,C),fe[C]=d),d.encode&&(ve[C]=d.encode),d.decode&&(Se[C]=d.decode)}function Ye(C){return fe[C]}function De(C){for(const d in C)Me(d,C[d]);return d=>q(d)}const mn=class mn{static register(d){const m=Object.getPrototypeOf(d);if(m!==Ge){let v=mn.inheritedTypes.get(m);v||(v=new Set,mn.inheritedTypes.set(m,v)),v.add(d)}}static cache(d){let m=mn.cachedContexts.get(d);return m||(m=new mn(d),mn.cachedContexts.set(d,m)),m}constructor(d){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},d&&this.discoverTypes(d)}has(d){return this.schemas.has(d)}get(d){return this.types[d]}add(d,m=this.schemas.size){return this.schemas.has(d)?!1:(this.types[m]=d,d[Symbol.metadata]===void 0&&Ze.initialize(d),this.schemas.set(d,m),!0)}getTypeId(d){return this.schemas.get(d)}discoverTypes(d,m,v,b){var ee,Q;if(b&&this.registerFilteredByParent(d,m,v),!this.add(d))return;(ee=mn.inheritedTypes.get(d))==null||ee.forEach(oe=>{this.discoverTypes(oe,m,v,b)});let H=d;for(;(H=Object.getPrototypeOf(H))&&H!==Ge&&H!==Function.prototype;)this.discoverTypes(H);const $=d[Q=Symbol.metadata]??(d[Q]={});$[T]&&(this.hasFilters=!0);for(const oe in $){const me=oe,de=$[me].type,_e=$[me].tag!==void 0;if(typeof de!="string")if(typeof de=="function")this.discoverTypes(de,d,me,b||_e);else{const Fe=Object.values(de)[0];if(typeof Fe=="string")continue;this.discoverTypes(Fe,d,me,b||_e)}}}registerFilteredByParent(d,m,v){let H=`${this.schemas.get(d)??this.schemas.size}`;m&&(H+=`-${this.schemas.get(m)}`),H+=`-${v}`,this.parentFiltered[H]=!0}debug(){let d="";for(const m in this.parentFiltered){const v=m.split("-").map(Number),b=v.pop();d+=`
		`,d+=`${m}: ${v.reverse().map((H,$)=>{const ee=this.types[H],Q=ee[Symbol.metadata];let oe=ee.name;return $===0&&(oe+=`[${Q[b].name}]`),`${oe}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${d}`}};mn.inheritedTypes=new Map,mn.cachedContexts=new Map;let Ee=mn;function $e(C){if(Array.isArray(C))return{array:$e(C[0])};if(typeof C.type<"u")return C.type;if(nt(C))return Object.keys(C).every(d=>typeof C[d]=="string")?"string":"number";if(typeof C=="object"&&C!==null){const d=Object.keys(C).find(m=>fe[m]!==void 0);if(d)return C[d]=$e(C[d]),C}return C}function nt(C){if(typeof C=="function"&&C[Symbol.metadata])return!1;const d=Object.keys(C),m=d.filter(v=>/\d+/.test(v));return!!(m.length>0&&m.length===d.length/2&&C[C[m[0]]]==m[0]||d.length>0&&d.every(v=>typeof C[v]=="string"&&C[v]===v))}const Ze={addField(C,d,m,v,b){if(d>64)throw new Error(`Can't define field '${m}'.
Schema instances may only have up to 64 fields.`);C[d]=Object.assign(C[d]||{},{type:$e(v),index:d,name:m}),Object.defineProperty(C,y,{value:C[y]||{},enumerable:!1,configurable:!0}),b?(C[y][m]=b,C[y][`_${m}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):C[y][m]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(C,x,{value:d,enumerable:!1,configurable:!0}),Object.defineProperty(C,m,{value:d,enumerable:!1,configurable:!0}),typeof C[d].type!="string"&&(C[_]===void 0&&Object.defineProperty(C,_,{value:[],enumerable:!1,configurable:!0}),C[_].push(d))},setTag(C,d,m){const v=C[d],b=C[v];b.tag=m,C[T]||(Object.defineProperty(C,T,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(C,P,{value:{},enumerable:!1,configurable:!0})),C[T].push(v),C[P][m]||(C[P][m]=[]),C[P][m].push(v)},setFields(C,d){const m=C.prototype.constructor;Ee.register(m);const v=Object.getPrototypeOf(m),b=v&&v[Symbol.metadata],H=Ze.initialize(m);m[s]||(m[s]=Ge[s]),m[a]||(m[a]=Ge[a]),m[o]||(m[o]=Ge[o]),m.prototype.toJSON||(m.prototype.toJSON=Ge.prototype.toJSON);let $=H[x]??(b&&b[x])??-1;$++;for(const ee in d){const Q=$e(d[ee]),oe=typeof Object.keys(Q)[0]=="string"&&Ye(Object.keys(Q)[0]),me=oe?Object.values(Q)[0]:Q;Ze.addField(H,$,ee,Q,ae(`_${ee}`,$,me,oe)),$++}return C},isDeprecated(C,d){return C[d].deprecated===!0},init(C){const d={};C[Symbol.metadata]=d,Object.defineProperty(d,x,{value:0,enumerable:!1,configurable:!0})},initialize(C){const d=Object.getPrototypeOf(C),m=d[Symbol.metadata];let v=C[Symbol.metadata]??Object.create(null);return d!==Ge&&v===m&&(v=Object.create(null),m&&(Object.setPrototypeOf(v,m),Object.defineProperty(v,x,{value:m[x],enumerable:!1,configurable:!0,writable:!0}),m[T]!==void 0&&(Object.defineProperty(v,T,{value:[...m[T]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(v,P,{value:{...m[P]},enumerable:!1,configurable:!0,writable:!0})),m[_]!==void 0&&Object.defineProperty(v,_,{value:[...m[_]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(v,y,{value:{...m[y]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(C,Symbol.metadata,{value:v,writable:!1,configurable:!0}),v},isValidInstance(C){return C.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(C.constructor[Symbol.metadata],x)},getFields(C){const d=C[Symbol.metadata],m={};for(let v=0;v<=d[x];v++)m[d[v].name]=d[v].type;return m},hasViewTagAtIndex(C,d){var m;return(m=C==null?void 0:C[T])==null?void 0:m.includes(d)}};function W(C){return{indexes:{},operations:[],queueRootNode:C}}function Te(){return{next:void 0,tail:void 0}}function le(C,d){const m=C.indexes[d];m===void 0?C.indexes[d]=C.operations.push(d)-1:C.operations[m]=d}function Ce(C,d){var v;let m=C.indexes[d];m===void 0&&(m=Object.values(C.indexes).at(-1),d=(v=Object.entries(C.indexes).find(([b,H])=>H===m))==null?void 0:v[0]),C.operations[m]=void 0,delete C.indexes[d]}class Pe{constructor(d){var m;this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=d,this.metadata=d.constructor[Symbol.metadata],(m=this.metadata)!=null&&m[T]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(d){this.root=d;const m=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,m),m&&this.forEachChild((v,b)=>{v.root!==d?v.setRoot(d):d.add(v)})}setParent(d,m,v){if(this.addParent(d,v),!m)return;const b=m.add(this);m!==this.root&&(this.root=m,this.checkIsFiltered(d,v,b)),b&&this.forEachChild((H,$)=>{if(H.root===m){m.add(H),m.moveNextToParent(H);return}H.setParent(this.ref,m,$)})}forEachChild(d){var m,v;if(this.ref[u]){if(typeof this.ref[u]!="string")for(const[b,H]of this.ref.entries())H&&d(H[f],((m=this.indexes)==null?void 0:m[b])??b)}else for(const b of((v=this.metadata)==null?void 0:v[_])??[]){const H=this.metadata[b],$=this.ref[H.name];$&&d($[f],b)}}operation(d){var m,v;this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-d),(m=this.root)==null||m.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-d),(v=this.root)==null||v.enqueueChangeTree(this,"changes"))}change(d,m=t.OPERATION.ADD){var $,ee,Q;const v=this.isFiltered||((ee=($=this.metadata)==null?void 0:$[d])==null?void 0:ee.tag)!==void 0,b=v?this.filteredChanges:this.changes,H=this.indexedOperations[d];if(!H||H===t.OPERATION.DELETE){const oe=H&&H===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:m;this.indexedOperations[d]=oe}le(b,d),v?(le(this.allFilteredChanges,d),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(le(this.allChanges,d),(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(d){const m=this.isFiltered?this.filteredChanges:this.changes,v={},b={};for(const H in this.indexedOperations)v[Number(H)+d]=this.indexedOperations[H],b[Number(H)+d]=m.indexes[H];this.indexedOperations=v,m.indexes=b,m.operations=m.operations.map(H=>H+d)}shiftAllChangeIndexes(d,m=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(d,m,this.allFilteredChanges),this._shiftAllChangeIndexes(d,m,this.allChanges)):this._shiftAllChangeIndexes(d,m,this.allChanges)}_shiftAllChangeIndexes(d,m=0,v){const b={};let H=0;for(const $ in v.indexes)b[H++]=v.indexes[$];v.indexes=b;for(let $=0;$<v.operations.length;$++){const ee=v.operations[$];ee>m&&(v.operations[$]=ee+d)}}indexedOperation(d,m,v=d){var b,H;this.indexedOperations[d]=m,this.filteredChanges!==void 0?(le(this.allFilteredChanges,v),le(this.filteredChanges,d),(b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges")):(le(this.allChanges,v),le(this.changes,d),(H=this.root)==null||H.enqueueChangeTree(this,"changes"))}getType(d){return this.ref[u]||this.metadata[d].type}getChange(d){return this.indexedOperations[d]}getValue(d,m=!1){return this.ref[l](d,m)}delete(d,m,v=d){var $,ee,Q;if(d===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${d}'`)}catch(oe){console.warn(oe)}return}const b=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[d]=m??t.OPERATION.DELETE,le(b,d),Ce(this.allChanges,v);const H=this.getValue(d);return H&&H[f]&&(($=this.root)==null||$.remove(H[f])),this.filteredChanges!==void 0?(Ce(this.allFilteredChanges,v),(ee=this.root)==null||ee.enqueueChangeTree(this,"filteredChanges")):(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"),H}endEncode(d){var m,v;this.indexedOperations={},this[d]=W(),(v=(m=this.ref)[p])==null||v.call(m),this.isNew=!1}discard(d=!1){var m,v;(v=(m=this.ref)[p])==null||v.call(m),this.indexedOperations={},this.changes=W(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=W(this.filteredChanges.queueRootNode)),d&&(this.allChanges=W(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=W(this.allFilteredChanges.queueRootNode)))}discardAll(){const d=Object.keys(this.indexedOperations);for(let m=0,v=d.length;m<v;m++){const b=this.getValue(Number(d[m]));b&&b[f]&&b[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(d,m,v){var b,H,$,ee;this.root.types.hasFilters&&(this._checkFilteredByParent(d,m),this.filteredChanges!==void 0&&((b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges"),v&&((H=this.root)==null||H.enqueueChangeTree(this,"allFilteredChanges")))),this.isFiltered||(($=this.root)==null||$.enqueueChangeTree(this,"changes"),v&&((ee=this.root)==null||ee.enqueueChangeTree(this,"allChanges")))}_checkFilteredByParent(d,m){if(!d)return;const v=Ze.isValidInstance(this.ref)?this.ref.constructor:this.ref[u];let b,H=!Ze.isValidInstance(d);H?(b=d[f],d=b.parent,m=b.parentIndex):b=d[f];const $=d.constructor;let ee=`${this.root.types.getTypeId(v)}`;$&&(ee+=`-${this.root.types.schemas.get($)}`),ee+=`-${m}`;const Q=Ze.hasViewTagAtIndex($==null?void 0:$[Symbol.metadata],m);this.isFiltered=d[f].isFiltered||this.root.types.parentFiltered[ee]||Q,this.isFiltered&&(this.isVisibilitySharedWithParent=b.isFiltered&&typeof v!="string"&&!Q&&H,this.filteredChanges||(this.filteredChanges=W(),this.allFilteredChanges=W()),this.changes.operations.length>0&&(this.changes.operations.forEach(oe=>le(this.filteredChanges,oe)),this.allChanges.operations.forEach(oe=>le(this.allFilteredChanges,oe)),this.changes=W(),this.allChanges=W()))}get parent(){var d;return(d=this.parentChain)==null?void 0:d.ref}get parentIndex(){var d;return(d=this.parentChain)==null?void 0:d.index}addParent(d,m){if(this.hasParent((v,b)=>v[f]===d[f])){this.parentChain.index=m;return}this.parentChain={ref:d,index:m,next:this.parentChain}}removeParent(d=this.parent){let m=this.parentChain,v=null;for(;m;){if(m.ref[f]===d[f])return v?v.next=m.next:this.parentChain=m.next,!0;v=m,m=m.next}return this.parentChain===void 0}findParent(d){let m=this.parentChain;for(;m;){if(d(m.ref,m.index))return m;m=m.next}}hasParent(d){return this.findParent(d)!==void 0}getAllParents(){const d=[];let m=this.parentChain;for(;m;)d.push({ref:m.ref,index:m.index}),m=m.next;return d}}function xe(C,d,m,v,b,H){var $;typeof m=="string"?($=ve[m])==null||$.call(ve,d,v,H):m[Symbol.metadata]!==void 0?(ve.number(d,v[f].refId,H),(b&t.OPERATION.ADD)===t.OPERATION.ADD&&C.tryEncodeTypeId(d,m,v.constructor,H)):ve.number(d,v[f].refId,H)}const Ke=function(C,d,m,v,b,H,$,ee,Q){if(d[H.offset++]=(v|b)&255,b===t.OPERATION.DELETE)return;const oe=m.ref,me=Q[v];xe(C,d,Q[v].type,oe[me.name],b,H)},He=function(C,d,m,v,b,H){if(d[H.offset++]=b&255,ve.number(d,v,H),b===t.OPERATION.DELETE)return;const $=m.ref;if((b&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof $.set=="function"){const oe=m.ref.$indexes.get(v);ve.string(d,oe,H)}const ee=$[u],Q=$[l](v);xe(C,d,ee,Q,b,H)},Gt=function(C,d,m,v,b,H,$,ee){const Q=m.ref,oe=ee&&m.isFiltered&&typeof m.getType(v)!="string";let me;if(oe){const Fe=Q.tmpItems[v];if(!Fe)return;me=Fe[f].refId,b===t.OPERATION.DELETE?b=t.OPERATION.DELETE_BY_REFID:b===t.OPERATION.ADD&&(b=t.OPERATION.ADD_BY_REFID)}else me=v;if(d[H.offset++]=b&255,ve.number(d,me,H),b===t.OPERATION.DELETE||b===t.OPERATION.DELETE_BY_REFID)return;const de=m.getType(v),_e=m.getValue(v,$);xe(C,d,de,_e,b,H)},Dt=-1;function kn(C,d,m,v,b,H,$,ee){const Q=C.root,oe=m[l](v);let me;if((d&t.OPERATION.DELETE)===t.OPERATION.DELETE){const de=Q.refIds.get(oe);de!==void 0&&Q.removeRef(de),d!==t.OPERATION.DELETE_AND_ADD&&m[h](v),me=void 0}if(d!==t.OPERATION.DELETE)if(Ge.is(b)){const de=Se.number(H,$);if(me=Q.refs.get(de),(d&t.OPERATION.ADD)===t.OPERATION.ADD){const _e=C.getInstanceType(H,$,b);me||(me=C.createInstanceOfType(_e)),Q.addRef(de,me,me!==oe||d===t.OPERATION.DELETE_AND_ADD&&me===oe)}}else if(typeof b=="string")me=Se[b](H,$);else{const de=Ye(Object.keys(b)[0]),_e=Se.number(H,$),Fe=Q.refs.has(_e)?oe||Q.refs.get(_e):new de.constructor;if(me=Fe.clone(!0),me[u]=Object.values(b)[0],oe){let ke=Q.refIds.get(oe);if(ke!==void 0&&_e!==ke){const Re=oe.entries();let ye;for(;(ye=Re.next())&&!ye.done;){const[We,Rt]=ye.value;typeof Rt=="object"&&(ke=Q.refIds.get(Rt),Q.removeRef(ke)),ee.push({ref:oe,refId:ke,op:t.OPERATION.DELETE,field:We,value:void 0,previousValue:Rt})}}}Q.addRef(_e,me,Fe!==oe||d===t.OPERATION.DELETE_AND_ADD&&Fe===oe)}return{value:me,previousValue:oe}}const qn=function(C,d,m,v,b){const H=d[m.offset++],$=v.constructor[Symbol.metadata],ee=H>>6<<6,Q=H%(ee||255),oe=$[Q];if(oe===void 0)return console.warn("@colyseus/schema: field not defined at",{index:Q,ref:v.constructor.name,metadata:$}),Dt;const{value:me,previousValue:de}=kn(C,ee,v,Q,oe.type,d,m,b);me!=null&&(v[oe.name]=me),de!==me&&b.push({ref:v,refId:C.currentRefId,op:ee,field:oe.name,value:me,previousValue:de})},rs=function(C,d,m,v,b){const H=d[m.offset++];if(H===t.OPERATION.CLEAR){C.removeChildRefs(v,b),v.clear();return}const $=Se.number(d,m),ee=v[u];let Q;(H&t.OPERATION.ADD)===t.OPERATION.ADD?typeof v.set=="function"?(Q=Se.string(d,m),v.setIndex($,Q)):Q=$:Q=v.getIndex($);const{value:oe,previousValue:me}=kn(C,H,v,$,ee,d,m,b);if(oe!=null){if(typeof v.set=="function")v.$items.set(Q,oe);else if(typeof v.$setAt=="function")v.$setAt($,oe,H);else if(typeof v.add=="function"){const de=v.add(oe);typeof de=="number"&&v.setIndex(de,de)}}me!==oe&&b.push({ref:v,refId:C.currentRefId,op:H,field:"",dynamicIndex:Q,value:oe,previousValue:me})},xc=function(C,d,m,v,b){let H=d[m.offset++],$;if(H===t.OPERATION.CLEAR){C.removeChildRefs(v,b),v.clear();return}else if(H===t.OPERATION.REVERSE){v.reverse();return}else if(H===t.OPERATION.DELETE_BY_REFID){const de=Se.number(d,m),_e=C.root.refs.get(de);$=v.findIndex(Fe=>Fe===_e),v[h]($),b.push({ref:v,refId:C.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:$,value:void 0,previousValue:_e});return}else if(H===t.OPERATION.ADD_BY_REFID){const de=Se.number(d,m),_e=C.root.refs.get(de);_e&&($=v.findIndex(Fe=>Fe===_e)),($===-1||$===void 0)&&($=v.length)}else $=Se.number(d,m);const ee=v[u];let Q=$;const{value:oe,previousValue:me}=kn(C,H,v,$,ee,d,m,b);oe!=null&&oe!==me&&v.$setAt($,oe,H),me!==oe&&b.push({ref:v,refId:C.currentRefId,op:H,field:"",dynamicIndex:Q,value:oe,previousValue:me})};class Zs extends Error{}function Js(C,d,m,v){let b,H=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":b="number",isNaN(C)&&console.log(`trying to encode "NaN" in ${m.constructor.name}#${v}`);break;case"bigint64":case"biguint64":b="bigint";break;case"string":b="string",H=!0;break;case"boolean":return;default:return}if(typeof C!==b&&(!H||H&&C!==null)){let $=`'${JSON.stringify(C)}'${C&&C.constructor&&` (${C.constructor.name})`||""}`;throw new Zs(`a '${b}' was expected, but ${$} was provided in ${m.constructor.name}#${v}`)}}function ss(C,d,m,v){if(!(C instanceof d))throw new Zs(`a '${d.name}' was expected, but '${C&&C.constructor.name}' was provided in ${m.constructor.name}#${v}`)}var js,Qs;const qi=(C,d)=>{const m=C.toString(),v=d.toString();return m<v?-1:m>v?1:0},pt=class pt{static[(js=a,Qs=o,c)](d,m,v){var b;return!v||typeof d[u]=="string"||v.isChangeTreeVisible((b=d.tmpItems[m])==null?void 0:b[f])}static is(d){return Array.isArray(d)||d.array!==void 0}static from(d){return new pt(...Array.from(d))}constructor(...d){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const m=new Proxy(this,{get:(v,b)=>typeof b!="symbol"&&!isNaN(b)?this.items[b]:Reflect.get(v,b),set:(v,b,H)=>{var $;if(typeof b!="symbol"&&!isNaN(b)){if(H==null)v.$deleteAt(b);else{if(H[f]){ss(H,v[u],v,b);const ee=v.items[b];v.isMovingItems?(ee!==void 0?H[f].isNew?v[f].indexedOperation(Number(b),t.OPERATION.MOVE_AND_ADD):(v[f].getChange(Number(b))&t.OPERATION.DELETE)===t.OPERATION.DELETE?v[f].indexedOperation(Number(b),t.OPERATION.DELETE_AND_MOVE):v[f].indexedOperation(Number(b),t.OPERATION.MOVE):H[f].isNew&&v[f].indexedOperation(Number(b),t.OPERATION.ADD),H[f].setParent(this,v[f].root,b)):v.$changeAt(Number(b),H),ee!==void 0&&(($=ee[f].root)==null||$.remove(ee[f]))}else v.$changeAt(Number(b),H);v.items[b]=H,v.tmpItems[b]=H}return!0}else return Reflect.set(v,b,H)},deleteProperty:(v,b)=>(typeof b=="number"?v.$deleteAt(b):delete v[b],!0),has:(v,b)=>typeof b!="symbol"&&!isNaN(Number(b))?Reflect.has(this.items,b):Reflect.has(v,b)});return Object.defineProperty(this,f,{value:new Pe(m),enumerable:!1,writable:!0}),d.length>0&&this.push(...d),m}set length(d){d===0?this.clear():d<this.items.length?this.splice(d,this.length-d):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...d){var b;let m=this.tmpItems.length;const v=this[f];for(let H=0,$=d.length;H<$;H++,m++){const ee=d[H];if(ee==null)return;typeof ee=="object"&&this[u]&&ss(ee,this[u],this,H),v.indexedOperation(m,t.OPERATION.ADD,this.items.length),this.items.push(ee),this.tmpItems.push(ee),(b=ee[f])==null||b.setParent(this,v.root,m)}return m}pop(){let d=-1;for(let m=this.tmpItems.length-1;m>=0;m--)if(this.deletedIndexes[m]!==!0){d=m;break}if(!(d<0))return this[f].delete(d,void 0,this.items.length-1),this.deletedIndexes[d]=!0,this.items.pop()}at(d){return d<0&&(d+=this.length),this.items[d]}$changeAt(d,m){var H;if(m==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[d]===m)return;const v=this.items[d]!==void 0?typeof m=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,b=this[f];b.change(d,v),(H=m[f])==null||H.setParent(this,b.root,d)}$deleteAt(d,m){this[f].delete(d,m)}$setAt(d,m,v){d===0&&v===t.OPERATION.ADD&&this.items[d]!==void 0?this.items.unshift(m):v===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(d,1),this.items[d]=m):this.items[d]=m}clear(){if(this.items.length===0)return;const d=this[f];d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),d.discard(!0),d.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...d){return new pt(...this.items.concat(...d))}join(d){return this.items.join(d)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const d=this[f],m=this.tmpItems.findIndex(b=>b===this.items[0]),v=this.items.findIndex(b=>b===this.items[0]);return d.delete(m,t.OPERATION.DELETE,v),d.shiftAllChangeIndexes(-1,v),this.deletedIndexes[m]=!0,this.items.shift()}slice(d,m){const v=new pt;return v.push(...this.items.slice(d,m)),v}sort(d=qi){this.isMovingItems=!0;const m=this[f];return this.items.sort(d).forEach((b,H)=>m.change(H,t.OPERATION.REPLACE)),this.tmpItems.sort(d),this.isMovingItems=!1,this}splice(d,m,...v){var oe,me,de;const b=this[f],H=this.items.length,$=this.tmpItems.length,ee=v.length,Q=[];for(let _e=0;_e<$;_e++)this.deletedIndexes[_e]!==!0&&Q.push(_e);if(H>d){m===void 0&&(m=H-d);for(let _e=d;_e<d+m;_e++){const Fe=Q[_e];b.delete(Fe,t.OPERATION.DELETE),this.deletedIndexes[Fe]=!0}}else m=0;if(ee>0){if(ee>m)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let _e=0;_e<ee;_e++){const Fe=(Q[d]??H)+_e;b.indexedOperation(Fe,this.deletedIndexes[Fe]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),(oe=v[_e][f])==null||oe.setParent(this,b.root,Fe)}}return m>ee&&b.shiftAllChangeIndexes(-(m-ee),Q[d+ee]),b.filteredChanges!==void 0?(me=b.root)==null||me.enqueueChangeTree(b,"filteredChanges"):(de=b.root)==null||de.enqueueChangeTree(b,"changes"),this.items.splice(d,m,...v)}unshift(...d){const m=this[f];return m.shiftChangeIndexes(d.length),m.isFiltered?le(m.filteredChanges,this.items.length):le(m.allChanges,this.items.length),d.forEach((v,b)=>{m.change(b,t.OPERATION.ADD)}),this.tmpItems.unshift(...d),this.items.unshift(...d)}indexOf(d,m){return this.items.indexOf(d,m)}lastIndexOf(d,m=this.length-1){return this.items.lastIndexOf(d,m)}every(d,m){return this.items.every(d,m)}some(d,m){return this.items.some(d,m)}forEach(d,m){return this.items.forEach(d,m)}map(d,m){return this.items.map(d,m)}filter(d,m){return this.items.filter(d,m)}reduce(d,m){return this.items.reduce(d,m)}reduceRight(d,m){return this.items.reduceRight(d,m)}find(d,m){return this.items.find(d,m)}findIndex(d,m){return this.items.findIndex(d,m)}fill(d,m,v){throw new Error("ArraySchema#fill() not implemented")}copyWithin(d,m,v){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return pt}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(d,m){return this.items.includes(d,m)}flatMap(d,m){throw new Error("ArraySchema#flatMap() is not supported.")}flat(d){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...d){return this.items.findLastIndex.apply(this.items,arguments)}with(d,m){const v=this.items.slice();return d<0&&(d+=this.length),v[d]=m,new pt(...v)}toReversed(){return this.items.slice().reverse()}toSorted(d){return this.items.slice().sort(d)}toSpliced(d,m,...v){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(d=>{let m=this.items.length;for(;m!=0;){let v=Math.floor(Math.random()*m);m--,[this[m],this[v]]=[this[v],this[m]]}})}move(d){return this.isMovingItems=!0,d(this),this.isMovingItems=!1,this}[l](d,m=!1){return m?this.items[d]:this.deletedIndexes[d]?this.items[d]:this.tmpItems[d]||this.items[d]}[h](d){this.items[d]=void 0,this.tmpItems[d]=void 0}[p](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[g](){this.items=this.items.filter(d=>d!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(d=>typeof d.toJSON=="function"?d.toJSON():d)}clone(d){let m;return d?(m=new pt,m.push(...this.items)):m=new pt(...this.map(v=>v[f]?v.clone():v)),m}};pt[js]=Gt,pt[Qs]=xc;let Rn=pt;Me("array",{constructor:Rn});var ea,ta;const At=class At{static[(ea=a,ta=o,c)](d,m,v){return!v||typeof d[u]=="string"||v.isChangeTreeVisible((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.map!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const m=new Pe(this);if(m.indexes={},Object.defineProperty(this,f,{value:m,enumerable:!1,writable:!0}),d)if(d instanceof Map||d instanceof At)d.forEach((v,b)=>this.set(b,v));else for(const v in d)this.set(v,d[v]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return At}set(d,m){var ee;if(m==null)throw new Error(`MapSchema#set('${d}', ${m}): trying to set ${m} value on '${d}'.`);typeof m=="object"&&this[u]&&ss(m,this[u],this,d),d=d.toString();const v=this[f],b=m[f]!==void 0;let H,$;if(typeof v.indexes[d]<"u"){H=v.indexes[d],$=t.OPERATION.REPLACE;const Q=this.$items.get(d);if(Q===m)return;b&&($=t.OPERATION.DELETE_AND_ADD,Q!==void 0&&((ee=Q[f].root)==null||ee.remove(Q[f]))),this.deletedItems[H]&&delete this.deletedItems[H]}else H=v.indexes[x]??0,$=t.OPERATION.ADD,this.$indexes.set(H,d),v.indexes[d]=H,v.indexes[x]=H+1;return this.$items.set(d,m),v.change(H,$),b&&m[f].setParent(this,v.root,H),this}get(d){return this.$items.get(d)}delete(d){if(!this.$items.has(d))return!1;const m=this[f].indexes[d];return this.deletedItems[m]=this[f].delete(m),this.$items.delete(d)}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return this.$items.has(d)}forEach(d){this.$items.forEach(d)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){const d=this[f];for(const m in this.deletedItems){const v=parseInt(m),b=this.$indexes.get(v);delete d.indexes[b],this.$indexes.delete(v)}this.deletedItems={}}toJSON(){const d={};return this.forEach((m,v)=>{d[v]=typeof m.toJSON=="function"?m.toJSON():m}),d}clone(d){let m;return d?m=Object.assign(new At,this):(m=new At,this.forEach((v,b)=>{v[f]?m.set(b,v.clone()):m.set(b,v)})),m}};At[ea]=He,At[ta]=rs;let Vn=At;Me("map",{constructor:Vn});var na,Dr;const Cn=class Cn{static[(na=a,Dr=o,c)](d,m,v){return!v||typeof d[u]=="string"||v.isChangeTreeVisible((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.collection!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Pe(this),this[f].indexes={},d&&d.forEach(m=>this.add(m)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){const m=this.$refId++;return d[f]!==void 0&&d[f].setParent(this,this[f].root,m),this[f].indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,d),this[f].change(m),m}at(d){const m=Array.from(this.$items.keys())[d];return this.$items.get(m)}entries(){return this.$items.entries()}delete(d){const m=this.$items.entries();let v,b;for(;(b=m.next())&&!b.done;)if(d===b.value[1]){v=b.value[0];break}return v===void 0?!1:(this.deletedItems[v]=this[f].delete(v),this.$indexes.delete(v),this.$items.delete(v))}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return Array.from(this.$items.values()).some(m=>m===d)}forEach(d){this.$items.forEach((m,v,b)=>d(m,v,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((m,v)=>{d.push(typeof m.toJSON=="function"?m.toJSON():m)}),d}clone(d){let m;return d?m=Object.assign(new Cn,this):(m=new Cn,this.forEach(v=>{v[f]?m.add(v.clone()):m.add(v)})),m}};Cn[na]=He,Cn[Dr]=rs;let Yi=Cn;Me("collection",{constructor:Yi});var ia,no;const bt=class bt{static[(ia=a,no=o,c)](d,m,v){return!v||typeof d[u]=="string"||v.visible.has((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.set!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Pe(this),this[f].indexes={},d&&d.forEach(m=>this.add(m)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){var b;if(this.has(d))return!1;const m=this.$refId++;d[f]!==void 0&&d[f].setParent(this,this[f].root,m);const v=((b=this[f].indexes[m])==null?void 0:b.op)??t.OPERATION.ADD;return this[f].indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,d),this[f].change(m,v),m}entries(){return this.$items.entries()}delete(d){const m=this.$items.entries();let v,b;for(;(b=m.next())&&!b.done;)if(d===b.value[1]){v=b.value[0];break}return v===void 0?!1:(this.deletedItems[v]=this[f].delete(v),this.$indexes.delete(v),this.$items.delete(v))}clear(){const d=this[f];d.discard(!0),d.indexes={},this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){const m=this.$items.values();let v=!1,b;for(;(b=m.next())&&!b.done;)if(d===b.value){v=!0;break}return v}forEach(d){this.$items.forEach((m,v,b)=>d(m,v,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((m,v)=>{d.push(typeof m.toJSON=="function"?m.toJSON():m)}),d}clone(d){let m;return d?m=Object.assign(new bt,this):(m=new bt,this.forEach(v=>{v[f]?m.add(v.clone()):m.add(v)})),m}};bt[ia]=He,bt[no]=rs;let mr=bt;Me("set",{constructor:mr});const pi=-1;function vc(C){return Ee.register(C),C}function D(C=pi){return function(d,m){var ee;const v=d.constructor,H=Object.getPrototypeOf(v)[Symbol.metadata],$=v[ee=Symbol.metadata]??(v[ee]=Object.assign({},v[Symbol.metadata],H??Object.create(null)));Ze.setTag($,m,C)}}function q(C,d){return function(m,v){const b=m.constructor;if(!C)throw new Error(`${b.name}: @type() reference provided for "${v}" is undefined. Make sure you don't have any circular dependencies.`);C=$e(C),Ee.register(b);const $=Object.getPrototypeOf(b)[Symbol.metadata],ee=Ze.initialize(b);let Q=ee[v];if(ee[Q]!==void 0){if(ee[Q].deprecated)return;if(ee[Q].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${v}' definition on '${b.name}'.
Check @type() annotation`)}catch(oe){const me=oe.stack.split(`
`)[4].trim();throw new Error(`${oe.message} ${me}`)}}else Q=ee[x]??($&&$[x])??-1,Q++;if(d&&d.manual)Ze.addField(ee,Q,v,C,{enumerable:!0,configurable:!0,writable:!0});else{const oe=typeof Object.keys(C)[0]=="string"&&Ye(Object.keys(C)[0]),me=oe?Object.values(C)[0]:C;Ze.addField(ee,Q,v,C,ae(`_${v}`,Q,me,oe))}}}function ae(C,d,m,v){return{get:function(){return this[C]},set:function(b){var $,ee;const H=this[C]??void 0;if(b!==H){if(b!=null){v?(v.constructor===Rn&&!(b instanceof Rn)&&(b=new Rn(...b)),v.constructor===Vn&&!(b instanceof Vn)&&(b=new Vn(b)),b[u]=m):typeof m!="string"?ss(b,m,this,C.substring(1)):Js(b,m,this,C.substring(1));const Q=this[f];H!==void 0&&H[f]?(($=Q.root)==null||$.remove(H[f]),this.constructor[s](Q,d,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](Q,d,t.OPERATION.ADD),(ee=b[f])==null||ee.setParent(this,Q.root,d)}else H!==void 0&&this[f].delete(d);this[C]=b}},enumerable:!0,configurable:!0}}function ne(C=!0){return function(d,m){var Q;const v=d.constructor,H=Object.getPrototypeOf(v)[Symbol.metadata],$=v[Q=Symbol.metadata]??(v[Q]=Object.assign({},v[Symbol.metadata],H??Object.create(null))),ee=$[m];$[ee].deprecated=!0,C&&($[y]??($[y]={}),$[y][m]={get:function(){throw new Error(`${m} is deprecated.`)},set:function(oe){},enumerable:!1,configurable:!0}),Object.defineProperty($,ee,{value:$[ee],enumerable:!1,configurable:!0})}}function re(C,d,m){for(let v in d)q(d[v],m)(C.prototype,v);return C}function Le(C,d,m=Ge){const v={},b={},H={},$={};for(let me in C){const de=C[me];typeof de=="object"?(de.view!==void 0&&($[me]=typeof de.view=="boolean"?pi:de.view),v[me]=$e(de),Object.prototype.hasOwnProperty.call(de,"default")?H[me]=de.default:Array.isArray(de)||de.array!==void 0?H[me]=new Rn:de.map!==void 0?H[me]=new Vn:de.collection!==void 0?H[me]=new Yi:de.set!==void 0?H[me]=new mr:de.type!==void 0&&Ge.is(de.type)&&(!de.type.prototype.initialize||de.type.prototype.initialize.length===0)&&(H[me]=new de.type)):typeof de=="function"?Ge.is(de)?((!de.prototype.initialize||de.prototype.initialize.length===0)&&(H[me]=new de),v[me]=$e(de)):b[me]=de:v[me]=$e(de)}const ee=()=>{const me={};for(const de in H){const _e=H[de];_e&&typeof _e.clone=="function"?me[de]=_e.clone():me[de]=_e}return me},Q=me=>{const de=Object.keys(v),_e={};for(const Fe in me)de.includes(Fe)||(_e[Fe]=me[Fe]);return _e},oe=Ze.setFields(class extends m{constructor(...me){b.initialize&&typeof b.initialize=="function"?(super(Object.assign({},ee(),Q(me[0]||{}))),new.target===oe&&b.initialize.apply(this,me)):super(Object.assign({},ee(),me[0]||{}))}},v);oe._getDefaultValues=ee,Object.assign(oe.prototype,b);for(let me in $)D($[me])(oe.prototype,me);return d&&Object.defineProperty(oe,"name",{value:d}),oe.extends=(me,de)=>Le(me,de,oe),oe}function Be(C){return new Array(C).fill(0).map((d,m)=>m===C-1?"└─ ":"   ").join("")}function Ne(C){const d=C[f].root,m={ops:{},refs:[]};let v=d.changes.next;for(;v;){const b=v.changeTree;if(b===void 0){v=v.next;continue}const H=b.indexedOperations;m.refs.push(`refId#${b.refId}`);for(const $ in H){const ee=H[$],Q=t.OPERATION[ee];m.ops[Q]||(m.ops[Q]=0),m.ops[t.OPERATION[ee]]++}v=v.next}return m}var Xe,Je;const Pn=class Pn{static initialize(d){var m;Object.defineProperty(d,f,{value:new Pe(d),enumerable:!1,writable:!0}),Object.defineProperties(d,((m=d.constructor[Symbol.metadata])==null?void 0:m[y])||{})}static is(d){return typeof d[Symbol.metadata]=="object"}static[(Xe=a,Je=o,s)](d,m,v=t.OPERATION.ADD){d.change(m,v)}static[c](d,m,v){var $,ee;const H=($=d.constructor[Symbol.metadata][m])==null?void 0:$.tag;if(v===void 0)return H===void 0;if(H===void 0)return!0;if(H===pi)return v.isChangeTreeVisible(d[f]);{const Q=(ee=v.tags)==null?void 0:ee.get(d[f]);return Q&&Q.has(H)}}constructor(d){Pn.initialize(this),d&&Object.assign(this,d)}assign(d){return Object.assign(this,d),this}setDirty(d,m){const v=this.constructor[Symbol.metadata];this[f].change(v[v[d]].index,m)}clone(){var v;const d=Object.create(this.constructor.prototype);Pn.initialize(d);const m=this.constructor[Symbol.metadata];for(const b in m){const H=m[b].name;typeof this[H]=="object"&&typeof((v=this[H])==null?void 0:v.clone)=="function"?d[H]=this[H].clone():d[H]=this[H]}return d}toJSON(){const d={},m=this.constructor[Symbol.metadata];for(const v in m){const b=m[v],H=b.name;!b.deprecated&&this[H]!==null&&typeof this[H]<"u"&&(d[H]=typeof this[H].toJSON=="function"?this[H].toJSON():this[H])}return d}discardAllChanges(){this[f].discardAll()}[l](d){const m=this.constructor[Symbol.metadata];return this[m[d].name]}[h](d){const m=this.constructor[Symbol.metadata];this[m[d].name]=void 0}static debugRefIds(d,m=!1,v=0,b,H=""){var _e;const $=m?` - ${JSON.stringify(d.toJSON())}`:"",ee=d[f],Q=b?b.root.refIds.get(d):ee.refId,oe=b?b.root:ee.root,me=((_e=oe==null?void 0:oe.refCount)==null?void 0:_e[Q])>1?` [×${oe.refCount[Q]}]`:"";let de=`${Be(v)}${H}${d.constructor.name} (refId: ${Q})${me}${$}
`;return ee.forEachChild((Fe,ke)=>{let Re=ke;typeof ke=="number"&&d.$indexes&&(Re=d.$indexes.get(ke)??ke);const ye=d.forEach!==void 0&&Re!==void 0?`["${Re}"]: `:"";de+=this.debugRefIds(Fe.ref,m,v+1,b,ye)}),de}static debugRefIdEncodingOrder(d,m="allChanges"){let v=[],b=d[f].root[m].next;for(;b;)b.changeTree&&v.push(b.changeTree.refId),b=b.next;return v}static debugRefIdsFromDecoder(d){return this.debugRefIds(d.state,!1,0,d)}static debugChanges(d,m=!1){const v=d[f],b=m?v.allChanges:v.changes,H=m?"allChanges":"changes";let $=`${d.constructor.name} (${v.refId}) -> .${H}:
`;function ee(Q){Q.operations.filter(oe=>oe).forEach(oe=>{const me=v.indexedOperations[oe];$+=`- [${oe}]: ${t.OPERATION[me]} (${JSON.stringify(v.getValue(Number(oe),m))})
`})}return ee(b),!m&&v.filteredChanges&&v.filteredChanges.operations.filter(Q=>Q).length>0&&($+=`${d.constructor.name} (${v.refId}) -> .filteredChanges:
`,ee(v.filteredChanges)),m&&v.allFilteredChanges&&v.allFilteredChanges.operations.filter(Q=>Q).length>0&&($+=`${d.constructor.name} (${v.refId}) -> .allFilteredChanges:
`,ee(v.allFilteredChanges)),$}static debugChangesDeep(d,m="changes"){var me,de;let v="";const b=d[f],H=b.root,$=new Map,ee=[];let Q=0;for(const[_e,Fe]of Object.entries(H[m])){const ke=H.changeTrees[_e];if(!ke)continue;let Re=!1,ye=[],We=(me=ke.parent)==null?void 0:me[f];if(ke===b)Re=!0;else for(;We!==void 0;){if(ye.push(We),We.ref===d){Re=!0;break}We=(de=We.parent)==null?void 0:de[f]}Re&&(ee.push(ke.refId),Q+=Object.keys(Fe).length,$.set(ke,ye.reverse()))}v+=`---
`,v+=`root refId: ${b.refId}
`,v+=`Total instances: ${ee.length} (refIds: ${ee.join(", ")})
`,v+=`Total changes: ${Q}
`,v+=`---
`;const oe=new WeakSet;for(const[_e,Fe]of $.entries()){Fe.forEach((Rt,kt)=>{oe.has(Rt)||(v+=`${Be(kt)}${Rt.ref.constructor.name} (refId: ${Rt.refId})
`,oe.add(Rt))});const ke=_e.indexedOperations,Re=Fe.length,ye=Be(Re),We=Re>0?`(${_e.parentIndex}) `:"";v+=`${ye}${We}${_e.ref.constructor.name} (refId: ${_e.refId}) - changes: ${Object.keys(ke).length}
`;for(const Rt in ke){const kt=ke[Rt];v+=`${Be(Re+1)}${t.OPERATION[kt]}: ${Rt}
`}}return`${v}`}};Pn[Xe]=Ke,Pn[Je]=qn;let Ge=Pn;function it(C,d,m,v){var b=arguments.length,H=b<3?d:v,$;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")H=Reflect.decorate(C,d,m,v);else for(var ee=C.length-1;ee>=0;ee--)($=C[ee])&&(H=(b<3?$(H):b>3?$(d,m,H):$(d,m))||H);return b>3&&H&&Object.defineProperty(d,m,H),H}typeof SuppressedError=="function"&&SuppressedError;class je{constructor(d){this.types=d,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Te(),this.allFilteredChanges=Te(),this.changes=Te(),this.filteredChanges=Te()}getNextUniqueId(){return this.nextUniqueId++}add(d){d.refId===void 0&&(d.refId=this.getNextUniqueId());const m=this.changeTrees[d.refId]===void 0;m&&(this.changeTrees[d.refId]=d);const v=this.refCount[d.refId];if(v===0){const b=d.allChanges.operations;let H=b.length;for(;H--;)d.indexedOperations[b[H]]=t.OPERATION.ADD,le(d.changes,H)}return this.refCount[d.refId]=(v||0)+1,m}remove(d){const m=this.refCount[d.refId]-1;return m<=0?(d.root=void 0,delete this.changeTrees[d.refId],this.removeChangeFromChangeSet("allChanges",d),this.removeChangeFromChangeSet("changes",d),d.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",d),this.removeChangeFromChangeSet("filteredChanges",d)),this.refCount[d.refId]=0,d.forEachChild((v,b)=>{v.removeParent(d.ref)&&(v.parentChain===void 0||v.parentChain&&this.refCount[v.refId]>0?this.remove(v):v.parentChain&&this.moveNextToParent(v))})):(this.refCount[d.refId]=m,this.recursivelyMoveNextToParent(d)),m}recursivelyMoveNextToParent(d){this.moveNextToParent(d),d.forEachChild((m,v)=>this.recursivelyMoveNextToParent(m))}moveNextToParent(d){d.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",d),this.moveNextToParentInChangeTreeList("allFilteredChanges",d)):(this.moveNextToParentInChangeTreeList("changes",d),this.moveNextToParentInChangeTreeList("allChanges",d))}moveNextToParentInChangeTreeList(d,m){var oe;const v=this[d],b=m[d].queueRootNode;if(!b)return;const H=m.parent;if(!H||!H[f])return;const $=(oe=H[f][d])==null?void 0:oe.queueRootNode;if(!$||$===b)return;const ee=$.position;b.position>ee||(b.prev?b.prev.next=b.next:v.next=b.next,b.next?b.next.prev=b.prev:v.tail=b.prev,b.prev=$,b.next=$.next,$.next?$.next.prev=b:v.tail=b,$.next=b,this.updatePositionsAfterMove(v,b,ee+1))}enqueueChangeTree(d,m,v=d[m].queueRootNode){v||(d[m].queueRootNode=this.addToChangeTreeList(this[m],d))}addToChangeTreeList(d,m){const v={changeTree:m,next:void 0,prev:void 0,position:d.tail?d.tail.position+1:0};return d.next?(v.prev=d.tail,d.tail.next=v,d.tail=v):(d.next=v,d.tail=v),v}updatePositionsAfterRemoval(d,m){let v=d.next,b=0;for(;v;)b>=m&&(v.position=b),v=v.next,b++}updatePositionsAfterMove(d,m,v){let b=d.next,H=0;for(;b;)b.position=H,b=b.next,H++}removeChangeFromChangeSet(d,m){const v=this[d],b=m[d].queueRootNode;if(b&&b.changeTree===m){const H=b.position;return b.prev?b.prev.next=b.next:v.next=b.next,b.next?b.next.prev=b.prev:v.tail=b.prev,this.updatePositionsAfterRemoval(v,H),m[d].queueRootNode=void 0,!0}return!1}}const mi=class mi{constructor(d){this.sharedBuffer=Buffer.allocUnsafe(mi.BUFFER_SIZE),this.context=Ee.cache(d.constructor),this.root=new je(this.context),this.setState(d)}setState(d){this.state=d,this.state[f].setRoot(this.root)}encode(d={offset:0},m,v=this.sharedBuffer,b="changes",H=b==="allChanges",$=d.offset){const ee=m!==void 0,Q=this.state[f];let oe=this.root[b];for(;oe=oe.next;){const me=oe.changeTree;if(ee){if(!m.isChangeTreeVisible(me)){m.invisible.add(me);continue}m.invisible.delete(me)}const de=me[b],_e=me.ref,Fe=de.operations.length;if(Fe===0)continue;const ke=_e.constructor,Re=ke[a],ye=ke[c],We=ke[Symbol.metadata];(ee||d.offset>$||me!==Q)&&(v[d.offset++]=255,ve.number(v,me.refId,d));for(let Rt=0;Rt<Fe;Rt++){const kt=de.operations[Rt];if(kt<0){v[d.offset++]=Math.abs(kt)&255;continue}const In=H?t.OPERATION.ADD:me.indexedOperations[kt];kt===void 0||In===void 0||ye&&!ye(_e,kt,m)||Re(this,v,me,kt,In,d,H,ee,We)}}if(d.offset>v.byteLength){const me=Math.ceil(d.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(me/1024)} * 1024; // ${Math.round(me/1024)} KB
`),v=Buffer.alloc(me,v),v===this.sharedBuffer&&(this.sharedBuffer=v),this.encode({offset:$},m,v,b,H)}else return v.subarray(0,d.offset)}encodeAll(d={offset:0},m=this.sharedBuffer){return this.encode(d,void 0,m,"allChanges",!0)}encodeAllView(d,m,v,b=this.sharedBuffer){const H=v.offset;return this.encode(v,d,b,"allFilteredChanges",!0,H),Buffer.concat([b.subarray(0,m),b.subarray(H,v.offset)])}encodeView(d,m,v,b=this.sharedBuffer){const H=v.offset;for(const[$,ee]of d.changes){const Q=this.root.changeTrees[$];if(Q===void 0){d.changes.delete($);continue}const oe=Object.keys(ee);if(oe.length===0)continue;const de=Q.ref.constructor,_e=de[a],Fe=de[Symbol.metadata];b[v.offset++]=255,ve.number(b,Q.refId,v);for(let ke=0,Re=oe.length;ke<Re;ke++){const ye=Number(oe[ke]),Rt=Q.ref[l](ye)!==void 0&&ee[ye]||t.OPERATION.DELETE;_e(this,b,Q,ye,Rt,v,!1,!0,Fe)}}return d.changes.clear(),this.encode(v,d,b,"filteredChanges",!1,H),Buffer.concat([b.subarray(0,m),b.subarray(H,v.offset)])}discardChanges(){let d=this.root.changes.next;for(;d;)d.changeTree.endEncode("changes"),d=d.next;for(this.root.changes=Te(),d=this.root.filteredChanges.next;d;)d.changeTree.endEncode("filteredChanges"),d=d.next;this.root.filteredChanges=Te()}tryEncodeTypeId(d,m,v,b){const H=this.context.getTypeId(m),$=this.context.getTypeId(v);if($===void 0){console.warn(`@colyseus/schema WARNING: Class "${v.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}H!==$&&(d[b.offset++]=213,ve.number(d,$,b))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};mi.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let Et=mi;function Xt(C,d){if(d===-1||d>=C.length)return!1;const m=C.length-1;for(let v=d;v<m;v++)C[v]=C[v+1];return C.length=m,!0}class Wt extends Error{constructor(d){super(d),this.name="DecodingWarning"}}class Lt{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(d,m,v=!0){this.refs.set(d,m),this.refIds.set(m,d),v&&(this.refCount[d]=(this.refCount[d]||0)+1),this.deletedRefs.has(d)&&this.deletedRefs.delete(d)}removeRef(d){const m=this.refCount[d];if(m===void 0){try{throw new Wt("trying to remove refId that doesn't exist: "+d)}catch(v){console.warn(v)}return}if(m===0){try{const v=this.refs.get(d);throw new Wt(`trying to remove refId '${d}' with 0 refCount (${v.constructor.name}: ${JSON.stringify(v)})`)}catch(v){console.warn(v)}return}(this.refCount[d]=m-1)<=0&&this.deletedRefs.add(d)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(d=>{if(this.refCount[d]>0)return;const m=this.refs.get(d);if(m.constructor[Symbol.metadata]!==void 0){const v=m.constructor[Symbol.metadata];for(const b in v){const H=v[b].name,$=typeof m[H]=="object"&&this.refIds.get(m[H]);$&&!this.deletedRefs.has($)&&this.removeRef($)}}else typeof m[u]=="function"&&Array.from(m.values()).forEach(v=>{const b=this.refIds.get(v);this.deletedRefs.has(b)||this.removeRef(b)});this.refs.delete(d),delete this.refCount[d],delete this.callbacks[d]}),this.deletedRefs.clear()}addCallback(d,m,v){if(d===void 0){const b=typeof m=="number"?t.OPERATION[m]:m;throw new Error(`Can't addCallback on '${b}' (refId is undefined)`)}return this.callbacks[d]||(this.callbacks[d]={}),this.callbacks[d][m]||(this.callbacks[d][m]=[]),this.callbacks[d][m].push(v),()=>this.removeCallback(d,m,v)}removeCallback(d,m,v){var H,$,ee;const b=(ee=($=(H=this.callbacks)==null?void 0:H[d])==null?void 0:$[m])==null?void 0:ee.indexOf(v);b!==void 0&&b!==-1&&Xt(this.callbacks[d][m],b)}}class rn{constructor(d,m){this.currentRefId=0,this.setState(d),this.context=m||new Ee(d.constructor)}setState(d){this.state=d,this.root=new Lt,this.root.addRef(0,d)}decode(d,m={offset:0},v=this.state){var Q,oe,me;const b=[],H=this.root,$=d.byteLength;let ee=v.constructor[o];for(this.currentRefId=0;m.offset<$;){if(d[m.offset]==255){m.offset++,(Q=v[g])==null||Q.call(v);const _e=Se.number(d,m),Fe=H.refs.get(_e);Fe?(v=Fe,ee=v.constructor[o],this.currentRefId=_e):(console.error(`"refId" not found: ${_e}`,{previousRef:v,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(d,m,$));continue}if(ee(this,d,m,v,b)===Dt){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(d,m,$);continue}}return(oe=v[g])==null||oe.call(v),(me=this.triggerChanges)==null||me.call(this,b),H.garbageCollectDeletedRefs(),b}skipCurrentStructure(d,m,v){const b={offset:m.offset};for(;m.offset<v&&!(d[m.offset]===255&&(b.offset=m.offset+1,this.root.refs.has(Se.number(d,b))));)m.offset++}getInstanceType(d,m,v){let b;if(d[m.offset]===213){m.offset++;const H=Se.number(d,m);b=this.context.get(H)}return b||v}createInstanceOfType(d){return new d}removeChildRefs(d,m){const v=typeof d[u]!="string",b=this.root.refIds.get(d);d.forEach((H,$)=>{m.push({ref:d,refId:b,op:t.OPERATION.DELETE,field:$,value:void 0,previousValue:H}),v&&this.root.removeRef(this.root.refIds.get(H))})}}class Ue extends Ge{}it([q("string")],Ue.prototype,"name",void 0),it([q("string")],Ue.prototype,"type",void 0),it([q("number")],Ue.prototype,"referencedType",void 0);class sn extends Ge{constructor(){super(...arguments),this.fields=new Rn}}it([q("number")],sn.prototype,"id",void 0),it([q("number")],sn.prototype,"extendsId",void 0),it([q([Ue])],sn.prototype,"fields",void 0);class ht extends Ge{constructor(){super(...arguments),this.types=new Rn}static encode(d,m={offset:0}){const v=d.context,b=new ht,H=new Et(b),$=v.schemas.get(d.state.constructor);$>0&&(b.rootType=$);const ee=new Set,Q={},oe=de=>{if(de.extendsId===void 0||ee.has(de.extendsId)){ee.add(de.id),b.types.push(de);const _e=Q[de.id];_e!==void 0&&(delete Q[de.id],_e.forEach(Fe=>oe(Fe)))}else Q[de.extendsId]===void 0&&(Q[de.extendsId]=[]),Q[de.extendsId].push(de)};v.schemas.forEach((de,_e)=>{const Fe=new sn;Fe.id=Number(de);const ke=Object.getPrototypeOf(_e);ke!==Ge&&(Fe.extendsId=v.schemas.get(ke));const Re=_e[Symbol.metadata];if(Re!==ke[Symbol.metadata])for(const ye in Re){const We=Number(ye),Rt=Re[We].name;if(!Object.prototype.hasOwnProperty.call(Re,Rt))continue;const kt=new Ue;kt.name=Rt;let In;const Pi=Re[We];if(typeof Pi.type=="string")In=Pi.type;else{let ra;Ge.is(Pi.type)?(In="ref",ra=Pi.type):(In=Object.keys(Pi.type)[0],typeof Pi.type[In]=="string"?In+=":"+Pi.type[In]:ra=Pi.type[In]),kt.referencedType=ra?v.getTypeId(ra):-1}kt.type=In,Fe.fields.push(kt)}oe(Fe)});for(const de in Q)Q[de].forEach(_e=>b.types.push(_e));return H.encodeAll(m).slice(0,m.offset)}static decode(d,m){const v=new ht;new rn(v).decode(d,m);const H=new Ee;v.types.forEach(Q=>{const oe=H.get(Q.extendsId)??Ge,me=class extends oe{};Ee.register(me),H.add(me,Q.id)},{});const $=(Q,oe,me)=>{oe.fields.forEach((de,_e)=>{const Fe=me+_e;if(de.referencedType!==void 0){let ke=de.type,Re=H.get(de.referencedType);if(!Re){const ye=de.type.split(":");ke=ye[0],Re=ye[1]}ke==="ref"?Ze.addField(Q,Fe,de.name,Re):Ze.addField(Q,Fe,de.name,{[ke]:Re})}else Ze.addField(Q,Fe,de.name,de.type)})};v.types.forEach(Q=>{const oe=H.get(Q.id),me=Ze.initialize(oe),de=[];let _e=Q;do de.push(_e),_e=v.types.find(ke=>ke.id===_e.extendsId);while(_e);let Fe=0;de.reverse().forEach(ke=>{$(me,ke,Fe),Fe+=ke.fields.length})});const ee=new(H.get(v.rootType||0));return new rn(ee,H)}}it([q([sn])],ht.prototype,"types",void 0),it([q("number")],ht.prototype,"rootType",void 0);function Hn(C){const d=C.root,m=d.callbacks,v=new WeakMap;let b;C.triggerChanges=function(ee){var oe;const Q=new Set;for(let me=0,de=ee.length;me<de;me++){const _e=ee[me],Fe=_e.refId,ke=_e.ref,Re=m[Fe];if(Re){if((_e.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&_e.previousValue instanceof Ge){const ye=(oe=m[d.refIds.get(_e.previousValue)])==null?void 0:oe[t.OPERATION.DELETE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We]()}if(ke instanceof Ge){if(!Q.has(Fe)){const ye=Re==null?void 0:Re[t.OPERATION.REPLACE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We]()}if(Re.hasOwnProperty(_e.field)){const ye=Re[_e.field];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](_e.value,_e.previousValue)}}else{if((_e.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(_e.previousValue!==void 0){const ye=Re[t.OPERATION.DELETE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](_e.previousValue,_e.dynamicIndex??_e.field)}if((_e.op&t.OPERATION.ADD)===t.OPERATION.ADD){const ye=Re[t.OPERATION.ADD];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](_e.value,_e.dynamicIndex??_e.field)}}else if((_e.op&t.OPERATION.ADD)===t.OPERATION.ADD&&_e.previousValue!==_e.value){const ye=Re[t.OPERATION.ADD];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](_e.value,_e.dynamicIndex??_e.field)}if(_e.value!==_e.previousValue&&(_e.value!==void 0||_e.previousValue!==void 0)){const ye=Re[t.OPERATION.REPLACE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](_e.value,_e.dynamicIndex??_e.field)}}Q.add(Fe)}}};function H(ee,Q){var de;let oe=((de=Q.instance)==null?void 0:de.constructor[Symbol.metadata])||ee,me=Q.instance&&typeof Q.instance.forEach=="function"||ee&&typeof ee[Symbol.metadata]>"u";if(oe&&!me){const _e=function(Fe,ke,Re,ye){return ye&&Q.instance[ke]!==void 0&&!v.has(b)&&Re(Q.instance[ke],void 0),d.addCallback(d.refIds.get(Fe),ke,Re)};return new Proxy({listen:function(ke,Re,ye=!0){if(Q.instance)return _e(Q.instance,ke,Re,ye);{let We=()=>{};return Q.onInstanceAvailable((Rt,kt)=>{We=_e(Rt,ke,Re,ye&&kt&&!v.has(b))}),()=>We()}},onChange:function(ke){return d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,ke)},bindTo:function(ke,Re){return Re||(Re=Object.keys(oe).map(ye=>oe[ye].name)),d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,()=>{Re.forEach(ye=>ke[ye]=Q.instance[ye])})}},{get(Fe,ke){var ye;const Re=oe[oe[ke]];if(Re){const We=(ye=Q.instance)==null?void 0:ye[ke],Rt=(kt=>{const In=$(Q.instance).listen(ke,(Pi,ra)=>{kt(Pi,!1),In==null||In()},!1);d.refIds.get(We)!==void 0&&kt(We,!0)});return H(Re.type,{instance:d.refIds.get(We)&&We,parentInstance:Q.instance,onInstanceAvailable:Rt})}else return Fe[ke]},has(Fe,ke){return oe[ke]!==void 0},set(Fe,ke,Re){throw new Error("not allowed")},deleteProperty(Fe,ke){throw new Error("not allowed")}})}else{const _e=function(Re,ye,We){return We&&Re.forEach((Rt,kt)=>ye(Rt,kt)),d.addCallback(d.refIds.get(Re),t.OPERATION.ADD,(Rt,kt)=>{v.set(ye,!0),b=ye,ye(Rt,kt),v.delete(ye),b=void 0})},Fe=function(Re,ye){return d.addCallback(d.refIds.get(Re),t.OPERATION.DELETE,ye)},ke=function(Re,ye){return d.addCallback(d.refIds.get(Re),t.OPERATION.REPLACE,ye)};return new Proxy({onAdd:function(Re,ye=!0){if(Q.instance)return _e(Q.instance,Re,ye&&!v.has(b));if(Q.onInstanceAvailable){let We=()=>{};return Q.onInstanceAvailable((Rt,kt)=>{We=_e(Rt,Re,ye&&kt&&!v.has(b))}),()=>We()}},onRemove:function(Re){if(Q.instance)return Fe(Q.instance,Re);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(We=>{ye=Fe(We,Re)}),()=>ye()}},onChange:function(Re){if(Q.instance)return ke(Q.instance,Re);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(We=>{ye=ke(We,Re)}),()=>ye()}}},{get(Re,ye){if(!Re[ye])throw new Error(`Can't access '${ye}' through callback proxy. access the instance directly.`);return Re[ye]},has(Re,ye){return Re[ye]!==void 0},set(Re,ye,We){throw new Error("not allowed")},deleteProperty(Re,ye){throw new Error("not allowed")}})}}function $(ee){return H(void 0,{instance:ee})}return $}function ti(C,d){C.triggerChanges=d}class Ci{constructor(d=!1){this.iterable=d,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,d&&(this.items=[])}add(d,m=pi,v=!0){var oe,me;const b=d==null?void 0:d[f],H=b.parent;if(b){if(!H&&b.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${b.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",d),!1;const $=d.constructor[Symbol.metadata];this.visible.add(b),this.iterable&&v&&this.items.push(d),v&&H&&this.addParentOf(b,m);let ee=this.changes.get(b.refId);ee===void 0&&(ee={},this.changes.set(b.refId,ee));let Q=!1;if(b.forEachChild((de,_e)=>{$&&$[_e].tag!==void 0&&$[_e].tag!==m||this.add(de.ref,m,!1)&&(Q=!0)}),m!==pi){this.tags||(this.tags=new WeakMap);let de;this.tags.has(b)?de=this.tags.get(b):(de=new Set,this.tags.set(b,de)),de.add(m),(me=(oe=$==null?void 0:$[P])==null?void 0:oe[m])==null||me.forEach(_e=>{b.getChange(_e)!==t.OPERATION.DELETE&&(ee[_e]=t.OPERATION.ADD)})}else if(!b.isNew||Q){const de=b.filteredChanges!==void 0?b.allFilteredChanges:b.allChanges,_e=this.invisible.has(b);for(let Fe=0,ke=de.operations.length;Fe<ke;Fe++){const Re=de.operations[Fe];if(Re===void 0)continue;const ye=b.indexedOperations[Re]??t.OPERATION.ADD,We=$==null?void 0:$[Re].tag;ye!==t.OPERATION.DELETE&&(_e||We===void 0||We===m)&&(ee[Re]=ye,Q=!0)}}return Q}addParentOf(d,m){var H;const v=d.parent[f],b=d.parentIndex;if(!this.visible.has(v)){this.visible.add(v);const $=(H=v.parent)==null?void 0:H[f];$&&$.filteredChanges!==void 0&&this.addParentOf(v,m)}if(v.getChange(b)!==t.OPERATION.DELETE){let $=this.changes.get(v.refId);$===void 0&&($={},this.changes.set(v.refId,$)),this.tags||(this.tags=new WeakMap);let ee;this.tags.has(v)?ee=this.tags.get(v):(ee=new Set,this.tags.set(v,ee)),ee.add(m),$[b]=t.OPERATION.ADD}}remove(d,m=pi,v=!1){var Q;const b=d[f];if(!b)return console.warn("StateView#remove(), invalid object:",d),this;this.visible.delete(b),this.iterable&&!v&&Xt(this.items,this.items.indexOf(d));const $=b.ref.constructor[Symbol.metadata];let ee=this.changes.get(b.refId);if(ee===void 0&&(ee={},this.changes.set(b.refId,ee)),m===pi){const oe=b.parent;if(oe&&!Ze.isValidInstance(oe)&&b.isFiltered){const me=oe[f];let de=this.changes.get(me.refId);de===void 0?(de={},this.changes.set(me.refId,de)):de[b.parentIndex]===t.OPERATION.ADD&&this.changes.delete(b.refId),de[b.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(b)}else(Q=$==null?void 0:$[T])==null||Q.forEach(me=>ee[me]=t.OPERATION.DELETE)}else $==null||$[P][m].forEach(oe=>ee[oe]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(b)){const oe=this.tags.get(b);m===void 0?this.tags.delete(b):(oe.delete(m),oe.size===0&&this.tags.delete(b))}return this}has(d){return this.visible.has(d[f])}hasTag(d,m=pi){var b;const v=(b=this.tags)==null?void 0:b.get(d[f]);return(v==null?void 0:v.has(m))??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let d=0,m=this.items.length;d<m;d++)this.remove(this.items[d],pi,!0);this.items.length=0}isChangeTreeVisible(d){let m=this.visible.has(d);return!m&&d.isVisibilitySharedWithParent&&this.visible.has(d.parent[f])&&(this.visible.add(d),m=!0),m}_recursiveDeleteVisibleChangeTree(d){d.forEachChild(m=>{this.visible.delete(m),this._recursiveDeleteVisibleChangeTree(m)})}}Me("map",{constructor:Vn}),Me("array",{constructor:Rn}),Me("set",{constructor:mr}),Me("collection",{constructor:Yi}),t.$changes=f,t.$childType=u,t.$decoder=o,t.$deleteByIndex=h,t.$encoder=a,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Rn,t.ChangeTree=Pe,t.CollectionSchema=Yi,t.Decoder=rn,t.Encoder=Et,t.MapSchema=Vn,t.Metadata=Ze,t.Reflection=ht,t.ReflectionField=Ue,t.ReflectionType=sn,t.Schema=Ge,t.SetSchema=mr,t.StateView=Ci,t.TypeContext=Ee,t.decode=Se,t.decodeKeyValueOperation=rs,t.decodeSchemaOperation=qn,t.defineCustomTypes=De,t.defineTypes=re,t.deprecated=ne,t.dumpChanges=Ne,t.encode=ve,t.encodeArray=Gt,t.encodeKeyValueOperation=He,t.encodeSchemaOperation=Ke,t.entity=vc,t.getDecoderStateCallbacks=Hn,t.getRawChangesCallback=ti,t.registerType=Me,t.schema=Le,t.type=q,t.view=D}))})(Ra,Ra.exports)),Ra.exports}var ym;function SR(){if(ym)return xf;ym=1;var n=dc,e=Fh();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const a=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,a),this.wt.ready.then(o=>{console.log("WebTransport ready!",o),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(o=>{console.log("WebTransport not ready!",o),this._close()}),this.wt.closed.then(o=>{console.log("WebTransport closed w/ success",o),this.events.onclose({code:o.closeCode,reason:o.reason})}).catch(o=>{console.log("WebTransport closed w/ error",o),this.events.onerror(o),this.events.onclose({code:o.closeCode,reason:o.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),a=new Uint8Array(s+r.length);a.set(this.lengthPrefixBuffer.subarray(0,s),0),a.set(r,s),this.writer.write(a)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),a=new Uint8Array(s+r.length);a.set(this.lengthPrefixBuffer.subarray(0,s),0),a.set(r,s),this.unreliableWriter.write(a)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(a){console.error(a)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,a={offset:0};do{const o=e.decode.number(s,a);this.events.onmessage({data:s.subarray(a.offset,a.offset+o)}),a.offset+=o}while(a.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,a={offset:0};do{const o=e.decode.number(s,a);this.events.onmessage({data:s.subarray(a.offset,a.offset+o)}),a.offset+=o}while(a.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,a){const o={offset:0},c=[];e.encode.string(c,r,o),e.encode.string(c,s,o),a&&e.encode.string(c,a,o),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return xf.H3TransportTransport=t,xf}var vf={},yf,Sm;function MR(){return Sm||(Sm=1,yf=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),yf}var Mm;function ER(){if(Mm)return vf;Mm=1;var n=MR();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return vf.WebSocketTransport=t,vf}var Em;function bR(){if(Em)return _f;Em=1;var n=SR(),e=ER();let t=class{constructor(r){switch(this.events={},r){case"h3":this.transport=new n.H3TransportTransport(this.events);break;default:this.transport=new e.WebSocketTransport(this.events);break}}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return _f.Connection=t,_f}var Sf={},bm;function l_(){return bm||(bm=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Sf)),Sf}var qo={},wm;function c_(){if(wm)return qo;wm=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return qo.getSerializer=t,qo.registerSerializer=e,qo}var Mf={},Tm;function f_(){if(Tm)return Mf;Tm=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return Mf.createNanoEvents=n,Mf}var Yo={},Am;function wR(){if(Am)return Yo;Am=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...a){r.apply(this,a),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return Yo.EventEmitter=n,Yo.createSignal=e,Yo}var Ko={},Rm;function u_(){if(Rm)return Ko;Rm=1;var n=Fh();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return Ko.SchemaSerializer=t,Ko.getStateCallbacks=e,Ko}var th;try{th=new TextDecoder}catch{}var Oe,$i,K=0,Vt={},St,Tr,ai=0,Fi=0,hn,lr,An=[],xt,Cm={useRecords:!1,mapsAsObjects:!0};class h_{}const Bh=new h_;Bh.name="MessagePack 0xC1";var Ar=!1,d_=2,TR;try{new Function("")}catch{d_=1/0}class Pr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Oe)return v_(()=>(tc(),this?this.unpack(e,t):Pr.prototype.unpack.call(Cm,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?($i=t.end||e.length,K=t.start||0):(K=0,$i=t>-1?t:e.length),Fi=0,Tr=null,hn=null,Oe=e;try{xt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw Oe=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Pr){if(Vt=this,this.structures)return St=this.structures,Zo(t);(!St||St.length>0)&&(St=[])}else Vt=Cm,(!St||St.length>0)&&(St=[]);return Zo(t)}unpackMultiple(e,t){let i,r=0;try{Ar=!0;let s=e.length,a=this?this.unpack(e,s):gc.unpack(e,s);if(t){if(t(a,r,K)===!1)return;for(;K<s;)if(r=K,t(Zo(),r,K)===!1)return}else{for(i=[a];K<s;)r=K,i.push(Zo());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Ar=!1,tc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function Zo(n){try{if(!Vt.trusted&&!Ar){let t=St.sharedLength||0;t<St.length&&(St.length=t)}let e;if(Vt.randomAccessStructure&&Oe[K]<64&&Oe[K]>=32&&TR||(e=nn()),hn&&(K=hn.postBundlePosition,hn=null),Ar&&(St.restoreStructures=null),K==$i)St&&St.restoreStructures&&Pm(),St=null,Oe=null,lr&&(lr=null);else{if(K>$i)throw new Error("Unexpected end of MessagePack data");if(!Ar){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw St&&St.restoreStructures&&Pm(),tc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||K>$i)&&(e.incomplete=!0),e}}function Pm(){for(let n in St.restoreStructures)St[n]=St.restoreStructures[n];St.restoreStructures=null}function nn(){let n=Oe[K++];if(n<160)if(n<128){if(n<64)return n;{let e=St[n&63]||Vt.getStructures&&p_()[n&63];return e?(e.read||(e.read=zh(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Vt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=g_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Vt.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(Fi>=K)return Tr.slice(K-ai,(K+=e)-ai);if(Fi==0&&$i<140){let t=e<16?kh(e):m_(e);if(t!=null)return t}return nh(e)}else{let e;switch(n){case 192:return null;case 193:return hn?(e=nn(),e>0?hn[1].slice(hn.position1,hn.position1+=e):hn[0].slice(hn.position0,hn.position0-=e)):Bh;case 194:return!1;case 195:return!0;case 196:if(e=Oe[K++],e===void 0)throw new Error("Unexpected end of buffer");return Ef(e);case 197:return e=xt.getUint16(K),K+=2,Ef(e);case 198:return e=xt.getUint32(K),K+=4,Ef(e);case 199:return Br(Oe[K++]);case 200:return e=xt.getUint16(K),K+=2,Br(e);case 201:return e=xt.getUint32(K),K+=4,Br(e);case 202:if(e=xt.getFloat32(K),Vt.useFloat32>2){let t=mc[(Oe[K]&127)<<1|Oe[K+1]>>7];return K+=4,(t*e+(e>0?.5:-.5)>>0)/t}return K+=4,e;case 203:return e=xt.getFloat64(K),K+=8,e;case 204:return Oe[K++];case 205:return e=xt.getUint16(K),K+=2,e;case 206:return e=xt.getUint32(K),K+=4,e;case 207:return Vt.int64AsType==="number"?(e=xt.getUint32(K)*4294967296,e+=xt.getUint32(K+4)):Vt.int64AsType==="string"?e=xt.getBigUint64(K).toString():Vt.int64AsType==="auto"?(e=xt.getBigUint64(K),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigUint64(K),K+=8,e;case 208:return xt.getInt8(K++);case 209:return e=xt.getInt16(K),K+=2,e;case 210:return e=xt.getInt32(K),K+=4,e;case 211:return Vt.int64AsType==="number"?(e=xt.getInt32(K)*4294967296,e+=xt.getUint32(K+4)):Vt.int64AsType==="string"?e=xt.getBigInt64(K).toString():Vt.int64AsType==="auto"?(e=xt.getBigInt64(K),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigInt64(K),K+=8,e;case 212:if(e=Oe[K++],e==114)return Um(Oe[K++]&63);{let t=An[e];if(t)return t.read?(K++,t.read(nn())):t.noBuffer?(K++,t()):t(Oe.subarray(K,++K));throw new Error("Unknown extension "+e)}case 213:return e=Oe[K],e==114?(K++,Um(Oe[K++]&63,Oe[K++])):Br(2);case 214:return Br(4);case 215:return Br(8);case 216:return Br(16);case 217:return e=Oe[K++],Fi>=K?Tr.slice(K-ai,(K+=e)-ai):RR(e);case 218:return e=xt.getUint16(K),K+=2,Fi>=K?Tr.slice(K-ai,(K+=e)-ai):CR(e);case 219:return e=xt.getUint32(K),K+=4,Fi>=K?Tr.slice(K-ai,(K+=e)-ai):PR(e);case 220:return e=xt.getUint16(K),K+=2,Dm(e);case 221:return e=xt.getUint32(K),K+=4,Dm(e);case 222:return e=xt.getUint16(K),K+=2,Lm(e);case 223:return e=xt.getUint32(K),K+=4,Lm(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const AR=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function zh(n,e){function t(){if(t.count++>d_){let r=n.read=new Function("r","return function(){return "+(Vt.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":AR.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(nn);return n.highByte===0&&(n.read=Im(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let a=n[r];a==="__proto__"&&(a="__proto_"),i[a]=nn()}return Vt.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?Im(e,t):t}const Im=(n,e)=>function(){let t=Oe[K++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=St[i]||p_()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=zh(r,n)),r.read()};function p_(){let n=v_(()=>(Oe=null,Vt.getStructures()));return St=Vt._mergeStructures(n,St)}var nh=eo,RR=eo,CR=eo,PR=eo;let IR=!1;function eo(n){let e;if(n<16&&(e=kh(n)))return e;if(n>64&&th)return th.decode(Oe.subarray(K,K+=n));const t=K+n,i=[];for(e="";K<t;){const r=Oe[K++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=Oe[K++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=Oe[K++]&63,a=Oe[K++]&63;i.push((r&31)<<12|s<<6|a)}else if((r&248)===240){const s=Oe[K++]&63,a=Oe[K++]&63,o=Oe[K++]&63;let c=(r&7)<<18|s<<12|a<<6|o;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=un.apply(String,i),i.length=0)}return i.length>0&&(e+=un.apply(String,i)),e}function Dm(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Vt.freezeData?Object.freeze(e):e}function Lm(n){if(Vt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=g_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}}var un=String.fromCharCode;function m_(n){let e=K,t=new Array(n);for(let i=0;i<n;i++){const r=Oe[K++];if((r&128)>0){K=e;return}t[i]=r}return un.apply(String,t)}function kh(n){if(n<4)if(n<2){if(n===0)return"";{let e=Oe[K++];if((e&128)>1){K-=1;return}return un(e)}}else{let e=Oe[K++],t=Oe[K++];if((e&128)>0||(t&128)>0){K-=2;return}if(n<3)return un(e,t);let i=Oe[K++];if((i&128)>0){K-=3;return}return un(e,t,i)}else{let e=Oe[K++],t=Oe[K++],i=Oe[K++],r=Oe[K++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){K-=4;return}if(n<6){if(n===4)return un(e,t,i,r);{let s=Oe[K++];if((s&128)>0){K-=5;return}return un(e,t,i,r,s)}}else if(n<8){let s=Oe[K++],a=Oe[K++];if((s&128)>0||(a&128)>0){K-=6;return}if(n<7)return un(e,t,i,r,s,a);let o=Oe[K++];if((o&128)>0){K-=7;return}return un(e,t,i,r,s,a,o)}else{let s=Oe[K++],a=Oe[K++],o=Oe[K++],c=Oe[K++];if((s&128)>0||(a&128)>0||(o&128)>0||(c&128)>0){K-=8;return}if(n<10){if(n===8)return un(e,t,i,r,s,a,o,c);{let l=Oe[K++];if((l&128)>0){K-=9;return}return un(e,t,i,r,s,a,o,c,l)}}else if(n<12){let l=Oe[K++],h=Oe[K++];if((l&128)>0||(h&128)>0){K-=10;return}if(n<11)return un(e,t,i,r,s,a,o,c,l,h);let f=Oe[K++];if((f&128)>0){K-=11;return}return un(e,t,i,r,s,a,o,c,l,h,f)}else{let l=Oe[K++],h=Oe[K++],f=Oe[K++],u=Oe[K++];if((l&128)>0||(h&128)>0||(f&128)>0||(u&128)>0){K-=12;return}if(n<14){if(n===12)return un(e,t,i,r,s,a,o,c,l,h,f,u);{let p=Oe[K++];if((p&128)>0){K-=13;return}return un(e,t,i,r,s,a,o,c,l,h,f,u,p)}}else{let p=Oe[K++],g=Oe[K++];if((p&128)>0||(g&128)>0){K-=14;return}if(n<15)return un(e,t,i,r,s,a,o,c,l,h,f,u,p,g);let y=Oe[K++];if((y&128)>0){K-=15;return}return un(e,t,i,r,s,a,o,c,l,h,f,u,p,g,y)}}}}}function Nm(){let n=Oe[K++],e;if(n<192)e=n-160;else switch(n){case 217:e=Oe[K++];break;case 218:e=xt.getUint16(K),K+=2;break;case 219:e=xt.getUint32(K),K+=4;break;default:throw new Error("Expected string")}return eo(e)}function Ef(n){return Vt.copyBuffers?Uint8Array.prototype.slice.call(Oe,K,K+=n):Oe.subarray(K,K+=n)}function Br(n){let e=Oe[K++];if(An[e]){let t;return An[e](Oe.subarray(K,t=K+=n),i=>{K=i;try{return nn()}finally{K=t}})}else throw new Error("Unknown extension type "+e)}var Om=new Array(4096);function g_(){let n=Oe[K++];if(n>=160&&n<192){if(n=n-160,Fi>=K)return Tr.slice(K-ai,(K+=n)-ai);if(!(Fi==0&&$i<180))return nh(n)}else return K--,__(nn());let e=(n<<5^(n>1?xt.getUint16(K):n>0?Oe[K]:0))&4095,t=Om[e],i=K,r=K+n-3,s,a=0;if(t&&t.bytes==n){for(;i<r;){if(s=xt.getUint32(i),s!=t[a++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=Oe[i++],s!=t[a++]){i=1879048192;break}if(i===r)return K=i,t.string;r-=3,i=K}for(t=[],Om[e]=t,t.bytes=n;i<r;)s=xt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=Oe[i++],t.push(s);let o=n<16?kh(n):m_(n);return o!=null?t.string=o:t.string=nh(n)}function __(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Vt.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const Um=(n,e)=>{let t=nn().map(__),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=St[n];return r&&(r.isShared||Ar)&&((St.restoreStructures||(St.restoreStructures=[]))[n]=r),St[n]=t,t.read=zh(t,i),t.read()};An[0]=()=>{};An[0].noBuffer=!0;An[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let DR={Error,TypeError,ReferenceError};An[101]=()=>{let n=nn();return(DR[n[0]]||Error)(n[1],{cause:n[2]})};An[105]=n=>{if(Vt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(K-4);lr||(lr=new Map);let t=Oe[K],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};lr.set(e,r);let s=nn();return r.used?Object.assign(i,s):(r.target=s,s)};An[112]=n=>{if(Vt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(K-4),t=lr.get(e);return t.used=!0,t.target};An[115]=()=>new Set(nn());const x_=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let LR=typeof globalThis=="object"?globalThis:window;An[116]=n=>{let e=n[0],t=x_[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new LR[t](Uint8Array.prototype.slice.call(n,1).buffer)};An[120]=()=>{let n=nn();return new RegExp(n[0],n[1])};const NR=[];An[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=K;return K+=e-n.length,hn=NR,hn=[Nm(),Nm()],hn.position0=0,hn.position1=0,hn.postBundlePosition=K,K=t,nn()};An[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function v_(n){let e=$i,t=K,i=ai,r=Fi,s=Tr,a=lr,o=hn,c=new Uint8Array(Oe.slice(0,$i)),l=St,h=St.slice(0,St.length),f=Vt,u=Ar,p=n();return $i=e,K=t,ai=i,Fi=r,Tr=s,lr=a,hn=o,Oe=c,Ar=u,St=l,St.splice(0,St.length,...h),Vt=f,xt=new DataView(Oe.buffer,Oe.byteOffset,Oe.byteLength),p}function tc(){Oe=null,lr=null,St=null}function OR(n){n.unpack?An[n.type]=n.unpack:An[n.type]=n}const mc=new Array(147);for(let n=0;n<256;n++)mc[n]=+("1e"+Math.floor(45.15-n*.30103));const UR=Pr;var gc=new Pr({useRecords:!1});const FR=gc.unpack,BR=gc.unpackMultiple,zR=gc.unpack,y_={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let S_=new Float32Array(1),Fm=new Uint8Array(S_.buffer,0,4);function kR(n){S_[0]=n;let e=mc[(Fm[3]&127)<<1|Fm[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let fl;try{fl=new TextEncoder}catch{}let nc,Vh;const _c=typeof Buffer<"u",Jo=_c?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,M_=_c?Buffer:Uint8Array,Bm=_c?4294967296:2144337920;let ie,ya,Ft,J=0,Nn,Zt=null,VR;const HR=21760,GR=/[\u0080-\uFFFF]/,Rs=Symbol("record-id");class to extends Pr{constructor(e){super(e),this.offset=0;let t,i,r,s,a=M_.prototype.utf8Write?function(L,k){return ie.utf8Write(L,k,ie.byteLength-k)}:fl&&fl.encodeInto?function(L,k){return fl.encodeInto(L,ie.subarray(k)).written}:!1,o=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=h>32||f+h>64,p=h+64,g=h+f+64;if(g>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let y=[],x=0,_=0;this.pack=this.encode=function(L,k){if(ie||(ie=new Jo(8192),Ft=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,8192)),J=0),Nn=ie.length-10,Nn-J<2048?(ie=new Jo(ie.length),Ft=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,ie.length)),Nn=ie.length-10,J=0):J=J+7&2147483640,t=J,k&T_&&(J+=k&255),s=o.structuredClone?new Map:null,o.bundleStrings&&typeof L!="string"?(Zt=[],Zt.size=1/0):Zt=null,r=o.structures,r){r.uninitialized&&(r=o._mergeStructures(o.getStructures()));let U=r.sharedLength||0;if(U>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let F=0;F<U;F++){let G=r[F];if(!G)continue;let Z,te=r.transitions;for(let ue=0,pe=G.length;ue<pe;ue++){let ze=G[ue];Z=te[ze],Z||(Z=te[ze]=Object.create(null)),te=Z}te[Rs]=F+64}this.lastNamedStructuresLength=U}c||(r.nextId=U+64)}i&&(i=!1);let A;try{o.randomAccessStructure&&L&&L.constructor&&L.constructor===Object?z(L):M(L);let U=Zt;if(Zt&&Vm(t,M,0),s&&s.idsToInsert){let F=s.idsToInsert.sort((ue,pe)=>ue.offset>pe.offset?1:-1),G=F.length,Z=-1;for(;U&&G>0;){let ue=F[--G].offset+t;ue<U.stringsPosition+t&&Z===-1&&(Z=0),ue>U.position+t?Z>=0&&(Z+=6):(Z>=0&&(Ft.setUint32(U.position+t,Ft.getUint32(U.position+t)+Z),Z=-1),U=U.previous,G++)}Z>=0&&U&&Ft.setUint32(U.position+t,Ft.getUint32(U.position+t)+Z),J+=F.length*6,J>Nn&&w(J),o.offset=J;let te=$R(ie.subarray(t,J),F);return s=null,te}return o.offset=J,k&b_?(ie.start=t,ie.end=J,ie):ie.subarray(t,J)}catch(U){throw A=U,U}finally{if(r&&(T(),i&&o.saveStructures)){let U=r.sharedLength||0,F=ie.subarray(t,J),G=qR(r,o);if(!A)return o.saveStructures(G,G.isCompatible)===!1?o.pack(L,k):(o.lastNamedStructuresLength=U,ie.length>1073741824&&(ie=null),F)}ie.length>1073741824&&(ie=null),k&w_&&(J=t)}};const T=()=>{_<10&&_++;let L=r.sharedLength||0;if(r.length>L&&!c&&(r.length=L),x>1e4)r.transitions=null,_=0,x=0,y.length>0&&(y=[]);else if(y.length>0&&!c){for(let k=0,A=y.length;k<A;k++)y[k][Rs]=0;y=[]}},P=L=>{var k=L.length;k<16?ie[J++]=144|k:k<65536?(ie[J++]=220,ie[J++]=k>>8,ie[J++]=k&255):(ie[J++]=221,Ft.setUint32(J,k),J+=4);for(let A=0;A<k;A++)M(L[A])},M=L=>{J>Nn&&(ie=w(J));var k=typeof L,A;if(k==="string"){let U=L.length;if(Zt&&U>=4&&U<4096){if((Zt.size+=U)>HR){let te,ue=(Zt[0]?Zt[0].length*3+Zt[1].length:0)+10;J+ue>Nn&&(ie=w(J+ue));let pe;Zt.position?(pe=Zt,ie[J]=200,J+=3,ie[J++]=98,te=J-t,J+=4,Vm(t,M,0),Ft.setUint16(te+t-3,J-t-te)):(ie[J++]=214,ie[J++]=98,te=J-t,J+=4),Zt=["",""],Zt.previous=pe,Zt.size=0,Zt.position=te}let Z=GR.test(L);Zt[Z?0:1]+=L,ie[J++]=193,M(Z?-U:U);return}let F;U<32?F=1:U<256?F=2:U<65536?F=3:F=5;let G=U*3;if(J+G>Nn&&(ie=w(J+G)),U<64||!a){let Z,te,ue,pe=J+F;for(Z=0;Z<U;Z++)te=L.charCodeAt(Z),te<128?ie[pe++]=te:te<2048?(ie[pe++]=te>>6|192,ie[pe++]=te&63|128):(te&64512)===55296&&((ue=L.charCodeAt(Z+1))&64512)===56320?(te=65536+((te&1023)<<10)+(ue&1023),Z++,ie[pe++]=te>>18|240,ie[pe++]=te>>12&63|128,ie[pe++]=te>>6&63|128,ie[pe++]=te&63|128):(ie[pe++]=te>>12|224,ie[pe++]=te>>6&63|128,ie[pe++]=te&63|128);A=pe-J-F}else A=a(L,J+F);A<32?ie[J++]=160|A:A<256?(F<2&&ie.copyWithin(J+2,J+1,J+1+A),ie[J++]=217,ie[J++]=A):A<65536?(F<3&&ie.copyWithin(J+3,J+2,J+2+A),ie[J++]=218,ie[J++]=A>>8,ie[J++]=A&255):(F<5&&ie.copyWithin(J+5,J+3,J+3+A),ie[J++]=219,Ft.setUint32(J,A),J+=4),J+=A}else if(k==="number")if(L>>>0===L)L<32||L<128&&this.useRecords===!1||L<64&&!this.randomAccessStructure?ie[J++]=L:L<256?(ie[J++]=204,ie[J++]=L):L<65536?(ie[J++]=205,ie[J++]=L>>8,ie[J++]=L&255):(ie[J++]=206,Ft.setUint32(J,L),J+=4);else if(L>>0===L)L>=-32?ie[J++]=256+L:L>=-128?(ie[J++]=208,ie[J++]=L+256):L>=-32768?(ie[J++]=209,Ft.setInt16(J,L),J+=2):(ie[J++]=210,Ft.setInt32(J,L),J+=4);else{let U;if((U=this.useFloat32)>0&&L<4294967296&&L>=-2147483648){ie[J++]=202,Ft.setFloat32(J,L);let F;if(U<4||(F=L*mc[(ie[J]&127)<<1|ie[J+1]>>7])>>0===F){J+=4;return}else J--}ie[J++]=203,Ft.setFloat64(J,L),J+=8}else if(k==="object"||k==="function")if(!L)ie[J++]=192;else{if(s){let F=s.get(L);if(F){if(!F.id){let G=s.idsToInsert||(s.idsToInsert=[]);F.id=G.push(F)}ie[J++]=214,ie[J++]=112,Ft.setUint32(J,F.id),J+=4;return}else s.set(L,{offset:J-t})}let U=L.constructor;if(U===Object)S(L);else if(U===Array)P(L);else if(U===Map)if(this.mapAsEmptyObject)ie[J++]=128;else{A=L.size,A<16?ie[J++]=128|A:A<65536?(ie[J++]=222,ie[J++]=A>>8,ie[J++]=A&255):(ie[J++]=223,Ft.setUint32(J,A),J+=4);for(let[F,G]of L)M(F),M(G)}else{for(let F=0,G=nc.length;F<G;F++){let Z=Vh[F];if(L instanceof Z){let te=nc[F];if(te.write){te.type&&(ie[J++]=212,ie[J++]=te.type,ie[J++]=0);let et=te.write.call(this,L);et===L?Array.isArray(L)?P(L):S(L):M(et);return}let ue=ie,pe=Ft,ze=J;ie=null;let at;try{at=te.pack.call(this,L,et=>(ie=ue,ue=null,J+=et,J>Nn&&w(J),{target:ie,targetView:Ft,position:J-et}),M)}finally{ue&&(ie=ue,Ft=pe,J=ze,Nn=ie.length-10)}at&&(at.length+J>Nn&&w(at.length+J),J=WR(at,ie,J,te.type));return}}if(Array.isArray(L))P(L);else{if(L.toJSON){const F=L.toJSON();if(F!==L)return M(F)}if(k==="function")return M(this.writeFunction&&this.writeFunction(L));S(L)}}}else if(k==="boolean")ie[J++]=L?195:194;else if(k==="bigint"){if(L<BigInt(1)<<BigInt(63)&&L>=-(BigInt(1)<<BigInt(63)))ie[J++]=211,Ft.setBigInt64(J,L);else if(L<BigInt(1)<<BigInt(64)&&L>0)ie[J++]=207,Ft.setBigUint64(J,L);else if(this.largeBigIntToFloat)ie[J++]=203,Ft.setFloat64(J,Number(L));else{if(this.largeBigIntToString)return M(L.toString());if(this.useBigIntExtension&&L<BigInt(2)**BigInt(1023)&&L>-(BigInt(2)**BigInt(1023))){ie[J++]=199,J++,ie[J++]=66;let U=[],F;do{let G=L&BigInt(255);F=(G&BigInt(128))===(L<BigInt(0)?BigInt(128):BigInt(0)),U.push(G),L>>=BigInt(8)}while(!((L===BigInt(0)||L===BigInt(-1))&&F));ie[J-2]=U.length;for(let G=U.length;G>0;)ie[J++]=Number(U[--G]);return}else throw new RangeError(L+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}J+=8}else if(k==="undefined")this.encodeUndefinedAsNil?ie[J++]=192:(ie[J++]=212,ie[J++]=0,ie[J++]=0);else throw new Error("Unknown type: "+k)},I=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?L=>{let k;if(this.skipValues){k=[];for(let F in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(F))&&!this.skipValues.includes(L[F])&&k.push(F)}else k=Object.keys(L);let A=k.length;A<16?ie[J++]=128|A:A<65536?(ie[J++]=222,ie[J++]=A>>8,ie[J++]=A&255):(ie[J++]=223,Ft.setUint32(J,A),J+=4);let U;if(this.coercibleKeyAsNumber)for(let F=0;F<A;F++){U=k[F];let G=Number(U);M(isNaN(G)?U:G),M(L[U])}else for(let F=0;F<A;F++)M(U=k[F]),M(L[U])}:L=>{ie[J++]=222;let k=J-t;J+=2;let A=0;for(let U in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(U))&&(M(U),M(L[U]),A++);if(A>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ie[k+++t]=A>>8,ie[k+t]=A&255},R=this.useRecords===!1?I:e.progressiveRecords&&!u?L=>{let k,A=r.transitions||(r.transitions=Object.create(null)),U=J++-t,F;for(let G in L)if(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(G)){if(k=A[G],k)A=k;else{let Z=Object.keys(L),te=A;A=r.transitions;let ue=0;for(let pe=0,ze=Z.length;pe<ze;pe++){let at=Z[pe];k=A[at],k||(k=A[at]=Object.create(null),ue++),A=k}U+t+1==J?(J--,B(A,Z,ue)):N(A,Z,U,ue),F=!0,A=te[G]}M(L[G])}if(!F){let G=A[Rs];G?ie[U+t]=G:N(A,Object.keys(L),U,0)}}:L=>{let k,A=r.transitions||(r.transitions=Object.create(null)),U=0;for(let G in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(G))&&(k=A[G],k||(k=A[G]=Object.create(null),U++),A=k);let F=A[Rs];F?F>=96&&u?(ie[J++]=((F-=96)&31)+96,ie[J++]=F>>5):ie[J++]=F:B(A,A.__keys__||Object.keys(L),U);for(let G in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(G))&&M(L[G])},O=typeof this.useRecords=="function"&&this.useRecords,S=O?L=>{O(L)?R(L):I(L)}:R,w=L=>{let k;if(L>16777216){if(L-t>Bm)throw new Error("Packed buffer would be larger than maximum buffer size");k=Math.min(Bm,Math.round(Math.max((L-t)*(L>67108864?1.25:2),4194304)/4096)*4096)}else k=(Math.max(L-t<<2,ie.length-1)>>12)+1<<12;let A=new Jo(k);return Ft=A.dataView||(A.dataView=new DataView(A.buffer,0,k)),L=Math.min(L,ie.length),ie.copy?ie.copy(A,0,t,L):A.set(ie.slice(t,L)),J-=t,t=0,Nn=A.length-10,ie=A},B=(L,k,A)=>{let U=r.nextId;U||(U=64),U<p&&this.shouldShareStructure&&!this.shouldShareStructure(k)?(U=r.nextOwnId,U<g||(U=p),r.nextOwnId=U+1):(U>=g&&(U=p),r.nextId=U+1);let F=k.highByte=U>=96&&u?U-96>>5:-1;L[Rs]=U,L.__keys__=k,r[U-64]=k,U<p?(k.isShared=!0,r.sharedLength=U-63,i=!0,F>=0?(ie[J++]=(U&31)+96,ie[J++]=F):ie[J++]=U):(F>=0?(ie[J++]=213,ie[J++]=114,ie[J++]=(U&31)+96,ie[J++]=F):(ie[J++]=212,ie[J++]=114,ie[J++]=U),A&&(x+=_*A),y.length>=f&&(y.shift()[Rs]=0),y.push(L),M(k))},N=(L,k,A,U)=>{let F=ie,G=J,Z=Nn,te=t;ie=ya,J=0,t=0,ie||(ya=ie=new Jo(8192)),Nn=ie.length-10,B(L,k,U),ya=ie;let ue=J;if(ie=F,J=G,Nn=Z,t=te,ue>1){let pe=J+ue-1;pe>Nn&&w(pe);let ze=A+t;ie.copyWithin(ze+ue,ze+1,J),ie.set(ya.slice(0,ue),ze),J=pe}else ie[A+t]=ya[0]},z=L=>{let k=VR(L,ie,t,J,r,w,(A,U,F)=>{if(F)return i=!0;J=U;let G=ie;return M(A),T(),G!==ie?{position:J,targetView:Ft,target:ie}:J},this);if(k===0)return S(L);J=k}}useBuffer(e){ie=e,ie.dataView||(ie.dataView=new DataView(ie.buffer,ie.byteOffset,ie.byteLength)),Ft=ie.dataView,J=0}set position(e){J=e}get position(){return J}set buffer(e){ie=e}get buffer(){return ie}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}Vh=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,h_];nc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:a}=e(6);r[a++]=214,r[a++]=255,s.setUint32(a,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:a}=e(10);r[a++]=215,r[a++]=255,s.setUint32(a,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(a+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:a}=e(3);r[a++]=212,r[a++]=255,r[a++]=255}else{let{target:r,targetView:s,position:a}=e(15);r[a++]=199,r[a++]=12,r[a++]=255,s.setUint32(a,n.getMilliseconds()*1e6),s.setBigInt64(a+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?zm(n,16,e):km(_c?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==M_&&this.moreTypes?zm(n,x_.indexOf(t.name),e):km(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function zm(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:a}=t(4+r);s[a++]=199,s[a++]=r+1}else if(r+1<65536){var{target:s,position:a}=t(5+r);s[a++]=200,s[a++]=r+1>>8,s[a++]=r+1&255}else{var{target:s,position:a,targetView:o}=t(7+r);s[a++]=201,o.setUint32(a,r+1),a+=4}s[a++]=116,s[a++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),a)}function km(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function WR(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function $R(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,a=t.id;n.copyWithin(s+i,s,r),i-=6;let o=s+i;n[o++]=214,n[o++]=105,n[o++]=a>>24,n[o++]=a>>16&255,n[o++]=a>>8&255,n[o++]=a&255,r=s}return n}function Vm(n,e,t){if(Zt.length>0){Ft.setUint32(Zt.position+n,J+t-Zt.position-n),Zt.stringsPosition=J-n;let i=Zt;Zt=null,e(i[0]),e(i[1])}}function XR(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");Vh.unshift(n.Class),nc.unshift(n)}OR(n)}function qR(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let E_=new to({useRecords:!1});const YR=E_.pack,KR=E_.pack,ZR=to,{NEVER:JR,ALWAYS:jR,DECIMAL_ROUND:QR,DECIMAL_FIT:eC}=y_,b_=512,w_=1024,T_=2048;function tC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return nC(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return iC(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*nC(n,e){const t=new to(e);for(const i of n)yield t.pack(i)}async function*iC(n,e){const t=new to(e);for await(const i of n)yield t.pack(i)}function rC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Pr(e);let i;const r=s=>{let a;i&&(s=Buffer.concat([i,s]),i=void 0);try{a=t.unpackMultiple(s)}catch(o){if(o.incomplete)i=s.slice(o.lastPosition),a=o.values;else throw o}return a};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const a of n)yield*r(a)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const a of n)yield*r(a)})()}const sC=rC,aC=tC,oC=!1,lC=!0,cC=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:jR,C1:Bh,DECIMAL_FIT:eC,DECIMAL_ROUND:QR,Decoder:UR,Encoder:ZR,FLOAT32_OPTIONS:y_,NEVER:JR,Packr:to,RESERVE_START_SPACE:T_,RESET_BUFFER_MODE:w_,REUSE_BUFFER_MODE:b_,Unpackr:Pr,addExtension:XR,clearSource:tc,decode:zR,decodeIter:sC,encode:KR,encodeIter:aC,isNativeAccelerationEnabled:IR,mapsAsObjects:lC,pack:YR,roundFloat32:kR,unpack:FR,unpackMultiple:BR,useRecords:oC},Symbol.toStringTag,{value:"Module"})),fC=Oh(cC);var Hm;function R_(){if(Hm)return gf;Hm=1;var n=bR(),e=l_(),t=c_(),i=f_(),r=wR(),s=Fh(),a=u_(),o=pc(),c=fC;let l=class A_{constructor(f,u){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),u&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=u,this.serializer.state=new u),this.onError((p,g)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${p}) ${g}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,u,p=this,g,y){const x=new n.Connection(g.protocol);if(p.connection=x,x.events.onmessage=A_.prototype.onMessageCallback.bind(p),x.events.onclose=function(_){var T;if(!p.hasJoined){(T=console.warn)===null||T===void 0||T.call(console,`Room connection was closed unexpectedly (${_.code}): ${_.reason}`),p.onError.invoke(_.code,_.reason);return}_.code===o.CloseCode.DEVMODE_RESTART&&u?u():(p.onLeave.invoke(_.code,_.reason),p.destroy())},x.events.onerror=function(_){var T;(T=console.warn)===null||T===void 0||T.call(console,`Room, onError (${_.code}): ${_.reason}`),p.onError.invoke(_.code,_.reason)},g.protocol==="h3"){const _=new URL(f);x.connect(_.origin,g)}else x.connect(f,y)}leave(f=!0){return new Promise(u=>{this.onLeave(p=>u(p)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(o.CloseCode.CONSENTED)})}onMessage(f,u){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),u)}send(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const g=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.send(g)}sendUnreliable(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const g=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.sendUnreliable(g)}sendBytes(f,u){const p={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),u.byteLength+p.offset>this.packr.buffer.byteLength){const g=new Uint8Array(p.offset+u.byteLength);g.set(this.packr.buffer),this.packr.useBuffer(g)}this.packr.buffer.set(u,p.offset),this.connection.send(this.packr.buffer.subarray(0,p.offset+u.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof a.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const u=new Uint8Array(f.data),p={offset:1},g=u[0];if(g===e.Protocol.JOIN_ROOM){const y=s.decode.utf8Read(u,p,u[p.offset++]);if(this.serializerId=s.decode.utf8Read(u,p,u[p.offset++]),!this.serializer){const x=t.getSerializer(this.serializerId);this.serializer=new x}u.byteLength>p.offset&&this.serializer.handshake&&this.serializer.handshake(u,p),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(g===e.Protocol.ERROR){const y=s.decode.number(u,p),x=s.decode.string(u,p);this.onError.invoke(y,x)}else if(g===e.Protocol.LEAVE_ROOM)this.leave();else if(g===e.Protocol.ROOM_STATE)this.serializer.setState(u,p),this.onStateChange.invoke(this.serializer.getState());else if(g===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(u,p),this.onStateChange.invoke(this.serializer.getState());else if(g===e.Protocol.ROOM_DATA){const y=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p),x=u.byteLength>p.offset?c.unpack(u,{start:p.offset}):void 0;this.dispatchMessage(y,x)}else if(g===e.Protocol.ROOM_DATA_BYTES){const y=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p);this.dispatchMessage(y,u.subarray(p.offset))}}dispatchMessage(f,u){var p;const g=this.getMessageHandlerKey(f);this.onMessageHandlers.events[g]?this.onMessageHandlers.emit(g,u):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,u):(p=console.warn)===null||p===void 0||p.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return gf.Room=l,gf}var bf={};function Gm(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Ri(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,a,o,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Gm(s,s);o=c.shift();)o=o.split(": "),s.headers[o.shift().toLowerCase()]=o.join(": ");if(o=s.headers["content-type"],o&&~o.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return Gm(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(a in h)s.setRequestHeader(a,h[a]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var uC=Ri.bind(Ri,"GET"),hC=Ri.bind(Ri,"POST"),dC=Ri.bind(Ri,"PATCH"),pC=Ri.bind(Ri,"DELETE"),mC=Ri.bind(Ri,"PUT");const gC=Object.freeze(Object.defineProperty({__proto__:null,del:pC,get:uC,patch:dC,post:hC,put:mC,send:Ri},Symbol.toStringTag,{value:"Module"})),_C=Oh(gC);var Wm;function xC(){if(Wm)return bf;Wm=1;var n=pc(),e=_C;function t(s){var a=Object.create(null);return s&&Object.keys(s).forEach(function(o){if(o!=="default"){var c=Object.getOwnPropertyDescriptor(s,o);Object.defineProperty(a,o,c.get?c:{enumerable:!0,get:function(){return s[o]}})}}),a.default=s,Object.freeze(a)}var i=t(e);let r=class{constructor(a,o={}){this.client=a,this.headers=o}get(a,o={}){return this.request("get",a,o)}post(a,o={}){return this.request("post",a,o)}del(a,o={}){return this.request("del",a,o)}put(a,o={}){return this.request("put",a,o)}request(a,o,c={}){return i[a](this.client.getHttpEndpoint(o),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,u=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!u?l:new n.ServerError(f,u)})}getOptions(a){return a.headers=Object.assign({},this.headers,a.headers),this.authToken&&(a.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(a.withCredentials=!0),a}};return bf.HTTP=r,bf}var wf={},Sa={},$m;function vC(){if($m)return Sa;$m=1;var n=dc;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new a),e||(e={cache:{},setItem:function(o,c){this.cache[o]=c},getItem:function(o){this.cache[o]},removeItem:function(o){delete this.cache[o]}}),e}function i(o,c){t().setItem(o,c)}function r(o){t().removeItem(o)}function s(o,c){const l=t().getItem(o);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class a{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Sa.getItem=s,Sa.removeItem=r,Sa.setItem=i,Sa}var Xm;function C_(){if(Xm)return wf;Xm=1;var n=dc,e=vC(),t=f_(),i,r,s,a;let o=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),a.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,a,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,u)=>{this.getUserData().then(p=>{this.emitChange(Object.assign(Object.assign({},p),{token:this.token}))}).catch(p=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(u),u})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((u,p)=>{const g=f.width||480,y=f.height||768,x=this.token?`?token=${this.token}`:"",_=`Login with ${h[0].toUpperCase()+h.substring(1)}`,T=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${x}`),P=screen.width/2-g/2,M=screen.height/2-y/2;n.__classPrivateFieldSet(this,s,window.open(T,_,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+g+", height="+y+", top="+M+", left="+P),"f");const I=O=>{O.data.user===void 0&&O.data.token===void 0||(clearInterval(R),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",I),O.data.error!==void 0?p(O.data.error):(u(O.data),this.emitChange(O.data)))},R=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),p("cancelled"),window.removeEventListener("message",I))},200);window.addEventListener("message",I)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,a,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,a=new WeakMap,wf.Auth=o,wf}var Tf={},qm;function yC(){if(qm)return Tf;qm=1;function n(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Tf.discordURLBuilder=n,Tf}var Ym;function SC(){if(Ym)return Xo;Ym=1;var n=dc,e=pc(),t=R_(),i=xC(),r=C_(),s=yC(),a;class o extends Error{constructor(f,u){super(f),this.code=u,this.name="MatchMakeError",Object.setPrototypeOf(this,o.prototype)}}const c=typeof window<"u"&&typeof((a=window==null?void 0:window.location)===null||a===void 0?void 0:a.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,u){var p,g;if(typeof f=="string"){const y=f.startsWith("/")?new URL(f,c):new URL(f),x=y.protocol==="https:"||y.protocol==="wss:",_=Number(y.port||(x?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:_,secure:x,searchParams:y.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,(u==null?void 0:u.headers)||{}),this.auth=new r.Auth(this.http),this.urlBuilder=u==null?void 0:u.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((g=(p=window==null?void 0:window.location)===null||p===void 0?void 0:p.hostname)===null||g===void 0)&&g.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("joinOrCreate",u,p,g)})}create(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("create",u,p,g)})}join(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("join",u,p,g)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("joinById",u,p,g)})}reconnect(f,u){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof u=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,g]=f.split(":");if(!p||!g)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:g},u)})}consumeSeatReservation(f,u,p){return n.__awaiter(this,void 0,void 0,function*(){const g=this.createRoom(f.room.name,u);g.roomId=f.room.roomId,g.sessionId=f.sessionId;const y={sessionId:g.sessionId};f.reconnectionToken&&(y.reconnectionToken=f.reconnectionToken);const x=p||g;return g.connect(this.buildEndpoint(f.room,y,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${g.roomId}'...`);let _=0,T=8;const P=()=>n.__awaiter(this,void 0,void 0,function*(){_++;try{yield this.consumeSeatReservation(f,u,x),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${g.roomId}'`)}catch{_<T?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${_} out of ${T})`),setTimeout(P,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(P,2e3)})),x,f,this.http.headers),new Promise((_,T)=>{const P=(M,I)=>T(new e.ServerError(M,I));x.onError.once(P),x.onJoin.once(()=>{x.onError.remove(P),_(x)})})})}createMatchMakeRequest(f,u){return n.__awaiter(this,arguments,void 0,function*(p,g,y={},x,_){const T=(yield this.http.post(`matchmake/${p}/${g}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(T.error)throw new o(T.error,T.code);return p==="reconnect"&&(T.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(T,x,_)})}createRoom(f,u){return new t.Room(f,u)}buildEndpoint(f,u={},p="ws"){let g=this.settings.searchParams||"";this.http.authToken&&(u._authToken=this.http.authToken);for(const _ in u)u.hasOwnProperty(_)&&(g+=(g?"&":"")+`${_}=${u[_]}`);p==="h3"&&(p="http");let y=this.settings.secure?`${p}s://`:`${p}://`;f.publicAddress?y+=`${f.publicAddress}`:y+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const x=`${y}/${f.processId}/${f.roomId}?${g}`;return this.urlBuilder?this.urlBuilder(new URL(x)):x}getHttpEndpoint(f=""){const u=f.startsWith("/")?f:`/${f}`;let p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${u}`;return this.settings.searchParams&&(p+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",Xo.Client=l,Xo.MatchMakeError=o,Xo}var Af={},Km;function MC(){if(Km)return Af;Km=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Af.NoneSerializer=n,Af}var Zm;function EC(){return Zm||(Zm=1,(function(n){mR();var e=SC(),t=l_(),i=R_(),r=C_(),s=pc(),a=u_(),o=MC(),c=c_();c.registerSerializer("schema",a.SchemaSerializer),c.registerSerializer("none",o.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=a.SchemaSerializer,n.getStateCallbacks=a.getStateCallbacks,n.registerSerializer=c.registerSerializer})(pf)),pf}var bC=EC();const wC={},TC=wC.VITE_SERVER_URL??`ws://${location.hostname}:${wb}`;async function AC(n,e){const t=new bC.Client(TC),i=e===null?await t.create("race",{nickname:n,code:i1()}):await t.join("race",{nickname:n,code:e.toUpperCase()});return{room:i,sessionId:i.sessionId,isHost:()=>i.state.hostSessionId===i.sessionId,sendInput:r=>i.send("input",r),start:()=>i.send("start",{})}}const P_="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",I_="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:320px;display:flex;flex-direction:column;gap:12px",ul="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let $n=null;function RC(n,e){var a;$n=document.createElement("div"),$n.style.cssText=P_;const t=document.createElement("div");t.style.cssText=I_,t.innerHTML=`
    <h1 style="margin:0;font-size:24px">Cargo Skies ✈️</h1>
    <input id="nick" placeholder="Your pilot name" maxlength="16"
           style="padding:10px;border-radius:8px;border:none;font-size:16px" />
    <button id="create" style="${ul}">Start a race</button>
    <div style="display:flex;gap:8px">
      <input id="code" placeholder="Code" maxlength="4"
             style="padding:10px;border-radius:8px;border:none;font-size:16px;width:90px;text-transform:uppercase" />
      <button id="join" style="${ul};background:#3d6ee8;flex:1">Join a race</button>
    </div>
    <div style="height:1px;background:rgba(255,255,255,.15);margin:4px 0"></div>
    <button id="practice" style="${ul};background:#2fbf71">Practice (solo) — no server needed</button>`,$n.appendChild(t),document.body.appendChild($n);const i=t.querySelector("#nick"),r=t.querySelector("#code"),s=(a=/^\/r\/([A-Za-z0-9]{4})$/.exec(location.pathname))==null?void 0:a[1];s&&(r.value=s.toUpperCase()),t.querySelector("#create").addEventListener("click",()=>{n(i.value||"Pilot",null)}),t.querySelector("#join").addEventListener("click",()=>{r.value.length===4&&n(i.value||"Pilot",r.value)}),t.querySelector("#practice").addEventListener("click",()=>{e()})}function CC(n,e,t){var a;$n||($n=document.createElement("div"),$n.style.cssText=P_,document.body.appendChild($n));const i=n.hostSessionId===e,r=[];n.players.forEach(o=>r.push(o.nickname));const s=`${location.origin}/r/${n.code}`;$n.innerHTML=`
    <div style="${I_}">
      <h2 style="margin:0">Room ${n.code}</h2>
      <div style="opacity:.8">Share: <a href="${s}" style="color:#8fb7ff">${s}</a></div>
      <div>${r.map(o=>`🛩️ ${o}`).join("<br>")}</div>
      ${i?`<button id="go" style="${ul}">Start race</button>`:"<div style='opacity:.7'>Waiting for host…</div>"}
    </div>`,(a=$n.querySelector("#go"))==null||a.addEventListener("click",t)}function Jm(){$n==null||$n.remove(),$n=null}const PC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",IC="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:360px;display:flex;flex-direction:column;gap:14px",jo="padding:10px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 16px system-ui;cursor:pointer",Ma="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer";let vi=null;function DC(n,e){vi==null||vi.remove(),vi=document.createElement("div"),vi.style.cssText=PC;const t=document.createElement("div");t.style.cssText=IC;const i=Object.keys(Cs).map(u=>`<button data-plane="${u}" title="${Cs[u].blurb}" style="${Ma}">${Cs[u].emoji}<br>${Cs[u].name}</button>`).join("");t.innerHTML=`
    <h2 style="margin:0">Solo flight 🛩️</h2>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Your plane</div>
      <div data-planes style="display:flex;gap:6px">${i}</div>
      <div data-blurb style="font-size:12px;opacity:.7;margin-top:4px;min-height:14px"></div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Difficulty</div>
      <div data-diff style="display:flex;gap:6px">
        <button data-v="kids" style="${Ma}">Kids</button>
        <button data-v="normal" style="${Ma}">Normal</button>
        <button data-v="expert" style="${Ma}">Expert</button>
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Plane speed</div>
      <div data-speed style="display:flex;gap:6px">
        ${Object.keys(Su).map(u=>`<button data-v="${u}" style="${Ma}">${Su[u].name}</button>`).join("")}
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Legs per contract: <b data-legs-label>3</b></div>
      <input data-legs type="range" min="1" max="6" value="3" style="width:100%" />
    </div>
    <button data-contract style="${jo}">Start contract</button>
    <button data-trial style="${jo};background:#e8a53d">⏱ Timed trial (race your ghost)</button>
    <div style="display:flex;gap:8px">
      <button data-free style="${jo};background:#3d6ee8;flex:1">Free fly</button>
      <button data-passport style="${jo};background:#9a6dce;flex:1">📔 Passport</button>
    </div>`,vi.appendChild(t),document.body.appendChild(vi);let r="normal",s="seaplane",a="normal";const o=(u,p)=>{for(const g of t.querySelectorAll(`${u} button`))g.style.background=p(g)?"#e84d3d":"rgba(255,255,255,.12)",g.style.color="#fff"},c=()=>{o("[data-diff]",u=>u.dataset.v===r),o("[data-planes]",u=>u.dataset.plane===s),o("[data-speed]",u=>u.dataset.v===a),t.querySelector("[data-blurb]").textContent=Cs[s].blurb};c();for(const u of t.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>{r=u.dataset.v,c()});for(const u of t.querySelectorAll("[data-planes] button"))u.addEventListener("click",()=>{s=u.dataset.plane,c()});for(const u of t.querySelectorAll("[data-speed] button"))u.addEventListener("click",()=>{a=u.dataset.v,c()});const l=t.querySelector("[data-legs]"),h=t.querySelector("[data-legs-label]");l.addEventListener("input",()=>{h.textContent=l.value});const f=u=>({mode:u,difficulty:r,legCount:Number(l.value),plane:s,speed:a});t.querySelector("[data-contract]").addEventListener("click",()=>n(f("contract"))),t.querySelector("[data-trial]").addEventListener("click",()=>n(f("trial"))),t.querySelector("[data-free]").addEventListener("click",()=>n(f("free"))),t.querySelector("[data-passport]").addEventListener("click",e)}function LC(){vi==null||vi.remove(),vi=null}function Hh(n){return/^[A-Za-z]{2}$/.test(n)?String.fromCodePoint(...[...n.toUpperCase()].map(e=>127462+(e.charCodeAt(0)-65))):"🏳️"}const hl=n=>{const e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(1).padStart(4,"0")}`},NC={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function OC(n){let e=null,t=0,i=0,r=0,s=0,a=[],o=0;const c=()=>(e==null?void 0:e.legs[t])??null,l=()=>{var f;const h=c();!h||!e||(i=0,s=0,n.hints.setTarget(h.countryId),n.hints.setFlags(np(0,e.difficulty)),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,Hh(((f=n.countries[h.countryId])==null?void 0:f.cca2)??"")))};return{startContract(h){e=c1(n.countries,n.landmarks,n.riddles,{seed:h.seed??Date.now()>>>0,legCount:h.legCount,difficulty:h.difficulty}),t=0,r=0,a=[],o=0,l()},stop(){e=null,n.hints.clear(),n.beacon.hide(),n.banner.hide()},isActive(){return e!==null},update(h,f){var y;const u=c();if(!e||!u)return;if(o>0){o-=f,o<=0&&l();return}i+=f,r+=f,n.banner.setClock(`⏱ ${hl(r)}`);const p=np(i,e.difficulty);n.hints.setFlags(p),n.banner.setCompass(p.compass?(n1(h.lat,h.lon,u.zone.lat,u.zone.lon)-h.headingDeg+360)%360:null);const g=r1(h,u,s,f);if(s=g.dwellS,n.banner.setDwell(u.type==="refuel"&&g.inZone?s/W0:null),n.banner.setWarning(g.requirementBlocked?NC[u.type]??null:null),g.complete){a.push(i);const x=((y=n.countries[u.countryId])==null?void 0:y.name)??u.countryId;if(n.hints.clear(),n.beacon.hide(),t+1<e.legs.length)n.banner.toast(`✅ ${x}! Leg ${t+1} of ${e.legs.length} done`),t+=1,o=1.2;else{n.banner.hide();const _={contract:e,legTimesS:a,totalS:r};e=null,n.onContractComplete(_)}}}}}const jm=13606703,UC=16765471;function FC(n){let e=null,t={continent:!1,outline:!1};const i=new Set,r=()=>{var s;for(const a of i)(s=n.countryMaterials.get(a))==null||s.emissive.setHex(0);i.clear()};return{setTarget(s){r(),e=s},setFlags(s){!s.continent&&t.continent&&r(),t=s},update(s){if(!e)return;const a=n.continentOf.get(e);if(t.continent&&a){const c=.12+.08*Math.sin(s*2.5);for(const[l,h]of n.countryMaterials)n.continentOf.get(l)===a&&l!==e&&(h.emissive.setHex(jm),h.emissiveIntensity=c,i.add(l))}const o=n.countryMaterials.get(e);o&&(t.outline?(o.emissive.setHex(UC),o.emissiveIntensity=.4+.3*Math.sin(s*5),i.add(e)):t.continent&&(o.emissive.setHex(jm),o.emissiveIntensity=.12+.08*Math.sin(s*2.5),i.add(e)))},clear(){r(),e=null,t={continent:!1,compass:!1,outline:!1}}}}const BC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",zC="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:380px;display:flex;flex-direction:column;gap:12px",Qm="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let yi=null;function kC(n,e,t,i,r){yi==null||yi.remove(),yi=document.createElement("div"),yi.style.cssText=BC;const s=n.contract.legs.map((c,l)=>{const h=e[c.countryId],f=t.includes(c.countryId)?" 🆕":"";return`<tr>
        <td style="padding:3px 10px 3px 0;opacity:.7">${l+1}.</td>
        <td style="padding:3px 10px 3px 0">${Hh((h==null?void 0:h.cca2)??"")} ${(h==null?void 0:h.name)??c.countryId}${f}</td>
        <td style="padding:3px 0;text-align:right;font-variant-numeric:tabular-nums">${hl(n.legTimesS[l]??0)}</td>
      </tr>`}).join(""),a=i!==null?n.totalS<=i?'<div style="color:#2fbf71;font-weight:700">🎉 New best time!</div>':`<div style="opacity:.8">Best: ${hl(i)}</div>`:"",o=document.createElement("div");o.style.cssText=zC,o.innerHTML=`
    <h2 style="margin:0">🏆 Contract complete!</h2>
    <table style="border-collapse:collapse;font-size:15px">${s}</table>
    <div style="font-size:20px;font-weight:800">Total ${hl(n.totalS)}</div>
    ${a}
    ${t.length>0?`<div style="opacity:.85">📔 ${t.length} new passport stamp${t.length>1?"s":""}!</div>`:""}
    <button data-again style="${Qm}">New contract</button>
    <button data-menu style="${Qm};background:#3d6ee8">Menu</button>`,yi.appendChild(o),document.body.appendChild(yi),o.querySelector("[data-again]").addEventListener("click",()=>{e0(),r.onNewContract()}),o.querySelector("[data-menu]").addEventListener("click",()=>{e0(),r.onMenu()})}function e0(){yi==null||yi.remove(),yi=null}const D_="cargoSkies.passport.v1";function L_(){try{return JSON.parse(localStorage.getItem(D_)??"{}")}catch{return{}}}function VC(n){const e=L_(),t=[];for(const i of n)e[i]||t.push(i),e[i]=(e[i]??0)+1;return localStorage.setItem(D_,JSON.stringify(e)),t}const HC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:11";let ii=null;function GC(n,e){ii==null||ii.remove();const t=L_(),i=Object.entries(t).map(([a,o])=>({meta:n[a],count:o})).filter(a=>a.meta!==void 0).sort((a,o)=>a.meta.name.localeCompare(o.meta.name)),r=Object.values(n).filter(a=>a.playable).length;ii=document.createElement("div"),ii.style.cssText=HC;const s=i.map(a=>`<div style="display:flex;gap:8px;align-items:center;padding:4px 8px;background:rgba(255,255,255,.06);border-radius:8px">
          <span style="font-size:22px">${Hh(a.meta.cca2)}</span>
          <span style="flex:1">${a.meta.name}</span>
          <span style="opacity:.6">×${a.count}</span>
        </div>`).join("");ii.innerHTML=`
    <div style="background:#141b3d;padding:28px 32px;border-radius:16px;width:420px;max-height:75vh;display:flex;flex-direction:column;gap:12px">
      <h2 style="margin:0">📔 Passport — ${i.length} / ${r} countries</h2>
      <div style="overflow-y:auto;display:flex;flex-direction:column;gap:6px">${s||"<div style='opacity:.7'>No stamps yet — complete a contract leg to earn your first!</div>"}</div>
      <button data-close style="padding:10px 16px;border:none;border-radius:10px;background:#3d6ee8;color:#fff;font:600 16px system-ui;cursor:pointer">Close</button>
    </div>`,document.body.appendChild(ii),ii.querySelector("[data-close]").addEventListener("click",()=>{ii==null||ii.remove(),ii=null})}const ih=.1,N_=(n,e,t)=>`cargoSkies.trial.v2.${n}.${e}.${t}`,WC=(n,e)=>n.charCodeAt(0)*7919+e*104729>>>0;function t0(n,e,t){try{const i=localStorage.getItem(N_(n,e,t));return i?JSON.parse(i):null}catch{return null}}function $C(n,e,t,i){localStorage.setItem(N_(n,e,t),JSON.stringify(i))}const n0=n=>new X(n.x,n.y,n.z);function XC(n){const e=jl(16777215);e.traverse(i=>{i instanceof Bt&&i.material instanceof ns&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.35)}),e.visible=!1,n.add(e);let t=[];return{start(i){t=i,e.visible=t.length>0},stop(){t=[],e.visible=!1},update(i){if(t.length===0)return;const r=i/ih,s=Math.min(t.length-1,Math.floor(r)),a=t[Math.min(t.length-1,s+1)],o=t[s],c=Math.min(1,r-s),l=o.lat+(a.lat-o.lat)*c,h=(a.lon-o.lon+540)%360-180,f=(o.lon+h*c+540)%360-180,u=o.altKm+(a.altKm-o.altKm)*c,p=n0(Cr(l,f,u)),g=fc(l,f,o.headingDeg,5);e.position.copy(p),e.up.copy(p.clone().normalize()),e.lookAt(n0(Cr(g.lat,g.lon,u)))}}}const qC=34,YC=.004;function KC(){const n=new fi,e=new Vs({color:CA,gradientMap:Ya(),transparent:!0,opacity:.92});for(let t=0;t<qC;t++){const i=new fi,r=3+Math.floor(Math.random()*3);for(let l=0;l<r;l++){const h=1.2+Math.random()*1.6,f=new Bt(new is(h,10,8),e);f.position.set((l-r/2)*1.6,(Math.random()-.5)*.6,(Math.random()-.5)*1.4),f.scale.y=.6,i.add(f)}const s=(Math.random()-.5)*140,a=Math.random()*360-180,o=260+Math.random()*160,c=Cr(s,a,o);i.position.set(c.x,c.y,c.z),i.lookAt(0,0,0),n.add(i)}return{group:n,update(t){n.rotation.y+=YC*t}}}const ZC=12,JC=30,jC=.8,QC=1.2;function e2(n,e){const t=Math.max(0,n),i=ZC+e*jC,r=JC+e*QC;return t<=i?1:t>=r?0:1-(t-i)/(r-i)}const Si=Math.PI/180,Ca=512,dl=96,t2=5,n2=26,i2=.7,r2="#24365e",s2="rgba(255,255,255,0.85)";function a2(n){const e=document.createElement("canvas");e.width=Ca,e.height=dl;const t=e.getContext("2d");if(!t)throw new Error("2d canvas unavailable");let i=56;const r=()=>{t.font=`bold ${i}px 'Trebuchet MS', Verdana, sans-serif`};for(r();t.measureText(n).width>Ca-24&&i>18;)i-=4,r();t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.lineJoin="round",t.strokeStyle=s2,t.strokeText(n,Ca/2,dl/2),t.fillStyle=r2,t.fillText(n,Ca/2,dl/2);const s=new P0(e);return s.anisotropy=4,s}function o2(n,e,t,i){const r=Math.max(1.5,t*Math.cos(n*Si)*(dl/Ca)),s=new is(AA,12,4,(90+e-t/2)*Si,t*Si,(90-n-r/2)*Si,r*Si),a=new Za({map:i,transparent:!0,opacity:0,depthWrite:!1});return new Bt(s,a)}function l2(n){const e=new fi,t=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=Jb(r.geometry),a=Math.min(n2,Math.max(t2,s.widthDeg*i2)),o=o2(s.lat,s.lon,a,a2(r.properties.name));o.visible=!1,e.add(o),t.push({mesh:o,widthDeg:a,direction:new X(Math.cos(s.lat*Si)*Math.sin(s.lon*Si),Math.sin(s.lat*Si),Math.cos(s.lat*Si)*Math.cos(s.lon*Si))})}const i=new X;return{group:e,update(r){i.copy(r.position).normalize();for(const s of t){const a=Math.acos(v0.clamp(i.dot(s.direction),-1,1))/Si,o=e2(a,s.widthDeg);s.mesh.visible=o>.02,s.mesh.material.opacity=o}}}}const ri=1/60,c2=.25,f2=1/20;async function u2(){var Qe;const n=document.getElementById("app");if(!n)throw new Error("#app root missing");const{world:e,countries:t,landmarks:i,riddles:r}=await FA(),s=Kb(e),{scene:a,camera:o,renderer:c}=UA(n),l=NA(e);a.add(l.group);const h=l2(e);a.add(h.group);const f=KC();a.add(f.group);let u=jl();a.add(u);let p=Eh,g=G0;const y=(Ae,Ve=15224125)=>{a.remove(u),u=jl(Ve,Ae),a.add(u),p=Cs[Ae].tuning,_=hm(u,o)},x=zA();let _=hm(u,o);const T=eR(document.body),P=tR(a),M=iR(a),I=fR(a),R=new X(0,.2,-2.2),O=.3,S=uR(document.body),w=pR(document.body),B=FC(l);let N=Qb();const z=Ae=>{N=Ae},L=XC(a);let k=null,A=!1,U=[],F=0,G=0;const Z=()=>{DC(te,()=>{GC(t)})},te=Ae=>{if(LC(),k=Ae,y(Ae.plane),g=Su[Ae.speed].worldSpeedScale,A=Ae.mode==="trial",L.stop(),U=[],F=0,G=0,Ae.mode==="contract")ue.startContract({difficulty:Ae.difficulty,legCount:Ae.legCount});else if(Ae.mode==="trial"){const Ve=WC(Ae.difficulty,Ae.legCount),tt=t0(Ae.difficulty,Ae.legCount,Ae.speed);tt&&L.start(tt.track),ue.startContract({difficulty:Ae.difficulty,legCount:Ae.legCount,seed:Ve})}},ue=OC({countries:t,landmarks:i,riddles:r,banner:w,hints:B,beacon:M,onContractComplete:Ae=>{w.setClock(null);const Ve=VC(Ae.contract.legs.map(qe=>qe.countryId));let tt=null;if(A&&k){const qe=t0(k.difficulty,k.legCount,k.speed);tt=(qe==null?void 0:qe.timeS)??Ae.totalS,(!qe||Ae.totalS<qe.timeS)&&$C(k.difficulty,k.legCount,k.speed,{timeS:Ae.totalS,track:U}),L.stop()}kC(Ae,t,Ve,tt,{onNewContract:()=>{k&&te(k)},onMenu:Z})}}),pe=await new Promise(Ae=>{RC((Ve,tt)=>{AC(Ve,tt).then(Ae).catch(qe=>{console.error("Connection failed",qe);const vt=String((qe==null?void 0:qe.message)??qe),gt=/ECONNREFUSED|failed to connect|WebSocket|network|refused/i.test(vt);alert(gt?"Can't reach the game server. Is it running? (pnpm dev:server)":tt!==null?`No race found with code ${tt.toUpperCase()}. Check the code and try again.`:"Couldn't start a race — see the console for details.")})},()=>Ae(null))});if(pe===null)Jm(),Z();else{history.replaceState(null,"",`/r/${pe.room.state.code||""}`);const Ae=((Qe=pe.room.state.players.get(pe.sessionId))==null?void 0:Qe.colorIdx)??0;u.traverse(tt=>{tt instanceof Bt&&tt.material instanceof Vs&&tt.material.color.getHex()===15224125&&tt.material.color.setHex(Jl[Ae%Jl.length]??15224125)});let Ve=!0;pe.room.onStateChange(tt=>{if(tt.phase==="lobby"&&Ve?CC(tt,pe.sessionId,()=>pe.start()):Ve&&(Jm(),Ve=!1),P.sync(tt,pe.sessionId),S.update(tt,pe.sessionId),(tt.phase==="countdown"||tt.phase==="racing")&&tt.targetCountryId){const vt=t[tt.targetCountryId];vt&&M.showAt(vt.capital.lat,vt.capital.lon)}else M.hide();const qe=tt.players.get(pe.sessionId);qe&&Sl(qe.lat,qe.lon,N.lat,N.lon)>Ab&&z({lat:qe.lat,lon:qe.lon,altKm:qe.altKm,headingDeg:qe.headingDeg,speedKmh:qe.speedKmh})})}let ze=0,at=0,et=0,he=0,be={throttle:0,turn:0,pitch:0};const ve=new vv;c.setAnimationLoop(()=>{var Ve;for(ve.update(),ze+=Math.min(ve.getDelta(),.25);ze>=ri;)be=x.read(ri),N=e1(N,be,ri,p,g),ue.isActive()&&(ue.update(N,ri),A&&(G+=ri,F+=ri,F>=ih&&(F-=ih,U.push({lat:N.lat,lon:N.lon,altKm:N.altKm,headingDeg:N.headingDeg})))),ze-=ri,at+=ri,et+=ri;if(pe&&et>=f2&&(et=0,pe.sendInput(be)),at>=c2){at=0;const tt=s.findCountryAt(N.lat,N.lon);T.setCountry(tt?((Ve=t[tt])==null?void 0:Ve.name)??tt:null)}he+=ri,_.update(N,be),h.update(o),B.update(he),M.update(he),f.update(ri);const Ae=(N.speedKmh-Fa)/(Mh-Fa);I.update(ri,u.localToWorld(R.clone()),Ae>O),L.update(G),pe&&P.update(),T.setTelemetry(N),c.render(a,o)})}u2().catch(n=>{console.error("Failed to start Cargo Skies",n),document.body.textContent="Engine stalled — please refresh."});
