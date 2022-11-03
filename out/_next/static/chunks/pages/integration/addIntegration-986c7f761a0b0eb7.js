(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9836],{14035:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integration/addIntegration",function(){return a(5075)}])},14101:function(e,t,a){"use strict";var l=a(85893);t.Z=function(e){var t=e.title,a=e.subtitle;return(0,l.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,l.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:t}),(0,l.jsx)("h2",{className:"text-sm text-secondary",children:a})]})}},5075:function(e,t,a){"use strict";a.r(t);var l=a(47568),n=a(828),s=a(29815),i=a(20414),r=a(85893),c=a(67294),o=a(14101),u=a(64298),d=a(12596),h=a(11163),m=a(34120),p=a(30882),x=a(47426),f=a(94379),b=a(52486),g=a(59936),j=a(9591);t.default=(0,m.X)((function(){var e=(0,h.useRouter)(),t=(0,c.useState)({}),a=(t[0],t[1]),m=(0,c.useState)(void 0),v=m[0],N=m[1],w=(0,c.useState)(!1),k=w[0],_=w[1],S=(0,c.useState)(!1),y=S[0],E=S[1],I=(0,c.useState)([]),q=I[0],C=I[1],T=(0,c.useState)([]),A=T[0],Z=T[1],D=(0,u.cI)(),P=D.register,z=D.handleSubmit,L=(D.watch,D.errors),R=(0,n.Z)(c.useState([]),2),U=R[0],B=R[1],H=(0,n.Z)(c.useState([]),2),O=H[0],X=H[1],F=[188,13],M=function(e){console.log("The tag at index "+e+" was clicked")},V=function(){var e=(0,l.Z)((function(){var e;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return e=localStorage.getItem("token"),[4,p.ax.get("/organizations",{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){C(null===e||void 0===e?void 0:e.data)})).catch((function(e){console.error("get /organizations error",e)}))];case 1:return t.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),W=null===q||void 0===q?void 0:q.map((function(e){return{label:e.name,value:e.id}}));return(0,c.useEffect)((function(){0===q.length&&V()}),[]),(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(o.Z,{title:"Create Integration",subtitle:""}),"success"===(null===v||void 0===v?void 0:v.type)&&(0,r.jsx)("div",{className:"flex flex-wrap w-full",children:(0,r.jsx)("div",{className:"p-2",children:f.fn.success("Added integration successfully","Success")})}),"error"===(null===v||void 0===v?void 0:v.type)&&(0,r.jsx)("div",{className:"flex flex-wrap w-full",children:(0,r.jsx)("div",{className:"p-2",children:f.fn.error(L,"Error")})}),(0,r.jsxs)("form",{onSubmit:z((function(t){t.requires_access=y,t.requires_approval=k;var l=U.map((function(e){return e.id})),n=O.map((function(e){return e.id}));t.tags=l,t.param_names=n,t.access_granted_to=A;var s=localStorage.getItem("token");p.ax.post("/integrations",t,{headers:{Authorization:"Bearer ".concat(s)}}).then((function(t){a(t.data),N({type:"success"}),e.push("/integration")})).catch((function(t){N({type:"error",message:t.response.data.message}),setTimeout((function(){N(void 0),e.push("/integration")}),1e3)}))})),className:"flex flex-col text-sm mb-4 lg:w-1/3",children:[(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Name"}),(0,r.jsx)("input",{name:"name",type:"text",ref:P({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Integartion name",required:!0})]})}),(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Slug"}),(0,r.jsx)("input",{name:"slug",type:"text",ref:P({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Integration Slug",required:!0,maxLength:255,pattern:"[a-z0-9\\-]+"})]})}),(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Channel Slug"}),(0,r.jsx)("input",{name:"channel_slug",type:"text",ref:P({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Integration Channel Slug ",required:!0,maxLength:255,pattern:"[a-z0-9\\-]+"})]})}),(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Icon Url"}),(0,r.jsx)("input",{name:"icon_url",type:"url",ref:P({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Integration Icon URL ",required:!0})]})}),(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Description"}),(0,r.jsx)("input",{name:"description",type:"text",ref:P({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Integration Description ",required:!0})]})}),(0,r.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,r.jsx)("span",{className:"text-default",children:"Tags"}),(0,r.jsx)(b.V,{tags:U,delimiters:F,handleDelete:function(e){B(U.filter((function(t,a){return a!==e})))},handleAddition:function(e){B((0,s.Z)(U).concat([e]))},handleDrag:function(e,t,a){var l=U.slice();l.splice(t,1),l.splice(a,0,e),B(l)},handleTagClick:M,inputFieldPosition:"bottom",autocomplete:!0})]}),(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Api Url"}),(0,r.jsx)("input",{name:"api_url",type:"url",ref:P({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Integration Api URL ",required:!0})]})}),(0,r.jsx)("div",{className:"w-full mb-4",children:(0,r.jsxs)("label",{className:"block",children:[(0,r.jsx)("span",{className:"text-default",children:"Http Method"}),(0,r.jsx)("select",{name:"http_method",ref:P(),className:"form-select block w-full mt-1 text-xs",children:x.W.map((function(e){return(0,r.jsx)("option",{value:e.value,children:e.label})}))})]})}),(0,r.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,r.jsx)("span",{className:"text-default",children:"Parameters"}),(0,r.jsx)(b.V,{tags:O,delimiters:F,handleDelete:function(e){X(O.filter((function(t,a){return a!==e})))},handleAddition:function(e){X((0,s.Z)(O).concat([e]))},handleDrag:function(e,t,a){var l=O.slice();l.splice(t,1),l.splice(a,0,e),X(l)},handleTagClick:M,inputFieldPosition:"bottom",autocomplete:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-default",children:"Requires Approval"}),(0,r.jsx)(g.default,{onChange:function(){return _(!k)},checked:k,handleDiameter:24,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"react-switch"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-default",children:"Requires Access"}),(0,r.jsx)(g.default,{onChange:function(){return E(!y)},checked:y,handleDiameter:24,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.2)",height:20,width:48,className:"react-switch"})]}),y&&(0,r.jsx)("div",{style:{width:"300px"},children:(0,r.jsx)(j.ZP,{options:W,placeholder:"Select organizations ...",isMulti:!0,onChange:function(e){var t=[];e.map((function(e){t.push(e.value)})),Z((0,s.Z)(t))}})}),(0,r.jsx)("div",{className:"w-full",style:{marginTop:"10px"},children:(0,r.jsx)("input",{type:"submit",className:"btn btn-default btn-block btn-indigo ",value:"Submit"})})]})]})}))},47426:function(e,t,a){"use strict";a.d(t,{W:function(){return l}});a(50196).ZP.create({baseURL:"https://api.mtalkz.cloud/api",withCredentials:!0,headers:{"Content-type":"application/json",Accept:"application/json"}});var l=[{value:"get",label:"GET"},{value:"post",label:"POST"},{value:"put",label:"PUT"},{value:"delete",label:"DELETE"},{value:"head",label:"HEAD"},{value:"patch",label:"PATCH"}]}},function(e){e.O(0,[5367,196,9350,4298,442,5288,7106,9774,2888,179],(function(){return t=14035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);