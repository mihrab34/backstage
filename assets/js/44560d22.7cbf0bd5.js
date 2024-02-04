/*! For license information please see 44560d22.7cbf0bd5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[199813],{335807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(824246),i=n(511151);const o={id:"configuring",title:"Configuring Utility APIs",sidebar_label:"Configuring",description:"Configuring, extending, and overriding utility APIs"},s=void 0,a={id:"frontend-system/utility-apis/configuring",title:"Configuring Utility APIs",description:"Configuring, extending, and overriding utility APIs",source:"@site/../docs/frontend-system/utility-apis/04-configuring.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/configuring",permalink:"/docs/frontend-system/utility-apis/configuring",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/utility-apis/04-configuring.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"configuring",title:"Configuring Utility APIs",sidebar_label:"Configuring",description:"Configuring, extending, and overriding utility APIs"},sidebar:"docs",previous:{title:"Consuming APIs",permalink:"/docs/frontend-system/utility-apis/consuming"},next:{title:"Migrating",permalink:"/docs/frontend-system/utility-apis/migrating"}},u={},c=[{value:"Configuring",id:"configuring",level:2},{value:"Attaching extensions to inputs",id:"attaching-extensions-to-inputs",level:2},{value:"Replacing a Utility API implementation",id:"replacing-a-utility-api-implementation",level:2}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",h2:"h2",a:"a",code:"code",pre:"pre"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Utility APIs are extensions and can therefore optionally be amended with configurability, as well as inputs that other extensions attach themselves to. This section describes how to make use of that as a consumer of such utility APIs."}),"\n",(0,r.jsx)(t.h2,{id:"configuring",children:"Configuring"}),"\n",(0,r.jsxs)(t.p,{children:["To configure your Utility API extension, first you'll need to know its ID. That ID is formed from the API ref ID; check ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"the naming patterns docs"})," for details."]}),"\n",(0,r.jsxs)(t.p,{children:["Our example work API from ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/creating",children:"the creating section"})," would have the ID ",(0,r.jsx)(t.code,{children:"api:plugin.example.work"}),". You configure it and all other extensions under the ",(0,r.jsx)(t.code,{children:"app.extensions"})," section of your app-config."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="in e.g. app-config.yaml or app-config.production.yaml"',children:"app:\n  extensions:\n    - api:plugin.example.work:\n        config:\n          goSlow: false\n    -  # ... other extensions\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It's important to note that the ",(0,r.jsx)(t.code,{children:"extensions"})," are a list (mind the initial ",(0,r.jsx)(t.code,{children:"-"}),"), and that the ",(0,r.jsx)(t.code,{children:"api:plugin.example.work"})," entry is an object such that the ",(0,r.jsx)(t.code,{children:"config"})," key needs to be indented below it. If you do not get those two pieces right, the application may not start up correctly."]}),"\n",(0,r.jsxs)(t.p,{children:["The extension config schema will tell you what parameters it supports. Here we override the ",(0,r.jsx)(t.code,{children:"goSlow"})," extension config value, which replaces the default."]}),"\n",(0,r.jsx)(t.h2,{id:"attaching-extensions-to-inputs",children:"Attaching extensions to inputs"}),"\n",(0,r.jsxs)(t.p,{children:["Like with other extension types, you add input attachments to a Utility API by declaring the ",(0,r.jsx)(t.code,{children:"attachTo"})," section of that attachment to point to the Utility APIs ID and input name."]}),"\n",(0,r.jsxs)(t.p,{children:["Well written input-enabled extension often have extension creator functions that help you make such attachments. Those functions typically set the ",(0,r.jsx)(t.code,{children:"attachTo"})," section correctly on your behalf so that you don't have to figure them out."]}),"\n",(0,r.jsx)(t.h2,{id:"replacing-a-utility-api-implementation",children:"Replacing a Utility API implementation"}),"\n",(0,r.jsxs)(t.p,{children:["Like with other extension types, you replace Utility APIs with your own custom implementation using ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension overrides"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="in your app"',children:"/* highlight-add-start */\nimport { createExtensionOverrides } from '@backstage/frontend-plugin-api';\n\nclass CustomWorkImpl implements WorkApi {\n  /* ... */\n}\n\nconst myOverrides = createExtensionOverrides({\n  extensions: [\n    createApiExtension({\n      api: workApiRef,\n      factory: () =>\n        createApiFactory({\n          api: workApiRef,\n          factory: () => new CustomWorkImpl(),\n        }),\n    }),\n  ],\n});\n/* highlight-add-end */\n\n// Remember to pass the overrides to your createApp\nexport default createApp({\n  features: [\n    // ... other features\n    /* highlight-add-next-line */\n    myOverrides,\n  ],\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In this example the overriding extension is kept minimal, but just like any other extension it can also have ",(0,r.jsx)(t.code,{children:"deps"}),", configurability, and inputs. Check out ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/creating",children:"the Creating section"})," for more details about that."]}),"\n",(0,r.jsx)(t.p,{children:"When you create a replacement extension, in general you may want to mimic its extension config schema or input shapes where applicable. This makes it an easier thing to slot in to an app, since it'll be responding to extensibility the same way as the original one did."})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=g.prototype;var v=b.prototype=new x;v.constructor=b,y(v,g.prototype),v.isPureReactComponent=!0;var _=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,i)&&!w.hasOwnProperty(i)&&(o[i]=t[i]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===o[i]&&(o[i]=u[i]);return{$$typeof:n,type:e,key:s,ref:a,props:o,_owner:k.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,i,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===o?"."+P(u,0):o,_(s)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),E(s,t,i,"",(function(e){return e}))):null!=s&&(I(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",_(e))for(var c=0;c<e.length;c++){var l=o+P(a=e[c],c);u+=E(a,t,i,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=E(a=a.value,t,i,l=o+P(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return E(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=i,t.Profiler=s,t.PureComponent=b,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=y({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)j.call(t,c)&&!w.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:n,type:e.type,key:o,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(i.Provider,{value:a},t)}}}]);