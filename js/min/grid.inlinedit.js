(function(c){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){var h=c.jgrid,E=h.fullBoolFeedback,B=h.hasOneFromClasses,G=function(c){return h.getRes(h.guiStyles[this.p.guiStyle],"states."+c)},H=function(d){var p=c.makeArray(arguments).slice(1);p.unshift("");p.unshift("Inline");p.unshift(d);return h.feedback.apply(this,p)};h.inlineEdit=h.inlineEdit||{};h.extend({editRow:function(d,
p,l,f,b,k,r,u,g,a){var e={},m=c.makeArray(arguments).slice(1);"object"===c.type(m[0])?e=m[0]:(void 0!==p&&(e.keys=p),c.isFunction(l)&&(e.oneditfunc=l),c.isFunction(f)&&(e.successfunc=f),void 0!==b&&(e.url=b),null!=k&&(e.extraparam=k),c.isFunction(r)&&(e.aftersavefunc=r),c.isFunction(u)&&(e.errorfunc=u),c.isFunction(g)&&(e.afterrestorefunc=g),c.isFunction(a)&&(e.beforeEditRow=a));return this.each(function(){var a=this,b=c(a),q=a.p,f=0,k=null,p={},l=q.colModel,g=q.prmNames;if(a.grid){var m=c.extend(!0,
{keys:!1,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,beforeEditRow:null,mtype:"POST",focusField:!0},h.inlineEdit,q.inlineEditing||{},e),t=b.jqGrid("getInd",d,!0),r=m.focusField,u="object"===typeof r&&null!=r?c(r.target||r).closest("tr.jqgrow>td")[0]:null;if(!1!==t&&(m.extraparam[g.oper]===g.addoper||H.call(a,m,"beforeEditRow",m,d))&&"0"===(c(t).attr("editable")||"0")&&!c(t).hasClass("not-editable-row")){g=h.detectRowEditing.call(a,
d);if(null!=g&&"cellEditing"===g.mode){var g=g.savedRow,C=a.rows[g.id],A=G.call(a,"select");b.jqGrid("restoreCell",g.id,g.ic);c(C.cells[g.ic]).removeClass("edit-cell "+A);c(C).addClass(A).attr({"aria-selected":"true",tabindex:"0"})}h.enumEditableCells.call(a,t,c(t).hasClass("jqgrid-new-row")?"add":"edit",function(b){var e=b.cm,g=c(b.dataElement),l=b.dataWidth,w,m=e.name,r=e.edittype,u=b.iCol,t=e.editoptions||{};if("hidden"!==b.editable){try{w=c.unformat.call(this,b.td,{rowId:d,colModel:e},u)}catch(v){w=
"textarea"===r?g.text():g.html()}p[m]=w;g.html("");e=c.extend({},t,{id:d+"_"+m,name:m,rowId:d,mode:b.mode});if("&nbsp;"===w||"&#160;"===w||1===w.length&&160===w.charCodeAt(0))w="";w=h.createEl.call(a,r,e,w,!0,c.extend({},h.ajaxOptions,q.ajaxSelectOptions||{}));c(w).addClass("editable");g.append(w);l&&c(w).width(b.dataWidth);h.bindEv.call(a,w,e);"select"===r&&!0===t.multiple&&void 0===t.dataUrl&&h.msie&&c(w).width(c(w).width());null===k&&(k=u);f++}});0<f&&(p.id=d,q.savedRow.push(p),c(t).attr("editable",
"1"),r&&("number"===typeof r&&parseInt(r,10)<=l.length?k=r:"string"===typeof r?k=q.iColByName[r]:null!=u&&(k=u.cellIndex),setTimeout(function(){var d=b.jqGrid("getNumberOfFrozenColumns"),e=function(c){return q.frozenColumns&&0<d&&k<d?a.grid.fbRows[t.rowIndex].cells[c]:t.cells[c]},g=function(a){return c(a).find("input,textarea,select,button,object,*[tabindex]").filter(":input:visible:not(:disabled)")},f=function(){return g(q.frozenColumns&&0<d?a.grid.fbRows[t.rowIndex]:t).first()},h=g(e(k));0<h.length?
h.focus():"number"===typeof m.defaultFocusField||"string"===typeof m.defaultFocusField?(h=g(e("number"===typeof m.defaultFocusField?m.defaultFocusField:q.iColByName[m.defaultFocusField])),0===h.length&&(h=f()),h.focus()):f().focus()},0)),!0===m.keys&&(l=c(t),q.frozenColumns&&(l=l.add(a.grid.fbRows[t.rowIndex])),l.bind("keydown",function(a){if(27===a.keyCode)return b.jqGrid("restoreRow",d,m.afterrestorefunc),!1;if(13===a.keyCode){if("TEXTAREA"===a.target.tagName)return!0;b.jqGrid("saveRow",d,m);return!1}})),
E.call(a,m.oneditfunc,"jqGridInlineEditRow",d,m))}}})},saveRow:function(d,p,l,f,b,k,r,u){var g=c.makeArray(arguments).slice(1),a={},e=this[0],m=c(e),n=null!=e?e.p:null,I=h.info_dialog;if(e.grid&&null!=n){"object"===c.type(g[0])?a=g[0]:(c.isFunction(p)&&(a.successfunc=p),void 0!==l&&(a.url=l),void 0!==f&&(a.extraparam=f),c.isFunction(b)&&(a.aftersavefunc=b),c.isFunction(k)&&(a.errorfunc=k),c.isFunction(r)&&(a.afterrestorefunc=r),c.isFunction(u)&&(a.beforeSaveRow=u));var g=function(a){return m.jqGrid("getGridRes",
a)},a=c.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,beforeSaveRow:null,ajaxSaveOptions:{},serializeSaveData:null,mtype:"POST",saveui:"enable",savetext:g("defaults.savetext")||"Saving..."},h.inlineEdit,n.inlineEditing||{},a),q={},J={},y={},z,D,v,F;v=m.jqGrid("getInd",d,!0);var t=c(v);z=n.prmNames;var B=g("errors.errcap"),K=g("edit.bClose"),C;if(!1!==v&&(g=a.extraparam[z.oper]===z.addoper?"add":"edit",H.call(e,a,"beforeSaveRow",
a,d,g)&&(z=t.attr("editable"),a.url=a.url||n.editurl,C="clientArray"!==a.url,"1"===z)))if(h.enumEditableCells.call(e,v,t.hasClass("jqgrid-new-row")?"add":"edit",function(a){var b=a.cm,d,n=b.formatter,g=b.editoptions||{},f=b.formatoptions||{};if(C||"hidden"!==a.editable){d=h.getEditedValue.call(e,c(a.dataElement),b,!n,a.editable);F=h.checkValues.call(e,d,a.iCol);if(!1===F[0])return!1;"date"===n&&!0!==f.sendFormatted&&(d=c.unformat.date.call(e,d,b));C&&!0===g.NullIfEmpty&&""===d&&(d="null");q[b.name]=
d}}),!1===F[0])try{var A=m.jqGrid("getGridRowById",d),x=h.findPos(A);I.call(e,B,F[1],K,{left:x[0],top:x[1]+c(A).outerHeight()})}catch(L){alert(F[1])}else if(A=d,z=n.prmNames,x=!1===n.keyName?z.id:n.keyName,q&&(q[z.oper]=z.editoper,void 0===q[x]||""===q[x]?q[x]=d:v.id!==n.idPrefix+q[x]&&(v=h.stripPref(n.idPrefix,d),void 0!==n._index[v]&&(n._index[q[x]]=n._index[v],delete n._index[v]),d=n.idPrefix+q[x],t.attr("id",d),n.selrow===A&&(n.selrow=d),c.isArray(n.selarrrow)&&(v=c.inArray(A,n.selarrrow),0<=
v&&(n.selarrrow[v]=d)),n.multiselect&&(v="jqg_"+n.id+"_"+d,t.find("input.cbox").attr("id",v).attr("name",v))),q=c.extend({},q,n.inlineData||{},a.extraparam)),C)m.jqGrid("progressBar",{method:"show",loadtype:a.saveui,htmlcontent:a.savetext}),y=c.extend({},q,y),y[x]=h.stripPref(n.idPrefix,y[x]),n.autoEncodeOnEdit&&c.each(y,function(a,b){c.isFunction(b)||(y[a]=h.oldEncodePostedData(b))}),c.ajax(c.extend({url:c.isFunction(a.url)?a.url.call(e,y[x],g,y,a):a.url,data:h.serializeFeedback.call(e,c.isFunction(a.serializeSaveData)?
a.serializeSaveData:n.serializeRowData,"jqGridInlineSerializeSaveData",y),type:c.isFunction(a.mtype)?a.mtype.call(e,g,a,y[x],y):a.mtype,complete:function(b,g){m.jqGrid("progressBar",{method:"hide",loadtype:a.saveui,htmlcontent:a.savetext});if((300>b.status||304===b.status)&&(0!==b.status||4!==b.readyState)){var f,k;k=m.triggerHandler("jqGridInlineSuccessSaveRow",[b,d,a]);c.isArray(k)||(k=[!0,q]);k[0]&&c.isFunction(a.successfunc)&&(k=a.successfunc.call(e,b));c.isArray(k)?(f=k[0],q=k[1]||q):f=k;if(!0===
f){n.autoEncodeOnEdit&&c.each(q,function(a,b){q[a]=h.oldDecodePostedData(b)});q=c.extend({},q,J);m.jqGrid("setRowData",d,q);t.attr("editable","0");for(f=0;f<n.savedRow.length;f++)if(String(n.savedRow[f].id)===String(d)){D=f;break}0<=D&&n.savedRow.splice(D,1);E.call(e,a.aftersavefunc,"jqGridInlineAfterSaveRow",d,b,q,a);t.removeClass("jqgrid-new-row").unbind("keydown")}else E.call(e,a.errorfunc,"jqGridInlineErrorSaveRow",d,b,g,null,a),!0===a.restoreAfterError&&m.jqGrid("restoreRow",d,a.afterrestorefunc)}},
error:function(b,f,g){c("#lui_"+h.jqID(n.id)).hide();m.triggerHandler("jqGridInlineErrorSaveRow",[d,b,f,g,a]);if(c.isFunction(a.errorfunc))a.errorfunc.call(e,d,b,f,g);else{b=b.responseText||b.statusText;try{I.call(e,B,'<div class="'+G.call(e,"error")+'">'+b+"</div>",K,{buttonalign:"right"})}catch(k){alert(b)}}!0===a.restoreAfterError&&m.jqGrid("restoreRow",d,a.afterrestorefunc)}},h.ajaxOptions,n.ajaxRowOptions,a.ajaxSaveOptions||{}));else{q=c.extend({},q,J);v=m.jqGrid("setRowData",d,q);t.attr("editable",
"0");for(g=0;g<n.savedRow.length;g++)if(String(n.savedRow[g].id)===String(A)){D=g;break}0<=D&&n.savedRow.splice(D,1);E.call(e,a.aftersavefunc,"jqGridInlineAfterSaveRow",d,v,q,a);t.removeClass("jqgrid-new-row").unbind("keydown")}}},restoreRow:function(d,p){var l=c.makeArray(arguments).slice(1),f={};"object"===c.type(l[0])?f=l[0]:c.isFunction(p)&&(f.afterrestorefunc=p);return this.each(function(){var b=this,k=c(b),l=b.p,p=-1,g={},a;if(b.grid){var e=c.extend(!0,{},h.inlineEdit,l.inlineEditing||{},f),
m=k.jqGrid("getInd",d,!0);if(!1!==m&&H.call(b,e,"beforeCancelRow",e,d)){for(a=0;a<l.savedRow.length;a++)if(String(l.savedRow[a].id)===String(d)){p=a;break}if(0<=p){if(c.isFunction(c.fn.datepicker))try{c("input.hasDatepicker","#"+h.jqID(m.id)).datepicker("hide")}catch(n){}c.each(l.colModel,function(){var a=this.name;l.savedRow[p].hasOwnProperty(a)&&(g[a]=l.savedRow[p][a],!this.formatter||"date"!==this.formatter||null!=this.formatoptions&&!0===this.formatoptions.sendFormatted||(g[a]=c.unformat.date.call(b,
g[a],this)))});k.jqGrid("setRowData",d,g);c(m).attr("editable","0").unbind("keydown");l.savedRow.splice(p,1);c("#"+h.jqID(d),b).hasClass("jqgrid-new-row")&&setTimeout(function(){k.jqGrid("delRowData",d);k.jqGrid("showAddEditButtons",!1)},0)}E.call(b,e.afterrestorefunc,"jqGridInlineAfterRestoreRow",d)}}})},addRow:function(d){return this.each(function(){if(this.grid){var p=this,l=c(p),f=p.p,b=c.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,beforeAddRow:null,addRowParams:{extraparam:{}}},
h.inlineEdit,f.inlineEditing||{},d||{});H.call(p,b,"beforeAddRow",b.addRowParams)&&(b.rowID=c.isFunction(b.rowID)?b.rowID.call(p,b):null!=b.rowID?b.rowID:h.randId(),!0===b.useDefValues&&c(f.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var d=this.editoptions.defaultValue;b.initdata[this.name]=c.isFunction(d)?d.call(p):d}}),b.rowID=f.idPrefix+b.rowID,l.jqGrid("addRowData",b.rowID,b.initdata,b.position),c("#"+h.jqID(b.rowID),p).addClass("jqgrid-new-row"),b.useFormatter?
c("#"+h.jqID(b.rowID)+" .ui-inline-edit",p).click():(f=f.prmNames,b.addRowParams.extraparam[f.oper]=f.addoper,l.jqGrid("editRow",b.rowID,b.addRowParams),l.jqGrid("setSelection",b.rowID)))}})},inlineNav:function(d,p){"object"===typeof d&&(p=d,d=void 0);return this.each(function(){var l=this,f=c(l),b=l.p;if(this.grid&&null!=b){var k,r=d===b.toppager?b.idSel+"_top":b.idSel,u=d===b.toppager?b.id+"_top":b.id,g=G.call(l,"disabled"),a=c.extend(!0,{edit:!0,editicon:"ui-icon-pencil",add:!0,addicon:"ui-icon-plus",
save:!0,saveicon:"ui-icon-disk",cancel:!0,cancelicon:"ui-icon-cancel",commonIconClass:"ui-icon",iconsOverText:!1,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},f.jqGrid("getGridRes","nav"),h.nav||{},b.navOptions||{},p||{});if(void 0===d)if(b.pager)if(f.jqGrid("inlineNav",b.pager,a),b.toppager)d=b.toppager,r=b.idSel+"_top",u=b.id+"_top";else return;else b.toppager&&(d=b.toppager,r=b.idSel+"_top",u=b.id+"_top");if(void 0!==d&&(k=c(d),!(0>=k.length))){0>=k.find(".navtable").length&&
f.jqGrid("navGrid",d,{add:!1,edit:!1,del:!1,search:!1,refresh:!1,view:!1});b._inlinenav=!0;if(!0===a.addParams.useFormatter){k=b.colModel;var e,m;for(e=0;e<k.length;e++)if(k[e].formatter&&"actions"===k[e].formatter){k[e].formatoptions&&(m={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},k=c.extend(m,k[e].formatoptions),a.addParams.addRowParams={keys:k.keys,oneditfunc:k.onEdit,successfunc:k.onSuccess,url:k.url,extraparam:k.extraparam,aftersavefunc:k.afterSave,
errorfunc:k.onError,afterrestorefunc:k.afterRestore});break}}a.add&&f.jqGrid("navButtonAdd",d,{caption:a.addtext,title:a.addtitle,commonIconClass:a.commonIconClass,buttonicon:a.addicon,iconsOverText:a.iconsOverText,id:u+"_iladd",onClickButton:function(){B(this,g)||f.jqGrid("addRow",a.addParams)}});a.edit&&f.jqGrid("navButtonAdd",d,{caption:a.edittext,title:a.edittitle,commonIconClass:a.commonIconClass,buttonicon:a.editicon,iconsOverText:a.iconsOverText,id:u+"_iledit",onClickButton:function(){if(!B(this,
g)){var c=b.selrow;c?f.jqGrid("editRow",c,a.editParams):l.modalAlert()}}});a.save&&(f.jqGrid("navButtonAdd",d,{caption:a.savetext||"",title:a.savetitle||"Save row",commonIconClass:a.commonIconClass,buttonicon:a.saveicon,iconsOverText:a.iconsOverText,id:u+"_ilsave",onClickButton:function(){if(!B(this,g)){var d=b.savedRow[0].id;if(d){var e=b.prmNames,k=e.oper,p=a.editParams;c("#"+h.jqID(d),l).hasClass("jqgrid-new-row")?(a.addParams.addRowParams.extraparam[k]=e.addoper,p=a.addParams.addRowParams):(a.editParams.extraparam||
(a.editParams.extraparam={}),a.editParams.extraparam[k]=e.editoper);f.jqGrid("saveRow",d,p)}else l.modalAlert()}}}),c(r+"_ilsave").addClass(g));a.cancel&&(f.jqGrid("navButtonAdd",d,{caption:a.canceltext||"",title:a.canceltitle||"Cancel row editing",commonIconClass:a.commonIconClass,buttonicon:a.cancelicon,iconsOverText:a.iconsOverText,id:u+"_ilcancel",onClickButton:function(){if(!B(this,g)){var d=b.savedRow[0].id,e=a.editParams;d?(c("#"+h.jqID(d),l).hasClass("jqgrid-new-row")&&(e=a.addParams.addRowParams),
f.jqGrid("restoreRow",d,e)):l.modalAlert()}}}),c(r+"_ilcancel").addClass(g));!0===a.restoreAfterSelect&&f.bind("jqGridSelectRow",function(c,d){if(0<b.savedRow.length&&!0===b._inlinenav){var e=b.savedRow[0].id;d!==e&&"number"!==typeof e&&f.jqGrid("restoreRow",e,a.editParams)}});f.bind("jqGridInlineAfterRestoreRow jqGridInlineAfterSaveRow",function(){f.jqGrid("showAddEditButtons",!1)});f.bind("jqGridInlineEditRow",function(a,b){f.jqGrid("showAddEditButtons",!0,b)})}}})},showAddEditButtons:function(d){return this.each(function(){if(this.grid){var h=
this.p,l=h.idSel,f=G.call(this,"disabled"),b=l+"_ilsave,"+l+"_ilcancel"+(h.toppager?","+l+"_top_ilsave,"+l+"_top_ilcancel":""),h=l+"_iladd,"+l+"_iledit"+(h.toppager?","+l+"_top_iladd,"+l+"_top_iledit":"");c(d?h:b).addClass(f);c(d?b:h).removeClass(f)}})}})});
/*
//# sourceMappingURL=grid.inlinedit.map
*/