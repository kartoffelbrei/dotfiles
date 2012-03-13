// ==UserScript==
// @name          g.e-hentai.org Better Navigation
// @namespace     http://g.e-hentai.org/
// @description   A better way to navigate through g.e-hentai gallery page.
// @include       http://g.e-hentai.org/*
// @include       http://exhentai.org/*
// @require http://userscripts.org/scripts/source/103196.user.js
// @history	1.3 Make it working with Firefox 4. Removed buggy up/down behavior
// @history	1.2 Make work again after site changes. Fixed Bug in image caching.
// @history	1.1 Added some links on the original page as requested by users. Improved handling of load pages too fast. Fixed some bugs. Various code improvements. Added automatic update system
// @history	1.0 Initial release
// @version 1.3
// ==/UserScript==

// Number of images to preload
var PreCachePages = 2;


function log(data){
	if(unsafeWindow.console){
		var output = '';
		if (data instanceof Array){
			jQuery.each(data, function(index, value) { 
				output = output + value + ' ';
			});	
		}else{
			output = data;
		}
		unsafeWindow.console.log(output);
	}
}

if (typeof(ScriptUpdater) != "undefined"){	ScriptUpdater.check(78971, '1.3');}

/***************************
***************************/
/*
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(aP,E){var ae=aP.document;var a=(function(){var bf=function(bA,bB){return new bf.fn.init(bA,bB,bd)},bv=aP.jQuery,bh=aP.$,bd,bz=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,bn=/\S/,bj=/^\s+/,be=/\s+$/,bi=/\d/,bb=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bo=/^[\],:{}\s]*$/,bx=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bq=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bk=/(?:^|:|,)(?:\s*\[)+/g,a9=/(webkit)[ \/]([\w.]+)/,bs=/(opera)(?:.*version)?[ \/]([\w.]+)/,br=/(msie) ([\w.]+)/,bt=/(mozilla)(?:.*? rv:([\w.]+))?/,by=navigator.userAgent,bw,bu=false,bc,a4="then done fail isResolved isRejected promise".split(" "),a5,bm=Object.prototype.toString,bg=Object.prototype.hasOwnProperty,ba=Array.prototype.push,bl=Array.prototype.slice,bp=String.prototype.trim,a6=Array.prototype.indexOf,a8={};bf.fn=bf.prototype={constructor:bf,init:function(bA,bE,bD){var bC,bF,bB,bG;if(!bA){return this}if(bA.nodeType){this.context=this[0]=bA;this.length=1;return this}if(bA==="body"&&!bE&&ae.body){this.context=ae;this[0]=ae.body;this.selector="body";this.length=1;return this}if(typeof bA==="string"){bC=bz.exec(bA);if(bC&&(bC[1]||!bE)){if(bC[1]){bE=bE instanceof bf?bE[0]:bE;bG=(bE?bE.ownerDocument||bE:ae);bB=bb.exec(bA);if(bB){if(bf.isPlainObject(bE)){bA=[ae.createElement(bB[1])];bf.fn.attr.call(bA,bE,true)}else{bA=[bG.createElement(bB[1])]}}else{bB=bf.buildFragment([bC[1]],[bG]);bA=(bB.cacheable?bf.clone(bB.fragment):bB.fragment).childNodes}return bf.merge(this,bA)}else{bF=ae.getElementById(bC[2]);if(bF&&bF.parentNode){if(bF.id!==bC[2]){return bD.find(bA)}this.length=1;this[0]=bF}this.context=ae;this.selector=bA;return this}}else{if(!bE||bE.jquery){return(bE||bD).find(bA)}else{return this.constructor(bE).find(bA)}}}else{if(bf.isFunction(bA)){return bD.ready(bA)}}if(bA.selector!==E){this.selector=bA.selector;this.context=bA.context}return bf.makeArray(bA,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return bl.call(this,0)},get:function(bA){return bA==null?this.toArray():(bA<0?this[this.length+bA]:this[bA])},pushStack:function(bB,bD,bA){var bC=this.constructor();if(bf.isArray(bB)){ba.apply(bC,bB)}else{bf.merge(bC,bB)}bC.prevObject=this;bC.context=this.context;if(bD==="find"){bC.selector=this.selector+(this.selector?" ":"")+bA}else{if(bD){bC.selector=this.selector+"."+bD+"("+bA+")"}}return bC},each:function(bB,bA){return bf.each(this,bB,bA)},ready:function(bA){bf.bindReady();bc.done(bA);return this},eq:function(bA){return bA===-1?this.slice(bA):this.slice(bA,+bA+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(bl.apply(this,arguments),"slice",bl.call(arguments).join(","))},map:function(bA){return this.pushStack(bf.map(this,function(bC,bB){return bA.call(bC,bB,bC)}))},end:function(){return this.prevObject||this.constructor(null)},push:ba,sort:[].sort,splice:[].splice};bf.fn.init.prototype=bf.fn;bf.extend=bf.fn.extend=function(){var bJ,bC,bA,bB,bG,bH,bF=arguments[0]||{},bE=1,bD=arguments.length,bI=false;if(typeof bF==="boolean"){bI=bF;bF=arguments[1]||{};bE=2}if(typeof bF!=="object"&&!bf.isFunction(bF)){bF={}}if(bD===bE){bF=this;--bE}for(;bE<bD;bE++){if((bJ=arguments[bE])!=null){for(bC in bJ){bA=bF[bC];bB=bJ[bC];if(bF===bB){continue}if(bI&&bB&&(bf.isPlainObject(bB)||(bG=bf.isArray(bB)))){if(bG){bG=false;bH=bA&&bf.isArray(bA)?bA:[]}else{bH=bA&&bf.isPlainObject(bA)?bA:{}}bF[bC]=bf.extend(bI,bH,bB)}else{if(bB!==E){bF[bC]=bB}}}}}return bF};bf.extend({noConflict:function(bA){aP.$=bh;if(bA){aP.jQuery=bv}return bf},isReady:false,readyWait:1,ready:function(bA){if(bA===true){bf.readyWait--}if(!bf.readyWait||(bA!==true&&!bf.isReady)){if(!ae.body){return setTimeout(bf.ready,1)}bf.isReady=true;if(bA!==true&&--bf.readyWait>0){return}bc.resolveWith(ae,[bf]);if(bf.fn.trigger){bf(ae).trigger("ready").unbind("ready")}}},bindReady:function(){if(bu){return}bu=true;if(ae.readyState==="complete"){return setTimeout(bf.ready,1)}if(ae.addEventListener){ae.addEventListener("DOMContentLoaded",a5,false);aP.addEventListener("load",bf.ready,false)}else{if(ae.attachEvent){ae.attachEvent("onreadystatechange",a5);aP.attachEvent("onload",bf.ready);var bA=false;try{bA=aP.frameElement==null}catch(bB){}if(ae.documentElement.doScroll&&bA){a7()}}}},isFunction:function(bA){return bf.type(bA)==="function"},isArray:Array.isArray||function(bA){return bf.type(bA)==="array"},isWindow:function(bA){return bA&&typeof bA==="object"&&"setInterval" in bA},isNaN:function(bA){return bA==null||!bi.test(bA)||isNaN(bA)},type:function(bA){return bA==null?String(bA):a8[bm.call(bA)]||"object"},isPlainObject:function(bB){if(!bB||bf.type(bB)!=="object"||bB.nodeType||bf.isWindow(bB)){return false}if(bB.constructor&&!bg.call(bB,"constructor")&&!bg.call(bB.constructor.prototype,"isPrototypeOf")){return false}var bA;for(bA in bB){}return bA===E||bg.call(bB,bA)},isEmptyObject:function(bB){for(var bA in bB){return false}return true},error:function(bA){throw bA},parseJSON:function(bA){if(typeof bA!=="string"||!bA){return null}bA=bf.trim(bA);if(bo.test(bA.replace(bx,"@").replace(bq,"]").replace(bk,""))){return aP.JSON&&aP.JSON.parse?aP.JSON.parse(bA):(new Function("return "+bA))()}else{bf.error("Invalid JSON: "+bA)}},parseXML:function(bC,bA,bB){if(aP.DOMParser){bB=new DOMParser();bA=bB.parseFromString(bC,"text/xml")}else{bA=new ActiveXObject("Microsoft.XMLDOM");bA.async="false";bA.loadXML(bC)}bB=bA.documentElement;if(!bB||!bB.nodeName||bB.nodeName==="parsererror"){bf.error("Invalid XML: "+bC)}return bA},noop:function(){},globalEval:function(bC){if(bC&&bn.test(bC)){var bB=ae.getElementsByTagName("head")[0]||ae.documentElement,bA=ae.createElement("script");bA.type="text/javascript";if(bf.support.scriptEval()){bA.appendChild(ae.createTextNode(bC))}else{bA.text=bC}bB.insertBefore(bA,bB.firstChild);bB.removeChild(bA)}},nodeName:function(bB,bA){return bB.nodeName&&bB.nodeName.toUpperCase()===bA.toUpperCase()},each:function(bD,bH,bC){var bB,bE=0,bF=bD.length,bA=bF===E||bf.isFunction(bD);if(bC){if(bA){for(bB in bD){if(bH.apply(bD[bB],bC)===false){break}}}else{for(;bE<bF;){if(bH.apply(bD[bE++],bC)===false){break}}}}else{if(bA){for(bB in bD){if(bH.call(bD[bB],bB,bD[bB])===false){break}}}else{for(var bG=bD[0];bE<bF&&bH.call(bG,bE,bG)!==false;bG=bD[++bE]){}}}return bD},trim:bp?function(bA){return bA==null?"":bp.call(bA)}:function(bA){return bA==null?"":bA.toString().replace(bj,"").replace(be,"")},makeArray:function(bD,bB){var bA=bB||[];if(bD!=null){var bC=bf.type(bD);if(bD.length==null||bC==="string"||bC==="function"||bC==="regexp"||bf.isWindow(bD)){ba.call(bA,bD)}else{bf.merge(bA,bD)}}return bA},inArray:function(bC,bD){if(bD.indexOf){return bD.indexOf(bC)}for(var bA=0,bB=bD.length;bA<bB;bA++){if(bD[bA]===bC){return bA}}return -1},merge:function(bE,bC){var bD=bE.length,bB=0;if(typeof bC.length==="number"){for(var bA=bC.length;bB<bA;bB++){bE[bD++]=bC[bB]}}else{while(bC[bB]!==E){bE[bD++]=bC[bB++]}}bE.length=bD;return bE},grep:function(bB,bG,bA){var bC=[],bF;bA=!!bA;for(var bD=0,bE=bB.length;bD<bE;bD++){bF=!!bG(bB[bD],bD);if(bA!==bF){bC.push(bB[bD])}}return bC},map:function(bB,bG,bA){var bC=[],bF;for(var bD=0,bE=bB.length;bD<bE;bD++){bF=bG(bB[bD],bD,bA);if(bF!=null){bC[bC.length]=bF}}return bC.concat.apply([],bC)},guid:1,proxy:function(bC,bB,bA){if(arguments.length===2){if(typeof bB==="string"){bA=bC;bC=bA[bB];bB=E}else{if(bB&&!bf.isFunction(bB)){bA=bB;bB=E}}}if(!bB&&bC){bB=function(){return bC.apply(bA||this,arguments)}}if(bC){bB.guid=bC.guid=bC.guid||bB.guid||bf.guid++}return bB},access:function(bA,bI,bG,bC,bF,bH){var bB=bA.length;if(typeof bI==="object"){for(var bD in bI){bf.access(bA,bD,bI[bD],bC,bF,bG)}return bA}if(bG!==E){bC=!bH&&bC&&bf.isFunction(bG);for(var bE=0;bE<bB;bE++){bF(bA[bE],bI,bC?bG.call(bA[bE],bE,bF(bA[bE],bI)):bG,bH)}return bA}return bB?bF(bA[0],bI):E},now:function(){return(new Date()).getTime()},_Deferred:function(){var bD=[],bE,bB,bC,bA={done:function(){if(!bC){var bG=arguments,bH,bK,bJ,bI,bF;if(bE){bF=bE;bE=0}for(bH=0,bK=bG.length;bH<bK;bH++){bJ=bG[bH];bI=bf.type(bJ);if(bI==="array"){bA.done.apply(bA,bJ)}else{if(bI==="function"){bD.push(bJ)}}}if(bF){bA.resolveWith(bF[0],bF[1])}}return this},resolveWith:function(bG,bF){if(!bC&&!bE&&!bB){bB=1;try{while(bD[0]){bD.shift().apply(bG,bF)}}finally{bE=[bG,bF];bB=0}}return this},resolve:function(){bA.resolveWith(bf.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return !!(bB||bE)},cancel:function(){bC=1;bD=[];return this}};return bA},Deferred:function(bB){var bA=bf._Deferred(),bD=bf._Deferred(),bC;bf.extend(bA,{then:function(bF,bE){bA.done(bF).fail(bE);return this},fail:bD.done,rejectWith:bD.resolveWith,reject:bD.resolve,isRejected:bD.isResolved,promise:function(bF,bE){if(bF==null){if(bC){return bC}bC=bF={}}bE=a4.length;while(bE--){bF[a4[bE]]=bA[a4[bE]]}return bF}});bA.then(bD.cancel,bA.cancel);delete bA.cancel;if(bB){bB.call(bA,bA)}return bA},when:function(bD){var bC=arguments,bE=bC.length,bB=bE<=1&&bD&&bf.isFunction(bD.promise)?bD:bf.Deferred(),bF=bB.promise(),bA;if(bE>1){bA=new Array(bE);bf.each(bC,function(bG,bH){bf.when(bH).then(function(bI){bA[bG]=arguments.length>1?bl.call(arguments,0):bI;if(!--bE){bB.resolveWith(bF,bA)}},bB.reject)})}else{if(bB!==bD){bB.resolve(bD)}}return bF},uaMatch:function(bB){bB=bB.toLowerCase();var bA=a9.exec(bB)||bs.exec(bB)||br.exec(bB)||bB.indexOf("compatible")<0&&bt.exec(bB)||[];return{browser:bA[1]||"",version:bA[2]||"0"}},sub:function(){function bB(bD,bE){return new bB.fn.init(bD,bE)}bf.extend(true,bB,this);bB.superclass=this;bB.fn=bB.prototype=this();bB.fn.constructor=bB;bB.subclass=this.subclass;bB.fn.init=function bC(bD,bE){if(bE&&bE instanceof bf&&!(bE instanceof bB)){bE=bB(bE)}return bf.fn.init.call(this,bD,bE,bA)};bB.fn.init.prototype=bB.fn;var bA=bB(ae);return bB},browser:{}});bc=bf._Deferred();bf.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bB,bA){a8["[object "+bA+"]"]=bA.toLowerCase()});bw=bf.uaMatch(by);if(bw.browser){bf.browser[bw.browser]=true;bf.browser.version=bw.version}if(bf.browser.webkit){bf.browser.safari=true}if(a6){bf.inArray=function(bA,bB){return a6.call(bB,bA)}}if(bn.test("\xA0")){bj=/^[\s\xA0]+/;be=/[\s\xA0]+$/}bd=bf(ae);if(ae.addEventListener){a5=function(){ae.removeEventListener("DOMContentLoaded",a5,false);bf.ready()}}else{if(ae.attachEvent){a5=function(){if(ae.readyState==="complete"){ae.detachEvent("onreadystatechange",a5);bf.ready()}}}}function a7(){if(bf.isReady){return}try{ae.documentElement.doScroll("left")}catch(bA){setTimeout(a7,1);return}bf.ready()}return(aP.jQuery=aP.$=bf)})();(function(){a.support={};var a4=ae.createElement("div");a4.style.display="none";a4.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var bb=a4.getElementsByTagName("*"),a9=a4.getElementsByTagName("a")[0],ba=ae.createElement("select"),a5=ba.appendChild(ae.createElement("option"));if(!bb||!bb.length||!a9){return}a.support={leadingWhitespace:a4.firstChild.nodeType===3,tbody:!a4.getElementsByTagName("tbody").length,htmlSerialize:!!a4.getElementsByTagName("link").length,style:/red/.test(a9.getAttribute("style")),hrefNormalized:a9.getAttribute("href")==="/a",opacity:/^0.55$/.test(a9.style.opacity),cssFloat:!!a9.style.cssFloat,checkOn:a4.getElementsByTagName("input")[0].value==="on",optSelected:a5.selected,deleteExpando:true,optDisabled:false,checkClone:false,_scriptEval:null,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};ba.disabled=true;a.support.optDisabled=!a5.disabled;a.support.scriptEval=function(){if(a.support._scriptEval===null){var bd=ae.documentElement,be=ae.createElement("script"),bg="script"+a.now();be.type="text/javascript";try{be.appendChild(ae.createTextNode("window."+bg+"=1;"))}catch(bf){}bd.insertBefore(be,bd.firstChild);if(aP[bg]){a.support._scriptEval=true;delete aP[bg]}else{a.support._scriptEval=false}bd.removeChild(be);bd=be=bg=null}return a.support._scriptEval};try{delete a4.test}catch(a6){a.support.deleteExpando=false}if(a4.attachEvent&&a4.fireEvent){a4.attachEvent("onclick",function bc(){a.support.noCloneEvent=false;a4.detachEvent("onclick",bc)});a4.cloneNode(true).fireEvent("onclick")}a4=ae.createElement("div");a4.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var a7=ae.createDocumentFragment();a7.appendChild(a4.firstChild);a.support.checkClone=a7.cloneNode(true).cloneNode(true).lastChild.checked;a(function(){var bf=ae.createElement("div"),bd=ae.getElementsByTagName("body")[0];if(!bd){return}bf.style.width=bf.style.paddingLeft="1px";bd.appendChild(bf);a.boxModel=a.support.boxModel=bf.offsetWidth===2;if("zoom" in bf.style){bf.style.display="inline";bf.style.zoom=1;a.support.inlineBlockNeedsLayout=bf.offsetWidth===2;bf.style.display="";bf.innerHTML="<div style='width:4px;'></div>";a.support.shrinkWrapBlocks=bf.offsetWidth!==2}bf.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var be=bf.getElementsByTagName("td");a.support.reliableHiddenOffsets=be[0].offsetHeight===0;be[0].style.display="";be[1].style.display="none";a.support.reliableHiddenOffsets=a.support.reliableHiddenOffsets&&be[0].offsetHeight===0;bf.innerHTML="";bd.removeChild(bf).style.display="none";bf=be=null});var a8=function(bd){var bf=ae.createElement("div");bd="on"+bd;if(!bf.attachEvent){return true}var be=(bd in bf);if(!be){bf.setAttribute(bd,"return;");be=typeof bf[bd]==="function"}bf=null;return be};a.support.submitBubbles=a8("submit");a.support.changeBubbles=a8("change");a4=bb=a9=null})();var at=/^(?:\{.*\}|\[.*\])$/;a.extend({cache:{},uuid:0,expando:"jQuery"+(a.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(a4){a4=a4.nodeType?a.cache[a4[a.expando]]:a4[a.expando];return !!a4&&!a.isEmptyObject(a4)},data:function(a7,a5,a9,a8){if(!a.acceptData(a7)){return}var bc=a.expando,bb=typeof a5==="string",ba,bd=a7.nodeType,a4=bd?a.cache:a7,a6=bd?a7[a.expando]:a7[a.expando]&&a.expando;if((!a6||(a8&&a6&&!a4[a6][bc]))&&bb&&a9===E){return}if(!a6){if(bd){a7[a.expando]=a6=++a.uuid}else{a6=a.expando}}if(!a4[a6]){a4[a6]={}}if(typeof a5==="object"){if(a8){a4[a6][bc]=a.extend(a4[a6][bc],a5)}else{a4[a6]=a.extend(a4[a6],a5)}}ba=a4[a6];if(a8){if(!ba[bc]){ba[bc]={}}ba=ba[bc]}if(a9!==E){ba[a5]=a9}if(a5==="events"&&!ba[a5]){return ba[bc]&&ba[bc].events}return bb?ba[a5]:ba},removeData:function(a8,a6,a9){if(!a.acceptData(a8)){return}var bb=a.expando,bc=a8.nodeType,a5=bc?a.cache:a8,a7=bc?a8[a.expando]:a.expando;if(!a5[a7]){return}if(a6){var ba=a9?a5[a7][bb]:a5[a7];if(ba){delete ba[a6];if(!a.isEmptyObject(ba)){return}}}if(a9){delete a5[a7][bb];if(!a.isEmptyObject(a5[a7])){return}}var a4=a5[a7][bb];if(a.support.deleteExpando||a5!=aP){delete a5[a7]}else{a5[a7]=null}if(a4){a5[a7]={};a5[a7][bb]=a4}else{if(bc){if(a.support.deleteExpando){delete a8[a.expando]}else{if(a8.removeAttribute){a8.removeAttribute(a.expando)}else{a8[a.expando]=null}}}}},_data:function(a5,a4,a6){return a.data(a5,a4,a6,true)},acceptData:function(a5){if(a5.nodeName){var a4=a.noData[a5.nodeName.toLowerCase()];if(a4){return !(a4===true||a5.getAttribute("classid")!==a4)}}return true}});a.fn.extend({data:function(a8,ba){var a9=null;if(typeof a8==="undefined"){if(this.length){a9=a.data(this[0]);if(this[0].nodeType===1){var a4=this[0].attributes,a6;for(var a7=0,a5=a4.length;a7<a5;a7++){a6=a4[a7].name;if(a6.indexOf("data-")===0){a6=a6.substr(5);aK(this[0],a6,a9[a6])}}}}return a9}else{if(typeof a8==="object"){return this.each(function(){a.data(this,a8)})}}var bb=a8.split(".");bb[1]=bb[1]?"."+bb[1]:"";if(ba===E){a9=this.triggerHandler("getData"+bb[1]+"!",[bb[0]]);if(a9===E&&this.length){a9=a.data(this[0],a8);a9=aK(this[0],a8,a9)}return a9===E&&bb[1]?this.data(bb[0]):a9}else{return this.each(function(){var bd=a(this),bc=[bb[0],ba];bd.triggerHandler("setData"+bb[1]+"!",bc);a.data(this,a8,ba);bd.triggerHandler("changeData"+bb[1]+"!",bc)})}},removeData:function(a4){return this.each(function(){a.removeData(this,a4)})}});function aK(a5,a4,a6){if(a6===E&&a5.nodeType===1){a6=a5.getAttribute("data-"+a4);if(typeof a6==="string"){try{a6=a6==="true"?true:a6==="false"?false:a6==="null"?null:!a.isNaN(a6)?parseFloat(a6):at.test(a6)?a.parseJSON(a6):a6}catch(a7){}a.data(a5,a4,a6)}else{a6=E}}return a6}a.extend({queue:function(a5,a4,a7){if(!a5){return}a4=(a4||"fx")+"queue";var a6=a._data(a5,a4);if(!a7){return a6||[]}if(!a6||a.isArray(a7)){a6=a._data(a5,a4,a.makeArray(a7))}else{a6.push(a7)}return a6},dequeue:function(a7,a6){a6=a6||"fx";var a4=a.queue(a7,a6),a5=a4.shift();if(a5==="inprogress"){a5=a4.shift()}if(a5){if(a6==="fx"){a4.unshift("inprogress")}a5.call(a7,function(){a.dequeue(a7,a6)})}if(!a4.length){a.removeData(a7,a6+"queue",true)}}});a.fn.extend({queue:function(a4,a5){if(typeof a4!=="string"){a5=a4;a4="fx"}if(a5===E){return a.queue(this[0],a4)}return this.each(function(a7){var a6=a.queue(this,a4,a5);if(a4==="fx"&&a6[0]!=="inprogress"){a.dequeue(this,a4)}})},dequeue:function(a4){return this.each(function(){a.dequeue(this,a4)})},delay:function(a5,a4){a5=a.fx?a.fx.speeds[a5]||a5:a5;a4=a4||"fx";return this.queue(a4,function(){var a6=this;setTimeout(function(){a.dequeue(a6,a4)},a5)})},clearQueue:function(a4){return this.queue(a4||"fx",[])}});var aq=/[\n\t\r]/g,aT=/\s+/,av=/\r/g,aS=/^(?:href|src|style)$/,e=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,j=/^a(?:rea)?$/i,L=/^(?:radio|checkbox)$/i;a.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};a.fn.extend({attr:function(a4,a5){return a.access(this,a4,a5,true,a.attr)},removeAttr:function(a4,a5){return this.each(function(){a.attr(this,a4,"");if(this.nodeType===1){this.removeAttribute(a4)}})},addClass:function(bb){if(a.isFunction(bb)){return this.each(function(be){var bd=a(this);bd.addClass(bb.call(this,be,bd.attr("class")))})}if(bb&&typeof bb==="string"){var a4=(bb||"").split(aT);for(var a7=0,a6=this.length;a7<a6;a7++){var a5=this[a7];if(a5.nodeType===1){if(!a5.className){a5.className=bb}else{var a8=" "+a5.className+" ",ba=a5.className;for(var a9=0,bc=a4.length;a9<bc;a9++){if(a8.indexOf(" "+a4[a9]+" ")<0){ba+=" "+a4[a9]}}a5.className=a.trim(ba)}}}}return this},removeClass:function(a9){if(a.isFunction(a9)){return this.each(function(bd){var bc=a(this);bc.removeClass(a9.call(this,bd,bc.attr("class")))})}if((a9&&typeof a9==="string")||a9===E){var ba=(a9||"").split(aT);for(var a6=0,a5=this.length;a6<a5;a6++){var a8=this[a6];if(a8.nodeType===1&&a8.className){if(a9){var a7=(" "+a8.className+" ").replace(aq," ");for(var bb=0,a4=ba.length;bb<a4;bb++){a7=a7.replace(" "+ba[bb]+" "," ")}a8.className=a.trim(a7)}else{a8.className=""}}}}return this},toggleClass:function(a7,a5){var a6=typeof a7,a4=typeof a5==="boolean";if(a.isFunction(a7)){return this.each(function(a9){var a8=a(this);a8.toggleClass(a7.call(this,a9,a8.attr("class"),a5),a5)})}return this.each(function(){if(a6==="string"){var ba,a9=0,a8=a(this),bb=a5,bc=a7.split(aT);while((ba=bc[a9++])){bb=a4?bb:!a8.hasClass(ba);a8[bb?"addClass":"removeClass"](ba)}}else{if(a6==="undefined"||a6==="boolean"){if(this.className){a._data(this,"__className__",this.className)}this.className=this.className||a7===false?"":a._data(this,"__className__")||""}}})},hasClass:function(a4){var a7=" "+a4+" ";for(var a6=0,a5=this.length;a6<a5;a6++){if((" "+this[a6].className+" ").replace(aq," ").indexOf(a7)>-1){return true}}return false},val:function(bc){if(!arguments.length){var a6=this[0];if(a6){if(a.nodeName(a6,"option")){var a5=a6.attributes.value;return !a5||a5.specified?a6.value:a6.text}if(a.nodeName(a6,"select")){var ba=a6.selectedIndex,bd=[],be=a6.options,a9=a6.type==="select-one";if(ba<0){return null}for(var a7=a9?ba:0,bb=a9?ba+1:be.length;a7<bb;a7++){var a8=be[a7];if(a8.selected&&(a.support.optDisabled?!a8.disabled:a8.getAttribute("disabled")===null)&&(!a8.parentNode.disabled||!a.nodeName(a8.parentNode,"optgroup"))){bc=a(a8).val();if(a9){return bc}bd.push(bc)}}return bd}if(L.test(a6.type)&&!a.support.checkOn){return a6.getAttribute("value")===null?"on":a6.value}return(a6.value||"").replace(av,"")}return E}var a4=a.isFunction(bc);return this.each(function(bh){var bg=a(this),bi=bc;if(this.nodeType!==1){return}if(a4){bi=bc.call(this,bh,bg.val())}if(bi==null){bi=""}else{if(typeof bi==="number"){bi+=""}else{if(a.isArray(bi)){bi=a.map(bi,function(bj){return bj==null?"":bj+""})}}}if(a.isArray(bi)&&L.test(this.type)){this.checked=a.inArray(bg.val(),bi)>=0}else{if(a.nodeName(this,"select")){var bf=a.makeArray(bi);a("option",this).each(function(){this.selected=a.inArray(a(this).val(),bf)>=0});if(!bf.length){this.selectedIndex=-1}}else{this.value=bi}}})}});a.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a5,a4,ba,bd){if(!a5||a5.nodeType===3||a5.nodeType===8||a5.nodeType===2){return E}if(bd&&a4 in a.attrFn){return a(a5)[a4](ba)}var a6=a5.nodeType!==1||!a.isXMLDoc(a5),a9=ba!==E;a4=a6&&a.props[a4]||a4;if(a5.nodeType===1){var a8=aS.test(a4);if(a4==="selected"&&!a.support.optSelected){var bb=a5.parentNode;if(bb){bb.selectedIndex;if(bb.parentNode){bb.parentNode.selectedIndex}}}if((a4 in a5||a5[a4]!==E)&&a6&&!a8){if(a9){if(a4==="type"&&e.test(a5.nodeName)&&a5.parentNode){a.error("type property can't be changed")}if(ba===null){if(a5.nodeType===1){a5.removeAttribute(a4)}}else{a5[a4]=ba}}if(a.nodeName(a5,"form")&&a5.getAttributeNode(a4)){return a5.getAttributeNode(a4).nodeValue}if(a4==="tabIndex"){var bc=a5.getAttributeNode("tabIndex");return bc&&bc.specified?bc.value:z.test(a5.nodeName)||j.test(a5.nodeName)&&a5.href?0:E}return a5[a4]}if(!a.support.style&&a6&&a4==="style"){if(a9){a5.style.cssText=""+ba}return a5.style.cssText}if(a9){a5.setAttribute(a4,""+ba)}if(!a5.attributes[a4]&&(a5.hasAttribute&&!a5.hasAttribute(a4))){return E}var a7=!a.support.hrefNormalized&&a6&&a8?a5.getAttribute(a4,2):a5.getAttribute(a4);return a7===null?E:a7}if(a9){a5[a4]=ba}return a5[a4]}});var aG=/\.(.*)$/,aR=/^(?:textarea|input|select)$/i,G=/\./g,U=/ /g,am=/[^\w\s.|`]/g,B=function(a4){return a4.replace(am,"\\$&")},ay="events";a.event={add:function(a7,bb,bg,a9){if(a7.nodeType===3||a7.nodeType===8){return}if(a.isWindow(a7)&&(a7!==aP&&!a7.frameElement)){a7=aP}if(bg===false){bg=aV}else{if(!bg){return}}var a5,bf;if(bg.handler){a5=bg;bg=a5.handler}if(!bg.guid){bg.guid=a.guid++}var bc=a._data(a7);if(!bc){return}var bh=bc[ay],ba=bc.handle;if(typeof bh==="function"){ba=bh.handle;bh=bh.events}else{if(!bh){if(!a7.nodeType){bc[ay]=bc=function(){}}bc.events=bh={}}}if(!ba){bc.handle=ba=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(ba.elem,arguments):E}}ba.elem=a7;bb=bb.split(" ");var be,a8=0,a4;while((be=bb[a8++])){bf=a5?a.extend({},a5):{handler:bg,data:a9};if(be.indexOf(".")>-1){a4=be.split(".");be=a4.shift();bf.namespace=a4.slice(0).sort().join(".")}else{a4=[];bf.namespace=""}bf.type=be;if(!bf.guid){bf.guid=bg.guid}var a6=bh[be],bd=a.event.special[be]||{};if(!a6){a6=bh[be]=[];if(!bd.setup||bd.setup.call(a7,a9,a4,ba)===false){if(a7.addEventListener){a7.addEventListener(be,ba,false)}else{if(a7.attachEvent){a7.attachEvent("on"+be,ba)}}}}if(bd.add){bd.add.call(a7,bf);if(!bf.handler.guid){bf.handler.guid=bg.guid}}a6.push(bf);a.event.global[be]=true}a7=null},global:{},remove:function(bj,be,a6,ba){if(bj.nodeType===3||bj.nodeType===8){return}if(a6===false){a6=aV}var bm,a9,bb,bg,bh=0,a7,bc,bf,a8,bd,a4,bl,bi=a.hasData(bj)&&a._data(bj),a5=bi&&bi[ay];if(!bi||!a5){return}if(typeof a5==="function"){bi=a5;a5=a5.events}if(be&&be.type){a6=be.handler;be=be.type}if(!be||typeof be==="string"&&be.charAt(0)==="."){be=be||"";for(a9 in a5){a.event.remove(bj,a9+be)}return}be=be.split(" ");while((a9=be[bh++])){bl=a9;a4=null;a7=a9.indexOf(".")<0;bc=[];if(!a7){bc=a9.split(".");a9=bc.shift();bf=new RegExp("(^|\\.)"+a.map(bc.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")}bd=a5[a9];if(!bd){continue}if(!a6){for(bg=0;bg<bd.length;bg++){a4=bd[bg];if(a7||bf.test(a4.namespace)){a.event.remove(bj,bl,a4.handler,bg);bd.splice(bg--,1)}}continue}a8=a.event.special[a9]||{};for(bg=ba||0;bg<bd.length;bg++){a4=bd[bg];if(a6.guid===a4.guid){if(a7||bf.test(a4.namespace)){if(ba==null){bd.splice(bg--,1)}if(a8.remove){a8.remove.call(bj,a4)}}if(ba!=null){break}}}if(bd.length===0||ba!=null&&bd.length===1){if(!a8.teardown||a8.teardown.call(bj,bc)===false){a.removeEvent(bj,a9,bi.handle)}bm=null;delete a5[a9]}}if(a.isEmptyObject(a5)){var bk=bi.handle;if(bk){bk.elem=null}delete bi.events;delete bi.handle;if(typeof bi==="function"){a.removeData(bj,ay,true)}else{if(a.isEmptyObject(bi)){a.removeData(bj,E,true)}}}},trigger:function(a5,ba,a7){var be=a5.type||a5,a9=arguments[3];if(!a9){a5=typeof a5==="object"?a5[a.expando]?a5:a.extend(a.Event(be),a5):a.Event(be);if(be.indexOf("!")>=0){a5.type=be=be.slice(0,-1);a5.exclusive=true}if(!a7){a5.stopPropagation();if(a.event.global[be]){a.each(a.cache,function(){var bj=a.expando,bi=this[bj];if(bi&&bi.events&&bi.events[be]){a.event.trigger(a5,ba,bi.handle.elem)}})}}if(!a7||a7.nodeType===3||a7.nodeType===8){return E}a5.result=E;a5.target=a7;ba=a.makeArray(ba);ba.unshift(a5)}a5.currentTarget=a7;var bb=a7.nodeType?a._data(a7,"handle"):(a._data(a7,ay)||{}).handle;if(bb){bb.apply(a7,ba)}var bg=a7.parentNode||a7.ownerDocument;try{if(!(a7&&a7.nodeName&&a.noData[a7.nodeName.toLowerCase()])){if(a7["on"+be]&&a7["on"+be].apply(a7,ba)===false){a5.result=false;a5.preventDefault()}}}catch(bf){}if(!a5.isPropagationStopped()&&bg){a.event.trigger(a5,ba,bg,true)}else{if(!a5.isDefaultPrevented()){var a6,bc=a5.target,a4=be.replace(aG,""),bh=a.nodeName(bc,"a")&&a4==="click",bd=a.event.special[a4]||{};if((!bd._default||bd._default.call(a7,a5)===false)&&!bh&&!(bc&&bc.nodeName&&a.noData[bc.nodeName.toLowerCase()])){try{if(bc[a4]){a6=bc["on"+a4];if(a6){bc["on"+a4]=null}a.event.triggered=true;bc[a4]()}}catch(a8){}if(a6){bc["on"+a4]=a6}a.event.triggered=false}}}},handle:function(a4){var bd,a6,a5,bf,be,a9=[],bb=a.makeArray(arguments);a4=bb[0]=a.event.fix(a4||aP.event);a4.currentTarget=this;bd=a4.type.indexOf(".")<0&&!a4.exclusive;if(!bd){a5=a4.type.split(".");a4.type=a5.shift();a9=a5.slice(0).sort();bf=new RegExp("(^|\\.)"+a9.join("\\.(?:.*\\.)?")+"(\\.|$)")}a4.namespace=a4.namespace||a9.join(".");be=a._data(this,ay);if(typeof be==="function"){be=be.events}a6=(be||{})[a4.type];if(be&&a6){a6=a6.slice(0);for(var a8=0,a7=a6.length;a8<a7;a8++){var bc=a6[a8];if(bd||bf.test(bc.namespace)){a4.handler=bc.handler;a4.data=bc.data;a4.handleObj=bc;var ba=bc.handler.apply(this,bb);if(ba!==E){a4.result=ba;if(ba===false){a4.preventDefault();a4.stopPropagation()}}if(a4.isImmediatePropagationStopped()){break}}}}return a4.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a7){if(a7[a.expando]){return a7}var a5=a7;a7=a.Event(a5);for(var a6=this.props.length,a9;a6;){a9=this.props[--a6];a7[a9]=a5[a9]}if(!a7.target){a7.target=a7.srcElement||ae}if(a7.target.nodeType===3){a7.target=a7.target.parentNode}if(!a7.relatedTarget&&a7.fromElement){a7.relatedTarget=a7.fromElement===a7.target?a7.toElement:a7.fromElement}if(a7.pageX==null&&a7.clientX!=null){var a8=ae.documentElement,a4=ae.body;a7.pageX=a7.clientX+(a8&&a8.scrollLeft||a4&&a4.scrollLeft||0)-(a8&&a8.clientLeft||a4&&a4.clientLeft||0);a7.pageY=a7.clientY+(a8&&a8.scrollTop||a4&&a4.scrollTop||0)-(a8&&a8.clientTop||a4&&a4.clientTop||0)}if(a7.which==null&&(a7.charCode!=null||a7.keyCode!=null)){a7.which=a7.charCode!=null?a7.charCode:a7.keyCode}if(!a7.metaKey&&a7.ctrlKey){a7.metaKey=a7.ctrlKey}if(!a7.which&&a7.button!==E){a7.which=(a7.button&1?1:(a7.button&2?3:(a7.button&4?2:0)))}return a7},guid:100000000,proxy:a.proxy,special:{ready:{setup:a.bindReady,teardown:a.noop},live:{add:function(a4){a.event.add(this,m(a4.origType,a4.selector),a.extend({},a4,{handler:Y,guid:a4.handler.guid}))},remove:function(a4){a.event.remove(this,m(a4.origType,a4.selector),a4)}},beforeunload:{setup:function(a6,a5,a4){if(a.isWindow(this)){this.onbeforeunload=a4}},teardown:function(a5,a4){if(this.onbeforeunload===a4){this.onbeforeunload=null}}}}};a.removeEvent=ae.removeEventListener?function(a5,a4,a6){if(a5.removeEventListener){a5.removeEventListener(a4,a6,false)}}:function(a5,a4,a6){if(a5.detachEvent){a5.detachEvent("on"+a4,a6)}};a.Event=function(a4){if(!this.preventDefault){return new a.Event(a4)}if(a4&&a4.type){this.originalEvent=a4;this.type=a4.type;this.isDefaultPrevented=(a4.defaultPrevented||a4.returnValue===false||a4.getPreventDefault&&a4.getPreventDefault())?g:aV}else{this.type=a4}this.timeStamp=a.now();this[a.expando]=true};function aV(){return false}function g(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=g;var a4=this.originalEvent;if(!a4){return}if(a4.preventDefault){a4.preventDefault()}else{a4.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=g;var a4=this.originalEvent;if(!a4){return}if(a4.stopPropagation){a4.stopPropagation()}a4.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=g;this.stopPropagation()},isDefaultPrevented:aV,isPropagationStopped:aV,isImmediatePropagationStopped:aV};var T=function(a5){var a4=a5.relatedTarget;try{while(a4&&a4!==this){a4=a4.parentNode}if(a4!==this){a5.type=a5.data;a.event.handle.apply(this,arguments)}}catch(a6){}},az=function(a4){a4.type=a4.data;a.event.handle.apply(this,arguments)};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a5,a4){a.event.special[a5]={setup:function(a6){a.event.add(this,a4,a6&&a6.selector?az:T,a5)},teardown:function(a6){a.event.remove(this,a4,a6&&a6.selector?az:T)}}});if(!a.support.submitBubbles){a.event.special.submit={setup:function(a5,a4){if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){a.event.add(this,"click.specialSubmit",function(a8){var a7=a8.target,a6=a7.type;if((a6==="submit"||a6==="image")&&a(a7).closest("form").length){a8.liveFired=E;return aD("submit",this,arguments)}});a.event.add(this,"keypress.specialSubmit",function(a8){var a7=a8.target,a6=a7.type;if((a6==="text"||a6==="password")&&a(a7).closest("form").length&&a8.keyCode===13){a8.liveFired=E;return aD("submit",this,arguments)}})}else{return false}},teardown:function(a4){a.event.remove(this,".specialSubmit")}}}if(!a.support.changeBubbles){var aW,i=function(a5){var a4=a5.type,a6=a5.value;if(a4==="radio"||a4==="checkbox"){a6=a5.checked}else{if(a4==="select-multiple"){a6=a5.selectedIndex>-1?a.map(a5.options,function(a7){return a7.selected}).join("-"):""}else{if(a5.nodeName.toLowerCase()==="select"){a6=a5.selectedIndex}}}return a6},R=function R(a6){var a4=a6.target,a5,a7;if(!aR.test(a4.nodeName)||a4.readOnly){return}a5=a._data(a4,"_change_data");a7=i(a4);if(a6.type!=="focusout"||a4.type!=="radio"){a._data(a4,"_change_data",a7)}if(a5===E||a7===a5){return}if(a5!=null||a7){a6.type="change";a6.liveFired=E;return a.event.trigger(a6,arguments[1],a4)}};a.event.special.change={filters:{focusout:R,beforedeactivate:R,click:function(a6){var a5=a6.target,a4=a5.type;if(a4==="radio"||a4==="checkbox"||a5.nodeName.toLowerCase()==="select"){return R.call(this,a6)}},keydown:function(a6){var a5=a6.target,a4=a5.type;if((a6.keyCode===13&&a5.nodeName.toLowerCase()!=="textarea")||(a6.keyCode===32&&(a4==="checkbox"||a4==="radio"))||a4==="select-multiple"){return R.call(this,a6)}},beforeactivate:function(a5){var a4=a5.target;a._data(a4,"_change_data",i(a4))}},setup:function(a6,a5){if(this.type==="file"){return false}for(var a4 in aW){a.event.add(this,a4+".specialChange",aW[a4])}return aR.test(this.nodeName)},teardown:function(a4){a.event.remove(this,".specialChange");return aR.test(this.nodeName)}};aW=a.event.special.change.filters;aW.focus=aW.beforeactivate}function aD(a5,a6,a4){a4[0].type=a5;return a.event.handle.apply(a6,a4)}if(ae.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(a6,a4){a.event.special[a4]={setup:function(){this.addEventListener(a6,a5,true)},teardown:function(){this.removeEventListener(a6,a5,true)}};function a5(a7){a7=a.event.fix(a7);a7.type=a4;return a.event.handle.call(this,a7)}})}a.each(["bind","one"],function(a5,a4){a.fn[a4]=function(bb,bc,ba){if(typeof bb==="object"){for(var a8 in bb){this[a4](a8,bc,bb[a8],ba)}return this}if(a.isFunction(bc)||bc===false){ba=bc;bc=E}var a9=a4==="one"?a.proxy(ba,function(bd){a(this).unbind(bd,a9);return ba.apply(this,arguments)}):ba;if(bb==="unload"&&a4!=="one"){this.one(bb,bc,ba)}else{for(var a7=0,a6=this.length;a7<a6;a7++){a.event.add(this[a7],bb,a9,bc)}}return this}});a.fn.extend({unbind:function(a8,a7){if(typeof a8==="object"&&!a8.preventDefault){for(var a6 in a8){this.unbind(a6,a8[a6])}}else{for(var a5=0,a4=this.length;a5<a4;a5++){a.event.remove(this[a5],a8,a7)}}return this},delegate:function(a4,a5,a7,a6){return this.live(a5,a7,a6,a4)},undelegate:function(a4,a5,a6){if(arguments.length===0){return this.unbind("live")}else{return this.die(a5,null,a6,a4)}},trigger:function(a4,a5){return this.each(function(){a.event.trigger(a4,a5,this)})},triggerHandler:function(a4,a6){if(this[0]){var a5=a.Event(a4);a5.preventDefault();a5.stopPropagation();a.event.trigger(a5,a6,this[0]);return a5.result}},toggle:function(a6){var a4=arguments,a5=1;while(a5<a4.length){a.proxy(a6,a4[a5++])}return this.click(a.proxy(a6,function(a7){var a8=(a._data(this,"lastToggle"+a6.guid)||0)%a5;a._data(this,"lastToggle"+a6.guid,a8+1);a7.preventDefault();return a4[a8].apply(this,arguments)||false}))},hover:function(a4,a5){return this.mouseenter(a4).mouseleave(a5||a4)}});var aw={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};a.each(["live","die"],function(a5,a4){a.fn[a4]=function(bf,bc,bh,a8){var bg,bd=0,be,a7,bj,ba=a8||this.selector,a6=a8?this:a(this.context);if(typeof bf==="object"&&!bf.preventDefault){for(var bi in bf){a6[a4](bi,bc,bf[bi],ba)}return this}if(a.isFunction(bc)){bh=bc;bc=E}bf=(bf||"").split(" ");while((bg=bf[bd++])!=null){be=aG.exec(bg);a7="";if(be){a7=be[0];bg=bg.replace(aG,"")}if(bg==="hover"){bf.push("mouseenter"+a7,"mouseleave"+a7);continue}bj=bg;if(bg==="focus"||bg==="blur"){bf.push(aw[bg]+a7);bg=bg+a7}else{bg=(aw[bg]||bg)+a7}if(a4==="live"){for(var bb=0,a9=a6.length;bb<a9;bb++){a.event.add(a6[bb],"live."+m(bg,ba),{data:bc,selector:ba,handler:bh,origType:bg,origHandler:bh,preType:bj})}}else{a6.unbind("live."+m(bg,ba),bh)}}return this}});function Y(bf){var bc,a7,bl,a9,a4,bh,be,bg,bd,bk,bb,ba,bj,bi=[],a8=[],a5=a._data(this,ay);if(typeof a5==="function"){a5=a5.events}if(bf.liveFired===this||!a5||!a5.live||bf.target.disabled||bf.button&&bf.type==="click"){return}if(bf.namespace){ba=new RegExp("(^|\\.)"+bf.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")}bf.liveFired=this;var a6=a5.live.slice(0);for(be=0;be<a6.length;be++){a4=a6[be];if(a4.origType.replace(aG,"")===bf.type){a8.push(a4.selector)}else{a6.splice(be--,1)}}a9=a(bf.target).closest(a8,bf.currentTarget);for(bg=0,bd=a9.length;bg<bd;bg++){bb=a9[bg];for(be=0;be<a6.length;be++){a4=a6[be];if(bb.selector===a4.selector&&(!ba||ba.test(a4.namespace))){bh=bb.elem;bl=null;if(a4.preType==="mouseenter"||a4.preType==="mouseleave"){bf.type=a4.preType;bl=a(bf.relatedTarget).closest(a4.selector)[0]}if(!bl||bl!==bh){bi.push({elem:bh,handleObj:a4,level:bb.level})}}}}for(bg=0,bd=bi.length;bg<bd;bg++){a9=bi[bg];if(a7&&a9.level>a7){break}bf.currentTarget=a9.elem;bf.data=a9.handleObj.data;bf.handleObj=a9.handleObj;bj=a9.handleObj.origHandler.apply(a9.elem,arguments);if(bj===false||bf.isPropagationStopped()){a7=a9.level;if(bj===false){bc=false}if(bf.isImmediatePropagationStopped()){break}}}return bc}function m(a5,a4){return(a5&&a5!=="*"?a5+".":"")+a4.replace(G,"`").replace(U,"&")}a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(a5,a4){a.fn[a4]=function(a7,a6){if(a6==null){a6=a7;a7=null}return arguments.length>0?this.bind(a4,a7,a6):this.trigger(a4)};if(a.attrFn){a.attrFn[a4]=true}});
/*
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var bj=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bc=0,a7=Object.prototype.toString,bi=false,bb=true;[0,0].sort(function(){bb=false;return 0});var a5=function(bq,bl,bt,bu){bt=bt||[];bl=bl||ae;var bw=bl;if(bl.nodeType!==1&&bl.nodeType!==9){return[]}if(!bq||typeof bq!=="string"){return bt}var bn,by,bB,bm,bx,bA,bz,bs,bp=true,bo=a5.isXML(bl),br=[],bv=bq;do{bj.exec("");bn=bj.exec(bv);if(bn){bv=bn[3];br.push(bn[1]);if(bn[2]){bm=bn[3];break}}}while(bn);if(br.length>1&&bd.exec(bq)){if(br.length===2&&a8.relative[br[0]]){by=ba(br[0]+br[1],bl)}else{by=a8.relative[br[0]]?[bl]:a5(br.shift(),bl);while(br.length){bq=br.shift();if(a8.relative[bq]){bq+=br.shift()}by=ba(bq,by)}}}else{if(!bu&&br.length>1&&bl.nodeType===9&&!bo&&a8.match.ID.test(br[0])&&!a8.match.ID.test(br[br.length-1])){bx=a5.find(br.shift(),bl,bo);bl=bx.expr?a5.filter(bx.expr,bx.set)[0]:bx.set[0]}if(bl){bx=bu?{expr:br.pop(),set:a4(bu)}:a5.find(br.pop(),br.length===1&&(br[0]==="~"||br[0]==="+")&&bl.parentNode?bl.parentNode:bl,bo);by=bx.expr?a5.filter(bx.expr,bx.set):bx.set;if(br.length>0){bB=a4(by)}else{bp=false}while(br.length){bA=br.pop();bz=bA;if(!a8.relative[bA]){bA=""}else{bz=br.pop()}if(bz==null){bz=bl}a8.relative[bA](bB,bz,bo)}}else{bB=br=[]}}if(!bB){bB=by}if(!bB){a5.error(bA||bq)}if(a7.call(bB)==="[object Array]"){if(!bp){bt.push.apply(bt,bB)}else{if(bl&&bl.nodeType===1){for(bs=0;bB[bs]!=null;bs++){if(bB[bs]&&(bB[bs]===true||bB[bs].nodeType===1&&a5.contains(bl,bB[bs]))){bt.push(by[bs])}}}else{for(bs=0;bB[bs]!=null;bs++){if(bB[bs]&&bB[bs].nodeType===1){bt.push(by[bs])}}}}}else{a4(bB,bt)}if(bm){a5(bm,bw,bt,bu);a5.uniqueSort(bt)}return bt};a5.uniqueSort=function(bm){if(a6){bi=bb;bm.sort(a6);if(bi){for(var bl=1;bl<bm.length;bl++){if(bm[bl]===bm[bl-1]){bm.splice(bl--,1)}}}}return bm};a5.matches=function(bl,bm){return a5(bl,null,null,bm)};a5.matchesSelector=function(bl,bm){return a5(bm,null,null,[bl]).length>0};a5.find=function(bs,bl,bt){var br;if(!bs){return[]}for(var bo=0,bn=a8.order.length;bo<bn;bo++){var bp,bq=a8.order[bo];if((bp=a8.leftMatch[bq].exec(bs))){var bm=bp[1];bp.splice(1,1);if(bm.substr(bm.length-1)!=="\\"){bp[1]=(bp[1]||"").replace(/\\/g,"");br=a8.find[bq](bp,bl,bt);if(br!=null){bs=bs.replace(a8.match[bq],"");break}}}}if(!br){br=typeof bl.getElementsByTagName!=="undefined"?bl.getElementsByTagName("*"):[]}return{set:br,expr:bs}};a5.filter=function(bw,bv,bz,bp){var br,bl,bn=bw,bB=[],bt=bv,bs=bv&&bv[0]&&a5.isXML(bv[0]);while(bw&&bv.length){for(var bu in a8.filter){if((br=a8.leftMatch[bu].exec(bw))!=null&&br[2]){var bA,by,bm=a8.filter[bu],bo=br[1];bl=false;br.splice(1,1);if(bo.substr(bo.length-1)==="\\"){continue}if(bt===bB){bB=[]}if(a8.preFilter[bu]){br=a8.preFilter[bu](br,bt,bz,bB,bp,bs);if(!br){bl=bA=true}else{if(br===true){continue}}}if(br){for(var bq=0;(by=bt[bq])!=null;bq++){if(by){bA=bm(by,br,bq,bt);var bx=bp^!!bA;if(bz&&bA!=null){if(bx){bl=true}else{bt[bq]=false}}else{if(bx){bB.push(by);bl=true}}}}}if(bA!==E){if(!bz){bt=bB}bw=bw.replace(a8.match[bu],"");if(!bl){return[]}break}}}if(bw===bn){if(bl==null){a5.error(bw)}else{break}}bn=bw}return bt};a5.error=function(bl){throw"Syntax error, unrecognized expression: "+bl};var a8=a5.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bl){return bl.getAttribute("href")}},relative:{"+":function(br,bm){var bo=typeof bm==="string",bq=bo&&!/\W/.test(bm),bs=bo&&!bq;if(bq){bm=bm.toLowerCase()}for(var bn=0,bl=br.length,bp;bn<bl;bn++){if((bp=br[bn])){while((bp=bp.previousSibling)&&bp.nodeType!==1){}br[bn]=bs||bp&&bp.nodeName.toLowerCase()===bm?bp||false:bp===bm}}if(bs){a5.filter(bm,br,true)}},">":function(br,bm){var bq,bp=typeof bm==="string",bn=0,bl=br.length;if(bp&&!/\W/.test(bm)){bm=bm.toLowerCase();for(;bn<bl;bn++){bq=br[bn];if(bq){var bo=bq.parentNode;br[bn]=bo.nodeName.toLowerCase()===bm?bo:false}}}else{for(;bn<bl;bn++){bq=br[bn];if(bq){br[bn]=bp?bq.parentNode:bq.parentNode===bm}}if(bp){a5.filter(bm,br,true)}}},"":function(bo,bm,bq){var bp,bn=bc++,bl=bk;if(typeof bm==="string"&&!/\W/.test(bm)){bm=bm.toLowerCase();bp=bm;bl=bh}bl("parentNode",bm,bn,bo,bp,bq)},"~":function(bo,bm,bq){var bp,bn=bc++,bl=bk;if(typeof bm==="string"&&!/\W/.test(bm)){bm=bm.toLowerCase();bp=bm;bl=bh}bl("previousSibling",bm,bn,bo,bp,bq)}},find:{ID:function(bm,bn,bo){if(typeof bn.getElementById!=="undefined"&&!bo){var bl=bn.getElementById(bm[1]);return bl&&bl.parentNode?[bl]:[]}},NAME:function(bn,bq){if(typeof bq.getElementsByName!=="undefined"){var bm=[],bp=bq.getElementsByName(bn[1]);for(var bo=0,bl=bp.length;bo<bl;bo++){if(bp[bo].getAttribute("name")===bn[1]){bm.push(bp[bo])}}return bm.length===0?null:bm}},TAG:function(bl,bm){if(typeof bm.getElementsByTagName!=="undefined"){return bm.getElementsByTagName(bl[1])}}},preFilter:{CLASS:function(bo,bm,bn,bl,br,bs){bo=" "+bo[1].replace(/\\/g,"")+" ";if(bs){return bo}for(var bp=0,bq;(bq=bm[bp])!=null;bp++){if(bq){if(br^(bq.className&&(" "+bq.className+" ").replace(/[\t\n\r]/g," ").indexOf(bo)>=0)){if(!bn){bl.push(bq)}}else{if(bn){bm[bp]=false}}}}return false},ID:function(bl){return bl[1].replace(/\\/g,"")},TAG:function(bm,bl){return bm[1].toLowerCase()},CHILD:function(bl){if(bl[1]==="nth"){if(!bl[2]){a5.error(bl[0])}bl[2]=bl[2].replace(/^\+|\s*/g,"");var bm=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(bl[2]==="even"&&"2n"||bl[2]==="odd"&&"2n+1"||!/\D/.test(bl[2])&&"0n+"+bl[2]||bl[2]);bl[2]=(bm[1]+(bm[2]||1))-0;bl[3]=bm[3]-0}else{if(bl[2]){a5.error(bl[0])}}bl[0]=bc++;return bl},ATTR:function(bp,bm,bn,bl,bq,br){var bo=bp[1]=bp[1].replace(/\\/g,"");if(!br&&a8.attrMap[bo]){bp[1]=a8.attrMap[bo]}bp[4]=(bp[4]||bp[5]||"").replace(/\\/g,"");if(bp[2]==="~="){bp[4]=" "+bp[4]+" "}return bp},PSEUDO:function(bp,bm,bn,bl,bq){if(bp[1]==="not"){if((bj.exec(bp[3])||"").length>1||/^\w/.test(bp[3])){bp[3]=a5(bp[3],null,null,bm)}else{var bo=a5.filter(bp[3],bm,bn,true^bq);if(!bn){bl.push.apply(bl,bo)}return false}}else{if(a8.match.POS.test(bp[0])||a8.match.CHILD.test(bp[0])){return true}}return bp},POS:function(bl){bl.unshift(true);return bl}},filters:{enabled:function(bl){return bl.disabled===false&&bl.type!=="hidden"},disabled:function(bl){return bl.disabled===true},checked:function(bl){return bl.checked===true},selected:function(bl){bl.parentNode.selectedIndex;return bl.selected===true},parent:function(bl){return !!bl.firstChild},empty:function(bl){return !bl.firstChild},has:function(bn,bm,bl){return !!a5(bl[3],bn).length},header:function(bl){return(/h\d/i).test(bl.nodeName)},text:function(bl){return"text"===bl.type},radio:function(bl){return"radio"===bl.type},checkbox:function(bl){return"checkbox"===bl.type},file:function(bl){return"file"===bl.type},password:function(bl){return"password"===bl.type},submit:function(bl){return"submit"===bl.type},image:function(bl){return"image"===bl.type},reset:function(bl){return"reset"===bl.type},button:function(bl){return"button"===bl.type||bl.nodeName.toLowerCase()==="button"},input:function(bl){return(/input|select|textarea|button/i).test(bl.nodeName)}},setFilters:{first:function(bm,bl){return bl===0},last:function(bn,bm,bl,bo){return bm===bo.length-1},even:function(bm,bl){return bl%2===0},odd:function(bm,bl){return bl%2===1},lt:function(bn,bm,bl){return bm<bl[3]-0},gt:function(bn,bm,bl){return bm>bl[3]-0},nth:function(bn,bm,bl){return bl[3]-0===bm},eq:function(bn,bm,bl){return bl[3]-0===bm}},filter:{PSEUDO:function(bn,bs,br,bt){var bl=bs[1],bm=a8.filters[bl];if(bm){return bm(bn,br,bs,bt)}else{if(bl==="contains"){return(bn.textContent||bn.innerText||a5.getText([bn])||"").indexOf(bs[3])>=0}else{if(bl==="not"){var bo=bs[3];for(var bq=0,bp=bo.length;bq<bp;bq++){if(bo[bq]===bn){return false}}return true}else{a5.error(bl)}}}},CHILD:function(bl,bo){var br=bo[1],bm=bl;switch(br){case"only":case"first":while((bm=bm.previousSibling)){if(bm.nodeType===1){return false}}if(br==="first"){return true}bm=bl;case"last":while((bm=bm.nextSibling)){if(bm.nodeType===1){return false}}return true;case"nth":var bn=bo[2],bu=bo[3];if(bn===1&&bu===0){return true}var bq=bo[0],bt=bl.parentNode;if(bt&&(bt.sizcache!==bq||!bl.nodeIndex)){var bp=0;for(bm=bt.firstChild;bm;bm=bm.nextSibling){if(bm.nodeType===1){bm.nodeIndex=++bp}}bt.sizcache=bq}var bs=bl.nodeIndex-bu;if(bn===0){return bs===0}else{return(bs%bn===0&&bs/bn>=0)}}},ID:function(bm,bl){return bm.nodeType===1&&bm.getAttribute("id")===bl},TAG:function(bm,bl){return(bl==="*"&&bm.nodeType===1)||bm.nodeName.toLowerCase()===bl},CLASS:function(bm,bl){return(" "+(bm.className||bm.getAttribute("class"))+" ").indexOf(bl)>-1},ATTR:function(bq,bo){var bn=bo[1],bl=a8.attrHandle[bn]?a8.attrHandle[bn](bq):bq[bn]!=null?bq[bn]:bq.getAttribute(bn),br=bl+"",bp=bo[2],bm=bo[4];return bl==null?bp==="!=":bp==="="?br===bm:bp==="*="?br.indexOf(bm)>=0:bp==="~="?(" "+br+" ").indexOf(bm)>=0:!bm?br&&bl!==false:bp==="!="?br!==bm:bp==="^="?br.indexOf(bm)===0:bp==="$="?br.substr(br.length-bm.length)===bm:bp==="|="?br===bm||br.substr(0,bm.length+1)===bm+"-":false},POS:function(bp,bm,bn,bq){var bl=bm[2],bo=a8.setFilters[bl];if(bo){return bo(bp,bn,bm,bq)}}}};var bd=a8.match.POS,a9=function(bm,bl){return"\\"+(bl-0+1)};for(var bg in a8.match){a8.match[bg]=new RegExp(a8.match[bg].source+(/(?![^\[]*\])(?![^\(]*\))/.source));a8.leftMatch[bg]=new RegExp(/(^(?:.|\r|\n)*?)/.source+a8.match[bg].source.replace(/\\(\d+)/g,a9))}var a4=function(bm,bl){bm=Array.prototype.slice.call(bm,0);if(bl){bl.push.apply(bl,bm);return bl}return bm};try{Array.prototype.slice.call(ae.documentElement.childNodes,0)[0].nodeType}catch(be){a4=function(bp,bo){var bn=0,bm=bo||[];if(a7.call(bp)==="[object Array]"){Array.prototype.push.apply(bm,bp)}else{if(typeof bp.length==="number"){for(var bl=bp.length;bn<bl;bn++){bm.push(bp[bn])}}else{for(;bp[bn];bn++){bm.push(bp[bn])}}}return bm}}var a6,bf;if(ae.documentElement.compareDocumentPosition){a6=function(bm,bl){if(bm===bl){bi=true;return 0}if(!bm.compareDocumentPosition||!bl.compareDocumentPosition){return bm.compareDocumentPosition?-1:1}return bm.compareDocumentPosition(bl)&4?-1:1}}else{a6=function(bv,bu){var bs,bn,bo=[],bm=[],br=bv.parentNode,bt=bu.parentNode,bw=br;if(bv===bu){bi=true;return 0}else{if(br===bt){return bf(bv,bu)}else{if(!br){return -1}else{if(!bt){return 1}}}}while(bw){bo.unshift(bw);bw=bw.parentNode}bw=bt;while(bw){bm.unshift(bw);bw=bw.parentNode}bs=bo.length;bn=bm.length;for(var bq=0;bq<bs&&bq<bn;bq++){if(bo[bq]!==bm[bq]){return bf(bo[bq],bm[bq])}}return bq===bs?bf(bv,bm[bq],-1):bf(bo[bq],bu,1)};bf=function(bm,bl,bn){if(bm===bl){return bn}var bo=bm.nextSibling;while(bo){if(bo===bl){return -1}bo=bo.nextSibling}return 1}}a5.getText=function(bl){var bm="",bo;for(var bn=0;bl[bn];bn++){bo=bl[bn];if(bo.nodeType===3||bo.nodeType===4){bm+=bo.nodeValue}else{if(bo.nodeType!==8){bm+=a5.getText(bo.childNodes)}}}return bm};(function(){var bm=ae.createElement("div"),bn="script"+(new Date()).getTime(),bl=ae.documentElement;bm.innerHTML="<a name='"+bn+"'/>";bl.insertBefore(bm,bl.firstChild);if(ae.getElementById(bn)){a8.find.ID=function(bp,bq,br){if(typeof bq.getElementById!=="undefined"&&!br){var bo=bq.getElementById(bp[1]);return bo?bo.id===bp[1]||typeof bo.getAttributeNode!=="undefined"&&bo.getAttributeNode("id").nodeValue===bp[1]?[bo]:E:[]}};a8.filter.ID=function(bq,bo){var bp=typeof bq.getAttributeNode!=="undefined"&&bq.getAttributeNode("id");return bq.nodeType===1&&bp&&bp.nodeValue===bo}}bl.removeChild(bm);bl=bm=null})();(function(){var bl=ae.createElement("div");bl.appendChild(ae.createComment(""));if(bl.getElementsByTagName("*").length>0){a8.find.TAG=function(bm,bq){var bp=bq.getElementsByTagName(bm[1]);if(bm[1]==="*"){var bo=[];for(var bn=0;bp[bn];bn++){if(bp[bn].nodeType===1){bo.push(bp[bn])}}bp=bo}return bp}}bl.innerHTML="<a href='#'></a>";if(bl.firstChild&&typeof bl.firstChild.getAttribute!=="undefined"&&bl.firstChild.getAttribute("href")!=="#"){a8.attrHandle.href=function(bm){return bm.getAttribute("href",2)}}bl=null})();if(ae.querySelectorAll){(function(){var bl=a5,bo=ae.createElement("div"),bn="__sizzle__";bo.innerHTML="<p class='TEST'></p>";if(bo.querySelectorAll&&bo.querySelectorAll(".TEST").length===0){return}a5=function(by,bq,bt,bx){bq=bq||ae;if(!bx&&!a5.isXML(bq)){var bw=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(by);if(bw&&(bq.nodeType===1||bq.nodeType===9)){if(bw[1]){return a4(bq.getElementsByTagName(by),bt)}else{if(bw[2]&&a8.find.CLASS&&bq.getElementsByClassName){return a4(bq.getElementsByClassName(bw[2]),bt)}}}if(bq.nodeType===9){if(by==="body"&&bq.body){return a4([bq.body],bt)}else{if(bw&&bw[3]){var bs=bq.getElementById(bw[3]);if(bs&&bs.parentNode){if(bs.id===bw[3]){return a4([bs],bt)}}else{return a4([],bt)}}}try{return a4(bq.querySelectorAll(by),bt)}catch(bu){}}else{if(bq.nodeType===1&&bq.nodeName.toLowerCase()!=="object"){var br=bq.getAttribute("id"),bp=br||bn,bA=bq.parentNode,bz=/^\s*[+~]/.test(by);if(!br){bq.setAttribute("id",bp)}else{bp=bp.replace(/'/g,"\\$&")}if(bz&&bA){bq=bq.parentNode}try{if(!bz||bA){return a4(bq.querySelectorAll("[id='"+bp+"'] "+by),bt)}}catch(bv){}finally{if(!br){bq.removeAttribute("id")}}}}}return bl(by,bq,bt,bx)};for(var bm in bl){a5[bm]=bl[bm]}bo=null})()}(function(){var bl=ae.documentElement,bn=bl.matchesSelector||bl.mozMatchesSelector||bl.webkitMatchesSelector||bl.msMatchesSelector,bm=false;try{bn.call(ae.documentElement,"[test!='']:sizzle")}catch(bo){bm=true}if(bn){a5.matchesSelector=function(bp,br){br=br.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!a5.isXML(bp)){try{if(bm||!a8.match.PSEUDO.test(br)&&!/!=/.test(br)){return bn.call(bp,br)}}catch(bq){}}return a5(br,null,null,[bp]).length>0}}})();(function(){var bl=ae.createElement("div");bl.innerHTML="<div class='test e'></div><div class='test'></div>";if(!bl.getElementsByClassName||bl.getElementsByClassName("e").length===0){return}bl.lastChild.className="e";if(bl.getElementsByClassName("e").length===1){return}a8.order.splice(1,0,"CLASS");a8.find.CLASS=function(bm,bn,bo){if(typeof bn.getElementsByClassName!=="undefined"&&!bo){return bn.getElementsByClassName(bm[1])}};bl=null})();function bh(bm,br,bq,bu,bs,bt){for(var bo=0,bn=bu.length;bo<bn;bo++){var bl=bu[bo];if(bl){var bp=false;bl=bl[bm];while(bl){if(bl.sizcache===bq){bp=bu[bl.sizset];break}if(bl.nodeType===1&&!bt){bl.sizcache=bq;bl.sizset=bo}if(bl.nodeName.toLowerCase()===br){bp=bl;break}bl=bl[bm]}bu[bo]=bp}}}function bk(bm,br,bq,bu,bs,bt){for(var bo=0,bn=bu.length;bo<bn;bo++){var bl=bu[bo];if(bl){var bp=false;bl=bl[bm];while(bl){if(bl.sizcache===bq){bp=bu[bl.sizset];break}if(bl.nodeType===1){if(!bt){bl.sizcache=bq;bl.sizset=bo}if(typeof br!=="string"){if(bl===br){bp=true;break}}else{if(a5.filter(br,[bl]).length>0){bp=bl;break}}}bl=bl[bm]}bu[bo]=bp}}}if(ae.documentElement.contains){a5.contains=function(bm,bl){return bm!==bl&&(bm.contains?bm.contains(bl):true)}}else{if(ae.documentElement.compareDocumentPosition){a5.contains=function(bm,bl){return !!(bm.compareDocumentPosition(bl)&16)}}else{a5.contains=function(){return false}}}a5.isXML=function(bl){var bm=(bl?bl.ownerDocument||bl:0).documentElement;return bm?bm.nodeName!=="HTML":false};var ba=function(bl,bs){var bq,bo=[],bp="",bn=bs.nodeType?[bs]:bs;while((bq=a8.match.PSEUDO.exec(bl))){bp+=bq[0];bl=bl.replace(a8.match.PSEUDO,"")}bl=a8.relative[bl]?bl+"*":bl;for(var br=0,bm=bn.length;br<bm;br++){a5(bl,bn[br],bo)}return a5.filter(bp,bo)};a.find=a5;a.expr=a5.selectors;a.expr[":"]=a.expr.filters;a.unique=a5.uniqueSort;a.text=a5.getText;a.isXMLDoc=a5.isXML;a.contains=a5.contains})();var Q=/Until$/,ab=/^(?:parents|prevUntil|prevAll)/,aN=/,/,aZ=/^.[^:#\[\.,]*$/,I=Array.prototype.slice,C=a.expr.match.POS,ag={children:true,contents:true,next:true,prev:true};a.fn.extend({find:function(a4){var a6=this.pushStack("","find",a4),a9=0;for(var a7=0,a5=this.length;a7<a5;a7++){a9=a6.length;a.find(a4,this[a7],a6);if(a7>0){for(var ba=a9;ba<a6.length;ba++){for(var a8=0;a8<a9;a8++){if(a6[a8]===a6[ba]){a6.splice(ba--,1);break}}}}}return a6},has:function(a5){var a4=a(a5);return this.filter(function(){for(var a7=0,a6=a4.length;a7<a6;a7++){if(a.contains(this,a4[a7])){return true}}})},not:function(a4){return this.pushStack(al(this,a4,false),"not",a4)},filter:function(a4){return this.pushStack(al(this,a4,true),"filter",a4)},is:function(a4){return !!a4&&a.filter(a4,this).length>0},closest:function(be,a5){var bb=[],a8,a6,bd=this[0];if(a.isArray(be)){var ba,a7,a9={},a4=1;if(bd&&be.length){for(a8=0,a6=be.length;a8<a6;a8++){a7=be[a8];if(!a9[a7]){a9[a7]=a.expr.match.POS.test(a7)?a(a7,a5||this.context):a7}}while(bd&&bd.ownerDocument&&bd!==a5){for(a7 in a9){ba=a9[a7];if(ba.jquery?ba.index(bd)>-1:a(bd).is(ba)){bb.push({selector:a7,elem:bd,level:a4})}}bd=bd.parentNode;a4++}}return bb}var bc=C.test(be)?a(be,a5||this.context):null;for(a8=0,a6=this.length;a8<a6;a8++){bd=this[a8];while(bd){if(bc?bc.index(bd)>-1:a.find.matchesSelector(bd,be)){bb.push(bd);break}else{bd=bd.parentNode;if(!bd||!bd.ownerDocument||bd===a5){break}}}}bb=bb.length>1?a.unique(bb):bb;return this.pushStack(bb,"closest",be)},index:function(a4){if(!a4||typeof a4==="string"){return a.inArray(this[0],a4?a(a4):this.parent().children())}return a.inArray(a4.jquery?a4[0]:a4,this)},add:function(a4,a5){var a7=typeof a4==="string"?a(a4,a5):a.makeArray(a4),a6=a.merge(this.get(),a7);return this.pushStack(y(a7[0])||y(a6[0])?a6:a.unique(a6))},andSelf:function(){return this.add(this.prevObject)}});function y(a4){return !a4||!a4.parentNode||a4.parentNode.nodeType===11}a.each({parent:function(a5){var a4=a5.parentNode;return a4&&a4.nodeType!==11?a4:null},parents:function(a4){return a.dir(a4,"parentNode")},parentsUntil:function(a5,a4,a6){return a.dir(a5,"parentNode",a6)},next:function(a4){return a.nth(a4,2,"nextSibling")},prev:function(a4){return a.nth(a4,2,"previousSibling")},nextAll:function(a4){return a.dir(a4,"nextSibling")},prevAll:function(a4){return a.dir(a4,"previousSibling")},nextUntil:function(a5,a4,a6){return a.dir(a5,"nextSibling",a6)},prevUntil:function(a5,a4,a6){return a.dir(a5,"previousSibling",a6)},siblings:function(a4){return a.sibling(a4.parentNode.firstChild,a4)},children:function(a4){return a.sibling(a4.firstChild)},contents:function(a4){return a.nodeName(a4,"iframe")?a4.contentDocument||a4.contentWindow.document:a.makeArray(a4.childNodes)}},function(a4,a5){a.fn[a4]=function(a9,a6){var a8=a.map(this,a5,a9),a7=I.call(arguments);if(!Q.test(a4)){a6=a9}if(a6&&typeof a6==="string"){a8=a.filter(a6,a8)}a8=this.length>1&&!ag[a4]?a.unique(a8):a8;if((this.length>1||aN.test(a6))&&ab.test(a4)){a8=a8.reverse()}return this.pushStack(a8,a4,a7.join(","))}});a.extend({filter:function(a6,a4,a5){if(a5){a6=":not("+a6+")"}return a4.length===1?a.find.matchesSelector(a4[0],a6)?[a4[0]]:[]:a.find.matches(a6,a4)},dir:function(a6,a5,a8){var a4=[],a7=a6[a5];while(a7&&a7.nodeType!==9&&(a8===E||a7.nodeType!==1||!a(a7).is(a8))){if(a7.nodeType===1){a4.push(a7)}a7=a7[a5]}return a4},nth:function(a8,a4,a6,a7){a4=a4||1;var a5=0;for(;a8;a8=a8[a6]){if(a8.nodeType===1&&++a5===a4){break}}return a8},sibling:function(a6,a5){var a4=[];for(;a6;a6=a6.nextSibling){if(a6.nodeType===1&&a6!==a5){a4.push(a6)}}return a4}});function al(a7,a6,a4){if(a.isFunction(a6)){return a.grep(a7,function(a9,a8){var ba=!!a6.call(a9,a8,a9);return ba===a4})}else{if(a6.nodeType){return a.grep(a7,function(a9,a8){return(a9===a6)===a4})}else{if(typeof a6==="string"){var a5=a.grep(a7,function(a8){return a8.nodeType===1});if(aZ.test(a6)){return a.filter(a6,a5,!a4)}else{a6=a.filter(a6,a5)}}}}return a.grep(a7,function(a9,a8){return(a.inArray(a9,a6)>=0)===a4})}var V=/ jQuery\d+="(?:\d+|null)"/g,ac=/^\s+/,K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,c=/<([\w:]+)/,t=/<tbody/i,N=/<|&#?\w+;/,H=/<(?:script|object|embed|option|style)/i,l=/checked\s*(?:[^=]|=\s*.checked.)/i,af={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};af.optgroup=af.option;af.tbody=af.tfoot=af.colgroup=af.caption=af.thead;af.th=af.td;if(!a.support.htmlSerialize){af._default=[1,"div<div>","</div>"]}a.fn.extend({text:function(a4){if(a.isFunction(a4)){return this.each(function(a6){var a5=a(this);a5.text(a4.call(this,a6,a5.text()))})}if(typeof a4!=="object"&&a4!==E){return this.empty().append((this[0]&&this[0].ownerDocument||ae).createTextNode(a4))}return a.text(this)},wrapAll:function(a4){if(a.isFunction(a4)){return this.each(function(a6){a(this).wrapAll(a4.call(this,a6))})}if(this[0]){var a5=a(a4,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){a5.insertBefore(this[0])}a5.map(function(){var a6=this;while(a6.firstChild&&a6.firstChild.nodeType===1){a6=a6.firstChild}return a6}).append(this)}return this},wrapInner:function(a4){if(a.isFunction(a4)){return this.each(function(a5){a(this).wrapInner(a4.call(this,a5))})}return this.each(function(){var a5=a(this),a6=a5.contents();if(a6.length){a6.wrapAll(a4)}else{a5.append(a4)}})},wrap:function(a4){return this.each(function(){a(this).wrapAll(a4)})},unwrap:function(){return this.parent().each(function(){if(!a.nodeName(this,"body")){a(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(a4){if(this.nodeType===1){this.appendChild(a4)}})},prepend:function(){return this.domManip(arguments,true,function(a4){if(this.nodeType===1){this.insertBefore(a4,this.firstChild)}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(a5){this.parentNode.insertBefore(a5,this)})}else{if(arguments.length){var a4=a(arguments[0]);a4.push.apply(a4,this.toArray());return this.pushStack(a4,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(a5){this.parentNode.insertBefore(a5,this.nextSibling)})}else{if(arguments.length){var a4=this.pushStack(this,"after",arguments);a4.push.apply(a4,a(arguments[0]).toArray());return a4}}},remove:function(a4,a7){for(var a5=0,a6;(a6=this[a5])!=null;a5++){if(!a4||a.filter(a4,[a6]).length){if(!a7&&a6.nodeType===1){a.cleanData(a6.getElementsByTagName("*"));a.cleanData([a6])}if(a6.parentNode){a6.parentNode.removeChild(a6)}}}return this},empty:function(){for(var a4=0,a5;(a5=this[a4])!=null;a4++){if(a5.nodeType===1){a.cleanData(a5.getElementsByTagName("*"))}while(a5.firstChild){a5.removeChild(a5.firstChild)}}return this},clone:function(a5,a4){a5=a5==null?true:a5;a4=a4==null?a5:a4;return this.map(function(){return a.clone(this,a5,a4)})},html:function(a6){if(a6===E){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(V,""):null}else{if(typeof a6==="string"&&!H.test(a6)&&(a.support.leadingWhitespace||!ac.test(a6))&&!af[(c.exec(a6)||["",""])[1].toLowerCase()]){a6=a6.replace(K,"<$1></$2>");try{for(var a5=0,a4=this.length;a5<a4;a5++){if(this[a5].nodeType===1){a.cleanData(this[a5].getElementsByTagName("*"));this[a5].innerHTML=a6}}}catch(a7){this.empty().append(a6)}}else{if(a.isFunction(a6)){this.each(function(a9){var a8=a(this);a8.html(a6.call(this,a9,a8.html()))})}else{this.empty().append(a6)}}}return this},replaceWith:function(a4){if(this[0]&&this[0].parentNode){if(a.isFunction(a4)){return this.each(function(a7){var a6=a(this),a5=a6.html();a6.replaceWith(a4.call(this,a7,a5))})}if(typeof a4!=="string"){a4=a(a4).detach()}return this.each(function(){var a6=this.nextSibling,a5=this.parentNode;a(this).remove();if(a6){a(a6).before(a4)}else{a(a5).append(a4)}})}else{return this.pushStack(a(a.isFunction(a4)?a4():a4),"replaceWith",a4)}},detach:function(a4){return this.remove(a4,true)},domManip:function(bb,bf,be){var a7,a8,ba,bd,bc=bb[0],a5=[];if(!a.support.checkClone&&arguments.length===3&&typeof bc==="string"&&l.test(bc)){return this.each(function(){a(this).domManip(bb,bf,be,true)})}if(a.isFunction(bc)){return this.each(function(bh){var bg=a(this);bb[0]=bc.call(this,bh,bf?bg.html():E);bg.domManip(bb,bf,be)})}if(this[0]){bd=bc&&bc.parentNode;if(a.support.parentNode&&bd&&bd.nodeType===11&&bd.childNodes.length===this.length){a7={fragment:bd}}else{a7=a.buildFragment(bb,this,a5)}ba=a7.fragment;if(ba.childNodes.length===1){a8=ba=ba.firstChild}else{a8=ba.firstChild}if(a8){bf=bf&&a.nodeName(a8,"tr");for(var a6=0,a4=this.length,a9=a4-1;a6<a4;a6++){be.call(bf?aO(this[a6],a8):this[a6],a7.cacheable||(a4>1&&a6<a9)?a.clone(ba,true,true):ba)}}if(a5.length){a.each(a5,aY)}}return this}});function aO(a4,a5){return a.nodeName(a4,"table")?(a4.getElementsByTagName("tbody")[0]||a4.appendChild(a4.ownerDocument.createElement("tbody"))):a4}function q(a4,bb){if(bb.nodeType!==1||!a.hasData(a4)){return}var ba=a.expando,a7=a.data(a4),a8=a.data(bb,a7);if((a7=a7[ba])){var bc=a7.events;a8=a8[ba]=a.extend({},a7);if(bc){delete a8.handle;a8.events={};for(var a9 in bc){for(var a6=0,a5=bc[a9].length;a6<a5;a6++){a.event.add(bb,a9,bc[a9][a6],bc[a9][a6].data)}}}}}function W(a5,a4){if(a4.nodeType!==1){return}var a6=a4.nodeName.toLowerCase();a4.clearAttributes();a4.mergeAttributes(a5);if(a6==="object"){a4.outerHTML=a5.outerHTML}else{if(a6==="input"&&(a5.type==="checkbox"||a5.type==="radio")){if(a5.checked){a4.defaultChecked=a4.checked=a5.checked}if(a4.value!==a5.value){a4.value=a5.value}}else{if(a6==="option"){a4.selected=a5.defaultSelected}else{if(a6==="input"||a6==="textarea"){a4.defaultValue=a5.defaultValue}}}}a4.removeAttribute(a.expando)}a.buildFragment=function(a9,a7,a5){var a8,a4,a6,ba=(a7&&a7[0]?a7[0].ownerDocument||a7[0]:ae);if(a9.length===1&&typeof a9[0]==="string"&&a9[0].length<512&&ba===ae&&a9[0].charAt(0)==="<"&&!H.test(a9[0])&&(a.support.checkClone||!l.test(a9[0]))){a4=true;a6=a.fragments[a9[0]];if(a6){if(a6!==1){a8=a6}}}if(!a8){a8=ba.createDocumentFragment();a.clean(a9,ba,a8,a5)}if(a4){a.fragments[a9[0]]=a6?a8:1}return{fragment:a8,cacheable:a4}};a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a4,a5){a.fn[a4]=function(a6){var a9=[],bc=a(a6),bb=this.length===1&&this[0].parentNode;if(bb&&bb.nodeType===11&&bb.childNodes.length===1&&bc.length===1){bc[a5](this[0]);return this}else{for(var ba=0,a7=bc.length;ba<a7;ba++){var a8=(ba>0?this.clone(true):this).get();a(bc[ba])[a5](a8);a9=a9.concat(a8)}return this.pushStack(a9,a4,bc.selector)}}});a.extend({clone:function(a8,ba,a6){var a9=a8.cloneNode(true),a4,a5,a7;if(!a.support.noCloneEvent&&(a8.nodeType===1||a8.nodeType===11)&&!a.isXMLDoc(a8)){a4=a8.getElementsByTagName("*");a5=a9.getElementsByTagName("*");for(a7=0;a4[a7];++a7){W(a4[a7],a5[a7])}W(a8,a9)}if(ba){q(a8,a9);if(a6&&"getElementsByTagName" in a8){a4=a8.getElementsByTagName("*");a5=a9.getElementsByTagName("*");if(a4.length){for(a7=0;a4[a7];++a7){q(a4[a7],a5[a7])}}}}return a9},clean:function(a6,a8,bf,ba){a8=a8||ae;if(typeof a8.createElement==="undefined"){a8=a8.ownerDocument||a8[0]&&a8[0].ownerDocument||ae}var bg=[];for(var be=0,a9;(a9=a6[be])!=null;be++){if(typeof a9==="number"){a9+=""}if(!a9){continue}if(typeof a9==="string"&&!N.test(a9)){a9=a8.createTextNode(a9)}else{if(typeof a9==="string"){a9=a9.replace(K,"<$1></$2>");var bh=(c.exec(a9)||["",""])[1].toLowerCase(),a7=af[bh]||af._default,bd=a7[0],a5=a8.createElement("div");a5.innerHTML=a7[1]+a9+a7[2];while(bd--){a5=a5.lastChild}if(!a.support.tbody){var a4=t.test(a9),bc=bh==="table"&&!a4?a5.firstChild&&a5.firstChild.childNodes:a7[1]==="<table>"&&!a4?a5.childNodes:[];for(var bb=bc.length-1;bb>=0;--bb){if(a.nodeName(bc[bb],"tbody")&&!bc[bb].childNodes.length){bc[bb].parentNode.removeChild(bc[bb])}}}if(!a.support.leadingWhitespace&&ac.test(a9)){a5.insertBefore(a8.createTextNode(ac.exec(a9)[0]),a5.firstChild)}a9=a5.childNodes}}if(a9.nodeType){bg.push(a9)}else{bg=a.merge(bg,a9)}}if(bf){for(be=0;bg[be];be++){if(ba&&a.nodeName(bg[be],"script")&&(!bg[be].type||bg[be].type.toLowerCase()==="text/javascript")){ba.push(bg[be].parentNode?bg[be].parentNode.removeChild(bg[be]):bg[be])}else{if(bg[be].nodeType===1){bg.splice.apply(bg,[be+1,0].concat(a.makeArray(bg[be].getElementsByTagName("script"))))}bf.appendChild(bg[be])}}}return bg},cleanData:function(a5){var a8,a6,a4=a.cache,bd=a.expando,bb=a.event.special,ba=a.support.deleteExpando;for(var a9=0,a7;(a7=a5[a9])!=null;a9++){if(a7.nodeName&&a.noData[a7.nodeName.toLowerCase()]){continue}a6=a7[a.expando];if(a6){a8=a4[a6]&&a4[a6][bd];if(a8&&a8.events){for(var bc in a8.events){if(bb[bc]){a.event.remove(a7,bc)}else{a.removeEvent(a7,bc,a8.handle)}}if(a8.handle){a8.handle.elem=null}}if(ba){delete a7[a.expando]}else{if(a7.removeAttribute){a7.removeAttribute(a.expando)}}delete a4[a6]}}}});function aY(a4,a5){if(a5.src){a.ajax({url:a5.src,async:false,dataType:"script"})}else{a.globalEval(a5.text||a5.textContent||a5.innerHTML||"")}if(a5.parentNode){a5.parentNode.removeChild(a5)}}var X=/alpha\([^)]*\)/i,ad=/opacity=([^)]*)/,aB=/-([a-z])/ig,w=/([A-Z])/g,aQ=/^-?\d+(?:px)?$/i,aX=/^-?\d/,aM={position:"absolute",visibility:"hidden",display:"block"},Z=["Left","Right"],aI=["Top","Bottom"],O,ao,aA,k=function(a4,a5){return a5.toUpperCase()};a.fn.css=function(a4,a5){if(arguments.length===2&&a5===E){return this}return a.access(this,a4,a5,true,function(a7,a6,a8){return a8!==E?a.style(a7,a6,a8):a.css(a7,a6)})};a.extend({cssHooks:{opacity:{get:function(a6,a5){if(a5){var a4=O(a6,"opacity","opacity");return a4===""?"1":a4}else{return a6.style.opacity}}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true},cssProps:{"float":a.support.cssFloat?"cssFloat":"styleFloat"},style:function(a6,a5,bb,a7){if(!a6||a6.nodeType===3||a6.nodeType===8||!a6.style){return}var ba,a8=a.camelCase(a5),a4=a6.style,bc=a.cssHooks[a8];a5=a.cssProps[a8]||a8;if(bb!==E){if(typeof bb==="number"&&isNaN(bb)||bb==null){return}if(typeof bb==="number"&&!a.cssNumber[a8]){bb+="px"}if(!bc||!("set" in bc)||(bb=bc.set(a6,bb))!==E){try{a4[a5]=bb}catch(a9){}}}else{if(bc&&"get" in bc&&(ba=bc.get(a6,false,a7))!==E){return ba}return a4[a5]}},css:function(a9,a8,a5){var a7,a6=a.camelCase(a8),a4=a.cssHooks[a6];a8=a.cssProps[a6]||a6;if(a4&&"get" in a4&&(a7=a4.get(a9,true,a5))!==E){return a7}else{if(O){return O(a9,a8,a6)}}},swap:function(a7,a6,a8){var a4={};for(var a5 in a6){a4[a5]=a7.style[a5];a7.style[a5]=a6[a5]}a8.call(a7);for(a5 in a6){a7.style[a5]=a4[a5]}},camelCase:function(a4){return a4.replace(aB,k)}});a.curCSS=a.css;a.each(["height","width"],function(a5,a4){a.cssHooks[a4]={get:function(a8,a7,a6){var a9;if(a7){if(a8.offsetWidth!==0){a9=n(a8,a4,a6)}else{a.swap(a8,aM,function(){a9=n(a8,a4,a6)})}if(a9<=0){a9=O(a8,a4,a4);if(a9==="0px"&&aA){a9=aA(a8,a4,a4)}if(a9!=null){return a9===""||a9==="auto"?"0px":a9}}if(a9<0||a9==null){a9=a8.style[a4];return a9===""||a9==="auto"?"0px":a9}return typeof a9==="string"?a9:a9+"px"}},set:function(a6,a7){if(aQ.test(a7)){a7=parseFloat(a7);if(a7>=0){return a7+"px"}}else{return a7}}}});if(!a.support.opacity){a.cssHooks.opacity={get:function(a5,a4){return ad.test((a4&&a5.currentStyle?a5.currentStyle.filter:a5.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":a4?"1":""},set:function(a7,a8){var a6=a7.style;a6.zoom=1;var a4=a.isNaN(a8)?"":"alpha(opacity="+a8*100+")",a5=a6.filter||"";a6.filter=X.test(a5)?a5.replace(X,a4):a6.filter+" "+a4}}}if(ae.defaultView&&ae.defaultView.getComputedStyle){ao=function(a9,a4,a7){var a6,a8,a5;a7=a7.replace(w,"-$1").toLowerCase();if(!(a8=a9.ownerDocument.defaultView)){return E}if((a5=a8.getComputedStyle(a9,null))){a6=a5.getPropertyValue(a7);if(a6===""&&!a.contains(a9.ownerDocument.documentElement,a9)){a6=a.style(a9,a7)}}return a6}}if(ae.documentElement.currentStyle){aA=function(a8,a6){var a9,a5=a8.currentStyle&&a8.currentStyle[a6],a4=a8.runtimeStyle&&a8.runtimeStyle[a6],a7=a8.style;if(!aQ.test(a5)&&aX.test(a5)){a9=a7.left;if(a4){a8.runtimeStyle.left=a8.currentStyle.left}a7.left=a6==="fontSize"?"1em":(a5||0);a5=a7.pixelLeft+"px";a7.left=a9;if(a4){a8.runtimeStyle.left=a4}}return a5===""?"auto":a5}}O=ao||aA;function n(a6,a5,a4){var a8=a5==="width"?Z:aI,a7=a5==="width"?a6.offsetWidth:a6.offsetHeight;if(a4==="border"){return a7}a.each(a8,function(){if(!a4){a7-=parseFloat(a.css(a6,"padding"+this))||0}if(a4==="margin"){a7+=parseFloat(a.css(a6,"margin"+this))||0}else{a7-=parseFloat(a.css(a6,"border"+this+"Width"))||0}});return a7}if(a.expr&&a.expr.filters){a.expr.filters.hidden=function(a6){var a5=a6.offsetWidth,a4=a6.offsetHeight;return(a5===0&&a4===0)||(!a.support.reliableHiddenOffsets&&(a6.style.display||a.css(a6,"display"))==="none")};a.expr.filters.visible=function(a4){return !a.expr.filters.hidden(a4)}}var h=/%20/g,aa=/\[\]$/,a3=/\r?\n/g,a0=/#.*$/,aj=/^(.*?):\s*(.*?)\r?$/mg,aE=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ar=/^(?:GET|HEAD)$/,b=/^\/\//,F=/\?/,aL=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,o=/^(?:select|textarea)/i,f=/\s+/,a2=/([?&])_=[^&]*/,D=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,x=a.fn.load,P={},p={};function d(a4){return function(a8,ba){if(typeof a8!=="string"){ba=a8;a8="*"}if(a.isFunction(ba)){var a7=a8.toLowerCase().split(f),a6=0,a9=a7.length,a5,bb,bc;for(;a6<a9;a6++){a5=a7[a6];bc=/^\+/.test(a5);if(bc){a5=a5.substr(1)||"*"}bb=a4[a5]=a4[a5]||[];bb[bc?"unshift":"push"](ba)}}}}function ax(a5,be,a9,bd,bb,a7){bb=bb||be.dataTypes[0];a7=a7||{};a7[bb]=true;var ba=a5[bb],a6=0,a4=ba?ba.length:0,a8=(a5===P),bc;for(;a6<a4&&(a8||!bc);a6++){bc=ba[a6](be,a9,bd);if(typeof bc==="string"){if(a7[bc]){bc=E}else{be.dataTypes.unshift(bc);bc=ax(a5,be,a9,bd,bc,a7)}}}if((a8||!bc)&&!a7["*"]){bc=ax(a5,be,a9,bd,"*",a7)}return bc}a.fn.extend({load:function(a6,a9,ba){if(typeof a6!=="string"&&x){return x.apply(this,arguments)}else{if(!this.length){return this}}var a8=a6.indexOf(" ");if(a8>=0){var a4=a6.slice(a8,a6.length);a6=a6.slice(0,a8)}var a7="GET";if(a9){if(a.isFunction(a9)){ba=a9;a9=null}else{if(typeof a9==="object"){a9=a.param(a9,a.ajaxSettings.traditional);a7="POST"}}}var a5=this;a.ajax({url:a6,type:a7,dataType:"html",data:a9,complete:function(bd,bb,bc){bc=bd.responseText;if(bd.isResolved()){bd.done(function(be){bc=be});a5.html(a4?a("<div>").append(bc.replace(aL,"")).find(a4):bc)}if(ba){a5.each(ba,[bc,bb,bd])}}});return this},serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||o.test(this.nodeName)||aE.test(this.type))}).map(function(a4,a5){var a6=a(this).val();return a6==null?null:a.isArray(a6)?a.map(a6,function(a8,a7){return{name:a5.name,value:a8.replace(a3,"\r\n")}}):{name:a5.name,value:a6.replace(a3,"\r\n")}}).get()}});a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a4,a5){a.fn[a5]=function(a6){return this.bind(a5,a6)}});a.each(["get","post"],function(a4,a5){a[a5]=function(a6,a8,a9,a7){if(a.isFunction(a8)){a7=a7||a9;a9=a8;a8=null}return a.ajax({type:a5,url:a6,data:a8,success:a9,dataType:a7})}});a.extend({getScript:function(a4,a5){return a.get(a4,null,a5,"script")},getJSON:function(a4,a5,a6){return a.get(a4,a5,a6,"json")},ajaxSetup:function(a4){a.extend(true,a.ajaxSettings,a4);if(a4.context){a.ajaxSettings.context=a4.context}},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":aP.String,"text html":true,"text json":a.parseJSON,"text xml":a.parseXML}},ajaxPrefilter:d(P),ajaxTransport:d(p),ajax:function(a8,a5){if(typeof a5!=="object"){a5=a8;a8=E}a5=a5||{};var bc=a.extend(true,{},a.ajaxSettings,a5),bq=(bc.context=("context" in a5?a5:a.ajaxSettings).context)||bc,bg=bq===bc?a.event:a(bq),bp=a.Deferred(),bm=a._Deferred(),ba=bc.statusCode||{},bh={},bo,a6,bk,be,bb=ae.location,bd=bb.protocol||"http:",bi,a9=0,bj,a7={readyState:0,setRequestHeader:function(br,bs){if(a9===0){bh[br.toLowerCase()]=bs}return this},getAllResponseHeaders:function(){return a9===2?bo:null},getResponseHeader:function(bs){var br;if(a9===2){if(!a6){a6={};while((br=aj.exec(bo))){a6[br[1].toLowerCase()]=br[2]}}br=a6[bs.toLowerCase()]}return br||null},abort:function(br){br=br||"abort";if(bk){bk.abort(br)}bf(0,br);return this}};function bf(bw,bu,bx,bt){if(a9===2){return}a9=2;if(be){clearTimeout(be)}bk=E;bo=bt||"";a7.readyState=bw?4:0;var br,bB,bA,bv=bx?aU(bc,a7,bx):E,bs,bz;if(bw>=200&&bw<300||bw===304){if(bc.ifModified){if((bs=a7.getResponseHeader("Last-Modified"))){a.lastModified[bc.url]=bs}if((bz=a7.getResponseHeader("Etag"))){a.etag[bc.url]=bz}}if(bw===304){bu="notmodified";br=true}else{try{bB=A(bc,bv);bu="success";br=true}catch(by){bu="parsererror";bA=by}}}else{bA=bu;if(bw){bu="error";if(bw<0){bw=0}}}a7.status=bw;a7.statusText=bu;if(br){bp.resolveWith(bq,[bB,bu,a7])}else{bp.rejectWith(bq,[a7,bu,bA])}a7.statusCode(ba);ba=E;if(bc.global){bg.trigger("ajax"+(br?"Success":"Error"),[a7,bc,br?bB:bA])}bm.resolveWith(bq,[a7,bu]);if(bc.global){bg.trigger("ajaxComplete",[a7,bc]);if(!(--a.active)){a.event.trigger("ajaxStop")}}}bp.promise(a7);a7.success=a7.done;a7.error=a7.fail;a7.complete=bm.done;a7.statusCode=function(bs){if(bs){var br;if(a9<2){for(br in bs){ba[br]=[ba[br],bs[br]]}}else{br=bs[a7.status];a7.then(br,br)}}return this};bc.url=(""+(a8||bc.url)).replace(a0,"").replace(b,bd+"//");bc.dataTypes=a.trim(bc.dataType||"*").toLowerCase().split(f);if(!bc.crossDomain){bi=D.exec(bc.url.toLowerCase());bc.crossDomain=!!(bi&&(bi[1]!=bd||bi[2]!=bb.hostname||(bi[3]||(bi[1]==="http:"?80:443))!=(bb.port||(bd==="http:"?80:443))))}if(bc.data&&bc.processData&&typeof bc.data!=="string"){bc.data=a.param(bc.data,bc.traditional)}ax(P,bc,a5,a7);bc.type=bc.type.toUpperCase();bc.hasContent=!ar.test(bc.type);if(bc.global&&a.active++===0){a.event.trigger("ajaxStart")}if(!bc.hasContent){if(bc.data){bc.url+=(F.test(bc.url)?"&":"?")+bc.data}if(bc.cache===false){var a4=a.now(),bn=bc.url.replace(a2,"$1_="+a4);bc.url=bn+((bn===bc.url)?(F.test(bc.url)?"&":"?")+"_="+a4:"")}}if(bc.data&&bc.hasContent&&bc.contentType!==false||a5.contentType){bh["content-type"]=bc.contentType}if(bc.ifModified){if(a.lastModified[bc.url]){bh["if-modified-since"]=a.lastModified[bc.url]}if(a.etag[bc.url]){bh["if-none-match"]=a.etag[bc.url]}}bh.accept=bc.dataTypes[0]&&bc.accepts[bc.dataTypes[0]]?bc.accepts[bc.dataTypes[0]]+(bc.dataTypes[0]!=="*"?", */*; q=0.01":""):bc.accepts["*"];for(bj in bc.headers){bh[bj.toLowerCase()]=bc.headers[bj]}if(bc.beforeSend&&(bc.beforeSend.call(bq,a7,bc)===false||a9===2)){bf(0,"abort");a7=false}else{for(bj in {success:1,error:1,complete:1}){a7[bj](bc[bj])}bk=ax(p,bc,a5,a7);if(!bk){bf(-1,"No Transport")}else{a9=a7.readyState=1;if(bc.global){bg.trigger("ajaxSend",[a7,bc])}if(bc.async&&bc.timeout>0){be=setTimeout(function(){a7.abort("timeout")},bc.timeout)}try{bk.send(bh,bf)}catch(bl){if(status<2){bf(-1,bl)}else{a.error(bl)}}}}return a7},param:function(a4,a6){var a5=[],a8=function(a9,ba){ba=a.isFunction(ba)?ba():ba;a5[a5.length]=encodeURIComponent(a9)+"="+encodeURIComponent(ba)};if(a6===E){a6=a.ajaxSettings.traditional}if(a.isArray(a4)||a4.jquery){a.each(a4,function(){a8(this.name,this.value)})}else{for(var a7 in a4){s(a7,a4[a7],a6,a8)}}return a5.join("&").replace(h,"+")}});function s(a5,a7,a4,a6){if(a.isArray(a7)&&a7.length){a.each(a7,function(a9,a8){if(a4||aa.test(a5)){a6(a5,a8)}else{s(a5+"["+(typeof a8==="object"||a.isArray(a8)?a9:"")+"]",a8,a4,a6)}})}else{if(!a4&&a7!=null&&typeof a7==="object"){if(a.isArray(a7)||a.isEmptyObject(a7)){a6(a5,"")}else{a.each(a7,function(a9,a8){s(a5+"["+a9+"]",a8,a4,a6)})}}else{a6(a5,a7)}}}a.extend({active:0,lastModified:{},etag:{}});function aU(bd,bc,a9){var a5=bd.contents,bb=bd.dataTypes,a6=bd.responseFields,a8,ba,a7,a4;for(ba in a6){if(ba in a9){bc[a6[ba]]=a9[ba]}}while(bb[0]==="*"){bb.shift();if(a8===E){a8=bc.getResponseHeader("content-type")}}if(a8){for(ba in a5){if(a5[ba]&&a5[ba].test(a8)){bb.unshift(ba);break}}}if(bb[0] in a9){a7=bb[0]}else{for(ba in a9){if(!bb[0]||bd.converters[ba+" "+bb[0]]){a7=ba;break}if(!a4){a4=ba}}a7=a7||a4}if(a7){if(a7!==bb[0]){bb.unshift(a7)}return a9[a7]}}function A(bg,a9){if(bg.dataFilter){a9=bg.dataFilter(a9,bg.dataType)}var bd=bg.dataTypes,bf=bg.converters,ba,a6=bd.length,bb,bc=bd[0],a7,a8,be,a5,a4;for(ba=1;ba<a6;ba++){a7=bc;bc=bd[ba];if(bc==="*"){bc=a7}else{if(a7!=="*"&&a7!==bc){a8=a7+" "+bc;be=bf[a8]||bf["* "+bc];if(!be){a4=E;for(a5 in bf){bb=a5.split(" ");if(bb[0]===a7||bb[0]==="*"){a4=bf[bb[1]+" "+bc];if(a4){a5=bf[a5];if(a5===true){be=a4}else{if(a4===true){be=a5}}break}}}}if(!(be||a4)){a.error("No conversion from "+a8.replace(" "," to "))}if(be!==true){a9=be?be(a9):a4(a5(a9))}}}}return a9}var ai=a.now(),r=/(\=)\?(&|$)|()\?\?()/i;a.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return a.expando+"_"+(ai++)}});a.ajaxPrefilter("json jsonp",function(bc,a9,bb){bb=(typeof bc.data==="string");if(bc.dataTypes[0]==="jsonp"||a9.jsonpCallback||a9.jsonp!=null||bc.jsonp!==false&&(r.test(bc.url)||bb&&r.test(bc.data))){var ba,a6=bc.jsonpCallback=a.isFunction(bc.jsonpCallback)?bc.jsonpCallback():bc.jsonpCallback,a8=aP[a6],a4=bc.url,a7=bc.data,a5="$1"+a6+"$2";if(bc.jsonp!==false){a4=a4.replace(r,a5);if(bc.url===a4){if(bb){a7=a7.replace(r,a5)}if(bc.data===a7){a4+=(/\?/.test(a4)?"&":"?")+bc.jsonp+"="+a6}}}bc.url=a4;bc.data=a7;aP[a6]=function(bd){ba=[bd]};bc.complete=[function(){aP[a6]=a8;if(a8){if(ba&&a.isFunction(a8)){aP[a6](ba[0])}}else{try{delete aP[a6]}catch(bd){}}},bc.complete];bc.converters["script json"]=function(){if(!ba){a.error(a6+" was not called")}return ba[0]};bc.dataTypes[0]="json";return"script"}});a.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a4){a.globalEval(a4);return a4}}});a.ajaxPrefilter("script",function(a4){if(a4.cache===E){a4.cache=false}if(a4.crossDomain){a4.type="GET";a4.global=false}});a.ajaxTransport("script",function(a6){if(a6.crossDomain){var a4,a5=ae.getElementsByTagName("head")[0]||ae.documentElement;return{send:function(a7,a8){a4=ae.createElement("script");a4.async="async";if(a6.scriptCharset){a4.charset=a6.scriptCharset}a4.src=a6.url;a4.onload=a4.onreadystatechange=function(ba,a9){if(!a4.readyState||/loaded|complete/.test(a4.readyState)){a4.onload=a4.onreadystatechange=null;if(a5&&a4.parentNode){a5.removeChild(a4)}a4=E;if(!a9){a8(200,"success")}}};a5.insertBefore(a4,a5.firstChild)},abort:function(){if(a4){a4.onload(0,1)}}}}});var v=a.now(),aF={},aC,ak;a.ajaxSettings.xhr=aP.ActiveXObject?function(){if(aP.location.protocol!=="file:"){try{return new aP.XMLHttpRequest()}catch(a5){}}try{return new aP.ActiveXObject("Microsoft.XMLHTTP")}catch(a4){}}:function(){return new aP.XMLHttpRequest()};try{ak=a.ajaxSettings.xhr()}catch(a1){}a.support.ajax=!!ak;a.support.cors=ak&&("withCredentials" in ak);ak=E;if(a.support.ajax){a.ajaxTransport(function(a4){if(!a4.crossDomain||a.support.cors){var a5;return{send:function(ba,a6){if(!aC){aC=1;a(aP).bind("unload",function(){a.each(aF,function(bb,bc){if(bc.onreadystatechange){bc.onreadystatechange(1)}})})}var a9=a4.xhr(),a8;if(a4.username){a9.open(a4.type,a4.url,a4.async,a4.username,a4.password)}else{a9.open(a4.type,a4.url,a4.async)}if(!(a4.crossDomain&&!a4.hasContent)&&!ba["x-requested-with"]){ba["x-requested-with"]="XMLHttpRequest"}try{a.each(ba,function(bb,bc){a9.setRequestHeader(bb,bc)})}catch(a7){}a9.send((a4.hasContent&&a4.data)||null);a5=function(be,bc){if(a5&&(bc||a9.readyState===4)){a5=0;if(a8){a9.onreadystatechange=a.noop;delete aF[a8]}if(bc){if(a9.readyState!==4){a9.abort()}}else{var bb=a9.status,bi,bf=a9.getAllResponseHeaders(),bg={},bd=a9.responseXML;if(bd&&bd.documentElement){bg.xml=bd}bg.text=a9.responseText;try{bi=a9.statusText}catch(bh){bi=""}bb=bb===0?(!a4.crossDomain||bi?(bf?304:0):302):(bb==1223?204:bb);a6(bb,bi,bg,bf)}}};if(!a4.async||a9.readyState===4){a5()}else{a8=v++;aF[a8]=a9;a9.onreadystatechange=a5}},abort:function(){if(a5){a5(0,1)}}}}})}var J={},ah=/^(?:toggle|show|hide)$/,au=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,aJ,an=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];a.fn.extend({show:function(a7,ba,a9){var a6,a8;if(a7||a7===0){return this.animate(aH("show",3),a7,ba,a9)}else{for(var a5=0,a4=this.length;a5<a4;a5++){a6=this[a5];a8=a6.style.display;if(!a._data(a6,"olddisplay")&&a8==="none"){a8=a6.style.display=""}if(a8===""&&a.css(a6,"display")==="none"){a._data(a6,"olddisplay",u(a6.nodeName))}}for(a5=0;a5<a4;a5++){a6=this[a5];a8=a6.style.display;if(a8===""||a8==="none"){a6.style.display=a._data(a6,"olddisplay")||""}}return this}},hide:function(a6,a9,a8){if(a6||a6===0){return this.animate(aH("hide",3),a6,a9,a8)}else{for(var a5=0,a4=this.length;a5<a4;a5++){var a7=a.css(this[a5],"display");if(a7!=="none"&&!a._data(this[a5],"olddisplay")){a._data(this[a5],"olddisplay",a7)}}for(a5=0;a5<a4;a5++){this[a5].style.display="none"}return this}},_toggle:a.fn.toggle,toggle:function(a6,a5,a7){var a4=typeof a6==="boolean";if(a.isFunction(a6)&&a.isFunction(a5)){this._toggle.apply(this,arguments)}else{if(a6==null||a4){this.each(function(){var a8=a4?a6:a(this).is(":hidden");a(this)[a8?"show":"hide"]()})}else{this.animate(aH("toggle",3),a6,a5,a7)}}return this},fadeTo:function(a4,a7,a6,a5){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a7},a4,a6,a5)},animate:function(a8,a5,a7,a6){var a4=a.speed(a5,a7,a6);if(a.isEmptyObject(a8)){return this.each(a4.complete)}return this[a4.queue===false?"each":"queue"](function(){var bb=a.extend({},a4),bf,bc=this.nodeType===1,bd=bc&&a(this).is(":hidden"),a9=this;for(bf in a8){var ba=a.camelCase(bf);if(bf!==ba){a8[ba]=a8[bf];delete a8[bf];bf=ba}if(a8[bf]==="hide"&&bd||a8[bf]==="show"&&!bd){return bb.complete.call(this)}if(bc&&(bf==="height"||bf==="width")){bb.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(a.css(this,"display")==="inline"&&a.css(this,"float")==="none"){if(!a.support.inlineBlockNeedsLayout){this.style.display="inline-block"}else{var be=u(this.nodeName);if(be==="inline"){this.style.display="inline-block"}else{this.style.display="inline";this.style.zoom=1}}}}if(a.isArray(a8[bf])){(bb.specialEasing=bb.specialEasing||{})[bf]=a8[bf][1];a8[bf]=a8[bf][0]}}if(bb.overflow!=null){this.style.overflow="hidden"}bb.curAnim=a.extend({},a8);a.each(a8,function(bh,bl){var bk=new a.fx(a9,bb,bh);if(ah.test(bl)){bk[bl==="toggle"?bd?"show":"hide":bl](a8)}else{var bj=au.exec(bl),bm=bk.cur()||0;if(bj){var bg=parseFloat(bj[2]),bi=bj[3]||"px";if(bi!=="px"){a.style(a9,bh,(bg||1)+bi);bm=((bg||1)/bk.cur())*bm;a.style(a9,bh,bm+bi)}if(bj[1]){bg=((bj[1]==="-="?-1:1)*bg)+bm}bk.custom(bm,bg,bi)}else{bk.custom(bm,bl,"")}}});return true})},stop:function(a5,a4){var a6=a.timers;if(a5){this.queue([])}this.each(function(){for(var a7=a6.length-1;a7>=0;a7--){if(a6[a7].elem===this){if(a4){a6[a7](true)}a6.splice(a7,1)}}});if(!a4){this.dequeue()}return this}});function aH(a5,a4){var a6={};a.each(an.concat.apply([],an.slice(0,a4)),function(){a6[this]=a5});return a6}a.each({slideDown:aH("show",1),slideUp:aH("hide",1),slideToggle:aH("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a4,a5){a.fn[a4]=function(a6,a8,a7){return this.animate(a5,a6,a8,a7)}});a.extend({speed:function(a6,a7,a5){var a4=a6&&typeof a6==="object"?a.extend({},a6):{complete:a5||!a5&&a7||a.isFunction(a6)&&a6,duration:a6,easing:a5&&a7||a7&&!a.isFunction(a7)&&a7};a4.duration=a.fx.off?0:typeof a4.duration==="number"?a4.duration:a4.duration in a.fx.speeds?a.fx.speeds[a4.duration]:a.fx.speeds._default;a4.old=a4.complete;a4.complete=function(){if(a4.queue!==false){a(this).dequeue()}if(a.isFunction(a4.old)){a4.old.call(this)}};return a4},easing:{linear:function(a6,a7,a4,a5){return a4+a5*a6},swing:function(a6,a7,a4,a5){return((-Math.cos(a6*Math.PI)/2)+0.5)*a5+a4}},timers:[],fx:function(a5,a4,a6){this.options=a4;this.elem=a5;this.prop=a6;if(!a4.orig){a4.orig={}}}});a.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(a.fx.step[this.prop]||a.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var a4=parseFloat(a.css(this.elem,this.prop));return a4||0},custom:function(a9,a8,a7){var a4=this,a6=a.fx;this.startTime=a.now();this.start=a9;this.end=a8;this.unit=a7||this.unit||"px";this.now=this.start;this.pos=this.state=0;function a5(ba){return a4.step(ba)}a5.elem=this.elem;if(a5()&&a.timers.push(a5)&&!aJ){aJ=setInterval(a6.tick,a6.interval)}},show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());a(this.elem).show()},hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a7){var bc=a.now(),a8=true;if(a7||bc>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var a9 in this.options.curAnim){if(this.options.curAnim[a9]!==true){a8=false}}if(a8){if(this.options.overflow!=null&&!a.support.shrinkWrapBlocks){var a6=this.elem,bd=this.options;a.each(["","X","Y"],function(be,bf){a6.style["overflow"+bf]=bd.overflow[be]})}if(this.options.hide){a(this.elem).hide()}if(this.options.hide||this.options.show){for(var a4 in this.options.curAnim){a.style(this.elem,a4,this.options.orig[a4])}}this.options.complete.call(this.elem)}return false}else{var a5=bc-this.startTime;this.state=a5/this.options.duration;var ba=this.options.specialEasing&&this.options.specialEasing[this.prop];var bb=this.options.easing||(a.easing.swing?"swing":"linear");this.pos=a.easing[ba||bb](this.state,a5,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};a.extend(a.fx,{tick:function(){var a5=a.timers;for(var a4=0;a4<a5.length;a4++){if(!a5[a4]()){a5.splice(a4--,1)}}if(!a5.length){a.fx.stop()}},interval:13,stop:function(){clearInterval(aJ);aJ=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a4){a.style(a4.elem,"opacity",a4.now)},_default:function(a4){if(a4.elem.style&&a4.elem.style[a4.prop]!=null){a4.elem.style[a4.prop]=(a4.prop==="width"||a4.prop==="height"?Math.max(0,a4.now):a4.now)+a4.unit}else{a4.elem[a4.prop]=a4.now}}}});if(a.expr&&a.expr.filters){a.expr.filters.animated=function(a4){return a.grep(a.timers,function(a5){return a4===a5.elem}).length}}function u(a6){if(!J[a6]){var a4=a("<"+a6+">").appendTo("body"),a5=a4.css("display");a4.remove();if(a5==="none"||a5===""){a5="block"}J[a6]=a5}return J[a6]}var M=/^t(?:able|d|h)$/i,S=/^(?:body|html)$/i;if("getBoundingClientRect" in ae.documentElement){a.fn.offset=function(bh){var a7=this[0],ba;if(bh){return this.each(function(bi){a.offset.setOffset(this,bh,bi)})}if(!a7||!a7.ownerDocument){return null}if(a7===a7.ownerDocument.body){return a.offset.bodyOffset(a7)}try{ba=a7.getBoundingClientRect()}catch(be){}var bg=a7.ownerDocument,a5=bg.documentElement;if(!ba||!a.contains(a5,a7)){return ba?{top:ba.top,left:ba.left}:{top:0,left:0}}var bb=bg.body,bc=ap(bg),a9=a5.clientTop||bb.clientTop||0,bd=a5.clientLeft||bb.clientLeft||0,a4=(bc.pageYOffset||a.support.boxModel&&a5.scrollTop||bb.scrollTop),a8=(bc.pageXOffset||a.support.boxModel&&a5.scrollLeft||bb.scrollLeft),bf=ba.top+a4-a9,a6=ba.left+a8-bd;return{top:bf,left:a6}}}else{a.fn.offset=function(bf){var a9=this[0];if(bf){return this.each(function(bg){a.offset.setOffset(this,bf,bg)})}if(!a9||!a9.ownerDocument){return null}if(a9===a9.ownerDocument.body){return a.offset.bodyOffset(a9)}a.offset.initialize();var bc,a6=a9.offsetParent,a5=a9,be=a9.ownerDocument,a7=be.documentElement,ba=be.body,bb=be.defaultView,a4=bb?bb.getComputedStyle(a9,null):a9.currentStyle,bd=a9.offsetTop,a8=a9.offsetLeft;while((a9=a9.parentNode)&&a9!==ba&&a9!==a7){if(a.offset.supportsFixedPosition&&a4.position==="fixed"){break}bc=bb?bb.getComputedStyle(a9,null):a9.currentStyle;bd-=a9.scrollTop;a8-=a9.scrollLeft;if(a9===a6){bd+=a9.offsetTop;a8+=a9.offsetLeft;if(a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&M.test(a9.nodeName))){bd+=parseFloat(bc.borderTopWidth)||0;a8+=parseFloat(bc.borderLeftWidth)||0}a5=a6;a6=a9.offsetParent}if(a.offset.subtractsBorderForOverflowNotVisible&&bc.overflow!=="visible"){bd+=parseFloat(bc.borderTopWidth)||0;a8+=parseFloat(bc.borderLeftWidth)||0}a4=bc}if(a4.position==="relative"||a4.position==="static"){bd+=ba.offsetTop;a8+=ba.offsetLeft}if(a.offset.supportsFixedPosition&&a4.position==="fixed"){bd+=Math.max(a7.scrollTop,ba.scrollTop);a8+=Math.max(a7.scrollLeft,ba.scrollLeft)}return{top:bd,left:a8}}}a.offset={initialize:function(){var a4=ae.body,a5=ae.createElement("div"),a8,ba,a9,bb,a6=parseFloat(a.css(a4,"marginTop"))||0,a7="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.extend(a5.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});a5.innerHTML=a7;a4.insertBefore(a5,a4.firstChild);a8=a5.firstChild;ba=a8.firstChild;bb=a8.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(ba.offsetTop!==5);this.doesAddBorderForTableAndCells=(bb.offsetTop===5);ba.style.position="fixed";ba.style.top="20px";this.supportsFixedPosition=(ba.offsetTop===20||ba.offsetTop===15);ba.style.position=ba.style.top="";a8.style.overflow="hidden";a8.style.position="relative";this.subtractsBorderForOverflowNotVisible=(ba.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(a4.offsetTop!==a6);a4.removeChild(a5);a4=a5=a8=ba=a9=bb=null;a.offset.initialize=a.noop},bodyOffset:function(a4){var a6=a4.offsetTop,a5=a4.offsetLeft;a.offset.initialize();if(a.offset.doesNotIncludeMarginInBodyOffset){a6+=parseFloat(a.css(a4,"marginTop"))||0;a5+=parseFloat(a.css(a4,"marginLeft"))||0}return{top:a6,left:a5}},setOffset:function(a7,bg,ba){var bb=a.css(a7,"position");if(bb==="static"){a7.style.position="relative"}var a9=a(a7),a5=a9.offset(),a4=a.css(a7,"top"),be=a.css(a7,"left"),bf=(bb==="absolute"&&a.inArray("auto",[a4,be])>-1),bd={},bc={},a6,a8;if(bf){bc=a9.position()}a6=bf?bc.top:parseInt(a4,10)||0;a8=bf?bc.left:parseInt(be,10)||0;if(a.isFunction(bg)){bg=bg.call(a7,ba,a5)}if(bg.top!=null){bd.top=(bg.top-a5.top)+a6}if(bg.left!=null){bd.left=(bg.left-a5.left)+a8}if("using" in bg){bg.using.call(a7,bd)}else{a9.css(bd)}}};a.fn.extend({position:function(){if(!this[0]){return null}var a6=this[0],a5=this.offsetParent(),a7=this.offset(),a4=S.test(a5[0].nodeName)?{top:0,left:0}:a5.offset();a7.top-=parseFloat(a.css(a6,"marginTop"))||0;a7.left-=parseFloat(a.css(a6,"marginLeft"))||0;a4.top+=parseFloat(a.css(a5[0],"borderTopWidth"))||0;a4.left+=parseFloat(a.css(a5[0],"borderLeftWidth"))||0;return{top:a7.top-a4.top,left:a7.left-a4.left}},offsetParent:function(){return this.map(function(){var a4=this.offsetParent||ae.body;while(a4&&(!S.test(a4.nodeName)&&a.css(a4,"position")==="static")){a4=a4.offsetParent}return a4})}});a.each(["Left","Top"],function(a5,a4){var a6="scroll"+a4;a.fn[a6]=function(a9){var a7=this[0],a8;if(!a7){return null}if(a9!==E){return this.each(function(){a8=ap(this);if(a8){a8.scrollTo(!a5?a9:a(a8).scrollLeft(),a5?a9:a(a8).scrollTop())}else{this[a6]=a9}})}else{a8=ap(a7);return a8?("pageXOffset" in a8)?a8[a5?"pageYOffset":"pageXOffset"]:a.support.boxModel&&a8.document.documentElement[a6]||a8.document.body[a6]:a7[a6]}}});function ap(a4){return a.isWindow(a4)?a4:a4.nodeType===9?a4.defaultView||a4.parentWindow:false}a.each(["Height","Width"],function(a5,a4){var a6=a4.toLowerCase();a.fn["inner"+a4]=function(){return this[0]?parseFloat(a.css(this[0],a6,"padding")):null};a.fn["outer"+a4]=function(a7){return this[0]?parseFloat(a.css(this[0],a6,a7?"margin":"border")):null};a.fn[a6]=function(a8){var a9=this[0];if(!a9){return a8==null?null:this}if(a.isFunction(a8)){return this.each(function(bd){var bc=a(this);bc[a6](a8.call(this,bd,bc[a6]()))})}if(a.isWindow(a9)){var ba=a9.document.documentElement["client"+a4];return a9.document.compatMode==="CSS1Compat"&&ba||a9.document.body["client"+a4]||ba}else{if(a9.nodeType===9){return Math.max(a9.documentElement["client"+a4],a9.body["scroll"+a4],a9.documentElement["scroll"+a4],a9.body["offset"+a4],a9.documentElement["offset"+a4])}else{if(a8===E){var bb=a.css(a9,a6),a7=parseFloat(bb);return a.isNaN(a7)?bb:a7}else{return this.css(a6,typeof a8==="string"?a8:a8+"px")}}}}})})(window);
/***************************
***************************/

if (jQuery('.d').children('p').eq(0).html() == 'This gallery is pining for the fjords.'){
	target = location.href.replace("g.e-hentai.org", "exhentai.org");
	document.location = target;

}
/*********************
*
*      Elenco
*
**********************/
if (location.pathname == '/' || location.pathname.indexOf('/tag/') > -1){
	jQuery('.itg tr').bind({
		mouseover: function(event) {
			jQuery(this).css('background-color','#E4C8C8');
			var img = jQuery('td.itd div div.it2',this);
			img.css({visibility: 'visible'});
		},
		mouseout: function(event) {
			jQuery(this).css('background-color','');
			jQuery('td.itd div div.it2',this).css('visibility','hidden');
		}
	});
}
	
/*********************
*
*      Gallerie
*
**********************/

if (/\/s\/.*/ig.test(location.pathname)){


/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);

/* Copyright (c) 2009 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
*/
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(f){var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);f.type="mousewheel";if(f.wheelDelta){g=f.wheelDelta/120}if(f.detail){g=-f.detail/3}d.unshift(f,g);return c.event.handle.apply(this,d)}})(jQuery);

hash = location.hash.replace( /#/, '' ).split('_');
if (hash != ""){
	location.href= hash[1];
}else{

var icons = {
	first	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANUSURBVDiNtZVvaNZVFMc/5977++3ZalTD2pRikRqSREISrGdNQdH+zCDTSQX9s4iM8s1TZPUiglK0IHpjhRiBb7KiN8sCWSGkVJomhKHUolbocm1j6fY8v9/v3tOL5+d8/PNsvfHA4cLlnM899/C994iqcinMXBIqILeX3AmU1rM7/LF3S9peL6FYiu4Xw7PfbE4XTwV2KK1Pr3kJAFXl3Z0bZ9UBCsLGa6+Z/dyff//aOF3Fk634+MdNdYOKpahZDLtvmdux/sl7N0wLrVY8jRVL0Rwx9C29beXMhfMWRc5G/4c7NbhYipY717Bz1ZLHmq9uaZMDA19wx+wexFIulqIL5SQM7t2Stk0JLj4fbbiyecYrq5eubRrXEQ4M7MKZmBAyXn18W8GIQcQgCCAAvPzew5MiuBhYOl+IPmufOXfZPZ09Tf0jhxkc+w1rHKrK7qMfYI3DiquCc3jX7DVTtKJ6MAvmddy1cH5nw/6Bz/m3MoIzEUEDqoGAQ02ESoZgEDWoKllI64MF4c4l3faqy9rs18d2kGmCNRFKIBDAeVI5jfcJWVYmCwmiBicFUh2fouLcgmakoULqy4hUUA2YWIEMFxmME4wVRECDUvETnPbD5zDOedKK8mVfbzj6y5HK4jkPcHlDC5VsHG8qYDNcbIgaDHHBEDcZGhoNcaMlKliMk/pgqgLSgz9991Xfvl0THe33cX3LzRgrGCfYSLCxEBWqwLjJEhUMLhZMThIRW7cV377tn0qe6F8/dmrHM3cvWlWYcUUrP4/uwYjQfUMJ6wQTGYwBnyk+VUI2KetYRMr1dBwf3Oa339j9T/8n5Q83L+9a0VS8rkcODfUC8Ob7ryU+0fiCLOFkXqyrBzaAPdYbvh8bmFibpp++03FrV0tx/oMueMUnGu97K+sEKrmXa1YDSD1wADzgTxzW38f+yh7xyZ7Xh4ZP3rSsa0Uhj/E1HnLXM7mT4NULXqRmmiRUn4sCYXyIdP9Wvy599Mi60dHhHqAATORxac2aAqmqeocwuPWjN85+9HA8v5IHojzJasAc2u43JT3Hf2ieZR4CTgFZDTABJlQ1AZDzZ56IRECcQx1g877VSvPM1X0OrQCJqoZJTr1hKiKmBmpzPx/qVdVfLP8/E45W7Mm1cbMAAAAASUVORK5CYII=',
	prev 	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANNSURBVDiNtZVNaFxVGIaf75xz782fUvsjGI00BY2IoILGmJks2igRqcH6H4pdSOmmK2sToS6iiBsRhIouTDetYnVRjSJCLbYbFSKdKiiIQZRY04ihNmnoZGbuufdzMXeSMaZjXPTAyzmLj+d7v5d77hFV5Uosc0WogPs/xb37gwERDoRtvv/UqPpGtWt23DcS7r1+U+eHRmzfWgz9J1heEpMbdm/e3HH7q3sGD7RY49K1GGnYeWBYWnPixrtv3Zq/r/vRpsCFa2E2Buefl3bBneq/e0fnnV33Bt9Of07P5kGMo1JecIu5/cE/6sUwG7T69lr2q4JzI+Ed1jSdGNy285rrNt1gJ6Y+BZQkTXhh11vNRgyCILKc5OjY7vXgHbA6uPc5t721ue3ow1ufbjORMjH1CUYs1gR8MXkYIw4jBmssgkFEyG95vHEUueFg37qrN7y8o39Xy/nFKX4+ewZrApwJSDUlTROscRix+NRgMsdJGqMosho4P+IOtm/seGYg/1jL5PlvmJ77aRmoCYGkpLZCRTyJxqDgCInsVXiNWXmDlx0b2jGIkhD7EmVfJBaLotgQwGNQjBXEVL1pqmgJiumFf0WxlP5XzckT5/78/dBHJ9+9dNOGbrquvYeyL5KaEtgKLoKw2RK1WJpaLVFr9Rw0G1KpXB6so5p+/Zrf99fsheFjxw8X14cd9HQ+RBAE2MDgQkMQmSp8CWpxkcFYQYGFc8u8pShEJACiiTf8B7c9VZwZT947cn/v9ra+zielMPsxaio8uOVZnHPYwKCqpF5JfHVHYOYMLSISq2rsMqgDwkzRD+8n392Y55Hjfvyd3F3bNuZv2elOzx5DU3j90CvlcjGOVo4uMDd/FgOEIpLUHNtMrqbfvkz+mP+VocSfPDh/cb4r1zMUaiLEZQ0KY/6B8kUWgHKmUrbXWK7hT2h+moXC28neQuH0yc9OjJcXi6VG5fUrrTlOMvk69xVAfAktjKUvVoZ+mbxUPLKHNI3EUMxcxlmdX6FqFKrqRSSLqtqxrpED3PdHk7HK4MyP6zbL7iRmLhvd18FjYBEoqapK/Y2RKj0Aomx3dRNIJs1UP2UZKKsuvypyucdURCzV79zWqTZNbaIESHQVyN9x5li6vCTOrQAAAABJRU5ErkJggg==',
	next	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM0SURBVDiNtZVbaB1VFIa/NbPn5GLtRSkpKNYnb+2DhQo1idCCVgRBRa36IlKlFHxpSUkLgqJgUaQ+9EVQS2nMQ4haCiliSzSGJqYqmhY1NMZL1KSxxgTTk+TMZc9ePpw5dZI20Yd0wc/MhjXf2v/ai9miqlyN8K4K9f+CG5uDrvom8+CSg9WxeW3dLe83Nhd2LykYYMfDL1Svu3njq/fsNW9v2yb+koF9P+CRzdtrNq27/+nza03nludl2WL5Jr9oaA7+wFF3WXUjoXO2+sz5Tho3bK1asWxVw8d9bf2b9sqW06/ryJXAkh+3hj2B7t/ZMidB1aEoTh1dQ60IHnesaWBsfNQd62r521p77+cH4v7/BL+y411O/dSeQRXFkboUpw6nltRZUrXcVnc3Gnsc/eTwTCksPnXqDdsxx+X8SqmzRLZEZEvEaUhkQ5I0IklDYhsSpyGxLfHN7ye4mI7x5AM7r1lx7eq2hj1B06Jg6xJKSZHJ2TEuFIcZn/6NqdKfhLZIQkgqEU5inMQMXOhhaOILHrvvmdob6256ubHZHKxwzHxwMZxkeOJblHKLxAM/8PCd4Ac+BVPAMz7iBCcpaqLyUxBEblgQnLhoDjSo8jCFsjwjeL4FLM4pt66sZ03hdj48cWR2anriUG9tumtBcD78wMMPPEyVd6mAZwRPPNav2oo/u5y2jsOz01Mz+04fTN8B4KV5YBEJ6pvKy8c37EMAz0gZbgTfCCfH3qS2poY7r3+I8ZEpPXa8ZWbyl+jZ79pdN1ALGBGJVDUxGdQABYXxt9r2r75s50bi3c+9WKj2l7Pxukc59/25tPOzkxPDvbp9tM8NATX8OwgqImllxz7g9x2w64GqTNWV9/om0+tS5a6VT9DT3RN/ffbLnwc+sLsujvAXUAAckGaygFm0x/kISyEffdoRDw4O9pw54l5LI2YWSXcVcL6anykGBMoj0n68Nf71h9FDZ99zrVlukinOvsur3ApVtSJCBiJnzQImTfSrH/tHWgaOuu6skMtBKvAEKAGhquqcf4WU6UHW24Dy1FQcSM6BznMZAZGq2kushS5TEfEpn7SfU8VN/rBSvQLkHy0nh7/z4dY0AAAAAElFTkSuQmCC',
	last	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM+SURBVDiNtZVdaBxVFMd/587c7GbVCils0BC1UArmoShoaLNFUbCgiIrEQp8EwY8HQSRJsVL6pK1gxAeRUKRUEW03RWlRCSaFamwqWlpjszYqbbWy2k21NdTY/ZiZe3zYzTrdZJu+dOBwL3fO/Z1z/+fMXFFVrsVjrgkV8JdyWLfJfqGOtyYGg4+a+WQG7BmUW+oLwsySYHXc25le2Z0ZsHejbJ4YDBZqp9z83IbNiAgAQ9lt7VclxTOPbWm9c1XmBTGMZfrtDc389k6+Vp9fFdg3Pg/1bEyuX9N7jxhymX67csk985PMgC2gtDc6iEcp0jB5LD/K7Su67fIb053DYzuPZvrthonB4PMlwSjtrz77HiD1BUVRdUmnIRWdY3JmlBVtq+Xpx/uX7R7Z8XFmwL4y8Xqw/cpgIHQBX50a/h+rDkTBi1ATokT8/PfXpFO38uSjz6f2H/xwy7pNtjuWzeLgyIWUw0sxHRzig4hDTYRKhGrIH8UTzJbP8vD9valvJscfPDJ1aAH6MnA5vER+9icqURFVRzKZJJW6jlQyhfVaEKNAiErAbJjncD7L6q71ifaONqSBfBn4Yukv/imfrybrAVohCucoVgyeGhI2gWd8RDwicRjjUAnB6IL+atpuxkjVPMHzBd8K2ABnS4TeHNe3LmNtZy8/TOfKn4584hpFbvrliYAYqZonGF/wrMF4wk2JLm5LrOWz0X3FX86c/lIMDzTu96sQMT191RhP3PFSNWO/mqnnV6FjZ9/E84WutvtoLXXwwd5dpcJvF3Yc2xm93dPn/yhNiucD54ay29ILJLFUXnxqa4s1Se5a/gizf/6re/a/U/z9+9LLJ0fcONCy2InnwXL4jXAVkACS8bGnzz+Cwpr0RqaOT4Xjhw5eODkaDZzL6SnAqxmNv/V5sAIuNjogqhnlSpmx8QOl6ekT08d3h1uL57kYex9dKeOwFjmg2ilSMwXYs+/dUv7XwvB3u6IhdfWgIVCp7UGd1utTB6uqE5FyQ/YRYDXi29O5wvu5bHQgFiwOD4DCUHZ7R50qzEjjnScilmpBbC2wVztFvOfjcgVAGaioqqtzml2mImJi0HqRGqCRqi6q8X996Fg789kzlgAAAABJRU5ErkJggg==',
	home	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH1QoOFCMCb8BVTwAAAyVJREFUOMullcFvG0UUh7+Z7Dq1G+NtnEBdRG0hVTSiqkAoNFIvHCCgKmotWVUiCMpf4FO1FQKVf2CFVEgFJyCIHIKg0jpSLz330AMHGkI5EEEPkRM1iZ1CXLvx7gyHXa/WTZ1E6kij3Z2Z9703v3lvVnCINg85oBp+vjkNv/G8bR7emge9Y9t6x7b1POjQ0b5NHAQFfi3adte46zgAJ6ZhrZetPAz00Z070XhtcZHQUXW/yOVB0Na9ewxks13zh4GL/aDeygrSMJCFQmf7FG2bzUoFKQSDFy/2lEX2gupqFZlOR9A/Jy6w+uEUruMwdOkSntb7Ri5i0Gngx6Jto+v1YPLYMVzHofHxR2ycfo2XXjzOqfo2q1evUrRt1isVEj0ij4N10bah2YTdXchkcB2HJ/YV/n35BCMjr5NKJmm1WqTW1nkwMxPAXZeElBF8OmQaIfRIx4FuNhGDg7iOg/7CQWazvJEvkM/ng3kNu6+cxLx1i4VSialymXXX3XN4RvhMRdqE0L7vv8UzTM6fG8OyrMhAaw2AZVlk795lYWyMqXL54HS7fvMX/LnvaBsGo6NvMzAwgO/7Xb3dbuP7Pv3ZLOP377MwOxtPANml8e2zZ2ceLi3NnVv5i08/+2RPBDe++hqlFNe/nEWLPrTXQhhH0P4TPr92jUo6zdCZM+UPlpdvxKVgfGnph8uTpbkLg0ExjIycRgiBEIFv3/fRWqOFpK8wjreyiMi/h35wG601lckShZOvfsPy8rOl6GiYSCQwTRPDMDBNE6VUBK9u7QDw+9+b+L6KbBzH0c/S2IiDpZRIKUnIVQxRQymFUgqPBH/8swXAw/pjPNEf2RBkl4hL0QccjYM7EihyNFsBNJfL8c75Ud5PHkXq47wrTTbWiIOzBAXiGaEHoxcY+kkmQSkFwKP6JmJ7q/tSqtX2VLIRG5AdbS3LIpPJIJAEfMHw8DCNRoOJiYk9GZNKRWXQAHQHKEIp0pcnS7Xn+dv8/NNNE/DioXfk6A8P4IVQryEgGc754dqd8L0NbAP/ARvA49iarvtYPCWLAMzYrogZ6rD7YddPR/8/aWZWKFzoJj8AAAAASUVORK5CYII=',
	galindex: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM7SURBVDiNtZTPT2NVFMc/9/W1pQUq6KApxGSUYRKjCzFqIMZMnAV1YVy5Zenf4HJc+QfMRv6HWbtgY3TihBAT0ahRMFImYYaZFigtfa/vx7n3uGh5lAEyYuJ3cxfvnM/53nPOu6ZWq/F/yAeoVCq5mZmZ8cuCJiYmOmtra+7K4Lm5uV+NMbOAXhQUx/Hu/Pz8exsbG60rgUXkjeXlZay1qCrO9c2pKsYY1tfXp7e2tj5fXFy8O5y8s7MDwN7eXnQZWEXE7O7uIiI453DOZeBqtVra3t7+stVqfXWSqKpUKpWT8/7m5ubtc2BrrTrnjIhgrT0DVlWSJGFhYaE0OTnJ6OgohUIBYwye5+GcY2Vl5dYljlMVSbHWkqSn4GF4nAid4wBjDACe52XwOBFTmf10rBmW5bvrD5Pa2przAZIkJU2F+r5wb0PwPA8wQG5w71Mn+sx8VR2a/8gg5ogCvL93s7m6emc667G1lsax48N3rvPJBzfRofyByQs19CkXJsKdr7+dqtU+1qzHIkIYK1OlIo12xKPD3sUgw5miJxrJ57g2nsfLed2hHouKCEEKr48WQcH3vHPJr14rc/utKeqNgAd/HmDdaQWnECcWz3jtDJym/eGFqaFSLqIKfu4UXPQ93r0xyewro2AMN6rjvDhe5P7vTTo9IYiEUiFHkgjGo5WB+62whAmMlfMA+APuyy8Uefu1SUbyHt1IsmIF33DrzSke/LFPO0goFfJEvQRgf9gx1lqitD+ORE6fhUY7Jkotceo4WQ+n/R+k1U2pN4Isth3EqNOnw46diNBLlMQq3cgSxJIV2GtFPLsYxkCzExPE/VsEcY7GUYg49/iM41SExPZd7B72ssGUCjkeH/SyvcoKGGi2Y4JBezp5j8N2lKp1jQwMuDC2FPM5jnqCDE07TCw//n3I8xSnSqsbJxhzMAymGzmqL1WYKPuMjZxftefJM4YgiEWdHgL4q6ur/tLSkm49idlvR3z/U/3KUACrjm4QFiRoPTxxXAzD8Juf/2p+lpaL/nFw7mn9FzKqqhJ3nvzw270v6r8MXoE8MA1MMdSa/yAHdICdWq0W+YAAj4CncG6rriIdwFOAfwBs2/JpAa7VsAAAAABJRU5ErkJggg==',
	broken	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1gIQDi0C5tBHpAAAA0dJREFUOMullM9rVFcUxz/nvh/zZvLe/Miok5mJNkMmSRsdpm1SMqFCF6PSxUDr62yEuBGhkI2LQha11AbcCP0Luu6qUAk03RSkIHUxgdChGgvStChoqAZiaxIzOpnrYiahiZ1kag8c3uXedz73ew+HL1prOsnTYHT6r9YaRQfhi4wfg+Vpw7jni/R3UmN2AHXfgB/fHh0NrNRq4cbNmzeAnv3q9lVswFS4r6/R7ziMJpPKtu1uX+SD/epEa72X2viwyINSsWjb8/OoSIQ/EwluVCp/3YL4Va03X0mxBZ8fyGR08PFjzOPHUYUCadfFCwaDAudeSbEvkh4W+aNULFp2tYo3MwO2zeqZMzxJp/nh+vWnt5uqn/4nxW/B96/FYiq4vEygXMZIJjHicexSibgIh1zXNOCTtpLbzGz2M6WezZ08qedTKf1btao9z9OZTEb/vrCgf85mdeXECf0p1E5Dd8dz/CZ81zcwoKylJYLnz6PCYVzXxfM8VFcXwYkJutbWOBKNKgumO2qFL5LfNIz+/OHDht7YwJmYAMB1XVzXRUQInj3L85UVxsbHzUGRj32RI/uC8zCTHRoyjPv3CV64gFgWIoLneYTDYUQEIxDAnZzEfPiQ/njcCMCXe4J9kXcxzfRwMqkkFMIplZqj0wJ7nodSChEh5Ps0Gg3eKRTUoGF86Ivk2o7bFyIPXs/lkoMbG3iXL2OPjW2D19fXsW0bx3EQEUSE2rVrPLlyhduG0fi1Wr13SevMS4p9kfeVZR0YPHgQI5PZAa3X6xSLRcrl8jZUKUXo1CkIh8n19iplWSlf5L0dYF9EcvD1saNHLe7exZ2a2gEwTZOenh4SicT23tZ57OJF6nfuMDIyYufgm93uVg7YdrgvGsVKpbAGBpq3tgCmaTI7O7sDuJWhQoGV7m6y8Ti/OE7UF/noqtbfitaaSyLLI/l8vHdtDb24CHsYU7sIDA2xFInw09zco2mtD5mtRlriOBCLYWSziMh2f2Xr+8+9XWulFKI1jdXVltO2WnFL68nNSuWrLIT4H7EIqwst13vJ3UREAZFWujQvCzRdFAU0gOdADVgH/gYe6V0u19Y2pflep5WBVkoL+mwLrLWu/1v9C3nOQejMt5dkAAAAAElFTkSuQmCC',
	find	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH1QsFDy45kXcgBgAAA89JREFUOMu1VW1Mm1UUfu771ZauLdR2MLMBySYtYZ1GYDNsfJioC8w5yWJmtsQf8kuJzmXGGF2yLDIicSKixKjRLTHiT6OJLsZB3FRG+VockyLbkJJ2psDa8lJK3/fte68/KK6wMsHEm9zk5NyT5z7nueecC/xPiywZH33cMTY/H9sGgKUfEwIwxrDcfyeAEHL++LHXnlz1hpZ3miljjFFK17wZY+xMa4ueCU9IsxkAIsuza07XarWtlgm4tJzWpWFKnlWXkCnQ5/P9K6jbXbw24HTGbrf7niwZY/+N8ejo6F2B3n4vJv0ToJSCMgpBEFBZWb0+xsXFd9L0T/px9txZHDl8BHW1+6FqOnQGSDzBnBxBd3cX/8aJ1yuam97uWRNjxhhmZ6M4/8P3aHzxKLqGbmEsGoJkyoKmM+hKHDs2Mhw7ehxt7e/+3HT6VNmJN09euSdjl8sFxoC3Tp9C4wsv45uBKfyVsOLZms24325CklL4AjK6rk4h6g3ipcZXuLb21ksALEsY/JLx+BOPndxdsYckEgsYGfGhr9+LLVvyMR4WMB4z4fmafGy0GWEUeegUMBkEmI0Chm+pMNC4mptjJDse9MQu/nTJu6yO0yVxuYrQc/kXlD5cil6/ht0uJ0RRQJICCU0HZQxaUkdgZgE8VXEtBGln+S7j1FSo7a4GWa41gSiKoOBgttpwn0WEoiWhaEmoSYoFVcdMNA73ZgsMShBRTYDJlAVRFFnGx6OUpmp00WcQBYgcw3Q0AYlffANFSWJaViAKAMfzIKDQk5quKApPKdUyzgpd1/8BLinZjmAwiGxJwo1gBACDSSLYYBSgajrMkgDGE4TjBAVOjoTDt5W8vE29GaVYBF5k79nuQd+AF/tKczG9AChJCsYIKGVIaDqSlCEaS8Do3Irah5zc5+c+k6PRSPdKYAIABoMBDocDTqcTj+yqQCgUws2RQewtsWJoQkbP8AQo4TGnMHz36x+4MDyNgx4BFy98ywryC82xuflXnzl0cNOyQX+mteVrXdefXtksgUAA27YWYV/9Yfz4WwiTt1WojMMDThFV7hx0vNdEn9p/gBu8MohIJExlWZ6RRGkvydDi5lShWwBsqK6p8rjcRS0Ou0PNzrGL5WXl5sLCwqzOrzr/vDl+XYrJ8ebcPGdHXW0drl4bRtWeavpl5xccvwKYAlABxAFEAMz4J/y/Dw4MfVD9aOUsx5Nsb19vweXeHtFms3jt9pyO9vc//LS8bKd0/cZYZf2BelgsVtI/0If1THcutUmahGTpB2loaHjOlGX4JOU79DeMtOtLJuh1KAAAAABJRU5ErkJggg==',
	code	: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1QoOAB42P7Pi6AAAAqRJREFUOMullU1IVFEYhp9z586U5TTqOP4kQiAouQtz4SYsckRaZNYmsJ27yG3TIhhqkDbZIgrCCYIEt7XRXbkoCdKFBEJBIGbozJjOvXMdm3E8p8X864yDeeFyvvPzPbz3/Q73E1R4hoeHPwK9+5ZnJycnLx+WJwonfj/a8iwOgGTj9Qv6iTPvpVSerq4OhEgfVUqxsPAdTRORVCI25Ai9mwc410vS70ceAI/22e4o5HMpqQb4W9ujNbb3iNbWxpKKVlcjrP+YUyc356QCNIGlpHbvxYe9twB6VunWZ/ls6FKbK7TbwFezkx1zD7fbQ1tbe05DWnR6TCRgfb1DVLWct3WfWcJFyDU993McyIOXZ3E4dWrsdo35zU58D59gRA3Gx5+yuLhUUrHTWY3P94DaulrGHt1nqGkDqUQ9KHLgnC9KYCXAXedGt9kIBAKkUqmSYF3XEULgctUQT4riYu0HH6isENjt9rL7SqmCSQVw4f7MzMwhUOjv95bdP1TxwMBASZXpVyKlPAJYlVechypA0dfXdzzFeYXpMQs3TYOGhqbK4H3+Mz09A6iiz/d6vbnYjJllc/VyPkgp6e/3FimUMu1rdi0SjhzdikJAoRVra7+xrG3i8ThKyeOCZUaxYmXlF4ODN3PnDCN6VPBeETRnRUalYUQxTRPLiv2P4nyRti2LcDiMytxd0zQJhdaZeD3BtaaF8uBs2U47JJGNCM3NLblDLfuSDCNaBHU7tisrbpXfGHvsI57UKjUXbrV84ZQtWd6KN7MkRq+yae2kPBfPGnSrTxx2v0v1oaiVAlT4QAe5e4UbQtNeopSnRNsS5f5F+UBsyarGwG5T76tgcGrnQMLIyO0qoAaoA+oBD9CQiZ1AHNgCNoAI8AfYzIyxYHBKAvwDXmGHizkmUGsAAAAASUVORK5CYII='
}


function Test(){
	var pages = new Object();
	
	this.count = -1;
	var current = -1;
	this.lastCached = -1;
	this.firstGalleryPage = -1;
	this.lastGalleryPage = -1;

	this.add = function(obj) {
		pages[obj['pageNum']] = obj;
		this.count++;
		this.lastCached = obj['pageNum'];
	};
	
	this.edit = function(page,src){
		pages[page]['imgSrc'] = src;
	};
	
	this.getLink = function(){
		return pages[current]['thisLink'];
	};
	
	this.getLinkN = function(num){
		return pages[num]['thisLink'];
	};
	
	this.getNext = function() {
		current++;
		return pages[current];
	};
	
	this.getPrev = function() {
		current--;
		return pages[current];
	};
	
	this.getNum = function(num) {
		current = parseInt(num);
		return pages[parseInt(num)];
	};
	
	this.getLastCached = function(){
		return pages[this.lastCached];
	};
	
	this.setStart = function(num){
		current = num;
	};
	
	this.setFirst = function(num){
		this.firstGalleryPage = parseInt(num);
	};
	
	this.getCurrent = function(num){
		return current;
	};
}


function GetVariablePageData (context) {
	if(!context) { //If the optional argument is not there, create a new variable with that name.
		var context = '';
	}else{
		var context = "#datacont ";
	}

	imgObj = jQuery(context +".sni").children('a').children('img');
	var imgObj = document.querySelector(context +'.sni > a > img');
	imgObj = jQuery(imgObj);
	
	if (!imgObj) return false;
	
	div = jQuery(context + 'div .if a');
	
	original = false;
	if (div.eq(3).attr('href')) original = {link : div.eq(3).attr('href'), text : div.eq(3).text()}
	
	
	if (jQuery(context + '.sni > .sn a').length > 0){
	
		links = jQuery(context + '.sni > .sn a');
		inizio = links[0];
		precedente = links[1];
		fine = links[3];
		current = parseInt(jQuery(context + 'div.sni > .sn div span').eq(0).html());
		total = parseInt(jQuery( context +'div.sni > .sn div span').eq(1).html());
	}else{
		pos = parseInt(jQuery(context + '.sni > .sa > div').css('left').replace("px"));
	
		jQuery(context + '.sni > div.sa > div.so > div').each(function(index){
			
			switch( (pos + parseInt(jQuery(this).css('left').replace("px",""))) ){
				case 293:
					//next
				break;
				case 174:
					// prev
					precedente = jQuery(this).children().attr('href');
				break;
				case 138:
					// first
					inizio = jQuery(this).children().attr('href');
				break;
				case 329:
					// last
					fine = jQuery(this).children().attr('href'); 
				break;
			}
			if (index == 4) return false;
		});
		current = parseInt(jQuery(context +'div.sp > span').eq(0).html());
		total = parseInt(jQuery( context + 'div.sp > span').eq(1).html());
		
	}
	
	return  { 
		'imgSrc'		: imgObj.attr('src'),
		'linkNext'		: imgObj.parent().attr('href'),
		'imgHeight'		: parseInt(imgObj.css("height")),
		'imgWidth'		: parseInt(imgObj.css("width")),
		'pageCurrent'	: current,
		'pageTotal'		: total,
		
		'allGallery'	: div.eq(0).attr('href'), // Show all galleries with this file
		'staticLink'	: div.eq(1).attr('href'), // Generate a static forum image link
		'original'		: original,
		
		'linkPrev' : precedente,
		'inizio' : inizio,
		'fine' : fine
	};
}

linkGalleria = jQuery(document.evaluate("/html/body/div/div[5]/a", document, null, XPathResult.ANY_TYPE, null).iterateNext()).attr('href');	// Indice Galleria
data = GetVariablePageData();

jQuery('body > *').remove();
jQuery('body').append(' \
	<div class="menu" style=""> \
		<div class="nav caption">\
			<a href="'+ data['inizio'] +'"><img src="'+icons.first+'" title="Go to FIRST immage in the gallery"/></a>\
			<a id="prev" href="'+ data['linkPrev'] +'"><img src="'+icons.prev+'" title="Go to PREVIOUS immage in the gallery"/></a> \
			<span id="current">'+ data['pageCurrent'] +'</span>/' + data['pageTotal'] + '&nbsp; \
			<a id="next" href="'+ data['linkNext'] +'"><img src="'+icons.next+'" title="Go to NEXT immage in the gallery"/></a>\
			<a href="'+ data['fine'] +'"><img src="'+icons.last+'" title="Go to LAST immage in the gallery"/></a>\
		</div>\
		<br/>\
		<div id="overMenu" class="overMenu caption"> \
			<div style="margin-top: 35px;"></div>\
			<a href="http://g.e-hentai.org/"><img src="' + icons.home +'" title="Front Page"/> </a>\
			<a id="galleria" href="' + linkGalleria+  '"> <img src="' + icons.galindex +'" title="Gallery index"/> </a> \
			<a id="rotta" href="'+ document.location + '?nl=1' + '"> <img src="' + icons.broken +'" title="Load Broken immage"/> </a> \
			<a id="search" href="'+ data['allGallery'] +'"> <img src="' + icons.find +'" title="Show all galleries with this file"/> </a> \
			<a id="staticLink" href="'+ data['staticLink'] +'"> <img src="' + icons.code +'" title="Generate a static forum image link"/> </a>\
			<div id="menuCaption"></div>\
			<div style="' + ( (!data['original']) ? 'display:none;' : '' ) + '" id="originalImmageWrap"><br/><a id="originalImmage" href="'+ data['original']['link']  +'">'+ data['original']['text']  +'</a></div> \
		</div> \
		<div style="height:100%; width: 190px; overflow: hidden;"> \
			<div id="collector" style="position:relative;"></div> \
		</div> \
	</div>\
');

jQuery('body').append('<div id="immagineCont" style="margin-left: 191px;text-align:center;"><img id="immagine" src="'+ data['imgSrc'] +'"/></div>');
jQuery('body').append('<div id="warning" style="display:none;"><img src="' + icons.broken +'" title="You are opening pages too fast"/>You are opening pages too fast. Please wait 10 sec.</div>');
jQuery('body').append('<div id="datacont" style="display:none;"></div>');

jQuery('body').css({
	'padding'	: 0,
	'font-size' : '12pt',
	'height'	: '100%'
	});

jQuery('head').append("\
<style type='text/css'>\
#warning {\
	position: fixed; \
	top: 0px; \
	background: none repeat scroll 0% 0% rgba(204, 204, 204,0.8); \
	right: 30%; \
	border-style: solid; \
	border-width: 0px 2px 2px; \
}\
#warning img { \
	vertical-align: middle; \
}\
#menuCaption{\
	background-color: #CDDBE3; \
	border: 1px solid; \
	-moz-border-radius: 6px 6px 6px 6px; \
	-webkit-border-radius: 6px 6px 6px 6px; \
	font-family: Verdana; \
	font-weight: bold; \
}\
.nav {\
	z-index: 3; \
	position: relative; \
	}\
.nav a img {\
	vertical-align: bottom\
}\
.overMenu { \
	top: 0px;\
	z-index: 2;\
	width: 99%;\
	border: 1px solid;\
	position: absolute;\
	background: none repeat scroll 0 0 #CCCCCC;\
	display: none;\
	font-size: 9px;\
}\
.menu { \
	height:100%; \
	text-align:center; \
	font-family: Comic Sans MS; \
	font-size: 18px; \
	line-height: 14px; \
	position:fixed; \
	background-color:rgba(170, 169, 162,0.7); \
}\
.menu a:link, .menu a:visited{\
	font-size: 10px; \
}\
.graphic {\
	font-size:25px !important ;\
\
}\
.test {\
	display:block;\
	line-height: 25px;\
	position:absolute;\
	bottom: 10px;\
	width: 100%;\
	background: -moz-linear-gradient(center bottom , rgba(1, 1, 1, 0.8) 0%, rgba(84, 83, 83, 0.8) 100%) repeat scroll 0 0 transparent;\
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0.00,  rgba(1, 1, 1, 0.8)), color-stop(1.00, rgba(84, 83, 83, 0.8))) repeat scroll 0 0 transparent;;\
	text-align: center;\
	color: #D7D7D7;\
	text-shadow: 0 0 6px #B4FF00;\
}\
.preview{\
	min-height: 138px;\
	height:138px;\
	min-width: 50px;\
	margin: 5px;\
	border: 1px solid black;\
	position:relative;\
}\
#immagineCont img {\
cursor :  pointer;\
}\
</style>\
");




jQuery("#staticLink").bind('click', function(event) {prompt('Copy the URL below.',jQuery(this).attr('href'));return false;});
jQuery('.caption a').bind('mouseenter',function(event) {jQuery('#menuCaption').text(jQuery(this).children().attr('title'));	});
jQuery(".nav").bind('mouseenter', function(event) {	jQuery('.overMenu').show();	});

function contains(a, b) {
	while (b.parentNode)
	if ((b = b.parentNode) == a)
	  return true;
	return false;
}

document.getElementById('overMenu').addEventListener("mouseout",
	function(event){
		event.stopPropagation();
		var current, related;

		if (window.event) {
			current = this;
			related = window.event.toElement;
		}else{
			current = event.currentTarget;
			related = event.relatedTarget;
		}

		if (current != related && !contains(current, related)) jQuery('.overMenu').hide();
},true);

var currentHash;
jQuery(window).bind( 'hashchange', function(){
	if (location.hash != currentHash) {
		hash = location.hash;
		hash = hash.replace( /#/, '' );
		hash = hash.split('_');
		gotoNum(hash[0]);
	}
});

var pages = new Test();
var mainSite = false;
var TooFast = false;
pages.setStart(data['pageCurrent']);
pages.setFirst(data['pageCurrent']);
pages.lastGalleryPage = data['pageTotal'];

pages.add({
	'imgSrc'		: data['imgSrc'],
	'linkNext'		: data['linkNext'],
	'linkPrev'		: data['linkPrev'],
	'pageNum'		: data['pageCurrent'],
	'thisLink'		: location.href,
	'allGallery'	: data['allGallery'],
	'staticLink'	: data['staticLink'],
	'original'		: data['original']
});


if (data['linkNext'].indexOf('exhentai.org') != -1){
	url = data['linkNext'].replace("exhentai.org","g.e-hentai.org");
	GM_xmlhttpRequest({
		method: "GET",
		url: url,
		onload: function(response) {
			if (response.responseText.indexOf('This gallery is pining for the fjords.') != -1){
			}else{		
				mainSite = true;
			}
		}
	});
}


function CreateMiniature(data) {
		xscale = data['imgw'] / 178;
		yscale = data['imgh'] / 138;

		if (yscale > xscale){
			w = parseInt(data['imgw'] * (1/yscale));
			h = parseInt(data['imgh'] * (1/yscale));
		}else{
			w = parseInt(data['imgw'] * (1/xscale));
			h = parseInt(data['imgh'] * (1/xscale));
		}

		img = jQuery('<img />', 
		{
			src : data['src'],
			page : data['page'],
			click : function(event) {gotoNum(jQuery(this).attr("page"));},
			css : {
				"height"	: h,
				"width"		: w,
				"opacity"	: '0.5',
				"cursor"	: 'pointer'
			}
		});
		
		jQuery("<div id='imgcont_" +  data['page'] + "' class='preview' style=''></div>")
		.append(img)
		.append('<span style="" class="test">' + data['page'] +'</span>')
		.appendTo("#collector");
		return img;
}

CreateMiniature({src : data['imgSrc'], page : data['pageCurrent'], imgh : data['imgHeight'], imgw : data['imgWidth']});
jQuery("#immagine").bind('click', function(event) {
	LoadNext();
})

function cacheNext(){
	
	if ( (pages.lastCached < (pages.getCurrent() + PreCachePages)) && (pages.lastCached < pages.lastGalleryPage)  ){
		data = pages.getLastCached();
		url =  data['linkNext'];	
		
		if ((url.indexOf('exhentai.org') != -1) && (mainSite == true)){
			url = url.replace("exhentai.org","g.e-hentai.org");
		} 
		
		if (TooFast == false){
			
			GM_xmlhttpRequest({	method: "GET",url: url,	onload: function(response) {var myhtml = response.responseText;
				
					if (myhtml != "" && (myhtml.indexOf('You are opening pages too fast') == -1) ){
					
						myhtml = myhtml.match(/<body>\n(.*)\n<\/body>/ig);
						myhtml = myhtml[0].replace("<body>","");
						myhtml = myhtml.replace("<\/body>","");
						
						jQuery("#datacont").html(myhtml);
						var nextData = GetVariablePageData(true);
						
						pages.add({
							'imgSrc'		: nextData['imgSrc'],
							'linkNext'		: nextData['linkNext'],
							'linkPrev'		: nextData['linkPrev'],
							'pageNum'		: nextData['pageCurrent'],
							'imgHeight'		: nextData['imgHeight'],
							'imgWidth'		: nextData['imgWidth'],
							'thisLink'		: url,
							'allGallery'	: nextData['allGallery'],
							'staticLink'	: nextData['staticLink'],
							'original'		: nextData['original']
						});
						

						jQuery("#datacont").html("");
						img = CreateMiniature({src : nextData['imgSrc'], page : nextData['pageCurrent'], imgh : nextData['imgHeight'], imgw : nextData['imgWidth']});		
						
						//window.setTimeout(function (){							checkImgLoad(img);						}, 13000);
												
						if (pages.lastCached < (pages.getCurrent() + PreCachePages)){
							cacheNext();
						}						
					}else{
						TooFast = true;
						jQuery('#warning').show();
						setTimeout(function (){
							TooFast = false;
							jQuery('#warning').hide();
						}, 10000);
					}
				}
			});
		}
	}
}

function loadBroken(pageN){
	url = pages.getLinkN(pageN) + "?nl=1";
	GM_xmlhttpRequest({
	method: "GET",
	url: url,
		onload: function(response) {
			var myhtml = response.responseText;
			myhtml = myhtml.match(/<body>\n(.*)\n<\/body>/ig);
			myhtml = myhtml[0].replace("<body>","");
			myhtml = myhtml.replace("<\/body>","");
			
			jQuery("#datacont").html(myhtml);
			nextData = GetVariablePageData(true);
			pages.edit(pageN,nextData['imgSrc']);
			jQuery("#datacont").html("");
			img = jQuery("<img src='"+ nextData['imgSrc']+ "' page='"+ nextData['pageCurrent'] +"' style='height: 138px;opacity: 0.5;'/>")
			.bind('click', function(event) {
				gotoNum(jQuery(this).attr("page"));
			})
			jQuery('#immagine').remove();
			container = jQuery('#imgcont_' + pages.getCurrent());
			container.children('img').remove();
			container.append(img);
			container
			.children('img')
			.clone()
			.css('height','')
			.css('opacity','')
			.attr('id','immagine')
			.bind('click', function(event) {LoadNext(data['linkNext']);})
			.appendTo('#immagineCont');
			container.children('img').attr("src", nextData['imgSrc']);
			if (pages.getCurrent() == pageN){
				jQuery('#immagine').attr("src", nextData['imgSrc']);
			}
		}
	});
}
function checkImgLoad(obj){
	if (jQuery(obj).attr("naturalHeight") == 0) {
		jQuery(obj).parent().css("border-color","red");
	}
}
jQuery('#collector').bind('mousewheel', function(event, delta) {
		if (delta > 0){
			loadPrev();
		}else{
			LoadNext();
		}
		return false;
	});
function LoadNext() {
	if (pages.lastGalleryPage > pages.getCurrent()) {
		gotoNum(pages.getCurrent() + 1);
	}
}
function loadPrev(){
	if (pages.getCurrent() > pages.firstGalleryPage) {
		gotoNum(pages.getCurrent() - 1);
		jQuery(document).scrollTop(window.scrollMaxY);
	}
}
function gotoNum(num){
	jQuery('#imgcont_' + pages.getCurrent()).children('img').css('opacity', '0.5');
	data = pages.getNum(num);
	if (pages.lastGalleryPage > pages.getCurrent()) {
		cacheNext();
	}
	imgPos = jQuery('#imgcont_' + pages.getCurrent()).attr('offsetTop');
	mypos = imgPos - 140;
	jQuery("#collector").animate({"bottom":  mypos}, "slow");
	
	jQuery('#current').html(pages.getCurrent());
	jQuery('#prev').attr('href', data['linkPrev']);
	jQuery('#next').attr('href', data['linkNext']);
	jQuery('#search').attr('href', data['allGallery']);
	jQuery('#staticLink').attr('href', data['staticLink']);
	
	if (data['original'] != false){
		jQuery('#originalImmageWrap').show();
		jQuery('#originalImmage').attr('href', data['original']['link']).text(data['original']['text']);
	}else{
		jQuery('#originalImmageWrap').hide();
	}
	
	jQuery('#imgcont_' + pages.getCurrent()).children().css('opacity', '1');
	
	jQuery('#immagine').remove();

	jQuery('#imgcont_' + pages.getCurrent())
		.children('img')
		.clone()
		.css({height:'',width:'', cursor:''})
		.attr('id','immagine')
		.bind('click', function(event) {LoadNext();})
		.appendTo('#immagineCont');
	
	currentHash = '#' + pages.getCurrent() + "_" + pages.getLink();
	location.hash = currentHash;
	jQuery('#rotta').attr('href',  pages.getLink() + '?nl=1');
	
	jQuery(document).scrollTop(0);

}

jQuery(document).keydown(function(e) {
	switch(e.which){
	case 39:
		LoadNext();
		return false;
	break;		
	case 37:
		loadPrev();
		return false;
	break;
	case 17:
		loadBroken(pages.getCurrent());
	break;
	case 13:
		jQuery('#immagineCont').toggle();
		jQuery('#collector').parent().toggle();
	break;
	case 16:
		imgObj = jQuery('#immagine');
		width = jQuery('#immagineCont').attr('clientWidth');
		
		img_w = imgObj.attr("naturalWidth");
		img_h = imgObj.attr("naturalHeight");
		
		if (img_h != imgObj.height() || img_w != imgObj.width() ){
			new_h = imgObj.attr("naturalHeight");
			new_w = imgObj.attr("naturalWidth");
		}else{
			new_h = (window.innerHeight - 10);
			new_w = width;
			
			if (img_w > img_h){
				new_h = new_w / img_w * img_h;
				if (new_h > (window.innerHeight - 10)){
					new_h = (window.innerHeight - 10);
					new_w = new_h / img_h * img_w;
				}
			}else{
				new_w = new_h / img_h * img_w;
				if (new_w > width){
					new_w = width;
					new_h = new_w / img_w * img_h;
				}	
			}
		}
		
		imgObj.css({width: new_w, height : new_h});
	break;
	}
});
}
}