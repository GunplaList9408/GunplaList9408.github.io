(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-home-main-vue"],{1232:function(e,t,n){"use strict";function o(e){this.message=e}o.prototype=new Error,o.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new o("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,c=0,i="";r=t.charAt(c++);~r&&(n=a%4?64*n+r:r,a++%4)?i+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return i};function a(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return r(t)}}function c(e){this.message=e}function i(e,t){if("string"!=typeof e)throw new c("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(a(e.split(".")[n]))}catch(e){throw new c("Invalid token specified: "+e.message)}}c.prototype=new Error,c.prototype.name="InvalidTokenError",t["a"]=i},"1e6b":function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),r=n("af03"),a=n.n(r),c={id:"home-main"};function i(e,t,n,r,i,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createElementVNode"])("img",{style:{width:"320px"},onClick:t[0]||(t[0]=function(){return s._tokenCheck&&s._tokenCheck.apply(s,arguments)}),alt:"logo",src:a.a})])}var s=n("5530"),u=n("be92"),d=n("9ef5"),l=n("1232"),p=n("81d9"),f={name:"home-main",computed:Object(s["a"])({},Object(u["d"])(d["a"],["userCustomInfo","loggedInAccessToken"])),methods:Object(s["a"])(Object(s["a"])({},Object(u["c"])(d["a"],["logout"])),{},{_tokenCheck:function(){void 0===this.userCustomInfo?(p["a"].noIcon("잘못된 경로로 진입하셨거나 인증 정보가 없습니다. 로그인 화면으로 이동합니다.","확인"),this.$router.push({name:"user-login"})):new Date(1e3*Object(l["a"])(this.loggedInAccessToken).exp)<=new Date?(p["a"].noIcon("자동 로그인 기간이 만료 되었습니다. 다시 로그인 해 주세요 :)","확인"),this.$router.push({name:"user-login"})):this.$router.push({name:"user-gunpla-list"})}})},h=n("6b0d"),g=n.n(h);const w=g()(f,[["render",i]]);t["default"]=w},af03:function(e,t,n){e.exports=n.p+"img/gunpla_list_logo_click.ff967130.png"}}]);
//# sourceMappingURL=view-home-main-vue.04882b1d.js.map