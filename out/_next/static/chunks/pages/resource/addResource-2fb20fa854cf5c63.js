(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[560],{51916:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resource/addResource",function(){return t(96291)}])},14101:function(e,s,t){"use strict";var l=t(85893);s.Z=function(e){var s=e.title,t=e.subtitle;return(0,l.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,l.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:s}),(0,l.jsx)("h2",{className:"text-sm text-secondary",children:t})]})}},96291:function(e,s,t){"use strict";t.r(s);var l=t(85893),r=t(67294),c=t(14101),a=t(64298),n=t(12596),i=t(11163),u=t(34120),o=t(30882),d=t(94379);s.default=(0,u.X)((function(){var e=(0,i.useRouter)(),s=(0,r.useState)({}),t=(s[0],s[1]),u=(0,r.useState)(void 0),x=u[0],m=u[1],f=(0,a.cI)(),h=f.register,p=f.handleSubmit,b=(f.watch,f.errors);return(0,l.jsxs)(n.Z,{children:[(0,l.jsx)(c.Z,{title:"Create Resource",subtitle:""}),"success"===(null===x||void 0===x?void 0:x.type)&&(0,l.jsx)("div",{className:"flex flex-wrap w-full",children:(0,l.jsx)("div",{className:"p-2",children:d.fn.success("Added resource successfully","Success")})}),"error"===(null===x||void 0===x?void 0:x.type)&&(0,l.jsx)("div",{className:"flex flex-wrap w-full",children:(0,l.jsx)("div",{className:"p-2",children:d.fn.error(b,"Error")})}),(0,l.jsxs)("form",{onSubmit:p((function(s){var l=localStorage.getItem("token");o.ax.post("/resources",s,{headers:{Authorization:"Bearer ".concat(l)}}).then((function(s){t(s.data),m({type:"success"}),e.push("/resource")})).catch((function(e){m({type:"error",err:e}),console.error("get /resources error",e)}))})),className:"flex flex-col text-sm mb-4 lg:w-1/3",children:[(0,l.jsxs)("div",{className:"w-full mb-4",children:[(0,l.jsxs)("label",{className:"block",children:[(0,l.jsx)("span",{className:"text-default",children:"Slug"}),(0,l.jsx)("input",{name:"slug",type:"text",ref:h({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Resource Slug",required:!0,maxLength:255})]}),b.slug&&(0,l.jsx)("p",{className:"mt-1 text-xs text-red-500",children:b.slug})]}),(0,l.jsxs)("div",{className:"w-full mb-4",children:[(0,l.jsxs)("label",{className:"block",children:[(0,l.jsx)("span",{className:"text-default",children:"Name"}),(0,l.jsx)("input",{name:"name",type:"text",ref:h({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Resource name",required:!0,maxLength:255})]}),b.name&&(0,l.jsx)("p",{className:"mt-1 text-xs text-red-500",children:b.name})]}),(0,l.jsxs)("div",{className:"w-full mb-4",children:[(0,l.jsxs)("label",{className:"block",children:[(0,l.jsx)("span",{className:"text-default",children:"Description"}),(0,l.jsx)("input",{name:"description",type:"text",ref:h({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter Resource Description",required:!0,maxLength:255})]}),b.description&&(0,l.jsx)("p",{className:"mt-1 text-xs text-red-500",children:b.description})]}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)("input",{type:"submit",className:"btn btn-default btn-block btn-indigo ",value:"Submit"})})]})]})}))}},function(e){e.O(0,[5367,196,9350,4298,7106,9774,2888,179],(function(){return s=51916,e(e.s=s);var s}));var s=e.O();_N_E=s}]);