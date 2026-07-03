(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="185",z_=0,Zh=1,k_=2,Qa=1,V_=2,bo=3,Rr=0,kn=1,Mi=2,ir=0,Ds=1,Jh=2,jh=3,Qh=4,H_=5,Vr=100,G_=101,W_=102,$_=103,X_=104,q_=200,Y_=201,K_=202,Z_=203,Cf=204,Pf=205,J_=206,j_=207,Q_=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,If=0,Df=1,Lf=2,Fs=3,Nf=4,Of=5,Uf=6,Ff=7,o0=0,ox=1,ax=2,Vi=0,a0=1,l0=2,c0=3,f0=4,u0=5,h0=6,d0=7,p0=300,Zr=301,Bs=302,Sc=303,Mc=304,rc=306,Bf=1e3,tr=1001,zf=1002,vn=1003,lx=1004,ra=1005,Tn=1006,Ec=1007,Wr=1008,ei=1009,m0=1010,g0=1011,No=1012,ah=1013,Xi=1014,Bi=1015,cr=1016,lh=1017,ch=1018,Oo=1020,_0=35902,x0=35899,v0=1021,y0=1022,wi=1023,fr=1026,$r=1027,fh=1028,uh=1029,Jr=1030,hh=1031,dh=1033,el=33776,tl=33777,nl=33778,il=33779,kf=35840,Vf=35841,Hf=35842,Gf=35843,Wf=36196,$f=37492,Xf=37496,qf=37488,Yf=37489,pl=37490,Kf=37491,Zf=37808,Jf=37809,jf=37810,Qf=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,ou=37818,au=37819,lu=37820,cu=37821,fu=36492,uu=36494,hu=36495,du=36283,pu=36284,ml=36285,mu=36286,cx=3200,gu=0,fx=1,Er="",ai="srgb",gl="srgb-linear",_l="linear",Nt="srgb",os=7680,ed=519,ux=512,hx=513,dx=514,ph=515,px=516,mx=517,mh=518,gx=519,_u=35044,td="300 es",zi=2e3,Uo=2001;function _x(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xx(){const n=xl("canvas");return n.style.display="block",n}const nd={};function vl(...n){const e="THREE."+n.shift();console.log(e,...n)}function S0(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function it(...n){n=S0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=S0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ls(...n){const e=n.join(" ");e in nd||(nd[e]=!0,it(...n))}function vx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const yx={[If]:Df,[Lf]:Uf,[Nf]:Ff,[Fs]:Of,[Df]:If,[Uf]:Lf,[Ff]:Nf,[Of]:Fs};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let id=1234567;const Io=Math.PI/180,Fo=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ut(n,e,t){return Math.max(e,Math.min(t,n))}function gh(n,e){return(n%e+e)%e}function Sx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Mx(n,e,t){return n!==e?(t-n)/(e-n):0}function Do(n,e,t){return(1-t)*n+t*e}function Ex(n,e,t,i){return Do(n,e,1-Math.exp(-t*i))}function bx(n,e=1){return e-Math.abs(gh(n,e*2)-e)}function wx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ax(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Rx(n,e){return n+Math.random()*(e-n)}function Cx(n){return n*(.5-Math.random())}function Px(n){n!==void 0&&(id=n);let e=id+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ix(n){return n*Io}function Dx(n){return n*Fo}function Lx(n){return(n&n-1)===0&&n!==0}function Nx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ox(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ux(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const M0={DEG2RAD:Io,RAD2DEG:Fo,generateUUID:rr,clamp:ut,euclideanModulo:gh,mapLinear:Sx,inverseLerp:Mx,lerp:Do,damp:Ex,pingpong:bx,smoothstep:wx,smootherstep:Tx,randInt:Ax,randFloat:Rx,randFloatSpread:Cx,seededRandom:Px,degToRad:Ix,radToDeg:Dx,isPowerOfTwo:Lx,ceilPowerOfTwo:Nx,floorPowerOfTwo:Ox,setQuaternionFromProperEuler:Ux,normalize:Ot,denormalize:Ei},$h=class $h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;let ft=$h;class Ys{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(f!==y||c!==u||l!==p||h!==g){let x=c*u+l*p+h*g+f*y;x<0&&(u=-u,p=-p,g=-g,y=-y,x=-x);let _=1-a;if(x<.9995){const T=Math.acos(x),P=Math.sin(T);_=Math.sin(_*T)/P,a=Math.sin(a*T)/P,c=c*_+u*a,l=l*_+p*a,h=h*_+g*a,f=f*_+y*a}else{c=c*_+u*a,l=l*_+p*a,h=h*_+g*a,f=f*_+y*a;const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*f+c*p-l*u,e[t+1]=c*g+h*u+l*f-a*p,e[t+2]=l*g+h*p+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),u=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Xh=class Xh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;let X=Xh;const bc=new X,rd=new Ys,qh=class qh{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],y=r[0],x=r[3],_=r[6],T=r[1],P=r[4],M=r[7],I=r[2],R=r[5],N=r[8];return s[0]=o*y+a*T+c*I,s[3]=o*x+a*P+c*R,s[6]=o*_+a*M+c*N,s[1]=l*y+h*T+f*I,s[4]=l*x+h*P+f*R,s[7]=l*_+h*M+f*N,s[2]=u*y+p*T+g*I,s[5]=u*x+p*P+g*R,s[8]=u*_+p*M+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,p=l*s-o*c,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qh.prototype.isMatrix3=!0;let lt=qh;const wc=new lt,sd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){const n={enabled:!0,workingColorSpace:gl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Nt&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(r.r=Ns(r.r),r.g=Ns(r.g),r.b=Ns(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Er?_l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[gl]:{primaries:e,whitePoint:i,transfer:_l,toXYZ:sd,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:sd,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),n}const vt=Fx();function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let as;class Bx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{as===void 0&&(as=xl("canvas")),as.width=e.width,as.height=e.height;const r=as.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=as}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zx=0;class _h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tc(r[o].image)):s.push(Tc(r[o]))}else s=Tc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Tc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let kx=0;const Ac=new X;class An extends ts{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=tr,r=tr,s=Tn,o=Wr,a=wi,c=ei,l=An.DEFAULT_ANISOTROPY,h=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=rr(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bf:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bf:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=p0;An.DEFAULT_ANISOTROPY=1;const Yh=class Yh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],y=c[2],x=c[6],_=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+x)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,M=(p+1)/2,I=(_+1)/2,R=(h+u)/4,N=(f+y)/4,S=(g+x)/4;return P>M&&P>I?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=R/i,s=N/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=S/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=N/s,r=S/s),this.set(i,r,s,t),this}let T=Math.sqrt((x-g)*(x-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(f-y)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;let Ut=Yh;class Vx extends ts{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new An(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _h(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Vx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class E0 extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hx extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ic=class ic{constructor(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y,x)}set(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=u,_[3]=p,_[7]=g,_[11]=y,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,g=a*h,y=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,g=l*h,y=l*f;t[0]=u+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,g=l*h,y=l*f;t[0]=u-y*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,g=a*h,y=a*f;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+y,t[1]=c*f,t[5]=y*l+u,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+g,t[10]=u-y*f}else if(e.order==="XZY"){const u=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+y,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gx,e,Wx)}lookAt(e,t,i){const r=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),gr.crossVectors(i,Yn),gr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),gr.crossVectors(i,Yn)),gr.normalize(),sa.crossVectors(Yn,gr),r[0]=gr.x,r[4]=sa.x,r[8]=Yn.x,r[1]=gr.y,r[5]=sa.y,r[9]=Yn.y,r[2]=gr.z,r[6]=sa.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],y=i[6],x=i[10],_=i[14],T=i[3],P=i[7],M=i[11],I=i[15],R=r[0],N=r[4],S=r[8],w=r[12],z=r[1],O=r[5],B=r[9],L=r[13],V=r[2],A=r[6],U=r[10],F=r[14],G=r[3],Z=r[7],te=r[11],ue=r[15];return s[0]=o*R+a*z+c*V+l*G,s[4]=o*N+a*O+c*A+l*Z,s[8]=o*S+a*B+c*U+l*te,s[12]=o*w+a*L+c*F+l*ue,s[1]=h*R+f*z+u*V+p*G,s[5]=h*N+f*O+u*A+p*Z,s[9]=h*S+f*B+u*U+p*te,s[13]=h*w+f*L+u*F+p*ue,s[2]=g*R+y*z+x*V+_*G,s[6]=g*N+y*O+x*A+_*Z,s[10]=g*S+y*B+x*U+_*te,s[14]=g*w+y*L+x*F+_*ue,s[3]=T*R+P*z+M*V+I*G,s[7]=T*N+P*O+M*A+I*Z,s[11]=T*S+P*B+M*U+I*te,s[15]=T*w+P*L+M*F+I*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],y=e[7],x=e[11],_=e[15],T=c*p-l*u,P=a*p-l*f,M=a*u-c*f,I=o*p-l*h,R=o*u-c*h,N=o*f-a*h;return t*(y*T-x*P+_*M)-i*(g*T-x*I+_*R)+r*(g*P-y*I+_*N)-s*(g*M-y*R+x*N)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],y=e[13],x=e[14],_=e[15],T=t*a-i*o,P=t*c-r*o,M=t*l-s*o,I=i*c-r*a,R=i*l-s*a,N=r*l-s*c,S=h*y-f*g,w=h*x-u*g,z=h*_-p*g,O=f*x-u*y,B=f*_-p*y,L=u*_-p*x,V=T*L-P*B+M*O+I*z-R*w+N*S;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/V;return e[0]=(a*L-c*B+l*O)*A,e[1]=(r*B-i*L-s*O)*A,e[2]=(y*N-x*R+_*I)*A,e[3]=(u*R-f*N-p*I)*A,e[4]=(c*z-o*L-l*w)*A,e[5]=(t*L-r*z+s*w)*A,e[6]=(x*M-g*N-_*P)*A,e[7]=(h*N-u*M+p*P)*A,e[8]=(o*B-a*z+l*S)*A,e[9]=(i*z-t*B-s*S)*A,e[10]=(g*R-y*M+_*T)*A,e[11]=(f*M-h*R-p*T)*A,e[12]=(a*w-o*O-c*S)*A,e[13]=(t*O-i*w+r*S)*A,e[14]=(y*P-g*I-x*T)*A,e[15]=(h*I-f*P+u*T)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,p=s*h,g=s*f,y=o*h,x=o*f,_=a*f,T=c*l,P=c*h,M=c*f,I=i.x,R=i.y,N=i.z;return r[0]=(1-(y+_))*I,r[1]=(p+M)*I,r[2]=(g-P)*I,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+_))*R,r[6]=(x+T)*R,r[7]=0,r[8]=(g+P)*N,r[9]=(x-T)*N,r[10]=(1-(u+y))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=ls.set(r[0],r[1],r[2]).length();const a=ls.set(r[4],r[5],r[6]).length(),c=ls.set(r[8],r[9],r[10]).length();s<0&&(o=-o),gi.copy(this);const l=1/o,h=1/a,f=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=f,gi.elements[9]*=f,gi.elements[10]*=f,t.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=zi,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===zi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Uo)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zi,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===zi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Uo)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ic.prototype.isMatrix4=!0;let qt=ic;const ls=new X,gi=new qt,Gx=new X(0,0,0),Wx=new X(1,1,1),gr=new X,sa=new X,Yn=new X,ad=new qt,ld=new Ys;class jr{constructor(e=0,t=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ad,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $x=0;const cd=new X,cs=new Ys,Ki=new qt,oa=new X,so=new X,Xx=new X,qx=new Ys,fd=new X(1,0,0),ud=new X(0,1,0),hd=new X(0,0,1),dd={type:"added"},Yx={type:"removed"},fs={type:"childadded",child:null},Rc={type:"childremoved",child:null};class dn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new X,t=new jr,i=new Ys,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return cd.copy(e).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(so,oa,this.up):Ki.lookAt(oa,so,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(Ki),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dd),fs.child=e,this.dispatchEvent(fs),fs.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yx),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dd),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,Xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new X(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fi extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kx={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,i),_=this._getHandJoint(l,y);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Pc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let _t=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=gh(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Pc(o,s,e+1/3),this.g=Pc(o,s,e),this.b=Pc(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=ai){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const i=w0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return vt.workingToColorSpace(Mn.copy(this),e),Math.round(ut(Mn.r*255,0,255))*65536+Math.round(ut(Mn.g*255,0,255))*256+Math.round(ut(Mn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ai){vt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,r=Mn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(aa);const i=Do(_r.h,aa.h,t),r=Do(_r.s,aa.s,t),s=Do(_r.l,aa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Mn=new _t;_t.NAMES=w0;class Zx extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _i=new X,Zi=new X,Ic=new X,Ji=new X,us=new X,hs=new X,pd=new X,Dc=new X,Lc=new X,Nc=new X,Oc=new Ut,Uc=new Ut,Fc=new Ut;class ci{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_i.subVectors(e,t),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_i.subVectors(r,t),Zi.subVectors(i,t),Ic.subVectors(e,t);const o=_i.dot(_i),a=_i.dot(Zi),c=_i.dot(Ic),l=Zi.dot(Zi),h=Zi.dot(Ic),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ji.x),c.addScaledVector(o,Ji.y),c.addScaledVector(a,Ji.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Oc.setScalar(0),Uc.setScalar(0),Fc.setScalar(0),Oc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,i),Fc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Oc,s.x),o.addScaledVector(Uc,s.y),o.addScaledVector(Fc,s.z),o}static isFrontFacing(e,t,i,r){return _i.subVectors(i,t),Zi.subVectors(e,t),_i.cross(Zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),hs.subVectors(s,i),Dc.subVectors(e,i);const c=us.dot(Dc),l=hs.dot(Dc);if(c<=0&&l<=0)return t.copy(i);Lc.subVectors(e,r);const h=us.dot(Lc),f=hs.dot(Lc);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(us,o);Nc.subVectors(e,s);const p=us.dot(Nc),g=hs.dot(Nc);if(g>=0&&p<=g)return t.copy(s);const y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(hs,a);const x=h*g-p*f;if(x<=0&&f-h>=0&&p-g>=0)return pd.subVectors(s,r),a=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(pd,a);const _=1/(x+y+u);return o=y*_,a=u*_,t.copy(i).addScaledVector(us,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ir{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),ca.subVectors(this.max,oo),ds.subVectors(e.a,oo),ps.subVectors(e.b,oo),ms.subVectors(e.c,oo),xr.subVectors(ps,ds),vr.subVectors(ms,ps),Lr.subVectors(ds,ms);let t=[0,-xr.z,xr.y,0,-vr.z,vr.y,0,-Lr.z,Lr.y,xr.z,0,-xr.x,vr.z,0,-vr.x,Lr.z,0,-Lr.x,-xr.y,xr.x,0,-vr.y,vr.x,0,-Lr.y,Lr.x,0];return!Bc(t,ds,ps,ms,ca)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,ds,ps,ms,ca))?!1:(fa.crossVectors(xr,vr),t=[fa.x,fa.y,fa.z],Bc(t,ds,ps,ms,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new X,new X,new X,new X,new X,new X,new X,new X],xi=new X,la=new Ir,ds=new X,ps=new X,ms=new X,xr=new X,vr=new X,Lr=new X,oo=new X,ca=new X,fa=new X,Nr=new X;function Bc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Nr.fromArray(n,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),c=e.dot(Nr),l=t.dot(Nr),h=i.dot(Nr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const on=new X,ua=new ft;let Jx=0;class Ai extends ts{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_u,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_u&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T0 extends Ai{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class A0 extends Ai{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Ai{constructor(e,t,i){super(new Float32Array(e),t,i)}}const jx=new Ir,ao=new X,zc=new X;class Zo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(zc)),this.expandByPoint(ao.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qx=0;const ii=new qt,kc=new dn,gs=new X,Kn=new Ir,lo=new Ir,fn=new X;class yn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?A0:T0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,i){return ii.makeTranslation(e,t,i),this.applyMatrix4(ii),this}scale(e,t,i){return ii.makeScale(e,t,i),this.applyMatrix4(ii),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Kn.min,lo.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,lo.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(lo.min),Kn.expandByPoint(lo.max))}Kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(gs.fromBufferAttribute(e,l),fn.add(gs)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ai(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new X,c[S]=new X;const l=new X,h=new X,f=new X,u=new ft,p=new ft,g=new ft,y=new X,x=new X;function _(S,w,z){l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,z),u.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,z),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(O),x.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),a[S].add(y),a[w].add(y),a[z].add(y),c[S].add(x),c[w].add(x),c[z].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,w=T.length;S<w;++S){const z=T[S],O=z.start,B=z.count;for(let L=O,V=O+B;L<V;L+=3)_(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const P=new X,M=new X,I=new X,R=new X;function N(S){I.fromBufferAttribute(r,S),R.copy(I);const w=a[S];P.copy(w),P.sub(I.multiplyScalar(I.dot(w))).normalize(),M.crossVectors(R,w);const O=M.dot(c[S])<0?-1:1;o.setXYZW(S,P.x,P.y,P.z,O)}for(let S=0,w=T.length;S<w;++S){const z=T[S],O=z.start,B=z.count;for(let L=O,V=O+B;L<V;L+=3)N(e.getX(L+0)),N(e.getX(L+1)),N(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ai(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,h=new X,f=new X;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let y=0,x=c.length;y<x;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let _=0;_<h;_++)u[g++]=l[p++]}return new Ai(u,h,f)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class R0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_u,this.updateRanges=[],this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new X;class ki{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){vl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ki(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ev=0;class ns extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ds,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cf&&(i.blendSrc=this.blendSrc),this.blendDst!==Pf&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ed&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class C0 extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const co=new X,xs=new X,vs=new X,ys=new ft,fo=new ft,P0=new qt,ha=new X,uo=new X,da=new X,md=new ft,Vc=new ft,gd=new ft;class tv extends dn{constructor(e=new C0){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new R0(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new ki(i,3,0,!1)),_s.setAttribute("uv",new ki(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ft(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),P0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;pa(ha.set(-.5,-.5,0),vs,o,xs,r,s),pa(uo.set(.5,-.5,0),vs,o,xs,r,s),pa(da.set(.5,.5,0),vs,o,xs,r,s),md.set(0,0),Vc.set(1,0),gd.set(1,1);let a=e.ray.intersectTriangle(ha,uo,da,!1,co);if(a===null&&(pa(uo.set(-.5,.5,0),vs,o,xs,r,s),Vc.set(0,1),a=e.ray.intersectTriangle(ha,da,uo,!1,co),a===null))return;const c=e.ray.origin.distanceTo(co);c<e.near||c>e.far||t.push({distance:c,point:co.clone(),uv:ci.getInterpolation(co,ha,uo,da,md,Vc,gd,new ft),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pa(n,e,t,i,r,s){ys.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(fo.x=s*ys.x-r*ys.y,fo.y=r*ys.x+s*ys.y):fo.copy(ys),n.copy(e),n.x+=fo.x,n.y+=fo.y,n.applyMatrix4(P0)}const Qi=new X,Hc=new X,ma=new X,yr=new X,Gc=new X,ga=new X,Wc=new X;class nv{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Hc.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Hc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=yr.dot(this.direction),c=-yr.dot(ma),l=yr.lengthSq(),h=Math.abs(1-o*o);let f,u,p,g;if(h>0)if(f=o*c-a,u=o*a-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const y=1/h;f*=y,u*=y,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hc).addScaledVector(ma,u),p}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,i,r,s){Gc.subVectors(t,e),ga.subVectors(i,e),Wc.crossVectors(Gc,ga);let o=this.direction.dot(Wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yr.subVectors(this.origin,e);const c=a*this.direction.dot(ga.crossVectors(yr,ga));if(c<0)return null;const l=a*this.direction.dot(Gc.cross(yr));if(l<0||c+l>o)return null;const h=-a*yr.dot(Wc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jo extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _d=new qt,Or=new nv,_a=new Zo,xd=new X,xa=new X,va=new X,ya=new X,$c=new X,Sa=new X,vd=new X,Ma=new X;class zt extends dn{constructor(e=new yn,t=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&($c.fromBufferAttribute(f,e),o?Sa.addScaledVector($c,h):Sa.addScaledVector($c.sub(t),h))}t.add(Sa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(_a.containsPoint(Or.origin)===!1&&(Or.intersectSphere(_a,xd)===null||Or.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(_d.copy(s).invert(),Or.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const x=u[g],_=o[x.materialIndex],T=Math.max(x.start,p.start),P=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let M=T,I=P;M<I;M+=3){const R=a.getX(M),N=a.getX(M+1),S=a.getX(M+2);r=Ea(this,_,e,i,l,h,f,R,N,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){const T=a.getX(x),P=a.getX(x+1),M=a.getX(x+2);r=Ea(this,o,e,i,l,h,f,T,P,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const x=u[g],_=o[x.materialIndex],T=Math.max(x.start,p.start),P=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let M=T,I=P;M<I;M+=3){const R=M,N=M+1,S=M+2;r=Ea(this,_,e,i,l,h,f,R,N,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let x=g,_=y;x<_;x+=3){const T=x,P=x+1,M=x+2;r=Ea(this,o,e,i,l,h,f,T,P,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function iv(n,e,t,i,r,s,o,a){let c;if(e.side===kn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Rr,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:n}}function Ea(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,xa),n.getVertexPosition(c,va),n.getVertexPosition(l,ya);const h=iv(n,e,t,i,xa,va,ya,vd);if(h){const f=new X;ci.getBarycoord(vd,xa,va,ya,f),r&&(h.uv=ci.getInterpolatedAttribute(r,a,c,l,f,new ft)),s&&(h.uv1=ci.getInterpolatedAttribute(s,a,c,l,f,new ft)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,c,l,f,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new X,materialIndex:0};ci.getNormal(xa,va,ya,u.normal),h.face=u,h.barycoord=f}return h}class I0 extends An{constructor(e=null,t=1,i=1,r,s,o,a,c,l=vn,h=vn,f,u){super(null,o,a,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xc=new X,rv=new X,sv=new lt;class zr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Xc.subVectors(i,t).cross(rv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Xc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sv.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Zo,ov=new ft(.5,.5),ba=new X;class xh{constructor(e=new zr,t=new zr,i=new zr,r=new zr,s=new zr,o=new zr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],g=s[8],y=s[9],x=s[10],_=s[11],T=s[12],P=s[13],M=s[14],I=s[15];if(r[0].setComponents(l-o,p-h,_-g,I-T).normalize(),r[1].setComponents(l+o,p+h,_+g,I+T).normalize(),r[2].setComponents(l+a,p+f,_+y,I+P).normalize(),r[3].setComponents(l-a,p-f,_-y,I-P).normalize(),i)r[4].setComponents(c,u,x,M).normalize(),r[5].setComponents(l-c,p-u,_-x,I-M).normalize();else if(r[4].setComponents(l-c,p-u,_-x,I-M).normalize(),t===zi)r[5].setComponents(l+c,p+u,_+x,I+M).normalize();else if(t===Uo)r[5].setComponents(c,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const t=ov.distanceTo(e.center);return Ur.radius=.7071067811865476+t,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D0 extends An{constructor(e=[],t=Zr,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L0 extends An{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zs extends An{constructor(e,t,i=Xi,r,s,o,a=vn,c=vn,l,h=fr,f=1){if(h!==fr&&h!==$r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class av extends zs{constructor(e,t=Xi,i=Zr,r,s,o=vn,a=vn,c,l=fr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class N0 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nr extends yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2));function g(y,x,_,T,P,M,I,R,N,S,w){const z=M/N,O=I/S,B=M/2,L=I/2,V=R/2,A=N+1,U=S+1;let F=0,G=0;const Z=new X;for(let te=0;te<U;te++){const ue=te*O-L;for(let _e=0;_e<A;_e++){const Re=_e*z-B;Z[y]=Re*T,Z[x]=ue*P,Z[_]=V,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[x]=0,Z[_]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(_e/N),f.push(1-te/S),F+=1}}for(let te=0;te<S;te++)for(let ue=0;ue<N;ue++){const _e=u+ue+A*te,Re=u+ue+A*(te+1),st=u+(ue+1)+A*(te+1),et=u+(ue+1)+A*te;c.push(_e,Re,et),c.push(Re,st,et),G+=6}a.addGroup(p,G,w),p+=G,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends yn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,g=i*2+s,y=r+1,x=new X,_=new X;for(let T=0;T<=g;T++){let P=0,M=0,I=0,R=0;if(T<=i){const w=T/i,z=w*Math.PI/2;M=-h-e*Math.cos(z),I=e*Math.sin(z),R=-e*Math.cos(z),P=w*f}else if(T<=i+s){const w=(T-i)/s;M=-h+w*t,I=e,R=0,P=f+w*u}else{const w=(T-i-s)/i,z=w*Math.PI/2;M=h+e*Math.sin(z),I=e*Math.cos(z),R=e*Math.sin(z),P=f+u+w*f}const N=Math.max(0,Math.min(1,P/p));let S=0;T===0?S=.5/r:T===g&&(S=-.5/r);for(let w=0;w<=r;w++){const z=w/r,O=z*Math.PI*2,B=Math.sin(O),L=Math.cos(O);_.x=-I*L,_.y=M,_.z=I*B,a.push(_.x,_.y,_.z),x.set(-I*L,R,I*B),x.normalize(),c.push(x.x,x.y,x.z),l.push(z+S,N)}if(T>0){const w=(T-1)*y;for(let z=0;z<r;z++){const O=w+z,B=w+z+1,L=T*y+z,V=T*y+z+1;o.push(O,B,L),o.push(B,V,L)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class vh extends yn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new X,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sc extends yn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const y=[],x=i/2;let _=0;T(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(p,2));function T(){const M=new X,I=new X;let R=0;const N=(t-e)/i;for(let S=0;S<=s;S++){const w=[],z=S/s,O=z*(t-e)+e;for(let B=0;B<=r;B++){const L=B/r,V=L*c+a,A=Math.sin(V),U=Math.cos(V);I.x=O*A,I.y=-z*i+x,I.z=O*U,f.push(I.x,I.y,I.z),M.set(A,N,U).normalize(),u.push(M.x,M.y,M.z),p.push(L,1-z),w.push(g++)}y.push(w)}for(let S=0;S<r;S++)for(let w=0;w<s;w++){const z=y[w][S],O=y[w+1][S],B=y[w+1][S+1],L=y[w][S+1];(e>0||w!==0)&&(h.push(z,O,L),R+=3),(t>0||w!==s-1)&&(h.push(O,B,L),R+=3)}l.addGroup(_,R,0),_+=R}function P(M){const I=g,R=new ft,N=new X;let S=0;const w=M===!0?e:t,z=M===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,x*z,0),u.push(0,z,0),p.push(.5,.5),g++;const O=g;for(let B=0;B<=r;B++){const V=B/r*c+a,A=Math.cos(V),U=Math.sin(V);N.x=w*U,N.y=x*z,N.z=w*A,f.push(N.x,N.y,N.z),u.push(0,z,0),R.x=A*.5+.5,R.y=U*.5*z+.5,p.push(R.x,R.y),g++}for(let B=0;B<r;B++){const L=I+B,V=O+B;M===!0?h.push(V,V+1,L):h.push(V+1,V,L),S+=3}l.addGroup(_,S,M===!0?1:2),_+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yh extends sc{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new yh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oc extends yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=e/a,u=t/c,p=[],g=[],y=[],x=[];for(let _=0;_<h;_++){const T=_*u-o;for(let P=0;P<l;P++){const M=P*f-s;g.push(M,-T,0),y.push(0,0,1),x.push(P/a),x.push(1-_/c)}}for(let _=0;_<c;_++)for(let T=0;T<a;T++){const P=T+l*_,M=T+l*(_+1),I=T+1+l*(_+1),R=T+1+l*_;p.push(P,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends yn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new X,u=new X,p=[],g=[],y=[],x=[];for(let _=0;_<=i;_++){const T=[],P=_/i,M=o+P*a,I=e*Math.cos(M),R=Math.sqrt(e*e-I*I);let N=0;_===0&&o===0?N=.5/t:_===i&&c===Math.PI&&(N=-.5/t);for(let S=0;S<=t;S++){const w=S/t,z=r+w*s;f.x=-R*Math.cos(z),f.y=I,f.z=R*Math.sin(z),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),x.push(w+N,1-P),T.push(l++)}h.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){const P=h[_][T+1],M=h[_][T],I=h[_+1][T],R=h[_+1][T+1];(_!==0||o>0)&&p.push(P,M,R),(_!==i-1||c<Math.PI)&&p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lv extends yn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new X,s=new X;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,p=f.count;for(let g=u,y=u+p;g<y;g+=3)for(let x=0;x<3;x++){const _=a.getX(g+x),T=a.getX(g+(x+1)%3);r.fromBufferAttribute(o,_),s.fromBufferAttribute(o,T),yd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),yd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new $t(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function yd(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Sd(r))r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Sd(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=ks(n[t]);for(const r in i)e[r]=i[r]}return e}function Sd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function cv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function O0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const Sh={clone:ks,merge:Un};var fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fv,this.fragmentShader=uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=cv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new _t().setHex(r.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new qt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class hv extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends ns{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class dv extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mh extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mv extends Mh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const qc=new qt,Md=new X,Ed=new X;class gv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Md.setFromMatrixPosition(e.matrixWorld),t.position.copy(Md),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Uo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wa=new X,Ta=new Ys,Ii=new X;class U0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wa,Ta,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new X,bd=new ft,wd=new ft;class li extends U0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,bd,wd),t.subVectors(wd,bd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Eh extends U0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _v extends gv{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xv extends Mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new _v}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vv extends Mh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yv extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ss=-90,Ms=1;class Sv extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new li(Ss,Ms,e,t);r.layers=this.layers,this.add(r);const s=new li(Ss,Ms,e,t);s.layers=this.layers,this.add(s);const o=new li(Ss,Ms,e,t);o.layers=this.layers,this.add(o);const a=new li(Ss,Ms,e,t);a.layers=this.layers,this.add(a);const c=new li(Ss,Ms,e,t);c.layers=this.layers,this.add(c);const l=new li(Ss,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mv extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ev{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=bv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function bv(){this._document.hidden===!1&&this.reset()}class xu extends R0{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Kh=class Kh{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Kh.prototype.isMatrix2=!0;let Td=Kh;const Ad=new X,Aa=new X,Es=new X,bs=new X,Yc=new X,wv=new X,Tv=new X;class Av{constructor(e=new X,t=new X){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ad.subVectors(e,this.start),Aa.subVectors(this.end,this.start);const i=Aa.dot(Aa);if(i===0)return 0;let s=Aa.dot(Ad)/i;return t&&(s=ut(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=wv,i=Tv){const r=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;Es.subVectors(l,a),bs.subVectors(h,c),Yc.subVectors(a,c);const f=Es.dot(Es),u=bs.dot(bs),p=bs.dot(Yc);if(f<=r&&u<=r)return t.copy(a),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,o=p/u,o=ut(o,0,1);else{const g=Es.dot(Yc);if(u<=r)o=0,s=ut(-g/f,0,1);else{const y=Es.dot(bs),x=f*u-y*y;x!==0?s=ut((y*p-g*u)/x,0,1):s=0,o=(y*s+p)/u,o<0?(o=0,s=ut(-g/f,0,1)):o>1&&(o=1,s=ut((y-g)/f,0,1))}}return t.copy(a).addScaledVector(Es,s),i.copy(c).addScaledVector(bs,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Rd(n,e,t,i){const r=Rv(i);switch(t){case v0:return n*e;case fh:return n*e/r.components*r.byteLength;case uh:return n*e/r.components*r.byteLength;case Jr:return n*e*2/r.components*r.byteLength;case hh:return n*e*2/r.components*r.byteLength;case y0:return n*e*3/r.components*r.byteLength;case wi:return n*e*4/r.components*r.byteLength;case dh:return n*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vf:case Gf:return Math.max(n,16)*Math.max(e,8)/4;case kf:case Hf:return Math.max(n,8)*Math.max(e,8)/2;case Wf:case $f:case qf:case Yf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xf:case pl:case Kf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case su:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fu:case uu:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case du:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ml:case mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(n){switch(n){case ei:case m0:return{byteLength:1,components:1};case No:case g0:case cr:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case Xi:case ah:case Bi:return{byteLength:4,components:1};case _0:case x0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Cv(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
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
#endif`,Dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
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
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
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
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gv=`#ifdef USE_IRIDESCENCE
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
#endif`,Wv=`#ifdef USE_BUMPMAP
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qv=`#define PI 3.141592653589793
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
} // validated`,ey=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ty=`vec3 transformedNormal = objectNormal;
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
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ly=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,my=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,My=`#ifdef USE_ENVMAP
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
#endif`,Ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
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
#endif`,Ry=`uniform sampler2D dfgLUT;
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
}`,Cy=`
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,By=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ky=`#if defined( USE_POINTS_UV )
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
#endif`,Vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`#ifdef USE_MORPHTARGETS
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
#endif`,qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ky=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qy=`#ifdef USE_NORMALMAP
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
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mS=`float getShadowMask() {
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
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,xS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vS=`#ifdef USE_SKINNING
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
#endif`,yS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IS=`uniform sampler2D t2D;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
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
}`,FS=`#if DEPTH_PACKING == 3200
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
}`,BS=`#define DISTANCE
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
}`,zS=`#define DISTANCE
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`uniform float scale;
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#include <common>
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
}`,$S=`uniform vec3 diffuse;
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define LAMBERT
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
}`,YS=`#define MATCAP
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
}`,KS=`#define MATCAP
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
}`,ZS=`#define NORMAL
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
}`,JS=`#define NORMAL
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
}`,jS=`#define PHONG
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
}`,QS=`#define PHONG
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
}`,eM=`#define STANDARD
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
}`,tM=`#define STANDARD
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
}`,nM=`#define TOON
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
}`,iM=`#define TOON
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
}`,rM=`uniform float size;
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 color;
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
}`,lM=`uniform float rotation;
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
}`,cM=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Pv,alphahash_pars_fragment:Iv,alphamap_fragment:Dv,alphamap_pars_fragment:Lv,alphatest_fragment:Nv,alphatest_pars_fragment:Ov,aomap_fragment:Uv,aomap_pars_fragment:Fv,batching_pars_vertex:Bv,batching_vertex:zv,begin_vertex:kv,beginnormal_vertex:Vv,bsdfs:Hv,iridescence_fragment:Gv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:Xv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:Yv,color_fragment:Kv,color_pars_fragment:Zv,color_pars_vertex:Jv,color_vertex:jv,common:Qv,cube_uv_reflection_fragment:ey,defaultnormal_vertex:ty,displacementmap_pars_vertex:ny,displacementmap_vertex:iy,emissivemap_fragment:ry,emissivemap_pars_fragment:sy,colorspace_fragment:oy,colorspace_pars_fragment:ay,envmap_fragment:ly,envmap_common_pars_fragment:cy,envmap_pars_fragment:fy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:My,envmap_vertex:hy,fog_vertex:dy,fog_pars_vertex:py,fog_fragment:my,fog_pars_fragment:gy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:xy,lights_lambert_fragment:vy,lights_lambert_pars_fragment:yy,lights_pars_begin:Sy,lights_toon_fragment:Ey,lights_toon_pars_fragment:by,lights_phong_fragment:wy,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ay,lights_physical_pars_fragment:Ry,lights_fragment_begin:Cy,lights_fragment_maps:Py,lights_fragment_end:Iy,lightprobes_pars_fragment:Dy,logdepthbuf_fragment:Ly,logdepthbuf_pars_fragment:Ny,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:Uy,map_fragment:Fy,map_pars_fragment:By,map_particle_fragment:zy,map_particle_pars_fragment:ky,metalnessmap_fragment:Vy,metalnessmap_pars_fragment:Hy,morphinstance_vertex:Gy,morphcolor_vertex:Wy,morphnormal_vertex:$y,morphtarget_pars_vertex:Xy,morphtarget_vertex:qy,normal_fragment_begin:Yy,normal_fragment_maps:Ky,normal_pars_fragment:Zy,normal_pars_vertex:Jy,normal_vertex:jy,normalmap_pars_fragment:Qy,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:oS,project_vertex:aS,dithering_fragment:lS,dithering_pars_fragment:cS,roughnessmap_fragment:fS,roughnessmap_pars_fragment:uS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:dS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:_S,skinning_vertex:xS,skinnormal_vertex:vS,specularmap_fragment:yS,specularmap_pars_fragment:SS,tonemapping_fragment:MS,tonemapping_pars_fragment:ES,transmission_fragment:bS,transmission_pars_fragment:wS,uv_pars_fragment:TS,uv_pars_vertex:AS,uv_vertex:RS,worldpos_vertex:CS,background_vert:PS,background_frag:IS,backgroundCube_vert:DS,backgroundCube_frag:LS,cube_vert:NS,cube_frag:OS,depth_vert:US,depth_frag:FS,distance_vert:BS,distance_frag:zS,equirect_vert:kS,equirect_frag:VS,linedashed_vert:HS,linedashed_frag:GS,meshbasic_vert:WS,meshbasic_frag:$S,meshlambert_vert:XS,meshlambert_frag:qS,meshmatcap_vert:YS,meshmatcap_frag:KS,meshnormal_vert:ZS,meshnormal_frag:JS,meshphong_vert:jS,meshphong_frag:QS,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:oM,shadow_frag:aM,sprite_vert:lM,sprite_frag:cM},De={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Wn={basic:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Un([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Un([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Un([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Un([De.common,De.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Un([De.lights,De.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Wn.physical={uniforms:Un([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ra={r:0,b:0,g:0},fM=new qt,B0=new lt;B0.set(-1,0,0,0,1,0,0,0,1);function uM(n,e,t,i,r,s){const o=new _t(0);let a=r===!0?0:1,c,l,h=null,f=0,u=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const M=T.backgroundBlurriness>0;P=e.get(P,M)}return P}function g(T){let P=!1;const M=p(T);M===null?x(o,a):M&&M.isColor&&(x(M,1),P=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,P){const M=p(P);M&&(M.isCubeTexture||M.mapping===rc)?(l===void 0&&(l=new zt(new nr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ks(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(B0),l.material.toneMapped=vt.getTransfer(M.colorSpace)!==Nt,(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new zt(new oc(2,2),new hi({name:"BackgroundMaterial",uniforms:ks(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=vt.getTransfer(M.colorSpace)!==Nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function x(T,P){T.getRGB(Ra,O0(n)),t.buffers.color.setClear(Ra.r,Ra.g,Ra.b,P,s)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,P=1){o.set(T),a=P,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,x(o,a)},render:g,addToRenderList:y,dispose:_}}function hM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(O,B,L,V,A){let U=!1;const F=f(O,V,L,B);s!==F&&(s=F,l(s.object)),U=p(O,V,L,A),U&&g(O,V,L,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,M(O,B,L,V),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function f(O,B,L,V){const A=V.wireframe===!0;let U=i[B.id];U===void 0&&(U={},i[B.id]=U);const F=O.isInstancedMesh===!0?O.id:0;let G=U[F];G===void 0&&(G={},U[F]=G);let Z=G[L.id];Z===void 0&&(Z={},G[L.id]=Z);let te=Z[A];return te===void 0&&(te=u(c()),Z[A]=te),te}function u(O){const B=[],L=[],V=[];for(let A=0;A<t;A++)B[A]=0,L[A]=0,V[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:L,attributeDivisors:V,object:O,attributes:{},index:null}}function p(O,B,L,V){const A=s.attributes,U=B.attributes;let F=0;const G=L.getAttributes();for(const Z in G)if(G[Z].location>=0){const ue=A[Z];let _e=U[Z];if(_e===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(_e=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(_e=O.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;F++}return s.attributesNum!==F||s.index!==V}function g(O,B,L,V){const A={},U=B.attributes;let F=0;const G=L.getAttributes();for(const Z in G)if(G[Z].location>=0){let ue=U[Z];ue===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),A[Z]=_e,F++}s.attributes=A,s.attributesNum=F,s.index=V}function y(){const O=s.newAttributes;for(let B=0,L=O.length;B<L;B++)O[B]=0}function x(O){_(O,0)}function _(O,B){const L=s.newAttributes,V=s.enabledAttributes,A=s.attributeDivisors;L[O]=1,V[O]===0&&(n.enableVertexAttribArray(O),V[O]=1),A[O]!==B&&(n.vertexAttribDivisor(O,B),A[O]=B)}function T(){const O=s.newAttributes,B=s.enabledAttributes;for(let L=0,V=B.length;L<V;L++)B[L]!==O[L]&&(n.disableVertexAttribArray(L),B[L]=0)}function P(O,B,L,V,A,U,F){F===!0?n.vertexAttribIPointer(O,B,L,A,U):n.vertexAttribPointer(O,B,L,V,A,U)}function M(O,B,L,V){y();const A=V.attributes,U=L.getAttributes(),F=B.defaultAttributeValues;for(const G in U){const Z=U[G];if(Z.location>=0){let te=A[G];if(te===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){const ue=te.normalized,_e=te.itemSize,Re=e.get(te);if(Re===void 0)continue;const st=Re.buffer,et=Re.type,he=Re.bytesPerElement,we=et===n.INT||et===n.UNSIGNED_INT||te.gpuType===ah;if(te.isInterleavedBufferAttribute){const xe=te.data,Qe=xe.stride,Ae=te.offset;if(xe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<Z.locationSize;Ve++)_(Z.location+Ve,xe.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ve=0;Ve<Z.locationSize;Ve++)x(Z.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ve=0;Ve<Z.locationSize;Ve++)P(Z.location+Ve,_e/Z.locationSize,et,ue,Qe*he,(Ae+_e/Z.locationSize*Ve)*he,we)}else{if(te.isInstancedBufferAttribute){for(let xe=0;xe<Z.locationSize;xe++)_(Z.location+xe,te.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<Z.locationSize;xe++)x(Z.location+xe);n.bindBuffer(n.ARRAY_BUFFER,st);for(let xe=0;xe<Z.locationSize;xe++)P(Z.location+xe,_e/Z.locationSize,et,ue,_e*he,_e/Z.locationSize*xe*he,we)}}else if(F!==void 0){const ue=F[G];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(Z.location,ue);break;case 3:n.vertexAttrib3fv(Z.location,ue);break;case 4:n.vertexAttrib4fv(Z.location,ue);break;default:n.vertexAttrib1fv(Z.location,ue)}}}}T()}function I(){w();for(const O in i){const B=i[O];for(const L in B){const V=B[L];for(const A in V){const U=V[A];for(const F in U)h(U[F].object),delete U[F];delete V[A]}}delete i[O]}}function R(O){if(i[O.id]===void 0)return;const B=i[O.id];for(const L in B){const V=B[L];for(const A in V){const U=V[A];for(const F in U)h(U[F].object),delete U[F];delete V[A]}}delete i[O.id]}function N(O){for(const B in i){const L=i[B];for(const V in L){const A=L[V];if(A[O.id]===void 0)continue;const U=A[O.id];for(const F in U)h(U[F].object),delete U[F];delete A[O.id]}}}function S(O){for(const B in i){const L=i[B],V=O.isInstancedMesh===!0?O.id:0,A=L[V];if(A!==void 0){for(const U in A){const F=A[U];for(const G in F)h(F[G].object),delete F[G];delete A[U]}delete L[V],Object.keys(L).length===0&&delete i[B]}}}function w(){z(),o=!0,s!==r&&(s=r,l(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function dM(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function pM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==wi&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const S=N===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ei&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Bi&&!S)}function c(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(it("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:M,maxSamples:I,samples:R}}function mM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new zr,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):l();else{const T=s?0:i,P=T*4;let M=_.clippingState||null;c.value=M,M=h(g,u,P,p);for(let I=0;I!==P;++I)M[I]=t[I];_.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const y=f!==null?f.length:0;let x=null;if(y!==0){if(x=c.value,g!==!0||x===null){const _=p+y*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,M=p;P!==y;++P,M+=4)o.copy(f[P]).applyMatrix4(T,a),o.normal.toArray(x,M),x[M+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}const br=4,Cd=[.125,.215,.35,.446,.526,.582],Hr=20,gM=256,ho=new Eh,Pd=new _t;let Kc=null,Zc=0,Jc=0,jc=!1;const _M=new X;class Id{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=_M}=s;Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Jc),this._renderer.xr.enabled=jc,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:cr,format:wi,colorSpace:gl,depthBuffer:!1},r=Dd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xM(s)),this._blurMaterial=yM(s,e,t),this._ggxMaterial=vM(s,e,t)}return r}_compileMaterial(e){const t=new zt(new yn,e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,i,r,s){const c=new li(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Pd),f.toneMapping=Vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new nr,new Jo({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,x=y.material;let _=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,_=!0):(x.color.copy(Pd),_=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[P],s.y,s.z)):M===1?(c.up.set(0,0,l[P]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[P],s.z)):(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[P]));const I=this._cubeSize;ws(r,M*I,P>2?I:0,I,I),f.setRenderTarget(r),_&&f.render(y,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zr||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ho)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,p=f*u,{_lodMax:g}=this,y=this._sizeLods[i],x=3*y*(i>g-br?i-g+br:0),_=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,ws(s,x,_,3*y,2*y),r.setRenderTarget(s),r.render(a,ho),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,ws(e,x,_,3*y,2*y),r.setRenderTarget(e),r.render(a,ho)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),y=s/g,x=isFinite(s)?1+Math.floor(h*y):Hr;x>Hr&&it(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Hr}`);const _=[];let T=0;for(let N=0;N<Hr;++N){const S=N/y,w=Math.exp(-S*S/2);_.push(w),N===0?T+=w:N<x&&(T+=2*w)}for(let N=0;N<_.length;N++)_[N]=_[N]/T;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=_,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:P}=this;u.dTheta.value=g,u.mipInt.value=P-i;const M=this._sizeLods[r],I=3*M*(r>P-br?r-P+br:0),R=4*(this._cubeSize-M);ws(t,I,R,3*M,2*M),c.setRenderTarget(t),c.render(f,ho)}}function xM(n){const e=[],t=[],i=[];let r=n;const s=n-br+1+Cd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-br?c=Cd[o-n+br-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,x=2,_=1,T=new Float32Array(y*g*p),P=new Float32Array(x*g*p),M=new Float32Array(_*g*p);for(let R=0;R<p;R++){const N=R%3*2/3-1,S=R>2?0:-1,w=[N,S,0,N+2/3,S,0,N+2/3,S+1,0,N,S,0,N+2/3,S+1,0,N,S+1,0];T.set(w,y*g*R),P.set(u,x*g*R);const z=[R,R,R,R,R,R];M.set(z,_*g*R)}const I=new yn;I.setAttribute("position",new Ai(T,y)),I.setAttribute("uv",new Ai(P,x)),I.setAttribute("faceIndex",new Ai(M,_)),i.push(new zt(I,null)),r>br&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Dd(n,e,t){const i=new Hi(n,e,t);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vM(n,e,t){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function yM(n,e,t){const i=new Float32Array(Hr),r=new X(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Ld(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Nd(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}class z0 extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new D0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:ir});s.uniforms.tEquirect.value=t;const o=new zt(r,s),a=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Tn),new Sv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function SM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Sc||p===Mc)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new z0(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===Sc||p===Mc,y=p===Zr||p===Bs;if(g||y){let x=t.get(u);const _=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return i===null&&(i=new Id(n)),x=g?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{const T=u.image;return g&&T&&T.height>0||y&&T&&c(T)?(i===null&&(i=new Id(n)),x=g?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function a(u,p){return p===Sc?u.mapping=Zr:p===Mc&&(u.mapping=Bs),u}function c(u){let p=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function MM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ls("WebGLRenderer: "+i+" extension not supported."),r}}}function EM(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const T=p.array;y=p.version;for(let P=0,M=T.length;P<M;P+=3){const I=T[P+0],R=T[P+1],N=T[P+2];u.push(I,R,R,N,N,I)}}else{const T=g.array;y=g.version;for(let P=0,M=T.length/3-1;P<M;P+=3){const I=P+0,R=P+1,N=P+2;u.push(I,R,R,N,N,I)}}const x=new(g.count>=65535?A0:T0)(u,1);x.version=y;const _=s.get(f);_&&e.remove(_),s.set(f,x)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function bM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*o,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let y=0;for(let x=0;x<p;x++)y+=u[x];t.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function wM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TM(n,e,t){const i=new WeakMap,r=new Ut;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let z=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",z)};var p=z;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),x===!0&&(M=3);let I=a.attributes.position.count*M,R=1;I>e.maxTextureSize&&(R=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const N=new Float32Array(I*R*4*f),S=new E0(N,I,R,f);S.type=Bi,S.needsUpdate=!0;const w=M*4;for(let O=0;O<f;O++){const B=_[O],L=T[O],V=P[O],A=I*R*4*O;for(let U=0;U<B.count;U++){const F=U*w;g===!0&&(r.fromBufferAttribute(B,U),N[A+F+0]=r.x,N[A+F+1]=r.y,N[A+F+2]=r.z,N[A+F+3]=0),y===!0&&(r.fromBufferAttribute(L,U),N[A+F+4]=r.x,N[A+F+5]=r.y,N[A+F+6]=r.z,N[A+F+7]=0),x===!0&&(r.fromBufferAttribute(V,U),N[A+F+8]=r.x,N[A+F+9]=r.y,N[A+F+10]=r.z,N[A+F+11]=V.itemSize===4?r.w:1)}}u={count:f,texture:S,size:new ft(I,R)},i.set(a,u),a.addEventListener("dispose",z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<l.length;x++)g+=l[x];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function AM(n,e,t,i,r){let s=new WeakMap;function o(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const RM={[a0]:"LINEAR_TONE_MAPPING",[l0]:"REINHARD_TONE_MAPPING",[c0]:"CINEON_TONE_MAPPING",[f0]:"ACES_FILMIC_TONE_MAPPING",[h0]:"AGX_TONE_MAPPING",[d0]:"NEUTRAL_TONE_MAPPING",[u0]:"CUSTOM_TONE_MAPPING"};function CM(n,e,t,i,r,s){const o=new Hi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new zs(e,t):void 0}),a=new Hi(e,t,{type:cr,depthBuffer:!1,stencilBuffer:!1}),c=new yn;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));const l=new hv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new zt(c,l),f=new Eh(-1,1,1,-1,0,1);let u=null,p=null,g=!1,y,x=null,_=[],T=!1;this.setSize=function(P,M){o.setSize(P,M),a.setSize(P,M);for(let I=0;I<_.length;I++){const R=_[I];R.setSize&&R.setSize(P,M)}},this.setEffects=function(P){_=P,T=_.length>0&&_[0].isRenderPass===!0;const M=o.width,I=o.height;for(let R=0;R<_.length;R++){const N=_[R];N.setSize&&N.setSize(M,I)}},this.begin=function(P,M){if(g||P.toneMapping===Vi&&_.length===0)return!1;if(x=M,M!==null){const I=M.width,R=M.height;(o.width!==I||o.height!==R)&&this.setSize(I,R)}return T===!1&&P.setRenderTarget(o),y=P.toneMapping,P.toneMapping=Vi,!0},this.hasRenderPass=function(){return T},this.end=function(P,M){P.toneMapping=y,g=!0;let I=o,R=a;for(let N=0;N<_.length;N++){const S=_[N];if(S.enabled!==!1&&(S.render(P,R,I,M),S.needsSwap!==!1)){const w=I;I=R,R=w}}if(u!==P.outputColorSpace||p!==P.toneMapping){u=P.outputColorSpace,p=P.toneMapping,l.defines={},vt.getTransfer(u)===Nt&&(l.defines.SRGB_TRANSFER="");const N=RM[p];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(x),P.render(h,f),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const k0=new An,vu=new zs(1,1),V0=new E0,H0=new Hx,G0=new D0,Od=[],Ud=[],Fd=new Float32Array(16),Bd=new Float32Array(9),zd=new Float32Array(4);function Ks(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Od[r];if(s===void 0&&(s=new Float32Array(r),Od[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lc(n,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function NM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;zd.set(i),n.uniformMatrix2fv(this.addr,!1,zd),cn(t,i)}}function OM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Bd.set(i),n.uniformMatrix3fv(this.addr,!1,Bd),cn(t,i)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Fd.set(i),n.uniformMatrix4fv(this.addr,!1,Fd),cn(t,i)}}function FM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function VM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function $M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?mh:ph,s=vu):s=k0,t.setTexture2D(e||s,r)}function XM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||H0,r)}function qM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||G0,r)}function YM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||V0,r)}function KM(n){switch(n){case 5126:return PM;case 35664:return IM;case 35665:return DM;case 35666:return LM;case 35674:return NM;case 35675:return OM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return kM;case 5125:return VM;case 36294:return HM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function ZM(n,e){n.uniform1fv(this.addr,e)}function JM(n,e){const t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function jM(n,e){const t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function QM(n,e){const t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function eE(n,e){const t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tE(n,e){const t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nE(n,e){const t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iE(n,e){n.uniform1iv(this.addr,e)}function rE(n,e){n.uniform2iv(this.addr,e)}function sE(n,e){n.uniform3iv(this.addr,e)}function oE(n,e){n.uniform4iv(this.addr,e)}function aE(n,e){n.uniform1uiv(this.addr,e)}function lE(n,e){n.uniform2uiv(this.addr,e)}function cE(n,e){n.uniform3uiv(this.addr,e)}function fE(n,e){n.uniform4uiv(this.addr,e)}function uE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=vu:o=k0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function hE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||H0,s[o])}function dE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||G0,s[o])}function pE(n,e,t){const i=this.cache,r=e.length,s=lc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||V0,s[o])}function mE(n){switch(n){case 5126:return ZM;case 35664:return JM;case 35665:return jM;case 35666:return QM;case 35674:return eE;case 35675:return tE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return aE;case 36294:return lE;case 36295:return cE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return pE}}class gE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class _E{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mE(t.type)}}class xE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function kd(n,e){n.seq.push(e),n.map[e.id]=e}function vE(n,e,t){const i=n.name,r=i.length;for(Qc.lastIndex=0;;){const s=Qc.exec(i),o=Qc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kd(t,l===void 0?new gE(a,n,e):new _E(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new xE(a),kd(t,f)),t=f}}}class rl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);vE(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yE=37297;let SE=0;function ME(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Hd=new lt;function EE(n){vt._getMatrix(Hd,vt.workingColorSpace,n);const e=`mat3( ${Hd.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case _l:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ME(n.getShaderSource(e),a)}else return s}function bE(n,e){const t=EE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wE={[a0]:"Linear",[l0]:"Reinhard",[c0]:"Cineon",[f0]:"ACESFilmic",[h0]:"AgX",[d0]:"Neutral",[u0]:"Custom"};function TE(n,e){const t=wE[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ca=new X;function AE(){vt.getLuminanceCoefficients(Ca);const n=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function CE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function wo(n){return n!==""}function Wd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $d(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(n){return n.replace(IE,LE)}const DE=new Map;function LE(n,e){let t=mt[e];if(t===void 0){const i=DE.get(e);if(i!==void 0)t=mt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yu(t)}const NE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xd(n){return n.replace(NE,OE)}function OE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const UE={[Qa]:"SHADOWMAP_TYPE_PCF",[bo]:"SHADOWMAP_TYPE_VSM"};function FE(n){return UE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BE={[Zr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function zE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":BE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const kE={[Bs]:"ENVMAP_MODE_REFRACTION"};function VE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HE={[o0]:"ENVMAP_BLENDING_MULTIPLY",[ox]:"ENVMAP_BLENDING_MIX",[ax]:"ENVMAP_BLENDING_ADD"};function GE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":HE[n.combine]||"ENVMAP_BLENDING_NONE"}function WE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $E(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=FE(t),l=zE(t),h=VE(t),f=GE(t),u=WE(t),p=RE(t),g=CE(s),y=r.createProgram();let x,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(x=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?TE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,bE("linearToOutputTexel",t.outputColorSpace),AE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=yu(o),o=Wd(o,t),o=$d(o,t),a=yu(a),a=Wd(a,t),a=$d(a,t),o=Xd(o),a=Xd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=T+x+o,M=T+_+a,I=Vd(r,r.VERTEX_SHADER,P),R=Vd(r,r.FRAGMENT_SHADER,M);r.attachShader(y,I),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function N(O){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(I)||"",V=r.getShaderInfoLog(R)||"",A=B.trim(),U=L.trim(),F=V.trim();let G=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,I,R);else{const te=Gd(r,I,"vertex"),ue=Gd(r,R,"fragment");Mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+A+`
`+te+`
`+ue)}else A!==""?it("WebGLProgram: Program Info Log:",A):(U===""||F==="")&&(Z=!1);Z&&(O.diagnostics={runnable:G,programLog:A,vertexShader:{log:U,prefix:x},fragmentShader:{log:F,prefix:_}})}r.deleteShader(I),r.deleteShader(R),S=new rl(r,y),w=PE(r,y)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(y,yE)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=R,this}let XE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YE(e),t.set(e,i)),i}}class YE{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function KE(n){return n===Jr||n===pl||n===ml}function ZE(n,e,t,i,r,s){const o=new b0,a=new qE,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,w,z,O,B,L){const V=O.fog,A=B.geometry,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=e.get(S.envMap||U,F),Z=G&&G.mapping===rc?G.image.height:null,te=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&it("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ue=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Re=0;A.morphAttributes.position!==void 0&&(Re=1),A.morphAttributes.normal!==void 0&&(Re=2),A.morphAttributes.color!==void 0&&(Re=3);let st,et,he,we;if(te){const He=Wn[te];st=He.vertexShader,et=He.fragmentShader}else{st=S.vertexShader,et=S.fragmentShader;const He=a.getVertexShaderStage(S),Gt=a.getFragmentShaderStage(S);a.update(S,He,Gt),he=He.id,we=Gt.id}const xe=n.getRenderTarget(),Qe=n.state.buffers.depth.getReversed(),Ae=B.isInstancedMesh===!0,Ve=B.isBatchedMesh===!0,at=!!S.map,qe=!!S.matcap,St=!!G,dt=!!S.aoMap,ht=!!S.lightMap,Ft=!!S.bumpMap&&S.wireframe===!1,jt=!!S.normalMap,Yt=!!S.displacementMap,Pt=!!S.emissiveMap,It=!!S.metalnessMap,Kt=!!S.roughnessMap,Y=S.anisotropy>0,pn=S.clearcoat>0,Tt=S.dispersion>0,k=S.iridescence>0,E=S.sheen>0,j=S.transmission>0,se=Y&&!!S.anisotropyMap,ce=pn&&!!S.clearcoatMap,be=pn&&!!S.clearcoatNormalMap,Se=pn&&!!S.clearcoatRoughnessMap,fe=k&&!!S.iridescenceMap,me=k&&!!S.iridescenceThicknessMap,Me=E&&!!S.sheenColorMap,Ye=E&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Ee=!!S.specularColorMap,$e=!!S.specularIntensityMap,tt=j&&!!S.transmissionMap,Ze=j&&!!S.thicknessMap,W=!!S.gradientMap,Te=!!S.alphaMap,le=S.alphaTest>0,Pe=!!S.alphaHash,Ie=!!S.extensions;let ve=Vi;S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ke={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:et,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ve,batchingColor:Ve&&B._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&B.instanceColor!==null,instancingMorph:Ae&&B.morphTexture!==null,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:qe,envMap:St,envMapMode:St&&G.mapping,envMapCubeUVHeight:Z,aoMap:dt,lightMap:ht,bumpMap:Ft,normalMap:jt,displacementMap:Yt,emissiveMap:Pt,normalMapObjectSpace:jt&&S.normalMapType===fx,normalMapTangentSpace:jt&&S.normalMapType===gu,packedNormalMap:jt&&S.normalMapType===gu&&KE(S.normalMap.format),metalnessMap:It,roughnessMap:Kt,anisotropy:Y,anisotropyMap:se,clearcoat:pn,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:Se,dispersion:Tt,iridescence:k,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:Le,specularColorMap:Ee,specularIntensityMap:$e,transmission:j,transmissionMap:tt,thicknessMap:Ze,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ds&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:le,alphaHash:Pe,combine:S.combine,mapUv:at&&g(S.map.channel),aoMapUv:dt&&g(S.aoMap.channel),lightMapUv:ht&&g(S.lightMap.channel),bumpMapUv:Ft&&g(S.bumpMap.channel),normalMapUv:jt&&g(S.normalMap.channel),displacementMapUv:Yt&&g(S.displacementMap.channel),emissiveMapUv:Pt&&g(S.emissiveMap.channel),metalnessMapUv:It&&g(S.metalnessMap.channel),roughnessMapUv:Kt&&g(S.roughnessMap.channel),anisotropyMapUv:se&&g(S.anisotropyMap.channel),clearcoatMapUv:ce&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:Ee&&g(S.specularColorMap.channel),specularIntensityMapUv:$e&&g(S.specularIntensityMap.channel),transmissionMapUv:tt&&g(S.transmissionMap.channel),thicknessMapUv:Ze&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(jt||Y),vertexNormals:!!A.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!A.attributes.uv&&(at||Te),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||A.attributes.normal===void 0&&jt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Qe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===Nt,decodeVideoTextureEmissive:Pt&&S.emissiveMap.isVideoTexture===!0&&vt.getTransfer(S.emissiveMap.colorSpace)===Nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===kn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function x(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)w.push(z),w.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(_(w,S),T(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function T(S,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function P(S){const w=p[S.type];let z;if(w){const O=Wn[w];z=Sh.clone(O.uniforms)}else z=S.uniforms;return z}function M(S,w){let z=h.get(w);return z!==void 0?++z.usedTimes:(z=new $E(n,w,S,r),l.push(z),h.set(w,z)),z}function I(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),h.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function N(){a.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:M,releaseProgram:I,releaseShaderCache:R,programs:l,dispose:N}}function JE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function jE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Yd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,y,x,_){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:x,group:_},n[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=g,T.materialVariant=o(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=x,T.group=_),e++,T}function c(u,p,g,y,x,_){const T=a(u,p,g,y,x,_);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):t.push(T)}function l(u,p,g,y,x,_){const T=a(u,p,g,y,x,_);g.transmission>0?i.unshift(T):g.transparent===!0?r.unshift(T):t.unshift(T)}function h(u,p,g){t.length>1&&t.sort(u||jE),i.length>1&&i.sort(p||Yd),r.length>1&&r.sort(p||Yd),g&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function QE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kd,n.set(i,[o])):r>=s.length?(o=new Kd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new _t};break;case"SpotLight":t={position:new X,direction:new X,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n){const e=new eb,t=tb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new qt,o=new qt;function a(l){let h=0,f=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,x=0,_=0,T=0,P=0,M=0,I=0,R=0,N=0;l.sort(ib);for(let w=0,z=l.length;w<z;w++){const O=l[w],B=O.color,L=O.intensity,V=O.distance;let A=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Jr?A=O.shadow.map.texture:A=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=B.r*L,f+=B.g*L,u+=B.b*L;else if(O.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(O.sh.coefficients[U],L);N++}else if(O.isDirectionalLight){const U=e.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const F=O.shadow,G=t.get(O);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=A,i.directionalShadowMatrix[p]=O.shadow.matrix,T++}i.directional[p]=U,p++}else if(O.isSpotLight){const U=e.get(O);U.position.setFromMatrixPosition(O.matrixWorld),U.color.copy(B).multiplyScalar(L),U.distance=V,U.coneCos=Math.cos(O.angle),U.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),U.decay=O.decay,i.spot[y]=U;const F=O.shadow;if(O.map&&(i.spotLightMap[I]=O.map,I++,F.updateMatrices(O),O.castShadow&&R++),i.spotLightMatrix[y]=F.matrix,O.castShadow){const G=t.get(O);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=A,M++}y++}else if(O.isRectAreaLight){const U=e.get(O);U.color.copy(B).multiplyScalar(L),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),i.rectArea[x]=U,x++}else if(O.isPointLight){const U=e.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),U.distance=O.distance,U.decay=O.decay,O.castShadow){const F=O.shadow,G=t.get(O);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=O.shadow.matrix,P++}i.point[g]=U,g++}else if(O.isHemisphereLight){const U=e.get(O);U.skyColor.copy(O.color).multiplyScalar(L),U.groundColor.copy(O.groundColor).multiplyScalar(L),i.hemi[_]=U,_++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==g||S.spotLength!==y||S.rectAreaLength!==x||S.hemiLength!==_||S.numDirectionalShadows!==T||S.numPointShadows!==P||S.numSpotShadows!==M||S.numSpotMaps!==I||S.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=x,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=M+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=N,S.directionalLength=p,S.pointLength=g,S.spotLength=y,S.rectAreaLength=x,S.hemiLength=_,S.numDirectionalShadows=T,S.numPointShadows=P,S.numSpotShadows=M,S.numSpotMaps=I,S.numLightProbes=N,i.version=nb++)}function c(l,h){let f=0,u=0,p=0,g=0,y=0;const x=h.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){const P=l[_];if(P.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(P.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),p++}else if(P.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(x),o.identity(),s.copy(P.matrixWorld),s.premultiply(x),o.extractRotation(s),M.halfWidth.set(P.width*.5,0,0),M.halfHeight.set(0,P.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(P.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(x),u++}else if(P.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(P.matrixWorld),M.direction.transformDirection(x),y++}}}return{setup:a,setupView:c,state:i}}function Zd(n){const e=new rb(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function sb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Zd(n),e.set(r,[a])):s>=o.length?(a=new Zd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`,lb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],cb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Jd=new qt,po=new X,ef=new X;function fb(n,e,t){let i=new xh;const r=new ft,s=new ft,o=new Ut,a=new dv,c=new pv,l={},h=t.maxTextureSize,f={[Rr]:kn,[kn]:Rr,[Mi]:Mi},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa;let _=this.type;this.render=function(R,N,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===V_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qa);const w=n.getRenderTarget(),z=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ir),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const L=_!==this.type;L&&N.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(A=>A.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,A=R.length;V<A;V++){const U=R[V],F=U.shadow;if(F===void 0){it("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();r.multiply(G),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,F.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===bo){if(U.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hi(r.x,r.y,{format:Jr,type:cr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new zs(r.x,r.y,Bi),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=fr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vn,F.map.depthTexture.magFilter=vn}else U.isPointLight?(F.map=new z0(r.x),F.map.depthTexture=new av(r.x,Xi)):(F.map=new Hi(r.x,r.y),F.map.depthTexture=new zs(r.x,r.y,Xi)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=fr,this.type===Qa?(F.map.depthTexture.compareFunction=Z?mh:ph,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vn,F.map.depthTexture.magFilter=vn);F.camera.updateProjectionMatrix()}const te=F.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<te;ue++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(F.map),n.clear());const _e=F.getViewport(ue);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),B.viewport(o)}if(U.isPointLight){const _e=F.camera,Re=F.matrix,st=U.distance||_e.far;st!==_e.far&&(_e.far=st,_e.updateProjectionMatrix()),po.setFromMatrixPosition(U.matrixWorld),_e.position.copy(po),ef.copy(_e.position),ef.add(lb[ue]),_e.up.copy(cb[ue]),_e.lookAt(ef),_e.updateMatrixWorld(),Re.makeTranslation(-po.x,-po.y,-po.z),Jd.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Jd,_e.coordinateSystem,_e.reversedDepth)}else F.updateMatrices(U);i=F.getFrustum(),M(N,S,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===bo&&T(F,S),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,n.setRenderTarget(w,z,O)};function T(R,N){const S=e.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hi(r.x,r.y,{format:Jr,type:cr})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(N,null,S,u,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(N,null,S,p,y,null)}function P(R,N,S,w){let z=null;const O=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(O!==void 0)z=O;else if(z=S.isPointLight===!0?c:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=z.uuid,L=N.uuid;let V=l[B];V===void 0&&(V={},l[B]=V);let A=V[L];A===void 0&&(A=z.clone(),V[L]=A,N.addEventListener("dispose",I)),z=A}if(z.visible=N.visible,z.wireframe=N.wireframe,w===bo?z.side=N.shadowSide!==null?N.shadowSide:N.side:z.side=N.shadowSide!==null?N.shadowSide:f[N.side],z.alphaMap=N.alphaMap,z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,z.map=N.map,z.clipShadows=N.clipShadows,z.clippingPlanes=N.clippingPlanes,z.clipIntersection=N.clipIntersection,z.displacementMap=N.displacementMap,z.displacementScale=N.displacementScale,z.displacementBias=N.displacementBias,z.wireframeLinewidth=N.wireframeLinewidth,z.linewidth=N.linewidth,S.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const B=n.properties.get(z);B.light=S}return z}function M(R,N,S,w,z){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&z===bo)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const L=e.update(R),V=R.material;if(Array.isArray(V)){const A=L.groups;for(let U=0,F=A.length;U<F;U++){const G=A[U],Z=V[G.materialIndex];if(Z&&Z.visible){const te=P(R,Z,w,z);R.onBeforeShadow(n,R,N,S,L,te,G),n.renderBufferDirect(S,null,L,te,R,G),R.onAfterShadow(n,R,N,S,L,te,G)}}}else if(V.visible){const A=P(R,V,w,z);R.onBeforeShadow(n,R,N,S,L,A,null),n.renderBufferDirect(S,null,L,A,R,null),R.onAfterShadow(n,R,N,S,L,A,null)}}const B=R.children;for(let L=0,V=B.length;L<V;L++)M(B[L],N,S,w,z)}function I(R){R.target.removeEventListener("dispose",I);for(const S in l){const w=l[S],z=R.target.uuid;z in w&&(w[z].dispose(),delete w[z])}}}function ub(n,e){function t(){let W=!1;const Te=new Ut;let le=null;const Pe=new Ut(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!W&&(n.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,ve,Ke,He,Gt){Gt===!0&&(Ie*=He,ve*=He,Ke*=He),Te.set(Ie,ve,Ke,He),Pe.equals(Te)===!1&&(n.clearColor(Ie,ve,Ke,He),Pe.copy(Te))},reset:function(){W=!1,le=null,Pe.set(-1,0,0,0)}}}function i(){let W=!1,Te=!1,le=null,Pe=null,Ie=null;return{setReversed:function(ve){if(Te!==ve){const Ke=e.get("EXT_clip_control");ve?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Te=ve;const He=Ie;Ie=null,this.setClear(He)}},getReversed:function(){return Te},setTest:function(ve){ve?xe(n.DEPTH_TEST):Qe(n.DEPTH_TEST)},setMask:function(ve){le!==ve&&!W&&(n.depthMask(ve),le=ve)},setFunc:function(ve){if(Te&&(ve=yx[ve]),Pe!==ve){switch(ve){case If:n.depthFunc(n.NEVER);break;case Df:n.depthFunc(n.ALWAYS);break;case Lf:n.depthFunc(n.LESS);break;case Fs:n.depthFunc(n.LEQUAL);break;case Nf:n.depthFunc(n.EQUAL);break;case Of:n.depthFunc(n.GEQUAL);break;case Uf:n.depthFunc(n.GREATER);break;case Ff:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Ie!==ve&&(Ie=ve,Te&&(ve=1-ve),n.clearDepth(ve))},reset:function(){W=!1,le=null,Pe=null,Ie=null,Te=!1}}}function r(){let W=!1,Te=null,le=null,Pe=null,Ie=null,ve=null,Ke=null,He=null,Gt=null;return{setTest:function(Dt){W||(Dt?xe(n.STENCIL_TEST):Qe(n.STENCIL_TEST))},setMask:function(Dt){Te!==Dt&&!W&&(n.stencilMask(Dt),Te=Dt)},setFunc:function(Dt,Vn,qn){(le!==Dt||Pe!==Vn||Ie!==qn)&&(n.stencilFunc(Dt,Vn,qn),le=Dt,Pe=Vn,Ie=qn)},setOp:function(Dt,Vn,qn){(ve!==Dt||Ke!==Vn||He!==qn)&&(n.stencilOp(Dt,Vn,qn),ve=Dt,Ke=Vn,He=qn)},setLocked:function(Dt){W=Dt},setClear:function(Dt){Gt!==Dt&&(n.clearStencil(Dt),Gt=Dt)},reset:function(){W=!1,Te=null,le=null,Pe=null,Ie=null,ve=null,Ke=null,He=null,Gt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],y=null,x=!1,_=null,T=null,P=null,M=null,I=null,R=null,N=null,S=new _t(0,0,0),w=0,z=!1,O=null,B=null,L=null,V=null,A=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=G>=2);let te=null,ue={};const _e=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),st=new Ut().fromArray(_e),et=new Ut().fromArray(Re);function he(W,Te,le,Pe){const Ie=new Uint8Array(4),ve=n.createTexture();n.bindTexture(W,ve),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<le;Ke++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return ve}const we={};we[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),o.setFunc(Fs),Ft(!1),jt(Zh),xe(n.CULL_FACE),dt(ir);function xe(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function Qe(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function Ae(W,Te){return u[W]!==Te?(n.bindFramebuffer(W,Te),u[W]=Te,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ve(W,Te){let le=g,Pe=!1;if(W){le=p.get(Te),le===void 0&&(le=[],p.set(Te,le));const Ie=W.textures;if(le.length!==Ie.length||le[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ke=Ie.length;ve<Ke;ve++)le[ve]=n.COLOR_ATTACHMENT0+ve;le.length=Ie.length,Pe=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(le)}function at(W){return y!==W?(n.useProgram(W),y=W,!0):!1}const qe={[Vr]:n.FUNC_ADD,[G_]:n.FUNC_SUBTRACT,[W_]:n.FUNC_REVERSE_SUBTRACT};qe[$_]=n.MIN,qe[X_]=n.MAX;const St={[q_]:n.ZERO,[Y_]:n.ONE,[K_]:n.SRC_COLOR,[Cf]:n.SRC_ALPHA,[tx]:n.SRC_ALPHA_SATURATE,[Q_]:n.DST_COLOR,[J_]:n.DST_ALPHA,[Z_]:n.ONE_MINUS_SRC_COLOR,[Pf]:n.ONE_MINUS_SRC_ALPHA,[ex]:n.ONE_MINUS_DST_COLOR,[j_]:n.ONE_MINUS_DST_ALPHA,[nx]:n.CONSTANT_COLOR,[ix]:n.ONE_MINUS_CONSTANT_COLOR,[rx]:n.CONSTANT_ALPHA,[sx]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(W,Te,le,Pe,Ie,ve,Ke,He,Gt,Dt){if(W===ir){x===!0&&(Qe(n.BLEND),x=!1);return}if(x===!1&&(xe(n.BLEND),x=!0),W!==H_){if(W!==_||Dt!==z){if((T!==Vr||I!==Vr)&&(n.blendEquation(n.FUNC_ADD),T=Vr,I=Vr),Dt)switch(W){case Ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFunc(n.ONE,n.ONE);break;case jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jh:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",W);break}P=null,M=null,R=null,N=null,S.set(0,0,0),w=0,_=W,z=Dt}return}Ie=Ie||Te,ve=ve||le,Ke=Ke||Pe,(Te!==T||Ie!==I)&&(n.blendEquationSeparate(qe[Te],qe[Ie]),T=Te,I=Ie),(le!==P||Pe!==M||ve!==R||Ke!==N)&&(n.blendFuncSeparate(St[le],St[Pe],St[ve],St[Ke]),P=le,M=Pe,R=ve,N=Ke),(He.equals(S)===!1||Gt!==w)&&(n.blendColor(He.r,He.g,He.b,Gt),S.copy(He),w=Gt),_=W,z=!1}function ht(W,Te){W.side===Mi?Qe(n.CULL_FACE):xe(n.CULL_FACE);let le=W.side===kn;Te&&(le=!le),Ft(le),W.blending===Ds&&W.transparent===!1?dt(ir):dt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Pe=W.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Pt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Qe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(W){O!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),O=W)}function jt(W){W!==z_?(xe(n.CULL_FACE),W!==B&&(W===Zh?n.cullFace(n.BACK):W===k_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Qe(n.CULL_FACE),B=W}function Yt(W){W!==L&&(F&&n.lineWidth(W),L=W)}function Pt(W,Te,le){W?(xe(n.POLYGON_OFFSET_FILL),(V!==Te||A!==le)&&(V=Te,A=le,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,le))):Qe(n.POLYGON_OFFSET_FILL)}function It(W){W?xe(n.SCISSOR_TEST):Qe(n.SCISSOR_TEST)}function Kt(W){W===void 0&&(W=n.TEXTURE0+U-1),te!==W&&(n.activeTexture(W),te=W)}function Y(W,Te,le){le===void 0&&(te===null?le=n.TEXTURE0+U-1:le=te);let Pe=ue[le];Pe===void 0&&(Pe={type:void 0,texture:void 0},ue[le]=Pe),(Pe.type!==W||Pe.texture!==Te)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(W,Te||we[W]),Pe.type=W,Pe.texture=Te)}function pn(){const W=ue[te];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function E(){try{n.texSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function j(){try{n.texSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function be(){try{n.texStorage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Se(){try{n.texStorage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function fe(){try{n.texImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function me(){try{n.texImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Me(W){return f[W]!==void 0?f[W]:n.getParameter(W)}function Ye(W,Te){f[W]!==Te&&(n.pixelStorei(W,Te),f[W]=Te)}function Le(W){st.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),st.copy(W))}function Ee(W){et.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),et.copy(W))}function $e(W,Te){let le=l.get(Te);le===void 0&&(le=new WeakMap,l.set(Te,le));let Pe=le.get(W);Pe===void 0&&(Pe=n.getUniformBlockIndex(Te,W.name),le.set(W,Pe))}function tt(W,Te){const Pe=l.get(Te).get(W);c.get(Te)!==Pe&&(n.uniformBlockBinding(Te,Pe,W.__bindingPointIndex),c.set(Te,Pe))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,ue={},u={},p=new WeakMap,g=[],y=null,x=!1,_=null,T=null,P=null,M=null,I=null,R=null,N=null,S=new _t(0,0,0),w=0,z=!1,O=null,B=null,L=null,V=null,A=null,st.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:xe,disable:Qe,bindFramebuffer:Ae,drawBuffers:Ve,useProgram:at,setBlending:dt,setMaterial:ht,setFlipSided:Ft,setCullFace:jt,setLineWidth:Yt,setPolygonOffset:Pt,setScissorTest:It,activeTexture:Kt,bindTexture:Y,unbindTexture:pn,compressedTexImage2D:Tt,compressedTexImage3D:k,texImage2D:fe,texImage3D:me,pixelStorei:Ye,getParameter:Me,updateUBOMapping:$e,uniformBlockBinding:tt,texStorage2D:be,texStorage3D:Se,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:Le,viewport:Ee,reset:Ze}}function hb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,E){return g?new OffscreenCanvas(k,E):xl("canvas")}function x(k,E,j){let se=1;const ce=Tt(k);if((ce.width>j||ce.height>j)&&(se=j/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const be=Math.floor(se*ce.width),Se=Math.floor(se*ce.height);u===void 0&&(u=y(be,Se));const fe=E?y(be,Se):u;return fe.width=be,fe.height=Se,fe.getContext("2d").drawImage(k,0,0,be,Se),it("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+be+"x"+Se+")."),fe}else return"data"in k&&it("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),k;return k}function _(k){return k.generateMipmaps}function T(k){n.generateMipmap(k)}function P(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(k,E,j,se,ce,be=!1){if(k!==null){if(n[k]!==void 0)return n[k];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Se;se&&(Se=e.get("EXT_texture_norm16"),Se||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.R16_EXT),j===n.SHORT&&Se&&(fe=Se.R16_SNORM_EXT)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),E===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RG16_EXT),j===n.SHORT&&Se&&(fe=Se.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGB16_EXT),j===n.SHORT&&Se&&(fe=Se.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),E===n.RGBA){const me=be?_l:vt.getTransfer(ce);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=me===Nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGBA16_EXT),j===n.SHORT&&Se&&(fe=Se.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function I(k,E){let j;return k?E===null||E===Xi||E===Oo?j=n.DEPTH24_STENCIL8:E===Bi?j=n.DEPTH32F_STENCIL8:E===No&&(j=n.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Oo?j=n.DEPTH_COMPONENT24:E===Bi?j=n.DEPTH_COMPONENT32F:E===No&&(j=n.DEPTH_COMPONENT16),j}function R(k,E){return _(k)===!0||k.isFramebufferTexture&&k.minFilter!==vn&&k.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?E.mipmaps.length:1}function N(k){const E=k.target;E.removeEventListener("dispose",N),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function S(k){const E=k.target;E.removeEventListener("dispose",S),O(E)}function w(k){const E=i.get(k);if(E.__webglInit===void 0)return;const j=k.source,se=p.get(j);if(se){const ce=se[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&z(k),Object.keys(se).length===0&&p.delete(j)}i.remove(k)}function z(k){const E=i.get(k);n.deleteTexture(E.__webglTexture);const j=k.source,se=p.get(j);delete se[E.__cacheKey],o.memory.textures--}function O(k){const E=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ce=0;ce<E.__webglFramebuffer[se].length;ce++)n.deleteFramebuffer(E.__webglFramebuffer[se][ce]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=k.textures;for(let se=0,ce=j.length;se<ce;se++){const be=i.get(j[se]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(j[se])}i.remove(k)}let B=0;function L(){B=0}function V(){return B}function A(k){B=k}function U(){const k=B;return k>=r.maxTextures&&it("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),B+=1,k}function F(k){const E=[];return E.push(k.wrapS),E.push(k.wrapT),E.push(k.wrapR||0),E.push(k.magFilter),E.push(k.minFilter),E.push(k.anisotropy),E.push(k.internalFormat),E.push(k.format),E.push(k.type),E.push(k.generateMipmaps),E.push(k.premultiplyAlpha),E.push(k.flipY),E.push(k.unpackAlignment),E.push(k.colorSpace),E.join()}function G(k,E){const j=i.get(k);if(k.isVideoTexture&&Y(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&j.__version!==k.version){const se=k.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(j,k,E);return}}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function Z(k,E){const j=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){Qe(j,k,E);return}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function te(k,E){const j=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){Qe(j,k,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function ue(k,E){const j=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&j.__version!==k.version){Ae(j,k,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const _e={[Bf]:n.REPEAT,[tr]:n.CLAMP_TO_EDGE,[zf]:n.MIRRORED_REPEAT},Re={[vn]:n.NEAREST,[lx]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Ec]:n.LINEAR_MIPMAP_NEAREST,[Wr]:n.LINEAR_MIPMAP_LINEAR},st={[ux]:n.NEVER,[gx]:n.ALWAYS,[hx]:n.LESS,[ph]:n.LEQUAL,[dx]:n.EQUAL,[mh]:n.GEQUAL,[px]:n.GREATER,[mx]:n.NOTEQUAL};function et(k,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===Ec||E.magFilter===ra||E.magFilter===Wr||E.minFilter===Tn||E.minFilter===Ec||E.minFilter===ra||E.minFilter===Wr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,_e[E.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,_e[E.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,_e[E.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Re[E.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Re[E.minFilter]),E.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,st[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==ra&&E.minFilter!==Wr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function he(k,E){let j=!1;k.__webglInit===void 0&&(k.__webglInit=!0,E.addEventListener("dispose",N));const se=E.source;let ce=p.get(se);ce===void 0&&(ce={},p.set(se,ce));const be=F(E);if(be!==k.__cacheKey){ce[be]===void 0&&(ce[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[be].usedTimes++;const Se=ce[k.__cacheKey];Se!==void 0&&(ce[k.__cacheKey].usedTimes--,Se.usedTimes===0&&z(E)),k.__cacheKey=be,k.__webglTexture=ce[be].texture}return j}function we(k,E,j){return Math.floor(Math.floor(k/j)/E)}function xe(k,E,j,se){const be=k.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,se,E.data);else{be.sort((Ye,Le)=>Ye.start-Le.start);let Se=0;for(let Ye=1;Ye<be.length;Ye++){const Le=be[Se],Ee=be[Ye],$e=Le.start+Le.count,tt=we(Ee.start,E.width,4),Ze=we(Le.start,E.width,4);Ee.start<=$e+1&&tt===Ze&&we(Ee.start+Ee.count-1,E.width,4)===tt?Le.count=Math.max(Le.count,Ee.start+Ee.count-Le.start):(++Se,be[Se]=Ee)}be.length=Se+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Ye=0,Le=be.length;Ye<Le;Ye++){const Ee=be[Ye],$e=Math.floor(Ee.start/4),tt=Math.ceil(Ee.count/4),Ze=$e%E.width,W=Math.floor($e/E.width),Te=tt,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,Ze,W,Te,le,j,se,E.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function Qe(k,E,j){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const ce=he(k,E),be=E.source;t.bindTexture(se,k.__webglTexture,n.TEXTURE0+j);const Se=i.get(be);if(be.version!==Se.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const le=vt.getPrimaries(vt.workingColorSpace),Pe=E.colorSpace===Er?null:vt.getPrimaries(E.colorSpace),Ie=E.colorSpace===Er||le===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let me=x(E.image,!1,r.maxTextureSize);me=pn(E,me);const Me=s.convert(E.format,E.colorSpace),Ye=s.convert(E.type);let Le=M(E.internalFormat,Me,Ye,E.normalized,E.colorSpace,E.isVideoTexture);et(se,E);let Ee;const $e=E.mipmaps,tt=E.isVideoTexture!==!0,Ze=Se.__version===void 0||ce===!0,W=be.dataReady,Te=R(E,me);if(E.isDepthTexture)Le=I(E.format===$r,E.type),Ze&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Le,me.width,me.height,0,Me,Ye,null));else if(E.isDataTexture)if($e.length>0){tt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,Le,$e[0].width,$e[0].height);for(let le=0,Pe=$e.length;le<Pe;le++)Ee=$e[le],tt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,le,Le,Ee.width,Ee.height,0,Me,Ye,Ee.data);E.generateMipmaps=!1}else tt?(Ze&&t.texStorage2D(n.TEXTURE_2D,Te,Le,me.width,me.height),W&&xe(E,me,Me,Ye)):t.texImage2D(n.TEXTURE_2D,0,Le,me.width,me.height,0,Me,Ye,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){tt&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Le,$e[0].width,$e[0].height,me.depth);for(let le=0,Pe=$e.length;le<Pe;le++)if(Ee=$e[le],E.format!==wi)if(Me!==null)if(tt){if(W)if(E.layerUpdates.size>0){const Ie=Rd(Ee.width,Ee.height,E.format,E.type);for(const ve of E.layerUpdates){const Ke=Ee.data.subarray(ve*Ie/Ee.data.BYTES_PER_ELEMENT,(ve+1)*Ie/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ve,Ee.width,Ee.height,1,Me,Ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,me.depth,Me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Le,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,me.depth,Me,Ye,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Le,Ee.width,Ee.height,me.depth,0,Me,Ye,Ee.data)}else{tt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,Le,$e[0].width,$e[0].height);for(let le=0,Pe=$e.length;le<Pe;le++)Ee=$e[le],E.format!==wi?Me!==null?tt?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Le,Ee.width,Ee.height,0,Ee.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ye,Ee.data):t.texImage2D(n.TEXTURE_2D,le,Le,Ee.width,Ee.height,0,Me,Ye,Ee.data)}else if(E.isDataArrayTexture)if(tt){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Le,me.width,me.height,me.depth),W)if(E.layerUpdates.size>0){const le=Rd(me.width,me.height,E.format,E.type);for(const Pe of E.layerUpdates){const Ie=me.data.subarray(Pe*le/me.data.BYTES_PER_ELEMENT,(Pe+1)*le/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,me.width,me.height,1,Me,Ye,Ie)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,Ye,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,Me,Ye,me.data);else if(E.isData3DTexture)tt?(Ze&&t.texStorage3D(n.TEXTURE_3D,Te,Le,me.width,me.height,me.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,Ye,me.data)):t.texImage3D(n.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,Me,Ye,me.data);else if(E.isFramebufferTexture){if(Ze)if(tt)t.texStorage2D(n.TEXTURE_2D,Te,Le,me.width,me.height);else{let le=me.width,Pe=me.height;for(let Ie=0;Ie<Te;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,Le,le,Pe,0,Me,Ye,null),le>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),me.parentNode!==le){le.appendChild(me),f.add(E),le.onpaint=Pe=>{const Ie=Pe.changedElements;for(const ve of f)Ie.includes(ve.image)&&(ve.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const Ie=n.RGBA,ve=n.RGBA,Ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ie,ve,Ke,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(tt&&Ze){const le=Tt($e[0]);t.texStorage2D(n.TEXTURE_2D,Te,Le,le.width,le.height)}for(let le=0,Pe=$e.length;le<Pe;le++)Ee=$e[le],tt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,Ye,Ee):t.texImage2D(n.TEXTURE_2D,le,Le,Me,Ye,Ee);E.generateMipmaps=!1}else if(tt){if(Ze){const le=Tt(me);t.texStorage2D(n.TEXTURE_2D,Te,Le,le.width,le.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Ye,me)}else t.texImage2D(n.TEXTURE_2D,0,Le,Me,Ye,me);_(E)&&T(se),Se.__version=be.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function Ae(k,E,j){if(E.image.length!==6)return;const se=he(k,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+j);const be=i.get(ce);if(ce.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+j);const Se=vt.getPrimaries(vt.workingColorSpace),fe=E.colorSpace===Er?null:vt.getPrimaries(E.colorSpace),me=E.colorSpace===Er||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let ve=0;ve<6;ve++)!Me&&!Ye?Le[ve]=x(E.image[ve],!0,r.maxCubemapSize):Le[ve]=Ye?E.image[ve].image:E.image[ve],Le[ve]=pn(E,Le[ve]);const Ee=Le[0],$e=s.convert(E.format,E.colorSpace),tt=s.convert(E.type),Ze=M(E.internalFormat,$e,tt,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Te=be.__version===void 0||se===!0,le=ce.dataReady;let Pe=R(E,Ee);et(n.TEXTURE_CUBE_MAP,E);let Ie;if(Me){W&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ze,Ee.width,Ee.height);for(let ve=0;ve<6;ve++){Ie=Le[ve].mipmaps;for(let Ke=0;Ke<Ie.length;Ke++){const He=Ie[Ke];E.format!==wi?$e!==null?W?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,0,0,He.width,He.height,$e,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,Ze,He.width,He.height,0,He.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,0,0,He.width,He.height,$e,tt,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke,Ze,He.width,He.height,0,$e,tt,He.data)}}}else{if(Ie=E.mipmaps,W&&Te){Ie.length>0&&Pe++;const ve=Tt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ze,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ye){W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Le[ve].width,Le[ve].height,$e,tt,Le[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ze,Le[ve].width,Le[ve].height,0,$e,tt,Le[ve].data);for(let Ke=0;Ke<Ie.length;Ke++){const Gt=Ie[Ke].image[ve].image;W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,0,0,Gt.width,Gt.height,$e,tt,Gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,Ze,Gt.width,Gt.height,0,$e,tt,Gt.data)}}else{W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,$e,tt,Le[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ze,$e,tt,Le[ve]);for(let Ke=0;Ke<Ie.length;Ke++){const He=Ie[Ke];W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,0,0,$e,tt,He.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ke+1,Ze,$e,tt,He.image[ve])}}}_(E)&&T(n.TEXTURE_CUBE_MAP),be.__version=ce.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function Ve(k,E,j,se,ce,be){const Se=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),me=M(j.internalFormat,Se,fe,j.normalized,j.colorSpace),Me=i.get(E),Ye=i.get(j);if(Ye.__renderTarget=E,!Me.__hasExternalTextures){const Le=Math.max(1,E.width>>be),Ee=Math.max(1,E.height>>be);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,be,me,Le,Ee,E.depth,0,Se,fe,null):t.texImage2D(ce,be,me,Le,Ee,0,Se,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Kt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ce,Ye.__webglTexture,0,It(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ce,Ye.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(k,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,k),E.depthBuffer){const se=E.depthTexture,ce=se&&se.isDepthTexture?se.type:null,be=I(E.stencilBuffer,ce),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(E),be,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(E),be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,k)}else{const se=E.textures;for(let ce=0;ce<se.length;ce++){const be=se[ce],Se=s.convert(be.format,be.colorSpace),fe=s.convert(be.type),me=M(be.internalFormat,Se,fe,be.normalized,be.colorSpace);Kt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(E),me,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(k,E,j){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(E.depthTexture);if(ce.__renderTarget=E,(!ce.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),et(n.TEXTURE_CUBE_MAP,E.depthTexture);const Me=s.convert(E.depthTexture.format),Ye=s.convert(E.depthTexture.type);let Le;E.depthTexture.format===fr?Le=n.DEPTH_COMPONENT24:E.depthTexture.format===$r&&(Le=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Le,E.width,E.height,0,Me,Ye,null)}}else G(E.depthTexture,0);const be=ce.__webglTexture,Se=It(E),fe=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,me=E.depthTexture.format===$r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===fr)Kt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,be,0);else if(E.depthTexture.format===$r)Kt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(k){const E=i.get(k),j=k.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==k.depthTexture){const se=k.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=se}if(k.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)qe(E.__webglFramebuffer[se],k,se);else{const se=k.texture.mipmaps;se&&se.length>0?qe(E.__webglFramebuffer[0],k,0):qe(E.__webglFramebuffer,k,0)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=n.createRenderbuffer(),at(E.__webglDepthbuffer[se],k,!1);else{const ce=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,be)}}else{const se=k.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),at(E.__webglDepthbuffer,k,!1);else{const ce=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(k,E,j){const se=i.get(k);E!==void 0&&Ve(se.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&St(k)}function ht(k){const E=k.texture,j=i.get(k),se=i.get(E);k.addEventListener("dispose",S);const ce=k.textures,be=k.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,o.memory.textures++),be){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let me=0;me<E.mipmaps.length;me++)j.__webglFramebuffer[fe][me]=n.createFramebuffer()}else j.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)j.__webglFramebuffer[fe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Se)for(let fe=0,me=ce.length;fe<me;fe++){const Me=i.get(ce[fe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(k.samples>0&&Kt(k)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const me=ce[fe];j.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Me=s.convert(me.format,me.colorSpace),Ye=s.convert(me.type),Le=M(me.internalFormat,Me,Ye,me.normalized,me.colorSpace,k.isXRRenderTarget===!0),Ee=It(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Le,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),at(j.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),et(n.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ve(j.__webglFramebuffer[fe][me],k,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Ve(j.__webglFramebuffer[fe],k,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(E)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,me=ce.length;fe<me;fe++){const Me=ce[fe],Ye=i.get(Me);let Le=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Le=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ye.__webglTexture),et(Le,Me),Ve(j.__webglFramebuffer,k,Me,n.COLOR_ATTACHMENT0+fe,Le,0),_(Me)&&T(Le)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(fe=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),et(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ve(j.__webglFramebuffer[me],k,E,n.COLOR_ATTACHMENT0,fe,me);else Ve(j.__webglFramebuffer,k,E,n.COLOR_ATTACHMENT0,fe,0);_(E)&&T(fe),t.unbindTexture()}k.depthBuffer&&St(k)}function Ft(k){const E=k.textures;for(let j=0,se=E.length;j<se;j++){const ce=E[j];if(_(ce)){const be=P(k),Se=i.get(ce).__webglTexture;t.bindTexture(be,Se),T(be),t.unbindTexture()}}}const jt=[],Yt=[];function Pt(k){if(k.samples>0){if(Kt(k)===!1){const E=k.textures,j=k.width,se=k.height;let ce=n.COLOR_BUFFER_BIT;const be=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(k),fe=E.length>1;if(fe)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const me=k.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(E[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ce,n.NEAREST),c===!0&&(jt.length=0,Yt.length=0,jt.push(n.COLOR_ATTACHMENT0+Me),k.depthBuffer&&k.resolveDepthBuffer===!1&&(jt.push(be),Yt.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const Ye=i.get(E[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&c){const E=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function It(k){return Math.min(r.maxSamples,k.samples)}function Kt(k){const E=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(k){const E=o.render.frame;h.get(k)!==E&&(h.set(k,E),k.update())}function pn(k,E){const j=k.colorSpace,se=k.format,ce=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||j!==gl&&j!==Er&&(vt.getTransfer(j)===Nt?(se!==wi||ce!==ei)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",j)),E}function Tt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.getTextureUnits=V,this.setTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=dt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function db(n,e){function t(i,r=Er){let s;const o=vt.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===x0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===m0)return n.BYTE;if(i===g0)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===ah)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Bi)return n.FLOAT;if(i===cr)return n.HALF_FLOAT;if(i===v0)return n.ALPHA;if(i===y0)return n.RGB;if(i===wi)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===$r)return n.DEPTH_STENCIL;if(i===fh)return n.RED;if(i===uh)return n.RED_INTEGER;if(i===Jr)return n.RG;if(i===hh)return n.RG_INTEGER;if(i===dh)return n.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kf||i===Vf||i===Hf||i===Gf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wf||i===$f||i===Xf||i===qf||i===Yf||i===pl||i===Kf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wf||i===$f)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qf)return s.COMPRESSED_R11_EAC;if(i===Yf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pl)return s.COMPRESSED_RG11_EAC;if(i===Kf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zf||i===Jf||i===jf||i===Qf||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qf)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===iu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ru)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===su)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ou)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===au)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fu||i===uu||i===hu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fu)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===du||i===pu||i===ml||i===mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===du)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new N0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hi({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new oc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _b extends ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",x=new gb,_={},T=t.getContextAttributes();let P=null,M=null;const I=[],R=[],N=new ft;let S=null;const w=new li;w.viewport=new Ut;const z=new li;z.viewport=new Ut;const O=[w,z],B=new Mv;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let we=I[he];return we===void 0&&(we=new Cc,I[he]=we),we.getTargetRaySpace()},this.getControllerGrip=function(he){let we=I[he];return we===void 0&&(we=new Cc,I[he]=we),we.getGripSpace()},this.getHand=function(he){let we=I[he];return we===void 0&&(we=new Cc,I[he]=we),we.getHandSpace()};function A(he){const we=R.indexOf(he.inputSource);if(we===-1)return;const xe=I[we];xe!==void 0&&(xe.update(he.inputSource,he.frame,l||o),xe.dispatchEvent({type:he.type,data:he.inputSource}))}function U(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",F);for(let he=0;he<I.length;he++){const we=R[he];we!==null&&(R[he]=null,I[he].disconnect(we))}L=null,V=null,x.reset();for(const he in _)delete _[he];e.setRenderTarget(P),p=null,u=null,f=null,r=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",U),r.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Qe=null,Ae=null;T.depth&&(Ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?$r:fr,Qe=T.stencil?Oo:Xi);const Ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ve),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Hi(u.textureWidth,u.textureHeight,{format:wi,type:ei,depthTexture:new zs(u.textureWidth,u.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Hi(p.framebufferWidth,p.framebufferHeight,{format:wi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(he){for(let we=0;we<he.removed.length;we++){const xe=he.removed[we],Qe=R.indexOf(xe);Qe>=0&&(R[Qe]=null,I[Qe].disconnect(xe))}for(let we=0;we<he.added.length;we++){const xe=he.added[we];let Qe=R.indexOf(xe);if(Qe===-1){for(let Ve=0;Ve<I.length;Ve++)if(Ve>=R.length){R.push(xe),Qe=Ve;break}else if(R[Ve]===null){R[Ve]=xe,Qe=Ve;break}if(Qe===-1)break}const Ae=I[Qe];Ae&&Ae.connect(xe)}}const G=new X,Z=new X;function te(he,we,xe){G.setFromMatrixPosition(we.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);const Qe=G.distanceTo(Z),Ae=we.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,at=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),St=(Ae[9]+1)/Ae[5],dt=(Ae[9]-1)/Ae[5],ht=(Ae[8]-1)/Ae[0],Ft=(Ve[8]+1)/Ve[0],jt=at*ht,Yt=at*Ft,Pt=Qe/(-ht+Ft),It=Pt*-ht;if(we.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(It),he.translateZ(Pt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),Ae[10]===-1)he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const Kt=at+Pt,Y=qe+Pt,pn=jt-It,Tt=Yt+(Qe-It),k=St*qe/Y*Kt,E=dt*qe/Y*Kt;he.projectionMatrix.makePerspective(pn,Tt,k,E,Kt,Y),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function ue(he,we){we===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(we.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let we=he.near,xe=he.far;x.texture!==null&&(x.depthNear>0&&(we=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),B.near=z.near=w.near=we,B.far=z.far=w.far=xe,(L!==B.near||V!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,V=B.far),B.layers.mask=he.layers.mask|6,w.layers.mask=B.layers.mask&-5,z.layers.mask=B.layers.mask&-3;const Qe=he.parent,Ae=B.cameras;ue(B,Qe);for(let Ve=0;Ve<Ae.length;Ve++)ue(Ae[Ve],Qe);Ae.length===2?te(B,w,z):B.projectionMatrix.copy(w.projectionMatrix),_e(he,B,Qe)};function _e(he,we,xe){xe===null?he.matrix.copy(we.matrixWorld):(he.matrix.copy(xe.matrixWorld),he.matrix.invert(),he.matrix.multiply(we.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Fo*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(he){c=he,u!==null&&(u.fixedFoveation=he),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=he)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(he){return _[he]};let Re=null;function st(he,we){if(h=we.getViewerPose(l||o),g=we,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Qe=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,Qe=!0);for(let qe=0;qe<xe.length;qe++){const St=xe[qe];let dt=null;if(p!==null)dt=p.getViewport(St);else{const Ft=f.getViewSubImage(u,St);dt=Ft.viewport,qe===0&&(e.setRenderTargetTextures(M,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(M))}let ht=O[qe];ht===void 0&&(ht=new li,ht.layers.enable(qe),ht.viewport=new Ut,O[qe]=ht),ht.matrix.fromArray(St.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(St.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(dt.x,dt.y,dt.width,dt.height),qe===0&&(B.matrix.copy(ht.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Qe===!0&&B.cameras.push(ht)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const qe=f.getDepthInformation(xe[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,r.renderState)}if(Ae&&Ae.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<xe.length;qe++){const St=xe[qe].camera;if(St){let dt=_[St];dt||(dt=new N0,_[St]=dt);const ht=f.getCameraImage(St);dt.sourceTexture=ht}}}}for(let xe=0;xe<I.length;xe++){const Qe=R[xe],Ae=I[xe];Qe!==null&&Ae!==void 0&&Ae.update(Qe,we,l||o)}Re&&Re(he,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),g=null}const et=new F0;et.setAnimationLoop(st),this.setAnimationLoop=function(he){Re=he},this.dispose=function(){}}}const xb=new qt,W0=new lt;W0.set(-1,0,0,0,1,0,0,0,1);function vb(n,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function i(x,_){_.color.getRGB(x.fogColor.value,O0(n)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,T,P,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),f(x,_)):_.isMeshPhongMaterial?(s(x,_),h(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),u(x,_),_.isMeshPhysicalMaterial&&p(x,_,M)):_.isMeshMatcapMaterial?(s(x,_),g(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),y(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?c(x,_,T,P):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===kn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===kn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const T=e.get(_),P=T.envMap,M=T.envMapRotation;P&&(x.envMap.value=P,x.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(W0),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function c(x,_,T,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function f(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function u(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function p(x,_,T){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}function y(x,_){const T=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,I){const R=I.program;i.uniformBlockBinding(M,R)}function l(M,I){let R=r[M.id];R===void 0&&(x(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",T));const N=I.program;i.updateUBOMapping(M,N);const S=e.render.frame;s[M.id]!==S&&(u(M),s[M.id]=S)}function h(M){const I=f();M.__bindingPointIndex=I;const R=n.createBuffer(),N=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,N,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,R),R}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const I=r[M.id],R=M.uniforms,N=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let S=0,w=R.length;S<w;S++){const z=R[S];if(Array.isArray(z))for(let O=0,B=z.length;O<B;O++)p(z[O],S,O,N);else p(z,S,0,N)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,I,R,N){if(y(M,I,R,N)===!0){const S=M.__offset,w=M.value;if(Array.isArray(w)){let z=0;for(let O=0;O<w.length;O++){const B=w[O],L=_(B);g(B,M.__data,z),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function g(M,I,R){typeof M=="number"||typeof M=="boolean"?I[0]=M:M.isMatrix3?(I[0]=M.elements[0],I[1]=M.elements[1],I[2]=M.elements[2],I[3]=0,I[4]=M.elements[3],I[5]=M.elements[4],I[6]=M.elements[5],I[7]=0,I[8]=M.elements[6],I[9]=M.elements[7],I[10]=M.elements[8],I[11]=0):ArrayBuffer.isView(M)?I.set(new M.constructor(M.buffer,M.byteOffset,I.length)):M.toArray(I,R)}function y(M,I,R,N){const S=M.value,w=I+"_"+R;if(N[w]===void 0)return typeof S=="number"||typeof S=="boolean"?N[w]=S:ArrayBuffer.isView(S)?N[w]=S.slice():N[w]=S.clone(),!0;{const z=N[w];if(typeof S=="number"||typeof S=="boolean"){if(z!==S)return N[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(z.equals(S)===!1)return z.copy(S),!0}}return!1}function x(M){const I=M.uniforms;let R=0;const N=16;for(let w=0,z=I.length;w<z;w++){const O=Array.isArray(I[w])?I[w]:[I[w]];for(let B=0,L=O.length;B<L;B++){const V=O[B],A=Array.isArray(V.value)?V.value:[V.value];for(let U=0,F=A.length;U<F;U++){const G=A[U],Z=_(G),te=R%N,ue=te%Z.boundary,_e=te+ue;R+=ue,_e!==0&&N-_e<Z.storage&&(R+=N-_e),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=R,R+=Z.storage}}}const S=R%N;return S>0&&(R+=N-S),M.__size=R,M.__cache={},this}function _(M){const I={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(I.boundary=4,I.storage=4):M.isVector2?(I.boundary=8,I.storage=8):M.isVector3||M.isColor?(I.boundary=16,I.storage=12):M.isVector4?(I.boundary=16,I.storage=16):M.isMatrix3?(I.boundary=48,I.storage=48):M.isMatrix4?(I.boundary=64,I.storage=64):M.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(I.boundary=16,I.storage=M.byteLength):it("WebGLRenderer: Unsupported uniform value type.",M),I}function T(M){const I=M.target;I.removeEventListener("dispose",T);const R=o.indexOf(I.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[I.id]),delete r[I.id],delete s[I.id]}function P(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:P}}const Sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function Mb(){return Di===null&&(Di=new I0(Sb,16,16,Jr,cr),Di.name="DFG_LUT",Di.minFilter=Tn,Di.magFilter=Tn,Di.wrapS=tr,Di.wrapT=tr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class Eb{constructor(e={}){const{canvas:t=xx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ei}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,x=new Set([dh,hh,uh]),_=new Set([ei,Xi,No,Oo,lh,ch]),T=new Uint32Array(4),P=new Int32Array(4),M=new X;let I=null,R=null;const N=[],S=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let O=!1,B=null,L=null,V=null,A=null;this._outputColorSpace=ai;let U=0,F=0,G=null,Z=-1,te=null;const ue=new Ut,_e=new Ut;let Re=null;const st=new _t(0);let et=0,he=t.width,we=t.height,xe=1,Qe=null,Ae=null;const Ve=new Ut(0,0,he,we),at=new Ut(0,0,he,we);let qe=!1;const St=new xh;let dt=!1,ht=!1;const Ft=new qt,jt=new X,Yt=new Ut,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Kt(){return G===null?xe:1}let Y=i;function pn(D,q){return t.getContext(D,q)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oh}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),Y===null){const q="webgl2";if(Y=pn(q,D),Y===null)throw pn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(D){throw Mt("WebGLRenderer: "+D.message),D}let Tt,k,E,j,se,ce,be,Se,fe,me,Me,Ye,Le,Ee,$e,tt,Ze,W,Te,le,Pe,Ie,ve;function Ke(){Tt=new MM(Y),Tt.init(),Pe=new db(Y,Tt),k=new pM(Y,Tt,e,Pe),E=new ub(Y,Tt),k.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),L=Y.createFramebuffer(),V=Y.createFramebuffer(),A=Y.createFramebuffer(),j=new wM(Y),se=new JE,ce=new hb(Y,Tt,E,se,k,Pe,j),be=new SM(z),Se=new Cv(Y),Ie=new hM(Y,Se),fe=new EM(Y,Se,j,Ie),me=new AM(Y,fe,Se,Ie,j),W=new TM(Y,k,ce),$e=new mM(se),Me=new ZE(z,be,Tt,k,Ie,$e),Ye=new vb(z,se),Le=new QE,Ee=new sb(Tt),Ze=new uM(z,be,E,me,g,c),tt=new fb(z,me,k),ve=new yb(Y,j,k,E),Te=new dM(Y,Tt,j),le=new bM(Y,Tt,j),j.programs=Me.programs,z.capabilities=k,z.extensions=Tt,z.properties=se,z.renderLists=Le,z.shadowMap=tt,z.state=E,z.info=j}Ke(),y!==ei&&(w=new CM(y,t.width,t.height,a,r,s));const He=new _b(z,Y);this.xr=He,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const D=Tt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Tt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(D){D!==void 0&&(xe=D,this.setSize(he,we,!1))},this.getSize=function(D){return D.set(he,we)},this.setSize=function(D,q,oe=!0){if(He.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}he=D,we=q,t.width=Math.floor(D*xe),t.height=Math.floor(q*xe),oe===!0&&(t.style.width=D+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(he*xe,we*xe).floor()},this.setDrawingBufferSize=function(D,q,oe){he=D,we=q,xe=oe,t.width=Math.floor(D*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(y===ei){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(ue)},this.getViewport=function(D){return D.copy(Ve)},this.setViewport=function(D,q,oe,ne){D.isVector4?Ve.set(D.x,D.y,D.z,D.w):Ve.set(D,q,oe,ne),E.viewport(ue.copy(Ve).multiplyScalar(xe).round())},this.getScissor=function(D){return D.copy(at)},this.setScissor=function(D,q,oe,ne){D.isVector4?at.set(D.x,D.y,D.z,D.w):at.set(D,q,oe,ne),E.scissor(_e.copy(at).multiplyScalar(xe).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(D){E.setScissorTest(qe=D)},this.setOpaqueSort=function(D){Qe=D},this.setTransparentSort=function(D){Ae=D},this.getClearColor=function(D){return D.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,oe=!0){let ne=0;if(D){let re=!1;if(G!==null){const Ne=G.texture.format;re=x.has(Ne)}if(re){const Ne=G.texture.type,ze=_.has(Ne),Oe=Ze.getClearColor(),Xe=Ze.getClearAlpha(),Je=Oe.r,Ge=Oe.g,nt=Oe.b;ze?(T[0]=Je,T[1]=Ge,T[2]=nt,T[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,T)):(P[0]=Je,P[1]=Ge,P[2]=nt,P[3]=Xe,Y.clearBufferiv(Y.COLOR,0,P))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),B=D},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Ze.dispose(),Le.dispose(),Ee.dispose(),se.dispose(),be.dispose(),me.dispose(),Ie.dispose(),ve.dispose(),Me.dispose(),He.dispose(),He.removeEventListener("sessionstart",js),He.removeEventListener("sessionend",Qs),qi.stop()};function Gt(D){D.preventDefault(),vl("WebGLRenderer: Context Lost."),O=!0}function Dt(){vl("WebGLRenderer: Context Restored."),O=!1;const D=j.autoReset,q=tt.enabled,oe=tt.autoUpdate,ne=tt.needsUpdate,re=tt.type;Ke(),j.autoReset=D,tt.enabled=q,tt.autoUpdate=oe,tt.needsUpdate=ne,tt.type=re}function Vn(D){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function qn(D){const q=D.target;q.removeEventListener("dispose",qn),rs(q)}function rs(D){vc(D),se.remove(D)}function vc(D){const q=se.get(D).programs;q!==void 0&&(q.forEach(function(oe){Me.releaseProgram(oe)}),D.isShaderMaterial&&Me.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,oe,ne,re,Ne){q===null&&(q=Pt);const ze=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=mr(D,q,oe,ne,re);E.setMaterial(ne,ze);let Xe=oe.index,Je=1;if(ne.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;Je=2}const Ge=oe.drawRange,nt=oe.attributes.position;let je=Ge.start*Je,Et=(Ge.start+Ge.count)*Je;Ne!==null&&(je=Math.max(je,Ne.start*Je),Et=Math.min(Et,(Ne.start+Ne.count)*Je)),Xe!==null?(je=Math.max(je,0),Et=Math.min(Et,Xe.count)):nt!=null&&(je=Math.max(je,0),Et=Math.min(Et,nt.count));const Xt=Et-je;if(Xt<0||Xt===1/0)return;Ie.setup(re,ne,Oe,oe,Xe);let Wt,Lt=Te;if(Xe!==null&&(Wt=Se.get(Xe),Lt=le,Lt.setIndex(Wt)),re.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Kt()),Lt.setMode(Y.LINES)):Lt.setMode(Y.TRIANGLES);else if(re.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*Kt()),re.isLineSegments?Lt.setMode(Y.LINES):re.isLineLoop?Lt.setMode(Y.LINE_LOOP):Lt.setMode(Y.LINE_STRIP)}else re.isPoints?Lt.setMode(Y.POINTS):re.isSprite&&Lt.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const rn=re._multiDrawStarts,Fe=re._multiDrawCounts,sn=re._multiDrawCount,pt=Xe?Se.get(Xe).bytesPerElement:1,Gn=se.get(ne).currentProgram.getUniforms();for(let ni=0;ni<sn;ni++)Gn.setValue(Y,"_gl_DrawID",ni),Lt.render(rn[ni]/pt,Fe[ni])}else if(re.isInstancedMesh)Lt.renderInstances(je,Xt,re.count);else if(oe.isInstancedBufferGeometry){const rn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Fe=Math.min(oe.instanceCount,rn);Lt.renderInstances(je,Xt,Fe)}else Lt.render(je,Xt)};function Zs(D,q,oe){D.transparent===!0&&D.side===Mi&&D.forceSinglePass===!1?(D.side=kn,D.needsUpdate=!0,Dr(D,q,oe),D.side=Rr,D.needsUpdate=!0,Dr(D,q,oe),D.side=Mi):Dr(D,q,oe)}this.compile=function(D,q,oe=null){oe===null&&(oe=D),R=Ee.get(oe),R.init(q),S.push(R),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(R.pushLight(re),re.castShadow&&R.pushShadow(re))}),D!==oe&&D.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(R.pushLight(re),re.castShadow&&R.pushShadow(re))}),R.setupLights();const ne=new Set;return D.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ne=re.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Oe=Ne[ze];Zs(Oe,oe,re),ne.add(Oe)}else Zs(Ne,oe,re),ne.add(Ne)}),R=S.pop(),ne},this.compileAsync=function(D,q,oe=null){const ne=this.compile(D,q,oe);return new Promise(re=>{function Ne(){if(ne.forEach(function(ze){se.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){re(D);return}setTimeout(Ne,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Js=null;function ss(D){Js&&Js(D)}function js(){qi.stop()}function Qs(){qi.start()}const qi=new F0;qi.setAnimationLoop(ss),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(D){Js=D,He.setAnimationLoop(D),D===null?qi.stop():qi.start()},He.addEventListener("sessionstart",js),He.addEventListener("sessionend",Qs),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(D,q);const oe=He.enabled===!0&&He.isPresenting===!0,ne=w!==null&&(G===null||oe)&&w.begin(z,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(q),q=He.getCamera()),D.isScene===!0&&D.onBeforeRender(z,D,q,G),R=Ee.get(D,S.length),R.init(q),R.state.textureUnits=ce.getTextureUnits(),S.push(R),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),St.setFromProjectionMatrix(Ft,zi,q.reversedDepth),ht=this.localClippingEnabled,dt=$e.init(this.clippingPlanes,ht),I=Le.get(D,N.length),I.init(),N.push(I),He.enabled===!0&&He.isPresenting===!0){const ze=z.xr.getDepthSensingMesh();ze!==null&&Cn(ze,q,-1/0,z.sortObjects)}Cn(D,q,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(Qe,Ae,q.reversedDepth),It=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,It&&Ze.addToRenderList(I,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&$e.beginShadows();const re=R.state.shadowsArray;if(tt.render(re,D,q),dt===!0&&$e.endShadows(),(ne&&w.hasRenderPass())===!1){const ze=I.opaque,Oe=I.transmissive;if(R.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Oe.length>0)for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const nt=Xe[Je];to(ze,Oe,D,nt)}It&&Ze.render(D);for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const nt=Xe[Je];eo(I,D,nt,nt.viewport)}}else Oe.length>0&&to(ze,Oe,D,q),It&&Ze.render(D),eo(I,D,q)}G!==null&&F===0&&(ce.updateMultisampleRenderTarget(G),ce.updateRenderTargetMipmap(G)),ne&&w.end(z),D.isScene===!0&&D.onAfterRender(z,D,q),Ie.resetDefaultState(),Z=-1,te=null,S.pop(),S.length>0?(R=S[S.length-1],ce.setTextureUnits(R.state.textureUnits),dt===!0&&$e.setGlobalState(z.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?I=N[N.length-1]:I=null,B!==null&&B.renderEnd()};function Cn(D,q,oe,ne){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLightProbeGrid)R.pushLightProbeGrid(D);else if(D.isLight)R.pushLight(D),D.castShadow&&R.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||St.intersectsSprite(D)){ne&&Yt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ft);const ze=me.update(D),Oe=D.material;Oe.visible&&I.push(D,ze,Oe,oe,Yt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||St.intersectsObject(D))){const ze=me.update(D),Oe=D.material;if(ne&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Yt.copy(D.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Yt.copy(ze.boundingSphere.center)),Yt.applyMatrix4(D.matrixWorld).applyMatrix4(Ft)),Array.isArray(Oe)){const Xe=ze.groups;for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const nt=Xe[Je],je=Oe[nt.materialIndex];je&&je.visible&&I.push(D,ze,je,oe,Yt.z,nt)}}else Oe.visible&&I.push(D,ze,Oe,oe,Yt.z,null)}}const Ne=D.children;for(let ze=0,Oe=Ne.length;ze<Oe;ze++)Cn(Ne[ze],q,oe,ne)}function eo(D,q,oe,ne){const{opaque:re,transmissive:Ne,transparent:ze}=D;R.setupLightsView(oe),dt===!0&&$e.setGlobalState(z.clippingPlanes,oe),ne&&E.viewport(ue.copy(ne)),re.length>0&&Hn(re,q,oe),Ne.length>0&&Hn(Ne,q,oe),ze.length>0&&Hn(ze,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function to(D,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ne.id]===void 0){const je=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:je?cr:ei,minFilter:Wr,samples:Math.max(4,k.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ne=R.state.transmissionRenderTarget[ne.id],ze=ne.viewport||ue;Ne.setSize(ze.z*z.transmissionResolutionScale,ze.w*z.transmissionResolutionScale);const Oe=z.getRenderTarget(),Xe=z.getActiveCubeFace(),Je=z.getActiveMipmapLevel();z.setRenderTarget(Ne),z.getClearColor(st),et=z.getClearAlpha(),et<1&&z.setClearColor(16777215,.5),z.clear(),It&&Ze.render(oe);const Ge=z.toneMapping;z.toneMapping=Vi;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),R.setupLightsView(ne),dt===!0&&$e.setGlobalState(z.clippingPlanes,ne),Hn(D,oe,ne),ce.updateMultisampleRenderTarget(Ne),ce.updateRenderTargetMipmap(Ne),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Et=0,Xt=q.length;Et<Xt;Et++){const Wt=q[Et],{object:Lt,geometry:rn,material:Fe,group:sn}=Wt;if(Fe.side===Mi&&Lt.layers.test(ne.layers)){const pt=Fe.side;Fe.side=kn,Fe.needsUpdate=!0,no(Lt,oe,ne,rn,Fe,sn),Fe.side=pt,Fe.needsUpdate=!0,je=!0}}je===!0&&(ce.updateMultisampleRenderTarget(Ne),ce.updateRenderTargetMipmap(Ne))}z.setRenderTarget(Oe,Xe,Je),z.setClearColor(st,et),nt!==void 0&&(ne.viewport=nt),z.toneMapping=Ge}function Hn(D,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Ne=D.length;re<Ne;re++){const ze=D[re],{object:Oe,geometry:Xe,group:Je}=ze;let Ge=ze.material;Ge.allowOverride===!0&&ne!==null&&(Ge=ne),Oe.layers.test(oe.layers)&&no(Oe,q,oe,Xe,Ge,Je)}}function no(D,q,oe,ne,re,Ne){D.onBeforeRender(z,q,oe,ne,re,Ne),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),re.onBeforeRender(z,q,oe,ne,D,Ne),re.transparent===!0&&re.side===Mi&&re.forceSinglePass===!1?(re.side=kn,re.needsUpdate=!0,z.renderBufferDirect(oe,q,ne,re,D,Ne),re.side=Rr,re.needsUpdate=!0,z.renderBufferDirect(oe,q,ne,re,D,Ne),re.side=Mi):z.renderBufferDirect(oe,q,ne,re,D,Ne),D.onAfterRender(z,q,oe,ne,re,Ne)}function Dr(D,q,oe){q.isScene!==!0&&(q=Pt);const ne=se.get(D),re=R.state.lights,Ne=R.state.shadowsArray,ze=re.state.version,Oe=Me.getParameters(D,re.state,Ne,q,oe,R.state.lightProbeGridArray),Xe=Me.getProgramCacheKey(Oe);let Je=ne.programs;ne.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const Ge=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;ne.envMap=be.get(D.envMap||ne.environment,Ge),ne.envMapRotation=ne.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,Je===void 0&&(D.addEventListener("dispose",qn),Je=new Map,ne.programs=Je);let nt=Je.get(Xe);if(nt!==void 0){if(ne.currentProgram===nt&&ne.lightsStateVersion===ze)return io(D,Oe),nt}else Oe.uniforms=Me.getUniforms(D),B!==null&&D.isNodeMaterial&&B.build(D,oe,Oe),D.onBeforeCompile(Oe,z),nt=Me.acquireProgram(Oe,Xe),Je.set(Xe,nt),ne.uniforms=Oe.uniforms;const je=ne.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(je.clippingPlanes=$e.uniform),io(D,Oe),ne.needsLights=yc(D),ne.lightsStateVersion=ze,ne.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotLightMatrix.value=re.state.spotLightMatrix,je.spotLightMap.value=re.state.spotLightMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.lightProbeGrid=R.state.lightProbeGridArray.length>0,ne.currentProgram=nt,ne.uniformsList=null,nt}function Yi(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=rl.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function io(D,q){const oe=se.get(D);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ia(D,q){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;M.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ne=D.length;oe<ne;oe++){const re=D[oe];if(re.texture!==null&&re.boundingBox.containsPoint(M))return re}return null}function mr(D,q,oe,ne,re){q.isScene!==!0&&(q=Pt),ce.resetTextureUnits();const Ne=q.fog,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Oe=G===null?z.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=be.get(ne.envMap||ze,Xe),Ge=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!oe.morphAttributes.position,Et=!!oe.morphAttributes.normal,Xt=!!oe.morphAttributes.color;let Wt=Vi;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Wt=z.toneMapping);const Lt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,rn=Lt!==void 0?Lt.length:0,Fe=se.get(ne),sn=R.state.lights;if(dt===!0&&(ht===!0||D!==te)){const bt=D===te&&ne.id===Z;$e.setState(ne,D,bt)}let pt=!1;ne.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==sn.state.version||Fe.outputColorSpace!==Oe||re.isBatchedMesh&&Fe.batching===!1||!re.isBatchedMesh&&Fe.batching===!0||re.isBatchedMesh&&Fe.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Fe.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Fe.instancing===!1||!re.isInstancedMesh&&Fe.instancing===!0||re.isSkinnedMesh&&Fe.skinning===!1||!re.isSkinnedMesh&&Fe.skinning===!0||re.isInstancedMesh&&Fe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Fe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Fe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Fe.instancingMorph===!1&&re.morphTexture!==null||Fe.envMap!==Je||ne.fog===!0&&Fe.fog!==Ne||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==$e.numPlanes||Fe.numIntersection!==$e.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==nt||Fe.morphTargets!==je||Fe.morphNormals!==Et||Fe.morphColors!==Xt||Fe.toneMapping!==Wt||Fe.morphTargetsCount!==rn||!!Fe.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Fe.__version=ne.version);let Gn=Fe.currentProgram;pt===!0&&(Gn=Dr(ne,q,re),B&&ne.isNodeMaterial&&B.onUpdateProgram(ne,Gn,Fe));let ni=!1,Ci=!1,mn=!1;const gt=Gn.getUniforms(),At=Fe.uniforms;if(E.useProgram(Gn.program)&&(ni=!0,Ci=!0,mn=!0),ne.id!==Z&&(Z=ne.id,Ci=!0),Fe.needsLights){const bt=ia(R.state.lightProbeGridArray,re);Fe.lightProbeGrid!==bt&&(Fe.lightProbeGrid=bt,Ci=!0)}if(ni||te!==D){E.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),gt.setValue(Y,"projectionMatrix",D.projectionMatrix),gt.setValue(Y,"viewMatrix",D.matrixWorldInverse);const In=gt.map.cameraPosition;In!==void 0&&In.setValue(Y,jt.setFromMatrixPosition(D.matrixWorld)),k.logarithmicDepthBuffer&&gt.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&gt.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),te!==D&&(te=D,Ci=!0,mn=!0)}if(Fe.needsLights&&(sn.state.directionalShadowMap.length>0&&gt.setValue(Y,"directionalShadowMap",sn.state.directionalShadowMap,ce),sn.state.spotShadowMap.length>0&&gt.setValue(Y,"spotShadowMap",sn.state.spotShadowMap,ce),sn.state.pointShadowMap.length>0&&gt.setValue(Y,"pointShadowMap",sn.state.pointShadowMap,ce)),re.isSkinnedMesh){gt.setOptional(Y,re,"bindMatrix"),gt.setOptional(Y,re,"bindMatrixInverse");const bt=re.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),gt.setValue(Y,"boneTexture",bt.boneTexture,ce))}re.isBatchedMesh&&(gt.setOptional(Y,re,"batchingTexture"),gt.setValue(Y,"batchingTexture",re._matricesTexture,ce),gt.setOptional(Y,re,"batchingIdTexture"),gt.setValue(Y,"batchingIdTexture",re._indirectTexture,ce),gt.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&gt.setValue(Y,"batchingColorTexture",re._colorsTexture,ce));const Pn=oe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&W.update(re,oe,Gn),(Ci||Fe.receiveShadow!==re.receiveShadow)&&(Fe.receiveShadow=re.receiveShadow,gt.setValue(Y,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(At.envMapIntensity.value=q.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=Mb()),Ci){if(gt.setValue(Y,"toneMappingExposure",z.toneMappingExposure),Fe.needsLights&&pi(At,mn),Ne&&ne.fog===!0&&Ye.refreshFogUniforms(At,Ne),Ye.refreshMaterialUniforms(At,ne,xe,we,R.state.transmissionRenderTarget[D.id]),Fe.needsLights&&Fe.lightProbeGrid){const bt=Fe.lightProbeGrid;At.probesSH.value=bt.texture,At.probesMin.value.copy(bt.boundingBox.min),At.probesMax.value.copy(bt.boundingBox.max),At.probesResolution.value.copy(bt.resolution)}rl.upload(Y,Yi(Fe),At,ce)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(rl.upload(Y,Yi(Fe),At,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&gt.setValue(Y,"center",re.center),gt.setValue(Y,"modelViewMatrix",re.modelViewMatrix),gt.setValue(Y,"normalMatrix",re.normalMatrix),gt.setValue(Y,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const bt=ne.uniformsGroups;for(let In=0,mi=bt.length;In<mi;In++){const C=bt[In];ve.update(C,Gn),ve.bind(C,Gn)}}return Gn}function pi(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function yc(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,q,oe){const ne=se.get(D);ne.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(D.texture).__webglTexture=q,se.get(D.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const oe=se.get(D);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,oe=0){G=D,U=q,F=oe;let ne=null,re=!1,Ne=!1;if(D){const Oe=se.get(D);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),ue.copy(D.viewport),_e.copy(D.scissor),Re=D.scissorTest,E.viewport(ue),E.scissor(_e),E.setScissorTest(Re),Z=-1;return}else if(Oe.__webglFramebuffer===void 0)ce.setupRenderTarget(D);else if(Oe.__hasExternalTextures)ce.rebindTextures(D,se.get(D.texture).__webglTexture,se.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ge=D.depthTexture;if(Oe.__boundDepthTexture!==Ge){if(Ge!==null&&se.has(Ge)&&(D.width!==Ge.image.width||D.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(D)}}const Xe=D.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ne=!0);const Je=se.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ne=Je[q][oe]:ne=Je[q],re=!0):D.samples>0&&ce.useMultisampledRTT(D)===!1?ne=se.get(D).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[oe]:ne=Je,ue.copy(D.viewport),_e.copy(D.scissor),Re=D.scissorTest}else ue.copy(Ve).multiplyScalar(xe).floor(),_e.copy(at).multiplyScalar(xe).floor(),Re=qe;if(oe!==0&&(ne=L),E.bindFramebuffer(Y.FRAMEBUFFER,ne)&&E.drawBuffers(D,ne),E.viewport(ue),E.scissor(_e),E.setScissorTest(Re),re){const Oe=se.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ne){const Oe=q;for(let Xe=0;Xe<D.textures.length;Xe++){const Je=se.get(D.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,oe,Oe)}}else if(D!==null&&oe!==0){const Oe=se.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,oe)}Z=-1},this.readRenderTargetPixels=function(D,q,oe,ne,re,Ne,ze,Oe=0){if(!(D&&D.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const Je=D.textures[Oe],Ge=Je.format,nt=Je.type;if(D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!k.textureFormatReadable(Ge)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(nt)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ne&&oe>=0&&oe<=D.height-re&&Y.readPixels(q,oe,ne,re,Pe.convert(Ge),Pe.convert(nt),Ne)}finally{const Je=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(D,q,oe,ne,re,Ne,ze,Oe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe)if(q>=0&&q<=D.width-ne&&oe>=0&&oe<=D.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);const Je=D.textures[Oe],Ge=Je.format,nt=Je.type;if(D.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!k.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ne.byteLength,Y.STREAM_READ),Y.readPixels(q,oe,ne,re,Pe.convert(Ge),Pe.convert(nt),0);const Et=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Et);const Xt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await vx(Y,Xt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ne),Y.deleteBuffer(je),Y.deleteSync(Xt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,oe=0){const ne=Math.pow(2,-oe),re=Math.floor(D.image.width*ne),Ne=Math.floor(D.image.height*ne),ze=q!==null?q.x:0,Oe=q!==null?q.y:0;ce.setTexture2D(D,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,ze,Oe,re,Ne),E.unbindTexture()},this.copyTextureToTexture=function(D,q,oe=null,ne=null,re=0,Ne=0){let ze,Oe,Xe,Je,Ge,nt,je,Et,Xt;const Wt=D.isCompressedTexture?D.mipmaps[Ne]:D.image;if(oe!==null)ze=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,Ge=oe.min.y,nt=oe.isBox3?oe.min.z:0;else{const At=Math.pow(2,-re);ze=Math.floor(Wt.width*At),Oe=Math.floor(Wt.height*At),D.isDataArrayTexture?Xe=Wt.depth:D.isData3DTexture?Xe=Math.floor(Wt.depth*At):Xe=1,Je=0,Ge=0,nt=0}ne!==null?(je=ne.x,Et=ne.y,Xt=ne.z):(je=0,Et=0,Xt=0);const Lt=Pe.convert(q.format),rn=Pe.convert(q.type);let Fe;q.isData3DTexture?(ce.setTexture3D(q,0),Fe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),Fe=Y.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),Fe=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const sn=E.getParameter(Y.UNPACK_ROW_LENGTH),pt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ni=E.getParameter(Y.UNPACK_SKIP_ROWS),Ci=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Wt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Wt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,nt);const mn=D.isDataArrayTexture||D.isData3DTexture,gt=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const At=se.get(D),Pn=se.get(q),bt=se.get(At.__renderTarget),In=se.get(Pn.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,bt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let mi=0;mi<Xe;mi++)mn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(D).__webglTexture,re,nt+mi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(q).__webglTexture,Ne,Xt+mi)),Y.blitFramebuffer(Je,Ge,ze,Oe,je,Et,ze,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||D.isRenderTargetTexture||se.has(D)){const At=se.get(D),Pn=se.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,V),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,A);for(let bt=0;bt<Xe;bt++)mn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,At.__webglTexture,re,nt+bt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,At.__webglTexture,re),gt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pn.__webglTexture,Ne,Xt+bt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pn.__webglTexture,Ne),re!==0?Y.blitFramebuffer(Je,Ge,ze,Oe,je,Et,ze,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):gt?Y.copyTexSubImage3D(Fe,Ne,je,Et,Xt+bt,Je,Ge,ze,Oe):Y.copyTexSubImage2D(Fe,Ne,je,Et,Je,Ge,ze,Oe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else gt?D.isDataTexture||D.isData3DTexture?Y.texSubImage3D(Fe,Ne,je,Et,Xt,ze,Oe,Xe,Lt,rn,Wt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Fe,Ne,je,Et,Xt,ze,Oe,Xe,Lt,Wt.data):Y.texSubImage3D(Fe,Ne,je,Et,Xt,ze,Oe,Xe,Lt,rn,Wt):D.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ne,je,Et,ze,Oe,Lt,rn,Wt.data):D.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ne,je,Et,Wt.width,Wt.height,Lt,Wt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ne,je,Et,ze,Oe,Lt,rn,Wt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,sn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ni),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ci),Ne===0&&q.generateMipmaps&&Y.generateMipmap(Fe),E.unbindTexture()},this.initRenderTarget=function(D){se.get(D).__webglFramebuffer===void 0&&ce.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ce.setTextureCube(D,0):D.isData3DTexture?ce.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ce.setTexture2DArray(D,0):ce.setTexture2D(D,0),E.unbindTexture()},this.resetState=function(){U=0,F=0,G=null,E.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const Su=100,$0=6371,X0=1800,Mu={relaxed:{name:"Relaxed",worldSpeedScale:1200},normal:{name:"Normal",worldSpeedScale:1800},fast:{name:"Fast",worldSpeedScale:2700}},Bo=400,bh=1600,bb=400,wb=45,Tb=40,Ab=60,Rb=500,Cb=3,Pb=1.5,Ib=4,jd="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Qd=20,Db=1,Lb=6,Nb=120,Ob=700,wh=2,Ub={kids:{continent:10,compass:20,outline:35},normal:{continent:15,compass:30,outline:45},expert:{continent:20,compass:-1,outline:40}};function Fb(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function Bb(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!ep(n[0])||!ep(n[1]))throw new Error("coordinates must contain numbers");return Fb({type:"Point",coordinates:n},e,t)}function ep(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function q0(n,e,t){if(n!==null)for(var i,r,s,o,a,c,l,h=0,f=0,u,p=n.type,g=p==="FeatureCollection",y=p==="Feature",x=g?n.features.length:1,_=0;_<x;_++){l=g?n.features[_].geometry:y?n.geometry:n,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1;for(var T=0;T<a;T++){var P=0,M=0;if(o=u?l.geometries[T]:l,o!==null){c=o.coordinates;var I=o.type;switch(h=0,I){case null:break;case"Point":if(e(c,f,_,P,M)===!1)return!1;f++,P++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],f,_,P,M)===!1)return!1;f++,I==="MultiPoint"&&P++}I==="LineString"&&P++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-h;r++){if(e(c[i][r],f,_,P,M)===!1)return!1;f++}I==="MultiLineString"&&P++,I==="Polygon"&&M++}I==="Polygon"&&P++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(M=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-h;s++){if(e(c[i][r][s],f,_,P,M)===!1)return!1;f++}M++}P++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(q0(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function zb(n,e={}){if(n.bbox!=null&&e.recompute!==!0)return n.bbox;const t=[1/0,1/0,-1/0,-1/0];return q0(n,i=>{t[0]>i[0]&&(t[0]=i[0]),t[1]>i[1]&&(t[1]=i[1]),t[2]<i[0]&&(t[2]=i[0]),t[3]<i[1]&&(t[3]=i[1])}),t}var kb=zb;const or=11102230246251565e-32,En=134217729,Vb=(3+8*or)*or;function tf(n,e,t,i,r){let s,o,a,c,l=e[0],h=i[0],f=0,u=0;h>l==h>-l?(s=l,l=e[++f]):(s=h,h=i[++u]);let p=0;if(f<n&&u<t)for(h>l==h>-l?(o=l+s,a=s-(o-l),l=e[++f]):(o=h+s,a=s-(o-h),h=i[++u]),s=o,a!==0&&(r[p++]=a);f<n&&u<t;)h>l==h>-l?(o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f]):(o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u]),s=o,a!==0&&(r[p++]=a);for(;f<n;)o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f],s=o,a!==0&&(r[p++]=a);for(;u<t;)o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u],s=o,a!==0&&(r[p++]=a);return(s!==0||p===0)&&(r[p++]=s),p}function Hb(n,e){let t=e[0];for(let i=1;i<n;i++)t+=e[i];return t}function jo(n){return new Float64Array(n)}const Gb=(3+16*or)*or,Wb=(2+12*or)*or,$b=(9+64*or)*or*or,Ts=jo(4),tp=jo(8),np=jo(12),ip=jo(16),Nn=jo(4);function Xb(n,e,t,i,r,s,o){let a,c,l,h,f,u,p,g,y,x,_,T,P,M,I,R,N,S;const w=n-r,z=t-r,O=e-s,B=i-s;M=w*B,u=En*w,p=u-(u-w),g=w-p,u=En*B,y=u-(u-B),x=B-y,I=g*x-(M-p*y-g*y-p*x),R=O*z,u=En*O,p=u-(u-O),g=O-p,u=En*z,y=u-(u-z),x=z-y,N=g*x-(R-p*y-g*y-p*x),_=I-N,f=I-_,Ts[0]=I-(_+f)+(f-N),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Ts[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Ts[2]=T-(S-f)+(_-f),Ts[3]=S;let L=Hb(4,Ts),V=Wb*o;if(L>=V||-L>=V||(f=n-w,a=n-(w+f)+(f-r),f=t-z,l=t-(z+f)+(f-r),f=e-O,c=e-(O+f)+(f-s),f=i-B,h=i-(B+f)+(f-s),a===0&&c===0&&l===0&&h===0)||(V=$b*o+Vb*Math.abs(L),L+=w*h+B*a-(O*l+z*c),L>=V||-L>=V))return L;M=a*B,u=En*a,p=u-(u-a),g=a-p,u=En*B,y=u-(u-B),x=B-y,I=g*x-(M-p*y-g*y-p*x),R=c*z,u=En*c,p=u-(u-c),g=c-p,u=En*z,y=u-(u-z),x=z-y,N=g*x-(R-p*y-g*y-p*x),_=I-N,f=I-_,Nn[0]=I-(_+f)+(f-N),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Nn[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Nn[2]=T-(S-f)+(_-f),Nn[3]=S;const A=tf(4,Ts,4,Nn,tp);M=w*h,u=En*w,p=u-(u-w),g=w-p,u=En*h,y=u-(u-h),x=h-y,I=g*x-(M-p*y-g*y-p*x),R=O*l,u=En*O,p=u-(u-O),g=O-p,u=En*l,y=u-(u-l),x=l-y,N=g*x-(R-p*y-g*y-p*x),_=I-N,f=I-_,Nn[0]=I-(_+f)+(f-N),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Nn[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Nn[2]=T-(S-f)+(_-f),Nn[3]=S;const U=tf(A,tp,4,Nn,np);M=a*h,u=En*a,p=u-(u-a),g=a-p,u=En*h,y=u-(u-h),x=h-y,I=g*x-(M-p*y-g*y-p*x),R=c*l,u=En*c,p=u-(u-c),g=c-p,u=En*l,y=u-(u-l),x=l-y,N=g*x-(R-p*y-g*y-p*x),_=I-N,f=I-_,Nn[0]=I-(_+f)+(f-N),T=M+_,f=T-M,P=M-(T-f)+(_-f),_=P-R,f=P-_,Nn[1]=P-(_+f)+(f-R),S=T+_,f=S-T,Nn[2]=T-(S-f)+(_-f),Nn[3]=S;const F=tf(U,np,4,Nn,ip);return ip[F-1]}function To(n,e,t,i,r,s){const o=(e-s)*(t-r),a=(n-r)*(i-s),c=o-a,l=Math.abs(o+a);return Math.abs(c)>=Gb*l?c:-Xb(n,e,t,i,r,s,l)}function qb(n,e){var t,i,r=0,s,o,a,c,l,h,f,u=n[0],p=n[1],g=e.length;for(t=0;t<g;t++){i=0;var y=e[t],x=y.length-1;if(h=y[0],h[0]!==y[x][0]&&h[1]!==y[x][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-u,a=h[1]-p,i;i<x;i++){if(f=y[i+1],c=f[0]-u,l=f[1]-p,a===0&&l===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(l>=0&&a<=0||l<=0&&a>=0){if(s=To(o,c,a,l,0,0),s===0)return 0;(s>0&&l>0&&a<=0||s<0&&l<=0&&a>0)&&r++}h=f,a=l,o=c}}return r%2!==0}function Yb(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return[...n.geometry.coordinates];if(n.type==="Point")return[...n.coordinates]}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return[...n];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Kb(n){return n.type==="Feature"?n.geometry:n}function Zb(n,e,t={}){if(!n)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=Yb(n),r=Kb(e),s=r.type,o=e.bbox;let a=r.coordinates;if(o&&Jb(i,o)===!1)return!1;s==="Polygon"&&(a=[a]);let c=!1;for(var l=0;l<a.length;++l){const h=qb(i,a[l]);if(h===0)return!t.ignoreBoundary;h&&(c=!0)}return c}function Jb(n,e){return e[0]<=n[0]&&e[1]<=n[1]&&e[2]>=n[0]&&e[3]>=n[1]}var Y0=Zb;function jb(n){const e=n.features.map(t=>({id:t.properties.id,box:kb(t),feature:t}));return{findCountryAt(t,i){const r=Bb([i,t]);for(const{id:s,box:o,feature:a}of e)if(!(i<o[0]||i>o[2]||t<o[1]||t>o[3])&&Y0(r,a))return s;return null}}}function Qb(n){let e=0,t=0;for(let r=0;r<n.length-1;r++){const s=n[r],o=n[r+1];e+=s[0]*o[1]-o[0]*s[1],t+=s[1]}const i=t/Math.max(1,n.length-1);return Math.abs(e)*Math.cos(i*Math.PI/180)}function e1(n){const e=n.type==="Polygon"?[n.coordinates]:n.coordinates;let t=null,i=-1;for(const c of e){const l=c[0];if(!l)continue;const h=Qb(l);h>i&&(i=h,t=l)}if(!t)throw new Error("geometry has no rings");let r=1/0,s=-1/0,o=1/0,a=-1/0;for(const c of t)r=Math.min(r,c[0]),s=Math.max(s,c[0]),o=Math.min(o,c[1]),a=Math.max(a,c[1]);return{lat:(o+a)/2,lon:(r+s)/2,widthDeg:s-r}}const Gr=Math.PI/180;function t1(n){return(n+540)%360-180}function fc(n,e,t,i){const r=i/$0,s=t*Gr,o=n*Gr,a=e*Gr,c=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),l=Math.asin(c),h=a+Math.atan2(Math.sin(s)*Math.sin(r)*Math.cos(o),Math.cos(r)-Math.sin(o)*c);return{lat:l/Gr,lon:t1(h/Gr)}}function Cr(n,e,t){const i=Su*(1+t/$0),r=n*Gr,s=e*Gr;return{x:i*Math.cos(r)*Math.sin(s),y:i*Math.sin(r),z:i*Math.cos(r)*Math.cos(s)}}const mo=(n,e,t)=>Math.min(t,Math.max(e,n)),Th={speedScale:1,turnScale:1,climbScale:1},Cs={seaplane:{name:"Seaplane",blurb:"Balanced all-rounder",emoji:"🛩️",tuning:Th},stunt:{name:"Stunt Plane",blurb:"Nippy turns, lower top speed",emoji:"🎪",tuning:{speedScale:.9,turnScale:1.3,climbScale:1.15}},jet:{name:"Jet",blurb:"Fast in a straight line, wide turns",emoji:"🚀",tuning:{speedScale:1.2,turnScale:.75,climbScale:1}},lifter:{name:"Cargo Lifter",blurb:"Steady climber, a little sluggish",emoji:"📦",tuning:{speedScale:.95,turnScale:.9,climbScale:1.25}}};function n1(){return{lat:48.8566,lon:2.3522,altKm:200,headingDeg:270,speedKmh:800}}function i1(n,e,t,i=Th,r=X0){const s=mo(e.throttle,-1,1),o=mo(e.turn,-1,1),a=mo(e.pitch,-1,1),c=mo(n.speedKmh+s*bb*t,Bo,bh*i.speedScale),l=(n.headingDeg+o*wb*i.turnScale*t+360)%360,h=mo(n.altKm+a*Tb*i.climbScale*t,Ab,Rb),f=c/3600*r*t,u=fc(n.lat,n.lon,l,f);return{lat:u.lat,lon:u.lon,altKm:h,headingDeg:l,speedKmh:c}}const wr=Math.PI/180;function Sl(n,e,t,i){const r=n*wr,s=t*wr,o=(i-e)*wr;return Math.acos(Math.min(1,Math.max(-1,Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(o))))/wr}function r1(n,e,t){const i=(e-n+540)%360-180;return(n+i*t+360)%360}function K0(n,e,t,i){const r=n*wr,s=t*wr,o=(i-e)*wr,a=Math.sin(o)*Math.cos(s),c=Math.cos(r)*Math.sin(s)-Math.sin(r)*Math.cos(s)*Math.cos(o);return(Math.atan2(a,c)/wr+360)%360}function s1(n=Math.random){let e="";for(let t=0;t<Ib;t++){const i=Math.floor(n()*jd.length);e+=jd[i]??"A"}return e}function Eu(n,e){const t=Ub[e],i=r=>r>=0&&n>=r;return{continent:i(t.continent),compass:i(t.compass),outline:i(t.outline)}}function Z0(n,e,t,i){if(!(Sl(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Cb))return{complete:!1,dwellS:0,inZone:!1,requirementBlocked:!1};switch(e.type){case"refuel":{const s=t+i;return{complete:s>=wh,dwellS:s,inZone:!0,requirementBlocked:!1}}case"delivery":{const s=n.altKm<=Nb;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}case"vip":{const s=n.speedKmh<=Ob;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}default:return{complete:!0,dwellS:0,inZone:!0,requirementBlocked:!1}}}function o1(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const a1={kids:["easy"],normal:["easy","normal"],expert:["easy","normal","hard"]},l1=["refuel","photo","riddle","vip"];function Pa(n,e){const t=n[Math.floor(e()*n.length)];if(t===void 0)throw new Error("pick() from empty list");return t}function c1(n,e,t){switch(n){case"pickup":return{label:`Pick up cargo in ${e.name}`,sublabel:"Fly through the beacon to skyhook the crate"};case"refuel":return{label:`Refuel in ${e.name}`,sublabel:"Hold inside the zone for 2 seconds to skim the fuel strip"};case"delivery":return{label:`Deliver the cargo to ${e.name}`,sublabel:"Fly LOW through the beacon to parachute-drop the crate"};case"vip":return{label:`Fly the VIP to ${e.name}`,sublabel:"Arrive gently — under 700 km/h — or they complain"};case"riddle":return{label:`Fly to ${t??"the mystery country"}`,sublabel:"Solve the riddle — which country is it?"};case"photo":return{label:"",sublabel:""}}}function f1(n,e,t,i){const r=Math.min(Lb,Math.max(Db,i.legCount)),s=o1(i.seed),o=a1[i.difficulty],a=Object.values(n).filter(g=>g.playable&&o.includes(g.tier)).sort((g,y)=>g.id.localeCompare(y.id));if(a.length<r)throw new Error("Not enough countries for contract");const c=[];for(let g=0;g<r;g++)g===0?c.push("pickup"):g===r-1?c.push("delivery"):c.push(Pa(l1,s));const l=new Set,h=new Set,f=[];let u=null,p=null;for(const g of c){let y=g,x=null;if(y==="photo"){const I=e.filter(R=>!h.has(R.name)&&n[R.countryId]!==void 0&&!l.has(R.countryId)&&(u===null||Sl(u.lat,u.lon,R.lat,R.lon)>=Qd));I.length>0?(x=Pa(I,s),h.add(x.name)):y="riddle"}let _;if(x){const I=n[x.countryId];if(!I)throw new Error(`Landmark country missing: ${x.countryId}`);_=I}else{const I=a.filter(w=>!l.has(w.id)),R=u?I.filter(w=>Sl(u.lat,u.lon,w.capital.lat,w.capital.lon)>=Qd):I,N=R.length>0?R:I,S=N.filter(w=>w.continent!==p);_=Pa(S.length>0?S:N,s)}l.add(_.id);const T=x?{lat:x.lat,lon:x.lon}:{lat:_.capital.lat,lon:_.capital.lon};let P,M;if(y==="photo"&&x)P=`Photograph ${x.name}`,M=`Fly through the camera ring in ${_.name}`;else{const I=y==="riddle"?(t[_.id]?Pa([...t[_.id]],s):null)??`the country whose capital is ${_.capital.name}`:null;({label:P,sublabel:M}=c1(y,_,I))}f.push({type:y,countryId:_.id,zone:T,label:P,sublabel:M}),u=T,p=_.continent}return{seed:i.seed,difficulty:i.difficulty,legs:f}}function sl(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function u1(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function J0(n){let e,t,i;n.length!==2?(e=sl,t=(a,c)=>sl(n(a),c),i=(a,c)=>n(a)-c):(e=n===sl||n===u1?n:h1,t=n,i=n);function r(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function o(a,c,l=0,h=a.length){const f=r(a,c,l,h-1);return f>l&&i(a[f-1],c)>-i(a[f],c)?f-1:f}return{left:r,center:o,right:s}}function h1(){return 0}function d1(n){return n===null?NaN:+n}const p1=J0(sl),m1=p1.right;J0(d1).center;function Ml(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)))}return[t,i]}class ar{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(t[i++]=a),e=o}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,o=0;if(t>0){for(o=e[--t];t>0&&(i=o,r=e[--t],o=i+r,s=r-(o-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}const g1=Math.sqrt(50),_1=Math.sqrt(10),x1=Math.sqrt(2);function El(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=g1?10:s>=_1?5:s>=x1?2:1;let a,c,l;return r<0?(l=Math.pow(10,-r)/o,a=Math.round(n*l),c=Math.round(e*l),a/l<n&&++a,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*o,a=Math.round(n/l),c=Math.round(e/l),a*l<n&&++a,c*l>e&&--c),c<a&&.5<=t&&t<2?El(n,e,t*2):[a,c,l]}function v1(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,o]=i?El(e,n,t):El(n,e,t);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(i)if(o<0)for(let l=0;l<a;++l)c[l]=(s-l)/-o;else for(let l=0;l<a;++l)c[l]=(s-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(r+l)/-o;else for(let l=0;l<a;++l)c[l]=(r+l)*o;return c}function bu(n,e,t){return e=+e,n=+n,t=+t,El(n,e,t)[2]}function y1(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?bu(e,n,t):bu(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function S1(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(s=+s)>=s&&(++t,i+=s)}if(t)return i/t}function*M1(n){for(const e of n)yield*e}function zo(n){return Array.from(M1(n))}const ko=new Set;let wu=!1;function E1(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;ko.size&&ko.clear();let s=j0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a=0,c=0,l=0;if(i&&(s=R1(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<r;u+=t){const p=n[u],g=n[u+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Tu(s,o,a,c,l),o}function j0(n,e,t,i,r){let s=null;if(r===V1(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=op(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=op(o/i|0,n[o],n[o+1],s);return s&&Vo(s,s.next)&&(Go(s),s=s.next),s}function Qr(n,e=n){const t=e===n;let i=n,r;do r=!1,i!==i.next&&(ko.size===0||!ko.has(i))&&(Vo(i,i.next)||an(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),wu=!0,Go(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function Tu(n,e,t,i,r){r&&O1(n,t,i,r);let s=n,o=!1;for(;n.prev!==n.next;){const a=n.prev,c=n.next;if(an(a,n,c)<0&&(r?w1(n,t,i,r):b1(n))){e.push(a.i,n.i,c.i),Go(n),n=c,s=c;continue}if(n=c,n===s){if(wu=!1,n=Qr(n),wu){s=n;continue}if(!o){n=T1(n,e),s=n,o=!0;continue}A1(n,e,t,i,r);break}}}function b1(n){const e=n.prev,t=n,i=n.next,r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&!(r===g.x&&a===g.y)&&wl(r,a,s,c,o,l,g.x,g.y)&&an(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function w1(n,e,t,i){const r=n.prev,s=n,o=n.next,a=r.x,c=s.x,l=o.x,h=r.y,f=s.y,u=o.y,p=Math.min(a,c,l),g=Math.min(h,f,u),y=Math.max(a,c,l),x=Math.max(h,f,u),_=Pu(p,g,e,t,i),T=Pu(y,x,e,t,i);let P=n.prevZ;for(;P&&P.z>=_;){if(P.x>=p&&P.x<=y&&P.y>=g&&P.y<=x&&P!==o&&!(a===P.x&&h===P.y)&&wl(a,h,c,f,l,u,P.x,P.y)&&an(P.prev,P,P.next)>=0)return!1;P=P.prevZ}let M=n.nextZ;for(;M&&M.z<=T;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=x&&M!==o&&!(a===M.x&&h===M.y)&&wl(a,h,c,f,l,u,M.x,M.y)&&an(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function T1(n,e){let t=n,i=!1;do{const r=t.prev,s=t.next.next;tg(r,t,t.next,s,!1)&&Ho(r,s)&&Ho(s,r)&&(e.push(r.i,t.i,s.i),Go(t),Go(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?Qr(t):t}function A1(n,e,t,i,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&B1(s,o)){let a=ng(s,o);s=Qr(s,s.next),a=Qr(a,a.next),Tu(s,e,t,i,r),Tu(a,e,t,i,r);return}o=o.next}s=s.next}while(s!==n)}let Au=!1;function R1(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=j0(n,a,c,i,!1);l===l.next&&ko.add(l),r.push(F1(l))}r.sort(C1),I1(n.length/i,e.length),eg(t,t),Au=!0;for(let s=0;s<r.length;s++)t=P1(r[s],t);return Au=!1,Qr(t)}function C1(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function P1(n,e){const t=L1(n,e);if(!t)return e;const i=ng(t,n),r=i.next;return eg(t,r.next),Qr(i,i.next),Qr(t,t.next)}const Q0=16;let tn=new Float64Array(0),bl=0;const Ru=[],Cu=[];function I1(n,e){const t=Math.ceil((n+2*e)/Q0)+e+2;tn.length<t*4&&(tn=new Float64Array(t*4)),bl=0}function eg(n,e){let t=n;do{const i=bl++;Ru[i]=t;let r=1/0,s=1/0,o=-1/0,a=-1/0,c=0;do{const h=t.next;t.z=i,t.x<r&&(r=t.x),t.x>o&&(o=t.x),t.y<s&&(s=t.y),t.y>a&&(a=t.y),h.x<r&&(r=h.x),h.x>o&&(o=h.x),h.y<s&&(s=h.y),h.y>a&&(a=h.y),t=h}while(++c<Q0&&t!==e);Cu[i]=t;const l=i*4;tn[l]=r,tn[l+1]=s,tn[l+2]=o,tn[l+3]=a}while(t!==e)}function D1(n,e){const t=n.z*4;e.x<tn[t]&&(tn[t]=e.x),e.y<tn[t+1]&&(tn[t+1]=e.y),e.x>tn[t+2]&&(tn[t+2]=e.x),e.y>tn[t+3]&&(tn[t+3]=e.y)}function rp(n){let e=Cu[n];for(;e.prev.next!==e;)e=e.next;return Cu[n]=e,e}function sp(n){let e=Ru[n];for(;e.prev.next!==e;)e=e.next;return Ru[n]=e,e}function L1(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Vo(n,t))return t;for(let u=0,p=0;u<bl;u++,p+=4){if(r<tn[p+1]||r>tn[p+3]||tn[p]>i||tn[p+2]<=s)continue;const g=rp(u);t=sp(u);do{if(t.prev.next===t){if(Vo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const y=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(y<=i&&y>s&&(s=y,o=t.x<t.next.x?t:t.next,y===i))return o}}t=t.next}while(t!==g)}if(!o)return null;const a=o.x,c=o.y,l=Math.min(r,c),h=Math.max(r,c);let f=1/0;for(let u=0,p=0;u<bl;u++,p+=4){if(tn[p+2]<a||tn[p]>i||tn[p+3]<l||tn[p+1]>h)continue;const g=rp(u);t=sp(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=a&&i!==t.x&&wl(r<c?i:s,r,a,c,r<c?s:i,r,t.x,t.y)){const y=Math.abs(r-t.y)/(i-t.x);(Ho(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(y<f||y===f&&(t.x>o.x||t.x===o.x&&N1(o,t)))&&(o=t,f=y)}t=t.next}while(t!==g)}return o}function N1(n,e){return an(n.prev,n,e.prev)<0&&an(e.next,n,n.next)<0}const si=[];let go=[],Fr=new Uint32Array(0),_o=new Uint32Array(0);const xo=new Uint32Array(256);function O1(n,e,t,i){let r=n,s=0;do r.z=Pu(r.x,r.y,e,t,i),si[s++]=r,r=r.next;while(r!==n);U1(s);let o=null;for(let a=0;a<s;a++){const c=si[a];c.prevZ=o,o&&(o.nextZ=c),o=c}o.nextZ=null}function U1(n){if(n<=32){for(let e=1;e<n;e++){const t=si[e],i=t.z;let r=e-1;for(;r>=0&&si[r].z>i;)si[r+1]=si[r],r--;si[r+1]=t}return}Fr.length<n&&(Fr=new Uint32Array(n),_o=new Uint32Array(n),go=new Array(n));for(let e=0;e<n;e++)Fr[e]=si[e].z;Ia(n,si,Fr,go,_o,0),Ia(n,go,_o,si,Fr,8),Ia(n,si,Fr,go,_o,16),Ia(n,go,_o,si,Fr,24)}function Ia(n,e,t,i,r,s){xo.fill(0);for(let a=0;a<n;a++)xo[t[a]>>>s&255]++;let o=0;for(let a=0;a<256;a++){const c=xo[a];xo[a]=o,o+=c}for(let a=0;a<n;a++){const c=t[a],l=xo[c>>>s&255]++;i[l]=e[a],r[l]=c}}function Pu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function F1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wl(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function B1(n,e){const t=Vo(n,e)&&an(n.prev,n,n.next)>0&&an(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||Ho(n,e)&&Ho(e,n)&&(an(n.prev,n,e.prev)!==0||an(n,e.prev,e)!==0))&&!z1(n,e)&&(t||k1(n,e))}function an(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vo(n,e){return n.x===e.x&&n.y===e.y}function tg(n,e,t,i,r=!0){const s=an(n,e,t),o=an(n,e,i),a=an(t,i,n),c=an(t,i,e);return(s>0&&o<0||s<0&&o>0)&&(a>0&&c<0||a<0&&c>0)?!0:r?!!(s===0&&Da(n,t,e)||o===0&&Da(n,i,e)||a===0&&Da(t,n,i)||c===0&&Da(t,e,i)):!1}function Da(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function z1(n,e){const t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y);let o=n;do{const a=o.next;if(o.x>i&&a.x>i||o.x<t&&a.x<t||o.y>s&&a.y>s||o.y<r&&a.y<r){o=a;continue}if(o.i!==n.i&&a.i!==n.i&&o.i!==e.i&&a.i!==e.i&&tg(o,a,n,e))return!0;o=a}while(o!==n);return!1}function Ho(n,e){return an(n.prev,n,n.next)<0?an(n,e,n.next)>=0&&an(n,n.prev,e)>=0:an(n,e,n.prev)<0||an(n,n.next,e)<0}function k1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{const o=t.next;t.y>s!=o.y>s&&r<(o.x-t.x)*(s-t.y)/(o.y-t.y)+t.x&&(i=!i),t=o}while(t!==n);return i}function ng(n,e){const t=Iu(n.i,n.x,n.y),i=Iu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function op(n,e,t,i){const r=Iu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Go(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),Au&&D1(n.prev,n.next)}function Iu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function V1(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function ig(n){const e=[],t=[],i=n[0][0].length;let r=0,s=0;for(const o of n){for(const a of o)for(let c=0;c<i;c++)e.push(a[c]);s&&(r+=s,t.push(r)),s=o.length}return{vertices:e,holes:t,dimensions:i}}const ap=Math.pow(2,-52),La=new Uint32Array(512);class Wo{static from(e,t=X1,i=q1){const r=e.length,s=new Float64Array(r*2);for(let o=0;o<r;o++){const a=e[o];s[2*o]=t(a),s[2*o+1]=i(a)}return new Wo(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:r,_hullHash:s}=this,o=e.length>>1;let a=1/0,c=1/0,l=-1/0,h=-1/0;for(let w=0;w<o;w++){const z=e[2*w],O=e[2*w+1];z<a&&(a=z),O<c&&(c=O),z>l&&(l=z),O>h&&(h=O),this._ids[w]=w}const f=(a+l)/2,u=(c+h)/2;let p=0,g=0,y=0;for(let w=0,z=1/0;w<o;w++){const O=nf(f,u,e[2*w],e[2*w+1]);O<z&&(p=w,z=O)}const x=e[2*p],_=e[2*p+1];for(let w=0,z=1/0;w<o;w++){if(w===p)continue;const O=nf(x,_,e[2*w],e[2*w+1]);O<z&&O>0&&(g=w,z=O)}let T=e[2*g],P=e[2*g+1],M=1/0;for(let w=0;w<o;w++){if(w===p||w===g)continue;const z=W1(x,_,T,P,e[2*w],e[2*w+1]);z<M&&(y=w,M=z)}let I=e[2*y],R=e[2*y+1];if(M===1/0){for(let O=0;O<o;O++)this._dists[O]=e[2*O]-e[0]||e[2*O+1]-e[1];Ps(this._ids,this._dists,0,o-1);const w=new Uint32Array(o);let z=0;for(let O=0,B=-1/0;O<o;O++){const L=this._ids[O],V=this._dists[L];V>B&&(w[z++]=L,B=V)}this.hull=w.subarray(0,z),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(To(x,_,T,P,I,R)<0){const w=g,z=T,O=P;g=y,T=I,P=R,y=w,I=z,R=O}const N=$1(x,_,T,P,I,R);this._cx=N.x,this._cy=N.y;for(let w=0;w<o;w++)this._dists[w]=nf(e[2*w],e[2*w+1],N.x,N.y);Ps(this._ids,this._dists,0,o-1),this._hullStart=p;let S=3;i[p]=t[y]=g,i[g]=t[p]=y,i[y]=t[g]=p,r[p]=0,r[g]=1,r[y]=2,s.fill(-1),s[this._hashKey(x,_)]=p,s[this._hashKey(T,P)]=g,s[this._hashKey(I,R)]=y,this.trianglesLen=0,this._addTriangle(p,g,y,-1,-1,-1);for(let w=0,z=0,O=0;w<this._ids.length;w++){const B=this._ids[w],L=e[2*B],V=e[2*B+1];if(w>0&&Math.abs(L-z)<=ap&&Math.abs(V-O)<=ap||(z=L,O=V,B===p||B===g||B===y))continue;let A=0;for(let te=0,ue=this._hashKey(L,V);te<this._hashSize&&(A=s[(ue+te)%this._hashSize],!(A!==-1&&A!==i[A]));te++);A=t[A];let U=A,F;for(;F=i[U],To(L,V,e[2*U],e[2*U+1],e[2*F],e[2*F+1])>=0;)if(U=F,U===A){U=-1;break}if(U===-1)continue;let G=this._addTriangle(U,B,i[U],-1,-1,r[U]);r[B]=this._legalize(G+2),r[U]=G,S++;let Z=i[U];for(;F=i[Z],To(L,V,e[2*Z],e[2*Z+1],e[2*F],e[2*F+1])<0;)G=this._addTriangle(Z,B,F,r[B],-1,r[Z]),r[B]=this._legalize(G+2),i[Z]=Z,S--,Z=F;if(U===A)for(;F=t[U],To(L,V,e[2*F],e[2*F+1],e[2*U],e[2*U+1])<0;)G=this._addTriangle(F,B,U,-1,r[U],r[F]),this._legalize(G+2),r[F]=G,i[U]=U,S--,U=F;this._hullStart=t[B]=U,i[U]=t[Z]=B,i[B]=Z,s[this._hashKey(L,V)]=B,s[this._hashKey(e[2*U],e[2*U+1])]=U}this.hull=new Uint32Array(S);for(let w=0,z=this._hullStart;w<S;w++)this.hull[w]=z,z=i[z];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(H1(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:r}=this;let s=0,o=0;for(;;){const a=i[e],c=e-e%3;if(o=c+(e+2)%3,a===-1){if(s===0)break;e=La[--s];continue}const l=a-a%3,h=c+(e+1)%3,f=l+(a+2)%3,u=t[o],p=t[e],g=t[h],y=t[f];if(G1(r[2*u],r[2*u+1],r[2*p],r[2*p+1],r[2*g],r[2*g+1],r[2*y],r[2*y+1])){t[e]=y,t[a]=u;const _=i[f];if(_===-1){let P=this._hullStart;do{if(this._hullTri[P]===f){this._hullTri[P]=e;break}P=this._hullPrev[P]}while(P!==this._hullStart)}this._link(e,_),this._link(a,i[o]),this._link(o,f);const T=l+(a+1)%3;s<La.length&&(La[s++]=T)}else{if(s===0)break;e=La[--s]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,r,s,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,r),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function H1(n,e){const t=n/(Math.abs(n)+Math.abs(e));return(e>0?3-t:1+t)/4}function nf(n,e,t,i){const r=n-t,s=e-i;return r*r+s*s}function G1(n,e,t,i,r,s,o,a){const c=n-o,l=e-a,h=t-o,f=i-a,u=r-o,p=s-a,g=c*c+l*l,y=h*h+f*f,x=u*u+p*p;return c*(f*x-y*p)-l*(h*x-y*u)+g*(h*p-f*u)<0}function W1(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=(l*h-a*f)*u,g=(o*f-c*h)*u;return p*p+g*g}function $1(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=n+(l*h-a*f)*u,g=e+(o*f-c*h)*u;return{x:p,y:g}}function Ps(n,e,t,i){if(i-t<=20)for(let r=t+1;r<=i;r++){const s=n[r],o=e[s];let a=r-1;for(;a>=t&&e[n[a]]>o;)n[a+1]=n[a--];n[a+1]=s}else{const r=t+i>>1;let s=t+1,o=i;vo(n,r,s),e[n[t]]>e[n[i]]&&vo(n,t,i),e[n[s]]>e[n[i]]&&vo(n,s,i),e[n[t]]>e[n[s]]&&vo(n,t,s);const a=n[s],c=e[a];for(;;){do s++;while(e[n[s]]<c);do o--;while(e[n[o]]>c);if(o<s)break;vo(n,s,o)}n[t+1]=n[o],n[o]=a,i-s+1>=o-t?(Ps(n,e,s,i),Ps(n,e,t,o-1)):(Ps(n,e,t,o-1),Ps(n,e,s,i))}}function vo(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function X1(n){return n[0]}function q1(n){return n[1]}var Ct=1e-6,Tl=1e-12,wt=Math.PI,ui=wt/2,Al=wt/4,ti=wt*2,en=180/wt,ot=wt/180,Ht=Math.abs,rg=Math.atan,di=Math.atan2,ct=Math.cos,Du=Math.hypot,rt=Math.sin,Y1=Math.sign||function(n){return n>0?1:n<0?-1:0},ur=Math.sqrt;function K1(n){return n>1?0:n<-1?wt:Math.acos(n)}function hr(n){return n>1?ui:n<-1?-ui:Math.asin(n)}function lp(n){return(n=rt(n/2))*n}function wn(){}function Rl(n,e){n&&fp.hasOwnProperty(n.type)&&fp[n.type](n,e)}var cp={Feature:function(n,e){Rl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)Rl(t[i].geometry,e)}},fp={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){Lu(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Lu(t[i],e,0)},Polygon:function(n,e){up(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)up(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)Rl(t[i],e)}};function Lu(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function up(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)Lu(n[t],e,1);e.polygonEnd()}function uc(n,e){n&&cp.hasOwnProperty(n.type)?cp[n.type](n,e):Rl(n,e)}var Cl=new ar,hp=new ar,sg,og,Nu,Ou,Uu,dr={point:wn,lineStart:wn,lineEnd:wn,polygonStart:function(){Cl=new ar,dr.lineStart=Z1,dr.lineEnd=J1},polygonEnd:function(){var n=+Cl;hp.add(n<0?ti+n:n),this.lineStart=this.lineEnd=this.point=wn},sphere:function(){hp.add(ti)}};function Z1(){dr.point=j1}function J1(){ag(sg,og)}function j1(n,e){dr.point=ag,sg=n,og=e,n*=ot,e*=ot,Nu=n,Ou=ct(e=e/2+Al),Uu=rt(e)}function ag(n,e){n*=ot,e*=ot,e=e/2+Al;var t=n-Nu,i=t>=0?1:-1,r=i*t,s=ct(e),o=rt(e),a=Uu*o,c=Ou*s+a*ct(r),l=a*i*rt(r);Cl.add(di(l,c)),Nu=n,Ou=s,Uu=o}function Pl(n){return[di(n[1],n[0]),hr(n[2])]}function es(n){var e=n[0],t=n[1],i=ct(t);return[i*ct(e),i*rt(e),rt(t)]}function Na(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Hs(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function rf(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Oa(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Il(n){var e=ur(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}var Jt,$n,Qt,Qn,kr,lg,cg,Os,Lo,Mr,pr,er={point:Fu,lineStart:dp,lineEnd:pp,polygonStart:function(){er.point=ug,er.lineStart=Q1,er.lineEnd=ew,Lo=new ar,dr.polygonStart()},polygonEnd:function(){dr.polygonEnd(),er.point=Fu,er.lineStart=dp,er.lineEnd=pp,Cl<0?(Jt=-(Qt=180),$n=-(Qn=90)):Lo>Ct?Qn=90:Lo<-Ct&&($n=-90),pr[0]=Jt,pr[1]=Qt},sphere:function(){Jt=-(Qt=180),$n=-(Qn=90)}};function Fu(n,e){Mr.push(pr=[Jt=n,Qt=n]),e<$n&&($n=e),e>Qn&&(Qn=e)}function fg(n,e){var t=es([n*ot,e*ot]);if(Os){var i=Hs(Os,t),r=[i[1],-i[0],0],s=Hs(r,i);Il(s),s=Pl(s);var o=n-kr,a=o>0?1:-1,c=s[0]*en*a,l,h=Ht(o)>180;h^(a*kr<c&&c<a*n)?(l=s[1]*en,l>Qn&&(Qn=l)):(c=(c+360)%360-180,h^(a*kr<c&&c<a*n)?(l=-s[1]*en,l<$n&&($n=l)):(e<$n&&($n=e),e>Qn&&(Qn=e))),h?n<kr?Jn(Jt,n)>Jn(Jt,Qt)&&(Qt=n):Jn(n,Qt)>Jn(Jt,Qt)&&(Jt=n):Qt>=Jt?(n<Jt&&(Jt=n),n>Qt&&(Qt=n)):n>kr?Jn(Jt,n)>Jn(Jt,Qt)&&(Qt=n):Jn(n,Qt)>Jn(Jt,Qt)&&(Jt=n)}else Mr.push(pr=[Jt=n,Qt=n]);e<$n&&($n=e),e>Qn&&(Qn=e),Os=t,kr=n}function dp(){er.point=fg}function pp(){pr[0]=Jt,pr[1]=Qt,er.point=Fu,Os=null}function ug(n,e){if(Os){var t=n-kr;Lo.add(Ht(t)>180?t+(t>0?360:-360):t)}else lg=n,cg=e;dr.point(n,e),fg(n,e)}function Q1(){dr.lineStart()}function ew(){ug(lg,cg),dr.lineEnd(),Ht(Lo)>Ct&&(Jt=-(Qt=180)),pr[0]=Jt,pr[1]=Qt,Os=null}function Jn(n,e){return(e-=n)<0?e+360:e}function tw(n,e){return n[0]-e[0]}function mp(n,e){return n[0]<=n[1]?n[0]<=e&&e<=n[1]:e<n[0]||n[1]<e}function hg(n){var e,t,i,r,s,o,a;if(Qn=Qt=-(Jt=$n=1/0),Mr=[],uc(n,er),t=Mr.length){for(Mr.sort(tw),e=1,i=Mr[0],s=[i];e<t;++e)r=Mr[e],mp(i,r[0])||mp(i,r[1])?(Jn(i[0],r[1])>Jn(i[0],i[1])&&(i[1]=r[1]),Jn(r[0],i[1])>Jn(i[0],i[1])&&(i[0]=r[0])):s.push(i=r);for(o=-1/0,t=s.length-1,e=0,i=s[t];e<=t;i=r,++e)r=s[e],(a=Jn(i[1],r[0]))>o&&(o=a,Jt=r[0],Qt=i[1])}return Mr=pr=null,Jt===1/0||$n===1/0?[[NaN,NaN],[NaN,NaN]]:[[Jt,$n],[Qt,Qn]]}var Ao,Dl,Ll,Nl,Ol,Ul,Fl,Bl,Bu,zu,ku,dg,pg,Fn,Bn,zn,Ti={sphere:wn,point:Ah,lineStart:gp,lineEnd:_p,polygonStart:function(){Ti.lineStart=rw,Ti.lineEnd=sw},polygonEnd:function(){Ti.lineStart=gp,Ti.lineEnd=_p}};function Ah(n,e){n*=ot,e*=ot;var t=ct(e);Qo(t*ct(n),t*rt(n),rt(e))}function Qo(n,e,t){++Ao,Ll+=(n-Ll)/Ao,Nl+=(e-Nl)/Ao,Ol+=(t-Ol)/Ao}function gp(){Ti.point=nw}function nw(n,e){n*=ot,e*=ot;var t=ct(e);Fn=t*ct(n),Bn=t*rt(n),zn=rt(e),Ti.point=iw,Qo(Fn,Bn,zn)}function iw(n,e){n*=ot,e*=ot;var t=ct(e),i=t*ct(n),r=t*rt(n),s=rt(e),o=di(ur((o=Bn*s-zn*r)*o+(o=zn*i-Fn*s)*o+(o=Fn*r-Bn*i)*o),Fn*i+Bn*r+zn*s);Dl+=o,Ul+=o*(Fn+(Fn=i)),Fl+=o*(Bn+(Bn=r)),Bl+=o*(zn+(zn=s)),Qo(Fn,Bn,zn)}function _p(){Ti.point=Ah}function rw(){Ti.point=ow}function sw(){mg(dg,pg),Ti.point=Ah}function ow(n,e){dg=n,pg=e,n*=ot,e*=ot,Ti.point=mg;var t=ct(e);Fn=t*ct(n),Bn=t*rt(n),zn=rt(e),Qo(Fn,Bn,zn)}function mg(n,e){n*=ot,e*=ot;var t=ct(e),i=t*ct(n),r=t*rt(n),s=rt(e),o=Bn*s-zn*r,a=zn*i-Fn*s,c=Fn*r-Bn*i,l=Du(o,a,c),h=hr(l),f=l&&-h/l;Bu.add(f*o),zu.add(f*a),ku.add(f*c),Dl+=h,Ul+=h*(Fn+(Fn=i)),Fl+=h*(Bn+(Bn=r)),Bl+=h*(zn+(zn=s)),Qo(Fn,Bn,zn)}function xp(n){Ao=Dl=Ll=Nl=Ol=Ul=Fl=Bl=0,Bu=new ar,zu=new ar,ku=new ar,uc(n,Ti);var e=+Bu,t=+zu,i=+ku,r=Du(e,t,i);return r<Tl&&(e=Ul,t=Fl,i=Bl,Dl<Ct&&(e=Ll,t=Nl,i=Ol),r=Du(e,t,i),r<Tl)?[NaN,NaN]:[di(t,e)*en,hr(i/r)*en]}function Vu(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function Hu(n,e){return Ht(n)>wt&&(n-=Math.round(n/ti)*ti),[n,e]}Hu.invert=Hu;function gg(n,e,t){return(n%=ti)?e||t?Vu(yp(n),Sp(e,t)):yp(n):e||t?Sp(e,t):Hu}function vp(n){return function(e,t){return e+=n,Ht(e)>wt&&(e-=Math.round(e/ti)*ti),[e,t]}}function yp(n){var e=vp(n);return e.invert=vp(-n),e}function Sp(n,e){var t=ct(n),i=rt(n),r=ct(e),s=rt(e);function o(a,c){var l=ct(c),h=ct(a)*l,f=rt(a)*l,u=rt(c),p=u*t+h*i;return[di(f*r-p*s,h*t-u*i),hr(p*r+f*s)]}return o.invert=function(a,c){var l=ct(c),h=ct(a)*l,f=rt(a)*l,u=rt(c),p=u*r-f*s;return[di(f*r+u*s,h*t+p*i),hr(p*t-h*i)]},o}function aw(n){n=gg(n[0]*ot,n[1]*ot,n.length>2?n[2]*ot:0);function e(t){return t=n(t[0]*ot,t[1]*ot),t[0]*=en,t[1]*=en,t}return e.invert=function(t){return t=n.invert(t[0]*ot,t[1]*ot),t[0]*=en,t[1]*=en,t},e}function lw(n,e,t,i,r,s){if(t){var o=ct(e),a=rt(e),c=i*t;r==null?(r=e+i*ti,s=e-c/2):(r=Mp(o,r),s=Mp(o,s),(i>0?r<s:r>s)&&(r+=i*ti));for(var l,h=r;i>0?h>s:h<s;h-=c)l=Pl([o,-a*ct(h),-a*rt(h)]),n.point(l[0],l[1])}}function Mp(n,e){e=es(e),e[0]-=n,Il(e);var t=K1(-e[1]);return((-e[2]<0?-t:t)+ti-Ct)%ti}function _g(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:wn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function ol(n,e){return Ht(n[0]-e[0])<Ct&&Ht(n[1]-e[1])<Ct}function Ua(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function xg(n,e,t,i,r){var s=[],o=[],a,c;if(n.forEach(function(g){if(!((y=g.length-1)<=0)){var y,x=g[0],_=g[y],T;if(ol(x,_)){if(!x[2]&&!_[2]){for(r.lineStart(),a=0;a<y;++a)r.point((x=g[a])[0],x[1]);r.lineEnd();return}_[0]+=2*Ct}s.push(T=new Ua(x,g,null,!0)),o.push(T.o=new Ua(x,null,T,!1)),s.push(T=new Ua(_,g,null,!1)),o.push(T.o=new Ua(_,null,T,!0))}}),!!s.length){for(o.sort(e),Ep(s),Ep(o),a=0,c=o.length;a<c;++a)o[a].e=t=!t;for(var l=s[0],h,f;;){for(var u=l,p=!0;u.v;)if((u=u.n)===l)return;h=u.z,r.lineStart();do{if(u.v=u.o.v=!0,u.e){if(p)for(a=0,c=h.length;a<c;++a)r.point((f=h[a])[0],f[1]);else i(u.x,u.n.x,1,r);u=u.n}else{if(p)for(h=u.p.z,a=h.length-1;a>=0;--a)r.point((f=h[a])[0],f[1]);else i(u.x,u.p.x,-1,r);u=u.p}u=u.o,h=u.z,p=!p}while(!u.v);r.lineEnd()}}}function Ep(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function sf(n){return Ht(n[0])<=wt?n[0]:Y1(n[0])*((Ht(n[0])+wt)%ti-wt)}function vg(n,e){var t=sf(e),i=e[1],r=rt(i),s=[rt(t),-ct(t),0],o=0,a=0,c=new ar;r===1?i=ui+Ct:r===-1&&(i=-ui-Ct);for(var l=0,h=n.length;l<h;++l)if(u=(f=n[l]).length)for(var f,u,p=f[u-1],g=sf(p),y=p[1]/2+Al,x=rt(y),_=ct(y),T=0;T<u;++T,g=M,x=R,_=N,p=P){var P=f[T],M=sf(P),I=P[1]/2+Al,R=rt(I),N=ct(I),S=M-g,w=S>=0?1:-1,z=w*S,O=z>wt,B=x*R;if(c.add(di(B*w*rt(z),_*N+B*ct(z))),o+=O?S+w*ti:S,O^g>=t^M>=t){var L=Hs(es(p),es(P));Il(L);var V=Hs(s,L);Il(V);var A=(O^S>=0?-1:1)*hr(V[2]);(i>A||i===A&&(L[0]||L[1]))&&(a+=O^S>=0?1:-1)}}return(o<-Ct||o<Ct&&c<-Tl)^a&1}function yg(n,e,t,i){return function(r){var s=e(r),o=_g(),a=e(o),c=!1,l,h,f,u={point:p,lineStart:y,lineEnd:x,polygonStart:function(){u.point=_,u.lineStart=T,u.lineEnd=P,h=[],l=[]},polygonEnd:function(){u.point=p,u.lineStart=y,u.lineEnd=x,h=zo(h);var M=vg(l,i);h.length?(c||(r.polygonStart(),c=!0),xg(h,fw,M,t,r)):M&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),h=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(M,I){n(M,I)&&r.point(M,I)}function g(M,I){s.point(M,I)}function y(){u.point=g,s.lineStart()}function x(){u.point=p,s.lineEnd()}function _(M,I){f.push([M,I]),a.point(M,I)}function T(){a.lineStart(),f=[]}function P(){_(f[0][0],f[0][1]),a.lineEnd();var M=a.clean(),I=o.result(),R,N=I.length,S,w,z;if(f.pop(),l.push(f),f=null,!!N){if(M&1){if(w=I[0],(S=w.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),R=0;R<S;++R)r.point((z=w[R])[0],z[1]);r.lineEnd()}return}N>1&&M&2&&I.push(I.pop().concat(I.shift())),h.push(I.filter(cw))}}return u}}function cw(n){return n.length>1}function fw(n,e){return((n=n.x)[0]<0?n[1]-ui-Ct:ui-n[1])-((e=e.x)[0]<0?e[1]-ui-Ct:ui-e[1])}const bp=yg(function(){return!0},uw,dw,[-wt,-ui]);function uw(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,o){var a=s>0?wt:-wt,c=Ht(s-e);Ht(c-wt)<Ct?(n.point(e,t=(t+o)/2>0?ui:-ui),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),n.point(s,t),r=0):i!==a&&c>=wt&&(Ht(e-i)<Ct&&(e-=i*Ct),Ht(s-a)<Ct&&(s-=a*Ct),t=hw(e,t,s,o),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),r=0),n.point(e=s,t=o),i=a},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function hw(n,e,t,i){var r,s,o=rt(n-t);return Ht(o)>Ct?rg((rt(e)*(s=ct(i))*rt(t)-rt(i)*(r=ct(e))*rt(n))/(r*s*o)):(e+i)/2}function dw(n,e,t,i){var r;if(n==null)r=t*ui,i.point(-wt,r),i.point(0,r),i.point(wt,r),i.point(wt,0),i.point(wt,-r),i.point(0,-r),i.point(-wt,-r),i.point(-wt,0),i.point(-wt,r);else if(Ht(n[0]-e[0])>Ct){var s=n[0]<e[0]?wt:-wt;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function pw(n){var e=ct(n),t=2*ot,i=e>0,r=Ht(e)>Ct;function s(h,f,u,p){lw(p,n,t,u,h,f)}function o(h,f){return ct(h)*ct(f)>e}function a(h){var f,u,p,g,y;return{lineStart:function(){g=p=!1,y=1},point:function(x,_){var T=[x,_],P,M=o(x,_),I=i?M?0:l(x,_):M?l(x+(x<0?wt:-wt),_):0;if(!f&&(g=p=M)&&h.lineStart(),M!==p&&(P=c(f,T),(!P||ol(f,P)||ol(T,P))&&(T[2]=1)),M!==p)y=0,M?(h.lineStart(),P=c(T,f),h.point(P[0],P[1])):(P=c(f,T),h.point(P[0],P[1],2),h.lineEnd()),f=P;else if(r&&f&&i^M){var R;!(I&u)&&(R=c(T,f,!0))&&(y=0,i?(h.lineStart(),h.point(R[0][0],R[0][1]),h.point(R[1][0],R[1][1]),h.lineEnd()):(h.point(R[1][0],R[1][1]),h.lineEnd(),h.lineStart(),h.point(R[0][0],R[0][1],3)))}M&&(!f||!ol(f,T))&&h.point(T[0],T[1]),f=T,p=M,u=I},lineEnd:function(){p&&h.lineEnd(),f=null},clean:function(){return y|(g&&p)<<1}}}function c(h,f,u){var p=es(h),g=es(f),y=[1,0,0],x=Hs(p,g),_=Na(x,x),T=x[0],P=_-T*T;if(!P)return!u&&h;var M=e*_/P,I=-e*T/P,R=Hs(y,x),N=Oa(y,M),S=Oa(x,I);rf(N,S);var w=R,z=Na(N,w),O=Na(w,w),B=z*z-O*(Na(N,N)-1);if(!(B<0)){var L=ur(B),V=Oa(w,(-z-L)/O);if(rf(V,N),V=Pl(V),!u)return V;var A=h[0],U=f[0],F=h[1],G=f[1],Z;U<A&&(Z=A,A=U,U=Z);var te=U-A,ue=Ht(te-wt)<Ct,_e=ue||te<Ct;if(!ue&&G<F&&(Z=F,F=G,G=Z),_e?ue?F+G>0^V[1]<(Ht(V[0]-A)<Ct?F:G):F<=V[1]&&V[1]<=G:te>wt^(A<=V[0]&&V[0]<=U)){var Re=Oa(w,(-z+L)/O);return rf(Re,N),[V,Pl(Re)]}}}function l(h,f){var u=i?n:wt-n,p=0;return h<-u?p|=1:h>u&&(p|=2),f<-u?p|=4:f>u&&(p|=8),p}return yg(o,a,s,i?[0,-n]:[-wt,n-wt])}function mw(n,e,t,i,r,s){var o=n[0],a=n[1],c=e[0],l=e[1],h=0,f=1,u=c-o,p=l-a,g;if(g=t-o,!(!u&&g>0)){if(g/=u,u<0){if(g<h)return;g<f&&(f=g)}else if(u>0){if(g>f)return;g>h&&(h=g)}if(g=r-o,!(!u&&g<0)){if(g/=u,u<0){if(g>f)return;g>h&&(h=g)}else if(u>0){if(g<h)return;g<f&&(f=g)}if(g=i-a,!(!p&&g>0)){if(g/=p,p<0){if(g<h)return;g<f&&(f=g)}else if(p>0){if(g>f)return;g>h&&(h=g)}if(g=s-a,!(!p&&g<0)){if(g/=p,p<0){if(g>f)return;g>h&&(h=g)}else if(p>0){if(g<h)return;g<f&&(f=g)}return h>0&&(n[0]=o+h*u,n[1]=a+h*p),f<1&&(e[0]=o+f*u,e[1]=a+f*p),!0}}}}}var Ro=1e9,Fa=-Ro;function gw(n,e,t,i){function r(l,h){return n<=l&&l<=t&&e<=h&&h<=i}function s(l,h,f,u){var p=0,g=0;if(l==null||(p=o(l,f))!==(g=o(h,f))||c(l,h)<0^f>0)do u.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+f+4)%4)!==g);else u.point(h[0],h[1])}function o(l,h){return Ht(l[0]-n)<Ct?h>0?0:3:Ht(l[0]-t)<Ct?h>0?2:1:Ht(l[1]-e)<Ct?h>0?1:0:h>0?3:2}function a(l,h){return c(l.x,h.x)}function c(l,h){var f=o(l,1),u=o(h,1);return f!==u?f-u:f===0?h[1]-l[1]:f===1?l[0]-h[0]:f===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,f=_g(),u,p,g,y,x,_,T,P,M,I,R,N={point:S,lineStart:B,lineEnd:L,polygonStart:z,polygonEnd:O};function S(A,U){r(A,U)&&h.point(A,U)}function w(){for(var A=0,U=0,F=p.length;U<F;++U)for(var G=p[U],Z=1,te=G.length,ue=G[0],_e,Re,st=ue[0],et=ue[1];Z<te;++Z)_e=st,Re=et,ue=G[Z],st=ue[0],et=ue[1],Re<=i?et>i&&(st-_e)*(i-Re)>(et-Re)*(n-_e)&&++A:et<=i&&(st-_e)*(i-Re)<(et-Re)*(n-_e)&&--A;return A}function z(){h=f,u=[],p=[],R=!0}function O(){var A=w(),U=R&&A,F=(u=zo(u)).length;(U||F)&&(l.polygonStart(),U&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),F&&xg(u,a,A,s,l),l.polygonEnd()),h=l,u=p=g=null}function B(){N.point=V,p&&p.push(g=[]),I=!0,M=!1,T=P=NaN}function L(){u&&(V(y,x),_&&M&&f.rejoin(),u.push(f.result())),N.point=S,M&&h.lineEnd()}function V(A,U){var F=r(A,U);if(p&&g.push([A,U]),I)y=A,x=U,_=F,I=!1,F&&(h.lineStart(),h.point(A,U));else if(F&&M)h.point(A,U);else{var G=[T=Math.max(Fa,Math.min(Ro,T)),P=Math.max(Fa,Math.min(Ro,P))],Z=[A=Math.max(Fa,Math.min(Ro,A)),U=Math.max(Fa,Math.min(Ro,U))];mw(G,Z,n,e,t,i)?(M||(h.lineStart(),h.point(G[0],G[1])),h.point(Z[0],Z[1]),F||h.lineEnd(),R=!1):F&&(h.lineStart(),h.point(A,U),R=!1)}T=A,P=U,M=F}return N}}var Gu,Wu,al,ll,Gs={sphere:wn,point:wn,lineStart:_w,lineEnd:wn,polygonStart:wn,polygonEnd:wn};function _w(){Gs.point=vw,Gs.lineEnd=xw}function xw(){Gs.point=Gs.lineEnd=wn}function vw(n,e){n*=ot,e*=ot,Wu=n,al=rt(e),ll=ct(e),Gs.point=yw}function yw(n,e){n*=ot,e*=ot;var t=rt(e),i=ct(e),r=Ht(n-Wu),s=ct(r),o=rt(r),a=i*o,c=ll*t-al*i*s,l=al*t+ll*i*s;Gu.add(di(ur(a*a+c*c),l)),Wu=n,al=t,ll=i}function Sw(n){return Gu=new ar,uc(n,Gs),+Gu}var $u=[null,null],Mw={type:"LineString",coordinates:$u};function Ws(n,e){return $u[0]=n,$u[1]=e,Sw(Mw)}var wp={Feature:function(n,e){return zl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)if(zl(t[i].geometry,e))return!0;return!1}},Tp={Sphere:function(){return!0},Point:function(n,e){return Ap(n.coordinates,e)},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Ap(t[i],e))return!0;return!1},LineString:function(n,e){return Rp(n.coordinates,e)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Rp(t[i],e))return!0;return!1},Polygon:function(n,e){return Cp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Cp(t[i],e))return!0;return!1},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)if(zl(t[i],e))return!0;return!1}};function zl(n,e){return n&&Tp.hasOwnProperty(n.type)?Tp[n.type](n,e):!1}function Ap(n,e){return Ws(n,e)===0}function Rp(n,e){for(var t,i,r,s=0,o=n.length;s<o;s++){if(i=Ws(n[s],e),i===0||s>0&&(r=Ws(n[s],n[s-1]),r>0&&t<=r&&i<=r&&(t+i-r)*(1-Math.pow((t-i)/r,2))<Tl*r))return!0;t=i}return!1}function Cp(n,e){return!!vg(n.map(Ew),Sg(e))}function Ew(n){return n=n.map(Sg),n.pop(),n}function Sg(n){return[n[0]*ot,n[1]*ot]}function bw(n,e){return(n&&wp.hasOwnProperty(n.type)?wp[n.type]:zl)(n,e)}function ww(n,e){var t=n[0]*ot,i=n[1]*ot,r=e[0]*ot,s=e[1]*ot,o=ct(i),a=rt(i),c=ct(s),l=rt(s),h=o*ct(t),f=o*rt(t),u=c*ct(r),p=c*rt(r),g=2*hr(ur(lp(s-i)+o*c*lp(r-t))),y=rt(g),x=g?function(_){var T=rt(_*=g)/y,P=rt(g-_)/y,M=P*h+T*u,I=P*f+T*p,R=P*a+T*l;return[di(I,M)*en,di(R,ur(M*M+I*I))*en]}:function(){return[t*en,i*en]};return x.distance=g,x}const Pp=n=>n;var $s=1/0,kl=$s,$o=-$s,Vl=$o,Ip={point:Tw,lineStart:wn,lineEnd:wn,polygonStart:wn,polygonEnd:wn,result:function(){var n=[[$s,kl],[$o,Vl]];return $o=Vl=-(kl=$s=1/0),n}};function Tw(n,e){n<$s&&($s=n),n>$o&&($o=n),e<kl&&(kl=e),e>Vl&&(Vl=e)}function Rh(n){return function(e){var t=new Xu;for(var i in n)t[i]=n[i];return t.stream=e,t}}function Xu(){}Xu.prototype={constructor:Xu,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ch(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),uc(t,n.stream(Ip)),e(Ip.result()),i!=null&&n.clipExtent(i),n}function Mg(n,e,t){return Ch(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,c])},t)}function Aw(n,e,t){return Mg(n,[[0,0],e],t)}function Rw(n,e,t){return Ch(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];n.scale(150*s).translate([o,a])},t)}function Cw(n,e,t){return Ch(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([o,a])},t)}var Dp=16,Pw=ct(30*ot);function Lp(n,e){return+e?Dw(n,e):Iw(n)}function Iw(n){return Rh({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function Dw(n,e){function t(i,r,s,o,a,c,l,h,f,u,p,g,y,x){var _=l-i,T=h-r,P=_*_+T*T;if(P>4*e&&y--){var M=o+u,I=a+p,R=c+g,N=ur(M*M+I*I+R*R),S=hr(R/=N),w=Ht(Ht(R)-1)<Ct||Ht(s-f)<Ct?(s+f)/2:di(I,M),z=n(w,S),O=z[0],B=z[1],L=O-i,V=B-r,A=T*L-_*V;(A*A/P>e||Ht((_*L+T*V)/P-.5)>.3||o*u+a*p+c*g<Pw)&&(t(i,r,s,o,a,c,O,B,w,M/=N,I/=N,R,y,x),x.point(O,B),t(O,B,w,M,I,R,l,h,f,u,p,g,y,x))}}return function(i){var r,s,o,a,c,l,h,f,u,p,g,y,x={point:_,lineStart:T,lineEnd:M,polygonStart:function(){i.polygonStart(),x.lineStart=I},polygonEnd:function(){i.polygonEnd(),x.lineStart=T}};function _(S,w){S=n(S,w),i.point(S[0],S[1])}function T(){f=NaN,x.point=P,i.lineStart()}function P(S,w){var z=es([S,w]),O=n(S,w);t(f,u,h,p,g,y,f=O[0],u=O[1],h=S,p=z[0],g=z[1],y=z[2],Dp,i),i.point(f,u)}function M(){x.point=_,i.lineEnd()}function I(){T(),x.point=R,x.lineEnd=N}function R(S,w){P(r=S,w),s=f,o=u,a=p,c=g,l=y,x.point=P}function N(){t(f,u,h,p,g,y,s,o,r,a,c,l,Dp,i),x.lineEnd=M,M()}return x}}var Lw=Rh({point:function(n,e){this.stream.point(n*ot,e*ot)}});function Nw(n){return Rh({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function Ow(n,e,t,i,r){function s(o,a){return o*=i,a*=r,[e+n*o,t-n*a]}return s.invert=function(o,a){return[(o-e)/n*i,(t-a)/n*r]},s}function Np(n,e,t,i,r,s){if(!s)return Ow(n,e,t,i,r);var o=ct(s),a=rt(s),c=o*n,l=a*n,h=o/n,f=a/n,u=(a*t-o*e)/n,p=(a*e+o*t)/n;function g(y,x){return y*=i,x*=r,[c*y-l*x+e,t-l*y-c*x]}return g.invert=function(y,x){return[i*(h*y-f*x+u),r*(p-f*y-h*x)]},g}function Uw(n){return Fw(function(){return n})()}function Fw(n){var e,t=150,i=480,r=250,s=0,o=0,a=0,c=0,l=0,h,f=0,u=1,p=1,g=null,y=bp,x=null,_,T,P,M=Pp,I=.5,R,N,S,w,z;function O(A){return S(A[0]*ot,A[1]*ot)}function B(A){return A=S.invert(A[0],A[1]),A&&[A[0]*en,A[1]*en]}O.stream=function(A){return w&&z===A?w:w=Lw(Nw(h)(y(R(M(z=A)))))},O.preclip=function(A){return arguments.length?(y=A,g=void 0,V()):y},O.postclip=function(A){return arguments.length?(M=A,x=_=T=P=null,V()):M},O.clipAngle=function(A){return arguments.length?(y=+A?pw(g=A*ot):(g=null,bp),V()):g*en},O.clipExtent=function(A){return arguments.length?(M=A==null?(x=_=T=P=null,Pp):gw(x=+A[0][0],_=+A[0][1],T=+A[1][0],P=+A[1][1]),V()):x==null?null:[[x,_],[T,P]]},O.scale=function(A){return arguments.length?(t=+A,L()):t},O.translate=function(A){return arguments.length?(i=+A[0],r=+A[1],L()):[i,r]},O.center=function(A){return arguments.length?(s=A[0]%360*ot,o=A[1]%360*ot,L()):[s*en,o*en]},O.rotate=function(A){return arguments.length?(a=A[0]%360*ot,c=A[1]%360*ot,l=A.length>2?A[2]%360*ot:0,L()):[a*en,c*en,l*en]},O.angle=function(A){return arguments.length?(f=A%360*ot,L()):f*en},O.reflectX=function(A){return arguments.length?(u=A?-1:1,L()):u<0},O.reflectY=function(A){return arguments.length?(p=A?-1:1,L()):p<0},O.precision=function(A){return arguments.length?(R=Lp(N,I=A*A),V()):ur(I)},O.fitExtent=function(A,U){return Mg(O,A,U)},O.fitSize=function(A,U){return Aw(O,A,U)},O.fitWidth=function(A,U){return Rw(O,A,U)},O.fitHeight=function(A,U){return Cw(O,A,U)};function L(){var A=Np(t,0,0,u,p,f).apply(null,e(s,o)),U=Np(t,i-A[0],r-A[1],u,p,f);return h=gg(a,c,l),N=Vu(e,U),S=Vu(h,N),R=Lp(N,I),V()}function V(){return w=z=null,O}return function(){return e=n.apply(this,arguments),O.invert=e.invert&&B,L()}}function Bw(n){return function(e,t){var i=ur(e*e+t*t),r=n(i),s=rt(r),o=ct(r);return[di(e*s,i*o),hr(i&&t*s/i)]}}function Eg(n,e){var t=ct(e),i=1+ct(n)*t;return[t*rt(n)/i,rt(e)/i]}Eg.invert=Bw(function(n){return 2*rg(n)});function zw(){return Uw(Eg).scale(250).clipAngle(142)}const Op=1e-6;class Xr{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t,i=+i;const r=e+i,s=t;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${r},${s}`:(Math.abs(this._x1-r)>Op||Math.abs(this._y1-s)>Op)&&(this._+="L"+r+","+s),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=r},${this._y1=s}`)}rect(e,t,i,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+r}h${-i}Z`}value(){return this._||null}}class qu{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class kw{constructor(e,[t,i,r,s]=[0,0,960,500]){if(!((r=+r)>=(t=+t))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=r,this.xmin=t,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:i},vectors:r}=this;let s,o;const a=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let y=0,x=0,_=i.length,T,P;y<_;y+=3,x+=2){const M=i[y]*2,I=i[y+1]*2,R=i[y+2]*2,N=e[M],S=e[M+1],w=e[I],z=e[I+1],O=e[R],B=e[R+1],L=w-N,V=z-S,A=O-N,U=B-S,F=(L*U-V*A)*2;if(Math.abs(F)<1e-9){if(s===void 0){s=o=0;for(const Z of t)s+=e[Z*2],o+=e[Z*2+1];s/=t.length,o/=t.length}const G=1e9*Math.sign((s-N)*U-(o-S)*A);T=(N+O)/2-G*U,P=(S+B)/2+G*A}else{const G=1/F,Z=L*L+V*V,te=A*A+U*U;T=N+(U*Z-V*te)*G,P=S+(L*te-A*Z)*G}a[x]=T,a[x+1]=P}let c=t[t.length-1],l,h=c*4,f,u=e[2*c],p,g=e[2*c+1];r.fill(0);for(let y=0;y<t.length;++y)c=t[y],l=h,f=u,p=g,h=c*4,u=e[2*c],g=e[2*c+1],r[l+2]=r[h]=p-g,r[l+3]=r[h+1]=u-f}render(e){const t=e==null?e=new Xr:void 0,{delaunay:{halfedges:i,inedges:r,hull:s},circumcenters:o,vectors:a}=this;if(s.length<=1)return null;for(let h=0,f=i.length;h<f;++h){const u=i[h];if(u<h)continue;const p=Math.floor(h/3)*2,g=Math.floor(u/3)*2,y=o[p],x=o[p+1],_=o[g],T=o[g+1];this._renderSegment(y,x,_,T,e)}let c,l=s[s.length-1];for(let h=0;h<s.length;++h){c=l,l=s[h];const f=Math.floor(r[l]/3)*2,u=o[f],p=o[f+1],g=c*4,y=this._project(u,p,a[g+2],a[g+3]);y&&this._renderSegment(u,p,y[0],y[1],e)}return t&&t.value()}renderBounds(e){const t=e==null?e=new Xr:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const i=t==null?t=new Xr:void 0,r=this._clip(e);if(r===null||!r.length)return;t.moveTo(r[0],r[1]);let s=r.length;for(;r[0]===r[s-2]&&r[1]===r[s-1]&&s>1;)s-=2;for(let o=2;o<s;o+=2)(r[o]!==r[o-2]||r[o+1]!==r[o-1])&&t.lineTo(r[o],r[o+1]);return t.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){const r=this.cellPolygon(t);r&&(r.index=t,yield r)}}cellPolygon(e){const t=new qu;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,r,s){let o;const a=this._regioncode(e,t),c=this._regioncode(i,r);a===0&&c===0?(s.moveTo(e,t),s.lineTo(i,r)):(o=this._clipSegment(e,t,i,r,a,c))&&(s.moveTo(o[0],o[1]),s.lineTo(o[2],o[3]))}contains(e,t,i){return t=+t,t!==t||(i=+i,i!==i)?!1:this.delaunay._step(e,t,i)===e}*neighbors(e){const t=this._clip(e);if(t)for(const i of this.delaunay.neighbors(e)){const r=this._clip(i);if(r){e:for(let s=0,o=t.length;s<o;s+=2)for(let a=0,c=r.length;a<c;a+=2)if(t[s]===r[a]&&t[s+1]===r[a+1]&&t[(s+2)%o]===r[(a+c-2)%c]&&t[(s+3)%o]===r[(a+c-1)%c]){yield i;break e}}}}_cell(e){const{circumcenters:t,delaunay:{inedges:i,halfedges:r,triangles:s}}=this,o=i[e];if(o===-1)return null;const a=[];let c=o;do{const l=Math.floor(c/3);if(a.push(t[l*2],t[l*2+1]),c=c%3===2?c-2:c+1,s[c]!==e)break;c=r[c]}while(c!==o&&c!==-1);return a}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const t=this._cell(e);if(t===null)return null;const{vectors:i}=this,r=e*4;return this._simplify(i[r]||i[r+1]?this._clipInfinite(e,t,i[r],i[r+1],i[r+2],i[r+3]):this._clipFinite(e,t))}_clipFinite(e,t){const i=t.length;let r=null,s,o,a=t[i-2],c=t[i-1],l,h=this._regioncode(a,c),f,u=0;for(let p=0;p<i;p+=2)if(s=a,o=c,a=t[p],c=t[p+1],l=h,h=this._regioncode(a,c),l===0&&h===0)f=u,u=0,r?r.push(a,c):r=[a,c];else{let g,y,x,_,T;if(l===0){if((g=this._clipSegment(s,o,a,c,l,h))===null)continue;[y,x,_,T]=g}else{if((g=this._clipSegment(a,c,s,o,h,l))===null)continue;[_,T,y,x]=g,f=u,u=this._edgecode(y,x),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(y,x):r=[y,x]}f=u,u=this._edgecode(_,T),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(_,T):r=[_,T]}if(r)f=u,u=this._edgecode(r[0],r[1]),f&&u&&this._edge(e,f,u,r,r.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return r}_clipSegment(e,t,i,r,s,o){const a=s<o;for(a&&([e,t,i,r,s,o]=[i,r,e,t,o,s]);;){if(s===0&&o===0)return a?[i,r,e,t]:[e,t,i,r];if(s&o)return null;let c,l,h=s||o;h&8?(c=e+(i-e)*(this.ymax-t)/(r-t),l=this.ymax):h&4?(c=e+(i-e)*(this.ymin-t)/(r-t),l=this.ymin):h&2?(l=t+(r-t)*(this.xmax-e)/(i-e),c=this.xmax):(l=t+(r-t)*(this.xmin-e)/(i-e),c=this.xmin),s?(e=c,t=l,s=this._regioncode(e,t)):(i=c,r=l,o=this._regioncode(i,r))}}_clipInfinite(e,t,i,r,s,o){let a=Array.from(t),c;if((c=this._project(a[0],a[1],i,r))&&a.unshift(c[0],c[1]),(c=this._project(a[a.length-2],a[a.length-1],s,o))&&a.push(c[0],c[1]),a=this._clipFinite(e,a))for(let l=0,h=a.length,f,u=this._edgecode(a[h-2],a[h-1]);l<h;l+=2)f=u,u=this._edgecode(a[l],a[l+1]),f&&u&&(l=this._edge(e,f,u,a,l),h=a.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(a=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return a}_edge(e,t,i,r,s){for(;t!==i;){let o,a;switch(t){case 5:t=4;continue;case 4:t=6,o=this.xmax,a=this.ymin;break;case 6:t=2;continue;case 2:t=10,o=this.xmax,a=this.ymax;break;case 10:t=8;continue;case 8:t=9,o=this.xmin,a=this.ymax;break;case 9:t=1;continue;case 1:t=5,o=this.xmin,a=this.ymin;break}(r[s]!==o||r[s+1]!==a)&&this.contains(e,o,a)&&(r.splice(s,0,o,a),s+=2)}return s}_project(e,t,i,r){let s=1/0,o,a,c;if(r<0){if(t<=this.ymin)return null;(o=(this.ymin-t)/r)<s&&(c=this.ymin,a=e+(s=o)*i)}else if(r>0){if(t>=this.ymax)return null;(o=(this.ymax-t)/r)<s&&(c=this.ymax,a=e+(s=o)*i)}if(i>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/i)<s&&(a=this.xmax,c=t+(s=o)*r)}else if(i<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/i)<s&&(a=this.xmin,c=t+(s=o)*r)}return[a,c]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){const i=(t+2)%e.length,r=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[r]||e[t+1]===e[i+1]&&e[i+1]===e[r+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}const Vw=2*Math.PI,As=Math.pow;function Hw(n){return n[0]}function Gw(n){return n[1]}function Ww(n){const{triangles:e,coords:t}=n;for(let i=0;i<e.length;i+=3){const r=2*e[i],s=2*e[i+1],o=2*e[i+2];if((t[o]-t[r])*(t[s+1]-t[r+1])-(t[s]-t[r])*(t[o+1]-t[r+1])>1e-10)return!1}return!0}function $w(n,e,t){return[n+Math.sin(n+e)*t,e+Math.cos(n-e)*t]}class Ph{static from(e,t=Hw,i=Gw,r){return new Ph("length"in e?Xw(e,t,i,r):Float64Array.from(qw(e,t,i,r)))}constructor(e){this._delaunator=new Wo(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&Ww(e)){this.collinear=Int32Array.from({length:t.length/2},(u,p)=>p).sort((u,p)=>t[2*u]-t[2*p]||t[2*u+1]-t[2*p+1]);const c=this.collinear[0],l=this.collinear[this.collinear.length-1],h=[t[2*c],t[2*c+1],t[2*l],t[2*l+1]],f=1e-8*Math.hypot(h[3]-h[1],h[2]-h[0]);for(let u=0,p=t.length/2;u<p;++u){const g=$w(t[2*u],t[2*u+1],f);t[2*u]=g[0],t[2*u+1]=g[1]}this._delaunator=new Wo(t)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1);for(let c=0,l=i.length;c<l;++c){const h=s[c%3===2?c-2:c+1];(i[c]===-1||o[h]===-1)&&(o[h]=c)}for(let c=0,l=r.length;c<l;++c)a[r[c]]=c;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],o[r[0]]=1,r.length===2&&(o[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new kw(this,e)}*neighbors(e){const{inedges:t,hull:i,_hullIndex:r,halfedges:s,triangles:o,collinear:a}=this;if(a){const f=a.indexOf(e);f>0&&(yield a[f-1]),f<a.length-1&&(yield a[f+1]);return}const c=t[e];if(c===-1)return;let l=c,h=-1;do{if(yield h=o[l],l=l%3===2?l-2:l+1,o[l]!==e)return;if(l=s[l],l===-1){const f=i[(r[e]+1)%i.length];f!==h&&(yield f);return}}while(l!==c)}find(e,t,i=0){if(e=+e,e!==e||(t=+t,t!==t))return-1;const r=i;let s;for(;(s=this._step(i,e,t))>=0&&s!==i&&s!==r;)i=s;return s}_step(e,t,i){const{inedges:r,hull:s,_hullIndex:o,halfedges:a,triangles:c,points:l}=this;if(r[e]===-1||!l.length)return(e+1)%(l.length>>1);let h=e,f=As(t-l[e*2],2)+As(i-l[e*2+1],2);const u=r[e];let p=u;do{let g=c[p];const y=As(t-l[g*2],2)+As(i-l[g*2+1],2);if(y<f&&(f=y,h=g),p=p%3===2?p-2:p+1,c[p]!==e)break;if(p=a[p],p===-1){if(p=s[(o[e]+1)%s.length],p!==g&&As(t-l[p*2],2)+As(i-l[p*2+1],2)<f)return p;break}}while(p!==u);return h}render(e){const t=e==null?e=new Xr:void 0,{points:i,halfedges:r,triangles:s}=this;for(let o=0,a=r.length;o<a;++o){const c=r[o];if(c<o)continue;const l=s[o]*2,h=s[c]*2;e.moveTo(i[l],i[l+1]),e.lineTo(i[h],i[h+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){t===void 0&&(!e||typeof e.moveTo!="function")&&(t=e,e=null),t=t==null?2:+t;const i=e==null?e=new Xr:void 0,{points:r}=this;for(let s=0,o=r.length;s<o;s+=2){const a=r[s],c=r[s+1];e.moveTo(a+t,c),e.arc(a,c,t,0,Vw)}return i&&i.value()}renderHull(e){const t=e==null?e=new Xr:void 0,{hull:i,points:r}=this,s=i[0]*2,o=i.length;e.moveTo(r[s],r[s+1]);for(let a=1;a<o;++a){const c=2*i[a];e.lineTo(r[c],r[c+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new qu;return this.renderHull(e),e.value()}renderTriangle(e,t){const i=t==null?t=new Xr:void 0,{points:r,triangles:s}=this,o=s[e*=3]*2,a=s[e+1]*2,c=s[e+2]*2;return t.moveTo(r[o],r[o+1]),t.lineTo(r[a],r[a+1]),t.lineTo(r[c],r[c+1]),t.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new qu;return this.renderTriangle(e,t),t.value()}}function Xw(n,e,t,i){const r=n.length,s=new Float64Array(r*2);for(let o=0;o<r;++o){const a=n[o];s[o*2]=e.call(i,a,o,n),s[o*2+1]=t.call(i,a,o,n)}return s}function*qw(n,e,t,i){let r=0;for(const s of n)yield e.call(i,s,r,n),yield t.call(i,s,r,n),++r}const Ih=Math.PI,Up=Ih/2,Fp=180/Ih,Bp=Ih/180,Yw=Math.atan2,zp=Math.cos,Kw=Math.max,Zw=Math.min,kp=Math.sin,Jw=Math.sign||function(n){return n>0?1:n<0?-1:0},bg=Math.sqrt;function jw(n){return n>1?Up:n<-1?-Up:Math.asin(n)}function wg(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function jn(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Hl(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function Gl(n){var e=bg(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function Dh(n){return[Yw(n[1],n[0])*Fp,jw(Kw(-1,Zw(1,n[2])))*Fp]}function Gi(n){const e=n[0]*Bp,t=n[1]*Bp,i=zp(t);return[i*zp(e),i*kp(e),kp(t)]}function Lh(n){return n=n.map(e=>Gi(e)),wg(n[0],jn(n[2],n[1]))}function Qw(n){const e=tT(n),t=iT(e),i=nT(t,n),r=sT(t,n.length),s=eT(r,n),o=rT(t,n),{polygons:a,centers:c}=oT(o,t,n),l=aT(a),h=cT(t,n),f=lT(i,t);return{delaunay:e,edges:i,triangles:t,centers:c,neighbors:r,polygons:a,mesh:l,hull:h,urquhart:f,find:s}}function eT(n,e){function t(i,r){let s=i[0]-r[0],o=i[1]-r[1],a=i[2]-r[2];return s*s+o*o+a*a}return function(r,s,o){o===void 0&&(o=0);let a,c,l=o;const h=Gi([r,s]);do a=o,o=null,c=t(h,Gi(e[a])),n[a].forEach(f=>{let u=t(h,Gi(e[f]));if(u<c){c=u,o=f,l=f;return}});while(o!==null);return l}}function tT(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=aw(n[e]),i=zw().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(i);const r=[];let s=1;for(let f=0,u=n.length;f<u;f++){let p=n[f][0]**2+n[f][1]**2;!isFinite(p)||p>1e32?r.push(f):p>s&&(s=p)}const o=1e6*bg(s);r.forEach(f=>n[f]=[o,0]),n.push([0,o]),n.push([-o,0]),n.push([0,-o]);const a=Ph.from(n);a.projection=i;const{triangles:c,halfedges:l,inedges:h}=a;for(let f=0,u=l.length;f<u;f++)if(l[f]<0){const p=f%3==2?f-2:f+1,g=f%3==0?f+2:f-1,y=l[p],x=l[g];l[y]=x,l[x]=y,l[p]=l[g]=-1,c[f]=c[p]=c[g]=e,h[c[y]]=y%3==0?y+2:y-1,h[c[x]]=x%3==0?x+2:x-1,f+=2-f%3}else c[f]>n.length-3-1&&(c[f]=e);return a}function nT(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(i=>{if(i[0]!==i[1]&&!(Lh(i.map(r=>e[r]))<0))for(let r=0,s;r<3;r++)s=(r+1)%3,t.add(Ml([i[r],i[s]]).join("-"))}),Array.from(t,i=>i.split("-").map(Number)))}function iT(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let i=0,r=e.length/3;i<r;i++){const s=e[3*i],o=e[3*i+1],a=e[3*i+2];s!==o&&o!==a&&t.push([s,a,o])}return t}function rT(n,e){return n.map(t=>{const i=t.map(s=>e[s]).map(Gi),r=Hl(Hl(jn(i[1],i[0]),jn(i[2],i[1])),jn(i[0],i[2]));return Dh(Gl(r))})}function sT(n,e){const t=[];return n.forEach(i=>{for(let r=0;r<3;r++){const s=i[r],o=i[(r+1)%3];t[s]=t[s]||[],t[s].push(o)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function oT(n,e,t){const i=[],r=n.slice();if(e.length===0){if(t.length<2)return{polygons:i,centers:r};if(t.length===2){const a=Gi(t[0]),c=Gi(t[1]),l=Gl(Hl(a,c)),h=Gl(jn(a,c)),f=jn(l,h),u=[l,jn(l,f),jn(jn(l,f),f),jn(jn(jn(l,f),f),f)].map(Dh).map(o);return i.push(u),i.push(u.slice().reverse()),{polygons:i,centers:r}}}e.forEach((a,c)=>{for(let l=0;l<3;l++){const h=a[l],f=a[(l+1)%3],u=a[(l+2)%3];i[h]=i[h]||[],i[h].push([f,u,c,[h,f,u]])}});const s=i.map(a=>{const c=[a[0][2]];let l=a[0][1];for(let h=1;h<a.length;h++)for(let f=0;f<a.length;f++)if(a[f][0]==l){l=a[f][1],c.push(a[f][2]);break}if(c.length>2)return c;if(c.length==2){const h=Vp(t[a[0][3][0]],t[a[0][3][1]],r[c[0]]),f=Vp(t[a[0][3][2]],t[a[0][3][0]],r[c[0]]),u=o(h),p=o(f);return[c[0],p,c[1],u]}});function o(a){let c=-1;return r.slice(e.length,1/0).forEach((l,h)=>{l[0]===a[0]&&l[1]===a[1]&&(c=h+e.length)}),c<0&&(c=r.length,r.push(a)),c}return{polygons:s,centers:r}}function Vp(n,e,t){n=Gi(n),e=Gi(e),t=Gi(t);const i=Jw(wg(jn(e,n),t));return Dh(Gl(Hl(n,e)).map(r=>i*r))}function aT(n){const e=[];return n.forEach(t=>{if(!t)return;let i=t[t.length-1];for(let r of t)r>i&&e.push([i,r]),i=r}),e}function lT(n,e){return function(t){const i=new Map,r=new Map;return n.forEach((s,o)=>{const a=s.join("-");i.set(a,t[o]),r.set(a,!0)}),e.forEach(s=>{let o=0,a=-1;for(let c=0;c<3;c++){let l=Ml([s[c],s[(c+1)%3]]).join("-");i.get(l)>o&&(o=i.get(l),a=l)}r.set(a,!1)}),n.map(s=>r.get(s.join("-")))}}function cT(n,e){const t=new Set,i=[];n.map(a=>{if(!(Lh(a.map(c=>e[c>e.length?0:c]))>1e-12))for(let c=0;c<3;c++){let l=[a[c],a[(c+1)%3]],h=`${l[0]}-${l[1]}`;t.has(h)?t.delete(h):t.add(`${l[1]}-${l[0]}`)}});const r=new Map;let s;if(t.forEach(a=>{a=a.split("-").map(Number),r.set(a[0],a[1]),s=a[0]}),s===void 0)return i;let o=s;do{i.push(o);let a=r.get(o);r.set(o,-1),o=a}while(o>-1&&o!==s);return i}function fT(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const i=e._data.map(r=>[e._vx(r),e._vy(r),r]).filter(r=>isFinite(r[0]+r[1]));e.points=i.map(r=>[r[0],r[1]]),e.valid=i.map(r=>r[2]),e.delaunay=Qw(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return xp(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return xp(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((r,s)=>i.features.push({type:"Feature",geometry:r?{type:"Polygon",coordinates:[[...r,r[0]].map(o=>e.delaunay.centers[o])]}:null,properties:{site:e.valid[s],sitecoordinates:e.points[s],neighbours:e.delaunay.neighbors[s]}})),e.valid.length===1&&i.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),i},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((i,r)=>(i=i.map(s=>e.points[s]),i.center=e.delaunay.centers[r],i)).filter(i=>Lh(i)>0).map(i=>({type:"Feature",properties:{circumcenter:i.center},geometry:{type:"Polygon",coordinates:[[...i,i[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i=e.delaunay.edges.map(s=>Ws(e.points[s[0]],e.points[s[1]])),r=e.delaunay.urquhart(i);return{type:"FeatureCollection",features:e.delaunay.edges.map((s,o)=>({type:"Feature",properties:{source:e.valid[s[0]],target:e.valid[s[1]],length:i[o],urquhart:!!r[o]},geometry:{type:"LineString",coordinates:[e.points[s[0]],e.points[s[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(i=>[e.points[i[0]],e.points[i[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:i,polygons:r}=e.delaunay,s=[];for(const o of r)if(o)for(let a=o.length,c=o[a-1],l=o[0],h=0;h<a;c=l,l=o[++h])l>c&&s.push([i[c],i[l]]);return{type:"MultiLineString",coordinates:s}},e._found=void 0,e.find=function(t,i,r){if(e._found=e.delaunay.find(t,i,e._found),!r||Ws([t,i],e.points[e._found])<r)return e._found},e.hull=function(t){t!==void 0&&e(t);const i=e.delaunay.hull,r=e.points;return i.length===0?null:{type:"Polygon",coordinates:[[...i.map(s=>r[s]),r[i[0]]]]}},n?e(n):e}function uT(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Nh(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Tg(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function ea(){}var Xo=.7,Wl=1/Xo,Us="\\s*([+-]?\\d+)\\s*",qo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Wi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hT=/^#([0-9a-f]{3,8})$/,dT=new RegExp(`^rgb\\(${Us},${Us},${Us}\\)$`),pT=new RegExp(`^rgb\\(${Wi},${Wi},${Wi}\\)$`),mT=new RegExp(`^rgba\\(${Us},${Us},${Us},${qo}\\)$`),gT=new RegExp(`^rgba\\(${Wi},${Wi},${Wi},${qo}\\)$`),_T=new RegExp(`^hsl\\(${qo},${Wi},${Wi}\\)$`),xT=new RegExp(`^hsla\\(${qo},${Wi},${Wi},${qo}\\)$`),Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Nh(ea,Yo,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Gp,formatHex:Gp,formatHex8:vT,formatHsl:yT,formatRgb:Wp,toString:Wp});function Gp(){return this.rgb().formatHex()}function vT(){return this.rgb().formatHex8()}function yT(){return Ag(this).formatHsl()}function Wp(){return this.rgb().formatRgb()}function Yo(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=hT.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?$p(e):t===3?new Xn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Ba(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Ba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=dT.exec(n))?new Xn(e[1],e[2],e[3],1):(e=pT.exec(n))?new Xn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=mT.exec(n))?Ba(e[1],e[2],e[3],e[4]):(e=gT.exec(n))?Ba(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=_T.exec(n))?Yp(e[1],e[2]/100,e[3]/100,1):(e=xT.exec(n))?Yp(e[1],e[2]/100,e[3]/100,e[4]):Hp.hasOwnProperty(n)?$p(Hp[n]):n==="transparent"?new Xn(NaN,NaN,NaN,0):null}function $p(n){return new Xn(n>>16&255,n>>8&255,n&255,1)}function Ba(n,e,t,i){return i<=0&&(n=e=t=NaN),new Xn(n,e,t,i)}function ST(n){return n instanceof ea||(n=Yo(n)),n?(n=n.rgb(),new Xn(n.r,n.g,n.b,n.opacity)):new Xn}function Yu(n,e,t,i){return arguments.length===1?ST(n):new Xn(n,e,t,i??1)}function Xn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Nh(Xn,Yu,Tg(ea,{brighter(n){return n=n==null?Wl:Math.pow(Wl,n),new Xn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Xo:Math.pow(Xo,n),new Xn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Xn(Yr(this.r),Yr(this.g),Yr(this.b),$l(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xp,formatHex:Xp,formatHex8:MT,formatRgb:qp,toString:qp}));function Xp(){return`#${qr(this.r)}${qr(this.g)}${qr(this.b)}`}function MT(){return`#${qr(this.r)}${qr(this.g)}${qr(this.b)}${qr((isNaN(this.opacity)?1:this.opacity)*255)}`}function qp(){const n=$l(this.opacity);return`${n===1?"rgb(":"rgba("}${Yr(this.r)}, ${Yr(this.g)}, ${Yr(this.b)}${n===1?")":`, ${n})`}`}function $l(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Yr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function qr(n){return n=Yr(n),(n<16?"0":"")+n.toString(16)}function Yp(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new bi(n,e,t,i)}function Ag(n){if(n instanceof bi)return new bi(n.h,n.s,n.l,n.opacity);if(n instanceof ea||(n=Yo(n)),!n)return new bi;if(n instanceof bi)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,a=s-r,c=(s+r)/2;return a?(e===s?o=(t-i)/a+(t<i)*6:t===s?o=(i-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new bi(o,a,c,n.opacity)}function ET(n,e,t,i){return arguments.length===1?Ag(n):new bi(n,e,t,i??1)}function bi(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Nh(bi,ET,Tg(ea,{brighter(n){return n=n==null?Wl:Math.pow(Wl,n),new bi(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Xo:Math.pow(Xo,n),new bi(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Xn(of(n>=240?n-240:n+120,r,i),of(n,r,i),of(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new bi(Kp(this.h),za(this.s),za(this.l),$l(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=$l(this.opacity);return`${n===1?"hsl(":"hsla("}${Kp(this.h)}, ${za(this.s)*100}%, ${za(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Kp(n){return n=(n||0)%360,n<0?n+360:n}function za(n){return Math.max(0,Math.min(1,n||0))}function of(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const Oh=n=>()=>n;function bT(n,e){return function(t){return n+t*e}}function wT(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function TT(n){return(n=+n)==1?Rg:function(e,t){return t-e?wT(e,t,n):Oh(isNaN(e)?t:e)}}function Rg(n,e){var t=e-n;return t?bT(n,t):Oh(isNaN(n)?e:n)}const Zp=(function n(e){var t=TT(e);function i(r,s){var o=t((r=Yu(r)).r,(s=Yu(s)).r),a=t(r.g,s.g),c=t(r.b,s.b),l=Rg(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function AT(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function RT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function CT(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),o;for(o=0;o<i;++o)r[o]=Uh(n[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function PT(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function Xl(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function IT(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=Uh(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var Ku=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,af=new RegExp(Ku.source,"g");function DT(n){return function(){return n}}function LT(n){return function(e){return n(e)+""}}function NT(n,e){var t=Ku.lastIndex=af.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",e=e+"";(i=Ku.exec(n))&&(r=af.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:Xl(i,r)})),t=af.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?LT(c[0].x):DT(e):(e=c.length,function(l){for(var h=0,f;h<e;++h)a[(f=c[h]).i]=f.x(l);return a.join("")})}function Uh(n,e){var t=typeof e,i;return e==null||t==="boolean"?Oh(e):(t==="number"?Xl:t==="string"?(i=Yo(e))?(e=i,Zp):NT:e instanceof Yo?Zp:e instanceof Date?PT:RT(e)?AT:Array.isArray(e)?CT:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?IT:Xl)(n,e)}function OT(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function UT(n){return function(){return n}}function FT(n){return+n}var Jp=[0,1];function Is(n){return n}function Zu(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:UT(isNaN(e)?NaN:.5)}function BT(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function zT(n,e,t){var i=n[0],r=n[1],s=e[0],o=e[1];return r<i?(i=Zu(r,i),s=t(o,s)):(i=Zu(i,r),s=t(s,o)),function(a){return s(i(a))}}function kT(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=Zu(n[o],n[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var c=m1(n,a,1,i)-1;return s[c](r[c](a))}}function VT(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function HT(){var n=Jp,e=Jp,t=Uh,i,r,s,o=Is,a,c,l;function h(){var u=Math.min(n.length,e.length);return o!==Is&&(o=BT(n[0],n[u-1])),a=u>2?kT:zT,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=a(n.map(i),e,t)))(i(o(u)))}return f.invert=function(u){return o(r((l||(l=a(e,n.map(i),Xl)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,FT),h()):n.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),t=OT,h()},f.clamp=function(u){return arguments.length?(o=u?!0:Is,h()):o!==Is},f.interpolate=function(u){return arguments.length?(t=u,h()):t},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,p){return i=u,r=p,h()}}function GT(){return HT()(Is,Is)}function WT(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function ql(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function Xs(n){return n=ql(Math.abs(n)),n?n[1]:NaN}function $T(n,e){return function(t,i){for(var r=t.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(t.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(e)}}function XT(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var qT=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yl(n){if(!(e=qT.exec(n)))throw new Error("invalid format: "+n);var e;return new Fh({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Yl.prototype=Fh.prototype;function Fh(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Fh.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function YT(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var Kl;function KT(n,e){var t=ql(n,e);if(!t)return Kl=void 0,n.toPrecision(e);var i=t[0],r=t[1],s=r-(Kl=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+ql(n,Math.max(0,e+s-1))[0]}function jp(n,e){var t=ql(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const Qp={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:WT,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>jp(n*100,e),r:jp,s:KT,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function em(n){return n}var tm=Array.prototype.map,nm=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function ZT(n){var e=n.grouping===void 0||n.thousands===void 0?em:$T(tm.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?em:XT(tm.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=Yl(f);var p=f.fill,g=f.align,y=f.sign,x=f.symbol,_=f.zero,T=f.width,P=f.comma,M=f.precision,I=f.trim,R=f.type;R==="n"?(P=!0,R="g"):Qp[R]||(M===void 0&&(M=12),I=!0,R="g"),(_||p==="0"&&g==="=")&&(_=!0,p="0",g="=");var N=(u&&u.prefix!==void 0?u.prefix:"")+(x==="$"?t:x==="#"&&/[boxX]/.test(R)?"0"+R.toLowerCase():""),S=(x==="$"?i:/[%p]/.test(R)?o:"")+(u&&u.suffix!==void 0?u.suffix:""),w=Qp[R],z=/[defgprs%]/.test(R);M=M===void 0?6:/[gprs]/.test(R)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function O(B){var L=N,V=S,A,U,F;if(R==="c")V=w(B)+V,B="";else{B=+B;var G=B<0||1/B<0;if(B=isNaN(B)?c:w(Math.abs(B),M),I&&(B=YT(B)),G&&+B==0&&y!=="+"&&(G=!1),L=(G?y==="("?y:a:y==="-"||y==="("?"":y)+L,V=(R==="s"&&!isNaN(B)&&Kl!==void 0?nm[8+Kl/3]:"")+V+(G&&y==="("?")":""),z){for(A=-1,U=B.length;++A<U;)if(F=B.charCodeAt(A),48>F||F>57){V=(F===46?r+B.slice(A+1):B.slice(A))+V,B=B.slice(0,A);break}}}P&&!_&&(B=e(B,1/0));var Z=L.length+B.length+V.length,te=Z<T?new Array(T-Z+1).join(p):"";switch(P&&_&&(B=e(te+B,te.length?T-V.length:1/0),te=""),g){case"<":B=L+B+V+te;break;case"=":B=L+te+B+V;break;case"^":B=te.slice(0,Z=te.length>>1)+L+B+V+te.slice(Z);break;default:B=te+L+B+V;break}return s(B)}return O.toString=function(){return f+""},O}function h(f,u){var p=Math.max(-8,Math.min(8,Math.floor(Xs(u)/3)))*3,g=Math.pow(10,-p),y=l((f=Yl(f),f.type="f",f),{suffix:nm[8+p/3]});return function(x){return y(g*x)}}return{format:l,formatPrefix:h}}var ka,Cg,Pg;JT({thousands:",",grouping:[3],currency:["$",""]});function JT(n){return ka=ZT(n),Cg=ka.format,Pg=ka.formatPrefix,ka}function jT(n){return Math.max(0,-Xs(Math.abs(n)))}function QT(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Xs(e)/3)))*3-Xs(Math.abs(n)))}function eA(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Xs(e)-Xs(n))+1}function tA(n,e,t,i){var r=y1(n,e,t),s;switch(i=Yl(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=QT(r,o))&&(i.precision=s),Pg(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=eA(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=jT(r))&&(i.precision=s-(i.type==="%")*2);break}}return Cg(i)}function nA(n){var e=n.domain;return n.ticks=function(t){var i=e();return v1(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return tA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,h=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);h-- >0;){if(l=bu(o,a,t),l===c)return i[r]=o,i[s]=a,e(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function Ju(){var n=GT();return n.copy=function(){return VT(n,Ju())},uT.apply(n,arguments),nA(n)}function ju(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function iA(n){if(Array.isArray(n))return n}function rA(n){if(Array.isArray(n))return ju(n)}function sA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function oA(n,e,t){return e=Zl(e),pA(n,Ig()?Reflect.construct(e,[],Zl(n).constructor):e.apply(n,t))}function aA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function lA(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function Zl(n){return Zl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Zl(n)}function cA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Qu(n,e)}function Ig(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ig=function(){return!!n})()}function fA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function uA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(h){l=!0,r=h}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function hA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sA(n)}function Qu(n,e){return Qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},Qu(n,e)}function Oi(n,e){return iA(n)||uA(n,e)||Dg(n,e)||hA()}function lf(n){return rA(n)||fA(n)||Dg(n)||dA()}function Dg(n,e){if(n){if(typeof n=="string")return ju(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ju(n,e):void 0}}function mA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,i=t===void 0?1/0:t,r=gA(n,i),s=zo(r),o=_A(n,i),a=[].concat(lf(s),lf(o)),c={type:"Polygon",coordinates:n},l=hg(c),h=Oi(l,2),f=Oi(h[0],2),u=f[0],p=f[1],g=Oi(h[1],2),y=g[0],x=g[1],_=u>y||x>=89||p<=-89,T=[];if(_){var P=fT(a).triangles(),M=new Map(a.map(function(F,G){var Z=Oi(F,2),te=Z[0],ue=Z[1];return["".concat(te,"-").concat(ue),G]}));P.features.forEach(function(F){var G,Z=F.geometry.coordinates[0].slice(0,3).reverse(),te=[];if(Z.forEach(function(_e){var Re=Oi(_e,2),st=Re[0],et=Re[1],he="".concat(st,"-").concat(et);M.has(he)&&te.push(M.get(he))}),te.length===3){if(te.some(function(_e){return _e<s.length})){var ue=F.properties.circumcenter;if(!eh(ue,c,_))return}(G=T).push.apply(G,te)}})}else if(o.length)for(var w=Wo.from(a),z=function(G){var Z,te=[2,1,0].map(function(Re){return w.triangles[G+Re]}),ue=te.map(function(Re){return a[Re]});if(te.some(function(Re){return Re<s.length})){var _e=[0,1].map(function(Re){return S1(ue,function(st){return st[Re]})});if(!eh(_e,c,_))return 1}(Z=T).push.apply(Z,lf(te))},O=0,B=w.triangles.length;O<B;O+=3)z(O);else{var I=ig(r),R=I.vertices,N=I.holes,S=N===void 0?[]:N;T=E1(R,S,2)}var L=Ju(Ml(a,function(F){return F[0]}),[0,1]),V=Ju(Ml(a,function(F){return F[1]}),[0,1]),A=a.map(function(F){var G=Oi(F,2),Z=G[0],te=G[1];return[L(Z),V(te)]}),U={points:a,indices:T,uvs:A};return{contour:r,triangles:U}}function gA(n,e){return n.map(function(t){var i=[],r;return t.forEach(function(s){if(r){var o=Ws(s,r)*180/Math.PI;if(o>e)for(var a=ww(r,s),c=1/Math.ceil(o/e),l=c;l<1;)i.push(a(l)),l+=c}i.push(r=s)}),i})}function _A(n,e){var t={type:"Polygon",coordinates:n},i=hg(t),r=Oi(i,2),s=Oi(r[0],2),o=s[0],a=s[1],c=Oi(r[1],2),l=c[0],h=c[1];if(Math.min(Math.abs(l-o),Math.abs(h-a))<e)return[];var f=o>l||h>=89||a<=-89;return xA(e,{minLng:o,maxLng:l,minLat:a,maxLat:h}).filter(function(u){return eh(u,t,f)})}function xA(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,i=e.maxLng,r=e.minLat,s=e.maxLat,o=Math.round(Math.pow(360/n,2)/Math.PI),a=(1+Math.sqrt(5))/2,c=function(_){return _/a*360%360-180},l=function(_){return Math.acos(2*_/o-1)/Math.PI*180-90},h=function(_){return o*(Math.cos((_+90)*Math.PI/180)+1)/2},f=[s!==void 0?Math.ceil(h(s)):0,r!==void 0?Math.floor(h(r)):o-1],u=t===void 0&&i===void 0?function(){return!0}:t===void 0?function(x){return x<=i}:i===void 0?function(x){return x>=t}:i>=t?function(x){return x>=t&&x<=i}:function(x){return x>=t||x<=i},p=[],g=f[0];g<=f[1];g++){var y=c(g);u(y)&&p.push([y,l(g)])}return p}function eh(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?bw(e,n):Y0(n,e)}var cl=window.THREE?window.THREE:{BufferGeometry:yn,Float32BufferAttribute:$t},im=new cl.BufferGeometry().setAttribute?"setAttribute":"addAttribute",vA=(function(n){function e(t,i,r,s,o,a,c){var l;aA(this,e),l=oA(this,e),l.type="ConicPolygonGeometry",l.parameters={polygonGeoJson:t,bottomHeight:i,topHeight:r,closedBottom:s,closedTop:o,includeSides:a,curvatureResolution:c},i=i||0,r=r||1,s=s!==void 0?s:!0,o=o!==void 0?o:!0,a=a!==void 0?a:!0,c=c||5;var h=mA(t,{resolution:c}),f=h.contour,u=h.triangles,p=zo(u.uvs),g=[],y=[],x=[],_=0,T=function(N){var S=Math.round(g.length/3),w=x.length;g=g.concat(N.vertices),y=y.concat(N.uvs),x=x.concat(S?N.indices.map(function(z){return z+S}):N.indices),l.addGroup(w,x.length-w,_++)};a&&T(M()),s&&T(I(i,!1)),o&&T(I(r,!0)),l.setIndex(x),l[im]("position",new cl.Float32BufferAttribute(g,3)),l[im]("uv",new cl.Float32BufferAttribute(y,2)),l.computeVertexNormals();function P(R,N){var S=typeof N=="function"?N:function(){return N},w=R.map(function(z){return z.map(function(O){var B=Oi(O,2),L=B[0],V=B[1];return yA(V,L,S(L,V))})});return ig(w)}function M(){for(var R=P(f,i),N=R.vertices,S=R.holes,w=P(f,r),z=w.vertices,O=zo([z,N]),B=Math.round(z.length/3),L=new Set(S),V=0,A=[],U=0;U<B;U++){var F=U+1;if(F===B)F=V;else if(L.has(F)){var G=F;F=V,V=G}A.push(U,U+B,F+B),A.push(F+B,F,U)}for(var Z=[],te=1;te>=0;te--)for(var ue=0;ue<B;ue+=1)Z.push(ue/(B-1),te);return{indices:A,vertices:O,uvs:Z}}function I(R){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:N?u.indices:u.indices.slice().reverse(),vertices:P([u.points],R).vertices,uvs:p}}return l}return cA(e,n),lA(e)})(cl.BufferGeometry);function yA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=(90-n)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}const rm=new Ir,Va=new X;class Lg extends yv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new $t(e,3)),this.setAttribute("uv",new $t(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new xu(t,6,1);return this.setAttribute("instanceStart",new ki(i,3,0)),this.setAttribute("instanceEnd",new ki(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new xu(t,6,1);return this.setAttribute("instanceColorStart",new ki(i,3,0)),this.setAttribute("instanceColorEnd",new ki(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new lv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),rm.setFromBufferAttribute(t),this.boundingBox.union(rm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Va.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Va)),Va.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Va));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}De.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Wn.line={uniforms:Sh.merge([De.common,De.fog,De.line]),vertexShader:`
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
		`};class Ng extends hi{constructor(e){super({type:"LineMaterial",uniforms:Sh.clone(Wn.line.uniforms),vertexShader:Wn.line.vertexShader,fragmentShader:Wn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const cf=new Ut,sm=new X,om=new X,gn=new Ut,_n=new Ut,Li=new Ut,ff=new X,uf=new qt,xn=new Av,am=new X,Ha=new Ir,Ga=new Zo,Ni=new Ut;let Ui,Kr;function lm(n,e,t){return Ni.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ni.multiplyScalar(1/Ni.w),Ni.x=Kr/t.width,Ni.y=Kr/t.height,Ni.applyMatrix4(n.projectionMatrixInverse),Ni.multiplyScalar(1/Ni.w),Math.abs(Math.max(Ni.x,Ni.y))}function SA(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){xn.start.fromBufferAttribute(r,a),xn.end.fromBufferAttribute(s,a),xn.applyMatrix4(t);const l=new X,h=new X;Ui.distanceSqToSegment(xn.start,xn.end,h,l),h.distanceTo(l)<Kr*.5&&e.push({point:h,pointOnLine:l,distance:Ui.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function MA(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),f=-e.near;Ui.at(1,Li),Li.w=1,Li.applyMatrix4(e.matrixWorldInverse),Li.applyMatrix4(i),Li.multiplyScalar(1/Li.w),Li.x*=s.x/2,Li.y*=s.y/2,Li.z=0,ff.copy(Li),uf.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(gn.fromBufferAttribute(c,u),_n.fromBufferAttribute(l,u),gn.w=1,_n.w=1,gn.applyMatrix4(uf),_n.applyMatrix4(uf),gn.z>f&&_n.z>f)continue;if(gn.z>f){const P=gn.z-_n.z,M=(gn.z-f)/P;gn.lerp(_n,M)}else if(_n.z>f){const P=_n.z-gn.z,M=(_n.z-f)/P;_n.lerp(gn,M)}gn.applyMatrix4(i),_n.applyMatrix4(i),gn.multiplyScalar(1/gn.w),_n.multiplyScalar(1/_n.w),gn.x*=s.x/2,gn.y*=s.y/2,_n.x*=s.x/2,_n.y*=s.y/2,xn.start.copy(gn),xn.start.z=0,xn.end.copy(_n),xn.end.z=0;const y=xn.closestPointToPointParameter(ff,!0);xn.at(y,am);const x=M0.lerp(gn.z,_n.z,y),_=x>=-1&&x<=1,T=ff.distanceTo(am)<Kr*.5;if(_&&T){xn.start.fromBufferAttribute(c,u),xn.end.fromBufferAttribute(l,u),xn.start.applyMatrix4(o),xn.end.applyMatrix4(o);const P=new X,M=new X;Ui.distanceSqToSegment(xn.start,xn.end,M,P),t.push({point:M,pointOnLine:P,distance:Ui.origin.distanceTo(M),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class EA extends zt{constructor(e=new Lg,t=new Ng({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)sm.fromBufferAttribute(t,o),om.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+sm.distanceTo(om);const s=new xu(r,2,1);return e.setAttribute("instanceDistanceStart",new ki(s,1,0)),e.setAttribute("instanceDistanceEnd",new ki(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Ui=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Kr=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Ga.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=Kr*.5;else{const f=Math.max(r.near,Ga.distanceToPoint(Ui.origin));l=lm(r,f,c.resolution)}if(Ga.radius+=l,Ui.intersectsSphere(Ga)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ha.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Kr*.5;else{const f=Math.max(r.near,Ha.distanceToPoint(Ui.origin));h=lm(r,f,c.resolution)}Ha.expandByScalar(h),Ui.intersectsBox(Ha)!==!1&&(i?SA(this,t):MA(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(cf),this.material.uniforms.resolution.value.set(cf.z,cf.w))}}const Og={Africa:16757575,Asia:9427311,Europe:9300160,"North America":16353195,"South America":16767309,Oceania:12160754,Antarctica:16055293,"Seven seas (open ocean)":12160754},bA=14211288,wA=3112916,TA=9358834,Ug=100.12,AA=3,cm=100.2,RA=100.28,CA=2373214,PA=16777215,IA=15398655,Jl=[15224125,4026088,3129201,15905076,10120654];let Wa=null;function Ko(){if(!Wa){const n=new Uint8Array([90,150,210,255]);Wa=new I0(n,n.length,1,fh),Wa.needsUpdate=!0}return Wa}function hf(n){return new Vs({color:n,gradientMap:Ko()})}const yo=Math.PI/180,fm=(n,e,t)=>[t*Math.cos(e*yo)*Math.sin(n*yo),t*Math.sin(e*yo),t*Math.cos(e*yo)*Math.cos(n*yo)];function DA(n){const e=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=r.geometry.type==="Polygon"?[r.geometry.coordinates]:r.geometry.coordinates;for(const o of s)for(const a of o)for(let c=0;c<a.length-1;c++){const l=a[c],h=a[c+1];e.push(...fm(l[0],l[1],cm),...fm(h[0],h[1],cm))}}const t=new Lg;t.setPositions(e);const i=new Ng({color:CA,linewidth:2.5,transparent:!0,opacity:.9});return i.resolution.set(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{i.resolution.set(window.innerWidth,window.innerHeight)}),new EA(t,i)}const LA=-63;function NA(){const n=(90-LA)*Math.PI/180,e=new zt(new is(Ug,48,12,0,Math.PI*2,n,Math.PI-n),new Vs({color:Og.Antarctica,gradientMap:Ko()}));return e.name="ATA",e}function OA(n){const e=new fi,t=new Map,i=new Map,r=new zt(new is(Su,64,64),new Vs({color:wA,gradientMap:Ko()}));e.add(r),e.add(NA()),e.add(DA(n));for(const s of n.features){if(s.properties.id==="ATA")continue;const o=Og[s.properties.continent]??bA,a=new Vs({color:o,gradientMap:Ko()});t.set(s.properties.id,a),i.set(s.properties.id,s.properties.continent);const c=s.geometry.type==="Polygon"?[s.geometry.coordinates]:s.geometry.coordinates,l=new fi;l.name=s.properties.id;for(const h of c){const f=new vA(h,Su,Ug,!1,!0,!1,AA);l.add(new zt(f,a))}e.add(l)}return{group:e,countryMaterials:t,continentOf:i}}function UA(){const n=new hi({transparent:!0,side:kn,depthWrite:!1,uniforms:{glowColor:{value:new _t(IA)}},vertexShader:`
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
      }`});return new zt(new is(104.5,64,64),n)}function FA(n){const e=new Zx;e.background=new _t(TA);const t=new li(60,1,.1,2e3);t.position.set(0,0,300);const i=new Eb({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=new xv(16774368,2.4);r.position.set(200,150,100);const s=new mv(12376319,3813160,.9);e.add(r,s,new vv(16777215,.35)),e.add(UA());const o=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",o),o(),{scene:e,camera:t,renderer:i}}async function BA(){const n=async o=>{const a=await fetch(o);if(!a.ok)throw new Error(`Failed to load ${o}`);return await a.json()},[t,i,r,s]=await Promise.all([n("./data/world.geo.json"),n("./data/countries.json"),n("./data/landmarks.json"),n("./data/riddles.json")]);return{world:t,countries:i,landmarks:r,riddles:s}}const zA=8;function kA(){const n=new Set;window.addEventListener("keydown",i=>n.add(i.code)),window.addEventListener("keyup",i=>n.delete(i.code));const e=(i,r)=>(i.some(s=>n.has(s))?1:0)-(r.some(s=>n.has(s))?1:0),t={throttle:0,turn:0,pitch:0};return{read(i){const r={throttle:e(["KeyW"],["KeyS"]),turn:e(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),pitch:e(["ArrowUp","KeyR"],["ArrowDown","KeyF"])},s=Math.min(1,zA*i);return t.throttle+=(r.throttle-t.throttle)*s,t.turn+=(r.turn-t.turn)*s,t.pitch+=(r.pitch-t.pitch)*s,{...t}}}}function jl(n=15224125,e="seaplane"){const t=new fi,i=hf(n),r=hf(16249832),s=e==="lifter"?.85:.6,o=new zt(new yl(s,2.4,4,8),i);o.rotation.x=Math.PI/2;const a=e==="stunt"?6:e==="jet"?3.6:5,c=e==="jet"?1.6:1.1,l=new zt(new nr(a,.15,c),r);e==="jet"&&(l.position.z=-.4);const h=new zt(new nr(1.8,.12,.6),r);h.position.set(0,.1,-1.6);const f=new zt(new nr(.12,.9,.6),i);f.position.set(0,.5,-1.6);const u=new zt(new yh(e==="jet"?.35:.45,e==="jet"?1.4:.8,8),r);if(u.rotation.x=Math.PI/2,u.position.z=e==="jet"?2.3:2,t.add(o,l,h,f,u),e==="seaplane")for(const p of[-1,1]){const g=new zt(new yl(.18,1.6,4,6),r);g.rotation.x=Math.PI/2,g.position.set(p*.9,-.8,.2),t.add(g)}if(e==="lifter"){const p=f.clone();p.position.y=.9,p.scale.set(1,.6,1),t.add(p)}if(e!=="jet"){const p=new fi;p.name="propeller";const g=hf(3815994),y=new fi;y.name="propellerBlades";for(const _ of[0,Math.PI/2]){const T=new zt(new nr(.12,1.7,.06),g);T.rotation.z=_,y.add(T)}const x=new zt(new vh(.95,24),new Jo({color:14540253,transparent:!0,opacity:.25,side:Mi}));x.name="propellerDisc",x.visible=!1,p.add(y,x),p.position.z=2.45,t.add(p)}return t}const VA=.35,HA=8,GA=52;function WA(n){const e=Math.min(1,Math.max(0,n));return{spinRadPerS:HA+GA*e,blurVisible:e>=VA}}const um=n=>new X(n.x,n.y,n.z),$A=1/60,XA=12,qA=.15,YA=5,KA=25,ZA=.55,JA=.28,hm=.1,jA=58,QA=16,eR=.06;function dm(n,e){let t=0,i=0;const r=n.getObjectByName("propellerBlades"),s=n.getObjectByName("propellerDisc");return{update(o,a){const c=um(Cr(o.lat,o.lon,o.altKm)),l=fc(o.lat,o.lon,o.headingDeg,YA),h=um(Cr(l.lat,l.lon,o.altKm)),f=c.clone().normalize();n.position.copy(c),n.up.copy(f),n.lookAt(h),t+=(a.turn*ZA-t)*hm,i+=(a.pitch*JA-i)*hm,n.rotateZ(t),n.rotateX(-i);const u=h.clone().sub(c).normalize(),p=c.clone().addScaledVector(u,-30).addScaledVector(f,XA);e.position.lerp(p,qA),e.up.copy(f);const g=c.clone().addScaledVector(u,KA);e.lookAt(g);const y=Math.min(1,Math.max(0,(o.speedKmh-Bo)/(bh-Bo))),x=jA+QA*y;if(e.fov+=(x-e.fov)*eR,e.updateProjectionMatrix(),r&&s){const _=WA(y);r.rotation.z+=_.spinRadPerS*$A,r.visible=!_.blurVisible,s.visible=_.blurVisible}}}}function tR(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:16px;left:16px;color:#fff;font:600 16px system-ui;background:rgba(11,16,38,.7);padding:10px 14px;border-radius:10px;pointer-events:none";const t=document.createElement("div"),i=document.createElement("div");return i.style.cssText="font-weight:400;font-size:13px;opacity:.8;margin-top:4px",e.append(t,i),n.appendChild(e),{setCountry(r){t.textContent=r?`Flying over: ${r}`:"Flying over: open ocean"},setTelemetry(r){i.textContent=`${Math.round(r.speedKmh)} km/h · hdg ${Math.round(r.headingDeg)}°`}}}const $a=.15,pm=n=>new X(n.x,n.y,n.z);function nR(n){const e=new Map;return{sync(t,i){const r=new Set;t.players.forEach((s,o)=>{if(o===i)return;r.add(o);const a={lat:s.lat,lon:s.lon,altKm:s.altKm,headingDeg:s.headingDeg,speedKmh:s.speedKmh},c=e.get(o);if(c)c.targetState=a;else{const l=jl(Jl[s.colorIdx%Jl.length]);n.add(l),e.set(o,{mesh:l,current:a,targetState:a})}});for(const[s,o]of e)r.has(s)||(n.remove(o.mesh),e.delete(s))},update(){for(const t of e.values()){const i=t.current,r=t.targetState;i.lat+=(r.lat-i.lat)*$a,i.lon+=((r.lon-i.lon+540)%360-180)*$a,i.lon=(i.lon+540)%360-180,i.altKm+=(r.altKm-i.altKm)*$a,i.headingDeg=r1(i.headingDeg,r.headingDeg,$a);const s=pm(Cr(i.lat,i.lon,i.altKm)),o=fc(i.lat,i.lon,i.headingDeg,5);t.mesh.position.copy(s),t.mesh.up.copy(s.clone().normalize()),t.mesh.lookAt(pm(Cr(o.lat,o.lon,i.altKm)))}}}}const iR=16765471;function rR(n){const e=new zt(new sc(2.5,2.5,60,24,1,!0),new Jo({color:iR,transparent:!0,opacity:.45,side:Mi,depthWrite:!1}));return e.visible=!1,n.add(e),{showAt(t,i){const r=Cr(t,i,0),s=new X(r.x,r.y,r.z).normalize();e.position.copy(s.clone().multiplyScalar(130)),e.quaternion.setFromUnitVectors(new X(0,1,0),s),e.visible=!0},hide(){e.visible=!1},update(t){if(!e.visible)return;const i=e.material;i.opacity=.35+.2*Math.sin(t*3)}}}const Fg=4,df=.12,Bg=64;function sR(){return{puffs:[],spawnTimerS:0}}function oR(n,e,t,i){const r=n.puffs.map(a=>({...a,ageS:a.ageS+e})).filter(a=>a.ageS<Fg);let s=n.spawnTimerS+e;if(!i)return{puffs:r,spawnTimerS:Math.min(s,df)};const o=[...r];for(;s>=df;)s-=df,o.length<Bg&&o.push({x:t.x,y:t.y,z:t.z,ageS:0});return{puffs:o,spawnTimerS:s}}const aR=.9,lR=2.2,mm=.95,pf=.35,gm=3,cR="#d7e7f2";function fR(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)throw new Error("2d canvas unavailable");const r=[{x:64,y:68,r:30},{x:40+n*3,y:62,r:20+n},{x:90-n*4,y:62,r:22},{x:56+n*5,y:46,r:17+n*2}],s=o=>{for(const a of r)i.beginPath(),i.arc(a.x,a.y+o,a.r,0,Math.PI*2),i.fill()};return i.fillStyle=cR,s(6),i.fillStyle="#ffffff",s(0),new L0(t)}function uR(n){const e=[];for(let s=0;s<gm;s++)e.push(fR(s));const t=[],i=[];for(let s=0;s<Bg;s++){const o=new C0({map:e[s%gm],transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.9}),a=new tv(o);a.visible=!1,t.push(a),i.push(.8+Math.random()*.5),n.add(a)}let r=sR();return{update(s,o,a){r=oR(r,s,o,a);for(let c=0;c<t.length;c++){const l=t[c],h=r.puffs[c];if(!h){l.visible=!1;continue}const f=h.ageS/Fg;l.visible=!0,l.position.set(h.x,h.y,h.z);const u=(aR+lR*f)*i[c];l.scale.set(u,u,1),l.material.opacity=f<pf?mm:mm*(1-(f-pf)/(1-pf))}}}}function hc(n){return/^[A-Za-z]{2}$/.test(n)?String.fromCodePoint(...[...n.toUpperCase()].map(e=>127462+(e.charCodeAt(0)-65))):"🏳️"}const hR={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function dR(n){let e=-1,t=0,i=0;const r=()=>{e===-1&&t===0||(e=-1,t=0,n.banner.hide(),n.hints.clear(),n.beacon.hide())},s=(o,a)=>{const c=o.legs[a];return c?{type:c.legType,countryId:c.countryId,zone:{lat:c.zoneLat,lon:c.zoneLon},label:c.label,sublabel:c.sublabel}:null};return{update(o,a,c,l){var x,_;if(!o||o.phase!=="racing"){r();return}const h=o.players.get(a);if(!h){r();return}const f=s(o,h.legIndex);if(!f){r();return}if(h.legIndex!==e||o.countdownEndsAt!==t){if(!(o.countdownEndsAt!==t)&&e>=0&&h.legIndex>e){const P=o.legs[e],M=((x=n.countries[(P==null?void 0:P.countryId)??""])==null?void 0:x.name)??"";n.banner.toast(`✅ ${M}! Leg ${e+1} of ${o.legs.length} done`)}e=h.legIndex,t=o.countdownEndsAt,i=0,n.hints.setTarget(f.countryId),n.beacon.showAt(f.zone.lat,f.zone.lon),n.banner.show(f,hc(((_=n.countries[f.countryId])==null?void 0:_.cca2)??""))}const u=o.difficulty,p=Math.max(0,(Date.now()-h.legStartedAt)/1e3),g=Eu(p,u);n.hints.setFlags(g),n.banner.setCompass(g.compass?(K0(c.lat,c.lon,f.zone.lat,f.zone.lon)-c.headingDeg+360)%360:null);const y=Z0(c,f,i,l);i=y.inZone?y.dwellS:0,n.banner.setDwell(f.type==="refuel"&&y.inZone?i/wh:null),n.banner.setWarning(y.requirementBlocked?hR[f.type]??null:null)}}}const _m=["🥇","🥈","🥉","4.","5."];function pR(n){return n.sort((e,t)=>{const i=e.player.placement||99,r=t.player.placement||99;return i!==r?i-r:t.player.legIndex!==e.player.legIndex?t.player.legIndex-e.player.legIndex:e.player.nickname.localeCompare(t.player.nickname)})}function mR(n){const e=document.createElement("div");return e.style.cssText="position:fixed;top:96px;left:50%;transform:translateX(-50%);color:#fff;font:600 14px system-ui;background:rgba(11,16,38,.7);padding:10px 18px;border-radius:12px;pointer-events:none;text-align:center;z-index:4",n.appendChild(e),{update(t,i,r){var o;const s=[];if(t.players.forEach((a,c)=>s.push({sessionId:c,player:a})),pR(s),t.phase==="countdown"){const a=Math.max(0,Math.ceil((t.countdownEndsAt-Date.now())/1e3));e.innerHTML="",e.textContent=`Contract: ${t.legs.length} legs — starting in ${a}…`}else if(t.phase==="racing")e.innerHTML=s.map(({sessionId:a,player:c})=>{const l=a===i?" (you)":"",h=c.placement>0?`🏁 ${_m[c.placement-1]??c.placement}`:`Leg ${Math.min(c.legIndex+1,t.legs.length)}/${t.legs.length}`;return`<div>🛩 ${c.nickname}${l} — ${h}</div>`}).join("");else if(t.phase==="finished"){const a=s.map(({sessionId:l,player:h})=>{const f=l===i,u=_m[h.placement-1]??`${h.placement}.`;return`<div style="font-size:17px;margin:2px 0;${f?"color:#ffd94d":""}">${u} ${h.nickname}${f?" (you)":""} — ${h.points} pts</div>`}).join(""),c=i===t.hostSessionId?'<button id="race-again" style="margin-top:10px;padding:8px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 15px system-ui;cursor:pointer;pointer-events:auto">Race again</button>':'<div style="opacity:.7;margin-top:8px;font-weight:400">Waiting for the host to start the next race…</div>';e.innerHTML=`<div style="font-size:20px;font-weight:700;margin-bottom:6px">🏁 Race complete</div>${a}${c}`,r&&((o=e.querySelector("#race-again"))==null||o.addEventListener("click",r,{once:!0}))}else e.innerHTML="",e.textContent="";e.style.display=e.textContent||e.innerHTML?"block":"none"}}}const gR="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.75);padding:12px 20px;border-radius:14px;pointer-events:none;text-align:center;min-width:340px;z-index:5",_R="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);color:#fff;font:800 30px system-ui;background:rgba(20,27,61,.92);padding:18px 30px;border-radius:18px;pointer-events:none;text-align:center;z-index:6;transition:opacity .4s ease";function xR(n){const e=document.createElement("div");e.style.cssText=gR,e.style.display="none",e.innerHTML=`
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
    </div>`,n.appendChild(e);const t=s=>e.querySelector(s),i=document.createElement("div");i.style.cssText=_R,i.style.opacity="0",n.appendChild(i);let r=null;return{show(s,o){t("[data-flag]").textContent=s.type==="riddle"?"❓":o,t("[data-label]").textContent=s.label,t("[data-sub]").textContent=s.sublabel,e.style.display="block",this.setCompass(null),this.setDwell(null),this.setWarning(null)},hide(){e.style.display="none"},setCompass(s){const o=t("[data-compass]");s===null?o.style.display="none":(o.style.display="inline-block",o.style.transform=`rotate(${Math.round(s)}deg)`)},setDwell(s){const o=t("[data-dwellwrap]");s===null?o.style.display="none":(o.style.display="block",t("[data-dwell]").style.width=`${Math.min(100,s*100)}%`)},setWarning(s){const o=t("[data-warn]");o.style.display=s?"block":"none",o.textContent=s??""},setClock(s){t("[data-clock]").textContent=s??""},toast(s,o=1800){i.textContent=s,i.style.opacity="1",r&&clearTimeout(r),r=setTimeout(()=>{i.style.opacity="0"},o)}}}function Bh(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var mf={},xm={},vm;function vR(){return vm||(vm=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),xm}var Xa={},th=function(n,e){return th=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},th(n,e)};function zg(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");th(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ql=function(){return Ql=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ql.apply(this,arguments)};function kg(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Vg(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Hg(n,e){return function(t,i){e(t,i,n)}}function Gg(n,e,t,i,r,s){function o(_){if(_!==void 0&&typeof _!="function")throw new TypeError("Function expected");return _}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,u=!1,p=t.length-1;p>=0;p--){var g={};for(var y in i)g[y]=y==="access"?{}:i[y];for(var y in i.access)g.access[y]=i.access[y];g.addInitializer=function(_){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(_||null))};var x=(0,t[p])(a==="accessor"?{get:h.get,set:h.set}:h[c],g);if(a==="accessor"){if(x===void 0)continue;if(x===null||typeof x!="object")throw new TypeError("Object expected");(f=o(x.get))&&(h.get=f),(f=o(x.set))&&(h.set=f),(f=o(x.init))&&r.unshift(f)}else(f=o(x))&&(a==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),u=!0}function Wg(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function $g(n){return typeof n=="symbol"?n:"".concat(n)}function Xg(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function qg(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Yg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(f){o(f)}}function c(h){try{l(i.throw(h))}catch(f){o(f)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Kg(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var dc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function Zg(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&dc(e,n,t)}function ec(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function zh(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function Jg(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(zh(arguments[e]));return n}function jg(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function Qg(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function qs(n){return this instanceof qs?(this.v=n,this):new qs(n)}function e_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,f)}}function a(p,g){i[p]&&(r[p]=function(y){return new Promise(function(x,_){s.push([p,y,x,_])>1||c(p,y)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(y){u(s[0][3],y)}}function l(p){p.value instanceof qs?Promise.resolve(p.value.v).then(h,f):u(s[0][2],p)}function h(p){c("next",p)}function f(p){c("throw",p)}function u(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function t_(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:qs(n[r](o)),done:!1}:s?s(o):o}:s}}function n_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ec=="function"?ec(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function i_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var yR=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},nh=function(n){return nh=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},nh(n)};function r_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=nh(n),i=0;i<t.length;i++)t[i]!=="default"&&dc(e,n,t[i]);return yR(e,n),e}function s_(n){return n&&n.__esModule?n:{default:n}}function o_(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function a_(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function l_(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function c_(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var SR=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function f_(n){function e(s){n.error=n.hasError?new SR(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function u_(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const MR={__extends:zg,__assign:Ql,__rest:kg,__decorate:Vg,__param:Hg,__esDecorate:Gg,__runInitializers:Wg,__propKey:$g,__setFunctionName:Xg,__metadata:qg,__awaiter:Yg,__generator:Kg,__createBinding:dc,__exportStar:Zg,__values:ec,__read:zh,__spread:Jg,__spreadArrays:jg,__spreadArray:Qg,__await:qs,__asyncGenerator:e_,__asyncDelegator:t_,__asyncValues:n_,__makeTemplateObject:i_,__importStar:r_,__importDefault:s_,__classPrivateFieldGet:o_,__classPrivateFieldSet:a_,__classPrivateFieldIn:l_,__addDisposableResource:c_,__disposeResources:f_,__rewriteRelativeImportExtension:u_},ER=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:c_,get __assign(){return Ql},__asyncDelegator:t_,__asyncGenerator:e_,__asyncValues:n_,__await:qs,__awaiter:Yg,__classPrivateFieldGet:o_,__classPrivateFieldIn:l_,__classPrivateFieldSet:a_,__createBinding:dc,__decorate:Vg,__disposeResources:f_,__esDecorate:Gg,__exportStar:Zg,__extends:zg,__generator:Kg,__importDefault:s_,__importStar:r_,__makeTemplateObject:i_,__metadata:qg,__param:Hg,__propKey:$g,__read:zh,__rest:kg,__rewriteRelativeImportExtension:u_,__runInitializers:Wg,__setFunctionName:Xg,__spread:Jg,__spreadArray:Qg,__spreadArrays:jg,__values:ec,default:MR},Symbol.toStringTag,{value:"Module"})),pc=Bh(ER);var gf={},ym;function mc(){return ym||(ym=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(gf)),gf}var _f={},xf={},vf={},Co={exports:{}},bR=Co.exports,Sm;function kh(){return Sm||(Sm=1,(function(n,e){(function(t,i){i(e)})(bR,(function(t){t.OPERATION=void 0,(function(C){C[C.ADD=128]="ADD",C[C.REPLACE=0]="REPLACE",C[C.DELETE=64]="DELETE",C[C.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",C[C.MOVE_AND_ADD=160]="MOVE_AND_ADD",C[C.DELETE_AND_ADD=192]="DELETE_AND_ADD",C[C.CLEAR=10]="CLEAR",C[C.REVERSE=15]="REVERSE",C[C.MOVE=32]="MOVE",C[C.DELETE_BY_REFID=33]="DELETE_BY_REFID",C[C.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",u="~childType",p="~onEncodeEnd",g="~onDecodeEnd",y="~descriptors",x="~__numFields",_="~__refTypeFieldIndexes",T="~__viewFieldIndexes",P="$__fieldIndexesByViewTag";let M;try{M=new TextEncoder}catch{}const I=new ArrayBuffer(8),R=new Int32Array(I),N=new Float32Array(I),S=new Float64Array(I),w=new BigInt64Array(I),O=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(C,d){for(var m=0,v=0,b=0,H=C.length;b<H;b++)m=C.charCodeAt(b),m<128?v+=1:m<2048?v+=2:m<55296||m>=57344?v+=3:(b++,v+=4);return v};function B(C,d,m){for(var v=0,b=0,H=d.length;b<H;b++)v=d.charCodeAt(b),v<128?C[m.offset++]=v:v<2048?(C[m.offset]=192|v>>6,C[m.offset+1]=128|v&63,m.offset+=2):v<55296||v>=57344?(C[m.offset]=224|v>>12,C[m.offset+1]=128|v>>6&63,C[m.offset+2]=128|v&63,m.offset+=3):(b++,v=65536+((v&1023)<<10|d.charCodeAt(b)&1023),C[m.offset]=240|v>>18,C[m.offset+1]=128|v>>12&63,C[m.offset+2]=128|v>>6&63,C[m.offset+3]=128|v&63,m.offset+=4)}function L(C,d,m){C[m.offset++]=d&255}function V(C,d,m){C[m.offset++]=d&255}function A(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255}function U(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255}function F(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255,C[m.offset++]=d>>16&255,C[m.offset++]=d>>24&255}function G(C,d,m){const v=d>>24,b=d>>16,H=d>>8,$=d;C[m.offset++]=$&255,C[m.offset++]=H&255,C[m.offset++]=b&255,C[m.offset++]=v&255}function Z(C,d,m){const v=Math.floor(d/Math.pow(2,32)),b=d>>>0;G(C,b,m),G(C,v,m)}function te(C,d,m){const v=d/Math.pow(2,32)>>0,b=d>>>0;G(C,b,m),G(C,v,m)}function ue(C,d,m){w[0]=BigInt.asIntN(64,d),F(C,R[0],m),F(C,R[1],m)}function _e(C,d,m){w[0]=BigInt.asIntN(64,d),F(C,R[0],m),F(C,R[1],m)}function Re(C,d,m){N[0]=d,F(C,R[0],m)}function st(C,d,m){S[0]=d,F(C,R[0],m),F(C,R[1],m)}function et(C,d,m){C[m.offset++]=d?1:0}function he(C,d,m){d||(d="");let v=O(d,"utf8"),b=0;if(v<32)C[m.offset++]=v|160,b=1;else if(v<256)C[m.offset++]=217,C[m.offset++]=v%255,b=2;else if(v<65536)C[m.offset++]=218,U(C,v,m),b=3;else if(v<4294967296)C[m.offset++]=219,G(C,v,m),b=5;else throw new Error("String too long");return B(C,d,m),b+v}function we(C,d,m){if(isNaN(d))return we(C,0,m);if(isFinite(d)){if(d!==(d|0))return Math.abs(d)<=34028235e31&&(N[0]=d,Math.abs(Math.abs(N[0])-Math.abs(d))<1e-4)?(C[m.offset++]=202,Re(C,d,m),5):(C[m.offset++]=203,st(C,d,m),9)}else return we(C,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,m);return d>=0?d<128?(C[m.offset++]=d&255,1):d<256?(C[m.offset++]=204,C[m.offset++]=d&255,2):d<65536?(C[m.offset++]=205,U(C,d,m),3):d<4294967296?(C[m.offset++]=206,G(C,d,m),5):(C[m.offset++]=207,te(C,d,m),9):d>=-32?(C[m.offset++]=224|d+32,1):d>=-128?(C[m.offset++]=208,L(C,d,m),2):d>=-32768?(C[m.offset++]=209,A(C,d,m),3):d>=-2147483648?(C[m.offset++]=210,F(C,d,m),5):(C[m.offset++]=211,Z(C,d,m),9)}const xe={int8:L,uint8:V,int16:A,uint16:U,int32:F,uint32:G,int64:Z,uint64:te,bigint64:ue,biguint64:_e,float32:Re,float64:st,boolean:et,string:he,number:we,utf8Write:B,utf8Length:O},Qe=new ArrayBuffer(8),Ae=new Int32Array(Qe),Ve=new Float32Array(Qe),at=new Float64Array(Qe),qe=new BigUint64Array(Qe),St=new BigInt64Array(Qe);function dt(C,d,m){m>C.length-d.offset&&(m=C.length-d.offset);for(var v="",b=0,H=d.offset,$=d.offset+m;H<$;H++){var ee=C[H];if((ee&128)===0){v+=String.fromCharCode(ee);continue}if((ee&224)===192){v+=String.fromCharCode((ee&31)<<6|C[++H]&63);continue}if((ee&240)===224){v+=String.fromCharCode((ee&15)<<12|(C[++H]&63)<<6|(C[++H]&63)<<0);continue}if((ee&248)===240){b=(ee&7)<<18|(C[++H]&63)<<12|(C[++H]&63)<<6|(C[++H]&63)<<0,b>=65536?(b-=65536,v+=String.fromCharCode((b>>>10)+55296,(b&1023)+56320)):v+=String.fromCharCode(b);continue}console.error("decode.utf8Read(): Invalid byte "+ee+" at offset "+H+". Skip to end of string: "+(d.offset+m));break}return d.offset+=m,v}function ht(C,d){return Ft(C,d)<<24>>24}function Ft(C,d){return C[d.offset++]}function jt(C,d){return Yt(C,d)<<16>>16}function Yt(C,d){return C[d.offset++]|C[d.offset++]<<8}function Pt(C,d){return C[d.offset++]|C[d.offset++]<<8|C[d.offset++]<<16|C[d.offset++]<<24}function It(C,d){return Pt(C,d)>>>0}function Kt(C,d){return Ae[0]=Pt(C,d),Ve[0]}function Y(C,d){return Ae[0]=Pt(C,d),Ae[1]=Pt(C,d),at[0]}function pn(C,d){const m=It(C,d);return Pt(C,d)*Math.pow(2,32)+m}function Tt(C,d){const m=It(C,d);return It(C,d)*Math.pow(2,32)+m}function k(C,d){return Ae[0]=Pt(C,d),Ae[1]=Pt(C,d),St[0]}function E(C,d){return Ae[0]=Pt(C,d),Ae[1]=Pt(C,d),qe[0]}function j(C,d){return Ft(C,d)>0}function se(C,d){const m=C[d.offset++];let v;return m<192?v=m&31:m===217?v=Ft(C,d):m===218?v=Yt(C,d):m===219&&(v=It(C,d)),dt(C,d,v)}function ce(C,d){const m=C[d.offset++];if(m<128)return m;if(m===202)return Kt(C,d);if(m===203)return Y(C,d);if(m===204)return Ft(C,d);if(m===205)return Yt(C,d);if(m===206)return It(C,d);if(m===207)return Tt(C,d);if(m===208)return ht(C,d);if(m===209)return jt(C,d);if(m===210)return Pt(C,d);if(m===211)return pn(C,d);if(m>223)return(255-m+1)*-1}function be(C,d){const m=C[d.offset];return m<192&&m>160||m===217||m===218||m===219}const Se={utf8Read:dt,int8:ht,uint8:Ft,int16:jt,uint16:Yt,int32:Pt,uint32:It,float32:Kt,float64:Y,int64:pn,uint64:Tt,bigint64:k,biguint64:E,boolean:j,string:se,number:ce,stringCheck:be},fe={},me=new Map;function Me(C,d){d.constructor&&(me.set(d.constructor,C),fe[C]=d),d.encode&&(xe[C]=d.encode),d.decode&&(Se[C]=d.decode)}function Ye(C){return fe[C]}function Le(C){for(const d in C)Me(d,C[d]);return d=>q(d)}const mn=class mn{static register(d){const m=Object.getPrototypeOf(d);if(m!==Ge){let v=mn.inheritedTypes.get(m);v||(v=new Set,mn.inheritedTypes.set(m,v)),v.add(d)}}static cache(d){let m=mn.cachedContexts.get(d);return m||(m=new mn(d),mn.cachedContexts.set(d,m)),m}constructor(d){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},d&&this.discoverTypes(d)}has(d){return this.schemas.has(d)}get(d){return this.types[d]}add(d,m=this.schemas.size){return this.schemas.has(d)?!1:(this.types[m]=d,d[Symbol.metadata]===void 0&&Ze.initialize(d),this.schemas.set(d,m),!0)}getTypeId(d){return this.schemas.get(d)}discoverTypes(d,m,v,b){var ee,Q;if(b&&this.registerFilteredByParent(d,m,v),!this.add(d))return;(ee=mn.inheritedTypes.get(d))==null||ee.forEach(ae=>{this.discoverTypes(ae,m,v,b)});let H=d;for(;(H=Object.getPrototypeOf(H))&&H!==Ge&&H!==Function.prototype;)this.discoverTypes(H);const $=d[Q=Symbol.metadata]??(d[Q]={});$[T]&&(this.hasFilters=!0);for(const ae in $){const pe=ae,de=$[pe].type,ge=$[pe].tag!==void 0;if(typeof de!="string")if(typeof de=="function")this.discoverTypes(de,d,pe,b||ge);else{const Be=Object.values(de)[0];if(typeof Be=="string")continue;this.discoverTypes(Be,d,pe,b||ge)}}}registerFilteredByParent(d,m,v){let H=`${this.schemas.get(d)??this.schemas.size}`;m&&(H+=`-${this.schemas.get(m)}`),H+=`-${v}`,this.parentFiltered[H]=!0}debug(){let d="";for(const m in this.parentFiltered){const v=m.split("-").map(Number),b=v.pop();d+=`
		`,d+=`${m}: ${v.reverse().map((H,$)=>{const ee=this.types[H],Q=ee[Symbol.metadata];let ae=ee.name;return $===0&&(ae+=`[${Q[b].name}]`),`${ae}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${d}`}};mn.inheritedTypes=new Map,mn.cachedContexts=new Map;let Ee=mn;function $e(C){if(Array.isArray(C))return{array:$e(C[0])};if(typeof C.type<"u")return C.type;if(tt(C))return Object.keys(C).every(d=>typeof C[d]=="string")?"string":"number";if(typeof C=="object"&&C!==null){const d=Object.keys(C).find(m=>fe[m]!==void 0);if(d)return C[d]=$e(C[d]),C}return C}function tt(C){if(typeof C=="function"&&C[Symbol.metadata])return!1;const d=Object.keys(C),m=d.filter(v=>/\d+/.test(v));return!!(m.length>0&&m.length===d.length/2&&C[C[m[0]]]==m[0]||d.length>0&&d.every(v=>typeof C[v]=="string"&&C[v]===v))}const Ze={addField(C,d,m,v,b){if(d>64)throw new Error(`Can't define field '${m}'.
Schema instances may only have up to 64 fields.`);C[d]=Object.assign(C[d]||{},{type:$e(v),index:d,name:m}),Object.defineProperty(C,y,{value:C[y]||{},enumerable:!1,configurable:!0}),b?(C[y][m]=b,C[y][`_${m}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):C[y][m]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(C,x,{value:d,enumerable:!1,configurable:!0}),Object.defineProperty(C,m,{value:d,enumerable:!1,configurable:!0}),typeof C[d].type!="string"&&(C[_]===void 0&&Object.defineProperty(C,_,{value:[],enumerable:!1,configurable:!0}),C[_].push(d))},setTag(C,d,m){const v=C[d],b=C[v];b.tag=m,C[T]||(Object.defineProperty(C,T,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(C,P,{value:{},enumerable:!1,configurable:!0})),C[T].push(v),C[P][m]||(C[P][m]=[]),C[P][m].push(v)},setFields(C,d){const m=C.prototype.constructor;Ee.register(m);const v=Object.getPrototypeOf(m),b=v&&v[Symbol.metadata],H=Ze.initialize(m);m[s]||(m[s]=Ge[s]),m[o]||(m[o]=Ge[o]),m[a]||(m[a]=Ge[a]),m.prototype.toJSON||(m.prototype.toJSON=Ge.prototype.toJSON);let $=H[x]??(b&&b[x])??-1;$++;for(const ee in d){const Q=$e(d[ee]),ae=typeof Object.keys(Q)[0]=="string"&&Ye(Object.keys(Q)[0]),pe=ae?Object.values(Q)[0]:Q;Ze.addField(H,$,ee,Q,oe(`_${ee}`,$,pe,ae)),$++}return C},isDeprecated(C,d){return C[d].deprecated===!0},init(C){const d={};C[Symbol.metadata]=d,Object.defineProperty(d,x,{value:0,enumerable:!1,configurable:!0})},initialize(C){const d=Object.getPrototypeOf(C),m=d[Symbol.metadata];let v=C[Symbol.metadata]??Object.create(null);return d!==Ge&&v===m&&(v=Object.create(null),m&&(Object.setPrototypeOf(v,m),Object.defineProperty(v,x,{value:m[x],enumerable:!1,configurable:!0,writable:!0}),m[T]!==void 0&&(Object.defineProperty(v,T,{value:[...m[T]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(v,P,{value:{...m[P]},enumerable:!1,configurable:!0,writable:!0})),m[_]!==void 0&&Object.defineProperty(v,_,{value:[...m[_]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(v,y,{value:{...m[y]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(C,Symbol.metadata,{value:v,writable:!1,configurable:!0}),v},isValidInstance(C){return C.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(C.constructor[Symbol.metadata],x)},getFields(C){const d=C[Symbol.metadata],m={};for(let v=0;v<=d[x];v++)m[d[v].name]=d[v].type;return m},hasViewTagAtIndex(C,d){var m;return(m=C==null?void 0:C[T])==null?void 0:m.includes(d)}};function W(C){return{indexes:{},operations:[],queueRootNode:C}}function Te(){return{next:void 0,tail:void 0}}function le(C,d){const m=C.indexes[d];m===void 0?C.indexes[d]=C.operations.push(d)-1:C.operations[m]=d}function Pe(C,d){var v;let m=C.indexes[d];m===void 0&&(m=Object.values(C.indexes).at(-1),d=(v=Object.entries(C.indexes).find(([b,H])=>H===m))==null?void 0:v[0]),C.operations[m]=void 0,delete C.indexes[d]}class Ie{constructor(d){var m;this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=d,this.metadata=d.constructor[Symbol.metadata],(m=this.metadata)!=null&&m[T]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(d){this.root=d;const m=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,m),m&&this.forEachChild((v,b)=>{v.root!==d?v.setRoot(d):d.add(v)})}setParent(d,m,v){if(this.addParent(d,v),!m)return;const b=m.add(this);m!==this.root&&(this.root=m,this.checkIsFiltered(d,v,b)),b&&this.forEachChild((H,$)=>{if(H.root===m){m.add(H),m.moveNextToParent(H);return}H.setParent(this.ref,m,$)})}forEachChild(d){var m,v;if(this.ref[u]){if(typeof this.ref[u]!="string")for(const[b,H]of this.ref.entries())H&&d(H[f],((m=this.indexes)==null?void 0:m[b])??b)}else for(const b of((v=this.metadata)==null?void 0:v[_])??[]){const H=this.metadata[b],$=this.ref[H.name];$&&d($[f],b)}}operation(d){var m,v;this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-d),(m=this.root)==null||m.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-d),(v=this.root)==null||v.enqueueChangeTree(this,"changes"))}change(d,m=t.OPERATION.ADD){var $,ee,Q;const v=this.isFiltered||((ee=($=this.metadata)==null?void 0:$[d])==null?void 0:ee.tag)!==void 0,b=v?this.filteredChanges:this.changes,H=this.indexedOperations[d];if(!H||H===t.OPERATION.DELETE){const ae=H&&H===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:m;this.indexedOperations[d]=ae}le(b,d),v?(le(this.allFilteredChanges,d),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(le(this.allChanges,d),(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(d){const m=this.isFiltered?this.filteredChanges:this.changes,v={},b={};for(const H in this.indexedOperations)v[Number(H)+d]=this.indexedOperations[H],b[Number(H)+d]=m.indexes[H];this.indexedOperations=v,m.indexes=b,m.operations=m.operations.map(H=>H+d)}shiftAllChangeIndexes(d,m=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(d,m,this.allFilteredChanges),this._shiftAllChangeIndexes(d,m,this.allChanges)):this._shiftAllChangeIndexes(d,m,this.allChanges)}_shiftAllChangeIndexes(d,m=0,v){const b={};let H=0;for(const $ in v.indexes)b[H++]=v.indexes[$];v.indexes=b;for(let $=0;$<v.operations.length;$++){const ee=v.operations[$];ee>m&&(v.operations[$]=ee+d)}}indexedOperation(d,m,v=d){var b,H;this.indexedOperations[d]=m,this.filteredChanges!==void 0?(le(this.allFilteredChanges,v),le(this.filteredChanges,d),(b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges")):(le(this.allChanges,v),le(this.changes,d),(H=this.root)==null||H.enqueueChangeTree(this,"changes"))}getType(d){return this.ref[u]||this.metadata[d].type}getChange(d){return this.indexedOperations[d]}getValue(d,m=!1){return this.ref[l](d,m)}delete(d,m,v=d){var $,ee,Q;if(d===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${d}'`)}catch(ae){console.warn(ae)}return}const b=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[d]=m??t.OPERATION.DELETE,le(b,d),Pe(this.allChanges,v);const H=this.getValue(d);return H&&H[f]&&(($=this.root)==null||$.remove(H[f])),this.filteredChanges!==void 0?(Pe(this.allFilteredChanges,v),(ee=this.root)==null||ee.enqueueChangeTree(this,"filteredChanges")):(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"),H}endEncode(d){var m,v;this.indexedOperations={},this[d]=W(),(v=(m=this.ref)[p])==null||v.call(m),this.isNew=!1}discard(d=!1){var m,v;(v=(m=this.ref)[p])==null||v.call(m),this.indexedOperations={},this.changes=W(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=W(this.filteredChanges.queueRootNode)),d&&(this.allChanges=W(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=W(this.allFilteredChanges.queueRootNode)))}discardAll(){const d=Object.keys(this.indexedOperations);for(let m=0,v=d.length;m<v;m++){const b=this.getValue(Number(d[m]));b&&b[f]&&b[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(d,m,v){var b,H,$,ee;this.root.types.hasFilters&&(this._checkFilteredByParent(d,m),this.filteredChanges!==void 0&&((b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges"),v&&((H=this.root)==null||H.enqueueChangeTree(this,"allFilteredChanges")))),this.isFiltered||(($=this.root)==null||$.enqueueChangeTree(this,"changes"),v&&((ee=this.root)==null||ee.enqueueChangeTree(this,"allChanges")))}_checkFilteredByParent(d,m){if(!d)return;const v=Ze.isValidInstance(this.ref)?this.ref.constructor:this.ref[u];let b,H=!Ze.isValidInstance(d);H?(b=d[f],d=b.parent,m=b.parentIndex):b=d[f];const $=d.constructor;let ee=`${this.root.types.getTypeId(v)}`;$&&(ee+=`-${this.root.types.schemas.get($)}`),ee+=`-${m}`;const Q=Ze.hasViewTagAtIndex($==null?void 0:$[Symbol.metadata],m);this.isFiltered=d[f].isFiltered||this.root.types.parentFiltered[ee]||Q,this.isFiltered&&(this.isVisibilitySharedWithParent=b.isFiltered&&typeof v!="string"&&!Q&&H,this.filteredChanges||(this.filteredChanges=W(),this.allFilteredChanges=W()),this.changes.operations.length>0&&(this.changes.operations.forEach(ae=>le(this.filteredChanges,ae)),this.allChanges.operations.forEach(ae=>le(this.allFilteredChanges,ae)),this.changes=W(),this.allChanges=W()))}get parent(){var d;return(d=this.parentChain)==null?void 0:d.ref}get parentIndex(){var d;return(d=this.parentChain)==null?void 0:d.index}addParent(d,m){if(this.hasParent((v,b)=>v[f]===d[f])){this.parentChain.index=m;return}this.parentChain={ref:d,index:m,next:this.parentChain}}removeParent(d=this.parent){let m=this.parentChain,v=null;for(;m;){if(m.ref[f]===d[f])return v?v.next=m.next:this.parentChain=m.next,!0;v=m,m=m.next}return this.parentChain===void 0}findParent(d){let m=this.parentChain;for(;m;){if(d(m.ref,m.index))return m;m=m.next}}hasParent(d){return this.findParent(d)!==void 0}getAllParents(){const d=[];let m=this.parentChain;for(;m;)d.push({ref:m.ref,index:m.index}),m=m.next;return d}}function ve(C,d,m,v,b,H){var $;typeof m=="string"?($=xe[m])==null||$.call(xe,d,v,H):m[Symbol.metadata]!==void 0?(xe.number(d,v[f].refId,H),(b&t.OPERATION.ADD)===t.OPERATION.ADD&&C.tryEncodeTypeId(d,m,v.constructor,H)):xe.number(d,v[f].refId,H)}const Ke=function(C,d,m,v,b,H,$,ee,Q){if(d[H.offset++]=(v|b)&255,b===t.OPERATION.DELETE)return;const ae=m.ref,pe=Q[v];ve(C,d,Q[v].type,ae[pe.name],b,H)},He=function(C,d,m,v,b,H){if(d[H.offset++]=b&255,xe.number(d,v,H),b===t.OPERATION.DELETE)return;const $=m.ref;if((b&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof $.set=="function"){const ae=m.ref.$indexes.get(v);xe.string(d,ae,H)}const ee=$[u],Q=$[l](v);ve(C,d,ee,Q,b,H)},Gt=function(C,d,m,v,b,H,$,ee){const Q=m.ref,ae=ee&&m.isFiltered&&typeof m.getType(v)!="string";let pe;if(ae){const Be=Q.tmpItems[v];if(!Be)return;pe=Be[f].refId,b===t.OPERATION.DELETE?b=t.OPERATION.DELETE_BY_REFID:b===t.OPERATION.ADD&&(b=t.OPERATION.ADD_BY_REFID)}else pe=v;if(d[H.offset++]=b&255,xe.number(d,pe,H),b===t.OPERATION.DELETE||b===t.OPERATION.DELETE_BY_REFID)return;const de=m.getType(v),ge=m.getValue(v,$);ve(C,d,de,ge,b,H)},Dt=-1;function Vn(C,d,m,v,b,H,$,ee){const Q=C.root,ae=m[l](v);let pe;if((d&t.OPERATION.DELETE)===t.OPERATION.DELETE){const de=Q.refIds.get(ae);de!==void 0&&Q.removeRef(de),d!==t.OPERATION.DELETE_AND_ADD&&m[h](v),pe=void 0}if(d!==t.OPERATION.DELETE)if(Ge.is(b)){const de=Se.number(H,$);if(pe=Q.refs.get(de),(d&t.OPERATION.ADD)===t.OPERATION.ADD){const ge=C.getInstanceType(H,$,b);pe||(pe=C.createInstanceOfType(ge)),Q.addRef(de,pe,pe!==ae||d===t.OPERATION.DELETE_AND_ADD&&pe===ae)}}else if(typeof b=="string")pe=Se[b](H,$);else{const de=Ye(Object.keys(b)[0]),ge=Se.number(H,$),Be=Q.refs.has(ge)?ae||Q.refs.get(ge):new de.constructor;if(pe=Be.clone(!0),pe[u]=Object.values(b)[0],ae){let ke=Q.refIds.get(ae);if(ke!==void 0&&ge!==ke){const Ce=ae.entries();let ye;for(;(ye=Ce.next())&&!ye.done;){const[We,Rt]=ye.value;typeof Rt=="object"&&(ke=Q.refIds.get(Rt),Q.removeRef(ke)),ee.push({ref:ae,refId:ke,op:t.OPERATION.DELETE,field:We,value:void 0,previousValue:Rt})}}}Q.addRef(ge,pe,Be!==ae||d===t.OPERATION.DELETE_AND_ADD&&Be===ae)}return{value:pe,previousValue:ae}}const qn=function(C,d,m,v,b){const H=d[m.offset++],$=v.constructor[Symbol.metadata],ee=H>>6<<6,Q=H%(ee||255),ae=$[Q];if(ae===void 0)return console.warn("@colyseus/schema: field not defined at",{index:Q,ref:v.constructor.name,metadata:$}),Dt;const{value:pe,previousValue:de}=Vn(C,ee,v,Q,ae.type,d,m,b);pe!=null&&(v[ae.name]=pe),de!==pe&&b.push({ref:v,refId:C.currentRefId,op:ee,field:ae.name,value:pe,previousValue:de})},rs=function(C,d,m,v,b){const H=d[m.offset++];if(H===t.OPERATION.CLEAR){C.removeChildRefs(v,b),v.clear();return}const $=Se.number(d,m),ee=v[u];let Q;(H&t.OPERATION.ADD)===t.OPERATION.ADD?typeof v.set=="function"?(Q=Se.string(d,m),v.setIndex($,Q)):Q=$:Q=v.getIndex($);const{value:ae,previousValue:pe}=Vn(C,H,v,$,ee,d,m,b);if(ae!=null){if(typeof v.set=="function")v.$items.set(Q,ae);else if(typeof v.$setAt=="function")v.$setAt($,ae,H);else if(typeof v.add=="function"){const de=v.add(ae);typeof de=="number"&&v.setIndex(de,de)}}pe!==ae&&b.push({ref:v,refId:C.currentRefId,op:H,field:"",dynamicIndex:Q,value:ae,previousValue:pe})},vc=function(C,d,m,v,b){let H=d[m.offset++],$;if(H===t.OPERATION.CLEAR){C.removeChildRefs(v,b),v.clear();return}else if(H===t.OPERATION.REVERSE){v.reverse();return}else if(H===t.OPERATION.DELETE_BY_REFID){const de=Se.number(d,m),ge=C.root.refs.get(de);$=v.findIndex(Be=>Be===ge),v[h]($),b.push({ref:v,refId:C.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:$,value:void 0,previousValue:ge});return}else if(H===t.OPERATION.ADD_BY_REFID){const de=Se.number(d,m),ge=C.root.refs.get(de);ge&&($=v.findIndex(Be=>Be===ge)),($===-1||$===void 0)&&($=v.length)}else $=Se.number(d,m);const ee=v[u];let Q=$;const{value:ae,previousValue:pe}=Vn(C,H,v,$,ee,d,m,b);ae!=null&&ae!==pe&&v.$setAt($,ae,H),pe!==ae&&b.push({ref:v,refId:C.currentRefId,op:H,field:"",dynamicIndex:Q,value:ae,previousValue:pe})};class Zs extends Error{}function Js(C,d,m,v){let b,H=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":b="number",isNaN(C)&&console.log(`trying to encode "NaN" in ${m.constructor.name}#${v}`);break;case"bigint64":case"biguint64":b="bigint";break;case"string":b="string",H=!0;break;case"boolean":return;default:return}if(typeof C!==b&&(!H||H&&C!==null)){let $=`'${JSON.stringify(C)}'${C&&C.constructor&&` (${C.constructor.name})`||""}`;throw new Zs(`a '${b}' was expected, but ${$} was provided in ${m.constructor.name}#${v}`)}}function ss(C,d,m,v){if(!(C instanceof d))throw new Zs(`a '${d.name}' was expected, but '${C&&C.constructor.name}' was provided in ${m.constructor.name}#${v}`)}var js,Qs;const qi=(C,d)=>{const m=C.toString(),v=d.toString();return m<v?-1:m>v?1:0},gt=class gt{static[(js=o,Qs=a,c)](d,m,v){var b;return!v||typeof d[u]=="string"||v.isChangeTreeVisible((b=d.tmpItems[m])==null?void 0:b[f])}static is(d){return Array.isArray(d)||d.array!==void 0}static from(d){return new gt(...Array.from(d))}constructor(...d){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const m=new Proxy(this,{get:(v,b)=>typeof b!="symbol"&&!isNaN(b)?this.items[b]:Reflect.get(v,b),set:(v,b,H)=>{var $;if(typeof b!="symbol"&&!isNaN(b)){if(H==null)v.$deleteAt(b);else{if(H[f]){ss(H,v[u],v,b);const ee=v.items[b];v.isMovingItems?(ee!==void 0?H[f].isNew?v[f].indexedOperation(Number(b),t.OPERATION.MOVE_AND_ADD):(v[f].getChange(Number(b))&t.OPERATION.DELETE)===t.OPERATION.DELETE?v[f].indexedOperation(Number(b),t.OPERATION.DELETE_AND_MOVE):v[f].indexedOperation(Number(b),t.OPERATION.MOVE):H[f].isNew&&v[f].indexedOperation(Number(b),t.OPERATION.ADD),H[f].setParent(this,v[f].root,b)):v.$changeAt(Number(b),H),ee!==void 0&&(($=ee[f].root)==null||$.remove(ee[f]))}else v.$changeAt(Number(b),H);v.items[b]=H,v.tmpItems[b]=H}return!0}else return Reflect.set(v,b,H)},deleteProperty:(v,b)=>(typeof b=="number"?v.$deleteAt(b):delete v[b],!0),has:(v,b)=>typeof b!="symbol"&&!isNaN(Number(b))?Reflect.has(this.items,b):Reflect.has(v,b)});return Object.defineProperty(this,f,{value:new Ie(m),enumerable:!1,writable:!0}),d.length>0&&this.push(...d),m}set length(d){d===0?this.clear():d<this.items.length?this.splice(d,this.length-d):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...d){var b;let m=this.tmpItems.length;const v=this[f];for(let H=0,$=d.length;H<$;H++,m++){const ee=d[H];if(ee==null)return;typeof ee=="object"&&this[u]&&ss(ee,this[u],this,H),v.indexedOperation(m,t.OPERATION.ADD,this.items.length),this.items.push(ee),this.tmpItems.push(ee),(b=ee[f])==null||b.setParent(this,v.root,m)}return m}pop(){let d=-1;for(let m=this.tmpItems.length-1;m>=0;m--)if(this.deletedIndexes[m]!==!0){d=m;break}if(!(d<0))return this[f].delete(d,void 0,this.items.length-1),this.deletedIndexes[d]=!0,this.items.pop()}at(d){return d<0&&(d+=this.length),this.items[d]}$changeAt(d,m){var H;if(m==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[d]===m)return;const v=this.items[d]!==void 0?typeof m=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,b=this[f];b.change(d,v),(H=m[f])==null||H.setParent(this,b.root,d)}$deleteAt(d,m){this[f].delete(d,m)}$setAt(d,m,v){d===0&&v===t.OPERATION.ADD&&this.items[d]!==void 0?this.items.unshift(m):v===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(d,1),this.items[d]=m):this.items[d]=m}clear(){if(this.items.length===0)return;const d=this[f];d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),d.discard(!0),d.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...d){return new gt(...this.items.concat(...d))}join(d){return this.items.join(d)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const d=this[f],m=this.tmpItems.findIndex(b=>b===this.items[0]),v=this.items.findIndex(b=>b===this.items[0]);return d.delete(m,t.OPERATION.DELETE,v),d.shiftAllChangeIndexes(-1,v),this.deletedIndexes[m]=!0,this.items.shift()}slice(d,m){const v=new gt;return v.push(...this.items.slice(d,m)),v}sort(d=qi){this.isMovingItems=!0;const m=this[f];return this.items.sort(d).forEach((b,H)=>m.change(H,t.OPERATION.REPLACE)),this.tmpItems.sort(d),this.isMovingItems=!1,this}splice(d,m,...v){var ae,pe,de;const b=this[f],H=this.items.length,$=this.tmpItems.length,ee=v.length,Q=[];for(let ge=0;ge<$;ge++)this.deletedIndexes[ge]!==!0&&Q.push(ge);if(H>d){m===void 0&&(m=H-d);for(let ge=d;ge<d+m;ge++){const Be=Q[ge];b.delete(Be,t.OPERATION.DELETE),this.deletedIndexes[Be]=!0}}else m=0;if(ee>0){if(ee>m)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let ge=0;ge<ee;ge++){const Be=(Q[d]??H)+ge;b.indexedOperation(Be,this.deletedIndexes[Be]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),(ae=v[ge][f])==null||ae.setParent(this,b.root,Be)}}return m>ee&&b.shiftAllChangeIndexes(-(m-ee),Q[d+ee]),b.filteredChanges!==void 0?(pe=b.root)==null||pe.enqueueChangeTree(b,"filteredChanges"):(de=b.root)==null||de.enqueueChangeTree(b,"changes"),this.items.splice(d,m,...v)}unshift(...d){const m=this[f];return m.shiftChangeIndexes(d.length),m.isFiltered?le(m.filteredChanges,this.items.length):le(m.allChanges,this.items.length),d.forEach((v,b)=>{m.change(b,t.OPERATION.ADD)}),this.tmpItems.unshift(...d),this.items.unshift(...d)}indexOf(d,m){return this.items.indexOf(d,m)}lastIndexOf(d,m=this.length-1){return this.items.lastIndexOf(d,m)}every(d,m){return this.items.every(d,m)}some(d,m){return this.items.some(d,m)}forEach(d,m){return this.items.forEach(d,m)}map(d,m){return this.items.map(d,m)}filter(d,m){return this.items.filter(d,m)}reduce(d,m){return this.items.reduce(d,m)}reduceRight(d,m){return this.items.reduceRight(d,m)}find(d,m){return this.items.find(d,m)}findIndex(d,m){return this.items.findIndex(d,m)}fill(d,m,v){throw new Error("ArraySchema#fill() not implemented")}copyWithin(d,m,v){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return gt}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(d,m){return this.items.includes(d,m)}flatMap(d,m){throw new Error("ArraySchema#flatMap() is not supported.")}flat(d){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...d){return this.items.findLastIndex.apply(this.items,arguments)}with(d,m){const v=this.items.slice();return d<0&&(d+=this.length),v[d]=m,new gt(...v)}toReversed(){return this.items.slice().reverse()}toSorted(d){return this.items.slice().sort(d)}toSpliced(d,m,...v){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(d=>{let m=this.items.length;for(;m!=0;){let v=Math.floor(Math.random()*m);m--,[this[m],this[v]]=[this[v],this[m]]}})}move(d){return this.isMovingItems=!0,d(this),this.isMovingItems=!1,this}[l](d,m=!1){return m?this.items[d]:this.deletedIndexes[d]?this.items[d]:this.tmpItems[d]||this.items[d]}[h](d){this.items[d]=void 0,this.tmpItems[d]=void 0}[p](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[g](){this.items=this.items.filter(d=>d!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(d=>typeof d.toJSON=="function"?d.toJSON():d)}clone(d){let m;return d?(m=new gt,m.push(...this.items)):m=new gt(...this.map(v=>v[f]?v.clone():v)),m}};gt[js]=Gt,gt[Qs]=vc;let Cn=gt;Me("array",{constructor:Cn});var eo,to;const At=class At{static[(eo=o,to=a,c)](d,m,v){return!v||typeof d[u]=="string"||v.isChangeTreeVisible((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.map!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const m=new Ie(this);if(m.indexes={},Object.defineProperty(this,f,{value:m,enumerable:!1,writable:!0}),d)if(d instanceof Map||d instanceof At)d.forEach((v,b)=>this.set(b,v));else for(const v in d)this.set(v,d[v]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return At}set(d,m){var ee;if(m==null)throw new Error(`MapSchema#set('${d}', ${m}): trying to set ${m} value on '${d}'.`);typeof m=="object"&&this[u]&&ss(m,this[u],this,d),d=d.toString();const v=this[f],b=m[f]!==void 0;let H,$;if(typeof v.indexes[d]<"u"){H=v.indexes[d],$=t.OPERATION.REPLACE;const Q=this.$items.get(d);if(Q===m)return;b&&($=t.OPERATION.DELETE_AND_ADD,Q!==void 0&&((ee=Q[f].root)==null||ee.remove(Q[f]))),this.deletedItems[H]&&delete this.deletedItems[H]}else H=v.indexes[x]??0,$=t.OPERATION.ADD,this.$indexes.set(H,d),v.indexes[d]=H,v.indexes[x]=H+1;return this.$items.set(d,m),v.change(H,$),b&&m[f].setParent(this,v.root,H),this}get(d){return this.$items.get(d)}delete(d){if(!this.$items.has(d))return!1;const m=this[f].indexes[d];return this.deletedItems[m]=this[f].delete(m),this.$items.delete(d)}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return this.$items.has(d)}forEach(d){this.$items.forEach(d)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){const d=this[f];for(const m in this.deletedItems){const v=parseInt(m),b=this.$indexes.get(v);delete d.indexes[b],this.$indexes.delete(v)}this.deletedItems={}}toJSON(){const d={};return this.forEach((m,v)=>{d[v]=typeof m.toJSON=="function"?m.toJSON():m}),d}clone(d){let m;return d?m=Object.assign(new At,this):(m=new At,this.forEach((v,b)=>{v[f]?m.set(b,v.clone()):m.set(b,v)})),m}};At[eo]=He,At[to]=rs;let Hn=At;Me("map",{constructor:Hn});var no,Dr;const Pn=class Pn{static[(no=o,Dr=a,c)](d,m,v){return!v||typeof d[u]=="string"||v.isChangeTreeVisible((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.collection!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ie(this),this[f].indexes={},d&&d.forEach(m=>this.add(m)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){const m=this.$refId++;return d[f]!==void 0&&d[f].setParent(this,this[f].root,m),this[f].indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,d),this[f].change(m),m}at(d){const m=Array.from(this.$items.keys())[d];return this.$items.get(m)}entries(){return this.$items.entries()}delete(d){const m=this.$items.entries();let v,b;for(;(b=m.next())&&!b.done;)if(d===b.value[1]){v=b.value[0];break}return v===void 0?!1:(this.deletedItems[v]=this[f].delete(v),this.$indexes.delete(v),this.$items.delete(v))}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return Array.from(this.$items.values()).some(m=>m===d)}forEach(d){this.$items.forEach((m,v,b)=>d(m,v,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((m,v)=>{d.push(typeof m.toJSON=="function"?m.toJSON():m)}),d}clone(d){let m;return d?m=Object.assign(new Pn,this):(m=new Pn,this.forEach(v=>{v[f]?m.add(v.clone()):m.add(v)})),m}};Pn[no]=He,Pn[Dr]=rs;let Yi=Pn;Me("collection",{constructor:Yi});var io,ia;const bt=class bt{static[(io=o,ia=a,c)](d,m,v){return!v||typeof d[u]=="string"||v.visible.has((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.set!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ie(this),this[f].indexes={},d&&d.forEach(m=>this.add(m)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){var b;if(this.has(d))return!1;const m=this.$refId++;d[f]!==void 0&&d[f].setParent(this,this[f].root,m);const v=((b=this[f].indexes[m])==null?void 0:b.op)??t.OPERATION.ADD;return this[f].indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,d),this[f].change(m,v),m}entries(){return this.$items.entries()}delete(d){const m=this.$items.entries();let v,b;for(;(b=m.next())&&!b.done;)if(d===b.value[1]){v=b.value[0];break}return v===void 0?!1:(this.deletedItems[v]=this[f].delete(v),this.$indexes.delete(v),this.$items.delete(v))}clear(){const d=this[f];d.discard(!0),d.indexes={},this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){const m=this.$items.values();let v=!1,b;for(;(b=m.next())&&!b.done;)if(d===b.value){v=!0;break}return v}forEach(d){this.$items.forEach((m,v,b)=>d(m,v,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((m,v)=>{d.push(typeof m.toJSON=="function"?m.toJSON():m)}),d}clone(d){let m;return d?m=Object.assign(new bt,this):(m=new bt,this.forEach(v=>{v[f]?m.add(v.clone()):m.add(v)})),m}};bt[io]=He,bt[ia]=rs;let mr=bt;Me("set",{constructor:mr});const pi=-1;function yc(C){return Ee.register(C),C}function D(C=pi){return function(d,m){var ee;const v=d.constructor,H=Object.getPrototypeOf(v)[Symbol.metadata],$=v[ee=Symbol.metadata]??(v[ee]=Object.assign({},v[Symbol.metadata],H??Object.create(null)));Ze.setTag($,m,C)}}function q(C,d){return function(m,v){const b=m.constructor;if(!C)throw new Error(`${b.name}: @type() reference provided for "${v}" is undefined. Make sure you don't have any circular dependencies.`);C=$e(C),Ee.register(b);const $=Object.getPrototypeOf(b)[Symbol.metadata],ee=Ze.initialize(b);let Q=ee[v];if(ee[Q]!==void 0){if(ee[Q].deprecated)return;if(ee[Q].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${v}' definition on '${b.name}'.
Check @type() annotation`)}catch(ae){const pe=ae.stack.split(`
`)[4].trim();throw new Error(`${ae.message} ${pe}`)}}else Q=ee[x]??($&&$[x])??-1,Q++;if(d&&d.manual)Ze.addField(ee,Q,v,C,{enumerable:!0,configurable:!0,writable:!0});else{const ae=typeof Object.keys(C)[0]=="string"&&Ye(Object.keys(C)[0]),pe=ae?Object.values(C)[0]:C;Ze.addField(ee,Q,v,C,oe(`_${v}`,Q,pe,ae))}}}function oe(C,d,m,v){return{get:function(){return this[C]},set:function(b){var $,ee;const H=this[C]??void 0;if(b!==H){if(b!=null){v?(v.constructor===Cn&&!(b instanceof Cn)&&(b=new Cn(...b)),v.constructor===Hn&&!(b instanceof Hn)&&(b=new Hn(b)),b[u]=m):typeof m!="string"?ss(b,m,this,C.substring(1)):Js(b,m,this,C.substring(1));const Q=this[f];H!==void 0&&H[f]?(($=Q.root)==null||$.remove(H[f]),this.constructor[s](Q,d,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](Q,d,t.OPERATION.ADD),(ee=b[f])==null||ee.setParent(this,Q.root,d)}else H!==void 0&&this[f].delete(d);this[C]=b}},enumerable:!0,configurable:!0}}function ne(C=!0){return function(d,m){var Q;const v=d.constructor,H=Object.getPrototypeOf(v)[Symbol.metadata],$=v[Q=Symbol.metadata]??(v[Q]=Object.assign({},v[Symbol.metadata],H??Object.create(null))),ee=$[m];$[ee].deprecated=!0,C&&($[y]??($[y]={}),$[y][m]={get:function(){throw new Error(`${m} is deprecated.`)},set:function(ae){},enumerable:!1,configurable:!0}),Object.defineProperty($,ee,{value:$[ee],enumerable:!1,configurable:!0})}}function re(C,d,m){for(let v in d)q(d[v],m)(C.prototype,v);return C}function Ne(C,d,m=Ge){const v={},b={},H={},$={};for(let pe in C){const de=C[pe];typeof de=="object"?(de.view!==void 0&&($[pe]=typeof de.view=="boolean"?pi:de.view),v[pe]=$e(de),Object.prototype.hasOwnProperty.call(de,"default")?H[pe]=de.default:Array.isArray(de)||de.array!==void 0?H[pe]=new Cn:de.map!==void 0?H[pe]=new Hn:de.collection!==void 0?H[pe]=new Yi:de.set!==void 0?H[pe]=new mr:de.type!==void 0&&Ge.is(de.type)&&(!de.type.prototype.initialize||de.type.prototype.initialize.length===0)&&(H[pe]=new de.type)):typeof de=="function"?Ge.is(de)?((!de.prototype.initialize||de.prototype.initialize.length===0)&&(H[pe]=new de),v[pe]=$e(de)):b[pe]=de:v[pe]=$e(de)}const ee=()=>{const pe={};for(const de in H){const ge=H[de];ge&&typeof ge.clone=="function"?pe[de]=ge.clone():pe[de]=ge}return pe},Q=pe=>{const de=Object.keys(v),ge={};for(const Be in pe)de.includes(Be)||(ge[Be]=pe[Be]);return ge},ae=Ze.setFields(class extends m{constructor(...pe){b.initialize&&typeof b.initialize=="function"?(super(Object.assign({},ee(),Q(pe[0]||{}))),new.target===ae&&b.initialize.apply(this,pe)):super(Object.assign({},ee(),pe[0]||{}))}},v);ae._getDefaultValues=ee,Object.assign(ae.prototype,b);for(let pe in $)D($[pe])(ae.prototype,pe);return d&&Object.defineProperty(ae,"name",{value:d}),ae.extends=(pe,de)=>Ne(pe,de,ae),ae}function ze(C){return new Array(C).fill(0).map((d,m)=>m===C-1?"└─ ":"   ").join("")}function Oe(C){const d=C[f].root,m={ops:{},refs:[]};let v=d.changes.next;for(;v;){const b=v.changeTree;if(b===void 0){v=v.next;continue}const H=b.indexedOperations;m.refs.push(`refId#${b.refId}`);for(const $ in H){const ee=H[$],Q=t.OPERATION[ee];m.ops[Q]||(m.ops[Q]=0),m.ops[t.OPERATION[ee]]++}v=v.next}return m}var Xe,Je;const In=class In{static initialize(d){var m;Object.defineProperty(d,f,{value:new Ie(d),enumerable:!1,writable:!0}),Object.defineProperties(d,((m=d.constructor[Symbol.metadata])==null?void 0:m[y])||{})}static is(d){return typeof d[Symbol.metadata]=="object"}static[(Xe=o,Je=a,s)](d,m,v=t.OPERATION.ADD){d.change(m,v)}static[c](d,m,v){var $,ee;const H=($=d.constructor[Symbol.metadata][m])==null?void 0:$.tag;if(v===void 0)return H===void 0;if(H===void 0)return!0;if(H===pi)return v.isChangeTreeVisible(d[f]);{const Q=(ee=v.tags)==null?void 0:ee.get(d[f]);return Q&&Q.has(H)}}constructor(d){In.initialize(this),d&&Object.assign(this,d)}assign(d){return Object.assign(this,d),this}setDirty(d,m){const v=this.constructor[Symbol.metadata];this[f].change(v[v[d]].index,m)}clone(){var v;const d=Object.create(this.constructor.prototype);In.initialize(d);const m=this.constructor[Symbol.metadata];for(const b in m){const H=m[b].name;typeof this[H]=="object"&&typeof((v=this[H])==null?void 0:v.clone)=="function"?d[H]=this[H].clone():d[H]=this[H]}return d}toJSON(){const d={},m=this.constructor[Symbol.metadata];for(const v in m){const b=m[v],H=b.name;!b.deprecated&&this[H]!==null&&typeof this[H]<"u"&&(d[H]=typeof this[H].toJSON=="function"?this[H].toJSON():this[H])}return d}discardAllChanges(){this[f].discardAll()}[l](d){const m=this.constructor[Symbol.metadata];return this[m[d].name]}[h](d){const m=this.constructor[Symbol.metadata];this[m[d].name]=void 0}static debugRefIds(d,m=!1,v=0,b,H=""){var ge;const $=m?` - ${JSON.stringify(d.toJSON())}`:"",ee=d[f],Q=b?b.root.refIds.get(d):ee.refId,ae=b?b.root:ee.root,pe=((ge=ae==null?void 0:ae.refCount)==null?void 0:ge[Q])>1?` [×${ae.refCount[Q]}]`:"";let de=`${ze(v)}${H}${d.constructor.name} (refId: ${Q})${pe}${$}
`;return ee.forEachChild((Be,ke)=>{let Ce=ke;typeof ke=="number"&&d.$indexes&&(Ce=d.$indexes.get(ke)??ke);const ye=d.forEach!==void 0&&Ce!==void 0?`["${Ce}"]: `:"";de+=this.debugRefIds(Be.ref,m,v+1,b,ye)}),de}static debugRefIdEncodingOrder(d,m="allChanges"){let v=[],b=d[f].root[m].next;for(;b;)b.changeTree&&v.push(b.changeTree.refId),b=b.next;return v}static debugRefIdsFromDecoder(d){return this.debugRefIds(d.state,!1,0,d)}static debugChanges(d,m=!1){const v=d[f],b=m?v.allChanges:v.changes,H=m?"allChanges":"changes";let $=`${d.constructor.name} (${v.refId}) -> .${H}:
`;function ee(Q){Q.operations.filter(ae=>ae).forEach(ae=>{const pe=v.indexedOperations[ae];$+=`- [${ae}]: ${t.OPERATION[pe]} (${JSON.stringify(v.getValue(Number(ae),m))})
`})}return ee(b),!m&&v.filteredChanges&&v.filteredChanges.operations.filter(Q=>Q).length>0&&($+=`${d.constructor.name} (${v.refId}) -> .filteredChanges:
`,ee(v.filteredChanges)),m&&v.allFilteredChanges&&v.allFilteredChanges.operations.filter(Q=>Q).length>0&&($+=`${d.constructor.name} (${v.refId}) -> .allFilteredChanges:
`,ee(v.allFilteredChanges)),$}static debugChangesDeep(d,m="changes"){var pe,de;let v="";const b=d[f],H=b.root,$=new Map,ee=[];let Q=0;for(const[ge,Be]of Object.entries(H[m])){const ke=H.changeTrees[ge];if(!ke)continue;let Ce=!1,ye=[],We=(pe=ke.parent)==null?void 0:pe[f];if(ke===b)Ce=!0;else for(;We!==void 0;){if(ye.push(We),We.ref===d){Ce=!0;break}We=(de=We.parent)==null?void 0:de[f]}Ce&&(ee.push(ke.refId),Q+=Object.keys(Be).length,$.set(ke,ye.reverse()))}v+=`---
`,v+=`root refId: ${b.refId}
`,v+=`Total instances: ${ee.length} (refIds: ${ee.join(", ")})
`,v+=`Total changes: ${Q}
`,v+=`---
`;const ae=new WeakSet;for(const[ge,Be]of $.entries()){Be.forEach((Rt,kt)=>{ae.has(Rt)||(v+=`${ze(kt)}${Rt.ref.constructor.name} (refId: ${Rt.refId})
`,ae.add(Rt))});const ke=ge.indexedOperations,Ce=Be.length,ye=ze(Ce),We=Ce>0?`(${ge.parentIndex}) `:"";v+=`${ye}${We}${ge.ref.constructor.name} (refId: ${ge.refId}) - changes: ${Object.keys(ke).length}
`;for(const Rt in ke){const kt=ke[Rt];v+=`${ze(Ce+1)}${t.OPERATION[kt]}: ${Rt}
`}}return`${v}`}};In[Xe]=Ke,In[Je]=qn;let Ge=In;function nt(C,d,m,v){var b=arguments.length,H=b<3?d:v,$;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")H=Reflect.decorate(C,d,m,v);else for(var ee=C.length-1;ee>=0;ee--)($=C[ee])&&(H=(b<3?$(H):b>3?$(d,m,H):$(d,m))||H);return b>3&&H&&Object.defineProperty(d,m,H),H}typeof SuppressedError=="function"&&SuppressedError;class je{constructor(d){this.types=d,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Te(),this.allFilteredChanges=Te(),this.changes=Te(),this.filteredChanges=Te()}getNextUniqueId(){return this.nextUniqueId++}add(d){d.refId===void 0&&(d.refId=this.getNextUniqueId());const m=this.changeTrees[d.refId]===void 0;m&&(this.changeTrees[d.refId]=d);const v=this.refCount[d.refId];if(v===0){const b=d.allChanges.operations;let H=b.length;for(;H--;)d.indexedOperations[b[H]]=t.OPERATION.ADD,le(d.changes,H)}return this.refCount[d.refId]=(v||0)+1,m}remove(d){const m=this.refCount[d.refId]-1;return m<=0?(d.root=void 0,delete this.changeTrees[d.refId],this.removeChangeFromChangeSet("allChanges",d),this.removeChangeFromChangeSet("changes",d),d.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",d),this.removeChangeFromChangeSet("filteredChanges",d)),this.refCount[d.refId]=0,d.forEachChild((v,b)=>{v.removeParent(d.ref)&&(v.parentChain===void 0||v.parentChain&&this.refCount[v.refId]>0?this.remove(v):v.parentChain&&this.moveNextToParent(v))})):(this.refCount[d.refId]=m,this.recursivelyMoveNextToParent(d)),m}recursivelyMoveNextToParent(d){this.moveNextToParent(d),d.forEachChild((m,v)=>this.recursivelyMoveNextToParent(m))}moveNextToParent(d){d.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",d),this.moveNextToParentInChangeTreeList("allFilteredChanges",d)):(this.moveNextToParentInChangeTreeList("changes",d),this.moveNextToParentInChangeTreeList("allChanges",d))}moveNextToParentInChangeTreeList(d,m){var ae;const v=this[d],b=m[d].queueRootNode;if(!b)return;const H=m.parent;if(!H||!H[f])return;const $=(ae=H[f][d])==null?void 0:ae.queueRootNode;if(!$||$===b)return;const ee=$.position;b.position>ee||(b.prev?b.prev.next=b.next:v.next=b.next,b.next?b.next.prev=b.prev:v.tail=b.prev,b.prev=$,b.next=$.next,$.next?$.next.prev=b:v.tail=b,$.next=b,this.updatePositionsAfterMove(v,b,ee+1))}enqueueChangeTree(d,m,v=d[m].queueRootNode){v||(d[m].queueRootNode=this.addToChangeTreeList(this[m],d))}addToChangeTreeList(d,m){const v={changeTree:m,next:void 0,prev:void 0,position:d.tail?d.tail.position+1:0};return d.next?(v.prev=d.tail,d.tail.next=v,d.tail=v):(d.next=v,d.tail=v),v}updatePositionsAfterRemoval(d,m){let v=d.next,b=0;for(;v;)b>=m&&(v.position=b),v=v.next,b++}updatePositionsAfterMove(d,m,v){let b=d.next,H=0;for(;b;)b.position=H,b=b.next,H++}removeChangeFromChangeSet(d,m){const v=this[d],b=m[d].queueRootNode;if(b&&b.changeTree===m){const H=b.position;return b.prev?b.prev.next=b.next:v.next=b.next,b.next?b.next.prev=b.prev:v.tail=b.prev,this.updatePositionsAfterRemoval(v,H),m[d].queueRootNode=void 0,!0}return!1}}const mi=class mi{constructor(d){this.sharedBuffer=Buffer.allocUnsafe(mi.BUFFER_SIZE),this.context=Ee.cache(d.constructor),this.root=new je(this.context),this.setState(d)}setState(d){this.state=d,this.state[f].setRoot(this.root)}encode(d={offset:0},m,v=this.sharedBuffer,b="changes",H=b==="allChanges",$=d.offset){const ee=m!==void 0,Q=this.state[f];let ae=this.root[b];for(;ae=ae.next;){const pe=ae.changeTree;if(ee){if(!m.isChangeTreeVisible(pe)){m.invisible.add(pe);continue}m.invisible.delete(pe)}const de=pe[b],ge=pe.ref,Be=de.operations.length;if(Be===0)continue;const ke=ge.constructor,Ce=ke[o],ye=ke[c],We=ke[Symbol.metadata];(ee||d.offset>$||pe!==Q)&&(v[d.offset++]=255,xe.number(v,pe.refId,d));for(let Rt=0;Rt<Be;Rt++){const kt=de.operations[Rt];if(kt<0){v[d.offset++]=Math.abs(kt)&255;continue}const Dn=H?t.OPERATION.ADD:pe.indexedOperations[kt];kt===void 0||Dn===void 0||ye&&!ye(ge,kt,m)||Ce(this,v,pe,kt,Dn,d,H,ee,We)}}if(d.offset>v.byteLength){const pe=Math.ceil(d.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(pe/1024)} * 1024; // ${Math.round(pe/1024)} KB
`),v=Buffer.alloc(pe,v),v===this.sharedBuffer&&(this.sharedBuffer=v),this.encode({offset:$},m,v,b,H)}else return v.subarray(0,d.offset)}encodeAll(d={offset:0},m=this.sharedBuffer){return this.encode(d,void 0,m,"allChanges",!0)}encodeAllView(d,m,v,b=this.sharedBuffer){const H=v.offset;return this.encode(v,d,b,"allFilteredChanges",!0,H),Buffer.concat([b.subarray(0,m),b.subarray(H,v.offset)])}encodeView(d,m,v,b=this.sharedBuffer){const H=v.offset;for(const[$,ee]of d.changes){const Q=this.root.changeTrees[$];if(Q===void 0){d.changes.delete($);continue}const ae=Object.keys(ee);if(ae.length===0)continue;const de=Q.ref.constructor,ge=de[o],Be=de[Symbol.metadata];b[v.offset++]=255,xe.number(b,Q.refId,v);for(let ke=0,Ce=ae.length;ke<Ce;ke++){const ye=Number(ae[ke]),Rt=Q.ref[l](ye)!==void 0&&ee[ye]||t.OPERATION.DELETE;ge(this,b,Q,ye,Rt,v,!1,!0,Be)}}return d.changes.clear(),this.encode(v,d,b,"filteredChanges",!1,H),Buffer.concat([b.subarray(0,m),b.subarray(H,v.offset)])}discardChanges(){let d=this.root.changes.next;for(;d;)d.changeTree.endEncode("changes"),d=d.next;for(this.root.changes=Te(),d=this.root.filteredChanges.next;d;)d.changeTree.endEncode("filteredChanges"),d=d.next;this.root.filteredChanges=Te()}tryEncodeTypeId(d,m,v,b){const H=this.context.getTypeId(m),$=this.context.getTypeId(v);if($===void 0){console.warn(`@colyseus/schema WARNING: Class "${v.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}H!==$&&(d[b.offset++]=213,xe.number(d,$,b))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};mi.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let Et=mi;function Xt(C,d){if(d===-1||d>=C.length)return!1;const m=C.length-1;for(let v=d;v<m;v++)C[v]=C[v+1];return C.length=m,!0}class Wt extends Error{constructor(d){super(d),this.name="DecodingWarning"}}class Lt{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(d,m,v=!0){this.refs.set(d,m),this.refIds.set(m,d),v&&(this.refCount[d]=(this.refCount[d]||0)+1),this.deletedRefs.has(d)&&this.deletedRefs.delete(d)}removeRef(d){const m=this.refCount[d];if(m===void 0){try{throw new Wt("trying to remove refId that doesn't exist: "+d)}catch(v){console.warn(v)}return}if(m===0){try{const v=this.refs.get(d);throw new Wt(`trying to remove refId '${d}' with 0 refCount (${v.constructor.name}: ${JSON.stringify(v)})`)}catch(v){console.warn(v)}return}(this.refCount[d]=m-1)<=0&&this.deletedRefs.add(d)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(d=>{if(this.refCount[d]>0)return;const m=this.refs.get(d);if(m.constructor[Symbol.metadata]!==void 0){const v=m.constructor[Symbol.metadata];for(const b in v){const H=v[b].name,$=typeof m[H]=="object"&&this.refIds.get(m[H]);$&&!this.deletedRefs.has($)&&this.removeRef($)}}else typeof m[u]=="function"&&Array.from(m.values()).forEach(v=>{const b=this.refIds.get(v);this.deletedRefs.has(b)||this.removeRef(b)});this.refs.delete(d),delete this.refCount[d],delete this.callbacks[d]}),this.deletedRefs.clear()}addCallback(d,m,v){if(d===void 0){const b=typeof m=="number"?t.OPERATION[m]:m;throw new Error(`Can't addCallback on '${b}' (refId is undefined)`)}return this.callbacks[d]||(this.callbacks[d]={}),this.callbacks[d][m]||(this.callbacks[d][m]=[]),this.callbacks[d][m].push(v),()=>this.removeCallback(d,m,v)}removeCallback(d,m,v){var H,$,ee;const b=(ee=($=(H=this.callbacks)==null?void 0:H[d])==null?void 0:$[m])==null?void 0:ee.indexOf(v);b!==void 0&&b!==-1&&Xt(this.callbacks[d][m],b)}}class rn{constructor(d,m){this.currentRefId=0,this.setState(d),this.context=m||new Ee(d.constructor)}setState(d){this.state=d,this.root=new Lt,this.root.addRef(0,d)}decode(d,m={offset:0},v=this.state){var Q,ae,pe;const b=[],H=this.root,$=d.byteLength;let ee=v.constructor[a];for(this.currentRefId=0;m.offset<$;){if(d[m.offset]==255){m.offset++,(Q=v[g])==null||Q.call(v);const ge=Se.number(d,m),Be=H.refs.get(ge);Be?(v=Be,ee=v.constructor[a],this.currentRefId=ge):(console.error(`"refId" not found: ${ge}`,{previousRef:v,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(d,m,$));continue}if(ee(this,d,m,v,b)===Dt){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(d,m,$);continue}}return(ae=v[g])==null||ae.call(v),(pe=this.triggerChanges)==null||pe.call(this,b),H.garbageCollectDeletedRefs(),b}skipCurrentStructure(d,m,v){const b={offset:m.offset};for(;m.offset<v&&!(d[m.offset]===255&&(b.offset=m.offset+1,this.root.refs.has(Se.number(d,b))));)m.offset++}getInstanceType(d,m,v){let b;if(d[m.offset]===213){m.offset++;const H=Se.number(d,m);b=this.context.get(H)}return b||v}createInstanceOfType(d){return new d}removeChildRefs(d,m){const v=typeof d[u]!="string",b=this.root.refIds.get(d);d.forEach((H,$)=>{m.push({ref:d,refId:b,op:t.OPERATION.DELETE,field:$,value:void 0,previousValue:H}),v&&this.root.removeRef(this.root.refIds.get(H))})}}class Fe extends Ge{}nt([q("string")],Fe.prototype,"name",void 0),nt([q("string")],Fe.prototype,"type",void 0),nt([q("number")],Fe.prototype,"referencedType",void 0);class sn extends Ge{constructor(){super(...arguments),this.fields=new Cn}}nt([q("number")],sn.prototype,"id",void 0),nt([q("number")],sn.prototype,"extendsId",void 0),nt([q([Fe])],sn.prototype,"fields",void 0);class pt extends Ge{constructor(){super(...arguments),this.types=new Cn}static encode(d,m={offset:0}){const v=d.context,b=new pt,H=new Et(b),$=v.schemas.get(d.state.constructor);$>0&&(b.rootType=$);const ee=new Set,Q={},ae=de=>{if(de.extendsId===void 0||ee.has(de.extendsId)){ee.add(de.id),b.types.push(de);const ge=Q[de.id];ge!==void 0&&(delete Q[de.id],ge.forEach(Be=>ae(Be)))}else Q[de.extendsId]===void 0&&(Q[de.extendsId]=[]),Q[de.extendsId].push(de)};v.schemas.forEach((de,ge)=>{const Be=new sn;Be.id=Number(de);const ke=Object.getPrototypeOf(ge);ke!==Ge&&(Be.extendsId=v.schemas.get(ke));const Ce=ge[Symbol.metadata];if(Ce!==ke[Symbol.metadata])for(const ye in Ce){const We=Number(ye),Rt=Ce[We].name;if(!Object.prototype.hasOwnProperty.call(Ce,Rt))continue;const kt=new Fe;kt.name=Rt;let Dn;const Pi=Ce[We];if(typeof Pi.type=="string")Dn=Pi.type;else{let ro;Ge.is(Pi.type)?(Dn="ref",ro=Pi.type):(Dn=Object.keys(Pi.type)[0],typeof Pi.type[Dn]=="string"?Dn+=":"+Pi.type[Dn]:ro=Pi.type[Dn]),kt.referencedType=ro?v.getTypeId(ro):-1}kt.type=Dn,Be.fields.push(kt)}ae(Be)});for(const de in Q)Q[de].forEach(ge=>b.types.push(ge));return H.encodeAll(m).slice(0,m.offset)}static decode(d,m){const v=new pt;new rn(v).decode(d,m);const H=new Ee;v.types.forEach(Q=>{const ae=H.get(Q.extendsId)??Ge,pe=class extends ae{};Ee.register(pe),H.add(pe,Q.id)},{});const $=(Q,ae,pe)=>{ae.fields.forEach((de,ge)=>{const Be=pe+ge;if(de.referencedType!==void 0){let ke=de.type,Ce=H.get(de.referencedType);if(!Ce){const ye=de.type.split(":");ke=ye[0],Ce=ye[1]}ke==="ref"?Ze.addField(Q,Be,de.name,Ce):Ze.addField(Q,Be,de.name,{[ke]:Ce})}else Ze.addField(Q,Be,de.name,de.type)})};v.types.forEach(Q=>{const ae=H.get(Q.id),pe=Ze.initialize(ae),de=[];let ge=Q;do de.push(ge),ge=v.types.find(ke=>ke.id===ge.extendsId);while(ge);let Be=0;de.reverse().forEach(ke=>{$(pe,ke,Be),Be+=ke.fields.length})});const ee=new(H.get(v.rootType||0));return new rn(ee,H)}}nt([q([sn])],pt.prototype,"types",void 0),nt([q("number")],pt.prototype,"rootType",void 0);function Gn(C){const d=C.root,m=d.callbacks,v=new WeakMap;let b;C.triggerChanges=function(ee){var ae;const Q=new Set;for(let pe=0,de=ee.length;pe<de;pe++){const ge=ee[pe],Be=ge.refId,ke=ge.ref,Ce=m[Be];if(Ce){if((ge.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ge.previousValue instanceof Ge){const ye=(ae=m[d.refIds.get(ge.previousValue)])==null?void 0:ae[t.OPERATION.DELETE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We]()}if(ke instanceof Ge){if(!Q.has(Be)){const ye=Ce==null?void 0:Ce[t.OPERATION.REPLACE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We]()}if(Ce.hasOwnProperty(ge.field)){const ye=Ce[ge.field];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.previousValue)}}else{if((ge.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(ge.previousValue!==void 0){const ye=Ce[t.OPERATION.DELETE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.previousValue,ge.dynamicIndex??ge.field)}if((ge.op&t.OPERATION.ADD)===t.OPERATION.ADD){const ye=Ce[t.OPERATION.ADD];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.dynamicIndex??ge.field)}}else if((ge.op&t.OPERATION.ADD)===t.OPERATION.ADD&&ge.previousValue!==ge.value){const ye=Ce[t.OPERATION.ADD];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.dynamicIndex??ge.field)}if(ge.value!==ge.previousValue&&(ge.value!==void 0||ge.previousValue!==void 0)){const ye=Ce[t.OPERATION.REPLACE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.dynamicIndex??ge.field)}}Q.add(Be)}}};function H(ee,Q){var de;let ae=((de=Q.instance)==null?void 0:de.constructor[Symbol.metadata])||ee,pe=Q.instance&&typeof Q.instance.forEach=="function"||ee&&typeof ee[Symbol.metadata]>"u";if(ae&&!pe){const ge=function(Be,ke,Ce,ye){return ye&&Q.instance[ke]!==void 0&&!v.has(b)&&Ce(Q.instance[ke],void 0),d.addCallback(d.refIds.get(Be),ke,Ce)};return new Proxy({listen:function(ke,Ce,ye=!0){if(Q.instance)return ge(Q.instance,ke,Ce,ye);{let We=()=>{};return Q.onInstanceAvailable((Rt,kt)=>{We=ge(Rt,ke,Ce,ye&&kt&&!v.has(b))}),()=>We()}},onChange:function(ke){return d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,ke)},bindTo:function(ke,Ce){return Ce||(Ce=Object.keys(ae).map(ye=>ae[ye].name)),d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,()=>{Ce.forEach(ye=>ke[ye]=Q.instance[ye])})}},{get(Be,ke){var ye;const Ce=ae[ae[ke]];if(Ce){const We=(ye=Q.instance)==null?void 0:ye[ke],Rt=(kt=>{const Dn=$(Q.instance).listen(ke,(Pi,ro)=>{kt(Pi,!1),Dn==null||Dn()},!1);d.refIds.get(We)!==void 0&&kt(We,!0)});return H(Ce.type,{instance:d.refIds.get(We)&&We,parentInstance:Q.instance,onInstanceAvailable:Rt})}else return Be[ke]},has(Be,ke){return ae[ke]!==void 0},set(Be,ke,Ce){throw new Error("not allowed")},deleteProperty(Be,ke){throw new Error("not allowed")}})}else{const ge=function(Ce,ye,We){return We&&Ce.forEach((Rt,kt)=>ye(Rt,kt)),d.addCallback(d.refIds.get(Ce),t.OPERATION.ADD,(Rt,kt)=>{v.set(ye,!0),b=ye,ye(Rt,kt),v.delete(ye),b=void 0})},Be=function(Ce,ye){return d.addCallback(d.refIds.get(Ce),t.OPERATION.DELETE,ye)},ke=function(Ce,ye){return d.addCallback(d.refIds.get(Ce),t.OPERATION.REPLACE,ye)};return new Proxy({onAdd:function(Ce,ye=!0){if(Q.instance)return ge(Q.instance,Ce,ye&&!v.has(b));if(Q.onInstanceAvailable){let We=()=>{};return Q.onInstanceAvailable((Rt,kt)=>{We=ge(Rt,Ce,ye&&kt&&!v.has(b))}),()=>We()}},onRemove:function(Ce){if(Q.instance)return Be(Q.instance,Ce);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(We=>{ye=Be(We,Ce)}),()=>ye()}},onChange:function(Ce){if(Q.instance)return ke(Q.instance,Ce);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(We=>{ye=ke(We,Ce)}),()=>ye()}}},{get(Ce,ye){if(!Ce[ye])throw new Error(`Can't access '${ye}' through callback proxy. access the instance directly.`);return Ce[ye]},has(Ce,ye){return Ce[ye]!==void 0},set(Ce,ye,We){throw new Error("not allowed")},deleteProperty(Ce,ye){throw new Error("not allowed")}})}}function $(ee){return H(void 0,{instance:ee})}return $}function ni(C,d){C.triggerChanges=d}class Ci{constructor(d=!1){this.iterable=d,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,d&&(this.items=[])}add(d,m=pi,v=!0){var ae,pe;const b=d==null?void 0:d[f],H=b.parent;if(b){if(!H&&b.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${b.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",d),!1;const $=d.constructor[Symbol.metadata];this.visible.add(b),this.iterable&&v&&this.items.push(d),v&&H&&this.addParentOf(b,m);let ee=this.changes.get(b.refId);ee===void 0&&(ee={},this.changes.set(b.refId,ee));let Q=!1;if(b.forEachChild((de,ge)=>{$&&$[ge].tag!==void 0&&$[ge].tag!==m||this.add(de.ref,m,!1)&&(Q=!0)}),m!==pi){this.tags||(this.tags=new WeakMap);let de;this.tags.has(b)?de=this.tags.get(b):(de=new Set,this.tags.set(b,de)),de.add(m),(pe=(ae=$==null?void 0:$[P])==null?void 0:ae[m])==null||pe.forEach(ge=>{b.getChange(ge)!==t.OPERATION.DELETE&&(ee[ge]=t.OPERATION.ADD)})}else if(!b.isNew||Q){const de=b.filteredChanges!==void 0?b.allFilteredChanges:b.allChanges,ge=this.invisible.has(b);for(let Be=0,ke=de.operations.length;Be<ke;Be++){const Ce=de.operations[Be];if(Ce===void 0)continue;const ye=b.indexedOperations[Ce]??t.OPERATION.ADD,We=$==null?void 0:$[Ce].tag;ye!==t.OPERATION.DELETE&&(ge||We===void 0||We===m)&&(ee[Ce]=ye,Q=!0)}}return Q}addParentOf(d,m){var H;const v=d.parent[f],b=d.parentIndex;if(!this.visible.has(v)){this.visible.add(v);const $=(H=v.parent)==null?void 0:H[f];$&&$.filteredChanges!==void 0&&this.addParentOf(v,m)}if(v.getChange(b)!==t.OPERATION.DELETE){let $=this.changes.get(v.refId);$===void 0&&($={},this.changes.set(v.refId,$)),this.tags||(this.tags=new WeakMap);let ee;this.tags.has(v)?ee=this.tags.get(v):(ee=new Set,this.tags.set(v,ee)),ee.add(m),$[b]=t.OPERATION.ADD}}remove(d,m=pi,v=!1){var Q;const b=d[f];if(!b)return console.warn("StateView#remove(), invalid object:",d),this;this.visible.delete(b),this.iterable&&!v&&Xt(this.items,this.items.indexOf(d));const $=b.ref.constructor[Symbol.metadata];let ee=this.changes.get(b.refId);if(ee===void 0&&(ee={},this.changes.set(b.refId,ee)),m===pi){const ae=b.parent;if(ae&&!Ze.isValidInstance(ae)&&b.isFiltered){const pe=ae[f];let de=this.changes.get(pe.refId);de===void 0?(de={},this.changes.set(pe.refId,de)):de[b.parentIndex]===t.OPERATION.ADD&&this.changes.delete(b.refId),de[b.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(b)}else(Q=$==null?void 0:$[T])==null||Q.forEach(pe=>ee[pe]=t.OPERATION.DELETE)}else $==null||$[P][m].forEach(ae=>ee[ae]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(b)){const ae=this.tags.get(b);m===void 0?this.tags.delete(b):(ae.delete(m),ae.size===0&&this.tags.delete(b))}return this}has(d){return this.visible.has(d[f])}hasTag(d,m=pi){var b;const v=(b=this.tags)==null?void 0:b.get(d[f]);return(v==null?void 0:v.has(m))??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let d=0,m=this.items.length;d<m;d++)this.remove(this.items[d],pi,!0);this.items.length=0}isChangeTreeVisible(d){let m=this.visible.has(d);return!m&&d.isVisibilitySharedWithParent&&this.visible.has(d.parent[f])&&(this.visible.add(d),m=!0),m}_recursiveDeleteVisibleChangeTree(d){d.forEachChild(m=>{this.visible.delete(m),this._recursiveDeleteVisibleChangeTree(m)})}}Me("map",{constructor:Hn}),Me("array",{constructor:Cn}),Me("set",{constructor:mr}),Me("collection",{constructor:Yi}),t.$changes=f,t.$childType=u,t.$decoder=a,t.$deleteByIndex=h,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Cn,t.ChangeTree=Ie,t.CollectionSchema=Yi,t.Decoder=rn,t.Encoder=Et,t.MapSchema=Hn,t.Metadata=Ze,t.Reflection=pt,t.ReflectionField=Fe,t.ReflectionType=sn,t.Schema=Ge,t.SetSchema=mr,t.StateView=Ci,t.TypeContext=Ee,t.decode=Se,t.decodeKeyValueOperation=rs,t.decodeSchemaOperation=qn,t.defineCustomTypes=Le,t.defineTypes=re,t.deprecated=ne,t.dumpChanges=Oe,t.encode=xe,t.encodeArray=Gt,t.encodeKeyValueOperation=He,t.encodeSchemaOperation=Ke,t.entity=yc,t.getDecoderStateCallbacks=Gn,t.getRawChangesCallback=ni,t.registerType=Me,t.schema=Ne,t.type=q,t.view=D}))})(Co,Co.exports)),Co.exports}var Mm;function wR(){if(Mm)return vf;Mm=1;var n=pc,e=kh();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return vf.H3TransportTransport=t,vf}var yf={},Sf,Em;function TR(){return Em||(Em=1,Sf=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Sf}var bm;function AR(){if(bm)return yf;bm=1;var n=TR();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return yf.WebSocketTransport=t,yf}var wm;function RR(){if(wm)return xf;wm=1;var n=wR(),e=AR();let t=class{constructor(r){switch(this.events={},r){case"h3":this.transport=new n.H3TransportTransport(this.events);break;default:this.transport=new e.WebSocketTransport(this.events);break}}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return xf.Connection=t,xf}var Mf={},Tm;function h_(){return Tm||(Tm=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(Mf)),Mf}var qa={},Am;function d_(){if(Am)return qa;Am=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return qa.getSerializer=t,qa.registerSerializer=e,qa}var Ef={},Rm;function p_(){if(Rm)return Ef;Rm=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return Ef.createNanoEvents=n,Ef}var Ya={},Cm;function CR(){if(Cm)return Ya;Cm=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return Ya.EventEmitter=n,Ya.createSignal=e,Ya}var Ka={},Pm;function m_(){if(Pm)return Ka;Pm=1;var n=kh();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return Ka.SchemaSerializer=t,Ka.getStateCallbacks=e,Ka}var ih;try{ih=new TextDecoder}catch{}var Ue,$i,K=0,Vt={},yt,Tr,oi=0,Fi=0,hn,lr,Rn=[],xt,Im={useRecords:!1,mapsAsObjects:!0};class g_{}const Vh=new g_;Vh.name="MessagePack 0xC1";var Ar=!1,__=2,PR;try{new Function("")}catch{__=1/0}class Pr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Ue)return E_(()=>(tc(),this?this.unpack(e,t):Pr.prototype.unpack.call(Im,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?($i=t.end||e.length,K=t.start||0):(K=0,$i=t>-1?t:e.length),Fi=0,Tr=null,hn=null,Ue=e;try{xt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw Ue=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Pr){if(Vt=this,this.structures)return yt=this.structures,Za(t);(!yt||yt.length>0)&&(yt=[])}else Vt=Im,(!yt||yt.length>0)&&(yt=[]);return Za(t)}unpackMultiple(e,t){let i,r=0;try{Ar=!0;let s=e.length,o=this?this.unpack(e,s):_c.unpack(e,s);if(t){if(t(o,r,K)===!1)return;for(;K<s;)if(r=K,t(Za(),r,K)===!1)return}else{for(i=[o];K<s;)r=K,i.push(Za());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Ar=!1,tc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function Za(n){try{if(!Vt.trusted&&!Ar){let t=yt.sharedLength||0;t<yt.length&&(yt.length=t)}let e;if(Vt.randomAccessStructure&&Ue[K]<64&&Ue[K]>=32&&PR||(e=nn()),hn&&(K=hn.postBundlePosition,hn=null),Ar&&(yt.restoreStructures=null),K==$i)yt&&yt.restoreStructures&&Dm(),yt=null,Ue=null,lr&&(lr=null);else{if(K>$i)throw new Error("Unexpected end of MessagePack data");if(!Ar){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw yt&&yt.restoreStructures&&Dm(),tc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||K>$i)&&(e.incomplete=!0),e}}function Dm(){for(let n in yt.restoreStructures)yt[n]=yt.restoreStructures[n];yt.restoreStructures=null}function nn(){let n=Ue[K++];if(n<160)if(n<128){if(n<64)return n;{let e=yt[n&63]||Vt.getStructures&&x_()[n&63];return e?(e.read||(e.read=Hh(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Vt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=y_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Vt.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(Fi>=K)return Tr.slice(K-oi,(K+=e)-oi);if(Fi==0&&$i<140){let t=e<16?Gh(e):v_(e);if(t!=null)return t}return rh(e)}else{let e;switch(n){case 192:return null;case 193:return hn?(e=nn(),e>0?hn[1].slice(hn.position1,hn.position1+=e):hn[0].slice(hn.position0,hn.position0-=e)):Vh;case 194:return!1;case 195:return!0;case 196:if(e=Ue[K++],e===void 0)throw new Error("Unexpected end of buffer");return bf(e);case 197:return e=xt.getUint16(K),K+=2,bf(e);case 198:return e=xt.getUint32(K),K+=4,bf(e);case 199:return Br(Ue[K++]);case 200:return e=xt.getUint16(K),K+=2,Br(e);case 201:return e=xt.getUint32(K),K+=4,Br(e);case 202:if(e=xt.getFloat32(K),Vt.useFloat32>2){let t=gc[(Ue[K]&127)<<1|Ue[K+1]>>7];return K+=4,(t*e+(e>0?.5:-.5)>>0)/t}return K+=4,e;case 203:return e=xt.getFloat64(K),K+=8,e;case 204:return Ue[K++];case 205:return e=xt.getUint16(K),K+=2,e;case 206:return e=xt.getUint32(K),K+=4,e;case 207:return Vt.int64AsType==="number"?(e=xt.getUint32(K)*4294967296,e+=xt.getUint32(K+4)):Vt.int64AsType==="string"?e=xt.getBigUint64(K).toString():Vt.int64AsType==="auto"?(e=xt.getBigUint64(K),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigUint64(K),K+=8,e;case 208:return xt.getInt8(K++);case 209:return e=xt.getInt16(K),K+=2,e;case 210:return e=xt.getInt32(K),K+=4,e;case 211:return Vt.int64AsType==="number"?(e=xt.getInt32(K)*4294967296,e+=xt.getUint32(K+4)):Vt.int64AsType==="string"?e=xt.getBigInt64(K).toString():Vt.int64AsType==="auto"?(e=xt.getBigInt64(K),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=xt.getBigInt64(K),K+=8,e;case 212:if(e=Ue[K++],e==114)return Bm(Ue[K++]&63);{let t=Rn[e];if(t)return t.read?(K++,t.read(nn())):t.noBuffer?(K++,t()):t(Ue.subarray(K,++K));throw new Error("Unknown extension "+e)}case 213:return e=Ue[K],e==114?(K++,Bm(Ue[K++]&63,Ue[K++])):Br(2);case 214:return Br(4);case 215:return Br(8);case 216:return Br(16);case 217:return e=Ue[K++],Fi>=K?Tr.slice(K-oi,(K+=e)-oi):DR(e);case 218:return e=xt.getUint16(K),K+=2,Fi>=K?Tr.slice(K-oi,(K+=e)-oi):LR(e);case 219:return e=xt.getUint32(K),K+=4,Fi>=K?Tr.slice(K-oi,(K+=e)-oi):NR(e);case 220:return e=xt.getUint16(K),K+=2,Nm(e);case 221:return e=xt.getUint32(K),K+=4,Nm(e);case 222:return e=xt.getUint16(K),K+=2,Om(e);case 223:return e=xt.getUint32(K),K+=4,Om(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const IR=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Hh(n,e){function t(){if(t.count++>__){let r=n.read=new Function("r","return function(){return "+(Vt.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":IR.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(nn);return n.highByte===0&&(n.read=Lm(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=nn()}return Vt.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?Lm(e,t):t}const Lm=(n,e)=>function(){let t=Ue[K++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=yt[i]||x_()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=Hh(r,n)),r.read()};function x_(){let n=E_(()=>(Ue=null,Vt.getStructures()));return yt=Vt._mergeStructures(n,yt)}var rh=ta,DR=ta,LR=ta,NR=ta;let OR=!1;function ta(n){let e;if(n<16&&(e=Gh(n)))return e;if(n>64&&ih)return ih.decode(Ue.subarray(K,K+=n));const t=K+n,i=[];for(e="";K<t;){const r=Ue[K++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=Ue[K++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=Ue[K++]&63,o=Ue[K++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=Ue[K++]&63,o=Ue[K++]&63,a=Ue[K++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=un.apply(String,i),i.length=0)}return i.length>0&&(e+=un.apply(String,i)),e}function Nm(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Vt.freezeData?Object.freeze(e):e}function Om(n){if(Vt.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=y_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}}var un=String.fromCharCode;function v_(n){let e=K,t=new Array(n);for(let i=0;i<n;i++){const r=Ue[K++];if((r&128)>0){K=e;return}t[i]=r}return un.apply(String,t)}function Gh(n){if(n<4)if(n<2){if(n===0)return"";{let e=Ue[K++];if((e&128)>1){K-=1;return}return un(e)}}else{let e=Ue[K++],t=Ue[K++];if((e&128)>0||(t&128)>0){K-=2;return}if(n<3)return un(e,t);let i=Ue[K++];if((i&128)>0){K-=3;return}return un(e,t,i)}else{let e=Ue[K++],t=Ue[K++],i=Ue[K++],r=Ue[K++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){K-=4;return}if(n<6){if(n===4)return un(e,t,i,r);{let s=Ue[K++];if((s&128)>0){K-=5;return}return un(e,t,i,r,s)}}else if(n<8){let s=Ue[K++],o=Ue[K++];if((s&128)>0||(o&128)>0){K-=6;return}if(n<7)return un(e,t,i,r,s,o);let a=Ue[K++];if((a&128)>0){K-=7;return}return un(e,t,i,r,s,o,a)}else{let s=Ue[K++],o=Ue[K++],a=Ue[K++],c=Ue[K++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){K-=8;return}if(n<10){if(n===8)return un(e,t,i,r,s,o,a,c);{let l=Ue[K++];if((l&128)>0){K-=9;return}return un(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=Ue[K++],h=Ue[K++];if((l&128)>0||(h&128)>0){K-=10;return}if(n<11)return un(e,t,i,r,s,o,a,c,l,h);let f=Ue[K++];if((f&128)>0){K-=11;return}return un(e,t,i,r,s,o,a,c,l,h,f)}else{let l=Ue[K++],h=Ue[K++],f=Ue[K++],u=Ue[K++];if((l&128)>0||(h&128)>0||(f&128)>0||(u&128)>0){K-=12;return}if(n<14){if(n===12)return un(e,t,i,r,s,o,a,c,l,h,f,u);{let p=Ue[K++];if((p&128)>0){K-=13;return}return un(e,t,i,r,s,o,a,c,l,h,f,u,p)}}else{let p=Ue[K++],g=Ue[K++];if((p&128)>0||(g&128)>0){K-=14;return}if(n<15)return un(e,t,i,r,s,o,a,c,l,h,f,u,p,g);let y=Ue[K++];if((y&128)>0){K-=15;return}return un(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y)}}}}}function Um(){let n=Ue[K++],e;if(n<192)e=n-160;else switch(n){case 217:e=Ue[K++];break;case 218:e=xt.getUint16(K),K+=2;break;case 219:e=xt.getUint32(K),K+=4;break;default:throw new Error("Expected string")}return ta(e)}function bf(n){return Vt.copyBuffers?Uint8Array.prototype.slice.call(Ue,K,K+=n):Ue.subarray(K,K+=n)}function Br(n){let e=Ue[K++];if(Rn[e]){let t;return Rn[e](Ue.subarray(K,t=K+=n),i=>{K=i;try{return nn()}finally{K=t}})}else throw new Error("Unknown extension type "+e)}var Fm=new Array(4096);function y_(){let n=Ue[K++];if(n>=160&&n<192){if(n=n-160,Fi>=K)return Tr.slice(K-oi,(K+=n)-oi);if(!(Fi==0&&$i<180))return rh(n)}else return K--,S_(nn());let e=(n<<5^(n>1?xt.getUint16(K):n>0?Ue[K]:0))&4095,t=Fm[e],i=K,r=K+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=xt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=Ue[i++],s!=t[o++]){i=1879048192;break}if(i===r)return K=i,t.string;r-=3,i=K}for(t=[],Fm[e]=t,t.bytes=n;i<r;)s=xt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=Ue[i++],t.push(s);let a=n<16?Gh(n):v_(n);return a!=null?t.string=a:t.string=rh(n)}function S_(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Vt.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const Bm=(n,e)=>{let t=nn().map(S_),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=yt[n];return r&&(r.isShared||Ar)&&((yt.restoreStructures||(yt.restoreStructures=[]))[n]=r),yt[n]=t,t.read=Hh(t,i),t.read()};Rn[0]=()=>{};Rn[0].noBuffer=!0;Rn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let UR={Error,TypeError,ReferenceError};Rn[101]=()=>{let n=nn();return(UR[n[0]]||Error)(n[1],{cause:n[2]})};Rn[105]=n=>{if(Vt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(K-4);lr||(lr=new Map);let t=Ue[K],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};lr.set(e,r);let s=nn();return r.used?Object.assign(i,s):(r.target=s,s)};Rn[112]=n=>{if(Vt.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=xt.getUint32(K-4),t=lr.get(e);return t.used=!0,t.target};Rn[115]=()=>new Set(nn());const M_=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let FR=typeof globalThis=="object"?globalThis:window;Rn[116]=n=>{let e=n[0],t=M_[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new FR[t](Uint8Array.prototype.slice.call(n,1).buffer)};Rn[120]=()=>{let n=nn();return new RegExp(n[0],n[1])};const BR=[];Rn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=K;return K+=e-n.length,hn=BR,hn=[Um(),Um()],hn.position0=0,hn.position1=0,hn.postBundlePosition=K,K=t,nn()};Rn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function E_(n){let e=$i,t=K,i=oi,r=Fi,s=Tr,o=lr,a=hn,c=new Uint8Array(Ue.slice(0,$i)),l=yt,h=yt.slice(0,yt.length),f=Vt,u=Ar,p=n();return $i=e,K=t,oi=i,Fi=r,Tr=s,lr=o,hn=a,Ue=c,Ar=u,yt=l,yt.splice(0,yt.length,...h),Vt=f,xt=new DataView(Ue.buffer,Ue.byteOffset,Ue.byteLength),p}function tc(){Ue=null,lr=null,yt=null}function zR(n){n.unpack?Rn[n.type]=n.unpack:Rn[n.type]=n}const gc=new Array(147);for(let n=0;n<256;n++)gc[n]=+("1e"+Math.floor(45.15-n*.30103));const kR=Pr;var _c=new Pr({useRecords:!1});const VR=_c.unpack,HR=_c.unpackMultiple,GR=_c.unpack,b_={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let w_=new Float32Array(1),zm=new Uint8Array(w_.buffer,0,4);function WR(n){w_[0]=n;let e=gc[(zm[3]&127)<<1|zm[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let fl;try{fl=new TextEncoder}catch{}let nc,Wh;const xc=typeof Buffer<"u",Ja=xc?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,T_=xc?Buffer:Uint8Array,km=xc?4294967296:2144337920;let ie,So,Bt,J=0,On,Zt=null,$R;const XR=21760,qR=/[\u0080-\uFFFF]/,Rs=Symbol("record-id");class na extends Pr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=T_.prototype.utf8Write?function(L,V){return ie.utf8Write(L,V,ie.byteLength-V)}:fl&&fl.encodeInto?function(L,V){return fl.encodeInto(L,ie.subarray(V)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=h>32||f+h>64,p=h+64,g=h+f+64;if(g>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let y=[],x=0,_=0;this.pack=this.encode=function(L,V){if(ie||(ie=new Ja(8192),Bt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,8192)),J=0),On=ie.length-10,On-J<2048?(ie=new Ja(ie.length),Bt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,ie.length)),On=ie.length-10,J=0):J=J+7&2147483640,t=J,V&P_&&(J+=V&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof L!="string"?(Zt=[],Zt.size=1/0):Zt=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let U=r.sharedLength||0;if(U>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let F=0;F<U;F++){let G=r[F];if(!G)continue;let Z,te=r.transitions;for(let ue=0,_e=G.length;ue<_e;ue++){let Re=G[ue];Z=te[Re],Z||(Z=te[Re]=Object.create(null)),te=Z}te[Rs]=F+64}this.lastNamedStructuresLength=U}c||(r.nextId=U+64)}i&&(i=!1);let A;try{a.randomAccessStructure&&L&&L.constructor&&L.constructor===Object?B(L):M(L);let U=Zt;if(Zt&&Gm(t,M,0),s&&s.idsToInsert){let F=s.idsToInsert.sort((ue,_e)=>ue.offset>_e.offset?1:-1),G=F.length,Z=-1;for(;U&&G>0;){let ue=F[--G].offset+t;ue<U.stringsPosition+t&&Z===-1&&(Z=0),ue>U.position+t?Z>=0&&(Z+=6):(Z>=0&&(Bt.setUint32(U.position+t,Bt.getUint32(U.position+t)+Z),Z=-1),U=U.previous,G++)}Z>=0&&U&&Bt.setUint32(U.position+t,Bt.getUint32(U.position+t)+Z),J+=F.length*6,J>On&&w(J),a.offset=J;let te=KR(ie.subarray(t,J),F);return s=null,te}return a.offset=J,V&R_?(ie.start=t,ie.end=J,ie):ie.subarray(t,J)}catch(U){throw A=U,U}finally{if(r&&(T(),i&&a.saveStructures)){let U=r.sharedLength||0,F=ie.subarray(t,J),G=JR(r,a);if(!A)return a.saveStructures(G,G.isCompatible)===!1?a.pack(L,V):(a.lastNamedStructuresLength=U,ie.length>1073741824&&(ie=null),F)}ie.length>1073741824&&(ie=null),V&C_&&(J=t)}};const T=()=>{_<10&&_++;let L=r.sharedLength||0;if(r.length>L&&!c&&(r.length=L),x>1e4)r.transitions=null,_=0,x=0,y.length>0&&(y=[]);else if(y.length>0&&!c){for(let V=0,A=y.length;V<A;V++)y[V][Rs]=0;y=[]}},P=L=>{var V=L.length;V<16?ie[J++]=144|V:V<65536?(ie[J++]=220,ie[J++]=V>>8,ie[J++]=V&255):(ie[J++]=221,Bt.setUint32(J,V),J+=4);for(let A=0;A<V;A++)M(L[A])},M=L=>{J>On&&(ie=w(J));var V=typeof L,A;if(V==="string"){let U=L.length;if(Zt&&U>=4&&U<4096){if((Zt.size+=U)>XR){let te,ue=(Zt[0]?Zt[0].length*3+Zt[1].length:0)+10;J+ue>On&&(ie=w(J+ue));let _e;Zt.position?(_e=Zt,ie[J]=200,J+=3,ie[J++]=98,te=J-t,J+=4,Gm(t,M,0),Bt.setUint16(te+t-3,J-t-te)):(ie[J++]=214,ie[J++]=98,te=J-t,J+=4),Zt=["",""],Zt.previous=_e,Zt.size=0,Zt.position=te}let Z=qR.test(L);Zt[Z?0:1]+=L,ie[J++]=193,M(Z?-U:U);return}let F;U<32?F=1:U<256?F=2:U<65536?F=3:F=5;let G=U*3;if(J+G>On&&(ie=w(J+G)),U<64||!o){let Z,te,ue,_e=J+F;for(Z=0;Z<U;Z++)te=L.charCodeAt(Z),te<128?ie[_e++]=te:te<2048?(ie[_e++]=te>>6|192,ie[_e++]=te&63|128):(te&64512)===55296&&((ue=L.charCodeAt(Z+1))&64512)===56320?(te=65536+((te&1023)<<10)+(ue&1023),Z++,ie[_e++]=te>>18|240,ie[_e++]=te>>12&63|128,ie[_e++]=te>>6&63|128,ie[_e++]=te&63|128):(ie[_e++]=te>>12|224,ie[_e++]=te>>6&63|128,ie[_e++]=te&63|128);A=_e-J-F}else A=o(L,J+F);A<32?ie[J++]=160|A:A<256?(F<2&&ie.copyWithin(J+2,J+1,J+1+A),ie[J++]=217,ie[J++]=A):A<65536?(F<3&&ie.copyWithin(J+3,J+2,J+2+A),ie[J++]=218,ie[J++]=A>>8,ie[J++]=A&255):(F<5&&ie.copyWithin(J+5,J+3,J+3+A),ie[J++]=219,Bt.setUint32(J,A),J+=4),J+=A}else if(V==="number")if(L>>>0===L)L<32||L<128&&this.useRecords===!1||L<64&&!this.randomAccessStructure?ie[J++]=L:L<256?(ie[J++]=204,ie[J++]=L):L<65536?(ie[J++]=205,ie[J++]=L>>8,ie[J++]=L&255):(ie[J++]=206,Bt.setUint32(J,L),J+=4);else if(L>>0===L)L>=-32?ie[J++]=256+L:L>=-128?(ie[J++]=208,ie[J++]=L+256):L>=-32768?(ie[J++]=209,Bt.setInt16(J,L),J+=2):(ie[J++]=210,Bt.setInt32(J,L),J+=4);else{let U;if((U=this.useFloat32)>0&&L<4294967296&&L>=-2147483648){ie[J++]=202,Bt.setFloat32(J,L);let F;if(U<4||(F=L*gc[(ie[J]&127)<<1|ie[J+1]>>7])>>0===F){J+=4;return}else J--}ie[J++]=203,Bt.setFloat64(J,L),J+=8}else if(V==="object"||V==="function")if(!L)ie[J++]=192;else{if(s){let F=s.get(L);if(F){if(!F.id){let G=s.idsToInsert||(s.idsToInsert=[]);F.id=G.push(F)}ie[J++]=214,ie[J++]=112,Bt.setUint32(J,F.id),J+=4;return}else s.set(L,{offset:J-t})}let U=L.constructor;if(U===Object)S(L);else if(U===Array)P(L);else if(U===Map)if(this.mapAsEmptyObject)ie[J++]=128;else{A=L.size,A<16?ie[J++]=128|A:A<65536?(ie[J++]=222,ie[J++]=A>>8,ie[J++]=A&255):(ie[J++]=223,Bt.setUint32(J,A),J+=4);for(let[F,G]of L)M(F),M(G)}else{for(let F=0,G=nc.length;F<G;F++){let Z=Wh[F];if(L instanceof Z){let te=nc[F];if(te.write){te.type&&(ie[J++]=212,ie[J++]=te.type,ie[J++]=0);let et=te.write.call(this,L);et===L?Array.isArray(L)?P(L):S(L):M(et);return}let ue=ie,_e=Bt,Re=J;ie=null;let st;try{st=te.pack.call(this,L,et=>(ie=ue,ue=null,J+=et,J>On&&w(J),{target:ie,targetView:Bt,position:J-et}),M)}finally{ue&&(ie=ue,Bt=_e,J=Re,On=ie.length-10)}st&&(st.length+J>On&&w(st.length+J),J=YR(st,ie,J,te.type));return}}if(Array.isArray(L))P(L);else{if(L.toJSON){const F=L.toJSON();if(F!==L)return M(F)}if(V==="function")return M(this.writeFunction&&this.writeFunction(L));S(L)}}}else if(V==="boolean")ie[J++]=L?195:194;else if(V==="bigint"){if(L<BigInt(1)<<BigInt(63)&&L>=-(BigInt(1)<<BigInt(63)))ie[J++]=211,Bt.setBigInt64(J,L);else if(L<BigInt(1)<<BigInt(64)&&L>0)ie[J++]=207,Bt.setBigUint64(J,L);else if(this.largeBigIntToFloat)ie[J++]=203,Bt.setFloat64(J,Number(L));else{if(this.largeBigIntToString)return M(L.toString());if(this.useBigIntExtension&&L<BigInt(2)**BigInt(1023)&&L>-(BigInt(2)**BigInt(1023))){ie[J++]=199,J++,ie[J++]=66;let U=[],F;do{let G=L&BigInt(255);F=(G&BigInt(128))===(L<BigInt(0)?BigInt(128):BigInt(0)),U.push(G),L>>=BigInt(8)}while(!((L===BigInt(0)||L===BigInt(-1))&&F));ie[J-2]=U.length;for(let G=U.length;G>0;)ie[J++]=Number(U[--G]);return}else throw new RangeError(L+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}J+=8}else if(V==="undefined")this.encodeUndefinedAsNil?ie[J++]=192:(ie[J++]=212,ie[J++]=0,ie[J++]=0);else throw new Error("Unknown type: "+V)},I=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?L=>{let V;if(this.skipValues){V=[];for(let F in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(F))&&!this.skipValues.includes(L[F])&&V.push(F)}else V=Object.keys(L);let A=V.length;A<16?ie[J++]=128|A:A<65536?(ie[J++]=222,ie[J++]=A>>8,ie[J++]=A&255):(ie[J++]=223,Bt.setUint32(J,A),J+=4);let U;if(this.coercibleKeyAsNumber)for(let F=0;F<A;F++){U=V[F];let G=Number(U);M(isNaN(G)?U:G),M(L[U])}else for(let F=0;F<A;F++)M(U=V[F]),M(L[U])}:L=>{ie[J++]=222;let V=J-t;J+=2;let A=0;for(let U in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(U))&&(M(U),M(L[U]),A++);if(A>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ie[V+++t]=A>>8,ie[V+t]=A&255},R=this.useRecords===!1?I:e.progressiveRecords&&!u?L=>{let V,A=r.transitions||(r.transitions=Object.create(null)),U=J++-t,F;for(let G in L)if(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(G)){if(V=A[G],V)A=V;else{let Z=Object.keys(L),te=A;A=r.transitions;let ue=0;for(let _e=0,Re=Z.length;_e<Re;_e++){let st=Z[_e];V=A[st],V||(V=A[st]=Object.create(null),ue++),A=V}U+t+1==J?(J--,z(A,Z,ue)):O(A,Z,U,ue),F=!0,A=te[G]}M(L[G])}if(!F){let G=A[Rs];G?ie[U+t]=G:O(A,Object.keys(L),U,0)}}:L=>{let V,A=r.transitions||(r.transitions=Object.create(null)),U=0;for(let G in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(G))&&(V=A[G],V||(V=A[G]=Object.create(null),U++),A=V);let F=A[Rs];F?F>=96&&u?(ie[J++]=((F-=96)&31)+96,ie[J++]=F>>5):ie[J++]=F:z(A,A.__keys__||Object.keys(L),U);for(let G in L)(typeof L.hasOwnProperty!="function"||L.hasOwnProperty(G))&&M(L[G])},N=typeof this.useRecords=="function"&&this.useRecords,S=N?L=>{N(L)?R(L):I(L)}:R,w=L=>{let V;if(L>16777216){if(L-t>km)throw new Error("Packed buffer would be larger than maximum buffer size");V=Math.min(km,Math.round(Math.max((L-t)*(L>67108864?1.25:2),4194304)/4096)*4096)}else V=(Math.max(L-t<<2,ie.length-1)>>12)+1<<12;let A=new Ja(V);return Bt=A.dataView||(A.dataView=new DataView(A.buffer,0,V)),L=Math.min(L,ie.length),ie.copy?ie.copy(A,0,t,L):A.set(ie.slice(t,L)),J-=t,t=0,On=A.length-10,ie=A},z=(L,V,A)=>{let U=r.nextId;U||(U=64),U<p&&this.shouldShareStructure&&!this.shouldShareStructure(V)?(U=r.nextOwnId,U<g||(U=p),r.nextOwnId=U+1):(U>=g&&(U=p),r.nextId=U+1);let F=V.highByte=U>=96&&u?U-96>>5:-1;L[Rs]=U,L.__keys__=V,r[U-64]=V,U<p?(V.isShared=!0,r.sharedLength=U-63,i=!0,F>=0?(ie[J++]=(U&31)+96,ie[J++]=F):ie[J++]=U):(F>=0?(ie[J++]=213,ie[J++]=114,ie[J++]=(U&31)+96,ie[J++]=F):(ie[J++]=212,ie[J++]=114,ie[J++]=U),A&&(x+=_*A),y.length>=f&&(y.shift()[Rs]=0),y.push(L),M(V))},O=(L,V,A,U)=>{let F=ie,G=J,Z=On,te=t;ie=So,J=0,t=0,ie||(So=ie=new Ja(8192)),On=ie.length-10,z(L,V,U),So=ie;let ue=J;if(ie=F,J=G,On=Z,t=te,ue>1){let _e=J+ue-1;_e>On&&w(_e);let Re=A+t;ie.copyWithin(Re+ue,Re+1,J),ie.set(So.slice(0,ue),Re),J=_e}else ie[A+t]=So[0]},B=L=>{let V=$R(L,ie,t,J,r,w,(A,U,F)=>{if(F)return i=!0;J=U;let G=ie;return M(A),T(),G!==ie?{position:J,targetView:Bt,target:ie}:J},this);if(V===0)return S(L);J=V}}useBuffer(e){ie=e,ie.dataView||(ie.dataView=new DataView(ie.buffer,ie.byteOffset,ie.byteLength)),Bt=ie.dataView,J=0}set position(e){J=e}get position(){return J}set buffer(e){ie=e}get buffer(){return ie}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}Wh=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,g_];nc=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?Vm(n,16,e):Hm(xc?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==T_&&this.moreTypes?Vm(n,M_.indexOf(t.name),e):Hm(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function Vm(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function Hm(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function YR(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function KR(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function Gm(n,e,t){if(Zt.length>0){Bt.setUint32(Zt.position+n,J+t-Zt.position-n),Zt.stringsPosition=J-n;let i=Zt;Zt=null,e(i[0]),e(i[1])}}function ZR(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");Wh.unshift(n.Class),nc.unshift(n)}zR(n)}function JR(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let A_=new na({useRecords:!1});const jR=A_.pack,QR=A_.pack,eC=na,{NEVER:tC,ALWAYS:nC,DECIMAL_ROUND:iC,DECIMAL_FIT:rC}=b_,R_=512,C_=1024,P_=2048;function sC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return oC(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return aC(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*oC(n,e){const t=new na(e);for(const i of n)yield t.pack(i)}async function*aC(n,e){const t=new na(e);for await(const i of n)yield t.pack(i)}function lC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Pr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const cC=lC,fC=sC,uC=!1,hC=!0,dC=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:nC,C1:Vh,DECIMAL_FIT:rC,DECIMAL_ROUND:iC,Decoder:kR,Encoder:eC,FLOAT32_OPTIONS:b_,NEVER:tC,Packr:na,RESERVE_START_SPACE:P_,RESET_BUFFER_MODE:C_,REUSE_BUFFER_MODE:R_,Unpackr:Pr,addExtension:ZR,clearSource:tc,decode:GR,decodeIter:cC,encode:QR,encodeIter:fC,isNativeAccelerationEnabled:OR,mapsAsObjects:hC,pack:jR,roundFloat32:WR,unpack:VR,unpackMultiple:HR,useRecords:uC},Symbol.toStringTag,{value:"Module"})),pC=Bh(dC);var Wm;function D_(){if(Wm)return _f;Wm=1;var n=RR(),e=h_(),t=d_(),i=p_(),r=CR(),s=kh(),o=m_(),a=mc(),c=pC;let l=class I_{constructor(f,u){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),u&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=u,this.serializer.state=new u),this.onError((p,g)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${p}) ${g}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,u,p=this,g,y){const x=new n.Connection(g.protocol);if(p.connection=x,x.events.onmessage=I_.prototype.onMessageCallback.bind(p),x.events.onclose=function(_){var T;if(!p.hasJoined){(T=console.warn)===null||T===void 0||T.call(console,`Room connection was closed unexpectedly (${_.code}): ${_.reason}`),p.onError.invoke(_.code,_.reason);return}_.code===a.CloseCode.DEVMODE_RESTART&&u?u():(p.onLeave.invoke(_.code,_.reason),p.destroy())},x.events.onerror=function(_){var T;(T=console.warn)===null||T===void 0||T.call(console,`Room, onError (${_.code}): ${_.reason}`),p.onError.invoke(_.code,_.reason)},g.protocol==="h3"){const _=new URL(f);x.connect(_.origin,g)}else x.connect(f,y)}leave(f=!0){return new Promise(u=>{this.onLeave(p=>u(p)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(f,u){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),u)}send(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const g=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.send(g)}sendUnreliable(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const g=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.sendUnreliable(g)}sendBytes(f,u){const p={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),u.byteLength+p.offset>this.packr.buffer.byteLength){const g=new Uint8Array(p.offset+u.byteLength);g.set(this.packr.buffer),this.packr.useBuffer(g)}this.packr.buffer.set(u,p.offset),this.connection.send(this.packr.buffer.subarray(0,p.offset+u.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const u=new Uint8Array(f.data),p={offset:1},g=u[0];if(g===e.Protocol.JOIN_ROOM){const y=s.decode.utf8Read(u,p,u[p.offset++]);if(this.serializerId=s.decode.utf8Read(u,p,u[p.offset++]),!this.serializer){const x=t.getSerializer(this.serializerId);this.serializer=new x}u.byteLength>p.offset&&this.serializer.handshake&&this.serializer.handshake(u,p),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(g===e.Protocol.ERROR){const y=s.decode.number(u,p),x=s.decode.string(u,p);this.onError.invoke(y,x)}else if(g===e.Protocol.LEAVE_ROOM)this.leave();else if(g===e.Protocol.ROOM_STATE)this.serializer.setState(u,p),this.onStateChange.invoke(this.serializer.getState());else if(g===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(u,p),this.onStateChange.invoke(this.serializer.getState());else if(g===e.Protocol.ROOM_DATA){const y=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p),x=u.byteLength>p.offset?c.unpack(u,{start:p.offset}):void 0;this.dispatchMessage(y,x)}else if(g===e.Protocol.ROOM_DATA_BYTES){const y=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p);this.dispatchMessage(y,u.subarray(p.offset))}}dispatchMessage(f,u){var p;const g=this.getMessageHandlerKey(f);this.onMessageHandlers.events[g]?this.onMessageHandlers.emit(g,u):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,u):(p=console.warn)===null||p===void 0||p.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return _f.Room=l,_f}var wf={};function $m(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Ri(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),$m(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return $m(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var mC=Ri.bind(Ri,"GET"),gC=Ri.bind(Ri,"POST"),_C=Ri.bind(Ri,"PATCH"),xC=Ri.bind(Ri,"DELETE"),vC=Ri.bind(Ri,"PUT");const yC=Object.freeze(Object.defineProperty({__proto__:null,del:xC,get:mC,patch:_C,post:gC,put:vC,send:Ri},Symbol.toStringTag,{value:"Module"})),SC=Bh(yC);var Xm;function MC(){if(Xm)return wf;Xm=1;var n=mc(),e=SC;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,u=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!u?l:new n.ServerError(f,u)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return wf.HTTP=r,wf}var Tf={},Mo={},qm;function EC(){if(qm)return Mo;qm=1;var n=pc;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Mo.getItem=s,Mo.removeItem=r,Mo.setItem=i,Mo}var Ym;function L_(){if(Ym)return Tf;Ym=1;var n=pc,e=EC(),t=p_(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,u)=>{this.getUserData().then(p=>{this.emitChange(Object.assign(Object.assign({},p),{token:this.token}))}).catch(p=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(u),u})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((u,p)=>{const g=f.width||480,y=f.height||768,x=this.token?`?token=${this.token}`:"",_=`Login with ${h[0].toUpperCase()+h.substring(1)}`,T=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${x}`),P=screen.width/2-g/2,M=screen.height/2-y/2;n.__classPrivateFieldSet(this,s,window.open(T,_,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+g+", height="+y+", top="+M+", left="+P),"f");const I=N=>{N.data.user===void 0&&N.data.token===void 0||(clearInterval(R),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",I),N.data.error!==void 0?p(N.data.error):(u(N.data),this.emitChange(N.data)))},R=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),p("cancelled"),window.removeEventListener("message",I))},200);window.addEventListener("message",I)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,Tf.Auth=a,Tf}var Af={},Km;function bC(){if(Km)return Af;Km=1;function n(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Af.discordURLBuilder=n,Af}var Zm;function wC(){if(Zm)return Xa;Zm=1;var n=pc,e=mc(),t=D_(),i=MC(),r=L_(),s=bC(),o;class a extends Error{constructor(f,u){super(f),this.code=u,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window==null?void 0:window.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,u){var p,g;if(typeof f=="string"){const y=f.startsWith("/")?new URL(f,c):new URL(f),x=y.protocol==="https:"||y.protocol==="wss:",_=Number(y.port||(x?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:_,secure:x,searchParams:y.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,(u==null?void 0:u.headers)||{}),this.auth=new r.Auth(this.http),this.urlBuilder=u==null?void 0:u.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((g=(p=window==null?void 0:window.location)===null||p===void 0?void 0:p.hostname)===null||g===void 0)&&g.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("joinOrCreate",u,p,g)})}create(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("create",u,p,g)})}join(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("join",u,p,g)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("joinById",u,p,g)})}reconnect(f,u){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof u=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,g]=f.split(":");if(!p||!g)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:g},u)})}consumeSeatReservation(f,u,p){return n.__awaiter(this,void 0,void 0,function*(){const g=this.createRoom(f.room.name,u);g.roomId=f.room.roomId,g.sessionId=f.sessionId;const y={sessionId:g.sessionId};f.reconnectionToken&&(y.reconnectionToken=f.reconnectionToken);const x=p||g;return g.connect(this.buildEndpoint(f.room,y,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${g.roomId}'...`);let _=0,T=8;const P=()=>n.__awaiter(this,void 0,void 0,function*(){_++;try{yield this.consumeSeatReservation(f,u,x),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${g.roomId}'`)}catch{_<T?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${_} out of ${T})`),setTimeout(P,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(P,2e3)})),x,f,this.http.headers),new Promise((_,T)=>{const P=(M,I)=>T(new e.ServerError(M,I));x.onError.once(P),x.onJoin.once(()=>{x.onError.remove(P),_(x)})})})}createMatchMakeRequest(f,u){return n.__awaiter(this,arguments,void 0,function*(p,g,y={},x,_){const T=(yield this.http.post(`matchmake/${p}/${g}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(T.error)throw new a(T.error,T.code);return p==="reconnect"&&(T.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(T,x,_)})}createRoom(f,u){return new t.Room(f,u)}buildEndpoint(f,u={},p="ws"){let g=this.settings.searchParams||"";this.http.authToken&&(u._authToken=this.http.authToken);for(const _ in u)u.hasOwnProperty(_)&&(g+=(g?"&":"")+`${_}=${u[_]}`);p==="h3"&&(p="http");let y=this.settings.secure?`${p}s://`:`${p}://`;f.publicAddress?y+=`${f.publicAddress}`:y+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const x=`${y}/${f.processId}/${f.roomId}?${g}`;return this.urlBuilder?this.urlBuilder(new URL(x)):x}getHttpEndpoint(f=""){const u=f.startsWith("/")?f:`/${f}`;let p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${u}`;return this.settings.searchParams&&(p+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",Xa.Client=l,Xa.MatchMakeError=a,Xa}var Rf={},Jm;function TC(){if(Jm)return Rf;Jm=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Rf.NoneSerializer=n,Rf}var jm;function AC(){return jm||(jm=1,(function(n){vR();var e=wC(),t=h_(),i=D_(),r=L_(),s=mc(),o=m_(),a=TC(),c=d_();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(mf)),mf}var RC=AC();const CC="wss://cargo-skies.fly.dev";async function PC(n,e){const t=new RC.Client(CC),i=e===null?await t.create("race",{nickname:n,code:s1()}):await t.join("race",{nickname:n,code:e.toUpperCase()});return{room:i,sessionId:i.sessionId,isHost:()=>i.state.hostSessionId===i.sessionId,sendInput:r=>i.send("input",r),start:()=>i.send("start",{}),setOptions:r=>i.send("options",r)}}const N_="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",O_="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:320px;display:flex;flex-direction:column;gap:12px",ul="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let bn=null;const IC=()=>["localhost","127.0.0.1"].includes(location.hostname)||!0;function DC(n,e){var c;const t=IC(),i=t?"":"disabled";bn=document.createElement("div"),bn.style.cssText=N_;const r=document.createElement("div");if(r.style.cssText=O_,r.innerHTML=`
    <h1 style="margin:0;font-size:24px">Cargo Skies ✈️</h1>
    <input id="nick" placeholder="Your pilot name" maxlength="16"
           style="padding:10px;border-radius:8px;border:none;font-size:16px" />
    <div id="mp" style="display:flex;flex-direction:column;gap:12px">
      <button id="create" ${i} style="${ul}">Start a race</button>
      <div style="display:flex;gap:8px">
        <input id="code" placeholder="Code" maxlength="4" ${i}
               style="padding:10px;border-radius:8px;border:none;font-size:16px;width:90px;text-transform:uppercase" />
        <button id="join" ${i} style="${ul};background:#3d6ee8;flex:1">Join a race</button>
      </div>
    </div>
    ${t?"":'<div style="font-size:12px;opacity:.6;margin-top:-6px">Multiplayer races are coming soon ✨</div>'}
    <div style="height:1px;background:rgba(255,255,255,.15);margin:4px 0"></div>
    <button id="practice" style="${ul};background:#2fbf71">Practice (solo) — no server needed</button>`,bn.appendChild(r),document.body.appendChild(bn),!t){const l=r.querySelector("#mp");l.style.opacity="0.35";for(const h of l.querySelectorAll("button, input"))h.style.cursor="not-allowed"}const s=r.querySelector("#nick"),o=r.querySelector("#code"),a=(c=/^\/r\/([A-Za-z0-9]{4})$/.exec(location.pathname))==null?void 0:c[1];a&&(o.value=a.toUpperCase()),r.querySelector("#create").addEventListener("click",()=>{n(s.value||"Pilot",null)}),r.querySelector("#join").addEventListener("click",()=>{o.value.length===4&&n(s.value||"Pilot",o.value)}),r.querySelector("#practice").addEventListener("click",()=>{e()})}const LC="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer;color:#fff",Qm=(n,e,t)=>`<div data-${n} style="display:flex;gap:6px">${e.map(i=>`<button data-v="${i}" style="${LC};background:${i===t?"#e84d3d":"rgba(255,255,255,.12)"}">${i}</button>`).join("")}</div>`;function NC(n,e,t,i){var l;bn||(bn=document.createElement("div"),bn.style.cssText=N_,document.body.appendChild(bn));const r=n.hostSessionId===e,s=[];n.players.forEach(h=>s.push(h.nickname));const o=`${location.origin}/r/${n.code}`,a=`≈ ${n.legCount*2} min`,c=r?`
      <div style="font-size:13px;opacity:.8">Legs per contract (${a})</div>
      ${Qm("legs",["2","3","4","5","6"],String(n.legCount))}
      <div style="font-size:13px;opacity:.8">Difficulty</div>
      ${Qm("diff",["kids","normal","expert"],n.difficulty)}`:`<div style="opacity:.8;font-size:14px">Route: ${n.legCount} legs · ${n.difficulty} · ${a}</div>`;bn.innerHTML=`
    <div style="${O_}">
      <h2 style="margin:0">Room ${n.code}</h2>
      <div style="opacity:.8">Share: <a href="${o}" style="color:#8fb7ff">${o}</a></div>
      <div>${s.map(h=>`🛩️ ${h}`).join("<br>")}</div>
      ${c}
      ${r?`<button id="go" style="${ul}">Start race</button>`:"<div style='opacity:.7'>Waiting for host…</div>"}
    </div>`,(l=bn.querySelector("#go"))==null||l.addEventListener("click",t);for(const h of bn.querySelectorAll("[data-legs] button"))h.addEventListener("click",()=>i({legCount:Number(h.dataset.v)}));for(const h of bn.querySelectorAll("[data-diff] button"))h.addEventListener("click",()=>i({difficulty:h.dataset.v??"normal"}))}function e0(){bn==null||bn.remove(),bn=null}const OC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",UC="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:360px;display:flex;flex-direction:column;gap:14px",ja="padding:10px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 16px system-ui;cursor:pointer",Eo="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer";let vi=null;function FC(n,e){vi==null||vi.remove(),vi=document.createElement("div"),vi.style.cssText=OC;const t=document.createElement("div");t.style.cssText=UC;const i=Object.keys(Cs).map(u=>`<button data-plane="${u}" title="${Cs[u].blurb}" style="${Eo}">${Cs[u].emoji}<br>${Cs[u].name}</button>`).join("");t.innerHTML=`
    <h2 style="margin:0">Solo flight 🛩️</h2>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Your plane</div>
      <div data-planes style="display:flex;gap:6px">${i}</div>
      <div data-blurb style="font-size:12px;opacity:.7;margin-top:4px;min-height:14px"></div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Difficulty</div>
      <div data-diff style="display:flex;gap:6px">
        <button data-v="kids" style="${Eo}">Kids</button>
        <button data-v="normal" style="${Eo}">Normal</button>
        <button data-v="expert" style="${Eo}">Expert</button>
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Plane speed</div>
      <div data-speed style="display:flex;gap:6px">
        ${Object.keys(Mu).map(u=>`<button data-v="${u}" style="${Eo}">${Mu[u].name}</button>`).join("")}
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Legs per contract: <b data-legs-label>3</b></div>
      <input data-legs type="range" min="1" max="6" value="3" style="width:100%" />
    </div>
    <button data-contract style="${ja}">Start contract</button>
    <button data-trial style="${ja};background:#e8a53d">⏱ Timed trial (race your ghost)</button>
    <div style="display:flex;gap:8px">
      <button data-free style="${ja};background:#3d6ee8;flex:1">Free fly</button>
      <button data-passport style="${ja};background:#9a6dce;flex:1">📔 Passport</button>
    </div>`,vi.appendChild(t),document.body.appendChild(vi);let r="normal",s="seaplane",o="normal";const a=(u,p)=>{for(const g of t.querySelectorAll(`${u} button`))g.style.background=p(g)?"#e84d3d":"rgba(255,255,255,.12)",g.style.color="#fff"},c=()=>{a("[data-diff]",u=>u.dataset.v===r),a("[data-planes]",u=>u.dataset.plane===s),a("[data-speed]",u=>u.dataset.v===o),t.querySelector("[data-blurb]").textContent=Cs[s].blurb};c();for(const u of t.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>{r=u.dataset.v,c()});for(const u of t.querySelectorAll("[data-planes] button"))u.addEventListener("click",()=>{s=u.dataset.plane,c()});for(const u of t.querySelectorAll("[data-speed] button"))u.addEventListener("click",()=>{o=u.dataset.v,c()});const l=t.querySelector("[data-legs]"),h=t.querySelector("[data-legs-label]");l.addEventListener("input",()=>{h.textContent=l.value});const f=u=>({mode:u,difficulty:r,legCount:Number(l.value),plane:s,speed:o});t.querySelector("[data-contract]").addEventListener("click",()=>n(f("contract"))),t.querySelector("[data-trial]").addEventListener("click",()=>n(f("trial"))),t.querySelector("[data-free]").addEventListener("click",()=>n(f("free"))),t.querySelector("[data-passport]").addEventListener("click",e)}function BC(){vi==null||vi.remove(),vi=null}const hl=n=>{const e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(1).padStart(4,"0")}`},zC={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function kC(n){let e=null,t=0,i=0,r=0,s=0,o=[],a=0;const c=()=>(e==null?void 0:e.legs[t])??null,l=()=>{var f;const h=c();!h||!e||(i=0,s=0,n.hints.setTarget(h.countryId),n.hints.setFlags(Eu(0,e.difficulty)),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,hc(((f=n.countries[h.countryId])==null?void 0:f.cca2)??"")))};return{startContract(h){e=f1(n.countries,n.landmarks,n.riddles,{seed:h.seed??Date.now()>>>0,legCount:h.legCount,difficulty:h.difficulty}),t=0,r=0,o=[],a=0,l()},stop(){e=null,n.hints.clear(),n.beacon.hide(),n.banner.hide()},isActive(){return e!==null},update(h,f){var y;const u=c();if(!e||!u)return;if(a>0){a-=f,a<=0&&l();return}i+=f,r+=f,n.banner.setClock(`⏱ ${hl(r)}`);const p=Eu(i,e.difficulty);n.hints.setFlags(p),n.banner.setCompass(p.compass?(K0(h.lat,h.lon,u.zone.lat,u.zone.lon)-h.headingDeg+360)%360:null);const g=Z0(h,u,s,f);if(s=g.dwellS,n.banner.setDwell(u.type==="refuel"&&g.inZone?s/wh:null),n.banner.setWarning(g.requirementBlocked?zC[u.type]??null:null),g.complete){o.push(i);const x=((y=n.countries[u.countryId])==null?void 0:y.name)??u.countryId;if(n.hints.clear(),n.beacon.hide(),t+1<e.legs.length)n.banner.toast(`✅ ${x}! Leg ${t+1} of ${e.legs.length} done`),t+=1,a=1.2;else{n.banner.hide();const _={contract:e,legTimesS:o,totalS:r};e=null,n.onContractComplete(_)}}}}}const t0=13606703,VC=16765471;function HC(n){let e=null,t={continent:!1,outline:!1};const i=new Set,r=()=>{var s;for(const o of i)(s=n.countryMaterials.get(o))==null||s.emissive.setHex(0);i.clear()};return{setTarget(s){r(),e=s},setFlags(s){!s.continent&&t.continent&&r(),t=s},update(s){if(!e)return;const o=n.continentOf.get(e);if(t.continent&&o){const c=.12+.08*Math.sin(s*2.5);for(const[l,h]of n.countryMaterials)n.continentOf.get(l)===o&&l!==e&&(h.emissive.setHex(t0),h.emissiveIntensity=c,i.add(l))}const a=n.countryMaterials.get(e);a&&(t.outline?(a.emissive.setHex(VC),a.emissiveIntensity=.4+.3*Math.sin(s*5),i.add(e)):t.continent&&(a.emissive.setHex(t0),a.emissiveIntensity=.12+.08*Math.sin(s*2.5),i.add(e)))},clear(){r(),e=null,t={continent:!1,compass:!1,outline:!1}}}}const GC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",WC="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:380px;display:flex;flex-direction:column;gap:12px",n0="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let yi=null;function $C(n,e,t,i,r){yi==null||yi.remove(),yi=document.createElement("div"),yi.style.cssText=GC;const s=n.contract.legs.map((c,l)=>{const h=e[c.countryId],f=t.includes(c.countryId)?" 🆕":"";return`<tr>
        <td style="padding:3px 10px 3px 0;opacity:.7">${l+1}.</td>
        <td style="padding:3px 10px 3px 0">${hc((h==null?void 0:h.cca2)??"")} ${(h==null?void 0:h.name)??c.countryId}${f}</td>
        <td style="padding:3px 0;text-align:right;font-variant-numeric:tabular-nums">${hl(n.legTimesS[l]??0)}</td>
      </tr>`}).join(""),o=i!==null?n.totalS<=i?'<div style="color:#2fbf71;font-weight:700">🎉 New best time!</div>':`<div style="opacity:.8">Best: ${hl(i)}</div>`:"",a=document.createElement("div");a.style.cssText=WC,a.innerHTML=`
    <h2 style="margin:0">🏆 Contract complete!</h2>
    <table style="border-collapse:collapse;font-size:15px">${s}</table>
    <div style="font-size:20px;font-weight:800">Total ${hl(n.totalS)}</div>
    ${o}
    ${t.length>0?`<div style="opacity:.85">📔 ${t.length} new passport stamp${t.length>1?"s":""}!</div>`:""}
    <button data-again style="${n0}">New contract</button>
    <button data-menu style="${n0};background:#3d6ee8">Menu</button>`,yi.appendChild(a),document.body.appendChild(yi),a.querySelector("[data-again]").addEventListener("click",()=>{i0(),r.onNewContract()}),a.querySelector("[data-menu]").addEventListener("click",()=>{i0(),r.onMenu()})}function i0(){yi==null||yi.remove(),yi=null}const U_="cargoSkies.passport.v1";function F_(){try{return JSON.parse(localStorage.getItem(U_)??"{}")}catch{return{}}}function XC(n){const e=F_(),t=[];for(const i of n)e[i]||t.push(i),e[i]=(e[i]??0)+1;return localStorage.setItem(U_,JSON.stringify(e)),t}const qC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:11";let ri=null;function YC(n,e){ri==null||ri.remove();const t=F_(),i=Object.entries(t).map(([o,a])=>({meta:n[o],count:a})).filter(o=>o.meta!==void 0).sort((o,a)=>o.meta.name.localeCompare(a.meta.name)),r=Object.values(n).filter(o=>o.playable).length;ri=document.createElement("div"),ri.style.cssText=qC;const s=i.map(o=>`<div style="display:flex;gap:8px;align-items:center;padding:4px 8px;background:rgba(255,255,255,.06);border-radius:8px">
          <span style="font-size:22px">${hc(o.meta.cca2)}</span>
          <span style="flex:1">${o.meta.name}</span>
          <span style="opacity:.6">×${o.count}</span>
        </div>`).join("");ri.innerHTML=`
    <div style="background:#141b3d;padding:28px 32px;border-radius:16px;width:420px;max-height:75vh;display:flex;flex-direction:column;gap:12px">
      <h2 style="margin:0">📔 Passport — ${i.length} / ${r} countries</h2>
      <div style="overflow-y:auto;display:flex;flex-direction:column;gap:6px">${s||"<div style='opacity:.7'>No stamps yet — complete a contract leg to earn your first!</div>"}</div>
      <button data-close style="padding:10px 16px;border:none;border-radius:10px;background:#3d6ee8;color:#fff;font:600 16px system-ui;cursor:pointer">Close</button>
    </div>`,document.body.appendChild(ri),ri.querySelector("[data-close]").addEventListener("click",()=>{ri==null||ri.remove(),ri=null})}const sh=.1,B_=(n,e,t)=>`cargoSkies.trial.v2.${n}.${e}.${t}`,KC=(n,e)=>n.charCodeAt(0)*7919+e*104729>>>0;function r0(n,e,t){try{const i=localStorage.getItem(B_(n,e,t));return i?JSON.parse(i):null}catch{return null}}function ZC(n,e,t,i){localStorage.setItem(B_(n,e,t),JSON.stringify(i))}const s0=n=>new X(n.x,n.y,n.z);function JC(n){const e=jl(16777215);e.traverse(i=>{i instanceof zt&&i.material instanceof ns&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.35)}),e.visible=!1,n.add(e);let t=[];return{start(i){t=i,e.visible=t.length>0},stop(){t=[],e.visible=!1},update(i){if(t.length===0)return;const r=i/sh,s=Math.min(t.length-1,Math.floor(r)),o=t[Math.min(t.length-1,s+1)],a=t[s],c=Math.min(1,r-s),l=a.lat+(o.lat-a.lat)*c,h=(o.lon-a.lon+540)%360-180,f=(a.lon+h*c+540)%360-180,u=a.altKm+(o.altKm-a.altKm)*c,p=s0(Cr(l,f,u)),g=fc(l,f,a.headingDeg,5);e.position.copy(p),e.up.copy(p.clone().normalize()),e.lookAt(s0(Cr(g.lat,g.lon,u)))}}}const jC=34,QC=.004;function e2(){const n=new fi,e=new Vs({color:PA,gradientMap:Ko(),transparent:!0,opacity:.92});for(let t=0;t<jC;t++){const i=new fi,r=3+Math.floor(Math.random()*3);for(let l=0;l<r;l++){const h=1.2+Math.random()*1.6,f=new zt(new is(h,10,8),e);f.position.set((l-r/2)*1.6,(Math.random()-.5)*.6,(Math.random()-.5)*1.4),f.scale.y=.6,i.add(f)}const s=(Math.random()-.5)*140,o=Math.random()*360-180,a=260+Math.random()*160,c=Cr(s,o,a);i.position.set(c.x,c.y,c.z),i.lookAt(0,0,0),n.add(i)}return{group:n,update(t){n.rotation.y+=QC*t}}}const t2=12,n2=30,i2=.8,r2=1.2;function s2(n,e){const t=Math.max(0,n),i=t2+e*i2,r=n2+e*r2;return t<=i?1:t>=r?0:1-(t-i)/(r-i)}const Si=Math.PI/180,Po=512,dl=96,o2=5,a2=26,l2=.7,c2="#24365e",f2="rgba(255,255,255,0.85)";function u2(n){const e=document.createElement("canvas");e.width=Po,e.height=dl;const t=e.getContext("2d");if(!t)throw new Error("2d canvas unavailable");let i=56;const r=()=>{t.font=`bold ${i}px 'Trebuchet MS', Verdana, sans-serif`};for(r();t.measureText(n).width>Po-24&&i>18;)i-=4,r();t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.lineJoin="round",t.strokeStyle=f2,t.strokeText(n,Po/2,dl/2),t.fillStyle=c2,t.fillText(n,Po/2,dl/2);const s=new L0(e);return s.anisotropy=4,s}function h2(n,e,t,i){const r=Math.max(1.5,t*Math.cos(n*Si)*(dl/Po)),s=new is(RA,12,4,(90+e-t/2)*Si,t*Si,(90-n-r/2)*Si,r*Si),o=new Jo({map:i,transparent:!0,opacity:0,depthWrite:!1});return new zt(s,o)}function d2(n){const e=new fi,t=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=e1(r.geometry),o=Math.min(a2,Math.max(o2,s.widthDeg*l2)),a=h2(s.lat,s.lon,o,u2(r.properties.name));a.visible=!1,e.add(a),t.push({mesh:a,widthDeg:o,direction:new X(Math.cos(s.lat*Si)*Math.sin(s.lon*Si),Math.sin(s.lat*Si),Math.cos(s.lat*Si)*Math.cos(s.lon*Si))})}const i=new X;return{group:e,update(r){i.copy(r.position).normalize();for(const s of t){const o=Math.acos(M0.clamp(i.dot(s.direction),-1,1))/Si,a=s2(o,s.widthDeg);s.mesh.visible=a>.02,s.mesh.material.opacity=a}}}}const Zn=1/60,p2=.25,m2=1/20;async function g2(){const n=document.getElementById("app");if(!n)throw new Error("#app root missing");const{world:e,countries:t,landmarks:i,riddles:r}=await BA(),s=jb(e),{scene:o,camera:a,renderer:c}=FA(n),l=OA(e);o.add(l.group);const h=d2(e);o.add(h.group);const f=e2();o.add(f.group);let u=jl();o.add(u);let p=Th,g=X0;const y=(Ae,Ve=15224125)=>{o.remove(u),u=jl(Ve,Ae),o.add(u),p=Cs[Ae].tuning,_=dm(u,a)},x=kA();let _=dm(u,a);const T=tR(document.body),P=nR(o),M=rR(o),I=uR(o),R=new X(0,.2,-2.2),N=.3,S=mR(document.body),w=xR(document.body),z=HC(l),O=dR({countries:t,banner:w,hints:z,beacon:M});let B=n1();const L=Ae=>{B=Ae},V=JC(o);let A=null,U=!1,F=[],G=0,Z=0;const te=()=>{FC(ue,()=>{YC(t)})},ue=Ae=>{if(BC(),A=Ae,y(Ae.plane),g=Mu[Ae.speed].worldSpeedScale,U=Ae.mode==="trial",V.stop(),F=[],G=0,Z=0,Ae.mode==="contract")_e.startContract({difficulty:Ae.difficulty,legCount:Ae.legCount});else if(Ae.mode==="trial"){const Ve=KC(Ae.difficulty,Ae.legCount),at=r0(Ae.difficulty,Ae.legCount,Ae.speed);at&&V.start(at.track),_e.startContract({difficulty:Ae.difficulty,legCount:Ae.legCount,seed:Ve})}},_e=kC({countries:t,landmarks:i,riddles:r,banner:w,hints:z,beacon:M,onContractComplete:Ae=>{w.setClock(null);const Ve=XC(Ae.contract.legs.map(qe=>qe.countryId));let at=null;if(U&&A){const qe=r0(A.difficulty,A.legCount,A.speed);at=(qe==null?void 0:qe.timeS)??Ae.totalS,(!qe||Ae.totalS<qe.timeS)&&ZC(A.difficulty,A.legCount,A.speed,{timeS:Ae.totalS,track:F}),V.stop()}$C(Ae,t,Ve,at,{onNewContract:()=>{A&&ue(A)},onMenu:te})}}),Re=await new Promise(Ae=>{DC((Ve,at)=>{PC(Ve,at).then(Ae).catch(qe=>{console.error("Connection failed",qe);const St=String((qe==null?void 0:qe.message)??qe),dt=/ECONNREFUSED|failed to connect|WebSocket|network|refused/i.test(St);alert(dt?"Can't reach the game server. Is it running? (pnpm dev:server)":at!==null?`No race found with code ${at.toUpperCase()}. Check the code and try again.`:"Couldn't start a race — see the console for details.")})},()=>Ae(null))});if(Re===null)e0(),te();else{let Ae=!1,Ve=!0;Re.room.onStateChange(at=>{var St;const qe=(St=at.players)==null?void 0:St.get(Re.sessionId);if(qe){if(!Ae){Ae=!0,history.replaceState(null,"",`/r/${at.code||""}`);const dt=qe.colorIdx??0;u.traverse(ht=>{ht instanceof zt&&ht.material instanceof Vs&&ht.material.color.getHex()===15224125&&ht.material.color.setHex(Jl[dt%Jl.length]??15224125)})}at.phase==="lobby"&&Ve?NC(at,Re.sessionId,()=>Re.start(),dt=>Re.setOptions(dt)):Ve&&(e0(),Ve=!1),P.sync(at,Re.sessionId),S.update(at,Re.sessionId,()=>Re.start()),Sl(qe.lat,qe.lon,B.lat,B.lon)>Pb&&L({lat:qe.lat,lon:qe.lon,altKm:qe.altKm,headingDeg:qe.headingDeg,speedKmh:qe.speedKmh})}})}let st=0,et=0,he=0,we=0,xe={throttle:0,turn:0,pitch:0};const Qe=new Ev;c.setAnimationLoop(()=>{var Ve;for(Qe.update(),st+=Math.min(Qe.getDelta(),.25);st>=Zn;)xe=x.read(Zn),B=i1(B,xe,Zn,p,g),_e.isActive()&&(_e.update(B,Zn),U&&(Z+=Zn,G+=Zn,G>=sh&&(G-=sh,F.push({lat:B.lat,lon:B.lon,altKm:B.altKm,headingDeg:B.headingDeg})))),st-=Zn,et+=Zn,he+=Zn;if(Re&&he>=m2&&(he=0,Re.sendInput(xe)),et>=p2){et=0;const at=s.findCountryAt(B.lat,B.lon);T.setCountry(at?((Ve=t[at])==null?void 0:Ve.name)??at:null)}we+=Zn,_.update(B,xe),h.update(a),Re&&O.update(Re.room.state,Re.sessionId,B,Zn),z.update(we),M.update(we),f.update(Zn);const Ae=(B.speedKmh-Bo)/(bh-Bo);I.update(Zn,u.localToWorld(R.clone()),Ae>N),V.update(Z),Re&&P.update(),T.setTelemetry(B),c.render(o,a)})}g2().catch(n=>{console.error("Failed to start Cargo Skies",n),document.body.textContent="Engine stalled — please refresh."});
