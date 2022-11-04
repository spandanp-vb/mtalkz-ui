(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5533],{49177:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integration/view/[viewID]",function(){return i(43632)}])},5556:function(e,t,i){"use strict";i.d(t,{RT:function(){return c},Xy:function(){return a},ZN:function(){return l},nA:function(){return n}});var s=i(85893),r=(i(67294),i(94379)),a=function(){return(0,s.jsx)("button",{className:"btn btn-default bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.info("Info message")},children:"Info"})},n=function(){return(0,s.jsx)("button",{className:"btn btn-default bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.warning("Warning message","Close after 3000ms",3e3)},children:"Warning"})},l=function(){return(0,s.jsx)("button",{className:"btn btn-default bg-red-500 hover:bg-red-600 active:bg-red-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.error("Error message","Click me!",5e3,(function(){alert("callback")}))},children:"Error"})},c=function(){return(0,s.jsx)("button",{className:"btn btn-default bg-green-500 hover:bg-green-600 active:bg-green-600 text-white hover:text-white active:text-white",onClick:function(){return r.fn.success("Success message","Title here")},children:"Success"})}},14101:function(e,t,i){"use strict";var s=i(85893);t.Z=function(e){var t=e.title,i=e.subtitle;return(0,s.jsxs)("div",{className:"flex flex-col py-4 mb-4",children:[(0,s.jsx)("h1",{className:"text-lg text-default font-bold font-poppins",children:t}),(0,s.jsx)("h2",{className:"text-sm text-secondary",children:i})]})}},43632:function(e,t,i){"use strict";i.r(t);var s=i(47568),r=i(20414),a=i(85893),n=i(67294),l=i(12596),c=i(14101),d=(i(64298),i(34120)),x=i(11163),m=(i(5556),i(94379)),o=i(30882);t.default=(0,d.X)((function(){var e=(0,x.useRouter)().query.viewID,t=(0,n.useState)({}),i=t[0],d=t[1],h=(0,n.useState)(void 0),u=h[0],f=h[1],v=function(){var t=(0,s.Z)((function(){var t;return(0,r.__generator)(this,(function(i){switch(i.label){case 0:return t=localStorage.getItem("token"),[4,o.ax.get("/integrations/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){d(e.data.integration)})).catch((function(e){f({type:"error",err:e}),console.error("get /integrations error",e)}))];case 1:i.sent(),i.label=2;case 2:return[2]}}))}));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){v()}),[]),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{title:"View Integration",subtitle:""}),"error"===(null===u||void 0===u?void 0:u.type)&&(0,a.jsx)("div",{className:"flex flex-wrap w-full",children:(0,a.jsx)("div",{className:"p-2",children:m.fn.error(errors,"Error")})}),(0,a.jsxs)("div",{className:"p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700",children:[(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Name"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.name})})]})})})}),(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Slug"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.slug})})]})})})}),(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Channel Slug"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.channel_slug})})]})})})}),(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Icon Url"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.icon_url})})]})})})}),(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Description"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.description})})]})})})}),(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Api Url"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.api_url})})]})})})}),(0,a.jsx)("div",{className:"flow-root",children:(0,a.jsx)("ul",{role:"list",className:"divide-y divide-gray-200 dark:divide-gray-700",children:(0,a.jsx)("li",{className:"py-3 sm:py-4",children:(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"flex-1 min-w-0",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:"Http Method"})}),(0,a.jsx)("div",{className:"inline-flex items-center text-base font-semibold text-gray-900 dark:text-white",children:(0,a.jsx)("p",{className:"text-sm font-medium text-gray-900 truncate dark:text-white",children:i.http_method})})]})})})})]})]})}))}},function(e){e.O(0,[5367,196,9350,4298,7106,9774,2888,179],(function(){return t=49177,e(e.s=t);var t}));var t=e.O();_N_E=t}]);