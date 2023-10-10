var Ue=Object.defineProperty;var c=(e,t)=>Ue(e,"name",{value:t,configurable:!0});import{r as u,R as U}from"./index.e63f9b4c.js";import{r as Ge}from"./index.43c32d9a.js";import{a as W,j as x,F as B}from"./jsx-runtime.ae209673.js";function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}c(P,"_extends");var Ye=u.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ke=c(function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function ge(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}c(ge,"_objectWithoutPropertiesLoose");var Ce=u.exports.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,d=ge(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=u.exports.useContext(Ye),p=h.color,f=p===void 0?"currentColor":p,m=h.size,b=h.weight,S=b===void 0?"regular":b,v=h.mirrored,C=v===void 0?!1:v,$=ge(h,["color","size","weight","mirrored"]);return W("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o!=null?o:m,height:o!=null?o:m,fill:n!=null?n:f,viewBox:"0 0 256 256",transform:l||C?"scale(-1, 1)":void 0},$,d),children:[!!r&&x("title",{children:r}),a,x("rect",{width:"256",height:"256",fill:"none"}),s(i!=null?i:S,n!=null?n:f)]})});Ce.displayName="IconBase";const we=Ce;var D=new Map;D.set("bold",function(e){return x(B,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});D.set("duotone",function(e){return x(B,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});D.set("fill",function(){return x(B,{children:x("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});D.set("light",function(e){return x(B,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});D.set("thin",function(e){return x(B,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});D.set("regular",function(e){return x(B,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var qe=c(function(t,r){return ke(t,r,D)},"renderPath"),Re=u.exports.forwardRef(function(e,t){return x(we,{...Object.assign({ref:t},e,{renderPath:qe})})});Re.displayName="Check";const Ze=Re;var V=new Map;V.set("bold",function(e){return W(B,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});V.set("duotone",function(e){return W(B,{children:[x("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});V.set("fill",function(){return x(B,{children:x("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});V.set("light",function(e){return W(B,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});V.set("thin",function(e){return W(B,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});V.set("regular",function(e){return W(B,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var Ke=c(function(t,r){return ke(t,r,V)},"renderPath"),Ie=u.exports.forwardRef(function(e,t){return x(we,{...Object.assign({ref:t},e,{renderPath:Ke})})});Ie.displayName="User";const Je=Ie;function ze(e,t=[]){let r=[];function n(i,l){const a=u.exports.createContext(l),s=r.length;r=[...r,l];function d(p){const{scope:f,children:m,...b}=p,S=(f==null?void 0:f[e][s])||a,v=u.exports.useMemo(()=>b,Object.values(b));return u.exports.createElement(S.Provider,{value:v},m)}c(d,"Provider");function h(p,f){const m=(f==null?void 0:f[e][s])||a,b=u.exports.useContext(m);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c(h,"useContext"),d.displayName=i+"Provider",[d,h]}c(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=r.map(l=>u.exports.createContext(l));return c(function(a){const s=(a==null?void 0:a[e])||i;return u.exports.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])},"useScope")},"createScope");return o.scopeName=e,[n,Xe(o,...t)]}c(ze,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function Xe(...e){const t=e[0];if(e.length===1)return t;const r=c(()=>{const n=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=n.reduce((a,{useScope:s,scopeName:d})=>{const p=s(i)[`__scope${d}`];return{...a,...p}},{});return u.exports.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return r.scopeName=t.scopeName,r}c(Xe,"$c512c27ab02ef895$var$composeContextScopes");function fe(e){const t=u.exports.useRef(e);return u.exports.useEffect(()=>{t.current=e}),u.exports.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}c(fe,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const Q=Boolean(globalThis==null?void 0:globalThis.document)?u.exports.useLayoutEffect:()=>{};function Qe(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(Qe,"$6ed0406888f73fc4$var$setRef");function Ee(...e){return t=>e.forEach(r=>Qe(r,t))}c(Ee,"$6ed0406888f73fc4$export$43e446d32b3d21af");function Be(...e){return u.exports.useCallback(Ee(...e),e)}c(Be,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Pe=u.exports.forwardRef((e,t)=>{const{children:r,...n}=e,o=u.exports.Children.toArray(r),i=o.find(tt);if(i){const l=i.props.children,a=o.map(s=>s===i?u.exports.Children.count(l)>1?u.exports.Children.only(null):u.exports.isValidElement(l)?l.props.children:null:s);return u.exports.createElement(de,P({},n,{ref:t}),u.exports.isValidElement(l)?u.exports.cloneElement(l,void 0,a):null)}return u.exports.createElement(de,P({},n,{ref:t}),r)});Pe.displayName="Slot";const de=u.exports.forwardRef((e,t)=>{const{children:r,...n}=e;return u.exports.isValidElement(r)?u.exports.cloneElement(r,{...rt(n,r.props),ref:t?Ee(t,r.ref):r.ref}):u.exports.Children.count(r)>1?u.exports.Children.only(null):null});de.displayName="SlotClone";const et=c(({children:e})=>u.exports.createElement(u.exports.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function tt(e){return u.exports.isValidElement(e)&&e.type===et}c(tt,"$5e63c961fc1ce211$var$isSlottable");function rt(e,t){const r={...t};for(const n in t){const o=e[n],i=t[n];/^on[A-Z]/.test(n)?o&&i?r[n]=(...a)=>{i(...a),o(...a)}:o&&(r[n]=o):n==="style"?r[n]={...o,...i}:n==="className"&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}c(rt,"$5e63c961fc1ce211$var$mergeProps");const nt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ee=nt.reduce((e,t)=>{const r=u.exports.forwardRef((n,o)=>{const{asChild:i,...l}=n,a=i?Pe:t;return u.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),u.exports.createElement(a,P({},l,{ref:o}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Ae="Avatar",[ot,_r]=ze(Ae),[it,je]=ot(Ae),at=u.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=u.exports.useState("idle");return u.exports.createElement(it,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},u.exports.createElement(ee.span,P({},n,{ref:t})))}),st="AvatarImage",lt=u.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=je(st,r),a=ut(n),s=fe(d=>{o(d),l.onImageLoadingStatusChange(d)});return Q(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?u.exports.createElement(ee.img,P({},i,{ref:t,src:n})):null}),ct="AvatarFallback",dt=u.exports.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=je(ct,r),[l,a]=u.exports.useState(n===void 0);return u.exports.useEffect(()=>{if(n!==void 0){const s=window.setTimeout(()=>a(!0),n);return()=>window.clearTimeout(s)}},[n]),l&&i.imageLoadingStatus!=="loaded"?u.exports.createElement(ee.span,P({},o,{ref:t})):null});function ut(e){const[t,r]=u.exports.useState("idle");return Q(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=c(l=>()=>{!n||r(l)},"updateStatus");return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}c(ut,"$cddcb0b647441e34$var$useImageLoadingStatus");const ft=at,pt=lt,gt=dt;function he(e,t,{checkForDefaultPrevented:r=!0}={}){return c(function(o){if(e==null||e(o),r===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c(he,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function ht({prop:e,defaultProp:t,onChange:r=c(()=>{},"onChange")}){const[n,o]=mt({defaultProp:t,onChange:r}),i=e!==void 0,l=i?e:n,a=fe(r),s=u.exports.useCallback(d=>{if(i){const p=typeof d=="function"?d(e):d;p!==e&&a(p)}else o(d)},[i,e,o,a]);return[l,s]}c(ht,"$71cd76cc60e0454e$export$6f32135080cb4c3");function mt({defaultProp:e,onChange:t}){const r=u.exports.useState(e),[n]=r,o=u.exports.useRef(n),i=fe(t);return u.exports.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}c(mt,"$71cd76cc60e0454e$var$useUncontrolledState");function bt(e){const t=u.exports.useRef({value:e,previous:e});return u.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(bt,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function $t(e){const[t,r]=u.exports.useState(void 0);return Q(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,d=Array.isArray(s)?s[0]:s;l=d.inlineSize,a=d.blockSize}else l=e.offsetWidth,a=e.offsetHeight;r({width:l,height:a})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}c($t,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function xt(e,t){return u.exports.useReducer((r,n)=>{const o=t[r][n];return o!=null?o:r},e)}c(xt,"$fe963b355347cc68$export$3e6543de14f8614f");const Me=c(e=>{const{present:t,children:r}=e,n=vt(t),o=typeof r=="function"?r({present:n.isPresent}):u.exports.Children.only(r),i=Be(n.ref,o.ref);return typeof r=="function"||n.isPresent?u.exports.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");Me.displayName="Presence";function vt(e){const[t,r]=u.exports.useState(),n=u.exports.useRef({}),o=u.exports.useRef(e),i=u.exports.useRef("none"),l=e?"mounted":"unmounted",[a,s]=xt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.exports.useEffect(()=>{const d=ne(n.current);i.current=a==="mounted"?d:"none"},[a]),Q(()=>{const d=n.current,h=o.current;if(h!==e){const f=i.current,m=ne(d);e?s("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?s("UNMOUNT"):s(h&&f!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),Q(()=>{if(t){const d=c(p=>{const m=ne(n.current).includes(p.animationName);p.target===t&&m&&Ge.exports.flushSync(()=>s("ANIMATION_END"))},"handleAnimationEnd"),h=c(p=>{p.target===t&&(i.current=ne(n.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:u.exports.useCallback(d=>{d&&(n.current=getComputedStyle(d)),r(d)},[])}}c(vt,"$921a889cee6df7e8$var$usePresence");function ne(e){return(e==null?void 0:e.animationName)||"none"}c(ne,"$921a889cee6df7e8$var$getAnimationName");const We="Checkbox",[yt,Tr]=ze(We),[St,kt]=yt(We),Ct=u.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:d,...h}=e,[p,f]=u.exports.useState(null),m=Be(t,y=>f(y)),b=u.exports.useRef(!1),S=p?Boolean(p.closest("form")):!0,[v=!1,C]=ht({prop:o,defaultProp:i,onChange:d}),$=u.exports.useRef(v);return u.exports.useEffect(()=>{const y=p==null?void 0:p.form;if(y){const R=c(()=>C($.current),"reset");return y.addEventListener("reset",R),()=>y.removeEventListener("reset",R)}},[p,C]),u.exports.createElement(St,{scope:r,state:v,disabled:a},u.exports.createElement(ee.button,P({type:"button",role:"checkbox","aria-checked":T(v)?"mixed":v,"aria-required":l,"data-state":Ne(v),"data-disabled":a?"":void 0,disabled:a,value:s},h,{ref:m,onKeyDown:he(e.onKeyDown,y=>{y.key==="Enter"&&y.preventDefault()}),onClick:he(e.onClick,y=>{C(R=>T(R)?!0:!R),S&&(b.current=y.isPropagationStopped(),b.current||y.stopPropagation())})})),S&&u.exports.createElement(It,{control:p,bubbles:!b.current,name:n,value:s,checked:v,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),wt="CheckboxIndicator",Rt=u.exports.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...o}=e,i=kt(wt,r);return u.exports.createElement(Me,{present:n||T(i.state)||i.state===!0},u.exports.createElement(ee.span,P({"data-state":Ne(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),It=c(e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=u.exports.useRef(null),l=bt(r),a=$t(t);return u.exports.useEffect(()=>{const s=i.current,d=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(d,"checked").set;if(l!==r&&p){const f=new Event("click",{bubbles:n});s.indeterminate=T(r),p.call(s,T(r)?!1:r),s.dispatchEvent(f)}},[l,r,n]),u.exports.createElement("input",P({type:"checkbox","aria-hidden":!0,defaultChecked:T(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function T(e){return e==="indeterminate"}c(T,"$e698a72e93240346$var$isIndeterminate");function Ne(e){return T(e)?"indeterminate":e?"checked":"unchecked"}c(Ne,"$e698a72e93240346$var$getState");const zt=Ct,Et=Rt;var Bt=Object.defineProperty,Pt=Object.defineProperties,At=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,me=c((e,t,r)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,"__defNormalProp"),L=c((e,t)=>{for(var r in t||(t={}))Le.call(t,r)&&me(e,r,t[r]);if(oe)for(var r of oe(t))_e.call(t,r)&&me(e,r,t[r]);return e},"__spreadValues"),ae=c((e,t)=>Pt(e,At(t)),"__spreadProps"),ie=c((e,t)=>{var r={};for(var n in e)Le.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&oe)for(var n of oe(e))t.indexOf(n)<0&&_e.call(e,n)&&(r[n]=e[n]);return r},"__objRest"),jt={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},Mt={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},Wt={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Nt={default:"Roboto, sans-serif",code:"monospace"},Lt={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},_t={regular:"400",medium:"500",bold:"700"},Tt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},k="colors",I="sizes",g="space",Te={gap:g,gridGap:g,columnGap:g,gridColumnGap:g,rowGap:g,gridRowGap:g,inset:g,insetBlock:g,insetBlockEnd:g,insetBlockStart:g,insetInline:g,insetInlineEnd:g,insetInlineStart:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,marginBlock:g,marginBlockEnd:g,marginBlockStart:g,marginInline:g,marginInlineEnd:g,marginInlineStart:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,paddingBlock:g,paddingBlockEnd:g,paddingBlockStart:g,paddingInline:g,paddingInlineEnd:g,paddingInlineStart:g,top:g,right:g,bottom:g,left:g,scrollMargin:g,scrollMarginTop:g,scrollMarginRight:g,scrollMarginBottom:g,scrollMarginLeft:g,scrollMarginX:g,scrollMarginY:g,scrollMarginBlock:g,scrollMarginBlockEnd:g,scrollMarginBlockStart:g,scrollMarginInline:g,scrollMarginInlineEnd:g,scrollMarginInlineStart:g,scrollPadding:g,scrollPaddingTop:g,scrollPaddingRight:g,scrollPaddingBottom:g,scrollPaddingLeft:g,scrollPaddingX:g,scrollPaddingY:g,scrollPaddingBlock:g,scrollPaddingBlockEnd:g,scrollPaddingBlockStart:g,scrollPaddingInline:g,scrollPaddingInlineEnd:g,scrollPaddingInlineStart:g,fontSize:"fontSizes",background:k,backgroundColor:k,backgroundImage:k,borderImage:k,border:k,borderBlock:k,borderBlockEnd:k,borderBlockStart:k,borderBottom:k,borderBottomColor:k,borderColor:k,borderInline:k,borderInlineEnd:k,borderInlineStart:k,borderLeft:k,borderLeftColor:k,borderRight:k,borderRightColor:k,borderTop:k,borderTopColor:k,caretColor:k,color:k,columnRuleColor:k,fill:k,outline:k,outlineColor:k,stroke:k,textDecorationColor:k,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:I,minBlockSize:I,maxBlockSize:I,inlineSize:I,minInlineSize:I,maxInlineSize:I,width:I,minWidth:I,maxWidth:I,height:I,minHeight:I,maxHeight:I,flexBasis:I,gridTemplateColumns:I,gridTemplateRows:I,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ot=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),q=c(()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Ot))(t);return o in e?e[o]:e[o]=r(t,...n)}},"o"),O=Symbol.for("sxs.internal"),pe=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),be=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:Ft}=Object.prototype,ue=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),Dt=/\s+(?![^()]*\))/,G=c(e=>t=>e(...typeof t=="string"?String(t).split(Dt):[t]),"p"),$e={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:G((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:G((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:G((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:G((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:G((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:G((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},ce=/([\d.]+)([^]*)/,Vt=c((e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,"f"),Ht=c((e,t)=>e in Ut&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${ue(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${ue(e)}:${n}fit-content`)+i):String(t),"m"),Ut={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},N=c(e=>e?e+"-":"","S"),Oe=c((e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,l,a)=>l=="$"==!!i?n:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?N(t)+(a.includes("$")?"":N(r))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),Gt=/\s*,\s*(?![^()]*\))/,Yt=Object.prototype.toString,Y=c((e,t,r,n,o)=>{let i,l,a;const s=c((d,h,p)=>{let f,m;const b=c(S=>{for(f in S){const $=f.charCodeAt(0)===64,y=$&&Array.isArray(S[f])?S[f]:[S[f]];for(m of y){const R=/[A-Z]/.test(C=f)?C:C.replace(/-[^]/g,z=>z[1].toUpperCase()),Z=typeof m=="object"&&m&&m.toString===Yt&&(!n.utils[R]||!h.length);if(R in n.utils&&!Z){const z=n.utils[R];if(z!==l){l=z,b(z(m)),l=null;continue}}else if(R in $e){const z=$e[R];if(z!==a){a=z,b(z(m)),a=null;continue}}if($&&(v=f.slice(1)in n.media?"@media "+n.media[f.slice(1)]:f,f=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(z,_,E,H,A,j)=>{const M=ce.test(_),K=.0625*(M?-1:1),[te,re]=M?[H,_]:[_,H];return"("+(E[0]==="="?"":E[0]===">"===M?"max-":"min-")+te+":"+(E[0]!=="="&&E.length===1?re.replace(ce,(He,se,le)=>Number(se)+K*(E===">"?1:-1)+le):re)+(A?") and ("+(A[0]===">"?"min-":"max-")+te+":"+(A.length===1?j.replace(ce,(He,se,le)=>Number(se)+K*(A===">"?-1:1)+le):j):"")+")"})),Z){const z=$?p.concat(f):[...p],_=$?[...h]:Vt(h,f.split(Gt));i!==void 0&&o(xe(...i)),i=void 0,s(m,_,z)}else i===void 0&&(i=[[],h,p]),f=$||f.charCodeAt(0)!==36?f:`--${N(n.prefix)}${f.slice(1).replace(/\$/g,"-")}`,m=Z?m:typeof m=="number"?m&&R in qt?String(m)+"px":String(m):Oe(Ht(R,m==null?"":m),n.prefix,n.themeMap[R]),i[0].push(`${$?`${f} `:`${ue(f)}:`}${m}`)}}var v,C},"p2");b(d),i!==void 0&&o(xe(...i)),i=void 0},"a2");s(e,t,r)},"$"),xe=c((e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,"x"),qt={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ve=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),F=c(e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=ve(r%52)+n;return ve(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),"z"),X=["themed","global","styled","onevar","resonevar","allvar","inline"],Zt=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),Kt=c(e=>{let t;const r=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},"r2"),n=c(()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(Zt(a)){for(let s=0,d=a.cssRules;d[s];++s){const h=Object(d[s]);if(h.type!==1)continue;const p=Object(d[s+1]);if(p.type!==4)continue;++s;const{cssText:f}=h;if(!f.startsWith("--sxs"))continue;const m=f.slice(14,-3).trim().split(/\s+/),b=X[m[0]];b&&(t||(t={sheet:a,reset:n,rules:{},toString:r}),t.rules[b]={group:p,index:s,cache:new Set(m)})}if(t)break}if(!t){const a=c((s,d)=>({type:d,cssRules:[],insertRule(h,p){this.cssRules.splice(p,0,a(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:s}}),"i3");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:l}=t;for(let a=X.length-1;a>=0;--a){const s=X[a];if(!l[s]){const d=X[a+1],h=l[d]?l[d].index:i.cssRules.length;i.insertRule("@media{}",h),i.insertRule(`--sxs{--sxs:${a}}`,h),l[s]={group:i.cssRules[h+1],index:h,cache:new Set([a])}}Jt(l[s])}},"n2");return n(),t},"E"),Jt=c(e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},"v"),J=Symbol(),Xt=q(),ye=c((e,t)=>Xt(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[O]){n.type==null&&(n.type=o[O].type);for(const i of o[O].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(Qt(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),er(e,n,t)}),"M"),Qt=c((e,t)=>{var r=e,{variants:n,compoundVariants:o,defaultVariants:i}=r,l=ie(r,["variants","compoundVariants","defaultVariants"]);const a=`${N(t.prefix)}c-${F(l)}`,s=[],d=[],h=Object.create(null),p=[];for(const b in i)h[b]=String(i[b]);if(typeof n=="object"&&n)for(const b in n){f=h,m=b,Ft.call(f,m)||(h[b]="undefined");const S=n[b];for(const v in S){const C={[b]:String(v)};String(v)==="undefined"&&p.push(b);const $=S[v],y=[C,$,!be($)];s.push(y)}}var f,m;if(typeof o=="object"&&o)for(const b of o){let S=b,{css:v}=S,C=ie(S,["css"]);v=typeof v=="object"&&v||{};for(const y in C)C[y]=String(C[y]);const $=[C,v,!be(v)];d.push($)}return[a,l,s,d,h,p]},"C"),er=c((e,t,r)=>{const[n,o,i,l]=tr(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(p=>{function f(){for(let m=0;m<f[J].length;m++){const[b,S]=f[J][m];p.rules[b].apply(S)}return f[J]=[],null}return c(f,"t3"),f[J]=[],f.rules={},X.forEach(m=>f.rules[m]={apply:b=>f[J].push([m,b])}),f})(r):null,s=(a||r).rules,d=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,h=c(p=>{p=typeof p=="object"&&p||rr;const f=p,{css:m}=f,b=ie(f,["css"]),S={};for(const $ in i)if(delete b[$],$ in p){let y=p[$];typeof y=="object"&&y?S[$]=L({"@initial":i[$]},y):(y=String(y),S[$]=y!=="undefined"||l.has($)?y:i[$])}else S[$]=i[$];const v=new Set([...o]);for(const[$,y,R,Z]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),Y(y,[`.${$}`],[],e,E=>{s.styled.apply(E)}));const z=Se(R,S,e.media),_=Se(Z,S,e.media,!0);for(const E of z)if(E!==void 0)for(const[H,A,j]of E){const M=`${$}-${F(A)}-${H}`;v.add(M);const K=(j?r.rules.resonevar:r.rules.onevar).cache,te=j?s.resonevar:s.onevar;K.has(M)||(K.add(M),Y(A,[`.${M}`],[],e,re=>{te.apply(re)}))}for(const E of _)if(E!==void 0)for(const[H,A]of E){const j=`${$}-${F(A)}-${H}`;v.add(j),r.rules.allvar.cache.has(j)||(r.rules.allvar.cache.add(j),Y(A,[`.${j}`],[],e,M=>{s.allvar.apply(M)}))}}if(typeof m=="object"&&m){const $=`${n}-i${F(m)}-css`;v.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),Y(m,[`.${$}`],[],e,y=>{s.inline.apply(y)}))}for(const $ of String(p.className||"").trim().split(/\s+/))$&&v.add($);const C=b.className=[...v].join(" ");return{type:t.type,className:C,selector:d,props:b,toString:()=>C,deferredInjector:a}},"p2");return pe(h,{className:n,selector:d,[O]:t,toString:()=>(r.rules.styled.cache.has(n)||h(),n)})},"P"),tr=c(e=>{let t="";const r=[],n={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),r.push(i),o.push(...a);for(const s in l){const d=l[s];(n[s]===void 0||d!=="undefined"||a.includes(d))&&(n[s]=d)}}return[t,r,n,new Set(o)]},"L"),Se=c((e,t,r,n)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,d=0,h=!1;for(s in i){const p=i[s];let f=t[s];if(f!==p){if(typeof f!="object"||!f)continue e;{let m,b,S=0;for(const v in f){if(p===String(f[v])){if(v!=="@initial"){const C=v.slice(1);(b=b||[]).push(C in r?r[C]:v.replace(/^@media ?/,"")),h=!0}d+=S,m=!0}++S}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!m)continue e}}}(o[d]=o[d]||[]).push([n?"cv":`${s}-${i[s]}`,l,h])}return o},"O"),rr={},nr=q(),or=c((e,t)=>nr(e,()=>(...r)=>{const n=c(()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=F(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}Y(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n2");return pe(n,{toString:n})}),"D"),ir=q(),ar=c((e,t)=>ir(e,()=>r=>{const n=`${N(e.prefix)}k-${F(r)}`,o=c(()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];Y(r,[],[],e,a=>i.push(a));const l=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(l)}return n},"i2");return pe(o,{get name(){return o()},toString:o})}),"V"),sr=c(class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+N(this.prefix)+N(this.scale)+this.token}toString(){return this.computedValue}},"G"),lr=q(),cr=c((e,t)=>lr(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${N(e.prefix)}t-${F(n)}`}`,i={},l=[];for(const s in n){i[s]={};for(const d in n[s]){const h=`--${N(e.prefix)}${s}-${d}`,p=Oe(String(n[s][d]),e.prefix,s);i[s][d]=new sr(d,p,s,e.prefix),l.push(`${h}:${p}`)}}const a=c(()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const s=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(s)}return r},"s2");return ae(L({},i),{get className(){return a()},selector:o,toString:a})}),"J"),dr=q(),ur=q(),fr=c(e=>{const t=(r=>{let n=!1;const o=dr(r,i=>{n=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},h={prefix:l,media:a,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||L({},Te),utils:typeof i.utils=="object"&&i.utils||{}},p=Kt(s),f={css:ye(h,p),globalCss:or(h,p),keyframes:ar(h,p),createTheme:cr(h,p),reset(){p.reset(),f.theme.toString()},theme:{},sheet:p,config:h,prefix:l,getCssText:p.toString,toString:p.toString};return String(f.theme=f.createTheme(d)),f});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>ur(r,()=>{const o=ye(r,n);return(...i)=>{const l=o(...i),a=l[O].type,s=U.forwardRef((d,h)=>{const p=d&&d.as||a,{props:f,deferredInjector:m}=l(d);return delete f.as,f.ref=h,m?U.createElement(U.Fragment,null,U.createElement(p,f),U.createElement(m,null)):U.createElement(p,f)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[O]=l[O],s}}))(t),t},"q"),{styled:w,css:Or,globalCss:Fr,keyframes:Fe,getCssText:Dr,theme:Vr,createTheme:Hr,config:Ur}=fr({themeMap:ae(L({},Te),{height:"space",width:"space"}),theme:{colors:jt,fontSizes:Lt,fontWeights:_t,fonts:Nt,lineHeights:Tt,radii:Wt,space:Mt}}),pr=w("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});pr.displayName="Box";var De=w("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});De.displayName="Text";var gr=w("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});gr.displayName="Heading";var hr=w(ft,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),mr=w(pt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),br=w(gt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",variants:{mode:{light:{backgroundColor:"$gray100",color:"$gray300"},dark:{backgroundColor:"$gray600",color:"$gray800"}}},defaultVariants:{mode:"dark"},svg:{width:"$6",height:"$6"}});function $r(e){return W(hr,{children:[x(mr,L({},e)),x(br,ae(L({delayMs:600},e),{children:x(Je,{})}))]})}c($r,"Avatar2");$r.displayName="Avatar";var xr=w("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray200"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});xr.displayName="Button";var vr=w("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),yr=w("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),Sr=w("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Ve=u.exports.forwardRef((e,t)=>{var r=e,{prefix:n}=r,o=ie(r,["prefix"]);return W(vr,{children:[!!n&&x(yr,{children:n}),x(Sr,L({ref:t},o))]})});Ve.displayName="TextInput";var kr=w("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});kr.displayName="TextArea";var Cr=w(zt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),wr=Fe({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Rr=Fe({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Ir=w(Et,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${wr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Rr} 200ms ease-out`}});function zr(e){return x(Cr,ae(L({},e),{children:x(Ir,{asChild:!0,children:x(Ze,{weight:"bold"})})}))}c(zr,"Checkbox2");zr.displayName="Checkbox";var Er=w("div",{}),Br=w(De,{color:"$gray200",defaultVariants:{size:"xs"}}),Pr=w("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Ar=w("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function jr({size:e,currentStep:t=1}){return W(Er,{children:[W(Br,{children:["Passo ",t," de ",e]}),x(Pr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>x(Ar,{active:t>=r},r))})]})}c(jr,"MultiStep");jr.displayName="MultiStep";Ve.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{$r as A,pr as B,zr as C,gr as H,we as I,jr as M,De as T,xr as a,kr as b,Ve as c,ke as r};
//# sourceMappingURL=index.c073d931.js.map