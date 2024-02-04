/*! For license information please see 2601c7f4.4ac76ded.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[484490],{98144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(824246),o=t(511151);const i={id:"plugin-auth-backend.providers",title:"providers",description:"API reference for providers"},u=void 0,a={id:"reference/plugin-auth-backend.providers",title:"providers",description:"API reference for providers",source:"@site/../docs/reference/plugin-auth-backend.providers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.providers",permalink:"/docs/reference/plugin-auth-backend.providers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.providers.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.providers",title:"providers",description:"API reference for providers"}},s={},l=[];function c(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-auth-backend.providers",children:(0,r.jsx)(n.code,{children:"providers"})})]}),"\n",(0,r.jsx)(n.p,{children:"All built-in auth provider integrations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'providers: Readonly<{\n    atlassian: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    auth0: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    awsAlb: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-aws-alb-provider").AwsAlbResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("@backstage/plugin-auth-backend-module-aws-alb-provider").AwsAlbResult>;\n            };\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    bitbucket: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            usernameMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n            userIdMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    bitbucketServer: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./bitbucketServer").BitbucketServerOAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("./bitbucketServer").BitbucketServerOAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<import("./bitbucketServer").BitbucketServerOAuthResult>;\n        }>;\n    }>;\n    cfAccess: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("./cloudflare-access").CloudflareAccessResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("./cloudflare-access").CloudflareAccessResult>;\n            };\n            cache?: import("@backstage/backend-plugin-api").CacheService | undefined;\n        }) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n        }>;\n    }>;\n    gcpIap: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-gcp-iap-provider").GcpIapResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("@backstage/plugin-auth-backend-module-gcp-iap-provider").GcpIapResult>;\n            };\n        }) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    github: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./github").GithubOAuthResult> | undefined;\n            signIn?: {\n                resolver: import("@backstage/plugin-auth-node").SignInResolver<import("./github").GithubOAuthResult>;\n            } | undefined;\n            stateEncoder?: import("./types").StateEncoder | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            usernameMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<import("./github").GithubOAuthResult>;\n        }>;\n    }>;\n    gitlab: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    google: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailLocalPartMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailMatchingUserEntityAnnotation: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    microsoft: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailLocalPartMatchingUserEntityName: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n            emailMatchingUserEntityAnnotation: () => import("@backstage/plugin-auth-node").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    oauth2: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    oauth2Proxy: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-oauth2-proxy-provider").OAuth2ProxyResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("@backstage/plugin-auth-backend-module-oauth2-proxy-provider").OAuth2ProxyResult>;\n            };\n        }) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    oidc: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("@backstage/plugin-auth-backend-module-oidc-provider").OidcAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("@backstage/plugin-auth-backend-module-oidc-provider").OidcAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n        }>;\n    }>;\n    okta: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    onelogin: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n    saml: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./saml").SamlAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("./saml").SamlAuthResult>;\n            } | undefined;\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: Readonly<{\n            nameIdMatchingUserEntityName(): import("./types").SignInResolver<import("./saml").SamlAuthResult>;\n        }>;\n    }>;\n    easyAuth: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./azure-easyauth").EasyAuthResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("./azure-easyauth").EasyAuthResult>;\n            };\n        } | undefined) => import("@backstage/plugin-auth-node").AuthProviderFactory;\n        resolvers: never;\n    }>;\n}>\n'})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,c=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)u.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||h}function v(){}function R(e,n,t){this.props=e,this.context=n,this.refs=y,this.updater=t||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var b=R.prototype=new v;b.constructor=R,m(b,g.prototype),b.isPureReactComponent=!0;var k=Array.isArray,A=Object.prototype.hasOwnProperty,S={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,r){var o,i={},u=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(u=""+n.key),n)A.call(n,o)&&!I.hasOwnProperty(o)&&(i[o]=n[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:t,type:e,key:u,ref:a,props:i,_owner:S.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var E=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function w(e,n,o,i,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return u=u(s=e),e=""===i?"."+P(s,0):i,k(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),w(u,n,o,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),n.push(u)),1;if(s=0,i=""===i?".":i+":",k(e))for(var l=0;l<e.length;l++){var c=i+P(a=e[l],l);s+=w(a,n,o,c,u)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(a=e.next()).done;)s+=w(a=a.value,n,o,c=i+P(a,l++),u);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function H(e,n,t){if(null==e)return e;var r=[],o=0;return w(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function x(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},C={transition:null},F={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:C,ReactCurrentOwner:S};n.Children={map:H,forEach:function(e,n,t){H(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return H(e,(function(){n++})),n},toArray:function(e){return H(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=g,n.Fragment=o,n.Profiler=u,n.PureComponent=R,n.StrictMode=i,n.Suspense=c,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,u=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,a=S.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)A.call(n,l)&&!I.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==s?s[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}return{$$typeof:t,type:e.type,key:i,ref:u,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=_,n.createFactory=function(e){var n=_.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=O,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:x}},n.memo=function(e,n){return{$$typeof:p,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=C.transition;C.transition={};try{e()}finally{C.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return j.current.useCallback(e,n)},n.useContext=function(e){return j.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return j.current.useDeferredValue(e)},n.useEffect=function(e,n){return j.current.useEffect(e,n)},n.useId=function(){return j.current.useId()},n.useImperativeHandle=function(e,n,t){return j.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return j.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return j.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return j.current.useMemo(e,n)},n.useReducer=function(e,n,t){return j.current.useReducer(e,n,t)},n.useRef=function(e){return j.current.useRef(e)},n.useState=function(e){return j.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return j.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return j.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(667294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||u:i(e),r.createElement(o.Provider,{value:a},n)}}}]);