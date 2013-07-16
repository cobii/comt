/*
YUI 3.10.3 (build 2fb5187)
Copyright 2013 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("attribute-observable",function(e,t){function s(){this._ATTR_E_FACADE={},n.call(this,{emitFacade:!0})}var n=e.EventTarget,r="Change",i="broadcast";s._ATTR_CFG=[i],s.prototype={set:function(e,t,n){return this._setAttr(e,t,n)},_set:function(e,t,n){return this._setAttr(e,t,n,!0)},setAttrs:function(e,t){return this._setAttrs(e,t)},_setAttrs:function(e,t){var n;for(n in e)e.hasOwnProperty(n)&&this.set(n,e[n],t);return this},_fireAttrChange:function(t,n,i,s,o,u){var a=this,f=this._getFullType(t+r),l=a._state,c=!1,h,p,d;u||(u=l.data[t]||{}),u.published||(d=a._publish(f),d.emitFacade=!0,d.defaultTargetOnly=!0,d.defaultFn=a._defAttrChangeFn,p=u.broadcast,p!==undefined&&(d.broadcast=p),u.published=!0),o?(h=e.merge(o),c=!0):h=a._ATTR_E_FACADE,h.attrName=t,h.subAttrName=n,h.prevVal=i,h.newVal=s,c?a.fire(f,h,o):a.fire(f,h)},_defAttrChangeFn:function(e){this._setAttrVal(e.attrName,e.subAttrName,e.prevVal,e.newVal,e.details[1])?e.newVal=this.get(e.attrName):e.stopImmediatePropagation()}},e.mix(s,n,!1,null,1),e.AttributeObservable=s,e.AttributeEvents=s},"3.10.3",{requires:["event-custom"]});
