(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2495],{46301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/organization/update/[updateID]",function(){return n(73331)}])},5556:function(e,t,n){"use strict";n.d(t,{RT:function(){return c},Xy:function(){return s},ZN:function(){return i},nA:function(){return l}});var a=n(85893),r=(n(67294),n(94379)),s=function(){return(0,a.jsx)("button",{className:"btn btn-default bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.info("Info message")},children:"Info"})},l=function(){return(0,a.jsx)("button",{className:"btn btn-default bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.warning("Warning message","Close after 3000ms",3e3)},children:"Warning"})},i=function(){return(0,a.jsx)("button",{className:"btn btn-default bg-red-500 hover:bg-red-600 active:bg-red-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.error("Error message","Click me!",5e3,(function(){alert("callback")}))},children:"Error"})},c=function(){return(0,a.jsx)("button",{className:"btn btn-default bg-green-500 hover:bg-green-600 active:bg-green-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.success("Success message","Title here")},children:"Success"})}},14101:function(e,t,n){"use strict";var a=n(85893);t.Z=function(e){var t=e.title,n=e.subtitle;return(0,a.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,a.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:t}),(0,a.jsx)("h2",{className:"text-sm text-secondary",children:n})]})}},73331:function(e,t,n){"use strict";n.r(t);var a=n(47568),r=n(20414),s=n(85893),l=n(67294),i=n(12596),c=n(14101),u=n(64298),o=n(34120),d=n(11163),f=n(30882),h=n(94379);n(5556),n(6767);t.default=(0,o.X)((function(){var e=(0,d.useRouter)(),t=e.query.updateID,n=(0,l.useState)({}),o=n[0],m=n[1],x=(0,l.useState)(void 0),b=x[0],p=x[1],g=function(){var e=(0,a.Z)((function(){var e;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:return e=localStorage.getItem("token"),[4,f.ax.get("/organizations/".concat(t),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){m(e.data.organization),console.log(e.data.organization)})).catch((function(e){console.error("get /organizations error",e)}))];case 1:n.sent(),n.label=2;case 2:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){g()}),[]);var v=(0,u.cI)(),w=v.register,N=v.handleSubmit;v.watch,v.errors;return(0,s.jsxs)(i.Z,{children:[(0,s.jsx)(c.Z,{title:"Update Organization",subtitle:""}),"success"===(null===b||void 0===b?void 0:b.type)&&(0,s.jsx)("div",{className:"flex flex-wrap w-full",children:(0,s.jsx)("div",{className:"p-2",children:h.fn.success("Updated details successfully","Success")})}),"error"===(null===b||void 0===b?void 0:b.type)&&(0,s.jsx)("div",{className:"flex flex-wrap w-full",children:(0,s.jsx)("div",{className:"p-2",children:h.fn.error(b.message,"Error")})}),(0,s.jsx)("div",{className:"flex flex-wrap",children:(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("form",{onSubmit:N((function(n){var a=localStorage.getItem("token");f.ax.put("/organizations/".concat(t),n,{headers:{Authorization:"Bearer ".concat(a)}}).then((function(t){m(t.data),p({type:"success"}),e.push("/organization")})).catch((function(t){p({type:"error",message:t.response.data.message}),setTimeout((function(){p(void 0),e.push("/organization")}),1e3)}))})),className:"flex flex-col text-sm mb-4 lg:w-1/3",children:[(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("span",{className:"text-default",children:"Name"}),(0,s.jsx)("input",{name:"name",type:"text",ref:w({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter your name",defaultValue:o.name,required:!0,minLength:3,maxLength:40})]})}),(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("span",{className:"text-default",children:"Email address"}),(0,s.jsx)("input",{name:"email",type:"email",ref:w({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter your email",defaultValue:o.email,required:!0})]})}),(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("span",{className:"text-default",children:"Phone"}),(0,s.jsx)("input",{name:"phone",type:"text",ref:w({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter your phone no",defaultValue:o.phone,required:!0})]})}),(0,s.jsx)("div",{className:"w-full mb-4",children:(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("span",{className:"text-default",children:"Address"}),(0,s.jsx)("input",{name:"address",type:"text",ref:w({required:!0}),className:"form-input mt-1 text-xs block w-full bg-white",placeholder:"Enter your Address",defaultValue:o.address,required:!0})]})}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("input",{type:"submit",className:"btn btn-default btn-block btn-indigo btn-rounded",value:"Update"})})]})})})]})}))},5290:function(){},44241:function(){}},function(e){e.O(0,[5367,196,9350,4298,6767,7106,9774,2888,179],(function(){return t=46301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);