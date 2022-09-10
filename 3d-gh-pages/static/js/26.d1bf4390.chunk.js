"use strict";(self.webpackChunk_3d_examples=self.webpackChunk_3d_examples||[]).push([[26],{9099:function(t,e,n){n.d(e,{Z:function(){return C}});var o=n(4942),i=n(3366),r=n(7462),a=n(7313),l=n(3061),s=n(9023),u=n(317),d=n(7551),c=n(8564),p=n(9394),h=n(8073),f=n(1615),m=n(2131);function v(t){return(0,m.Z)("MuiButton",t)}var b=(0,n(655).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var g=a.createContext({}),y=n(6417),w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=function(t){return(0,r.Z)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},x=(0,c.ZP)(h.Z,{shouldForwardProp:function(t){return(0,c.FO)(t)||"classes"===t},name:"MuiButton",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.variant],e["".concat(n.variant).concat((0,f.Z)(n.color))],e["size".concat((0,f.Z)(n.size))],e["".concat(n.variant,"Size").concat((0,f.Z)(n.size))],"inherit"===n.color&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})((function(t){var e,n=t.theme,i=t.ownerState;return(0,r.Z)({},n.typography.button,(e={minWidth:64,padding:"6px 16px",borderRadius:n.shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:(0,d.Fq)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:(0,d.Fq)(n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat(n.palette[i.color].main),backgroundColor:(0,d.Fq)(n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===i.variant&&{backgroundColor:n.palette.grey.A100,boxShadow:n.shadows[4],"@media (hover: none)":{boxShadow:n.shadows[2],backgroundColor:n.palette.grey[300]}},"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:n.palette[i.color].dark,"@media (hover: none)":{backgroundColor:n.palette[i.color].main}}),"&:active":(0,r.Z)({},"contained"===i.variant&&{boxShadow:n.shadows[8]})},(0,o.Z)(e,"&.".concat(b.focusVisible),(0,r.Z)({},"contained"===i.variant&&{boxShadow:n.shadows[6]})),(0,o.Z)(e,"&.".concat(b.disabled),(0,r.Z)({color:n.palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat(n.palette.action.disabledBackground)},"outlined"===i.variant&&"secondary"===i.color&&{border:"1px solid ".concat(n.palette.action.disabled)},"contained"===i.variant&&{color:n.palette.action.disabled,boxShadow:n.shadows[0],backgroundColor:n.palette.action.disabledBackground})),e),"text"===i.variant&&{padding:"6px 8px"},"text"===i.variant&&"inherit"!==i.color&&{color:n.palette[i.color].main},"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===n.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===i.variant&&"inherit"!==i.color&&{color:n.palette[i.color].main,border:"1px solid ".concat((0,d.Fq)(n.palette[i.color].main,.5))},"contained"===i.variant&&{color:n.palette.getContrastText(n.palette.grey[300]),backgroundColor:n.palette.grey[300],boxShadow:n.shadows[2]},"contained"===i.variant&&"inherit"!==i.color&&{color:n.palette[i.color].contrastText,backgroundColor:n.palette[i.color].main},"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"},"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})}),(function(t){var e;return t.ownerState.disableElevation&&(e={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(e,"&.".concat(b.focusVisible),{boxShadow:"none"}),(0,o.Z)(e,"&:active",{boxShadow:"none"}),(0,o.Z)(e,"&.".concat(b.disabled),{boxShadow:"none"}),e)})),_=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(t,e){var n=t.ownerState;return[e.startIcon,e["iconSize".concat((0,f.Z)(n.size))]]}})((function(t){var e=t.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e))})),Z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(t,e){var n=t.ownerState;return[e.endIcon,e["iconSize".concat((0,f.Z)(n.size))]]}})((function(t){var e=t.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))})),C=a.forwardRef((function(t,e){var n=a.useContext(g),o=(0,s.Z)(n,t),d=(0,p.Z)({props:o,name:"MuiButton"}),c=d.children,h=d.color,m=void 0===h?"primary":h,b=d.component,S=void 0===b?"button":b,C=d.className,I=d.disabled,z=void 0!==I&&I,R=d.disableElevation,k=void 0!==R&&R,M=d.disableFocusRipple,E=void 0!==M&&M,T=d.endIcon,F=d.focusVisibleClassName,A=d.fullWidth,P=void 0!==A&&A,O=d.size,B=void 0===O?"medium":O,j=d.startIcon,L=d.type,N=d.variant,W=void 0===N?"text":N,D=(0,i.Z)(d,w),U=(0,r.Z)({},d,{color:m,component:S,disabled:z,disableElevation:k,disableFocusRipple:E,fullWidth:P,size:B,type:L,variant:W}),V=function(t){var e=t.color,n=t.disableElevation,o=t.fullWidth,i=t.size,a=t.variant,l=t.classes,s={root:["root",a,"".concat(a).concat((0,f.Z)(e)),"size".concat((0,f.Z)(i)),"".concat(a,"Size").concat((0,f.Z)(i)),"inherit"===e&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,f.Z)(i))],endIcon:["endIcon","iconSize".concat((0,f.Z)(i))]},d=(0,u.Z)(s,v,l);return(0,r.Z)({},l,d)}(U),H=j&&(0,y.jsx)(_,{className:V.startIcon,ownerState:U,children:j}),q=T&&(0,y.jsx)(Z,{className:V.endIcon,ownerState:U,children:T});return(0,y.jsxs)(x,(0,r.Z)({ownerState:U,className:(0,l.Z)(C,n.className),component:S,disabled:z,focusRipple:!E,focusVisibleClassName:(0,l.Z)(V.focusVisible,F),ref:e,type:L},D,{classes:V,children:[H,c,q]}))}))},4309:function(t,e,n){n.d(e,{Z:function(){return Q}});var o=n(4942),i=n(2982),r=n(3366),a=n(7462),l=n(7313),s=n(317),u=n(3019),d=n(885),c=n(7219),p=n(3061),h=n(6898);function f(t){var e=function(t){return t&&t.ownerDocument||document}(t);return e.defaultView||window}var m=n(2678),v=n(6417),b=["onChange","maxRows","minRows","style","value"];function g(t,e){return parseInt(t[e],10)||0}var y={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},w=l.forwardRef((function(t,e){var n=t.onChange,o=t.maxRows,i=t.minRows,s=void 0===i?1:i,u=t.style,c=t.value,p=(0,r.Z)(t,b),w=l.useRef(null!=c).current,S=l.useRef(null),x=(0,h.Z)(e,S),_=l.useRef(null),Z=l.useRef(0),C=l.useState({}),I=(0,d.Z)(C,2),z=I[0],R=I[1],k=l.useCallback((function(){var e=S.current,n=f(e).getComputedStyle(e);if("0px"!==n.width){var i=_.current;i.style.width=n.width,i.value=e.value||t.placeholder||"x","\n"===i.value.slice(-1)&&(i.value+=" ");var r=n["box-sizing"],a=g(n,"padding-bottom")+g(n,"padding-top"),l=g(n,"border-bottom-width")+g(n,"border-top-width"),u=i.scrollHeight;i.value="x";var d=i.scrollHeight,c=u;s&&(c=Math.max(Number(s)*d,c)),o&&(c=Math.min(Number(o)*d,c));var p=(c=Math.max(c,d))+("border-box"===r?a+l:0),h=Math.abs(c-u)<=1;R((function(t){return Z.current<20&&(p>0&&Math.abs((t.outerHeightStyle||0)-p)>1||t.overflow!==h)?(Z.current+=1,{overflow:h,outerHeightStyle:p}):t}))}}),[o,s,t.placeholder]);l.useEffect((function(){var t,e=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var l=function(){t.apply(o,r)};clearTimeout(e),e=setTimeout(l,n)}return o.clear=function(){clearTimeout(e)},o}((function(){Z.current=0,k()})),n=f(S.current);return n.addEventListener("resize",e),"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(e)).observe(S.current),function(){e.clear(),n.removeEventListener("resize",e),t&&t.disconnect()}}),[k]),(0,m.Z)((function(){k()})),l.useEffect((function(){Z.current=0}),[c]);return(0,v.jsxs)(l.Fragment,{children:[(0,v.jsx)("textarea",(0,a.Z)({value:c,onChange:function(t){Z.current=0,w||k(),n&&n(t)},ref:x,rows:s,style:(0,a.Z)({height:z.outerHeightStyle,overflow:z.overflow?"hidden":null},u)},p)),(0,v.jsx)("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:_,tabIndex:-1,style:(0,a.Z)({},y,u,{padding:0})})]})})),S=w;var x=function(t){return"string"===typeof t};var _=l.createContext();var Z=n(8564),C=n(9394),I=n(1615),z=n(6983),R=m.Z,k=n(499);function M(t){return null!=t&&!(Array.isArray(t)&&0===t.length)}var E=n(2131),T=n(655);function F(t){return(0,E.Z)("MuiInputBase",t)}var A=(0,T.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),P=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","startAdornment","type","value"],O=function(t,e){var n=t.ownerState;return[e.root,n.formControl&&e.formControl,n.startAdornment&&e.adornedStart,n.endAdornment&&e.adornedEnd,n.error&&e.error,"small"===n.size&&e.sizeSmall,n.multiline&&e.multiline,n.color&&e["color".concat((0,I.Z)(n.color))],n.fullWidth&&e.fullWidth,n.hiddenLabel&&e.hiddenLabel]},B=function(t,e){var n=t.ownerState;return[e.input,"small"===n.size&&e.inputSizeSmall,n.multiline&&e.inputMultiline,"search"===n.type&&e.inputTypeSearch,n.startAdornment&&e.inputAdornedStart,n.endAdornment&&e.inputAdornedEnd,n.hiddenLabel&&e.inputHiddenLabel]},j=(0,Z.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:O})((function(t){var e=t.theme,n=t.ownerState;return(0,a.Z)({},e.typography.body1,(0,o.Z)({color:e.palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center"},"&.".concat(A.disabled),{color:e.palette.text.disabled,cursor:"default"}),n.multiline&&(0,a.Z)({padding:"4px 0 5px"},"small"===n.size&&{paddingTop:1}),n.fullWidth&&{width:"100%"})})),L=(0,Z.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:B})((function(t){var e,n=t.theme,i=t.ownerState,r="light"===n.palette.mode,l={color:"currentColor",opacity:r?.42:.5,transition:n.transitions.create("opacity",{duration:n.transitions.duration.shorter})},s={opacity:"0 !important"},u={opacity:r?.42:.5};return(0,a.Z)((e={font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"}},(0,o.Z)(e,"label[data-shrink=false] + .".concat(A.formControl," &"),{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":u,"&:focus::-moz-placeholder":u,"&:focus:-ms-input-placeholder":u,"&:focus::-ms-input-placeholder":u}),(0,o.Z)(e,"&.".concat(A.disabled),{opacity:1,WebkitTextFillColor:n.palette.text.disabled}),(0,o.Z)(e,"&:-webkit-autofill",{animationDuration:"5000s",animationName:"mui-auto-fill"}),e),"small"===i.size&&{paddingTop:1},i.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===i.type&&{MozAppearance:"textfield"})})),N=(0,v.jsx)(k.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),W=l.forwardRef((function(t,e){var n=(0,C.Z)({props:t,name:"MuiInputBase"}),o=n["aria-describedby"],i=n.autoComplete,u=n.autoFocus,h=n.className,f=n.components,m=void 0===f?{}:f,b=n.componentsProps,g=void 0===b?{}:b,y=n.defaultValue,w=n.disabled,Z=n.disableInjectingGlobalStyles,k=n.endAdornment,E=n.fullWidth,T=void 0!==E&&E,A=n.id,O=n.inputComponent,B=void 0===O?"input":O,W=n.inputProps,D=void 0===W?{}:W,U=n.inputRef,V=n.maxRows,H=n.minRows,q=n.multiline,K=void 0!==q&&q,G=n.name,Q=n.onBlur,X=n.onChange,J=n.onClick,Y=n.onFocus,$=n.onKeyDown,tt=n.onKeyUp,et=n.placeholder,nt=n.readOnly,ot=n.renderSuffix,it=n.rows,rt=n.startAdornment,at=n.type,lt=void 0===at?"text":at,st=n.value,ut=(0,r.Z)(n,P),dt=null!=D.value?D.value:st,ct=l.useRef(null!=dt).current,pt=l.useRef(),ht=l.useCallback((function(t){0}),[]),ft=(0,z.Z)(D.ref,ht),mt=(0,z.Z)(U,ft),vt=(0,z.Z)(pt,mt),bt=l.useState(!1),gt=(0,d.Z)(bt,2),yt=gt[0],wt=gt[1],St=l.useContext(_);var xt=function(t){var e=t.props,n=t.states,o=t.muiFormControl;return n.reduce((function(t,n){return t[n]=e[n],o&&"undefined"===typeof e[n]&&(t[n]=o[n]),t}),{})}({props:n,muiFormControl:St,states:["color","disabled","error","hiddenLabel","size","required","filled"]});xt.focused=St?St.focused:yt,l.useEffect((function(){!St&&w&&yt&&(wt(!1),Q&&Q())}),[St,w,yt,Q]);var _t=St&&St.onFilled,Zt=St&&St.onEmpty,Ct=l.useCallback((function(t){!function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t&&(M(t.value)&&""!==t.value||e&&M(t.defaultValue)&&""!==t.defaultValue)}(t)?Zt&&Zt():_t&&_t()}),[_t,Zt]);R((function(){ct&&Ct({value:dt})}),[dt,Ct,ct]);l.useEffect((function(){Ct(pt.current)}),[]);var It=B,zt=D;K&&"input"===It&&(zt=it?(0,a.Z)({type:void 0,minRows:it,maxRows:it},zt):(0,a.Z)({type:void 0,maxRows:V,minRows:H},zt),It=S);l.useEffect((function(){St&&St.setAdornedStart(Boolean(rt))}),[St,rt]);var Rt=(0,a.Z)({},n,{color:xt.color||"primary",disabled:xt.disabled,endAdornment:k,error:xt.error,focused:xt.focused,formControl:St,fullWidth:T,hiddenLabel:xt.hiddenLabel,multiline:K,size:xt.size,startAdornment:rt,type:lt}),kt=function(t){var e=t.classes,n=t.color,o=t.disabled,i=t.error,r=t.endAdornment,a=t.focused,l=t.formControl,u=t.fullWidth,d=t.hiddenLabel,c=t.multiline,p=t.size,h=t.startAdornment,f=t.type,m={root:["root","color".concat((0,I.Z)(n)),o&&"disabled",i&&"error",u&&"fullWidth",a&&"focused",l&&"formControl","small"===p&&"sizeSmall",c&&"multiline",h&&"adornedStart",r&&"adornedEnd",d&&"hiddenLabel"],input:["input",o&&"disabled","search"===f&&"inputTypeSearch",c&&"inputMultiline","small"===p&&"inputSizeSmall",d&&"inputHiddenLabel",h&&"inputAdornedStart",r&&"inputAdornedEnd"]};return(0,s.Z)(m,F,e)}(Rt),Mt=m.Root||j,Et=g.root||{},Tt=m.Input||L;return zt=(0,a.Z)({},zt,g.input),(0,v.jsxs)(l.Fragment,{children:[!Z&&N,(0,v.jsxs)(Mt,(0,a.Z)({},Et,!x(Mt)&&{ownerState:(0,a.Z)({},Rt,Et.ownerState)},{ref:e,onClick:function(t){pt.current&&t.currentTarget===t.target&&pt.current.focus(),J&&J(t)}},ut,{className:(0,p.Z)(kt.root,Et.className,h),children:[rt,(0,v.jsx)(_.Provider,{value:null,children:(0,v.jsx)(Tt,(0,a.Z)({ownerState:Rt,"aria-invalid":xt.error,"aria-describedby":o,autoComplete:i,autoFocus:u,defaultValue:y,disabled:xt.disabled,id:A,onAnimationStart:function(t){Ct("mui-auto-fill-cancel"===t.animationName?pt.current:{value:"x"})},name:G,placeholder:et,readOnly:nt,required:xt.required,rows:it,value:dt,onKeyDown:$,onKeyUp:tt,type:lt},zt,!x(Tt)&&{as:It,ownerState:(0,a.Z)({},Rt,zt.ownerState)},{ref:vt,className:(0,p.Z)(kt.input,zt.className),onBlur:function(t){Q&&Q(t),D.onBlur&&D.onBlur(t),St&&St.onBlur?St.onBlur(t):wt(!1)},onChange:function(t){if(!ct){var e=t.target||pt.current;if(null==e)throw new Error((0,c.Z)(1));Ct({value:e.value})}for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];D.onChange&&D.onChange.apply(D,[t].concat(o)),X&&X.apply(void 0,[t].concat(o))},onFocus:function(t){xt.disabled?t.stopPropagation():(Y&&Y(t),D.onFocus&&D.onFocus(t),St&&St.onFocus?St.onFocus(t):wt(!0))}}))}),k,ot?ot((0,a.Z)({},xt,{startAdornment:rt})):null]}))]})})),D=W;function U(t){return(0,E.Z)("MuiInput",t)}var V=(0,a.Z)({},A,(0,T.Z)("MuiInput",["root","underline","input"])),H=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","type"],q=(0,Z.ZP)(j,{shouldForwardProp:function(t){return(0,Z.FO)(t)||"classes"===t},name:"MuiInput",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[].concat((0,i.Z)(O(t,e)),[!n.disableUnderline&&e.underline])}})((function(t){var e,n=t.theme,i=t.ownerState,r="light"===n.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return(0,a.Z)({position:"relative"},i.formControl&&{"label + &":{marginTop:16}},!i.disableUnderline&&(e={"&:after":{borderBottom:"2px solid ".concat(n.palette[i.color].main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"}},(0,o.Z)(e,"&.".concat(V.focused,":after"),{transform:"scaleX(1)"}),(0,o.Z)(e,"&.".concat(V.error,":after"),{borderBottomColor:n.palette.error.main,transform:"scaleX(1)"}),(0,o.Z)(e,"&:before",{borderBottom:"1px solid ".concat(r),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"}),(0,o.Z)(e,"&:hover:not(.".concat(V.disabled,"):before"),{borderBottom:"2px solid ".concat(n.palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(r)}}),(0,o.Z)(e,"&.".concat(V.disabled,":before"),{borderBottomStyle:"dotted"}),e))})),K=(0,Z.ZP)(L,{name:"MuiInput",slot:"Input",overridesResolver:B})({}),G=l.forwardRef((function(t,e){var n=(0,C.Z)({props:t,name:"MuiInput"}),o=n.disableUnderline,i=n.components,l=void 0===i?{}:i,d=n.componentsProps,c=n.fullWidth,p=void 0!==c&&c,h=n.inputComponent,f=void 0===h?"input":h,m=n.multiline,b=void 0!==m&&m,g=n.type,y=void 0===g?"text":g,w=(0,r.Z)(n,H),S=function(t){var e=t.classes,n={root:["root",!t.disableUnderline&&"underline"],input:["input"]},o=(0,s.Z)(n,U,e);return(0,a.Z)({},e,o)}(n),x={root:{ownerState:{disableUnderline:o}}},_=d?(0,u.Z)(d,x):x;return(0,v.jsx)(D,(0,a.Z)({components:(0,a.Z)({Root:q,Input:K},l),componentsProps:_,fullWidth:p,inputComponent:f,multiline:b,ref:e,type:y},w,{classes:S}))}));G.muiName="Input";var Q=G},7943:function(t,e){var n=function t(){var e=0,n=document.createElement("div");function o(t){return n.appendChild(t.dom),t}function i(t){for(var o=0;o<n.children.length;o++)n.children[o].style.display=o===t?"block":"none";e=t}n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",(function(t){t.preventDefault(),i(++e%n.children.length)}),!1);var r=(performance||Date).now(),a=r,l=0,s=o(new t.Panel("FPS","#0ff","#002")),u=o(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=o(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:n,addPanel:o,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){l++;var t=(performance||Date).now();if(u.update(t-r,200),t>=a+1e3&&(s.update(1e3*l/(t-a),100),a=t,l=0,d)){var e=performance.memory;d.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){r=this.end()},domElement:n,setMode:i}};n.Panel=function(t,e,n){var o=1/0,i=0,r=Math.round,a=r(window.devicePixelRatio||1),l=80*a,s=48*a,u=3*a,d=2*a,c=3*a,p=15*a,h=74*a,f=30*a,m=document.createElement("canvas");m.width=l,m.height=s,m.style.cssText="width:80px;height:48px";var v=m.getContext("2d");return v.font="bold "+9*a+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,l,s),v.fillStyle=e,v.fillText(t,u,d),v.fillRect(c,p,h,f),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(c,p,h,f),{dom:m,update:function(s,b){o=Math.min(o,s),i=Math.max(i,s),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,l,p),v.fillStyle=e,v.fillText(r(s)+" "+t+" ("+r(o)+"-"+r(i)+")",u,d),v.drawImage(m,c+a,p,h-a,f,c,p,h-a,f),v.fillRect(c+h-a,p,a,f),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(c+h-a,p,a,r((1-s/b)*f))}}},e.Z=n},6892:function(t,e,n){n.d(e,{w:function(){return r}});var o=function(){this._tweens={},this._tweensAddedDuringUpdate={}};o.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:r.now();0<n.length;){this._tweensAddedDuringUpdate={};for(var o=0;o<n.length;o++){var i=this._tweens[n[o]];i&&!1===i.update(t)&&(i._isPlaying=!1,e||delete this._tweens[n[o]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i,r=new o;r.Group=o,r._nextId=0,r.nextId=function(){return r._nextId++},"undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?r.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?r.now=self.performance.now.bind(self.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(t,e){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=r.Easing.Linear.None,this._interpolationFunction=r.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||r,this._id=r.nextId()},r.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},duration:function(t){return this._duration=t,this},start:function(t){for(var e in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?r.now()+parseFloat(t):t:r.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&(this._valuesStart[e]=this._object[e],this._valuesStart[e]instanceof Array==0&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,o;if(t<this._startTime)return!0;for(e in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=0===this._duration||1<n?1:n,o=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[e]){var i=this._valuesStart[e]||0,r=this._valuesEnd[e];r instanceof Array?this._object[e]=this._interpolationFunction(r,o):("string"==typeof r&&(r="+"===r.charAt(0)||"-"===r.charAt(0)?i+parseFloat(r):parseFloat(r)),"number"==typeof r&&(this._object[e]=i+(r-i)*o))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1!==n)return!0;if(0<this._repeat){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var a=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=a}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var l=0,s=this._chainedTweens.length;l<s;l++)this._chainedTweens[l].start(this._startTime+this._duration);return!1}},r.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){return t*t*(2.70158*t-1.70158)},Out:function(t){return--t*t*(2.70158*t+1.70158)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((1+e)*t-e)*.5:.5*((t-=2)*t*((1+e)*t+e)+2)}},Bounce:{In:function(t){return 1-r.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*r.Easing.Bounce.In(2*t):.5*r.Easing.Bounce.Out(2*t-1)+.5}}},r.Interpolation={Linear:function(t,e){var n=t.length-1,o=n*e,i=Math.floor(o),a=r.Interpolation.Utils.Linear;return e<0?a(t[0],t[1],o):1<e?a(t[n],t[n-1],n-o):a(t[i],t[n<i+1?n:i+1],o-i)},Bezier:function(t,e){for(var n=0,o=t.length-1,i=Math.pow,a=r.Interpolation.Utils.Bernstein,l=0;l<=o;l++)n+=i(1-e,o-l)*i(e,l)*t[l]*a(o,l);return n},CatmullRom:function(t,e){var n=t.length-1,o=n*e,i=Math.floor(o),a=r.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(i=Math.floor(o=n*(1+e))),a(t[(i-1+n)%n],t[i],t[(i+1)%n],t[(i+2)%n],o-i)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-o)-t[0]):1<e?t[n]-(a(t[n],t[n],t[n-1],t[n-1],o-n)-t[n]):a(t[i?i-1:0],t[i],t[n<i+1?n:i+1],t[n<i+2?n:i+2],o-i)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=r.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var o=e;1<o;o--)n*=o;return t[e]=n}}(),CatmullRom:function(t,e,n,o,i){var r=.5*(n-t),a=.5*(o-e),l=i*i;return(2*e-2*n+r+a)*(i*l)+(-3*e+3*n-2*r-a)*l+r*i+e}}},i=void 0,"function"==typeof define&&define.amd?define([],(function(){return r})):"undefined"!=typeof module&&"object"==typeof exports?module.exports=r:void 0!==i&&(i.TWEEN=r)}}]);