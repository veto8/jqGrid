(function(c){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){var l=c.jgrid,D=l.fullBoolFeedback,A=l.hasOneFromClasses,F=function(c){return l.getRes(l.guiStyles[this.p.guiStyle],"states."+c)},G=function(d){var m=c.makeArray(arguments).slice(1);m.unshift("");m.unshift("Inline");m.unshift(d);return l.feedback.apply(this,m)};l.inlineEdit=l.inlineEdit||{};l.extend({editRow:function(d,
m,e,g,b,p,r,t,k,a){var f={},h=c.makeArray(arguments).slice(1);"object"===c.type(h[0])?f=h[0]:(void 0!==m&&(f.keys=m),c.isFunction(e)&&(f.oneditfunc=e),c.isFunction(g)&&(f.successfunc=g),void 0!==b&&(f.url=b),null!=p&&(f.extraparam=p),c.isFunction(r)&&(f.aftersavefunc=r),c.isFunction(t)&&(f.errorfunc=t),c.isFunction(k)&&(f.afterrestorefunc=k),c.isFunction(a)&&(f.beforeEditRow=a));return this.each(function(){var a=this,b=c(a),q=a.p,g=0,p=null,m={},e=q.colModel,k=q.prmNames;if(a.grid){var h=c.extend(!0,
{keys:!1,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,beforeEditRow:null,mtype:"POST",focusField:!0},l.inlineEdit,q.inlineEditing||{},f),u=b.jqGrid("getInd",d,!0),r=h.focusField,t="object"===typeof r&&null!=r?c(r.target||r).closest("tr.jqgrow>td")[0]:null;if(!1!==u&&(h.extraparam[k.oper]===k.addoper||G.call(a,h,"beforeEditRow",h,d))&&"0"===(c(u).attr("editable")||"0")&&!c(u).hasClass("not-editable-row")){k=l.detectRowEditing.call(a,
d);if(null!=k&&"cellEditing"===k.mode){var k=k.savedRow,C=a.rows[k.id],z=F.call(a,"select");b.jqGrid("restoreCell",k.id,k.ic);c(C.cells[k.ic]).removeClass("edit-cell "+z);c(C).addClass(z).attr({"aria-selected":"true",tabindex:"0"})}l.enumEditableCells.call(a,u,c(u).hasClass("jqgrid-new-row")?"add":"edit",function(b){var f=b.cm,k=c(b.dataElement),e=b.dataWidth,h,r=f.name,t=f.edittype,u=b.iCol,v=f.editoptions||{};if("hidden"!==b.editable){try{h=c.unformat.call(this,b.td,{rowId:d,colModel:f},u)}catch(H){h=
"textarea"===t?k.text():k.html()}m[r]=h;k.html("");f=c.extend({},v,{id:d+"_"+r,name:r,rowId:d,mode:b.mode});if("&nbsp;"===h||"&#160;"===h||1===h.length&&160===h.charCodeAt(0))h="";h=l.createEl.call(a,t,f,h,!0,c.extend({},l.ajaxOptions,q.ajaxSelectOptions||{}));c(h).addClass("editable");k.append(h);e&&c(h).width(b.dataWidth);l.bindEv.call(a,h,f);"select"===t&&!0===v.multiple&&void 0===v.dataUrl&&l.msie&&c(h).width(c(h).width());null===p&&(p=u);g++}});0<g&&(m.id=d,q.savedRow.push(m),c(u).attr("editable",
"1"),r&&("number"===typeof r&&parseInt(r,10)<=e.length?p=r:"string"===typeof r?p=q.iColByName[r]:null!=t&&(p=t.cellIndex),setTimeout(function(){var d=b.jqGrid("getNumberOfFrozenColumns"),f=function(c){return q.frozenColumns&&0<d&&p<d?a.grid.fbRows[u.rowIndex].cells[c]:u.cells[c]},k=function(a){return c(a).find("input,textarea,select,button,object,*[tabindex]").filter(":input:visible:not(:disabled)")},g=function(){return k(q.frozenColumns&&0<d?a.grid.fbRows[u.rowIndex]:u).first()},l=k(f(p));0<l.length?
l.first().focus():"number"===typeof h.defaultFocusField||"string"===typeof h.defaultFocusField?(l=k(f("number"===typeof h.defaultFocusField?h.defaultFocusField:q.iColByName[h.defaultFocusField])),0===l.length&&(l=g()),l.first().focus()):g().focus()},0)),!0===h.keys&&(e=c(u),q.frozenColumns&&(e=e.add(a.grid.fbRows[u.rowIndex])),e.bind("keydown",function(a){if(27===a.keyCode)return b.jqGrid("restoreRow",d,h.afterrestorefunc),!1;if(13===a.keyCode){if("TEXTAREA"===a.target.tagName)return!0;b.jqGrid("saveRow",
d,h);return!1}})),D.call(a,h.oneditfunc,"jqGridInlineEditRow",d,h))}}})},saveRow:function(d,m,e,g,b,p,r,t){var k=c.makeArray(arguments).slice(1),a={},f=this[0],h=c(f),n=null!=f?f.p:null,H=l.info_dialog;if(f.grid&&null!=n){"object"===c.type(k[0])?a=k[0]:(c.isFunction(m)&&(a.successfunc=m),void 0!==e&&(a.url=e),void 0!==g&&(a.extraparam=g),c.isFunction(b)&&(a.aftersavefunc=b),c.isFunction(p)&&(a.errorfunc=p),c.isFunction(r)&&(a.afterrestorefunc=r),c.isFunction(t)&&(a.beforeSaveRow=t));var k=function(a){return h.jqGrid("getGridRes",
a)},a=c.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,beforeSaveRow:null,ajaxSaveOptions:{},serializeSaveData:null,mtype:"POST",saveui:"enable",savetext:k("defaults.savetext")||"Saving..."},l.inlineEdit,n.inlineEditing||{},a),q={},I={},x={},y,B,v,E;v=h.jqGrid("getInd",d,!0);var u=c(v);y=n.prmNames;var A=k("errors.errcap"),J=k("edit.bClose"),C;if(!1!==v&&(k=a.extraparam[y.oper]===y.addoper?"add":"edit",G.call(f,a,"beforeSaveRow",
a,d,k)&&(y=u.attr("editable"),a.url=a.url||n.editurl,C="clientArray"!==a.url,"1"===y)))if(l.enumEditableCells.call(f,v,u.hasClass("jqgrid-new-row")?"add":"edit",function(a){var b=a.cm,n=b.formatter,h=b.editoptions||{},k=b.formatoptions||{},g={},p=(c.jgrid.detectRowEditing.call(f,d)||{}).savedRow,e=l.getEditedValue.call(f,c(a.dataElement),b,g,a.editable);"select"===b.edittype&&"select"!==b.formatter&&(I[b.name]=g.text);E=l.checkValues.call(f,e,a.iCol,b.editrules,void 0,c.extend(a,{oldValue:null!=p?
p[b.name]:null,newValue:e,oldRowData:p}));if(!1===E[0])return!1;"date"===n&&!0!==k.sendFormatted&&(e=c.unformat.date.call(f,e,b));C&&!0===h.NullIfEmpty&&""===e&&(e="null");q[b.name]=e}),!1===E[0])try{var z=h.jqGrid("getGridRowById",d),w=l.findPos(z);H.call(f,A,E[1],J,{left:w[0],top:w[1]+c(z).outerHeight()})}catch(K){alert(E[1])}else if(z=d,y=n.prmNames,w=!1===n.keyName?y.id:n.keyName,q&&(q[y.oper]=y.editoper,void 0===q[w]||""===q[w]?q[w]=d:v.id!==n.idPrefix+q[w]&&(v=l.stripPref(n.idPrefix,d),void 0!==
n._index[v]&&(n._index[q[w]]=n._index[v],delete n._index[v]),d=n.idPrefix+q[w],u.attr("id",d),n.selrow===z&&(n.selrow=d),c.isArray(n.selarrrow)&&(v=c.inArray(z,n.selarrrow),0<=v&&(n.selarrrow[v]=d)),n.multiselect&&(v="jqg_"+n.id+"_"+d,u.find("input.cbox").attr("id",v).attr("name",v))),q=c.extend({},q,n.inlineData||{},a.extraparam)),C)h.jqGrid("progressBar",{method:"show",loadtype:a.saveui,htmlcontent:a.savetext}),x=c.extend({},q,x),x[w]=l.stripPref(n.idPrefix,x[w]),n.autoEncodeOnEdit&&c.each(x,function(a,
b){c.isFunction(b)||(x[a]=l.oldEncodePostedData(b))}),c.ajax(c.extend({url:c.isFunction(a.url)?a.url.call(f,x[w],k,x,a):a.url,data:l.serializeFeedback.call(f,c.isFunction(a.serializeSaveData)?a.serializeSaveData:n.serializeRowData,"jqGridInlineSerializeSaveData",x),type:c.isFunction(a.mtype)?a.mtype.call(f,k,a,x[w],x):a.mtype,complete:function(b,k){h.jqGrid("progressBar",{method:"hide",loadtype:a.saveui,htmlcontent:a.savetext});if((300>b.status||304===b.status)&&(0!==b.status||4!==b.readyState)){var g,
e;e=h.triggerHandler("jqGridInlineSuccessSaveRow",[b,d,a]);c.isArray(e)||(e=[!0,q]);e[0]&&c.isFunction(a.successfunc)&&(e=a.successfunc.call(f,b));c.isArray(e)?(g=e[0],q=e[1]||q):g=e;if(!0===g){n.autoEncodeOnEdit&&c.each(q,function(a,b){q[a]=l.oldDecodePostedData(b)});q=c.extend({},q,I);h.jqGrid("setRowData",d,q);u.attr("editable","0");for(g=0;g<n.savedRow.length;g++)if(String(n.savedRow[g].id)===String(d)){B=g;break}0<=B&&n.savedRow.splice(B,1);D.call(f,a.aftersavefunc,"jqGridInlineAfterSaveRow",
d,b,q,a);u.removeClass("jqgrid-new-row").unbind("keydown")}else D.call(f,a.errorfunc,"jqGridInlineErrorSaveRow",d,b,k,null,a),!0===a.restoreAfterError&&h.jqGrid("restoreRow",d,a.afterrestorefunc)}},error:function(b,e,g){c("#lui_"+l.jqID(n.id)).hide();h.triggerHandler("jqGridInlineErrorSaveRow",[d,b,e,g,a]);if(c.isFunction(a.errorfunc))a.errorfunc.call(f,d,b,e,g);else{b=b.responseText||b.statusText;try{H.call(f,A,'<div class="'+F.call(f,"error")+'">'+b+"</div>",J,{buttonalign:"right"})}catch(k){alert(b)}}!0===
a.restoreAfterError&&h.jqGrid("restoreRow",d,a.afterrestorefunc)}},l.ajaxOptions,n.ajaxRowOptions,a.ajaxSaveOptions||{}));else{q=c.extend({},q,I);v=h.jqGrid("setRowData",d,q);u.attr("editable","0");for(k=0;k<n.savedRow.length;k++)if(String(n.savedRow[k].id)===String(z)){B=k;break}0<=B&&n.savedRow.splice(B,1);D.call(f,a.aftersavefunc,"jqGridInlineAfterSaveRow",d,v,q,a);u.removeClass("jqgrid-new-row").unbind("keydown")}}},restoreRow:function(d,m){var e=c.makeArray(arguments).slice(1),g={};"object"===
c.type(e[0])?g=e[0]:c.isFunction(m)&&(g.afterrestorefunc=m);return this.each(function(){var b=this,e=c(b),m=b.p,t=-1,k={},a;if(b.grid){var f=c.extend(!0,{},l.inlineEdit,m.inlineEditing||{},g),h=e.jqGrid("getInd",d,!0);if(!1!==h&&G.call(b,f,"beforeCancelRow",f,d)){for(a=0;a<m.savedRow.length;a++)if(String(m.savedRow[a].id)===String(d)){t=a;break}if(0<=t){if(c.isFunction(c.fn.datepicker))try{c("input.hasDatepicker","#"+l.jqID(h.id)).datepicker("hide")}catch(n){}c.each(m.colModel,function(){var a=this.name;
m.savedRow[t].hasOwnProperty(a)&&(k[a]=m.savedRow[t][a],!this.formatter||"date"!==this.formatter||null!=this.formatoptions&&!0===this.formatoptions.sendFormatted||(k[a]=c.unformat.date.call(b,k[a],this)))});e.jqGrid("setRowData",d,k);c(h).attr("editable","0").unbind("keydown");m.savedRow.splice(t,1);c("#"+l.jqID(d),b).hasClass("jqgrid-new-row")&&setTimeout(function(){e.jqGrid("delRowData",d);e.jqGrid("showAddEditButtons",!1)},0)}D.call(b,f.afterrestorefunc,"jqGridInlineAfterRestoreRow",d)}}})},addRow:function(d){return this.each(function(){if(this.grid){var m=
this,e=c(m),g=m.p,b=c.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,beforeAddRow:null,addRowParams:{extraparam:{}}},l.inlineEdit,g.inlineEditing||{},d||{});G.call(m,b,"beforeAddRow",b.addRowParams)&&(b.rowID=c.isFunction(b.rowID)?b.rowID.call(m,b):null!=b.rowID?b.rowID:l.randId(),!0===b.useDefValues&&c(g.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var d=this.editoptions.defaultValue;b.initdata[this.name]=c.isFunction(d)?d.call(m):
d}}),b.rowID=g.idPrefix+b.rowID,e.jqGrid("addRowData",b.rowID,b.initdata,b.position),c("#"+l.jqID(b.rowID),m).addClass("jqgrid-new-row"),b.useFormatter?c("#"+l.jqID(b.rowID)+" .ui-inline-edit",m).click():(g=g.prmNames,b.addRowParams.extraparam[g.oper]=g.addoper,e.jqGrid("editRow",b.rowID,b.addRowParams),e.jqGrid("setSelection",b.rowID)))}})},inlineNav:function(d,m){"object"===typeof d&&(m=d,d=void 0);return this.each(function(){var e=this,g=c(e),b=e.p;if(this.grid&&null!=b){var p,r=d===b.toppager?
b.idSel+"_top":b.idSel,t=d===b.toppager?b.id+"_top":b.id,k=F.call(e,"disabled"),a=c.extend(!0,{edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",save:!0,saveicon:"ui-icon-disk",cancel:!0,cancelicon:"ui-icon-cancel",commonIconClass:"ui-icon",iconsOverText:!1,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},g.jqGrid("getGridRes","nav"),l.nav||{},b.navOptions||{},l.inlineNav||{},b.inlineNavOptions||{},m||{});if(void 0===d)if(b.pager)if(g.jqGrid("inlineNav",
b.pager,a),b.toppager)d=b.toppager,r=b.idSel+"_top",t=b.id+"_top";else return;else b.toppager&&(d=b.toppager,r=b.idSel+"_top",t=b.id+"_top");if(void 0!==d&&(p=c(d),!(0>=p.length))){0>=p.find(".navtable").length&&g.jqGrid("navGrid",d,{add:!1,edit:!1,del:!1,search:!1,refresh:!1,view:!1});b._inlinenav=!0;if(!0===a.addParams.useFormatter){p=b.colModel;var f,h;for(f=0;f<p.length;f++)if(p[f].formatter&&"actions"===p[f].formatter){p[f].formatoptions&&(h={keys:!1,onEdit:null,onSuccess:null,afterSave:null,
onError:null,afterRestore:null,extraparam:{},url:null},p=c.extend(h,p[f].formatoptions),a.addParams.addRowParams={keys:p.keys,oneditfunc:p.onEdit,successfunc:p.onSuccess,url:p.url,extraparam:p.extraparam,aftersavefunc:p.afterSave,errorfunc:p.onError,afterrestorefunc:p.afterRestore});break}}a.add&&g.jqGrid("navButtonAdd",d,{caption:a.addtext,title:a.addtitle,commonIconClass:a.commonIconClass,buttonicon:a.addicon,iconsOverText:a.iconsOverText,id:t+"_iladd",onClickButton:function(){A(this,k)||g.jqGrid("addRow",
a.addParams)}});a.edit&&g.jqGrid("navButtonAdd",d,{caption:a.edittext,title:a.edittitle,commonIconClass:a.commonIconClass,buttonicon:a.editicon,iconsOverText:a.iconsOverText,id:t+"_iledit",onClickButton:function(){if(!A(this,k)){var c=b.selrow;c?g.jqGrid("editRow",c,a.editParams):e.modalAlert()}}});a.save&&(g.jqGrid("navButtonAdd",d,{caption:a.savetext,title:a.savetitle,commonIconClass:a.commonIconClass,buttonicon:a.saveicon,iconsOverText:a.iconsOverText,id:t+"_ilsave",onClickButton:function(){if(!A(this,
k)){var d=b.savedRow[0].id;if(d){var f=b.prmNames,h=f.oper,m=a.editParams;c("#"+l.jqID(d),e).hasClass("jqgrid-new-row")?(a.addParams.addRowParams.extraparam[h]=f.addoper,m=a.addParams.addRowParams):(a.editParams.extraparam||(a.editParams.extraparam={}),a.editParams.extraparam[h]=f.editoper);g.jqGrid("saveRow",d,m)}else e.modalAlert()}}}),c(r+"_ilsave").addClass(k));a.cancel&&(g.jqGrid("navButtonAdd",d,{caption:a.canceltext,title:a.canceltitle,commonIconClass:a.commonIconClass,buttonicon:a.cancelicon,
iconsOverText:a.iconsOverText,id:t+"_ilcancel",onClickButton:function(){if(!A(this,k)){var d=b.savedRow[0].id,f=a.editParams;d?(c("#"+l.jqID(d),e).hasClass("jqgrid-new-row")&&(f=a.addParams.addRowParams),g.jqGrid("restoreRow",d,f)):e.modalAlert()}}}),c(r+"_ilcancel").addClass(k));!0===a.restoreAfterSelect&&g.bind("jqGridSelectRow",function(c,d){if(0<b.savedRow.length&&!0===b._inlinenav){var e=b.savedRow[0].id;d!==e&&"number"!==typeof e&&g.jqGrid("restoreRow",e,a.editParams)}});g.bind("jqGridInlineAfterRestoreRow jqGridInlineAfterSaveRow",
function(){g.jqGrid("showAddEditButtons",!1)});g.bind("jqGridInlineEditRow",function(a,b){g.jqGrid("showAddEditButtons",!0,b)})}}})},showAddEditButtons:function(d){return this.each(function(){if(this.grid){var l=this.p,e=l.idSel,g=F.call(this,"disabled"),b=e+"_ilsave,"+e+"_ilcancel"+(l.toppager?","+e+"_top_ilsave,"+e+"_top_ilcancel":""),l=e+"_iladd,"+e+"_iledit"+(l.toppager?","+e+"_top_iladd,"+e+"_top_iledit":"");c(d?l:b).addClass(g);c(d?b:l).removeClass(g)}})}})});
//# sourceMappingURL=grid.inlinedit.map
