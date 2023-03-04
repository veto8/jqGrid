!function(t,r){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],function(e){return r(e,t)}):"object"==typeof module&&module.exports?module.exports=function(e,t){return e||(e=window),void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./grid.base"),require("./grid.common"),r(t,e),t}:r(jQuery,t)}("undefined"!=typeof window?window:this,function(T,a){"use strict";var I=T.jgrid;T.fn.jqFilter=function(e){if("string"==typeof e){var t=T.fn.jqFilter[e];if(!t)throw"jqFilter - No such method: "+e;var r=T.makeArray(arguments).slice(1);return t.apply(this,r)}var N=T.extend(!0,{filter:null,columns:[],onChange:null,afterRedraw:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},I.filter,e||{});return this.each(function(){if(!this.filter){null!==(this.p=N).filter&&void 0!==N.filter||(N.filter={groupOp:N.groupOps[0].op,rules:[],groups:[]});var e,t,r=N.columns.length,R=/msie/i.test(navigator.userAgent)&&!a.opera,S=T.jgrid.isFunction,n=null!=I.defaults&&S(I.defaults.fatalError)?I.defaults.fatalError:alert,C=function(){return T("#"+I.jqID(N.id))[0]||null},G=function(e,t){return T(C()).jqGrid("getGuiStyles",e,t||"")},B=function(e){return T(C()).jqGrid("getGridRes","search."+e)},E=function(e){var t=C(),r=t.p.iColByName[e];return void 0!==r?{cm:t.p.colModel[r],iCol:r}:void 0!==(r=t.p.iPropByName[e])?{cm:t.p.additionalProperties[r],iCol:r,isAddProp:!0}:{cm:null,iCol:-1}},y=G("states.error"),o=G("dialog.content");if(N.initFilter=T.extend(!0,{},N.filter),r){for(e=0;e<r;e++)(t=N.columns[e]).stype?t.inputtype=t.stype:t.inputtype||(t.inputtype="text"),t.sorttype?t.searchtype=t.sorttype:t.searchtype||(t.searchtype="string"),void 0===t.hidden&&(t.hidden=!1),t.label||(t.label=t.name),t.cmName=t.name,t.index&&(t.name=t.index),t.hasOwnProperty("searchoptions")||(t.searchoptions={}),t.hasOwnProperty("searchrules")||(t.searchrules={});N.showQuery&&T(this).append("<table class='queryresult "+o+"' style='display:block;max-width:440px;border:0px none;' dir='"+N.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var i=function(e,t){var r=[!0,""],n=C();if(S(t.searchrules))r=t.searchrules.call(n,e,t);else if(I&&I.checkValues)try{r=I.checkValues.call(n,e,-1,t.searchrules,t.label)}catch(e){}r&&r.length&&!1===r[0]&&(N.error=!r[0],N.errmsg=r[1])};this.onchange=function(){return N.error=!1,N.errmsg="",!!S(N.onChange)&&N.onChange.call(C(),N,this)},this.reDraw=function(){T("table.group:first",this).remove();var e=this.createTableForGroup(N.filter,null);T(this).append(e),S(N.afterRedraw)&&N.afterRedraw.call(C(),N,this)},this.createTableForGroup=function(n,e){var o,a=this,t=T("<table class='"+G("searchDialog.operationGroup","group")+"' style='border:0px none;'><tbody></tbody></table>"),r="left";"rtl"===N.direction&&(r="right",t.attr("dir","rtl")),null===e&&t.append("<tr class='error' style='display:none;'><th colspan='5' class='"+y+"' align='"+r+"'></th></tr>");var s=T("<tr></tr>");t.append(s);var i=T("<th colspan='5' align='"+r+"'></th>");if(s.append(i),!0===N.ruleButtons){var p=T("<select class='"+G("searchDialog.operationSelect","opsel")+"'></select>");i.append(p);var l,u="";for(o=0;o<N.groupOps.length;o++)l=n.groupOp===a.p.groupOps[o].op?" selected='selected'":"",u+="<option value='"+a.p.groupOps[o].op+"'"+l+">"+a.p.groupOps[o].text+"</option>";p.append(u).on("change",function(){n.groupOp=T(p).val(),a.onchange()})}var c,d,h,f="<span></span>";if(N.groupButton&&(f=T("<input type='button' value='+ {}' title='"+B("addGroupTitle")+"' class='"+G("searchDialog.addGroupButton","add-group")+"'/>")).on("click",function(){return void 0===n.groups&&(n.groups=[]),n.groups.push({groupOp:N.groupOps[0].op,rules:[],groups:[]}),a.reDraw(),a.onchange(),!1}),i.append(f),!0===N.ruleButtons){var g,m=T("<input type='button' value='+' title='"+B("addRuleTitle")+"' class='"+G("searchDialog.addRuleButton","add-rule ui-add")+"'/>");m.on("click",function(){var e,t,r;for(void 0===n.rules&&(n.rules=[]),o=0;o<a.p.columns.length;o++)if(e=void 0===a.p.columns[o].search||a.p.columns[o].search,t=!0===a.p.columns[o].hidden,!0===a.p.columns[o].searchoptions.searchhidden&&e||e&&!t){g=a.p.columns[o];break}return r=g.searchoptions.sopt?g.searchoptions.sopt:a.p.sopt?a.p.sopt:-1!==T.inArray(g.searchtype,a.p.strarr)?a.p.stropts:a.p.numopts,n.rules.push({field:g.name,op:r[0],data:""}),a.reDraw(),!1}),i.append(m)}if(null!==e){var v=T("<input type='button' value='-' title='"+B("deleteGroupTitle")+"' class='"+G("searchDialog.deleteGroupButton","delete-group")+"'/>");i.append(v),v.on("click",function(){for(o=0;o<e.groups.length;o++)if(e.groups[o]===n){e.groups.splice(o,1);break}return a.reDraw(),a.onchange(),!1})}if(void 0!==n.groups)for(o=0;o<n.groups.length;o++)c=T("<tr></tr>"),t.append(c),d=T("<td class='first'></td>"),c.append(d),(h=T("<td colspan='4'></td>")).append(this.createTableForGroup(n.groups[o],n)),c.append(h);if(void 0===n.groupOp&&(n.groupOp=a.p.groupOps[0].op),void 0!==n.rules)for(o=0;o<n.rules.length;o++)t.append(this.createTableRowForRule(n.rules[o],n));return t},this.createTableRowForRule=function(f,e){var t,g,m,r,v=this,y=C(),n=T("<tr></tr>"),o="";n.append("<td class='first'></td>");var a=T("<td class='columns'></td>");n.append(a);var b,w=T("<select class='"+G("searchDialog.label","selectLabel")+"'></select>"),x=[];a.append(w),w.on("change",function(){f.field=T(w).val();var e,t,r=T(this).parents("tr:first");for(t=0;t<v.p.columns.length;t++)if(v.p.columns[t].name===f.field){e=v.p.columns[t];break}if(e){var n=T.extend({},e.editoptions||{});delete n.readonly,delete n.disabled;var o=T.extend({},n||{},e.searchoptions||{},E(e.cmName),{id:I.randId(),name:e.name,mode:"search"});o.column=e,R&&"text"===e.inputtype&&(o.size||(o.size=10));var a=I.createEl.call(y,e.inputtype,T.extend({},o,o.attr||{}),"",!0,v.p.ajaxSelectOptions||{},!0);T(a).addClass(G("searchDialog.elem","input-elm")),g=o.sopt?o.sopt:v.p.sopt?v.p.sopt:-1!==T.inArray(e.searchtype,v.p.strarr)?v.p.stropts:v.p.numopts;var s,i,p,l="",u=0;for(x=[],T.each(v.p.ops,function(){x.push(this.oper)}),v.p.cops&&T.each(v.p.cops,function(e){x.push(e)}),t=0;t<g.length;t++)i=g[t],-1!==(b=T.inArray(g[t],x))&&(p=void 0!==(s=v.p.ops[b])?s.text:v.p.cops[i].text,0===u&&(f.op=i),l+="<option value='"+i+"'>"+p+"</option>",u++);if(T(".selectopts",r).empty().append(l),T(".selectopts",r)[0].selectedIndex=0,I.msie&&I.msiever()<9){var c=parseInt(T("select.selectopts",r)[0].offsetWidth,10)+1;T(".selectopts",r).width(c),T(".selectopts",r).css("width","auto")}if(T(".data",r).empty().append(a),e.createColumnIndex&&o.generateDatalist){var d="dl_"+a.id,h=T(y).jqGrid("generateDatalistFromColumnIndex",e.name);null!=h&&0<h.length&&(T(a).attr("list",d),T(".data",r).append(h.attr("id",d)))}I.bindEv.call(y,a,o),T(".input-elm",r).on("change",o,function(e){var t=e.target,r=e.data.column;f.data=r&&"custom"===r.inputtype&&S(r.searchoptions.custom_value)?r.searchoptions.custom_value.call(y,T(this).find(".customelement").first(),"get"):t.value,T(t).is("input[type=checkbox]")&&!T(t).is(":checked")&&(f.data=T(t).data("offval")),v.onchange()}),setTimeout(function(){f.data=T(a).val(),"select"===m.inputtype&&m.searchoptions.multiple&&Array.isArray(f.data)&&(f.data=f.data.join(",")),v.onchange()},0)}});var s,i,p=0;for(t=0;t<v.p.columns.length;t++)s=void 0===v.p.columns[t].search||v.p.columns[t].search,i=!0===v.p.columns[t].hidden,(!0===v.p.columns[t].searchoptions.searchhidden&&s||s&&!i)&&(r="",f.field===v.p.columns[t].name&&(r=" selected='selected'",p=t),o+="<option value='"+v.p.columns[t].name+"'"+r+">"+v.p.columns[t].label+"</option>");w.append(o);var l=T("<td class='operators'></td>");n.append(l),m=N.columns[p],R&&"text"===m.inputtype&&(m.searchoptions.size||(m.searchoptions.size=10));var u=T.extend({},m.editoptions||{});delete u.readonly,delete u.disabled;var c=T.extend({},u,m.searchoptions||{},E(m.cmName),{id:I.randId(),name:m.name,mode:"search"});c.column=m;var d=I.createEl.call(y,m.inputtype,T.extend({},c,c.attr||{}),f.data,!0,v.p.ajaxSelectOptions||{},!0);("nu"===f.op||"nn"===f.op||0<=T.inArray(f.op,y.p.customUnaryOperations))&&(T(d).attr("readonly","true"),T(d).attr("disabled","true"));var h,O,D=T("<select class='"+G("searchDialog.operator","selectopts")+"'></select>");for(l.append(D),D.on("change",function(){f.op=T(D).val();var e=T(this).parents("tr:first"),t=T(".input-elm",e)[0];"nu"===f.op||"nn"===f.op||0<=T.inArray(f.op,y.p.customUnaryOperations)?(f.data="","SELECT"!==t.tagName.toUpperCase()&&(t.value=""),t.setAttribute("readonly","true"),t.setAttribute("disabled","true")):("SELECT"===t.tagName.toUpperCase()&&(f.data=t.value),t.removeAttribute("readonly"),t.removeAttribute("disabled")),v.onchange()}),g=m.searchoptions.sopt?m.searchoptions.sopt:v.p.sopt?v.p.sopt:-1!==T.inArray(m.searchtype,v.p.strarr)?v.p.stropts:v.p.numopts,o="",T.each(v.p.ops,function(){x.push(this.oper)}),v.p.cops&&T.each(v.p.cops,function(e){x.push(e)}),t=0;t<g.length;t++)O=g[t],-1!==(b=T.inArray(g[t],x))&&(h=v.p.ops[b],o+="<option value='"+O+"'"+(r=f.op===O?" selected='selected'":"")+">"+(void 0!==h?h.text:v.p.cops[O].text)+"</option>");D.append(o);var F=T("<td class='data'></td>");if(n.append(F),F.append(d),m.createColumnIndex&&m.searchoptions.generateDatalist){var k="dl_"+d.id,A=T(y).jqGrid("generateDatalistFromColumnIndex",m.name);null!=A&&0<A.length&&(T(d).attr("list",k),F.append(A.attr("id",k)))}I.bindEv.call(y,d,m.searchoptions),T(d).addClass(G("searchDialog.elem","input-elm")).on("change",function(){f.data="custom"===m.inputtype?m.searchoptions.custom_value.call(y,T(this).find(".customelement").first(),"get"):T(this).val(),T(this).is("input[type=checkbox]")&&!T(this).is(":checked")&&(f.data=T(this).data("offval")),Array.isArray(f.data)&&(f.data=f.data.join(N.inFilterSeparator||",")),v.onchange()});var j=T("<td></td>");if(n.append(j),!0===N.ruleButtons){var q=T("<input type='button' value='-' title='"+B("deleteRuleTitle")+"' class='"+G("searchDialog.deleteRuleButton","delete-rule ui-del")+"'/>");j.append(q),q.on("click",function(){for(t=0;t<e.rules.length;t++)if(e.rules[t]===f){e.rules.splice(t,1);break}return v.reDraw(),v.onchange(),!1})}return n},this.getStringForGroup=function(e){var t,r="(";if(void 0!==e.groups)for(t=0;t<e.groups.length;t++){1<r.length&&(r+=" "+e.groupOp+" ");try{r+=this.getStringForGroup(e.groups[t])}catch(e){n(e)}}if(void 0!==e.rules)try{for(t=0;t<e.rules.length;t++)1<r.length&&(r+=" "+e.groupOp+" "),r+=this.getStringForRule(e.rules[t])}catch(e){n(e)}return"()"===(r+=")")?"":r},this.getStringForRule=function(e){var t,r,n,o="",a="",s=e.data;for(t=0;t<N.ops.length;t++)if(N.ops[t].oper===e.op){o=N.operands.hasOwnProperty(e.op)?N.operands[e.op]:"",a=N.ops[t].oper;break}if(""===a&&null!=N.cops)for(n in N.cops)if(N.cops.hasOwnProperty(n)&&(a=n,o=N.cops[n].operand,S(N.cops[n].buildQueryValue)))return N.cops[n].buildQueryValue.call(N,{cmName:e.field,searchValue:s,operand:o});for(t=0;t<N.columns.length;t++)if(N.columns[t].name===e.field){r=N.columns[t];break}return null==r?"":("bw"!==a&&"bn"!==a||(s+="%"),"ew"!==a&&"en"!==a||(s="%"+s),"cn"!==a&&"nc"!==a||(s="%"+s+"%"),"in"!==a&&"ni"!==a||(s=" ("+s+")"),N.errorcheck&&i(e.data,r),-1!==T.inArray(r.searchtype,["int","integer","float","number","currency"])||"nn"===a||"nu"===a||0<=T.inArray(a,C().p.customUnaryOperations)?e.field+" "+o+" "+s:e.field+" "+o+' "'+s+'"')},this.resetFilter=function(){N.filter=T.extend(!0,{},N.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){T("th."+y,this).html(""),T("tr.error",this).hide()},this.showError=function(){T("th."+y,this).html(N.errmsg),T("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(N.filter)},this.toString=function(){var n=this;function o(e){if(n.p.errorcheck){var t,r;for(t=0;t<n.p.columns.length;t++)if(n.p.columns[t].name===e.field){r=n.p.columns[t];break}r&&i(e.data,r)}return e.op+"(item."+e.field+",'"+e.data+"')"}return function e(t){var r,n="(";if(void 0!==t.groups)for(r=0;r<t.groups.length;r++)1<n.length&&("OR"===t.groupOp?n+=" || ":n+=" && "),n+=e(t.groups[r]);if(void 0!==t.rules)for(r=0;r<t.rules.length;r++)1<n.length&&("OR"===t.groupOp?n+=" || ":n+=" && "),n+=o(t.rules[r]);return"()"==(n+=")")?"":n}(N.filter)},this.reDraw(),N.showQuery&&this.onchange(),this.filter=!0}}})},T.extend(T.fn.jqFilter,{toSQLString:function(){var e="";return this.each(function(){e=this.toUserFriendlyString()}),e},filterData:function(){var e;return this.each(function(){e=this.p.filter}),e},getParameter:function(e){return void 0!==e&&this.p.hasOwnProperty(e)?this.p[e]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(e){"string"==typeof e&&(e=T.parseJSON(e)),this.each(function(){this.p.filter=e,this.reDraw(),this.onchange()})}})});
//# sourceMappingURL=grid.filter.js.map