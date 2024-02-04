"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4304],{"../plugins/home/src/homePageComponents/VisitedByType/Actions.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Actions});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@material-ui/core/esm/Button/Button.js"),_Context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../plugins/home/src/homePageComponents/VisitedByType/Context.tsx");const Actions=()=>{const{collapsed,setCollapsed,visits,numVisitsOpen,loading}=(0,_Context__WEBPACK_IMPORTED_MODULE_2__.Co)(),onClick=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>setCollapsed((prevCollapsed=>!prevCollapsed))),[setCollapsed]),label=collapsed?"View More":"View Less";return!loading&&visits.length<=numVisitsOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.c,{variant:"text",onClick,children:label})}},"../plugins/home/src/homePageComponents/VisitedByType/Content.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Content});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),VisitsApi=__webpack_require__("../plugins/home/src/api/VisitsApi.ts");function readFilterConfig(config){try{const field=config.getString("field"),operator=config.getString("operator"),value=function getValue(config){let value;try{value=config.getString("value")}catch(error){try{value=config.getNumber("value")}catch{}}return value}(config);return(0,VisitsApi._)(operator)&&void 0!==value?{field,operator,value}:void 0}catch(error){return}}function createFilterByQueryParamFromConfig(configs){try{return configs.map(readFilterConfig).filter(Boolean)}catch{return}}var makeStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),Collapse=__webpack_require__("../node_modules/@material-ui/core/esm/Collapse/Collapse.js"),Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js"),List=__webpack_require__("../node_modules/@material-ui/core/esm/List/List.js"),ListItem=__webpack_require__("../node_modules/@material-ui/core/esm/ListItem/ListItem.js"),ListItemAvatar=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js"),ListItemText=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"),Link=__webpack_require__("../packages/core-components/src/components/Link/Link.tsx");const useStyles=(0,makeStyles.c)((_theme=>({name:{marginLeft:"0.8rem",marginRight:"0.8rem"}}))),ItemName=({visit})=>{const classes=useStyles();return(0,jsx_runtime.jsx)(Typography.c,{component:Link.cH,to:visit.pathname,noWrap:!0,className:classes.name,children:visit.name})};try{ItemName.displayName="ItemName",ItemName.__docgenInfo={description:"",displayName:"ItemName",props:{visit:{defaultValue:null,description:"",name:"visit",required:!0,type:{name:"Visit"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitList/ItemName.tsx#ItemName"]={docgenInfo:ItemName.__docgenInfo,name:"ItemName",path:"../plugins/home/src/components/VisitList/ItemName.tsx#ItemName"})}catch(__react_docgen_typescript_loader_error){}var luxon=__webpack_require__("../node_modules/luxon/src/luxon.js");const ItemDetailHits=({visit})=>(0,jsx_runtime.jsxs)(Typography.c,{component:"span",variant:"caption",color:"textSecondary",children:[visit.hits," time",visit.hits>1?"s":""]}),ItemDetailTimeAgo=({visit})=>{const visitDate=luxon.CS.fromMillis(visit.timestamp);var _visitDate_toISO;return(0,jsx_runtime.jsx)(Typography.c,{component:"time",variant:"caption",color:"textSecondary",dateTime:null!==(_visitDate_toISO=visitDate.toISO())&&void 0!==_visitDate_toISO?_visitDate_toISO:void 0,children:visitDate>=luxon.CS.now().startOf("day")?visitDate.toFormat("HH:mm"):visitDate.toRelative()})},ItemDetail=({visit,type})=>"time-ago"===type?(0,jsx_runtime.jsx)(ItemDetailTimeAgo,{visit}):(0,jsx_runtime.jsx)(ItemDetailHits,{visit});try{ItemDetail.displayName="ItemDetail",ItemDetail.__docgenInfo={description:"",displayName:"ItemDetail",props:{visit:{defaultValue:null,description:"",name:"visit",required:!0,type:{name:"Visit"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"time-ago"'},{value:'"hits"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitList/ItemDetail.tsx#ItemDetail"]={docgenInfo:ItemDetail.__docgenInfo,name:"ItemDetail",path:"../plugins/home/src/components/VisitList/ItemDetail.tsx#ItemDetail"})}catch(__react_docgen_typescript_loader_error){}var Chip=__webpack_require__("../node_modules/@material-ui/core/esm/Chip/Chip.js"),pageTheme=__webpack_require__("../packages/theme/src/base/pageTheme.ts"),ref=__webpack_require__("../packages/catalog-model/src/entity/ref.ts");const ItemCategory_useStyles=(0,makeStyles.c)((theme=>({chip:{color:theme.palette.common.white,fontWeight:"bold",margin:0}}))),getColorByIndex=index=>{const variants=Object.keys(pageTheme.O2),variantIndex=index%variants.length;return pageTheme.O2[variants[variantIndex]][0]},getChipColor=entity=>{const defaultColor=getColorByIndex(0);if(!entity)return defaultColor;const foundIndex=["component","template","api","group","user","resource","system","domain","location"].indexOf(entity.kind.toLocaleLowerCase("en-US"));return-1===foundIndex?defaultColor:getColorByIndex(foundIndex+1)},ItemCategory=({visit})=>{const classes=ItemCategory_useStyles(),entity=(visit=>{try{var _visit_entityRef;return(0,ref.WK)(null!==(_visit_entityRef=null==visit?void 0:visit.entityRef)&&void 0!==_visit_entityRef?_visit_entityRef:"")}catch(e){return}})(visit);var _entity_kind;return(0,jsx_runtime.jsx)(Chip.c,{size:"small",className:classes.chip,label:(null!==(_entity_kind=null==entity?void 0:entity.kind)&&void 0!==_entity_kind?_entity_kind:"Other").toLocaleLowerCase("en-US"),style:{background:getChipColor(entity)}})};try{ItemCategory.displayName="ItemCategory",ItemCategory.__docgenInfo={description:"",displayName:"ItemCategory",props:{visit:{defaultValue:null,description:"",name:"visit",required:!0,type:{name:"Visit"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitList/ItemCategory.tsx#ItemCategory"]={docgenInfo:ItemCategory.__docgenInfo,name:"ItemCategory",path:"../plugins/home/src/components/VisitList/ItemCategory.tsx#ItemCategory"})}catch(__react_docgen_typescript_loader_error){}const VisitListItem_useStyles=(0,makeStyles.c)((_theme=>({avatar:{minWidth:0}}))),VisitListItem=({visit,detailType})=>{const classes=VisitListItem_useStyles();return(0,jsx_runtime.jsxs)(ListItem.c,{disableGutters:!0,children:[(0,jsx_runtime.jsx)(ListItemAvatar.c,{className:classes.avatar,children:(0,jsx_runtime.jsx)(ItemCategory,{visit})}),(0,jsx_runtime.jsx)(ListItemText.c,{primary:(0,jsx_runtime.jsx)(ItemName,{visit}),secondary:(0,jsx_runtime.jsx)(ItemDetail,{visit,type:detailType}),disableTypography:!0})]})};try{VisitListItem.displayName="VisitListItem",VisitListItem.__docgenInfo={description:"",displayName:"VisitListItem",props:{visit:{defaultValue:null,description:"",name:"visit",required:!0,type:{name:"Visit"}},detailType:{defaultValue:null,description:"",name:"detailType",required:!0,type:{name:"enum",value:[{value:'"time-ago"'},{value:'"hits"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitList/VisitListItem.tsx#VisitListItem"]={docgenInfo:VisitListItem.__docgenInfo,name:"VisitListItem",path:"../plugins/home/src/components/VisitList/VisitListItem.tsx#VisitListItem"})}catch(__react_docgen_typescript_loader_error){}const VisitListEmpty=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.c,{variant:"body2",color:"textSecondary",children:"There are no visits to show yet."}),(0,jsx_runtime.jsx)(Typography.c,{variant:"body2",color:"textSecondary",children:"Once you start using Backstage, your visits will appear here as a quick link to carry on where you left off."})]}),VisitListFew=()=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Typography.c,{variant:"body2",color:"textSecondary",children:"The more pages you visit, the more pages will appear here."})});var esm_extends=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),clsx_m=__webpack_require__("../node_modules/clsx/dist/clsx.m.js"),colorManipulator=__webpack_require__("../node_modules/@material-ui/core/esm/styles/colorManipulator.js"),withStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/withStyles.js"),Skeleton=react.forwardRef((function Skeleton(props,ref){var _props$animation=props.animation,animation=void 0===_props$animation?"pulse":_props$animation,classes=props.classes,className=props.className,_props$component=props.component,Component=void 0===_props$component?"span":_props$component,height=props.height,_props$variant=props.variant,variant=void 0===_props$variant?"text":_props$variant,width=props.width,other=(0,objectWithoutProperties.c)(props,["animation","classes","className","component","height","variant","width"]),hasChildren=Boolean(other.children);return react.createElement(Component,(0,esm_extends.c)({ref,className:(0,clsx_m.default)(classes.root,classes[variant],className,hasChildren&&[classes.withChildren,!width&&classes.fitContent,!height&&classes.heightAuto],!1!==animation&&classes[animation])},other,{style:(0,esm_extends.c)({width,height},other.style)}))}));const Skeleton_Skeleton=(0,withStyles.c)((function styles(theme){return{root:{display:"block",backgroundColor:(0,colorManipulator.W4)(theme.palette.text.primary,"light"===theme.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:theme.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(theme.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(Skeleton),VisitListSkeleton_useStyles=(0,makeStyles.c)((_theme=>({skeleton:{borderRadius:30}}))),VisitListItemSkeleton=()=>{const classes=VisitListSkeleton_useStyles();return(0,jsx_runtime.jsxs)(ListItem.c,{disableGutters:!0,children:[(0,jsx_runtime.jsx)(ListItemAvatar.c,{children:(0,jsx_runtime.jsx)(Skeleton_Skeleton,{className:classes.skeleton,variant:"rect",width:50,height:24})}),(0,jsx_runtime.jsx)(ListItemText.c,{primary:(0,jsx_runtime.jsx)(Skeleton_Skeleton,{variant:"text",width:"100%",height:28}),disableTypography:!0})]})},VisitListSkeleton=({numVisitsOpen,numVisitsTotal,collapsed})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Array(numVisitsOpen).fill(null).map(((_e,index)=>(0,jsx_runtime.jsx)(VisitListItemSkeleton,{},index))),numVisitsTotal>numVisitsOpen&&(0,jsx_runtime.jsx)(Collapse.c,{in:!collapsed,children:Array(numVisitsTotal-numVisitsOpen).fill(null).map(((_e,index)=>(0,jsx_runtime.jsx)(VisitListItemSkeleton,{},index)))})]});try{VisitListSkeleton.displayName="VisitListSkeleton",VisitListSkeleton.__docgenInfo={description:"",displayName:"VisitListSkeleton",props:{numVisitsOpen:{defaultValue:null,description:"",name:"numVisitsOpen",required:!0,type:{name:"number"}},numVisitsTotal:{defaultValue:null,description:"",name:"numVisitsTotal",required:!0,type:{name:"number"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitList/VisitListSkeleton.tsx#VisitListSkeleton"]={docgenInfo:VisitListSkeleton.__docgenInfo,name:"VisitListSkeleton",path:"../plugins/home/src/components/VisitList/VisitListSkeleton.tsx#VisitListSkeleton"})}catch(__react_docgen_typescript_loader_error){}const VisitList_useStyles=(0,makeStyles.c)((_theme=>({title:{marginBottom:"2rem"}}))),VisitList=({title,detailType,visits=[],numVisitsOpen=3,numVisitsTotal=8,collapsed=!0,loading=!1})=>{const classes=VisitList_useStyles();let listBody=(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});return listBody=loading?(0,jsx_runtime.jsx)(VisitListSkeleton,{numVisitsOpen,numVisitsTotal,collapsed}):0===visits.length?(0,jsx_runtime.jsx)(VisitListEmpty,{}):visits.length<numVisitsOpen?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[visits.map(((visit,index)=>(0,jsx_runtime.jsx)(VisitListItem,{visit,detailType},index))),(0,jsx_runtime.jsx)(VisitListFew,{})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[visits.slice(0,numVisitsOpen).map(((visit,index)=>(0,jsx_runtime.jsx)(VisitListItem,{visit,detailType},index))),visits.length>numVisitsOpen&&(0,jsx_runtime.jsx)(Collapse.c,{in:!collapsed,children:visits.slice(numVisitsOpen,numVisitsTotal).map(((visit,index)=>(0,jsx_runtime.jsx)(VisitListItem,{visit,detailType},index)))})]}),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Typography.c,{variant:"h5",className:classes.title,children:title}),(0,jsx_runtime.jsx)(List.c,{dense:!0,disablePadding:!0,children:listBody})]})};try{VisitList.displayName="VisitList",VisitList.__docgenInfo={description:"",displayName:"VisitList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},detailType:{defaultValue:null,description:"",name:"detailType",required:!0,type:{name:"enum",value:[{value:'"time-ago"'},{value:'"hits"'}]}},visits:{defaultValue:{value:"[]"},description:"",name:"visits",required:!1,type:{name:"Visit[]"}},numVisitsOpen:{defaultValue:{value:"3"},description:"",name:"numVisitsOpen",required:!1,type:{name:"number"}},numVisitsTotal:{defaultValue:{value:"8"},description:"",name:"numVisitsTotal",required:!1,type:{name:"number"}},collapsed:{defaultValue:{value:"true"},description:"",name:"collapsed",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/components/VisitList/VisitList.tsx#VisitList"]={docgenInfo:VisitList.__docgenInfo,name:"VisitList",path:"../plugins/home/src/components/VisitList/VisitList.tsx#VisitList"})}catch(__react_docgen_typescript_loader_error){}var Context=__webpack_require__("../plugins/home/src/homePageComponents/VisitedByType/Context.tsx");const VisitedByType=()=>{const{collapsed,numVisitsOpen,numVisitsTotal,visits,loading,kind}=(0,Context.Co)();return(0,jsx_runtime.jsx)(VisitList,{visits,title:"top"===kind?"Top Visited":"Recently Visited",detailType:"top"===kind?"hits":"time-ago",collapsed,numVisitsOpen,numVisitsTotal,loading})};var useApi=__webpack_require__("../packages/core-plugin-api/src/apis/system/useApi.tsx"),ConfigApi=__webpack_require__("../packages/core-plugin-api/src/apis/definitions/ConfigApi.ts"),useAsync=__webpack_require__("../node_modules/react-use/lib/useAsync.js");const Content=({visits,numVisitsOpen,numVisitsTotal,loading,kind})=>{const{setContext,setVisits,setLoading}=(0,Context.Co)();(0,react.useEffect)((()=>{const context={};context.kind=kind,visits?(context.visits=visits,context.loading=!1):loading&&(context.loading=loading),numVisitsOpen&&(context.numVisitsOpen=numVisitsOpen),numVisitsTotal&&(context.numVisitsTotal=numVisitsTotal),setContext((state=>({...state,...context})))}),[setContext,kind,visits,loading,numVisitsOpen,numVisitsTotal]);const config=(0,useApi.yk)(ConfigApi.c),visitsApi=(0,useApi.yk)(VisitsApi.C),{loading:reqLoading}=(0,useAsync.c)((async()=>{if(!visits&&!loading&&"recent"===kind){var _config_getOptionalConfigArray;const filterBy=createFilterByQueryParamFromConfig(null!==(_config_getOptionalConfigArray=config.getOptionalConfigArray("home.recentVisits.filterBy"))&&void 0!==_config_getOptionalConfigArray?_config_getOptionalConfigArray:[]);return await visitsApi.list({limit:null!=numVisitsTotal?numVisitsTotal:8,orderBy:[{field:"timestamp",direction:"desc"}],...filterBy&&{filterBy}}).then(setVisits)}if(!visits&&!loading&&"top"===kind){var _config_getOptionalConfigArray1;const filterBy=createFilterByQueryParamFromConfig(null!==(_config_getOptionalConfigArray1=config.getOptionalConfigArray("home.topVisits.filterBy"))&&void 0!==_config_getOptionalConfigArray1?_config_getOptionalConfigArray1:[]);return await visitsApi.list({limit:null!=numVisitsTotal?numVisitsTotal:8,orderBy:[{field:"hits",direction:"desc"}],...filterBy&&{filterBy}}).then(setVisits)}}),[visitsApi,visits,loading,setVisits]);return(0,react.useEffect)((()=>{loading||setLoading(reqLoading)}),[loading,setLoading,reqLoading]),(0,jsx_runtime.jsx)(VisitedByType,{})};try{Content.displayName="Content",Content.__docgenInfo={description:"Display recently visited pages for the homepage",displayName:"Content",props:{visits:{defaultValue:null,description:"",name:"visits",required:!1,type:{name:"Visit[]"}},numVisitsOpen:{defaultValue:null,description:"",name:"numVisitsOpen",required:!1,type:{name:"number"}},numVisitsTotal:{defaultValue:null,description:"",name:"numVisitsTotal",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"recent"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/VisitedByType/Content.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"../plugins/home/src/homePageComponents/VisitedByType/Content.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}},"../plugins/home/src/homePageComponents/VisitedByType/Context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Co:()=>useContext,yW:()=>ContextProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const defaultContextValueOnly={collapsed:!0,numVisitsOpen:3,numVisitsTotal:8,visits:[],loading:!0,kind:"recent"},defaultContextValue={...defaultContextValueOnly,setCollapsed:()=>{},setNumVisitsOpen:()=>{},setNumVisitsTotal:()=>{},setVisits:()=>{},setLoading:()=>{},setKind:()=>{},setContext:()=>{}},Context=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultContextValue),getFilteredSet=(setContext,contextKey)=>e=>setContext((state=>({...state,[contextKey]:"function"==typeof e?e(state[contextKey]):e}))),ContextProvider=({children})=>{const[context,setContext]=react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultContextValueOnly),{setCollapsed,setNumVisitsOpen,setNumVisitsTotal,setVisits,setLoading,setKind}=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({setCollapsed:getFilteredSet(setContext,"collapsed"),setNumVisitsOpen:getFilteredSet(setContext,"numVisitsOpen"),setNumVisitsTotal:getFilteredSet(setContext,"numVisitsTotal"),setVisits:getFilteredSet(setContext,"visits"),setLoading:getFilteredSet(setContext,"loading"),setKind:getFilteredSet(setContext,"kind")})),[setContext]),value={...context,setContext,setCollapsed,setNumVisitsOpen,setNumVisitsTotal,setVisits,setLoading,setKind};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value,children})},useContext=()=>{const value=react__WEBPACK_IMPORTED_MODULE_1__.useContext(Context);if(void 0===value)throw new Error("VisitedByType useContext found undefined ContextValue, <ContextProvider/> could be missing");return value};try{ContextProvider.displayName="ContextProvider",ContextProvider.__docgenInfo={description:"",displayName:"ContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/VisitedByType/Context.tsx#ContextProvider"]={docgenInfo:ContextProvider.__docgenInfo,name:"ContextProvider",path:"../plugins/home/src/homePageComponents/VisitedByType/Context.tsx#ContextProvider"})}catch(__react_docgen_typescript_loader_error){}}}]);