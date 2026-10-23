"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var p=q(function(B,d){
function R(e,r,a,s){var i,n,u,o,v,t;if(e<=0)return NaN;if(e===1||a===0)return r[s];for(i=s,u=0,v=0,t=0;t<e;t++)n=r[i],n===n&&(v+=1,u+=n),i+=a;if(v===0)return NaN;for(u/=v,i=s,o=0,t=0;t<e;t++)n=r[i],n===n&&(o+=n-u),i+=a;return u+o/v}d.exports=R
});var c=q(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=p();function O(e,r,a){return E(e,r,a,_(e,a))}m.exports=O
});var x=q(function(D,j){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),g=p();b(y,"ndarray",g);j.exports=y
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=x(),f,l=k(h(__dirname,"./native.js"));w(l)?f=z:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
