(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/wZO":function(e,a,t){},"14/g":function(e,a,t){"use strict";t.r(a);t("Tze0");var n=t("RIqP"),r=t.n(n),i=(t("bWfx"),t("2Spj"),t("f3/d"),t("xfY5"),t("pIFo"),t("SRfc"),t("KKXr"),t("lwsE")),s=t.n(i),c=t("W8MJ"),l=t.n(c),o=t("a1gu"),u=t.n(o),m=t("Nsbk"),d=t.n(m),p=t("PJYZ"),h=t.n(p),v=t("7W2i"),f=t.n(v),E=t("GQeE"),g=t.n(E),N=t("QbLZ"),T=t.n(N),I=t("cDcd"),R=t.n(I),w=t("vN+2"),y=t.n(w),L=(t("FDph"),t("NK4f"),t("GL+w"),t("TSYQ")),_=t.n(L);var C=function(e){var a=e.data,t=void 0===a?"":a,n=e.errorMap,r=e.warningMap,i=!!g()(n).length,s=r&&g()(r).length,c=!i&&s,l=_()({"raw-format-error":i,"raw-format-warning":c});return R.a.createElement("div",{className:"msB"},R.a.createElement("textarea",{className:l,value:t,onChange:function(a){var t=a.target.value;e.onNewText(t)},placeholder:"Enter the raw STDIN input",autoFocus:!0}))},A=(t("Z2Ku"),t("L9s1"),t("J4zp")),S=t.n(A),D=["INTEGER","FLOAT","LONG_INTEGER","STRING"],G={INTEGER:/^[+-]?[0-9]+$/,FLOAT:/^[+-]?([0-9]*[.])?[0-9]+$/,LONG_INTEGER:/^[+-]?[0-9]+$/,STRING:/.*?$/,CHARACTER:/^.$/},M={INTEGER_ARRAY:"INTEGER",LONG_INTEGER_ARRAY:"LONG_INTEGER",FLOAT_ARRAY:"FLOAT",STRING_ARRAY:"STRING",INTEGER_SINGLY_LINKED_LIST:"INTEGER",FLOAT_SINGLY_LINKED_LIST:"FLOAT",STRING_SINGLY_LINKED_LIST:"STRING",CHARACTER_SINGLY_LINKED_LIST:"CHARACTER",INTEGER_DOUBLY_LINKED_LIST:"INTEGER",FLOAT_DOUBLY_LINKED_LIST:"FLOAT",STRING_DOUBLY_LINKED_LIST:"STRING",CHARACTER_DOUBLY_LINKED_LIST:"CHARACTER"};function k(e,a){return G[e].test(a)}function x(e){return e.toLowerCase().replace("_"," ")}function O(e){return e.slice(1).map(function(e){return{id:e,text:e}})}var b=function(e){var a=S()(e.data,1)[0],t=void 0===a?"":a,n=e.name,r=e.errorMap,i=e.type,s=!r[n],c=x(i);return R.a.createElement("div",{className:"inner-div-single"},R.a.createElement("div",{className:"params"},R.a.createElement("label",{className:"func-type float-left"},R.a.createElement("span",{className:"data-type"},c)," ",R.a.createElement("span",{className:"func-params"},n))),R.a.createElement("input",{type:"text",className:_()("text-width",{red:!s}),value:t,onChange:function(a){var t=a.target.value;e.onTextChange(e.index,[t])}}))},F=(t("dZ+Y"),t("0l/t"),t("d0fZ")),Y=function(e){function a(e){var t;s()(this,a),t=u()(this,d()(a).call(this,e)),V.call(h()(t));var n=e.data;return t.state={tag:"",tags:O(n)},t}return f()(a,e),l()(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.name,n=e.arrayType,r=this.state,i=r.tags,s=r.showHint,c=x(n);return R.a.createElement("div",{className:"inner-div"},R.a.createElement("label",{className:"func-type"},R.a.createElement("span",{className:"data-type"},c),R.a.createElement("span",{className:"func-params"}," ",t),R.a.createElement("span",{className:"array-params"},"Length: ",function(e){return e[0]>=0?e[0]:0}(a))),R.a.createElement("div",{className:_()({"array-error":!this.isValueValid()})},R.a.createElement(F.WithContext,{tags:i,handleAddition:this.handleAddition,handleInputBlur:this.handleInputBlur,handleInputFocus:this.handleInputFocus,handleDelete:this.handleDelete,handleDrag:this.handleDrag,placeholder:"",allowUnique:!1}),s&&R.a.createElement("span",{className:"show-hint func-name"},"Press enter to add elements")))}}]),a}(I.Component),V=function(){var e=this;this.onChange=function(a){var t=a.map(function(e){return e.text}),n=[t.length||0].concat(t);e.props.onTextChange(e.props.index,n)},this.handleAddition=function(a){e.setState(function(e){return{tags:[].concat(r()(e.tags),[a])}},function(){var a=e.state.tags;e.onChange(a)})},this.handleDelete=function(a){var t=e.state.tags.filter(function(e,t){return t!==a});e.setState({tags:t}),e.onChange(t)},this.handleInputFocus=function(){e.setState({showHint:!0})},this.handleInputBlur=function(){e.setState({showHint:!1})},this.handleDrag=function(a,t,n){var i=r()(e.state.tags);i.splice(t,1),i.splice(n,0,a),e.setState({tags:i}),e.onChange(i)},this.isValueValid=function(){var a=e.props,t=a.errorMap,n=a.name;return!g()(t).some(function(e){return e.split("_")[0]===n})}},K=Y;var H=function(e){var a=e.functionName;return R.a.createElement("div",{className:"fname msB"},R.a.createElement("i",{className:"icon-info-circled fnt-sz-small"}),R.a.createElement("label",null,"Debug function",R.a.createElement("span",{className:"func-name"},a),"with your own input"),R.a.createElement("div",{className:"parameters"},function(e){var a=e.data,t=e.datatypes,n=e.errorMap,r=e.onNewText,i=[];return t&&t.length?i=t.map(function(e,t){var i=e.type,s=e.name;return D.includes(i)?R.a.createElement(b,{name:s,key:t,data:a[t].value,type:i,index:t,onTextChange:r,errorMap:n}):i.match(/ARRAY/)||i.match(/LINKED_LIST/)?R.a.createElement(K,{name:s,key:t,data:a[t].value,index:t,onTextChange:r,errorMap:n,arrayType:i}):[]}):i.push(R.a.createElement("div",{key:"no-data",className:"no-data-div alert-box secondary"},"No Datatypes have been added")),i}(e)))},B=(t("/wZO"),t("WE1m"),function(e){function a(e){var t;s()(this,a),t=u()(this,d()(a).call(this,e)),z.call(h()(t));var n=e.config,r=e.initialValue,i=[],c="raw";return n&&(c=n.defaultView||"raw",i=n.datatypes),t.state=T()({currentComponent:c,datatypes:i},t.parseRawInput(r,i,!n)),t}return f()(a,e),l()(a,[{key:"getCurrentComponent",value:function(){return this.state.currentComponent}},{key:"getTrailingError",value:function(e){var a="",t=" "===e[0],n=e.length>1&&" "===e[e.length-1];return t&&n?a="Leading and trailing spaces detected in custom input":t?a="Leading space detected in custom input":n&&(a="Trailing space detected in custom input"),a?{trailingSpace:a}:{}}},{key:"parseRawInput",value:function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t)return{errorMap:{},currentData:e,datatypes:[],warningMap:this.getTrailingError(e)};for(var n="string"==typeof e?e.split("\n"):[],r=[],i={},s=0,c=0;c<a.length;c++){var l=a[c].type,o=[];if(l.match(/ARRAY/)||l.match(/LINKED_LIST/)){var u=l.replace("_"," ").toLowerCase();if(n[s]){var m=Number(n[s]);if(s++,isNaN(m)||m<0)i["".concat(a[c].name,"_size")]="Invalid size for ".concat(u," ").concat(a[c].name),o[0]=0;else{var d=0,p=void 0;for(p=0;p<m&&null!=n[s+p];p++)d++,o[p+1]=n[s+p],(l.match(/INTEGER/)||l.match(/FLOAT/)||l.match(/CHARACTER/))&&(i=this.checkValidationMultiLineDatatype(o[p+1],i,a[c],p));s+=p,d<m&&(i["".concat(a[c].name,"_ele")]="Only ".concat(d,"/").concat(m," values have been entered for ").concat(u," ").concat(a[c].name)),m>=0&&(o[0]=d)}}else s++}else n[s]&&(o=[n[s]]),s++,o.length&&(k(l,o)||(i[a[c].name]="Enter valid data for ".concat(l.replace("_"," ").toLowerCase()," ").concat(a[c].name)));r[c]={type:l,value:o}}return s<n.length&&(i.data_overflow="Data entered is more than required"),{warningMap:this.getTrailingError(e),errorMap:i,currentData:e,modifiedTestcase:r}}},{key:"checkValidationMultiLineDatatype",value:function(e,a,t,n){return k(M[t.type],e)&&""!==e?(delete a["".concat(t.name,"_invalid_element").concat(n)],a):(a["".concat(t.name,"_invalid_element").concat(n)]="Enter valid data for ".concat(t.type.replace(/_/g," ").toLowerCase()," ").concat(t.name," [").concat(n,"]"),a)}},{key:"renderVisualTab",value:function(){if(!this.props.config)return null;var e=this.state.currentComponent,a="links ".concat("visual"===e?"link-active":"link-unactive");return R.a.createElement(I.Fragment,null,R.a.createElement("a",{href:"#","data-analytics":"visual-format",onClick:this.setCurrentCompState.bind(this,"visual"),className:a},"Visual Format"))}},{key:"renderErrors",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",t=g()(e);if(!t.length)return null;var n=t.map(function(a){return R.a.createElement("li",{key:a},e[a])}),r="error"===a?"Error:":"Warning:";return R.a.createElement("div",{className:a,"aria-live":"polite"},r,R.a.createElement("ul",null,n))}},{key:"render",value:function(){var e,a=this.state,t=a.currentData,n=a.datatypes,r=a.modifiedTestcase,i=a.errorMap,s=a.warningMap,c=this.renderErrors(i),l=this.renderErrors(s,"warning"),o="";return e=R.a.createElement("div",{className:"msT nav"},this.renderVisualTab(),R.a.createElement("a",{href:"#","data-analytics":"raw-format",onClick:this.setCurrentCompState.bind(this,"raw"),className:"links ".concat("raw"===this.state.currentComponent?"link-active":"link-unactive")},"Raw Format")),o="raw"===this.state.currentComponent?R.a.createElement("div",{className:"old-format",id:"old"},R.a.createElement(C,{data:t,onNewText:this.handleRawInput,errorMap:i,warningMap:s})):R.a.createElement("div",{className:"new-format",id:"new"},R.a.createElement(H,{data:r,onNewText:this.handleVisualInput,errorMap:this.state.errorMap,functionName:this.props.config.functionName,datatypes:n}),R.a.createElement("br",null)),R.a.createElement("div",{className:"custom-input-wrapper"},R.a.createElement("div",{className:"container-fluid"},R.a.createElement("div",{className:"visual-div"},e,R.a.createElement("div",{className:"outer-border"},o,c,l))))}}]),a}(I.Component));B.defaultProps={initialValue:"",onChange:y.a,onViewChange:y.a};var z=function(){var e=this;this.getValue=function(){return e.state.currentData},this.getModifiedTestCase=function(e){return e.map(function(e){return{type:e.type,value:[]}})},this.handleRawInput=function(a){var t=e.props,n=t.onChange,r=t.config,i=e.state.datatypes;e.setState(e.parseRawInput(a,i,!r)),n&&n(a)},this.handleVisualInput=function(a,t){var n=!1,i=e.state,s=i.modifiedTestcase,c=void 0===s?[]:s,l=i.errorMap,o=void 0===l?{}:l,u=i.datatypes,m=r()(c),d=T()({},o),p=T()({},u[a]);if(t.length&&(p.type.match(/ARRAY/)||p.type.match(/LINKED_LIST/))){if(delete d["".concat(p.name,"_size")],m[a]&&m[a].value)for(var h=m[a].value,v=0;v<h[0];v++)delete d["".concat(p.name,"_invalid_element").concat(v)];for(var f=0;f<t[0];f++)(p.type.match(/INTEGER/)||p.type.match(/FLOAT/)||p.type.match(/CHARACTER/))&&(d=e.checkValidationMultiLineDatatype(t[f+1],d,p,f));delete d["".concat(p.name,"_ele")]}else t.length&&!k(p.type,t)&&(n=!0,d[p.name]||(d[p.name]="Enter valid data for ".concat(p.type.replace(/_/g," ").toLowerCase()," ").concat(p.name)));n||delete d[p.name],m[a].value=t,e.setState({modifiedTestcase:m});for(var E=e.state.modifiedTestcase,N=g()(E).map(function(e){return E[e]}),I=[],R=0;R<N.length;R++)m[R].value.length>1?I[R]=N[R].value.join("\n"):I[R]=N[R].value;var w=I.join("\n").trimRight();e.setState({errorMap:d,currentData:w,warningMap:e.getTrailingError(w)}),e.props.onChange(w)},this.setCurrentCompState=function(e,a){a.preventDefault();var t=this.state.currentData,n={currentComponent:e,currentData:"string"==typeof t?t.trim():""};if("visual"===e){for(var r=this.state.modifiedTestcase,i=g()(r).map(function(e){return r[e]}),s=[],c=0;c<i.length;c++)i[c].value.length>1?s[c]=i[c].value.join("\n"):s[c]=i[c].value;var l=s.join("\n").trimRight(),o=this.state,u=o.errorMap,m=o.datatypes;delete u.data_overflow;for(var d=0;d<m.length;d++)delete u["".concat(m[d].name,"_size")],delete u["".concat(m[d].name,"_ele")];n.currentData=l,n.errorMap=u,n.warningMap=this.getTrailingError(l)}this.setState(n),this.props.onViewChange(e)}};a.default=B},WE1m:function(e,a,t){}}]);
//# sourceMappingURL=https://staging.hackerrank.net/fcore-assets/sourcemaps/hackerrank_r_modules~custominput~community~work-61e26615.js.map