(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="185",k_=0,Jh=1,V_=2,el=1,H_=2,wo=3,Ir=0,Vn=1,Ei=2,or=0,Ls=1,jh=2,Qh=3,ed=4,G_=5,Gr=100,W_=101,$_=102,X_=103,q_=104,Y_=200,K_=201,Z_=202,J_=203,If=204,Df=205,j_=206,Q_=207,ex=208,tx=209,nx=210,ix=211,rx=212,sx=213,ox=214,Lf=0,Nf=1,Of=2,Bs=3,Uf=4,Ff=5,Bf=6,zf=7,a0=0,ax=1,lx=2,Wi=0,l0=1,c0=2,f0=3,u0=4,h0=5,d0=6,p0=7,m0=300,jr=301,zs=302,Ec=303,bc=304,sc=306,kf=1e3,rr=1001,Vf=1002,vn=1003,cx=1004,ra=1005,Tn=1006,wc=1007,Xr=1008,ti=1009,g0=1010,_0=1011,Oo=1012,ch=1013,Ki=1014,Vi=1015,hr=1016,fh=1017,uh=1018,Uo=1020,x0=35902,v0=35899,y0=1021,S0=1022,Ti=1023,dr=1026,qr=1027,hh=1028,dh=1029,Qr=1030,ph=1031,mh=1033,tl=33776,nl=33777,il=33778,rl=33779,Hf=35840,Gf=35841,Wf=35842,$f=35843,Xf=36196,qf=37492,Yf=37496,Kf=37488,Zf=37489,ml=37490,Jf=37491,jf=37808,Qf=37809,eu=37810,tu=37811,nu=37812,iu=37813,ru=37814,su=37815,ou=37816,au=37817,lu=37818,cu=37819,fu=37820,uu=37821,hu=36492,du=36494,pu=36495,mu=36283,gu=36284,gl=36285,_u=36286,fx=3200,xu=0,ux=1,Tr="",li="srgb",_l="srgb-linear",xl="linear",Ut="srgb",as=7680,td=519,hx=512,dx=513,px=514,gh=515,mx=516,gx=517,_h=518,_x=519,vu=35044,nd="300 es",Hi=2e3,Fo=2001;function xx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vx(){const n=vl("canvas");return n.style.display="block",n}const id={};function yl(...n){const e="THREE."+n.shift();console.log(e,...n)}function M0(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function at(...n){n=M0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=M0(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ns(...n){const e=n.join(" ");e in id||(id[e]=!0,at(...n))}function yx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Sx={[Lf]:Nf,[Of]:Bf,[Uf]:zf,[Bs]:Ff,[Nf]:Lf,[Bf]:Of,[zf]:Uf,[Ff]:Bs};class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rd=1234567;const Do=Math.PI/180,Bo=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function xh(n,e){return(n%e+e)%e}function Mx(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ex(n,e,t){return n!==e?(t-n)/(e-n):0}function Lo(n,e,t){return(1-t)*n+t*e}function bx(n,e,t,i){return Lo(n,e,1-Math.exp(-t*i))}function wx(n,e=1){return e-Math.abs(xh(n,e*2)-e)}function Tx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ax(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Rx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cx(n,e){return n+Math.random()*(e-n)}function Px(n){return n*(.5-Math.random())}function Ix(n){n!==void 0&&(rd=n);let e=rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dx(n){return n*Do}function Lx(n){return n*Bo}function Nx(n){return(n&n-1)===0&&n!==0}function Ox(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ux(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fx(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const E0={DEG2RAD:Do,RAD2DEG:Bo,generateUUID:ar,clamp:dt,euclideanModulo:xh,mapLinear:Mx,inverseLerp:Ex,lerp:Lo,damp:bx,pingpong:wx,smoothstep:Tx,smootherstep:Ax,randInt:Rx,randFloat:Cx,randFloatSpread:Px,seededRandom:Ix,degToRad:Dx,radToDeg:Lx,isPowerOfTwo:Nx,ceilPowerOfTwo:Ox,floorPowerOfTwo:Ux,setQuaternionFromProperEuler:Fx,normalize:Ft,denormalize:bi},Xh=class Xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;let ht=Xh;class Ks{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(f!==y||c!==u||l!==p||h!==g){let _=c*u+l*p+h*g+f*y;_<0&&(u=-u,p=-p,g=-g,y=-y,_=-_);let x=1-a;if(_<.9995){const T=Math.acos(_),P=Math.sin(T);x=Math.sin(x*T)/P,a=Math.sin(a*T)/P,c=c*x+u*a,l=l*x+p*a,h=h*x+g*a,f=f*x+y*a}else{c=c*x+u*a,l=l*x+p*a,h=h*x+g*a,f=f*x+y*a;const T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*f+c*p-l*u,e[t+1]=c*g+h*u+l*f-a*p,e[t+2]=l*g+h*p+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),f=a(s/2),u=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f+u*p*g;break;case"YZX":this._x=u*h*f+l*p*g,this._y=l*p*f+u*h*g,this._z=l*h*g-u*p*f,this._w=l*h*f-u*p*g;break;case"XZY":this._x=u*h*f-l*p*g,this._y=l*p*f-u*h*g,this._z=l*h*g+u*p*f,this._w=l*h*f+u*p*g;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qh=class qh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*h,this.y=i+c*h+a*l-s*f,this.z=r+c*f+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;let X=qh;const Tc=new X,sd=new Ks,Yh=class Yh{constructor(e,t,i,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],y=r[0],_=r[3],x=r[6],T=r[1],P=r[4],M=r[7],D=r[2],R=r[5],O=r[8];return s[0]=o*y+a*T+c*D,s[3]=o*_+a*P+c*R,s[6]=o*x+a*M+c*O,s[1]=l*y+h*T+f*D,s[4]=l*_+h*P+f*R,s[7]=l*x+h*M+f*O,s[2]=u*y+p*T+g*D,s[5]=u*_+p*P+g*R,s[8]=u*x+p*M+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*s,p=l*s-o*c,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*l-h*i)*y,e[2]=(a*i-r*o)*y,e[3]=u*y,e[4]=(h*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yh.prototype.isMatrix3=!0;let ft=Yh;const Ac=new ft,od=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bx(){const n={enabled:!0,workingColorSpace:_l,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ut&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ut&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Tr?xl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_l]:{primaries:e,whitePoint:i,transfer:xl,toXYZ:od,fromXYZ:ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:od,fromXYZ:ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),n}const yt=Bx();function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ls;class zx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=vl("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kx=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Vx=0;const Cc=new X;class An extends is{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=rr,r=rr,s=Tn,o=Xr,a=Ti,c=ti,l=An.DEFAULT_ANISOTROPY,h=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=ar(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kf:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kf:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=m0;An.DEFAULT_ANISOTROPY=1;const Kh=class Kh{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],g=c[9],y=c[2],_=c[6],x=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+_)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(l+1)/2,M=(p+1)/2,D=(x+1)/2,R=(h+u)/4,O=(f+y)/4,S=(g+_)/4;return P>M&&P>D?P<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(P),r=R/i,s=O/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=S/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=O/s,r=S/s),this.set(i,r,s,t),this}let T=Math.sqrt((_-g)*(_-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(_-g)/T,this.y=(f-y)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;let Bt=Kh;class Hx extends is{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new An(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new vh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Hx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class b0 extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gx extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=class rc{constructor(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y,_)}set(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y,_){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=f,x[14]=u,x[3]=p,x[7]=g,x[11]=y,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*h,p=o*f,g=a*h,y=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=u-y*l,t[9]=-a*c,t[2]=y-u*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*f,g=l*h,y=l*f;t[0]=u+y*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=y+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*f,g=l*h,y=l*f;t[0]=u-y*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*f,g=a*h,y=a*f;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+y,t[1]=c*f,t[5]=y*l+u,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=y-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*f+g,t[10]=u-y*f}else if(e.order==="XZY"){const u=o*c,p=o*l,g=a*c,y=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+y,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=y*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,$x)}lookAt(e,t,i){const r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),vr.crossVectors(i,Kn),vr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),vr.crossVectors(i,Kn)),vr.normalize(),sa.crossVectors(Kn,vr),r[0]=vr.x,r[4]=sa.x,r[8]=Kn.x,r[1]=vr.y,r[5]=sa.y,r[9]=Kn.y,r[2]=vr.z,r[6]=sa.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],y=i[6],_=i[10],x=i[14],T=i[3],P=i[7],M=i[11],D=i[15],R=r[0],O=r[4],S=r[8],w=r[12],B=r[1],U=r[5],z=r[9],I=r[13],H=r[2],A=r[6],N=r[10],F=r[14],G=r[3],Z=r[7],te=r[11],ue=r[15];return s[0]=o*R+a*B+c*H+l*G,s[4]=o*O+a*U+c*A+l*Z,s[8]=o*S+a*z+c*N+l*te,s[12]=o*w+a*I+c*F+l*ue,s[1]=h*R+f*B+u*H+p*G,s[5]=h*O+f*U+u*A+p*Z,s[9]=h*S+f*z+u*N+p*te,s[13]=h*w+f*I+u*F+p*ue,s[2]=g*R+y*B+_*H+x*G,s[6]=g*O+y*U+_*A+x*Z,s[10]=g*S+y*z+_*N+x*te,s[14]=g*w+y*I+_*F+x*ue,s[3]=T*R+P*B+M*H+D*G,s[7]=T*O+P*U+M*A+D*Z,s[11]=T*S+P*z+M*N+D*te,s[15]=T*w+P*I+M*F+D*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],y=e[7],_=e[11],x=e[15],T=c*p-l*u,P=a*p-l*f,M=a*u-c*f,D=o*p-l*h,R=o*u-c*h,O=o*f-a*h;return t*(y*T-_*P+x*M)-i*(g*T-_*D+x*R)+r*(g*P-y*D+x*O)-s*(g*M-y*R+_*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(s*h-a*c)+r*(s*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],y=e[13],_=e[14],x=e[15],T=t*a-i*o,P=t*c-r*o,M=t*l-s*o,D=i*c-r*a,R=i*l-s*a,O=r*l-s*c,S=h*y-f*g,w=h*_-u*g,B=h*x-p*g,U=f*_-u*y,z=f*x-p*y,I=u*x-p*_,H=T*I-P*z+M*U+D*B-R*w+O*S;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/H;return e[0]=(a*I-c*z+l*U)*A,e[1]=(r*z-i*I-s*U)*A,e[2]=(y*O-_*R+x*D)*A,e[3]=(u*R-f*O-p*D)*A,e[4]=(c*B-o*I-l*w)*A,e[5]=(t*I-r*B+s*w)*A,e[6]=(_*M-g*O-x*P)*A,e[7]=(h*O-u*M+p*P)*A,e[8]=(o*z-a*B+l*S)*A,e[9]=(i*B-t*z-s*S)*A,e[10]=(g*R-y*M+x*T)*A,e[11]=(f*M-h*R-p*T)*A,e[12]=(a*w-o*U-c*S)*A,e[13]=(t*U-i*w+r*S)*A,e[14]=(y*P-g*D-_*T)*A,e[15]=(h*D-f*P+u*T)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,f=a+a,u=s*l,p=s*h,g=s*f,y=o*h,_=o*f,x=a*f,T=c*l,P=c*h,M=c*f,D=i.x,R=i.y,O=i.z;return r[0]=(1-(y+x))*D,r[1]=(p+M)*D,r[2]=(g-P)*D,r[3]=0,r[4]=(p-M)*R,r[5]=(1-(u+x))*R,r[6]=(_+T)*R,r[7]=0,r[8]=(g+P)*O,r[9]=(_-T)*O,r[10]=(1-(u+y))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let o=cs.set(r[0],r[1],r[2]).length();const a=cs.set(r[4],r[5],r[6]).length(),c=cs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),_i.copy(this);const l=1/o,h=1/a,f=1/c;return _i.elements[0]*=l,_i.elements[1]*=l,_i.elements[2]*=l,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=Hi,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===Hi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Fo)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Hi,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===Hi)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Fo)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};rc.prototype.isMatrix4=!0;let Kt=rc;const cs=new X,_i=new Kt,Wx=new X(0,0,0),$x=new X(1,1,1),vr=new X,sa=new X,Kn=new X,ld=new Kt,cd=new Ks;class es{constructor(e=0,t=0,i=0,r=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class w0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xx=0;const fd=new X,fs=new Ks,ji=new Kt,oa=new X,oo=new X,qx=new X,Yx=new Ks,ud=new X(1,0,0),hd=new X(0,1,0),dd=new X(0,0,1),pd={type:"added"},Kx={type:"removed"},us={type:"childadded",child:null},Pc={type:"childremoved",child:null};class dn extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new X,t=new es,i=new Ks,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(ud,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ud,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(oo,oa,this.up):ji.lookAt(oa,oo,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(ji),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),us.child=e,this.dispatchEvent(us),us.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kx),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,Yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new X(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class kn extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const _=t.getJointPose(y,i),x=this._getHandJoint(l,y);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Dc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let xt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=xh(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=li){function i(s){s!==void 0&&parseFloat(s)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const i=T0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return yt.workingToColorSpace(Mn.copy(this),e),Math.round(dt(Mn.r*255,0,255))*65536+Math.round(dt(Mn.g*255,0,255))*256+Math.round(dt(Mn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=li){yt.workingToColorSpace(Mn.copy(this),e);const t=Mn.r,i=Mn.g,r=Mn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(aa);const i=Lo(yr.h,aa.h,t),r=Lo(yr.s,aa.s,t),s=Lo(yr.l,aa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Mn=new xt;xt.NAMES=T0;class Jx extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new X,Qi=new X,Lc=new X,er=new X,hs=new X,ds=new X,md=new X,Nc=new X,Oc=new X,Uc=new X,Fc=new Bt,Bc=new Bt,zc=new Bt;class fi{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xi.subVectors(e,t),r.cross(xi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xi.subVectors(r,t),Qi.subVectors(i,t),Lc.subVectors(e,t);const o=xi.dot(xi),a=xi.dot(Qi),c=xi.dot(Lc),l=Qi.dot(Qi),h=Qi.dot(Lc),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,er.x),c.addScaledVector(o,er.y),c.addScaledVector(a,er.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Fc.setScalar(0),Bc.setScalar(0),zc.setScalar(0),Fc.fromBufferAttribute(e,t),Bc.fromBufferAttribute(e,i),zc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Fc,s.x),o.addScaledVector(Bc,s.y),o.addScaledVector(zc,s.z),o}static isFrontFacing(e,t,i,r){return xi.subVectors(i,t),Qi.subVectors(e,t),xi.cross(Qi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),xi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ds.subVectors(s,i),Nc.subVectors(e,i);const c=hs.dot(Nc),l=ds.dot(Nc);if(c<=0&&l<=0)return t.copy(i);Oc.subVectors(e,r);const h=hs.dot(Oc),f=ds.dot(Oc);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(hs,o);Uc.subVectors(e,s);const p=hs.dot(Uc),g=ds.dot(Uc);if(g>=0&&p<=g)return t.copy(s);const y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(ds,a);const _=h*g-p*f;if(_<=0&&f-h>=0&&p-g>=0)return md.subVectors(s,r),a=(f-h)/(f-h+(p-g)),t.copy(r).addScaledVector(md,a);const x=1/(_+y+u);return o=y*x,a=u*x,t.copy(i).addScaledVector(hs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Lr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),la.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(e.matrixWorld),this.union(la)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),ca.subVectors(this.max,ao),ps.subVectors(e.a,ao),ms.subVectors(e.b,ao),gs.subVectors(e.c,ao),Sr.subVectors(ms,ps),Mr.subVectors(gs,ms),Or.subVectors(ps,gs);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Or.z,Or.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Or.z,0,-Or.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Or.y,Or.x,0];return!kc(t,ps,ms,gs,ca)||(t=[1,0,0,0,1,0,0,0,1],!kc(t,ps,ms,gs,ca))?!1:(fa.crossVectors(Sr,Mr),t=[fa.x,fa.y,fa.z],kc(t,ps,ms,gs,ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new X,new X,new X,new X,new X,new X,new X,new X],vi=new X,la=new Lr,ps=new X,ms=new X,gs=new X,Sr=new X,Mr=new X,Or=new X,ao=new X,ca=new X,fa=new X,Ur=new X;function kc(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ur.fromArray(n,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),c=e.dot(Ur),l=t.dot(Ur),h=i.dot(Ur);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const on=new X,ua=new ht;let jx=0;class Ci extends is{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vu,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class A0 extends Ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class R0 extends Ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xt extends Ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Qx=new Lr,lo=new X,Vc=new X;class Jo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Vc)),this.expandByPoint(lo.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ev=0;const ri=new Kt,Hc=new dn,_s=new X,Zn=new Lr,co=new Lr,fn=new X;class yn extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xx(e)?R0:A0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ft().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Zn.min,co.min),Zn.expandByPoint(fn),fn.addVectors(Zn.max,co.max),Zn.expandByPoint(fn)):(Zn.expandByPoint(co.min),Zn.expandByPoint(co.max))}Zn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(_s.fromBufferAttribute(e,l),fn.add(_s)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new X,c[S]=new X;const l=new X,h=new X,f=new X,u=new ht,p=new ht,g=new ht,y=new X,_=new X;function x(S,w,B){l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,B),u.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,B),h.sub(l),f.sub(l),p.sub(u),g.sub(u);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),_.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[S].add(y),a[w].add(y),a[B].add(y),c[S].add(_),c[w].add(_),c[B].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,w=T.length;S<w;++S){const B=T[S],U=B.start,z=B.count;for(let I=U,H=U+z;I<H;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const P=new X,M=new X,D=new X,R=new X;function O(S){D.fromBufferAttribute(r,S),R.copy(D);const w=a[S];P.copy(w),P.sub(D.multiplyScalar(D.dot(w))).normalize(),M.crossVectors(R,w);const U=M.dot(c[S])<0?-1:1;o.setXYZW(S,P.x,P.y,P.z,U)}for(let S=0,w=T.length;S<w;++S){const B=T[S],U=B.start,z=B.count;for(let I=U,H=U+z;I<H;I+=3)O(e.getX(I+0)),O(e.getX(I+1)),O(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new X,s=new X,o=new X,a=new X,c=new X,l=new X,h=new X,f=new X;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),y=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let y=0,_=c.length;y<_;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let x=0;x<h;x++)u[g++]=l[p++]}return new Ci(u,h,f)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class C0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vu,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new X;class Gi{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){yl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ci(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let tv=0;class rs extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Ls,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Df,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==If&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P0 extends rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const fo=new X,vs=new X,ys=new X,Ss=new ht,uo=new ht,I0=new Kt,ha=new X,ho=new X,da=new X,gd=new ht,Gc=new ht,_d=new ht;class nv extends dn{constructor(e=new P0){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new C0(t,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Gi(i,3,0,!1)),xs.setAttribute("uv",new Gi(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new ht(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),I0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-ys.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;pa(ha.set(-.5,-.5,0),ys,o,vs,r,s),pa(ho.set(.5,-.5,0),ys,o,vs,r,s),pa(da.set(.5,.5,0),ys,o,vs,r,s),gd.set(0,0),Gc.set(1,0),_d.set(1,1);let a=e.ray.intersectTriangle(ha,ho,da,!1,fo);if(a===null&&(pa(ho.set(-.5,.5,0),ys,o,vs,r,s),Gc.set(0,1),a=e.ray.intersectTriangle(ha,da,ho,!1,fo),a===null))return;const c=e.ray.origin.distanceTo(fo);c<e.near||c>e.far||t.push({distance:c,point:fo.clone(),uv:fi.getInterpolation(fo,ha,ho,da,gd,Gc,_d,new ht),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pa(n,e,t,i,r,s){Ss.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(uo.x=s*Ss.x-r*Ss.y,uo.y=r*Ss.x+s*Ss.y):uo.copy(Ss),n.copy(e),n.x+=uo.x,n.y+=uo.y,n.applyMatrix4(I0)}const nr=new X,Wc=new X,ma=new X,Er=new X,$c=new X,ga=new X,Xc=new X;class iv{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wc.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(Wc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ma),a=Er.dot(this.direction),c=-Er.dot(ma),l=Er.lengthSq(),h=Math.abs(1-o*o);let f,u,p,g;if(h>0)if(f=o*c-a,u=o*a-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const y=1/h;f*=y,u*=y,p=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wc).addScaledVector(ma,u),p}intersectSphere(e,t){nr.subVectors(e.center,this.origin);const i=nr.dot(this.direction),r=nr.dot(nr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,i,r,s){$c.subVectors(t,e),ga.subVectors(i,e),Xc.crossVectors($c,ga);let o=this.direction.dot(Xc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,e);const c=a*this.direction.dot(ga.crossVectors(Er,ga));if(c<0)return null;const l=a*this.direction.dot($c.cross(Er));if(l<0||c+l>o)return null;const h=-a*Er.dot(Xc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bi extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xd=new Kt,Fr=new iv,_a=new Jo,vd=new X,xa=new X,va=new X,ya=new X,qc=new X,Sa=new X,yd=new X,Ma=new X;class Rt extends dn{constructor(e=new yn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],f=s[c];h!==0&&(qc.fromBufferAttribute(f,e),o?Sa.addScaledVector(qc,h):Sa.addScaledVector(qc.sub(t),h))}t.add(Sa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(_a.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(_a,vd)===null||Fr.origin.distanceToSquared(vd)>(e.far-e.near)**2))&&(xd.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(xd),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const _=u[g],x=o[_.materialIndex],T=Math.max(_.start,p.start),P=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let M=T,D=P;M<D;M+=3){const R=a.getX(M),O=a.getX(M+1),S=a.getX(M+2);r=Ea(this,x,e,i,l,h,f,R,O,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let _=g,x=y;_<x;_+=3){const T=a.getX(_),P=a.getX(_+1),M=a.getX(_+2);r=Ea(this,o,e,i,l,h,f,T,P,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){const _=u[g],x=o[_.materialIndex],T=Math.max(_.start,p.start),P=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));for(let M=T,D=P;M<D;M+=3){const R=M,O=M+1,S=M+2;r=Ea(this,x,e,i,l,h,f,R,O,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let _=g,x=y;_<x;_+=3){const T=_,P=_+1,M=_+2;r=Ea(this,o,e,i,l,h,f,T,P,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function rv(n,e,t,i,r,s,o,a){let c;if(e.side===Vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ir,a),c===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:n}}function Ea(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,xa),n.getVertexPosition(c,va),n.getVertexPosition(l,ya);const h=rv(n,e,t,i,xa,va,ya,yd);if(h){const f=new X;fi.getBarycoord(yd,xa,va,ya,f),r&&(h.uv=fi.getInterpolatedAttribute(r,a,c,l,f,new ht)),s&&(h.uv1=fi.getInterpolatedAttribute(s,a,c,l,f,new ht)),o&&(h.normal=fi.getInterpolatedAttribute(o,a,c,l,f,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new X,materialIndex:0};fi.getNormal(xa,va,ya,u.normal),h.face=u,h.barycoord=f}return h}class D0 extends An{constructor(e=null,t=1,i=1,r,s,o,a,c,l=vn,h=vn,f,u){super(null,o,a,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=new X,sv=new X,ov=new ft;class Vr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yc.subVectors(i,t).cross(sv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Yc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ov.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Jo,av=new ht(.5,.5),ba=new X;class yh{constructor(e=new Vr,t=new Vr,i=new Vr,r=new Vr,s=new Vr,o=new Vr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],p=s[7],g=s[8],y=s[9],_=s[10],x=s[11],T=s[12],P=s[13],M=s[14],D=s[15];if(r[0].setComponents(l-o,p-h,x-g,D-T).normalize(),r[1].setComponents(l+o,p+h,x+g,D+T).normalize(),r[2].setComponents(l+a,p+f,x+y,D+P).normalize(),r[3].setComponents(l-a,p-f,x-y,D-P).normalize(),i)r[4].setComponents(c,u,_,M).normalize(),r[5].setComponents(l-c,p-u,x-_,D-M).normalize();else if(r[4].setComponents(l-c,p-u,x-_,D-M).normalize(),t===Hi)r[5].setComponents(l+c,p+u,x+_,D+M).normalize();else if(t===Fo)r[5].setComponents(c,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const t=av.distanceTo(e.center);return Br.radius=.7071067811865476+t,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ba.x=r.normal.x>0?e.max.x:e.min.x,ba.y=r.normal.y>0?e.max.y:e.min.y,ba.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class L0 extends An{constructor(e=[],t=jr,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N0 extends An{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks extends An{constructor(e,t,i=Ki,r,s,o,a=vn,c=vn,l,h=dr,f=1){if(h!==dr&&h!==qr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lv extends ks{constructor(e,t=Ki,i=jr,r,s,o=vn,a=vn,c,l=dr){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class O0 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sr extends yn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2));function g(y,_,x,T,P,M,D,R,O,S,w){const B=M/O,U=D/S,z=M/2,I=D/2,H=R/2,A=O+1,N=S+1;let F=0,G=0;const Z=new X;for(let te=0;te<N;te++){const ue=te*U-I;for(let _e=0;_e<A;_e++){const Fe=_e*B-z;Z[y]=Fe*T,Z[_]=ue*P,Z[x]=H,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[_]=0,Z[x]=R>0?1:-1,h.push(Z.x,Z.y,Z.z),f.push(_e/O),f.push(1-te/S),F+=1}}for(let te=0;te<S;te++)for(let ue=0;ue<O;ue++){const _e=u+ue+A*te,Fe=u+ue+A*(te+1),ke=u+(ue+1)+A*(te+1),it=u+(ue+1)+A*te;c.push(_e,Fe,it),c.push(Fe,ke,it),G+=6}a.addGroup(p,G,w),p+=G,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sl extends yn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,p=2*f+u,g=i*2+s,y=r+1,_=new X,x=new X;for(let T=0;T<=g;T++){let P=0,M=0,D=0,R=0;if(T<=i){const w=T/i,B=w*Math.PI/2;M=-h-e*Math.cos(B),D=e*Math.sin(B),R=-e*Math.cos(B),P=w*f}else if(T<=i+s){const w=(T-i)/s;M=-h+w*t,D=e,R=0,P=f+w*u}else{const w=(T-i-s)/i,B=w*Math.PI/2;M=h+e*Math.sin(B),D=e*Math.cos(B),R=e*Math.sin(B),P=f+u+w*f}const O=Math.max(0,Math.min(1,P/p));let S=0;T===0?S=.5/r:T===g&&(S=-.5/r);for(let w=0;w<=r;w++){const B=w/r,U=B*Math.PI*2,z=Math.sin(U),I=Math.cos(U);x.x=-D*I,x.y=M,x.z=D*z,a.push(x.x,x.y,x.z),_.set(-D*I,R,D*z),_.normalize(),c.push(_.x,_.y,_.z),l.push(B+S,O)}if(T>0){const w=(T-1)*y;for(let B=0;B<r;B++){const U=w+B,z=w+B+1,I=T*y+B,H=T*y+B+1;o.push(U,z,I),o.push(z,H,I)}}}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Sh extends yn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new X,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oc extends yn{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],p=[];let g=0;const y=[],_=i/2;let x=0;T(),o===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(h),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(p,2));function T(){const M=new X,D=new X;let R=0;const O=(t-e)/i;for(let S=0;S<=s;S++){const w=[],B=S/s,U=B*(t-e)+e;for(let z=0;z<=r;z++){const I=z/r,H=I*c+a,A=Math.sin(H),N=Math.cos(H);D.x=U*A,D.y=-B*i+_,D.z=U*N,f.push(D.x,D.y,D.z),M.set(A,O,N).normalize(),u.push(M.x,M.y,M.z),p.push(I,1-B),w.push(g++)}y.push(w)}for(let S=0;S<r;S++)for(let w=0;w<s;w++){const B=y[w][S],U=y[w+1][S],z=y[w+1][S+1],I=y[w][S+1];(e>0||w!==0)&&(h.push(B,U,I),R+=3),(t>0||w!==s-1)&&(h.push(U,z,I),R+=3)}l.addGroup(x,R,0),x+=R}function P(M){const D=g,R=new ht,O=new X;let S=0;const w=M===!0?e:t,B=M===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,_*B,0),u.push(0,B,0),p.push(.5,.5),g++;const U=g;for(let z=0;z<=r;z++){const H=z/r*c+a,A=Math.cos(H),N=Math.sin(H);O.x=w*N,O.y=_*B,O.z=w*A,f.push(O.x,O.y,O.z),u.push(0,B,0),R.x=A*.5+.5,R.y=N*.5*B+.5,p.push(R.x,R.y),g++}for(let z=0;z<r;z++){const I=D+z,H=U+z;M===!0?h.push(H,H+1,I):h.push(H+1,H,I),S+=3}l.addGroup(x,S,M===!0?1:2),x+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ac extends oc{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ac(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lc extends yn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,f=e/a,u=t/c,p=[],g=[],y=[],_=[];for(let x=0;x<h;x++){const T=x*u-o;for(let P=0;P<l;P++){const M=P*f-s;g.push(M,-T,0),y.push(0,0,1),_.push(P/a),_.push(1-x/c)}}for(let x=0;x<c;x++)for(let T=0;T<a;T++){const P=T+l*x,M=T+l*(x+1),D=T+1+l*(x+1),R=T+1+l*x;p.push(P,M,R),p.push(M,D,R)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ai extends yn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new X,u=new X,p=[],g=[],y=[],_=[];for(let x=0;x<=i;x++){const T=[],P=x/i,M=o+P*a,D=e*Math.cos(M),R=Math.sqrt(e*e-D*D);let O=0;x===0&&o===0?O=.5/t:x===i&&c===Math.PI&&(O=-.5/t);for(let S=0;S<=t;S++){const w=S/t,B=r+w*s;f.x=-R*Math.cos(B),f.y=D,f.z=R*Math.sin(B),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),_.push(w+O,1-P),T.push(l++)}h.push(T)}for(let x=0;x<i;x++)for(let T=0;T<t;T++){const P=h[x][T+1],M=h[x][T],D=h[x+1][T],R=h[x+1][T+1];(x!==0||o>0)&&p.push(P,M,R),(x!==i-1||c<Math.PI)&&p.push(M,D,R)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cv extends yn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new X,s=new X;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const f=c[l],u=f.start,p=f.count;for(let g=u,y=u+p;g<y;g+=3)for(let _=0;_<3;_++){const x=a.getX(g+_),T=a.getX(g+(_+1)%3);r.fromBufferAttribute(o,x),s.fromBufferAttribute(o,T),Sd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,f=3*a+(l+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),Sd(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Sd(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}function Vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Md(r))r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Md(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=Vs(n[t]);for(const r in i)e[r]=i[r]}return e}function Md(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function fv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function U0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Mh={clone:Vs,merge:Un};var uv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uv,this.fragmentShader=hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Kt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class dv extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hs extends rs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class pv extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mv extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Eh extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class gv extends Eh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Kc=new Kt,Ed=new X,bd=new X;class _v{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ed),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Fo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wa=new X,Ta=new Ks,Li=new X;class F0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wa,Ta,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new X,wd=new ht,Td=new ht;class ci extends F0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,wd,Td),t.subVectors(Td,wd)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bh extends F0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xv extends _v{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vv extends Eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new xv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class yv extends Eh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sv extends yn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ms=-90,Es=1;class Mv extends dn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ci(Ms,Es,e,t);r.layers=this.layers,this.add(r);const s=new ci(Ms,Es,e,t);s.layers=this.layers,this.add(s);const o=new ci(Ms,Es,e,t);o.layers=this.layers,this.add(o);const a=new ci(Ms,Es,e,t);a.layers=this.layers,this.add(a);const c=new ci(Ms,Es,e,t);c.layers=this.layers,this.add(c);const l=new ci(Ms,Es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ev extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=wv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function wv(){this._document.hidden===!1&&this.reset()}class yu extends C0{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Zh=class Zh{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Zh.prototype.isMatrix2=!0;let Ad=Zh;const Rd=new X,Aa=new X,bs=new X,ws=new X,Zc=new X,Tv=new X,Av=new X;class Rv{constructor(e=new X,t=new X){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Rd.subVectors(e,this.start),Aa.subVectors(this.end,this.start);const i=Aa.dot(Aa);if(i===0)return 0;let s=Aa.dot(Rd)/i;return t&&(s=dt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Tv,i=Av){const r=10000000000000001e-32;let s,o;const a=this.start,c=e.start,l=this.end,h=e.end;bs.subVectors(l,a),ws.subVectors(h,c),Zc.subVectors(a,c);const f=bs.dot(bs),u=ws.dot(ws),p=ws.dot(Zc);if(f<=r&&u<=r)return t.copy(a),i.copy(c),t.sub(i),t.dot(t);if(f<=r)s=0,o=p/u,o=dt(o,0,1);else{const g=bs.dot(Zc);if(u<=r)o=0,s=dt(-g/f,0,1);else{const y=bs.dot(ws),_=f*u-y*y;_!==0?s=dt((y*p-g*u)/_,0,1):s=0,o=(y*s+p)/u,o<0?(o=0,s=dt(-g/f,0,1)):o>1&&(o=1,s=dt((y-g)/f,0,1))}}return t.copy(a).addScaledVector(bs,s),i.copy(c).addScaledVector(ws,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Cd(n,e,t,i){const r=Cv(i);switch(t){case y0:return n*e;case hh:return n*e/r.components*r.byteLength;case dh:return n*e/r.components*r.byteLength;case Qr:return n*e*2/r.components*r.byteLength;case ph:return n*e*2/r.components*r.byteLength;case S0:return n*e*3/r.components*r.byteLength;case Ti:return n*e*4/r.components*r.byteLength;case mh:return n*e*4/r.components*r.byteLength;case tl:case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gf:case $f:return Math.max(n,16)*Math.max(e,8)/4;case Hf:case Wf:return Math.max(n,8)*Math.max(e,8)/2;case Xf:case qf:case Kf:case Zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yf:case ml:case Jf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ou:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hu:case du:case pu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mu:case gu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case gl:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cv(n){switch(n){case ti:case g0:return{byteLength:1,components:1};case Oo:case _0:case hr:return{byteLength:2,components:1};case fh:case uh:return{byteLength:2,components:4};case Ki:case ch:case Vi:return{byteLength:4,components:1};case x0:case v0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function B0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pv(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dv=`#ifdef USE_ALPHAHASH
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
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zv=`#ifdef USE_BATCHING
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
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,$v=`#ifdef USE_BUMPMAP
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ey=`#define PI 3.141592653589793
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
} // validated`,ty=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ny=`vec3 transformedNormal = objectNormal;
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
#endif`,iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,my=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,vy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,My=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ey=`#ifdef USE_ENVMAP
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ry=`PhysicalMaterial material;
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
#endif`,Cy=`uniform sampler2D dfgLUT;
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
}`,Py=`
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ly=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,By=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,Hy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eS=`#ifdef USE_NORMALMAP
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
#endif`,tS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gS=`float getShadowMask() {
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
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yS=`#ifdef USE_SKINNING
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
#endif`,SS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ES=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,TS=`#ifdef USE_TRANSMISSION
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DS=`uniform sampler2D t2D;
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
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
}`,BS=`#if DEPTH_PACKING == 3200
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
}`,zS=`#define DISTANCE
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
}`,kS=`#define DISTANCE
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`uniform float scale;
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
}`,WS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,XS=`uniform vec3 diffuse;
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
}`,qS=`#define LAMBERT
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
}`,YS=`#define LAMBERT
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
}`,KS=`#define MATCAP
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
}`,ZS=`#define MATCAP
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
}`,JS=`#define NORMAL
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
}`,jS=`#define NORMAL
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
}`,QS=`#define PHONG
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
}`,eM=`#define PHONG
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
}`,tM=`#define STANDARD
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
}`,nM=`#define STANDARD
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
}`,iM=`#define TOON
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
}`,rM=`#define TOON
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
}`,sM=`uniform float size;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,lM=`uniform vec3 color;
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
}`,cM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Iv,alphahash_pars_fragment:Dv,alphamap_fragment:Lv,alphamap_pars_fragment:Nv,alphatest_fragment:Ov,alphatest_pars_fragment:Uv,aomap_fragment:Fv,aomap_pars_fragment:Bv,batching_pars_vertex:zv,batching_vertex:kv,begin_vertex:Vv,beginnormal_vertex:Hv,bsdfs:Gv,iridescence_fragment:Wv,bumpmap_pars_fragment:$v,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:qv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:Kv,color_fragment:Zv,color_pars_fragment:Jv,color_pars_vertex:jv,color_vertex:Qv,common:ey,cube_uv_reflection_fragment:ty,defaultnormal_vertex:ny,displacementmap_pars_vertex:iy,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:oy,colorspace_fragment:ay,colorspace_pars_fragment:ly,envmap_fragment:cy,envmap_common_pars_fragment:fy,envmap_pars_fragment:uy,envmap_pars_vertex:hy,envmap_physical_pars_fragment:Ey,envmap_vertex:dy,fog_vertex:py,fog_pars_vertex:my,fog_fragment:gy,fog_pars_fragment:_y,gradientmap_pars_fragment:xy,lightmap_pars_fragment:vy,lights_lambert_fragment:yy,lights_lambert_pars_fragment:Sy,lights_pars_begin:My,lights_toon_fragment:by,lights_toon_pars_fragment:wy,lights_phong_fragment:Ty,lights_phong_pars_fragment:Ay,lights_physical_fragment:Ry,lights_physical_pars_fragment:Cy,lights_fragment_begin:Py,lights_fragment_maps:Iy,lights_fragment_end:Dy,lightprobes_pars_fragment:Ly,logdepthbuf_fragment:Ny,logdepthbuf_pars_fragment:Oy,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Fy,map_fragment:By,map_pars_fragment:zy,map_particle_fragment:ky,map_particle_pars_fragment:Vy,metalnessmap_fragment:Hy,metalnessmap_pars_fragment:Gy,morphinstance_vertex:Wy,morphcolor_vertex:$y,morphnormal_vertex:Xy,morphtarget_pars_vertex:qy,morphtarget_vertex:Yy,normal_fragment_begin:Ky,normal_fragment_maps:Zy,normal_pars_fragment:Jy,normal_pars_vertex:jy,normal_vertex:Qy,normalmap_pars_fragment:eS,clearcoat_normal_fragment_begin:tS,clearcoat_normal_fragment_maps:nS,clearcoat_pars_fragment:iS,iridescence_pars_fragment:rS,opaque_fragment:sS,packing:oS,premultiplied_alpha_fragment:aS,project_vertex:lS,dithering_fragment:cS,dithering_pars_fragment:fS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:hS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:pS,shadowmap_vertex:mS,shadowmask_pars_fragment:gS,skinbase_vertex:_S,skinning_pars_vertex:xS,skinning_vertex:vS,skinnormal_vertex:yS,specularmap_fragment:SS,specularmap_pars_fragment:MS,tonemapping_fragment:ES,tonemapping_pars_fragment:bS,transmission_fragment:wS,transmission_pars_fragment:TS,uv_pars_fragment:AS,uv_pars_vertex:RS,uv_vertex:CS,worldpos_vertex:PS,background_vert:IS,background_frag:DS,backgroundCube_vert:LS,backgroundCube_frag:NS,cube_vert:OS,cube_frag:US,depth_vert:FS,depth_frag:BS,distance_vert:zS,distance_frag:kS,equirect_vert:VS,equirect_frag:HS,linedashed_vert:GS,linedashed_frag:WS,meshbasic_vert:$S,meshbasic_frag:XS,meshlambert_vert:qS,meshlambert_frag:YS,meshmatcap_vert:KS,meshmatcap_frag:ZS,meshnormal_vert:JS,meshnormal_frag:jS,meshphong_vert:QS,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:rM,points_vert:sM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:fM},Pe={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},$n={basic:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Un([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Un([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new xt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Un([Pe.points,Pe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Un([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Un([Pe.common,Pe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Un([Pe.sprite,Pe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Un([Pe.common,Pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Un([Pe.lights,Pe.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};$n.physical={uniforms:Un([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Ra={r:0,b:0,g:0},uM=new Kt,z0=new ft;z0.set(-1,0,0,0,1,0,0,0,1);function hM(n,e,t,i,r,s){const o=new xt(0);let a=r===!0?0:1,c,l,h=null,f=0,u=null;function p(T){let P=T.isScene===!0?T.background:null;if(P&&P.isTexture){const M=T.backgroundBlurriness>0;P=e.get(P,M)}return P}function g(T){let P=!1;const M=p(T);M===null?_(o,a):M&&M.isColor&&(_(M,1),P=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,P){const M=p(P);M&&(M.isCubeTexture||M.mapping===sc)?(l===void 0&&(l=new Rt(new sr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Vs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(z0),l.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ut,(h!==M||f!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Rt(new lc(2,2),new di({name:"BackgroundMaterial",uniforms:Vs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=yt.getTransfer(M.colorSpace)!==Ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function _(T,P){T.getRGB(Ra,U0(n)),t.buffers.color.setClear(Ra.r,Ra.g,Ra.b,P,s)}function x(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,P=1){o.set(T),a=P,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,_(o,a)},render:g,addToRenderList:y,dispose:x}}function dM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(U,z,I,H,A){let N=!1;const F=f(U,H,I,z);s!==F&&(s=F,l(s.object)),N=p(U,H,I,A),N&&g(U,H,I,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(U,z,I,H),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function f(U,z,I,H){const A=H.wireframe===!0;let N=i[z.id];N===void 0&&(N={},i[z.id]=N);const F=U.isInstancedMesh===!0?U.id:0;let G=N[F];G===void 0&&(G={},N[F]=G);let Z=G[I.id];Z===void 0&&(Z={},G[I.id]=Z);let te=Z[A];return te===void 0&&(te=u(c()),Z[A]=te),te}function u(U){const z=[],I=[],H=[];for(let A=0;A<t;A++)z[A]=0,I[A]=0,H[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:I,attributeDivisors:H,object:U,attributes:{},index:null}}function p(U,z,I,H){const A=s.attributes,N=z.attributes;let F=0;const G=I.getAttributes();for(const Z in G)if(G[Z].location>=0){const ue=A[Z];let _e=N[Z];if(_e===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(_e=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(_e=U.instanceColor)),ue===void 0||ue.attribute!==_e||_e&&ue.data!==_e.data)return!0;F++}return s.attributesNum!==F||s.index!==H}function g(U,z,I,H){const A={},N=z.attributes;let F=0;const G=I.getAttributes();for(const Z in G)if(G[Z].location>=0){let ue=N[Z];ue===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor));const _e={};_e.attribute=ue,ue&&ue.data&&(_e.data=ue.data),A[Z]=_e,F++}s.attributes=A,s.attributesNum=F,s.index=H}function y(){const U=s.newAttributes;for(let z=0,I=U.length;z<I;z++)U[z]=0}function _(U){x(U,0)}function x(U,z){const I=s.newAttributes,H=s.enabledAttributes,A=s.attributeDivisors;I[U]=1,H[U]===0&&(n.enableVertexAttribArray(U),H[U]=1),A[U]!==z&&(n.vertexAttribDivisor(U,z),A[U]=z)}function T(){const U=s.newAttributes,z=s.enabledAttributes;for(let I=0,H=z.length;I<H;I++)z[I]!==U[I]&&(n.disableVertexAttribArray(I),z[I]=0)}function P(U,z,I,H,A,N,F){F===!0?n.vertexAttribIPointer(U,z,I,A,N):n.vertexAttribPointer(U,z,I,H,A,N)}function M(U,z,I,H){y();const A=H.attributes,N=I.getAttributes(),F=z.defaultAttributeValues;for(const G in N){const Z=N[G];if(Z.location>=0){let te=A[G];if(te===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){const ue=te.normalized,_e=te.itemSize,Fe=e.get(te);if(Fe===void 0)continue;const ke=Fe.buffer,it=Fe.type,he=Fe.bytesPerElement,we=it===n.INT||it===n.UNSIGNED_INT||te.gpuType===ch;if(te.isInterleavedBufferAttribute){const ve=te.data,je=ve.stride,et=te.offset;if(ve.isInstancedInterleavedBuffer){for(let tt=0;tt<Z.locationSize;tt++)x(Z.location+tt,ve.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let tt=0;tt<Z.locationSize;tt++)_(Z.location+tt);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let tt=0;tt<Z.locationSize;tt++)P(Z.location+tt,_e/Z.locationSize,it,ue,je*he,(et+_e/Z.locationSize*tt)*he,we)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<Z.locationSize;ve++)x(Z.location+ve,te.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<Z.locationSize;ve++)_(Z.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let ve=0;ve<Z.locationSize;ve++)P(Z.location+ve,_e/Z.locationSize,it,ue,_e*he,_e/Z.locationSize*ve*he,we)}}else if(F!==void 0){const ue=F[G];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(Z.location,ue);break;case 3:n.vertexAttrib3fv(Z.location,ue);break;case 4:n.vertexAttrib4fv(Z.location,ue);break;default:n.vertexAttrib1fv(Z.location,ue)}}}}T()}function D(){w();for(const U in i){const z=i[U];for(const I in z){const H=z[I];for(const A in H){const N=H[A];for(const F in N)h(N[F].object),delete N[F];delete H[A]}}delete i[U]}}function R(U){if(i[U.id]===void 0)return;const z=i[U.id];for(const I in z){const H=z[I];for(const A in H){const N=H[A];for(const F in N)h(N[F].object),delete N[F];delete H[A]}}delete i[U.id]}function O(U){for(const z in i){const I=i[z];for(const H in I){const A=I[H];if(A[U.id]===void 0)continue;const N=A[U.id];for(const F in N)h(N[F].object),delete N[F];delete A[U.id]}}}function S(U){for(const z in i){const I=i[z],H=U.isInstancedMesh===!0?U.id:0,A=I[H];if(A!==void 0){for(const N in A){const F=A[N];for(const G in F)h(F[G].object),delete F[G];delete A[N]}delete I[H],Object.keys(I).length===0&&delete i[z]}}}function w(){B(),o=!0,s!==r&&(s=r,l(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:B,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:_,disableUnusedAttributes:T}}function pM(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function mM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(O){return!(O!==Ti&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const S=O===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ti&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!S)}function c(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(at("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:T,maxVaryings:P,maxFragmentUniforms:M,maxSamples:D,samples:R}}function gM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vr,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,y=f.clipIntersection,_=f.clipShadows,x=n.get(f);if(!r||g===null||g.length===0||s&&!_)s?h(null):l();else{const T=s?0:i,P=T*4;let M=x.clippingState||null;c.value=M,M=h(g,u,P,p);for(let D=0;D!==P;++D)M[D]=t[D];x.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const y=f!==null?f.length:0;let _=null;if(y!==0){if(_=c.value,g!==!0||_===null){const x=p+y*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(_===null||_.length<x)&&(_=new Float32Array(x));for(let P=0,M=p;P!==y;++P,M+=4)o.copy(f[P]).applyMatrix4(T,a),o.normal.toArray(_,M),_[M+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,_}}const Ar=4,Pd=[.125,.215,.35,.446,.526,.582],Wr=20,_M=256,po=new bh,Id=new xt;let Jc=null,jc=0,Qc=0,ef=!1;const xM=new X;class Dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=xM}=s;Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,jc,Qc),this._renderer.xr.enabled=ef,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:hr,format:Ti,colorSpace:_l,depthBuffer:!1},r=Ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vM(s)),this._blurMaterial=SM(s,e,t),this._ggxMaterial=yM(s,e,t)}return r}_compileMaterial(e){const t=new Rt(new yn,e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,i,r,s){const c=new ci(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(Id),f.toneMapping=Wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new sr,new Bi({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,_=y.material;let x=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,x=!0):(_.color.copy(Id),x=!0);for(let P=0;P<6;P++){const M=P%3;M===0?(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[P],s.y,s.z)):M===1?(c.up.set(0,0,l[P]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[P],s.z)):(c.up.set(0,l[P],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[P]));const D=this._cubeSize;Ts(r,M*D,P>2?D:0,D,D),f.setRenderTarget(r),x&&f.render(y,c),f.render(e,c)}f.toneMapping=p,f.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jr||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,p=f*u,{_lodMax:g}=this,y=this._sizeLods[i],_=3*y*(i>g-Ar?i-g+Ar:0),x=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=g-t,Ts(s,_,x,3*y,2*y),r.setRenderTarget(s),r.render(a,po),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Ts(e,_,x,3*y,2*y),r.setRenderTarget(e),r.render(a,po)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),y=s/g,_=isFinite(s)?1+Math.floor(h*y):Wr;_>Wr&&at(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Wr}`);const x=[];let T=0;for(let O=0;O<Wr;++O){const S=O/y,w=Math.exp(-S*S/2);x.push(w),O===0?T+=w:O<_&&(T+=2*w)}for(let O=0;O<x.length;O++)x[O]=x[O]/T;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=x,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:P}=this;u.dTheta.value=g,u.mipInt.value=P-i;const M=this._sizeLods[r],D=3*M*(r>P-Ar?r-P+Ar:0),R=4*(this._cubeSize-M);Ts(t,D,R,3*M,2*M),c.setRenderTarget(t),c.render(f,po)}}function vM(n){const e=[],t=[],i=[];let r=n;const s=n-Ar+1+Pd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Ar?c=Pd[o-n+Ar-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,y=3,_=2,x=1,T=new Float32Array(y*g*p),P=new Float32Array(_*g*p),M=new Float32Array(x*g*p);for(let R=0;R<p;R++){const O=R%3*2/3-1,S=R>2?0:-1,w=[O,S,0,O+2/3,S,0,O+2/3,S+1,0,O,S,0,O+2/3,S+1,0,O,S+1,0];T.set(w,y*g*R),P.set(u,_*g*R);const B=[R,R,R,R,R,R];M.set(B,x*g*R)}const D=new yn;D.setAttribute("position",new Ci(T,y)),D.setAttribute("uv",new Ci(P,_)),D.setAttribute("faceIndex",new Ci(M,x)),i.push(new Rt(D,null)),r>Ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ld(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function yM(n,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_M,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function SM(n,e,t){const i=new Float32Array(Wr),r=new X(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Nd(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Od(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}class k0 extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new L0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:or});s.uniforms.tEquirect.value=t;const o=new Rt(r,s),a=t.minFilter;return t.minFilter===Xr&&(t.minFilter=Tn),new Mv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function MM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Ec||p===bc)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new k0(g.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===Ec||p===bc,y=p===jr||p===zs;if(g||y){let _=t.get(u);const x=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return i===null&&(i=new Dd(n)),_=g?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const T=u.image;return g&&T&&T.height>0||y&&T&&c(T)?(i===null&&(i=new Dd(n)),_=g?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function a(u,p){return p===Ec?u.mapping=jr:p===bc&&(u.mapping=zs),u}function c(u){let p=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&p++;return p===g}function l(u){const p=u.target;p.removeEventListener("dispose",l);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function EM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ns("WebGLRenderer: "+i+" extension not supported."),r}}}function bM(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(f){const u=[],p=f.index,g=f.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const T=p.array;y=p.version;for(let P=0,M=T.length;P<M;P+=3){const D=T[P+0],R=T[P+1],O=T[P+2];u.push(D,R,R,O,O,D)}}else{const T=g.array;y=g.version;for(let P=0,M=T.length/3-1;P<M;P+=3){const D=P+0,R=P+1,O=P+2;u.push(D,R,R,O,O,D)}}const _=new(g.count>=65535?R0:A0)(u,1);_.version=y;const x=s.get(f);x&&e.remove(x),s.set(f,_)}function h(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function wM(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*o),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*o,p),t.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let y=0;for(let _=0;_<p;_++)y+=u[_];t.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function TM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Mt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function AM(n,e,t){const i=new WeakMap,r=new Bt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let B=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var p=B;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),_===!0&&(M=3);let D=a.attributes.position.count*M,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const O=new Float32Array(D*R*4*f),S=new b0(O,D,R,f);S.type=Vi,S.needsUpdate=!0;const w=M*4;for(let U=0;U<f;U++){const z=x[U],I=T[U],H=P[U],A=D*R*4*U;for(let N=0;N<z.count;N++){const F=N*w;g===!0&&(r.fromBufferAttribute(z,N),O[A+F+0]=r.x,O[A+F+1]=r.y,O[A+F+2]=r.z,O[A+F+3]=0),y===!0&&(r.fromBufferAttribute(I,N),O[A+F+4]=r.x,O[A+F+5]=r.y,O[A+F+6]=r.z,O[A+F+7]=0),_===!0&&(r.fromBufferAttribute(H,N),O[A+F+8]=r.x,O[A+F+9]=r.y,O[A+F+10]=r.z,O[A+F+11]=H.itemSize===4?r.w:1)}}u={count:f,texture:S,size:new ht(D,R)},i.set(a,u),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let _=0;_<l.length;_++)g+=l[_];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function RM(n,e,t,i,r){let s=new WeakMap;function o(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function a(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const CM={[l0]:"LINEAR_TONE_MAPPING",[c0]:"REINHARD_TONE_MAPPING",[f0]:"CINEON_TONE_MAPPING",[u0]:"ACES_FILMIC_TONE_MAPPING",[d0]:"AGX_TONE_MAPPING",[p0]:"NEUTRAL_TONE_MAPPING",[h0]:"CUSTOM_TONE_MAPPING"};function PM(n,e,t,i,r,s){const o=new $i(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ks(e,t):void 0}),a=new $i(e,t,{type:hr,depthBuffer:!1,stencilBuffer:!1}),c=new yn;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const l=new dv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Rt(c,l),f=new bh(-1,1,1,-1,0,1);let u=null,p=null,g=!1,y,_=null,x=[],T=!1;this.setSize=function(P,M){o.setSize(P,M),a.setSize(P,M);for(let D=0;D<x.length;D++){const R=x[D];R.setSize&&R.setSize(P,M)}},this.setEffects=function(P){x=P,T=x.length>0&&x[0].isRenderPass===!0;const M=o.width,D=o.height;for(let R=0;R<x.length;R++){const O=x[R];O.setSize&&O.setSize(M,D)}},this.begin=function(P,M){if(g||P.toneMapping===Wi&&x.length===0)return!1;if(_=M,M!==null){const D=M.width,R=M.height;(o.width!==D||o.height!==R)&&this.setSize(D,R)}return T===!1&&P.setRenderTarget(o),y=P.toneMapping,P.toneMapping=Wi,!0},this.hasRenderPass=function(){return T},this.end=function(P,M){P.toneMapping=y,g=!0;let D=o,R=a;for(let O=0;O<x.length;O++){const S=x[O];if(S.enabled!==!1&&(S.render(P,R,D,M),S.needsSwap!==!1)){const w=D;D=R,R=w}}if(u!==P.outputColorSpace||p!==P.toneMapping){u=P.outputColorSpace,p=P.toneMapping,l.defines={},yt.getTransfer(u)===Ut&&(l.defines.SRGB_TRANSFER="");const O=CM[p];O&&(l.defines[O]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(_),P.render(h,f),_=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const V0=new An,Su=new ks(1,1),H0=new b0,G0=new Gx,W0=new L0,Ud=[],Fd=[],Bd=new Float32Array(16),zd=new Float32Array(9),kd=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ud[r];if(s===void 0&&(s=new Float32Array(r),Ud[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uc(n,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),cn(t,e)}}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),cn(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),cn(t,e)}}function OM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;kd.set(i),n.uniformMatrix2fv(this.addr,!1,kd),cn(t,i)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;zd.set(i),n.uniformMatrix3fv(this.addr,!1,zd),cn(t,i)}}function FM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,i))return;Bd.set(i),n.uniformMatrix4fv(this.addr,!1,Bd),cn(t,i)}}function BM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),cn(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),cn(t,e)}}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),cn(t,e)}}function HM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),cn(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),cn(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),cn(t,e)}}function XM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Su.compareFunction=t.isReversedDepthBuffer()?_h:gh,s=Su):s=V0,t.setTexture2D(e||s,r)}function qM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||G0,r)}function YM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||W0,r)}function KM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||H0,r)}function ZM(n){switch(n){case 5126:return IM;case 35664:return DM;case 35665:return LM;case 35666:return NM;case 35674:return OM;case 35675:return UM;case 35676:return FM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return kM;case 35669:case 35673:return VM;case 5125:return HM;case 36294:return GM;case 36295:return WM;case 36296:return $M;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return KM}}function JM(n,e){n.uniform1fv(this.addr,e)}function jM(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function QM(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function eE(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function tE(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nE(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iE(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rE(n,e){n.uniform1iv(this.addr,e)}function sE(n,e){n.uniform2iv(this.addr,e)}function oE(n,e){n.uniform3iv(this.addr,e)}function aE(n,e){n.uniform4iv(this.addr,e)}function lE(n,e){n.uniform1uiv(this.addr,e)}function cE(n,e){n.uniform2uiv(this.addr,e)}function fE(n,e){n.uniform3uiv(this.addr,e)}function uE(n,e){n.uniform4uiv(this.addr,e)}function hE(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Su:o=V0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function dE(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||G0,s[o])}function pE(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||W0,s[o])}function mE(n,e,t){const i=this.cache,r=e.length,s=uc(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||H0,s[o])}function gE(n){switch(n){case 5126:return JM;case 35664:return jM;case 35665:return QM;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return oE;case 35669:case 35673:return aE;case 5125:return lE;case 36294:return cE;case 36295:return fE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class _E{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZM(t.type)}}class xE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gE(t.type)}}class vE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Vd(n,e){n.seq.push(e),n.map[e.id]=e}function yE(n,e,t){const i=n.name,r=i.length;for(tf.lastIndex=0;;){const s=tf.exec(i),o=tf.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Vd(t,l===void 0?new _E(a,n,e):new xE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new vE(a),Vd(t,f)),t=f}}}class sl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);yE(a,c,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const SE=37297;let ME=0;function EE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Gd=new ft;function bE(n){yt._getMatrix(Gd,yt.workingColorSpace,n);const e=`mat3( ${Gd.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case xl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+EE(n.getShaderSource(e),a)}else return s}function wE(n,e){const t=bE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TE={[l0]:"Linear",[c0]:"Reinhard",[f0]:"Cineon",[u0]:"ACESFilmic",[d0]:"AgX",[p0]:"Neutral",[h0]:"Custom"};function AE(n,e){const t=TE[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ca=new X;function RE(){yt.getLuminanceCoefficients(Ca);const n=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function PE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function To(n){return n!==""}function $d(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(n){return n.replace(DE,NE)}const LE=new Map;function NE(n,e){let t=gt[e];if(t===void 0){const i=LE.get(e);if(i!==void 0)t=gt[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mu(t)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(n){return n.replace(OE,UE)}function UE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const FE={[el]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function BE(n){return FE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zE={[jr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function kE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":zE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const VE={[zs]:"ENVMAP_MODE_REFRACTION"};function HE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":VE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GE={[a0]:"ENVMAP_BLENDING_MULTIPLY",[ax]:"ENVMAP_BLENDING_MIX",[lx]:"ENVMAP_BLENDING_ADD"};function WE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":GE[n.combine]||"ENVMAP_BLENDING_NONE"}function $E(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function XE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=BE(t),l=kE(t),h=HE(t),f=WE(t),u=$E(t),p=CE(t),g=PE(s),y=r.createProgram();let _,x,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),x.length>0&&(x+=`
`)):(_=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),x=[Yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?gt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?AE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,wE("linearToOutputTexel",t.outputColorSpace),RE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),o=Mu(o),o=$d(o,t),o=Xd(o,t),a=Mu(a),a=$d(a,t),a=Xd(a,t),o=qd(o),a=qd(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===nd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=T+_+o,M=T+x+a,D=Hd(r,r.VERTEX_SHADER,P),R=Hd(r,r.FRAGMENT_SHADER,M);r.attachShader(y,D),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function O(U){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(y)||"",I=r.getShaderInfoLog(D)||"",H=r.getShaderInfoLog(R)||"",A=z.trim(),N=I.trim(),F=H.trim();let G=!0,Z=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,D,R);else{const te=Wd(r,D,"vertex"),ue=Wd(r,R,"fragment");Mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+A+`
`+te+`
`+ue)}else A!==""?at("WebGLProgram: Program Info Log:",A):(N===""||F==="")&&(Z=!1);Z&&(U.diagnostics={runnable:G,programLog:A,vertexShader:{log:N,prefix:_},fragmentShader:{log:F,prefix:x}})}r.deleteShader(D),r.deleteShader(R),S=new sl(r,y),w=IE(r,y)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(y,SE)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ME++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=R,this}let qE=0;class YE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new KE(e),t.set(e,i)),i}}class KE{constructor(e){this.id=qE++,this.code=e,this.usedTimes=0}}function ZE(n){return n===Qr||n===ml||n===gl}function JE(n,e,t,i,r,s){const o=new w0,a=new YE,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function y(S,w,B,U,z,I){const H=U.fog,A=z.geometry,N=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=e.get(S.envMap||N,F),Z=G&&G.mapping===sc?G.image.height:null,te=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&at("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const ue=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Fe=0;A.morphAttributes.position!==void 0&&(Fe=1),A.morphAttributes.normal!==void 0&&(Fe=2),A.morphAttributes.color!==void 0&&(Fe=3);let ke,it,he,we;if(te){const Ve=$n[te];ke=Ve.vertexShader,it=Ve.fragmentShader}else{ke=S.vertexShader,it=S.fragmentShader;const Ve=a.getVertexShaderStage(S),Wt=a.getFragmentShaderStage(S);a.update(S,Ve,Wt),he=Ve.id,we=Wt.id}const ve=n.getRenderTarget(),je=n.state.buffers.depth.getReversed(),et=z.isInstancedMesh===!0,tt=z.isBatchedMesh===!0,Ke=!!S.map,nt=!!S.matcap,st=!!G,He=!!S.aoMap,pt=!!S.lightMap,Tt=!!S.bumpMap&&S.wireframe===!1,zt=!!S.normalMap,qt=!!S.displacementMap,Dt=!!S.emissiveMap,Lt=!!S.metalnessMap,Zt=!!S.roughnessMap,Y=S.anisotropy>0,pn=S.clearcoat>0,At=S.dispersion>0,k=S.iridescence>0,E=S.sheen>0,j=S.transmission>0,se=Y&&!!S.anisotropyMap,ce=pn&&!!S.clearcoatMap,be=pn&&!!S.clearcoatNormalMap,Se=pn&&!!S.clearcoatRoughnessMap,fe=k&&!!S.iridescenceMap,me=k&&!!S.iridescenceThicknessMap,Me=E&&!!S.sheenColorMap,qe=E&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,Ee=!!S.specularColorMap,$e=!!S.specularIntensityMap,rt=j&&!!S.transmissionMap,Ze=j&&!!S.thicknessMap,W=!!S.gradientMap,Te=!!S.alphaMap,le=S.alphaTest>0,Re=!!S.alphaHash,Ce=!!S.extensions;let xe=Wi;S.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(xe=n.toneMapping);const Ye={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:it,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:tt,batchingColor:tt&&z._colorsTexture!==null,instancing:et,instancingColor:et&&z.instanceColor!==null,instancingMorph:et&&z.morphTexture!==null,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:nt,envMap:st,envMapMode:st&&G.mapping,envMapCubeUVHeight:Z,aoMap:He,lightMap:pt,bumpMap:Tt,normalMap:zt,displacementMap:qt,emissiveMap:Dt,normalMapObjectSpace:zt&&S.normalMapType===ux,normalMapTangentSpace:zt&&S.normalMapType===xu,packedNormalMap:zt&&S.normalMapType===xu&&ZE(S.normalMap.format),metalnessMap:Lt,roughnessMap:Zt,anisotropy:Y,anisotropyMap:se,clearcoat:pn,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:Se,dispersion:At,iridescence:k,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:Ie,specularColorMap:Ee,specularIntensityMap:$e,transmission:j,transmissionMap:rt,thicknessMap:Ze,gradientMap:W,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:le,alphaHash:Re,combine:S.combine,mapUv:Ke&&g(S.map.channel),aoMapUv:He&&g(S.aoMap.channel),lightMapUv:pt&&g(S.lightMap.channel),bumpMapUv:Tt&&g(S.bumpMap.channel),normalMapUv:zt&&g(S.normalMap.channel),displacementMapUv:qt&&g(S.displacementMap.channel),emissiveMapUv:Dt&&g(S.emissiveMap.channel),metalnessMapUv:Lt&&g(S.metalnessMap.channel),roughnessMapUv:Zt&&g(S.roughnessMap.channel),anisotropyMapUv:se&&g(S.anisotropyMap.channel),clearcoatMapUv:ce&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ie&&g(S.specularMap.channel),specularColorMapUv:Ee&&g(S.specularColorMap.channel),specularIntensityMapUv:$e&&g(S.specularIntensityMap.channel),transmissionMapUv:rt&&g(S.transmissionMap.channel),thicknessMapUv:Ze&&g(S.thicknessMap.channel),alphaMapUv:Te&&g(S.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(zt||Y),vertexNormals:!!A.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!A.attributes.uv&&(Ke||Te),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||A.attributes.normal===void 0&&zt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:je,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:xe,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Ut,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&yt.getTransfer(S.emissiveMap.colorSpace)===Ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ei,flipSided:S.side===Vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function _(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(x(w,S),T(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function T(S,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function P(S){const w=p[S.type];let B;if(w){const U=$n[w];B=Mh.clone(U.uniforms)}else B=S.uniforms;return B}function M(S,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new XE(n,w,S,r),l.push(B),h.set(w,B)),B}function D(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),h.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function O(){a.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:M,releaseProgram:D,releaseShaderCache:R,programs:l,dispose:O}}function jE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function QE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Kd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,y,_,x){let T=n[e];return T===void 0?(T={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:_,group:x},n[e]=T):(T.id=u.id,T.object=u,T.geometry=p,T.material=g,T.materialVariant=o(u),T.groupOrder=y,T.renderOrder=u.renderOrder,T.z=_,T.group=x),e++,T}function c(u,p,g,y,_,x){const T=a(u,p,g,y,_,x);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):t.push(T)}function l(u,p,g,y,_,x){const T=a(u,p,g,y,_,x);g.transmission>0?i.unshift(T):g.transparent===!0?r.unshift(T):t.unshift(T)}function h(u,p,g){t.length>1&&t.sort(u||QE),i.length>1&&i.sort(p||Kd),r.length>1&&r.sort(p||Kd),g&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let u=e,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function eb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zd,n.set(i,[o])):r>=s.length?(o=new Zd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new xt};break;case"SpotLight":t={position:new X,direction:new X,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function nb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ib=0;function rb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function sb(n){const e=new tb,t=nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new Kt,o=new Kt;function a(l){let h=0,f=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,_=0,x=0,T=0,P=0,M=0,D=0,R=0,O=0;l.sort(rb);for(let w=0,B=l.length;w<B;w++){const U=l[w],z=U.color,I=U.intensity,H=U.distance;let A=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Qr?A=U.shadow.map.texture:A=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*I,f+=z.g*I,u+=z.b*I;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],I);O++}else if(U.isDirectionalLight){const N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const F=U.shadow,G=t.get(U);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=A,i.directionalShadowMatrix[p]=U.shadow.matrix,T++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=e.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(z).multiplyScalar(I),N.distance=H,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[y]=N;const F=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,F.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[y]=F.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=A,M++}y++}else if(U.isRectAreaLight){const N=e.get(U);N.color.copy(z).multiplyScalar(I),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=N,_++}else if(U.isPointLight){const N=e.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const F=U.shadow,G=t.get(U);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=U.shadow.matrix,P++}i.point[g]=N,g++}else if(U.isHemisphereLight){const N=e.get(U);N.skyColor.copy(U.color).multiplyScalar(I),N.groundColor.copy(U.groundColor).multiplyScalar(I),i.hemi[x]=N,x++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==g||S.spotLength!==y||S.rectAreaLength!==_||S.hemiLength!==x||S.numDirectionalShadows!==T||S.numPointShadows!==P||S.numSpotShadows!==M||S.numSpotMaps!==D||S.numLightProbes!==O)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=_,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=M+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=O,S.directionalLength=p,S.pointLength=g,S.spotLength=y,S.rectAreaLength=_,S.hemiLength=x,S.numDirectionalShadows=T,S.numPointShadows=P,S.numSpotShadows=M,S.numSpotMaps=D,S.numLightProbes=O,i.version=ib++)}function c(l,h){let f=0,u=0,p=0,g=0,y=0;const _=h.matrixWorldInverse;for(let x=0,T=l.length;x<T;x++){const P=l[x];if(P.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(P.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),p++}else if(P.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(P.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(P.width*.5,0,0),M.halfHeight.set(0,P.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(P.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(P.matrixWorld),M.position.applyMatrix4(_),u++}else if(P.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(P.matrixWorld),M.direction.transformDirection(_),y++}}}return{setup:a,setupView:c,state:i}}function Jd(n){const e=new sb(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ob(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Jd(n),e.set(r,[a])):s>=o.length?(a=new Jd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ab=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`,cb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],fb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],jd=new Kt,mo=new X,nf=new X;function ub(n,e,t){let i=new yh;const r=new ht,s=new ht,o=new Bt,a=new pv,c=new mv,l={},h=t.maxTextureSize,f={[Ir]:Vn,[Vn]:Ir,[Ei]:Ei},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ab,fragmentShader:lb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Rt(g,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let x=this.type;this.render=function(R,O,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===H_&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=el);const w=n.getRenderTarget(),B=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(or),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=x!==this.type;I&&O.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(A=>A.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,A=R.length;H<A;H++){const N=R[H],F=N.shadow;if(F===void 0){at("WebGLShadowMap:",N,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();r.multiply(G),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,F.mapSize.y=s.y));const Z=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||I===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wo){if(N.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new $i(r.x,r.y,{format:Qr,type:hr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),F.map.texture.name=N.name+".shadowMap",F.map.depthTexture=new ks(r.x,r.y,Vi),F.map.depthTexture.name=N.name+".shadowMapDepth",F.map.depthTexture.format=dr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vn,F.map.depthTexture.magFilter=vn}else N.isPointLight?(F.map=new k0(r.x),F.map.depthTexture=new lv(r.x,Ki)):(F.map=new $i(r.x,r.y),F.map.depthTexture=new ks(r.x,r.y,Ki)),F.map.depthTexture.name=N.name+".shadowMap",F.map.depthTexture.format=dr,this.type===el?(F.map.depthTexture.compareFunction=Z?_h:gh,F.map.depthTexture.minFilter=Tn,F.map.depthTexture.magFilter=Tn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vn,F.map.depthTexture.magFilter=vn);F.camera.updateProjectionMatrix()}const te=F.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<te;ue++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,ue),n.clear();else{ue===0&&(n.setRenderTarget(F.map),n.clear());const _e=F.getViewport(ue);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),z.viewport(o)}if(N.isPointLight){const _e=F.camera,Fe=F.matrix,ke=N.distance||_e.far;ke!==_e.far&&(_e.far=ke,_e.updateProjectionMatrix()),mo.setFromMatrixPosition(N.matrixWorld),_e.position.copy(mo),nf.copy(_e.position),nf.add(cb[ue]),_e.up.copy(fb[ue]),_e.lookAt(nf),_e.updateMatrixWorld(),Fe.makeTranslation(-mo.x,-mo.y,-mo.z),jd.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),F._frustum.setFromProjectionMatrix(jd,_e.coordinateSystem,_e.reversedDepth)}else F.updateMatrices(N);i=F.getFrustum(),M(O,S,F.camera,N,this.type)}F.isPointLightShadow!==!0&&this.type===wo&&T(F,S),F.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(w,B,U)};function T(R,O){const S=e.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $i(r.x,r.y,{format:Qr,type:hr})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(O,null,S,u,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(O,null,S,p,y,null)}function P(R,O,S,w){let B=null;const U=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)B=U;else if(B=S.isPointLight===!0?c:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const z=B.uuid,I=O.uuid;let H=l[z];H===void 0&&(H={},l[z]=H);let A=H[I];A===void 0&&(A=B.clone(),H[I]=A,O.addEventListener("dispose",D)),B=A}if(B.visible=O.visible,B.wireframe=O.wireframe,w===wo?B.side=O.shadowSide!==null?O.shadowSide:O.side:B.side=O.shadowSide!==null?O.shadowSide:f[O.side],B.alphaMap=O.alphaMap,B.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,B.map=O.map,B.clipShadows=O.clipShadows,B.clippingPlanes=O.clippingPlanes,B.clipIntersection=O.clipIntersection,B.displacementMap=O.displacementMap,B.displacementScale=O.displacementScale,B.displacementBias=O.displacementBias,B.wireframeLinewidth=O.wireframeLinewidth,B.linewidth=O.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const z=n.properties.get(B);z.light=S}return B}function M(R,O,S,w,B){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&B===wo)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const I=e.update(R),H=R.material;if(Array.isArray(H)){const A=I.groups;for(let N=0,F=A.length;N<F;N++){const G=A[N],Z=H[G.materialIndex];if(Z&&Z.visible){const te=P(R,Z,w,B);R.onBeforeShadow(n,R,O,S,I,te,G),n.renderBufferDirect(S,null,I,te,R,G),R.onAfterShadow(n,R,O,S,I,te,G)}}}else if(H.visible){const A=P(R,H,w,B);R.onBeforeShadow(n,R,O,S,I,A,null),n.renderBufferDirect(S,null,I,A,R,null),R.onAfterShadow(n,R,O,S,I,A,null)}}const z=R.children;for(let I=0,H=z.length;I<H;I++)M(z[I],O,S,w,B)}function D(R){R.target.removeEventListener("dispose",D);for(const S in l){const w=l[S],B=R.target.uuid;B in w&&(w[B].dispose(),delete w[B])}}}function hb(n,e){function t(){let W=!1;const Te=new Bt;let le=null;const Re=new Bt(0,0,0,0);return{setMask:function(Ce){le!==Ce&&!W&&(n.colorMask(Ce,Ce,Ce,Ce),le=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,xe,Ye,Ve,Wt){Wt===!0&&(Ce*=Ve,xe*=Ve,Ye*=Ve),Te.set(Ce,xe,Ye,Ve),Re.equals(Te)===!1&&(n.clearColor(Ce,xe,Ye,Ve),Re.copy(Te))},reset:function(){W=!1,le=null,Re.set(-1,0,0,0)}}}function i(){let W=!1,Te=!1,le=null,Re=null,Ce=null;return{setReversed:function(xe){if(Te!==xe){const Ye=e.get("EXT_clip_control");xe?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Te=xe;const Ve=Ce;Ce=null,this.setClear(Ve)}},getReversed:function(){return Te},setTest:function(xe){xe?ve(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(xe){le!==xe&&!W&&(n.depthMask(xe),le=xe)},setFunc:function(xe){if(Te&&(xe=Sx[xe]),Re!==xe){switch(xe){case Lf:n.depthFunc(n.NEVER);break;case Nf:n.depthFunc(n.ALWAYS);break;case Of:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case Uf:n.depthFunc(n.EQUAL);break;case Ff:n.depthFunc(n.GEQUAL);break;case Bf:n.depthFunc(n.GREATER);break;case zf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Ce!==xe&&(Ce=xe,Te&&(xe=1-xe),n.clearDepth(xe))},reset:function(){W=!1,le=null,Re=null,Ce=null,Te=!1}}}function r(){let W=!1,Te=null,le=null,Re=null,Ce=null,xe=null,Ye=null,Ve=null,Wt=null;return{setTest:function(Nt){W||(Nt?ve(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(Nt){Te!==Nt&&!W&&(n.stencilMask(Nt),Te=Nt)},setFunc:function(Nt,Hn,Yn){(le!==Nt||Re!==Hn||Ce!==Yn)&&(n.stencilFunc(Nt,Hn,Yn),le=Nt,Re=Hn,Ce=Yn)},setOp:function(Nt,Hn,Yn){(xe!==Nt||Ye!==Hn||Ve!==Yn)&&(n.stencilOp(Nt,Hn,Yn),xe=Nt,Ye=Hn,Ve=Yn)},setLocked:function(Nt){W=Nt},setClear:function(Nt){Wt!==Nt&&(n.clearStencil(Nt),Wt=Nt)},reset:function(){W=!1,Te=null,le=null,Re=null,Ce=null,xe=null,Ye=null,Ve=null,Wt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},p=new WeakMap,g=[],y=null,_=!1,x=null,T=null,P=null,M=null,D=null,R=null,O=null,S=new xt(0,0,0),w=0,B=!1,U=null,z=null,I=null,H=null,A=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=G>=2);let te=null,ue={};const _e=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),ke=new Bt().fromArray(_e),it=new Bt().fromArray(Fe);function he(W,Te,le,Re){const Ce=new Uint8Array(4),xe=n.createTexture();n.bindTexture(W,xe),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<le;Ye++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(Te+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return xe}const we={};we[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),o.setFunc(Bs),Tt(!1),zt(Jh),ve(n.CULL_FACE),He(or);function ve(W){h[W]!==!0&&(n.enable(W),h[W]=!0)}function je(W){h[W]!==!1&&(n.disable(W),h[W]=!1)}function et(W,Te){return u[W]!==Te?(n.bindFramebuffer(W,Te),u[W]=Te,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function tt(W,Te){let le=g,Re=!1;if(W){le=p.get(Te),le===void 0&&(le=[],p.set(Te,le));const Ce=W.textures;if(le.length!==Ce.length||le[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,Ye=Ce.length;xe<Ye;xe++)le[xe]=n.COLOR_ATTACHMENT0+xe;le.length=Ce.length,Re=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,Re=!0);Re&&n.drawBuffers(le)}function Ke(W){return y!==W?(n.useProgram(W),y=W,!0):!1}const nt={[Gr]:n.FUNC_ADD,[W_]:n.FUNC_SUBTRACT,[$_]:n.FUNC_REVERSE_SUBTRACT};nt[X_]=n.MIN,nt[q_]=n.MAX;const st={[Y_]:n.ZERO,[K_]:n.ONE,[Z_]:n.SRC_COLOR,[If]:n.SRC_ALPHA,[nx]:n.SRC_ALPHA_SATURATE,[ex]:n.DST_COLOR,[j_]:n.DST_ALPHA,[J_]:n.ONE_MINUS_SRC_COLOR,[Df]:n.ONE_MINUS_SRC_ALPHA,[tx]:n.ONE_MINUS_DST_COLOR,[Q_]:n.ONE_MINUS_DST_ALPHA,[ix]:n.CONSTANT_COLOR,[rx]:n.ONE_MINUS_CONSTANT_COLOR,[sx]:n.CONSTANT_ALPHA,[ox]:n.ONE_MINUS_CONSTANT_ALPHA};function He(W,Te,le,Re,Ce,xe,Ye,Ve,Wt,Nt){if(W===or){_===!0&&(je(n.BLEND),_=!1);return}if(_===!1&&(ve(n.BLEND),_=!0),W!==G_){if(W!==x||Nt!==B){if((T!==Gr||D!==Gr)&&(n.blendEquation(n.FUNC_ADD),T=Gr,D=Gr),Nt)switch(W){case Ls:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.ONE,n.ONE);break;case Qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ed:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ls:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qh:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",W);break}P=null,M=null,R=null,O=null,S.set(0,0,0),w=0,x=W,B=Nt}return}Ce=Ce||Te,xe=xe||le,Ye=Ye||Re,(Te!==T||Ce!==D)&&(n.blendEquationSeparate(nt[Te],nt[Ce]),T=Te,D=Ce),(le!==P||Re!==M||xe!==R||Ye!==O)&&(n.blendFuncSeparate(st[le],st[Re],st[xe],st[Ye]),P=le,M=Re,R=xe,O=Ye),(Ve.equals(S)===!1||Wt!==w)&&(n.blendColor(Ve.r,Ve.g,Ve.b,Wt),S.copy(Ve),w=Wt),x=W,B=!1}function pt(W,Te){W.side===Ei?je(n.CULL_FACE):ve(n.CULL_FACE);let le=W.side===Vn;Te&&(le=!le),Tt(le),W.blending===Ls&&W.transparent===!1?He(or):He(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const Re=W.stencilWrite;a.setTest(Re),Re&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(W){U!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),U=W)}function zt(W){W!==k_?(ve(n.CULL_FACE),W!==z&&(W===Jh?n.cullFace(n.BACK):W===V_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),z=W}function qt(W){W!==I&&(F&&n.lineWidth(W),I=W)}function Dt(W,Te,le){W?(ve(n.POLYGON_OFFSET_FILL),(H!==Te||A!==le)&&(H=Te,A=le,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,le))):je(n.POLYGON_OFFSET_FILL)}function Lt(W){W?ve(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function Zt(W){W===void 0&&(W=n.TEXTURE0+N-1),te!==W&&(n.activeTexture(W),te=W)}function Y(W,Te,le){le===void 0&&(te===null?le=n.TEXTURE0+N-1:le=te);let Re=ue[le];Re===void 0&&(Re={type:void 0,texture:void 0},ue[le]=Re),(Re.type!==W||Re.texture!==Te)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(W,Te||we[W]),Re.type=W,Re.texture=Te)}function pn(){const W=ue[te];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function E(){try{n.texSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function j(){try{n.texSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function be(){try{n.texStorage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Se(){try{n.texStorage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function fe(){try{n.texImage2D(...arguments)}catch(W){Mt("WebGLState:",W)}}function me(){try{n.texImage3D(...arguments)}catch(W){Mt("WebGLState:",W)}}function Me(W){return f[W]!==void 0?f[W]:n.getParameter(W)}function qe(W,Te){f[W]!==Te&&(n.pixelStorei(W,Te),f[W]=Te)}function Ie(W){ke.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ke.copy(W))}function Ee(W){it.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),it.copy(W))}function $e(W,Te){let le=l.get(Te);le===void 0&&(le=new WeakMap,l.set(Te,le));let Re=le.get(W);Re===void 0&&(Re=n.getUniformBlockIndex(Te,W.name),le.set(W,Re))}function rt(W,Te){const Re=l.get(Te).get(W);c.get(Te)!==Re&&(n.uniformBlockBinding(Te,Re,W.__bindingPointIndex),c.set(Te,Re))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},te=null,ue={},u={},p=new WeakMap,g=[],y=null,_=!1,x=null,T=null,P=null,M=null,D=null,R=null,O=null,S=new xt(0,0,0),w=0,B=!1,U=null,z=null,I=null,H=null,A=null,ke.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ve,disable:je,bindFramebuffer:et,drawBuffers:tt,useProgram:Ke,setBlending:He,setMaterial:pt,setFlipSided:Tt,setCullFace:zt,setLineWidth:qt,setPolygonOffset:Dt,setScissorTest:Lt,activeTexture:Zt,bindTexture:Y,unbindTexture:pn,compressedTexImage2D:At,compressedTexImage3D:k,texImage2D:fe,texImage3D:me,pixelStorei:qe,getParameter:Me,updateUBOMapping:$e,uniformBlockBinding:rt,texStorage2D:be,texStorage3D:Se,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:Ie,viewport:Ee,reset:Ze}}function db(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,f=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(k,E){return g?new OffscreenCanvas(k,E):vl("canvas")}function _(k,E,j){let se=1;const ce=At(k);if((ce.width>j||ce.height>j)&&(se=j/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const be=Math.floor(se*ce.width),Se=Math.floor(se*ce.height);u===void 0&&(u=y(be,Se));const fe=E?y(be,Se):u;return fe.width=be,fe.height=Se,fe.getContext("2d").drawImage(k,0,0,be,Se),at("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+be+"x"+Se+")."),fe}else return"data"in k&&at("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),k;return k}function x(k){return k.generateMipmaps}function T(k){n.generateMipmap(k)}function P(k){return k.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?n.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(k,E,j,se,ce,be=!1){if(k!==null){if(n[k]!==void 0)return n[k];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Se;se&&(Se=e.get("EXT_texture_norm16"),Se||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.R16_EXT),j===n.SHORT&&Se&&(fe=Se.R16_SNORM_EXT)),E===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),E===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RG16_EXT),j===n.SHORT&&Se&&(fe=Se.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),E===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),E===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),E===n.RGB&&(j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGB16_EXT),j===n.SHORT&&Se&&(fe=Se.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),E===n.RGBA){const me=be?xl:yt.getTransfer(ce);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=me===Ut?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&Se&&(fe=Se.RGBA16_EXT),j===n.SHORT&&Se&&(fe=Se.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(k,E){let j;return k?E===null||E===Ki||E===Uo?j=n.DEPTH24_STENCIL8:E===Vi?j=n.DEPTH32F_STENCIL8:E===Oo&&(j=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===Uo?j=n.DEPTH_COMPONENT24:E===Vi?j=n.DEPTH_COMPONENT32F:E===Oo&&(j=n.DEPTH_COMPONENT16),j}function R(k,E){return x(k)===!0||k.isFramebufferTexture&&k.minFilter!==vn&&k.minFilter!==Tn?Math.log2(Math.max(E.width,E.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?E.mipmaps.length:1}function O(k){const E=k.target;E.removeEventListener("dispose",O),w(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function S(k){const E=k.target;E.removeEventListener("dispose",S),U(E)}function w(k){const E=i.get(k);if(E.__webglInit===void 0)return;const j=k.source,se=p.get(j);if(se){const ce=se[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&B(k),Object.keys(se).length===0&&p.delete(j)}i.remove(k)}function B(k){const E=i.get(k);n.deleteTexture(E.__webglTexture);const j=k.source,se=p.get(j);delete se[E.__cacheKey],o.memory.textures--}function U(k){const E=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ce=0;ce<E.__webglFramebuffer[se].length;ce++)n.deleteFramebuffer(E.__webglFramebuffer[se][ce]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=k.textures;for(let se=0,ce=j.length;se<ce;se++){const be=i.get(j[se]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(j[se])}i.remove(k)}let z=0;function I(){z=0}function H(){return z}function A(k){z=k}function N(){const k=z;return k>=r.maxTextures&&at("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+r.maxTextures),z+=1,k}function F(k){const E=[];return E.push(k.wrapS),E.push(k.wrapT),E.push(k.wrapR||0),E.push(k.magFilter),E.push(k.minFilter),E.push(k.anisotropy),E.push(k.internalFormat),E.push(k.format),E.push(k.type),E.push(k.generateMipmaps),E.push(k.premultiplyAlpha),E.push(k.flipY),E.push(k.unpackAlignment),E.push(k.colorSpace),E.join()}function G(k,E){const j=i.get(k);if(k.isVideoTexture&&Y(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&j.__version!==k.version){const se=k.image;if(se===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{je(j,k,E);return}}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+E)}function Z(k,E){const j=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){je(j,k,E);return}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+E)}function te(k,E){const j=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){je(j,k,E);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+E)}function ue(k,E){const j=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&j.__version!==k.version){et(j,k,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+E)}const _e={[kf]:n.REPEAT,[rr]:n.CLAMP_TO_EDGE,[Vf]:n.MIRRORED_REPEAT},Fe={[vn]:n.NEAREST,[cx]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[wc]:n.LINEAR_MIPMAP_NEAREST,[Xr]:n.LINEAR_MIPMAP_LINEAR},ke={[hx]:n.NEVER,[_x]:n.ALWAYS,[dx]:n.LESS,[gh]:n.LEQUAL,[px]:n.EQUAL,[_h]:n.GEQUAL,[mx]:n.GREATER,[gx]:n.NOTEQUAL};function it(k,E){if(E.type===Vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tn||E.magFilter===wc||E.magFilter===ra||E.magFilter===Xr||E.minFilter===Tn||E.minFilter===wc||E.minFilter===ra||E.minFilter===Xr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(k,n.TEXTURE_WRAP_S,_e[E.wrapS]),n.texParameteri(k,n.TEXTURE_WRAP_T,_e[E.wrapT]),(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)&&n.texParameteri(k,n.TEXTURE_WRAP_R,_e[E.wrapR]),n.texParameteri(k,n.TEXTURE_MAG_FILTER,Fe[E.magFilter]),n.texParameteri(k,n.TEXTURE_MIN_FILTER,Fe[E.minFilter]),E.compareFunction&&(n.texParameteri(k,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(k,n.TEXTURE_COMPARE_FUNC,ke[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==ra&&E.minFilter!==Xr||E.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(k,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function he(k,E){let j=!1;k.__webglInit===void 0&&(k.__webglInit=!0,E.addEventListener("dispose",O));const se=E.source;let ce=p.get(se);ce===void 0&&(ce={},p.set(se,ce));const be=F(E);if(be!==k.__cacheKey){ce[be]===void 0&&(ce[be]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ce[be].usedTimes++;const Se=ce[k.__cacheKey];Se!==void 0&&(ce[k.__cacheKey].usedTimes--,Se.usedTimes===0&&B(E)),k.__cacheKey=be,k.__webglTexture=ce[be].texture}return j}function we(k,E,j){return Math.floor(Math.floor(k/j)/E)}function ve(k,E,j,se){const be=k.updateRanges;if(be.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,j,se,E.data);else{be.sort((qe,Ie)=>qe.start-Ie.start);let Se=0;for(let qe=1;qe<be.length;qe++){const Ie=be[Se],Ee=be[qe],$e=Ie.start+Ie.count,rt=we(Ee.start,E.width,4),Ze=we(Ie.start,E.width,4);Ee.start<=$e+1&&rt===Ze&&we(Ee.start+Ee.count-1,E.width,4)===rt?Ie.count=Math.max(Ie.count,Ee.start+Ee.count-Ie.start):(++Se,be[Se]=Ee)}be.length=Se+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),me=t.getParameter(n.UNPACK_SKIP_PIXELS),Me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let qe=0,Ie=be.length;qe<Ie;qe++){const Ee=be[qe],$e=Math.floor(Ee.start/4),rt=Math.ceil(Ee.count/4),Ze=$e%E.width,W=Math.floor($e/E.width),Te=rt,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,Ze,W,Te,le,j,se,E.data)}k.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,me),t.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function je(k,E,j){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const ce=he(k,E),be=E.source;t.bindTexture(se,k.__webglTexture,n.TEXTURE0+j);const Se=i.get(be);if(be.version!==Se.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const le=yt.getPrimaries(yt.workingColorSpace),Re=E.colorSpace===Tr?null:yt.getPrimaries(E.colorSpace),Ce=E.colorSpace===Tr||le===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let me=_(E.image,!1,r.maxTextureSize);me=pn(E,me);const Me=s.convert(E.format,E.colorSpace),qe=s.convert(E.type);let Ie=M(E.internalFormat,Me,qe,E.normalized,E.colorSpace,E.isVideoTexture);it(se,E);let Ee;const $e=E.mipmaps,rt=E.isVideoTexture!==!0,Ze=Se.__version===void 0||ce===!0,W=be.dataReady,Te=R(E,me);if(E.isDepthTexture)Ie=D(E.format===qr,E.type),Ze&&(rt?t.texStorage2D(n.TEXTURE_2D,1,Ie,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Me,qe,null));else if(E.isDataTexture)if($e.length>0){rt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,$e[0].width,$e[0].height);for(let le=0,Re=$e.length;le<Re;le++)Ee=$e[le],rt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,qe,Ee.data):t.texImage2D(n.TEXTURE_2D,le,Ie,Ee.width,Ee.height,0,Me,qe,Ee.data);E.generateMipmaps=!1}else rt?(Ze&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,me.width,me.height),W&&ve(E,me,Me,qe)):t.texImage2D(n.TEXTURE_2D,0,Ie,me.width,me.height,0,Me,qe,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ie,$e[0].width,$e[0].height,me.depth);for(let le=0,Re=$e.length;le<Re;le++)if(Ee=$e[le],E.format!==Ti)if(Me!==null)if(rt){if(W)if(E.layerUpdates.size>0){const Ce=Cd(Ee.width,Ee.height,E.format,E.type);for(const xe of E.layerUpdates){const Ye=Ee.data.subarray(xe*Ce/Ee.data.BYTES_PER_ELEMENT,(xe+1)*Ce/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,xe,Ee.width,Ee.height,1,Me,Ye)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,me.depth,Me,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ie,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ee.width,Ee.height,me.depth,Me,qe,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ie,Ee.width,Ee.height,me.depth,0,Me,qe,Ee.data)}else{rt&&Ze&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,$e[0].width,$e[0].height);for(let le=0,Re=$e.length;le<Re;le++)Ee=$e[le],E.format!==Ti?Me!==null?rt?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ie,Ee.width,Ee.height,0,Ee.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ee.width,Ee.height,Me,qe,Ee.data):t.texImage2D(n.TEXTURE_2D,le,Ie,Ee.width,Ee.height,0,Me,qe,Ee.data)}else if(E.isDataArrayTexture)if(rt){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ie,me.width,me.height,me.depth),W)if(E.layerUpdates.size>0){const le=Cd(me.width,me.height,E.format,E.type);for(const Re of E.layerUpdates){const Ce=me.data.subarray(Re*le/me.data.BYTES_PER_ELEMENT,(Re+1)*le/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,me.width,me.height,1,Me,qe,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Me,qe,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,Me,qe,me.data);else if(E.isData3DTexture)rt?(Ze&&t.texStorage3D(n.TEXTURE_3D,Te,Ie,me.width,me.height,me.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Me,qe,me.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,Me,qe,me.data);else if(E.isFramebufferTexture){if(Ze)if(rt)t.texStorage2D(n.TEXTURE_2D,Te,Ie,me.width,me.height);else{let le=me.width,Re=me.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ie,le,Re,0,Me,qe,null),le>>=1,Re>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),me.parentNode!==le){le.appendChild(me),f.add(E),le.onpaint=Re=>{const Ce=Re.changedElements;for(const xe of f)Ce.includes(xe.image)&&(xe.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,me);else{const Ce=n.RGBA,xe=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,xe,Ye,me)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($e.length>0){if(rt&&Ze){const le=At($e[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ie,le.width,le.height)}for(let le=0,Re=$e.length;le<Re;le++)Ee=$e[le],rt?W&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Me,qe,Ee):t.texImage2D(n.TEXTURE_2D,le,Ie,Me,qe,Ee);E.generateMipmaps=!1}else if(rt){if(Ze){const le=At(me);t.texStorage2D(n.TEXTURE_2D,Te,Ie,le.width,le.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,qe,me)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Me,qe,me);x(E)&&T(se),Se.__version=be.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function et(k,E,j){if(E.image.length!==6)return;const se=he(k,E),ce=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+j);const be=i.get(ce);if(ce.version!==be.__version||se===!0){t.activeTexture(n.TEXTURE0+j);const Se=yt.getPrimaries(yt.workingColorSpace),fe=E.colorSpace===Tr?null:yt.getPrimaries(E.colorSpace),me=E.colorSpace===Tr||Se===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,qe=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!Me&&!qe?Ie[xe]=_(E.image[xe],!0,r.maxCubemapSize):Ie[xe]=qe?E.image[xe].image:E.image[xe],Ie[xe]=pn(E,Ie[xe]);const Ee=Ie[0],$e=s.convert(E.format,E.colorSpace),rt=s.convert(E.type),Ze=M(E.internalFormat,$e,rt,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Te=be.__version===void 0||se===!0,le=ce.dataReady;let Re=R(E,Ee);it(n.TEXTURE_CUBE_MAP,E);let Ce;if(Me){W&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ze,Ee.width,Ee.height);for(let xe=0;xe<6;xe++){Ce=Ie[xe].mipmaps;for(let Ye=0;Ye<Ce.length;Ye++){const Ve=Ce[Ye];E.format!==Ti?$e!==null?W?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Ve.width,Ve.height,$e,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,Ze,Ve.width,Ve.height,0,Ve.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,0,0,Ve.width,Ve.height,$e,rt,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye,Ze,Ve.width,Ve.height,0,$e,rt,Ve.data)}}}else{if(Ce=E.mipmaps,W&&Te){Ce.length>0&&Re++;const xe=At(Ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ze,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(qe){W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,$e,rt,Ie[xe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,Ie[xe].width,Ie[xe].height,0,$e,rt,Ie[xe].data);for(let Ye=0;Ye<Ce.length;Ye++){const Wt=Ce[Ye].image[xe].image;W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,Wt.width,Wt.height,$e,rt,Wt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,Ze,Wt.width,Wt.height,0,$e,rt,Wt.data)}}else{W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,$e,rt,Ie[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Ze,$e,rt,Ie[xe]);for(let Ye=0;Ye<Ce.length;Ye++){const Ve=Ce[Ye];W?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,0,0,$e,rt,Ve.image[xe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ye+1,Ze,$e,rt,Ve.image[xe])}}}x(E)&&T(n.TEXTURE_CUBE_MAP),be.__version=ce.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function tt(k,E,j,se,ce,be){const Se=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),me=M(j.internalFormat,Se,fe,j.normalized,j.colorSpace),Me=i.get(E),qe=i.get(j);if(qe.__renderTarget=E,!Me.__hasExternalTextures){const Ie=Math.max(1,E.width>>be),Ee=Math.max(1,E.height>>be);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,be,me,Ie,Ee,E.depth,0,Se,fe,null):t.texImage2D(ce,be,me,Ie,Ee,0,Se,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,k),Zt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ce,qe.__webglTexture,0,Lt(E)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ce,qe.__webglTexture,be),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(k,E,j){if(n.bindRenderbuffer(n.RENDERBUFFER,k),E.depthBuffer){const se=E.depthTexture,ce=se&&se.isDepthTexture?se.type:null,be=D(E.stencilBuffer,ce),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(E),be,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(E),be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,k)}else{const se=E.textures;for(let ce=0;ce<se.length;ce++){const be=se[ce],Se=s.convert(be.format,be.colorSpace),fe=s.convert(be.type),me=M(be.internalFormat,Se,fe,be.normalized,be.colorSpace);Zt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(E),me,E.width,E.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(E),me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(k,E,j){const se=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,k),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=i.get(E.depthTexture);if(ce.__renderTarget=E,(!ce.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),it(n.TEXTURE_CUBE_MAP,E.depthTexture);const Me=s.convert(E.depthTexture.format),qe=s.convert(E.depthTexture.type);let Ie;E.depthTexture.format===dr?Ie=n.DEPTH_COMPONENT24:E.depthTexture.format===qr&&(Ie=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ie,E.width,E.height,0,Me,qe,null)}}else G(E.depthTexture,0);const be=ce.__webglTexture,Se=Lt(E),fe=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,me=E.depthTexture.format===qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===dr)Zt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,be,0);else if(E.depthTexture.format===qr)Zt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,fe,be,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,me,fe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(k){const E=i.get(k),j=k.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==k.depthTexture){const se=k.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ce=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),E.__depthDisposeCallback=ce}E.__boundDepthTexture=se}if(k.depthTexture&&!E.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)nt(E.__webglFramebuffer[se],k,se);else{const se=k.texture.mipmaps;se&&se.length>0?nt(E.__webglFramebuffer[0],k,0):nt(E.__webglFramebuffer,k,0)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=n.createRenderbuffer(),Ke(E.__webglDepthbuffer[se],k,!1);else{const ce=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,be)}}else{const se=k.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ke(E.__webglDepthbuffer,k,!1);else{const ce=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,be),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,be)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(k,E,j){const se=i.get(k);E!==void 0&&tt(se.__webglFramebuffer,k,k.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&st(k)}function pt(k){const E=k.texture,j=i.get(k),se=i.get(E);k.addEventListener("dispose",S);const ce=k.textures,be=k.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,o.memory.textures++),be){j.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[fe]=[];for(let me=0;me<E.mipmaps.length;me++)j.__webglFramebuffer[fe][me]=n.createFramebuffer()}else j.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)j.__webglFramebuffer[fe]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Se)for(let fe=0,me=ce.length;fe<me;fe++){const Me=i.get(ce[fe]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),o.memory.textures++)}if(k.samples>0&&Zt(k)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let fe=0;fe<ce.length;fe++){const me=ce[fe];j.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[fe]);const Me=s.convert(me.format,me.colorSpace),qe=s.convert(me.type),Ie=M(me.internalFormat,Me,qe,me.normalized,me.colorSpace,k.isXRRenderTarget===!0),Ee=Lt(k);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Ie,k.width,k.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,j.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),k.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(j.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(be){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),it(n.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)tt(j.__webglFramebuffer[fe][me],k,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else tt(j.__webglFramebuffer[fe],k,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(E)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let fe=0,me=ce.length;fe<me;fe++){const Me=ce[fe],qe=i.get(Me);let Ie=n.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ie=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ie,qe.__webglTexture),it(Ie,Me),tt(j.__webglFramebuffer,k,Me,n.COLOR_ATTACHMENT0+fe,Ie,0),x(Me)&&T(Ie)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(fe=k.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),it(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)tt(j.__webglFramebuffer[me],k,E,n.COLOR_ATTACHMENT0,fe,me);else tt(j.__webglFramebuffer,k,E,n.COLOR_ATTACHMENT0,fe,0);x(E)&&T(fe),t.unbindTexture()}k.depthBuffer&&st(k)}function Tt(k){const E=k.textures;for(let j=0,se=E.length;j<se;j++){const ce=E[j];if(x(ce)){const be=P(k),Se=i.get(ce).__webglTexture;t.bindTexture(be,Se),T(be),t.unbindTexture()}}}const zt=[],qt=[];function Dt(k){if(k.samples>0){if(Zt(k)===!1){const E=k.textures,j=k.width,se=k.height;let ce=n.COLOR_BUFFER_BIT;const be=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(k),fe=E.length>1;if(fe)for(let Me=0;Me<E.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const me=k.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<E.length;Me++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const qe=i.get(E[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ce,n.NEAREST),c===!0&&(zt.length=0,qt.length=0,zt.push(n.COLOR_ATTACHMENT0+Me),k.depthBuffer&&k.resolveDepthBuffer===!1&&(zt.push(be),qt.push(be),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Me=0;Me<E.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const qe=i.get(E[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&c){const E=k.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Lt(k){return Math.min(r.maxSamples,k.samples)}function Zt(k){const E=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(k){const E=o.render.frame;h.get(k)!==E&&(h.set(k,E),k.update())}function pn(k,E){const j=k.colorSpace,se=k.format,ce=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||j!==_l&&j!==Tr&&(yt.getTransfer(j)===Ut?(se!==Ti||ce!==ti)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",j)),E}function At(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(l.width=k.naturalWidth||k.width,l.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(l.width=k.displayWidth,l.height=k.displayHeight):(l.width=k.width,l.height=k.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.getTextureUnits=H,this.setTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=ue,this.rebindTextures=He,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(n,e){function t(i,r=Tr){let s;const o=yt.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===fh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===uh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===x0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===v0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===g0)return n.BYTE;if(i===_0)return n.SHORT;if(i===Oo)return n.UNSIGNED_SHORT;if(i===ch)return n.INT;if(i===Ki)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===y0)return n.ALPHA;if(i===S0)return n.RGB;if(i===Ti)return n.RGBA;if(i===dr)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===dh)return n.RED_INTEGER;if(i===Qr)return n.RG;if(i===ph)return n.RG_INTEGER;if(i===mh)return n.RGBA_INTEGER;if(i===tl||i===nl||i===il||i===rl)if(o===Ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hf||i===Gf||i===Wf||i===$f)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===qf||i===Yf||i===Kf||i===Zf||i===ml||i===Jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xf||i===qf)return o===Ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yf)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kf)return s.COMPRESSED_R11_EAC;if(i===Zf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ml)return s.COMPRESSED_RG11_EAC;if(i===Jf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jf||i===Qf||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===fu||i===uu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jf)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qf)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ru)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===su)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ou)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===au)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uu)return o===Ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hu||i===du||i===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hu)return o===Ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mu||i===gu||i===gl||i===_u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new O0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new di({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xb extends is{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",_=new _b,x={},T=t.getContextAttributes();let P=null,M=null;const D=[],R=[],O=new ht;let S=null;const w=new ci;w.viewport=new Bt;const B=new ci;B.viewport=new Bt;const U=[w,B],z=new Ev;let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let we=D[he];return we===void 0&&(we=new Ic,D[he]=we),we.getTargetRaySpace()},this.getControllerGrip=function(he){let we=D[he];return we===void 0&&(we=new Ic,D[he]=we),we.getGripSpace()},this.getHand=function(he){let we=D[he];return we===void 0&&(we=new Ic,D[he]=we),we.getHandSpace()};function A(he){const we=R.indexOf(he.inputSource);if(we===-1)return;const ve=D[we];ve!==void 0&&(ve.update(he.inputSource,he.frame,l||o),ve.dispatchEvent({type:he.type,data:he.inputSource}))}function N(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",F);for(let he=0;he<D.length;he++){const we=R[he];we!==null&&(R[he]=null,D[he].disconnect(we))}I=null,H=null,_.reset();for(const he in x)delete x[he];e.setRenderTarget(P),p=null,u=null,f=null,r=null,M=null,it.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){s=he,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(he){if(r=he,r!==null){if(P=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",N),r.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(O),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,je=null,et=null;T.depth&&(et=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?qr:dr,je=T.stencil?Uo:Ki);const tt={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(tt),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new $i(u.textureWidth,u.textureHeight,{format:Ti,type:ti,depthTexture:new ks(u.textureWidth,u.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new $i(p.framebufferWidth,p.framebufferHeight,{format:Ti,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(he){for(let we=0;we<he.removed.length;we++){const ve=he.removed[we],je=R.indexOf(ve);je>=0&&(R[je]=null,D[je].disconnect(ve))}for(let we=0;we<he.added.length;we++){const ve=he.added[we];let je=R.indexOf(ve);if(je===-1){for(let tt=0;tt<D.length;tt++)if(tt>=R.length){R.push(ve),je=tt;break}else if(R[tt]===null){R[tt]=ve,je=tt;break}if(je===-1)break}const et=D[je];et&&et.connect(ve)}}const G=new X,Z=new X;function te(he,we,ve){G.setFromMatrixPosition(we.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);const je=G.distanceTo(Z),et=we.projectionMatrix.elements,tt=ve.projectionMatrix.elements,Ke=et[14]/(et[10]-1),nt=et[14]/(et[10]+1),st=(et[9]+1)/et[5],He=(et[9]-1)/et[5],pt=(et[8]-1)/et[0],Tt=(tt[8]+1)/tt[0],zt=Ke*pt,qt=Ke*Tt,Dt=je/(-pt+Tt),Lt=Dt*-pt;if(we.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(Lt),he.translateZ(Dt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),et[10]===-1)he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const Zt=Ke+Dt,Y=nt+Dt,pn=zt-Lt,At=qt+(je-Lt),k=st*nt/Y*Zt,E=He*nt/Y*Zt;he.projectionMatrix.makePerspective(pn,At,k,E,Zt,Y),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function ue(he,we){we===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(we.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(r===null)return;let we=he.near,ve=he.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),z.near=B.near=w.near=we,z.far=B.far=w.far=ve,(I!==z.near||H!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,H=z.far),z.layers.mask=he.layers.mask|6,w.layers.mask=z.layers.mask&-5,B.layers.mask=z.layers.mask&-3;const je=he.parent,et=z.cameras;ue(z,je);for(let tt=0;tt<et.length;tt++)ue(et[tt],je);et.length===2?te(z,w,B):z.projectionMatrix.copy(w.projectionMatrix),_e(he,z,je)};function _e(he,we,ve){ve===null?he.matrix.copy(we.matrixWorld):(he.matrix.copy(ve.matrixWorld),he.matrix.invert(),he.matrix.multiply(we.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(we.projectionMatrix),he.projectionMatrixInverse.copy(we.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=Bo*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(he){c=he,u!==null&&(u.fixedFoveation=he),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=he)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(he){return x[he]};let Fe=null;function ke(he,we){if(h=we.getViewerPose(l||o),g=we,h!==null){const ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let je=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,je=!0);for(let nt=0;nt<ve.length;nt++){const st=ve[nt];let He=null;if(p!==null)He=p.getViewport(st);else{const Tt=f.getViewSubImage(u,st);He=Tt.viewport,nt===0&&(e.setRenderTargetTextures(M,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(M))}let pt=U[nt];pt===void 0&&(pt=new ci,pt.layers.enable(nt),pt.viewport=new Bt,U[nt]=pt),pt.matrix.fromArray(st.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(st.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(He.x,He.y,He.width,He.height),nt===0&&(z.matrix.copy(pt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),je===!0&&z.cameras.push(pt)}const et=r.enabledFeatures;if(et&&et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const nt=f.getDepthInformation(ve[0]);nt&&nt.isValid&&nt.texture&&_.init(nt,r.renderState)}if(et&&et.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let nt=0;nt<ve.length;nt++){const st=ve[nt].camera;if(st){let He=x[st];He||(He=new O0,x[st]=He);const pt=f.getCameraImage(st);He.sourceTexture=pt}}}}for(let ve=0;ve<D.length;ve++){const je=R[ve],et=D[ve];je!==null&&et!==void 0&&et.update(je,we,l||o)}Fe&&Fe(he,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),g=null}const it=new B0;it.setAnimationLoop(ke),this.setAnimationLoop=function(he){Fe=he},this.dispose=function(){}}}const vb=new Kt,$0=new ft;$0.set(-1,0,0,0,1,0,0,0,1);function yb(n,e){function t(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,U0(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function r(_,x,T,P,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(_,x):x.isMeshLambertMaterial?(s(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(_,x),f(_,x)):x.isMeshPhongMaterial?(s(_,x),h(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(_,x),u(_,x),x.isMeshPhysicalMaterial&&p(_,x,M)):x.isMeshMatcapMaterial?(s(_,x),g(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),y(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(o(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?c(_,x,T,P):x.isSpriteMaterial?l(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,t(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Vn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,t(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Vn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,t(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,t(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const T=e.get(x),P=T.envMap,M=T.envMapRotation;P&&(_.envMap.value=P,_.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply($0),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,_.aoMapTransform))}function o(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function c(_,x,T,P){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*T,_.scale.value=P*.5,x.map&&(_.map.value=x.map,t(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function l(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,t(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,t(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function f(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function u(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function p(_,x,T){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Vn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,x){x.matcap&&(_.matcap.value=x.matcap)}function y(_,x){const T=e.get(x).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,D){const R=D.program;i.uniformBlockBinding(M,R)}function l(M,D){let R=r[M.id];R===void 0&&(_(M),R=h(M),r[M.id]=R,M.addEventListener("dispose",T));const O=D.program;i.updateUBOMapping(M,O);const S=e.render.frame;s[M.id]!==S&&(u(M),s[M.id]=S)}function h(M){const D=f();M.__bindingPointIndex=D;const R=n.createBuffer(),O=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,O,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,R),R}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const D=r[M.id],R=M.uniforms,O=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let S=0,w=R.length;S<w;S++){const B=R[S];if(Array.isArray(B))for(let U=0,z=B.length;U<z;U++)p(B[U],S,U,O);else p(B,S,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,D,R,O){if(y(M,D,R,O)===!0){const S=M.__offset,w=M.value;if(Array.isArray(w)){let B=0;for(let U=0;U<w.length;U++){const z=w[U],I=x(z);g(z,M.__data,B),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,M.__data)}}function g(M,D,R){typeof M=="number"||typeof M=="boolean"?D[0]=M:M.isMatrix3?(D[0]=M.elements[0],D[1]=M.elements[1],D[2]=M.elements[2],D[3]=0,D[4]=M.elements[3],D[5]=M.elements[4],D[6]=M.elements[5],D[7]=0,D[8]=M.elements[6],D[9]=M.elements[7],D[10]=M.elements[8],D[11]=0):ArrayBuffer.isView(M)?D.set(new M.constructor(M.buffer,M.byteOffset,D.length)):M.toArray(D,R)}function y(M,D,R,O){const S=M.value,w=D+"_"+R;if(O[w]===void 0)return typeof S=="number"||typeof S=="boolean"?O[w]=S:ArrayBuffer.isView(S)?O[w]=S.slice():O[w]=S.clone(),!0;{const B=O[w];if(typeof S=="number"||typeof S=="boolean"){if(B!==S)return O[w]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(B.equals(S)===!1)return B.copy(S),!0}}return!1}function _(M){const D=M.uniforms;let R=0;const O=16;for(let w=0,B=D.length;w<B;w++){const U=Array.isArray(D[w])?D[w]:[D[w]];for(let z=0,I=U.length;z<I;z++){const H=U[z],A=Array.isArray(H.value)?H.value:[H.value];for(let N=0,F=A.length;N<F;N++){const G=A[N],Z=x(G),te=R%O,ue=te%Z.boundary,_e=te+ue;R+=ue,_e!==0&&O-_e<Z.storage&&(R+=O-_e),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=R,R+=Z.storage}}}const S=R%O;return S>0&&(R+=O-S),M.__size=R,M.__cache={},this}function x(M){const D={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(D.boundary=4,D.storage=4):M.isVector2?(D.boundary=8,D.storage=8):M.isVector3||M.isColor?(D.boundary=16,D.storage=12):M.isVector4?(D.boundary=16,D.storage=16):M.isMatrix3?(D.boundary=48,D.storage=48):M.isMatrix4?(D.boundary=64,D.storage=64):M.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(D.boundary=16,D.storage=M.byteLength):at("WebGLRenderer: Unsupported uniform value type.",M),D}function T(M){const D=M.target;D.removeEventListener("dispose",T);const R=o.indexOf(D.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(r[D.id]),delete r[D.id],delete s[D.id]}function P(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:P}}const Mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function Eb(){return Ni===null&&(Ni=new D0(Mb,16,16,Qr,hr),Ni.name="DFG_LUT",Ni.minFilter=Tn,Ni.magFilter=Tn,Ni.wrapS=rr,Ni.wrapT=rr,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class bb{constructor(e={}){const{canvas:t=vx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ti}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,_=new Set([mh,ph,dh]),x=new Set([ti,Ki,Oo,Uo,fh,uh]),T=new Uint32Array(4),P=new Int32Array(4),M=new X;let D=null,R=null;const O=[],S=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let U=!1,z=null,I=null,H=null,A=null;this._outputColorSpace=li;let N=0,F=0,G=null,Z=-1,te=null;const ue=new Bt,_e=new Bt;let Fe=null;const ke=new xt(0);let it=0,he=t.width,we=t.height,ve=1,je=null,et=null;const tt=new Bt(0,0,he,we),Ke=new Bt(0,0,he,we);let nt=!1;const st=new yh;let He=!1,pt=!1;const Tt=new Kt,zt=new X,qt=new Bt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Zt(){return G===null?ve:1}let Y=i;function pn(L,q){return t.getContext(L,q)}try{const L={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),Y===null){const q="webgl2";if(Y=pn(q,L),Y===null)throw pn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw Mt("WebGLRenderer: "+L.message),L}let At,k,E,j,se,ce,be,Se,fe,me,Me,qe,Ie,Ee,$e,rt,Ze,W,Te,le,Re,Ce,xe;function Ye(){At=new EM(Y),At.init(),Re=new pb(Y,At),k=new mM(Y,At,e,Re),E=new hb(Y,At),k.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),I=Y.createFramebuffer(),H=Y.createFramebuffer(),A=Y.createFramebuffer(),j=new TM(Y),se=new jE,ce=new db(Y,At,E,se,k,Re,j),be=new MM(B),Se=new Pv(Y),Ce=new dM(Y,Se),fe=new bM(Y,Se,j,Ce),me=new RM(Y,fe,Se,Ce,j),W=new AM(Y,k,ce),$e=new gM(se),Me=new JE(B,be,At,k,Ce,$e),qe=new yb(B,se),Ie=new eb,Ee=new ob(At),Ze=new hM(B,be,E,me,g,c),rt=new ub(B,me,k),xe=new Sb(Y,j,k,E),Te=new pM(Y,At,j),le=new wM(Y,At,j),j.programs=Me.programs,B.capabilities=k,B.extensions=At,B.properties=se,B.renderLists=Ie,B.shadowMap=rt,B.state=E,B.info=j}Ye(),y!==ti&&(w=new PM(y,t.width,t.height,a,r,s));const Ve=new xb(B,Y);this.xr=Ve,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const L=At.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=At.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(L){L!==void 0&&(ve=L,this.setSize(he,we,!1))},this.getSize=function(L){return L.set(he,we)},this.setSize=function(L,q,oe=!0){if(Ve.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}he=L,we=q,t.width=Math.floor(L*ve),t.height=Math.floor(q*ve),oe===!0&&(t.style.width=L+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,L,q)},this.getDrawingBufferSize=function(L){return L.set(he*ve,we*ve).floor()},this.setDrawingBufferSize=function(L,q,oe){he=L,we=q,ve=oe,t.width=Math.floor(L*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,L,q)},this.setEffects=function(L){if(y===ti){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let q=0;q<L.length;q++)if(L[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(ue)},this.getViewport=function(L){return L.copy(tt)},this.setViewport=function(L,q,oe,ne){L.isVector4?tt.set(L.x,L.y,L.z,L.w):tt.set(L,q,oe,ne),E.viewport(ue.copy(tt).multiplyScalar(ve).round())},this.getScissor=function(L){return L.copy(Ke)},this.setScissor=function(L,q,oe,ne){L.isVector4?Ke.set(L.x,L.y,L.z,L.w):Ke.set(L,q,oe,ne),E.scissor(_e.copy(Ke).multiplyScalar(ve).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(L){E.setScissorTest(nt=L)},this.setOpaqueSort=function(L){je=L},this.setTransparentSort=function(L){et=L},this.getClearColor=function(L){return L.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(L=!0,q=!0,oe=!0){let ne=0;if(L){let re=!1;if(G!==null){const De=G.texture.format;re=_.has(De)}if(re){const De=G.texture.type,Be=x.has(De),Le=Ze.getClearColor(),Xe=Ze.getClearAlpha(),Je=Le.r,Ge=Le.g,ot=Le.b;Be?(T[0]=Je,T[1]=Ge,T[2]=ot,T[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,T)):(P[0]=Je,P[1]=Ge,P[2]=ot,P[3]=Xe,Y.clearBufferiv(Y.COLOR,0,P))}else ne|=Y.COLOR_BUFFER_BIT}q&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),z=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Ze.dispose(),Ie.dispose(),Ee.dispose(),se.dispose(),be.dispose(),me.dispose(),Ce.dispose(),xe.dispose(),Me.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Qs),Ve.removeEventListener("sessionend",eo),Zi.stop()};function Wt(L){L.preventDefault(),yl("WebGLRenderer: Context Lost."),U=!0}function Nt(){yl("WebGLRenderer: Context Restored."),U=!1;const L=j.autoReset,q=rt.enabled,oe=rt.autoUpdate,ne=rt.needsUpdate,re=rt.type;Ye(),j.autoReset=L,rt.enabled=q,rt.autoUpdate=oe,rt.needsUpdate=ne,rt.type=re}function Hn(L){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Yn(L){const q=L.target;q.removeEventListener("dispose",Yn),ss(q)}function ss(L){Sc(L),se.remove(L)}function Sc(L){const q=se.get(L).programs;q!==void 0&&(q.forEach(function(oe){Me.releaseProgram(oe)}),L.isShaderMaterial&&Me.releaseShaderCache(L))}this.renderBufferDirect=function(L,q,oe,ne,re,De){q===null&&(q=Dt);const Be=re.isMesh&&re.matrixWorld.determinantAffine()<0,Le=xr(L,q,oe,ne,re);E.setMaterial(ne,Be);let Xe=oe.index,Je=1;if(ne.wireframe===!0){if(Xe=fe.getWireframeAttribute(oe),Xe===void 0)return;Je=2}const Ge=oe.drawRange,ot=oe.attributes.position;let Qe=Ge.start*Je,Et=(Ge.start+Ge.count)*Je;De!==null&&(Qe=Math.max(Qe,De.start*Je),Et=Math.min(Et,(De.start+De.count)*Je)),Xe!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,Xe.count)):ot!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,ot.count));const Yt=Et-Qe;if(Yt<0||Yt===1/0)return;Ce.setup(re,ne,Le,oe,Xe);let $t,Ot=Te;if(Xe!==null&&($t=Se.get(Xe),Ot=le,Ot.setIndex($t)),re.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Zt()),Ot.setMode(Y.LINES)):Ot.setMode(Y.TRIANGLES);else if(re.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),E.setLineWidth(rn*Zt()),re.isLineSegments?Ot.setMode(Y.LINES):re.isLineLoop?Ot.setMode(Y.LINE_LOOP):Ot.setMode(Y.LINE_STRIP)}else re.isPoints?Ot.setMode(Y.POINTS):re.isSprite&&Ot.setMode(Y.TRIANGLES);if(re.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Ot.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const rn=re._multiDrawStarts,Oe=re._multiDrawCounts,sn=re._multiDrawCount,mt=Xe?Se.get(Xe).bytesPerElement:1,Wn=se.get(ne).currentProgram.getUniforms();for(let ii=0;ii<sn;ii++)Wn.setValue(Y,"_gl_DrawID",ii),Ot.render(rn[ii]/mt,Oe[ii])}else if(re.isInstancedMesh)Ot.renderInstances(Qe,Yt,re.count);else if(oe.isInstancedBufferGeometry){const rn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Oe=Math.min(oe.instanceCount,rn);Ot.renderInstances(Qe,Yt,Oe)}else Ot.render(Qe,Yt)};function Js(L,q,oe){L.transparent===!0&&L.side===Ei&&L.forceSinglePass===!1?(L.side=Vn,L.needsUpdate=!0,Nr(L,q,oe),L.side=Ir,L.needsUpdate=!0,Nr(L,q,oe),L.side=Ei):Nr(L,q,oe)}this.compile=function(L,q,oe=null){oe===null&&(oe=L),R=Ee.get(oe),R.init(q),S.push(R),oe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(R.pushLight(re),re.castShadow&&R.pushShadow(re))}),L!==oe&&L.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(R.pushLight(re),re.castShadow&&R.pushShadow(re))}),R.setupLights();const ne=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const De=re.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Le=De[Be];Js(Le,oe,re),ne.add(Le)}else Js(De,oe,re),ne.add(De)}),R=S.pop(),ne},this.compileAsync=function(L,q,oe=null){const ne=this.compile(L,q,oe);return new Promise(re=>{function De(){if(ne.forEach(function(Be){se.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){re(L);return}setTimeout(De,10)}At.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let js=null;function os(L){js&&js(L)}function Qs(){Zi.stop()}function eo(){Zi.start()}const Zi=new B0;Zi.setAnimationLoop(os),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(L){js=L,Ve.setAnimationLoop(L),L===null?Zi.stop():Zi.start()},Ve.addEventListener("sessionstart",Qs),Ve.addEventListener("sessionend",eo),this.render=function(L,q){if(q!==void 0&&q.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(L,q);const oe=Ve.enabled===!0&&Ve.isPresenting===!0,ne=w!==null&&(G===null||oe)&&w.begin(B,G);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(q),q=Ve.getCamera()),L.isScene===!0&&L.onBeforeRender(B,L,q,G),R=Ee.get(L,S.length),R.init(q),R.state.textureUnits=ce.getTextureUnits(),S.push(R),Tt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(Tt,Hi,q.reversedDepth),pt=this.localClippingEnabled,He=$e.init(this.clippingPlanes,pt),D=Ie.get(L,O.length),D.init(),O.push(D),Ve.enabled===!0&&Ve.isPresenting===!0){const Be=B.xr.getDepthSensingMesh();Be!==null&&Cn(Be,q,-1/0,B.sortObjects)}Cn(L,q,0,B.sortObjects),D.finish(),B.sortObjects===!0&&D.sort(je,et,q.reversedDepth),Lt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Lt&&Ze.addToRenderList(D,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&$e.beginShadows();const re=R.state.shadowsArray;if(rt.render(re,L,q),He===!0&&$e.endShadows(),(ne&&w.hasRenderPass())===!1){const Be=D.opaque,Le=D.transmissive;if(R.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(Le.length>0)for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const ot=Xe[Je];no(Be,Le,L,ot)}Lt&&Ze.render(L);for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const ot=Xe[Je];to(D,L,ot,ot.viewport)}}else Le.length>0&&no(Be,Le,L,q),Lt&&Ze.render(L),to(D,L,q)}G!==null&&F===0&&(ce.updateMultisampleRenderTarget(G),ce.updateRenderTargetMipmap(G)),ne&&w.end(B),L.isScene===!0&&L.onAfterRender(B,L,q),Ce.resetDefaultState(),Z=-1,te=null,S.pop(),S.length>0?(R=S[S.length-1],ce.setTextureUnits(R.state.textureUnits),He===!0&&$e.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?D=O[O.length-1]:D=null,z!==null&&z.renderEnd()};function Cn(L,q,oe,ne){if(L.visible===!1)return;if(L.layers.test(q.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(q);else if(L.isLightProbeGrid)R.pushLightProbeGrid(L);else if(L.isLight)R.pushLight(L),L.castShadow&&R.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||st.intersectsSprite(L)){ne&&qt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Tt);const Be=me.update(L),Le=L.material;Le.visible&&D.push(L,Be,Le,oe,qt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||st.intersectsObject(L))){const Be=me.update(L),Le=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),qt.copy(L.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),qt.copy(Be.boundingSphere.center)),qt.applyMatrix4(L.matrixWorld).applyMatrix4(Tt)),Array.isArray(Le)){const Xe=Be.groups;for(let Je=0,Ge=Xe.length;Je<Ge;Je++){const ot=Xe[Je],Qe=Le[ot.materialIndex];Qe&&Qe.visible&&D.push(L,Be,Qe,oe,qt.z,ot)}}else Le.visible&&D.push(L,Be,Le,oe,qt.z,null)}}const De=L.children;for(let Be=0,Le=De.length;Be<Le;Be++)Cn(De[Be],q,oe,ne)}function to(L,q,oe,ne){const{opaque:re,transmissive:De,transparent:Be}=L;R.setupLightsView(oe),He===!0&&$e.setGlobalState(B.clippingPlanes,oe),ne&&E.viewport(ue.copy(ne)),re.length>0&&Gn(re,q,oe),De.length>0&&Gn(De,q,oe),Be.length>0&&Gn(Be,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function no(L,q,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[ne.id]===void 0){const Qe=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[ne.id]=new $i(1,1,{generateMipmaps:!0,type:Qe?hr:ti,minFilter:Xr,samples:Math.max(4,k.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const De=R.state.transmissionRenderTarget[ne.id],Be=ne.viewport||ue;De.setSize(Be.z*B.transmissionResolutionScale,Be.w*B.transmissionResolutionScale);const Le=B.getRenderTarget(),Xe=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(De),B.getClearColor(ke),it=B.getClearAlpha(),it<1&&B.setClearColor(16777215,.5),B.clear(),Lt&&Ze.render(oe);const Ge=B.toneMapping;B.toneMapping=Wi;const ot=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),R.setupLightsView(ne),He===!0&&$e.setGlobalState(B.clippingPlanes,ne),Gn(L,oe,ne),ce.updateMultisampleRenderTarget(De),ce.updateRenderTargetMipmap(De),At.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,Yt=q.length;Et<Yt;Et++){const $t=q[Et],{object:Ot,geometry:rn,material:Oe,group:sn}=$t;if(Oe.side===Ei&&Ot.layers.test(ne.layers)){const mt=Oe.side;Oe.side=Vn,Oe.needsUpdate=!0,io(Ot,oe,ne,rn,Oe,sn),Oe.side=mt,Oe.needsUpdate=!0,Qe=!0}}Qe===!0&&(ce.updateMultisampleRenderTarget(De),ce.updateRenderTargetMipmap(De))}B.setRenderTarget(Le,Xe,Je),B.setClearColor(ke,it),ot!==void 0&&(ne.viewport=ot),B.toneMapping=Ge}function Gn(L,q,oe){const ne=q.isScene===!0?q.overrideMaterial:null;for(let re=0,De=L.length;re<De;re++){const Be=L[re],{object:Le,geometry:Xe,group:Je}=Be;let Ge=Be.material;Ge.allowOverride===!0&&ne!==null&&(Ge=ne),Le.layers.test(oe.layers)&&io(Le,q,oe,Xe,Ge,Je)}}function io(L,q,oe,ne,re,De){L.onBeforeRender(B,q,oe,ne,re,De),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(B,q,oe,ne,L,De),re.transparent===!0&&re.side===Ei&&re.forceSinglePass===!1?(re.side=Vn,re.needsUpdate=!0,B.renderBufferDirect(oe,q,ne,re,L,De),re.side=Ir,re.needsUpdate=!0,B.renderBufferDirect(oe,q,ne,re,L,De),re.side=Ei):B.renderBufferDirect(oe,q,ne,re,L,De),L.onAfterRender(B,q,oe,ne,re,De)}function Nr(L,q,oe){q.isScene!==!0&&(q=Dt);const ne=se.get(L),re=R.state.lights,De=R.state.shadowsArray,Be=re.state.version,Le=Me.getParameters(L,re.state,De,q,oe,R.state.lightProbeGridArray),Xe=Me.getProgramCacheKey(Le);let Je=ne.programs;ne.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const Ge=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ne.envMap=be.get(L.envMap||ne.environment,Ge),ne.envMapRotation=ne.environment!==null&&L.envMap===null?q.environmentRotation:L.envMapRotation,Je===void 0&&(L.addEventListener("dispose",Yn),Je=new Map,ne.programs=Je);let ot=Je.get(Xe);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===Be)return ro(L,Le),ot}else Le.uniforms=Me.getUniforms(L),z!==null&&L.isNodeMaterial&&z.build(L,oe,Le),L.onBeforeCompile(Le,B),ot=Me.acquireProgram(Le,Xe),Je.set(Xe,ot),ne.uniforms=Le.uniforms;const Qe=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=$e.uniform),ro(L,Le),ne.needsLights=Mc(L),ne.lightsStateVersion=Be,ne.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.lightProbeGrid=R.state.lightProbeGridArray.length>0,ne.currentProgram=ot,ne.uniformsList=null,ot}function Ji(L){if(L.uniformsList===null){const q=L.currentProgram.getUniforms();L.uniformsList=sl.seqWithValue(q.seq,L.uniforms)}return L.uniformsList}function ro(L,q){const oe=se.get(L);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ia(L,q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;M.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ne=L.length;oe<ne;oe++){const re=L[oe];if(re.texture!==null&&re.boundingBox.containsPoint(M))return re}return null}function xr(L,q,oe,ne,re){q.isScene!==!0&&(q=Dt),ce.resetTextureUnits();const De=q.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,Le=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:yt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Je=be.get(ne.envMap||Be,Xe),Ge=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!oe.morphAttributes.position,Et=!!oe.morphAttributes.normal,Yt=!!oe.morphAttributes.color;let $t=Wi;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=B.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,rn=Ot!==void 0?Ot.length:0,Oe=se.get(ne),sn=R.state.lights;if(He===!0&&(pt===!0||L!==te)){const bt=L===te&&ne.id===Z;$e.setState(ne,L,bt)}let mt=!1;ne.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==sn.state.version||Oe.outputColorSpace!==Le||re.isBatchedMesh&&Oe.batching===!1||!re.isBatchedMesh&&Oe.batching===!0||re.isBatchedMesh&&Oe.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Oe.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Oe.instancing===!1||!re.isInstancedMesh&&Oe.instancing===!0||re.isSkinnedMesh&&Oe.skinning===!1||!re.isSkinnedMesh&&Oe.skinning===!0||re.isInstancedMesh&&Oe.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Oe.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Oe.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Oe.instancingMorph===!1&&re.morphTexture!==null||Oe.envMap!==Je||ne.fog===!0&&Oe.fog!==De||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==$e.numPlanes||Oe.numIntersection!==$e.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==ot||Oe.morphTargets!==Qe||Oe.morphNormals!==Et||Oe.morphColors!==Yt||Oe.toneMapping!==$t||Oe.morphTargetsCount!==rn||!!Oe.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,Oe.__version=ne.version);let Wn=Oe.currentProgram;mt===!0&&(Wn=Nr(ne,q,re),z&&ne.isNodeMaterial&&z.onUpdateProgram(ne,Wn,Oe));let ii=!1,Ii=!1,mn=!1;const _t=Wn.getUniforms(),Ct=Oe.uniforms;if(E.useProgram(Wn.program)&&(ii=!0,Ii=!0,mn=!0),ne.id!==Z&&(Z=ne.id,Ii=!0),Oe.needsLights){const bt=ia(R.state.lightProbeGridArray,re);Oe.lightProbeGrid!==bt&&(Oe.lightProbeGrid=bt,Ii=!0)}if(ii||te!==L){E.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),_t.setValue(Y,"projectionMatrix",L.projectionMatrix),_t.setValue(Y,"viewMatrix",L.matrixWorldInverse);const In=_t.map.cameraPosition;In!==void 0&&In.setValue(Y,zt.setFromMatrixPosition(L.matrixWorld)),k.logarithmicDepthBuffer&&_t.setValue(Y,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&_t.setValue(Y,"isOrthographic",L.isOrthographicCamera===!0),te!==L&&(te=L,Ii=!0,mn=!0)}if(Oe.needsLights&&(sn.state.directionalShadowMap.length>0&&_t.setValue(Y,"directionalShadowMap",sn.state.directionalShadowMap,ce),sn.state.spotShadowMap.length>0&&_t.setValue(Y,"spotShadowMap",sn.state.spotShadowMap,ce),sn.state.pointShadowMap.length>0&&_t.setValue(Y,"pointShadowMap",sn.state.pointShadowMap,ce)),re.isSkinnedMesh){_t.setOptional(Y,re,"bindMatrix"),_t.setOptional(Y,re,"bindMatrixInverse");const bt=re.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),_t.setValue(Y,"boneTexture",bt.boneTexture,ce))}re.isBatchedMesh&&(_t.setOptional(Y,re,"batchingTexture"),_t.setValue(Y,"batchingTexture",re._matricesTexture,ce),_t.setOptional(Y,re,"batchingIdTexture"),_t.setValue(Y,"batchingIdTexture",re._indirectTexture,ce),_t.setOptional(Y,re,"batchingColorTexture"),re._colorsTexture!==null&&_t.setValue(Y,"batchingColorTexture",re._colorsTexture,ce));const Pn=oe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&W.update(re,oe,Wn),(Ii||Oe.receiveShadow!==re.receiveShadow)&&(Oe.receiveShadow=re.receiveShadow,_t.setValue(Y,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Ct.envMapIntensity.value=q.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Eb()),Ii){if(_t.setValue(Y,"toneMappingExposure",B.toneMappingExposure),Oe.needsLights&&mi(Ct,mn),De&&ne.fog===!0&&qe.refreshFogUniforms(Ct,De),qe.refreshMaterialUniforms(Ct,ne,ve,we,R.state.transmissionRenderTarget[L.id]),Oe.needsLights&&Oe.lightProbeGrid){const bt=Oe.lightProbeGrid;Ct.probesSH.value=bt.texture,Ct.probesMin.value.copy(bt.boundingBox.min),Ct.probesMax.value.copy(bt.boundingBox.max),Ct.probesResolution.value.copy(bt.resolution)}sl.upload(Y,Ji(Oe),Ct,ce)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(sl.upload(Y,Ji(Oe),Ct,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&_t.setValue(Y,"center",re.center),_t.setValue(Y,"modelViewMatrix",re.modelViewMatrix),_t.setValue(Y,"normalMatrix",re.normalMatrix),_t.setValue(Y,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const bt=ne.uniformsGroups;for(let In=0,gi=bt.length;In<gi;In++){const C=bt[In];xe.update(C,Wn),xe.bind(C,Wn)}}return Wn}function mi(L,q){L.ambientLightColor.needsUpdate=q,L.lightProbe.needsUpdate=q,L.directionalLights.needsUpdate=q,L.directionalLightShadows.needsUpdate=q,L.pointLights.needsUpdate=q,L.pointLightShadows.needsUpdate=q,L.spotLights.needsUpdate=q,L.spotLightShadows.needsUpdate=q,L.rectAreaLights.needsUpdate=q,L.hemisphereLights.needsUpdate=q}function Mc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(L,q,oe){const ne=se.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(L.texture).__webglTexture=q,se.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,q){const oe=se.get(L);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(L,q=0,oe=0){G=L,N=q,F=oe;let ne=null,re=!1,De=!1;if(L){const Le=se.get(L);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Le.__webglFramebuffer),ue.copy(L.viewport),_e.copy(L.scissor),Fe=L.scissorTest,E.viewport(ue),E.scissor(_e),E.setScissorTest(Fe),Z=-1;return}else if(Le.__webglFramebuffer===void 0)ce.setupRenderTarget(L);else if(Le.__hasExternalTextures)ce.rebindTextures(L,se.get(L.texture).__webglTexture,se.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ge=L.depthTexture;if(Le.__boundDepthTexture!==Ge){if(Ge!==null&&se.has(Ge)&&(L.width!==Ge.image.width||L.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(L)}}const Xe=L.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const Je=se.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ne=Je[q][oe]:ne=Je[q],re=!0):L.samples>0&&ce.useMultisampledRTT(L)===!1?ne=se.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?ne=Je[oe]:ne=Je,ue.copy(L.viewport),_e.copy(L.scissor),Fe=L.scissorTest}else ue.copy(tt).multiplyScalar(ve).floor(),_e.copy(Ke).multiplyScalar(ve).floor(),Fe=nt;if(oe!==0&&(ne=I),E.bindFramebuffer(Y.FRAMEBUFFER,ne)&&E.drawBuffers(L,ne),E.viewport(ue),E.scissor(_e),E.setScissorTest(Fe),re){const Le=se.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,oe)}else if(De){const Le=q;for(let Xe=0;Xe<L.textures.length;Xe++){const Je=se.get(L.textures[Xe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,oe,Le)}}else if(L!==null&&oe!==0){const Le=se.get(L.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Le.__webglTexture,oe)}Z=-1},this.readRenderTargetPixels=function(L,q,oe,ne,re,De,Be,Le=0){if(!(L&&L.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=se.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const Je=L.textures[Le],Ge=Je.format,ot=Je.type;if(L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!k.textureFormatReadable(Ge)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(ot)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=L.width-ne&&oe>=0&&oe<=L.height-re&&Y.readPixels(q,oe,ne,re,Re.convert(Ge),Re.convert(ot),De)}finally{const Je=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,q,oe,ne,re,De,Be,Le=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=se.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(q>=0&&q<=L.width-ne&&oe>=0&&oe<=L.height-re){E.bindFramebuffer(Y.FRAMEBUFFER,Xe);const Je=L.textures[Le],Ge=Je.format,ot=Je.type;if(L.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Le),!k.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,De.byteLength,Y.STREAM_READ),Y.readPixels(q,oe,ne,re,Re.convert(Ge),Re.convert(ot),0);const Et=G!==null?se.get(G).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Et);const Yt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await yx(Y,Yt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,De),Y.deleteBuffer(Qe),Y.deleteSync(Yt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,q=null,oe=0){const ne=Math.pow(2,-oe),re=Math.floor(L.image.width*ne),De=Math.floor(L.image.height*ne),Be=q!==null?q.x:0,Le=q!==null?q.y:0;ce.setTexture2D(L,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,Be,Le,re,De),E.unbindTexture()},this.copyTextureToTexture=function(L,q,oe=null,ne=null,re=0,De=0){let Be,Le,Xe,Je,Ge,ot,Qe,Et,Yt;const $t=L.isCompressedTexture?L.mipmaps[De]:L.image;if(oe!==null)Be=oe.max.x-oe.min.x,Le=oe.max.y-oe.min.y,Xe=oe.isBox3?oe.max.z-oe.min.z:1,Je=oe.min.x,Ge=oe.min.y,ot=oe.isBox3?oe.min.z:0;else{const Ct=Math.pow(2,-re);Be=Math.floor($t.width*Ct),Le=Math.floor($t.height*Ct),L.isDataArrayTexture?Xe=$t.depth:L.isData3DTexture?Xe=Math.floor($t.depth*Ct):Xe=1,Je=0,Ge=0,ot=0}ne!==null?(Qe=ne.x,Et=ne.y,Yt=ne.z):(Qe=0,Et=0,Yt=0);const Ot=Re.convert(q.format),rn=Re.convert(q.type);let Oe;q.isData3DTexture?(ce.setTexture3D(q,0),Oe=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ce.setTexture2DArray(q,0),Oe=Y.TEXTURE_2D_ARRAY):(ce.setTexture2D(q,0),Oe=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const sn=E.getParameter(Y.UNPACK_ROW_LENGTH),mt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ii=E.getParameter(Y.UNPACK_SKIP_ROWS),Ii=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Ge),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,ot);const mn=L.isDataArrayTexture||L.isData3DTexture,_t=q.isDataArrayTexture||q.isData3DTexture;if(L.isDepthTexture){const Ct=se.get(L),Pn=se.get(q),bt=se.get(Ct.__renderTarget),In=se.get(Pn.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,bt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let gi=0;gi<Xe;gi++)mn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(L).__webglTexture,re,ot+gi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(q).__webglTexture,De,Yt+gi)),Y.blitFramebuffer(Je,Ge,Be,Le,Qe,Et,Be,Le,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(re!==0||L.isRenderTargetTexture||se.has(L)){const Ct=se.get(L),Pn=se.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,H),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,A);for(let bt=0;bt<Xe;bt++)mn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ct.__webglTexture,re,ot+bt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ct.__webglTexture,re),_t?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Pn.__webglTexture,De,Yt+bt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Pn.__webglTexture,De),re!==0?Y.blitFramebuffer(Je,Ge,Be,Le,Qe,Et,Be,Le,Y.COLOR_BUFFER_BIT,Y.NEAREST):_t?Y.copyTexSubImage3D(Oe,De,Qe,Et,Yt+bt,Je,Ge,Be,Le):Y.copyTexSubImage2D(Oe,De,Qe,Et,Je,Ge,Be,Le);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else _t?L.isDataTexture||L.isData3DTexture?Y.texSubImage3D(Oe,De,Qe,Et,Yt,Be,Le,Xe,Ot,rn,$t.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Oe,De,Qe,Et,Yt,Be,Le,Xe,Ot,$t.data):Y.texSubImage3D(Oe,De,Qe,Et,Yt,Be,Le,Xe,Ot,rn,$t):L.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,De,Qe,Et,Be,Le,Ot,rn,$t.data):L.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,De,Qe,Et,$t.width,$t.height,Ot,$t.data):Y.texSubImage2D(Y.TEXTURE_2D,De,Qe,Et,Be,Le,Ot,rn,$t);E.pixelStorei(Y.UNPACK_ROW_LENGTH,sn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,mt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ii),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ii),De===0&&q.generateMipmaps&&Y.generateMipmap(Oe),E.unbindTexture()},this.initRenderTarget=function(L){se.get(L).__webglFramebuffer===void 0&&ce.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?ce.setTextureCube(L,0):L.isData3DTexture?ce.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?ce.setTexture2DArray(L,0):ce.setTexture2D(L,0),E.unbindTexture()},this.resetState=function(){N=0,F=0,G=null,E.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const Eu=100,X0=6371,q0=1800,bu={relaxed:{name:"Relaxed",worldSpeedScale:1200},normal:{name:"Normal",worldSpeedScale:1800},fast:{name:"Fast",worldSpeedScale:2700}},zo=400,wh=1600,wb=400,Tb=45,Ab=40,Rb=60,Cb=500,Pb=3,Ib=1.5,Db=4,Qd="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",ep=20,Lb=1,Nb=6,Ob=120,Ub=700,Th=2,Fb={kids:{continent:10,compass:20,outline:35},normal:{continent:15,compass:30,outline:45},expert:{continent:20,compass:-1,outline:40}};function Bb(n,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties={},i.geometry=n,i}function zb(n,e,t={}){if(!n)throw new Error("coordinates is required");if(!Array.isArray(n))throw new Error("coordinates must be an Array");if(n.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!tp(n[0])||!tp(n[1]))throw new Error("coordinates must contain numbers");return Bb({type:"Point",coordinates:n},e,t)}function tp(n){return!isNaN(n)&&n!==null&&!Array.isArray(n)}function Y0(n,e,t){if(n!==null)for(var i,r,s,o,a,c,l,h=0,f=0,u,p=n.type,g=p==="FeatureCollection",y=p==="Feature",_=g?n.features.length:1,x=0;x<_;x++){l=g?n.features[x].geometry:y?n.geometry:n,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1;for(var T=0;T<a;T++){var P=0,M=0;if(o=u?l.geometries[T]:l,o!==null){c=o.coordinates;var D=o.type;switch(h=0,D){case null:break;case"Point":if(e(c,f,x,P,M)===!1)return!1;f++,P++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],f,x,P,M)===!1)return!1;f++,D==="MultiPoint"&&P++}D==="LineString"&&P++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-h;r++){if(e(c[i][r],f,x,P,M)===!1)return!1;f++}D==="MultiLineString"&&P++,D==="Polygon"&&M++}D==="Polygon"&&P++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(M=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-h;s++){if(e(c[i][r][s],f,x,P,M)===!1)return!1;f++}M++}P++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(Y0(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function kb(n,e={}){if(n.bbox!=null&&e.recompute!==!0)return n.bbox;const t=[1/0,1/0,-1/0,-1/0];return Y0(n,i=>{t[0]>i[0]&&(t[0]=i[0]),t[1]>i[1]&&(t[1]=i[1]),t[2]<i[0]&&(t[2]=i[0]),t[3]<i[1]&&(t[3]=i[1])}),t}var Vb=kb;const cr=11102230246251565e-32,En=134217729,Hb=(3+8*cr)*cr;function rf(n,e,t,i,r){let s,o,a,c,l=e[0],h=i[0],f=0,u=0;h>l==h>-l?(s=l,l=e[++f]):(s=h,h=i[++u]);let p=0;if(f<n&&u<t)for(h>l==h>-l?(o=l+s,a=s-(o-l),l=e[++f]):(o=h+s,a=s-(o-h),h=i[++u]),s=o,a!==0&&(r[p++]=a);f<n&&u<t;)h>l==h>-l?(o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f]):(o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u]),s=o,a!==0&&(r[p++]=a);for(;f<n;)o=s+l,c=o-s,a=s-(o-c)+(l-c),l=e[++f],s=o,a!==0&&(r[p++]=a);for(;u<t;)o=s+h,c=o-s,a=s-(o-c)+(h-c),h=i[++u],s=o,a!==0&&(r[p++]=a);return(s!==0||p===0)&&(r[p++]=s),p}function Gb(n,e){let t=e[0];for(let i=1;i<n;i++)t+=e[i];return t}function jo(n){return new Float64Array(n)}const Wb=(3+16*cr)*cr,$b=(2+12*cr)*cr,Xb=(9+64*cr)*cr*cr,As=jo(4),np=jo(8),ip=jo(12),rp=jo(16),Nn=jo(4);function qb(n,e,t,i,r,s,o){let a,c,l,h,f,u,p,g,y,_,x,T,P,M,D,R,O,S;const w=n-r,B=t-r,U=e-s,z=i-s;M=w*z,u=En*w,p=u-(u-w),g=w-p,u=En*z,y=u-(u-z),_=z-y,D=g*_-(M-p*y-g*y-p*_),R=U*B,u=En*U,p=u-(u-U),g=U-p,u=En*B,y=u-(u-B),_=B-y,O=g*_-(R-p*y-g*y-p*_),x=D-O,f=D-x,As[0]=D-(x+f)+(f-O),T=M+x,f=T-M,P=M-(T-f)+(x-f),x=P-R,f=P-x,As[1]=P-(x+f)+(f-R),S=T+x,f=S-T,As[2]=T-(S-f)+(x-f),As[3]=S;let I=Gb(4,As),H=$b*o;if(I>=H||-I>=H||(f=n-w,a=n-(w+f)+(f-r),f=t-B,l=t-(B+f)+(f-r),f=e-U,c=e-(U+f)+(f-s),f=i-z,h=i-(z+f)+(f-s),a===0&&c===0&&l===0&&h===0)||(H=Xb*o+Hb*Math.abs(I),I+=w*h+z*a-(U*l+B*c),I>=H||-I>=H))return I;M=a*z,u=En*a,p=u-(u-a),g=a-p,u=En*z,y=u-(u-z),_=z-y,D=g*_-(M-p*y-g*y-p*_),R=c*B,u=En*c,p=u-(u-c),g=c-p,u=En*B,y=u-(u-B),_=B-y,O=g*_-(R-p*y-g*y-p*_),x=D-O,f=D-x,Nn[0]=D-(x+f)+(f-O),T=M+x,f=T-M,P=M-(T-f)+(x-f),x=P-R,f=P-x,Nn[1]=P-(x+f)+(f-R),S=T+x,f=S-T,Nn[2]=T-(S-f)+(x-f),Nn[3]=S;const A=rf(4,As,4,Nn,np);M=w*h,u=En*w,p=u-(u-w),g=w-p,u=En*h,y=u-(u-h),_=h-y,D=g*_-(M-p*y-g*y-p*_),R=U*l,u=En*U,p=u-(u-U),g=U-p,u=En*l,y=u-(u-l),_=l-y,O=g*_-(R-p*y-g*y-p*_),x=D-O,f=D-x,Nn[0]=D-(x+f)+(f-O),T=M+x,f=T-M,P=M-(T-f)+(x-f),x=P-R,f=P-x,Nn[1]=P-(x+f)+(f-R),S=T+x,f=S-T,Nn[2]=T-(S-f)+(x-f),Nn[3]=S;const N=rf(A,np,4,Nn,ip);M=a*h,u=En*a,p=u-(u-a),g=a-p,u=En*h,y=u-(u-h),_=h-y,D=g*_-(M-p*y-g*y-p*_),R=c*l,u=En*c,p=u-(u-c),g=c-p,u=En*l,y=u-(u-l),_=l-y,O=g*_-(R-p*y-g*y-p*_),x=D-O,f=D-x,Nn[0]=D-(x+f)+(f-O),T=M+x,f=T-M,P=M-(T-f)+(x-f),x=P-R,f=P-x,Nn[1]=P-(x+f)+(f-R),S=T+x,f=S-T,Nn[2]=T-(S-f)+(x-f),Nn[3]=S;const F=rf(N,ip,4,Nn,rp);return rp[F-1]}function Ao(n,e,t,i,r,s){const o=(e-s)*(t-r),a=(n-r)*(i-s),c=o-a,l=Math.abs(o+a);return Math.abs(c)>=Wb*l?c:-qb(n,e,t,i,r,s,l)}function Yb(n,e){var t,i,r=0,s,o,a,c,l,h,f,u=n[0],p=n[1],g=e.length;for(t=0;t<g;t++){i=0;var y=e[t],_=y.length-1;if(h=y[0],h[0]!==y[_][0]&&h[1]!==y[_][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-u,a=h[1]-p,i;i<_;i++){if(f=y[i+1],c=f[0]-u,l=f[1]-p,a===0&&l===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(l>=0&&a<=0||l<=0&&a>=0){if(s=Ao(o,c,a,l,0,0),s===0)return 0;(s>0&&l>0&&a<=0||s<0&&l<=0&&a>0)&&r++}h=f,a=l,o=c}}return r%2!==0}function Kb(n){if(!n)throw new Error("coord is required");if(!Array.isArray(n)){if(n.type==="Feature"&&n.geometry!==null&&n.geometry.type==="Point")return[...n.geometry.coordinates];if(n.type==="Point")return[...n.coordinates]}if(Array.isArray(n)&&n.length>=2&&!Array.isArray(n[0])&&!Array.isArray(n[1]))return[...n];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Zb(n){return n.type==="Feature"?n.geometry:n}function Jb(n,e,t={}){if(!n)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=Kb(n),r=Zb(e),s=r.type,o=e.bbox;let a=r.coordinates;if(o&&jb(i,o)===!1)return!1;s==="Polygon"&&(a=[a]);let c=!1;for(var l=0;l<a.length;++l){const h=Yb(i,a[l]);if(h===0)return!t.ignoreBoundary;h&&(c=!0)}return c}function jb(n,e){return e[0]<=n[0]&&e[1]<=n[1]&&e[2]>=n[0]&&e[3]>=n[1]}var K0=Jb;function Qb(n){const e=n.features.map(t=>({id:t.properties.id,box:Vb(t),feature:t}));return{findCountryAt(t,i){const r=zb([i,t]);for(const{id:s,box:o,feature:a}of e)if(!(i<o[0]||i>o[2]||t<o[1]||t>o[3])&&K0(r,a))return s;return null}}}function e1(n){let e=0,t=0;for(let r=0;r<n.length-1;r++){const s=n[r],o=n[r+1];e+=s[0]*o[1]-o[0]*s[1],t+=s[1]}const i=t/Math.max(1,n.length-1);return Math.abs(e)*Math.cos(i*Math.PI/180)}function t1(n){const e=n.type==="Polygon"?[n.coordinates]:n.coordinates;let t=null,i=-1;for(const c of e){const l=c[0];if(!l)continue;const h=e1(l);h>i&&(i=h,t=l)}if(!t)throw new Error("geometry has no rings");let r=1/0,s=-1/0,o=1/0,a=-1/0;for(const c of t)r=Math.min(r,c[0]),s=Math.max(s,c[0]),o=Math.min(o,c[1]),a=Math.max(a,c[1]);return{lat:(o+a)/2,lon:(r+s)/2,widthDeg:s-r}}const $r=Math.PI/180;function n1(n){return(n+540)%360-180}function hc(n,e,t,i){const r=i/X0,s=t*$r,o=n*$r,a=e*$r,c=Math.sin(o)*Math.cos(r)+Math.cos(o)*Math.sin(r)*Math.cos(s),l=Math.asin(c),h=a+Math.atan2(Math.sin(s)*Math.sin(r)*Math.cos(o),Math.cos(r)-Math.sin(o)*c);return{lat:l/$r,lon:n1(h/$r)}}function ui(n,e,t){const i=Eu*(1+t/X0),r=n*$r,s=e*$r;return{x:i*Math.cos(r)*Math.sin(s),y:i*Math.sin(r),z:i*Math.cos(r)*Math.cos(s)}}const go=(n,e,t)=>Math.min(t,Math.max(e,n)),Ah={speedScale:1,turnScale:1,climbScale:1},Ps={seaplane:{name:"Seaplane",blurb:"Balanced all-rounder",emoji:"🛩️",tuning:Ah},stunt:{name:"Stunt Plane",blurb:"Nippy turns, lower top speed",emoji:"🎪",tuning:{speedScale:.9,turnScale:1.3,climbScale:1.15}},jet:{name:"Jet",blurb:"Fast in a straight line, wide turns",emoji:"🚀",tuning:{speedScale:1.2,turnScale:.75,climbScale:1}},lifter:{name:"Cargo Lifter",blurb:"Steady climber, a little sluggish",emoji:"📦",tuning:{speedScale:.95,turnScale:.9,climbScale:1.25}}};function i1(){return{lat:48.8566,lon:2.3522,altKm:200,headingDeg:270,speedKmh:800}}function r1(n,e,t,i=Ah,r=q0){const s=go(e.throttle,-1,1),o=go(e.turn,-1,1),a=go(e.pitch,-1,1),c=go(n.speedKmh+s*wb*t,zo,wh*i.speedScale),l=(n.headingDeg+o*Tb*i.turnScale*t+360)%360,h=go(n.altKm+a*Ab*i.climbScale*t,Rb,Cb),f=c/3600*r*t,u=hc(n.lat,n.lon,l,f);return{lat:u.lat,lon:u.lon,altKm:h,headingDeg:l,speedKmh:c}}const Rr=Math.PI/180;function Ml(n,e,t,i){const r=n*Rr,s=t*Rr,o=(i-e)*Rr;return Math.acos(Math.min(1,Math.max(-1,Math.sin(r)*Math.sin(s)+Math.cos(r)*Math.cos(s)*Math.cos(o))))/Rr}function s1(n,e,t){const i=(e-n+540)%360-180;return(n+i*t+360)%360}function Z0(n,e,t,i){const r=n*Rr,s=t*Rr,o=(i-e)*Rr,a=Math.sin(o)*Math.cos(s),c=Math.cos(r)*Math.sin(s)-Math.sin(r)*Math.cos(s)*Math.cos(o);return(Math.atan2(a,c)/Rr+360)%360}function o1(n=Math.random){let e="";for(let t=0;t<Db;t++){const i=Math.floor(n()*Qd.length);e+=Qd[i]??"A"}return e}function wu(n,e){const t=Fb[e],i=r=>r>=0&&n>=r;return{continent:i(t.continent),compass:i(t.compass),outline:i(t.outline)}}function J0(n,e,t,i){if(!(Ml(n.lat,n.lon,e.zone.lat,e.zone.lon)<=Pb))return{complete:!1,dwellS:0,inZone:!1,requirementBlocked:!1};switch(e.type){case"refuel":{const s=t+i;return{complete:s>=Th,dwellS:s,inZone:!0,requirementBlocked:!1}}case"delivery":{const s=n.altKm<=Ob;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}case"vip":{const s=n.speedKmh<=Ub;return{complete:s,dwellS:0,inZone:!0,requirementBlocked:!s}}default:return{complete:!0,dwellS:0,inZone:!0,requirementBlocked:!1}}}function a1(n){let e=n>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const l1={kids:["easy"],normal:["easy","normal"],expert:["easy","normal","hard"]},c1=["refuel","photo","riddle","vip"];function Pa(n,e){const t=n[Math.floor(e()*n.length)];if(t===void 0)throw new Error("pick() from empty list");return t}function f1(n,e,t){switch(n){case"pickup":return{label:`Pick up cargo in ${e.name}`,sublabel:"Fly through the beacon to skyhook the crate"};case"refuel":return{label:`Refuel in ${e.name}`,sublabel:"Hold inside the zone for 2 seconds to skim the fuel strip"};case"delivery":return{label:`Deliver the cargo to ${e.name}`,sublabel:"Fly LOW through the beacon to parachute-drop the crate"};case"vip":return{label:`Fly the VIP to ${e.name}`,sublabel:"Arrive gently — under 700 km/h — or they complain"};case"riddle":return{label:`Fly to ${t??"the mystery country"}`,sublabel:"Solve the riddle — which country is it?"};case"photo":return{label:"",sublabel:""}}}function u1(n,e,t,i){const r=Math.min(Nb,Math.max(Lb,i.legCount)),s=a1(i.seed),o=l1[i.difficulty],a=Object.values(n).filter(g=>g.playable&&o.includes(g.tier)).sort((g,y)=>g.id.localeCompare(y.id));if(a.length<r)throw new Error("Not enough countries for contract");const c=[];for(let g=0;g<r;g++)g===0?c.push("pickup"):g===r-1?c.push("delivery"):c.push(Pa(c1,s));const l=new Set,h=new Set,f=[];let u=null,p=null;for(const g of c){let y=g,_=null;if(y==="photo"){const D=e.filter(R=>!h.has(R.name)&&n[R.countryId]!==void 0&&!l.has(R.countryId)&&(u===null||Ml(u.lat,u.lon,R.lat,R.lon)>=ep));D.length>0?(_=Pa(D,s),h.add(_.name)):y="riddle"}let x;if(_){const D=n[_.countryId];if(!D)throw new Error(`Landmark country missing: ${_.countryId}`);x=D}else{const D=a.filter(w=>!l.has(w.id)),R=u?D.filter(w=>Ml(u.lat,u.lon,w.capital.lat,w.capital.lon)>=ep):D,O=R.length>0?R:D,S=O.filter(w=>w.continent!==p);x=Pa(S.length>0?S:O,s)}l.add(x.id);const T=_?{lat:_.lat,lon:_.lon}:{lat:x.capital.lat,lon:x.capital.lon};let P,M;if(y==="photo"&&_)P=`Photograph ${_.name}`,M=`Fly through the camera ring in ${x.name}`;else{const D=y==="riddle"?(t[x.id]?Pa([...t[x.id]],s):null)??`the country whose capital is ${x.capital.name}`:null;({label:P,sublabel:M}=f1(y,x,D))}f.push({type:y,countryId:x.id,zone:T,label:P,sublabel:M}),u=T,p=x.continent}return{seed:i.seed,difficulty:i.difficulty,legs:f}}function ol(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function h1(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function j0(n){let e,t,i;n.length!==2?(e=ol,t=(a,c)=>ol(n(a),c),i=(a,c)=>n(a)-c):(e=n===ol||n===h1?n:d1,t=n,i=n);function r(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(a,c,l=0,h=a.length){if(l<h){if(e(c,c)!==0)return h;do{const f=l+h>>>1;t(a[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function o(a,c,l=0,h=a.length){const f=r(a,c,l,h-1);return f>l&&i(a[f-1],c)>-i(a[f],c)?f-1:f}return{left:r,center:o,right:s}}function d1(){return 0}function p1(n){return n===null?NaN:+n}const m1=j0(ol),g1=m1.right;j0(p1).center;function El(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(t===void 0?s>=s&&(t=i=s):(t>s&&(t=s),i<s&&(i=s)))}return[t,i]}class fr{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const t=this._partials;let i=0;for(let r=0;r<this._n&&r<32;r++){const s=t[r],o=e+s,a=Math.abs(e)<Math.abs(s)?e-(o-s):s-(o-e);a&&(t[i++]=a),e=o}return t[i]=e,this._n=i+1,this}valueOf(){const e=this._partials;let t=this._n,i,r,s,o=0;if(t>0){for(o=e[--t];t>0&&(i=o,r=e[--t],o=i+r,s=r-(o-i),!s););t>0&&(s<0&&e[t-1]<0||s>0&&e[t-1]>0)&&(r=s*2,i=o+r,r==i-o&&(o=i))}return o}}const _1=Math.sqrt(50),x1=Math.sqrt(10),v1=Math.sqrt(2);function bl(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),o=s>=_1?10:s>=x1?5:s>=v1?2:1;let a,c,l;return r<0?(l=Math.pow(10,-r)/o,a=Math.round(n*l),c=Math.round(e*l),a/l<n&&++a,c/l>e&&--c,l=-l):(l=Math.pow(10,r)*o,a=Math.round(n/l),c=Math.round(e/l),a*l<n&&++a,c*l>e&&--c),c<a&&.5<=t&&t<2?bl(n,e,t*2):[a,c,l]}function y1(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,s,o]=i?bl(e,n,t):bl(n,e,t);if(!(s>=r))return[];const a=s-r+1,c=new Array(a);if(i)if(o<0)for(let l=0;l<a;++l)c[l]=(s-l)/-o;else for(let l=0;l<a;++l)c[l]=(s-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(r+l)/-o;else for(let l=0;l<a;++l)c[l]=(r+l)*o;return c}function Tu(n,e,t){return e=+e,n=+n,t=+t,bl(n,e,t)[2]}function S1(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?Tu(e,n,t):Tu(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function M1(n,e){let t=0,i=0;if(e===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++t,i+=r);else{let r=-1;for(let s of n)(s=e(s,++r,n))!=null&&(s=+s)>=s&&(++t,i+=s)}if(t)return i/t}function*E1(n){for(const e of n)yield*e}function ko(n){return Array.from(E1(n))}const Vo=new Set;let Au=!1;function b1(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;Vo.size&&Vo.clear();let s=Q0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a=0,c=0,l=0;if(i&&(s=C1(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let h=a,f=c;for(let u=t;u<r;u+=t){const p=n[u],g=n[u+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Ru(s,o,a,c,l),o}function Q0(n,e,t,i,r){let s=null;if(r===H1(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ap(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ap(o/i|0,n[o],n[o+1],s);return s&&Ho(s,s.next)&&(Wo(s),s=s.next),s}function ts(n,e=n){const t=e===n;let i=n,r;do r=!1,i!==i.next&&(Vo.size===0||!Vo.has(i))&&(Ho(i,i.next)||an(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),Au=!0,Wo(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function Ru(n,e,t,i,r){r&&U1(n,t,i,r);let s=n,o=!1;for(;n.prev!==n.next;){const a=n.prev,c=n.next;if(an(a,n,c)<0&&(r?T1(n,t,i,r):w1(n))){e.push(a.i,n.i,c.i),Wo(n),n=c,s=c;continue}if(n=c,n===s){if(Au=!1,n=ts(n),Au){s=n;continue}if(!o){n=A1(n,e),s=n,o=!0;continue}R1(n,e,t,i,r);break}}}function w1(n){const e=n.prev,t=n,i=n.next,r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&!(r===g.x&&a===g.y)&&Tl(r,a,s,c,o,l,g.x,g.y)&&an(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T1(n,e,t,i){const r=n.prev,s=n,o=n.next,a=r.x,c=s.x,l=o.x,h=r.y,f=s.y,u=o.y,p=Math.min(a,c,l),g=Math.min(h,f,u),y=Math.max(a,c,l),_=Math.max(h,f,u),x=Du(p,g,e,t,i),T=Du(y,_,e,t,i);let P=n.prevZ;for(;P&&P.z>=x;){if(P.x>=p&&P.x<=y&&P.y>=g&&P.y<=_&&P!==o&&!(a===P.x&&h===P.y)&&Tl(a,h,c,f,l,u,P.x,P.y)&&an(P.prev,P,P.next)>=0)return!1;P=P.prevZ}let M=n.nextZ;for(;M&&M.z<=T;){if(M.x>=p&&M.x<=y&&M.y>=g&&M.y<=_&&M!==o&&!(a===M.x&&h===M.y)&&Tl(a,h,c,f,l,u,M.x,M.y)&&an(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function A1(n,e){let t=n,i=!1;do{const r=t.prev,s=t.next.next;ng(r,t,t.next,s,!1)&&Go(r,s)&&Go(s,r)&&(e.push(r.i,t.i,s.i),Wo(t),Wo(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?ts(t):t}function R1(n,e,t,i,r){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&z1(s,o)){let a=ig(s,o);s=ts(s,s.next),a=ts(a,a.next),Ru(s,e,t,i,r),Ru(a,e,t,i,r);return}o=o.next}s=s.next}while(s!==n)}let Cu=!1;function C1(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Q0(n,a,c,i,!1);l===l.next&&Vo.add(l),r.push(B1(l))}r.sort(P1),D1(n.length/i,e.length),tg(t,t),Cu=!0;for(let s=0;s<r.length;s++)t=I1(r[s],t);return Cu=!1,ts(t)}function P1(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function I1(n,e){const t=N1(n,e);if(!t)return e;const i=ig(t,n),r=i.next;return tg(t,r.next),ts(i,i.next),ts(t,t.next)}const eg=16;let tn=new Float64Array(0),wl=0;const Pu=[],Iu=[];function D1(n,e){const t=Math.ceil((n+2*e)/eg)+e+2;tn.length<t*4&&(tn=new Float64Array(t*4)),wl=0}function tg(n,e){let t=n;do{const i=wl++;Pu[i]=t;let r=1/0,s=1/0,o=-1/0,a=-1/0,c=0;do{const h=t.next;t.z=i,t.x<r&&(r=t.x),t.x>o&&(o=t.x),t.y<s&&(s=t.y),t.y>a&&(a=t.y),h.x<r&&(r=h.x),h.x>o&&(o=h.x),h.y<s&&(s=h.y),h.y>a&&(a=h.y),t=h}while(++c<eg&&t!==e);Iu[i]=t;const l=i*4;tn[l]=r,tn[l+1]=s,tn[l+2]=o,tn[l+3]=a}while(t!==e)}function L1(n,e){const t=n.z*4;e.x<tn[t]&&(tn[t]=e.x),e.y<tn[t+1]&&(tn[t+1]=e.y),e.x>tn[t+2]&&(tn[t+2]=e.x),e.y>tn[t+3]&&(tn[t+3]=e.y)}function sp(n){let e=Iu[n];for(;e.prev.next!==e;)e=e.next;return Iu[n]=e,e}function op(n){let e=Pu[n];for(;e.prev.next!==e;)e=e.next;return Pu[n]=e,e}function N1(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Ho(n,t))return t;for(let u=0,p=0;u<wl;u++,p+=4){if(r<tn[p+1]||r>tn[p+3]||tn[p]>i||tn[p+2]<=s)continue;const g=sp(u);t=op(u);do{if(t.prev.next===t){if(Ho(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const y=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(y<=i&&y>s&&(s=y,o=t.x<t.next.x?t:t.next,y===i))return o}}t=t.next}while(t!==g)}if(!o)return null;const a=o.x,c=o.y,l=Math.min(r,c),h=Math.max(r,c);let f=1/0;for(let u=0,p=0;u<wl;u++,p+=4){if(tn[p+2]<a||tn[p]>i||tn[p+3]<l||tn[p+1]>h)continue;const g=sp(u);t=op(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=a&&i!==t.x&&Tl(r<c?i:s,r,a,c,r<c?s:i,r,t.x,t.y)){const y=Math.abs(r-t.y)/(i-t.x);(Go(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(y<f||y===f&&(t.x>o.x||t.x===o.x&&O1(o,t)))&&(o=t,f=y)}t=t.next}while(t!==g)}return o}function O1(n,e){return an(n.prev,n,e.prev)<0&&an(e.next,n,n.next)<0}const oi=[];let _o=[],zr=new Uint32Array(0),xo=new Uint32Array(0);const vo=new Uint32Array(256);function U1(n,e,t,i){let r=n,s=0;do r.z=Du(r.x,r.y,e,t,i),oi[s++]=r,r=r.next;while(r!==n);F1(s);let o=null;for(let a=0;a<s;a++){const c=oi[a];c.prevZ=o,o&&(o.nextZ=c),o=c}o.nextZ=null}function F1(n){if(n<=32){for(let e=1;e<n;e++){const t=oi[e],i=t.z;let r=e-1;for(;r>=0&&oi[r].z>i;)oi[r+1]=oi[r],r--;oi[r+1]=t}return}zr.length<n&&(zr=new Uint32Array(n),xo=new Uint32Array(n),_o=new Array(n));for(let e=0;e<n;e++)zr[e]=oi[e].z;Ia(n,oi,zr,_o,xo,0),Ia(n,_o,xo,oi,zr,8),Ia(n,oi,zr,_o,xo,16),Ia(n,_o,xo,oi,zr,24)}function Ia(n,e,t,i,r,s){vo.fill(0);for(let a=0;a<n;a++)vo[t[a]>>>s&255]++;let o=0;for(let a=0;a<256;a++){const c=vo[a];vo[a]=o,o+=c}for(let a=0;a<n;a++){const c=t[a],l=vo[c>>>s&255]++;i[l]=e[a],r[l]=c}}function Du(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function B1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tl(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function z1(n,e){const t=Ho(n,e)&&an(n.prev,n,n.next)>0&&an(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||Go(n,e)&&Go(e,n)&&(an(n.prev,n,e.prev)!==0||an(n,e.prev,e)!==0))&&!k1(n,e)&&(t||V1(n,e))}function an(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ho(n,e){return n.x===e.x&&n.y===e.y}function ng(n,e,t,i,r=!0){const s=an(n,e,t),o=an(n,e,i),a=an(t,i,n),c=an(t,i,e);return(s>0&&o<0||s<0&&o>0)&&(a>0&&c<0||a<0&&c>0)?!0:r?!!(s===0&&Da(n,t,e)||o===0&&Da(n,i,e)||a===0&&Da(t,n,i)||c===0&&Da(t,e,i)):!1}function Da(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function k1(n,e){const t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y);let o=n;do{const a=o.next;if(o.x>i&&a.x>i||o.x<t&&a.x<t||o.y>s&&a.y>s||o.y<r&&a.y<r){o=a;continue}if(o.i!==n.i&&a.i!==n.i&&o.i!==e.i&&a.i!==e.i&&ng(o,a,n,e))return!0;o=a}while(o!==n);return!1}function Go(n,e){return an(n.prev,n,n.next)<0?an(n,e,n.next)>=0&&an(n,n.prev,e)>=0:an(n,e,n.prev)<0||an(n,n.next,e)<0}function V1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{const o=t.next;t.y>s!=o.y>s&&r<(o.x-t.x)*(s-t.y)/(o.y-t.y)+t.x&&(i=!i),t=o}while(t!==n);return i}function ig(n,e){const t=Lu(n.i,n.x,n.y),i=Lu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ap(n,e,t,i){const r=Lu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),Cu&&L1(n.prev,n.next)}function Lu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function H1(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function rg(n){const e=[],t=[],i=n[0][0].length;let r=0,s=0;for(const o of n){for(const a of o)for(let c=0;c<i;c++)e.push(a[c]);s&&(r+=s,t.push(r)),s=o.length}return{vertices:e,holes:t,dimensions:i}}const lp=Math.pow(2,-52),La=new Uint32Array(512);class $o{static from(e,t=q1,i=Y1){const r=e.length,s=new Float64Array(r*2);for(let o=0;o<r;o++){const a=e[o];s[2*o]=t(a),s[2*o+1]=i(a)}return new $o(s)}constructor(e){const t=e.length>>1;if(t>0&&typeof e[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=e;const i=Math.max(2*t-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.trianglesLen=0,this._cx=0,this._cy=0,this._hullStart=0,this.hull=this._triangles,this.triangles=this._triangles,this.halfedges=this._halfedges,this.update()}update(){const{coords:e,_hullPrev:t,_hullNext:i,_hullTri:r,_hullHash:s}=this,o=e.length>>1;let a=1/0,c=1/0,l=-1/0,h=-1/0;for(let w=0;w<o;w++){const B=e[2*w],U=e[2*w+1];B<a&&(a=B),U<c&&(c=U),B>l&&(l=B),U>h&&(h=U),this._ids[w]=w}const f=(a+l)/2,u=(c+h)/2;let p=0,g=0,y=0;for(let w=0,B=1/0;w<o;w++){const U=sf(f,u,e[2*w],e[2*w+1]);U<B&&(p=w,B=U)}const _=e[2*p],x=e[2*p+1];for(let w=0,B=1/0;w<o;w++){if(w===p)continue;const U=sf(_,x,e[2*w],e[2*w+1]);U<B&&U>0&&(g=w,B=U)}let T=e[2*g],P=e[2*g+1],M=1/0;for(let w=0;w<o;w++){if(w===p||w===g)continue;const B=$1(_,x,T,P,e[2*w],e[2*w+1]);B<M&&(y=w,M=B)}let D=e[2*y],R=e[2*y+1];if(M===1/0){for(let U=0;U<o;U++)this._dists[U]=e[2*U]-e[0]||e[2*U+1]-e[1];Is(this._ids,this._dists,0,o-1);const w=new Uint32Array(o);let B=0;for(let U=0,z=-1/0;U<o;U++){const I=this._ids[U],H=this._dists[I];H>z&&(w[B++]=I,z=H)}this.hull=w.subarray(0,B),this.triangles=new Uint32Array(0),this.halfedges=new Int32Array(0);return}if(Ao(_,x,T,P,D,R)<0){const w=g,B=T,U=P;g=y,T=D,P=R,y=w,D=B,R=U}const O=X1(_,x,T,P,D,R);this._cx=O.x,this._cy=O.y;for(let w=0;w<o;w++)this._dists[w]=sf(e[2*w],e[2*w+1],O.x,O.y);Is(this._ids,this._dists,0,o-1),this._hullStart=p;let S=3;i[p]=t[y]=g,i[g]=t[p]=y,i[y]=t[g]=p,r[p]=0,r[g]=1,r[y]=2,s.fill(-1),s[this._hashKey(_,x)]=p,s[this._hashKey(T,P)]=g,s[this._hashKey(D,R)]=y,this.trianglesLen=0,this._addTriangle(p,g,y,-1,-1,-1);for(let w=0,B=0,U=0;w<this._ids.length;w++){const z=this._ids[w],I=e[2*z],H=e[2*z+1];if(w>0&&Math.abs(I-B)<=lp&&Math.abs(H-U)<=lp||(B=I,U=H,z===p||z===g||z===y))continue;let A=0;for(let te=0,ue=this._hashKey(I,H);te<this._hashSize&&(A=s[(ue+te)%this._hashSize],!(A!==-1&&A!==i[A]));te++);A=t[A];let N=A,F;for(;F=i[N],Ao(I,H,e[2*N],e[2*N+1],e[2*F],e[2*F+1])>=0;)if(N=F,N===A){N=-1;break}if(N===-1)continue;let G=this._addTriangle(N,z,i[N],-1,-1,r[N]);r[z]=this._legalize(G+2),r[N]=G,S++;let Z=i[N];for(;F=i[Z],Ao(I,H,e[2*Z],e[2*Z+1],e[2*F],e[2*F+1])<0;)G=this._addTriangle(Z,z,F,r[z],-1,r[Z]),r[z]=this._legalize(G+2),i[Z]=Z,S--,Z=F;if(N===A)for(;F=t[N],Ao(I,H,e[2*F],e[2*F+1],e[2*N],e[2*N+1])<0;)G=this._addTriangle(F,z,N,-1,r[N],r[F]),this._legalize(G+2),r[F]=G,i[N]=N,S--,N=F;this._hullStart=t[z]=N,i[N]=t[Z]=z,i[z]=Z,s[this._hashKey(I,H)]=z,s[this._hashKey(e[2*N],e[2*N+1])]=N}this.hull=new Uint32Array(S);for(let w=0,B=this._hullStart;w<S;w++)this.hull[w]=B,B=i[B];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(G1(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){const{_triangles:t,_halfedges:i,coords:r}=this;let s=0,o=0;for(;;){const a=i[e],c=e-e%3;if(o=c+(e+2)%3,a===-1){if(s===0)break;e=La[--s];continue}const l=a-a%3,h=c+(e+1)%3,f=l+(a+2)%3,u=t[o],p=t[e],g=t[h],y=t[f];if(W1(r[2*u],r[2*u+1],r[2*p],r[2*p+1],r[2*g],r[2*g+1],r[2*y],r[2*y+1])){t[e]=y,t[a]=u;const x=i[f];if(x===-1){let P=this._hullStart;do{if(this._hullTri[P]===f){this._hullTri[P]=e;break}P=this._hullPrev[P]}while(P!==this._hullStart)}this._link(e,x),this._link(a,i[o]),this._link(o,f);const T=l+(a+1)%3;s<La.length&&(La[s++]=T)}else{if(s===0)break;e=La[--s]}}return o}_link(e,t){this._halfedges[e]=t,t!==-1&&(this._halfedges[t]=e)}_addTriangle(e,t,i,r,s,o){const a=this.trianglesLen;return this._triangles[a]=e,this._triangles[a+1]=t,this._triangles[a+2]=i,this._link(a,r),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function G1(n,e){const t=n/(Math.abs(n)+Math.abs(e));return(e>0?3-t:1+t)/4}function sf(n,e,t,i){const r=n-t,s=e-i;return r*r+s*s}function W1(n,e,t,i,r,s,o,a){const c=n-o,l=e-a,h=t-o,f=i-a,u=r-o,p=s-a,g=c*c+l*l,y=h*h+f*f,_=u*u+p*p;return c*(f*_-y*p)-l*(h*_-y*u)+g*(h*p-f*u)<0}function $1(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=(l*h-a*f)*u,g=(o*f-c*h)*u;return p*p+g*g}function X1(n,e,t,i,r,s){const o=t-n,a=i-e,c=r-n,l=s-e,h=o*o+a*a,f=c*c+l*l,u=.5/(o*l-a*c),p=n+(l*h-a*f)*u,g=e+(o*f-c*h)*u;return{x:p,y:g}}function Is(n,e,t,i){if(i-t<=20)for(let r=t+1;r<=i;r++){const s=n[r],o=e[s];let a=r-1;for(;a>=t&&e[n[a]]>o;)n[a+1]=n[a--];n[a+1]=s}else{const r=t+i>>1;let s=t+1,o=i;yo(n,r,s),e[n[t]]>e[n[i]]&&yo(n,t,i),e[n[s]]>e[n[i]]&&yo(n,s,i),e[n[t]]>e[n[s]]&&yo(n,t,s);const a=n[s],c=e[a];for(;;){do s++;while(e[n[s]]<c);do o--;while(e[n[o]]>c);if(o<s)break;yo(n,s,o)}n[t+1]=n[o],n[o]=a,i-s+1>=o-t?(Is(n,e,s,i),Is(n,e,t,o-1)):(Is(n,e,t,o-1),Is(n,e,s,i))}}function yo(n,e,t){const i=n[e];n[e]=n[t],n[t]=i}function q1(n){return n[0]}function Y1(n){return n[1]}var It=1e-6,Al=1e-12,wt=Math.PI,hi=wt/2,Rl=wt/4,ni=wt*2,en=180/wt,ct=wt/180,Gt=Math.abs,sg=Math.atan,pi=Math.atan2,ut=Math.cos,Nu=Math.hypot,lt=Math.sin,K1=Math.sign||function(n){return n>0?1:n<0?-1:0},pr=Math.sqrt;function Z1(n){return n>1?0:n<-1?wt:Math.acos(n)}function mr(n){return n>1?hi:n<-1?-hi:Math.asin(n)}function cp(n){return(n=lt(n/2))*n}function wn(){}function Cl(n,e){n&&up.hasOwnProperty(n.type)&&up[n.type](n,e)}var fp={Feature:function(n,e){Cl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)Cl(t[i].geometry,e)}},up={Sphere:function(n,e){e.sphere()},Point:function(n,e){n=n.coordinates,e.point(n[0],n[1],n[2])},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)n=t[i],e.point(n[0],n[1],n[2])},LineString:function(n,e){Ou(n.coordinates,e,0)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)Ou(t[i],e,0)},Polygon:function(n,e){hp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)hp(t[i],e)},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)Cl(t[i],e)}};function Ou(n,e,t){var i=-1,r=n.length-t,s;for(e.lineStart();++i<r;)s=n[i],e.point(s[0],s[1],s[2]);e.lineEnd()}function hp(n,e){var t=-1,i=n.length;for(e.polygonStart();++t<i;)Ou(n[t],e,1);e.polygonEnd()}function dc(n,e){n&&fp.hasOwnProperty(n.type)?fp[n.type](n,e):Cl(n,e)}var Pl=new fr,dp=new fr,og,ag,Uu,Fu,Bu,gr={point:wn,lineStart:wn,lineEnd:wn,polygonStart:function(){Pl=new fr,gr.lineStart=J1,gr.lineEnd=j1},polygonEnd:function(){var n=+Pl;dp.add(n<0?ni+n:n),this.lineStart=this.lineEnd=this.point=wn},sphere:function(){dp.add(ni)}};function J1(){gr.point=Q1}function j1(){lg(og,ag)}function Q1(n,e){gr.point=lg,og=n,ag=e,n*=ct,e*=ct,Uu=n,Fu=ut(e=e/2+Rl),Bu=lt(e)}function lg(n,e){n*=ct,e*=ct,e=e/2+Rl;var t=n-Uu,i=t>=0?1:-1,r=i*t,s=ut(e),o=lt(e),a=Bu*o,c=Fu*s+a*ut(r),l=a*i*lt(r);Pl.add(pi(l,c)),Uu=n,Fu=s,Bu=o}function Il(n){return[pi(n[1],n[0]),mr(n[2])]}function ns(n){var e=n[0],t=n[1],i=ut(t);return[i*ut(e),i*lt(e),lt(t)]}function Na(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Gs(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function of(n,e){n[0]+=e[0],n[1]+=e[1],n[2]+=e[2]}function Oa(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Dl(n){var e=pr(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=e,n[1]/=e,n[2]/=e}var jt,Xn,Qt,ei,Hr,cg,fg,Us,No,wr,_r,ir={point:zu,lineStart:pp,lineEnd:mp,polygonStart:function(){ir.point=hg,ir.lineStart=ew,ir.lineEnd=tw,No=new fr,gr.polygonStart()},polygonEnd:function(){gr.polygonEnd(),ir.point=zu,ir.lineStart=pp,ir.lineEnd=mp,Pl<0?(jt=-(Qt=180),Xn=-(ei=90)):No>It?ei=90:No<-It&&(Xn=-90),_r[0]=jt,_r[1]=Qt},sphere:function(){jt=-(Qt=180),Xn=-(ei=90)}};function zu(n,e){wr.push(_r=[jt=n,Qt=n]),e<Xn&&(Xn=e),e>ei&&(ei=e)}function ug(n,e){var t=ns([n*ct,e*ct]);if(Us){var i=Gs(Us,t),r=[i[1],-i[0],0],s=Gs(r,i);Dl(s),s=Il(s);var o=n-Hr,a=o>0?1:-1,c=s[0]*en*a,l,h=Gt(o)>180;h^(a*Hr<c&&c<a*n)?(l=s[1]*en,l>ei&&(ei=l)):(c=(c+360)%360-180,h^(a*Hr<c&&c<a*n)?(l=-s[1]*en,l<Xn&&(Xn=l)):(e<Xn&&(Xn=e),e>ei&&(ei=e))),h?n<Hr?jn(jt,n)>jn(jt,Qt)&&(Qt=n):jn(n,Qt)>jn(jt,Qt)&&(jt=n):Qt>=jt?(n<jt&&(jt=n),n>Qt&&(Qt=n)):n>Hr?jn(jt,n)>jn(jt,Qt)&&(Qt=n):jn(n,Qt)>jn(jt,Qt)&&(jt=n)}else wr.push(_r=[jt=n,Qt=n]);e<Xn&&(Xn=e),e>ei&&(ei=e),Us=t,Hr=n}function pp(){ir.point=ug}function mp(){_r[0]=jt,_r[1]=Qt,ir.point=zu,Us=null}function hg(n,e){if(Us){var t=n-Hr;No.add(Gt(t)>180?t+(t>0?360:-360):t)}else cg=n,fg=e;gr.point(n,e),ug(n,e)}function ew(){gr.lineStart()}function tw(){hg(cg,fg),gr.lineEnd(),Gt(No)>It&&(jt=-(Qt=180)),_r[0]=jt,_r[1]=Qt,Us=null}function jn(n,e){return(e-=n)<0?e+360:e}function nw(n,e){return n[0]-e[0]}function gp(n,e){return n[0]<=n[1]?n[0]<=e&&e<=n[1]:e<n[0]||n[1]<e}function dg(n){var e,t,i,r,s,o,a;if(ei=Qt=-(jt=Xn=1/0),wr=[],dc(n,ir),t=wr.length){for(wr.sort(nw),e=1,i=wr[0],s=[i];e<t;++e)r=wr[e],gp(i,r[0])||gp(i,r[1])?(jn(i[0],r[1])>jn(i[0],i[1])&&(i[1]=r[1]),jn(r[0],i[1])>jn(i[0],i[1])&&(i[0]=r[0])):s.push(i=r);for(o=-1/0,t=s.length-1,e=0,i=s[t];e<=t;i=r,++e)r=s[e],(a=jn(i[1],r[0]))>o&&(o=a,jt=r[0],Qt=i[1])}return wr=_r=null,jt===1/0||Xn===1/0?[[NaN,NaN],[NaN,NaN]]:[[jt,Xn],[Qt,ei]]}var Ro,Ll,Nl,Ol,Ul,Fl,Bl,zl,ku,Vu,Hu,pg,mg,Fn,Bn,zn,Ri={sphere:wn,point:Rh,lineStart:_p,lineEnd:xp,polygonStart:function(){Ri.lineStart=sw,Ri.lineEnd=ow},polygonEnd:function(){Ri.lineStart=_p,Ri.lineEnd=xp}};function Rh(n,e){n*=ct,e*=ct;var t=ut(e);Qo(t*ut(n),t*lt(n),lt(e))}function Qo(n,e,t){++Ro,Nl+=(n-Nl)/Ro,Ol+=(e-Ol)/Ro,Ul+=(t-Ul)/Ro}function _p(){Ri.point=iw}function iw(n,e){n*=ct,e*=ct;var t=ut(e);Fn=t*ut(n),Bn=t*lt(n),zn=lt(e),Ri.point=rw,Qo(Fn,Bn,zn)}function rw(n,e){n*=ct,e*=ct;var t=ut(e),i=t*ut(n),r=t*lt(n),s=lt(e),o=pi(pr((o=Bn*s-zn*r)*o+(o=zn*i-Fn*s)*o+(o=Fn*r-Bn*i)*o),Fn*i+Bn*r+zn*s);Ll+=o,Fl+=o*(Fn+(Fn=i)),Bl+=o*(Bn+(Bn=r)),zl+=o*(zn+(zn=s)),Qo(Fn,Bn,zn)}function xp(){Ri.point=Rh}function sw(){Ri.point=aw}function ow(){gg(pg,mg),Ri.point=Rh}function aw(n,e){pg=n,mg=e,n*=ct,e*=ct,Ri.point=gg;var t=ut(e);Fn=t*ut(n),Bn=t*lt(n),zn=lt(e),Qo(Fn,Bn,zn)}function gg(n,e){n*=ct,e*=ct;var t=ut(e),i=t*ut(n),r=t*lt(n),s=lt(e),o=Bn*s-zn*r,a=zn*i-Fn*s,c=Fn*r-Bn*i,l=Nu(o,a,c),h=mr(l),f=l&&-h/l;ku.add(f*o),Vu.add(f*a),Hu.add(f*c),Ll+=h,Fl+=h*(Fn+(Fn=i)),Bl+=h*(Bn+(Bn=r)),zl+=h*(zn+(zn=s)),Qo(Fn,Bn,zn)}function vp(n){Ro=Ll=Nl=Ol=Ul=Fl=Bl=zl=0,ku=new fr,Vu=new fr,Hu=new fr,dc(n,Ri);var e=+ku,t=+Vu,i=+Hu,r=Nu(e,t,i);return r<Al&&(e=Fl,t=Bl,i=zl,Ll<It&&(e=Nl,t=Ol,i=Ul),r=Nu(e,t,i),r<Al)?[NaN,NaN]:[pi(t,e)*en,mr(i/r)*en]}function Gu(n,e){function t(i,r){return i=n(i,r),e(i[0],i[1])}return n.invert&&e.invert&&(t.invert=function(i,r){return i=e.invert(i,r),i&&n.invert(i[0],i[1])}),t}function Wu(n,e){return Gt(n)>wt&&(n-=Math.round(n/ni)*ni),[n,e]}Wu.invert=Wu;function _g(n,e,t){return(n%=ni)?e||t?Gu(Sp(n),Mp(e,t)):Sp(n):e||t?Mp(e,t):Wu}function yp(n){return function(e,t){return e+=n,Gt(e)>wt&&(e-=Math.round(e/ni)*ni),[e,t]}}function Sp(n){var e=yp(n);return e.invert=yp(-n),e}function Mp(n,e){var t=ut(n),i=lt(n),r=ut(e),s=lt(e);function o(a,c){var l=ut(c),h=ut(a)*l,f=lt(a)*l,u=lt(c),p=u*t+h*i;return[pi(f*r-p*s,h*t-u*i),mr(p*r+f*s)]}return o.invert=function(a,c){var l=ut(c),h=ut(a)*l,f=lt(a)*l,u=lt(c),p=u*r-f*s;return[pi(f*r+u*s,h*t+p*i),mr(p*t-h*i)]},o}function lw(n){n=_g(n[0]*ct,n[1]*ct,n.length>2?n[2]*ct:0);function e(t){return t=n(t[0]*ct,t[1]*ct),t[0]*=en,t[1]*=en,t}return e.invert=function(t){return t=n.invert(t[0]*ct,t[1]*ct),t[0]*=en,t[1]*=en,t},e}function cw(n,e,t,i,r,s){if(t){var o=ut(e),a=lt(e),c=i*t;r==null?(r=e+i*ni,s=e-c/2):(r=Ep(o,r),s=Ep(o,s),(i>0?r<s:r>s)&&(r+=i*ni));for(var l,h=r;i>0?h>s:h<s;h-=c)l=Il([o,-a*ut(h),-a*lt(h)]),n.point(l[0],l[1])}}function Ep(n,e){e=ns(e),e[0]-=n,Dl(e);var t=Z1(-e[1]);return((-e[2]<0?-t:t)+ni-It)%ni}function xg(){var n=[],e;return{point:function(t,i,r){e.push([t,i,r])},lineStart:function(){n.push(e=[])},lineEnd:wn,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var t=n;return n=[],e=null,t}}}function al(n,e){return Gt(n[0]-e[0])<It&&Gt(n[1]-e[1])<It}function Ua(n,e,t,i){this.x=n,this.z=e,this.o=t,this.e=i,this.v=!1,this.n=this.p=null}function vg(n,e,t,i,r){var s=[],o=[],a,c;if(n.forEach(function(g){if(!((y=g.length-1)<=0)){var y,_=g[0],x=g[y],T;if(al(_,x)){if(!_[2]&&!x[2]){for(r.lineStart(),a=0;a<y;++a)r.point((_=g[a])[0],_[1]);r.lineEnd();return}x[0]+=2*It}s.push(T=new Ua(_,g,null,!0)),o.push(T.o=new Ua(_,null,T,!1)),s.push(T=new Ua(x,g,null,!1)),o.push(T.o=new Ua(x,null,T,!0))}}),!!s.length){for(o.sort(e),bp(s),bp(o),a=0,c=o.length;a<c;++a)o[a].e=t=!t;for(var l=s[0],h,f;;){for(var u=l,p=!0;u.v;)if((u=u.n)===l)return;h=u.z,r.lineStart();do{if(u.v=u.o.v=!0,u.e){if(p)for(a=0,c=h.length;a<c;++a)r.point((f=h[a])[0],f[1]);else i(u.x,u.n.x,1,r);u=u.n}else{if(p)for(h=u.p.z,a=h.length-1;a>=0;--a)r.point((f=h[a])[0],f[1]);else i(u.x,u.p.x,-1,r);u=u.p}u=u.o,h=u.z,p=!p}while(!u.v);r.lineEnd()}}}function bp(n){if(e=n.length){for(var e,t=0,i=n[0],r;++t<e;)i.n=r=n[t],r.p=i,i=r;i.n=r=n[0],r.p=i}}function af(n){return Gt(n[0])<=wt?n[0]:K1(n[0])*((Gt(n[0])+wt)%ni-wt)}function yg(n,e){var t=af(e),i=e[1],r=lt(i),s=[lt(t),-ut(t),0],o=0,a=0,c=new fr;r===1?i=hi+It:r===-1&&(i=-hi-It);for(var l=0,h=n.length;l<h;++l)if(u=(f=n[l]).length)for(var f,u,p=f[u-1],g=af(p),y=p[1]/2+Rl,_=lt(y),x=ut(y),T=0;T<u;++T,g=M,_=R,x=O,p=P){var P=f[T],M=af(P),D=P[1]/2+Rl,R=lt(D),O=ut(D),S=M-g,w=S>=0?1:-1,B=w*S,U=B>wt,z=_*R;if(c.add(pi(z*w*lt(B),x*O+z*ut(B))),o+=U?S+w*ni:S,U^g>=t^M>=t){var I=Gs(ns(p),ns(P));Dl(I);var H=Gs(s,I);Dl(H);var A=(U^S>=0?-1:1)*mr(H[2]);(i>A||i===A&&(I[0]||I[1]))&&(a+=U^S>=0?1:-1)}}return(o<-It||o<It&&c<-Al)^a&1}function Sg(n,e,t,i){return function(r){var s=e(r),o=xg(),a=e(o),c=!1,l,h,f,u={point:p,lineStart:y,lineEnd:_,polygonStart:function(){u.point=x,u.lineStart=T,u.lineEnd=P,h=[],l=[]},polygonEnd:function(){u.point=p,u.lineStart=y,u.lineEnd=_,h=ko(h);var M=yg(l,i);h.length?(c||(r.polygonStart(),c=!0),vg(h,uw,M,t,r)):M&&(c||(r.polygonStart(),c=!0),r.lineStart(),t(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),h=l=null},sphere:function(){r.polygonStart(),r.lineStart(),t(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function p(M,D){n(M,D)&&r.point(M,D)}function g(M,D){s.point(M,D)}function y(){u.point=g,s.lineStart()}function _(){u.point=p,s.lineEnd()}function x(M,D){f.push([M,D]),a.point(M,D)}function T(){a.lineStart(),f=[]}function P(){x(f[0][0],f[0][1]),a.lineEnd();var M=a.clean(),D=o.result(),R,O=D.length,S,w,B;if(f.pop(),l.push(f),f=null,!!O){if(M&1){if(w=D[0],(S=w.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),R=0;R<S;++R)r.point((B=w[R])[0],B[1]);r.lineEnd()}return}O>1&&M&2&&D.push(D.pop().concat(D.shift())),h.push(D.filter(fw))}}return u}}function fw(n){return n.length>1}function uw(n,e){return((n=n.x)[0]<0?n[1]-hi-It:hi-n[1])-((e=e.x)[0]<0?e[1]-hi-It:hi-e[1])}const wp=Sg(function(){return!0},hw,pw,[-wt,-hi]);function hw(n){var e=NaN,t=NaN,i=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(s,o){var a=s>0?wt:-wt,c=Gt(s-e);Gt(c-wt)<It?(n.point(e,t=(t+o)/2>0?hi:-hi),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),n.point(s,t),r=0):i!==a&&c>=wt&&(Gt(e-i)<It&&(e-=i*It),Gt(s-a)<It&&(s-=a*It),t=dw(e,t,s,o),n.point(i,t),n.lineEnd(),n.lineStart(),n.point(a,t),r=0),n.point(e=s,t=o),i=a},lineEnd:function(){n.lineEnd(),e=t=NaN},clean:function(){return 2-r}}}function dw(n,e,t,i){var r,s,o=lt(n-t);return Gt(o)>It?sg((lt(e)*(s=ut(i))*lt(t)-lt(i)*(r=ut(e))*lt(n))/(r*s*o)):(e+i)/2}function pw(n,e,t,i){var r;if(n==null)r=t*hi,i.point(-wt,r),i.point(0,r),i.point(wt,r),i.point(wt,0),i.point(wt,-r),i.point(0,-r),i.point(-wt,-r),i.point(-wt,0),i.point(-wt,r);else if(Gt(n[0]-e[0])>It){var s=n[0]<e[0]?wt:-wt;r=t*s/2,i.point(-s,r),i.point(0,r),i.point(s,r)}else i.point(e[0],e[1])}function mw(n){var e=ut(n),t=2*ct,i=e>0,r=Gt(e)>It;function s(h,f,u,p){cw(p,n,t,u,h,f)}function o(h,f){return ut(h)*ut(f)>e}function a(h){var f,u,p,g,y;return{lineStart:function(){g=p=!1,y=1},point:function(_,x){var T=[_,x],P,M=o(_,x),D=i?M?0:l(_,x):M?l(_+(_<0?wt:-wt),x):0;if(!f&&(g=p=M)&&h.lineStart(),M!==p&&(P=c(f,T),(!P||al(f,P)||al(T,P))&&(T[2]=1)),M!==p)y=0,M?(h.lineStart(),P=c(T,f),h.point(P[0],P[1])):(P=c(f,T),h.point(P[0],P[1],2),h.lineEnd()),f=P;else if(r&&f&&i^M){var R;!(D&u)&&(R=c(T,f,!0))&&(y=0,i?(h.lineStart(),h.point(R[0][0],R[0][1]),h.point(R[1][0],R[1][1]),h.lineEnd()):(h.point(R[1][0],R[1][1]),h.lineEnd(),h.lineStart(),h.point(R[0][0],R[0][1],3)))}M&&(!f||!al(f,T))&&h.point(T[0],T[1]),f=T,p=M,u=D},lineEnd:function(){p&&h.lineEnd(),f=null},clean:function(){return y|(g&&p)<<1}}}function c(h,f,u){var p=ns(h),g=ns(f),y=[1,0,0],_=Gs(p,g),x=Na(_,_),T=_[0],P=x-T*T;if(!P)return!u&&h;var M=e*x/P,D=-e*T/P,R=Gs(y,_),O=Oa(y,M),S=Oa(_,D);of(O,S);var w=R,B=Na(O,w),U=Na(w,w),z=B*B-U*(Na(O,O)-1);if(!(z<0)){var I=pr(z),H=Oa(w,(-B-I)/U);if(of(H,O),H=Il(H),!u)return H;var A=h[0],N=f[0],F=h[1],G=f[1],Z;N<A&&(Z=A,A=N,N=Z);var te=N-A,ue=Gt(te-wt)<It,_e=ue||te<It;if(!ue&&G<F&&(Z=F,F=G,G=Z),_e?ue?F+G>0^H[1]<(Gt(H[0]-A)<It?F:G):F<=H[1]&&H[1]<=G:te>wt^(A<=H[0]&&H[0]<=N)){var Fe=Oa(w,(-B+I)/U);return of(Fe,O),[H,Il(Fe)]}}}function l(h,f){var u=i?n:wt-n,p=0;return h<-u?p|=1:h>u&&(p|=2),f<-u?p|=4:f>u&&(p|=8),p}return Sg(o,a,s,i?[0,-n]:[-wt,n-wt])}function gw(n,e,t,i,r,s){var o=n[0],a=n[1],c=e[0],l=e[1],h=0,f=1,u=c-o,p=l-a,g;if(g=t-o,!(!u&&g>0)){if(g/=u,u<0){if(g<h)return;g<f&&(f=g)}else if(u>0){if(g>f)return;g>h&&(h=g)}if(g=r-o,!(!u&&g<0)){if(g/=u,u<0){if(g>f)return;g>h&&(h=g)}else if(u>0){if(g<h)return;g<f&&(f=g)}if(g=i-a,!(!p&&g>0)){if(g/=p,p<0){if(g<h)return;g<f&&(f=g)}else if(p>0){if(g>f)return;g>h&&(h=g)}if(g=s-a,!(!p&&g<0)){if(g/=p,p<0){if(g>f)return;g>h&&(h=g)}else if(p>0){if(g<h)return;g<f&&(f=g)}return h>0&&(n[0]=o+h*u,n[1]=a+h*p),f<1&&(e[0]=o+f*u,e[1]=a+f*p),!0}}}}}var Co=1e9,Fa=-Co;function _w(n,e,t,i){function r(l,h){return n<=l&&l<=t&&e<=h&&h<=i}function s(l,h,f,u){var p=0,g=0;if(l==null||(p=o(l,f))!==(g=o(h,f))||c(l,h)<0^f>0)do u.point(p===0||p===3?n:t,p>1?i:e);while((p=(p+f+4)%4)!==g);else u.point(h[0],h[1])}function o(l,h){return Gt(l[0]-n)<It?h>0?0:3:Gt(l[0]-t)<It?h>0?2:1:Gt(l[1]-e)<It?h>0?1:0:h>0?3:2}function a(l,h){return c(l.x,h.x)}function c(l,h){var f=o(l,1),u=o(h,1);return f!==u?f-u:f===0?h[1]-l[1]:f===1?l[0]-h[0]:f===2?l[1]-h[1]:h[0]-l[0]}return function(l){var h=l,f=xg(),u,p,g,y,_,x,T,P,M,D,R,O={point:S,lineStart:z,lineEnd:I,polygonStart:B,polygonEnd:U};function S(A,N){r(A,N)&&h.point(A,N)}function w(){for(var A=0,N=0,F=p.length;N<F;++N)for(var G=p[N],Z=1,te=G.length,ue=G[0],_e,Fe,ke=ue[0],it=ue[1];Z<te;++Z)_e=ke,Fe=it,ue=G[Z],ke=ue[0],it=ue[1],Fe<=i?it>i&&(ke-_e)*(i-Fe)>(it-Fe)*(n-_e)&&++A:it<=i&&(ke-_e)*(i-Fe)<(it-Fe)*(n-_e)&&--A;return A}function B(){h=f,u=[],p=[],R=!0}function U(){var A=w(),N=R&&A,F=(u=ko(u)).length;(N||F)&&(l.polygonStart(),N&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),F&&vg(u,a,A,s,l),l.polygonEnd()),h=l,u=p=g=null}function z(){O.point=H,p&&p.push(g=[]),D=!0,M=!1,T=P=NaN}function I(){u&&(H(y,_),x&&M&&f.rejoin(),u.push(f.result())),O.point=S,M&&h.lineEnd()}function H(A,N){var F=r(A,N);if(p&&g.push([A,N]),D)y=A,_=N,x=F,D=!1,F&&(h.lineStart(),h.point(A,N));else if(F&&M)h.point(A,N);else{var G=[T=Math.max(Fa,Math.min(Co,T)),P=Math.max(Fa,Math.min(Co,P))],Z=[A=Math.max(Fa,Math.min(Co,A)),N=Math.max(Fa,Math.min(Co,N))];gw(G,Z,n,e,t,i)?(M||(h.lineStart(),h.point(G[0],G[1])),h.point(Z[0],Z[1]),F||h.lineEnd(),R=!1):F&&(h.lineStart(),h.point(A,N),R=!1)}T=A,P=N,M=F}return O}}var $u,Xu,ll,cl,Ws={sphere:wn,point:wn,lineStart:xw,lineEnd:wn,polygonStart:wn,polygonEnd:wn};function xw(){Ws.point=yw,Ws.lineEnd=vw}function vw(){Ws.point=Ws.lineEnd=wn}function yw(n,e){n*=ct,e*=ct,Xu=n,ll=lt(e),cl=ut(e),Ws.point=Sw}function Sw(n,e){n*=ct,e*=ct;var t=lt(e),i=ut(e),r=Gt(n-Xu),s=ut(r),o=lt(r),a=i*o,c=cl*t-ll*i*s,l=ll*t+cl*i*s;$u.add(pi(pr(a*a+c*c),l)),Xu=n,ll=t,cl=i}function Mw(n){return $u=new fr,dc(n,Ws),+$u}var qu=[null,null],Ew={type:"LineString",coordinates:qu};function $s(n,e){return qu[0]=n,qu[1]=e,Mw(Ew)}var Tp={Feature:function(n,e){return kl(n.geometry,e)},FeatureCollection:function(n,e){for(var t=n.features,i=-1,r=t.length;++i<r;)if(kl(t[i].geometry,e))return!0;return!1}},Ap={Sphere:function(){return!0},Point:function(n,e){return Rp(n.coordinates,e)},MultiPoint:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Rp(t[i],e))return!0;return!1},LineString:function(n,e){return Cp(n.coordinates,e)},MultiLineString:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Cp(t[i],e))return!0;return!1},Polygon:function(n,e){return Pp(n.coordinates,e)},MultiPolygon:function(n,e){for(var t=n.coordinates,i=-1,r=t.length;++i<r;)if(Pp(t[i],e))return!0;return!1},GeometryCollection:function(n,e){for(var t=n.geometries,i=-1,r=t.length;++i<r;)if(kl(t[i],e))return!0;return!1}};function kl(n,e){return n&&Ap.hasOwnProperty(n.type)?Ap[n.type](n,e):!1}function Rp(n,e){return $s(n,e)===0}function Cp(n,e){for(var t,i,r,s=0,o=n.length;s<o;s++){if(i=$s(n[s],e),i===0||s>0&&(r=$s(n[s],n[s-1]),r>0&&t<=r&&i<=r&&(t+i-r)*(1-Math.pow((t-i)/r,2))<Al*r))return!0;t=i}return!1}function Pp(n,e){return!!yg(n.map(bw),Mg(e))}function bw(n){return n=n.map(Mg),n.pop(),n}function Mg(n){return[n[0]*ct,n[1]*ct]}function ww(n,e){return(n&&Tp.hasOwnProperty(n.type)?Tp[n.type]:kl)(n,e)}function Tw(n,e){var t=n[0]*ct,i=n[1]*ct,r=e[0]*ct,s=e[1]*ct,o=ut(i),a=lt(i),c=ut(s),l=lt(s),h=o*ut(t),f=o*lt(t),u=c*ut(r),p=c*lt(r),g=2*mr(pr(cp(s-i)+o*c*cp(r-t))),y=lt(g),_=g?function(x){var T=lt(x*=g)/y,P=lt(g-x)/y,M=P*h+T*u,D=P*f+T*p,R=P*a+T*l;return[pi(D,M)*en,pi(R,pr(M*M+D*D))*en]}:function(){return[t*en,i*en]};return _.distance=g,_}const Ip=n=>n;var Xs=1/0,Vl=Xs,Xo=-Xs,Hl=Xo,Dp={point:Aw,lineStart:wn,lineEnd:wn,polygonStart:wn,polygonEnd:wn,result:function(){var n=[[Xs,Vl],[Xo,Hl]];return Xo=Hl=-(Vl=Xs=1/0),n}};function Aw(n,e){n<Xs&&(Xs=n),n>Xo&&(Xo=n),e<Vl&&(Vl=e),e>Hl&&(Hl=e)}function Ch(n){return function(e){var t=new Yu;for(var i in n)t[i]=n[i];return t.stream=e,t}}function Yu(){}Yu.prototype={constructor:Yu,point:function(n,e){this.stream.point(n,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ph(n,e,t){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),i!=null&&n.clipExtent(null),dc(t,n.stream(Dp)),e(Dp.result()),i!=null&&n.clipExtent(i),n}function Eg(n,e,t){return Ph(n,function(i){var r=e[1][0]-e[0][0],s=e[1][1]-e[0][1],o=Math.min(r/(i[1][0]-i[0][0]),s/(i[1][1]-i[0][1])),a=+e[0][0]+(r-o*(i[1][0]+i[0][0]))/2,c=+e[0][1]+(s-o*(i[1][1]+i[0][1]))/2;n.scale(150*o).translate([a,c])},t)}function Rw(n,e,t){return Eg(n,[[0,0],e],t)}function Cw(n,e,t){return Ph(n,function(i){var r=+e,s=r/(i[1][0]-i[0][0]),o=(r-s*(i[1][0]+i[0][0]))/2,a=-s*i[0][1];n.scale(150*s).translate([o,a])},t)}function Pw(n,e,t){return Ph(n,function(i){var r=+e,s=r/(i[1][1]-i[0][1]),o=-s*i[0][0],a=(r-s*(i[1][1]+i[0][1]))/2;n.scale(150*s).translate([o,a])},t)}var Lp=16,Iw=ut(30*ct);function Np(n,e){return+e?Lw(n,e):Dw(n)}function Dw(n){return Ch({point:function(e,t){e=n(e,t),this.stream.point(e[0],e[1])}})}function Lw(n,e){function t(i,r,s,o,a,c,l,h,f,u,p,g,y,_){var x=l-i,T=h-r,P=x*x+T*T;if(P>4*e&&y--){var M=o+u,D=a+p,R=c+g,O=pr(M*M+D*D+R*R),S=mr(R/=O),w=Gt(Gt(R)-1)<It||Gt(s-f)<It?(s+f)/2:pi(D,M),B=n(w,S),U=B[0],z=B[1],I=U-i,H=z-r,A=T*I-x*H;(A*A/P>e||Gt((x*I+T*H)/P-.5)>.3||o*u+a*p+c*g<Iw)&&(t(i,r,s,o,a,c,U,z,w,M/=O,D/=O,R,y,_),_.point(U,z),t(U,z,w,M,D,R,l,h,f,u,p,g,y,_))}}return function(i){var r,s,o,a,c,l,h,f,u,p,g,y,_={point:x,lineStart:T,lineEnd:M,polygonStart:function(){i.polygonStart(),_.lineStart=D},polygonEnd:function(){i.polygonEnd(),_.lineStart=T}};function x(S,w){S=n(S,w),i.point(S[0],S[1])}function T(){f=NaN,_.point=P,i.lineStart()}function P(S,w){var B=ns([S,w]),U=n(S,w);t(f,u,h,p,g,y,f=U[0],u=U[1],h=S,p=B[0],g=B[1],y=B[2],Lp,i),i.point(f,u)}function M(){_.point=x,i.lineEnd()}function D(){T(),_.point=R,_.lineEnd=O}function R(S,w){P(r=S,w),s=f,o=u,a=p,c=g,l=y,_.point=P}function O(){t(f,u,h,p,g,y,s,o,r,a,c,l,Lp,i),_.lineEnd=M,M()}return _}}var Nw=Ch({point:function(n,e){this.stream.point(n*ct,e*ct)}});function Ow(n){return Ch({point:function(e,t){var i=n(e,t);return this.stream.point(i[0],i[1])}})}function Uw(n,e,t,i,r){function s(o,a){return o*=i,a*=r,[e+n*o,t-n*a]}return s.invert=function(o,a){return[(o-e)/n*i,(t-a)/n*r]},s}function Op(n,e,t,i,r,s){if(!s)return Uw(n,e,t,i,r);var o=ut(s),a=lt(s),c=o*n,l=a*n,h=o/n,f=a/n,u=(a*t-o*e)/n,p=(a*e+o*t)/n;function g(y,_){return y*=i,_*=r,[c*y-l*_+e,t-l*y-c*_]}return g.invert=function(y,_){return[i*(h*y-f*_+u),r*(p-f*y-h*_)]},g}function Fw(n){return Bw(function(){return n})()}function Bw(n){var e,t=150,i=480,r=250,s=0,o=0,a=0,c=0,l=0,h,f=0,u=1,p=1,g=null,y=wp,_=null,x,T,P,M=Ip,D=.5,R,O,S,w,B;function U(A){return S(A[0]*ct,A[1]*ct)}function z(A){return A=S.invert(A[0],A[1]),A&&[A[0]*en,A[1]*en]}U.stream=function(A){return w&&B===A?w:w=Nw(Ow(h)(y(R(M(B=A)))))},U.preclip=function(A){return arguments.length?(y=A,g=void 0,H()):y},U.postclip=function(A){return arguments.length?(M=A,_=x=T=P=null,H()):M},U.clipAngle=function(A){return arguments.length?(y=+A?mw(g=A*ct):(g=null,wp),H()):g*en},U.clipExtent=function(A){return arguments.length?(M=A==null?(_=x=T=P=null,Ip):_w(_=+A[0][0],x=+A[0][1],T=+A[1][0],P=+A[1][1]),H()):_==null?null:[[_,x],[T,P]]},U.scale=function(A){return arguments.length?(t=+A,I()):t},U.translate=function(A){return arguments.length?(i=+A[0],r=+A[1],I()):[i,r]},U.center=function(A){return arguments.length?(s=A[0]%360*ct,o=A[1]%360*ct,I()):[s*en,o*en]},U.rotate=function(A){return arguments.length?(a=A[0]%360*ct,c=A[1]%360*ct,l=A.length>2?A[2]%360*ct:0,I()):[a*en,c*en,l*en]},U.angle=function(A){return arguments.length?(f=A%360*ct,I()):f*en},U.reflectX=function(A){return arguments.length?(u=A?-1:1,I()):u<0},U.reflectY=function(A){return arguments.length?(p=A?-1:1,I()):p<0},U.precision=function(A){return arguments.length?(R=Np(O,D=A*A),H()):pr(D)},U.fitExtent=function(A,N){return Eg(U,A,N)},U.fitSize=function(A,N){return Rw(U,A,N)},U.fitWidth=function(A,N){return Cw(U,A,N)},U.fitHeight=function(A,N){return Pw(U,A,N)};function I(){var A=Op(t,0,0,u,p,f).apply(null,e(s,o)),N=Op(t,i-A[0],r-A[1],u,p,f);return h=_g(a,c,l),O=Gu(e,N),S=Gu(h,O),R=Np(O,D),H()}function H(){return w=B=null,U}return function(){return e=n.apply(this,arguments),U.invert=e.invert&&z,I()}}function zw(n){return function(e,t){var i=pr(e*e+t*t),r=n(i),s=lt(r),o=ut(r);return[pi(e*s,i*o),mr(i&&t*s/i)]}}function bg(n,e){var t=ut(e),i=1+ut(n)*t;return[t*lt(n)/i,lt(e)/i]}bg.invert=zw(function(n){return 2*sg(n)});function kw(){return Fw(bg).scale(250).clipAngle(142)}const Up=1e-6;class Yr{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t,i=+i;const r=e+i,s=t;if(i<0)throw new Error("negative radius");this._x1===null?this._+=`M${r},${s}`:(Math.abs(this._x1-r)>Up||Math.abs(this._y1-s)>Up)&&(this._+="L"+r+","+s),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=r},${this._y1=s}`)}rect(e,t,i,r){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+r}h${-i}Z`}value(){return this._||null}}class Ku{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class Vw{constructor(e,[t,i,r,s]=[0,0,960,500]){if(!((r=+r)>=(t=+t))||!((s=+s)>=(i=+i)))throw new Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(e.points.length*2),this.vectors=new Float64Array(e.points.length*2),this.xmax=r,this.xmin=t,this.ymax=s,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){const{delaunay:{points:e,hull:t,triangles:i},vectors:r}=this;let s,o;const a=this.circumcenters=this._circumcenters.subarray(0,i.length/3*2);for(let y=0,_=0,x=i.length,T,P;y<x;y+=3,_+=2){const M=i[y]*2,D=i[y+1]*2,R=i[y+2]*2,O=e[M],S=e[M+1],w=e[D],B=e[D+1],U=e[R],z=e[R+1],I=w-O,H=B-S,A=U-O,N=z-S,F=(I*N-H*A)*2;if(Math.abs(F)<1e-9){if(s===void 0){s=o=0;for(const Z of t)s+=e[Z*2],o+=e[Z*2+1];s/=t.length,o/=t.length}const G=1e9*Math.sign((s-O)*N-(o-S)*A);T=(O+U)/2-G*N,P=(S+z)/2+G*A}else{const G=1/F,Z=I*I+H*H,te=A*A+N*N;T=O+(N*Z-H*te)*G,P=S+(I*te-A*Z)*G}a[_]=T,a[_+1]=P}let c=t[t.length-1],l,h=c*4,f,u=e[2*c],p,g=e[2*c+1];r.fill(0);for(let y=0;y<t.length;++y)c=t[y],l=h,f=u,p=g,h=c*4,u=e[2*c],g=e[2*c+1],r[l+2]=r[h]=p-g,r[l+3]=r[h+1]=u-f}render(e){const t=e==null?e=new Yr:void 0,{delaunay:{halfedges:i,inedges:r,hull:s},circumcenters:o,vectors:a}=this;if(s.length<=1)return null;for(let h=0,f=i.length;h<f;++h){const u=i[h];if(u<h)continue;const p=Math.floor(h/3)*2,g=Math.floor(u/3)*2,y=o[p],_=o[p+1],x=o[g],T=o[g+1];this._renderSegment(y,_,x,T,e)}let c,l=s[s.length-1];for(let h=0;h<s.length;++h){c=l,l=s[h];const f=Math.floor(r[l]/3)*2,u=o[f],p=o[f+1],g=c*4,y=this._project(u,p,a[g+2],a[g+3]);y&&this._renderSegment(u,p,y[0],y[1],e)}return t&&t.value()}renderBounds(e){const t=e==null?e=new Yr:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){const i=t==null?t=new Yr:void 0,r=this._clip(e);if(r===null||!r.length)return;t.moveTo(r[0],r[1]);let s=r.length;for(;r[0]===r[s-2]&&r[1]===r[s-1]&&s>1;)s-=2;for(let o=2;o<s;o+=2)(r[o]!==r[o-2]||r[o+1]!==r[o-1])&&t.lineTo(r[o],r[o+1]);return t.closePath(),i&&i.value()}*cellPolygons(){const{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){const r=this.cellPolygon(t);r&&(r.index=t,yield r)}}cellPolygon(e){const t=new Ku;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,r,s){let o;const a=this._regioncode(e,t),c=this._regioncode(i,r);a===0&&c===0?(s.moveTo(e,t),s.lineTo(i,r)):(o=this._clipSegment(e,t,i,r,a,c))&&(s.moveTo(o[0],o[1]),s.lineTo(o[2],o[3]))}contains(e,t,i){return t=+t,t!==t||(i=+i,i!==i)?!1:this.delaunay._step(e,t,i)===e}*neighbors(e){const t=this._clip(e);if(t)for(const i of this.delaunay.neighbors(e)){const r=this._clip(i);if(r){e:for(let s=0,o=t.length;s<o;s+=2)for(let a=0,c=r.length;a<c;a+=2)if(t[s]===r[a]&&t[s+1]===r[a+1]&&t[(s+2)%o]===r[(a+c-2)%c]&&t[(s+3)%o]===r[(a+c-1)%c]){yield i;break e}}}}_cell(e){const{circumcenters:t,delaunay:{inedges:i,halfedges:r,triangles:s}}=this,o=i[e];if(o===-1)return null;const a=[];let c=o;do{const l=Math.floor(c/3);if(a.push(t[l*2],t[l*2+1]),c=c%3===2?c-2:c+1,s[c]!==e)break;c=r[c]}while(c!==o&&c!==-1);return a}_clip(e){if(e===0&&this.delaunay.hull.length===1)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const t=this._cell(e);if(t===null)return null;const{vectors:i}=this,r=e*4;return this._simplify(i[r]||i[r+1]?this._clipInfinite(e,t,i[r],i[r+1],i[r+2],i[r+3]):this._clipFinite(e,t))}_clipFinite(e,t){const i=t.length;let r=null,s,o,a=t[i-2],c=t[i-1],l,h=this._regioncode(a,c),f,u=0;for(let p=0;p<i;p+=2)if(s=a,o=c,a=t[p],c=t[p+1],l=h,h=this._regioncode(a,c),l===0&&h===0)f=u,u=0,r?r.push(a,c):r=[a,c];else{let g,y,_,x,T;if(l===0){if((g=this._clipSegment(s,o,a,c,l,h))===null)continue;[y,_,x,T]=g}else{if((g=this._clipSegment(a,c,s,o,h,l))===null)continue;[x,T,y,_]=g,f=u,u=this._edgecode(y,_),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(y,_):r=[y,_]}f=u,u=this._edgecode(x,T),f&&u&&this._edge(e,f,u,r,r.length),r?r.push(x,T):r=[x,T]}if(r)f=u,u=this._edgecode(r[0],r[1]),f&&u&&this._edge(e,f,u,r,r.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return r}_clipSegment(e,t,i,r,s,o){const a=s<o;for(a&&([e,t,i,r,s,o]=[i,r,e,t,o,s]);;){if(s===0&&o===0)return a?[i,r,e,t]:[e,t,i,r];if(s&o)return null;let c,l,h=s||o;h&8?(c=e+(i-e)*(this.ymax-t)/(r-t),l=this.ymax):h&4?(c=e+(i-e)*(this.ymin-t)/(r-t),l=this.ymin):h&2?(l=t+(r-t)*(this.xmax-e)/(i-e),c=this.xmax):(l=t+(r-t)*(this.xmin-e)/(i-e),c=this.xmin),s?(e=c,t=l,s=this._regioncode(e,t)):(i=c,r=l,o=this._regioncode(i,r))}}_clipInfinite(e,t,i,r,s,o){let a=Array.from(t),c;if((c=this._project(a[0],a[1],i,r))&&a.unshift(c[0],c[1]),(c=this._project(a[a.length-2],a[a.length-1],s,o))&&a.push(c[0],c[1]),a=this._clipFinite(e,a))for(let l=0,h=a.length,f,u=this._edgecode(a[h-2],a[h-1]);l<h;l+=2)f=u,u=this._edgecode(a[l],a[l+1]),f&&u&&(l=this._edge(e,f,u,a,l),h=a.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(a=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return a}_edge(e,t,i,r,s){for(;t!==i;){let o,a;switch(t){case 5:t=4;continue;case 4:t=6,o=this.xmax,a=this.ymin;break;case 6:t=2;continue;case 2:t=10,o=this.xmax,a=this.ymax;break;case 10:t=8;continue;case 8:t=9,o=this.xmin,a=this.ymax;break;case 9:t=1;continue;case 1:t=5,o=this.xmin,a=this.ymin;break}(r[s]!==o||r[s+1]!==a)&&this.contains(e,o,a)&&(r.splice(s,0,o,a),s+=2)}return s}_project(e,t,i,r){let s=1/0,o,a,c;if(r<0){if(t<=this.ymin)return null;(o=(this.ymin-t)/r)<s&&(c=this.ymin,a=e+(s=o)*i)}else if(r>0){if(t>=this.ymax)return null;(o=(this.ymax-t)/r)<s&&(c=this.ymax,a=e+(s=o)*i)}if(i>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/i)<s&&(a=this.xmax,c=t+(s=o)*r)}else if(i<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/i)<s&&(a=this.xmin,c=t+(s=o)*r)}return[a,c]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){const i=(t+2)%e.length,r=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[r]||e[t+1]===e[i+1]&&e[i+1]===e[r+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}const Hw=2*Math.PI,Rs=Math.pow;function Gw(n){return n[0]}function Ww(n){return n[1]}function $w(n){const{triangles:e,coords:t}=n;for(let i=0;i<e.length;i+=3){const r=2*e[i],s=2*e[i+1],o=2*e[i+2];if((t[o]-t[r])*(t[s+1]-t[r+1])-(t[s]-t[r])*(t[o+1]-t[r+1])>1e-10)return!1}return!0}function Xw(n,e,t){return[n+Math.sin(n+e)*t,e+Math.cos(n-e)*t]}class Ih{static from(e,t=Gw,i=Ww,r){return new Ih("length"in e?qw(e,t,i,r):Float64Array.from(Yw(e,t,i,r)))}constructor(e){this._delaunator=new $o(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){const e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&$w(e)){this.collinear=Int32Array.from({length:t.length/2},(u,p)=>p).sort((u,p)=>t[2*u]-t[2*p]||t[2*u+1]-t[2*p+1]);const c=this.collinear[0],l=this.collinear[this.collinear.length-1],h=[t[2*c],t[2*c+1],t[2*l],t[2*l+1]],f=1e-8*Math.hypot(h[3]-h[1],h[2]-h[0]);for(let u=0,p=t.length/2;u<p;++u){const g=Xw(t[2*u],t[2*u+1],f);t[2*u]=g[0],t[2*u+1]=g[1]}this._delaunator=new $o(t)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges,r=this.hull=this._delaunator.hull,s=this.triangles=this._delaunator.triangles,o=this.inedges.fill(-1),a=this._hullIndex.fill(-1);for(let c=0,l=i.length;c<l;++c){const h=s[c%3===2?c-2:c+1];(i[c]===-1||o[h]===-1)&&(o[h]=c)}for(let c=0,l=r.length;c<l;++c)a[r[c]]=c;r.length<=2&&r.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=r[0],o[r[0]]=1,r.length===2&&(o[r[1]]=0,this.triangles[1]=r[1],this.triangles[2]=r[1]))}voronoi(e){return new Vw(this,e)}*neighbors(e){const{inedges:t,hull:i,_hullIndex:r,halfedges:s,triangles:o,collinear:a}=this;if(a){const f=a.indexOf(e);f>0&&(yield a[f-1]),f<a.length-1&&(yield a[f+1]);return}const c=t[e];if(c===-1)return;let l=c,h=-1;do{if(yield h=o[l],l=l%3===2?l-2:l+1,o[l]!==e)return;if(l=s[l],l===-1){const f=i[(r[e]+1)%i.length];f!==h&&(yield f);return}}while(l!==c)}find(e,t,i=0){if(e=+e,e!==e||(t=+t,t!==t))return-1;const r=i;let s;for(;(s=this._step(i,e,t))>=0&&s!==i&&s!==r;)i=s;return s}_step(e,t,i){const{inedges:r,hull:s,_hullIndex:o,halfedges:a,triangles:c,points:l}=this;if(r[e]===-1||!l.length)return(e+1)%(l.length>>1);let h=e,f=Rs(t-l[e*2],2)+Rs(i-l[e*2+1],2);const u=r[e];let p=u;do{let g=c[p];const y=Rs(t-l[g*2],2)+Rs(i-l[g*2+1],2);if(y<f&&(f=y,h=g),p=p%3===2?p-2:p+1,c[p]!==e)break;if(p=a[p],p===-1){if(p=s[(o[e]+1)%s.length],p!==g&&Rs(t-l[p*2],2)+Rs(i-l[p*2+1],2)<f)return p;break}}while(p!==u);return h}render(e){const t=e==null?e=new Yr:void 0,{points:i,halfedges:r,triangles:s}=this;for(let o=0,a=r.length;o<a;++o){const c=r[o];if(c<o)continue;const l=s[o]*2,h=s[c]*2;e.moveTo(i[l],i[l+1]),e.lineTo(i[h],i[h+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){t===void 0&&(!e||typeof e.moveTo!="function")&&(t=e,e=null),t=t==null?2:+t;const i=e==null?e=new Yr:void 0,{points:r}=this;for(let s=0,o=r.length;s<o;s+=2){const a=r[s],c=r[s+1];e.moveTo(a+t,c),e.arc(a,c,t,0,Hw)}return i&&i.value()}renderHull(e){const t=e==null?e=new Yr:void 0,{hull:i,points:r}=this,s=i[0]*2,o=i.length;e.moveTo(r[s],r[s+1]);for(let a=1;a<o;++a){const c=2*i[a];e.lineTo(r[c],r[c+1])}return e.closePath(),t&&t.value()}hullPolygon(){const e=new Ku;return this.renderHull(e),e.value()}renderTriangle(e,t){const i=t==null?t=new Yr:void 0,{points:r,triangles:s}=this,o=s[e*=3]*2,a=s[e+1]*2,c=s[e+2]*2;return t.moveTo(r[o],r[o+1]),t.lineTo(r[a],r[a+1]),t.lineTo(r[c],r[c+1]),t.closePath(),i&&i.value()}*trianglePolygons(){const{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){const t=new Ku;return this.renderTriangle(e,t),t.value()}}function qw(n,e,t,i){const r=n.length,s=new Float64Array(r*2);for(let o=0;o<r;++o){const a=n[o];s[o*2]=e.call(i,a,o,n),s[o*2+1]=t.call(i,a,o,n)}return s}function*Yw(n,e,t,i){let r=0;for(const s of n)yield e.call(i,s,r,n),yield t.call(i,s,r,n),++r}const Dh=Math.PI,Fp=Dh/2,Bp=180/Dh,zp=Dh/180,Kw=Math.atan2,kp=Math.cos,Zw=Math.max,Jw=Math.min,Vp=Math.sin,jw=Math.sign||function(n){return n>0?1:n<0?-1:0},wg=Math.sqrt;function Qw(n){return n>1?Fp:n<-1?-Fp:Math.asin(n)}function Tg(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Qn(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Gl(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function Wl(n){var e=wg(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return[n[0]/e,n[1]/e,n[2]/e]}function Lh(n){return[Kw(n[1],n[0])*Bp,Qw(Zw(-1,Jw(1,n[2])))*Bp]}function Xi(n){const e=n[0]*zp,t=n[1]*zp,i=kp(t);return[i*kp(e),i*Vp(e),Vp(t)]}function Nh(n){return n=n.map(e=>Xi(e)),Tg(n[0],Qn(n[2],n[1]))}function eT(n){const e=nT(n),t=rT(e),i=iT(t,n),r=oT(t,n.length),s=tT(r,n),o=sT(t,n),{polygons:a,centers:c}=aT(o,t,n),l=lT(a),h=fT(t,n),f=cT(i,t);return{delaunay:e,edges:i,triangles:t,centers:c,neighbors:r,polygons:a,mesh:l,hull:h,urquhart:f,find:s}}function tT(n,e){function t(i,r){let s=i[0]-r[0],o=i[1]-r[1],a=i[2]-r[2];return s*s+o*o+a*a}return function(r,s,o){o===void 0&&(o=0);let a,c,l=o;const h=Xi([r,s]);do a=o,o=null,c=t(h,Xi(e[a])),n[a].forEach(f=>{let u=t(h,Xi(e[f]));if(u<c){c=u,o=f,l=f;return}});while(o!==null);return l}}function nT(n){if(n.length<2)return{};let e=0;for(;isNaN(n[e][0]+n[e][1])&&e++<n.length;);const t=lw(n[e]),i=kw().translate([0,0]).scale(1).rotate(t.invert([180,0]));n=n.map(i);const r=[];let s=1;for(let f=0,u=n.length;f<u;f++){let p=n[f][0]**2+n[f][1]**2;!isFinite(p)||p>1e32?r.push(f):p>s&&(s=p)}const o=1e6*wg(s);r.forEach(f=>n[f]=[o,0]),n.push([0,o]),n.push([-o,0]),n.push([0,-o]);const a=Ih.from(n);a.projection=i;const{triangles:c,halfedges:l,inedges:h}=a;for(let f=0,u=l.length;f<u;f++)if(l[f]<0){const p=f%3==2?f-2:f+1,g=f%3==0?f+2:f-1,y=l[p],_=l[g];l[y]=_,l[_]=y,l[p]=l[g]=-1,c[f]=c[p]=c[g]=e,h[c[y]]=y%3==0?y+2:y-1,h[c[_]]=_%3==0?_+2:_-1,f+=2-f%3}else c[f]>n.length-3-1&&(c[f]=e);return a}function iT(n,e){const t=new Set;return e.length===2?[[0,1]]:(n.forEach(i=>{if(i[0]!==i[1]&&!(Nh(i.map(r=>e[r]))<0))for(let r=0,s;r<3;r++)s=(r+1)%3,t.add(El([i[r],i[s]]).join("-"))}),Array.from(t,i=>i.split("-").map(Number)))}function rT(n){const{triangles:e}=n;if(!e)return[];const t=[];for(let i=0,r=e.length/3;i<r;i++){const s=e[3*i],o=e[3*i+1],a=e[3*i+2];s!==o&&o!==a&&t.push([s,a,o])}return t}function sT(n,e){return n.map(t=>{const i=t.map(s=>e[s]).map(Xi),r=Gl(Gl(Qn(i[1],i[0]),Qn(i[2],i[1])),Qn(i[0],i[2]));return Lh(Wl(r))})}function oT(n,e){const t=[];return n.forEach(i=>{for(let r=0;r<3;r++){const s=i[r],o=i[(r+1)%3];t[s]=t[s]||[],t[s].push(o)}}),n.length===0&&(e===2?(t[0]=[1],t[1]=[0]):e===1&&(t[0]=[])),t}function aT(n,e,t){const i=[],r=n.slice();if(e.length===0){if(t.length<2)return{polygons:i,centers:r};if(t.length===2){const a=Xi(t[0]),c=Xi(t[1]),l=Wl(Gl(a,c)),h=Wl(Qn(a,c)),f=Qn(l,h),u=[l,Qn(l,f),Qn(Qn(l,f),f),Qn(Qn(Qn(l,f),f),f)].map(Lh).map(o);return i.push(u),i.push(u.slice().reverse()),{polygons:i,centers:r}}}e.forEach((a,c)=>{for(let l=0;l<3;l++){const h=a[l],f=a[(l+1)%3],u=a[(l+2)%3];i[h]=i[h]||[],i[h].push([f,u,c,[h,f,u]])}});const s=i.map(a=>{const c=[a[0][2]];let l=a[0][1];for(let h=1;h<a.length;h++)for(let f=0;f<a.length;f++)if(a[f][0]==l){l=a[f][1],c.push(a[f][2]);break}if(c.length>2)return c;if(c.length==2){const h=Hp(t[a[0][3][0]],t[a[0][3][1]],r[c[0]]),f=Hp(t[a[0][3][2]],t[a[0][3][0]],r[c[0]]),u=o(h),p=o(f);return[c[0],p,c[1],u]}});function o(a){let c=-1;return r.slice(e.length,1/0).forEach((l,h)=>{l[0]===a[0]&&l[1]===a[1]&&(c=h+e.length)}),c<0&&(c=r.length,r.push(a)),c}return{polygons:s,centers:r}}function Hp(n,e,t){n=Xi(n),e=Xi(e),t=Xi(t);const i=jw(Tg(Qn(e,n),t));return Lh(Wl(Gl(n,e)).map(r=>i*r))}function lT(n){const e=[];return n.forEach(t=>{if(!t)return;let i=t[t.length-1];for(let r of t)r>i&&e.push([i,r]),i=r}),e}function cT(n,e){return function(t){const i=new Map,r=new Map;return n.forEach((s,o)=>{const a=s.join("-");i.set(a,t[o]),r.set(a,!0)}),e.forEach(s=>{let o=0,a=-1;for(let c=0;c<3;c++){let l=El([s[c],s[(c+1)%3]]).join("-");i.get(l)>o&&(o=i.get(l),a=l)}r.set(a,!1)}),n.map(s=>r.get(s.join("-")))}}function fT(n,e){const t=new Set,i=[];n.map(a=>{if(!(Nh(a.map(c=>e[c>e.length?0:c]))>1e-12))for(let c=0;c<3;c++){let l=[a[c],a[(c+1)%3]],h=`${l[0]}-${l[1]}`;t.has(h)?t.delete(h):t.add(`${l[1]}-${l[0]}`)}});const r=new Map;let s;if(t.forEach(a=>{a=a.split("-").map(Number),r.set(a[0],a[1]),s=a[0]}),s===void 0)return i;let o=s;do{i.push(o);let a=r.get(o);r.set(o,-1),o=a}while(o>-1&&o!==s);return i}function uT(n){const e=function(t){if(e.delaunay=null,e._data=t,typeof e._data=="object"&&e._data.type==="FeatureCollection"&&(e._data=e._data.features),typeof e._data=="object"){const i=e._data.map(r=>[e._vx(r),e._vy(r),r]).filter(r=>isFinite(r[0]+r[1]));e.points=i.map(r=>[r[0],r[1]]),e.valid=i.map(r=>r[2]),e.delaunay=eT(e.points)}return e};return e._vx=function(t){if(typeof t=="object"&&"type"in t)return vp(t)[0];if(0 in t)return t[0]},e._vy=function(t){if(typeof t=="object"&&"type"in t)return vp(t)[1];if(1 in t)return t[1]},e.x=function(t){return t?(e._vx=t,e):e._vx},e.y=function(t){return t?(e._vy=t,e):e._vy},e.polygons=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i={type:"FeatureCollection",features:[]};return e.valid.length===0||(e.delaunay.polygons.forEach((r,s)=>i.features.push({type:"Feature",geometry:r?{type:"Polygon",coordinates:[[...r,r[0]].map(o=>e.delaunay.centers[o])]}:null,properties:{site:e.valid[s],sitecoordinates:e.points[s],neighbours:e.delaunay.neighbors[s]}})),e.valid.length===1&&i.features.push({type:"Feature",geometry:{type:"Sphere"},properties:{site:e.valid[0],sitecoordinates:e.points[0],neighbours:[]}})),i},e.triangles=function(t){return t!==void 0&&e(t),e.delaunay?{type:"FeatureCollection",features:e.delaunay.triangles.map((i,r)=>(i=i.map(s=>e.points[s]),i.center=e.delaunay.centers[r],i)).filter(i=>Nh(i)>0).map(i=>({type:"Feature",properties:{circumcenter:i.center},geometry:{type:"Polygon",coordinates:[[...i,i[0]]]}}))}:!1},e.links=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const i=e.delaunay.edges.map(s=>$s(e.points[s[0]],e.points[s[1]])),r=e.delaunay.urquhart(i);return{type:"FeatureCollection",features:e.delaunay.edges.map((s,o)=>({type:"Feature",properties:{source:e.valid[s[0]],target:e.valid[s[1]],length:i[o],urquhart:!!r[o]},geometry:{type:"LineString",coordinates:[e.points[s[0]],e.points[s[1]]]}}))}},e.mesh=function(t){return t!==void 0&&e(t),e.delaunay?{type:"MultiLineString",coordinates:e.delaunay.edges.map(i=>[e.points[i[0]],e.points[i[1]]])}:!1},e.cellMesh=function(t){if(t!==void 0&&e(t),!e.delaunay)return!1;const{centers:i,polygons:r}=e.delaunay,s=[];for(const o of r)if(o)for(let a=o.length,c=o[a-1],l=o[0],h=0;h<a;c=l,l=o[++h])l>c&&s.push([i[c],i[l]]);return{type:"MultiLineString",coordinates:s}},e._found=void 0,e.find=function(t,i,r){if(e._found=e.delaunay.find(t,i,e._found),!r||$s([t,i],e.points[e._found])<r)return e._found},e.hull=function(t){t!==void 0&&e(t);const i=e.delaunay.hull,r=e.points;return i.length===0?null:{type:"Polygon",coordinates:[[...i.map(s=>r[s]),r[i[0]]]]}},n?e(n):e}function hT(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Oh(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Ag(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function ea(){}var qo=.7,$l=1/qo,Fs="\\s*([+-]?\\d+)\\s*",Yo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",qi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dT=/^#([0-9a-f]{3,8})$/,pT=new RegExp(`^rgb\\(${Fs},${Fs},${Fs}\\)$`),mT=new RegExp(`^rgb\\(${qi},${qi},${qi}\\)$`),gT=new RegExp(`^rgba\\(${Fs},${Fs},${Fs},${Yo}\\)$`),_T=new RegExp(`^rgba\\(${qi},${qi},${qi},${Yo}\\)$`),xT=new RegExp(`^hsl\\(${Yo},${qi},${qi}\\)$`),vT=new RegExp(`^hsla\\(${Yo},${qi},${qi},${Yo}\\)$`),Gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Oh(ea,Ko,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Wp,formatHex:Wp,formatHex8:yT,formatHsl:ST,formatRgb:$p,toString:$p});function Wp(){return this.rgb().formatHex()}function yT(){return this.rgb().formatHex8()}function ST(){return Rg(this).formatHsl()}function $p(){return this.rgb().formatRgb()}function Ko(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=dT.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?Xp(e):t===3?new qn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Ba(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Ba(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=pT.exec(n))?new qn(e[1],e[2],e[3],1):(e=mT.exec(n))?new qn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=gT.exec(n))?Ba(e[1],e[2],e[3],e[4]):(e=_T.exec(n))?Ba(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=xT.exec(n))?Kp(e[1],e[2]/100,e[3]/100,1):(e=vT.exec(n))?Kp(e[1],e[2]/100,e[3]/100,e[4]):Gp.hasOwnProperty(n)?Xp(Gp[n]):n==="transparent"?new qn(NaN,NaN,NaN,0):null}function Xp(n){return new qn(n>>16&255,n>>8&255,n&255,1)}function Ba(n,e,t,i){return i<=0&&(n=e=t=NaN),new qn(n,e,t,i)}function MT(n){return n instanceof ea||(n=Ko(n)),n?(n=n.rgb(),new qn(n.r,n.g,n.b,n.opacity)):new qn}function Zu(n,e,t,i){return arguments.length===1?MT(n):new qn(n,e,t,i??1)}function qn(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Oh(qn,Zu,Ag(ea,{brighter(n){return n=n==null?$l:Math.pow($l,n),new qn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?qo:Math.pow(qo,n),new qn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new qn(Zr(this.r),Zr(this.g),Zr(this.b),Xl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qp,formatHex:qp,formatHex8:ET,formatRgb:Yp,toString:Yp}));function qp(){return`#${Kr(this.r)}${Kr(this.g)}${Kr(this.b)}`}function ET(){return`#${Kr(this.r)}${Kr(this.g)}${Kr(this.b)}${Kr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Yp(){const n=Xl(this.opacity);return`${n===1?"rgb(":"rgba("}${Zr(this.r)}, ${Zr(this.g)}, ${Zr(this.b)}${n===1?")":`, ${n})`}`}function Xl(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Zr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Kr(n){return n=Zr(n),(n<16?"0":"")+n.toString(16)}function Kp(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new wi(n,e,t,i)}function Rg(n){if(n instanceof wi)return new wi(n.h,n.s,n.l,n.opacity);if(n instanceof ea||(n=Ko(n)),!n)return new wi;if(n instanceof wi)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,a=s-r,c=(s+r)/2;return a?(e===s?o=(t-i)/a+(t<i)*6:t===s?o=(i-e)/a+2:o=(e-t)/a+4,a/=c<.5?s+r:2-s-r,o*=60):a=c>0&&c<1?0:o,new wi(o,a,c,n.opacity)}function bT(n,e,t,i){return arguments.length===1?Rg(n):new wi(n,e,t,i??1)}function wi(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Oh(wi,bT,Ag(ea,{brighter(n){return n=n==null?$l:Math.pow($l,n),new wi(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?qo:Math.pow(qo,n),new wi(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new qn(lf(n>=240?n-240:n+120,r,i),lf(n,r,i),lf(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new wi(Zp(this.h),za(this.s),za(this.l),Xl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Xl(this.opacity);return`${n===1?"hsl(":"hsla("}${Zp(this.h)}, ${za(this.s)*100}%, ${za(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Zp(n){return n=(n||0)%360,n<0?n+360:n}function za(n){return Math.max(0,Math.min(1,n||0))}function lf(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const Uh=n=>()=>n;function wT(n,e){return function(t){return n+t*e}}function TT(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function AT(n){return(n=+n)==1?Cg:function(e,t){return t-e?TT(e,t,n):Uh(isNaN(e)?t:e)}}function Cg(n,e){var t=e-n;return t?wT(n,t):Uh(isNaN(n)?e:n)}const Jp=(function n(e){var t=AT(e);function i(r,s){var o=t((r=Zu(r)).r,(s=Zu(s)).r),a=t(r.g,s.g),c=t(r.b,s.b),l=Cg(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function RT(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function CT(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function PT(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),o;for(o=0;o<i;++o)r[o]=Fh(n[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function IT(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function ql(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function DT(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=Fh(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var Ju=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,cf=new RegExp(Ju.source,"g");function LT(n){return function(){return n}}function NT(n){return function(e){return n(e)+""}}function OT(n,e){var t=Ju.lastIndex=cf.lastIndex=0,i,r,s,o=-1,a=[],c=[];for(n=n+"",e=e+"";(i=Ju.exec(n))&&(r=cf.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:ql(i,r)})),t=cf.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?NT(c[0].x):LT(e):(e=c.length,function(l){for(var h=0,f;h<e;++h)a[(f=c[h]).i]=f.x(l);return a.join("")})}function Fh(n,e){var t=typeof e,i;return e==null||t==="boolean"?Uh(e):(t==="number"?ql:t==="string"?(i=Ko(e))?(e=i,Jp):OT:e instanceof Ko?Jp:e instanceof Date?IT:CT(e)?RT:Array.isArray(e)?PT:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?DT:ql)(n,e)}function UT(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function FT(n){return function(){return n}}function BT(n){return+n}var jp=[0,1];function Ds(n){return n}function ju(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:FT(isNaN(e)?NaN:.5)}function zT(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function kT(n,e,t){var i=n[0],r=n[1],s=e[0],o=e[1];return r<i?(i=ju(r,i),s=t(o,s)):(i=ju(i,r),s=t(s,o)),function(a){return s(i(a))}}function VT(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=ju(n[o],n[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var c=g1(n,a,1,i)-1;return s[c](r[c](a))}}function HT(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function GT(){var n=jp,e=jp,t=Fh,i,r,s,o=Ds,a,c,l;function h(){var u=Math.min(n.length,e.length);return o!==Ds&&(o=zT(n[0],n[u-1])),a=u>2?VT:kT,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=a(n.map(i),e,t)))(i(o(u)))}return f.invert=function(u){return o(r((l||(l=a(e,n.map(i),ql)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,BT),h()):n.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),t=UT,h()},f.clamp=function(u){return arguments.length?(o=u?!0:Ds,h()):o!==Ds},f.interpolate=function(u){return arguments.length?(t=u,h()):t},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,p){return i=u,r=p,h()}}function WT(){return GT()(Ds,Ds)}function $T(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Yl(n,e){if(!isFinite(n)||n===0)return null;var t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"),i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function qs(n){return n=Yl(Math.abs(n)),n?n[1]:NaN}function XT(n,e){return function(t,i){for(var r=t.length,s=[],o=0,a=n[0],c=0;r>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),s.push(t.substring(r-=a,r+a)),!((c+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(e)}}function qT(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var YT=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Kl(n){if(!(e=YT.exec(n)))throw new Error("invalid format: "+n);var e;return new Bh({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Kl.prototype=Bh.prototype;function Bh(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Bh.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function KT(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var Zl;function ZT(n,e){var t=Yl(n,e);if(!t)return Zl=void 0,n.toPrecision(e);var i=t[0],r=t[1],s=r-(Zl=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+Yl(n,Math.max(0,e+s-1))[0]}function Qp(n,e){var t=Yl(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const em={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:$T,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Qp(n*100,e),r:Qp,s:ZT,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function tm(n){return n}var nm=Array.prototype.map,im=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function JT(n){var e=n.grouping===void 0||n.thousands===void 0?tm:XT(nm.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?tm:qT(nm.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"−":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=Kl(f);var p=f.fill,g=f.align,y=f.sign,_=f.symbol,x=f.zero,T=f.width,P=f.comma,M=f.precision,D=f.trim,R=f.type;R==="n"?(P=!0,R="g"):em[R]||(M===void 0&&(M=12),D=!0,R="g"),(x||p==="0"&&g==="=")&&(x=!0,p="0",g="=");var O=(u&&u.prefix!==void 0?u.prefix:"")+(_==="$"?t:_==="#"&&/[boxX]/.test(R)?"0"+R.toLowerCase():""),S=(_==="$"?i:/[%p]/.test(R)?o:"")+(u&&u.suffix!==void 0?u.suffix:""),w=em[R],B=/[defgprs%]/.test(R);M=M===void 0?6:/[gprs]/.test(R)?Math.max(1,Math.min(21,M)):Math.max(0,Math.min(20,M));function U(z){var I=O,H=S,A,N,F;if(R==="c")H=w(z)+H,z="";else{z=+z;var G=z<0||1/z<0;if(z=isNaN(z)?c:w(Math.abs(z),M),D&&(z=KT(z)),G&&+z==0&&y!=="+"&&(G=!1),I=(G?y==="("?y:a:y==="-"||y==="("?"":y)+I,H=(R==="s"&&!isNaN(z)&&Zl!==void 0?im[8+Zl/3]:"")+H+(G&&y==="("?")":""),B){for(A=-1,N=z.length;++A<N;)if(F=z.charCodeAt(A),48>F||F>57){H=(F===46?r+z.slice(A+1):z.slice(A))+H,z=z.slice(0,A);break}}}P&&!x&&(z=e(z,1/0));var Z=I.length+z.length+H.length,te=Z<T?new Array(T-Z+1).join(p):"";switch(P&&x&&(z=e(te+z,te.length?T-H.length:1/0),te=""),g){case"<":z=I+z+H+te;break;case"=":z=I+te+z+H;break;case"^":z=te.slice(0,Z=te.length>>1)+I+z+H+te.slice(Z);break;default:z=te+I+z+H;break}return s(z)}return U.toString=function(){return f+""},U}function h(f,u){var p=Math.max(-8,Math.min(8,Math.floor(qs(u)/3)))*3,g=Math.pow(10,-p),y=l((f=Kl(f),f.type="f",f),{suffix:im[8+p/3]});return function(_){return y(g*_)}}return{format:l,formatPrefix:h}}var ka,Pg,Ig;jT({thousands:",",grouping:[3],currency:["$",""]});function jT(n){return ka=JT(n),Pg=ka.format,Ig=ka.formatPrefix,ka}function QT(n){return Math.max(0,-qs(Math.abs(n)))}function eA(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(qs(e)/3)))*3-qs(Math.abs(n)))}function tA(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,qs(e)-qs(n))+1}function nA(n,e,t,i){var r=S1(n,e,t),s;switch(i=Kl(i??",f"),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=eA(r,o))&&(i.precision=s),Ig(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=tA(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=QT(r))&&(i.precision=s-(i.type==="%")*2);break}}return Pg(i)}function iA(n){var e=n.domain;return n.ticks=function(t){var i=e();return y1(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return nA(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],c,l,h=10;for(a<o&&(l=o,o=a,a=l,l=r,r=s,s=l);h-- >0;){if(l=Tu(o,a,t),l===c)return i[r]=o,i[s]=a,e(i);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return n},n}function Qu(){var n=WT();return n.copy=function(){return HT(n,Qu())},hT.apply(n,arguments),iA(n)}function eh(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function rA(n){if(Array.isArray(n))return n}function sA(n){if(Array.isArray(n))return eh(n)}function oA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function aA(n,e,t){return e=Jl(e),mA(n,Dg()?Reflect.construct(e,[],Jl(n).constructor):e.apply(n,t))}function lA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function cA(n,e,t){return Object.defineProperty(n,"prototype",{writable:!1}),n}function Jl(n){return Jl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Jl(n)}function fA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&th(n,e)}function Dg(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Dg=function(){return!!n})()}function uA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function hA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,s,o,a=[],c=!0,l=!1;try{if(s=(t=t.call(n)).next,e!==0)for(;!(c=(i=s.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(h){l=!0,r=h}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return a}}function dA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oA(n)}function th(n,e){return th=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},th(n,e)}function Fi(n,e){return rA(n)||hA(n,e)||Lg(n,e)||dA()}function ff(n){return sA(n)||uA(n)||Lg(n)||pA()}function Lg(n,e){if(n){if(typeof n=="string")return eh(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?eh(n,e):void 0}}function gA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,i=t===void 0?1/0:t,r=_A(n,i),s=ko(r),o=xA(n,i),a=[].concat(ff(s),ff(o)),c={type:"Polygon",coordinates:n},l=dg(c),h=Fi(l,2),f=Fi(h[0],2),u=f[0],p=f[1],g=Fi(h[1],2),y=g[0],_=g[1],x=u>y||_>=89||p<=-89,T=[];if(x){var P=uT(a).triangles(),M=new Map(a.map(function(F,G){var Z=Fi(F,2),te=Z[0],ue=Z[1];return["".concat(te,"-").concat(ue),G]}));P.features.forEach(function(F){var G,Z=F.geometry.coordinates[0].slice(0,3).reverse(),te=[];if(Z.forEach(function(_e){var Fe=Fi(_e,2),ke=Fe[0],it=Fe[1],he="".concat(ke,"-").concat(it);M.has(he)&&te.push(M.get(he))}),te.length===3){if(te.some(function(_e){return _e<s.length})){var ue=F.properties.circumcenter;if(!nh(ue,c,x))return}(G=T).push.apply(G,te)}})}else if(o.length)for(var w=$o.from(a),B=function(G){var Z,te=[2,1,0].map(function(Fe){return w.triangles[G+Fe]}),ue=te.map(function(Fe){return a[Fe]});if(te.some(function(Fe){return Fe<s.length})){var _e=[0,1].map(function(Fe){return M1(ue,function(ke){return ke[Fe]})});if(!nh(_e,c,x))return 1}(Z=T).push.apply(Z,ff(te))},U=0,z=w.triangles.length;U<z;U+=3)B(U);else{var D=rg(r),R=D.vertices,O=D.holes,S=O===void 0?[]:O;T=b1(R,S,2)}var I=Qu(El(a,function(F){return F[0]}),[0,1]),H=Qu(El(a,function(F){return F[1]}),[0,1]),A=a.map(function(F){var G=Fi(F,2),Z=G[0],te=G[1];return[I(Z),H(te)]}),N={points:a,indices:T,uvs:A};return{contour:r,triangles:N}}function _A(n,e){return n.map(function(t){var i=[],r;return t.forEach(function(s){if(r){var o=$s(s,r)*180/Math.PI;if(o>e)for(var a=Tw(r,s),c=1/Math.ceil(o/e),l=c;l<1;)i.push(a(l)),l+=c}i.push(r=s)}),i})}function xA(n,e){var t={type:"Polygon",coordinates:n},i=dg(t),r=Fi(i,2),s=Fi(r[0],2),o=s[0],a=s[1],c=Fi(r[1],2),l=c[0],h=c[1];if(Math.min(Math.abs(l-o),Math.abs(h-a))<e)return[];var f=o>l||h>=89||a<=-89;return vA(e,{minLng:o,maxLng:l,minLat:a,maxLat:h}).filter(function(u){return nh(u,t,f)})}function vA(n){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,i=e.maxLng,r=e.minLat,s=e.maxLat,o=Math.round(Math.pow(360/n,2)/Math.PI),a=(1+Math.sqrt(5))/2,c=function(x){return x/a*360%360-180},l=function(x){return Math.acos(2*x/o-1)/Math.PI*180-90},h=function(x){return o*(Math.cos((x+90)*Math.PI/180)+1)/2},f=[s!==void 0?Math.ceil(h(s)):0,r!==void 0?Math.floor(h(r)):o-1],u=t===void 0&&i===void 0?function(){return!0}:t===void 0?function(_){return _<=i}:i===void 0?function(_){return _>=t}:i>=t?function(_){return _>=t&&_<=i}:function(_){return _>=t||_<=i},p=[],g=f[0];g<=f[1];g++){var y=c(g);u(y)&&p.push([y,l(g)])}return p}function nh(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?ww(e,n):K0(n,e)}var fl=window.THREE?window.THREE:{BufferGeometry:yn,Float32BufferAttribute:Xt},rm=new fl.BufferGeometry().setAttribute?"setAttribute":"addAttribute",yA=(function(n){function e(t,i,r,s,o,a,c){var l;lA(this,e),l=aA(this,e),l.type="ConicPolygonGeometry",l.parameters={polygonGeoJson:t,bottomHeight:i,topHeight:r,closedBottom:s,closedTop:o,includeSides:a,curvatureResolution:c},i=i||0,r=r||1,s=s!==void 0?s:!0,o=o!==void 0?o:!0,a=a!==void 0?a:!0,c=c||5;var h=gA(t,{resolution:c}),f=h.contour,u=h.triangles,p=ko(u.uvs),g=[],y=[],_=[],x=0,T=function(O){var S=Math.round(g.length/3),w=_.length;g=g.concat(O.vertices),y=y.concat(O.uvs),_=_.concat(S?O.indices.map(function(B){return B+S}):O.indices),l.addGroup(w,_.length-w,x++)};a&&T(M()),s&&T(D(i,!1)),o&&T(D(r,!0)),l.setIndex(_),l[rm]("position",new fl.Float32BufferAttribute(g,3)),l[rm]("uv",new fl.Float32BufferAttribute(y,2)),l.computeVertexNormals();function P(R,O){var S=typeof O=="function"?O:function(){return O},w=R.map(function(B){return B.map(function(U){var z=Fi(U,2),I=z[0],H=z[1];return SA(H,I,S(I,H))})});return rg(w)}function M(){for(var R=P(f,i),O=R.vertices,S=R.holes,w=P(f,r),B=w.vertices,U=ko([B,O]),z=Math.round(B.length/3),I=new Set(S),H=0,A=[],N=0;N<z;N++){var F=N+1;if(F===z)F=H;else if(I.has(F)){var G=F;F=H,H=G}A.push(N,N+z,F+z),A.push(F+z,F,N)}for(var Z=[],te=1;te>=0;te--)for(var ue=0;ue<z;ue+=1)Z.push(ue/(z-1),te);return{indices:A,vertices:U,uvs:Z}}function D(R){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:O?u.indices:u.indices.slice().reverse(),vertices:P([u.points],R).vertices,uvs:p}}return l}return fA(e,n),cA(e)})(fl.BufferGeometry);function SA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=(90-n)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}const sm=new Lr,Va=new X;class Ng extends Sv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Xt(e,3)),this.setAttribute("uv",new Xt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new yu(t,6,1);return this.setAttribute("instanceStart",new Gi(i,3,0)),this.setAttribute("instanceEnd",new Gi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new yu(t,6,1);return this.setAttribute("instanceColorStart",new Gi(i,3,0)),this.setAttribute("instanceColorEnd",new Gi(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new cv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),sm.setFromBufferAttribute(t),this.boundingBox.union(sm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Va.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Va)),Va.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Va));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ht},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:Mh.merge([Pe.common,Pe.fog,Pe.line]),vertexShader:`
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
		`};class Og extends di{constructor(e){super({type:"LineMaterial",uniforms:Mh.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const uf=new Bt,om=new X,am=new X,gn=new Bt,_n=new Bt,Oi=new Bt,hf=new X,df=new Kt,xn=new Rv,lm=new X,Ha=new Lr,Ga=new Jo,Ui=new Bt;let zi,Jr;function cm(n,e,t){return Ui.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ui.multiplyScalar(1/Ui.w),Ui.x=Jr/t.width,Ui.y=Jr/t.height,Ui.applyMatrix4(n.projectionMatrixInverse),Ui.multiplyScalar(1/Ui.w),Math.abs(Math.max(Ui.x,Ui.y))}function MA(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,c=o;a<c;a++){xn.start.fromBufferAttribute(r,a),xn.end.fromBufferAttribute(s,a),xn.applyMatrix4(t);const l=new X,h=new X;zi.distanceSqToSegment(xn.start,xn.end,h,l),h.distanceTo(l)<Jr*.5&&e.push({point:h,pointOnLine:l,distance:zi.origin.distanceTo(h),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function EA(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),f=-e.near;zi.at(1,Oi),Oi.w=1,Oi.applyMatrix4(e.matrixWorldInverse),Oi.applyMatrix4(i),Oi.multiplyScalar(1/Oi.w),Oi.x*=s.x/2,Oi.y*=s.y/2,Oi.z=0,hf.copy(Oi),df.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(gn.fromBufferAttribute(c,u),_n.fromBufferAttribute(l,u),gn.w=1,_n.w=1,gn.applyMatrix4(df),_n.applyMatrix4(df),gn.z>f&&_n.z>f)continue;if(gn.z>f){const P=gn.z-_n.z,M=(gn.z-f)/P;gn.lerp(_n,M)}else if(_n.z>f){const P=_n.z-gn.z,M=(_n.z-f)/P;_n.lerp(gn,M)}gn.applyMatrix4(i),_n.applyMatrix4(i),gn.multiplyScalar(1/gn.w),_n.multiplyScalar(1/_n.w),gn.x*=s.x/2,gn.y*=s.y/2,_n.x*=s.x/2,_n.y*=s.y/2,xn.start.copy(gn),xn.start.z=0,xn.end.copy(_n),xn.end.z=0;const y=xn.closestPointToPointParameter(hf,!0);xn.at(y,lm);const _=E0.lerp(gn.z,_n.z,y),x=_>=-1&&_<=1,T=hf.distanceTo(lm)<Jr*.5;if(x&&T){xn.start.fromBufferAttribute(c,u),xn.end.fromBufferAttribute(l,u),xn.start.applyMatrix4(o),xn.end.applyMatrix4(o);const P=new X,M=new X;zi.distanceSqToSegment(xn.start,xn.end,M,P),t.push({point:M,pointOnLine:P,distance:zi.origin.distanceTo(M),object:n,face:null,faceIndex:u,uv:null,uv1:null})}}}class bA extends Rt{constructor(e=new Ng,t=new Og({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,c=t.count;o<c;o++,a+=2)om.fromBufferAttribute(t,o),am.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+om.distanceTo(am);const s=new yu(r,2,1);return e.setAttribute("instanceDistanceStart",new Gi(s,1,0)),e.setAttribute("instanceDistanceEnd",new Gi(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;if(r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),i===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;zi=e.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Jr=c.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),Ga.copy(a.boundingSphere).applyMatrix4(o);let l;if(i)l=Jr*.5;else{const f=Math.max(r.near,Ga.distanceToPoint(zi.origin));l=cm(r,f,c.resolution)}if(Ga.radius+=l,zi.intersectsSphere(Ga)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ha.copy(a.boundingBox).applyMatrix4(o);let h;if(i)h=Jr*.5;else{const f=Math.max(r.near,Ha.distanceToPoint(zi.origin));h=cm(r,f,c.resolution)}Ha.expandByScalar(h),zi.intersectsBox(Ha)!==!1&&(i?MA(this,t):EA(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(uf),this.material.uniforms.resolution.value.set(uf.z,uf.w))}}const Ug={Africa:16757575,Asia:9427311,Europe:9300160,"North America":16353195,"South America":16767309,Oceania:12160754,Antarctica:16055293,"Seven seas (open ocean)":12160754},wA=14211288,TA=3112916,AA=9358834,Fg=100.12,RA=3,fm=100.2,CA=100.28,PA=2373214,IA=16777215,DA=15398655,jl=[15224125,4026088,3129201,15905076,10120654];let Wa=null;function Zo(){if(!Wa){const n=new Uint8Array([90,150,210,255]);Wa=new D0(n,n.length,1,hh),Wa.needsUpdate=!0}return Wa}function pf(n){return new Hs({color:n,gradientMap:Zo()})}const So=Math.PI/180,um=(n,e,t)=>[t*Math.cos(e*So)*Math.sin(n*So),t*Math.sin(e*So),t*Math.cos(e*So)*Math.cos(n*So)];function LA(n){const e=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=r.geometry.type==="Polygon"?[r.geometry.coordinates]:r.geometry.coordinates;for(const o of s)for(const a of o)for(let c=0;c<a.length-1;c++){const l=a[c],h=a[c+1];e.push(...um(l[0],l[1],fm),...um(h[0],h[1],fm))}}const t=new Ng;t.setPositions(e);const i=new Og({color:PA,linewidth:2.5,transparent:!0,opacity:.9});return i.resolution.set(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{i.resolution.set(window.innerWidth,window.innerHeight)}),new bA(t,i)}const NA=-63;function OA(){const n=(90-NA)*Math.PI/180,e=new Rt(new Ai(Fg,48,12,0,Math.PI*2,n,Math.PI-n),new Hs({color:Ug.Antarctica,gradientMap:Zo()}));return e.name="ATA",e}function UA(n){const e=new kn,t=new Map,i=new Map,r=new Rt(new Ai(Eu,64,64),new Hs({color:TA,gradientMap:Zo()}));e.add(r),e.add(OA()),e.add(LA(n));for(const s of n.features){if(s.properties.id==="ATA")continue;const o=Ug[s.properties.continent]??wA,a=new Hs({color:o,gradientMap:Zo()});t.set(s.properties.id,a),i.set(s.properties.id,s.properties.continent);const c=s.geometry.type==="Polygon"?[s.geometry.coordinates]:s.geometry.coordinates,l=new kn;l.name=s.properties.id;for(const h of c){const f=new yA(h,Eu,Fg,!1,!0,!1,RA);l.add(new Rt(f,a))}e.add(l)}return{group:e,countryMaterials:t,continentOf:i}}function FA(){const n=new di({transparent:!0,side:Vn,depthWrite:!1,uniforms:{glowColor:{value:new xt(DA)}},vertexShader:`
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
      }`});return new Rt(new Ai(104.5,64,64),n)}function BA(n){const e=new Jx;e.background=new xt(AA);const t=new ci(60,1,.1,2e3);t.position.set(0,0,300);const i=new bb({antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const r=new vv(16774368,2.4);r.position.set(200,150,100);const s=new gv(12376319,3813160,.9);e.add(r,s,new yv(16777215,.35)),e.add(FA());const o=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",o),o(),{scene:e,camera:t,renderer:i}}async function zA(){const n=async o=>{const a=await fetch(o);if(!a.ok)throw new Error(`Failed to load ${o}`);return await a.json()},[t,i,r,s]=await Promise.all([n("./data/world.geo.json"),n("./data/countries.json"),n("./data/landmarks.json"),n("./data/riddles.json")]);return{world:t,countries:i,landmarks:r,riddles:s}}const kA=8;function VA(){const n=new Set;window.addEventListener("keydown",i=>n.add(i.code)),window.addEventListener("keyup",i=>n.delete(i.code));const e=(i,r)=>(i.some(s=>n.has(s))?1:0)-(r.some(s=>n.has(s))?1:0),t={throttle:0,turn:0,pitch:0};return{read(i){const r={throttle:e(["KeyW"],["KeyS"]),turn:e(["KeyD","ArrowRight"],["KeyA","ArrowLeft"]),pitch:e(["ArrowUp","KeyR"],["ArrowDown","KeyF"])},s=Math.min(1,kA*i);return t.throttle+=(r.throttle-t.throttle)*s,t.turn+=(r.turn-t.turn)*s,t.pitch+=(r.pitch-t.pitch)*s,{...t}}}}function Ql(n=15224125,e="seaplane"){const t=new kn,i=pf(n),r=pf(16249832),s=e==="lifter"?.85:.6,o=new Rt(new Sl(s,2.4,4,8),i);o.rotation.x=Math.PI/2;const a=e==="stunt"?6:e==="jet"?3.6:5,c=e==="jet"?1.6:1.1,l=new Rt(new sr(a,.15,c),r);e==="jet"&&(l.position.z=-.4);const h=new Rt(new sr(1.8,.12,.6),r);h.position.set(0,.1,-1.6);const f=new Rt(new sr(.12,.9,.6),i);f.position.set(0,.5,-1.6);const u=new Rt(new ac(e==="jet"?.35:.45,e==="jet"?1.4:.8,8),r);if(u.rotation.x=Math.PI/2,u.position.z=e==="jet"?2.3:2,t.add(o,l,h,f,u),e==="seaplane")for(const p of[-1,1]){const g=new Rt(new Sl(.18,1.6,4,6),r);g.rotation.x=Math.PI/2,g.position.set(p*.9,-.8,.2),t.add(g)}if(e==="lifter"){const p=f.clone();p.position.y=.9,p.scale.set(1,.6,1),t.add(p)}if(e!=="jet"){const p=new kn;p.name="propeller";const g=pf(3815994),y=new kn;y.name="propellerBlades";for(const x of[0,Math.PI/2]){const T=new Rt(new sr(.12,1.7,.06),g);T.rotation.z=x,y.add(T)}const _=new Rt(new Sh(.95,24),new Bi({color:14540253,transparent:!0,opacity:.25,side:Ei}));_.name="propellerDisc",_.visible=!1,p.add(y,_),p.position.z=2.45,t.add(p)}return t}const HA=.35,GA=8,WA=52;function $A(n){const e=Math.min(1,Math.max(0,n));return{spinRadPerS:GA+WA*e,blurVisible:e>=HA}}const hm=n=>new X(n.x,n.y,n.z),XA=1/60,qA=12,YA=.15,KA=5,ZA=25,JA=.55,jA=.28,dm=.1,QA=58,eR=16,tR=.06;function pm(n,e){let t=0,i=0;const r=n.getObjectByName("propellerBlades"),s=n.getObjectByName("propellerDisc");return{update(o,a){const c=hm(ui(o.lat,o.lon,o.altKm)),l=hc(o.lat,o.lon,o.headingDeg,KA),h=hm(ui(l.lat,l.lon,o.altKm)),f=c.clone().normalize();n.position.copy(c),n.up.copy(f),n.lookAt(h),t+=(a.turn*JA-t)*dm,i+=(a.pitch*jA-i)*dm,n.rotateZ(t),n.rotateX(-i);const u=h.clone().sub(c).normalize(),p=c.clone().addScaledVector(u,-30).addScaledVector(f,qA);e.position.lerp(p,YA),e.up.copy(f);const g=c.clone().addScaledVector(u,ZA);e.lookAt(g);const y=Math.min(1,Math.max(0,(o.speedKmh-zo)/(wh-zo))),_=QA+eR*y;if(e.fov+=(_-e.fov)*tR,e.updateProjectionMatrix(),r&&s){const x=$A(y);r.rotation.z+=x.spinRadPerS*XA,r.visible=!x.blurVisible,s.visible=x.blurVisible}}}}function nR(n){const e=document.createElement("div");e.style.cssText="position:fixed;top:16px;left:16px;color:#fff;font:600 16px system-ui;background:rgba(11,16,38,.7);padding:10px 14px;border-radius:10px;pointer-events:none";const t=document.createElement("div"),i=document.createElement("div");return i.style.cssText="font-weight:400;font-size:13px;opacity:.8;margin-top:4px",e.append(t,i),n.appendChild(e),{setCountry(r){t.textContent=r?`Flying over: ${r}`:"Flying over: open ocean"},setTelemetry(r){i.textContent=`${Math.round(r.speedKmh)} km/h · hdg ${Math.round(r.headingDeg)}°`}}}const $a=.15,mm=n=>new X(n.x,n.y,n.z);function iR(n){const e=new Map;return{sync(t,i){const r=new Set;t.players.forEach((s,o)=>{if(o===i)return;r.add(o);const a={lat:s.lat,lon:s.lon,altKm:s.altKm,headingDeg:s.headingDeg,speedKmh:s.speedKmh},c=e.get(o);if(c)c.targetState=a,c.tumbleUntil=s.tumbleUntil;else{const l=Ql(jl[s.colorIdx%jl.length]);n.add(l),e.set(o,{mesh:l,current:a,targetState:a,tumbleUntil:s.tumbleUntil})}});for(const[s,o]of e)r.has(s)||(n.remove(o.mesh),e.delete(s))},update(){for(const t of e.values()){const i=t.current,r=t.targetState;i.lat+=(r.lat-i.lat)*$a,i.lon+=((r.lon-i.lon+540)%360-180)*$a,i.lon=(i.lon+540)%360-180,i.altKm+=(r.altKm-i.altKm)*$a,i.headingDeg=s1(i.headingDeg,r.headingDeg,$a);const s=mm(ui(i.lat,i.lon,i.altKm)),o=hc(i.lat,i.lon,i.headingDeg,5);t.mesh.position.copy(s),t.mesh.up.copy(s.clone().normalize()),t.mesh.lookAt(mm(ui(o.lat,o.lon,i.altKm))),Date.now()<t.tumbleUntil&&t.mesh.rotateZ(Date.now()%360*.05)}}}}const rR=16765471;function sR(n){const e=new Rt(new oc(2.5,2.5,60,24,1,!0),new Bi({color:rR,transparent:!0,opacity:.45,side:Ei,depthWrite:!1}));return e.visible=!1,n.add(e),{showAt(t,i){const r=ui(t,i,0),s=new X(r.x,r.y,r.z).normalize();e.position.copy(s.clone().multiplyScalar(130)),e.quaternion.setFromUnitVectors(new X(0,1,0),s),e.visible=!0},hide(){e.visible=!1},update(t){if(!e.visible)return;const i=e.material;i.opacity=.35+.2*Math.sin(t*3)}}}const Bg=4,mf=.12,zg=64;function oR(){return{puffs:[],spawnTimerS:0}}function aR(n,e,t,i){const r=n.puffs.map(a=>({...a,ageS:a.ageS+e})).filter(a=>a.ageS<Bg);let s=n.spawnTimerS+e;if(!i)return{puffs:r,spawnTimerS:Math.min(s,mf)};const o=[...r];for(;s>=mf;)s-=mf,o.length<zg&&o.push({x:t.x,y:t.y,z:t.z,ageS:0});return{puffs:o,spawnTimerS:s}}const lR=.9,cR=2.2,gm=.95,gf=.35,_m=3,fR="#d7e7f2";function uR(n){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d");if(!i)throw new Error("2d canvas unavailable");const r=[{x:64,y:68,r:30},{x:40+n*3,y:62,r:20+n},{x:90-n*4,y:62,r:22},{x:56+n*5,y:46,r:17+n*2}],s=o=>{for(const a of r)i.beginPath(),i.arc(a.x,a.y+o,a.r,0,Math.PI*2),i.fill()};return i.fillStyle=fR,s(6),i.fillStyle="#ffffff",s(0),new N0(t)}function hR(n){const e=[];for(let s=0;s<_m;s++)e.push(uR(s));const t=[],i=[];for(let s=0;s<zg;s++){const o=new P0({map:e[s%_m],transparent:!0,depthWrite:!1,rotation:(Math.random()-.5)*.9}),a=new nv(o);a.visible=!1,t.push(a),i.push(.8+Math.random()*.5),n.add(a)}let r=oR();return{update(s,o,a){r=aR(r,s,o,a);for(let c=0;c<t.length;c++){const l=t[c],h=r.puffs[c];if(!h){l.visible=!1;continue}const f=h.ageS/Bg;l.visible=!0,l.position.set(h.x,h.y,h.z);const u=(lR+cR*f)*i[c];l.scale.set(u,u,1),l.material.opacity=f<gf?gm:gm*(1-(f-gf)/(1-gf))}}}}function pc(n){return/^[A-Za-z]{2}$/.test(n)?String.fromCodePoint(...[...n.toUpperCase()].map(e=>127462+(e.charCodeAt(0)-65))):"🏳️"}const dR={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function pR(n){let e=-1,t=0,i=0;const r=()=>{e===-1&&t===0||(e=-1,t=0,n.banner.hide(),n.hints.clear(),n.beacon.hide())},s=(o,a)=>{const c=o.legs[a];return c?{type:c.legType,countryId:c.countryId,zone:{lat:c.zoneLat,lon:c.zoneLon},label:c.label,sublabel:c.sublabel}:null};return{update(o,a,c,l){var T,P;if(!o||o.phase!=="racing"){r();return}const h=o.players.get(a);if(!h){r();return}const f=s(o,h.legIndex);if(!f){r();return}if(h.legIndex!==e||o.countdownEndsAt!==t){if(!(o.countdownEndsAt!==t)&&e>=0&&h.legIndex>e){const D=o.legs[e],R=((T=n.countries[(D==null?void 0:D.countryId)??""])==null?void 0:T.name)??"";n.banner.toast(`✅ ${R}! Leg ${e+1} of ${o.legs.length} done`)}e=h.legIndex,t=o.countdownEndsAt,i=0,n.hints.setTarget(f.countryId),n.beacon.showAt(f.zone.lat,f.zone.lon),n.banner.show(f,pc(((P=n.countries[f.countryId])==null?void 0:P.cca2)??""))}const u=Date.now(),p=u<h.fogUntil,g=o.difficulty,y=Math.max(0,(u-h.legStartedAt)/1e3),_=p?{continent:!1,compass:!1,outline:!1}:wu(y,g);n.hints.setFlags(_),n.banner.setCompass(_.compass?(Z0(c.lat,c.lon,f.zone.lat,f.zone.lon)-c.headingDeg+360)%360:null);const x=J0(c,f,i,l);i=x.inZone?x.dwellS:0,n.banner.setDwell(f.type==="refuel"&&x.inZone?i/Th:null),h.vipState==="falling"?n.banner.setWarning("🪂 Your VIP bailed out — fly through the parachute!"):p?n.banner.setWarning("🌫 Fogged! Hints jammed for a few seconds"):n.banner.setWarning(x.requirementBlocked?dR[f.type]??null:null)}}}const mR=150,gR=150,_R=160,xR=24,vR=8,yR=8,Xa=n=>new X(n.x,n.y,n.z);function SR(n){const e=new Bi({color:16773800,transparent:!0,opacity:.55}),t=[];for(let l=0;l<xR;l++){const h=new Rt(new Ai(1.4,16,12),e);h.visible=!1,t.push(h),n.add(h)}const i=new Bi({color:3818072,transparent:!0,opacity:.85}),r=[];for(let l=0;l<vR;l++){const h=new kn;for(const[f,u,p]of[[0,0,1.1],[-.9,.2,.8],[.9,.2,.8],[0,.7,.7]]){const g=new Rt(new Ai(p,10,8),i);g.position.set(f,u,0),h.add(g)}h.visible=!1,r.push(h),n.add(h)}const s=new Bi({color:16747586}),o=[];for(let l=0;l<5;l++){const h=new kn,f=new Rt(new Ai(.9,10,6,0,Math.PI*2,0,Math.PI/2),s),u=new Rt(new Ai(.3,8,6),new Bi({color:16249832}));u.position.y=-.9,h.add(f,u),h.visible=!1,o.push(h),n.add(h)}const a=new Bi({color:2237998}),c=[];for(let l=0;l<yR;l++){const h=new kn;for(const[f,u]of[[0,0],[-.7,-.6],[.7,-.6]]){const p=new Rt(new ac(.25,.7,5),a);p.rotation.x=Math.PI/2,p.position.set(f,0,u),h.add(p)}h.visible=!1,c.push(h),n.add(h)}return{update(l,h){const f=(l==null?void 0:l.phase)==="racing",u=Date.now();for(let g=0;g<t.length;g++){const y=f?l.bubbles[g]:void 0,_=t[g];if(!y||y.activeAt>u){_.visible=!1;continue}_.visible=!0,_.position.copy(Xa(ui(y.lat,y.lon,mR)));const x=1+.12*Math.sin(h*3+g);_.scale.setScalar(x)}for(let g=0;g<r.length;g++){const y=f?l.storms[g]:void 0,_=r[g];_.visible=!!y,y&&(_.position.copy(Xa(ui(y.lat,y.lon,gR))),_.up.copy(_.position.clone().normalize()))}for(let g=0;g<c.length;g++){const y=f?l.birds[g]:void 0,_=c[g];_.visible=!!y,y&&_.position.copy(Xa(ui(y.lat,y.lon,_R)))}const p=[];f&&l.players.forEach(g=>{g.vipState==="falling"&&p.push({lat:g.vipLat,lon:g.vipLon,altKm:g.vipAltKm})});for(let g=0;g<o.length;g++){const y=o[g],_=p[g];y.visible=!!_,_&&(y.position.copy(Xa(ui(_.lat,_.lon,_.altKm))),y.up.copy(y.position.clone().normalize()))}}}}const MR={jetstream:"💨",storm:"🌩",fog:"🌫",bird:"🐦",freeze:"❄"},ER={jetstream:"Jet Stream",storm:"Storm Cloud",fog:"Fog Bomb",bird:"Bird Flock",freeze:"Time Freeze"},bR=new Set(["fog","freeze"]);function wR(n,e){const t=document.createElement("div");t.style.cssText="position:fixed;top:16px;right:16px;color:#fff;font:700 15px system-ui;background:rgba(11,16,38,.75);padding:10px 14px;border-radius:12px;pointer-events:none;display:none;text-align:center;z-index:5",n.appendChild(t);const i=document.createElement("div");i.style.cssText="position:fixed;top:35%;left:50%;transform:translateX(-50%);color:#fff;font:600 15px system-ui;background:rgba(20,27,61,.95);padding:14px 20px;border-radius:14px;display:none;text-align:left;z-index:8;pointer-events:auto",n.appendChild(i);let r=null,s="",o=!1;const a=()=>{const h=[];return r==null||r.players.forEach((f,u)=>{u===s||f.finishedAt!==0||h.push({sessionId:u,label:`${f.nickname} — leg ${f.legIndex+1}`})}),h},c=()=>{o=!1,i.style.display="none"},l=()=>{const h=a();if(h.length!==0){if(h.length===1){e(h[0].sessionId);return}o=!0,i.innerHTML='<div style="font-weight:800;margin-bottom:8px">Pick a rival (Esc cancels)</div>'+h.map((f,u)=>`<div data-target="${f.sessionId}" style="padding:4px 6px;cursor:pointer">${u+1}. ${f.label}</div>`).join(""),i.style.display="block";for(const f of i.querySelectorAll("[data-target]"))f.addEventListener("click",()=>{e(f.dataset.target),c()})}};return window.addEventListener("keydown",h=>{if(o){h.code==="Escape"&&c();const u=Number(h.key);if(u>=1&&u<=4){const p=a()[u-1];p&&(e(p.sessionId),c())}return}if(h.code!=="Space"||!r||r.phase!=="racing")return;const f=r.players.get(s);!f||f.heldItem===""||(h.preventDefault(),bR.has(f.heldItem)?l():e())}),{update(h,f){r=h,s=f;const u=(h==null?void 0:h.phase)==="racing"?h.players.get(f):void 0,p=(u==null?void 0:u.heldItem)??"";if(p===""){t.style.display="none",o&&c();return}t.style.display="block",t.innerHTML=`<div style="font-size:26px">${MR[p]??"❔"}</div>${ER[p]??p}<div style="font-weight:400;font-size:12px;opacity:.75">Space to use</div>`}}}const xm=["🥇","🥈","🥉","4.","5."];function TR(n){return n.sort((e,t)=>{const i=e.player.placement||99,r=t.player.placement||99;return i!==r?i-r:t.player.legIndex!==e.player.legIndex?t.player.legIndex-e.player.legIndex:e.player.nickname.localeCompare(t.player.nickname)})}function AR(n){const e=document.createElement("div");return e.style.cssText="position:fixed;top:96px;left:50%;transform:translateX(-50%);color:#fff;font:600 14px system-ui;background:rgba(11,16,38,.7);padding:10px 18px;border-radius:12px;pointer-events:none;text-align:center;z-index:4",n.appendChild(e),{update(t,i,r){var o;const s=[];if(t.players.forEach((a,c)=>s.push({sessionId:c,player:a})),TR(s),t.phase==="countdown"){const a=Math.max(0,Math.ceil((t.countdownEndsAt-Date.now())/1e3));e.innerHTML="",e.textContent=`Contract: ${t.legs.length} legs — starting in ${a}…`}else if(t.phase==="racing")e.innerHTML=s.map(({sessionId:a,player:c})=>{const l=a===i?" (you)":"",h=c.placement>0?`🏁 ${xm[c.placement-1]??c.placement}`:`Leg ${Math.min(c.legIndex+1,t.legs.length)}/${t.legs.length}`;return`<div>🛩 ${c.nickname}${l} — ${h}</div>`}).join("");else if(t.phase==="finished"){const a=s.map(({sessionId:l,player:h})=>{const f=l===i,u=xm[h.placement-1]??`${h.placement}.`;return`<div style="font-size:17px;margin:2px 0;${f?"color:#ffd94d":""}">${u} ${h.nickname}${f?" (you)":""} — ${h.points} pts</div>`}).join(""),c=i===t.hostSessionId?'<button id="race-again" style="margin-top:10px;padding:8px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 15px system-ui;cursor:pointer;pointer-events:auto">Race again</button>':'<div style="opacity:.7;margin-top:8px;font-weight:400">Waiting for the host to start the next race…</div>';e.innerHTML=`<div style="font-size:20px;font-weight:700;margin-bottom:6px">🏁 Race complete</div>${a}${c}`,r&&((o=e.querySelector("#race-again"))==null||o.addEventListener("click",r,{once:!0}))}else e.innerHTML="",e.textContent="";e.style.display=e.textContent||e.innerHTML?"block":"none"}}}const RR="position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font:700 20px system-ui;background:rgba(11,16,38,.75);padding:12px 20px;border-radius:14px;pointer-events:none;text-align:center;min-width:340px;z-index:5",CR="position:fixed;top:40%;left:50%;transform:translate(-50%,-50%);color:#fff;font:800 30px system-ui;background:rgba(20,27,61,.92);padding:18px 30px;border-radius:18px;pointer-events:none;text-align:center;z-index:6;transition:opacity .4s ease";function PR(n){const e=document.createElement("div");e.style.cssText=RR,e.style.display="none",e.innerHTML=`
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
    </div>`,n.appendChild(e);const t=s=>e.querySelector(s),i=document.createElement("div");i.style.cssText=CR,i.style.opacity="0",n.appendChild(i);let r=null;return{show(s,o){t("[data-flag]").textContent=s.type==="riddle"?"❓":o,t("[data-label]").textContent=s.label,t("[data-sub]").textContent=s.sublabel,e.style.display="block",this.setCompass(null),this.setDwell(null),this.setWarning(null)},hide(){e.style.display="none"},setCompass(s){const o=t("[data-compass]");s===null?o.style.display="none":(o.style.display="inline-block",o.style.transform=`rotate(${Math.round(s)}deg)`)},setDwell(s){const o=t("[data-dwellwrap]");s===null?o.style.display="none":(o.style.display="block",t("[data-dwell]").style.width=`${Math.min(100,s*100)}%`)},setWarning(s){const o=t("[data-warn]");o.style.display=s?"block":"none",o.textContent=s??""},setClock(s){t("[data-clock]").textContent=s??""},toast(s,o=1800){i.textContent=s,i.style.opacity="1",r&&clearTimeout(r),r=setTimeout(()=>{i.style.opacity="0"},o)}}}function zh(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var _f={},vm={},ym;function IR(){return ym||(ym=1,ArrayBuffer.isView||(ArrayBuffer.isView=n=>n!==null&&typeof n=="object"&&n.buffer instanceof ArrayBuffer),typeof globalThis>"u"&&typeof window<"u"&&(window.globalThis=window),typeof FormData>"u"&&(globalThis.FormData=class{})),vm}var qa={},ih=function(n,e){return ih=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},ih(n,e)};function kg(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ih(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ec=function(){return ec=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ec.apply(this,arguments)};function Vg(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Hg(n,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Gg(n,e){return function(t,i){e(t,i,n)}}function Wg(n,e,t,i,r,s){function o(x){if(x!==void 0&&typeof x!="function")throw new TypeError("Function expected");return x}for(var a=i.kind,c=a==="getter"?"get":a==="setter"?"set":"value",l=!e&&n?i.static?n:n.prototype:null,h=e||(l?Object.getOwnPropertyDescriptor(l,i.name):{}),f,u=!1,p=t.length-1;p>=0;p--){var g={};for(var y in i)g[y]=y==="access"?{}:i[y];for(var y in i.access)g.access[y]=i.access[y];g.addInitializer=function(x){if(u)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(x||null))};var _=(0,t[p])(a==="accessor"?{get:h.get,set:h.set}:h[c],g);if(a==="accessor"){if(_===void 0)continue;if(_===null||typeof _!="object")throw new TypeError("Object expected");(f=o(_.get))&&(h.get=f),(f=o(_.set))&&(h.set=f),(f=o(_.init))&&r.unshift(f)}else(f=o(_))&&(a==="field"?r.unshift(f):h[c]=f)}l&&Object.defineProperty(l,i.name,h),u=!0}function $g(n,e,t){for(var i=arguments.length>2,r=0;r<e.length;r++)t=i?e[r].call(n,t):e[r].call(n);return i?t:void 0}function Xg(n){return typeof n=="symbol"?n:"".concat(n)}function qg(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Yg(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function Kg(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(f){o(f)}}function c(h){try{l(i.throw(h))}catch(f){o(f)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Zg(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return o.next=a(0),o.throw=a(1),o.return=a(2),typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(h){return c([l,h])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;o&&(o=0,l[0]&&(t=0)),t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(h){l=[6,h],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var mc=Object.create?(function(n,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,i,r)}):(function(n,e,t,i){i===void 0&&(i=t),n[i]=e[t]});function Jg(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&mc(e,n,t)}function tc(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function kh(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function jg(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(kh(arguments[e]));return n}function Qg(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var i=Array(n),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}function e_(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Ys(n){return this instanceof Ys?(this.v=n,this):new Ys(n)}function t_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,f)}}function a(p,g){i[p]&&(r[p]=function(y){return new Promise(function(_,x){s.push([p,y,_,x])>1||c(p,y)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(y){u(s[0][3],y)}}function l(p){p.value instanceof Ys?Promise.resolve(p.value.v).then(h,f):u(s[0][2],p)}function h(p){c("next",p)}function f(p){c("throw",p)}function u(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function n_(n){var e,t;return e={},i("next"),i("throw",function(r){throw r}),i("return"),e[Symbol.iterator]=function(){return this},e;function i(r,s){e[r]=n[r]?function(o){return(t=!t)?{value:Ys(n[r](o)),done:!1}:s?s(o):o}:s}}function i_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof tc=="function"?tc(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}function r_(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var DR=Object.create?(function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}):function(n,e){n.default=e},rh=function(n){return rh=Object.getOwnPropertyNames||function(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[t.length]=i);return t},rh(n)};function s_(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t=rh(n),i=0;i<t.length;i++)t[i]!=="default"&&mc(e,n,t[i]);return DR(e,n),e}function o_(n){return n&&n.__esModule?n:{default:n}}function a_(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function l_(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t}function c_(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function f_(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var i,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=e[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=e[Symbol.dispose],t&&(r=i)}if(typeof i!="function")throw new TypeError("Object not disposable.");r&&(i=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),n.stack.push({value:e,dispose:i,async:t})}else t&&n.stack.push({async:!0});return e}var LR=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var i=new Error(t);return i.name="SuppressedError",i.error=n,i.suppressed=e,i};function u_(n){function e(s){n.error=n.hasError?new LR(s,n.error,"An error was suppressed during disposal."):s,n.hasError=!0}var t,i=0;function r(){for(;t=n.stack.pop();)try{if(!t.async&&i===1)return i=0,n.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return i|=2,Promise.resolve(s).then(r,function(o){return e(o),r()})}else i|=1}catch(o){e(o)}if(i===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return r()}function h_(n,e){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,i,r,s,o){return i?e?".jsx":".js":r&&(!s||!o)?t:r+s+"."+o.toLowerCase()+"js"}):n}const NR={__extends:kg,__assign:ec,__rest:Vg,__decorate:Hg,__param:Gg,__esDecorate:Wg,__runInitializers:$g,__propKey:Xg,__setFunctionName:qg,__metadata:Yg,__awaiter:Kg,__generator:Zg,__createBinding:mc,__exportStar:Jg,__values:tc,__read:kh,__spread:jg,__spreadArrays:Qg,__spreadArray:e_,__await:Ys,__asyncGenerator:t_,__asyncDelegator:n_,__asyncValues:i_,__makeTemplateObject:r_,__importStar:s_,__importDefault:o_,__classPrivateFieldGet:a_,__classPrivateFieldSet:l_,__classPrivateFieldIn:c_,__addDisposableResource:f_,__disposeResources:u_,__rewriteRelativeImportExtension:h_},OR=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:f_,get __assign(){return ec},__asyncDelegator:n_,__asyncGenerator:t_,__asyncValues:i_,__await:Ys,__awaiter:Kg,__classPrivateFieldGet:a_,__classPrivateFieldIn:c_,__classPrivateFieldSet:l_,__createBinding:mc,__decorate:Hg,__disposeResources:u_,__esDecorate:Wg,__exportStar:Jg,__extends:kg,__generator:Zg,__importDefault:o_,__importStar:s_,__makeTemplateObject:r_,__metadata:Yg,__param:Gg,__propKey:Xg,__read:kh,__rest:Vg,__rewriteRelativeImportExtension:h_,__runInitializers:$g,__setFunctionName:qg,__spread:jg,__spreadArray:e_,__spreadArrays:Qg,__values:tc,default:NR},Symbol.toStringTag,{value:"Module"})),gc=zh(OR);var xf={},Sm;function _c(){return Sm||(Sm=1,(function(n){n.CloseCode=void 0,(function(i){i[i.CONSENTED=4e3]="CONSENTED",i[i.DEVMODE_RESTART=4010]="DEVMODE_RESTART"})(n.CloseCode||(n.CloseCode={}));class e extends Error{constructor(r,s){super(s),this.name="ServerError",this.code=r}}class t extends Error{constructor(r){super(r),this.name="AbortError"}}n.AbortError=t,n.ServerError=e})(xf)),xf}var vf={},yf={},Sf={},Po={exports:{}},UR=Po.exports,Mm;function Vh(){return Mm||(Mm=1,(function(n,e){(function(t,i){i(e)})(UR,(function(t){t.OPERATION=void 0,(function(C){C[C.ADD=128]="ADD",C[C.REPLACE=0]="REPLACE",C[C.DELETE=64]="DELETE",C[C.DELETE_AND_MOVE=96]="DELETE_AND_MOVE",C[C.MOVE_AND_ADD=160]="MOVE_AND_ADD",C[C.DELETE_AND_ADD=192]="DELETE_AND_ADD",C[C.CLEAR=10]="CLEAR",C[C.REVERSE=15]="REVERSE",C[C.MOVE=32]="MOVE",C[C.DELETE_BY_REFID=33]="DELETE_BY_REFID",C[C.ADD_BY_REFID=129]="ADD_BY_REFID"})(t.OPERATION||(t.OPERATION={})),Symbol.metadata??(Symbol.metadata=Symbol.for("Symbol.metadata"));const s="~track",o="~encoder",a="~decoder",c="~filter",l="~getByIndex",h="~deleteByIndex",f="~changes",u="~childType",p="~onEncodeEnd",g="~onDecodeEnd",y="~descriptors",_="~__numFields",x="~__refTypeFieldIndexes",T="~__viewFieldIndexes",P="$__fieldIndexesByViewTag";let M;try{M=new TextEncoder}catch{}const D=new ArrayBuffer(8),R=new Int32Array(D),O=new Float32Array(D),S=new Float64Array(D),w=new BigInt64Array(D),U=typeof Buffer<"u"&&Buffer.byteLength?Buffer.byteLength:function(C,d){for(var m=0,v=0,b=0,V=C.length;b<V;b++)m=C.charCodeAt(b),m<128?v+=1:m<2048?v+=2:m<55296||m>=57344?v+=3:(b++,v+=4);return v};function z(C,d,m){for(var v=0,b=0,V=d.length;b<V;b++)v=d.charCodeAt(b),v<128?C[m.offset++]=v:v<2048?(C[m.offset]=192|v>>6,C[m.offset+1]=128|v&63,m.offset+=2):v<55296||v>=57344?(C[m.offset]=224|v>>12,C[m.offset+1]=128|v>>6&63,C[m.offset+2]=128|v&63,m.offset+=3):(b++,v=65536+((v&1023)<<10|d.charCodeAt(b)&1023),C[m.offset]=240|v>>18,C[m.offset+1]=128|v>>12&63,C[m.offset+2]=128|v>>6&63,C[m.offset+3]=128|v&63,m.offset+=4)}function I(C,d,m){C[m.offset++]=d&255}function H(C,d,m){C[m.offset++]=d&255}function A(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255}function N(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255}function F(C,d,m){C[m.offset++]=d&255,C[m.offset++]=d>>8&255,C[m.offset++]=d>>16&255,C[m.offset++]=d>>24&255}function G(C,d,m){const v=d>>24,b=d>>16,V=d>>8,$=d;C[m.offset++]=$&255,C[m.offset++]=V&255,C[m.offset++]=b&255,C[m.offset++]=v&255}function Z(C,d,m){const v=Math.floor(d/Math.pow(2,32)),b=d>>>0;G(C,b,m),G(C,v,m)}function te(C,d,m){const v=d/Math.pow(2,32)>>0,b=d>>>0;G(C,b,m),G(C,v,m)}function ue(C,d,m){w[0]=BigInt.asIntN(64,d),F(C,R[0],m),F(C,R[1],m)}function _e(C,d,m){w[0]=BigInt.asIntN(64,d),F(C,R[0],m),F(C,R[1],m)}function Fe(C,d,m){O[0]=d,F(C,R[0],m)}function ke(C,d,m){S[0]=d,F(C,R[0],m),F(C,R[1],m)}function it(C,d,m){C[m.offset++]=d?1:0}function he(C,d,m){d||(d="");let v=U(d,"utf8"),b=0;if(v<32)C[m.offset++]=v|160,b=1;else if(v<256)C[m.offset++]=217,C[m.offset++]=v%255,b=2;else if(v<65536)C[m.offset++]=218,N(C,v,m),b=3;else if(v<4294967296)C[m.offset++]=219,G(C,v,m),b=5;else throw new Error("String too long");return z(C,d,m),b+v}function we(C,d,m){if(isNaN(d))return we(C,0,m);if(isFinite(d)){if(d!==(d|0))return Math.abs(d)<=34028235e31&&(O[0]=d,Math.abs(Math.abs(O[0])-Math.abs(d))<1e-4)?(C[m.offset++]=202,Fe(C,d,m),5):(C[m.offset++]=203,ke(C,d,m),9)}else return we(C,d>0?Number.MAX_SAFE_INTEGER:-Number.MAX_SAFE_INTEGER,m);return d>=0?d<128?(C[m.offset++]=d&255,1):d<256?(C[m.offset++]=204,C[m.offset++]=d&255,2):d<65536?(C[m.offset++]=205,N(C,d,m),3):d<4294967296?(C[m.offset++]=206,G(C,d,m),5):(C[m.offset++]=207,te(C,d,m),9):d>=-32?(C[m.offset++]=224|d+32,1):d>=-128?(C[m.offset++]=208,I(C,d,m),2):d>=-32768?(C[m.offset++]=209,A(C,d,m),3):d>=-2147483648?(C[m.offset++]=210,F(C,d,m),5):(C[m.offset++]=211,Z(C,d,m),9)}const ve={int8:I,uint8:H,int16:A,uint16:N,int32:F,uint32:G,int64:Z,uint64:te,bigint64:ue,biguint64:_e,float32:Fe,float64:ke,boolean:it,string:he,number:we,utf8Write:z,utf8Length:U},je=new ArrayBuffer(8),et=new Int32Array(je),tt=new Float32Array(je),Ke=new Float64Array(je),nt=new BigUint64Array(je),st=new BigInt64Array(je);function He(C,d,m){m>C.length-d.offset&&(m=C.length-d.offset);for(var v="",b=0,V=d.offset,$=d.offset+m;V<$;V++){var ee=C[V];if((ee&128)===0){v+=String.fromCharCode(ee);continue}if((ee&224)===192){v+=String.fromCharCode((ee&31)<<6|C[++V]&63);continue}if((ee&240)===224){v+=String.fromCharCode((ee&15)<<12|(C[++V]&63)<<6|(C[++V]&63)<<0);continue}if((ee&248)===240){b=(ee&7)<<18|(C[++V]&63)<<12|(C[++V]&63)<<6|(C[++V]&63)<<0,b>=65536?(b-=65536,v+=String.fromCharCode((b>>>10)+55296,(b&1023)+56320)):v+=String.fromCharCode(b);continue}console.error("decode.utf8Read(): Invalid byte "+ee+" at offset "+V+". Skip to end of string: "+(d.offset+m));break}return d.offset+=m,v}function pt(C,d){return Tt(C,d)<<24>>24}function Tt(C,d){return C[d.offset++]}function zt(C,d){return qt(C,d)<<16>>16}function qt(C,d){return C[d.offset++]|C[d.offset++]<<8}function Dt(C,d){return C[d.offset++]|C[d.offset++]<<8|C[d.offset++]<<16|C[d.offset++]<<24}function Lt(C,d){return Dt(C,d)>>>0}function Zt(C,d){return et[0]=Dt(C,d),tt[0]}function Y(C,d){return et[0]=Dt(C,d),et[1]=Dt(C,d),Ke[0]}function pn(C,d){const m=Lt(C,d);return Dt(C,d)*Math.pow(2,32)+m}function At(C,d){const m=Lt(C,d);return Lt(C,d)*Math.pow(2,32)+m}function k(C,d){return et[0]=Dt(C,d),et[1]=Dt(C,d),st[0]}function E(C,d){return et[0]=Dt(C,d),et[1]=Dt(C,d),nt[0]}function j(C,d){return Tt(C,d)>0}function se(C,d){const m=C[d.offset++];let v;return m<192?v=m&31:m===217?v=Tt(C,d):m===218?v=qt(C,d):m===219&&(v=Lt(C,d)),He(C,d,v)}function ce(C,d){const m=C[d.offset++];if(m<128)return m;if(m===202)return Zt(C,d);if(m===203)return Y(C,d);if(m===204)return Tt(C,d);if(m===205)return qt(C,d);if(m===206)return Lt(C,d);if(m===207)return At(C,d);if(m===208)return pt(C,d);if(m===209)return zt(C,d);if(m===210)return Dt(C,d);if(m===211)return pn(C,d);if(m>223)return(255-m+1)*-1}function be(C,d){const m=C[d.offset];return m<192&&m>160||m===217||m===218||m===219}const Se={utf8Read:He,int8:pt,uint8:Tt,int16:zt,uint16:qt,int32:Dt,uint32:Lt,float32:Zt,float64:Y,int64:pn,uint64:At,bigint64:k,biguint64:E,boolean:j,string:se,number:ce,stringCheck:be},fe={},me=new Map;function Me(C,d){d.constructor&&(me.set(d.constructor,C),fe[C]=d),d.encode&&(ve[C]=d.encode),d.decode&&(Se[C]=d.decode)}function qe(C){return fe[C]}function Ie(C){for(const d in C)Me(d,C[d]);return d=>q(d)}const mn=class mn{static register(d){const m=Object.getPrototypeOf(d);if(m!==Ge){let v=mn.inheritedTypes.get(m);v||(v=new Set,mn.inheritedTypes.set(m,v)),v.add(d)}}static cache(d){let m=mn.cachedContexts.get(d);return m||(m=new mn(d),mn.cachedContexts.set(d,m)),m}constructor(d){this.types={},this.schemas=new Map,this.hasFilters=!1,this.parentFiltered={},d&&this.discoverTypes(d)}has(d){return this.schemas.has(d)}get(d){return this.types[d]}add(d,m=this.schemas.size){return this.schemas.has(d)?!1:(this.types[m]=d,d[Symbol.metadata]===void 0&&Ze.initialize(d),this.schemas.set(d,m),!0)}getTypeId(d){return this.schemas.get(d)}discoverTypes(d,m,v,b){var ee,Q;if(b&&this.registerFilteredByParent(d,m,v),!this.add(d))return;(ee=mn.inheritedTypes.get(d))==null||ee.forEach(ae=>{this.discoverTypes(ae,m,v,b)});let V=d;for(;(V=Object.getPrototypeOf(V))&&V!==Ge&&V!==Function.prototype;)this.discoverTypes(V);const $=d[Q=Symbol.metadata]??(d[Q]={});$[T]&&(this.hasFilters=!0);for(const ae in $){const pe=ae,de=$[pe].type,ge=$[pe].tag!==void 0;if(typeof de!="string")if(typeof de=="function")this.discoverTypes(de,d,pe,b||ge);else{const Ue=Object.values(de)[0];if(typeof Ue=="string")continue;this.discoverTypes(Ue,d,pe,b||ge)}}}registerFilteredByParent(d,m,v){let V=`${this.schemas.get(d)??this.schemas.size}`;m&&(V+=`-${this.schemas.get(m)}`),V+=`-${v}`,this.parentFiltered[V]=!0}debug(){let d="";for(const m in this.parentFiltered){const v=m.split("-").map(Number),b=v.pop();d+=`
		`,d+=`${m}: ${v.reverse().map((V,$)=>{const ee=this.types[V],Q=ee[Symbol.metadata];let ae=ee.name;return $===0&&(ae+=`[${Q[b].name}]`),`${ae}`}).join(" -> ")}`}return`TypeContext ->
	Schema types: ${this.schemas.size}
	hasFilters: ${this.hasFilters}
	parentFiltered:${d}`}};mn.inheritedTypes=new Map,mn.cachedContexts=new Map;let Ee=mn;function $e(C){if(Array.isArray(C))return{array:$e(C[0])};if(typeof C.type<"u")return C.type;if(rt(C))return Object.keys(C).every(d=>typeof C[d]=="string")?"string":"number";if(typeof C=="object"&&C!==null){const d=Object.keys(C).find(m=>fe[m]!==void 0);if(d)return C[d]=$e(C[d]),C}return C}function rt(C){if(typeof C=="function"&&C[Symbol.metadata])return!1;const d=Object.keys(C),m=d.filter(v=>/\d+/.test(v));return!!(m.length>0&&m.length===d.length/2&&C[C[m[0]]]==m[0]||d.length>0&&d.every(v=>typeof C[v]=="string"&&C[v]===v))}const Ze={addField(C,d,m,v,b){if(d>64)throw new Error(`Can't define field '${m}'.
Schema instances may only have up to 64 fields.`);C[d]=Object.assign(C[d]||{},{type:$e(v),index:d,name:m}),Object.defineProperty(C,y,{value:C[y]||{},enumerable:!1,configurable:!0}),b?(C[y][m]=b,C[y][`_${m}`]={value:void 0,writable:!0,enumerable:!1,configurable:!0}):C[y][m]={value:void 0,writable:!0,enumerable:!0,configurable:!0},Object.defineProperty(C,_,{value:d,enumerable:!1,configurable:!0}),Object.defineProperty(C,m,{value:d,enumerable:!1,configurable:!0}),typeof C[d].type!="string"&&(C[x]===void 0&&Object.defineProperty(C,x,{value:[],enumerable:!1,configurable:!0}),C[x].push(d))},setTag(C,d,m){const v=C[d],b=C[v];b.tag=m,C[T]||(Object.defineProperty(C,T,{value:[],enumerable:!1,configurable:!0}),Object.defineProperty(C,P,{value:{},enumerable:!1,configurable:!0})),C[T].push(v),C[P][m]||(C[P][m]=[]),C[P][m].push(v)},setFields(C,d){const m=C.prototype.constructor;Ee.register(m);const v=Object.getPrototypeOf(m),b=v&&v[Symbol.metadata],V=Ze.initialize(m);m[s]||(m[s]=Ge[s]),m[o]||(m[o]=Ge[o]),m[a]||(m[a]=Ge[a]),m.prototype.toJSON||(m.prototype.toJSON=Ge.prototype.toJSON);let $=V[_]??(b&&b[_])??-1;$++;for(const ee in d){const Q=$e(d[ee]),ae=typeof Object.keys(Q)[0]=="string"&&qe(Object.keys(Q)[0]),pe=ae?Object.values(Q)[0]:Q;Ze.addField(V,$,ee,Q,oe(`_${ee}`,$,pe,ae)),$++}return C},isDeprecated(C,d){return C[d].deprecated===!0},init(C){const d={};C[Symbol.metadata]=d,Object.defineProperty(d,_,{value:0,enumerable:!1,configurable:!0})},initialize(C){const d=Object.getPrototypeOf(C),m=d[Symbol.metadata];let v=C[Symbol.metadata]??Object.create(null);return d!==Ge&&v===m&&(v=Object.create(null),m&&(Object.setPrototypeOf(v,m),Object.defineProperty(v,_,{value:m[_],enumerable:!1,configurable:!0,writable:!0}),m[T]!==void 0&&(Object.defineProperty(v,T,{value:[...m[T]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(v,P,{value:{...m[P]},enumerable:!1,configurable:!0,writable:!0})),m[x]!==void 0&&Object.defineProperty(v,x,{value:[...m[x]],enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(v,y,{value:{...m[y]},enumerable:!1,configurable:!0,writable:!0}))),Object.defineProperty(C,Symbol.metadata,{value:v,writable:!1,configurable:!0}),v},isValidInstance(C){return C.constructor[Symbol.metadata]&&Object.prototype.hasOwnProperty.call(C.constructor[Symbol.metadata],_)},getFields(C){const d=C[Symbol.metadata],m={};for(let v=0;v<=d[_];v++)m[d[v].name]=d[v].type;return m},hasViewTagAtIndex(C,d){var m;return(m=C==null?void 0:C[T])==null?void 0:m.includes(d)}};function W(C){return{indexes:{},operations:[],queueRootNode:C}}function Te(){return{next:void 0,tail:void 0}}function le(C,d){const m=C.indexes[d];m===void 0?C.indexes[d]=C.operations.push(d)-1:C.operations[m]=d}function Re(C,d){var v;let m=C.indexes[d];m===void 0&&(m=Object.values(C.indexes).at(-1),d=(v=Object.entries(C.indexes).find(([b,V])=>V===m))==null?void 0:v[0]),C.operations[m]=void 0,delete C.indexes[d]}class Ce{constructor(d){var m;this.isFiltered=!1,this.indexedOperations={},this.changes={indexes:{},operations:[]},this.allChanges={indexes:{},operations:[]},this.isNew=!0,this.ref=d,this.metadata=d.constructor[Symbol.metadata],(m=this.metadata)!=null&&m[T]&&(this.allFilteredChanges={indexes:{},operations:[]},this.filteredChanges={indexes:{},operations:[]})}setRoot(d){this.root=d;const m=this.root.add(this);this.checkIsFiltered(this.parent,this.parentIndex,m),m&&this.forEachChild((v,b)=>{v.root!==d?v.setRoot(d):d.add(v)})}setParent(d,m,v){if(this.addParent(d,v),!m)return;const b=m.add(this);m!==this.root&&(this.root=m,this.checkIsFiltered(d,v,b)),b&&this.forEachChild((V,$)=>{if(V.root===m){m.add(V),m.moveNextToParent(V);return}V.setParent(this.ref,m,$)})}forEachChild(d){var m,v;if(this.ref[u]){if(typeof this.ref[u]!="string")for(const[b,V]of this.ref.entries())V&&d(V[f],((m=this.indexes)==null?void 0:m[b])??b)}else for(const b of((v=this.metadata)==null?void 0:v[x])??[]){const V=this.metadata[b],$=this.ref[V.name];$&&d($[f],b)}}operation(d){var m,v;this.filteredChanges!==void 0?(this.filteredChanges.operations.push(-d),(m=this.root)==null||m.enqueueChangeTree(this,"filteredChanges")):(this.changes.operations.push(-d),(v=this.root)==null||v.enqueueChangeTree(this,"changes"))}change(d,m=t.OPERATION.ADD){var $,ee,Q;const v=this.isFiltered||((ee=($=this.metadata)==null?void 0:$[d])==null?void 0:ee.tag)!==void 0,b=v?this.filteredChanges:this.changes,V=this.indexedOperations[d];if(!V||V===t.OPERATION.DELETE){const ae=V&&V===t.OPERATION.DELETE?t.OPERATION.DELETE_AND_ADD:m;this.indexedOperations[d]=ae}le(b,d),v?(le(this.allFilteredChanges,d),this.root&&(this.root.enqueueChangeTree(this,"filteredChanges"),this.root.enqueueChangeTree(this,"allFilteredChanges"))):(le(this.allChanges,d),(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"))}shiftChangeIndexes(d){const m=this.isFiltered?this.filteredChanges:this.changes,v={},b={};for(const V in this.indexedOperations)v[Number(V)+d]=this.indexedOperations[V],b[Number(V)+d]=m.indexes[V];this.indexedOperations=v,m.indexes=b,m.operations=m.operations.map(V=>V+d)}shiftAllChangeIndexes(d,m=0){this.filteredChanges!==void 0?(this._shiftAllChangeIndexes(d,m,this.allFilteredChanges),this._shiftAllChangeIndexes(d,m,this.allChanges)):this._shiftAllChangeIndexes(d,m,this.allChanges)}_shiftAllChangeIndexes(d,m=0,v){const b={};let V=0;for(const $ in v.indexes)b[V++]=v.indexes[$];v.indexes=b;for(let $=0;$<v.operations.length;$++){const ee=v.operations[$];ee>m&&(v.operations[$]=ee+d)}}indexedOperation(d,m,v=d){var b,V;this.indexedOperations[d]=m,this.filteredChanges!==void 0?(le(this.allFilteredChanges,v),le(this.filteredChanges,d),(b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges")):(le(this.allChanges,v),le(this.changes,d),(V=this.root)==null||V.enqueueChangeTree(this,"changes"))}getType(d){return this.ref[u]||this.metadata[d].type}getChange(d){return this.indexedOperations[d]}getValue(d,m=!1){return this.ref[l](d,m)}delete(d,m,v=d){var $,ee,Q;if(d===void 0){try{throw new Error(`@colyseus/schema ${this.ref.constructor.name}: trying to delete non-existing index '${d}'`)}catch(ae){console.warn(ae)}return}const b=this.filteredChanges!==void 0?this.filteredChanges:this.changes;this.indexedOperations[d]=m??t.OPERATION.DELETE,le(b,d),Re(this.allChanges,v);const V=this.getValue(d);return V&&V[f]&&(($=this.root)==null||$.remove(V[f])),this.filteredChanges!==void 0?(Re(this.allFilteredChanges,v),(ee=this.root)==null||ee.enqueueChangeTree(this,"filteredChanges")):(Q=this.root)==null||Q.enqueueChangeTree(this,"changes"),V}endEncode(d){var m,v;this.indexedOperations={},this[d]=W(),(v=(m=this.ref)[p])==null||v.call(m),this.isNew=!1}discard(d=!1){var m,v;(v=(m=this.ref)[p])==null||v.call(m),this.indexedOperations={},this.changes=W(this.changes.queueRootNode),this.filteredChanges!==void 0&&(this.filteredChanges=W(this.filteredChanges.queueRootNode)),d&&(this.allChanges=W(this.allChanges.queueRootNode),this.allFilteredChanges!==void 0&&(this.allFilteredChanges=W(this.allFilteredChanges.queueRootNode)))}discardAll(){const d=Object.keys(this.indexedOperations);for(let m=0,v=d.length;m<v;m++){const b=this.getValue(Number(d[m]));b&&b[f]&&b[f].discardAll()}this.discard()}get changed(){return Object.entries(this.indexedOperations).length>0}checkIsFiltered(d,m,v){var b,V,$,ee;this.root.types.hasFilters&&(this._checkFilteredByParent(d,m),this.filteredChanges!==void 0&&((b=this.root)==null||b.enqueueChangeTree(this,"filteredChanges"),v&&((V=this.root)==null||V.enqueueChangeTree(this,"allFilteredChanges")))),this.isFiltered||(($=this.root)==null||$.enqueueChangeTree(this,"changes"),v&&((ee=this.root)==null||ee.enqueueChangeTree(this,"allChanges")))}_checkFilteredByParent(d,m){if(!d)return;const v=Ze.isValidInstance(this.ref)?this.ref.constructor:this.ref[u];let b,V=!Ze.isValidInstance(d);V?(b=d[f],d=b.parent,m=b.parentIndex):b=d[f];const $=d.constructor;let ee=`${this.root.types.getTypeId(v)}`;$&&(ee+=`-${this.root.types.schemas.get($)}`),ee+=`-${m}`;const Q=Ze.hasViewTagAtIndex($==null?void 0:$[Symbol.metadata],m);this.isFiltered=d[f].isFiltered||this.root.types.parentFiltered[ee]||Q,this.isFiltered&&(this.isVisibilitySharedWithParent=b.isFiltered&&typeof v!="string"&&!Q&&V,this.filteredChanges||(this.filteredChanges=W(),this.allFilteredChanges=W()),this.changes.operations.length>0&&(this.changes.operations.forEach(ae=>le(this.filteredChanges,ae)),this.allChanges.operations.forEach(ae=>le(this.allFilteredChanges,ae)),this.changes=W(),this.allChanges=W()))}get parent(){var d;return(d=this.parentChain)==null?void 0:d.ref}get parentIndex(){var d;return(d=this.parentChain)==null?void 0:d.index}addParent(d,m){if(this.hasParent((v,b)=>v[f]===d[f])){this.parentChain.index=m;return}this.parentChain={ref:d,index:m,next:this.parentChain}}removeParent(d=this.parent){let m=this.parentChain,v=null;for(;m;){if(m.ref[f]===d[f])return v?v.next=m.next:this.parentChain=m.next,!0;v=m,m=m.next}return this.parentChain===void 0}findParent(d){let m=this.parentChain;for(;m;){if(d(m.ref,m.index))return m;m=m.next}}hasParent(d){return this.findParent(d)!==void 0}getAllParents(){const d=[];let m=this.parentChain;for(;m;)d.push({ref:m.ref,index:m.index}),m=m.next;return d}}function xe(C,d,m,v,b,V){var $;typeof m=="string"?($=ve[m])==null||$.call(ve,d,v,V):m[Symbol.metadata]!==void 0?(ve.number(d,v[f].refId,V),(b&t.OPERATION.ADD)===t.OPERATION.ADD&&C.tryEncodeTypeId(d,m,v.constructor,V)):ve.number(d,v[f].refId,V)}const Ye=function(C,d,m,v,b,V,$,ee,Q){if(d[V.offset++]=(v|b)&255,b===t.OPERATION.DELETE)return;const ae=m.ref,pe=Q[v];xe(C,d,Q[v].type,ae[pe.name],b,V)},Ve=function(C,d,m,v,b,V){if(d[V.offset++]=b&255,ve.number(d,v,V),b===t.OPERATION.DELETE)return;const $=m.ref;if((b&t.OPERATION.ADD)===t.OPERATION.ADD&&typeof $.set=="function"){const ae=m.ref.$indexes.get(v);ve.string(d,ae,V)}const ee=$[u],Q=$[l](v);xe(C,d,ee,Q,b,V)},Wt=function(C,d,m,v,b,V,$,ee){const Q=m.ref,ae=ee&&m.isFiltered&&typeof m.getType(v)!="string";let pe;if(ae){const Ue=Q.tmpItems[v];if(!Ue)return;pe=Ue[f].refId,b===t.OPERATION.DELETE?b=t.OPERATION.DELETE_BY_REFID:b===t.OPERATION.ADD&&(b=t.OPERATION.ADD_BY_REFID)}else pe=v;if(d[V.offset++]=b&255,ve.number(d,pe,V),b===t.OPERATION.DELETE||b===t.OPERATION.DELETE_BY_REFID)return;const de=m.getType(v),ge=m.getValue(v,$);xe(C,d,de,ge,b,V)},Nt=-1;function Hn(C,d,m,v,b,V,$,ee){const Q=C.root,ae=m[l](v);let pe;if((d&t.OPERATION.DELETE)===t.OPERATION.DELETE){const de=Q.refIds.get(ae);de!==void 0&&Q.removeRef(de),d!==t.OPERATION.DELETE_AND_ADD&&m[h](v),pe=void 0}if(d!==t.OPERATION.DELETE)if(Ge.is(b)){const de=Se.number(V,$);if(pe=Q.refs.get(de),(d&t.OPERATION.ADD)===t.OPERATION.ADD){const ge=C.getInstanceType(V,$,b);pe||(pe=C.createInstanceOfType(ge)),Q.addRef(de,pe,pe!==ae||d===t.OPERATION.DELETE_AND_ADD&&pe===ae)}}else if(typeof b=="string")pe=Se[b](V,$);else{const de=qe(Object.keys(b)[0]),ge=Se.number(V,$),Ue=Q.refs.has(ge)?ae||Q.refs.get(ge):new de.constructor;if(pe=Ue.clone(!0),pe[u]=Object.values(b)[0],ae){let ze=Q.refIds.get(ae);if(ze!==void 0&&ge!==ze){const Ae=ae.entries();let ye;for(;(ye=Ae.next())&&!ye.done;){const[We,Pt]=ye.value;typeof Pt=="object"&&(ze=Q.refIds.get(Pt),Q.removeRef(ze)),ee.push({ref:ae,refId:ze,op:t.OPERATION.DELETE,field:We,value:void 0,previousValue:Pt})}}}Q.addRef(ge,pe,Ue!==ae||d===t.OPERATION.DELETE_AND_ADD&&Ue===ae)}return{value:pe,previousValue:ae}}const Yn=function(C,d,m,v,b){const V=d[m.offset++],$=v.constructor[Symbol.metadata],ee=V>>6<<6,Q=V%(ee||255),ae=$[Q];if(ae===void 0)return console.warn("@colyseus/schema: field not defined at",{index:Q,ref:v.constructor.name,metadata:$}),Nt;const{value:pe,previousValue:de}=Hn(C,ee,v,Q,ae.type,d,m,b);pe!=null&&(v[ae.name]=pe),de!==pe&&b.push({ref:v,refId:C.currentRefId,op:ee,field:ae.name,value:pe,previousValue:de})},ss=function(C,d,m,v,b){const V=d[m.offset++];if(V===t.OPERATION.CLEAR){C.removeChildRefs(v,b),v.clear();return}const $=Se.number(d,m),ee=v[u];let Q;(V&t.OPERATION.ADD)===t.OPERATION.ADD?typeof v.set=="function"?(Q=Se.string(d,m),v.setIndex($,Q)):Q=$:Q=v.getIndex($);const{value:ae,previousValue:pe}=Hn(C,V,v,$,ee,d,m,b);if(ae!=null){if(typeof v.set=="function")v.$items.set(Q,ae);else if(typeof v.$setAt=="function")v.$setAt($,ae,V);else if(typeof v.add=="function"){const de=v.add(ae);typeof de=="number"&&v.setIndex(de,de)}}pe!==ae&&b.push({ref:v,refId:C.currentRefId,op:V,field:"",dynamicIndex:Q,value:ae,previousValue:pe})},Sc=function(C,d,m,v,b){let V=d[m.offset++],$;if(V===t.OPERATION.CLEAR){C.removeChildRefs(v,b),v.clear();return}else if(V===t.OPERATION.REVERSE){v.reverse();return}else if(V===t.OPERATION.DELETE_BY_REFID){const de=Se.number(d,m),ge=C.root.refs.get(de);$=v.findIndex(Ue=>Ue===ge),v[h]($),b.push({ref:v,refId:C.currentRefId,op:t.OPERATION.DELETE,field:"",dynamicIndex:$,value:void 0,previousValue:ge});return}else if(V===t.OPERATION.ADD_BY_REFID){const de=Se.number(d,m),ge=C.root.refs.get(de);ge&&($=v.findIndex(Ue=>Ue===ge)),($===-1||$===void 0)&&($=v.length)}else $=Se.number(d,m);const ee=v[u];let Q=$;const{value:ae,previousValue:pe}=Hn(C,V,v,$,ee,d,m,b);ae!=null&&ae!==pe&&v.$setAt($,ae,V),pe!==ae&&b.push({ref:v,refId:C.currentRefId,op:V,field:"",dynamicIndex:Q,value:ae,previousValue:pe})};class Js extends Error{}function js(C,d,m,v){let b,V=!1;switch(d){case"number":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":case"int64":case"uint64":case"float32":case"float64":b="number",isNaN(C)&&console.log(`trying to encode "NaN" in ${m.constructor.name}#${v}`);break;case"bigint64":case"biguint64":b="bigint";break;case"string":b="string",V=!0;break;case"boolean":return;default:return}if(typeof C!==b&&(!V||V&&C!==null)){let $=`'${JSON.stringify(C)}'${C&&C.constructor&&` (${C.constructor.name})`||""}`;throw new Js(`a '${b}' was expected, but ${$} was provided in ${m.constructor.name}#${v}`)}}function os(C,d,m,v){if(!(C instanceof d))throw new Js(`a '${d.name}' was expected, but '${C&&C.constructor.name}' was provided in ${m.constructor.name}#${v}`)}var Qs,eo;const Zi=(C,d)=>{const m=C.toString(),v=d.toString();return m<v?-1:m>v?1:0},_t=class _t{static[(Qs=o,eo=a,c)](d,m,v){var b;return!v||typeof d[u]=="string"||v.isChangeTreeVisible((b=d.tmpItems[m])==null?void 0:b[f])}static is(d){return Array.isArray(d)||d.array!==void 0}static from(d){return new _t(...Array.from(d))}constructor(...d){this.items=[],this.tmpItems=[],this.deletedIndexes={},this.isMovingItems=!1,Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0});const m=new Proxy(this,{get:(v,b)=>typeof b!="symbol"&&!isNaN(b)?this.items[b]:Reflect.get(v,b),set:(v,b,V)=>{var $;if(typeof b!="symbol"&&!isNaN(b)){if(V==null)v.$deleteAt(b);else{if(V[f]){os(V,v[u],v,b);const ee=v.items[b];v.isMovingItems?(ee!==void 0?V[f].isNew?v[f].indexedOperation(Number(b),t.OPERATION.MOVE_AND_ADD):(v[f].getChange(Number(b))&t.OPERATION.DELETE)===t.OPERATION.DELETE?v[f].indexedOperation(Number(b),t.OPERATION.DELETE_AND_MOVE):v[f].indexedOperation(Number(b),t.OPERATION.MOVE):V[f].isNew&&v[f].indexedOperation(Number(b),t.OPERATION.ADD),V[f].setParent(this,v[f].root,b)):v.$changeAt(Number(b),V),ee!==void 0&&(($=ee[f].root)==null||$.remove(ee[f]))}else v.$changeAt(Number(b),V);v.items[b]=V,v.tmpItems[b]=V}return!0}else return Reflect.set(v,b,V)},deleteProperty:(v,b)=>(typeof b=="number"?v.$deleteAt(b):delete v[b],!0),has:(v,b)=>typeof b!="symbol"&&!isNaN(Number(b))?Reflect.has(this.items,b):Reflect.has(v,b)});return Object.defineProperty(this,f,{value:new Ce(m),enumerable:!1,writable:!0}),d.length>0&&this.push(...d),m}set length(d){d===0?this.clear():d<this.items.length?this.splice(d,this.length-d):console.warn("ArraySchema: can't set .length to a higher value than its length.")}get length(){return this.items.length}push(...d){var b;let m=this.tmpItems.length;const v=this[f];for(let V=0,$=d.length;V<$;V++,m++){const ee=d[V];if(ee==null)return;typeof ee=="object"&&this[u]&&os(ee,this[u],this,V),v.indexedOperation(m,t.OPERATION.ADD,this.items.length),this.items.push(ee),this.tmpItems.push(ee),(b=ee[f])==null||b.setParent(this,v.root,m)}return m}pop(){let d=-1;for(let m=this.tmpItems.length-1;m>=0;m--)if(this.deletedIndexes[m]!==!0){d=m;break}if(!(d<0))return this[f].delete(d,void 0,this.items.length-1),this.deletedIndexes[d]=!0,this.items.pop()}at(d){return d<0&&(d+=this.length),this.items[d]}$changeAt(d,m){var V;if(m==null){console.error("ArraySchema items cannot be null nor undefined; Use `deleteAt(index)` instead.");return}if(this.items[d]===m)return;const v=this.items[d]!==void 0?typeof m=="object"?t.OPERATION.DELETE_AND_ADD:t.OPERATION.REPLACE:t.OPERATION.ADD,b=this[f];b.change(d,v),(V=m[f])==null||V.setParent(this,b.root,d)}$deleteAt(d,m){this[f].delete(d,m)}$setAt(d,m,v){d===0&&v===t.OPERATION.ADD&&this.items[d]!==void 0?this.items.unshift(m):v===t.OPERATION.DELETE_AND_MOVE?(this.items.splice(d,1),this.items[d]=m):this.items[d]=m}clear(){if(this.items.length===0)return;const d=this[f];d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),d.discard(!0),d.operation(t.OPERATION.CLEAR),this.items.length=0,this.tmpItems.length=0}concat(...d){return new _t(...this.items.concat(...d))}join(d){return this.items.join(d)}reverse(){return this[f].operation(t.OPERATION.REVERSE),this.items.reverse(),this.tmpItems.reverse(),this}shift(){if(this.items.length===0)return;const d=this[f],m=this.tmpItems.findIndex(b=>b===this.items[0]),v=this.items.findIndex(b=>b===this.items[0]);return d.delete(m,t.OPERATION.DELETE,v),d.shiftAllChangeIndexes(-1,v),this.deletedIndexes[m]=!0,this.items.shift()}slice(d,m){const v=new _t;return v.push(...this.items.slice(d,m)),v}sort(d=Zi){this.isMovingItems=!0;const m=this[f];return this.items.sort(d).forEach((b,V)=>m.change(V,t.OPERATION.REPLACE)),this.tmpItems.sort(d),this.isMovingItems=!1,this}splice(d,m,...v){var ae,pe,de;const b=this[f],V=this.items.length,$=this.tmpItems.length,ee=v.length,Q=[];for(let ge=0;ge<$;ge++)this.deletedIndexes[ge]!==!0&&Q.push(ge);if(V>d){m===void 0&&(m=V-d);for(let ge=d;ge<d+m;ge++){const Ue=Q[ge];b.delete(Ue,t.OPERATION.DELETE),this.deletedIndexes[Ue]=!0}}else m=0;if(ee>0){if(ee>m)throw console.error("Inserting more elements than deleting during ArraySchema#splice()"),new Error("ArraySchema#splice(): insertCount must be equal or lower than deleteCount.");for(let ge=0;ge<ee;ge++){const Ue=(Q[d]??V)+ge;b.indexedOperation(Ue,this.deletedIndexes[Ue]?t.OPERATION.DELETE_AND_ADD:t.OPERATION.ADD),(ae=v[ge][f])==null||ae.setParent(this,b.root,Ue)}}return m>ee&&b.shiftAllChangeIndexes(-(m-ee),Q[d+ee]),b.filteredChanges!==void 0?(pe=b.root)==null||pe.enqueueChangeTree(b,"filteredChanges"):(de=b.root)==null||de.enqueueChangeTree(b,"changes"),this.items.splice(d,m,...v)}unshift(...d){const m=this[f];return m.shiftChangeIndexes(d.length),m.isFiltered?le(m.filteredChanges,this.items.length):le(m.allChanges,this.items.length),d.forEach((v,b)=>{m.change(b,t.OPERATION.ADD)}),this.tmpItems.unshift(...d),this.items.unshift(...d)}indexOf(d,m){return this.items.indexOf(d,m)}lastIndexOf(d,m=this.length-1){return this.items.lastIndexOf(d,m)}every(d,m){return this.items.every(d,m)}some(d,m){return this.items.some(d,m)}forEach(d,m){return this.items.forEach(d,m)}map(d,m){return this.items.map(d,m)}filter(d,m){return this.items.filter(d,m)}reduce(d,m){return this.items.reduce(d,m)}reduceRight(d,m){return this.items.reduceRight(d,m)}find(d,m){return this.items.find(d,m)}findIndex(d,m){return this.items.findIndex(d,m)}fill(d,m,v){throw new Error("ArraySchema#fill() not implemented")}copyWithin(d,m,v){throw new Error("ArraySchema#copyWithin() not implemented")}toString(){return this.items.toString()}toLocaleString(){return this.items.toLocaleString()}[Symbol.iterator](){return this.items[Symbol.iterator]()}static get[Symbol.species](){return _t}entries(){return this.items.entries()}keys(){return this.items.keys()}values(){return this.items.values()}includes(d,m){return this.items.includes(d,m)}flatMap(d,m){throw new Error("ArraySchema#flatMap() is not supported.")}flat(d){throw new Error("ArraySchema#flat() is not supported.")}findLast(){return this.items.findLast.apply(this.items,arguments)}findLastIndex(...d){return this.items.findLastIndex.apply(this.items,arguments)}with(d,m){const v=this.items.slice();return d<0&&(d+=this.length),v[d]=m,new _t(...v)}toReversed(){return this.items.slice().reverse()}toSorted(d){return this.items.slice().sort(d)}toSpliced(d,m,...v){return this.items.toSpliced.apply(copy,arguments)}shuffle(){return this.move(d=>{let m=this.items.length;for(;m!=0;){let v=Math.floor(Math.random()*m);m--,[this[m],this[v]]=[this[v],this[m]]}})}move(d){return this.isMovingItems=!0,d(this),this.isMovingItems=!1,this}[l](d,m=!1){return m?this.items[d]:this.deletedIndexes[d]?this.items[d]:this.tmpItems[d]||this.items[d]}[h](d){this.items[d]=void 0,this.tmpItems[d]=void 0}[p](){this.tmpItems=this.items.slice(),this.deletedIndexes={}}[g](){this.items=this.items.filter(d=>d!==void 0),this.tmpItems=this.items.slice()}toArray(){return this.items.slice(0)}toJSON(){return this.toArray().map(d=>typeof d.toJSON=="function"?d.toJSON():d)}clone(d){let m;return d?(m=new _t,m.push(...this.items)):m=new _t(...this.map(v=>v[f]?v.clone():v)),m}};_t[Qs]=Wt,_t[eo]=Sc;let Cn=_t;Me("array",{constructor:Cn});var to,no;const Ct=class Ct{static[(to=o,no=a,c)](d,m,v){return!v||typeof d[u]=="string"||v.isChangeTreeVisible((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.map!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={};const m=new Ce(this);if(m.indexes={},Object.defineProperty(this,f,{value:m,enumerable:!1,writable:!0}),d)if(d instanceof Map||d instanceof Ct)d.forEach((v,b)=>this.set(b,v));else for(const v in d)this.set(v,d[v]);Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}[Symbol.iterator](){return this.$items[Symbol.iterator]()}get[Symbol.toStringTag](){return this.$items[Symbol.toStringTag]}static get[Symbol.species](){return Ct}set(d,m){var ee;if(m==null)throw new Error(`MapSchema#set('${d}', ${m}): trying to set ${m} value on '${d}'.`);typeof m=="object"&&this[u]&&os(m,this[u],this,d),d=d.toString();const v=this[f],b=m[f]!==void 0;let V,$;if(typeof v.indexes[d]<"u"){V=v.indexes[d],$=t.OPERATION.REPLACE;const Q=this.$items.get(d);if(Q===m)return;b&&($=t.OPERATION.DELETE_AND_ADD,Q!==void 0&&((ee=Q[f].root)==null||ee.remove(Q[f]))),this.deletedItems[V]&&delete this.deletedItems[V]}else V=v.indexes[_]??0,$=t.OPERATION.ADD,this.$indexes.set(V,d),v.indexes[d]=V,v.indexes[_]=V+1;return this.$items.set(d,m),v.change(V,$),b&&m[f].setParent(this,v.root,V),this}get(d){return this.$items.get(d)}delete(d){if(!this.$items.has(d))return!1;const m=this[f].indexes[d];return this.deletedItems[m]=this[f].delete(m),this.$items.delete(d)}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return this.$items.has(d)}forEach(d){this.$items.forEach(d)}entries(){return this.$items.entries()}keys(){return this.$items.keys()}values(){return this.$items.values()}get size(){return this.$items.size}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){const d=this[f];for(const m in this.deletedItems){const v=parseInt(m),b=this.$indexes.get(v);delete d.indexes[b],this.$indexes.delete(v)}this.deletedItems={}}toJSON(){const d={};return this.forEach((m,v)=>{d[v]=typeof m.toJSON=="function"?m.toJSON():m}),d}clone(d){let m;return d?m=Object.assign(new Ct,this):(m=new Ct,this.forEach((v,b)=>{v[f]?m.set(b,v.clone()):m.set(b,v)})),m}};Ct[to]=Ve,Ct[no]=ss;let Gn=Ct;Me("map",{constructor:Gn});var io,Nr;const Pn=class Pn{static[(io=o,Nr=a,c)](d,m,v){return!v||typeof d[u]=="string"||v.isChangeTreeVisible((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.collection!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ce(this),this[f].indexes={},d&&d.forEach(m=>this.add(m)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){const m=this.$refId++;return d[f]!==void 0&&d[f].setParent(this,this[f].root,m),this[f].indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,d),this[f].change(m),m}at(d){const m=Array.from(this.$items.keys())[d];return this.$items.get(m)}entries(){return this.$items.entries()}delete(d){const m=this.$items.entries();let v,b;for(;(b=m.next())&&!b.done;)if(d===b.value[1]){v=b.value[0];break}return v===void 0?!1:(this.deletedItems[v]=this[f].delete(v),this.$indexes.delete(v),this.$items.delete(v))}clear(){const d=this[f];d.discard(!0),d.indexes={},d.forEachChild((m,v)=>{var b;(b=d.root)==null||b.remove(m)}),this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){return Array.from(this.$items.values()).some(m=>m===d)}forEach(d){this.$items.forEach((m,v,b)=>d(m,v,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((m,v)=>{d.push(typeof m.toJSON=="function"?m.toJSON():m)}),d}clone(d){let m;return d?m=Object.assign(new Pn,this):(m=new Pn,this.forEach(v=>{v[f]?m.add(v.clone()):m.add(v)})),m}};Pn[io]=Ve,Pn[Nr]=ss;let Ji=Pn;Me("collection",{constructor:Ji});var ro,ia;const bt=class bt{static[(ro=o,ia=a,c)](d,m,v){return!v||typeof d[u]=="string"||v.visible.has((d[l](m)??d.deletedItems[m])[f])}static is(d){return d.set!==void 0}constructor(d){this.$items=new Map,this.$indexes=new Map,this.deletedItems={},this.$refId=0,this[f]=new Ce(this),this[f].indexes={},d&&d.forEach(m=>this.add(m)),Object.defineProperty(this,u,{value:void 0,enumerable:!1,writable:!0,configurable:!0})}add(d){var b;if(this.has(d))return!1;const m=this.$refId++;d[f]!==void 0&&d[f].setParent(this,this[f].root,m);const v=((b=this[f].indexes[m])==null?void 0:b.op)??t.OPERATION.ADD;return this[f].indexes[m]=m,this.$indexes.set(m,m),this.$items.set(m,d),this[f].change(m,v),m}entries(){return this.$items.entries()}delete(d){const m=this.$items.entries();let v,b;for(;(b=m.next())&&!b.done;)if(d===b.value[1]){v=b.value[0];break}return v===void 0?!1:(this.deletedItems[v]=this[f].delete(v),this.$indexes.delete(v),this.$items.delete(v))}clear(){const d=this[f];d.discard(!0),d.indexes={},this.$indexes.clear(),this.$items.clear(),d.operation(t.OPERATION.CLEAR)}has(d){const m=this.$items.values();let v=!1,b;for(;(b=m.next())&&!b.done;)if(d===b.value){v=!0;break}return v}forEach(d){this.$items.forEach((m,v,b)=>d(m,v,this))}values(){return this.$items.values()}get size(){return this.$items.size}[Symbol.iterator](){return this.$items.values()}setIndex(d,m){this.$indexes.set(d,m)}getIndex(d){return this.$indexes.get(d)}[l](d){return this.$items.get(this.$indexes.get(d))}[h](d){const m=this.$indexes.get(d);this.$items.delete(m),this.$indexes.delete(d)}[p](){this.deletedItems={}}toArray(){return Array.from(this.$items.values())}toJSON(){const d=[];return this.forEach((m,v)=>{d.push(typeof m.toJSON=="function"?m.toJSON():m)}),d}clone(d){let m;return d?m=Object.assign(new bt,this):(m=new bt,this.forEach(v=>{v[f]?m.add(v.clone()):m.add(v)})),m}};bt[ro]=Ve,bt[ia]=ss;let xr=bt;Me("set",{constructor:xr});const mi=-1;function Mc(C){return Ee.register(C),C}function L(C=mi){return function(d,m){var ee;const v=d.constructor,V=Object.getPrototypeOf(v)[Symbol.metadata],$=v[ee=Symbol.metadata]??(v[ee]=Object.assign({},v[Symbol.metadata],V??Object.create(null)));Ze.setTag($,m,C)}}function q(C,d){return function(m,v){const b=m.constructor;if(!C)throw new Error(`${b.name}: @type() reference provided for "${v}" is undefined. Make sure you don't have any circular dependencies.`);C=$e(C),Ee.register(b);const $=Object.getPrototypeOf(b)[Symbol.metadata],ee=Ze.initialize(b);let Q=ee[v];if(ee[Q]!==void 0){if(ee[Q].deprecated)return;if(ee[Q].type!==void 0)try{throw new Error(`@colyseus/schema: Duplicate '${v}' definition on '${b.name}'.
Check @type() annotation`)}catch(ae){const pe=ae.stack.split(`
`)[4].trim();throw new Error(`${ae.message} ${pe}`)}}else Q=ee[_]??($&&$[_])??-1,Q++;if(d&&d.manual)Ze.addField(ee,Q,v,C,{enumerable:!0,configurable:!0,writable:!0});else{const ae=typeof Object.keys(C)[0]=="string"&&qe(Object.keys(C)[0]),pe=ae?Object.values(C)[0]:C;Ze.addField(ee,Q,v,C,oe(`_${v}`,Q,pe,ae))}}}function oe(C,d,m,v){return{get:function(){return this[C]},set:function(b){var $,ee;const V=this[C]??void 0;if(b!==V){if(b!=null){v?(v.constructor===Cn&&!(b instanceof Cn)&&(b=new Cn(...b)),v.constructor===Gn&&!(b instanceof Gn)&&(b=new Gn(b)),b[u]=m):typeof m!="string"?os(b,m,this,C.substring(1)):js(b,m,this,C.substring(1));const Q=this[f];V!==void 0&&V[f]?(($=Q.root)==null||$.remove(V[f]),this.constructor[s](Q,d,t.OPERATION.DELETE_AND_ADD)):this.constructor[s](Q,d,t.OPERATION.ADD),(ee=b[f])==null||ee.setParent(this,Q.root,d)}else V!==void 0&&this[f].delete(d);this[C]=b}},enumerable:!0,configurable:!0}}function ne(C=!0){return function(d,m){var Q;const v=d.constructor,V=Object.getPrototypeOf(v)[Symbol.metadata],$=v[Q=Symbol.metadata]??(v[Q]=Object.assign({},v[Symbol.metadata],V??Object.create(null))),ee=$[m];$[ee].deprecated=!0,C&&($[y]??($[y]={}),$[y][m]={get:function(){throw new Error(`${m} is deprecated.`)},set:function(ae){},enumerable:!1,configurable:!0}),Object.defineProperty($,ee,{value:$[ee],enumerable:!1,configurable:!0})}}function re(C,d,m){for(let v in d)q(d[v],m)(C.prototype,v);return C}function De(C,d,m=Ge){const v={},b={},V={},$={};for(let pe in C){const de=C[pe];typeof de=="object"?(de.view!==void 0&&($[pe]=typeof de.view=="boolean"?mi:de.view),v[pe]=$e(de),Object.prototype.hasOwnProperty.call(de,"default")?V[pe]=de.default:Array.isArray(de)||de.array!==void 0?V[pe]=new Cn:de.map!==void 0?V[pe]=new Gn:de.collection!==void 0?V[pe]=new Ji:de.set!==void 0?V[pe]=new xr:de.type!==void 0&&Ge.is(de.type)&&(!de.type.prototype.initialize||de.type.prototype.initialize.length===0)&&(V[pe]=new de.type)):typeof de=="function"?Ge.is(de)?((!de.prototype.initialize||de.prototype.initialize.length===0)&&(V[pe]=new de),v[pe]=$e(de)):b[pe]=de:v[pe]=$e(de)}const ee=()=>{const pe={};for(const de in V){const ge=V[de];ge&&typeof ge.clone=="function"?pe[de]=ge.clone():pe[de]=ge}return pe},Q=pe=>{const de=Object.keys(v),ge={};for(const Ue in pe)de.includes(Ue)||(ge[Ue]=pe[Ue]);return ge},ae=Ze.setFields(class extends m{constructor(...pe){b.initialize&&typeof b.initialize=="function"?(super(Object.assign({},ee(),Q(pe[0]||{}))),new.target===ae&&b.initialize.apply(this,pe)):super(Object.assign({},ee(),pe[0]||{}))}},v);ae._getDefaultValues=ee,Object.assign(ae.prototype,b);for(let pe in $)L($[pe])(ae.prototype,pe);return d&&Object.defineProperty(ae,"name",{value:d}),ae.extends=(pe,de)=>De(pe,de,ae),ae}function Be(C){return new Array(C).fill(0).map((d,m)=>m===C-1?"└─ ":"   ").join("")}function Le(C){const d=C[f].root,m={ops:{},refs:[]};let v=d.changes.next;for(;v;){const b=v.changeTree;if(b===void 0){v=v.next;continue}const V=b.indexedOperations;m.refs.push(`refId#${b.refId}`);for(const $ in V){const ee=V[$],Q=t.OPERATION[ee];m.ops[Q]||(m.ops[Q]=0),m.ops[t.OPERATION[ee]]++}v=v.next}return m}var Xe,Je;const In=class In{static initialize(d){var m;Object.defineProperty(d,f,{value:new Ce(d),enumerable:!1,writable:!0}),Object.defineProperties(d,((m=d.constructor[Symbol.metadata])==null?void 0:m[y])||{})}static is(d){return typeof d[Symbol.metadata]=="object"}static[(Xe=o,Je=a,s)](d,m,v=t.OPERATION.ADD){d.change(m,v)}static[c](d,m,v){var $,ee;const V=($=d.constructor[Symbol.metadata][m])==null?void 0:$.tag;if(v===void 0)return V===void 0;if(V===void 0)return!0;if(V===mi)return v.isChangeTreeVisible(d[f]);{const Q=(ee=v.tags)==null?void 0:ee.get(d[f]);return Q&&Q.has(V)}}constructor(d){In.initialize(this),d&&Object.assign(this,d)}assign(d){return Object.assign(this,d),this}setDirty(d,m){const v=this.constructor[Symbol.metadata];this[f].change(v[v[d]].index,m)}clone(){var v;const d=Object.create(this.constructor.prototype);In.initialize(d);const m=this.constructor[Symbol.metadata];for(const b in m){const V=m[b].name;typeof this[V]=="object"&&typeof((v=this[V])==null?void 0:v.clone)=="function"?d[V]=this[V].clone():d[V]=this[V]}return d}toJSON(){const d={},m=this.constructor[Symbol.metadata];for(const v in m){const b=m[v],V=b.name;!b.deprecated&&this[V]!==null&&typeof this[V]<"u"&&(d[V]=typeof this[V].toJSON=="function"?this[V].toJSON():this[V])}return d}discardAllChanges(){this[f].discardAll()}[l](d){const m=this.constructor[Symbol.metadata];return this[m[d].name]}[h](d){const m=this.constructor[Symbol.metadata];this[m[d].name]=void 0}static debugRefIds(d,m=!1,v=0,b,V=""){var ge;const $=m?` - ${JSON.stringify(d.toJSON())}`:"",ee=d[f],Q=b?b.root.refIds.get(d):ee.refId,ae=b?b.root:ee.root,pe=((ge=ae==null?void 0:ae.refCount)==null?void 0:ge[Q])>1?` [×${ae.refCount[Q]}]`:"";let de=`${Be(v)}${V}${d.constructor.name} (refId: ${Q})${pe}${$}
`;return ee.forEachChild((Ue,ze)=>{let Ae=ze;typeof ze=="number"&&d.$indexes&&(Ae=d.$indexes.get(ze)??ze);const ye=d.forEach!==void 0&&Ae!==void 0?`["${Ae}"]: `:"";de+=this.debugRefIds(Ue.ref,m,v+1,b,ye)}),de}static debugRefIdEncodingOrder(d,m="allChanges"){let v=[],b=d[f].root[m].next;for(;b;)b.changeTree&&v.push(b.changeTree.refId),b=b.next;return v}static debugRefIdsFromDecoder(d){return this.debugRefIds(d.state,!1,0,d)}static debugChanges(d,m=!1){const v=d[f],b=m?v.allChanges:v.changes,V=m?"allChanges":"changes";let $=`${d.constructor.name} (${v.refId}) -> .${V}:
`;function ee(Q){Q.operations.filter(ae=>ae).forEach(ae=>{const pe=v.indexedOperations[ae];$+=`- [${ae}]: ${t.OPERATION[pe]} (${JSON.stringify(v.getValue(Number(ae),m))})
`})}return ee(b),!m&&v.filteredChanges&&v.filteredChanges.operations.filter(Q=>Q).length>0&&($+=`${d.constructor.name} (${v.refId}) -> .filteredChanges:
`,ee(v.filteredChanges)),m&&v.allFilteredChanges&&v.allFilteredChanges.operations.filter(Q=>Q).length>0&&($+=`${d.constructor.name} (${v.refId}) -> .allFilteredChanges:
`,ee(v.allFilteredChanges)),$}static debugChangesDeep(d,m="changes"){var pe,de;let v="";const b=d[f],V=b.root,$=new Map,ee=[];let Q=0;for(const[ge,Ue]of Object.entries(V[m])){const ze=V.changeTrees[ge];if(!ze)continue;let Ae=!1,ye=[],We=(pe=ze.parent)==null?void 0:pe[f];if(ze===b)Ae=!0;else for(;We!==void 0;){if(ye.push(We),We.ref===d){Ae=!0;break}We=(de=We.parent)==null?void 0:de[f]}Ae&&(ee.push(ze.refId),Q+=Object.keys(Ue).length,$.set(ze,ye.reverse()))}v+=`---
`,v+=`root refId: ${b.refId}
`,v+=`Total instances: ${ee.length} (refIds: ${ee.join(", ")})
`,v+=`Total changes: ${Q}
`,v+=`---
`;const ae=new WeakSet;for(const[ge,Ue]of $.entries()){Ue.forEach((Pt,Vt)=>{ae.has(Pt)||(v+=`${Be(Vt)}${Pt.ref.constructor.name} (refId: ${Pt.refId})
`,ae.add(Pt))});const ze=ge.indexedOperations,Ae=Ue.length,ye=Be(Ae),We=Ae>0?`(${ge.parentIndex}) `:"";v+=`${ye}${We}${ge.ref.constructor.name} (refId: ${ge.refId}) - changes: ${Object.keys(ze).length}
`;for(const Pt in ze){const Vt=ze[Pt];v+=`${Be(Ae+1)}${t.OPERATION[Vt]}: ${Pt}
`}}return`${v}`}};In[Xe]=Ye,In[Je]=Yn;let Ge=In;function ot(C,d,m,v){var b=arguments.length,V=b<3?d:v,$;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")V=Reflect.decorate(C,d,m,v);else for(var ee=C.length-1;ee>=0;ee--)($=C[ee])&&(V=(b<3?$(V):b>3?$(d,m,V):$(d,m))||V);return b>3&&V&&Object.defineProperty(d,m,V),V}typeof SuppressedError=="function"&&SuppressedError;class Qe{constructor(d){this.types=d,this.nextUniqueId=0,this.refCount={},this.changeTrees={},this.allChanges=Te(),this.allFilteredChanges=Te(),this.changes=Te(),this.filteredChanges=Te()}getNextUniqueId(){return this.nextUniqueId++}add(d){d.refId===void 0&&(d.refId=this.getNextUniqueId());const m=this.changeTrees[d.refId]===void 0;m&&(this.changeTrees[d.refId]=d);const v=this.refCount[d.refId];if(v===0){const b=d.allChanges.operations;let V=b.length;for(;V--;)d.indexedOperations[b[V]]=t.OPERATION.ADD,le(d.changes,V)}return this.refCount[d.refId]=(v||0)+1,m}remove(d){const m=this.refCount[d.refId]-1;return m<=0?(d.root=void 0,delete this.changeTrees[d.refId],this.removeChangeFromChangeSet("allChanges",d),this.removeChangeFromChangeSet("changes",d),d.filteredChanges&&(this.removeChangeFromChangeSet("allFilteredChanges",d),this.removeChangeFromChangeSet("filteredChanges",d)),this.refCount[d.refId]=0,d.forEachChild((v,b)=>{v.removeParent(d.ref)&&(v.parentChain===void 0||v.parentChain&&this.refCount[v.refId]>0?this.remove(v):v.parentChain&&this.moveNextToParent(v))})):(this.refCount[d.refId]=m,this.recursivelyMoveNextToParent(d)),m}recursivelyMoveNextToParent(d){this.moveNextToParent(d),d.forEachChild((m,v)=>this.recursivelyMoveNextToParent(m))}moveNextToParent(d){d.filteredChanges?(this.moveNextToParentInChangeTreeList("filteredChanges",d),this.moveNextToParentInChangeTreeList("allFilteredChanges",d)):(this.moveNextToParentInChangeTreeList("changes",d),this.moveNextToParentInChangeTreeList("allChanges",d))}moveNextToParentInChangeTreeList(d,m){var ae;const v=this[d],b=m[d].queueRootNode;if(!b)return;const V=m.parent;if(!V||!V[f])return;const $=(ae=V[f][d])==null?void 0:ae.queueRootNode;if(!$||$===b)return;const ee=$.position;b.position>ee||(b.prev?b.prev.next=b.next:v.next=b.next,b.next?b.next.prev=b.prev:v.tail=b.prev,b.prev=$,b.next=$.next,$.next?$.next.prev=b:v.tail=b,$.next=b,this.updatePositionsAfterMove(v,b,ee+1))}enqueueChangeTree(d,m,v=d[m].queueRootNode){v||(d[m].queueRootNode=this.addToChangeTreeList(this[m],d))}addToChangeTreeList(d,m){const v={changeTree:m,next:void 0,prev:void 0,position:d.tail?d.tail.position+1:0};return d.next?(v.prev=d.tail,d.tail.next=v,d.tail=v):(d.next=v,d.tail=v),v}updatePositionsAfterRemoval(d,m){let v=d.next,b=0;for(;v;)b>=m&&(v.position=b),v=v.next,b++}updatePositionsAfterMove(d,m,v){let b=d.next,V=0;for(;b;)b.position=V,b=b.next,V++}removeChangeFromChangeSet(d,m){const v=this[d],b=m[d].queueRootNode;if(b&&b.changeTree===m){const V=b.position;return b.prev?b.prev.next=b.next:v.next=b.next,b.next?b.next.prev=b.prev:v.tail=b.prev,this.updatePositionsAfterRemoval(v,V),m[d].queueRootNode=void 0,!0}return!1}}const gi=class gi{constructor(d){this.sharedBuffer=Buffer.allocUnsafe(gi.BUFFER_SIZE),this.context=Ee.cache(d.constructor),this.root=new Qe(this.context),this.setState(d)}setState(d){this.state=d,this.state[f].setRoot(this.root)}encode(d={offset:0},m,v=this.sharedBuffer,b="changes",V=b==="allChanges",$=d.offset){const ee=m!==void 0,Q=this.state[f];let ae=this.root[b];for(;ae=ae.next;){const pe=ae.changeTree;if(ee){if(!m.isChangeTreeVisible(pe)){m.invisible.add(pe);continue}m.invisible.delete(pe)}const de=pe[b],ge=pe.ref,Ue=de.operations.length;if(Ue===0)continue;const ze=ge.constructor,Ae=ze[o],ye=ze[c],We=ze[Symbol.metadata];(ee||d.offset>$||pe!==Q)&&(v[d.offset++]=255,ve.number(v,pe.refId,d));for(let Pt=0;Pt<Ue;Pt++){const Vt=de.operations[Pt];if(Vt<0){v[d.offset++]=Math.abs(Vt)&255;continue}const Dn=V?t.OPERATION.ADD:pe.indexedOperations[Vt];Vt===void 0||Dn===void 0||ye&&!ye(ge,Vt,m)||Ae(this,v,pe,Vt,Dn,d,V,ee,We)}}if(d.offset>v.byteLength){const pe=Math.ceil(d.offset/(Buffer.poolSize??8192))*(Buffer.poolSize??8192);return console.warn(`@colyseus/schema buffer overflow. Encoded state is higher than default BUFFER_SIZE. Use the following to increase default BUFFER_SIZE:

    import { Encoder } from "@colyseus/schema";
    Encoder.BUFFER_SIZE = ${Math.round(pe/1024)} * 1024; // ${Math.round(pe/1024)} KB
`),v=Buffer.alloc(pe,v),v===this.sharedBuffer&&(this.sharedBuffer=v),this.encode({offset:$},m,v,b,V)}else return v.subarray(0,d.offset)}encodeAll(d={offset:0},m=this.sharedBuffer){return this.encode(d,void 0,m,"allChanges",!0)}encodeAllView(d,m,v,b=this.sharedBuffer){const V=v.offset;return this.encode(v,d,b,"allFilteredChanges",!0,V),Buffer.concat([b.subarray(0,m),b.subarray(V,v.offset)])}encodeView(d,m,v,b=this.sharedBuffer){const V=v.offset;for(const[$,ee]of d.changes){const Q=this.root.changeTrees[$];if(Q===void 0){d.changes.delete($);continue}const ae=Object.keys(ee);if(ae.length===0)continue;const de=Q.ref.constructor,ge=de[o],Ue=de[Symbol.metadata];b[v.offset++]=255,ve.number(b,Q.refId,v);for(let ze=0,Ae=ae.length;ze<Ae;ze++){const ye=Number(ae[ze]),Pt=Q.ref[l](ye)!==void 0&&ee[ye]||t.OPERATION.DELETE;ge(this,b,Q,ye,Pt,v,!1,!0,Ue)}}return d.changes.clear(),this.encode(v,d,b,"filteredChanges",!1,V),Buffer.concat([b.subarray(0,m),b.subarray(V,v.offset)])}discardChanges(){let d=this.root.changes.next;for(;d;)d.changeTree.endEncode("changes"),d=d.next;for(this.root.changes=Te(),d=this.root.filteredChanges.next;d;)d.changeTree.endEncode("filteredChanges"),d=d.next;this.root.filteredChanges=Te()}tryEncodeTypeId(d,m,v,b){const V=this.context.getTypeId(m),$=this.context.getTypeId(v);if($===void 0){console.warn(`@colyseus/schema WARNING: Class "${v.name}" is not registered on TypeRegistry - Please either tag the class with @entity or define a @type() field.`);return}V!==$&&(d[b.offset++]=213,ve.number(d,$,b))}get hasChanges(){return this.root.changes.next!==void 0||this.root.filteredChanges.next!==void 0}};gi.BUFFER_SIZE=typeof Buffer<"u"&&Buffer.poolSize||8*1024;let Et=gi;function Yt(C,d){if(d===-1||d>=C.length)return!1;const m=C.length-1;for(let v=d;v<m;v++)C[v]=C[v+1];return C.length=m,!0}class $t extends Error{constructor(d){super(d),this.name="DecodingWarning"}}class Ot{constructor(){this.refs=new Map,this.refIds=new WeakMap,this.refCount={},this.deletedRefs=new Set,this.callbacks={},this.nextUniqueId=0}getNextUniqueId(){return this.nextUniqueId++}addRef(d,m,v=!0){this.refs.set(d,m),this.refIds.set(m,d),v&&(this.refCount[d]=(this.refCount[d]||0)+1),this.deletedRefs.has(d)&&this.deletedRefs.delete(d)}removeRef(d){const m=this.refCount[d];if(m===void 0){try{throw new $t("trying to remove refId that doesn't exist: "+d)}catch(v){console.warn(v)}return}if(m===0){try{const v=this.refs.get(d);throw new $t(`trying to remove refId '${d}' with 0 refCount (${v.constructor.name}: ${JSON.stringify(v)})`)}catch(v){console.warn(v)}return}(this.refCount[d]=m-1)<=0&&this.deletedRefs.add(d)}clearRefs(){this.refs.clear(),this.deletedRefs.clear(),this.callbacks={},this.refCount={}}garbageCollectDeletedRefs(){this.deletedRefs.forEach(d=>{if(this.refCount[d]>0)return;const m=this.refs.get(d);if(m.constructor[Symbol.metadata]!==void 0){const v=m.constructor[Symbol.metadata];for(const b in v){const V=v[b].name,$=typeof m[V]=="object"&&this.refIds.get(m[V]);$&&!this.deletedRefs.has($)&&this.removeRef($)}}else typeof m[u]=="function"&&Array.from(m.values()).forEach(v=>{const b=this.refIds.get(v);this.deletedRefs.has(b)||this.removeRef(b)});this.refs.delete(d),delete this.refCount[d],delete this.callbacks[d]}),this.deletedRefs.clear()}addCallback(d,m,v){if(d===void 0){const b=typeof m=="number"?t.OPERATION[m]:m;throw new Error(`Can't addCallback on '${b}' (refId is undefined)`)}return this.callbacks[d]||(this.callbacks[d]={}),this.callbacks[d][m]||(this.callbacks[d][m]=[]),this.callbacks[d][m].push(v),()=>this.removeCallback(d,m,v)}removeCallback(d,m,v){var V,$,ee;const b=(ee=($=(V=this.callbacks)==null?void 0:V[d])==null?void 0:$[m])==null?void 0:ee.indexOf(v);b!==void 0&&b!==-1&&Yt(this.callbacks[d][m],b)}}class rn{constructor(d,m){this.currentRefId=0,this.setState(d),this.context=m||new Ee(d.constructor)}setState(d){this.state=d,this.root=new Ot,this.root.addRef(0,d)}decode(d,m={offset:0},v=this.state){var Q,ae,pe;const b=[],V=this.root,$=d.byteLength;let ee=v.constructor[a];for(this.currentRefId=0;m.offset<$;){if(d[m.offset]==255){m.offset++,(Q=v[g])==null||Q.call(v);const ge=Se.number(d,m),Ue=V.refs.get(ge);Ue?(v=Ue,ee=v.constructor[a],this.currentRefId=ge):(console.error(`"refId" not found: ${ge}`,{previousRef:v,previousRefId:this.currentRefId}),console.warn("Please report this issue to the developers."),this.skipCurrentStructure(d,m,$));continue}if(ee(this,d,m,v,b)===Nt){console.warn("@colyseus/schema: definition mismatch"),this.skipCurrentStructure(d,m,$);continue}}return(ae=v[g])==null||ae.call(v),(pe=this.triggerChanges)==null||pe.call(this,b),V.garbageCollectDeletedRefs(),b}skipCurrentStructure(d,m,v){const b={offset:m.offset};for(;m.offset<v&&!(d[m.offset]===255&&(b.offset=m.offset+1,this.root.refs.has(Se.number(d,b))));)m.offset++}getInstanceType(d,m,v){let b;if(d[m.offset]===213){m.offset++;const V=Se.number(d,m);b=this.context.get(V)}return b||v}createInstanceOfType(d){return new d}removeChildRefs(d,m){const v=typeof d[u]!="string",b=this.root.refIds.get(d);d.forEach((V,$)=>{m.push({ref:d,refId:b,op:t.OPERATION.DELETE,field:$,value:void 0,previousValue:V}),v&&this.root.removeRef(this.root.refIds.get(V))})}}class Oe extends Ge{}ot([q("string")],Oe.prototype,"name",void 0),ot([q("string")],Oe.prototype,"type",void 0),ot([q("number")],Oe.prototype,"referencedType",void 0);class sn extends Ge{constructor(){super(...arguments),this.fields=new Cn}}ot([q("number")],sn.prototype,"id",void 0),ot([q("number")],sn.prototype,"extendsId",void 0),ot([q([Oe])],sn.prototype,"fields",void 0);class mt extends Ge{constructor(){super(...arguments),this.types=new Cn}static encode(d,m={offset:0}){const v=d.context,b=new mt,V=new Et(b),$=v.schemas.get(d.state.constructor);$>0&&(b.rootType=$);const ee=new Set,Q={},ae=de=>{if(de.extendsId===void 0||ee.has(de.extendsId)){ee.add(de.id),b.types.push(de);const ge=Q[de.id];ge!==void 0&&(delete Q[de.id],ge.forEach(Ue=>ae(Ue)))}else Q[de.extendsId]===void 0&&(Q[de.extendsId]=[]),Q[de.extendsId].push(de)};v.schemas.forEach((de,ge)=>{const Ue=new sn;Ue.id=Number(de);const ze=Object.getPrototypeOf(ge);ze!==Ge&&(Ue.extendsId=v.schemas.get(ze));const Ae=ge[Symbol.metadata];if(Ae!==ze[Symbol.metadata])for(const ye in Ae){const We=Number(ye),Pt=Ae[We].name;if(!Object.prototype.hasOwnProperty.call(Ae,Pt))continue;const Vt=new Oe;Vt.name=Pt;let Dn;const Di=Ae[We];if(typeof Di.type=="string")Dn=Di.type;else{let so;Ge.is(Di.type)?(Dn="ref",so=Di.type):(Dn=Object.keys(Di.type)[0],typeof Di.type[Dn]=="string"?Dn+=":"+Di.type[Dn]:so=Di.type[Dn]),Vt.referencedType=so?v.getTypeId(so):-1}Vt.type=Dn,Ue.fields.push(Vt)}ae(Ue)});for(const de in Q)Q[de].forEach(ge=>b.types.push(ge));return V.encodeAll(m).slice(0,m.offset)}static decode(d,m){const v=new mt;new rn(v).decode(d,m);const V=new Ee;v.types.forEach(Q=>{const ae=V.get(Q.extendsId)??Ge,pe=class extends ae{};Ee.register(pe),V.add(pe,Q.id)},{});const $=(Q,ae,pe)=>{ae.fields.forEach((de,ge)=>{const Ue=pe+ge;if(de.referencedType!==void 0){let ze=de.type,Ae=V.get(de.referencedType);if(!Ae){const ye=de.type.split(":");ze=ye[0],Ae=ye[1]}ze==="ref"?Ze.addField(Q,Ue,de.name,Ae):Ze.addField(Q,Ue,de.name,{[ze]:Ae})}else Ze.addField(Q,Ue,de.name,de.type)})};v.types.forEach(Q=>{const ae=V.get(Q.id),pe=Ze.initialize(ae),de=[];let ge=Q;do de.push(ge),ge=v.types.find(ze=>ze.id===ge.extendsId);while(ge);let Ue=0;de.reverse().forEach(ze=>{$(pe,ze,Ue),Ue+=ze.fields.length})});const ee=new(V.get(v.rootType||0));return new rn(ee,V)}}ot([q([sn])],mt.prototype,"types",void 0),ot([q("number")],mt.prototype,"rootType",void 0);function Wn(C){const d=C.root,m=d.callbacks,v=new WeakMap;let b;C.triggerChanges=function(ee){var ae;const Q=new Set;for(let pe=0,de=ee.length;pe<de;pe++){const ge=ee[pe],Ue=ge.refId,ze=ge.ref,Ae=m[Ue];if(Ae){if((ge.op&t.OPERATION.DELETE)===t.OPERATION.DELETE&&ge.previousValue instanceof Ge){const ye=(ae=m[d.refIds.get(ge.previousValue)])==null?void 0:ae[t.OPERATION.DELETE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We]()}if(ze instanceof Ge){if(!Q.has(Ue)){const ye=Ae==null?void 0:Ae[t.OPERATION.REPLACE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We]()}if(Ae.hasOwnProperty(ge.field)){const ye=Ae[ge.field];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.previousValue)}}else{if((ge.op&t.OPERATION.DELETE)===t.OPERATION.DELETE){if(ge.previousValue!==void 0){const ye=Ae[t.OPERATION.DELETE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.previousValue,ge.dynamicIndex??ge.field)}if((ge.op&t.OPERATION.ADD)===t.OPERATION.ADD){const ye=Ae[t.OPERATION.ADD];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.dynamicIndex??ge.field)}}else if((ge.op&t.OPERATION.ADD)===t.OPERATION.ADD&&ge.previousValue!==ge.value){const ye=Ae[t.OPERATION.ADD];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.dynamicIndex??ge.field)}if(ge.value!==ge.previousValue&&(ge.value!==void 0||ge.previousValue!==void 0)){const ye=Ae[t.OPERATION.REPLACE];for(let We=(ye==null?void 0:ye.length)-1;We>=0;We--)ye[We](ge.value,ge.dynamicIndex??ge.field)}}Q.add(Ue)}}};function V(ee,Q){var de;let ae=((de=Q.instance)==null?void 0:de.constructor[Symbol.metadata])||ee,pe=Q.instance&&typeof Q.instance.forEach=="function"||ee&&typeof ee[Symbol.metadata]>"u";if(ae&&!pe){const ge=function(Ue,ze,Ae,ye){return ye&&Q.instance[ze]!==void 0&&!v.has(b)&&Ae(Q.instance[ze],void 0),d.addCallback(d.refIds.get(Ue),ze,Ae)};return new Proxy({listen:function(ze,Ae,ye=!0){if(Q.instance)return ge(Q.instance,ze,Ae,ye);{let We=()=>{};return Q.onInstanceAvailable((Pt,Vt)=>{We=ge(Pt,ze,Ae,ye&&Vt&&!v.has(b))}),()=>We()}},onChange:function(ze){return d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,ze)},bindTo:function(ze,Ae){return Ae||(Ae=Object.keys(ae).map(ye=>ae[ye].name)),d.addCallback(d.refIds.get(Q.instance),t.OPERATION.REPLACE,()=>{Ae.forEach(ye=>ze[ye]=Q.instance[ye])})}},{get(Ue,ze){var ye;const Ae=ae[ae[ze]];if(Ae){const We=(ye=Q.instance)==null?void 0:ye[ze],Pt=(Vt=>{const Dn=$(Q.instance).listen(ze,(Di,so)=>{Vt(Di,!1),Dn==null||Dn()},!1);d.refIds.get(We)!==void 0&&Vt(We,!0)});return V(Ae.type,{instance:d.refIds.get(We)&&We,parentInstance:Q.instance,onInstanceAvailable:Pt})}else return Ue[ze]},has(Ue,ze){return ae[ze]!==void 0},set(Ue,ze,Ae){throw new Error("not allowed")},deleteProperty(Ue,ze){throw new Error("not allowed")}})}else{const ge=function(Ae,ye,We){return We&&Ae.forEach((Pt,Vt)=>ye(Pt,Vt)),d.addCallback(d.refIds.get(Ae),t.OPERATION.ADD,(Pt,Vt)=>{v.set(ye,!0),b=ye,ye(Pt,Vt),v.delete(ye),b=void 0})},Ue=function(Ae,ye){return d.addCallback(d.refIds.get(Ae),t.OPERATION.DELETE,ye)},ze=function(Ae,ye){return d.addCallback(d.refIds.get(Ae),t.OPERATION.REPLACE,ye)};return new Proxy({onAdd:function(Ae,ye=!0){if(Q.instance)return ge(Q.instance,Ae,ye&&!v.has(b));if(Q.onInstanceAvailable){let We=()=>{};return Q.onInstanceAvailable((Pt,Vt)=>{We=ge(Pt,Ae,ye&&Vt&&!v.has(b))}),()=>We()}},onRemove:function(Ae){if(Q.instance)return Ue(Q.instance,Ae);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(We=>{ye=Ue(We,Ae)}),()=>ye()}},onChange:function(Ae){if(Q.instance)return ze(Q.instance,Ae);if(Q.onInstanceAvailable){let ye=()=>{};return Q.onInstanceAvailable(We=>{ye=ze(We,Ae)}),()=>ye()}}},{get(Ae,ye){if(!Ae[ye])throw new Error(`Can't access '${ye}' through callback proxy. access the instance directly.`);return Ae[ye]},has(Ae,ye){return Ae[ye]!==void 0},set(Ae,ye,We){throw new Error("not allowed")},deleteProperty(Ae,ye){throw new Error("not allowed")}})}}function $(ee){return V(void 0,{instance:ee})}return $}function ii(C,d){C.triggerChanges=d}class Ii{constructor(d=!1){this.iterable=d,this.visible=new WeakSet,this.invisible=new WeakSet,this.changes=new Map,d&&(this.items=[])}add(d,m=mi,v=!0){var ae,pe;const b=d==null?void 0:d[f],V=b.parent;if(b){if(!V&&b.refId!==0)throw new Error(`Cannot add a detached instance to the StateView. Make sure to assign the "${b.ref.constructor.name}" instance to the state before calling view.add()`)}else return console.warn("StateView#add(), invalid object:",d),!1;const $=d.constructor[Symbol.metadata];this.visible.add(b),this.iterable&&v&&this.items.push(d),v&&V&&this.addParentOf(b,m);let ee=this.changes.get(b.refId);ee===void 0&&(ee={},this.changes.set(b.refId,ee));let Q=!1;if(b.forEachChild((de,ge)=>{$&&$[ge].tag!==void 0&&$[ge].tag!==m||this.add(de.ref,m,!1)&&(Q=!0)}),m!==mi){this.tags||(this.tags=new WeakMap);let de;this.tags.has(b)?de=this.tags.get(b):(de=new Set,this.tags.set(b,de)),de.add(m),(pe=(ae=$==null?void 0:$[P])==null?void 0:ae[m])==null||pe.forEach(ge=>{b.getChange(ge)!==t.OPERATION.DELETE&&(ee[ge]=t.OPERATION.ADD)})}else if(!b.isNew||Q){const de=b.filteredChanges!==void 0?b.allFilteredChanges:b.allChanges,ge=this.invisible.has(b);for(let Ue=0,ze=de.operations.length;Ue<ze;Ue++){const Ae=de.operations[Ue];if(Ae===void 0)continue;const ye=b.indexedOperations[Ae]??t.OPERATION.ADD,We=$==null?void 0:$[Ae].tag;ye!==t.OPERATION.DELETE&&(ge||We===void 0||We===m)&&(ee[Ae]=ye,Q=!0)}}return Q}addParentOf(d,m){var V;const v=d.parent[f],b=d.parentIndex;if(!this.visible.has(v)){this.visible.add(v);const $=(V=v.parent)==null?void 0:V[f];$&&$.filteredChanges!==void 0&&this.addParentOf(v,m)}if(v.getChange(b)!==t.OPERATION.DELETE){let $=this.changes.get(v.refId);$===void 0&&($={},this.changes.set(v.refId,$)),this.tags||(this.tags=new WeakMap);let ee;this.tags.has(v)?ee=this.tags.get(v):(ee=new Set,this.tags.set(v,ee)),ee.add(m),$[b]=t.OPERATION.ADD}}remove(d,m=mi,v=!1){var Q;const b=d[f];if(!b)return console.warn("StateView#remove(), invalid object:",d),this;this.visible.delete(b),this.iterable&&!v&&Yt(this.items,this.items.indexOf(d));const $=b.ref.constructor[Symbol.metadata];let ee=this.changes.get(b.refId);if(ee===void 0&&(ee={},this.changes.set(b.refId,ee)),m===mi){const ae=b.parent;if(ae&&!Ze.isValidInstance(ae)&&b.isFiltered){const pe=ae[f];let de=this.changes.get(pe.refId);de===void 0?(de={},this.changes.set(pe.refId,de)):de[b.parentIndex]===t.OPERATION.ADD&&this.changes.delete(b.refId),de[b.parentIndex]=t.OPERATION.DELETE,this._recursiveDeleteVisibleChangeTree(b)}else(Q=$==null?void 0:$[T])==null||Q.forEach(pe=>ee[pe]=t.OPERATION.DELETE)}else $==null||$[P][m].forEach(ae=>ee[ae]=t.OPERATION.DELETE);if(this.tags&&this.tags.has(b)){const ae=this.tags.get(b);m===void 0?this.tags.delete(b):(ae.delete(m),ae.size===0&&this.tags.delete(b))}return this}has(d){return this.visible.has(d[f])}hasTag(d,m=mi){var b;const v=(b=this.tags)==null?void 0:b.get(d[f]);return(v==null?void 0:v.has(m))??!1}clear(){if(!this.iterable)throw new Error("StateView#clear() is only available for iterable StateView's. Use StateView(iterable: true) constructor.");for(let d=0,m=this.items.length;d<m;d++)this.remove(this.items[d],mi,!0);this.items.length=0}isChangeTreeVisible(d){let m=this.visible.has(d);return!m&&d.isVisibilitySharedWithParent&&this.visible.has(d.parent[f])&&(this.visible.add(d),m=!0),m}_recursiveDeleteVisibleChangeTree(d){d.forEachChild(m=>{this.visible.delete(m),this._recursiveDeleteVisibleChangeTree(m)})}}Me("map",{constructor:Gn}),Me("array",{constructor:Cn}),Me("set",{constructor:xr}),Me("collection",{constructor:Ji}),t.$changes=f,t.$childType=u,t.$decoder=a,t.$deleteByIndex=h,t.$encoder=o,t.$filter=c,t.$getByIndex=l,t.$track=s,t.ArraySchema=Cn,t.ChangeTree=Ce,t.CollectionSchema=Ji,t.Decoder=rn,t.Encoder=Et,t.MapSchema=Gn,t.Metadata=Ze,t.Reflection=mt,t.ReflectionField=Oe,t.ReflectionType=sn,t.Schema=Ge,t.SetSchema=xr,t.StateView=Ii,t.TypeContext=Ee,t.decode=Se,t.decodeKeyValueOperation=ss,t.decodeSchemaOperation=Yn,t.defineCustomTypes=Ie,t.defineTypes=re,t.deprecated=ne,t.dumpChanges=Le,t.encode=ve,t.encodeArray=Wt,t.encodeKeyValueOperation=Ve,t.encodeSchemaOperation=Ye,t.entity=Mc,t.getDecoderStateCallbacks=Wn,t.getRawChangesCallback=ii,t.registerType=Me,t.schema=De,t.type=q,t.view=L}))})(Po,Po.exports)),Po.exports}var Em;function FR(){if(Em)return Sf;Em=1;var n=gc,e=Vh();class t{constructor(r){this.events=r,this.isOpen=!1,this.lengthPrefixBuffer=new Uint8Array(9)}connect(r,s={}){const o=s.fingerprint&&{serverCertificateHashes:[{algorithm:"sha-256",value:new Uint8Array(s.fingerprint).buffer}]}||void 0;this.wt=new WebTransport(r,o),this.wt.ready.then(a=>{console.log("WebTransport ready!",a),this.isOpen=!0,this.unreliableReader=this.wt.datagrams.readable.getReader(),this.unreliableWriter=this.wt.datagrams.writable.getWriter(),this.wt.incomingBidirectionalStreams.getReader().read().then(l=>{this.reader=l.value.readable.getReader(),this.writer=l.value.writable.getWriter(),this.sendSeatReservation(s.room.roomId,s.sessionId,s.reconnectionToken),this.readIncomingData(),this.readIncomingUnreliableData()}).catch(l=>{console.error("failed to read incoming stream",l),console.error("TODO: close the connection")})}).catch(a=>{console.log("WebTransport not ready!",a),this._close()}),this.wt.closed.then(a=>{console.log("WebTransport closed w/ success",a),this.events.onclose({code:a.closeCode,reason:a.reason})}).catch(a=>{console.log("WebTransport closed w/ error",a),this.events.onerror(a),this.events.onclose({code:a.closeCode,reason:a.reason})}).finally(()=>{this._close()})}send(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.writer.write(o)}sendUnreliable(r){const s=e.encode.number(this.lengthPrefixBuffer,r.length,{offset:0}),o=new Uint8Array(s+r.length);o.set(this.lengthPrefixBuffer.subarray(0,s),0),o.set(r,s),this.unreliableWriter.write(o)}close(r,s){try{this.wt.close({closeCode:r,reason:s})}catch(o){console.error(o)}}readIncomingData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.reader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}readIncomingUnreliableData(){return n.__awaiter(this,void 0,void 0,function*(){let r;for(;this.isOpen;){try{r=yield this.unreliableReader.read();const s=r.value,o={offset:0};do{const a=e.decode.number(s,o);this.events.onmessage({data:s.subarray(o.offset,o.offset+a)}),o.offset+=a}while(o.offset<s.length)}catch(s){s.message.indexOf("session is closed")===-1&&console.error("H3Transport: failed to read incoming data",s);break}if(r.done)break}})}sendSeatReservation(r,s,o){const a={offset:0},c=[];e.encode.string(c,r,a),e.encode.string(c,s,a),o&&e.encode.string(c,o,a),this.writer.write(new Uint8Array(c).buffer)}_close(){this.isOpen=!1}}return Sf.H3TransportTransport=t,Sf}var Mf={},Ef,bm;function BR(){return bm||(bm=1,Ef=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}),Ef}var wm;function zR(){if(wm)return Mf;wm=1;var n=BR();const e=globalThis.WebSocket||n;let t=class{constructor(r){this.events=r}send(r){this.ws.send(r)}sendUnreliable(r){console.warn("colyseus.js: The WebSocket transport does not support unreliable messages")}connect(r,s){try{this.ws=new e(r,{headers:s,protocols:this.protocols})}catch{this.ws=new e(r,this.protocols)}this.ws.binaryType="arraybuffer",this.ws.onopen=this.events.onopen,this.ws.onmessage=this.events.onmessage,this.ws.onclose=this.events.onclose,this.ws.onerror=this.events.onerror}close(r,s){this.ws.close(r,s)}get isOpen(){return this.ws.readyState===e.OPEN}};return Mf.WebSocketTransport=t,Mf}var Tm;function kR(){if(Tm)return yf;Tm=1;var n=FR(),e=zR();let t=class{constructor(r){switch(this.events={},r){case"h3":this.transport=new n.H3TransportTransport(this.events);break;default:this.transport=new e.WebSocketTransport(this.events);break}}connect(r,s){this.transport.connect.call(this.transport,r,s)}send(r){this.transport.send(r)}sendUnreliable(r){this.transport.sendUnreliable(r)}close(r,s){this.transport.close(r,s)}get isOpen(){return this.transport.isOpen}};return yf.Connection=t,yf}var bf={},Am;function d_(){return Am||(Am=1,(function(n){n.Protocol=void 0,(function(e){e[e.HANDSHAKE=9]="HANDSHAKE",e[e.JOIN_ROOM=10]="JOIN_ROOM",e[e.ERROR=11]="ERROR",e[e.LEAVE_ROOM=12]="LEAVE_ROOM",e[e.ROOM_DATA=13]="ROOM_DATA",e[e.ROOM_STATE=14]="ROOM_STATE",e[e.ROOM_STATE_PATCH=15]="ROOM_STATE_PATCH",e[e.ROOM_DATA_SCHEMA=16]="ROOM_DATA_SCHEMA",e[e.ROOM_DATA_BYTES=17]="ROOM_DATA_BYTES"})(n.Protocol||(n.Protocol={})),n.ErrorCode=void 0,(function(e){e[e.MATCHMAKE_NO_HANDLER=4210]="MATCHMAKE_NO_HANDLER",e[e.MATCHMAKE_INVALID_CRITERIA=4211]="MATCHMAKE_INVALID_CRITERIA",e[e.MATCHMAKE_INVALID_ROOM_ID=4212]="MATCHMAKE_INVALID_ROOM_ID",e[e.MATCHMAKE_UNHANDLED=4213]="MATCHMAKE_UNHANDLED",e[e.MATCHMAKE_EXPIRED=4214]="MATCHMAKE_EXPIRED",e[e.AUTH_FAILED=4215]="AUTH_FAILED",e[e.APPLICATION_ERROR=4216]="APPLICATION_ERROR"})(n.ErrorCode||(n.ErrorCode={}))})(bf)),bf}var Ya={},Rm;function p_(){if(Rm)return Ya;Rm=1;const n={};function e(i,r){n[i]=r}function t(i){const r=n[i];if(!r)throw new Error("missing serializer: "+i);return r}return Ya.getSerializer=t,Ya.registerSerializer=e,Ya}var wf={},Cm;function m_(){if(Cm)return wf;Cm=1;const n=()=>({emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)},events:{},on(e,t){var i;return!((i=this.events[e])===null||i===void 0)&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])===null||r===void 0?void 0:r.filter(s=>t!==s)}}});return wf.createNanoEvents=n,wf}var Ka={},Pm;function VR(){if(Pm)return Ka;Pm=1;class n{constructor(){this.handlers=[]}register(i,r=!1){return this.handlers.push(i),this}invoke(...i){this.handlers.forEach(r=>r.apply(this,i))}invokeAsync(...i){return Promise.all(this.handlers.map(r=>r.apply(this,i)))}remove(i){const r=this.handlers.indexOf(i);this.handlers[r]=this.handlers[this.handlers.length-1],this.handlers.pop()}clear(){this.handlers=[]}}function e(){const t=new n;function i(r){return t.register(r,this===null)}return i.once=r=>{const s=function(...o){r.apply(this,o),t.remove(s)};t.register(s)},i.remove=r=>t.remove(r),i.invoke=(...r)=>t.invoke(...r),i.invokeAsync=(...r)=>t.invokeAsync(...r),i.clear=()=>t.clear(),i}return Ka.EventEmitter=n,Ka.createSignal=e,Ka}var Za={},Im;function g_(){if(Im)return Za;Im=1;var n=Vh();function e(i){try{return n.getDecoderStateCallbacks(i.serializer.decoder)}catch{return}}let t=class{setState(r,s){this.decoder.decode(r,s)}getState(){return this.state}patch(r,s){return this.decoder.decode(r,s)}teardown(){this.decoder.root.clearRefs()}handshake(r,s){this.state?(n.Reflection.decode(r,s),this.decoder=new n.Decoder(this.state)):(this.decoder=n.Reflection.decode(r,s),this.state=this.decoder.state)}};return Za.SchemaSerializer=t,Za.getStateCallbacks=e,Za}var sh;try{sh=new TextDecoder}catch{}var Ne,Yi,K=0,Ht={},St,Cr,ai=0,ki=0,hn,ur,Rn=[],vt,Dm={useRecords:!1,mapsAsObjects:!0};class __{}const Hh=new __;Hh.name="MessagePack 0xC1";var Pr=!1,x_=2,HR;try{new Function("")}catch{x_=1/0}class Dr{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(Ne)return b_(()=>(nc(),this?this.unpack(e,t):Dr.prototype.unpack.call(Dm,e,t)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof t=="object"?(Yi=t.end||e.length,K=t.start||0):(K=0,Yi=t>-1?t:e.length),ki=0,Cr=null,hn=null,Ne=e;try{vt=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(i){throw Ne=null,e instanceof Uint8Array?i:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof Dr){if(Ht=this,this.structures)return St=this.structures,Ja(t);(!St||St.length>0)&&(St=[])}else Ht=Dm,(!St||St.length>0)&&(St=[]);return Ja(t)}unpackMultiple(e,t){let i,r=0;try{Pr=!0;let s=e.length,o=this?this.unpack(e,s):vc.unpack(e,s);if(t){if(t(o,r,K)===!1)return;for(;K<s;)if(r=K,t(Ja(),r,K)===!1)return}else{for(i=[o];K<s;)r=K,i.push(Ja());return i}}catch(s){throw s.lastPosition=r,s.values=i,s}finally{Pr=!1,nc()}}_mergeStructures(e,t){e=e||[],Object.isFrozen(e)&&(e=e.map(i=>i.slice(0)));for(let i=0,r=e.length;i<r;i++){let s=e[i];s&&(s.isShared=!0,i>=32&&(s.highByte=i-32>>5))}e.sharedLength=e.length;for(let i in t||[])if(i>=0){let r=e[i],s=t[i];s&&(r&&((e.restoreStructures||(e.restoreStructures=[]))[i]=r),e[i]=s)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function Ja(n){try{if(!Ht.trusted&&!Pr){let t=St.sharedLength||0;t<St.length&&(St.length=t)}let e;if(Ht.randomAccessStructure&&Ne[K]<64&&Ne[K]>=32&&HR||(e=nn()),hn&&(K=hn.postBundlePosition,hn=null),Pr&&(St.restoreStructures=null),K==Yi)St&&St.restoreStructures&&Lm(),St=null,Ne=null,ur&&(ur=null);else{if(K>Yi)throw new Error("Unexpected end of MessagePack data");if(!Pr){let t;try{t=JSON.stringify(e,(i,r)=>typeof r=="bigint"?`${r}n`:r).slice(0,100)}catch(i){t="(JSON view not available "+i+")"}throw new Error("Data read, but end of buffer not reached "+t)}}return e}catch(e){throw St&&St.restoreStructures&&Lm(),nc(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||K>Yi)&&(e.incomplete=!0),e}}function Lm(){for(let n in St.restoreStructures)St[n]=St.restoreStructures[n];St.restoreStructures=null}function nn(){let n=Ne[K++];if(n<160)if(n<128){if(n<64)return n;{let e=St[n&63]||Ht.getStructures&&v_()[n&63];return e?(e.read||(e.read=Gh(e,n&63)),e.read()):n}}else if(n<144)if(n-=128,Ht.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=S_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}else{n-=144;let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Ht.freezeData?Object.freeze(e):e}else if(n<192){let e=n-160;if(ki>=K)return Cr.slice(K-ai,(K+=e)-ai);if(ki==0&&Yi<140){let t=e<16?Wh(e):y_(e);if(t!=null)return t}return oh(e)}else{let e;switch(n){case 192:return null;case 193:return hn?(e=nn(),e>0?hn[1].slice(hn.position1,hn.position1+=e):hn[0].slice(hn.position0,hn.position0-=e)):Hh;case 194:return!1;case 195:return!0;case 196:if(e=Ne[K++],e===void 0)throw new Error("Unexpected end of buffer");return Tf(e);case 197:return e=vt.getUint16(K),K+=2,Tf(e);case 198:return e=vt.getUint32(K),K+=4,Tf(e);case 199:return kr(Ne[K++]);case 200:return e=vt.getUint16(K),K+=2,kr(e);case 201:return e=vt.getUint32(K),K+=4,kr(e);case 202:if(e=vt.getFloat32(K),Ht.useFloat32>2){let t=xc[(Ne[K]&127)<<1|Ne[K+1]>>7];return K+=4,(t*e+(e>0?.5:-.5)>>0)/t}return K+=4,e;case 203:return e=vt.getFloat64(K),K+=8,e;case 204:return Ne[K++];case 205:return e=vt.getUint16(K),K+=2,e;case 206:return e=vt.getUint32(K),K+=4,e;case 207:return Ht.int64AsType==="number"?(e=vt.getUint32(K)*4294967296,e+=vt.getUint32(K+4)):Ht.int64AsType==="string"?e=vt.getBigUint64(K).toString():Ht.int64AsType==="auto"?(e=vt.getBigUint64(K),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=vt.getBigUint64(K),K+=8,e;case 208:return vt.getInt8(K++);case 209:return e=vt.getInt16(K),K+=2,e;case 210:return e=vt.getInt32(K),K+=4,e;case 211:return Ht.int64AsType==="number"?(e=vt.getInt32(K)*4294967296,e+=vt.getUint32(K+4)):Ht.int64AsType==="string"?e=vt.getBigInt64(K).toString():Ht.int64AsType==="auto"?(e=vt.getBigInt64(K),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=vt.getBigInt64(K),K+=8,e;case 212:if(e=Ne[K++],e==114)return zm(Ne[K++]&63);{let t=Rn[e];if(t)return t.read?(K++,t.read(nn())):t.noBuffer?(K++,t()):t(Ne.subarray(K,++K));throw new Error("Unknown extension "+e)}case 213:return e=Ne[K],e==114?(K++,zm(Ne[K++]&63,Ne[K++])):kr(2);case 214:return kr(4);case 215:return kr(8);case 216:return kr(16);case 217:return e=Ne[K++],ki>=K?Cr.slice(K-ai,(K+=e)-ai):WR(e);case 218:return e=vt.getUint16(K),K+=2,ki>=K?Cr.slice(K-ai,(K+=e)-ai):$R(e);case 219:return e=vt.getUint32(K),K+=4,ki>=K?Cr.slice(K-ai,(K+=e)-ai):XR(e);case 220:return e=vt.getUint16(K),K+=2,Om(e);case 221:return e=vt.getUint32(K),K+=4,Om(e);case 222:return e=vt.getUint16(K),K+=2,Um(e);case 223:return e=vt.getUint32(K),K+=4,Um(e);default:if(n>=224)return n-256;if(n===void 0){let t=new Error("Unexpected end of MessagePack data");throw t.incomplete=!0,t}throw new Error("Unknown MessagePack token "+n)}}}const GR=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function Gh(n,e){function t(){if(t.count++>x_){let r=n.read=new Function("r","return function(){return "+(Ht.freezeData?"Object.freeze":"")+"({"+n.map(s=>s==="__proto__"?"__proto_:r()":GR.test(s)?s+":r()":"["+JSON.stringify(s)+"]:r()").join(",")+"})}")(nn);return n.highByte===0&&(n.read=Nm(e,n.read)),r()}let i={};for(let r=0,s=n.length;r<s;r++){let o=n[r];o==="__proto__"&&(o="__proto_"),i[o]=nn()}return Ht.freezeData?Object.freeze(i):i}return t.count=0,n.highByte===0?Nm(e,t):t}const Nm=(n,e)=>function(){let t=Ne[K++];if(t===0)return e();let i=n<32?-(n+(t<<5)):n+(t<<5),r=St[i]||v_()[i];if(!r)throw new Error("Record id is not defined for "+i);return r.read||(r.read=Gh(r,n)),r.read()};function v_(){let n=b_(()=>(Ne=null,Ht.getStructures()));return St=Ht._mergeStructures(n,St)}var oh=ta,WR=ta,$R=ta,XR=ta;let qR=!1;function ta(n){let e;if(n<16&&(e=Wh(n)))return e;if(n>64&&sh)return sh.decode(Ne.subarray(K,K+=n));const t=K+n,i=[];for(e="";K<t;){const r=Ne[K++];if((r&128)===0)i.push(r);else if((r&224)===192){const s=Ne[K++]&63;i.push((r&31)<<6|s)}else if((r&240)===224){const s=Ne[K++]&63,o=Ne[K++]&63;i.push((r&31)<<12|s<<6|o)}else if((r&248)===240){const s=Ne[K++]&63,o=Ne[K++]&63,a=Ne[K++]&63;let c=(r&7)<<18|s<<12|o<<6|a;c>65535&&(c-=65536,i.push(c>>>10&1023|55296),c=56320|c&1023),i.push(c)}else i.push(r);i.length>=4096&&(e+=un.apply(String,i),i.length=0)}return i.length>0&&(e+=un.apply(String,i)),e}function Om(n){let e=new Array(n);for(let t=0;t<n;t++)e[t]=nn();return Ht.freezeData?Object.freeze(e):e}function Um(n){if(Ht.mapsAsObjects){let e={};for(let t=0;t<n;t++){let i=S_();i==="__proto__"&&(i="__proto_"),e[i]=nn()}return e}else{let e=new Map;for(let t=0;t<n;t++)e.set(nn(),nn());return e}}var un=String.fromCharCode;function y_(n){let e=K,t=new Array(n);for(let i=0;i<n;i++){const r=Ne[K++];if((r&128)>0){K=e;return}t[i]=r}return un.apply(String,t)}function Wh(n){if(n<4)if(n<2){if(n===0)return"";{let e=Ne[K++];if((e&128)>1){K-=1;return}return un(e)}}else{let e=Ne[K++],t=Ne[K++];if((e&128)>0||(t&128)>0){K-=2;return}if(n<3)return un(e,t);let i=Ne[K++];if((i&128)>0){K-=3;return}return un(e,t,i)}else{let e=Ne[K++],t=Ne[K++],i=Ne[K++],r=Ne[K++];if((e&128)>0||(t&128)>0||(i&128)>0||(r&128)>0){K-=4;return}if(n<6){if(n===4)return un(e,t,i,r);{let s=Ne[K++];if((s&128)>0){K-=5;return}return un(e,t,i,r,s)}}else if(n<8){let s=Ne[K++],o=Ne[K++];if((s&128)>0||(o&128)>0){K-=6;return}if(n<7)return un(e,t,i,r,s,o);let a=Ne[K++];if((a&128)>0){K-=7;return}return un(e,t,i,r,s,o,a)}else{let s=Ne[K++],o=Ne[K++],a=Ne[K++],c=Ne[K++];if((s&128)>0||(o&128)>0||(a&128)>0||(c&128)>0){K-=8;return}if(n<10){if(n===8)return un(e,t,i,r,s,o,a,c);{let l=Ne[K++];if((l&128)>0){K-=9;return}return un(e,t,i,r,s,o,a,c,l)}}else if(n<12){let l=Ne[K++],h=Ne[K++];if((l&128)>0||(h&128)>0){K-=10;return}if(n<11)return un(e,t,i,r,s,o,a,c,l,h);let f=Ne[K++];if((f&128)>0){K-=11;return}return un(e,t,i,r,s,o,a,c,l,h,f)}else{let l=Ne[K++],h=Ne[K++],f=Ne[K++],u=Ne[K++];if((l&128)>0||(h&128)>0||(f&128)>0||(u&128)>0){K-=12;return}if(n<14){if(n===12)return un(e,t,i,r,s,o,a,c,l,h,f,u);{let p=Ne[K++];if((p&128)>0){K-=13;return}return un(e,t,i,r,s,o,a,c,l,h,f,u,p)}}else{let p=Ne[K++],g=Ne[K++];if((p&128)>0||(g&128)>0){K-=14;return}if(n<15)return un(e,t,i,r,s,o,a,c,l,h,f,u,p,g);let y=Ne[K++];if((y&128)>0){K-=15;return}return un(e,t,i,r,s,o,a,c,l,h,f,u,p,g,y)}}}}}function Fm(){let n=Ne[K++],e;if(n<192)e=n-160;else switch(n){case 217:e=Ne[K++];break;case 218:e=vt.getUint16(K),K+=2;break;case 219:e=vt.getUint32(K),K+=4;break;default:throw new Error("Expected string")}return ta(e)}function Tf(n){return Ht.copyBuffers?Uint8Array.prototype.slice.call(Ne,K,K+=n):Ne.subarray(K,K+=n)}function kr(n){let e=Ne[K++];if(Rn[e]){let t;return Rn[e](Ne.subarray(K,t=K+=n),i=>{K=i;try{return nn()}finally{K=t}})}else throw new Error("Unknown extension type "+e)}var Bm=new Array(4096);function S_(){let n=Ne[K++];if(n>=160&&n<192){if(n=n-160,ki>=K)return Cr.slice(K-ai,(K+=n)-ai);if(!(ki==0&&Yi<180))return oh(n)}else return K--,M_(nn());let e=(n<<5^(n>1?vt.getUint16(K):n>0?Ne[K]:0))&4095,t=Bm[e],i=K,r=K+n-3,s,o=0;if(t&&t.bytes==n){for(;i<r;){if(s=vt.getUint32(i),s!=t[o++]){i=1879048192;break}i+=4}for(r+=3;i<r;)if(s=Ne[i++],s!=t[o++]){i=1879048192;break}if(i===r)return K=i,t.string;r-=3,i=K}for(t=[],Bm[e]=t,t.bytes=n;i<r;)s=vt.getUint32(i),t.push(s),i+=4;for(r+=3;i<r;)s=Ne[i++],t.push(s);let a=n<16?Wh(n):y_(n);return a!=null?t.string=a:t.string=oh(n)}function M_(n){if(typeof n=="string")return n;if(typeof n=="number"||typeof n=="boolean"||typeof n=="bigint")return n.toString();if(n==null)return n+"";if(Ht.allowArraysInMapKeys&&Array.isArray(n)&&n.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return n.flat().toString();throw new Error(`Invalid property type for record: ${typeof n}`)}const zm=(n,e)=>{let t=nn().map(M_),i=n;e!==void 0&&(n=n<32?-((e<<5)+n):(e<<5)+n,t.highByte=e);let r=St[n];return r&&(r.isShared||Pr)&&((St.restoreStructures||(St.restoreStructures=[]))[n]=r),St[n]=t,t.read=Gh(t,i),t.read()};Rn[0]=()=>{};Rn[0].noBuffer=!0;Rn[66]=n=>{let e=n.length,t=BigInt(n[0]&128?n[0]-256:n[0]);for(let i=1;i<e;i++)t<<=BigInt(8),t+=BigInt(n[i]);return t};let YR={Error,TypeError,ReferenceError};Rn[101]=()=>{let n=nn();return(YR[n[0]]||Error)(n[1],{cause:n[2]})};Rn[105]=n=>{if(Ht.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=vt.getUint32(K-4);ur||(ur=new Map);let t=Ne[K],i;t>=144&&t<160||t==220||t==221?i=[]:i={};let r={target:i};ur.set(e,r);let s=nn();return r.used?Object.assign(i,s):(r.target=s,s)};Rn[112]=n=>{if(Ht.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=vt.getUint32(K-4),t=ur.get(e);return t.used=!0,t.target};Rn[115]=()=>new Set(nn());const E_=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(n=>n+"Array");let KR=typeof globalThis=="object"?globalThis:window;Rn[116]=n=>{let e=n[0],t=E_[e];if(!t){if(e===16){let i=new ArrayBuffer(n.length-1);return new Uint8Array(i).set(n.subarray(1)),i}throw new Error("Could not find typed array for code "+e)}return new KR[t](Uint8Array.prototype.slice.call(n,1).buffer)};Rn[120]=()=>{let n=nn();return new RegExp(n[0],n[1])};const ZR=[];Rn[98]=n=>{let e=(n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3],t=K;return K+=e-n.length,hn=ZR,hn=[Fm(),Fm()],hn.position0=0,hn.position1=0,hn.postBundlePosition=K,K=t,nn()};Rn[255]=n=>n.length==4?new Date((n[0]*16777216+(n[1]<<16)+(n[2]<<8)+n[3])*1e3):n.length==8?new Date(((n[0]<<22)+(n[1]<<14)+(n[2]<<6)+(n[3]>>2))/1e6+((n[3]&3)*4294967296+n[4]*16777216+(n[5]<<16)+(n[6]<<8)+n[7])*1e3):n.length==12?new Date(((n[0]<<24)+(n[1]<<16)+(n[2]<<8)+n[3])/1e6+((n[4]&128?-281474976710656:0)+n[6]*1099511627776+n[7]*4294967296+n[8]*16777216+(n[9]<<16)+(n[10]<<8)+n[11])*1e3):new Date("invalid");function b_(n){let e=Yi,t=K,i=ai,r=ki,s=Cr,o=ur,a=hn,c=new Uint8Array(Ne.slice(0,Yi)),l=St,h=St.slice(0,St.length),f=Ht,u=Pr,p=n();return Yi=e,K=t,ai=i,ki=r,Cr=s,ur=o,hn=a,Ne=c,Pr=u,St=l,St.splice(0,St.length,...h),Ht=f,vt=new DataView(Ne.buffer,Ne.byteOffset,Ne.byteLength),p}function nc(){Ne=null,ur=null,St=null}function JR(n){n.unpack?Rn[n.type]=n.unpack:Rn[n.type]=n}const xc=new Array(147);for(let n=0;n<256;n++)xc[n]=+("1e"+Math.floor(45.15-n*.30103));const jR=Dr;var vc=new Dr({useRecords:!1});const QR=vc.unpack,eC=vc.unpackMultiple,tC=vc.unpack,w_={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4};let T_=new Float32Array(1),km=new Uint8Array(T_.buffer,0,4);function nC(n){T_[0]=n;let e=xc[(km[3]&127)<<1|km[2]>>7];return(e*n+(n>0?.5:-.5)>>0)/e}let ul;try{ul=new TextEncoder}catch{}let ic,$h;const yc=typeof Buffer<"u",ja=yc?function(n){return Buffer.allocUnsafeSlow(n)}:Uint8Array,A_=yc?Buffer:Uint8Array,Vm=yc?4294967296:2144337920;let ie,Mo,kt,J=0,On,Jt=null,iC;const rC=21760,sC=/[\u0080-\uFFFF]/,Cs=Symbol("record-id");class na extends Dr{constructor(e){super(e),this.offset=0;let t,i,r,s,o=A_.prototype.utf8Write?function(I,H){return ie.utf8Write(I,H,ie.byteLength-H)}:ul&&ul.encodeInto?function(I,H){return ul.encodeInto(I,ie.subarray(H)).written}:!1,a=this;e||(e={});let c=e&&e.sequential,l=e.structures||e.saveStructures,h=e.maxSharedStructures;if(h==null&&(h=l?32:0),h>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let f=e.maxOwnStructures;f==null&&(f=l?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let u=h>32||f+h>64,p=h+64,g=h+f+64;if(g>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let y=[],_=0,x=0;this.pack=this.encode=function(I,H){if(ie||(ie=new ja(8192),kt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,8192)),J=0),On=ie.length-10,On-J<2048?(ie=new ja(ie.length),kt=ie.dataView||(ie.dataView=new DataView(ie.buffer,0,ie.length)),On=ie.length-10,J=0):J=J+7&2147483640,t=J,H&I_&&(J+=H&255),s=a.structuredClone?new Map:null,a.bundleStrings&&typeof I!="string"?(Jt=[],Jt.size=1/0):Jt=null,r=a.structures,r){r.uninitialized&&(r=a._mergeStructures(a.getStructures()));let N=r.sharedLength||0;if(N>h)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+r.sharedLength);if(!r.transitions){r.transitions=Object.create(null);for(let F=0;F<N;F++){let G=r[F];if(!G)continue;let Z,te=r.transitions;for(let ue=0,_e=G.length;ue<_e;ue++){let Fe=G[ue];Z=te[Fe],Z||(Z=te[Fe]=Object.create(null)),te=Z}te[Cs]=F+64}this.lastNamedStructuresLength=N}c||(r.nextId=N+64)}i&&(i=!1);let A;try{a.randomAccessStructure&&I&&I.constructor&&I.constructor===Object?z(I):M(I);let N=Jt;if(Jt&&Wm(t,M,0),s&&s.idsToInsert){let F=s.idsToInsert.sort((ue,_e)=>ue.offset>_e.offset?1:-1),G=F.length,Z=-1;for(;N&&G>0;){let ue=F[--G].offset+t;ue<N.stringsPosition+t&&Z===-1&&(Z=0),ue>N.position+t?Z>=0&&(Z+=6):(Z>=0&&(kt.setUint32(N.position+t,kt.getUint32(N.position+t)+Z),Z=-1),N=N.previous,G++)}Z>=0&&N&&kt.setUint32(N.position+t,kt.getUint32(N.position+t)+Z),J+=F.length*6,J>On&&w(J),a.offset=J;let te=aC(ie.subarray(t,J),F);return s=null,te}return a.offset=J,H&C_?(ie.start=t,ie.end=J,ie):ie.subarray(t,J)}catch(N){throw A=N,N}finally{if(r&&(T(),i&&a.saveStructures)){let N=r.sharedLength||0,F=ie.subarray(t,J),G=cC(r,a);if(!A)return a.saveStructures(G,G.isCompatible)===!1?a.pack(I,H):(a.lastNamedStructuresLength=N,ie.length>1073741824&&(ie=null),F)}ie.length>1073741824&&(ie=null),H&P_&&(J=t)}};const T=()=>{x<10&&x++;let I=r.sharedLength||0;if(r.length>I&&!c&&(r.length=I),_>1e4)r.transitions=null,x=0,_=0,y.length>0&&(y=[]);else if(y.length>0&&!c){for(let H=0,A=y.length;H<A;H++)y[H][Cs]=0;y=[]}},P=I=>{var H=I.length;H<16?ie[J++]=144|H:H<65536?(ie[J++]=220,ie[J++]=H>>8,ie[J++]=H&255):(ie[J++]=221,kt.setUint32(J,H),J+=4);for(let A=0;A<H;A++)M(I[A])},M=I=>{J>On&&(ie=w(J));var H=typeof I,A;if(H==="string"){let N=I.length;if(Jt&&N>=4&&N<4096){if((Jt.size+=N)>rC){let te,ue=(Jt[0]?Jt[0].length*3+Jt[1].length:0)+10;J+ue>On&&(ie=w(J+ue));let _e;Jt.position?(_e=Jt,ie[J]=200,J+=3,ie[J++]=98,te=J-t,J+=4,Wm(t,M,0),kt.setUint16(te+t-3,J-t-te)):(ie[J++]=214,ie[J++]=98,te=J-t,J+=4),Jt=["",""],Jt.previous=_e,Jt.size=0,Jt.position=te}let Z=sC.test(I);Jt[Z?0:1]+=I,ie[J++]=193,M(Z?-N:N);return}let F;N<32?F=1:N<256?F=2:N<65536?F=3:F=5;let G=N*3;if(J+G>On&&(ie=w(J+G)),N<64||!o){let Z,te,ue,_e=J+F;for(Z=0;Z<N;Z++)te=I.charCodeAt(Z),te<128?ie[_e++]=te:te<2048?(ie[_e++]=te>>6|192,ie[_e++]=te&63|128):(te&64512)===55296&&((ue=I.charCodeAt(Z+1))&64512)===56320?(te=65536+((te&1023)<<10)+(ue&1023),Z++,ie[_e++]=te>>18|240,ie[_e++]=te>>12&63|128,ie[_e++]=te>>6&63|128,ie[_e++]=te&63|128):(ie[_e++]=te>>12|224,ie[_e++]=te>>6&63|128,ie[_e++]=te&63|128);A=_e-J-F}else A=o(I,J+F);A<32?ie[J++]=160|A:A<256?(F<2&&ie.copyWithin(J+2,J+1,J+1+A),ie[J++]=217,ie[J++]=A):A<65536?(F<3&&ie.copyWithin(J+3,J+2,J+2+A),ie[J++]=218,ie[J++]=A>>8,ie[J++]=A&255):(F<5&&ie.copyWithin(J+5,J+3,J+3+A),ie[J++]=219,kt.setUint32(J,A),J+=4),J+=A}else if(H==="number")if(I>>>0===I)I<32||I<128&&this.useRecords===!1||I<64&&!this.randomAccessStructure?ie[J++]=I:I<256?(ie[J++]=204,ie[J++]=I):I<65536?(ie[J++]=205,ie[J++]=I>>8,ie[J++]=I&255):(ie[J++]=206,kt.setUint32(J,I),J+=4);else if(I>>0===I)I>=-32?ie[J++]=256+I:I>=-128?(ie[J++]=208,ie[J++]=I+256):I>=-32768?(ie[J++]=209,kt.setInt16(J,I),J+=2):(ie[J++]=210,kt.setInt32(J,I),J+=4);else{let N;if((N=this.useFloat32)>0&&I<4294967296&&I>=-2147483648){ie[J++]=202,kt.setFloat32(J,I);let F;if(N<4||(F=I*xc[(ie[J]&127)<<1|ie[J+1]>>7])>>0===F){J+=4;return}else J--}ie[J++]=203,kt.setFloat64(J,I),J+=8}else if(H==="object"||H==="function")if(!I)ie[J++]=192;else{if(s){let F=s.get(I);if(F){if(!F.id){let G=s.idsToInsert||(s.idsToInsert=[]);F.id=G.push(F)}ie[J++]=214,ie[J++]=112,kt.setUint32(J,F.id),J+=4;return}else s.set(I,{offset:J-t})}let N=I.constructor;if(N===Object)S(I);else if(N===Array)P(I);else if(N===Map)if(this.mapAsEmptyObject)ie[J++]=128;else{A=I.size,A<16?ie[J++]=128|A:A<65536?(ie[J++]=222,ie[J++]=A>>8,ie[J++]=A&255):(ie[J++]=223,kt.setUint32(J,A),J+=4);for(let[F,G]of I)M(F),M(G)}else{for(let F=0,G=ic.length;F<G;F++){let Z=$h[F];if(I instanceof Z){let te=ic[F];if(te.write){te.type&&(ie[J++]=212,ie[J++]=te.type,ie[J++]=0);let it=te.write.call(this,I);it===I?Array.isArray(I)?P(I):S(I):M(it);return}let ue=ie,_e=kt,Fe=J;ie=null;let ke;try{ke=te.pack.call(this,I,it=>(ie=ue,ue=null,J+=it,J>On&&w(J),{target:ie,targetView:kt,position:J-it}),M)}finally{ue&&(ie=ue,kt=_e,J=Fe,On=ie.length-10)}ke&&(ke.length+J>On&&w(ke.length+J),J=oC(ke,ie,J,te.type));return}}if(Array.isArray(I))P(I);else{if(I.toJSON){const F=I.toJSON();if(F!==I)return M(F)}if(H==="function")return M(this.writeFunction&&this.writeFunction(I));S(I)}}}else if(H==="boolean")ie[J++]=I?195:194;else if(H==="bigint"){if(I<BigInt(1)<<BigInt(63)&&I>=-(BigInt(1)<<BigInt(63)))ie[J++]=211,kt.setBigInt64(J,I);else if(I<BigInt(1)<<BigInt(64)&&I>0)ie[J++]=207,kt.setBigUint64(J,I);else if(this.largeBigIntToFloat)ie[J++]=203,kt.setFloat64(J,Number(I));else{if(this.largeBigIntToString)return M(I.toString());if(this.useBigIntExtension&&I<BigInt(2)**BigInt(1023)&&I>-(BigInt(2)**BigInt(1023))){ie[J++]=199,J++,ie[J++]=66;let N=[],F;do{let G=I&BigInt(255);F=(G&BigInt(128))===(I<BigInt(0)?BigInt(128):BigInt(0)),N.push(G),I>>=BigInt(8)}while(!((I===BigInt(0)||I===BigInt(-1))&&F));ie[J-2]=N.length;for(let G=N.length;G>0;)ie[J++]=Number(N[--G]);return}else throw new RangeError(I+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string")}J+=8}else if(H==="undefined")this.encodeUndefinedAsNil?ie[J++]=192:(ie[J++]=212,ie[J++]=0,ie[J++]=0);else throw new Error("Unknown type: "+H)},D=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?I=>{let H;if(this.skipValues){H=[];for(let F in I)(typeof I.hasOwnProperty!="function"||I.hasOwnProperty(F))&&!this.skipValues.includes(I[F])&&H.push(F)}else H=Object.keys(I);let A=H.length;A<16?ie[J++]=128|A:A<65536?(ie[J++]=222,ie[J++]=A>>8,ie[J++]=A&255):(ie[J++]=223,kt.setUint32(J,A),J+=4);let N;if(this.coercibleKeyAsNumber)for(let F=0;F<A;F++){N=H[F];let G=Number(N);M(isNaN(G)?N:G),M(I[N])}else for(let F=0;F<A;F++)M(N=H[F]),M(I[N])}:I=>{ie[J++]=222;let H=J-t;J+=2;let A=0;for(let N in I)(typeof I.hasOwnProperty!="function"||I.hasOwnProperty(N))&&(M(N),M(I[N]),A++);if(A>65535)throw new Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');ie[H+++t]=A>>8,ie[H+t]=A&255},R=this.useRecords===!1?D:e.progressiveRecords&&!u?I=>{let H,A=r.transitions||(r.transitions=Object.create(null)),N=J++-t,F;for(let G in I)if(typeof I.hasOwnProperty!="function"||I.hasOwnProperty(G)){if(H=A[G],H)A=H;else{let Z=Object.keys(I),te=A;A=r.transitions;let ue=0;for(let _e=0,Fe=Z.length;_e<Fe;_e++){let ke=Z[_e];H=A[ke],H||(H=A[ke]=Object.create(null),ue++),A=H}N+t+1==J?(J--,B(A,Z,ue)):U(A,Z,N,ue),F=!0,A=te[G]}M(I[G])}if(!F){let G=A[Cs];G?ie[N+t]=G:U(A,Object.keys(I),N,0)}}:I=>{let H,A=r.transitions||(r.transitions=Object.create(null)),N=0;for(let G in I)(typeof I.hasOwnProperty!="function"||I.hasOwnProperty(G))&&(H=A[G],H||(H=A[G]=Object.create(null),N++),A=H);let F=A[Cs];F?F>=96&&u?(ie[J++]=((F-=96)&31)+96,ie[J++]=F>>5):ie[J++]=F:B(A,A.__keys__||Object.keys(I),N);for(let G in I)(typeof I.hasOwnProperty!="function"||I.hasOwnProperty(G))&&M(I[G])},O=typeof this.useRecords=="function"&&this.useRecords,S=O?I=>{O(I)?R(I):D(I)}:R,w=I=>{let H;if(I>16777216){if(I-t>Vm)throw new Error("Packed buffer would be larger than maximum buffer size");H=Math.min(Vm,Math.round(Math.max((I-t)*(I>67108864?1.25:2),4194304)/4096)*4096)}else H=(Math.max(I-t<<2,ie.length-1)>>12)+1<<12;let A=new ja(H);return kt=A.dataView||(A.dataView=new DataView(A.buffer,0,H)),I=Math.min(I,ie.length),ie.copy?ie.copy(A,0,t,I):A.set(ie.slice(t,I)),J-=t,t=0,On=A.length-10,ie=A},B=(I,H,A)=>{let N=r.nextId;N||(N=64),N<p&&this.shouldShareStructure&&!this.shouldShareStructure(H)?(N=r.nextOwnId,N<g||(N=p),r.nextOwnId=N+1):(N>=g&&(N=p),r.nextId=N+1);let F=H.highByte=N>=96&&u?N-96>>5:-1;I[Cs]=N,I.__keys__=H,r[N-64]=H,N<p?(H.isShared=!0,r.sharedLength=N-63,i=!0,F>=0?(ie[J++]=(N&31)+96,ie[J++]=F):ie[J++]=N):(F>=0?(ie[J++]=213,ie[J++]=114,ie[J++]=(N&31)+96,ie[J++]=F):(ie[J++]=212,ie[J++]=114,ie[J++]=N),A&&(_+=x*A),y.length>=f&&(y.shift()[Cs]=0),y.push(I),M(H))},U=(I,H,A,N)=>{let F=ie,G=J,Z=On,te=t;ie=Mo,J=0,t=0,ie||(Mo=ie=new ja(8192)),On=ie.length-10,B(I,H,N),Mo=ie;let ue=J;if(ie=F,J=G,On=Z,t=te,ue>1){let _e=J+ue-1;_e>On&&w(_e);let Fe=A+t;ie.copyWithin(Fe+ue,Fe+1,J),ie.set(Mo.slice(0,ue),Fe),J=_e}else ie[A+t]=Mo[0]},z=I=>{let H=iC(I,ie,t,J,r,w,(A,N,F)=>{if(F)return i=!0;J=N;let G=ie;return M(A),T(),G!==ie?{position:J,targetView:kt,target:ie}:J},this);if(H===0)return S(I);J=H}}useBuffer(e){ie=e,ie.dataView||(ie.dataView=new DataView(ie.buffer,ie.byteOffset,ie.byteLength)),kt=ie.dataView,J=0}set position(e){J=e}get position(){return J}set buffer(e){ie=e}get buffer(){return ie}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}$h=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,__];ic=[{pack(n,e,t){let i=n.getTime()/1e3;if((this.useTimestamp32||n.getMilliseconds()===0)&&i>=0&&i<4294967296){let{target:r,targetView:s,position:o}=e(6);r[o++]=214,r[o++]=255,s.setUint32(o,i)}else if(i>0&&i<4294967296){let{target:r,targetView:s,position:o}=e(10);r[o++]=215,r[o++]=255,s.setUint32(o,n.getMilliseconds()*4e6+(i/1e3/4294967296>>0)),s.setUint32(o+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return e(0),t(this.onInvalidDate());let{target:r,targetView:s,position:o}=e(3);r[o++]=212,r[o++]=255,r[o++]=255}else{let{target:r,targetView:s,position:o}=e(15);r[o++]=199,r[o++]=12,r[o++]=255,s.setUint32(o,n.getMilliseconds()*1e6),s.setBigInt64(o+4,BigInt(Math.floor(i)))}}},{pack(n,e,t){if(this.setAsEmptyObject)return e(0),t({});let i=Array.from(n),{target:r,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(r[s++]=212,r[s++]=115,r[s++]=0),t(i)}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=101,i[r++]=0),t([n.name,n.message,n.cause])}},{pack(n,e,t){let{target:i,position:r}=e(this.moreTypes?3:0);this.moreTypes&&(i[r++]=212,i[r++]=120,i[r++]=0),t([n.source,n.flags])}},{pack(n,e){this.moreTypes?Hm(n,16,e):Gm(yc?Buffer.from(n):new Uint8Array(n),e)}},{pack(n,e){let t=n.constructor;t!==A_&&this.moreTypes?Hm(n,E_.indexOf(t.name),e):Gm(n,e)}},{pack(n,e){let{target:t,position:i}=e(1);t[i]=193}}];function Hm(n,e,t,i){let r=n.byteLength;if(r+1<256){var{target:s,position:o}=t(4+r);s[o++]=199,s[o++]=r+1}else if(r+1<65536){var{target:s,position:o}=t(5+r);s[o++]=200,s[o++]=r+1>>8,s[o++]=r+1&255}else{var{target:s,position:o,targetView:a}=t(7+r);s[o++]=201,a.setUint32(o,r+1),o+=4}s[o++]=116,s[o++]=e,n.buffer||(n=new Uint8Array(n)),s.set(new Uint8Array(n.buffer,n.byteOffset,n.byteLength),o)}function Gm(n,e){let t=n.byteLength;var i,r;if(t<256){var{target:i,position:r}=e(t+2);i[r++]=196,i[r++]=t}else if(t<65536){var{target:i,position:r}=e(t+3);i[r++]=197,i[r++]=t>>8,i[r++]=t&255}else{var{target:i,position:r,targetView:s}=e(t+5);i[r++]=198,s.setUint32(r,t),r+=4}i.set(n,r)}function oC(n,e,t,i){let r=n.length;switch(r){case 1:e[t++]=212;break;case 2:e[t++]=213;break;case 4:e[t++]=214;break;case 8:e[t++]=215;break;case 16:e[t++]=216;break;default:r<256?(e[t++]=199,e[t++]=r):r<65536?(e[t++]=200,e[t++]=r>>8,e[t++]=r&255):(e[t++]=201,e[t++]=r>>24,e[t++]=r>>16&255,e[t++]=r>>8&255,e[t++]=r&255)}return e[t++]=i,e.set(n,t),t+=r,t}function aC(n,e){let t,i=e.length*6,r=n.length-i;for(;t=e.pop();){let s=t.offset,o=t.id;n.copyWithin(s+i,s,r),i-=6;let a=s+i;n[a++]=214,n[a++]=105,n[a++]=o>>24,n[a++]=o>>16&255,n[a++]=o>>8&255,n[a++]=o&255,r=s}return n}function Wm(n,e,t){if(Jt.length>0){kt.setUint32(Jt.position+n,J+t-Jt.position-n),Jt.stringsPosition=J-n;let i=Jt;Jt=null,e(i[0]),e(i[1])}}function lC(n){if(n.Class){if(!n.pack&&!n.write)throw new Error("Extension has no pack or write function");if(n.pack&&!n.type)throw new Error("Extension has no type (numeric code to identify the extension)");$h.unshift(n.Class),ic.unshift(n)}JR(n)}function cC(n,e){return n.isCompatible=t=>{let i=!t||(e.lastNamedStructuresLength||0)===t.length;return i||e._mergeStructures(t),i},n}let R_=new na({useRecords:!1});const fC=R_.pack,uC=R_.pack,hC=na,{NEVER:dC,ALWAYS:pC,DECIMAL_ROUND:mC,DECIMAL_FIT:gC}=w_,C_=512,P_=1024,I_=2048;function _C(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, or a Promise for an Async Iterable");if(typeof n[Symbol.iterator]=="function")return xC(n,e);if(typeof n.then=="function"||typeof n[Symbol.asyncIterator]=="function")return vC(n,e);throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a Promise")}function*xC(n,e){const t=new na(e);for(const i of n)yield t.pack(i)}async function*vC(n,e){const t=new na(e);for await(const i of n)yield t.pack(i)}function yC(n,e={}){if(!n||typeof n!="object")throw new Error("first argument must be an Iterable, Async Iterable, Iterator, Async Iterator, or a promise");const t=new Dr(e);let i;const r=s=>{let o;i&&(s=Buffer.concat([i,s]),i=void 0);try{o=t.unpackMultiple(s)}catch(a){if(a.incomplete)i=s.slice(a.lastPosition),o=a.values;else throw a}return o};if(typeof n[Symbol.iterator]=="function")return(function*(){for(const o of n)yield*r(o)})();if(typeof n[Symbol.asyncIterator]=="function")return(async function*(){for await(const o of n)yield*r(o)})()}const SC=yC,MC=_C,EC=!1,bC=!0,wC=Object.freeze(Object.defineProperty({__proto__:null,ALWAYS:pC,C1:Hh,DECIMAL_FIT:gC,DECIMAL_ROUND:mC,Decoder:jR,Encoder:hC,FLOAT32_OPTIONS:w_,NEVER:dC,Packr:na,RESERVE_START_SPACE:I_,RESET_BUFFER_MODE:P_,REUSE_BUFFER_MODE:C_,Unpackr:Dr,addExtension:lC,clearSource:nc,decode:tC,decodeIter:SC,encode:uC,encodeIter:MC,isNativeAccelerationEnabled:qR,mapsAsObjects:bC,pack:fC,roundFloat32:nC,unpack:QR,unpackMultiple:eC,useRecords:EC},Symbol.toStringTag,{value:"Module"})),TC=zh(wC);var $m;function L_(){if($m)return vf;$m=1;var n=kR(),e=d_(),t=p_(),i=m_(),r=VR(),s=Vh(),o=g_(),a=_c(),c=TC;let l=class D_{constructor(f,u){this.onStateChange=r.createSignal(),this.onError=r.createSignal(),this.onLeave=r.createSignal(),this.onJoin=r.createSignal(),this.hasJoined=!1,this.onMessageHandlers=i.createNanoEvents(),this.roomId=null,this.name=f,this.packr=new c.Packr,this.packr.encode(void 0),u&&(this.serializer=new(t.getSerializer("schema")),this.rootSchema=u,this.serializer.state=new u),this.onError((p,g)=>{var y;return(y=console.warn)===null||y===void 0?void 0:y.call(console,`colyseus.js - onError => (${p}) ${g}`)}),this.onLeave(()=>this.removeAllListeners())}connect(f,u,p=this,g,y){const _=new n.Connection(g.protocol);if(p.connection=_,_.events.onmessage=D_.prototype.onMessageCallback.bind(p),_.events.onclose=function(x){var T;if(!p.hasJoined){(T=console.warn)===null||T===void 0||T.call(console,`Room connection was closed unexpectedly (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason);return}x.code===a.CloseCode.DEVMODE_RESTART&&u?u():(p.onLeave.invoke(x.code,x.reason),p.destroy())},_.events.onerror=function(x){var T;(T=console.warn)===null||T===void 0||T.call(console,`Room, onError (${x.code}): ${x.reason}`),p.onError.invoke(x.code,x.reason)},g.protocol==="h3"){const x=new URL(f);_.connect(x.origin,g)}else _.connect(f,y)}leave(f=!0){return new Promise(u=>{this.onLeave(p=>u(p)),this.connection?f?(this.packr.buffer[0]=e.Protocol.LEAVE_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))):this.connection.close():this.onLeave.invoke(a.CloseCode.CONSENTED)})}onMessage(f,u){return this.onMessageHandlers.on(this.getMessageHandlerKey(f),u)}send(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const g=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.send(g)}sendUnreliable(f,u){const p={offset:1};this.packr.buffer[0]=e.Protocol.ROOM_DATA,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),this.packr.position=0;const g=u!==void 0?this.packr.pack(u,2048+p.offset):this.packr.buffer.subarray(0,p.offset);this.connection.sendUnreliable(g)}sendBytes(f,u){const p={offset:1};if(this.packr.buffer[0]=e.Protocol.ROOM_DATA_BYTES,typeof f=="string"?s.encode.string(this.packr.buffer,f,p):s.encode.number(this.packr.buffer,f,p),u.byteLength+p.offset>this.packr.buffer.byteLength){const g=new Uint8Array(p.offset+u.byteLength);g.set(this.packr.buffer),this.packr.useBuffer(g)}this.packr.buffer.set(u,p.offset),this.connection.send(this.packr.buffer.subarray(0,p.offset+u.byteLength))}get state(){return this.serializer.getState()}removeAllListeners(){this.onJoin.clear(),this.onStateChange.clear(),this.onError.clear(),this.onLeave.clear(),this.onMessageHandlers.events={},this.serializer instanceof o.SchemaSerializer&&(this.serializer.decoder.root.callbacks={})}onMessageCallback(f){const u=new Uint8Array(f.data),p={offset:1},g=u[0];if(g===e.Protocol.JOIN_ROOM){const y=s.decode.utf8Read(u,p,u[p.offset++]);if(this.serializerId=s.decode.utf8Read(u,p,u[p.offset++]),!this.serializer){const _=t.getSerializer(this.serializerId);this.serializer=new _}u.byteLength>p.offset&&this.serializer.handshake&&this.serializer.handshake(u,p),this.reconnectionToken=`${this.roomId}:${y}`,this.hasJoined=!0,this.onJoin.invoke(),this.packr.buffer[0]=e.Protocol.JOIN_ROOM,this.connection.send(this.packr.buffer.subarray(0,1))}else if(g===e.Protocol.ERROR){const y=s.decode.number(u,p),_=s.decode.string(u,p);this.onError.invoke(y,_)}else if(g===e.Protocol.LEAVE_ROOM)this.leave();else if(g===e.Protocol.ROOM_STATE)this.serializer.setState(u,p),this.onStateChange.invoke(this.serializer.getState());else if(g===e.Protocol.ROOM_STATE_PATCH)this.serializer.patch(u,p),this.onStateChange.invoke(this.serializer.getState());else if(g===e.Protocol.ROOM_DATA){const y=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p),_=u.byteLength>p.offset?c.unpack(u,{start:p.offset}):void 0;this.dispatchMessage(y,_)}else if(g===e.Protocol.ROOM_DATA_BYTES){const y=s.decode.stringCheck(u,p)?s.decode.string(u,p):s.decode.number(u,p);this.dispatchMessage(y,u.subarray(p.offset))}}dispatchMessage(f,u){var p;const g=this.getMessageHandlerKey(f);this.onMessageHandlers.events[g]?this.onMessageHandlers.emit(g,u):this.onMessageHandlers.events["*"]?this.onMessageHandlers.emit("*",f,u):(p=console.warn)===null||p===void 0||p.call(console,`colyseus.js: onMessage() not registered for type '${f}'.`)}destroy(){this.serializer&&this.serializer.teardown()}getMessageHandlerKey(f){switch(typeof f){case"string":return f;case"number":return`i${f}`;default:throw new Error("invalid message type.")}}};return vf.Room=l,vf}var Af={};function Xm(n,e){e.headers=n.headers||{},e.statusMessage=n.statusText,e.statusCode=n.status,e.data=n.response}function Pi(n,e,t){return new Promise(function(i,r){t=t||{};var s=new XMLHttpRequest,o,a,c,l=t.body,h=t.headers||{};t.timeout&&(s.timeout=t.timeout),s.ontimeout=s.onerror=function(f){f.timeout=f.type=="timeout",r(f)},s.onabort=function(f){f.aborted=!0,r(f)},s.open(n,e.href||e),s.onload=function(){for(c=s.getAllResponseHeaders().trim().split(/[\r\n]+/),Xm(s,s);a=c.shift();)a=a.split(": "),s.headers[a.shift().toLowerCase()]=a.join(": ");if(a=s.headers["content-type"],a&&~a.indexOf("application/json"))try{s.data=JSON.parse(s.data,t.reviver)}catch(f){return Xm(s,f),r(f)}(s.status>=400?r:i)(s)},typeof FormData<"u"&&l instanceof FormData||l&&typeof l=="object"&&(h["content-type"]="application/json",l=JSON.stringify(l)),s.withCredentials=!!t.withCredentials;for(o in h)s.setRequestHeader(o,h[o]);s.send(l),t.signal&&t.signal.addEventListener("abort",function(){s.abort()})})}var AC=Pi.bind(Pi,"GET"),RC=Pi.bind(Pi,"POST"),CC=Pi.bind(Pi,"PATCH"),PC=Pi.bind(Pi,"DELETE"),IC=Pi.bind(Pi,"PUT");const DC=Object.freeze(Object.defineProperty({__proto__:null,del:PC,get:AC,patch:CC,post:RC,put:IC,send:Pi},Symbol.toStringTag,{value:"Module"})),LC=zh(DC);var qm;function NC(){if(qm)return Af;qm=1;var n=_c(),e=LC;function t(s){var o=Object.create(null);return s&&Object.keys(s).forEach(function(a){if(a!=="default"){var c=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(o,a,c.get?c:{enumerable:!0,get:function(){return s[a]}})}}),o.default=s,Object.freeze(o)}var i=t(e);let r=class{constructor(o,a={}){this.client=o,this.headers=a}get(o,a={}){return this.request("get",o,a)}post(o,a={}){return this.request("post",o,a)}del(o,a={}){return this.request("del",o,a)}put(o,a={}){return this.request("put",o,a)}request(o,a,c={}){return i[o](this.client.getHttpEndpoint(a),this.getOptions(c)).catch(l=>{var h;if(l.aborted)throw new n.AbortError("Request aborted");const f=l.statusCode,u=((h=l.data)===null||h===void 0?void 0:h.error)||l.statusMessage||l.message;throw!f&&!u?l:new n.ServerError(f,u)})}getOptions(o){return o.headers=Object.assign({},this.headers,o.headers),this.authToken&&(o.headers.Authorization=`Bearer ${this.authToken}`),typeof cc<"u"&&cc.sys&&cc.sys.isNative||(o.withCredentials=!0),o}};return Af.HTTP=r,Af}var Rf={},Eo={},Ym;function OC(){if(Ym)return Eo;Ym=1;var n=gc;let e;function t(){if(!e)try{e=typeof cc<"u"&&cc.sys&&cc.sys.localStorage?cc.sys.localStorage:window.localStorage}catch{}return!e&&typeof globalThis.indexedDB<"u"&&(e=new o),e||(e={cache:{},setItem:function(a,c){this.cache[a]=c},getItem:function(a){this.cache[a]},removeItem:function(a){delete this.cache[a]}}),e}function i(a,c){t().setItem(a,c)}function r(a){t().removeItem(a)}function s(a,c){const l=t().getItem(a);typeof Promise>"u"||!(l instanceof Promise)?c(l):l.then(h=>c(h))}class o{constructor(){this.dbPromise=new Promise(c=>{const l=indexedDB.open("_colyseus_storage",1);l.onupgradeneeded=()=>l.result.createObjectStore("store"),l.onsuccess=()=>c(l.result)})}tx(c,l){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.dbPromise).transaction("store",c).objectStore("store");return l(f)})}setItem(c,l){return this.tx("readwrite",h=>h.put(l,c)).then()}getItem(c){return n.__awaiter(this,void 0,void 0,function*(){const l=yield this.tx("readonly",h=>h.get(c));return new Promise(h=>{l.onsuccess=()=>h(l.result)})})}removeItem(c){return this.tx("readwrite",l=>l.delete(c)).then()}}return Eo.getItem=s,Eo.removeItem=r,Eo.setItem=i,Eo}var Km;function N_(){if(Km)return Rf;Km=1;var n=gc,e=OC(),t=m_(),i,r,s,o;let a=class{constructor(l){this.http=l,this.settings={path:"/auth",key:"colyseus-auth-token"},i.set(this,!1),r.set(this,void 0),s.set(this,void 0),o.set(this,t.createNanoEvents()),e.getItem(this.settings.key,h=>this.token=h)}set token(l){this.http.authToken=l}get token(){return this.http.authToken}onChange(l){const h=n.__classPrivateFieldGet(this,o,"f").on("change",l);return n.__classPrivateFieldGet(this,i,"f")||n.__classPrivateFieldSet(this,r,new Promise((f,u)=>{this.getUserData().then(p=>{this.emitChange(Object.assign(Object.assign({},p),{token:this.token}))}).catch(p=>{this.emitChange({user:null,token:void 0})}).finally(()=>{f()})}),"f"),n.__classPrivateFieldSet(this,i,!0,"f"),h}getUserData(){return n.__awaiter(this,void 0,void 0,function*(){if(this.token)return(yield this.http.get(`${this.settings.path}/userdata`)).data;throw new Error("missing auth.token")})}registerWithEmailAndPassword(l,h,f){return n.__awaiter(this,void 0,void 0,function*(){const u=(yield this.http.post(`${this.settings.path}/register`,{body:{email:l,password:h,options:f}})).data;return this.emitChange(u),u})}signInWithEmailAndPassword(l,h){return n.__awaiter(this,void 0,void 0,function*(){const f=(yield this.http.post(`${this.settings.path}/login`,{body:{email:l,password:h}})).data;return this.emitChange(f),f})}signInAnonymously(l){return n.__awaiter(this,void 0,void 0,function*(){const h=(yield this.http.post(`${this.settings.path}/anonymous`,{body:{options:l}})).data;return this.emitChange(h),h})}sendPasswordResetEmail(l){return n.__awaiter(this,void 0,void 0,function*(){return(yield this.http.post(`${this.settings.path}/forgot-password`,{body:{email:l}})).data})}signInWithProvider(l){return n.__awaiter(this,arguments,void 0,function*(h,f={}){return new Promise((u,p)=>{const g=f.width||480,y=f.height||768,_=this.token?`?token=${this.token}`:"",x=`Login with ${h[0].toUpperCase()+h.substring(1)}`,T=this.http.client.getHttpEndpoint(`${f.prefix||`${this.settings.path}/provider`}/${h}${_}`),P=screen.width/2-g/2,M=screen.height/2-y/2;n.__classPrivateFieldSet(this,s,window.open(T,x,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="+g+", height="+y+", top="+M+", left="+P),"f");const D=O=>{O.data.user===void 0&&O.data.token===void 0||(clearInterval(R),n.__classPrivateFieldGet(this,s,"f").close(),n.__classPrivateFieldSet(this,s,void 0,"f"),window.removeEventListener("message",D),O.data.error!==void 0?p(O.data.error):(u(O.data),this.emitChange(O.data)))},R=setInterval(()=>{(!n.__classPrivateFieldGet(this,s,"f")||n.__classPrivateFieldGet(this,s,"f").closed)&&(n.__classPrivateFieldSet(this,s,void 0,"f"),p("cancelled"),window.removeEventListener("message",D))},200);window.addEventListener("message",D)})})}signOut(){return n.__awaiter(this,void 0,void 0,function*(){this.emitChange({user:null,token:null})})}emitChange(l){l.token!==void 0&&(this.token=l.token,l.token===null?e.removeItem(this.settings.key):e.setItem(this.settings.key,l.token)),n.__classPrivateFieldGet(this,o,"f").emit("change",l)}};return i=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,Rf.Auth=a,Rf}var Cf={},Zm;function UC(){if(Zm)return Cf;Zm=1;function n(e){var t;const i=((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||"localhost",r=e.hostname.split("."),s=!e.hostname.includes("trycloudflare.com")&&!e.hostname.includes("discordsays.com")&&r.length>2?`/${r[0]}`:"";return e.pathname.startsWith("/.proxy")?`${e.protocol}//${i}${s}${e.pathname}${e.search}`:`${e.protocol}//${i}/.proxy/colyseus${s}${e.pathname}${e.search}`}return Cf.discordURLBuilder=n,Cf}var Jm;function FC(){if(Jm)return qa;Jm=1;var n=gc,e=_c(),t=L_(),i=NC(),r=N_(),s=UC(),o;class a extends Error{constructor(f,u){super(f),this.code=u,this.name="MatchMakeError",Object.setPrototypeOf(this,a.prototype)}}const c=typeof window<"u"&&typeof((o=window==null?void 0:window.location)===null||o===void 0?void 0:o.hostname)<"u"?`${window.location.protocol.replace("http","ws")}//${window.location.hostname}${window.location.port&&`:${window.location.port}`}`:"ws://127.0.0.1:2567";let l=class{constructor(f=c,u){var p,g;if(typeof f=="string"){const y=f.startsWith("/")?new URL(f,c):new URL(f),_=y.protocol==="https:"||y.protocol==="wss:",x=Number(y.port||(_?443:80));this.settings={hostname:y.hostname,pathname:y.pathname,port:x,secure:_,searchParams:y.searchParams.toString()||void 0}}else f.port===void 0&&(f.port=f.secure?443:80),f.pathname===void 0&&(f.pathname=""),this.settings=f;this.settings.pathname.endsWith("/")&&(this.settings.pathname=this.settings.pathname.slice(0,-1)),this.http=new i.HTTP(this,(u==null?void 0:u.headers)||{}),this.auth=new r.Auth(this.http),this.urlBuilder=u==null?void 0:u.urlBuilder,!this.urlBuilder&&typeof window<"u"&&(!((g=(p=window==null?void 0:window.location)===null||p===void 0?void 0:p.hostname)===null||g===void 0)&&g.includes("discordsays.com"))&&(this.urlBuilder=s.discordURLBuilder,console.log("Colyseus SDK: Discord Embedded SDK detected. Using custom URL builder."))}joinOrCreate(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("joinOrCreate",u,p,g)})}create(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("create",u,p,g)})}join(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("join",u,p,g)})}joinById(f){return n.__awaiter(this,arguments,void 0,function*(u,p={},g){return yield this.createMatchMakeRequest("joinById",u,p,g)})}reconnect(f,u){return n.__awaiter(this,void 0,void 0,function*(){if(typeof f=="string"&&typeof u=="string")throw new Error("DEPRECATED: .reconnect() now only accepts 'reconnectionToken' as argument.\nYou can get this token from previously connected `room.reconnectionToken`");const[p,g]=f.split(":");if(!p||!g)throw new Error(`Invalid reconnection token format.
The format should be roomId:reconnectionToken`);return yield this.createMatchMakeRequest("reconnect",p,{reconnectionToken:g},u)})}consumeSeatReservation(f,u,p){return n.__awaiter(this,void 0,void 0,function*(){const g=this.createRoom(f.room.name,u);g.roomId=f.room.roomId,g.sessionId=f.sessionId;const y={sessionId:g.sessionId};f.reconnectionToken&&(y.reconnectionToken=f.reconnectionToken);const _=p||g;return g.connect(this.buildEndpoint(f.room,y,f.protocol),f.devMode&&(()=>n.__awaiter(this,void 0,void 0,function*(){console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} Re-establishing connection with room id '${g.roomId}'...`);let x=0,T=8;const P=()=>n.__awaiter(this,void 0,void 0,function*(){x++;try{yield this.consumeSeatReservation(f,u,_),console.info(`[Colyseus devMode]: ${String.fromCodePoint(9989)} Successfully re-established connection with room '${g.roomId}'`)}catch{x<T?(console.info(`[Colyseus devMode]: ${String.fromCodePoint(128260)} retrying... (${x} out of ${T})`),setTimeout(P,2e3)):console.info(`[Colyseus devMode]: ${String.fromCodePoint(10060)} Failed to reconnect. Is your server running? Please check server logs.`)}});setTimeout(P,2e3)})),_,f,this.http.headers),new Promise((x,T)=>{const P=(M,D)=>T(new e.ServerError(M,D));_.onError.once(P),_.onJoin.once(()=>{_.onError.remove(P),x(_)})})})}createMatchMakeRequest(f,u){return n.__awaiter(this,arguments,void 0,function*(p,g,y={},_,x){const T=(yield this.http.post(`matchmake/${p}/${g}`,{headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(y)})).data;if(T.error)throw new a(T.error,T.code);return p==="reconnect"&&(T.reconnectionToken=y.reconnectionToken),yield this.consumeSeatReservation(T,_,x)})}createRoom(f,u){return new t.Room(f,u)}buildEndpoint(f,u={},p="ws"){let g=this.settings.searchParams||"";this.http.authToken&&(u._authToken=this.http.authToken);for(const x in u)u.hasOwnProperty(x)&&(g+=(g?"&":"")+`${x}=${u[x]}`);p==="h3"&&(p="http");let y=this.settings.secure?`${p}s://`:`${p}://`;f.publicAddress?y+=`${f.publicAddress}`:y+=`${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}`;const _=`${y}/${f.processId}/${f.roomId}?${g}`;return this.urlBuilder?this.urlBuilder(new URL(_)):_}getHttpEndpoint(f=""){const u=f.startsWith("/")?f:`/${f}`;let p=`${this.settings.secure?"https":"http"}://${this.settings.hostname}${this.getEndpointPort()}${this.settings.pathname}${u}`;return this.settings.searchParams&&(p+=`?${this.settings.searchParams}`),this.urlBuilder?this.urlBuilder(new URL(p)):p}getEndpointPort(){return this.settings.port!==80&&this.settings.port!==443?`:${this.settings.port}`:""}};return l.VERSION="0.16.22",qa.Client=l,qa.MatchMakeError=a,qa}var Pf={},jm;function BC(){if(jm)return Pf;jm=1;let n=class{setState(t){}getState(){return null}patch(t){}teardown(){}handshake(t){}};return Pf.NoneSerializer=n,Pf}var Qm;function zC(){return Qm||(Qm=1,(function(n){IR();var e=FC(),t=d_(),i=L_(),r=N_(),s=_c(),o=g_(),a=BC(),c=p_();c.registerSerializer("schema",o.SchemaSerializer),c.registerSerializer("none",a.NoneSerializer),n.Client=e.Client,n.MatchMakeError=e.MatchMakeError,Object.defineProperty(n,"ErrorCode",{enumerable:!0,get:function(){return t.ErrorCode}}),Object.defineProperty(n,"Protocol",{enumerable:!0,get:function(){return t.Protocol}}),n.Room=i.Room,n.Auth=r.Auth,n.ServerError=s.ServerError,n.SchemaSerializer=o.SchemaSerializer,n.getStateCallbacks=o.getStateCallbacks,n.registerSerializer=c.registerSerializer})(_f)),_f}var kC=zC();const VC="wss://cargo-skies.fly.dev";async function HC(n,e){const t=new kC.Client(VC),i=e===null?await t.create("race",{nickname:n,code:o1()}):await t.join("race",{nickname:n,code:e.toUpperCase()});return{room:i,sessionId:i.sessionId,isHost:()=>i.state.hostSessionId===i.sessionId,sendInput:r=>i.send("input",r),start:()=>i.send("start",{}),setOptions:r=>i.send("options",r)}}const O_="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",U_="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:320px;display:flex;flex-direction:column;gap:12px",hl="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let bn=null;const GC=()=>["localhost","127.0.0.1"].includes(location.hostname)||!0;function WC(n,e){const t=GC(),i=t?"":"disabled";bn=document.createElement("div"),bn.style.cssText=O_;const r=document.createElement("div");if(r.style.cssText=U_,r.innerHTML=`
    <h1 style="margin:0;font-size:24px">Cargo Skies ✈️</h1>
    <input id="nick" placeholder="Your pilot name" maxlength="16"
           style="padding:10px;border-radius:8px;border:none;font-size:16px" />
    <div id="mp" style="display:flex;flex-direction:column;gap:12px">
      <button id="create" ${i} style="${hl}">Start a race</button>
      <div style="display:flex;gap:8px">
        <input id="code" placeholder="Code" maxlength="4" ${i}
               style="padding:10px;border-radius:8px;border:none;font-size:16px;width:90px;text-transform:uppercase" />
        <button id="join" ${i} style="${hl};background:#3d6ee8;flex:1">Join a race</button>
      </div>
    </div>
    ${t?"":'<div style="font-size:12px;opacity:.6;margin-top:-6px">Multiplayer races are coming soon ✨</div>'}
    <div style="height:1px;background:rgba(255,255,255,.15);margin:4px 0"></div>
    <button id="practice" style="${hl};background:#2fbf71">Practice (solo) — no server needed</button>`,bn.appendChild(r),document.body.appendChild(bn),!t){const c=r.querySelector("#mp");c.style.opacity="0.35";for(const l of c.querySelectorAll("button, input"))l.style.cursor="not-allowed"}const s=r.querySelector("#nick"),o=r.querySelector("#code"),a=new URLSearchParams(location.search).get("r");a&&/^[A-Za-z0-9]{4}$/.test(a)&&(o.value=a.toUpperCase()),r.querySelector("#create").addEventListener("click",()=>{n(s.value||"Pilot",null)}),r.querySelector("#join").addEventListener("click",()=>{o.value.length===4&&n(s.value||"Pilot",o.value)}),r.querySelector("#practice").addEventListener("click",()=>{e()})}const $C="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer;color:#fff",e0=(n,e,t)=>`<div data-${n} style="display:flex;gap:6px">${e.map(i=>`<button data-v="${i}" style="${$C};background:${i===t?"#e84d3d":"rgba(255,255,255,.12)"}">${i}</button>`).join("")}</div>`;function XC(n,e,t,i){var l;bn||(bn=document.createElement("div"),bn.style.cssText=O_,document.body.appendChild(bn));const r=n.hostSessionId===e,s=[];n.players.forEach(h=>s.push(h.nickname));const o=`${location.origin}${location.pathname}?r=${n.code}`,a=`≈ ${n.legCount*2} min`,c=r?`
      <div style="font-size:13px;opacity:.8">Legs per contract (${a})</div>
      ${e0("legs",["2","3","4","5","6"],String(n.legCount))}
      <div style="font-size:13px;opacity:.8">Difficulty</div>
      ${e0("diff",["kids","normal","expert"],n.difficulty)}`:`<div style="opacity:.8;font-size:14px">Route: ${n.legCount} legs · ${n.difficulty} · ${a}</div>`;bn.innerHTML=`
    <div style="${U_}">
      <h2 style="margin:0">Room ${n.code}</h2>
      <div style="opacity:.8">Share: <a href="${o}" style="color:#8fb7ff">${o}</a></div>
      <div>${s.map(h=>`🛩️ ${h}`).join("<br>")}</div>
      ${c}
      ${r?`<button id="go" style="${hl}">Start race</button>`:"<div style='opacity:.7'>Waiting for host…</div>"}
    </div>`,(l=bn.querySelector("#go"))==null||l.addEventListener("click",t);for(const h of bn.querySelectorAll("[data-legs] button"))h.addEventListener("click",()=>i({legCount:Number(h.dataset.v)}));for(const h of bn.querySelectorAll("[data-diff] button"))h.addEventListener("click",()=>i({difficulty:h.dataset.v??"normal"}))}function t0(){bn==null||bn.remove(),bn=null}const qC="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",YC="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:360px;display:flex;flex-direction:column;gap:14px",Qa="padding:10px 16px;border:none;border-radius:10px;background:#2fbf71;color:#fff;font:600 16px system-ui;cursor:pointer",bo="flex:1;padding:8px 4px;border:none;border-radius:8px;font:600 13px system-ui;cursor:pointer";let yi=null;function KC(n,e){yi==null||yi.remove(),yi=document.createElement("div"),yi.style.cssText=qC;const t=document.createElement("div");t.style.cssText=YC;const i=Object.keys(Ps).map(u=>`<button data-plane="${u}" title="${Ps[u].blurb}" style="${bo}">${Ps[u].emoji}<br>${Ps[u].name}</button>`).join("");t.innerHTML=`
    <h2 style="margin:0">Solo flight 🛩️</h2>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Your plane</div>
      <div data-planes style="display:flex;gap:6px">${i}</div>
      <div data-blurb style="font-size:12px;opacity:.7;margin-top:4px;min-height:14px"></div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Difficulty</div>
      <div data-diff style="display:flex;gap:6px">
        <button data-v="kids" style="${bo}">Kids</button>
        <button data-v="normal" style="${bo}">Normal</button>
        <button data-v="expert" style="${bo}">Expert</button>
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Plane speed</div>
      <div data-speed style="display:flex;gap:6px">
        ${Object.keys(bu).map(u=>`<button data-v="${u}" style="${bo}">${bu[u].name}</button>`).join("")}
      </div>
    </div>
    <div>
      <div style="font-size:13px;opacity:.8;margin-bottom:6px">Legs per contract: <b data-legs-label>3</b></div>
      <input data-legs type="range" min="1" max="6" value="3" style="width:100%" />
    </div>
    <button data-contract style="${Qa}">Start contract</button>
    <button data-trial style="${Qa};background:#e8a53d">⏱ Timed trial (race your ghost)</button>
    <div style="display:flex;gap:8px">
      <button data-free style="${Qa};background:#3d6ee8;flex:1">Free fly</button>
      <button data-passport style="${Qa};background:#9a6dce;flex:1">📔 Passport</button>
    </div>`,yi.appendChild(t),document.body.appendChild(yi);let r="normal",s="seaplane",o="normal";const a=(u,p)=>{for(const g of t.querySelectorAll(`${u} button`))g.style.background=p(g)?"#e84d3d":"rgba(255,255,255,.12)",g.style.color="#fff"},c=()=>{a("[data-diff]",u=>u.dataset.v===r),a("[data-planes]",u=>u.dataset.plane===s),a("[data-speed]",u=>u.dataset.v===o),t.querySelector("[data-blurb]").textContent=Ps[s].blurb};c();for(const u of t.querySelectorAll("[data-diff] button"))u.addEventListener("click",()=>{r=u.dataset.v,c()});for(const u of t.querySelectorAll("[data-planes] button"))u.addEventListener("click",()=>{s=u.dataset.plane,c()});for(const u of t.querySelectorAll("[data-speed] button"))u.addEventListener("click",()=>{o=u.dataset.v,c()});const l=t.querySelector("[data-legs]"),h=t.querySelector("[data-legs-label]");l.addEventListener("input",()=>{h.textContent=l.value});const f=u=>({mode:u,difficulty:r,legCount:Number(l.value),plane:s,speed:o});t.querySelector("[data-contract]").addEventListener("click",()=>n(f("contract"))),t.querySelector("[data-trial]").addEventListener("click",()=>n(f("trial"))),t.querySelector("[data-free]").addEventListener("click",()=>n(f("free"))),t.querySelector("[data-passport]").addEventListener("click",e)}function ZC(){yi==null||yi.remove(),yi=null}const dl=n=>{const e=Math.floor(n/60),t=n-e*60;return`${e}:${t.toFixed(1).padStart(4,"0")}`},JC={delivery:"Too high! Dive below the drop altitude",vip:"Too fast! Ease off for the VIP"};function jC(n){let e=null,t=0,i=0,r=0,s=0,o=[],a=0;const c=()=>(e==null?void 0:e.legs[t])??null,l=()=>{var f;const h=c();!h||!e||(i=0,s=0,n.hints.setTarget(h.countryId),n.hints.setFlags(wu(0,e.difficulty)),n.beacon.showAt(h.zone.lat,h.zone.lon),n.banner.show(h,pc(((f=n.countries[h.countryId])==null?void 0:f.cca2)??"")))};return{startContract(h){e=u1(n.countries,n.landmarks,n.riddles,{seed:h.seed??Date.now()>>>0,legCount:h.legCount,difficulty:h.difficulty}),t=0,r=0,o=[],a=0,l()},stop(){e=null,n.hints.clear(),n.beacon.hide(),n.banner.hide()},isActive(){return e!==null},update(h,f){var y;const u=c();if(!e||!u)return;if(a>0){a-=f,a<=0&&l();return}i+=f,r+=f,n.banner.setClock(`⏱ ${dl(r)}`);const p=wu(i,e.difficulty);n.hints.setFlags(p),n.banner.setCompass(p.compass?(Z0(h.lat,h.lon,u.zone.lat,u.zone.lon)-h.headingDeg+360)%360:null);const g=J0(h,u,s,f);if(s=g.dwellS,n.banner.setDwell(u.type==="refuel"&&g.inZone?s/Th:null),n.banner.setWarning(g.requirementBlocked?JC[u.type]??null:null),g.complete){o.push(i);const _=((y=n.countries[u.countryId])==null?void 0:y.name)??u.countryId;if(n.hints.clear(),n.beacon.hide(),t+1<e.legs.length)n.banner.toast(`✅ ${_}! Leg ${t+1} of ${e.legs.length} done`),t+=1,a=1.2;else{n.banner.hide();const x={contract:e,legTimesS:o,totalS:r};e=null,n.onContractComplete(x)}}}}}const n0=13606703,QC=16765471;function e2(n){let e=null,t={continent:!1,outline:!1};const i=new Set,r=()=>{var s;for(const o of i)(s=n.countryMaterials.get(o))==null||s.emissive.setHex(0);i.clear()};return{setTarget(s){r(),e=s},setFlags(s){!s.continent&&t.continent&&r(),t=s},update(s){if(!e)return;const o=n.continentOf.get(e);if(t.continent&&o){const c=.12+.08*Math.sin(s*2.5);for(const[l,h]of n.countryMaterials)n.continentOf.get(l)===o&&l!==e&&(h.emissive.setHex(n0),h.emissiveIntensity=c,i.add(l))}const a=n.countryMaterials.get(e);a&&(t.outline?(a.emissive.setHex(QC),a.emissiveIntensity=.4+.3*Math.sin(s*5),i.add(e)):t.continent&&(a.emissive.setHex(n0),a.emissiveIntensity=.12+.08*Math.sin(s*2.5),i.add(e)))},clear(){r(),e=null,t={continent:!1,compass:!1,outline:!1}}}}const t2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:10",n2="background:#141b3d;padding:28px 32px;border-radius:16px;min-width:380px;display:flex;flex-direction:column;gap:12px",i0="padding:10px 16px;border:none;border-radius:10px;background:#e84d3d;color:#fff;font:600 16px system-ui;cursor:pointer";let Si=null;function i2(n,e,t,i,r){Si==null||Si.remove(),Si=document.createElement("div"),Si.style.cssText=t2;const s=n.contract.legs.map((c,l)=>{const h=e[c.countryId],f=t.includes(c.countryId)?" 🆕":"";return`<tr>
        <td style="padding:3px 10px 3px 0;opacity:.7">${l+1}.</td>
        <td style="padding:3px 10px 3px 0">${pc((h==null?void 0:h.cca2)??"")} ${(h==null?void 0:h.name)??c.countryId}${f}</td>
        <td style="padding:3px 0;text-align:right;font-variant-numeric:tabular-nums">${dl(n.legTimesS[l]??0)}</td>
      </tr>`}).join(""),o=i!==null?n.totalS<=i?'<div style="color:#2fbf71;font-weight:700">🎉 New best time!</div>':`<div style="opacity:.8">Best: ${dl(i)}</div>`:"",a=document.createElement("div");a.style.cssText=n2,a.innerHTML=`
    <h2 style="margin:0">🏆 Contract complete!</h2>
    <table style="border-collapse:collapse;font-size:15px">${s}</table>
    <div style="font-size:20px;font-weight:800">Total ${dl(n.totalS)}</div>
    ${o}
    ${t.length>0?`<div style="opacity:.85">📔 ${t.length} new passport stamp${t.length>1?"s":""}!</div>`:""}
    <button data-again style="${i0}">New contract</button>
    <button data-menu style="${i0};background:#3d6ee8">Menu</button>`,Si.appendChild(a),document.body.appendChild(Si),a.querySelector("[data-again]").addEventListener("click",()=>{r0(),r.onNewContract()}),a.querySelector("[data-menu]").addEventListener("click",()=>{r0(),r.onMenu()})}function r0(){Si==null||Si.remove(),Si=null}const F_="cargoSkies.passport.v1";function B_(){try{return JSON.parse(localStorage.getItem(F_)??"{}")}catch{return{}}}function r2(n){const e=B_(),t=[];for(const i of n)e[i]||t.push(i),e[i]=(e[i]??0)+1;return localStorage.setItem(F_,JSON.stringify(e)),t}const s2="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(11,16,38,.85);color:#fff;font:16px system-ui;z-index:11";let si=null;function o2(n,e){si==null||si.remove();const t=B_(),i=Object.entries(t).map(([o,a])=>({meta:n[o],count:a})).filter(o=>o.meta!==void 0).sort((o,a)=>o.meta.name.localeCompare(a.meta.name)),r=Object.values(n).filter(o=>o.playable).length;si=document.createElement("div"),si.style.cssText=s2;const s=i.map(o=>`<div style="display:flex;gap:8px;align-items:center;padding:4px 8px;background:rgba(255,255,255,.06);border-radius:8px">
          <span style="font-size:22px">${pc(o.meta.cca2)}</span>
          <span style="flex:1">${o.meta.name}</span>
          <span style="opacity:.6">×${o.count}</span>
        </div>`).join("");si.innerHTML=`
    <div style="background:#141b3d;padding:28px 32px;border-radius:16px;width:420px;max-height:75vh;display:flex;flex-direction:column;gap:12px">
      <h2 style="margin:0">📔 Passport — ${i.length} / ${r} countries</h2>
      <div style="overflow-y:auto;display:flex;flex-direction:column;gap:6px">${s||"<div style='opacity:.7'>No stamps yet — complete a contract leg to earn your first!</div>"}</div>
      <button data-close style="padding:10px 16px;border:none;border-radius:10px;background:#3d6ee8;color:#fff;font:600 16px system-ui;cursor:pointer">Close</button>
    </div>`,document.body.appendChild(si),si.querySelector("[data-close]").addEventListener("click",()=>{si==null||si.remove(),si=null})}const ah=.1,z_=(n,e,t)=>`cargoSkies.trial.v2.${n}.${e}.${t}`,a2=(n,e)=>n.charCodeAt(0)*7919+e*104729>>>0;function s0(n,e,t){try{const i=localStorage.getItem(z_(n,e,t));return i?JSON.parse(i):null}catch{return null}}function l2(n,e,t,i){localStorage.setItem(z_(n,e,t),JSON.stringify(i))}const o0=n=>new X(n.x,n.y,n.z);function c2(n){const e=Ql(16777215);e.traverse(i=>{i instanceof Rt&&i.material instanceof rs&&(i.material=i.material.clone(),i.material.transparent=!0,i.material.opacity=.35)}),e.visible=!1,n.add(e);let t=[];return{start(i){t=i,e.visible=t.length>0},stop(){t=[],e.visible=!1},update(i){if(t.length===0)return;const r=i/ah,s=Math.min(t.length-1,Math.floor(r)),o=t[Math.min(t.length-1,s+1)],a=t[s],c=Math.min(1,r-s),l=a.lat+(o.lat-a.lat)*c,h=(o.lon-a.lon+540)%360-180,f=(a.lon+h*c+540)%360-180,u=a.altKm+(o.altKm-a.altKm)*c,p=o0(ui(l,f,u)),g=hc(l,f,a.headingDeg,5);e.position.copy(p),e.up.copy(p.clone().normalize()),e.lookAt(o0(ui(g.lat,g.lon,u)))}}}const f2=34,u2=.004;function h2(){const n=new kn,e=new Hs({color:IA,gradientMap:Zo(),transparent:!0,opacity:.92});for(let t=0;t<f2;t++){const i=new kn,r=3+Math.floor(Math.random()*3);for(let l=0;l<r;l++){const h=1.2+Math.random()*1.6,f=new Rt(new Ai(h,10,8),e);f.position.set((l-r/2)*1.6,(Math.random()-.5)*.6,(Math.random()-.5)*1.4),f.scale.y=.6,i.add(f)}const s=(Math.random()-.5)*140,o=Math.random()*360-180,a=260+Math.random()*160,c=ui(s,o,a);i.position.set(c.x,c.y,c.z),i.lookAt(0,0,0),n.add(i)}return{group:n,update(t){n.rotation.y+=u2*t}}}const d2=12,p2=30,m2=.8,g2=1.2;function _2(n,e){const t=Math.max(0,n),i=d2+e*m2,r=p2+e*g2;return t<=i?1:t>=r?0:1-(t-i)/(r-i)}const Mi=Math.PI/180,Io=512,pl=96,x2=5,v2=26,y2=.7,S2="#24365e",M2="rgba(255,255,255,0.85)";function E2(n){const e=document.createElement("canvas");e.width=Io,e.height=pl;const t=e.getContext("2d");if(!t)throw new Error("2d canvas unavailable");let i=56;const r=()=>{t.font=`bold ${i}px 'Trebuchet MS', Verdana, sans-serif`};for(r();t.measureText(n).width>Io-24&&i>18;)i-=4,r();t.textAlign="center",t.textBaseline="middle",t.lineWidth=8,t.lineJoin="round",t.strokeStyle=M2,t.strokeText(n,Io/2,pl/2),t.fillStyle=S2,t.fillText(n,Io/2,pl/2);const s=new N0(e);return s.anisotropy=4,s}function b2(n,e,t,i){const r=Math.max(1.5,t*Math.cos(n*Mi)*(pl/Io)),s=new Ai(CA,12,4,(90+e-t/2)*Mi,t*Mi,(90-n-r/2)*Mi,r*Mi),o=new Bi({map:i,transparent:!0,opacity:0,depthWrite:!1});return new Rt(s,o)}function w2(n){const e=new kn,t=[];for(const r of n.features){if(r.properties.id==="ATA")continue;const s=t1(r.geometry),o=Math.min(v2,Math.max(x2,s.widthDeg*y2)),a=b2(s.lat,s.lon,o,E2(r.properties.name));a.visible=!1,e.add(a),t.push({mesh:a,widthDeg:o,direction:new X(Math.cos(s.lat*Mi)*Math.sin(s.lon*Mi),Math.sin(s.lat*Mi),Math.cos(s.lat*Mi)*Math.cos(s.lon*Mi))})}const i=new X;return{group:e,update(r){i.copy(r.position).normalize();for(const s of t){const o=Math.acos(E0.clamp(i.dot(s.direction),-1,1))/Mi,a=_2(o,s.widthDeg);s.mesh.visible=a>.02,s.mesh.material.opacity=a}}}}const Jn=1/60,T2=.25,A2=1/20;async function R2(){const n=document.getElementById("app");if(!n)throw new Error("#app root missing");const{world:e,countries:t,landmarks:i,riddles:r}=await zA(),s=Qb(e),{scene:o,camera:a,renderer:c}=BA(n),l=UA(e);o.add(l.group);const h=w2(e);o.add(h.group);const f=h2();o.add(f.group);let u=Ql();o.add(u);let p=Ah,g=q0;const y=(Ke,nt=15224125)=>{o.remove(u),u=Ql(nt,Ke),o.add(u),p=Ps[Ke].tuning,x=pm(u,a)},_=VA();let x=pm(u,a);const T=nR(document.body),P=iR(o),M=sR(o),D=hR(o),R=new X(0,.2,-2.2),O=.3,S=AR(document.body),w=PR(document.body),B=e2(l),U=pR({countries:t,banner:w,hints:B,beacon:M}),z=SR(o);let I=i1();const H=Ke=>{I=Ke},A=c2(o);let N=null,F=!1,G=[],Z=0,te=0;const ue=()=>{KC(_e,()=>{o2(t)})},_e=Ke=>{if(ZC(),N=Ke,y(Ke.plane),g=bu[Ke.speed].worldSpeedScale,F=Ke.mode==="trial",A.stop(),G=[],Z=0,te=0,Ke.mode==="contract")Fe.startContract({difficulty:Ke.difficulty,legCount:Ke.legCount});else if(Ke.mode==="trial"){const nt=a2(Ke.difficulty,Ke.legCount),st=s0(Ke.difficulty,Ke.legCount,Ke.speed);st&&A.start(st.track),Fe.startContract({difficulty:Ke.difficulty,legCount:Ke.legCount,seed:nt})}},Fe=jC({countries:t,landmarks:i,riddles:r,banner:w,hints:B,beacon:M,onContractComplete:Ke=>{w.setClock(null);const nt=r2(Ke.contract.legs.map(He=>He.countryId));let st=null;if(F&&N){const He=s0(N.difficulty,N.legCount,N.speed);st=(He==null?void 0:He.timeS)??Ke.totalS,(!He||Ke.totalS<He.timeS)&&l2(N.difficulty,N.legCount,N.speed,{timeS:Ke.totalS,track:G}),A.stop()}i2(Ke,t,nt,st,{onNewContract:()=>{N&&_e(N)},onMenu:ue})}}),ke=await new Promise(Ke=>{WC((nt,st)=>{HC(nt,st).then(Ke).catch(He=>{console.error("Connection failed",He);const pt=String((He==null?void 0:He.message)??He),Tt=/ECONNREFUSED|failed to connect|WebSocket|network|refused/i.test(pt);alert(Tt?"Can't reach the game server. Is it running? (pnpm dev:server)":st!==null?`No race found with code ${st.toUpperCase()}. Check the code and try again.`:"Couldn't start a race — see the console for details.")})},()=>Ke(null))}),it=ke?wR(document.body,Ke=>ke.room.send("useItem",{targetSessionId:Ke})):null;if(ke===null)t0(),ue();else{let Ke=!1,nt=!0;ke.room.onStateChange(st=>{var pt;const He=(pt=st.players)==null?void 0:pt.get(ke.sessionId);if(He){if(!Ke){Ke=!0,st.code&&history.replaceState(null,"",`?r=${st.code}`);const Tt=He.colorIdx??0;u.traverse(zt=>{zt instanceof Rt&&zt.material instanceof Hs&&zt.material.color.getHex()===15224125&&zt.material.color.setHex(jl[Tt%jl.length]??15224125)})}st.phase==="lobby"&&nt?XC(st,ke.sessionId,()=>ke.start(),Tt=>ke.setOptions(Tt)):nt&&(t0(),nt=!1),P.sync(st,ke.sessionId),S.update(st,ke.sessionId,()=>ke.start()),Ml(He.lat,He.lon,I.lat,I.lon)>Ib&&H({lat:He.lat,lon:He.lon,altKm:He.altKm,headingDeg:He.headingDeg,speedKmh:He.speedKmh})}})}let he=0,we=0,ve=0,je=0,et={throttle:0,turn:0,pitch:0};const tt=new bv;c.setAnimationLoop(()=>{var nt,st;for(tt.update(),he+=Math.min(tt.getDelta(),.25);he>=Jn;)et=_.read(Jn),I=r1(I,et,Jn,p,g),Fe.isActive()&&(Fe.update(I,Jn),F&&(te+=Jn,Z+=Jn,Z>=ah&&(Z-=ah,G.push({lat:I.lat,lon:I.lon,altKm:I.altKm,headingDeg:I.headingDeg})))),he-=Jn,we+=Jn,ve+=Jn;if(ke&&ve>=A2&&(ve=0,ke.sendInput(et)),we>=T2){we=0;const He=s.findCountryAt(I.lat,I.lon);T.setCountry(He?((nt=t[He])==null?void 0:nt.name)??He:null)}if(je+=Jn,x.update(I,et),h.update(a),ke){U.update(ke.room.state,ke.sessionId,I,Jn),it==null||it.update(ke.room.state,ke.sessionId);const He=(st=ke.room.state.players)==null?void 0:st.get(ke.sessionId);He&&Date.now()<He.tumbleUntil&&u.rotateZ(je*14)}z.update(ke?ke.room.state:null,je),B.update(je),M.update(je),f.update(Jn);const Ke=(I.speedKmh-zo)/(wh-zo);D.update(Jn,u.localToWorld(R.clone()),Ke>O),A.update(te),ke&&P.update(),T.setTelemetry(I),c.render(o,a)})}R2().catch(n=>{console.error("Failed to start Cargo Skies",n),document.body.textContent="Engine stalled — please refresh."});
