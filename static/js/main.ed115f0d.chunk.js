(this.webpackJsonpmarkdown_previewer_second=this.webpackJsonpmarkdown_previewer_second||[]).push([[0],{17:function(e,t,i){e.exports=i(31)},28:function(e,t,i){e.exports=i.p+"static/media/beep.9558f9d0.mp3"},29:function(e,t,i){e.exports=i.p+"static/media/select.f519d0a2.mp3"},30:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),a=i(9),o=i.n(a),s=i(7),c=i(8),l=i(1),d={EDITOR_CLOSING:"EDITOR_CLOSING",EDITOR_CLOSED:"EDITOR_CLOSED",EDITOR_OPENING:"EDITOR_OPENING",EDITOR_OPENED:"EDITOR_OPENED",EDITOR_MAXIMIZING:"EDITOR_MAXIMIZING",EDITOR_MAXED:"EDITOR_MAXED",EDITOR_MINIMIZING:"EDITOR_MINIMIZING",EDITOR_MINED:"EDITOR_MINED",EDITOR_TEXT_CHANGED:"EDITOR_TEXT_CHANGED",VIEWER_CLOSING:"VIEWER_CLOSING",VIEWER_CLOSED:"VIEWER_CLOSED",VIEWER_OPENING:"VIEWER_OPENING",VIEWER_OPENED:"VIEWER_OPENED",VIEWER_MAXIMIZING:"VIEWER_MAXIMIZING",VIEWER_MAXED:"VIEWER_MAXED",VIEWER_MINIMIZING:"VIEWER_MINIMIZING",VIEWER_MINED:"VIEWER_MINED"},E={editorText:"",isEditorApplyClass:!1,isEditorApplyMaxClass:!1,isEditorClosed:!1,isEditorMaxed:!1,isViewerApplyClass:!(window.innerWidth>=800),isViewerApplyMaxClass:!1,isViewerClosed:!(window.innerWidth>=800),isViewerMaxed:!1,transitioning:!1,transitionTimer:1e3};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.EDITOR_CLOSING:return Object(l.a)(Object(l.a)({},e),{},{isEditorApplyClass:!0,transitioning:!0});case d.EDITOR_CLOSED:return Object(l.a)(Object(l.a)({},e),{},{isEditorClosed:!0,transitioning:!1});case d.EDITOR_OPENING:return Object(l.a)(Object(l.a)({},e),{},{isEditorApplyClass:!1,isEditorClosed:!1,transitioning:!0});case d.EDITOR_OPENED:return Object(l.a)(Object(l.a)({},e),{},{transitioning:!1});case d.EDITOR_MAXIMIZING:return Object(l.a)(Object(l.a)({},e),{},{isEditorApplyMaxClass:!0,transitioning:!0});case d.EDITOR_MAXED:return Object(l.a)(Object(l.a)({},e),{},{isEditorMaxed:!0,transitioning:!1});case d.EDITOR_MINIMIZING:return Object(l.a)(Object(l.a)({},e),{},{isEditorApplyMaxClass:!1,transitioning:!0});case d.EDITOR_MINED:return Object(l.a)(Object(l.a)({},e),{},{isEditorMaxed:!1,transitioning:!1});case d.EDITOR_TEXT_CHANGED:return Object(l.a)(Object(l.a)({},e),{},{editorText:t.payload.text});case d.VIEWER_CLOSING:return Object(l.a)(Object(l.a)({},e),{},{isViewerApplyClass:!0,transitioning:!0});case d.VIEWER_CLOSED:return Object(l.a)(Object(l.a)({},e),{},{isViewerClosed:!0,transitioning:!1});case d.VIEWER_OPENING:return Object(l.a)(Object(l.a)({},e),{},{isViewerApplyClass:!1,isViewerClosed:!1,transitioning:!0});case d.VIEWER_OPENED:return Object(l.a)(Object(l.a)({},e),{},{transitioning:!1});case d.VIEWER_MAXIMIZING:return Object(l.a)(Object(l.a)({},e),{},{isViewerApplyMaxClass:!0,transitioning:!0});case d.VIEWER_MAXED:return Object(l.a)(Object(l.a)({},e),{},{isViewerMaxed:!0,transitioning:!1});case d.VIEWER_MINIMIZING:return Object(l.a)(Object(l.a)({},e),{},{isViewerApplyMaxClass:!1,transitioning:!0});case d.VIEWER_MINED:return Object(l.a)(Object(l.a)({},e),{},{isViewerMaxed:!1,transitioning:!1});default:return e}},m=i(15),I=Object(c.c)(u,Object(c.a)(m.a)),p=i(3),O=i(4),b=i(6),f=i(5),C=i(2),g=document.createElement("audio");g.src=i(28);var x=document.createElement("audio");x.src=i(29);var w=function(){g.load(),g.play()},V=function(){x.load(),x.play()},v=I.getState().transitionTimer,M={closingViewer:function(){return function(e){e({type:d.VIEWER_CLOSING}),setTimeout((function(){e(M.closedViewer())}),v)}},closedViewer:function(){return{type:d.VIEWER_CLOSED}},openingViewer:function(){return function(e){e({type:d.VIEWER_OPENING}),setTimeout((function(){e(M.openedViewer())}),v)}},openedViewer:function(){return{type:d.VIEWER_OPENED}},maxingViewer:function(){return function(e){e(_.closingEditor()),setTimeout((function(){e({type:d.VIEWER_MAXIMIZING}),setTimeout((function(){e(M.maxedViewer())}),v)}),v)}},maxedViewer:function(){return{type:d.VIEWER_MAXED}},miningViewer:function(){return function(e){e({type:d.VIEWER_MINIMIZING}),setTimeout((function(){e(_.openingEditor()),setTimeout((function(){e(M.minedViewer())}),v)}),v)}},minedViewer:function(){return{type:d.VIEWER_MINED}}},N=M,T=I.getState().transitionTimer,h={closingEditor:function(){return function(e){e({type:d.EDITOR_CLOSING}),setTimeout((function(){e(h.closedEditor())}),T)}},closedEditor:function(){return{type:d.EDITOR_CLOSED}},openingEditor:function(){return function(e){e({type:d.EDITOR_OPENING}),setTimeout((function(){e(h.openedEditor())}),T)}},openedEditor:function(){return{type:d.EDITOR_OPENED}},maxingEditor:function(){return function(e){e(N.closingViewer()),setTimeout((function(){e({type:d.EDITOR_MAXIMIZING}),setTimeout((function(){e(h.maxedEditor())}),T)}),T)}},maxedEditor:function(){return{type:d.EDITOR_MAXED}},miningEditor:function(){return function(e){e({type:d.EDITOR_MINIMIZING}),setTimeout((function(){e(N.openingViewer()),setTimeout((function(){e(h.minedEditor())}),T)}),T)}},minedEditor:function(){return{type:d.EDITOR_MINED}},editorTextChange:function(e,t){return{type:d.EDITOR_TEXT_CHANGED,payload:{text:e}}}},_=h,y=function(e){Object(b.a)(i,e);var t=Object(f.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).iconClicked=n.iconClicked.bind(Object(C.a)(n)),n}return Object(O.a)(i,[{key:"iconClicked",value:function(e){V();var t=e.target.id;(0,this.props.toolClick)(null,{"bold-text":"**Strong Text**","italic-text":"_Emphasized Text_","blockquote-text":"> Block Quote","link-text":"[Link](http://)","picture-text":"![Alt Text](http://)","code-text":"`Inline Code`","list-text":"- List Item","ollist-text":"1. List Item"}[t])}},{key:"render",value:function(){return r.a.createElement("div",{className:"editor-toolbar",id:"editor-toolbar"},r.a.createElement("div",null,r.a.createElement("abbr",{title:"Bold"}," ",r.a.createElement("i",{className:"fa fa-bold",id:"bold-text",onClick:this.iconClicked,tabIndex:"0"})," "),r.a.createElement("abbr",{title:"Italic"}," ",r.a.createElement("i",{className:"fa fa-italic",id:"italic-text",onClick:this.iconClicked,tabIndex:"0"})," ")),r.a.createElement("div",null,r.a.createElement("abbr",{title:"Block Quote"}," ",r.a.createElement("i",{className:"fa fa-quote-left",id:"blockquote-text",onClick:this.iconClicked,tabIndex:"0"})," "),r.a.createElement("abbr",{title:"Link"}," ",r.a.createElement("i",{className:"fa fa-link",id:"link-text",onClick:this.iconClicked,tabIndex:"0"})," "),r.a.createElement("abbr",{title:"Picture"}," ",r.a.createElement("i",{className:"fa fa-image",id:"picture-text",onClick:this.iconClicked,tabIndex:"0"})," "),r.a.createElement("abbr",{title:"Code Block"}," ",r.a.createElement("i",{className:"fa fa-code",id:"code-text",onClick:this.iconClicked,tabIndex:"0"})," ")),r.a.createElement("div",null,r.a.createElement("abbr",{title:"Unordered List"}," ",r.a.createElement("i",{className:"fa fa-list",id:"list-text",onClick:this.iconClicked,tabIndex:"0"})," "),r.a.createElement("abbr",{title:"Ordered List"}," ",r.a.createElement("i",{className:"fa fa-list-ol",id:"ollist-text",onClick:this.iconClicked,tabIndex:"0"})," ")))}}]),i}(r.a.Component),D=function(e){Object(b.a)(i,e);var t=Object(f.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).getClass=n.getClass.bind(Object(C.a)(n)),n.getIconClass=n.getIconClass.bind(Object(C.a)(n)),n.closeEditor=n.closeEditor.bind(Object(C.a)(n)),n.maxOrMinimize=n.maxOrMinimize.bind(Object(C.a)(n)),n.editorTextChange=n.editorTextChange.bind(Object(C.a)(n)),n.insertAtCaret=n.insertAtCaret.bind(Object(C.a)(n)),n}return Object(O.a)(i,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("editor-close-btn").addEventListener("click",this.closeEditor),document.getElementById("editor-maxmin-btn").addEventListener("click",this.maxOrMinimize),window.addEventListener("resize",(function(){window.innerWidth>=800&&!e.props.isViewerMaxed&&e.props.isEditorClosed&&e.props.openingEditor()})),fetch("https://raw.githubusercontent.com/AdmiJW/Items/master/Misc/markdown.md").then((function(e){return e.text()})).then((function(t){return e.props.editorTextChange(t)}))}},{key:"getClass",value:function(){var e=this.props,t="editor";return e.isEditorApplyClass&&(t+=" scale0"),e.isEditorClosed&&(t+=" closed"),e.isEditorApplyMaxClass&&(t+=" maxClass"),e.isEditorMaxed&&(t+=" maxed"),t}},{key:"getIconClass",value:function(){var e="fas editor-maxmin-btn";return this.props.isEditorMaxed?e+=" fa-compress-arrows-alt":e+=" fa-expand-arrows-alt",e}},{key:"closeEditor",value:function(){var e=this.props.closingEditor;w(),e()}},{key:"maxOrMinimize",value:function(){var e=this.props,t=e.isEditorMaxed,i=e.maxingEditor,n=e.miningEditor;e.transitioning||(w(),t?n():i())}},{key:"editorTextChange",value:function(e){this.props.editorTextChange(document.getElementById("editor").value)}},{key:"insertAtCaret",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=document.getElementById("editor"),n=i.selectionStart,r=i.selectionEnd,a=i.value;i.focus(),a.substring(r-t.length,r)===t?(i.value=a.substring(0,r-t.length)+a.substring(r),i.setSelectionRange(n,n)):(i.value="".concat(a.substring(0,r)).concat(t).concat(a.substring(r)),i.setSelectionRange(r,r+t.length)),this.editorTextChange()}},{key:"render",value:function(){return r.a.createElement("div",{className:this.getClass()},r.a.createElement("header",{className:"win-header"},r.a.createElement("i",{className:"fas fa-scroll win-header-logo"}),"EDITOR",r.a.createElement("i",{tabIndex:"1",className:"fas fa-times editor-btn",id:"editor-close-btn"}),r.a.createElement("i",{tabIndex:"1",className:this.getIconClass(),id:"editor-maxmin-btn"})),r.a.createElement(y,{toolClick:this.insertAtCaret}),r.a.createElement("textarea",{className:"text-area closeOpenTrans",id:"editor",onChange:this.editorTextChange,value:this.props.editorText}))}}]),i}(r.a.Component);var R=Object(s.b)((function(e){return{isEditorApplyClass:e.isEditorApplyClass,isEditorApplyMaxClass:e.isEditorApplyMaxClass,isEditorClosed:e.isEditorClosed,isEditorMaxed:e.isEditorMaxed,isViewerMaxed:e.isViewerMaxed,editorText:e.editorText,transitionTimer:e.transitionTimer,transitioning:e.transitioning}}),(function(e){return{openingEditor:function(){return e(_.openingEditor())},closingEditor:function(){return e(_.closingEditor())},maxingEditor:function(){return e(_.maxingEditor())},miningEditor:function(){return e(_.miningEditor())},editorTextChange:function(t,i){return e(_.editorTextChange(t,i))}}}))(D),j=i(16),k=i.n(j),A=function(e){Object(b.a)(i,e);var t=Object(f.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).getClass=n.getClass.bind(Object(C.a)(n)),n.getIconClass=n.getIconClass.bind(Object(C.a)(n)),n.closeViewer=n.closeViewer.bind(Object(C.a)(n)),n.maxOrMinimize=n.maxOrMinimize.bind(Object(C.a)(n)),n}return Object(O.a)(i,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("viewer-close-btn").addEventListener("click",this.closeViewer),document.getElementById("viewer-maxmin-btn").addEventListener("click",this.maxOrMinimize),window.addEventListener("resize",(function(){window.innerWidth>=800&&!e.props.isEditorMaxed&&e.props.isViewerClosed&&e.props.openingViewer()}))}},{key:"getClass",value:function(){var e=this.props,t=e.isViewerApplyClass,i=e.isViewerClosed,n="viewer";return t&&(n+=" scale0"),e.isViewerApplyMaxClass&&(n+=" maxClass"),i&&(n+=" closed"),e.isViewerMaxed&&(n+=" maxed"),n}},{key:"getIconClass",value:function(){var e="fas viewer-maxmin-btn";return this.props.isViewerMaxed?e+=" fa-compress-arrows-alt":e+=" fa-expand-arrows-alt",e}},{key:"closeViewer",value:function(){var e=this.props.closingViewer;w(),e()}},{key:"maxOrMinimize",value:function(){var e=this.props,t=e.isViewerMaxed,i=e.maxingViewer,n=e.miningViewer;e.transitioning||(w(),t?n():i())}},{key:"render",value:function(){return r.a.createElement("div",{className:this.getClass(),id:"viewer"},r.a.createElement("header",{className:"win-header"},r.a.createElement("i",{className:"fas fa-scroll win-header-logo"}),"PREVIEWER",r.a.createElement("i",{tabIndex:"1",className:"fas fa-times viewer-btn",id:"viewer-close-btn"}),r.a.createElement("i",{tabIndex:"1",className:this.getIconClass(),id:"viewer-maxmin-btn"})),r.a.createElement("div",{className:"view-div closeOpenTrans",id:"preview",dangerouslySetInnerHTML:{__html:k()(this.props.editorText.replace(/\n\n/g,"\n\n<br>\n\n"),{breaks:!0})}}))}}]),i}(r.a.Component);var W=Object(s.b)((function(e){return{isViewerApplyClass:e.isViewerApplyClass,isViewerApplyMaxClass:e.isViewerApplyMaxClass,isViewerClosed:e.isViewerClosed,isViewerMaxed:e.isViewerMaxed,editorText:e.editorText,isEditorMaxed:e.isEditorMaxed,transitionTimer:e.transitionTimer}}),(function(e){return{openingViewer:function(){return e(N.openingViewer())},closingViewer:function(){return e(N.closingViewer())},maxingViewer:function(){return e(N.maxingViewer())},miningViewer:function(){return e(N.miningViewer())}}}))(A),G=function(e){Object(b.a)(i,e);var t=Object(f.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).editorBtnClicked=n.editorBtnClicked.bind(Object(C.a)(n)),n.vieworBtnClicked=n.vieworBtnClicked.bind(Object(C.a)(n)),n}return Object(O.a)(i,[{key:"componentDidMount",value:function(){document.getElementById("editor-btn").addEventListener("click",this.editorBtnClicked),document.getElementById("viewer-btn").addEventListener("click",this.vieworBtnClicked)}},{key:"editorBtnClicked",value:function(){var e=this.props,t=e.isEditorClosed,i=e.isViewerClosed,n=e.transitioning,r=e.transitionTimer,a=e.closingEditor,o=e.openingEditor,s=e.closingViewer;n||(w(),t?i?o():(s(),setTimeout((function(){o()}),r)):a())}},{key:"vieworBtnClicked",value:function(){var e=this.props,t=e.isEditorClosed,i=e.isViewerClosed,n=e.transitioning,r=e.transitionTimer,a=e.closingEditor,o=e.closingViewer,s=e.openingViewer;n||(w(),i?t?s():(a(),setTimeout((function(){s()}),r)):o())}},{key:"render",value:function(){return r.a.createElement("nav",{className:"toolbar"},r.a.createElement("i",{className:"fas fa-pen fa-3x icon",id:"editor-btn"}),r.a.createElement("i",{className:"fas fa-eye fa-3x icon",id:"viewer-btn"}))}}]),i}(r.a.Component);var L=Object(s.b)((function(e){return{isEditorClosed:e.isEditorClosed,isViewerClosed:e.isViewerClosed,transitioning:e.transitioning,transitionTimer:e.transitionTimer}}),(function(e){return{closingEditor:function(){return e(_.closingEditor())},openingEditor:function(){return e(_.openingEditor())},closingViewer:function(){return e(N.closingViewer())},openingViewer:function(){return e(N.openingViewer())}}}))(G),S=function(e){Object(b.a)(i,e);var t=Object(f.a)(i);function i(){return Object(p.a)(this,i),t.apply(this,arguments)}return Object(O.a)(i,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(R,null),r.a.createElement(W,null),r.a.createElement(L,null))}}]),i}(r.a.Component);var B=function(){return r.a.createElement(s.a,{store:I},r.a.createElement("div",{className:"App"},r.a.createElement(S,null)))};i(30);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ed115f0d.chunk.js.map