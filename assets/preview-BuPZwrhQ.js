import{_ as s}from"./iframe-D5M7HUqt.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-PKQXORMH-zG7IQz7M.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-PKQXORMH-zG7IQz7M.js","assets/iframe-D5M7HUqt.js","assets/index-BLgStI3F.js","assets/_commonjsHelpers-BosuxZz1.js","assets/client-DwUp6xMF.js","assets/index-B99Sp-t6.js","assets/index-DLQXgI41.js","assets/index-ChkYyDtj.js","assets/index-J1TP6alb.js","assets/extends-CCbyfPlC.js","assets/index-CCc8drJn.js","assets/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
